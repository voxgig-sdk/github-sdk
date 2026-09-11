# github-mcp

[MCP](https://modelcontextprotocol.io) server exposing the Github SDK as
two agent tools — `github_list` and `github_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/github-mcp)
make build

# 2. Provide credentials via the environment
export GITHUB_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user github \
  -- /absolute/path/to/github-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./github-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// github_list: first page of records
{ "entity": "action" }
{ "entity": "action", "query": { } }

// github_load: one record by id
{ "entity": "action", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/github-mcp
   ```

2. **Set your API key:**

   ```sh
   export GITHUB_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user github \
     -- "$PWD"/dist/*/github-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `github_list` and `github_load` tools now appear
   in new sessions. Ask the agent to *"list action using github"*
   and it calls `github_list` with `{"entity":"action"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export GITHUB_APIKEY=sk_live_xxx            # API key
export GITHUB_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./github-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `github_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "action" }
```

### Call the `github_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "action", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `github_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `github_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 267 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `GITHUB_APIKEY` | API key sent with every request. |
| `GITHUB_BASE` | Optional override of the API base URL. |

### Entities

The 267 entities valid as the `entity` argument:

action | actions_artifact_and_log_retention | actions_cache_list | actions_cache_usage_by_repository | actions_cache_usage_org_enterprise | actions_fork_pr_contributor_approval | actions_fork_pr_workflows_private_repo | actions_get_default_workflow_permission | actions_hosted_runner | actions_hosted_runner_limit | actions_organization_permission | actions_public_key | actions_repository_permission | actions_secret | actions_variable | actions_workflow_access_to_repository | activity | add | api_insights_route_stat | api_insights_subject_stat | api_insights_summary_stat | api_insights_time_stat | api_insights_user_stat | api_overview | app | artifact | assignee | authentication_token | authorization | autolink | base_gist | billing_usage_report | billing_usage_report_user | blob | block | branch | branch_protection | branch_restriction_policy | branch_short | branch_with_protection | campaign | check | check_annotation | check_automated_security_fix | check_run | check_suite | check_suite_preference | classroom | classroom_accepted_assignment | classroom_assignment | classroom_assignment_grade | clone | code_frequency | code_frequency_stat | code_of_conduct | code_scanning | code_scanning_alert | code_scanning_alert_instance | code_scanning_alert_item | code_scanning_analysi | code_scanning_analysis_deletion | code_scanning_autofix | code_scanning_autofix_commit | code_scanning_codeql_database | code_scanning_default_setup | code_scanning_organization_alert_item | code_scanning_sarifs_status | code_scanning_variant_analysi | code_scanning_variant_analysis_repo_task | code_security | code_security_configuration | code_security_configuration_repository | code_security_default_configuration | codeowners_error | codespace | collaborator | combined_billing_usage | combined_commit_status | commit | commit_activity | commit_comment | commit_comparison | community_profile | content_file | content_traffic | contributor | copilot | copilot_organization_detail | copilot_usage_metrics_day | credential | custom_property | custom_property_value | dependabot | dependabot_alert | dependabot_alert_with_repository | dependabot_public_key | dependabot_repository_access_detail | dependabot_secret | dependency_graph | dependency_graph_diff | dependency_graph_spdx_sbom | deploy_key | deployment | deployment_branch_policy | deployment_protection_rule | deployment_status | diff_entry | email | emoji | empty_object | enterprise_team | enterprise_team_membership | environment | environment_approval | event | feed | file_commit | follower | following | full_repository | gist | gist_comment | gist_commit | gist_simple | git | git_commit | git_ref | git_tag | git_tree | gitignore | gitignore_template | global_advisory | gpg_key | hook | hook_delivery | hook_delivery_item | hosted_compute | hovercard | import | installation | installation_token | integration | integration_installation | interaction | interaction_limit | issue | issue_type | job | key | label | language | license | markdown | marketplace_listing_plan | marketplace_purchase | member | membership | merged_upstream | meta | metaroot | migration | milestone | minimal_repository | network_configuration | network_setting | oidc_custom_sub | oidc_custom_sub_repo | org | org_hook | org_membership | org_private_registry_configuration | org_private_registry_configuration_with_selected_repository | org_repo_custom_property_value | organization | organization_actions_secret | organization_actions_variable | organization_dependabot_secret | organization_invitation | organization_programmatic_access_grant | organization_role | organization_secret_scanning_alert | outside_collaborator | package | page | page_build | page_build_status | page_deployment | pages_deployment_status | pages_health_check | participation | pending_deployment | porter_author | porter_large_file | private_registry | private_user | project | project_collaborator_permission | project_column | projects_classic | projects_v2 | projects_v2_field | projects_v2_item_simple | projects_v2_item_with_content | protected_branch | protected_branch_admin_enforced | protected_branch_pull_request_review | public_member | pull | pull_request_review | pull_request_review_comment | pull_request_simple | rate_limit | reaction | referrer | release | release_asset | release_notes_content | remove | repo | repository | repository_advisory | repository_collaborator_permission | repository_invitation | repository_rule_detailed | repository_ruleset | repository_subscription | review_comment | rule_suite | ruleset_version | ruleset_version_with_state | runner | runner_application | runner_group | search | secret_scanning | secret_scanning_alert | secret_scanning_location | secret_scanning_pattern_configuration | secret_scanning_push_protection_bypass | secret_scanning_scan_history | security_advisory | selected_action | self_hosted_runner | short_blob | short_branch | simple_classroom | simple_classroom_assignment | social_account | ssh_signing_key | status | status_check_policy | subscriber | tag | tag_protection | team | team_simple | thread | thread_subscription | topic | user | user_marketplace_purchase | view | webhook_config | workflow | workflow_run | workflow_run_usage | workflow_usage

### Smoke test via HTTP (raw JSON-RPC)

```sh
./github-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"github_load","arguments":{"entity":"action","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
