// Github Ts SDK

import { ActionEntity } from './entity/ActionEntity'
import { ActionsArtifactAndLogRetentionEntity } from './entity/ActionsArtifactAndLogRetentionEntity'
import { ActionsCacheListEntity } from './entity/ActionsCacheListEntity'
import { ActionsCacheUsageByRepositoryEntity } from './entity/ActionsCacheUsageByRepositoryEntity'
import { ActionsCacheUsageOrgEnterpriseEntity } from './entity/ActionsCacheUsageOrgEnterpriseEntity'
import { ActionsForkPrContributorApprovalEntity } from './entity/ActionsForkPrContributorApprovalEntity'
import { ActionsForkPrWorkflowsPrivateRepoEntity } from './entity/ActionsForkPrWorkflowsPrivateRepoEntity'
import { ActionsGetDefaultWorkflowPermissionEntity } from './entity/ActionsGetDefaultWorkflowPermissionEntity'
import { ActionsHostedRunnerEntity } from './entity/ActionsHostedRunnerEntity'
import { ActionsHostedRunnerLimitEntity } from './entity/ActionsHostedRunnerLimitEntity'
import { ActionsOrganizationPermissionEntity } from './entity/ActionsOrganizationPermissionEntity'
import { ActionsPublicKeyEntity } from './entity/ActionsPublicKeyEntity'
import { ActionsRepositoryPermissionEntity } from './entity/ActionsRepositoryPermissionEntity'
import { ActionsSecretEntity } from './entity/ActionsSecretEntity'
import { ActionsVariableEntity } from './entity/ActionsVariableEntity'
import { ActionsWorkflowAccessToRepositoryEntity } from './entity/ActionsWorkflowAccessToRepositoryEntity'
import { ActivityEntity } from './entity/ActivityEntity'
import { AddEntity } from './entity/AddEntity'
import { ApiInsightsRouteStatEntity } from './entity/ApiInsightsRouteStatEntity'
import { ApiInsightsSubjectStatEntity } from './entity/ApiInsightsSubjectStatEntity'
import { ApiInsightsSummaryStatEntity } from './entity/ApiInsightsSummaryStatEntity'
import { ApiInsightsTimeStatEntity } from './entity/ApiInsightsTimeStatEntity'
import { ApiInsightsUserStatEntity } from './entity/ApiInsightsUserStatEntity'
import { ApiOverviewEntity } from './entity/ApiOverviewEntity'
import { AppEntity } from './entity/AppEntity'
import { ArtifactEntity } from './entity/ArtifactEntity'
import { AssigneeEntity } from './entity/AssigneeEntity'
import { AuthenticationTokenEntity } from './entity/AuthenticationTokenEntity'
import { AuthorizationEntity } from './entity/AuthorizationEntity'
import { AutolinkEntity } from './entity/AutolinkEntity'
import { BaseGistEntity } from './entity/BaseGistEntity'
import { BillingUsageReportEntity } from './entity/BillingUsageReportEntity'
import { BillingUsageReportUserEntity } from './entity/BillingUsageReportUserEntity'
import { BlobEntity } from './entity/BlobEntity'
import { BlockEntity } from './entity/BlockEntity'
import { BranchEntity } from './entity/BranchEntity'
import { BranchProtectionEntity } from './entity/BranchProtectionEntity'
import { BranchRestrictionPolicyEntity } from './entity/BranchRestrictionPolicyEntity'
import { BranchShortEntity } from './entity/BranchShortEntity'
import { BranchWithProtectionEntity } from './entity/BranchWithProtectionEntity'
import { CampaignEntity } from './entity/CampaignEntity'
import { CheckEntity } from './entity/CheckEntity'
import { CheckAnnotationEntity } from './entity/CheckAnnotationEntity'
import { CheckAutomatedSecurityFixEntity } from './entity/CheckAutomatedSecurityFixEntity'
import { CheckRunEntity } from './entity/CheckRunEntity'
import { CheckSuiteEntity } from './entity/CheckSuiteEntity'
import { CheckSuitePreferenceEntity } from './entity/CheckSuitePreferenceEntity'
import { ClassroomEntity } from './entity/ClassroomEntity'
import { ClassroomAcceptedAssignmentEntity } from './entity/ClassroomAcceptedAssignmentEntity'
import { ClassroomAssignmentEntity } from './entity/ClassroomAssignmentEntity'
import { ClassroomAssignmentGradeEntity } from './entity/ClassroomAssignmentGradeEntity'
import { CloneEntity } from './entity/CloneEntity'
import { CodeFrequencyEntity } from './entity/CodeFrequencyEntity'
import { CodeFrequencyStatEntity } from './entity/CodeFrequencyStatEntity'
import { CodeOfConductEntity } from './entity/CodeOfConductEntity'
import { CodeScanningEntity } from './entity/CodeScanningEntity'
import { CodeScanningAlertEntity } from './entity/CodeScanningAlertEntity'
import { CodeScanningAlertInstanceEntity } from './entity/CodeScanningAlertInstanceEntity'
import { CodeScanningAlertItemEntity } from './entity/CodeScanningAlertItemEntity'
import { CodeScanningAnalysiEntity } from './entity/CodeScanningAnalysiEntity'
import { CodeScanningAnalysisDeletionEntity } from './entity/CodeScanningAnalysisDeletionEntity'
import { CodeScanningAutofixEntity } from './entity/CodeScanningAutofixEntity'
import { CodeScanningAutofixCommitEntity } from './entity/CodeScanningAutofixCommitEntity'
import { CodeScanningCodeqlDatabaseEntity } from './entity/CodeScanningCodeqlDatabaseEntity'
import { CodeScanningDefaultSetupEntity } from './entity/CodeScanningDefaultSetupEntity'
import { CodeScanningOrganizationAlertItemEntity } from './entity/CodeScanningOrganizationAlertItemEntity'
import { CodeScanningSarifsStatusEntity } from './entity/CodeScanningSarifsStatusEntity'
import { CodeScanningVariantAnalysiEntity } from './entity/CodeScanningVariantAnalysiEntity'
import { CodeScanningVariantAnalysisRepoTaskEntity } from './entity/CodeScanningVariantAnalysisRepoTaskEntity'
import { CodeSecurityEntity } from './entity/CodeSecurityEntity'
import { CodeSecurityConfigurationEntity } from './entity/CodeSecurityConfigurationEntity'
import { CodeSecurityConfigurationRepositoryEntity } from './entity/CodeSecurityConfigurationRepositoryEntity'
import { CodeSecurityDefaultConfigurationEntity } from './entity/CodeSecurityDefaultConfigurationEntity'
import { CodeownersErrorEntity } from './entity/CodeownersErrorEntity'
import { CodespaceEntity } from './entity/CodespaceEntity'
import { CollaboratorEntity } from './entity/CollaboratorEntity'
import { CombinedBillingUsageEntity } from './entity/CombinedBillingUsageEntity'
import { CombinedCommitStatusEntity } from './entity/CombinedCommitStatusEntity'
import { CommitEntity } from './entity/CommitEntity'
import { CommitActivityEntity } from './entity/CommitActivityEntity'
import { CommitCommentEntity } from './entity/CommitCommentEntity'
import { CommitComparisonEntity } from './entity/CommitComparisonEntity'
import { CommunityProfileEntity } from './entity/CommunityProfileEntity'
import { ContentFileEntity } from './entity/ContentFileEntity'
import { ContentTrafficEntity } from './entity/ContentTrafficEntity'
import { ContributorEntity } from './entity/ContributorEntity'
import { CopilotEntity } from './entity/CopilotEntity'
import { CopilotOrganizationDetailEntity } from './entity/CopilotOrganizationDetailEntity'
import { CopilotUsageMetricsDayEntity } from './entity/CopilotUsageMetricsDayEntity'
import { CredentialEntity } from './entity/CredentialEntity'
import { CustomPropertyEntity } from './entity/CustomPropertyEntity'
import { CustomPropertyValueEntity } from './entity/CustomPropertyValueEntity'
import { DependabotEntity } from './entity/DependabotEntity'
import { DependabotAlertEntity } from './entity/DependabotAlertEntity'
import { DependabotAlertWithRepositoryEntity } from './entity/DependabotAlertWithRepositoryEntity'
import { DependabotPublicKeyEntity } from './entity/DependabotPublicKeyEntity'
import { DependabotRepositoryAccessDetailEntity } from './entity/DependabotRepositoryAccessDetailEntity'
import { DependabotSecretEntity } from './entity/DependabotSecretEntity'
import { DependencyGraphEntity } from './entity/DependencyGraphEntity'
import { DependencyGraphDiffEntity } from './entity/DependencyGraphDiffEntity'
import { DependencyGraphSpdxSbomEntity } from './entity/DependencyGraphSpdxSbomEntity'
import { DeployKeyEntity } from './entity/DeployKeyEntity'
import { DeploymentEntity } from './entity/DeploymentEntity'
import { DeploymentBranchPolicyEntity } from './entity/DeploymentBranchPolicyEntity'
import { DeploymentProtectionRuleEntity } from './entity/DeploymentProtectionRuleEntity'
import { DeploymentStatusEntity } from './entity/DeploymentStatusEntity'
import { DiffEntryEntity } from './entity/DiffEntryEntity'
import { EmailEntity } from './entity/EmailEntity'
import { EmojiEntity } from './entity/EmojiEntity'
import { EmptyObjectEntity } from './entity/EmptyObjectEntity'
import { EnterpriseTeamEntity } from './entity/EnterpriseTeamEntity'
import { EnterpriseTeamMembershipEntity } from './entity/EnterpriseTeamMembershipEntity'
import { EnvironmentEntity } from './entity/EnvironmentEntity'
import { EnvironmentApprovalEntity } from './entity/EnvironmentApprovalEntity'
import { EventEntity } from './entity/EventEntity'
import { FeedEntity } from './entity/FeedEntity'
import { FileCommitEntity } from './entity/FileCommitEntity'
import { FollowerEntity } from './entity/FollowerEntity'
import { FollowingEntity } from './entity/FollowingEntity'
import { FullRepositoryEntity } from './entity/FullRepositoryEntity'
import { GistEntity } from './entity/GistEntity'
import { GistCommentEntity } from './entity/GistCommentEntity'
import { GistCommitEntity } from './entity/GistCommitEntity'
import { GistSimpleEntity } from './entity/GistSimpleEntity'
import { GitEntity } from './entity/GitEntity'
import { GitCommitEntity } from './entity/GitCommitEntity'
import { GitRefEntity } from './entity/GitRefEntity'
import { GitTagEntity } from './entity/GitTagEntity'
import { GitTreeEntity } from './entity/GitTreeEntity'
import { GitignoreEntity } from './entity/GitignoreEntity'
import { GitignoreTemplateEntity } from './entity/GitignoreTemplateEntity'
import { GlobalAdvisoryEntity } from './entity/GlobalAdvisoryEntity'
import { GpgKeyEntity } from './entity/GpgKeyEntity'
import { HookEntity } from './entity/HookEntity'
import { HookDeliveryEntity } from './entity/HookDeliveryEntity'
import { HookDeliveryItemEntity } from './entity/HookDeliveryItemEntity'
import { HostedComputeEntity } from './entity/HostedComputeEntity'
import { HovercardEntity } from './entity/HovercardEntity'
import { ImportEntity } from './entity/ImportEntity'
import { InstallationEntity } from './entity/InstallationEntity'
import { InstallationTokenEntity } from './entity/InstallationTokenEntity'
import { IntegrationEntity } from './entity/IntegrationEntity'
import { IntegrationInstallationEntity } from './entity/IntegrationInstallationEntity'
import { InteractionEntity } from './entity/InteractionEntity'
import { InteractionLimitEntity } from './entity/InteractionLimitEntity'
import { IssueEntity } from './entity/IssueEntity'
import { IssueTypeEntity } from './entity/IssueTypeEntity'
import { JobEntity } from './entity/JobEntity'
import { KeyEntity } from './entity/KeyEntity'
import { LabelEntity } from './entity/LabelEntity'
import { LanguageEntity } from './entity/LanguageEntity'
import { LicenseEntity } from './entity/LicenseEntity'
import { MarkdownEntity } from './entity/MarkdownEntity'
import { MarketplaceListingPlanEntity } from './entity/MarketplaceListingPlanEntity'
import { MarketplacePurchaseEntity } from './entity/MarketplacePurchaseEntity'
import { MemberEntity } from './entity/MemberEntity'
import { MembershipEntity } from './entity/MembershipEntity'
import { MergedUpstreamEntity } from './entity/MergedUpstreamEntity'
import { MetaEntity } from './entity/MetaEntity'
import { MetarootEntity } from './entity/MetarootEntity'
import { MigrationEntity } from './entity/MigrationEntity'
import { MilestoneEntity } from './entity/MilestoneEntity'
import { MinimalRepositoryEntity } from './entity/MinimalRepositoryEntity'
import { NetworkConfigurationEntity } from './entity/NetworkConfigurationEntity'
import { NetworkSettingEntity } from './entity/NetworkSettingEntity'
import { OidcCustomSubEntity } from './entity/OidcCustomSubEntity'
import { OidcCustomSubRepoEntity } from './entity/OidcCustomSubRepoEntity'
import { OrgEntity } from './entity/OrgEntity'
import { OrgHookEntity } from './entity/OrgHookEntity'
import { OrgMembershipEntity } from './entity/OrgMembershipEntity'
import { OrgPrivateRegistryConfigurationEntity } from './entity/OrgPrivateRegistryConfigurationEntity'
import { OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity } from './entity/OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity'
import { OrgRepoCustomPropertyValueEntity } from './entity/OrgRepoCustomPropertyValueEntity'
import { OrganizationEntity } from './entity/OrganizationEntity'
import { OrganizationActionsSecretEntity } from './entity/OrganizationActionsSecretEntity'
import { OrganizationActionsVariableEntity } from './entity/OrganizationActionsVariableEntity'
import { OrganizationDependabotSecretEntity } from './entity/OrganizationDependabotSecretEntity'
import { OrganizationInvitationEntity } from './entity/OrganizationInvitationEntity'
import { OrganizationProgrammaticAccessGrantEntity } from './entity/OrganizationProgrammaticAccessGrantEntity'
import { OrganizationRoleEntity } from './entity/OrganizationRoleEntity'
import { OrganizationSecretScanningAlertEntity } from './entity/OrganizationSecretScanningAlertEntity'
import { OutsideCollaboratorEntity } from './entity/OutsideCollaboratorEntity'
import { PackageEntity } from './entity/PackageEntity'
import { PageEntity } from './entity/PageEntity'
import { PageBuildEntity } from './entity/PageBuildEntity'
import { PageBuildStatusEntity } from './entity/PageBuildStatusEntity'
import { PageDeploymentEntity } from './entity/PageDeploymentEntity'
import { PagesDeploymentStatusEntity } from './entity/PagesDeploymentStatusEntity'
import { PagesHealthCheckEntity } from './entity/PagesHealthCheckEntity'
import { ParticipationEntity } from './entity/ParticipationEntity'
import { PendingDeploymentEntity } from './entity/PendingDeploymentEntity'
import { PorterAuthorEntity } from './entity/PorterAuthorEntity'
import { PorterLargeFileEntity } from './entity/PorterLargeFileEntity'
import { PrivateRegistryEntity } from './entity/PrivateRegistryEntity'
import { PrivateUserEntity } from './entity/PrivateUserEntity'
import { ProjectEntity } from './entity/ProjectEntity'
import { ProjectCollaboratorPermissionEntity } from './entity/ProjectCollaboratorPermissionEntity'
import { ProjectColumnEntity } from './entity/ProjectColumnEntity'
import { ProjectsClassicEntity } from './entity/ProjectsClassicEntity'
import { ProjectsV2Entity } from './entity/ProjectsV2Entity'
import { ProjectsV2FieldEntity } from './entity/ProjectsV2FieldEntity'
import { ProjectsV2ItemSimpleEntity } from './entity/ProjectsV2ItemSimpleEntity'
import { ProjectsV2ItemWithContentEntity } from './entity/ProjectsV2ItemWithContentEntity'
import { ProtectedBranchEntity } from './entity/ProtectedBranchEntity'
import { ProtectedBranchAdminEnforcedEntity } from './entity/ProtectedBranchAdminEnforcedEntity'
import { ProtectedBranchPullRequestReviewEntity } from './entity/ProtectedBranchPullRequestReviewEntity'
import { PublicMemberEntity } from './entity/PublicMemberEntity'
import { PullEntity } from './entity/PullEntity'
import { PullRequestReviewEntity } from './entity/PullRequestReviewEntity'
import { PullRequestReviewCommentEntity } from './entity/PullRequestReviewCommentEntity'
import { PullRequestSimpleEntity } from './entity/PullRequestSimpleEntity'
import { RateLimitEntity } from './entity/RateLimitEntity'
import { ReactionEntity } from './entity/ReactionEntity'
import { ReferrerEntity } from './entity/ReferrerEntity'
import { ReleaseEntity } from './entity/ReleaseEntity'
import { ReleaseAssetEntity } from './entity/ReleaseAssetEntity'
import { ReleaseNotesContentEntity } from './entity/ReleaseNotesContentEntity'
import { RemoveEntity } from './entity/RemoveEntity'
import { RepoEntity } from './entity/RepoEntity'
import { RepositoryEntity } from './entity/RepositoryEntity'
import { RepositoryAdvisoryEntity } from './entity/RepositoryAdvisoryEntity'
import { RepositoryCollaboratorPermissionEntity } from './entity/RepositoryCollaboratorPermissionEntity'
import { RepositoryInvitationEntity } from './entity/RepositoryInvitationEntity'
import { RepositoryRuleDetailedEntity } from './entity/RepositoryRuleDetailedEntity'
import { RepositoryRulesetEntity } from './entity/RepositoryRulesetEntity'
import { RepositorySubscriptionEntity } from './entity/RepositorySubscriptionEntity'
import { ReviewCommentEntity } from './entity/ReviewCommentEntity'
import { RuleSuiteEntity } from './entity/RuleSuiteEntity'
import { RulesetVersionEntity } from './entity/RulesetVersionEntity'
import { RulesetVersionWithStateEntity } from './entity/RulesetVersionWithStateEntity'
import { RunnerEntity } from './entity/RunnerEntity'
import { RunnerApplicationEntity } from './entity/RunnerApplicationEntity'
import { RunnerGroupEntity } from './entity/RunnerGroupEntity'
import { SearchEntity } from './entity/SearchEntity'
import { SecretScanningEntity } from './entity/SecretScanningEntity'
import { SecretScanningAlertEntity } from './entity/SecretScanningAlertEntity'
import { SecretScanningLocationEntity } from './entity/SecretScanningLocationEntity'
import { SecretScanningPatternConfigurationEntity } from './entity/SecretScanningPatternConfigurationEntity'
import { SecretScanningPushProtectionBypassEntity } from './entity/SecretScanningPushProtectionBypassEntity'
import { SecretScanningScanHistoryEntity } from './entity/SecretScanningScanHistoryEntity'
import { SecurityAdvisoryEntity } from './entity/SecurityAdvisoryEntity'
import { SelectedActionEntity } from './entity/SelectedActionEntity'
import { SelfHostedRunnerEntity } from './entity/SelfHostedRunnerEntity'
import { ShortBlobEntity } from './entity/ShortBlobEntity'
import { ShortBranchEntity } from './entity/ShortBranchEntity'
import { SimpleClassroomEntity } from './entity/SimpleClassroomEntity'
import { SimpleClassroomAssignmentEntity } from './entity/SimpleClassroomAssignmentEntity'
import { SocialAccountEntity } from './entity/SocialAccountEntity'
import { SshSigningKeyEntity } from './entity/SshSigningKeyEntity'
import { StatusEntity } from './entity/StatusEntity'
import { StatusCheckPolicyEntity } from './entity/StatusCheckPolicyEntity'
import { SubscriberEntity } from './entity/SubscriberEntity'
import { TagEntity } from './entity/TagEntity'
import { TagProtectionEntity } from './entity/TagProtectionEntity'
import { TeamEntity } from './entity/TeamEntity'
import { TeamSimpleEntity } from './entity/TeamSimpleEntity'
import { ThreadEntity } from './entity/ThreadEntity'
import { ThreadSubscriptionEntity } from './entity/ThreadSubscriptionEntity'
import { TopicEntity } from './entity/TopicEntity'
import { UserEntity } from './entity/UserEntity'
import { UserMarketplacePurchaseEntity } from './entity/UserMarketplacePurchaseEntity'
import { ViewEntity } from './entity/ViewEntity'
import { WebhookConfigEntity } from './entity/WebhookConfigEntity'
import { WorkflowEntity } from './entity/WorkflowEntity'
import { WorkflowRunEntity } from './entity/WorkflowRunEntity'
import { WorkflowRunUsageEntity } from './entity/WorkflowRunUsageEntity'
import { WorkflowUsageEntity } from './entity/WorkflowUsageEntity'

