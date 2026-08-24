# Github Golang SDK Reference

Complete API reference for the Github Golang SDK.


## GithubSDK

### Constructor

```go
func NewGithubSDK(options map[string]any) *GithubSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *GithubSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *GithubSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Repo(data map[string]any) GithubEntity`

Create a new `Repo` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## RepoEntity

```go
repo := client.Repo(nil)
fmt.Println(repo.GetName()) // "repo"
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
| `code_of_conduct` | `map[string]any` | Yes | Code of Conduct Simple |
| `code_search_index_status` | `map[string]any` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `map[string]any` | No | The custom properties that were defined for the repository. |
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
| `license` | `map[string]any` | Yes | License Simple |
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
| `organization` | `map[string]any` | Yes | A GitHub user. |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `parent` | `map[string]any` | Yes | A repository on GitHub. |
| `permissions` | `map[string]any` | Yes |  |
| `private` | `bool` | Yes | Whether the repository is private. |
| `pull_request_creation_policy` | `string` | No | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `security_and_analysis` | `map[string]any` | No | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `source` | `map[string]any` | Yes | A repository on GitHub. |
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
| `template_repository` | `map[string]any` | Yes | A repository on GitHub. |
| `topics` | `[]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Repo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Repo(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Repo(nil).Create(map[string]any{
    "archive_url": "example_archive_url",
    "archived": true,
    "assignees_url": "example_assignees_url",
    "blobs_url": "example_blobs_url",
    "branches_url": "example_branches_url",
    "clone_url": "example_clone_url",
    "code_of_conduct": map[string]any{},
    "collaborators_url": "example_collaborators_url",
    "comments_url": "example_comments_url",
    "commits_url": "example_commits_url",
    "compare_url": "example_compare_url",
    "contents_url": "example_contents_url",
    "contributors_url": "example_contributors_url",
    "created_at": "example_created_at",
    "default_branch": "example_default_branch",
    "deployments_url": "example_deployments_url",
    "description": "example_description",
    "disabled": true,
    "downloads_url": "example_downloads_url",
    "events_url": "example_events_url",
    "fork": true,
    "forks": 1,
    "forks_count": 1,
    "forks_url": "example_forks_url",
    "full_name": "example_full_name",
    "git_commits_url": "example_git_commits_url",
    "git_refs_url": "example_git_refs_url",
    "git_tags_url": "example_git_tags_url",
    "git_url": "example_git_url",
    "has_discussions": true,
    "has_issues": true,
    "has_pages": true,
    "has_projects": true,
    "has_wiki": true,
    "homepage": "example_homepage",
    "hooks_url": "example_hooks_url",
    "html_url": "example_html_url",
    "id": 1,
    "issue_comment_url": "example_issue_comment_url",
    "issue_events_url": "example_issue_events_url",
    "issues_url": "example_issues_url",
    "keys_url": "example_keys_url",
    "labels_url": "example_labels_url",
    "language": "example_language",
    "languages_url": "example_languages_url",
    "license": map[string]any{},
    "merges_url": "example_merges_url",
    "milestones_url": "example_milestones_url",
    "mirror_url": "example_mirror_url",
    "name": "example_name",
    "network_count": 1,
    "node_id": "example_node_id",
    "notifications_url": "example_notifications_url",
    "open_issues": 1,
    "open_issues_count": 1,
    "organization": map[string]any{},
    "owner": map[string]any{},
    "parent": map[string]any{},
    "permissions": map[string]any{},
    "private": true,
    "pulls_url": "example_pulls_url",
    "pushed_at": "example_pushed_at",
    "releases_url": "example_releases_url",
    "size": 1,
    "source": map[string]any{},
    "ssh_url": "example_ssh_url",
    "stargazers_count": 1,
    "stargazers_url": "example_stargazers_url",
    "statuses_url": "example_statuses_url",
    "subscribers_count": 1,
    "subscribers_url": "example_subscribers_url",
    "subscription_url": "example_subscription_url",
    "svn_url": "example_svn_url",
    "tags_url": "example_tags_url",
    "teams_url": "example_teams_url",
    "template_repository": map[string]any{},
    "trees_url": "example_trees_url",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "watchers": 1,
    "watchers_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Repo(nil).Update(map[string]any{
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Repo(nil).Remove(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewGithubSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

