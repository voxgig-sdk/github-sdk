# Github PHP SDK Reference

Complete API reference for the Github PHP SDK.


## GithubSDK

### Constructor

```php
require_once __DIR__ . '/github_sdk.php';

$client = new GithubSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GithubSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = GithubSDK::test();
```


### Instance Methods

#### `Repo($data = null)`

Create a new `RepoEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): GithubUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## RepoEntity

```php
$repo = $client->Repo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `bool` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | No | Either `true` to allow private forks, or `false` to prevent private forks. |
| `allow_merge_commit` | `bool` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | No | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `anonymous_access_enabled` | `bool` | No | Whether anonymous git access is allowed. |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | Yes | Whether to archive this repository. |
| `assignees_url` | `string` | Yes |  |
| `auto_init` | `bool` | No | Whether the repository is initialized with a minimal README. |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `code_of_conduct` | `array` | Yes | Code of Conduct Simple |
| `code_search_index_status` | `array` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `array` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | Yes | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes | A short description of the repository. |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `gitignore_template` | `string` | No | The desired language or platform to apply to the .gitignore. |
| `has_discussions` | `bool` | Yes | Whether discussions are enabled. |
| `has_downloads` | `bool` | No | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Whether issues are enabled. |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Whether projects are enabled. |
| `has_pull_requests` | `bool` | No | Either `true` to allow pull requests for this repository or `false` to prevent pull requests. |
| `has_wiki` | `bool` | Yes | Whether the wiki is enabled. |
| `homepage` | `string` | Yes | A URL with more information about the repository. |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the repository |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `license` | `array` | Yes | License Simple |
| `license_template` | `string` | No | The license keyword of the open source license for this repository. |
| `master_branch` | `string` | No |  |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the repository. |
| `network_count` | `int` | Yes |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organization` | `array` | Yes | A GitHub user. |
| `owner` | `array` | Yes | A GitHub user. |
| `parent` | `array` | Yes | A repository on GitHub. |
| `permissions` | `array` | Yes |  |
| `private` | `bool` | Yes | Whether the repository is private. |
| `pull_request_creation_policy` | `string` | No | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `security_and_analysis` | `array` | No | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `source` | `array` | Yes | A repository on GitHub. |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `int` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `team_id` | `int` | No | The id of the team that will be granted access to this repository. |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `template_repository` | `array` | Yes | A repository on GitHub. |
| `topics` | `array` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `use_squash_pr_title_as_default` | `bool` | No | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `int` | Yes |  |
| `watchers_count` | `int` | Yes |  |
| `web_commit_signoff_required` | `bool` | No | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Repo()->create([
  "archive_url" => null, // string
  "archived" => null, // bool
  "assignees_url" => null, // string
  "blobs_url" => null, // string
  "branches_url" => null, // string
  "clone_url" => null, // string
  "code_of_conduct" => null, // array
  "collaborators_url" => null, // string
  "comments_url" => null, // string
  "commits_url" => null, // string
  "compare_url" => null, // string
  "contents_url" => null, // string
  "contributors_url" => null, // string
  "created_at" => null, // string
  "default_branch" => null, // string
  "deployments_url" => null, // string
  "description" => null, // string
  "disabled" => null, // bool
  "downloads_url" => null, // string
  "events_url" => null, // string
  "fork" => null, // bool
  "forks" => null, // int
  "forks_count" => null, // int
  "forks_url" => null, // string
  "full_name" => null, // string
  "git_commits_url" => null, // string
  "git_refs_url" => null, // string
  "git_tags_url" => null, // string
  "git_url" => null, // string
  "has_discussions" => null, // bool
  "has_issues" => null, // bool
  "has_pages" => null, // bool
  "has_projects" => null, // bool
  "has_wiki" => null, // bool
  "homepage" => null, // string
  "hooks_url" => null, // string
  "html_url" => null, // string
  "id" => null, // int
  "issue_comment_url" => null, // string
  "issue_events_url" => null, // string
  "issues_url" => null, // string
  "keys_url" => null, // string
  "labels_url" => null, // string
  "language" => null, // string
  "languages_url" => null, // string
  "license" => null, // array
  "merges_url" => null, // string
  "milestones_url" => null, // string
  "mirror_url" => null, // string
  "name" => null, // string
  "network_count" => null, // int
  "node_id" => null, // string
  "notifications_url" => null, // string
  "open_issues" => null, // int
  "open_issues_count" => null, // int
  "organization" => null, // array
  "owner" => null, // array
  "parent" => null, // array
  "permissions" => null, // array
  "private" => null, // bool
  "pulls_url" => null, // string
  "pushed_at" => null, // string
  "releases_url" => null, // string
  "size" => null, // int
  "source" => null, // array
  "ssh_url" => null, // string
  "stargazers_count" => null, // int
  "stargazers_url" => null, // string
  "statuses_url" => null, // string
  "subscribers_count" => null, // int
  "subscribers_url" => null, // string
  "subscription_url" => null, // string
  "svn_url" => null, // string
  "tags_url" => null, // string
  "teams_url" => null, // string
  "template_repository" => null, // array
  "trees_url" => null, // string
  "updated_at" => null, // string
  "url" => null, // string
  "watchers" => null, // int
  "watchers_count" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Repo()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Repo()->load(["owner" => "owner", "repo" => "repo"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Repo()->remove(["owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Repo()->update([
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepoEntity`

Create a new `RepoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new GithubSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

