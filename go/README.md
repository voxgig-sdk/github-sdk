# Github Golang SDK



The Golang SDK for the Github API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Repo(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/github-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/github-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/github-sdk/go=../github-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/github-sdk/go"
)

func main() {
    client := sdk.New()

    // List repo records — the value is the array of records itself.
    repos, err := client.Repo(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range repos.([]any) {
        fmt.Println(item)
    }

    // Load a single repo — the value is the loaded record.
    repo, err := client.Repo(nil).Load(map[string]any{"owner": "example_owner", "repo": "example_repo"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(repo)

    // Create a repo.
    created, err := client.Repo(nil).Create(map[string]any{"archive_url": "example_archive_url", "archived": true, "assignees_url": "example_assignees_url", "blobs_url": "example_blobs_url", "branches_url": "example_branches_url", "clone_url": "example_clone_url", "code_of_conduct": map[string]any{}, "collaborators_url": "example_collaborators_url", "comments_url": "example_comments_url", "commits_url": "example_commits_url", "compare_url": "example_compare_url", "contents_url": "example_contents_url", "contributors_url": "example_contributors_url", "created_at": "example_created_at", "default_branch": "example_default_branch", "deployments_url": "example_deployments_url", "description": "example_description", "disabled": true, "downloads_url": "example_downloads_url", "events_url": "example_events_url", "fork": true, "forks": 1, "forks_count": 1, "forks_url": "example_forks_url", "full_name": "example_full_name", "git_commits_url": "example_git_commits_url", "git_refs_url": "example_git_refs_url", "git_tags_url": "example_git_tags_url", "git_url": "example_git_url", "has_discussions": true, "has_issues": true, "has_pages": true, "has_projects": true, "has_wiki": true, "homepage": "example_homepage", "hooks_url": "example_hooks_url", "html_url": "example_html_url", "id": 1, "issue_comment_url": "example_issue_comment_url", "issue_events_url": "example_issue_events_url", "issues_url": "example_issues_url", "keys_url": "example_keys_url", "labels_url": "example_labels_url", "language": "example_language", "languages_url": "example_languages_url", "license": map[string]any{}, "merges_url": "example_merges_url", "milestones_url": "example_milestones_url", "mirror_url": "example_mirror_url", "name": "example_name", "network_count": 1, "node_id": "example_node_id", "notifications_url": "example_notifications_url", "open_issues": 1, "open_issues_count": 1, "organization": map[string]any{}, "owner": map[string]any{}, "parent": map[string]any{}, "permissions": map[string]any{}, "private": true, "pulls_url": "example_pulls_url", "pushed_at": "example_pushed_at", "releases_url": "example_releases_url", "size": 1, "source": map[string]any{}, "ssh_url": "example_ssh_url", "stargazers_count": 1, "stargazers_url": "example_stargazers_url", "statuses_url": "example_statuses_url", "subscribers_count": 1, "subscribers_url": "example_subscribers_url", "subscription_url": "example_subscription_url", "svn_url": "example_svn_url", "tags_url": "example_tags_url", "teams_url": "example_teams_url", "template_repository": map[string]any{}, "trees_url": "example_trees_url", "updated_at": "example_updated_at", "url": "example_url", "watchers": 1, "watchers_count": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a repo.
    updated, err := client.Repo(nil).Update(map[string]any{"owner": "example_owner", "repo": "example_repo"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)

    // Remove a repo.
    removed, err := client.Repo(nil).Remove(map[string]any{"owner": "example_owner", "repo": "example_repo"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
repos, err := client.Repo(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = repos
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

repo, err := client.Repo(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(repo) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewGithubSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewGithubSDK

```go
func NewGithubSDK(options map[string]any) *GithubSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *GithubSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### GithubSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Repo` | `(data map[string]any) GithubEntity` | Create a Repo entity instance. |

### Entity interface (GithubEntity)

All entities implement the `GithubEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    repo, err := client.Repo(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // repo is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Repo

| Field | Description |
| --- | --- |
| `"allow_auto_merge"` | Whether to allow Auto-merge to be used on pull requests. |
| `"allow_forking"` | Either `true` to allow private forks, or `false` to prevent private forks. |
| `"allow_merge_commit"` | Whether to allow merge commits for pull requests. |
| `"allow_rebase_merge"` | Whether to allow rebase merges for pull requests. |
| `"allow_squash_merge"` | Whether to allow squash merges for pull requests. |
| `"allow_update_branch"` | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `"anonymous_access_enabled"` | Whether anonymous git access is allowed. |
| `"archive_url"` |  |
| `"archived"` | Whether to archive this repository. |
| `"assignees_url"` |  |
| `"auto_init"` | Whether the repository is initialized with a minimal README. |
| `"blobs_url"` |  |
| `"branches_url"` |  |
| `"clone_url"` |  |
| `"code_of_conduct"` | Code of Conduct Simple |
| `"code_search_index_status"` | The status of the code search index for this repository |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"created_at"` |  |
| `"custom_properties"` | The custom properties that were defined for the repository. |
| `"default_branch"` | Updates the default branch for this repository. |
| `"delete_branch_on_merge"` | Whether to delete head branches when pull requests are merged |
| `"deployments_url"` |  |
| `"description"` | A short description of the repository. |
| `"disabled"` | Returns whether or not this repository disabled. |
| `"downloads_url"` |  |
| `"events_url"` |  |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"gitignore_template"` | The desired language or platform to apply to the .gitignore. |
| `"has_discussions"` | Whether discussions are enabled. |
| `"has_downloads"` | Whether downloads are enabled. |
| `"has_issues"` | Whether issues are enabled. |
| `"has_pages"` |  |
| `"has_projects"` | Whether projects are enabled. |
| `"has_pull_requests"` | Either `true` to allow pull requests for this repository or `false` to prevent pull requests. |
| `"has_wiki"` | Whether the wiki is enabled. |
| `"homepage"` | A URL with more information about the repository. |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` | Unique identifier of the repository |
| `"is_template"` | Whether this repository acts as a template that can be used to generate new repositories. |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"license"` | License Simple |
| `"license_template"` | The license keyword of the open source license for this repository. |
| `"master_branch"` |  |
| `"merge_commit_message"` | The default value for a merge commit message. |
| `"merge_commit_title"` | The default value for a merge commit title. |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` | The name of the repository. |
| `"network_count"` |  |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"organization"` | A GitHub user. |
| `"owner"` | A GitHub user. |
| `"parent"` | A repository on GitHub. |
| `"permissions"` |  |
| `"private"` | Whether the repository is private. |
| `"pull_request_creation_policy"` | The policy controlling who can create pull requests: all or collaborators_only. |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"releases_url"` |  |
| `"security_and_analysis"` | Specify which security and analysis features to enable or disable for the repository. |
| `"size"` | The size of the repository, in kilobytes. |
| `"source"` | A repository on GitHub. |
| `"squash_merge_commit_message"` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `"squash_merge_commit_title"` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"starred_at"` |  |
| `"statuses_url"` |  |
| `"subscribers_count"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"team_id"` | The id of the team that will be granted access to this repository. |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"template_repository"` | A repository on GitHub. |
| `"topics"` |  |
| `"trees_url"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"use_squash_pr_title_as_default"` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `"visibility"` | The repository visibility: public, private, or internal. |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

Operations: Create, List, Load, Remove, Update.

API path: `/user/repos`



## Entities


### Repo

Create an instance: `repo := client.Repo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `archive_url` | `string` |  |
| `archived` | `bool` | Whether to archive this repository. |
| `assignees_url` | `string` |  |
| `auto_init` | `bool` | Whether the repository is initialized with a minimal README. |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `map[string]any` | Code of Conduct Simple |
| `code_search_index_status` | `map[string]any` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `map[string]any` | The custom properties that were defined for the repository. |
| `default_branch` | `string` | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` |  |
| `description` | `string` | A short description of the repository. |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `gitignore_template` | `string` | The desired language or platform to apply to the .gitignore. |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_pull_requests` | `bool` | Either `true` to allow pull requests for this repository or `false` to prevent pull requests. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `homepage` | `string` | A URL with more information about the repository. |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the repository |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `map[string]any` | License Simple |
| `license_template` | `string` | The license keyword of the open source license for this repository. |
| `master_branch` | `string` |  |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the repository. |
| `network_count` | `int` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organization` | `map[string]any` | A GitHub user. |
| `owner` | `map[string]any` | A GitHub user. |
| `parent` | `map[string]any` | A repository on GitHub. |
| `permissions` | `map[string]any` |  |
| `private` | `bool` | Whether the repository is private. |
| `pull_request_creation_policy` | `string` | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `security_and_analysis` | `map[string]any` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | The size of the repository, in kilobytes. |
| `source` | `map[string]any` | A repository on GitHub. |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `team_id` | `int` | The id of the team that will be granted access to this repository. |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `template_repository` | `map[string]any` | A repository on GitHub. |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `bool` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

#### Example: Load

```go
repo, err := client.Repo(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repo) // the loaded record
```

#### Example: List

```go
repos, err := client.Repo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repos) // the array of records
```

#### Example: Create

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/github-sdk/go/
├── github.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/github-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
repo := client.Repo(nil)
repo.List(nil, nil)

// repo.Data() now returns the repo data from the last list
// repo.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
