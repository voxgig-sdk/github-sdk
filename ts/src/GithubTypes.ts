// Typed models for the Github SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Action {
  MACOS?: number
  UBUNTU?: number
  WINDOWS?: number
  access_level: string
  active_caches_count: number
  active_caches_size_in_bytes: number
  actor: Record<string, any>
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  allowed_actions?: string
  allows_public_repositories: boolean
  anonymous_access_enabled?: boolean
  approval_policy: string
  archive_download_url: string
  archive_url: string
  archived?: boolean
  artifacts_url: string
  assignees_url: string
  badge_url: string
  blobs_url: string
  branches_url: string
  busy: boolean
  can_approve_pull_request_reviews?: boolean
  cancel_url: string
  check_run_url: string
  check_suite_id?: number
  check_suite_node_id?: string
  check_suite_url: string
  clone_url?: string
  code_of_conduct: Record<string, any>
  code_search_index_status?: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  completed_at: string
  conclusion: string
  contents_url: string
  contributors_url: string
  cpu_cores: number
  created_at: string
  custom_properties?: Record<string, any>
  days: number
  default: boolean
  default_branch?: string
  default_workflow_permissions?: string
  delete_branch_on_merge?: boolean
  deleted_at?: string
  deployments_url: string
  description: string
  digest?: string
  disabled?: boolean
  display_name: string
  display_title: string
  downloads_url: string
  enabled: boolean
  enabled_repositories: string
  ephemeral?: boolean
  event: string
  events_url: string
  expired: boolean
  expires_at: string
  fork: boolean
  forks?: number
  forks_count?: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url?: string
  github_owned_allowed?: boolean
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  head_branch: string
  head_commit: Record<string, any>
  head_repository: Record<string, any>
  head_repository_id?: number
  head_sha: string
  homepage?: string
  hooks_url: string
  hosted_runners_url?: string
  html_url: string
  id: number
  image_details: Record<string, any>
  inherited: boolean
  inherited_allows_public_repositories?: boolean
  inputs?: Record<string, any>
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  jobs_url: string
  keys_url: string
  labels: any[]
  labels_url: string
  language?: string
  languages_url: string
  last_active_on?: string
  license?: Record<string, any>
  logs_url: string
  machine_size_details: Record<string, any>
  macos_12_core?: number
  master_branch?: string
  maximum_runners?: number
  memory_gb: number
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url: string
  milestones_url: string
  mirror_url?: string
  name: string
  network_configuration_id?: string
  network_count?: number
  node_id: string
  notifications_url: string
  open_issues?: number
  open_issues_count?: number
  os: string
  owner: Record<string, any>
  path: string
  patterns_allowed?: any[]
  permissions?: Record<string, any>
  platform: string
  platforms: any[]
  previous_attempt_url?: string
  private: boolean
  public_ip_enabled: boolean
  public_ips?: any[]
  pull_requests: any[]
  pulls_url: string
  pushed_at?: string
  ref: string
  referenced_workflows?: any[]
  releases_url: string
  repository: Record<string, any>
  require_approval_for_fork_pr_workflows?: boolean
  rerun_url: string
  restricted_to_workflows?: boolean
  role_name?: string
  run_attempt?: number
  run_id: number
  run_number: number
  run_started_at?: string
  run_url: string
  run_workflows_from_fork_pull_requests: boolean
  runner_group_id: number
  runner_group_name: string
  runner_id: number
  runner_name: string
  runners: any[]
  runners_url: string
  security_and_analysis?: Record<string, any>
  selected_repositories_url?: string
  selected_repository_ids: any[]
  selected_workflows?: any[]
  send_secrets_and_variables?: boolean
  send_write_tokens_to_workflows?: boolean
  sha_pinning_required?: boolean
  size?: number
  size_gb: number
  size_in_bytes: number
  source: string
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url?: string
  stargazers_count?: number
  stargazers_url: string
  starred_at?: string
  started_at: string
  state: string
  status: string
  statuses_url: string
  steps?: any[]
  storage_gb: number
  subscribers_count?: number
  subscribers_url: string
  subscription_url: string
  svn_url?: string
  tags_url: string
  teams_url: string
  temp_clone_token?: string
  topics?: any[]
  total?: number
  total_count: number
  trees_url: string
  triggering_actor: Record<string, any>
  type?: string
  ubuntu_16_core?: number
  ubuntu_32_core?: number
  ubuntu_4_core?: number
  ubuntu_64_core?: number
  ubuntu_8_core?: number
  updated_at: string
  url: string
  use_squash_pr_title_as_default?: boolean
  value?: string
  verified_allowed?: boolean
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
  windows_16_core?: number
  windows_32_core?: number
  windows_4_core?: number
  windows_64_core?: number
  windows_8_core?: number
  work_folder?: string
  workflow_id: number
  workflow_name: string
  workflow_restrictions_read_only?: boolean
  workflow_run?: Record<string, any>
  workflow_url: string
}

export interface ActionLoadMatch {
  archive_format: string
  artifact_id: number
  owner: string
  repo: string
}

export interface ActionListMatch {
  org_id: string
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'artifact' | 'hosted_runner' | 'organization_secret' | 'organization_variable' | 'run' | 'runner' | 'runner' | 'runner_group' | 'secret' | 'secret' | 'variable' | 'variable' | 'workflow'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ActionCreateData {
  org_id: string
  MACOS?: number
  UBUNTU?: number
  WINDOWS?: number
  access_level: string
  active_caches_count: number
  active_caches_size_in_bytes: number
  actor: Record<string, any>
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  allowed_actions?: string
  allows_public_repositories: boolean
  anonymous_access_enabled?: boolean
  approval_policy: string
  archive_download_url: string
  archive_url: string
  archived?: boolean
  artifacts_url: string
  assignees_url: string
  badge_url: string
  blobs_url: string
  branches_url: string
  busy: boolean
  can_approve_pull_request_reviews?: boolean
  cancel_url: string
  check_run_url: string
  check_suite_id?: number
  check_suite_node_id?: string
  check_suite_url: string
  clone_url?: string
  code_of_conduct: Record<string, any>
  code_search_index_status?: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  completed_at: string
  conclusion: string
  contents_url: string
  contributors_url: string
  cpu_cores: number
  created_at: string
  custom_properties?: Record<string, any>
  days: number
  default: boolean
  default_branch?: string
  default_workflow_permissions?: string
  delete_branch_on_merge?: boolean
  deleted_at?: string
  deployments_url: string
  description: string
  digest?: string
  disabled?: boolean
  display_name: string
  display_title: string
  downloads_url: string
  enabled: boolean
  enabled_repositories: string
  ephemeral?: boolean
  event: string
  events_url: string
  expired: boolean
  expires_at: string
  fork: boolean
  forks?: number
  forks_count?: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url?: string
  github_owned_allowed?: boolean
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  head_branch: string
  head_commit: Record<string, any>
  head_repository: Record<string, any>
  head_repository_id?: number
  head_sha: string
  homepage?: string
  hooks_url: string
  hosted_runners_url?: string
  html_url: string
  id: number
  image_details: Record<string, any>
  inherited: boolean
  inherited_allows_public_repositories?: boolean
  inputs?: Record<string, any>
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  jobs_url: string
  keys_url: string
  labels: any[]
  labels_url: string
  language?: string
  languages_url: string
  last_active_on?: string
  license?: Record<string, any>
  logs_url: string
  machine_size_details: Record<string, any>
  macos_12_core?: number
  master_branch?: string
  maximum_runners?: number
  memory_gb: number
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url: string
  milestones_url: string
  mirror_url?: string
  name: string
  network_configuration_id?: string
  network_count?: number
  node_id: string
  notifications_url: string
  open_issues?: number
  open_issues_count?: number
  os: string
  owner: Record<string, any>
  path: string
  patterns_allowed?: any[]
  permissions?: Record<string, any>
  platform: string
  platforms: any[]
  previous_attempt_url?: string
  private: boolean
  public_ip_enabled: boolean
  public_ips?: any[]
  pull_requests: any[]
  pulls_url: string
  pushed_at?: string
  ref: string
  referenced_workflows?: any[]
  releases_url: string
  repository: Record<string, any>
  require_approval_for_fork_pr_workflows?: boolean
  rerun_url: string
  restricted_to_workflows?: boolean
  role_name?: string
  run_attempt?: number
  run_id: number
  run_number: number
  run_started_at?: string
  run_url: string
  run_workflows_from_fork_pull_requests: boolean
  runner_group_id: number
  runner_group_name: string
  runner_id: number
  runner_name: string
  runners: any[]
  runners_url: string
  security_and_analysis?: Record<string, any>
  selected_repositories_url?: string
  selected_repository_ids: any[]
  selected_workflows?: any[]
  send_secrets_and_variables?: boolean
  send_write_tokens_to_workflows?: boolean
  sha_pinning_required?: boolean
  size?: number
  size_gb: number
  size_in_bytes: number
  source: string
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url?: string
  stargazers_count?: number
  stargazers_url: string
  starred_at?: string
  started_at: string
  state: string
  status: string
  statuses_url: string
  steps?: any[]
  storage_gb: number
  subscribers_count?: number
  subscribers_url: string
  subscription_url: string
  svn_url?: string
  tags_url: string
  teams_url: string
  temp_clone_token?: string
  topics?: any[]
  total?: number
  total_count: number
  trees_url: string
  triggering_actor: Record<string, any>
  type?: string
  ubuntu_16_core?: number
  ubuntu_32_core?: number
  ubuntu_4_core?: number
  ubuntu_64_core?: number
  ubuntu_8_core?: number
  updated_at: string
  url: string
  use_squash_pr_title_as_default?: boolean
  value?: string
  verified_allowed?: boolean
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
  windows_16_core?: number
  windows_32_core?: number
  windows_4_core?: number
  windows_64_core?: number
  windows_8_core?: number
  work_folder?: string
  workflow_id: number
  workflow_name: string
  workflow_restrictions_read_only?: boolean
  workflow_run?: Record<string, any>
  workflow_url: string
}

export interface ActionUpdateData {
  org_id: string
  repository_id: number
  MACOS?: number
  UBUNTU?: number
  WINDOWS?: number
  access_level?: string
  active_caches_count?: number
  active_caches_size_in_bytes?: number
  actor?: Record<string, any>
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  allowed_actions?: string
  allows_public_repositories?: boolean
  anonymous_access_enabled?: boolean
  approval_policy?: string
  archive_download_url?: string
  archive_url?: string
  archived?: boolean
  artifacts_url?: string
  assignees_url?: string
  badge_url?: string
  blobs_url?: string
  branches_url?: string
  busy?: boolean
  can_approve_pull_request_reviews?: boolean
  cancel_url?: string
  check_run_url?: string
  check_suite_id?: number
  check_suite_node_id?: string
  check_suite_url?: string
  clone_url?: string
  code_of_conduct?: Record<string, any>
  code_search_index_status?: Record<string, any>
  collaborators_url?: string
  comments_url?: string
  commits_url?: string
  compare_url?: string
  completed_at?: string
  conclusion?: string
  contents_url?: string
  contributors_url?: string
  cpu_cores?: number
  created_at?: string
  custom_properties?: Record<string, any>
  days?: number
  default?: boolean
  default_branch?: string
  default_workflow_permissions?: string
  delete_branch_on_merge?: boolean
  deleted_at?: string
  deployments_url?: string
  description?: string
  digest?: string
  disabled?: boolean
  display_name?: string
  display_title?: string
  downloads_url?: string
  enabled?: boolean
  enabled_repositories?: string
  ephemeral?: boolean
  event?: string
  events_url?: string
  expired?: boolean
  expires_at?: string
  fork?: boolean
  forks?: number
  forks_count?: number
  forks_url?: string
  full_name?: string
  git_commits_url?: string
  git_refs_url?: string
  git_tags_url?: string
  git_url?: string
  github_owned_allowed?: boolean
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  head_branch?: string
  head_commit?: Record<string, any>
  head_repository?: Record<string, any>
  head_repository_id?: number
  head_sha?: string
  homepage?: string
  hooks_url?: string
  hosted_runners_url?: string
  html_url?: string
  id?: number
  image_details?: Record<string, any>
  inherited?: boolean
  inherited_allows_public_repositories?: boolean
  inputs?: Record<string, any>
  is_template?: boolean
  issue_comment_url?: string
  issue_events_url?: string
  issues_url?: string
  jobs_url?: string
  keys_url?: string
  labels?: any[]
  labels_url?: string
  language?: string
  languages_url?: string
  last_active_on?: string
  license?: Record<string, any>
  logs_url?: string
  machine_size_details?: Record<string, any>
  macos_12_core?: number
  master_branch?: string
  maximum_runners?: number
  memory_gb?: number
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url?: string
  milestones_url?: string
  mirror_url?: string
  name?: string
  network_configuration_id?: string
  network_count?: number
  node_id?: string
  notifications_url?: string
  open_issues?: number
  open_issues_count?: number
  os?: string
  owner?: Record<string, any>
  path?: string
  patterns_allowed?: any[]
  permissions?: Record<string, any>
  platform?: string
  platforms?: any[]
  previous_attempt_url?: string
  private?: boolean
  public_ip_enabled?: boolean
  public_ips?: any[]
  pull_requests?: any[]
  pulls_url?: string
  pushed_at?: string
  ref?: string
  referenced_workflows?: any[]
  releases_url?: string
  repository?: Record<string, any>
  require_approval_for_fork_pr_workflows?: boolean
  rerun_url?: string
  restricted_to_workflows?: boolean
  role_name?: string
  run_attempt?: number
  run_id?: number
  run_number?: number
  run_started_at?: string
  run_url?: string
  run_workflows_from_fork_pull_requests?: boolean
  runner_group_id?: number
  runner_group_name?: string
  runner_id?: number
  runner_name?: string
  runners?: any[]
  runners_url?: string
  security_and_analysis?: Record<string, any>
  selected_repositories_url?: string
  selected_repository_ids?: any[]
  selected_workflows?: any[]
  send_secrets_and_variables?: boolean
  send_write_tokens_to_workflows?: boolean
  sha_pinning_required?: boolean
  size?: number
  size_gb?: number
  size_in_bytes?: number
  source?: string
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url?: string
  stargazers_count?: number
  stargazers_url?: string
  starred_at?: string
  started_at?: string
  state?: string
  status?: string
  statuses_url?: string
  steps?: any[]
  storage_gb?: number
  subscribers_count?: number
  subscribers_url?: string
  subscription_url?: string
  svn_url?: string
  tags_url?: string
  teams_url?: string
  temp_clone_token?: string
  topics?: any[]
  total?: number
  total_count?: number
  trees_url?: string
  triggering_actor?: Record<string, any>
  type?: string
  ubuntu_16_core?: number
  ubuntu_32_core?: number
  ubuntu_4_core?: number
  ubuntu_64_core?: number
  ubuntu_8_core?: number
  updated_at?: string
  url?: string
  use_squash_pr_title_as_default?: boolean
  value?: string
  verified_allowed?: boolean
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
  windows_16_core?: number
  windows_32_core?: number
  windows_4_core?: number
  windows_64_core?: number
  windows_8_core?: number
  work_folder?: string
  workflow_id?: number
  workflow_name?: string
  workflow_restrictions_read_only?: boolean
  workflow_run?: Record<string, any>
  workflow_url?: string

  // Selects a custom action instead of the plain update:
  //   'permission' | 'permission'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ActionRemoveMatch {
  hosted_runner_id: number
  org_id: string
}

export interface ActionsArtifactAndLogRetention {
  days: number
  maximum_allowed_days: number
}

export interface ActionsArtifactAndLogRetentionLoadMatch {
  org_id: string
}

export interface ActionsCacheList {
  created_at?: string
  id?: number
  key?: string
  last_accessed_at?: string
  ref?: string
  size_in_bytes?: number
  version?: string
}

export interface ActionsCacheListListMatch {
  owner: string
  repo: string
  direction?: string
  key?: string
  page?: number
  per_page?: number
  ref?: string
  sort?: string
}

export interface ActionsCacheListRemoveMatch {
  owner: string
  repo: string
  key: string
  ref?: string
}

export interface ActionsCacheUsageByRepository {
  active_caches_count: number
  active_caches_size_in_bytes: number
  full_name: string
}

export interface ActionsCacheUsageByRepositoryLoadMatch {
  owner: string
  repo: string
}

export interface ActionsCacheUsageOrgEnterprise {
  total_active_caches_count: number
  total_active_caches_size_in_bytes: number
}

export interface ActionsCacheUsageOrgEnterpriseLoadMatch {
  org_id: string
}

export interface ActionsForkPrContributorApproval {
  approval_policy: string
}

export interface ActionsForkPrContributorApprovalLoadMatch {
  org_id: string
}

export interface ActionsForkPrWorkflowsPrivateRepo {
  require_approval_for_fork_pr_workflows: boolean
  run_workflows_from_fork_pull_requests: boolean
  send_secrets_and_variables: boolean
  send_write_tokens_to_workflows: boolean
}

export interface ActionsForkPrWorkflowsPrivateRepoLoadMatch {
  org_id: string
}

export interface ActionsGetDefaultWorkflowPermission {
  can_approve_pull_request_reviews: boolean
  default_workflow_permissions: string
}

export interface ActionsGetDefaultWorkflowPermissionLoadMatch {
  org_id: string
}

export interface ActionsHostedRunner {
  enable_static_ip?: boolean
  id: number
  image: Record<string, any>
  image_details: Record<string, any>
  last_active_on?: string
  machine_size_details: Record<string, any>
  maximum_runners?: number
  name: string
  platform: string
  public_ip_enabled: boolean
  public_ips?: any[]
  runner_group_id?: number
  size: string
  status: string
}

export interface ActionsHostedRunnerLoadMatch {
  id: number
  org_id: string
}

export interface ActionsHostedRunnerCreateData {
  org_id: string
  enable_static_ip?: boolean
  id: number
  image: Record<string, any>
  image_details: Record<string, any>
  last_active_on?: string
  machine_size_details: Record<string, any>
  maximum_runners?: number
  name: string
  platform: string
  public_ip_enabled: boolean
  public_ips?: any[]
  runner_group_id?: number
  size: string
  status: string
}

export interface ActionsHostedRunnerUpdateData {
  id: number
  org_id: string
  enable_static_ip?: boolean
  image?: Record<string, any>
  image_details?: Record<string, any>
  last_active_on?: string
  machine_size_details?: Record<string, any>
  maximum_runners?: number
  name?: string
  platform?: string
  public_ip_enabled?: boolean
  public_ips?: any[]
  runner_group_id?: number
  size?: string
  status?: string
}

export interface ActionsHostedRunnerLimit {
  current_usage: number
  maximum: number
}

export interface ActionsHostedRunnerLimitLoadMatch {
  org_id: string
}

export interface ActionsOrganizationPermission {
  allowed_actions?: string
  enabled_repositories: string
  selected_actions_url?: string
  selected_repositories_url?: string
  sha_pinning_required?: boolean
}

export interface ActionsOrganizationPermissionLoadMatch {
  org_id: string
}

export interface ActionsPublicKey {
  created_at?: string
  id?: number
  key: string
  key_id: string
  title?: string
  url?: string
}

export interface ActionsPublicKeyLoadMatch {
  org_id: string
}

export interface ActionsRepositoryPermission {
  allowed_actions?: string
  enabled: boolean
  selected_actions_url?: string
  sha_pinning_required?: boolean
}

export interface ActionsRepositoryPermissionLoadMatch {
  owner: string
  repo: string
}

export interface ActionsSecret {
  created_at: string
  id?: string
  name: string
  updated_at: string
}

export interface ActionsSecretLoadMatch {
  environment_id?: string
  id: string
  owner: string
  repo: string
}

export interface ActionsVariable {
  created_at: string
  id?: string
  name: string
  updated_at: string
  value: string
}

export interface ActionsVariableLoadMatch {
  environment_id?: string
  id: string
  owner: string
  repo: string
}

export interface ActionsWorkflowAccessToRepository {
  access_level: string
}

export interface ActionsWorkflowAccessToRepositoryLoadMatch {
  owner: string
  repo: string
}

export interface Activity {
  activity_type: string
  actor: Record<string, any>
  after: string
  archive_url?: string
  assignees_url?: string
  avatar_url?: string
  before: string
  blobs_url?: string
  branches_url?: string
  clone_url?: string
  collaborators_url?: string
  comments_url?: string
  commits_url?: string
  compare_url?: string
  contents_url?: string
  contributors_url?: string
  deployments_url?: string
  description?: string
  downloads_url?: string
  events_url?: string
  followers_url?: string
  following_url?: string
  fork?: boolean
  forks_url?: string
  full_name?: string
  gists_url?: string
  git_commits_url?: string
  git_refs_url?: string
  git_tags_url?: string
  git_url?: string
  github_id?: number
  gravatar_id?: string
  homepage?: string
  hooks_url?: string
  html_url?: string
  id?: string
  issue_comment_url?: string
  issue_events_url?: string
  issues_url?: string
  keys_url?: string
  labels_url?: string
  language?: Record<string, any>
  languages_url?: string
  last_read_at?: string
  login?: string
  merges_url?: string
  milestones_url?: string
  mirror_url?: string
  name?: string
  node_id?: string
  notifications_url?: string
  organizations_url?: string
  owner?: Record<string, any>
  private?: boolean
  pulls_url?: string
  read?: boolean
  received_events_url?: string
  ref: string
  releases_url?: string
  repos_url?: string
  site_admin?: boolean
  ssh_url?: string
  stargazers_url?: string
  starred_url?: string
  statuses_url?: string
  subscribers_url?: string
  subscription_url?: string
  subscriptions_url?: string
  svn_url?: string
  tags_url?: string
  teams_url?: string
  timestamp: string
  trees_url?: string
  type?: string
  url?: string
}

export interface ActivityLoadMatch {
  owner: string
  repo: string
}

export interface ActivityListMatch {
  owner: string
  repo: string
  activity_type?: string
  actor?: string
  after?: string
  before?: string
  direction?: string
  per_page?: number
  ref?: string
  time_period?: string
}

export interface ActivityUpdateData {
  owner: string
  repo: string
  activity_type?: string
  actor?: Record<string, any>
  after?: string
  archive_url?: string
  assignees_url?: string
  avatar_url?: string
  before?: string
  blobs_url?: string
  branches_url?: string
  clone_url?: string
  collaborators_url?: string
  comments_url?: string
  commits_url?: string
  compare_url?: string
  contents_url?: string
  contributors_url?: string
  deployments_url?: string
  description?: string
  downloads_url?: string
  events_url?: string
  followers_url?: string
  following_url?: string
  fork?: boolean
  forks_url?: string
  full_name?: string
  gists_url?: string
  git_commits_url?: string
  git_refs_url?: string
  git_tags_url?: string
  git_url?: string
  github_id?: number
  gravatar_id?: string
  homepage?: string
  hooks_url?: string
  html_url?: string
  id?: string
  issue_comment_url?: string
  issue_events_url?: string
  issues_url?: string
  keys_url?: string
  labels_url?: string
  language?: Record<string, any>
  languages_url?: string
  last_read_at?: string
  login?: string
  merges_url?: string
  milestones_url?: string
  mirror_url?: string
  name?: string
  node_id?: string
  notifications_url?: string
  organizations_url?: string
  private?: boolean
  pulls_url?: string
  read?: boolean
  received_events_url?: string
  ref?: string
  releases_url?: string
  repos_url?: string
  site_admin?: boolean
  ssh_url?: string
  stargazers_url?: string
  starred_url?: string
  statuses_url?: string
  subscribers_url?: string
  subscription_url?: string
  subscriptions_url?: string
  svn_url?: string
  tags_url?: string
  teams_url?: string
  timestamp?: string
  trees_url?: string
  type?: string
  url?: string
}

export interface ActivityRemoveMatch {
  thread_id: number
}

export interface Add {
  usernames: any[]
}

export interface AddCreateData {
  enterprise: string
  team_id: string
  usernames: any[]
}

export interface ApiInsightsRouteStat {
  api_route?: string
  http_method?: string
  last_rate_limited_timestamp?: string
  last_request_timestamp?: string
  rate_limited_request_count?: number
  total_request_count?: number
}

export interface ApiInsightsRouteStatListMatch {
  actor_id: number
  actor_type: string
  org: string
  api_route_substring?: string
  direction?: string
  max_timestamp?: string
  min_timestamp: string
  page?: number
  per_page?: number
  sort?: any[]
}

export interface ApiInsightsSubjectStat {
  last_rate_limited_timestamp?: string
  last_request_timestamp?: string
  rate_limited_request_count?: number
  subject_id?: number
  subject_name?: string
  subject_type?: string
  total_request_count?: number
}

export interface ApiInsightsSubjectStatListMatch {
  org_id: string
  direction?: string
  max_timestamp?: string
  min_timestamp: string
  page?: number
  per_page?: number
  sort?: any[]
  subject_name_substring?: string
}

export interface ApiInsightsSummaryStat {
  id?: string
  rate_limited_request_count?: number
  total_request_count?: number
}

export interface ApiInsightsSummaryStatLoadMatch {
  actor_id?: number
  actor_type?: string
  org?: string
  max_timestamp?: string
  min_timestamp: string
  org_id?: string
  user_id?: string
}

export interface ApiInsightsTimeStat {
  rate_limited_request_count?: number
  timestamp?: string
  total_request_count?: number
}

export interface ApiInsightsTimeStatLoadMatch {
  org_id: string
  user_id: string
  max_timestamp?: string
  min_timestamp: string
  timestamp_increment: string
}

export interface ApiInsightsTimeStatListMatch {
  actor_id?: number
  actor_type?: string
  org?: string
  max_timestamp?: string
  min_timestamp: string
  timestamp_increment: string
  org_id?: string
}

export interface ApiInsightsUserStat {
  actor_id?: number
  actor_name?: string
  actor_type?: string
  id?: string
  integration_id?: number
  last_rate_limited_timestamp?: string
  last_request_timestamp?: string
  oauth_application_id?: number
  rate_limited_request_count?: number
  total_request_count?: number
}

export interface ApiInsightsUserStatLoadMatch {
  id: string
  org_id: string
  actor_name_substring?: string
  direction?: string
  max_timestamp?: string
  min_timestamp: string
  page?: number
  per_page?: number
  sort?: any[]
}

export interface ApiOverview {
  actions?: any[]
  actions_macos?: any[]
  api?: any[]
  codespaces?: any[]
  copilot?: any[]
  dependabot?: any[]
  domains?: Record<string, any>
  git?: any[]
  github_enterprise_importer?: any[]
  hooks?: any[]
  importer?: any[]
  packages?: any[]
  pages?: any[]
  ssh_key_fingerprints?: Record<string, any>
  ssh_keys?: any[]
  verifiable_password_authentication: boolean
  web?: any[]
}

export interface ApiOverviewListMatch {
  actions?: any[]
  actions_macos?: any[]
  api?: any[]
  codespaces?: any[]
  copilot?: any[]
  dependabot?: any[]
  domains?: Record<string, any>
  git?: any[]
  github_enterprise_importer?: any[]
  hooks?: any[]
  importer?: any[]
  packages?: any[]
  pages?: any[]
  ssh_key_fingerprints?: Record<string, any>
  ssh_keys?: any[]
  verifiable_password_authentication?: boolean
  web?: any[]
}

export interface App {
  access_tokens_url: string
  account: any
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  anonymous_access_enabled?: boolean
  app_id: number
  app_slug: string
  archive_url: string
  archived: boolean
  assignees_url: string
  blobs_url: string
  branches_url: string
  client_id?: string
  client_secret?: string
  clone_url: string
  code_search_index_status?: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contact_email?: string
  contents_url: string
  contributors_url: string
  created_at?: string
  default_branch: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description?: string
  disabled: boolean
  downloads_url: string
  events?: any[]
  events_url: string
  external_url?: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  has_discussions?: boolean
  has_downloads: boolean
  has_issues: boolean
  has_multiple_single_files?: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url?: string
  id?: number
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: string
  languages_url: string
  license: Record<string, any>
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url: string
  milestones_url: string
  mirror_url: string
  name?: string
  node_id?: string
  notifications_url: string
  open_issues: number
  open_issues_count: number
  owner?: Record<string, any>
  pem?: string
  permissions?: Record<string, any>
  private: boolean
  pulls_url: string
  pushed_at: string
  releases_url: string
  repositories_url: string
  repository_selection: string
  single_file_name: string
  single_file_paths?: any[]
  size: number
  slug?: string
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  starred_at?: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  suspended_at: string
  suspended_by: Record<string, any>
  svn_url: string
  tags_url: string
  target_id: number
  target_type: string
  teams_url: string
  temp_clone_token?: string
  topics?: any[]
  trees_url: string
  updated_at?: string
  url: string
  use_squash_pr_title_as_default?: boolean
  visibility?: string
  watchers: number
  watchers_count: number
  web_commit_signoff_required?: boolean
  webhook_secret?: string
}

export interface AppListMatch {
  page?: number
  per_page?: number
}

export interface AppCreateData {
  code: string
  access_tokens_url: string
  account: any
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  anonymous_access_enabled?: boolean
  app_id: number
  app_slug: string
  archive_url: string
  archived: boolean
  assignees_url: string
  blobs_url: string
  branches_url: string
  client_id?: string
  client_secret?: string
  clone_url: string
  code_search_index_status?: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contact_email?: string
  contents_url: string
  contributors_url: string
  created_at?: string
  default_branch: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description?: string
  disabled: boolean
  downloads_url: string
  events?: any[]
  events_url: string
  external_url?: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  has_discussions?: boolean
  has_downloads: boolean
  has_issues: boolean
  has_multiple_single_files?: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url?: string
  id?: number
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: string
  languages_url: string
  license: Record<string, any>
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url: string
  milestones_url: string
  mirror_url: string
  name?: string
  node_id?: string
  notifications_url: string
  open_issues: number
  open_issues_count: number
  owner?: Record<string, any>
  pem?: string
  permissions?: Record<string, any>
  private: boolean
  pulls_url: string
  pushed_at: string
  releases_url: string
  repositories_url: string
  repository_selection: string
  single_file_name: string
  single_file_paths?: any[]
  size: number
  slug?: string
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  starred_at?: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  suspended_at: string
  suspended_by: Record<string, any>
  svn_url: string
  tags_url: string
  target_id: number
  target_type: string
  teams_url: string
  temp_clone_token?: string
  topics?: any[]
  trees_url: string
  updated_at?: string
  url: string
  use_squash_pr_title_as_default?: boolean
  visibility?: string
  watchers: number
  watchers_count: number
  web_commit_signoff_required?: boolean
  webhook_secret?: string
}

export interface AppUpdateData {
  installation_id: number
  repository_id: number
  access_tokens_url?: string
  account?: any
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  anonymous_access_enabled?: boolean
  app_id?: number
  app_slug?: string
  archive_url?: string
  archived?: boolean
  assignees_url?: string
  blobs_url?: string
  branches_url?: string
  client_id?: string
  client_secret?: string
  clone_url?: string
  code_search_index_status?: Record<string, any>
  collaborators_url?: string
  comments_url?: string
  commits_url?: string
  compare_url?: string
  contact_email?: string
  contents_url?: string
  contributors_url?: string
  created_at?: string
  default_branch?: string
  delete_branch_on_merge?: boolean
  deployments_url?: string
  description?: string
  disabled?: boolean
  downloads_url?: string
  events?: any[]
  events_url?: string
  external_url?: string
  fork?: boolean
  forks?: number
  forks_count?: number
  forks_url?: string
  full_name?: string
  git_commits_url?: string
  git_refs_url?: string
  git_tags_url?: string
  git_url?: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_multiple_single_files?: boolean
  has_pages?: boolean
  has_projects?: boolean
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
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url?: string
  milestones_url?: string
  mirror_url?: string
  name?: string
  node_id?: string
  notifications_url?: string
  open_issues?: number
  open_issues_count?: number
  owner?: Record<string, any>
  pem?: string
  permissions?: Record<string, any>
  private?: boolean
  pulls_url?: string
  pushed_at?: string
  releases_url?: string
  repositories_url?: string
  repository_selection?: string
  single_file_name?: string
  single_file_paths?: any[]
  size?: number
  slug?: string
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url?: string
  stargazers_count?: number
  stargazers_url?: string
  starred_at?: string
  statuses_url?: string
  subscribers_url?: string
  subscription_url?: string
  suspended_at?: string
  suspended_by?: Record<string, any>
  svn_url?: string
  tags_url?: string
  target_id?: number
  target_type?: string
  teams_url?: string
  temp_clone_token?: string
  topics?: any[]
  trees_url?: string
  updated_at?: string
  url?: string
  use_squash_pr_title_as_default?: boolean
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
  webhook_secret?: string
}

export interface AppRemoveMatch {
  installation_id: number
}

export interface Artifact {
  head_branch?: string
  head_repository_id?: number
  head_sha?: string
  id?: number
  repository_id?: number
}

export interface ArtifactLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface Assignee {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface AssigneeListMatch {
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface AuthenticationToken {
  expires_at?: string
  token?: string
}

export interface AuthenticationTokenCreateData {
  org_id: string
  expires_at?: string
  token?: string
}

export interface Authorization {
  access_token: string
  app: Record<string, any>
  created_at: string
  expires_at: string
  fingerprint: string
  hashed_token: string
  id: number
  installation: Record<string, any>
  note: string
  note_url: string
  permissions?: Record<string, any>
  repositories?: any[]
  repository_ids?: any[]
  scopes: any[]
  target?: string
  target_id?: number
  token: string
  token_last_eight: string
  updated_at: string
  url: string
  user: Record<string, any>
}

export interface AuthorizationCreateData {
  application_id: string
  access_token: string
  app: Record<string, any>
  created_at: string
  expires_at: string
  fingerprint: string
  hashed_token: string
  id: number
  installation: Record<string, any>
  note: string
  note_url: string
  permissions?: Record<string, any>
  repositories?: any[]
  repository_ids?: any[]
  scopes: any[]
  target?: string
  target_id?: number
  token: string
  token_last_eight: string
  updated_at: string
  url: string
  user: Record<string, any>
}

export interface AuthorizationUpdateData {
  application_id: string
  access_token?: string
  app?: Record<string, any>
  created_at?: string
  expires_at?: string
  fingerprint?: string
  hashed_token?: string
  id?: number
  installation?: Record<string, any>
  note?: string
  note_url?: string
  permissions?: Record<string, any>
  repositories?: any[]
  repository_ids?: any[]
  scopes?: any[]
  target?: string
  target_id?: number
  token?: string
  token_last_eight?: string
  updated_at?: string
  url?: string
  user?: Record<string, any>
}

export interface Autolink {
  id: number
  is_alphanumeric: boolean
  key_prefix: string
  updated_at?: string
  url_template: string
}

export interface AutolinkLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface AutolinkListMatch {
  owner: string
  repo: string
}

export interface AutolinkCreateData {
  owner: string
  repo: string
  id: number
  is_alphanumeric: boolean
  key_prefix: string
  updated_at?: string
  url_template: string
}

export interface BaseGist {
  comments?: number
  comments_enabled?: boolean
  comments_url?: string
  commits_url?: string
  created_at?: string
  description?: string
  files?: Record<string, any>
  forks?: any[]
  forks_url?: string
  git_pull_url?: string
  git_push_url?: string
  history?: any[]
  html_url?: string
  id?: string
  node_id?: string
  owner?: Record<string, any>
  public?: boolean
  truncated?: boolean
  updated_at?: string
  url?: string
  user?: string
}

export interface BaseGistListMatch {
  page?: number
  per_page?: number
  since?: string
}

export interface BaseGistCreateData {
  gist_id: string
  comments?: number
  comments_enabled?: boolean
  comments_url?: string
  commits_url?: string
  created_at?: string
  description?: string
  files?: Record<string, any>
  forks?: any[]
  forks_url?: string
  git_pull_url?: string
  git_push_url?: string
  history?: any[]
  html_url?: string
  id?: string
  node_id?: string
  owner?: Record<string, any>
  public?: boolean
  truncated?: boolean
  updated_at?: string
  url?: string
  user?: string
}

export interface BillingUsageReport {
  date: string
  discountAmount: number
  grossAmount: number
  netAmount: number
  organizationName: string
  pricePerUnit: number
  product: string
  quantity: number
  repositoryName?: string
  sku: string
  unitType: string
}

export interface BillingUsageReportListMatch {
  org: string
  day?: number
  hour?: number
  month?: number
  year?: number
}

export interface BillingUsageReportUser {
  date: string
  discountAmount: number
  grossAmount: number
  netAmount: number
  pricePerUnit: number
  product: string
  quantity: number
  repositoryName?: string
  sku: string
  unitType: string
}

export interface BillingUsageReportUserListMatch {
  username: string
  day?: number
  hour?: number
  month?: number
  year?: number
}

export interface Blob {
  content: string
  encoding: string
  highlighted_content?: string
  id?: string
  node_id: string
  sha: string
  size: number
  url: string
}

export interface BlobLoadMatch {
  id: string
  owner: string
  repo: string
}

export interface Block {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface BlockListMatch {
  page?: number
  per_page?: number
}

export interface Branch {
  commit: Record<string, any>
  id?: string
  links: Record<string, any>
  name: string
  pattern?: string
  protected: boolean
  protection: Record<string, any>
  protection_url: string
  required_approving_review_count?: number
}

export interface BranchLoadMatch {
  id: string
  owner: string
  repo: string
}

export interface BranchProtection {
  allow_deletions?: Record<string, any>
  allow_force_pushes?: Record<string, any>
  allow_fork_syncing?: Record<string, any>
  block_creations?: Record<string, any>
  enabled?: boolean
  enforce_admins: Record<string, any>
  id?: string
  lock_branch?: Record<string, any>
  name?: string
  protection_url?: string
  required_conversation_resolution?: Record<string, any>
  required_linear_history?: Record<string, any>
  required_pull_request_reviews: Record<string, any>
  required_signatures: Record<string, any>
  required_status_checks: Record<string, any>
  restrictions: Record<string, any>
  url?: string
}

export interface BranchProtectionLoadMatch {
  id: string
  owner: string
  repo: string
}

export interface BranchRestrictionPolicy {
  apps: any[]
  apps_url: string
  teams: any[]
  teams_url: string
  url: string
  users: any[]
  users_url: string
}

export interface BranchRestrictionPolicyListMatch {
  branch_id: string
  owner: string
  repo: string
}

export interface BranchShort {
  commit: Record<string, any>
  name: string
  protected: boolean
}

export interface BranchShortListMatch {
  commit_sha: string
  owner: string
  repo: string
}

export interface BranchWithProtection {
  id?: string
  new_name: string
}

export interface BranchWithProtectionCreateData {
  id: string
  owner: string
  repo: string
  new_name: string

