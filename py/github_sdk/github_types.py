# Typed models for the Github SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ActionRequired(TypedDict):
    access_level: str
    active_caches_count: int
    active_caches_size_in_bytes: int
    actor: dict
    allows_public_repositories: bool
    approval_policy: str
    archive_download_url: str
    archive_url: str
    artifacts_url: str
    assignees_url: str
    badge_url: str
    blobs_url: str
    branches_url: str
    busy: bool
    cancel_url: str
    check_run_url: str
    check_suite_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    completed_at: str
    conclusion: str
    contents_url: str
    contributors_url: str
    cpu_cores: int
    created_at: str
    days: int
    default: bool
    deployments_url: str
    description: str
    display_name: str
    display_title: str
    downloads_url: str
    enabled: bool
    enabled_repositories: str
    event: str
    events_url: str
    expired: bool
    expires_at: str
    fork: bool
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    head_branch: str
    head_commit: dict
    head_repository: dict
    head_sha: str
    hooks_url: str
    html_url: str
    id: int
    image_details: dict
    inherited: bool
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    jobs_url: str
    keys_url: str
    labels: list
    labels_url: str
    languages_url: str
    logs_url: str
    machine_size_details: dict
    memory_gb: int
    merges_url: str
    milestones_url: str
    name: str
    node_id: str
    notifications_url: str
    os: str
    owner: dict
    path: str
    platform: str
    platforms: list
    private: bool
    public_ip_enabled: bool
    pull_requests: list
    pulls_url: str
    ref: str
    releases_url: str
    repository: dict
    rerun_url: str
    run_id: int
    run_number: int
    run_url: str
    run_workflows_from_fork_pull_requests: bool
    runner_group_id: int
    runner_group_name: str
    runner_id: int
    runner_name: str
    runners: list
    runners_url: str
    selected_repository_ids: list
    size_gb: int
    size_in_bytes: int
    source: str
    stargazers_url: str
    started_at: str
    state: str
    status: str
    statuses_url: str
    storage_gb: int
    subscribers_url: str
    subscription_url: str
    tags_url: str
    teams_url: str
    total_count: int
    trees_url: str
    triggering_actor: dict
    updated_at: str
    url: str
    workflow_id: int
    workflow_name: str
    workflow_url: str


class Action(ActionRequired, total=False):
    MACOS: int
    UBUNTU: int
    WINDOWS: int
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    allowed_actions: str
    anonymous_access_enabled: bool
    archived: bool
    can_approve_pull_request_reviews: bool
    check_suite_id: int
    check_suite_node_id: str
    clone_url: str
    code_search_index_status: dict
    custom_properties: dict
    default_branch: str
    default_workflow_permissions: str
    delete_branch_on_merge: bool
    deleted_at: str
    digest: str
    disabled: bool
    ephemeral: bool
    forks: int
    forks_count: int
    git_url: str
    github_owned_allowed: bool
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    head_repository_id: int
    homepage: str
    hosted_runners_url: str
    inherited_allows_public_repositories: bool
    inputs: dict
    is_template: bool
    language: str
    last_active_on: str
    license: dict
    macos_12_core: int
    master_branch: str
    maximum_runners: int
    merge_commit_message: str
    merge_commit_title: str
    mirror_url: str
    network_configuration_id: str
    network_count: int
    open_issues: int
    open_issues_count: int
    patterns_allowed: list
    permissions: dict
    previous_attempt_url: str
    public_ips: list
    pushed_at: str
    referenced_workflows: list
    require_approval_for_fork_pr_workflows: bool
    restricted_to_workflows: bool
    role_name: str
    run_attempt: int
    run_started_at: str
    security_and_analysis: dict
    selected_repositories_url: str
    selected_workflows: list
    send_secrets_and_variables: bool
    send_write_tokens_to_workflows: bool
    sha_pinning_required: bool
    size: int
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    ssh_url: str
    stargazers_count: int
    starred_at: str
    steps: list
    subscribers_count: int
    svn_url: str
    temp_clone_token: str
    topics: list
    total: int
    type: str
    ubuntu_16_core: int
    ubuntu_32_core: int
    ubuntu_4_core: int
    ubuntu_64_core: int
    ubuntu_8_core: int
    use_squash_pr_title_as_default: bool
    value: str
    verified_allowed: bool
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool
    windows_16_core: int
    windows_32_core: int
    windows_4_core: int
    windows_64_core: int
    windows_8_core: int
    work_folder: str
    workflow_restrictions_read_only: bool
    workflow_run: dict


class ActionLoadMatch(TypedDict):
    archive_format: str
    artifact_id: int
    owner: str
    repo: str


class ActionListMatchRequired(TypedDict):
    org_id: str


class ActionListMatch(ActionListMatchRequired, total=False):
    page: int
    per_page: int


class ActionCreateDataRequired(TypedDict):
    org_id: str
    access_level: str
    active_caches_count: int
    active_caches_size_in_bytes: int
    actor: dict
    allows_public_repositories: bool
    approval_policy: str
    archive_download_url: str
    archive_url: str
    artifacts_url: str
    assignees_url: str
    badge_url: str
    blobs_url: str
    branches_url: str
    busy: bool
    cancel_url: str
    check_run_url: str
    check_suite_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    completed_at: str
    conclusion: str
    contents_url: str
    contributors_url: str
    cpu_cores: int
    created_at: str
    days: int
    default: bool
    deployments_url: str
    description: str
    display_name: str
    display_title: str
    downloads_url: str
    enabled: bool
    enabled_repositories: str
    event: str
    events_url: str
    expired: bool
    expires_at: str
    fork: bool
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    head_branch: str
    head_commit: dict
    head_repository: dict
    head_sha: str
    hooks_url: str
    html_url: str
    id: int
    image_details: dict
    inherited: bool
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    jobs_url: str
    keys_url: str
    labels: list
    labels_url: str
    languages_url: str
    logs_url: str
    machine_size_details: dict
    memory_gb: int
    merges_url: str
    milestones_url: str
    name: str
    node_id: str
    notifications_url: str
    os: str
    owner: dict
    path: str
    platform: str
    platforms: list
    private: bool
    public_ip_enabled: bool
    pull_requests: list
    pulls_url: str
    ref: str
    releases_url: str
    repository: dict
    rerun_url: str
    run_id: int
    run_number: int
    run_url: str
    run_workflows_from_fork_pull_requests: bool
    runner_group_id: int
    runner_group_name: str
    runner_id: int
    runner_name: str
    runners: list
    runners_url: str
    selected_repository_ids: list
    size_gb: int
    size_in_bytes: int
    source: str
    stargazers_url: str
    started_at: str
    state: str
    status: str
    statuses_url: str
    storage_gb: int
    subscribers_url: str
    subscription_url: str
    tags_url: str
    teams_url: str
    total_count: int
    trees_url: str
    triggering_actor: dict
    updated_at: str
    url: str
    workflow_id: int
    workflow_name: str
    workflow_url: str


class ActionCreateData(ActionCreateDataRequired, total=False):
    MACOS: int
    UBUNTU: int
    WINDOWS: int
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    allowed_actions: str
    anonymous_access_enabled: bool
    archived: bool
    can_approve_pull_request_reviews: bool
    check_suite_id: int
    check_suite_node_id: str
    clone_url: str
    code_search_index_status: dict
    custom_properties: dict
    default_branch: str
    default_workflow_permissions: str
    delete_branch_on_merge: bool
    deleted_at: str
    digest: str
    disabled: bool
    ephemeral: bool
    forks: int
    forks_count: int
    git_url: str
    github_owned_allowed: bool
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    head_repository_id: int
    homepage: str
    hosted_runners_url: str
    inherited_allows_public_repositories: bool
    inputs: dict
    is_template: bool
    language: str
    last_active_on: str
    license: dict
    macos_12_core: int
    master_branch: str
    maximum_runners: int
    merge_commit_message: str
    merge_commit_title: str
    mirror_url: str
    network_configuration_id: str
    network_count: int
    open_issues: int
    open_issues_count: int
    patterns_allowed: list
    permissions: dict
    previous_attempt_url: str
    public_ips: list
    pushed_at: str
    referenced_workflows: list
    require_approval_for_fork_pr_workflows: bool
    restricted_to_workflows: bool
    role_name: str
    run_attempt: int
    run_started_at: str
    security_and_analysis: dict
    selected_repositories_url: str
    selected_workflows: list
    send_secrets_and_variables: bool
    send_write_tokens_to_workflows: bool
    sha_pinning_required: bool
    size: int
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    ssh_url: str
    stargazers_count: int
    starred_at: str
    steps: list
    subscribers_count: int
    svn_url: str
    temp_clone_token: str
    topics: list
    total: int
    type: str
    ubuntu_16_core: int
    ubuntu_32_core: int
    ubuntu_4_core: int
    ubuntu_64_core: int
    ubuntu_8_core: int
    use_squash_pr_title_as_default: bool
    value: str
    verified_allowed: bool
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool
    windows_16_core: int
    windows_32_core: int
    windows_4_core: int
    windows_64_core: int
    windows_8_core: int
    work_folder: str
    workflow_restrictions_read_only: bool
    workflow_run: dict


class ActionUpdateDataRequired(TypedDict):
    org_id: str
    repository_id: int


class ActionUpdateData(ActionUpdateDataRequired, total=False):
    MACOS: int
    UBUNTU: int
    WINDOWS: int
    access_level: str
    active_caches_count: int
    active_caches_size_in_bytes: int
    actor: dict
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    allowed_actions: str
    allows_public_repositories: bool
    anonymous_access_enabled: bool
    approval_policy: str
    archive_download_url: str
    archive_url: str
    archived: bool
    artifacts_url: str
    assignees_url: str
    badge_url: str
    blobs_url: str
    branches_url: str
    busy: bool
    can_approve_pull_request_reviews: bool
    cancel_url: str
    check_run_url: str
    check_suite_id: int
    check_suite_node_id: str
    check_suite_url: str
    clone_url: str
    code_of_conduct: dict
    code_search_index_status: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    completed_at: str
    conclusion: str
    contents_url: str
    contributors_url: str
    cpu_cores: int
    created_at: str
    custom_properties: dict
    days: int
    default: bool
    default_branch: str
    default_workflow_permissions: str
    delete_branch_on_merge: bool
    deleted_at: str
    deployments_url: str
    description: str
    digest: str
    disabled: bool
    display_name: str
    display_title: str
    downloads_url: str
    enabled: bool
    enabled_repositories: str
    ephemeral: bool
    event: str
    events_url: str
    expired: bool
    expires_at: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    github_owned_allowed: bool
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    head_branch: str
    head_commit: dict
    head_repository: dict
    head_repository_id: int
    head_sha: str
    homepage: str
    hooks_url: str
    hosted_runners_url: str
    html_url: str
    id: int
    image_details: dict
    inherited: bool
    inherited_allows_public_repositories: bool
    inputs: dict
    is_template: bool
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    jobs_url: str
    keys_url: str
    labels: list
    labels_url: str
    language: str
    languages_url: str
    last_active_on: str
    license: dict
    logs_url: str
    machine_size_details: dict
    macos_12_core: int
    master_branch: str
    maximum_runners: int
    memory_gb: int
    merge_commit_message: str
    merge_commit_title: str
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    network_configuration_id: str
    network_count: int
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    os: str
    owner: dict
    path: str
    patterns_allowed: list
    permissions: dict
    platform: str
    platforms: list
    previous_attempt_url: str
    private: bool
    public_ip_enabled: bool
    public_ips: list
    pull_requests: list
    pulls_url: str
    pushed_at: str
    ref: str
    referenced_workflows: list
    releases_url: str
    repository: dict
    require_approval_for_fork_pr_workflows: bool
    rerun_url: str
    restricted_to_workflows: bool
    role_name: str
    run_attempt: int
    run_id: int
    run_number: int
    run_started_at: str
    run_url: str
    run_workflows_from_fork_pull_requests: bool
    runner_group_id: int
    runner_group_name: str
    runner_id: int
    runner_name: str
    runners: list
    runners_url: str
    security_and_analysis: dict
    selected_repositories_url: str
    selected_repository_ids: list
    selected_workflows: list
    send_secrets_and_variables: bool
    send_write_tokens_to_workflows: bool
    sha_pinning_required: bool
    size: int
    size_gb: int
    size_in_bytes: int
    source: str
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    starred_at: str
    started_at: str
    state: str
    status: str
    statuses_url: str
    steps: list
    storage_gb: int
    subscribers_count: int
    subscribers_url: str
    subscription_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    temp_clone_token: str
    topics: list
    total: int
    total_count: int
    trees_url: str
    triggering_actor: dict
    type: str
    ubuntu_16_core: int
    ubuntu_32_core: int
    ubuntu_4_core: int
    ubuntu_64_core: int
    ubuntu_8_core: int
    updated_at: str
    url: str
    use_squash_pr_title_as_default: bool
    value: str
    verified_allowed: bool
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool
    windows_16_core: int
    windows_32_core: int
    windows_4_core: int
    windows_64_core: int
    windows_8_core: int
    work_folder: str
    workflow_id: int
    workflow_name: str
    workflow_restrictions_read_only: bool
    workflow_run: dict
    workflow_url: str


class ActionRemoveMatch(TypedDict):
    hosted_runner_id: int
    org_id: str


class ActionsArtifactAndLogRetention(TypedDict):
    days: int
    maximum_allowed_days: int


class ActionsArtifactAndLogRetentionLoadMatch(TypedDict):
    org_id: str


class ActionsCacheList(TypedDict, total=False):
    created_at: str
    id: int
    key: str
    last_accessed_at: str
    ref: str
    size_in_bytes: int
    version: str


class ActionsCacheListListMatchRequired(TypedDict):
    owner: str
    repo: str


class ActionsCacheListListMatch(ActionsCacheListListMatchRequired, total=False):
    direction: str
    key: str
    page: int
    per_page: int
    ref: str
    sort: str


class ActionsCacheListRemoveMatchRequired(TypedDict):
    owner: str
    repo: str
    key: str


class ActionsCacheListRemoveMatch(ActionsCacheListRemoveMatchRequired, total=False):
    ref: str


class ActionsCacheUsageByRepository(TypedDict):
    active_caches_count: int
    active_caches_size_in_bytes: int
    full_name: str


class ActionsCacheUsageByRepositoryLoadMatch(TypedDict):
    owner: str
    repo: str


class ActionsCacheUsageOrgEnterprise(TypedDict):
    total_active_caches_count: int
    total_active_caches_size_in_bytes: int


class ActionsCacheUsageOrgEnterpriseLoadMatch(TypedDict):
    org_id: str


class ActionsForkPrContributorApproval(TypedDict):
    approval_policy: str


class ActionsForkPrContributorApprovalLoadMatch(TypedDict):
    org_id: str


class ActionsForkPrWorkflowsPrivateRepo(TypedDict):
    require_approval_for_fork_pr_workflows: bool
    run_workflows_from_fork_pull_requests: bool
    send_secrets_and_variables: bool
    send_write_tokens_to_workflows: bool


class ActionsForkPrWorkflowsPrivateRepoLoadMatch(TypedDict):
    org_id: str


class ActionsGetDefaultWorkflowPermission(TypedDict):
    can_approve_pull_request_reviews: bool
    default_workflow_permissions: str


class ActionsGetDefaultWorkflowPermissionLoadMatch(TypedDict):
    org_id: str


class ActionsHostedRunnerRequired(TypedDict):
    id: int
    image: dict
    image_details: dict
    machine_size_details: dict
    name: str
    platform: str
    public_ip_enabled: bool
    size: str
    status: str


class ActionsHostedRunner(ActionsHostedRunnerRequired, total=False):
    enable_static_ip: bool
    last_active_on: str
    maximum_runners: int
    public_ips: list
    runner_group_id: int


class ActionsHostedRunnerLoadMatch(TypedDict):
    id: int
    org_id: str


class ActionsHostedRunnerCreateDataRequired(TypedDict):
    org_id: str
    id: int
    image: dict
    image_details: dict
    machine_size_details: dict
    name: str
    platform: str
    public_ip_enabled: bool
    size: str
    status: str


class ActionsHostedRunnerCreateData(ActionsHostedRunnerCreateDataRequired, total=False):
    enable_static_ip: bool
    last_active_on: str
    maximum_runners: int
    public_ips: list
    runner_group_id: int


class ActionsHostedRunnerUpdateDataRequired(TypedDict):
    id: int
    org_id: str


class ActionsHostedRunnerUpdateData(ActionsHostedRunnerUpdateDataRequired, total=False):
    enable_static_ip: bool
    image: dict
    image_details: dict
    last_active_on: str
    machine_size_details: dict
    maximum_runners: int
    name: str
    platform: str
    public_ip_enabled: bool
    public_ips: list
    runner_group_id: int
    size: str
    status: str


class ActionsHostedRunnerLimit(TypedDict):
    current_usage: int
    maximum: int


class ActionsHostedRunnerLimitLoadMatch(TypedDict):
    org_id: str


class ActionsOrganizationPermissionRequired(TypedDict):
    enabled_repositories: str


class ActionsOrganizationPermission(ActionsOrganizationPermissionRequired, total=False):
    allowed_actions: str
    selected_actions_url: str
    selected_repositories_url: str
    sha_pinning_required: bool


class ActionsOrganizationPermissionLoadMatch(TypedDict):
    org_id: str


class ActionsPublicKeyRequired(TypedDict):
    key: str
    key_id: str


class ActionsPublicKey(ActionsPublicKeyRequired, total=False):
    created_at: str
    id: int
    title: str
    url: str


class ActionsPublicKeyLoadMatch(TypedDict):
    org_id: str


class ActionsRepositoryPermissionRequired(TypedDict):
    enabled: bool


class ActionsRepositoryPermission(ActionsRepositoryPermissionRequired, total=False):
    allowed_actions: str
    selected_actions_url: str
    sha_pinning_required: bool


class ActionsRepositoryPermissionLoadMatch(TypedDict):
    owner: str
    repo: str


class ActionsSecretRequired(TypedDict):
    created_at: str
    name: str
    updated_at: str


class ActionsSecret(ActionsSecretRequired, total=False):
    id: str


class ActionsSecretLoadMatchRequired(TypedDict):
    id: str
    owner: str
    repo: str


class ActionsSecretLoadMatch(ActionsSecretLoadMatchRequired, total=False):
    environment_id: str


class ActionsVariableRequired(TypedDict):
    created_at: str
    name: str
    updated_at: str
    value: str


class ActionsVariable(ActionsVariableRequired, total=False):
    id: str


class ActionsVariableLoadMatchRequired(TypedDict):
    id: str
    owner: str
    repo: str


class ActionsVariableLoadMatch(ActionsVariableLoadMatchRequired, total=False):
    environment_id: str


class ActionsWorkflowAccessToRepository(TypedDict):
    access_level: str


class ActionsWorkflowAccessToRepositoryLoadMatch(TypedDict):
    owner: str
    repo: str


class ActivityRequired(TypedDict):
    activity_type: str
    actor: dict
    after: str
    before: str
    ref: str
    timestamp: str


class Activity(ActivityRequired, total=False):
    archive_url: str
    assignees_url: str
    avatar_url: str
    blobs_url: str
    branches_url: str
    clone_url: str
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    deployments_url: str
    description: str
    downloads_url: str
    events_url: str
    followers_url: str
    following_url: str
    fork: bool
    forks_url: str
    full_name: str
    gists_url: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    github_id: int
    gravatar_id: str
    homepage: str
    hooks_url: str
    html_url: str
    id: str
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: dict
    languages_url: str
    last_read_at: str
    login: str
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    node_id: str
    notifications_url: str
    organizations_url: str
    owner: dict
    private: bool
    pulls_url: str
    read: bool
    received_events_url: str
    releases_url: str
    repos_url: str
    site_admin: bool
    ssh_url: str
    stargazers_url: str
    starred_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    subscriptions_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    type: str
    url: str


class ActivityLoadMatch(TypedDict):
    owner: str
    repo: str


class ActivityListMatchRequired(TypedDict):
    owner: str
    repo: str


class ActivityListMatch(ActivityListMatchRequired, total=False):
    activity_type: str
    actor: str
    after: str
    before: str
    direction: str
    per_page: int
    ref: str
    time_period: str


class ActivityUpdateDataRequired(TypedDict):
    owner: str
    repo: str


class ActivityUpdateData(ActivityUpdateDataRequired, total=False):
    activity_type: str
    actor: dict
    after: str
    archive_url: str
    assignees_url: str
    avatar_url: str
    before: str
    blobs_url: str
    branches_url: str
    clone_url: str
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    deployments_url: str
    description: str
    downloads_url: str
    events_url: str
    followers_url: str
    following_url: str
    fork: bool
    forks_url: str
    full_name: str
    gists_url: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    github_id: int
    gravatar_id: str
    homepage: str
    hooks_url: str
    html_url: str
    id: str
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: dict
    languages_url: str
    last_read_at: str
    login: str
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    node_id: str
    notifications_url: str
    organizations_url: str
    private: bool
    pulls_url: str
    read: bool
    received_events_url: str
    ref: str
    releases_url: str
    repos_url: str
    site_admin: bool
    ssh_url: str
    stargazers_url: str
    starred_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    subscriptions_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    timestamp: str
    trees_url: str
    type: str
    url: str


class ActivityRemoveMatch(TypedDict):
    thread_id: int


class Add(TypedDict):
    usernames: list


class AddCreateData(TypedDict):
    enterprise: str
    team_id: str
    usernames: list


class ApiInsightsRouteStat(TypedDict, total=False):
    api_route: str
    http_method: str
    last_rate_limited_timestamp: str
    last_request_timestamp: str
    rate_limited_request_count: int
    total_request_count: int


class ApiInsightsRouteStatListMatchRequired(TypedDict):
    actor_id: int
    actor_type: str
    org: str
    min_timestamp: str


class ApiInsightsRouteStatListMatch(ApiInsightsRouteStatListMatchRequired, total=False):
    api_route_substring: str
    direction: str
    max_timestamp: str
    page: int
    per_page: int
    sort: list


class ApiInsightsSubjectStat(TypedDict, total=False):
    last_rate_limited_timestamp: str
    last_request_timestamp: str
    rate_limited_request_count: int
    subject_id: int
    subject_name: str
    subject_type: str
    total_request_count: int


class ApiInsightsSubjectStatListMatchRequired(TypedDict):
    org_id: str
    min_timestamp: str


class ApiInsightsSubjectStatListMatch(ApiInsightsSubjectStatListMatchRequired, total=False):
    direction: str
    max_timestamp: str
    page: int
    per_page: int
    sort: list
    subject_name_substring: str


class ApiInsightsSummaryStat(TypedDict, total=False):
    id: str
    rate_limited_request_count: int
    total_request_count: int


class ApiInsightsSummaryStatLoadMatchRequired(TypedDict):
    min_timestamp: str


class ApiInsightsSummaryStatLoadMatch(ApiInsightsSummaryStatLoadMatchRequired, total=False):
    actor_id: int
    actor_type: str
    org: str
    max_timestamp: str
    org_id: str
    user_id: str


class ApiInsightsTimeStat(TypedDict, total=False):
    rate_limited_request_count: int
    timestamp: str
    total_request_count: int


class ApiInsightsTimeStatLoadMatchRequired(TypedDict):
    org_id: str
    user_id: str
    min_timestamp: str
    timestamp_increment: str


class ApiInsightsTimeStatLoadMatch(ApiInsightsTimeStatLoadMatchRequired, total=False):
    max_timestamp: str


class ApiInsightsTimeStatListMatchRequired(TypedDict):
    min_timestamp: str
    timestamp_increment: str


class ApiInsightsTimeStatListMatch(ApiInsightsTimeStatListMatchRequired, total=False):
    actor_id: int
    actor_type: str
    org: str
    max_timestamp: str
    org_id: str


class ApiInsightsUserStat(TypedDict, total=False):
    actor_id: int
    actor_name: str
    actor_type: str
    id: str
    integration_id: int
    last_rate_limited_timestamp: str
    last_request_timestamp: str
    oauth_application_id: int
    rate_limited_request_count: int
    total_request_count: int


class ApiInsightsUserStatLoadMatchRequired(TypedDict):
    id: str
    org_id: str
    min_timestamp: str


class ApiInsightsUserStatLoadMatch(ApiInsightsUserStatLoadMatchRequired, total=False):
    actor_name_substring: str
    direction: str
    max_timestamp: str
    page: int
    per_page: int
    sort: list


class ApiOverviewRequired(TypedDict):
    verifiable_password_authentication: bool


class ApiOverview(ApiOverviewRequired, total=False):
    actions: list
    actions_macos: list
    api: list
    codespaces: list
    copilot: list
    dependabot: list
    domains: dict
    git: list
    github_enterprise_importer: list
    hooks: list
    importer: list
    packages: list
    pages: list
    ssh_key_fingerprints: dict
    ssh_keys: list
    web: list


class ApiOverviewListMatch(TypedDict, total=False):
    actions: list
    actions_macos: list
    api: list
    codespaces: list
    copilot: list
    dependabot: list
    domains: dict
    git: list
    github_enterprise_importer: list
    hooks: list
    importer: list
    packages: list
    pages: list
    ssh_key_fingerprints: dict
    ssh_keys: list
    verifiable_password_authentication: bool
    web: list


class AppRequired(TypedDict):
    access_tokens_url: str
    account: Any
    app_id: int
    app_slug: str
    archive_url: str
    archived: bool
    assignees_url: str
    blobs_url: str
    branches_url: str
    clone_url: str
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    default_branch: str
    deployments_url: str
    disabled: bool
    downloads_url: str
    events_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    merges_url: str
    milestones_url: str
    mirror_url: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    private: bool
    pulls_url: str
    pushed_at: str
    releases_url: str
    repositories_url: str
    repository_selection: str
    single_file_name: str
    size: int
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    suspended_at: str
    suspended_by: dict
    svn_url: str
    tags_url: str
    target_id: int
    target_type: str
    teams_url: str
    trees_url: str
    url: str
    watchers: int
    watchers_count: int