export type * from './GithubTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { GithubEntityBase } from './GithubEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class GithubSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

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
          extend.some((f: any) => fname === f.name)) {
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

  


  async prepare(fetchargs?: any) {
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

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
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
  async direct(fetchargs?: any) {
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
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
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

      let json: any = undefined
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
    catch (err: any) {
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
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('GithubSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
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
      const err: any = new Error('GithubSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Action(entopts?: Record<string, any>) {
    const self = this
    return new ActionEntity(self, entopts)
  }


  // Entity access: `client.ActionsArtifactAndLogRetention().list()` / `client.ActionsArtifactAndLogRetention().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsArtifactAndLogRetention(entopts?: Record<string, any>) {
    const self = this
    return new ActionsArtifactAndLogRetentionEntity(self, entopts)
  }


  // Entity access: `client.ActionsCacheList().list()` / `client.ActionsCacheList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsCacheList(entopts?: Record<string, any>) {
    const self = this
    return new ActionsCacheListEntity(self, entopts)
  }


  // Entity access: `client.ActionsCacheUsageByRepository().list()` / `client.ActionsCacheUsageByRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsCacheUsageByRepository(entopts?: Record<string, any>) {
    const self = this
    return new ActionsCacheUsageByRepositoryEntity(self, entopts)
  }


  // Entity access: `client.ActionsCacheUsageOrgEnterprise().list()` / `client.ActionsCacheUsageOrgEnterprise().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsCacheUsageOrgEnterprise(entopts?: Record<string, any>) {
    const self = this
    return new ActionsCacheUsageOrgEnterpriseEntity(self, entopts)
  }


  // Entity access: `client.ActionsForkPrContributorApproval().list()` / `client.ActionsForkPrContributorApproval().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsForkPrContributorApproval(entopts?: Record<string, any>) {
    const self = this
    return new ActionsForkPrContributorApprovalEntity(self, entopts)
  }


  // Entity access: `client.ActionsForkPrWorkflowsPrivateRepo().list()` / `client.ActionsForkPrWorkflowsPrivateRepo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsForkPrWorkflowsPrivateRepo(entopts?: Record<string, any>) {
    const self = this
    return new ActionsForkPrWorkflowsPrivateRepoEntity(self, entopts)
  }


  // Entity access: `client.ActionsGetDefaultWorkflowPermission().list()` / `client.ActionsGetDefaultWorkflowPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsGetDefaultWorkflowPermission(entopts?: Record<string, any>) {
    const self = this
    return new ActionsGetDefaultWorkflowPermissionEntity(self, entopts)
  }


  // Entity access: `client.ActionsHostedRunner().list()` / `client.ActionsHostedRunner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsHostedRunner(entopts?: Record<string, any>) {
    const self = this
    return new ActionsHostedRunnerEntity(self, entopts)
  }


  // Entity access: `client.ActionsHostedRunnerLimit().list()` / `client.ActionsHostedRunnerLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsHostedRunnerLimit(entopts?: Record<string, any>) {
    const self = this
    return new ActionsHostedRunnerLimitEntity(self, entopts)
  }


  // Entity access: `client.ActionsOrganizationPermission().list()` / `client.ActionsOrganizationPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsOrganizationPermission(entopts?: Record<string, any>) {
    const self = this
    return new ActionsOrganizationPermissionEntity(self, entopts)
  }


  // Entity access: `client.ActionsPublicKey().list()` / `client.ActionsPublicKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsPublicKey(entopts?: Record<string, any>) {
    const self = this
    return new ActionsPublicKeyEntity(self, entopts)
  }


  // Entity access: `client.ActionsRepositoryPermission().list()` / `client.ActionsRepositoryPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsRepositoryPermission(entopts?: Record<string, any>) {
    const self = this
    return new ActionsRepositoryPermissionEntity(self, entopts)
  }


  // Entity access: `client.ActionsSecret().list()` / `client.ActionsSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsSecret(entopts?: Record<string, any>) {
    const self = this
    return new ActionsSecretEntity(self, entopts)
  }


  // Entity access: `client.ActionsVariable().list()` / `client.ActionsVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsVariable(entopts?: Record<string, any>) {
    const self = this
    return new ActionsVariableEntity(self, entopts)
  }


  // Entity access: `client.ActionsWorkflowAccessToRepository().list()` / `client.ActionsWorkflowAccessToRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionsWorkflowAccessToRepository(entopts?: Record<string, any>) {
    const self = this
    return new ActionsWorkflowAccessToRepositoryEntity(self, entopts)
  }


  // Entity access: `client.Activity().list()` / `client.Activity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Activity(entopts?: Record<string, any>) {
    const self = this
    return new ActivityEntity(self, entopts)
  }


  // Entity access: `client.Add().list()` / `client.Add().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Add(entopts?: Record<string, any>) {
    const self = this
    return new AddEntity(self, entopts)
  }


  // Entity access: `client.ApiInsightsRouteStat().list()` / `client.ApiInsightsRouteStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiInsightsRouteStat(entopts?: Record<string, any>) {
    const self = this
    return new ApiInsightsRouteStatEntity(self, entopts)
  }


  // Entity access: `client.ApiInsightsSubjectStat().list()` / `client.ApiInsightsSubjectStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiInsightsSubjectStat(entopts?: Record<string, any>) {
    const self = this
    return new ApiInsightsSubjectStatEntity(self, entopts)
  }


  // Entity access: `client.ApiInsightsSummaryStat().list()` / `client.ApiInsightsSummaryStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiInsightsSummaryStat(entopts?: Record<string, any>) {
    const self = this
    return new ApiInsightsSummaryStatEntity(self, entopts)
  }


  // Entity access: `client.ApiInsightsTimeStat().list()` / `client.ApiInsightsTimeStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiInsightsTimeStat(entopts?: Record<string, any>) {
    const self = this
    return new ApiInsightsTimeStatEntity(self, entopts)
  }


  // Entity access: `client.ApiInsightsUserStat().list()` / `client.ApiInsightsUserStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiInsightsUserStat(entopts?: Record<string, any>) {
    const self = this
    return new ApiInsightsUserStatEntity(self, entopts)
  }


  // Entity access: `client.ApiOverview().list()` / `client.ApiOverview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiOverview(entopts?: Record<string, any>) {
    const self = this
    return new ApiOverviewEntity(self, entopts)
  }


  // Entity access: `client.App().list()` / `client.App().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  App(entopts?: Record<string, any>) {
    const self = this
    return new AppEntity(self, entopts)
  }


  // Entity access: `client.Artifact().list()` / `client.Artifact().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Artifact(entopts?: Record<string, any>) {
    const self = this
    return new ArtifactEntity(self, entopts)
  }


  // Entity access: `client.Assignee().list()` / `client.Assignee().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Assignee(entopts?: Record<string, any>) {
    const self = this
    return new AssigneeEntity(self, entopts)
  }


  // Entity access: `client.AuthenticationToken().list()` / `client.AuthenticationToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AuthenticationToken(entopts?: Record<string, any>) {
    const self = this
    return new AuthenticationTokenEntity(self, entopts)
  }


  // Entity access: `client.Authorization().list()` / `client.Authorization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Authorization(entopts?: Record<string, any>) {
    const self = this
    return new AuthorizationEntity(self, entopts)
  }


  // Entity access: `client.Autolink().list()` / `client.Autolink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Autolink(entopts?: Record<string, any>) {
    const self = this
    return new AutolinkEntity(self, entopts)
  }


  // Entity access: `client.BaseGist().list()` / `client.BaseGist().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BaseGist(entopts?: Record<string, any>) {
    const self = this
    return new BaseGistEntity(self, entopts)
  }


  // Entity access: `client.BillingUsageReport().list()` / `client.BillingUsageReport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillingUsageReport(entopts?: Record<string, any>) {
    const self = this
    return new BillingUsageReportEntity(self, entopts)
  }


  // Entity access: `client.BillingUsageReportUser().list()` / `client.BillingUsageReportUser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillingUsageReportUser(entopts?: Record<string, any>) {
    const self = this
    return new BillingUsageReportUserEntity(self, entopts)
  }


  // Entity access: `client.Blob().list()` / `client.Blob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Blob(entopts?: Record<string, any>) {
    const self = this
    return new BlobEntity(self, entopts)
  }


  // Entity access: `client.Block().list()` / `client.Block().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Block(entopts?: Record<string, any>) {
    const self = this
    return new BlockEntity(self, entopts)
  }


  // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Branch(entopts?: Record<string, any>) {
    const self = this
    return new BranchEntity(self, entopts)
  }


  // Entity access: `client.BranchProtection().list()` / `client.BranchProtection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchProtection(entopts?: Record<string, any>) {
    const self = this
    return new BranchProtectionEntity(self, entopts)
  }


  // Entity access: `client.BranchRestrictionPolicy().list()` / `client.BranchRestrictionPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchRestrictionPolicy(entopts?: Record<string, any>) {
    const self = this
    return new BranchRestrictionPolicyEntity(self, entopts)
  }


  // Entity access: `client.BranchShort().list()` / `client.BranchShort().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchShort(entopts?: Record<string, any>) {
    const self = this
    return new BranchShortEntity(self, entopts)
  }


  // Entity access: `client.BranchWithProtection().list()` / `client.BranchWithProtection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchWithProtection(entopts?: Record<string, any>) {
    const self = this
    return new BranchWithProtectionEntity(self, entopts)
  }


  // Entity access: `client.Campaign().list()` / `client.Campaign().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Campaign(entopts?: Record<string, any>) {
    const self = this
    return new CampaignEntity(self, entopts)
  }


  // Entity access: `client.Check().list()` / `client.Check().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Check(entopts?: Record<string, any>) {
    const self = this
    return new CheckEntity(self, entopts)
  }


  // Entity access: `client.CheckAnnotation().list()` / `client.CheckAnnotation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckAnnotation(entopts?: Record<string, any>) {
    const self = this
    return new CheckAnnotationEntity(self, entopts)
  }


  // Entity access: `client.CheckAutomatedSecurityFix().list()` / `client.CheckAutomatedSecurityFix().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckAutomatedSecurityFix(entopts?: Record<string, any>) {
    const self = this
    return new CheckAutomatedSecurityFixEntity(self, entopts)
  }


  // Entity access: `client.CheckRun().list()` / `client.CheckRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckRun(entopts?: Record<string, any>) {
    const self = this
    return new CheckRunEntity(self, entopts)
  }


  // Entity access: `client.CheckSuite().list()` / `client.CheckSuite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckSuite(entopts?: Record<string, any>) {
    const self = this
    return new CheckSuiteEntity(self, entopts)
  }


  // Entity access: `client.CheckSuitePreference().list()` / `client.CheckSuitePreference().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckSuitePreference(entopts?: Record<string, any>) {
    const self = this
    return new CheckSuitePreferenceEntity(self, entopts)
  }


  // Entity access: `client.Classroom().list()` / `client.Classroom().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Classroom(entopts?: Record<string, any>) {
    const self = this
    return new ClassroomEntity(self, entopts)
  }


  // Entity access: `client.ClassroomAcceptedAssignment().list()` / `client.ClassroomAcceptedAssignment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClassroomAcceptedAssignment(entopts?: Record<string, any>) {
    const self = this
    return new ClassroomAcceptedAssignmentEntity(self, entopts)
  }


  // Entity access: `client.ClassroomAssignment().list()` / `client.ClassroomAssignment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClassroomAssignment(entopts?: Record<string, any>) {
    const self = this
    return new ClassroomAssignmentEntity(self, entopts)
  }


  // Entity access: `client.ClassroomAssignmentGrade().list()` / `client.ClassroomAssignmentGrade().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClassroomAssignmentGrade(entopts?: Record<string, any>) {
    const self = this
    return new ClassroomAssignmentGradeEntity(self, entopts)
  }


  // Entity access: `client.Clone().list()` / `client.Clone().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Clone(entopts?: Record<string, any>) {
    const self = this
    return new CloneEntity(self, entopts)
  }


  // Entity access: `client.CodeFrequency().list()` / `client.CodeFrequency().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeFrequency(entopts?: Record<string, any>) {
    const self = this
    return new CodeFrequencyEntity(self, entopts)
  }


  // Entity access: `client.CodeFrequencyStat().list()` / `client.CodeFrequencyStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeFrequencyStat(entopts?: Record<string, any>) {
    const self = this
    return new CodeFrequencyStatEntity(self, entopts)
  }


  // Entity access: `client.CodeOfConduct().list()` / `client.CodeOfConduct().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeOfConduct(entopts?: Record<string, any>) {
    const self = this
    return new CodeOfConductEntity(self, entopts)
  }


  // Entity access: `client.CodeScanning().list()` / `client.CodeScanning().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanning(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAlert().list()` / `client.CodeScanningAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAlert(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningAlertEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAlertInstance().list()` / `client.CodeScanningAlertInstance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAlertInstance(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningAlertInstanceEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAlertItem().list()` / `client.CodeScanningAlertItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAlertItem(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningAlertItemEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAnalysi().list()` / `client.CodeScanningAnalysi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAnalysi(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningAnalysiEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAnalysisDeletion().list()` / `client.CodeScanningAnalysisDeletion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAnalysisDeletion(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningAnalysisDeletionEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAutofix().list()` / `client.CodeScanningAutofix().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAutofix(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningAutofixEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningAutofixCommit().list()` / `client.CodeScanningAutofixCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningAutofixCommit(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningAutofixCommitEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningCodeqlDatabase().list()` / `client.CodeScanningCodeqlDatabase().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningCodeqlDatabase(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningCodeqlDatabaseEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningDefaultSetup().list()` / `client.CodeScanningDefaultSetup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningDefaultSetup(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningDefaultSetupEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningOrganizationAlertItem().list()` / `client.CodeScanningOrganizationAlertItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningOrganizationAlertItem(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningOrganizationAlertItemEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningSarifsStatus().list()` / `client.CodeScanningSarifsStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningSarifsStatus(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningSarifsStatusEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningVariantAnalysi().list()` / `client.CodeScanningVariantAnalysi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningVariantAnalysi(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningVariantAnalysiEntity(self, entopts)
  }


  // Entity access: `client.CodeScanningVariantAnalysisRepoTask().list()` / `client.CodeScanningVariantAnalysisRepoTask().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeScanningVariantAnalysisRepoTask(entopts?: Record<string, any>) {
    const self = this
    return new CodeScanningVariantAnalysisRepoTaskEntity(self, entopts)
  }


  // Entity access: `client.CodeSecurity().list()` / `client.CodeSecurity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeSecurity(entopts?: Record<string, any>) {
    const self = this
    return new CodeSecurityEntity(self, entopts)
  }


  // Entity access: `client.CodeSecurityConfiguration().list()` / `client.CodeSecurityConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeSecurityConfiguration(entopts?: Record<string, any>) {
    const self = this
    return new CodeSecurityConfigurationEntity(self, entopts)
  }


  // Entity access: `client.CodeSecurityConfigurationRepository().list()` / `client.CodeSecurityConfigurationRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeSecurityConfigurationRepository(entopts?: Record<string, any>) {
    const self = this
    return new CodeSecurityConfigurationRepositoryEntity(self, entopts)
  }


  // Entity access: `client.CodeSecurityDefaultConfiguration().list()` / `client.CodeSecurityDefaultConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeSecurityDefaultConfiguration(entopts?: Record<string, any>) {
    const self = this
    return new CodeSecurityDefaultConfigurationEntity(self, entopts)
  }


  // Entity access: `client.CodeownersError().list()` / `client.CodeownersError().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CodeownersError(entopts?: Record<string, any>) {
    const self = this
    return new CodeownersErrorEntity(self, entopts)
  }


  // Entity access: `client.Codespace().list()` / `client.Codespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Codespace(entopts?: Record<string, any>) {
    const self = this
    return new CodespaceEntity(self, entopts)
  }


  // Entity access: `client.Collaborator().list()` / `client.Collaborator().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Collaborator(entopts?: Record<string, any>) {
    const self = this
    return new CollaboratorEntity(self, entopts)
  }


  // Entity access: `client.CombinedBillingUsage().list()` / `client.CombinedBillingUsage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CombinedBillingUsage(entopts?: Record<string, any>) {
    const self = this
    return new CombinedBillingUsageEntity(self, entopts)
  }


  // Entity access: `client.CombinedCommitStatus().list()` / `client.CombinedCommitStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CombinedCommitStatus(entopts?: Record<string, any>) {
    const self = this
    return new CombinedCommitStatusEntity(self, entopts)
  }


  // Entity access: `client.Commit().list()` / `client.Commit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Commit(entopts?: Record<string, any>) {
    const self = this
    return new CommitEntity(self, entopts)
  }


  // Entity access: `client.CommitActivity().list()` / `client.CommitActivity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CommitActivity(entopts?: Record<string, any>) {
    const self = this
    return new CommitActivityEntity(self, entopts)
  }


  // Entity access: `client.CommitComment().list()` / `client.CommitComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CommitComment(entopts?: Record<string, any>) {
    const self = this
    return new CommitCommentEntity(self, entopts)
  }


  // Entity access: `client.CommitComparison().list()` / `client.CommitComparison().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CommitComparison(entopts?: Record<string, any>) {
    const self = this
    return new CommitComparisonEntity(self, entopts)
  }


  // Entity access: `client.CommunityProfile().list()` / `client.CommunityProfile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CommunityProfile(entopts?: Record<string, any>) {
    const self = this
    return new CommunityProfileEntity(self, entopts)
  }


  // Entity access: `client.ContentFile().list()` / `client.ContentFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContentFile(entopts?: Record<string, any>) {
    const self = this
    return new ContentFileEntity(self, entopts)
  }


  // Entity access: `client.ContentTraffic().list()` / `client.ContentTraffic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContentTraffic(entopts?: Record<string, any>) {
    const self = this
    return new ContentTrafficEntity(self, entopts)
  }


  // Entity access: `client.Contributor().list()` / `client.Contributor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Contributor(entopts?: Record<string, any>) {
    const self = this
    return new ContributorEntity(self, entopts)
  }


  // Entity access: `client.Copilot().list()` / `client.Copilot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Copilot(entopts?: Record<string, any>) {
    const self = this
    return new CopilotEntity(self, entopts)
  }


  // Entity access: `client.CopilotOrganizationDetail().list()` / `client.CopilotOrganizationDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CopilotOrganizationDetail(entopts?: Record<string, any>) {
    const self = this
    return new CopilotOrganizationDetailEntity(self, entopts)
  }


  // Entity access: `client.CopilotUsageMetricsDay().list()` / `client.CopilotUsageMetricsDay().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CopilotUsageMetricsDay(entopts?: Record<string, any>) {
    const self = this
    return new CopilotUsageMetricsDayEntity(self, entopts)
  }


  // Entity access: `client.Credential().list()` / `client.Credential().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Credential(entopts?: Record<string, any>) {
    const self = this
    return new CredentialEntity(self, entopts)
  }


  // Entity access: `client.CustomProperty().list()` / `client.CustomProperty().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomProperty(entopts?: Record<string, any>) {
    const self = this
    return new CustomPropertyEntity(self, entopts)
  }


  // Entity access: `client.CustomPropertyValue().list()` / `client.CustomPropertyValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomPropertyValue(entopts?: Record<string, any>) {
    const self = this
    return new CustomPropertyValueEntity(self, entopts)
  }


  // Entity access: `client.Dependabot().list()` / `client.Dependabot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dependabot(entopts?: Record<string, any>) {
    const self = this
    return new DependabotEntity(self, entopts)
  }


  // Entity access: `client.DependabotAlert().list()` / `client.DependabotAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependabotAlert(entopts?: Record<string, any>) {
    const self = this
    return new DependabotAlertEntity(self, entopts)
  }


  // Entity access: `client.DependabotAlertWithRepository().list()` / `client.DependabotAlertWithRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependabotAlertWithRepository(entopts?: Record<string, any>) {
    const self = this
    return new DependabotAlertWithRepositoryEntity(self, entopts)
  }


  // Entity access: `client.DependabotPublicKey().list()` / `client.DependabotPublicKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependabotPublicKey(entopts?: Record<string, any>) {
    const self = this
    return new DependabotPublicKeyEntity(self, entopts)
  }


  // Entity access: `client.DependabotRepositoryAccessDetail().list()` / `client.DependabotRepositoryAccessDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependabotRepositoryAccessDetail(entopts?: Record<string, any>) {
    const self = this
    return new DependabotRepositoryAccessDetailEntity(self, entopts)
  }


  // Entity access: `client.DependabotSecret().list()` / `client.DependabotSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependabotSecret(entopts?: Record<string, any>) {
    const self = this
    return new DependabotSecretEntity(self, entopts)
  }


  // Entity access: `client.DependencyGraph().list()` / `client.DependencyGraph().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependencyGraph(entopts?: Record<string, any>) {
    const self = this
    return new DependencyGraphEntity(self, entopts)
  }


  // Entity access: `client.DependencyGraphDiff().list()` / `client.DependencyGraphDiff().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependencyGraphDiff(entopts?: Record<string, any>) {
    const self = this
    return new DependencyGraphDiffEntity(self, entopts)
  }


  // Entity access: `client.DependencyGraphSpdxSbom().list()` / `client.DependencyGraphSpdxSbom().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependencyGraphSpdxSbom(entopts?: Record<string, any>) {
    const self = this
    return new DependencyGraphSpdxSbomEntity(self, entopts)
  }


  // Entity access: `client.DeployKey().list()` / `client.DeployKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeployKey(entopts?: Record<string, any>) {
    const self = this
    return new DeployKeyEntity(self, entopts)
  }


  // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Deployment(entopts?: Record<string, any>) {
    const self = this
    return new DeploymentEntity(self, entopts)
  }


  // Entity access: `client.DeploymentBranchPolicy().list()` / `client.DeploymentBranchPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeploymentBranchPolicy(entopts?: Record<string, any>) {
    const self = this
    return new DeploymentBranchPolicyEntity(self, entopts)
  }


  // Entity access: `client.DeploymentProtectionRule().list()` / `client.DeploymentProtectionRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeploymentProtectionRule(entopts?: Record<string, any>) {
    const self = this
    return new DeploymentProtectionRuleEntity(self, entopts)
  }


  // Entity access: `client.DeploymentStatus().list()` / `client.DeploymentStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeploymentStatus(entopts?: Record<string, any>) {
    const self = this
    return new DeploymentStatusEntity(self, entopts)
  }


  // Entity access: `client.DiffEntry().list()` / `client.DiffEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DiffEntry(entopts?: Record<string, any>) {
    const self = this
    return new DiffEntryEntity(self, entopts)
  }


  // Entity access: `client.Email().list()` / `client.Email().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Email(entopts?: Record<string, any>) {
    const self = this
    return new EmailEntity(self, entopts)
  }


  // Entity access: `client.Emoji().list()` / `client.Emoji().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Emoji(entopts?: Record<string, any>) {
    const self = this
    return new EmojiEntity(self, entopts)
  }


  // Entity access: `client.EmptyObject().list()` / `client.EmptyObject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmptyObject(entopts?: Record<string, any>) {
    const self = this
    return new EmptyObjectEntity(self, entopts)
  }


  // Entity access: `client.EnterpriseTeam().list()` / `client.EnterpriseTeam().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnterpriseTeam(entopts?: Record<string, any>) {
    const self = this
    return new EnterpriseTeamEntity(self, entopts)
  }


  // Entity access: `client.EnterpriseTeamMembership().list()` / `client.EnterpriseTeamMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnterpriseTeamMembership(entopts?: Record<string, any>) {
    const self = this
    return new EnterpriseTeamMembershipEntity(self, entopts)
  }


  // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Environment(entopts?: Record<string, any>) {
    const self = this
    return new EnvironmentEntity(self, entopts)
  }


  // Entity access: `client.EnvironmentApproval().list()` / `client.EnvironmentApproval().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnvironmentApproval(entopts?: Record<string, any>) {
    const self = this
    return new EnvironmentApprovalEntity(self, entopts)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Event(entopts?: Record<string, any>) {
    const self = this
    return new EventEntity(self, entopts)
  }


  // Entity access: `client.Feed().list()` / `client.Feed().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Feed(entopts?: Record<string, any>) {
    const self = this
    return new FeedEntity(self, entopts)
  }


  // Entity access: `client.FileCommit().list()` / `client.FileCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FileCommit(entopts?: Record<string, any>) {
    const self = this
    return new FileCommitEntity(self, entopts)
  }


  // Entity access: `client.Follower().list()` / `client.Follower().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Follower(entopts?: Record<string, any>) {
    const self = this
    return new FollowerEntity(self, entopts)
  }


  // Entity access: `client.Following().list()` / `client.Following().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Following(entopts?: Record<string, any>) {
    const self = this
    return new FollowingEntity(self, entopts)
  }


  // Entity access: `client.FullRepository().list()` / `client.FullRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FullRepository(entopts?: Record<string, any>) {
    const self = this
    return new FullRepositoryEntity(self, entopts)
  }


  // Entity access: `client.Gist().list()` / `client.Gist().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gist(entopts?: Record<string, any>) {
    const self = this
    return new GistEntity(self, entopts)
  }


  // Entity access: `client.GistComment().list()` / `client.GistComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GistComment(entopts?: Record<string, any>) {
    const self = this
    return new GistCommentEntity(self, entopts)
  }


  // Entity access: `client.GistCommit().list()` / `client.GistCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GistCommit(entopts?: Record<string, any>) {
    const self = this
    return new GistCommitEntity(self, entopts)
  }


  // Entity access: `client.GistSimple().list()` / `client.GistSimple().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GistSimple(entopts?: Record<string, any>) {
    const self = this
    return new GistSimpleEntity(self, entopts)
  }


  // Entity access: `client.Git().list()` / `client.Git().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Git(entopts?: Record<string, any>) {
    const self = this
    return new GitEntity(self, entopts)
  }


  // Entity access: `client.GitCommit().list()` / `client.GitCommit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitCommit(entopts?: Record<string, any>) {
    const self = this
    return new GitCommitEntity(self, entopts)
  }


  // Entity access: `client.GitRef().list()` / `client.GitRef().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitRef(entopts?: Record<string, any>) {
    const self = this
    return new GitRefEntity(self, entopts)
  }


  // Entity access: `client.GitTag().list()` / `client.GitTag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitTag(entopts?: Record<string, any>) {
    const self = this
    return new GitTagEntity(self, entopts)
  }


  // Entity access: `client.GitTree().list()` / `client.GitTree().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitTree(entopts?: Record<string, any>) {
    const self = this
    return new GitTreeEntity(self, entopts)
  }


  // Entity access: `client.Gitignore().list()` / `client.Gitignore().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gitignore(entopts?: Record<string, any>) {
    const self = this
    return new GitignoreEntity(self, entopts)
  }


  // Entity access: `client.GitignoreTemplate().list()` / `client.GitignoreTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitignoreTemplate(entopts?: Record<string, any>) {
    const self = this
    return new GitignoreTemplateEntity(self, entopts)
  }


  // Entity access: `client.GlobalAdvisory().list()` / `client.GlobalAdvisory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GlobalAdvisory(entopts?: Record<string, any>) {
    const self = this
    return new GlobalAdvisoryEntity(self, entopts)
  }


  // Entity access: `client.GpgKey().list()` / `client.GpgKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GpgKey(entopts?: Record<string, any>) {
    const self = this
    return new GpgKeyEntity(self, entopts)
  }


  // Entity access: `client.Hook().list()` / `client.Hook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Hook(entopts?: Record<string, any>) {
    const self = this
    return new HookEntity(self, entopts)
  }


  // Entity access: `client.HookDelivery().list()` / `client.HookDelivery().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  HookDelivery(entopts?: Record<string, any>) {
    const self = this
    return new HookDeliveryEntity(self, entopts)
  }


  // Entity access: `client.HookDeliveryItem().list()` / `client.HookDeliveryItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  HookDeliveryItem(entopts?: Record<string, any>) {
    const self = this
    return new HookDeliveryItemEntity(self, entopts)
  }


  // Entity access: `client.HostedCompute().list()` / `client.HostedCompute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  HostedCompute(entopts?: Record<string, any>) {
    const self = this
    return new HostedComputeEntity(self, entopts)
  }


  // Entity access: `client.Hovercard().list()` / `client.Hovercard().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Hovercard(entopts?: Record<string, any>) {
    const self = this
    return new HovercardEntity(self, entopts)
  }


  // Entity access: `client.Import().list()` / `client.Import().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Import(entopts?: Record<string, any>) {
    const self = this
    return new ImportEntity(self, entopts)
  }


  // Entity access: `client.Installation().list()` / `client.Installation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Installation(entopts?: Record<string, any>) {
    const self = this
    return new InstallationEntity(self, entopts)
  }


  // Entity access: `client.InstallationToken().list()` / `client.InstallationToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InstallationToken(entopts?: Record<string, any>) {
    const self = this
    return new InstallationTokenEntity(self, entopts)
  }


  // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Integration(entopts?: Record<string, any>) {
    const self = this
    return new IntegrationEntity(self, entopts)
  }


  // Entity access: `client.IntegrationInstallation().list()` / `client.IntegrationInstallation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IntegrationInstallation(entopts?: Record<string, any>) {
    const self = this
    return new IntegrationInstallationEntity(self, entopts)
  }


  // Entity access: `client.Interaction().list()` / `client.Interaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Interaction(entopts?: Record<string, any>) {
    const self = this
    return new InteractionEntity(self, entopts)
  }


  // Entity access: `client.InteractionLimit().list()` / `client.InteractionLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InteractionLimit(entopts?: Record<string, any>) {
    const self = this
    return new InteractionLimitEntity(self, entopts)
  }


  // Entity access: `client.Issue().list()` / `client.Issue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Issue(entopts?: Record<string, any>) {
    const self = this
    return new IssueEntity(self, entopts)
  }


  // Entity access: `client.IssueType().list()` / `client.IssueType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IssueType(entopts?: Record<string, any>) {
    const self = this
    return new IssueTypeEntity(self, entopts)
  }


  // Entity access: `client.Job().list()` / `client.Job().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Job(entopts?: Record<string, any>) {
    const self = this
    return new JobEntity(self, entopts)
  }


  // Entity access: `client.Key().list()` / `client.Key().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Key(entopts?: Record<string, any>) {
    const self = this
    return new KeyEntity(self, entopts)
  }


  // Entity access: `client.Label().list()` / `client.Label().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Label(entopts?: Record<string, any>) {
    const self = this
    return new LabelEntity(self, entopts)
  }


  // Entity access: `client.Language().list()` / `client.Language().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Language(entopts?: Record<string, any>) {
    const self = this
    return new LanguageEntity(self, entopts)
  }


  // Entity access: `client.License().list()` / `client.License().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  License(entopts?: Record<string, any>) {
    const self = this
    return new LicenseEntity(self, entopts)
  }


  // Entity access: `client.Markdown().list()` / `client.Markdown().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Markdown(entopts?: Record<string, any>) {
    const self = this
    return new MarkdownEntity(self, entopts)
  }


  // Entity access: `client.MarketplaceListingPlan().list()` / `client.MarketplaceListingPlan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MarketplaceListingPlan(entopts?: Record<string, any>) {
    const self = this
    return new MarketplaceListingPlanEntity(self, entopts)
  }


  // Entity access: `client.MarketplacePurchase().list()` / `client.MarketplacePurchase().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MarketplacePurchase(entopts?: Record<string, any>) {
    const self = this
    return new MarketplacePurchaseEntity(self, entopts)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Member(entopts?: Record<string, any>) {
    const self = this
    return new MemberEntity(self, entopts)
  }


  // Entity access: `client.Membership().list()` / `client.Membership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Membership(entopts?: Record<string, any>) {
    const self = this
    return new MembershipEntity(self, entopts)
  }


  // Entity access: `client.MergedUpstream().list()` / `client.MergedUpstream().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MergedUpstream(entopts?: Record<string, any>) {
    const self = this
    return new MergedUpstreamEntity(self, entopts)
  }


  // Entity access: `client.Meta().list()` / `client.Meta().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Meta(entopts?: Record<string, any>) {
    const self = this
    return new MetaEntity(self, entopts)
  }


  // Entity access: `client.Metaroot().list()` / `client.Metaroot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Metaroot(entopts?: Record<string, any>) {
    const self = this
    return new MetarootEntity(self, entopts)
  }


  // Entity access: `client.Migration().list()` / `client.Migration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Migration(entopts?: Record<string, any>) {
    const self = this
    return new MigrationEntity(self, entopts)
  }


  // Entity access: `client.Milestone().list()` / `client.Milestone().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Milestone(entopts?: Record<string, any>) {
    const self = this
    return new MilestoneEntity(self, entopts)
  }


  // Entity access: `client.MinimalRepository().list()` / `client.MinimalRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MinimalRepository(entopts?: Record<string, any>) {
    const self = this
    return new MinimalRepositoryEntity(self, entopts)
  }


  // Entity access: `client.NetworkConfiguration().list()` / `client.NetworkConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NetworkConfiguration(entopts?: Record<string, any>) {
    const self = this
    return new NetworkConfigurationEntity(self, entopts)
  }


  // Entity access: `client.NetworkSetting().list()` / `client.NetworkSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NetworkSetting(entopts?: Record<string, any>) {
    const self = this
    return new NetworkSettingEntity(self, entopts)
  }


  // Entity access: `client.OidcCustomSub().list()` / `client.OidcCustomSub().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OidcCustomSub(entopts?: Record<string, any>) {
    const self = this
    return new OidcCustomSubEntity(self, entopts)
  }


  // Entity access: `client.OidcCustomSubRepo().list()` / `client.OidcCustomSubRepo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OidcCustomSubRepo(entopts?: Record<string, any>) {
    const self = this
    return new OidcCustomSubRepoEntity(self, entopts)
  }


  // Entity access: `client.Org().list()` / `client.Org().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Org(entopts?: Record<string, any>) {
    const self = this
    return new OrgEntity(self, entopts)
  }


  // Entity access: `client.OrgHook().list()` / `client.OrgHook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgHook(entopts?: Record<string, any>) {
    const self = this
    return new OrgHookEntity(self, entopts)
  }


  // Entity access: `client.OrgMembership().list()` / `client.OrgMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgMembership(entopts?: Record<string, any>) {
    const self = this
    return new OrgMembershipEntity(self, entopts)
  }


  // Entity access: `client.OrgPrivateRegistryConfiguration().list()` / `client.OrgPrivateRegistryConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgPrivateRegistryConfiguration(entopts?: Record<string, any>) {
    const self = this
    return new OrgPrivateRegistryConfigurationEntity(self, entopts)
  }


  // Entity access: `client.OrgPrivateRegistryConfigurationWithSelectedRepository().list()` / `client.OrgPrivateRegistryConfigurationWithSelectedRepository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgPrivateRegistryConfigurationWithSelectedRepository(entopts?: Record<string, any>) {
    const self = this
    return new OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity(self, entopts)
  }


  // Entity access: `client.OrgRepoCustomPropertyValue().list()` / `client.OrgRepoCustomPropertyValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgRepoCustomPropertyValue(entopts?: Record<string, any>) {
    const self = this
    return new OrgRepoCustomPropertyValueEntity(self, entopts)
  }


  // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Organization(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationEntity(self, entopts)
  }


  // Entity access: `client.OrganizationActionsSecret().list()` / `client.OrganizationActionsSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationActionsSecret(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationActionsSecretEntity(self, entopts)
  }


  // Entity access: `client.OrganizationActionsVariable().list()` / `client.OrganizationActionsVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationActionsVariable(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationActionsVariableEntity(self, entopts)
  }


  // Entity access: `client.OrganizationDependabotSecret().list()` / `client.OrganizationDependabotSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationDependabotSecret(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationDependabotSecretEntity(self, entopts)
  }


  // Entity access: `client.OrganizationInvitation().list()` / `client.OrganizationInvitation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationInvitation(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationInvitationEntity(self, entopts)
  }


  // Entity access: `client.OrganizationProgrammaticAccessGrant().list()` / `client.OrganizationProgrammaticAccessGrant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationProgrammaticAccessGrant(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationProgrammaticAccessGrantEntity(self, entopts)
  }


  // Entity access: `client.OrganizationRole().list()` / `client.OrganizationRole().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationRole(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationRoleEntity(self, entopts)
  }


  // Entity access: `client.OrganizationSecretScanningAlert().list()` / `client.OrganizationSecretScanningAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationSecretScanningAlert(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationSecretScanningAlertEntity(self, entopts)
  }


  // Entity access: `client.OutsideCollaborator().list()` / `client.OutsideCollaborator().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OutsideCollaborator(entopts?: Record<string, any>) {
    const self = this
    return new OutsideCollaboratorEntity(self, entopts)
  }


  // Entity access: `client.Package().list()` / `client.Package().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Package(entopts?: Record<string, any>) {
    const self = this
    return new PackageEntity(self, entopts)
  }


  // Entity access: `client.Page().list()` / `client.Page().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Page(entopts?: Record<string, any>) {
    const self = this
    return new PageEntity(self, entopts)
  }


  // Entity access: `client.PageBuild().list()` / `client.PageBuild().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PageBuild(entopts?: Record<string, any>) {
    const self = this
    return new PageBuildEntity(self, entopts)
  }


  // Entity access: `client.PageBuildStatus().list()` / `client.PageBuildStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PageBuildStatus(entopts?: Record<string, any>) {
    const self = this
    return new PageBuildStatusEntity(self, entopts)
  }


  // Entity access: `client.PageDeployment().list()` / `client.PageDeployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PageDeployment(entopts?: Record<string, any>) {
    const self = this
    return new PageDeploymentEntity(self, entopts)
  }


  // Entity access: `client.PagesDeploymentStatus().list()` / `client.PagesDeploymentStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PagesDeploymentStatus(entopts?: Record<string, any>) {
    const self = this
    return new PagesDeploymentStatusEntity(self, entopts)
  }


  // Entity access: `client.PagesHealthCheck().list()` / `client.PagesHealthCheck().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PagesHealthCheck(entopts?: Record<string, any>) {
    const self = this
    return new PagesHealthCheckEntity(self, entopts)
  }


  // Entity access: `client.Participation().list()` / `client.Participation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Participation(entopts?: Record<string, any>) {
    const self = this
    return new ParticipationEntity(self, entopts)
  }


  // Entity access: `client.PendingDeployment().list()` / `client.PendingDeployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PendingDeployment(entopts?: Record<string, any>) {
    const self = this
    return new PendingDeploymentEntity(self, entopts)
  }


  // Entity access: `client.PorterAuthor().list()` / `client.PorterAuthor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PorterAuthor(entopts?: Record<string, any>) {
    const self = this
    return new PorterAuthorEntity(self, entopts)
  }


  // Entity access: `client.PorterLargeFile().list()` / `client.PorterLargeFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PorterLargeFile(entopts?: Record<string, any>) {
    const self = this
    return new PorterLargeFileEntity(self, entopts)
  }


  // Entity access: `client.PrivateRegistry().list()` / `client.PrivateRegistry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PrivateRegistry(entopts?: Record<string, any>) {
    const self = this
    return new PrivateRegistryEntity(self, entopts)
  }


  // Entity access: `client.PrivateUser().list()` / `client.PrivateUser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PrivateUser(entopts?: Record<string, any>) {
    const self = this
    return new PrivateUserEntity(self, entopts)
  }


  // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Project(entopts?: Record<string, any>) {
    const self = this
    return new ProjectEntity(self, entopts)
  }


  // Entity access: `client.ProjectCollaboratorPermission().list()` / `client.ProjectCollaboratorPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectCollaboratorPermission(entopts?: Record<string, any>) {
    const self = this
    return new ProjectCollaboratorPermissionEntity(self, entopts)
  }


  // Entity access: `client.ProjectColumn().list()` / `client.ProjectColumn().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectColumn(entopts?: Record<string, any>) {
    const self = this
    return new ProjectColumnEntity(self, entopts)
  }


  // Entity access: `client.ProjectsClassic().list()` / `client.ProjectsClassic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsClassic(entopts?: Record<string, any>) {
    const self = this
    return new ProjectsClassicEntity(self, entopts)
  }


  // Entity access: `client.ProjectsV2().list()` / `client.ProjectsV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsV2(entopts?: Record<string, any>) {
    const self = this
    return new ProjectsV2Entity(self, entopts)
  }


  // Entity access: `client.ProjectsV2Field().list()` / `client.ProjectsV2Field().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsV2Field(entopts?: Record<string, any>) {
    const self = this
    return new ProjectsV2FieldEntity(self, entopts)
  }


  // Entity access: `client.ProjectsV2ItemSimple().list()` / `client.ProjectsV2ItemSimple().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsV2ItemSimple(entopts?: Record<string, any>) {
    const self = this
    return new ProjectsV2ItemSimpleEntity(self, entopts)
  }


  // Entity access: `client.ProjectsV2ItemWithContent().list()` / `client.ProjectsV2ItemWithContent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectsV2ItemWithContent(entopts?: Record<string, any>) {
    const self = this
    return new ProjectsV2ItemWithContentEntity(self, entopts)
  }


  // Entity access: `client.ProtectedBranch().list()` / `client.ProtectedBranch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProtectedBranch(entopts?: Record<string, any>) {
    const self = this
    return new ProtectedBranchEntity(self, entopts)
  }


  // Entity access: `client.ProtectedBranchAdminEnforced().list()` / `client.ProtectedBranchAdminEnforced().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProtectedBranchAdminEnforced(entopts?: Record<string, any>) {
    const self = this
    return new ProtectedBranchAdminEnforcedEntity(self, entopts)
  }


  // Entity access: `client.ProtectedBranchPullRequestReview().list()` / `client.ProtectedBranchPullRequestReview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProtectedBranchPullRequestReview(entopts?: Record<string, any>) {
    const self = this
    return new ProtectedBranchPullRequestReviewEntity(self, entopts)
  }


  // Entity access: `client.PublicMember().list()` / `client.PublicMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PublicMember(entopts?: Record<string, any>) {
    const self = this
    return new PublicMemberEntity(self, entopts)
  }


  // Entity access: `client.Pull().list()` / `client.Pull().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pull(entopts?: Record<string, any>) {
    const self = this
    return new PullEntity(self, entopts)
  }


  // Entity access: `client.PullRequestReview().list()` / `client.PullRequestReview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PullRequestReview(entopts?: Record<string, any>) {
    const self = this
    return new PullRequestReviewEntity(self, entopts)
  }


  // Entity access: `client.PullRequestReviewComment().list()` / `client.PullRequestReviewComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PullRequestReviewComment(entopts?: Record<string, any>) {
    const self = this
    return new PullRequestReviewCommentEntity(self, entopts)
  }


  // Entity access: `client.PullRequestSimple().list()` / `client.PullRequestSimple().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PullRequestSimple(entopts?: Record<string, any>) {
    const self = this
    return new PullRequestSimpleEntity(self, entopts)
  }


  // Entity access: `client.RateLimit().list()` / `client.RateLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RateLimit(entopts?: Record<string, any>) {
    const self = this
    return new RateLimitEntity(self, entopts)
  }


  // Entity access: `client.Reaction().list()` / `client.Reaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reaction(entopts?: Record<string, any>) {
    const self = this
    return new ReactionEntity(self, entopts)
  }


  // Entity access: `client.Referrer().list()` / `client.Referrer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Referrer(entopts?: Record<string, any>) {
    const self = this
    return new ReferrerEntity(self, entopts)
  }


  // Entity access: `client.Release().list()` / `client.Release().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Release(entopts?: Record<string, any>) {
    const self = this
    return new ReleaseEntity(self, entopts)
  }


  // Entity access: `client.ReleaseAsset().list()` / `client.ReleaseAsset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReleaseAsset(entopts?: Record<string, any>) {
    const self = this
    return new ReleaseAssetEntity(self, entopts)
  }


  // Entity access: `client.ReleaseNotesContent().list()` / `client.ReleaseNotesContent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReleaseNotesContent(entopts?: Record<string, any>) {
    const self = this
    return new ReleaseNotesContentEntity(self, entopts)
  }


  // Entity access: `client.Remove().list()` / `client.Remove().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Remove(entopts?: Record<string, any>) {
    const self = this
    return new RemoveEntity(self, entopts)
  }


  // Entity access: `client.Repo().list()` / `client.Repo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Repo(entopts?: Record<string, any>) {
    const self = this
    return new RepoEntity(self, entopts)
  }


  // Entity access: `client.Repository().list()` / `client.Repository().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Repository(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryEntity(self, entopts)
  }


  // Entity access: `client.RepositoryAdvisory().list()` / `client.RepositoryAdvisory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryAdvisory(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryAdvisoryEntity(self, entopts)
  }


  // Entity access: `client.RepositoryCollaboratorPermission().list()` / `client.RepositoryCollaboratorPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryCollaboratorPermission(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryCollaboratorPermissionEntity(self, entopts)
  }


  // Entity access: `client.RepositoryInvitation().list()` / `client.RepositoryInvitation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryInvitation(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryInvitationEntity(self, entopts)
  }


  // Entity access: `client.RepositoryRuleDetailed().list()` / `client.RepositoryRuleDetailed().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryRuleDetailed(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryRuleDetailedEntity(self, entopts)
  }


  // Entity access: `client.RepositoryRuleset().list()` / `client.RepositoryRuleset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryRuleset(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryRulesetEntity(self, entopts)
  }


  // Entity access: `client.RepositorySubscription().list()` / `client.RepositorySubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositorySubscription(entopts?: Record<string, any>) {
    const self = this
    return new RepositorySubscriptionEntity(self, entopts)
  }


  // Entity access: `client.ReviewComment().list()` / `client.ReviewComment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReviewComment(entopts?: Record<string, any>) {
    const self = this
    return new ReviewCommentEntity(self, entopts)
  }


  // Entity access: `client.RuleSuite().list()` / `client.RuleSuite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RuleSuite(entopts?: Record<string, any>) {
    const self = this
    return new RuleSuiteEntity(self, entopts)
  }


  // Entity access: `client.RulesetVersion().list()` / `client.RulesetVersion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RulesetVersion(entopts?: Record<string, any>) {
    const self = this
    return new RulesetVersionEntity(self, entopts)
  }


  // Entity access: `client.RulesetVersionWithState().list()` / `client.RulesetVersionWithState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RulesetVersionWithState(entopts?: Record<string, any>) {
    const self = this
    return new RulesetVersionWithStateEntity(self, entopts)
  }


  // Entity access: `client.Runner().list()` / `client.Runner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Runner(entopts?: Record<string, any>) {
    const self = this
    return new RunnerEntity(self, entopts)
  }


  // Entity access: `client.RunnerApplication().list()` / `client.RunnerApplication().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RunnerApplication(entopts?: Record<string, any>) {
    const self = this
    return new RunnerApplicationEntity(self, entopts)
  }


  // Entity access: `client.RunnerGroup().list()` / `client.RunnerGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RunnerGroup(entopts?: Record<string, any>) {
    const self = this
    return new RunnerGroupEntity(self, entopts)
  }


  // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Search(entopts?: Record<string, any>) {
    const self = this
    return new SearchEntity(self, entopts)
  }


  // Entity access: `client.SecretScanning().list()` / `client.SecretScanning().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanning(entopts?: Record<string, any>) {
    const self = this
    return new SecretScanningEntity(self, entopts)
  }


  // Entity access: `client.SecretScanningAlert().list()` / `client.SecretScanningAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanningAlert(entopts?: Record<string, any>) {
    const self = this
    return new SecretScanningAlertEntity(self, entopts)
  }


  // Entity access: `client.SecretScanningLocation().list()` / `client.SecretScanningLocation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanningLocation(entopts?: Record<string, any>) {
    const self = this
    return new SecretScanningLocationEntity(self, entopts)
  }


  // Entity access: `client.SecretScanningPatternConfiguration().list()` / `client.SecretScanningPatternConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanningPatternConfiguration(entopts?: Record<string, any>) {
    const self = this
    return new SecretScanningPatternConfigurationEntity(self, entopts)
  }


  // Entity access: `client.SecretScanningPushProtectionBypass().list()` / `client.SecretScanningPushProtectionBypass().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanningPushProtectionBypass(entopts?: Record<string, any>) {
    const self = this
    return new SecretScanningPushProtectionBypassEntity(self, entopts)
  }


  // Entity access: `client.SecretScanningScanHistory().list()` / `client.SecretScanningScanHistory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecretScanningScanHistory(entopts?: Record<string, any>) {
    const self = this
    return new SecretScanningScanHistoryEntity(self, entopts)
  }


  // Entity access: `client.SecurityAdvisory().list()` / `client.SecurityAdvisory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SecurityAdvisory(entopts?: Record<string, any>) {
    const self = this
    return new SecurityAdvisoryEntity(self, entopts)
  }


  // Entity access: `client.SelectedAction().list()` / `client.SelectedAction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SelectedAction(entopts?: Record<string, any>) {
    const self = this
    return new SelectedActionEntity(self, entopts)
  }


  // Entity access: `client.SelfHostedRunner().list()` / `client.SelfHostedRunner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SelfHostedRunner(entopts?: Record<string, any>) {
    const self = this
    return new SelfHostedRunnerEntity(self, entopts)
  }


  // Entity access: `client.ShortBlob().list()` / `client.ShortBlob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ShortBlob(entopts?: Record<string, any>) {
    const self = this
    return new ShortBlobEntity(self, entopts)
  }


  // Entity access: `client.ShortBranch().list()` / `client.ShortBranch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ShortBranch(entopts?: Record<string, any>) {
    const self = this
    return new ShortBranchEntity(self, entopts)
  }


  // Entity access: `client.SimpleClassroom().list()` / `client.SimpleClassroom().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SimpleClassroom(entopts?: Record<string, any>) {
    const self = this
    return new SimpleClassroomEntity(self, entopts)
  }


  // Entity access: `client.SimpleClassroomAssignment().list()` / `client.SimpleClassroomAssignment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SimpleClassroomAssignment(entopts?: Record<string, any>) {
    const self = this
    return new SimpleClassroomAssignmentEntity(self, entopts)
  }


  // Entity access: `client.SocialAccount().list()` / `client.SocialAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SocialAccount(entopts?: Record<string, any>) {
    const self = this
    return new SocialAccountEntity(self, entopts)
  }


  // Entity access: `client.SshSigningKey().list()` / `client.SshSigningKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SshSigningKey(entopts?: Record<string, any>) {
    const self = this
    return new SshSigningKeyEntity(self, entopts)
  }


  // Entity access: `client.Status().list()` / `client.Status().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Status(entopts?: Record<string, any>) {
    const self = this
    return new StatusEntity(self, entopts)
  }


  // Entity access: `client.StatusCheckPolicy().list()` / `client.StatusCheckPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusCheckPolicy(entopts?: Record<string, any>) {
    const self = this
    return new StatusCheckPolicyEntity(self, entopts)
  }


  // Entity access: `client.Subscriber().list()` / `client.Subscriber().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Subscriber(entopts?: Record<string, any>) {
    const self = this
    return new SubscriberEntity(self, entopts)
  }


  // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tag(entopts?: Record<string, any>) {
    const self = this
    return new TagEntity(self, entopts)
  }


  // Entity access: `client.TagProtection().list()` / `client.TagProtection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TagProtection(entopts?: Record<string, any>) {
    const self = this
    return new TagProtectionEntity(self, entopts)
  }


  // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Team(entopts?: Record<string, any>) {
    const self = this
    return new TeamEntity(self, entopts)
  }


  // Entity access: `client.TeamSimple().list()` / `client.TeamSimple().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamSimple(entopts?: Record<string, any>) {
    const self = this
    return new TeamSimpleEntity(self, entopts)
  }


  // Entity access: `client.Thread().list()` / `client.Thread().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Thread(entopts?: Record<string, any>) {
    const self = this
    return new ThreadEntity(self, entopts)
  }


  // Entity access: `client.ThreadSubscription().list()` / `client.ThreadSubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ThreadSubscription(entopts?: Record<string, any>) {
    const self = this
    return new ThreadSubscriptionEntity(self, entopts)
  }


  // Entity access: `client.Topic().list()` / `client.Topic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Topic(entopts?: Record<string, any>) {
    const self = this
    return new TopicEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.UserMarketplacePurchase().list()` / `client.UserMarketplacePurchase().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserMarketplacePurchase(entopts?: Record<string, any>) {
    const self = this
    return new UserMarketplacePurchaseEntity(self, entopts)
  }


  // Entity access: `client.View().list()` / `client.View().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  View(entopts?: Record<string, any>) {
    const self = this
    return new ViewEntity(self, entopts)
  }


  // Entity access: `client.WebhookConfig().list()` / `client.WebhookConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebhookConfig(entopts?: Record<string, any>) {
    const self = this
    return new WebhookConfigEntity(self, entopts)
  }


  // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Workflow(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowEntity(self, entopts)
  }


  // Entity access: `client.WorkflowRun().list()` / `client.WorkflowRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowRun(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowRunEntity(self, entopts)
  }


  // Entity access: `client.WorkflowRunUsage().list()` / `client.WorkflowRunUsage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowRunUsage(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowRunUsageEntity(self, entopts)
  }


  // Entity access: `client.WorkflowUsage().list()` / `client.WorkflowUsage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowUsage(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowUsageEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
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


  tester(testopts?: any, sdkopts?: any) {
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


export {
  stdutil,
  config,
  

  BaseFeature,
  GithubEntityBase,

  GithubSDK,
  SDK,
}


