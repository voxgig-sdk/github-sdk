package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/github-sdk/go/utility/struct"
)

type GithubSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewGithubSDK(options map[string]any) *GithubSDK {
	sdk := &GithubSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *GithubSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *GithubSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *GithubSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *GithubSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *GithubSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *GithubSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *GithubSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("GithubSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *GithubSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *GithubSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("GithubSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Action returns a Action entity bound to this client.
// Idiomatic usage: client.Action(nil).List(nil, nil) or
// client.Action(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Action(data map[string]any) GithubEntity {
	return NewActionEntityFunc(sdk, data)
}


// ActionsArtifactAndLogRetention returns a ActionsArtifactAndLogRetention entity bound to this client.
// Idiomatic usage: client.ActionsArtifactAndLogRetention(nil).List(nil, nil) or
// client.ActionsArtifactAndLogRetention(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsArtifactAndLogRetention(data map[string]any) GithubEntity {
	return NewActionsArtifactAndLogRetentionEntityFunc(sdk, data)
}


// ActionsCacheList returns a ActionsCacheList entity bound to this client.
// Idiomatic usage: client.ActionsCacheList(nil).List(nil, nil) or
// client.ActionsCacheList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsCacheList(data map[string]any) GithubEntity {
	return NewActionsCacheListEntityFunc(sdk, data)
}


// ActionsCacheUsageByRepository returns a ActionsCacheUsageByRepository entity bound to this client.
// Idiomatic usage: client.ActionsCacheUsageByRepository(nil).List(nil, nil) or
// client.ActionsCacheUsageByRepository(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsCacheUsageByRepository(data map[string]any) GithubEntity {
	return NewActionsCacheUsageByRepositoryEntityFunc(sdk, data)
}


// ActionsCacheUsageOrgEnterprise returns a ActionsCacheUsageOrgEnterprise entity bound to this client.
// Idiomatic usage: client.ActionsCacheUsageOrgEnterprise(nil).List(nil, nil) or
// client.ActionsCacheUsageOrgEnterprise(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsCacheUsageOrgEnterprise(data map[string]any) GithubEntity {
	return NewActionsCacheUsageOrgEnterpriseEntityFunc(sdk, data)
}


// ActionsForkPrContributorApproval returns a ActionsForkPrContributorApproval entity bound to this client.
// Idiomatic usage: client.ActionsForkPrContributorApproval(nil).List(nil, nil) or
// client.ActionsForkPrContributorApproval(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsForkPrContributorApproval(data map[string]any) GithubEntity {
	return NewActionsForkPrContributorApprovalEntityFunc(sdk, data)
}


// ActionsForkPrWorkflowsPrivateRepo returns a ActionsForkPrWorkflowsPrivateRepo entity bound to this client.
// Idiomatic usage: client.ActionsForkPrWorkflowsPrivateRepo(nil).List(nil, nil) or
// client.ActionsForkPrWorkflowsPrivateRepo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsForkPrWorkflowsPrivateRepo(data map[string]any) GithubEntity {
	return NewActionsForkPrWorkflowsPrivateRepoEntityFunc(sdk, data)
}


// ActionsGetDefaultWorkflowPermission returns a ActionsGetDefaultWorkflowPermission entity bound to this client.
// Idiomatic usage: client.ActionsGetDefaultWorkflowPermission(nil).List(nil, nil) or
// client.ActionsGetDefaultWorkflowPermission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsGetDefaultWorkflowPermission(data map[string]any) GithubEntity {
	return NewActionsGetDefaultWorkflowPermissionEntityFunc(sdk, data)
}


// ActionsHostedRunner returns a ActionsHostedRunner entity bound to this client.
// Idiomatic usage: client.ActionsHostedRunner(nil).List(nil, nil) or
// client.ActionsHostedRunner(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsHostedRunner(data map[string]any) GithubEntity {
	return NewActionsHostedRunnerEntityFunc(sdk, data)
}


// ActionsHostedRunnerLimit returns a ActionsHostedRunnerLimit entity bound to this client.
// Idiomatic usage: client.ActionsHostedRunnerLimit(nil).List(nil, nil) or
// client.ActionsHostedRunnerLimit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsHostedRunnerLimit(data map[string]any) GithubEntity {
	return NewActionsHostedRunnerLimitEntityFunc(sdk, data)
}


// ActionsOrganizationPermission returns a ActionsOrganizationPermission entity bound to this client.
// Idiomatic usage: client.ActionsOrganizationPermission(nil).List(nil, nil) or
// client.ActionsOrganizationPermission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsOrganizationPermission(data map[string]any) GithubEntity {
	return NewActionsOrganizationPermissionEntityFunc(sdk, data)
}


// ActionsPublicKey returns a ActionsPublicKey entity bound to this client.
// Idiomatic usage: client.ActionsPublicKey(nil).List(nil, nil) or
// client.ActionsPublicKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsPublicKey(data map[string]any) GithubEntity {
	return NewActionsPublicKeyEntityFunc(sdk, data)
}


// ActionsRepositoryPermission returns a ActionsRepositoryPermission entity bound to this client.
// Idiomatic usage: client.ActionsRepositoryPermission(nil).List(nil, nil) or
// client.ActionsRepositoryPermission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsRepositoryPermission(data map[string]any) GithubEntity {
	return NewActionsRepositoryPermissionEntityFunc(sdk, data)
}


// ActionsSecret returns a ActionsSecret entity bound to this client.
// Idiomatic usage: client.ActionsSecret(nil).List(nil, nil) or
// client.ActionsSecret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsSecret(data map[string]any) GithubEntity {
	return NewActionsSecretEntityFunc(sdk, data)
}


// ActionsVariable returns a ActionsVariable entity bound to this client.
// Idiomatic usage: client.ActionsVariable(nil).List(nil, nil) or
// client.ActionsVariable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsVariable(data map[string]any) GithubEntity {
	return NewActionsVariableEntityFunc(sdk, data)
}


// ActionsWorkflowAccessToRepository returns a ActionsWorkflowAccessToRepository entity bound to this client.
// Idiomatic usage: client.ActionsWorkflowAccessToRepository(nil).List(nil, nil) or
// client.ActionsWorkflowAccessToRepository(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ActionsWorkflowAccessToRepository(data map[string]any) GithubEntity {
	return NewActionsWorkflowAccessToRepositoryEntityFunc(sdk, data)
}


// Activity returns a Activity entity bound to this client.
// Idiomatic usage: client.Activity(nil).List(nil, nil) or
// client.Activity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Activity(data map[string]any) GithubEntity {
	return NewActivityEntityFunc(sdk, data)
}


// Add returns a Add entity bound to this client.
// Idiomatic usage: client.Add(nil).List(nil, nil) or
// client.Add(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Add(data map[string]any) GithubEntity {
	return NewAddEntityFunc(sdk, data)
}


// ApiInsightsRouteStat returns a ApiInsightsRouteStat entity bound to this client.
// Idiomatic usage: client.ApiInsightsRouteStat(nil).List(nil, nil) or
// client.ApiInsightsRouteStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ApiInsightsRouteStat(data map[string]any) GithubEntity {
	return NewApiInsightsRouteStatEntityFunc(sdk, data)
}


// ApiInsightsSubjectStat returns a ApiInsightsSubjectStat entity bound to this client.
// Idiomatic usage: client.ApiInsightsSubjectStat(nil).List(nil, nil) or
// client.ApiInsightsSubjectStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ApiInsightsSubjectStat(data map[string]any) GithubEntity {
	return NewApiInsightsSubjectStatEntityFunc(sdk, data)
}


// ApiInsightsSummaryStat returns a ApiInsightsSummaryStat entity bound to this client.
// Idiomatic usage: client.ApiInsightsSummaryStat(nil).List(nil, nil) or
// client.ApiInsightsSummaryStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ApiInsightsSummaryStat(data map[string]any) GithubEntity {
	return NewApiInsightsSummaryStatEntityFunc(sdk, data)
}


// ApiInsightsTimeStat returns a ApiInsightsTimeStat entity bound to this client.
// Idiomatic usage: client.ApiInsightsTimeStat(nil).List(nil, nil) or
// client.ApiInsightsTimeStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ApiInsightsTimeStat(data map[string]any) GithubEntity {
	return NewApiInsightsTimeStatEntityFunc(sdk, data)
}


// ApiInsightsUserStat returns a ApiInsightsUserStat entity bound to this client.
// Idiomatic usage: client.ApiInsightsUserStat(nil).List(nil, nil) or
// client.ApiInsightsUserStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ApiInsightsUserStat(data map[string]any) GithubEntity {
	return NewApiInsightsUserStatEntityFunc(sdk, data)
}


// ApiOverview returns a ApiOverview entity bound to this client.
// Idiomatic usage: client.ApiOverview(nil).List(nil, nil) or
// client.ApiOverview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ApiOverview(data map[string]any) GithubEntity {
	return NewApiOverviewEntityFunc(sdk, data)
}


// App returns a App entity bound to this client.
// Idiomatic usage: client.App(nil).List(nil, nil) or
// client.App(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) App(data map[string]any) GithubEntity {
	return NewAppEntityFunc(sdk, data)
}


// Artifact returns a Artifact entity bound to this client.
// Idiomatic usage: client.Artifact(nil).List(nil, nil) or
// client.Artifact(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Artifact(data map[string]any) GithubEntity {
	return NewArtifactEntityFunc(sdk, data)
}


// Assignee returns a Assignee entity bound to this client.
// Idiomatic usage: client.Assignee(nil).List(nil, nil) or
// client.Assignee(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Assignee(data map[string]any) GithubEntity {
	return NewAssigneeEntityFunc(sdk, data)
}


// AuthenticationToken returns a AuthenticationToken entity bound to this client.
// Idiomatic usage: client.AuthenticationToken(nil).List(nil, nil) or
// client.AuthenticationToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) AuthenticationToken(data map[string]any) GithubEntity {
	return NewAuthenticationTokenEntityFunc(sdk, data)
}


// Authorization returns a Authorization entity bound to this client.
// Idiomatic usage: client.Authorization(nil).List(nil, nil) or
// client.Authorization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Authorization(data map[string]any) GithubEntity {
	return NewAuthorizationEntityFunc(sdk, data)
}