class App(AppRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    anonymous_access_enabled: bool
    client_id: str
    client_secret: str
    code_search_index_status: dict
    contact_email: str
    created_at: str
    delete_branch_on_merge: bool
    description: str
    events: list
    external_url: str
    has_discussions: bool
    has_multiple_single_files: bool
    html_url: str
    id: int
    is_template: bool
    master_branch: str
    merge_commit_message: str
    merge_commit_title: str
    name: str
    node_id: str
    owner: dict
    pem: str
    permissions: dict
    single_file_paths: list
    slug: str
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    starred_at: str
    temp_clone_token: str
    topics: list
    updated_at: str
    use_squash_pr_title_as_default: bool
    visibility: str
    web_commit_signoff_required: bool
    webhook_secret: str


class AppListMatch(TypedDict, total=False):
    page: int
    per_page: int


class AppCreateDataRequired(TypedDict):
    code: str
    access_tokens_url: str
    account: Any
    app_id: int
    app_slug: str
    archive_url: str
    archived: bool
    assignees_url: str
    blobs_url: str
    branches_url: str
    clone_url: str
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    default_branch: str
    deployments_url: str
    disabled: bool
    downloads_url: str
    events_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    merges_url: str
    milestones_url: str
    mirror_url: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    private: bool
    pulls_url: str
    pushed_at: str
    releases_url: str
    repositories_url: str
    repository_selection: str
    single_file_name: str
    size: int
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    suspended_at: str
    suspended_by: dict
    svn_url: str
    tags_url: str
    target_id: int
    target_type: str
    teams_url: str
    trees_url: str
    url: str
    watchers: int
    watchers_count: int


class AppCreateData(AppCreateDataRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    anonymous_access_enabled: bool
    client_id: str
    client_secret: str
    code_search_index_status: dict
    contact_email: str
    created_at: str
    delete_branch_on_merge: bool
    description: str
    events: list
    external_url: str
    has_discussions: bool
    has_multiple_single_files: bool
    html_url: str
    id: int
    is_template: bool
    master_branch: str
    merge_commit_message: str
    merge_commit_title: str
    name: str
    node_id: str
    owner: dict
    pem: str
    permissions: dict
    single_file_paths: list
    slug: str
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    starred_at: str
    temp_clone_token: str
    topics: list
    updated_at: str
    use_squash_pr_title_as_default: bool
    visibility: str
    web_commit_signoff_required: bool
    webhook_secret: str


class AppUpdateDataRequired(TypedDict):
    installation_id: int
    repository_id: int


class AppUpdateData(AppUpdateDataRequired, total=False):
    access_tokens_url: str
    account: Any
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    anonymous_access_enabled: bool
    app_id: int
    app_slug: str
    archive_url: str
    archived: bool
    assignees_url: str
    blobs_url: str
    branches_url: str
    client_id: str
    client_secret: str
    clone_url: str
    code_search_index_status: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contact_email: str
    contents_url: str
    contributors_url: str
    created_at: str
    default_branch: str
    delete_branch_on_merge: bool
    deployments_url: str
    description: str
    disabled: bool
    downloads_url: str
    events: list
    events_url: str
    external_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_multiple_single_files: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    id: int
    is_template: bool
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    master_branch: str
    merge_commit_message: str
    merge_commit_title: str
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    owner: dict
    pem: str
    permissions: dict
    private: bool
    pulls_url: str
    pushed_at: str
    releases_url: str
    repositories_url: str
    repository_selection: str
    single_file_name: str
    single_file_paths: list
    size: int
    slug: str
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    starred_at: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    suspended_at: str
    suspended_by: dict
    svn_url: str
    tags_url: str
    target_id: int
    target_type: str
    teams_url: str
    temp_clone_token: str
    topics: list
    trees_url: str
    updated_at: str
    url: str
    use_squash_pr_title_as_default: bool
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool
    webhook_secret: str


class AppRemoveMatch(TypedDict):
    installation_id: int


class Artifact(TypedDict, total=False):
    head_branch: str
    head_repository_id: int
    head_sha: str
    id: int
    repository_id: int


class ArtifactLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class AssigneeRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class Assignee(AssigneeRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class AssigneeListMatchRequired(TypedDict):
    owner: str
    repo: str


class AssigneeListMatch(AssigneeListMatchRequired, total=False):
    page: int
    per_page: int


class AuthenticationToken(TypedDict, total=False):
    expires_at: str
    token: str


class AuthenticationTokenCreateDataRequired(TypedDict):
    org_id: str


class AuthenticationTokenCreateData(AuthenticationTokenCreateDataRequired, total=False):
    expires_at: str
    token: str


class AuthorizationRequired(TypedDict):
    access_token: str
    app: dict
    created_at: str
    expires_at: str
    fingerprint: str
    hashed_token: str
    id: int
    installation: dict
    note: str
    note_url: str
    scopes: list
    token: str
    token_last_eight: str
    updated_at: str
    url: str
    user: dict


class Authorization(AuthorizationRequired, total=False):
    permissions: dict
    repositories: list
    repository_ids: list
    target: str
    target_id: int


class AuthorizationCreateDataRequired(TypedDict):
    application_id: str
    access_token: str
    app: dict
    created_at: str
    expires_at: str
    fingerprint: str
    hashed_token: str
    id: int
    installation: dict
    note: str
    note_url: str
    scopes: list
    token: str
    token_last_eight: str
    updated_at: str
    url: str
    user: dict


class AuthorizationCreateData(AuthorizationCreateDataRequired, total=False):
    permissions: dict
    repositories: list
    repository_ids: list
    target: str
    target_id: int


class AuthorizationUpdateDataRequired(TypedDict):
    application_id: str


class AuthorizationUpdateData(AuthorizationUpdateDataRequired, total=False):
    access_token: str
    app: dict
    created_at: str
    expires_at: str
    fingerprint: str
    hashed_token: str
    id: int
    installation: dict
    note: str
    note_url: str
    permissions: dict
    repositories: list
    repository_ids: list
    scopes: list
    target: str
    target_id: int
    token: str
    token_last_eight: str
    updated_at: str
    url: str
    user: dict


class AutolinkRequired(TypedDict):
    id: int
    is_alphanumeric: bool
    key_prefix: str
    url_template: str


class Autolink(AutolinkRequired, total=False):
    updated_at: str


class AutolinkLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class AutolinkListMatch(TypedDict):
    owner: str
    repo: str


class AutolinkCreateDataRequired(TypedDict):
    owner: str
    repo: str
    id: int
    is_alphanumeric: bool
    key_prefix: str
    url_template: str


class AutolinkCreateData(AutolinkCreateDataRequired, total=False):
    updated_at: str


class BaseGist(TypedDict, total=False):
    comments: int
    comments_enabled: bool
    comments_url: str
    commits_url: str
    created_at: str
    description: str
    files: dict
    forks: list
    forks_url: str
    git_pull_url: str
    git_push_url: str
    history: list
    html_url: str
    id: str
    node_id: str
    owner: dict
    public: bool
    truncated: bool
    updated_at: str
    url: str
    user: str


class BaseGistListMatch(TypedDict, total=False):
    page: int
    per_page: int
    since: str


class BaseGistCreateDataRequired(TypedDict):
    gist_id: str


class BaseGistCreateData(BaseGistCreateDataRequired, total=False):
    comments: int
    comments_enabled: bool
    comments_url: str
    commits_url: str
    created_at: str
    description: str
    files: dict
    forks: list
    forks_url: str
    git_pull_url: str
    git_push_url: str
    history: list
    html_url: str
    id: str
    node_id: str
    owner: dict
    public: bool
    truncated: bool
    updated_at: str
    url: str
    user: str


class BillingUsageReportRequired(TypedDict):
    date: str
    discountAmount: float
    grossAmount: float
    netAmount: float
    organizationName: str
    pricePerUnit: float
    product: str
    quantity: int
    sku: str
    unitType: str


class BillingUsageReport(BillingUsageReportRequired, total=False):
    repositoryName: str


class BillingUsageReportListMatchRequired(TypedDict):
    org: str


class BillingUsageReportListMatch(BillingUsageReportListMatchRequired, total=False):
    day: int
    hour: int
    month: int
    year: int


class BillingUsageReportUserRequired(TypedDict):
    date: str
    discountAmount: float
    grossAmount: float
    netAmount: float
    pricePerUnit: float
    product: str
    quantity: int
    sku: str
    unitType: str


class BillingUsageReportUser(BillingUsageReportUserRequired, total=False):
    repositoryName: str


class BillingUsageReportUserListMatchRequired(TypedDict):
    username: str


class BillingUsageReportUserListMatch(BillingUsageReportUserListMatchRequired, total=False):
    day: int
    hour: int
    month: int
    year: int


class BlobRequired(TypedDict):
    content: str
    encoding: str
    node_id: str
    sha: str
    size: int
    url: str


class Blob(BlobRequired, total=False):
    highlighted_content: str
    id: str


class BlobLoadMatch(TypedDict):
    id: str
    owner: str
    repo: str


class BlockRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class Block(BlockRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class BlockListMatch(TypedDict, total=False):
    page: int
    per_page: int


class BranchRequired(TypedDict):
    commit: dict
    links: dict
    name: str
    protected: bool
    protection: dict
    protection_url: str


class Branch(BranchRequired, total=False):
    id: str
    pattern: str
    required_approving_review_count: int


class BranchLoadMatch(TypedDict):
    id: str
    owner: str
    repo: str


class BranchProtectionRequired(TypedDict):
    enforce_admins: dict
    required_pull_request_reviews: dict
    required_signatures: dict
    required_status_checks: dict
    restrictions: dict


class BranchProtection(BranchProtectionRequired, total=False):
    allow_deletions: dict
    allow_force_pushes: dict
    allow_fork_syncing: dict
    block_creations: dict
    enabled: bool
    id: str
    lock_branch: dict
    name: str
    protection_url: str
    required_conversation_resolution: dict
    required_linear_history: dict
    url: str


class BranchProtectionLoadMatch(TypedDict):
    id: str
    owner: str
    repo: str


class BranchRestrictionPolicy(TypedDict):
    apps: list
    apps_url: str
    teams: list
    teams_url: str
    url: str
    users: list
    users_url: str


class BranchRestrictionPolicyListMatch(TypedDict):
    branch_id: str
    owner: str
    repo: str


class BranchShort(TypedDict):
    commit: dict
    name: str
    protected: bool


class BranchShortListMatch(TypedDict):
    commit_sha: str
    owner: str
    repo: str


class BranchWithProtectionRequired(TypedDict):
    new_name: str


class BranchWithProtection(BranchWithProtectionRequired, total=False):
    id: str


class BranchWithProtectionCreateData(TypedDict):
    id: str
    owner: str
    repo: str
    new_name: str


class CampaignRequired(TypedDict):
    alert_stats: dict
    code_scanning_alerts: list
    contact_link: str
    created_at: str
    description: str
    ends_at: str
    managers: list
    number: int
    state: str
    updated_at: str


class Campaign(CampaignRequired, total=False):
    closed_at: str
    generate_issues: bool
    id: str
    name: str
    published_at: str
    team_managers: list


class CampaignLoadMatch(TypedDict):
    id: int
    org_id: str


class CampaignListMatchRequired(TypedDict):
    org_id: str


class CampaignListMatch(CampaignListMatchRequired, total=False):
    direction: str
    page: int
    per_page: int
    sort: str
    state: str


class CampaignCreateDataRequired(TypedDict):
    org_id: str
    alert_stats: dict
    code_scanning_alerts: list
    contact_link: str
    created_at: str
    description: str
    ends_at: str
    managers: list
    number: int
    state: str
    updated_at: str


class CampaignCreateData(CampaignCreateDataRequired, total=False):
    closed_at: str
    generate_issues: bool
    id: str
    name: str
    published_at: str
    team_managers: list


class CampaignUpdateDataRequired(TypedDict):
    id: int
    org_id: str


class CampaignUpdateData(CampaignUpdateDataRequired, total=False):
    alert_stats: dict
    closed_at: str
    code_scanning_alerts: list
    contact_link: str
    created_at: str
    description: str
    ends_at: str
    generate_issues: bool
    managers: list
    name: str
    number: int
    published_at: str
    state: str
    team_managers: list
    updated_at: str


class CampaignRemoveMatch(TypedDict):
    id: int
    org_id: str


class CheckRequired(TypedDict):
    after: str
    app: dict
    before: str
    check_runs_url: str
    check_suite: dict
    completed_at: str
    conclusion: str
    created_at: str
    deployment: dict
    details_url: str
    external_id: str
    head_branch: str
    head_commit: dict
    head_sha: str
    html_url: str
    id: int
    latest_check_runs_count: int
    name: str
    node_id: str
    output: dict
    pull_requests: list
    repository: dict
    started_at: str
    status: str
    updated_at: str
    url: str


class Check(CheckRequired, total=False):
    rerequestable: bool
    runs_rerequestable: bool


class CheckListMatchRequired(TypedDict):
    owner: str
    repo: str


class CheckListMatch(CheckListMatchRequired, total=False):
    ref: str
    app_id: int
    check_name: str
    filter: str
    page: int
    per_page: int
    status: str
    check_suite_id: int


class CheckAnnotation(TypedDict):
    annotation_level: str
    blob_href: str
    end_column: int
    end_line: int
    message: str
    path: str
    raw_details: str
    start_column: int
    start_line: int
    title: str


class CheckAnnotationListMatchRequired(TypedDict):
    check_run_id: int
    owner: str
    repo: str


class CheckAnnotationListMatch(CheckAnnotationListMatchRequired, total=False):
    page: int
    per_page: int


class CheckAutomatedSecurityFix(TypedDict):
    enabled: bool
    paused: bool


class CheckAutomatedSecurityFixLoadMatch(TypedDict):
    owner: str
    repo: str


class CheckRunRequired(TypedDict):
    app: dict
    check_suite: dict
    completed_at: str
    conclusion: str
    deployment: dict
    details_url: str
    external_id: str
    head_sha: str
    html_url: str
    id: int
    name: str
    node_id: str
    output: dict
    pull_requests: list
    started_at: str
    status: str
    url: str


class CheckRun(CheckRunRequired, total=False):
    actions: list


class CheckRunLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class CheckRunCreateDataRequired(TypedDict):
    owner: str
    repo: str
    app: dict
    check_suite: dict
    completed_at: str
    conclusion: str
    deployment: dict
    details_url: str
    external_id: str
    head_sha: str
    html_url: str
    id: int
    name: str
    node_id: str
    output: dict
    pull_requests: list
    started_at: str
    status: str
    url: str


class CheckRunCreateData(CheckRunCreateDataRequired, total=False):
    actions: list


class CheckRunUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class CheckRunUpdateData(CheckRunUpdateDataRequired, total=False):
    actions: list
    app: dict
    check_suite: dict
    completed_at: str
    conclusion: str
    deployment: dict
    details_url: str
    external_id: str
    head_sha: str
    html_url: str
    name: str
    node_id: str
    output: dict
    pull_requests: list
    started_at: str
    status: str
    url: str


class CheckSuiteRequired(TypedDict):
    after: str
    app: dict
    before: str
    check_runs_url: str
    conclusion: str
    created_at: str
    head_branch: str
    head_commit: dict
    head_sha: str
    id: int
    latest_check_runs_count: int
    node_id: str
    pull_requests: list
    repository: dict
    status: str
    updated_at: str
    url: str


class CheckSuite(CheckSuiteRequired, total=False):
    rerequestable: bool
    runs_rerequestable: bool


class CheckSuiteLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class CheckSuiteCreateDataRequired(TypedDict):
    owner: str
    repo: str
    after: str
    app: dict
    before: str
    check_runs_url: str
    conclusion: str
    created_at: str
    head_branch: str
    head_commit: dict
    head_sha: str
    id: int
    latest_check_runs_count: int
    node_id: str
    pull_requests: list
    repository: dict
    status: str
    updated_at: str
    url: str


class CheckSuiteCreateData(CheckSuiteCreateDataRequired, total=False):
    rerequestable: bool
    runs_rerequestable: bool


class CheckSuitePreferenceRequired(TypedDict):
    preferences: dict
    repository: dict


class CheckSuitePreference(CheckSuitePreferenceRequired, total=False):
    auto_trigger_checks: list


class CheckSuitePreferenceUpdateDataRequired(TypedDict):
    owner: str
    repo: str


class CheckSuitePreferenceUpdateData(CheckSuitePreferenceUpdateDataRequired, total=False):
    auto_trigger_checks: list
    preferences: dict
    repository: dict


class Classroom(TypedDict):
    archived: bool
    avatar_url: str
    html_url: str
    id: int
    login: str
    name: str
    node_id: str
    url: str


class ClassroomLoadMatch(TypedDict):
    id: int


class ClassroomListMatch(TypedDict, total=False):
    page: int
    per_page: int


class ClassroomAcceptedAssignment(TypedDict):
    assignment: dict
    commit_count: int
    grade: str
    id: int
    passing: bool
    repository: dict
    students: list
    submitted: bool


class ClassroomAcceptedAssignmentListMatchRequired(TypedDict):
    assignment_id: int


class ClassroomAcceptedAssignmentListMatch(ClassroomAcceptedAssignmentListMatchRequired, total=False):
    page: int
    per_page: int


class ClassroomAssignment(TypedDict):
    accepted: int
    classroom: dict
    deadline: str
    editor: str
    feedback_pull_requests_enabled: bool
    id: int
    invitations_enabled: bool
    invite_link: str
    language: str
    max_members: int
    max_teams: int
    passing: int
    public_repo: bool
    slug: str
    starter_code_repository: dict
    students_are_repo_admins: bool
    submitted: int
    title: str
    type: str


class ClassroomAssignmentLoadMatch(TypedDict):
    id: int


class ClassroomAssignmentGradeRequired(TypedDict):
    assignment_name: str
    assignment_url: str
    github_username: str
    points_available: int
    points_awarded: int
    roster_identifier: str
    starter_code_url: str
    student_repository_name: str
    student_repository_url: str
    submission_timestamp: str


class ClassroomAssignmentGrade(ClassroomAssignmentGradeRequired, total=False):
    group_name: str


class ClassroomAssignmentGradeListMatch(TypedDict):
    assignment_id: int


class Clone(TypedDict):
    count: int
    timestamp: str
    uniques: int


class CloneListMatchRequired(TypedDict):
    owner: str
    repo: str


class CloneListMatch(CloneListMatchRequired, total=False):
    per: str


class CodeFrequency(TypedDict):
    pass


class CodeFrequencyListMatch(TypedDict):
    owner: str
    repo: str


class CodeFrequencyStat(TypedDict):
    pass


class CodeFrequencyStatListMatch(TypedDict):
    owner: str
    repo: str


class CodeOfConductRequired(TypedDict):
    html_url: str
    key: str
    name: str
    url: str


class CodeOfConduct(CodeOfConductRequired, total=False):
    body: str


class CodeOfConductLoadMatch(TypedDict):
    key: str


class CodeOfConductListMatch(TypedDict, total=False):
    body: str
    html_url: str
    key: str
    name: str
    url: str


class CodeScanningRequired(TypedDict):
    commit_sha: str
    ref: str
    sarif: str


class CodeScanning(CodeScanningRequired, total=False):
    checkout_uri: str
    started_at: str
    tool_name: str
    validate: bool


class CodeScanningCreateDataRequired(TypedDict):
    owner: str
    repo: str
    commit_sha: str
    ref: str
    sarif: str


class CodeScanningCreateData(CodeScanningCreateDataRequired, total=False):
    checkout_uri: str
    started_at: str
    tool_name: str
    validate: bool


class CodeScanningRemoveMatch(TypedDict):
    language: str
    owner: str
    repo: str


class CodeScanningAlertRequired(TypedDict):
    created_at: str
    dismissal_approved_by: dict
    dismissed_at: str
    dismissed_by: dict
    dismissed_reason: str
    html_url: str
    instances_url: str
    most_recent_instance: dict
    number: int
    rule: dict
    state: str
    tool: dict
    url: str


class CodeScanningAlert(CodeScanningAlertRequired, total=False):
    create_request: bool
    dismissed_comment: str
    fixed_at: str
    id: str
    updated_at: str


class CodeScanningAlertLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class CodeScanningAlertUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class CodeScanningAlertUpdateData(CodeScanningAlertUpdateDataRequired, total=False):
    create_request: bool
    created_at: str
    dismissal_approved_by: dict
    dismissed_at: str
    dismissed_by: dict
    dismissed_comment: str
    dismissed_reason: str
    fixed_at: str
    html_url: str
    instances_url: str
    most_recent_instance: dict
    number: int
    rule: dict
    state: str
    tool: dict
    updated_at: str
    url: str


class CodeScanningAlertInstance(TypedDict, total=False):
    analysis_key: str
    category: str
    classifications: list
    commit_sha: str
    environment: str
    html_url: str
    location: dict
    message: dict
    ref: str
    state: str


class CodeScanningAlertInstanceListMatchRequired(TypedDict):
    alert_number: int
    owner: str
    repo: str


class CodeScanningAlertInstanceListMatch(CodeScanningAlertInstanceListMatchRequired, total=False):
    page: int
    per_page: int
    pr: int
    ref: str


class CodeScanningAlertItemRequired(TypedDict):
    created_at: str
    dismissal_approved_by: dict
    dismissed_at: str
    dismissed_by: dict
    dismissed_reason: str
    html_url: str
    instances_url: str
    most_recent_instance: dict
    number: int
    rule: dict
    state: str
    tool: dict
    url: str


class CodeScanningAlertItem(CodeScanningAlertItemRequired, total=False):
    dismissed_comment: str
    fixed_at: str
    updated_at: str


class CodeScanningAlertItemListMatchRequired(TypedDict):
    owner: str
    repo: str


class CodeScanningAlertItemListMatch(CodeScanningAlertItemListMatchRequired, total=False):
    after: str
    before: str
    direction: str
    page: int
    per_page: int
    pr: int
    ref: str
    severity: str
    sort: str
    state: str
    tool_guid: str
    tool_name: str


class CodeScanningAnalysiRequired(TypedDict):
    analysis_key: str
    commit_sha: str
    created_at: str
    deletable: bool
    environment: str
    error: str
    id: int
    ref: str
    results_count: int
    rules_count: int
    sarif_id: str
    tool: dict
    url: str
    warning: str


class CodeScanningAnalysi(CodeScanningAnalysiRequired, total=False):
    category: str
    guid: str
    name: str
    version: str


class CodeScanningAnalysiLoadMatch(TypedDict):
    analysis_id: int
    owner: str
    repo: str


class CodeScanningAnalysiListMatchRequired(TypedDict):
    owner: str
    repo: str


class CodeScanningAnalysiListMatch(CodeScanningAnalysiListMatchRequired, total=False):
    direction: str
    page: int
    per_page: int
    pr: int
    ref: str
    sarif_id: str
    sort: str
    tool_guid: str
    tool_name: str


class CodeScanningAnalysisDeletion(TypedDict):
    pass


class CodeScanningAnalysisDeletionRemoveMatchRequired(TypedDict):
    analysis_id: int
    owner: str
    repo: str


class CodeScanningAnalysisDeletionRemoveMatch(CodeScanningAnalysisDeletionRemoveMatchRequired, total=False):
    confirm_delete: str


class CodeScanningAutofix(TypedDict):
    description: str
    started_at: str
    status: str


class CodeScanningAutofixLoadMatch(TypedDict):
    alert_number: int
    owner: str
    repo: str


class CodeScanningAutofixCreateData(TypedDict):
    alert_number: int
    owner: str
    repo: str
    description: str
    started_at: str
    status: str


class CodeScanningAutofixCommit(TypedDict, total=False):
    message: str
    target_ref: str


class CodeScanningAutofixCommitCreateDataRequired(TypedDict):
    alert_id: int
    owner: str
    repo: str


class CodeScanningAutofixCommitCreateData(CodeScanningAutofixCommitCreateDataRequired, total=False):
    message: str
    target_ref: str


class CodeScanningCodeqlDatabaseRequired(TypedDict):
    avatar_url: str
    content_type: str
    created_at: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    language: str
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    size: int
    starred_url: str
    subscriptions_url: str
    type: str
    updated_at: str
    uploader: dict
    url: str


class CodeScanningCodeqlDatabase(CodeScanningCodeqlDatabaseRequired, total=False):
    commit_oid: str
    email: str
    name: str
    starred_at: str
    user_view_type: str


class CodeScanningCodeqlDatabaseLoadMatch(TypedDict):
    language: str
    owner: str
    repo: str


class CodeScanningCodeqlDatabaseListMatch(TypedDict):
    owner: str
    repo: str


class CodeScanningDefaultSetup(TypedDict, total=False):
    languages: list
    query_suite: str
    runner_label: str
    runner_type: str
    schedule: str
    state: str
    threat_model: str
    updated_at: str


class CodeScanningDefaultSetupListMatch(TypedDict):
    owner: str
    repo: str


class CodeScanningOrganizationAlertItemRequired(TypedDict):
    created_at: str
    dismissal_approved_by: dict
    dismissed_at: str
    dismissed_by: dict
    dismissed_reason: str
    html_url: str
    instances_url: str
    most_recent_instance: dict
    number: int
    repository: dict
    rule: dict
    state: str
    tool: dict
    url: str


class CodeScanningOrganizationAlertItem(CodeScanningOrganizationAlertItemRequired, total=False):
    dismissed_comment: str
    fixed_at: str
    updated_at: str


class CodeScanningOrganizationAlertItemListMatchRequired(TypedDict):
    org_id: str


class CodeScanningOrganizationAlertItemListMatch(CodeScanningOrganizationAlertItemListMatchRequired, total=False):
    after: str
    before: str
    direction: str
    page: int
    per_page: int
    severity: str
    sort: str
    state: str
    tool_guid: str
    tool_name: str


class CodeScanningSarifsStatus(TypedDict, total=False):
    analyses_url: str
    errors: list
    processing_status: str


class CodeScanningSarifsStatusLoadMatch(TypedDict):
    owner: str
    repo: str
    sarif_id: str


class CodeScanningVariantAnalysiRequired(TypedDict):
    actor: dict
    controller_repo: dict
    id: int
    language: str
    query_language: str
    query_pack: str
    query_pack_url: str
    skipped_repositories: dict
    status: str


class CodeScanningVariantAnalysi(CodeScanningVariantAnalysiRequired, total=False):
    actions_workflow_run_id: int
    completed_at: str
    created_at: str
    failure_reason: str
    repositories: list
    repository_lists: list
    repository_owners: list
    scanned_repositories: list
    updated_at: str


class CodeScanningVariantAnalysiLoadMatch(TypedDict):
    codeql_variant_analysis_id: int
    owner: str
    repo: str


class CodeScanningVariantAnalysiCreateDataRequired(TypedDict):
    owner: str
    repo: str
    actor: dict
    controller_repo: dict
    id: int
    language: str
    query_language: str
    query_pack: str
    query_pack_url: str
    skipped_repositories: dict
    status: str


class CodeScanningVariantAnalysiCreateData(CodeScanningVariantAnalysiCreateDataRequired, total=False):
    actions_workflow_run_id: int
    completed_at: str
    created_at: str
    failure_reason: str
    repositories: list
    repository_lists: list
    repository_owners: list
    scanned_repositories: list
    updated_at: str


class CodeScanningVariantAnalysisRepoTask(TypedDict):
    archive_url: str
    assignees_url: str
    blobs_url: str
    branches_url: str
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    deployments_url: str
    description: str
    downloads_url: str
    events_url: str
    fork: bool
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    github_id: int
    hooks_url: str
    html_url: str
    id: str
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    languages_url: str
    merges_url: str
    milestones_url: str
    name: str
    node_id: str
    notifications_url: str
    owner: dict
    private: bool
    pulls_url: str
    releases_url: str
    stargazers_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    url: str


class CodeScanningVariantAnalysisRepoTaskLoadMatch(TypedDict):
    codeql_variant_analysis_id: int
    owner: str
    repo: str
    repo_name: str
    repo_owner: str


class CodeSecurity(TypedDict, total=False):
    advanced_security: str
    code_scanning_default_setup: str
    code_scanning_default_setup_options: dict
    code_scanning_delegated_alert_dismissal: str
    code_scanning_options: dict
    created_at: str
    default_for_new_repos: str
    dependabot_alerts: str
    dependabot_security_updates: str
    dependency_graph: str
    dependency_graph_autosubmit_action: str
    dependency_graph_autosubmit_action_options: dict
    description: str
    enforcement: str
    html_url: str
    id: int
    name: str
    private_vulnerability_reporting: str
    secret_scanning: str
    secret_scanning_delegated_alert_dismissal: str
    secret_scanning_delegated_bypass: str
    secret_scanning_delegated_bypass_options: dict
    secret_scanning_generic_secrets: str
    secret_scanning_non_provider_patterns: str
    secret_scanning_push_protection: str
    secret_scanning_validity_checks: str
    target_type: str
    updated_at: str
    url: str


class CodeSecurityUpdateDataRequired(TypedDict):
    configuration_id: int


class CodeSecurityUpdateData(CodeSecurityUpdateDataRequired, total=False):
    enterprise: str
    org_id: str
    advanced_security: str
    code_scanning_default_setup: str
    code_scanning_default_setup_options: dict
    code_scanning_delegated_alert_dismissal: str
    code_scanning_options: dict
    created_at: str
    default_for_new_repos: str
    dependabot_alerts: str
    dependabot_security_updates: str
    dependency_graph: str
    dependency_graph_autosubmit_action: str
    dependency_graph_autosubmit_action_options: dict
    description: str
    enforcement: str
    html_url: str
    id: int
    name: str
    private_vulnerability_reporting: str
    secret_scanning: str
    secret_scanning_delegated_alert_dismissal: str
    secret_scanning_delegated_bypass: str
    secret_scanning_delegated_bypass_options: dict
    secret_scanning_generic_secrets: str
    secret_scanning_non_provider_patterns: str
    secret_scanning_push_protection: str
    secret_scanning_validity_checks: str
    target_type: str
    updated_at: str
    url: str


class CodeSecurityRemoveMatch(TypedDict):
    configuration_id: int
    enterprise: str


class CodeSecurityConfigurationRequired(TypedDict):
    scope: str


class CodeSecurityConfiguration(CodeSecurityConfigurationRequired, total=False):
    advanced_security: str
    code_scanning_default_setup: str
    code_scanning_default_setup_options: dict
    code_scanning_delegated_alert_dismissal: str
    code_scanning_options: dict
    code_security: str
    created_at: str
    dependabot_alerts: str
    dependabot_security_updates: str
    dependency_graph: str
    dependency_graph_autosubmit_action: str
    dependency_graph_autosubmit_action_options: dict
    description: str
    enforcement: str
    html_url: str
    id: int
    name: str
    private_vulnerability_reporting: str
    secret_protection: str
    secret_scanning: str
    secret_scanning_delegated_alert_dismissal: str
    secret_scanning_delegated_bypass: str
    secret_scanning_delegated_bypass_options: dict
    secret_scanning_generic_secrets: str
    secret_scanning_non_provider_patterns: str
    secret_scanning_push_protection: str
    secret_scanning_validity_checks: str
    selected_repository_ids: list
    target_type: str
    updated_at: str
    url: str


class CodeSecurityConfigurationLoadMatch(TypedDict):
    enterprise: str
    id: int


class CodeSecurityConfigurationListMatchRequired(TypedDict):
    org_id: str


class CodeSecurityConfigurationListMatch(CodeSecurityConfigurationListMatchRequired, total=False):
    after: str
    before: str
    per_page: int
    target_type: str


class CodeSecurityConfigurationCreateDataRequired(TypedDict):
    enterprise: str
    scope: str


class CodeSecurityConfigurationCreateData(CodeSecurityConfigurationCreateDataRequired, total=False):
    advanced_security: str
    code_scanning_default_setup: str
    code_scanning_default_setup_options: dict
    code_scanning_delegated_alert_dismissal: str
    code_scanning_options: dict
    code_security: str
    created_at: str
    dependabot_alerts: str
    dependabot_security_updates: str
    dependency_graph: str
    dependency_graph_autosubmit_action: str
    dependency_graph_autosubmit_action_options: dict
    description: str
    enforcement: str
    html_url: str
    id: int
    name: str
    private_vulnerability_reporting: str
    secret_protection: str
    secret_scanning: str
    secret_scanning_delegated_alert_dismissal: str
    secret_scanning_delegated_bypass: str
    secret_scanning_delegated_bypass_options: dict
    secret_scanning_generic_secrets: str
    secret_scanning_non_provider_patterns: str
    secret_scanning_push_protection: str
    secret_scanning_validity_checks: str
    selected_repository_ids: list
    target_type: str
    updated_at: str
    url: str


class CodeSecurityConfigurationUpdateDataRequired(TypedDict):
    id: int


class CodeSecurityConfigurationUpdateData(CodeSecurityConfigurationUpdateDataRequired, total=False):
    enterprise: str
    org_id: str
    advanced_security: str
    code_scanning_default_setup: str
    code_scanning_default_setup_options: dict
    code_scanning_delegated_alert_dismissal: str
    code_scanning_options: dict
    code_security: str
    created_at: str
    dependabot_alerts: str
    dependabot_security_updates: str
    dependency_graph: str
    dependency_graph_autosubmit_action: str
    dependency_graph_autosubmit_action_options: dict
    description: str
    enforcement: str
    html_url: str
    name: str
    private_vulnerability_reporting: str
    scope: str
    secret_protection: str
    secret_scanning: str
    secret_scanning_delegated_alert_dismissal: str
    secret_scanning_delegated_bypass: str
    secret_scanning_delegated_bypass_options: dict
    secret_scanning_generic_secrets: str
    secret_scanning_non_provider_patterns: str
    secret_scanning_push_protection: str
    secret_scanning_validity_checks: str
    selected_repository_ids: list
    target_type: str
    updated_at: str
    url: str


class CodeSecurityConfigurationRepositoryRequired(TypedDict):
    repository: dict


class CodeSecurityConfigurationRepository(CodeSecurityConfigurationRepositoryRequired, total=False):
    status: str


class CodeSecurityConfigurationRepositoryListMatchRequired(TypedDict):
    configuration_id: int


class CodeSecurityConfigurationRepositoryListMatch(CodeSecurityConfigurationRepositoryListMatchRequired, total=False):
    enterprise: str
    after: str
    before: str
    per_page: int
    status: str
    org_id: str


class CodeSecurityDefaultConfiguration(TypedDict, total=False):
    configuration: dict
    default_for_new_repos: Any


class CodeSecurityDefaultConfigurationListMatch(TypedDict):
    enterprise: str


class CodeownersErrorRequired(TypedDict):
    column: int
    kind: str
    line: int
    message: str
    path: str


class CodeownersError(CodeownersErrorRequired, total=False):
    source: str
    suggestion: str


class CodeownersErrorListMatchRequired(TypedDict):
    owner: str
    repo: str


class CodeownersErrorListMatch(CodeownersErrorListMatchRequired, total=False):
    ref: str


class CodespaceRequired(TypedDict):
    accepted: bool
    archive_url: str
    assignees_url: str
    billable_owner: dict
    blobs_url: str
    branches_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    cpus: int
    created_at: str
    defaults: dict
    deployments_url: str
    description: str
    downloads_url: str
    environment_id: str
    events_url: str
    fork: bool
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_status: dict
    git_tags_url: str
    hooks_url: str
    idle_timeout_minutes: int
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    key: str
    key_id: str
    keys_url: str
    labels_url: str
    languages_url: str
    last_used_at: str
    location: str
    machine: dict
    machines_url: str
    memory_in_bytes: int
    merges_url: str
    milestones_url: str
    name: str
    node_id: str
    notifications_url: str
    operating_system: str
    owner: dict
    path: str
    prebuild: bool
    prebuild_availability: str
    pulls_url: str
    recent_folders: list
    releases_url: str
    repository: dict
    selected_usernames: list
    stargazers_url: str
    start_url: str
    statuses_url: str
    stop_url: str
    storage_in_bytes: int
    subscribers_url: str
    subscription_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    updated_at: str
    visibility: str
    web_url: str


class Codespace(CodespaceRequired, total=False):
    allow_forking: bool
    archived: bool
    branch: str
    client_ip: str
    clone_url: str
    completed_at: str
    custom_properties: dict
    default_branch: str
    delete_branch_on_merge: bool
    devcontainer_path: str
    disabled: bool
    display_name: str
    encrypted_value: str
    export_url: str
    forks: int
    forks_count: int
    geo: str
    git_url: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    html_url: str
    id: str
    idle_timeout_notice: str
    is_template: bool
    language: str
    last_known_stop_notice: str
    license: dict
    mirror_url: str
    multi_repo_permissions_opt_out: bool
    network_count: int
    open_issues: int
    open_issues_count: int
    pending_operation: bool
    pending_operation_disabled_reason: str
    permissions: dict
    private: bool
    publish_url: str
    pushed_at: str
    ref: str
    retention_expires_at: str
    retention_period_minutes: int
    role_name: str
    runtime_constraints: dict
    security_and_analysis: dict
    selected_repositories_url: str
    selected_repository_ids: list
    sha: str
    size: int
    ssh_url: str
    stargazers_count: int
    state: str
    subscribers_count: int
    svn_url: str
    temp_clone_token: str
    template: str
    title: str
    topics: list
    url: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool
    working_directory: str


class CodespaceLoadMatch(TypedDict):
    id: str


class CodespaceListMatch(TypedDict, total=False):
    page: int
    per_page: int
    repository_id: int


class CodespaceCreateDataRequired(TypedDict):
    accepted: bool
    archive_url: str
    assignees_url: str
    billable_owner: dict
    blobs_url: str
    branches_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    cpus: int
    created_at: str
    defaults: dict
    deployments_url: str
    description: str
    downloads_url: str
    environment_id: str
    events_url: str
    fork: bool
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_status: dict
    git_tags_url: str
    hooks_url: str
    idle_timeout_minutes: int
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    key: str
    key_id: str
    keys_url: str
    labels_url: str
    languages_url: str
    last_used_at: str
    location: str
    machine: dict
    machines_url: str
    memory_in_bytes: int
    merges_url: str
    milestones_url: str
    name: str
    node_id: str
    notifications_url: str
    operating_system: str
    owner: dict
    path: str
    prebuild: bool
    prebuild_availability: str
    pulls_url: str
    recent_folders: list
    releases_url: str
    repository: dict
    selected_usernames: list
    stargazers_url: str
    start_url: str
    statuses_url: str
    stop_url: str
    storage_in_bytes: int
    subscribers_url: str
    subscription_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    updated_at: str
    visibility: str
    web_url: str


class CodespaceCreateData(CodespaceCreateDataRequired, total=False):
    allow_forking: bool
    archived: bool
    branch: str
    client_ip: str
    clone_url: str
    completed_at: str
    custom_properties: dict
    default_branch: str
    delete_branch_on_merge: bool
    devcontainer_path: str
    disabled: bool
    display_name: str
    encrypted_value: str
    export_url: str
    forks: int
    forks_count: int
    geo: str
    git_url: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    html_url: str
    id: str
    idle_timeout_notice: str
    is_template: bool
    language: str
    last_known_stop_notice: str
    license: dict
    mirror_url: str
    multi_repo_permissions_opt_out: bool
    network_count: int
    open_issues: int
    open_issues_count: int
    pending_operation: bool
    pending_operation_disabled_reason: str
    permissions: dict
    private: bool
    publish_url: str
    pushed_at: str
    ref: str
    retention_expires_at: str
    retention_period_minutes: int
    role_name: str
    runtime_constraints: dict
    security_and_analysis: dict
    selected_repositories_url: str
    selected_repository_ids: list
    sha: str
    size: int
    ssh_url: str
    stargazers_count: int
    state: str
    subscribers_count: int
    svn_url: str
    temp_clone_token: str
    template: str
    title: str
    topics: list
    url: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool
    working_directory: str


class CodespaceUpdateDataRequired(TypedDict):
    secret_name: str


class CodespaceUpdateData(CodespaceUpdateDataRequired, total=False):
    accepted: bool
    allow_forking: bool
    archive_url: str
    archived: bool
    assignees_url: str
    billable_owner: dict
    blobs_url: str
    branch: str
    branches_url: str
    client_ip: str
    clone_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    completed_at: str
    contents_url: str
    contributors_url: str
    cpus: int
    created_at: str
    custom_properties: dict
    default_branch: str
    defaults: dict
    delete_branch_on_merge: bool
    deployments_url: str
    description: str
    devcontainer_path: str
    disabled: bool
    display_name: str
    downloads_url: str
    encrypted_value: str
    environment_id: str
    events_url: str
    export_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    geo: str
    git_commits_url: str
    git_refs_url: str
    git_status: dict
    git_tags_url: str
    git_url: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    id: str
    idle_timeout_minutes: int
    idle_timeout_notice: str
    is_template: bool
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    key: str
    key_id: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    last_known_stop_notice: str
    last_used_at: str
    license: dict
    location: str
    machine: dict
    machines_url: str
    memory_in_bytes: int
    merges_url: str
    milestones_url: str
    mirror_url: str
    multi_repo_permissions_opt_out: bool
    name: str
    network_count: int
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    operating_system: str
    owner: dict
    path: str
    pending_operation: bool
    pending_operation_disabled_reason: str
    permissions: dict
    prebuild: bool
    prebuild_availability: str
    private: bool
    publish_url: str
    pulls_url: str
    pushed_at: str
    recent_folders: list
    ref: str
    releases_url: str
    repository: dict
    retention_expires_at: str
    retention_period_minutes: int
    role_name: str
    runtime_constraints: dict
    security_and_analysis: dict
    selected_repositories_url: str
    selected_repository_ids: list
    selected_usernames: list
    sha: str
    size: int
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    start_url: str
    state: str
    statuses_url: str
    stop_url: str
    storage_in_bytes: int
    subscribers_count: int
    subscribers_url: str
    subscription_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    temp_clone_token: str
    template: str
    title: str
    topics: list
    trees_url: str
    updated_at: str
    url: str
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool
    web_url: str
    working_directory: str


class CodespaceRemoveMatch(TypedDict):
    id: str


class CollaboratorRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    permissions: dict
    received_events_url: str
    repos_url: str
    role_name: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class Collaborator(CollaboratorRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class CollaboratorListMatchRequired(TypedDict):
    project_id: int


class CollaboratorListMatch(CollaboratorListMatchRequired, total=False):
    affiliation: str
    page: int
    per_page: int


class CombinedBillingUsage(TypedDict):
    days_left_in_billing_cycle: int
    estimated_paid_storage_for_month: int
    estimated_storage_for_month: int


class CombinedBillingUsageLoadMatch(TypedDict):
    org_id: str


class CombinedCommitStatusRequired(TypedDict):
    avatar_url: str
    context: str
    created_at: str
    description: str
    id: int
    node_id: str
    state: str
    target_url: str
    updated_at: str
    url: str


class CombinedCommitStatus(CombinedCommitStatusRequired, total=False):
    required: bool


class CombinedCommitStatusListMatchRequired(TypedDict):
    owner: str
    ref: str
    repo: str


class CombinedCommitStatusListMatch(CombinedCommitStatusListMatchRequired, total=False):
    page: int
    per_page: int


class CommitRequired(TypedDict):
    author: Any
    base: str
    comments_url: str
    commit: dict
    committer: Any
    head: str
    html_url: str
    node_id: str
    parents: list
    sha: str
    url: str


class Commit(CommitRequired, total=False):
    commit_message: str
    files: list
    id: str
    stats: dict


class CommitLoadMatchRequired(TypedDict):
    id: str
    owner: str
    repo: str


class CommitLoadMatch(CommitLoadMatchRequired, total=False):
    page: int
    per_page: int


class CommitListMatchRequired(TypedDict):
    owner: str
    repo: str


class CommitListMatch(CommitListMatchRequired, total=False):
    author: str
    committer: str
    page: int
    path: str
    per_page: int
    sha: str
    since: str
    until: str
    pull_number: int


class CommitCreateDataRequired(TypedDict):
    owner: str
    repo: str
    author: Any
    base: str
    comments_url: str
    commit: dict
    committer: Any
    head: str
    html_url: str
    node_id: str
    parents: list
    sha: str
    url: str


class CommitCreateData(CommitCreateDataRequired, total=False):
    commit_message: str
    files: list
    id: str
    stats: dict


class CommitActivity(TypedDict):
    days: list
    total: int
    week: int


class CommitActivityListMatch(TypedDict):
    owner: str
    repo: str


class CommitComment(TypedDict):
    author_association: str
    body: str
    commit_id: str
    created_at: str
    html_url: str
    id: int
    line: int
    node_id: str
    path: str
    position: int
    reactions: dict
    updated_at: str
    url: str
    user: dict


class CommitCommentLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class CommitCommentListMatchRequired(TypedDict):
    owner: str
    repo: str


class CommitCommentListMatch(CommitCommentListMatchRequired, total=False):
    commit_sha: str
    page: int
    per_page: int


class CommitCommentCreateData(TypedDict):
    commit_sha: str
    owner: str
    repo: str
    author_association: str
    body: str
    commit_id: str
    created_at: str
    html_url: str
    id: int
    line: int
    node_id: str
    path: str
    position: int
    reactions: dict
    updated_at: str
    url: str
    user: dict


class CommitCommentUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class CommitCommentUpdateData(CommitCommentUpdateDataRequired, total=False):
    author_association: str
    body: str
    commit_id: str
    created_at: str
    html_url: str
    line: int
    node_id: str
    path: str
    position: int
    reactions: dict
    updated_at: str
    url: str
    user: dict


class CommitComparisonRequired(TypedDict):
    ahead_by: int
    base_commit: dict
    behind_by: int
    commits: list
    diff_url: str
    html_url: str
    merge_base_commit: dict
    patch_url: str
    permalink_url: str
    status: str
    total_commits: int
    url: str


class CommitComparison(CommitComparisonRequired, total=False):
    files: list


class CommitComparisonLoadMatchRequired(TypedDict):
    basehead: str
    owner: str
    repo: str


class CommitComparisonLoadMatch(CommitComparisonLoadMatchRequired, total=False):
    page: int
    per_page: int


class CommunityProfile(TypedDict):
    code_of_conduct: dict
    code_of_conduct_file: dict
    contributing: dict
    issue_template: dict
    license: dict
    pull_request_template: dict
    readme: dict


class CommunityProfileLoadMatch(TypedDict):
    owner: str
    repo: str


class ContentFile(TypedDict):
    git: str
    html: str
    self: str


class ContentFileLoadMatchRequired(TypedDict):
    owner: str
    repo: str


class ContentFileLoadMatch(ContentFileLoadMatchRequired, total=False):
    dir: str
    ref: str


class ContentTraffic(TypedDict):
    count: int
    path: str
    title: str
    uniques: int


class ContentTrafficListMatch(TypedDict):
    owner: str
    repo: str


class ContributorRequired(TypedDict):
    author: dict
    contributions: int
    total: int
    type: str
    weeks: list


class Contributor(ContributorRequired, total=False):
    avatar_url: str
    email: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    name: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    url: str
    user_view_type: str


class ContributorListMatchRequired(TypedDict):
    owner: str
    repo: str


class ContributorListMatch(ContributorListMatchRequired, total=False):
    anon: str
    page: int
    per_page: int


class CopilotRequired(TypedDict):
    assignee: dict
    created_at: str
    organization: dict
    selected_teams: list
    selected_usernames: list


class Copilot(CopilotRequired, total=False):
    assigning_team: Any
    last_activity_at: str
    last_activity_editor: str
    last_authenticated_at: str
    pending_cancellation_date: str
    plan_type: str
    updated_at: str


class CopilotLoadMatch(TypedDict):
    org_id: str
    username: str


class CopilotListMatchRequired(TypedDict):
    org_id: str


class CopilotListMatch(CopilotListMatchRequired, total=False):
    page: int
    per_page: int


class CopilotCreateDataRequired(TypedDict):
    org_id: str
    assignee: dict
    created_at: str
    organization: dict
    selected_teams: list
    selected_usernames: list


class CopilotCreateData(CopilotCreateDataRequired, total=False):
    assigning_team: Any
    last_activity_at: str
    last_activity_editor: str
    last_authenticated_at: str
    pending_cancellation_date: str
    plan_type: str
    updated_at: str


class CopilotRemoveMatch(TypedDict):
    org_id: str


class CopilotOrganizationDetail(TypedDict, total=False):
    active_this_cycle: int
    added_this_cycle: int
    inactive_this_cycle: int
    pending_cancellation: int
    pending_invitation: int
    total: int


class CopilotOrganizationDetailLoadMatch(TypedDict):
    org_id: str


class CopilotUsageMetricsDayRequired(TypedDict):
    date: str


class CopilotUsageMetricsDay(CopilotUsageMetricsDayRequired, total=False):
    copilot_dotcom_chat: dict
    copilot_dotcom_pull_requests: dict
    copilot_ide_chat: dict
    copilot_ide_code_completions: dict
    total_active_users: int
    total_engaged_users: int


class CopilotUsageMetricsDayListMatchRequired(TypedDict):
    org_id: str


class CopilotUsageMetricsDayListMatch(CopilotUsageMetricsDayListMatchRequired, total=False):
    team_id: str
    page: int
    per_page: int
    since: str
    until: str


class Credential(TypedDict):
    credentials: list


class CredentialCreateData(TypedDict):
    credentials: list


class CustomPropertyRequired(TypedDict):
    properties: list
    property_name: str
    value_type: str


class CustomProperty(CustomPropertyRequired, total=False):
    allowed_values: list
    default_value: Any
    description: str
    required: bool
    source_type: str
    url: str
    values_editable_by: str


class CustomPropertyLoadMatch(TypedDict):
    custom_property_name: str
    org_id: str


class CustomPropertyListMatch(TypedDict):
    org_id: str


class CustomPropertyUpdateDataRequired(TypedDict):
    custom_property_name: str
    org_id: str


class CustomPropertyUpdateData(CustomPropertyUpdateDataRequired, total=False):
    allowed_values: list
    default_value: Any
    description: str
    properties: list
    property_name: str
    required: bool
    source_type: str
    url: str
    value_type: str
    values_editable_by: str


class CustomPropertyValue(TypedDict):
    property_name: str
    value: Any


class CustomPropertyValueListMatch(TypedDict):
    owner: str
    repo: str


class DependabotRequired(TypedDict):
    archive_url: str
    assignees_url: str
    avatar_url: str
    blobs_url: str
    branches_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    default_level: str
    deployments_url: str
    description: str
    downloads_url: str
    events_url: str
    fork: bool
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    hooks_url: str
    html_url: str
    id: int
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    languages_url: str
    login: str
    members_url: str
    merges_url: str
    milestones_url: str
    name: str
    node_id: str
    notifications_url: str
    owner: dict
    private: bool
    public_members_url: str
    pulls_url: str
    releases_url: str
    repos_url: str
    selected_repository_ids: list
    stargazers_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    url: str


class Dependabot(DependabotRequired, total=False):
    allow_forking: bool
    archived: bool
    clone_url: str
    created_at: str
    custom_properties: dict
    default_branch: str
    delete_branch_on_merge: bool
    disabled: bool
    forks: int
    forks_count: int
    git_url: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    is_template: bool
    language: str
    license: dict
    mirror_url: str
    network_count: int
    open_issues: int
    open_issues_count: int
    permissions: dict
    pushed_at: str
    repository_ids_to_add: list
    repository_ids_to_remove: list
    role_name: str
    security_and_analysis: dict
    selected_repositories_url: str
    size: int
    ssh_url: str
    stargazers_count: int
    subscribers_count: int
    svn_url: str
    temp_clone_token: str
    topics: list
    updated_at: str
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool


class DependabotListMatch(TypedDict, total=False):
    per_page: int
    since: int


class DependabotUpdateDataRequired(TypedDict):
    org_id: str
    repository_id: int
    secret_id: str


class DependabotUpdateData(DependabotUpdateDataRequired, total=False):
    allow_forking: bool
    archive_url: str
    archived: bool
    assignees_url: str
    avatar_url: str
    blobs_url: str
    branches_url: str
    clone_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    custom_properties: dict
    default_branch: str
    default_level: str
    delete_branch_on_merge: bool
    deployments_url: str
    description: str
    disabled: bool
    downloads_url: str
    events_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    id: int
    is_template: bool
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    login: str
    members_url: str
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    network_count: int
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    owner: dict
    permissions: dict
    private: bool
    public_members_url: str
    pulls_url: str
    pushed_at: str
    releases_url: str
    repos_url: str
    repository_ids_to_add: list
    repository_ids_to_remove: list
    role_name: str
    security_and_analysis: dict
    selected_repositories_url: str
    selected_repository_ids: list
    size: int
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    statuses_url: str
    subscribers_count: int
    subscribers_url: str
    subscription_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    temp_clone_token: str
    topics: list
    trees_url: str
    updated_at: str
    url: str
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool


class DependabotRemoveMatch(TypedDict):
    org_id: str
    secret_name: str


class DependabotAlertRequired(TypedDict):
    created_at: str
    dependency: dict
    dismissed_at: str
    dismissed_by: dict
    dismissed_comment: str
    dismissed_reason: str
    fixed_at: str
    html_url: str
    number: int
    security_advisory: dict
    security_vulnerability: dict
    state: str
    updated_at: str
    url: str


class DependabotAlert(DependabotAlertRequired, total=False):
    auto_dismissed_at: str
    id: str


class DependabotAlertLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class DependabotAlertListMatchRequired(TypedDict):
    owner: str
    repo: str


class DependabotAlertListMatch(DependabotAlertListMatchRequired, total=False):
    after: str
    before: str
    direction: str
    ecosystem: str
    epss_percentage: str
    first: int
    has: Any
    last: int
    manifest: str
    package: str
    page: int
    per_page: int
    scope: str
    severity: str
    sort: str
    state: str


class DependabotAlertUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class DependabotAlertUpdateData(DependabotAlertUpdateDataRequired, total=False):
    auto_dismissed_at: str
    created_at: str
    dependency: dict
    dismissed_at: str
    dismissed_by: dict
    dismissed_comment: str
    dismissed_reason: str
    fixed_at: str
    html_url: str
    number: int
    security_advisory: dict
    security_vulnerability: dict
    state: str
    updated_at: str
    url: str


class DependabotAlertWithRepositoryRequired(TypedDict):
    created_at: str
    dependency: dict
    dismissed_at: str
    dismissed_by: dict
    dismissed_comment: str
    dismissed_reason: str
    fixed_at: str
    html_url: str
    number: int
    repository: dict
    security_advisory: dict
    security_vulnerability: dict
    state: str
    updated_at: str
    url: str


class DependabotAlertWithRepository(DependabotAlertWithRepositoryRequired, total=False):
    auto_dismissed_at: str


class DependabotAlertWithRepositoryListMatchRequired(TypedDict):
    org_id: str


class DependabotAlertWithRepositoryListMatch(DependabotAlertWithRepositoryListMatchRequired, total=False):
    after: str
    artifact_registry: str
    artifact_registry_url: str
    before: str
    direction: str
    ecosystem: str
    epss_percentage: str
    first: int
    has: Any
    last: int
    package: str
    per_page: int
    scope: str
    severity: str
    sort: str
    state: str


class DependabotPublicKey(TypedDict):
    key: str
    key_id: str


class DependabotPublicKeyLoadMatch(TypedDict):
    org_id: str


class DependabotRepositoryAccessDetail(TypedDict):
    archive_url: str
    assignees_url: str
    blobs_url: str
    branches_url: str
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    deployments_url: str
    description: str
    downloads_url: str
    events_url: str
    fork: bool
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    hooks_url: str
    html_url: str
    id: int
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    languages_url: str
    merges_url: str
    milestones_url: str
    name: str
    node_id: str
    notifications_url: str
    owner: dict
    private: bool
    pulls_url: str
    releases_url: str
    stargazers_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    url: str


class DependabotRepositoryAccessDetailListMatchRequired(TypedDict):
    org: str


class DependabotRepositoryAccessDetailListMatch(DependabotRepositoryAccessDetailListMatchRequired, total=False):
    page: int
    per_page: int


class DependabotSecretRequired(TypedDict):
    created_at: str
    name: str
    updated_at: str


class DependabotSecret(DependabotSecretRequired, total=False):
    id: str


class DependabotSecretLoadMatch(TypedDict):
    id: str
    owner: str
    repo: str


class DependencyGraphRequired(TypedDict):
    detector: dict
    job: dict
    ref: str
    scanned: str
    sha: str
    version: int


class DependencyGraph(DependencyGraphRequired, total=False):
    manifests: dict
    metadata: dict


class DependencyGraphCreateDataRequired(TypedDict):
    owner: str
    repo: str
    detector: dict
    job: dict
    ref: str
    scanned: str
    sha: str
    version: int


class DependencyGraphCreateData(DependencyGraphCreateDataRequired, total=False):
    manifests: dict
    metadata: dict


class DependencyGraphDiff(TypedDict):
    change_type: str
    ecosystem: str
    license: str
    manifest: str
    name: str
    package_url: str
    scope: str
    source_repository_url: str
    version: str
    vulnerabilities: list


class DependencyGraphDiffLoadMatchRequired(TypedDict):
    basehead: str
    owner: str
    repo: str


class DependencyGraphDiffLoadMatch(DependencyGraphDiffLoadMatchRequired, total=False):
    name: str


class DependencyGraphSpdxSbomRequired(TypedDict):
    SPDXID: str
    creationInfo: dict
    dataLicense: str
    documentNamespace: str
    name: str
    packages: list
    relationships: list
    spdxVersion: str


class DependencyGraphSpdxSbom(DependencyGraphSpdxSbomRequired, total=False):
    comment: str


class DependencyGraphSpdxSbomLoadMatch(TypedDict):
    owner: str
    repo: str


class DeployKeyRequired(TypedDict):
    created_at: str
    id: int
    key: str
    read_only: bool
    title: str
    url: str
    verified: bool


class DeployKey(DeployKeyRequired, total=False):
    added_by: str
    enabled: bool
    last_used: str


class DeployKeyLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class DeployKeyListMatchRequired(TypedDict):
    owner: str
    repo: str


class DeployKeyListMatch(DeployKeyListMatchRequired, total=False):
    page: int
    per_page: int


class DeployKeyCreateDataRequired(TypedDict):
    owner: str
    repo: str
    created_at: str
    id: int
    key: str
    read_only: bool
    title: str
    url: str
    verified: bool


class DeployKeyCreateData(DeployKeyCreateDataRequired, total=False):
    added_by: str
    enabled: bool
    last_used: str


class DeploymentRequired(TypedDict):
    comment: str
    created_at: str
    creator: dict
    description: str
    environment: str
    environment_ids: list
    id: int
    node_id: str
    payload: Any
    performed_via_github_app: dict
    ref: str
    repository_url: str
    sha: str
    state: str
    statuses_url: str
    task: str
    updated_at: str
    url: str


class Deployment(DeploymentRequired, total=False):
    auto_merge: bool
    original_environment: str
    production_environment: bool
    required_contexts: list
    transient_environment: bool


class DeploymentLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class DeploymentListMatchRequired(TypedDict):
    owner: str
    repo: str


class DeploymentListMatch(DeploymentListMatchRequired, total=False):
    environment: str
    page: int
    per_page: int
    ref: str
    sha: str
    task: str


class DeploymentCreateDataRequired(TypedDict):
    owner: str
    repo: str
    comment: str
    created_at: str
    creator: dict
    description: str
    environment: str
    environment_ids: list
    id: int
    node_id: str
    payload: Any
    performed_via_github_app: dict
    ref: str
    repository_url: str
    sha: str
    state: str
    statuses_url: str
    task: str
    updated_at: str
    url: str


class DeploymentCreateData(DeploymentCreateDataRequired, total=False):
    run_id: int
    auto_merge: bool
    original_environment: str
    production_environment: bool
    required_contexts: list
    transient_environment: bool


class DeploymentBranchPolicy(TypedDict, total=False):
    id: int
    name: str
    node_id: str
    type: str


class DeploymentBranchPolicyLoadMatch(TypedDict):
    environment_id: str
    id: int
    owner: str
    repo: str


class DeploymentBranchPolicyCreateDataRequired(TypedDict):
    environment_name: str
    owner: str
    repo: str


class DeploymentBranchPolicyCreateData(DeploymentBranchPolicyCreateDataRequired, total=False):
    id: int
    name: str
    node_id: str
    type: str


class DeploymentBranchPolicyUpdateDataRequired(TypedDict):
    environment_id: str
    id: int
    owner: str
    repo: str


class DeploymentBranchPolicyUpdateData(DeploymentBranchPolicyUpdateDataRequired, total=False):
    name: str
    node_id: str
    type: str


class DeploymentProtectionRuleRequired(TypedDict):
    id: int
    integration_url: str
    node_id: str
    slug: str


class DeploymentProtectionRule(DeploymentProtectionRuleRequired, total=False):
    integration_id: int


class DeploymentProtectionRuleLoadMatch(TypedDict):
    environment_id: str
    id: int
    owner: str
    repo: str


class DeploymentProtectionRuleCreateDataRequired(TypedDict):
    environment_name: str
    owner: str
    repo: str
    id: int
    integration_url: str
    node_id: str
    slug: str


class DeploymentProtectionRuleCreateData(DeploymentProtectionRuleCreateDataRequired, total=False):
    integration_id: int


class DeploymentStatusRequired(TypedDict):
    created_at: str
    creator: dict
    deployment_url: str
    description: str
    id: int
    node_id: str
    performed_via_github_app: dict
    repository_url: str
    state: str
    target_url: str
    updated_at: str
    url: str


class DeploymentStatus(DeploymentStatusRequired, total=False):
    auto_inactive: bool
    environment: str
    environment_url: str
    log_url: str


class DeploymentStatusLoadMatch(TypedDict):
    deployment_id: int
    id: int
    owner: str
    repo: str


class DeploymentStatusListMatchRequired(TypedDict):
    id: int
    owner: str
    repo: str


class DeploymentStatusListMatch(DeploymentStatusListMatchRequired, total=False):
    page: int
    per_page: int


class DeploymentStatusCreateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str
    created_at: str
    creator: dict
    deployment_url: str
    description: str
    node_id: str
    performed_via_github_app: dict
    repository_url: str
    state: str
    target_url: str
    updated_at: str
    url: str


class DeploymentStatusCreateData(DeploymentStatusCreateDataRequired, total=False):
    auto_inactive: bool
    environment: str
    environment_url: str
    log_url: str


class DiffEntryRequired(TypedDict):
    additions: int
    blob_url: str
    changes: int
    contents_url: str
    deletions: int
    filename: str
    raw_url: str
    sha: str
    status: str


class DiffEntry(DiffEntryRequired, total=False):
    patch: str
    previous_filename: str


class DiffEntryListMatchRequired(TypedDict):
    owner: str
    pull_number: int
    repo: str


class DiffEntryListMatch(DiffEntryListMatchRequired, total=False):
    page: int
    per_page: int


class Email(TypedDict, total=False):
    email: str
    primary: bool
    verified: bool
    visibility: str


class EmailListMatch(TypedDict, total=False):
    page: int
    per_page: int


class EmailCreateData(TypedDict, total=False):
    email: str
    primary: bool
    verified: bool
    visibility: str


class EmailUpdateData(TypedDict, total=False):
    email: str
    primary: bool
    verified: bool
    visibility: str


class Emoji(TypedDict, total=False):
    a: str
    ab: str
    abacus: str
    abc: str
    abcd: str
    accept: str
    accessibility: str
    accordion: str
    adhesive_bandage: str
    adult: str
    aerial_tramway: str
    afghanistan: str
    airplane: str
    aland_islands: str
    alarm_clock: str
    albania: str
    alembic: str
    algeria: str
    alien: str
    ambulance: str
    american_samoa: str
    amphora: str
    anatomical_heart: str
    anchor: str
    andorra: str
    angel: str
    anger: str
    angola: str
    angry: str
    anguilla: str
    anguished: str
    ant: str
    antarctica: str
    antigua_barbuda: str
    apple: str
    aquarius: str
    argentina: str
    aries: str
    armenia: str
    arrow_backward: str
    arrow_double_down: str
    arrow_double_up: str
    arrow_down: str
    arrow_down_small: str
    arrow_forward: str
    arrow_heading_down: str
    arrow_heading_up: str
    arrow_left: str
    arrow_lower_left: str
    arrow_lower_right: str
    arrow_right: str
    arrow_right_hook: str
    arrow_up: str
    arrow_up_down: str
    arrow_up_small: str
    arrow_upper_left: str
    arrow_upper_right: str
    arrows_clockwise: str
    arrows_counterclockwise: str
    art: str
    articulated_lorry: str
    artificial_satellite: str
    artist: str
    aruba: str
    ascension_island: str
    asterisk: str
    astonished: str
    astronaut: str
    athletic_shoe: str
    atm: str
    atom: str
    atom_symbol: str
    australia: str
    austria: str
    auto_rickshaw: str
    avocado: str
    axe: str
    azerbaijan: str
    b: str
    baby: str
    baby_bottle: str
    baby_chick: str
    baby_symbol: str
    back: str
    bacon: str
    badger: str
    badminton: str
    bagel: str
    baggage_claim: str
    baguette_bread: str
    bahamas: str
    bahrain: str
    balance_scale: str
    bald_man: str
    bald_woman: str
    ballet_shoes: str
    balloon: str
    ballot_box: str
    ballot_box_with_check: str
    bamboo: str
    banana: str
    bangbang: str
    bangladesh: str
    banjo: str
    bank: str
    bar_chart: str
    barbados: str
    barber: str
    baseball: str
    basecamp: str
    basecampy: str
    basket: str
    basketball: str
    basketball_man: str
    basketball_woman: str
    bat: str
    bath: str
    bathtub: str
    battery: str
    beach_umbrella: str
    bear: str
    bearded_person: str
    beaver: str
    bed: str
    bee: str
    beer: str
    beers: str
    beetle: str
    beginner: str
    belarus: str
    belgium: str
    belize: str
    bell: str
    bell_pepper: str
    bellhop_bell: str
    benin: str
    bento: str
    bermuda: str
    beverage_box: str
    bhutan: str
    bicyclist: str
    bike: str
    biking_man: str
    biking_woman: str
    bikini: str
    billed_cap: str
    biohazard: str
    bird: str
    birthday: str
    bison: str
    black_cat: str
    black_circle: str
    black_flag: str
    black_heart: str
    black_joker: str
    black_large_square: str
    black_medium_small_square: str
    black_medium_square: str
    black_nib: str
    black_small_square: str
    black_square_button: str
    blond_haired_man: str
    blond_haired_person: str
    blond_haired_woman: str
    blonde_woman: str
    blossom: str
    blowfish: str
    blue_book: str
    blue_car: str
    blue_heart: str
    blue_square: str
    blueberries: str
    blush: str
    boar: str
    boat: str
    bolivia: str
    bomb: str
    bone: str
    book: str
    bookmark: str
    bookmark_tabs: str
    books: str
    boom: str
    boomerang: str
    boot: str
    bosnia_herzegovina: str
    botswana: str
    bouncing_ball_man: str
    bouncing_ball_person: str
    bouncing_ball_woman: str
    bouquet: str
    bouvet_island: str
    bow: str
    bow_and_arrow: str
    bowing_man: str
    bowing_woman: str
    bowl_with_spoon: str
    bowling: str
    bowtie: str
    boxing_glove: str
    boy: str
    brain: str
    brazil: str
    bread: str
    breast_feeding: str
    bricks: str
    bride_with_veil: str
    bridge_at_night: str
    briefcase: str
    british_indian_ocean_territory: str
    british_virgin_islands: str
    broccoli: str
    broken_heart: str
    broom: str
    brown_circle: str
    brown_heart: str
    brown_square: str
    brunei: str
    bubble_tea: str
    bucket: str
    bug: str
    building_construction: str
    bulb: str
    bulgaria: str
    bullettrain_front: str
    bullettrain_side: str
    burkina_faso: str
    burrito: str
    burundi: str
    bus: str
    business_suit_levitating: str
    busstop: str
    bust_in_silhouette: str
    busts_in_silhouette: str
    butter: str
    butterfly: str
    cactus: str
    cake: str
    calendar: str
    call_me_hand: str
    calling: str
    cambodia: str
    camel: str
    camera: str
    camera_flash: str
    cameroon: str
    camping: str
    canada: str
    canary_islands: str
    cancer: str
    candle: str
    candy: str
    canned_food: str
    canoe: str
    cape_verde: str
    capital_abcd: str
    capricorn: str
    car: str
    card_file_box: str
    card_index: str
    card_index_dividers: str
    caribbean_netherlands: str
    carousel_horse: str
    carpentry_saw: str
    carrot: str
    cartwheeling: str
    cat: str
    cat2: str
    cayman_islands: str
    cd: str
    central_african_republic: str
    ceuta_melilla: str
    chad: str
    chains: str
    chair: str
    champagne: str
    chart: str
    chart_with_downwards_trend: str
    chart_with_upwards_trend: str
    checkered_flag: str
    cheese: str
    cherries: str
    cherry_blossom: str
    chess_pawn: str
    chestnut: str
    chicken: str
    child: str
    children_crossing: str
    chile: str
    chipmunk: str
    chocolate_bar: str
    chopsticks: str
    christmas_island: str
    christmas_tree: str
    church: str
    cinema: str
    circus_tent: str
    city_sunrise: str
    city_sunset: str
    cityscape: str
    cl: str
    clamp: str
    clap: str
    clapper: str
    classical_building: str
    climbing: str
    climbing_man: str
    climbing_woman: str
    clinking_glasses: str
    clipboard: str
    clipperton_island: str
    clock1: str
    clock10: str
    clock1030: str
    clock11: str
    clock1130: str
    clock12: str
    clock1230: str
    clock130: str
    clock2: str
    clock230: str
    clock3: str
    clock330: str
    clock4: str
    clock430: str
    clock5: str
    clock530: str
    clock6: str
    clock630: str
    clock7: str
    clock730: str
    clock8: str
    clock830: str
    clock9: str
    clock930: str
    closed_book: str
    closed_lock_with_key: str
    closed_umbrella: str
    cloud: str
    cloud_with_lightning: str
    cloud_with_lightning_and_rain: str
    cloud_with_rain: str
    cloud_with_snow: str
    clown_face: str
    clubs: str
    cn: str
    coat: str
    cockroach: str
    cocktail: str
    coconut: str
    cocos_islands: str
    coffee: str
    coffin: str
    coin: str
    cold_face: str
    cold_sweat: str
    collision: str
    colombia: str
    comet: str
    comoros: str
    compass: str
    computer: str
    computer_mouse: str
    confetti_ball: str
    confounded: str
    confused: str
    congo_brazzaville: str
    congo_kinshasa: str
    congratulations: str
    construction: str
    construction_worker: str
    construction_worker_man: str
    construction_worker_woman: str
    control_knobs: str
    convenience_store: str
    cook: str
    cook_islands: str
    cookie: str
    cool: str
    cop: str
    copilot: str
    copyright: str
    corn: str
    costa_rica: str
    cote_divoire: str
    couch_and_lamp: str
    couple: str
    couple_with_heart: str
    couple_with_heart_man_man: str
    couple_with_heart_woman_man: str
    couple_with_heart_woman_woman: str
    couplekiss: str
    couplekiss_man_man: str
    couplekiss_man_woman: str
    couplekiss_woman_woman: str
    cow: str
    cow2: str
    cowboy_hat_face: str
    crab: str
    crayon: str
    credit_card: str
    crescent_moon: str
    cricket: str
    cricket_game: str
    croatia: str
    crocodile: str
    croissant: str
    crossed_fingers: str
    crossed_flags: str
    crossed_swords: str
    crown: str
    cry: str
    crying_cat_face: str
    crystal_ball: str
    cuba: str
    cucumber: str
    cup_with_straw: str
    cupcake: str
    cupid: str
    curacao: str
    curling_stone: str
    curly_haired_man: str
    curly_haired_woman: str
    curly_loop: str
    currency_exchange: str
    curry: str
    cursing_face: str
    custard: str
    customs: str
    cut_of_meat: str
    cyclone: str
    cyprus: str
    czech_republic: str
    dagger: str
    dancer: str
    dancers: str
    dancing_men: str
    dancing_women: str
    dango: str
    dark_sunglasses: str
    dart: str
    dash: str
    date: str
    de: str
    deaf_man: str
    deaf_person: str
    deaf_woman: str
    deciduous_tree: str
    deer: str
    denmark: str
    department_store: str
    dependabot: str
    derelict_house: str
    desert: str
    desert_island: str
    desktop_computer: str
    detective: str
    diamond_shape_with_a_dot_inside: str
    diamonds: str
    diego_garcia: str
    disappointed: str
    disappointed_relieved: str
    disguised_face: str
    diving_mask: str
    diya_lamp: str
    dizzy: str
    dizzy_face: str
    djibouti: str
    dna: str
    do_not_litter: str
    dodo: str
    dog: str
    dog2: str
    dollar: str
    dolls: str
    dolphin: str
    dominica: str
    dominican_republic: str
    door: str
    doughnut: str
    dove: str
    dragon: str
    dragon_face: str
    dress: str
    dromedary_camel: str
    drooling_face: str
    drop_of_blood: str
    droplet: str
    drum: str
    duck: str
    dumpling: str
    dvd: str
    eagle: str
    ear: str
    ear_of_rice: str
    ear_with_hearing_aid: str
    earth_africa: str
    earth_americas: str
    earth_asia: str
    ecuador: str
    egg: str
    eggplant: str
    egypt: str
    eight: str
    eight_pointed_black_star: str
    eight_spoked_asterisk: str
    eject_button: str
    el_salvador: str
    electric_plug: str
    electron: str
    elephant: str
    elevator: str
    elf: str
    elf_man: str
    elf_woman: str
    email: str
    end: str
    england: str
    envelope: str
    envelope_with_arrow: str
    equatorial_guinea: str
    eritrea: str
    es: str
    estonia: str
    ethiopia: str
    eu: str
    euro: str
    european_castle: str
    european_post_office: str
    european_union: str
    evergreen_tree: str
    exclamation: str
    exploding_head: str
    expressionless: str
    eye: str
    eye_speech_bubble: str
    eyeglasses: str
    eyes: str
    face_exhaling: str
    face_in_clouds: str
    face_with_head_bandage: str
    face_with_spiral_eyes: str
    face_with_thermometer: str
    facepalm: str
    facepunch: str
    factory: str
    factory_worker: str
    fairy: str
    fairy_man: str
    fairy_woman: str
    falafel: str
    falkland_islands: str
    fallen_leaf: str
    family: str
    family_man_boy: str
    family_man_boy_boy: str
    family_man_girl: str
    family_man_girl_boy: str
    family_man_girl_girl: str
    family_man_man_boy: str
    family_man_man_boy_boy: str
    family_man_man_girl: str
    family_man_man_girl_boy: str
    family_man_man_girl_girl: str
    family_man_woman_boy: str
    family_man_woman_boy_boy: str
    family_man_woman_girl: str
    family_man_woman_girl_boy: str
    family_man_woman_girl_girl: str
    family_woman_boy: str
    family_woman_boy_boy: str
    family_woman_girl: str
    family_woman_girl_boy: str
    family_woman_girl_girl: str
    family_woman_woman_boy: str
    family_woman_woman_boy_boy: str
    family_woman_woman_girl: str
    family_woman_woman_girl_boy: str
    family_woman_woman_girl_girl: str
    farmer: str
    faroe_islands: str
    fast_forward: str
    fax: str
    fearful: str
    feather: str
    feelsgood: str
    feet: str
    female_detective: str
    female_sign: str
    ferris_wheel: str
    ferry: str
    field_hockey: str
    fiji: str
    file_cabinet: str
    file_folder: str
    film_projector: str
    film_strip: str
    finland: str
    finnadie: str
    fire: str
    fire_engine: str
    fire_extinguisher: str
    firecracker: str
    firefighter: str
    fireworks: str
    first_quarter_moon: str
    first_quarter_moon_with_face: str
    fish: str
    fish_cake: str
    fishing_pole_and_fish: str
    fishsticks: str
    fist: str
    fist_left: str
    fist_oncoming: str
    fist_raised: str
    fist_right: str
    five: str
    flags: str
    flamingo: str
    flashlight: str
    flat_shoe: str
    flatbread: str
    fleur_de_lis: str
    flight_arrival: str
    flight_departure: str
    flipper: str
    floppy_disk: str
    flower_playing_cards: str
    flushed: str
    fly: str
    flying_disc: str
    flying_saucer: str
    fog: str
    foggy: str
    fondue: str
    foot: str
    football: str
    footprints: str
    fork_and_knife: str
    fortune_cookie: str
    fountain: str
    fountain_pen: str
    four: str
    four_leaf_clover: str
    fox_face: str
    fr: str
    framed_picture: str
    free: str
    french_guiana: str
    french_polynesia: str
    french_southern_territories: str
    fried_egg: str
    fried_shrimp: str
    fries: str
    frog: str
    frowning: str
    frowning_face: str
    frowning_man: str
    frowning_person: str
    frowning_woman: str
    fu: str
    fuelpump: str
    full_moon: str
    full_moon_with_face: str
    funeral_urn: str
    gabon: str
    gambia: str
    game_die: str
    garlic: str
    gb: str
    gear: str
    gem: str
    gemini: str
    genie: str
    genie_man: str
    genie_woman: str
    georgia: str
    ghana: str
    ghost: str
    gibraltar: str
    gift: str
    gift_heart: str
    giraffe: str
    girl: str
    globe_with_meridians: str
    gloves: str
    goal_net: str
    goat: str
    goberserk: str
    godmode: str
    goggles: str
    golf: str
    golfing: str
    golfing_man: str
    golfing_woman: str
    gorilla: str
    grapes: str
    greece: str
    green_apple: str
    green_book: str
    green_circle: str
    green_heart: str
    green_salad: str
    green_square: str
    greenland: str
    grenada: str
    grey_exclamation: str
    grey_question: str
    grimacing: str
    grin: str
    grinning: str
    guadeloupe: str
    guam: str
    guard: str
    guardsman: str
    guardswoman: str
    guatemala: str
    guernsey: str
    guide_dog: str
    guinea: str
    guinea_bissau: str
    guitar: str
    gun: str
    guyana: str
    haircut: str
    haircut_man: str
    haircut_woman: str
    haiti: str
    hamburger: str
    hammer: str
    hammer_and_pick: str
    hammer_and_wrench: str
    hamster: str
    hand: str
    hand_over_mouth: str
    handbag: str
    handball_person: str
    handshake: str
    hankey: str
    hash: str
    hatched_chick: str
    hatching_chick: str
    headphones: str
    headstone: str
    health_worker: str
    hear_no_evil: str
    heard_mcdonald_islands: str
    heart: str
    heart_decoration: str
    heart_eyes: str
    heart_eyes_cat: str
    heart_on_fire: str
    heartbeat: str
    heartpulse: str
    hearts: str
    heavy_check_mark: str
    heavy_division_sign: str
    heavy_dollar_sign: str
    heavy_exclamation_mark: str
    heavy_heart_exclamation: str
    heavy_minus_sign: str
    heavy_multiplication_x: str
    heavy_plus_sign: str
    hedgehog: str
    helicopter: str
    herb: str
    hibiscus: str
    high_brightness: str
    high_heel: str
    hiking_boot: str
    hindu_temple: str
    hippopotamus: str
    hocho: str
    hole: str
    honduras: str
    honey_pot: str
    honeybee: str
    hong_kong: str
    hook: str
    horse: str
    horse_racing: str
    hospital: str
    hot_face: str
    hot_pepper: str
    hotdog: str
    hotel: str
    hotsprings: str
    hourglass: str
    hourglass_flowing_sand: str
    house: str
    house_with_garden: str
    houses: str
    hugs: str
    hungary: str
    hurtrealbad: str
    hushed: str
    hut: str
    ice_cream: str
    ice_cube: str
    ice_hockey: str
    ice_skate: str
    icecream: str
    iceland: str
    id: str
    ideograph_advantage: str
    imp: str
    inbox_tray: str
    incoming_envelope: str
    india: str
    indonesia: str
    infinity: str
    information_desk_person: str
    information_source: str
    innocent: str
    interrobang: str
    iphone: str
    iran: str
    iraq: str
    ireland: str
    isle_of_man: str
    israel: str
    it: str
    izakaya_lantern: str
    jack_o_lantern: str
    jamaica: str
    japan: str
    japanese_castle: str
    japanese_goblin: str
    japanese_ogre: str
    jeans: str
    jersey: str
    jigsaw: str
    jordan: str
    joy: str
    joy_cat: str
    joystick: str
    jp: str
    judge: str
    juggling_person: str
    kangaroo: str
    kazakhstan: str
    kenya: str
    key: str
    keyboard: str
    keycap_ten: str
    kick_scooter: str
    kimono: str
    kiribati: str
    kiss: str
    kissing: str
    kissing_cat: str
    kissing_closed_eyes: str
    kissing_heart: str
    kissing_smiling_eyes: str
    kite: str
    kiwi_fruit: str
    kneeling_man: str
    kneeling_person: str
    kneeling_woman: str
    knife: str
    knot: str
    koala: str
    koko: str
    kosovo: str
    kr: str
    kuwait: str
    kyrgyzstan: str
    lab_coat: str
    label: str
    lacrosse: str
    ladder: str
    lady_beetle: str
    lantern: str
    laos: str
    large_blue_circle: str
    large_blue_diamond: str
    large_orange_diamond: str
    last_quarter_moon: str
    last_quarter_moon_with_face: str
    latin_cross: str
    latvia: str
    laughing: str
    leafy_green: str
    leaves: str
    lebanon: str
    ledger: str
    left_luggage: str
    left_right_arrow: str
    left_speech_bubble: str
    leftwards_arrow_with_hook: str
    leg: str
    lemon: str
    leo: str
    leopard: str
    lesotho: str
    level_slider: str
    liberia: str
    libra: str
    libya: str
    liechtenstein: str
    light_rail: str
    link: str
    lion: str
    lips: str
    lipstick: str
    lithuania: str
    lizard: str
    llama: str
    lobster: str
    lock: str
    lock_with_ink_pen: str
    lollipop: str
    long_drum: str
    loop: str
    lotion_bottle: str
    lotus_position: str
    lotus_position_man: str
    lotus_position_woman: str
    loud_sound: str
    loudspeaker: str
    love_hotel: str
    love_letter: str
    love_you_gesture: str
    low_brightness: str
    luggage: str
    lungs: str
    luxembourg: str
    lying_face: str
    m: str
    macau: str
    macedonia: str
    madagascar: str
    mag: str
    mag_right: str
    mage: str
    mage_man: str
    mage_woman: str
    magic_wand: str
    magnet: str
    mahjong: str
    mailbox: str
    mailbox_closed: str
    mailbox_with_mail: str
    mailbox_with_no_mail: str
    malawi: str
    malaysia: str
    maldives: str
    male_detective: str
    male_sign: str
    mali: str
    malta: str
    mammoth: str
    man: str
    man_artist: str
    man_astronaut: str
    man_beard: str
    man_cartwheeling: str
    man_cook: str
    man_dancing: str
    man_facepalming: str
    man_factory_worker: str
    man_farmer: str
    man_feeding_baby: str
    man_firefighter: str
    man_health_worker: str
    man_in_manual_wheelchair: str
    man_in_motorized_wheelchair: str
    man_in_tuxedo: str
    man_judge: str
    man_juggling: str
    man_mechanic: str
    man_office_worker: str
    man_pilot: str
    man_playing_handball: str
    man_playing_water_polo: str
    man_scientist: str
    man_shrugging: str
    man_singer: str
    man_student: str
    man_teacher: str
    man_technologist: str
    man_with_gua_pi_mao: str
    man_with_probing_cane: str
    man_with_turban: str
    man_with_veil: str
    mandarin: str
    mango: str
    mans_shoe: str
    mantelpiece_clock: str
    manual_wheelchair: str
    maple_leaf: str
    marshall_islands: str
    martial_arts_uniform: str
    martinique: str
    mask: str
    massage: str
    massage_man: str
    massage_woman: str
    mate: str
    mauritania: str
    mauritius: str
    mayotte: str
    meat_on_bone: str
    mechanic: str
    mechanical_arm: str
    mechanical_leg: str
    medal_military: str
    medal_sports: str
    medical_symbol: str
    mega: str
    melon: str
    memo: str
    men_wrestling: str
    mending_heart: str
    menorah: str
    mens: str
    mermaid: str
    merman: str
    merperson: str
    metal: str
    metro: str
    mexico: str
    microbe: str
    micronesia: str
    microphone: str
    microscope: str
    middle_finger: str
    military_helmet: str
    milk_glass: str
    milky_way: str
    minibus: str
    minidisc: str
    mirror: str
    mobile_phone_off: str
    moldova: str
    monaco: str
    money_mouth_face: str
    money_with_wings: str
    moneybag: str
    mongolia: str
    monkey: str
    monkey_face: str
    monocle_face: str
    monorail: str
    montenegro: str
    montserrat: str
    moon: str
    moon_cake: str
    morocco: str
    mortar_board: str
    mosque: str
    mosquito: str
    motor_boat: str
    motor_scooter: str
    motorcycle: str
    motorized_wheelchair: str
    motorway: str
    mount_fuji: str
    mountain: str
    mountain_bicyclist: str
    mountain_biking_man: str
    mountain_biking_woman: str
    mountain_cableway: str
    mountain_railway: str
    mountain_snow: str
    mouse: str
    mouse2: str
    mouse_trap: str
    movie_camera: str
    moyai: str
    mozambique: str
    mrs_claus: str
    muscle: str
    mushroom: str
    musical_keyboard: str
    musical_note: str
    musical_score: str
    mute: str
    mx_claus: str
    myanmar: str
    nail_care: str
    name_badge: str
    namibia: str
    national_park: str
    nauru: str
    nauseated_face: str
    nazar_amulet: str
    neckbeard: str
    necktie: str
    negative_squared_cross_mark: str
    nepal: str
    nerd_face: str
    nesting_dolls: str
    netherlands: str
    neutral_face: str
    new: str
    new_caledonia: str
    new_moon: str
    new_moon_with_face: str
    new_zealand: str
    newspaper: str
    newspaper_roll: str
    next_track_button: str
    ng: str
    ng_man: str
    ng_woman: str
    nicaragua: str
    niger: str
    nigeria: str
    night_with_stars: str
    nine: str
    ninja: str
    niue: str
    no_bell: str
    no_bicycles: str
    no_entry: str
    no_entry_sign: str
    no_good: str
    no_good_man: str
    no_good_woman: str
    no_mobile_phones: str
    no_mouth: str
    no_pedestrians: str
    no_smoking: str
    nonpotable_water: str
    norfolk_island: str
    north_korea: str
    northern_mariana_islands: str
    norway: str
    nose: str
    notebook: str
    notebook_with_decorative_cover: str
    notes: str
    nut_and_bolt: str
    o: str
    o2: str
    ocean: str
    octocat: str
    octopus: str
    oden: str
    office: str
    office_worker: str
    oil_drum: str
    ok: str
    ok_hand: str
    ok_man: str
    ok_person: str
    ok_woman: str
    old_key: str
    older_adult: str
    older_man: str
    older_woman: str
    olive: str
    om: str
    oman: str
    on: str
    oncoming_automobile: str
    oncoming_bus: str
    oncoming_police_car: str
    oncoming_taxi: str
    one: str
    one_piece_swimsuit: str
    onion: str
    open_book: str
    open_file_folder: str
    open_hands: str
    open_mouth: str
    open_umbrella: str
    ophiuchus: str
    orange: str
    orange_book: str
    orange_circle: str
    orange_heart: str
    orange_square: str
    orangutan: str
    orthodox_cross: str
    otter: str
    outbox_tray: str
    owl: str
    ox: str
    oyster: str
    package: str
    page_facing_up: str
    page_with_curl: str
    pager: str
    paintbrush: str
    pakistan: str
    palau: str
    palestinian_territories: str
    palm_tree: str
    palms_up_together: str
    panama: str
    pancakes: str
    panda_face: str
    paperclip: str
    paperclips: str
    papua_new_guinea: str
    parachute: str
    paraguay: str
    parasol_on_ground: str
    parking: str
    parrot: str
    part_alternation_mark: str
    partly_sunny: str
    partying_face: str
    passenger_ship: str
    passport_control: str
    pause_button: str
    paw_prints: str
    peace_symbol: str
    peach: str
    peacock: str
    peanuts: str
    pear: str
    pen: str
    pencil: str
    pencil2: str
    penguin: str
    pensive: str
    people_holding_hands: str
    people_hugging: str
    performing_arts: str
    persevere: str
    person_bald: str
    person_curly_hair: str
    person_feeding_baby: str
    person_fencing: str
    person_in_manual_wheelchair: str
    person_in_motorized_wheelchair: str
    person_in_tuxedo: str
    person_red_hair: str
    person_white_hair: str
    person_with_probing_cane: str
    person_with_turban: str
    person_with_veil: str
    peru: str
    petri_dish: str
    philippines: str
    phone: str
    pick: str
    pickup_truck: str
    pie: str
    pig: str
    pig2: str
    pig_nose: str
    pill: str
    pilot: str
    pinata: str
    pinched_fingers: str
    pinching_hand: str
    pineapple: str
    ping_pong: str
    pirate_flag: str
    pisces: str
    pitcairn_islands: str
    pizza: str
    placard: str
    place_of_worship: str
    plate_with_cutlery: str
    play_or_pause_button: str
    pleading_face: str
    plunger: str
    point_down: str
    point_left: str
    point_right: str
    point_up: str
    point_up_2: str
    poland: str
    polar_bear: str
    police_car: str
    police_officer: str
    policeman: str
    policewoman: str
    poodle: str
    poop: str
    popcorn: str
    portugal: str
    post_office: str
    postal_horn: str
    postbox: str
    potable_water: str
    potato: str
    potted_plant: str
    pouch: str
    poultry_leg: str
    pound: str
    pout: str
    pouting_cat: str
    pouting_face: str
    pouting_man: str
    pouting_woman: str
    pray: str
    prayer_beads: str
    pregnant_woman: str
    pretzel: str
    previous_track_button: str
    prince: str
    princess: str
    printer: str
    probing_cane: str
    puerto_rico: str
    punch: str
    purple_circle: str
    purple_heart: str
    purple_square: str
    purse: str
    pushpin: str
    put_litter_in_its_place: str
    qatar: str
    question: str
    rabbit: str
    rabbit2: str
    raccoon: str
    racehorse: str
    racing_car: str
    radio: str
    radio_button: str
    radioactive: str
    rage: str
    rage1: str
    rage2: str
    rage3: str
    rage4: str
    railway_car: str
    railway_track: str
    rainbow: str
    rainbow_flag: str
    raised_back_of_hand: str
    raised_eyebrow: str
    raised_hand: str
    raised_hand_with_fingers_splayed: str
    raised_hands: str
    raising_hand: str
    raising_hand_man: str
    raising_hand_woman: str
    ram: str
    ramen: str
    rat: str
    razor: str
    receipt: str
    record_button: str
    recycle: str
    red_car: str
    red_circle: str
    red_envelope: str
    red_haired_man: str
    red_haired_woman: str
    red_square: str
    registered: str
    relaxed: str
    relieved: str
    reminder_ribbon: str
    repeat: str
    repeat_one: str
    rescue_worker_helmet: str
    restroom: str
    reunion: str
    revolving_hearts: str
    rewind: str
    rhinoceros: str
    ribbon: str
    rice: str
    rice_ball: str
    rice_cracker: str
    rice_scene: str
    right_anger_bubble: str
    ring: str
    ringed_planet: str
    robot: str
    rock: str
    rocket: str
    rofl: str
    roll_eyes: str
    roll_of_paper: str
    roller_coaster: str
    roller_skate: str
    romania: str
    rooster: str
    rose: str
    rosette: str
    rotating_light: str
    round_pushpin: str
    rowboat: str
    rowing_man: str
    rowing_woman: str
    ru: str
    rugby_football: str
    runner: str
    running: str
    running_man: str
    running_shirt_with_sash: str
    running_woman: str
    rwanda: str
    sa: str
    safety_pin: str
    safety_vest: str
    sagittarius: str
    sailboat: str
    sake: str
    salt: str
    samoa: str
    san_marino: str
    sandal: str
    sandwich: str
    santa: str
    sao_tome_principe: str
    sari: str
    sassy_man: str
    sassy_woman: str
    satellite: str
    satisfied: str
    saudi_arabia: str
    sauna_man: str
    sauna_person: str
    sauna_woman: str
    sauropod: str
    saxophone: str
    scarf: str
    school: str
    school_satchel: str
    scientist: str
    scissors: str
    scorpion: str
    scorpius: str
    scotland: str
    scream: str
    scream_cat: str
    screwdriver: str
    scroll: str
    seal: str
    seat: str
    secret: str
    see_no_evil: str
    seedling: str
    selfie: str
    senegal: str
    serbia: str
    service_dog: str
    seven: str
    sewing_needle: str
    seychelles: str
    shallow_pan_of_food: str
    shamrock: str
    shark: str
    shaved_ice: str
    sheep: str
    shell: str
    shield: str
    shinto_shrine: str
    ship: str
    shipit: str
    shirt: str
    shoe: str
    shopping: str
    shopping_cart: str
    shorts: str
    shower: str
    shrimp: str
    shrug: str
    shushing_face: str
    sierra_leone: str
    signal_strength: str
    singapore: str
    singer: str
    sint_maarten: str
    six: str
    six_pointed_star: str
    skateboard: str
    ski: str
    skier: str
    skull: str
    skull_and_crossbones: str
    skunk: str
    sled: str
    sleeping: str
    sleeping_bed: str
    sleepy: str
    slightly_frowning_face: str
    slightly_smiling_face: str
    slot_machine: str
    sloth: str
    slovakia: str
    slovenia: str
    small_airplane: str
    small_blue_diamond: str
    small_orange_diamond: str
    small_red_triangle: str
    small_red_triangle_down: str
    smile: str
    smile_cat: str
    smiley: str
    smiley_cat: str
    smiling_face_with_tear: str
    smiling_face_with_three_hearts: str
    smiling_imp: str
    smirk: str
    smirk_cat: str
    smoking: str
    snail: str
    snake: str
    sneezing_face: str
    snowboarder: str
    snowflake: str
    snowman: str
    snowman_with_snow: str
    soap: str
    sob: str
    soccer: str
    socks: str
    softball: str
    solomon_islands: str
    somalia: str
    soon: str
    sos: str
    sound: str
    south_africa: str
    south_georgia_south_sandwich_islands: str
    south_sudan: str
    space_invader: str
    spades: str
    spaghetti: str
    sparkle: str
    sparkler: str
    sparkles: str
    sparkling_heart: str
    speak_no_evil: str
    speaker: str
    speaking_head: str
    speech_balloon: str
    speedboat: str
    spider: str
    spider_web: str
    spiral_calendar: str
    spiral_notepad: str
    sponge: str
    spoon: str
    squid: str
    sri_lanka: str
    st_barthelemy: str
    st_helena: str
    st_kitts_nevis: str
    st_lucia: str
    st_martin: str
    st_pierre_miquelon: str
    st_vincent_grenadines: str
    stadium: str
    standing_man: str
    standing_person: str
    standing_woman: str
    star: str
    star2: str
    star_and_crescent: str
    star_of_david: str
    star_struck: str
    stars: str
    station: str
    statue_of_liberty: str
    steam_locomotive: str
    stethoscope: str
    stew: str
    stop_button: str
    stop_sign: str
    stopwatch: str
    straight_ruler: str
    strawberry: str
    stuck_out_tongue: str
    stuck_out_tongue_closed_eyes: str
    stuck_out_tongue_winking_eye: str
    student: str
    studio_microphone: str
    stuffed_flatbread: str
    sudan: str
    sun_behind_large_cloud: str
    sun_behind_rain_cloud: str
    sun_behind_small_cloud: str
    sun_with_face: str
    sunflower: str
    sunglasses: str
    sunny: str
    sunrise: str
    sunrise_over_mountains: str
    superhero: str
    superhero_man: str
    superhero_woman: str
    supervillain: str
    supervillain_man: str
    supervillain_woman: str
    surfer: str
    surfing_man: str
    surfing_woman: str
    suriname: str
    sushi: str
    suspect: str
    suspension_railway: str
    svalbard_jan_mayen: str
    swan: str
    swaziland: str
    sweat: str
    sweat_drops: str
    sweat_smile: str
    sweden: str
    sweet_potato: str
    swim_brief: str
    swimmer: str
    swimming_man: str
    swimming_woman: str
    switzerland: str
    symbols: str
    synagogue: str
    syria: str
    syringe: str
    taco: str
    tada: str
    taiwan: str
    tajikistan: str
    takeout_box: str
    tamale: str
    tanabata_tree: str
    tangerine: str
    tanzania: str
    taurus: str
    taxi: str
    tea: str
    teacher: str
    teapot: str
    technologist: str
    teddy_bear: str
    telephone: str
    telephone_receiver: str
    telescope: str
    tennis: str
    tent: str
    test_tube: str
    thailand: str
    thermometer: str
    thinking: str
    thong_sandal: str
    thought_balloon: str
    thread: str
    three: str
    thumbsdown: str
    thumbsup: str
    ticket: str
    tickets: str
    tiger: str
    tiger2: str
    timer_clock: str
    timor_leste: str
    tipping_hand_man: str
    tipping_hand_person: str
    tipping_hand_woman: str
    tired_face: str
    tm: str
    togo: str
    toilet: str
    tokelau: str
    tokyo_tower: str
    tomato: str
    tonga: str
    tongue: str
    toolbox: str
    tooth: str
    toothbrush: str
    top: str
    tophat: str
    tornado: str
    tr: str
    trackball: str
    tractor: str
    traffic_light: str
    train: str
    train2: str
    tram: str
    transgender_flag: str
    transgender_symbol: str
    trex: str
    triangular_flag_on_post: str
    triangular_ruler: str
    trident: str
    trinidad_tobago: str
    tristan_da_cunha: str
    triumph: str
    trolleybus: str
    trollface: str
    trophy: str
    tropical_drink: str
    tropical_fish: str
    truck: str
    trumpet: str
    tshirt: str
    tulip: str
    tumbler_glass: str
    tunisia: str
    turkey: str
    turkmenistan: str
    turks_caicos_islands: str
    turtle: str
    tuvalu: str
    tv: str
    twisted_rightwards_arrows: str
    two: str
    two_hearts: str
    two_men_holding_hands: str
    two_women_holding_hands: str
    u5272: str
    u5408: str
    u55b6: str
    u6307: str
    u6708: str
    u6709: str
    u6e80: str
    u7121: str
    u7533: str
    u7981: str
    u7a7a: str
    uganda: str
    uk: str
    ukraine: str
    umbrella: str
    unamused: str
    underage: str
    unicorn: str
    united_arab_emirates: str
    united_nations: str
    unlock: str
    up: str
    upside_down_face: str
    uruguay: str
    us: str
    us_outlying_islands: str
    us_virgin_islands: str
    uzbekistan: str
    v: str
    vampire: str
    vampire_man: str
    vampire_woman: str
    vanuatu: str
    vatican_city: str
    venezuela: str
    vertical_traffic_light: str
    vhs: str
    vibration_mode: str
    video_camera: str
    video_game: str
    vietnam: str
    violin: str
    virgo: str
    volcano: str
    volleyball: str
    vomiting_face: str
    vs: str
    vulcan_salute: str
    waffle: str
    wales: str
    walking: str
    walking_man: str
    walking_woman: str
    wallis_futuna: str
    waning_crescent_moon: str
    waning_gibbous_moon: str
    warning: str
    wastebasket: str
    watch: str
    water_buffalo: str
    water_polo: str
    watermelon: str
    wave: str
    wavy_dash: str
    waxing_crescent_moon: str
    waxing_gibbous_moon: str
    wc: str
    weary: str
    wedding: str
    weight_lifting: str
    weight_lifting_man: str
    weight_lifting_woman: str
    western_sahara: str
    whale: str
    whale2: str
    wheel_of_dharma: str
    wheelchair: str
    white_check_mark: str
    white_circle: str
    white_flag: str
    white_flower: str
    white_haired_man: str
    white_haired_woman: str
    white_heart: str
    white_large_square: str
    white_medium_small_square: str
    white_medium_square: str
    white_small_square: str
    white_square_button: str
    wilted_flower: str
    wind_chime: str
    wind_face: str
    window: str
    wine_glass: str
    wink: str
    wolf: str
    woman: str
    woman_artist: str
    woman_astronaut: str
    woman_beard: str
    woman_cartwheeling: str
    woman_cook: str
    woman_dancing: str
    woman_facepalming: str
    woman_factory_worker: str
    woman_farmer: str
    woman_feeding_baby: str
    woman_firefighter: str
    woman_health_worker: str
    woman_in_manual_wheelchair: str
    woman_in_motorized_wheelchair: str
    woman_in_tuxedo: str
    woman_judge: str
    woman_juggling: str
    woman_mechanic: str
    woman_office_worker: str
    woman_pilot: str
    woman_playing_handball: str
    woman_playing_water_polo: str
    woman_scientist: str
    woman_shrugging: str
    woman_singer: str
    woman_student: str
    woman_teacher: str
    woman_technologist: str
    woman_with_headscarf: str
    woman_with_probing_cane: str
    woman_with_turban: str
    woman_with_veil: str
    womans_clothes: str
    womans_hat: str
    women_wrestling: str
    womens: str
    wood: str
    woozy_face: str
    world_map: str
    worm: str
    worried: str
    wrench: str
    wrestling: str
    writing_hand: str
    x: str
    yarn: str
    yawning_face: str
    yellow_circle: str
    yellow_heart: str
    yellow_square: str
    yemen: str
    yen: str
    yin_yang: str
    yo_yo: str
    yum: str
    zambia: str
    zany_face: str
    zap: str
    zebra: str
    zero: str
    zimbabwe: str
    zipper_mouth_face: str
    zombie: str
    zombie_man: str
    zombie_woman: str
    zzz: str


class EmojiLoadMatchRequired(TypedDict):
    id: str


class EmojiLoadMatch(EmojiLoadMatchRequired, total=False):
    a: str
    ab: str
    abacus: str
    abc: str
    abcd: str
    accept: str
    accessibility: str
    accordion: str
    adhesive_bandage: str
    adult: str
    aerial_tramway: str
    afghanistan: str
    airplane: str
    aland_islands: str
    alarm_clock: str
    albania: str
    alembic: str
    algeria: str
    alien: str
    ambulance: str
    american_samoa: str
    amphora: str
    anatomical_heart: str
    anchor: str
    andorra: str
    angel: str
    anger: str
    angola: str
    angry: str
    anguilla: str
    anguished: str
    ant: str
    antarctica: str
    antigua_barbuda: str
    apple: str
    aquarius: str
    argentina: str
    aries: str
    armenia: str
    arrow_backward: str
    arrow_double_down: str
    arrow_double_up: str
    arrow_down: str
    arrow_down_small: str
    arrow_forward: str
    arrow_heading_down: str
    arrow_heading_up: str
    arrow_left: str
    arrow_lower_left: str
    arrow_lower_right: str
    arrow_right: str
    arrow_right_hook: str
    arrow_up: str
    arrow_up_down: str
    arrow_up_small: str
    arrow_upper_left: str
    arrow_upper_right: str
    arrows_clockwise: str
    arrows_counterclockwise: str
    art: str
    articulated_lorry: str
    artificial_satellite: str
    artist: str
    aruba: str
    ascension_island: str
    asterisk: str
    astonished: str
    astronaut: str
    athletic_shoe: str
    atm: str
    atom: str
    atom_symbol: str
    australia: str
    austria: str
    auto_rickshaw: str
    avocado: str
    axe: str
    azerbaijan: str
    b: str
    baby: str
    baby_bottle: str
    baby_chick: str
    baby_symbol: str
    back: str
    bacon: str
    badger: str
    badminton: str
    bagel: str
    baggage_claim: str
    baguette_bread: str
    bahamas: str
    bahrain: str
    balance_scale: str
    bald_man: str
    bald_woman: str
    ballet_shoes: str
    balloon: str
    ballot_box: str
    ballot_box_with_check: str
    bamboo: str
    banana: str
    bangbang: str
    bangladesh: str
    banjo: str
    bank: str
    bar_chart: str
    barbados: str
    barber: str
    baseball: str
    basecamp: str
    basecampy: str
    basket: str
    basketball: str
    basketball_man: str
    basketball_woman: str
    bat: str
    bath: str
    bathtub: str
    battery: str
    beach_umbrella: str
    bear: str
    bearded_person: str
    beaver: str
    bed: str
    bee: str
    beer: str
    beers: str
    beetle: str
    beginner: str
    belarus: str
    belgium: str
    belize: str
    bell: str
    bell_pepper: str
    bellhop_bell: str
    benin: str
    bento: str
    bermuda: str
    beverage_box: str
    bhutan: str
    bicyclist: str
    bike: str
    biking_man: str
    biking_woman: str
    bikini: str
    billed_cap: str
    biohazard: str
    bird: str
    birthday: str
    bison: str
    black_cat: str
    black_circle: str
    black_flag: str
    black_heart: str
    black_joker: str
    black_large_square: str
    black_medium_small_square: str
    black_medium_square: str
    black_nib: str
    black_small_square: str
    black_square_button: str
    blond_haired_man: str
    blond_haired_person: str
    blond_haired_woman: str
    blonde_woman: str
    blossom: str
    blowfish: str
    blue_book: str
    blue_car: str
    blue_heart: str
    blue_square: str
    blueberries: str
    blush: str
    boar: str
    boat: str
    bolivia: str
    bomb: str
    bone: str
    book: str
    bookmark: str
    bookmark_tabs: str
    books: str
    boom: str
    boomerang: str
    boot: str
    bosnia_herzegovina: str
    botswana: str
    bouncing_ball_man: str
    bouncing_ball_person: str
    bouncing_ball_woman: str
    bouquet: str
    bouvet_island: str
    bow: str
    bow_and_arrow: str
    bowing_man: str
    bowing_woman: str
    bowl_with_spoon: str
    bowling: str
    bowtie: str
    boxing_glove: str
    boy: str
    brain: str
    brazil: str
    bread: str
    breast_feeding: str
    bricks: str
    bride_with_veil: str
    bridge_at_night: str
    briefcase: str
    british_indian_ocean_territory: str
    british_virgin_islands: str
    broccoli: str
    broken_heart: str
    broom: str
    brown_circle: str
    brown_heart: str
    brown_square: str
    brunei: str
    bubble_tea: str
    bucket: str
    bug: str
    building_construction: str
    bulb: str
    bulgaria: str
    bullettrain_front: str
    bullettrain_side: str
    burkina_faso: str
    burrito: str
    burundi: str
    bus: str
    business_suit_levitating: str
    busstop: str
    bust_in_silhouette: str
    busts_in_silhouette: str
    butter: str
    butterfly: str
    cactus: str
    cake: str
    calendar: str
    call_me_hand: str
    calling: str
    cambodia: str
    camel: str
    camera: str
    camera_flash: str
    cameroon: str
    camping: str
    canada: str
    canary_islands: str
    cancer: str
    candle: str
    candy: str
    canned_food: str
    canoe: str
    cape_verde: str
    capital_abcd: str
    capricorn: str
    car: str
    card_file_box: str
    card_index: str
    card_index_dividers: str
    caribbean_netherlands: str
    carousel_horse: str
    carpentry_saw: str
    carrot: str
    cartwheeling: str
    cat: str
    cat2: str
    cayman_islands: str
    cd: str
    central_african_republic: str
    ceuta_melilla: str
    chad: str
    chains: str
    chair: str
    champagne: str
    chart: str
    chart_with_downwards_trend: str
    chart_with_upwards_trend: str
    checkered_flag: str
    cheese: str
    cherries: str
    cherry_blossom: str
    chess_pawn: str
    chestnut: str
    chicken: str
    child: str
    children_crossing: str
    chile: str
    chipmunk: str
    chocolate_bar: str
    chopsticks: str
    christmas_island: str
    christmas_tree: str
    church: str
    cinema: str
    circus_tent: str
    city_sunrise: str
    city_sunset: str
    cityscape: str
    cl: str
    clamp: str
    clap: str
    clapper: str
    classical_building: str
    climbing: str
    climbing_man: str
    climbing_woman: str
    clinking_glasses: str
    clipboard: str
    clipperton_island: str
    clock1: str
    clock10: str
    clock1030: str
    clock11: str
    clock1130: str
    clock12: str
    clock1230: str
    clock130: str
    clock2: str
    clock230: str
    clock3: str
    clock330: str
    clock4: str
    clock430: str
    clock5: str
    clock530: str
    clock6: str
    clock630: str
    clock7: str
    clock730: str
    clock8: str
    clock830: str
    clock9: str
    clock930: str
    closed_book: str
    closed_lock_with_key: str
    closed_umbrella: str
    cloud: str
    cloud_with_lightning: str
    cloud_with_lightning_and_rain: str
    cloud_with_rain: str
    cloud_with_snow: str
    clown_face: str
    clubs: str
    cn: str
    coat: str
    cockroach: str
    cocktail: str
    coconut: str
    cocos_islands: str
    coffee: str
    coffin: str
    coin: str
    cold_face: str
    cold_sweat: str
    collision: str
    colombia: str
    comet: str
    comoros: str
    compass: str
    computer: str
    computer_mouse: str
    confetti_ball: str
    confounded: str
    confused: str
    congo_brazzaville: str
    congo_kinshasa: str
    congratulations: str
    construction: str
    construction_worker: str
    construction_worker_man: str
    construction_worker_woman: str
    control_knobs: str
    convenience_store: str
    cook: str
    cook_islands: str
    cookie: str
    cool: str
    cop: str
    copilot: str
    copyright: str
    corn: str
    costa_rica: str
    cote_divoire: str
    couch_and_lamp: str
    couple: str
    couple_with_heart: str
    couple_with_heart_man_man: str
    couple_with_heart_woman_man: str
    couple_with_heart_woman_woman: str
    couplekiss: str
    couplekiss_man_man: str
    couplekiss_man_woman: str
    couplekiss_woman_woman: str
    cow: str
    cow2: str
    cowboy_hat_face: str
    crab: str
    crayon: str
    credit_card: str
    crescent_moon: str
    cricket: str
    cricket_game: str
    croatia: str
    crocodile: str
    croissant: str
    crossed_fingers: str
    crossed_flags: str
    crossed_swords: str
    crown: str
    cry: str
    crying_cat_face: str
    crystal_ball: str
    cuba: str
    cucumber: str
    cup_with_straw: str
    cupcake: str
    cupid: str
    curacao: str
    curling_stone: str
    curly_haired_man: str
    curly_haired_woman: str
    curly_loop: str
    currency_exchange: str
    curry: str
    cursing_face: str
    custard: str
    customs: str
    cut_of_meat: str
    cyclone: str
    cyprus: str
    czech_republic: str
    dagger: str
    dancer: str
    dancers: str
    dancing_men: str
    dancing_women: str
    dango: str
    dark_sunglasses: str
    dart: str
    dash: str
    date: str
    de: str
    deaf_man: str
    deaf_person: str
    deaf_woman: str
    deciduous_tree: str
    deer: str
    denmark: str
    department_store: str
    dependabot: str
    derelict_house: str
    desert: str
    desert_island: str
    desktop_computer: str
    detective: str
    diamond_shape_with_a_dot_inside: str
    diamonds: str
    diego_garcia: str
    disappointed: str
    disappointed_relieved: str
    disguised_face: str
    diving_mask: str
    diya_lamp: str
    dizzy: str
    dizzy_face: str
    djibouti: str
    dna: str
    do_not_litter: str
    dodo: str
    dog: str
    dog2: str
    dollar: str
    dolls: str
    dolphin: str
    dominica: str
    dominican_republic: str
    door: str
    doughnut: str
    dove: str
    dragon: str
    dragon_face: str
    dress: str
    dromedary_camel: str
    drooling_face: str
    drop_of_blood: str
    droplet: str
    drum: str
    duck: str
    dumpling: str
    dvd: str
    eagle: str
    ear: str
    ear_of_rice: str
    ear_with_hearing_aid: str
    earth_africa: str
    earth_americas: str
    earth_asia: str
    ecuador: str
    egg: str
    eggplant: str
    egypt: str
    eight: str
    eight_pointed_black_star: str
    eight_spoked_asterisk: str
    eject_button: str
    el_salvador: str
    electric_plug: str
    electron: str
    elephant: str
    elevator: str
    elf: str
    elf_man: str
    elf_woman: str
    email: str
    end: str
    england: str
    envelope: str
    envelope_with_arrow: str
    equatorial_guinea: str
    eritrea: str
    es: str
    estonia: str
    ethiopia: str
    eu: str
    euro: str
    european_castle: str
    european_post_office: str
    european_union: str
    evergreen_tree: str
    exclamation: str
    exploding_head: str
    expressionless: str
    eye: str
    eye_speech_bubble: str
    eyeglasses: str
    eyes: str
    face_exhaling: str
    face_in_clouds: str
    face_with_head_bandage: str
    face_with_spiral_eyes: str
    face_with_thermometer: str
    facepalm: str
    facepunch: str
    factory: str
    factory_worker: str
    fairy: str
    fairy_man: str
    fairy_woman: str
    falafel: str
    falkland_islands: str
    fallen_leaf: str
    family: str
    family_man_boy: str
    family_man_boy_boy: str
    family_man_girl: str
    family_man_girl_boy: str
    family_man_girl_girl: str
    family_man_man_boy: str
    family_man_man_boy_boy: str
    family_man_man_girl: str
    family_man_man_girl_boy: str
    family_man_man_girl_girl: str
    family_man_woman_boy: str
    family_man_woman_boy_boy: str
    family_man_woman_girl: str
    family_man_woman_girl_boy: str
    family_man_woman_girl_girl: str
    family_woman_boy: str
    family_woman_boy_boy: str
    family_woman_girl: str
    family_woman_girl_boy: str
    family_woman_girl_girl: str
    family_woman_woman_boy: str
    family_woman_woman_boy_boy: str
    family_woman_woman_girl: str
    family_woman_woman_girl_boy: str
    family_woman_woman_girl_girl: str
    farmer: str
    faroe_islands: str
    fast_forward: str
    fax: str
    fearful: str
    feather: str
    feelsgood: str
    feet: str
    female_detective: str
    female_sign: str
    ferris_wheel: str
    ferry: str
    field_hockey: str
    fiji: str
    file_cabinet: str
    file_folder: str
    film_projector: str
    film_strip: str
    finland: str
    finnadie: str
    fire: str
    fire_engine: str
    fire_extinguisher: str
    firecracker: str
    firefighter: str
    fireworks: str
    first_quarter_moon: str
    first_quarter_moon_with_face: str
    fish: str
    fish_cake: str
    fishing_pole_and_fish: str
    fishsticks: str
    fist: str
    fist_left: str
    fist_oncoming: str
    fist_raised: str
    fist_right: str
    five: str
    flags: str
    flamingo: str
    flashlight: str
    flat_shoe: str
    flatbread: str
    fleur_de_lis: str
    flight_arrival: str
    flight_departure: str
    flipper: str
    floppy_disk: str
    flower_playing_cards: str
    flushed: str
    fly: str
    flying_disc: str
    flying_saucer: str
    fog: str
    foggy: str
    fondue: str
    foot: str
    football: str
    footprints: str
    fork_and_knife: str
    fortune_cookie: str
    fountain: str
    fountain_pen: str
    four: str
    four_leaf_clover: str
    fox_face: str
    fr: str
    framed_picture: str
    free: str
    french_guiana: str
    french_polynesia: str
    french_southern_territories: str
    fried_egg: str
    fried_shrimp: str
    fries: str
    frog: str
    frowning: str
    frowning_face: str
    frowning_man: str
    frowning_person: str
    frowning_woman: str
    fu: str
    fuelpump: str
    full_moon: str
    full_moon_with_face: str
    funeral_urn: str
    gabon: str
    gambia: str
    game_die: str
    garlic: str
    gb: str
    gear: str
    gem: str
    gemini: str
    genie: str
    genie_man: str
    genie_woman: str
    georgia: str
    ghana: str
    ghost: str
    gibraltar: str
    gift: str
    gift_heart: str
    giraffe: str
    girl: str
    globe_with_meridians: str
    gloves: str
    goal_net: str
    goat: str
    goberserk: str
    godmode: str
    goggles: str
    golf: str
    golfing: str
    golfing_man: str
    golfing_woman: str
    gorilla: str
    grapes: str
    greece: str
    green_apple: str
    green_book: str
    green_circle: str
    green_heart: str
    green_salad: str
    green_square: str
    greenland: str
    grenada: str
    grey_exclamation: str
    grey_question: str
    grimacing: str
    grin: str
    grinning: str
    guadeloupe: str
    guam: str
    guard: str
    guardsman: str
    guardswoman: str
    guatemala: str
    guernsey: str
    guide_dog: str
    guinea: str
    guinea_bissau: str
    guitar: str
    gun: str
    guyana: str
    haircut: str
    haircut_man: str
    haircut_woman: str
    haiti: str
    hamburger: str
    hammer: str
    hammer_and_pick: str
    hammer_and_wrench: str
    hamster: str
    hand: str
    hand_over_mouth: str
    handbag: str
    handball_person: str
    handshake: str
    hankey: str
    hash: str
    hatched_chick: str
    hatching_chick: str
    headphones: str
    headstone: str
    health_worker: str
    hear_no_evil: str
    heard_mcdonald_islands: str
    heart: str
    heart_decoration: str
    heart_eyes: str
    heart_eyes_cat: str
    heart_on_fire: str
    heartbeat: str
    heartpulse: str
    hearts: str
    heavy_check_mark: str
    heavy_division_sign: str
    heavy_dollar_sign: str
    heavy_exclamation_mark: str
    heavy_heart_exclamation: str
    heavy_minus_sign: str
    heavy_multiplication_x: str
    heavy_plus_sign: str
    hedgehog: str
    helicopter: str
    herb: str
    hibiscus: str
    high_brightness: str
    high_heel: str
    hiking_boot: str
    hindu_temple: str
    hippopotamus: str
    hocho: str
    hole: str
    honduras: str
    honey_pot: str
    honeybee: str
    hong_kong: str
    hook: str
    horse: str
    horse_racing: str
    hospital: str
    hot_face: str
    hot_pepper: str
    hotdog: str
    hotel: str
    hotsprings: str
    hourglass: str
    hourglass_flowing_sand: str
    house: str
    house_with_garden: str
    houses: str
    hugs: str
    hungary: str
    hurtrealbad: str
    hushed: str
    hut: str
    ice_cream: str
    ice_cube: str
    ice_hockey: str
    ice_skate: str
    icecream: str
    iceland: str
    ideograph_advantage: str
    imp: str
    inbox_tray: str
    incoming_envelope: str
    india: str
    indonesia: str
    infinity: str
    information_desk_person: str
    information_source: str
    innocent: str
    interrobang: str
    iphone: str
    iran: str
    iraq: str
    ireland: str
    isle_of_man: str
    israel: str
    it: str
    izakaya_lantern: str
    jack_o_lantern: str
    jamaica: str
    japan: str
    japanese_castle: str
    japanese_goblin: str
    japanese_ogre: str
    jeans: str
    jersey: str
    jigsaw: str
    jordan: str
    joy: str
    joy_cat: str
    joystick: str
    jp: str
    judge: str
    juggling_person: str
    kangaroo: str
    kazakhstan: str
    kenya: str
    key: str
    keyboard: str
    keycap_ten: str
    kick_scooter: str
    kimono: str
    kiribati: str
    kiss: str
    kissing: str
    kissing_cat: str
    kissing_closed_eyes: str
    kissing_heart: str
    kissing_smiling_eyes: str
    kite: str
    kiwi_fruit: str
    kneeling_man: str
    kneeling_person: str
    kneeling_woman: str
    knife: str
    knot: str
    koala: str
    koko: str
    kosovo: str
    kr: str
    kuwait: str
    kyrgyzstan: str
    lab_coat: str
    label: str
    lacrosse: str
    ladder: str
    lady_beetle: str
    lantern: str
    laos: str
    large_blue_circle: str
    large_blue_diamond: str
    large_orange_diamond: str
    last_quarter_moon: str
    last_quarter_moon_with_face: str
    latin_cross: str
    latvia: str
    laughing: str
    leafy_green: str
    leaves: str
    lebanon: str
    ledger: str
    left_luggage: str
    left_right_arrow: str
    left_speech_bubble: str
    leftwards_arrow_with_hook: str
    leg: str
    lemon: str
    leo: str
    leopard: str
    lesotho: str
    level_slider: str
    liberia: str
    libra: str
    libya: str
    liechtenstein: str
    light_rail: str
    link: str
    lion: str
    lips: str
    lipstick: str
    lithuania: str
    lizard: str
    llama: str
    lobster: str
    lock: str
    lock_with_ink_pen: str
    lollipop: str
    long_drum: str
    loop: str
    lotion_bottle: str
    lotus_position: str
    lotus_position_man: str
    lotus_position_woman: str
    loud_sound: str
    loudspeaker: str
    love_hotel: str
    love_letter: str
    love_you_gesture: str
    low_brightness: str
    luggage: str
    lungs: str
    luxembourg: str
    lying_face: str
    m: str
    macau: str
    macedonia: str
    madagascar: str
    mag: str
    mag_right: str
    mage: str
    mage_man: str
    mage_woman: str
    magic_wand: str
    magnet: str
    mahjong: str
    mailbox: str
    mailbox_closed: str
    mailbox_with_mail: str
    mailbox_with_no_mail: str
    malawi: str
    malaysia: str
    maldives: str
    male_detective: str
    male_sign: str
    mali: str
    malta: str
    mammoth: str
    man: str
    man_artist: str
    man_astronaut: str
    man_beard: str
    man_cartwheeling: str
    man_cook: str
    man_dancing: str
    man_facepalming: str
    man_factory_worker: str
    man_farmer: str
    man_feeding_baby: str
    man_firefighter: str
    man_health_worker: str
    man_in_manual_wheelchair: str
    man_in_motorized_wheelchair: str
    man_in_tuxedo: str
    man_judge: str
    man_juggling: str
    man_mechanic: str
    man_office_worker: str
    man_pilot: str
    man_playing_handball: str
    man_playing_water_polo: str
    man_scientist: str
    man_shrugging: str
    man_singer: str
    man_student: str
    man_teacher: str
    man_technologist: str
    man_with_gua_pi_mao: str
    man_with_probing_cane: str
    man_with_turban: str
    man_with_veil: str
    mandarin: str
    mango: str
    mans_shoe: str
    mantelpiece_clock: str
    manual_wheelchair: str
    maple_leaf: str
    marshall_islands: str
    martial_arts_uniform: str
    martinique: str
    mask: str
    massage: str
    massage_man: str
    massage_woman: str
    mate: str
    mauritania: str
    mauritius: str
    mayotte: str
    meat_on_bone: str
    mechanic: str
    mechanical_arm: str
    mechanical_leg: str
    medal_military: str
    medal_sports: str
    medical_symbol: str
    mega: str
    melon: str
    memo: str
    men_wrestling: str
    mending_heart: str
    menorah: str
    mens: str
    mermaid: str
    merman: str
    merperson: str
    metal: str
    metro: str
    mexico: str
    microbe: str
    micronesia: str
    microphone: str
    microscope: str
    middle_finger: str
    military_helmet: str
    milk_glass: str
    milky_way: str
    minibus: str
    minidisc: str
    mirror: str
    mobile_phone_off: str
    moldova: str
    monaco: str
    money_mouth_face: str
    money_with_wings: str
    moneybag: str
    mongolia: str
    monkey: str
    monkey_face: str
    monocle_face: str
    monorail: str
    montenegro: str
    montserrat: str
    moon: str
    moon_cake: str
    morocco: str
    mortar_board: str
    mosque: str
    mosquito: str
    motor_boat: str
    motor_scooter: str
    motorcycle: str
    motorized_wheelchair: str
    motorway: str
    mount_fuji: str
    mountain: str
    mountain_bicyclist: str
    mountain_biking_man: str
    mountain_biking_woman: str
    mountain_cableway: str
    mountain_railway: str
    mountain_snow: str
    mouse: str
    mouse2: str
    mouse_trap: str
    movie_camera: str
    moyai: str
    mozambique: str
    mrs_claus: str
    muscle: str
    mushroom: str
    musical_keyboard: str
    musical_note: str
    musical_score: str
    mute: str
    mx_claus: str
    myanmar: str
    nail_care: str
    name_badge: str
    namibia: str
    national_park: str
    nauru: str
    nauseated_face: str
    nazar_amulet: str
    neckbeard: str
    necktie: str
    negative_squared_cross_mark: str
    nepal: str
    nerd_face: str
    nesting_dolls: str
    netherlands: str
    neutral_face: str
    new: str
    new_caledonia: str
    new_moon: str
    new_moon_with_face: str
    new_zealand: str
    newspaper: str
    newspaper_roll: str
    next_track_button: str
    ng: str
    ng_man: str
    ng_woman: str
    nicaragua: str
    niger: str
    nigeria: str
    night_with_stars: str
    nine: str
    ninja: str
    niue: str
    no_bell: str
    no_bicycles: str
    no_entry: str
    no_entry_sign: str
    no_good: str
    no_good_man: str
    no_good_woman: str
    no_mobile_phones: str
    no_mouth: str
    no_pedestrians: str
    no_smoking: str
    nonpotable_water: str
    norfolk_island: str
    north_korea: str
    northern_mariana_islands: str
    norway: str
    nose: str
    notebook: str
    notebook_with_decorative_cover: str
    notes: str
    nut_and_bolt: str
    o: str
    o2: str
    ocean: str
    octocat: str
    octopus: str
    oden: str
    office: str
    office_worker: str
    oil_drum: str
    ok: str
    ok_hand: str
    ok_man: str
    ok_person: str
    ok_woman: str
    old_key: str
    older_adult: str
    older_man: str
    older_woman: str
    olive: str
    om: str
    oman: str
    on: str
    oncoming_automobile: str
    oncoming_bus: str
    oncoming_police_car: str
    oncoming_taxi: str
    one: str
    one_piece_swimsuit: str
    onion: str
    open_book: str
    open_file_folder: str
    open_hands: str
    open_mouth: str
    open_umbrella: str
    ophiuchus: str
    orange: str
    orange_book: str
    orange_circle: str
    orange_heart: str
    orange_square: str
    orangutan: str
    orthodox_cross: str
    otter: str
    outbox_tray: str
    owl: str
    ox: str
    oyster: str
    package: str
    page_facing_up: str
    page_with_curl: str
    pager: str
    paintbrush: str
    pakistan: str
    palau: str
    palestinian_territories: str
    palm_tree: str
    palms_up_together: str
    panama: str
    pancakes: str
    panda_face: str
    paperclip: str
    paperclips: str
    papua_new_guinea: str
    parachute: str
    paraguay: str
    parasol_on_ground: str
    parking: str
    parrot: str
    part_alternation_mark: str
    partly_sunny: str
    partying_face: str
    passenger_ship: str
    passport_control: str
    pause_button: str
    paw_prints: str
    peace_symbol: str
    peach: str
    peacock: str
    peanuts: str
    pear: str
    pen: str
    pencil: str
    pencil2: str
    penguin: str
    pensive: str
    people_holding_hands: str
    people_hugging: str
    performing_arts: str
    persevere: str
    person_bald: str
    person_curly_hair: str
    person_feeding_baby: str
    person_fencing: str
    person_in_manual_wheelchair: str
    person_in_motorized_wheelchair: str
    person_in_tuxedo: str
    person_red_hair: str
    person_white_hair: str
    person_with_probing_cane: str
    person_with_turban: str
    person_with_veil: str
    peru: str
    petri_dish: str
    philippines: str
    phone: str
    pick: str
    pickup_truck: str
    pie: str
    pig: str
    pig2: str
    pig_nose: str
    pill: str
    pilot: str
    pinata: str
    pinched_fingers: str
    pinching_hand: str
    pineapple: str
    ping_pong: str
    pirate_flag: str
    pisces: str
    pitcairn_islands: str
    pizza: str
    placard: str
    place_of_worship: str
    plate_with_cutlery: str
    play_or_pause_button: str
    pleading_face: str
    plunger: str
    point_down: str
    point_left: str
    point_right: str
    point_up: str
    point_up_2: str
    poland: str
    polar_bear: str
    police_car: str
    police_officer: str
    policeman: str
    policewoman: str
    poodle: str
    poop: str
    popcorn: str
    portugal: str
    post_office: str
    postal_horn: str
    postbox: str
    potable_water: str
    potato: str
    potted_plant: str
    pouch: str
    poultry_leg: str
    pound: str
    pout: str
    pouting_cat: str
    pouting_face: str
    pouting_man: str
    pouting_woman: str
    pray: str
    prayer_beads: str
    pregnant_woman: str
    pretzel: str
    previous_track_button: str
    prince: str
    princess: str
    printer: str
    probing_cane: str
    puerto_rico: str
    punch: str
    purple_circle: str
    purple_heart: str
    purple_square: str
    purse: str
    pushpin: str
    put_litter_in_its_place: str
    qatar: str
    question: str
    rabbit: str
    rabbit2: str
    raccoon: str
    racehorse: str
    racing_car: str
    radio: str
    radio_button: str
    radioactive: str
    rage: str
    rage1: str
    rage2: str
    rage3: str
    rage4: str
    railway_car: str
    railway_track: str
    rainbow: str
    rainbow_flag: str
    raised_back_of_hand: str
    raised_eyebrow: str
    raised_hand: str
    raised_hand_with_fingers_splayed: str
    raised_hands: str
    raising_hand: str
    raising_hand_man: str
    raising_hand_woman: str
    ram: str
    ramen: str
    rat: str
    razor: str
    receipt: str
    record_button: str
    recycle: str
    red_car: str
    red_circle: str
    red_envelope: str
    red_haired_man: str
    red_haired_woman: str
    red_square: str
    registered: str
    relaxed: str
    relieved: str
    reminder_ribbon: str
    repeat: str
    repeat_one: str
    rescue_worker_helmet: str
    restroom: str
    reunion: str
    revolving_hearts: str
    rewind: str
    rhinoceros: str
    ribbon: str
    rice: str
    rice_ball: str
    rice_cracker: str
    rice_scene: str
    right_anger_bubble: str
    ring: str
    ringed_planet: str
    robot: str
    rock: str
    rocket: str
    rofl: str
    roll_eyes: str
    roll_of_paper: str
    roller_coaster: str
    roller_skate: str
    romania: str
    rooster: str
    rose: str
    rosette: str
    rotating_light: str
    round_pushpin: str
    rowboat: str
    rowing_man: str
    rowing_woman: str
    ru: str
    rugby_football: str
    runner: str
    running: str
    running_man: str
    running_shirt_with_sash: str
    running_woman: str
    rwanda: str
    sa: str
    safety_pin: str
    safety_vest: str
    sagittarius: str
    sailboat: str
    sake: str
    salt: str
    samoa: str
    san_marino: str
    sandal: str
    sandwich: str
    santa: str
    sao_tome_principe: str
    sari: str
    sassy_man: str
    sassy_woman: str
    satellite: str
    satisfied: str
    saudi_arabia: str
    sauna_man: str
    sauna_person: str
    sauna_woman: str
    sauropod: str
    saxophone: str
    scarf: str
    school: str
    school_satchel: str
    scientist: str
    scissors: str
    scorpion: str
    scorpius: str
    scotland: str
    scream: str
    scream_cat: str
    screwdriver: str
    scroll: str
    seal: str
    seat: str
    secret: str
    see_no_evil: str
    seedling: str
    selfie: str
    senegal: str
    serbia: str
    service_dog: str
    seven: str
    sewing_needle: str
    seychelles: str
    shallow_pan_of_food: str
    shamrock: str
    shark: str
    shaved_ice: str
    sheep: str
    shell: str
    shield: str
    shinto_shrine: str
    ship: str
    shipit: str
    shirt: str
    shoe: str
    shopping: str
    shopping_cart: str
    shorts: str
    shower: str
    shrimp: str
    shrug: str
    shushing_face: str
    sierra_leone: str
    signal_strength: str
    singapore: str
    singer: str
    sint_maarten: str
    six: str
    six_pointed_star: str
    skateboard: str
    ski: str
    skier: str
    skull: str
    skull_and_crossbones: str
    skunk: str
    sled: str
    sleeping: str
    sleeping_bed: str
    sleepy: str
    slightly_frowning_face: str
    slightly_smiling_face: str
    slot_machine: str
    sloth: str
    slovakia: str
    slovenia: str
    small_airplane: str
    small_blue_diamond: str
    small_orange_diamond: str
    small_red_triangle: str
    small_red_triangle_down: str
    smile: str
    smile_cat: str
    smiley: str
    smiley_cat: str
    smiling_face_with_tear: str
    smiling_face_with_three_hearts: str
    smiling_imp: str
    smirk: str
    smirk_cat: str
    smoking: str
    snail: str
    snake: str
    sneezing_face: str
    snowboarder: str
    snowflake: str
    snowman: str
    snowman_with_snow: str
    soap: str
    sob: str
    soccer: str
    socks: str
    softball: str
    solomon_islands: str
    somalia: str
    soon: str
    sos: str
    sound: str
    south_africa: str
    south_georgia_south_sandwich_islands: str
    south_sudan: str
    space_invader: str
    spades: str
    spaghetti: str
    sparkle: str
    sparkler: str
    sparkles: str
    sparkling_heart: str
    speak_no_evil: str
    speaker: str
    speaking_head: str
    speech_balloon: str
    speedboat: str
    spider: str
    spider_web: str
    spiral_calendar: str
    spiral_notepad: str
    sponge: str
    spoon: str
    squid: str
    sri_lanka: str
    st_barthelemy: str
    st_helena: str
    st_kitts_nevis: str
    st_lucia: str
    st_martin: str
    st_pierre_miquelon: str
    st_vincent_grenadines: str
    stadium: str
    standing_man: str
    standing_person: str
    standing_woman: str
    star: str
    star2: str
    star_and_crescent: str
    star_of_david: str
    star_struck: str
    stars: str
    station: str
    statue_of_liberty: str
    steam_locomotive: str
    stethoscope: str
    stew: str
    stop_button: str
    stop_sign: str
    stopwatch: str
    straight_ruler: str
    strawberry: str
    stuck_out_tongue: str
    stuck_out_tongue_closed_eyes: str
    stuck_out_tongue_winking_eye: str
    student: str
    studio_microphone: str
    stuffed_flatbread: str
    sudan: str
    sun_behind_large_cloud: str
    sun_behind_rain_cloud: str
    sun_behind_small_cloud: str
    sun_with_face: str
    sunflower: str
    sunglasses: str
    sunny: str
    sunrise: str
    sunrise_over_mountains: str
    superhero: str
    superhero_man: str
    superhero_woman: str
    supervillain: str
    supervillain_man: str
    supervillain_woman: str
    surfer: str
    surfing_man: str
    surfing_woman: str
    suriname: str
    sushi: str
    suspect: str
    suspension_railway: str
    svalbard_jan_mayen: str
    swan: str
    swaziland: str
    sweat: str
    sweat_drops: str
    sweat_smile: str
    sweden: str
    sweet_potato: str
    swim_brief: str
    swimmer: str
    swimming_man: str
    swimming_woman: str
    switzerland: str
    symbols: str
    synagogue: str
    syria: str
    syringe: str
    taco: str
    tada: str
    taiwan: str
    tajikistan: str
    takeout_box: str
    tamale: str
    tanabata_tree: str
    tangerine: str
    tanzania: str
    taurus: str
    taxi: str
    tea: str
    teacher: str
    teapot: str
    technologist: str
    teddy_bear: str
    telephone: str
    telephone_receiver: str
    telescope: str
    tennis: str
    tent: str
    test_tube: str
    thailand: str
    thermometer: str
    thinking: str
    thong_sandal: str
    thought_balloon: str
    thread: str
    three: str
    thumbsdown: str
    thumbsup: str
    ticket: str
    tickets: str
    tiger: str
    tiger2: str
    timer_clock: str
    timor_leste: str
    tipping_hand_man: str
    tipping_hand_person: str
    tipping_hand_woman: str
    tired_face: str
    tm: str
    togo: str
    toilet: str
    tokelau: str
    tokyo_tower: str
    tomato: str
    tonga: str
    tongue: str
    toolbox: str
    tooth: str
    toothbrush: str
    top: str
    tophat: str
    tornado: str
    tr: str
    trackball: str
    tractor: str
    traffic_light: str
    train: str
    train2: str
    tram: str
    transgender_flag: str
    transgender_symbol: str
    trex: str
    triangular_flag_on_post: str
    triangular_ruler: str
    trident: str
    trinidad_tobago: str
    tristan_da_cunha: str
    triumph: str
    trolleybus: str
    trollface: str
    trophy: str
    tropical_drink: str
    tropical_fish: str
    truck: str
    trumpet: str
    tshirt: str
    tulip: str
    tumbler_glass: str
    tunisia: str
    turkey: str
    turkmenistan: str
    turks_caicos_islands: str
    turtle: str
    tuvalu: str
    tv: str
    twisted_rightwards_arrows: str
    two: str
    two_hearts: str
    two_men_holding_hands: str
    two_women_holding_hands: str
    u5272: str
    u5408: str
    u55b6: str
    u6307: str
    u6708: str
    u6709: str
    u6e80: str
    u7121: str
    u7533: str
    u7981: str
    u7a7a: str
    uganda: str
    uk: str
    ukraine: str
    umbrella: str
    unamused: str
    underage: str
    unicorn: str
    united_arab_emirates: str
    united_nations: str
    unlock: str
    up: str
    upside_down_face: str
    uruguay: str
    us: str
    us_outlying_islands: str
    us_virgin_islands: str
    uzbekistan: str
    v: str
    vampire: str
    vampire_man: str
    vampire_woman: str
    vanuatu: str
    vatican_city: str
    venezuela: str
    vertical_traffic_light: str
    vhs: str
    vibration_mode: str
    video_camera: str
    video_game: str
    vietnam: str
    violin: str
    virgo: str
    volcano: str
    volleyball: str
    vomiting_face: str
    vs: str
    vulcan_salute: str
    waffle: str
    wales: str
    walking: str
    walking_man: str
    walking_woman: str
    wallis_futuna: str
    waning_crescent_moon: str
    waning_gibbous_moon: str
    warning: str
    wastebasket: str
    watch: str
    water_buffalo: str
    water_polo: str
    watermelon: str
    wave: str
    wavy_dash: str
    waxing_crescent_moon: str
    waxing_gibbous_moon: str
    wc: str
    weary: str
    wedding: str
    weight_lifting: str
    weight_lifting_man: str
    weight_lifting_woman: str
    western_sahara: str
    whale: str
    whale2: str
    wheel_of_dharma: str
    wheelchair: str
    white_check_mark: str
    white_circle: str
    white_flag: str
    white_flower: str
    white_haired_man: str
    white_haired_woman: str
    white_heart: str
    white_large_square: str
    white_medium_small_square: str
    white_medium_square: str
    white_small_square: str
    white_square_button: str
    wilted_flower: str
    wind_chime: str
    wind_face: str
    window: str
    wine_glass: str
    wink: str
    wolf: str
    woman: str
    woman_artist: str
    woman_astronaut: str
    woman_beard: str
    woman_cartwheeling: str
    woman_cook: str
    woman_dancing: str
    woman_facepalming: str
    woman_factory_worker: str
    woman_farmer: str
    woman_feeding_baby: str
    woman_firefighter: str
    woman_health_worker: str
    woman_in_manual_wheelchair: str
    woman_in_motorized_wheelchair: str
    woman_in_tuxedo: str
    woman_judge: str
    woman_juggling: str
    woman_mechanic: str
    woman_office_worker: str
    woman_pilot: str
    woman_playing_handball: str
    woman_playing_water_polo: str
    woman_scientist: str
    woman_shrugging: str
    woman_singer: str
    woman_student: str
    woman_teacher: str
    woman_technologist: str
    woman_with_headscarf: str
    woman_with_probing_cane: str
    woman_with_turban: str
    woman_with_veil: str
    womans_clothes: str
    womans_hat: str
    women_wrestling: str
    womens: str
    wood: str
    woozy_face: str
    world_map: str
    worm: str
    worried: str
    wrench: str
    wrestling: str
    writing_hand: str
    x: str
    yarn: str
    yawning_face: str
    yellow_circle: str
    yellow_heart: str
    yellow_square: str
    yemen: str
    yen: str
    yin_yang: str
    yo_yo: str
    yum: str
    zambia: str
    zany_face: str
    zap: str
    zebra: str
    zero: str
    zimbabwe: str
    zipper_mouth_face: str
    zombie: str
    zombie_man: str
    zombie_woman: str
    zzz: str


class EmptyObjectRequired(TypedDict):
    encrypted_value: str
    key_id: str
    name: str
    use_default: bool
    value: str
    visibility: str


class EmptyObject(EmptyObjectRequired, total=False):
    attestations: list
    enable_debug_logging: bool
    include_claim_keys: list
    languages: list
    query_suite: str
    runner_label: str
    runner_type: str
    selected_repository_ids: list
    state: str
    threat_model: str


class EmptyObjectLoadMatchRequired(TypedDict):
    subject_digest: str
    username: str


class EmptyObjectLoadMatch(EmptyObjectLoadMatchRequired, total=False):
    after: str
    before: str
    per_page: int
    predicate_type: str


class EmptyObjectCreateDataRequired(TypedDict):
    org_id: str
    encrypted_value: str
    key_id: str
    name: str
    use_default: bool
    value: str
    visibility: str


class EmptyObjectCreateData(EmptyObjectCreateDataRequired, total=False):
    attestations: list
    enable_debug_logging: bool
    include_claim_keys: list
    languages: list
    query_suite: str
    runner_label: str
    runner_type: str
    selected_repository_ids: list
    state: str
    threat_model: str


class EmptyObjectUpdateDataRequired(TypedDict):
    org_id: str
    secret_name: str


class EmptyObjectUpdateData(EmptyObjectUpdateDataRequired, total=False):
    attestations: list
    enable_debug_logging: bool
    encrypted_value: str
    include_claim_keys: list
    key_id: str
    languages: list
    name: str
    query_suite: str
    runner_label: str
    runner_type: str
    selected_repository_ids: list
    state: str
    threat_model: str
    use_default: bool
    value: str
    visibility: str


class EnterpriseTeamRequired(TypedDict):
    created_at: str
    group_id: str
    html_url: str
    id: int
    members_url: str
    name: str
    slug: str
    updated_at: str
    url: str


class EnterpriseTeam(EnterpriseTeamRequired, total=False):
    description: str
    group_name: str
    organization_selection_type: str
    sync_to_organizations: str


class EnterpriseTeamLoadMatch(TypedDict):
    enterprise: str
    id: str


class EnterpriseTeamListMatchRequired(TypedDict):
    enterprise: str


class EnterpriseTeamListMatch(EnterpriseTeamListMatchRequired, total=False):
    page: int
    per_page: int


class EnterpriseTeamCreateDataRequired(TypedDict):
    enterprise: str
    created_at: str
    group_id: str
    html_url: str
    id: int
    members_url: str
    name: str
    slug: str
    updated_at: str
    url: str


class EnterpriseTeamCreateData(EnterpriseTeamCreateDataRequired, total=False):
    description: str
    group_name: str
    organization_selection_type: str
    sync_to_organizations: str


class EnterpriseTeamUpdateDataRequired(TypedDict):
    enterprise: str
    id: str


class EnterpriseTeamUpdateData(EnterpriseTeamUpdateDataRequired, total=False):
    created_at: str
    description: str
    group_id: str
    group_name: str
    html_url: str
    members_url: str
    name: str
    organization_selection_type: str
    slug: str
    sync_to_organizations: str
    updated_at: str
    url: str


class EnterpriseTeamRemoveMatch(TypedDict):
    enterprise: str
    id: str


class EnterpriseTeamMembership(TypedDict, total=False):
    id: str


class EnterpriseTeamMembershipRemoveMatch(TypedDict):
    enterprise: str
    id: str
    team_id: str


class EnvironmentRequired(TypedDict):
    created_at: str
    deployment_branch_policy: dict
    html_url: str
    id: int
    name: str
    node_id: str
    updated_at: str
    url: str


class Environment(EnvironmentRequired, total=False):
    prevent_self_review: bool
    protection_rules: list
    reviewers: list
    wait_timer: int


class EnvironmentLoadMatch(TypedDict):
    id: str
    owner: str
    repo: str


class EnvironmentUpdateDataRequired(TypedDict):
    id: str
    owner: str
    repo: str


class EnvironmentUpdateData(EnvironmentUpdateDataRequired, total=False):
    created_at: str
    deployment_branch_policy: dict
    html_url: str
    name: str
    node_id: str
    prevent_self_review: bool
    protection_rules: list
    reviewers: list
    updated_at: str
    url: str
    wait_timer: int


class EnvironmentApproval(TypedDict):
    comment: str
    environments: list
    state: str
    user: dict


class EnvironmentApprovalListMatch(TypedDict):
    owner: str
    repo: str
    run_id: int


class Event(TypedDict):
    actor: dict
    created_at: str
    id: str
    org: dict
    payload: dict
    public: bool
    repo: dict
    type: str


class EventLoadMatchRequired(TypedDict):
    org: str
    username: str


class EventLoadMatch(EventLoadMatchRequired, total=False):
    page: int
    per_page: int


class EventListMatch(TypedDict, total=False):
    page: int
    per_page: int


class FeedRequired(TypedDict):
    links: dict
    timeline_url: str
    user_url: str


class Feed(FeedRequired, total=False):
    current_user_actor_url: str
    current_user_organization_url: str
    current_user_organization_urls: list
    current_user_public_url: str
    current_user_url: str
    repository_discussions_category_url: str
    repository_discussions_url: str
    security_advisories_url: str


class FeedListMatch(TypedDict, total=False):
    current_user_actor_url: str
    current_user_organization_url: str
    current_user_organization_urls: list
    current_user_public_url: str
    current_user_url: str
    links: dict
    repository_discussions_category_url: str
    repository_discussions_url: str
    security_advisories_url: str
    timeline_url: str
    user_url: str


class FileCommitRequired(TypedDict):
    author: dict
    commit: dict
    committer: dict
    content: dict
    message: str


class FileCommit(FileCommitRequired, total=False):
    branch: str
    sha: str


class FileCommitUpdateDataRequired(TypedDict):
    owner: str
    path: str
    repo: str


class FileCommitUpdateData(FileCommitUpdateDataRequired, total=False):
    author: dict
    branch: str
    commit: dict
    committer: dict
    content: dict
    message: str
    sha: str


class FileCommitRemoveMatch(TypedDict):
    owner: str
    path: str
    repo: str


class FollowerRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class Follower(FollowerRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class FollowerListMatch(TypedDict, total=False):
    page: int
    per_page: int


class FollowingRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class Following(FollowingRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class FollowingListMatch(TypedDict, total=False):
    page: int
    per_page: int


class FullRepositoryRequired(TypedDict):
    archive_url: str
    archived: bool
    assignees_url: str
    blobs_url: str
    branches_url: str
    clone_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    default_branch: str
    deployments_url: str
    description: str
    disabled: bool
    downloads_url: str
    events_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    github_id: int
    has_discussions: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    id: str
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    network_count: int
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    organization: dict
    owner: dict
    parent: dict
    permissions: dict
    private: bool
    pulls_url: str
    pushed_at: str
    releases_url: str
    size: int
    source: dict
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    statuses_url: str
    subscribers_count: int
    subscribers_url: str
    subscription_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    template_repository: dict
    trees_url: str
    updated_at: str
    url: str
    watchers: int
    watchers_count: int


class FullRepository(FullRepositoryRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    anonymous_access_enabled: bool
    auto_init: bool
    custom_properties: dict
    delete_branch_on_merge: bool
    gitignore_template: str
    has_downloads: bool
    include_all_branches: bool
    is_template: bool
    license_template: str
    master_branch: str
    merge_commit_message: str
    merge_commit_title: str
    security_and_analysis: dict
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    team_id: int
    temp_clone_token: str
    topics: list
    use_squash_pr_title_as_default: bool
    visibility: str
    web_commit_signoff_required: bool


class FullRepositoryLoadMatch(TypedDict):
    owner: str
    repo: str


class FullRepositoryCreateDataRequired(TypedDict):
    archive_url: str
    archived: bool
    assignees_url: str
    blobs_url: str
    branches_url: str
    clone_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    default_branch: str
    deployments_url: str
    description: str
    disabled: bool
    downloads_url: str
    events_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    github_id: int
    has_discussions: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    id: str
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    network_count: int
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    organization: dict
    owner: dict
    parent: dict
    permissions: dict
    private: bool
    pulls_url: str
    pushed_at: str
    releases_url: str
    size: int
    source: dict
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    statuses_url: str
    subscribers_count: int
    subscribers_url: str
    subscription_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    template_repository: dict
    trees_url: str
    updated_at: str
    url: str
    watchers: int
    watchers_count: int


class FullRepositoryCreateData(FullRepositoryCreateDataRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    anonymous_access_enabled: bool
    auto_init: bool
    custom_properties: dict
    delete_branch_on_merge: bool
    gitignore_template: str
    has_downloads: bool
    include_all_branches: bool
    is_template: bool
    license_template: str
    master_branch: str
    merge_commit_message: str
    merge_commit_title: str
    security_and_analysis: dict
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    team_id: int
    temp_clone_token: str
    topics: list
    use_squash_pr_title_as_default: bool
    visibility: str
    web_commit_signoff_required: bool


class FullRepositoryUpdateDataRequired(TypedDict):
    owner: str
    repo: str


class FullRepositoryUpdateData(FullRepositoryUpdateDataRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    anonymous_access_enabled: bool
    archive_url: str
    archived: bool
    assignees_url: str
    auto_init: bool
    blobs_url: str
    branches_url: str
    clone_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    custom_properties: dict
    default_branch: str
    delete_branch_on_merge: bool
    deployments_url: str
    description: str
    disabled: bool
    downloads_url: str
    events_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    github_id: int
    gitignore_template: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    id: str
    include_all_branches: bool
    is_template: bool
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    license_template: str
    master_branch: str
    merge_commit_message: str
    merge_commit_title: str
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    network_count: int
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    organization: dict
    parent: dict
    permissions: dict
    private: bool
    pulls_url: str
    pushed_at: str
    releases_url: str
    security_and_analysis: dict
    size: int
    source: dict
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    statuses_url: str
    subscribers_count: int
    subscribers_url: str
    subscription_url: str
    svn_url: str
    tags_url: str
    team_id: int
    teams_url: str
    temp_clone_token: str
    template_repository: dict
    topics: list
    trees_url: str
    updated_at: str
    url: str
    use_squash_pr_title_as_default: bool
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool


class GistRequired(TypedDict):
    fork_of: dict
    owner: dict


class Gist(GistRequired, total=False):
    comments: int
    comments_enabled: bool
    comments_url: str
    commits_url: str
    created_at: str
    description: str
    files: dict
    forks: list
    forks_url: str
    git_pull_url: str
    git_push_url: str
    history: list
    html_url: str
    id: str
    node_id: str
    public: bool
    truncated: bool
    updated_at: str
    url: str
    user: str


class GistLoadMatch(TypedDict):
    id: str


class GistListMatch(TypedDict, total=False):
    page: int
    per_page: int
    since: str


class GistCreateDataRequired(TypedDict):
    fork_of: dict
    owner: dict


class GistCreateData(GistCreateDataRequired, total=False):
    comments: int
    comments_enabled: bool
    comments_url: str
    commits_url: str
    created_at: str
    description: str
    files: dict
    forks: list
    forks_url: str
    git_pull_url: str
    git_push_url: str
    history: list
    html_url: str
    id: str
    node_id: str
    public: bool
    truncated: bool
    updated_at: str
    url: str
    user: str


class GistUpdateDataRequired(TypedDict):
    id: str


class GistUpdateData(GistUpdateDataRequired, total=False):
    comments: int
    comments_enabled: bool
    comments_url: str
    commits_url: str
    created_at: str
    description: str
    files: dict
    fork_of: dict
    forks: list
    forks_url: str
    git_pull_url: str
    git_push_url: str
    history: list
    html_url: str
    node_id: str
    owner: dict
    public: bool
    truncated: bool
    updated_at: str
    url: str
    user: str


class GistRemoveMatchRequired(TypedDict):
    id: str


class GistRemoveMatch(GistRemoveMatchRequired, total=False):
    comment_id: int


class GistCommentRequired(TypedDict):
    author_association: str
    avatar_url: str
    body: str
    created_at: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    updated_at: str
    url: str
    user: dict


class GistComment(GistCommentRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class GistCommentLoadMatch(TypedDict):
    gist_id: str
    id: int


class GistCommentListMatchRequired(TypedDict):
    id: str


class GistCommentListMatch(GistCommentListMatchRequired, total=False):
    page: int
    per_page: int


class GistCommentCreateDataRequired(TypedDict):
    id: str
    author_association: str
    avatar_url: str
    body: str
    created_at: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    updated_at: str
    url: str
    user: dict


class GistCommentCreateData(GistCommentCreateDataRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class GistCommentUpdateDataRequired(TypedDict):
    gist_id: str
    id: int


class GistCommentUpdateData(GistCommentUpdateDataRequired, total=False):
    author_association: str
    avatar_url: str
    body: str
    created_at: str
    email: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    login: str
    name: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_at: str
    starred_url: str
    subscriptions_url: str
    type: str
    updated_at: str
    url: str
    user: dict
    user_view_type: str


class GistCommitRequired(TypedDict):
    change_status: dict
    committed_at: str
    url: str
    user: dict
    version: str


class GistCommit(GistCommitRequired, total=False):
    id: str


class GistCommitListMatchRequired(TypedDict):
    id: str


class GistCommitListMatch(GistCommitListMatchRequired, total=False):
    page: int
    per_page: int


class GistSimpleRequired(TypedDict):
    fork_of: dict
    owner: dict


class GistSimple(GistSimpleRequired, total=False):
    comments: int
    comments_enabled: bool
    comments_url: str
    commits_url: str
    created_at: str
    description: str
    files: dict
    forks: list
    forks_url: str
    git_pull_url: str
    git_push_url: str
    history: list
    html_url: str
    id: str
    node_id: str
    public: bool
    truncated: bool
    updated_at: str
    url: str
    user: str


class GistSimpleListMatchRequired(TypedDict):
    id: str


class GistSimpleListMatch(GistSimpleListMatchRequired, total=False):
    page: int
    per_page: int


class Git(TypedDict):
    pass


class GitRemoveMatch(TypedDict):
    owner: str
    ref: str
    repo: str


class GitCommitRequired(TypedDict):
    author: dict
    committer: dict
    html_url: str
    message: str
    node_id: str
    parents: list
    sha: str
    tree: dict
    url: str
    verification: dict


class GitCommit(GitCommitRequired, total=False):
    id: str
    signature: str


class GitCommitLoadMatch(TypedDict):
    id: str
    owner: str
    repo: str


class GitCommitCreateDataRequired(TypedDict):
    owner: str
    repo: str
    author: dict
    committer: dict
    html_url: str
    message: str
    node_id: str
    parents: list
    sha: str
    tree: dict
    url: str
    verification: dict


class GitCommitCreateData(GitCommitCreateDataRequired, total=False):
    id: str
    signature: str


class GitRefRequired(TypedDict):
    node_id: str
    object: dict
    ref: str
    sha: str
    type: str
    url: str


class GitRef(GitRefRequired, total=False):
    force: bool
    id: str


class GitRefLoadMatchRequired(TypedDict):
    owner: str
    repo: str


class GitRefLoadMatch(GitRefLoadMatchRequired, total=False):
    id: str
    ref: str


class GitRefCreateDataRequired(TypedDict):
    owner: str
    repo: str
    node_id: str
    object: dict
    ref: str
    sha: str
    type: str
    url: str


class GitRefCreateData(GitRefCreateDataRequired, total=False):
    force: bool
    id: str


class GitRefUpdateDataRequired(TypedDict):
    id: str
    owner: str
    repo: str


class GitRefUpdateData(GitRefUpdateDataRequired, total=False):
    force: bool
    node_id: str
    object: dict
    ref: str
    sha: str
    type: str
    url: str


class GitTagRequired(TypedDict):
    message: str
    node_id: str
    object: dict
    sha: str
    tag: str
    tagger: dict
    type: str
    url: str
    verification: dict


class GitTag(GitTagRequired, total=False):
    id: str


class GitTagLoadMatch(TypedDict):
    id: str
    owner: str
    repo: str


class GitTagCreateDataRequired(TypedDict):
    owner: str
    repo: str
    message: str
    node_id: str
    object: dict
    sha: str
    tag: str
    tagger: dict
    type: str
    url: str
    verification: dict


class GitTagCreateData(GitTagCreateDataRequired, total=False):
    id: str


class GitTreeRequired(TypedDict):
    sha: str
    tree: list
    truncated: bool


class GitTree(GitTreeRequired, total=False):
    base_tree: str
    id: str
    url: str


class GitTreeLoadMatchRequired(TypedDict):
    id: str
    owner: str
    repo: str


class GitTreeLoadMatch(GitTreeLoadMatchRequired, total=False):
    recursive: str


class GitTreeCreateDataRequired(TypedDict):
    owner: str
    repo: str
    sha: str
    tree: list
    truncated: bool


class GitTreeCreateData(GitTreeCreateDataRequired, total=False):
    base_tree: str
    id: str
    url: str


class Gitignore(TypedDict):
    pass


class GitignoreListMatch(TypedDict):
    pass


class GitignoreTemplateRequired(TypedDict):
    name: str
    source: str


class GitignoreTemplate(GitignoreTemplateRequired, total=False):
    id: str


class GitignoreTemplateLoadMatch(TypedDict):
    id: str


class GlobalAdvisoryRequired(TypedDict):
    credits: list
    cve_id: str
    cvss: dict
    cwes: list
    description: str
    ghsa_id: str
    github_reviewed_at: str
    html_url: str
    identifiers: list
    nvd_published_at: str
    published_at: str
    references: list
    repository_advisory_url: str
    severity: str
    source_code_location: str
    summary: str
    type: str
    updated_at: str
    url: str
    vulnerabilities: list
    withdrawn_at: str


class GlobalAdvisory(GlobalAdvisoryRequired, total=False):
    cvss_severities: dict
    epss: dict
    id: str


class GlobalAdvisoryLoadMatch(TypedDict):
    id: str


class GlobalAdvisoryListMatch(TypedDict, total=False):
    affect: Any
    after: str
    before: str
    cve_id: str
    cwe: Any
    direction: str
    ecosystem: str
    epss_percentage: str
    epss_percentile: str
    ghsa_id: str
    is_withdrawn: bool
    modified: str
    per_page: int
    published: str
    severity: str
    sort: str
    type: str
    updated: str


class GpgKeyRequired(TypedDict):
    armored_public_key: str
    can_certify: bool
    can_encrypt_comms: bool
    can_encrypt_storage: bool
    can_sign: bool
    created_at: str
    emails: list
    expires_at: str
    id: int
    key_id: str
    primary_key_id: int
    public_key: str
    raw_key: str
    revoked: bool
    subkeys: list


class GpgKey(GpgKeyRequired, total=False):
    name: str


class GpgKeyLoadMatch(TypedDict):
    id: int


class GpgKeyListMatch(TypedDict, total=False):
    page: int
    per_page: int


class GpgKeyCreateDataRequired(TypedDict):
    armored_public_key: str
    can_certify: bool
    can_encrypt_comms: bool
    can_encrypt_storage: bool
    can_sign: bool
    created_at: str
    emails: list
    expires_at: str
    id: int
    key_id: str
    primary_key_id: int
    public_key: str
    raw_key: str
    revoked: bool
    subkeys: list


class GpgKeyCreateData(GpgKeyCreateDataRequired, total=False):
    name: str


class HookRequired(TypedDict):
    active: bool
    config: dict
    created_at: str
    events: list
    id: int
    last_response: dict
    name: str
    ping_url: str
    test_url: str
    type: str
    updated_at: str
    url: str


class Hook(HookRequired, total=False):
    add_events: list
    deliveries_url: str
    remove_events: list


class HookLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class HookListMatchRequired(TypedDict):
    owner: str
    repo: str


class HookListMatch(HookListMatchRequired, total=False):
    page: int
    per_page: int


class HookCreateDataRequired(TypedDict):
    owner: str
    repo: str
    active: bool
    config: dict
    created_at: str
    events: list
    id: int
    last_response: dict
    name: str
    ping_url: str
    test_url: str
    type: str
    updated_at: str
    url: str


class HookCreateData(HookCreateDataRequired, total=False):
    add_events: list
    deliveries_url: str
    remove_events: list


class HookUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class HookUpdateData(HookUpdateDataRequired, total=False):
    active: bool
    add_events: list
    config: dict
    created_at: str
    deliveries_url: str
    events: list
    last_response: dict
    name: str
    ping_url: str
    remove_events: list
    test_url: str
    type: str
    updated_at: str
    url: str


class HookDeliveryRequired(TypedDict):
    action: str
    delivered_at: str
    duration: float
    event: str
    guid: str
    id: int
    installation_id: int
    redelivery: bool
    repository_id: int
    request: dict
    response: dict
    status: str
    status_code: int


class HookDelivery(HookDeliveryRequired, total=False):
    throttled_at: str
    url: str


class HookDeliveryLoadMatchRequired(TypedDict):
    id: int


class HookDeliveryLoadMatch(HookDeliveryLoadMatchRequired, total=False):
    hook_id: int
    owner: str
    repo: str
    org_id: str


class HookDeliveryItemRequired(TypedDict):
    action: str
    delivered_at: str
    duration: float
    event: str
    guid: str
    id: int
    installation_id: int
    redelivery: bool
    repository_id: int
    status: str
    status_code: int


class HookDeliveryItem(HookDeliveryItemRequired, total=False):
    throttled_at: str


class HookDeliveryItemListMatch(TypedDict, total=False):
    cursor: str
    per_page: int


class HostedComputeRequired(TypedDict):
    created_on: str
    id: str
    name: str


class HostedCompute(HostedComputeRequired, total=False):
    compute_service: str
    network_settings_ids: list


class HostedComputeListMatchRequired(TypedDict):
    org_id: str


class HostedComputeListMatch(HostedComputeListMatchRequired, total=False):
    page: int
    per_page: int


class HostedComputeRemoveMatch(TypedDict):
    network_configuration_id: str
    org_id: str


class Hovercard(TypedDict):
    message: str
    octicon: str


class HovercardListMatchRequired(TypedDict):
    username: str


class HovercardListMatch(HovercardListMatchRequired, total=False):
    subject_id: str
    subject_type: str


class ImportRequired(TypedDict):
    authors_url: str
    html_url: str
    repository_url: str
    status: str
    url: str
    vcs: str
    vcs_url: str


class Import(ImportRequired, total=False):
    authors_count: int
    commit_count: int
    error_message: str
    failed_step: str
    has_large_files: bool
    human_name: str
    import_percent: int
    large_files_count: int
    large_files_size: int
    message: str
    project_choices: list
    push_percent: int
    status_text: str
    svc_root: str
    svn_root: str
    tfvc_project: str
    use_lfs: bool
    vcs_password: str
    vcs_username: str


class ImportListMatch(TypedDict):
    owner: str
    repo: str


class ImportUpdateDataRequired(TypedDict):
    owner: str
    repo: str


class ImportUpdateData(ImportUpdateDataRequired, total=False):
    authors_count: int
    authors_url: str
    commit_count: int
    error_message: str
    failed_step: str
    has_large_files: bool
    html_url: str
    human_name: str
    import_percent: int
    large_files_count: int
    large_files_size: int
    message: str
    project_choices: list
    push_percent: int
    repository_url: str
    status: str
    status_text: str
    svc_root: str
    svn_root: str
    tfvc_project: str
    url: str
    use_lfs: bool
    vcs: str
    vcs_password: str
    vcs_url: str
    vcs_username: str


class InstallationRequired(TypedDict):
    access_tokens_url: str
    account: Any
    app_id: int
    app_slug: str
    created_at: str
    events: list
    html_url: str
    id: int
    permissions: dict
    repositories_url: str
    repository_selection: str
    single_file_name: str
    suspended_at: str
    suspended_by: dict
    target_id: int
    target_type: str
    updated_at: str


class Installation(InstallationRequired, total=False):
    client_id: str
    contact_email: str
    has_multiple_single_files: bool
    single_file_paths: list


class InstallationLoadMatch(TypedDict):
    id: int


class InstallationListMatch(TypedDict, total=False):
    outdated: str
    page: int
    per_page: int
    since: str


class InstallationUpdateDataRequired(TypedDict):
    id: int


class InstallationUpdateData(InstallationUpdateDataRequired, total=False):
    access_tokens_url: str
    account: Any
    app_id: int
    app_slug: str
    client_id: str
    contact_email: str
    created_at: str
    events: list
    has_multiple_single_files: bool
    html_url: str
    permissions: dict
    repositories_url: str
    repository_selection: str
    single_file_name: str
    single_file_paths: list
    suspended_at: str
    suspended_by: dict
    target_id: int
    target_type: str
    updated_at: str


class InstallationRemoveMatch(TypedDict):
    id: int


class InstallationToken(TypedDict, total=False):
    id: str
    permissions: dict
    repositories: list
    repository_ids: list


class InstallationTokenCreateDataRequired(TypedDict):
    id: int


class InstallationTokenCreateData(InstallationTokenCreateDataRequired, total=False):
    permissions: dict
    repositories: list
    repository_ids: list


class IntegrationRequired(TypedDict):
    apps: list
    created_at: str
    description: str
    events: list
    external_url: str
    html_url: str
    id: int
    name: str
    node_id: str
    owner: Any
    permissions: dict
    updated_at: str


class Integration(IntegrationRequired, total=False):
    client_id: str
    installations_count: int
    slug: str


class IntegrationLoadMatch(TypedDict):
    app_slug: str


class IntegrationListMatch(TypedDict, total=False):
    apps: list
    client_id: str
    created_at: str
    description: str
    events: list
    external_url: str
    html_url: str
    id: int
    installations_count: int
    name: str
    node_id: str
    owner: Any
    permissions: dict
    slug: str
    updated_at: str


class IntegrationCreateDataRequired(TypedDict):
    branch_id: str
    owner: str
    repo: str
    apps: list
    created_at: str
    description: str
    events: list
    external_url: str
    html_url: str
    id: int
    name: str
    node_id: str
    permissions: dict
    updated_at: str


class IntegrationCreateData(IntegrationCreateDataRequired, total=False):
    client_id: str
    installations_count: int
    slug: str


class IntegrationUpdateDataRequired(TypedDict):
    branch_id: str
    owner: str
    repo: str


class IntegrationUpdateData(IntegrationUpdateDataRequired, total=False):
    apps: list
    client_id: str
    created_at: str
    description: str
    events: list
    external_url: str
    html_url: str
    id: int
    installations_count: int
    name: str
    node_id: str
    permissions: dict
    slug: str
    updated_at: str


class IntegrationRemoveMatch(TypedDict):
    branch_id: str
    owner: str
    repo: str


class IntegrationInstallationRequired(TypedDict):
    account: Any
    created_at: str
    id: int
    requester: dict


class IntegrationInstallation(IntegrationInstallationRequired, total=False):
    node_id: str


class IntegrationInstallationListMatch(TypedDict, total=False):
    page: int
    per_page: int


class Interaction(TypedDict, total=False):
    expires_at: str
    limit: str
    origin: str


class InteractionLoadMatch(TypedDict, total=False):
    expires_at: str
    limit: str
    origin: str


class InteractionRemoveMatch(TypedDict, total=False):
    expires_at: str
    limit: str
    origin: str


class InteractionLimitRequired(TypedDict):
    expires_at: str
    limit: str
    origin: str


class InteractionLimit(InteractionLimitRequired, total=False):
    expiry: str


class InteractionLimitUpdateData(TypedDict, total=False):
    expires_at: str
    expiry: str
    limit: str
    origin: str


class IssueRequired(TypedDict):
    actor: dict
    assignee: dict
    assigner: dict
    author_association: str
    closed_at: str
    closed_by: dict
    comments: int
    comments_url: str
    commit_id: str
    commit_url: str
    created_at: str
    dismissed_review: dict
    event: str
    events_url: str
    html_url: str
    id: int
    issue: dict
    issue_dependencies_summary: dict
    issue_id: int
    issue_url: str
    label: dict
    labels: list
    labels_url: str
    locked: bool
    milestone: dict
    node_id: str
    number: int
    performed_via_github_app: dict
    project_card: dict
    pull_request: dict
    reactions: dict
    rename: dict
    repository: dict
    repository_url: str
    requested_reviewer: dict
    requested_team: dict
    review_requester: dict
    state: str
    sub_issue_id: int
    sub_issues_summary: dict
    title: str
    type: dict
    updated_at: str
    url: str
    user: dict


class Issue(IssueRequired, total=False):
    active_lock_reason: str
    after_id: int
    assignees: list
    before_id: int
    body: str
    body_html: str
    body_text: str
    color: str
    default: bool
    description: str
    draft: bool
    issue_field_values: list
    lock_reason: str
    name: str
    parent_issue_url: str
    replace_parent: bool
    state_reason: str
    timeline_url: str


class IssueLoadMatchRequired(TypedDict):
    owner: str
    repo: str


class IssueLoadMatch(IssueLoadMatchRequired, total=False):
    assignee: str
    id: int
    comment_id: int
    event_id: int


class IssueListMatch(TypedDict, total=False):
    collab: bool
    direction: str
    filter: str
    label: str
    org: bool
    owned: bool
    page: int
    per_page: int
    pull: bool
    since: str
    sort: str
    state: str


class IssueCreateDataRequired(TypedDict):
    owner: str
    repo: str
    actor: dict
    assignee: dict
    assigner: dict
    author_association: str
    closed_at: str
    closed_by: dict
    comments: int
    comments_url: str
    commit_id: str
    commit_url: str
    created_at: str
    dismissed_review: dict
    event: str
    events_url: str
    html_url: str
    id: int
    issue: dict
    issue_dependencies_summary: dict
    issue_id: int
    issue_url: str
    label: dict
    labels: list
    labels_url: str
    locked: bool
    milestone: dict
    node_id: str
    number: int
    performed_via_github_app: dict
    project_card: dict
    pull_request: dict
    reactions: dict
    rename: dict
    repository: dict
    repository_url: str
    requested_reviewer: dict
    requested_team: dict
    review_requester: dict
    state: str
    sub_issue_id: int
    sub_issues_summary: dict
    title: str
    type: dict
    updated_at: str
    url: str
    user: dict


class IssueCreateData(IssueCreateDataRequired, total=False):
    active_lock_reason: str
    after_id: int
    assignees: list
    before_id: int
    body: str
    body_html: str
    body_text: str
    color: str
    default: bool
    description: str
    draft: bool
    issue_field_values: list
    lock_reason: str
    name: str
    parent_issue_url: str
    replace_parent: bool
    state_reason: str
    timeline_url: str


class IssueUpdateDataRequired(TypedDict):
    owner: str
    repo: str


class IssueUpdateData(IssueUpdateDataRequired, total=False):
    comment_id: int
    id: int
    active_lock_reason: str
    actor: dict
    after_id: int
    assignee: dict
    assignees: list
    assigner: dict
    author_association: str
    before_id: int
    body: str
    body_html: str
    body_text: str
    closed_at: str
    closed_by: dict
    color: str
    comments: int
    comments_url: str
    commit_id: str
    commit_url: str
    created_at: str
    default: bool
    description: str
    dismissed_review: dict
    draft: bool
    event: str
    events_url: str
    html_url: str
    issue: dict
    issue_dependencies_summary: dict
    issue_field_values: list
    issue_id: int
    issue_url: str
    label: dict
    labels: list
    labels_url: str
    lock_reason: str
    locked: bool
    milestone: dict
    name: str
    node_id: str
    number: int
    parent_issue_url: str
    performed_via_github_app: dict
    project_card: dict
    pull_request: dict
    reactions: dict
    rename: dict
    replace_parent: bool
    repository: dict
    repository_url: str
    requested_reviewer: dict
    requested_team: dict
    review_requester: dict
    state: str
    state_reason: str
    sub_issue_id: int
    sub_issues_summary: dict
    timeline_url: str
    title: str
    type: dict
    updated_at: str
    url: str
    user: dict


class IssueRemoveMatchRequired(TypedDict):
    owner: str
    repo: str


class IssueRemoveMatch(IssueRemoveMatchRequired, total=False):
    id: int
    issue_id: int
    name: str
    comment_id: int
    milestone_number: int


class IssueTypeRequired(TypedDict):
    description: str
    id: int
    name: str
    node_id: str


class IssueType(IssueTypeRequired, total=False):
    color: str
    created_at: str
    is_enabled: bool
    updated_at: str


class IssueTypeListMatch(TypedDict):
    org_id: str


class IssueTypeCreateDataRequired(TypedDict):
    org_id: str
    description: str
    id: int
    name: str
    node_id: str


class IssueTypeCreateData(IssueTypeCreateDataRequired, total=False):
    color: str
    created_at: str
    is_enabled: bool
    updated_at: str


class IssueTypeUpdateDataRequired(TypedDict):
    id: int
    org_id: str


class IssueTypeUpdateData(IssueTypeUpdateDataRequired, total=False):
    color: str
    created_at: str
    description: str
    is_enabled: bool
    name: str
    node_id: str
    updated_at: str


class JobRequired(TypedDict):
    check_run_url: str
    completed_at: str
    conclusion: str
    created_at: str
    head_branch: str
    head_sha: str
    html_url: str
    id: int
    labels: list
    name: str
    node_id: str
    run_id: int
    run_url: str
    runner_group_id: int
    runner_group_name: str
    runner_id: int
    runner_name: str
    started_at: str
    status: str
    url: str
    workflow_name: str


class Job(JobRequired, total=False):
    run_attempt: int
    steps: list


class JobLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class KeyRequired(TypedDict):
    created_at: str
    id: int
    key: str
    read_only: bool
    title: str
    url: str
    verified: bool


class Key(KeyRequired, total=False):
    last_used: str


class KeyLoadMatch(TypedDict):
    id: int


class KeyListMatch(TypedDict, total=False):
    page: int
    per_page: int


class KeyCreateDataRequired(TypedDict):
    created_at: str
    id: int
    key: str
    read_only: bool
    title: str
    url: str
    verified: bool


class KeyCreateData(KeyCreateDataRequired, total=False):
    last_used: str


class LabelRequired(TypedDict):
    color: str
    default: bool
    description: str
    id: int
    name: str
    node_id: str
    url: str


class Label(LabelRequired, total=False):
    new_name: str


class LabelLoadMatch(TypedDict):
    id: str
    owner: str
    repo: str


class LabelListMatchRequired(TypedDict):
    owner: str
    repo: str


class LabelListMatch(LabelListMatchRequired, total=False):
    milestone_number: int
    page: int
    per_page: int


class LabelCreateDataRequired(TypedDict):
    owner: str
    repo: str
    color: str
    default: bool
    description: str
    id: int
    name: str
    node_id: str
    url: str


class LabelCreateData(LabelCreateDataRequired, total=False):
    new_name: str


class LabelUpdateDataRequired(TypedDict):
    id: str
    owner: str
    repo: str


class LabelUpdateData(LabelUpdateDataRequired, total=False):
    color: str
    default: bool
    description: str
    name: str
    new_name: str
    node_id: str
    url: str


class Language(TypedDict, total=False):
    C: int
    Python: int


class LanguageLoadMatch(TypedDict):
    owner: str
    repo: str


class LicenseRequired(TypedDict):
    body: str
    conditions: list
    content: str
    description: str
    download_url: str
    encoding: str
    featured: bool
    git_url: str
    html_url: str
    implementation: str
    key: str
    license: dict
    limitations: list
    links: dict
    name: str
    node_id: str
    path: str
    permissions: list
    sha: str
    size: int
    spdx_id: str
    type: str
    url: str


class License(LicenseRequired, total=False):
    id: str


class LicenseLoadMatch(TypedDict):
    id: str


class LicenseListMatch(TypedDict, total=False):
    featured: bool
    page: int
    per_page: int


class MarkdownRequired(TypedDict):
    text: str


class Markdown(MarkdownRequired, total=False):
    context: str
    mode: str


class MarkdownCreateDataRequired(TypedDict):
    text: str


class MarkdownCreateData(MarkdownCreateDataRequired, total=False):
    context: str
    mode: str


class MarketplaceListingPlan(TypedDict):
    accounts_url: str
    bullets: list
    description: str
    has_free_trial: bool
    id: int
    monthly_price_in_cents: int
    name: str
    number: int
    price_model: str
    state: str
    unit_name: str
    url: str
    yearly_price_in_cents: int


class MarketplaceListingPlanListMatch(TypedDict, total=False):
    page: int
    per_page: int


class MarketplacePurchaseRequired(TypedDict):
    id: int
    login: str
    marketplace_purchase: dict
    type: str
    url: str


class MarketplacePurchase(MarketplacePurchaseRequired, total=False):
    email: str
    marketplace_pending_change: dict
    organization_billing_email: str


class MarketplacePurchaseLoadMatch(TypedDict):
    account_id: int


class MarketplacePurchaseListMatchRequired(TypedDict):
    plan_id: int


class MarketplacePurchaseListMatch(MarketplacePurchaseListMatchRequired, total=False):
    direction: str
    page: int
    per_page: int
    sort: str


class MemberRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class Member(MemberRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class MemberListMatchRequired(TypedDict):
    org_id: str


class MemberListMatch(MemberListMatchRequired, total=False):
    filter: str
    page: int
    per_page: int
    role: str


class MembershipRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class Membership(MembershipRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class MembershipLoadMatch(TypedDict):
    enterprise: str
    id: str
    team_id: str


class MembershipListMatchRequired(TypedDict):
    enterprise: str
    enterprise_team: str


class MembershipListMatch(MembershipListMatchRequired, total=False):
    page: int
    per_page: int


class MembershipUpdateDataRequired(TypedDict):
    enterprise: str
    id: str
    team_id: str


class MembershipUpdateData(MembershipUpdateDataRequired, total=False):
    avatar_url: str
    email: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    login: str
    name: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_at: str
    starred_url: str
    subscriptions_url: str
    type: str
    url: str
    user_view_type: str


class MergedUpstreamRequired(TypedDict):
    branch: str


class MergedUpstream(MergedUpstreamRequired, total=False):
    base_branch: str
    merge_type: str
    message: str


class MergedUpstreamCreateDataRequired(TypedDict):
    owner: str
    repo: str
    branch: str


class MergedUpstreamCreateData(MergedUpstreamCreateDataRequired, total=False):
    base_branch: str
    merge_type: str
    message: str


class Meta(TypedDict):
    pass


class MetaLoadMatch(TypedDict, total=False):
    s: str


class MetaListMatch(TypedDict):
    pass


class MetarootRequired(TypedDict):
    authorizations_url: str
    code_search_url: str
    commit_search_url: str
    current_user_authorizations_html_url: str
    current_user_repositories_url: str
    current_user_url: str
    emails_url: str
    emojis_url: str
    events_url: str
    feeds_url: str
    followers_url: str
    following_url: str
    gists_url: str
    issue_search_url: str
    issues_url: str
    keys_url: str
    label_search_url: str
    notifications_url: str
    organization_repositories_url: str
    organization_teams_url: str
    organization_url: str
    public_gists_url: str
    rate_limit_url: str
    repository_search_url: str
    repository_url: str
    starred_gists_url: str
    starred_url: str
    user_organizations_url: str
    user_repositories_url: str
    user_search_url: str
    user_url: str


class Metaroot(MetarootRequired, total=False):
    hub_url: str
    topic_search_url: str


class MetarootLoadMatch(TypedDict, total=False):
    authorizations_url: str
    code_search_url: str
    commit_search_url: str
    current_user_authorizations_html_url: str
    current_user_repositories_url: str
    current_user_url: str
    emails_url: str
    emojis_url: str
    events_url: str
    feeds_url: str
    followers_url: str
    following_url: str
    gists_url: str
    hub_url: str
    issue_search_url: str
    issues_url: str
    keys_url: str
    label_search_url: str
    notifications_url: str
    organization_repositories_url: str
    organization_teams_url: str
    organization_url: str
    public_gists_url: str
    rate_limit_url: str
    repository_search_url: str
    repository_url: str
    starred_gists_url: str
    starred_url: str
    topic_search_url: str
    user_organizations_url: str
    user_repositories_url: str
    user_search_url: str
    user_url: str


class MigrationRequired(TypedDict):
    assignees_url: str
    blobs_url: str
    branches_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    deployments_url: str
    description: str
    downloads_url: str
    events_url: str
    exclude_attachments: bool
    exclude_git_data: bool
    exclude_metadata: bool
    exclude_owner_projects: bool
    exclude_releases: bool
    fork: bool
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    guid: str
    hooks_url: str
    html_url: str
    id: int
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    languages_url: str
    lock_repositories: bool
    merges_url: str
    milestones_url: str
    name: str
    node_id: str
    notifications_url: str
    org_metadata_only: bool
    owner: dict
    private: bool
    pulls_url: str
    releases_url: str
    repositories: list
    stargazers_url: str
    state: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    updated_at: str
    url: str


class Migration(MigrationRequired, total=False):
    allow_forking: bool
    archive_url: str
    archived: bool
    clone_url: str
    custom_properties: dict
    default_branch: str
    delete_branch_on_merge: bool
    disabled: bool
    exclude: list
    forks: int
    forks_count: int
    git_url: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    is_template: bool
    language: str
    license: dict
    mirror_url: str
    network_count: int
    open_issues: int
    open_issues_count: int
    permissions: dict
    pushed_at: str
    role_name: str
    security_and_analysis: dict
    size: int
    ssh_url: str
    stargazers_count: int
    subscribers_count: int
    svn_url: str
    temp_clone_token: str
    topics: list
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool


class MigrationLoadMatchRequired(TypedDict):
    id: int


class MigrationLoadMatch(MigrationLoadMatchRequired, total=False):
    org_id: str
    exclude: list


class MigrationListMatch(TypedDict, total=False):
    page: int
    per_page: int


class MigrationCreateDataRequired(TypedDict):
    assignees_url: str
    blobs_url: str
    branches_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    deployments_url: str
    description: str
    downloads_url: str
    events_url: str
    exclude_attachments: bool
    exclude_git_data: bool
    exclude_metadata: bool
    exclude_owner_projects: bool
    exclude_releases: bool
    fork: bool
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    guid: str
    hooks_url: str
    html_url: str
    id: int
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    languages_url: str
    lock_repositories: bool
    merges_url: str
    milestones_url: str
    name: str
    node_id: str
    notifications_url: str
    org_metadata_only: bool
    owner: dict
    private: bool
    pulls_url: str
    releases_url: str
    repositories: list
    stargazers_url: str
    state: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    updated_at: str
    url: str


class MigrationCreateData(MigrationCreateDataRequired, total=False):
    allow_forking: bool
    archive_url: str
    archived: bool
    clone_url: str
    custom_properties: dict
    default_branch: str
    delete_branch_on_merge: bool
    disabled: bool
    exclude: list
    forks: int
    forks_count: int
    git_url: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    is_template: bool
    language: str
    license: dict
    mirror_url: str
    network_count: int
    open_issues: int
    open_issues_count: int
    permissions: dict
    pushed_at: str
    role_name: str
    security_and_analysis: dict
    size: int
    ssh_url: str
    stargazers_count: int
    subscribers_count: int
    svn_url: str
    temp_clone_token: str
    topics: list
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool


class MigrationRemoveMatch(TypedDict):
    owner: str
    repo: str


class MilestoneRequired(TypedDict):
    avatar_url: str
    closed_at: str
    closed_issues: int
    created_at: str
    creator: dict
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    labels_url: str
    login: str
    node_id: str
    number: int
    open_issues: int
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    title: str
    type: str
    updated_at: str
    url: str


class Milestone(MilestoneRequired, total=False):
    description: str
    due_on: str
    email: str
    name: str
    starred_at: str
    state: str
    user_view_type: str


class MilestoneLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class MilestoneListMatchRequired(TypedDict):
    owner: str
    repo: str


class MilestoneListMatch(MilestoneListMatchRequired, total=False):
    direction: str
    page: int
    per_page: int
    sort: str
    state: str


class MilestoneCreateDataRequired(TypedDict):
    owner: str
    repo: str
    avatar_url: str
    closed_at: str
    closed_issues: int
    created_at: str
    creator: dict
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    labels_url: str
    login: str
    node_id: str
    number: int
    open_issues: int
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    title: str
    type: str
    updated_at: str
    url: str


class MilestoneCreateData(MilestoneCreateDataRequired, total=False):
    description: str
    due_on: str
    email: str
    name: str
    starred_at: str
    state: str
    user_view_type: str


class MilestoneUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class MilestoneUpdateData(MilestoneUpdateDataRequired, total=False):
    avatar_url: str
    closed_at: str
    closed_issues: int
    created_at: str
    creator: dict
    description: str
    due_on: str
    email: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    labels_url: str
    login: str
    name: str
    node_id: str
    number: int
    open_issues: int
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_at: str
    starred_url: str
    state: str
    subscriptions_url: str
    title: str
    type: str
    updated_at: str
    url: str
    user_view_type: str


class MinimalRepositoryRequired(TypedDict):
    archive_url: str
    assignees_url: str
    blobs_url: str
    branches_url: str
    code_of_conduct: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    deployments_url: str
    description: str
    downloads_url: str
    events_url: str
    fork: bool
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    hooks_url: str
    html_url: str
    id: int
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    languages_url: str
    merges_url: str
    milestones_url: str
    name: str
    node_id: str
    notifications_url: str
    owner: dict
    private: bool
    pulls_url: str
    releases_url: str
    stargazers_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    url: str


class MinimalRepository(MinimalRepositoryRequired, total=False):
    allow_forking: bool
    archived: bool
    clone_url: str
    created_at: str
    custom_properties: dict
    default_branch: str
    delete_branch_on_merge: bool
    disabled: bool
    forks: int
    forks_count: int
    git_url: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    is_template: bool
    language: str
    license: dict
    mirror_url: str
    network_count: int
    open_issues: int
    open_issues_count: int
    permissions: dict
    pushed_at: str
    role_name: str
    security_and_analysis: dict
    size: int
    ssh_url: str
    stargazers_count: int
    subscribers_count: int
    svn_url: str
    temp_clone_token: str
    topics: list
    updated_at: str
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool


class MinimalRepositoryListMatch(TypedDict, total=False):
    since: int


class NetworkConfigurationRequired(TypedDict):
    created_on: str
    id: str
    name: str


class NetworkConfiguration(NetworkConfigurationRequired, total=False):
    compute_service: str
    network_settings_ids: list


class NetworkConfigurationLoadMatch(TypedDict):
    id: str
    org_id: str


class NetworkConfigurationCreateDataRequired(TypedDict):
    org_id: str
    created_on: str
    id: str
    name: str


class NetworkConfigurationCreateData(NetworkConfigurationCreateDataRequired, total=False):
    compute_service: str
    network_settings_ids: list


class NetworkConfigurationUpdateDataRequired(TypedDict):
    id: str
    org_id: str


class NetworkConfigurationUpdateData(NetworkConfigurationUpdateDataRequired, total=False):
    compute_service: str
    created_on: str
    name: str
    network_settings_ids: list


class NetworkSettingRequired(TypedDict):
    id: str
    name: str
    region: str
    subnet_id: str


class NetworkSetting(NetworkSettingRequired, total=False):
    network_configuration_id: str


class NetworkSettingLoadMatch(TypedDict):
    id: str
    org_id: str


class OidcCustomSub(TypedDict):
    include_claim_keys: list


class OidcCustomSubListMatch(TypedDict):
    org_id: str


class OidcCustomSubRepoRequired(TypedDict):
    use_default: bool


class OidcCustomSubRepo(OidcCustomSubRepoRequired, total=False):
    include_claim_keys: list


class OidcCustomSubRepoListMatch(TypedDict):
    owner: str
    repo: str


class OrgRequired(TypedDict):
    access_tokens_url: str
    account: Any
    action: str
    app_id: int
    app_slug: str
    avatar_url: str
    created_at: str
    digest: str
    events: list
    events_url: str
    hooks_url: str
    html_url: str
    id: int
    issues_url: str
    login: str
    members_url: str
    name: str
    node_id: str
    organization: dict
    organization_url: str
    pat_ids: list
    permissions: dict
    private_repos: int
    properties: list
    public_members_url: str
    registry_url: str
    repos_url: str
    repositories_url: str
    repository_names: list
    repository_selection: str
    role: str
    single_file_name: str
    space: int
    state: str
    subject_digests: list
    suspended_at: str
    suspended_by: dict
    target_id: int
    target_type: str
    updated_at: str
    url: str
    user: dict


class Org(OrgRequired, total=False):
    advanced_security_enabled_for_new_repositories: bool
    artifact_url: str
    attestations: list
    attestations_subject_digests: dict
    base_role: str
    billing_email: str
    blog: str
    client_id: str
    company: str
    contact_email: str
    default_repository_permission: str
    dependabot_alerts_enabled_for_new_repositories: bool
    dependabot_security_updates_enabled_for_new_repositories: bool
    dependency_graph_enabled_for_new_repositories: bool
    deploy_keys_enabled_for_repositories: bool
    description: str
    direct_membership: bool
    email: str
    enterprise_teams_providing_indirect_membership: list
    filled_seats: int
    has_multiple_single_files: bool
    has_organization_projects: bool
    has_repository_projects: bool
    location: str
    members_allowed_repository_creation_type: str
    members_can_create_internal_repositories: bool
    members_can_create_pages: bool
    members_can_create_private_pages: bool
    members_can_create_private_repositories: bool
    members_can_create_public_pages: bool
    members_can_create_public_repositories: bool
    members_can_create_repositories: bool
    members_can_fork_private_repositories: bool
    page_info: dict
    pat_request_ids: list
    path: str
    predicate_type: str
    query_suite: str
    reason: str
    repository: str
    seats: int
    secret_scanning_enabled_for_new_repositories: bool
    secret_scanning_push_protection_custom_link: str
    secret_scanning_push_protection_custom_link_enabled: bool
    secret_scanning_push_protection_enabled_for_new_repositories: bool
    single_file_paths: list
    source: str
    status: str
    storage_records: list
    total_count: int
    twitter_username: str
    web_commit_signoff_required: bool


class OrgLoadMatchRequired(TypedDict):
    id: str


class OrgLoadMatch(OrgLoadMatchRequired, total=False):
    subject_digest: str
    after: str
    before: str
    per_page: int
    predicate_type: str
    username: str


class OrgListMatch(TypedDict, total=False):
    page: int
    per_page: int


class OrgCreateDataRequired(TypedDict):
    enablement: str
    org: str
    security_product: str
    access_tokens_url: str
    account: Any
    action: str
    app_id: int
    app_slug: str
    avatar_url: str
    created_at: str
    digest: str
    events: list
    events_url: str
    hooks_url: str
    html_url: str
    id: int
    issues_url: str
    login: str
    members_url: str
    name: str
    node_id: str
    organization: dict
    organization_url: str
    pat_ids: list
    permissions: dict
    private_repos: int
    properties: list
    public_members_url: str
    registry_url: str
    repos_url: str
    repositories_url: str
    repository_names: list
    repository_selection: str
    role: str
    single_file_name: str
    space: int
    state: str
    subject_digests: list
    suspended_at: str
    suspended_by: dict
    target_id: int
    target_type: str
    updated_at: str
    url: str
    user: dict


class OrgCreateData(OrgCreateDataRequired, total=False):
    advanced_security_enabled_for_new_repositories: bool
    artifact_url: str
    attestations: list
    attestations_subject_digests: dict
    base_role: str
    billing_email: str
    blog: str
    client_id: str
    company: str
    contact_email: str
    default_repository_permission: str
    dependabot_alerts_enabled_for_new_repositories: bool
    dependabot_security_updates_enabled_for_new_repositories: bool
    dependency_graph_enabled_for_new_repositories: bool
    deploy_keys_enabled_for_repositories: bool
    description: str
    direct_membership: bool
    email: str
    enterprise_teams_providing_indirect_membership: list
    filled_seats: int
    has_multiple_single_files: bool
    has_organization_projects: bool
    has_repository_projects: bool
    location: str
    members_allowed_repository_creation_type: str
    members_can_create_internal_repositories: bool
    members_can_create_pages: bool
    members_can_create_private_pages: bool
    members_can_create_private_repositories: bool
    members_can_create_public_pages: bool
    members_can_create_public_repositories: bool
    members_can_create_repositories: bool
    members_can_fork_private_repositories: bool
    page_info: dict
    pat_request_ids: list
    path: str
    predicate_type: str
    query_suite: str
    reason: str
    repository: str
    seats: int
    secret_scanning_enabled_for_new_repositories: bool
    secret_scanning_push_protection_custom_link: str
    secret_scanning_push_protection_custom_link_enabled: bool
    secret_scanning_push_protection_enabled_for_new_repositories: bool
    single_file_paths: list
    source: str
    status: str
    storage_records: list
    total_count: int
    twitter_username: str
    web_commit_signoff_required: bool


class OrgUpdateDataRequired(TypedDict):
    id: str
    username: str


class OrgUpdateData(OrgUpdateDataRequired, total=False):
    access_tokens_url: str
    account: Any
    action: str
    advanced_security_enabled_for_new_repositories: bool
    app_id: int
    app_slug: str
    artifact_url: str
    attestations: list
    attestations_subject_digests: dict
    avatar_url: str
    base_role: str
    billing_email: str
    blog: str
    client_id: str
    company: str
    contact_email: str
    created_at: str
    default_repository_permission: str
    dependabot_alerts_enabled_for_new_repositories: bool
    dependabot_security_updates_enabled_for_new_repositories: bool
    dependency_graph_enabled_for_new_repositories: bool
    deploy_keys_enabled_for_repositories: bool
    description: str
    digest: str
    direct_membership: bool
    email: str
    enterprise_teams_providing_indirect_membership: list
    events: list
    events_url: str
    filled_seats: int
    has_multiple_single_files: bool
    has_organization_projects: bool
    has_repository_projects: bool
    hooks_url: str
    html_url: str
    issues_url: str
    location: str
    login: str
    members_allowed_repository_creation_type: str
    members_can_create_internal_repositories: bool
    members_can_create_pages: bool
    members_can_create_private_pages: bool
    members_can_create_private_repositories: bool
    members_can_create_public_pages: bool
    members_can_create_public_repositories: bool
    members_can_create_repositories: bool
    members_can_fork_private_repositories: bool
    members_url: str
    name: str
    node_id: str
    organization: dict
    organization_url: str
    page_info: dict
    pat_ids: list
    pat_request_ids: list
    path: str
    permissions: dict
    predicate_type: str
    private_repos: int
    properties: list
    public_members_url: str
    query_suite: str
    reason: str
    registry_url: str
    repos_url: str
    repositories_url: str
    repository: str
    repository_names: list
    repository_selection: str
    role: str
    seats: int
    secret_scanning_enabled_for_new_repositories: bool
    secret_scanning_push_protection_custom_link: str
    secret_scanning_push_protection_custom_link_enabled: bool
    secret_scanning_push_protection_enabled_for_new_repositories: bool
    single_file_name: str
    single_file_paths: list
    source: str
    space: int
    state: str
    status: str
    storage_records: list
    subject_digests: list
    suspended_at: str
    suspended_by: dict
    target_id: int
    target_type: str
    total_count: int
    twitter_username: str
    updated_at: str
    url: str
    user: dict
    web_commit_signoff_required: bool


class OrgRemoveMatch(TypedDict):
    id: str


class OrgHookRequired(TypedDict):
    active: bool
    config: dict
    created_at: str
    events: list
    id: int
    name: str
    ping_url: str
    type: str
    updated_at: str
    url: str


class OrgHook(OrgHookRequired, total=False):
    deliveries_url: str


class OrgHookLoadMatch(TypedDict):
    id: int
    org_id: str


class OrgHookListMatchRequired(TypedDict):
    id: str


class OrgHookListMatch(OrgHookListMatchRequired, total=False):
    page: int
    per_page: int


class OrgHookCreateDataRequired(TypedDict):
    id: str
    active: bool
    config: dict
    created_at: str
    events: list
    name: str
    ping_url: str
    type: str
    updated_at: str
    url: str


class OrgHookCreateData(OrgHookCreateDataRequired, total=False):
    deliveries_url: str


class OrgHookUpdateDataRequired(TypedDict):
    id: int
    org_id: str


class OrgHookUpdateData(OrgHookUpdateDataRequired, total=False):
    active: bool
    config: dict
    created_at: str
    deliveries_url: str
    events: list
    name: str
    ping_url: str
    type: str
    updated_at: str
    url: str


class OrgMembershipRequired(TypedDict):
    organization: dict
    organization_url: str
    permissions: dict
    role: str
    state: str
    url: str
    user: dict


class OrgMembership(OrgMembershipRequired, total=False):
    direct_membership: bool
    enterprise_teams_providing_indirect_membership: list
    id: str


class OrgMembershipLoadMatch(TypedDict):
    id: str
    org_id: str


class OrgMembershipUpdateDataRequired(TypedDict):
    id: str
    org_id: str


class OrgMembershipUpdateData(OrgMembershipUpdateDataRequired, total=False):
    direct_membership: bool
    enterprise_teams_providing_indirect_membership: list
    organization: dict
    organization_url: str
    permissions: dict
    role: str
    state: str
    url: str
    user: dict


class OrgPrivateRegistryConfigurationRequired(TypedDict):
    created_at: str
    name: str
    registry_type: str
    updated_at: str
    visibility: str


class OrgPrivateRegistryConfiguration(OrgPrivateRegistryConfigurationRequired, total=False):
    username: str


class OrgPrivateRegistryConfigurationLoadMatch(TypedDict):
    org_id: str
    secret_name: str


class OrgPrivateRegistryConfigurationWithSelectedRepositoryRequired(TypedDict):
    encrypted_value: str
    key_id: str
    registry_type: str
    url: str
    visibility: str


class OrgPrivateRegistryConfigurationWithSelectedRepository(OrgPrivateRegistryConfigurationWithSelectedRepositoryRequired, total=False):
    id: str
    selected_repository_ids: list
    username: str


class OrgPrivateRegistryConfigurationWithSelectedRepositoryCreateDataRequired(TypedDict):
    id: str
    encrypted_value: str
    key_id: str
    registry_type: str
    url: str
    visibility: str


class OrgPrivateRegistryConfigurationWithSelectedRepositoryCreateData(OrgPrivateRegistryConfigurationWithSelectedRepositoryCreateDataRequired, total=False):
    selected_repository_ids: list
    username: str


class OrgRepoCustomPropertyValue(TypedDict):
    properties: list
    repository_full_name: str
    repository_id: int
    repository_name: str


class OrgRepoCustomPropertyValueListMatchRequired(TypedDict):
    org_id: str


class OrgRepoCustomPropertyValueListMatch(OrgRepoCustomPropertyValueListMatchRequired, total=False):
    page: int
    per_page: int
    repository_query: str


class Organization(TypedDict):
    pass


class OrganizationActionsSecretRequired(TypedDict):
    created_at: str
    name: str
    updated_at: str
    visibility: str


class OrganizationActionsSecret(OrganizationActionsSecretRequired, total=False):
    id: str
    selected_repositories_url: str


class OrganizationActionsSecretLoadMatch(TypedDict):
    id: str
    org_id: str


class OrganizationActionsVariableRequired(TypedDict):
    created_at: str
    name: str
    updated_at: str
    value: str
    visibility: str


class OrganizationActionsVariable(OrganizationActionsVariableRequired, total=False):
    id: str
    selected_repositories_url: str


class OrganizationActionsVariableLoadMatch(TypedDict):
    id: str
    org_id: str


class OrganizationDependabotSecretRequired(TypedDict):
    created_at: str
    name: str
    updated_at: str
    visibility: str


class OrganizationDependabotSecret(OrganizationDependabotSecretRequired, total=False):
    id: str
    selected_repositories_url: str


class OrganizationDependabotSecretLoadMatch(TypedDict):
    id: str
    org_id: str


class OrganizationInvitationRequired(TypedDict):
    created_at: str
    id: int
    invitation_teams_url: str
    inviter: dict
    login: str
    node_id: str
    team_count: int


class OrganizationInvitation(OrganizationInvitationRequired, total=False):
    email: str
    failed_at: str
    failed_reason: str
    invitation_source: str
    invitee_id: int
    role: str
    team_ids: list


class OrganizationInvitationListMatchRequired(TypedDict):
    org_id: str


class OrganizationInvitationListMatch(OrganizationInvitationListMatchRequired, total=False):
    invitation_source: str
    page: int
    per_page: int
    role: str


class OrganizationInvitationCreateDataRequired(TypedDict):
    org_id: str
    created_at: str
    id: int
    invitation_teams_url: str
    inviter: dict
    login: str
    node_id: str
    team_count: int


class OrganizationInvitationCreateData(OrganizationInvitationCreateDataRequired, total=False):
    email: str
    failed_at: str
    failed_reason: str
    invitation_source: str
    invitee_id: int
    role: str
    team_ids: list


class OrganizationProgrammaticAccessGrant(TypedDict):
    access_granted_at: str
    created_at: str
    id: int
    owner: dict
    permissions: dict
    reason: str
    repositories_url: str
    repository_selection: str
    token_expired: bool
    token_expires_at: str
    token_id: int
    token_last_used_at: str
    token_name: str


class OrganizationProgrammaticAccessGrantListMatchRequired(TypedDict):
    org_id: str


class OrganizationProgrammaticAccessGrantListMatch(OrganizationProgrammaticAccessGrantListMatchRequired, total=False):
    direction: str
    last_used_after: str
    last_used_before: str
    owner: list
    page: int
    per_page: int
    permission: str
    repository: str
    sort: str
    token_id: list


class OrganizationRoleRequired(TypedDict):
    created_at: str
    id: int
    name: str
    organization: dict
    permissions: list
    updated_at: str


class OrganizationRole(OrganizationRoleRequired, total=False):
    base_role: str
    description: str
    source: str


class OrganizationRoleLoadMatch(TypedDict):
    id: int
    org_id: str


class OrganizationSecretScanningAlertRequired(TypedDict):
    push_protection_bypass_request_reviewer: dict
    push_protection_bypassed_by: dict
    repository: dict
    resolved_by: dict


class OrganizationSecretScanningAlert(OrganizationSecretScanningAlertRequired, total=False):
    created_at: str
    first_location_detected: Any
    has_more_locations: bool
    html_url: str
    is_base64_encoded: bool
    locations_url: str
    multi_repo: bool
    number: int
    publicly_leaked: bool
    push_protection_bypass_request_comment: str
    push_protection_bypass_request_html_url: str
    push_protection_bypass_request_reviewer_comment: str
    push_protection_bypassed: bool
    push_protection_bypassed_at: str
    resolution: str
    resolution_comment: str
    resolved_at: str
    secret: str
    secret_type: str
    secret_type_display_name: str
    state: str
    updated_at: str
    url: str
    validity: str


class OrganizationSecretScanningAlertListMatchRequired(TypedDict):
    org_id: str


class OrganizationSecretScanningAlertListMatch(OrganizationSecretScanningAlertListMatchRequired, total=False):
    after: str
    before: str
    direction: str
    hide_secret: bool
    is_multi_repo: bool
    is_publicly_leaked: bool
    page: int
    per_page: int
    resolution: str
    secret_type: str
    sort: str
    state: str
    validity: str


class OutsideCollaboratorRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class OutsideCollaborator(OutsideCollaboratorRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class OutsideCollaboratorListMatchRequired(TypedDict):
    org_id: str


class OutsideCollaboratorListMatch(OutsideCollaboratorListMatchRequired, total=False):
    filter: str
    page: int
    per_page: int


class PackageRequired(TypedDict):
    container: dict
    created_at: str
    docker: dict
    github_id: int
    html_url: str
    id: str
    included_gigabytes_bandwidth: int
    metadata: dict
    name: str
    owner: dict
    package_html_url: str
    package_type: str
    repository: dict
    total_gigabytes_bandwidth_used: int
    total_paid_gigabytes_bandwidth_used: int
    updated_at: str
    url: str
    version_count: int
    visibility: str


class Package(PackageRequired, total=False):
    deleted_at: str
    description: str
    license: str


class PackageLoadMatch(TypedDict):
    package_name: str
    package_type: str


class PackageListMatchRequired(TypedDict):
    package_type: str


class PackageListMatch(PackageListMatchRequired, total=False):
    page: int
    per_page: int
    visibility: str


class PackageCreateDataRequired(TypedDict):
    package_id: str
    package_name: str
    container: dict
    created_at: str
    docker: dict
    github_id: int
    html_url: str
    id: str
    included_gigabytes_bandwidth: int
    metadata: dict
    name: str
    owner: dict
    package_html_url: str
    package_type: str
    repository: dict
    total_gigabytes_bandwidth_used: int
    total_paid_gigabytes_bandwidth_used: int
    updated_at: str
    url: str
    version_count: int
    visibility: str


class PackageCreateData(PackageCreateDataRequired, total=False):
    org_id: str
    token: str
    username: str
    deleted_at: str
    description: str
    license: str


class PackageRemoveMatchRequired(TypedDict):
    package_name: str


class PackageRemoveMatch(PackageRemoveMatchRequired, total=False):
    org_id: str
    package_id: str
    package_version_id: int
    username: str
    org: str
    package_type: str


class PageRequired(TypedDict):
    cname: str
    custom_404: bool
    https_certificate: dict
    public: bool
    source: dict
    status: str
    url: str


class Page(PageRequired, total=False):
    build_type: str
    html_url: str
    https_enforced: bool
    pending_domain_unverified_at: str
    protected_domain_state: str


class PageLoadMatch(TypedDict):
    owner: str
    repo: str


class PageCreateDataRequired(TypedDict):
    owner: str
    repo: str
    cname: str
    custom_404: bool
    https_certificate: dict
    public: bool
    source: dict
    status: str
    url: str


class PageCreateData(PageCreateDataRequired, total=False):
    build_type: str
    html_url: str
    https_enforced: bool
    pending_domain_unverified_at: str
    protected_domain_state: str


class PageBuildRequired(TypedDict):
    commit: str
    created_at: str
    duration: int
    error: dict
    pusher: dict
    status: str
    updated_at: str
    url: str


class PageBuild(PageBuildRequired, total=False):
    id: str


class PageBuildLoadMatchRequired(TypedDict):
    owner: str
    repo: str


class PageBuildLoadMatch(PageBuildLoadMatchRequired, total=False):
    id: int


class PageBuildListMatchRequired(TypedDict):
    owner: str
    repo: str


class PageBuildListMatch(PageBuildListMatchRequired, total=False):
    page: int
    per_page: int


class PageBuildStatus(TypedDict, total=False):
    status: str
    url: str


class PageBuildStatusCreateDataRequired(TypedDict):
    owner: str
    repo: str


class PageBuildStatusCreateData(PageBuildStatusCreateDataRequired, total=False):
    status: str
    url: str


class PageDeploymentRequired(TypedDict):
    oidc_token: str
    pages_build_version: str


class PageDeployment(PageDeploymentRequired, total=False):
    artifact_id: float
    artifact_url: str
    environment: str


class PageDeploymentCreateDataRequired(TypedDict):
    owner: str
    repo: str
    oidc_token: str
    pages_build_version: str


class PageDeploymentCreateData(PageDeploymentCreateDataRequired, total=False):
    artifact_id: float
    artifact_url: str
    environment: str


class PagesDeploymentStatus(TypedDict, total=False):
    status: str


class PagesDeploymentStatusLoadMatch(TypedDict):
    owner: str
    pages_deployment_id: str
    repo: str


class PagesDeploymentStatusCreateDataRequired(TypedDict):
    deployment_id: str
    owner: str
    repo: str


class PagesDeploymentStatusCreateData(PagesDeploymentStatusCreateDataRequired, total=False):
    status: str


class PagesHealthCheck(TypedDict, total=False):
    alt_domain: dict
    domain: dict


class PagesHealthCheckLoadMatch(TypedDict):
    owner: str
    repo: str


class Participation(TypedDict):
    all: list
    owner: list


class ParticipationListMatch(TypedDict):
    owner: str
    repo: str


class PendingDeployment(TypedDict):
    current_user_can_approve: bool
    environment: dict
    reviewers: list
    wait_timer: int
    wait_timer_started_at: str


class PendingDeploymentListMatch(TypedDict):
    owner: str
    repo: str
    run_id: int


class PorterAuthor(TypedDict):
    email: str
    id: int
    import_url: str
    name: str
    remote_id: str
    remote_name: str
    url: str


class PorterAuthorListMatchRequired(TypedDict):
    owner: str
    repo: str


class PorterAuthorListMatch(PorterAuthorListMatchRequired, total=False):
    since: int


class PorterAuthorUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class PorterAuthorUpdateData(PorterAuthorUpdateDataRequired, total=False):
    email: str
    import_url: str
    name: str
    remote_id: str
    remote_name: str
    url: str


class PorterLargeFile(TypedDict):
    oid: str
    path: str
    ref_name: str
    size: int


class PorterLargeFileListMatch(TypedDict):
    owner: str
    repo: str


class PrivateRegistryRequired(TypedDict):
    created_at: str
    key: str
    key_id: str
    name: str
    updated_at: str


class PrivateRegistry(PrivateRegistryRequired, total=False):
    encrypted_value: str
    id: str
    registry_type: str
    selected_repository_ids: list
    url: str
    username: str
    visibility: str


class PrivateRegistryLoadMatch(TypedDict):
    org_id: str


class PrivateRegistryListMatchRequired(TypedDict):
    org_id: str


class PrivateRegistryListMatch(PrivateRegistryListMatchRequired, total=False):
    page: int
    per_page: int


class PrivateRegistryUpdateDataRequired(TypedDict):
    id: str
    org_id: str


class PrivateRegistryUpdateData(PrivateRegistryUpdateDataRequired, total=False):
    created_at: str
    encrypted_value: str
    key: str
    key_id: str
    name: str
    registry_type: str
    selected_repository_ids: list
    updated_at: str
    url: str
    username: str
    visibility: str


class PrivateRegistryRemoveMatch(TypedDict):
    id: str
    org_id: str


class PrivateUser(TypedDict):
    pass


class ProjectRequired(TypedDict):
    avatar_url: str
    columns_url: str
    created_at: str
    creator: dict
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    number: int
    organizations_url: str
    owner_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    updated_at: str
    url: str


class Project(ProjectRequired, total=False):
    body: str
    email: str
    name: str
    organization_permission: str
    private: bool
    starred_at: str
    state: str
    user_view_type: str


class ProjectLoadMatch(TypedDict):
    id: int


class ProjectListMatchRequired(TypedDict):
    org_id: str


class ProjectListMatch(ProjectListMatchRequired, total=False):
    page: int
    per_page: int
    state: str


class ProjectCreateDataRequired(TypedDict):
    avatar_url: str
    columns_url: str
    created_at: str
    creator: dict
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    number: int
    organizations_url: str
    owner_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    updated_at: str
    url: str


class ProjectCreateData(ProjectCreateDataRequired, total=False):
    body: str
    email: str
    name: str
    organization_permission: str
    private: bool
    starred_at: str
    state: str
    user_view_type: str


class ProjectUpdateDataRequired(TypedDict):
    id: int


class ProjectUpdateData(ProjectUpdateDataRequired, total=False):
    avatar_url: str
    body: str
    columns_url: str
    created_at: str
    creator: dict
    email: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    login: str
    name: str
    node_id: str
    number: int
    organization_permission: str
    organizations_url: str
    owner_url: str
    private: bool
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_at: str
    starred_url: str
    state: str
    subscriptions_url: str
    type: str
    updated_at: str
    url: str
    user_view_type: str


class ProjectRemoveMatch(TypedDict):
    id: int


class ProjectCollaboratorPermissionRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class ProjectCollaboratorPermission(ProjectCollaboratorPermissionRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class ProjectCollaboratorPermissionLoadMatch(TypedDict):
    project_id: int
    username: str


class ProjectColumn(TypedDict):
    cards_url: str
    created_at: str
    id: int
    name: str
    node_id: str
    project_url: str
    updated_at: str
    url: str


class ProjectColumnLoadMatch(TypedDict):
    id: int


class ProjectColumnListMatchRequired(TypedDict):
    id: int


class ProjectColumnListMatch(ProjectColumnListMatchRequired, total=False):
    page: int
    per_page: int


class ProjectColumnCreateData(TypedDict):
    id: int
    cards_url: str
    created_at: str
    name: str
    node_id: str
    project_url: str
    updated_at: str
    url: str


class ProjectColumnUpdateDataRequired(TypedDict):
    id: int


class ProjectColumnUpdateData(ProjectColumnUpdateDataRequired, total=False):
    cards_url: str
    created_at: str
    name: str
    node_id: str
    project_url: str
    updated_at: str
    url: str


class ProjectsClassicRequired(TypedDict):
    position: str


class ProjectsClassic(ProjectsClassicRequired, total=False):
    permission: str


class ProjectsClassicCreateDataRequired(TypedDict):
    column_id: int
    position: str


class ProjectsClassicCreateData(ProjectsClassicCreateDataRequired, total=False):
    permission: str


class ProjectsClassicUpdateDataRequired(TypedDict):
    project_id: int
    username: str


class ProjectsClassicUpdateData(ProjectsClassicUpdateDataRequired, total=False):
    permission: str
    position: str


class ProjectsClassicRemoveMatch(TypedDict):
    column_id: int


class ProjectsV2Required(TypedDict):
    closed_at: str
    created_at: str
    creator: dict
    deleted_at: str
    deleted_by: dict
    description: str
    id: float
    latest_status_update: dict
    node_id: str
    number: int
    owner: dict
    public: bool
    short_description: str
    title: str
    updated_at: str


class ProjectsV2(ProjectsV2Required, total=False):
    is_template: bool
    state: str


class ProjectsV2LoadMatchRequired(TypedDict):
    id: int


class ProjectsV2LoadMatch(ProjectsV2LoadMatchRequired, total=False):
    org_id: str
    username: str


class ProjectsV2ListMatchRequired(TypedDict):
    org_id: str


class ProjectsV2ListMatch(ProjectsV2ListMatchRequired, total=False):
    after: str
    before: str
    per_page: int
    q: str


class ProjectsV2FieldRequired(TypedDict):
    created_at: str
    data_type: str
    id: int
    name: str
    project_url: str
    updated_at: str


class ProjectsV2Field(ProjectsV2FieldRequired, total=False):
    configuration: dict
    node_id: str
    options: list


class ProjectsV2FieldLoadMatchRequired(TypedDict):
    id: int
    projects_v2_id: int


class ProjectsV2FieldLoadMatch(ProjectsV2FieldLoadMatchRequired, total=False):
    org_id: str
    username: str


class ProjectsV2FieldListMatchRequired(TypedDict):
    project_number: int


class ProjectsV2FieldListMatch(ProjectsV2FieldListMatchRequired, total=False):
    org_id: str
    after: str
    before: str
    per_page: int
    username: str


class ProjectsV2ItemSimple(TypedDict):
    id: int
    type: str


class ProjectsV2ItemSimpleCreateDataRequired(TypedDict):
    project_number: int
    id: int
    type: str


class ProjectsV2ItemSimpleCreateData(ProjectsV2ItemSimpleCreateDataRequired, total=False):
    org_id: str
    username: str


class ProjectsV2ItemWithContentRequired(TypedDict):
    archived_at: str
    content_type: str
    created_at: str
    creator: dict
    id: float
    updated_at: str


class ProjectsV2ItemWithContent(ProjectsV2ItemWithContentRequired, total=False):
    content: dict
    fields: list
    item_url: str
    node_id: str
    project_url: str


class ProjectsV2ItemWithContentLoadMatchRequired(TypedDict):
    item_id: int
    projects_v2_id: int


class ProjectsV2ItemWithContentLoadMatch(ProjectsV2ItemWithContentLoadMatchRequired, total=False):
    org_id: str
    field: list
    username: str


class ProjectsV2ItemWithContentListMatchRequired(TypedDict):
    project_number: int


class ProjectsV2ItemWithContentListMatch(ProjectsV2ItemWithContentListMatchRequired, total=False):
    org_id: str
    after: str
    before: str
    field: list
    per_page: int
    q: str
    username: str


class ProjectsV2ItemWithContentUpdateDataRequired(TypedDict):
    item_id: int
    projects_v2_id: int


class ProjectsV2ItemWithContentUpdateData(ProjectsV2ItemWithContentUpdateDataRequired, total=False):
    org_id: str
    username: str
    archived_at: str
    content: dict
    content_type: str
    created_at: str
    creator: dict
    fields: list
    id: float
    item_url: str
    node_id: str
    project_url: str
    updated_at: str


class ProtectedBranchRequired(TypedDict):
    allow_deletions: dict
    allow_force_pushes: dict
    block_creations: dict
    enforce_admins: dict
    required_linear_history: dict
    required_pull_request_reviews: dict
    required_signatures: dict
    required_status_checks: dict
    restrictions: dict
    url: str


class ProtectedBranch(ProtectedBranchRequired, total=False):
    allow_fork_syncing: dict
    lock_branch: dict
    required_conversation_resolution: dict


class ProtectedBranchUpdateDataRequired(TypedDict):
    branch_id: str
    owner: str
    repo: str


class ProtectedBranchUpdateData(ProtectedBranchUpdateDataRequired, total=False):
    allow_deletions: dict
    allow_force_pushes: dict
    allow_fork_syncing: dict
    block_creations: dict
    enforce_admins: dict
    lock_branch: dict
    required_conversation_resolution: dict
    required_linear_history: dict
    required_pull_request_reviews: dict
    required_signatures: dict
    required_status_checks: dict
    restrictions: dict
    url: str


class ProtectedBranchAdminEnforced(TypedDict):
    enabled: bool
    url: str


class ProtectedBranchAdminEnforcedLoadMatch(TypedDict):
    branch_id: str
    owner: str
    repo: str


class ProtectedBranchAdminEnforcedCreateData(TypedDict):
    branch_id: str
    owner: str
    repo: str
    enabled: bool
    url: str


class ProtectedBranchPullRequestReviewRequired(TypedDict):
    dismiss_stale_reviews: bool
    require_code_owner_reviews: bool


class ProtectedBranchPullRequestReview(ProtectedBranchPullRequestReviewRequired, total=False):
    bypass_pull_request_allowances: dict
    dismissal_restrictions: dict
    require_last_push_approval: bool
    required_approving_review_count: int
    url: str


class ProtectedBranchPullRequestReviewLoadMatch(TypedDict):
    branch_id: str
    owner: str
    repo: str


class ProtectedBranchPullRequestReviewUpdateDataRequired(TypedDict):
    branch_id: str
    owner: str
    repo: str


class ProtectedBranchPullRequestReviewUpdateData(ProtectedBranchPullRequestReviewUpdateDataRequired, total=False):
    bypass_pull_request_allowances: dict
    dismiss_stale_reviews: bool
    dismissal_restrictions: dict
    require_code_owner_reviews: bool
    require_last_push_approval: bool
    required_approving_review_count: int
    url: str


class PublicMemberRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class PublicMember(PublicMemberRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class PublicMemberListMatchRequired(TypedDict):
    org_id: str


class PublicMemberListMatch(PublicMemberListMatchRequired, total=False):
    page: int
    per_page: int


class PullRequired(TypedDict):
    additions: int
    assignee: dict
    author_association: str
    auto_merge: dict
    base: dict
    body: str
    changed_files: int
    closed_at: str
    comments: int
    comments_url: str
    commits: int
    commits_url: str
    created_at: str
    deletions: int
    diff_url: str
    head: dict
    html_url: str
    id: int
    issue_url: str
    labels: list
    links: dict
    locked: bool
    maintainer_can_modify: bool
    merge_commit_sha: str
    mergeable: bool
    mergeable_state: str
    merged: bool
    merged_at: str
    merged_by: dict
    message: str
    milestone: dict
    node_id: str
    number: int
    patch_url: str
    review_comment_url: str
    review_comments: int
    review_comments_url: str
    sha: str
    state: str
    statuses_url: str
    title: str
    updated_at: str
    url: str
    user: dict


class Pull(PullRequired, total=False):
    active_lock_reason: str
    assignees: list
    commit_message: str
    commit_title: str
    draft: bool
    expected_head_sha: str
    head_repo: str
    issue: int
    merge_method: str
    rebaseable: bool
    requested_reviewers: list
    requested_teams: list


class PullLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class PullListMatchRequired(TypedDict):
    owner: str
    repo: str


class PullListMatch(PullListMatchRequired, total=False):
    base: str
    direction: str
    head: str
    page: int
    per_page: int
    sort: str
    state: str
    commit_sha: str


class PullCreateDataRequired(TypedDict):
    owner: str
    repo: str
    additions: int
    assignee: dict
    author_association: str
    auto_merge: dict
    base: dict
    body: str
    changed_files: int
    closed_at: str
    comments: int
    comments_url: str
    commits: int
    commits_url: str
    created_at: str
    deletions: int
    diff_url: str
    head: dict
    html_url: str
    id: int
    issue_url: str
    labels: list
    links: dict
    locked: bool
    maintainer_can_modify: bool
    merge_commit_sha: str
    mergeable: bool
    mergeable_state: str
    merged: bool
    merged_at: str
    merged_by: dict
    message: str
    milestone: dict
    node_id: str
    number: int
    patch_url: str
    review_comment_url: str
    review_comments: int
    review_comments_url: str
    sha: str
    state: str
    statuses_url: str
    title: str
    updated_at: str
    url: str
    user: dict


class PullCreateData(PullCreateDataRequired, total=False):
    active_lock_reason: str
    assignees: list
    commit_message: str
    commit_title: str
    draft: bool
    expected_head_sha: str
    head_repo: str
    issue: int
    merge_method: str
    rebaseable: bool
    requested_reviewers: list
    requested_teams: list


class PullUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class PullUpdateData(PullUpdateDataRequired, total=False):
    active_lock_reason: str
    additions: int
    assignee: dict
    assignees: list
    author_association: str
    auto_merge: dict
    base: dict
    body: str
    changed_files: int
    closed_at: str
    comments: int
    comments_url: str
    commit_message: str
    commit_title: str
    commits: int
    commits_url: str
    created_at: str
    deletions: int
    diff_url: str
    draft: bool
    expected_head_sha: str
    head: dict
    head_repo: str
    html_url: str
    issue: int
    issue_url: str
    labels: list
    links: dict
    locked: bool
    maintainer_can_modify: bool
    merge_commit_sha: str
    merge_method: str
    mergeable: bool
    mergeable_state: str
    merged: bool
    merged_at: str
    merged_by: dict
    message: str
    milestone: dict
    node_id: str
    number: int
    patch_url: str
    rebaseable: bool
    requested_reviewers: list
    requested_teams: list
    review_comment_url: str
    review_comments: int
    review_comments_url: str
    sha: str
    state: str
    statuses_url: str
    title: str
    updated_at: str
    url: str
    user: dict


class PullRemoveMatch(TypedDict):
    comment_id: int
    owner: str
    repo: str


class PullRequestReviewRequired(TypedDict):
    author_association: str
    body: str
    commit_id: str
    event: str
    html_url: str
    id: int
    links: dict
    message: str
    node_id: str
    pull_request_url: str
    state: str
    teams: list
    user: dict
    users: list


class PullRequestReview(PullRequestReviewRequired, total=False):
    body_html: str
    body_text: str
    comments: list
    submitted_at: str


class PullRequestReviewLoadMatch(TypedDict):
    id: int
    owner: str
    pull_id: int
    repo: str


class PullRequestReviewListMatchRequired(TypedDict):
    owner: str
    pull_number: int
    repo: str


class PullRequestReviewListMatch(PullRequestReviewListMatchRequired, total=False):
    page: int
    per_page: int


class PullRequestReviewCreateDataRequired(TypedDict):
    owner: str
    repo: str
    author_association: str
    body: str
    commit_id: str
    event: str
    html_url: str
    id: int
    links: dict
    message: str
    node_id: str
    pull_request_url: str
    state: str
    teams: list
    user: dict
    users: list


class PullRequestReviewCreateData(PullRequestReviewCreateDataRequired, total=False):
    pull_id: int
    review_id: int
    pull_number: int
    body_html: str
    body_text: str
    comments: list
    submitted_at: str


class PullRequestReviewUpdateDataRequired(TypedDict):
    owner: str
    pull_id: int
    repo: str


class PullRequestReviewUpdateData(PullRequestReviewUpdateDataRequired, total=False):
    id: int
    review_id: int
    author_association: str
    body: str
    body_html: str
    body_text: str
    comments: list
    commit_id: str
    event: str
    html_url: str
    links: dict
    message: str
    node_id: str
    pull_request_url: str
    state: str
    submitted_at: str
    teams: list
    user: dict
    users: list


class PullRequestReviewRemoveMatch(TypedDict):
    id: int
    owner: str
    pull_id: int
    repo: str


class PullRequestReviewCommentRequired(TypedDict):
    author_association: str
    body: str
    commit_id: str
    created_at: str
    diff_hunk: str
    html_url: str
    id: int
    links: dict
    node_id: str
    original_commit_id: str
    path: str
    pull_request_review_id: int
    pull_request_url: str
    reactions: dict
    updated_at: str
    url: str
    user: dict


class PullRequestReviewComment(PullRequestReviewCommentRequired, total=False):
    body_html: str
    body_text: str
    in_reply_to: int
    in_reply_to_id: int
    line: int
    original_line: int
    original_position: int
    original_start_line: int
    position: int
    side: str
    start_line: int
    start_side: str
    subject_type: str


class PullRequestReviewCommentLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class PullRequestReviewCommentListMatchRequired(TypedDict):
    owner: str
    repo: str


class PullRequestReviewCommentListMatch(PullRequestReviewCommentListMatchRequired, total=False):
    pull_number: int
    direction: str
    page: int
    per_page: int
    since: str
    sort: str


class PullRequestReviewCommentCreateDataRequired(TypedDict):
    owner: str
    repo: str
    author_association: str
    body: str
    commit_id: str
    created_at: str
    diff_hunk: str
    html_url: str
    id: int
    links: dict
    node_id: str
    original_commit_id: str
    path: str
    pull_request_review_id: int
    pull_request_url: str
    reactions: dict
    updated_at: str
    url: str
    user: dict


class PullRequestReviewCommentCreateData(PullRequestReviewCommentCreateDataRequired, total=False):
    comment_id: int
    pull_id: int
    pull_number: int
    body_html: str
    body_text: str
    in_reply_to: int
    in_reply_to_id: int
    line: int
    original_line: int
    original_position: int
    original_start_line: int
    position: int
    side: str
    start_line: int
    start_side: str
    subject_type: str


class PullRequestReviewCommentUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class PullRequestReviewCommentUpdateData(PullRequestReviewCommentUpdateDataRequired, total=False):
    author_association: str
    body: str
    body_html: str
    body_text: str
    commit_id: str
    created_at: str
    diff_hunk: str
    html_url: str
    in_reply_to: int
    in_reply_to_id: int
    line: int
    links: dict
    node_id: str
    original_commit_id: str
    original_line: int
    original_position: int
    original_start_line: int
    path: str
    position: int
    pull_request_review_id: int
    pull_request_url: str
    reactions: dict
    side: str
    start_line: int
    start_side: str
    subject_type: str
    updated_at: str
    url: str
    user: dict


class PullRequestSimple(TypedDict, total=False):
    reviewers: list
    team_reviewers: list


class PullRequestSimpleCreateDataRequired(TypedDict):
    owner: str
    pull_number: int
    repo: str


class PullRequestSimpleCreateData(PullRequestSimpleCreateDataRequired, total=False):
    reviewers: list
    team_reviewers: list


class PullRequestSimpleRemoveMatch(TypedDict):
    owner: str
    pull_number: int
    repo: str


class RateLimit(TypedDict):
    rate: dict
    resources: dict


class RateLimitLoadMatch(TypedDict, total=False):
    rate: dict
    resources: dict


class ReactionRequired(TypedDict):
    avatar_url: str
    content: str
    created_at: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str
    user: dict


class Reaction(ReactionRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class ReactionListMatchRequired(TypedDict):
    discussion_number: int
    team_id: int


class ReactionListMatch(ReactionListMatchRequired, total=False):
    content: str
    page: int
    per_page: int


class ReactionCreateDataRequired(TypedDict):
    discussion_number: int
    team_id: int
    avatar_url: str
    content: str
    created_at: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str
    user: dict


class ReactionCreateData(ReactionCreateDataRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class ReactionRemoveMatchRequired(TypedDict):
    id: int


class ReactionRemoveMatch(ReactionRemoveMatchRequired, total=False):
    comment_id: int
    discussion_id: int
    org_id: str
    team_id: str
    owner: str
    repo: str
    issue_id: int
    release_id: int


class Referrer(TypedDict):
    count: int
    referrer: str
    uniques: int


class ReferrerListMatch(TypedDict):
    owner: str
    repo: str


class ReleaseRequired(TypedDict):
    assets: list
    assets_url: str
    author: dict
    browser_download_url: str
    content_type: str
    created_at: str
    digest: str
    download_count: int
    draft: bool
    html_url: str
    id: int
    label: str
    name: str
    node_id: str
    prerelease: bool
    published_at: str
    reactions: dict
    size: int
    state: str
    tag_name: str
    tarball_url: str
    target_commitish: str
    upload_url: str
    uploader: dict
    url: str
    zipball_url: str


class Release(ReleaseRequired, total=False):
    body: str
    body_html: str
    body_text: str
    discussion_category_name: str
    discussion_url: str
    generate_release_notes: bool
    immutable: bool
    make_latest: str
    mentions_count: int
    updated_at: str


class ReleaseLoadMatchRequired(TypedDict):
    owner: str
    repo: str


class ReleaseLoadMatch(ReleaseLoadMatchRequired, total=False):
    id: int
    tag: str


class ReleaseListMatchRequired(TypedDict):
    owner: str
    repo: str


class ReleaseListMatch(ReleaseListMatchRequired, total=False):
    page: int
    per_page: int


class ReleaseCreateDataRequired(TypedDict):
    owner: str
    repo: str
    assets: list
    assets_url: str
    author: dict
    browser_download_url: str
    content_type: str
    created_at: str
    digest: str
    download_count: int
    draft: bool
    html_url: str
    id: int
    label: str
    name: str
    node_id: str
    prerelease: bool
    published_at: str
    reactions: dict
    size: int
    state: str
    tag_name: str
    tarball_url: str
    target_commitish: str
    upload_url: str
    uploader: dict
    url: str
    zipball_url: str


class ReleaseCreateData(ReleaseCreateDataRequired, total=False):
    body: str
    body_html: str
    body_text: str
    discussion_category_name: str
    discussion_url: str
    generate_release_notes: bool
    immutable: bool
    make_latest: str
    mentions_count: int
    updated_at: str


class ReleaseUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class ReleaseUpdateData(ReleaseUpdateDataRequired, total=False):
    assets: list
    assets_url: str
    author: dict
    body: str
    body_html: str
    body_text: str
    browser_download_url: str
    content_type: str
    created_at: str
    digest: str
    discussion_category_name: str
    discussion_url: str
    download_count: int
    draft: bool
    generate_release_notes: bool
    html_url: str
    immutable: bool
    label: str
    make_latest: str
    mentions_count: int
    name: str
    node_id: str
    prerelease: bool
    published_at: str
    reactions: dict
    size: int
    state: str
    tag_name: str
    tarball_url: str
    target_commitish: str
    updated_at: str
    upload_url: str
    uploader: dict
    url: str
    zipball_url: str


class ReleaseAssetRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class ReleaseAsset(ReleaseAssetRequired, total=False):
    browser_download_url: str
    content_type: str
    created_at: str
    digest: str
    download_count: int
    email: str
    label: str
    name: str
    size: int
    starred_at: str
    state: str
    updated_at: str
    uploader: dict
    user_view_type: str


class ReleaseAssetLoadMatch(TypedDict):
    id: int
    owner: str
    repo: str


class ReleaseAssetListMatchRequired(TypedDict):
    id: int
    owner: str
    repo: str


class ReleaseAssetListMatch(ReleaseAssetListMatchRequired, total=False):
    page: int
    per_page: int


class ReleaseAssetCreateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str
    name: str
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class ReleaseAssetCreateData(ReleaseAssetCreateDataRequired, total=False):
    label: str
    browser_download_url: str
    content_type: str
    created_at: str
    digest: str
    download_count: int
    email: str
    size: int
    starred_at: str
    state: str
    updated_at: str
    uploader: dict
    user_view_type: str


class ReleaseAssetUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class ReleaseAssetUpdateData(ReleaseAssetUpdateDataRequired, total=False):
    avatar_url: str
    browser_download_url: str
    content_type: str
    created_at: str
    digest: str
    download_count: int
    email: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    label: str
    login: str
    name: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    size: int
    starred_at: str
    starred_url: str
    state: str
    subscriptions_url: str
    type: str
    updated_at: str
    uploader: dict
    url: str
    user_view_type: str


class ReleaseNotesContentRequired(TypedDict):
    body: str
    name: str
    tag_name: str


class ReleaseNotesContent(ReleaseNotesContentRequired, total=False):
    configuration_file_path: str
    previous_tag_name: str
    target_commitish: str


class ReleaseNotesContentCreateDataRequired(TypedDict):
    owner: str
    repo: str
    body: str
    name: str
    tag_name: str


class ReleaseNotesContentCreateData(ReleaseNotesContentCreateDataRequired, total=False):
    configuration_file_path: str
    previous_tag_name: str
    target_commitish: str


class Remove(TypedDict):
    usernames: list


class RemoveCreateData(TypedDict):
    enterprise: str
    team_id: str
    usernames: list


class RepoRequired(TypedDict):
    app: dict
    archive_url: str
    archived: bool
    assignees_url: str
    blobs_url: str
    branches_url: str
    bundle: dict
    clone_url: str
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    default_branch: str
    deployment_branch_policy: dict
    deployments_url: str
    description: str
    disabled: bool
    downloads_url: str
    enabled: bool
    event_type: str
    events_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    github_id: int
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    id: str
    integration_url: str
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    merges_url: str
    milestones_url: str
    mirror_url: str
    new_owner: str
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    owner: dict
    permissions: dict
    private: bool
    properties: list
    pulls_url: str
    pushed_at: str
    releases_url: str
    slug: str
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    updated_at: str
    watchers: int
    watchers_count: int


class Repo(RepoRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    anonymous_access_enabled: bool
    attestations: list
    build_type: str
    client_payload: dict
    cname: str
    code_search_index_status: dict
    content: str
    default_branch_only: bool
    delete_branch_on_merge: bool
    download_url: str
    encoding: str
    git_url: str
    has_discussions: bool
    html_url: str
    https_enforced: bool
    is_template: bool
    links: dict
    master_branch: str
    merge_commit_message: str
    merge_commit_title: str
    name: str
    new_name: str
    organization: str
    path: str
    protection_rules: list
    sha: str
    size: int
    source: Any
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    starred_at: str
    team_ids: list
    temp_clone_token: str
    topics: list
    type: str
    url: str
    use_squash_pr_title_as_default: bool
    visibility: str
    web_commit_signoff_required: bool


class RepoLoadMatchRequired(TypedDict):
    owner: str
    repo: str


class RepoLoadMatch(RepoLoadMatchRequired, total=False):
    subject_digest: str
    after: str
    before: str
    per_page: int
    predicate_type: str
    path: str
    ref: str
    username: str


class RepoListMatch(TypedDict, total=False):
    affiliation: str
    before: str
    direction: str
    page: int
    per_page: int
    since: str
    sort: str
    type: str
    visibility: str


class RepoCreateDataRequired(TypedDict):
    owner: str
    repo: str
    app: dict
    archive_url: str
    archived: bool
    assignees_url: str
    blobs_url: str
    branches_url: str
    bundle: dict
    clone_url: str
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    default_branch: str
    deployment_branch_policy: dict
    deployments_url: str
    description: str
    disabled: bool
    downloads_url: str
    enabled: bool
    event_type: str
    events_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    github_id: int
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    id: str
    integration_url: str
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    merges_url: str
    milestones_url: str
    mirror_url: str
    new_owner: str
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    permissions: dict
    private: bool
    properties: list
    pulls_url: str
    pushed_at: str
    releases_url: str
    slug: str
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    updated_at: str
    watchers: int
    watchers_count: int


class RepoCreateData(RepoCreateDataRequired, total=False):
    delivery_id: int
    hook_id: int
    branch_id: str
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    anonymous_access_enabled: bool
    attestations: list
    build_type: str
    client_payload: dict
    cname: str
    code_search_index_status: dict
    content: str
    default_branch_only: bool
    delete_branch_on_merge: bool
    download_url: str
    encoding: str
    git_url: str
    has_discussions: bool
    html_url: str
    https_enforced: bool
    is_template: bool
    links: dict
    master_branch: str
    merge_commit_message: str
    merge_commit_title: str
    name: str
    new_name: str
    organization: str
    path: str
    protection_rules: list
    sha: str
    size: int
    source: Any
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    starred_at: str
    team_ids: list
    temp_clone_token: str
    topics: list
    type: str
    url: str
    use_squash_pr_title_as_default: bool
    visibility: str
    web_commit_signoff_required: bool


class RepoUpdateDataRequired(TypedDict):
    branch_id: str
    owner: str
    repo: str


class RepoUpdateData(RepoUpdateDataRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    anonymous_access_enabled: bool
    app: dict
    archive_url: str
    archived: bool
    assignees_url: str
    attestations: list
    blobs_url: str
    branches_url: str
    build_type: str
    bundle: dict
    client_payload: dict
    clone_url: str
    cname: str
    code_search_index_status: dict
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    content: str
    contents_url: str
    contributors_url: str
    created_at: str
    default_branch: str
    default_branch_only: bool
    delete_branch_on_merge: bool
    deployment_branch_policy: dict
    deployments_url: str
    description: str
    disabled: bool
    download_url: str
    downloads_url: str
    enabled: bool
    encoding: str
    event_type: str
    events_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    github_id: int
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    https_enforced: bool
    id: str
    integration_url: str
    is_template: bool
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    links: dict
    master_branch: str
    merge_commit_message: str
    merge_commit_title: str
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    new_name: str
    new_owner: str
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    organization: str
    path: str
    permissions: dict
    private: bool
    properties: list
    protection_rules: list
    pulls_url: str
    pushed_at: str
    releases_url: str
    sha: str
    size: int
    slug: str
    source: Any
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    starred_at: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    svn_url: str
    tags_url: str
    team_ids: list
    teams_url: str
    temp_clone_token: str
    topics: list
    trees_url: str
    type: str
    updated_at: str
    url: str
    use_squash_pr_title_as_default: bool
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool


class RepoRemoveMatch(TypedDict):
    owner: str
    repo: str


class RepositoryRequired(TypedDict):
    archive_url: str
    archived: bool
    assignees_url: str
    blobs_url: str
    branches_url: str
    clone_url: str
    collaborators_url: str
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    default_branch: str
    deployments_url: str
    description: str
    disabled: bool
    downloads_url: str
    events_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    id: int
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    license: dict
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    node_id: str
    notifications_url: str
    open_issues: int
    open_issues_count: int
    owner: dict
    permissions: dict
    private: bool
    pulls_url: str
    pushed_at: str
    releases_url: str
    size: int
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    trees_url: str
    updated_at: str
    url: str
    watchers: int
    watchers_count: int


class Repository(RepositoryRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    allow_update_branch: bool
    anonymous_access_enabled: bool
    code_search_index_status: dict
    delete_branch_on_merge: bool
    has_discussions: bool
    is_template: bool
    master_branch: str
    merge_commit_message: str
    merge_commit_title: str
    squash_merge_commit_message: str
    squash_merge_commit_title: str
    starred_at: str
    temp_clone_token: str
    topics: list
    use_squash_pr_title_as_default: bool
    visibility: str
    web_commit_signoff_required: bool


class RepositoryListMatch(TypedDict, total=False):
    direction: str
    page: int
    per_page: int
    sort: str


class RepositoryAdvisoryRequired(TypedDict):
    author: Any
    closed_at: str
    collaborating_teams: list
    collaborating_users: list
    created_at: str
    credits: list
    credits_detailed: list
    cve_id: str
    cvss: dict
    cwe_ids: list
    cwes: list
    description: str
    ghsa_id: str
    html_url: str
    identifiers: list
    private_fork: Any
    published_at: str
    publisher: Any
    severity: str
    state: str
    submission: dict
    summary: str
    updated_at: str
    url: str
    vulnerabilities: list
    withdrawn_at: str


class RepositoryAdvisory(RepositoryAdvisoryRequired, total=False):
    cvss_severities: dict
    cvss_vector_string: str
    start_private_fork: bool


class RepositoryAdvisoryLoadMatch(TypedDict):
    ghsa_id: str
    owner: str
    repo: str


class RepositoryAdvisoryListMatchRequired(TypedDict):
    org_id: str


class RepositoryAdvisoryListMatch(RepositoryAdvisoryListMatchRequired, total=False):
    after: str
    before: str
    direction: str
    per_page: int
    sort: str
    state: str


class RepositoryAdvisoryCreateDataRequired(TypedDict):
    owner: str
    repo: str
    author: Any
    closed_at: str
    collaborating_teams: list
    collaborating_users: list
    created_at: str
    credits: list
    credits_detailed: list
    cve_id: str
    cvss: dict
    cwe_ids: list
    cwes: list
    description: str
    ghsa_id: str
    html_url: str
    identifiers: list
    private_fork: Any
    published_at: str
    publisher: Any
    severity: str
    state: str
    submission: dict
    summary: str
    updated_at: str
    url: str
    vulnerabilities: list
    withdrawn_at: str


class RepositoryAdvisoryCreateData(RepositoryAdvisoryCreateDataRequired, total=False):
    cvss_severities: dict
    cvss_vector_string: str
    start_private_fork: bool


class RepositoryAdvisoryUpdateDataRequired(TypedDict):
    ghsa_id: str
    owner: str
    repo: str


class RepositoryAdvisoryUpdateData(RepositoryAdvisoryUpdateDataRequired, total=False):
    author: Any
    closed_at: str
    collaborating_teams: list
    collaborating_users: list
    created_at: str
    credits: list
    credits_detailed: list
    cve_id: str
    cvss: dict
    cvss_severities: dict
    cvss_vector_string: str
    cwe_ids: list
    cwes: list
    description: str
    html_url: str
    identifiers: list
    private_fork: Any
    published_at: str
    publisher: Any
    severity: str
    start_private_fork: bool
    state: str
    submission: dict
    summary: str
    updated_at: str
    url: str
    vulnerabilities: list
    withdrawn_at: str


class RepositoryCollaboratorPermissionRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    permissions: dict
    received_events_url: str
    repos_url: str
    role_name: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class RepositoryCollaboratorPermission(RepositoryCollaboratorPermissionRequired, total=False):
    email: str
    name: str
    user_view_type: str


class RepositoryCollaboratorPermissionLoadMatch(TypedDict):
    owner: str
    repo: str
    username: str


class RepositoryInvitationRequired(TypedDict):
    created_at: str
    html_url: str
    id: int
    invitee: dict
    inviter: dict
    node_id: str
    permissions: str
    repository: dict
    url: str


class RepositoryInvitation(RepositoryInvitationRequired, total=False):
    expired: bool
    permission: str


class RepositoryInvitationListMatch(TypedDict, total=False):
    page: int
    per_page: int


class RepositoryInvitationUpdateDataRequired(TypedDict):
    owner: str
    repo: str
    username: str


class RepositoryInvitationUpdateData(RepositoryInvitationUpdateDataRequired, total=False):
    created_at: str
    expired: bool
    html_url: str
    id: int
    invitee: dict
    inviter: dict
    node_id: str
    permission: str
    permissions: str
    repository: dict
    url: str


class RepositoryRuleDetailed(TypedDict, total=False):
    parameters: dict
    ruleset_id: int
    ruleset_source: str
    ruleset_source_type: str
    type: str


class RepositoryRuleDetailedLoadMatchRequired(TypedDict):
    branch: str
    owner: str
    repo: str


class RepositoryRuleDetailedLoadMatch(RepositoryRuleDetailedLoadMatchRequired, total=False):
    page: int
    per_page: int


class RepositoryRulesetRequired(TypedDict):
    enforcement: str
    id: int
    name: str
    source: str


class RepositoryRuleset(RepositoryRulesetRequired, total=False):
    bypass_actors: list
    conditions: Any
    created_at: str
    current_user_can_bypass: str
    links: dict
    node_id: str
    rules: list
    source_type: str
    target: str
    updated_at: str


class RepositoryRulesetLoadMatchRequired(TypedDict):
    id: int


class RepositoryRulesetLoadMatch(RepositoryRulesetLoadMatchRequired, total=False):
    owner: str
    repo: str
    includes_parent: bool
    org_id: str


class RepositoryRulesetListMatchRequired(TypedDict):
    org_id: str


class RepositoryRulesetListMatch(RepositoryRulesetListMatchRequired, total=False):
    page: int
    per_page: int
    target: str


class RepositoryRulesetCreateDataRequired(TypedDict):
    org_id: str
    enforcement: str
    id: int
    name: str
    source: str


class RepositoryRulesetCreateData(RepositoryRulesetCreateDataRequired, total=False):
    bypass_actors: list
    conditions: Any
    created_at: str
    current_user_can_bypass: str
    links: dict
    node_id: str
    rules: list
    source_type: str
    target: str
    updated_at: str


class RepositoryRulesetUpdateDataRequired(TypedDict):
    id: int


class RepositoryRulesetUpdateData(RepositoryRulesetUpdateDataRequired, total=False):
    owner: str
    repo: str
    org_id: str
    bypass_actors: list
    conditions: Any
    created_at: str
    current_user_can_bypass: str
    enforcement: str
    links: dict
    name: str
    node_id: str
    rules: list
    source: str
    source_type: str
    target: str
    updated_at: str


class RepositorySubscription(TypedDict):
    created_at: str
    ignored: bool
    reason: str
    repository_url: str
    subscribed: bool
    url: str


class RepositorySubscriptionLoadMatch(TypedDict):
    owner: str
    repo: str


class RepositorySubscriptionUpdateDataRequired(TypedDict):
    owner: str
    repo: str


class RepositorySubscriptionUpdateData(RepositorySubscriptionUpdateDataRequired, total=False):
    created_at: str
    ignored: bool
    reason: str
    repository_url: str
    subscribed: bool
    url: str


class ReviewCommentRequired(TypedDict):
    author_association: str
    body: str
    commit_id: str
    created_at: str
    diff_hunk: str
    html_url: str
    id: int
    links: dict
    node_id: str
    original_commit_id: str
    original_position: int
    path: str
    position: int
    pull_request_review_id: int
    pull_request_url: str
    reactions: dict
    updated_at: str
    url: str
    user: dict


class ReviewComment(ReviewCommentRequired, total=False):
    body_html: str
    body_text: str
    in_reply_to_id: int
    line: int
    original_line: int
    original_start_line: int
    side: str
    start_line: int
    start_side: str
    subject_type: str


class ReviewCommentListMatchRequired(TypedDict):
    id: int
    owner: str
    pull_id: int
    repo: str


class ReviewCommentListMatch(ReviewCommentListMatchRequired, total=False):
    page: int
    per_page: int


class RuleSuite(TypedDict, total=False):
    actor_id: int
    actor_name: str
    after_sha: str
    before_sha: str
    evaluation_result: str
    id: int
    pushed_at: str
    ref: str
    repository_id: int
    repository_name: str
    result: str
    rule_evaluations: list


class RuleSuiteLoadMatchRequired(TypedDict):
    id: int


class RuleSuiteLoadMatch(RuleSuiteLoadMatchRequired, total=False):
    owner: str
    repo: str
    org_id: str


class RuleSuiteListMatchRequired(TypedDict):
    org_id: str


class RuleSuiteListMatch(RuleSuiteListMatchRequired, total=False):
    actor_name: str
    page: int
    per_page: int
    ref: str
    repository_name: str
    rule_suite_result: str
    time_period: str


class RulesetVersionRequired(TypedDict):
    actor: dict
    updated_at: str
    version_id: int


class RulesetVersion(RulesetVersionRequired, total=False):
    id: str


class RulesetVersionListMatchRequired(TypedDict):
    id: int


class RulesetVersionListMatch(RulesetVersionListMatchRequired, total=False):
    owner: str
    repo: str
    page: int
    per_page: int
    org_id: str


class RulesetVersionWithState(TypedDict):
    actor: dict
    state: dict
    updated_at: str
    version_id: int


class RulesetVersionWithStateLoadMatchRequired(TypedDict):
    ruleset_id: int
    version_id: int


class RulesetVersionWithStateLoadMatch(RulesetVersionWithStateLoadMatchRequired, total=False):
    owner: str
    repo: str
    org_id: str


class RunnerRequired(TypedDict):
    busy: bool
    id: int
    labels: list
    name: str
    os: str
    status: str


class Runner(RunnerRequired, total=False):
    ephemeral: bool
    runner_group_id: int


class RunnerLoadMatchRequired(TypedDict):
    id: int


class RunnerLoadMatch(RunnerLoadMatchRequired, total=False):
    owner: str
    repo: str
    org_id: str


class RunnerApplicationRequired(TypedDict):
    architecture: str
    download_url: str
    filename: str
    os: str


class RunnerApplication(RunnerApplicationRequired, total=False):
    sha256_checksum: str
    temp_download_token: str


class RunnerApplicationListMatch(TypedDict):
    org_id: str


class RunnerGroupRequired(TypedDict):
    allows_public_repositories: bool
    default: bool
    id: float
    inherited: bool
    name: str
    runners_url: str
    visibility: str


class RunnerGroup(RunnerGroupRequired, total=False):
    hosted_runners_url: str
    inherited_allows_public_repositories: bool
    network_configuration_id: str
    restricted_to_workflows: bool
    runners: list
    selected_repositories_url: str
    selected_repository_ids: list
    selected_workflows: list
    workflow_restrictions_read_only: bool


class RunnerGroupLoadMatch(TypedDict):
    id: int
    org_id: str


class RunnerGroupCreateDataRequired(TypedDict):
    org_id: str
    allows_public_repositories: bool
    default: bool
    id: float
    inherited: bool
    name: str
    runners_url: str
    visibility: str


class RunnerGroupCreateData(RunnerGroupCreateDataRequired, total=False):
    hosted_runners_url: str
    inherited_allows_public_repositories: bool
    network_configuration_id: str
    restricted_to_workflows: bool
    runners: list
    selected_repositories_url: str
    selected_repository_ids: list
    selected_workflows: list
    workflow_restrictions_read_only: bool


class RunnerGroupUpdateDataRequired(TypedDict):
    id: int
    org_id: str


class RunnerGroupUpdateData(RunnerGroupUpdateDataRequired, total=False):
    allows_public_repositories: bool
    default: bool
    hosted_runners_url: str
    inherited: bool
    inherited_allows_public_repositories: bool
    name: str
    network_configuration_id: str
    restricted_to_workflows: bool
    runners: list
    runners_url: str
    selected_repositories_url: str
    selected_repository_ids: list
    selected_workflows: list
    visibility: str
    workflow_restrictions_read_only: bool


class SearchRequired(TypedDict):
    archive_url: str
    archived: bool
    assignee: dict
    assignees_url: str
    author: dict
    author_association: str
    avatar_url: str
    blobs_url: str
    branches_url: str
    clone_url: str
    closed_at: str
    collaborators_url: str
    color: str
    comments: int
    comments_url: str
    commit: dict
    commits_url: str
    committer: dict
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    created_by: str
    curated: bool
    default: bool
    default_branch: str
    deployments_url: str
    description: str
    disabled: bool
    display_name: str
    downloads_url: str
    events_url: str
    featured: bool
    followers_url: str
    following_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    gists_url: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    gravatar_id: str
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    id: int
    issue_comment_url: str
    issue_dependencies_summary: dict
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels: list
    labels_url: str
    languages_url: str
    license: dict
    locked: bool
    login: str
    merges_url: str
    milestone: dict
    milestones_url: str
    mirror_url: str
    name: str
    node_id: str
    notifications_url: str
    number: int
    open_issues: int
    open_issues_count: int
    organizations_url: str
    owner: dict
    parents: list
    path: str
    performed_via_github_app: dict
    permissions: dict
    private: bool
    pull_request: dict
    pulls_url: str
    pushed_at: str
    reactions: dict
    received_events_url: str
    released: str
    releases_url: str
    repos_url: str
    repository: dict
    repository_url: str
    score: float
    sha: str
    short_description: str
    site_admin: bool
    size: int
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    starred_url: str
    state: str
    statuses_url: str
    sub_issues_summary: dict
    subscribers_url: str
    subscription_url: str
    subscriptions_url: str
    svn_url: str
    tags_url: str
    teams_url: str
    title: str
    trees_url: str
    type: dict
    updated_at: str
    url: str
    user: dict
    watchers: int
    watchers_count: int


class Search(SearchRequired, total=False):
    active_lock_reason: str
    aliases: list
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    assignees: list
    bio: str
    blog: str
    body: str
    body_html: str
    body_text: str
    company: str
    delete_branch_on_merge: bool
    draft: bool
    email: str
    file_size: int
    followers: int
    following: int
    has_discussions: bool
    hireable: bool
    is_template: bool
    issue_field_values: list
    language: str
    last_modified_at: str
    line_numbers: list
    location: str
    logo_url: str
    master_branch: str
    public_gists: int
    public_repos: int
    related: list
    repository_count: int
    state_reason: str
    suspended_at: str
    temp_clone_token: str
    text_matches: list
    timeline_url: str
    topics: list
    user_view_type: str
    visibility: str
    web_commit_signoff_required: bool


class SearchListMatchRequired(TypedDict):
    q: str


class SearchListMatch(SearchListMatchRequired, total=False):
    advanced_search: str
    order: str
    page: int
    per_page: int
    search_type: str
    sort: str
    repository_id: int


class SecretScanning(TypedDict, total=False):
    custom_pattern_settings: list
    pattern_config_version: str
    provider_pattern_settings: list


class SecretScanningUpdateDataRequired(TypedDict):
    org_id: str


class SecretScanningUpdateData(SecretScanningUpdateDataRequired, total=False):
    custom_pattern_settings: list
    pattern_config_version: str
    provider_pattern_settings: list


class SecretScanningAlertRequired(TypedDict):
    push_protection_bypass_request_reviewer: dict
    push_protection_bypassed_by: dict
    resolved_by: dict


class SecretScanningAlert(SecretScanningAlertRequired, total=False):
    created_at: str
    first_location_detected: Any
    has_more_locations: bool
    html_url: str
    id: str
    is_base64_encoded: bool
    locations_url: str
    multi_repo: bool
    number: int
    publicly_leaked: bool
    push_protection_bypass_request_comment: str
    push_protection_bypass_request_html_url: str
    push_protection_bypass_request_reviewer_comment: str
    push_protection_bypassed: bool
    push_protection_bypassed_at: str
    resolution: str
    resolution_comment: str
    resolved_at: str
    secret: str
    secret_type: str
    secret_type_display_name: str
    state: str
    updated_at: str
    url: str
    validity: str


class SecretScanningAlertLoadMatchRequired(TypedDict):
    id: int
    owner: str
    repo: str


class SecretScanningAlertLoadMatch(SecretScanningAlertLoadMatchRequired, total=False):
    hide_secret: bool


class SecretScanningAlertListMatchRequired(TypedDict):
    owner: str
    repo: str


class SecretScanningAlertListMatch(SecretScanningAlertListMatchRequired, total=False):
    after: str
    before: str
    direction: str
    hide_secret: bool
    is_multi_repo: bool
    is_publicly_leaked: bool
    page: int
    per_page: int
    resolution: str
    secret_type: str
    sort: str
    state: str
    validity: str


class SecretScanningAlertUpdateDataRequired(TypedDict):
    id: int
    owner: str
    repo: str


class SecretScanningAlertUpdateData(SecretScanningAlertUpdateDataRequired, total=False):
    created_at: str
    first_location_detected: Any
    has_more_locations: bool
    html_url: str
    is_base64_encoded: bool
    locations_url: str
    multi_repo: bool
    number: int
    publicly_leaked: bool
    push_protection_bypass_request_comment: str
    push_protection_bypass_request_html_url: str
    push_protection_bypass_request_reviewer: dict
    push_protection_bypass_request_reviewer_comment: str
    push_protection_bypassed: bool
    push_protection_bypassed_at: str
    push_protection_bypassed_by: dict
    resolution: str
    resolution_comment: str
    resolved_at: str
    resolved_by: dict
    secret: str
    secret_type: str
    secret_type_display_name: str
    state: str
    updated_at: str
    url: str
    validity: str


class SecretScanningLocation(TypedDict, total=False):
    details: Any
    type: str


class SecretScanningLocationListMatchRequired(TypedDict):
    alert_number: int
    owner: str
    repo: str


class SecretScanningLocationListMatch(SecretScanningLocationListMatchRequired, total=False):
    page: int
    per_page: int


class SecretScanningPatternConfiguration(TypedDict, total=False):
    custom_pattern_overrides: list
    pattern_config_version: str
    provider_pattern_overrides: list


class SecretScanningPatternConfigurationListMatch(TypedDict):
    org_id: str


class SecretScanningPushProtectionBypassRequired(TypedDict):
    placeholder_id: str


class SecretScanningPushProtectionBypass(SecretScanningPushProtectionBypassRequired, total=False):
    expire_at: str
    reason: str
    token_type: str


class SecretScanningPushProtectionBypassCreateDataRequired(TypedDict):
    owner: str
    repo: str
    placeholder_id: str


class SecretScanningPushProtectionBypassCreateData(SecretScanningPushProtectionBypassCreateDataRequired, total=False):
    expire_at: str
    reason: str
    token_type: str


class SecretScanningScanHistory(TypedDict, total=False):
    backfill_scans: list
    custom_pattern_backfill_scans: list
    incremental_scans: list
    pattern_update_scans: list


class SecretScanningScanHistoryListMatch(TypedDict):
    owner: str
    repo: str


class SecurityAdvisory(TypedDict, total=False):
    id: str


class SecurityAdvisoryCreateData(TypedDict):
    id: str
    owner: str
    repo: str


class SelectedAction(TypedDict, total=False):
    github_owned_allowed: bool
    patterns_allowed: list
    verified_allowed: bool


class SelectedActionListMatch(TypedDict):
    org_id: str


class SelfHostedRunnerRequired(TypedDict):
    enabled_repositories: str


class SelfHostedRunner(SelfHostedRunnerRequired, total=False):
    selected_repositories_url: str


class SelfHostedRunnerLoadMatch(TypedDict):
    org_id: str


class ShortBlobRequired(TypedDict):
    content: str


class ShortBlob(ShortBlobRequired, total=False):
    encoding: str


class ShortBlobCreateDataRequired(TypedDict):
    owner: str
    repo: str
    content: str


class ShortBlobCreateData(ShortBlobCreateDataRequired, total=False):
    encoding: str


class ShortBranchRequired(TypedDict):
    commit: dict
    name: str
    protected: bool


class ShortBranch(ShortBranchRequired, total=False):
    protection: dict
    protection_url: str


class ShortBranchListMatchRequired(TypedDict):
    owner: str
    repo: str


class ShortBranchListMatch(ShortBranchListMatchRequired, total=False):
    page: int
    per_page: int
    protected: bool


class SimpleClassroom(TypedDict):
    pass


class SimpleClassroomAssignmentRequired(TypedDict):
    accepted: int
    classroom: dict
    deadline: str
    editor: str
    feedback_pull_requests_enabled: bool
    id: int
    invitations_enabled: bool
    invite_link: str
    language: str
    passing: int
    public_repo: bool
    slug: str
    students_are_repo_admins: bool
    submitted: int
    title: str
    type: str


class SimpleClassroomAssignment(SimpleClassroomAssignmentRequired, total=False):
    max_members: int
    max_teams: int


class SimpleClassroomAssignmentListMatchRequired(TypedDict):
    classroom_id: int


class SimpleClassroomAssignmentListMatch(SimpleClassroomAssignmentListMatchRequired, total=False):
    page: int
    per_page: int


class SocialAccount(TypedDict):
    account_urls: list
    provider: str
    url: str


class SocialAccountListMatch(TypedDict, total=False):
    page: int
    per_page: int


class SocialAccountCreateData(TypedDict):
    account_urls: list
    provider: str
    url: str


class SshSigningKey(TypedDict):
    created_at: str
    id: int
    key: str
    title: str


class SshSigningKeyLoadMatch(TypedDict):
    id: int


class SshSigningKeyListMatch(TypedDict, total=False):
    page: int
    per_page: int


class SshSigningKeyCreateData(TypedDict):
    created_at: str
    id: int
    key: str
    title: str


class StatusRequired(TypedDict):
    avatar_url: str
    created_at: str
    creator: dict
    id: int
    node_id: str
    state: str
    updated_at: str
    url: str


class Status(StatusRequired, total=False):
    context: str
    description: str
    target_url: str


class StatusListMatchRequired(TypedDict):
    owner: str
    ref: str
    repo: str


class StatusListMatch(StatusListMatchRequired, total=False):
    page: int
    per_page: int


class StatusCreateDataRequired(TypedDict):
    id: str
    owner: str
    repo: str
    avatar_url: str
    created_at: str
    creator: dict
    node_id: str
    state: str
    updated_at: str
    url: str


class StatusCreateData(StatusCreateDataRequired, total=False):
    context: str
    description: str
    target_url: str


class StatusCheckPolicy(TypedDict):
    app_id: int
    checks: list
    context: str
    contexts: list
    contexts_url: str
    strict: bool
    url: str


class StatusCheckPolicyListMatch(TypedDict):
    branch_id: str
    owner: str
    repo: str


class StatusCheckPolicyUpdateDataRequired(TypedDict):
    branch_id: str
    owner: str
    repo: str


class StatusCheckPolicyUpdateData(StatusCheckPolicyUpdateDataRequired, total=False):
    app_id: int
    checks: list
    context: str
    contexts: list
    contexts_url: str
    strict: bool
    url: str


class SubscriberRequired(TypedDict):
    avatar_url: str
    events_url: str
    followers_url: str
    following_url: str
    gists_url: str
    gravatar_id: str
    html_url: str
    id: int
    login: str
    node_id: str
    organizations_url: str
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_url: str
    subscriptions_url: str
    type: str
    url: str


class Subscriber(SubscriberRequired, total=False):
    email: str
    name: str
    starred_at: str
    user_view_type: str


class SubscriberListMatchRequired(TypedDict):
    owner: str
    repo: str


class SubscriberListMatch(SubscriberListMatchRequired, total=False):
    page: int
    per_page: int


class Tag(TypedDict):
    commit: dict
    name: str
    node_id: str
    tarball_url: str
    zipball_url: str


class TagListMatchRequired(TypedDict):
    owner: str
    repo: str


class TagListMatch(TagListMatchRequired, total=False):
    page: int
    per_page: int


class TagProtectionRequired(TypedDict):
    pattern: str


class TagProtection(TagProtectionRequired, total=False):
    created_at: str
    enabled: bool
    id: int
    updated_at: str


class TagProtectionListMatch(TypedDict):
    owner: str
    repo: str


class TagProtectionCreateDataRequired(TypedDict):
    owner: str
    repo: str
    pattern: str


class TagProtectionCreateData(TagProtectionCreateDataRequired, total=False):
    created_at: str
    enabled: bool
    id: int
    updated_at: str


class TeamRequired(TypedDict):
    archive_url: str
    archived: bool
    assignees_url: str
    author: dict
    avatar_url: str
    blobs_url: str
    body: str
    body_html: str
    body_version: str
    branches_url: str
    clone_url: str
    code_of_conduct: dict
    collaborators_url: str
    columns_url: str
    comments_count: int
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    creator: dict
    default_branch: str
    deployments_url: str
    description: str
    disabled: bool
    discussion_url: str
    downloads_url: str
    events_url: str
    followers_url: str
    following_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    gists_url: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    gravatar_id: str
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    id: int
    invitation_teams_url: str
    inviter: dict
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    last_edited_at: str
    license: dict
    login: str
    members_count: int
    members_url: str
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    node_id: str
    notifications_url: str
    number: int
    open_issues: int
    open_issues_count: int
    organization: dict
    organizations_url: str
    owner: dict
    owner_url: str
    parent: dict
    permission: str
    permissions: dict
    pinned: bool
    private: bool
    pulls_url: str
    pushed_at: str
    reactions: dict
    received_events_url: str
    releases_url: str
    repos_count: int
    repos_url: str
    repositories_url: str
    role: str
    site_admin: bool
    size: int
    slug: str
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    starred_url: str
    state: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    subscriptions_url: str
    svn_url: str
    tags_url: str
    team_count: int
    team_url: str
    teams_url: str
    title: str
    trees_url: str
    type: str
    updated_at: str
    url: str
    watchers: int
    watchers_count: int


class Team(TeamRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    assignment: str
    custom_properties: dict
    delete_branch_on_merge: bool
    email: str
    failed_at: str
    failed_reason: str
    has_discussions: bool
    invitation_source: str
    is_template: bool
    ldap_dn: str
    maintainers: list
    master_branch: str
    network_count: int
    notification_setting: str
    organization_permission: str
    parent_team_id: int
    privacy: str
    repo_names: list
    role_name: str
    security_and_analysis: dict
    starred_at: str
    subscribers_count: int
    temp_clone_token: str
    topics: list
    user_view_type: str
    visibility: str
    web_commit_signoff_required: bool


class TeamLoadMatch(TypedDict):
    id: int


class TeamListMatch(TypedDict, total=False):
    page: int
    per_page: int


class TeamCreateDataRequired(TypedDict):
    org_id: str
    archive_url: str
    archived: bool
    assignees_url: str
    author: dict
    avatar_url: str
    blobs_url: str
    body: str
    body_html: str
    body_version: str
    branches_url: str
    clone_url: str
    code_of_conduct: dict
    collaborators_url: str
    columns_url: str
    comments_count: int
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    creator: dict
    default_branch: str
    deployments_url: str
    description: str
    disabled: bool
    discussion_url: str
    downloads_url: str
    events_url: str
    followers_url: str
    following_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    gists_url: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    gravatar_id: str
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    id: int
    invitation_teams_url: str
    inviter: dict
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    last_edited_at: str
    license: dict
    login: str
    members_count: int
    members_url: str
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    node_id: str
    notifications_url: str
    number: int
    open_issues: int
    open_issues_count: int
    organization: dict
    organizations_url: str
    owner: dict
    owner_url: str
    parent: dict
    permission: str
    permissions: dict
    pinned: bool
    private: bool
    pulls_url: str
    pushed_at: str
    reactions: dict
    received_events_url: str
    releases_url: str
    repos_count: int
    repos_url: str
    repositories_url: str
    role: str
    site_admin: bool
    size: int
    slug: str
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    starred_url: str
    state: str
    statuses_url: str
    subscribers_url: str
    subscription_url: str
    subscriptions_url: str
    svn_url: str
    tags_url: str
    team_count: int
    team_url: str
    teams_url: str
    title: str
    trees_url: str
    type: str
    updated_at: str
    url: str
    watchers: int
    watchers_count: int


class TeamCreateData(TeamCreateDataRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    assignment: str
    custom_properties: dict
    delete_branch_on_merge: bool
    email: str
    failed_at: str
    failed_reason: str
    has_discussions: bool
    invitation_source: str
    is_template: bool
    ldap_dn: str
    maintainers: list
    master_branch: str
    network_count: int
    notification_setting: str
    organization_permission: str
    parent_team_id: int
    privacy: str
    repo_names: list
    role_name: str
    security_and_analysis: dict
    starred_at: str
    subscribers_count: int
    temp_clone_token: str
    topics: list
    user_view_type: str
    visibility: str
    web_commit_signoff_required: bool


class TeamUpdateDataRequired(TypedDict):
    id: int
    project_id: int


class TeamUpdateData(TeamUpdateDataRequired, total=False):
    allow_auto_merge: bool
    allow_forking: bool
    allow_merge_commit: bool
    allow_rebase_merge: bool
    allow_squash_merge: bool
    archive_url: str
    archived: bool
    assignees_url: str
    assignment: str
    author: dict
    avatar_url: str
    blobs_url: str
    body: str
    body_html: str
    body_version: str
    branches_url: str
    clone_url: str
    code_of_conduct: dict
    collaborators_url: str
    columns_url: str
    comments_count: int
    comments_url: str
    commits_url: str
    compare_url: str
    contents_url: str
    contributors_url: str
    created_at: str
    creator: dict
    custom_properties: dict
    default_branch: str
    delete_branch_on_merge: bool
    deployments_url: str
    description: str
    disabled: bool
    discussion_url: str
    downloads_url: str
    email: str
    events_url: str
    failed_at: str
    failed_reason: str
    followers_url: str
    following_url: str
    fork: bool
    forks: int
    forks_count: int
    forks_url: str
    full_name: str
    gists_url: str
    git_commits_url: str
    git_refs_url: str
    git_tags_url: str
    git_url: str
    gravatar_id: str
    has_discussions: bool
    has_downloads: bool
    has_issues: bool
    has_pages: bool
    has_projects: bool
    has_wiki: bool
    homepage: str
    hooks_url: str
    html_url: str
    invitation_source: str
    invitation_teams_url: str
    inviter: dict
    is_template: bool
    issue_comment_url: str
    issue_events_url: str
    issues_url: str
    keys_url: str
    labels_url: str
    language: str
    languages_url: str
    last_edited_at: str
    ldap_dn: str
    license: dict
    login: str
    maintainers: list
    master_branch: str
    members_count: int
    members_url: str
    merges_url: str
    milestones_url: str
    mirror_url: str
    name: str
    network_count: int
    node_id: str
    notification_setting: str
    notifications_url: str
    number: int
    open_issues: int
    open_issues_count: int
    organization: dict
    organization_permission: str
    organizations_url: str
    owner: dict
    owner_url: str
    parent: dict
    parent_team_id: int
    permission: str
    permissions: dict
    pinned: bool
    privacy: str
    private: bool
    pulls_url: str
    pushed_at: str
    reactions: dict
    received_events_url: str
    releases_url: str
    repo_names: list
    repos_count: int
    repos_url: str
    repositories_url: str
    role: str
    role_name: str
    security_and_analysis: dict
    site_admin: bool
    size: int
    slug: str
    ssh_url: str
    stargazers_count: int
    stargazers_url: str
    starred_at: str
    starred_url: str
    state: str
    statuses_url: str
    subscribers_count: int
    subscribers_url: str
    subscription_url: str
    subscriptions_url: str
    svn_url: str
    tags_url: str
    team_count: int
    team_url: str
    teams_url: str
    temp_clone_token: str
    title: str
    topics: list
    trees_url: str
    type: str
    updated_at: str
    url: str
    user_view_type: str
    visibility: str
    watchers: int
    watchers_count: int
    web_commit_signoff_required: bool


class TeamRemoveMatch(TypedDict):
    id: int


class TeamSimpleRequired(TypedDict):
    description: str
    html_url: str
    id: int
    members_url: str
    name: str
    node_id: str
    permission: str
    repositories_url: str
    slug: str
    url: str


class TeamSimple(TeamSimpleRequired, total=False):
    ldap_dn: str
    notification_setting: str
    privacy: str


class TeamSimpleListMatch(TypedDict):
    org_id: str


class Thread(TypedDict):
    id: str
    last_read_at: str
    reason: str
    repository: dict
    subject: dict
    subscription_url: str
    unread: bool
    updated_at: str
    url: str


class ThreadLoadMatch(TypedDict):
    id: int


class ThreadListMatch(TypedDict, total=False):
    all: bool
    before: str
    page: int
    participating: bool
    per_page: int
    since: str


class ThreadRemoveMatch(TypedDict):
    id: int


class ThreadSubscriptionRequired(TypedDict):
    created_at: str
    ignored: bool
    reason: str
    subscribed: bool
    url: str


class ThreadSubscription(ThreadSubscriptionRequired, total=False):
    id: str
    repository_url: str
    thread_url: str


class ThreadSubscriptionLoadMatch(TypedDict):
    id: int


class ThreadSubscriptionUpdateDataRequired(TypedDict):
    id: int


class ThreadSubscriptionUpdateData(ThreadSubscriptionUpdateDataRequired, total=False):
    created_at: str
    ignored: bool
    reason: str
    repository_url: str
    subscribed: bool
    thread_url: str
    url: str


class Topic(TypedDict):
    names: list


class TopicListMatchRequired(TypedDict):
    owner: str
    repo: str


class TopicListMatch(TopicListMatchRequired, total=False):
    page: int
    per_page: int


class TopicUpdateDataRequired(TypedDict):
    owner: str
    repo: str


class TopicUpdateData(TopicUpdateDataRequired, total=False):
    names: list


class UserRequired(TypedDict):
    private_repos: int
    space: int
    subject_digests: list
    users: list


class User(UserRequired, total=False):
    assignment: str
    attestations_subject_digests: dict
    avatar_url: str
    bio: str
    blog: str
    collaborators: int
    company: str
    created_at: str
    disk_usage: int
    email: str
    events_url: str
    followers: int
    followers_url: str
    following: int
    following_url: str
    gists_url: str
    gravatar_id: str
    hireable: bool
    html_url: str
    id: int
    inherited_from: list
    location: str
    login: str
    name: str
    node_id: str
    organizations_url: str
    owned_private_repos: int
    page_info: dict
    plan: dict
    predicate_type: str
    private_gists: int
    public_gists: int
    public_repos: int
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_at: str
    starred_url: str
    subscriptions_url: str
    total_private_repos: int
    twitter_username: str
    two_factor_authentication: bool
    type: str
    updated_at: str
    url: str
    user_view_type: str


class UserLoadMatch(TypedDict):
    id: int


class UserListMatch(TypedDict, total=False):
    per_page: int
    since: int


class UserCreateDataRequired(TypedDict):
    branch_id: str
    owner: str
    repo: str
    private_repos: int
    space: int
    subject_digests: list
    users: list


class UserCreateData(UserCreateDataRequired, total=False):
    assignment: str
    attestations_subject_digests: dict
    avatar_url: str
    bio: str
    blog: str
    collaborators: int
    company: str
    created_at: str
    disk_usage: int
    email: str
    events_url: str
    followers: int
    followers_url: str
    following: int
    following_url: str
    gists_url: str
    gravatar_id: str
    hireable: bool
    html_url: str
    id: int
    inherited_from: list
    location: str
    login: str
    name: str
    node_id: str
    organizations_url: str
    owned_private_repos: int
    page_info: dict
    plan: dict
    predicate_type: str
    private_gists: int
    public_gists: int
    public_repos: int
    received_events_url: str
    repos_url: str
    site_admin: bool
    starred_at: str
    starred_url: str
    subscriptions_url: str
    total_private_repos: int
    twitter_username: str
    two_factor_authentication: bool
    type: str
    updated_at: str
    url: str
    user_view_type: str


class UserUpdateDataRequired(TypedDict):
    username: str


class UserUpdateData(UserUpdateDataRequired, total=False):
    assignment: str
    attestations_subject_digests: dict
    avatar_url: str
    bio: str
    blog: str
    collaborators: int
    company: str
    created_at: str
    disk_usage: int
    email: str
    events_url: str
    followers: int
    followers_url: str
    following: int
    following_url: str
    gists_url: str
    gravatar_id: str
    hireable: bool
    html_url: str
    id: int
    inherited_from: list
    location: str
    login: str
    name: str
    node_id: str
    organizations_url: str
    owned_private_repos: int
    page_info: dict
    plan: dict
    predicate_type: str
    private_gists: int
    private_repos: int
    public_gists: int
    public_repos: int
    received_events_url: str
    repos_url: str
    site_admin: bool
    space: int
    starred_at: str
    starred_url: str
    subject_digests: list
    subscriptions_url: str
    total_private_repos: int
    twitter_username: str
    two_factor_authentication: bool
    type: str
    updated_at: str
    url: str
    user_view_type: str
    users: list


class UserRemoveMatch(TypedDict):
    gpg_key_id: int


class UserMarketplacePurchase(TypedDict):
    account: dict
    billing_cycle: str
    free_trial_ends_on: str
    next_billing_date: str
    on_free_trial: bool
    plan: dict
    unit_count: int
    updated_at: str


class UserMarketplacePurchaseListMatch(TypedDict, total=False):
    page: int
    per_page: int


class View(TypedDict):
    count: int
    timestamp: str
    uniques: int


class ViewListMatchRequired(TypedDict):
    owner: str
    repo: str


class ViewListMatch(ViewListMatchRequired, total=False):
    per: str


class WebhookConfig(TypedDict, total=False):
    content_type: str
    insecure_ssl: str
    secret: str
    url: str


class WebhookConfigLoadMatch(TypedDict, total=False):
    content_type: str
    insecure_ssl: str
    secret: str
    url: str


class WebhookConfigUpdateData(TypedDict, total=False):
    content_type: str
    insecure_ssl: str
    secret: str
    url: str


class WorkflowRequired(TypedDict):
    badge_url: str
    created_at: str
    html_url: str
    id: int
    name: str
    node_id: str
    path: str
    state: str
    updated_at: str
    url: str


class Workflow(WorkflowRequired, total=False):
    deleted_at: str


class WorkflowLoadMatch(TypedDict):
    id: str
    owner: str
    repo: str


class WorkflowUpdateDataRequired(TypedDict):
    id: str
    owner: str
    repo: str


class WorkflowUpdateData(WorkflowUpdateDataRequired, total=False):
    badge_url: str
    created_at: str
    deleted_at: str
    html_url: str
    name: str
    node_id: str
    path: str
    state: str
    updated_at: str
    url: str


class WorkflowRunRequired(TypedDict):
    actor: dict
    artifacts_url: str
    cancel_url: str
    check_suite_url: str
    conclusion: str
    created_at: str
    display_title: str
    event: str
    head_branch: str
    head_commit: dict
    head_repository: dict
    head_sha: str
    html_url: str
    id: int
    jobs_url: str
    logs_url: str
    node_id: str
    path: str
    pull_requests: list
    repository: dict
    rerun_url: str
    run_number: int
    status: str
    triggering_actor: dict
    updated_at: str
    url: str
    workflow_id: int
    workflow_url: str


class WorkflowRun(WorkflowRunRequired, total=False):
    check_suite_id: int
    check_suite_node_id: str
    head_repository_id: int
    name: str
    previous_attempt_url: str
    referenced_workflows: list
    run_attempt: int
    run_started_at: str


class WorkflowRunLoadMatchRequired(TypedDict):
    owner: str
    repo: str


class WorkflowRunLoadMatch(WorkflowRunLoadMatchRequired, total=False):
    attempt_number: int
    run_id: int
    exclude_pull_request: bool
    id: int


class WorkflowRunCreateDataRequired(TypedDict):
    owner: str
    repo: str
    run_id: int
    actor: dict
    artifacts_url: str
    cancel_url: str
    check_suite_url: str
    conclusion: str
    created_at: str
    display_title: str
    event: str
    head_branch: str
    head_commit: dict
    head_repository: dict
    head_sha: str
    html_url: str
    id: int
    jobs_url: str
    logs_url: str
    node_id: str
    path: str
    pull_requests: list
    repository: dict
    rerun_url: str
    run_number: int
    status: str
    triggering_actor: dict
    updated_at: str
    url: str
    workflow_id: int
    workflow_url: str


class WorkflowRunCreateData(WorkflowRunCreateDataRequired, total=False):
    check_suite_id: int
    check_suite_node_id: str
    head_repository_id: int
    name: str
    previous_attempt_url: str
    referenced_workflows: list
    run_attempt: int
    run_started_at: str


class WorkflowRunUsage(TypedDict):
    MACOS: dict
    UBUNTU: dict
    WINDOWS: dict


class WorkflowRunUsageLoadMatch(TypedDict):
    owner: str
    repo: str
    run_id: int


class WorkflowUsage(TypedDict, total=False):
    MACOS: dict
    UBUNTU: dict
    WINDOWS: dict
    id: str


class WorkflowUsageLoadMatch(TypedDict):
    id: str
    owner: str
    repo: str
