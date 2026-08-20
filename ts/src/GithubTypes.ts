// Typed models for the Github SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Repo {
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  anonymous_access_enabled?: boolean
  archive_url: string
  archived: boolean
  assignees_url: string
  auto_init?: boolean
  blobs_url: string
  branches_url: string
  clone_url: string
  code_of_conduct: Record<string, any>
  code_search_index_status?: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
  custom_properties?: Record<string, any>
  default_branch: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  disabled: boolean
  downloads_url: string
  events_url: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  gitignore_template?: string
  has_discussions: boolean
  has_downloads?: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_pull_requests?: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url: string
  id: number
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: string
  languages_url: string
  license: Record<string, any>
  license_template?: string
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url: string
  milestones_url: string
  mirror_url: string
  name: string
  network_count: number
  node_id: string
  notifications_url: string
  open_issues: number
  open_issues_count: number
  organization: Record<string, any>
  owner: Record<string, any>
  parent: Record<string, any>
  permissions: Record<string, any>
  private: boolean
  pull_request_creation_policy?: string
  pulls_url: string
  pushed_at: string
  releases_url: string
  security_and_analysis?: Record<string, any>
  size: number
  source: Record<string, any>
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  starred_at?: string
  statuses_url: string
  subscribers_count: number
  subscribers_url: string
  subscription_url: string
  svn_url: string
  tags_url: string
  team_id?: number
  teams_url: string
  temp_clone_token?: string
  template_repository: Record<string, any>
  topics?: any[]
  trees_url: string
  updated_at: string
  url: string
  use_squash_pr_title_as_default?: boolean
  visibility?: string
  watchers: number
  watchers_count: number
  web_commit_signoff_required?: boolean
}

export interface RepoLoadMatch {
  owner: string
  repo: string
}

export interface RepoListMatch {
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  anonymous_access_enabled?: boolean
  archive_url?: string
  archived?: boolean
  assignees_url?: string
  auto_init?: boolean
  blobs_url?: string
  branches_url?: string
  clone_url?: string
  code_of_conduct?: Record<string, any>
  code_search_index_status?: Record<string, any>
  collaborators_url?: string
  comments_url?: string
  commits_url?: string
  compare_url?: string
  contents_url?: string
  contributors_url?: string
  created_at?: string
  custom_properties?: Record<string, any>
  default_branch?: string
  delete_branch_on_merge?: boolean
  deployments_url?: string
  description?: string
  disabled?: boolean
  downloads_url?: string
  events_url?: string
  fork?: boolean
  forks?: number
  forks_count?: number
  forks_url?: string
  full_name?: string
  git_commits_url?: string
  git_refs_url?: string
  git_tags_url?: string
  git_url?: string
  gitignore_template?: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_pull_requests?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url?: string
  html_url?: string
  id?: number
  is_template?: boolean
  issue_comment_url?: string
  issue_events_url?: string
  issues_url?: string
  keys_url?: string
  labels_url?: string
  language?: string
  languages_url?: string
  license?: Record<string, any>
  license_template?: string
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url?: string
  milestones_url?: string
  mirror_url?: string
  name?: string
  network_count?: number
  node_id?: string
  notifications_url?: string
  open_issues?: number
  open_issues_count?: number
  organization?: Record<string, any>
  owner?: Record<string, any>
  parent?: Record<string, any>
  permissions?: Record<string, any>
  private?: boolean
  pull_request_creation_policy?: string
  pulls_url?: string
  pushed_at?: string
  releases_url?: string
  security_and_analysis?: Record<string, any>
  size?: number
  source?: Record<string, any>
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url?: string
  stargazers_count?: number
  stargazers_url?: string
  starred_at?: string
  statuses_url?: string
  subscribers_count?: number
  subscribers_url?: string
  subscription_url?: string
  svn_url?: string
  tags_url?: string
  team_id?: number
  teams_url?: string
  temp_clone_token?: string
  template_repository?: Record<string, any>
  topics?: any[]
  trees_url?: string
  updated_at?: string
  url?: string
  use_squash_pr_title_as_default?: boolean
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
}