// Autolink returns a Autolink entity bound to this client.
// Idiomatic usage: client.Autolink(nil).List(nil, nil) or
// client.Autolink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Autolink(data map[string]any) GithubEntity {
	return NewAutolinkEntityFunc(sdk, data)
}


// BaseGist returns a BaseGist entity bound to this client.
// Idiomatic usage: client.BaseGist(nil).List(nil, nil) or
// client.BaseGist(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) BaseGist(data map[string]any) GithubEntity {
	return NewBaseGistEntityFunc(sdk, data)
}


// BillingUsageReport returns a BillingUsageReport entity bound to this client.
// Idiomatic usage: client.BillingUsageReport(nil).List(nil, nil) or
// client.BillingUsageReport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) BillingUsageReport(data map[string]any) GithubEntity {
	return NewBillingUsageReportEntityFunc(sdk, data)
}


// BillingUsageReportUser returns a BillingUsageReportUser entity bound to this client.
// Idiomatic usage: client.BillingUsageReportUser(nil).List(nil, nil) or
// client.BillingUsageReportUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) BillingUsageReportUser(data map[string]any) GithubEntity {
	return NewBillingUsageReportUserEntityFunc(sdk, data)
}


// Blob returns a Blob entity bound to this client.
// Idiomatic usage: client.Blob(nil).List(nil, nil) or
// client.Blob(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Blob(data map[string]any) GithubEntity {
	return NewBlobEntityFunc(sdk, data)
}


// Block returns a Block entity bound to this client.
// Idiomatic usage: client.Block(nil).List(nil, nil) or
// client.Block(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Block(data map[string]any) GithubEntity {
	return NewBlockEntityFunc(sdk, data)
}


// Branch returns a Branch entity bound to this client.
// Idiomatic usage: client.Branch(nil).List(nil, nil) or
// client.Branch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Branch(data map[string]any) GithubEntity {
	return NewBranchEntityFunc(sdk, data)
}


// BranchProtection returns a BranchProtection entity bound to this client.
// Idiomatic usage: client.BranchProtection(nil).List(nil, nil) or
// client.BranchProtection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) BranchProtection(data map[string]any) GithubEntity {
	return NewBranchProtectionEntityFunc(sdk, data)
}


// BranchRestrictionPolicy returns a BranchRestrictionPolicy entity bound to this client.
// Idiomatic usage: client.BranchRestrictionPolicy(nil).List(nil, nil) or
// client.BranchRestrictionPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) BranchRestrictionPolicy(data map[string]any) GithubEntity {
	return NewBranchRestrictionPolicyEntityFunc(sdk, data)
}


// BranchShort returns a BranchShort entity bound to this client.
// Idiomatic usage: client.BranchShort(nil).List(nil, nil) or
// client.BranchShort(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) BranchShort(data map[string]any) GithubEntity {
	return NewBranchShortEntityFunc(sdk, data)
}


// BranchWithProtection returns a BranchWithProtection entity bound to this client.
// Idiomatic usage: client.BranchWithProtection(nil).List(nil, nil) or
// client.BranchWithProtection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) BranchWithProtection(data map[string]any) GithubEntity {
	return NewBranchWithProtectionEntityFunc(sdk, data)
}


// Campaign returns a Campaign entity bound to this client.
// Idiomatic usage: client.Campaign(nil).List(nil, nil) or
// client.Campaign(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Campaign(data map[string]any) GithubEntity {
	return NewCampaignEntityFunc(sdk, data)
}


// Check returns a Check entity bound to this client.
// Idiomatic usage: client.Check(nil).List(nil, nil) or
// client.Check(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Check(data map[string]any) GithubEntity {
	return NewCheckEntityFunc(sdk, data)
}


// CheckAnnotation returns a CheckAnnotation entity bound to this client.
// Idiomatic usage: client.CheckAnnotation(nil).List(nil, nil) or
// client.CheckAnnotation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CheckAnnotation(data map[string]any) GithubEntity {
	return NewCheckAnnotationEntityFunc(sdk, data)
}


// CheckAutomatedSecurityFix returns a CheckAutomatedSecurityFix entity bound to this client.
// Idiomatic usage: client.CheckAutomatedSecurityFix(nil).List(nil, nil) or
// client.CheckAutomatedSecurityFix(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CheckAutomatedSecurityFix(data map[string]any) GithubEntity {
	return NewCheckAutomatedSecurityFixEntityFunc(sdk, data)
}


// CheckRun returns a CheckRun entity bound to this client.
// Idiomatic usage: client.CheckRun(nil).List(nil, nil) or
// client.CheckRun(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CheckRun(data map[string]any) GithubEntity {
	return NewCheckRunEntityFunc(sdk, data)
}


// CheckSuite returns a CheckSuite entity bound to this client.
// Idiomatic usage: client.CheckSuite(nil).List(nil, nil) or
// client.CheckSuite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CheckSuite(data map[string]any) GithubEntity {
	return NewCheckSuiteEntityFunc(sdk, data)
}


// CheckSuitePreference returns a CheckSuitePreference entity bound to this client.
// Idiomatic usage: client.CheckSuitePreference(nil).List(nil, nil) or
// client.CheckSuitePreference(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CheckSuitePreference(data map[string]any) GithubEntity {
	return NewCheckSuitePreferenceEntityFunc(sdk, data)
}


// Classroom returns a Classroom entity bound to this client.
// Idiomatic usage: client.Classroom(nil).List(nil, nil) or
// client.Classroom(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Classroom(data map[string]any) GithubEntity {
	return NewClassroomEntityFunc(sdk, data)
}


// ClassroomAcceptedAssignment returns a ClassroomAcceptedAssignment entity bound to this client.
// Idiomatic usage: client.ClassroomAcceptedAssignment(nil).List(nil, nil) or
// client.ClassroomAcceptedAssignment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ClassroomAcceptedAssignment(data map[string]any) GithubEntity {
	return NewClassroomAcceptedAssignmentEntityFunc(sdk, data)
}


// ClassroomAssignment returns a ClassroomAssignment entity bound to this client.
// Idiomatic usage: client.ClassroomAssignment(nil).List(nil, nil) or
// client.ClassroomAssignment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ClassroomAssignment(data map[string]any) GithubEntity {
	return NewClassroomAssignmentEntityFunc(sdk, data)
}


// ClassroomAssignmentGrade returns a ClassroomAssignmentGrade entity bound to this client.
// Idiomatic usage: client.ClassroomAssignmentGrade(nil).List(nil, nil) or
// client.ClassroomAssignmentGrade(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ClassroomAssignmentGrade(data map[string]any) GithubEntity {
	return NewClassroomAssignmentGradeEntityFunc(sdk, data)
}


// Clone returns a Clone entity bound to this client.
// Idiomatic usage: client.Clone(nil).List(nil, nil) or
// client.Clone(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Clone(data map[string]any) GithubEntity {
	return NewCloneEntityFunc(sdk, data)
}


// CodeFrequency returns a CodeFrequency entity bound to this client.
// Idiomatic usage: client.CodeFrequency(nil).List(nil, nil) or
// client.CodeFrequency(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeFrequency(data map[string]any) GithubEntity {
	return NewCodeFrequencyEntityFunc(sdk, data)
}


// CodeFrequencyStat returns a CodeFrequencyStat entity bound to this client.
// Idiomatic usage: client.CodeFrequencyStat(nil).List(nil, nil) or
// client.CodeFrequencyStat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeFrequencyStat(data map[string]any) GithubEntity {
	return NewCodeFrequencyStatEntityFunc(sdk, data)
}


// CodeOfConduct returns a CodeOfConduct entity bound to this client.
// Idiomatic usage: client.CodeOfConduct(nil).List(nil, nil) or
// client.CodeOfConduct(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeOfConduct(data map[string]any) GithubEntity {
	return NewCodeOfConductEntityFunc(sdk, data)
}


// CodeScanning returns a CodeScanning entity bound to this client.
// Idiomatic usage: client.CodeScanning(nil).List(nil, nil) or
// client.CodeScanning(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanning(data map[string]any) GithubEntity {
	return NewCodeScanningEntityFunc(sdk, data)
}


// CodeScanningAlert returns a CodeScanningAlert entity bound to this client.
// Idiomatic usage: client.CodeScanningAlert(nil).List(nil, nil) or
// client.CodeScanningAlert(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningAlert(data map[string]any) GithubEntity {
	return NewCodeScanningAlertEntityFunc(sdk, data)
}


// CodeScanningAlertInstance returns a CodeScanningAlertInstance entity bound to this client.
// Idiomatic usage: client.CodeScanningAlertInstance(nil).List(nil, nil) or
// client.CodeScanningAlertInstance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningAlertInstance(data map[string]any) GithubEntity {
	return NewCodeScanningAlertInstanceEntityFunc(sdk, data)
}


// CodeScanningAlertItem returns a CodeScanningAlertItem entity bound to this client.
// Idiomatic usage: client.CodeScanningAlertItem(nil).List(nil, nil) or
// client.CodeScanningAlertItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningAlertItem(data map[string]any) GithubEntity {
	return NewCodeScanningAlertItemEntityFunc(sdk, data)
}


// CodeScanningAnalysi returns a CodeScanningAnalysi entity bound to this client.
// Idiomatic usage: client.CodeScanningAnalysi(nil).List(nil, nil) or
// client.CodeScanningAnalysi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningAnalysi(data map[string]any) GithubEntity {
	return NewCodeScanningAnalysiEntityFunc(sdk, data)
}


// CodeScanningAnalysisDeletion returns a CodeScanningAnalysisDeletion entity bound to this client.
// Idiomatic usage: client.CodeScanningAnalysisDeletion(nil).List(nil, nil) or
// client.CodeScanningAnalysisDeletion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningAnalysisDeletion(data map[string]any) GithubEntity {
	return NewCodeScanningAnalysisDeletionEntityFunc(sdk, data)
}


// CodeScanningAutofix returns a CodeScanningAutofix entity bound to this client.
// Idiomatic usage: client.CodeScanningAutofix(nil).List(nil, nil) or
// client.CodeScanningAutofix(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningAutofix(data map[string]any) GithubEntity {
	return NewCodeScanningAutofixEntityFunc(sdk, data)
}


// CodeScanningAutofixCommit returns a CodeScanningAutofixCommit entity bound to this client.
// Idiomatic usage: client.CodeScanningAutofixCommit(nil).List(nil, nil) or
// client.CodeScanningAutofixCommit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningAutofixCommit(data map[string]any) GithubEntity {
	return NewCodeScanningAutofixCommitEntityFunc(sdk, data)
}


