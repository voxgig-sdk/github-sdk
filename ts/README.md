# Github TypeScript SDK



The TypeScript SDK for the Github API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Repo()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/github-sdk/releases](https://github.com/voxgig-sdk/github-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { GithubSDK } from '@voxgig-sdk/github'

const client = new GithubSDK()
```

### 2. List repo records

`list()` resolves to an array of Repo ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const repos = await client.Repo().list()

for (const repo of repos) {
  console.log(repo)
}
```

### 3. Load a repo

Repo is nested under owner, so provide the `owner`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const repo = await client.Repo().load({
    owner: 'example_owner',
    repo: 'example_repo',
  })
  console.log(repo)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created Repo ENTITY (.data() for the record)
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

// Update — the id comes off the returned entity's data()
const updated = await client.Repo().update({
  owner: 'example_owner',
  repo: 'example_repo',
})

// Remove
await client.Repo().remove({
  owner: 'example_owner',
  repo: 'example_repo',
})
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

```ts
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

```ts
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

```ts
const client = GithubSDK.test()

const repo = await client.Repo().list()
// repo is the entity, populated with mock response data
// — call repo.data() for the record itself
console.log(repo)
```

You can also use the instance method:

```ts
const client = new GithubSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Repo()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
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
cd ts && npm test
```


## Reference

### GithubSDK

#### Constructor

```ts
new GithubSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
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
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Repo

| Field | Description |
| --- | --- |
| `allow_auto_merge` |  |
| `allow_forking` |  |
| `allow_merge_commit` |  |
| `allow_rebase_merge` |  |
| `allow_squash_merge` |  |
| `allow_update_branch` |  |
| `anonymous_access_enabled` |  |
| `archive_url` |  |
| `archived` |  |
| `assignees_url` |  |
| `auto_init` |  |
| `blobs_url` |  |
| `branches_url` |  |
| `clone_url` |  |
| `code_of_conduct` |  |
| `code_search_index_status` |  |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` |  |
| `custom_properties` |  |
| `default_branch` |  |
| `delete_branch_on_merge` |  |
| `deployments_url` |  |
| `description` |  |
| `disabled` |  |
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
| `gitignore_template` |  |
| `has_discussions` |  |
| `has_downloads` |  |
| `has_issues` |  |
| `has_pages` |  |
| `has_projects` |  |
| `has_pull_requests` |  |
| `has_wiki` |  |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` |  |
| `id` |  |
| `is_template` |  |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `license` |  |
| `license_template` |  |
| `master_branch` |  |
| `merge_commit_message` |  |
| `merge_commit_title` |  |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` |  |
| `network_count` |  |
| `node_id` |  |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `organization` |  |
| `owner` |  |
| `parent` |  |
| `permissions` |  |
| `private` |  |
| `pull_request_creation_policy` |  |
| `pulls_url` |  |
| `pushed_at` |  |
| `releases_url` |  |
| `security_and_analysis` |  |
| `size` |  |
| `source` |  |
| `squash_merge_commit_message` |  |
| `squash_merge_commit_title` |  |
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
| `team_id` |  |
| `teams_url` |  |
| `temp_clone_token` |  |
| `template_repository` |  |
| `topics` |  |
| `trees_url` |  |
| `updated_at` |  |
| `url` |  |
| `use_squash_pr_title_as_default` |  |
| `visibility` |  |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` |  |

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
| `allow_auto_merge` | `boolean` |  |
| `allow_forking` | `boolean` |  |
| `allow_merge_commit` | `boolean` |  |
| `allow_rebase_merge` | `boolean` |  |
| `allow_squash_merge` | `boolean` |  |
| `allow_update_branch` | `boolean` |  |
| `anonymous_access_enabled` | `boolean` |  |
| `archive_url` | `string` |  |
| `archived` | `boolean` |  |
| `assignees_url` | `string` |  |
| `auto_init` | `boolean` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `Record<string, any>` |  |
| `code_search_index_status` | `Record<string, any>` |  |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `Record<string, any>` |  |
| `default_branch` | `string` |  |
| `delete_branch_on_merge` | `boolean` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `boolean` |  |
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
| `gitignore_template` | `string` |  |
| `has_discussions` | `boolean` |  |
| `has_downloads` | `boolean` |  |
| `has_issues` | `boolean` |  |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` |  |
| `has_pull_requests` | `boolean` |  |
| `has_wiki` | `boolean` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `is_template` | `boolean` |  |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `Record<string, any>` |  |
| `license_template` | `string` |  |
| `master_branch` | `string` |  |
| `merge_commit_message` | `string` |  |
| `merge_commit_title` | `string` |  |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` |  |
| `network_count` | `number` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `organization` | `Record<string, any>` |  |
| `owner` | `Record<string, any>` |  |
| `parent` | `Record<string, any>` |  |
| `permissions` | `Record<string, any>` |  |
| `private` | `boolean` |  |
| `pull_request_creation_policy` | `string` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `security_and_analysis` | `Record<string, any>` |  |
| `size` | `number` |  |
| `source` | `Record<string, any>` |  |
| `squash_merge_commit_message` | `string` |  |
| `squash_merge_commit_title` | `string` |  |
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
| `team_id` | `number` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `template_repository` | `Record<string, any>` |  |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `boolean` |  |
| `visibility` | `string` |  |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` |  |

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
│   ├── GithubSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { GithubSDK } from '@voxgig-sdk/github'
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
