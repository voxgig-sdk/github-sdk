# Github TypeScript SDK Reference

Complete API reference for the Github TypeScript SDK.


## GithubSDK

### Constructor

```ts
new GithubSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GithubSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = GithubSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `GithubSDK` instance in test mode.


### Instance Methods

#### `Action(data?: object)`

Create a new `Action` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionEntity` instance.

#### `ActionsArtifactAndLogRetention(data?: object)`

Create a new `ActionsArtifactAndLogRetention` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsArtifactAndLogRetentionEntity` instance.

#### `ActionsCacheList(data?: object)`

Create a new `ActionsCacheList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsCacheListEntity` instance.

#### `ActionsCacheUsageByRepository(data?: object)`

Create a new `ActionsCacheUsageByRepository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsCacheUsageByRepositoryEntity` instance.

#### `ActionsCacheUsageOrgEnterprise(data?: object)`

Create a new `ActionsCacheUsageOrgEnterprise` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsCacheUsageOrgEnterpriseEntity` instance.

#### `ActionsForkPrContributorApproval(data?: object)`

Create a new `ActionsForkPrContributorApproval` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsForkPrContributorApprovalEntity` instance.

#### `ActionsForkPrWorkflowsPrivateRepo(data?: object)`

Create a new `ActionsForkPrWorkflowsPrivateRepo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsForkPrWorkflowsPrivateRepoEntity` instance.

#### `ActionsGetDefaultWorkflowPermission(data?: object)`

Create a new `ActionsGetDefaultWorkflowPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsGetDefaultWorkflowPermissionEntity` instance.

#### `ActionsHostedRunner(data?: object)`

Create a new `ActionsHostedRunner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsHostedRunnerEntity` instance.

#### `ActionsHostedRunnerLimit(data?: object)`

Create a new `ActionsHostedRunnerLimit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsHostedRunnerLimitEntity` instance.

#### `ActionsOrganizationPermission(data?: object)`

Create a new `ActionsOrganizationPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsOrganizationPermissionEntity` instance.

#### `ActionsPublicKey(data?: object)`

Create a new `ActionsPublicKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsPublicKeyEntity` instance.

#### `ActionsRepositoryPermission(data?: object)`

Create a new `ActionsRepositoryPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsRepositoryPermissionEntity` instance.

#### `ActionsSecret(data?: object)`

Create a new `ActionsSecret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsSecretEntity` instance.

#### `ActionsVariable(data?: object)`

Create a new `ActionsVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsVariableEntity` instance.

#### `ActionsWorkflowAccessToRepository(data?: object)`

Create a new `ActionsWorkflowAccessToRepository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsWorkflowAccessToRepositoryEntity` instance.

#### `Activity(data?: object)`

Create a new `Activity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivityEntity` instance.

#### `Add(data?: object)`

Create a new `Add` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AddEntity` instance.

#### `ApiInsightsRouteStat(data?: object)`

Create a new `ApiInsightsRouteStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiInsightsRouteStatEntity` instance.

#### `ApiInsightsSubjectStat(data?: object)`

Create a new `ApiInsightsSubjectStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiInsightsSubjectStatEntity` instance.

#### `ApiInsightsSummaryStat(data?: object)`

Create a new `ApiInsightsSummaryStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiInsightsSummaryStatEntity` instance.

#### `ApiInsightsTimeStat(data?: object)`

Create a new `ApiInsightsTimeStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiInsightsTimeStatEntity` instance.

#### `ApiInsightsUserStat(data?: object)`

Create a new `ApiInsightsUserStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiInsightsUserStatEntity` instance.

#### `ApiOverview(data?: object)`

Create a new `ApiOverview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiOverviewEntity` instance.

#### `App(data?: object)`

Create a new `App` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AppEntity` instance.

#### `Artifact(data?: object)`

Create a new `Artifact` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArtifactEntity` instance.

#### `Assignee(data?: object)`

Create a new `Assignee` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssigneeEntity` instance.

#### `AuthenticationToken(data?: object)`

Create a new `AuthenticationToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthenticationTokenEntity` instance.

#### `Authorization(data?: object)`

Create a new `Authorization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthorizationEntity` instance.

#### `Autolink(data?: object)`

Create a new `Autolink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutolinkEntity` instance.

#### `BaseGist(data?: object)`

Create a new `BaseGist` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BaseGistEntity` instance.

#### `BillingUsageReport(data?: object)`

Create a new `BillingUsageReport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillingUsageReportEntity` instance.

#### `BillingUsageReportUser(data?: object)`

Create a new `BillingUsageReportUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillingUsageReportUserEntity` instance.

#### `Blob(data?: object)`

Create a new `Blob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BlobEntity` instance.

#### `Block(data?: object)`

Create a new `Block` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BlockEntity` instance.

#### `Branch(data?: object)`

Create a new `Branch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchEntity` instance.

#### `BranchProtection(data?: object)`

Create a new `BranchProtection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchProtectionEntity` instance.

#### `BranchRestrictionPolicy(data?: object)`

Create a new `BranchRestrictionPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchRestrictionPolicyEntity` instance.

#### `BranchShort(data?: object)`

Create a new `BranchShort` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchShortEntity` instance.

#### `BranchWithProtection(data?: object)`

Create a new `BranchWithProtection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchWithProtectionEntity` instance.

#### `Campaign(data?: object)`

Create a new `Campaign` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CampaignEntity` instance.

#### `Check(data?: object)`

Create a new `Check` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CheckEntity` instance.

#### `CheckAnnotation(data?: object)`

Create a new `CheckAnnotation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CheckAnnotationEntity` instance.

#### `CheckAutomatedSecurityFix(data?: object)`

Create a new `CheckAutomatedSecurityFix` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CheckAutomatedSecurityFixEntity` instance.

#### `CheckRun(data?: object)`

Create a new `CheckRun` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CheckRunEntity` instance.

#### `CheckSuite(data?: object)`

Create a new `CheckSuite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CheckSuiteEntity` instance.

#### `CheckSuitePreference(data?: object)`

Create a new `CheckSuitePreference` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CheckSuitePreferenceEntity` instance.

#### `Classroom(data?: object)`

Create a new `Classroom` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClassroomEntity` instance.

#### `ClassroomAcceptedAssignment(data?: object)`

Create a new `ClassroomAcceptedAssignment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClassroomAcceptedAssignmentEntity` instance.

#### `ClassroomAssignment(data?: object)`

Create a new `ClassroomAssignment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClassroomAssignmentEntity` instance.

#### `ClassroomAssignmentGrade(data?: object)`

Create a new `ClassroomAssignmentGrade` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClassroomAssignmentGradeEntity` instance.

#### `Clone(data?: object)`

Create a new `Clone` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloneEntity` instance.

#### `CodeFrequency(data?: object)`

Create a new `CodeFrequency` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeFrequencyEntity` instance.

#### `CodeFrequencyStat(data?: object)`

Create a new `CodeFrequencyStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeFrequencyStatEntity` instance.

#### `CodeOfConduct(data?: object)`

Create a new `CodeOfConduct` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeOfConductEntity` instance.

#### `CodeScanning(data?: object)`

Create a new `CodeScanning` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningEntity` instance.

#### `CodeScanningAlert(data?: object)`

Create a new `CodeScanningAlert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningAlertEntity` instance.

#### `CodeScanningAlertInstance(data?: object)`

Create a new `CodeScanningAlertInstance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningAlertInstanceEntity` instance.

#### `CodeScanningAlertItem(data?: object)`

Create a new `CodeScanningAlertItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningAlertItemEntity` instance.

#### `CodeScanningAnalysi(data?: object)`

Create a new `CodeScanningAnalysi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningAnalysiEntity` instance.

#### `CodeScanningAnalysisDeletion(data?: object)`

Create a new `CodeScanningAnalysisDeletion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningAnalysisDeletionEntity` instance.

#### `CodeScanningAutofix(data?: object)`

Create a new `CodeScanningAutofix` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningAutofixEntity` instance.

#### `CodeScanningAutofixCommit(data?: object)`

Create a new `CodeScanningAutofixCommit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningAutofixCommitEntity` instance.

#### `CodeScanningCodeqlDatabase(data?: object)`

Create a new `CodeScanningCodeqlDatabase` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningCodeqlDatabaseEntity` instance.

#### `CodeScanningDefaultSetup(data?: object)`

Create a new `CodeScanningDefaultSetup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningDefaultSetupEntity` instance.

#### `CodeScanningOrganizationAlertItem(data?: object)`

Create a new `CodeScanningOrganizationAlertItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningOrganizationAlertItemEntity` instance.

#### `CodeScanningSarifsStatus(data?: object)`

Create a new `CodeScanningSarifsStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningSarifsStatusEntity` instance.

#### `CodeScanningVariantAnalysi(data?: object)`

Create a new `CodeScanningVariantAnalysi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningVariantAnalysiEntity` instance.

#### `CodeScanningVariantAnalysisRepoTask(data?: object)`

Create a new `CodeScanningVariantAnalysisRepoTask` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeScanningVariantAnalysisRepoTaskEntity` instance.

#### `CodeSecurity(data?: object)`

Create a new `CodeSecurity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeSecurityEntity` instance.

#### `CodeSecurityConfiguration(data?: object)`

Create a new `CodeSecurityConfiguration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeSecurityConfigurationEntity` instance.

#### `CodeSecurityConfigurationRepository(data?: object)`

Create a new `CodeSecurityConfigurationRepository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeSecurityConfigurationRepositoryEntity` instance.

#### `CodeSecurityDefaultConfiguration(data?: object)`

Create a new `CodeSecurityDefaultConfiguration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeSecurityDefaultConfigurationEntity` instance.

#### `CodeownersError(data?: object)`

Create a new `CodeownersError` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodeownersErrorEntity` instance.

#### `Codespace(data?: object)`

Create a new `Codespace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CodespaceEntity` instance.

#### `Collaborator(data?: object)`

Create a new `Collaborator` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CollaboratorEntity` instance.

#### `CombinedBillingUsage(data?: object)`

Create a new `CombinedBillingUsage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CombinedBillingUsageEntity` instance.

#### `CombinedCommitStatus(data?: object)`

Create a new `CombinedCommitStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CombinedCommitStatusEntity` instance.

#### `Commit(data?: object)`

Create a new `Commit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommitEntity` instance.

#### `CommitActivity(data?: object)`

Create a new `CommitActivity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommitActivityEntity` instance.

#### `CommitComment(data?: object)`

Create a new `CommitComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommitCommentEntity` instance.

#### `CommitComparison(data?: object)`

Create a new `CommitComparison` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommitComparisonEntity` instance.

#### `CommunityProfile(data?: object)`

Create a new `CommunityProfile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommunityProfileEntity` instance.

#### `ContentFile(data?: object)`

Create a new `ContentFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContentFileEntity` instance.

#### `ContentTraffic(data?: object)`

Create a new `ContentTraffic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContentTrafficEntity` instance.

#### `Contributor(data?: object)`

Create a new `Contributor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContributorEntity` instance.

#### `Copilot(data?: object)`

Create a new `Copilot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CopilotEntity` instance.

#### `CopilotOrganizationDetail(data?: object)`

Create a new `CopilotOrganizationDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CopilotOrganizationDetailEntity` instance.

#### `CopilotUsageMetricsDay(data?: object)`

Create a new `CopilotUsageMetricsDay` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CopilotUsageMetricsDayEntity` instance.

#### `Credential(data?: object)`

Create a new `Credential` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CredentialEntity` instance.

#### `CustomProperty(data?: object)`

Create a new `CustomProperty` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomPropertyEntity` instance.

#### `CustomPropertyValue(data?: object)`

Create a new `CustomPropertyValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomPropertyValueEntity` instance.

#### `Dependabot(data?: object)`

Create a new `Dependabot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependabotEntity` instance.

#### `DependabotAlert(data?: object)`

Create a new `DependabotAlert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependabotAlertEntity` instance.

#### `DependabotAlertWithRepository(data?: object)`

Create a new `DependabotAlertWithRepository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependabotAlertWithRepositoryEntity` instance.

#### `DependabotPublicKey(data?: object)`

Create a new `DependabotPublicKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependabotPublicKeyEntity` instance.

#### `DependabotRepositoryAccessDetail(data?: object)`

Create a new `DependabotRepositoryAccessDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependabotRepositoryAccessDetailEntity` instance.

#### `DependabotSecret(data?: object)`

Create a new `DependabotSecret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependabotSecretEntity` instance.

#### `DependencyGraph(data?: object)`

Create a new `DependencyGraph` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependencyGraphEntity` instance.

#### `DependencyGraphDiff(data?: object)`

Create a new `DependencyGraphDiff` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependencyGraphDiffEntity` instance.

#### `DependencyGraphSpdxSbom(data?: object)`

Create a new `DependencyGraphSpdxSbom` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependencyGraphSpdxSbomEntity` instance.

#### `DeployKey(data?: object)`

Create a new `DeployKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeployKeyEntity` instance.

#### `Deployment(data?: object)`

Create a new `Deployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentEntity` instance.

#### `DeploymentBranchPolicy(data?: object)`

Create a new `DeploymentBranchPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentBranchPolicyEntity` instance.

#### `DeploymentProtectionRule(data?: object)`

Create a new `DeploymentProtectionRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentProtectionRuleEntity` instance.

#### `DeploymentStatus(data?: object)`

Create a new `DeploymentStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentStatusEntity` instance.

#### `DiffEntry(data?: object)`

Create a new `DiffEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DiffEntryEntity` instance.

#### `Email(data?: object)`

Create a new `Email` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailEntity` instance.

#### `Emoji(data?: object)`

Create a new `Emoji` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmojiEntity` instance.

#### `EmptyObject(data?: object)`

Create a new `EmptyObject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmptyObjectEntity` instance.

#### `EnterpriseTeam(data?: object)`

Create a new `EnterpriseTeam` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnterpriseTeamEntity` instance.

#### `EnterpriseTeamMembership(data?: object)`

Create a new `EnterpriseTeamMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnterpriseTeamMembershipEntity` instance.

#### `Environment(data?: object)`

Create a new `Environment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvironmentEntity` instance.

#### `EnvironmentApproval(data?: object)`

Create a new `EnvironmentApproval` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvironmentApprovalEntity` instance.

#### `Event(data?: object)`

Create a new `Event` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventEntity` instance.

#### `Feed(data?: object)`

Create a new `Feed` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeedEntity` instance.

#### `FileCommit(data?: object)`

Create a new `FileCommit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FileCommitEntity` instance.

#### `Follower(data?: object)`

Create a new `Follower` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FollowerEntity` instance.

#### `Following(data?: object)`

Create a new `Following` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FollowingEntity` instance.

#### `FullRepository(data?: object)`

Create a new `FullRepository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FullRepositoryEntity` instance.

#### `Gist(data?: object)`

Create a new `Gist` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GistEntity` instance.

#### `GistComment(data?: object)`

Create a new `GistComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GistCommentEntity` instance.

#### `GistCommit(data?: object)`

Create a new `GistCommit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GistCommitEntity` instance.

#### `GistSimple(data?: object)`

Create a new `GistSimple` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GistSimpleEntity` instance.

#### `Git(data?: object)`

Create a new `Git` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitEntity` instance.

#### `GitCommit(data?: object)`

Create a new `GitCommit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitCommitEntity` instance.

#### `GitRef(data?: object)`

Create a new `GitRef` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitRefEntity` instance.

#### `GitTag(data?: object)`

Create a new `GitTag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitTagEntity` instance.

#### `GitTree(data?: object)`

Create a new `GitTree` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitTreeEntity` instance.

#### `Gitignore(data?: object)`

Create a new `Gitignore` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitignoreEntity` instance.

#### `GitignoreTemplate(data?: object)`

Create a new `GitignoreTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitignoreTemplateEntity` instance.

#### `GlobalAdvisory(data?: object)`

Create a new `GlobalAdvisory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GlobalAdvisoryEntity` instance.

#### `GpgKey(data?: object)`

Create a new `GpgKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GpgKeyEntity` instance.

#### `Hook(data?: object)`

Create a new `Hook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HookEntity` instance.

#### `HookDelivery(data?: object)`

Create a new `HookDelivery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HookDeliveryEntity` instance.

#### `HookDeliveryItem(data?: object)`

Create a new `HookDeliveryItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HookDeliveryItemEntity` instance.

#### `HostedCompute(data?: object)`

Create a new `HostedCompute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HostedComputeEntity` instance.

#### `Hovercard(data?: object)`

Create a new `Hovercard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HovercardEntity` instance.

#### `Import(data?: object)`

Create a new `Import` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImportEntity` instance.

#### `Installation(data?: object)`

Create a new `Installation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InstallationEntity` instance.

#### `InstallationToken(data?: object)`

Create a new `InstallationToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InstallationTokenEntity` instance.

#### `Integration(data?: object)`

Create a new `Integration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationEntity` instance.

#### `IntegrationInstallation(data?: object)`

Create a new `IntegrationInstallation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationInstallationEntity` instance.

#### `Interaction(data?: object)`

Create a new `Interaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InteractionEntity` instance.

#### `InteractionLimit(data?: object)`

Create a new `InteractionLimit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InteractionLimitEntity` instance.

#### `Issue(data?: object)`

Create a new `Issue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssueEntity` instance.

#### `IssueType(data?: object)`

Create a new `IssueType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssueTypeEntity` instance.

#### `Job(data?: object)`

Create a new `Job` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JobEntity` instance.

#### `Key(data?: object)`

Create a new `Key` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KeyEntity` instance.

#### `Label(data?: object)`

Create a new `Label` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LabelEntity` instance.

#### `Language(data?: object)`

Create a new `Language` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LanguageEntity` instance.

#### `License(data?: object)`

Create a new `License` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LicenseEntity` instance.

#### `Markdown(data?: object)`

Create a new `Markdown` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MarkdownEntity` instance.

#### `MarketplaceListingPlan(data?: object)`

Create a new `MarketplaceListingPlan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MarketplaceListingPlanEntity` instance.

#### `MarketplacePurchase(data?: object)`

Create a new `MarketplacePurchase` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MarketplacePurchaseEntity` instance.

#### `Member(data?: object)`

Create a new `Member` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemberEntity` instance.

#### `Membership(data?: object)`

Create a new `Membership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MembershipEntity` instance.

#### `MergedUpstream(data?: object)`

Create a new `MergedUpstream` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MergedUpstreamEntity` instance.

#### `Meta(data?: object)`

Create a new `Meta` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MetaEntity` instance.

#### `Metaroot(data?: object)`

Create a new `Metaroot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MetarootEntity` instance.

#### `Migration(data?: object)`

Create a new `Migration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MigrationEntity` instance.

#### `Milestone(data?: object)`

Create a new `Milestone` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MilestoneEntity` instance.

#### `MinimalRepository(data?: object)`

Create a new `MinimalRepository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MinimalRepositoryEntity` instance.

#### `NetworkConfiguration(data?: object)`

Create a new `NetworkConfiguration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkConfigurationEntity` instance.

#### `NetworkSetting(data?: object)`

Create a new `NetworkSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkSettingEntity` instance.

#### `OidcCustomSub(data?: object)`

Create a new `OidcCustomSub` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OidcCustomSubEntity` instance.

#### `OidcCustomSubRepo(data?: object)`

Create a new `OidcCustomSubRepo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OidcCustomSubRepoEntity` instance.

#### `Org(data?: object)`

Create a new `Org` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgEntity` instance.

#### `OrgHook(data?: object)`

Create a new `OrgHook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgHookEntity` instance.

#### `OrgMembership(data?: object)`

Create a new `OrgMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgMembershipEntity` instance.

#### `OrgPrivateRegistryConfiguration(data?: object)`

Create a new `OrgPrivateRegistryConfiguration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgPrivateRegistryConfigurationEntity` instance.

#### `OrgPrivateRegistryConfigurationWithSelectedRepository(data?: object)`

Create a new `OrgPrivateRegistryConfigurationWithSelectedRepository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` instance.

#### `OrgRepoCustomPropertyValue(data?: object)`

Create a new `OrgRepoCustomPropertyValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgRepoCustomPropertyValueEntity` instance.

#### `Organization(data?: object)`

Create a new `Organization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationEntity` instance.

#### `OrganizationActionsSecret(data?: object)`

Create a new `OrganizationActionsSecret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationActionsSecretEntity` instance.

#### `OrganizationActionsVariable(data?: object)`

Create a new `OrganizationActionsVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationActionsVariableEntity` instance.

#### `OrganizationDependabotSecret(data?: object)`

Create a new `OrganizationDependabotSecret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationDependabotSecretEntity` instance.

#### `OrganizationInvitation(data?: object)`

Create a new `OrganizationInvitation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationInvitationEntity` instance.

#### `OrganizationProgrammaticAccessGrant(data?: object)`

Create a new `OrganizationProgrammaticAccessGrant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationProgrammaticAccessGrantEntity` instance.

#### `OrganizationRole(data?: object)`

Create a new `OrganizationRole` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationRoleEntity` instance.

#### `OrganizationSecretScanningAlert(data?: object)`

Create a new `OrganizationSecretScanningAlert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationSecretScanningAlertEntity` instance.

#### `OutsideCollaborator(data?: object)`

Create a new `OutsideCollaborator` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OutsideCollaboratorEntity` instance.

#### `Package(data?: object)`

Create a new `Package` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PackageEntity` instance.

#### `Page(data?: object)`

Create a new `Page` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PageEntity` instance.

#### `PageBuild(data?: object)`

Create a new `PageBuild` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PageBuildEntity` instance.

#### `PageBuildStatus(data?: object)`

Create a new `PageBuildStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PageBuildStatusEntity` instance.

#### `PageDeployment(data?: object)`

Create a new `PageDeployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PageDeploymentEntity` instance.

#### `PagesDeploymentStatus(data?: object)`

Create a new `PagesDeploymentStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PagesDeploymentStatusEntity` instance.

#### `PagesHealthCheck(data?: object)`

Create a new `PagesHealthCheck` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PagesHealthCheckEntity` instance.

#### `Participation(data?: object)`

Create a new `Participation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ParticipationEntity` instance.

#### `PendingDeployment(data?: object)`

Create a new `PendingDeployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PendingDeploymentEntity` instance.

#### `PorterAuthor(data?: object)`

Create a new `PorterAuthor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PorterAuthorEntity` instance.

#### `PorterLargeFile(data?: object)`

Create a new `PorterLargeFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PorterLargeFileEntity` instance.

#### `PrivateRegistry(data?: object)`

Create a new `PrivateRegistry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PrivateRegistryEntity` instance.

#### `PrivateUser(data?: object)`

Create a new `PrivateUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PrivateUserEntity` instance.

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `ProjectCollaboratorPermission(data?: object)`

Create a new `ProjectCollaboratorPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectCollaboratorPermissionEntity` instance.

#### `ProjectColumn(data?: object)`

Create a new `ProjectColumn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectColumnEntity` instance.

#### `ProjectsClassic(data?: object)`

Create a new `ProjectsClassic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectsClassicEntity` instance.

#### `ProjectsV2(data?: object)`

Create a new `ProjectsV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectsV2Entity` instance.

#### `ProjectsV2Field(data?: object)`

Create a new `ProjectsV2Field` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectsV2FieldEntity` instance.