// CodeScanningCodeqlDatabase returns a CodeScanningCodeqlDatabase entity bound to this client.
// Idiomatic usage: client.CodeScanningCodeqlDatabase(nil).List(nil, nil) or
// client.CodeScanningCodeqlDatabase(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningCodeqlDatabase(data map[string]any) GithubEntity {
	return NewCodeScanningCodeqlDatabaseEntityFunc(sdk, data)
}


// CodeScanningDefaultSetup returns a CodeScanningDefaultSetup entity bound to this client.
// Idiomatic usage: client.CodeScanningDefaultSetup(nil).List(nil, nil) or
// client.CodeScanningDefaultSetup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningDefaultSetup(data map[string]any) GithubEntity {
	return NewCodeScanningDefaultSetupEntityFunc(sdk, data)
}


// CodeScanningOrganizationAlertItem returns a CodeScanningOrganizationAlertItem entity bound to this client.
// Idiomatic usage: client.CodeScanningOrganizationAlertItem(nil).List(nil, nil) or
// client.CodeScanningOrganizationAlertItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningOrganizationAlertItem(data map[string]any) GithubEntity {
	return NewCodeScanningOrganizationAlertItemEntityFunc(sdk, data)
}


// CodeScanningSarifsStatus returns a CodeScanningSarifsStatus entity bound to this client.
// Idiomatic usage: client.CodeScanningSarifsStatus(nil).List(nil, nil) or
// client.CodeScanningSarifsStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningSarifsStatus(data map[string]any) GithubEntity {
	return NewCodeScanningSarifsStatusEntityFunc(sdk, data)
}


// CodeScanningVariantAnalysi returns a CodeScanningVariantAnalysi entity bound to this client.
// Idiomatic usage: client.CodeScanningVariantAnalysi(nil).List(nil, nil) or
// client.CodeScanningVariantAnalysi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningVariantAnalysi(data map[string]any) GithubEntity {
	return NewCodeScanningVariantAnalysiEntityFunc(sdk, data)
}


// CodeScanningVariantAnalysisRepoTask returns a CodeScanningVariantAnalysisRepoTask entity bound to this client.
// Idiomatic usage: client.CodeScanningVariantAnalysisRepoTask(nil).List(nil, nil) or
// client.CodeScanningVariantAnalysisRepoTask(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeScanningVariantAnalysisRepoTask(data map[string]any) GithubEntity {
	return NewCodeScanningVariantAnalysisRepoTaskEntityFunc(sdk, data)
}


// CodeSecurity returns a CodeSecurity entity bound to this client.
// Idiomatic usage: client.CodeSecurity(nil).List(nil, nil) or
// client.CodeSecurity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeSecurity(data map[string]any) GithubEntity {
	return NewCodeSecurityEntityFunc(sdk, data)
}


// CodeSecurityConfiguration returns a CodeSecurityConfiguration entity bound to this client.
// Idiomatic usage: client.CodeSecurityConfiguration(nil).List(nil, nil) or
// client.CodeSecurityConfiguration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeSecurityConfiguration(data map[string]any) GithubEntity {
	return NewCodeSecurityConfigurationEntityFunc(sdk, data)
}


// CodeSecurityConfigurationRepository returns a CodeSecurityConfigurationRepository entity bound to this client.
// Idiomatic usage: client.CodeSecurityConfigurationRepository(nil).List(nil, nil) or
// client.CodeSecurityConfigurationRepository(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeSecurityConfigurationRepository(data map[string]any) GithubEntity {
	return NewCodeSecurityConfigurationRepositoryEntityFunc(sdk, data)
}


// CodeSecurityDefaultConfiguration returns a CodeSecurityDefaultConfiguration entity bound to this client.
// Idiomatic usage: client.CodeSecurityDefaultConfiguration(nil).List(nil, nil) or
// client.CodeSecurityDefaultConfiguration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeSecurityDefaultConfiguration(data map[string]any) GithubEntity {
	return NewCodeSecurityDefaultConfigurationEntityFunc(sdk, data)
}


// CodeownersError returns a CodeownersError entity bound to this client.
// Idiomatic usage: client.CodeownersError(nil).List(nil, nil) or
// client.CodeownersError(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CodeownersError(data map[string]any) GithubEntity {
	return NewCodeownersErrorEntityFunc(sdk, data)
}


// Codespace returns a Codespace entity bound to this client.
// Idiomatic usage: client.Codespace(nil).List(nil, nil) or
// client.Codespace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Codespace(data map[string]any) GithubEntity {
	return NewCodespaceEntityFunc(sdk, data)
}


// Collaborator returns a Collaborator entity bound to this client.
// Idiomatic usage: client.Collaborator(nil).List(nil, nil) or
// client.Collaborator(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Collaborator(data map[string]any) GithubEntity {
	return NewCollaboratorEntityFunc(sdk, data)
}


// CombinedBillingUsage returns a CombinedBillingUsage entity bound to this client.
// Idiomatic usage: client.CombinedBillingUsage(nil).List(nil, nil) or
// client.CombinedBillingUsage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CombinedBillingUsage(data map[string]any) GithubEntity {
	return NewCombinedBillingUsageEntityFunc(sdk, data)
}


// CombinedCommitStatus returns a CombinedCommitStatus entity bound to this client.
// Idiomatic usage: client.CombinedCommitStatus(nil).List(nil, nil) or
// client.CombinedCommitStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CombinedCommitStatus(data map[string]any) GithubEntity {
	return NewCombinedCommitStatusEntityFunc(sdk, data)
}


// Commit returns a Commit entity bound to this client.
// Idiomatic usage: client.Commit(nil).List(nil, nil) or
// client.Commit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Commit(data map[string]any) GithubEntity {
	return NewCommitEntityFunc(sdk, data)
}


// CommitActivity returns a CommitActivity entity bound to this client.
// Idiomatic usage: client.CommitActivity(nil).List(nil, nil) or
// client.CommitActivity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CommitActivity(data map[string]any) GithubEntity {
	return NewCommitActivityEntityFunc(sdk, data)
}


// CommitComment returns a CommitComment entity bound to this client.
// Idiomatic usage: client.CommitComment(nil).List(nil, nil) or
// client.CommitComment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CommitComment(data map[string]any) GithubEntity {
	return NewCommitCommentEntityFunc(sdk, data)
}


// CommitComparison returns a CommitComparison entity bound to this client.
// Idiomatic usage: client.CommitComparison(nil).List(nil, nil) or
// client.CommitComparison(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CommitComparison(data map[string]any) GithubEntity {
	return NewCommitComparisonEntityFunc(sdk, data)
}


// CommunityProfile returns a CommunityProfile entity bound to this client.
// Idiomatic usage: client.CommunityProfile(nil).List(nil, nil) or
// client.CommunityProfile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CommunityProfile(data map[string]any) GithubEntity {
	return NewCommunityProfileEntityFunc(sdk, data)
}


// ContentFile returns a ContentFile entity bound to this client.
// Idiomatic usage: client.ContentFile(nil).List(nil, nil) or
// client.ContentFile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ContentFile(data map[string]any) GithubEntity {
	return NewContentFileEntityFunc(sdk, data)
}


// ContentTraffic returns a ContentTraffic entity bound to this client.
// Idiomatic usage: client.ContentTraffic(nil).List(nil, nil) or
// client.ContentTraffic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ContentTraffic(data map[string]any) GithubEntity {
	return NewContentTrafficEntityFunc(sdk, data)
}


// Contributor returns a Contributor entity bound to this client.
// Idiomatic usage: client.Contributor(nil).List(nil, nil) or
// client.Contributor(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Contributor(data map[string]any) GithubEntity {
	return NewContributorEntityFunc(sdk, data)
}


// Copilot returns a Copilot entity bound to this client.
// Idiomatic usage: client.Copilot(nil).List(nil, nil) or
// client.Copilot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Copilot(data map[string]any) GithubEntity {
	return NewCopilotEntityFunc(sdk, data)
}


// CopilotOrganizationDetail returns a CopilotOrganizationDetail entity bound to this client.
// Idiomatic usage: client.CopilotOrganizationDetail(nil).List(nil, nil) or
// client.CopilotOrganizationDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CopilotOrganizationDetail(data map[string]any) GithubEntity {
	return NewCopilotOrganizationDetailEntityFunc(sdk, data)
}


// CopilotUsageMetricsDay returns a CopilotUsageMetricsDay entity bound to this client.
// Idiomatic usage: client.CopilotUsageMetricsDay(nil).List(nil, nil) or
// client.CopilotUsageMetricsDay(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CopilotUsageMetricsDay(data map[string]any) GithubEntity {
	return NewCopilotUsageMetricsDayEntityFunc(sdk, data)
}


// Credential returns a Credential entity bound to this client.
// Idiomatic usage: client.Credential(nil).List(nil, nil) or
// client.Credential(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Credential(data map[string]any) GithubEntity {
	return NewCredentialEntityFunc(sdk, data)
}


// CustomProperty returns a CustomProperty entity bound to this client.
// Idiomatic usage: client.CustomProperty(nil).List(nil, nil) or
// client.CustomProperty(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CustomProperty(data map[string]any) GithubEntity {
	return NewCustomPropertyEntityFunc(sdk, data)
}


// CustomPropertyValue returns a CustomPropertyValue entity bound to this client.
// Idiomatic usage: client.CustomPropertyValue(nil).List(nil, nil) or
// client.CustomPropertyValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) CustomPropertyValue(data map[string]any) GithubEntity {
	return NewCustomPropertyValueEntityFunc(sdk, data)
}


// Dependabot returns a Dependabot entity bound to this client.
// Idiomatic usage: client.Dependabot(nil).List(nil, nil) or
// client.Dependabot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Dependabot(data map[string]any) GithubEntity {
	return NewDependabotEntityFunc(sdk, data)
}


// DependabotAlert returns a DependabotAlert entity bound to this client.
// Idiomatic usage: client.DependabotAlert(nil).List(nil, nil) or
// client.DependabotAlert(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DependabotAlert(data map[string]any) GithubEntity {
	return NewDependabotAlertEntityFunc(sdk, data)
}


