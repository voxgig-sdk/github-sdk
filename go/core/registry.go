package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewActionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsArtifactAndLogRetentionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsCacheListEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsCacheUsageByRepositoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsCacheUsageOrgEnterpriseEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsForkPrContributorApprovalEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsForkPrWorkflowsPrivateRepoEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsGetDefaultWorkflowPermissionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsHostedRunnerEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsHostedRunnerLimitEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsOrganizationPermissionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsPublicKeyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsRepositoryPermissionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsSecretEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsVariableEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActionsWorkflowAccessToRepositoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewActivityEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewAddEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewApiInsightsRouteStatEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewApiInsightsSubjectStatEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewApiInsightsSummaryStatEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewApiInsightsTimeStatEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewApiInsightsUserStatEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewApiOverviewEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewAppEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewArtifactEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewAssigneeEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewAuthenticationTokenEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewAuthorizationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewAutolinkEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewBaseGistEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewBillingUsageReportEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewBillingUsageReportUserEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewBlobEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewBlockEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewBranchEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewBranchProtectionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewBranchRestrictionPolicyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewBranchShortEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewBranchWithProtectionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCampaignEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCheckEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCheckAnnotationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCheckAutomatedSecurityFixEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCheckRunEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCheckSuiteEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCheckSuitePreferenceEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewClassroomEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewClassroomAcceptedAssignmentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewClassroomAssignmentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewClassroomAssignmentGradeEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCloneEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeFrequencyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeFrequencyStatEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeOfConductEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningAlertEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningAlertInstanceEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningAlertItemEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningAnalysiEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningAnalysisDeletionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningAutofixEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningAutofixCommitEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningCodeqlDatabaseEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningDefaultSetupEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningOrganizationAlertItemEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningSarifsStatusEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningVariantAnalysiEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeScanningVariantAnalysisRepoTaskEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeSecurityEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeSecurityConfigurationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeSecurityConfigurationRepositoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeSecurityDefaultConfigurationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodeownersErrorEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCodespaceEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCollaboratorEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCombinedBillingUsageEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCombinedCommitStatusEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCommitEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCommitActivityEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCommitCommentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCommitComparisonEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCommunityProfileEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewContentFileEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewContentTrafficEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewContributorEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCopilotEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCopilotOrganizationDetailEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCopilotUsageMetricsDayEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCredentialEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCustomPropertyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewCustomPropertyValueEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDependabotEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDependabotAlertEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDependabotAlertWithRepositoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDependabotPublicKeyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDependabotRepositoryAccessDetailEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDependabotSecretEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDependencyGraphEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDependencyGraphDiffEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDependencyGraphSpdxSbomEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDeployKeyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDeploymentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDeploymentBranchPolicyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDeploymentProtectionRuleEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDeploymentStatusEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewDiffEntryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewEmailEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewEmojiEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewEmptyObjectEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewEnterpriseTeamEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewEnterpriseTeamMembershipEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewEnvironmentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewEnvironmentApprovalEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewEventEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewFeedEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewFileCommitEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewFollowerEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewFollowingEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewFullRepositoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGistEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGistCommentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGistCommitEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGistSimpleEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGitEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGitCommitEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGitRefEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGitTagEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGitTreeEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGitignoreEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGitignoreTemplateEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGlobalAdvisoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewGpgKeyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewHookEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewHookDeliveryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewHookDeliveryItemEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewHostedComputeEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewHovercardEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewImportEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewInstallationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewInstallationTokenEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewIntegrationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewIntegrationInstallationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewInteractionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewInteractionLimitEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewIssueEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewIssueTypeEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewJobEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewKeyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewLabelEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewLanguageEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewLicenseEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMarkdownEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMarketplaceListingPlanEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMarketplacePurchaseEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMemberEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMembershipEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMergedUpstreamEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMetaEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMetarootEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMigrationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMilestoneEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewMinimalRepositoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewNetworkConfigurationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewNetworkSettingEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOidcCustomSubEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOidcCustomSubRepoEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrgEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrgHookEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrgMembershipEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrgPrivateRegistryConfigurationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrgPrivateRegistryConfigurationWithSelectedRepositoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrgRepoCustomPropertyValueEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrganizationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrganizationActionsSecretEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrganizationActionsVariableEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrganizationDependabotSecretEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrganizationInvitationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrganizationProgrammaticAccessGrantEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrganizationRoleEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOrganizationSecretScanningAlertEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewOutsideCollaboratorEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPackageEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPageEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPageBuildEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPageBuildStatusEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPageDeploymentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPagesDeploymentStatusEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPagesHealthCheckEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewParticipationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPendingDeploymentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPorterAuthorEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPorterLargeFileEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPrivateRegistryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPrivateUserEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProjectEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProjectCollaboratorPermissionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProjectColumnEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProjectsClassicEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProjectsV2EntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProjectsV2FieldEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProjectsV2ItemSimpleEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProjectsV2ItemWithContentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProtectedBranchEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProtectedBranchAdminEnforcedEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewProtectedBranchPullRequestReviewEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPublicMemberEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPullEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPullRequestReviewEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPullRequestReviewCommentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewPullRequestSimpleEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRateLimitEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewReactionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewReferrerEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewReleaseEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewReleaseAssetEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewReleaseNotesContentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRemoveEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRepoEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRepositoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRepositoryAdvisoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRepositoryCollaboratorPermissionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRepositoryInvitationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRepositoryRuleDetailedEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRepositoryRulesetEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRepositorySubscriptionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewReviewCommentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRuleSuiteEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRulesetVersionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRulesetVersionWithStateEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRunnerEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRunnerApplicationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewRunnerGroupEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSearchEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSecretScanningEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSecretScanningAlertEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSecretScanningLocationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSecretScanningPatternConfigurationEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSecretScanningPushProtectionBypassEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSecretScanningScanHistoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSecurityAdvisoryEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSelectedActionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSelfHostedRunnerEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewShortBlobEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewShortBranchEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSimpleClassroomEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSimpleClassroomAssignmentEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSocialAccountEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSshSigningKeyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewStatusEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewStatusCheckPolicyEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewSubscriberEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewTagEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewTagProtectionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewTeamEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewTeamSimpleEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewThreadEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewThreadSubscriptionEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewTopicEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewUserEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewUserMarketplacePurchaseEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewViewEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewWebhookConfigEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewWorkflowEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewWorkflowRunEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewWorkflowRunUsageEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

var NewWorkflowUsageEntityFunc func(client *GithubSDK, entopts map[string]any) GithubEntity