  // Selects a custom action instead of the plain create:
  //   'rename'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Campaign {
  alert_stats: Record<string, any>
  closed_at?: string
  code_scanning_alerts: any[]
  contact_link: string
  created_at: string
  description: string
  ends_at: string
  generate_issues?: boolean
  id?: string
  managers: any[]
  name?: string
  number: number
  published_at?: string
  state: string
  team_managers?: any[]
  updated_at: string
}

export interface CampaignLoadMatch {
  id: number
  org_id: string
}

export interface CampaignListMatch {
  org_id: string
  direction?: string
  page?: number
  per_page?: number
  sort?: string
  state?: string
}

export interface CampaignCreateData {
  org_id: string
  alert_stats: Record<string, any>
  closed_at?: string
  code_scanning_alerts: any[]
  contact_link: string
  created_at: string
  description: string
  ends_at: string
  generate_issues?: boolean
  id?: string
  managers: any[]
  name?: string
  number: number
  published_at?: string
  state: string
  team_managers?: any[]
  updated_at: string
}

export interface CampaignUpdateData {
  id: number
  org_id: string
  alert_stats?: Record<string, any>
  closed_at?: string
  code_scanning_alerts?: any[]
  contact_link?: string
  created_at?: string
  description?: string
  ends_at?: string
  generate_issues?: boolean
  managers?: any[]
  name?: string
  number?: number
  published_at?: string
  state?: string
  team_managers?: any[]
  updated_at?: string
}

export interface CampaignRemoveMatch {
  id: number
  org_id: string
}

export interface Check {
  after: string
  app: Record<string, any>
  before: string
  check_runs_url: string
  check_suite: Record<string, any>
  completed_at: string
  conclusion: string
  created_at: string
  deployment: Record<string, any>
  details_url: string
  external_id: string
  head_branch: string
  head_commit: Record<string, any>
  head_sha: string
  html_url: string
  id: number
  latest_check_runs_count: number
  name: string
  node_id: string
  output: Record<string, any>
  pull_requests: any[]
  repository: Record<string, any>
  rerequestable?: boolean
  runs_rerequestable?: boolean
  started_at: string
  status: string
  updated_at: string
  url: string
}

export interface CheckListMatch {
  owner: string
  ref?: string
  repo: string
  app_id?: number
  check_name?: string
  filter?: string
  page?: number
  per_page?: number
  status?: string
  check_suite_id?: number
}

export interface CheckAnnotation {
  annotation_level: string
  blob_href: string
  end_column: number
  end_line: number
  message: string
  path: string
  raw_details: string
  start_column: number
  start_line: number
  title: string
}

export interface CheckAnnotationListMatch {
  check_run_id: number
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface CheckAutomatedSecurityFix {
  enabled: boolean
  paused: boolean
}

export interface CheckAutomatedSecurityFixLoadMatch {
  owner: string
  repo: string
}

export interface CheckRun {
  actions?: any[]
  app: Record<string, any>
  check_suite: Record<string, any>
  completed_at: string
  conclusion: string
  deployment: Record<string, any>
  details_url: string
  external_id: string
  head_sha: string
  html_url: string
  id: number
  name: string
  node_id: string
  output: Record<string, any>
  pull_requests: any[]
  started_at: string
  status: string
  url: string
}

export interface CheckRunLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface CheckRunCreateData {
  owner: string
  repo: string
  actions?: any[]
  app: Record<string, any>
  check_suite: Record<string, any>
  completed_at: string
  conclusion: string
  deployment: Record<string, any>
  details_url: string
  external_id: string
  head_sha: string
  html_url: string
  id: number
  name: string
  node_id: string
  output: Record<string, any>
  pull_requests: any[]
  started_at: string
  status: string
  url: string
}

export interface CheckRunUpdateData {
  id: number
  owner: string
  repo: string
  actions?: any[]
  app?: Record<string, any>
  check_suite?: Record<string, any>
  completed_at?: string
  conclusion?: string
  deployment?: Record<string, any>
  details_url?: string
  external_id?: string
  head_sha?: string
  html_url?: string
  name?: string
  node_id?: string
  output?: Record<string, any>
  pull_requests?: any[]
  started_at?: string
  status?: string
  url?: string
}

export interface CheckSuite {
  after: string
  app: Record<string, any>
  before: string
  check_runs_url: string
  conclusion: string
  created_at: string
  head_branch: string
  head_commit: Record<string, any>
  head_sha: string
  id: number
  latest_check_runs_count: number
  node_id: string
  pull_requests: any[]
  repository: Record<string, any>
  rerequestable?: boolean
  runs_rerequestable?: boolean
  status: string
  updated_at: string
  url: string
}

export interface CheckSuiteLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface CheckSuiteCreateData {
  owner: string
  repo: string
  after: string
  app: Record<string, any>
  before: string
  check_runs_url: string
  conclusion: string
  created_at: string
  head_branch: string
  head_commit: Record<string, any>
  head_sha: string
  id: number
  latest_check_runs_count: number
  node_id: string
  pull_requests: any[]
  repository: Record<string, any>
  rerequestable?: boolean
  runs_rerequestable?: boolean
  status: string
  updated_at: string
  url: string
}

export interface CheckSuitePreference {
  auto_trigger_checks?: any[]
  preferences: Record<string, any>
  repository: Record<string, any>
}

export interface CheckSuitePreferenceUpdateData {
  owner: string
  repo: string
  auto_trigger_checks?: any[]
  preferences?: Record<string, any>
  repository?: Record<string, any>
}

export interface Classroom {
  archived: boolean
  avatar_url: string
  html_url: string
  id: number
  login: string
  name: string
  node_id: string
  url: string
}

export interface ClassroomLoadMatch {
  id: number
}

export interface ClassroomListMatch {
  page?: number
  per_page?: number
}

export interface ClassroomAcceptedAssignment {
  assignment: Record<string, any>
  commit_count: number
  grade: string
  id: number
  passing: boolean
  repository: Record<string, any>
  students: any[]
  submitted: boolean
}

export interface ClassroomAcceptedAssignmentListMatch {
  assignment_id: number
  page?: number
  per_page?: number
}

export interface ClassroomAssignment {
  accepted: number
  classroom: Record<string, any>
  deadline: string
  editor: string
  feedback_pull_requests_enabled: boolean
  id: number
  invitations_enabled: boolean
  invite_link: string
  language: string
  max_members: number
  max_teams: number
  passing: number
  public_repo: boolean
  slug: string
  starter_code_repository: Record<string, any>
  students_are_repo_admins: boolean
  submitted: number
  title: string
  type: string
}

export interface ClassroomAssignmentLoadMatch {
  id: number
}

export interface ClassroomAssignmentGrade {
  assignment_name: string
  assignment_url: string
  github_username: string
  group_name?: string
  points_available: number
  points_awarded: number
  roster_identifier: string
  starter_code_url: string
  student_repository_name: string
  student_repository_url: string
  submission_timestamp: string
}

export interface ClassroomAssignmentGradeListMatch {
  assignment_id: number
}

export interface Clone {
  count: number
  timestamp: string
  uniques: number
}

export interface CloneListMatch {
  owner: string
  repo: string
  per?: string
}

export interface CodeFrequency {
}

export interface CodeFrequencyListMatch {
  owner: string
  repo: string
}

export interface CodeFrequencyStat {
}

export interface CodeFrequencyStatListMatch {
  owner: string
  repo: string
}

export interface CodeOfConduct {
  body?: string
  html_url: string
  key: string
  name: string
  url: string
}

export interface CodeOfConductLoadMatch {
  key: string
}

export interface CodeOfConductListMatch {
  body?: string
  html_url?: string
  key?: string
  name?: string
  url?: string
}

export interface CodeScanning {
  checkout_uri?: string
  commit_sha: string
  ref: string
  sarif: string
  started_at?: string
  tool_name?: string
  validate?: boolean
}

export interface CodeScanningCreateData {
  owner: string
  repo: string
  checkout_uri?: string
  commit_sha: string
  ref: string
  sarif: string
  started_at?: string
  tool_name?: string
  validate?: boolean

  // Selects a custom action instead of the plain create:
  //   'sarif'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CodeScanningRemoveMatch {
  language: string
  owner: string
  repo: string
}

export interface CodeScanningAlert {
  create_request?: boolean
  created_at: string
  dismissal_approved_by: Record<string, any>
  dismissed_at: string
  dismissed_by: Record<string, any>
  dismissed_comment?: string
  dismissed_reason: string
  fixed_at?: string
  html_url: string
  id?: string
  instances_url: string
  most_recent_instance: Record<string, any>
  number: number
  rule: Record<string, any>
  state: string
  tool: Record<string, any>
  updated_at?: string
  url: string
}

export interface CodeScanningAlertLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface CodeScanningAlertUpdateData {
  id: number
  owner: string
  repo: string
  create_request?: boolean
  created_at?: string
  dismissal_approved_by?: Record<string, any>
  dismissed_at?: string
  dismissed_by?: Record<string, any>
  dismissed_comment?: string
  dismissed_reason?: string
  fixed_at?: string
  html_url?: string
  instances_url?: string
  most_recent_instance?: Record<string, any>
  number?: number
  rule?: Record<string, any>
  state?: string
  tool?: Record<string, any>
  updated_at?: string
  url?: string
}

export interface CodeScanningAlertInstance {
  analysis_key?: string
  category?: string
  classifications?: any[]
  commit_sha?: string
  environment?: string
  html_url?: string
  location?: Record<string, any>
  message?: Record<string, any>
  ref?: string
  state?: string
}

export interface CodeScanningAlertInstanceListMatch {
  alert_number: number
  owner: string
  repo: string
  page?: number
  per_page?: number
  pr?: number
  ref?: string
}

export interface CodeScanningAlertItem {
  created_at: string
  dismissal_approved_by: Record<string, any>
  dismissed_at: string
  dismissed_by: Record<string, any>
  dismissed_comment?: string
  dismissed_reason: string
  fixed_at?: string
  html_url: string
  instances_url: string
  most_recent_instance: Record<string, any>
  number: number
  rule: Record<string, any>
  state: string
  tool: Record<string, any>
  updated_at?: string
  url: string
}

export interface CodeScanningAlertItemListMatch {
  owner: string
  repo: string
  after?: string
  before?: string
  direction?: string
  page?: number
  per_page?: number
  pr?: number
  ref?: string
  severity?: string
  sort?: string
  state?: string
  tool_guid?: string
  tool_name?: string
}

export interface CodeScanningAnalysi {
  analysis_key: string
  category?: string
  commit_sha: string
  created_at: string
  deletable: boolean
  environment: string
  error: string
  guid?: string
  id: number
  name?: string
  ref: string
  results_count: number
  rules_count: number
  sarif_id: string
  tool: Record<string, any>
  url: string
  version?: string
  warning: string
}

export interface CodeScanningAnalysiLoadMatch {
  analysis_id: number
  owner: string
  repo: string
}

export interface CodeScanningAnalysiListMatch {
  owner: string
  repo: string
  direction?: string
  page?: number
  per_page?: number
  pr?: number
  ref?: string
  sarif_id?: string
  sort?: string
  tool_guid?: string
  tool_name?: string
}

export interface CodeScanningAnalysisDeletion {
}

export interface CodeScanningAnalysisDeletionRemoveMatch {
  analysis_id: number
  owner: string
  repo: string
  confirm_delete?: string
}

export interface CodeScanningAutofix {
  description: string
  started_at: string
  status: string
}

export interface CodeScanningAutofixLoadMatch {
  alert_number: number
  owner: string
  repo: string
}

export interface CodeScanningAutofixCreateData {
  alert_number: number
  owner: string
  repo: string
  description: string
  started_at: string
  status: string
}

export interface CodeScanningAutofixCommit {
  message?: string
  target_ref?: string
}

export interface CodeScanningAutofixCommitCreateData {
  alert_id: number
  owner: string
  repo: string
  message?: string
  target_ref?: string
}

export interface CodeScanningCodeqlDatabase {
  avatar_url: string
  commit_oid?: string
  content_type: string
  created_at: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  language: string
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  size: number
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  updated_at: string
  uploader: Record<string, any>
  url: string
  user_view_type?: string
}

export interface CodeScanningCodeqlDatabaseLoadMatch {
  language: string
  owner: string
  repo: string
}

export interface CodeScanningCodeqlDatabaseListMatch {
  owner: string
  repo: string
}

export interface CodeScanningDefaultSetup {
  languages?: any[]
  query_suite?: string
  runner_label?: string
  runner_type?: string
  schedule?: string
  state?: string
  threat_model?: string
  updated_at?: string
}

export interface CodeScanningDefaultSetupListMatch {
  owner: string
  repo: string
}

export interface CodeScanningOrganizationAlertItem {
  created_at: string
  dismissal_approved_by: Record<string, any>
  dismissed_at: string
  dismissed_by: Record<string, any>
  dismissed_comment?: string
  dismissed_reason: string
  fixed_at?: string
  html_url: string
  instances_url: string
  most_recent_instance: Record<string, any>
  number: number
  repository: Record<string, any>
  rule: Record<string, any>
  state: string
  tool: Record<string, any>
  updated_at?: string
  url: string
}

export interface CodeScanningOrganizationAlertItemListMatch {
  org_id: string
  after?: string
  before?: string
  direction?: string
  page?: number
  per_page?: number
  severity?: string
  sort?: string
  state?: string
  tool_guid?: string
  tool_name?: string
}

export interface CodeScanningSarifsStatus {
  analyses_url?: string
  errors?: any[]
  processing_status?: string
}

export interface CodeScanningSarifsStatusLoadMatch {
  owner: string
  repo: string
  sarif_id: string
}

export interface CodeScanningVariantAnalysi {
  actions_workflow_run_id?: number
  actor: Record<string, any>
  completed_at?: string
  controller_repo: Record<string, any>
  created_at?: string
  failure_reason?: string
  id: number
  language: string
  query_language: string
  query_pack: string
  query_pack_url: string
  repositories?: any[]
  repository_lists?: any[]
  repository_owners?: any[]
  scanned_repositories?: any[]
  skipped_repositories: Record<string, any>
  status: string
  updated_at?: string
}

export interface CodeScanningVariantAnalysiLoadMatch {
  codeql_variant_analysis_id: number
  owner: string
  repo: string
}

export interface CodeScanningVariantAnalysiCreateData {
  owner: string
  repo: string
  actions_workflow_run_id?: number
  actor: Record<string, any>
  completed_at?: string
  controller_repo: Record<string, any>
  created_at?: string
  failure_reason?: string
  id: number
  language: string
  query_language: string
  query_pack: string
  query_pack_url: string
  repositories?: any[]
  repository_lists?: any[]
  repository_owners?: any[]
  scanned_repositories?: any[]
  skipped_repositories: Record<string, any>
  status: string
  updated_at?: string
}

export interface CodeScanningVariantAnalysisRepoTask {
  archive_url: string
  assignees_url: string
  blobs_url: string
  branches_url: string
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  deployments_url: string
  description: string
  downloads_url: string
  events_url: string
  fork: boolean
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  github_id: number
  hooks_url: string
  html_url: string
  id: string
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  languages_url: string
  merges_url: string
  milestones_url: string
  name: string
  node_id: string
  notifications_url: string
  owner: Record<string, any>
  private: boolean
  pulls_url: string
  releases_url: string
  stargazers_url: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  tags_url: string
  teams_url: string
  trees_url: string
  url: string
}

export interface CodeScanningVariantAnalysisRepoTaskLoadMatch {
  codeql_variant_analysis_id: number
  owner: string
  repo: string
  repo_name: string
  repo_owner: string
}

export interface CodeSecurity {
  advanced_security?: string
  code_scanning_default_setup?: string
  code_scanning_default_setup_options?: Record<string, any>
  code_scanning_delegated_alert_dismissal?: string
  code_scanning_options?: Record<string, any>
  created_at?: string
  default_for_new_repos?: string
  dependabot_alerts?: string
  dependabot_security_updates?: string
  dependency_graph?: string
  dependency_graph_autosubmit_action?: string
  dependency_graph_autosubmit_action_options?: Record<string, any>
  description?: string
  enforcement?: string
  html_url?: string
  id?: number
  name?: string
  private_vulnerability_reporting?: string
  secret_scanning?: string
  secret_scanning_delegated_alert_dismissal?: string
  secret_scanning_delegated_bypass?: string
  secret_scanning_delegated_bypass_options?: Record<string, any>
  secret_scanning_generic_secrets?: string
  secret_scanning_non_provider_patterns?: string
  secret_scanning_push_protection?: string
  secret_scanning_validity_checks?: string
  target_type?: string
  updated_at?: string
  url?: string
}

export interface CodeSecurityUpdateData {
  configuration_id: number
  enterprise?: string
  org_id?: string
  advanced_security?: string
  code_scanning_default_setup?: string
  code_scanning_default_setup_options?: Record<string, any>
  code_scanning_delegated_alert_dismissal?: string
  code_scanning_options?: Record<string, any>
  created_at?: string
  default_for_new_repos?: string
  dependabot_alerts?: string
  dependabot_security_updates?: string
  dependency_graph?: string
  dependency_graph_autosubmit_action?: string
  dependency_graph_autosubmit_action_options?: Record<string, any>
  description?: string
  enforcement?: string
  html_url?: string
  id?: number
  name?: string
  private_vulnerability_reporting?: string
  secret_scanning?: string
  secret_scanning_delegated_alert_dismissal?: string
  secret_scanning_delegated_bypass?: string
  secret_scanning_delegated_bypass_options?: Record<string, any>
  secret_scanning_generic_secrets?: string
  secret_scanning_non_provider_patterns?: string
  secret_scanning_push_protection?: string
  secret_scanning_validity_checks?: string
  target_type?: string
  updated_at?: string
  url?: string
}

export interface CodeSecurityRemoveMatch {
  configuration_id: number
  enterprise: string
}

export interface CodeSecurityConfiguration {
  advanced_security?: string
  code_scanning_default_setup?: string
  code_scanning_default_setup_options?: Record<string, any>
  code_scanning_delegated_alert_dismissal?: string
  code_scanning_options?: Record<string, any>
  code_security?: string
  created_at?: string
  dependabot_alerts?: string
  dependabot_security_updates?: string
  dependency_graph?: string
  dependency_graph_autosubmit_action?: string
  dependency_graph_autosubmit_action_options?: Record<string, any>
  description?: string
  enforcement?: string
  html_url?: string
  id?: number
  name?: string
  private_vulnerability_reporting?: string
  scope: string
  secret_protection?: string
  secret_scanning?: string
  secret_scanning_delegated_alert_dismissal?: string
  secret_scanning_delegated_bypass?: string
  secret_scanning_delegated_bypass_options?: Record<string, any>
  secret_scanning_generic_secrets?: string
  secret_scanning_non_provider_patterns?: string
  secret_scanning_push_protection?: string
  secret_scanning_validity_checks?: string
  selected_repository_ids?: any[]
  target_type?: string
  updated_at?: string
  url?: string
}

export interface CodeSecurityConfigurationLoadMatch {
  enterprise: string
  id: number
}

export interface CodeSecurityConfigurationListMatch {
  org_id: string
  after?: string
  before?: string
  per_page?: number
  target_type?: string
}

export interface CodeSecurityConfigurationCreateData {
  enterprise: string
  advanced_security?: string
  code_scanning_default_setup?: string
  code_scanning_default_setup_options?: Record<string, any>
  code_scanning_delegated_alert_dismissal?: string
  code_scanning_options?: Record<string, any>
  code_security?: string
  created_at?: string
  dependabot_alerts?: string
  dependabot_security_updates?: string
  dependency_graph?: string
  dependency_graph_autosubmit_action?: string
  dependency_graph_autosubmit_action_options?: Record<string, any>
  description?: string
  enforcement?: string
  html_url?: string
  id?: number
  name?: string
  private_vulnerability_reporting?: string
  scope: string
  secret_protection?: string
  secret_scanning?: string
  secret_scanning_delegated_alert_dismissal?: string
  secret_scanning_delegated_bypass?: string
  secret_scanning_delegated_bypass_options?: Record<string, any>
  secret_scanning_generic_secrets?: string
  secret_scanning_non_provider_patterns?: string
  secret_scanning_push_protection?: string
  secret_scanning_validity_checks?: string
  selected_repository_ids?: any[]
  target_type?: string
  updated_at?: string
  url?: string

  // Selects a custom action instead of the plain create:
  //   'attach' | 'attach'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CodeSecurityConfigurationUpdateData {
  enterprise?: string
  id: number
  org_id?: string
  advanced_security?: string
  code_scanning_default_setup?: string
  code_scanning_default_setup_options?: Record<string, any>
  code_scanning_delegated_alert_dismissal?: string
  code_scanning_options?: Record<string, any>
  code_security?: string
  created_at?: string
  dependabot_alerts?: string
  dependabot_security_updates?: string
  dependency_graph?: string
  dependency_graph_autosubmit_action?: string
  dependency_graph_autosubmit_action_options?: Record<string, any>
  description?: string
  enforcement?: string
  html_url?: string
  name?: string
  private_vulnerability_reporting?: string
  scope?: string
  secret_protection?: string
  secret_scanning?: string
  secret_scanning_delegated_alert_dismissal?: string
  secret_scanning_delegated_bypass?: string
  secret_scanning_delegated_bypass_options?: Record<string, any>
  secret_scanning_generic_secrets?: string
  secret_scanning_non_provider_patterns?: string
  secret_scanning_push_protection?: string
  secret_scanning_validity_checks?: string
  selected_repository_ids?: any[]
  target_type?: string
  updated_at?: string
  url?: string
}

export interface CodeSecurityConfigurationRepository {
  repository: Record<string, any>
  status?: string
}

export interface CodeSecurityConfigurationRepositoryListMatch {
  configuration_id: number
  enterprise?: string
  after?: string
  before?: string
  per_page?: number
  status?: string
  org_id?: string
}

export interface CodeSecurityDefaultConfiguration {
  configuration?: Record<string, any>
  default_for_new_repos?: any
}

export interface CodeSecurityDefaultConfigurationListMatch {
  enterprise: string
}

export interface CodeownersError {
  column: number
  kind: string
  line: number
  message: string
  path: string
  source?: string
  suggestion?: string
}

export interface CodeownersErrorListMatch {
  owner: string
  repo: string
  ref?: string
}

export interface Codespace {
  accepted: boolean
  allow_forking?: boolean
  archive_url: string
  archived?: boolean
  assignees_url: string
  billable_owner: Record<string, any>
  blobs_url: string
  branch?: string
  branches_url: string
  client_ip?: string
  clone_url?: string
  code_of_conduct: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  completed_at?: string
  contents_url: string
  contributors_url: string
  cpus: number
  created_at: string
  custom_properties?: Record<string, any>
  default_branch?: string
  defaults: Record<string, any>
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  devcontainer_path?: string
  disabled?: boolean
  display_name?: string
  downloads_url: string
  encrypted_value?: string
  environment_id: string
  events_url: string
  export_url?: string
  fork: boolean
  forks?: number
  forks_count?: number
  forks_url: string
  full_name: string
  geo?: string
  git_commits_url: string
  git_refs_url: string
  git_status: Record<string, any>
  git_tags_url: string
  git_url?: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url: string
  html_url?: string
  id?: string
  idle_timeout_minutes: number
  idle_timeout_notice?: string
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  key: string
  key_id: string
  keys_url: string
  labels_url: string
  language?: string
  languages_url: string
  last_known_stop_notice?: string
  last_used_at: string
  license?: Record<string, any>
  location: string
  machine: Record<string, any>
  machines_url: string
  memory_in_bytes: number
  merges_url: string
  milestones_url: string
  mirror_url?: string
  multi_repo_permissions_opt_out?: boolean
  name: string
  network_count?: number
  node_id: string
  notifications_url: string
  open_issues?: number
  open_issues_count?: number
  operating_system: string
  owner: Record<string, any>
  path: string
  pending_operation?: boolean
  pending_operation_disabled_reason?: string
  permissions?: Record<string, any>
  prebuild: boolean
  prebuild_availability: string
  private?: boolean
  publish_url?: string
  pulls_url: string
  pushed_at?: string
  recent_folders: any[]
  ref?: string
  releases_url: string
  repository: Record<string, any>
  retention_expires_at?: string
  retention_period_minutes?: number
  role_name?: string
  runtime_constraints?: Record<string, any>
  security_and_analysis?: Record<string, any>
  selected_repositories_url?: string
  selected_repository_ids?: any[]
  selected_usernames: any[]
  sha?: string
  size?: number
  ssh_url?: string
  stargazers_count?: number
  stargazers_url: string
  start_url: string
  state?: string
  statuses_url: string
  stop_url: string
  storage_in_bytes: number
  subscribers_count?: number
  subscribers_url: string
  subscription_url: string
  svn_url?: string
  tags_url: string
  teams_url: string
  temp_clone_token?: string
  template?: string
  title?: string
  topics?: any[]
  trees_url: string
  updated_at: string
  url?: string
  visibility: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
  web_url: string
  working_directory?: string
}

export interface CodespaceLoadMatch {
  id: string

  // Selects a custom action instead of the plain load:
  //   'new' | 'permissions_check'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CodespaceListMatch {
  page?: number
  per_page?: number
  repository_id?: number

  // Selects a custom action instead of the plain list:
  //   'devcontainer' | 'machine' | 'machine' | 'secret' | 'secret' | 'secret'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CodespaceCreateData {
  accepted: boolean
  allow_forking?: boolean
  archive_url: string
  archived?: boolean
  assignees_url: string
  billable_owner: Record<string, any>
  blobs_url: string
  branch?: string
  branches_url: string
  client_ip?: string
  clone_url?: string
  code_of_conduct: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  completed_at?: string
  contents_url: string
  contributors_url: string
  cpus: number
  created_at: string
  custom_properties?: Record<string, any>
  default_branch?: string
  defaults: Record<string, any>
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  devcontainer_path?: string
  disabled?: boolean
  display_name?: string
  downloads_url: string
  encrypted_value?: string
  environment_id: string
  events_url: string
  export_url?: string
  fork: boolean
  forks?: number
  forks_count?: number
  forks_url: string
  full_name: string
  geo?: string
  git_commits_url: string
  git_refs_url: string
  git_status: Record<string, any>
  git_tags_url: string
  git_url?: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url: string
  html_url?: string
  id?: string
  idle_timeout_minutes: number
  idle_timeout_notice?: string
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  key: string
  key_id: string
  keys_url: string
  labels_url: string
  language?: string
  languages_url: string
  last_known_stop_notice?: string
  last_used_at: string
  license?: Record<string, any>
  location: string
  machine: Record<string, any>
  machines_url: string
  memory_in_bytes: number
  merges_url: string
  milestones_url: string
  mirror_url?: string
  multi_repo_permissions_opt_out?: boolean
  name: string
  network_count?: number
  node_id: string
  notifications_url: string
  open_issues?: number
  open_issues_count?: number
  operating_system: string
  owner: Record<string, any>
  path: string
  pending_operation?: boolean
  pending_operation_disabled_reason?: string
  permissions?: Record<string, any>
  prebuild: boolean
  prebuild_availability: string
  private?: boolean
  publish_url?: string
  pulls_url: string
  pushed_at?: string
  recent_folders: any[]
  ref?: string
  releases_url: string
  repository: Record<string, any>
  retention_expires_at?: string
  retention_period_minutes?: number
  role_name?: string
  runtime_constraints?: Record<string, any>
  security_and_analysis?: Record<string, any>
  selected_repositories_url?: string
  selected_repository_ids?: any[]
  selected_usernames: any[]
  sha?: string
  size?: number
  ssh_url?: string
  stargazers_count?: number
  stargazers_url: string
  start_url: string
  state?: string
  statuses_url: string
  stop_url: string
  storage_in_bytes: number
  subscribers_count?: number
  subscribers_url: string
  subscription_url: string
  svn_url?: string
  tags_url: string
  teams_url: string
  temp_clone_token?: string
  template?: string
  title?: string
  topics?: any[]
  trees_url: string
  updated_at: string
  url?: string
  visibility: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
  web_url: string
  working_directory?: string

  // Selects a custom action instead of the plain create:
  //   'export' | 'publish' | 'start' | 'stop' | 'stop'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CodespaceUpdateData {
  secret_name: string
  accepted?: boolean
  allow_forking?: boolean
  archive_url?: string
  archived?: boolean
  assignees_url?: string
  billable_owner?: Record<string, any>
  blobs_url?: string
  branch?: string
  branches_url?: string
  client_ip?: string
  clone_url?: string
  code_of_conduct?: Record<string, any>
  collaborators_url?: string
  comments_url?: string
  commits_url?: string
  compare_url?: string
  completed_at?: string
  contents_url?: string
  contributors_url?: string
  cpus?: number
  created_at?: string
  custom_properties?: Record<string, any>
  default_branch?: string
  defaults?: Record<string, any>
  delete_branch_on_merge?: boolean
  deployments_url?: string
  description?: string
  devcontainer_path?: string
  disabled?: boolean
  display_name?: string
  downloads_url?: string
  encrypted_value?: string
  environment_id?: string
  events_url?: string
  export_url?: string
  fork?: boolean
  forks?: number
  forks_count?: number
  forks_url?: string
  full_name?: string
  geo?: string
  git_commits_url?: string
  git_refs_url?: string
  git_status?: Record<string, any>
  git_tags_url?: string
  git_url?: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url?: string
  html_url?: string
  id?: string
  idle_timeout_minutes?: number
  idle_timeout_notice?: string
  is_template?: boolean
  issue_comment_url?: string
  issue_events_url?: string
  issues_url?: string
  key?: string
  key_id?: string
  keys_url?: string
  labels_url?: string
  language?: string
  languages_url?: string
  last_known_stop_notice?: string
  last_used_at?: string
  license?: Record<string, any>
  location?: string
  machine?: Record<string, any>
  machines_url?: string
  memory_in_bytes?: number
  merges_url?: string
  milestones_url?: string
  mirror_url?: string
  multi_repo_permissions_opt_out?: boolean
  name?: string
  network_count?: number
  node_id?: string
  notifications_url?: string
  open_issues?: number
  open_issues_count?: number
  operating_system?: string
  owner?: Record<string, any>
  path?: string
  pending_operation?: boolean
  pending_operation_disabled_reason?: string
  permissions?: Record<string, any>
  prebuild?: boolean
  prebuild_availability?: string
  private?: boolean
  publish_url?: string
  pulls_url?: string
  pushed_at?: string
  recent_folders?: any[]
  ref?: string
  releases_url?: string
  repository?: Record<string, any>
  retention_expires_at?: string
  retention_period_minutes?: number
  role_name?: string
  runtime_constraints?: Record<string, any>
  security_and_analysis?: Record<string, any>
  selected_repositories_url?: string
  selected_repository_ids?: any[]
  selected_usernames?: any[]
  sha?: string
  size?: number
  ssh_url?: string
  stargazers_count?: number
  stargazers_url?: string
  start_url?: string
  state?: string
  statuses_url?: string
  stop_url?: string
  storage_in_bytes?: number
  subscribers_count?: number
  subscribers_url?: string
  subscription_url?: string
  svn_url?: string
  tags_url?: string
  teams_url?: string
  temp_clone_token?: string
  template?: string
  title?: string
  topics?: any[]
  trees_url?: string
  updated_at?: string
  url?: string
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
  web_url?: string
  working_directory?: string

  // Selects a custom action instead of the plain update:
  //   'access'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CodespaceRemoveMatch {
  id: string
}

export interface Collaborator {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  permissions: Record<string, any>
  received_events_url: string
  repos_url: string
  role_name: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface CollaboratorListMatch {
  project_id: number
  affiliation?: string
  page?: number
  per_page?: number
}

export interface CombinedBillingUsage {
  days_left_in_billing_cycle: number
  estimated_paid_storage_for_month: number
  estimated_storage_for_month: number
}

export interface CombinedBillingUsageLoadMatch {
  org_id: string
}

export interface CombinedCommitStatus {
  avatar_url: string
  context: string
  created_at: string
  description: string
  id: number
  node_id: string
  required?: boolean
  state: string
  target_url: string
  updated_at: string
  url: string
}

export interface CombinedCommitStatusListMatch {
  owner: string
  ref: string
  repo: string
  page?: number
  per_page?: number
}

export interface Commit {
  author: any
  base: string
  comments_url: string
  commit: Record<string, any>
  commit_message?: string
  committer: any
  files?: any[]
  head: string
  html_url: string
  id?: string
  node_id: string
  parents: any[]
  sha: string
  stats?: Record<string, any>
  url: string
}

export interface CommitLoadMatch {
  id: string
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface CommitListMatch {
  owner: string
  repo: string
  author?: string
  committer?: string
  page?: number
  path?: string
  per_page?: number
  sha?: string
  since?: string
  until?: string
  pull_number?: number
}

export interface CommitCreateData {
  owner: string
  repo: string
  author: any
  base: string
  comments_url: string
  commit: Record<string, any>
  commit_message?: string
  committer: any
  files?: any[]
  head: string
  html_url: string
  id?: string
  node_id: string
  parents: any[]
  sha: string
  stats?: Record<string, any>
  url: string
}

export interface CommitActivity {
  days: any[]
  total: number
  week: number
}

export interface CommitActivityListMatch {
  owner: string
  repo: string
}

export interface CommitComment {
  author_association: string
  body: string
  commit_id: string
  created_at: string
  html_url: string
  id: number
  line: number
  node_id: string
  path: string
  position: number
  reactions: Record<string, any>
  updated_at: string
  url: string
  user: Record<string, any>
}

export interface CommitCommentLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface CommitCommentListMatch {
  commit_sha?: string
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface CommitCommentCreateData {
  commit_sha: string
  owner: string
  repo: string
  author_association: string
  body: string
  commit_id: string
  created_at: string
  html_url: string
  id: number
  line: number
  node_id: string
  path: string
  position: number
  reactions: Record<string, any>
  updated_at: string
  url: string
  user: Record<string, any>
}

export interface CommitCommentUpdateData {
  id: number
  owner: string
  repo: string
  author_association?: string
  body?: string
  commit_id?: string
  created_at?: string
  html_url?: string
  line?: number
  node_id?: string
  path?: string
  position?: number
  reactions?: Record<string, any>
  updated_at?: string
  url?: string
  user?: Record<string, any>
}

export interface CommitComparison {
  ahead_by: number
  base_commit: Record<string, any>
  behind_by: number
  commits: any[]
  diff_url: string
  files?: any[]
  html_url: string
  merge_base_commit: Record<string, any>
  patch_url: string
  permalink_url: string
  status: string
  total_commits: number
  url: string
}

export interface CommitComparisonLoadMatch {
  basehead: string
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface CommunityProfile {
  code_of_conduct: Record<string, any>
  code_of_conduct_file: Record<string, any>
  contributing: Record<string, any>
  issue_template: Record<string, any>
  license: Record<string, any>
  pull_request_template: Record<string, any>
  readme: Record<string, any>
}

export interface CommunityProfileLoadMatch {
  owner: string
  repo: string
}

export interface ContentFile {
  git: string
  html: string
  self: string
}

export interface ContentFileLoadMatch {
  dir?: string
  owner: string
  repo: string
  ref?: string
}

export interface ContentTraffic {
  count: number
  path: string
  title: string
  uniques: number
}

export interface ContentTrafficListMatch {
  owner: string
  repo: string
}

export interface Contributor {
  author: Record<string, any>
  avatar_url?: string
  contributions: number
  email?: string
  events_url?: string
  followers_url?: string
  following_url?: string
  gists_url?: string
  gravatar_id?: string
  html_url?: string
  id?: number
  login?: string
  name?: string
  node_id?: string
  organizations_url?: string
  received_events_url?: string
  repos_url?: string
  site_admin?: boolean
  starred_url?: string
  subscriptions_url?: string
  total: number
  type: string
  url?: string
  user_view_type?: string
  weeks: any[]
}

export interface ContributorListMatch {
  owner: string
  repo: string
  anon?: string
  page?: number
  per_page?: number
}

export interface Copilot {
  assignee: Record<string, any>
  assigning_team?: any
  created_at: string
  last_activity_at?: string
  last_activity_editor?: string
  last_authenticated_at?: string
  organization: Record<string, any>
  pending_cancellation_date?: string
  plan_type?: string
  selected_teams: any[]
  selected_usernames: any[]
  updated_at?: string
}

export interface CopilotLoadMatch {
  org_id: string
  username: string
}

export interface CopilotListMatch {
  org_id: string
  page?: number
  per_page?: number
}

export interface CopilotCreateData {
  org_id: string
  assignee: Record<string, any>
  assigning_team?: any
  created_at: string
  last_activity_at?: string
  last_activity_editor?: string
  last_authenticated_at?: string
  organization: Record<string, any>
  pending_cancellation_date?: string
  plan_type?: string
  selected_teams: any[]
  selected_usernames: any[]
  updated_at?: string
}

export interface CopilotRemoveMatch {
  org_id: string
}

export interface CopilotOrganizationDetail {
  active_this_cycle?: number
  added_this_cycle?: number
  inactive_this_cycle?: number
  pending_cancellation?: number
  pending_invitation?: number
  total?: number
}

export interface CopilotOrganizationDetailLoadMatch {
  org_id: string
}

export interface CopilotUsageMetricsDay {
  copilot_dotcom_chat?: Record<string, any>
  copilot_dotcom_pull_requests?: Record<string, any>
  copilot_ide_chat?: Record<string, any>
  copilot_ide_code_completions?: Record<string, any>
  date: string
  total_active_users?: number
  total_engaged_users?: number
}

export interface CopilotUsageMetricsDayListMatch {
  org_id: string
  team_id?: string
  page?: number
  per_page?: number
  since?: string
  until?: string
}

export interface Credential {
  credentials: any[]
}

export interface CredentialCreateData {
  credentials: any[]

