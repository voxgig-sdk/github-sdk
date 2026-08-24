# Github JavaScript SDK Reference

Complete API reference for the Github JavaScript SDK.


## GithubSDK

### Constructor

```ts
new GithubSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GithubSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = GithubSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `GithubSDK` instance in test mode.


### Instance Methods

#### `Repo(data?: object)`

Create a new `Repo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepoEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `GithubSDK.test()`.

**Returns:** `GithubSDK` instance in test mode.


---

## RepoEntity

```ts
const repo = client.Repo()
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
| `code_of_conduct` | `Object` | Yes | Code of Conduct Simple |
| `code_search_index_status` | `Object` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `Object` | No | The custom properties that were defined for the repository. |
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
| `license` | `Object` | Yes | License Simple |
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
| `organization` | `Object` | Yes | A GitHub user. |
| `owner` | `Object` | Yes | A GitHub user. |
| `parent` | `Object` | Yes | A repository on GitHub. |
| `permissions` | `Object` | Yes |  |
| `private` | `boolean` | Yes | Whether the repository is private. |
| `pull_request_creation_policy` | `string` | No | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `security_and_analysis` | `Object` | No | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `number` | Yes | The size of the repository, in kilobytes. |
| `source` | `Object` | Yes | A repository on GitHub. |
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
| `template_repository` | `Object` | Yes | A repository on GitHub. |
| `topics` | `Array` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Repo().create({
  archive_url: 'example_archive_url',
  archived: true,
  assignees_url: 'example_assignees_url',
  blobs_url: 'example_blobs_url',
  branches_url: 'example_branches_url',
  clone_url: 'example_clone_url',
  code_of_conduct: {},
  collaborators_url: 'example_collaborators_url',
  comments_url: 'example_comments_url',
  commits_url: 'example_commits_url',
  compare_url: 'example_compare_url',
  contents_url: 'example_contents_url',
  contributors_url: 'example_contributors_url',
  created_at: 'example_created_at',
  default_branch: 'example_default_branch',
  deployments_url: 'example_deployments_url',
  description: 'example_description',
  disabled: true,
  downloads_url: 'example_downloads_url',
  events_url: 'example_events_url',
  fork: true,
  forks: 1,
  forks_count: 1,
  forks_url: 'example_forks_url',
  full_name: 'example_full_name',
  git_commits_url: 'example_git_commits_url',
  git_refs_url: 'example_git_refs_url',
  git_tags_url: 'example_git_tags_url',
  git_url: 'example_git_url',
  has_discussions: true,
  has_issues: true,
  has_pages: true,
  has_projects: true,
  has_wiki: true,
  homepage: 'example_homepage',
  hooks_url: 'example_hooks_url',
  html_url: 'example_html_url',
  id: 1,
  issue_comment_url: 'example_issue_comment_url',
  issue_events_url: 'example_issue_events_url',
  issues_url: 'example_issues_url',
  keys_url: 'example_keys_url',
  labels_url: 'example_labels_url',
  language: 'example_language',
  languages_url: 'example_languages_url',
  license: {},
  merges_url: 'example_merges_url',
  milestones_url: 'example_milestones_url',
  mirror_url: 'example_mirror_url',
  name: 'example_name',
  network_count: 1,
  node_id: 'example_node_id',
  notifications_url: 'example_notifications_url',
  open_issues: 1,
  open_issues_count: 1,
  organization: {},
  owner: {},
  parent: {},
  permissions: {},
  private: true,
  pulls_url: 'example_pulls_url',
  pushed_at: 'example_pushed_at',
  releases_url: 'example_releases_url',
  size: 1,
  source: {},
  ssh_url: 'example_ssh_url',
  stargazers_count: 1,
  stargazers_url: 'example_stargazers_url',
  statuses_url: 'example_statuses_url',
  subscribers_count: 1,
  subscribers_url: 'example_subscribers_url',
  subscription_url: 'example_subscription_url',
  svn_url: 'example_svn_url',
  tags_url: 'example_tags_url',
  teams_url: 'example_teams_url',
  template_repository: {},
  trees_url: 'example_trees_url',
  updated_at: 'example_updated_at',
  url: 'example_url',
  watchers: 1,
  watchers_count: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Repo().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Repo().load({ owner: 'owner', repo: 'repo' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Repo().remove({ owner: 'owner', repo: 'repo' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Repo().update({
  owner: 'owner',
  repo: 'repo',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepoEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new GithubSDK({
  feature: {
    test: { active: true },
  }
})
```

