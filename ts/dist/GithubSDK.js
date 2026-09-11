"use strict";
// Github Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.GithubSDK = exports.GithubEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActionEntity_1 = require("./entity/ActionEntity");
const ActionsArtifactAndLogRetentionEntity_1 = require("./entity/ActionsArtifactAndLogRetentionEntity");
const ActionsCacheListEntity_1 = require("./entity/ActionsCacheListEntity");
const ActionsCacheUsageByRepositoryEntity_1 = require("./entity/ActionsCacheUsageByRepositoryEntity");
const ActionsCacheUsageOrgEnterpriseEntity_1 = require("./entity/ActionsCacheUsageOrgEnterpriseEntity");
const ActionsForkPrContributorApprovalEntity_1 = require("./entity/ActionsForkPrContributorApprovalEntity");
const ActionsForkPrWorkflowsPrivateRepoEntity_1 = require("./entity/ActionsForkPrWorkflowsPrivateRepoEntity");
const ActionsGetDefaultWorkflowPermissionEntity_1 = require("./entity/ActionsGetDefaultWorkflowPermissionEntity");
const ActionsHostedRunnerEntity_1 = require("./entity/ActionsHostedRunnerEntity");
const ActionsHostedRunnerLimitEntity_1 = require("./entity/ActionsHostedRunnerLimitEntity");
const ActionsOrganizationPermissionEntity_1 = require("./entity/ActionsOrganizationPermissionEntity");
const ActionsPublicKeyEntity_1 = require("./entity/ActionsPublicKeyEntity");
const ActionsRepositoryPermissionEntity_1 = require("./entity/ActionsRepositoryPermissionEntity");
const ActionsSecretEntity_1 = require("./entity/ActionsSecretEntity");
const ActionsVariableEntity_1 = require("./entity/ActionsVariableEntity");
const ActionsWorkflowAccessToRepositoryEntity_1 = require("./entity/ActionsWorkflowAccessToRepositoryEntity");
const ActivityEntity_1 = require("./entity/ActivityEntity");
const AddEntity_1 = require("./entity/AddEntity");
const ApiInsightsRouteStatEntity_1 = require("./entity/ApiInsightsRouteStatEntity");
const ApiInsightsSubjectStatEntity_1 = require("./entity/ApiInsightsSubjectStatEntity");
const ApiInsightsSummaryStatEntity_1 = require("./entity/ApiInsightsSummaryStatEntity");
const ApiInsightsTimeStatEntity_1 = require("./entity/ApiInsightsTimeStatEntity");
const ApiInsightsUserStatEntity_1 = require("./entity/ApiInsightsUserStatEntity");
const ApiOverviewEntity_1 = require("./entity/ApiOverviewEntity");
const AppEntity_1 = require("./entity/AppEntity");
const ArtifactEntity_1 = require("./entity/ArtifactEntity");
const AssigneeEntity_1 = require("./entity/AssigneeEntity");
const AuthenticationTokenEntity_1 = require("./entity/AuthenticationTokenEntity");
const AuthorizationEntity_1 = require("./entity/AuthorizationEntity");
const AutolinkEntity_1 = require("./entity/AutolinkEntity");
const BaseGistEntity_1 = require("./entity/BaseGistEntity");
const BillingUsageReportEntity_1 = require("./entity/BillingUsageReportEntity");
const BillingUsageReportUserEntity_1 = require("./entity/BillingUsageReportUserEntity");
const BlobEntity_1 = require("./entity/BlobEntity");
const BlockEntity_1 = require("./entity/BlockEntity");
const BranchEntity_1 = require("./entity/BranchEntity");
const BranchProtectionEntity_1 = require("./entity/BranchProtectionEntity");
const BranchRestrictionPolicyEntity_1 = require("./entity/BranchRestrictionPolicyEntity");
const BranchShortEntity_1 = require("./entity/BranchShortEntity");
const BranchWithProtectionEntity_1 = require("./entity/BranchWithProtectionEntity");
const CampaignEntity_1 = require("./entity/CampaignEntity");
const CheckEntity_1 = require("./entity/CheckEntity");
const CheckAnnotationEntity_1 = require("./entity/CheckAnnotationEntity");
const CheckAutomatedSecurityFixEntity_1 = require("./entity/CheckAutomatedSecurityFixEntity");
const CheckRunEntity_1 = require("./entity/CheckRunEntity");
const CheckSuiteEntity_1 = require("./entity/CheckSuiteEntity");
const CheckSuitePreferenceEntity_1 = require("./entity/CheckSuitePreferenceEntity");
const ClassroomEntity_1 = require("./entity/ClassroomEntity");
const ClassroomAcceptedAssignmentEntity_1 = require("./entity/ClassroomAcceptedAssignmentEntity");
const ClassroomAssignmentEntity_1 = require("./entity/ClassroomAssignmentEntity");
const ClassroomAssignmentGradeEntity_1 = require("./entity/ClassroomAssignmentGradeEntity");
const CloneEntity_1 = require("./entity/CloneEntity");
const CodeFrequencyEntity_1 = require("./entity/CodeFrequencyEntity");
const CodeFrequencyStatEntity_1 = require("./entity/CodeFrequencyStatEntity");
const CodeOfConductEntity_1 = require("./entity/CodeOfConductEntity");
const CodeScanningEntity_1 = require("./entity/CodeScanningEntity");
const CodeScanningAlertEntity_1 = require("./entity/CodeScanningAlertEntity");
const CodeScanningAlertInstanceEntity_1 = require("./entity/CodeScanningAlertInstanceEntity");
const CodeScanningAlertItemEntity_1 = require("./entity/CodeScanningAlertItemEntity");
const CodeScanningAnalysiEntity_1 = require("./entity/CodeScanningAnalysiEntity");
const CodeScanningAnalysisDeletionEntity_1 = require("./entity/CodeScanningAnalysisDeletionEntity");
const CodeScanningAutofixEntity_1 = require("./entity/CodeScanningAutofixEntity");
const CodeScanningAutofixCommitEntity_1 = require("./entity/CodeScanningAutofixCommitEntity");
const CodeScanningCodeqlDatabaseEntity_1 = require("./entity/CodeScanningCodeqlDatabaseEntity");
const CodeScanningDefaultSetupEntity_1 = require("./entity/CodeScanningDefaultSetupEntity");
const CodeScanningOrganizationAlertItemEntity_1 = require("./entity/CodeScanningOrganizationAlertItemEntity");
const CodeScanningSarifsStatusEntity_1 = require("./entity/CodeScanningSarifsStatusEntity");
const CodeScanningVariantAnalysiEntity_1 = require("./entity/CodeScanningVariantAnalysiEntity");
const CodeScanningVariantAnalysisRepoTaskEntity_1 = require("./entity/CodeScanningVariantAnalysisRepoTaskEntity");
const CodeSecurityEntity_1 = require("./entity/CodeSecurityEntity");
const CodeSecurityConfigurationEntity_1 = require("./entity/CodeSecurityConfigurationEntity");
const CodeSecurityConfigurationRepositoryEntity_1 = require("./entity/CodeSecurityConfigurationRepositoryEntity");
const CodeSecurityDefaultConfigurationEntity_1 = require("./entity/CodeSecurityDefaultConfigurationEntity");
const CodeownersErrorEntity_1 = require("./entity/CodeownersErrorEntity");
const CodespaceEntity_1 = require("./entity/CodespaceEntity");
const CollaboratorEntity_1 = require("./entity/CollaboratorEntity");
const CombinedBillingUsageEntity_1 = require("./entity/CombinedBillingUsageEntity");
const CombinedCommitStatusEntity_1 = require("./entity/CombinedCommitStatusEntity");
const CommitEntity_1 = require("./entity/CommitEntity");
const CommitActivityEntity_1 = require("./entity/CommitActivityEntity");
const CommitCommentEntity_1 = require("./entity/CommitCommentEntity");
const CommitComparisonEntity_1 = require("./entity/CommitComparisonEntity");
const CommunityProfileEntity_1 = require("./entity/CommunityProfileEntity");
const ContentFileEntity_1 = require("./entity/ContentFileEntity");
const ContentTrafficEntity_1 = require("./entity/ContentTrafficEntity");
const ContributorEntity_1 = require("./entity/ContributorEntity");
const CopilotEntity_1 = require("./entity/CopilotEntity");
const CopilotOrganizationDetailEntity_1 = require("./entity/CopilotOrganizationDetailEntity");
const CopilotUsageMetricsDayEntity_1 = require("./entity/CopilotUsageMetricsDayEntity");
const CredentialEntity_1 = require("./entity/CredentialEntity");
const CustomPropertyEntity_1 = require("./entity/CustomPropertyEntity");
const CustomPropertyValueEntity_1 = require("./entity/CustomPropertyValueEntity");
const DependabotEntity_1 = require("./entity/DependabotEntity");
const DependabotAlertEntity_1 = require("./entity/DependabotAlertEntity");
const DependabotAlertWithRepositoryEntity_1 = require("./entity/DependabotAlertWithRepositoryEntity");
const DependabotPublicKeyEntity_1 = require("./entity/DependabotPublicKeyEntity");
const DependabotRepositoryAccessDetailEntity_1 = require("./entity/DependabotRepositoryAccessDetailEntity");
const DependabotSecretEntity_1 = require("./entity/DependabotSecretEntity");
const DependencyGraphEntity_1 = require("./entity/DependencyGraphEntity");
const DependencyGraphDiffEntity_1 = require("./entity/DependencyGraphDiffEntity");
const DependencyGraphSpdxSbomEntity_1 = require("./entity/DependencyGraphSpdxSbomEntity");
const DeployKeyEntity_1 = require("./entity/DeployKeyEntity");
const DeploymentEntity_1 = require("./entity/DeploymentEntity");
const DeploymentBranchPolicyEntity_1 = require("./entity/DeploymentBranchPolicyEntity");
const DeploymentProtectionRuleEntity_1 = require("./entity/DeploymentProtectionRuleEntity");
const DeploymentStatusEntity_1 = require("./entity/DeploymentStatusEntity");
const DiffEntryEntity_1 = require("./entity/DiffEntryEntity");
const EmailEntity_1 = require("./entity/EmailEntity");
const EmojiEntity_1 = require("./entity/EmojiEntity");
const EmptyObjectEntity_1 = require("./entity/EmptyObjectEntity");
const EnterpriseTeamEntity_1 = require("./entity/EnterpriseTeamEntity");
const EnterpriseTeamMembershipEntity_1 = require("./entity/EnterpriseTeamMembershipEntity");
const EnvironmentEntity_1 = require("./entity/EnvironmentEntity");
const EnvironmentApprovalEntity_1 = require("./entity/EnvironmentApprovalEntity");
const EventEntity_1 = require("./entity/EventEntity");
const FeedEntity_1 = require("./entity/FeedEntity");
const FileCommitEntity_1 = require("./entity/FileCommitEntity");
const FollowerEntity_1 = require("./entity/FollowerEntity");
const FollowingEntity_1 = require("./entity/FollowingEntity");
const FullRepositoryEntity_1 = require("./entity/FullRepositoryEntity");
const GistEntity_1 = require("./entity/GistEntity");
const GistCommentEntity_1 = require("./entity/GistCommentEntity");
const GistCommitEntity_1 = require("./entity/GistCommitEntity");
const GistSimpleEntity_1 = require("./entity/GistSimpleEntity");
const GitEntity_1 = require("./entity/GitEntity");
const GitCommitEntity_1 = require("./entity/GitCommitEntity");
const GitRefEntity_1 = require("./entity/GitRefEntity");
const GitTagEntity_1 = require("./entity/GitTagEntity");
const GitTreeEntity_1 = require("./entity/GitTreeEntity");
const GitignoreEntity_1 = require("./entity/GitignoreEntity");
const GitignoreTemplateEntity_1 = require("./entity/GitignoreTemplateEntity");
const GlobalAdvisoryEntity_1 = require("./entity/GlobalAdvisoryEntity");
const GpgKeyEntity_1 = require("./entity/GpgKeyEntity");
const HookEntity_1 = require("./entity/HookEntity");
const HookDeliveryEntity_1 = require("./entity/HookDeliveryEntity");
const HookDeliveryItemEntity_1 = require("./entity/HookDeliveryItemEntity");
const HostedComputeEntity_1 = require("./entity/HostedComputeEntity");
const HovercardEntity_1 = require("./entity/HovercardEntity");
const ImportEntity_1 = require("./entity/ImportEntity");
const InstallationEntity_1 = require("./entity/InstallationEntity");
const InstallationTokenEntity_1 = require("./entity/InstallationTokenEntity");
const IntegrationEntity_1 = require("./entity/IntegrationEntity");
const IntegrationInstallationEntity_1 = require("./entity/IntegrationInstallationEntity");
const InteractionEntity_1 = require("./entity/InteractionEntity");
const InteractionLimitEntity_1 = require("./entity/InteractionLimitEntity");
const IssueEntity_1 = require("./entity/IssueEntity");
const IssueTypeEntity_1 = require("./entity/IssueTypeEntity");
const JobEntity_1 = require("./entity/JobEntity");
const KeyEntity_1 = require("./entity/KeyEntity");
const LabelEntity_1 = require("./entity/LabelEntity");
const LanguageEntity_1 = require("./entity/LanguageEntity");
const LicenseEntity_1 = require("./entity/LicenseEntity");
const MarkdownEntity_1 = require("./entity/MarkdownEntity");
const MarketplaceListingPlanEntity_1 = require("./entity/MarketplaceListingPlanEntity");
const MarketplacePurchaseEntity_1 = require("./entity/MarketplacePurchaseEntity");
const MemberEntity_1 = require("./entity/MemberEntity");
const MembershipEntity_1 = require("./entity/MembershipEntity");
const MergedUpstreamEntity_1 = require("./entity/MergedUpstreamEntity");
const MetaEntity_1 = require("./entity/MetaEntity");
const MetarootEntity_1 = require("./entity/MetarootEntity");
const MigrationEntity_1 = require("./entity/MigrationEntity");
const MilestoneEntity_1 = require("./entity/MilestoneEntity");
const MinimalRepositoryEntity_1 = require("./entity/MinimalRepositoryEntity");
const NetworkConfigurationEntity_1 = require("./entity/NetworkConfigurationEntity");
const NetworkSettingEntity_1 = require("./entity/NetworkSettingEntity");
const OidcCustomSubEntity_1 = require("./entity/OidcCustomSubEntity");
const OidcCustomSubRepoEntity_1 = require("./entity/OidcCustomSubRepoEntity");
const OrgEntity_1 = require("./entity/OrgEntity");
const OrgHookEntity_1 = require("./entity/OrgHookEntity");
const OrgMembershipEntity_1 = require("./entity/OrgMembershipEntity");
const OrgPrivateRegistryConfigurationEntity_1 = require("./entity/OrgPrivateRegistryConfigurationEntity");
const OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity_1 = require("./entity/OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity");
const OrgRepoCustomPropertyValueEntity_1 = require("./entity/OrgRepoCustomPropertyValueEntity");
const OrganizationEntity_1 = require("./entity/OrganizationEntity");
const OrganizationActionsSecretEntity_1 = require("./entity/OrganizationActionsSecretEntity");
const OrganizationActionsVariableEntity_1 = require("./entity/OrganizationActionsVariableEntity");
const OrganizationDependabotSecretEntity_1 = require("./entity/OrganizationDependabotSecretEntity");
const OrganizationInvitationEntity_1 = require("./entity/OrganizationInvitationEntity");
const OrganizationProgrammaticAccessGrantEntity_1 = require("./entity/OrganizationProgrammaticAccessGrantEntity");
const OrganizationRoleEntity_1 = require("./entity/OrganizationRoleEntity");
const OrganizationSecretScanningAlertEntity_1 = require("./entity/OrganizationSecretScanningAlertEntity");
const OutsideCollaboratorEntity_1 = require("./entity/OutsideCollaboratorEntity");
const PackageEntity_1 = require("./entity/PackageEntity");
const PageEntity_1 = require("./entity/PageEntity");
const PageBuildEntity_1 = require("./entity/PageBuildEntity");
const PageBuildStatusEntity_1 = require("./entity/PageBuildStatusEntity");
const PageDeploymentEntity_1 = require("./entity/PageDeploymentEntity");
const PagesDeploymentStatusEntity_1 = require("./entity/PagesDeploymentStatusEntity");
const PagesHealthCheckEntity_1 = require("./entity/PagesHealthCheckEntity");
const ParticipationEntity_1 = require("./entity/ParticipationEntity");
const PendingDeploymentEntity_1 = require("./entity/PendingDeploymentEntity");
const PorterAuthorEntity_1 = require("./entity/PorterAuthorEntity");
const PorterLargeFileEntity_1 = require("./entity/PorterLargeFileEntity");
const PrivateRegistryEntity_1 = require("./entity/PrivateRegistryEntity");
const PrivateUserEntity_1 = require("./entity/PrivateUserEntity");
const ProjectEntity_1 = require("./entity/ProjectEntity");
const ProjectCollaboratorPermissionEntity_1 = require("./entity/ProjectCollaboratorPermissionEntity");
const ProjectColumnEntity_1 = require("./entity/ProjectColumnEntity");
const ProjectsClassicEntity_1 = require("./entity/ProjectsClassicEntity");
const ProjectsV2Entity_1 = require("./entity/ProjectsV2Entity");
const ProjectsV2FieldEntity_1 = require("./entity/ProjectsV2FieldEntity");
const ProjectsV2ItemSimpleEntity_1 = require("./entity/ProjectsV2ItemSimpleEntity");
const ProjectsV2ItemWithContentEntity_1 = require("./entity/ProjectsV2ItemWithContentEntity");
const ProtectedBranchEntity_1 = require("./entity/ProtectedBranchEntity");
const ProtectedBranchAdminEnforcedEntity_1 = require("./entity/ProtectedBranchAdminEnforcedEntity");
const ProtectedBranchPullRequestReviewEntity_1 = require("./entity/ProtectedBranchPullRequestReviewEntity");
const PublicMemberEntity_1 = require("./entity/PublicMemberEntity");
const PullEntity_1 = require("./entity/PullEntity");
const PullRequestReviewEntity_1 = require("./entity/PullRequestReviewEntity");
const PullRequestReviewCommentEntity_1 = require("./entity/PullRequestReviewCommentEntity");
const PullRequestSimpleEntity_1 = require("./entity/PullRequestSimpleEntity");
const RateLimitEntity_1 = require("./entity/RateLimitEntity");
const ReactionEntity_1 = require("./entity/ReactionEntity");
const ReferrerEntity_1 = require("./entity/ReferrerEntity");
const ReleaseEntity_1 = require("./entity/ReleaseEntity");
const ReleaseAssetEntity_1 = require("./entity/ReleaseAssetEntity");
const ReleaseNotesContentEntity_1 = require("./entity/ReleaseNotesContentEntity");
const RemoveEntity_1 = require("./entity/RemoveEntity");
const RepoEntity_1 = require("./entity/RepoEntity");
const RepositoryEntity_1 = require("./entity/RepositoryEntity");
const RepositoryAdvisoryEntity_1 = require("./entity/RepositoryAdvisoryEntity");
const RepositoryCollaboratorPermissionEntity_1 = require("./entity/RepositoryCollaboratorPermissionEntity");
const RepositoryInvitationEntity_1 = require("./entity/RepositoryInvitationEntity");
const RepositoryRuleDetailedEntity_1 = require("./entity/RepositoryRuleDetailedEntity");
const RepositoryRulesetEntity_1 = require("./entity/RepositoryRulesetEntity");
const RepositorySubscriptionEntity_1 = require("./entity/RepositorySubscriptionEntity");
const ReviewCommentEntity_1 = require("./entity/ReviewCommentEntity");
const RuleSuiteEntity_1 = require("./entity/RuleSuiteEntity");
const RulesetVersionEntity_1 = require("./entity/RulesetVersionEntity");
const RulesetVersionWithStateEntity_1 = require("./entity/RulesetVersionWithStateEntity");
const RunnerEntity_1 = require("./entity/RunnerEntity");
const RunnerApplicationEntity_1 = require("./entity/RunnerApplicationEntity");
const RunnerGroupEntity_1 = require("./entity/RunnerGroupEntity");
const SearchEntity_1 = require("./entity/SearchEntity");
const SecretScanningEntity_1 = require("./entity/SecretScanningEntity");
const SecretScanningAlertEntity_1 = require("./entity/SecretScanningAlertEntity");
const SecretScanningLocationEntity_1 = require("./entity/SecretScanningLocationEntity");
const SecretScanningPatternConfigurationEntity_1 = require("./entity/SecretScanningPatternConfigurationEntity");
const SecretScanningPushProtectionBypassEntity_1 = require("./entity/SecretScanningPushProtectionBypassEntity");
const SecretScanningScanHistoryEntity_1 = require("./entity/SecretScanningScanHistoryEntity");
const SecurityAdvisoryEntity_1 = require("./entity/SecurityAdvisoryEntity");
const SelectedActionEntity_1 = require("./entity/SelectedActionEntity");
const SelfHostedRunnerEntity_1 = require("./entity/SelfHostedRunnerEntity");
const ShortBlobEntity_1 = require("./entity/ShortBlobEntity");
const ShortBranchEntity_1 = require("./entity/ShortBranchEntity");
const SimpleClassroomEntity_1 = require("./entity/SimpleClassroomEntity");
const SimpleClassroomAssignmentEntity_1 = require("./entity/SimpleClassroomAssignmentEntity");
const SocialAccountEntity_1 = require("./entity/SocialAccountEntity");
const SshSigningKeyEntity_1 = require("./entity/SshSigningKeyEntity");
const StatusEntity_1 = require("./entity/StatusEntity");
const StatusCheckPolicyEntity_1 = require("./entity/StatusCheckPolicyEntity");
const SubscriberEntity_1 = require("./entity/SubscriberEntity");
const TagEntity_1 = require("./entity/TagEntity");
const TagProtectionEntity_1 = require("./entity/TagProtectionEntity");
const TeamEntity_1 = require("./entity/TeamEntity");
const TeamSimpleEntity_1 = require("./entity/TeamSimpleEntity");
const ThreadEntity_1 = require("./entity/ThreadEntity");
const ThreadSubscriptionEntity_1 = require("./entity/ThreadSubscriptionEntity");
const TopicEntity_1 = require("./entity/TopicEntity");
const UserEntity_1 = require("./entity/UserEntity");
const UserMarketplacePurchaseEntity_1 = require("./entity/UserMarketplacePurchaseEntity");
const ViewEntity_1 = require("./entity/ViewEntity");
const WebhookConfigEntity_1 = require("./entity/WebhookConfigEntity");
const WorkflowEntity_1 = require("./entity/WorkflowEntity");
const WorkflowRunEntity_1 = require("./entity/WorkflowRunEntity");
const WorkflowRunUsageEntity_1 = require("./entity/WorkflowRunUsageEntity");
const WorkflowUsageEntity_1 = require("./entity/WorkflowUsageEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const GithubEntityBase_1 = require("./GithubEntityBase");
Object.defineProperty(exports, "GithubEntityBase", { enumerable: true, get: function () { return GithubEntityBase_1.GithubEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class GithubSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('GithubSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('GithubSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('GithubSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Action(entopts) {
        const self = this;
        return new ActionEntity_1.ActionEntity(self, entopts);
    }
    // Entity access: `client.ActionsArtifactAndLogRetention().list()` / `client.ActionsArtifactAndLogRetention().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsArtifactAndLogRetention(entopts) {
        const self = this;
        return new ActionsArtifactAndLogRetentionEntity_1.ActionsArtifactAndLogRetentionEntity(self, entopts);
    }
    // Entity access: `client.ActionsCacheList().list()` / `client.ActionsCacheList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsCacheList(entopts) {
        const self = this;
        return new ActionsCacheListEntity_1.ActionsCacheListEntity(self, entopts);
    }
    // Entity access: `client.ActionsCacheUsageByRepository().list()` / `client.ActionsCacheUsageByRepository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsCacheUsageByRepository(entopts) {
        const self = this;
        return new ActionsCacheUsageByRepositoryEntity_1.ActionsCacheUsageByRepositoryEntity(self, entopts);
    }
    // Entity access: `client.ActionsCacheUsageOrgEnterprise().list()` / `client.ActionsCacheUsageOrgEnterprise().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsCacheUsageOrgEnterprise(entopts) {
        const self = this;
        return new ActionsCacheUsageOrgEnterpriseEntity_1.ActionsCacheUsageOrgEnterpriseEntity(self, entopts);
    }
    // Entity access: `client.ActionsForkPrContributorApproval().list()` / `client.ActionsForkPrContributorApproval().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsForkPrContributorApproval(entopts) {
        const self = this;
        return new ActionsForkPrContributorApprovalEntity_1.ActionsForkPrContributorApprovalEntity(self, entopts);
    }
    // Entity access: `client.ActionsForkPrWorkflowsPrivateRepo().list()` / `client.ActionsForkPrWorkflowsPrivateRepo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsForkPrWorkflowsPrivateRepo(entopts) {
        const self = this;
        return new ActionsForkPrWorkflowsPrivateRepoEntity_1.ActionsForkPrWorkflowsPrivateRepoEntity(self, entopts);
    }
    // Entity access: `client.ActionsGetDefaultWorkflowPermission().list()` / `client.ActionsGetDefaultWorkflowPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsGetDefaultWorkflowPermission(entopts) {
        const self = this;
        return new ActionsGetDefaultWorkflowPermissionEntity_1.ActionsGetDefaultWorkflowPermissionEntity(self, entopts);
    }
    // Entity access: `client.ActionsHostedRunner().list()` / `client.ActionsHostedRunner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsHostedRunner(entopts) {
        const self = this;
        return new ActionsHostedRunnerEntity_1.ActionsHostedRunnerEntity(self, entopts);
    }
    // Entity access: `client.ActionsHostedRunnerLimit().list()` / `client.ActionsHostedRunnerLimit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsHostedRunnerLimit(entopts) {
        const self = this;
        return new ActionsHostedRunnerLimitEntity_1.ActionsHostedRunnerLimitEntity(self, entopts);
    }
    // Entity access: `client.ActionsOrganizationPermission().list()` / `client.ActionsOrganizationPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsOrganizationPermission(entopts) {
        const self = this;
        return new ActionsOrganizationPermissionEntity_1.ActionsOrganizationPermissionEntity(self, entopts);
    }
    // Entity access: `client.ActionsPublicKey().list()` / `client.ActionsPublicKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsPublicKey(entopts) {
        const self = this;
        return new ActionsPublicKeyEntity_1.ActionsPublicKeyEntity(self, entopts);
    }
    // Entity access: `client.ActionsRepositoryPermission().list()` / `client.ActionsRepositoryPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsRepositoryPermission(entopts) {
        const self = this;
        return new ActionsRepositoryPermissionEntity_1.ActionsRepositoryPermissionEntity(self, entopts);
    }
    // Entity access: `client.ActionsSecret().list()` / `client.ActionsSecret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsSecret(entopts) {
        const self = this;
        return new ActionsSecretEntity_1.ActionsSecretEntity(self, entopts);
    }
    // Entity access: `client.ActionsVariable().list()` / `client.ActionsVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsVariable(entopts) {
        const self = this;
        return new ActionsVariableEntity_1.ActionsVariableEntity(self, entopts);
    }
    // Entity access: `client.ActionsWorkflowAccessToRepository().list()` / `client.ActionsWorkflowAccessToRepository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsWorkflowAccessToRepository(entopts) {
        const self = this;
        return new ActionsWorkflowAccessToRepositoryEntity_1.ActionsWorkflowAccessToRepositoryEntity(self, entopts);
    }
    // Entity access: `client.Activity().list()` / `client.Activity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Activity(entopts) {
        const self = this;
        return new ActivityEntity_1.ActivityEntity(self, entopts);
    }
    // Entity access: `client.Add().list()` / `client.Add().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Add(entopts) {
        const self = this;
        return new AddEntity_1.AddEntity(self, entopts);
    }
    // Entity access: `client.ApiInsightsRouteStat().list()` / `client.ApiInsightsRouteStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiInsightsRouteStat(entopts) {
        const self = this;
        return new ApiInsightsRouteStatEntity_1.ApiInsightsRouteStatEntity(self, entopts);
    }
    // Entity access: `client.ApiInsightsSubjectStat().list()` / `client.ApiInsightsSubjectStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiInsightsSubjectStat(entopts) {
        const self = this;
        return new ApiInsightsSubjectStatEntity_1.ApiInsightsSubjectStatEntity(self, entopts);
    }
    // Entity access: `client.ApiInsightsSummaryStat().list()` / `client.ApiInsightsSummaryStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiInsightsSummaryStat(entopts) {
        const self = this;
        return new ApiInsightsSummaryStatEntity_1.ApiInsightsSummaryStatEntity(self, entopts);
    }
    // Entity access: `client.ApiInsightsTimeStat().list()` / `client.ApiInsightsTimeStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiInsightsTimeStat(entopts) {
        const self = this;
        return new ApiInsightsTimeStatEntity_1.ApiInsightsTimeStatEntity(self, entopts);
    }
    // Entity access: `client.ApiInsightsUserStat().list()` / `client.ApiInsightsUserStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiInsightsUserStat(entopts) {
        const self = this;
        return new ApiInsightsUserStatEntity_1.ApiInsightsUserStatEntity(self, entopts);
    }
    // Entity access: `client.ApiOverview().list()` / `client.ApiOverview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiOverview(entopts) {
        const self = this;
        return new ApiOverviewEntity_1.ApiOverviewEntity(self, entopts);
    }
    // Entity access: `client.App().list()` / `client.App().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    App(entopts) {
        const self = this;
        return new AppEntity_1.AppEntity(self, entopts);
    }
    // Entity access: `client.Artifact().list()` / `client.Artifact().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Artifact(entopts) {
        const self = this;
        return new ArtifactEntity_1.ArtifactEntity(self, entopts);
    }
    // Entity access: `client.Assignee().list()` / `client.Assignee().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Assignee(entopts) {
        const self = this;
        return new AssigneeEntity_1.AssigneeEntity(self, entopts);
    }
    // Entity access: `client.AuthenticationToken().list()` / `client.AuthenticationToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AuthenticationToken(entopts) {
        const self = this;
        return new AuthenticationTokenEntity_1.AuthenticationTokenEntity(self, entopts);
    }
    // Entity access: `client.Authorization().list()` / `client.Authorization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Authorization(entopts) {
        const self = this;
        return new AuthorizationEntity_1.AuthorizationEntity(self, entopts);
    }
    // Entity access: `client.Autolink().list()` / `client.Autolink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Autolink(entopts) {
        const self = this;
        return new AutolinkEntity_1.AutolinkEntity(self, entopts);
    }
    // Entity access: `client.BaseGist().list()` / `client.BaseGist().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BaseGist(entopts) {
        const self = this;
        return new BaseGistEntity_1.BaseGistEntity(self, entopts);
    }
    // Entity access: `client.BillingUsageReport().list()` / `client.BillingUsageReport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillingUsageReport(entopts) {
        const self = this;
        return new BillingUsageReportEntity_1.BillingUsageReportEntity(self, entopts);
    }
    // Entity access: `client.BillingUsageReportUser().list()` / `client.BillingUsageReportUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillingUsageReportUser(entopts) {
        const self = this;
        return new BillingUsageReportUserEntity_1.BillingUsageReportUserEntity(self, entopts);
    }
    // Entity access: `client.Blob().list()` / `client.Blob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Blob(entopts) {
        const self = this;
        return new BlobEntity_1.BlobEntity(self, entopts);
    }
    // Entity access: `client.Block().list()` / `client.Block().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Block(entopts) {
        const self = this;
        return new BlockEntity_1.BlockEntity(self, entopts);
    }
    // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Branch(entopts) {
        const self = this;
        return new BranchEntity_1.BranchEntity(self, entopts);
    }
    // Entity access: `client.BranchProtection().list()` / `client.BranchProtection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchProtection(entopts) {
        const self = this;
        return new BranchProtectionEntity_1.BranchProtectionEntity(self, entopts);
    }
    // Entity access: `client.BranchRestrictionPolicy().list()` / `client.BranchRestrictionPolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchRestrictionPolicy(entopts) {
        const self = this;
        return new BranchRestrictionPolicyEntity_1.BranchRestrictionPolicyEntity(self, entopts);
    }
    // Entity access: `client.BranchShort().list()` / `client.BranchShort().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchShort(entopts) {
        const self = this;
        return new BranchShortEntity_1.BranchShortEntity(self, entopts);
    }
    // Entity access: `client.BranchWithProtection().list()` / `client.BranchWithProtection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchWithProtection(entopts) {
        const self = this;
        return new BranchWithProtectionEntity_1.BranchWithProtectionEntity(self, entopts);
    }
    // Entity access: `client.Campaign().list()` / `client.Campaign().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Campaign(entopts) {
        const self = this;
        return new CampaignEntity_1.CampaignEntity(self, entopts);
    }
    // Entity access: `client.Check().list()` / `client.Check().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Check(entopts) {
        const self = this;
        return new CheckEntity_1.CheckEntity(self, entopts);
    }
    // Entity access: `client.CheckAnnotation().list()` / `client.CheckAnnotation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CheckAnnotation(entopts) {
        const self = this;
        return new CheckAnnotationEntity_1.CheckAnnotationEntity(self, entopts);
    }
    // Entity access: `client.CheckAutomatedSecurityFix().list()` / `client.CheckAutomatedSecurityFix().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CheckAutomatedSecurityFix(entopts) {
        const self = this;
        return new CheckAutomatedSecurityFixEntity_1.CheckAutomatedSecurityFixEntity(self, entopts);
    }
    // Entity access: `client.CheckRun().list()` / `client.CheckRun().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CheckRun(entopts) {
        const self = this;
        return new CheckRunEntity_1.CheckRunEntity(self, entopts);
    }
    // Entity access: `client.CheckSuite().list()` / `client.CheckSuite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CheckSuite(entopts) {
        const self = this;
        return new CheckSuiteEntity_1.CheckSuiteEntity(self, entopts);
    }
    // Entity access: `client.CheckSuitePreference().list()` / `client.CheckSuitePreference().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CheckSuitePreference(entopts) {
        const self = this;
        return new CheckSuitePreferenceEntity_1.CheckSuitePreferenceEntity(self, entopts);
    }
    // Entity access: `client.Classroom().list()` / `client.Classroom().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Classroom(entopts) {
        const self = this;
        return new ClassroomEntity_1.ClassroomEntity(self, entopts);
    }
    // Entity access: `client.ClassroomAcceptedAssignment().list()` / `client.ClassroomAcceptedAssignment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ClassroomAcceptedAssignment(entopts) {
        const self = this;
        return new ClassroomAcceptedAssignmentEntity_1.ClassroomAcceptedAssignmentEntity(self, entopts);
    }
    // Entity access: `client.ClassroomAssignment().list()` / `client.ClassroomAssignment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ClassroomAssignment(entopts) {
        const self = this;
        return new ClassroomAssignmentEntity_1.ClassroomAssignmentEntity(self, entopts);
    }
    // Entity access: `client.ClassroomAssignmentGrade().list()` / `client.ClassroomAssignmentGrade().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ClassroomAssignmentGrade(entopts) {
        const self = this;
        return new ClassroomAssignmentGradeEntity_1.ClassroomAssignmentGradeEntity(self, entopts);
    }
    // Entity access: `client.Clone().list()` / `client.Clone().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Clone(entopts) {
        const self = this;
        return new CloneEntity_1.CloneEntity(self, entopts);
    }
    // Entity access: `client.CodeFrequency().list()` / `client.CodeFrequency().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeFrequency(entopts) {
        const self = this;
        return new CodeFrequencyEntity_1.CodeFrequencyEntity(self, entopts);
    }
    // Entity access: `client.CodeFrequencyStat().list()` / `client.CodeFrequencyStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeFrequencyStat(entopts) {
        const self = this;
        return new CodeFrequencyStatEntity_1.CodeFrequencyStatEntity(self, entopts);
    }
    // Entity access: `client.CodeOfConduct().list()` / `client.CodeOfConduct().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeOfConduct(entopts) {
        const self = this;
        return new CodeOfConductEntity_1.CodeOfConductEntity(self, entopts);
    }
    // Entity access: `client.CodeScanning().list()` / `client.CodeScanning().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanning(entopts) {
        const self = this;
        return new CodeScanningEntity_1.CodeScanningEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningAlert().list()` / `client.CodeScanningAlert().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningAlert(entopts) {
        const self = this;
        return new CodeScanningAlertEntity_1.CodeScanningAlertEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningAlertInstance().list()` / `client.CodeScanningAlertInstance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningAlertInstance(entopts) {
        const self = this;
        return new CodeScanningAlertInstanceEntity_1.CodeScanningAlertInstanceEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningAlertItem().list()` / `client.CodeScanningAlertItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningAlertItem(entopts) {
        const self = this;
        return new CodeScanningAlertItemEntity_1.CodeScanningAlertItemEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningAnalysi().list()` / `client.CodeScanningAnalysi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningAnalysi(entopts) {
        const self = this;
        return new CodeScanningAnalysiEntity_1.CodeScanningAnalysiEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningAnalysisDeletion().list()` / `client.CodeScanningAnalysisDeletion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningAnalysisDeletion(entopts) {
        const self = this;
        return new CodeScanningAnalysisDeletionEntity_1.CodeScanningAnalysisDeletionEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningAutofix().list()` / `client.CodeScanningAutofix().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningAutofix(entopts) {
        const self = this;
        return new CodeScanningAutofixEntity_1.CodeScanningAutofixEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningAutofixCommit().list()` / `client.CodeScanningAutofixCommit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningAutofixCommit(entopts) {
        const self = this;
        return new CodeScanningAutofixCommitEntity_1.CodeScanningAutofixCommitEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningCodeqlDatabase().list()` / `client.CodeScanningCodeqlDatabase().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningCodeqlDatabase(entopts) {
        const self = this;
        return new CodeScanningCodeqlDatabaseEntity_1.CodeScanningCodeqlDatabaseEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningDefaultSetup().list()` / `client.CodeScanningDefaultSetup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningDefaultSetup(entopts) {
        const self = this;
        return new CodeScanningDefaultSetupEntity_1.CodeScanningDefaultSetupEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningOrganizationAlertItem().list()` / `client.CodeScanningOrganizationAlertItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningOrganizationAlertItem(entopts) {
        const self = this;
        return new CodeScanningOrganizationAlertItemEntity_1.CodeScanningOrganizationAlertItemEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningSarifsStatus().list()` / `client.CodeScanningSarifsStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningSarifsStatus(entopts) {
        const self = this;
        return new CodeScanningSarifsStatusEntity_1.CodeScanningSarifsStatusEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningVariantAnalysi().list()` / `client.CodeScanningVariantAnalysi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningVariantAnalysi(entopts) {
        const self = this;
        return new CodeScanningVariantAnalysiEntity_1.CodeScanningVariantAnalysiEntity(self, entopts);
    }
    // Entity access: `client.CodeScanningVariantAnalysisRepoTask().list()` / `client.CodeScanningVariantAnalysisRepoTask().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeScanningVariantAnalysisRepoTask(entopts) {
        const self = this;
        return new CodeScanningVariantAnalysisRepoTaskEntity_1.CodeScanningVariantAnalysisRepoTaskEntity(self, entopts);
    }
    // Entity access: `client.CodeSecurity().list()` / `client.CodeSecurity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeSecurity(entopts) {
        const self = this;
        return new CodeSecurityEntity_1.CodeSecurityEntity(self, entopts);
    }
    // Entity access: `client.CodeSecurityConfiguration().list()` / `client.CodeSecurityConfiguration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeSecurityConfiguration(entopts) {
        const self = this;
        return new CodeSecurityConfigurationEntity_1.CodeSecurityConfigurationEntity(self, entopts);
    }
    // Entity access: `client.CodeSecurityConfigurationRepository().list()` / `client.CodeSecurityConfigurationRepository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeSecurityConfigurationRepository(entopts) {
        const self = this;
        return new CodeSecurityConfigurationRepositoryEntity_1.CodeSecurityConfigurationRepositoryEntity(self, entopts);
    }
    // Entity access: `client.CodeSecurityDefaultConfiguration().list()` / `client.CodeSecurityDefaultConfiguration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeSecurityDefaultConfiguration(entopts) {
        const self = this;
        return new CodeSecurityDefaultConfigurationEntity_1.CodeSecurityDefaultConfigurationEntity(self, entopts);
    }
    // Entity access: `client.CodeownersError().list()` / `client.CodeownersError().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CodeownersError(entopts) {
        const self = this;
        return new CodeownersErrorEntity_1.CodeownersErrorEntity(self, entopts);
    }
    // Entity access: `client.Codespace().list()` / `client.Codespace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Codespace(entopts) {
        const self = this;
        return new CodespaceEntity_1.CodespaceEntity(self, entopts);
    }
    // Entity access: `client.Collaborator().list()` / `client.Collaborator().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Collaborator(entopts) {
        const self = this;
        return new CollaboratorEntity_1.CollaboratorEntity(self, entopts);
    }
    // Entity access: `client.CombinedBillingUsage().list()` / `client.CombinedBillingUsage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CombinedBillingUsage(entopts) {
        const self = this;
        return new CombinedBillingUsageEntity_1.CombinedBillingUsageEntity(self, entopts);
    }
    // Entity access: `client.CombinedCommitStatus().list()` / `client.CombinedCommitStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CombinedCommitStatus(entopts) {
        const self = this;
        return new CombinedCommitStatusEntity_1.CombinedCommitStatusEntity(self, entopts);
    }
    // Entity access: `client.Commit().list()` / `client.Commit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Commit(entopts) {
        const self = this;
        return new CommitEntity_1.CommitEntity(self, entopts);
    }
    // Entity access: `client.CommitActivity().list()` / `client.CommitActivity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CommitActivity(entopts) {
        const self = this;
        return new CommitActivityEntity_1.CommitActivityEntity(self, entopts);
    }
    // Entity access: `client.CommitComment().list()` / `client.CommitComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CommitComment(entopts) {
        const self = this;
        return new CommitCommentEntity_1.CommitCommentEntity(self, entopts);
    }
    // Entity access: `client.CommitComparison().list()` / `client.CommitComparison().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CommitComparison(entopts) {
        const self = this;
        return new CommitComparisonEntity_1.CommitComparisonEntity(self, entopts);
    }
    // Entity access: `client.CommunityProfile().list()` / `client.CommunityProfile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CommunityProfile(entopts) {
        const self = this;
        return new CommunityProfileEntity_1.CommunityProfileEntity(self, entopts);
    }
    // Entity access: `client.ContentFile().list()` / `client.ContentFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContentFile(entopts) {
        const self = this;
        return new ContentFileEntity_1.ContentFileEntity(self, entopts);
    }
    // Entity access: `client.ContentTraffic().list()` / `client.ContentTraffic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContentTraffic(entopts) {
        const self = this;
        return new ContentTrafficEntity_1.ContentTrafficEntity(self, entopts);
    }
    // Entity access: `client.Contributor().list()` / `client.Contributor().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Contributor(entopts) {
        const self = this;
        return new ContributorEntity_1.ContributorEntity(self, entopts);
    }
    // Entity access: `client.Copilot().list()` / `client.Copilot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Copilot(entopts) {
        const self = this;
        return new CopilotEntity_1.CopilotEntity(self, entopts);
    }
    // Entity access: `client.CopilotOrganizationDetail().list()` / `client.CopilotOrganizationDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CopilotOrganizationDetail(entopts) {
        const self = this;
        return new CopilotOrganizationDetailEntity_1.CopilotOrganizationDetailEntity(self, entopts);
    }
    // Entity access: `client.CopilotUsageMetricsDay().list()` / `client.CopilotUsageMetricsDay().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CopilotUsageMetricsDay(entopts) {
        const self = this;
        return new CopilotUsageMetricsDayEntity_1.CopilotUsageMetricsDayEntity(self, entopts);
    }
    // Entity access: `client.Credential().list()` / `client.Credential().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Credential(entopts) {
        const self = this;
        return new CredentialEntity_1.CredentialEntity(self, entopts);
    }
    // Entity access: `client.CustomProperty().list()` / `client.CustomProperty().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomProperty(entopts) {
        const self = this;
        return new CustomPropertyEntity_1.CustomPropertyEntity(self, entopts);
    }
    // Entity access: `client.CustomPropertyValue().list()` / `client.CustomPropertyValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomPropertyValue(entopts) {
        const self = this;
        return new CustomPropertyValueEntity_1.CustomPropertyValueEntity(self, entopts);
    }
    // Entity access: `client.Dependabot().list()` / `client.Dependabot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Dependabot(entopts) {
        const self = this;
        return new DependabotEntity_1.DependabotEntity(self, entopts);
    }
    // Entity access: `client.DependabotAlert().list()` / `client.DependabotAlert().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DependabotAlert(entopts) {
        const self = this;
        return new DependabotAlertEntity_1.DependabotAlertEntity(self, entopts);
    }
    // Entity access: `client.DependabotAlertWithRepository().list()` / `client.DependabotAlertWithRepository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DependabotAlertWithRepository(entopts) {
        const self = this;
        return new DependabotAlertWithRepositoryEntity_1.DependabotAlertWithRepositoryEntity(self, entopts);
    }
    // Entity access: `client.DependabotPublicKey().list()` / `client.DependabotPublicKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DependabotPublicKey(entopts) {
        const self = this;
        return new DependabotPublicKeyEntity_1.DependabotPublicKeyEntity(self, entopts);
    }
    // Entity access: `client.DependabotRepositoryAccessDetail().list()` / `client.DependabotRepositoryAccessDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DependabotRepositoryAccessDetail(entopts) {
        const self = this;
        return new DependabotRepositoryAccessDetailEntity_1.DependabotRepositoryAccessDetailEntity(self, entopts);
    }
    // Entity access: `client.DependabotSecret().list()` / `client.DependabotSecret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DependabotSecret(entopts) {
        const self = this;
        return new DependabotSecretEntity_1.DependabotSecretEntity(self, entopts);
    }
    // Entity access: `client.DependencyGraph().list()` / `client.DependencyGraph().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DependencyGraph(entopts) {
        const self = this;
        return new DependencyGraphEntity_1.DependencyGraphEntity(self, entopts);
    }
    // Entity access: `client.DependencyGraphDiff().list()` / `client.DependencyGraphDiff().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DependencyGraphDiff(entopts) {
        const self = this;
        return new DependencyGraphDiffEntity_1.DependencyGraphDiffEntity(self, entopts);
    }
    // Entity access: `client.DependencyGraphSpdxSbom().list()` / `client.DependencyGraphSpdxSbom().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DependencyGraphSpdxSbom(entopts) {
        const self = this;
        return new DependencyGraphSpdxSbomEntity_1.DependencyGraphSpdxSbomEntity(self, entopts);
    }
    // Entity access: `client.DeployKey().list()` / `client.DeployKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeployKey(entopts) {
        const self = this;
        return new DeployKeyEntity_1.DeployKeyEntity(self, entopts);
    }
    // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Deployment(entopts) {
        const self = this;
        return new DeploymentEntity_1.DeploymentEntity(self, entopts);
    }
    // Entity access: `client.DeploymentBranchPolicy().list()` / `client.DeploymentBranchPolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeploymentBranchPolicy(entopts) {
        const self = this;
        return new DeploymentBranchPolicyEntity_1.DeploymentBranchPolicyEntity(self, entopts);
    }
    // Entity access: `client.DeploymentProtectionRule().list()` / `client.DeploymentProtectionRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeploymentProtectionRule(entopts) {
        const self = this;
        return new DeploymentProtectionRuleEntity_1.DeploymentProtectionRuleEntity(self, entopts);
    }
    // Entity access: `client.DeploymentStatus().list()` / `client.DeploymentStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeploymentStatus(entopts) {
        const self = this;
        return new DeploymentStatusEntity_1.DeploymentStatusEntity(self, entopts);
    }
    // Entity access: `client.DiffEntry().list()` / `client.DiffEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DiffEntry(entopts) {
        const self = this;
        return new DiffEntryEntity_1.DiffEntryEntity(self, entopts);
    }
    // Entity access: `client.Email().list()` / `client.Email().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Email(entopts) {
        const self = this;
        return new EmailEntity_1.EmailEntity(self, entopts);
    }
    // Entity access: `client.Emoji().list()` / `client.Emoji().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Emoji(entopts) {
        const self = this;
        return new EmojiEntity_1.EmojiEntity(self, entopts);
    }
    // Entity access: `client.EmptyObject().list()` / `client.EmptyObject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmptyObject(entopts) {
        const self = this;
        return new EmptyObjectEntity_1.EmptyObjectEntity(self, entopts);
    }
    // Entity access: `client.EnterpriseTeam().list()` / `client.EnterpriseTeam().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnterpriseTeam(entopts) {
        const self = this;
        return new EnterpriseTeamEntity_1.EnterpriseTeamEntity(self, entopts);
    }
    // Entity access: `client.EnterpriseTeamMembership().list()` / `client.EnterpriseTeamMembership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnterpriseTeamMembership(entopts) {
        const self = this;
        return new EnterpriseTeamMembershipEntity_1.EnterpriseTeamMembershipEntity(self, entopts);
    }
    // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Environment(entopts) {
        const self = this;
        return new EnvironmentEntity_1.EnvironmentEntity(self, entopts);
    }
    // Entity access: `client.EnvironmentApproval().list()` / `client.EnvironmentApproval().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnvironmentApproval(entopts) {
        const self = this;
        return new EnvironmentApprovalEntity_1.EnvironmentApprovalEntity(self, entopts);
    }
    // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Event(entopts) {
        const self = this;
        return new EventEntity_1.EventEntity(self, entopts);
    }
    // Entity access: `client.Feed().list()` / `client.Feed().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Feed(entopts) {
        const self = this;
        return new FeedEntity_1.FeedEntity(self, entopts);
    }
    // Entity access: `client.FileCommit().list()` / `client.FileCommit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FileCommit(entopts) {
        const self = this;
        return new FileCommitEntity_1.FileCommitEntity(self, entopts);
    }
    // Entity access: `client.Follower().list()` / `client.Follower().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Follower(entopts) {
        const self = this;
        return new FollowerEntity_1.FollowerEntity(self, entopts);
    }
    // Entity access: `client.Following().list()` / `client.Following().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Following(entopts) {
        const self = this;
        return new FollowingEntity_1.FollowingEntity(self, entopts);
    }
    // Entity access: `client.FullRepository().list()` / `client.FullRepository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FullRepository(entopts) {
        const self = this;
        return new FullRepositoryEntity_1.FullRepositoryEntity(self, entopts);
    }
    // Entity access: `client.Gist().list()` / `client.Gist().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Gist(entopts) {
        const self = this;
        return new GistEntity_1.GistEntity(self, entopts);
    }
    // Entity access: `client.GistComment().list()` / `client.GistComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GistComment(entopts) {
        const self = this;
        return new GistCommentEntity_1.GistCommentEntity(self, entopts);
    }
    // Entity access: `client.GistCommit().list()` / `client.GistCommit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GistCommit(entopts) {
        const self = this;
        return new GistCommitEntity_1.GistCommitEntity(self, entopts);
    }
    // Entity access: `client.GistSimple().list()` / `client.GistSimple().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GistSimple(entopts) {
        const self = this;
        return new GistSimpleEntity_1.GistSimpleEntity(self, entopts);
    }
    // Entity access: `client.Git().list()` / `client.Git().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Git(entopts) {
        const self = this;
        return new GitEntity_1.GitEntity(self, entopts);
    }
    // Entity access: `client.GitCommit().list()` / `client.GitCommit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GitCommit(entopts) {
        const self = this;
        return new GitCommitEntity_1.GitCommitEntity(self, entopts);
    }
    // Entity access: `client.GitRef().list()` / `client.GitRef().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GitRef(entopts) {
        const self = this;
        return new GitRefEntity_1.GitRefEntity(self, entopts);
    }
    // Entity access: `client.GitTag().list()` / `client.GitTag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GitTag(entopts) {
        const self = this;
        return new GitTagEntity_1.GitTagEntity(self, entopts);
    }
    // Entity access: `client.GitTree().list()` / `client.GitTree().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GitTree(entopts) {
        const self = this;
        return new GitTreeEntity_1.GitTreeEntity(self, entopts);
    }
    // Entity access: `client.Gitignore().list()` / `client.Gitignore().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Gitignore(entopts) {
        const self = this;
        return new GitignoreEntity_1.GitignoreEntity(self, entopts);
    }
    // Entity access: `client.GitignoreTemplate().list()` / `client.GitignoreTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GitignoreTemplate(entopts) {
        const self = this;
        return new GitignoreTemplateEntity_1.GitignoreTemplateEntity(self, entopts);
    }
    // Entity access: `client.GlobalAdvisory().list()` / `client.GlobalAdvisory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GlobalAdvisory(entopts) {
        const self = this;
        return new GlobalAdvisoryEntity_1.GlobalAdvisoryEntity(self, entopts);
    }
    // Entity access: `client.GpgKey().list()` / `client.GpgKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GpgKey(entopts) {
        const self = this;
        return new GpgKeyEntity_1.GpgKeyEntity(self, entopts);
    }
    // Entity access: `client.Hook().list()` / `client.Hook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Hook(entopts) {
        const self = this;
        return new HookEntity_1.HookEntity(self, entopts);
    }
    // Entity access: `client.HookDelivery().list()` / `client.HookDelivery().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    HookDelivery(entopts) {
        const self = this;
        return new HookDeliveryEntity_1.HookDeliveryEntity(self, entopts);
    }
    // Entity access: `client.HookDeliveryItem().list()` / `client.HookDeliveryItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    HookDeliveryItem(entopts) {
        const self = this;
        return new HookDeliveryItemEntity_1.HookDeliveryItemEntity(self, entopts);
    }
    // Entity access: `client.HostedCompute().list()` / `client.HostedCompute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    HostedCompute(entopts) {
        const self = this;
        return new HostedComputeEntity_1.HostedComputeEntity(self, entopts);
    }
    // Entity access: `client.Hovercard().list()` / `client.Hovercard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Hovercard(entopts) {
        const self = this;
        return new HovercardEntity_1.HovercardEntity(self, entopts);
    }
    // Entity access: `client.Import().list()` / `client.Import().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Import(entopts) {
        const self = this;
        return new ImportEntity_1.ImportEntity(self, entopts);
    }
    // Entity access: `client.Installation().list()` / `client.Installation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Installation(entopts) {
        const self = this;
        return new InstallationEntity_1.InstallationEntity(self, entopts);
    }
    // Entity access: `client.InstallationToken().list()` / `client.InstallationToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InstallationToken(entopts) {
        const self = this;
        return new InstallationTokenEntity_1.InstallationTokenEntity(self, entopts);
    }
    // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Integration(entopts) {
        const self = this;
        return new IntegrationEntity_1.IntegrationEntity(self, entopts);
    }
    // Entity access: `client.IntegrationInstallation().list()` / `client.IntegrationInstallation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IntegrationInstallation(entopts) {
        const self = this;
        return new IntegrationInstallationEntity_1.IntegrationInstallationEntity(self, entopts);
    }
    // Entity access: `client.Interaction().list()` / `client.Interaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Interaction(entopts) {
        const self = this;
        return new InteractionEntity_1.InteractionEntity(self, entopts);
    }
    // Entity access: `client.InteractionLimit().list()` / `client.InteractionLimit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InteractionLimit(entopts) {
        const self = this;
        return new InteractionLimitEntity_1.InteractionLimitEntity(self, entopts);
    }
    // Entity access: `client.Issue().list()` / `client.Issue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Issue(entopts) {
        const self = this;
        return new IssueEntity_1.IssueEntity(self, entopts);
    }
    // Entity access: `client.IssueType().list()` / `client.IssueType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IssueType(entopts) {
        const self = this;
        return new IssueTypeEntity_1.IssueTypeEntity(self, entopts);
    }
    // Entity access: `client.Job().list()` / `client.Job().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Job(entopts) {
        const self = this;
        return new JobEntity_1.JobEntity(self, entopts);
    }
    // Entity access: `client.Key().list()` / `client.Key().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Key(entopts) {
        const self = this;
        return new KeyEntity_1.KeyEntity(self, entopts);
    }
    // Entity access: `client.Label().list()` / `client.Label().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Label(entopts) {
        const self = this;
        return new LabelEntity_1.LabelEntity(self, entopts);
    }
    // Entity access: `client.Language().list()` / `client.Language().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Language(entopts) {
        const self = this;
        return new LanguageEntity_1.LanguageEntity(self, entopts);
    }
    // Entity access: `client.License().list()` / `client.License().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    License(entopts) {
        const self = this;
        return new LicenseEntity_1.LicenseEntity(self, entopts);
    }
    // Entity access: `client.Markdown().list()` / `client.Markdown().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Markdown(entopts) {
        const self = this;
        return new MarkdownEntity_1.MarkdownEntity(self, entopts);
    }
    // Entity access: `client.MarketplaceListingPlan().list()` / `client.MarketplaceListingPlan().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MarketplaceListingPlan(entopts) {
        const self = this;
        return new MarketplaceListingPlanEntity_1.MarketplaceListingPlanEntity(self, entopts);
    }
    // Entity access: `client.MarketplacePurchase().list()` / `client.MarketplacePurchase().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MarketplacePurchase(entopts) {
        const self = this;
        return new MarketplacePurchaseEntity_1.MarketplacePurchaseEntity(self, entopts);
    }
    // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Member(entopts) {
        const self = this;
        return new MemberEntity_1.MemberEntity(self, entopts);
    }
    // Entity access: `client.Membership().list()` / `client.Membership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Membership(entopts) {
        const self = this;
        return new MembershipEntity_1.MembershipEntity(self, entopts);
    }
    // Entity access: `client.MergedUpstream().list()` / `client.MergedUpstream().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MergedUpstream(entopts) {
        const self = this;
        return new MergedUpstreamEntity_1.MergedUpstreamEntity(self, entopts);
    }
    // Entity access: `client.Meta().list()` / `client.Meta().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Meta(entopts) {
        const self = this;
        return new MetaEntity_1.MetaEntity(self, entopts);
    }
    // Entity access: `client.Metaroot().list()` / `client.Metaroot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Metaroot(entopts) {
        const self = this;
        return new MetarootEntity_1.MetarootEntity(self, entopts);
    }
    // Entity access: `client.Migration().list()` / `client.Migration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Migration(entopts) {
        const self = this;
        return new MigrationEntity_1.MigrationEntity(self, entopts);
    }
    // Entity access: `client.Milestone().list()` / `client.Milestone().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Milestone(entopts) {
        const self = this;
        return new MilestoneEntity_1.MilestoneEntity(self, entopts);
    }
    // Entity access: `client.MinimalRepository().list()` / `client.MinimalRepository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MinimalRepository(entopts) {
        const self = this;
        return new MinimalRepositoryEntity_1.MinimalRepositoryEntity(self, entopts);
    }
    // Entity access: `client.NetworkConfiguration().list()` / `client.NetworkConfiguration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NetworkConfiguration(entopts) {
        const self = this;
        return new NetworkConfigurationEntity_1.NetworkConfigurationEntity(self, entopts);
    }
    // Entity access: `client.NetworkSetting().list()` / `client.NetworkSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NetworkSetting(entopts) {
        const self = this;
        return new NetworkSettingEntity_1.NetworkSettingEntity(self, entopts);
    }
    // Entity access: `client.OidcCustomSub().list()` / `client.OidcCustomSub().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OidcCustomSub(entopts) {
        const self = this;
        return new OidcCustomSubEntity_1.OidcCustomSubEntity(self, entopts);
    }
    // Entity access: `client.OidcCustomSubRepo().list()` / `client.OidcCustomSubRepo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OidcCustomSubRepo(entopts) {
        const self = this;
        return new OidcCustomSubRepoEntity_1.OidcCustomSubRepoEntity(self, entopts);
    }
    // Entity access: `client.Org().list()` / `client.Org().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Org(entopts) {
        const self = this;
        return new OrgEntity_1.OrgEntity(self, entopts);
    }
    // Entity access: `client.OrgHook().list()` / `client.OrgHook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrgHook(entopts) {
        const self = this;
        return new OrgHookEntity_1.OrgHookEntity(self, entopts);
    }
    // Entity access: `client.OrgMembership().list()` / `client.OrgMembership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrgMembership(entopts) {
        const self = this;
        return new OrgMembershipEntity_1.OrgMembershipEntity(self, entopts);
    }
    // Entity access: `client.OrgPrivateRegistryConfiguration().list()` / `client.OrgPrivateRegistryConfiguration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrgPrivateRegistryConfiguration(entopts) {
        const self = this;
        return new OrgPrivateRegistryConfigurationEntity_1.OrgPrivateRegistryConfigurationEntity(self, entopts);
    }
    // Entity access: `client.OrgPrivateRegistryConfigurationWithSelectedRepository().list()` / `client.OrgPrivateRegistryConfigurationWithSelectedRepository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrgPrivateRegistryConfigurationWithSelectedRepository(entopts) {
        const self = this;
        return new OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity_1.OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity(self, entopts);
    }
    // Entity access: `client.OrgRepoCustomPropertyValue().list()` / `client.OrgRepoCustomPropertyValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrgRepoCustomPropertyValue(entopts) {
        const self = this;
        return new OrgRepoCustomPropertyValueEntity_1.OrgRepoCustomPropertyValueEntity(self, entopts);
    }
    // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Organization(entopts) {
        const self = this;
        return new OrganizationEntity_1.OrganizationEntity(self, entopts);
    }
    // Entity access: `client.OrganizationActionsSecret().list()` / `client.OrganizationActionsSecret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationActionsSecret(entopts) {
        const self = this;
        return new OrganizationActionsSecretEntity_1.OrganizationActionsSecretEntity(self, entopts);
    }
    // Entity access: `client.OrganizationActionsVariable().list()` / `client.OrganizationActionsVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationActionsVariable(entopts) {
        const self = this;
        return new OrganizationActionsVariableEntity_1.OrganizationActionsVariableEntity(self, entopts);
    }
    // Entity access: `client.OrganizationDependabotSecret().list()` / `client.OrganizationDependabotSecret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationDependabotSecret(entopts) {
        const self = this;
        return new OrganizationDependabotSecretEntity_1.OrganizationDependabotSecretEntity(self, entopts);
    }
    // Entity access: `client.OrganizationInvitation().list()` / `client.OrganizationInvitation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationInvitation(entopts) {
        const self = this;
        return new OrganizationInvitationEntity_1.OrganizationInvitationEntity(self, entopts);
    }
    // Entity access: `client.OrganizationProgrammaticAccessGrant().list()` / `client.OrganizationProgrammaticAccessGrant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationProgrammaticAccessGrant(entopts) {
        const self = this;
        return new OrganizationProgrammaticAccessGrantEntity_1.OrganizationProgrammaticAccessGrantEntity(self, entopts);
    }
    // Entity access: `client.OrganizationRole().list()` / `client.OrganizationRole().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationRole(entopts) {
        const self = this;
        return new OrganizationRoleEntity_1.OrganizationRoleEntity(self, entopts);
    }
    // Entity access: `client.OrganizationSecretScanningAlert().list()` / `client.OrganizationSecretScanningAlert().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationSecretScanningAlert(entopts) {
        const self = this;
        return new OrganizationSecretScanningAlertEntity_1.OrganizationSecretScanningAlertEntity(self, entopts);
    }
    // Entity access: `client.OutsideCollaborator().list()` / `client.OutsideCollaborator().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OutsideCollaborator(entopts) {
        const self = this;
        return new OutsideCollaboratorEntity_1.OutsideCollaboratorEntity(self, entopts);
    }
    // Entity access: `client.Package().list()` / `client.Package().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Package(entopts) {
        const self = this;
        return new PackageEntity_1.PackageEntity(self, entopts);
    }
    // Entity access: `client.Page().list()` / `client.Page().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Page(entopts) {
        const self = this;
        return new PageEntity_1.PageEntity(self, entopts);
    }
    // Entity access: `client.PageBuild().list()` / `client.PageBuild().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PageBuild(entopts) {
        const self = this;
        return new PageBuildEntity_1.PageBuildEntity(self, entopts);
    }
    // Entity access: `client.PageBuildStatus().list()` / `client.PageBuildStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PageBuildStatus(entopts) {
        const self = this;
        return new PageBuildStatusEntity_1.PageBuildStatusEntity(self, entopts);
    }
    // Entity access: `client.PageDeployment().list()` / `client.PageDeployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PageDeployment(entopts) {
        const self = this;
        return new PageDeploymentEntity_1.PageDeploymentEntity(self, entopts);
    }
    // Entity access: `client.PagesDeploymentStatus().list()` / `client.PagesDeploymentStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PagesDeploymentStatus(entopts) {
        const self = this;
        return new PagesDeploymentStatusEntity_1.PagesDeploymentStatusEntity(self, entopts);
    }
    // Entity access: `client.PagesHealthCheck().list()` / `client.PagesHealthCheck().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PagesHealthCheck(entopts) {
        const self = this;
        return new PagesHealthCheckEntity_1.PagesHealthCheckEntity(self, entopts);
    }
    // Entity access: `client.Participation().list()` / `client.Participation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Participation(entopts) {
        const self = this;
        return new ParticipationEntity_1.ParticipationEntity(self, entopts);
    }
    // Entity access: `client.PendingDeployment().list()` / `client.PendingDeployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PendingDeployment(entopts) {
        const self = this;
        return new PendingDeploymentEntity_1.PendingDeploymentEntity(self, entopts);
    }
    // Entity access: `client.PorterAuthor().list()` / `client.PorterAuthor().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PorterAuthor(entopts) {
        const self = this;
        return new PorterAuthorEntity_1.PorterAuthorEntity(self, entopts);
    }
    // Entity access: `client.PorterLargeFile().list()` / `client.PorterLargeFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PorterLargeFile(entopts) {
        const self = this;
        return new PorterLargeFileEntity_1.PorterLargeFileEntity(self, entopts);
    }
    // Entity access: `client.PrivateRegistry().list()` / `client.PrivateRegistry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PrivateRegistry(entopts) {
        const self = this;
        return new PrivateRegistryEntity_1.PrivateRegistryEntity(self, entopts);
    }
    // Entity access: `client.PrivateUser().list()` / `client.PrivateUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PrivateUser(entopts) {
        const self = this;
        return new PrivateUserEntity_1.PrivateUserEntity(self, entopts);
    }
    // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Project(entopts) {
        const self = this;
        return new ProjectEntity_1.ProjectEntity(self, entopts);
    }
    // Entity access: `client.ProjectCollaboratorPermission().list()` / `client.ProjectCollaboratorPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectCollaboratorPermission(entopts) {
        const self = this;
        return new ProjectCollaboratorPermissionEntity_1.ProjectCollaboratorPermissionEntity(self, entopts);
    }
    // Entity access: `client.ProjectColumn().list()` / `client.ProjectColumn().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectColumn(entopts) {
        const self = this;
        return new ProjectColumnEntity_1.ProjectColumnEntity(self, entopts);
    }
    // Entity access: `client.ProjectsClassic().list()` / `client.ProjectsClassic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectsClassic(entopts) {
        const self = this;
        return new ProjectsClassicEntity_1.ProjectsClassicEntity(self, entopts);
    }
    // Entity access: `client.ProjectsV2().list()` / `client.ProjectsV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectsV2(entopts) {
        const self = this;
        return new ProjectsV2Entity_1.ProjectsV2Entity(self, entopts);
    }
    // Entity access: `client.ProjectsV2Field().list()` / `client.ProjectsV2Field().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectsV2Field(entopts) {
        const self = this;
        return new ProjectsV2FieldEntity_1.ProjectsV2FieldEntity(self, entopts);
    }
    // Entity access: `client.ProjectsV2ItemSimple().list()` / `client.ProjectsV2ItemSimple().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectsV2ItemSimple(entopts) {
        const self = this;
        return new ProjectsV2ItemSimpleEntity_1.ProjectsV2ItemSimpleEntity(self, entopts);
    }
    // Entity access: `client.ProjectsV2ItemWithContent().list()` / `client.ProjectsV2ItemWithContent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectsV2ItemWithContent(entopts) {
        const self = this;
        return new ProjectsV2ItemWithContentEntity_1.ProjectsV2ItemWithContentEntity(self, entopts);
    }
    // Entity access: `client.ProtectedBranch().list()` / `client.ProtectedBranch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProtectedBranch(entopts) {
        const self = this;
        return new ProtectedBranchEntity_1.ProtectedBranchEntity(self, entopts);
    }
    // Entity access: `client.ProtectedBranchAdminEnforced().list()` / `client.ProtectedBranchAdminEnforced().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProtectedBranchAdminEnforced(entopts) {
        const self = this;
        return new ProtectedBranchAdminEnforcedEntity_1.ProtectedBranchAdminEnforcedEntity(self, entopts);
    }
    // Entity access: `client.ProtectedBranchPullRequestReview().list()` / `client.ProtectedBranchPullRequestReview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProtectedBranchPullRequestReview(entopts) {
        const self = this;
        return new ProtectedBranchPullRequestReviewEntity_1.ProtectedBranchPullRequestReviewEntity(self, entopts);
    }
    // Entity access: `client.PublicMember().list()` / `client.PublicMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicMember(entopts) {
        const self = this;
        return new PublicMemberEntity_1.PublicMemberEntity(self, entopts);
    }
    // Entity access: `client.Pull().list()` / `client.Pull().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pull(entopts) {
        const self = this;
        return new PullEntity_1.PullEntity(self, entopts);
    }
    // Entity access: `client.PullRequestReview().list()` / `client.PullRequestReview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PullRequestReview(entopts) {
        const self = this;
        return new PullRequestReviewEntity_1.PullRequestReviewEntity(self, entopts);
    }
    // Entity access: `client.PullRequestReviewComment().list()` / `client.PullRequestReviewComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PullRequestReviewComment(entopts) {
        const self = this;
        return new PullRequestReviewCommentEntity_1.PullRequestReviewCommentEntity(self, entopts);
    }
    // Entity access: `client.PullRequestSimple().list()` / `client.PullRequestSimple().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PullRequestSimple(entopts) {
        const self = this;
        return new PullRequestSimpleEntity_1.PullRequestSimpleEntity(self, entopts);
    }
    // Entity access: `client.RateLimit().list()` / `client.RateLimit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RateLimit(entopts) {
        const self = this;
        return new RateLimitEntity_1.RateLimitEntity(self, entopts);
    }
    // Entity access: `client.Reaction().list()` / `client.Reaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Reaction(entopts) {
        const self = this;
        return new ReactionEntity_1.ReactionEntity(self, entopts);
    }
    // Entity access: `client.Referrer().list()` / `client.Referrer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Referrer(entopts) {
        const self = this;
        return new ReferrerEntity_1.ReferrerEntity(self, entopts);
    }
    // Entity access: `client.Release().list()` / `client.Release().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Release(entopts) {
        const self = this;
        return new ReleaseEntity_1.ReleaseEntity(self, entopts);
    }
    // Entity access: `client.ReleaseAsset().list()` / `client.ReleaseAsset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReleaseAsset(entopts) {
        const self = this;
        return new ReleaseAssetEntity_1.ReleaseAssetEntity(self, entopts);
    }
    // Entity access: `client.ReleaseNotesContent().list()` / `client.ReleaseNotesContent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReleaseNotesContent(entopts) {
        const self = this;
        return new ReleaseNotesContentEntity_1.ReleaseNotesContentEntity(self, entopts);
    }
    // Entity access: `client.Remove().list()` / `client.Remove().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Remove(entopts) {
        const self = this;
        return new RemoveEntity_1.RemoveEntity(self, entopts);
    }
    // Entity access: `client.Repo().list()` / `client.Repo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Repo(entopts) {
        const self = this;
        return new RepoEntity_1.RepoEntity(self, entopts);
    }
    // Entity access: `client.Repository().list()` / `client.Repository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Repository(entopts) {
        const self = this;
        return new RepositoryEntity_1.RepositoryEntity(self, entopts);
    }
    // Entity access: `client.RepositoryAdvisory().list()` / `client.RepositoryAdvisory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryAdvisory(entopts) {
        const self = this;
        return new RepositoryAdvisoryEntity_1.RepositoryAdvisoryEntity(self, entopts);
    }
    // Entity access: `client.RepositoryCollaboratorPermission().list()` / `client.RepositoryCollaboratorPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryCollaboratorPermission(entopts) {
        const self = this;
        return new RepositoryCollaboratorPermissionEntity_1.RepositoryCollaboratorPermissionEntity(self, entopts);
    }
    // Entity access: `client.RepositoryInvitation().list()` / `client.RepositoryInvitation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryInvitation(entopts) {
        const self = this;
        return new RepositoryInvitationEntity_1.RepositoryInvitationEntity(self, entopts);
    }
    // Entity access: `client.RepositoryRuleDetailed().list()` / `client.RepositoryRuleDetailed().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryRuleDetailed(entopts) {
        const self = this;
        return new RepositoryRuleDetailedEntity_1.RepositoryRuleDetailedEntity(self, entopts);
    }
    // Entity access: `client.RepositoryRuleset().list()` / `client.RepositoryRuleset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryRuleset(entopts) {
        const self = this;
        return new RepositoryRulesetEntity_1.RepositoryRulesetEntity(self, entopts);
    }
    // Entity access: `client.RepositorySubscription().list()` / `client.RepositorySubscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositorySubscription(entopts) {
        const self = this;
        return new RepositorySubscriptionEntity_1.RepositorySubscriptionEntity(self, entopts);
    }
    // Entity access: `client.ReviewComment().list()` / `client.ReviewComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReviewComment(entopts) {
        const self = this;
        return new ReviewCommentEntity_1.ReviewCommentEntity(self, entopts);
    }
    // Entity access: `client.RuleSuite().list()` / `client.RuleSuite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RuleSuite(entopts) {
        const self = this;
        return new RuleSuiteEntity_1.RuleSuiteEntity(self, entopts);
    }
    // Entity access: `client.RulesetVersion().list()` / `client.RulesetVersion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RulesetVersion(entopts) {
        const self = this;
        return new RulesetVersionEntity_1.RulesetVersionEntity(self, entopts);
    }
    // Entity access: `client.RulesetVersionWithState().list()` / `client.RulesetVersionWithState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RulesetVersionWithState(entopts) {
        const self = this;
        return new RulesetVersionWithStateEntity_1.RulesetVersionWithStateEntity(self, entopts);
    }
    // Entity access: `client.Runner().list()` / `client.Runner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Runner(entopts) {
        const self = this;
        return new RunnerEntity_1.RunnerEntity(self, entopts);
    }
    // Entity access: `client.RunnerApplication().list()` / `client.RunnerApplication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RunnerApplication(entopts) {
        const self = this;
        return new RunnerApplicationEntity_1.RunnerApplicationEntity(self, entopts);
    }
    // Entity access: `client.RunnerGroup().list()` / `client.RunnerGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RunnerGroup(entopts) {
        const self = this;
        return new RunnerGroupEntity_1.RunnerGroupEntity(self, entopts);
    }
    // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Search(entopts) {
        const self = this;
        return new SearchEntity_1.SearchEntity(self, entopts);
    }
    // Entity access: `client.SecretScanning().list()` / `client.SecretScanning().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretScanning(entopts) {
        const self = this;
        return new SecretScanningEntity_1.SecretScanningEntity(self, entopts);
    }
    // Entity access: `client.SecretScanningAlert().list()` / `client.SecretScanningAlert().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretScanningAlert(entopts) {
        const self = this;
        return new SecretScanningAlertEntity_1.SecretScanningAlertEntity(self, entopts);
    }
    // Entity access: `client.SecretScanningLocation().list()` / `client.SecretScanningLocation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretScanningLocation(entopts) {
        const self = this;
        return new SecretScanningLocationEntity_1.SecretScanningLocationEntity(self, entopts);
    }
    // Entity access: `client.SecretScanningPatternConfiguration().list()` / `client.SecretScanningPatternConfiguration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretScanningPatternConfiguration(entopts) {
        const self = this;
        return new SecretScanningPatternConfigurationEntity_1.SecretScanningPatternConfigurationEntity(self, entopts);
    }
    // Entity access: `client.SecretScanningPushProtectionBypass().list()` / `client.SecretScanningPushProtectionBypass().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretScanningPushProtectionBypass(entopts) {
        const self = this;
        return new SecretScanningPushProtectionBypassEntity_1.SecretScanningPushProtectionBypassEntity(self, entopts);
    }
    // Entity access: `client.SecretScanningScanHistory().list()` / `client.SecretScanningScanHistory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecretScanningScanHistory(entopts) {
        const self = this;
        return new SecretScanningScanHistoryEntity_1.SecretScanningScanHistoryEntity(self, entopts);
    }
    // Entity access: `client.SecurityAdvisory().list()` / `client.SecurityAdvisory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecurityAdvisory(entopts) {
        const self = this;
        return new SecurityAdvisoryEntity_1.SecurityAdvisoryEntity(self, entopts);
    }
    // Entity access: `client.SelectedAction().list()` / `client.SelectedAction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SelectedAction(entopts) {
        const self = this;
        return new SelectedActionEntity_1.SelectedActionEntity(self, entopts);
    }
    // Entity access: `client.SelfHostedRunner().list()` / `client.SelfHostedRunner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SelfHostedRunner(entopts) {
        const self = this;
        return new SelfHostedRunnerEntity_1.SelfHostedRunnerEntity(self, entopts);
    }
    // Entity access: `client.ShortBlob().list()` / `client.ShortBlob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ShortBlob(entopts) {
        const self = this;
        return new ShortBlobEntity_1.ShortBlobEntity(self, entopts);
    }
    // Entity access: `client.ShortBranch().list()` / `client.ShortBranch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ShortBranch(entopts) {
        const self = this;
        return new ShortBranchEntity_1.ShortBranchEntity(self, entopts);
    }
    // Entity access: `client.SimpleClassroom().list()` / `client.SimpleClassroom().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SimpleClassroom(entopts) {
        const self = this;
        return new SimpleClassroomEntity_1.SimpleClassroomEntity(self, entopts);
    }
    // Entity access: `client.SimpleClassroomAssignment().list()` / `client.SimpleClassroomAssignment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SimpleClassroomAssignment(entopts) {
        const self = this;
        return new SimpleClassroomAssignmentEntity_1.SimpleClassroomAssignmentEntity(self, entopts);
    }
    // Entity access: `client.SocialAccount().list()` / `client.SocialAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SocialAccount(entopts) {
        const self = this;
        return new SocialAccountEntity_1.SocialAccountEntity(self, entopts);
    }
    // Entity access: `client.SshSigningKey().list()` / `client.SshSigningKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SshSigningKey(entopts) {
        const self = this;
        return new SshSigningKeyEntity_1.SshSigningKeyEntity(self, entopts);
    }
    // Entity access: `client.Status().list()` / `client.Status().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Status(entopts) {
        const self = this;
        return new StatusEntity_1.StatusEntity(self, entopts);
    }
    // Entity access: `client.StatusCheckPolicy().list()` / `client.StatusCheckPolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusCheckPolicy(entopts) {
        const self = this;
        return new StatusCheckPolicyEntity_1.StatusCheckPolicyEntity(self, entopts);
    }
    // Entity access: `client.Subscriber().list()` / `client.Subscriber().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Subscriber(entopts) {
        const self = this;
        return new SubscriberEntity_1.SubscriberEntity(self, entopts);
    }
    // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tag(entopts) {
        const self = this;
        return new TagEntity_1.TagEntity(self, entopts);
    }
    // Entity access: `client.TagProtection().list()` / `client.TagProtection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TagProtection(entopts) {
        const self = this;
        return new TagProtectionEntity_1.TagProtectionEntity(self, entopts);
    }
    // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Team(entopts) {
        const self = this;
        return new TeamEntity_1.TeamEntity(self, entopts);
    }
    // Entity access: `client.TeamSimple().list()` / `client.TeamSimple().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamSimple(entopts) {
        const self = this;
        return new TeamSimpleEntity_1.TeamSimpleEntity(self, entopts);
    }
    // Entity access: `client.Thread().list()` / `client.Thread().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Thread(entopts) {
        const self = this;
        return new ThreadEntity_1.ThreadEntity(self, entopts);
    }
    // Entity access: `client.ThreadSubscription().list()` / `client.ThreadSubscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ThreadSubscription(entopts) {
        const self = this;
        return new ThreadSubscriptionEntity_1.ThreadSubscriptionEntity(self, entopts);
    }
    // Entity access: `client.Topic().list()` / `client.Topic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Topic(entopts) {
        const self = this;
        return new TopicEntity_1.TopicEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.UserMarketplacePurchase().list()` / `client.UserMarketplacePurchase().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserMarketplacePurchase(entopts) {
        const self = this;
        return new UserMarketplacePurchaseEntity_1.UserMarketplacePurchaseEntity(self, entopts);
    }
    // Entity access: `client.View().list()` / `client.View().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    View(entopts) {
        const self = this;
        return new ViewEntity_1.ViewEntity(self, entopts);
    }
    // Entity access: `client.WebhookConfig().list()` / `client.WebhookConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WebhookConfig(entopts) {
        const self = this;
        return new WebhookConfigEntity_1.WebhookConfigEntity(self, entopts);
    }
    // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workflow(entopts) {
        const self = this;
        return new WorkflowEntity_1.WorkflowEntity(self, entopts);
    }
    // Entity access: `client.WorkflowRun().list()` / `client.WorkflowRun().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkflowRun(entopts) {
        const self = this;
        return new WorkflowRunEntity_1.WorkflowRunEntity(self, entopts);
    }
    // Entity access: `client.WorkflowRunUsage().list()` / `client.WorkflowRunUsage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkflowRunUsage(entopts) {
        const self = this;
        return new WorkflowRunUsageEntity_1.WorkflowRunUsageEntity(self, entopts);
    }
    // Entity access: `client.WorkflowUsage().list()` / `client.WorkflowUsage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkflowUsage(entopts) {
        const self = this;
        return new WorkflowUsageEntity_1.WorkflowUsageEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new GithubSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return GithubSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Github' };
    }
    toString() {
        return 'Github ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.GithubSDK = GithubSDK;
const SDK = GithubSDK;
exports.SDK = SDK;
//# sourceMappingURL=GithubSDK.js.map