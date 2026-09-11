# github-cli

boru-driven command-line client **and** interactive REPL for the Github
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/github-cli)
make build

# 2. See usage (words, entities, env vars)
./github-cli --help

# 3. Provide credentials once, via the environment
export GITHUB_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./github-cli list action
./github-cli load 1 action            # {id:1} shorthand
./github-cli load '{id:1}' action       # explicit match map
./github-cli update '{name:"x"}' action
./github-cli list actions_artifact_and_log_retention

# 5. Override the API base URL for a single call
GITHUB_BASE=https://api.example.com ./github-cli list action

# 6. No arguments -> interactive REPL
./github-cli
github> list action
github> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/github-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export GITHUB_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/github-cli list action
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./github-cli list action
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Load a single record

```sh
./github-cli load 1 action          # scalar shorthand for {id:1}
./github-cli load '{id:1}' action     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Update a record

```sh
./github-cli update '{id:1,name:"new"}' action
```

The match map carries both the selector and the new field values; the updated
record is printed back.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export GITHUB_APIKEY=sk_live_xxx            # API key
export GITHUB_BASE=https://api.example.com  # optional: override the API base URL
./github-cli list action
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `github>`). Each line is
evaluated as its own boru expression:

```text
$ ./github-cli
github> list action
github> /help
github> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 267 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `action`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `GITHUB_APIKEY` | API key sent with every request. |
| `GITHUB_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/github-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 267 entities this SDK exposes (any is valid as `<entity>`):

action actions_artifact_and_log_retention actions_cache_list actions_cache_usage_by_repository actions_cache_usage_org_enterprise actions_fork_pr_contributor_approval actions_fork_pr_workflows_private_repo actions_get_default_workflow_permission actions_hosted_runner actions_hosted_runner_limit actions_organization_permission actions_public_key actions_repository_permission actions_secret actions_variable actions_workflow_access_to_repository activity add api_insights_route_stat api_insights_subject_stat api_insights_summary_stat api_insights_time_stat api_insights_user_stat api_overview app artifact assignee authentication_token authorization autolink base_gist billing_usage_report billing_usage_report_user blob block branch branch_protection branch_restriction_policy branch_short branch_with_protection campaign check check_annotation check_automated_security_fix check_run check_suite check_suite_preference classroom classroom_accepted_assignment classroom_assignment classroom_assignment_grade clone code_frequency code_frequency_stat code_of_conduct code_scanning code_scanning_alert code_scanning_alert_instance code_scanning_alert_item code_scanning_analysi code_scanning_analysis_deletion code_scanning_autofix code_scanning_autofix_commit code_scanning_codeql_database code_scanning_default_setup code_scanning_organization_alert_item code_scanning_sarifs_status code_scanning_variant_analysi code_scanning_variant_analysis_repo_task code_security code_security_configuration code_security_configuration_repository code_security_default_configuration codeowners_error codespace collaborator combined_billing_usage combined_commit_status commit commit_activity commit_comment commit_comparison community_profile content_file content_traffic contributor copilot copilot_organization_detail copilot_usage_metrics_day credential custom_property custom_property_value dependabot dependabot_alert dependabot_alert_with_repository dependabot_public_key dependabot_repository_access_detail dependabot_secret dependency_graph dependency_graph_diff dependency_graph_spdx_sbom deploy_key deployment deployment_branch_policy deployment_protection_rule deployment_status diff_entry email emoji empty_object enterprise_team enterprise_team_membership environment environment_approval event feed file_commit follower following full_repository gist gist_comment gist_commit gist_simple git git_commit git_ref git_tag git_tree gitignore gitignore_template global_advisory gpg_key hook hook_delivery hook_delivery_item hosted_compute hovercard import installation installation_token integration integration_installation interaction interaction_limit issue issue_type job key label language license markdown marketplace_listing_plan marketplace_purchase member membership merged_upstream meta metaroot migration milestone minimal_repository network_configuration network_setting oidc_custom_sub oidc_custom_sub_repo org org_hook org_membership org_private_registry_configuration org_private_registry_configuration_with_selected_repository org_repo_custom_property_value organization organization_actions_secret organization_actions_variable organization_dependabot_secret organization_invitation organization_programmatic_access_grant organization_role organization_secret_scanning_alert outside_collaborator package page page_build page_build_status page_deployment pages_deployment_status pages_health_check participation pending_deployment porter_author porter_large_file private_registry private_user project project_collaborator_permission project_column projects_classic projects_v2 projects_v2_field projects_v2_item_simple projects_v2_item_with_content protected_branch protected_branch_admin_enforced protected_branch_pull_request_review public_member pull pull_request_review pull_request_review_comment pull_request_simple rate_limit reaction referrer release release_asset release_notes_content remove repo repository repository_advisory repository_collaborator_permission repository_invitation repository_rule_detailed repository_ruleset repository_subscription review_comment rule_suite ruleset_version ruleset_version_with_state runner runner_application runner_group search secret_scanning secret_scanning_alert secret_scanning_location secret_scanning_pattern_configuration secret_scanning_push_protection_bypass secret_scanning_scan_history security_advisory selected_action self_hosted_runner short_blob short_branch simple_classroom simple_classroom_assignment social_account ssh_signing_key status status_check_policy subscriber tag tag_protection team team_simple thread thread_subscription topic user user_marketplace_purchase view webhook_config workflow workflow_run workflow_run_usage workflow_usage

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./github-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
