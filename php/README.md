# Github PHP SDK



The PHP SDK for the Github API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Pull()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/github-sdk/releases](https://github.com/voxgig-sdk/github-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'github_sdk.php';

$client = new GithubSDK([
    "apikey" => getenv("GITHUB_APIKEY"),
]);
```

### 2. List pull records

```php
try {
    // list() returns an array of Pull records — iterate directly.
    $pulls = $client->Pull()->list();
    foreach ($pulls as $item) {
        echo $item["id"] . " " . $item["active_lock_reason"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a pull

Pull is nested under owner, so provide the `owner`.

```php
try {
    // load() returns the ENTITY — call data_get() for the Pull record (throws on error).
    $pull = $client->Pull()->load(["owner" => "example_owner", "repo" => "example_repo", "id" => 1]);
    print_r($pull);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Pull record.
$created = $client->Pull()->create(["owner" => "example_owner", "repo" => "example_repo", "additions" => 1, "assignee" => [], "author_association" => "example_author_association", "auto_merge" => [], "base" => [], "body" => "example_body", "changed_files" => 1, "closed_at" => "example_closed_at", "comments" => 1, "comments_url" => "example_comments_url", "commits" => 1, "commits_url" => "example_commits_url", "created_at" => "example_created_at", "deletions" => 1, "diff_url" => "example_diff_url", "head" => [], "html_url" => "example_html_url", "id" => 1, "issue_url" => "example_issue_url", "labels" => [], "links" => [], "locked" => true, "maintainer_can_modify" => true, "merge_commit_sha" => "example_merge_commit_sha", "mergeable" => true, "mergeable_state" => "example_mergeable_state", "merged" => true, "merged_at" => "example_merged_at", "merged_by" => [], "message" => "example_message", "milestone" => [], "node_id" => "example_node_id", "number" => 1, "patch_url" => "example_patch_url", "review_comment_url" => "example_review_comment_url", "review_comments" => 1, "review_comments_url" => "example_review_comments_url", "sha" => "example_sha", "stack" => [], "state" => "example_state", "statuses_url" => "example_statuses_url", "title" => "example_title", "updated_at" => "example_updated_at", "url" => "example_url", "user" => []]);

// Update — index the record via data_get() ($created->data_get()["id"]).
$client->Pull()->update(["id" => $created->data_get()["id"], "owner" => "example_owner", "repo" => "example_repo"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $pulls = $client->Pull()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = GithubSDK::test([
    "entity" => ["pull" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$pull = $client->Pull()->list();
print_r($pull);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new GithubSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
GITHUB_TEST_LIVE=TRUE
GITHUB_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### GithubSDK

```php
require_once 'github_sdk.php';
$client = new GithubSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = GithubSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### GithubSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Pull` | `($data): PullEntity` | Create a Pull entity instance. |
| `Repo` | `($data): RepoEntity` | Create a Repo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Pull

| Field | Description |
| --- | --- |
| `active_lock_reason` |  |
| `additions` |  |
| `assignee` | A GitHub user. |
| `assignees` |  |
| `author_association` | How the author is associated with the repository. |
| `auto_merge` | The status of auto merging a pull request. |
| `base` | The name of the branch you want the changes pulled into. |
| `body` | The contents of the pull request. |
| `changed_files` |  |
| `closed_at` |  |
| `comments` |  |
| `comments_url` |  |
| `commit_message` | Extra detail to append to automatic commit message. |
| `commit_title` | Title for the automatic commit message. |
| `commits` |  |
| `commits_url` |  |
| `created_at` |  |
| `deletions` |  |
| `diff_url` |  |
| `draft` | Indicates whether or not the pull request is a draft. |
| `head` | The name of the branch where your changes are implemented. |
| `head_repo` | The name of the repository where the changes in the pull request were made. |
| `html_url` |  |
| `id` |  |
| `issue` | An issue in the repository to convert to a pull request. |
| `issue_url` |  |
| `labels` |  |
| `links` |  |
| `locked` |  |
| `maintainer_can_modify` | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` |  |
| `merge_method` | The merge method to use. |
| `mergeable` |  |
| `mergeable_state` |  |
| `merged` |  |
| `merged_at` |  |
| `merged_by` | A GitHub user. |
| `message` |  |
| `milestone` | A collection of related issues and pull requests. |
| `node_id` |  |
| `number` | Number uniquely identifying the pull request within its repository. |
| `patch_url` |  |
| `rebaseable` |  |
| `requested_reviewers` |  |
| `requested_teams` |  |
| `review_comment_url` |  |
| `review_comments` |  |
| `review_comments_url` |  |
| `sha` | SHA that pull request head must match to allow merge. |
| `stack` | The stack information associated with a pull request. |
| `state` | State of this Pull Request. |
| `statuses_url` |  |
| `title` | The title of the pull request. |
| `updated_at` |  |
| `url` |  |
| `user` | A GitHub user. |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/pulls`

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


### Pull

Create an instance: `$pull = $client->Pull();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `string` |  |
| `additions` | `int` |  |
| `assignee` | `array` | A GitHub user. |
| `assignees` | `array` |  |
| `author_association` | `string` | How the author is associated with the repository. |
| `auto_merge` | `array` | The status of auto merging a pull request. |
| `base` | `array` | The name of the branch you want the changes pulled into. |
| `body` | `string` | The contents of the pull request. |
| `changed_files` | `int` |  |
| `closed_at` | `string` |  |
| `comments` | `int` |  |
| `comments_url` | `string` |  |
| `commit_message` | `string` | Extra detail to append to automatic commit message. |
| `commit_title` | `string` | Title for the automatic commit message. |
| `commits` | `int` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `deletions` | `int` |  |
| `diff_url` | `string` |  |
| `draft` | `bool` | Indicates whether or not the pull request is a draft. |
| `head` | `array` | The name of the branch where your changes are implemented. |
| `head_repo` | `string` | The name of the repository where the changes in the pull request were made. |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `issue` | `int` | An issue in the repository to convert to a pull request. |
| `issue_url` | `string` |  |
| `labels` | `array` |  |
| `links` | `array` |  |
| `locked` | `bool` |  |
| `maintainer_can_modify` | `bool` | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` | `string` |  |
| `merge_method` | `string` | The merge method to use. |
| `mergeable` | `bool` |  |
| `mergeable_state` | `string` |  |
| `merged` | `bool` |  |
| `merged_at` | `string` |  |
| `merged_by` | `array` | A GitHub user. |
| `message` | `string` |  |
| `milestone` | `array` | A collection of related issues and pull requests. |
| `node_id` | `string` |  |
| `number` | `int` | Number uniquely identifying the pull request within its repository. |
| `patch_url` | `string` |  |
| `rebaseable` | `bool` |  |
| `requested_reviewers` | `array` |  |
| `requested_teams` | `array` |  |
| `review_comment_url` | `string` |  |
| `review_comments` | `int` |  |
| `review_comments_url` | `string` |  |
| `sha` | `string` | SHA that pull request head must match to allow merge. |
| `stack` | `array` | The stack information associated with a pull request. |
| `state` | `string` | State of this Pull Request. |
| `statuses_url` | `string` |  |
| `title` | `string` | The title of the pull request. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `array` | A GitHub user. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Pull record (throws on error).
$pull = $client->Pull()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Pull records (throws on error).
$pulls = $client->Pull()->list();
```

#### Example: Create

```php
$pull = $client->Pull()->create([
    "owner" => null, // string
    "repo" => null, // string
    "additions" => null, // int
    "assignee" => null, // array
    "author_association" => null, // string
    "auto_merge" => null, // array
    "base" => null, // array
    "body" => null, // string
    "changed_files" => null, // int
    "closed_at" => null, // string
    "comments" => null, // int
    "comments_url" => null, // string
    "commits" => null, // int
    "commits_url" => null, // string
    "created_at" => null, // string
    "deletions" => null, // int
    "diff_url" => null, // string
    "head" => null, // array
    "html_url" => null, // string
    "id" => null, // int
    "issue_url" => null, // string
    "labels" => null, // array
    "links" => null, // array
    "locked" => null, // bool
    "maintainer_can_modify" => null, // bool
    "merge_commit_sha" => null, // string
    "mergeable" => null, // bool
    "mergeable_state" => null, // string
    "merged" => null, // bool
    "merged_at" => null, // string
    "merged_by" => null, // array
    "message" => null, // string
    "milestone" => null, // array
    "node_id" => null, // string
    "number" => null, // int
    "patch_url" => null, // string
    "review_comment_url" => null, // string
    "review_comments" => null, // int
    "review_comments_url" => null, // string
    "sha" => null, // string
    "stack" => null, // array
    "state" => null, // string
    "statuses_url" => null, // string
    "title" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
    "user" => null, // array
]);
```


### Repo

Create an instance: `$repo = $client->Repo();`

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
| `code_of_conduct` | `array` | Code of Conduct Simple |
| `code_search_index_status` | `array` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `array` | The custom properties that were defined for the repository. |
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
| `license` | `array` | License Simple |
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
| `organization` | `array` | A GitHub user. |
| `owner` | `array` | A GitHub user. |
| `parent` | `array` | A repository on GitHub. |
| `permissions` | `array` |  |
| `private` | `bool` | Whether the repository is private. |
| `pull_request_creation_policy` | `string` | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `security_and_analysis` | `array` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | The size of the repository, in kilobytes. |
| `source` | `array` | A repository on GitHub. |
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
| `template_repository` | `array` | A repository on GitHub. |
| `topics` | `array` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `bool` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Repo record (throws on error).
$repo = $client->Repo()->load(["owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Repo records (throws on error).
$repos = $client->Repo()->list();
```

#### Example: Create

```php
$repo = $client->Repo()->create([
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

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── github_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`github_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$pull = $client->Pull();
$pull->list();

// $pull->data_get() now returns the pull data from the last list
// $pull->match_get() returns the last match criteria
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