// DependabotAlertWithRepository returns a DependabotAlertWithRepository entity bound to this client.
// Idiomatic usage: client.DependabotAlertWithRepository(nil).List(nil, nil) or
// client.DependabotAlertWithRepository(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DependabotAlertWithRepository(data map[string]any) GithubEntity {
	return NewDependabotAlertWithRepositoryEntityFunc(sdk, data)
}


// DependabotPublicKey returns a DependabotPublicKey entity bound to this client.
// Idiomatic usage: client.DependabotPublicKey(nil).List(nil, nil) or
// client.DependabotPublicKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DependabotPublicKey(data map[string]any) GithubEntity {
	return NewDependabotPublicKeyEntityFunc(sdk, data)
}


// DependabotRepositoryAccessDetail returns a DependabotRepositoryAccessDetail entity bound to this client.
// Idiomatic usage: client.DependabotRepositoryAccessDetail(nil).List(nil, nil) or
// client.DependabotRepositoryAccessDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DependabotRepositoryAccessDetail(data map[string]any) GithubEntity {
	return NewDependabotRepositoryAccessDetailEntityFunc(sdk, data)
}


// DependabotSecret returns a DependabotSecret entity bound to this client.
// Idiomatic usage: client.DependabotSecret(nil).List(nil, nil) or
// client.DependabotSecret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DependabotSecret(data map[string]any) GithubEntity {
	return NewDependabotSecretEntityFunc(sdk, data)
}


// DependencyGraph returns a DependencyGraph entity bound to this client.
// Idiomatic usage: client.DependencyGraph(nil).List(nil, nil) or
// client.DependencyGraph(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DependencyGraph(data map[string]any) GithubEntity {
	return NewDependencyGraphEntityFunc(sdk, data)
}


// DependencyGraphDiff returns a DependencyGraphDiff entity bound to this client.
// Idiomatic usage: client.DependencyGraphDiff(nil).List(nil, nil) or
// client.DependencyGraphDiff(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DependencyGraphDiff(data map[string]any) GithubEntity {
	return NewDependencyGraphDiffEntityFunc(sdk, data)
}


// DependencyGraphSpdxSbom returns a DependencyGraphSpdxSbom entity bound to this client.
// Idiomatic usage: client.DependencyGraphSpdxSbom(nil).List(nil, nil) or
// client.DependencyGraphSpdxSbom(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DependencyGraphSpdxSbom(data map[string]any) GithubEntity {
	return NewDependencyGraphSpdxSbomEntityFunc(sdk, data)
}


// DeployKey returns a DeployKey entity bound to this client.
// Idiomatic usage: client.DeployKey(nil).List(nil, nil) or
// client.DeployKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DeployKey(data map[string]any) GithubEntity {
	return NewDeployKeyEntityFunc(sdk, data)
}


// Deployment returns a Deployment entity bound to this client.
// Idiomatic usage: client.Deployment(nil).List(nil, nil) or
// client.Deployment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Deployment(data map[string]any) GithubEntity {
	return NewDeploymentEntityFunc(sdk, data)
}


// DeploymentBranchPolicy returns a DeploymentBranchPolicy entity bound to this client.
// Idiomatic usage: client.DeploymentBranchPolicy(nil).List(nil, nil) or
// client.DeploymentBranchPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DeploymentBranchPolicy(data map[string]any) GithubEntity {
	return NewDeploymentBranchPolicyEntityFunc(sdk, data)
}


// DeploymentProtectionRule returns a DeploymentProtectionRule entity bound to this client.
// Idiomatic usage: client.DeploymentProtectionRule(nil).List(nil, nil) or
// client.DeploymentProtectionRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DeploymentProtectionRule(data map[string]any) GithubEntity {
	return NewDeploymentProtectionRuleEntityFunc(sdk, data)
}


// DeploymentStatus returns a DeploymentStatus entity bound to this client.
// Idiomatic usage: client.DeploymentStatus(nil).List(nil, nil) or
// client.DeploymentStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DeploymentStatus(data map[string]any) GithubEntity {
	return NewDeploymentStatusEntityFunc(sdk, data)
}


// DiffEntry returns a DiffEntry entity bound to this client.
// Idiomatic usage: client.DiffEntry(nil).List(nil, nil) or
// client.DiffEntry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) DiffEntry(data map[string]any) GithubEntity {
	return NewDiffEntryEntityFunc(sdk, data)
}


// Email returns a Email entity bound to this client.
// Idiomatic usage: client.Email(nil).List(nil, nil) or
// client.Email(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Email(data map[string]any) GithubEntity {
	return NewEmailEntityFunc(sdk, data)
}


// Emoji returns a Emoji entity bound to this client.
// Idiomatic usage: client.Emoji(nil).List(nil, nil) or
// client.Emoji(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Emoji(data map[string]any) GithubEntity {
	return NewEmojiEntityFunc(sdk, data)
}


// EmptyObject returns a EmptyObject entity bound to this client.
// Idiomatic usage: client.EmptyObject(nil).List(nil, nil) or
// client.EmptyObject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) EmptyObject(data map[string]any) GithubEntity {
	return NewEmptyObjectEntityFunc(sdk, data)
}


// EnterpriseTeam returns a EnterpriseTeam entity bound to this client.
// Idiomatic usage: client.EnterpriseTeam(nil).List(nil, nil) or
// client.EnterpriseTeam(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) EnterpriseTeam(data map[string]any) GithubEntity {
	return NewEnterpriseTeamEntityFunc(sdk, data)
}


// EnterpriseTeamMembership returns a EnterpriseTeamMembership entity bound to this client.
// Idiomatic usage: client.EnterpriseTeamMembership(nil).List(nil, nil) or
// client.EnterpriseTeamMembership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) EnterpriseTeamMembership(data map[string]any) GithubEntity {
	return NewEnterpriseTeamMembershipEntityFunc(sdk, data)
}


// Environment returns a Environment entity bound to this client.
// Idiomatic usage: client.Environment(nil).List(nil, nil) or
// client.Environment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Environment(data map[string]any) GithubEntity {
	return NewEnvironmentEntityFunc(sdk, data)
}


// EnvironmentApproval returns a EnvironmentApproval entity bound to this client.
// Idiomatic usage: client.EnvironmentApproval(nil).List(nil, nil) or
// client.EnvironmentApproval(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) EnvironmentApproval(data map[string]any) GithubEntity {
	return NewEnvironmentApprovalEntityFunc(sdk, data)
}


// Event returns a Event entity bound to this client.
// Idiomatic usage: client.Event(nil).List(nil, nil) or
// client.Event(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Event(data map[string]any) GithubEntity {
	return NewEventEntityFunc(sdk, data)
}


// Feed returns a Feed entity bound to this client.
// Idiomatic usage: client.Feed(nil).List(nil, nil) or
// client.Feed(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Feed(data map[string]any) GithubEntity {
	return NewFeedEntityFunc(sdk, data)
}


// FileCommit returns a FileCommit entity bound to this client.
// Idiomatic usage: client.FileCommit(nil).List(nil, nil) or
// client.FileCommit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) FileCommit(data map[string]any) GithubEntity {
	return NewFileCommitEntityFunc(sdk, data)
}


// Follower returns a Follower entity bound to this client.
// Idiomatic usage: client.Follower(nil).List(nil, nil) or
// client.Follower(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Follower(data map[string]any) GithubEntity {
	return NewFollowerEntityFunc(sdk, data)
}


// Following returns a Following entity bound to this client.
// Idiomatic usage: client.Following(nil).List(nil, nil) or
// client.Following(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Following(data map[string]any) GithubEntity {
	return NewFollowingEntityFunc(sdk, data)
}


// FullRepository returns a FullRepository entity bound to this client.
// Idiomatic usage: client.FullRepository(nil).List(nil, nil) or
// client.FullRepository(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) FullRepository(data map[string]any) GithubEntity {
	return NewFullRepositoryEntityFunc(sdk, data)
}


// Gist returns a Gist entity bound to this client.
// Idiomatic usage: client.Gist(nil).List(nil, nil) or
// client.Gist(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Gist(data map[string]any) GithubEntity {
	return NewGistEntityFunc(sdk, data)
}


// GistComment returns a GistComment entity bound to this client.
// Idiomatic usage: client.GistComment(nil).List(nil, nil) or
// client.GistComment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) GistComment(data map[string]any) GithubEntity {
	return NewGistCommentEntityFunc(sdk, data)
}


// GistCommit returns a GistCommit entity bound to this client.
// Idiomatic usage: client.GistCommit(nil).List(nil, nil) or
// client.GistCommit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) GistCommit(data map[string]any) GithubEntity {
	return NewGistCommitEntityFunc(sdk, data)
}


// GistSimple returns a GistSimple entity bound to this client.
// Idiomatic usage: client.GistSimple(nil).List(nil, nil) or
// client.GistSimple(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) GistSimple(data map[string]any) GithubEntity {
	return NewGistSimpleEntityFunc(sdk, data)
}


// Git returns a Git entity bound to this client.
// Idiomatic usage: client.Git(nil).List(nil, nil) or
// client.Git(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Git(data map[string]any) GithubEntity {
	return NewGitEntityFunc(sdk, data)
}


// GitCommit returns a GitCommit entity bound to this client.
// Idiomatic usage: client.GitCommit(nil).List(nil, nil) or
// client.GitCommit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) GitCommit(data map[string]any) GithubEntity {
	return NewGitCommitEntityFunc(sdk, data)
}


// GitRef returns a GitRef entity bound to this client.
// Idiomatic usage: client.GitRef(nil).List(nil, nil) or
// client.GitRef(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) GitRef(data map[string]any) GithubEntity {
	return NewGitRefEntityFunc(sdk, data)
}


// GitTag returns a GitTag entity bound to this client.
// Idiomatic usage: client.GitTag(nil).List(nil, nil) or
// client.GitTag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) GitTag(data map[string]any) GithubEntity {
	return NewGitTagEntityFunc(sdk, data)
}


// GitTree returns a GitTree entity bound to this client.
// Idiomatic usage: client.GitTree(nil).List(nil, nil) or
// client.GitTree(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) GitTree(data map[string]any) GithubEntity {
	return NewGitTreeEntityFunc(sdk, data)
}


// Gitignore returns a Gitignore entity bound to this client.
// Idiomatic usage: client.Gitignore(nil).List(nil, nil) or
// client.Gitignore(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Gitignore(data map[string]any) GithubEntity {
	return NewGitignoreEntityFunc(sdk, data)
}