export interface RepoCreateData {
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  anonymous_access_enabled?: boolean
  archive_url: string
  archived: boolean
  assignees_url: string
  auto_init?: boolean
  blobs_url: string
  branches_url: string
  clone_url: string
  code_of_conduct: Record<string, any>
  code_search_index_status?: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
  custom_properties?: Record<string, any>
  default_branch: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  disabled: boolean
  downloads_url: string
  events_url: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  gitignore_template?: string
  has_discussions: boolean
  has_downloads?: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_pull_requests?: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url: string
  id: number
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: string
  languages_url: string
  license: Record<string, any>
  license_template?: string
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url: string
  milestones_url: string
  mirror_url: string
  name: string
  network_count: number
  node_id: string
  notifications_url: string
  open_issues: number
  open_issues_count: number
  organization: Record<string, any>
  owner: Record<string, any>
  parent: Record<string, any>
  permissions: Record<string, any>
  private: boolean
  pull_request_creation_policy?: string
  pulls_url: string
  pushed_at: string
  releases_url: string
  security_and_analysis?: Record<string, any>
  size: number
  source: Record<string, any>
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  starred_at?: string
  statuses_url: string
  subscribers_count: number
  subscribers_url: string
  subscription_url: string
  svn_url: string
  tags_url: string
  team_id?: number
  teams_url: string
  temp_clone_token?: string
  template_repository: Record<string, any>
  topics?: any[]
  trees_url: string
  updated_at: string
  url: string
  use_squash_pr_title_as_default?: boolean
  visibility?: string
  watchers: number
  watchers_count: number
  web_commit_signoff_required?: boolean
}

export interface RepoUpdateData {
  owner: string
  repo: string
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  anonymous_access_enabled?: boolean
  archive_url?: string
  archived?: boolean
  assignees_url?: string
  auto_init?: boolean
  blobs_url?: string
  branches_url?: string
  clone_url?: string
  code_of_conduct?: Record<string, any>
  code_search_index_status?: Record<string, any>
  collaborators_url?: string
  comments_url?: string
  commits_url?: string
  compare_url?: string
  contents_url?: string
  contributors_url?: string
  created_at?: string
  custom_properties?: Record<string, any>
  default_branch?: string
  delete_branch_on_merge?: boolean
  deployments_url?: string
  description?: string
  disabled?: boolean
  downloads_url?: string
  events_url?: string
  fork?: boolean
  forks?: number
  forks_count?: number
  forks_url?: string
  full_name?: string
  git_commits_url?: string
  git_refs_url?: string
  git_tags_url?: string
  git_url?: string
  gitignore_template?: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_pull_requests?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url?: string
  html_url?: string
  id?: number
  is_template?: boolean
  issue_comment_url?: string
  issue_events_url?: string
  issues_url?: string
  keys_url?: string
  labels_url?: string
  language?: string
  languages_url?: string
  license?: Record<string, any>
  license_template?: string
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url?: string
  milestones_url?: string
  mirror_url?: string
  name?: string
  network_count?: number
  node_id?: string
  notifications_url?: string
  open_issues?: number
  open_issues_count?: number
  organization?: Record<string, any>
  parent?: Record<string, any>
  permissions?: Record<string, any>
  private?: boolean
  pull_request_creation_policy?: string
  pulls_url?: string
  pushed_at?: string
  releases_url?: string
  security_and_analysis?: Record<string, any>
  size?: number
  source?: Record<string, any>
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url?: string
  stargazers_count?: number
  stargazers_url?: string
  starred_at?: string
  statuses_url?: string
  subscribers_count?: number
  subscribers_url?: string
  subscription_url?: string
  svn_url?: string
  tags_url?: string
  team_id?: number
  teams_url?: string
  temp_clone_token?: string
  template_repository?: Record<string, any>
  topics?: any[]
  trees_url?: string
  updated_at?: string
  url?: string
  use_squash_pr_title_as_default?: boolean
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
}

export interface RepoRemoveMatch {
  owner: string
  repo: string
}

