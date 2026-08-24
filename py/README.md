# Github Python SDK



The Python SDK for the Github API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Repo()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/github-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from github_sdk import GithubSDK

client = GithubSDK()
```

### 2. List repo records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    repos = client.Repo().list()
    for repo in repos:
        print(repo)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a repo

Repo is nested under owner, so provide the `owner`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    repo = client.Repo().load({"owner": "example_owner", "repo": "example_repo"})
    print(repo)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Repo().create({"archive_url": "example_archive_url", "archived": True, "assignees_url": "example_assignees_url", "blobs_url": "example_blobs_url", "branches_url": "example_branches_url", "clone_url": "example_clone_url", "code_of_conduct": {}, "collaborators_url": "example_collaborators_url", "comments_url": "example_comments_url", "commits_url": "example_commits_url", "compare_url": "example_compare_url", "contents_url": "example_contents_url", "contributors_url": "example_contributors_url", "created_at": "example_created_at", "default_branch": "example_default_branch", "deployments_url": "example_deployments_url", "description": "example_description", "disabled": True, "downloads_url": "example_downloads_url", "events_url": "example_events_url", "fork": True, "forks": 1, "forks_count": 1, "forks_url": "example_forks_url", "full_name": "example_full_name", "git_commits_url": "example_git_commits_url", "git_refs_url": "example_git_refs_url", "git_tags_url": "example_git_tags_url", "git_url": "example_git_url", "has_discussions": True, "has_issues": True, "has_pages": True, "has_projects": True, "has_wiki": True, "homepage": "example_homepage", "hooks_url": "example_hooks_url", "html_url": "example_html_url", "id": 1, "issue_comment_url": "example_issue_comment_url", "issue_events_url": "example_issue_events_url", "issues_url": "example_issues_url", "keys_url": "example_keys_url", "labels_url": "example_labels_url", "language": "example_language", "languages_url": "example_languages_url", "license": {}, "merges_url": "example_merges_url", "milestones_url": "example_milestones_url", "mirror_url": "example_mirror_url", "name": "example_name", "network_count": 1, "node_id": "example_node_id", "notifications_url": "example_notifications_url", "open_issues": 1, "open_issues_count": 1, "organization": {}, "owner": {}, "parent": {}, "permissions": {}, "private": True, "pulls_url": "example_pulls_url", "pushed_at": "example_pushed_at", "releases_url": "example_releases_url", "size": 1, "source": {}, "ssh_url": "example_ssh_url", "stargazers_count": 1, "stargazers_url": "example_stargazers_url", "statuses_url": "example_statuses_url", "subscribers_count": 1, "subscribers_url": "example_subscribers_url", "subscription_url": "example_subscription_url", "svn_url": "example_svn_url", "tags_url": "example_tags_url", "teams_url": "example_teams_url", "template_repository": {}, "trees_url": "example_trees_url", "updated_at": "example_updated_at", "url": "example_url", "watchers": 1, "watchers_count": 1})

# Update — the created record's id is a plain dict key
client.Repo().update({"owner": "example_owner", "repo": "example_repo"})

# Remove
client.Repo().remove({"owner": "example_owner", "repo": "example_repo"})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    repos = client.Repo().list()
    print(repos)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = GithubSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
repo = client.Repo().list()
# repo contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = GithubSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### GithubSDK

```python
from github_sdk import GithubSDK

client = GithubSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = GithubSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### GithubSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Repo` | `(data) -> RepoEntity` | Create a Repo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `repo = client.Repo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_auto_merge` | `bool` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | Either `true` to allow private forks, or `false` to prevent private forks. |
| `allow_merge_commit` | `bool` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `anonymous_access_enabled` | `bool` | Whether anonymous git access is allowed. |
| `archive_url` | `str` |  |
| `archived` | `bool` | Whether to archive this repository. |
| `assignees_url` | `str` |  |
| `auto_init` | `bool` | Whether the repository is initialized with a minimal README. |
| `blobs_url` | `str` |  |
| `branches_url` | `str` |  |
| `clone_url` | `str` |  |
| `code_of_conduct` | `dict` | Code of Conduct Simple |
| `code_search_index_status` | `dict` | The status of the code search index for this repository |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `created_at` | `str` |  |
| `custom_properties` | `dict` | The custom properties that were defined for the repository. |
| `default_branch` | `str` | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `str` |  |
| `description` | `str` | A short description of the repository. |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `downloads_url` | `str` |  |
| `events_url` | `str` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `gitignore_template` | `str` | The desired language or platform to apply to the .gitignore. |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_pull_requests` | `bool` | Either `true` to allow pull requests for this repository or `false` to prevent pull requests. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `homepage` | `str` | A URL with more information about the repository. |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` | Unique identifier of the repository |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `license` | `dict` | License Simple |
| `license_template` | `str` | The license keyword of the open source license for this repository. |
| `master_branch` | `str` |  |
| `merge_commit_message` | `str` | The default value for a merge commit message. |
| `merge_commit_title` | `str` | The default value for a merge commit title. |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` | The name of the repository. |
| `network_count` | `int` |  |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organization` | `dict` | A GitHub user. |
| `owner` | `dict` | A GitHub user. |
| `parent` | `dict` | A repository on GitHub. |
| `permissions` | `dict` |  |
| `private` | `bool` | Whether the repository is private. |
| `pull_request_creation_policy` | `str` | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `releases_url` | `str` |  |
| `security_and_analysis` | `dict` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | The size of the repository, in kilobytes. |
| `source` | `dict` | A repository on GitHub. |
| `squash_merge_commit_message` | `str` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `starred_at` | `str` |  |
| `statuses_url` | `str` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `team_id` | `int` | The id of the team that will be granted access to this repository. |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `template_repository` | `dict` | A repository on GitHub. |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `use_squash_pr_title_as_default` | `bool` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `str` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

#### Example: Load

```python
repo = client.Repo().load({"owner": "owner", "repo": "repo"})
```

#### Example: List

```python
repos = client.Repo().list()
```

#### Example: Create

```python
repo = client.Repo().create({
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── github_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`github_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
repo = client.Repo()
repo.list()

# repo.data_get() now returns the repo data from the last list
# repo.match_get() returns the last match criteria
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