// GitignoreTemplate returns a GitignoreTemplate entity bound to this client.
// Idiomatic usage: client.GitignoreTemplate(nil).List(nil, nil) or
// client.GitignoreTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) GitignoreTemplate(data map[string]any) GithubEntity {
	return NewGitignoreTemplateEntityFunc(sdk, data)
}


// GlobalAdvisory returns a GlobalAdvisory entity bound to this client.
// Idiomatic usage: client.GlobalAdvisory(nil).List(nil, nil) or
// client.GlobalAdvisory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) GlobalAdvisory(data map[string]any) GithubEntity {
	return NewGlobalAdvisoryEntityFunc(sdk, data)
}


// GpgKey returns a GpgKey entity bound to this client.
// Idiomatic usage: client.GpgKey(nil).List(nil, nil) or
// client.GpgKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) GpgKey(data map[string]any) GithubEntity {
	return NewGpgKeyEntityFunc(sdk, data)
}


// Hook returns a Hook entity bound to this client.
// Idiomatic usage: client.Hook(nil).List(nil, nil) or
// client.Hook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Hook(data map[string]any) GithubEntity {
	return NewHookEntityFunc(sdk, data)
}


// HookDelivery returns a HookDelivery entity bound to this client.
// Idiomatic usage: client.HookDelivery(nil).List(nil, nil) or
// client.HookDelivery(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) HookDelivery(data map[string]any) GithubEntity {
	return NewHookDeliveryEntityFunc(sdk, data)
}


// HookDeliveryItem returns a HookDeliveryItem entity bound to this client.
// Idiomatic usage: client.HookDeliveryItem(nil).List(nil, nil) or
// client.HookDeliveryItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) HookDeliveryItem(data map[string]any) GithubEntity {
	return NewHookDeliveryItemEntityFunc(sdk, data)
}


// HostedCompute returns a HostedCompute entity bound to this client.
// Idiomatic usage: client.HostedCompute(nil).List(nil, nil) or
// client.HostedCompute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) HostedCompute(data map[string]any) GithubEntity {
	return NewHostedComputeEntityFunc(sdk, data)
}


// Hovercard returns a Hovercard entity bound to this client.
// Idiomatic usage: client.Hovercard(nil).List(nil, nil) or
// client.Hovercard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Hovercard(data map[string]any) GithubEntity {
	return NewHovercardEntityFunc(sdk, data)
}


// Import returns a Import entity bound to this client.
// Idiomatic usage: client.Import(nil).List(nil, nil) or
// client.Import(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Import(data map[string]any) GithubEntity {
	return NewImportEntityFunc(sdk, data)
}


// Installation returns a Installation entity bound to this client.
// Idiomatic usage: client.Installation(nil).List(nil, nil) or
// client.Installation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Installation(data map[string]any) GithubEntity {
	return NewInstallationEntityFunc(sdk, data)
}


// InstallationToken returns a InstallationToken entity bound to this client.
// Idiomatic usage: client.InstallationToken(nil).List(nil, nil) or
// client.InstallationToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) InstallationToken(data map[string]any) GithubEntity {
	return NewInstallationTokenEntityFunc(sdk, data)
}


// Integration returns a Integration entity bound to this client.
// Idiomatic usage: client.Integration(nil).List(nil, nil) or
// client.Integration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Integration(data map[string]any) GithubEntity {
	return NewIntegrationEntityFunc(sdk, data)
}


// IntegrationInstallation returns a IntegrationInstallation entity bound to this client.
// Idiomatic usage: client.IntegrationInstallation(nil).List(nil, nil) or
// client.IntegrationInstallation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) IntegrationInstallation(data map[string]any) GithubEntity {
	return NewIntegrationInstallationEntityFunc(sdk, data)
}


// Interaction returns a Interaction entity bound to this client.
// Idiomatic usage: client.Interaction(nil).List(nil, nil) or
// client.Interaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Interaction(data map[string]any) GithubEntity {
	return NewInteractionEntityFunc(sdk, data)
}


// InteractionLimit returns a InteractionLimit entity bound to this client.
// Idiomatic usage: client.InteractionLimit(nil).List(nil, nil) or
// client.InteractionLimit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) InteractionLimit(data map[string]any) GithubEntity {
	return NewInteractionLimitEntityFunc(sdk, data)
}


// Issue returns a Issue entity bound to this client.
// Idiomatic usage: client.Issue(nil).List(nil, nil) or
// client.Issue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Issue(data map[string]any) GithubEntity {
	return NewIssueEntityFunc(sdk, data)
}


// IssueType returns a IssueType entity bound to this client.
// Idiomatic usage: client.IssueType(nil).List(nil, nil) or
// client.IssueType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) IssueType(data map[string]any) GithubEntity {
	return NewIssueTypeEntityFunc(sdk, data)
}


// Job returns a Job entity bound to this client.
// Idiomatic usage: client.Job(nil).List(nil, nil) or
// client.Job(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Job(data map[string]any) GithubEntity {
	return NewJobEntityFunc(sdk, data)
}


// Key returns a Key entity bound to this client.
// Idiomatic usage: client.Key(nil).List(nil, nil) or
// client.Key(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Key(data map[string]any) GithubEntity {
	return NewKeyEntityFunc(sdk, data)
}


// Label returns a Label entity bound to this client.
// Idiomatic usage: client.Label(nil).List(nil, nil) or
// client.Label(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Label(data map[string]any) GithubEntity {
	return NewLabelEntityFunc(sdk, data)
}


// Language returns a Language entity bound to this client.
// Idiomatic usage: client.Language(nil).List(nil, nil) or
// client.Language(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Language(data map[string]any) GithubEntity {
	return NewLanguageEntityFunc(sdk, data)
}


// License returns a License entity bound to this client.
// Idiomatic usage: client.License(nil).List(nil, nil) or
// client.License(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) License(data map[string]any) GithubEntity {
	return NewLicenseEntityFunc(sdk, data)
}


// Markdown returns a Markdown entity bound to this client.
// Idiomatic usage: client.Markdown(nil).List(nil, nil) or
// client.Markdown(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Markdown(data map[string]any) GithubEntity {
	return NewMarkdownEntityFunc(sdk, data)
}


// MarketplaceListingPlan returns a MarketplaceListingPlan entity bound to this client.
// Idiomatic usage: client.MarketplaceListingPlan(nil).List(nil, nil) or
// client.MarketplaceListingPlan(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) MarketplaceListingPlan(data map[string]any) GithubEntity {
	return NewMarketplaceListingPlanEntityFunc(sdk, data)
}


// MarketplacePurchase returns a MarketplacePurchase entity bound to this client.
// Idiomatic usage: client.MarketplacePurchase(nil).List(nil, nil) or
// client.MarketplacePurchase(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) MarketplacePurchase(data map[string]any) GithubEntity {
	return NewMarketplacePurchaseEntityFunc(sdk, data)
}


// Member returns a Member entity bound to this client.
// Idiomatic usage: client.Member(nil).List(nil, nil) or
// client.Member(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Member(data map[string]any) GithubEntity {
	return NewMemberEntityFunc(sdk, data)
}


// Membership returns a Membership entity bound to this client.
// Idiomatic usage: client.Membership(nil).List(nil, nil) or
// client.Membership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Membership(data map[string]any) GithubEntity {
	return NewMembershipEntityFunc(sdk, data)
}


// MergedUpstream returns a MergedUpstream entity bound to this client.
// Idiomatic usage: client.MergedUpstream(nil).List(nil, nil) or
// client.MergedUpstream(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) MergedUpstream(data map[string]any) GithubEntity {
	return NewMergedUpstreamEntityFunc(sdk, data)
}


// Meta returns a Meta entity bound to this client.
// Idiomatic usage: client.Meta(nil).List(nil, nil) or
// client.Meta(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Meta(data map[string]any) GithubEntity {
	return NewMetaEntityFunc(sdk, data)
}


// Metaroot returns a Metaroot entity bound to this client.
// Idiomatic usage: client.Metaroot(nil).List(nil, nil) or
// client.Metaroot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Metaroot(data map[string]any) GithubEntity {
	return NewMetarootEntityFunc(sdk, data)
}


// Migration returns a Migration entity bound to this client.
// Idiomatic usage: client.Migration(nil).List(nil, nil) or
// client.Migration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Migration(data map[string]any) GithubEntity {
	return NewMigrationEntityFunc(sdk, data)
}


// Milestone returns a Milestone entity bound to this client.
// Idiomatic usage: client.Milestone(nil).List(nil, nil) or
// client.Milestone(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Milestone(data map[string]any) GithubEntity {
	return NewMilestoneEntityFunc(sdk, data)
}


// MinimalRepository returns a MinimalRepository entity bound to this client.
// Idiomatic usage: client.MinimalRepository(nil).List(nil, nil) or
// client.MinimalRepository(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) MinimalRepository(data map[string]any) GithubEntity {
	return NewMinimalRepositoryEntityFunc(sdk, data)
}


// NetworkConfiguration returns a NetworkConfiguration entity bound to this client.
// Idiomatic usage: client.NetworkConfiguration(nil).List(nil, nil) or
// client.NetworkConfiguration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) NetworkConfiguration(data map[string]any) GithubEntity {
	return NewNetworkConfigurationEntityFunc(sdk, data)
}


// NetworkSetting returns a NetworkSetting entity bound to this client.
// Idiomatic usage: client.NetworkSetting(nil).List(nil, nil) or
// client.NetworkSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) NetworkSetting(data map[string]any) GithubEntity {
	return NewNetworkSettingEntityFunc(sdk, data)
}


// OidcCustomSub returns a OidcCustomSub entity bound to this client.
// Idiomatic usage: client.OidcCustomSub(nil).List(nil, nil) or
// client.OidcCustomSub(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OidcCustomSub(data map[string]any) GithubEntity {
	return NewOidcCustomSubEntityFunc(sdk, data)
}


// OidcCustomSubRepo returns a OidcCustomSubRepo entity bound to this client.
// Idiomatic usage: client.OidcCustomSubRepo(nil).List(nil, nil) or
// client.OidcCustomSubRepo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OidcCustomSubRepo(data map[string]any) GithubEntity {
	return NewOidcCustomSubRepoEntityFunc(sdk, data)
}


