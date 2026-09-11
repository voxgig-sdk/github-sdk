-- Github SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("github_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local GithubSDK = {}
GithubSDK.__index = GithubSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

GithubSDK._make_feature = _make_feature


function GithubSDK.new(options)
  local self = setmetatable({}, GithubSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function GithubSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function GithubSDK:get_utility()
  return Utility.copy(self._utility)
end


function GithubSDK:get_root_ctx()
  return self._rootctx
end


function GithubSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function GithubSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function GithubSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function GithubSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "GithubSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function GithubSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function GithubSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "GithubSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Action():list() / client:Action():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Action(data)
  local EntityMod = require("entity.action_entity")
  if data == nil then
    if self._action == nil then
      self._action = EntityMod.new(self, nil)
    end
    return self._action
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsArtifactAndLogRetention():list() / client:ActionsArtifactAndLogRetention():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsArtifactAndLogRetention(data)
  local EntityMod = require("entity.actions_artifact_and_log_retention_entity")
  if data == nil then
    if self._actions_artifact_and_log_retention == nil then
      self._actions_artifact_and_log_retention = EntityMod.new(self, nil)
    end
    return self._actions_artifact_and_log_retention
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsCacheList():list() / client:ActionsCacheList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsCacheList(data)
  local EntityMod = require("entity.actions_cache_list_entity")
  if data == nil then
    if self._actions_cache_list == nil then
      self._actions_cache_list = EntityMod.new(self, nil)
    end
    return self._actions_cache_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsCacheUsageByRepository():list() / client:ActionsCacheUsageByRepository():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsCacheUsageByRepository(data)
  local EntityMod = require("entity.actions_cache_usage_by_repository_entity")
  if data == nil then
    if self._actions_cache_usage_by_repository == nil then
      self._actions_cache_usage_by_repository = EntityMod.new(self, nil)
    end
    return self._actions_cache_usage_by_repository
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsCacheUsageOrgEnterprise():list() / client:ActionsCacheUsageOrgEnterprise():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsCacheUsageOrgEnterprise(data)
  local EntityMod = require("entity.actions_cache_usage_org_enterprise_entity")
  if data == nil then
    if self._actions_cache_usage_org_enterprise == nil then
      self._actions_cache_usage_org_enterprise = EntityMod.new(self, nil)
    end
    return self._actions_cache_usage_org_enterprise
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsForkPrContributorApproval():list() / client:ActionsForkPrContributorApproval():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsForkPrContributorApproval(data)
  local EntityMod = require("entity.actions_fork_pr_contributor_approval_entity")
  if data == nil then
    if self._actions_fork_pr_contributor_approval == nil then
      self._actions_fork_pr_contributor_approval = EntityMod.new(self, nil)
    end
    return self._actions_fork_pr_contributor_approval
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsForkPrWorkflowsPrivateRepo():list() / client:ActionsForkPrWorkflowsPrivateRepo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsForkPrWorkflowsPrivateRepo(data)
  local EntityMod = require("entity.actions_fork_pr_workflows_private_repo_entity")
  if data == nil then
    if self._actions_fork_pr_workflows_private_repo == nil then
      self._actions_fork_pr_workflows_private_repo = EntityMod.new(self, nil)
    end
    return self._actions_fork_pr_workflows_private_repo
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsGetDefaultWorkflowPermission():list() / client:ActionsGetDefaultWorkflowPermission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsGetDefaultWorkflowPermission(data)
  local EntityMod = require("entity.actions_get_default_workflow_permission_entity")
  if data == nil then
    if self._actions_get_default_workflow_permission == nil then
      self._actions_get_default_workflow_permission = EntityMod.new(self, nil)
    end
    return self._actions_get_default_workflow_permission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsHostedRunner():list() / client:ActionsHostedRunner():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsHostedRunner(data)
  local EntityMod = require("entity.actions_hosted_runner_entity")
  if data == nil then
    if self._actions_hosted_runner == nil then
      self._actions_hosted_runner = EntityMod.new(self, nil)
    end
    return self._actions_hosted_runner
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsHostedRunnerLimit():list() / client:ActionsHostedRunnerLimit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsHostedRunnerLimit(data)
  local EntityMod = require("entity.actions_hosted_runner_limit_entity")
  if data == nil then
    if self._actions_hosted_runner_limit == nil then
      self._actions_hosted_runner_limit = EntityMod.new(self, nil)
    end
    return self._actions_hosted_runner_limit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsOrganizationPermission():list() / client:ActionsOrganizationPermission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsOrganizationPermission(data)
  local EntityMod = require("entity.actions_organization_permission_entity")
  if data == nil then
    if self._actions_organization_permission == nil then
      self._actions_organization_permission = EntityMod.new(self, nil)
    end
    return self._actions_organization_permission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsPublicKey():list() / client:ActionsPublicKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsPublicKey(data)
  local EntityMod = require("entity.actions_public_key_entity")
  if data == nil then
    if self._actions_public_key == nil then
      self._actions_public_key = EntityMod.new(self, nil)
    end
    return self._actions_public_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsRepositoryPermission():list() / client:ActionsRepositoryPermission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsRepositoryPermission(data)
  local EntityMod = require("entity.actions_repository_permission_entity")
  if data == nil then
    if self._actions_repository_permission == nil then
      self._actions_repository_permission = EntityMod.new(self, nil)
    end
    return self._actions_repository_permission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsSecret():list() / client:ActionsSecret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsSecret(data)
  local EntityMod = require("entity.actions_secret_entity")
  if data == nil then
    if self._actions_secret == nil then
      self._actions_secret = EntityMod.new(self, nil)
    end
    return self._actions_secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsVariable():list() / client:ActionsVariable():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsVariable(data)
  local EntityMod = require("entity.actions_variable_entity")
  if data == nil then
    if self._actions_variable == nil then
      self._actions_variable = EntityMod.new(self, nil)
    end
    return self._actions_variable
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsWorkflowAccessToRepository():list() / client:ActionsWorkflowAccessToRepository():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ActionsWorkflowAccessToRepository(data)
  local EntityMod = require("entity.actions_workflow_access_to_repository_entity")
  if data == nil then
    if self._actions_workflow_access_to_repository == nil then
      self._actions_workflow_access_to_repository = EntityMod.new(self, nil)
    end
    return self._actions_workflow_access_to_repository
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Activity():list() / client:Activity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Activity(data)
  local EntityMod = require("entity.activity_entity")
  if data == nil then
    if self._activity == nil then
      self._activity = EntityMod.new(self, nil)
    end
    return self._activity
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Add():list() / client:Add():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Add(data)
  local EntityMod = require("entity.add_entity")
  if data == nil then
    if self._add == nil then
      self._add = EntityMod.new(self, nil)
    end
    return self._add
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiInsightsRouteStat():list() / client:ApiInsightsRouteStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ApiInsightsRouteStat(data)
  local EntityMod = require("entity.api_insights_route_stat_entity")
  if data == nil then
    if self._api_insights_route_stat == nil then
      self._api_insights_route_stat = EntityMod.new(self, nil)
    end
    return self._api_insights_route_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiInsightsSubjectStat():list() / client:ApiInsightsSubjectStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ApiInsightsSubjectStat(data)
  local EntityMod = require("entity.api_insights_subject_stat_entity")
  if data == nil then
    if self._api_insights_subject_stat == nil then
      self._api_insights_subject_stat = EntityMod.new(self, nil)
    end
    return self._api_insights_subject_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiInsightsSummaryStat():list() / client:ApiInsightsSummaryStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ApiInsightsSummaryStat(data)
  local EntityMod = require("entity.api_insights_summary_stat_entity")
  if data == nil then
    if self._api_insights_summary_stat == nil then
      self._api_insights_summary_stat = EntityMod.new(self, nil)
    end
    return self._api_insights_summary_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiInsightsTimeStat():list() / client:ApiInsightsTimeStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ApiInsightsTimeStat(data)
  local EntityMod = require("entity.api_insights_time_stat_entity")
  if data == nil then
    if self._api_insights_time_stat == nil then
      self._api_insights_time_stat = EntityMod.new(self, nil)
    end
    return self._api_insights_time_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiInsightsUserStat():list() / client:ApiInsightsUserStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ApiInsightsUserStat(data)
  local EntityMod = require("entity.api_insights_user_stat_entity")
  if data == nil then
    if self._api_insights_user_stat == nil then
      self._api_insights_user_stat = EntityMod.new(self, nil)
    end
    return self._api_insights_user_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiOverview():list() / client:ApiOverview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ApiOverview(data)
  local EntityMod = require("entity.api_overview_entity")
  if data == nil then
    if self._api_overview == nil then
      self._api_overview = EntityMod.new(self, nil)
    end
    return self._api_overview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:App():list() / client:App():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:App(data)
  local EntityMod = require("entity.app_entity")
  if data == nil then
    if self._app == nil then
      self._app = EntityMod.new(self, nil)
    end
    return self._app
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Artifact():list() / client:Artifact():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Artifact(data)
  local EntityMod = require("entity.artifact_entity")
  if data == nil then
    if self._artifact == nil then
      self._artifact = EntityMod.new(self, nil)
    end
    return self._artifact
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Assignee():list() / client:Assignee():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Assignee(data)
  local EntityMod = require("entity.assignee_entity")
  if data == nil then
    if self._assignee == nil then
      self._assignee = EntityMod.new(self, nil)
    end
    return self._assignee
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AuthenticationToken():list() / client:AuthenticationToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:AuthenticationToken(data)
  local EntityMod = require("entity.authentication_token_entity")
  if data == nil then
    if self._authentication_token == nil then
      self._authentication_token = EntityMod.new(self, nil)
    end
    return self._authentication_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Authorization():list() / client:Authorization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Authorization(data)
  local EntityMod = require("entity.authorization_entity")
  if data == nil then
    if self._authorization == nil then
      self._authorization = EntityMod.new(self, nil)
    end
    return self._authorization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Autolink():list() / client:Autolink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Autolink(data)
  local EntityMod = require("entity.autolink_entity")
  if data == nil then
    if self._autolink == nil then
      self._autolink = EntityMod.new(self, nil)
    end
    return self._autolink
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BaseGist():list() / client:BaseGist():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:BaseGist(data)
  local EntityMod = require("entity.base_gist_entity")
  if data == nil then
    if self._base_gist == nil then
      self._base_gist = EntityMod.new(self, nil)
    end
    return self._base_gist
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillingUsageReport():list() / client:BillingUsageReport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:BillingUsageReport(data)
  local EntityMod = require("entity.billing_usage_report_entity")
  if data == nil then
    if self._billing_usage_report == nil then
      self._billing_usage_report = EntityMod.new(self, nil)
    end
    return self._billing_usage_report
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillingUsageReportUser():list() / client:BillingUsageReportUser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:BillingUsageReportUser(data)
  local EntityMod = require("entity.billing_usage_report_user_entity")
  if data == nil then
    if self._billing_usage_report_user == nil then
      self._billing_usage_report_user = EntityMod.new(self, nil)
    end
    return self._billing_usage_report_user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Blob():list() / client:Blob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Blob(data)
  local EntityMod = require("entity.blob_entity")
  if data == nil then
    if self._blob == nil then
      self._blob = EntityMod.new(self, nil)
    end
    return self._blob
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Block():list() / client:Block():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Block(data)
  local EntityMod = require("entity.block_entity")
  if data == nil then
    if self._block == nil then
      self._block = EntityMod.new(self, nil)
    end
    return self._block
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Branch():list() / client:Branch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Branch(data)
  local EntityMod = require("entity.branch_entity")
  if data == nil then
    if self._branch == nil then
      self._branch = EntityMod.new(self, nil)
    end
    return self._branch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BranchProtection():list() / client:BranchProtection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:BranchProtection(data)
  local EntityMod = require("entity.branch_protection_entity")
  if data == nil then
    if self._branch_protection == nil then
      self._branch_protection = EntityMod.new(self, nil)
    end
    return self._branch_protection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BranchRestrictionPolicy():list() / client:BranchRestrictionPolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:BranchRestrictionPolicy(data)
  local EntityMod = require("entity.branch_restriction_policy_entity")
  if data == nil then
    if self._branch_restriction_policy == nil then
      self._branch_restriction_policy = EntityMod.new(self, nil)
    end
    return self._branch_restriction_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BranchShort():list() / client:BranchShort():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:BranchShort(data)
  local EntityMod = require("entity.branch_short_entity")
  if data == nil then
    if self._branch_short == nil then
      self._branch_short = EntityMod.new(self, nil)
    end
    return self._branch_short
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BranchWithProtection():list() / client:BranchWithProtection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:BranchWithProtection(data)
  local EntityMod = require("entity.branch_with_protection_entity")
  if data == nil then
    if self._branch_with_protection == nil then
      self._branch_with_protection = EntityMod.new(self, nil)
    end
    return self._branch_with_protection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Campaign():list() / client:Campaign():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Campaign(data)
  local EntityMod = require("entity.campaign_entity")
  if data == nil then
    if self._campaign == nil then
      self._campaign = EntityMod.new(self, nil)
    end
    return self._campaign
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Check():list() / client:Check():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Check(data)
  local EntityMod = require("entity.check_entity")
  if data == nil then
    if self._check == nil then
      self._check = EntityMod.new(self, nil)
    end
    return self._check
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CheckAnnotation():list() / client:CheckAnnotation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CheckAnnotation(data)
  local EntityMod = require("entity.check_annotation_entity")
  if data == nil then
    if self._check_annotation == nil then
      self._check_annotation = EntityMod.new(self, nil)
    end
    return self._check_annotation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CheckAutomatedSecurityFix():list() / client:CheckAutomatedSecurityFix():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CheckAutomatedSecurityFix(data)
  local EntityMod = require("entity.check_automated_security_fix_entity")
  if data == nil then
    if self._check_automated_security_fix == nil then
      self._check_automated_security_fix = EntityMod.new(self, nil)
    end
    return self._check_automated_security_fix
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CheckRun():list() / client:CheckRun():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CheckRun(data)
  local EntityMod = require("entity.check_run_entity")
  if data == nil then
    if self._check_run == nil then
      self._check_run = EntityMod.new(self, nil)
    end
    return self._check_run
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CheckSuite():list() / client:CheckSuite():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CheckSuite(data)
  local EntityMod = require("entity.check_suite_entity")
  if data == nil then
    if self._check_suite == nil then
      self._check_suite = EntityMod.new(self, nil)
    end
    return self._check_suite
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CheckSuitePreference():list() / client:CheckSuitePreference():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CheckSuitePreference(data)
  local EntityMod = require("entity.check_suite_preference_entity")
  if data == nil then
    if self._check_suite_preference == nil then
      self._check_suite_preference = EntityMod.new(self, nil)
    end
    return self._check_suite_preference
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Classroom():list() / client:Classroom():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Classroom(data)
  local EntityMod = require("entity.classroom_entity")
  if data == nil then
    if self._classroom == nil then
      self._classroom = EntityMod.new(self, nil)
    end
    return self._classroom
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ClassroomAcceptedAssignment():list() / client:ClassroomAcceptedAssignment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ClassroomAcceptedAssignment(data)
  local EntityMod = require("entity.classroom_accepted_assignment_entity")
  if data == nil then
    if self._classroom_accepted_assignment == nil then
      self._classroom_accepted_assignment = EntityMod.new(self, nil)
    end
    return self._classroom_accepted_assignment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ClassroomAssignment():list() / client:ClassroomAssignment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ClassroomAssignment(data)
  local EntityMod = require("entity.classroom_assignment_entity")
  if data == nil then
    if self._classroom_assignment == nil then
      self._classroom_assignment = EntityMod.new(self, nil)
    end
    return self._classroom_assignment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ClassroomAssignmentGrade():list() / client:ClassroomAssignmentGrade():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ClassroomAssignmentGrade(data)
  local EntityMod = require("entity.classroom_assignment_grade_entity")
  if data == nil then
    if self._classroom_assignment_grade == nil then
      self._classroom_assignment_grade = EntityMod.new(self, nil)
    end
    return self._classroom_assignment_grade
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Clone():list() / client:Clone():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Clone(data)
  local EntityMod = require("entity.clone_entity")
  if data == nil then
    if self._clone == nil then
      self._clone = EntityMod.new(self, nil)
    end
    return self._clone
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeFrequency():list() / client:CodeFrequency():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeFrequency(data)
  local EntityMod = require("entity.code_frequency_entity")
  if data == nil then
    if self._code_frequency == nil then
      self._code_frequency = EntityMod.new(self, nil)
    end
    return self._code_frequency
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeFrequencyStat():list() / client:CodeFrequencyStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeFrequencyStat(data)
  local EntityMod = require("entity.code_frequency_stat_entity")
  if data == nil then
    if self._code_frequency_stat == nil then
      self._code_frequency_stat = EntityMod.new(self, nil)
    end
    return self._code_frequency_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeOfConduct():list() / client:CodeOfConduct():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeOfConduct(data)
  local EntityMod = require("entity.code_of_conduct_entity")
  if data == nil then
    if self._code_of_conduct == nil then
      self._code_of_conduct = EntityMod.new(self, nil)
    end
    return self._code_of_conduct
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanning():list() / client:CodeScanning():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanning(data)
  local EntityMod = require("entity.code_scanning_entity")
  if data == nil then
    if self._code_scanning == nil then
      self._code_scanning = EntityMod.new(self, nil)
    end
    return self._code_scanning
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningAlert():list() / client:CodeScanningAlert():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningAlert(data)
  local EntityMod = require("entity.code_scanning_alert_entity")
  if data == nil then
    if self._code_scanning_alert == nil then
      self._code_scanning_alert = EntityMod.new(self, nil)
    end
    return self._code_scanning_alert
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningAlertInstance():list() / client:CodeScanningAlertInstance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningAlertInstance(data)
  local EntityMod = require("entity.code_scanning_alert_instance_entity")
  if data == nil then
    if self._code_scanning_alert_instance == nil then
      self._code_scanning_alert_instance = EntityMod.new(self, nil)
    end
    return self._code_scanning_alert_instance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningAlertItem():list() / client:CodeScanningAlertItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningAlertItem(data)
  local EntityMod = require("entity.code_scanning_alert_item_entity")
  if data == nil then
    if self._code_scanning_alert_item == nil then
      self._code_scanning_alert_item = EntityMod.new(self, nil)
    end
    return self._code_scanning_alert_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningAnalysi():list() / client:CodeScanningAnalysi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningAnalysi(data)
  local EntityMod = require("entity.code_scanning_analysi_entity")
  if data == nil then
    if self._code_scanning_analysi == nil then
      self._code_scanning_analysi = EntityMod.new(self, nil)
    end
    return self._code_scanning_analysi
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningAnalysisDeletion():list() / client:CodeScanningAnalysisDeletion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningAnalysisDeletion(data)
  local EntityMod = require("entity.code_scanning_analysis_deletion_entity")
  if data == nil then
    if self._code_scanning_analysis_deletion == nil then
      self._code_scanning_analysis_deletion = EntityMod.new(self, nil)
    end
    return self._code_scanning_analysis_deletion
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningAutofix():list() / client:CodeScanningAutofix():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningAutofix(data)
  local EntityMod = require("entity.code_scanning_autofix_entity")
  if data == nil then
    if self._code_scanning_autofix == nil then
      self._code_scanning_autofix = EntityMod.new(self, nil)
    end
    return self._code_scanning_autofix
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningAutofixCommit():list() / client:CodeScanningAutofixCommit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningAutofixCommit(data)
  local EntityMod = require("entity.code_scanning_autofix_commit_entity")
  if data == nil then
    if self._code_scanning_autofix_commit == nil then
      self._code_scanning_autofix_commit = EntityMod.new(self, nil)
    end
    return self._code_scanning_autofix_commit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningCodeqlDatabase():list() / client:CodeScanningCodeqlDatabase():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningCodeqlDatabase(data)
  local EntityMod = require("entity.code_scanning_codeql_database_entity")
  if data == nil then
    if self._code_scanning_codeql_database == nil then
      self._code_scanning_codeql_database = EntityMod.new(self, nil)
    end
    return self._code_scanning_codeql_database
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningDefaultSetup():list() / client:CodeScanningDefaultSetup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningDefaultSetup(data)
  local EntityMod = require("entity.code_scanning_default_setup_entity")
  if data == nil then
    if self._code_scanning_default_setup == nil then
      self._code_scanning_default_setup = EntityMod.new(self, nil)
    end
    return self._code_scanning_default_setup
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningOrganizationAlertItem():list() / client:CodeScanningOrganizationAlertItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningOrganizationAlertItem(data)
  local EntityMod = require("entity.code_scanning_organization_alert_item_entity")
  if data == nil then
    if self._code_scanning_organization_alert_item == nil then
      self._code_scanning_organization_alert_item = EntityMod.new(self, nil)
    end
    return self._code_scanning_organization_alert_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningSarifsStatus():list() / client:CodeScanningSarifsStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningSarifsStatus(data)
  local EntityMod = require("entity.code_scanning_sarifs_status_entity")
  if data == nil then
    if self._code_scanning_sarifs_status == nil then
      self._code_scanning_sarifs_status = EntityMod.new(self, nil)
    end
    return self._code_scanning_sarifs_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningVariantAnalysi():list() / client:CodeScanningVariantAnalysi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningVariantAnalysi(data)
  local EntityMod = require("entity.code_scanning_variant_analysi_entity")
  if data == nil then
    if self._code_scanning_variant_analysi == nil then
      self._code_scanning_variant_analysi = EntityMod.new(self, nil)
    end
    return self._code_scanning_variant_analysi
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeScanningVariantAnalysisRepoTask():list() / client:CodeScanningVariantAnalysisRepoTask():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeScanningVariantAnalysisRepoTask(data)
  local EntityMod = require("entity.code_scanning_variant_analysis_repo_task_entity")
  if data == nil then
    if self._code_scanning_variant_analysis_repo_task == nil then
      self._code_scanning_variant_analysis_repo_task = EntityMod.new(self, nil)
    end
    return self._code_scanning_variant_analysis_repo_task
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeSecurity():list() / client:CodeSecurity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeSecurity(data)
  local EntityMod = require("entity.code_security_entity")
  if data == nil then
    if self._code_security == nil then
      self._code_security = EntityMod.new(self, nil)
    end
    return self._code_security
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeSecurityConfiguration():list() / client:CodeSecurityConfiguration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeSecurityConfiguration(data)
  local EntityMod = require("entity.code_security_configuration_entity")
  if data == nil then
    if self._code_security_configuration == nil then
      self._code_security_configuration = EntityMod.new(self, nil)
    end
    return self._code_security_configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeSecurityConfigurationRepository():list() / client:CodeSecurityConfigurationRepository():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeSecurityConfigurationRepository(data)
  local EntityMod = require("entity.code_security_configuration_repository_entity")
  if data == nil then
    if self._code_security_configuration_repository == nil then
      self._code_security_configuration_repository = EntityMod.new(self, nil)
    end
    return self._code_security_configuration_repository
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeSecurityDefaultConfiguration():list() / client:CodeSecurityDefaultConfiguration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeSecurityDefaultConfiguration(data)
  local EntityMod = require("entity.code_security_default_configuration_entity")
  if data == nil then
    if self._code_security_default_configuration == nil then
      self._code_security_default_configuration = EntityMod.new(self, nil)
    end
    return self._code_security_default_configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CodeownersError():list() / client:CodeownersError():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CodeownersError(data)
  local EntityMod = require("entity.codeowners_error_entity")
  if data == nil then
    if self._codeowners_error == nil then
      self._codeowners_error = EntityMod.new(self, nil)
    end
    return self._codeowners_error
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Codespace():list() / client:Codespace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Codespace(data)
  local EntityMod = require("entity.codespace_entity")
  if data == nil then
    if self._codespace == nil then
      self._codespace = EntityMod.new(self, nil)
    end
    return self._codespace
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Collaborator():list() / client:Collaborator():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Collaborator(data)
  local EntityMod = require("entity.collaborator_entity")
  if data == nil then
    if self._collaborator == nil then
      self._collaborator = EntityMod.new(self, nil)
    end
    return self._collaborator
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CombinedBillingUsage():list() / client:CombinedBillingUsage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CombinedBillingUsage(data)
  local EntityMod = require("entity.combined_billing_usage_entity")
  if data == nil then
    if self._combined_billing_usage == nil then
      self._combined_billing_usage = EntityMod.new(self, nil)
    end
    return self._combined_billing_usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CombinedCommitStatus():list() / client:CombinedCommitStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CombinedCommitStatus(data)
  local EntityMod = require("entity.combined_commit_status_entity")
  if data == nil then
    if self._combined_commit_status == nil then
      self._combined_commit_status = EntityMod.new(self, nil)
    end
    return self._combined_commit_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Commit():list() / client:Commit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Commit(data)
  local EntityMod = require("entity.commit_entity")
  if data == nil then
    if self._commit == nil then
      self._commit = EntityMod.new(self, nil)
    end
    return self._commit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CommitActivity():list() / client:CommitActivity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CommitActivity(data)
  local EntityMod = require("entity.commit_activity_entity")
  if data == nil then
    if self._commit_activity == nil then
      self._commit_activity = EntityMod.new(self, nil)
    end
    return self._commit_activity
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CommitComment():list() / client:CommitComment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CommitComment(data)
  local EntityMod = require("entity.commit_comment_entity")
  if data == nil then
    if self._commit_comment == nil then
      self._commit_comment = EntityMod.new(self, nil)
    end
    return self._commit_comment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CommitComparison():list() / client:CommitComparison():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CommitComparison(data)
  local EntityMod = require("entity.commit_comparison_entity")
  if data == nil then
    if self._commit_comparison == nil then
      self._commit_comparison = EntityMod.new(self, nil)
    end
    return self._commit_comparison
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CommunityProfile():list() / client:CommunityProfile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CommunityProfile(data)
  local EntityMod = require("entity.community_profile_entity")
  if data == nil then
    if self._community_profile == nil then
      self._community_profile = EntityMod.new(self, nil)
    end
    return self._community_profile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContentFile():list() / client:ContentFile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ContentFile(data)
  local EntityMod = require("entity.content_file_entity")
  if data == nil then
    if self._content_file == nil then
      self._content_file = EntityMod.new(self, nil)
    end
    return self._content_file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContentTraffic():list() / client:ContentTraffic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ContentTraffic(data)
  local EntityMod = require("entity.content_traffic_entity")
  if data == nil then
    if self._content_traffic == nil then
      self._content_traffic = EntityMod.new(self, nil)
    end
    return self._content_traffic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Contributor():list() / client:Contributor():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Contributor(data)
  local EntityMod = require("entity.contributor_entity")
  if data == nil then
    if self._contributor == nil then
      self._contributor = EntityMod.new(self, nil)
    end
    return self._contributor
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Copilot():list() / client:Copilot():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Copilot(data)
  local EntityMod = require("entity.copilot_entity")
  if data == nil then
    if self._copilot == nil then
      self._copilot = EntityMod.new(self, nil)
    end
    return self._copilot
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CopilotOrganizationDetail():list() / client:CopilotOrganizationDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CopilotOrganizationDetail(data)
  local EntityMod = require("entity.copilot_organization_detail_entity")
  if data == nil then
    if self._copilot_organization_detail == nil then
      self._copilot_organization_detail = EntityMod.new(self, nil)
    end
    return self._copilot_organization_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CopilotUsageMetricsDay():list() / client:CopilotUsageMetricsDay():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CopilotUsageMetricsDay(data)
  local EntityMod = require("entity.copilot_usage_metrics_day_entity")
  if data == nil then
    if self._copilot_usage_metrics_day == nil then
      self._copilot_usage_metrics_day = EntityMod.new(self, nil)
    end
    return self._copilot_usage_metrics_day
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Credential():list() / client:Credential():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Credential(data)
  local EntityMod = require("entity.credential_entity")
  if data == nil then
    if self._credential == nil then
      self._credential = EntityMod.new(self, nil)
    end
    return self._credential
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomProperty():list() / client:CustomProperty():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CustomProperty(data)
  local EntityMod = require("entity.custom_property_entity")
  if data == nil then
    if self._custom_property == nil then
      self._custom_property = EntityMod.new(self, nil)
    end
    return self._custom_property
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomPropertyValue():list() / client:CustomPropertyValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:CustomPropertyValue(data)
  local EntityMod = require("entity.custom_property_value_entity")
  if data == nil then
    if self._custom_property_value == nil then
      self._custom_property_value = EntityMod.new(self, nil)
    end
    return self._custom_property_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Dependabot():list() / client:Dependabot():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Dependabot(data)
  local EntityMod = require("entity.dependabot_entity")
  if data == nil then
    if self._dependabot == nil then
      self._dependabot = EntityMod.new(self, nil)
    end
    return self._dependabot
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DependabotAlert():list() / client:DependabotAlert():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DependabotAlert(data)
  local EntityMod = require("entity.dependabot_alert_entity")
  if data == nil then
    if self._dependabot_alert == nil then
      self._dependabot_alert = EntityMod.new(self, nil)
    end
    return self._dependabot_alert
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DependabotAlertWithRepository():list() / client:DependabotAlertWithRepository():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DependabotAlertWithRepository(data)
  local EntityMod = require("entity.dependabot_alert_with_repository_entity")
  if data == nil then
    if self._dependabot_alert_with_repository == nil then
      self._dependabot_alert_with_repository = EntityMod.new(self, nil)
    end
    return self._dependabot_alert_with_repository
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DependabotPublicKey():list() / client:DependabotPublicKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DependabotPublicKey(data)
  local EntityMod = require("entity.dependabot_public_key_entity")
  if data == nil then
    if self._dependabot_public_key == nil then
      self._dependabot_public_key = EntityMod.new(self, nil)
    end
    return self._dependabot_public_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DependabotRepositoryAccessDetail():list() / client:DependabotRepositoryAccessDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DependabotRepositoryAccessDetail(data)
  local EntityMod = require("entity.dependabot_repository_access_detail_entity")
  if data == nil then
    if self._dependabot_repository_access_detail == nil then
      self._dependabot_repository_access_detail = EntityMod.new(self, nil)
    end
    return self._dependabot_repository_access_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DependabotSecret():list() / client:DependabotSecret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DependabotSecret(data)
  local EntityMod = require("entity.dependabot_secret_entity")
  if data == nil then
    if self._dependabot_secret == nil then
      self._dependabot_secret = EntityMod.new(self, nil)
    end
    return self._dependabot_secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DependencyGraph():list() / client:DependencyGraph():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DependencyGraph(data)
  local EntityMod = require("entity.dependency_graph_entity")
  if data == nil then
    if self._dependency_graph == nil then
      self._dependency_graph = EntityMod.new(self, nil)
    end
    return self._dependency_graph
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DependencyGraphDiff():list() / client:DependencyGraphDiff():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DependencyGraphDiff(data)
  local EntityMod = require("entity.dependency_graph_diff_entity")
  if data == nil then
    if self._dependency_graph_diff == nil then
      self._dependency_graph_diff = EntityMod.new(self, nil)
    end
    return self._dependency_graph_diff
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DependencyGraphSpdxSbom():list() / client:DependencyGraphSpdxSbom():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DependencyGraphSpdxSbom(data)
  local EntityMod = require("entity.dependency_graph_spdx_sbom_entity")
  if data == nil then
    if self._dependency_graph_spdx_sbom == nil then
      self._dependency_graph_spdx_sbom = EntityMod.new(self, nil)
    end
    return self._dependency_graph_spdx_sbom
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeployKey():list() / client:DeployKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DeployKey(data)
  local EntityMod = require("entity.deploy_key_entity")
  if data == nil then
    if self._deploy_key == nil then
      self._deploy_key = EntityMod.new(self, nil)
    end
    return self._deploy_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Deployment():list() / client:Deployment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Deployment(data)
  local EntityMod = require("entity.deployment_entity")
  if data == nil then
    if self._deployment == nil then
      self._deployment = EntityMod.new(self, nil)
    end
    return self._deployment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeploymentBranchPolicy():list() / client:DeploymentBranchPolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DeploymentBranchPolicy(data)
  local EntityMod = require("entity.deployment_branch_policy_entity")
  if data == nil then
    if self._deployment_branch_policy == nil then
      self._deployment_branch_policy = EntityMod.new(self, nil)
    end
    return self._deployment_branch_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeploymentProtectionRule():list() / client:DeploymentProtectionRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DeploymentProtectionRule(data)
  local EntityMod = require("entity.deployment_protection_rule_entity")
  if data == nil then
    if self._deployment_protection_rule == nil then
      self._deployment_protection_rule = EntityMod.new(self, nil)
    end
    return self._deployment_protection_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeploymentStatus():list() / client:DeploymentStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DeploymentStatus(data)
  local EntityMod = require("entity.deployment_status_entity")
  if data == nil then
    if self._deployment_status == nil then
      self._deployment_status = EntityMod.new(self, nil)
    end
    return self._deployment_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DiffEntry():list() / client:DiffEntry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:DiffEntry(data)
  local EntityMod = require("entity.diff_entry_entity")
  if data == nil then
    if self._diff_entry == nil then
      self._diff_entry = EntityMod.new(self, nil)
    end
    return self._diff_entry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Email():list() / client:Email():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Email(data)
  local EntityMod = require("entity.email_entity")
  if data == nil then
    if self._email == nil then
      self._email = EntityMod.new(self, nil)
    end
    return self._email
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Emoji():list() / client:Emoji():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Emoji(data)
  local EntityMod = require("entity.emoji_entity")
  if data == nil then
    if self._emoji == nil then
      self._emoji = EntityMod.new(self, nil)
    end
    return self._emoji
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmptyObject():list() / client:EmptyObject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:EmptyObject(data)
  local EntityMod = require("entity.empty_object_entity")
  if data == nil then
    if self._empty_object == nil then
      self._empty_object = EntityMod.new(self, nil)
    end
    return self._empty_object
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnterpriseTeam():list() / client:EnterpriseTeam():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:EnterpriseTeam(data)
  local EntityMod = require("entity.enterprise_team_entity")
  if data == nil then
    if self._enterprise_team == nil then
      self._enterprise_team = EntityMod.new(self, nil)
    end
    return self._enterprise_team
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnterpriseTeamMembership():list() / client:EnterpriseTeamMembership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:EnterpriseTeamMembership(data)
  local EntityMod = require("entity.enterprise_team_membership_entity")
  if data == nil then
    if self._enterprise_team_membership == nil then
      self._enterprise_team_membership = EntityMod.new(self, nil)
    end
    return self._enterprise_team_membership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Environment():list() / client:Environment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Environment(data)
  local EntityMod = require("entity.environment_entity")
  if data == nil then
    if self._environment == nil then
      self._environment = EntityMod.new(self, nil)
    end
    return self._environment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnvironmentApproval():list() / client:EnvironmentApproval():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:EnvironmentApproval(data)
  local EntityMod = require("entity.environment_approval_entity")
  if data == nil then
    if self._environment_approval == nil then
      self._environment_approval = EntityMod.new(self, nil)
    end
    return self._environment_approval
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Event():list() / client:Event():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Event(data)
  local EntityMod = require("entity.event_entity")
  if data == nil then
    if self._event == nil then
      self._event = EntityMod.new(self, nil)
    end
    return self._event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Feed():list() / client:Feed():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Feed(data)
  local EntityMod = require("entity.feed_entity")
  if data == nil then
    if self._feed == nil then
      self._feed = EntityMod.new(self, nil)
    end
    return self._feed
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FileCommit():list() / client:FileCommit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:FileCommit(data)
  local EntityMod = require("entity.file_commit_entity")
  if data == nil then
    if self._file_commit == nil then
      self._file_commit = EntityMod.new(self, nil)
    end
    return self._file_commit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Follower():list() / client:Follower():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Follower(data)
  local EntityMod = require("entity.follower_entity")
  if data == nil then
    if self._follower == nil then
      self._follower = EntityMod.new(self, nil)
    end
    return self._follower
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Following():list() / client:Following():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Following(data)
  local EntityMod = require("entity.following_entity")
  if data == nil then
    if self._following == nil then
      self._following = EntityMod.new(self, nil)
    end
    return self._following
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FullRepository():list() / client:FullRepository():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:FullRepository(data)
  local EntityMod = require("entity.full_repository_entity")
  if data == nil then
    if self._full_repository == nil then
      self._full_repository = EntityMod.new(self, nil)
    end
    return self._full_repository
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Gist():list() / client:Gist():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Gist(data)
  local EntityMod = require("entity.gist_entity")
  if data == nil then
    if self._gist == nil then
      self._gist = EntityMod.new(self, nil)
    end
    return self._gist
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GistComment():list() / client:GistComment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:GistComment(data)
  local EntityMod = require("entity.gist_comment_entity")
  if data == nil then
    if self._gist_comment == nil then
      self._gist_comment = EntityMod.new(self, nil)
    end
    return self._gist_comment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GistCommit():list() / client:GistCommit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:GistCommit(data)
  local EntityMod = require("entity.gist_commit_entity")
  if data == nil then
    if self._gist_commit == nil then
      self._gist_commit = EntityMod.new(self, nil)
    end
    return self._gist_commit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GistSimple():list() / client:GistSimple():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:GistSimple(data)
  local EntityMod = require("entity.gist_simple_entity")
  if data == nil then
    if self._gist_simple == nil then
      self._gist_simple = EntityMod.new(self, nil)
    end
    return self._gist_simple
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Git():list() / client:Git():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Git(data)
  local EntityMod = require("entity.git_entity")
  if data == nil then
    if self._git == nil then
      self._git = EntityMod.new(self, nil)
    end
    return self._git
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GitCommit():list() / client:GitCommit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:GitCommit(data)
  local EntityMod = require("entity.git_commit_entity")
  if data == nil then
    if self._git_commit == nil then
      self._git_commit = EntityMod.new(self, nil)
    end
    return self._git_commit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GitRef():list() / client:GitRef():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:GitRef(data)
  local EntityMod = require("entity.git_ref_entity")
  if data == nil then
    if self._git_ref == nil then
      self._git_ref = EntityMod.new(self, nil)
    end
    return self._git_ref
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GitTag():list() / client:GitTag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:GitTag(data)
  local EntityMod = require("entity.git_tag_entity")
  if data == nil then
    if self._git_tag == nil then
      self._git_tag = EntityMod.new(self, nil)
    end
    return self._git_tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GitTree():list() / client:GitTree():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:GitTree(data)
  local EntityMod = require("entity.git_tree_entity")
  if data == nil then
    if self._git_tree == nil then
      self._git_tree = EntityMod.new(self, nil)
    end
    return self._git_tree
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Gitignore():list() / client:Gitignore():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Gitignore(data)
  local EntityMod = require("entity.gitignore_entity")
  if data == nil then
    if self._gitignore == nil then
      self._gitignore = EntityMod.new(self, nil)
    end
    return self._gitignore
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GitignoreTemplate():list() / client:GitignoreTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:GitignoreTemplate(data)
  local EntityMod = require("entity.gitignore_template_entity")
  if data == nil then
    if self._gitignore_template == nil then
      self._gitignore_template = EntityMod.new(self, nil)
    end
    return self._gitignore_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GlobalAdvisory():list() / client:GlobalAdvisory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:GlobalAdvisory(data)
  local EntityMod = require("entity.global_advisory_entity")
  if data == nil then
    if self._global_advisory == nil then
      self._global_advisory = EntityMod.new(self, nil)
    end
    return self._global_advisory
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GpgKey():list() / client:GpgKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:GpgKey(data)
  local EntityMod = require("entity.gpg_key_entity")
  if data == nil then
    if self._gpg_key == nil then
      self._gpg_key = EntityMod.new(self, nil)
    end
    return self._gpg_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Hook():list() / client:Hook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Hook(data)
  local EntityMod = require("entity.hook_entity")
  if data == nil then
    if self._hook == nil then
      self._hook = EntityMod.new(self, nil)
    end
    return self._hook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:HookDelivery():list() / client:HookDelivery():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:HookDelivery(data)
  local EntityMod = require("entity.hook_delivery_entity")
  if data == nil then
    if self._hook_delivery == nil then
      self._hook_delivery = EntityMod.new(self, nil)
    end
    return self._hook_delivery
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:HookDeliveryItem():list() / client:HookDeliveryItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:HookDeliveryItem(data)
  local EntityMod = require("entity.hook_delivery_item_entity")
  if data == nil then
    if self._hook_delivery_item == nil then
      self._hook_delivery_item = EntityMod.new(self, nil)
    end
    return self._hook_delivery_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:HostedCompute():list() / client:HostedCompute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:HostedCompute(data)
  local EntityMod = require("entity.hosted_compute_entity")
  if data == nil then
    if self._hosted_compute == nil then
      self._hosted_compute = EntityMod.new(self, nil)
    end
    return self._hosted_compute
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Hovercard():list() / client:Hovercard():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Hovercard(data)
  local EntityMod = require("entity.hovercard_entity")
  if data == nil then
    if self._hovercard == nil then
      self._hovercard = EntityMod.new(self, nil)
    end
    return self._hovercard
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Import():list() / client:Import():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Import(data)
  local EntityMod = require("entity.import_entity")
  if data == nil then
    if self._import == nil then
      self._import = EntityMod.new(self, nil)
    end
    return self._import
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Installation():list() / client:Installation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Installation(data)
  local EntityMod = require("entity.installation_entity")
  if data == nil then
    if self._installation == nil then
      self._installation = EntityMod.new(self, nil)
    end
    return self._installation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InstallationToken():list() / client:InstallationToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:InstallationToken(data)
  local EntityMod = require("entity.installation_token_entity")
  if data == nil then
    if self._installation_token == nil then
      self._installation_token = EntityMod.new(self, nil)
    end
    return self._installation_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Integration():list() / client:Integration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Integration(data)
  local EntityMod = require("entity.integration_entity")
  if data == nil then
    if self._integration == nil then
      self._integration = EntityMod.new(self, nil)
    end
    return self._integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IntegrationInstallation():list() / client:IntegrationInstallation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:IntegrationInstallation(data)
  local EntityMod = require("entity.integration_installation_entity")
  if data == nil then
    if self._integration_installation == nil then
      self._integration_installation = EntityMod.new(self, nil)
    end
    return self._integration_installation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Interaction():list() / client:Interaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Interaction(data)
  local EntityMod = require("entity.interaction_entity")
  if data == nil then
    if self._interaction == nil then
      self._interaction = EntityMod.new(self, nil)
    end
    return self._interaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InteractionLimit():list() / client:InteractionLimit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:InteractionLimit(data)
  local EntityMod = require("entity.interaction_limit_entity")
  if data == nil then
    if self._interaction_limit == nil then
      self._interaction_limit = EntityMod.new(self, nil)
    end
    return self._interaction_limit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Issue():list() / client:Issue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Issue(data)
  local EntityMod = require("entity.issue_entity")
  if data == nil then
    if self._issue == nil then
      self._issue = EntityMod.new(self, nil)
    end
    return self._issue
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IssueType():list() / client:IssueType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:IssueType(data)
  local EntityMod = require("entity.issue_type_entity")
  if data == nil then
    if self._issue_type == nil then
      self._issue_type = EntityMod.new(self, nil)
    end
    return self._issue_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Job():list() / client:Job():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Job(data)
  local EntityMod = require("entity.job_entity")
  if data == nil then
    if self._job == nil then
      self._job = EntityMod.new(self, nil)
    end
    return self._job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Key():list() / client:Key():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Key(data)
  local EntityMod = require("entity.key_entity")
  if data == nil then
    if self._key == nil then
      self._key = EntityMod.new(self, nil)
    end
    return self._key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Label():list() / client:Label():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Label(data)
  local EntityMod = require("entity.label_entity")
  if data == nil then
    if self._label == nil then
      self._label = EntityMod.new(self, nil)
    end
    return self._label
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Language():list() / client:Language():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Language(data)
  local EntityMod = require("entity.language_entity")
  if data == nil then
    if self._language == nil then
      self._language = EntityMod.new(self, nil)
    end
    return self._language
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:License():list() / client:License():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:License(data)
  local EntityMod = require("entity.license_entity")
  if data == nil then
    if self._license == nil then
      self._license = EntityMod.new(self, nil)
    end
    return self._license
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Markdown():list() / client:Markdown():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Markdown(data)
  local EntityMod = require("entity.markdown_entity")
  if data == nil then
    if self._markdown == nil then
      self._markdown = EntityMod.new(self, nil)
    end
    return self._markdown
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MarketplaceListingPlan():list() / client:MarketplaceListingPlan():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:MarketplaceListingPlan(data)
  local EntityMod = require("entity.marketplace_listing_plan_entity")
  if data == nil then
    if self._marketplace_listing_plan == nil then
      self._marketplace_listing_plan = EntityMod.new(self, nil)
    end
    return self._marketplace_listing_plan
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MarketplacePurchase():list() / client:MarketplacePurchase():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:MarketplacePurchase(data)
  local EntityMod = require("entity.marketplace_purchase_entity")
  if data == nil then
    if self._marketplace_purchase == nil then
      self._marketplace_purchase = EntityMod.new(self, nil)
    end
    return self._marketplace_purchase
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Member():list() / client:Member():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Member(data)
  local EntityMod = require("entity.member_entity")
  if data == nil then
    if self._member == nil then
      self._member = EntityMod.new(self, nil)
    end
    return self._member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Membership():list() / client:Membership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Membership(data)
  local EntityMod = require("entity.membership_entity")
  if data == nil then
    if self._membership == nil then
      self._membership = EntityMod.new(self, nil)
    end
    return self._membership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MergedUpstream():list() / client:MergedUpstream():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:MergedUpstream(data)
  local EntityMod = require("entity.merged_upstream_entity")
  if data == nil then
    if self._merged_upstream == nil then
      self._merged_upstream = EntityMod.new(self, nil)
    end
    return self._merged_upstream
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Meta():list() / client:Meta():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Meta(data)
  local EntityMod = require("entity.meta_entity")
  if data == nil then
    if self._meta == nil then
      self._meta = EntityMod.new(self, nil)
    end
    return self._meta
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Metaroot():list() / client:Metaroot():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Metaroot(data)
  local EntityMod = require("entity.metaroot_entity")
  if data == nil then
    if self._metaroot == nil then
      self._metaroot = EntityMod.new(self, nil)
    end
    return self._metaroot
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Migration():list() / client:Migration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Migration(data)
  local EntityMod = require("entity.migration_entity")
  if data == nil then
    if self._migration == nil then
      self._migration = EntityMod.new(self, nil)
    end
    return self._migration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Milestone():list() / client:Milestone():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Milestone(data)
  local EntityMod = require("entity.milestone_entity")
  if data == nil then
    if self._milestone == nil then
      self._milestone = EntityMod.new(self, nil)
    end
    return self._milestone
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MinimalRepository():list() / client:MinimalRepository():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:MinimalRepository(data)
  local EntityMod = require("entity.minimal_repository_entity")
  if data == nil then
    if self._minimal_repository == nil then
      self._minimal_repository = EntityMod.new(self, nil)
    end
    return self._minimal_repository
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NetworkConfiguration():list() / client:NetworkConfiguration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:NetworkConfiguration(data)
  local EntityMod = require("entity.network_configuration_entity")
  if data == nil then
    if self._network_configuration == nil then
      self._network_configuration = EntityMod.new(self, nil)
    end
    return self._network_configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NetworkSetting():list() / client:NetworkSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:NetworkSetting(data)
  local EntityMod = require("entity.network_setting_entity")
  if data == nil then
    if self._network_setting == nil then
      self._network_setting = EntityMod.new(self, nil)
    end
    return self._network_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OidcCustomSub():list() / client:OidcCustomSub():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OidcCustomSub(data)
  local EntityMod = require("entity.oidc_custom_sub_entity")
  if data == nil then
    if self._oidc_custom_sub == nil then
      self._oidc_custom_sub = EntityMod.new(self, nil)
    end
    return self._oidc_custom_sub
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OidcCustomSubRepo():list() / client:OidcCustomSubRepo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OidcCustomSubRepo(data)
  local EntityMod = require("entity.oidc_custom_sub_repo_entity")
  if data == nil then
    if self._oidc_custom_sub_repo == nil then
      self._oidc_custom_sub_repo = EntityMod.new(self, nil)
    end
    return self._oidc_custom_sub_repo
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Org():list() / client:Org():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Org(data)
  local EntityMod = require("entity.org_entity")
  if data == nil then
    if self._org == nil then
      self._org = EntityMod.new(self, nil)
    end
    return self._org
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrgHook():list() / client:OrgHook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrgHook(data)
  local EntityMod = require("entity.org_hook_entity")
  if data == nil then
    if self._org_hook == nil then
      self._org_hook = EntityMod.new(self, nil)
    end
    return self._org_hook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrgMembership():list() / client:OrgMembership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrgMembership(data)
  local EntityMod = require("entity.org_membership_entity")
  if data == nil then
    if self._org_membership == nil then
      self._org_membership = EntityMod.new(self, nil)
    end
    return self._org_membership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrgPrivateRegistryConfiguration():list() / client:OrgPrivateRegistryConfiguration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrgPrivateRegistryConfiguration(data)
  local EntityMod = require("entity.org_private_registry_configuration_entity")
  if data == nil then
    if self._org_private_registry_configuration == nil then
      self._org_private_registry_configuration = EntityMod.new(self, nil)
    end
    return self._org_private_registry_configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrgPrivateRegistryConfigurationWithSelectedRepository():list() / client:OrgPrivateRegistryConfigurationWithSelectedRepository():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrgPrivateRegistryConfigurationWithSelectedRepository(data)
  local EntityMod = require("entity.org_private_registry_configuration_with_selected_repository_entity")
  if data == nil then
    if self._org_private_registry_configuration_with_selected_repository == nil then
      self._org_private_registry_configuration_with_selected_repository = EntityMod.new(self, nil)
    end
    return self._org_private_registry_configuration_with_selected_repository
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrgRepoCustomPropertyValue():list() / client:OrgRepoCustomPropertyValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrgRepoCustomPropertyValue(data)
  local EntityMod = require("entity.org_repo_custom_property_value_entity")
  if data == nil then
    if self._org_repo_custom_property_value == nil then
      self._org_repo_custom_property_value = EntityMod.new(self, nil)
    end
    return self._org_repo_custom_property_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Organization():list() / client:Organization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Organization(data)
  local EntityMod = require("entity.organization_entity")
  if data == nil then
    if self._organization == nil then
      self._organization = EntityMod.new(self, nil)
    end
    return self._organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationActionsSecret():list() / client:OrganizationActionsSecret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrganizationActionsSecret(data)
  local EntityMod = require("entity.organization_actions_secret_entity")
  if data == nil then
    if self._organization_actions_secret == nil then
      self._organization_actions_secret = EntityMod.new(self, nil)
    end
    return self._organization_actions_secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationActionsVariable():list() / client:OrganizationActionsVariable():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrganizationActionsVariable(data)
  local EntityMod = require("entity.organization_actions_variable_entity")
  if data == nil then
    if self._organization_actions_variable == nil then
      self._organization_actions_variable = EntityMod.new(self, nil)
    end
    return self._organization_actions_variable
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationDependabotSecret():list() / client:OrganizationDependabotSecret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrganizationDependabotSecret(data)
  local EntityMod = require("entity.organization_dependabot_secret_entity")
  if data == nil then
    if self._organization_dependabot_secret == nil then
      self._organization_dependabot_secret = EntityMod.new(self, nil)
    end
    return self._organization_dependabot_secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationInvitation():list() / client:OrganizationInvitation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrganizationInvitation(data)
  local EntityMod = require("entity.organization_invitation_entity")
  if data == nil then
    if self._organization_invitation == nil then
      self._organization_invitation = EntityMod.new(self, nil)
    end
    return self._organization_invitation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationProgrammaticAccessGrant():list() / client:OrganizationProgrammaticAccessGrant():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrganizationProgrammaticAccessGrant(data)
  local EntityMod = require("entity.organization_programmatic_access_grant_entity")
  if data == nil then
    if self._organization_programmatic_access_grant == nil then
      self._organization_programmatic_access_grant = EntityMod.new(self, nil)
    end
    return self._organization_programmatic_access_grant
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationRole():list() / client:OrganizationRole():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrganizationRole(data)
  local EntityMod = require("entity.organization_role_entity")
  if data == nil then
    if self._organization_role == nil then
      self._organization_role = EntityMod.new(self, nil)
    end
    return self._organization_role
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationSecretScanningAlert():list() / client:OrganizationSecretScanningAlert():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OrganizationSecretScanningAlert(data)
  local EntityMod = require("entity.organization_secret_scanning_alert_entity")
  if data == nil then
    if self._organization_secret_scanning_alert == nil then
      self._organization_secret_scanning_alert = EntityMod.new(self, nil)
    end
    return self._organization_secret_scanning_alert
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OutsideCollaborator():list() / client:OutsideCollaborator():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:OutsideCollaborator(data)
  local EntityMod = require("entity.outside_collaborator_entity")
  if data == nil then
    if self._outside_collaborator == nil then
      self._outside_collaborator = EntityMod.new(self, nil)
    end
    return self._outside_collaborator
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Package():list() / client:Package():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Package(data)
  local EntityMod = require("entity.package_entity")
  if data == nil then
    if self._package == nil then
      self._package = EntityMod.new(self, nil)
    end
    return self._package
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Page():list() / client:Page():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Page(data)
  local EntityMod = require("entity.page_entity")
  if data == nil then
    if self._page == nil then
      self._page = EntityMod.new(self, nil)
    end
    return self._page
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PageBuild():list() / client:PageBuild():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PageBuild(data)
  local EntityMod = require("entity.page_build_entity")
  if data == nil then
    if self._page_build == nil then
      self._page_build = EntityMod.new(self, nil)
    end
    return self._page_build
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PageBuildStatus():list() / client:PageBuildStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PageBuildStatus(data)
  local EntityMod = require("entity.page_build_status_entity")
  if data == nil then
    if self._page_build_status == nil then
      self._page_build_status = EntityMod.new(self, nil)
    end
    return self._page_build_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PageDeployment():list() / client:PageDeployment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PageDeployment(data)
  local EntityMod = require("entity.page_deployment_entity")
  if data == nil then
    if self._page_deployment == nil then
      self._page_deployment = EntityMod.new(self, nil)
    end
    return self._page_deployment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PagesDeploymentStatus():list() / client:PagesDeploymentStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PagesDeploymentStatus(data)
  local EntityMod = require("entity.pages_deployment_status_entity")
  if data == nil then
    if self._pages_deployment_status == nil then
      self._pages_deployment_status = EntityMod.new(self, nil)
    end
    return self._pages_deployment_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PagesHealthCheck():list() / client:PagesHealthCheck():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PagesHealthCheck(data)
  local EntityMod = require("entity.pages_health_check_entity")
  if data == nil then
    if self._pages_health_check == nil then
      self._pages_health_check = EntityMod.new(self, nil)
    end
    return self._pages_health_check
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Participation():list() / client:Participation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Participation(data)
  local EntityMod = require("entity.participation_entity")
  if data == nil then
    if self._participation == nil then
      self._participation = EntityMod.new(self, nil)
    end
    return self._participation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PendingDeployment():list() / client:PendingDeployment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PendingDeployment(data)
  local EntityMod = require("entity.pending_deployment_entity")
  if data == nil then
    if self._pending_deployment == nil then
      self._pending_deployment = EntityMod.new(self, nil)
    end
    return self._pending_deployment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PorterAuthor():list() / client:PorterAuthor():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PorterAuthor(data)
  local EntityMod = require("entity.porter_author_entity")
  if data == nil then
    if self._porter_author == nil then
      self._porter_author = EntityMod.new(self, nil)
    end
    return self._porter_author
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PorterLargeFile():list() / client:PorterLargeFile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PorterLargeFile(data)
  local EntityMod = require("entity.porter_large_file_entity")
  if data == nil then
    if self._porter_large_file == nil then
      self._porter_large_file = EntityMod.new(self, nil)
    end
    return self._porter_large_file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PrivateRegistry():list() / client:PrivateRegistry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PrivateRegistry(data)
  local EntityMod = require("entity.private_registry_entity")
  if data == nil then
    if self._private_registry == nil then
      self._private_registry = EntityMod.new(self, nil)
    end
    return self._private_registry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PrivateUser():list() / client:PrivateUser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PrivateUser(data)
  local EntityMod = require("entity.private_user_entity")
  if data == nil then
    if self._private_user == nil then
      self._private_user = EntityMod.new(self, nil)
    end
    return self._private_user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Project():list() / client:Project():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Project(data)
  local EntityMod = require("entity.project_entity")
  if data == nil then
    if self._project == nil then
      self._project = EntityMod.new(self, nil)
    end
    return self._project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectCollaboratorPermission():list() / client:ProjectCollaboratorPermission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ProjectCollaboratorPermission(data)
  local EntityMod = require("entity.project_collaborator_permission_entity")
  if data == nil then
    if self._project_collaborator_permission == nil then
      self._project_collaborator_permission = EntityMod.new(self, nil)
    end
    return self._project_collaborator_permission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectColumn():list() / client:ProjectColumn():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ProjectColumn(data)
  local EntityMod = require("entity.project_column_entity")
  if data == nil then
    if self._project_column == nil then
      self._project_column = EntityMod.new(self, nil)
    end
    return self._project_column
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectsClassic():list() / client:ProjectsClassic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ProjectsClassic(data)
  local EntityMod = require("entity.projects_classic_entity")
  if data == nil then
    if self._projects_classic == nil then
      self._projects_classic = EntityMod.new(self, nil)
    end
    return self._projects_classic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectsV2():list() / client:ProjectsV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ProjectsV2(data)
  local EntityMod = require("entity.projects_v2_entity")
  if data == nil then
    if self._projects_v2 == nil then
      self._projects_v2 = EntityMod.new(self, nil)
    end
    return self._projects_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectsV2Field():list() / client:ProjectsV2Field():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ProjectsV2Field(data)
  local EntityMod = require("entity.projects_v2_field_entity")
  if data == nil then
    if self._projects_v2_field == nil then
      self._projects_v2_field = EntityMod.new(self, nil)
    end
    return self._projects_v2_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectsV2ItemSimple():list() / client:ProjectsV2ItemSimple():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ProjectsV2ItemSimple(data)
  local EntityMod = require("entity.projects_v2_item_simple_entity")
  if data == nil then
    if self._projects_v2_item_simple == nil then
      self._projects_v2_item_simple = EntityMod.new(self, nil)
    end
    return self._projects_v2_item_simple
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectsV2ItemWithContent():list() / client:ProjectsV2ItemWithContent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ProjectsV2ItemWithContent(data)
  local EntityMod = require("entity.projects_v2_item_with_content_entity")
  if data == nil then
    if self._projects_v2_item_with_content == nil then
      self._projects_v2_item_with_content = EntityMod.new(self, nil)
    end
    return self._projects_v2_item_with_content
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProtectedBranch():list() / client:ProtectedBranch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ProtectedBranch(data)
  local EntityMod = require("entity.protected_branch_entity")
  if data == nil then
    if self._protected_branch == nil then
      self._protected_branch = EntityMod.new(self, nil)
    end
    return self._protected_branch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProtectedBranchAdminEnforced():list() / client:ProtectedBranchAdminEnforced():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ProtectedBranchAdminEnforced(data)
  local EntityMod = require("entity.protected_branch_admin_enforced_entity")
  if data == nil then
    if self._protected_branch_admin_enforced == nil then
      self._protected_branch_admin_enforced = EntityMod.new(self, nil)
    end
    return self._protected_branch_admin_enforced
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProtectedBranchPullRequestReview():list() / client:ProtectedBranchPullRequestReview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ProtectedBranchPullRequestReview(data)
  local EntityMod = require("entity.protected_branch_pull_request_review_entity")
  if data == nil then
    if self._protected_branch_pull_request_review == nil then
      self._protected_branch_pull_request_review = EntityMod.new(self, nil)
    end
    return self._protected_branch_pull_request_review
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PublicMember():list() / client:PublicMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PublicMember(data)
  local EntityMod = require("entity.public_member_entity")
  if data == nil then
    if self._public_member == nil then
      self._public_member = EntityMod.new(self, nil)
    end
    return self._public_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Pull():list() / client:Pull():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Pull(data)
  local EntityMod = require("entity.pull_entity")
  if data == nil then
    if self._pull == nil then
      self._pull = EntityMod.new(self, nil)
    end
    return self._pull
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PullRequestReview():list() / client:PullRequestReview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PullRequestReview(data)
  local EntityMod = require("entity.pull_request_review_entity")
  if data == nil then
    if self._pull_request_review == nil then
      self._pull_request_review = EntityMod.new(self, nil)
    end
    return self._pull_request_review
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PullRequestReviewComment():list() / client:PullRequestReviewComment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PullRequestReviewComment(data)
  local EntityMod = require("entity.pull_request_review_comment_entity")
  if data == nil then
    if self._pull_request_review_comment == nil then
      self._pull_request_review_comment = EntityMod.new(self, nil)
    end
    return self._pull_request_review_comment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PullRequestSimple():list() / client:PullRequestSimple():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:PullRequestSimple(data)
  local EntityMod = require("entity.pull_request_simple_entity")
  if data == nil then
    if self._pull_request_simple == nil then
      self._pull_request_simple = EntityMod.new(self, nil)
    end
    return self._pull_request_simple
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RateLimit():list() / client:RateLimit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RateLimit(data)
  local EntityMod = require("entity.rate_limit_entity")
  if data == nil then
    if self._rate_limit == nil then
      self._rate_limit = EntityMod.new(self, nil)
    end
    return self._rate_limit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Reaction():list() / client:Reaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Reaction(data)
  local EntityMod = require("entity.reaction_entity")
  if data == nil then
    if self._reaction == nil then
      self._reaction = EntityMod.new(self, nil)
    end
    return self._reaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Referrer():list() / client:Referrer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Referrer(data)
  local EntityMod = require("entity.referrer_entity")
  if data == nil then
    if self._referrer == nil then
      self._referrer = EntityMod.new(self, nil)
    end
    return self._referrer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Release():list() / client:Release():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Release(data)
  local EntityMod = require("entity.release_entity")
  if data == nil then
    if self._release == nil then
      self._release = EntityMod.new(self, nil)
    end
    return self._release
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReleaseAsset():list() / client:ReleaseAsset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ReleaseAsset(data)
  local EntityMod = require("entity.release_asset_entity")
  if data == nil then
    if self._release_asset == nil then
      self._release_asset = EntityMod.new(self, nil)
    end
    return self._release_asset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReleaseNotesContent():list() / client:ReleaseNotesContent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ReleaseNotesContent(data)
  local EntityMod = require("entity.release_notes_content_entity")
  if data == nil then
    if self._release_notes_content == nil then
      self._release_notes_content = EntityMod.new(self, nil)
    end
    return self._release_notes_content
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Remove():list() / client:Remove():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Remove(data)
  local EntityMod = require("entity.remove_entity")
  if data == nil then
    if self._remove == nil then
      self._remove = EntityMod.new(self, nil)
    end
    return self._remove
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Repo():list() / client:Repo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Repo(data)
  local EntityMod = require("entity.repo_entity")
  if data == nil then
    if self._repo == nil then
      self._repo = EntityMod.new(self, nil)
    end
    return self._repo
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Repository():list() / client:Repository():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Repository(data)
  local EntityMod = require("entity.repository_entity")
  if data == nil then
    if self._repository == nil then
      self._repository = EntityMod.new(self, nil)
    end
    return self._repository
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryAdvisory():list() / client:RepositoryAdvisory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RepositoryAdvisory(data)
  local EntityMod = require("entity.repository_advisory_entity")
  if data == nil then
    if self._repository_advisory == nil then
      self._repository_advisory = EntityMod.new(self, nil)
    end
    return self._repository_advisory
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryCollaboratorPermission():list() / client:RepositoryCollaboratorPermission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RepositoryCollaboratorPermission(data)
  local EntityMod = require("entity.repository_collaborator_permission_entity")
  if data == nil then
    if self._repository_collaborator_permission == nil then
      self._repository_collaborator_permission = EntityMod.new(self, nil)
    end
    return self._repository_collaborator_permission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryInvitation():list() / client:RepositoryInvitation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RepositoryInvitation(data)
  local EntityMod = require("entity.repository_invitation_entity")
  if data == nil then
    if self._repository_invitation == nil then
      self._repository_invitation = EntityMod.new(self, nil)
    end
    return self._repository_invitation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryRuleDetailed():list() / client:RepositoryRuleDetailed():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RepositoryRuleDetailed(data)
  local EntityMod = require("entity.repository_rule_detailed_entity")
  if data == nil then
    if self._repository_rule_detailed == nil then
      self._repository_rule_detailed = EntityMod.new(self, nil)
    end
    return self._repository_rule_detailed
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositoryRuleset():list() / client:RepositoryRuleset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RepositoryRuleset(data)
  local EntityMod = require("entity.repository_ruleset_entity")
  if data == nil then
    if self._repository_ruleset == nil then
      self._repository_ruleset = EntityMod.new(self, nil)
    end
    return self._repository_ruleset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RepositorySubscription():list() / client:RepositorySubscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RepositorySubscription(data)
  local EntityMod = require("entity.repository_subscription_entity")
  if data == nil then
    if self._repository_subscription == nil then
      self._repository_subscription = EntityMod.new(self, nil)
    end
    return self._repository_subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReviewComment():list() / client:ReviewComment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ReviewComment(data)
  local EntityMod = require("entity.review_comment_entity")
  if data == nil then
    if self._review_comment == nil then
      self._review_comment = EntityMod.new(self, nil)
    end
    return self._review_comment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RuleSuite():list() / client:RuleSuite():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RuleSuite(data)
  local EntityMod = require("entity.rule_suite_entity")
  if data == nil then
    if self._rule_suite == nil then
      self._rule_suite = EntityMod.new(self, nil)
    end
    return self._rule_suite
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RulesetVersion():list() / client:RulesetVersion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RulesetVersion(data)
  local EntityMod = require("entity.ruleset_version_entity")
  if data == nil then
    if self._ruleset_version == nil then
      self._ruleset_version = EntityMod.new(self, nil)
    end
    return self._ruleset_version
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RulesetVersionWithState():list() / client:RulesetVersionWithState():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RulesetVersionWithState(data)
  local EntityMod = require("entity.ruleset_version_with_state_entity")
  if data == nil then
    if self._ruleset_version_with_state == nil then
      self._ruleset_version_with_state = EntityMod.new(self, nil)
    end
    return self._ruleset_version_with_state
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Runner():list() / client:Runner():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Runner(data)
  local EntityMod = require("entity.runner_entity")
  if data == nil then
    if self._runner == nil then
      self._runner = EntityMod.new(self, nil)
    end
    return self._runner
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RunnerApplication():list() / client:RunnerApplication():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RunnerApplication(data)
  local EntityMod = require("entity.runner_application_entity")
  if data == nil then
    if self._runner_application == nil then
      self._runner_application = EntityMod.new(self, nil)
    end
    return self._runner_application
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RunnerGroup():list() / client:RunnerGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:RunnerGroup(data)
  local EntityMod = require("entity.runner_group_entity")
  if data == nil then
    if self._runner_group == nil then
      self._runner_group = EntityMod.new(self, nil)
    end
    return self._runner_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Search():list() / client:Search():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Search(data)
  local EntityMod = require("entity.search_entity")
  if data == nil then
    if self._search == nil then
      self._search = EntityMod.new(self, nil)
    end
    return self._search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretScanning():list() / client:SecretScanning():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SecretScanning(data)
  local EntityMod = require("entity.secret_scanning_entity")
  if data == nil then
    if self._secret_scanning == nil then
      self._secret_scanning = EntityMod.new(self, nil)
    end
    return self._secret_scanning
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretScanningAlert():list() / client:SecretScanningAlert():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SecretScanningAlert(data)
  local EntityMod = require("entity.secret_scanning_alert_entity")
  if data == nil then
    if self._secret_scanning_alert == nil then
      self._secret_scanning_alert = EntityMod.new(self, nil)
    end
    return self._secret_scanning_alert
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretScanningLocation():list() / client:SecretScanningLocation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SecretScanningLocation(data)
  local EntityMod = require("entity.secret_scanning_location_entity")
  if data == nil then
    if self._secret_scanning_location == nil then
      self._secret_scanning_location = EntityMod.new(self, nil)
    end
    return self._secret_scanning_location
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretScanningPatternConfiguration():list() / client:SecretScanningPatternConfiguration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SecretScanningPatternConfiguration(data)
  local EntityMod = require("entity.secret_scanning_pattern_configuration_entity")
  if data == nil then
    if self._secret_scanning_pattern_configuration == nil then
      self._secret_scanning_pattern_configuration = EntityMod.new(self, nil)
    end
    return self._secret_scanning_pattern_configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretScanningPushProtectionBypass():list() / client:SecretScanningPushProtectionBypass():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SecretScanningPushProtectionBypass(data)
  local EntityMod = require("entity.secret_scanning_push_protection_bypass_entity")
  if data == nil then
    if self._secret_scanning_push_protection_bypass == nil then
      self._secret_scanning_push_protection_bypass = EntityMod.new(self, nil)
    end
    return self._secret_scanning_push_protection_bypass
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecretScanningScanHistory():list() / client:SecretScanningScanHistory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SecretScanningScanHistory(data)
  local EntityMod = require("entity.secret_scanning_scan_history_entity")
  if data == nil then
    if self._secret_scanning_scan_history == nil then
      self._secret_scanning_scan_history = EntityMod.new(self, nil)
    end
    return self._secret_scanning_scan_history
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SecurityAdvisory():list() / client:SecurityAdvisory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SecurityAdvisory(data)
  local EntityMod = require("entity.security_advisory_entity")
  if data == nil then
    if self._security_advisory == nil then
      self._security_advisory = EntityMod.new(self, nil)
    end
    return self._security_advisory
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SelectedAction():list() / client:SelectedAction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SelectedAction(data)
  local EntityMod = require("entity.selected_action_entity")
  if data == nil then
    if self._selected_action == nil then
      self._selected_action = EntityMod.new(self, nil)
    end
    return self._selected_action
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SelfHostedRunner():list() / client:SelfHostedRunner():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SelfHostedRunner(data)
  local EntityMod = require("entity.self_hosted_runner_entity")
  if data == nil then
    if self._self_hosted_runner == nil then
      self._self_hosted_runner = EntityMod.new(self, nil)
    end
    return self._self_hosted_runner
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ShortBlob():list() / client:ShortBlob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ShortBlob(data)
  local EntityMod = require("entity.short_blob_entity")
  if data == nil then
    if self._short_blob == nil then
      self._short_blob = EntityMod.new(self, nil)
    end
    return self._short_blob
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ShortBranch():list() / client:ShortBranch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ShortBranch(data)
  local EntityMod = require("entity.short_branch_entity")
  if data == nil then
    if self._short_branch == nil then
      self._short_branch = EntityMod.new(self, nil)
    end
    return self._short_branch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SimpleClassroom():list() / client:SimpleClassroom():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SimpleClassroom(data)
  local EntityMod = require("entity.simple_classroom_entity")
  if data == nil then
    if self._simple_classroom == nil then
      self._simple_classroom = EntityMod.new(self, nil)
    end
    return self._simple_classroom
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SimpleClassroomAssignment():list() / client:SimpleClassroomAssignment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SimpleClassroomAssignment(data)
  local EntityMod = require("entity.simple_classroom_assignment_entity")
  if data == nil then
    if self._simple_classroom_assignment == nil then
      self._simple_classroom_assignment = EntityMod.new(self, nil)
    end
    return self._simple_classroom_assignment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SocialAccount():list() / client:SocialAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SocialAccount(data)
  local EntityMod = require("entity.social_account_entity")
  if data == nil then
    if self._social_account == nil then
      self._social_account = EntityMod.new(self, nil)
    end
    return self._social_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SshSigningKey():list() / client:SshSigningKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:SshSigningKey(data)
  local EntityMod = require("entity.ssh_signing_key_entity")
  if data == nil then
    if self._ssh_signing_key == nil then
      self._ssh_signing_key = EntityMod.new(self, nil)
    end
    return self._ssh_signing_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Status():list() / client:Status():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Status(data)
  local EntityMod = require("entity.status_entity")
  if data == nil then
    if self._status == nil then
      self._status = EntityMod.new(self, nil)
    end
    return self._status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatusCheckPolicy():list() / client:StatusCheckPolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:StatusCheckPolicy(data)
  local EntityMod = require("entity.status_check_policy_entity")
  if data == nil then
    if self._status_check_policy == nil then
      self._status_check_policy = EntityMod.new(self, nil)
    end
    return self._status_check_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Subscriber():list() / client:Subscriber():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Subscriber(data)
  local EntityMod = require("entity.subscriber_entity")
  if data == nil then
    if self._subscriber == nil then
      self._subscriber = EntityMod.new(self, nil)
    end
    return self._subscriber
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Tag():list() / client:Tag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Tag(data)
  local EntityMod = require("entity.tag_entity")
  if data == nil then
    if self._tag == nil then
      self._tag = EntityMod.new(self, nil)
    end
    return self._tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TagProtection():list() / client:TagProtection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:TagProtection(data)
  local EntityMod = require("entity.tag_protection_entity")
  if data == nil then
    if self._tag_protection == nil then
      self._tag_protection = EntityMod.new(self, nil)
    end
    return self._tag_protection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Team():list() / client:Team():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Team(data)
  local EntityMod = require("entity.team_entity")
  if data == nil then
    if self._team == nil then
      self._team = EntityMod.new(self, nil)
    end
    return self._team
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamSimple():list() / client:TeamSimple():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:TeamSimple(data)
  local EntityMod = require("entity.team_simple_entity")
  if data == nil then
    if self._team_simple == nil then
      self._team_simple = EntityMod.new(self, nil)
    end
    return self._team_simple
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Thread():list() / client:Thread():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Thread(data)
  local EntityMod = require("entity.thread_entity")
  if data == nil then
    if self._thread == nil then
      self._thread = EntityMod.new(self, nil)
    end
    return self._thread
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ThreadSubscription():list() / client:ThreadSubscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:ThreadSubscription(data)
  local EntityMod = require("entity.thread_subscription_entity")
  if data == nil then
    if self._thread_subscription == nil then
      self._thread_subscription = EntityMod.new(self, nil)
    end
    return self._thread_subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Topic():list() / client:Topic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Topic(data)
  local EntityMod = require("entity.topic_entity")
  if data == nil then
    if self._topic == nil then
      self._topic = EntityMod.new(self, nil)
    end
    return self._topic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:User():list() / client:User():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:User(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserMarketplacePurchase():list() / client:UserMarketplacePurchase():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:UserMarketplacePurchase(data)
  local EntityMod = require("entity.user_marketplace_purchase_entity")
  if data == nil then
    if self._user_marketplace_purchase == nil then
      self._user_marketplace_purchase = EntityMod.new(self, nil)
    end
    return self._user_marketplace_purchase
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:View():list() / client:View():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:View(data)
  local EntityMod = require("entity.view_entity")
  if data == nil then
    if self._view == nil then
      self._view = EntityMod.new(self, nil)
    end
    return self._view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WebhookConfig():list() / client:WebhookConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:WebhookConfig(data)
  local EntityMod = require("entity.webhook_config_entity")
  if data == nil then
    if self._webhook_config == nil then
      self._webhook_config = EntityMod.new(self, nil)
    end
    return self._webhook_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Workflow():list() / client:Workflow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:Workflow(data)
  local EntityMod = require("entity.workflow_entity")
  if data == nil then
    if self._workflow == nil then
      self._workflow = EntityMod.new(self, nil)
    end
    return self._workflow
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkflowRun():list() / client:WorkflowRun():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:WorkflowRun(data)
  local EntityMod = require("entity.workflow_run_entity")
  if data == nil then
    if self._workflow_run == nil then
      self._workflow_run = EntityMod.new(self, nil)
    end
    return self._workflow_run
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkflowRunUsage():list() / client:WorkflowRunUsage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:WorkflowRunUsage(data)
  local EntityMod = require("entity.workflow_run_usage_entity")
  if data == nil then
    if self._workflow_run_usage == nil then
      self._workflow_run_usage = EntityMod.new(self, nil)
    end
    return self._workflow_run_usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkflowUsage():list() / client:WorkflowUsage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function GithubSDK:WorkflowUsage(data)
  local EntityMod = require("entity.workflow_usage_entity")
  if data == nil then
    if self._workflow_usage == nil then
      self._workflow_usage = EntityMod.new(self, nil)
    end
    return self._workflow_usage
  end
  return EntityMod.new(self, data)
end




function GithubSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = GithubSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return GithubSDK
