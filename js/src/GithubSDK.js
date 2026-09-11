// Github Js SDK

const { ActionEntity } = require('./entity/ActionEntity')
const { ActionsArtifactAndLogRetentionEntity } = require('./entity/ActionsArtifactAndLogRetentionEntity')
const { ActionsCacheListEntity } = require('./entity/ActionsCacheListEntity')
const { ActionsCacheUsageByRepositoryEntity } = require('./entity/ActionsCacheUsageByRepositoryEntity')
const { ActionsCacheUsageOrgEnterpriseEntity } = require('./entity/ActionsCacheUsageOrgEnterpriseEntity')
const { ActionsForkPrContributorApprovalEntity } = require('./entity/ActionsForkPrContributorApprovalEntity')
const { ActionsForkPrWorkflowsPrivateRepoEntity } = require('./entity/ActionsForkPrWorkflowsPrivateRepoEntity')
const { ActionsGetDefaultWorkflowPermissionEntity } = require('./entity/ActionsGetDefaultWorkflowPermissionEntity')
const { ActionsHostedRunnerEntity } = require('./entity/ActionsHostedRunnerEntity')
const { ActionsHostedRunnerLimitEntity } = require('./entity/ActionsHostedRunnerLimitEntity')
const { ActionsOrganizationPermissionEntity } = require('./entity/ActionsOrganizationPermissionEntity')
const { ActionsPublicKeyEntity } = require('./entity/ActionsPublicKeyEntity')
const { ActionsRepositoryPermissionEntity } = require('./entity/ActionsRepositoryPermissionEntity')
const { ActionsSecretEntity } = require('./entity/ActionsSecretEntity')
const { ActionsVariableEntity } = require('./entity/ActionsVariableEntity')
const { ActionsWorkflowAccessToRepositoryEntity } = require('./entity/ActionsWorkflowAccessToRepositoryEntity')
const { ActivityEntity } = require('./entity/ActivityEntity')
const { AddEntity } = require('./entity/AddEntity')
const { ApiInsightsRouteStatEntity } = require('./entity/ApiInsightsRouteStatEntity')
const { ApiInsightsSubjectStatEntity } = require('./entity/ApiInsightsSubjectStatEntity')
const { ApiInsightsSummaryStatEntity } = require('./entity/ApiInsightsSummaryStatEntity')
const { ApiInsightsTimeStatEntity } = require('./entity/ApiInsightsTimeStatEntity')
const { ApiInsightsUserStatEntity } = require('./entity/ApiInsightsUserStatEntity')
const { ApiOverviewEntity } = require('./entity/ApiOverviewEntity')
const { AppEntity } = require('./entity/AppEntity')
const { ArtifactEntity } = require('./entity/ArtifactEntity')
const { AssigneeEntity } = require('./entity/AssigneeEntity')
const { AuthenticationTokenEntity } = require('./entity/AuthenticationTokenEntity')
const { AuthorizationEntity } = require('./entity/AuthorizationEntity')
const { AutolinkEntity } = require('./entity/AutolinkEntity')
const { BaseGistEntity } = require('./entity/BaseGistEntity')
const { BillingUsageReportEntity } = require('./entity/BillingUsageReportEntity')
const { BillingUsageReportUserEntity } = require('./entity/BillingUsageReportUserEntity')
const { BlobEntity } = require('./entity/BlobEntity')
const { BlockEntity } = require('./entity/BlockEntity')
const { BranchEntity } = require('./entity/BranchEntity')
const { BranchProtectionEntity } = require('./entity/BranchProtectionEntity')
const { BranchRestrictionPolicyEntity } = require('./entity/BranchRestrictionPolicyEntity')
const { BranchShortEntity } = require('./entity/BranchShortEntity')
const { BranchWithProtectionEntity } = require('./entity/BranchWithProtectionEntity')
const { CampaignEntity } = require('./entity/CampaignEntity')
const { CheckEntity } = require('./entity/CheckEntity')
const { CheckAnnotationEntity } = require('./entity/CheckAnnotationEntity')
const { CheckAutomatedSecurityFixEntity } = require('./entity/CheckAutomatedSecurityFixEntity')
const { CheckRunEntity } = require('./entity/CheckRunEntity')
const { CheckSuiteEntity } = require('./entity/CheckSuiteEntity')
const { CheckSuitePreferenceEntity } = require('./entity/CheckSuitePreferenceEntity')
const { ClassroomEntity } = require('./entity/ClassroomEntity')
const { ClassroomAcceptedAssignmentEntity } = require('./entity/ClassroomAcceptedAssignmentEntity')
const { ClassroomAssignmentEntity } = require('./entity/ClassroomAssignmentEntity')
const { ClassroomAssignmentGradeEntity } = require('./entity/ClassroomAssignmentGradeEntity')
const { CloneEntity } = require('./entity/CloneEntity')
const { CodeFrequencyEntity } = require('./entity/CodeFrequencyEntity')
const { CodeFrequencyStatEntity } = require('./entity/CodeFrequencyStatEntity')
const { CodeOfConductEntity } = require('./entity/CodeOfConductEntity')
const { CodeScanningEntity } = require('./entity/CodeScanningEntity')
const { CodeScanningAlertEntity } = require('./entity/CodeScanningAlertEntity')
const { CodeScanningAlertInstanceEntity } = require('./entity/CodeScanningAlertInstanceEntity')
const { CodeScanningAlertItemEntity } = require('./entity/CodeScanningAlertItemEntity')
const { CodeScanningAnalysiEntity } = require('./entity/CodeScanningAnalysiEntity')
const { CodeScanningAnalysisDeletionEntity } = require('./entity/CodeScanningAnalysisDeletionEntity')
const { CodeScanningAutofixEntity } = require('./entity/CodeScanningAutofixEntity')
const { CodeScanningAutofixCommitEntity } = require('./entity/CodeScanningAutofixCommitEntity')
const { CodeScanningCodeqlDatabaseEntity } = require('./entity/CodeScanningCodeqlDatabaseEntity')
const { CodeScanningDefaultSetupEntity } = require('./entity/CodeScanningDefaultSetupEntity')
const { CodeScanningOrganizationAlertItemEntity } = require('./entity/CodeScanningOrganizationAlertItemEntity')
const { CodeScanningSarifsStatusEntity } = require('./entity/CodeScanningSarifsStatusEntity')
const { CodeScanningVariantAnalysiEntity } = require('./entity/CodeScanningVariantAnalysiEntity')
const { CodeScanningVariantAnalysisRepoTaskEntity } = require('./entity/CodeScanningVariantAnalysisRepoTaskEntity')
const { CodeSecurityEntity } = require('./entity/CodeSecurityEntity')
const { CodeSecurityConfigurationEntity } = require('./entity/CodeSecurityConfigurationEntity')
const { CodeSecurityConfigurationRepositoryEntity } = require('./entity/CodeSecurityConfigurationRepositoryEntity')
const { CodeSecurityDefaultConfigurationEntity } = require('./entity/CodeSecurityDefaultConfigurationEntity')
const { CodeownersErrorEntity } = require('./entity/CodeownersErrorEntity')
const { CodespaceEntity } = require('./entity/CodespaceEntity')
const { CollaboratorEntity } = require('./entity/CollaboratorEntity')
const { CombinedBillingUsageEntity } = require('./entity/CombinedBillingUsageEntity')
const { CombinedCommitStatusEntity } = require('./entity/CombinedCommitStatusEntity')
const { CommitEntity } = require('./entity/CommitEntity')
const { CommitActivityEntity } = require('./entity/CommitActivityEntity')
const { CommitCommentEntity } = require('./entity/CommitCommentEntity')
const { CommitComparisonEntity } = require('./entity/CommitComparisonEntity')
const { CommunityProfileEntity } = require('./entity/CommunityProfileEntity')
const { ContentFileEntity } = require('./entity/ContentFileEntity')
const { ContentTrafficEntity } = require('./entity/ContentTrafficEntity')
const { ContributorEntity } = require('./entity/ContributorEntity')
const { CopilotEntity } = require('./entity/CopilotEntity')
const { CopilotOrganizationDetailEntity } = require('./entity/CopilotOrganizationDetailEntity')
const { CopilotUsageMetricsDayEntity } = require('./entity/CopilotUsageMetricsDayEntity')
const { CredentialEntity } = require('./entity/CredentialEntity')
const { CustomPropertyEntity } = require('./entity/CustomPropertyEntity')
const { CustomPropertyValueEntity } = require('./entity/CustomPropertyValueEntity')
const { DependabotEntity } = require('./entity/DependabotEntity')
const { DependabotAlertEntity } = require('./entity/DependabotAlertEntity')
const { DependabotAlertWithRepositoryEntity } = require('./entity/DependabotAlertWithRepositoryEntity')
const { DependabotPublicKeyEntity } = require('./entity/DependabotPublicKeyEntity')
const { DependabotRepositoryAccessDetailEntity } = require('./entity/DependabotRepositoryAccessDetailEntity')
const { DependabotSecretEntity } = require('./entity/DependabotSecretEntity')
const { DependencyGraphEntity } = require('./entity/DependencyGraphEntity')
const { DependencyGraphDiffEntity } = require('./entity/DependencyGraphDiffEntity')
const { DependencyGraphSpdxSbomEntity } = require('./entity/DependencyGraphSpdxSbomEntity')
const { DeployKeyEntity } = require('./entity/DeployKeyEntity')
const { DeploymentEntity } = require('./entity/DeploymentEntity')
const { DeploymentBranchPolicyEntity } = require('./entity/DeploymentBranchPolicyEntity')
const { DeploymentProtectionRuleEntity } = require('./entity/DeploymentProtectionRuleEntity')
const { DeploymentStatusEntity } = require('./entity/DeploymentStatusEntity')
const { DiffEntryEntity } = require('./entity/DiffEntryEntity')
const { EmailEntity } = require('./entity/EmailEntity')
const { EmojiEntity } = require('./entity/EmojiEntity')
const { EmptyObjectEntity } = require('./entity/EmptyObjectEntity')
const { EnterpriseTeamEntity } = require('./entity/EnterpriseTeamEntity')
const { EnterpriseTeamMembershipEntity } = require('./entity/EnterpriseTeamMembershipEntity')
const { EnvironmentEntity } = require('./entity/EnvironmentEntity')
const { EnvironmentApprovalEntity } = require('./entity/EnvironmentApprovalEntity')
const { EventEntity } = require('./entity/EventEntity')
const { FeedEntity } = require('./entity/FeedEntity')
const { FileCommitEntity } = require('./entity/FileCommitEntity')
const { FollowerEntity } = require('./entity/FollowerEntity')
const { FollowingEntity } = require('./entity/FollowingEntity')
const { FullRepositoryEntity } = require('./entity/FullRepositoryEntity')
const { GistEntity } = require('./entity/GistEntity')
const { GistCommentEntity } = require('./entity/GistCommentEntity')
const { GistCommitEntity } = require('./entity/GistCommitEntity')
const { GistSimpleEntity } = require('./entity/GistSimpleEntity')
const { GitEntity } = require('./entity/GitEntity')
const { GitCommitEntity } = require('./entity/GitCommitEntity')
const { GitRefEntity } = require('./entity/GitRefEntity')
const { GitTagEntity } = require('./entity/GitTagEntity')
const { GitTreeEntity } = require('./entity/GitTreeEntity')
const { GitignoreEntity } = require('./entity/GitignoreEntity')
const { GitignoreTemplateEntity } = require('./entity/GitignoreTemplateEntity')
const { GlobalAdvisoryEntity } = require('./entity/GlobalAdvisoryEntity')
const { GpgKeyEntity } = require('./entity/GpgKeyEntity')
const { HookEntity } = require('./entity/HookEntity')
const { HookDeliveryEntity } = require('./entity/HookDeliveryEntity')
const { HookDeliveryItemEntity } = require('./entity/HookDeliveryItemEntity')
const { HostedComputeEntity } = require('./entity/HostedComputeEntity')
const { HovercardEntity } = require('./entity/HovercardEntity')
const { ImportEntity } = require('./entity/ImportEntity')
const { InstallationEntity } = require('./entity/InstallationEntity')
const { InstallationTokenEntity } = require('./entity/InstallationTokenEntity')
const { IntegrationEntity } = require('./entity/IntegrationEntity')
const { IntegrationInstallationEntity } = require('./entity/IntegrationInstallationEntity')
const { InteractionEntity } = require('./entity/InteractionEntity')
const { InteractionLimitEntity } = require('./entity/InteractionLimitEntity')
const { IssueEntity } = require('./entity/IssueEntity')
const { IssueTypeEntity } = require('./entity/IssueTypeEntity')
const { JobEntity } = require('./entity/JobEntity')
const { KeyEntity } = require('./entity/KeyEntity')
const { LabelEntity } = require('./entity/LabelEntity')
const { LanguageEntity } = require('./entity/LanguageEntity')
const { LicenseEntity } = require('./entity/LicenseEntity')
const { MarkdownEntity } = require('./entity/MarkdownEntity')
const { MarketplaceListingPlanEntity } = require('./entity/MarketplaceListingPlanEntity')
const { MarketplacePurchaseEntity } = require('./entity/MarketplacePurchaseEntity')
const { MemberEntity } = require('./entity/MemberEntity')
const { MembershipEntity } = require('./entity/MembershipEntity')
const { MergedUpstreamEntity } = require('./entity/MergedUpstreamEntity')
const { MetaEntity } = require('./entity/MetaEntity')
const { MetarootEntity } = require('./entity/MetarootEntity')
const { MigrationEntity } = require('./entity/MigrationEntity')
const { MilestoneEntity } = require('./entity/MilestoneEntity')
const { MinimalRepositoryEntity } = require('./entity/MinimalRepositoryEntity')
const { NetworkConfigurationEntity } = require('./entity/NetworkConfigurationEntity')
const { NetworkSettingEntity } = require('./entity/NetworkSettingEntity')
const { OidcCustomSubEntity } = require('./entity/OidcCustomSubEntity')
const { OidcCustomSubRepoEntity } = require('./entity/OidcCustomSubRepoEntity')
const { OrgEntity } = require('./entity/OrgEntity')
const { OrgHookEntity } = require('./entity/OrgHookEntity')
const { OrgMembershipEntity } = require('./entity/OrgMembershipEntity')
const { OrgPrivateRegistryConfigurationEntity } = require('./entity/OrgPrivateRegistryConfigurationEntity')
const { OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity } = require('./entity/OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity')
const { OrgRepoCustomPropertyValueEntity } = require('./entity/OrgRepoCustomPropertyValueEntity')
const { OrganizationEntity } = require('./entity/OrganizationEntity')
const { OrganizationActionsSecretEntity } = require('./entity/OrganizationActionsSecretEntity')
const { OrganizationActionsVariableEntity } = require('./entity/OrganizationActionsVariableEntity')
const { OrganizationDependabotSecretEntity } = require('./entity/OrganizationDependabotSecretEntity')
const { OrganizationInvitationEntity } = require('./entity/OrganizationInvitationEntity')
const { OrganizationProgrammaticAccessGrantEntity } = require('./entity/OrganizationProgrammaticAccessGrantEntity')
const { OrganizationRoleEntity } = require('./entity/OrganizationRoleEntity')
const { OrganizationSecretScanningAlertEntity } = require('./entity/OrganizationSecretScanningAlertEntity')
const { OutsideCollaboratorEntity } = require('./entity/OutsideCollaboratorEntity')
const { PackageEntity } = require('./entity/PackageEntity')
const { PageEntity } = require('./entity/PageEntity')
const { PageBuildEntity } = require('./entity/PageBuildEntity')
const { PageBuildStatusEntity } = require('./entity/PageBuildStatusEntity')
const { PageDeploymentEntity } = require('./entity/PageDeploymentEntity')
const { PagesDeploymentStatusEntity } = require('./entity/PagesDeploymentStatusEntity')
const { PagesHealthCheckEntity } = require('./entity/PagesHealthCheckEntity')
const { ParticipationEntity } = require('./entity/ParticipationEntity')
const { PendingDeploymentEntity } = require('./entity/PendingDeploymentEntity')
const { PorterAuthorEntity } = require('./entity/PorterAuthorEntity')
const { PorterLargeFileEntity } = require('./entity/PorterLargeFileEntity')
const { PrivateRegistryEntity } = require('./entity/PrivateRegistryEntity')
const { PrivateUserEntity } = require('./entity/PrivateUserEntity')
const { ProjectEntity } = require('./entity/ProjectEntity')
const { ProjectCollaboratorPermissionEntity } = require('./entity/ProjectCollaboratorPermissionEntity')
const { ProjectColumnEntity } = require('./entity/ProjectColumnEntity')
const { ProjectsClassicEntity } = require('./entity/ProjectsClassicEntity')
const { ProjectsV2Entity } = require('./entity/ProjectsV2Entity')
const { ProjectsV2FieldEntity } = require('./entity/ProjectsV2FieldEntity')
const { ProjectsV2ItemSimpleEntity } = require('./entity/ProjectsV2ItemSimpleEntity')
const { ProjectsV2ItemWithContentEntity } = require('./entity/ProjectsV2ItemWithContentEntity')
const { ProtectedBranchEntity } = require('./entity/ProtectedBranchEntity')
const { ProtectedBranchAdminEnforcedEntity } = require('./entity/ProtectedBranchAdminEnforcedEntity')
const { ProtectedBranchPullRequestReviewEntity } = require('./entity/ProtectedBranchPullRequestReviewEntity')
const { PublicMemberEntity } = require('./entity/PublicMemberEntity')
const { PullEntity } = require('./entity/PullEntity')
const { PullRequestReviewEntity } = require('./entity/PullRequestReviewEntity')
const { PullRequestReviewCommentEntity } = require('./entity/PullRequestReviewCommentEntity')
const { PullRequestSimpleEntity } = require('./entity/PullRequestSimpleEntity')
const { RateLimitEntity } = require('./entity/RateLimitEntity')
const { ReactionEntity } = require('./entity/ReactionEntity')
const { ReferrerEntity } = require('./entity/ReferrerEntity')
const { ReleaseEntity } = require('./entity/ReleaseEntity')
const { ReleaseAssetEntity } = require('./entity/ReleaseAssetEntity')
const { ReleaseNotesContentEntity } = require('./entity/ReleaseNotesContentEntity')
const { RemoveEntity } = require('./entity/RemoveEntity')
const { RepoEntity } = require('./entity/RepoEntity')
const { RepositoryEntity } = require('./entity/RepositoryEntity')
const { RepositoryAdvisoryEntity } = require('./entity/RepositoryAdvisoryEntity')
const { RepositoryCollaboratorPermissionEntity } = require('./entity/RepositoryCollaboratorPermissionEntity')
const { RepositoryInvitationEntity } = require('./entity/RepositoryInvitationEntity')
const { RepositoryRuleDetailedEntity } = require('./entity/RepositoryRuleDetailedEntity')
const { RepositoryRulesetEntity } = require('./entity/RepositoryRulesetEntity')
const { RepositorySubscriptionEntity } = require('./entity/RepositorySubscriptionEntity')
const { ReviewCommentEntity } = require('./entity/ReviewCommentEntity')
const { RuleSuiteEntity } = require('./entity/RuleSuiteEntity')
const { RulesetVersionEntity } = require('./entity/RulesetVersionEntity')
const { RulesetVersionWithStateEntity } = require('./entity/RulesetVersionWithStateEntity')
const { RunnerEntity } = require('./entity/RunnerEntity')
const { RunnerApplicationEntity } = require('./entity/RunnerApplicationEntity')
const { RunnerGroupEntity } = require('./entity/RunnerGroupEntity')
const { SearchEntity } = require('./entity/SearchEntity')
const { SecretScanningEntity } = require('./entity/SecretScanningEntity')
const { SecretScanningAlertEntity } = require('./entity/SecretScanningAlertEntity')
const { SecretScanningLocationEntity } = require('./entity/SecretScanningLocationEntity')
const { SecretScanningPatternConfigurationEntity } = require('./entity/SecretScanningPatternConfigurationEntity')
const { SecretScanningPushProtectionBypassEntity } = require('./entity/SecretScanningPushProtectionBypassEntity')
const { SecretScanningScanHistoryEntity } = require('./entity/SecretScanningScanHistoryEntity')
const { SecurityAdvisoryEntity } = require('./entity/SecurityAdvisoryEntity')
const { SelectedActionEntity } = require('./entity/SelectedActionEntity')
const { SelfHostedRunnerEntity } = require('./entity/SelfHostedRunnerEntity')
const { ShortBlobEntity } = require('./entity/ShortBlobEntity')
const { ShortBranchEntity } = require('./entity/ShortBranchEntity')
const { SimpleClassroomEntity } = require('./entity/SimpleClassroomEntity')
const { SimpleClassroomAssignmentEntity } = require('./entity/SimpleClassroomAssignmentEntity')
const { SocialAccountEntity } = require('./entity/SocialAccountEntity')
const { SshSigningKeyEntity } = require('./entity/SshSigningKeyEntity')
const { StatusEntity } = require('./entity/StatusEntity')
const { StatusCheckPolicyEntity } = require('./entity/StatusCheckPolicyEntity')
const { SubscriberEntity } = require('./entity/SubscriberEntity')
const { TagEntity } = require('./entity/TagEntity')
const { TagProtectionEntity } = require('./entity/TagProtectionEntity')
const { TeamEntity } = require('./entity/TeamEntity')
const { TeamSimpleEntity } = require('./entity/TeamSimpleEntity')
const { ThreadEntity } = require('./entity/ThreadEntity')
const { ThreadSubscriptionEntity } = require('./entity/ThreadSubscriptionEntity')
const { TopicEntity } = require('./entity/TopicEntity')
const { UserEntity } = require('./entity/UserEntity')
const { UserMarketplacePurchaseEntity } = require('./entity/UserMarketplacePurchaseEntity')
const { ViewEntity } = require('./entity/ViewEntity')
const { WebhookConfigEntity } = require('./entity/WebhookConfigEntity')
const { WorkflowEntity } = require('./entity/WorkflowEntity')
const { WorkflowRunEntity } = require('./entity/WorkflowRunEntity')
const { WorkflowRunUsageEntity } = require('./entity/WorkflowRunUsageEntity')
const { WorkflowUsageEntity } = require('./entity/WorkflowUsageEntity')