// Org returns a Org entity bound to this client.
// Idiomatic usage: client.Org(nil).List(nil, nil) or
// client.Org(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Org(data map[string]any) GithubEntity {
	return NewOrgEntityFunc(sdk, data)
}


// OrgHook returns a OrgHook entity bound to this client.
// Idiomatic usage: client.OrgHook(nil).List(nil, nil) or
// client.OrgHook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrgHook(data map[string]any) GithubEntity {
	return NewOrgHookEntityFunc(sdk, data)
}


// OrgMembership returns a OrgMembership entity bound to this client.
// Idiomatic usage: client.OrgMembership(nil).List(nil, nil) or
// client.OrgMembership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrgMembership(data map[string]any) GithubEntity {
	return NewOrgMembershipEntityFunc(sdk, data)
}


// OrgPrivateRegistryConfiguration returns a OrgPrivateRegistryConfiguration entity bound to this client.
// Idiomatic usage: client.OrgPrivateRegistryConfiguration(nil).List(nil, nil) or
// client.OrgPrivateRegistryConfiguration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrgPrivateRegistryConfiguration(data map[string]any) GithubEntity {
	return NewOrgPrivateRegistryConfigurationEntityFunc(sdk, data)
}


// OrgPrivateRegistryConfigurationWithSelectedRepository returns a OrgPrivateRegistryConfigurationWithSelectedRepository entity bound to this client.
// Idiomatic usage: client.OrgPrivateRegistryConfigurationWithSelectedRepository(nil).List(nil, nil) or
// client.OrgPrivateRegistryConfigurationWithSelectedRepository(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrgPrivateRegistryConfigurationWithSelectedRepository(data map[string]any) GithubEntity {
	return NewOrgPrivateRegistryConfigurationWithSelectedRepositoryEntityFunc(sdk, data)
}


// OrgRepoCustomPropertyValue returns a OrgRepoCustomPropertyValue entity bound to this client.
// Idiomatic usage: client.OrgRepoCustomPropertyValue(nil).List(nil, nil) or
// client.OrgRepoCustomPropertyValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrgRepoCustomPropertyValue(data map[string]any) GithubEntity {
	return NewOrgRepoCustomPropertyValueEntityFunc(sdk, data)
}


// Organization returns a Organization entity bound to this client.
// Idiomatic usage: client.Organization(nil).List(nil, nil) or
// client.Organization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Organization(data map[string]any) GithubEntity {
	return NewOrganizationEntityFunc(sdk, data)
}


// OrganizationActionsSecret returns a OrganizationActionsSecret entity bound to this client.
// Idiomatic usage: client.OrganizationActionsSecret(nil).List(nil, nil) or
// client.OrganizationActionsSecret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrganizationActionsSecret(data map[string]any) GithubEntity {
	return NewOrganizationActionsSecretEntityFunc(sdk, data)
}


// OrganizationActionsVariable returns a OrganizationActionsVariable entity bound to this client.
// Idiomatic usage: client.OrganizationActionsVariable(nil).List(nil, nil) or
// client.OrganizationActionsVariable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrganizationActionsVariable(data map[string]any) GithubEntity {
	return NewOrganizationActionsVariableEntityFunc(sdk, data)
}


// OrganizationDependabotSecret returns a OrganizationDependabotSecret entity bound to this client.
// Idiomatic usage: client.OrganizationDependabotSecret(nil).List(nil, nil) or
// client.OrganizationDependabotSecret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrganizationDependabotSecret(data map[string]any) GithubEntity {
	return NewOrganizationDependabotSecretEntityFunc(sdk, data)
}


// OrganizationInvitation returns a OrganizationInvitation entity bound to this client.
// Idiomatic usage: client.OrganizationInvitation(nil).List(nil, nil) or
// client.OrganizationInvitation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrganizationInvitation(data map[string]any) GithubEntity {
	return NewOrganizationInvitationEntityFunc(sdk, data)
}


// OrganizationProgrammaticAccessGrant returns a OrganizationProgrammaticAccessGrant entity bound to this client.
// Idiomatic usage: client.OrganizationProgrammaticAccessGrant(nil).List(nil, nil) or
// client.OrganizationProgrammaticAccessGrant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrganizationProgrammaticAccessGrant(data map[string]any) GithubEntity {
	return NewOrganizationProgrammaticAccessGrantEntityFunc(sdk, data)
}


// OrganizationRole returns a OrganizationRole entity bound to this client.
// Idiomatic usage: client.OrganizationRole(nil).List(nil, nil) or
// client.OrganizationRole(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrganizationRole(data map[string]any) GithubEntity {
	return NewOrganizationRoleEntityFunc(sdk, data)
}


// OrganizationSecretScanningAlert returns a OrganizationSecretScanningAlert entity bound to this client.
// Idiomatic usage: client.OrganizationSecretScanningAlert(nil).List(nil, nil) or
// client.OrganizationSecretScanningAlert(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OrganizationSecretScanningAlert(data map[string]any) GithubEntity {
	return NewOrganizationSecretScanningAlertEntityFunc(sdk, data)
}


// OutsideCollaborator returns a OutsideCollaborator entity bound to this client.
// Idiomatic usage: client.OutsideCollaborator(nil).List(nil, nil) or
// client.OutsideCollaborator(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) OutsideCollaborator(data map[string]any) GithubEntity {
	return NewOutsideCollaboratorEntityFunc(sdk, data)
}


// Package returns a Package entity bound to this client.
// Idiomatic usage: client.Package(nil).List(nil, nil) or
// client.Package(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Package(data map[string]any) GithubEntity {
	return NewPackageEntityFunc(sdk, data)
}


// Page returns a Page entity bound to this client.
// Idiomatic usage: client.Page(nil).List(nil, nil) or
// client.Page(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Page(data map[string]any) GithubEntity {
	return NewPageEntityFunc(sdk, data)
}


// PageBuild returns a PageBuild entity bound to this client.
// Idiomatic usage: client.PageBuild(nil).List(nil, nil) or
// client.PageBuild(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PageBuild(data map[string]any) GithubEntity {
	return NewPageBuildEntityFunc(sdk, data)
}


// PageBuildStatus returns a PageBuildStatus entity bound to this client.
// Idiomatic usage: client.PageBuildStatus(nil).List(nil, nil) or
// client.PageBuildStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PageBuildStatus(data map[string]any) GithubEntity {
	return NewPageBuildStatusEntityFunc(sdk, data)
}


// PageDeployment returns a PageDeployment entity bound to this client.
// Idiomatic usage: client.PageDeployment(nil).List(nil, nil) or
// client.PageDeployment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PageDeployment(data map[string]any) GithubEntity {
	return NewPageDeploymentEntityFunc(sdk, data)
}


// PagesDeploymentStatus returns a PagesDeploymentStatus entity bound to this client.
// Idiomatic usage: client.PagesDeploymentStatus(nil).List(nil, nil) or
// client.PagesDeploymentStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PagesDeploymentStatus(data map[string]any) GithubEntity {
	return NewPagesDeploymentStatusEntityFunc(sdk, data)
}


// PagesHealthCheck returns a PagesHealthCheck entity bound to this client.
// Idiomatic usage: client.PagesHealthCheck(nil).List(nil, nil) or
// client.PagesHealthCheck(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PagesHealthCheck(data map[string]any) GithubEntity {
	return NewPagesHealthCheckEntityFunc(sdk, data)
}


// Participation returns a Participation entity bound to this client.
// Idiomatic usage: client.Participation(nil).List(nil, nil) or
// client.Participation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Participation(data map[string]any) GithubEntity {
	return NewParticipationEntityFunc(sdk, data)
}


// PendingDeployment returns a PendingDeployment entity bound to this client.
// Idiomatic usage: client.PendingDeployment(nil).List(nil, nil) or
// client.PendingDeployment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PendingDeployment(data map[string]any) GithubEntity {
	return NewPendingDeploymentEntityFunc(sdk, data)
}


// PorterAuthor returns a PorterAuthor entity bound to this client.
// Idiomatic usage: client.PorterAuthor(nil).List(nil, nil) or
// client.PorterAuthor(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PorterAuthor(data map[string]any) GithubEntity {
	return NewPorterAuthorEntityFunc(sdk, data)
}


// PorterLargeFile returns a PorterLargeFile entity bound to this client.
// Idiomatic usage: client.PorterLargeFile(nil).List(nil, nil) or
// client.PorterLargeFile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PorterLargeFile(data map[string]any) GithubEntity {
	return NewPorterLargeFileEntityFunc(sdk, data)
}


// PrivateRegistry returns a PrivateRegistry entity bound to this client.
// Idiomatic usage: client.PrivateRegistry(nil).List(nil, nil) or
// client.PrivateRegistry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PrivateRegistry(data map[string]any) GithubEntity {
	return NewPrivateRegistryEntityFunc(sdk, data)
}


// PrivateUser returns a PrivateUser entity bound to this client.
// Idiomatic usage: client.PrivateUser(nil).List(nil, nil) or
// client.PrivateUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PrivateUser(data map[string]any) GithubEntity {
	return NewPrivateUserEntityFunc(sdk, data)
}


// Project returns a Project entity bound to this client.
// Idiomatic usage: client.Project(nil).List(nil, nil) or
// client.Project(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Project(data map[string]any) GithubEntity {
	return NewProjectEntityFunc(sdk, data)
}


// ProjectCollaboratorPermission returns a ProjectCollaboratorPermission entity bound to this client.
// Idiomatic usage: client.ProjectCollaboratorPermission(nil).List(nil, nil) or
// client.ProjectCollaboratorPermission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ProjectCollaboratorPermission(data map[string]any) GithubEntity {
	return NewProjectCollaboratorPermissionEntityFunc(sdk, data)
}


// ProjectColumn returns a ProjectColumn entity bound to this client.
// Idiomatic usage: client.ProjectColumn(nil).List(nil, nil) or
// client.ProjectColumn(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ProjectColumn(data map[string]any) GithubEntity {
	return NewProjectColumnEntityFunc(sdk, data)
}


// ProjectsClassic returns a ProjectsClassic entity bound to this client.
// Idiomatic usage: client.ProjectsClassic(nil).List(nil, nil) or
// client.ProjectsClassic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ProjectsClassic(data map[string]any) GithubEntity {
	return NewProjectsClassicEntityFunc(sdk, data)
}


