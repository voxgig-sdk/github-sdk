# Github Lua SDK



The Lua SDK for the Github API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Repo()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/github-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("github_sdk")

local client = sdk.new()
```

### 2. List repo records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local repos, err = client:Repo():list()
if err then error(err) end

for _, item in ipairs(repos) do
  print(item["id"], item["archive_url"])
end
```

### 3. Load a repo

Repo is nested under owner, so provide the `owner`.

```lua
local repo, err = client:Repo():load({ owner = "example_owner", repo = "example_repo" })
if err then error(err) end
print(repo)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Repo():create({ archive_url = "example_archive_url", archived = true, assignees_url = "example_assignees_url", blobs_url = "example_blobs_url", branches_url = "example_branches_url", clone_url = "example_clone_url", code_of_conduct = {}, collaborators_url = "example_collaborators_url", comments_url = "example_comments_url", commits_url = "example_commits_url", compare_url = "example_compare_url", contents_url = "example_contents_url", contributors_url = "example_contributors_url", created_at = "example_created_at", default_branch = "example_default_branch", deployments_url = "example_deployments_url", description = "example_description", disabled = true, downloads_url = "example_downloads_url", events_url = "example_events_url", fork = true, forks = 1, forks_count = 1, forks_url = "example_forks_url", full_name = "example_full_name", git_commits_url = "example_git_commits_url", git_refs_url = "example_git_refs_url", git_tags_url = "example_git_tags_url", git_url = "example_git_url", has_discussions = true, has_issues = true, has_pages = true, has_projects = true, has_wiki = true, homepage = "example_homepage", hooks_url = "example_hooks_url", html_url = "example_html_url", id = 1, issue_comment_url = "example_issue_comment_url", issue_events_url = "example_issue_events_url", issues_url = "example_issues_url", keys_url = "example_keys_url", labels_url = "example_labels_url", language = "example_language", languages_url = "example_languages_url", license = {}, merges_url = "example_merges_url", milestones_url = "example_milestones_url", mirror_url = "example_mirror_url", name = "example_name", network_count = 1, node_id = "example_node_id", notifications_url = "example_notifications_url", open_issues = 1, open_issues_count = 1, organization = {}, owner = {}, parent = {}, permissions = {}, private = true, pulls_url = "example_pulls_url", pushed_at = "example_pushed_at", releases_url = "example_releases_url", size = 1, source = {}, ssh_url = "example_ssh_url", stargazers_count = 1, stargazers_url = "example_stargazers_url", statuses_url = "example_statuses_url", subscribers_count = 1, subscribers_url = "example_subscribers_url", subscription_url = "example_subscription_url", svn_url = "example_svn_url", tags_url = "example_tags_url", teams_url = "example_teams_url", template_repository = {}, trees_url = "example_trees_url", updated_at = "example_updated_at", url = "example_url", watchers = 1, watchers_count = 1 })
if err then error(err) end

-- Update
client:Repo():update({ owner = "example_owner", repo = "example_repo" })

-- Remove
client:Repo():remove({ owner = "example_owner", repo = "example_repo" })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local repos, err = client:Repo():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Repo():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
GITHUB_TEST_LIVE=TRUE
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### GithubSDK

```lua
local sdk = require("github_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### GithubSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Repo` | `(data) -> RepoEntity` | Create a Repo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local repo, err = client:Repo():load()
    if err then error(err) end
    -- repo is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Repo

| Field | Description |
| --- | --- |
| `allow_auto_merge` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | Either `true` to allow private forks, or `false` to prevent private forks. |
| `allow_merge_commit` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `anonymous_access_enabled` | Whether anonymous git access is allowed. |
| `archive_url` |  |
| `archived` | Whether to archive this repository. |
| `assignees_url` |  |
| `auto_init` | Whether the repository is initialized with a minimal README. |
| `blobs_url` |  |
| `branches_url` |  |
| `clone_url` |  |
| `code_of_conduct` | Code of Conduct Simple |
| `code_search_index_status` | The status of the code search index for this repository |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` |  |
| `custom_properties` | The custom properties that were defined for the repository. |
| `default_branch` | Updates the default branch for this repository. |
| `delete_branch_on_merge` | Whether to delete head branches when pull requests are merged |
| `deployments_url` |  |
| `description` | A short description of the repository. |
| `disabled` | Returns whether or not this repository disabled. |
| `downloads_url` |  |
| `events_url` |  |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `gitignore_template` | The desired language or platform to apply to the .gitignore. |
| `has_discussions` | Whether discussions are enabled. |
| `has_downloads` | Whether downloads are enabled. |
| `has_issues` | Whether issues are enabled. |
| `has_pages` |  |
| `has_projects` | Whether projects are enabled. |
| `has_pull_requests` | Either `true` to allow pull requests for this repository or `false` to prevent pull requests. |
| `has_wiki` | Whether the wiki is enabled. |
| `homepage` | A URL with more information about the repository. |
| `hooks_url` |  |
| `html_url` |  |
| `id` | Unique identifier of the repository |
| `is_template` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `license` | License Simple |
| `license_template` | The license keyword of the open source license for this repository. |
| `master_branch` |  |
| `merge_commit_message` | The default value for a merge commit message. |
| `merge_commit_title` | The default value for a merge commit title. |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` | The name of the repository. |
| `network_count` |  |
| `node_id` |  |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `organization` | A GitHub user. |
| `owner` | A GitHub user. |
| `parent` | A repository on GitHub. |
| `permissions` |  |
| `private` | Whether the repository is private. |
| `pull_request_creation_policy` | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` |  |
| `pushed_at` |  |
| `releases_url` |  |
| `security_and_analysis` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | The size of the repository, in kilobytes. |
| `source` | A repository on GitHub. |
| `squash_merge_commit_message` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `starred_at` |  |
| `statuses_url` |  |
| `subscribers_count` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `team_id` | The id of the team that will be granted access to this repository. |
| `teams_url` |  |
| `temp_clone_token` |  |
| `template_repository` | A repository on GitHub. |
| `topics` |  |
| `trees_url` |  |
| `updated_at` |  |
| `url` |  |
| `use_squash_pr_title_as_default` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | The repository visibility: public, private, or internal. |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

Operations: Create, List, Load, Remove, Update.

API path: `/user/repos`



## Entities


### Repo

Create an instance: `local repo = client:Repo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_auto_merge` | `boolean` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | Either `true` to allow private forks, or `false` to prevent private forks. |
| `allow_merge_commit` | `boolean` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `boolean` | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `anonymous_access_enabled` | `boolean` | Whether anonymous git access is allowed. |
| `archive_url` | `string` |  |
| `archived` | `boolean` | Whether to archive this repository. |
| `assignees_url` | `string` |  |
| `auto_init` | `boolean` | Whether the repository is initialized with a minimal README. |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `table` | Code of Conduct Simple |
| `code_search_index_status` | `table` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `table` | The custom properties that were defined for the repository. |
| `default_branch` | `string` | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `boolean` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` |  |
| `description` | `string` | A short description of the repository. |
| `disabled` | `boolean` | Returns whether or not this repository disabled. |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `gitignore_template` | `string` | The desired language or platform to apply to the .gitignore. |
| `has_discussions` | `boolean` | Whether discussions are enabled. |
| `has_downloads` | `boolean` | Whether downloads are enabled. |
| `has_issues` | `boolean` | Whether issues are enabled. |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` | Whether projects are enabled. |
| `has_pull_requests` | `boolean` | Either `true` to allow pull requests for this repository or `false` to prevent pull requests. |
| `has_wiki` | `boolean` | Whether the wiki is enabled. |
| `homepage` | `string` | A URL with more information about the repository. |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` | Unique identifier of the repository |
| `is_template` | `boolean` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `table` | License Simple |
| `license_template` | `string` | The license keyword of the open source license for this repository. |
| `master_branch` | `string` |  |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the repository. |
| `network_count` | `number` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `organization` | `table` | A GitHub user. |
| `owner` | `table` | A GitHub user. |
| `parent` | `table` | A repository on GitHub. |
| `permissions` | `table` |  |
| `private` | `boolean` | Whether the repository is private. |
| `pull_request_creation_policy` | `string` | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `security_and_analysis` | `table` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `number` | The size of the repository, in kilobytes. |
| `source` | `table` | A repository on GitHub. |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_count` | `number` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `team_id` | `number` | The id of the team that will be granted access to this repository. |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `template_repository` | `table` | A repository on GitHub. |
| `topics` | `table` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `boolean` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

#### Example: Load

```lua
local repo, err = client:Repo():load({ owner = "owner", repo = "repo" })
```

#### Example: List

```lua
local repos, err = client:Repo():list()
```

#### Example: Create

```lua
local repo, err = client:Repo():create({
  archive_url = "example_archive_url", -- string
  archived = true, -- boolean
  assignees_url = "example_assignees_url", -- string
  blobs_url = "example_blobs_url", -- string
  branches_url = "example_branches_url", -- string
  clone_url = "example_clone_url", -- string
  code_of_conduct = {}, -- table
  collaborators_url = "example_collaborators_url", -- string
  comments_url = "example_comments_url", -- string
  commits_url = "example_commits_url", -- string
  compare_url = "example_compare_url", -- string
  contents_url = "example_contents_url", -- string
  contributors_url = "example_contributors_url", -- string
  created_at = "example_created_at", -- string
  default_branch = "example_default_branch", -- string
  deployments_url = "example_deployments_url", -- string
  description = "example_description", -- string
  disabled = true, -- boolean
  downloads_url = "example_downloads_url", -- string
  events_url = "example_events_url", -- string
  fork = true, -- boolean
  forks = 1, -- number
  forks_count = 1, -- number
  forks_url = "example_forks_url", -- string
  full_name = "example_full_name", -- string
  git_commits_url = "example_git_commits_url", -- string
  git_refs_url = "example_git_refs_url", -- string
  git_tags_url = "example_git_tags_url", -- string
  git_url = "example_git_url", -- string
  has_discussions = true, -- boolean
  has_issues = true, -- boolean
  has_pages = true, -- boolean
  has_projects = true, -- boolean
  has_wiki = true, -- boolean
  homepage = "example_homepage", -- string
  hooks_url = "example_hooks_url", -- string
  html_url = "example_html_url", -- string
  id = 1, -- number
  issue_comment_url = "example_issue_comment_url", -- string
  issue_events_url = "example_issue_events_url", -- string
  issues_url = "example_issues_url", -- string
  keys_url = "example_keys_url", -- string
  labels_url = "example_labels_url", -- string
  language = "example_language", -- string
  languages_url = "example_languages_url", -- string
  license = {}, -- table
  merges_url = "example_merges_url", -- string
  milestones_url = "example_milestones_url", -- string
  mirror_url = "example_mirror_url", -- string
  name = "example_name", -- string
  network_count = 1, -- number
  node_id = "example_node_id", -- string
  notifications_url = "example_notifications_url", -- string
  open_issues = 1, -- number
  open_issues_count = 1, -- number
  organization = {}, -- table
  owner = {}, -- table
  parent = {}, -- table
  permissions = {}, -- table
  private = true, -- boolean
  pulls_url = "example_pulls_url", -- string
  pushed_at = "example_pushed_at", -- string
  releases_url = "example_releases_url", -- string
  size = 1, -- number
  source = {}, -- table
  ssh_url = "example_ssh_url", -- string
  stargazers_count = 1, -- number
  stargazers_url = "example_stargazers_url", -- string
  statuses_url = "example_statuses_url", -- string
  subscribers_count = 1, -- number
  subscribers_url = "example_subscribers_url", -- string
  subscription_url = "example_subscription_url", -- string
  svn_url = "example_svn_url", -- string
  tags_url = "example_tags_url", -- string
  teams_url = "example_teams_url", -- string
  template_repository = {}, -- table
  trees_url = "example_trees_url", -- string
  updated_at = "example_updated_at", -- string
  url = "example_url", -- string
  watchers = 1, -- number
  watchers_count = 1, -- number
})
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── github_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`github_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local repo = client:Repo()
repo:list()

-- repo:data_get() now returns the repo data from the last list
-- repo:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
