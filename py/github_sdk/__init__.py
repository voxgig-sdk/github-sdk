# Github SDK

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk.core.utility_type import GithubUtility
from github_sdk.core.spec import GithubSpec
from github_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from github_sdk.utility import register

# Load features
from github_sdk.feature.base_feature import GithubBaseFeature
from github_sdk.features import _has_feature, _make_feature


class GithubSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = GithubUtility()
        self._utility = utility

        from github_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return GithubUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = GithubSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "GithubSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("GithubSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Action(self, data=None) -> "ActionEntity":
        """Entity factory: client.Action().list() / client.Action().load({"id": ...})."""
        from github_sdk.entity.action_entity import ActionEntity
        return ActionEntity(self, data)


    def ActionsArtifactAndLogRetention(self, data=None) -> "ActionsArtifactAndLogRetentionEntity":
        """Entity factory: client.ActionsArtifactAndLogRetention().list() / client.ActionsArtifactAndLogRetention().load({"id": ...})."""
        from github_sdk.entity.actions_artifact_and_log_retention_entity import ActionsArtifactAndLogRetentionEntity
        return ActionsArtifactAndLogRetentionEntity(self, data)


    def ActionsCacheList(self, data=None) -> "ActionsCacheListEntity":
        """Entity factory: client.ActionsCacheList().list() / client.ActionsCacheList().load({"id": ...})."""
        from github_sdk.entity.actions_cache_list_entity import ActionsCacheListEntity
        return ActionsCacheListEntity(self, data)


    def ActionsCacheUsageByRepository(self, data=None) -> "ActionsCacheUsageByRepositoryEntity":
        """Entity factory: client.ActionsCacheUsageByRepository().list() / client.ActionsCacheUsageByRepository().load({"id": ...})."""
        from github_sdk.entity.actions_cache_usage_by_repository_entity import ActionsCacheUsageByRepositoryEntity
        return ActionsCacheUsageByRepositoryEntity(self, data)


    def ActionsCacheUsageOrgEnterprise(self, data=None) -> "ActionsCacheUsageOrgEnterpriseEntity":
        """Entity factory: client.ActionsCacheUsageOrgEnterprise().list() / client.ActionsCacheUsageOrgEnterprise().load({"id": ...})."""
        from github_sdk.entity.actions_cache_usage_org_enterprise_entity import ActionsCacheUsageOrgEnterpriseEntity
        return ActionsCacheUsageOrgEnterpriseEntity(self, data)


    def ActionsForkPrContributorApproval(self, data=None) -> "ActionsForkPrContributorApprovalEntity":
        """Entity factory: client.ActionsForkPrContributorApproval().list() / client.ActionsForkPrContributorApproval().load({"id": ...})."""
        from github_sdk.entity.actions_fork_pr_contributor_approval_entity import ActionsForkPrContributorApprovalEntity
        return ActionsForkPrContributorApprovalEntity(self, data)


    def ActionsForkPrWorkflowsPrivateRepo(self, data=None) -> "ActionsForkPrWorkflowsPrivateRepoEntity":
        """Entity factory: client.ActionsForkPrWorkflowsPrivateRepo().list() / client.ActionsForkPrWorkflowsPrivateRepo().load({"id": ...})."""
        from github_sdk.entity.actions_fork_pr_workflows_private_repo_entity import ActionsForkPrWorkflowsPrivateRepoEntity
        return ActionsForkPrWorkflowsPrivateRepoEntity(self, data)


    def ActionsGetDefaultWorkflowPermission(self, data=None) -> "ActionsGetDefaultWorkflowPermissionEntity":
        """Entity factory: client.ActionsGetDefaultWorkflowPermission().list() / client.ActionsGetDefaultWorkflowPermission().load({"id": ...})."""
        from github_sdk.entity.actions_get_default_workflow_permission_entity import ActionsGetDefaultWorkflowPermissionEntity
        return ActionsGetDefaultWorkflowPermissionEntity(self, data)


    def ActionsHostedRunner(self, data=None) -> "ActionsHostedRunnerEntity":
        """Entity factory: client.ActionsHostedRunner().list() / client.ActionsHostedRunner().load({"id": ...})."""
        from github_sdk.entity.actions_hosted_runner_entity import ActionsHostedRunnerEntity
        return ActionsHostedRunnerEntity(self, data)


    def ActionsHostedRunnerLimit(self, data=None) -> "ActionsHostedRunnerLimitEntity":
        """Entity factory: client.ActionsHostedRunnerLimit().list() / client.ActionsHostedRunnerLimit().load({"id": ...})."""
        from github_sdk.entity.actions_hosted_runner_limit_entity import ActionsHostedRunnerLimitEntity
        return ActionsHostedRunnerLimitEntity(self, data)


    def ActionsOrganizationPermission(self, data=None) -> "ActionsOrganizationPermissionEntity":
        """Entity factory: client.ActionsOrganizationPermission().list() / client.ActionsOrganizationPermission().load({"id": ...})."""
        from github_sdk.entity.actions_organization_permission_entity import ActionsOrganizationPermissionEntity
        return ActionsOrganizationPermissionEntity(self, data)


    def ActionsPublicKey(self, data=None) -> "ActionsPublicKeyEntity":
        """Entity factory: client.ActionsPublicKey().list() / client.ActionsPublicKey().load({"id": ...})."""
        from github_sdk.entity.actions_public_key_entity import ActionsPublicKeyEntity
        return ActionsPublicKeyEntity(self, data)


    def ActionsRepositoryPermission(self, data=None) -> "ActionsRepositoryPermissionEntity":
        """Entity factory: client.ActionsRepositoryPermission().list() / client.ActionsRepositoryPermission().load({"id": ...})."""
        from github_sdk.entity.actions_repository_permission_entity import ActionsRepositoryPermissionEntity
        return ActionsRepositoryPermissionEntity(self, data)


    def ActionsSecret(self, data=None) -> "ActionsSecretEntity":
        """Entity factory: client.ActionsSecret().list() / client.ActionsSecret().load({"id": ...})."""
        from github_sdk.entity.actions_secret_entity import ActionsSecretEntity
        return ActionsSecretEntity(self, data)


    def ActionsVariable(self, data=None) -> "ActionsVariableEntity":
        """Entity factory: client.ActionsVariable().list() / client.ActionsVariable().load({"id": ...})."""
        from github_sdk.entity.actions_variable_entity import ActionsVariableEntity
        return ActionsVariableEntity(self, data)


    def ActionsWorkflowAccessToRepository(self, data=None) -> "ActionsWorkflowAccessToRepositoryEntity":
        """Entity factory: client.ActionsWorkflowAccessToRepository().list() / client.ActionsWorkflowAccessToRepository().load({"id": ...})."""
        from github_sdk.entity.actions_workflow_access_to_repository_entity import ActionsWorkflowAccessToRepositoryEntity
        return ActionsWorkflowAccessToRepositoryEntity(self, data)


    def Activity(self, data=None) -> "ActivityEntity":
        """Entity factory: client.Activity().list() / client.Activity().load({"id": ...})."""
        from github_sdk.entity.activity_entity import ActivityEntity
        return ActivityEntity(self, data)


    def Add(self, data=None) -> "AddEntity":
        """Entity factory: client.Add().list() / client.Add().load({"id": ...})."""
        from github_sdk.entity.add_entity import AddEntity
        return AddEntity(self, data)


    def ApiInsightsRouteStat(self, data=None) -> "ApiInsightsRouteStatEntity":
        """Entity factory: client.ApiInsightsRouteStat().list() / client.ApiInsightsRouteStat().load({"id": ...})."""
        from github_sdk.entity.api_insights_route_stat_entity import ApiInsightsRouteStatEntity
        return ApiInsightsRouteStatEntity(self, data)


    def ApiInsightsSubjectStat(self, data=None) -> "ApiInsightsSubjectStatEntity":
        """Entity factory: client.ApiInsightsSubjectStat().list() / client.ApiInsightsSubjectStat().load({"id": ...})."""
        from github_sdk.entity.api_insights_subject_stat_entity import ApiInsightsSubjectStatEntity
        return ApiInsightsSubjectStatEntity(self, data)


    def ApiInsightsSummaryStat(self, data=None) -> "ApiInsightsSummaryStatEntity":
        """Entity factory: client.ApiInsightsSummaryStat().list() / client.ApiInsightsSummaryStat().load({"id": ...})."""
        from github_sdk.entity.api_insights_summary_stat_entity import ApiInsightsSummaryStatEntity
        return ApiInsightsSummaryStatEntity(self, data)


    def ApiInsightsTimeStat(self, data=None) -> "ApiInsightsTimeStatEntity":
        """Entity factory: client.ApiInsightsTimeStat().list() / client.ApiInsightsTimeStat().load({"id": ...})."""
        from github_sdk.entity.api_insights_time_stat_entity import ApiInsightsTimeStatEntity
        return ApiInsightsTimeStatEntity(self, data)


    def ApiInsightsUserStat(self, data=None) -> "ApiInsightsUserStatEntity":
        """Entity factory: client.ApiInsightsUserStat().list() / client.ApiInsightsUserStat().load({"id": ...})."""
        from github_sdk.entity.api_insights_user_stat_entity import ApiInsightsUserStatEntity
        return ApiInsightsUserStatEntity(self, data)


    def ApiOverview(self, data=None) -> "ApiOverviewEntity":
        """Entity factory: client.ApiOverview().list() / client.ApiOverview().load({"id": ...})."""
        from github_sdk.entity.api_overview_entity import ApiOverviewEntity
        return ApiOverviewEntity(self, data)


    def App(self, data=None) -> "AppEntity":
        """Entity factory: client.App().list() / client.App().load({"id": ...})."""
        from github_sdk.entity.app_entity import AppEntity
        return AppEntity(self, data)


    def Artifact(self, data=None) -> "ArtifactEntity":
        """Entity factory: client.Artifact().list() / client.Artifact().load({"id": ...})."""
        from github_sdk.entity.artifact_entity import ArtifactEntity
        return ArtifactEntity(self, data)


    def Assignee(self, data=None) -> "AssigneeEntity":
        """Entity factory: client.Assignee().list() / client.Assignee().load({"id": ...})."""
        from github_sdk.entity.assignee_entity import AssigneeEntity
        return AssigneeEntity(self, data)


    def AuthenticationToken(self, data=None) -> "AuthenticationTokenEntity":
        """Entity factory: client.AuthenticationToken().list() / client.AuthenticationToken().load({"id": ...})."""
        from github_sdk.entity.authentication_token_entity import AuthenticationTokenEntity
        return AuthenticationTokenEntity(self, data)


    def Authorization(self, data=None) -> "AuthorizationEntity":
        """Entity factory: client.Authorization().list() / client.Authorization().load({"id": ...})."""
        from github_sdk.entity.authorization_entity import AuthorizationEntity
        return AuthorizationEntity(self, data)


    def Autolink(self, data=None) -> "AutolinkEntity":
        """Entity factory: client.Autolink().list() / client.Autolink().load({"id": ...})."""
        from github_sdk.entity.autolink_entity import AutolinkEntity
        return AutolinkEntity(self, data)


    def BaseGist(self, data=None) -> "BaseGistEntity":
        """Entity factory: client.BaseGist().list() / client.BaseGist().load({"id": ...})."""
        from github_sdk.entity.base_gist_entity import BaseGistEntity
        return BaseGistEntity(self, data)


    def BillingUsageReport(self, data=None) -> "BillingUsageReportEntity":
        """Entity factory: client.BillingUsageReport().list() / client.BillingUsageReport().load({"id": ...})."""
        from github_sdk.entity.billing_usage_report_entity import BillingUsageReportEntity
        return BillingUsageReportEntity(self, data)


    def BillingUsageReportUser(self, data=None) -> "BillingUsageReportUserEntity":
        """Entity factory: client.BillingUsageReportUser().list() / client.BillingUsageReportUser().load({"id": ...})."""
        from github_sdk.entity.billing_usage_report_user_entity import BillingUsageReportUserEntity
        return BillingUsageReportUserEntity(self, data)


    def Blob(self, data=None) -> "BlobEntity":
        """Entity factory: client.Blob().list() / client.Blob().load({"id": ...})."""
        from github_sdk.entity.blob_entity import BlobEntity
        return BlobEntity(self, data)


    def Block(self, data=None) -> "BlockEntity":
        """Entity factory: client.Block().list() / client.Block().load({"id": ...})."""
        from github_sdk.entity.block_entity import BlockEntity
        return BlockEntity(self, data)


    def Branch(self, data=None) -> "BranchEntity":
        """Entity factory: client.Branch().list() / client.Branch().load({"id": ...})."""
        from github_sdk.entity.branch_entity import BranchEntity
        return BranchEntity(self, data)


    def BranchProtection(self, data=None) -> "BranchProtectionEntity":
        """Entity factory: client.BranchProtection().list() / client.BranchProtection().load({"id": ...})."""
        from github_sdk.entity.branch_protection_entity import BranchProtectionEntity
        return BranchProtectionEntity(self, data)


    def BranchRestrictionPolicy(self, data=None) -> "BranchRestrictionPolicyEntity":
        """Entity factory: client.BranchRestrictionPolicy().list() / client.BranchRestrictionPolicy().load({"id": ...})."""
        from github_sdk.entity.branch_restriction_policy_entity import BranchRestrictionPolicyEntity
        return BranchRestrictionPolicyEntity(self, data)


    def BranchShort(self, data=None) -> "BranchShortEntity":
        """Entity factory: client.BranchShort().list() / client.BranchShort().load({"id": ...})."""
        from github_sdk.entity.branch_short_entity import BranchShortEntity
        return BranchShortEntity(self, data)


    def BranchWithProtection(self, data=None) -> "BranchWithProtectionEntity":
        """Entity factory: client.BranchWithProtection().list() / client.BranchWithProtection().load({"id": ...})."""
        from github_sdk.entity.branch_with_protection_entity import BranchWithProtectionEntity
        return BranchWithProtectionEntity(self, data)


    def Campaign(self, data=None) -> "CampaignEntity":
        """Entity factory: client.Campaign().list() / client.Campaign().load({"id": ...})."""
        from github_sdk.entity.campaign_entity import CampaignEntity
        return CampaignEntity(self, data)


    def Check(self, data=None) -> "CheckEntity":
        """Entity factory: client.Check().list() / client.Check().load({"id": ...})."""
        from github_sdk.entity.check_entity import CheckEntity
        return CheckEntity(self, data)


    def CheckAnnotation(self, data=None) -> "CheckAnnotationEntity":
        """Entity factory: client.CheckAnnotation().list() / client.CheckAnnotation().load({"id": ...})."""
        from github_sdk.entity.check_annotation_entity import CheckAnnotationEntity
        return CheckAnnotationEntity(self, data)


    def CheckAutomatedSecurityFix(self, data=None) -> "CheckAutomatedSecurityFixEntity":
        """Entity factory: client.CheckAutomatedSecurityFix().list() / client.CheckAutomatedSecurityFix().load({"id": ...})."""
        from github_sdk.entity.check_automated_security_fix_entity import CheckAutomatedSecurityFixEntity
        return CheckAutomatedSecurityFixEntity(self, data)


    def CheckRun(self, data=None) -> "CheckRunEntity":
        """Entity factory: client.CheckRun().list() / client.CheckRun().load({"id": ...})."""
        from github_sdk.entity.check_run_entity import CheckRunEntity
        return CheckRunEntity(self, data)


    def CheckSuite(self, data=None) -> "CheckSuiteEntity":
        """Entity factory: client.CheckSuite().list() / client.CheckSuite().load({"id": ...})."""
        from github_sdk.entity.check_suite_entity import CheckSuiteEntity
        return CheckSuiteEntity(self, data)


    def CheckSuitePreference(self, data=None) -> "CheckSuitePreferenceEntity":
        """Entity factory: client.CheckSuitePreference().list() / client.CheckSuitePreference().load({"id": ...})."""
        from github_sdk.entity.check_suite_preference_entity import CheckSuitePreferenceEntity
        return CheckSuitePreferenceEntity(self, data)


    def Classroom(self, data=None) -> "ClassroomEntity":
        """Entity factory: client.Classroom().list() / client.Classroom().load({"id": ...})."""
        from github_sdk.entity.classroom_entity import ClassroomEntity
        return ClassroomEntity(self, data)


    def ClassroomAcceptedAssignment(self, data=None) -> "ClassroomAcceptedAssignmentEntity":
        """Entity factory: client.ClassroomAcceptedAssignment().list() / client.ClassroomAcceptedAssignment().load({"id": ...})."""
        from github_sdk.entity.classroom_accepted_assignment_entity import ClassroomAcceptedAssignmentEntity
        return ClassroomAcceptedAssignmentEntity(self, data)


    def ClassroomAssignment(self, data=None) -> "ClassroomAssignmentEntity":
        """Entity factory: client.ClassroomAssignment().list() / client.ClassroomAssignment().load({"id": ...})."""
        from github_sdk.entity.classroom_assignment_entity import ClassroomAssignmentEntity
        return ClassroomAssignmentEntity(self, data)


    def ClassroomAssignmentGrade(self, data=None) -> "ClassroomAssignmentGradeEntity":
        """Entity factory: client.ClassroomAssignmentGrade().list() / client.ClassroomAssignmentGrade().load({"id": ...})."""
        from github_sdk.entity.classroom_assignment_grade_entity import ClassroomAssignmentGradeEntity
        return ClassroomAssignmentGradeEntity(self, data)


    def Clone(self, data=None) -> "CloneEntity":
        """Entity factory: client.Clone().list() / client.Clone().load({"id": ...})."""
        from github_sdk.entity.clone_entity import CloneEntity
        return CloneEntity(self, data)


    def CodeFrequency(self, data=None) -> "CodeFrequencyEntity":
        """Entity factory: client.CodeFrequency().list() / client.CodeFrequency().load({"id": ...})."""
        from github_sdk.entity.code_frequency_entity import CodeFrequencyEntity
        return CodeFrequencyEntity(self, data)


    def CodeFrequencyStat(self, data=None) -> "CodeFrequencyStatEntity":
        """Entity factory: client.CodeFrequencyStat().list() / client.CodeFrequencyStat().load({"id": ...})."""
        from github_sdk.entity.code_frequency_stat_entity import CodeFrequencyStatEntity
        return CodeFrequencyStatEntity(self, data)


    def CodeOfConduct(self, data=None) -> "CodeOfConductEntity":
        """Entity factory: client.CodeOfConduct().list() / client.CodeOfConduct().load({"id": ...})."""
        from github_sdk.entity.code_of_conduct_entity import CodeOfConductEntity
        return CodeOfConductEntity(self, data)


    def CodeScanning(self, data=None) -> "CodeScanningEntity":
        """Entity factory: client.CodeScanning().list() / client.CodeScanning().load({"id": ...})."""
        from github_sdk.entity.code_scanning_entity import CodeScanningEntity
        return CodeScanningEntity(self, data)


    def CodeScanningAlert(self, data=None) -> "CodeScanningAlertEntity":
        """Entity factory: client.CodeScanningAlert().list() / client.CodeScanningAlert().load({"id": ...})."""
        from github_sdk.entity.code_scanning_alert_entity import CodeScanningAlertEntity
        return CodeScanningAlertEntity(self, data)


    def CodeScanningAlertInstance(self, data=None) -> "CodeScanningAlertInstanceEntity":
        """Entity factory: client.CodeScanningAlertInstance().list() / client.CodeScanningAlertInstance().load({"id": ...})."""
        from github_sdk.entity.code_scanning_alert_instance_entity import CodeScanningAlertInstanceEntity
        return CodeScanningAlertInstanceEntity(self, data)


    def CodeScanningAlertItem(self, data=None) -> "CodeScanningAlertItemEntity":
        """Entity factory: client.CodeScanningAlertItem().list() / client.CodeScanningAlertItem().load({"id": ...})."""
        from github_sdk.entity.code_scanning_alert_item_entity import CodeScanningAlertItemEntity
        return CodeScanningAlertItemEntity(self, data)


    def CodeScanningAnalysi(self, data=None) -> "CodeScanningAnalysiEntity":
        """Entity factory: client.CodeScanningAnalysi().list() / client.CodeScanningAnalysi().load({"id": ...})."""
        from github_sdk.entity.code_scanning_analysi_entity import CodeScanningAnalysiEntity
        return CodeScanningAnalysiEntity(self, data)


    def CodeScanningAnalysisDeletion(self, data=None) -> "CodeScanningAnalysisDeletionEntity":
        """Entity factory: client.CodeScanningAnalysisDeletion().list() / client.CodeScanningAnalysisDeletion().load({"id": ...})."""
        from github_sdk.entity.code_scanning_analysis_deletion_entity import CodeScanningAnalysisDeletionEntity
        return CodeScanningAnalysisDeletionEntity(self, data)


    def CodeScanningAutofix(self, data=None) -> "CodeScanningAutofixEntity":
        """Entity factory: client.CodeScanningAutofix().list() / client.CodeScanningAutofix().load({"id": ...})."""
        from github_sdk.entity.code_scanning_autofix_entity import CodeScanningAutofixEntity
        return CodeScanningAutofixEntity(self, data)


    def CodeScanningAutofixCommit(self, data=None) -> "CodeScanningAutofixCommitEntity":
        """Entity factory: client.CodeScanningAutofixCommit().list() / client.CodeScanningAutofixCommit().load({"id": ...})."""
        from github_sdk.entity.code_scanning_autofix_commit_entity import CodeScanningAutofixCommitEntity
        return CodeScanningAutofixCommitEntity(self, data)


    def CodeScanningCodeqlDatabase(self, data=None) -> "CodeScanningCodeqlDatabaseEntity":
        """Entity factory: client.CodeScanningCodeqlDatabase().list() / client.CodeScanningCodeqlDatabase().load({"id": ...})."""
        from github_sdk.entity.code_scanning_codeql_database_entity import CodeScanningCodeqlDatabaseEntity
        return CodeScanningCodeqlDatabaseEntity(self, data)


    def CodeScanningDefaultSetup(self, data=None) -> "CodeScanningDefaultSetupEntity":
        """Entity factory: client.CodeScanningDefaultSetup().list() / client.CodeScanningDefaultSetup().load({"id": ...})."""
        from github_sdk.entity.code_scanning_default_setup_entity import CodeScanningDefaultSetupEntity
        return CodeScanningDefaultSetupEntity(self, data)


    def CodeScanningOrganizationAlertItem(self, data=None) -> "CodeScanningOrganizationAlertItemEntity":
        """Entity factory: client.CodeScanningOrganizationAlertItem().list() / client.CodeScanningOrganizationAlertItem().load({"id": ...})."""
        from github_sdk.entity.code_scanning_organization_alert_item_entity import CodeScanningOrganizationAlertItemEntity
        return CodeScanningOrganizationAlertItemEntity(self, data)


    def CodeScanningSarifsStatus(self, data=None) -> "CodeScanningSarifsStatusEntity":
        """Entity factory: client.CodeScanningSarifsStatus().list() / client.CodeScanningSarifsStatus().load({"id": ...})."""
        from github_sdk.entity.code_scanning_sarifs_status_entity import CodeScanningSarifsStatusEntity
        return CodeScanningSarifsStatusEntity(self, data)


    def CodeScanningVariantAnalysi(self, data=None) -> "CodeScanningVariantAnalysiEntity":
        """Entity factory: client.CodeScanningVariantAnalysi().list() / client.CodeScanningVariantAnalysi().load({"id": ...})."""
        from github_sdk.entity.code_scanning_variant_analysi_entity import CodeScanningVariantAnalysiEntity
        return CodeScanningVariantAnalysiEntity(self, data)


    def CodeScanningVariantAnalysisRepoTask(self, data=None) -> "CodeScanningVariantAnalysisRepoTaskEntity":
        """Entity factory: client.CodeScanningVariantAnalysisRepoTask().list() / client.CodeScanningVariantAnalysisRepoTask().load({"id": ...})."""
        from github_sdk.entity.code_scanning_variant_analysis_repo_task_entity import CodeScanningVariantAnalysisRepoTaskEntity
        return CodeScanningVariantAnalysisRepoTaskEntity(self, data)


    def CodeSecurity(self, data=None) -> "CodeSecurityEntity":
        """Entity factory: client.CodeSecurity().list() / client.CodeSecurity().load({"id": ...})."""
        from github_sdk.entity.code_security_entity import CodeSecurityEntity
        return CodeSecurityEntity(self, data)


    def CodeSecurityConfiguration(self, data=None) -> "CodeSecurityConfigurationEntity":
        """Entity factory: client.CodeSecurityConfiguration().list() / client.CodeSecurityConfiguration().load({"id": ...})."""
        from github_sdk.entity.code_security_configuration_entity import CodeSecurityConfigurationEntity
        return CodeSecurityConfigurationEntity(self, data)


    def CodeSecurityConfigurationRepository(self, data=None) -> "CodeSecurityConfigurationRepositoryEntity":
        """Entity factory: client.CodeSecurityConfigurationRepository().list() / client.CodeSecurityConfigurationRepository().load({"id": ...})."""
        from github_sdk.entity.code_security_configuration_repository_entity import CodeSecurityConfigurationRepositoryEntity
        return CodeSecurityConfigurationRepositoryEntity(self, data)


    def CodeSecurityDefaultConfiguration(self, data=None) -> "CodeSecurityDefaultConfigurationEntity":
        """Entity factory: client.CodeSecurityDefaultConfiguration().list() / client.CodeSecurityDefaultConfiguration().load({"id": ...})."""
        from github_sdk.entity.code_security_default_configuration_entity import CodeSecurityDefaultConfigurationEntity
        return CodeSecurityDefaultConfigurationEntity(self, data)


    def CodeownersError(self, data=None) -> "CodeownersErrorEntity":
        """Entity factory: client.CodeownersError().list() / client.CodeownersError().load({"id": ...})."""
        from github_sdk.entity.codeowners_error_entity import CodeownersErrorEntity
        return CodeownersErrorEntity(self, data)


    def Codespace(self, data=None) -> "CodespaceEntity":
        """Entity factory: client.Codespace().list() / client.Codespace().load({"id": ...})."""
        from github_sdk.entity.codespace_entity import CodespaceEntity
        return CodespaceEntity(self, data)


    def Collaborator(self, data=None) -> "CollaboratorEntity":
        """Entity factory: client.Collaborator().list() / client.Collaborator().load({"id": ...})."""
        from github_sdk.entity.collaborator_entity import CollaboratorEntity
        return CollaboratorEntity(self, data)


    def CombinedBillingUsage(self, data=None) -> "CombinedBillingUsageEntity":
        """Entity factory: client.CombinedBillingUsage().list() / client.CombinedBillingUsage().load({"id": ...})."""
        from github_sdk.entity.combined_billing_usage_entity import CombinedBillingUsageEntity
        return CombinedBillingUsageEntity(self, data)


    def CombinedCommitStatus(self, data=None) -> "CombinedCommitStatusEntity":
        """Entity factory: client.CombinedCommitStatus().list() / client.CombinedCommitStatus().load({"id": ...})."""
        from github_sdk.entity.combined_commit_status_entity import CombinedCommitStatusEntity
        return CombinedCommitStatusEntity(self, data)


    def Commit(self, data=None) -> "CommitEntity":
        """Entity factory: client.Commit().list() / client.Commit().load({"id": ...})."""
        from github_sdk.entity.commit_entity import CommitEntity
        return CommitEntity(self, data)


    def CommitActivity(self, data=None) -> "CommitActivityEntity":
        """Entity factory: client.CommitActivity().list() / client.CommitActivity().load({"id": ...})."""
        from github_sdk.entity.commit_activity_entity import CommitActivityEntity
        return CommitActivityEntity(self, data)


    def CommitComment(self, data=None) -> "CommitCommentEntity":
        """Entity factory: client.CommitComment().list() / client.CommitComment().load({"id": ...})."""
        from github_sdk.entity.commit_comment_entity import CommitCommentEntity
        return CommitCommentEntity(self, data)


    def CommitComparison(self, data=None) -> "CommitComparisonEntity":
        """Entity factory: client.CommitComparison().list() / client.CommitComparison().load({"id": ...})."""
        from github_sdk.entity.commit_comparison_entity import CommitComparisonEntity
        return CommitComparisonEntity(self, data)


    def CommunityProfile(self, data=None) -> "CommunityProfileEntity":
        """Entity factory: client.CommunityProfile().list() / client.CommunityProfile().load({"id": ...})."""
        from github_sdk.entity.community_profile_entity import CommunityProfileEntity
        return CommunityProfileEntity(self, data)


    def ContentFile(self, data=None) -> "ContentFileEntity":
        """Entity factory: client.ContentFile().list() / client.ContentFile().load({"id": ...})."""
        from github_sdk.entity.content_file_entity import ContentFileEntity
        return ContentFileEntity(self, data)


    def ContentTraffic(self, data=None) -> "ContentTrafficEntity":
        """Entity factory: client.ContentTraffic().list() / client.ContentTraffic().load({"id": ...})."""
        from github_sdk.entity.content_traffic_entity import ContentTrafficEntity
        return ContentTrafficEntity(self, data)


    def Contributor(self, data=None) -> "ContributorEntity":
        """Entity factory: client.Contributor().list() / client.Contributor().load({"id": ...})."""
        from github_sdk.entity.contributor_entity import ContributorEntity
        return ContributorEntity(self, data)


    def Copilot(self, data=None) -> "CopilotEntity":
        """Entity factory: client.Copilot().list() / client.Copilot().load({"id": ...})."""
        from github_sdk.entity.copilot_entity import CopilotEntity
        return CopilotEntity(self, data)


    def CopilotOrganizationDetail(self, data=None) -> "CopilotOrganizationDetailEntity":
        """Entity factory: client.CopilotOrganizationDetail().list() / client.CopilotOrganizationDetail().load({"id": ...})."""
        from github_sdk.entity.copilot_organization_detail_entity import CopilotOrganizationDetailEntity
        return CopilotOrganizationDetailEntity(self, data)


    def CopilotUsageMetricsDay(self, data=None) -> "CopilotUsageMetricsDayEntity":
        """Entity factory: client.CopilotUsageMetricsDay().list() / client.CopilotUsageMetricsDay().load({"id": ...})."""
        from github_sdk.entity.copilot_usage_metrics_day_entity import CopilotUsageMetricsDayEntity
        return CopilotUsageMetricsDayEntity(self, data)


    def Credential(self, data=None) -> "CredentialEntity":
        """Entity factory: client.Credential().list() / client.Credential().load({"id": ...})."""
        from github_sdk.entity.credential_entity import CredentialEntity
        return CredentialEntity(self, data)


    def CustomProperty(self, data=None) -> "CustomPropertyEntity":
        """Entity factory: client.CustomProperty().list() / client.CustomProperty().load({"id": ...})."""
        from github_sdk.entity.custom_property_entity import CustomPropertyEntity
        return CustomPropertyEntity(self, data)


    def CustomPropertyValue(self, data=None) -> "CustomPropertyValueEntity":
        """Entity factory: client.CustomPropertyValue().list() / client.CustomPropertyValue().load({"id": ...})."""
        from github_sdk.entity.custom_property_value_entity import CustomPropertyValueEntity
        return CustomPropertyValueEntity(self, data)


    def Dependabot(self, data=None) -> "DependabotEntity":
        """Entity factory: client.Dependabot().list() / client.Dependabot().load({"id": ...})."""
        from github_sdk.entity.dependabot_entity import DependabotEntity
        return DependabotEntity(self, data)


    def DependabotAlert(self, data=None) -> "DependabotAlertEntity":
        """Entity factory: client.DependabotAlert().list() / client.DependabotAlert().load({"id": ...})."""
        from github_sdk.entity.dependabot_alert_entity import DependabotAlertEntity
        return DependabotAlertEntity(self, data)


    def DependabotAlertWithRepository(self, data=None) -> "DependabotAlertWithRepositoryEntity":
        """Entity factory: client.DependabotAlertWithRepository().list() / client.DependabotAlertWithRepository().load({"id": ...})."""
        from github_sdk.entity.dependabot_alert_with_repository_entity import DependabotAlertWithRepositoryEntity
        return DependabotAlertWithRepositoryEntity(self, data)


    def DependabotPublicKey(self, data=None) -> "DependabotPublicKeyEntity":
        """Entity factory: client.DependabotPublicKey().list() / client.DependabotPublicKey().load({"id": ...})."""
        from github_sdk.entity.dependabot_public_key_entity import DependabotPublicKeyEntity
        return DependabotPublicKeyEntity(self, data)


    def DependabotRepositoryAccessDetail(self, data=None) -> "DependabotRepositoryAccessDetailEntity":
        """Entity factory: client.DependabotRepositoryAccessDetail().list() / client.DependabotRepositoryAccessDetail().load({"id": ...})."""
        from github_sdk.entity.dependabot_repository_access_detail_entity import DependabotRepositoryAccessDetailEntity
        return DependabotRepositoryAccessDetailEntity(self, data)


    def DependabotSecret(self, data=None) -> "DependabotSecretEntity":
        """Entity factory: client.DependabotSecret().list() / client.DependabotSecret().load({"id": ...})."""
        from github_sdk.entity.dependabot_secret_entity import DependabotSecretEntity
        return DependabotSecretEntity(self, data)


    def DependencyGraph(self, data=None) -> "DependencyGraphEntity":
        """Entity factory: client.DependencyGraph().list() / client.DependencyGraph().load({"id": ...})."""
        from github_sdk.entity.dependency_graph_entity import DependencyGraphEntity
        return DependencyGraphEntity(self, data)


    def DependencyGraphDiff(self, data=None) -> "DependencyGraphDiffEntity":
        """Entity factory: client.DependencyGraphDiff().list() / client.DependencyGraphDiff().load({"id": ...})."""
        from github_sdk.entity.dependency_graph_diff_entity import DependencyGraphDiffEntity
        return DependencyGraphDiffEntity(self, data)


    def DependencyGraphSpdxSbom(self, data=None) -> "DependencyGraphSpdxSbomEntity":
        """Entity factory: client.DependencyGraphSpdxSbom().list() / client.DependencyGraphSpdxSbom().load({"id": ...})."""
        from github_sdk.entity.dependency_graph_spdx_sbom_entity import DependencyGraphSpdxSbomEntity
        return DependencyGraphSpdxSbomEntity(self, data)


    def DeployKey(self, data=None) -> "DeployKeyEntity":
        """Entity factory: client.DeployKey().list() / client.DeployKey().load({"id": ...})."""
        from github_sdk.entity.deploy_key_entity import DeployKeyEntity
        return DeployKeyEntity(self, data)


    def Deployment(self, data=None) -> "DeploymentEntity":
        """Entity factory: client.Deployment().list() / client.Deployment().load({"id": ...})."""
        from github_sdk.entity.deployment_entity import DeploymentEntity
        return DeploymentEntity(self, data)


    def DeploymentBranchPolicy(self, data=None) -> "DeploymentBranchPolicyEntity":
        """Entity factory: client.DeploymentBranchPolicy().list() / client.DeploymentBranchPolicy().load({"id": ...})."""
        from github_sdk.entity.deployment_branch_policy_entity import DeploymentBranchPolicyEntity
        return DeploymentBranchPolicyEntity(self, data)


    def DeploymentProtectionRule(self, data=None) -> "DeploymentProtectionRuleEntity":
        """Entity factory: client.DeploymentProtectionRule().list() / client.DeploymentProtectionRule().load({"id": ...})."""
        from github_sdk.entity.deployment_protection_rule_entity import DeploymentProtectionRuleEntity
        return DeploymentProtectionRuleEntity(self, data)


    def DeploymentStatus(self, data=None) -> "DeploymentStatusEntity":
        """Entity factory: client.DeploymentStatus().list() / client.DeploymentStatus().load({"id": ...})."""
        from github_sdk.entity.deployment_status_entity import DeploymentStatusEntity
        return DeploymentStatusEntity(self, data)


    def DiffEntry(self, data=None) -> "DiffEntryEntity":
        """Entity factory: client.DiffEntry().list() / client.DiffEntry().load({"id": ...})."""
        from github_sdk.entity.diff_entry_entity import DiffEntryEntity
        return DiffEntryEntity(self, data)


    def Email(self, data=None) -> "EmailEntity":
        """Entity factory: client.Email().list() / client.Email().load({"id": ...})."""
        from github_sdk.entity.email_entity import EmailEntity
        return EmailEntity(self, data)


    def Emoji(self, data=None) -> "EmojiEntity":
        """Entity factory: client.Emoji().list() / client.Emoji().load({"id": ...})."""
        from github_sdk.entity.emoji_entity import EmojiEntity
        return EmojiEntity(self, data)


    def EmptyObject(self, data=None) -> "EmptyObjectEntity":
        """Entity factory: client.EmptyObject().list() / client.EmptyObject().load({"id": ...})."""
        from github_sdk.entity.empty_object_entity import EmptyObjectEntity
        return EmptyObjectEntity(self, data)


    def EnterpriseTeam(self, data=None) -> "EnterpriseTeamEntity":
        """Entity factory: client.EnterpriseTeam().list() / client.EnterpriseTeam().load({"id": ...})."""
        from github_sdk.entity.enterprise_team_entity import EnterpriseTeamEntity
        return EnterpriseTeamEntity(self, data)


    def EnterpriseTeamMembership(self, data=None) -> "EnterpriseTeamMembershipEntity":
        """Entity factory: client.EnterpriseTeamMembership().list() / client.EnterpriseTeamMembership().load({"id": ...})."""
        from github_sdk.entity.enterprise_team_membership_entity import EnterpriseTeamMembershipEntity
        return EnterpriseTeamMembershipEntity(self, data)


    def Environment(self, data=None) -> "EnvironmentEntity":
        """Entity factory: client.Environment().list() / client.Environment().load({"id": ...})."""
        from github_sdk.entity.environment_entity import EnvironmentEntity
        return EnvironmentEntity(self, data)


    def EnvironmentApproval(self, data=None) -> "EnvironmentApprovalEntity":
        """Entity factory: client.EnvironmentApproval().list() / client.EnvironmentApproval().load({"id": ...})."""
        from github_sdk.entity.environment_approval_entity import EnvironmentApprovalEntity
        return EnvironmentApprovalEntity(self, data)


    def Event(self, data=None) -> "EventEntity":
        """Entity factory: client.Event().list() / client.Event().load({"id": ...})."""
        from github_sdk.entity.event_entity import EventEntity
        return EventEntity(self, data)


    def Feed(self, data=None) -> "FeedEntity":
        """Entity factory: client.Feed().list() / client.Feed().load({"id": ...})."""
        from github_sdk.entity.feed_entity import FeedEntity
        return FeedEntity(self, data)


    def FileCommit(self, data=None) -> "FileCommitEntity":
        """Entity factory: client.FileCommit().list() / client.FileCommit().load({"id": ...})."""
        from github_sdk.entity.file_commit_entity import FileCommitEntity
        return FileCommitEntity(self, data)


    def Follower(self, data=None) -> "FollowerEntity":
        """Entity factory: client.Follower().list() / client.Follower().load({"id": ...})."""
        from github_sdk.entity.follower_entity import FollowerEntity
        return FollowerEntity(self, data)


    def Following(self, data=None) -> "FollowingEntity":
        """Entity factory: client.Following().list() / client.Following().load({"id": ...})."""
        from github_sdk.entity.following_entity import FollowingEntity
        return FollowingEntity(self, data)


    def FullRepository(self, data=None) -> "FullRepositoryEntity":
        """Entity factory: client.FullRepository().list() / client.FullRepository().load({"id": ...})."""
        from github_sdk.entity.full_repository_entity import FullRepositoryEntity
        return FullRepositoryEntity(self, data)


    def Gist(self, data=None) -> "GistEntity":
        """Entity factory: client.Gist().list() / client.Gist().load({"id": ...})."""
        from github_sdk.entity.gist_entity import GistEntity
        return GistEntity(self, data)


    def GistComment(self, data=None) -> "GistCommentEntity":
        """Entity factory: client.GistComment().list() / client.GistComment().load({"id": ...})."""
        from github_sdk.entity.gist_comment_entity import GistCommentEntity
        return GistCommentEntity(self, data)


    def GistCommit(self, data=None) -> "GistCommitEntity":
        """Entity factory: client.GistCommit().list() / client.GistCommit().load({"id": ...})."""
        from github_sdk.entity.gist_commit_entity import GistCommitEntity
        return GistCommitEntity(self, data)


    def GistSimple(self, data=None) -> "GistSimpleEntity":
        """Entity factory: client.GistSimple().list() / client.GistSimple().load({"id": ...})."""
        from github_sdk.entity.gist_simple_entity import GistSimpleEntity
        return GistSimpleEntity(self, data)


    def Git(self, data=None) -> "GitEntity":
        """Entity factory: client.Git().list() / client.Git().load({"id": ...})."""
        from github_sdk.entity.git_entity import GitEntity
        return GitEntity(self, data)


    def GitCommit(self, data=None) -> "GitCommitEntity":
        """Entity factory: client.GitCommit().list() / client.GitCommit().load({"id": ...})."""
        from github_sdk.entity.git_commit_entity import GitCommitEntity
        return GitCommitEntity(self, data)


    def GitRef(self, data=None) -> "GitRefEntity":
        """Entity factory: client.GitRef().list() / client.GitRef().load({"id": ...})."""
        from github_sdk.entity.git_ref_entity import GitRefEntity
        return GitRefEntity(self, data)


    def GitTag(self, data=None) -> "GitTagEntity":
        """Entity factory: client.GitTag().list() / client.GitTag().load({"id": ...})."""
        from github_sdk.entity.git_tag_entity import GitTagEntity
        return GitTagEntity(self, data)


    def GitTree(self, data=None) -> "GitTreeEntity":
        """Entity factory: client.GitTree().list() / client.GitTree().load({"id": ...})."""
        from github_sdk.entity.git_tree_entity import GitTreeEntity
        return GitTreeEntity(self, data)


    def Gitignore(self, data=None) -> "GitignoreEntity":
        """Entity factory: client.Gitignore().list() / client.Gitignore().load({"id": ...})."""
        from github_sdk.entity.gitignore_entity import GitignoreEntity
        return GitignoreEntity(self, data)


    def GitignoreTemplate(self, data=None) -> "GitignoreTemplateEntity":
        """Entity factory: client.GitignoreTemplate().list() / client.GitignoreTemplate().load({"id": ...})."""
        from github_sdk.entity.gitignore_template_entity import GitignoreTemplateEntity
        return GitignoreTemplateEntity(self, data)


    def GlobalAdvisory(self, data=None) -> "GlobalAdvisoryEntity":
        """Entity factory: client.GlobalAdvisory().list() / client.GlobalAdvisory().load({"id": ...})."""
        from github_sdk.entity.global_advisory_entity import GlobalAdvisoryEntity
        return GlobalAdvisoryEntity(self, data)


    def GpgKey(self, data=None) -> "GpgKeyEntity":
        """Entity factory: client.GpgKey().list() / client.GpgKey().load({"id": ...})."""
        from github_sdk.entity.gpg_key_entity import GpgKeyEntity
        return GpgKeyEntity(self, data)


    def Hook(self, data=None) -> "HookEntity":
        """Entity factory: client.Hook().list() / client.Hook().load({"id": ...})."""
        from github_sdk.entity.hook_entity import HookEntity
        return HookEntity(self, data)


    def HookDelivery(self, data=None) -> "HookDeliveryEntity":
        """Entity factory: client.HookDelivery().list() / client.HookDelivery().load({"id": ...})."""
        from github_sdk.entity.hook_delivery_entity import HookDeliveryEntity
        return HookDeliveryEntity(self, data)


    def HookDeliveryItem(self, data=None) -> "HookDeliveryItemEntity":
        """Entity factory: client.HookDeliveryItem().list() / client.HookDeliveryItem().load({"id": ...})."""
        from github_sdk.entity.hook_delivery_item_entity import HookDeliveryItemEntity
        return HookDeliveryItemEntity(self, data)


    def HostedCompute(self, data=None) -> "HostedComputeEntity":
        """Entity factory: client.HostedCompute().list() / client.HostedCompute().load({"id": ...})."""
        from github_sdk.entity.hosted_compute_entity import HostedComputeEntity
        return HostedComputeEntity(self, data)


    def Hovercard(self, data=None) -> "HovercardEntity":
        """Entity factory: client.Hovercard().list() / client.Hovercard().load({"id": ...})."""
        from github_sdk.entity.hovercard_entity import HovercardEntity
        return HovercardEntity(self, data)


    def Import(self, data=None) -> "ImportEntity":
        """Entity factory: client.Import().list() / client.Import().load({"id": ...})."""
        from github_sdk.entity.import_entity import ImportEntity
        return ImportEntity(self, data)


    def Installation(self, data=None) -> "InstallationEntity":
        """Entity factory: client.Installation().list() / client.Installation().load({"id": ...})."""
        from github_sdk.entity.installation_entity import InstallationEntity
        return InstallationEntity(self, data)


    def InstallationToken(self, data=None) -> "InstallationTokenEntity":
        """Entity factory: client.InstallationToken().list() / client.InstallationToken().load({"id": ...})."""
        from github_sdk.entity.installation_token_entity import InstallationTokenEntity
        return InstallationTokenEntity(self, data)


    def Integration(self, data=None) -> "IntegrationEntity":
        """Entity factory: client.Integration().list() / client.Integration().load({"id": ...})."""
        from github_sdk.entity.integration_entity import IntegrationEntity
        return IntegrationEntity(self, data)


    def IntegrationInstallation(self, data=None) -> "IntegrationInstallationEntity":
        """Entity factory: client.IntegrationInstallation().list() / client.IntegrationInstallation().load({"id": ...})."""
        from github_sdk.entity.integration_installation_entity import IntegrationInstallationEntity
        return IntegrationInstallationEntity(self, data)


    def Interaction(self, data=None) -> "InteractionEntity":
        """Entity factory: client.Interaction().list() / client.Interaction().load({"id": ...})."""
        from github_sdk.entity.interaction_entity import InteractionEntity
        return InteractionEntity(self, data)


    def InteractionLimit(self, data=None) -> "InteractionLimitEntity":
        """Entity factory: client.InteractionLimit().list() / client.InteractionLimit().load({"id": ...})."""
        from github_sdk.entity.interaction_limit_entity import InteractionLimitEntity
        return InteractionLimitEntity(self, data)


    def Issue(self, data=None) -> "IssueEntity":
        """Entity factory: client.Issue().list() / client.Issue().load({"id": ...})."""
        from github_sdk.entity.issue_entity import IssueEntity
        return IssueEntity(self, data)


    def IssueType(self, data=None) -> "IssueTypeEntity":
        """Entity factory: client.IssueType().list() / client.IssueType().load({"id": ...})."""
        from github_sdk.entity.issue_type_entity import IssueTypeEntity
        return IssueTypeEntity(self, data)


    def Job(self, data=None) -> "JobEntity":
        """Entity factory: client.Job().list() / client.Job().load({"id": ...})."""
        from github_sdk.entity.job_entity import JobEntity
        return JobEntity(self, data)


    def Key(self, data=None) -> "KeyEntity":
        """Entity factory: client.Key().list() / client.Key().load({"id": ...})."""
        from github_sdk.entity.key_entity import KeyEntity
        return KeyEntity(self, data)


    def Label(self, data=None) -> "LabelEntity":
        """Entity factory: client.Label().list() / client.Label().load({"id": ...})."""
        from github_sdk.entity.label_entity import LabelEntity
        return LabelEntity(self, data)


    def Language(self, data=None) -> "LanguageEntity":
        """Entity factory: client.Language().list() / client.Language().load({"id": ...})."""
        from github_sdk.entity.language_entity import LanguageEntity
        return LanguageEntity(self, data)


    def License(self, data=None) -> "LicenseEntity":
        """Entity factory: client.License().list() / client.License().load({"id": ...})."""
        from github_sdk.entity.license_entity import LicenseEntity
        return LicenseEntity(self, data)


    def Markdown(self, data=None) -> "MarkdownEntity":
        """Entity factory: client.Markdown().list() / client.Markdown().load({"id": ...})."""
        from github_sdk.entity.markdown_entity import MarkdownEntity
        return MarkdownEntity(self, data)


    def MarketplaceListingPlan(self, data=None) -> "MarketplaceListingPlanEntity":
        """Entity factory: client.MarketplaceListingPlan().list() / client.MarketplaceListingPlan().load({"id": ...})."""
        from github_sdk.entity.marketplace_listing_plan_entity import MarketplaceListingPlanEntity
        return MarketplaceListingPlanEntity(self, data)


    def MarketplacePurchase(self, data=None) -> "MarketplacePurchaseEntity":
        """Entity factory: client.MarketplacePurchase().list() / client.MarketplacePurchase().load({"id": ...})."""
        from github_sdk.entity.marketplace_purchase_entity import MarketplacePurchaseEntity
        return MarketplacePurchaseEntity(self, data)


    def Member(self, data=None) -> "MemberEntity":
        """Entity factory: client.Member().list() / client.Member().load({"id": ...})."""
        from github_sdk.entity.member_entity import MemberEntity
        return MemberEntity(self, data)


    def Membership(self, data=None) -> "MembershipEntity":
        """Entity factory: client.Membership().list() / client.Membership().load({"id": ...})."""
        from github_sdk.entity.membership_entity import MembershipEntity
        return MembershipEntity(self, data)


    def MergedUpstream(self, data=None) -> "MergedUpstreamEntity":
        """Entity factory: client.MergedUpstream().list() / client.MergedUpstream().load({"id": ...})."""
        from github_sdk.entity.merged_upstream_entity import MergedUpstreamEntity
        return MergedUpstreamEntity(self, data)


    def Meta(self, data=None) -> "MetaEntity":
        """Entity factory: client.Meta().list() / client.Meta().load({"id": ...})."""
        from github_sdk.entity.meta_entity import MetaEntity
        return MetaEntity(self, data)


    def Metaroot(self, data=None) -> "MetarootEntity":
        """Entity factory: client.Metaroot().list() / client.Metaroot().load({"id": ...})."""
        from github_sdk.entity.metaroot_entity import MetarootEntity
        return MetarootEntity(self, data)


    def Migration(self, data=None) -> "MigrationEntity":
        """Entity factory: client.Migration().list() / client.Migration().load({"id": ...})."""
        from github_sdk.entity.migration_entity import MigrationEntity
        return MigrationEntity(self, data)


    def Milestone(self, data=None) -> "MilestoneEntity":
        """Entity factory: client.Milestone().list() / client.Milestone().load({"id": ...})."""
        from github_sdk.entity.milestone_entity import MilestoneEntity
        return MilestoneEntity(self, data)


    def MinimalRepository(self, data=None) -> "MinimalRepositoryEntity":
        """Entity factory: client.MinimalRepository().list() / client.MinimalRepository().load({"id": ...})."""
        from github_sdk.entity.minimal_repository_entity import MinimalRepositoryEntity
        return MinimalRepositoryEntity(self, data)


    def NetworkConfiguration(self, data=None) -> "NetworkConfigurationEntity":
        """Entity factory: client.NetworkConfiguration().list() / client.NetworkConfiguration().load({"id": ...})."""
        from github_sdk.entity.network_configuration_entity import NetworkConfigurationEntity
        return NetworkConfigurationEntity(self, data)


    def NetworkSetting(self, data=None) -> "NetworkSettingEntity":
        """Entity factory: client.NetworkSetting().list() / client.NetworkSetting().load({"id": ...})."""
        from github_sdk.entity.network_setting_entity import NetworkSettingEntity
        return NetworkSettingEntity(self, data)


    def OidcCustomSub(self, data=None) -> "OidcCustomSubEntity":
        """Entity factory: client.OidcCustomSub().list() / client.OidcCustomSub().load({"id": ...})."""
        from github_sdk.entity.oidc_custom_sub_entity import OidcCustomSubEntity
        return OidcCustomSubEntity(self, data)


    def OidcCustomSubRepo(self, data=None) -> "OidcCustomSubRepoEntity":
        """Entity factory: client.OidcCustomSubRepo().list() / client.OidcCustomSubRepo().load({"id": ...})."""
        from github_sdk.entity.oidc_custom_sub_repo_entity import OidcCustomSubRepoEntity
        return OidcCustomSubRepoEntity(self, data)


    def Org(self, data=None) -> "OrgEntity":
        """Entity factory: client.Org().list() / client.Org().load({"id": ...})."""
        from github_sdk.entity.org_entity import OrgEntity
        return OrgEntity(self, data)


    def OrgHook(self, data=None) -> "OrgHookEntity":
        """Entity factory: client.OrgHook().list() / client.OrgHook().load({"id": ...})."""
        from github_sdk.entity.org_hook_entity import OrgHookEntity
        return OrgHookEntity(self, data)


    def OrgMembership(self, data=None) -> "OrgMembershipEntity":
        """Entity factory: client.OrgMembership().list() / client.OrgMembership().load({"id": ...})."""
        from github_sdk.entity.org_membership_entity import OrgMembershipEntity
        return OrgMembershipEntity(self, data)


    def OrgPrivateRegistryConfiguration(self, data=None) -> "OrgPrivateRegistryConfigurationEntity":
        """Entity factory: client.OrgPrivateRegistryConfiguration().list() / client.OrgPrivateRegistryConfiguration().load({"id": ...})."""
        from github_sdk.entity.org_private_registry_configuration_entity import OrgPrivateRegistryConfigurationEntity
        return OrgPrivateRegistryConfigurationEntity(self, data)


    def OrgPrivateRegistryConfigurationWithSelectedRepository(self, data=None) -> "OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity":
        """Entity factory: client.OrgPrivateRegistryConfigurationWithSelectedRepository().list() / client.OrgPrivateRegistryConfigurationWithSelectedRepository().load({"id": ...})."""
        from github_sdk.entity.org_private_registry_configuration_with_selected_repository_entity import OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity
        return OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity(self, data)


    def OrgRepoCustomPropertyValue(self, data=None) -> "OrgRepoCustomPropertyValueEntity":
        """Entity factory: client.OrgRepoCustomPropertyValue().list() / client.OrgRepoCustomPropertyValue().load({"id": ...})."""
        from github_sdk.entity.org_repo_custom_property_value_entity import OrgRepoCustomPropertyValueEntity
        return OrgRepoCustomPropertyValueEntity(self, data)


    def Organization(self, data=None) -> "OrganizationEntity":
        """Entity factory: client.Organization().list() / client.Organization().load({"id": ...})."""
        from github_sdk.entity.organization_entity import OrganizationEntity
        return OrganizationEntity(self, data)


    def OrganizationActionsSecret(self, data=None) -> "OrganizationActionsSecretEntity":
        """Entity factory: client.OrganizationActionsSecret().list() / client.OrganizationActionsSecret().load({"id": ...})."""
        from github_sdk.entity.organization_actions_secret_entity import OrganizationActionsSecretEntity
        return OrganizationActionsSecretEntity(self, data)


    def OrganizationActionsVariable(self, data=None) -> "OrganizationActionsVariableEntity":
        """Entity factory: client.OrganizationActionsVariable().list() / client.OrganizationActionsVariable().load({"id": ...})."""
        from github_sdk.entity.organization_actions_variable_entity import OrganizationActionsVariableEntity
        return OrganizationActionsVariableEntity(self, data)


    def OrganizationDependabotSecret(self, data=None) -> "OrganizationDependabotSecretEntity":
        """Entity factory: client.OrganizationDependabotSecret().list() / client.OrganizationDependabotSecret().load({"id": ...})."""
        from github_sdk.entity.organization_dependabot_secret_entity import OrganizationDependabotSecretEntity
        return OrganizationDependabotSecretEntity(self, data)


    def OrganizationInvitation(self, data=None) -> "OrganizationInvitationEntity":
        """Entity factory: client.OrganizationInvitation().list() / client.OrganizationInvitation().load({"id": ...})."""
        from github_sdk.entity.organization_invitation_entity import OrganizationInvitationEntity
        return OrganizationInvitationEntity(self, data)


    def OrganizationProgrammaticAccessGrant(self, data=None) -> "OrganizationProgrammaticAccessGrantEntity":
        """Entity factory: client.OrganizationProgrammaticAccessGrant().list() / client.OrganizationProgrammaticAccessGrant().load({"id": ...})."""
        from github_sdk.entity.organization_programmatic_access_grant_entity import OrganizationProgrammaticAccessGrantEntity
        return OrganizationProgrammaticAccessGrantEntity(self, data)


    def OrganizationRole(self, data=None) -> "OrganizationRoleEntity":
        """Entity factory: client.OrganizationRole().list() / client.OrganizationRole().load({"id": ...})."""
        from github_sdk.entity.organization_role_entity import OrganizationRoleEntity
        return OrganizationRoleEntity(self, data)


    def OrganizationSecretScanningAlert(self, data=None) -> "OrganizationSecretScanningAlertEntity":
        """Entity factory: client.OrganizationSecretScanningAlert().list() / client.OrganizationSecretScanningAlert().load({"id": ...})."""
        from github_sdk.entity.organization_secret_scanning_alert_entity import OrganizationSecretScanningAlertEntity
        return OrganizationSecretScanningAlertEntity(self, data)


    def OutsideCollaborator(self, data=None) -> "OutsideCollaboratorEntity":
        """Entity factory: client.OutsideCollaborator().list() / client.OutsideCollaborator().load({"id": ...})."""
        from github_sdk.entity.outside_collaborator_entity import OutsideCollaboratorEntity
        return OutsideCollaboratorEntity(self, data)


    def Package(self, data=None) -> "PackageEntity":
        """Entity factory: client.Package().list() / client.Package().load({"id": ...})."""
        from github_sdk.entity.package_entity import PackageEntity
        return PackageEntity(self, data)


    def Page(self, data=None) -> "PageEntity":
        """Entity factory: client.Page().list() / client.Page().load({"id": ...})."""
        from github_sdk.entity.page_entity import PageEntity
        return PageEntity(self, data)


    def PageBuild(self, data=None) -> "PageBuildEntity":
        """Entity factory: client.PageBuild().list() / client.PageBuild().load({"id": ...})."""
        from github_sdk.entity.page_build_entity import PageBuildEntity
        return PageBuildEntity(self, data)


    def PageBuildStatus(self, data=None) -> "PageBuildStatusEntity":
        """Entity factory: client.PageBuildStatus().list() / client.PageBuildStatus().load({"id": ...})."""
        from github_sdk.entity.page_build_status_entity import PageBuildStatusEntity
        return PageBuildStatusEntity(self, data)


    def PageDeployment(self, data=None) -> "PageDeploymentEntity":
        """Entity factory: client.PageDeployment().list() / client.PageDeployment().load({"id": ...})."""
        from github_sdk.entity.page_deployment_entity import PageDeploymentEntity
        return PageDeploymentEntity(self, data)


    def PagesDeploymentStatus(self, data=None) -> "PagesDeploymentStatusEntity":
        """Entity factory: client.PagesDeploymentStatus().list() / client.PagesDeploymentStatus().load({"id": ...})."""
        from github_sdk.entity.pages_deployment_status_entity import PagesDeploymentStatusEntity
        return PagesDeploymentStatusEntity(self, data)


    def PagesHealthCheck(self, data=None) -> "PagesHealthCheckEntity":
        """Entity factory: client.PagesHealthCheck().list() / client.PagesHealthCheck().load({"id": ...})."""
        from github_sdk.entity.pages_health_check_entity import PagesHealthCheckEntity
        return PagesHealthCheckEntity(self, data)


    def Participation(self, data=None) -> "ParticipationEntity":
        """Entity factory: client.Participation().list() / client.Participation().load({"id": ...})."""
        from github_sdk.entity.participation_entity import ParticipationEntity
        return ParticipationEntity(self, data)


    def PendingDeployment(self, data=None) -> "PendingDeploymentEntity":
        """Entity factory: client.PendingDeployment().list() / client.PendingDeployment().load({"id": ...})."""
        from github_sdk.entity.pending_deployment_entity import PendingDeploymentEntity
        return PendingDeploymentEntity(self, data)


    def PorterAuthor(self, data=None) -> "PorterAuthorEntity":
        """Entity factory: client.PorterAuthor().list() / client.PorterAuthor().load({"id": ...})."""
        from github_sdk.entity.porter_author_entity import PorterAuthorEntity
        return PorterAuthorEntity(self, data)


    def PorterLargeFile(self, data=None) -> "PorterLargeFileEntity":
        """Entity factory: client.PorterLargeFile().list() / client.PorterLargeFile().load({"id": ...})."""
        from github_sdk.entity.porter_large_file_entity import PorterLargeFileEntity
        return PorterLargeFileEntity(self, data)


    def PrivateRegistry(self, data=None) -> "PrivateRegistryEntity":
        """Entity factory: client.PrivateRegistry().list() / client.PrivateRegistry().load({"id": ...})."""
        from github_sdk.entity.private_registry_entity import PrivateRegistryEntity
        return PrivateRegistryEntity(self, data)


    def PrivateUser(self, data=None) -> "PrivateUserEntity":
        """Entity factory: client.PrivateUser().list() / client.PrivateUser().load({"id": ...})."""
        from github_sdk.entity.private_user_entity import PrivateUserEntity
        return PrivateUserEntity(self, data)


    def Project(self, data=None) -> "ProjectEntity":
        """Entity factory: client.Project().list() / client.Project().load({"id": ...})."""
        from github_sdk.entity.project_entity import ProjectEntity
        return ProjectEntity(self, data)


    def ProjectCollaboratorPermission(self, data=None) -> "ProjectCollaboratorPermissionEntity":
        """Entity factory: client.ProjectCollaboratorPermission().list() / client.ProjectCollaboratorPermission().load({"id": ...})."""
        from github_sdk.entity.project_collaborator_permission_entity import ProjectCollaboratorPermissionEntity
        return ProjectCollaboratorPermissionEntity(self, data)


    def ProjectColumn(self, data=None) -> "ProjectColumnEntity":
        """Entity factory: client.ProjectColumn().list() / client.ProjectColumn().load({"id": ...})."""
        from github_sdk.entity.project_column_entity import ProjectColumnEntity
        return ProjectColumnEntity(self, data)


    def ProjectsClassic(self, data=None) -> "ProjectsClassicEntity":
        """Entity factory: client.ProjectsClassic().list() / client.ProjectsClassic().load({"id": ...})."""
        from github_sdk.entity.projects_classic_entity import ProjectsClassicEntity
        return ProjectsClassicEntity(self, data)


    def ProjectsV2(self, data=None) -> "ProjectsV2Entity":
        """Entity factory: client.ProjectsV2().list() / client.ProjectsV2().load({"id": ...})."""
        from github_sdk.entity.projects_v2_entity import ProjectsV2Entity
        return ProjectsV2Entity(self, data)


    def ProjectsV2Field(self, data=None) -> "ProjectsV2FieldEntity":
        """Entity factory: client.ProjectsV2Field().list() / client.ProjectsV2Field().load({"id": ...})."""
        from github_sdk.entity.projects_v2_field_entity import ProjectsV2FieldEntity
        return ProjectsV2FieldEntity(self, data)


    def ProjectsV2ItemSimple(self, data=None) -> "ProjectsV2ItemSimpleEntity":
        """Entity factory: client.ProjectsV2ItemSimple().list() / client.ProjectsV2ItemSimple().load({"id": ...})."""
        from github_sdk.entity.projects_v2_item_simple_entity import ProjectsV2ItemSimpleEntity
        return ProjectsV2ItemSimpleEntity(self, data)


    def ProjectsV2ItemWithContent(self, data=None) -> "ProjectsV2ItemWithContentEntity":
        """Entity factory: client.ProjectsV2ItemWithContent().list() / client.ProjectsV2ItemWithContent().load({"id": ...})."""
        from github_sdk.entity.projects_v2_item_with_content_entity import ProjectsV2ItemWithContentEntity
        return ProjectsV2ItemWithContentEntity(self, data)


    def ProtectedBranch(self, data=None) -> "ProtectedBranchEntity":
        """Entity factory: client.ProtectedBranch().list() / client.ProtectedBranch().load({"id": ...})."""
        from github_sdk.entity.protected_branch_entity import ProtectedBranchEntity
        return ProtectedBranchEntity(self, data)


    def ProtectedBranchAdminEnforced(self, data=None) -> "ProtectedBranchAdminEnforcedEntity":
        """Entity factory: client.ProtectedBranchAdminEnforced().list() / client.ProtectedBranchAdminEnforced().load({"id": ...})."""
        from github_sdk.entity.protected_branch_admin_enforced_entity import ProtectedBranchAdminEnforcedEntity
        return ProtectedBranchAdminEnforcedEntity(self, data)


    def ProtectedBranchPullRequestReview(self, data=None) -> "ProtectedBranchPullRequestReviewEntity":
        """Entity factory: client.ProtectedBranchPullRequestReview().list() / client.ProtectedBranchPullRequestReview().load({"id": ...})."""
        from github_sdk.entity.protected_branch_pull_request_review_entity import ProtectedBranchPullRequestReviewEntity
        return ProtectedBranchPullRequestReviewEntity(self, data)


    def PublicMember(self, data=None) -> "PublicMemberEntity":
        """Entity factory: client.PublicMember().list() / client.PublicMember().load({"id": ...})."""
        from github_sdk.entity.public_member_entity import PublicMemberEntity
        return PublicMemberEntity(self, data)


    def Pull(self, data=None) -> "PullEntity":
        """Entity factory: client.Pull().list() / client.Pull().load({"id": ...})."""
        from github_sdk.entity.pull_entity import PullEntity
        return PullEntity(self, data)


    def PullRequestReview(self, data=None) -> "PullRequestReviewEntity":
        """Entity factory: client.PullRequestReview().list() / client.PullRequestReview().load({"id": ...})."""
        from github_sdk.entity.pull_request_review_entity import PullRequestReviewEntity
        return PullRequestReviewEntity(self, data)


    def PullRequestReviewComment(self, data=None) -> "PullRequestReviewCommentEntity":
        """Entity factory: client.PullRequestReviewComment().list() / client.PullRequestReviewComment().load({"id": ...})."""
        from github_sdk.entity.pull_request_review_comment_entity import PullRequestReviewCommentEntity
        return PullRequestReviewCommentEntity(self, data)


    def PullRequestSimple(self, data=None) -> "PullRequestSimpleEntity":
        """Entity factory: client.PullRequestSimple().list() / client.PullRequestSimple().load({"id": ...})."""
        from github_sdk.entity.pull_request_simple_entity import PullRequestSimpleEntity
        return PullRequestSimpleEntity(self, data)


    def RateLimit(self, data=None) -> "RateLimitEntity":
        """Entity factory: client.RateLimit().list() / client.RateLimit().load({"id": ...})."""
        from github_sdk.entity.rate_limit_entity import RateLimitEntity
        return RateLimitEntity(self, data)


    def Reaction(self, data=None) -> "ReactionEntity":
        """Entity factory: client.Reaction().list() / client.Reaction().load({"id": ...})."""
        from github_sdk.entity.reaction_entity import ReactionEntity
        return ReactionEntity(self, data)


    def Referrer(self, data=None) -> "ReferrerEntity":
        """Entity factory: client.Referrer().list() / client.Referrer().load({"id": ...})."""
        from github_sdk.entity.referrer_entity import ReferrerEntity
        return ReferrerEntity(self, data)


    def Release(self, data=None) -> "ReleaseEntity":
        """Entity factory: client.Release().list() / client.Release().load({"id": ...})."""
        from github_sdk.entity.release_entity import ReleaseEntity
        return ReleaseEntity(self, data)


    def ReleaseAsset(self, data=None) -> "ReleaseAssetEntity":
        """Entity factory: client.ReleaseAsset().list() / client.ReleaseAsset().load({"id": ...})."""
        from github_sdk.entity.release_asset_entity import ReleaseAssetEntity
        return ReleaseAssetEntity(self, data)


    def ReleaseNotesContent(self, data=None) -> "ReleaseNotesContentEntity":
        """Entity factory: client.ReleaseNotesContent().list() / client.ReleaseNotesContent().load({"id": ...})."""
        from github_sdk.entity.release_notes_content_entity import ReleaseNotesContentEntity
        return ReleaseNotesContentEntity(self, data)


    def Remove(self, data=None) -> "RemoveEntity":
        """Entity factory: client.Remove().list() / client.Remove().load({"id": ...})."""
        from github_sdk.entity.remove_entity import RemoveEntity
        return RemoveEntity(self, data)


    def Repo(self, data=None) -> "RepoEntity":
        """Entity factory: client.Repo().list() / client.Repo().load({"id": ...})."""
        from github_sdk.entity.repo_entity import RepoEntity
        return RepoEntity(self, data)


    def Repository(self, data=None) -> "RepositoryEntity":
        """Entity factory: client.Repository().list() / client.Repository().load({"id": ...})."""
        from github_sdk.entity.repository_entity import RepositoryEntity
        return RepositoryEntity(self, data)


    def RepositoryAdvisory(self, data=None) -> "RepositoryAdvisoryEntity":
        """Entity factory: client.RepositoryAdvisory().list() / client.RepositoryAdvisory().load({"id": ...})."""
        from github_sdk.entity.repository_advisory_entity import RepositoryAdvisoryEntity
        return RepositoryAdvisoryEntity(self, data)


    def RepositoryCollaboratorPermission(self, data=None) -> "RepositoryCollaboratorPermissionEntity":
        """Entity factory: client.RepositoryCollaboratorPermission().list() / client.RepositoryCollaboratorPermission().load({"id": ...})."""
        from github_sdk.entity.repository_collaborator_permission_entity import RepositoryCollaboratorPermissionEntity
        return RepositoryCollaboratorPermissionEntity(self, data)


    def RepositoryInvitation(self, data=None) -> "RepositoryInvitationEntity":
        """Entity factory: client.RepositoryInvitation().list() / client.RepositoryInvitation().load({"id": ...})."""
        from github_sdk.entity.repository_invitation_entity import RepositoryInvitationEntity
        return RepositoryInvitationEntity(self, data)


    def RepositoryRuleDetailed(self, data=None) -> "RepositoryRuleDetailedEntity":
        """Entity factory: client.RepositoryRuleDetailed().list() / client.RepositoryRuleDetailed().load({"id": ...})."""
        from github_sdk.entity.repository_rule_detailed_entity import RepositoryRuleDetailedEntity
        return RepositoryRuleDetailedEntity(self, data)


    def RepositoryRuleset(self, data=None) -> "RepositoryRulesetEntity":
        """Entity factory: client.RepositoryRuleset().list() / client.RepositoryRuleset().load({"id": ...})."""
        from github_sdk.entity.repository_ruleset_entity import RepositoryRulesetEntity
        return RepositoryRulesetEntity(self, data)


    def RepositorySubscription(self, data=None) -> "RepositorySubscriptionEntity":
        """Entity factory: client.RepositorySubscription().list() / client.RepositorySubscription().load({"id": ...})."""
        from github_sdk.entity.repository_subscription_entity import RepositorySubscriptionEntity
        return RepositorySubscriptionEntity(self, data)


    def ReviewComment(self, data=None) -> "ReviewCommentEntity":
        """Entity factory: client.ReviewComment().list() / client.ReviewComment().load({"id": ...})."""
        from github_sdk.entity.review_comment_entity import ReviewCommentEntity
        return ReviewCommentEntity(self, data)


    def RuleSuite(self, data=None) -> "RuleSuiteEntity":
        """Entity factory: client.RuleSuite().list() / client.RuleSuite().load({"id": ...})."""
        from github_sdk.entity.rule_suite_entity import RuleSuiteEntity
        return RuleSuiteEntity(self, data)


    def RulesetVersion(self, data=None) -> "RulesetVersionEntity":
        """Entity factory: client.RulesetVersion().list() / client.RulesetVersion().load({"id": ...})."""
        from github_sdk.entity.ruleset_version_entity import RulesetVersionEntity
        return RulesetVersionEntity(self, data)


    def RulesetVersionWithState(self, data=None) -> "RulesetVersionWithStateEntity":
        """Entity factory: client.RulesetVersionWithState().list() / client.RulesetVersionWithState().load({"id": ...})."""
        from github_sdk.entity.ruleset_version_with_state_entity import RulesetVersionWithStateEntity
        return RulesetVersionWithStateEntity(self, data)


    def Runner(self, data=None) -> "RunnerEntity":
        """Entity factory: client.Runner().list() / client.Runner().load({"id": ...})."""
        from github_sdk.entity.runner_entity import RunnerEntity
        return RunnerEntity(self, data)


    def RunnerApplication(self, data=None) -> "RunnerApplicationEntity":
        """Entity factory: client.RunnerApplication().list() / client.RunnerApplication().load({"id": ...})."""
        from github_sdk.entity.runner_application_entity import RunnerApplicationEntity
        return RunnerApplicationEntity(self, data)


    def RunnerGroup(self, data=None) -> "RunnerGroupEntity":
        """Entity factory: client.RunnerGroup().list() / client.RunnerGroup().load({"id": ...})."""
        from github_sdk.entity.runner_group_entity import RunnerGroupEntity
        return RunnerGroupEntity(self, data)


    def Search(self, data=None) -> "SearchEntity":
        """Entity factory: client.Search().list() / client.Search().load({"id": ...})."""
        from github_sdk.entity.search_entity import SearchEntity
        return SearchEntity(self, data)


    def SecretScanning(self, data=None) -> "SecretScanningEntity":
        """Entity factory: client.SecretScanning().list() / client.SecretScanning().load({"id": ...})."""
        from github_sdk.entity.secret_scanning_entity import SecretScanningEntity
        return SecretScanningEntity(self, data)


    def SecretScanningAlert(self, data=None) -> "SecretScanningAlertEntity":
        """Entity factory: client.SecretScanningAlert().list() / client.SecretScanningAlert().load({"id": ...})."""
        from github_sdk.entity.secret_scanning_alert_entity import SecretScanningAlertEntity
        return SecretScanningAlertEntity(self, data)


    def SecretScanningLocation(self, data=None) -> "SecretScanningLocationEntity":
        """Entity factory: client.SecretScanningLocation().list() / client.SecretScanningLocation().load({"id": ...})."""
        from github_sdk.entity.secret_scanning_location_entity import SecretScanningLocationEntity
        return SecretScanningLocationEntity(self, data)


    def SecretScanningPatternConfiguration(self, data=None) -> "SecretScanningPatternConfigurationEntity":
        """Entity factory: client.SecretScanningPatternConfiguration().list() / client.SecretScanningPatternConfiguration().load({"id": ...})."""
        from github_sdk.entity.secret_scanning_pattern_configuration_entity import SecretScanningPatternConfigurationEntity
        return SecretScanningPatternConfigurationEntity(self, data)


    def SecretScanningPushProtectionBypass(self, data=None) -> "SecretScanningPushProtectionBypassEntity":
        """Entity factory: client.SecretScanningPushProtectionBypass().list() / client.SecretScanningPushProtectionBypass().load({"id": ...})."""
        from github_sdk.entity.secret_scanning_push_protection_bypass_entity import SecretScanningPushProtectionBypassEntity
        return SecretScanningPushProtectionBypassEntity(self, data)


    def SecretScanningScanHistory(self, data=None) -> "SecretScanningScanHistoryEntity":
        """Entity factory: client.SecretScanningScanHistory().list() / client.SecretScanningScanHistory().load({"id": ...})."""
        from github_sdk.entity.secret_scanning_scan_history_entity import SecretScanningScanHistoryEntity
        return SecretScanningScanHistoryEntity(self, data)


    def SecurityAdvisory(self, data=None) -> "SecurityAdvisoryEntity":
        """Entity factory: client.SecurityAdvisory().list() / client.SecurityAdvisory().load({"id": ...})."""
        from github_sdk.entity.security_advisory_entity import SecurityAdvisoryEntity
        return SecurityAdvisoryEntity(self, data)


    def SelectedAction(self, data=None) -> "SelectedActionEntity":
        """Entity factory: client.SelectedAction().list() / client.SelectedAction().load({"id": ...})."""
        from github_sdk.entity.selected_action_entity import SelectedActionEntity
        return SelectedActionEntity(self, data)


    def SelfHostedRunner(self, data=None) -> "SelfHostedRunnerEntity":
        """Entity factory: client.SelfHostedRunner().list() / client.SelfHostedRunner().load({"id": ...})."""
        from github_sdk.entity.self_hosted_runner_entity import SelfHostedRunnerEntity
        return SelfHostedRunnerEntity(self, data)


    def ShortBlob(self, data=None) -> "ShortBlobEntity":
        """Entity factory: client.ShortBlob().list() / client.ShortBlob().load({"id": ...})."""
        from github_sdk.entity.short_blob_entity import ShortBlobEntity
        return ShortBlobEntity(self, data)


    def ShortBranch(self, data=None) -> "ShortBranchEntity":
        """Entity factory: client.ShortBranch().list() / client.ShortBranch().load({"id": ...})."""
        from github_sdk.entity.short_branch_entity import ShortBranchEntity
        return ShortBranchEntity(self, data)


    def SimpleClassroom(self, data=None) -> "SimpleClassroomEntity":
        """Entity factory: client.SimpleClassroom().list() / client.SimpleClassroom().load({"id": ...})."""
        from github_sdk.entity.simple_classroom_entity import SimpleClassroomEntity
        return SimpleClassroomEntity(self, data)


    def SimpleClassroomAssignment(self, data=None) -> "SimpleClassroomAssignmentEntity":
        """Entity factory: client.SimpleClassroomAssignment().list() / client.SimpleClassroomAssignment().load({"id": ...})."""
        from github_sdk.entity.simple_classroom_assignment_entity import SimpleClassroomAssignmentEntity
        return SimpleClassroomAssignmentEntity(self, data)


    def SocialAccount(self, data=None) -> "SocialAccountEntity":
        """Entity factory: client.SocialAccount().list() / client.SocialAccount().load({"id": ...})."""
        from github_sdk.entity.social_account_entity import SocialAccountEntity
        return SocialAccountEntity(self, data)


    def SshSigningKey(self, data=None) -> "SshSigningKeyEntity":
        """Entity factory: client.SshSigningKey().list() / client.SshSigningKey().load({"id": ...})."""
        from github_sdk.entity.ssh_signing_key_entity import SshSigningKeyEntity
        return SshSigningKeyEntity(self, data)


    def Status(self, data=None) -> "StatusEntity":
        """Entity factory: client.Status().list() / client.Status().load({"id": ...})."""
        from github_sdk.entity.status_entity import StatusEntity
        return StatusEntity(self, data)


    def StatusCheckPolicy(self, data=None) -> "StatusCheckPolicyEntity":
        """Entity factory: client.StatusCheckPolicy().list() / client.StatusCheckPolicy().load({"id": ...})."""
        from github_sdk.entity.status_check_policy_entity import StatusCheckPolicyEntity
        return StatusCheckPolicyEntity(self, data)


    def Subscriber(self, data=None) -> "SubscriberEntity":
        """Entity factory: client.Subscriber().list() / client.Subscriber().load({"id": ...})."""
        from github_sdk.entity.subscriber_entity import SubscriberEntity
        return SubscriberEntity(self, data)


    def Tag(self, data=None) -> "TagEntity":
        """Entity factory: client.Tag().list() / client.Tag().load({"id": ...})."""
        from github_sdk.entity.tag_entity import TagEntity
        return TagEntity(self, data)


    def TagProtection(self, data=None) -> "TagProtectionEntity":
        """Entity factory: client.TagProtection().list() / client.TagProtection().load({"id": ...})."""
        from github_sdk.entity.tag_protection_entity import TagProtectionEntity
        return TagProtectionEntity(self, data)


    def Team(self, data=None) -> "TeamEntity":
        """Entity factory: client.Team().list() / client.Team().load({"id": ...})."""
        from github_sdk.entity.team_entity import TeamEntity
        return TeamEntity(self, data)


    def TeamSimple(self, data=None) -> "TeamSimpleEntity":
        """Entity factory: client.TeamSimple().list() / client.TeamSimple().load({"id": ...})."""
        from github_sdk.entity.team_simple_entity import TeamSimpleEntity
        return TeamSimpleEntity(self, data)


    def Thread(self, data=None) -> "ThreadEntity":
        """Entity factory: client.Thread().list() / client.Thread().load({"id": ...})."""
        from github_sdk.entity.thread_entity import ThreadEntity
        return ThreadEntity(self, data)


    def ThreadSubscription(self, data=None) -> "ThreadSubscriptionEntity":
        """Entity factory: client.ThreadSubscription().list() / client.ThreadSubscription().load({"id": ...})."""
        from github_sdk.entity.thread_subscription_entity import ThreadSubscriptionEntity
        return ThreadSubscriptionEntity(self, data)


    def Topic(self, data=None) -> "TopicEntity":
        """Entity factory: client.Topic().list() / client.Topic().load({"id": ...})."""
        from github_sdk.entity.topic_entity import TopicEntity
        return TopicEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from github_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def UserMarketplacePurchase(self, data=None) -> "UserMarketplacePurchaseEntity":
        """Entity factory: client.UserMarketplacePurchase().list() / client.UserMarketplacePurchase().load({"id": ...})."""
        from github_sdk.entity.user_marketplace_purchase_entity import UserMarketplacePurchaseEntity
        return UserMarketplacePurchaseEntity(self, data)


    def View(self, data=None) -> "ViewEntity":
        """Entity factory: client.View().list() / client.View().load({"id": ...})."""
        from github_sdk.entity.view_entity import ViewEntity
        return ViewEntity(self, data)


    def WebhookConfig(self, data=None) -> "WebhookConfigEntity":
        """Entity factory: client.WebhookConfig().list() / client.WebhookConfig().load({"id": ...})."""
        from github_sdk.entity.webhook_config_entity import WebhookConfigEntity
        return WebhookConfigEntity(self, data)


    def Workflow(self, data=None) -> "WorkflowEntity":
        """Entity factory: client.Workflow().list() / client.Workflow().load({"id": ...})."""
        from github_sdk.entity.workflow_entity import WorkflowEntity
        return WorkflowEntity(self, data)


    def WorkflowRun(self, data=None) -> "WorkflowRunEntity":
        """Entity factory: client.WorkflowRun().list() / client.WorkflowRun().load({"id": ...})."""
        from github_sdk.entity.workflow_run_entity import WorkflowRunEntity
        return WorkflowRunEntity(self, data)


    def WorkflowRunUsage(self, data=None) -> "WorkflowRunUsageEntity":
        """Entity factory: client.WorkflowRunUsage().list() / client.WorkflowRunUsage().load({"id": ...})."""
        from github_sdk.entity.workflow_run_usage_entity import WorkflowRunUsageEntity
        return WorkflowRunUsageEntity(self, data)


    def WorkflowUsage(self, data=None) -> "WorkflowUsageEntity":
        """Entity factory: client.WorkflowUsage().list() / client.WorkflowUsage().load({"id": ...})."""
        from github_sdk.entity.workflow_usage_entity import WorkflowUsageEntity
        return WorkflowUsageEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "GithubSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from github_sdk.entity.action_entity import ActionEntity
    from github_sdk.entity.actions_artifact_and_log_retention_entity import ActionsArtifactAndLogRetentionEntity
    from github_sdk.entity.actions_cache_list_entity import ActionsCacheListEntity
    from github_sdk.entity.actions_cache_usage_by_repository_entity import ActionsCacheUsageByRepositoryEntity
    from github_sdk.entity.actions_cache_usage_org_enterprise_entity import ActionsCacheUsageOrgEnterpriseEntity
    from github_sdk.entity.actions_fork_pr_contributor_approval_entity import ActionsForkPrContributorApprovalEntity
    from github_sdk.entity.actions_fork_pr_workflows_private_repo_entity import ActionsForkPrWorkflowsPrivateRepoEntity
    from github_sdk.entity.actions_get_default_workflow_permission_entity import ActionsGetDefaultWorkflowPermissionEntity
    from github_sdk.entity.actions_hosted_runner_entity import ActionsHostedRunnerEntity
    from github_sdk.entity.actions_hosted_runner_limit_entity import ActionsHostedRunnerLimitEntity
    from github_sdk.entity.actions_organization_permission_entity import ActionsOrganizationPermissionEntity
    from github_sdk.entity.actions_public_key_entity import ActionsPublicKeyEntity
    from github_sdk.entity.actions_repository_permission_entity import ActionsRepositoryPermissionEntity
    from github_sdk.entity.actions_secret_entity import ActionsSecretEntity
    from github_sdk.entity.actions_variable_entity import ActionsVariableEntity
    from github_sdk.entity.actions_workflow_access_to_repository_entity import ActionsWorkflowAccessToRepositoryEntity
    from github_sdk.entity.activity_entity import ActivityEntity
    from github_sdk.entity.add_entity import AddEntity
    from github_sdk.entity.api_insights_route_stat_entity import ApiInsightsRouteStatEntity
    from github_sdk.entity.api_insights_subject_stat_entity import ApiInsightsSubjectStatEntity
    from github_sdk.entity.api_insights_summary_stat_entity import ApiInsightsSummaryStatEntity
    from github_sdk.entity.api_insights_time_stat_entity import ApiInsightsTimeStatEntity
    from github_sdk.entity.api_insights_user_stat_entity import ApiInsightsUserStatEntity
    from github_sdk.entity.api_overview_entity import ApiOverviewEntity
    from github_sdk.entity.app_entity import AppEntity
    from github_sdk.entity.artifact_entity import ArtifactEntity
    from github_sdk.entity.assignee_entity import AssigneeEntity
    from github_sdk.entity.authentication_token_entity import AuthenticationTokenEntity
    from github_sdk.entity.authorization_entity import AuthorizationEntity
    from github_sdk.entity.autolink_entity import AutolinkEntity
    from github_sdk.entity.base_gist_entity import BaseGistEntity
    from github_sdk.entity.billing_usage_report_entity import BillingUsageReportEntity
    from github_sdk.entity.billing_usage_report_user_entity import BillingUsageReportUserEntity
    from github_sdk.entity.blob_entity import BlobEntity
    from github_sdk.entity.block_entity import BlockEntity
    from github_sdk.entity.branch_entity import BranchEntity
    from github_sdk.entity.branch_protection_entity import BranchProtectionEntity
    from github_sdk.entity.branch_restriction_policy_entity import BranchRestrictionPolicyEntity
    from github_sdk.entity.branch_short_entity import BranchShortEntity
    from github_sdk.entity.branch_with_protection_entity import BranchWithProtectionEntity
    from github_sdk.entity.campaign_entity import CampaignEntity
    from github_sdk.entity.check_entity import CheckEntity
    from github_sdk.entity.check_annotation_entity import CheckAnnotationEntity
    from github_sdk.entity.check_automated_security_fix_entity import CheckAutomatedSecurityFixEntity
    from github_sdk.entity.check_run_entity import CheckRunEntity
    from github_sdk.entity.check_suite_entity import CheckSuiteEntity
    from github_sdk.entity.check_suite_preference_entity import CheckSuitePreferenceEntity
    from github_sdk.entity.classroom_entity import ClassroomEntity
    from github_sdk.entity.classroom_accepted_assignment_entity import ClassroomAcceptedAssignmentEntity
    from github_sdk.entity.classroom_assignment_entity import ClassroomAssignmentEntity
    from github_sdk.entity.classroom_assignment_grade_entity import ClassroomAssignmentGradeEntity
    from github_sdk.entity.clone_entity import CloneEntity
    from github_sdk.entity.code_frequency_entity import CodeFrequencyEntity
    from github_sdk.entity.code_frequency_stat_entity import CodeFrequencyStatEntity
    from github_sdk.entity.code_of_conduct_entity import CodeOfConductEntity
    from github_sdk.entity.code_scanning_entity import CodeScanningEntity
    from github_sdk.entity.code_scanning_alert_entity import CodeScanningAlertEntity
    from github_sdk.entity.code_scanning_alert_instance_entity import CodeScanningAlertInstanceEntity
    from github_sdk.entity.code_scanning_alert_item_entity import CodeScanningAlertItemEntity
    from github_sdk.entity.code_scanning_analysi_entity import CodeScanningAnalysiEntity
    from github_sdk.entity.code_scanning_analysis_deletion_entity import CodeScanningAnalysisDeletionEntity
    from github_sdk.entity.code_scanning_autofix_entity import CodeScanningAutofixEntity
    from github_sdk.entity.code_scanning_autofix_commit_entity import CodeScanningAutofixCommitEntity
    from github_sdk.entity.code_scanning_codeql_database_entity import CodeScanningCodeqlDatabaseEntity
    from github_sdk.entity.code_scanning_default_setup_entity import CodeScanningDefaultSetupEntity
    from github_sdk.entity.code_scanning_organization_alert_item_entity import CodeScanningOrganizationAlertItemEntity
    from github_sdk.entity.code_scanning_sarifs_status_entity import CodeScanningSarifsStatusEntity
    from github_sdk.entity.code_scanning_variant_analysi_entity import CodeScanningVariantAnalysiEntity
    from github_sdk.entity.code_scanning_variant_analysis_repo_task_entity import CodeScanningVariantAnalysisRepoTaskEntity
    from github_sdk.entity.code_security_entity import CodeSecurityEntity
    from github_sdk.entity.code_security_configuration_entity import CodeSecurityConfigurationEntity
    from github_sdk.entity.code_security_configuration_repository_entity import CodeSecurityConfigurationRepositoryEntity
    from github_sdk.entity.code_security_default_configuration_entity import CodeSecurityDefaultConfigurationEntity
    from github_sdk.entity.codeowners_error_entity import CodeownersErrorEntity
    from github_sdk.entity.codespace_entity import CodespaceEntity
    from github_sdk.entity.collaborator_entity import CollaboratorEntity
    from github_sdk.entity.combined_billing_usage_entity import CombinedBillingUsageEntity
    from github_sdk.entity.combined_commit_status_entity import CombinedCommitStatusEntity
    from github_sdk.entity.commit_entity import CommitEntity
    from github_sdk.entity.commit_activity_entity import CommitActivityEntity
    from github_sdk.entity.commit_comment_entity import CommitCommentEntity
    from github_sdk.entity.commit_comparison_entity import CommitComparisonEntity
    from github_sdk.entity.community_profile_entity import CommunityProfileEntity
    from github_sdk.entity.content_file_entity import ContentFileEntity
    from github_sdk.entity.content_traffic_entity import ContentTrafficEntity
    from github_sdk.entity.contributor_entity import ContributorEntity
    from github_sdk.entity.copilot_entity import CopilotEntity
    from github_sdk.entity.copilot_organization_detail_entity import CopilotOrganizationDetailEntity
    from github_sdk.entity.copilot_usage_metrics_day_entity import CopilotUsageMetricsDayEntity
    from github_sdk.entity.credential_entity import CredentialEntity
    from github_sdk.entity.custom_property_entity import CustomPropertyEntity
    from github_sdk.entity.custom_property_value_entity import CustomPropertyValueEntity
    from github_sdk.entity.dependabot_entity import DependabotEntity
    from github_sdk.entity.dependabot_alert_entity import DependabotAlertEntity
    from github_sdk.entity.dependabot_alert_with_repository_entity import DependabotAlertWithRepositoryEntity
    from github_sdk.entity.dependabot_public_key_entity import DependabotPublicKeyEntity
    from github_sdk.entity.dependabot_repository_access_detail_entity import DependabotRepositoryAccessDetailEntity
    from github_sdk.entity.dependabot_secret_entity import DependabotSecretEntity
    from github_sdk.entity.dependency_graph_entity import DependencyGraphEntity
    from github_sdk.entity.dependency_graph_diff_entity import DependencyGraphDiffEntity
    from github_sdk.entity.dependency_graph_spdx_sbom_entity import DependencyGraphSpdxSbomEntity
    from github_sdk.entity.deploy_key_entity import DeployKeyEntity
    from github_sdk.entity.deployment_entity import DeploymentEntity
    from github_sdk.entity.deployment_branch_policy_entity import DeploymentBranchPolicyEntity
    from github_sdk.entity.deployment_protection_rule_entity import DeploymentProtectionRuleEntity
    from github_sdk.entity.deployment_status_entity import DeploymentStatusEntity
    from github_sdk.entity.diff_entry_entity import DiffEntryEntity
    from github_sdk.entity.email_entity import EmailEntity
    from github_sdk.entity.emoji_entity import EmojiEntity
    from github_sdk.entity.empty_object_entity import EmptyObjectEntity
    from github_sdk.entity.enterprise_team_entity import EnterpriseTeamEntity
    from github_sdk.entity.enterprise_team_membership_entity import EnterpriseTeamMembershipEntity
    from github_sdk.entity.environment_entity import EnvironmentEntity
    from github_sdk.entity.environment_approval_entity import EnvironmentApprovalEntity
    from github_sdk.entity.event_entity import EventEntity
    from github_sdk.entity.feed_entity import FeedEntity
    from github_sdk.entity.file_commit_entity import FileCommitEntity
    from github_sdk.entity.follower_entity import FollowerEntity
    from github_sdk.entity.following_entity import FollowingEntity
    from github_sdk.entity.full_repository_entity import FullRepositoryEntity
    from github_sdk.entity.gist_entity import GistEntity
    from github_sdk.entity.gist_comment_entity import GistCommentEntity
    from github_sdk.entity.gist_commit_entity import GistCommitEntity
    from github_sdk.entity.gist_simple_entity import GistSimpleEntity
    from github_sdk.entity.git_entity import GitEntity
    from github_sdk.entity.git_commit_entity import GitCommitEntity
    from github_sdk.entity.git_ref_entity import GitRefEntity
    from github_sdk.entity.git_tag_entity import GitTagEntity
    from github_sdk.entity.git_tree_entity import GitTreeEntity
    from github_sdk.entity.gitignore_entity import GitignoreEntity
    from github_sdk.entity.gitignore_template_entity import GitignoreTemplateEntity
    from github_sdk.entity.global_advisory_entity import GlobalAdvisoryEntity
    from github_sdk.entity.gpg_key_entity import GpgKeyEntity
    from github_sdk.entity.hook_entity import HookEntity
    from github_sdk.entity.hook_delivery_entity import HookDeliveryEntity
    from github_sdk.entity.hook_delivery_item_entity import HookDeliveryItemEntity
    from github_sdk.entity.hosted_compute_entity import HostedComputeEntity
    from github_sdk.entity.hovercard_entity import HovercardEntity
    from github_sdk.entity.import_entity import ImportEntity
    from github_sdk.entity.installation_entity import InstallationEntity
    from github_sdk.entity.installation_token_entity import InstallationTokenEntity
    from github_sdk.entity.integration_entity import IntegrationEntity
    from github_sdk.entity.integration_installation_entity import IntegrationInstallationEntity
    from github_sdk.entity.interaction_entity import InteractionEntity
    from github_sdk.entity.interaction_limit_entity import InteractionLimitEntity
    from github_sdk.entity.issue_entity import IssueEntity
    from github_sdk.entity.issue_type_entity import IssueTypeEntity
    from github_sdk.entity.job_entity import JobEntity
    from github_sdk.entity.key_entity import KeyEntity
    from github_sdk.entity.label_entity import LabelEntity
    from github_sdk.entity.language_entity import LanguageEntity
    from github_sdk.entity.license_entity import LicenseEntity
    from github_sdk.entity.markdown_entity import MarkdownEntity
    from github_sdk.entity.marketplace_listing_plan_entity import MarketplaceListingPlanEntity
    from github_sdk.entity.marketplace_purchase_entity import MarketplacePurchaseEntity
    from github_sdk.entity.member_entity import MemberEntity
    from github_sdk.entity.membership_entity import MembershipEntity
    from github_sdk.entity.merged_upstream_entity import MergedUpstreamEntity
    from github_sdk.entity.meta_entity import MetaEntity
    from github_sdk.entity.metaroot_entity import MetarootEntity
    from github_sdk.entity.migration_entity import MigrationEntity
    from github_sdk.entity.milestone_entity import MilestoneEntity
    from github_sdk.entity.minimal_repository_entity import MinimalRepositoryEntity
    from github_sdk.entity.network_configuration_entity import NetworkConfigurationEntity
    from github_sdk.entity.network_setting_entity import NetworkSettingEntity
    from github_sdk.entity.oidc_custom_sub_entity import OidcCustomSubEntity
    from github_sdk.entity.oidc_custom_sub_repo_entity import OidcCustomSubRepoEntity
    from github_sdk.entity.org_entity import OrgEntity
    from github_sdk.entity.org_hook_entity import OrgHookEntity
    from github_sdk.entity.org_membership_entity import OrgMembershipEntity
    from github_sdk.entity.org_private_registry_configuration_entity import OrgPrivateRegistryConfigurationEntity
    from github_sdk.entity.org_private_registry_configuration_with_selected_repository_entity import OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity
    from github_sdk.entity.org_repo_custom_property_value_entity import OrgRepoCustomPropertyValueEntity
    from github_sdk.entity.organization_entity import OrganizationEntity
    from github_sdk.entity.organization_actions_secret_entity import OrganizationActionsSecretEntity
    from github_sdk.entity.organization_actions_variable_entity import OrganizationActionsVariableEntity
    from github_sdk.entity.organization_dependabot_secret_entity import OrganizationDependabotSecretEntity
    from github_sdk.entity.organization_invitation_entity import OrganizationInvitationEntity
    from github_sdk.entity.organization_programmatic_access_grant_entity import OrganizationProgrammaticAccessGrantEntity
    from github_sdk.entity.organization_role_entity import OrganizationRoleEntity
    from github_sdk.entity.organization_secret_scanning_alert_entity import OrganizationSecretScanningAlertEntity
    from github_sdk.entity.outside_collaborator_entity import OutsideCollaboratorEntity
    from github_sdk.entity.package_entity import PackageEntity
    from github_sdk.entity.page_entity import PageEntity
    from github_sdk.entity.page_build_entity import PageBuildEntity
    from github_sdk.entity.page_build_status_entity import PageBuildStatusEntity
    from github_sdk.entity.page_deployment_entity import PageDeploymentEntity
    from github_sdk.entity.pages_deployment_status_entity import PagesDeploymentStatusEntity
    from github_sdk.entity.pages_health_check_entity import PagesHealthCheckEntity
    from github_sdk.entity.participation_entity import ParticipationEntity
    from github_sdk.entity.pending_deployment_entity import PendingDeploymentEntity
    from github_sdk.entity.porter_author_entity import PorterAuthorEntity
    from github_sdk.entity.porter_large_file_entity import PorterLargeFileEntity
    from github_sdk.entity.private_registry_entity import PrivateRegistryEntity
    from github_sdk.entity.private_user_entity import PrivateUserEntity
    from github_sdk.entity.project_entity import ProjectEntity
    from github_sdk.entity.project_collaborator_permission_entity import ProjectCollaboratorPermissionEntity
    from github_sdk.entity.project_column_entity import ProjectColumnEntity
    from github_sdk.entity.projects_classic_entity import ProjectsClassicEntity
    from github_sdk.entity.projects_v2_entity import ProjectsV2Entity
    from github_sdk.entity.projects_v2_field_entity import ProjectsV2FieldEntity
    from github_sdk.entity.projects_v2_item_simple_entity import ProjectsV2ItemSimpleEntity
    from github_sdk.entity.projects_v2_item_with_content_entity import ProjectsV2ItemWithContentEntity
    from github_sdk.entity.protected_branch_entity import ProtectedBranchEntity
    from github_sdk.entity.protected_branch_admin_enforced_entity import ProtectedBranchAdminEnforcedEntity
    from github_sdk.entity.protected_branch_pull_request_review_entity import ProtectedBranchPullRequestReviewEntity
    from github_sdk.entity.public_member_entity import PublicMemberEntity
    from github_sdk.entity.pull_entity import PullEntity
    from github_sdk.entity.pull_request_review_entity import PullRequestReviewEntity
    from github_sdk.entity.pull_request_review_comment_entity import PullRequestReviewCommentEntity
    from github_sdk.entity.pull_request_simple_entity import PullRequestSimpleEntity
    from github_sdk.entity.rate_limit_entity import RateLimitEntity
    from github_sdk.entity.reaction_entity import ReactionEntity
    from github_sdk.entity.referrer_entity import ReferrerEntity
    from github_sdk.entity.release_entity import ReleaseEntity
    from github_sdk.entity.release_asset_entity import ReleaseAssetEntity
    from github_sdk.entity.release_notes_content_entity import ReleaseNotesContentEntity
    from github_sdk.entity.remove_entity import RemoveEntity
    from github_sdk.entity.repo_entity import RepoEntity
    from github_sdk.entity.repository_entity import RepositoryEntity
    from github_sdk.entity.repository_advisory_entity import RepositoryAdvisoryEntity
    from github_sdk.entity.repository_collaborator_permission_entity import RepositoryCollaboratorPermissionEntity
    from github_sdk.entity.repository_invitation_entity import RepositoryInvitationEntity
    from github_sdk.entity.repository_rule_detailed_entity import RepositoryRuleDetailedEntity
    from github_sdk.entity.repository_ruleset_entity import RepositoryRulesetEntity
    from github_sdk.entity.repository_subscription_entity import RepositorySubscriptionEntity
    from github_sdk.entity.review_comment_entity import ReviewCommentEntity
    from github_sdk.entity.rule_suite_entity import RuleSuiteEntity
    from github_sdk.entity.ruleset_version_entity import RulesetVersionEntity
    from github_sdk.entity.ruleset_version_with_state_entity import RulesetVersionWithStateEntity
    from github_sdk.entity.runner_entity import RunnerEntity
    from github_sdk.entity.runner_application_entity import RunnerApplicationEntity
    from github_sdk.entity.runner_group_entity import RunnerGroupEntity
    from github_sdk.entity.search_entity import SearchEntity
    from github_sdk.entity.secret_scanning_entity import SecretScanningEntity
    from github_sdk.entity.secret_scanning_alert_entity import SecretScanningAlertEntity
    from github_sdk.entity.secret_scanning_location_entity import SecretScanningLocationEntity
    from github_sdk.entity.secret_scanning_pattern_configuration_entity import SecretScanningPatternConfigurationEntity
    from github_sdk.entity.secret_scanning_push_protection_bypass_entity import SecretScanningPushProtectionBypassEntity
    from github_sdk.entity.secret_scanning_scan_history_entity import SecretScanningScanHistoryEntity
    from github_sdk.entity.security_advisory_entity import SecurityAdvisoryEntity
    from github_sdk.entity.selected_action_entity import SelectedActionEntity
    from github_sdk.entity.self_hosted_runner_entity import SelfHostedRunnerEntity
    from github_sdk.entity.short_blob_entity import ShortBlobEntity
    from github_sdk.entity.short_branch_entity import ShortBranchEntity
    from github_sdk.entity.simple_classroom_entity import SimpleClassroomEntity
    from github_sdk.entity.simple_classroom_assignment_entity import SimpleClassroomAssignmentEntity
    from github_sdk.entity.social_account_entity import SocialAccountEntity
    from github_sdk.entity.ssh_signing_key_entity import SshSigningKeyEntity
    from github_sdk.entity.status_entity import StatusEntity
    from github_sdk.entity.status_check_policy_entity import StatusCheckPolicyEntity
    from github_sdk.entity.subscriber_entity import SubscriberEntity
    from github_sdk.entity.tag_entity import TagEntity
    from github_sdk.entity.tag_protection_entity import TagProtectionEntity
    from github_sdk.entity.team_entity import TeamEntity
    from github_sdk.entity.team_simple_entity import TeamSimpleEntity
    from github_sdk.entity.thread_entity import ThreadEntity
    from github_sdk.entity.thread_subscription_entity import ThreadSubscriptionEntity
    from github_sdk.entity.topic_entity import TopicEntity
    from github_sdk.entity.user_entity import UserEntity
    from github_sdk.entity.user_marketplace_purchase_entity import UserMarketplacePurchaseEntity
    from github_sdk.entity.view_entity import ViewEntity
    from github_sdk.entity.webhook_config_entity import WebhookConfigEntity
    from github_sdk.entity.workflow_entity import WorkflowEntity
    from github_sdk.entity.workflow_run_entity import WorkflowRunEntity
    from github_sdk.entity.workflow_run_usage_entity import WorkflowRunUsageEntity
    from github_sdk.entity.workflow_usage_entity import WorkflowUsageEntity