// ProjectsV2 returns a ProjectsV2 entity bound to this client.
// Idiomatic usage: client.ProjectsV2(nil).List(nil, nil) or
// client.ProjectsV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ProjectsV2(data map[string]any) GithubEntity {
	return NewProjectsV2EntityFunc(sdk, data)
}


// ProjectsV2Field returns a ProjectsV2Field entity bound to this client.
// Idiomatic usage: client.ProjectsV2Field(nil).List(nil, nil) or
// client.ProjectsV2Field(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ProjectsV2Field(data map[string]any) GithubEntity {
	return NewProjectsV2FieldEntityFunc(sdk, data)
}


// ProjectsV2ItemSimple returns a ProjectsV2ItemSimple entity bound to this client.
// Idiomatic usage: client.ProjectsV2ItemSimple(nil).List(nil, nil) or
// client.ProjectsV2ItemSimple(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ProjectsV2ItemSimple(data map[string]any) GithubEntity {
	return NewProjectsV2ItemSimpleEntityFunc(sdk, data)
}


// ProjectsV2ItemWithContent returns a ProjectsV2ItemWithContent entity bound to this client.
// Idiomatic usage: client.ProjectsV2ItemWithContent(nil).List(nil, nil) or
// client.ProjectsV2ItemWithContent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ProjectsV2ItemWithContent(data map[string]any) GithubEntity {
	return NewProjectsV2ItemWithContentEntityFunc(sdk, data)
}


// ProtectedBranch returns a ProtectedBranch entity bound to this client.
// Idiomatic usage: client.ProtectedBranch(nil).List(nil, nil) or
// client.ProtectedBranch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ProtectedBranch(data map[string]any) GithubEntity {
	return NewProtectedBranchEntityFunc(sdk, data)
}


// ProtectedBranchAdminEnforced returns a ProtectedBranchAdminEnforced entity bound to this client.
// Idiomatic usage: client.ProtectedBranchAdminEnforced(nil).List(nil, nil) or
// client.ProtectedBranchAdminEnforced(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ProtectedBranchAdminEnforced(data map[string]any) GithubEntity {
	return NewProtectedBranchAdminEnforcedEntityFunc(sdk, data)
}


// ProtectedBranchPullRequestReview returns a ProtectedBranchPullRequestReview entity bound to this client.
// Idiomatic usage: client.ProtectedBranchPullRequestReview(nil).List(nil, nil) or
// client.ProtectedBranchPullRequestReview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ProtectedBranchPullRequestReview(data map[string]any) GithubEntity {
	return NewProtectedBranchPullRequestReviewEntityFunc(sdk, data)
}


// PublicMember returns a PublicMember entity bound to this client.
// Idiomatic usage: client.PublicMember(nil).List(nil, nil) or
// client.PublicMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PublicMember(data map[string]any) GithubEntity {
	return NewPublicMemberEntityFunc(sdk, data)
}


// Pull returns a Pull entity bound to this client.
// Idiomatic usage: client.Pull(nil).List(nil, nil) or
// client.Pull(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Pull(data map[string]any) GithubEntity {
	return NewPullEntityFunc(sdk, data)
}


// PullRequestReview returns a PullRequestReview entity bound to this client.
// Idiomatic usage: client.PullRequestReview(nil).List(nil, nil) or
// client.PullRequestReview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PullRequestReview(data map[string]any) GithubEntity {
	return NewPullRequestReviewEntityFunc(sdk, data)
}


// PullRequestReviewComment returns a PullRequestReviewComment entity bound to this client.
// Idiomatic usage: client.PullRequestReviewComment(nil).List(nil, nil) or
// client.PullRequestReviewComment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PullRequestReviewComment(data map[string]any) GithubEntity {
	return NewPullRequestReviewCommentEntityFunc(sdk, data)
}


// PullRequestSimple returns a PullRequestSimple entity bound to this client.
// Idiomatic usage: client.PullRequestSimple(nil).List(nil, nil) or
// client.PullRequestSimple(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) PullRequestSimple(data map[string]any) GithubEntity {
	return NewPullRequestSimpleEntityFunc(sdk, data)
}


// RateLimit returns a RateLimit entity bound to this client.
// Idiomatic usage: client.RateLimit(nil).List(nil, nil) or
// client.RateLimit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RateLimit(data map[string]any) GithubEntity {
	return NewRateLimitEntityFunc(sdk, data)
}


// Reaction returns a Reaction entity bound to this client.
// Idiomatic usage: client.Reaction(nil).List(nil, nil) or
// client.Reaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Reaction(data map[string]any) GithubEntity {
	return NewReactionEntityFunc(sdk, data)
}


// Referrer returns a Referrer entity bound to this client.
// Idiomatic usage: client.Referrer(nil).List(nil, nil) or
// client.Referrer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Referrer(data map[string]any) GithubEntity {
	return NewReferrerEntityFunc(sdk, data)
}


// Release returns a Release entity bound to this client.
// Idiomatic usage: client.Release(nil).List(nil, nil) or
// client.Release(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Release(data map[string]any) GithubEntity {
	return NewReleaseEntityFunc(sdk, data)
}


// ReleaseAsset returns a ReleaseAsset entity bound to this client.
// Idiomatic usage: client.ReleaseAsset(nil).List(nil, nil) or
// client.ReleaseAsset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ReleaseAsset(data map[string]any) GithubEntity {
	return NewReleaseAssetEntityFunc(sdk, data)
}


// ReleaseNotesContent returns a ReleaseNotesContent entity bound to this client.
// Idiomatic usage: client.ReleaseNotesContent(nil).List(nil, nil) or
// client.ReleaseNotesContent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ReleaseNotesContent(data map[string]any) GithubEntity {
	return NewReleaseNotesContentEntityFunc(sdk, data)
}


// Remove returns a Remove entity bound to this client.
// Idiomatic usage: client.Remove(nil).List(nil, nil) or
// client.Remove(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Remove(data map[string]any) GithubEntity {
	return NewRemoveEntityFunc(sdk, data)
}


// Repo returns a Repo entity bound to this client.
// Idiomatic usage: client.Repo(nil).List(nil, nil) or
// client.Repo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Repo(data map[string]any) GithubEntity {
	return NewRepoEntityFunc(sdk, data)
}


// Repository returns a Repository entity bound to this client.
// Idiomatic usage: client.Repository(nil).List(nil, nil) or
// client.Repository(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Repository(data map[string]any) GithubEntity {
	return NewRepositoryEntityFunc(sdk, data)
}


// RepositoryAdvisory returns a RepositoryAdvisory entity bound to this client.
// Idiomatic usage: client.RepositoryAdvisory(nil).List(nil, nil) or
// client.RepositoryAdvisory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RepositoryAdvisory(data map[string]any) GithubEntity {
	return NewRepositoryAdvisoryEntityFunc(sdk, data)
}


// RepositoryCollaboratorPermission returns a RepositoryCollaboratorPermission entity bound to this client.
// Idiomatic usage: client.RepositoryCollaboratorPermission(nil).List(nil, nil) or
// client.RepositoryCollaboratorPermission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RepositoryCollaboratorPermission(data map[string]any) GithubEntity {
	return NewRepositoryCollaboratorPermissionEntityFunc(sdk, data)
}


// RepositoryInvitation returns a RepositoryInvitation entity bound to this client.
// Idiomatic usage: client.RepositoryInvitation(nil).List(nil, nil) or
// client.RepositoryInvitation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RepositoryInvitation(data map[string]any) GithubEntity {
	return NewRepositoryInvitationEntityFunc(sdk, data)
}


// RepositoryRuleDetailed returns a RepositoryRuleDetailed entity bound to this client.
// Idiomatic usage: client.RepositoryRuleDetailed(nil).List(nil, nil) or
// client.RepositoryRuleDetailed(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RepositoryRuleDetailed(data map[string]any) GithubEntity {
	return NewRepositoryRuleDetailedEntityFunc(sdk, data)
}


// RepositoryRuleset returns a RepositoryRuleset entity bound to this client.
// Idiomatic usage: client.RepositoryRuleset(nil).List(nil, nil) or
// client.RepositoryRuleset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RepositoryRuleset(data map[string]any) GithubEntity {
	return NewRepositoryRulesetEntityFunc(sdk, data)
}


// RepositorySubscription returns a RepositorySubscription entity bound to this client.
// Idiomatic usage: client.RepositorySubscription(nil).List(nil, nil) or
// client.RepositorySubscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RepositorySubscription(data map[string]any) GithubEntity {
	return NewRepositorySubscriptionEntityFunc(sdk, data)
}


// ReviewComment returns a ReviewComment entity bound to this client.
// Idiomatic usage: client.ReviewComment(nil).List(nil, nil) or
// client.ReviewComment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ReviewComment(data map[string]any) GithubEntity {
	return NewReviewCommentEntityFunc(sdk, data)
}


// RuleSuite returns a RuleSuite entity bound to this client.
// Idiomatic usage: client.RuleSuite(nil).List(nil, nil) or
// client.RuleSuite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RuleSuite(data map[string]any) GithubEntity {
	return NewRuleSuiteEntityFunc(sdk, data)
}


// RulesetVersion returns a RulesetVersion entity bound to this client.
// Idiomatic usage: client.RulesetVersion(nil).List(nil, nil) or
// client.RulesetVersion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RulesetVersion(data map[string]any) GithubEntity {
	return NewRulesetVersionEntityFunc(sdk, data)
}


// RulesetVersionWithState returns a RulesetVersionWithState entity bound to this client.
// Idiomatic usage: client.RulesetVersionWithState(nil).List(nil, nil) or
// client.RulesetVersionWithState(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RulesetVersionWithState(data map[string]any) GithubEntity {
	return NewRulesetVersionWithStateEntityFunc(sdk, data)
}


// Runner returns a Runner entity bound to this client.
// Idiomatic usage: client.Runner(nil).List(nil, nil) or
// client.Runner(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Runner(data map[string]any) GithubEntity {
	return NewRunnerEntityFunc(sdk, data)
}


// RunnerApplication returns a RunnerApplication entity bound to this client.
// Idiomatic usage: client.RunnerApplication(nil).List(nil, nil) or
// client.RunnerApplication(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RunnerApplication(data map[string]any) GithubEntity {
	return NewRunnerApplicationEntityFunc(sdk, data)
}