#### `ProjectsV2ItemSimple(data?: object)`

Create a new `ProjectsV2ItemSimple` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectsV2ItemSimpleEntity` instance.

#### `ProjectsV2ItemWithContent(data?: object)`

Create a new `ProjectsV2ItemWithContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectsV2ItemWithContentEntity` instance.

#### `ProtectedBranch(data?: object)`

Create a new `ProtectedBranch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProtectedBranchEntity` instance.

#### `ProtectedBranchAdminEnforced(data?: object)`

Create a new `ProtectedBranchAdminEnforced` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProtectedBranchAdminEnforcedEntity` instance.

#### `ProtectedBranchPullRequestReview(data?: object)`

Create a new `ProtectedBranchPullRequestReview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProtectedBranchPullRequestReviewEntity` instance.

#### `PublicMember(data?: object)`

Create a new `PublicMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicMemberEntity` instance.

#### `Pull(data?: object)`

Create a new `Pull` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PullEntity` instance.

#### `PullRequestReview(data?: object)`

Create a new `PullRequestReview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PullRequestReviewEntity` instance.

#### `PullRequestReviewComment(data?: object)`

Create a new `PullRequestReviewComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PullRequestReviewCommentEntity` instance.

#### `PullRequestSimple(data?: object)`

Create a new `PullRequestSimple` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PullRequestSimpleEntity` instance.

#### `RateLimit(data?: object)`

Create a new `RateLimit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RateLimitEntity` instance.

#### `Reaction(data?: object)`

Create a new `Reaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReactionEntity` instance.

#### `Referrer(data?: object)`

Create a new `Referrer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReferrerEntity` instance.

#### `Release(data?: object)`

Create a new `Release` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReleaseEntity` instance.

#### `ReleaseAsset(data?: object)`

Create a new `ReleaseAsset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReleaseAssetEntity` instance.

#### `ReleaseNotesContent(data?: object)`

Create a new `ReleaseNotesContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReleaseNotesContentEntity` instance.

#### `Remove(data?: object)`

Create a new `Remove` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveEntity` instance.

#### `Repo(data?: object)`

Create a new `Repo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepoEntity` instance.

#### `Repository(data?: object)`

Create a new `Repository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryEntity` instance.

#### `RepositoryAdvisory(data?: object)`

Create a new `RepositoryAdvisory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryAdvisoryEntity` instance.

#### `RepositoryCollaboratorPermission(data?: object)`

Create a new `RepositoryCollaboratorPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryCollaboratorPermissionEntity` instance.

#### `RepositoryInvitation(data?: object)`

Create a new `RepositoryInvitation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryInvitationEntity` instance.

#### `RepositoryRuleDetailed(data?: object)`

Create a new `RepositoryRuleDetailed` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryRuleDetailedEntity` instance.

#### `RepositoryRuleset(data?: object)`

Create a new `RepositoryRuleset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryRulesetEntity` instance.

#### `RepositorySubscription(data?: object)`

Create a new `RepositorySubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositorySubscriptionEntity` instance.

#### `ReviewComment(data?: object)`

Create a new `ReviewComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReviewCommentEntity` instance.

#### `RuleSuite(data?: object)`

Create a new `RuleSuite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RuleSuiteEntity` instance.

#### `RulesetVersion(data?: object)`

Create a new `RulesetVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RulesetVersionEntity` instance.

#### `RulesetVersionWithState(data?: object)`

Create a new `RulesetVersionWithState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RulesetVersionWithStateEntity` instance.

#### `Runner(data?: object)`

Create a new `Runner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RunnerEntity` instance.

#### `RunnerApplication(data?: object)`

Create a new `RunnerApplication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RunnerApplicationEntity` instance.

#### `RunnerGroup(data?: object)`

Create a new `RunnerGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RunnerGroupEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `SecretScanning(data?: object)`

Create a new `SecretScanning` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretScanningEntity` instance.

#### `SecretScanningAlert(data?: object)`

Create a new `SecretScanningAlert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretScanningAlertEntity` instance.

#### `SecretScanningLocation(data?: object)`

Create a new `SecretScanningLocation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretScanningLocationEntity` instance.

#### `SecretScanningPatternConfiguration(data?: object)`

Create a new `SecretScanningPatternConfiguration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretScanningPatternConfigurationEntity` instance.

#### `SecretScanningPushProtectionBypass(data?: object)`

Create a new `SecretScanningPushProtectionBypass` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretScanningPushProtectionBypassEntity` instance.

#### `SecretScanningScanHistory(data?: object)`

Create a new `SecretScanningScanHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretScanningScanHistoryEntity` instance.

#### `SecurityAdvisory(data?: object)`

Create a new `SecurityAdvisory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecurityAdvisoryEntity` instance.

#### `SelectedAction(data?: object)`

Create a new `SelectedAction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SelectedActionEntity` instance.

#### `SelfHostedRunner(data?: object)`

Create a new `SelfHostedRunner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SelfHostedRunnerEntity` instance.

#### `ShortBlob(data?: object)`

Create a new `ShortBlob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ShortBlobEntity` instance.

#### `ShortBranch(data?: object)`

Create a new `ShortBranch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ShortBranchEntity` instance.

#### `SimpleClassroom(data?: object)`

Create a new `SimpleClassroom` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SimpleClassroomEntity` instance.

#### `SimpleClassroomAssignment(data?: object)`

Create a new `SimpleClassroomAssignment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SimpleClassroomAssignmentEntity` instance.

#### `SocialAccount(data?: object)`

Create a new `SocialAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SocialAccountEntity` instance.

#### `SshSigningKey(data?: object)`

Create a new `SshSigningKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SshSigningKeyEntity` instance.

#### `Status(data?: object)`

Create a new `Status` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusEntity` instance.

#### `StatusCheckPolicy(data?: object)`

Create a new `StatusCheckPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusCheckPolicyEntity` instance.

#### `Subscriber(data?: object)`

Create a new `Subscriber` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriberEntity` instance.

#### `Tag(data?: object)`

Create a new `Tag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TagEntity` instance.

#### `TagProtection(data?: object)`

Create a new `TagProtection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TagProtectionEntity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

#### `TeamSimple(data?: object)`

Create a new `TeamSimple` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamSimpleEntity` instance.

#### `Thread(data?: object)`

Create a new `Thread` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ThreadEntity` instance.

#### `ThreadSubscription(data?: object)`

Create a new `ThreadSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ThreadSubscriptionEntity` instance.

#### `Topic(data?: object)`

Create a new `Topic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TopicEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `UserMarketplacePurchase(data?: object)`

Create a new `UserMarketplacePurchase` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserMarketplacePurchaseEntity` instance.

#### `View(data?: object)`

Create a new `View` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewEntity` instance.

#### `WebhookConfig(data?: object)`

Create a new `WebhookConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookConfigEntity` instance.

#### `Workflow(data?: object)`

Create a new `Workflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowEntity` instance.

#### `WorkflowRun(data?: object)`

Create a new `WorkflowRun` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowRunEntity` instance.

#### `WorkflowRunUsage(data?: object)`

Create a new `WorkflowRunUsage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowRunUsageEntity` instance.

#### `WorkflowUsage(data?: object)`

Create a new `WorkflowUsage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowUsageEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `GithubSDK.test()`.

**Returns:** `GithubSDK` instance in test mode.


---

## ActionEntity

```ts
const action = client.Action()
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
| `actor` | `Record<string, any>` | Yes | A GitHub user. |
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
| `code_of_conduct` | `Record<string, any>` | Yes | Code Of Conduct |
| `code_search_index_status` | `Record<string, any>` | No | The status of the code search index for this repository |
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
| `custom_properties` | `Record<string, any>` | No | The custom properties that were defined for the repository. |
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
| `head_commit` | `Record<string, any>` | Yes | A commit. |
| `head_repository` | `Record<string, any>` | Yes | Minimal Repository |
| `head_repository_id` | `number` | No |  |
| `head_sha` | `string` | Yes | The SHA of the head commit that points to the version of the workflow being run. |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `hosted_runners_url` | `string` | No |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The ID of the workflow run. |
| `image_details` | `Record<string, any>` | Yes | Provides details of a hosted runner image |
| `inherited` | `boolean` | Yes |  |
| `inherited_allows_public_repositories` | `boolean` | No |  |
| `inputs` | `Record<string, any>` | No | Input keys and values configured in the workflow file. |
| `is_template` | `boolean` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `jobs_url` | `string` | Yes | The URL to the jobs for the workflow run. |
| `keys_url` | `string` | Yes |  |
| `labels` | `any[]` | Yes | The names of the custom labels to add to the runner. |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `last_active_on` | `string` | No | The time at which the runner was last used, in ISO 8601 format. |
| `license` | `Record<string, any>` | No | License Simple |
| `logs_url` | `string` | Yes | The URL to download the logs for the workflow run. |
| `machine_size_details` | `Record<string, any>` | Yes | Provides details of a particular machine spec. |
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
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `path` | `string` | Yes | The full path of the workflow |
| `patterns_allowed` | `any[]` | No | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `permissions` | `Record<string, any>` | No |  |
| `platform` | `string` | Yes | The operating system of the image. |
| `platforms` | `any[]` | Yes |  |
| `previous_attempt_url` | `string` | No | The URL to the previous attempted run of this workflow, if one exists. |
| `private` | `boolean` | Yes | Whether the repository is private or public. |
| `public_ip_enabled` | `boolean` | Yes | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `any[]` | No | The public IP ranges when public IP is enabled for the hosted runners. |
| `pull_requests` | `any[]` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `ref` | `string` | Yes | The git reference for the workflow. |
| `referenced_workflows` | `any[]` | No |  |
| `releases_url` | `string` | Yes |  |
| `repository` | `Record<string, any>` | Yes | Minimal Repository |
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
| `runners` | `any[]` | Yes | List of runner IDs to add to the runner group. |
| `runners_url` | `string` | Yes |  |
| `security_and_analysis` | `Record<string, any>` | No |  |
| `selected_repositories_url` | `string` | No | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `any[]` | Yes | The IDs of the repositories that can access the organization variable. |
| `selected_workflows` | `any[]` | No | List of workflows the runner group should be allowed to run. |
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
| `steps` | `any[]` | No | Steps in this job. |
| `storage_gb` | `number` | Yes | The available SSD storage for the machine spec. |
| `subscribers_count` | `number` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `any[]` | No |  |
| `total` | `number` | No | Total minutes used on all runner machines. |
| `total_count` | `number` | Yes |  |
| `trees_url` | `string` | Yes |  |
| `triggering_actor` | `Record<string, any>` | Yes | A GitHub user. |
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
| `workflow_run` | `Record<string, any>` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `artifact` | `/repos/{owner}/{repo}/actions/artifacts` | `client.Action().list({ $action: 'artifact', ... })` |
| `hosted_runner` | `/orgs/{org}/actions/hosted-runners` | `client.Action().list({ $action: 'hosted_runner', ... })` |
| `organization_secret` | `/repos/{owner}/{repo}/actions/organization-secrets` | `client.Action().list({ $action: 'organization_secret', ... })` |
| `organization_variable` | `/repos/{owner}/{repo}/actions/organization-variables` | `client.Action().list({ $action: 'organization_variable', ... })` |
| `run` | `/repos/{owner}/{repo}/actions/runs` | `client.Action().list({ $action: 'run', ... })` |
| `runner` | `/repos/{owner}/{repo}/actions/runners` | `client.Action().list({ $action: 'runner', ... })` |
| `runner` | `/orgs/{org}/actions/runners` | `client.Action().list({ $action: 'runner', ... })` |
| `runner_group` | `/orgs/{org}/actions/runner-groups` | `client.Action().list({ $action: 'runner_group', ... })` |
| `secret` | `/repos/{owner}/{repo}/actions/secrets` | `client.Action().list({ $action: 'secret', ... })` |
| `secret` | `/orgs/{org}/actions/secrets` | `client.Action().list({ $action: 'secret', ... })` |
| `variable` | `/repos/{owner}/{repo}/actions/variables` | `client.Action().list({ $action: 'variable', ... })` |
| `variable` | `/orgs/{org}/actions/variables` | `client.Action().list({ $action: 'variable', ... })` |
| `workflow` | `/repos/{owner}/{repo}/actions/workflows` | `client.Action().list({ $action: 'workflow', ... })` |
| `permission` | `/repos/{owner}/{repo}/actions/permissions` | `client.Action().update({ $action: 'permission', ... })` |
| `permission` | `/orgs/{org}/actions/permissions` | `client.Action().update({ $action: 'permission', ... })` |

An action returns that action's OWN response, which is not necessarily a
Action record — check the API definition for its shape.

```ts
const result = await client.Action().list({
  $action: 'artifact',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Action().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Action().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Action().load({ archive_format: 'archive_format', artifact_id: 1, owner: 'owner', repo: 'repo' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Action().remove({ hosted_runner_id: 1, org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Action().update({
  org_id: 'org_id',
  repository_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsArtifactAndLogRetentionEntity

```ts
const actions_artifact_and_log_retention = client.ActionsArtifactAndLogRetention()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `number` | Yes | The number of days artifacts and logs are retained |
| `maximum_allowed_days` | `number` | Yes | The maximum number of days that can be configured |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsArtifactAndLogRetention().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsArtifactAndLogRetentionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsCacheListEntity

```ts
const actions_cache_list = client.ActionsCacheList()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ActionsCacheList().list({ owner: "example", repo: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ActionsCacheList().remove({ owner: 'owner', repo: 'repo', key: 'key' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsCacheListEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsCacheUsageByRepositoryEntity

```ts
const actions_cache_usage_by_repository = client.ActionsCacheUsageByRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_caches_count` | `number` | Yes | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `number` | Yes | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | `string` | Yes | The repository owner and name for the cache usage being shown. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsCacheUsageByRepository().load({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsCacheUsageByRepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsCacheUsageOrgEnterpriseEntity

```ts
const actions_cache_usage_org_enterprise = client.ActionsCacheUsageOrgEnterprise()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_active_caches_count` | `number` | Yes | The count of active caches across all repositories of an enterprise or an organization. |
| `total_active_caches_size_in_bytes` | `number` | Yes | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsCacheUsageOrgEnterprise().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsCacheUsageOrgEnterpriseEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsForkPrContributorApprovalEntity

```ts
const actions_fork_pr_contributor_approval = client.ActionsForkPrContributorApproval()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval_policy` | `string` | Yes | The policy that controls when fork PR workflows require approval from a maintainer. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsForkPrContributorApproval().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsForkPrContributorApprovalEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsForkPrWorkflowsPrivateRepoEntity

```ts
const actions_fork_pr_workflows_private_repo = client.ActionsForkPrWorkflowsPrivateRepo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `require_approval_for_fork_pr_workflows` | `boolean` | Yes | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `run_workflows_from_fork_pull_requests` | `boolean` | Yes | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `send_secrets_and_variables` | `boolean` | Yes | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `boolean` | Yes | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsForkPrWorkflowsPrivateRepo().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsForkPrWorkflowsPrivateRepoEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsGetDefaultWorkflowPermissionEntity

```ts
const actions_get_default_workflow_permission = client.ActionsGetDefaultWorkflowPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_approve_pull_request_reviews` | `boolean` | Yes | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | `string` | Yes | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsGetDefaultWorkflowPermission().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsGetDefaultWorkflowPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsHostedRunnerEntity

```ts
const actions_hosted_runner = client.ActionsHostedRunner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable_static_ip` | `boolean` | No | Whether this runner should be created with a static public IP. |
| `id` | `number` | Yes | The unique identifier of the hosted runner. |
| `image` | `Record<string, any>` | Yes | The image of runner. |
| `image_details` | `Record<string, any>` | Yes | Provides details of a hosted runner image |
| `last_active_on` | `string` | No | The time at which the runner was last used, in ISO 8601 format. |
| `machine_size_details` | `Record<string, any>` | Yes | Provides details of a particular machine spec. |
| `maximum_runners` | `number` | No | The maximum amount of hosted runners. |
| `name` | `string` | Yes | The name of the hosted runner. |
| `platform` | `string` | Yes | The operating system of the image. |
| `public_ip_enabled` | `boolean` | Yes | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `any[]` | No | The public IP ranges when public IP is enabled for the hosted runners. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ActionsHostedRunner().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsHostedRunner().load({ id: 1, org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ActionsHostedRunner().update({
  id: 1,
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsHostedRunnerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsHostedRunnerLimitEntity

```ts
const actions_hosted_runner_limit = client.ActionsHostedRunnerLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_usage` | `number` | Yes | The current number of static public IP addresses in use by Hosted Runners. |
| `maximum` | `number` | Yes | The maximum number of static public IP addresses that can be used for Hosted Runners. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsHostedRunnerLimit().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsHostedRunnerLimitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsOrganizationPermissionEntity

```ts
const actions_organization_permission = client.ActionsOrganizationPermission()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsOrganizationPermission().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsOrganizationPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsPublicKeyEntity

```ts
const actions_public_key = client.ActionsPublicKey()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsPublicKey().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsPublicKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsRepositoryPermissionEntity

```ts
const actions_repository_permission = client.ActionsRepositoryPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_actions` | `string` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | `boolean` | Yes | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | `string` | No | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | `boolean` | No | Whether actions must be pinned to a full-length commit SHA. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsRepositoryPermission().load({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsRepositoryPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsSecretEntity

```ts
const actions_secret = client.ActionsSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `updated_at` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsSecret().load({ id: 'actions_secret_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsSecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsVariableEntity

```ts
const actions_variable = client.ActionsVariable()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsVariable().load({ id: 'actions_variable_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsWorkflowAccessToRepositoryEntity

```ts
const actions_workflow_access_to_repository = client.ActionsWorkflowAccessToRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | Yes | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsWorkflowAccessToRepository().load({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsWorkflowAccessToRepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActivityEntity

```ts
const activity = client.Activity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_type` | `string` | Yes | The type of the activity that was performed. |
| `actor` | `Record<string, any>` | Yes | A GitHub user. |
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
| `language` | `Record<string, any>` | No |  |
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
| `owner` | `Record<string, any>` | No |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Activity().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Activity().load({ owner: 'owner', repo: 'repo' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Activity().remove({ thread_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Activity().update({
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivityEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AddEntity

```ts
const add = client.Add()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usernames` | `any[]` | Yes | The GitHub user handles to add to the team. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Add().create({
  enterprise: 'example_enterprise',
  team_id: 'example_team_id',
  usernames: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AddEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiInsightsRouteStatEntity

```ts
const api_insights_route_stat = client.ApiInsightsRouteStat()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiInsightsRouteStat().list({ actor_id: 1, actor_type: "example", org: "example", min_timestamp: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiInsightsRouteStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiInsightsSubjectStatEntity

```ts
const api_insights_subject_stat = client.ApiInsightsSubjectStat()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiInsightsSubjectStat().list({ org_id: "example", min_timestamp: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiInsightsSubjectStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiInsightsSummaryStatEntity

```ts
const api_insights_summary_stat = client.ApiInsightsSummaryStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `rate_limited_request_count` | `number` | No | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `number` | No | The total number of requests within the queried time period |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiInsightsSummaryStat().load({ min_timestamp: 'min_timestamp' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiInsightsSummaryStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiInsightsTimeStatEntity

```ts
const api_insights_time_stat = client.ApiInsightsTimeStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rate_limited_request_count` | `number` | No |  |
| `timestamp` | `string` | No |  |
| `total_request_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiInsightsTimeStat().list({ min_timestamp: "example", timestamp_increment: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiInsightsTimeStat().load({ org_id: 'org_id', user_id: 'user_id', min_timestamp: 'min_timestamp', timestamp_increment: 'timestamp_increment' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiInsightsTimeStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiInsightsUserStatEntity

```ts
const api_insights_user_stat = client.ApiInsightsUserStat()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiInsightsUserStat().load({ id: 'api_insights_user_stat_id', org_id: 'org_id', min_timestamp: 'min_timestamp' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiInsightsUserStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiOverviewEntity

```ts
const api_overview = client.ApiOverview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `any[]` | No |  |
| `actions_macos` | `any[]` | No |  |
| `api` | `any[]` | No |  |
| `codespaces` | `any[]` | No |  |
| `copilot` | `any[]` | No |  |
| `dependabot` | `any[]` | No |  |
| `domains` | `Record<string, any>` | No |  |
| `git` | `any[]` | No |  |
| `github_enterprise_importer` | `any[]` | No |  |
| `hooks` | `any[]` | No |  |
| `importer` | `any[]` | No |  |
| `packages` | `any[]` | No |  |
| `pages` | `any[]` | No |  |
| `ssh_key_fingerprints` | `Record<string, any>` | No |  |
| `ssh_keys` | `any[]` | No |  |
| `verifiable_password_authentication` | `boolean` | Yes |  |
| `web` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiOverview().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiOverviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AppEntity

```ts
const app = client.App()
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
| `code_search_index_status` | `Record<string, any>` | No | The status of the code search index for this repository |
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
| `events` | `any[]` | No |  |
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
| `license` | `Record<string, any>` | Yes | License Simple |
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
| `owner` | `Record<string, any>` | No | A GitHub user. |
| `pem` | `string` | No |  |
| `permissions` | `Record<string, any>` | No | The permissions granted to the user access token. |
| `private` | `boolean` | Yes | Whether the repository is private or public. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `any[]` | No |  |
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
| `suspended_by` | `Record<string, any>` | Yes | A GitHub user. |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `target_id` | `number` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `any[]` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.App().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.App().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.App().remove({ installation_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.App().update({
  installation_id: 1,
  repository_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AppEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ArtifactEntity

```ts
const artifact = client.Artifact()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Artifact().load({ id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssigneeEntity

```ts
const assignee = client.Assignee()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Assignee().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssigneeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthenticationTokenEntity

```ts
const authentication_token = client.AuthenticationToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | No |  |
| `token` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AuthenticationToken().create({
  org_id: 'example_org_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthenticationTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthorizationEntity

```ts
const authorization = client.Authorization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | Yes | The access_token of the OAuth or GitHub application. |
| `app` | `Record<string, any>` | Yes |  |
| `created_at` | `string` | Yes |  |
| `expires_at` | `string` | Yes |  |
| `fingerprint` | `string` | Yes |  |
| `hashed_token` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `installation` | `Record<string, any>` | Yes |  |
| `note` | `string` | Yes |  |
| `note_url` | `string` | Yes |  |
| `permissions` | `Record<string, any>` | No | The permissions granted to the user access token. |
| `repositories` | `any[]` | No | The list of repository names to scope the user access token to. |
| `repository_ids` | `any[]` | No | The list of repository IDs to scope the user access token to. |
| `scopes` | `any[]` | Yes | A list of scopes that this authorization is in. |
| `target` | `string` | No | The name of the user or organization to scope the user access token to. |
| `target_id` | `number` | No | The ID of the user or organization to scope the user access token to. |
| `token` | `string` | Yes |  |
| `token_last_eight` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `Record<string, any>` | Yes | A GitHub user. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Authorization().create({
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

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Authorization().update({
  application_id: 'application_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthorizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutolinkEntity

```ts
const autolink = client.Autolink()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Autolink().create({
  owner: 'example_owner',
  repo: 'example_repo',
  id: 1,
  is_alphanumeric: true,
  key_prefix: 'example_key_prefix',
  url_template: 'example_url_template',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Autolink().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Autolink().load({ id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutolinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BaseGistEntity

```ts
const base_gist = client.BaseGist()
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
| `files` | `Record<string, any>` | No |  |
| `forks` | `any[]` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `any[]` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `Record<string, any>` | No | A GitHub user. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BaseGist().create({
  gist_id: 'example_gist_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BaseGist().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BaseGistEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillingUsageReportEntity

```ts
const billing_usage_report = client.BillingUsageReport()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillingUsageReport().list({ org: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillingUsageReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillingUsageReportUserEntity

```ts
const billing_usage_report_user = client.BillingUsageReportUser()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillingUsageReportUser().list({ username: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillingUsageReportUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BlobEntity

```ts
const blob = client.Blob()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Blob().load({ id: 'blob_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BlobEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BlockEntity

```ts
const block = client.Block()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Block().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BlockEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchEntity

```ts
const branch = client.Branch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `Record<string, any>` | Yes | Commit |
| `id` | `string` | No |  |
| `links` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes |  |
| `pattern` | `string` | No |  |
| `protected` | `boolean` | Yes |  |
| `protection` | `Record<string, any>` | Yes | Branch Protection |
| `protection_url` | `string` | Yes |  |
| `required_approving_review_count` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Branch().load({ id: 'branch_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchProtectionEntity

```ts
const branch_protection = client.BranchProtection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_deletions` | `Record<string, any>` | No |  |
| `allow_force_pushes` | `Record<string, any>` | No |  |
| `allow_fork_syncing` | `Record<string, any>` | No | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `Record<string, any>` | No |  |
| `enabled` | `boolean` | No |  |
| `enforce_admins` | `Record<string, any>` | Yes | Protected Branch Admin Enforced |
| `id` | `string` | No |  |
| `lock_branch` | `Record<string, any>` | No | Whether to set the branch as read-only. |
| `name` | `string` | No |  |
| `protection_url` | `string` | No |  |
| `required_conversation_resolution` | `Record<string, any>` | No |  |
| `required_linear_history` | `Record<string, any>` | No |  |
| `required_pull_request_reviews` | `Record<string, any>` | Yes | Protected Branch Pull Request Review |
| `required_signatures` | `Record<string, any>` | Yes |  |
| `required_status_checks` | `Record<string, any>` | Yes | Protected Branch Required Status Check |
| `restrictions` | `Record<string, any>` | Yes | Branch Restriction Policy |
| `url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BranchProtection().load({ id: 'branch_protection_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchProtectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchRestrictionPolicyEntity

```ts
const branch_restriction_policy = client.BranchRestrictionPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apps` | `any[]` | Yes |  |
| `apps_url` | `string` | Yes |  |
| `teams` | `any[]` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `users` | `any[]` | Yes |  |
| `users_url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BranchRestrictionPolicy().list({ branch_id: "example", owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchRestrictionPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchShortEntity

```ts
const branch_short = client.BranchShort()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes |  |
| `protected` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BranchShort().list({ commit_sha: "example", owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchShortEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchWithProtectionEntity

```ts
const branch_with_protection = client.BranchWithProtection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `new_name` | `string` | Yes | The new name of the branch. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `rename` | `/repos/{owner}/{repo}/branches/{branch}/rename` | `client.BranchWithProtection().create({ $action: 'rename', ... })` |

An action returns that action's OWN response, which is not necessarily a
BranchWithProtection record — check the API definition for its shape.

```ts
const result = await client.BranchWithProtection().create({
  $action: 'rename',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BranchWithProtection().create({
  id: 'example_id',
  owner: 'example_owner',
  repo: 'example_repo',
  new_name: 'example_new_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchWithProtectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CampaignEntity

```ts
const campaign = client.Campaign()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_stats` | `Record<string, any>` | Yes |  |
| `closed_at` | `string` | No | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `code_scanning_alerts` | `any[]` | Yes | The code scanning alerts to include in this campaign |
| `contact_link` | `string` | Yes | The contact link of the campaign. |
| `created_at` | `string` | Yes | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `description` | `string` | Yes | The campaign description |
| `ends_at` | `string` | Yes | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `generate_issues` | `boolean` | No | If true, will automatically generate issues for the campaign. |
| `id` | `string` | No |  |
| `managers` | `any[]` | Yes | The campaign managers |
| `name` | `string` | No | The campaign name |
| `number` | `number` | Yes | The number of the newly created campaign |
| `published_at` | `string` | No | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `state` | `string` | Yes | Indicates whether a campaign is open or closed |
| `team_managers` | `any[]` | No | The campaign team managers |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Campaign().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Campaign().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Campaign().load({ id: 1, org_id: 'org_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Campaign().remove({ id: 1, org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Campaign().update({
  id: 1,
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CampaignEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CheckEntity

```ts
const check = client.Check()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after` | `string` | Yes |  |
| `app` | `Record<string, any>` | Yes | GitHub apps are a new way to extend GitHub. |
| `before` | `string` | Yes |  |
| `check_runs_url` | `string` | Yes |  |
| `check_suite` | `Record<string, any>` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `conclusion` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deployment` | `Record<string, any>` | Yes | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `head_branch` | `string` | Yes |  |
| `head_commit` | `Record<string, any>` | Yes | A commit. |
| `head_sha` | `string` | Yes | The SHA of the commit that is being checked. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The id of the check. |
| `latest_check_runs_count` | `number` | Yes |  |
| `name` | `string` | Yes | The name of the check. |
| `node_id` | `string` | Yes |  |
| `output` | `Record<string, any>` | Yes |  |
| `pull_requests` | `any[]` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `repository` | `Record<string, any>` | Yes | Minimal Repository |
| `rerequestable` | `boolean` | No |  |
| `runs_rerequestable` | `boolean` | No |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes | The phase of the lifecycle that the check is currently in. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Check().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CheckEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CheckAnnotationEntity

```ts
const check_annotation = client.CheckAnnotation()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CheckAnnotation().list({ check_run_id: 1, owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CheckAnnotationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CheckAutomatedSecurityFixEntity

```ts
const check_automated_security_fix = client.CheckAutomatedSecurityFix()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Whether Dependabot security updates are enabled for the repository. |
| `paused` | `boolean` | Yes | Whether Dependabot security updates are paused for the repository. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CheckAutomatedSecurityFix().load({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CheckAutomatedSecurityFixEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CheckRunEntity

```ts
const check_run = client.CheckRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `any[]` | No | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `app` | `Record<string, any>` | Yes | GitHub apps are a new way to extend GitHub. |
| `check_suite` | `Record<string, any>` | Yes |  |
| `completed_at` | `string` | Yes | The time the check completed. |
| `conclusion` | `string` | Yes | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `deployment` | `Record<string, any>` | Yes | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | Yes | The URL of the integrator's site that has the full details of the check. |
| `external_id` | `string` | Yes | A reference for the run on the integrator's system. |
| `head_sha` | `string` | Yes | The SHA of the commit that is being checked. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The id of the check. |
| `name` | `string` | Yes | The name of the check. |
| `node_id` | `string` | Yes |  |
| `output` | `Record<string, any>` | Yes | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `pull_requests` | `any[]` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CheckRun().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CheckRun().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CheckRun().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CheckRunEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CheckSuiteEntity

```ts
const check_suite = client.CheckSuite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after` | `string` | Yes |  |
| `app` | `Record<string, any>` | Yes | GitHub apps are a new way to extend GitHub. |
| `before` | `string` | Yes |  |
| `check_runs_url` | `string` | Yes |  |
| `conclusion` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `head_branch` | `string` | Yes |  |
| `head_commit` | `Record<string, any>` | Yes | A commit. |
| `head_sha` | `string` | Yes | The SHA of the head commit that is being checked. |
| `id` | `number` | Yes |  |
| `latest_check_runs_count` | `number` | Yes |  |
| `node_id` | `string` | Yes |  |
| `pull_requests` | `any[]` | Yes |  |
| `repository` | `Record<string, any>` | Yes | Minimal Repository |
| `rerequestable` | `boolean` | No |  |
| `runs_rerequestable` | `boolean` | No |  |
| `status` | `string` | Yes | The phase of the lifecycle that the check suite is currently in. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CheckSuite().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CheckSuite().load({ id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CheckSuiteEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CheckSuitePreferenceEntity

```ts
const check_suite_preference = client.CheckSuitePreference()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_trigger_checks` | `any[]` | No | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` | `Record<string, any>` | Yes |  |
| `repository` | `Record<string, any>` | Yes | Minimal Repository |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CheckSuitePreference().update({
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CheckSuitePreferenceEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClassroomEntity

```ts
const classroom = client.Classroom()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Classroom().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Classroom().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClassroomEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClassroomAcceptedAssignmentEntity

```ts
const classroom_accepted_assignment = client.ClassroomAcceptedAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment` | `Record<string, any>` | Yes | A GitHub Classroom assignment |
| `commit_count` | `number` | Yes | Count of student commits. |
| `grade` | `string` | Yes | Most recent grade. |
| `id` | `number` | Yes | Unique identifier of the repository. |
| `passing` | `boolean` | Yes | Whether a submission passed. |
| `repository` | `Record<string, any>` | Yes | A GitHub repository view for Classroom |
| `students` | `any[]` | Yes |  |
| `submitted` | `boolean` | Yes | Whether an accepted assignment has been submitted. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ClassroomAcceptedAssignment().list({ assignment_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClassroomAcceptedAssignmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClassroomAssignmentEntity

```ts
const classroom_assignment = client.ClassroomAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `number` | Yes | The number of students that have accepted the assignment. |
| `classroom` | `Record<string, any>` | Yes | A GitHub Classroom classroom |
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
| `starter_code_repository` | `Record<string, any>` | Yes | A GitHub repository view for Classroom |
| `students_are_repo_admins` | `boolean` | Yes | Whether students are admins on created repository when a student accepts the assignment. |
| `submitted` | `number` | Yes | The number of students that have submitted the assignment. |
| `title` | `string` | Yes | Assignment title. |
| `type` | `string` | Yes | Whether it's a group assignment or individual assignment. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ClassroomAssignment().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClassroomAssignmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClassroomAssignmentGradeEntity

```ts
const classroom_assignment_grade = client.ClassroomAssignmentGrade()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ClassroomAssignmentGrade().list({ assignment_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClassroomAssignmentGradeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CloneEntity

```ts
const clone = client.Clone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `uniques` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Clone().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloneEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeFrequencyEntity

```ts
const code_frequency = client.CodeFrequency()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeFrequency().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeFrequencyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeFrequencyStatEntity

```ts
const code_frequency_stat = client.CodeFrequencyStat()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeFrequencyStat().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeFrequencyStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeOfConductEntity

```ts
const code_of_conduct = client.CodeOfConduct()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeOfConduct().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CodeOfConduct().load({ key: 'key' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeOfConductEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningEntity

```ts
const code_scanning = client.CodeScanning()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `sarif` | `/repos/{owner}/{repo}/code-scanning/sarifs` | `client.CodeScanning().create({ $action: 'sarif', ... })` |

An action returns that action's OWN response, which is not necessarily a
CodeScanning record — check the API definition for its shape.

```ts
const result = await client.CodeScanning().create({
  $action: 'sarif',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CodeScanning().create({
  owner: 'example_owner',
  repo: 'example_repo',
  commit_sha: 'example_commit_sha',
  ref: 'example_ref',
  sarif: 'example_sarif',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CodeScanning().remove({ language: 'language', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningAlertEntity

```ts
const code_scanning_alert = client.CodeScanningAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_request` | `boolean` | No | If `true`, attempt to create an alert dismissal request. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `Record<string, any>` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `Record<string, any>` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `id` | `string` | No |  |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `Record<string, any>` | Yes |  |
| `number` | `number` | Yes | The security alert number. |
| `rule` | `Record<string, any>` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `Record<string, any>` | Yes |  |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CodeScanningAlert().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CodeScanningAlert().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningAlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningAlertInstanceEntity

```ts
const code_scanning_alert_instance = client.CodeScanningAlertInstance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_key` | `string` | No | Identifies the configuration under which the analysis was executed. |
| `category` | `string` | No | Identifies the configuration under which the analysis was executed. |
| `classifications` | `any[]` | No | Classifications that have been applied to the file that triggered the alert. |
| `commit_sha` | `string` | No |  |
| `environment` | `string` | No | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `html_url` | `string` | No |  |
| `location` | `Record<string, any>` | No | Describe a region within a file for the alert. |
| `message` | `Record<string, any>` | No |  |
| `ref` | `string` | No | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `state` | `string` | No | State of a code scanning alert. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeScanningAlertInstance().list({ alert_number: 1, owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningAlertInstanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningAlertItemEntity

```ts
const code_scanning_alert_item = client.CodeScanningAlertItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `Record<string, any>` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `Record<string, any>` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `Record<string, any>` | Yes |  |
| `number` | `number` | Yes | The security alert number. |
| `rule` | `Record<string, any>` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `Record<string, any>` | Yes |  |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeScanningAlertItem().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningAlertItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningAnalysiEntity

```ts
const code_scanning_analysi = client.CodeScanningAnalysi()
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
| `tool` | `Record<string, any>` | Yes |  |
| `url` | `string` | Yes | The REST API URL of the analysis resource. |
| `version` | `string` | No | The version of the tool used to generate the code scanning analysis. |
| `warning` | `string` | Yes | Warning generated when processing the analysis |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeScanningAnalysi().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CodeScanningAnalysi().load({ analysis_id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningAnalysiEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningAnalysisDeletionEntity

```ts
const code_scanning_analysis_deletion = client.CodeScanningAnalysisDeletion()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CodeScanningAnalysisDeletion().remove({ analysis_id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningAnalysisDeletionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningAutofixEntity

```ts
const code_scanning_autofix = client.CodeScanningAutofix()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | The description of an autofix. |
| `started_at` | `string` | Yes | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `status` | `string` | Yes | The status of an autofix. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CodeScanningAutofix().create({
  alert_number: 1,
  owner: 'example_owner',
  repo: 'example_repo',
  description: 'example_description',
  started_at: 'example_started_at',
  status: 'example_status',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CodeScanningAutofix().load({ alert_number: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningAutofixEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningAutofixCommitEntity

```ts
const code_scanning_autofix_commit = client.CodeScanningAutofixCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | Commit message to be used. |
| `target_ref` | `string` | No | The Git reference of target branch for the commit. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CodeScanningAutofixCommit().create({
  alert_id: 1,
  owner: 'example_owner',
  repo: 'example_repo',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningAutofixCommitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningCodeqlDatabaseEntity

```ts
const code_scanning_codeql_database = client.CodeScanningCodeqlDatabase()
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
| `uploader` | `Record<string, any>` | Yes | A GitHub user. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeScanningCodeqlDatabase().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CodeScanningCodeqlDatabase().load({ language: 'language', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningCodeqlDatabaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningDefaultSetupEntity

```ts
const code_scanning_default_setup = client.CodeScanningDefaultSetup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `languages` | `any[]` | No | Languages to be analyzed. |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `runner_label` | `string` | No | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | No | Runner type to be used. |
| `schedule` | `string` | No | The frequency of the periodic analysis. |
| `state` | `string` | No | Code scanning default setup has been configured or not. |
| `threat_model` | `string` | No | Threat model to be used for code scanning analysis. |
| `updated_at` | `string` | No | Timestamp of latest configuration update. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeScanningDefaultSetup().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningDefaultSetupEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningOrganizationAlertItemEntity

```ts
const code_scanning_organization_alert_item = client.CodeScanningOrganizationAlertItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `Record<string, any>` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `Record<string, any>` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `Record<string, any>` | Yes |  |
| `number` | `number` | Yes | The security alert number. |
| `repository` | `Record<string, any>` | Yes | A GitHub repository. |
| `rule` | `Record<string, any>` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `Record<string, any>` | Yes |  |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeScanningOrganizationAlertItem().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningOrganizationAlertItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningSarifsStatusEntity

```ts
const code_scanning_sarifs_status = client.CodeScanningSarifsStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analyses_url` | `string` | No | The REST API URL for getting the analyses associated with the upload. |
| `errors` | `any[]` | No | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `string` | No | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CodeScanningSarifsStatus().load({ owner: 'owner', repo: 'repo', sarif_id: 'sarif_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningSarifsStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningVariantAnalysiEntity

```ts
const code_scanning_variant_analysi = client.CodeScanningVariantAnalysi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions_workflow_run_id` | `number` | No | The GitHub Actions workflow run used to execute this variant analysis. |
| `actor` | `Record<string, any>` | Yes | A GitHub user. |
| `completed_at` | `string` | No | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `controller_repo` | `Record<string, any>` | Yes | A GitHub repository. |
| `created_at` | `string` | No | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `failure_reason` | `string` | No | The reason for a failure of the variant analysis. |
| `id` | `number` | Yes | The ID of the variant analysis. |
| `language` | `string` | Yes | The language targeted by the CodeQL query |
| `query_language` | `string` | Yes | The language targeted by the CodeQL query |
| `query_pack` | `string` | Yes | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `query_pack_url` | `string` | Yes | The download url for the query pack. |
| `repositories` | `any[]` | No | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `repository_lists` | `any[]` | No | List of repository lists to run the query against. |
| `repository_owners` | `any[]` | No | List of organization or user names whose repositories the query should be run against. |
| `scanned_repositories` | `any[]` | No |  |
| `skipped_repositories` | `Record<string, any>` | Yes | Information about repositories that were skipped from processing. |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | No | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CodeScanningVariantAnalysi().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CodeScanningVariantAnalysi().load({ codeql_variant_analysis_id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningVariantAnalysiEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeScanningVariantAnalysisRepoTaskEntity

```ts
const code_scanning_variant_analysis_repo_task = client.CodeScanningVariantAnalysisRepoTask()
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
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CodeScanningVariantAnalysisRepoTask().load({ codeql_variant_analysis_id: 1, owner: 'owner', repo: 'repo', repo_name: 'repo_name', repo_owner: 'repo_owner' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeScanningVariantAnalysisRepoTaskEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeSecurityEntity

```ts
const code_security = client.CodeSecurity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advanced_security` | `string` | No | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | No | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `Record<string, any>` | No | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `Record<string, any>` | No | Feature options for code scanning |
| `created_at` | `string` | No |  |
| `default_for_new_repos` | `string` | No | Specify which types of repository this security configuration should be applied to by default. |
| `dependabot_alerts` | `string` | No | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | No | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | No | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | No | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `Record<string, any>` | No | Feature options for Automatic dependency submission |
| `description` | `string` | No | A description of the code security configuration |
| `enforcement` | `string` | No | The enforcement status for a security configuration |
| `html_url` | `string` | No | The URL of the configuration |
| `id` | `number` | No | The ID of the code security configuration |
| `name` | `string` | No | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | No | The enablement status of private vulnerability reporting |
| `secret_scanning` | `string` | No | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | No | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `Record<string, any>` | No | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | No | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | No | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | No | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | No | The enablement status of secret scanning validity checks |
| `target_type` | `string` | No | The type of the code security configuration. |
| `updated_at` | `string` | No |  |
| `url` | `string` | No | The URL of the configuration |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CodeSecurity().remove({ configuration_id: 1, enterprise: 'enterprise' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CodeSecurity().update({
  configuration_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeSecurityEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeSecurityConfigurationEntity

```ts
const code_security_configuration = client.CodeSecurityConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advanced_security` | `string` | No | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | No | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `Record<string, any>` | No | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `Record<string, any>` | No | Feature options for code scanning |
| `code_security` | `string` | No | The enablement status of GitHub Code Security features. |
| `created_at` | `string` | No |  |
| `dependabot_alerts` | `string` | No | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | No | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | No | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | No | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `Record<string, any>` | No | Feature options for Automatic dependency submission |
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
| `secret_scanning_delegated_bypass_options` | `Record<string, any>` | No | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | No | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | No | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | No | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | No | The enablement status of secret scanning validity checks |
| `selected_repository_ids` | `any[]` | No | An array of repository IDs to attach the configuration to. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `attach` | `/enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach` | `client.CodeSecurityConfiguration().create({ $action: 'attach', ... })` |
| `attach` | `/orgs/{org}/code-security/configurations/{configuration_id}/attach` | `client.CodeSecurityConfiguration().create({ $action: 'attach', ... })` |

An action returns that action's OWN response, which is not necessarily a
CodeSecurityConfiguration record — check the API definition for its shape.

```ts
const result = await client.CodeSecurityConfiguration().create({
  $action: 'attach',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CodeSecurityConfiguration().create({
  enterprise: 'example_enterprise',
  scope: 'example_scope',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeSecurityConfiguration().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CodeSecurityConfiguration().load({ id: 1, enterprise: 'enterprise' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CodeSecurityConfiguration().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeSecurityConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeSecurityConfigurationRepositoryEntity

```ts
const code_security_configuration_repository = client.CodeSecurityConfigurationRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `repository` | `Record<string, any>` | Yes | A GitHub repository. |
| `status` | `string` | No | The attachment status of the code security configuration on the repository. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeSecurityConfigurationRepository().list({ configuration_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeSecurityConfigurationRepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeSecurityDefaultConfigurationEntity

```ts
const code_security_default_configuration = client.CodeSecurityDefaultConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | No | A code security configuration |
| `default_for_new_repos` | `any` | No | The visibility of newly created repositories for which the code security configuration will be applied to by default |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeSecurityDefaultConfiguration().list({ enterprise: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeSecurityDefaultConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodeownersErrorEntity

```ts
const codeowners_error = client.CodeownersError()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CodeownersError().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodeownersErrorEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CodespaceEntity

```ts
const codespace = client.Codespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `boolean` | Yes | Whether the user has accepted the permissions defined by the devcontainer config |
| `allow_forking` | `boolean` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | No |  |
| `assignees_url` | `string` | Yes |  |
| `billable_owner` | `Record<string, any>` | Yes | A GitHub user. |
| `blobs_url` | `string` | Yes |  |
| `branch` | `string` | No | Name of the exported branch |
| `branches_url` | `string` | Yes |  |
| `client_ip` | `string` | No | IP for location auto-detection when proxying a request |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `Record<string, any>` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `completed_at` | `string` | No | Completion time of the last export operation |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `cpus` | `number` | Yes | How many cores are available to the codespace. |
| `created_at` | `string` | Yes | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `custom_properties` | `Record<string, any>` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `defaults` | `Record<string, any>` | Yes |  |
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
| `git_status` | `Record<string, any>` | Yes | Details about the codespace's git repository. |
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
| `license` | `Record<string, any>` | No |  |
| `location` | `string` | Yes | The initally assigned location of a new codespace. |
| `machine` | `Record<string, any>` | Yes | A description of the machine powering a codespace. |
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
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `path` | `string` | Yes |  |
| `pending_operation` | `boolean` | No | Whether or not a codespace has a pending async operation. |
| `pending_operation_disabled_reason` | `string` | No | Text to show user when codespace is disabled by a pending operation |
| `permissions` | `Record<string, any>` | No |  |
| `prebuild` | `boolean` | Yes | Whether the codespace was created from a prebuild. |
| `prebuild_availability` | `string` | Yes | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `private` | `boolean` | No | Whether the new repository should be private. |
| `publish_url` | `string` | No | API URL to publish this codespace to a new repository. |
| `pulls_url` | `string` | Yes | API URL for the Pull Request associated with this codespace, if any. |
| `pushed_at` | `string` | No |  |
| `recent_folders` | `any[]` | Yes | Recently opened folders inside the codespace. |
| `ref` | `string` | No | Git ref (typically a branch name) for this codespace |
| `releases_url` | `string` | Yes |  |
| `repository` | `Record<string, any>` | Yes | Minimal Repository |
| `retention_expires_at` | `string` | No | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `retention_period_minutes` | `number` | No | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `role_name` | `string` | No |  |
| `runtime_constraints` | `Record<string, any>` | No |  |
| `security_and_analysis` | `Record<string, any>` | No |  |
| `selected_repositories_url` | `string` | No | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `selected_repository_ids` | `any[]` | No | An array of repository IDs that can access the organization secret. |
| `selected_usernames` | `any[]` | Yes | The usernames of the organization members whose codespaces be billed to the organization. |
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
| `topics` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `export` | `/user/codespaces/{codespace_name}/exports` | `client.Codespace().create({ $action: 'export', ... })` |
| `publish` | `/user/codespaces/{codespace_name}/publish` | `client.Codespace().create({ $action: 'publish', ... })` |
| `start` | `/user/codespaces/{codespace_name}/start` | `client.Codespace().create({ $action: 'start', ... })` |
| `stop` | `/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop` | `client.Codespace().create({ $action: 'stop', ... })` |
| `stop` | `/user/codespaces/{codespace_name}/stop` | `client.Codespace().create({ $action: 'stop', ... })` |
| `devcontainer` | `/repos/{owner}/{repo}/codespaces/devcontainers` | `client.Codespace().list({ $action: 'devcontainer', ... })` |
| `machine` | `/repos/{owner}/{repo}/codespaces/machines` | `client.Codespace().list({ $action: 'machine', ... })` |
| `machine` | `/user/codespaces/{codespace_name}/machines` | `client.Codespace().list({ $action: 'machine', ... })` |
| `secret` | `/repos/{owner}/{repo}/codespaces/secrets` | `client.Codespace().list({ $action: 'secret', ... })` |
| `secret` | `/orgs/{org}/codespaces/secrets` | `client.Codespace().list({ $action: 'secret', ... })` |
| `secret` | `/user/codespaces/secrets` | `client.Codespace().list({ $action: 'secret', ... })` |
| `new` | `/repos/{owner}/{repo}/codespaces/new` | `client.Codespace().load({ $action: 'new', ... })` |
| `permissions_check` | `/repos/{owner}/{repo}/codespaces/permissions_check` | `client.Codespace().load({ $action: 'permissions_check', ... })` |
| `access` | `/orgs/{org}/codespaces/access` | `client.Codespace().update({ $action: 'access', ... })` |

An action returns that action's OWN response, which is not necessarily a
Codespace record — check the API definition for its shape.

```ts
const result = await client.Codespace().create({
  $action: 'export',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Codespace().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Codespace().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Codespace().load({ id: 'codespace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Codespace().remove({ id: 'codespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Codespace().update({
  id: 'codespace_id',
  secret_name: 'secret_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CodespaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CollaboratorEntity

```ts
const collaborator = client.Collaborator()
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
| `permissions` | `Record<string, any>` | Yes |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Collaborator().list({ project_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CollaboratorEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CombinedBillingUsageEntity

```ts
const combined_billing_usage = client.CombinedBillingUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_left_in_billing_cycle` | `number` | Yes | Numbers of days left in billing cycle. |
| `estimated_paid_storage_for_month` | `number` | Yes | Estimated storage space (GB) used in billing cycle. |
| `estimated_storage_for_month` | `number` | Yes | Estimated sum of free and paid storage space (GB) used in billing cycle. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CombinedBillingUsage().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CombinedBillingUsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CombinedCommitStatusEntity

```ts
const combined_commit_status = client.CombinedCommitStatus()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CombinedCommitStatus().list({ owner: "example", ref: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CombinedCommitStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommitEntity

```ts
const commit = client.Commit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | Yes |  |
| `base` | `string` | Yes | The name of the base branch that the head will be merged into. |
| `comments_url` | `string` | Yes |  |
| `commit` | `Record<string, any>` | Yes |  |
| `commit_message` | `string` | No | Commit message to use for the merge commit. |
| `committer` | `any` | Yes |  |
| `files` | `any[]` | No |  |
| `head` | `string` | Yes | The head to merge. |
| `html_url` | `string` | Yes |  |
| `id` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `parents` | `any[]` | Yes |  |
| `sha` | `string` | Yes |  |
| `stats` | `Record<string, any>` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Commit().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Commit().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Commit().load({ id: 'commit_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommitActivityEntity

```ts
const commit_activity = client.CommitActivity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `any[]` | Yes |  |
| `total` | `number` | Yes |  |
| `week` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CommitActivity().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommitActivityEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommitCommentEntity

```ts
const commit_comment = client.CommitComment()
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
| `reactions` | `Record<string, any>` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `Record<string, any>` | Yes | A GitHub user. |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CommitComment().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CommitComment().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CommitComment().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CommitComment().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommitCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommitComparisonEntity

```ts
const commit_comparison = client.CommitComparison()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ahead_by` | `number` | Yes |  |
| `base_commit` | `Record<string, any>` | Yes | Commit |
| `behind_by` | `number` | Yes |  |
| `commits` | `any[]` | Yes |  |
| `diff_url` | `string` | Yes |  |
| `files` | `any[]` | No |  |
| `html_url` | `string` | Yes |  |
| `merge_base_commit` | `Record<string, any>` | Yes | Commit |
| `patch_url` | `string` | Yes |  |
| `permalink_url` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `total_commits` | `number` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CommitComparison().load({ basehead: 'basehead', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommitComparisonEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommunityProfileEntity

```ts
const community_profile = client.CommunityProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code_of_conduct` | `Record<string, any>` | Yes | Code of Conduct Simple |
| `code_of_conduct_file` | `Record<string, any>` | Yes |  |
| `contributing` | `Record<string, any>` | Yes |  |
| `issue_template` | `Record<string, any>` | Yes |  |
| `license` | `Record<string, any>` | Yes | License Simple |
| `pull_request_template` | `Record<string, any>` | Yes |  |
| `readme` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CommunityProfile().load({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommunityProfileEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContentFileEntity

```ts
const content_file = client.ContentFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `git` | `string` | Yes |  |
| `html` | `string` | Yes |  |
| `self` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ContentFile().load({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContentFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContentTrafficEntity

```ts
const content_traffic = client.ContentTraffic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |
| `path` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `uniques` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContentTraffic().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContentTrafficEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContributorEntity

```ts
const contributor = client.Contributor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Record<string, any>` | Yes | A GitHub user. |
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
| `weeks` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Contributor().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContributorEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CopilotEntity

```ts
const copilot = client.Copilot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Record<string, any>` | Yes | A GitHub user. |
| `assigning_team` | `any` | No | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `created_at` | `string` | Yes | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `last_activity_at` | `string` | No | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `last_activity_editor` | `string` | No | Last editor that was used by the user for a GitHub Copilot completion. |
| `last_authenticated_at` | `string` | No | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `organization` | `Record<string, any>` | Yes | A GitHub organization. |
| `pending_cancellation_date` | `string` | No | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `plan_type` | `string` | No | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `selected_teams` | `any[]` | Yes | List of team names within the organization to which to grant access to GitHub Copilot. |
| `selected_usernames` | `any[]` | Yes | The usernames of the organization members to be granted access to GitHub Copilot. |
| `updated_at` | `string` | No | **Closing down notice:** This field is no longer relevant and is closing down. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Copilot().create({
  org_id: 'example_org_id',
  assignee: {},
  created_at: 'example_created_at',
  organization: {},
  selected_teams: [],
  selected_usernames: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Copilot().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Copilot().load({ org_id: 'org_id', username: 'username' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Copilot().remove({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CopilotEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CopilotOrganizationDetailEntity

```ts
const copilot_organization_detail = client.CopilotOrganizationDetail()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CopilotOrganizationDetail().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CopilotOrganizationDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CopilotUsageMetricsDayEntity

```ts
const copilot_usage_metrics_day = client.CopilotUsageMetricsDay()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `copilot_dotcom_chat` | `Record<string, any>` | No | Usage metrics for Copilot Chat in GitHub.com |
| `copilot_dotcom_pull_requests` | `Record<string, any>` | No | Usage metrics for Copilot for pull requests. |
| `copilot_ide_chat` | `Record<string, any>` | No | Usage metrics for Copilot Chat in the IDE. |
| `copilot_ide_code_completions` | `Record<string, any>` | No | Usage metrics for Copilot editor code completions in the IDE. |
| `date` | `string` | Yes | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `total_active_users` | `number` | No | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `total_engaged_users` | `number` | No | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CopilotUsageMetricsDay().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CopilotUsageMetricsDayEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CredentialEntity

```ts
const credential = client.Credential()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentials` | `any[]` | Yes | A list of credentials to be revoked, up to 1000 per request. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `revoke` | `/credentials/revoke` | `client.Credential().create({ $action: 'revoke', ... })` |

An action returns that action's OWN response, which is not necessarily a
Credential record — check the API definition for its shape.

```ts
const result = await client.Credential().create({
  $action: 'revoke',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Credential().create({
  credentials: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CredentialEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomPropertyEntity

```ts
const custom_property = client.CustomProperty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_values` | `any[]` | No | An ordered list of the allowed values of the property. |
| `default_value` | `any` | No | Default value of the property |
| `description` | `string` | No | Short description of the property |
| `properties` | `any[]` | Yes | The array of custom properties to create or update. |
| `property_name` | `string` | Yes | The name of the property |
| `required` | `boolean` | No | Whether the property is required. |
| `source_type` | `string` | No | The source type of the property |
| `url` | `string` | No | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `value_type` | `string` | Yes | The type of the value for the property |
| `values_editable_by` | `string` | No | Who can edit the values of the property |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomProperty().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomProperty().load({ custom_property_name: 'custom_property_name', org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomProperty().update({
  custom_property_name: 'custom_property_name',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomPropertyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomPropertyValueEntity

```ts
const custom_property_value = client.CustomPropertyValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `property_name` | `string` | Yes | The name of the property |
| `value` | `any` | Yes | The value assigned to the property |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomPropertyValue().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomPropertyValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependabotEntity

```ts
const dependabot = client.Dependabot()
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
| `code_of_conduct` | `Record<string, any>` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `custom_properties` | `Record<string, any>` | No | The custom properties that were defined for the repository. |
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
| `license` | `Record<string, any>` | No |  |
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
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `permissions` | `Record<string, any>` | No |  |
| `private` | `boolean` | Yes |  |
| `public_members_url` | `string` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repository_ids_to_add` | `any[]` | No | List of repository IDs to add. |
| `repository_ids_to_remove` | `any[]` | No | List of repository IDs to remove. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `Record<string, any>` | No |  |
| `selected_repositories_url` | `string` | No |  |
| `selected_repository_ids` | `any[]` | Yes | An array of repository ids that can access the organization secret. |
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
| `topics` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `secret` | `/repos/{owner}/{repo}/dependabot/secrets` | `client.Dependabot().list({ $action: 'secret', ... })` |
| `secret` | `/orgs/{org}/dependabot/secrets` | `client.Dependabot().list({ $action: 'secret', ... })` |
| `repository_access` | `/organizations/{org}/dependabot/repository-access` | `client.Dependabot().patch({ $action: 'repository_access', ... })` |

An action returns that action's OWN response, which is not necessarily a
Dependabot record — check the API definition for its shape.

```ts
const result = await client.Dependabot().list({
  $action: 'secret',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Dependabot().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Dependabot().remove({ org_id: 'org_id', secret_name: 'secret_name' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Dependabot().update({
  org_id: 'org_id',
  repository_id: 1,
  secret_id: 'secret_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependabotEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependabotAlertEntity

```ts
const dependabot_alert = client.DependabotAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_dismissed_at` | `string` | No | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `Record<string, any>` | Yes | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `Record<string, any>` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | Yes | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | Yes | The reason that the alert was dismissed. |
| `fixed_at` | `string` | Yes | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `id` | `string` | No |  |
| `number` | `number` | Yes | The security alert number. |
| `security_advisory` | `Record<string, any>` | Yes | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `Record<string, any>` | Yes | Details pertaining to one vulnerable version range for the advisory. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DependabotAlert().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DependabotAlert().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DependabotAlert().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependabotAlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependabotAlertWithRepositoryEntity

```ts
const dependabot_alert_with_repository = client.DependabotAlertWithRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_dismissed_at` | `string` | No | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `Record<string, any>` | Yes | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `Record<string, any>` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | Yes | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | Yes | The reason that the alert was dismissed. |
| `fixed_at` | `string` | Yes | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `number` | `number` | Yes | The security alert number. |
| `repository` | `Record<string, any>` | Yes | A GitHub repository. |
| `security_advisory` | `Record<string, any>` | Yes | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `Record<string, any>` | Yes | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | Yes | The state of the Dependabot alert. |
| `updated_at` | `string` | Yes | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DependabotAlertWithRepository().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependabotAlertWithRepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependabotPublicKeyEntity

```ts
const dependabot_public_key = client.DependabotPublicKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | The Base64 encoded public key. |
| `key_id` | `string` | Yes | The identifier for the key. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DependabotPublicKey().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependabotPublicKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependabotRepositoryAccessDetailEntity

```ts
const dependabot_repository_access_detail = client.DependabotRepositoryAccessDetail()
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
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DependabotRepositoryAccessDetail().list({ org: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependabotRepositoryAccessDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependabotSecretEntity

```ts
const dependabot_secret = client.DependabotSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `updated_at` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DependabotSecret().load({ id: 'dependabot_secret_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependabotSecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependencyGraphEntity

```ts
const dependency_graph = client.DependencyGraph()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detector` | `Record<string, any>` | Yes | A description of the detector used. |
| `job` | `Record<string, any>` | Yes |  |
| `manifests` | `Record<string, any>` | No | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `metadata` | `Record<string, any>` | No | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `ref` | `string` | Yes | The repository branch that triggered this snapshot. |
| `scanned` | `string` | Yes | The time at which the snapshot was scanned. |
| `sha` | `string` | Yes | The commit SHA associated with this dependency snapshot. |
| `version` | `number` | Yes | The version of the repository snapshot submission. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `snapshot` | `/repos/{owner}/{repo}/dependency-graph/snapshots` | `client.DependencyGraph().create({ $action: 'snapshot', ... })` |

An action returns that action's OWN response, which is not necessarily a
DependencyGraph record — check the API definition for its shape.

```ts
const result = await client.DependencyGraph().create({
  $action: 'snapshot',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DependencyGraph().create({
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

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependencyGraphEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependencyGraphDiffEntity

```ts
const dependency_graph_diff = client.DependencyGraphDiff()
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
| `vulnerabilities` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DependencyGraphDiff().load({ basehead: 'basehead', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependencyGraphDiffEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependencyGraphSpdxSbomEntity

```ts
const dependency_graph_spdx_sbom = client.DependencyGraphSpdxSbom()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `SPDXID` | `string` | Yes | The SPDX identifier for the SPDX document. |
| `comment` | `string` | No | An optional comment about the SPDX document. |
| `creationInfo` | `Record<string, any>` | Yes |  |
| `dataLicense` | `string` | Yes | The license under which the SPDX document is licensed. |
| `documentNamespace` | `string` | Yes | The namespace for the SPDX document. |
| `name` | `string` | Yes | The name of the SPDX document. |
| `packages` | `any[]` | Yes |  |
| `relationships` | `any[]` | Yes |  |
| `spdxVersion` | `string` | Yes | The version of the SPDX specification that this document conforms to. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DependencyGraphSpdxSbom().load({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependencyGraphSpdxSbomEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeployKeyEntity

```ts
const deploy_key = client.DeployKey()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DeployKey().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DeployKey().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DeployKey().load({ id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeployKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentEntity

```ts
const deployment = client.Deployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_merge` | `boolean` | No | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `comment` | `string` | Yes | A comment to accompany the deployment review |
| `created_at` | `string` | Yes |  |
| `creator` | `Record<string, any>` | Yes | A GitHub user. |
| `description` | `string` | Yes | Short description of the deployment. |
| `environment` | `string` | Yes | Name for the target deployment environment. |
| `environment_ids` | `any[]` | Yes | The list of environment ids to approve or reject |
| `id` | `number` | Yes | Unique identifier of the deployment |
| `node_id` | `string` | Yes |  |
| `original_environment` | `string` | No |  |
| `payload` | `any` | Yes |  |
| `performed_via_github_app` | `Record<string, any>` | Yes | GitHub apps are a new way to extend GitHub. |
| `production_environment` | `boolean` | No | Specifies if the given environment is one that end-users directly interact with. |
| `ref` | `string` | Yes | The ref to deploy. |
| `repository_url` | `string` | Yes |  |
| `required_contexts` | `any[]` | No | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Deployment().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Deployment().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Deployment().load({ id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentBranchPolicyEntity

```ts
const deployment_branch_policy = client.DeploymentBranchPolicy()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DeploymentBranchPolicy().create({
  environment_name: 'example_environment_name',
  owner: 'example_owner',
  repo: 'example_repo',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DeploymentBranchPolicy().load({ id: 1, environment_id: 'environment_id', owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DeploymentBranchPolicy().update({
  id: 1,
  environment_id: 'environment_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentBranchPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentProtectionRuleEntity

```ts
const deployment_protection_rule = client.DeploymentProtectionRule()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DeploymentProtectionRule().create({
  environment_name: 'example_environment_name',
  owner: 'example_owner',
  repo: 'example_repo',
  id: 1,
  integration_url: 'example_integration_url',
  node_id: 'example_node_id',
  slug: 'example_slug',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DeploymentProtectionRule().load({ id: 1, environment_id: 'environment_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentProtectionRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentStatusEntity

```ts
const deployment_status = client.DeploymentStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_inactive` | `boolean` | No | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `created_at` | `string` | Yes |  |
| `creator` | `Record<string, any>` | Yes | A GitHub user. |
| `deployment_url` | `string` | Yes |  |
| `description` | `string` | Yes | A short description of the status. |
| `environment` | `string` | No | The environment of the deployment that the status is for. |
| `environment_url` | `string` | No | The URL for accessing your environment. |
| `id` | `number` | Yes |  |
| `log_url` | `string` | No | The URL to associate with this status. |
| `node_id` | `string` | Yes |  |
| `performed_via_github_app` | `Record<string, any>` | Yes | GitHub apps are a new way to extend GitHub. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DeploymentStatus().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DeploymentStatus().list({ id: 1, owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DeploymentStatus().load({ id: 1, deployment_id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DiffEntryEntity

```ts
const diff_entry = client.DiffEntry()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DiffEntry().list({ owner: "example", pull_number: 1, repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DiffEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailEntity

```ts
const email = client.Email()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `visibility` | `/user/email/visibility` | `client.Email().update({ $action: 'visibility', ... })` |

An action returns that action's OWN response, which is not necessarily a
Email record — check the API definition for its shape.

```ts
const result = await client.Email().update({
  $action: 'visibility',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Email().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Email().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Email().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmojiEntity

```ts
const emoji = client.Emoji()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Emoji().load({ id: 'emoji_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmojiEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmptyObjectEntity

```ts
const empty_object = client.EmptyObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attestations` | `any[]` | No |  |
| `enable_debug_logging` | `boolean` | No | Whether to enable debug logging for the re-run. |
| `encrypted_value` | `string` | Yes | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `include_claim_keys` | `any[]` | No | Array of unique strings. |
| `key_id` | `string` | Yes | ID of the key you used to encrypt the secret. |
| `languages` | `any[]` | No | CodeQL languages to be analyzed. |
| `name` | `string` | Yes | The name of the variable. |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `runner_label` | `string` | No | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | No | Runner type to be used. |
| `selected_repository_ids` | `any[]` | No | An array of repository ids that can access the organization variable. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EmptyObject().create({
  org_id: 'example_org_id',
  encrypted_value: 'example_encrypted_value',
  key_id: 'example_key_id',
  name: 'example_name',
  use_default: true,
  value: 'example_value',
  visibility: 'example_visibility',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EmptyObject().load({ subject_digest: 'subject_digest', username: 'username' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EmptyObject().update({
  org_id: 'org_id',
  secret_name: 'secret_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmptyObjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnterpriseTeamEntity

```ts
const enterprise_team = client.EnterpriseTeam()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EnterpriseTeam().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EnterpriseTeam().list({ enterprise: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EnterpriseTeam().load({ id: 'enterprise_team_id', enterprise: 'enterprise' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EnterpriseTeam().remove({ id: 'enterprise_team_id', enterprise: 'enterprise' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EnterpriseTeam().update({
  id: 'enterprise_team_id',
  enterprise: 'enterprise',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnterpriseTeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnterpriseTeamMembershipEntity

```ts
const enterprise_team_membership = client.EnterpriseTeamMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EnterpriseTeamMembership().remove({ enterprise: 'enterprise', id: 'id', team_id: 'team_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnterpriseTeamMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvironmentEntity

```ts
const environment = client.Environment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the environment was created, in ISO 8601 format. |
| `deployment_branch_policy` | `Record<string, any>` | Yes | The type of deployment branch policy for this environment. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The id of the environment. |
| `name` | `string` | Yes | The name of the environment. |
| `node_id` | `string` | Yes |  |
| `prevent_self_review` | `boolean` | No | Whether or not a user who created the job is prevented from approving their own job. |
| `protection_rules` | `any[]` | No | Built-in deployment protection rules for the environment. |
| `reviewers` | `any[]` | No | The people or teams that may review jobs that reference the environment. |
| `updated_at` | `string` | Yes | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` | Yes |  |
| `wait_timer` | `number` | No | The amount of time to delay a job after the job is initially triggered. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Environment().load({ id: 'environment_id', owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Environment().update({
  id: 'environment_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvironmentApprovalEntity

```ts
const environment_approval = client.EnvironmentApproval()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | Yes | The comment submitted with the deployment review |
| `environments` | `any[]` | Yes | The list of environments that were approved or rejected |
| `state` | `string` | Yes | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | `Record<string, any>` | Yes | A GitHub user. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EnvironmentApproval().list({ owner: "example", repo: "example", run_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvironmentApprovalEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventEntity

```ts
const event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Record<string, any>` | Yes | Actor |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `org` | `Record<string, any>` | Yes | Actor |
| `payload` | `Record<string, any>` | Yes |  |
| `public` | `boolean` | Yes |  |
| `repo` | `Record<string, any>` | Yes |  |
| `type` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `public` | `/users/{username}/events/public` | `client.Event().list({ $action: 'public', ... })` |

An action returns that action's OWN response, which is not necessarily a
Event record — check the API definition for its shape.

```ts
const result = await client.Event().list({
  $action: 'public',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Event().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Event().load({ org: 'org', username: 'username' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeedEntity

```ts
const feed = client.Feed()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_user_actor_url` | `string` | No |  |
| `current_user_organization_url` | `string` | No |  |
| `current_user_organization_urls` | `any[]` | No |  |
| `current_user_public_url` | `string` | No |  |
| `current_user_url` | `string` | No |  |
| `links` | `Record<string, any>` | Yes |  |
| `repository_discussions_category_url` | `string` | No | A feed of discussions for a given repository and category. |
| `repository_discussions_url` | `string` | No | A feed of discussions for a given repository. |
| `security_advisories_url` | `string` | No |  |
| `timeline_url` | `string` | Yes |  |
| `user_url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Feed().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeedEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FileCommitEntity

```ts
const file_commit = client.FileCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Record<string, any>` | Yes | The author of the file. |
| `branch` | `string` | No | The branch name. |
| `commit` | `Record<string, any>` | Yes |  |
| `committer` | `Record<string, any>` | Yes | The person that committed the file. |
| `content` | `Record<string, any>` | Yes | The new file content, using Base64 encoding. |
| `message` | `string` | Yes | The commit message. |
| `sha` | `string` | No | **Required if you are updating a file**. |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.FileCommit().remove({ owner: 'owner', path: 'path', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.FileCommit().update({
  owner: 'owner',
  path: 'path',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FileCommitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FollowerEntity

```ts
const follower = client.Follower()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Follower().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FollowerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FollowingEntity

```ts
const following = client.Following()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Following().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FollowingEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FullRepositoryEntity

```ts
const full_repository = client.FullRepository()
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
| `code_of_conduct` | `Record<string, any>` | Yes | Code of Conduct Simple |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `Record<string, any>` | No | The custom properties that were defined for the repository. |
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
| `license` | `Record<string, any>` | Yes | License Simple |
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
| `organization` | `Record<string, any>` | Yes | A GitHub user. |
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `parent` | `Record<string, any>` | Yes | A repository on GitHub. |
| `permissions` | `Record<string, any>` | Yes |  |
| `private` | `boolean` | Yes | Either `true` to create a new private repository or `false` to create a new public one. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `security_and_analysis` | `Record<string, any>` | No | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `number` | Yes | The size of the repository, in kilobytes. |
| `source` | `Record<string, any>` | Yes | A repository on GitHub. |
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
| `template_repository` | `Record<string, any>` | Yes | A repository on GitHub. |
| `topics` | `any[]` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FullRepository().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FullRepository().load({ owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.FullRepository().update({
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FullRepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GistEntity

```ts
const gist = client.Gist()
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
| `files` | `Record<string, any>` | No | Names and content for the files that make up the gist |
| `fork_of` | `Record<string, any>` | Yes | Gist |
| `forks` | `any[]` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `any[]` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `star` | `/gists/{gist_id}/star` | `client.Gist().load({ $action: 'star', ... })` |
| `star` | `/gists/{gist_id}/star` | `client.Gist().remove({ $action: 'star', ... })` |
| `star` | `/gists/{gist_id}/star` | `client.Gist().update({ $action: 'star', ... })` |

An action returns that action's OWN response, which is not necessarily a
Gist record — check the API definition for its shape.

```ts
const result = await client.Gist().load({
  $action: 'star',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Gist().create({
  fork_of: {},
  owner: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Gist().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Gist().load({ id: 'gist_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Gist().remove({ id: 'gist_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Gist().update({
  id: 'gist_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GistEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GistCommentEntity

```ts
const gist_comment = client.GistComment()
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
| `user` | `Record<string, any>` | Yes | A GitHub user. |
| `user_view_type` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GistComment().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GistComment().list({ id: "example_id" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GistComment().load({ id: 1, gist_id: 'gist_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.GistComment().update({
  id: 1,
  gist_id: 'gist_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GistCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GistCommitEntity

```ts
const gist_commit = client.GistCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `change_status` | `Record<string, any>` | Yes |  |
| `committed_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `url` | `string` | Yes |  |
| `user` | `Record<string, any>` | Yes | A GitHub user. |
| `version` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GistCommit().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GistCommitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GistSimpleEntity

```ts
const gist_simple = client.GistSimple()
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
| `files` | `Record<string, any>` | No |  |
| `fork_of` | `Record<string, any>` | Yes | Gist |
| `forks` | `any[]` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `any[]` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `public` | `boolean` | No |  |
| `truncated` | `boolean` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `forks` | `/gists/{gist_id}/forks` | `client.GistSimple().list({ $action: 'forks', ... })` |

An action returns that action's OWN response, which is not necessarily a
GistSimple record — check the API definition for its shape.

```ts
const result = await client.GistSimple().list({
  $action: 'forks',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GistSimple().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GistSimpleEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitEntity

```ts
const git = client.Git()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Git().remove({ owner: 'owner', ref: 'ref', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitCommitEntity

```ts
const git_commit = client.GitCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Record<string, any>` | Yes | Identifying information for the git-user |
| `committer` | `Record<string, any>` | Yes | Identifying information for the git-user |
| `html_url` | `string` | Yes |  |
| `id` | `string` | No |  |
| `message` | `string` | Yes | Message describing the purpose of the commit |
| `node_id` | `string` | Yes |  |
| `parents` | `any[]` | Yes | The full SHAs of the commits that were the parents of this commit. |
| `sha` | `string` | Yes | SHA for the commit |
| `signature` | `string` | No | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `tree` | `Record<string, any>` | Yes | The SHA of the tree object this commit points to |
| `url` | `string` | Yes |  |
| `verification` | `Record<string, any>` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GitCommit().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GitCommit().load({ id: 'git_commit_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitCommitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitRefEntity

```ts
const git_ref = client.GitRef()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `force` | `boolean` | No | Indicates whether to force the update or to make sure the update is a fast-forward update. |
| `id` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `object` | `Record<string, any>` | Yes |  |
| `ref` | `string` | Yes | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `sha` | `string` | Yes | SHA for the reference |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GitRef().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GitRef().load({ id: 'git_ref_id', owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.GitRef().update({
  id: 'git_ref_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitRefEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitTagEntity

```ts
const git_tag = client.GitTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `message` | `string` | Yes | Message describing the purpose of the tag |
| `node_id` | `string` | Yes |  |
| `object` | `Record<string, any>` | Yes | The SHA of the git object this is tagging. |
| `sha` | `string` | Yes |  |
| `tag` | `string` | Yes | Name of the tag |
| `tagger` | `Record<string, any>` | Yes | An object with information about the individual creating the tag. |
| `type` | `string` | Yes | The type of the object we're tagging. |
| `url` | `string` | Yes | URL for the tag |
| `verification` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GitTag().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GitTag().load({ id: 'git_tag_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitTagEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitTreeEntity

```ts
const git_tree = client.GitTree()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_tree` | `string` | No | The SHA1 of an existing Git tree object which will be used as the base for the new tree. |
| `id` | `string` | No |  |
| `sha` | `string` | Yes |  |
| `tree` | `any[]` | Yes | Objects specifying a tree structure |
| `truncated` | `boolean` | Yes |  |
| `url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GitTree().create({
  owner: 'example_owner',
  repo: 'example_repo',
  sha: 'example_sha',
  tree: [],
  truncated: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GitTree().load({ id: 'git_tree_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitTreeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitignoreEntity

```ts
const gitignore = client.Gitignore()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `template` | `/gitignore/templates` | `client.Gitignore().list({ $action: 'template', ... })` |

An action returns that action's OWN response, which is not necessarily a
Gitignore record — check the API definition for its shape.

```ts
const result = await client.Gitignore().list({
  $action: 'template',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Gitignore().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitignoreEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitignoreTemplateEntity

```ts
const gitignore_template = client.GitignoreTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `source` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GitignoreTemplate().load({ id: 'gitignore_template_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitignoreTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GlobalAdvisoryEntity

```ts
const global_advisory = client.GlobalAdvisory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credits` | `any[]` | Yes | The users who contributed to the advisory. |
| `cve_id` | `string` | Yes | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `Record<string, any>` | Yes |  |
| `cvss_severities` | `Record<string, any>` | No |  |
| `cwes` | `any[]` | Yes |  |
| `description` | `string` | Yes | A detailed description of what the advisory entails. |
| `epss` | `Record<string, any>` | No | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `ghsa_id` | `string` | Yes | The GitHub Security Advisory ID. |
| `github_reviewed_at` | `string` | Yes | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `html_url` | `string` | Yes | The URL for the advisory. |
| `id` | `string` | No |  |
| `identifiers` | `any[]` | Yes |  |
| `nvd_published_at` | `string` | Yes | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `published_at` | `string` | Yes | The date and time of when the advisory was published, in ISO 8601 format. |
| `references` | `any[]` | Yes |  |
| `repository_advisory_url` | `string` | Yes | The API URL for the repository advisory. |
| `severity` | `string` | Yes | The severity of the advisory. |
| `source_code_location` | `string` | Yes | The URL of the advisory's source code. |
| `summary` | `string` | Yes | A short summary of the advisory. |
| `type` | `string` | Yes | The type of advisory. |
| `updated_at` | `string` | Yes | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | Yes | The API URL for the advisory. |
| `vulnerabilities` | `any[]` | Yes | The products and respective version ranges affected by the advisory. |
| `withdrawn_at` | `string` | Yes | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GlobalAdvisory().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GlobalAdvisory().load({ id: 'global_advisory_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GlobalAdvisoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GpgKeyEntity

```ts
const gpg_key = client.GpgKey()
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
| `emails` | `any[]` | Yes |  |
| `expires_at` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `key_id` | `string` | Yes |  |
| `name` | `string` | No | A descriptive name for the new key. |
| `primary_key_id` | `number` | Yes |  |
| `public_key` | `string` | Yes |  |
| `raw_key` | `string` | Yes |  |
| `revoked` | `boolean` | Yes |  |
| `subkeys` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GpgKey().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GpgKey().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GpgKey().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GpgKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HookEntity

```ts
const hook = client.Hook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Determines whether the hook is actually triggered on pushes. |
| `add_events` | `any[]` | No | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `config` | `Record<string, any>` | Yes | Configuration object of the webhook |
| `created_at` | `string` | Yes |  |
| `deliveries_url` | `string` | No |  |
| `events` | `any[]` | Yes | Determines what events the hook is triggered for. |
| `id` | `number` | Yes | Unique identifier of the webhook. |
| `last_response` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes | The name of a valid service, use 'web' for a webhook. |
| `ping_url` | `string` | Yes |  |
| `remove_events` | `any[]` | No | Determines a list of events to be removed from the list of events that the Hook triggers for. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Hook().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Hook().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Hook().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Hook().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HookEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HookDeliveryEntity

```ts
const hook_delivery = client.HookDelivery()
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
| `request` | `Record<string, any>` | Yes |  |
| `response` | `Record<string, any>` | Yes |  |
| `status` | `string` | Yes | Description of the status of the attempted delivery |
| `status_code` | `number` | Yes | Status code received when delivery was made. |
| `throttled_at` | `string` | No | Time when the webhook delivery was throttled. |
| `url` | `string` | No | The URL target of the delivery. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.HookDelivery().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HookDeliveryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HookDeliveryItemEntity

```ts
const hook_delivery_item = client.HookDeliveryItem()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `deliveries` | `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries` | `client.HookDeliveryItem().list({ $action: 'deliveries', ... })` |
| `deliveries` | `/orgs/{org}/hooks/{hook_id}/deliveries` | `client.HookDeliveryItem().list({ $action: 'deliveries', ... })` |

An action returns that action's OWN response, which is not necessarily a
HookDeliveryItem record — check the API definition for its shape.

```ts
const result = await client.HookDeliveryItem().list({
  $action: 'deliveries',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.HookDeliveryItem().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HookDeliveryItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HostedComputeEntity

```ts
const hosted_compute = client.HostedCompute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compute_service` | `string` | No | The hosted compute service the network configuration supports. |
| `created_on` | `string` | Yes | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | Yes | The unique identifier of the network configuration. |
| `name` | `string` | Yes | The name of the network configuration. |
| `network_settings_ids` | `any[]` | No | The unique identifier of each network settings in the configuration. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.HostedCompute().list({ org_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.HostedCompute().remove({ network_configuration_id: 'network_configuration_id', org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HostedComputeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HovercardEntity

```ts
const hovercard = client.Hovercard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `octicon` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Hovercard().list({ username: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HovercardEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImportEntity

```ts
const import_ = client.Import()
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
| `project_choices` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `lfs` | `/repos/{owner}/{repo}/import/lfs` | `client.Import().patch({ $action: 'lfs', ... })` |

An action returns that action's OWN response, which is not necessarily a
Import record — check the API definition for its shape.

```ts
const result = await client.Import().patch({
  $action: 'lfs',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Import().list({ owner: "example", repo: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Import().update({
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImportEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InstallationEntity

```ts
const installation = client.Installation()
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
| `events` | `any[]` | Yes |  |
| `has_multiple_single_files` | `boolean` | No |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The ID of the installation. |
| `permissions` | `Record<string, any>` | Yes | The permissions granted to the user access token. |
| `repositories_url` | `string` | Yes |  |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `any[]` | No |  |
| `suspended_at` | `string` | Yes |  |
| `suspended_by` | `Record<string, any>` | Yes | A GitHub user. |
| `target_id` | `number` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `suspended` | `/app/installations/{installation_id}/suspended` | `client.Installation().remove({ $action: 'suspended', ... })` |
| `suspended` | `/app/installations/{installation_id}/suspended` | `client.Installation().update({ $action: 'suspended', ... })` |

An action returns that action's OWN response, which is not necessarily a
Installation record — check the API definition for its shape.

```ts
const result = await client.Installation().remove({
  $action: 'suspended',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Installation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Installation().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Installation().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Installation().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InstallationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InstallationTokenEntity

```ts
const installation_token = client.InstallationToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `permissions` | `Record<string, any>` | No | The permissions granted to the user access token. |
| `repositories` | `any[]` | No | List of repository names that the token should have access to |
| `repository_ids` | `any[]` | No | List of repository IDs that the token should have access to |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `access_tokens` | `/app/installations/{installation_id}/access_tokens` | `client.InstallationToken().create({ $action: 'access_tokens', ... })` |

An action returns that action's OWN response, which is not necessarily a
InstallationToken record — check the API definition for its shape.

```ts
const result = await client.InstallationToken().create({
  $action: 'access_tokens',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.InstallationToken().create({
  id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InstallationTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationEntity

```ts
const integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apps` | `any[]` | Yes | The GitHub Apps that have push access to this branch. |
| `client_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `events` | `any[]` | Yes | The list of events for the GitHub app. |
| `external_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the GitHub app |
| `installations_count` | `number` | No | The number of installations associated with the GitHub app. |
| `name` | `string` | Yes | The name of the GitHub app |
| `node_id` | `string` | Yes |  |
| `owner` | `any` | Yes |  |
| `permissions` | `Record<string, any>` | Yes | The set of permissions for the GitHub app |
| `slug` | `string` | No | The slug name of the GitHub app |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Integration().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Integration().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Integration().load({ app_slug: 'app_slug' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Integration().remove({ branch_id: 'branch_id', owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Integration().update({
  branch_id: 'branch_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationInstallationEntity

```ts
const integration_installation = client.IntegrationInstallation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the request installation. |
| `node_id` | `string` | No |  |
| `requester` | `Record<string, any>` | Yes | A GitHub user. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IntegrationInstallation().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationInstallationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InteractionEntity

```ts
const interaction = client.Interaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | No |  |
| `limit` | `string` | No |  |
| `origin` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Interaction().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Interaction().remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InteractionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InteractionLimitEntity

```ts
const interaction_limit = client.InteractionLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | Yes |  |
| `expiry` | `string` | No | The duration of the interaction restriction. |
| `limit` | `string` | Yes | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `origin` | `string` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.InteractionLimit().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InteractionLimitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssueEntity

```ts
const issue = client.Issue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `actor` | `Record<string, any>` | Yes | A GitHub user. |
| `after_id` | `number` | No | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `assignee` | `Record<string, any>` | Yes | A GitHub user. |
| `assignees` | `any[]` | No | Usernames of people to assign this issue to. |
| `assigner` | `Record<string, any>` | Yes | A GitHub user. |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `before_id` | `number` | No | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `body` | `string` | No | Contents of the issue comment |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `closed_at` | `string` | Yes |  |
| `closed_by` | `Record<string, any>` | Yes | A GitHub user. |
| `color` | `string` | No | 6-character hex code, without the leading #, identifying the color |
| `comments` | `number` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commit_id` | `string` | Yes |  |
| `commit_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default` | `boolean` | No | Whether this label comes by default in a new repository. |
| `description` | `string` | No | Optional description of the label, such as its purpose. |
| `dismissed_review` | `Record<string, any>` | Yes |  |
| `draft` | `boolean` | No |  |
| `event` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the issue comment |
| `issue` | `Record<string, any>` | Yes | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `issue_dependencies_summary` | `Record<string, any>` | Yes |  |
| `issue_field_values` | `any[]` | No |  |
| `issue_id` | `number` | Yes | The id of the issue that blocks the current issue |
| `issue_url` | `string` | Yes |  |
| `label` | `Record<string, any>` | Yes | Issue Event Label |
| `labels` | `any[]` | Yes | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `labels_url` | `string` | Yes |  |
| `lock_reason` | `string` | No | The reason for locking the issue or pull request conversation. |
| `locked` | `boolean` | Yes |  |
| `milestone` | `Record<string, any>` | Yes | Issue Event Milestone |
| `name` | `string` | No | The name of the label. |
| `node_id` | `string` | Yes |  |
| `number` | `number` | Yes | Number uniquely identifying the issue within its repository |
| `parent_issue_url` | `string` | No | URL to get the parent issue of this issue, if it is a sub-issue |
| `performed_via_github_app` | `Record<string, any>` | Yes | GitHub apps are a new way to extend GitHub. |
| `project_card` | `Record<string, any>` | Yes | Issue Event Project Card |
| `pull_request` | `Record<string, any>` | Yes |  |
| `reactions` | `Record<string, any>` | Yes |  |
| `rename` | `Record<string, any>` | Yes | Issue Event Rename |
| `replace_parent` | `boolean` | No | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `repository` | `Record<string, any>` | Yes | A repository on GitHub. |
| `repository_url` | `string` | Yes |  |
| `requested_reviewer` | `Record<string, any>` | Yes | A GitHub user. |
| `requested_team` | `Record<string, any>` | Yes | Groups of organization members that gives permissions on specified repositories. |
| `review_requester` | `Record<string, any>` | Yes | A GitHub user. |
| `state` | `string` | Yes | State of the issue; either 'open' or 'closed' |
| `state_reason` | `string` | No | The reason for the current state |
| `sub_issue_id` | `number` | Yes | The id of the sub-issue to add. |
| `sub_issues_summary` | `Record<string, any>` | Yes |  |
| `timeline_url` | `string` | No |  |
| `title` | `string` | Yes | Title of the issue |
| `type` | `Record<string, any>` | Yes | The type of issue. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the issue comment |
| `user` | `Record<string, any>` | Yes | A GitHub user. |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `assignee` | `/repos/{owner}/{repo}/issues/{issue_number}/assignees` | `client.Issue().create({ $action: 'assignee', ... })` |
| `comment` | `/repos/{owner}/{repo}/issues/{issue_number}/comments` | `client.Issue().create({ $action: 'comment', ... })` |
| `dependency_blocked_by` | `/repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by` | `client.Issue().create({ $action: 'dependency_blocked_by', ... })` |
| `label` | `/repos/{owner}/{repo}/issues/{issue_number}/labels` | `client.Issue().create({ $action: 'label', ... })` |
| `sub_issue` | `/repos/{owner}/{repo}/issues/{issue_number}/sub_issues` | `client.Issue().create({ $action: 'sub_issue', ... })` |
| `comment` | `/repos/{owner}/{repo}/issues/comments` | `client.Issue().list({ $action: 'comment', ... })` |
| `comment` | `/repos/{owner}/{repo}/issues/{issue_number}/comments` | `client.Issue().list({ $action: 'comment', ... })` |
| `dependency_blocked_by` | `/repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by` | `client.Issue().list({ $action: 'dependency_blocked_by', ... })` |
| `dependency_blocking` | `/repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking` | `client.Issue().list({ $action: 'dependency_blocking', ... })` |
| `event` | `/repos/{owner}/{repo}/issues/{issue_number}/events` | `client.Issue().list({ $action: 'event', ... })` |
| `event` | `/repos/{owner}/{repo}/issues/events` | `client.Issue().list({ $action: 'event', ... })` |
| `label` | `/repos/{owner}/{repo}/issues/{issue_number}/labels` | `client.Issue().list({ $action: 'label', ... })` |
| `parent` | `/repos/{owner}/{repo}/issues/{issue_number}/parent` | `client.Issue().list({ $action: 'parent', ... })` |
| `sub_issue` | `/repos/{owner}/{repo}/issues/{issue_number}/sub_issues` | `client.Issue().list({ $action: 'sub_issue', ... })` |
| `timeline` | `/repos/{owner}/{repo}/issues/{issue_number}/timeline` | `client.Issue().list({ $action: 'timeline', ... })` |
| `assignee` | `/repos/{owner}/{repo}/issues/{issue_number}/assignees` | `client.Issue().remove({ $action: 'assignee', ... })` |
| `label` | `/repos/{owner}/{repo}/issues/{issue_number}/labels` | `client.Issue().remove({ $action: 'label', ... })` |
| `lock` | `/repos/{owner}/{repo}/issues/{issue_number}/lock` | `client.Issue().remove({ $action: 'lock', ... })` |
| `sub_issue` | `/repos/{owner}/{repo}/issues/{issue_number}/sub_issue` | `client.Issue().remove({ $action: 'sub_issue', ... })` |
| `label` | `/repos/{owner}/{repo}/issues/{issue_number}/labels` | `client.Issue().update({ $action: 'label', ... })` |
| `lock` | `/repos/{owner}/{repo}/issues/{issue_number}/lock` | `client.Issue().update({ $action: 'lock', ... })` |
| `sub_issue_priority` | `/repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority` | `client.Issue().update({ $action: 'sub_issue_priority', ... })` |

An action returns that action's OWN response, which is not necessarily a
Issue record — check the API definition for its shape.

```ts
const result = await client.Issue().create({
  $action: 'assignee',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Issue().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Issue().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Issue().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Issue().remove({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Issue().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssueEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssueTypeEntity

```ts
const issue_type = client.IssueType()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IssueType().create({
  org_id: 'example_org_id',
  description: 'example_description',
  id: 1,
  name: 'example_name',
  node_id: 'example_node_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IssueType().list({ org_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IssueType().update({
  id: 1,
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssueTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JobEntity

```ts
const job = client.Job()
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
| `labels` | `any[]` | Yes | Labels for the workflow job. |
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
| `steps` | `any[]` | No | Steps in this job. |
| `url` | `string` | Yes |  |
| `workflow_name` | `string` | Yes | The name of the workflow. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Job().load({ id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JobEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KeyEntity

```ts
const key = client.Key()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Key().create({
  created_at: 'example_created_at',
  id: 1,
  key: 'example_key',
  read_only: true,
  title: 'example_title',
  url: 'example_url',
  verified: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Key().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Key().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LabelEntity

```ts
const label = client.Label()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Label().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Label().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Label().load({ id: 'label_id', owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Label().update({
  id: 'label_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LabelEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LanguageEntity

```ts
const language = client.Language()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `C` | `number` | No |  |
| `Python` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Language().load({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LanguageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LicenseEntity

```ts
const license = client.License()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | Yes |  |
| `conditions` | `any[]` | Yes |  |
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
| `license` | `Record<string, any>` | Yes | License Simple |
| `limitations` | `any[]` | Yes |  |
| `links` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `permissions` | `any[]` | Yes |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.License().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.License().load({ id: 'license_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LicenseEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MarkdownEntity

```ts
const markdown = client.Markdown()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `string` | No | The repository context to use when creating references in `gfm` mode. |
| `mode` | `string` | No | The rendering mode. |
| `text` | `string` | Yes | The Markdown text to render in HTML. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `raw` | `/markdown/raw` | `client.Markdown().create({ $action: 'raw', ... })` |

An action returns that action's OWN response, which is not necessarily a
Markdown record — check the API definition for its shape.

```ts
const result = await client.Markdown().create({
  $action: 'raw',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Markdown().create({
  text: 'example_text',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MarkdownEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MarketplaceListingPlanEntity

```ts
const marketplace_listing_plan = client.MarketplaceListingPlan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts_url` | `string` | Yes |  |
| `bullets` | `any[]` | Yes |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MarketplaceListingPlan().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MarketplaceListingPlanEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MarketplacePurchaseEntity

```ts
const marketplace_purchase = client.MarketplacePurchase()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `marketplace_pending_change` | `Record<string, any>` | No |  |
| `marketplace_purchase` | `Record<string, any>` | Yes |  |
| `organization_billing_email` | `string` | No |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MarketplacePurchase().list({ plan_id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MarketplacePurchase().load({ account_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MarketplacePurchaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemberEntity

```ts
const member = client.Member()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Member().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MembershipEntity

```ts
const membership = client.Membership()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Membership().list({ enterprise: "example", enterprise_team: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Membership().load({ id: 'membership_id', enterprise: 'enterprise', team_id: 'team_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Membership().update({
  id: 'membership_id',
  enterprise: 'enterprise',
  team_id: 'team_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MergedUpstreamEntity

```ts
const merged_upstream = client.MergedUpstream()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_branch` | `string` | No |  |
| `branch` | `string` | Yes | The name of the branch which should be updated to match upstream. |
| `merge_type` | `string` | No |  |
| `message` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MergedUpstream().create({
  owner: 'example_owner',
  repo: 'example_repo',
  branch: 'example_branch',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MergedUpstreamEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MetaEntity

```ts
const meta = client.Meta()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Meta().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Meta().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MetaEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MetarootEntity

```ts
const metaroot = client.Metaroot()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Metaroot().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MetarootEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MigrationEntity

```ts
const migration = client.Migration()
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
| `code_of_conduct` | `Record<string, any>` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `Record<string, any>` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `delete_branch_on_merge` | `boolean` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `boolean` | No |  |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `exclude` | `any[]` | No | Exclude related items from being returned in the response in order to improve performance of the request. |
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
| `license` | `Record<string, any>` | No |  |
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
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `permissions` | `Record<string, any>` | No |  |
| `private` | `boolean` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `repositories` | `any[]` | Yes | The repositories included in the migration. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `Record<string, any>` | No |  |
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
| `topics` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `repository` | `/orgs/{org}/migrations/{migration_id}/repositories` | `client.Migration().list({ $action: 'repository', ... })` |
| `repository` | `/user/migrations/{migration_id}/repositories` | `client.Migration().list({ $action: 'repository', ... })` |
| `archive` | `/orgs/{org}/migrations/{migration_id}/archive` | `client.Migration().load({ $action: 'archive', ... })` |
| `archive` | `/user/migrations/{migration_id}/archive` | `client.Migration().load({ $action: 'archive', ... })` |
| `archive` | `/orgs/{org}/migrations/{migration_id}/archive` | `client.Migration().remove({ $action: 'archive', ... })` |
| `archive` | `/user/migrations/{migration_id}/archive` | `client.Migration().remove({ $action: 'archive', ... })` |

An action returns that action's OWN response, which is not necessarily a
Migration record — check the API definition for its shape.

```ts
const result = await client.Migration().list({
  $action: 'repository',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Migration().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Migration().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Migration().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Migration().remove({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MigrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MilestoneEntity

```ts
const milestone = client.Milestone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `closed_at` | `string` | Yes |  |
| `closed_issues` | `number` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `Record<string, any>` | Yes | A GitHub user. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Milestone().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Milestone().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Milestone().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Milestone().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MilestoneEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MinimalRepositoryEntity

```ts
const minimal_repository = client.MinimalRepository()
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
| `code_of_conduct` | `Record<string, any>` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `custom_properties` | `Record<string, any>` | No | The custom properties that were defined for the repository. |
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
| `license` | `Record<string, any>` | No |  |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | Yes |  |
| `network_count` | `number` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | No |  |
| `open_issues_count` | `number` | No |  |
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `permissions` | `Record<string, any>` | No |  |
| `private` | `boolean` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `Record<string, any>` | No |  |
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
| `topics` | `any[]` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | Yes |  |
| `visibility` | `string` | No |  |
| `watchers` | `number` | No |  |
| `watchers_count` | `number` | No |  |
| `web_commit_signoff_required` | `boolean` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MinimalRepository().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MinimalRepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkConfigurationEntity

```ts
const network_configuration = client.NetworkConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compute_service` | `string` | No | The hosted compute service the network configuration supports. |
| `created_on` | `string` | Yes | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | Yes | The unique identifier of the network configuration. |
| `name` | `string` | Yes | The name of the network configuration. |
| `network_settings_ids` | `any[]` | No | The unique identifier of each network settings in the configuration. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `compute_service` | - | - | - |
| `created_on` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | Yes |
| `network_settings_ids` | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NetworkConfiguration().create({
  org_id: 'example_org_id',
  created_on: 'example_created_on',
  id: 'example_id',
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NetworkConfiguration().load({ id: 'network_configuration_id', org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NetworkConfiguration().update({
  id: 'network_configuration_id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkSettingEntity

```ts
const network_setting = client.NetworkSetting()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NetworkSetting().load({ id: 'network_setting_id', org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OidcCustomSubEntity

```ts
const oidc_custom_sub = client.OidcCustomSub()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include_claim_keys` | `any[]` | Yes | Array of unique strings. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OidcCustomSub().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OidcCustomSubEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OidcCustomSubRepoEntity

```ts
const oidc_custom_sub_repo = client.OidcCustomSubRepo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include_claim_keys` | `any[]` | No | Array of unique strings. |
| `use_default` | `boolean` | Yes | Whether to use the default template or not. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OidcCustomSubRepo().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OidcCustomSubRepoEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgEntity

```ts
const org = client.Org()
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
| `attestations` | `any[]` | No |  |
| `attestations_subject_digests` | `Record<string, any>` | No | Mapping of subject digest to bundles. |
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
| `enterprise_teams_providing_indirect_membership` | `any[]` | No | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `events` | `any[]` | Yes |  |
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
| `organization` | `Record<string, any>` | Yes | A GitHub organization. |
| `organization_url` | `string` | Yes |  |
| `page_info` | `Record<string, any>` | No | Information about the current page. |
| `pat_ids` | `any[]` | Yes | The IDs of the fine-grained personal access tokens. |
| `pat_request_ids` | `any[]` | No | Unique identifiers of the requests for access via fine-grained personal access token. |
| `path` | `string` | No | The path of the artifact. |
| `permissions` | `Record<string, any>` | Yes | The permissions granted to the user access token. |
| `predicate_type` | `string` | No | Optional filter for fetching attestations with a given predicate type. |
| `private_repos` | `number` | Yes |  |
| `properties` | `any[]` | Yes | List of custom property names and associated values to apply to the repositories. |
| `public_members_url` | `string` | Yes |  |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `reason` | `string` | No | Reason for approving or denying the request. |
| `registry_url` | `string` | Yes | The base URL of the artifact registry. |
| `repos_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `repository` | `string` | No | The repository name within the registry. |
| `repository_names` | `any[]` | Yes | The names of repositories that the custom property values will be applied to. |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `role` | `string` | Yes | The user's membership type in the organization. |
| `seats` | `number` | No |  |
| `secret_scanning_enabled_for_new_repositories` | `boolean` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `secret_scanning_push_protection_custom_link` | `string` | No | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `secret_scanning_push_protection_custom_link_enabled` | `boolean` | No | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `secret_scanning_push_protection_enabled_for_new_repositories` | `boolean` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `any[]` | No |  |
| `source` | `string` | No | Source answers the question, "where did this role come from?" |
| `space` | `number` | Yes |  |
| `state` | `string` | Yes | The state of the member in the organization. |
| `status` | `string` | No | The status of the artifact (e.g., active, inactive). |
| `storage_records` | `any[]` | No |  |
| `subject_digests` | `any[]` | Yes | List of subject digests to fetch attestations for. |
| `suspended_at` | `string` | Yes |  |
| `suspended_by` | `Record<string, any>` | Yes | A GitHub user. |
| `target_id` | `number` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `total_count` | `number` | No |  |
| `twitter_username` | `string` | No | The Twitter username of the company. |
| `updated_at` | `string` | Yes | The date and time the role was last updated. |
| `url` | `string` | Yes |  |
| `user` | `Record<string, any>` | Yes | A GitHub user. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `personal_access_token` | `/orgs/{org}/personal-access-tokens` | `client.Org().create({ $action: 'personal_access_token', ... })` |
| `personal_access_token_request` | `/orgs/{org}/personal-access-token-requests` | `client.Org().create({ $action: 'personal_access_token_request', ... })` |
| `installation` | `/orgs/{org}/installations` | `client.Org().list({ $action: 'installation', ... })` |
| `organization_role` | `/orgs/{org}/organization-roles` | `client.Org().list({ $action: 'organization_role', ... })` |

An action returns that action's OWN response, which is not necessarily a
Org record — check the API definition for its shape.

```ts
const result = await client.Org().create({
  $action: 'personal_access_token',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Org().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Org().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Org().load({ id: 'org_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Org().remove({ id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Org().update({
  id: 'org_id',
  username: 'username',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgHookEntity

```ts
const org_hook = client.OrgHook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Determines if notifications are sent when the webhook is triggered. |
| `config` | `Record<string, any>` | Yes | Key/value pairs to provide settings for this webhook. |
| `created_at` | `string` | Yes |  |
| `deliveries_url` | `string` | No |  |
| `events` | `any[]` | Yes | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrgHook().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrgHook().list({ id: "example_id" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrgHook().load({ id: 1, org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrgHook().update({
  id: 1,
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgHookEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgMembershipEntity

```ts
const org_membership = client.OrgMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direct_membership` | `boolean` | No | Whether the user has direct membership in the organization. |
| `enterprise_teams_providing_indirect_membership` | `any[]` | No | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `id` | `string` | No |  |
| `organization` | `Record<string, any>` | Yes | A GitHub organization. |
| `organization_url` | `string` | Yes |  |
| `permissions` | `Record<string, any>` | Yes |  |
| `role` | `string` | Yes | The user's membership type in the organization. |
| `state` | `string` | Yes | The state of the member in the organization. |
| `url` | `string` | Yes |  |
| `user` | `Record<string, any>` | Yes | A GitHub user. |

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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrgMembership().load({ id: 'org_membership_id', org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrgMembership().update({
  id: 'org_membership_id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgPrivateRegistryConfigurationEntity

```ts
const org_private_registry_configuration = client.OrgPrivateRegistryConfiguration()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrgPrivateRegistryConfiguration().load({ org_id: 'org_id', secret_name: 'secret_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgPrivateRegistryConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity

```ts
const org_private_registry_configuration_with_selected_repository = client.OrgPrivateRegistryConfigurationWithSelectedRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `encrypted_value` | `string` | Yes | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `string` | No |  |
| `key_id` | `string` | Yes | The ID of the key you used to encrypt the secret. |
| `registry_type` | `string` | Yes | The registry type. |
| `selected_repository_ids` | `any[]` | No | An array of repository IDs that can access the organization private registry. |
| `url` | `string` | Yes | The URL of the private registry. |
| `username` | `string` | No | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Yes | Which type of organization repositories have access to the private registry. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `private-registries` | `/orgs/{org}/private-registries` | `client.OrgPrivateRegistryConfigurationWithSelectedRepository().create({ $action: 'private-registries', ... })` |

An action returns that action's OWN response, which is not necessarily a
OrgPrivateRegistryConfigurationWithSelectedRepository record — check the API definition for its shape.

```ts
const result = await client.OrgPrivateRegistryConfigurationWithSelectedRepository().create({
  $action: 'private-registries',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrgPrivateRegistryConfigurationWithSelectedRepository().create({
  id: 'example_id',
  encrypted_value: 'example_encrypted_value',
  key_id: 'example_key_id',
  registry_type: 'example_registry_type',
  url: 'example_url',
  visibility: 'example_visibility',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgRepoCustomPropertyValueEntity

```ts
const org_repo_custom_property_value = client.OrgRepoCustomPropertyValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `properties` | `any[]` | Yes | List of custom property names and associated values |
| `repository_full_name` | `string` | Yes |  |
| `repository_id` | `number` | Yes |  |
| `repository_name` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrgRepoCustomPropertyValue().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgRepoCustomPropertyValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationEntity

```ts
const organization = client.Organization()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationActionsSecretEntity

```ts
const organization_actions_secret = client.OrganizationActionsSecret()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationActionsSecret().load({ id: 'organization_actions_secret_id', org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationActionsSecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationActionsVariableEntity

```ts
const organization_actions_variable = client.OrganizationActionsVariable()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationActionsVariable().load({ id: 'organization_actions_variable_id', org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationActionsVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationDependabotSecretEntity

```ts
const organization_dependabot_secret = client.OrganizationDependabotSecret()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationDependabotSecret().load({ id: 'organization_dependabot_secret_id', org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationDependabotSecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationInvitationEntity

```ts
const organization_invitation = client.OrganizationInvitation()
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
| `inviter` | `Record<string, any>` | Yes | A GitHub user. |
| `login` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `role` | `string` | No | The role for the new member. |
| `team_count` | `number` | Yes |  |
| `team_ids` | `any[]` | No | Specify IDs for the teams you want to invite new members to. |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationInvitation().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationInvitation().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationInvitationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationProgrammaticAccessGrantEntity

```ts
const organization_programmatic_access_grant = client.OrganizationProgrammaticAccessGrant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_granted_at` | `string` | Yes | Date and time when the fine-grained personal access token was approved to access the organization. |
| `created_at` | `string` | Yes | Date and time when the request for access was created. |
| `id` | `number` | Yes | Unique identifier of the request for access via fine-grained personal access token. |
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `permissions` | `Record<string, any>` | Yes | Permissions requested, categorized by type of permission. |
| `reason` | `string` | Yes | Reason for requesting access. |
| `repositories_url` | `string` | Yes | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `repository_selection` | `string` | Yes | Type of repository selection requested. |
| `token_expired` | `boolean` | Yes | Whether the associated fine-grained personal access token has expired. |
| `token_expires_at` | `string` | Yes | Date and time when the associated fine-grained personal access token expires. |
| `token_id` | `number` | Yes | Unique identifier of the user's token. |
| `token_last_used_at` | `string` | Yes | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `token_name` | `string` | Yes | The name given to the user's token. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationProgrammaticAccessGrant().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationProgrammaticAccessGrantEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationRoleEntity

```ts
const organization_role = client.OrganizationRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `string` | No | The system role from which this role inherits permissions. |
| `created_at` | `string` | Yes | The date and time the role was created. |
| `description` | `string` | No | A short description about who this role is for or what permissions it grants. |
| `id` | `number` | Yes | The unique identifier of the role. |
| `name` | `string` | Yes | The name of the role. |
| `organization` | `Record<string, any>` | Yes | A GitHub user. |
| `permissions` | `any[]` | Yes | A list of permissions included in this role. |
| `source` | `string` | No | Source answers the question, "where did this role come from?" |
| `updated_at` | `string` | Yes | The date and time the role was last updated. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationRole().load({ id: 1, org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationRoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationSecretScanningAlertEntity

```ts
const organization_secret_scanning_alert = client.OrganizationSecretScanningAlert()
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
| `push_protection_bypass_request_reviewer` | `Record<string, any>` | Yes | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | No | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `boolean` | No | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | No | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `Record<string, any>` | Yes | A GitHub user. |
| `repository` | `Record<string, any>` | Yes | A GitHub repository. |
| `resolution` | `string` | No | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | No | The comment that was optionally added when this alert was closed |
| `resolved_at` | `string` | No | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `Record<string, any>` | Yes | A GitHub user. |
| `secret` | `string` | No | The secret that was detected. |
| `secret_type` | `string` | No | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | No | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | No | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | No | The REST API URL of the alert resource. |
| `validity` | `string` | No | The token status as of the latest validity check. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationSecretScanningAlert().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationSecretScanningAlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OutsideCollaboratorEntity

```ts
const outside_collaborator = client.OutsideCollaborator()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OutsideCollaborator().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OutsideCollaboratorEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PackageEntity

```ts
const package_ = client.Package()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `container` | `Record<string, any>` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deleted_at` | `string` | No |  |
| `description` | `string` | No |  |
| `docker` | `Record<string, any>` | Yes |  |
| `github_id` | `number` | Yes | Unique identifier of the package. |
| `html_url` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the package. |
| `included_gigabytes_bandwidth` | `number` | Yes | Free storage space (GB) for GitHub Packages. |
| `license` | `string` | No |  |
| `metadata` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes | The name of the package. |
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `package_html_url` | `string` | Yes |  |
| `package_type` | `string` | Yes |  |
| `repository` | `Record<string, any>` | Yes | Minimal Repository |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore` | `/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore` | `client.Package().create({ $action: 'restore', ... })` |
| `restore` | `/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore` | `client.Package().create({ $action: 'restore', ... })` |
| `restore` | `/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore` | `client.Package().create({ $action: 'restore', ... })` |

An action returns that action's OWN response, which is not necessarily a
Package record — check the API definition for its shape.

```ts
const result = await client.Package().create({
  $action: 'restore',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Package().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Package().list({ package_type: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Package().load({ package_name: 'package_name', package_type: 'package_type' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Package().remove({ package_name: 'package_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PackageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PageEntity

```ts
const page = client.Page()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_type` | `string` | No | The process in which the Page will be built. |
| `cname` | `string` | Yes | The Pages site's custom domain |
| `custom_404` | `boolean` | Yes | Whether the Page has a custom 404 page. |
| `html_url` | `string` | No | The web address the Page can be accessed from. |
| `https_certificate` | `Record<string, any>` | Yes |  |
| `https_enforced` | `boolean` | No | Whether https is enabled on the domain |
| `pending_domain_unverified_at` | `string` | No | The timestamp when a pending domain becomes unverified. |
| `protected_domain_state` | `string` | No | The state if the domain is verified |
| `public` | `boolean` | Yes | Whether the GitHub Pages site is publicly visible. |
| `source` | `Record<string, any>` | Yes | The source branch and directory used to publish your Pages site. |
| `status` | `string` | Yes | The status of the most recent build of the Page. |
| `url` | `string` | Yes | The API address for accessing this Page resource. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Page().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Page().load({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PageBuildEntity

```ts
const page_build = client.PageBuild()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `duration` | `number` | Yes |  |
| `error` | `Record<string, any>` | Yes |  |
| `id` | `string` | No |  |
| `pusher` | `Record<string, any>` | Yes | A GitHub user. |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PageBuild().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PageBuild().load({ id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PageBuildEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PageBuildStatusEntity

```ts
const page_build_status = client.PageBuildStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PageBuildStatus().create({
  owner: 'example_owner',
  repo: 'example_repo',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PageBuildStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PageDeploymentEntity

```ts
const page_deployment = client.PageDeployment()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PageDeployment().create({
  owner: 'example_owner',
  repo: 'example_repo',
  oidc_token: 'example_oidc_token',
  pages_build_version: 'example_pages_build_version',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PageDeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PagesDeploymentStatusEntity

```ts
const pages_deployment_status = client.PagesDeploymentStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No | The current status of the deployment. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel` | `client.PagesDeploymentStatus().create({ $action: 'cancel', ... })` |

An action returns that action's OWN response, which is not necessarily a
PagesDeploymentStatus record — check the API definition for its shape.

```ts
const result = await client.PagesDeploymentStatus().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PagesDeploymentStatus().create({
  deployment_id: 'example_deployment_id',
  owner: 'example_owner',
  repo: 'example_repo',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PagesDeploymentStatus().load({ owner: 'owner', pages_deployment_id: 'pages_deployment_id', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PagesDeploymentStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PagesHealthCheckEntity

```ts
const pages_health_check = client.PagesHealthCheck()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_domain` | `Record<string, any>` | No |  |
| `domain` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PagesHealthCheck().load({ owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PagesHealthCheckEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ParticipationEntity

```ts
const participation = client.Participation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `all` | `any[]` | Yes |  |
| `owner` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Participation().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ParticipationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PendingDeploymentEntity

```ts
const pending_deployment = client.PendingDeployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_user_can_approve` | `boolean` | Yes | Whether the currently authenticated user can approve the deployment |
| `environment` | `Record<string, any>` | Yes |  |
| `reviewers` | `any[]` | Yes | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | `number` | Yes | The set duration of the wait timer |
| `wait_timer_started_at` | `string` | Yes | The time that the wait timer began. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PendingDeployment().list({ owner: "example", repo: "example", run_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PendingDeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PorterAuthorEntity

```ts
const porter_author = client.PorterAuthor()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PorterAuthor().list({ owner: "example", repo: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PorterAuthor().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PorterAuthorEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PorterLargeFileEntity

```ts
const porter_large_file = client.PorterLargeFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `oid` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `ref_name` | `string` | Yes |  |
| `size` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PorterLargeFile().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PorterLargeFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PrivateRegistryEntity

```ts
const private_registry = client.PrivateRegistry()
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
| `selected_repository_ids` | `any[]` | No | An array of repository IDs that can access the organization private registry. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `public_key` | `/orgs/{org}/private-registries/public-key` | `client.PrivateRegistry().load({ $action: 'public_key', ... })` |

An action returns that action's OWN response, which is not necessarily a
PrivateRegistry record — check the API definition for its shape.

```ts
const result = await client.PrivateRegistry().load({
  $action: 'public_key',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PrivateRegistry().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PrivateRegistry().load({ org_id: 'org_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PrivateRegistry().remove({ id: 'id', org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PrivateRegistry().update({
  id: 'id',
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PrivateRegistryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PrivateUserEntity

```ts
const private_user = client.PrivateUser()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PrivateUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntity

```ts
const project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `body` | `string` | No | The description of the project. |
| `columns_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `Record<string, any>` | Yes | A GitHub user. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Project().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Project().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Project().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Project().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Project().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectCollaboratorPermissionEntity

```ts
const project_collaborator_permission = client.ProjectCollaboratorPermission()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectCollaboratorPermission().load({ project_id: 1, username: 'username' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectCollaboratorPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectColumnEntity

```ts
const project_column = client.ProjectColumn()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectColumn().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectColumn().list({ id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectColumn().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectColumn().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectColumnEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectsClassicEntity

```ts
const projects_classic = client.ProjectsClassic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `permission` | `string` | No | The permission to grant the collaborator. |
| `position` | `string` | Yes | The position of the column in a project. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectsClassic().create({
  column_id: 1,
  position: 'example_position',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectsClassic().remove({ column_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectsClassic().update({
  project_id: 1,
  username: 'username',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectsClassicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectsV2Entity

```ts
const projects_v2 = client.ProjectsV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `string` | Yes | The time when the project was closed. |
| `created_at` | `string` | Yes | The time when the project was created. |
| `creator` | `Record<string, any>` | Yes | A GitHub user. |
| `deleted_at` | `string` | Yes | The time when the project was deleted. |
| `deleted_by` | `Record<string, any>` | Yes | A GitHub user. |
| `description` | `string` | Yes | A short description of the project. |
| `id` | `number` | Yes | The unique identifier of the project. |
| `is_template` | `boolean` | No | Whether this project is a template |
| `latest_status_update` | `Record<string, any>` | Yes | An status update belonging to a project |
| `node_id` | `string` | Yes | The node ID of the project. |
| `number` | `number` | Yes | The project number. |
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `public` | `boolean` | Yes | Whether the project is visible to anyone with access to the owner. |
| `short_description` | `string` | Yes | A concise summary of the project. |
| `state` | `string` | No | The current state of the project. |
| `title` | `string` | Yes | The project title. |
| `updated_at` | `string` | Yes | The time when the project was last updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectsV2().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectsV2().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectsV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectsV2FieldEntity

```ts
const projects_v2_field = client.ProjectsV2Field()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | No | Configuration for iteration fields. |
| `created_at` | `string` | Yes | The time when the field was created. |
| `data_type` | `string` | Yes | The field's data type. |
| `id` | `number` | Yes | The unique identifier of the field. |
| `name` | `string` | Yes | The name of the field. |
| `node_id` | `string` | No | The node ID of the field. |
| `options` | `any[]` | No | The options available for single select fields. |
| `project_url` | `string` | Yes | The API URL of the project that contains the field. |
| `updated_at` | `string` | Yes | The time when the field was last updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectsV2Field().list({ project_number: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectsV2Field().load({ id: 1, projects_v2_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectsV2FieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectsV2ItemSimpleEntity

```ts
const projects_v2_item_simple = client.ProjectsV2ItemSimple()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes | The numeric ID of the issue or pull request to add to the project. |
| `type` | `string` | Yes | The type of item to add to the project. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectsV2ItemSimple().create({
  project_number: 1,
  id: 1,
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectsV2ItemSimpleEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectsV2ItemWithContentEntity

```ts
const projects_v2_item_with_content = client.ProjectsV2ItemWithContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | Yes | The time when the item was archived. |
| `content` | `Record<string, any>` | No | The content of the item, which varies by content type. |
| `content_type` | `string` | Yes | The type of content tracked in a project item |
| `created_at` | `string` | Yes | The time when the item was created. |
| `creator` | `Record<string, any>` | Yes | A GitHub user. |
| `fields` | `any[]` | No | The fields and values associated with this item. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectsV2ItemWithContent().list({ project_number: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectsV2ItemWithContent().load({ item_id: 1, projects_v2_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectsV2ItemWithContent().update({
  item_id: 1,
  projects_v2_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectsV2ItemWithContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProtectedBranchEntity

```ts
const protected_branch = client.ProtectedBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_deletions` | `Record<string, any>` | Yes | Allows deletion of the protected branch by anyone with write access to the repository. |
| `allow_force_pushes` | `Record<string, any>` | Yes | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `allow_fork_syncing` | `Record<string, any>` | No | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `Record<string, any>` | Yes | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `enforce_admins` | `Record<string, any>` | Yes | Enforce all configured restrictions for administrators. |
| `lock_branch` | `Record<string, any>` | No | Whether to set the branch as read-only. |
| `required_conversation_resolution` | `Record<string, any>` | No | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `required_linear_history` | `Record<string, any>` | Yes | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `required_pull_request_reviews` | `Record<string, any>` | Yes | Require at least one approving review on a pull request, before merging. |
| `required_signatures` | `Record<string, any>` | Yes |  |
| `required_status_checks` | `Record<string, any>` | Yes | Status Check Policy |
| `restrictions` | `Record<string, any>` | Yes | Branch Restriction Policy |
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

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProtectedBranch().update({
  branch_id: 'branch_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProtectedBranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProtectedBranchAdminEnforcedEntity

```ts
const protected_branch_admin_enforced = client.ProtectedBranchAdminEnforced()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProtectedBranchAdminEnforced().create({
  branch_id: 'example_branch_id',
  owner: 'example_owner',
  repo: 'example_repo',
  enabled: true,
  url: 'example_url',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProtectedBranchAdminEnforced().load({ branch_id: 'branch_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProtectedBranchAdminEnforcedEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProtectedBranchPullRequestReviewEntity

```ts
const protected_branch_pull_request_review = client.ProtectedBranchPullRequestReview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bypass_pull_request_allowances` | `Record<string, any>` | No | Allow specific users, teams, or apps to bypass pull request requirements. |
| `dismiss_stale_reviews` | `boolean` | Yes | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `dismissal_restrictions` | `Record<string, any>` | No | Specify which users, teams, and apps can dismiss pull request reviews. |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProtectedBranchPullRequestReview().load({ branch_id: 'branch_id', owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProtectedBranchPullRequestReview().update({
  branch_id: 'branch_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProtectedBranchPullRequestReviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicMemberEntity

```ts
const public_member = client.PublicMember()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PublicMember().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PullEntity

```ts
const pull = client.Pull()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `additions` | `number` | Yes |  |
| `assignee` | `Record<string, any>` | Yes | A GitHub user. |
| `assignees` | `any[]` | No |  |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `auto_merge` | `Record<string, any>` | Yes | The status of auto merging a pull request. |
| `base` | `Record<string, any>` | Yes | The name of the branch you want the changes pulled into. |
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
| `head` | `Record<string, any>` | Yes | The name of the branch where your changes are implemented. |
| `head_repo` | `string` | No | The name of the repository where the changes in the pull request were made. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `issue` | `number` | No | An issue in the repository to convert to a pull request. |
| `issue_url` | `string` | Yes |  |
| `labels` | `any[]` | Yes |  |
| `links` | `Record<string, any>` | Yes |  |
| `locked` | `boolean` | Yes |  |
| `maintainer_can_modify` | `boolean` | Yes | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` | `string` | Yes |  |
| `merge_method` | `string` | No | The merge method to use. |
| `mergeable` | `boolean` | Yes |  |
| `mergeable_state` | `string` | Yes |  |
| `merged` | `boolean` | Yes |  |
| `merged_at` | `string` | Yes |  |
| `merged_by` | `Record<string, any>` | Yes | A GitHub user. |
| `message` | `string` | Yes |  |
| `milestone` | `Record<string, any>` | Yes | A collection of related issues and pull requests. |
| `node_id` | `string` | Yes |  |
| `number` | `number` | Yes | Number uniquely identifying the pull request within its repository. |
| `patch_url` | `string` | Yes |  |
| `rebaseable` | `boolean` | No |  |
| `requested_reviewers` | `any[]` | No |  |
| `requested_teams` | `any[]` | No |  |
| `review_comment_url` | `string` | Yes |  |
| `review_comments` | `number` | Yes |  |
| `review_comments_url` | `string` | Yes |  |
| `sha` | `string` | Yes | SHA that pull request head must match to allow merge. |
| `state` | `string` | Yes | State of this Pull Request. |
| `statuses_url` | `string` | Yes |  |
| `title` | `string` | Yes | The title of the pull request. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `Record<string, any>` | Yes | A GitHub user. |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `merge` | `/repos/{owner}/{repo}/pulls/{pull_number}/merge` | `client.Pull().load({ $action: 'merge', ... })` |
| `merge` | `/repos/{owner}/{repo}/pulls/{pull_number}/merge` | `client.Pull().update({ $action: 'merge', ... })` |
| `update_branch` | `/repos/{owner}/{repo}/pulls/{pull_number}/update-branch` | `client.Pull().update({ $action: 'update_branch', ... })` |

An action returns that action's OWN response, which is not necessarily a
Pull record — check the API definition for its shape.

```ts
const result = await client.Pull().load({
  $action: 'merge',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Pull().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Pull().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Pull().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Pull().remove({ comment_id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Pull().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PullEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PullRequestReviewEntity

```ts
const pull_request_review = client.PullRequestReview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `body` | `string` | Yes | The text of the review. |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `comments` | `any[]` | No | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `commit_id` | `string` | Yes | A commit SHA for the review. |
| `event` | `string` | Yes | The review action you want to perform. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the review |
| `links` | `Record<string, any>` | Yes |  |
| `message` | `string` | Yes | The message for the pull request review dismissal |
| `node_id` | `string` | Yes |  |
| `pull_request_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `submitted_at` | `string` | No |  |
| `teams` | `any[]` | Yes |  |
| `user` | `Record<string, any>` | Yes | A GitHub user. |
| `users` | `any[]` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PullRequestReview().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PullRequestReview().list({ owner: "example", pull_number: 1, repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PullRequestReview().load({ id: 1, owner: 'owner', pull_id: 1, repo: 'repo' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PullRequestReview().remove({ id: 1, owner: 'owner', pull_id: 1, repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PullRequestReview().update({
  id: 1,
  owner: 'owner',
  pull_id: 1,
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PullRequestReviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PullRequestReviewCommentEntity

```ts
const pull_request_review_comment = client.PullRequestReviewComment()
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
| `links` | `Record<string, any>` | Yes |  |
| `node_id` | `string` | Yes | The node ID of the pull request review comment. |
| `original_commit_id` | `string` | Yes | The SHA of the original commit to which the comment applies. |
| `original_line` | `number` | No | The line of the blob to which the comment applies. |
| `original_position` | `number` | No | The index of the original line in the diff to which the comment applies. |
| `original_start_line` | `number` | No | The first line of the range for a multi-line comment. |
| `path` | `string` | Yes | The relative path of the file to which the comment applies. |
| `position` | `number` | No | The line index in the diff to which the comment applies. |
| `pull_request_review_id` | `number` | Yes | The ID of the pull request review to which the comment belongs. |
| `pull_request_url` | `string` | Yes | URL for the pull request that the review comment belongs to. |
| `reactions` | `Record<string, any>` | Yes |  |
| `side` | `string` | No | The side of the diff to which the comment applies. |
| `start_line` | `number` | No | The first line of the range for a multi-line comment. |
| `start_side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | No | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the pull request review comment |
| `user` | `Record<string, any>` | Yes | A GitHub user. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PullRequestReviewComment().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PullRequestReviewComment().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PullRequestReviewComment().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PullRequestReviewComment().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PullRequestReviewCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PullRequestSimpleEntity

```ts
const pull_request_simple = client.PullRequestSimple()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reviewers` | `any[]` | No | An array of user `login`s that will be requested. |
| `team_reviewers` | `any[]` | No | An array of team `slug`s that will be requested. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PullRequestSimple().create({
  owner: 'example_owner',
  pull_number: 1,
  repo: 'example_repo',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PullRequestSimple().remove({ owner: 'owner', pull_number: 1, repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PullRequestSimpleEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RateLimitEntity

```ts
const rate_limit = client.RateLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rate` | `Record<string, any>` | Yes |  |
| `resources` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RateLimit().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RateLimitEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReactionEntity

```ts
const reaction = client.Reaction()
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
| `user` | `Record<string, any>` | Yes | A GitHub user. |
| `user_view_type` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Reaction().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Reaction().list({ discussion_number: 1, team_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Reaction().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReferrerEntity

```ts
const referrer = client.Referrer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |
| `referrer` | `string` | Yes |  |
| `uniques` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Referrer().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReferrerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReleaseEntity

```ts
const release = client.Release()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `any[]` | Yes |  |
| `assets_url` | `string` | Yes |  |
| `author` | `Record<string, any>` | Yes | A GitHub user. |
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
| `reactions` | `Record<string, any>` | Yes |  |
| `size` | `number` | Yes |  |
| `state` | `string` | Yes | State of the release asset. |
| `tag_name` | `string` | Yes | The name of the tag. |
| `tarball_url` | `string` | Yes |  |
| `target_commitish` | `string` | Yes | Specifies the commitish value that determines where the Git tag is created from. |
| `updated_at` | `string` | No |  |
| `upload_url` | `string` | Yes |  |
| `uploader` | `Record<string, any>` | Yes | A GitHub user. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `latest` | `/repos/{owner}/{repo}/releases/latest` | `client.Release().list({ $action: 'latest', ... })` |

An action returns that action's OWN response, which is not necessarily a
Release record — check the API definition for its shape.

```ts
const result = await client.Release().list({
  $action: 'latest',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Release().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Release().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Release().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Release().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReleaseAssetEntity

```ts
const release_asset = client.ReleaseAsset()
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
| `uploader` | `Record<string, any>` | No | A GitHub user. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReleaseAsset().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReleaseAsset().list({ id: 1, owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReleaseAsset().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ReleaseAsset().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReleaseAssetEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReleaseNotesContentEntity

```ts
const release_notes_content = client.ReleaseNotesContent()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReleaseNotesContent().create({
  owner: 'example_owner',
  repo: 'example_repo',
  body: 'example_body',
  name: 'example_name',
  tag_name: 'example_tag_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReleaseNotesContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveEntity

```ts
const remove = client.Remove()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usernames` | `any[]` | Yes | The GitHub user handles to be removed from the team. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Remove().create({
  enterprise: 'example_enterprise',
  team_id: 'example_team_id',
  usernames: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepoEntity

```ts
const repo = client.Repo()
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
| `app` | `Record<string, any>` | Yes | A GitHub App that is providing a custom deployment protection rule. |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes | Whether the repository is archived. |
| `assignees_url` | `string` | Yes |  |
| `attestations` | `any[]` | No |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `build_type` | `string` | No | The process by which the GitHub Pages site will be built. |
| `bundle` | `Record<string, any>` | Yes | The attestation's Sigstore Bundle. |
| `client_payload` | `Record<string, any>` | No | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `clone_url` | `string` | Yes |  |
| `cname` | `string` | No | Specify a custom domain for the repository. |
| `code_search_index_status` | `Record<string, any>` | No | The status of the code search index for this repository |
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
| `deployment_branch_policy` | `Record<string, any>` | Yes | The type of deployment branch policy for this environment. |
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
| `license` | `Record<string, any>` | Yes | License Simple |
| `links` | `Record<string, any>` | No |  |
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
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `path` | `string` | No |  |
| `permissions` | `Record<string, any>` | Yes |  |
| `private` | `boolean` | Yes | Whether the repository is private or public. |
| `properties` | `any[]` | Yes | A list of custom property names and associated values to apply to the repositories. |
| `protection_rules` | `any[]` | No | Built-in deployment protection rules for the environment. |
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
| `team_ids` | `any[]` | No | ID of the team or teams to add to the repository. |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `attestation` | `/repos/{owner}/{repo}/attestations` | `client.Repo().create({ $action: 'attestation', ... })` |
| `dispatch` | `/repos/{owner}/{repo}/dispatches` | `client.Repo().create({ $action: 'dispatch', ... })` |
| `fork` | `/repos/{owner}/{repo}/forks` | `client.Repo().create({ $action: 'fork', ... })` |
| `transfer` | `/repos/{owner}/{repo}/transfer` | `client.Repo().create({ $action: 'transfer', ... })` |
| `environment` | `/repos/{owner}/{repo}/environments` | `client.Repo().list({ $action: 'environment', ... })` |
| `private_vulnerability_reporting` | `/repos/{owner}/{repo}/private-vulnerability-reporting` | `client.Repo().load({ $action: 'private_vulnerability_reporting', ... })` |
| `vulnerability_alert` | `/repos/{owner}/{repo}/vulnerability-alerts` | `client.Repo().load({ $action: 'vulnerability_alert', ... })` |
| `automated_security_fix` | `/repos/{owner}/{repo}/automated-security-fixes` | `client.Repo().remove({ $action: 'automated_security_fix', ... })` |
| `page` | `/repos/{owner}/{repo}/pages` | `client.Repo().remove({ $action: 'page', ... })` |
| `private_vulnerability_reporting` | `/repos/{owner}/{repo}/private-vulnerability-reporting` | `client.Repo().remove({ $action: 'private_vulnerability_reporting', ... })` |
| `vulnerability_alert` | `/repos/{owner}/{repo}/vulnerability-alerts` | `client.Repo().remove({ $action: 'vulnerability_alert', ... })` |
| `automated_security_fix` | `/repos/{owner}/{repo}/automated-security-fixes` | `client.Repo().update({ $action: 'automated_security_fix', ... })` |
| `page` | `/repos/{owner}/{repo}/pages` | `client.Repo().update({ $action: 'page', ... })` |
| `private_vulnerability_reporting` | `/repos/{owner}/{repo}/private-vulnerability-reporting` | `client.Repo().update({ $action: 'private_vulnerability_reporting', ... })` |
| `vulnerability_alert` | `/repos/{owner}/{repo}/vulnerability-alerts` | `client.Repo().update({ $action: 'vulnerability_alert', ... })` |

An action returns that action's OWN response, which is not necessarily a
Repo record — check the API definition for its shape.

```ts
const result = await client.Repo().create({
  $action: 'attestation',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Repo().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Repo().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Repo().load({ owner: 'owner', repo: 'repo' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Repo().remove({ owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Repo().update({
  branch_id: 'branch_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepoEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryEntity

```ts
const repository = client.Repository()
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
| `code_search_index_status` | `Record<string, any>` | No | The status of the code search index for this repository |
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
| `license` | `Record<string, any>` | Yes | License Simple |
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
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `permissions` | `Record<string, any>` | Yes |  |
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
| `topics` | `any[]` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `use_squash_pr_title_as_default` | `boolean` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `number` | Yes |  |
| `watchers_count` | `number` | Yes |  |
| `web_commit_signoff_required` | `boolean` | No | Whether to require contributors to sign off on web-based commits |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Repository().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryAdvisoryEntity

```ts
const repository_advisory = client.RepositoryAdvisory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | Yes | The author of the advisory. |
| `closed_at` | `string` | Yes | The date and time of when the advisory was closed, in ISO 8601 format. |
| `collaborating_teams` | `any[]` | Yes | A list of teams that collaborate on the advisory. |
| `collaborating_users` | `any[]` | Yes | A list of users that collaborate on the advisory. |
| `created_at` | `string` | Yes | The date and time of when the advisory was created, in ISO 8601 format. |
| `credits` | `any[]` | Yes | A list of users receiving credit for their participation in the security advisory. |
| `credits_detailed` | `any[]` | Yes |  |
| `cve_id` | `string` | Yes | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `Record<string, any>` | Yes |  |
| `cvss_severities` | `Record<string, any>` | No |  |
| `cvss_vector_string` | `string` | No | The CVSS vector that calculates the severity of the advisory. |
| `cwe_ids` | `any[]` | Yes | A list of only the CWE IDs. |
| `cwes` | `any[]` | Yes |  |
| `description` | `string` | Yes | A detailed description of what the advisory entails. |
| `ghsa_id` | `string` | Yes | The GitHub Security Advisory ID. |
| `html_url` | `string` | Yes | The URL for the advisory. |
| `identifiers` | `any[]` | Yes |  |
| `private_fork` | `any` | Yes | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `published_at` | `string` | Yes | The date and time of when the advisory was published, in ISO 8601 format. |
| `publisher` | `any` | Yes | The publisher of the advisory. |
| `severity` | `string` | Yes | The severity of the advisory. |
| `start_private_fork` | `boolean` | No | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `state` | `string` | Yes | The state of the advisory. |
| `submission` | `Record<string, any>` | Yes |  |
| `summary` | `string` | Yes | A short summary of the advisory. |
| `updated_at` | `string` | Yes | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | Yes | The API URL for the advisory. |
| `vulnerabilities` | `any[]` | Yes | A product affected by the vulnerability detailed in a repository security advisory. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cve` | `/repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve` | `client.RepositoryAdvisory().create({ $action: 'cve', ... })` |

An action returns that action's OWN response, which is not necessarily a
RepositoryAdvisory record — check the API definition for its shape.

```ts
const result = await client.RepositoryAdvisory().create({
  $action: 'cve',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryAdvisory().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryAdvisory().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryAdvisory().load({ ghsa_id: 'ghsa_id', owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RepositoryAdvisory().update({
  ghsa_id: 'ghsa_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryAdvisoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryCollaboratorPermissionEntity

```ts
const repository_collaborator_permission = client.RepositoryCollaboratorPermission()
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
| `permissions` | `Record<string, any>` | Yes |  |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryCollaboratorPermission().load({ owner: 'owner', repo: 'repo', username: 'username' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryCollaboratorPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryInvitationEntity

```ts
const repository_invitation = client.RepositoryInvitation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `expired` | `boolean` | No | Whether or not the invitation has expired |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the repository invitation. |
| `invitee` | `Record<string, any>` | Yes | A GitHub user. |
| `inviter` | `Record<string, any>` | Yes | A GitHub user. |
| `node_id` | `string` | Yes |  |
| `permission` | `string` | No | The permission to grant the collaborator. |
| `permissions` | `string` | Yes | The permission associated with the invitation. |
| `repository` | `Record<string, any>` | Yes | Minimal Repository |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryInvitation().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RepositoryInvitation().update({
  owner: 'owner',
  repo: 'repo',
  username: 'username',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryInvitationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryRuleDetailedEntity

```ts
const repository_rule_detailed = client.RepositoryRuleDetailed()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `parameters` | `Record<string, any>` | No |  |
| `ruleset_id` | `number` | No |  |
| `ruleset_source` | `string` | No |  |
| `ruleset_source_type` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryRuleDetailed().load({ branch: 'branch', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryRuleDetailedEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryRulesetEntity

```ts
const repository_ruleset = client.RepositoryRuleset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bypass_actors` | `any[]` | No | The actors that can bypass the rules in this ruleset |
| `conditions` | `any` | No | Parameters for a repository ruleset ref name condition |
| `created_at` | `string` | No |  |
| `current_user_can_bypass` | `string` | No | The bypass type of the user making the API request for this ruleset. |
| `enforcement` | `string` | Yes | The enforcement level of the ruleset. |
| `id` | `number` | Yes | The ID of the ruleset |
| `links` | `Record<string, any>` | No |  |
| `name` | `string` | Yes | The name of the ruleset |
| `node_id` | `string` | No |  |
| `rules` | `any[]` | No | An array of rules within the ruleset. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RepositoryRuleset().create({
  org_id: 'example_org_id',
  enforcement: 'example_enforcement',
  id: 1,
  name: 'example_name',
  source: 'example_source',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RepositoryRuleset().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositoryRuleset().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RepositoryRuleset().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryRulesetEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositorySubscriptionEntity

```ts
const repository_subscription = client.RepositorySubscription()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RepositorySubscription().load({ owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RepositorySubscription().update({
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositorySubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReviewCommentEntity

```ts
const review_comment = client.ReviewComment()
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
| `links` | `Record<string, any>` | Yes |  |
| `node_id` | `string` | Yes |  |
| `original_commit_id` | `string` | Yes |  |
| `original_line` | `number` | No | The original line of the blob to which the comment applies. |
| `original_position` | `number` | Yes |  |
| `original_start_line` | `number` | No | The original first line of the range for a multi-line comment. |
| `path` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `pull_request_review_id` | `number` | Yes |  |
| `pull_request_url` | `string` | Yes |  |
| `reactions` | `Record<string, any>` | Yes |  |
| `side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `start_line` | `number` | No | The first line of the range for a multi-line comment. |
| `start_side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | No | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `Record<string, any>` | Yes | A GitHub user. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReviewComment().list({ id: 1, owner: "example", pull_id: 1, repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReviewCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RuleSuiteEntity

```ts
const rule_suite = client.RuleSuite()
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
| `rule_evaluations` | `any[]` | No | Details on the evaluated rules. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RuleSuite().list({ org_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RuleSuite().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RuleSuiteEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RulesetVersionEntity

```ts
const ruleset_version = client.RulesetVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Record<string, any>` | Yes | The actor who updated the ruleset |
| `id` | `string` | No |  |
| `updated_at` | `string` | Yes |  |
| `version_id` | `number` | Yes | The ID of the previous version of the ruleset |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `history` | `/repos/{owner}/{repo}/rulesets/{ruleset_id}/history` | `client.RulesetVersion().list({ $action: 'history', ... })` |
| `history` | `/orgs/{org}/rulesets/{ruleset_id}/history` | `client.RulesetVersion().list({ $action: 'history', ... })` |

An action returns that action's OWN response, which is not necessarily a
RulesetVersion record — check the API definition for its shape.

```ts
const result = await client.RulesetVersion().list({
  $action: 'history',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RulesetVersion().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RulesetVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RulesetVersionWithStateEntity

```ts
const ruleset_version_with_state = client.RulesetVersionWithState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Record<string, any>` | Yes | The actor who updated the ruleset |
| `state` | `Record<string, any>` | Yes | The state of the ruleset version |
| `updated_at` | `string` | Yes |  |
| `version_id` | `number` | Yes | The ID of the previous version of the ruleset |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RulesetVersionWithState().load({ ruleset_id: 1, version_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RulesetVersionWithStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RunnerEntity

```ts
const runner = client.Runner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `busy` | `boolean` | Yes |  |
| `ephemeral` | `boolean` | No |  |
| `id` | `number` | Yes | The ID of the runner. |
| `labels` | `any[]` | Yes |  |
| `name` | `string` | Yes | The name of the runner. |
| `os` | `string` | Yes | The Operating System of the runner. |
| `runner_group_id` | `number` | No | The ID of the runner group. |
| `status` | `string` | Yes | The status of the runner. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Runner().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RunnerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RunnerApplicationEntity

```ts
const runner_application = client.RunnerApplication()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RunnerApplication().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RunnerApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RunnerGroupEntity

```ts
const runner_group = client.RunnerGroup()
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
| `runners` | `any[]` | No | List of runner IDs to add to the runner group. |
| `runners_url` | `string` | Yes |  |
| `selected_repositories_url` | `string` | No | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `any[]` | No | List of repository IDs that can access the runner group. |
| `selected_workflows` | `any[]` | No | List of workflows the runner group should be allowed to run. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RunnerGroup().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RunnerGroup().load({ id: 1, org_id: 'org_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RunnerGroup().update({
  id: 1,
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RunnerGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `aliases` | `any[]` | No |  |
| `allow_auto_merge` | `boolean` | No |  |
| `allow_forking` | `boolean` | No |  |
| `allow_merge_commit` | `boolean` | No |  |
| `allow_rebase_merge` | `boolean` | No |  |
| `allow_squash_merge` | `boolean` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `assignee` | `Record<string, any>` | Yes | A GitHub user. |
| `assignees` | `any[]` | No |  |
| `assignees_url` | `string` | Yes |  |
| `author` | `Record<string, any>` | Yes | A GitHub user. |
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
| `commit` | `Record<string, any>` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `committer` | `Record<string, any>` | Yes | Metaproperties for Git author/committer information. |
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
| `issue_dependencies_summary` | `Record<string, any>` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issue_field_values` | `any[]` | No |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels` | `any[]` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `last_modified_at` | `string` | No |  |
| `license` | `Record<string, any>` | Yes | License Simple |
| `line_numbers` | `any[]` | No |  |
| `location` | `string` | No |  |
| `locked` | `boolean` | Yes |  |
| `login` | `string` | Yes |  |
| `logo_url` | `string` | No |  |
| `master_branch` | `string` | No |  |
| `merges_url` | `string` | Yes |  |
| `milestone` | `Record<string, any>` | Yes | A collection of related issues and pull requests. |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `number` | `number` | Yes |  |
| `open_issues` | `number` | Yes |  |
| `open_issues_count` | `number` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `parents` | `any[]` | Yes |  |
| `path` | `string` | Yes |  |
| `performed_via_github_app` | `Record<string, any>` | Yes | GitHub apps are a new way to extend GitHub. |
| `permissions` | `Record<string, any>` | Yes |  |
| `private` | `boolean` | Yes |  |
| `public_gists` | `number` | No |  |
| `public_repos` | `number` | No |  |
| `pull_request` | `Record<string, any>` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `reactions` | `Record<string, any>` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `related` | `any[]` | No |  |
| `released` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repository` | `Record<string, any>` | Yes | A repository on GitHub. |
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
| `sub_issues_summary` | `Record<string, any>` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `suspended_at` | `string` | No |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `text_matches` | `any[]` | No |  |
| `timeline_url` | `string` | No |  |
| `title` | `string` | Yes |  |
| `topics` | `any[]` | No |  |
| `trees_url` | `string` | Yes |  |
| `type` | `Record<string, any>` | Yes | The type of issue. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `Record<string, any>` | Yes | A GitHub user. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `code` | `/search/code` | `client.Search().list({ $action: 'code', ... })` |
| `commit` | `/search/commits` | `client.Search().list({ $action: 'commit', ... })` |
| `issue` | `/search/issues` | `client.Search().list({ $action: 'issue', ... })` |
| `label` | `/search/labels` | `client.Search().list({ $action: 'label', ... })` |
| `repository` | `/search/repositories` | `client.Search().list({ $action: 'repository', ... })` |
| `topic` | `/search/topics` | `client.Search().list({ $action: 'topic', ... })` |
| `user` | `/search/users` | `client.Search().list({ $action: 'user', ... })` |

An action returns that action's OWN response, which is not necessarily a
Search record — check the API definition for its shape.

```ts
const result = await client.Search().list({
  $action: 'code',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Search().list({ q: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretScanningEntity

```ts
const secret_scanning = client.SecretScanning()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_pattern_settings` | `any[]` | No | Pattern settings for custom patterns. |
| `pattern_config_version` | `string` | No | The updated pattern configuration version. |
| `provider_pattern_settings` | `any[]` | No | Pattern settings for provider patterns. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `pattern_configuration` | `/orgs/{org}/secret-scanning/pattern-configurations` | `client.SecretScanning().update({ $action: 'pattern_configuration', ... })` |

An action returns that action's OWN response, which is not necessarily a
SecretScanning record — check the API definition for its shape.

```ts
const result = await client.SecretScanning().update({
  $action: 'pattern_configuration',
  /* ...the action's own arguments */
})
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SecretScanning().update({
  org_id: 'org_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretScanningEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretScanningAlertEntity

```ts
const secret_scanning_alert = client.SecretScanningAlert()
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
| `push_protection_bypass_request_reviewer` | `Record<string, any>` | Yes | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | No | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `boolean` | No | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | No | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `Record<string, any>` | Yes | A GitHub user. |
| `resolution` | `string` | No | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | No | An optional comment to resolve an alert. |
| `resolved_at` | `string` | No | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `Record<string, any>` | Yes | A GitHub user. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SecretScanningAlert().list({ owner: "example", repo: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SecretScanningAlert().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SecretScanningAlert().update({
  id: 1,
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretScanningAlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretScanningLocationEntity

```ts
const secret_scanning_location = client.SecretScanningLocation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `details` | `any` | No |  |
| `type` | `string` | No | The location type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SecretScanningLocation().list({ alert_number: 1, owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretScanningLocationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretScanningPatternConfigurationEntity

```ts
const secret_scanning_pattern_configuration = client.SecretScanningPatternConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_pattern_overrides` | `any[]` | No | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | `string` | No | The version of the entity. |
| `provider_pattern_overrides` | `any[]` | No | Overrides for partner patterns. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SecretScanningPatternConfiguration().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretScanningPatternConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretScanningPushProtectionBypassEntity

```ts
const secret_scanning_push_protection_bypass = client.SecretScanningPushProtectionBypass()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SecretScanningPushProtectionBypass().create({
  owner: 'example_owner',
  repo: 'example_repo',
  placeholder_id: 'example_placeholder_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretScanningPushProtectionBypassEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretScanningScanHistoryEntity

```ts
const secret_scanning_scan_history = client.SecretScanningScanHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `backfill_scans` | `any[]` | No |  |
| `custom_pattern_backfill_scans` | `any[]` | No |  |
| `incremental_scans` | `any[]` | No |  |
| `pattern_update_scans` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SecretScanningScanHistory().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretScanningScanHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecurityAdvisoryEntity

```ts
const security_advisory = client.SecurityAdvisory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `fork` | `/repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks` | `client.SecurityAdvisory().create({ $action: 'fork', ... })` |

An action returns that action's OWN response, which is not necessarily a
SecurityAdvisory record — check the API definition for its shape.

```ts
const result = await client.SecurityAdvisory().create({
  $action: 'fork',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SecurityAdvisory().create({
  id: 'example_id',
  owner: 'example_owner',
  repo: 'example_repo',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecurityAdvisoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SelectedActionEntity

```ts
const selected_action = client.SelectedAction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `github_owned_allowed` | `boolean` | No | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | `any[]` | No | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | `boolean` | No | Whether actions from GitHub Marketplace verified creators are allowed. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SelectedAction().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SelectedActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SelfHostedRunnerEntity

```ts
const self_hosted_runner = client.SelfHostedRunner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled_repositories` | `string` | Yes | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `selected_repositories_url` | `string` | No | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SelfHostedRunner().load({ org_id: 'org_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SelfHostedRunnerEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ShortBlobEntity

```ts
const short_blob = client.ShortBlob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes | The new blob's content. |
| `encoding` | `string` | No | The encoding used for `content`. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ShortBlob().create({
  owner: 'example_owner',
  repo: 'example_repo',
  content: 'example_content',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ShortBlobEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ShortBranchEntity

```ts
const short_branch = client.ShortBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes |  |
| `protected` | `boolean` | Yes |  |
| `protection` | `Record<string, any>` | No | Branch Protection |
| `protection_url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ShortBranch().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ShortBranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SimpleClassroomEntity

```ts
const simple_classroom = client.SimpleClassroom()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SimpleClassroomEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SimpleClassroomAssignmentEntity

```ts
const simple_classroom_assignment = client.SimpleClassroomAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `number` | Yes | The number of students that have accepted the assignment. |
| `classroom` | `Record<string, any>` | Yes | A GitHub Classroom classroom |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SimpleClassroomAssignment().list({ classroom_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SimpleClassroomAssignmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SocialAccountEntity

```ts
const social_account = client.SocialAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_urls` | `any[]` | Yes | Full URLs for the social media profiles to add. |
| `provider` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SocialAccount().create({
  account_urls: [],
  provider: 'example_provider',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SocialAccount().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SocialAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SshSigningKeyEntity

```ts
const ssh_signing_key = client.SshSigningKey()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SshSigningKey().create({
  created_at: 'example_created_at',
  id: 1,
  key: 'example_key',
  title: 'example_title',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SshSigningKey().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SshSigningKey().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SshSigningKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusEntity

```ts
const status = client.Status()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `context` | `string` | No | A string label to differentiate this status from the status of other systems. |
| `created_at` | `string` | Yes |  |
| `creator` | `Record<string, any>` | Yes | A GitHub user. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Status().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Status().list({ owner: "example", ref: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusCheckPolicyEntity

```ts
const status_check_policy = client.StatusCheckPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `number` | Yes |  |
| `checks` | `any[]` | Yes | The list of status checks to require in order to merge into this branch. |
| `context` | `string` | Yes |  |
| `contexts` | `any[]` | Yes | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.StatusCheckPolicy().list({ branch_id: "example", owner: "example", repo: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.StatusCheckPolicy().update({
  branch_id: 'branch_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusCheckPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriberEntity

```ts
const subscriber = client.Subscriber()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Subscriber().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriberEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TagEntity

```ts
const tag = client.Tag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `tarball_url` | `string` | Yes |  |
| `zipball_url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Tag().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TagEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TagProtectionEntity

```ts
const tag_protection = client.TagProtection()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TagProtection().create({
  owner: 'example_owner',
  repo: 'example_repo',
  pattern: 'example_pattern',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TagProtection().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TagProtectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamEntity

```ts
const team = client.Team()
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
| `author` | `Record<string, any>` | Yes | A GitHub user. |
| `avatar_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `body` | `string` | Yes | The main text of the comment. |
| `body_html` | `string` | Yes |  |
| `body_version` | `string` | Yes | The current version of the body content. |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `code_of_conduct` | `Record<string, any>` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `columns_url` | `string` | Yes |  |
| `comments_count` | `number` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `Record<string, any>` | Yes | A GitHub user. |
| `custom_properties` | `Record<string, any>` | No | The custom properties that were defined for the repository. |
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
| `inviter` | `Record<string, any>` | Yes | A GitHub user. |
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
| `license` | `Record<string, any>` | Yes | License Simple |
| `login` | `string` | Yes |  |
| `maintainers` | `any[]` | No | List GitHub usernames for organization members who will become team maintainers. |
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
| `organization` | `Record<string, any>` | Yes | Team Organization |
| `organization_permission` | `string` | No | The organization permission for this project. |
| `organizations_url` | `string` | Yes |  |
| `owner` | `Record<string, any>` | Yes | A GitHub user. |
| `owner_url` | `string` | Yes |  |
| `parent` | `Record<string, any>` | Yes | Groups of organization members that gives permissions on specified repositories. |
| `parent_team_id` | `number` | No | The ID of a team to set as the parent team. |
| `permission` | `string` | Yes | Permission that the team will have for its repositories |
| `permissions` | `Record<string, any>` | Yes |  |
| `pinned` | `boolean` | Yes | Whether or not this discussion should be pinned for easy retrieval. |
| `privacy` | `string` | No | The level of privacy this team should have |
| `private` | `boolean` | Yes | Whether the repository is private or public. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `reactions` | `Record<string, any>` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repo_names` | `any[]` | No | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `repos_count` | `number` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `role` | `string` | Yes | The role of the user in the team. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `Record<string, any>` | No |  |
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
| `topics` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `discussion` | `/orgs/{org}/teams/{team_slug}/discussions` | `client.Team().create({ $action: 'discussion', ... })` |
| `discussion` | `/teams/{team_id}/discussions` | `client.Team().create({ $action: 'discussion', ... })` |
| `discussion` | `/orgs/{org}/teams/{team_slug}/discussions` | `client.Team().list({ $action: 'discussion', ... })` |
| `discussion` | `/teams/{team_id}/discussions` | `client.Team().list({ $action: 'discussion', ... })` |
| `invitation` | `/orgs/{org}/teams/{team_slug}/invitations` | `client.Team().list({ $action: 'invitation', ... })` |
| `invitation` | `/teams/{team_id}/invitations` | `client.Team().list({ $action: 'invitation', ... })` |
| `member` | `/orgs/{org}/teams/{team_slug}/members` | `client.Team().list({ $action: 'member', ... })` |
| `member` | `/teams/{team_id}/members` | `client.Team().list({ $action: 'member', ... })` |
| `project` | `/orgs/{org}/teams/{team_slug}/projects` | `client.Team().list({ $action: 'project', ... })` |
| `project` | `/teams/{team_id}/projects` | `client.Team().list({ $action: 'project', ... })` |
| `repo` | `/orgs/{org}/teams/{team_slug}/repos` | `client.Team().list({ $action: 'repo', ... })` |
| `repo` | `/teams/{team_id}/repos` | `client.Team().list({ $action: 'repo', ... })` |

An action returns that action's OWN response, which is not necessarily a
Team record — check the API definition for its shape.

```ts
const result = await client.Team().create({
  $action: 'discussion',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Team().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Team().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Team().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Team().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Team().update({
  id: 1,
  project_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamSimpleEntity

```ts
const team_simple = client.TeamSimple()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamSimple().list({ org_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamSimpleEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ThreadEntity

```ts
const thread = client.Thread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `last_read_at` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `repository` | `Record<string, any>` | Yes | Minimal Repository |
| `subject` | `Record<string, any>` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `unread` | `boolean` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `subscription` | `/notifications/threads/{thread_id}/subscription` | `client.Thread().remove({ $action: 'subscription', ... })` |

An action returns that action's OWN response, which is not necessarily a
Thread record — check the API definition for its shape.

```ts
const result = await client.Thread().remove({
  $action: 'subscription',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Thread().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Thread().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Thread().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ThreadEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ThreadSubscriptionEntity

```ts
const thread_subscription = client.ThreadSubscription()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ThreadSubscription().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ThreadSubscription().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ThreadSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TopicEntity

```ts
const topic = client.Topic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `names` | `any[]` | Yes | An array of topics to add to the repository. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Topic().list({ owner: "example", repo: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Topic().update({
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TopicEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment` | `string` | No | Determines if the user has a direct, indirect, or mixed relationship to a role |
| `attestations_subject_digests` | `Record<string, any>` | No | Mapping of subject digest to bundles. |
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
| `inherited_from` | `any[]` | No | Team the user has gotten the role through |
| `location` | `string` | No | The new location of the user. |
| `login` | `string` | No |  |
| `name` | `string` | No | The new name of the user. |
| `node_id` | `string` | No |  |
| `organizations_url` | `string` | No |  |
| `owned_private_repos` | `number` | No |  |
| `page_info` | `Record<string, any>` | No | Information about the current page. |
| `plan` | `Record<string, any>` | No |  |
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
| `subject_digests` | `any[]` | Yes | List of subject digests to fetch attestations for. |
| `subscriptions_url` | `string` | No |  |
| `total_private_repos` | `number` | No |  |
| `twitter_username` | `string` | No | The new Twitter username of the user. |
| `two_factor_authentication` | `boolean` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user_view_type` | `string` | No |  |
| `users` | `any[]` | Yes | The username for users |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `attestation_bulk_list` | `/users/{username}/attestations/bulk-list` | `client.User().create({ $action: 'attestation_bulk_list', ... })` |
| `attestation_delete_request` | `/users/{username}/attestations/delete-request` | `client.User().create({ $action: 'attestation_delete_request', ... })` |
| `email` | `/user/emails` | `client.User().remove({ $action: 'email', ... })` |
| `social_account` | `/user/social_accounts` | `client.User().remove({ $action: 'social_account', ... })` |

An action returns that action's OWN response, which is not necessarily a
User record — check the API definition for its shape.

```ts
const result = await client.User().create({
  $action: 'attestation_bulk_list',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.User().create({
  branch_id: 'example_branch_id',
  owner: 'example_owner',
  repo: 'example_repo',
  private_repos: 1,
  space: 1,
  subject_digests: [],
  users: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.User().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.User().remove({ gpg_key_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.User().update({
  id: 1,
  username: 'username',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserMarketplacePurchaseEntity

```ts
const user_marketplace_purchase = client.UserMarketplacePurchase()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `Record<string, any>` | Yes |  |
| `billing_cycle` | `string` | Yes |  |
| `free_trial_ends_on` | `string` | Yes |  |
| `next_billing_date` | `string` | Yes |  |
| `on_free_trial` | `boolean` | Yes |  |
| `plan` | `Record<string, any>` | Yes | Marketplace Listing Plan |
| `unit_count` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserMarketplacePurchase().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserMarketplacePurchaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewEntity

```ts
const view = client.View()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `uniques` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.View().list({ owner: "example", repo: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookConfigEntity

```ts
const webhook_config = client.WebhookConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | No | The media type used to serialize the payloads. |
| `insecure_ssl` | `string` | No |  |
| `secret` | `string` | No | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `url` | `string` | No | The URL to which the payloads will be delivered. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebhookConfig().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WebhookConfig().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowEntity

```ts
const workflow = client.Workflow()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `disable` | `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable` | `client.Workflow().update({ $action: 'disable', ... })` |
| `enable` | `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable` | `client.Workflow().update({ $action: 'enable', ... })` |

An action returns that action's OWN response, which is not necessarily a
Workflow record — check the API definition for its shape.

```ts
const result = await client.Workflow().update({
  $action: 'disable',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Workflow().load({ id: 'workflow_id', owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Workflow().update({
  id: 'workflow_id',
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowRunEntity

```ts
const workflow_run = client.WorkflowRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Record<string, any>` | Yes | A GitHub user. |
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
| `head_commit` | `Record<string, any>` | Yes | A commit. |
| `head_repository` | `Record<string, any>` | Yes | Minimal Repository |
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
| `pull_requests` | `any[]` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `referenced_workflows` | `any[]` | No |  |
| `repository` | `Record<string, any>` | Yes | Minimal Repository |
| `rerun_url` | `string` | Yes | The URL to rerun the workflow run. |
| `run_attempt` | `number` | No | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_number` | `number` | Yes | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | No | The start time of the latest run. |
| `status` | `string` | Yes |  |
| `triggering_actor` | `Record<string, any>` | Yes | A GitHub user. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | The URL to the workflow run. |
| `workflow_id` | `number` | Yes | The ID of the parent workflow. |
| `workflow_url` | `string` | Yes | The URL to the workflow. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/repos/{owner}/{repo}/actions/runs/{run_id}/cancel` | `client.WorkflowRun().create({ $action: 'cancel', ... })` |
| `deployment_protection_rule` | `/repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule` | `client.WorkflowRun().create({ $action: 'deployment_protection_rule', ... })` |
| `force_cancel` | `/repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel` | `client.WorkflowRun().create({ $action: 'force_cancel', ... })` |

An action returns that action's OWN response, which is not necessarily a
WorkflowRun record — check the API definition for its shape.

```ts
const result = await client.WorkflowRun().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkflowRun().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkflowRun().load({ id: 1, owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowRunUsageEntity

```ts
const workflow_run_usage = client.WorkflowRunUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `Record<string, any>` | Yes |  |
| `UBUNTU` | `Record<string, any>` | Yes |  |
| `WINDOWS` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkflowRunUsage().load({ owner: 'owner', repo: 'repo', run_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowRunUsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowUsageEntity

```ts
const workflow_usage = client.WorkflowUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `Record<string, any>` | No |  |
| `UBUNTU` | `Record<string, any>` | No |  |
| `WINDOWS` | `Record<string, any>` | No |  |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `timing` | `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing` | `client.WorkflowUsage().load({ $action: 'timing', ... })` |

An action returns that action's OWN response, which is not necessarily a
WorkflowUsage record — check the API definition for its shape.

```ts
const result = await client.WorkflowUsage().load({
  $action: 'timing',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkflowUsage().load({ id: 'workflow_usage_id', owner: 'owner', repo: 'repo' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowUsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new GithubSDK({
  feature: {
    test: { active: true },
  }
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