  // Selects a custom action instead of the plain create:
  //   'revoke'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomProperty {
  allowed_values?: any[]
  default_value?: any
  description?: string
  properties: any[]
  property_name: string
  required?: boolean
  source_type?: string
  url?: string
  value_type: string
  values_editable_by?: string
}

export interface CustomPropertyLoadMatch {
  custom_property_name: string
  org_id: string
}

export interface CustomPropertyListMatch {
  org_id: string
}

export interface CustomPropertyUpdateData {
  custom_property_name: string
  org_id: string
  allowed_values?: any[]
  default_value?: any
  description?: string
  properties?: any[]
  property_name?: string
  required?: boolean
  source_type?: string
  url?: string
  value_type?: string
  values_editable_by?: string
}

export interface CustomPropertyValue {
  property_name: string
  value: any
}

export interface CustomPropertyValueListMatch {
  owner: string
  repo: string
}

export interface Dependabot {
  allow_forking?: boolean
  archive_url: string
  archived?: boolean
  assignees_url: string
  avatar_url: string
  blobs_url: string
  branches_url: string
  clone_url?: string
  code_of_conduct: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at?: string
  custom_properties?: Record<string, any>
  default_branch?: string
  default_level: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  disabled?: boolean
  downloads_url: string
  events_url: string
  fork: boolean
  forks?: number
  forks_count?: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url?: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url: string
  html_url: string
  id: number
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language?: string
  languages_url: string
  license?: Record<string, any>
  login: string
  members_url: string
  merges_url: string
  milestones_url: string
  mirror_url?: string
  name: string
  network_count?: number
  node_id: string
  notifications_url: string
  open_issues?: number
  open_issues_count?: number
  owner: Record<string, any>
  permissions?: Record<string, any>
  private: boolean
  public_members_url: string
  pulls_url: string
  pushed_at?: string
  releases_url: string
  repos_url: string
  repository_ids_to_add?: any[]
  repository_ids_to_remove?: any[]
  role_name?: string
  security_and_analysis?: Record<string, any>
  selected_repositories_url?: string
  selected_repository_ids: any[]
  size?: number
  ssh_url?: string
  stargazers_count?: number
  stargazers_url: string
  statuses_url: string
  subscribers_count?: number
  subscribers_url: string
  subscription_url: string
  svn_url?: string
  tags_url: string
  teams_url: string
  temp_clone_token?: string
  topics?: any[]
  trees_url: string
  updated_at?: string
  url: string
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
}

export interface DependabotListMatch {
  per_page?: number
  since?: number

  // Selects a custom action instead of the plain list:
  //   'secret' | 'secret'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DependabotUpdateData {
  org_id: string
  repository_id: number
  secret_id: string
  allow_forking?: boolean
  archive_url?: string
  archived?: boolean
  assignees_url?: string
  avatar_url?: string
  blobs_url?: string
  branches_url?: string
  clone_url?: string
  code_of_conduct?: Record<string, any>
  collaborators_url?: string
  comments_url?: string
  commits_url?: string
  compare_url?: string
  contents_url?: string
  contributors_url?: string
  created_at?: string
  custom_properties?: Record<string, any>
  default_branch?: string
  default_level?: string
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
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
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
  login?: string
  members_url?: string
  merges_url?: string
  milestones_url?: string
  mirror_url?: string
  name?: string
  network_count?: number
  node_id?: string
  notifications_url?: string
  open_issues?: number
  open_issues_count?: number
  owner?: Record<string, any>
  permissions?: Record<string, any>
  private?: boolean
  public_members_url?: string
  pulls_url?: string
  pushed_at?: string
  releases_url?: string
  repos_url?: string
  repository_ids_to_add?: any[]
  repository_ids_to_remove?: any[]
  role_name?: string
  security_and_analysis?: Record<string, any>
  selected_repositories_url?: string
  selected_repository_ids?: any[]
  size?: number
  ssh_url?: string
  stargazers_count?: number
  stargazers_url?: string
  statuses_url?: string
  subscribers_count?: number
  subscribers_url?: string
  subscription_url?: string
  svn_url?: string
  tags_url?: string
  teams_url?: string
  temp_clone_token?: string
  topics?: any[]
  trees_url?: string
  updated_at?: string
  url?: string
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
}

export interface DependabotRemoveMatch {
  org_id: string
  secret_name: string
}

export interface DependabotAlert {
  auto_dismissed_at?: string
  created_at: string
  dependency: Record<string, any>
  dismissed_at: string
  dismissed_by: Record<string, any>
  dismissed_comment: string
  dismissed_reason: string
  fixed_at: string
  html_url: string
  id?: string
  number: number
  security_advisory: Record<string, any>
  security_vulnerability: Record<string, any>
  state: string
  updated_at: string
  url: string
}

export interface DependabotAlertLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface DependabotAlertListMatch {
  owner: string
  repo: string
  after?: string
  before?: string
  direction?: string
  ecosystem?: string
  epss_percentage?: string
  first?: number
  has?: any
  last?: number
  manifest?: string
  package?: string
  page?: number
  per_page?: number
  scope?: string
  severity?: string
  sort?: string
  state?: string
}

export interface DependabotAlertUpdateData {
  id: number
  owner: string
  repo: string
  auto_dismissed_at?: string
  created_at?: string
  dependency?: Record<string, any>
  dismissed_at?: string
  dismissed_by?: Record<string, any>
  dismissed_comment?: string
  dismissed_reason?: string
  fixed_at?: string
  html_url?: string
  number?: number
  security_advisory?: Record<string, any>
  security_vulnerability?: Record<string, any>
  state?: string
  updated_at?: string
  url?: string
}

export interface DependabotAlertWithRepository {
  auto_dismissed_at?: string
  created_at: string
  dependency: Record<string, any>
  dismissed_at: string
  dismissed_by: Record<string, any>
  dismissed_comment: string
  dismissed_reason: string
  fixed_at: string
  html_url: string
  number: number
  repository: Record<string, any>
  security_advisory: Record<string, any>
  security_vulnerability: Record<string, any>
  state: string
  updated_at: string
  url: string
}

export interface DependabotAlertWithRepositoryListMatch {
  org_id: string
  after?: string
  artifact_registry?: string
  artifact_registry_url?: string
  before?: string
  direction?: string
  ecosystem?: string
  epss_percentage?: string
  first?: number
  has?: any
  last?: number
  package?: string
  per_page?: number
  scope?: string
  severity?: string
  sort?: string
  state?: string
}

export interface DependabotPublicKey {
  key: string
  key_id: string
}

export interface DependabotPublicKeyLoadMatch {
  org_id: string
}

export interface DependabotRepositoryAccessDetail {
  archive_url: string
  assignees_url: string
  blobs_url: string
  branches_url: string
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  deployments_url: string
  description: string
  downloads_url: string
  events_url: string
  fork: boolean
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  hooks_url: string
  html_url: string
  id: number
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  languages_url: string
  merges_url: string
  milestones_url: string
  name: string
  node_id: string
  notifications_url: string
  owner: Record<string, any>
  private: boolean
  pulls_url: string
  releases_url: string
  stargazers_url: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  tags_url: string
  teams_url: string
  trees_url: string
  url: string
}

export interface DependabotRepositoryAccessDetailListMatch {
  org: string
  page?: number
  per_page?: number
}

export interface DependabotSecret {
  created_at: string
  id?: string
  name: string
  updated_at: string
}

export interface DependabotSecretLoadMatch {
  id: string
  owner: string
  repo: string
}

export interface DependencyGraph {
  detector: Record<string, any>
  job: Record<string, any>
  manifests?: Record<string, any>
  metadata?: Record<string, any>
  ref: string
  scanned: string
  sha: string
  version: number
}

export interface DependencyGraphCreateData {
  owner: string
  repo: string
  detector: Record<string, any>
  job: Record<string, any>
  manifests?: Record<string, any>
  metadata?: Record<string, any>
  ref: string
  scanned: string
  sha: string
  version: number

  // Selects a custom action instead of the plain create:
  //   'snapshot'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DependencyGraphDiff {
  change_type: string
  ecosystem: string
  license: string
  manifest: string
  name: string
  package_url: string
  scope: string
  source_repository_url: string
  version: string
  vulnerabilities: any[]
}

export interface DependencyGraphDiffLoadMatch {
  basehead: string
  owner: string
  repo: string
  name?: string
}

export interface DependencyGraphSpdxSbom {
  SPDXID: string
  comment?: string
  creationInfo: Record<string, any>
  dataLicense: string
  documentNamespace: string
  name: string
  packages: any[]
  relationships: any[]
  spdxVersion: string
}

export interface DependencyGraphSpdxSbomLoadMatch {
  owner: string
  repo: string
}

export interface DeployKey {
  added_by?: string
  created_at: string
  enabled?: boolean
  id: number
  key: string
  last_used?: string
  read_only: boolean
  title: string
  url: string
  verified: boolean
}

export interface DeployKeyLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface DeployKeyListMatch {
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface DeployKeyCreateData {
  owner: string
  repo: string
  added_by?: string
  created_at: string
  enabled?: boolean
  id: number
  key: string
  last_used?: string
  read_only: boolean
  title: string
  url: string
  verified: boolean
}

export interface Deployment {
  auto_merge?: boolean
  comment: string
  created_at: string
  creator: Record<string, any>
  description: string
  environment: string
  environment_ids: any[]
  id: number
  node_id: string
  original_environment?: string
  payload: any
  performed_via_github_app: Record<string, any>
  production_environment?: boolean
  ref: string
  repository_url: string
  required_contexts?: any[]
  sha: string
  state: string
  statuses_url: string
  task: string
  transient_environment?: boolean
  updated_at: string
  url: string
}

export interface DeploymentLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface DeploymentListMatch {
  owner: string
  repo: string
  environment?: string
  page?: number
  per_page?: number
  ref?: string
  sha?: string
  task?: string
}

export interface DeploymentCreateData {
  owner: string
  repo: string
  run_id?: number
  auto_merge?: boolean
  comment: string
  created_at: string
  creator: Record<string, any>
  description: string
  environment: string
  environment_ids: any[]
  id: number
  node_id: string
  original_environment?: string
  payload: any
  performed_via_github_app: Record<string, any>
  production_environment?: boolean
  ref: string
  repository_url: string
  required_contexts?: any[]
  sha: string
  state: string
  statuses_url: string
  task: string
  transient_environment?: boolean
  updated_at: string
  url: string
}

export interface DeploymentBranchPolicy {
  id?: number
  name?: string
  node_id?: string
  type?: string
}

export interface DeploymentBranchPolicyLoadMatch {
  environment_id: string
  id: number
  owner: string
  repo: string
}

export interface DeploymentBranchPolicyCreateData {
  environment_name: string
  owner: string
  repo: string
  id?: number
  name?: string
  node_id?: string
  type?: string
}

export interface DeploymentBranchPolicyUpdateData {
  environment_id: string
  id: number
  owner: string
  repo: string
  name?: string
  node_id?: string
  type?: string
}

export interface DeploymentProtectionRule {
  id: number
  integration_id?: number
  integration_url: string
  node_id: string
  slug: string
}

export interface DeploymentProtectionRuleLoadMatch {
  environment_id: string
  id: number
  owner: string
  repo: string
}

export interface DeploymentProtectionRuleCreateData {
  environment_name: string
  owner: string
  repo: string
  id: number
  integration_id?: number
  integration_url: string
  node_id: string
  slug: string
}

export interface DeploymentStatus {
  auto_inactive?: boolean
  created_at: string
  creator: Record<string, any>
  deployment_url: string
  description: string
  environment?: string
  environment_url?: string
  id: number
  log_url?: string
  node_id: string
  performed_via_github_app: Record<string, any>
  repository_url: string
  state: string
  target_url: string
  updated_at: string
  url: string
}

export interface DeploymentStatusLoadMatch {
  deployment_id: number
  id: number
  owner: string
  repo: string
}

export interface DeploymentStatusListMatch {
  id: number
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface DeploymentStatusCreateData {
  id: number
  owner: string
  repo: string
  auto_inactive?: boolean
  created_at: string
  creator: Record<string, any>
  deployment_url: string
  description: string
  environment?: string
  environment_url?: string
  log_url?: string
  node_id: string
  performed_via_github_app: Record<string, any>
  repository_url: string
  state: string
  target_url: string
  updated_at: string
  url: string
}

export interface DiffEntry {
  additions: number
  blob_url: string
  changes: number
  contents_url: string
  deletions: number
  filename: string
  patch?: string
  previous_filename?: string
  raw_url: string
  sha: string
  status: string
}

export interface DiffEntryListMatch {
  owner: string
  pull_number: number
  repo: string
  page?: number
  per_page?: number
}

export interface Email {
  email?: string
  primary?: boolean
  verified?: boolean
  visibility?: string
}

export interface EmailListMatch {
  page?: number
  per_page?: number
}

export interface EmailCreateData {
  email?: string
  primary?: boolean
  verified?: boolean
  visibility?: string
}

export interface EmailUpdateData {
  email?: string
  primary?: boolean
  verified?: boolean
  visibility?: string

