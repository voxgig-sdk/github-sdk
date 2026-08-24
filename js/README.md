# Github JavaScript SDK



The JavaScript SDK for the Github API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Repo()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install github
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { GithubSDK } = require('@voxgig-sdk/github-js')

const client = new GithubSDK()
```

### Load a Repo

```js
const repo = await client.Repo().load({ owner: 'example_owner', repo: 'example_repo' })
console.log(repo)
```

### List Repo Records

```js
const repos = await client.Repo().list()
for (const repo of repos) {
  console.log(repo)
}
```

### Create a Repo

```js
const created = await client.Repo().create({
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
console.log(created)
```

### Update a Repo

```js
const updated = await client.Repo().update({
  owner: 'example_owner',
  repo: 'example_repo',
})
console.log(updated)
```

### Remove a Repo

```js
await client.Repo().remove({ owner: 'example_owner', repo: 'example_repo' })
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const repos = await client.Repo().list()
  console.log(repos)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```js
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```js
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```js
const client = GithubSDK.test()

const repo = await client.Repo().list()
// repo is the entity, populated with mock response data
// — call repo.data() for the record itself
console.log(repo)
```

You can also use the instance method:

```js
const client = new GithubSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.Repo()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new GithubSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
GITHUB_TEST_LIVE=TRUE
```

Then run:

```bash
cd js && npm test
```


## Reference

### GithubSDK

#### Constructor

```js
new GithubSDK(options?)
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Repo(data?)` | `RepoEntity` | Create a Repo entity instance. |
| `tester(testopts?, sdkopts?)` | `GithubSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `GithubSDK.test(testopts?, sdkopts?)` | `GithubSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): GithubSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

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

Operations: create, list, load, remove, update.

API path: `/user/repos`



## Entities


### Repo

Create an instance: `const repo = client.Repo()`

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
| `code_of_conduct` | `Object` | Code of Conduct Simple |
| `code_search_index_status` | `Object` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `Object` | The custom properties that were defined for the repository. |
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
| `license` | `Object` | License Simple |
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
| `organization` | `Object` | A GitHub user. |
| `owner` | `Object` | A GitHub user. |
| `parent` | `Object` | A repository on GitHub. |
| `permissions` | `Object` |  |
| `private` | `boolean` | Whether the repository is private. |
| `pull_request_creation_policy` | `string` | The policy controlling who can create pull requests: all or collaborators_only. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `security_and_analysis` | `Object` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `number` | The size of the repository, in kilobytes. |
| `source` | `Object` | A repository on GitHub. |
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
| `template_repository` | `Object` | A repository on GitHub. |
| `topics` | `Array` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `boolean` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

#### Example: Load

```ts
const repo = await client.Repo().load({ owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const repos = await client.Repo().list()
```

#### Example: Create

```ts
const repo = await client.Repo().create({
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
github/
├── src/
│   ├── GithubSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { GithubSDK } = require('@voxgig-sdk/github-js')
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const repo = client.Repo()
await repo.list()

// repo.data() now returns the repo data from the last `list`
// repo.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
