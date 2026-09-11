<?php
declare(strict_types=1);

// Github SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class GithubSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new GithubUtility();
        $this->_utility = $utility;

        $config = GithubConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = GithubHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = GithubHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!GithubFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, GithubFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return GithubUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = GithubHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = GithubHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = GithubHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new GithubSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new GithubError($op . "_allow",
                "GithubSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = GithubHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = GithubHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new GithubError("graphql_error",
                "GithubSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_action = null;

    // Canonical facade: $client->Action()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->action()
    // resolves here too.
    public function Action($data = null)
    {
        require_once __DIR__ . '/entity/action_entity.php';
        if ($data === null) {
            if ($this->_action === null) {
                $this->_action = new ActionEntity($this, null);
            }
            return $this->_action;
        }
        return new ActionEntity($this, $data);
    }


    private $_actions_artifact_and_log_retention = null;

    // Canonical facade: $client->ActionsArtifactAndLogRetention()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_artifact_and_log_retention()
    // resolves here too.
    public function ActionsArtifactAndLogRetention($data = null)
    {
        require_once __DIR__ . '/entity/actions_artifact_and_log_retention_entity.php';
        if ($data === null) {
            if ($this->_actions_artifact_and_log_retention === null) {
                $this->_actions_artifact_and_log_retention = new ActionsArtifactAndLogRetentionEntity($this, null);
            }
            return $this->_actions_artifact_and_log_retention;
        }
        return new ActionsArtifactAndLogRetentionEntity($this, $data);
    }


    private $_actions_cache_list = null;

    // Canonical facade: $client->ActionsCacheList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_cache_list()
    // resolves here too.
    public function ActionsCacheList($data = null)
    {
        require_once __DIR__ . '/entity/actions_cache_list_entity.php';
        if ($data === null) {
            if ($this->_actions_cache_list === null) {
                $this->_actions_cache_list = new ActionsCacheListEntity($this, null);
            }
            return $this->_actions_cache_list;
        }
        return new ActionsCacheListEntity($this, $data);
    }


    private $_actions_cache_usage_by_repository = null;

    // Canonical facade: $client->ActionsCacheUsageByRepository()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_cache_usage_by_repository()
    // resolves here too.
    public function ActionsCacheUsageByRepository($data = null)
    {
        require_once __DIR__ . '/entity/actions_cache_usage_by_repository_entity.php';
        if ($data === null) {
            if ($this->_actions_cache_usage_by_repository === null) {
                $this->_actions_cache_usage_by_repository = new ActionsCacheUsageByRepositoryEntity($this, null);
            }
            return $this->_actions_cache_usage_by_repository;
        }
        return new ActionsCacheUsageByRepositoryEntity($this, $data);
    }


    private $_actions_cache_usage_org_enterprise = null;

    // Canonical facade: $client->ActionsCacheUsageOrgEnterprise()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_cache_usage_org_enterprise()
    // resolves here too.
    public function ActionsCacheUsageOrgEnterprise($data = null)
    {
        require_once __DIR__ . '/entity/actions_cache_usage_org_enterprise_entity.php';
        if ($data === null) {
            if ($this->_actions_cache_usage_org_enterprise === null) {
                $this->_actions_cache_usage_org_enterprise = new ActionsCacheUsageOrgEnterpriseEntity($this, null);
            }
            return $this->_actions_cache_usage_org_enterprise;
        }
        return new ActionsCacheUsageOrgEnterpriseEntity($this, $data);
    }


    private $_actions_fork_pr_contributor_approval = null;

    // Canonical facade: $client->ActionsForkPrContributorApproval()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_fork_pr_contributor_approval()
    // resolves here too.
    public function ActionsForkPrContributorApproval($data = null)
    {
        require_once __DIR__ . '/entity/actions_fork_pr_contributor_approval_entity.php';
        if ($data === null) {
            if ($this->_actions_fork_pr_contributor_approval === null) {
                $this->_actions_fork_pr_contributor_approval = new ActionsForkPrContributorApprovalEntity($this, null);
            }
            return $this->_actions_fork_pr_contributor_approval;
        }
        return new ActionsForkPrContributorApprovalEntity($this, $data);
    }


    private $_actions_fork_pr_workflows_private_repo = null;

    // Canonical facade: $client->ActionsForkPrWorkflowsPrivateRepo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_fork_pr_workflows_private_repo()
    // resolves here too.
    public function ActionsForkPrWorkflowsPrivateRepo($data = null)
    {
        require_once __DIR__ . '/entity/actions_fork_pr_workflows_private_repo_entity.php';
        if ($data === null) {
            if ($this->_actions_fork_pr_workflows_private_repo === null) {
                $this->_actions_fork_pr_workflows_private_repo = new ActionsForkPrWorkflowsPrivateRepoEntity($this, null);
            }
            return $this->_actions_fork_pr_workflows_private_repo;
        }
        return new ActionsForkPrWorkflowsPrivateRepoEntity($this, $data);
    }


    private $_actions_get_default_workflow_permission = null;

    // Canonical facade: $client->ActionsGetDefaultWorkflowPermission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_get_default_workflow_permission()
    // resolves here too.
    public function ActionsGetDefaultWorkflowPermission($data = null)
    {
        require_once __DIR__ . '/entity/actions_get_default_workflow_permission_entity.php';
        if ($data === null) {
            if ($this->_actions_get_default_workflow_permission === null) {
                $this->_actions_get_default_workflow_permission = new ActionsGetDefaultWorkflowPermissionEntity($this, null);
            }
            return $this->_actions_get_default_workflow_permission;
        }
        return new ActionsGetDefaultWorkflowPermissionEntity($this, $data);
    }


    private $_actions_hosted_runner = null;

    // Canonical facade: $client->ActionsHostedRunner()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_hosted_runner()
    // resolves here too.
    public function ActionsHostedRunner($data = null)
    {
        require_once __DIR__ . '/entity/actions_hosted_runner_entity.php';
        if ($data === null) {
            if ($this->_actions_hosted_runner === null) {
                $this->_actions_hosted_runner = new ActionsHostedRunnerEntity($this, null);
            }
            return $this->_actions_hosted_runner;
        }
        return new ActionsHostedRunnerEntity($this, $data);
    }


    private $_actions_hosted_runner_limit = null;

    // Canonical facade: $client->ActionsHostedRunnerLimit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_hosted_runner_limit()
    // resolves here too.
    public function ActionsHostedRunnerLimit($data = null)
    {
        require_once __DIR__ . '/entity/actions_hosted_runner_limit_entity.php';
        if ($data === null) {
            if ($this->_actions_hosted_runner_limit === null) {
                $this->_actions_hosted_runner_limit = new ActionsHostedRunnerLimitEntity($this, null);
            }
            return $this->_actions_hosted_runner_limit;
        }
        return new ActionsHostedRunnerLimitEntity($this, $data);
    }


    private $_actions_organization_permission = null;

    // Canonical facade: $client->ActionsOrganizationPermission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_organization_permission()
    // resolves here too.
    public function ActionsOrganizationPermission($data = null)
    {
        require_once __DIR__ . '/entity/actions_organization_permission_entity.php';
        if ($data === null) {
            if ($this->_actions_organization_permission === null) {
                $this->_actions_organization_permission = new ActionsOrganizationPermissionEntity($this, null);
            }
            return $this->_actions_organization_permission;
        }
        return new ActionsOrganizationPermissionEntity($this, $data);
    }


    private $_actions_public_key = null;

    // Canonical facade: $client->ActionsPublicKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_public_key()
    // resolves here too.
    public function ActionsPublicKey($data = null)
    {
        require_once __DIR__ . '/entity/actions_public_key_entity.php';
        if ($data === null) {
            if ($this->_actions_public_key === null) {
                $this->_actions_public_key = new ActionsPublicKeyEntity($this, null);
            }
            return $this->_actions_public_key;
        }
        return new ActionsPublicKeyEntity($this, $data);
    }


    private $_actions_repository_permission = null;

    // Canonical facade: $client->ActionsRepositoryPermission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_repository_permission()
    // resolves here too.
    public function ActionsRepositoryPermission($data = null)
    {
        require_once __DIR__ . '/entity/actions_repository_permission_entity.php';
        if ($data === null) {
            if ($this->_actions_repository_permission === null) {
                $this->_actions_repository_permission = new ActionsRepositoryPermissionEntity($this, null);
            }
            return $this->_actions_repository_permission;
        }
        return new ActionsRepositoryPermissionEntity($this, $data);
    }


    private $_actions_secret = null;

    // Canonical facade: $client->ActionsSecret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_secret()
    // resolves here too.
    public function ActionsSecret($data = null)
    {
        require_once __DIR__ . '/entity/actions_secret_entity.php';
        if ($data === null) {
            if ($this->_actions_secret === null) {
                $this->_actions_secret = new ActionsSecretEntity($this, null);
            }
            return $this->_actions_secret;
        }
        return new ActionsSecretEntity($this, $data);
    }


    private $_actions_variable = null;

    // Canonical facade: $client->ActionsVariable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_variable()
    // resolves here too.
    public function ActionsVariable($data = null)
    {
        require_once __DIR__ . '/entity/actions_variable_entity.php';
        if ($data === null) {
            if ($this->_actions_variable === null) {
                $this->_actions_variable = new ActionsVariableEntity($this, null);
            }
            return $this->_actions_variable;
        }
        return new ActionsVariableEntity($this, $data);
    }


    private $_actions_workflow_access_to_repository = null;

    // Canonical facade: $client->ActionsWorkflowAccessToRepository()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_workflow_access_to_repository()
    // resolves here too.
    public function ActionsWorkflowAccessToRepository($data = null)
    {
        require_once __DIR__ . '/entity/actions_workflow_access_to_repository_entity.php';
        if ($data === null) {
            if ($this->_actions_workflow_access_to_repository === null) {
                $this->_actions_workflow_access_to_repository = new ActionsWorkflowAccessToRepositoryEntity($this, null);
            }
            return $this->_actions_workflow_access_to_repository;
        }
        return new ActionsWorkflowAccessToRepositoryEntity($this, $data);
    }


    private $_activity = null;

    // Canonical facade: $client->Activity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activity()
    // resolves here too.
    public function Activity($data = null)
    {
        require_once __DIR__ . '/entity/activity_entity.php';
        if ($data === null) {
            if ($this->_activity === null) {
                $this->_activity = new ActivityEntity($this, null);
            }
            return $this->_activity;
        }
        return new ActivityEntity($this, $data);
    }


    private $_add = null;

    // Canonical facade: $client->Add()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->add()
    // resolves here too.
    public function Add($data = null)
    {
        require_once __DIR__ . '/entity/add_entity.php';
        if ($data === null) {
            if ($this->_add === null) {
                $this->_add = new AddEntity($this, null);
            }
            return $this->_add;
        }
        return new AddEntity($this, $data);
    }


    private $_api_insights_route_stat = null;

    // Canonical facade: $client->ApiInsightsRouteStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_insights_route_stat()
    // resolves here too.
    public function ApiInsightsRouteStat($data = null)
    {
        require_once __DIR__ . '/entity/api_insights_route_stat_entity.php';
        if ($data === null) {
            if ($this->_api_insights_route_stat === null) {
                $this->_api_insights_route_stat = new ApiInsightsRouteStatEntity($this, null);
            }
            return $this->_api_insights_route_stat;
        }
        return new ApiInsightsRouteStatEntity($this, $data);
    }


    private $_api_insights_subject_stat = null;

    // Canonical facade: $client->ApiInsightsSubjectStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_insights_subject_stat()
    // resolves here too.
    public function ApiInsightsSubjectStat($data = null)
    {
        require_once __DIR__ . '/entity/api_insights_subject_stat_entity.php';
        if ($data === null) {
            if ($this->_api_insights_subject_stat === null) {
                $this->_api_insights_subject_stat = new ApiInsightsSubjectStatEntity($this, null);
            }
            return $this->_api_insights_subject_stat;
        }
        return new ApiInsightsSubjectStatEntity($this, $data);
    }


    private $_api_insights_summary_stat = null;

    // Canonical facade: $client->ApiInsightsSummaryStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_insights_summary_stat()
    // resolves here too.
    public function ApiInsightsSummaryStat($data = null)
    {
        require_once __DIR__ . '/entity/api_insights_summary_stat_entity.php';
        if ($data === null) {
            if ($this->_api_insights_summary_stat === null) {
                $this->_api_insights_summary_stat = new ApiInsightsSummaryStatEntity($this, null);
            }
            return $this->_api_insights_summary_stat;
        }
        return new ApiInsightsSummaryStatEntity($this, $data);
    }


    private $_api_insights_time_stat = null;

    // Canonical facade: $client->ApiInsightsTimeStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_insights_time_stat()
    // resolves here too.
    public function ApiInsightsTimeStat($data = null)
    {
        require_once __DIR__ . '/entity/api_insights_time_stat_entity.php';
        if ($data === null) {
            if ($this->_api_insights_time_stat === null) {
                $this->_api_insights_time_stat = new ApiInsightsTimeStatEntity($this, null);
            }
            return $this->_api_insights_time_stat;
        }
        return new ApiInsightsTimeStatEntity($this, $data);
    }


    private $_api_insights_user_stat = null;

    // Canonical facade: $client->ApiInsightsUserStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_insights_user_stat()
    // resolves here too.
    public function ApiInsightsUserStat($data = null)
    {
        require_once __DIR__ . '/entity/api_insights_user_stat_entity.php';
        if ($data === null) {
            if ($this->_api_insights_user_stat === null) {
                $this->_api_insights_user_stat = new ApiInsightsUserStatEntity($this, null);
            }
            return $this->_api_insights_user_stat;
        }
        return new ApiInsightsUserStatEntity($this, $data);
    }


    private $_api_overview = null;

    // Canonical facade: $client->ApiOverview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_overview()
    // resolves here too.
    public function ApiOverview($data = null)
    {
        require_once __DIR__ . '/entity/api_overview_entity.php';
        if ($data === null) {
            if ($this->_api_overview === null) {
                $this->_api_overview = new ApiOverviewEntity($this, null);
            }
            return $this->_api_overview;
        }
        return new ApiOverviewEntity($this, $data);
    }


    private $_app = null;

    // Canonical facade: $client->App()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->app()
    // resolves here too.
    public function App($data = null)
    {
        require_once __DIR__ . '/entity/app_entity.php';
        if ($data === null) {
            if ($this->_app === null) {
                $this->_app = new AppEntity($this, null);
            }
            return $this->_app;
        }
        return new AppEntity($this, $data);
    }


    private $_artifact = null;

    // Canonical facade: $client->Artifact()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->artifact()
    // resolves here too.
    public function Artifact($data = null)
    {
        require_once __DIR__ . '/entity/artifact_entity.php';
        if ($data === null) {
            if ($this->_artifact === null) {
                $this->_artifact = new ArtifactEntity($this, null);
            }
            return $this->_artifact;
        }
        return new ArtifactEntity($this, $data);
    }


    private $_assignee = null;

    // Canonical facade: $client->Assignee()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->assignee()
    // resolves here too.
    public function Assignee($data = null)
    {
        require_once __DIR__ . '/entity/assignee_entity.php';
        if ($data === null) {
            if ($this->_assignee === null) {
                $this->_assignee = new AssigneeEntity($this, null);
            }
            return $this->_assignee;
        }
        return new AssigneeEntity($this, $data);
    }


    private $_authentication_token = null;

    // Canonical facade: $client->AuthenticationToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->authentication_token()
    // resolves here too.
    public function AuthenticationToken($data = null)
    {
        require_once __DIR__ . '/entity/authentication_token_entity.php';
        if ($data === null) {
            if ($this->_authentication_token === null) {
                $this->_authentication_token = new AuthenticationTokenEntity($this, null);
            }
            return $this->_authentication_token;
        }
        return new AuthenticationTokenEntity($this, $data);
    }


    private $_authorization = null;

    // Canonical facade: $client->Authorization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->authorization()
    // resolves here too.
    public function Authorization($data = null)
    {
        require_once __DIR__ . '/entity/authorization_entity.php';
        if ($data === null) {
            if ($this->_authorization === null) {
                $this->_authorization = new AuthorizationEntity($this, null);
            }
            return $this->_authorization;
        }
        return new AuthorizationEntity($this, $data);
    }


    private $_autolink = null;

    // Canonical facade: $client->Autolink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->autolink()
    // resolves here too.
    public function Autolink($data = null)
    {
        require_once __DIR__ . '/entity/autolink_entity.php';
        if ($data === null) {
            if ($this->_autolink === null) {
                $this->_autolink = new AutolinkEntity($this, null);
            }
            return $this->_autolink;
        }
        return new AutolinkEntity($this, $data);
    }


    private $_base_gist = null;

    // Canonical facade: $client->BaseGist()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->base_gist()
    // resolves here too.
    public function BaseGist($data = null)
    {
        require_once __DIR__ . '/entity/base_gist_entity.php';
        if ($data === null) {
            if ($this->_base_gist === null) {
                $this->_base_gist = new BaseGistEntity($this, null);
            }
            return $this->_base_gist;
        }
        return new BaseGistEntity($this, $data);
    }


    private $_billing_usage_report = null;

    // Canonical facade: $client->BillingUsageReport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billing_usage_report()
    // resolves here too.
    public function BillingUsageReport($data = null)
    {
        require_once __DIR__ . '/entity/billing_usage_report_entity.php';
        if ($data === null) {
            if ($this->_billing_usage_report === null) {
                $this->_billing_usage_report = new BillingUsageReportEntity($this, null);
            }
            return $this->_billing_usage_report;
        }
        return new BillingUsageReportEntity($this, $data);
    }


    private $_billing_usage_report_user = null;

    // Canonical facade: $client->BillingUsageReportUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billing_usage_report_user()
    // resolves here too.
    public function BillingUsageReportUser($data = null)
    {
        require_once __DIR__ . '/entity/billing_usage_report_user_entity.php';
        if ($data === null) {
            if ($this->_billing_usage_report_user === null) {
                $this->_billing_usage_report_user = new BillingUsageReportUserEntity($this, null);
            }
            return $this->_billing_usage_report_user;
        }
        return new BillingUsageReportUserEntity($this, $data);
    }


    private $_blob = null;

    // Canonical facade: $client->Blob()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->blob()
    // resolves here too.
    public function Blob($data = null)
    {
        require_once __DIR__ . '/entity/blob_entity.php';
        if ($data === null) {
            if ($this->_blob === null) {
                $this->_blob = new BlobEntity($this, null);
            }
            return $this->_blob;
        }
        return new BlobEntity($this, $data);
    }


    private $_block = null;

    // Canonical facade: $client->Block()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->block()
    // resolves here too.
    public function Block($data = null)
    {
        require_once __DIR__ . '/entity/block_entity.php';
        if ($data === null) {
            if ($this->_block === null) {
                $this->_block = new BlockEntity($this, null);
            }
            return $this->_block;
        }
        return new BlockEntity($this, $data);
    }


    private $_branch = null;

    // Canonical facade: $client->Branch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch()
    // resolves here too.
    public function Branch($data = null)
    {
        require_once __DIR__ . '/entity/branch_entity.php';
        if ($data === null) {
            if ($this->_branch === null) {
                $this->_branch = new BranchEntity($this, null);
            }
            return $this->_branch;
        }
        return new BranchEntity($this, $data);
    }


    private $_branch_protection = null;

    // Canonical facade: $client->BranchProtection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch_protection()
    // resolves here too.
    public function BranchProtection($data = null)
    {
        require_once __DIR__ . '/entity/branch_protection_entity.php';
        if ($data === null) {
            if ($this->_branch_protection === null) {
                $this->_branch_protection = new BranchProtectionEntity($this, null);
            }
            return $this->_branch_protection;
        }
        return new BranchProtectionEntity($this, $data);
    }


    private $_branch_restriction_policy = null;

    // Canonical facade: $client->BranchRestrictionPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch_restriction_policy()
    // resolves here too.
    public function BranchRestrictionPolicy($data = null)
    {
        require_once __DIR__ . '/entity/branch_restriction_policy_entity.php';
        if ($data === null) {
            if ($this->_branch_restriction_policy === null) {
                $this->_branch_restriction_policy = new BranchRestrictionPolicyEntity($this, null);
            }
            return $this->_branch_restriction_policy;
        }
        return new BranchRestrictionPolicyEntity($this, $data);
    }


    private $_branch_short = null;

    // Canonical facade: $client->BranchShort()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch_short()
    // resolves here too.
    public function BranchShort($data = null)
    {
        require_once __DIR__ . '/entity/branch_short_entity.php';
        if ($data === null) {
            if ($this->_branch_short === null) {
                $this->_branch_short = new BranchShortEntity($this, null);
            }
            return $this->_branch_short;
        }
        return new BranchShortEntity($this, $data);
    }


    private $_branch_with_protection = null;

    // Canonical facade: $client->BranchWithProtection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch_with_protection()
    // resolves here too.
    public function BranchWithProtection($data = null)
    {
        require_once __DIR__ . '/entity/branch_with_protection_entity.php';
        if ($data === null) {
            if ($this->_branch_with_protection === null) {
                $this->_branch_with_protection = new BranchWithProtectionEntity($this, null);
            }
            return $this->_branch_with_protection;
        }
        return new BranchWithProtectionEntity($this, $data);
    }


    private $_campaign = null;

    // Canonical facade: $client->Campaign()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->campaign()
    // resolves here too.
    public function Campaign($data = null)
    {
        require_once __DIR__ . '/entity/campaign_entity.php';
        if ($data === null) {
            if ($this->_campaign === null) {
                $this->_campaign = new CampaignEntity($this, null);
            }
            return $this->_campaign;
        }
        return new CampaignEntity($this, $data);
    }


    private $_check = null;

    // Canonical facade: $client->Check()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->check()
    // resolves here too.
    public function Check($data = null)
    {
        require_once __DIR__ . '/entity/check_entity.php';
        if ($data === null) {
            if ($this->_check === null) {
                $this->_check = new CheckEntity($this, null);
            }
            return $this->_check;
        }
        return new CheckEntity($this, $data);
    }


    private $_check_annotation = null;

    // Canonical facade: $client->CheckAnnotation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->check_annotation()
    // resolves here too.
    public function CheckAnnotation($data = null)
    {
        require_once __DIR__ . '/entity/check_annotation_entity.php';
        if ($data === null) {
            if ($this->_check_annotation === null) {
                $this->_check_annotation = new CheckAnnotationEntity($this, null);
            }
            return $this->_check_annotation;
        }
        return new CheckAnnotationEntity($this, $data);
    }


    private $_check_automated_security_fix = null;

    // Canonical facade: $client->CheckAutomatedSecurityFix()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->check_automated_security_fix()
    // resolves here too.
    public function CheckAutomatedSecurityFix($data = null)
    {
        require_once __DIR__ . '/entity/check_automated_security_fix_entity.php';
        if ($data === null) {
            if ($this->_check_automated_security_fix === null) {
                $this->_check_automated_security_fix = new CheckAutomatedSecurityFixEntity($this, null);
            }
            return $this->_check_automated_security_fix;
        }
        return new CheckAutomatedSecurityFixEntity($this, $data);
    }


    private $_check_run = null;

    // Canonical facade: $client->CheckRun()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->check_run()
    // resolves here too.
    public function CheckRun($data = null)
    {
        require_once __DIR__ . '/entity/check_run_entity.php';
        if ($data === null) {
            if ($this->_check_run === null) {
                $this->_check_run = new CheckRunEntity($this, null);
            }
            return $this->_check_run;
        }
        return new CheckRunEntity($this, $data);
    }


    private $_check_suite = null;

    // Canonical facade: $client->CheckSuite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->check_suite()
    // resolves here too.
    public function CheckSuite($data = null)
    {
        require_once __DIR__ . '/entity/check_suite_entity.php';
        if ($data === null) {
            if ($this->_check_suite === null) {
                $this->_check_suite = new CheckSuiteEntity($this, null);
            }
            return $this->_check_suite;
        }
        return new CheckSuiteEntity($this, $data);
    }


    private $_check_suite_preference = null;

    // Canonical facade: $client->CheckSuitePreference()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->check_suite_preference()
    // resolves here too.
    public function CheckSuitePreference($data = null)
    {
        require_once __DIR__ . '/entity/check_suite_preference_entity.php';
        if ($data === null) {
            if ($this->_check_suite_preference === null) {
                $this->_check_suite_preference = new CheckSuitePreferenceEntity($this, null);
            }
            return $this->_check_suite_preference;
        }
        return new CheckSuitePreferenceEntity($this, $data);
    }


    private $_classroom = null;

    // Canonical facade: $client->Classroom()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->classroom()
    // resolves here too.
    public function Classroom($data = null)
    {
        require_once __DIR__ . '/entity/classroom_entity.php';
        if ($data === null) {
            if ($this->_classroom === null) {
                $this->_classroom = new ClassroomEntity($this, null);
            }
            return $this->_classroom;
        }
        return new ClassroomEntity($this, $data);
    }


    private $_classroom_accepted_assignment = null;

    // Canonical facade: $client->ClassroomAcceptedAssignment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->classroom_accepted_assignment()
    // resolves here too.
    public function ClassroomAcceptedAssignment($data = null)
    {
        require_once __DIR__ . '/entity/classroom_accepted_assignment_entity.php';
        if ($data === null) {
            if ($this->_classroom_accepted_assignment === null) {
                $this->_classroom_accepted_assignment = new ClassroomAcceptedAssignmentEntity($this, null);
            }
            return $this->_classroom_accepted_assignment;
        }
        return new ClassroomAcceptedAssignmentEntity($this, $data);
    }


    private $_classroom_assignment = null;

    // Canonical facade: $client->ClassroomAssignment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->classroom_assignment()
    // resolves here too.
    public function ClassroomAssignment($data = null)
    {
        require_once __DIR__ . '/entity/classroom_assignment_entity.php';
        if ($data === null) {
            if ($this->_classroom_assignment === null) {
                $this->_classroom_assignment = new ClassroomAssignmentEntity($this, null);
            }
            return $this->_classroom_assignment;
        }
        return new ClassroomAssignmentEntity($this, $data);
    }


    private $_classroom_assignment_grade = null;

    // Canonical facade: $client->ClassroomAssignmentGrade()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->classroom_assignment_grade()
    // resolves here too.
    public function ClassroomAssignmentGrade($data = null)
    {
        require_once __DIR__ . '/entity/classroom_assignment_grade_entity.php';
        if ($data === null) {
            if ($this->_classroom_assignment_grade === null) {
                $this->_classroom_assignment_grade = new ClassroomAssignmentGradeEntity($this, null);
            }
            return $this->_classroom_assignment_grade;
        }
        return new ClassroomAssignmentGradeEntity($this, $data);
    }


    private $_clone = null;

    // Canonical facade: $client->Clone()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->clone()
    // resolves here too.
    public function Clone($data = null)
    {
        require_once __DIR__ . '/entity/clone_entity.php';
        if ($data === null) {
            if ($this->_clone === null) {
                $this->_clone = new CloneEntity($this, null);
            }
            return $this->_clone;
        }
        return new CloneEntity($this, $data);
    }


    private $_code_frequency = null;

    // Canonical facade: $client->CodeFrequency()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_frequency()
    // resolves here too.
    public function CodeFrequency($data = null)
    {
        require_once __DIR__ . '/entity/code_frequency_entity.php';
        if ($data === null) {
            if ($this->_code_frequency === null) {
                $this->_code_frequency = new CodeFrequencyEntity($this, null);
            }
            return $this->_code_frequency;
        }
        return new CodeFrequencyEntity($this, $data);
    }


    private $_code_frequency_stat = null;

    // Canonical facade: $client->CodeFrequencyStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_frequency_stat()
    // resolves here too.
    public function CodeFrequencyStat($data = null)
    {
        require_once __DIR__ . '/entity/code_frequency_stat_entity.php';
        if ($data === null) {
            if ($this->_code_frequency_stat === null) {
                $this->_code_frequency_stat = new CodeFrequencyStatEntity($this, null);
            }
            return $this->_code_frequency_stat;
        }
        return new CodeFrequencyStatEntity($this, $data);
    }


    private $_code_of_conduct = null;

    // Canonical facade: $client->CodeOfConduct()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_of_conduct()
    // resolves here too.
    public function CodeOfConduct($data = null)
    {
        require_once __DIR__ . '/entity/code_of_conduct_entity.php';
        if ($data === null) {
            if ($this->_code_of_conduct === null) {
                $this->_code_of_conduct = new CodeOfConductEntity($this, null);
            }
            return $this->_code_of_conduct;
        }
        return new CodeOfConductEntity($this, $data);
    }


    private $_code_scanning = null;

    // Canonical facade: $client->CodeScanning()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning()
    // resolves here too.
    public function CodeScanning($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_entity.php';
        if ($data === null) {
            if ($this->_code_scanning === null) {
                $this->_code_scanning = new CodeScanningEntity($this, null);
            }
            return $this->_code_scanning;
        }
        return new CodeScanningEntity($this, $data);
    }


    private $_code_scanning_alert = null;

    // Canonical facade: $client->CodeScanningAlert()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_alert()
    // resolves here too.
    public function CodeScanningAlert($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_alert_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_alert === null) {
                $this->_code_scanning_alert = new CodeScanningAlertEntity($this, null);
            }
            return $this->_code_scanning_alert;
        }
        return new CodeScanningAlertEntity($this, $data);
    }


    private $_code_scanning_alert_instance = null;

    // Canonical facade: $client->CodeScanningAlertInstance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_alert_instance()
    // resolves here too.
    public function CodeScanningAlertInstance($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_alert_instance_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_alert_instance === null) {
                $this->_code_scanning_alert_instance = new CodeScanningAlertInstanceEntity($this, null);
            }
            return $this->_code_scanning_alert_instance;
        }
        return new CodeScanningAlertInstanceEntity($this, $data);
    }


    private $_code_scanning_alert_item = null;

    // Canonical facade: $client->CodeScanningAlertItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_alert_item()
    // resolves here too.
    public function CodeScanningAlertItem($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_alert_item_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_alert_item === null) {
                $this->_code_scanning_alert_item = new CodeScanningAlertItemEntity($this, null);
            }
            return $this->_code_scanning_alert_item;
        }
        return new CodeScanningAlertItemEntity($this, $data);
    }


    private $_code_scanning_analysi = null;

    // Canonical facade: $client->CodeScanningAnalysi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_analysi()
    // resolves here too.
    public function CodeScanningAnalysi($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_analysi_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_analysi === null) {
                $this->_code_scanning_analysi = new CodeScanningAnalysiEntity($this, null);
            }
            return $this->_code_scanning_analysi;
        }
        return new CodeScanningAnalysiEntity($this, $data);
    }


    private $_code_scanning_analysis_deletion = null;

    // Canonical facade: $client->CodeScanningAnalysisDeletion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_analysis_deletion()
    // resolves here too.
    public function CodeScanningAnalysisDeletion($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_analysis_deletion_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_analysis_deletion === null) {
                $this->_code_scanning_analysis_deletion = new CodeScanningAnalysisDeletionEntity($this, null);
            }
            return $this->_code_scanning_analysis_deletion;
        }
        return new CodeScanningAnalysisDeletionEntity($this, $data);
    }


    private $_code_scanning_autofix = null;

    // Canonical facade: $client->CodeScanningAutofix()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_autofix()
    // resolves here too.
    public function CodeScanningAutofix($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_autofix_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_autofix === null) {
                $this->_code_scanning_autofix = new CodeScanningAutofixEntity($this, null);
            }
            return $this->_code_scanning_autofix;
        }
        return new CodeScanningAutofixEntity($this, $data);
    }


    private $_code_scanning_autofix_commit = null;

    // Canonical facade: $client->CodeScanningAutofixCommit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_autofix_commit()
    // resolves here too.
    public function CodeScanningAutofixCommit($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_autofix_commit_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_autofix_commit === null) {
                $this->_code_scanning_autofix_commit = new CodeScanningAutofixCommitEntity($this, null);
            }
            return $this->_code_scanning_autofix_commit;
        }
        return new CodeScanningAutofixCommitEntity($this, $data);
    }


    private $_code_scanning_codeql_database = null;

    // Canonical facade: $client->CodeScanningCodeqlDatabase()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_codeql_database()
    // resolves here too.
    public function CodeScanningCodeqlDatabase($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_codeql_database_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_codeql_database === null) {
                $this->_code_scanning_codeql_database = new CodeScanningCodeqlDatabaseEntity($this, null);
            }
            return $this->_code_scanning_codeql_database;
        }
        return new CodeScanningCodeqlDatabaseEntity($this, $data);
    }


    private $_code_scanning_default_setup = null;

    // Canonical facade: $client->CodeScanningDefaultSetup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_default_setup()
    // resolves here too.
    public function CodeScanningDefaultSetup($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_default_setup_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_default_setup === null) {
                $this->_code_scanning_default_setup = new CodeScanningDefaultSetupEntity($this, null);
            }
            return $this->_code_scanning_default_setup;
        }
        return new CodeScanningDefaultSetupEntity($this, $data);
    }


    private $_code_scanning_organization_alert_item = null;

    // Canonical facade: $client->CodeScanningOrganizationAlertItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_organization_alert_item()
    // resolves here too.
    public function CodeScanningOrganizationAlertItem($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_organization_alert_item_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_organization_alert_item === null) {
                $this->_code_scanning_organization_alert_item = new CodeScanningOrganizationAlertItemEntity($this, null);
            }
            return $this->_code_scanning_organization_alert_item;
        }
        return new CodeScanningOrganizationAlertItemEntity($this, $data);
    }


    private $_code_scanning_sarifs_status = null;

    // Canonical facade: $client->CodeScanningSarifsStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_sarifs_status()
    // resolves here too.
    public function CodeScanningSarifsStatus($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_sarifs_status_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_sarifs_status === null) {
                $this->_code_scanning_sarifs_status = new CodeScanningSarifsStatusEntity($this, null);
            }
            return $this->_code_scanning_sarifs_status;
        }
        return new CodeScanningSarifsStatusEntity($this, $data);
    }


    private $_code_scanning_variant_analysi = null;

    // Canonical facade: $client->CodeScanningVariantAnalysi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_variant_analysi()
    // resolves here too.
    public function CodeScanningVariantAnalysi($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_variant_analysi_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_variant_analysi === null) {
                $this->_code_scanning_variant_analysi = new CodeScanningVariantAnalysiEntity($this, null);
            }
            return $this->_code_scanning_variant_analysi;
        }
        return new CodeScanningVariantAnalysiEntity($this, $data);
    }


    private $_code_scanning_variant_analysis_repo_task = null;

    // Canonical facade: $client->CodeScanningVariantAnalysisRepoTask()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_scanning_variant_analysis_repo_task()
    // resolves here too.
    public function CodeScanningVariantAnalysisRepoTask($data = null)
    {
        require_once __DIR__ . '/entity/code_scanning_variant_analysis_repo_task_entity.php';
        if ($data === null) {
            if ($this->_code_scanning_variant_analysis_repo_task === null) {
                $this->_code_scanning_variant_analysis_repo_task = new CodeScanningVariantAnalysisRepoTaskEntity($this, null);
            }
            return $this->_code_scanning_variant_analysis_repo_task;
        }
        return new CodeScanningVariantAnalysisRepoTaskEntity($this, $data);
    }


    private $_code_security = null;

    // Canonical facade: $client->CodeSecurity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_security()
    // resolves here too.
    public function CodeSecurity($data = null)
    {
        require_once __DIR__ . '/entity/code_security_entity.php';
        if ($data === null) {
            if ($this->_code_security === null) {
                $this->_code_security = new CodeSecurityEntity($this, null);
            }
            return $this->_code_security;
        }
        return new CodeSecurityEntity($this, $data);
    }


    private $_code_security_configuration = null;

    // Canonical facade: $client->CodeSecurityConfiguration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_security_configuration()
    // resolves here too.
    public function CodeSecurityConfiguration($data = null)
    {
        require_once __DIR__ . '/entity/code_security_configuration_entity.php';
        if ($data === null) {
            if ($this->_code_security_configuration === null) {
                $this->_code_security_configuration = new CodeSecurityConfigurationEntity($this, null);
            }
            return $this->_code_security_configuration;
        }
        return new CodeSecurityConfigurationEntity($this, $data);
    }


    private $_code_security_configuration_repository = null;

    // Canonical facade: $client->CodeSecurityConfigurationRepository()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_security_configuration_repository()
    // resolves here too.
    public function CodeSecurityConfigurationRepository($data = null)
    {
        require_once __DIR__ . '/entity/code_security_configuration_repository_entity.php';
        if ($data === null) {
            if ($this->_code_security_configuration_repository === null) {
                $this->_code_security_configuration_repository = new CodeSecurityConfigurationRepositoryEntity($this, null);
            }
            return $this->_code_security_configuration_repository;
        }
        return new CodeSecurityConfigurationRepositoryEntity($this, $data);
    }


    private $_code_security_default_configuration = null;

    // Canonical facade: $client->CodeSecurityDefaultConfiguration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->code_security_default_configuration()
    // resolves here too.
    public function CodeSecurityDefaultConfiguration($data = null)
    {
        require_once __DIR__ . '/entity/code_security_default_configuration_entity.php';
        if ($data === null) {
            if ($this->_code_security_default_configuration === null) {
                $this->_code_security_default_configuration = new CodeSecurityDefaultConfigurationEntity($this, null);
            }
            return $this->_code_security_default_configuration;
        }
        return new CodeSecurityDefaultConfigurationEntity($this, $data);
    }


    private $_codeowners_error = null;

    // Canonical facade: $client->CodeownersError()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->codeowners_error()
    // resolves here too.
    public function CodeownersError($data = null)
    {
        require_once __DIR__ . '/entity/codeowners_error_entity.php';
        if ($data === null) {
            if ($this->_codeowners_error === null) {
                $this->_codeowners_error = new CodeownersErrorEntity($this, null);
            }
            return $this->_codeowners_error;
        }
        return new CodeownersErrorEntity($this, $data);
    }


    private $_codespace = null;

    // Canonical facade: $client->Codespace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->codespace()
    // resolves here too.
    public function Codespace($data = null)
    {
        require_once __DIR__ . '/entity/codespace_entity.php';
        if ($data === null) {
            if ($this->_codespace === null) {
                $this->_codespace = new CodespaceEntity($this, null);
            }
            return $this->_codespace;
        }
        return new CodespaceEntity($this, $data);
    }


    private $_collaborator = null;

    // Canonical facade: $client->Collaborator()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->collaborator()
    // resolves here too.
    public function Collaborator($data = null)
    {
        require_once __DIR__ . '/entity/collaborator_entity.php';
        if ($data === null) {
            if ($this->_collaborator === null) {
                $this->_collaborator = new CollaboratorEntity($this, null);
            }
            return $this->_collaborator;
        }
        return new CollaboratorEntity($this, $data);
    }


    private $_combined_billing_usage = null;

    // Canonical facade: $client->CombinedBillingUsage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->combined_billing_usage()
    // resolves here too.
    public function CombinedBillingUsage($data = null)
    {
        require_once __DIR__ . '/entity/combined_billing_usage_entity.php';
        if ($data === null) {
            if ($this->_combined_billing_usage === null) {
                $this->_combined_billing_usage = new CombinedBillingUsageEntity($this, null);
            }
            return $this->_combined_billing_usage;
        }
        return new CombinedBillingUsageEntity($this, $data);
    }


    private $_combined_commit_status = null;

    // Canonical facade: $client->CombinedCommitStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->combined_commit_status()
    // resolves here too.
    public function CombinedCommitStatus($data = null)
    {
        require_once __DIR__ . '/entity/combined_commit_status_entity.php';
        if ($data === null) {
            if ($this->_combined_commit_status === null) {
                $this->_combined_commit_status = new CombinedCommitStatusEntity($this, null);
            }
            return $this->_combined_commit_status;
        }
        return new CombinedCommitStatusEntity($this, $data);
    }


    private $_commit = null;

    // Canonical facade: $client->Commit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->commit()
    // resolves here too.
    public function Commit($data = null)
    {
        require_once __DIR__ . '/entity/commit_entity.php';
        if ($data === null) {
            if ($this->_commit === null) {
                $this->_commit = new CommitEntity($this, null);
            }
            return $this->_commit;
        }
        return new CommitEntity($this, $data);
    }


    private $_commit_activity = null;

    // Canonical facade: $client->CommitActivity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->commit_activity()
    // resolves here too.
    public function CommitActivity($data = null)
    {
        require_once __DIR__ . '/entity/commit_activity_entity.php';
        if ($data === null) {
            if ($this->_commit_activity === null) {
                $this->_commit_activity = new CommitActivityEntity($this, null);
            }
            return $this->_commit_activity;
        }
        return new CommitActivityEntity($this, $data);
    }


    private $_commit_comment = null;

    // Canonical facade: $client->CommitComment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->commit_comment()
    // resolves here too.
    public function CommitComment($data = null)
    {
        require_once __DIR__ . '/entity/commit_comment_entity.php';
        if ($data === null) {
            if ($this->_commit_comment === null) {
                $this->_commit_comment = new CommitCommentEntity($this, null);
            }
            return $this->_commit_comment;
        }
        return new CommitCommentEntity($this, $data);
    }


    private $_commit_comparison = null;

    // Canonical facade: $client->CommitComparison()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->commit_comparison()
    // resolves here too.
    public function CommitComparison($data = null)
    {
        require_once __DIR__ . '/entity/commit_comparison_entity.php';
        if ($data === null) {
            if ($this->_commit_comparison === null) {
                $this->_commit_comparison = new CommitComparisonEntity($this, null);
            }
            return $this->_commit_comparison;
        }
        return new CommitComparisonEntity($this, $data);
    }


    private $_community_profile = null;

    // Canonical facade: $client->CommunityProfile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->community_profile()
    // resolves here too.
    public function CommunityProfile($data = null)
    {
        require_once __DIR__ . '/entity/community_profile_entity.php';
        if ($data === null) {
            if ($this->_community_profile === null) {
                $this->_community_profile = new CommunityProfileEntity($this, null);
            }
            return $this->_community_profile;
        }
        return new CommunityProfileEntity($this, $data);
    }


    private $_content_file = null;

    // Canonical facade: $client->ContentFile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->content_file()
    // resolves here too.
    public function ContentFile($data = null)
    {
        require_once __DIR__ . '/entity/content_file_entity.php';
        if ($data === null) {
            if ($this->_content_file === null) {
                $this->_content_file = new ContentFileEntity($this, null);
            }
            return $this->_content_file;
        }
        return new ContentFileEntity($this, $data);
    }


    private $_content_traffic = null;

    // Canonical facade: $client->ContentTraffic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->content_traffic()
    // resolves here too.
    public function ContentTraffic($data = null)
    {
        require_once __DIR__ . '/entity/content_traffic_entity.php';
        if ($data === null) {
            if ($this->_content_traffic === null) {
                $this->_content_traffic = new ContentTrafficEntity($this, null);
            }
            return $this->_content_traffic;
        }
        return new ContentTrafficEntity($this, $data);
    }


    private $_contributor = null;

    // Canonical facade: $client->Contributor()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contributor()
    // resolves here too.
    public function Contributor($data = null)
    {
        require_once __DIR__ . '/entity/contributor_entity.php';
        if ($data === null) {
            if ($this->_contributor === null) {
                $this->_contributor = new ContributorEntity($this, null);
            }
            return $this->_contributor;
        }
        return new ContributorEntity($this, $data);
    }


    private $_copilot = null;

    // Canonical facade: $client->Copilot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->copilot()
    // resolves here too.
    public function Copilot($data = null)
    {
        require_once __DIR__ . '/entity/copilot_entity.php';
        if ($data === null) {
            if ($this->_copilot === null) {
                $this->_copilot = new CopilotEntity($this, null);
            }
            return $this->_copilot;
        }
        return new CopilotEntity($this, $data);
    }


    private $_copilot_organization_detail = null;

    // Canonical facade: $client->CopilotOrganizationDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->copilot_organization_detail()
    // resolves here too.
    public function CopilotOrganizationDetail($data = null)
    {
        require_once __DIR__ . '/entity/copilot_organization_detail_entity.php';
        if ($data === null) {
            if ($this->_copilot_organization_detail === null) {
                $this->_copilot_organization_detail = new CopilotOrganizationDetailEntity($this, null);
            }
            return $this->_copilot_organization_detail;
        }
        return new CopilotOrganizationDetailEntity($this, $data);
    }


    private $_copilot_usage_metrics_day = null;

    // Canonical facade: $client->CopilotUsageMetricsDay()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->copilot_usage_metrics_day()
    // resolves here too.
    public function CopilotUsageMetricsDay($data = null)
    {
        require_once __DIR__ . '/entity/copilot_usage_metrics_day_entity.php';
        if ($data === null) {
            if ($this->_copilot_usage_metrics_day === null) {
                $this->_copilot_usage_metrics_day = new CopilotUsageMetricsDayEntity($this, null);
            }
            return $this->_copilot_usage_metrics_day;
        }
        return new CopilotUsageMetricsDayEntity($this, $data);
    }


    private $_credential = null;

    // Canonical facade: $client->Credential()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credential()
    // resolves here too.
    public function Credential($data = null)
    {
        require_once __DIR__ . '/entity/credential_entity.php';
        if ($data === null) {
            if ($this->_credential === null) {
                $this->_credential = new CredentialEntity($this, null);
            }
            return $this->_credential;
        }
        return new CredentialEntity($this, $data);
    }


    private $_custom_property = null;

    // Canonical facade: $client->CustomProperty()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_property()
    // resolves here too.
    public function CustomProperty($data = null)
    {
        require_once __DIR__ . '/entity/custom_property_entity.php';
        if ($data === null) {
            if ($this->_custom_property === null) {
                $this->_custom_property = new CustomPropertyEntity($this, null);
            }
            return $this->_custom_property;
        }
        return new CustomPropertyEntity($this, $data);
    }


    private $_custom_property_value = null;

    // Canonical facade: $client->CustomPropertyValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_property_value()
    // resolves here too.
    public function CustomPropertyValue($data = null)
    {
        require_once __DIR__ . '/entity/custom_property_value_entity.php';
        if ($data === null) {
            if ($this->_custom_property_value === null) {
                $this->_custom_property_value = new CustomPropertyValueEntity($this, null);
            }
            return $this->_custom_property_value;
        }
        return new CustomPropertyValueEntity($this, $data);
    }


    private $_dependabot = null;

    // Canonical facade: $client->Dependabot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependabot()
    // resolves here too.
    public function Dependabot($data = null)
    {
        require_once __DIR__ . '/entity/dependabot_entity.php';
        if ($data === null) {
            if ($this->_dependabot === null) {
                $this->_dependabot = new DependabotEntity($this, null);
            }
            return $this->_dependabot;
        }
        return new DependabotEntity($this, $data);
    }


    private $_dependabot_alert = null;

    // Canonical facade: $client->DependabotAlert()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependabot_alert()
    // resolves here too.
    public function DependabotAlert($data = null)
    {
        require_once __DIR__ . '/entity/dependabot_alert_entity.php';
        if ($data === null) {
            if ($this->_dependabot_alert === null) {
                $this->_dependabot_alert = new DependabotAlertEntity($this, null);
            }
            return $this->_dependabot_alert;
        }
        return new DependabotAlertEntity($this, $data);
    }


    private $_dependabot_alert_with_repository = null;

    // Canonical facade: $client->DependabotAlertWithRepository()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependabot_alert_with_repository()
    // resolves here too.
    public function DependabotAlertWithRepository($data = null)
    {
        require_once __DIR__ . '/entity/dependabot_alert_with_repository_entity.php';
        if ($data === null) {
            if ($this->_dependabot_alert_with_repository === null) {
                $this->_dependabot_alert_with_repository = new DependabotAlertWithRepositoryEntity($this, null);
            }
            return $this->_dependabot_alert_with_repository;
        }
        return new DependabotAlertWithRepositoryEntity($this, $data);
    }


    private $_dependabot_public_key = null;

    // Canonical facade: $client->DependabotPublicKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependabot_public_key()
    // resolves here too.
    public function DependabotPublicKey($data = null)
    {
        require_once __DIR__ . '/entity/dependabot_public_key_entity.php';
        if ($data === null) {
            if ($this->_dependabot_public_key === null) {
                $this->_dependabot_public_key = new DependabotPublicKeyEntity($this, null);
            }
            return $this->_dependabot_public_key;
        }
        return new DependabotPublicKeyEntity($this, $data);
    }


    private $_dependabot_repository_access_detail = null;

    // Canonical facade: $client->DependabotRepositoryAccessDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependabot_repository_access_detail()
    // resolves here too.
    public function DependabotRepositoryAccessDetail($data = null)
    {
        require_once __DIR__ . '/entity/dependabot_repository_access_detail_entity.php';
        if ($data === null) {
            if ($this->_dependabot_repository_access_detail === null) {
                $this->_dependabot_repository_access_detail = new DependabotRepositoryAccessDetailEntity($this, null);
            }
            return $this->_dependabot_repository_access_detail;
        }
        return new DependabotRepositoryAccessDetailEntity($this, $data);
    }


    private $_dependabot_secret = null;

    // Canonical facade: $client->DependabotSecret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependabot_secret()
    // resolves here too.
    public function DependabotSecret($data = null)
    {
        require_once __DIR__ . '/entity/dependabot_secret_entity.php';
        if ($data === null) {
            if ($this->_dependabot_secret === null) {
                $this->_dependabot_secret = new DependabotSecretEntity($this, null);
            }
            return $this->_dependabot_secret;
        }
        return new DependabotSecretEntity($this, $data);
    }


    private $_dependency_graph = null;

    // Canonical facade: $client->DependencyGraph()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependency_graph()
    // resolves here too.
    public function DependencyGraph($data = null)
    {
        require_once __DIR__ . '/entity/dependency_graph_entity.php';
        if ($data === null) {
            if ($this->_dependency_graph === null) {
                $this->_dependency_graph = new DependencyGraphEntity($this, null);
            }
            return $this->_dependency_graph;
        }
        return new DependencyGraphEntity($this, $data);
    }


    private $_dependency_graph_diff = null;

    // Canonical facade: $client->DependencyGraphDiff()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependency_graph_diff()
    // resolves here too.
    public function DependencyGraphDiff($data = null)
    {
        require_once __DIR__ . '/entity/dependency_graph_diff_entity.php';
        if ($data === null) {
            if ($this->_dependency_graph_diff === null) {
                $this->_dependency_graph_diff = new DependencyGraphDiffEntity($this, null);
            }
            return $this->_dependency_graph_diff;
        }
        return new DependencyGraphDiffEntity($this, $data);
    }


    private $_dependency_graph_spdx_sbom = null;

    // Canonical facade: $client->DependencyGraphSpdxSbom()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependency_graph_spdx_sbom()
    // resolves here too.
    public function DependencyGraphSpdxSbom($data = null)
    {
        require_once __DIR__ . '/entity/dependency_graph_spdx_sbom_entity.php';
        if ($data === null) {
            if ($this->_dependency_graph_spdx_sbom === null) {
                $this->_dependency_graph_spdx_sbom = new DependencyGraphSpdxSbomEntity($this, null);
            }
            return $this->_dependency_graph_spdx_sbom;
        }
        return new DependencyGraphSpdxSbomEntity($this, $data);
    }


    private $_deploy_key = null;

    // Canonical facade: $client->DeployKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deploy_key()
    // resolves here too.
    public function DeployKey($data = null)
    {
        require_once __DIR__ . '/entity/deploy_key_entity.php';
        if ($data === null) {
            if ($this->_deploy_key === null) {
                $this->_deploy_key = new DeployKeyEntity($this, null);
            }
            return $this->_deploy_key;
        }
        return new DeployKeyEntity($this, $data);
    }


    private $_deployment = null;

    // Canonical facade: $client->Deployment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deployment()
    // resolves here too.
    public function Deployment($data = null)
    {
        require_once __DIR__ . '/entity/deployment_entity.php';
        if ($data === null) {
            if ($this->_deployment === null) {
                $this->_deployment = new DeploymentEntity($this, null);
            }
            return $this->_deployment;
        }
        return new DeploymentEntity($this, $data);
    }


    private $_deployment_branch_policy = null;

    // Canonical facade: $client->DeploymentBranchPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deployment_branch_policy()
    // resolves here too.
    public function DeploymentBranchPolicy($data = null)
    {
        require_once __DIR__ . '/entity/deployment_branch_policy_entity.php';
        if ($data === null) {
            if ($this->_deployment_branch_policy === null) {
                $this->_deployment_branch_policy = new DeploymentBranchPolicyEntity($this, null);
            }
            return $this->_deployment_branch_policy;
        }
        return new DeploymentBranchPolicyEntity($this, $data);
    }


    private $_deployment_protection_rule = null;

    // Canonical facade: $client->DeploymentProtectionRule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deployment_protection_rule()
    // resolves here too.
    public function DeploymentProtectionRule($data = null)
    {
        require_once __DIR__ . '/entity/deployment_protection_rule_entity.php';
        if ($data === null) {
            if ($this->_deployment_protection_rule === null) {
                $this->_deployment_protection_rule = new DeploymentProtectionRuleEntity($this, null);
            }
            return $this->_deployment_protection_rule;
        }
        return new DeploymentProtectionRuleEntity($this, $data);
    }


    private $_deployment_status = null;

    // Canonical facade: $client->DeploymentStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deployment_status()
    // resolves here too.
    public function DeploymentStatus($data = null)
    {
        require_once __DIR__ . '/entity/deployment_status_entity.php';
        if ($data === null) {
            if ($this->_deployment_status === null) {
                $this->_deployment_status = new DeploymentStatusEntity($this, null);
            }
            return $this->_deployment_status;
        }
        return new DeploymentStatusEntity($this, $data);
    }


    private $_diff_entry = null;

    // Canonical facade: $client->DiffEntry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->diff_entry()
    // resolves here too.
    public function DiffEntry($data = null)
    {
        require_once __DIR__ . '/entity/diff_entry_entity.php';
        if ($data === null) {
            if ($this->_diff_entry === null) {
                $this->_diff_entry = new DiffEntryEntity($this, null);
            }
            return $this->_diff_entry;
        }
        return new DiffEntryEntity($this, $data);
    }


    private $_email = null;

    // Canonical facade: $client->Email()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email()
    // resolves here too.
    public function Email($data = null)
    {
        require_once __DIR__ . '/entity/email_entity.php';
        if ($data === null) {
            if ($this->_email === null) {
                $this->_email = new EmailEntity($this, null);
            }
            return $this->_email;
        }
        return new EmailEntity($this, $data);
    }


    private $_emoji = null;

    // Canonical facade: $client->Emoji()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->emoji()
    // resolves here too.
    public function Emoji($data = null)
    {
        require_once __DIR__ . '/entity/emoji_entity.php';
        if ($data === null) {
            if ($this->_emoji === null) {
                $this->_emoji = new EmojiEntity($this, null);
            }
            return $this->_emoji;
        }
        return new EmojiEntity($this, $data);
    }


    private $_empty_object = null;

    // Canonical facade: $client->EmptyObject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->empty_object()
    // resolves here too.
    public function EmptyObject($data = null)
    {
        require_once __DIR__ . '/entity/empty_object_entity.php';
        if ($data === null) {
            if ($this->_empty_object === null) {
                $this->_empty_object = new EmptyObjectEntity($this, null);
            }
            return $this->_empty_object;
        }
        return new EmptyObjectEntity($this, $data);
    }


    private $_enterprise_team = null;

    // Canonical facade: $client->EnterpriseTeam()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enterprise_team()
    // resolves here too.
    public function EnterpriseTeam($data = null)
    {
        require_once __DIR__ . '/entity/enterprise_team_entity.php';
        if ($data === null) {
            if ($this->_enterprise_team === null) {
                $this->_enterprise_team = new EnterpriseTeamEntity($this, null);
            }
            return $this->_enterprise_team;
        }
        return new EnterpriseTeamEntity($this, $data);
    }


    private $_enterprise_team_membership = null;

    // Canonical facade: $client->EnterpriseTeamMembership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enterprise_team_membership()
    // resolves here too.
    public function EnterpriseTeamMembership($data = null)
    {
        require_once __DIR__ . '/entity/enterprise_team_membership_entity.php';
        if ($data === null) {
            if ($this->_enterprise_team_membership === null) {
                $this->_enterprise_team_membership = new EnterpriseTeamMembershipEntity($this, null);
            }
            return $this->_enterprise_team_membership;
        }
        return new EnterpriseTeamMembershipEntity($this, $data);
    }


    private $_environment = null;

    // Canonical facade: $client->Environment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->environment()
    // resolves here too.
    public function Environment($data = null)
    {
        require_once __DIR__ . '/entity/environment_entity.php';
        if ($data === null) {
            if ($this->_environment === null) {
                $this->_environment = new EnvironmentEntity($this, null);
            }
            return $this->_environment;
        }
        return new EnvironmentEntity($this, $data);
    }


    private $_environment_approval = null;

    // Canonical facade: $client->EnvironmentApproval()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->environment_approval()
    // resolves here too.
    public function EnvironmentApproval($data = null)
    {
        require_once __DIR__ . '/entity/environment_approval_entity.php';
        if ($data === null) {
            if ($this->_environment_approval === null) {
                $this->_environment_approval = new EnvironmentApprovalEntity($this, null);
            }
            return $this->_environment_approval;
        }
        return new EnvironmentApprovalEntity($this, $data);
    }


    private $_event = null;

    // Canonical facade: $client->Event()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->event()
    // resolves here too.
    public function Event($data = null)
    {
        require_once __DIR__ . '/entity/event_entity.php';
        if ($data === null) {
            if ($this->_event === null) {
                $this->_event = new EventEntity($this, null);
            }
            return $this->_event;
        }
        return new EventEntity($this, $data);
    }


    private $_feed = null;

    // Canonical facade: $client->Feed()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feed()
    // resolves here too.
    public function Feed($data = null)
    {
        require_once __DIR__ . '/entity/feed_entity.php';
        if ($data === null) {
            if ($this->_feed === null) {
                $this->_feed = new FeedEntity($this, null);
            }
            return $this->_feed;
        }
        return new FeedEntity($this, $data);
    }


    private $_file_commit = null;

    // Canonical facade: $client->FileCommit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->file_commit()
    // resolves here too.
    public function FileCommit($data = null)
    {
        require_once __DIR__ . '/entity/file_commit_entity.php';
        if ($data === null) {
            if ($this->_file_commit === null) {
                $this->_file_commit = new FileCommitEntity($this, null);
            }
            return $this->_file_commit;
        }
        return new FileCommitEntity($this, $data);
    }


    private $_follower = null;

    // Canonical facade: $client->Follower()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->follower()
    // resolves here too.
    public function Follower($data = null)
    {
        require_once __DIR__ . '/entity/follower_entity.php';
        if ($data === null) {
            if ($this->_follower === null) {
                $this->_follower = new FollowerEntity($this, null);
            }
            return $this->_follower;
        }
        return new FollowerEntity($this, $data);
    }


    private $_following = null;

    // Canonical facade: $client->Following()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->following()
    // resolves here too.
    public function Following($data = null)
    {
        require_once __DIR__ . '/entity/following_entity.php';
        if ($data === null) {
            if ($this->_following === null) {
                $this->_following = new FollowingEntity($this, null);
            }
            return $this->_following;
        }
        return new FollowingEntity($this, $data);
    }


    private $_full_repository = null;

    // Canonical facade: $client->FullRepository()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->full_repository()
    // resolves here too.
    public function FullRepository($data = null)
    {
        require_once __DIR__ . '/entity/full_repository_entity.php';
        if ($data === null) {
            if ($this->_full_repository === null) {
                $this->_full_repository = new FullRepositoryEntity($this, null);
            }
            return $this->_full_repository;
        }
        return new FullRepositoryEntity($this, $data);
    }


    private $_gist = null;

    // Canonical facade: $client->Gist()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gist()
    // resolves here too.
    public function Gist($data = null)
    {
        require_once __DIR__ . '/entity/gist_entity.php';
        if ($data === null) {
            if ($this->_gist === null) {
                $this->_gist = new GistEntity($this, null);
            }
            return $this->_gist;
        }
        return new GistEntity($this, $data);
    }


    private $_gist_comment = null;

    // Canonical facade: $client->GistComment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gist_comment()
    // resolves here too.
    public function GistComment($data = null)
    {
        require_once __DIR__ . '/entity/gist_comment_entity.php';
        if ($data === null) {
            if ($this->_gist_comment === null) {
                $this->_gist_comment = new GistCommentEntity($this, null);
            }
            return $this->_gist_comment;
        }
        return new GistCommentEntity($this, $data);
    }


    private $_gist_commit = null;

    // Canonical facade: $client->GistCommit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gist_commit()
    // resolves here too.
    public function GistCommit($data = null)
    {
        require_once __DIR__ . '/entity/gist_commit_entity.php';
        if ($data === null) {
            if ($this->_gist_commit === null) {
                $this->_gist_commit = new GistCommitEntity($this, null);
            }
            return $this->_gist_commit;
        }
        return new GistCommitEntity($this, $data);
    }


    private $_gist_simple = null;

    // Canonical facade: $client->GistSimple()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gist_simple()
    // resolves here too.
    public function GistSimple($data = null)
    {
        require_once __DIR__ . '/entity/gist_simple_entity.php';
        if ($data === null) {
            if ($this->_gist_simple === null) {
                $this->_gist_simple = new GistSimpleEntity($this, null);
            }
            return $this->_gist_simple;
        }
        return new GistSimpleEntity($this, $data);
    }


    private $_git = null;

    // Canonical facade: $client->Git()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->git()
    // resolves here too.
    public function Git($data = null)
    {
        require_once __DIR__ . '/entity/git_entity.php';
        if ($data === null) {
            if ($this->_git === null) {
                $this->_git = new GitEntity($this, null);
            }
            return $this->_git;
        }
        return new GitEntity($this, $data);
    }


    private $_git_commit = null;

    // Canonical facade: $client->GitCommit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->git_commit()
    // resolves here too.
    public function GitCommit($data = null)
    {
        require_once __DIR__ . '/entity/git_commit_entity.php';
        if ($data === null) {
            if ($this->_git_commit === null) {
                $this->_git_commit = new GitCommitEntity($this, null);
            }
            return $this->_git_commit;
        }
        return new GitCommitEntity($this, $data);
    }


    private $_git_ref = null;

    // Canonical facade: $client->GitRef()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->git_ref()
    // resolves here too.
    public function GitRef($data = null)
    {
        require_once __DIR__ . '/entity/git_ref_entity.php';
        if ($data === null) {
            if ($this->_git_ref === null) {
                $this->_git_ref = new GitRefEntity($this, null);
            }
            return $this->_git_ref;
        }
        return new GitRefEntity($this, $data);
    }


    private $_git_tag = null;

    // Canonical facade: $client->GitTag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->git_tag()
    // resolves here too.
    public function GitTag($data = null)
    {
        require_once __DIR__ . '/entity/git_tag_entity.php';
        if ($data === null) {
            if ($this->_git_tag === null) {
                $this->_git_tag = new GitTagEntity($this, null);
            }
            return $this->_git_tag;
        }
        return new GitTagEntity($this, $data);
    }


    private $_git_tree = null;

    // Canonical facade: $client->GitTree()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->git_tree()
    // resolves here too.
    public function GitTree($data = null)
    {
        require_once __DIR__ . '/entity/git_tree_entity.php';
        if ($data === null) {
            if ($this->_git_tree === null) {
                $this->_git_tree = new GitTreeEntity($this, null);
            }
            return $this->_git_tree;
        }
        return new GitTreeEntity($this, $data);
    }


    private $_gitignore = null;

    // Canonical facade: $client->Gitignore()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gitignore()
    // resolves here too.
    public function Gitignore($data = null)
    {
        require_once __DIR__ . '/entity/gitignore_entity.php';
        if ($data === null) {
            if ($this->_gitignore === null) {
                $this->_gitignore = new GitignoreEntity($this, null);
            }
            return $this->_gitignore;
        }
        return new GitignoreEntity($this, $data);
    }


    private $_gitignore_template = null;

    // Canonical facade: $client->GitignoreTemplate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gitignore_template()
    // resolves here too.
    public function GitignoreTemplate($data = null)
    {
        require_once __DIR__ . '/entity/gitignore_template_entity.php';
        if ($data === null) {
            if ($this->_gitignore_template === null) {
                $this->_gitignore_template = new GitignoreTemplateEntity($this, null);
            }
            return $this->_gitignore_template;
        }
        return new GitignoreTemplateEntity($this, $data);
    }


    private $_global_advisory = null;

    // Canonical facade: $client->GlobalAdvisory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->global_advisory()
    // resolves here too.
    public function GlobalAdvisory($data = null)
    {
        require_once __DIR__ . '/entity/global_advisory_entity.php';
        if ($data === null) {
            if ($this->_global_advisory === null) {
                $this->_global_advisory = new GlobalAdvisoryEntity($this, null);
            }
            return $this->_global_advisory;
        }
        return new GlobalAdvisoryEntity($this, $data);
    }


    private $_gpg_key = null;

    // Canonical facade: $client->GpgKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->gpg_key()
    // resolves here too.
    public function GpgKey($data = null)
    {
        require_once __DIR__ . '/entity/gpg_key_entity.php';
        if ($data === null) {
            if ($this->_gpg_key === null) {
                $this->_gpg_key = new GpgKeyEntity($this, null);
            }
            return $this->_gpg_key;
        }
        return new GpgKeyEntity($this, $data);
    }


    private $_hook = null;

    // Canonical facade: $client->Hook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->hook()
    // resolves here too.
    public function Hook($data = null)
    {
        require_once __DIR__ . '/entity/hook_entity.php';
        if ($data === null) {
            if ($this->_hook === null) {
                $this->_hook = new HookEntity($this, null);
            }
            return $this->_hook;
        }
        return new HookEntity($this, $data);
    }


    private $_hook_delivery = null;

    // Canonical facade: $client->HookDelivery()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->hook_delivery()
    // resolves here too.
    public function HookDelivery($data = null)
    {
        require_once __DIR__ . '/entity/hook_delivery_entity.php';
        if ($data === null) {
            if ($this->_hook_delivery === null) {
                $this->_hook_delivery = new HookDeliveryEntity($this, null);
            }
            return $this->_hook_delivery;
        }
        return new HookDeliveryEntity($this, $data);
    }


    private $_hook_delivery_item = null;

    // Canonical facade: $client->HookDeliveryItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->hook_delivery_item()
    // resolves here too.
    public function HookDeliveryItem($data = null)
    {
        require_once __DIR__ . '/entity/hook_delivery_item_entity.php';
        if ($data === null) {
            if ($this->_hook_delivery_item === null) {
                $this->_hook_delivery_item = new HookDeliveryItemEntity($this, null);
            }
            return $this->_hook_delivery_item;
        }
        return new HookDeliveryItemEntity($this, $data);
    }


    private $_hosted_compute = null;

    // Canonical facade: $client->HostedCompute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->hosted_compute()
    // resolves here too.
    public function HostedCompute($data = null)
    {
        require_once __DIR__ . '/entity/hosted_compute_entity.php';
        if ($data === null) {
            if ($this->_hosted_compute === null) {
                $this->_hosted_compute = new HostedComputeEntity($this, null);
            }
            return $this->_hosted_compute;
        }
        return new HostedComputeEntity($this, $data);
    }


    private $_hovercard = null;

    // Canonical facade: $client->Hovercard()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->hovercard()
    // resolves here too.
    public function Hovercard($data = null)
    {
        require_once __DIR__ . '/entity/hovercard_entity.php';
        if ($data === null) {
            if ($this->_hovercard === null) {
                $this->_hovercard = new HovercardEntity($this, null);
            }
            return $this->_hovercard;
        }
        return new HovercardEntity($this, $data);
    }


    private $_import = null;

    // Canonical facade: $client->Import()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->import()
    // resolves here too.
    public function Import($data = null)
    {
        require_once __DIR__ . '/entity/import_entity.php';
        if ($data === null) {
            if ($this->_import === null) {
                $this->_import = new ImportEntity($this, null);
            }
            return $this->_import;
        }
        return new ImportEntity($this, $data);
    }


    private $_installation = null;

    // Canonical facade: $client->Installation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->installation()
    // resolves here too.
    public function Installation($data = null)
    {
        require_once __DIR__ . '/entity/installation_entity.php';
        if ($data === null) {
            if ($this->_installation === null) {
                $this->_installation = new InstallationEntity($this, null);
            }
            return $this->_installation;
        }
        return new InstallationEntity($this, $data);
    }


    private $_installation_token = null;

    // Canonical facade: $client->InstallationToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->installation_token()
    // resolves here too.
    public function InstallationToken($data = null)
    {
        require_once __DIR__ . '/entity/installation_token_entity.php';
        if ($data === null) {
            if ($this->_installation_token === null) {
                $this->_installation_token = new InstallationTokenEntity($this, null);
            }
            return $this->_installation_token;
        }
        return new InstallationTokenEntity($this, $data);
    }


    private $_integration = null;

    // Canonical facade: $client->Integration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integration()
    // resolves here too.
    public function Integration($data = null)
    {
        require_once __DIR__ . '/entity/integration_entity.php';
        if ($data === null) {
            if ($this->_integration === null) {
                $this->_integration = new IntegrationEntity($this, null);
            }
            return $this->_integration;
        }
        return new IntegrationEntity($this, $data);
    }


    private $_integration_installation = null;

    // Canonical facade: $client->IntegrationInstallation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integration_installation()
    // resolves here too.
    public function IntegrationInstallation($data = null)
    {
        require_once __DIR__ . '/entity/integration_installation_entity.php';
        if ($data === null) {
            if ($this->_integration_installation === null) {
                $this->_integration_installation = new IntegrationInstallationEntity($this, null);
            }
            return $this->_integration_installation;
        }
        return new IntegrationInstallationEntity($this, $data);
    }


    private $_interaction = null;

    // Canonical facade: $client->Interaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->interaction()
    // resolves here too.
    public function Interaction($data = null)
    {
        require_once __DIR__ . '/entity/interaction_entity.php';
        if ($data === null) {
            if ($this->_interaction === null) {
                $this->_interaction = new InteractionEntity($this, null);
            }
            return $this->_interaction;
        }
        return new InteractionEntity($this, $data);
    }


    private $_interaction_limit = null;

    // Canonical facade: $client->InteractionLimit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->interaction_limit()
    // resolves here too.
    public function InteractionLimit($data = null)
    {
        require_once __DIR__ . '/entity/interaction_limit_entity.php';
        if ($data === null) {
            if ($this->_interaction_limit === null) {
                $this->_interaction_limit = new InteractionLimitEntity($this, null);
            }
            return $this->_interaction_limit;
        }
        return new InteractionLimitEntity($this, $data);
    }


    private $_issue = null;

    // Canonical facade: $client->Issue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue()
    // resolves here too.
    public function Issue($data = null)
    {
        require_once __DIR__ . '/entity/issue_entity.php';
        if ($data === null) {
            if ($this->_issue === null) {
                $this->_issue = new IssueEntity($this, null);
            }
            return $this->_issue;
        }
        return new IssueEntity($this, $data);
    }


    private $_issue_type = null;

    // Canonical facade: $client->IssueType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->issue_type()
    // resolves here too.
    public function IssueType($data = null)
    {
        require_once __DIR__ . '/entity/issue_type_entity.php';
        if ($data === null) {
            if ($this->_issue_type === null) {
                $this->_issue_type = new IssueTypeEntity($this, null);
            }
            return $this->_issue_type;
        }
        return new IssueTypeEntity($this, $data);
    }


    private $_job = null;

    // Canonical facade: $client->Job()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->job()
    // resolves here too.
    public function Job($data = null)
    {
        require_once __DIR__ . '/entity/job_entity.php';
        if ($data === null) {
            if ($this->_job === null) {
                $this->_job = new JobEntity($this, null);
            }
            return $this->_job;
        }
        return new JobEntity($this, $data);
    }


    private $_key = null;

    // Canonical facade: $client->Key()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->key()
    // resolves here too.
    public function Key($data = null)
    {
        require_once __DIR__ . '/entity/key_entity.php';
        if ($data === null) {
            if ($this->_key === null) {
                $this->_key = new KeyEntity($this, null);
            }
            return $this->_key;
        }
        return new KeyEntity($this, $data);
    }


    private $_label = null;

    // Canonical facade: $client->Label()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->label()
    // resolves here too.
    public function Label($data = null)
    {
        require_once __DIR__ . '/entity/label_entity.php';
        if ($data === null) {
            if ($this->_label === null) {
                $this->_label = new LabelEntity($this, null);
            }
            return $this->_label;
        }
        return new LabelEntity($this, $data);
    }


    private $_language = null;

    // Canonical facade: $client->Language()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->language()
    // resolves here too.
    public function Language($data = null)
    {
        require_once __DIR__ . '/entity/language_entity.php';
        if ($data === null) {
            if ($this->_language === null) {
                $this->_language = new LanguageEntity($this, null);
            }
            return $this->_language;
        }
        return new LanguageEntity($this, $data);
    }


    private $_license = null;

    // Canonical facade: $client->License()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->license()
    // resolves here too.
    public function License($data = null)
    {
        require_once __DIR__ . '/entity/license_entity.php';
        if ($data === null) {
            if ($this->_license === null) {
                $this->_license = new LicenseEntity($this, null);
            }
            return $this->_license;
        }
        return new LicenseEntity($this, $data);
    }


    private $_markdown = null;

    // Canonical facade: $client->Markdown()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->markdown()
    // resolves here too.
    public function Markdown($data = null)
    {
        require_once __DIR__ . '/entity/markdown_entity.php';
        if ($data === null) {
            if ($this->_markdown === null) {
                $this->_markdown = new MarkdownEntity($this, null);
            }
            return $this->_markdown;
        }
        return new MarkdownEntity($this, $data);
    }


    private $_marketplace_listing_plan = null;

    // Canonical facade: $client->MarketplaceListingPlan()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->marketplace_listing_plan()
    // resolves here too.
    public function MarketplaceListingPlan($data = null)
    {
        require_once __DIR__ . '/entity/marketplace_listing_plan_entity.php';
        if ($data === null) {
            if ($this->_marketplace_listing_plan === null) {
                $this->_marketplace_listing_plan = new MarketplaceListingPlanEntity($this, null);
            }
            return $this->_marketplace_listing_plan;
        }
        return new MarketplaceListingPlanEntity($this, $data);
    }


    private $_marketplace_purchase = null;

    // Canonical facade: $client->MarketplacePurchase()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->marketplace_purchase()
    // resolves here too.
    public function MarketplacePurchase($data = null)
    {
        require_once __DIR__ . '/entity/marketplace_purchase_entity.php';
        if ($data === null) {
            if ($this->_marketplace_purchase === null) {
                $this->_marketplace_purchase = new MarketplacePurchaseEntity($this, null);
            }
            return $this->_marketplace_purchase;
        }
        return new MarketplacePurchaseEntity($this, $data);
    }


    private $_member = null;

    // Canonical facade: $client->Member()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->member()
    // resolves here too.
    public function Member($data = null)
    {
        require_once __DIR__ . '/entity/member_entity.php';
        if ($data === null) {
            if ($this->_member === null) {
                $this->_member = new MemberEntity($this, null);
            }
            return $this->_member;
        }
        return new MemberEntity($this, $data);
    }


    private $_membership = null;

    // Canonical facade: $client->Membership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->membership()
    // resolves here too.
    public function Membership($data = null)
    {
        require_once __DIR__ . '/entity/membership_entity.php';
        if ($data === null) {
            if ($this->_membership === null) {
                $this->_membership = new MembershipEntity($this, null);
            }
            return $this->_membership;
        }
        return new MembershipEntity($this, $data);
    }


    private $_merged_upstream = null;

    // Canonical facade: $client->MergedUpstream()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->merged_upstream()
    // resolves here too.
    public function MergedUpstream($data = null)
    {
        require_once __DIR__ . '/entity/merged_upstream_entity.php';
        if ($data === null) {
            if ($this->_merged_upstream === null) {
                $this->_merged_upstream = new MergedUpstreamEntity($this, null);
            }
            return $this->_merged_upstream;
        }
        return new MergedUpstreamEntity($this, $data);
    }


    private $_meta = null;

    // Canonical facade: $client->Meta()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->meta()
    // resolves here too.
    public function Meta($data = null)
    {
        require_once __DIR__ . '/entity/meta_entity.php';
        if ($data === null) {
            if ($this->_meta === null) {
                $this->_meta = new MetaEntity($this, null);
            }
            return $this->_meta;
        }
        return new MetaEntity($this, $data);
    }


    private $_metaroot = null;

    // Canonical facade: $client->Metaroot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->metaroot()
    // resolves here too.
    public function Metaroot($data = null)
    {
        require_once __DIR__ . '/entity/metaroot_entity.php';
        if ($data === null) {
            if ($this->_metaroot === null) {
                $this->_metaroot = new MetarootEntity($this, null);
            }
            return $this->_metaroot;
        }
        return new MetarootEntity($this, $data);
    }


    private $_migration = null;

    // Canonical facade: $client->Migration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->migration()
    // resolves here too.
    public function Migration($data = null)
    {
        require_once __DIR__ . '/entity/migration_entity.php';
        if ($data === null) {
            if ($this->_migration === null) {
                $this->_migration = new MigrationEntity($this, null);
            }
            return $this->_migration;
        }
        return new MigrationEntity($this, $data);
    }


    private $_milestone = null;

    // Canonical facade: $client->Milestone()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->milestone()
    // resolves here too.
    public function Milestone($data = null)
    {
        require_once __DIR__ . '/entity/milestone_entity.php';
        if ($data === null) {
            if ($this->_milestone === null) {
                $this->_milestone = new MilestoneEntity($this, null);
            }
            return $this->_milestone;
        }
        return new MilestoneEntity($this, $data);
    }


    private $_minimal_repository = null;

    // Canonical facade: $client->MinimalRepository()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->minimal_repository()
    // resolves here too.
    public function MinimalRepository($data = null)
    {
        require_once __DIR__ . '/entity/minimal_repository_entity.php';
        if ($data === null) {
            if ($this->_minimal_repository === null) {
                $this->_minimal_repository = new MinimalRepositoryEntity($this, null);
            }
            return $this->_minimal_repository;
        }
        return new MinimalRepositoryEntity($this, $data);
    }


    private $_network_configuration = null;

    // Canonical facade: $client->NetworkConfiguration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->network_configuration()
    // resolves here too.
    public function NetworkConfiguration($data = null)
    {
        require_once __DIR__ . '/entity/network_configuration_entity.php';
        if ($data === null) {
            if ($this->_network_configuration === null) {
                $this->_network_configuration = new NetworkConfigurationEntity($this, null);
            }
            return $this->_network_configuration;
        }
        return new NetworkConfigurationEntity($this, $data);
    }


    private $_network_setting = null;

    // Canonical facade: $client->NetworkSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->network_setting()
    // resolves here too.
    public function NetworkSetting($data = null)
    {
        require_once __DIR__ . '/entity/network_setting_entity.php';
        if ($data === null) {
            if ($this->_network_setting === null) {
                $this->_network_setting = new NetworkSettingEntity($this, null);
            }
            return $this->_network_setting;
        }
        return new NetworkSettingEntity($this, $data);
    }


    private $_oidc_custom_sub = null;

    // Canonical facade: $client->OidcCustomSub()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->oidc_custom_sub()
    // resolves here too.
    public function OidcCustomSub($data = null)
    {
        require_once __DIR__ . '/entity/oidc_custom_sub_entity.php';
        if ($data === null) {
            if ($this->_oidc_custom_sub === null) {
                $this->_oidc_custom_sub = new OidcCustomSubEntity($this, null);
            }
            return $this->_oidc_custom_sub;
        }
        return new OidcCustomSubEntity($this, $data);
    }


    private $_oidc_custom_sub_repo = null;

    // Canonical facade: $client->OidcCustomSubRepo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->oidc_custom_sub_repo()
    // resolves here too.
    public function OidcCustomSubRepo($data = null)
    {
        require_once __DIR__ . '/entity/oidc_custom_sub_repo_entity.php';
        if ($data === null) {
            if ($this->_oidc_custom_sub_repo === null) {
                $this->_oidc_custom_sub_repo = new OidcCustomSubRepoEntity($this, null);
            }
            return $this->_oidc_custom_sub_repo;
        }
        return new OidcCustomSubRepoEntity($this, $data);
    }


    private $_org = null;

    // Canonical facade: $client->Org()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org()
    // resolves here too.
    public function Org($data = null)
    {
        require_once __DIR__ . '/entity/org_entity.php';
        if ($data === null) {
            if ($this->_org === null) {
                $this->_org = new OrgEntity($this, null);
            }
            return $this->_org;
        }
        return new OrgEntity($this, $data);
    }


    private $_org_hook = null;

    // Canonical facade: $client->OrgHook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org_hook()
    // resolves here too.
    public function OrgHook($data = null)
    {
        require_once __DIR__ . '/entity/org_hook_entity.php';
        if ($data === null) {
            if ($this->_org_hook === null) {
                $this->_org_hook = new OrgHookEntity($this, null);
            }
            return $this->_org_hook;
        }
        return new OrgHookEntity($this, $data);
    }


    private $_org_membership = null;

    // Canonical facade: $client->OrgMembership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org_membership()
    // resolves here too.
    public function OrgMembership($data = null)
    {
        require_once __DIR__ . '/entity/org_membership_entity.php';
        if ($data === null) {
            if ($this->_org_membership === null) {
                $this->_org_membership = new OrgMembershipEntity($this, null);
            }
            return $this->_org_membership;
        }
        return new OrgMembershipEntity($this, $data);
    }


    private $_org_private_registry_configuration = null;

    // Canonical facade: $client->OrgPrivateRegistryConfiguration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org_private_registry_configuration()
    // resolves here too.
    public function OrgPrivateRegistryConfiguration($data = null)
    {
        require_once __DIR__ . '/entity/org_private_registry_configuration_entity.php';
        if ($data === null) {
            if ($this->_org_private_registry_configuration === null) {
                $this->_org_private_registry_configuration = new OrgPrivateRegistryConfigurationEntity($this, null);
            }
            return $this->_org_private_registry_configuration;
        }
        return new OrgPrivateRegistryConfigurationEntity($this, $data);
    }


    private $_org_private_registry_configuration_with_selected_repository = null;

    // Canonical facade: $client->OrgPrivateRegistryConfigurationWithSelectedRepository()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org_private_registry_configuration_with_selected_repository()
    // resolves here too.
    public function OrgPrivateRegistryConfigurationWithSelectedRepository($data = null)
    {
        require_once __DIR__ . '/entity/org_private_registry_configuration_with_selected_repository_entity.php';
        if ($data === null) {
            if ($this->_org_private_registry_configuration_with_selected_repository === null) {
                $this->_org_private_registry_configuration_with_selected_repository = new OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity($this, null);
            }
            return $this->_org_private_registry_configuration_with_selected_repository;
        }
        return new OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity($this, $data);
    }


    private $_org_repo_custom_property_value = null;

    // Canonical facade: $client->OrgRepoCustomPropertyValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org_repo_custom_property_value()
    // resolves here too.
    public function OrgRepoCustomPropertyValue($data = null)
    {
        require_once __DIR__ . '/entity/org_repo_custom_property_value_entity.php';
        if ($data === null) {
            if ($this->_org_repo_custom_property_value === null) {
                $this->_org_repo_custom_property_value = new OrgRepoCustomPropertyValueEntity($this, null);
            }
            return $this->_org_repo_custom_property_value;
        }
        return new OrgRepoCustomPropertyValueEntity($this, $data);
    }


    private $_organization = null;

    // Canonical facade: $client->Organization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization()
    // resolves here too.
    public function Organization($data = null)
    {
        require_once __DIR__ . '/entity/organization_entity.php';
        if ($data === null) {
            if ($this->_organization === null) {
                $this->_organization = new OrganizationEntity($this, null);
            }
            return $this->_organization;
        }
        return new OrganizationEntity($this, $data);
    }


    private $_organization_actions_secret = null;

    // Canonical facade: $client->OrganizationActionsSecret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_actions_secret()
    // resolves here too.
    public function OrganizationActionsSecret($data = null)
    {
        require_once __DIR__ . '/entity/organization_actions_secret_entity.php';
        if ($data === null) {
            if ($this->_organization_actions_secret === null) {
                $this->_organization_actions_secret = new OrganizationActionsSecretEntity($this, null);
            }
            return $this->_organization_actions_secret;
        }
        return new OrganizationActionsSecretEntity($this, $data);
    }


    private $_organization_actions_variable = null;

    // Canonical facade: $client->OrganizationActionsVariable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_actions_variable()
    // resolves here too.
    public function OrganizationActionsVariable($data = null)
    {
        require_once __DIR__ . '/entity/organization_actions_variable_entity.php';
        if ($data === null) {
            if ($this->_organization_actions_variable === null) {
                $this->_organization_actions_variable = new OrganizationActionsVariableEntity($this, null);
            }
            return $this->_organization_actions_variable;
        }
        return new OrganizationActionsVariableEntity($this, $data);
    }


    private $_organization_dependabot_secret = null;

    // Canonical facade: $client->OrganizationDependabotSecret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_dependabot_secret()
    // resolves here too.
    public function OrganizationDependabotSecret($data = null)
    {
        require_once __DIR__ . '/entity/organization_dependabot_secret_entity.php';
        if ($data === null) {
            if ($this->_organization_dependabot_secret === null) {
                $this->_organization_dependabot_secret = new OrganizationDependabotSecretEntity($this, null);
            }
            return $this->_organization_dependabot_secret;
        }
        return new OrganizationDependabotSecretEntity($this, $data);
    }


    private $_organization_invitation = null;

    // Canonical facade: $client->OrganizationInvitation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_invitation()
    // resolves here too.
    public function OrganizationInvitation($data = null)
    {
        require_once __DIR__ . '/entity/organization_invitation_entity.php';
        if ($data === null) {
            if ($this->_organization_invitation === null) {
                $this->_organization_invitation = new OrganizationInvitationEntity($this, null);
            }
            return $this->_organization_invitation;
        }
        return new OrganizationInvitationEntity($this, $data);
    }


    private $_organization_programmatic_access_grant = null;

    // Canonical facade: $client->OrganizationProgrammaticAccessGrant()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_programmatic_access_grant()
    // resolves here too.
    public function OrganizationProgrammaticAccessGrant($data = null)
    {
        require_once __DIR__ . '/entity/organization_programmatic_access_grant_entity.php';
        if ($data === null) {
            if ($this->_organization_programmatic_access_grant === null) {
                $this->_organization_programmatic_access_grant = new OrganizationProgrammaticAccessGrantEntity($this, null);
            }
            return $this->_organization_programmatic_access_grant;
        }
        return new OrganizationProgrammaticAccessGrantEntity($this, $data);
    }


    private $_organization_role = null;

    // Canonical facade: $client->OrganizationRole()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_role()
    // resolves here too.
    public function OrganizationRole($data = null)
    {
        require_once __DIR__ . '/entity/organization_role_entity.php';
        if ($data === null) {
            if ($this->_organization_role === null) {
                $this->_organization_role = new OrganizationRoleEntity($this, null);
            }
            return $this->_organization_role;
        }
        return new OrganizationRoleEntity($this, $data);
    }


    private $_organization_secret_scanning_alert = null;

    // Canonical facade: $client->OrganizationSecretScanningAlert()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_secret_scanning_alert()
    // resolves here too.
    public function OrganizationSecretScanningAlert($data = null)
    {
        require_once __DIR__ . '/entity/organization_secret_scanning_alert_entity.php';
        if ($data === null) {
            if ($this->_organization_secret_scanning_alert === null) {
                $this->_organization_secret_scanning_alert = new OrganizationSecretScanningAlertEntity($this, null);
            }
            return $this->_organization_secret_scanning_alert;
        }
        return new OrganizationSecretScanningAlertEntity($this, $data);
    }


    private $_outside_collaborator = null;

    // Canonical facade: $client->OutsideCollaborator()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->outside_collaborator()
    // resolves here too.
    public function OutsideCollaborator($data = null)
    {
        require_once __DIR__ . '/entity/outside_collaborator_entity.php';
        if ($data === null) {
            if ($this->_outside_collaborator === null) {
                $this->_outside_collaborator = new OutsideCollaboratorEntity($this, null);
            }
            return $this->_outside_collaborator;
        }
        return new OutsideCollaboratorEntity($this, $data);
    }


    private $_package = null;

    // Canonical facade: $client->Package()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->package()
    // resolves here too.
    public function Package($data = null)
    {
        require_once __DIR__ . '/entity/package_entity.php';
        if ($data === null) {
            if ($this->_package === null) {
                $this->_package = new PackageEntity($this, null);
            }
            return $this->_package;
        }
        return new PackageEntity($this, $data);
    }


    private $_page = null;

    // Canonical facade: $client->Page()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->page()
    // resolves here too.
    public function Page($data = null)
    {
        require_once __DIR__ . '/entity/page_entity.php';
        if ($data === null) {
            if ($this->_page === null) {
                $this->_page = new PageEntity($this, null);
            }
            return $this->_page;
        }
        return new PageEntity($this, $data);
    }


    private $_page_build = null;

    // Canonical facade: $client->PageBuild()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->page_build()
    // resolves here too.
    public function PageBuild($data = null)
    {
        require_once __DIR__ . '/entity/page_build_entity.php';
        if ($data === null) {
            if ($this->_page_build === null) {
                $this->_page_build = new PageBuildEntity($this, null);
            }
            return $this->_page_build;
        }
        return new PageBuildEntity($this, $data);
    }


    private $_page_build_status = null;

    // Canonical facade: $client->PageBuildStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->page_build_status()
    // resolves here too.
    public function PageBuildStatus($data = null)
    {
        require_once __DIR__ . '/entity/page_build_status_entity.php';
        if ($data === null) {
            if ($this->_page_build_status === null) {
                $this->_page_build_status = new PageBuildStatusEntity($this, null);
            }
            return $this->_page_build_status;
        }
        return new PageBuildStatusEntity($this, $data);
    }


    private $_page_deployment = null;

    // Canonical facade: $client->PageDeployment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->page_deployment()
    // resolves here too.
    public function PageDeployment($data = null)
    {
        require_once __DIR__ . '/entity/page_deployment_entity.php';
        if ($data === null) {
            if ($this->_page_deployment === null) {
                $this->_page_deployment = new PageDeploymentEntity($this, null);
            }
            return $this->_page_deployment;
        }
        return new PageDeploymentEntity($this, $data);
    }


    private $_pages_deployment_status = null;

    // Canonical facade: $client->PagesDeploymentStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pages_deployment_status()
    // resolves here too.
    public function PagesDeploymentStatus($data = null)
    {
        require_once __DIR__ . '/entity/pages_deployment_status_entity.php';
        if ($data === null) {
            if ($this->_pages_deployment_status === null) {
                $this->_pages_deployment_status = new PagesDeploymentStatusEntity($this, null);
            }
            return $this->_pages_deployment_status;
        }
        return new PagesDeploymentStatusEntity($this, $data);
    }


    private $_pages_health_check = null;

    // Canonical facade: $client->PagesHealthCheck()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pages_health_check()
    // resolves here too.
    public function PagesHealthCheck($data = null)
    {
        require_once __DIR__ . '/entity/pages_health_check_entity.php';
        if ($data === null) {
            if ($this->_pages_health_check === null) {
                $this->_pages_health_check = new PagesHealthCheckEntity($this, null);
            }
            return $this->_pages_health_check;
        }
        return new PagesHealthCheckEntity($this, $data);
    }


    private $_participation = null;

    // Canonical facade: $client->Participation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->participation()
    // resolves here too.
    public function Participation($data = null)
    {
        require_once __DIR__ . '/entity/participation_entity.php';
        if ($data === null) {
            if ($this->_participation === null) {
                $this->_participation = new ParticipationEntity($this, null);
            }
            return $this->_participation;
        }
        return new ParticipationEntity($this, $data);
    }


    private $_pending_deployment = null;

    // Canonical facade: $client->PendingDeployment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pending_deployment()
    // resolves here too.
    public function PendingDeployment($data = null)
    {
        require_once __DIR__ . '/entity/pending_deployment_entity.php';
        if ($data === null) {
            if ($this->_pending_deployment === null) {
                $this->_pending_deployment = new PendingDeploymentEntity($this, null);
            }
            return $this->_pending_deployment;
        }
        return new PendingDeploymentEntity($this, $data);
    }


    private $_porter_author = null;

    // Canonical facade: $client->PorterAuthor()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->porter_author()
    // resolves here too.
    public function PorterAuthor($data = null)
    {
        require_once __DIR__ . '/entity/porter_author_entity.php';
        if ($data === null) {
            if ($this->_porter_author === null) {
                $this->_porter_author = new PorterAuthorEntity($this, null);
            }
            return $this->_porter_author;
        }
        return new PorterAuthorEntity($this, $data);
    }


    private $_porter_large_file = null;

    // Canonical facade: $client->PorterLargeFile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->porter_large_file()
    // resolves here too.
    public function PorterLargeFile($data = null)
    {
        require_once __DIR__ . '/entity/porter_large_file_entity.php';
        if ($data === null) {
            if ($this->_porter_large_file === null) {
                $this->_porter_large_file = new PorterLargeFileEntity($this, null);
            }
            return $this->_porter_large_file;
        }
        return new PorterLargeFileEntity($this, $data);
    }


    private $_private_registry = null;

    // Canonical facade: $client->PrivateRegistry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->private_registry()
    // resolves here too.
    public function PrivateRegistry($data = null)
    {
        require_once __DIR__ . '/entity/private_registry_entity.php';
        if ($data === null) {
            if ($this->_private_registry === null) {
                $this->_private_registry = new PrivateRegistryEntity($this, null);
            }
            return $this->_private_registry;
        }
        return new PrivateRegistryEntity($this, $data);
    }


    private $_private_user = null;

    // Canonical facade: $client->PrivateUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->private_user()
    // resolves here too.
    public function PrivateUser($data = null)
    {
        require_once __DIR__ . '/entity/private_user_entity.php';
        if ($data === null) {
            if ($this->_private_user === null) {
                $this->_private_user = new PrivateUserEntity($this, null);
            }
            return $this->_private_user;
        }
        return new PrivateUserEntity($this, $data);
    }


    private $_project = null;

    // Canonical facade: $client->Project()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project()
    // resolves here too.
    public function Project($data = null)
    {
        require_once __DIR__ . '/entity/project_entity.php';
        if ($data === null) {
            if ($this->_project === null) {
                $this->_project = new ProjectEntity($this, null);
            }
            return $this->_project;
        }
        return new ProjectEntity($this, $data);
    }


    private $_project_collaborator_permission = null;

    // Canonical facade: $client->ProjectCollaboratorPermission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_collaborator_permission()
    // resolves here too.
    public function ProjectCollaboratorPermission($data = null)
    {
        require_once __DIR__ . '/entity/project_collaborator_permission_entity.php';
        if ($data === null) {
            if ($this->_project_collaborator_permission === null) {
                $this->_project_collaborator_permission = new ProjectCollaboratorPermissionEntity($this, null);
            }
            return $this->_project_collaborator_permission;
        }
        return new ProjectCollaboratorPermissionEntity($this, $data);
    }


    private $_project_column = null;

    // Canonical facade: $client->ProjectColumn()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_column()
    // resolves here too.
    public function ProjectColumn($data = null)
    {
        require_once __DIR__ . '/entity/project_column_entity.php';
        if ($data === null) {
            if ($this->_project_column === null) {
                $this->_project_column = new ProjectColumnEntity($this, null);
            }
            return $this->_project_column;
        }
        return new ProjectColumnEntity($this, $data);
    }


    private $_projects_classic = null;

    // Canonical facade: $client->ProjectsClassic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->projects_classic()
    // resolves here too.
    public function ProjectsClassic($data = null)
    {
        require_once __DIR__ . '/entity/projects_classic_entity.php';
        if ($data === null) {
            if ($this->_projects_classic === null) {
                $this->_projects_classic = new ProjectsClassicEntity($this, null);
            }
            return $this->_projects_classic;
        }
        return new ProjectsClassicEntity($this, $data);
    }


    private $_projects_v2 = null;

    // Canonical facade: $client->ProjectsV2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->projects_v2()
    // resolves here too.
    public function ProjectsV2($data = null)
    {
        require_once __DIR__ . '/entity/projects_v2_entity.php';
        if ($data === null) {
            if ($this->_projects_v2 === null) {
                $this->_projects_v2 = new ProjectsV2Entity($this, null);
            }
            return $this->_projects_v2;
        }
        return new ProjectsV2Entity($this, $data);
    }


    private $_projects_v2_field = null;

    // Canonical facade: $client->ProjectsV2Field()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->projects_v2_field()
    // resolves here too.
    public function ProjectsV2Field($data = null)
    {
        require_once __DIR__ . '/entity/projects_v2_field_entity.php';
        if ($data === null) {
            if ($this->_projects_v2_field === null) {
                $this->_projects_v2_field = new ProjectsV2FieldEntity($this, null);
            }
            return $this->_projects_v2_field;
        }
        return new ProjectsV2FieldEntity($this, $data);
    }


    private $_projects_v2_item_simple = null;

    // Canonical facade: $client->ProjectsV2ItemSimple()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->projects_v2_item_simple()
    // resolves here too.
    public function ProjectsV2ItemSimple($data = null)
    {
        require_once __DIR__ . '/entity/projects_v2_item_simple_entity.php';
        if ($data === null) {
            if ($this->_projects_v2_item_simple === null) {
                $this->_projects_v2_item_simple = new ProjectsV2ItemSimpleEntity($this, null);
            }
            return $this->_projects_v2_item_simple;
        }
        return new ProjectsV2ItemSimpleEntity($this, $data);
    }


    private $_projects_v2_item_with_content = null;

    // Canonical facade: $client->ProjectsV2ItemWithContent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->projects_v2_item_with_content()
    // resolves here too.
    public function ProjectsV2ItemWithContent($data = null)
    {
        require_once __DIR__ . '/entity/projects_v2_item_with_content_entity.php';
        if ($data === null) {
            if ($this->_projects_v2_item_with_content === null) {
                $this->_projects_v2_item_with_content = new ProjectsV2ItemWithContentEntity($this, null);
            }
            return $this->_projects_v2_item_with_content;
        }
        return new ProjectsV2ItemWithContentEntity($this, $data);
    }


    private $_protected_branch = null;

    // Canonical facade: $client->ProtectedBranch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->protected_branch()
    // resolves here too.
    public function ProtectedBranch($data = null)
    {
        require_once __DIR__ . '/entity/protected_branch_entity.php';
        if ($data === null) {
            if ($this->_protected_branch === null) {
                $this->_protected_branch = new ProtectedBranchEntity($this, null);
            }
            return $this->_protected_branch;
        }
        return new ProtectedBranchEntity($this, $data);
    }


    private $_protected_branch_admin_enforced = null;

    // Canonical facade: $client->ProtectedBranchAdminEnforced()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->protected_branch_admin_enforced()
    // resolves here too.
    public function ProtectedBranchAdminEnforced($data = null)
    {
        require_once __DIR__ . '/entity/protected_branch_admin_enforced_entity.php';
        if ($data === null) {
            if ($this->_protected_branch_admin_enforced === null) {
                $this->_protected_branch_admin_enforced = new ProtectedBranchAdminEnforcedEntity($this, null);
            }
            return $this->_protected_branch_admin_enforced;
        }
        return new ProtectedBranchAdminEnforcedEntity($this, $data);
    }


    private $_protected_branch_pull_request_review = null;

    // Canonical facade: $client->ProtectedBranchPullRequestReview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->protected_branch_pull_request_review()
    // resolves here too.
    public function ProtectedBranchPullRequestReview($data = null)
    {
        require_once __DIR__ . '/entity/protected_branch_pull_request_review_entity.php';
        if ($data === null) {
            if ($this->_protected_branch_pull_request_review === null) {
                $this->_protected_branch_pull_request_review = new ProtectedBranchPullRequestReviewEntity($this, null);
            }
            return $this->_protected_branch_pull_request_review;
        }
        return new ProtectedBranchPullRequestReviewEntity($this, $data);
    }


    private $_public_member = null;

    // Canonical facade: $client->PublicMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->public_member()
    // resolves here too.
    public function PublicMember($data = null)
    {
        require_once __DIR__ . '/entity/public_member_entity.php';
        if ($data === null) {
            if ($this->_public_member === null) {
                $this->_public_member = new PublicMemberEntity($this, null);
            }
            return $this->_public_member;
        }
        return new PublicMemberEntity($this, $data);
    }


    private $_pull = null;

    // Canonical facade: $client->Pull()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pull()
    // resolves here too.
    public function Pull($data = null)
    {
        require_once __DIR__ . '/entity/pull_entity.php';
        if ($data === null) {
            if ($this->_pull === null) {
                $this->_pull = new PullEntity($this, null);
            }
            return $this->_pull;
        }
        return new PullEntity($this, $data);
    }


    private $_pull_request_review = null;

    // Canonical facade: $client->PullRequestReview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pull_request_review()
    // resolves here too.
    public function PullRequestReview($data = null)
    {
        require_once __DIR__ . '/entity/pull_request_review_entity.php';
        if ($data === null) {
            if ($this->_pull_request_review === null) {
                $this->_pull_request_review = new PullRequestReviewEntity($this, null);
            }
            return $this->_pull_request_review;
        }
        return new PullRequestReviewEntity($this, $data);
    }


    private $_pull_request_review_comment = null;

    // Canonical facade: $client->PullRequestReviewComment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pull_request_review_comment()
    // resolves here too.
    public function PullRequestReviewComment($data = null)
    {
        require_once __DIR__ . '/entity/pull_request_review_comment_entity.php';
        if ($data === null) {
            if ($this->_pull_request_review_comment === null) {
                $this->_pull_request_review_comment = new PullRequestReviewCommentEntity($this, null);
            }
            return $this->_pull_request_review_comment;
        }
        return new PullRequestReviewCommentEntity($this, $data);
    }


    private $_pull_request_simple = null;

    // Canonical facade: $client->PullRequestSimple()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pull_request_simple()
    // resolves here too.
    public function PullRequestSimple($data = null)
    {
        require_once __DIR__ . '/entity/pull_request_simple_entity.php';
        if ($data === null) {
            if ($this->_pull_request_simple === null) {
                $this->_pull_request_simple = new PullRequestSimpleEntity($this, null);
            }
            return $this->_pull_request_simple;
        }
        return new PullRequestSimpleEntity($this, $data);
    }


    private $_rate_limit = null;

    // Canonical facade: $client->RateLimit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rate_limit()
    // resolves here too.
    public function RateLimit($data = null)
    {
        require_once __DIR__ . '/entity/rate_limit_entity.php';
        if ($data === null) {
            if ($this->_rate_limit === null) {
                $this->_rate_limit = new RateLimitEntity($this, null);
            }
            return $this->_rate_limit;
        }
        return new RateLimitEntity($this, $data);
    }


    private $_reaction = null;

    // Canonical facade: $client->Reaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reaction()
    // resolves here too.
    public function Reaction($data = null)
    {
        require_once __DIR__ . '/entity/reaction_entity.php';
        if ($data === null) {
            if ($this->_reaction === null) {
                $this->_reaction = new ReactionEntity($this, null);
            }
            return $this->_reaction;
        }
        return new ReactionEntity($this, $data);
    }


    private $_referrer = null;

    // Canonical facade: $client->Referrer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->referrer()
    // resolves here too.
    public function Referrer($data = null)
    {
        require_once __DIR__ . '/entity/referrer_entity.php';
        if ($data === null) {
            if ($this->_referrer === null) {
                $this->_referrer = new ReferrerEntity($this, null);
            }
            return $this->_referrer;
        }
        return new ReferrerEntity($this, $data);
    }


    private $_release = null;

    // Canonical facade: $client->Release()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->release()
    // resolves here too.
    public function Release($data = null)
    {
        require_once __DIR__ . '/entity/release_entity.php';
        if ($data === null) {
            if ($this->_release === null) {
                $this->_release = new ReleaseEntity($this, null);
            }
            return $this->_release;
        }
        return new ReleaseEntity($this, $data);
    }


    private $_release_asset = null;

    // Canonical facade: $client->ReleaseAsset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->release_asset()
    // resolves here too.
    public function ReleaseAsset($data = null)
    {
        require_once __DIR__ . '/entity/release_asset_entity.php';
        if ($data === null) {
            if ($this->_release_asset === null) {
                $this->_release_asset = new ReleaseAssetEntity($this, null);
            }
            return $this->_release_asset;
        }
        return new ReleaseAssetEntity($this, $data);
    }


    private $_release_notes_content = null;

    // Canonical facade: $client->ReleaseNotesContent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->release_notes_content()
    // resolves here too.
    public function ReleaseNotesContent($data = null)
    {
        require_once __DIR__ . '/entity/release_notes_content_entity.php';
        if ($data === null) {
            if ($this->_release_notes_content === null) {
                $this->_release_notes_content = new ReleaseNotesContentEntity($this, null);
            }
            return $this->_release_notes_content;
        }
        return new ReleaseNotesContentEntity($this, $data);
    }


    private $_remove = null;

    // Canonical facade: $client->Remove()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->remove()
    // resolves here too.
    public function Remove($data = null)
    {
        require_once __DIR__ . '/entity/remove_entity.php';
        if ($data === null) {
            if ($this->_remove === null) {
                $this->_remove = new RemoveEntity($this, null);
            }
            return $this->_remove;
        }
        return new RemoveEntity($this, $data);
    }


    private $_repo = null;

    // Canonical facade: $client->Repo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repo()
    // resolves here too.
    public function Repo($data = null)
    {
        require_once __DIR__ . '/entity/repo_entity.php';
        if ($data === null) {
            if ($this->_repo === null) {
                $this->_repo = new RepoEntity($this, null);
            }
            return $this->_repo;
        }
        return new RepoEntity($this, $data);
    }


    private $_repository = null;

    // Canonical facade: $client->Repository()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository()
    // resolves here too.
    public function Repository($data = null)
    {
        require_once __DIR__ . '/entity/repository_entity.php';
        if ($data === null) {
            if ($this->_repository === null) {
                $this->_repository = new RepositoryEntity($this, null);
            }
            return $this->_repository;
        }
        return new RepositoryEntity($this, $data);
    }


    private $_repository_advisory = null;

    // Canonical facade: $client->RepositoryAdvisory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_advisory()
    // resolves here too.
    public function RepositoryAdvisory($data = null)
    {
        require_once __DIR__ . '/entity/repository_advisory_entity.php';
        if ($data === null) {
            if ($this->_repository_advisory === null) {
                $this->_repository_advisory = new RepositoryAdvisoryEntity($this, null);
            }
            return $this->_repository_advisory;
        }
        return new RepositoryAdvisoryEntity($this, $data);
    }


    private $_repository_collaborator_permission = null;

    // Canonical facade: $client->RepositoryCollaboratorPermission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_collaborator_permission()
    // resolves here too.
    public function RepositoryCollaboratorPermission($data = null)
    {
        require_once __DIR__ . '/entity/repository_collaborator_permission_entity.php';
        if ($data === null) {
            if ($this->_repository_collaborator_permission === null) {
                $this->_repository_collaborator_permission = new RepositoryCollaboratorPermissionEntity($this, null);
            }
            return $this->_repository_collaborator_permission;
        }
        return new RepositoryCollaboratorPermissionEntity($this, $data);
    }


    private $_repository_invitation = null;

    // Canonical facade: $client->RepositoryInvitation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_invitation()
    // resolves here too.
    public function RepositoryInvitation($data = null)
    {
        require_once __DIR__ . '/entity/repository_invitation_entity.php';
        if ($data === null) {
            if ($this->_repository_invitation === null) {
                $this->_repository_invitation = new RepositoryInvitationEntity($this, null);
            }
            return $this->_repository_invitation;
        }
        return new RepositoryInvitationEntity($this, $data);
    }


    private $_repository_rule_detailed = null;

    // Canonical facade: $client->RepositoryRuleDetailed()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_rule_detailed()
    // resolves here too.
    public function RepositoryRuleDetailed($data = null)
    {
        require_once __DIR__ . '/entity/repository_rule_detailed_entity.php';
        if ($data === null) {
            if ($this->_repository_rule_detailed === null) {
                $this->_repository_rule_detailed = new RepositoryRuleDetailedEntity($this, null);
            }
            return $this->_repository_rule_detailed;
        }
        return new RepositoryRuleDetailedEntity($this, $data);
    }


    private $_repository_ruleset = null;

    // Canonical facade: $client->RepositoryRuleset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_ruleset()
    // resolves here too.
    public function RepositoryRuleset($data = null)
    {
        require_once __DIR__ . '/entity/repository_ruleset_entity.php';
        if ($data === null) {
            if ($this->_repository_ruleset === null) {
                $this->_repository_ruleset = new RepositoryRulesetEntity($this, null);
            }
            return $this->_repository_ruleset;
        }
        return new RepositoryRulesetEntity($this, $data);
    }


    private $_repository_subscription = null;

    // Canonical facade: $client->RepositorySubscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository_subscription()
    // resolves here too.
    public function RepositorySubscription($data = null)
    {
        require_once __DIR__ . '/entity/repository_subscription_entity.php';
        if ($data === null) {
            if ($this->_repository_subscription === null) {
                $this->_repository_subscription = new RepositorySubscriptionEntity($this, null);
            }
            return $this->_repository_subscription;
        }
        return new RepositorySubscriptionEntity($this, $data);
    }


    private $_review_comment = null;

    // Canonical facade: $client->ReviewComment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->review_comment()
    // resolves here too.
    public function ReviewComment($data = null)
    {
        require_once __DIR__ . '/entity/review_comment_entity.php';
        if ($data === null) {
            if ($this->_review_comment === null) {
                $this->_review_comment = new ReviewCommentEntity($this, null);
            }
            return $this->_review_comment;
        }
        return new ReviewCommentEntity($this, $data);
    }


    private $_rule_suite = null;

    // Canonical facade: $client->RuleSuite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rule_suite()
    // resolves here too.
    public function RuleSuite($data = null)
    {
        require_once __DIR__ . '/entity/rule_suite_entity.php';
        if ($data === null) {
            if ($this->_rule_suite === null) {
                $this->_rule_suite = new RuleSuiteEntity($this, null);
            }
            return $this->_rule_suite;
        }
        return new RuleSuiteEntity($this, $data);
    }


    private $_ruleset_version = null;

    // Canonical facade: $client->RulesetVersion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ruleset_version()
    // resolves here too.
    public function RulesetVersion($data = null)
    {
        require_once __DIR__ . '/entity/ruleset_version_entity.php';
        if ($data === null) {
            if ($this->_ruleset_version === null) {
                $this->_ruleset_version = new RulesetVersionEntity($this, null);
            }
            return $this->_ruleset_version;
        }
        return new RulesetVersionEntity($this, $data);
    }


    private $_ruleset_version_with_state = null;

    // Canonical facade: $client->RulesetVersionWithState()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ruleset_version_with_state()
    // resolves here too.
    public function RulesetVersionWithState($data = null)
    {
        require_once __DIR__ . '/entity/ruleset_version_with_state_entity.php';
        if ($data === null) {
            if ($this->_ruleset_version_with_state === null) {
                $this->_ruleset_version_with_state = new RulesetVersionWithStateEntity($this, null);
            }
            return $this->_ruleset_version_with_state;
        }
        return new RulesetVersionWithStateEntity($this, $data);
    }


    private $_runner = null;

    // Canonical facade: $client->Runner()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->runner()
    // resolves here too.
    public function Runner($data = null)
    {
        require_once __DIR__ . '/entity/runner_entity.php';
        if ($data === null) {
            if ($this->_runner === null) {
                $this->_runner = new RunnerEntity($this, null);
            }
            return $this->_runner;
        }
        return new RunnerEntity($this, $data);
    }


    private $_runner_application = null;

    // Canonical facade: $client->RunnerApplication()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->runner_application()
    // resolves here too.
    public function RunnerApplication($data = null)
    {
        require_once __DIR__ . '/entity/runner_application_entity.php';
        if ($data === null) {
            if ($this->_runner_application === null) {
                $this->_runner_application = new RunnerApplicationEntity($this, null);
            }
            return $this->_runner_application;
        }
        return new RunnerApplicationEntity($this, $data);
    }


    private $_runner_group = null;

    // Canonical facade: $client->RunnerGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->runner_group()
    // resolves here too.
    public function RunnerGroup($data = null)
    {
        require_once __DIR__ . '/entity/runner_group_entity.php';
        if ($data === null) {
            if ($this->_runner_group === null) {
                $this->_runner_group = new RunnerGroupEntity($this, null);
            }
            return $this->_runner_group;
        }
        return new RunnerGroupEntity($this, $data);
    }


    private $_search = null;

    // Canonical facade: $client->Search()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->search()
    // resolves here too.
    public function Search($data = null)
    {
        require_once __DIR__ . '/entity/search_entity.php';
        if ($data === null) {
            if ($this->_search === null) {
                $this->_search = new SearchEntity($this, null);
            }
            return $this->_search;
        }
        return new SearchEntity($this, $data);
    }


    private $_secret_scanning = null;

    // Canonical facade: $client->SecretScanning()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secret_scanning()
    // resolves here too.
    public function SecretScanning($data = null)
    {
        require_once __DIR__ . '/entity/secret_scanning_entity.php';
        if ($data === null) {
            if ($this->_secret_scanning === null) {
                $this->_secret_scanning = new SecretScanningEntity($this, null);
            }
            return $this->_secret_scanning;
        }
        return new SecretScanningEntity($this, $data);
    }


    private $_secret_scanning_alert = null;

    // Canonical facade: $client->SecretScanningAlert()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secret_scanning_alert()
    // resolves here too.
    public function SecretScanningAlert($data = null)
    {
        require_once __DIR__ . '/entity/secret_scanning_alert_entity.php';
        if ($data === null) {
            if ($this->_secret_scanning_alert === null) {
                $this->_secret_scanning_alert = new SecretScanningAlertEntity($this, null);
            }
            return $this->_secret_scanning_alert;
        }
        return new SecretScanningAlertEntity($this, $data);
    }


    private $_secret_scanning_location = null;

    // Canonical facade: $client->SecretScanningLocation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secret_scanning_location()
    // resolves here too.
    public function SecretScanningLocation($data = null)
    {
        require_once __DIR__ . '/entity/secret_scanning_location_entity.php';
        if ($data === null) {
            if ($this->_secret_scanning_location === null) {
                $this->_secret_scanning_location = new SecretScanningLocationEntity($this, null);
            }
            return $this->_secret_scanning_location;
        }
        return new SecretScanningLocationEntity($this, $data);
    }


    private $_secret_scanning_pattern_configuration = null;

    // Canonical facade: $client->SecretScanningPatternConfiguration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secret_scanning_pattern_configuration()
    // resolves here too.
    public function SecretScanningPatternConfiguration($data = null)
    {
        require_once __DIR__ . '/entity/secret_scanning_pattern_configuration_entity.php';
        if ($data === null) {
            if ($this->_secret_scanning_pattern_configuration === null) {
                $this->_secret_scanning_pattern_configuration = new SecretScanningPatternConfigurationEntity($this, null);
            }
            return $this->_secret_scanning_pattern_configuration;
        }
        return new SecretScanningPatternConfigurationEntity($this, $data);
    }


    private $_secret_scanning_push_protection_bypass = null;

    // Canonical facade: $client->SecretScanningPushProtectionBypass()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secret_scanning_push_protection_bypass()
    // resolves here too.
    public function SecretScanningPushProtectionBypass($data = null)
    {
        require_once __DIR__ . '/entity/secret_scanning_push_protection_bypass_entity.php';
        if ($data === null) {
            if ($this->_secret_scanning_push_protection_bypass === null) {
                $this->_secret_scanning_push_protection_bypass = new SecretScanningPushProtectionBypassEntity($this, null);
            }
            return $this->_secret_scanning_push_protection_bypass;
        }
        return new SecretScanningPushProtectionBypassEntity($this, $data);
    }


    private $_secret_scanning_scan_history = null;

    // Canonical facade: $client->SecretScanningScanHistory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secret_scanning_scan_history()
    // resolves here too.
    public function SecretScanningScanHistory($data = null)
    {
        require_once __DIR__ . '/entity/secret_scanning_scan_history_entity.php';
        if ($data === null) {
            if ($this->_secret_scanning_scan_history === null) {
                $this->_secret_scanning_scan_history = new SecretScanningScanHistoryEntity($this, null);
            }
            return $this->_secret_scanning_scan_history;
        }
        return new SecretScanningScanHistoryEntity($this, $data);
    }


    private $_security_advisory = null;

    // Canonical facade: $client->SecurityAdvisory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->security_advisory()
    // resolves here too.
    public function SecurityAdvisory($data = null)
    {
        require_once __DIR__ . '/entity/security_advisory_entity.php';
        if ($data === null) {
            if ($this->_security_advisory === null) {
                $this->_security_advisory = new SecurityAdvisoryEntity($this, null);
            }
            return $this->_security_advisory;
        }
        return new SecurityAdvisoryEntity($this, $data);
    }


    private $_selected_action = null;

    // Canonical facade: $client->SelectedAction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->selected_action()
    // resolves here too.
    public function SelectedAction($data = null)
    {
        require_once __DIR__ . '/entity/selected_action_entity.php';
        if ($data === null) {
            if ($this->_selected_action === null) {
                $this->_selected_action = new SelectedActionEntity($this, null);
            }
            return $this->_selected_action;
        }
        return new SelectedActionEntity($this, $data);
    }


    private $_self_hosted_runner = null;

    // Canonical facade: $client->SelfHostedRunner()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->self_hosted_runner()
    // resolves here too.
    public function SelfHostedRunner($data = null)
    {
        require_once __DIR__ . '/entity/self_hosted_runner_entity.php';
        if ($data === null) {
            if ($this->_self_hosted_runner === null) {
                $this->_self_hosted_runner = new SelfHostedRunnerEntity($this, null);
            }
            return $this->_self_hosted_runner;
        }
        return new SelfHostedRunnerEntity($this, $data);
    }


    private $_short_blob = null;

    // Canonical facade: $client->ShortBlob()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->short_blob()
    // resolves here too.
    public function ShortBlob($data = null)
    {
        require_once __DIR__ . '/entity/short_blob_entity.php';
        if ($data === null) {
            if ($this->_short_blob === null) {
                $this->_short_blob = new ShortBlobEntity($this, null);
            }
            return $this->_short_blob;
        }
        return new ShortBlobEntity($this, $data);
    }


    private $_short_branch = null;

    // Canonical facade: $client->ShortBranch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->short_branch()
    // resolves here too.
    public function ShortBranch($data = null)
    {
        require_once __DIR__ . '/entity/short_branch_entity.php';
        if ($data === null) {
            if ($this->_short_branch === null) {
                $this->_short_branch = new ShortBranchEntity($this, null);
            }
            return $this->_short_branch;
        }
        return new ShortBranchEntity($this, $data);
    }


    private $_simple_classroom = null;

    // Canonical facade: $client->SimpleClassroom()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->simple_classroom()
    // resolves here too.
    public function SimpleClassroom($data = null)
    {
        require_once __DIR__ . '/entity/simple_classroom_entity.php';
        if ($data === null) {
            if ($this->_simple_classroom === null) {
                $this->_simple_classroom = new SimpleClassroomEntity($this, null);
            }
            return $this->_simple_classroom;
        }
        return new SimpleClassroomEntity($this, $data);
    }


    private $_simple_classroom_assignment = null;

    // Canonical facade: $client->SimpleClassroomAssignment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->simple_classroom_assignment()
    // resolves here too.
    public function SimpleClassroomAssignment($data = null)
    {
        require_once __DIR__ . '/entity/simple_classroom_assignment_entity.php';
        if ($data === null) {
            if ($this->_simple_classroom_assignment === null) {
                $this->_simple_classroom_assignment = new SimpleClassroomAssignmentEntity($this, null);
            }
            return $this->_simple_classroom_assignment;
        }
        return new SimpleClassroomAssignmentEntity($this, $data);
    }


    private $_social_account = null;

    // Canonical facade: $client->SocialAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->social_account()
    // resolves here too.
    public function SocialAccount($data = null)
    {
        require_once __DIR__ . '/entity/social_account_entity.php';
        if ($data === null) {
            if ($this->_social_account === null) {
                $this->_social_account = new SocialAccountEntity($this, null);
            }
            return $this->_social_account;
        }
        return new SocialAccountEntity($this, $data);
    }


    private $_ssh_signing_key = null;

    // Canonical facade: $client->SshSigningKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ssh_signing_key()
    // resolves here too.
    public function SshSigningKey($data = null)
    {
        require_once __DIR__ . '/entity/ssh_signing_key_entity.php';
        if ($data === null) {
            if ($this->_ssh_signing_key === null) {
                $this->_ssh_signing_key = new SshSigningKeyEntity($this, null);
            }
            return $this->_ssh_signing_key;
        }
        return new SshSigningKeyEntity($this, $data);
    }


    private $_status = null;

    // Canonical facade: $client->Status()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status()
    // resolves here too.
    public function Status($data = null)
    {
        require_once __DIR__ . '/entity/status_entity.php';
        if ($data === null) {
            if ($this->_status === null) {
                $this->_status = new StatusEntity($this, null);
            }
            return $this->_status;
        }
        return new StatusEntity($this, $data);
    }


    private $_status_check_policy = null;

    // Canonical facade: $client->StatusCheckPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status_check_policy()
    // resolves here too.
    public function StatusCheckPolicy($data = null)
    {
        require_once __DIR__ . '/entity/status_check_policy_entity.php';
        if ($data === null) {
            if ($this->_status_check_policy === null) {
                $this->_status_check_policy = new StatusCheckPolicyEntity($this, null);
            }
            return $this->_status_check_policy;
        }
        return new StatusCheckPolicyEntity($this, $data);
    }


    private $_subscriber = null;

    // Canonical facade: $client->Subscriber()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscriber()
    // resolves here too.
    public function Subscriber($data = null)
    {
        require_once __DIR__ . '/entity/subscriber_entity.php';
        if ($data === null) {
            if ($this->_subscriber === null) {
                $this->_subscriber = new SubscriberEntity($this, null);
            }
            return $this->_subscriber;
        }
        return new SubscriberEntity($this, $data);
    }


    private $_tag = null;

    // Canonical facade: $client->Tag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tag()
    // resolves here too.
    public function Tag($data = null)
    {
        require_once __DIR__ . '/entity/tag_entity.php';
        if ($data === null) {
            if ($this->_tag === null) {
                $this->_tag = new TagEntity($this, null);
            }
            return $this->_tag;
        }
        return new TagEntity($this, $data);
    }


    private $_tag_protection = null;

    // Canonical facade: $client->TagProtection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tag_protection()
    // resolves here too.
    public function TagProtection($data = null)
    {
        require_once __DIR__ . '/entity/tag_protection_entity.php';
        if ($data === null) {
            if ($this->_tag_protection === null) {
                $this->_tag_protection = new TagProtectionEntity($this, null);
            }
            return $this->_tag_protection;
        }
        return new TagProtectionEntity($this, $data);
    }


    private $_team = null;

    // Canonical facade: $client->Team()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->team()
    // resolves here too.
    public function Team($data = null)
    {
        require_once __DIR__ . '/entity/team_entity.php';
        if ($data === null) {
            if ($this->_team === null) {
                $this->_team = new TeamEntity($this, null);
            }
            return $this->_team;
        }
        return new TeamEntity($this, $data);
    }


    private $_team_simple = null;

    // Canonical facade: $client->TeamSimple()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->team_simple()
    // resolves here too.
    public function TeamSimple($data = null)
    {
        require_once __DIR__ . '/entity/team_simple_entity.php';
        if ($data === null) {
            if ($this->_team_simple === null) {
                $this->_team_simple = new TeamSimpleEntity($this, null);
            }
            return $this->_team_simple;
        }
        return new TeamSimpleEntity($this, $data);
    }


    private $_thread = null;

    // Canonical facade: $client->Thread()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->thread()
    // resolves here too.
    public function Thread($data = null)
    {
        require_once __DIR__ . '/entity/thread_entity.php';
        if ($data === null) {
            if ($this->_thread === null) {
                $this->_thread = new ThreadEntity($this, null);
            }
            return $this->_thread;
        }
        return new ThreadEntity($this, $data);
    }


    private $_thread_subscription = null;

    // Canonical facade: $client->ThreadSubscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->thread_subscription()
    // resolves here too.
    public function ThreadSubscription($data = null)
    {
        require_once __DIR__ . '/entity/thread_subscription_entity.php';
        if ($data === null) {
            if ($this->_thread_subscription === null) {
                $this->_thread_subscription = new ThreadSubscriptionEntity($this, null);
            }
            return $this->_thread_subscription;
        }
        return new ThreadSubscriptionEntity($this, $data);
    }


    private $_topic = null;

    // Canonical facade: $client->Topic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->topic()
    // resolves here too.
    public function Topic($data = null)
    {
        require_once __DIR__ . '/entity/topic_entity.php';
        if ($data === null) {
            if ($this->_topic === null) {
                $this->_topic = new TopicEntity($this, null);
            }
            return $this->_topic;
        }
        return new TopicEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_user_marketplace_purchase = null;

    // Canonical facade: $client->UserMarketplacePurchase()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_marketplace_purchase()
    // resolves here too.
    public function UserMarketplacePurchase($data = null)
    {
        require_once __DIR__ . '/entity/user_marketplace_purchase_entity.php';
        if ($data === null) {
            if ($this->_user_marketplace_purchase === null) {
                $this->_user_marketplace_purchase = new UserMarketplacePurchaseEntity($this, null);
            }
            return $this->_user_marketplace_purchase;
        }
        return new UserMarketplacePurchaseEntity($this, $data);
    }


    private $_view = null;

    // Canonical facade: $client->View()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->view()
    // resolves here too.
    public function View($data = null)
    {
        require_once __DIR__ . '/entity/view_entity.php';
        if ($data === null) {
            if ($this->_view === null) {
                $this->_view = new ViewEntity($this, null);
            }
            return $this->_view;
        }
        return new ViewEntity($this, $data);
    }


    private $_webhook_config = null;

    // Canonical facade: $client->WebhookConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook_config()
    // resolves here too.
    public function WebhookConfig($data = null)
    {
        require_once __DIR__ . '/entity/webhook_config_entity.php';
        if ($data === null) {
            if ($this->_webhook_config === null) {
                $this->_webhook_config = new WebhookConfigEntity($this, null);
            }
            return $this->_webhook_config;
        }
        return new WebhookConfigEntity($this, $data);
    }


    private $_workflow = null;

    // Canonical facade: $client->Workflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow()
    // resolves here too.
    public function Workflow($data = null)
    {
        require_once __DIR__ . '/entity/workflow_entity.php';
        if ($data === null) {
            if ($this->_workflow === null) {
                $this->_workflow = new WorkflowEntity($this, null);
            }
            return $this->_workflow;
        }
        return new WorkflowEntity($this, $data);
    }


    private $_workflow_run = null;

    // Canonical facade: $client->WorkflowRun()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow_run()
    // resolves here too.
    public function WorkflowRun($data = null)
    {
        require_once __DIR__ . '/entity/workflow_run_entity.php';
        if ($data === null) {
            if ($this->_workflow_run === null) {
                $this->_workflow_run = new WorkflowRunEntity($this, null);
            }
            return $this->_workflow_run;
        }
        return new WorkflowRunEntity($this, $data);
    }


    private $_workflow_run_usage = null;

    // Canonical facade: $client->WorkflowRunUsage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow_run_usage()
    // resolves here too.
    public function WorkflowRunUsage($data = null)
    {
        require_once __DIR__ . '/entity/workflow_run_usage_entity.php';
        if ($data === null) {
            if ($this->_workflow_run_usage === null) {
                $this->_workflow_run_usage = new WorkflowRunUsageEntity($this, null);
            }
            return $this->_workflow_run_usage;
        }
        return new WorkflowRunUsageEntity($this, $data);
    }


    private $_workflow_usage = null;

    // Canonical facade: $client->WorkflowUsage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow_usage()
    // resolves here too.
    public function WorkflowUsage($data = null)
    {
        require_once __DIR__ . '/entity/workflow_usage_entity.php';
        if ($data === null) {
            if ($this->_workflow_usage === null) {
                $this->_workflow_usage = new WorkflowUsageEntity($this, null);
            }
            return $this->_workflow_usage;
        }
        return new WorkflowUsageEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new GithubSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