const { inspect } = require('node:util')

const { config } = require('./Config')
const { Utility } = require('./utility/Utility')
const { GithubEntityBase } = require('./GithubEntityBase')


const { BaseFeature } = require('./feature/base/BaseFeature')



const stdutil = new Utility()


class GithubSDK {
  _mode = 'live'
  _options
  _utility = new Utility()
  _features
  _rootctx
  

  constructor(options) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

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
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
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
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err) {
      return { ok: false, err }
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
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('GithubSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err = new Error('GithubSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Action(entopts) {
    const self = this
    return new ActionEntity(self, entopts)
  }


  // Entity access: `client.ActionsArtifactAndLogRetention().list()` / `client.ActionsArtifactAndLogRetention().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsArtifactAndLogRetention(entopts) {
    const self = this
    return new ActionsArtifactAndLogRetentionEntity(self, entopts)
  }


  // Entity access: `client.ActionsCacheList().list()` / `client.ActionsCacheList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsCacheList(entopts) {
    const self = this
    return new ActionsCacheListEntity(self, entopts)
  }


  // Entity access: `client.ActionsCacheUsageByRepository().list()` / `client.ActionsCacheUsageByRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsCacheUsageByRepository(entopts) {
    const self = this
    return new ActionsCacheUsageByRepositoryEntity(self, entopts)
  }


  // Entity access: `client.ActionsCacheUsageOrgEnterprise().list()` / `client.ActionsCacheUsageOrgEnterprise().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsCacheUsageOrgEnterprise(entopts) {
    const self = this
    return new ActionsCacheUsageOrgEnterpriseEntity(self, entopts)
  }


  // Entity access: `client.ActionsForkPrContributorApproval().list()` / `client.ActionsForkPrContributorApproval().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsForkPrContributorApproval(entopts) {
    const self = this
    return new ActionsForkPrContributorApprovalEntity(self, entopts)
  }


  // Entity access: `client.ActionsForkPrWorkflowsPrivateRepo().list()` / `client.ActionsForkPrWorkflowsPrivateRepo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsForkPrWorkflowsPrivateRepo(entopts) {
    const self = this
    return new ActionsForkPrWorkflowsPrivateRepoEntity(self, entopts)
  }


  // Entity access: `client.ActionsGetDefaultWorkflowPermission().list()` / `client.ActionsGetDefaultWorkflowPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsGetDefaultWorkflowPermission(entopts) {
    const self = this
    return new ActionsGetDefaultWorkflowPermissionEntity(self, entopts)
  }


  // Entity access: `client.ActionsHostedRunner().list()` / `client.ActionsHostedRunner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsHostedRunner(entopts) {
    const self = this
    return new ActionsHostedRunnerEntity(self, entopts)
  }


  // Entity access: `client.ActionsHostedRunnerLimit().list()` / `client.ActionsHostedRunnerLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsHostedRunnerLimit(entopts) {
    const self = this
    return new ActionsHostedRunnerLimitEntity(self, entopts)
  }


  // Entity access: `client.ActionsOrganizationPermission().list()` / `client.ActionsOrganizationPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsOrganizationPermission(entopts) {
    const self = this
    return new ActionsOrganizationPermissionEntity(self, entopts)
  }


  // Entity access: `client.ActionsPublicKey().list()` / `client.ActionsPublicKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsPublicKey(entopts) {
    const self = this
    return new ActionsPublicKeyEntity(self, entopts)
  }


  // Entity access: `client.ActionsRepositoryPermission().list()` / `client.ActionsRepositoryPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsRepositoryPermission(entopts) {
    const self = this
    return new ActionsRepositoryPermissionEntity(self, entopts)
  }


  // Entity access: `client.ActionsSecret().list()` / `client.ActionsSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsSecret(entopts) {
    const self = this
    return new ActionsSecretEntity(self, entopts)
  }


  // Entity access: `client.ActionsVariable().list()` / `client.ActionsVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsVariable(entopts) {
    const self = this
    return new ActionsVariableEntity(self, entopts)
  }


  // Entity access: `client.ActionsWorkflowAccessToRepository().list()` / `client.ActionsWorkflowAccessToRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsWorkflowAccessToRepository(entopts) {
    const self = this
    return new ActionsWorkflowAccessToRepositoryEntity(self, entopts)
  }


  // Entity access: `client.Activity().list()` / `client.Activity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Activity(entopts) {
    const self = this
    return new ActivityEntity(self, entopts)
  }


  // Entity access: `client.Add().list()` / `client.Add().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Add(entopts) {
    const self = this
    return new AddEntity(self, entopts)
  }


  // Entity access: `client.ApiInsightsRouteStat().list()` / `client.ApiInsightsRouteStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiInsightsRouteStat(entopts) {
    const self = this
    return new ApiInsightsRouteStatEntity(self, entopts)
  }


  // Entity access: `client.ApiInsightsSubjectStat().list()` / `client.ApiInsightsSubjectStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiInsightsSubjectStat(entopts) {
    const self = this
    return new ApiInsightsSubjectStatEntity(self, entopts)
  }


  // Entity access: `client.ApiInsightsSummaryStat().list()` / `client.ApiInsightsSummaryStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiInsightsSummaryStat(entopts) {
    const self = this
    return new ApiInsightsSummaryStatEntity(self, entopts)
  }


  // Entity access: `client.ApiInsightsTimeStat().list()` / `client.ApiInsightsTimeStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiInsightsTimeStat(entopts) {
    const self = this
    return new ApiInsightsTimeStatEntity(self, entopts)
  }


  // Entity access: `client.ApiInsightsUserStat().list()` / `client.ApiInsightsUserStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiInsightsUserStat(entopts) {
    const self = this
    return new ApiInsightsUserStatEntity(self, entopts)
  }


  // Entity access: `client.ApiOverview().list()` / `client.ApiOverview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiOverview(entopts) {
    const self = this
    return new ApiOverviewEntity(self, entopts)
  }


  // Entity access: `client.App().list()` / `client.App().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  App(entopts) {
    const self = this
    return new AppEntity(self, entopts)
  }


  // Entity access: `client.Artifact().list()` / `client.Artifact().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Artifact(entopts) {
    const self = this
    return new ArtifactEntity(self, entopts)
  }


  // Entity access: `client.Assignee().list()` / `client.Assignee().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Assignee(entopts) {
    const self = this
    return new AssigneeEntity(self, entopts)
  }


  // Entity access: `client.AuthenticationToken().list()` / `client.AuthenticationToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AuthenticationToken(entopts) {
    const self = this
    return new AuthenticationTokenEntity(self, entopts)
  }


  // Entity access: `client.Authorization().list()` / `client.Authorization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Authorization(entopts) {
    const self = this
    return new AuthorizationEntity(self, entopts)
  }


  // Entity access: `client.Autolink().list()` / `client.Autolink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Autolink(entopts) {
    const self = this
    return new AutolinkEntity(self, entopts)
  }


  // Entity access: `client.BaseGist().list()` / `client.BaseGist().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BaseGist(entopts) {
    const self = this
    return new BaseGistEntity(self, entopts)
  }


  // Entity access: `client.BillingUsageReport().list()` / `client.BillingUsageReport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillingUsageReport(entopts) {
    const self = this
    return new BillingUsageReportEntity(self, entopts)
  }


  // Entity access: `client.BillingUsageReportUser().list()` / `client.BillingUsageReportUser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillingUsageReportUser(entopts) {
    const self = this
    return new BillingUsageReportUserEntity(self, entopts)
  }


  // Entity access: `client.Blob().list()` / `client.Blob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Blob(entopts) {
    const self = this
    return new BlobEntity(self, entopts)
  }


  // Entity access: `client.Block().list()` / `client.Block().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Block(entopts) {
    const self = this
    return new BlockEntity(self, entopts)
  }


  // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Branch(entopts) {
    const self = this
    return new BranchEntity(self, entopts)
  }


  // Entity access: `client.BranchProtection().list()` / `client.BranchProtection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchProtection(entopts) {
    const self = this
    return new BranchProtectionEntity(self, entopts)
  }


  // Entity access: `client.BranchRestrictionPolicy().list()` / `client.BranchRestrictionPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchRestrictionPolicy(entopts) {
    const self = this
    return new BranchRestrictionPolicyEntity(self, entopts)
  }


  // Entity access: `client.BranchShort().list()` / `client.BranchShort().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchShort(entopts) {
    const self = this
    return new BranchShortEntity(self, entopts)
  }


  // Entity access: `client.BranchWithProtection().list()` / `client.BranchWithProtection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchWithProtection(entopts) {
    const self = this
    return new BranchWithProtectionEntity(self, entopts)
  }


  // Entity access: `client.Campaign().list()` / `client.Campaign().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Campaign(entopts) {
    const self = this
    return new CampaignEntity(self, entopts)
  }


  // Entity access: `client.Check().list()` / `client.Check().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Check(entopts) {
    const self = this
    return new CheckEntity(self, entopts)
  }


  // Entity access: `client.CheckAnnotation().list()` / `client.CheckAnnotation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckAnnotation(entopts) {
    const self = this
    return new CheckAnnotationEntity(self, entopts)
  }


  // Entity access: `client.CheckAutomatedSecurityFix().list()` / `client.CheckAutomatedSecurityFix().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckAutomatedSecurityFix(entopts) {
    const self = this
    return new CheckAutomatedSecurityFixEntity(self, entopts)
  }


  // Entity access: `client.CheckRun().list()` / `client.CheckRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckRun(entopts) {
    const self = this
    return new CheckRunEntity(self, entopts)
  }


  // Entity access: `client.CheckSuite().list()` / `client.CheckSuite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckSuite(entopts) {
    const self = this
    return new CheckSuiteEntity(self, entopts)
  }


  // Entity access: `client.CheckSuitePreference().list()` / `client.CheckSuitePreference().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckSuitePreference(entopts) {
    const self = this
    return new CheckSuitePreferenceEntity(self, entopts)
  }


  // Entity access: `client.Classroom().list()` / `client.Classroom().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Classroom(entopts) {
    const self = this
    return new ClassroomEntity(self, entopts)
  }


  // Entity access: `client.ClassroomAcceptedAssignment().list()` / `client.ClassroomAcceptedAssignment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClassroomAcceptedAssignment(entopts) {
    const self = this
    return new ClassroomAcceptedAssignmentEntity(self, entopts)
  }


  // Entity access: `client.ClassroomAssignment().list()` / `client.ClassroomAssignment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClassroomAssignment(entopts) {
    const self = this
    return new ClassroomAssignmentEntity(self, entopts)
  }


  // Entity access: `client.ClassroomAssignmentGrade().list()` / `client.ClassroomAssignmentGrade().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClassroomAssignmentGrade(entopts) {
    const self = this
    return new ClassroomAssignmentGradeEntity(self, entopts)
  }


  // Entity access: `client.Clone().list()` / `client.Clone().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Clone(entopts) {
    const self = this
    return new CloneEntity(self, entopts)
  }


  // Entity access: `client.CodeFrequency().list()` / `client.CodeFrequency().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeFrequency(entopts) {
    const self = this
    return new CodeFrequencyEntity(self, entopts)
  }


  // Entity access: `client.CodeFrequencyStat().list()` / `client.CodeFrequencyStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeFrequencyStat(entopts) {
    const self = this
    return new CodeFrequencyStatEntity(self, entopts)
  }


  // Entity access: `client.CodeOfConduct().list()` / `client.CodeOfConduct().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeOfConduct(entopts) {
    const self = this
    return new CodeOfConductEntity(self, entopts)
  }


  // Entity access: `client.CodeScanning().list()` / `client.CodeScanning().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanning(entopts) {
    const self = this
    return new CodeScanningEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAlert().list()` / `client.CodeScanningAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAlert(entopts) {
    const self = this
    return new CodeScanningAlertEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAlertInstance().list()` / `client.CodeScanningAlertInstance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAlertInstance(entopts) {
    const self = this
    return new CodeScanningAlertInstanceEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAlertItem().list()` / `client.CodeScanningAlertItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAlertItem(entopts) {
    const self = this
    return new CodeScanningAlertItemEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAnalysi().list()` / `client.CodeScanningAnalysi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAnalysi(entopts) {
    const self = this
    return new CodeScanningAnalysiEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAnalysisDeletion().list()` / `client.CodeScanningAnalysisDeletion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAnalysisDeletion(entopts) {
    const self = this
    return new CodeScanningAnalysisDeletionEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAutofix().list()` / `client.CodeScanningAutofix().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAutofix(entopts) {
    const self = this
    return new CodeScanningAutofixEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAutofixCommit().list()` / `client.CodeScanningAutofixCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAutofixCommit(entopts) {
    const self = this
    return new CodeScanningAutofixCommitEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningCodeqlDatabase().list()` / `client.CodeScanningCodeqlDatabase().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningCodeqlDatabase(entopts) {
    const self = this
    return new CodeScanningCodeqlDatabaseEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningDefaultSetup().list()` / `client.CodeScanningDefaultSetup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningDefaultSetup(entopts) {
    const self = this
    return new CodeScanningDefaultSetupEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningOrganizationAlertItem().list()` / `client.CodeScanningOrganizationAlertItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningOrganizationAlertItem(entopts) {
    const self = this
    return new CodeScanningOrganizationAlertItemEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningSarifsStatus().list()` / `client.CodeScanningSarifsStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningSarifsStatus(entopts) {
    const self = this
    return new CodeScanningSarifsStatusEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningVariantAnalysi().list()` / `client.CodeScanningVariantAnalysi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningVariantAnalysi(entopts) {
    const self = this
    return new CodeScanningVariantAnalysiEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningVariantAnalysisRepoTask().list()` / `client.CodeScanningVariantAnalysisRepoTask().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningVariantAnalysisRepoTask(entopts) {
    const self = this
    return new CodeScanningVariantAnalysisRepoTaskEntity(self, entopts)
  }


  // Entity access: `client.CodeSecurity().list()` / `client.CodeSecurity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeSecurity(entopts) {
    const self = this
    return new CodeSecurityEntity(self, entopts)
  }


  // Entity access: `client.CodeSecurityConfiguration().list()` / `client.CodeSecurityConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeSecurityConfiguration(entopts) {
    const self = this
    return new CodeSecurityConfigurationEntity(self, entopts)
  }


  // Entity access: `client.CodeSecurityConfigurationRepository().list()` / `client.CodeSecurityConfigurationRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeSecurityConfigurationRepository(entopts) {
    const self = this
    return new CodeSecurityConfigurationRepositoryEntity(self, entopts)
  }


  // Entity access: `client.CodeSecurityDefaultConfiguration().list()` / `client.CodeSecurityDefaultConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeSecurityDefaultConfiguration(entopts) {
    const self = this
    return new CodeSecurityDefaultConfigurationEntity(self, entopts)
  }


  // Entity access: `client.CodeownersError().list()` / `client.CodeownersError().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeownersError(entopts) {
    const self = this
    return new CodeownersErrorEntity(self, entopts)
  }


  // Entity access: `client.Codespace().list()` / `client.Codespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Codespace(entopts) {
    const self = this
    return new CodespaceEntity(self, entopts)
  }


  // Entity access: `client.Collaborator().list()` / `client.Collaborator().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Collaborator(entopts) {
    const self = this
    return new CollaboratorEntity(self, entopts)
  }


  // Entity access: `client.CombinedBillingUsage().list()` / `client.CombinedBillingUsage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CombinedBillingUsage(entopts) {
    const self = this
    return new CombinedBillingUsageEntity(self, entopts)
  }


  // Entity access: `client.CombinedCommitStatus().list()` / `client.CombinedCommitStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CombinedCommitStatus(entopts) {
    const self = this
    return new CombinedCommitStatusEntity(self, entopts)
  }


  // Entity access: `client.Commit().list()` / `client.Commit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Commit(entopts) {
    const self = this
    return new CommitEntity(self, entopts)
  }


  // Entity access: `client.CommitActivity().list()` / `client.CommitActivity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CommitActivity(entopts) {
    const self = this
    return new CommitActivityEntity(self, entopts)
  }


  // Entity access: `client.CommitComment().list()` / `client.CommitComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CommitComment(entopts) {
    const self = this
    return new CommitCommentEntity(self, entopts)
  }


  // Entity access: `client.CommitComparison().list()` / `client.CommitComparison().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CommitComparison(entopts) {
    const self = this
    return new CommitComparisonEntity(self, entopts)
  }


  // Entity access: `client.CommunityProfile().list()` / `client.CommunityProfile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CommunityProfile(entopts) {
    const self = this
    return new CommunityProfileEntity(self, entopts)
  }


  // Entity access: `client.ContentFile().list()` / `client.ContentFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContentFile(entopts) {
    const self = this
    return new ContentFileEntity(self, entopts)
  }


  // Entity access: `client.ContentTraffic().list()` / `client.ContentTraffic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContentTraffic(entopts) {
    const self = this
    return new ContentTrafficEntity(self, entopts)
  }


  // Entity access: `client.Contributor().list()` / `client.Contributor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Contributor(entopts) {
    const self = this
    return new ContributorEntity(self, entopts)
  }


  // Entity access: `client.Copilot().list()` / `client.Copilot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Copilot(entopts) {
    const self = this
    return new CopilotEntity(self, entopts)
  }


  // Entity access: `client.CopilotOrganizationDetail().list()` / `client.CopilotOrganizationDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CopilotOrganizationDetail(entopts) {
    const self = this
    return new CopilotOrganizationDetailEntity(self, entopts)
  }


  // Entity access: `client.CopilotUsageMetricsDay().list()` / `client.CopilotUsageMetricsDay().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CopilotUsageMetricsDay(entopts) {
    const self = this
    return new CopilotUsageMetricsDayEntity(self, entopts)
  }


  // Entity access: `client.Credential().list()` / `client.Credential().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Credential(entopts) {
    const self = this
    return new CredentialEntity(self, entopts)
  }


  // Entity access: `client.CustomProperty().list()` / `client.CustomProperty().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomProperty(entopts) {
    const self = this
    return new CustomPropertyEntity(self, entopts)
  }


  // Entity access: `client.CustomPropertyValue().list()` / `client.CustomPropertyValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomPropertyValue(entopts) {
    const self = this
    return new CustomPropertyValueEntity(self, entopts)
  }


  // Entity access: `client.Dependabot().list()` / `client.Dependabot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dependabot(entopts) {
    const self = this
    return new DependabotEntity(self, entopts)
  }


  // Entity access: `client.DependabotAlert().list()` / `client.DependabotAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependabotAlert(entopts) {
    const self = this
    return new DependabotAlertEntity(self, entopts)
  }


  // Entity access: `client.DependabotAlertWithRepository().list()` / `client.DependabotAlertWithRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependabotAlertWithRepository(entopts) {
    const self = this
    return new DependabotAlertWithRepositoryEntity(self, entopts)
  }


  // Entity access: `client.DependabotPublicKey().list()` / `client.DependabotPublicKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependabotPublicKey(entopts) {
    const self = this
    return new DependabotPublicKeyEntity(self, entopts)
  }


  // Entity access: `client.DependabotRepositoryAccessDetail().list()` / `client.DependabotRepositoryAccessDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependabotRepositoryAccessDetail(entopts) {
    const self = this
    return new DependabotRepositoryAccessDetailEntity(self, entopts)
  }


  // Entity access: `client.DependabotSecret().list()` / `client.DependabotSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependabotSecret(entopts) {
    const self = this
    return new DependabotSecretEntity(self, entopts)
  }


  // Entity access: `client.DependencyGraph().list()` / `client.DependencyGraph().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependencyGraph(entopts) {
    const self = this
    return new DependencyGraphEntity(self, entopts)
  }


  // Entity access: `client.DependencyGraphDiff().list()` / `client.DependencyGraphDiff().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependencyGraphDiff(entopts) {
    const self = this
    return new DependencyGraphDiffEntity(self, entopts)
  }


  // Entity access: `client.DependencyGraphSpdxSbom().list()` / `client.DependencyGraphSpdxSbom().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependencyGraphSpdxSbom(entopts) {
    const self = this
    return new DependencyGraphSpdxSbomEntity(self, entopts)
  }


  // Entity access: `client.DeployKey().list()` / `client.DeployKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeployKey(entopts) {
    const self = this
    return new DeployKeyEntity(self, entopts)
  }


  // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Deployment(entopts) {
    const self = this
    return new DeploymentEntity(self, entopts)
  }


  // Entity access: `client.DeploymentBranchPolicy().list()` / `client.DeploymentBranchPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeploymentBranchPolicy(entopts) {
    const self = this
    return new DeploymentBranchPolicyEntity(self, entopts)
  }


  // Entity access: `client.DeploymentProtectionRule().list()` / `client.DeploymentProtectionRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeploymentProtectionRule(entopts) {
    const self = this
    return new DeploymentProtectionRuleEntity(self, entopts)
  }


  // Entity access: `client.DeploymentStatus().list()` / `client.DeploymentStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeploymentStatus(entopts) {
    const self = this
    return new DeploymentStatusEntity(self, entopts)
  }


  // Entity access: `client.DiffEntry().list()` / `client.DiffEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DiffEntry(entopts) {
    const self = this
    return new DiffEntryEntity(self, entopts)
  }


  // Entity access: `client.Email().list()` / `client.Email().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Email(entopts) {
    const self = this
    return new EmailEntity(self, entopts)
  }


  // Entity access: `client.Emoji().list()` / `client.Emoji().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Emoji(entopts) {
    const self = this
    return new EmojiEntity(self, entopts)
  }


  // Entity access: `client.EmptyObject().list()` / `client.EmptyObject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmptyObject(entopts) {
    const self = this
    return new EmptyObjectEntity(self, entopts)
  }


  // Entity access: `client.EnterpriseTeam().list()` / `client.EnterpriseTeam().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnterpriseTeam(entopts) {
    const self = this
    return new EnterpriseTeamEntity(self, entopts)
  }


  // Entity access: `client.EnterpriseTeamMembership().list()` / `client.EnterpriseTeamMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnterpriseTeamMembership(entopts) {
    const self = this
    return new EnterpriseTeamMembershipEntity(self, entopts)
  }


  // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Environment(entopts) {
    const self = this
    return new EnvironmentEntity(self, entopts)
  }


  // Entity access: `client.EnvironmentApproval().list()` / `client.EnvironmentApproval().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnvironmentApproval(entopts) {
    const self = this
    return new EnvironmentApprovalEntity(self, entopts)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Event(entopts) {
    const self = this
    return new EventEntity(self, entopts)
  }


  // Entity access: `client.Feed().list()` / `client.Feed().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Feed(entopts) {
    const self = this
    return new FeedEntity(self, entopts)
  }


  // Entity access: `client.FileCommit().list()` / `client.FileCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FileCommit(entopts) {
    const self = this
    return new FileCommitEntity(self, entopts)
  }


  // Entity access: `client.Follower().list()` / `client.Follower().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Follower(entopts) {
    const self = this
    return new FollowerEntity(self, entopts)
  }


  // Entity access: `client.Following().list()` / `client.Following().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Following(entopts) {
    const self = this
    return new FollowingEntity(self, entopts)
  }


  // Entity access: `client.FullRepository().list()` / `client.FullRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FullRepository(entopts) {
    const self = this
    return new FullRepositoryEntity(self, entopts)
  }


  // Entity access: `client.Gist().list()` / `client.Gist().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gist(entopts) {
    const self = this
    return new GistEntity(self, entopts)
  }


  // Entity access: `client.GistComment().list()` / `client.GistComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GistComment(entopts) {
    const self = this
    return new GistCommentEntity(self, entopts)
  }


  // Entity access: `client.GistCommit().list()` / `client.GistCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GistCommit(entopts) {
    const self = this
    return new GistCommitEntity(self, entopts)
  }


  // Entity access: `client.GistSimple().list()` / `client.GistSimple().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GistSimple(entopts) {
    const self = this
    return new GistSimpleEntity(self, entopts)
  }


  // Entity access: `client.Git().list()` / `client.Git().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Git(entopts) {
    const self = this
    return new GitEntity(self, entopts)
  }


  // Entity access: `client.GitCommit().list()` / `client.GitCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitCommit(entopts) {
    const self = this
    return new GitCommitEntity(self, entopts)
  }


  // Entity access: `client.GitRef().list()` / `client.GitRef().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitRef(entopts) {
    const self = this
    return new GitRefEntity(self, entopts)
  }


  // Entity access: `client.GitTag().list()` / `client.GitTag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitTag(entopts) {
    const self = this
    return new GitTagEntity(self, entopts)
  }


  // Entity access: `client.GitTree().list()` / `client.GitTree().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitTree(entopts) {
    const self = this
    return new GitTreeEntity(self, entopts)
  }


  // Entity access: `client.Gitignore().list()` / `client.Gitignore().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gitignore(entopts) {
    const self = this
    return new GitignoreEntity(self, entopts)
  }


  // Entity access: `client.GitignoreTemplate().list()` / `client.GitignoreTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitignoreTemplate(entopts) {
    const self = this
    return new GitignoreTemplateEntity(self, entopts)
  }


  // Entity access: `client.GlobalAdvisory().list()` / `client.GlobalAdvisory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GlobalAdvisory(entopts) {
    const self = this
    return new GlobalAdvisoryEntity(self, entopts)
  }


  // Entity access: `client.GpgKey().list()` / `client.GpgKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GpgKey(entopts) {
    const self = this
    return new GpgKeyEntity(self, entopts)
  }


  // Entity access: `client.Hook().list()` / `client.Hook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Hook(entopts) {
    const self = this
    return new HookEntity(self, entopts)
  }


  // Entity access: `client.HookDelivery().list()` / `client.HookDelivery().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  HookDelivery(entopts) {
    const self = this
    return new HookDeliveryEntity(self, entopts)
  }


  // Entity access: `client.HookDeliveryItem().list()` / `client.HookDeliveryItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  HookDeliveryItem(entopts) {
    const self = this
    return new HookDeliveryItemEntity(self, entopts)
  }


  // Entity access: `client.HostedCompute().list()` / `client.HostedCompute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  HostedCompute(entopts) {
    const self = this
    return new HostedComputeEntity(self, entopts)
  }


  // Entity access: `client.Hovercard().list()` / `client.Hovercard().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Hovercard(entopts) {
    const self = this
    return new HovercardEntity(self, entopts)
  }


  // Entity access: `client.Import().list()` / `client.Import().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Import(entopts) {
    const self = this
    return new ImportEntity(self, entopts)
  }


  // Entity access: `client.Installation().list()` / `client.Installation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Installation(entopts) {
    const self = this
    return new InstallationEntity(self, entopts)
  }


  // Entity access: `client.InstallationToken().list()` / `client.InstallationToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InstallationToken(entopts) {
    const self = this
    return new InstallationTokenEntity(self, entopts)
  }


  // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Integration(entopts) {
    const self = this
    return new IntegrationEntity(self, entopts)
  }


  // Entity access: `client.IntegrationInstallation().list()` / `client.IntegrationInstallation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IntegrationInstallation(entopts) {
    const self = this
    return new IntegrationInstallationEntity(self, entopts)
  }


  // Entity access: `client.Interaction().list()` / `client.Interaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Interaction(entopts) {
    const self = this
    return new InteractionEntity(self, entopts)
  }


  // Entity access: `client.InteractionLimit().list()` / `client.InteractionLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InteractionLimit(entopts) {
    const self = this
    return new InteractionLimitEntity(self, entopts)
  }


  // Entity access: `client.Issue().list()` / `client.Issue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Issue(entopts) {
    const self = this
    return new IssueEntity(self, entopts)
  }


  // Entity access: `client.IssueType().list()` / `client.IssueType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IssueType(entopts) {
    const self = this
    return new IssueTypeEntity(self, entopts)
  }


  // Entity access: `client.Job().list()` / `client.Job().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Job(entopts) {
    const self = this
    return new JobEntity(self, entopts)
  }


  // Entity access: `client.Key().list()` / `client.Key().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Key(entopts) {
    const self = this
    return new KeyEntity(self, entopts)
  }


  // Entity access: `client.Label().list()` / `client.Label().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Label(entopts) {
    const self = this
    return new LabelEntity(self, entopts)
  }


  // Entity access: `client.Language().list()` / `client.Language().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Language(entopts) {
    const self = this
    return new LanguageEntity(self, entopts)
  }


  // Entity access: `client.License().list()` / `client.License().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  License(entopts) {
    const self = this
    return new LicenseEntity(self, entopts)
  }


  // Entity access: `client.Markdown().list()` / `client.Markdown().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Markdown(entopts) {
    const self = this
    return new MarkdownEntity(self, entopts)
  }


  // Entity access: `client.MarketplaceListingPlan().list()` / `client.MarketplaceListingPlan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MarketplaceListingPlan(entopts) {
    const self = this
    return new MarketplaceListingPlanEntity(self, entopts)
  }


  // Entity access: `client.MarketplacePurchase().list()` / `client.MarketplacePurchase().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MarketplacePurchase(entopts) {
    const self = this
    return new MarketplacePurchaseEntity(self, entopts)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Member(entopts) {
    const self = this
    return new MemberEntity(self, entopts)
  }


  // Entity access: `client.Membership().list()` / `client.Membership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Membership(entopts) {
    const self = this
    return new MembershipEntity(self, entopts)
  }


  // Entity access: `client.MergedUpstream().list()` / `client.MergedUpstream().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MergedUpstream(entopts) {
    const self = this
    return new MergedUpstreamEntity(self, entopts)
  }


  // Entity access: `client.Meta().list()` / `client.Meta().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Meta(entopts) {
    const self = this
    return new MetaEntity(self, entopts)
  }


  // Entity access: `client.Metaroot().list()` / `client.Metaroot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Metaroot(entopts) {
    const self = this
    return new MetarootEntity(self, entopts)
  }


  // Entity access: `client.Migration().list()` / `client.Migration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Migration(entopts) {
    const self = this
    return new MigrationEntity(self, entopts)
  }


  // Entity access: `client.Milestone().list()` / `client.Milestone().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Milestone(entopts) {
    const self = this
    return new MilestoneEntity(self, entopts)
  }


  // Entity access: `client.MinimalRepository().list()` / `client.MinimalRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MinimalRepository(entopts) {
    const self = this
    return new MinimalRepositoryEntity(self, entopts)
  }


  // Entity access: `client.NetworkConfiguration().list()` / `client.NetworkConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NetworkConfiguration(entopts) {
    const self = this
    return new NetworkConfigurationEntity(self, entopts)
  }


  // Entity access: `client.NetworkSetting().list()` / `client.NetworkSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NetworkSetting(entopts) {
    const self = this
    return new NetworkSettingEntity(self, entopts)
  }


  // Entity access: `client.OidcCustomSub().list()` / `client.OidcCustomSub().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OidcCustomSub(entopts) {
    const self = this
    return new OidcCustomSubEntity(self, entopts)
  }


  // Entity access: `client.OidcCustomSubRepo().list()` / `client.OidcCustomSubRepo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OidcCustomSubRepo(entopts) {
    const self = this
    return new OidcCustomSubRepoEntity(self, entopts)
  }


  // Entity access: `client.Org().list()` / `client.Org().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Org(entopts) {
    const self = this
    return new OrgEntity(self, entopts)
  }


  // Entity access: `client.OrgHook().list()` / `client.OrgHook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgHook(entopts) {
    const self = this
    return new OrgHookEntity(self, entopts)
  }


  // Entity access: `client.OrgMembership().list()` / `client.OrgMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgMembership(entopts) {
    const self = this
    return new OrgMembershipEntity(self, entopts)
  }


  // Entity access: `client.OrgPrivateRegistryConfiguration().list()` / `client.OrgPrivateRegistryConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgPrivateRegistryConfiguration(entopts) {
    const self = this
    return new OrgPrivateRegistryConfigurationEntity(self, entopts)
  }


  // Entity access: `client.OrgPrivateRegistryConfigurationWithSelectedRepository().list()` / `client.OrgPrivateRegistryConfigurationWithSelectedRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgPrivateRegistryConfigurationWithSelectedRepository(entopts) {
    const self = this
    return new OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity(self, entopts)
  }


  // Entity access: `client.OrgRepoCustomPropertyValue().list()` / `client.OrgRepoCustomPropertyValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgRepoCustomPropertyValue(entopts) {
    const self = this
    return new OrgRepoCustomPropertyValueEntity(self, entopts)
  }


  // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Organization(entopts) {
    const self = this
    return new OrganizationEntity(self, entopts)
  }


  // Entity access: `client.OrganizationActionsSecret().list()` / `client.OrganizationActionsSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationActionsSecret(entopts) {
    const self = this
    return new OrganizationActionsSecretEntity(self, entopts)
  }


  // Entity access: `client.OrganizationActionsVariable().list()` / `client.OrganizationActionsVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationActionsVariable(entopts) {
    const self = this
    return new OrganizationActionsVariableEntity(self, entopts)
  }


  // Entity access: `client.OrganizationDependabotSecret().list()` / `client.OrganizationDependabotSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationDependabotSecret(entopts) {
    const self = this
    return new OrganizationDependabotSecretEntity(self, entopts)
  }


  // Entity access: `client.OrganizationInvitation().list()` / `client.OrganizationInvitation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationInvitation(entopts) {
    const self = this
    return new OrganizationInvitationEntity(self, entopts)
  }


  // Entity access: `client.OrganizationProgrammaticAccessGrant().list()` / `client.OrganizationProgrammaticAccessGrant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationProgrammaticAccessGrant(entopts) {
    const self = this
    return new OrganizationProgrammaticAccessGrantEntity(self, entopts)
  }


  // Entity access: `client.OrganizationRole().list()` / `client.OrganizationRole().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationRole(entopts) {
    const self = this
    return new OrganizationRoleEntity(self, entopts)
  }


  // Entity access: `client.OrganizationSecretScanningAlert().list()` / `client.OrganizationSecretScanningAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationSecretScanningAlert(entopts) {
    const self = this
    return new OrganizationSecretScanningAlertEntity(self, entopts)
  }


  // Entity access: `client.OutsideCollaborator().list()` / `client.OutsideCollaborator().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OutsideCollaborator(entopts) {
    const self = this
    return new OutsideCollaboratorEntity(self, entopts)
  }


  // Entity access: `client.Package().list()` / `client.Package().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Package(entopts) {
    const self = this
    return new PackageEntity(self, entopts)
  }


  // Entity access: `client.Page().list()` / `client.Page().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Page(entopts) {
    const self = this
    return new PageEntity(self, entopts)
  }


  // Entity access: `client.PageBuild().list()` / `client.PageBuild().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PageBuild(entopts) {
    const self = this
    return new PageBuildEntity(self, entopts)
  }


  // Entity access: `client.PageBuildStatus().list()` / `client.PageBuildStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PageBuildStatus(entopts) {
    const self = this
    return new PageBuildStatusEntity(self, entopts)
  }


  // Entity access: `client.PageDeployment().list()` / `client.PageDeployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PageDeployment(entopts) {
    const self = this
    return new PageDeploymentEntity(self, entopts)
  }


  // Entity access: `client.PagesDeploymentStatus().list()` / `client.PagesDeploymentStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PagesDeploymentStatus(entopts) {
    const self = this
    return new PagesDeploymentStatusEntity(self, entopts)
  }


  // Entity access: `client.PagesHealthCheck().list()` / `client.PagesHealthCheck().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PagesHealthCheck(entopts) {
    const self = this
    return new PagesHealthCheckEntity(self, entopts)
  }


  // Entity access: `client.Participation().list()` / `client.Participation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Participation(entopts) {
    const self = this
    return new ParticipationEntity(self, entopts)
  }


  // Entity access: `client.PendingDeployment().list()` / `client.PendingDeployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PendingDeployment(entopts) {
    const self = this
    return new PendingDeploymentEntity(self, entopts)
  }


  // Entity access: `client.PorterAuthor().list()` / `client.PorterAuthor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PorterAuthor(entopts) {
    const self = this
    return new PorterAuthorEntity(self, entopts)
  }


  // Entity access: `client.PorterLargeFile().list()` / `client.PorterLargeFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PorterLargeFile(entopts) {
    const self = this
    return new PorterLargeFileEntity(self, entopts)
  }


  // Entity access: `client.PrivateRegistry().list()` / `client.PrivateRegistry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PrivateRegistry(entopts) {
    const self = this
    return new PrivateRegistryEntity(self, entopts)
  }


  // Entity access: `client.PrivateUser().list()` / `client.PrivateUser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PrivateUser(entopts) {
    const self = this
    return new PrivateUserEntity(self, entopts)
  }


  // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Project(entopts) {
    const self = this
    return new ProjectEntity(self, entopts)
  }


  // Entity access: `client.ProjectCollaboratorPermission().list()` / `client.ProjectCollaboratorPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectCollaboratorPermission(entopts) {
    const self = this
    return new ProjectCollaboratorPermissionEntity(self, entopts)
  }


  // Entity access: `client.ProjectColumn().list()` / `client.ProjectColumn().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectColumn(entopts) {
    const self = this
    return new ProjectColumnEntity(self, entopts)
  }


  // Entity access: `client.ProjectsClassic().list()` / `client.ProjectsClassic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsClassic(entopts) {
    const self = this
    return new ProjectsClassicEntity(self, entopts)
  }


  // Entity access: `client.ProjectsV2().list()` / `client.ProjectsV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsV2(entopts) {
    const self = this
    return new ProjectsV2Entity(self, entopts)
  }


  // Entity access: `client.ProjectsV2Field().list()` / `client.ProjectsV2Field().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsV2Field(entopts) {
    const self = this
    return new ProjectsV2FieldEntity(self, entopts)
  }


  // Entity access: `client.ProjectsV2ItemSimple().list()` / `client.ProjectsV2ItemSimple().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsV2ItemSimple(entopts) {
    const self = this
    return new ProjectsV2ItemSimpleEntity(self, entopts)
  }


  // Entity access: `client.ProjectsV2ItemWithContent().list()` / `client.ProjectsV2ItemWithContent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsV2ItemWithContent(entopts) {
    const self = this
    return new ProjectsV2ItemWithContentEntity(self, entopts)
  }


  // Entity access: `client.ProtectedBranch().list()` / `client.ProtectedBranch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProtectedBranch(entopts) {
    const self = this
    return new ProtectedBranchEntity(self, entopts)
  }


  // Entity access: `client.ProtectedBranchAdminEnforced().list()` / `client.ProtectedBranchAdminEnforced().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProtectedBranchAdminEnforced(entopts) {
    const self = this
    return new ProtectedBranchAdminEnforcedEntity(self, entopts)
  }


  // Entity access: `client.ProtectedBranchPullRequestReview().list()` / `client.ProtectedBranchPullRequestReview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProtectedBranchPullRequestReview(entopts) {
    const self = this
    return new ProtectedBranchPullRequestReviewEntity(self, entopts)
  }


  // Entity access: `client.PublicMember().list()` / `client.PublicMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PublicMember(entopts) {
    const self = this
    return new PublicMemberEntity(self, entopts)
  }


  // Entity access: `client.Pull().list()` / `client.Pull().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pull(entopts) {
    const self = this
    return new PullEntity(self, entopts)
  }


  // Entity access: `client.PullRequestReview().list()` / `client.PullRequestReview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PullRequestReview(entopts) {
    const self = this
    return new PullRequestReviewEntity(self, entopts)
  }


  // Entity access: `client.PullRequestReviewComment().list()` / `client.PullRequestReviewComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PullRequestReviewComment(entopts) {
    const self = this
    return new PullRequestReviewCommentEntity(self, entopts)
  }


  // Entity access: `client.PullRequestSimple().list()` / `client.PullRequestSimple().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PullRequestSimple(entopts) {
    const self = this
    return new PullRequestSimpleEntity(self, entopts)
  }


  // Entity access: `client.RateLimit().list()` / `client.RateLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RateLimit(entopts) {
    const self = this
    return new RateLimitEntity(self, entopts)
  }


  // Entity access: `client.Reaction().list()` / `client.Reaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reaction(entopts) {
    const self = this
    return new ReactionEntity(self, entopts)
  }


  // Entity access: `client.Referrer().list()` / `client.Referrer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Referrer(entopts) {
    const self = this
    return new ReferrerEntity(self, entopts)
  }


  // Entity access: `client.Release().list()` / `client.Release().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Release(entopts) {
    const self = this
    return new ReleaseEntity(self, entopts)
  }


  // Entity access: `client.ReleaseAsset().list()` / `client.ReleaseAsset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReleaseAsset(entopts) {
    const self = this
    return new ReleaseAssetEntity(self, entopts)
  }


  // Entity access: `client.ReleaseNotesContent().list()` / `client.ReleaseNotesContent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReleaseNotesContent(entopts) {
    const self = this
    return new ReleaseNotesContentEntity(self, entopts)
  }


  // Entity access: `client.Remove().list()` / `client.Remove().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Remove(entopts) {
    const self = this
    return new RemoveEntity(self, entopts)
  }


  // Entity access: `client.Repo().list()` / `client.Repo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Repo(entopts) {
    const self = this
    return new RepoEntity(self, entopts)
  }


  // Entity access: `client.Repository().list()` / `client.Repository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Repository(entopts) {
    const self = this
    return new RepositoryEntity(self, entopts)
  }


  // Entity access: `client.RepositoryAdvisory().list()` / `client.RepositoryAdvisory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryAdvisory(entopts) {
    const self = this
    return new RepositoryAdvisoryEntity(self, entopts)
  }


  // Entity access: `client.RepositoryCollaboratorPermission().list()` / `client.RepositoryCollaboratorPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryCollaboratorPermission(entopts) {
    const self = this
    return new RepositoryCollaboratorPermissionEntity(self, entopts)
  }


  // Entity access: `client.RepositoryInvitation().list()` / `client.RepositoryInvitation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryInvitation(entopts) {
    const self = this
    return new RepositoryInvitationEntity(self, entopts)
  }


  // Entity access: `client.RepositoryRuleDetailed().list()` / `client.RepositoryRuleDetailed().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryRuleDetailed(entopts) {
    const self = this
    return new RepositoryRuleDetailedEntity(self, entopts)
  }


  // Entity access: `client.RepositoryRuleset().list()` / `client.RepositoryRuleset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryRuleset(entopts) {
    const self = this
    return new RepositoryRulesetEntity(self, entopts)
  }


  // Entity access: `client.RepositorySubscription().list()` / `client.RepositorySubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositorySubscription(entopts) {
    const self = this
    return new RepositorySubscriptionEntity(self, entopts)
  }


  // Entity access: `client.ReviewComment().list()` / `client.ReviewComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReviewComment(entopts) {
    const self = this
    return new ReviewCommentEntity(self, entopts)
  }


  // Entity access: `client.RuleSuite().list()` / `client.RuleSuite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RuleSuite(entopts) {
    const self = this
    return new RuleSuiteEntity(self, entopts)
  }


  // Entity access: `client.RulesetVersion().list()` / `client.RulesetVersion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RulesetVersion(entopts) {
    const self = this
    return new RulesetVersionEntity(self, entopts)
  }


  // Entity access: `client.RulesetVersionWithState().list()` / `client.RulesetVersionWithState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RulesetVersionWithState(entopts) {
    const self = this
    return new RulesetVersionWithStateEntity(self, entopts)
  }


  // Entity access: `client.Runner().list()` / `client.Runner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Runner(entopts) {
    const self = this
    return new RunnerEntity(self, entopts)
  }


  // Entity access: `client.RunnerApplication().list()` / `client.RunnerApplication().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RunnerApplication(entopts) {
    const self = this
    return new RunnerApplicationEntity(self, entopts)
  }


  // Entity access: `client.RunnerGroup().list()` / `client.RunnerGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RunnerGroup(entopts) {
    const self = this
    return new RunnerGroupEntity(self, entopts)
  }


  // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Search(entopts) {
    const self = this
    return new SearchEntity(self, entopts)
  }


  // Entity access: `client.SecretScanning().list()` / `client.SecretScanning().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanning(entopts) {
    const self = this
    return new SecretScanningEntity(self, entopts)
  }


  // Entity access: `client.SecretScanningAlert().list()` / `client.SecretScanningAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanningAlert(entopts) {
    const self = this
    return new SecretScanningAlertEntity(self, entopts)
  }


  // Entity access: `client.SecretScanningLocation().list()` / `client.SecretScanningLocation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanningLocation(entopts) {
    const self = this
    return new SecretScanningLocationEntity(self, entopts)
  }


  // Entity access: `client.SecretScanningPatternConfiguration().list()` / `client.SecretScanningPatternConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanningPatternConfiguration(entopts) {
    const self = this
    return new SecretScanningPatternConfigurationEntity(self, entopts)
  }


  // Entity access: `client.SecretScanningPushProtectionBypass().list()` / `client.SecretScanningPushProtectionBypass().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanningPushProtectionBypass(entopts) {
    const self = this
    return new SecretScanningPushProtectionBypassEntity(self, entopts)
  }


  // Entity access: `client.SecretScanningScanHistory().list()` / `client.SecretScanningScanHistory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanningScanHistory(entopts) {
    const self = this
    return new SecretScanningScanHistoryEntity(self, entopts)
  }


  // Entity access: `client.SecurityAdvisory().list()` / `client.SecurityAdvisory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecurityAdvisory(entopts) {
    const self = this
    return new SecurityAdvisoryEntity(self, entopts)
  }


  // Entity access: `client.SelectedAction().list()` / `client.SelectedAction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SelectedAction(entopts) {
    const self = this
    return new SelectedActionEntity(self, entopts)
  }


  // Entity access: `client.SelfHostedRunner().list()` / `client.SelfHostedRunner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SelfHostedRunner(entopts) {
    const self = this
    return new SelfHostedRunnerEntity(self, entopts)
  }


  // Entity access: `client.ShortBlob().list()` / `client.ShortBlob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ShortBlob(entopts) {
    const self = this
    return new ShortBlobEntity(self, entopts)
  }


  // Entity access: `client.ShortBranch().list()` / `client.ShortBranch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ShortBranch(entopts) {
    const self = this
    return new ShortBranchEntity(self, entopts)
  }


  // Entity access: `client.SimpleClassroom().list()` / `client.SimpleClassroom().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SimpleClassroom(entopts) {
    const self = this
    return new SimpleClassroomEntity(self, entopts)
  }


  // Entity access: `client.SimpleClassroomAssignment().list()` / `client.SimpleClassroomAssignment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SimpleClassroomAssignment(entopts) {
    const self = this
    return new SimpleClassroomAssignmentEntity(self, entopts)
  }


  // Entity access: `client.SocialAccount().list()` / `client.SocialAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SocialAccount(entopts) {
    const self = this
    return new SocialAccountEntity(self, entopts)
  }


  // Entity access: `client.SshSigningKey().list()` / `client.SshSigningKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SshSigningKey(entopts) {
    const self = this
    return new SshSigningKeyEntity(self, entopts)
  }


  // Entity access: `client.Status().list()` / `client.Status().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Status(entopts) {
    const self = this
    return new StatusEntity(self, entopts)
  }


  // Entity access: `client.StatusCheckPolicy().list()` / `client.StatusCheckPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusCheckPolicy(entopts) {
    const self = this
    return new StatusCheckPolicyEntity(self, entopts)
  }


  // Entity access: `client.Subscriber().list()` / `client.Subscriber().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Subscriber(entopts) {
    const self = this
    return new SubscriberEntity(self, entopts)
  }


  // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tag(entopts) {
    const self = this
    return new TagEntity(self, entopts)
  }


  // Entity access: `client.TagProtection().list()` / `client.TagProtection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TagProtection(entopts) {
    const self = this
    return new TagProtectionEntity(self, entopts)
  }


  // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Team(entopts) {
    const self = this
    return new TeamEntity(self, entopts)
  }


  // Entity access: `client.TeamSimple().list()` / `client.TeamSimple().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamSimple(entopts) {
    const self = this
    return new TeamSimpleEntity(self, entopts)
  }


  // Entity access: `client.Thread().list()` / `client.Thread().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Thread(entopts) {
    const self = this
    return new ThreadEntity(self, entopts)
  }


  // Entity access: `client.ThreadSubscription().list()` / `client.ThreadSubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ThreadSubscription(entopts) {
    const self = this
    return new ThreadSubscriptionEntity(self, entopts)
  }


  // Entity access: `client.Topic().list()` / `client.Topic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Topic(entopts) {
    const self = this
    return new TopicEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.UserMarketplacePurchase().list()` / `client.UserMarketplacePurchase().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserMarketplacePurchase(entopts) {
    const self = this
    return new UserMarketplacePurchaseEntity(self, entopts)
  }


  // Entity access: `client.View().list()` / `client.View().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  View(entopts) {
    const self = this
    return new ViewEntity(self, entopts)
  }


  // Entity access: `client.WebhookConfig().list()` / `client.WebhookConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebhookConfig(entopts) {
    const self = this
    return new WebhookConfigEntity(self, entopts)
  }


  // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Workflow(entopts) {
    const self = this
    return new WorkflowEntity(self, entopts)
  }


  // Entity access: `client.WorkflowRun().list()` / `client.WorkflowRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowRun(entopts) {
    const self = this
    return new WorkflowRunEntity(self, entopts)
  }


  // Entity access: `client.WorkflowRunUsage().list()` / `client.WorkflowRunUsage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowRunUsage(entopts) {
    const self = this
    return new WorkflowRunUsageEntity(self, entopts)
  }


  // Entity access: `client.WorkflowUsage().list()` / `client.WorkflowUsage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowUsage(entopts) {
    const self = this
    return new WorkflowUsageEntity(self, entopts)
  }




  static test(testoptsarg, sdkoptsarg) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new GithubSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts, sdkopts) {
    return GithubSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Github' }
  }

  toString() {
    return 'Github ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = GithubSDK


module.exports = {
  stdutil,
  config,
  

  BaseFeature,
  GithubEntityBase,

  GithubSDK,
  SDK,
}

