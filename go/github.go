package voxgiggithubsdk

import (
	"github.com/voxgig-sdk/github-sdk/go/core"
	"github.com/voxgig-sdk/github-sdk/go/entity"
	"github.com/voxgig-sdk/github-sdk/go/feature"
	_ "github.com/voxgig-sdk/github-sdk/go/utility"
)

// Type aliases preserve external API.
type GithubSDK = core.GithubSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GithubEntity = core.GithubEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GithubError = core.GithubError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewActionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionEntity(client, entopts)
	}
	core.NewActionsArtifactAndLogRetentionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsArtifactAndLogRetentionEntity(client, entopts)
	}
	core.NewActionsCacheListEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsCacheListEntity(client, entopts)
	}
	core.NewActionsCacheUsageByRepositoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsCacheUsageByRepositoryEntity(client, entopts)
	}
	core.NewActionsCacheUsageOrgEnterpriseEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsCacheUsageOrgEnterpriseEntity(client, entopts)
	}
	core.NewActionsForkPrContributorApprovalEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsForkPrContributorApprovalEntity(client, entopts)
	}
	core.NewActionsForkPrWorkflowsPrivateRepoEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsForkPrWorkflowsPrivateRepoEntity(client, entopts)
	}
	core.NewActionsGetDefaultWorkflowPermissionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsGetDefaultWorkflowPermissionEntity(client, entopts)
	}
	core.NewActionsHostedRunnerEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsHostedRunnerEntity(client, entopts)
	}
	core.NewActionsHostedRunnerLimitEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsHostedRunnerLimitEntity(client, entopts)
	}
	core.NewActionsOrganizationPermissionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsOrganizationPermissionEntity(client, entopts)
	}
	core.NewActionsPublicKeyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsPublicKeyEntity(client, entopts)
	}
	core.NewActionsRepositoryPermissionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsRepositoryPermissionEntity(client, entopts)
	}
	core.NewActionsSecretEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsSecretEntity(client, entopts)
	}
	core.NewActionsVariableEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsVariableEntity(client, entopts)
	}
	core.NewActionsWorkflowAccessToRepositoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActionsWorkflowAccessToRepositoryEntity(client, entopts)
	}
	core.NewActivityEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewActivityEntity(client, entopts)
	}
	core.NewAddEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewAddEntity(client, entopts)
	}
	core.NewApiInsightsRouteStatEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewApiInsightsRouteStatEntity(client, entopts)
	}
	core.NewApiInsightsSubjectStatEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewApiInsightsSubjectStatEntity(client, entopts)
	}
	core.NewApiInsightsSummaryStatEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewApiInsightsSummaryStatEntity(client, entopts)
	}
	core.NewApiInsightsTimeStatEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewApiInsightsTimeStatEntity(client, entopts)
	}
	core.NewApiInsightsUserStatEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewApiInsightsUserStatEntity(client, entopts)
	}
	core.NewApiOverviewEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewApiOverviewEntity(client, entopts)
	}
	core.NewAppEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewAppEntity(client, entopts)
	}
	core.NewArtifactEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewArtifactEntity(client, entopts)
	}
	core.NewAssigneeEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewAssigneeEntity(client, entopts)
	}
	core.NewAuthenticationTokenEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewAuthenticationTokenEntity(client, entopts)
	}
	core.NewAuthorizationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewAuthorizationEntity(client, entopts)
	}
	core.NewAutolinkEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewAutolinkEntity(client, entopts)
	}
	core.NewBaseGistEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewBaseGistEntity(client, entopts)
	}
	core.NewBillingUsageReportEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewBillingUsageReportEntity(client, entopts)
	}
	core.NewBillingUsageReportUserEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewBillingUsageReportUserEntity(client, entopts)
	}
	core.NewBlobEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewBlobEntity(client, entopts)
	}
	core.NewBlockEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewBlockEntity(client, entopts)
	}
	core.NewBranchEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewBranchEntity(client, entopts)
	}
	core.NewBranchProtectionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewBranchProtectionEntity(client, entopts)
	}
	core.NewBranchRestrictionPolicyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewBranchRestrictionPolicyEntity(client, entopts)
	}
	core.NewBranchShortEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewBranchShortEntity(client, entopts)
	}
	core.NewBranchWithProtectionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewBranchWithProtectionEntity(client, entopts)
	}
	core.NewCampaignEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCampaignEntity(client, entopts)
	}
	core.NewCheckEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCheckEntity(client, entopts)
	}
	core.NewCheckAnnotationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCheckAnnotationEntity(client, entopts)
	}
	core.NewCheckAutomatedSecurityFixEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCheckAutomatedSecurityFixEntity(client, entopts)
	}
	core.NewCheckRunEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCheckRunEntity(client, entopts)
	}
	core.NewCheckSuiteEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCheckSuiteEntity(client, entopts)
	}
	core.NewCheckSuitePreferenceEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCheckSuitePreferenceEntity(client, entopts)
	}
	core.NewClassroomEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewClassroomEntity(client, entopts)
	}
	core.NewClassroomAcceptedAssignmentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewClassroomAcceptedAssignmentEntity(client, entopts)
	}
	core.NewClassroomAssignmentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewClassroomAssignmentEntity(client, entopts)
	}
	core.NewClassroomAssignmentGradeEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewClassroomAssignmentGradeEntity(client, entopts)
	}
	core.NewCloneEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCloneEntity(client, entopts)
	}
	core.NewCodeFrequencyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeFrequencyEntity(client, entopts)
	}
	core.NewCodeFrequencyStatEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeFrequencyStatEntity(client, entopts)
	}
	core.NewCodeOfConductEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeOfConductEntity(client, entopts)
	}
	core.NewCodeScanningEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningEntity(client, entopts)
	}
	core.NewCodeScanningAlertEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningAlertEntity(client, entopts)
	}
	core.NewCodeScanningAlertInstanceEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningAlertInstanceEntity(client, entopts)
	}
	core.NewCodeScanningAlertItemEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningAlertItemEntity(client, entopts)
	}
	core.NewCodeScanningAnalysiEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningAnalysiEntity(client, entopts)
	}
	core.NewCodeScanningAnalysisDeletionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningAnalysisDeletionEntity(client, entopts)
	}
	core.NewCodeScanningAutofixEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningAutofixEntity(client, entopts)
	}
	core.NewCodeScanningAutofixCommitEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningAutofixCommitEntity(client, entopts)
	}
	core.NewCodeScanningCodeqlDatabaseEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningCodeqlDatabaseEntity(client, entopts)
	}
	core.NewCodeScanningDefaultSetupEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningDefaultSetupEntity(client, entopts)
	}
	core.NewCodeScanningOrganizationAlertItemEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningOrganizationAlertItemEntity(client, entopts)
	}
	core.NewCodeScanningSarifsStatusEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningSarifsStatusEntity(client, entopts)
	}
	core.NewCodeScanningVariantAnalysiEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningVariantAnalysiEntity(client, entopts)
	}
	core.NewCodeScanningVariantAnalysisRepoTaskEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeScanningVariantAnalysisRepoTaskEntity(client, entopts)
	}
	core.NewCodeSecurityEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeSecurityEntity(client, entopts)
	}
	core.NewCodeSecurityConfigurationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeSecurityConfigurationEntity(client, entopts)
	}
	core.NewCodeSecurityConfigurationRepositoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeSecurityConfigurationRepositoryEntity(client, entopts)
	}
	core.NewCodeSecurityDefaultConfigurationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeSecurityDefaultConfigurationEntity(client, entopts)
	}
	core.NewCodeownersErrorEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodeownersErrorEntity(client, entopts)
	}
	core.NewCodespaceEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCodespaceEntity(client, entopts)
	}
	core.NewCollaboratorEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCollaboratorEntity(client, entopts)
	}
	core.NewCombinedBillingUsageEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCombinedBillingUsageEntity(client, entopts)
	}
	core.NewCombinedCommitStatusEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCombinedCommitStatusEntity(client, entopts)
	}
	core.NewCommitEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCommitEntity(client, entopts)
	}
	core.NewCommitActivityEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCommitActivityEntity(client, entopts)
	}
	core.NewCommitCommentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCommitCommentEntity(client, entopts)
	}
	core.NewCommitComparisonEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCommitComparisonEntity(client, entopts)
	}
	core.NewCommunityProfileEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCommunityProfileEntity(client, entopts)
	}
	core.NewContentFileEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewContentFileEntity(client, entopts)
	}
	core.NewContentTrafficEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewContentTrafficEntity(client, entopts)
	}
	core.NewContributorEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewContributorEntity(client, entopts)
	}
	core.NewCopilotEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCopilotEntity(client, entopts)
	}
	core.NewCopilotOrganizationDetailEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCopilotOrganizationDetailEntity(client, entopts)
	}
	core.NewCopilotUsageMetricsDayEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCopilotUsageMetricsDayEntity(client, entopts)
	}
	core.NewCredentialEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCredentialEntity(client, entopts)
	}
	core.NewCustomPropertyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCustomPropertyEntity(client, entopts)
	}
	core.NewCustomPropertyValueEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewCustomPropertyValueEntity(client, entopts)
	}
	core.NewDependabotEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDependabotEntity(client, entopts)
	}
	core.NewDependabotAlertEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDependabotAlertEntity(client, entopts)
	}
	core.NewDependabotAlertWithRepositoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDependabotAlertWithRepositoryEntity(client, entopts)
	}
	core.NewDependabotPublicKeyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDependabotPublicKeyEntity(client, entopts)
	}
	core.NewDependabotRepositoryAccessDetailEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDependabotRepositoryAccessDetailEntity(client, entopts)
	}
	core.NewDependabotSecretEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDependabotSecretEntity(client, entopts)
	}
	core.NewDependencyGraphEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDependencyGraphEntity(client, entopts)
	}
	core.NewDependencyGraphDiffEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDependencyGraphDiffEntity(client, entopts)
	}
	core.NewDependencyGraphSpdxSbomEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDependencyGraphSpdxSbomEntity(client, entopts)
	}
	core.NewDeployKeyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDeployKeyEntity(client, entopts)
	}
	core.NewDeploymentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDeploymentEntity(client, entopts)
	}
	core.NewDeploymentBranchPolicyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDeploymentBranchPolicyEntity(client, entopts)
	}
	core.NewDeploymentProtectionRuleEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDeploymentProtectionRuleEntity(client, entopts)
	}
	core.NewDeploymentStatusEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDeploymentStatusEntity(client, entopts)
	}
	core.NewDiffEntryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewDiffEntryEntity(client, entopts)
	}
	core.NewEmailEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewEmailEntity(client, entopts)
	}
	core.NewEmojiEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewEmojiEntity(client, entopts)
	}
	core.NewEmptyObjectEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewEmptyObjectEntity(client, entopts)
	}
	core.NewEnterpriseTeamEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewEnterpriseTeamEntity(client, entopts)
	}
	core.NewEnterpriseTeamMembershipEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewEnterpriseTeamMembershipEntity(client, entopts)
	}
	core.NewEnvironmentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewEnvironmentEntity(client, entopts)
	}
	core.NewEnvironmentApprovalEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewEnvironmentApprovalEntity(client, entopts)
	}
	core.NewEventEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewEventEntity(client, entopts)
	}
	core.NewFeedEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewFeedEntity(client, entopts)
	}
	core.NewFileCommitEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewFileCommitEntity(client, entopts)
	}
	core.NewFollowerEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewFollowerEntity(client, entopts)
	}
	core.NewFollowingEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewFollowingEntity(client, entopts)
	}
	core.NewFullRepositoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewFullRepositoryEntity(client, entopts)
	}
	core.NewGistEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGistEntity(client, entopts)
	}
	core.NewGistCommentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGistCommentEntity(client, entopts)
	}
	core.NewGistCommitEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGistCommitEntity(client, entopts)
	}
	core.NewGistSimpleEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGistSimpleEntity(client, entopts)
	}
	core.NewGitEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGitEntity(client, entopts)
	}
	core.NewGitCommitEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGitCommitEntity(client, entopts)
	}
	core.NewGitRefEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGitRefEntity(client, entopts)
	}
	core.NewGitTagEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGitTagEntity(client, entopts)
	}
	core.NewGitTreeEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGitTreeEntity(client, entopts)
	}
	core.NewGitignoreEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGitignoreEntity(client, entopts)
	}
	core.NewGitignoreTemplateEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGitignoreTemplateEntity(client, entopts)
	}
	core.NewGlobalAdvisoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGlobalAdvisoryEntity(client, entopts)
	}
	core.NewGpgKeyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewGpgKeyEntity(client, entopts)
	}
	core.NewHookEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewHookEntity(client, entopts)
	}
	core.NewHookDeliveryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewHookDeliveryEntity(client, entopts)
	}
	core.NewHookDeliveryItemEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewHookDeliveryItemEntity(client, entopts)
	}
	core.NewHostedComputeEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewHostedComputeEntity(client, entopts)
	}
	core.NewHovercardEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewHovercardEntity(client, entopts)
	}
	core.NewImportEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewImportEntity(client, entopts)
	}
	core.NewInstallationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewInstallationEntity(client, entopts)
	}
	core.NewInstallationTokenEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewInstallationTokenEntity(client, entopts)
	}
	core.NewIntegrationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewIntegrationEntity(client, entopts)
	}
	core.NewIntegrationInstallationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewIntegrationInstallationEntity(client, entopts)
	}
	core.NewInteractionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewInteractionEntity(client, entopts)
	}
	core.NewInteractionLimitEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewInteractionLimitEntity(client, entopts)
	}
	core.NewIssueEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewIssueEntity(client, entopts)
	}
	core.NewIssueTypeEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewIssueTypeEntity(client, entopts)
	}
	core.NewJobEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewJobEntity(client, entopts)
	}
	core.NewKeyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewKeyEntity(client, entopts)
	}
	core.NewLabelEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewLabelEntity(client, entopts)
	}
	core.NewLanguageEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewLanguageEntity(client, entopts)
	}
	core.NewLicenseEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewLicenseEntity(client, entopts)
	}
	core.NewMarkdownEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMarkdownEntity(client, entopts)
	}
	core.NewMarketplaceListingPlanEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMarketplaceListingPlanEntity(client, entopts)
	}
	core.NewMarketplacePurchaseEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMarketplacePurchaseEntity(client, entopts)
	}
	core.NewMemberEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMemberEntity(client, entopts)
	}
	core.NewMembershipEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMembershipEntity(client, entopts)
	}
	core.NewMergedUpstreamEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMergedUpstreamEntity(client, entopts)
	}
	core.NewMetaEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMetaEntity(client, entopts)
	}
	core.NewMetarootEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMetarootEntity(client, entopts)
	}
	core.NewMigrationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMigrationEntity(client, entopts)
	}
	core.NewMilestoneEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMilestoneEntity(client, entopts)
	}
	core.NewMinimalRepositoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewMinimalRepositoryEntity(client, entopts)
	}
	core.NewNetworkConfigurationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewNetworkConfigurationEntity(client, entopts)
	}
	core.NewNetworkSettingEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewNetworkSettingEntity(client, entopts)
	}
	core.NewOidcCustomSubEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOidcCustomSubEntity(client, entopts)
	}
	core.NewOidcCustomSubRepoEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOidcCustomSubRepoEntity(client, entopts)
	}
	core.NewOrgEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrgEntity(client, entopts)
	}
	core.NewOrgHookEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrgHookEntity(client, entopts)
	}
	core.NewOrgMembershipEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrgMembershipEntity(client, entopts)
	}
	core.NewOrgPrivateRegistryConfigurationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrgPrivateRegistryConfigurationEntity(client, entopts)
	}
	core.NewOrgPrivateRegistryConfigurationWithSelectedRepositoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrgPrivateRegistryConfigurationWithSelectedRepositoryEntity(client, entopts)
	}
	core.NewOrgRepoCustomPropertyValueEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrgRepoCustomPropertyValueEntity(client, entopts)
	}
	core.NewOrganizationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrganizationEntity(client, entopts)
	}
	core.NewOrganizationActionsSecretEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrganizationActionsSecretEntity(client, entopts)
	}
	core.NewOrganizationActionsVariableEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrganizationActionsVariableEntity(client, entopts)
	}
	core.NewOrganizationDependabotSecretEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrganizationDependabotSecretEntity(client, entopts)
	}
	core.NewOrganizationInvitationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrganizationInvitationEntity(client, entopts)
	}
	core.NewOrganizationProgrammaticAccessGrantEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrganizationProgrammaticAccessGrantEntity(client, entopts)
	}
	core.NewOrganizationRoleEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrganizationRoleEntity(client, entopts)
	}
	core.NewOrganizationSecretScanningAlertEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOrganizationSecretScanningAlertEntity(client, entopts)
	}
	core.NewOutsideCollaboratorEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewOutsideCollaboratorEntity(client, entopts)
	}
	core.NewPackageEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPackageEntity(client, entopts)
	}
	core.NewPageEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPageEntity(client, entopts)
	}
	core.NewPageBuildEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPageBuildEntity(client, entopts)
	}
	core.NewPageBuildStatusEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPageBuildStatusEntity(client, entopts)
	}
	core.NewPageDeploymentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPageDeploymentEntity(client, entopts)
	}
	core.NewPagesDeploymentStatusEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPagesDeploymentStatusEntity(client, entopts)
	}
	core.NewPagesHealthCheckEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPagesHealthCheckEntity(client, entopts)
	}
	core.NewParticipationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewParticipationEntity(client, entopts)
	}
	core.NewPendingDeploymentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPendingDeploymentEntity(client, entopts)
	}
	core.NewPorterAuthorEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPorterAuthorEntity(client, entopts)
	}
	core.NewPorterLargeFileEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPorterLargeFileEntity(client, entopts)
	}
	core.NewPrivateRegistryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPrivateRegistryEntity(client, entopts)
	}
	core.NewPrivateUserEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPrivateUserEntity(client, entopts)
	}
	core.NewProjectEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProjectEntity(client, entopts)
	}
	core.NewProjectCollaboratorPermissionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProjectCollaboratorPermissionEntity(client, entopts)
	}
	core.NewProjectColumnEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProjectColumnEntity(client, entopts)
	}
	core.NewProjectsClassicEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProjectsClassicEntity(client, entopts)
	}
	core.NewProjectsV2EntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProjectsV2Entity(client, entopts)
	}
	core.NewProjectsV2FieldEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProjectsV2FieldEntity(client, entopts)
	}
	core.NewProjectsV2ItemSimpleEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProjectsV2ItemSimpleEntity(client, entopts)
	}
	core.NewProjectsV2ItemWithContentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProjectsV2ItemWithContentEntity(client, entopts)
	}
	core.NewProtectedBranchEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProtectedBranchEntity(client, entopts)
	}
	core.NewProtectedBranchAdminEnforcedEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProtectedBranchAdminEnforcedEntity(client, entopts)
	}
	core.NewProtectedBranchPullRequestReviewEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewProtectedBranchPullRequestReviewEntity(client, entopts)
	}
	core.NewPublicMemberEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPublicMemberEntity(client, entopts)
	}
	core.NewPullEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPullEntity(client, entopts)
	}
	core.NewPullRequestReviewEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPullRequestReviewEntity(client, entopts)
	}
	core.NewPullRequestReviewCommentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPullRequestReviewCommentEntity(client, entopts)
	}
	core.NewPullRequestSimpleEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewPullRequestSimpleEntity(client, entopts)
	}
	core.NewRateLimitEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRateLimitEntity(client, entopts)
	}
	core.NewReactionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewReactionEntity(client, entopts)
	}
	core.NewReferrerEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewReferrerEntity(client, entopts)
	}
	core.NewReleaseEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewReleaseEntity(client, entopts)
	}
	core.NewReleaseAssetEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewReleaseAssetEntity(client, entopts)
	}
	core.NewReleaseNotesContentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewReleaseNotesContentEntity(client, entopts)
	}
	core.NewRemoveEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRemoveEntity(client, entopts)
	}
	core.NewRepoEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRepoEntity(client, entopts)
	}
	core.NewRepositoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRepositoryEntity(client, entopts)
	}
	core.NewRepositoryAdvisoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRepositoryAdvisoryEntity(client, entopts)
	}
	core.NewRepositoryCollaboratorPermissionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRepositoryCollaboratorPermissionEntity(client, entopts)
	}
	core.NewRepositoryInvitationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRepositoryInvitationEntity(client, entopts)
	}
	core.NewRepositoryRuleDetailedEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRepositoryRuleDetailedEntity(client, entopts)
	}
	core.NewRepositoryRulesetEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRepositoryRulesetEntity(client, entopts)
	}
	core.NewRepositorySubscriptionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRepositorySubscriptionEntity(client, entopts)
	}
	core.NewReviewCommentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewReviewCommentEntity(client, entopts)
	}
	core.NewRuleSuiteEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRuleSuiteEntity(client, entopts)
	}
	core.NewRulesetVersionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRulesetVersionEntity(client, entopts)
	}
	core.NewRulesetVersionWithStateEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRulesetVersionWithStateEntity(client, entopts)
	}
	core.NewRunnerEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRunnerEntity(client, entopts)
	}
	core.NewRunnerApplicationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRunnerApplicationEntity(client, entopts)
	}
	core.NewRunnerGroupEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewRunnerGroupEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewSecretScanningEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSecretScanningEntity(client, entopts)
	}
	core.NewSecretScanningAlertEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSecretScanningAlertEntity(client, entopts)
	}
	core.NewSecretScanningLocationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSecretScanningLocationEntity(client, entopts)
	}
	core.NewSecretScanningPatternConfigurationEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSecretScanningPatternConfigurationEntity(client, entopts)
	}
	core.NewSecretScanningPushProtectionBypassEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSecretScanningPushProtectionBypassEntity(client, entopts)
	}
	core.NewSecretScanningScanHistoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSecretScanningScanHistoryEntity(client, entopts)
	}
	core.NewSecurityAdvisoryEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSecurityAdvisoryEntity(client, entopts)
	}
	core.NewSelectedActionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSelectedActionEntity(client, entopts)
	}
	core.NewSelfHostedRunnerEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSelfHostedRunnerEntity(client, entopts)
	}
	core.NewShortBlobEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewShortBlobEntity(client, entopts)
	}
	core.NewShortBranchEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewShortBranchEntity(client, entopts)
	}
	core.NewSimpleClassroomEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSimpleClassroomEntity(client, entopts)
	}
	core.NewSimpleClassroomAssignmentEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSimpleClassroomAssignmentEntity(client, entopts)
	}
	core.NewSocialAccountEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSocialAccountEntity(client, entopts)
	}
	core.NewSshSigningKeyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSshSigningKeyEntity(client, entopts)
	}
	core.NewStatusEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewStatusEntity(client, entopts)
	}
	core.NewStatusCheckPolicyEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewStatusCheckPolicyEntity(client, entopts)
	}
	core.NewSubscriberEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewSubscriberEntity(client, entopts)
	}
	core.NewTagEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewTagEntity(client, entopts)
	}
	core.NewTagProtectionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewTagProtectionEntity(client, entopts)
	}
	core.NewTeamEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewTeamEntity(client, entopts)
	}
	core.NewTeamSimpleEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewTeamSimpleEntity(client, entopts)
	}
	core.NewThreadEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewThreadEntity(client, entopts)
	}
	core.NewThreadSubscriptionEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewThreadSubscriptionEntity(client, entopts)
	}
	core.NewTopicEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewTopicEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewUserMarketplacePurchaseEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewUserMarketplacePurchaseEntity(client, entopts)
	}
	core.NewViewEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewViewEntity(client, entopts)
	}
	core.NewWebhookConfigEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewWebhookConfigEntity(client, entopts)
	}
	core.NewWorkflowEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewWorkflowEntity(client, entopts)
	}
	core.NewWorkflowRunEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewWorkflowRunEntity(client, entopts)
	}
	core.NewWorkflowRunUsageEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewWorkflowRunUsageEntity(client, entopts)
	}
	core.NewWorkflowUsageEntityFunc = func(client *core.GithubSDK, entopts map[string]any) core.GithubEntity {
		return entity.NewWorkflowUsageEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGithubSDK = core.NewGithubSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewGithubSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *GithubSDK  { return NewGithubSDK(nil) }
func Test() *GithubSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
