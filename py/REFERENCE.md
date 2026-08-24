# Github Python SDK Reference

Complete API reference for the Github Python SDK.


## GithubSDK

### Constructor

```python
from github_sdk import GithubSDK

client = GithubSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GithubSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = GithubSDK.test()
```


### Instance Methods

#### `Repo(data=None)`

Create a new `RepoEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## RepoEntity

```python
repo = client.Repo()
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
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | Yes | Whether to archive this repository. |
| `assignees_url` | `str` | Yes |  |
| `auto_init` | `bool` | No | Whether the repository is initialized with a minimal README. |
| `blobs_url` | `str` | Yes |  |
| `branches_url` | `str` | Yes |  |
| `clone_url` | `str` | Yes |  |
| `code_of_conduct` | `dict` | Yes | Code of Conduct Simple |
| `code_search_index_status` | `dict` | No | The status of the code search index for this repository |
| `collaborators_url` | `str` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `custom_properties` | `dict` | No | The custom properties that were defined for the repository. |
| `default_branch` | `str` | Yes | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes | A short description of the repository. |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `str` | Yes |  |
| `events_url` | `str` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | Yes |  |
| `gitignore_template` | `str` | No | The desired language or platform to apply to the .gitignore. |
| `has_discussions` | `bool` | Yes | Whether discussions are enabled. |
| `has_downloads` | `bool` | No | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Whether issues are enabled. |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Whether projects are enabled. |
| `has_pull_requests` | `bool` | No | Either `true` to allow pull requests for this repository or `false` to prevent pull requests. |
| `has_wiki` | `bool` | Yes | Whether the wiki is enabled. |
| `homepage` | `str` | Yes | A URL with more information about the repository. |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the repository |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `languages_url` | `str` | Yes |  |
| `license` | `dict` | Yes | License Simple |
| `license_template` | `str` | No | The license keyword of the open source license for this repository. |
| `master_branch` | `str` | No |  |
| `merge_commit_message` | `str` | No | The default value for a merge commit message. |
| `merge_commit_title` | `str` | No | The default value for a merge commit title. |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | Yes |  |
| `name` | `str` | Yes | The name of the repository. |
| `network_count` | `int` | Yes |  |
| `node_id` | `str` | Yes |  |
| `notifications_url` | `str` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organization` | `dict` | Yes | A GitHub user. |
| `owner` | `dict` | Yes | A GitHub user. |
| `parent` | `dict` | Yes | A repository on GitHub. |
| `permissions` | `dict` | Yes |  |
| `private` | `bool` | Yes | Whether the repository is private. |
| `pull_request_creation_policy` | `str` | No | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | Yes |  |
| `releases_url` | `str` | Yes |  |
| `security_and_analysis` | `dict` | No | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `source` | `dict` | Yes | A repository on GitHub. |
| `squash_merge_commit_message` | `str` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `str` | Yes |  |
| `starred_at` | `str` | No |  |
| `statuses_url` | `str` | Yes |  |
| `subscribers_count` | `int` | Yes |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `svn_url` | `str` | Yes |  |
| `tags_url` | `str` | Yes |  |
| `team_id` | `int` | No | The id of the team that will be granted access to this repository. |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `template_repository` | `dict` | Yes | A repository on GitHub. |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `use_squash_pr_title_as_default` | `bool` | No | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `str` | No | The repository visibility: public, private, or internal. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Repo().create({
    "archive_url": "example_archive_url",  # str
    "archived": True,  # bool
    "assignees_url": "example_assignees_url",  # str
    "blobs_url": "example_blobs_url",  # str
    "branches_url": "example_branches_url",  # str
    "clone_url": "example_clone_url",  # str
    "code_of_conduct": {},  # dict
    "collaborators_url": "example_collaborators_url",  # str
    "comments_url": "example_comments_url",  # str
    "commits_url": "example_commits_url",  # str
    "compare_url": "example_compare_url",  # str
    "contents_url": "example_contents_url",  # str
    "contributors_url": "example_contributors_url",  # str
    "created_at": "example_created_at",  # str
    "default_branch": "example_default_branch",  # str
    "deployments_url": "example_deployments_url",  # str
    "description": "example_description",  # str
    "disabled": True,  # bool
    "downloads_url": "example_downloads_url",  # str
    "events_url": "example_events_url",  # str
    "fork": True,  # bool
    "forks": 1,  # int
    "forks_count": 1,  # int
    "forks_url": "example_forks_url",  # str
    "full_name": "example_full_name",  # str
    "git_commits_url": "example_git_commits_url",  # str
    "git_refs_url": "example_git_refs_url",  # str
    "git_tags_url": "example_git_tags_url",  # str
    "git_url": "example_git_url",  # str
    "has_discussions": True,  # bool
    "has_issues": True,  # bool
    "has_pages": True,  # bool
    "has_projects": True,  # bool
    "has_wiki": True,  # bool
    "homepage": "example_homepage",  # str
    "hooks_url": "example_hooks_url",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "issue_comment_url": "example_issue_comment_url",  # str
    "issue_events_url": "example_issue_events_url",  # str
    "issues_url": "example_issues_url",  # str
    "keys_url": "example_keys_url",  # str
    "labels_url": "example_labels_url",  # str
    "language": "example_language",  # str
    "languages_url": "example_languages_url",  # str
    "license": {},  # dict
    "merges_url": "example_merges_url",  # str
    "milestones_url": "example_milestones_url",  # str
    "mirror_url": "example_mirror_url",  # str
    "name": "example_name",  # str
    "network_count": 1,  # int
    "node_id": "example_node_id",  # str
    "notifications_url": "example_notifications_url",  # str
    "open_issues": 1,  # int
    "open_issues_count": 1,  # int
    "organization": {},  # dict
    "owner": {},  # dict
    "parent": {},  # dict
    "permissions": {},  # dict
    "private": True,  # bool
    "pulls_url": "example_pulls_url",  # str
    "pushed_at": "example_pushed_at",  # str
    "releases_url": "example_releases_url",  # str
    "size": 1,  # int
    "source": {},  # dict
    "ssh_url": "example_ssh_url",  # str
    "stargazers_count": 1,  # int
    "stargazers_url": "example_stargazers_url",  # str
    "statuses_url": "example_statuses_url",  # str
    "subscribers_count": 1,  # int
    "subscribers_url": "example_subscribers_url",  # str
    "subscription_url": "example_subscription_url",  # str
    "svn_url": "example_svn_url",  # str
    "tags_url": "example_tags_url",  # str
    "teams_url": "example_teams_url",  # str
    "template_repository": {},  # dict
    "trees_url": "example_trees_url",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "watchers": 1,  # int
    "watchers_count": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Repo().list()
for repo in results:
    print(repo)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Repo().load({"owner": "owner", "repo": "repo"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Repo().remove({"owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Repo().update({
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = GithubSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