// RunnerGroup returns a RunnerGroup entity bound to this client.
// Idiomatic usage: client.RunnerGroup(nil).List(nil, nil) or
// client.RunnerGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) RunnerGroup(data map[string]any) GithubEntity {
	return NewRunnerGroupEntityFunc(sdk, data)
}


// Search returns a Search entity bound to this client.
// Idiomatic usage: client.Search(nil).List(nil, nil) or
// client.Search(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Search(data map[string]any) GithubEntity {
	return NewSearchEntityFunc(sdk, data)
}


// SecretScanning returns a SecretScanning entity bound to this client.
// Idiomatic usage: client.SecretScanning(nil).List(nil, nil) or
// client.SecretScanning(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SecretScanning(data map[string]any) GithubEntity {
	return NewSecretScanningEntityFunc(sdk, data)
}


// SecretScanningAlert returns a SecretScanningAlert entity bound to this client.
// Idiomatic usage: client.SecretScanningAlert(nil).List(nil, nil) or
// client.SecretScanningAlert(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SecretScanningAlert(data map[string]any) GithubEntity {
	return NewSecretScanningAlertEntityFunc(sdk, data)
}


// SecretScanningLocation returns a SecretScanningLocation entity bound to this client.
// Idiomatic usage: client.SecretScanningLocation(nil).List(nil, nil) or
// client.SecretScanningLocation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SecretScanningLocation(data map[string]any) GithubEntity {
	return NewSecretScanningLocationEntityFunc(sdk, data)
}


// SecretScanningPatternConfiguration returns a SecretScanningPatternConfiguration entity bound to this client.
// Idiomatic usage: client.SecretScanningPatternConfiguration(nil).List(nil, nil) or
// client.SecretScanningPatternConfiguration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SecretScanningPatternConfiguration(data map[string]any) GithubEntity {
	return NewSecretScanningPatternConfigurationEntityFunc(sdk, data)
}


// SecretScanningPushProtectionBypass returns a SecretScanningPushProtectionBypass entity bound to this client.
// Idiomatic usage: client.SecretScanningPushProtectionBypass(nil).List(nil, nil) or
// client.SecretScanningPushProtectionBypass(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SecretScanningPushProtectionBypass(data map[string]any) GithubEntity {
	return NewSecretScanningPushProtectionBypassEntityFunc(sdk, data)
}


// SecretScanningScanHistory returns a SecretScanningScanHistory entity bound to this client.
// Idiomatic usage: client.SecretScanningScanHistory(nil).List(nil, nil) or
// client.SecretScanningScanHistory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SecretScanningScanHistory(data map[string]any) GithubEntity {
	return NewSecretScanningScanHistoryEntityFunc(sdk, data)
}


// SecurityAdvisory returns a SecurityAdvisory entity bound to this client.
// Idiomatic usage: client.SecurityAdvisory(nil).List(nil, nil) or
// client.SecurityAdvisory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SecurityAdvisory(data map[string]any) GithubEntity {
	return NewSecurityAdvisoryEntityFunc(sdk, data)
}


// SelectedAction returns a SelectedAction entity bound to this client.
// Idiomatic usage: client.SelectedAction(nil).List(nil, nil) or
// client.SelectedAction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SelectedAction(data map[string]any) GithubEntity {
	return NewSelectedActionEntityFunc(sdk, data)
}


// SelfHostedRunner returns a SelfHostedRunner entity bound to this client.
// Idiomatic usage: client.SelfHostedRunner(nil).List(nil, nil) or
// client.SelfHostedRunner(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SelfHostedRunner(data map[string]any) GithubEntity {
	return NewSelfHostedRunnerEntityFunc(sdk, data)
}


// ShortBlob returns a ShortBlob entity bound to this client.
// Idiomatic usage: client.ShortBlob(nil).List(nil, nil) or
// client.ShortBlob(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ShortBlob(data map[string]any) GithubEntity {
	return NewShortBlobEntityFunc(sdk, data)
}


// ShortBranch returns a ShortBranch entity bound to this client.
// Idiomatic usage: client.ShortBranch(nil).List(nil, nil) or
// client.ShortBranch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ShortBranch(data map[string]any) GithubEntity {
	return NewShortBranchEntityFunc(sdk, data)
}


// SimpleClassroom returns a SimpleClassroom entity bound to this client.
// Idiomatic usage: client.SimpleClassroom(nil).List(nil, nil) or
// client.SimpleClassroom(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SimpleClassroom(data map[string]any) GithubEntity {
	return NewSimpleClassroomEntityFunc(sdk, data)
}


// SimpleClassroomAssignment returns a SimpleClassroomAssignment entity bound to this client.
// Idiomatic usage: client.SimpleClassroomAssignment(nil).List(nil, nil) or
// client.SimpleClassroomAssignment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SimpleClassroomAssignment(data map[string]any) GithubEntity {
	return NewSimpleClassroomAssignmentEntityFunc(sdk, data)
}


// SocialAccount returns a SocialAccount entity bound to this client.
// Idiomatic usage: client.SocialAccount(nil).List(nil, nil) or
// client.SocialAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SocialAccount(data map[string]any) GithubEntity {
	return NewSocialAccountEntityFunc(sdk, data)
}


// SshSigningKey returns a SshSigningKey entity bound to this client.
// Idiomatic usage: client.SshSigningKey(nil).List(nil, nil) or
// client.SshSigningKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) SshSigningKey(data map[string]any) GithubEntity {
	return NewSshSigningKeyEntityFunc(sdk, data)
}


// Status returns a Status entity bound to this client.
// Idiomatic usage: client.Status(nil).List(nil, nil) or
// client.Status(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Status(data map[string]any) GithubEntity {
	return NewStatusEntityFunc(sdk, data)
}


// StatusCheckPolicy returns a StatusCheckPolicy entity bound to this client.
// Idiomatic usage: client.StatusCheckPolicy(nil).List(nil, nil) or
// client.StatusCheckPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) StatusCheckPolicy(data map[string]any) GithubEntity {
	return NewStatusCheckPolicyEntityFunc(sdk, data)
}


// Subscriber returns a Subscriber entity bound to this client.
// Idiomatic usage: client.Subscriber(nil).List(nil, nil) or
// client.Subscriber(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Subscriber(data map[string]any) GithubEntity {
	return NewSubscriberEntityFunc(sdk, data)
}


// Tag returns a Tag entity bound to this client.
// Idiomatic usage: client.Tag(nil).List(nil, nil) or
// client.Tag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Tag(data map[string]any) GithubEntity {
	return NewTagEntityFunc(sdk, data)
}


// TagProtection returns a TagProtection entity bound to this client.
// Idiomatic usage: client.TagProtection(nil).List(nil, nil) or
// client.TagProtection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) TagProtection(data map[string]any) GithubEntity {
	return NewTagProtectionEntityFunc(sdk, data)
}


// Team returns a Team entity bound to this client.
// Idiomatic usage: client.Team(nil).List(nil, nil) or
// client.Team(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Team(data map[string]any) GithubEntity {
	return NewTeamEntityFunc(sdk, data)
}


// TeamSimple returns a TeamSimple entity bound to this client.
// Idiomatic usage: client.TeamSimple(nil).List(nil, nil) or
// client.TeamSimple(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) TeamSimple(data map[string]any) GithubEntity {
	return NewTeamSimpleEntityFunc(sdk, data)
}


// Thread returns a Thread entity bound to this client.
// Idiomatic usage: client.Thread(nil).List(nil, nil) or
// client.Thread(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Thread(data map[string]any) GithubEntity {
	return NewThreadEntityFunc(sdk, data)
}


// ThreadSubscription returns a ThreadSubscription entity bound to this client.
// Idiomatic usage: client.ThreadSubscription(nil).List(nil, nil) or
// client.ThreadSubscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) ThreadSubscription(data map[string]any) GithubEntity {
	return NewThreadSubscriptionEntityFunc(sdk, data)
}


// Topic returns a Topic entity bound to this client.
// Idiomatic usage: client.Topic(nil).List(nil, nil) or
// client.Topic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Topic(data map[string]any) GithubEntity {
	return NewTopicEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) User(data map[string]any) GithubEntity {
	return NewUserEntityFunc(sdk, data)
}


// UserMarketplacePurchase returns a UserMarketplacePurchase entity bound to this client.
// Idiomatic usage: client.UserMarketplacePurchase(nil).List(nil, nil) or
// client.UserMarketplacePurchase(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) UserMarketplacePurchase(data map[string]any) GithubEntity {
	return NewUserMarketplacePurchaseEntityFunc(sdk, data)
}


// View returns a View entity bound to this client.
// Idiomatic usage: client.View(nil).List(nil, nil) or
// client.View(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) View(data map[string]any) GithubEntity {
	return NewViewEntityFunc(sdk, data)
}


// WebhookConfig returns a WebhookConfig entity bound to this client.
// Idiomatic usage: client.WebhookConfig(nil).List(nil, nil) or
// client.WebhookConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) WebhookConfig(data map[string]any) GithubEntity {
	return NewWebhookConfigEntityFunc(sdk, data)
}


// Workflow returns a Workflow entity bound to this client.
// Idiomatic usage: client.Workflow(nil).List(nil, nil) or
// client.Workflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) Workflow(data map[string]any) GithubEntity {
	return NewWorkflowEntityFunc(sdk, data)
}


// WorkflowRun returns a WorkflowRun entity bound to this client.
// Idiomatic usage: client.WorkflowRun(nil).List(nil, nil) or
// client.WorkflowRun(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) WorkflowRun(data map[string]any) GithubEntity {
	return NewWorkflowRunEntityFunc(sdk, data)
}


// WorkflowRunUsage returns a WorkflowRunUsage entity bound to this client.
// Idiomatic usage: client.WorkflowRunUsage(nil).List(nil, nil) or
// client.WorkflowRunUsage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) WorkflowRunUsage(data map[string]any) GithubEntity {
	return NewWorkflowRunUsageEntityFunc(sdk, data)
}


// WorkflowUsage returns a WorkflowUsage entity bound to this client.
// Idiomatic usage: client.WorkflowUsage(nil).List(nil, nil) or
// client.WorkflowUsage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *GithubSDK) WorkflowUsage(data map[string]any) GithubEntity {
	return NewWorkflowUsageEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *GithubSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewGithubSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