  // Selects a custom action instead of the plain update:
  //   'visibility'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Emoji {
  "1"?: string
  "100"?: string
  "1234"?: string
  "1st_place_medal"?: string
  "2nd_place_medal"?: string
  "3rd_place_medal"?: string
  "8ball"?: string
  a?: string
  ab?: string
  abacus?: string
  abc?: string
  abcd?: string
  accept?: string
  accessibility?: string
  accordion?: string
  adhesive_bandage?: string
  adult?: string
  aerial_tramway?: string
  afghanistan?: string
  airplane?: string
  aland_islands?: string
  alarm_clock?: string
  albania?: string
  alembic?: string
  algeria?: string
  alien?: string
  ambulance?: string
  american_samoa?: string
  amphora?: string
  anatomical_heart?: string
  anchor?: string
  andorra?: string
  angel?: string
  anger?: string
  angola?: string
  angry?: string
  anguilla?: string
  anguished?: string
  ant?: string
  antarctica?: string
  antigua_barbuda?: string
  apple?: string
  aquarius?: string
  argentina?: string
  aries?: string
  armenia?: string
  arrow_backward?: string
  arrow_double_down?: string
  arrow_double_up?: string
  arrow_down?: string
  arrow_down_small?: string
  arrow_forward?: string
  arrow_heading_down?: string
  arrow_heading_up?: string
  arrow_left?: string
  arrow_lower_left?: string
  arrow_lower_right?: string
  arrow_right?: string
  arrow_right_hook?: string
  arrow_up?: string
  arrow_up_down?: string
  arrow_up_small?: string
  arrow_upper_left?: string
  arrow_upper_right?: string
  arrows_clockwise?: string
  arrows_counterclockwise?: string
  art?: string
  articulated_lorry?: string
  artificial_satellite?: string
  artist?: string
  aruba?: string
  ascension_island?: string
  asterisk?: string
  astonished?: string
  astronaut?: string
  athletic_shoe?: string
  atm?: string
  atom?: string
  atom_symbol?: string
  australia?: string
  austria?: string
  auto_rickshaw?: string
  avocado?: string
  axe?: string
  azerbaijan?: string
  b?: string
  baby?: string
  baby_bottle?: string
  baby_chick?: string
  baby_symbol?: string
  back?: string
  bacon?: string
  badger?: string
  badminton?: string
  bagel?: string
  baggage_claim?: string
  baguette_bread?: string
  bahamas?: string
  bahrain?: string
  balance_scale?: string
  bald_man?: string
  bald_woman?: string
  ballet_shoes?: string
  balloon?: string
  ballot_box?: string
  ballot_box_with_check?: string
  bamboo?: string
  banana?: string
  bangbang?: string
  bangladesh?: string
  banjo?: string
  bank?: string
  bar_chart?: string
  barbados?: string
  barber?: string
  baseball?: string
  basecamp?: string
  basecampy?: string
  basket?: string
  basketball?: string
  basketball_man?: string
  basketball_woman?: string
  bat?: string
  bath?: string
  bathtub?: string
  battery?: string
  beach_umbrella?: string
  bear?: string
  bearded_person?: string
  beaver?: string
  bed?: string
  bee?: string
  beer?: string
  beers?: string
  beetle?: string
  beginner?: string
  belarus?: string
  belgium?: string
  belize?: string
  bell?: string
  bell_pepper?: string
  bellhop_bell?: string
  benin?: string
  bento?: string
  bermuda?: string
  beverage_box?: string
  bhutan?: string
  bicyclist?: string
  bike?: string
  biking_man?: string
  biking_woman?: string
  bikini?: string
  billed_cap?: string
  biohazard?: string
  bird?: string
  birthday?: string
  bison?: string
  black_cat?: string
  black_circle?: string
  black_flag?: string
  black_heart?: string
  black_joker?: string
  black_large_square?: string
  black_medium_small_square?: string
  black_medium_square?: string
  black_nib?: string
  black_small_square?: string
  black_square_button?: string
  blond_haired_man?: string
  blond_haired_person?: string
  blond_haired_woman?: string
  blonde_woman?: string
  blossom?: string
  blowfish?: string
  blue_book?: string
  blue_car?: string
  blue_heart?: string
  blue_square?: string
  blueberries?: string
  blush?: string
  boar?: string
  boat?: string
  bolivia?: string
  bomb?: string
  bone?: string
  book?: string
  bookmark?: string
  bookmark_tabs?: string
  books?: string
  boom?: string
  boomerang?: string
  boot?: string
  bosnia_herzegovina?: string
  botswana?: string
  bouncing_ball_man?: string
  bouncing_ball_person?: string
  bouncing_ball_woman?: string
  bouquet?: string
  bouvet_island?: string
  bow?: string
  bow_and_arrow?: string
  bowing_man?: string
  bowing_woman?: string
  bowl_with_spoon?: string
  bowling?: string
  bowtie?: string
  boxing_glove?: string
  boy?: string
  brain?: string
  brazil?: string
  bread?: string
  breast_feeding?: string
  bricks?: string
  bride_with_veil?: string
  bridge_at_night?: string
  briefcase?: string
  british_indian_ocean_territory?: string
  british_virgin_islands?: string
  broccoli?: string
  broken_heart?: string
  broom?: string
  brown_circle?: string
  brown_heart?: string
  brown_square?: string
  brunei?: string
  bubble_tea?: string
  bucket?: string
  bug?: string
  building_construction?: string
  bulb?: string
  bulgaria?: string
  bullettrain_front?: string
  bullettrain_side?: string
  burkina_faso?: string
  burrito?: string
  burundi?: string
  bus?: string
  business_suit_levitating?: string
  busstop?: string
  bust_in_silhouette?: string
  busts_in_silhouette?: string
  butter?: string
  butterfly?: string
  cactus?: string
  cake?: string
  calendar?: string
  call_me_hand?: string
  calling?: string
  cambodia?: string
  camel?: string
  camera?: string
  camera_flash?: string
  cameroon?: string
  camping?: string
  canada?: string
  canary_islands?: string
  cancer?: string
  candle?: string
  candy?: string
  canned_food?: string
  canoe?: string
  cape_verde?: string
  capital_abcd?: string
  capricorn?: string
  car?: string
  card_file_box?: string
  card_index?: string
  card_index_dividers?: string
  caribbean_netherlands?: string
  carousel_horse?: string
  carpentry_saw?: string
  carrot?: string
  cartwheeling?: string
  cat?: string
  cat2?: string
  cayman_islands?: string
  cd?: string
  central_african_republic?: string
  ceuta_melilla?: string
  chad?: string
  chains?: string
  chair?: string
  champagne?: string
  chart?: string
  chart_with_downwards_trend?: string
  chart_with_upwards_trend?: string
  checkered_flag?: string
  cheese?: string
  cherries?: string
  cherry_blossom?: string
  chess_pawn?: string
  chestnut?: string
  chicken?: string
  child?: string
  children_crossing?: string
  chile?: string
  chipmunk?: string
  chocolate_bar?: string
  chopsticks?: string
  christmas_island?: string
  christmas_tree?: string
  church?: string
  cinema?: string
  circus_tent?: string
  city_sunrise?: string
  city_sunset?: string
  cityscape?: string
  cl?: string
  clamp?: string
  clap?: string
  clapper?: string
  classical_building?: string
  climbing?: string
  climbing_man?: string
  climbing_woman?: string
  clinking_glasses?: string
  clipboard?: string
  clipperton_island?: string
  clock1?: string
  clock10?: string
  clock1030?: string
  clock11?: string
  clock1130?: string
  clock12?: string
  clock1230?: string
  clock130?: string
  clock2?: string
  clock230?: string
  clock3?: string
  clock330?: string
  clock4?: string
  clock430?: string
  clock5?: string
  clock530?: string
  clock6?: string
  clock630?: string
  clock7?: string
  clock730?: string
  clock8?: string
  clock830?: string
  clock9?: string
  clock930?: string
  closed_book?: string
  closed_lock_with_key?: string
  closed_umbrella?: string
  cloud?: string
  cloud_with_lightning?: string
  cloud_with_lightning_and_rain?: string
  cloud_with_rain?: string
  cloud_with_snow?: string
  clown_face?: string
  clubs?: string
  cn?: string
  coat?: string
  cockroach?: string
  cocktail?: string
  coconut?: string
  cocos_islands?: string
  coffee?: string
  coffin?: string
  coin?: string
  cold_face?: string
  cold_sweat?: string
  collision?: string
  colombia?: string
  comet?: string
  comoros?: string
  compass?: string
  computer?: string
  computer_mouse?: string
  confetti_ball?: string
  confounded?: string
  confused?: string
  congo_brazzaville?: string
  congo_kinshasa?: string
  congratulations?: string
  construction?: string
  construction_worker?: string
  construction_worker_man?: string
  construction_worker_woman?: string
  control_knobs?: string
  convenience_store?: string
  cook?: string
  cook_islands?: string
  cookie?: string
  cool?: string
  cop?: string
  copilot?: string
  copyright?: string
  corn?: string
  costa_rica?: string
  cote_divoire?: string
  couch_and_lamp?: string
  couple?: string
  couple_with_heart?: string
  couple_with_heart_man_man?: string
  couple_with_heart_woman_man?: string
  couple_with_heart_woman_woman?: string
  couplekiss?: string
  couplekiss_man_man?: string
  couplekiss_man_woman?: string
  couplekiss_woman_woman?: string
  cow?: string
  cow2?: string
  cowboy_hat_face?: string
  crab?: string
  crayon?: string
  credit_card?: string
  crescent_moon?: string
  cricket?: string
  cricket_game?: string
  croatia?: string
  crocodile?: string
  croissant?: string
  crossed_fingers?: string
  crossed_flags?: string
  crossed_swords?: string
  crown?: string
  cry?: string
  crying_cat_face?: string
  crystal_ball?: string
  cuba?: string
  cucumber?: string
  cup_with_straw?: string
  cupcake?: string
  cupid?: string
  curacao?: string
  curling_stone?: string
  curly_haired_man?: string
  curly_haired_woman?: string
  curly_loop?: string
  currency_exchange?: string
  curry?: string
  cursing_face?: string
  custard?: string
  customs?: string
  cut_of_meat?: string
  cyclone?: string
  cyprus?: string
  czech_republic?: string
  dagger?: string
  dancer?: string
  dancers?: string
  dancing_men?: string
  dancing_women?: string
  dango?: string
  dark_sunglasses?: string
  dart?: string
  dash?: string
  date?: string
  de?: string
  deaf_man?: string
  deaf_person?: string
  deaf_woman?: string
  deciduous_tree?: string
  deer?: string
  denmark?: string
  department_store?: string
  dependabot?: string
  derelict_house?: string
  desert?: string
  desert_island?: string
  desktop_computer?: string
  detective?: string
  diamond_shape_with_a_dot_inside?: string
  diamonds?: string
  diego_garcia?: string
  disappointed?: string
  disappointed_relieved?: string
  disguised_face?: string
  diving_mask?: string
  diya_lamp?: string
  dizzy?: string
  dizzy_face?: string
  djibouti?: string
  dna?: string
  do_not_litter?: string
  dodo?: string
  dog?: string
  dog2?: string
  dollar?: string
  dolls?: string
  dolphin?: string
  dominica?: string
  dominican_republic?: string
  door?: string
  doughnut?: string
  dove?: string
  dragon?: string
  dragon_face?: string
  dress?: string
  dromedary_camel?: string
  drooling_face?: string
  drop_of_blood?: string
  droplet?: string
  drum?: string
  duck?: string
  dumpling?: string
  dvd?: string
  eagle?: string
  ear?: string
  ear_of_rice?: string
  ear_with_hearing_aid?: string
  earth_africa?: string
  earth_americas?: string
  earth_asia?: string
  ecuador?: string
  egg?: string
  eggplant?: string
  egypt?: string
  eight?: string
  eight_pointed_black_star?: string
  eight_spoked_asterisk?: string
  eject_button?: string
  el_salvador?: string
  electric_plug?: string
  electron?: string
  elephant?: string
  elevator?: string
  elf?: string
  elf_man?: string
  elf_woman?: string
  email?: string
  end?: string
  england?: string
  envelope?: string
  envelope_with_arrow?: string
  equatorial_guinea?: string
  eritrea?: string
  es?: string
  estonia?: string
  ethiopia?: string
  eu?: string
  euro?: string
  european_castle?: string
  european_post_office?: string
  european_union?: string
  evergreen_tree?: string
  exclamation?: string
  exploding_head?: string
  expressionless?: string
  eye?: string
  eye_speech_bubble?: string
  eyeglasses?: string
  eyes?: string
  face_exhaling?: string
  face_in_clouds?: string
  face_with_head_bandage?: string
  face_with_spiral_eyes?: string
  face_with_thermometer?: string
  facepalm?: string
  facepunch?: string
  factory?: string
  factory_worker?: string
  fairy?: string
  fairy_man?: string
  fairy_woman?: string
  falafel?: string
  falkland_islands?: string
  fallen_leaf?: string
  family?: string
  family_man_boy?: string
  family_man_boy_boy?: string
  family_man_girl?: string
  family_man_girl_boy?: string
  family_man_girl_girl?: string
  family_man_man_boy?: string
  family_man_man_boy_boy?: string
  family_man_man_girl?: string
  family_man_man_girl_boy?: string
  family_man_man_girl_girl?: string
  family_man_woman_boy?: string
  family_man_woman_boy_boy?: string
  family_man_woman_girl?: string
  family_man_woman_girl_boy?: string
  family_man_woman_girl_girl?: string
  family_woman_boy?: string
  family_woman_boy_boy?: string
  family_woman_girl?: string
  family_woman_girl_boy?: string
  family_woman_girl_girl?: string
  family_woman_woman_boy?: string
  family_woman_woman_boy_boy?: string
  family_woman_woman_girl?: string
  family_woman_woman_girl_boy?: string
  family_woman_woman_girl_girl?: string
  farmer?: string
  faroe_islands?: string
  fast_forward?: string
  fax?: string
  fearful?: string
  feather?: string
  feelsgood?: string
  feet?: string
  female_detective?: string
  female_sign?: string
  ferris_wheel?: string
  ferry?: string
  field_hockey?: string
  fiji?: string
  file_cabinet?: string
  file_folder?: string
  film_projector?: string
  film_strip?: string
  finland?: string
  finnadie?: string
  fire?: string
  fire_engine?: string
  fire_extinguisher?: string
  firecracker?: string
  firefighter?: string
  fireworks?: string
  first_quarter_moon?: string
  first_quarter_moon_with_face?: string
  fish?: string
  fish_cake?: string
  fishing_pole_and_fish?: string
  fishsticks?: string
  fist?: string
  fist_left?: string
  fist_oncoming?: string
  fist_raised?: string
  fist_right?: string
  five?: string
  flags?: string
  flamingo?: string
  flashlight?: string
  flat_shoe?: string
  flatbread?: string
  fleur_de_lis?: string
  flight_arrival?: string
  flight_departure?: string
  flipper?: string
  floppy_disk?: string
  flower_playing_cards?: string
  flushed?: string
  fly?: string
  flying_disc?: string
  flying_saucer?: string
  fog?: string
  foggy?: string
  fondue?: string
  foot?: string
  football?: string
  footprints?: string
  fork_and_knife?: string
  fortune_cookie?: string
  fountain?: string
  fountain_pen?: string
  four?: string
  four_leaf_clover?: string
  fox_face?: string
  fr?: string
  framed_picture?: string
  free?: string
  french_guiana?: string
  french_polynesia?: string
  french_southern_territories?: string
  fried_egg?: string
  fried_shrimp?: string
  fries?: string
  frog?: string
  frowning?: string
  frowning_face?: string
  frowning_man?: string
  frowning_person?: string
  frowning_woman?: string
  fu?: string
  fuelpump?: string
  full_moon?: string
  full_moon_with_face?: string
  funeral_urn?: string
  gabon?: string
  gambia?: string
  game_die?: string
  garlic?: string
  gb?: string
  gear?: string
  gem?: string
  gemini?: string
  genie?: string
  genie_man?: string
  genie_woman?: string
  georgia?: string
  ghana?: string
  ghost?: string
  gibraltar?: string
  gift?: string
  gift_heart?: string
  giraffe?: string
  girl?: string
  globe_with_meridians?: string
  gloves?: string
  goal_net?: string
  goat?: string
  goberserk?: string
  godmode?: string
  goggles?: string
  golf?: string
  golfing?: string
  golfing_man?: string
  golfing_woman?: string
  gorilla?: string
  grapes?: string
  greece?: string
  green_apple?: string
  green_book?: string
  green_circle?: string
  green_heart?: string
  green_salad?: string
  green_square?: string
  greenland?: string
  grenada?: string
  grey_exclamation?: string
  grey_question?: string
  grimacing?: string
  grin?: string
  grinning?: string
  guadeloupe?: string
  guam?: string
  guard?: string
  guardsman?: string
  guardswoman?: string
  guatemala?: string
  guernsey?: string
  guide_dog?: string
  guinea?: string
  guinea_bissau?: string
  guitar?: string
  gun?: string
  guyana?: string
  haircut?: string
  haircut_man?: string
  haircut_woman?: string
  haiti?: string
  hamburger?: string
  hammer?: string
  hammer_and_pick?: string
  hammer_and_wrench?: string
  hamster?: string
  hand?: string
  hand_over_mouth?: string
  handbag?: string
  handball_person?: string
  handshake?: string
  hankey?: string
  hash?: string
  hatched_chick?: string
  hatching_chick?: string
  headphones?: string
  headstone?: string
  health_worker?: string
  hear_no_evil?: string
  heard_mcdonald_islands?: string
  heart?: string
  heart_decoration?: string
  heart_eyes?: string
  heart_eyes_cat?: string
  heart_on_fire?: string
  heartbeat?: string
  heartpulse?: string
  hearts?: string
  heavy_check_mark?: string
  heavy_division_sign?: string
  heavy_dollar_sign?: string
  heavy_exclamation_mark?: string
  heavy_heart_exclamation?: string
  heavy_minus_sign?: string
  heavy_multiplication_x?: string
  heavy_plus_sign?: string
  hedgehog?: string
  helicopter?: string
  herb?: string
  hibiscus?: string
  high_brightness?: string
  high_heel?: string
  hiking_boot?: string
  hindu_temple?: string
  hippopotamus?: string
  hocho?: string
  hole?: string
  honduras?: string
  honey_pot?: string
  honeybee?: string
  hong_kong?: string
  hook?: string
  horse?: string
  horse_racing?: string
  hospital?: string
  hot_face?: string
  hot_pepper?: string
  hotdog?: string
  hotel?: string
  hotsprings?: string
  hourglass?: string
  hourglass_flowing_sand?: string
  house?: string
  house_with_garden?: string
  houses?: string
  hugs?: string
  hungary?: string
  hurtrealbad?: string
  hushed?: string
  hut?: string
  ice_cream?: string
  ice_cube?: string
  ice_hockey?: string
  ice_skate?: string
  icecream?: string
  iceland?: string
  id?: string
  ideograph_advantage?: string
  imp?: string
  inbox_tray?: string
  incoming_envelope?: string
  india?: string
  indonesia?: string
  infinity?: string
  information_desk_person?: string
  information_source?: string
  innocent?: string
  interrobang?: string
  iphone?: string
  iran?: string
  iraq?: string
  ireland?: string
  isle_of_man?: string
  israel?: string
  it?: string
  izakaya_lantern?: string
  jack_o_lantern?: string
  jamaica?: string
  japan?: string
  japanese_castle?: string
  japanese_goblin?: string
  japanese_ogre?: string
  jeans?: string
  jersey?: string
  jigsaw?: string
  jordan?: string
  joy?: string
  joy_cat?: string
  joystick?: string
  jp?: string
  judge?: string
  juggling_person?: string
  kangaroo?: string
  kazakhstan?: string
  kenya?: string
  key?: string
  keyboard?: string
  keycap_ten?: string
  kick_scooter?: string
  kimono?: string
  kiribati?: string
  kiss?: string
  kissing?: string
  kissing_cat?: string
  kissing_closed_eyes?: string
  kissing_heart?: string
  kissing_smiling_eyes?: string
  kite?: string
  kiwi_fruit?: string
  kneeling_man?: string
  kneeling_person?: string
  kneeling_woman?: string
  knife?: string
  knot?: string
  koala?: string
  koko?: string
  kosovo?: string
  kr?: string
  kuwait?: string
  kyrgyzstan?: string
  lab_coat?: string
  label?: string
  lacrosse?: string
  ladder?: string
  lady_beetle?: string
  lantern?: string
  laos?: string
  large_blue_circle?: string
  large_blue_diamond?: string
  large_orange_diamond?: string
  last_quarter_moon?: string
  last_quarter_moon_with_face?: string
  latin_cross?: string
  latvia?: string
  laughing?: string
  leafy_green?: string
  leaves?: string
  lebanon?: string
  ledger?: string
  left_luggage?: string
  left_right_arrow?: string
  left_speech_bubble?: string
  leftwards_arrow_with_hook?: string
  leg?: string
  lemon?: string
  leo?: string
  leopard?: string
  lesotho?: string
  level_slider?: string
  liberia?: string
  libra?: string
  libya?: string
  liechtenstein?: string
  light_rail?: string
  link?: string
  lion?: string
  lips?: string
  lipstick?: string
  lithuania?: string
  lizard?: string
  llama?: string
  lobster?: string
  lock?: string
  lock_with_ink_pen?: string
  lollipop?: string
  long_drum?: string
  loop?: string
  lotion_bottle?: string
  lotus_position?: string
  lotus_position_man?: string
  lotus_position_woman?: string
  loud_sound?: string
  loudspeaker?: string
  love_hotel?: string
  love_letter?: string
  love_you_gesture?: string
  low_brightness?: string
  luggage?: string
  lungs?: string
  luxembourg?: string
  lying_face?: string
  m?: string
  macau?: string
  macedonia?: string
  madagascar?: string
  mag?: string
  mag_right?: string
  mage?: string
  mage_man?: string
  mage_woman?: string
  magic_wand?: string
  magnet?: string
  mahjong?: string
  mailbox?: string
  mailbox_closed?: string
  mailbox_with_mail?: string
  mailbox_with_no_mail?: string
  malawi?: string
  malaysia?: string
  maldives?: string
  male_detective?: string
  male_sign?: string
  mali?: string
  malta?: string
  mammoth?: string
  man?: string
  man_artist?: string
  man_astronaut?: string
  man_beard?: string
  man_cartwheeling?: string
  man_cook?: string
  man_dancing?: string
  man_facepalming?: string
  man_factory_worker?: string
  man_farmer?: string
  man_feeding_baby?: string
  man_firefighter?: string
  man_health_worker?: string
  man_in_manual_wheelchair?: string
  man_in_motorized_wheelchair?: string
  man_in_tuxedo?: string
  man_judge?: string
  man_juggling?: string
  man_mechanic?: string
  man_office_worker?: string
  man_pilot?: string
  man_playing_handball?: string
  man_playing_water_polo?: string
  man_scientist?: string
  man_shrugging?: string
  man_singer?: string
  man_student?: string
  man_teacher?: string
  man_technologist?: string
  man_with_gua_pi_mao?: string
  man_with_probing_cane?: string
  man_with_turban?: string
  man_with_veil?: string
  mandarin?: string
  mango?: string
  mans_shoe?: string
  mantelpiece_clock?: string
  manual_wheelchair?: string
  maple_leaf?: string
  marshall_islands?: string
  martial_arts_uniform?: string
  martinique?: string
  mask?: string
  massage?: string
  massage_man?: string
  massage_woman?: string
  mate?: string
  mauritania?: string
  mauritius?: string
  mayotte?: string
  meat_on_bone?: string
  mechanic?: string
  mechanical_arm?: string
  mechanical_leg?: string
  medal_military?: string
  medal_sports?: string
  medical_symbol?: string
  mega?: string
  melon?: string
  memo?: string
  men_wrestling?: string
  mending_heart?: string
  menorah?: string
  mens?: string
  mermaid?: string
  merman?: string
  merperson?: string
  metal?: string
  metro?: string
  mexico?: string
  microbe?: string
  micronesia?: string
  microphone?: string
  microscope?: string
  middle_finger?: string
  military_helmet?: string
  milk_glass?: string
  milky_way?: string
  minibus?: string
  minidisc?: string
  mirror?: string
  mobile_phone_off?: string
  moldova?: string
  monaco?: string
  money_mouth_face?: string
  money_with_wings?: string
  moneybag?: string
  mongolia?: string
  monkey?: string
  monkey_face?: string
  monocle_face?: string
  monorail?: string
  montenegro?: string
  montserrat?: string
  moon?: string
  moon_cake?: string
  morocco?: string
  mortar_board?: string
  mosque?: string
  mosquito?: string
  motor_boat?: string
  motor_scooter?: string
  motorcycle?: string
  motorized_wheelchair?: string
  motorway?: string
  mount_fuji?: string
  mountain?: string
  mountain_bicyclist?: string
  mountain_biking_man?: string
  mountain_biking_woman?: string
  mountain_cableway?: string
  mountain_railway?: string
  mountain_snow?: string
  mouse?: string
  mouse2?: string
  mouse_trap?: string
  movie_camera?: string
  moyai?: string
  mozambique?: string
  mrs_claus?: string
  muscle?: string
  mushroom?: string
  musical_keyboard?: string
  musical_note?: string
  musical_score?: string
  mute?: string
  mx_claus?: string
  myanmar?: string
  nail_care?: string
  name_badge?: string
  namibia?: string
  national_park?: string
  nauru?: string
  nauseated_face?: string
  nazar_amulet?: string
  neckbeard?: string
  necktie?: string
  negative_squared_cross_mark?: string
  nepal?: string
  nerd_face?: string
  nesting_dolls?: string
  netherlands?: string
  neutral_face?: string
  new?: string
  new_caledonia?: string
  new_moon?: string
  new_moon_with_face?: string
  new_zealand?: string
  newspaper?: string
  newspaper_roll?: string
  next_track_button?: string
  ng?: string
  ng_man?: string
  ng_woman?: string
  nicaragua?: string
  niger?: string
  nigeria?: string
  night_with_stars?: string
  nine?: string
  ninja?: string
  niue?: string
  no_bell?: string
  no_bicycles?: string
  no_entry?: string
  no_entry_sign?: string
  no_good?: string
  no_good_man?: string
  no_good_woman?: string
  no_mobile_phones?: string
  no_mouth?: string
  no_pedestrians?: string
  no_smoking?: string
  nonpotable_water?: string
  norfolk_island?: string
  north_korea?: string
  northern_mariana_islands?: string
  norway?: string
  nose?: string
  notebook?: string
  notebook_with_decorative_cover?: string
  notes?: string
  nut_and_bolt?: string
  o?: string
  o2?: string
  ocean?: string
  octocat?: string
  octopus?: string
  oden?: string
  office?: string
  office_worker?: string
  oil_drum?: string
  ok?: string
  ok_hand?: string
  ok_man?: string
  ok_person?: string
  ok_woman?: string
  old_key?: string
  older_adult?: string
  older_man?: string
  older_woman?: string
  olive?: string
  om?: string
  oman?: string
  on?: string
  oncoming_automobile?: string
  oncoming_bus?: string
  oncoming_police_car?: string
  oncoming_taxi?: string
  one?: string
  one_piece_swimsuit?: string
  onion?: string
  open_book?: string
  open_file_folder?: string
  open_hands?: string
  open_mouth?: string
  open_umbrella?: string
  ophiuchus?: string
  orange?: string
  orange_book?: string
  orange_circle?: string
  orange_heart?: string
  orange_square?: string
  orangutan?: string
  orthodox_cross?: string
  otter?: string
  outbox_tray?: string
  owl?: string
  ox?: string
  oyster?: string
  package?: string
  page_facing_up?: string
  page_with_curl?: string
  pager?: string
  paintbrush?: string
  pakistan?: string
  palau?: string
  palestinian_territories?: string
  palm_tree?: string
  palms_up_together?: string
  panama?: string
  pancakes?: string
  panda_face?: string
  paperclip?: string
  paperclips?: string
  papua_new_guinea?: string
  parachute?: string
  paraguay?: string
  parasol_on_ground?: string
  parking?: string
  parrot?: string
  part_alternation_mark?: string
  partly_sunny?: string
  partying_face?: string
  passenger_ship?: string
  passport_control?: string
  pause_button?: string
  paw_prints?: string
  peace_symbol?: string
  peach?: string
  peacock?: string
  peanuts?: string
  pear?: string
  pen?: string
  pencil?: string
  pencil2?: string
  penguin?: string
  pensive?: string
  people_holding_hands?: string
  people_hugging?: string
  performing_arts?: string
  persevere?: string
  person_bald?: string
  person_curly_hair?: string
  person_feeding_baby?: string
  person_fencing?: string
  person_in_manual_wheelchair?: string
  person_in_motorized_wheelchair?: string
  person_in_tuxedo?: string
  person_red_hair?: string
  person_white_hair?: string
  person_with_probing_cane?: string
  person_with_turban?: string
  person_with_veil?: string
  peru?: string
  petri_dish?: string
  philippines?: string
  phone?: string
  pick?: string
  pickup_truck?: string
  pie?: string
  pig?: string
  pig2?: string
  pig_nose?: string
  pill?: string
  pilot?: string
  pinata?: string
  pinched_fingers?: string
  pinching_hand?: string
  pineapple?: string
  ping_pong?: string
  pirate_flag?: string
  pisces?: string
  pitcairn_islands?: string
  pizza?: string
  placard?: string
  place_of_worship?: string
  plate_with_cutlery?: string
  play_or_pause_button?: string
  pleading_face?: string
  plunger?: string
  point_down?: string
  point_left?: string
  point_right?: string
  point_up?: string
  point_up_2?: string
  poland?: string
  polar_bear?: string
  police_car?: string
  police_officer?: string
  policeman?: string
  policewoman?: string
  poodle?: string
  poop?: string
  popcorn?: string
  portugal?: string
  post_office?: string
  postal_horn?: string
  postbox?: string
  potable_water?: string
  potato?: string
  potted_plant?: string
  pouch?: string
  poultry_leg?: string
  pound?: string
  pout?: string
  pouting_cat?: string
  pouting_face?: string
  pouting_man?: string
  pouting_woman?: string
  pray?: string
  prayer_beads?: string
  pregnant_woman?: string
  pretzel?: string
  previous_track_button?: string
  prince?: string
  princess?: string
  printer?: string
  probing_cane?: string
  puerto_rico?: string
  punch?: string
  purple_circle?: string
  purple_heart?: string
  purple_square?: string
  purse?: string
  pushpin?: string
  put_litter_in_its_place?: string
  qatar?: string
  question?: string
  rabbit?: string
  rabbit2?: string
  raccoon?: string
  racehorse?: string
  racing_car?: string
  radio?: string
  radio_button?: string
  radioactive?: string
  rage?: string
  rage1?: string
  rage2?: string
  rage3?: string
  rage4?: string
  railway_car?: string
  railway_track?: string
  rainbow?: string
  rainbow_flag?: string
  raised_back_of_hand?: string
  raised_eyebrow?: string
  raised_hand?: string
  raised_hand_with_fingers_splayed?: string
  raised_hands?: string
  raising_hand?: string
  raising_hand_man?: string
  raising_hand_woman?: string
  ram?: string
  ramen?: string
  rat?: string
  razor?: string
  receipt?: string
  record_button?: string
  recycle?: string
  red_car?: string
  red_circle?: string
  red_envelope?: string
  red_haired_man?: string
  red_haired_woman?: string
  red_square?: string
  registered?: string
  relaxed?: string
  relieved?: string
  reminder_ribbon?: string
  repeat?: string
  repeat_one?: string
  rescue_worker_helmet?: string
  restroom?: string
  reunion?: string
  revolving_hearts?: string
  rewind?: string
  rhinoceros?: string
  ribbon?: string
  rice?: string
  rice_ball?: string
  rice_cracker?: string
  rice_scene?: string
  right_anger_bubble?: string
  ring?: string
  ringed_planet?: string
  robot?: string
  rock?: string
  rocket?: string
  rofl?: string
  roll_eyes?: string
  roll_of_paper?: string
  roller_coaster?: string
  roller_skate?: string
  romania?: string
  rooster?: string
  rose?: string
  rosette?: string
  rotating_light?: string
  round_pushpin?: string
  rowboat?: string
  rowing_man?: string
  rowing_woman?: string
  ru?: string
  rugby_football?: string
  runner?: string
  running?: string
  running_man?: string
  running_shirt_with_sash?: string
  running_woman?: string
  rwanda?: string
  sa?: string
  safety_pin?: string
  safety_vest?: string
  sagittarius?: string
  sailboat?: string
  sake?: string
  salt?: string
  samoa?: string
  san_marino?: string
  sandal?: string
  sandwich?: string
  santa?: string
  sao_tome_principe?: string
  sari?: string
  sassy_man?: string
  sassy_woman?: string
  satellite?: string
  satisfied?: string
  saudi_arabia?: string
  sauna_man?: string
  sauna_person?: string
  sauna_woman?: string
  sauropod?: string
  saxophone?: string
  scarf?: string
  school?: string
  school_satchel?: string
  scientist?: string
  scissors?: string
  scorpion?: string
  scorpius?: string
  scotland?: string
  scream?: string
  scream_cat?: string
  screwdriver?: string
  scroll?: string
  seal?: string
  seat?: string
  secret?: string
  see_no_evil?: string
  seedling?: string
  selfie?: string
  senegal?: string
  serbia?: string
  service_dog?: string
  seven?: string
  sewing_needle?: string
  seychelles?: string
  shallow_pan_of_food?: string
  shamrock?: string
  shark?: string
  shaved_ice?: string
  sheep?: string
  shell?: string
  shield?: string
  shinto_shrine?: string
  ship?: string
  shipit?: string
  shirt?: string
  shoe?: string
  shopping?: string
  shopping_cart?: string
  shorts?: string
  shower?: string
  shrimp?: string
  shrug?: string
  shushing_face?: string
  sierra_leone?: string
  signal_strength?: string
  singapore?: string
  singer?: string
  sint_maarten?: string
  six?: string
  six_pointed_star?: string
  skateboard?: string
  ski?: string
  skier?: string
  skull?: string
  skull_and_crossbones?: string
  skunk?: string
  sled?: string
  sleeping?: string
  sleeping_bed?: string
  sleepy?: string
  slightly_frowning_face?: string
  slightly_smiling_face?: string
  slot_machine?: string
  sloth?: string
  slovakia?: string
  slovenia?: string
  small_airplane?: string
  small_blue_diamond?: string
  small_orange_diamond?: string
  small_red_triangle?: string
  small_red_triangle_down?: string
  smile?: string
  smile_cat?: string
  smiley?: string
  smiley_cat?: string
  smiling_face_with_tear?: string
  smiling_face_with_three_hearts?: string
  smiling_imp?: string
  smirk?: string
  smirk_cat?: string
  smoking?: string
  snail?: string
  snake?: string
  sneezing_face?: string
  snowboarder?: string
  snowflake?: string
  snowman?: string
  snowman_with_snow?: string
  soap?: string
  sob?: string
  soccer?: string
  socks?: string
  softball?: string
  solomon_islands?: string
  somalia?: string
  soon?: string
  sos?: string
  sound?: string
  south_africa?: string
  south_georgia_south_sandwich_islands?: string
  south_sudan?: string
  space_invader?: string
  spades?: string
  spaghetti?: string
  sparkle?: string
  sparkler?: string
  sparkles?: string
  sparkling_heart?: string
  speak_no_evil?: string
  speaker?: string
  speaking_head?: string
  speech_balloon?: string
  speedboat?: string
  spider?: string
  spider_web?: string
  spiral_calendar?: string
  spiral_notepad?: string
  sponge?: string
  spoon?: string
  squid?: string
  sri_lanka?: string
  st_barthelemy?: string
  st_helena?: string
  st_kitts_nevis?: string
  st_lucia?: string
  st_martin?: string
  st_pierre_miquelon?: string
  st_vincent_grenadines?: string
  stadium?: string
  standing_man?: string
  standing_person?: string
  standing_woman?: string
  star?: string
  star2?: string
  star_and_crescent?: string
  star_of_david?: string
  star_struck?: string
  stars?: string
  station?: string
  statue_of_liberty?: string
  steam_locomotive?: string
  stethoscope?: string
  stew?: string
  stop_button?: string
  stop_sign?: string
  stopwatch?: string
  straight_ruler?: string
  strawberry?: string
  stuck_out_tongue?: string
  stuck_out_tongue_closed_eyes?: string
  stuck_out_tongue_winking_eye?: string
  student?: string
  studio_microphone?: string
  stuffed_flatbread?: string
  sudan?: string
  sun_behind_large_cloud?: string
  sun_behind_rain_cloud?: string
  sun_behind_small_cloud?: string
  sun_with_face?: string
  sunflower?: string
  sunglasses?: string
  sunny?: string
  sunrise?: string
  sunrise_over_mountains?: string
  superhero?: string
  superhero_man?: string
  superhero_woman?: string
  supervillain?: string
  supervillain_man?: string
  supervillain_woman?: string
  surfer?: string
  surfing_man?: string
  surfing_woman?: string
  suriname?: string
  sushi?: string
  suspect?: string
  suspension_railway?: string
  svalbard_jan_mayen?: string
  swan?: string
  swaziland?: string
  sweat?: string
  sweat_drops?: string
  sweat_smile?: string
  sweden?: string
  sweet_potato?: string
  swim_brief?: string
  swimmer?: string
  swimming_man?: string
  swimming_woman?: string
  switzerland?: string
  symbols?: string
  synagogue?: string
  syria?: string
  syringe?: string
  taco?: string
  tada?: string
  taiwan?: string
  tajikistan?: string
  takeout_box?: string
  tamale?: string
  tanabata_tree?: string
  tangerine?: string
  tanzania?: string
  taurus?: string
  taxi?: string
  tea?: string
  teacher?: string
  teapot?: string
  technologist?: string
  teddy_bear?: string
  telephone?: string
  telephone_receiver?: string
  telescope?: string
  tennis?: string
  tent?: string
  test_tube?: string
  thailand?: string
  thermometer?: string
  thinking?: string
  thong_sandal?: string
  thought_balloon?: string
  thread?: string
  three?: string
  thumbsdown?: string
  thumbsup?: string
  ticket?: string
  tickets?: string
  tiger?: string
  tiger2?: string
  timer_clock?: string
  timor_leste?: string
  tipping_hand_man?: string
  tipping_hand_person?: string
  tipping_hand_woman?: string
  tired_face?: string
  tm?: string
  togo?: string
  toilet?: string
  tokelau?: string
  tokyo_tower?: string
  tomato?: string
  tonga?: string
  tongue?: string
  toolbox?: string
  tooth?: string
  toothbrush?: string
  top?: string
  tophat?: string
  tornado?: string
  tr?: string
  trackball?: string
  tractor?: string
  traffic_light?: string
  train?: string
  train2?: string
  tram?: string
  transgender_flag?: string
  transgender_symbol?: string
  trex?: string
  triangular_flag_on_post?: string
  triangular_ruler?: string
  trident?: string
  trinidad_tobago?: string
  tristan_da_cunha?: string
  triumph?: string
  trolleybus?: string
  trollface?: string
  trophy?: string
  tropical_drink?: string
  tropical_fish?: string
  truck?: string
  trumpet?: string
  tshirt?: string
  tulip?: string
  tumbler_glass?: string
  tunisia?: string
  turkey?: string
  turkmenistan?: string
  turks_caicos_islands?: string
  turtle?: string
  tuvalu?: string
  tv?: string
  twisted_rightwards_arrows?: string
  two?: string
  two_hearts?: string
  two_men_holding_hands?: string
  two_women_holding_hands?: string
  u5272?: string
  u5408?: string
  u55b6?: string
  u6307?: string
  u6708?: string
  u6709?: string
  u6e80?: string
  u7121?: string
  u7533?: string
  u7981?: string
  u7a7a?: string
  uganda?: string
  uk?: string
  ukraine?: string
  umbrella?: string
  unamused?: string
  underage?: string
  unicorn?: string
  united_arab_emirates?: string
  united_nations?: string
  unlock?: string
  up?: string
  upside_down_face?: string
  uruguay?: string
  us?: string
  us_outlying_islands?: string
  us_virgin_islands?: string
  uzbekistan?: string
  v?: string
  vampire?: string
  vampire_man?: string
  vampire_woman?: string
  vanuatu?: string
  vatican_city?: string
  venezuela?: string
  vertical_traffic_light?: string
  vhs?: string
  vibration_mode?: string
  video_camera?: string
  video_game?: string
  vietnam?: string
  violin?: string
  virgo?: string
  volcano?: string
  volleyball?: string
  vomiting_face?: string
  vs?: string
  vulcan_salute?: string
  waffle?: string
  wales?: string
  walking?: string
  walking_man?: string
  walking_woman?: string
  wallis_futuna?: string
  waning_crescent_moon?: string
  waning_gibbous_moon?: string
  warning?: string
  wastebasket?: string
  watch?: string
  water_buffalo?: string
  water_polo?: string
  watermelon?: string
  wave?: string
  wavy_dash?: string
  waxing_crescent_moon?: string
  waxing_gibbous_moon?: string
  wc?: string
  weary?: string
  wedding?: string
  weight_lifting?: string
  weight_lifting_man?: string
  weight_lifting_woman?: string
  western_sahara?: string
  whale?: string
  whale2?: string
  wheel_of_dharma?: string
  wheelchair?: string
  white_check_mark?: string
  white_circle?: string
  white_flag?: string
  white_flower?: string
  white_haired_man?: string
  white_haired_woman?: string
  white_heart?: string
  white_large_square?: string
  white_medium_small_square?: string
  white_medium_square?: string
  white_small_square?: string
  white_square_button?: string
  wilted_flower?: string
  wind_chime?: string
  wind_face?: string
  window?: string
  wine_glass?: string
  wink?: string
  wolf?: string
  woman?: string
  woman_artist?: string
  woman_astronaut?: string
  woman_beard?: string
  woman_cartwheeling?: string
  woman_cook?: string
  woman_dancing?: string
  woman_facepalming?: string
  woman_factory_worker?: string
  woman_farmer?: string
  woman_feeding_baby?: string
  woman_firefighter?: string
  woman_health_worker?: string
  woman_in_manual_wheelchair?: string
  woman_in_motorized_wheelchair?: string
  woman_in_tuxedo?: string
  woman_judge?: string
  woman_juggling?: string
  woman_mechanic?: string
  woman_office_worker?: string
  woman_pilot?: string
  woman_playing_handball?: string
  woman_playing_water_polo?: string
  woman_scientist?: string
  woman_shrugging?: string
  woman_singer?: string
  woman_student?: string
  woman_teacher?: string
  woman_technologist?: string
  woman_with_headscarf?: string
  woman_with_probing_cane?: string
  woman_with_turban?: string
  woman_with_veil?: string
  womans_clothes?: string
  womans_hat?: string
  women_wrestling?: string
  womens?: string
  wood?: string
  woozy_face?: string
  world_map?: string
  worm?: string
  worried?: string
  wrench?: string
  wrestling?: string
  writing_hand?: string
  x?: string
  yarn?: string
  yawning_face?: string
  yellow_circle?: string
  yellow_heart?: string
  yellow_square?: string
  yemen?: string
  yen?: string
  yin_yang?: string
  yo_yo?: string
  yum?: string
  zambia?: string
  zany_face?: string
  zap?: string
  zebra?: string
  zero?: string
  zimbabwe?: string
  zipper_mouth_face?: string
  zombie?: string
  zombie_man?: string
  zombie_woman?: string
  zzz?: string
}

export interface EmojiLoadMatch {
  "1"?: string
  "100"?: string
  "1234"?: string
  "1st_place_medal"?: string
  "2nd_place_medal"?: string
  "3rd_place_medal"?: string
  "8ball"?: string
  a?: string
  ab?: string
  abacus?: string
  abc?: string
  abcd?: string
  accept?: string
  accessibility?: string
  accordion?: string
  adhesive_bandage?: string
  adult?: string
  aerial_tramway?: string
  afghanistan?: string
  airplane?: string
  aland_islands?: string
  alarm_clock?: string
  albania?: string
  alembic?: string
  algeria?: string
  alien?: string
  ambulance?: string
  american_samoa?: string
  amphora?: string
  anatomical_heart?: string
  anchor?: string
  andorra?: string
  angel?: string
  anger?: string
  angola?: string
  angry?: string
  anguilla?: string
  anguished?: string
  ant?: string
  antarctica?: string
  antigua_barbuda?: string
  apple?: string
  aquarius?: string
  argentina?: string
  aries?: string
  armenia?: string
  arrow_backward?: string
  arrow_double_down?: string
  arrow_double_up?: string
  arrow_down?: string
  arrow_down_small?: string
  arrow_forward?: string
  arrow_heading_down?: string
  arrow_heading_up?: string
  arrow_left?: string
  arrow_lower_left?: string
  arrow_lower_right?: string
  arrow_right?: string
  arrow_right_hook?: string
  arrow_up?: string
  arrow_up_down?: string
  arrow_up_small?: string
  arrow_upper_left?: string
  arrow_upper_right?: string
  arrows_clockwise?: string
  arrows_counterclockwise?: string
  art?: string
  articulated_lorry?: string
  artificial_satellite?: string
  artist?: string
  aruba?: string
  ascension_island?: string
  asterisk?: string
  astonished?: string
  astronaut?: string
  athletic_shoe?: string
  atm?: string
  atom?: string
  atom_symbol?: string
  australia?: string
  austria?: string
  auto_rickshaw?: string
  avocado?: string
  axe?: string
  azerbaijan?: string
  b?: string
  baby?: string
  baby_bottle?: string
  baby_chick?: string
  baby_symbol?: string
  back?: string
  bacon?: string
  badger?: string
  badminton?: string
  bagel?: string
  baggage_claim?: string
  baguette_bread?: string
  bahamas?: string
  bahrain?: string
  balance_scale?: string
  bald_man?: string
  bald_woman?: string
  ballet_shoes?: string
  balloon?: string
  ballot_box?: string
  ballot_box_with_check?: string
  bamboo?: string
  banana?: string
  bangbang?: string
  bangladesh?: string
  banjo?: string
  bank?: string
  bar_chart?: string
  barbados?: string
  barber?: string
  baseball?: string
  basecamp?: string
  basecampy?: string
  basket?: string
  basketball?: string
  basketball_man?: string
  basketball_woman?: string
  bat?: string
  bath?: string
  bathtub?: string
  battery?: string
  beach_umbrella?: string
  bear?: string
  bearded_person?: string
  beaver?: string
  bed?: string
  bee?: string
  beer?: string
  beers?: string
  beetle?: string
  beginner?: string
  belarus?: string
  belgium?: string
  belize?: string
  bell?: string
  bell_pepper?: string
  bellhop_bell?: string
  benin?: string
  bento?: string
  bermuda?: string
  beverage_box?: string
  bhutan?: string
  bicyclist?: string
  bike?: string
  biking_man?: string
  biking_woman?: string
  bikini?: string
  billed_cap?: string
  biohazard?: string
  bird?: string
  birthday?: string
  bison?: string
  black_cat?: string
  black_circle?: string
  black_flag?: string
  black_heart?: string
  black_joker?: string
  black_large_square?: string
  black_medium_small_square?: string
  black_medium_square?: string
  black_nib?: string
  black_small_square?: string
  black_square_button?: string
  blond_haired_man?: string
  blond_haired_person?: string
  blond_haired_woman?: string
  blonde_woman?: string
  blossom?: string
  blowfish?: string
  blue_book?: string
  blue_car?: string
  blue_heart?: string
  blue_square?: string
  blueberries?: string
  blush?: string
  boar?: string
  boat?: string
  bolivia?: string
  bomb?: string
  bone?: string
  book?: string
  bookmark?: string
  bookmark_tabs?: string
  books?: string
  boom?: string
  boomerang?: string
  boot?: string
  bosnia_herzegovina?: string
  botswana?: string
  bouncing_ball_man?: string
  bouncing_ball_person?: string
  bouncing_ball_woman?: string
  bouquet?: string
  bouvet_island?: string
  bow?: string
  bow_and_arrow?: string
  bowing_man?: string
  bowing_woman?: string
  bowl_with_spoon?: string
  bowling?: string
  bowtie?: string
  boxing_glove?: string
  boy?: string
  brain?: string
  brazil?: string
  bread?: string
  breast_feeding?: string
  bricks?: string
  bride_with_veil?: string
  bridge_at_night?: string
  briefcase?: string
  british_indian_ocean_territory?: string
  british_virgin_islands?: string
  broccoli?: string
  broken_heart?: string
  broom?: string
  brown_circle?: string
  brown_heart?: string
  brown_square?: string
  brunei?: string
  bubble_tea?: string
  bucket?: string
  bug?: string
  building_construction?: string
  bulb?: string
  bulgaria?: string
  bullettrain_front?: string
  bullettrain_side?: string
  burkina_faso?: string
  burrito?: string
  burundi?: string
  bus?: string
  business_suit_levitating?: string
  busstop?: string
  bust_in_silhouette?: string
  busts_in_silhouette?: string
  butter?: string
  butterfly?: string
  cactus?: string
  cake?: string
  calendar?: string
  call_me_hand?: string
  calling?: string
  cambodia?: string
  camel?: string
  camera?: string
  camera_flash?: string
  cameroon?: string
  camping?: string
  canada?: string
  canary_islands?: string
  cancer?: string
  candle?: string
  candy?: string
  canned_food?: string
  canoe?: string
  cape_verde?: string
  capital_abcd?: string
  capricorn?: string
  car?: string
  card_file_box?: string
  card_index?: string
  card_index_dividers?: string
  caribbean_netherlands?: string
  carousel_horse?: string
  carpentry_saw?: string
  carrot?: string
  cartwheeling?: string
  cat?: string
  cat2?: string
  cayman_islands?: string
  cd?: string
  central_african_republic?: string
  ceuta_melilla?: string
  chad?: string
  chains?: string
  chair?: string
  champagne?: string
  chart?: string
  chart_with_downwards_trend?: string
  chart_with_upwards_trend?: string
  checkered_flag?: string
  cheese?: string
  cherries?: string
  cherry_blossom?: string
  chess_pawn?: string
  chestnut?: string
  chicken?: string
  child?: string
  children_crossing?: string
  chile?: string
  chipmunk?: string
  chocolate_bar?: string
  chopsticks?: string
  christmas_island?: string
  christmas_tree?: string
  church?: string
  cinema?: string
  circus_tent?: string
  city_sunrise?: string
  city_sunset?: string
  cityscape?: string
  cl?: string
  clamp?: string
  clap?: string
  clapper?: string
  classical_building?: string
  climbing?: string
  climbing_man?: string
  climbing_woman?: string
  clinking_glasses?: string
  clipboard?: string
  clipperton_island?: string
  clock1?: string
  clock10?: string
  clock1030?: string
  clock11?: string
  clock1130?: string
  clock12?: string
  clock1230?: string
  clock130?: string
  clock2?: string
  clock230?: string
  clock3?: string
  clock330?: string
  clock4?: string
  clock430?: string
  clock5?: string
  clock530?: string
  clock6?: string
  clock630?: string
  clock7?: string
  clock730?: string
  clock8?: string
  clock830?: string
  clock9?: string
  clock930?: string
  closed_book?: string
  closed_lock_with_key?: string
  closed_umbrella?: string
  cloud?: string
  cloud_with_lightning?: string
  cloud_with_lightning_and_rain?: string
  cloud_with_rain?: string
  cloud_with_snow?: string
  clown_face?: string
  clubs?: string
  cn?: string
  coat?: string
  cockroach?: string
  cocktail?: string
  coconut?: string
  cocos_islands?: string
  coffee?: string
  coffin?: string
  coin?: string
  cold_face?: string
  cold_sweat?: string
  collision?: string
  colombia?: string
  comet?: string
  comoros?: string
  compass?: string
  computer?: string
  computer_mouse?: string
  confetti_ball?: string
  confounded?: string
  confused?: string
  congo_brazzaville?: string
  congo_kinshasa?: string
  congratulations?: string
  construction?: string
  construction_worker?: string
  construction_worker_man?: string
  construction_worker_woman?: string
  control_knobs?: string
  convenience_store?: string
  cook?: string
  cook_islands?: string
  cookie?: string
  cool?: string
  cop?: string
  copilot?: string
  copyright?: string
  corn?: string
  costa_rica?: string
  cote_divoire?: string
  couch_and_lamp?: string
  couple?: string
  couple_with_heart?: string
  couple_with_heart_man_man?: string
  couple_with_heart_woman_man?: string
  couple_with_heart_woman_woman?: string
  couplekiss?: string
  couplekiss_man_man?: string
  couplekiss_man_woman?: string
  couplekiss_woman_woman?: string
  cow?: string
  cow2?: string
  cowboy_hat_face?: string
  crab?: string
  crayon?: string
  credit_card?: string
  crescent_moon?: string
  cricket?: string
  cricket_game?: string
  croatia?: string
  crocodile?: string
  croissant?: string
  crossed_fingers?: string
  crossed_flags?: string
  crossed_swords?: string
  crown?: string
  cry?: string
  crying_cat_face?: string
  crystal_ball?: string
  cuba?: string
  cucumber?: string
  cup_with_straw?: string
  cupcake?: string
  cupid?: string
  curacao?: string
  curling_stone?: string
  curly_haired_man?: string
  curly_haired_woman?: string
  curly_loop?: string
  currency_exchange?: string
  curry?: string
  cursing_face?: string
  custard?: string
  customs?: string
  cut_of_meat?: string
  cyclone?: string
  cyprus?: string
  czech_republic?: string
  dagger?: string
  dancer?: string
  dancers?: string
  dancing_men?: string
  dancing_women?: string
  dango?: string
  dark_sunglasses?: string
  dart?: string
  dash?: string
  date?: string
  de?: string
  deaf_man?: string
  deaf_person?: string
  deaf_woman?: string
  deciduous_tree?: string
  deer?: string
  denmark?: string
  department_store?: string
  dependabot?: string
  derelict_house?: string
  desert?: string
  desert_island?: string
  desktop_computer?: string
  detective?: string
  diamond_shape_with_a_dot_inside?: string
  diamonds?: string
  diego_garcia?: string
  disappointed?: string
  disappointed_relieved?: string
  disguised_face?: string
  diving_mask?: string
  diya_lamp?: string
  dizzy?: string
  dizzy_face?: string
  djibouti?: string
  dna?: string
  do_not_litter?: string
  dodo?: string
  dog?: string
  dog2?: string
  dollar?: string
  dolls?: string
  dolphin?: string
  dominica?: string
  dominican_republic?: string
  door?: string
  doughnut?: string
  dove?: string
  dragon?: string
  dragon_face?: string
  dress?: string
  dromedary_camel?: string
  drooling_face?: string
  drop_of_blood?: string
  droplet?: string
  drum?: string
  duck?: string
  dumpling?: string
  dvd?: string
  eagle?: string
  ear?: string
  ear_of_rice?: string
  ear_with_hearing_aid?: string
  earth_africa?: string
  earth_americas?: string
  earth_asia?: string
  ecuador?: string
  egg?: string
  eggplant?: string
  egypt?: string
  eight?: string
  eight_pointed_black_star?: string
  eight_spoked_asterisk?: string
  eject_button?: string
  el_salvador?: string
  electric_plug?: string
  electron?: string
  elephant?: string
  elevator?: string
  elf?: string
  elf_man?: string
  elf_woman?: string
  email?: string
  end?: string
  england?: string
  envelope?: string
  envelope_with_arrow?: string
  equatorial_guinea?: string
  eritrea?: string
  es?: string
  estonia?: string
  ethiopia?: string
  eu?: string
  euro?: string
  european_castle?: string
  european_post_office?: string
  european_union?: string
  evergreen_tree?: string
  exclamation?: string
  exploding_head?: string
  expressionless?: string
  eye?: string
  eye_speech_bubble?: string
  eyeglasses?: string
  eyes?: string
  face_exhaling?: string
  face_in_clouds?: string
  face_with_head_bandage?: string
  face_with_spiral_eyes?: string
  face_with_thermometer?: string
  facepalm?: string
  facepunch?: string
  factory?: string
  factory_worker?: string
  fairy?: string
  fairy_man?: string
  fairy_woman?: string
  falafel?: string
  falkland_islands?: string
  fallen_leaf?: string
  family?: string
  family_man_boy?: string
  family_man_boy_boy?: string
  family_man_girl?: string
  family_man_girl_boy?: string
  family_man_girl_girl?: string
  family_man_man_boy?: string
  family_man_man_boy_boy?: string
  family_man_man_girl?: string
  family_man_man_girl_boy?: string
  family_man_man_girl_girl?: string
  family_man_woman_boy?: string
  family_man_woman_boy_boy?: string
  family_man_woman_girl?: string
  family_man_woman_girl_boy?: string
  family_man_woman_girl_girl?: string
  family_woman_boy?: string
  family_woman_boy_boy?: string
  family_woman_girl?: string
  family_woman_girl_boy?: string
  family_woman_girl_girl?: string
  family_woman_woman_boy?: string
  family_woman_woman_boy_boy?: string
  family_woman_woman_girl?: string
  family_woman_woman_girl_boy?: string
  family_woman_woman_girl_girl?: string
  farmer?: string
  faroe_islands?: string
  fast_forward?: string
  fax?: string
  fearful?: string
  feather?: string
  feelsgood?: string
  feet?: string
  female_detective?: string
  female_sign?: string
  ferris_wheel?: string
  ferry?: string
  field_hockey?: string
  fiji?: string
  file_cabinet?: string
  file_folder?: string
  film_projector?: string
  film_strip?: string
  finland?: string
  finnadie?: string
  fire?: string
  fire_engine?: string
  fire_extinguisher?: string
  firecracker?: string
  firefighter?: string
  fireworks?: string
  first_quarter_moon?: string
  first_quarter_moon_with_face?: string
  fish?: string
  fish_cake?: string
  fishing_pole_and_fish?: string
  fishsticks?: string
  fist?: string
  fist_left?: string
  fist_oncoming?: string
  fist_raised?: string
  fist_right?: string
  five?: string
  flags?: string
  flamingo?: string
  flashlight?: string
  flat_shoe?: string
  flatbread?: string
  fleur_de_lis?: string
  flight_arrival?: string
  flight_departure?: string
  flipper?: string
  floppy_disk?: string
  flower_playing_cards?: string
  flushed?: string
  fly?: string
  flying_disc?: string
  flying_saucer?: string
  fog?: string
  foggy?: string
  fondue?: string
  foot?: string
  football?: string
  footprints?: string
  fork_and_knife?: string
  fortune_cookie?: string
  fountain?: string
  fountain_pen?: string
  four?: string
  four_leaf_clover?: string
  fox_face?: string
  fr?: string
  framed_picture?: string
  free?: string
  french_guiana?: string
  french_polynesia?: string
  french_southern_territories?: string
  fried_egg?: string
  fried_shrimp?: string
  fries?: string
  frog?: string
  frowning?: string
  frowning_face?: string
  frowning_man?: string
  frowning_person?: string
  frowning_woman?: string
  fu?: string
  fuelpump?: string
  full_moon?: string
  full_moon_with_face?: string
  funeral_urn?: string
  gabon?: string
  gambia?: string
  game_die?: string
  garlic?: string
  gb?: string
  gear?: string
  gem?: string
  gemini?: string
  genie?: string
  genie_man?: string
  genie_woman?: string
  georgia?: string
  ghana?: string
  ghost?: string
  gibraltar?: string
  gift?: string
  gift_heart?: string
  giraffe?: string
  girl?: string
  globe_with_meridians?: string
  gloves?: string
  goal_net?: string
  goat?: string
  goberserk?: string
  godmode?: string
  goggles?: string
  golf?: string
  golfing?: string
  golfing_man?: string
  golfing_woman?: string
  gorilla?: string
  grapes?: string
  greece?: string
  green_apple?: string
  green_book?: string
  green_circle?: string
  green_heart?: string
  green_salad?: string
  green_square?: string
  greenland?: string
  grenada?: string
  grey_exclamation?: string
  grey_question?: string
  grimacing?: string
  grin?: string
  grinning?: string
  guadeloupe?: string
  guam?: string
  guard?: string
  guardsman?: string
  guardswoman?: string
  guatemala?: string
  guernsey?: string
  guide_dog?: string
  guinea?: string
  guinea_bissau?: string
  guitar?: string
  gun?: string
  guyana?: string
  haircut?: string
  haircut_man?: string
  haircut_woman?: string
  haiti?: string
  hamburger?: string
  hammer?: string
  hammer_and_pick?: string
  hammer_and_wrench?: string
  hamster?: string
  hand?: string
  hand_over_mouth?: string
  handbag?: string
  handball_person?: string
  handshake?: string
  hankey?: string
  hash?: string
  hatched_chick?: string
  hatching_chick?: string
  headphones?: string
  headstone?: string
  health_worker?: string
  hear_no_evil?: string
  heard_mcdonald_islands?: string
  heart?: string
  heart_decoration?: string
  heart_eyes?: string
  heart_eyes_cat?: string
  heart_on_fire?: string
  heartbeat?: string
  heartpulse?: string
  hearts?: string
  heavy_check_mark?: string
  heavy_division_sign?: string
  heavy_dollar_sign?: string
  heavy_exclamation_mark?: string
  heavy_heart_exclamation?: string
  heavy_minus_sign?: string
  heavy_multiplication_x?: string
  heavy_plus_sign?: string
  hedgehog?: string
  helicopter?: string
  herb?: string
  hibiscus?: string
  high_brightness?: string
  high_heel?: string
  hiking_boot?: string
  hindu_temple?: string
  hippopotamus?: string
  hocho?: string
  hole?: string
  honduras?: string
  honey_pot?: string
  honeybee?: string
  hong_kong?: string
  hook?: string
  horse?: string
  horse_racing?: string
  hospital?: string
  hot_face?: string
  hot_pepper?: string
  hotdog?: string
  hotel?: string
  hotsprings?: string
  hourglass?: string
  hourglass_flowing_sand?: string
  house?: string
  house_with_garden?: string
  houses?: string
  hugs?: string
  hungary?: string
  hurtrealbad?: string
  hushed?: string
  hut?: string
  ice_cream?: string
  ice_cube?: string
  ice_hockey?: string
  ice_skate?: string
  icecream?: string
  iceland?: string
  id: string
  ideograph_advantage?: string
  imp?: string
  inbox_tray?: string
  incoming_envelope?: string
  india?: string
  indonesia?: string
  infinity?: string
  information_desk_person?: string
  information_source?: string
  innocent?: string
  interrobang?: string
  iphone?: string
  iran?: string
  iraq?: string
  ireland?: string
  isle_of_man?: string
  israel?: string
  it?: string
  izakaya_lantern?: string
  jack_o_lantern?: string
  jamaica?: string
  japan?: string
  japanese_castle?: string
  japanese_goblin?: string
  japanese_ogre?: string
  jeans?: string
  jersey?: string
  jigsaw?: string
  jordan?: string
  joy?: string
  joy_cat?: string
  joystick?: string
  jp?: string
  judge?: string
  juggling_person?: string
  kangaroo?: string
  kazakhstan?: string
  kenya?: string
  key?: string
  keyboard?: string
  keycap_ten?: string
  kick_scooter?: string
  kimono?: string
  kiribati?: string
  kiss?: string
  kissing?: string
  kissing_cat?: string
  kissing_closed_eyes?: string
  kissing_heart?: string
  kissing_smiling_eyes?: string
  kite?: string
  kiwi_fruit?: string
  kneeling_man?: string
  kneeling_person?: string
  kneeling_woman?: string
  knife?: string
  knot?: string
  koala?: string
  koko?: string
  kosovo?: string
  kr?: string
  kuwait?: string
  kyrgyzstan?: string
  lab_coat?: string
  label?: string
  lacrosse?: string
  ladder?: string
  lady_beetle?: string
  lantern?: string
  laos?: string
  large_blue_circle?: string
  large_blue_diamond?: string
  large_orange_diamond?: string
  last_quarter_moon?: string
  last_quarter_moon_with_face?: string
  latin_cross?: string
  latvia?: string
  laughing?: string
  leafy_green?: string
  leaves?: string
  lebanon?: string
  ledger?: string
  left_luggage?: string
  left_right_arrow?: string
  left_speech_bubble?: string
  leftwards_arrow_with_hook?: string
  leg?: string
  lemon?: string
  leo?: string
  leopard?: string
  lesotho?: string
  level_slider?: string
  liberia?: string
  libra?: string
  libya?: string
  liechtenstein?: string
  light_rail?: string
  link?: string
  lion?: string
  lips?: string
  lipstick?: string
  lithuania?: string
  lizard?: string
  llama?: string
  lobster?: string
  lock?: string
  lock_with_ink_pen?: string
  lollipop?: string
  long_drum?: string
  loop?: string
  lotion_bottle?: string
  lotus_position?: string
  lotus_position_man?: string
  lotus_position_woman?: string
  loud_sound?: string
  loudspeaker?: string
  love_hotel?: string
  love_letter?: string
  love_you_gesture?: string
  low_brightness?: string
  luggage?: string
  lungs?: string
  luxembourg?: string
  lying_face?: string
  m?: string
  macau?: string
  macedonia?: string
  madagascar?: string
  mag?: string
  mag_right?: string
  mage?: string
  mage_man?: string
  mage_woman?: string
  magic_wand?: string
  magnet?: string
  mahjong?: string
  mailbox?: string
  mailbox_closed?: string
  mailbox_with_mail?: string
  mailbox_with_no_mail?: string
  malawi?: string
  malaysia?: string
  maldives?: string
  male_detective?: string
  male_sign?: string
  mali?: string
  malta?: string
  mammoth?: string
  man?: string
  man_artist?: string
  man_astronaut?: string
  man_beard?: string
  man_cartwheeling?: string
  man_cook?: string
  man_dancing?: string
  man_facepalming?: string
  man_factory_worker?: string
  man_farmer?: string
  man_feeding_baby?: string
  man_firefighter?: string
  man_health_worker?: string
  man_in_manual_wheelchair?: string
  man_in_motorized_wheelchair?: string
  man_in_tuxedo?: string
  man_judge?: string
  man_juggling?: string
  man_mechanic?: string
  man_office_worker?: string
  man_pilot?: string
  man_playing_handball?: string
  man_playing_water_polo?: string
  man_scientist?: string
  man_shrugging?: string
  man_singer?: string
  man_student?: string
  man_teacher?: string
  man_technologist?: string
  man_with_gua_pi_mao?: string
  man_with_probing_cane?: string
  man_with_turban?: string
  man_with_veil?: string
  mandarin?: string
  mango?: string
  mans_shoe?: string
  mantelpiece_clock?: string
  manual_wheelchair?: string
  maple_leaf?: string
  marshall_islands?: string
  martial_arts_uniform?: string
  martinique?: string
  mask?: string
  massage?: string
  massage_man?: string
  massage_woman?: string
  mate?: string
  mauritania?: string
  mauritius?: string
  mayotte?: string
  meat_on_bone?: string
  mechanic?: string
  mechanical_arm?: string
  mechanical_leg?: string
  medal_military?: string
  medal_sports?: string
  medical_symbol?: string
  mega?: string
  melon?: string
  memo?: string
  men_wrestling?: string
  mending_heart?: string
  menorah?: string
  mens?: string
  mermaid?: string
  merman?: string
  merperson?: string
  metal?: string
  metro?: string
  mexico?: string
  microbe?: string
  micronesia?: string
  microphone?: string
  microscope?: string
  middle_finger?: string
  military_helmet?: string
  milk_glass?: string
  milky_way?: string
  minibus?: string
  minidisc?: string
  mirror?: string
  mobile_phone_off?: string
  moldova?: string
  monaco?: string
  money_mouth_face?: string
  money_with_wings?: string
  moneybag?: string
  mongolia?: string
  monkey?: string
  monkey_face?: string
  monocle_face?: string
  monorail?: string
  montenegro?: string
  montserrat?: string
  moon?: string
  moon_cake?: string
  morocco?: string
  mortar_board?: string
  mosque?: string
  mosquito?: string
  motor_boat?: string
  motor_scooter?: string
  motorcycle?: string
  motorized_wheelchair?: string
  motorway?: string
  mount_fuji?: string
  mountain?: string
  mountain_bicyclist?: string
  mountain_biking_man?: string
  mountain_biking_woman?: string
  mountain_cableway?: string
  mountain_railway?: string
  mountain_snow?: string
  mouse?: string
  mouse2?: string
  mouse_trap?: string
  movie_camera?: string
  moyai?: string
  mozambique?: string
  mrs_claus?: string
  muscle?: string
  mushroom?: string
  musical_keyboard?: string
  musical_note?: string
  musical_score?: string
  mute?: string
  mx_claus?: string
  myanmar?: string
  nail_care?: string
  name_badge?: string
  namibia?: string
  national_park?: string
  nauru?: string
  nauseated_face?: string
  nazar_amulet?: string
  neckbeard?: string
  necktie?: string
  negative_squared_cross_mark?: string
  nepal?: string
  nerd_face?: string
  nesting_dolls?: string
  netherlands?: string
  neutral_face?: string
  new?: string
  new_caledonia?: string
  new_moon?: string
  new_moon_with_face?: string
  new_zealand?: string
  newspaper?: string
  newspaper_roll?: string
  next_track_button?: string
  ng?: string
  ng_man?: string
  ng_woman?: string
  nicaragua?: string
  niger?: string
  nigeria?: string
  night_with_stars?: string
  nine?: string
  ninja?: string
  niue?: string
  no_bell?: string
  no_bicycles?: string
  no_entry?: string
  no_entry_sign?: string
  no_good?: string
  no_good_man?: string
  no_good_woman?: string
  no_mobile_phones?: string
  no_mouth?: string
  no_pedestrians?: string
  no_smoking?: string
  nonpotable_water?: string
  norfolk_island?: string
  north_korea?: string
  northern_mariana_islands?: string
  norway?: string
  nose?: string
  notebook?: string
  notebook_with_decorative_cover?: string
  notes?: string
  nut_and_bolt?: string
  o?: string
  o2?: string
  ocean?: string
  octocat?: string
  octopus?: string
  oden?: string
  office?: string
  office_worker?: string
  oil_drum?: string
  ok?: string
  ok_hand?: string
  ok_man?: string
  ok_person?: string
  ok_woman?: string
  old_key?: string
  older_adult?: string
  older_man?: string
  older_woman?: string
  olive?: string
  om?: string
  oman?: string
  on?: string
  oncoming_automobile?: string
  oncoming_bus?: string
  oncoming_police_car?: string
  oncoming_taxi?: string
  one?: string
  one_piece_swimsuit?: string
  onion?: string
  open_book?: string
  open_file_folder?: string
  open_hands?: string
  open_mouth?: string
  open_umbrella?: string
  ophiuchus?: string
  orange?: string
  orange_book?: string
  orange_circle?: string
  orange_heart?: string
  orange_square?: string
  orangutan?: string
  orthodox_cross?: string
  otter?: string
  outbox_tray?: string
  owl?: string
  ox?: string
  oyster?: string
  package?: string
  page_facing_up?: string
  page_with_curl?: string
  pager?: string
  paintbrush?: string
  pakistan?: string
  palau?: string
  palestinian_territories?: string
  palm_tree?: string
  palms_up_together?: string
  panama?: string
  pancakes?: string
  panda_face?: string
  paperclip?: string
  paperclips?: string
  papua_new_guinea?: string
  parachute?: string
  paraguay?: string
  parasol_on_ground?: string
  parking?: string
  parrot?: string
  part_alternation_mark?: string
  partly_sunny?: string
  partying_face?: string
  passenger_ship?: string
  passport_control?: string
  pause_button?: string
  paw_prints?: string
  peace_symbol?: string
  peach?: string
  peacock?: string
  peanuts?: string
  pear?: string
  pen?: string
  pencil?: string
  pencil2?: string
  penguin?: string
  pensive?: string
  people_holding_hands?: string
  people_hugging?: string
  performing_arts?: string
  persevere?: string
  person_bald?: string
  person_curly_hair?: string
  person_feeding_baby?: string
  person_fencing?: string
  person_in_manual_wheelchair?: string
  person_in_motorized_wheelchair?: string
  person_in_tuxedo?: string
  person_red_hair?: string
  person_white_hair?: string
  person_with_probing_cane?: string
  person_with_turban?: string
  person_with_veil?: string
  peru?: string
  petri_dish?: string
  philippines?: string
  phone?: string
  pick?: string
  pickup_truck?: string
  pie?: string
  pig?: string
  pig2?: string
  pig_nose?: string
  pill?: string
  pilot?: string
  pinata?: string
  pinched_fingers?: string
  pinching_hand?: string
  pineapple?: string
  ping_pong?: string
  pirate_flag?: string
  pisces?: string
  pitcairn_islands?: string
  pizza?: string
  placard?: string
  place_of_worship?: string
  plate_with_cutlery?: string
  play_or_pause_button?: string
  pleading_face?: string
  plunger?: string
  point_down?: string
  point_left?: string
  point_right?: string
  point_up?: string
  point_up_2?: string
  poland?: string
  polar_bear?: string
  police_car?: string
  police_officer?: string
  policeman?: string
  policewoman?: string
  poodle?: string
  poop?: string
  popcorn?: string
  portugal?: string
  post_office?: string
  postal_horn?: string
  postbox?: string
  potable_water?: string
  potato?: string
  potted_plant?: string
  pouch?: string
  poultry_leg?: string
  pound?: string
  pout?: string
  pouting_cat?: string
  pouting_face?: string
  pouting_man?: string
  pouting_woman?: string
  pray?: string
  prayer_beads?: string
  pregnant_woman?: string
  pretzel?: string
  previous_track_button?: string
  prince?: string
  princess?: string
  printer?: string
  probing_cane?: string
  puerto_rico?: string
  punch?: string
  purple_circle?: string
  purple_heart?: string
  purple_square?: string
  purse?: string
  pushpin?: string
  put_litter_in_its_place?: string
  qatar?: string
  question?: string
  rabbit?: string
  rabbit2?: string
  raccoon?: string
  racehorse?: string
  racing_car?: string
  radio?: string
  radio_button?: string
  radioactive?: string
  rage?: string
  rage1?: string
  rage2?: string
  rage3?: string
  rage4?: string
  railway_car?: string
  railway_track?: string
  rainbow?: string
  rainbow_flag?: string
  raised_back_of_hand?: string
  raised_eyebrow?: string
  raised_hand?: string
  raised_hand_with_fingers_splayed?: string
  raised_hands?: string
  raising_hand?: string
  raising_hand_man?: string
  raising_hand_woman?: string
  ram?: string
  ramen?: string
  rat?: string
  razor?: string
  receipt?: string
  record_button?: string
  recycle?: string
  red_car?: string
  red_circle?: string
  red_envelope?: string
  red_haired_man?: string
  red_haired_woman?: string
  red_square?: string
  registered?: string
  relaxed?: string
  relieved?: string
  reminder_ribbon?: string
  repeat?: string
  repeat_one?: string
  rescue_worker_helmet?: string
  restroom?: string
  reunion?: string
  revolving_hearts?: string
  rewind?: string
  rhinoceros?: string
  ribbon?: string
  rice?: string
  rice_ball?: string
  rice_cracker?: string
  rice_scene?: string
  right_anger_bubble?: string
  ring?: string
  ringed_planet?: string
  robot?: string
  rock?: string
  rocket?: string
  rofl?: string
  roll_eyes?: string
  roll_of_paper?: string
  roller_coaster?: string
  roller_skate?: string
  romania?: string
  rooster?: string
  rose?: string
  rosette?: string
  rotating_light?: string
  round_pushpin?: string
  rowboat?: string
  rowing_man?: string
  rowing_woman?: string
  ru?: string
  rugby_football?: string
  runner?: string
  running?: string
  running_man?: string
  running_shirt_with_sash?: string
  running_woman?: string
  rwanda?: string
  sa?: string
  safety_pin?: string
  safety_vest?: string
  sagittarius?: string
  sailboat?: string
  sake?: string
  salt?: string
  samoa?: string
  san_marino?: string
  sandal?: string
  sandwich?: string
  santa?: string
  sao_tome_principe?: string
  sari?: string
  sassy_man?: string
  sassy_woman?: string
  satellite?: string
  satisfied?: string
  saudi_arabia?: string
  sauna_man?: string
  sauna_person?: string
  sauna_woman?: string
  sauropod?: string
  saxophone?: string
  scarf?: string
  school?: string
  school_satchel?: string
  scientist?: string
  scissors?: string
  scorpion?: string
  scorpius?: string
  scotland?: string
  scream?: string
  scream_cat?: string
  screwdriver?: string
  scroll?: string
  seal?: string
  seat?: string
  secret?: string
  see_no_evil?: string
  seedling?: string
  selfie?: string
  senegal?: string
  serbia?: string
  service_dog?: string
  seven?: string
  sewing_needle?: string
  seychelles?: string
  shallow_pan_of_food?: string
  shamrock?: string
  shark?: string
  shaved_ice?: string
  sheep?: string
  shell?: string
  shield?: string
  shinto_shrine?: string
  ship?: string
  shipit?: string
  shirt?: string
  shoe?: string
  shopping?: string
  shopping_cart?: string
  shorts?: string
  shower?: string
  shrimp?: string
  shrug?: string
  shushing_face?: string
  sierra_leone?: string
  signal_strength?: string
  singapore?: string
  singer?: string
  sint_maarten?: string
  six?: string
  six_pointed_star?: string
  skateboard?: string
  ski?: string
  skier?: string
  skull?: string
  skull_and_crossbones?: string
  skunk?: string
  sled?: string
  sleeping?: string
  sleeping_bed?: string
  sleepy?: string
  slightly_frowning_face?: string
  slightly_smiling_face?: string
  slot_machine?: string
  sloth?: string
  slovakia?: string
  slovenia?: string
  small_airplane?: string
  small_blue_diamond?: string
  small_orange_diamond?: string
  small_red_triangle?: string
  small_red_triangle_down?: string
  smile?: string
  smile_cat?: string
  smiley?: string
  smiley_cat?: string
  smiling_face_with_tear?: string
  smiling_face_with_three_hearts?: string
  smiling_imp?: string
  smirk?: string
  smirk_cat?: string
  smoking?: string
  snail?: string
  snake?: string
  sneezing_face?: string
  snowboarder?: string
  snowflake?: string
  snowman?: string
  snowman_with_snow?: string
  soap?: string
  sob?: string
  soccer?: string
  socks?: string
  softball?: string
  solomon_islands?: string
  somalia?: string
  soon?: string
  sos?: string
  sound?: string
  south_africa?: string
  south_georgia_south_sandwich_islands?: string
  south_sudan?: string
  space_invader?: string
  spades?: string
  spaghetti?: string
  sparkle?: string
  sparkler?: string
  sparkles?: string
  sparkling_heart?: string
  speak_no_evil?: string
  speaker?: string
  speaking_head?: string
  speech_balloon?: string
  speedboat?: string
  spider?: string
  spider_web?: string
  spiral_calendar?: string
  spiral_notepad?: string
  sponge?: string
  spoon?: string
  squid?: string
  sri_lanka?: string
  st_barthelemy?: string
  st_helena?: string
  st_kitts_nevis?: string
  st_lucia?: string
  st_martin?: string
  st_pierre_miquelon?: string
  st_vincent_grenadines?: string
  stadium?: string
  standing_man?: string
  standing_person?: string
  standing_woman?: string
  star?: string
  star2?: string
  star_and_crescent?: string
  star_of_david?: string
  star_struck?: string
  stars?: string
  station?: string
  statue_of_liberty?: string
  steam_locomotive?: string
  stethoscope?: string
  stew?: string
  stop_button?: string
  stop_sign?: string
  stopwatch?: string
  straight_ruler?: string
  strawberry?: string
  stuck_out_tongue?: string
  stuck_out_tongue_closed_eyes?: string
  stuck_out_tongue_winking_eye?: string
  student?: string
  studio_microphone?: string
  stuffed_flatbread?: string
  sudan?: string
  sun_behind_large_cloud?: string
  sun_behind_rain_cloud?: string
  sun_behind_small_cloud?: string
  sun_with_face?: string
  sunflower?: string
  sunglasses?: string
  sunny?: string
  sunrise?: string
  sunrise_over_mountains?: string
  superhero?: string
  superhero_man?: string
  superhero_woman?: string
  supervillain?: string
  supervillain_man?: string
  supervillain_woman?: string
  surfer?: string
  surfing_man?: string
  surfing_woman?: string
  suriname?: string
  sushi?: string
  suspect?: string
  suspension_railway?: string
  svalbard_jan_mayen?: string
  swan?: string
  swaziland?: string
  sweat?: string
  sweat_drops?: string
  sweat_smile?: string
  sweden?: string
  sweet_potato?: string
  swim_brief?: string
  swimmer?: string
  swimming_man?: string
  swimming_woman?: string
  switzerland?: string
  symbols?: string
  synagogue?: string
  syria?: string
  syringe?: string
  taco?: string
  tada?: string
  taiwan?: string
  tajikistan?: string
  takeout_box?: string
  tamale?: string
  tanabata_tree?: string
  tangerine?: string
  tanzania?: string
  taurus?: string
  taxi?: string
  tea?: string
  teacher?: string
  teapot?: string
  technologist?: string
  teddy_bear?: string
  telephone?: string
  telephone_receiver?: string
  telescope?: string
  tennis?: string
  tent?: string
  test_tube?: string
  thailand?: string
  thermometer?: string
  thinking?: string
  thong_sandal?: string
  thought_balloon?: string
  thread?: string
  three?: string
  thumbsdown?: string
  thumbsup?: string
  ticket?: string
  tickets?: string
  tiger?: string
  tiger2?: string
  timer_clock?: string
  timor_leste?: string
  tipping_hand_man?: string
  tipping_hand_person?: string
  tipping_hand_woman?: string
  tired_face?: string
  tm?: string
  togo?: string
  toilet?: string
  tokelau?: string
  tokyo_tower?: string
  tomato?: string
  tonga?: string
  tongue?: string
  toolbox?: string
  tooth?: string
  toothbrush?: string
  top?: string
  tophat?: string
  tornado?: string
  tr?: string
  trackball?: string
  tractor?: string
  traffic_light?: string
  train?: string
  train2?: string
  tram?: string
  transgender_flag?: string
  transgender_symbol?: string
  trex?: string
  triangular_flag_on_post?: string
  triangular_ruler?: string
  trident?: string
  trinidad_tobago?: string
  tristan_da_cunha?: string
  triumph?: string
  trolleybus?: string
  trollface?: string
  trophy?: string
  tropical_drink?: string
  tropical_fish?: string
  truck?: string
  trumpet?: string
  tshirt?: string
  tulip?: string
  tumbler_glass?: string
  tunisia?: string
  turkey?: string
  turkmenistan?: string
  turks_caicos_islands?: string
  turtle?: string
  tuvalu?: string
  tv?: string
  twisted_rightwards_arrows?: string
  two?: string
  two_hearts?: string
  two_men_holding_hands?: string
  two_women_holding_hands?: string
  u5272?: string
  u5408?: string
  u55b6?: string
  u6307?: string
  u6708?: string
  u6709?: string
  u6e80?: string
  u7121?: string
  u7533?: string
  u7981?: string
  u7a7a?: string
  uganda?: string
  uk?: string
  ukraine?: string
  umbrella?: string
  unamused?: string
  underage?: string
  unicorn?: string
  united_arab_emirates?: string
  united_nations?: string
  unlock?: string
  up?: string
  upside_down_face?: string
  uruguay?: string
  us?: string
  us_outlying_islands?: string
  us_virgin_islands?: string
  uzbekistan?: string
  v?: string
  vampire?: string
  vampire_man?: string
  vampire_woman?: string
  vanuatu?: string
  vatican_city?: string
  venezuela?: string
  vertical_traffic_light?: string
  vhs?: string
  vibration_mode?: string
  video_camera?: string
  video_game?: string
  vietnam?: string
  violin?: string
  virgo?: string
  volcano?: string
  volleyball?: string
  vomiting_face?: string
  vs?: string
  vulcan_salute?: string
  waffle?: string
  wales?: string
  walking?: string
  walking_man?: string
  walking_woman?: string
  wallis_futuna?: string
  waning_crescent_moon?: string
  waning_gibbous_moon?: string
  warning?: string
  wastebasket?: string
  watch?: string
  water_buffalo?: string
  water_polo?: string
  watermelon?: string
  wave?: string
  wavy_dash?: string
  waxing_crescent_moon?: string
  waxing_gibbous_moon?: string
  wc?: string
  weary?: string
  wedding?: string
  weight_lifting?: string
  weight_lifting_man?: string
  weight_lifting_woman?: string
  western_sahara?: string
  whale?: string
  whale2?: string
  wheel_of_dharma?: string
  wheelchair?: string
  white_check_mark?: string
  white_circle?: string
  white_flag?: string
  white_flower?: string
  white_haired_man?: string
  white_haired_woman?: string
  white_heart?: string
  white_large_square?: string
  white_medium_small_square?: string
  white_medium_square?: string
  white_small_square?: string
  white_square_button?: string
  wilted_flower?: string
  wind_chime?: string
  wind_face?: string
  window?: string
  wine_glass?: string
  wink?: string
  wolf?: string
  woman?: string
  woman_artist?: string
  woman_astronaut?: string
  woman_beard?: string
  woman_cartwheeling?: string
  woman_cook?: string
  woman_dancing?: string
  woman_facepalming?: string
  woman_factory_worker?: string
  woman_farmer?: string
  woman_feeding_baby?: string
  woman_firefighter?: string
  woman_health_worker?: string
  woman_in_manual_wheelchair?: string
  woman_in_motorized_wheelchair?: string
  woman_in_tuxedo?: string
  woman_judge?: string
  woman_juggling?: string
  woman_mechanic?: string
  woman_office_worker?: string
  woman_pilot?: string
  woman_playing_handball?: string
  woman_playing_water_polo?: string
  woman_scientist?: string
  woman_shrugging?: string
  woman_singer?: string
  woman_student?: string
  woman_teacher?: string
  woman_technologist?: string
  woman_with_headscarf?: string
  woman_with_probing_cane?: string
  woman_with_turban?: string
  woman_with_veil?: string
  womans_clothes?: string
  womans_hat?: string
  women_wrestling?: string
  womens?: string
  wood?: string
  woozy_face?: string
  world_map?: string
  worm?: string
  worried?: string
  wrench?: string
  wrestling?: string
  writing_hand?: string
  x?: string
  yarn?: string
  yawning_face?: string
  yellow_circle?: string
  yellow_heart?: string
  yellow_square?: string
  yemen?: string
  yen?: string
  yin_yang?: string
  yo_yo?: string
  yum?: string
  zambia?: string
  zany_face?: string
  zap?: string
  zebra?: string
  zero?: string
  zimbabwe?: string
  zipper_mouth_face?: string
  zombie?: string
  zombie_man?: string
  zombie_woman?: string
  zzz?: string
}

export interface EmptyObject {
  attestations?: any[]
  enable_debug_logging?: boolean
  encrypted_value: string
  include_claim_keys?: any[]
  key_id: string
  languages?: any[]
  name: string
  query_suite?: string
  runner_label?: string
  runner_type?: string
  selected_repository_ids?: any[]
  state?: string
  threat_model?: string
  use_default: boolean
  value: string
  visibility: string
}

export interface EmptyObjectLoadMatch {
  subject_digest: string
  username: string
  after?: string
  before?: string
  per_page?: number
  predicate_type?: string
}

export interface EmptyObjectCreateData {
  org_id: string
  attestations?: any[]
  enable_debug_logging?: boolean
  encrypted_value: string
  include_claim_keys?: any[]
  key_id: string
  languages?: any[]
  name: string
  query_suite?: string
  runner_label?: string
  runner_type?: string
  selected_repository_ids?: any[]
  state?: string
  threat_model?: string
  use_default: boolean
  value: string
  visibility: string
}

export interface EmptyObjectUpdateData {
  org_id: string
  secret_name: string
  attestations?: any[]
  enable_debug_logging?: boolean
  encrypted_value?: string
  include_claim_keys?: any[]
  key_id?: string
  languages?: any[]
  name?: string
  query_suite?: string
  runner_label?: string
  runner_type?: string
  selected_repository_ids?: any[]
  state?: string
  threat_model?: string
  use_default?: boolean
  value?: string
  visibility?: string
}

export interface EnterpriseTeam {
  created_at: string
  description?: string
  group_id: string
  group_name?: string
  html_url: string
  id: number
  members_url: string
  name: string
  organization_selection_type?: string
  slug: string
  sync_to_organizations?: string
  updated_at: string
  url: string
}

export interface EnterpriseTeamLoadMatch {
  enterprise: string
  id: string
}

export interface EnterpriseTeamListMatch {
  enterprise: string
  page?: number
  per_page?: number
}

export interface EnterpriseTeamCreateData {
  enterprise: string
  created_at: string
  description?: string
  group_id: string
  group_name?: string
  html_url: string
  id: number
  members_url: string
  name: string
  organization_selection_type?: string
  slug: string
  sync_to_organizations?: string
  updated_at: string
  url: string
}

export interface EnterpriseTeamUpdateData {
  enterprise: string
  id: string
  created_at?: string
  description?: string
  group_id?: string
  group_name?: string
  html_url?: string
  members_url?: string
  name?: string
  organization_selection_type?: string
  slug?: string
  sync_to_organizations?: string
  updated_at?: string
  url?: string
}

export interface EnterpriseTeamRemoveMatch {
  enterprise: string
  id: string
}

export interface EnterpriseTeamMembership {
  id?: string
}

export interface EnterpriseTeamMembershipRemoveMatch {
  enterprise: string
  id: string
  team_id: string
}

export interface Environment {
  created_at: string
  deployment_branch_policy: Record<string, any>
  html_url: string
  id: number
  name: string
  node_id: string
  prevent_self_review?: boolean
  protection_rules?: any[]
  reviewers?: any[]
  updated_at: string
  url: string
  wait_timer?: number
}

export interface EnvironmentLoadMatch {
  id: string
  owner: string
  repo: string
}

export interface EnvironmentUpdateData {
  id: string
  owner: string
  repo: string
  created_at?: string
  deployment_branch_policy?: Record<string, any>
  html_url?: string
  name?: string
  node_id?: string
  prevent_self_review?: boolean
  protection_rules?: any[]
  reviewers?: any[]
  updated_at?: string
  url?: string
  wait_timer?: number
}

export interface EnvironmentApproval {
  comment: string
  environments: any[]
  state: string
  user: Record<string, any>
}

export interface EnvironmentApprovalListMatch {
  owner: string
  repo: string
  run_id: number
}

export interface Event {
  actor: Record<string, any>
  created_at: string
  id: string
  org: Record<string, any>
  payload: Record<string, any>
  public: boolean
  repo: Record<string, any>
  type: string
}

export interface EventLoadMatch {
  org: string
  username: string
  page?: number
  per_page?: number
}

export interface EventListMatch {
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'public'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Feed {
  current_user_actor_url?: string
  current_user_organization_url?: string
  current_user_organization_urls?: any[]
  current_user_public_url?: string
  current_user_url?: string
  links: Record<string, any>
  repository_discussions_category_url?: string
  repository_discussions_url?: string
  security_advisories_url?: string
  timeline_url: string
  user_url: string
}

export interface FeedListMatch {
  current_user_actor_url?: string
  current_user_organization_url?: string
  current_user_organization_urls?: any[]
  current_user_public_url?: string
  current_user_url?: string
  links?: Record<string, any>
  repository_discussions_category_url?: string
  repository_discussions_url?: string
  security_advisories_url?: string
  timeline_url?: string
  user_url?: string
}

export interface FileCommit {
  author: Record<string, any>
  branch?: string
  commit: Record<string, any>
  committer: Record<string, any>
  content: Record<string, any>
  message: string
  sha?: string
}

export interface FileCommitUpdateData {
  owner: string
  path: string
  repo: string
  author?: Record<string, any>
  branch?: string
  commit?: Record<string, any>
  committer?: Record<string, any>
  content?: Record<string, any>
  message?: string
  sha?: string
}

export interface FileCommitRemoveMatch {
  owner: string
  path: string
  repo: string
}

export interface Follower {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface FollowerListMatch {
  page?: number
  per_page?: number
}

export interface Following {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface FollowingListMatch {
  page?: number
  per_page?: number
}

export interface FullRepository {
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
  github_id: number
  gitignore_template?: string
  has_discussions: boolean
  has_downloads?: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url: string
  id: string
  include_all_branches?: boolean
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

export interface FullRepositoryLoadMatch {
  owner: string
  repo: string
}

export interface FullRepositoryCreateData {
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
  github_id: number
  gitignore_template?: string
  has_discussions: boolean
  has_downloads?: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url: string
  id: string
  include_all_branches?: boolean
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

export interface FullRepositoryUpdateData {
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
  github_id?: number
  gitignore_template?: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url?: string
  html_url?: string
  id?: string
  include_all_branches?: boolean
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

export interface Gist {
  comments?: number
  comments_enabled?: boolean
  comments_url?: string
  commits_url?: string
  created_at?: string
  description?: string
  files?: Record<string, any>
  fork_of: Record<string, any>
  forks?: any[]
  forks_url?: string
  git_pull_url?: string
  git_push_url?: string
  history?: any[]
  html_url?: string
  id?: string
  node_id?: string
  owner: Record<string, any>
  public?: boolean
  truncated?: boolean
  updated_at?: string
  url?: string
  user?: string
}

export interface GistLoadMatch {
  id: string

