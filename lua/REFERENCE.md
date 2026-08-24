# Github Lua SDK Reference

Complete API reference for the Github Lua SDK.


## GithubSDK

### Constructor

```lua
local sdk = require("github_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Repo(data)`

Create a new `Repo` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## RepoEntity

```lua
local repo = client:Repo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `boolean` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | No | Either `true` to allow private forks, or `false` to prevent private forks. |
| `allow_merge_commit` | `boolean` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `boolean` | No | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `anonymous_access_enabled` | `boolean` | No | Whether anonymous git access is allowed. |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes | Whether to archive this repository. |
| `assignees_url` | `string` | Yes |  |
| `auto_init` | `boolean` | No | Whether the repository is initialized with a minimal README. |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `code_of_conduct` | `table` | Yes | Code of Conduct Simple |
| `code_search_index_status` | `table` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `table` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | Yes | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `boolean` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes | A short description of the repository. |
| `disabled` | `boolean` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | Yes |  |
| `forks_count` | `number` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `gitignore_template` | `string` | No | The desired language or platform to apply to the .gitignore. |
| `has_discussions` | `boolean` | Yes | Whether discussions are enabled. |
| `has_downloads` | `boolean` | No | Whether downloads are enabled. |
| `has_issues` | `boolean` | Yes | Whether issues are enabled. |
| `has_pages` | `boolean` | Yes |  |
| `has_projects` | `boolean` | Yes | Whether projects are enabled. |
| `has_pull_requests` | `boolean` | No | Either `true` to allow pull requests for this repository or `false` to prevent pull requests. |
| `has_wiki` | `boolean` | Yes | Whether the wiki is enabled. |
| `homepage` | `string` | Yes | A URL with more information about the repository. |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the repository |
| `is_template` | `boolean` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `license` | `table` | Yes | License Simple |
| `license_template` | `string` | No | The license keyword of the open source license for this repository. |
| `master_branch` | `string` | No |  |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the repository. |
| `network_count` | `number` | Yes |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | Yes |  |
| `open_issues_count` | `number` | Yes |  |
| `organization` | `table` | Yes | A GitHub user. |
| `owner` | `table` | Yes | A GitHub user. |
| `parent` | `table` | Yes | A repository on GitHub. |
| `permissions` | `table` | Yes |  |
| `private` | `boolean` | Yes | Whether the repository is private. |
| `pull_request_creation_policy` | `string` | No | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `security_and_analysis` | `table` | No | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `number` | Yes | The size of the repository, in kilobytes. |
| `source` | `table` | Yes | A repository on GitHub. |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `number` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `number` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `team_id` | `number` | No | The id of the team that will be granted access to this repository. |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `template_repository` | `table` | Yes | A repository on GitHub. |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `use_squash_pr_title_as_default` | `boolean` | No | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `number` | Yes |  |
| `watchers_count` | `number` | Yes |  |
| `web_commit_signoff_required` | `boolean` | No | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `allow_auto_merge` | - | - | - | - | - |
| `allow_forking` | - | - | - | - | - |
| `allow_merge_commit` | - | - | - | - | - |
| `allow_rebase_merge` | - | - | - | - | - |
| `allow_squash_merge` | - | - | - | - | - |
| `allow_update_branch` | - | - | - | - | - |
| `anonymous_access_enabled` | - | - | - | - | - |
| `archive_url` | - | - | - | - | - |
| `archived` | - | - | - | Yes | - |
| `assignees_url` | - | - | - | - | - |
| `auto_init` | - | - | - | - | - |
| `blobs_url` | - | - | - | - | - |
| `branches_url` | - | - | - | - | - |
| `clone_url` | - | - | - | - | - |
| `code_of_conduct` | - | - | - | - | - |
| `code_search_index_status` | - | - | - | - | - |
| `collaborators_url` | - | - | - | - | - |
| `comments_url` | - | - | - | - | - |
| `commits_url` | - | - | - | - | - |
| `compare_url` | - | - | - | - | - |
| `contents_url` | - | - | - | - | - |
| `contributors_url` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `custom_properties` | - | - | - | - | - |
| `default_branch` | - | - | - | Yes | - |
| `delete_branch_on_merge` | - | - | - | - | - |
| `deployments_url` | - | - | - | - | - |
| `description` | - | - | Yes | Yes | - |
| `disabled` | - | - | - | - | - |
| `downloads_url` | - | - | - | - | - |
| `events_url` | - | - | - | - | - |
| `fork` | - | - | - | - | - |
| `forks` | - | - | - | - | - |
| `forks_count` | - | - | - | - | - |
| `forks_url` | - | - | - | - | - |
| `full_name` | - | - | - | - | - |
| `git_commits_url` | - | - | - | - | - |
| `git_refs_url` | - | - | - | - | - |
| `git_tags_url` | - | - | - | - | - |
| `git_url` | - | - | - | - | - |
| `gitignore_template` | - | - | - | - | - |
| `has_discussions` | - | Yes | Yes | - | - |
| `has_downloads` | - | Yes | - | - | - |
| `has_issues` | - | - | Yes | Yes | - |
| `has_pages` | - | - | - | - | - |
| `has_projects` | - | - | Yes | Yes | - |
| `has_pull_requests` | - | - | - | - | - |
| `has_wiki` | - | - | Yes | Yes | - |
| `homepage` | - | - | Yes | Yes | - |
| `hooks_url` | - | - | - | - | - |
| `html_url` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `is_template` | - | - | - | - | - |
| `issue_comment_url` | - | - | - | - | - |
| `issue_events_url` | - | - | - | - | - |
| `issues_url` | - | - | - | - | - |
| `keys_url` | - | - | - | - | - |
| `labels_url` | - | - | - | - | - |
| `language` | - | - | - | - | - |
| `languages_url` | - | - | - | - | - |
| `license` | - | - | - | - | - |
| `license_template` | - | - | - | - | - |
| `master_branch` | - | - | - | - | - |
| `merge_commit_message` | - | - | - | - | - |
| `merge_commit_title` | - | - | - | - | - |
| `merges_url` | - | - | - | - | - |
| `milestones_url` | - | - | - | - | - |
| `mirror_url` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `network_count` | - | - | - | - | - |
| `node_id` | - | - | - | - | - |
| `notifications_url` | - | - | - | - | - |
| `open_issues` | - | - | - | - | - |
| `open_issues_count` | - | - | - | - | - |
| `organization` | - | - | - | - | - |
| `owner` | - | - | - | - | - |
| `parent` | - | - | - | - | - |
| `permissions` | - | - | - | - | - |
| `private` | - | - | Yes | Yes | - |
| `pull_request_creation_policy` | - | - | - | - | - |
| `pulls_url` | - | - | - | - | - |
| `pushed_at` | - | - | - | - | - |
| `releases_url` | - | - | - | - | - |
| `security_and_analysis` | - | - | - | - | - |
| `size` | - | - | - | - | - |
| `source` | - | - | - | - | - |
| `squash_merge_commit_message` | - | - | - | - | - |
| `squash_merge_commit_title` | - | - | - | - | - |
| `ssh_url` | - | - | - | - | - |
| `stargazers_count` | - | - | - | - | - |
| `stargazers_url` | - | - | - | - | - |
| `starred_at` | - | - | - | - | - |
| `statuses_url` | - | - | - | - | - |
| `subscribers_count` | - | - | - | - | - |
| `subscribers_url` | - | - | - | - | - |
| `subscription_url` | - | - | - | - | - |
| `svn_url` | - | - | - | - | - |
| `tags_url` | - | - | - | - | - |
| `team_id` | - | - | - | - | - |
| `teams_url` | - | - | - | - | - |
| `temp_clone_token` | - | - | - | - | - |
| `template_repository` | - | - | - | - | - |
| `topics` | - | - | - | - | - |
| `trees_url` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `url` | - | - | - | - | - |
| `use_squash_pr_title_as_default` | - | - | - | - | - |
| `visibility` | - | - | - | - | - |
| `watchers` | - | - | - | - | - |
| `watchers_count` | - | - | - | - | - |
| `web_commit_signoff_required` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Repo():create({
  archive_url = --[[ string ]],
  archived = --[[ boolean ]],
  assignees_url = --[[ string ]],
  blobs_url = --[[ string ]],
  branches_url = --[[ string ]],
  clone_url = --[[ string ]],
  code_of_conduct = --[[ table ]],
  collaborators_url = --[[ string ]],
  comments_url = --[[ string ]],
  commits_url = --[[ string ]],
  compare_url = --[[ string ]],
  contents_url = --[[ string ]],
  contributors_url = --[[ string ]],
  created_at = --[[ string ]],
  default_branch = --[[ string ]],
  deployments_url = --[[ string ]],
  description = --[[ string ]],
  disabled = --[[ boolean ]],
  downloads_url = --[[ string ]],
  events_url = --[[ string ]],
  fork = --[[ boolean ]],
  forks = --[[ number ]],
  forks_count = --[[ number ]],
  forks_url = --[[ string ]],
  full_name = --[[ string ]],
  git_commits_url = --[[ string ]],
  git_refs_url = --[[ string ]],
  git_tags_url = --[[ string ]],
  git_url = --[[ string ]],
  has_discussions = --[[ boolean ]],
  has_issues = --[[ boolean ]],
  has_pages = --[[ boolean ]],
  has_projects = --[[ boolean ]],
  has_wiki = --[[ boolean ]],
  homepage = --[[ string ]],
  hooks_url = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  issue_comment_url = --[[ string ]],
  issue_events_url = --[[ string ]],
  issues_url = --[[ string ]],
  keys_url = --[[ string ]],
  labels_url = --[[ string ]],
  language = --[[ string ]],
  languages_url = --[[ string ]],
  license = --[[ table ]],
  merges_url = --[[ string ]],
  milestones_url = --[[ string ]],
  mirror_url = --[[ string ]],
  name = --[[ string ]],
  network_count = --[[ number ]],
  node_id = --[[ string ]],
  notifications_url = --[[ string ]],
  open_issues = --[[ number ]],
  open_issues_count = --[[ number ]],
  organization = --[[ table ]],
  owner = --[[ table ]],
  parent = --[[ table ]],
  permissions = --[[ table ]],
  private = --[[ boolean ]],
  pulls_url = --[[ string ]],
  pushed_at = --[[ string ]],
  releases_url = --[[ string ]],
  size = --[[ number ]],
  source = --[[ table ]],
  ssh_url = --[[ string ]],
  stargazers_count = --[[ number ]],
  stargazers_url = --[[ string ]],
  statuses_url = --[[ string ]],
  subscribers_count = --[[ number ]],
  subscribers_url = --[[ string ]],
  subscription_url = --[[ string ]],
  svn_url = --[[ string ]],
  tags_url = --[[ string ]],
  teams_url = --[[ string ]],
  template_repository = --[[ table ]],
  trees_url = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  watchers = --[[ number ]],
  watchers_count = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Repo():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Repo():load({ owner = "owner", repo = "repo" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Repo():remove({ owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Repo():update({
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