  // Selects a custom action instead of the plain load:
  //   'star'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GistListMatch {
  page?: number
  per_page?: number
  since?: string
}

export interface GistCreateData {
  comments?: number
  comments_enabled?: boolean
  comments_url?: string
  commits_url?: string
  created_at?: string
  description?: string
  files?: Record<string, any>
  fork_of: Record<string, any>
  forks?: any[]
  forks_url?: string
  git_pull_url?: string
  git_push_url?: string
  history?: any[]
  html_url?: string
  id?: string
  node_id?: string
  owner: Record<string, any>
  public?: boolean
  truncated?: boolean
  updated_at?: string
  url?: string
  user?: string
}

export interface GistUpdateData {
  id: string
  comments?: number
  comments_enabled?: boolean
  comments_url?: string
  commits_url?: string
  created_at?: string
  description?: string
  files?: Record<string, any>
  fork_of?: Record<string, any>
  forks?: any[]
  forks_url?: string
  git_pull_url?: string
  git_push_url?: string
  history?: any[]
  html_url?: string
  node_id?: string
  owner?: Record<string, any>
  public?: boolean
  truncated?: boolean
  updated_at?: string
  url?: string
  user?: string

  // Selects a custom action instead of the plain update:
  //   'star'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GistRemoveMatch {
  comment_id?: number
  id: string

  // Selects a custom action instead of the plain remove:
  //   'star'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GistComment {
  author_association: string
  avatar_url: string
  body: string
  created_at: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  updated_at: string
  url: string
  user: Record<string, any>
  user_view_type?: string
}

export interface GistCommentLoadMatch {
  gist_id: string
  id: number
}

export interface GistCommentListMatch {
  id: string
  page?: number
  per_page?: number
}

export interface GistCommentCreateData {
  id: string
  author_association: string
  avatar_url: string
  body: string
  created_at: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  updated_at: string
  url: string
  user: Record<string, any>
  user_view_type?: string
}

export interface GistCommentUpdateData {
  gist_id: string
  id: number
  author_association?: string
  avatar_url?: string
  body?: string
  created_at?: string
  email?: string
  events_url?: string
  followers_url?: string
  following_url?: string
  gists_url?: string
  gravatar_id?: string
  html_url?: string
  login?: string
  name?: string
  node_id?: string
  organizations_url?: string
  received_events_url?: string
  repos_url?: string
  site_admin?: boolean
  starred_at?: string
  starred_url?: string
  subscriptions_url?: string
  type?: string
  updated_at?: string
  url?: string
  user?: Record<string, any>
  user_view_type?: string
}

export interface GistCommit {
  change_status: Record<string, any>
  committed_at: string
  id?: string
  url: string
  user: Record<string, any>
  version: string
}

export interface GistCommitListMatch {
  id: string
  page?: number
  per_page?: number
}

export interface GistSimple {
  comments?: number
  comments_enabled?: boolean
  comments_url?: string
  commits_url?: string
  created_at?: string
  description?: string
  files?: Record<string, any>
  fork_of: Record<string, any>
  forks?: any[]
  forks_url?: string
  git_pull_url?: string
  git_push_url?: string
  history?: any[]
  html_url?: string
  id?: string
  node_id?: string
  owner: Record<string, any>
  public?: boolean
  truncated?: boolean
  updated_at?: string
  url?: string
  user?: string
}

export interface GistSimpleListMatch {
  id: string
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'forks'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Git {
}

export interface GitRemoveMatch {
  owner: string
  ref: string
  repo: string
}

export interface GitCommit {
  author: Record<string, any>
  committer: Record<string, any>
  html_url: string
  id?: string
  message: string
  node_id: string
  parents: any[]
  sha: string
  signature?: string
  tree: Record<string, any>
  url: string
  verification: Record<string, any>
}

export interface GitCommitLoadMatch {
  id: string
  owner: string
  repo: string
}

export interface GitCommitCreateData {
  owner: string
  repo: string
  author: Record<string, any>
  committer: Record<string, any>
  html_url: string
  id?: string
  message: string
  node_id: string
  parents: any[]
  sha: string
  signature?: string
  tree: Record<string, any>
  url: string
  verification: Record<string, any>
}

export interface GitRef {
  force?: boolean
  id?: string
  node_id: string
  object: Record<string, any>
  ref: string
  sha: string
  type: string
  url: string
}

export interface GitRefLoadMatch {
  id?: string
  owner: string
  repo: string
  ref?: string
}

export interface GitRefCreateData {
  owner: string
  repo: string
  force?: boolean
  id?: string
  node_id: string
  object: Record<string, any>
  ref: string
  sha: string
  type: string
  url: string
}

export interface GitRefUpdateData {
  id: string
  owner: string
  repo: string
  force?: boolean
  node_id?: string
  object?: Record<string, any>
  ref?: string
  sha?: string
  type?: string
  url?: string
}

export interface GitTag {
  id?: string
  message: string
  node_id: string
  object: Record<string, any>
  sha: string
  tag: string
  tagger: Record<string, any>
  type: string
  url: string
  verification: Record<string, any>
}

export interface GitTagLoadMatch {
  id: string
  owner: string
  repo: string
}

export interface GitTagCreateData {
  owner: string
  repo: string
  id?: string
  message: string
  node_id: string
  object: Record<string, any>
  sha: string
  tag: string
  tagger: Record<string, any>
  type: string
  url: string
  verification: Record<string, any>
}

export interface GitTree {
  base_tree?: string
  id?: string
  sha: string
  tree: any[]
  truncated: boolean
  url?: string
}

export interface GitTreeLoadMatch {
  id: string
  owner: string
  repo: string
  recursive?: string
}

export interface GitTreeCreateData {
  owner: string
  repo: string
  base_tree?: string
  id?: string
  sha: string
  tree: any[]
  truncated: boolean
  url?: string
}

export interface Gitignore {
}

export interface GitignoreListMatch {

  // Selects a custom action instead of the plain list:
  //   'template'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GitignoreTemplate {
  id?: string
  name: string
  source: string
}

export interface GitignoreTemplateLoadMatch {
  id: string
}

export interface GlobalAdvisory {
  credits: any[]
  cve_id: string
  cvss: Record<string, any>
  cvss_severities?: Record<string, any>
  cwes: any[]
  description: string
  epss?: Record<string, any>
  ghsa_id: string
  github_reviewed_at: string
  html_url: string
  id?: string
  identifiers: any[]
  nvd_published_at: string
  published_at: string
  references: any[]
  repository_advisory_url: string
  severity: string
  source_code_location: string
  summary: string
  type: string
  updated_at: string
  url: string
  vulnerabilities: any[]
  withdrawn_at: string
}

export interface GlobalAdvisoryLoadMatch {
  id: string
}

export interface GlobalAdvisoryListMatch {
  affect?: any
  after?: string
  before?: string
  cve_id?: string
  cwe?: any
  direction?: string
  ecosystem?: string
  epss_percentage?: string
  epss_percentile?: string
  ghsa_id?: string
  is_withdrawn?: boolean
  modified?: string
  per_page?: number
  published?: string
  severity?: string
  sort?: string
  type?: string
  updated?: string
}

export interface GpgKey {
  armored_public_key: string
  can_certify: boolean
  can_encrypt_comms: boolean
  can_encrypt_storage: boolean
  can_sign: boolean
  created_at: string
  emails: any[]
  expires_at: string
  id: number
  key_id: string
  name?: string
  primary_key_id: number
  public_key: string
  raw_key: string
  revoked: boolean
  subkeys: any[]
}

export interface GpgKeyLoadMatch {
  id: number
}

export interface GpgKeyListMatch {
  page?: number
  per_page?: number
}

export interface GpgKeyCreateData {
  armored_public_key: string
  can_certify: boolean
  can_encrypt_comms: boolean
  can_encrypt_storage: boolean
  can_sign: boolean
  created_at: string
  emails: any[]
  expires_at: string
  id: number
  key_id: string
  name?: string
  primary_key_id: number
  public_key: string
  raw_key: string
  revoked: boolean
  subkeys: any[]
}

export interface Hook {
  active: boolean
  add_events?: any[]
  config: Record<string, any>
  created_at: string
  deliveries_url?: string
  events: any[]
  id: number
  last_response: Record<string, any>
  name: string
  ping_url: string
  remove_events?: any[]
  test_url: string
  type: string
  updated_at: string
  url: string
}

export interface HookLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface HookListMatch {
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface HookCreateData {
  owner: string
  repo: string
  active: boolean
  add_events?: any[]
  config: Record<string, any>
  created_at: string
  deliveries_url?: string
  events: any[]
  id: number
  last_response: Record<string, any>
  name: string
  ping_url: string
  remove_events?: any[]
  test_url: string
  type: string
  updated_at: string
  url: string
}

export interface HookUpdateData {
  id: number
  owner: string
  repo: string
  active?: boolean
  add_events?: any[]
  config?: Record<string, any>
  created_at?: string
  deliveries_url?: string
  events?: any[]
  last_response?: Record<string, any>
  name?: string
  ping_url?: string
  remove_events?: any[]
  test_url?: string
  type?: string
  updated_at?: string
  url?: string
}

export interface HookDelivery {
  action: string
  delivered_at: string
  duration: number
  event: string
  guid: string
  id: number
  installation_id: number
  redelivery: boolean
  repository_id: number
  request: Record<string, any>
  response: Record<string, any>
  status: string
  status_code: number
  throttled_at?: string
  url?: string
}

export interface HookDeliveryLoadMatch {
  hook_id?: number
  id: number
  owner?: string
  repo?: string
  org_id?: string
}

export interface HookDeliveryItem {
  action: string
  delivered_at: string
  duration: number
  event: string
  guid: string
  id: number
  installation_id: number
  redelivery: boolean
  repository_id: number
  status: string
  status_code: number
  throttled_at?: string
}

export interface HookDeliveryItemListMatch {
  cursor?: string
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'deliveries' | 'deliveries'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface HostedCompute {
  compute_service?: string
  created_on: string
  id: string
  name: string
  network_settings_ids?: any[]
}

export interface HostedComputeListMatch {
  org_id: string
  page?: number
  per_page?: number
}

export interface HostedComputeRemoveMatch {
  network_configuration_id: string
  org_id: string
}

export interface Hovercard {
  message: string
  octicon: string
}

export interface HovercardListMatch {
  username: string
  subject_id?: string
  subject_type?: string
}

export interface Import {
  authors_count?: number
  authors_url: string
  commit_count?: number
  error_message?: string
  failed_step?: string
  has_large_files?: boolean
  html_url: string
  human_name?: string
  import_percent?: number
  large_files_count?: number
  large_files_size?: number
  message?: string
  project_choices?: any[]
  push_percent?: number
  repository_url: string
  status: string
  status_text?: string
  svc_root?: string
  svn_root?: string
  tfvc_project?: string
  url: string
  use_lfs?: boolean
  vcs: string
  vcs_password?: string
  vcs_url: string
  vcs_username?: string
}

export interface ImportListMatch {
  owner: string
  repo: string
}

export interface ImportUpdateData {
  owner: string
  repo: string
  authors_count?: number
  authors_url?: string
  commit_count?: number
  error_message?: string
  failed_step?: string
  has_large_files?: boolean
  html_url?: string
  human_name?: string
  import_percent?: number
  large_files_count?: number
  large_files_size?: number
  message?: string
  project_choices?: any[]
  push_percent?: number
  repository_url?: string
  status?: string
  status_text?: string
  svc_root?: string
  svn_root?: string
  tfvc_project?: string
  url?: string
  use_lfs?: boolean
  vcs?: string
  vcs_password?: string
  vcs_url?: string
  vcs_username?: string
}

export interface Installation {
  access_tokens_url: string
  account: any
  app_id: number
  app_slug: string
  client_id?: string
  contact_email?: string
  created_at: string
  events: any[]
  has_multiple_single_files?: boolean
  html_url: string
  id: number
  permissions: Record<string, any>
  repositories_url: string
  repository_selection: string
  single_file_name: string
  single_file_paths?: any[]
  suspended_at: string
  suspended_by: Record<string, any>
  target_id: number
  target_type: string
  updated_at: string
}

export interface InstallationLoadMatch {
  id: number
}

export interface InstallationListMatch {
  outdated?: string
  page?: number
  per_page?: number
  since?: string
}

export interface InstallationUpdateData {
  id: number
  access_tokens_url?: string
  account?: any
  app_id?: number
  app_slug?: string
  client_id?: string
  contact_email?: string
  created_at?: string
  events?: any[]
  has_multiple_single_files?: boolean
  html_url?: string
  permissions?: Record<string, any>
  repositories_url?: string
  repository_selection?: string
  single_file_name?: string
  single_file_paths?: any[]
  suspended_at?: string
  suspended_by?: Record<string, any>
  target_id?: number
  target_type?: string
  updated_at?: string

  // Selects a custom action instead of the plain update:
  //   'suspended'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface InstallationRemoveMatch {
  id: number

  // Selects a custom action instead of the plain remove:
  //   'suspended'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface InstallationToken {
  id?: string
  permissions?: Record<string, any>
  repositories?: any[]
  repository_ids?: any[]
}

export interface InstallationTokenCreateData {
  id: number
  permissions?: Record<string, any>
  repositories?: any[]
  repository_ids?: any[]

  // Selects a custom action instead of the plain create:
  //   'access_tokens'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Integration {
  apps: any[]
  client_id?: string
  created_at: string
  description: string
  events: any[]
  external_url: string
  html_url: string
  id: number
  installations_count?: number
  name: string
  node_id: string
  owner: any
  permissions: Record<string, any>
  slug?: string
  updated_at: string
}

export interface IntegrationLoadMatch {
  app_slug: string
}

export interface IntegrationListMatch {
  apps?: any[]
  client_id?: string
  created_at?: string
  description?: string
  events?: any[]
  external_url?: string
  html_url?: string
  id?: number
  installations_count?: number
  name?: string
  node_id?: string
  owner?: any
  permissions?: Record<string, any>
  slug?: string
  updated_at?: string
}

export interface IntegrationCreateData {
  branch_id: string
  owner: string
  repo: string
  apps: any[]
  client_id?: string
  created_at: string
  description: string
  events: any[]
  external_url: string
  html_url: string
  id: number
  installations_count?: number
  name: string
  node_id: string
  permissions: Record<string, any>
  slug?: string
  updated_at: string
}

export interface IntegrationUpdateData {
  branch_id: string
  owner: string
  repo: string
  apps?: any[]
  client_id?: string
  created_at?: string
  description?: string
  events?: any[]
  external_url?: string
  html_url?: string
  id?: number
  installations_count?: number
  name?: string
  node_id?: string
  permissions?: Record<string, any>
  slug?: string
  updated_at?: string
}

export interface IntegrationRemoveMatch {
  branch_id: string
  owner: string
  repo: string
}

export interface IntegrationInstallation {
  account: any
  created_at: string
  id: number
  node_id?: string
  requester: Record<string, any>
}

export interface IntegrationInstallationListMatch {
  page?: number
  per_page?: number
}

export interface Interaction {
  expires_at?: string
  limit?: string
  origin?: string
}

export interface InteractionLoadMatch {
  expires_at?: string
  limit?: string
  origin?: string
}

export interface InteractionRemoveMatch {
  expires_at?: string
  limit?: string
  origin?: string
}

export interface InteractionLimit {
  expires_at: string
  expiry?: string
  limit: string
  origin: string
}

export interface InteractionLimitUpdateData {
  expires_at?: string
  expiry?: string
  limit?: string
  origin?: string
}

export interface Issue {
  active_lock_reason?: string
  actor: Record<string, any>
  after_id?: number
  assignee: Record<string, any>
  assignees?: any[]
  assigner: Record<string, any>
  author_association: string
  before_id?: number
  body?: string
  body_html?: string
  body_text?: string
  closed_at: string
  closed_by: Record<string, any>
  color?: string
  comments: number
  comments_url: string
  commit_id: string
  commit_url: string
  created_at: string
  default?: boolean
  description?: string
  dismissed_review: Record<string, any>
  draft?: boolean
  event: string
  events_url: string
  html_url: string
  id: number
  issue: Record<string, any>
  issue_dependencies_summary: Record<string, any>
  issue_field_values?: any[]
  issue_id: number
  issue_url: string
  label: Record<string, any>
  labels: any[]
  labels_url: string
  lock_reason?: string
  locked: boolean
  milestone: Record<string, any>
  name?: string
  node_id: string
  number: number
  parent_issue_url?: string
  performed_via_github_app: Record<string, any>
  project_card: Record<string, any>
  pull_request: Record<string, any>
  reactions: Record<string, any>
  rename: Record<string, any>
  replace_parent?: boolean
  repository: Record<string, any>
  repository_url: string
  requested_reviewer: Record<string, any>
  requested_team: Record<string, any>
  review_requester: Record<string, any>
  state: string
  state_reason?: string
  sub_issue_id: number
  sub_issues_summary: Record<string, any>
  timeline_url?: string
  title: string
  type: Record<string, any>
  updated_at: string
  url: string
  user: Record<string, any>
}

export interface IssueLoadMatch {
  assignee?: string
  id?: number
  owner: string
  repo: string
  comment_id?: number
  event_id?: number
}

export interface IssueListMatch {
  collab?: boolean
  direction?: string
  filter?: string
  label?: string
  org?: boolean
  owned?: boolean
  page?: number
  per_page?: number
  pull?: boolean
  since?: string
  sort?: string
  state?: string

  // Selects a custom action instead of the plain list:
  //   'comment' | 'comment' | 'dependency_blocked_by' | 'dependency_blocking' | 'event' | 'event' | 'label' | 'parent' | 'sub_issue' | 'timeline'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IssueCreateData {
  owner: string
  repo: string
  active_lock_reason?: string
  actor: Record<string, any>
  after_id?: number
  assignee: Record<string, any>
  assignees?: any[]
  assigner: Record<string, any>
  author_association: string
  before_id?: number
  body?: string
  body_html?: string
  body_text?: string
  closed_at: string
  closed_by: Record<string, any>
  color?: string
  comments: number
  comments_url: string
  commit_id: string
  commit_url: string
  created_at: string
  default?: boolean
  description?: string
  dismissed_review: Record<string, any>
  draft?: boolean
  event: string
  events_url: string
  html_url: string
  id: number
  issue: Record<string, any>
  issue_dependencies_summary: Record<string, any>
  issue_field_values?: any[]
  issue_id: number
  issue_url: string
  label: Record<string, any>
  labels: any[]
  labels_url: string
  lock_reason?: string
  locked: boolean
  milestone: Record<string, any>
  name?: string
  node_id: string
  number: number
  parent_issue_url?: string
  performed_via_github_app: Record<string, any>
  project_card: Record<string, any>
  pull_request: Record<string, any>
  reactions: Record<string, any>
  rename: Record<string, any>
  replace_parent?: boolean
  repository: Record<string, any>
  repository_url: string
  requested_reviewer: Record<string, any>
  requested_team: Record<string, any>
  review_requester: Record<string, any>
  state: string
  state_reason?: string
  sub_issue_id: number
  sub_issues_summary: Record<string, any>
  timeline_url?: string
  title: string
  type: Record<string, any>
  updated_at: string
  url: string
  user: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'assignee' | 'comment' | 'dependency_blocked_by' | 'label' | 'sub_issue'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IssueUpdateData {
  comment_id?: number
  owner: string
  repo: string
  id?: number
  active_lock_reason?: string
  actor?: Record<string, any>
  after_id?: number
  assignee?: Record<string, any>
  assignees?: any[]
  assigner?: Record<string, any>
  author_association?: string
  before_id?: number
  body?: string
  body_html?: string
  body_text?: string
  closed_at?: string
  closed_by?: Record<string, any>
  color?: string
  comments?: number
  comments_url?: string
  commit_id?: string
  commit_url?: string
  created_at?: string
  default?: boolean
  description?: string
  dismissed_review?: Record<string, any>
  draft?: boolean
  event?: string
  events_url?: string
  html_url?: string
  issue?: Record<string, any>
  issue_dependencies_summary?: Record<string, any>
  issue_field_values?: any[]
  issue_id?: number
  issue_url?: string
  label?: Record<string, any>
  labels?: any[]
  labels_url?: string
  lock_reason?: string
  locked?: boolean
  milestone?: Record<string, any>
  name?: string
  node_id?: string
  number?: number
  parent_issue_url?: string
  performed_via_github_app?: Record<string, any>
  project_card?: Record<string, any>
  pull_request?: Record<string, any>
  reactions?: Record<string, any>
  rename?: Record<string, any>
  replace_parent?: boolean
  repository?: Record<string, any>
  repository_url?: string
  requested_reviewer?: Record<string, any>
  requested_team?: Record<string, any>
  review_requester?: Record<string, any>
  state?: string
  state_reason?: string
  sub_issue_id?: number
  sub_issues_summary?: Record<string, any>
  timeline_url?: string
  title?: string
  type?: Record<string, any>
  updated_at?: string
  url?: string
  user?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'label' | 'lock' | 'sub_issue_priority'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IssueRemoveMatch {
  id?: number
  issue_id?: number
  owner: string
  repo: string
  name?: string
  comment_id?: number
  milestone_number?: number

  // Selects a custom action instead of the plain remove:
  //   'assignee' | 'label' | 'lock' | 'sub_issue'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IssueType {
  color?: string
  created_at?: string
  description: string
  id: number
  is_enabled?: boolean
  name: string
  node_id: string
  updated_at?: string
}

export interface IssueTypeListMatch {
  org_id: string
}

export interface IssueTypeCreateData {
  org_id: string
  color?: string
  created_at?: string
  description: string
  id: number
  is_enabled?: boolean
  name: string
  node_id: string
  updated_at?: string
}

export interface IssueTypeUpdateData {
  id: number
  org_id: string
  color?: string
  created_at?: string
  description?: string
  is_enabled?: boolean
  name?: string
  node_id?: string
  updated_at?: string
}

export interface Job {
  check_run_url: string
  completed_at: string
  conclusion: string
  created_at: string
  head_branch: string
  head_sha: string
  html_url: string
  id: number
  labels: any[]
  name: string
  node_id: string
  run_attempt?: number
  run_id: number
  run_url: string
  runner_group_id: number
  runner_group_name: string
  runner_id: number
  runner_name: string
  started_at: string
  status: string
  steps?: any[]
  url: string
  workflow_name: string
}

export interface JobLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface Key {
  created_at: string
  id: number
  key: string
  last_used?: string
  read_only: boolean
  title: string
  url: string
  verified: boolean
}

export interface KeyLoadMatch {
  id: number
}

export interface KeyListMatch {
  page?: number
  per_page?: number
}

export interface KeyCreateData {
  created_at: string
  id: number
  key: string
  last_used?: string
  read_only: boolean
  title: string
  url: string
  verified: boolean
}

export interface Label {
  color: string
  default: boolean
  description: string
  id: number
  name: string
  new_name?: string
  node_id: string
  url: string
}

export interface LabelLoadMatch {
  id: string
  owner: string
  repo: string
}

export interface LabelListMatch {
  milestone_number?: number
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface LabelCreateData {
  owner: string
  repo: string
  color: string
  default: boolean
  description: string
  id: number
  name: string
  new_name?: string
  node_id: string
  url: string
}

export interface LabelUpdateData {
  id: string
  owner: string
  repo: string
  color?: string
  default?: boolean
  description?: string
  name?: string
  new_name?: string
  node_id?: string
  url?: string
}

export interface Language {
  C?: number
  Python?: number
}

export interface LanguageLoadMatch {
  owner: string
  repo: string
}

export interface License {
  body: string
  conditions: any[]
  content: string
  description: string
  download_url: string
  encoding: string
  featured: boolean
  git_url: string
  html_url: string
  id?: string
  implementation: string
  key: string
  license: Record<string, any>
  limitations: any[]
  links: Record<string, any>
  name: string
  node_id: string
  path: string
  permissions: any[]
  sha: string
  size: number
  spdx_id: string
  type: string
  url: string
}

export interface LicenseLoadMatch {
  id: string
}

export interface LicenseListMatch {
  featured?: boolean
  page?: number
  per_page?: number
}

export interface Markdown {
  context?: string
  mode?: string
  text: string
}

export interface MarkdownCreateData {
  context?: string
  mode?: string
  text: string

  // Selects a custom action instead of the plain create:
  //   'raw'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MarketplaceListingPlan {
  accounts_url: string
  bullets: any[]
  description: string
  has_free_trial: boolean
  id: number
  monthly_price_in_cents: number
  name: string
  number: number
  price_model: string
  state: string
  unit_name: string
  url: string
  yearly_price_in_cents: number
}

export interface MarketplaceListingPlanListMatch {
  page?: number
  per_page?: number
}

export interface MarketplacePurchase {
  email?: string
  id: number
  login: string
  marketplace_pending_change?: Record<string, any>
  marketplace_purchase: Record<string, any>
  organization_billing_email?: string
  type: string
  url: string
}

export interface MarketplacePurchaseLoadMatch {
  account_id: number
}

export interface MarketplacePurchaseListMatch {
  plan_id: number
  direction?: string
  page?: number
  per_page?: number
  sort?: string
}

export interface Member {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface MemberListMatch {
  org_id: string
  filter?: string
  page?: number
  per_page?: number
  role?: string
}

export interface Membership {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface MembershipLoadMatch {
  enterprise: string
  id: string
  team_id: string
}

export interface MembershipListMatch {
  enterprise: string
  enterprise_team: string
  page?: number
  per_page?: number
}

export interface MembershipUpdateData {
  enterprise: string
  id: string
  team_id: string
  avatar_url?: string
  email?: string
  events_url?: string
  followers_url?: string
  following_url?: string
  gists_url?: string
  gravatar_id?: string
  html_url?: string
  login?: string
  name?: string
  node_id?: string
  organizations_url?: string
  received_events_url?: string
  repos_url?: string
  site_admin?: boolean
  starred_at?: string
  starred_url?: string
  subscriptions_url?: string
  type?: string
  url?: string
  user_view_type?: string
}

export interface MergedUpstream {
  base_branch?: string
  branch: string
  merge_type?: string
  message?: string
}

export interface MergedUpstreamCreateData {
  owner: string
  repo: string
  base_branch?: string
  branch: string
  merge_type?: string
  message?: string
}

export interface Meta {
}

export interface MetaLoadMatch {
  s?: string
}

export interface MetaListMatch {
}

export interface Metaroot {
  authorizations_url: string
  code_search_url: string
  commit_search_url: string
  current_user_authorizations_html_url: string
  current_user_repositories_url: string
  current_user_url: string
  emails_url: string
  emojis_url: string
  events_url: string
  feeds_url: string
  followers_url: string
  following_url: string
  gists_url: string
  hub_url?: string
  issue_search_url: string
  issues_url: string
  keys_url: string
  label_search_url: string
  notifications_url: string
  organization_repositories_url: string
  organization_teams_url: string
  organization_url: string
  public_gists_url: string
  rate_limit_url: string
  repository_search_url: string
  repository_url: string
  starred_gists_url: string
  starred_url: string
  topic_search_url?: string
  user_organizations_url: string
  user_repositories_url: string
  user_search_url: string
  user_url: string
}

export interface MetarootLoadMatch {
  authorizations_url?: string
  code_search_url?: string
  commit_search_url?: string
  current_user_authorizations_html_url?: string
  current_user_repositories_url?: string
  current_user_url?: string
  emails_url?: string
  emojis_url?: string
  events_url?: string
  feeds_url?: string
  followers_url?: string
  following_url?: string
  gists_url?: string
  hub_url?: string
  issue_search_url?: string
  issues_url?: string
  keys_url?: string
  label_search_url?: string
  notifications_url?: string
  organization_repositories_url?: string
  organization_teams_url?: string
  organization_url?: string
  public_gists_url?: string
  rate_limit_url?: string
  repository_search_url?: string
  repository_url?: string
  starred_gists_url?: string
  starred_url?: string
  topic_search_url?: string
  user_organizations_url?: string
  user_repositories_url?: string
  user_search_url?: string
  user_url?: string
}

export interface Migration {
  allow_forking?: boolean
  archive_url?: string
  archived?: boolean
  assignees_url: string
  blobs_url: string
  branches_url: string
  clone_url?: string
  code_of_conduct: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
  custom_properties?: Record<string, any>
  default_branch?: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  disabled?: boolean
  downloads_url: string
  events_url: string
  exclude?: any[]
  exclude_attachments: boolean
  exclude_git_data: boolean
  exclude_metadata: boolean
  exclude_owner_projects: boolean
  exclude_releases: boolean
  fork: boolean
  forks?: number
  forks_count?: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url?: string
  guid: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url: string
  html_url: string
  id: number
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language?: string
  languages_url: string
  license?: Record<string, any>
  lock_repositories: boolean
  merges_url: string
  milestones_url: string
  mirror_url?: string
  name: string
  network_count?: number
  node_id: string
  notifications_url: string
  open_issues?: number
  open_issues_count?: number
  org_metadata_only: boolean
  owner: Record<string, any>
  permissions?: Record<string, any>
  private: boolean
  pulls_url: string
  pushed_at?: string
  releases_url: string
  repositories: any[]
  role_name?: string
  security_and_analysis?: Record<string, any>
  size?: number
  ssh_url?: string
  stargazers_count?: number
  stargazers_url: string
  state: string
  statuses_url: string
  subscribers_count?: number
  subscribers_url: string
  subscription_url: string
  svn_url?: string
  tags_url: string
  teams_url: string
  temp_clone_token?: string
  topics?: any[]
  trees_url: string
  updated_at: string
  url: string
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
}

export interface MigrationLoadMatch {
  id: number
  org_id?: string
  exclude?: any[]

  // Selects a custom action instead of the plain load:
  //   'archive' | 'archive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MigrationListMatch {
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'repository' | 'repository'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MigrationCreateData {
  allow_forking?: boolean
  archive_url?: string
  archived?: boolean
  assignees_url: string
  blobs_url: string
  branches_url: string
  clone_url?: string
  code_of_conduct: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
  custom_properties?: Record<string, any>
  default_branch?: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  disabled?: boolean
  downloads_url: string
  events_url: string
  exclude?: any[]
  exclude_attachments: boolean
  exclude_git_data: boolean
  exclude_metadata: boolean
  exclude_owner_projects: boolean
  exclude_releases: boolean
  fork: boolean
  forks?: number
  forks_count?: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url?: string
  guid: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url: string
  html_url: string
  id: number
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language?: string
  languages_url: string
  license?: Record<string, any>
  lock_repositories: boolean
  merges_url: string
  milestones_url: string
  mirror_url?: string
  name: string
  network_count?: number
  node_id: string
  notifications_url: string
  open_issues?: number
  open_issues_count?: number
  org_metadata_only: boolean
  owner: Record<string, any>
  permissions?: Record<string, any>
  private: boolean
  pulls_url: string
  pushed_at?: string
  releases_url: string
  repositories: any[]
  role_name?: string
  security_and_analysis?: Record<string, any>
  size?: number
  ssh_url?: string
  stargazers_count?: number
  stargazers_url: string
  state: string
  statuses_url: string
  subscribers_count?: number
  subscribers_url: string
  subscription_url: string
  svn_url?: string
  tags_url: string
  teams_url: string
  temp_clone_token?: string
  topics?: any[]
  trees_url: string
  updated_at: string
  url: string
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
}

export interface MigrationRemoveMatch {
  owner: string
  repo: string

  // Selects a custom action instead of the plain remove:
  //   'archive' | 'archive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Milestone {
  avatar_url: string
  closed_at: string
  closed_issues: number
  created_at: string
  creator: Record<string, any>
  description?: string
  due_on?: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  labels_url: string
  login: string
  name?: string
  node_id: string
  number: number
  open_issues: number
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  state?: string
  subscriptions_url: string
  title: string
  type: string
  updated_at: string
  url: string
  user_view_type?: string
}

export interface MilestoneLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface MilestoneListMatch {
  owner: string
  repo: string
  direction?: string
  page?: number
  per_page?: number
  sort?: string
  state?: string
}

export interface MilestoneCreateData {
  owner: string
  repo: string
  avatar_url: string
  closed_at: string
  closed_issues: number
  created_at: string
  creator: Record<string, any>
  description?: string
  due_on?: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  labels_url: string
  login: string
  name?: string
  node_id: string
  number: number
  open_issues: number
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  state?: string
  subscriptions_url: string
  title: string
  type: string
  updated_at: string
  url: string
  user_view_type?: string
}

export interface MilestoneUpdateData {
  id: number
  owner: string
  repo: string
  avatar_url?: string
  closed_at?: string
  closed_issues?: number
  created_at?: string
  creator?: Record<string, any>
  description?: string
  due_on?: string
  email?: string
  events_url?: string
  followers_url?: string
  following_url?: string
  gists_url?: string
  gravatar_id?: string
  html_url?: string
  labels_url?: string
  login?: string
  name?: string
  node_id?: string
  number?: number
  open_issues?: number
  organizations_url?: string
  received_events_url?: string
  repos_url?: string
  site_admin?: boolean
  starred_at?: string
  starred_url?: string
  state?: string
  subscriptions_url?: string
  title?: string
  type?: string
  updated_at?: string
  url?: string
  user_view_type?: string
}

export interface MinimalRepository {
  allow_forking?: boolean
  archive_url: string
  archived?: boolean
  assignees_url: string
  blobs_url: string
  branches_url: string
  clone_url?: string
  code_of_conduct: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at?: string
  custom_properties?: Record<string, any>
  default_branch?: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  disabled?: boolean
  downloads_url: string
  events_url: string
  fork: boolean
  forks?: number
  forks_count?: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url?: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url: string
  html_url: string
  id: number
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language?: string
  languages_url: string
  license?: Record<string, any>
  merges_url: string
  milestones_url: string
  mirror_url?: string
  name: string
  network_count?: number
  node_id: string
  notifications_url: string
  open_issues?: number
  open_issues_count?: number
  owner: Record<string, any>
  permissions?: Record<string, any>
  private: boolean
  pulls_url: string
  pushed_at?: string
  releases_url: string
  role_name?: string
  security_and_analysis?: Record<string, any>
  size?: number
  ssh_url?: string
  stargazers_count?: number
  stargazers_url: string
  statuses_url: string
  subscribers_count?: number
  subscribers_url: string
  subscription_url: string
  svn_url?: string
  tags_url: string
  teams_url: string
  temp_clone_token?: string
  topics?: any[]
  trees_url: string
  updated_at?: string
  url: string
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
}

export interface MinimalRepositoryListMatch {
  since?: number
}

export interface NetworkConfiguration {
  compute_service?: string
  created_on: string
  id: string
  name: string
  network_settings_ids?: any[]
}

export interface NetworkConfigurationLoadMatch {
  id: string
  org_id: string
}

export interface NetworkConfigurationCreateData {
  org_id: string
  compute_service?: string
  created_on: string
  id: string
  name: string
  network_settings_ids?: any[]
}

export interface NetworkConfigurationUpdateData {
  id: string
  org_id: string
  compute_service?: string
  created_on?: string
  name?: string
  network_settings_ids?: any[]
}

export interface NetworkSetting {
  id: string
  name: string
  network_configuration_id?: string
  region: string
  subnet_id: string
}

export interface NetworkSettingLoadMatch {
  id: string
  org_id: string
}

export interface OidcCustomSub {
  include_claim_keys: any[]
}

export interface OidcCustomSubListMatch {
  org_id: string
}

export interface OidcCustomSubRepo {
  include_claim_keys?: any[]
  use_default: boolean
}

export interface OidcCustomSubRepoListMatch {
  owner: string
  repo: string
}

export interface Org {
  access_tokens_url: string
  account: any
  action: string
  advanced_security_enabled_for_new_repositories?: boolean
  app_id: number
  app_slug: string
  artifact_url?: string
  async?: boolean
  attestations?: any[]
  attestations_subject_digests?: Record<string, any>
  avatar_url: string
  base_role?: string
  billing_email?: string
  blog?: string
  client_id?: string
  company?: string
  contact_email?: string
  created_at: string
  default_repository_permission?: string
  dependabot_alerts_enabled_for_new_repositories?: boolean
  dependabot_security_updates_enabled_for_new_repositories?: boolean
  dependency_graph_enabled_for_new_repositories?: boolean
  deploy_keys_enabled_for_repositories?: boolean
  description?: string
  digest: string
  direct_membership?: boolean
  email?: string
  enterprise_teams_providing_indirect_membership?: any[]
  events: any[]
  events_url: string
  filled_seats?: number
  has_multiple_single_files?: boolean
  has_organization_projects?: boolean
  has_repository_projects?: boolean
  hooks_url: string
  html_url: string
  id: number
  issues_url: string
  location?: string
  login: string
  members_allowed_repository_creation_type?: string
  members_can_create_internal_repositories?: boolean
  members_can_create_pages?: boolean
  members_can_create_private_pages?: boolean
  members_can_create_private_repositories?: boolean
  members_can_create_public_pages?: boolean
  members_can_create_public_repositories?: boolean
  members_can_create_repositories?: boolean
  members_can_fork_private_repositories?: boolean
  members_url: string
  name: string
  node_id: string
  organization: Record<string, any>
  organization_url: string
  page_info?: Record<string, any>
  pat_ids: any[]
  pat_request_ids?: any[]
  path?: string
  permissions: Record<string, any>
  predicate_type?: string
  private_repos: number
  properties: any[]
  public_members_url: string
  query_suite?: string
  reason?: string
  registry_url: string
  repos_url: string
  repositories_url: string
  repository?: string
  repository_names: any[]
  repository_selection: string
  role: string
  seats?: number
  secret_scanning_enabled_for_new_repositories?: boolean
  secret_scanning_push_protection_custom_link?: string
  secret_scanning_push_protection_custom_link_enabled?: boolean
  secret_scanning_push_protection_enabled_for_new_repositories?: boolean
  single_file_name: string
  single_file_paths?: any[]
  source?: string
  space: number
  state: string
  status?: string
  storage_records?: any[]
  subject_digests: any[]
  suspended_at: string
  suspended_by: Record<string, any>
  target_id: number
  target_type: string
  total_count?: number
  twitter_username?: string
  updated_at: string
  url: string
  user: Record<string, any>
  web_commit_signoff_required?: boolean
}

export interface OrgLoadMatch {
  id: string
  subject_digest?: string
  after?: string
  before?: string
  per_page?: number
  predicate_type?: string
  username?: string
}

export interface OrgListMatch {
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'installation' | 'organization_role'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface OrgCreateData {
  enablement: string
  org: string
  security_product: string
  access_tokens_url: string
  account: any
  action: string
  advanced_security_enabled_for_new_repositories?: boolean
  app_id: number
  app_slug: string
  artifact_url?: string
  async?: boolean
  attestations?: any[]
  attestations_subject_digests?: Record<string, any>
  avatar_url: string
  base_role?: string
  billing_email?: string
  blog?: string
  client_id?: string
  company?: string
  contact_email?: string
  created_at: string
  default_repository_permission?: string
  dependabot_alerts_enabled_for_new_repositories?: boolean
  dependabot_security_updates_enabled_for_new_repositories?: boolean
  dependency_graph_enabled_for_new_repositories?: boolean
  deploy_keys_enabled_for_repositories?: boolean
  description?: string
  digest: string
  direct_membership?: boolean
  email?: string
  enterprise_teams_providing_indirect_membership?: any[]
  events: any[]
  events_url: string
  filled_seats?: number
  has_multiple_single_files?: boolean
  has_organization_projects?: boolean
  has_repository_projects?: boolean
  hooks_url: string
  html_url: string
  id: number
  issues_url: string
  location?: string
  login: string
  members_allowed_repository_creation_type?: string
  members_can_create_internal_repositories?: boolean
  members_can_create_pages?: boolean
  members_can_create_private_pages?: boolean
  members_can_create_private_repositories?: boolean
  members_can_create_public_pages?: boolean
  members_can_create_public_repositories?: boolean
  members_can_create_repositories?: boolean
  members_can_fork_private_repositories?: boolean
  members_url: string
  name: string
  node_id: string
  organization: Record<string, any>
  organization_url: string
  page_info?: Record<string, any>
  pat_ids: any[]
  pat_request_ids?: any[]
  path?: string
  permissions: Record<string, any>
  predicate_type?: string
  private_repos: number
  properties: any[]
  public_members_url: string
  query_suite?: string
  reason?: string
  registry_url: string
  repos_url: string
  repositories_url: string
  repository?: string
  repository_names: any[]
  repository_selection: string
  role: string
  seats?: number
  secret_scanning_enabled_for_new_repositories?: boolean
  secret_scanning_push_protection_custom_link?: string
  secret_scanning_push_protection_custom_link_enabled?: boolean
  secret_scanning_push_protection_enabled_for_new_repositories?: boolean
  single_file_name: string
  single_file_paths?: any[]
  source?: string
  space: number
  state: string
  status?: string
  storage_records?: any[]
  subject_digests: any[]
  suspended_at: string
  suspended_by: Record<string, any>
  target_id: number
  target_type: string
  total_count?: number
  twitter_username?: string
  updated_at: string
  url: string
  user: Record<string, any>
  web_commit_signoff_required?: boolean

  // Selects a custom action instead of the plain create:
  //   'personal_access_token' | 'personal_access_token_request'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface OrgUpdateData {
  id: string
  username: string
  access_tokens_url?: string
  account?: any
  action?: string
  advanced_security_enabled_for_new_repositories?: boolean
  app_id?: number
  app_slug?: string
  artifact_url?: string
  async?: boolean
  attestations?: any[]
  attestations_subject_digests?: Record<string, any>
  avatar_url?: string
  base_role?: string
  billing_email?: string
  blog?: string
  client_id?: string
  company?: string
  contact_email?: string
  created_at?: string
  default_repository_permission?: string
  dependabot_alerts_enabled_for_new_repositories?: boolean
  dependabot_security_updates_enabled_for_new_repositories?: boolean
  dependency_graph_enabled_for_new_repositories?: boolean
  deploy_keys_enabled_for_repositories?: boolean
  description?: string
  digest?: string
  direct_membership?: boolean
  email?: string
  enterprise_teams_providing_indirect_membership?: any[]
  events?: any[]
  events_url?: string
  filled_seats?: number
  has_multiple_single_files?: boolean
  has_organization_projects?: boolean
  has_repository_projects?: boolean
  hooks_url?: string
  html_url?: string
  issues_url?: string
  location?: string
  login?: string
  members_allowed_repository_creation_type?: string
  members_can_create_internal_repositories?: boolean
  members_can_create_pages?: boolean
  members_can_create_private_pages?: boolean
  members_can_create_private_repositories?: boolean
  members_can_create_public_pages?: boolean
  members_can_create_public_repositories?: boolean
  members_can_create_repositories?: boolean
  members_can_fork_private_repositories?: boolean
  members_url?: string
  name?: string
  node_id?: string
  organization?: Record<string, any>
  organization_url?: string
  page_info?: Record<string, any>
  pat_ids?: any[]
  pat_request_ids?: any[]
  path?: string
  permissions?: Record<string, any>
  predicate_type?: string
  private_repos?: number
  properties?: any[]
  public_members_url?: string
  query_suite?: string
  reason?: string
  registry_url?: string
  repos_url?: string
  repositories_url?: string
  repository?: string
  repository_names?: any[]
  repository_selection?: string
  role?: string
  seats?: number
  secret_scanning_enabled_for_new_repositories?: boolean
  secret_scanning_push_protection_custom_link?: string
  secret_scanning_push_protection_custom_link_enabled?: boolean
  secret_scanning_push_protection_enabled_for_new_repositories?: boolean
  single_file_name?: string
  single_file_paths?: any[]
  source?: string
  space?: number
  state?: string
  status?: string
  storage_records?: any[]
  subject_digests?: any[]
  suspended_at?: string
  suspended_by?: Record<string, any>
  target_id?: number
  target_type?: string
  total_count?: number
  twitter_username?: string
  updated_at?: string
  url?: string
  user?: Record<string, any>
  web_commit_signoff_required?: boolean
}

export interface OrgRemoveMatch {
  id: string
}

export interface OrgHook {
  active: boolean
  config: Record<string, any>
  created_at: string
  deliveries_url?: string
  events: any[]
  id: number
  name: string
  ping_url: string
  type: string
  updated_at: string
  url: string
}

export interface OrgHookLoadMatch {
  id: number
  org_id: string
}

export interface OrgHookListMatch {
  id: string
  page?: number
  per_page?: number
}

export interface OrgHookCreateData {
  id: string
  active: boolean
  config: Record<string, any>
  created_at: string
  deliveries_url?: string
  events: any[]
  name: string
  ping_url: string
  type: string
  updated_at: string
  url: string
}

export interface OrgHookUpdateData {
  id: number
  org_id: string
  active?: boolean
  config?: Record<string, any>
  created_at?: string
  deliveries_url?: string
  events?: any[]
  name?: string
  ping_url?: string
  type?: string
  updated_at?: string
  url?: string
}

export interface OrgMembership {
  direct_membership?: boolean
  enterprise_teams_providing_indirect_membership?: any[]
  id?: string
  organization: Record<string, any>
  organization_url: string
  permissions: Record<string, any>
  role: string
  state: string
  url: string
  user: Record<string, any>
}

export interface OrgMembershipLoadMatch {
  id: string
  org_id: string
}

export interface OrgMembershipUpdateData {
  id: string
  org_id: string
  direct_membership?: boolean
  enterprise_teams_providing_indirect_membership?: any[]
  organization?: Record<string, any>
  organization_url?: string
  permissions?: Record<string, any>
  role?: string
  state?: string
  url?: string
  user?: Record<string, any>
}

export interface OrgPrivateRegistryConfiguration {
  created_at: string
  name: string
  registry_type: string
  updated_at: string
  username?: string
  visibility: string
}

export interface OrgPrivateRegistryConfigurationLoadMatch {
  org_id: string
  secret_name: string
}

export interface OrgPrivateRegistryConfigurationWithSelectedRepository {
  encrypted_value: string
  id?: string
  key_id: string
  registry_type: string
  selected_repository_ids?: any[]
  url: string
  username?: string
  visibility: string
}

export interface OrgPrivateRegistryConfigurationWithSelectedRepositoryCreateData {
  id: string
  encrypted_value: string
  key_id: string
  registry_type: string
  selected_repository_ids?: any[]
  url: string
  username?: string
  visibility: string

  // Selects a custom action instead of the plain create:
  //   'private-registries'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface OrgRepoCustomPropertyValue {
  properties: any[]
  repository_full_name: string
  repository_id: number
  repository_name: string
}

export interface OrgRepoCustomPropertyValueListMatch {
  org_id: string
  page?: number
  per_page?: number
  repository_query?: string
}

export interface Organization {
}

export interface OrganizationActionsSecret {
  created_at: string
  id?: string
  name: string
  selected_repositories_url?: string
  updated_at: string
  visibility: string
}

export interface OrganizationActionsSecretLoadMatch {
  id: string
  org_id: string
}

export interface OrganizationActionsVariable {
  created_at: string
  id?: string
  name: string
  selected_repositories_url?: string
  updated_at: string
  value: string
  visibility: string
}

export interface OrganizationActionsVariableLoadMatch {
  id: string
  org_id: string
}

export interface OrganizationDependabotSecret {
  created_at: string
  id?: string
  name: string
  selected_repositories_url?: string
  updated_at: string
  visibility: string
}

export interface OrganizationDependabotSecretLoadMatch {
  id: string
  org_id: string
}

export interface OrganizationInvitation {
  created_at: string
  email?: string
  failed_at?: string
  failed_reason?: string
  id: number
  invitation_source?: string
  invitation_teams_url: string
  invitee_id?: number
  inviter: Record<string, any>
  login: string
  node_id: string
  role?: string
  team_count: number
  team_ids?: any[]
}

export interface OrganizationInvitationListMatch {
  org_id: string
  invitation_source?: string
  page?: number
  per_page?: number
  role?: string
}

export interface OrganizationInvitationCreateData {
  org_id: string
  created_at: string
  email?: string
  failed_at?: string
  failed_reason?: string
  id: number
  invitation_source?: string
  invitation_teams_url: string
  invitee_id?: number
  inviter: Record<string, any>
  login: string
  node_id: string
  role?: string
  team_count: number
  team_ids?: any[]
}

export interface OrganizationProgrammaticAccessGrant {
  access_granted_at: string
  created_at: string
  id: number
  owner: Record<string, any>
  permissions: Record<string, any>
  reason: string
  repositories_url: string
  repository_selection: string
  token_expired: boolean
  token_expires_at: string
  token_id: number
  token_last_used_at: string
  token_name: string
}

export interface OrganizationProgrammaticAccessGrantListMatch {
  org_id: string
  direction?: string
  last_used_after?: string
  last_used_before?: string
  owner?: any[]
  page?: number
  per_page?: number
  permission?: string
  repository?: string
  sort?: string
  token_id?: any[]
}

export interface OrganizationRole {
  base_role?: string
  created_at: string
  description?: string
  id: number
  name: string
  organization: Record<string, any>
  permissions: any[]
  source?: string
  updated_at: string
}

export interface OrganizationRoleLoadMatch {
  id: number
  org_id: string
}

export interface OrganizationSecretScanningAlert {
  created_at?: string
  first_location_detected?: any
  has_more_locations?: boolean
  html_url?: string
  is_base64_encoded?: boolean
  locations_url?: string
  multi_repo?: boolean
  number?: number
  publicly_leaked?: boolean
  push_protection_bypass_request_comment?: string
  push_protection_bypass_request_html_url?: string
  push_protection_bypass_request_reviewer: Record<string, any>
  push_protection_bypass_request_reviewer_comment?: string
  push_protection_bypassed?: boolean
  push_protection_bypassed_at?: string
  push_protection_bypassed_by: Record<string, any>
  repository: Record<string, any>
  resolution?: string
  resolution_comment?: string
  resolved_at?: string
  resolved_by: Record<string, any>
  secret?: string
  secret_type?: string
  secret_type_display_name?: string
  state?: string
  updated_at?: string
  url?: string
  validity?: string
}

export interface OrganizationSecretScanningAlertListMatch {
  org_id: string
  after?: string
  before?: string
  direction?: string
  hide_secret?: boolean
  is_multi_repo?: boolean
  is_publicly_leaked?: boolean
  page?: number
  per_page?: number
  resolution?: string
  secret_type?: string
  sort?: string
  state?: string
  validity?: string
}

export interface OutsideCollaborator {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface OutsideCollaboratorListMatch {
  org_id: string
  filter?: string
  page?: number
  per_page?: number
}

export interface Package {
  container: Record<string, any>
  created_at: string
  deleted_at?: string
  description?: string
  docker: Record<string, any>
  github_id: number
  html_url: string
  id: string
  included_gigabytes_bandwidth: number
  license?: string
  metadata: Record<string, any>
  name: string
  owner: Record<string, any>
  package_html_url: string
  package_type: string
  repository: Record<string, any>
  total_gigabytes_bandwidth_used: number
  total_paid_gigabytes_bandwidth_used: number
  updated_at: string
  url: string
  version_count: number
  visibility: string
}

export interface PackageLoadMatch {
  package_name: string
  package_type: string
}

export interface PackageListMatch {
  package_type: string
  page?: number
  per_page?: number
  visibility?: string
}

export interface PackageCreateData {
  org_id?: string
  package_id: string
  package_name: string
  token?: string
  username?: string
  container: Record<string, any>
  created_at: string
  deleted_at?: string
  description?: string
  docker: Record<string, any>
  github_id: number
  html_url: string
  id: string
  included_gigabytes_bandwidth: number
  license?: string
  metadata: Record<string, any>
  name: string
  owner: Record<string, any>
  package_html_url: string
  package_type: string
  repository: Record<string, any>
  total_gigabytes_bandwidth_used: number
  total_paid_gigabytes_bandwidth_used: number
  updated_at: string
  url: string
  version_count: number
  visibility: string

  // Selects a custom action instead of the plain create:
  //   'restore' | 'restore' | 'restore'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PackageRemoveMatch {
  org_id?: string
  package_id?: string
  package_name: string
  package_version_id?: number
  username?: string
  org?: string
  package_type?: string
}

export interface Page {
  build_type?: string
  cname: string
  custom_404: boolean
  html_url?: string
  https_certificate: Record<string, any>
  https_enforced?: boolean
  pending_domain_unverified_at?: string
  protected_domain_state?: string
  public: boolean
  source: Record<string, any>
  status: string
  url: string
}

export interface PageLoadMatch {
  owner: string
  repo: string
}

export interface PageCreateData {
  owner: string
  repo: string
  build_type?: string
  cname: string
  custom_404: boolean
  html_url?: string
  https_certificate: Record<string, any>
  https_enforced?: boolean
  pending_domain_unverified_at?: string
  protected_domain_state?: string
  public: boolean
  source: Record<string, any>
  status: string
  url: string
}

export interface PageBuild {
  commit: string
  created_at: string
  duration: number
  error: Record<string, any>
  id?: string
  pusher: Record<string, any>
  status: string
  updated_at: string
  url: string
}

export interface PageBuildLoadMatch {
  id?: number
  owner: string
  repo: string
}

export interface PageBuildListMatch {
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface PageBuildStatus {
  status?: string
  url?: string
}

export interface PageBuildStatusCreateData {
  owner: string
  repo: string
  status?: string
  url?: string
}

export interface PageDeployment {
  artifact_id?: number
  artifact_url?: string
  environment?: string
  oidc_token: string
  pages_build_version: string
}

export interface PageDeploymentCreateData {
  owner: string
  repo: string
  artifact_id?: number
  artifact_url?: string
  environment?: string
  oidc_token: string
  pages_build_version: string
}

export interface PagesDeploymentStatus {
  status?: string
}

export interface PagesDeploymentStatusLoadMatch {
  owner: string
  pages_deployment_id: string
  repo: string
}

export interface PagesDeploymentStatusCreateData {
  deployment_id: string
  owner: string
  repo: string
  status?: string

  // Selects a custom action instead of the plain create:
  //   'cancel'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PagesHealthCheck {
  alt_domain?: Record<string, any>
  domain?: Record<string, any>
}

export interface PagesHealthCheckLoadMatch {
  owner: string
  repo: string
}

export interface Participation {
  all: any[]
  owner: any[]
}

export interface ParticipationListMatch {
  owner: string
  repo: string
}

export interface PendingDeployment {
  current_user_can_approve: boolean
  environment: Record<string, any>
  reviewers: any[]
  wait_timer: number
  wait_timer_started_at: string
}

export interface PendingDeploymentListMatch {
  owner: string
  repo: string
  run_id: number
}

export interface PorterAuthor {
  email: string
  id: number
  import_url: string
  name: string
  remote_id: string
  remote_name: string
  url: string
}

export interface PorterAuthorListMatch {
  owner: string
  repo: string
  since?: number
}

export interface PorterAuthorUpdateData {
  id: number
  owner: string
  repo: string
  email?: string
  import_url?: string
  name?: string
  remote_id?: string
  remote_name?: string
  url?: string
}

export interface PorterLargeFile {
  oid: string
  path: string
  ref_name: string
  size: number
}

export interface PorterLargeFileListMatch {
  owner: string
  repo: string
}

export interface PrivateRegistry {
  created_at: string
  encrypted_value?: string
  id?: string
  key: string
  key_id: string
  name: string
  registry_type?: string
  selected_repository_ids?: any[]
  updated_at: string
  url?: string
  username?: string
  visibility?: string
}

export interface PrivateRegistryLoadMatch {
  org_id: string

  // Selects a custom action instead of the plain load:
  //   'public_key'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PrivateRegistryListMatch {
  org_id: string
  page?: number
  per_page?: number
}

export interface PrivateRegistryUpdateData {
  id: string
  org_id: string
  created_at?: string
  encrypted_value?: string
  key?: string
  key_id?: string
  name?: string
  registry_type?: string
  selected_repository_ids?: any[]
  updated_at?: string
  url?: string
  username?: string
  visibility?: string
}

export interface PrivateRegistryRemoveMatch {
  id: string
  org_id: string
}

export interface PrivateUser {
}

export interface Project {
  avatar_url: string
  body?: string
  columns_url: string
  created_at: string
  creator: Record<string, any>
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  number: number
  organization_permission?: string
  organizations_url: string
  owner_url: string
  private?: boolean
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  state?: string
  subscriptions_url: string
  type: string
  updated_at: string
  url: string
  user_view_type?: string
}

export interface ProjectLoadMatch {
  id: number
}

export interface ProjectListMatch {
  org_id: string
  page?: number
  per_page?: number
  state?: string
}

export interface ProjectCreateData {
  avatar_url: string
  body?: string
  columns_url: string
  created_at: string
  creator: Record<string, any>
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  number: number
  organization_permission?: string
  organizations_url: string
  owner_url: string
  private?: boolean
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  state?: string
  subscriptions_url: string
  type: string
  updated_at: string
  url: string
  user_view_type?: string
}

export interface ProjectUpdateData {
  id: number
  avatar_url?: string
  body?: string
  columns_url?: string
  created_at?: string
  creator?: Record<string, any>
  email?: string
  events_url?: string
  followers_url?: string
  following_url?: string
  gists_url?: string
  gravatar_id?: string
  html_url?: string
  login?: string
  name?: string
  node_id?: string
  number?: number
  organization_permission?: string
  organizations_url?: string
  owner_url?: string
  private?: boolean
  received_events_url?: string
  repos_url?: string
  site_admin?: boolean
  starred_at?: string
  starred_url?: string
  state?: string
  subscriptions_url?: string
  type?: string
  updated_at?: string
  url?: string
  user_view_type?: string
}

export interface ProjectRemoveMatch {
  id: number
}

export interface ProjectCollaboratorPermission {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface ProjectCollaboratorPermissionLoadMatch {
  project_id: number
  username: string
}

export interface ProjectColumn {
  cards_url: string
  created_at: string
  id: number
  name: string
  node_id: string
  project_url: string
  updated_at: string
  url: string
}

export interface ProjectColumnLoadMatch {
  id: number
}

export interface ProjectColumnListMatch {
  id: number
  page?: number
  per_page?: number
}

export interface ProjectColumnCreateData {
  id: number
  cards_url: string
  created_at: string
  name: string
  node_id: string
  project_url: string
  updated_at: string
  url: string
}

export interface ProjectColumnUpdateData {
  id: number
  cards_url?: string
  created_at?: string
  name?: string
  node_id?: string
  project_url?: string
  updated_at?: string
  url?: string
}

export interface ProjectsClassic {
  permission?: string
  position: string
}

export interface ProjectsClassicCreateData {
  column_id: number
  permission?: string
  position: string
}

export interface ProjectsClassicUpdateData {
  project_id: number
  username: string
  permission?: string
  position?: string
}

export interface ProjectsClassicRemoveMatch {
  column_id: number
}

export interface ProjectsV2 {
  closed_at: string
  created_at: string
  creator: Record<string, any>
  deleted_at: string
  deleted_by: Record<string, any>
  description: string
  id: number
  is_template?: boolean
  latest_status_update: Record<string, any>
  node_id: string
  number: number
  owner: Record<string, any>
  public: boolean
  short_description: string
  state?: string
  title: string
  updated_at: string
}

export interface ProjectsV2LoadMatch {
  id: number
  org_id?: string
  username?: string
}

export interface ProjectsV2ListMatch {
  org_id: string
  after?: string
  before?: string
  per_page?: number
  q?: string
}

export interface ProjectsV2Field {
  configuration?: Record<string, any>
  created_at: string
  data_type: string
  id: number
  name: string
  node_id?: string
  options?: any[]
  project_url: string
  updated_at: string
}

export interface ProjectsV2FieldLoadMatch {
  id: number
  org_id?: string
  projects_v2_id: number
  username?: string
}

export interface ProjectsV2FieldListMatch {
  org_id?: string
  project_number: number
  after?: string
  before?: string
  per_page?: number
  username?: string
}

export interface ProjectsV2ItemSimple {
  id: number
  type: string
}

export interface ProjectsV2ItemSimpleCreateData {
  org_id?: string
  project_number: number
  username?: string
  id: number
  type: string
}

export interface ProjectsV2ItemWithContent {
  archived_at: string
  content?: Record<string, any>
  content_type: string
  created_at: string
  creator: Record<string, any>
  fields?: any[]
  id: number
  item_url?: string
  node_id?: string
  project_url?: string
  updated_at: string
}

export interface ProjectsV2ItemWithContentLoadMatch {
  item_id: number
  org_id?: string
  projects_v2_id: number
  field?: any[]
  username?: string
}

export interface ProjectsV2ItemWithContentListMatch {
  org_id?: string
  project_number: number
  after?: string
  before?: string
  field?: any[]
  per_page?: number
  q?: string
  username?: string
}

export interface ProjectsV2ItemWithContentUpdateData {
  item_id: number
  org_id?: string
  projects_v2_id: number
  username?: string
  archived_at?: string
  content?: Record<string, any>
  content_type?: string
  created_at?: string
  creator?: Record<string, any>
  fields?: any[]
  id?: number
  item_url?: string
  node_id?: string
  project_url?: string
  updated_at?: string
}

export interface ProtectedBranch {
  allow_deletions: Record<string, any>
  allow_force_pushes: Record<string, any>
  allow_fork_syncing?: Record<string, any>
  block_creations: Record<string, any>
  enforce_admins: Record<string, any>
  lock_branch?: Record<string, any>
  required_conversation_resolution?: Record<string, any>
  required_linear_history: Record<string, any>
  required_pull_request_reviews: Record<string, any>
  required_signatures: Record<string, any>
  required_status_checks: Record<string, any>
  restrictions: Record<string, any>
  url: string
}

export interface ProtectedBranchUpdateData {
  branch_id: string
  owner: string
  repo: string
  allow_deletions?: Record<string, any>
  allow_force_pushes?: Record<string, any>
  allow_fork_syncing?: Record<string, any>
  block_creations?: Record<string, any>
  enforce_admins?: Record<string, any>
  lock_branch?: Record<string, any>
  required_conversation_resolution?: Record<string, any>
  required_linear_history?: Record<string, any>
  required_pull_request_reviews?: Record<string, any>
  required_signatures?: Record<string, any>
  required_status_checks?: Record<string, any>
  restrictions?: Record<string, any>
  url?: string
}

export interface ProtectedBranchAdminEnforced {
  enabled: boolean
  url: string
}

export interface ProtectedBranchAdminEnforcedLoadMatch {
  branch_id: string
  owner: string
  repo: string
}

export interface ProtectedBranchAdminEnforcedCreateData {
  branch_id: string
  owner: string
  repo: string
  enabled: boolean
  url: string
}

export interface ProtectedBranchPullRequestReview {
  bypass_pull_request_allowances?: Record<string, any>
  dismiss_stale_reviews: boolean
  dismissal_restrictions?: Record<string, any>
  require_code_owner_reviews: boolean
  require_last_push_approval?: boolean
  required_approving_review_count?: number
  url?: string
}

export interface ProtectedBranchPullRequestReviewLoadMatch {
  branch_id: string
  owner: string
  repo: string
}

export interface ProtectedBranchPullRequestReviewUpdateData {
  branch_id: string
  owner: string
  repo: string
  bypass_pull_request_allowances?: Record<string, any>
  dismiss_stale_reviews?: boolean
  dismissal_restrictions?: Record<string, any>
  require_code_owner_reviews?: boolean
  require_last_push_approval?: boolean
  required_approving_review_count?: number
  url?: string
}

export interface PublicMember {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface PublicMemberListMatch {
  org_id: string
  page?: number
  per_page?: number
}

export interface Pull {
  active_lock_reason?: string
  additions: number
  assignee: Record<string, any>
  assignees?: any[]
  author_association: string
  auto_merge: Record<string, any>
  base: Record<string, any>
  body: string
  changed_files: number
  closed_at: string
  comments: number
  comments_url: string
  commit_message?: string
  commit_title?: string
  commits: number
  commits_url: string
  created_at: string
  deletions: number
  diff_url: string
  draft?: boolean
  expected_head_sha?: string
  head: Record<string, any>
  head_repo?: string
  html_url: string
  id: number
  issue?: number
  issue_url: string
  labels: any[]
  links: Record<string, any>
  locked: boolean
  maintainer_can_modify: boolean
  merge_commit_sha: string
  merge_method?: string
  mergeable: boolean
  mergeable_state: string
  merged: boolean
  merged_at: string
  merged_by: Record<string, any>
  message: string
  milestone: Record<string, any>
  node_id: string
  number: number
  patch_url: string
  rebaseable?: boolean
  requested_reviewers?: any[]
  requested_teams?: any[]
  review_comment_url: string
  review_comments: number
  review_comments_url: string
  sha: string
  state: string
  statuses_url: string
  title: string
  updated_at: string
  url: string
  user: Record<string, any>
}

export interface PullLoadMatch {
  id: number
  owner: string
  repo: string

  // Selects a custom action instead of the plain load:
  //   'merge'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PullListMatch {
  owner: string
  repo: string
  base?: string
  direction?: string
  head?: string
  page?: number
  per_page?: number
  sort?: string
  state?: string
  commit_sha?: string
}

export interface PullCreateData {
  owner: string
  repo: string
  active_lock_reason?: string
  additions: number
  assignee: Record<string, any>
  assignees?: any[]
  author_association: string
  auto_merge: Record<string, any>
  base: Record<string, any>
  body: string
  changed_files: number
  closed_at: string
  comments: number
  comments_url: string
  commit_message?: string
  commit_title?: string
  commits: number
  commits_url: string
  created_at: string
  deletions: number
  diff_url: string
  draft?: boolean
  expected_head_sha?: string
  head: Record<string, any>
  head_repo?: string
  html_url: string
  id: number
  issue?: number
  issue_url: string
  labels: any[]
  links: Record<string, any>
  locked: boolean
  maintainer_can_modify: boolean
  merge_commit_sha: string
  merge_method?: string
  mergeable: boolean
  mergeable_state: string
  merged: boolean
  merged_at: string
  merged_by: Record<string, any>
  message: string
  milestone: Record<string, any>
  node_id: string
  number: number
  patch_url: string
  rebaseable?: boolean
  requested_reviewers?: any[]
  requested_teams?: any[]
  review_comment_url: string
  review_comments: number
  review_comments_url: string
  sha: string
  state: string
  statuses_url: string
  title: string
  updated_at: string
  url: string
  user: Record<string, any>
}

export interface PullUpdateData {
  id: number
  owner: string
  repo: string
  active_lock_reason?: string
  additions?: number
  assignee?: Record<string, any>
  assignees?: any[]
  author_association?: string
  auto_merge?: Record<string, any>
  base?: Record<string, any>
  body?: string
  changed_files?: number
  closed_at?: string
  comments?: number
  comments_url?: string
  commit_message?: string
  commit_title?: string
  commits?: number
  commits_url?: string
  created_at?: string
  deletions?: number
  diff_url?: string
  draft?: boolean
  expected_head_sha?: string
  head?: Record<string, any>
  head_repo?: string
  html_url?: string
  issue?: number
  issue_url?: string
  labels?: any[]
  links?: Record<string, any>
  locked?: boolean
  maintainer_can_modify?: boolean
  merge_commit_sha?: string
  merge_method?: string
  mergeable?: boolean
  mergeable_state?: string
  merged?: boolean
  merged_at?: string
  merged_by?: Record<string, any>
  message?: string
  milestone?: Record<string, any>
  node_id?: string
  number?: number
  patch_url?: string
  rebaseable?: boolean
  requested_reviewers?: any[]
  requested_teams?: any[]
  review_comment_url?: string
  review_comments?: number
  review_comments_url?: string
  sha?: string
  state?: string
  statuses_url?: string
  title?: string
  updated_at?: string
  url?: string
  user?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'merge' | 'update_branch'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PullRemoveMatch {
  comment_id: number
  owner: string
  repo: string
}

export interface PullRequestReview {
  author_association: string
  body: string
  body_html?: string
  body_text?: string
  comments?: any[]
  commit_id: string
  event: string
  html_url: string
  id: number
  links: Record<string, any>
  message: string
  node_id: string
  pull_request_url: string
  state: string
  submitted_at?: string
  teams: any[]
  user: Record<string, any>
  users: any[]
}

export interface PullRequestReviewLoadMatch {
  id: number
  owner: string
  pull_id: number
  repo: string
}

export interface PullRequestReviewListMatch {
  owner: string
  pull_number: number
  repo: string
  page?: number
  per_page?: number
}

export interface PullRequestReviewCreateData {
  owner: string
  pull_id?: number
  repo: string
  review_id?: number
  pull_number?: number
  author_association: string
  body: string
  body_html?: string
  body_text?: string
  comments?: any[]
  commit_id: string
  event: string
  html_url: string
  id: number
  links: Record<string, any>
  message: string
  node_id: string
  pull_request_url: string
  state: string
  submitted_at?: string
  teams: any[]
  user: Record<string, any>
  users: any[]
}

export interface PullRequestReviewUpdateData {
  id?: number
  owner: string
  pull_id: number
  repo: string
  review_id?: number
  author_association?: string
  body?: string
  body_html?: string
  body_text?: string
  comments?: any[]
  commit_id?: string
  event?: string
  html_url?: string
  links?: Record<string, any>
  message?: string
  node_id?: string
  pull_request_url?: string
  state?: string
  submitted_at?: string
  teams?: any[]
  user?: Record<string, any>
  users?: any[]
}

export interface PullRequestReviewRemoveMatch {
  id: number
  owner: string
  pull_id: number
  repo: string
}

export interface PullRequestReviewComment {
  author_association: string
  body: string
  body_html?: string
  body_text?: string
  commit_id: string
  created_at: string
  diff_hunk: string
  html_url: string
  id: number
  in_reply_to?: number
  in_reply_to_id?: number
  line?: number
  links: Record<string, any>
  node_id: string
  original_commit_id: string
  original_line?: number
  original_position?: number
  original_start_line?: number
  path: string
  position?: number
  pull_request_review_id: number
  pull_request_url: string
  reactions: Record<string, any>
  side?: string
  start_line?: number
  start_side?: string
  subject_type?: string
  updated_at: string
  url: string
  user: Record<string, any>
}

export interface PullRequestReviewCommentLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface PullRequestReviewCommentListMatch {
  owner: string
  pull_number?: number
  repo: string
  direction?: string
  page?: number
  per_page?: number
  since?: string
  sort?: string
}

export interface PullRequestReviewCommentCreateData {
  comment_id?: number
  owner: string
  pull_id?: number
  repo: string
  pull_number?: number
  author_association: string
  body: string
  body_html?: string
  body_text?: string
  commit_id: string
  created_at: string
  diff_hunk: string
  html_url: string
  id: number
  in_reply_to?: number
  in_reply_to_id?: number
  line?: number
  links: Record<string, any>
  node_id: string
  original_commit_id: string
  original_line?: number
  original_position?: number
  original_start_line?: number
  path: string
  position?: number
  pull_request_review_id: number
  pull_request_url: string
  reactions: Record<string, any>
  side?: string
  start_line?: number
  start_side?: string
  subject_type?: string
  updated_at: string
  url: string
  user: Record<string, any>
}

export interface PullRequestReviewCommentUpdateData {
  id: number
  owner: string
  repo: string
  author_association?: string
  body?: string
  body_html?: string
  body_text?: string
  commit_id?: string
  created_at?: string
  diff_hunk?: string
  html_url?: string
  in_reply_to?: number
  in_reply_to_id?: number
  line?: number
  links?: Record<string, any>
  node_id?: string
  original_commit_id?: string
  original_line?: number
  original_position?: number
  original_start_line?: number
  path?: string
  position?: number
  pull_request_review_id?: number
  pull_request_url?: string
  reactions?: Record<string, any>
  side?: string
  start_line?: number
  start_side?: string
  subject_type?: string
  updated_at?: string
  url?: string
  user?: Record<string, any>
}

export interface PullRequestSimple {
  reviewers?: any[]
  team_reviewers?: any[]
}

export interface PullRequestSimpleCreateData {
  owner: string
  pull_number: number
  repo: string
  reviewers?: any[]
  team_reviewers?: any[]
}

export interface PullRequestSimpleRemoveMatch {
  owner: string
  pull_number: number
  repo: string
}

export interface RateLimit {
  rate: Record<string, any>
  resources: Record<string, any>
}

export interface RateLimitLoadMatch {
  rate?: Record<string, any>
  resources?: Record<string, any>
}

export interface Reaction {
  avatar_url: string
  content: string
  created_at: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user: Record<string, any>
  user_view_type?: string
}

export interface ReactionListMatch {
  discussion_number: number
  team_id: number
  content?: string
  page?: number
  per_page?: number
}

export interface ReactionCreateData {
  discussion_number: number
  team_id: number
  avatar_url: string
  content: string
  created_at: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user: Record<string, any>
  user_view_type?: string
}

export interface ReactionRemoveMatch {
  comment_id?: number
  discussion_id?: number
  id: number
  org_id?: string
  team_id?: string
  owner?: string
  repo?: string
  issue_id?: number
  release_id?: number
}

export interface Referrer {
  count: number
  referrer: string
  uniques: number
}

export interface ReferrerListMatch {
  owner: string
  repo: string
}

export interface Release {
  assets: any[]
  assets_url: string
  author: Record<string, any>
  body?: string
  body_html?: string
  body_text?: string
  browser_download_url: string
  content_type: string
  created_at: string
  digest: string
  discussion_category_name?: string
  discussion_url?: string
  download_count: number
  draft: boolean
  generate_release_notes?: boolean
  html_url: string
  id: number
  immutable?: boolean
  label: string
  make_latest?: string
  mentions_count?: number
  name: string
  node_id: string
  prerelease: boolean
  published_at: string
  reactions: Record<string, any>
  size: number
  state: string
  tag_name: string
  tarball_url: string
  target_commitish: string
  updated_at?: string
  upload_url: string
  uploader: Record<string, any>
  url: string
  zipball_url: string
}

export interface ReleaseLoadMatch {
  id?: number
  owner: string
  repo: string
  tag?: string
}

export interface ReleaseListMatch {
  owner: string
  repo: string
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'latest'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ReleaseCreateData {
  owner: string
  repo: string
  assets: any[]
  assets_url: string
  author: Record<string, any>
  body?: string
  body_html?: string
  body_text?: string
  browser_download_url: string
  content_type: string
  created_at: string
  digest: string
  discussion_category_name?: string
  discussion_url?: string
  download_count: number
  draft: boolean
  generate_release_notes?: boolean
  html_url: string
  id: number
  immutable?: boolean
  label: string
  make_latest?: string
  mentions_count?: number
  name: string
  node_id: string
  prerelease: boolean
  published_at: string
  reactions: Record<string, any>
  size: number
  state: string
  tag_name: string
  tarball_url: string
  target_commitish: string
  updated_at?: string
  upload_url: string
  uploader: Record<string, any>
  url: string
  zipball_url: string
}

export interface ReleaseUpdateData {
  id: number
  owner: string
  repo: string
  assets?: any[]
  assets_url?: string
  author?: Record<string, any>
  body?: string
  body_html?: string
  body_text?: string
  browser_download_url?: string
  content_type?: string
  created_at?: string
  digest?: string
  discussion_category_name?: string
  discussion_url?: string
  download_count?: number
  draft?: boolean
  generate_release_notes?: boolean
  html_url?: string
  immutable?: boolean
  label?: string
  make_latest?: string
  mentions_count?: number
  name?: string
  node_id?: string
  prerelease?: boolean
  published_at?: string
  reactions?: Record<string, any>
  size?: number
  state?: string
  tag_name?: string
  tarball_url?: string
  target_commitish?: string
  updated_at?: string
  upload_url?: string
  uploader?: Record<string, any>
  url?: string
  zipball_url?: string
}

export interface ReleaseAsset {
  avatar_url: string
  browser_download_url?: string
  content_type?: string
  created_at?: string
  digest?: string
  download_count?: number
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  label?: string
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  size?: number
  starred_at?: string
  starred_url: string
  state?: string
  subscriptions_url: string
  type: string
  updated_at?: string
  uploader?: Record<string, any>
  url: string
  user_view_type?: string
}

export interface ReleaseAssetLoadMatch {
  id: number
  owner: string
  repo: string
}

export interface ReleaseAssetListMatch {
  id: number
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface ReleaseAssetCreateData {
  id: number
  owner: string
  repo: string
  label?: string
  name: string
  avatar_url: string
  browser_download_url?: string
  content_type?: string
  created_at?: string
  digest?: string
  download_count?: number
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  size?: number
  starred_at?: string
  starred_url: string
  state?: string
  subscriptions_url: string
  type: string
  updated_at?: string
  uploader?: Record<string, any>
  url: string
  user_view_type?: string
}

export interface ReleaseAssetUpdateData {
  id: number
  owner: string
  repo: string
  avatar_url?: string
  browser_download_url?: string
  content_type?: string
  created_at?: string
  digest?: string
  download_count?: number
  email?: string
  events_url?: string
  followers_url?: string
  following_url?: string
  gists_url?: string
  gravatar_id?: string
  html_url?: string
  label?: string
  login?: string
  name?: string
  node_id?: string
  organizations_url?: string
  received_events_url?: string
  repos_url?: string
  site_admin?: boolean
  size?: number
  starred_at?: string
  starred_url?: string
  state?: string
  subscriptions_url?: string
  type?: string
  updated_at?: string
  uploader?: Record<string, any>
  url?: string
  user_view_type?: string
}

export interface ReleaseNotesContent {
  body: string
  configuration_file_path?: string
  name: string
  previous_tag_name?: string
  tag_name: string
  target_commitish?: string
}

export interface ReleaseNotesContentCreateData {
  owner: string
  repo: string
  body: string
  configuration_file_path?: string
  name: string
  previous_tag_name?: string
  tag_name: string
  target_commitish?: string
}

export interface Remove {
  usernames: any[]
}

export interface RemoveCreateData {
  enterprise: string
  team_id: string
  usernames: any[]
}

export interface Repo {
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  anonymous_access_enabled?: boolean
  app: Record<string, any>
  archive_url: string
  archived: boolean
  assignees_url: string
  attestations?: any[]
  blobs_url: string
  branches_url: string
  build_type?: string
  bundle: Record<string, any>
  client_payload?: Record<string, any>
  clone_url: string
  cname?: string
  code_search_index_status?: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  content?: string
  contents_url: string
  contributors_url: string
  created_at: string
  default_branch: string
  default_branch_only?: boolean
  delete_branch_on_merge?: boolean
  deployment_branch_policy: Record<string, any>
  deployments_url: string
  description: string
  disabled: boolean
  download_url?: string
  downloads_url: string
  enabled: boolean
  encoding?: string
  event_type: string
  events_url: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url?: string
  github_id: number
  has_discussions?: boolean
  has_downloads: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url?: string
  https_enforced?: boolean
  id: string
  integration_url: string
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: string
  languages_url: string
  license: Record<string, any>
  links?: Record<string, any>
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url: string
  milestones_url: string
  mirror_url: string
  name?: string
  new_name?: string
  new_owner: string
  node_id: string
  notifications_url: string
  open_issues: number
  open_issues_count: number
  organization?: string
  owner: Record<string, any>
  path?: string
  permissions: Record<string, any>
  private: boolean
  properties: any[]
  protection_rules?: any[]
  pulls_url: string
  pushed_at: string
  releases_url: string
  sha?: string
  size?: number
  slug: string
  source?: any
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  starred_at?: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  svn_url: string
  tags_url: string
  team_ids?: any[]
  teams_url: string
  temp_clone_token?: string
  topics?: any[]
  trees_url: string
  type?: string
  updated_at: string
  url?: string
  use_squash_pr_title_as_default?: boolean
  visibility?: string
  watchers: number
  watchers_count: number
  web_commit_signoff_required?: boolean
}

export interface RepoLoadMatch {
  owner: string
  repo: string
  subject_digest?: string
  after?: string
  before?: string
  per_page?: number
  predicate_type?: string
  path?: string
  ref?: string
  username?: string

  // Selects a custom action instead of the plain load:
  //   'private_vulnerability_reporting' | 'vulnerability_alert'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RepoListMatch {
  affiliation?: string
  before?: string
  direction?: string
  page?: number
  per_page?: number
  since?: string
  sort?: string
  type?: string
  visibility?: string

  // Selects a custom action instead of the plain list:
  //   'environment'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RepoCreateData {
  delivery_id?: number
  hook_id?: number
  owner: string
  repo: string
  branch_id?: string
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  anonymous_access_enabled?: boolean
  app: Record<string, any>
  archive_url: string
  archived: boolean
  assignees_url: string
  attestations?: any[]
  blobs_url: string
  branches_url: string
  build_type?: string
  bundle: Record<string, any>
  client_payload?: Record<string, any>
  clone_url: string
  cname?: string
  code_search_index_status?: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  content?: string
  contents_url: string
  contributors_url: string
  created_at: string
  default_branch: string
  default_branch_only?: boolean
  delete_branch_on_merge?: boolean
  deployment_branch_policy: Record<string, any>
  deployments_url: string
  description: string
  disabled: boolean
  download_url?: string
  downloads_url: string
  enabled: boolean
  encoding?: string
  event_type: string
  events_url: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url?: string
  github_id: number
  has_discussions?: boolean
  has_downloads: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url?: string
  https_enforced?: boolean
  id: string
  integration_url: string
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: string
  languages_url: string
  license: Record<string, any>
  links?: Record<string, any>
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url: string
  milestones_url: string
  mirror_url: string
  name?: string
  new_name?: string
  new_owner: string
  node_id: string
  notifications_url: string
  open_issues: number
  open_issues_count: number
  organization?: string
  path?: string
  permissions: Record<string, any>
  private: boolean
  properties: any[]
  protection_rules?: any[]
  pulls_url: string
  pushed_at: string
  releases_url: string
  sha?: string
  size?: number
  slug: string
  source?: any
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  starred_at?: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  svn_url: string
  tags_url: string
  team_ids?: any[]
  teams_url: string
  temp_clone_token?: string
  topics?: any[]
  trees_url: string
  type?: string
  updated_at: string
  url?: string
  use_squash_pr_title_as_default?: boolean
  visibility?: string
  watchers: number
  watchers_count: number
  web_commit_signoff_required?: boolean

  // Selects a custom action instead of the plain create:
  //   'attestation' | 'dispatch' | 'fork' | 'transfer'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RepoUpdateData {
  branch_id: string
  owner: string
  repo: string
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  allow_update_branch?: boolean
  anonymous_access_enabled?: boolean
  app?: Record<string, any>
  archive_url?: string
  archived?: boolean
  assignees_url?: string
  attestations?: any[]
  blobs_url?: string
  branches_url?: string
  build_type?: string
  bundle?: Record<string, any>
  client_payload?: Record<string, any>
  clone_url?: string
  cname?: string
  code_search_index_status?: Record<string, any>
  collaborators_url?: string
  comments_url?: string
  commits_url?: string
  compare_url?: string
  content?: string
  contents_url?: string
  contributors_url?: string
  created_at?: string
  default_branch?: string
  default_branch_only?: boolean
  delete_branch_on_merge?: boolean
  deployment_branch_policy?: Record<string, any>
  deployments_url?: string
  description?: string
  disabled?: boolean
  download_url?: string
  downloads_url?: string
  enabled?: boolean
  encoding?: string
  event_type?: string
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
  github_id?: number
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url?: string
  html_url?: string
  https_enforced?: boolean
  id?: string
  integration_url?: string
  is_template?: boolean
  issue_comment_url?: string
  issue_events_url?: string
  issues_url?: string
  keys_url?: string
  labels_url?: string
  language?: string
  languages_url?: string
  license?: Record<string, any>
  links?: Record<string, any>
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url?: string
  milestones_url?: string
  mirror_url?: string
  name?: string
  new_name?: string
  new_owner?: string
  node_id?: string
  notifications_url?: string
  open_issues?: number
  open_issues_count?: number
  organization?: string
  path?: string
  permissions?: Record<string, any>
  private?: boolean
  properties?: any[]
  protection_rules?: any[]
  pulls_url?: string
  pushed_at?: string
  releases_url?: string
  sha?: string
  size?: number
  slug?: string
  source?: any
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url?: string
  stargazers_count?: number
  stargazers_url?: string
  starred_at?: string
  statuses_url?: string
  subscribers_url?: string
  subscription_url?: string
  svn_url?: string
  tags_url?: string
  team_ids?: any[]
  teams_url?: string
  temp_clone_token?: string
  topics?: any[]
  trees_url?: string
  type?: string
  updated_at?: string
  url?: string
  use_squash_pr_title_as_default?: boolean
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean

  // Selects a custom action instead of the plain update:
  //   'automated_security_fix' | 'page' | 'private_vulnerability_reporting' | 'vulnerability_alert'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RepoRemoveMatch {
  owner: string
  repo: string

  // Selects a custom action instead of the plain remove:
  //   'automated_security_fix' | 'page' | 'private_vulnerability_reporting' | 'vulnerability_alert'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Repository {
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
  blobs_url: string
  branches_url: string
  clone_url: string
  code_search_index_status?: Record<string, any>
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
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
  has_discussions?: boolean
  has_downloads: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
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
  master_branch?: string
  merge_commit_message?: string
  merge_commit_title?: string
  merges_url: string
  milestones_url: string
  mirror_url: string
  name: string
  node_id: string
  notifications_url: string
  open_issues: number
  open_issues_count: number
  owner: Record<string, any>
  permissions: Record<string, any>
  private: boolean
  pulls_url: string
  pushed_at: string
  releases_url: string
  size: number
  squash_merge_commit_message?: string
  squash_merge_commit_title?: string
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  starred_at?: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  svn_url: string
  tags_url: string
  teams_url: string
  temp_clone_token?: string
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

export interface RepositoryListMatch {
  direction?: string
  page?: number
  per_page?: number
  sort?: string
}

export interface RepositoryAdvisory {
  author: any
  closed_at: string
  collaborating_teams: any[]
  collaborating_users: any[]
  created_at: string
  credits: any[]
  credits_detailed: any[]
  cve_id: string
  cvss: Record<string, any>
  cvss_severities?: Record<string, any>
  cvss_vector_string?: string
  cwe_ids: any[]
  cwes: any[]
  description: string
  ghsa_id: string
  html_url: string
  identifiers: any[]
  private_fork: any
  published_at: string
  publisher: any
  severity: string
  start_private_fork?: boolean
  state: string
  submission: Record<string, any>
  summary: string
  updated_at: string
  url: string
  vulnerabilities: any[]
  withdrawn_at: string
}

export interface RepositoryAdvisoryLoadMatch {
  ghsa_id: string
  owner: string
  repo: string
}

export interface RepositoryAdvisoryListMatch {
  org_id: string
  after?: string
  before?: string
  direction?: string
  per_page?: number
  sort?: string
  state?: string
}

export interface RepositoryAdvisoryCreateData {
  owner: string
  repo: string
  author: any
  closed_at: string
  collaborating_teams: any[]
  collaborating_users: any[]
  created_at: string
  credits: any[]
  credits_detailed: any[]
  cve_id: string
  cvss: Record<string, any>
  cvss_severities?: Record<string, any>
  cvss_vector_string?: string
  cwe_ids: any[]
  cwes: any[]
  description: string
  ghsa_id: string
  html_url: string
  identifiers: any[]
  private_fork: any
  published_at: string
  publisher: any
  severity: string
  start_private_fork?: boolean
  state: string
  submission: Record<string, any>
  summary: string
  updated_at: string
  url: string
  vulnerabilities: any[]
  withdrawn_at: string

  // Selects a custom action instead of the plain create:
  //   'cve'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RepositoryAdvisoryUpdateData {
  ghsa_id: string
  owner: string
  repo: string
  author?: any
  closed_at?: string
  collaborating_teams?: any[]
  collaborating_users?: any[]
  created_at?: string
  credits?: any[]
  credits_detailed?: any[]
  cve_id?: string
  cvss?: Record<string, any>
  cvss_severities?: Record<string, any>
  cvss_vector_string?: string
  cwe_ids?: any[]
  cwes?: any[]
  description?: string
  html_url?: string
  identifiers?: any[]
  private_fork?: any
  published_at?: string
  publisher?: any
  severity?: string
  start_private_fork?: boolean
  state?: string
  submission?: Record<string, any>
  summary?: string
  updated_at?: string
  url?: string
  vulnerabilities?: any[]
  withdrawn_at?: string
}

export interface RepositoryCollaboratorPermission {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  permissions: Record<string, any>
  received_events_url: string
  repos_url: string
  role_name: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface RepositoryCollaboratorPermissionLoadMatch {
  owner: string
  repo: string
  username: string
}

export interface RepositoryInvitation {
  created_at: string
  expired?: boolean
  html_url: string
  id: number
  invitee: Record<string, any>
  inviter: Record<string, any>
  node_id: string
  permission?: string
  permissions: string
  repository: Record<string, any>
  url: string
}

export interface RepositoryInvitationListMatch {
  page?: number
  per_page?: number
}

export interface RepositoryInvitationUpdateData {
  owner: string
  repo: string
  username: string
  created_at?: string
  expired?: boolean
  html_url?: string
  id?: number
  invitee?: Record<string, any>
  inviter?: Record<string, any>
  node_id?: string
  permission?: string
  permissions?: string
  repository?: Record<string, any>
  url?: string
}

export interface RepositoryRuleDetailed {
  parameters?: Record<string, any>
  ruleset_id?: number
  ruleset_source?: string
  ruleset_source_type?: string
  type?: string
}

export interface RepositoryRuleDetailedLoadMatch {
  branch: string
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface RepositoryRuleset {
  bypass_actors?: any[]
  conditions?: any
  created_at?: string
  current_user_can_bypass?: string
  enforcement: string
  id: number
  links?: Record<string, any>
  name: string
  node_id?: string
  rules?: any[]
  source: string
  source_type?: string
  target?: string
  updated_at?: string
}

export interface RepositoryRulesetLoadMatch {
  id: number
  owner?: string
  repo?: string
  includes_parent?: boolean
  org_id?: string
}

export interface RepositoryRulesetListMatch {
  org_id: string
  page?: number
  per_page?: number
  target?: string
}

export interface RepositoryRulesetCreateData {
  org_id: string
  bypass_actors?: any[]
  conditions?: any
  created_at?: string
  current_user_can_bypass?: string
  enforcement: string
  id: number
  links?: Record<string, any>
  name: string
  node_id?: string
  rules?: any[]
  source: string
  source_type?: string
  target?: string
  updated_at?: string
}

export interface RepositoryRulesetUpdateData {
  id: number
  owner?: string
  repo?: string
  org_id?: string
  bypass_actors?: any[]
  conditions?: any
  created_at?: string
  current_user_can_bypass?: string
  enforcement?: string
  links?: Record<string, any>
  name?: string
  node_id?: string
  rules?: any[]
  source?: string
  source_type?: string
  target?: string
  updated_at?: string
}

export interface RepositorySubscription {
  created_at: string
  ignored: boolean
  reason: string
  repository_url: string
  subscribed: boolean
  url: string
}

export interface RepositorySubscriptionLoadMatch {
  owner: string
  repo: string
}

export interface RepositorySubscriptionUpdateData {
  owner: string
  repo: string
  created_at?: string
  ignored?: boolean
  reason?: string
  repository_url?: string
  subscribed?: boolean
  url?: string
}

export interface ReviewComment {
  author_association: string
  body: string
  body_html?: string
  body_text?: string
  commit_id: string
  created_at: string
  diff_hunk: string
  html_url: string
  id: number
  in_reply_to_id?: number
  line?: number
  links: Record<string, any>
  node_id: string
  original_commit_id: string
  original_line?: number
  original_position: number
  original_start_line?: number
  path: string
  position: number
  pull_request_review_id: number
  pull_request_url: string
  reactions: Record<string, any>
  side?: string
  start_line?: number
  start_side?: string
  subject_type?: string
  updated_at: string
  url: string
  user: Record<string, any>
}

export interface ReviewCommentListMatch {
  id: number
  owner: string
  pull_id: number
  repo: string
  page?: number
  per_page?: number
}

export interface RuleSuite {
  actor_id?: number
  actor_name?: string
  after_sha?: string
  before_sha?: string
  evaluation_result?: string
  id?: number
  pushed_at?: string
  ref?: string
  repository_id?: number
  repository_name?: string
  result?: string
  rule_evaluations?: any[]
}

export interface RuleSuiteLoadMatch {
  id: number
  owner?: string
  repo?: string
  org_id?: string
}

export interface RuleSuiteListMatch {
  org_id: string
  actor_name?: string
  page?: number
  per_page?: number
  ref?: string
  repository_name?: string
  rule_suite_result?: string
  time_period?: string
}

export interface RulesetVersion {
  actor: Record<string, any>
  id?: string
  updated_at: string
  version_id: number
}

export interface RulesetVersionListMatch {
  id: number
  owner?: string
  repo?: string
  page?: number
  per_page?: number
  org_id?: string

  // Selects a custom action instead of the plain list:
  //   'history' | 'history'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RulesetVersionWithState {
  actor: Record<string, any>
  state: Record<string, any>
  updated_at: string
  version_id: number
}

export interface RulesetVersionWithStateLoadMatch {
  owner?: string
  repo?: string
  ruleset_id: number
  version_id: number
  org_id?: string
}

export interface Runner {
  busy: boolean
  ephemeral?: boolean
  id: number
  labels: any[]
  name: string
  os: string
  runner_group_id?: number
  status: string
}

export interface RunnerLoadMatch {
  id: number
  owner?: string
  repo?: string
  org_id?: string
}

export interface RunnerApplication {
  architecture: string
  download_url: string
  filename: string
  os: string
  sha256_checksum?: string
  temp_download_token?: string
}

export interface RunnerApplicationListMatch {
  org_id: string
}

export interface RunnerGroup {
  allows_public_repositories: boolean
  default: boolean
  hosted_runners_url?: string
  id: number
  inherited: boolean
  inherited_allows_public_repositories?: boolean
  name: string
  network_configuration_id?: string
  restricted_to_workflows?: boolean
  runners?: any[]
  runners_url: string
  selected_repositories_url?: string
  selected_repository_ids?: any[]
  selected_workflows?: any[]
  visibility: string
  workflow_restrictions_read_only?: boolean
}

export interface RunnerGroupLoadMatch {
  id: number
  org_id: string
}

export interface RunnerGroupCreateData {
  org_id: string
  allows_public_repositories: boolean
  default: boolean
  hosted_runners_url?: string
  id: number
  inherited: boolean
  inherited_allows_public_repositories?: boolean
  name: string
  network_configuration_id?: string
  restricted_to_workflows?: boolean
  runners?: any[]
  runners_url: string
  selected_repositories_url?: string
  selected_repository_ids?: any[]
  selected_workflows?: any[]
  visibility: string
  workflow_restrictions_read_only?: boolean
}

export interface RunnerGroupUpdateData {
  id: number
  org_id: string
  allows_public_repositories?: boolean
  default?: boolean
  hosted_runners_url?: string
  inherited?: boolean
  inherited_allows_public_repositories?: boolean
  name?: string
  network_configuration_id?: string
  restricted_to_workflows?: boolean
  runners?: any[]
  runners_url?: string
  selected_repositories_url?: string
  selected_repository_ids?: any[]
  selected_workflows?: any[]
  visibility?: string
  workflow_restrictions_read_only?: boolean
}

export interface Search {
  active_lock_reason?: string
  aliases?: any[]
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  archive_url: string
  archived: boolean
  assignee: Record<string, any>
  assignees?: any[]
  assignees_url: string
  author: Record<string, any>
  author_association: string
  avatar_url: string
  bio?: string
  blobs_url: string
  blog?: string
  body?: string
  body_html?: string
  body_text?: string
  branches_url: string
  clone_url: string
  closed_at: string
  collaborators_url: string
  color: string
  comments: number
  comments_url: string
  commit: Record<string, any>
  commits_url: string
  committer: Record<string, any>
  company?: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
  created_by: string
  curated: boolean
  default: boolean
  default_branch: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  disabled: boolean
  display_name: string
  downloads_url: string
  draft?: boolean
  email?: string
  events_url: string
  featured: boolean
  file_size?: number
  followers?: number
  followers_url: string
  following?: number
  following_url: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  gists_url: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  gravatar_id: string
  has_discussions?: boolean
  has_downloads: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  hireable?: boolean
  homepage: string
  hooks_url: string
  html_url: string
  id: number
  is_template?: boolean
  issue_comment_url: string
  issue_dependencies_summary: Record<string, any>
  issue_events_url: string
  issue_field_values?: any[]
  issues_url: string
  keys_url: string
  labels: any[]
  labels_url: string
  language?: string
  languages_url: string
  last_modified_at?: string
  license: Record<string, any>
  line_numbers?: any[]
  location?: string
  locked: boolean
  login: string
  logo_url?: string
  master_branch?: string
  merges_url: string
  milestone: Record<string, any>
  milestones_url: string
  mirror_url: string
  name: string
  node_id: string
  notifications_url: string
  number: number
  open_issues: number
  open_issues_count: number
  organizations_url: string
  owner: Record<string, any>
  parents: any[]
  path: string
  performed_via_github_app: Record<string, any>
  permissions: Record<string, any>
  private: boolean
  public_gists?: number
  public_repos?: number
  pull_request: Record<string, any>
  pulls_url: string
  pushed_at: string
  reactions: Record<string, any>
  received_events_url: string
  related?: any[]
  released: string
  releases_url: string
  repos_url: string
  repository: Record<string, any>
  repository_count?: number
  repository_url: string
  score: number
  sha: string
  short_description: string
  site_admin: boolean
  size: number
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  starred_url: string
  state: string
  state_reason?: string
  statuses_url: string
  sub_issues_summary: Record<string, any>
  subscribers_url: string
  subscription_url: string
  subscriptions_url: string
  suspended_at?: string
  svn_url: string
  tags_url: string
  teams_url: string
  temp_clone_token?: string
  text_matches?: any[]
  timeline_url?: string
  title: string
  topics?: any[]
  trees_url: string
  type: Record<string, any>
  updated_at: string
  url: string
  user: Record<string, any>
  user_view_type?: string
  visibility?: string
  watchers: number
  watchers_count: number
  web_commit_signoff_required?: boolean
}

export interface SearchListMatch {
  advanced_search?: string
  order?: string
  page?: number
  per_page?: number
  q: string
  search_type?: string
  sort?: string
  repository_id?: number

  // Selects a custom action instead of the plain list:
  //   'code' | 'commit' | 'issue' | 'label' | 'repository' | 'topic' | 'user'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SecretScanning {
  custom_pattern_settings?: any[]
  pattern_config_version?: string
  provider_pattern_settings?: any[]
}

export interface SecretScanningUpdateData {
  org_id: string
  custom_pattern_settings?: any[]
  pattern_config_version?: string
  provider_pattern_settings?: any[]

  // Selects a custom action instead of the plain update:
  //   'pattern_configuration'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SecretScanningAlert {
  created_at?: string
  first_location_detected?: any
  has_more_locations?: boolean
  html_url?: string
  id?: string
  is_base64_encoded?: boolean
  locations_url?: string
  multi_repo?: boolean
  number?: number
  publicly_leaked?: boolean
  push_protection_bypass_request_comment?: string
  push_protection_bypass_request_html_url?: string
  push_protection_bypass_request_reviewer: Record<string, any>
  push_protection_bypass_request_reviewer_comment?: string
  push_protection_bypassed?: boolean
  push_protection_bypassed_at?: string
  push_protection_bypassed_by: Record<string, any>
  resolution?: string
  resolution_comment?: string
  resolved_at?: string
  resolved_by: Record<string, any>
  secret?: string
  secret_type?: string
  secret_type_display_name?: string
  state?: string
  updated_at?: string
  url?: string
  validity?: string
}

export interface SecretScanningAlertLoadMatch {
  id: number
  owner: string
  repo: string
  hide_secret?: boolean
}

export interface SecretScanningAlertListMatch {
  owner: string
  repo: string
  after?: string
  before?: string
  direction?: string
  hide_secret?: boolean
  is_multi_repo?: boolean
  is_publicly_leaked?: boolean
  page?: number
  per_page?: number
  resolution?: string
  secret_type?: string
  sort?: string
  state?: string
  validity?: string
}

export interface SecretScanningAlertUpdateData {
  id: number
  owner: string
  repo: string
  created_at?: string
  first_location_detected?: any
  has_more_locations?: boolean
  html_url?: string
  is_base64_encoded?: boolean
  locations_url?: string
  multi_repo?: boolean
  number?: number
  publicly_leaked?: boolean
  push_protection_bypass_request_comment?: string
  push_protection_bypass_request_html_url?: string
  push_protection_bypass_request_reviewer?: Record<string, any>
  push_protection_bypass_request_reviewer_comment?: string
  push_protection_bypassed?: boolean
  push_protection_bypassed_at?: string
  push_protection_bypassed_by?: Record<string, any>
  resolution?: string
  resolution_comment?: string
  resolved_at?: string
  resolved_by?: Record<string, any>
  secret?: string
  secret_type?: string
  secret_type_display_name?: string
  state?: string
  updated_at?: string
  url?: string
  validity?: string
}

export interface SecretScanningLocation {
  details?: any
  type?: string
}

export interface SecretScanningLocationListMatch {
  alert_number: number
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface SecretScanningPatternConfiguration {
  custom_pattern_overrides?: any[]
  pattern_config_version?: string
  provider_pattern_overrides?: any[]
}

export interface SecretScanningPatternConfigurationListMatch {
  org_id: string
}

export interface SecretScanningPushProtectionBypass {
  expire_at?: string
  placeholder_id: string
  reason?: string
  token_type?: string
}

export interface SecretScanningPushProtectionBypassCreateData {
  owner: string
  repo: string
  expire_at?: string
  placeholder_id: string
  reason?: string
  token_type?: string
}

export interface SecretScanningScanHistory {
  backfill_scans?: any[]
  custom_pattern_backfill_scans?: any[]
  incremental_scans?: any[]
  pattern_update_scans?: any[]
}

export interface SecretScanningScanHistoryListMatch {
  owner: string
  repo: string
}

export interface SecurityAdvisory {
  id?: string
}

export interface SecurityAdvisoryCreateData {
  id: string
  owner: string
  repo: string

  // Selects a custom action instead of the plain create:
  //   'fork'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SelectedAction {
  github_owned_allowed?: boolean
  patterns_allowed?: any[]
  verified_allowed?: boolean
}

export interface SelectedActionListMatch {
  org_id: string
}

export interface SelfHostedRunner {
  enabled_repositories: string
  selected_repositories_url?: string
}

export interface SelfHostedRunnerLoadMatch {
  org_id: string
}

export interface ShortBlob {
  content: string
  encoding?: string
}

export interface ShortBlobCreateData {
  owner: string
  repo: string
  content: string
  encoding?: string
}

export interface ShortBranch {
  commit: Record<string, any>
  name: string
  protected: boolean
  protection?: Record<string, any>
  protection_url?: string
}

export interface ShortBranchListMatch {
  owner: string
  repo: string
  page?: number
  per_page?: number
  protected?: boolean
}

export interface SimpleClassroom {
}

export interface SimpleClassroomAssignment {
  accepted: number
  classroom: Record<string, any>
  deadline: string
  editor: string
  feedback_pull_requests_enabled: boolean
  id: number
  invitations_enabled: boolean
  invite_link: string
  language: string
  max_members?: number
  max_teams?: number
  passing: number
  public_repo: boolean
  slug: string
  students_are_repo_admins: boolean
  submitted: number
  title: string
  type: string
}

export interface SimpleClassroomAssignmentListMatch {
  classroom_id: number
  page?: number
  per_page?: number
}

export interface SocialAccount {
  account_urls: any[]
  provider: string
  url: string
}

export interface SocialAccountListMatch {
  page?: number
  per_page?: number
}

export interface SocialAccountCreateData {
  account_urls: any[]
  provider: string
  url: string
}

export interface SshSigningKey {
  created_at: string
  id: number
  key: string
  title: string
}

export interface SshSigningKeyLoadMatch {
  id: number
}

export interface SshSigningKeyListMatch {
  page?: number
  per_page?: number
}

export interface SshSigningKeyCreateData {
  created_at: string
  id: number
  key: string
  title: string
}

export interface Status {
  avatar_url: string
  context?: string
  created_at: string
  creator: Record<string, any>
  description?: string
  id: number
  node_id: string
  state: string
  target_url?: string
  updated_at: string
  url: string
}

export interface StatusListMatch {
  owner: string
  ref: string
  repo: string
  page?: number
  per_page?: number
}

export interface StatusCreateData {
  id: string
  owner: string
  repo: string
  avatar_url: string
  context?: string
  created_at: string
  creator: Record<string, any>
  description?: string
  node_id: string
  state: string
  target_url?: string
  updated_at: string
  url: string
}

export interface StatusCheckPolicy {
  app_id: number
  checks: any[]
  context: string
  contexts: any[]
  contexts_url: string
  strict: boolean
  url: string
}

export interface StatusCheckPolicyListMatch {
  branch_id: string
  owner: string
  repo: string
}

export interface StatusCheckPolicyUpdateData {
  branch_id: string
  owner: string
  repo: string
  app_id?: number
  checks?: any[]
  context?: string
  contexts?: any[]
  contexts_url?: string
  strict?: boolean
  url?: string
}

export interface Subscriber {
  avatar_url: string
  email?: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  name?: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_at?: string
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
  user_view_type?: string
}

export interface SubscriberListMatch {
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface Tag {
  commit: Record<string, any>
  name: string
  node_id: string
  tarball_url: string
  zipball_url: string
}

export interface TagListMatch {
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface TagProtection {
  created_at?: string
  enabled?: boolean
  id?: number
  pattern: string
  updated_at?: string
}

export interface TagProtectionListMatch {
  owner: string
  repo: string
}

export interface TagProtectionCreateData {
  owner: string
  repo: string
  created_at?: string
  enabled?: boolean
  id?: number
  pattern: string
  updated_at?: string
}

export interface Team {
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  archive_url: string
  archived: boolean
  assignees_url: string
  assignment?: string
  author: Record<string, any>
  avatar_url: string
  blobs_url: string
  body: string
  body_html: string
  body_version: string
  branches_url: string
  clone_url: string
  code_of_conduct: Record<string, any>
  collaborators_url: string
  columns_url: string
  comments_count: number
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
  creator: Record<string, any>
  custom_properties?: Record<string, any>
  default_branch: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  disabled: boolean
  discussion_url: string
  downloads_url: string
  email?: string
  events_url: string
  failed_at?: string
  failed_reason?: string
  followers_url: string
  following_url: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  gists_url: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  gravatar_id: string
  has_discussions?: boolean
  has_downloads: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url: string
  id: number
  invitation_source?: string
  invitation_teams_url: string
  inviter: Record<string, any>
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: string
  languages_url: string
  last_edited_at: string
  ldap_dn?: string
  license: Record<string, any>
  login: string
  maintainers?: any[]
  master_branch?: string
  members_count: number
  members_url: string
  merges_url: string
  milestones_url: string
  mirror_url: string
  name: string
  network_count?: number
  node_id: string
  notification_setting?: string
  notifications_url: string
  number: number
  open_issues: number
  open_issues_count: number
  organization: Record<string, any>
  organization_permission?: string
  organizations_url: string
  owner: Record<string, any>
  owner_url: string
  parent: Record<string, any>
  parent_team_id?: number
  permission: string
  permissions: Record<string, any>
  pinned: boolean
  privacy?: string
  private: boolean
  pulls_url: string
  pushed_at: string
  reactions: Record<string, any>
  received_events_url: string
  releases_url: string
  repo_names?: any[]
  repos_count: number
  repos_url: string
  repositories_url: string
  role: string
  role_name?: string
  security_and_analysis?: Record<string, any>
  site_admin: boolean
  size: number
  slug: string
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  starred_at?: string
  starred_url: string
  state: string
  statuses_url: string
  subscribers_count?: number
  subscribers_url: string
  subscription_url: string
  subscriptions_url: string
  svn_url: string
  tags_url: string
  team_count: number
  team_url: string
  teams_url: string
  temp_clone_token?: string
  title: string
  topics?: any[]
  trees_url: string
  type: string
  updated_at: string
  url: string
  user_view_type?: string
  visibility?: string
  watchers: number
  watchers_count: number
  web_commit_signoff_required?: boolean
}

export interface TeamLoadMatch {
  id: number
}

export interface TeamListMatch {
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'discussion' | 'discussion' | 'invitation' | 'invitation' | 'member' | 'member' | 'project' | 'project' | 'repo' | 'repo'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TeamCreateData {
  org_id: string
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  archive_url: string
  archived: boolean
  assignees_url: string
  assignment?: string
  author: Record<string, any>
  avatar_url: string
  blobs_url: string
  body: string
  body_html: string
  body_version: string
  branches_url: string
  clone_url: string
  code_of_conduct: Record<string, any>
  collaborators_url: string
  columns_url: string
  comments_count: number
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
  creator: Record<string, any>
  custom_properties?: Record<string, any>
  default_branch: string
  delete_branch_on_merge?: boolean
  deployments_url: string
  description: string
  disabled: boolean
  discussion_url: string
  downloads_url: string
  email?: string
  events_url: string
  failed_at?: string
  failed_reason?: string
  followers_url: string
  following_url: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  gists_url: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  gravatar_id: string
  has_discussions?: boolean
  has_downloads: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url: string
  id: number
  invitation_source?: string
  invitation_teams_url: string
  inviter: Record<string, any>
  is_template?: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: string
  languages_url: string
  last_edited_at: string
  ldap_dn?: string
  license: Record<string, any>
  login: string
  maintainers?: any[]
  master_branch?: string
  members_count: number
  members_url: string
  merges_url: string
  milestones_url: string
  mirror_url: string
  name: string
  network_count?: number
  node_id: string
  notification_setting?: string
  notifications_url: string
  number: number
  open_issues: number
  open_issues_count: number
  organization: Record<string, any>
  organization_permission?: string
  organizations_url: string
  owner: Record<string, any>
  owner_url: string
  parent: Record<string, any>
  parent_team_id?: number
  permission: string
  permissions: Record<string, any>
  pinned: boolean
  privacy?: string
  private: boolean
  pulls_url: string
  pushed_at: string
  reactions: Record<string, any>
  received_events_url: string
  releases_url: string
  repo_names?: any[]
  repos_count: number
  repos_url: string
  repositories_url: string
  role: string
  role_name?: string
  security_and_analysis?: Record<string, any>
  site_admin: boolean
  size: number
  slug: string
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  starred_at?: string
  starred_url: string
  state: string
  statuses_url: string
  subscribers_count?: number
  subscribers_url: string
  subscription_url: string
  subscriptions_url: string
  svn_url: string
  tags_url: string
  team_count: number
  team_url: string
  teams_url: string
  temp_clone_token?: string
  title: string
  topics?: any[]
  trees_url: string
  type: string
  updated_at: string
  url: string
  user_view_type?: string
  visibility?: string
  watchers: number
  watchers_count: number
  web_commit_signoff_required?: boolean

  // Selects a custom action instead of the plain create:
  //   'discussion' | 'discussion'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TeamUpdateData {
  id: number
  project_id: number
  allow_auto_merge?: boolean
  allow_forking?: boolean
  allow_merge_commit?: boolean
  allow_rebase_merge?: boolean
  allow_squash_merge?: boolean
  archive_url?: string
  archived?: boolean
  assignees_url?: string
  assignment?: string
  author?: Record<string, any>
  avatar_url?: string
  blobs_url?: string
  body?: string
  body_html?: string
  body_version?: string
  branches_url?: string
  clone_url?: string
  code_of_conduct?: Record<string, any>
  collaborators_url?: string
  columns_url?: string
  comments_count?: number
  comments_url?: string
  commits_url?: string
  compare_url?: string
  contents_url?: string
  contributors_url?: string
  created_at?: string
  creator?: Record<string, any>
  custom_properties?: Record<string, any>
  default_branch?: string
  delete_branch_on_merge?: boolean
  deployments_url?: string
  description?: string
  disabled?: boolean
  discussion_url?: string
  downloads_url?: string
  email?: string
  events_url?: string
  failed_at?: string
  failed_reason?: string
  followers_url?: string
  following_url?: string
  fork?: boolean
  forks?: number
  forks_count?: number
  forks_url?: string
  full_name?: string
  gists_url?: string
  git_commits_url?: string
  git_refs_url?: string
  git_tags_url?: string
  git_url?: string
  gravatar_id?: string
  has_discussions?: boolean
  has_downloads?: boolean
  has_issues?: boolean
  has_pages?: boolean
  has_projects?: boolean
  has_wiki?: boolean
  homepage?: string
  hooks_url?: string
  html_url?: string
  invitation_source?: string
  invitation_teams_url?: string
  inviter?: Record<string, any>
  is_template?: boolean
  issue_comment_url?: string
  issue_events_url?: string
  issues_url?: string
  keys_url?: string
  labels_url?: string
  language?: string
  languages_url?: string
  last_edited_at?: string
  ldap_dn?: string
  license?: Record<string, any>
  login?: string
  maintainers?: any[]
  master_branch?: string
  members_count?: number
  members_url?: string
  merges_url?: string
  milestones_url?: string
  mirror_url?: string
  name?: string
  network_count?: number
  node_id?: string
  notification_setting?: string
  notifications_url?: string
  number?: number
  open_issues?: number
  open_issues_count?: number
  organization?: Record<string, any>
  organization_permission?: string
  organizations_url?: string
  owner?: Record<string, any>
  owner_url?: string
  parent?: Record<string, any>
  parent_team_id?: number
  permission?: string
  permissions?: Record<string, any>
  pinned?: boolean
  privacy?: string
  private?: boolean
  pulls_url?: string
  pushed_at?: string
  reactions?: Record<string, any>
  received_events_url?: string
  releases_url?: string
  repo_names?: any[]
  repos_count?: number
  repos_url?: string
  repositories_url?: string
  role?: string
  role_name?: string
  security_and_analysis?: Record<string, any>
  site_admin?: boolean
  size?: number
  slug?: string
  ssh_url?: string
  stargazers_count?: number
  stargazers_url?: string
  starred_at?: string
  starred_url?: string
  state?: string
  statuses_url?: string
  subscribers_count?: number
  subscribers_url?: string
  subscription_url?: string
  subscriptions_url?: string
  svn_url?: string
  tags_url?: string
  team_count?: number
  team_url?: string
  teams_url?: string
  temp_clone_token?: string
  title?: string
  topics?: any[]
  trees_url?: string
  type?: string
  updated_at?: string
  url?: string
  user_view_type?: string
  visibility?: string
  watchers?: number
  watchers_count?: number
  web_commit_signoff_required?: boolean
}

export interface TeamRemoveMatch {
  id: number
}

export interface TeamSimple {
  description: string
  html_url: string
  id: number
  ldap_dn?: string
  members_url: string
  name: string
  node_id: string
  notification_setting?: string
  permission: string
  privacy?: string
  repositories_url: string
  slug: string
  url: string
}

export interface TeamSimpleListMatch {
  org_id: string
}

export interface Thread {
  id: string
  last_read_at: string
  reason: string
  repository: Record<string, any>
  subject: Record<string, any>
  subscription_url: string
  unread: boolean
  updated_at: string
  url: string
}

export interface ThreadLoadMatch {
  id: number
}

export interface ThreadListMatch {
  all?: boolean
  before?: string
  page?: number
  participating?: boolean
  per_page?: number
  since?: string
}

export interface ThreadRemoveMatch {
  id: number

  // Selects a custom action instead of the plain remove:
  //   'subscription'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ThreadSubscription {
  created_at: string
  id?: string
  ignored: boolean
  reason: string
  repository_url?: string
  subscribed: boolean
  thread_url?: string
  url: string
}

export interface ThreadSubscriptionLoadMatch {
  id: number
}

export interface ThreadSubscriptionUpdateData {
  id: number
  created_at?: string
  ignored?: boolean
  reason?: string
  repository_url?: string
  subscribed?: boolean
  thread_url?: string
  url?: string
}

export interface Topic {
  names: any[]
}

export interface TopicListMatch {
  owner: string
  repo: string
  page?: number
  per_page?: number
}

export interface TopicUpdateData {
  owner: string
  repo: string
  names?: any[]
}

export interface User {
  assignment?: string
  attestations_subject_digests?: Record<string, any>
  avatar_url?: string
  bio?: string
  blog?: string
  collaborators?: number
  company?: string
  created_at?: string
  disk_usage?: number
  email?: string
  events_url?: string
  followers?: number
  followers_url?: string
  following?: number
  following_url?: string
  gists_url?: string
  gravatar_id?: string
  hireable?: boolean
  html_url?: string
  id?: number
  inherited_from?: any[]
  location?: string
  login?: string
  name?: string
  node_id?: string
  organizations_url?: string
  owned_private_repos?: number
  page_info?: Record<string, any>
  plan?: Record<string, any>
  predicate_type?: string
  private_gists?: number
  private_repos: number
  public_gists?: number
  public_repos?: number
  received_events_url?: string
  repos_url?: string
  site_admin?: boolean
  space: number
  starred_at?: string
  starred_url?: string
  subject_digests: any[]
  subscriptions_url?: string
  total_private_repos?: number
  twitter_username?: string
  two_factor_authentication?: boolean
  type?: string
  updated_at?: string
  url?: string
  user_view_type?: string
  users: any[]
}

export interface UserLoadMatch {
  id: number
}

export interface UserListMatch {
  per_page?: number
  since?: number
}

export interface UserCreateData {
  branch_id: string
  owner: string
  repo: string
  assignment?: string
  attestations_subject_digests?: Record<string, any>
  avatar_url?: string
  bio?: string
  blog?: string
  collaborators?: number
  company?: string
  created_at?: string
  disk_usage?: number
  email?: string
  events_url?: string
  followers?: number
  followers_url?: string
  following?: number
  following_url?: string
  gists_url?: string
  gravatar_id?: string
  hireable?: boolean
  html_url?: string
  id?: number
  inherited_from?: any[]
  location?: string
  login?: string
  name?: string
  node_id?: string
  organizations_url?: string
  owned_private_repos?: number
  page_info?: Record<string, any>
  plan?: Record<string, any>
  predicate_type?: string
  private_gists?: number
  private_repos: number
  public_gists?: number
  public_repos?: number
  received_events_url?: string
  repos_url?: string
  site_admin?: boolean
  space: number
  starred_at?: string
  starred_url?: string
  subject_digests: any[]
  subscriptions_url?: string
  total_private_repos?: number
  twitter_username?: string
  two_factor_authentication?: boolean
  type?: string
  updated_at?: string
  url?: string
  user_view_type?: string
  users: any[]

  // Selects a custom action instead of the plain create:
  //   'attestation_bulk_list' | 'attestation_delete_request'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserUpdateData {
  username: string
  assignment?: string
  attestations_subject_digests?: Record<string, any>
  avatar_url?: string
  bio?: string
  blog?: string
  collaborators?: number
  company?: string
  created_at?: string
  disk_usage?: number
  email?: string
  events_url?: string
  followers?: number
  followers_url?: string
  following?: number
  following_url?: string
  gists_url?: string
  gravatar_id?: string
  hireable?: boolean
  html_url?: string
  id?: number
  inherited_from?: any[]
  location?: string
  login?: string
  name?: string
  node_id?: string
  organizations_url?: string
  owned_private_repos?: number
  page_info?: Record<string, any>
  plan?: Record<string, any>
  predicate_type?: string
  private_gists?: number
  private_repos?: number
  public_gists?: number
  public_repos?: number
  received_events_url?: string
  repos_url?: string
  site_admin?: boolean
  space?: number
  starred_at?: string
  starred_url?: string
  subject_digests?: any[]
  subscriptions_url?: string
  total_private_repos?: number
  twitter_username?: string
  two_factor_authentication?: boolean
  type?: string
  updated_at?: string
  url?: string
  user_view_type?: string
  users?: any[]
}

export interface UserRemoveMatch {
  gpg_key_id: number

  // Selects a custom action instead of the plain remove:
  //   'email' | 'social_account'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserMarketplacePurchase {
  account: Record<string, any>
  billing_cycle: string
  free_trial_ends_on: string
  next_billing_date: string
  on_free_trial: boolean
  plan: Record<string, any>
  unit_count: number
  updated_at: string
}

export interface UserMarketplacePurchaseListMatch {
  page?: number
  per_page?: number
}

export interface View {
  count: number
  timestamp: string
  uniques: number
}

export interface ViewListMatch {
  owner: string
  repo: string
  per?: string
}

export interface WebhookConfig {
  content_type?: string
  insecure_ssl?: string
  secret?: string
  url?: string
}

export interface WebhookConfigLoadMatch {
  content_type?: string
  insecure_ssl?: string
  secret?: string
  url?: string
}

export interface WebhookConfigUpdateData {
  content_type?: string
  insecure_ssl?: string
  secret?: string
  url?: string
}

export interface Workflow {
  badge_url: string
  created_at: string
  deleted_at?: string
  html_url: string
  id: number
  name: string
  node_id: string
  path: string
  state: string
  updated_at: string
  url: string
}

export interface WorkflowLoadMatch {
  id: string
  owner: string
  repo: string
}

export interface WorkflowUpdateData {
  id: string
  owner: string
  repo: string
  badge_url?: string
  created_at?: string
  deleted_at?: string
  html_url?: string
  name?: string
  node_id?: string
  path?: string
  state?: string
  updated_at?: string
  url?: string

  // Selects a custom action instead of the plain update:
  //   'disable' | 'enable'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkflowRun {
  actor: Record<string, any>
  artifacts_url: string
  cancel_url: string
  check_suite_id?: number
  check_suite_node_id?: string
  check_suite_url: string
  conclusion: string
  created_at: string
  display_title: string
  event: string
  head_branch: string
  head_commit: Record<string, any>
  head_repository: Record<string, any>
  head_repository_id?: number
  head_sha: string
  html_url: string
  id: number
  jobs_url: string
  logs_url: string
  name?: string
  node_id: string
  path: string
  previous_attempt_url?: string
  pull_requests: any[]
  referenced_workflows?: any[]
  repository: Record<string, any>
  rerun_url: string
  run_attempt?: number
  run_number: number
  run_started_at?: string
  status: string
  triggering_actor: Record<string, any>
  updated_at: string
  url: string
  workflow_id: number
  workflow_url: string
}

export interface WorkflowRunLoadMatch {
  attempt_number?: number
  owner: string
  repo: string
  run_id?: number
  exclude_pull_request?: boolean
  id?: number
}

export interface WorkflowRunCreateData {
  owner: string
  repo: string
  run_id: number
  actor: Record<string, any>
  artifacts_url: string
  cancel_url: string
  check_suite_id?: number
  check_suite_node_id?: string
  check_suite_url: string
  conclusion: string
  created_at: string
  display_title: string
  event: string
  head_branch: string
  head_commit: Record<string, any>
  head_repository: Record<string, any>
  head_repository_id?: number
  head_sha: string
  html_url: string
  id: number
  jobs_url: string
  logs_url: string
  name?: string
  node_id: string
  path: string
  previous_attempt_url?: string
  pull_requests: any[]
  referenced_workflows?: any[]
  repository: Record<string, any>
  rerun_url: string
  run_attempt?: number
  run_number: number
  run_started_at?: string
  status: string
  triggering_actor: Record<string, any>
  updated_at: string
  url: string
  workflow_id: number
  workflow_url: string

  // Selects a custom action instead of the plain create:
  //   'cancel' | 'deployment_protection_rule' | 'force_cancel'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkflowRunUsage {
  MACOS: Record<string, any>
  UBUNTU: Record<string, any>
  WINDOWS: Record<string, any>
}

export interface WorkflowRunUsageLoadMatch {
  owner: string
  repo: string
  run_id: number
}

export interface WorkflowUsage {
  MACOS?: Record<string, any>
  UBUNTU?: Record<string, any>
  WINDOWS?: Record<string, any>
  id?: string
}

export interface WorkflowUsageLoadMatch {
  id: string
  owner: string
  repo: string

  // Selects a custom action instead of the plain load:
  //   'timing'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

