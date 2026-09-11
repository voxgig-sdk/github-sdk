<?php
declare(strict_types=1);

// Typed models for the Github SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Action entity data model. */
class Action
{
    public ?int $MACOS = null;
    public ?int $UBUNTU = null;
    public ?int $WINDOWS = null;
    public string $access_level;
    public int $active_caches_count;
    public int $active_caches_size_in_bytes;
    public array $actor;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?string $allowed_actions = null;
    public bool $allows_public_repositories;
    public ?bool $anonymous_access_enabled = null;
    public string $approval_policy;
    public string $archive_download_url;
    public string $archive_url;
    public ?bool $archived = null;
    public string $artifacts_url;
    public string $assignees_url;
    public string $badge_url;
    public string $blobs_url;
    public string $branches_url;
    public bool $busy;
    public ?bool $can_approve_pull_request_reviews = null;
    public string $cancel_url;
    public string $check_run_url;
    public ?int $check_suite_id = null;
    public ?string $check_suite_node_id = null;
    public string $check_suite_url;
    public ?string $clone_url = null;
    public array $code_of_conduct;
    public ?array $code_search_index_status = null;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $completed_at;
    public string $conclusion;
    public string $contents_url;
    public string $contributors_url;
    public int $cpu_cores;
    public string $created_at;
    public ?array $custom_properties = null;
    public int $days;
    public bool $default;
    public ?string $default_branch = null;
    public ?string $default_workflow_permissions = null;
    public ?bool $delete_branch_on_merge = null;
    public ?string $deleted_at = null;
    public string $deployments_url;
    public string $description;
    public ?string $digest = null;
    public ?bool $disabled = null;
    public string $display_name;
    public string $display_title;
    public string $downloads_url;
    public bool $enabled;
    public string $enabled_repositories;
    public ?bool $ephemeral = null;
    public string $event;
    public string $events_url;
    public bool $expired;
    public string $expires_at;
    public bool $fork;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public ?string $git_url = null;
    public ?bool $github_owned_allowed = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public string $head_branch;
    public array $head_commit;
    public array $head_repository;
    public ?int $head_repository_id = null;
    public string $head_sha;
    public ?string $homepage = null;
    public string $hooks_url;
    public ?string $hosted_runners_url = null;
    public string $html_url;
    public int $id;
    public array $image_details;
    public bool $inherited;
    public ?bool $inherited_allows_public_repositories = null;
    public ?array $inputs = null;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $jobs_url;
    public string $keys_url;
    public array $labels;
    public string $labels_url;
    public ?string $language = null;
    public string $languages_url;
    public ?string $last_active_on = null;
    public ?array $license = null;
    public string $logs_url;
    public array $machine_size_details;
    public ?int $macos_12_core = null;
    public ?string $master_branch = null;
    public ?int $maximum_runners = null;
    public int $memory_gb;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public string $merges_url;
    public string $milestones_url;
    public ?string $mirror_url = null;
    public string $name;
    public ?string $network_configuration_id = null;
    public ?int $network_count = null;
    public string $node_id;
    public string $notifications_url;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public string $os;
    public array $owner;
    public string $path;
    public ?array $patterns_allowed = null;
    public ?array $permissions = null;
    public string $platform;
    public array $platforms;
    public ?string $previous_attempt_url = null;
    public bool $private;
    public bool $public_ip_enabled;
    public ?array $public_ips = null;
    public array $pull_requests;
    public string $pulls_url;
    public ?string $pushed_at = null;
    public string $ref;
    public ?array $referenced_workflows = null;
    public string $releases_url;
    public array $repository;
    public ?bool $require_approval_for_fork_pr_workflows = null;
    public string $rerun_url;
    public ?bool $restricted_to_workflows = null;
    public ?string $role_name = null;
    public ?int $run_attempt = null;
    public int $run_id;
    public int $run_number;
    public ?string $run_started_at = null;
    public string $run_url;
    public bool $run_workflows_from_fork_pull_requests;
    public int $runner_group_id;
    public string $runner_group_name;
    public int $runner_id;
    public string $runner_name;
    public array $runners;
    public string $runners_url;
    public ?array $security_and_analysis = null;
    public ?string $selected_repositories_url = null;
    public array $selected_repository_ids;
    public ?array $selected_workflows = null;
    public ?bool $send_secrets_and_variables = null;
    public ?bool $send_write_tokens_to_workflows = null;
    public ?bool $sha_pinning_required = null;
    public ?int $size = null;
    public int $size_gb;
    public int $size_in_bytes;
    public string $source;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public string $stargazers_url;
    public ?string $starred_at = null;
    public string $started_at;
    public string $state;
    public string $status;
    public string $statuses_url;
    public ?array $steps = null;
    public int $storage_gb;
    public ?int $subscribers_count = null;
    public string $subscribers_url;
    public string $subscription_url;
    public ?string $svn_url = null;
    public string $tags_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public ?int $total = null;
    public int $total_count;
    public string $trees_url;
    public array $triggering_actor;
    public ?string $type = null;
    public ?int $ubuntu_16_core = null;
    public ?int $ubuntu_32_core = null;
    public ?int $ubuntu_4_core = null;
    public ?int $ubuntu_64_core = null;
    public ?int $ubuntu_8_core = null;
    public string $updated_at;
    public string $url;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $value = null;
    public ?bool $verified_allowed = null;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
    public ?int $windows_16_core = null;
    public ?int $windows_32_core = null;
    public ?int $windows_4_core = null;
    public ?int $windows_64_core = null;
    public ?int $windows_8_core = null;
    public ?string $work_folder = null;
    public int $workflow_id;
    public string $workflow_name;
    public ?bool $workflow_restrictions_read_only = null;
    public ?array $workflow_run = null;
    public string $workflow_url;
}

/** Request payload for Action#load. */
class ActionLoadMatch
{
    public string $archive_format;
    public int $artifact_id;
    public string $owner;
    public string $repo;
}

/** Request payload for Action#list. */
class ActionListMatch
{
    public string $org_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Action#create. */
class ActionCreateData
{
    public string $org_id;
    public ?int $MACOS = null;
    public ?int $UBUNTU = null;
    public ?int $WINDOWS = null;
    public string $access_level;
    public int $active_caches_count;
    public int $active_caches_size_in_bytes;
    public array $actor;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?string $allowed_actions = null;
    public bool $allows_public_repositories;
    public ?bool $anonymous_access_enabled = null;
    public string $approval_policy;
    public string $archive_download_url;
    public string $archive_url;
    public ?bool $archived = null;
    public string $artifacts_url;
    public string $assignees_url;
    public string $badge_url;
    public string $blobs_url;
    public string $branches_url;
    public bool $busy;
    public ?bool $can_approve_pull_request_reviews = null;
    public string $cancel_url;
    public string $check_run_url;
    public ?int $check_suite_id = null;
    public ?string $check_suite_node_id = null;
    public string $check_suite_url;
    public ?string $clone_url = null;
    public array $code_of_conduct;
    public ?array $code_search_index_status = null;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $completed_at;
    public string $conclusion;
    public string $contents_url;
    public string $contributors_url;
    public int $cpu_cores;
    public string $created_at;
    public ?array $custom_properties = null;
    public int $days;
    public bool $default;
    public ?string $default_branch = null;
    public ?string $default_workflow_permissions = null;
    public ?bool $delete_branch_on_merge = null;
    public ?string $deleted_at = null;
    public string $deployments_url;
    public string $description;
    public ?string $digest = null;
    public ?bool $disabled = null;
    public string $display_name;
    public string $display_title;
    public string $downloads_url;
    public bool $enabled;
    public string $enabled_repositories;
    public ?bool $ephemeral = null;
    public string $event;
    public string $events_url;
    public bool $expired;
    public string $expires_at;
    public bool $fork;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public ?string $git_url = null;
    public ?bool $github_owned_allowed = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public string $head_branch;
    public array $head_commit;
    public array $head_repository;
    public ?int $head_repository_id = null;
    public string $head_sha;
    public ?string $homepage = null;
    public string $hooks_url;
    public ?string $hosted_runners_url = null;
    public string $html_url;
    public int $id;
    public array $image_details;
    public bool $inherited;
    public ?bool $inherited_allows_public_repositories = null;
    public ?array $inputs = null;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $jobs_url;
    public string $keys_url;
    public array $labels;
    public string $labels_url;
    public ?string $language = null;
    public string $languages_url;
    public ?string $last_active_on = null;
    public ?array $license = null;
    public string $logs_url;
    public array $machine_size_details;
    public ?int $macos_12_core = null;
    public ?string $master_branch = null;
    public ?int $maximum_runners = null;
    public int $memory_gb;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public string $merges_url;
    public string $milestones_url;
    public ?string $mirror_url = null;
    public string $name;
    public ?string $network_configuration_id = null;
    public ?int $network_count = null;
    public string $node_id;
    public string $notifications_url;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public string $os;
    public array $owner;
    public string $path;
    public ?array $patterns_allowed = null;
    public ?array $permissions = null;
    public string $platform;
    public array $platforms;
    public ?string $previous_attempt_url = null;
    public bool $private;
    public bool $public_ip_enabled;
    public ?array $public_ips = null;
    public array $pull_requests;
    public string $pulls_url;
    public ?string $pushed_at = null;
    public string $ref;
    public ?array $referenced_workflows = null;
    public string $releases_url;
    public array $repository;
    public ?bool $require_approval_for_fork_pr_workflows = null;
    public string $rerun_url;
    public ?bool $restricted_to_workflows = null;
    public ?string $role_name = null;
    public ?int $run_attempt = null;
    public int $run_id;
    public int $run_number;
    public ?string $run_started_at = null;
    public string $run_url;
    public bool $run_workflows_from_fork_pull_requests;
    public int $runner_group_id;
    public string $runner_group_name;
    public int $runner_id;
    public string $runner_name;
    public array $runners;
    public string $runners_url;
    public ?array $security_and_analysis = null;
    public ?string $selected_repositories_url = null;
    public array $selected_repository_ids;
    public ?array $selected_workflows = null;
    public ?bool $send_secrets_and_variables = null;
    public ?bool $send_write_tokens_to_workflows = null;
    public ?bool $sha_pinning_required = null;
    public ?int $size = null;
    public int $size_gb;
    public int $size_in_bytes;
    public string $source;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public string $stargazers_url;
    public ?string $starred_at = null;
    public string $started_at;
    public string $state;
    public string $status;
    public string $statuses_url;
    public ?array $steps = null;
    public int $storage_gb;
    public ?int $subscribers_count = null;
    public string $subscribers_url;
    public string $subscription_url;
    public ?string $svn_url = null;
    public string $tags_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public ?int $total = null;
    public int $total_count;
    public string $trees_url;
    public array $triggering_actor;
    public ?string $type = null;
    public ?int $ubuntu_16_core = null;
    public ?int $ubuntu_32_core = null;
    public ?int $ubuntu_4_core = null;
    public ?int $ubuntu_64_core = null;
    public ?int $ubuntu_8_core = null;
    public string $updated_at;
    public string $url;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $value = null;
    public ?bool $verified_allowed = null;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
    public ?int $windows_16_core = null;
    public ?int $windows_32_core = null;
    public ?int $windows_4_core = null;
    public ?int $windows_64_core = null;
    public ?int $windows_8_core = null;
    public ?string $work_folder = null;
    public int $workflow_id;
    public string $workflow_name;
    public ?bool $workflow_restrictions_read_only = null;
    public ?array $workflow_run = null;
    public string $workflow_url;
}

/** Request payload for Action#update. */
class ActionUpdateData
{
    public string $org_id;
    public int $repository_id;
    public ?int $MACOS = null;
    public ?int $UBUNTU = null;
    public ?int $WINDOWS = null;
    public ?string $access_level = null;
    public ?int $active_caches_count = null;
    public ?int $active_caches_size_in_bytes = null;
    public ?array $actor = null;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?string $allowed_actions = null;
    public ?bool $allows_public_repositories = null;
    public ?bool $anonymous_access_enabled = null;
    public ?string $approval_policy = null;
    public ?string $archive_download_url = null;
    public ?string $archive_url = null;
    public ?bool $archived = null;
    public ?string $artifacts_url = null;
    public ?string $assignees_url = null;
    public ?string $badge_url = null;
    public ?string $blobs_url = null;
    public ?string $branches_url = null;
    public ?bool $busy = null;
    public ?bool $can_approve_pull_request_reviews = null;
    public ?string $cancel_url = null;
    public ?string $check_run_url = null;
    public ?int $check_suite_id = null;
    public ?string $check_suite_node_id = null;
    public ?string $check_suite_url = null;
    public ?string $clone_url = null;
    public ?array $code_of_conduct = null;
    public ?array $code_search_index_status = null;
    public ?string $collaborators_url = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $compare_url = null;
    public ?string $completed_at = null;
    public ?string $conclusion = null;
    public ?string $contents_url = null;
    public ?string $contributors_url = null;
    public ?int $cpu_cores = null;
    public ?string $created_at = null;
    public ?array $custom_properties = null;
    public ?int $days = null;
    public ?bool $default = null;
    public ?string $default_branch = null;
    public ?string $default_workflow_permissions = null;
    public ?bool $delete_branch_on_merge = null;
    public ?string $deleted_at = null;
    public ?string $deployments_url = null;
    public ?string $description = null;
    public ?string $digest = null;
    public ?bool $disabled = null;
    public ?string $display_name = null;
    public ?string $display_title = null;
    public ?string $downloads_url = null;
    public ?bool $enabled = null;
    public ?string $enabled_repositories = null;
    public ?bool $ephemeral = null;
    public ?string $event = null;
    public ?string $events_url = null;
    public ?bool $expired = null;
    public ?string $expires_at = null;
    public ?bool $fork = null;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public ?string $forks_url = null;
    public ?string $full_name = null;
    public ?string $git_commits_url = null;
    public ?string $git_refs_url = null;
    public ?string $git_tags_url = null;
    public ?string $git_url = null;
    public ?bool $github_owned_allowed = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $head_branch = null;
    public ?array $head_commit = null;
    public ?array $head_repository = null;
    public ?int $head_repository_id = null;
    public ?string $head_sha = null;
    public ?string $homepage = null;
    public ?string $hooks_url = null;
    public ?string $hosted_runners_url = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?array $image_details = null;
    public ?bool $inherited = null;
    public ?bool $inherited_allows_public_repositories = null;
    public ?array $inputs = null;
    public ?bool $is_template = null;
    public ?string $issue_comment_url = null;
    public ?string $issue_events_url = null;
    public ?string $issues_url = null;
    public ?string $jobs_url = null;
    public ?string $keys_url = null;
    public ?array $labels = null;
    public ?string $labels_url = null;
    public ?string $language = null;
    public ?string $languages_url = null;
    public ?string $last_active_on = null;
    public ?array $license = null;
    public ?string $logs_url = null;
    public ?array $machine_size_details = null;
    public ?int $macos_12_core = null;
    public ?string $master_branch = null;
    public ?int $maximum_runners = null;
    public ?int $memory_gb = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public ?string $merges_url = null;
    public ?string $milestones_url = null;
    public ?string $mirror_url = null;
    public ?string $name = null;
    public ?string $network_configuration_id = null;
    public ?int $network_count = null;
    public ?string $node_id = null;
    public ?string $notifications_url = null;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public ?string $os = null;
    public ?array $owner = null;
    public ?string $path = null;
    public ?array $patterns_allowed = null;
    public ?array $permissions = null;
    public ?string $platform = null;
    public ?array $platforms = null;
    public ?string $previous_attempt_url = null;
    public ?bool $private = null;
    public ?bool $public_ip_enabled = null;
    public ?array $public_ips = null;
    public ?array $pull_requests = null;
    public ?string $pulls_url = null;
    public ?string $pushed_at = null;
    public ?string $ref = null;
    public ?array $referenced_workflows = null;
    public ?string $releases_url = null;
    public ?array $repository = null;
    public ?bool $require_approval_for_fork_pr_workflows = null;
    public ?string $rerun_url = null;
    public ?bool $restricted_to_workflows = null;
    public ?string $role_name = null;
    public ?int $run_attempt = null;
    public ?int $run_id = null;
    public ?int $run_number = null;
    public ?string $run_started_at = null;
    public ?string $run_url = null;
    public ?bool $run_workflows_from_fork_pull_requests = null;
    public ?int $runner_group_id = null;
    public ?string $runner_group_name = null;
    public ?int $runner_id = null;
    public ?string $runner_name = null;
    public ?array $runners = null;
    public ?string $runners_url = null;
    public ?array $security_and_analysis = null;
    public ?string $selected_repositories_url = null;
    public ?array $selected_repository_ids = null;
    public ?array $selected_workflows = null;
    public ?bool $send_secrets_and_variables = null;
    public ?bool $send_write_tokens_to_workflows = null;
    public ?bool $sha_pinning_required = null;
    public ?int $size = null;
    public ?int $size_gb = null;
    public ?int $size_in_bytes = null;
    public ?string $source = null;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public ?string $stargazers_url = null;
    public ?string $starred_at = null;
    public ?string $started_at = null;
    public ?string $state = null;
    public ?string $status = null;
    public ?string $statuses_url = null;
    public ?array $steps = null;
    public ?int $storage_gb = null;
    public ?int $subscribers_count = null;
    public ?string $subscribers_url = null;
    public ?string $subscription_url = null;
    public ?string $svn_url = null;
    public ?string $tags_url = null;
    public ?string $teams_url = null;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public ?int $total = null;
    public ?int $total_count = null;
    public ?string $trees_url = null;
    public ?array $triggering_actor = null;
    public ?string $type = null;
    public ?int $ubuntu_16_core = null;
    public ?int $ubuntu_32_core = null;
    public ?int $ubuntu_4_core = null;
    public ?int $ubuntu_64_core = null;
    public ?int $ubuntu_8_core = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $value = null;
    public ?bool $verified_allowed = null;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
    public ?int $windows_16_core = null;
    public ?int $windows_32_core = null;
    public ?int $windows_4_core = null;
    public ?int $windows_64_core = null;
    public ?int $windows_8_core = null;
    public ?string $work_folder = null;
    public ?int $workflow_id = null;
    public ?string $workflow_name = null;
    public ?bool $workflow_restrictions_read_only = null;
    public ?array $workflow_run = null;
    public ?string $workflow_url = null;
}

/** Request payload for Action#remove. */
class ActionRemoveMatch
{
    public int $hosted_runner_id;
    public string $org_id;
}

/** ActionsArtifactAndLogRetention entity data model. */
class ActionsArtifactAndLogRetention
{
    public int $days;
    public int $maximum_allowed_days;
}

/** Request payload for ActionsArtifactAndLogRetention#load. */
class ActionsArtifactAndLogRetentionLoadMatch
{
    public string $org_id;
}

/** ActionsCacheList entity data model. */
class ActionsCacheList
{
    public ?string $created_at = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?string $last_accessed_at = null;
    public ?string $ref = null;
    public ?int $size_in_bytes = null;
    public ?string $version = null;
}

/** Request payload for ActionsCacheList#list. */
class ActionsCacheListListMatch
{
    public string $owner;
    public string $repo;
    public ?string $direction = null;
    public ?string $key = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $ref = null;
    public ?string $sort = null;
}

/** Request payload for ActionsCacheList#remove. */
class ActionsCacheListRemoveMatch
{
    public string $owner;
    public string $repo;
    public string $key;
    public ?string $ref = null;
}

/** ActionsCacheUsageByRepository entity data model. */
class ActionsCacheUsageByRepository
{
    public int $active_caches_count;
    public int $active_caches_size_in_bytes;
    public string $full_name;
}

/** Request payload for ActionsCacheUsageByRepository#load. */
class ActionsCacheUsageByRepositoryLoadMatch
{
    public string $owner;
    public string $repo;
}

/** ActionsCacheUsageOrgEnterprise entity data model. */
class ActionsCacheUsageOrgEnterprise
{
    public int $total_active_caches_count;
    public int $total_active_caches_size_in_bytes;
}

/** Request payload for ActionsCacheUsageOrgEnterprise#load. */
class ActionsCacheUsageOrgEnterpriseLoadMatch
{
    public string $org_id;
}

/** ActionsForkPrContributorApproval entity data model. */
class ActionsForkPrContributorApproval
{
    public string $approval_policy;
}

/** Request payload for ActionsForkPrContributorApproval#load. */
class ActionsForkPrContributorApprovalLoadMatch
{
    public string $org_id;
}

/** ActionsForkPrWorkflowsPrivateRepo entity data model. */
class ActionsForkPrWorkflowsPrivateRepo
{
    public bool $require_approval_for_fork_pr_workflows;
    public bool $run_workflows_from_fork_pull_requests;
    public bool $send_secrets_and_variables;
    public bool $send_write_tokens_to_workflows;
}

/** Request payload for ActionsForkPrWorkflowsPrivateRepo#load. */
class ActionsForkPrWorkflowsPrivateRepoLoadMatch
{
    public string $org_id;
}

/** ActionsGetDefaultWorkflowPermission entity data model. */
class ActionsGetDefaultWorkflowPermission
{
    public bool $can_approve_pull_request_reviews;
    public string $default_workflow_permissions;
}

/** Request payload for ActionsGetDefaultWorkflowPermission#load. */
class ActionsGetDefaultWorkflowPermissionLoadMatch
{
    public string $org_id;
}

/** ActionsHostedRunner entity data model. */
class ActionsHostedRunner
{
    public ?bool $enable_static_ip = null;
    public int $id;
    public array $image;
    public array $image_details;
    public ?string $last_active_on = null;
    public array $machine_size_details;
    public ?int $maximum_runners = null;
    public string $name;
    public string $platform;
    public bool $public_ip_enabled;
    public ?array $public_ips = null;
    public ?int $runner_group_id = null;
    public string $size;
    public string $status;
}

/** Request payload for ActionsHostedRunner#load. */
class ActionsHostedRunnerLoadMatch
{
    public int $id;
    public string $org_id;
}

/** Request payload for ActionsHostedRunner#create. */
class ActionsHostedRunnerCreateData
{
    public string $org_id;
    public ?bool $enable_static_ip = null;
    public int $id;
    public array $image;
    public array $image_details;
    public ?string $last_active_on = null;
    public array $machine_size_details;
    public ?int $maximum_runners = null;
    public string $name;
    public string $platform;
    public bool $public_ip_enabled;
    public ?array $public_ips = null;
    public ?int $runner_group_id = null;
    public string $size;
    public string $status;
}

/** Request payload for ActionsHostedRunner#update. */
class ActionsHostedRunnerUpdateData
{
    public int $id;
    public string $org_id;
    public ?bool $enable_static_ip = null;
    public ?array $image = null;
    public ?array $image_details = null;
    public ?string $last_active_on = null;
    public ?array $machine_size_details = null;
    public ?int $maximum_runners = null;
    public ?string $name = null;
    public ?string $platform = null;
    public ?bool $public_ip_enabled = null;
    public ?array $public_ips = null;
    public ?int $runner_group_id = null;
    public ?string $size = null;
    public ?string $status = null;
}

/** ActionsHostedRunnerLimit entity data model. */
class ActionsHostedRunnerLimit
{
    public int $current_usage;
    public int $maximum;
}

/** Request payload for ActionsHostedRunnerLimit#load. */
class ActionsHostedRunnerLimitLoadMatch
{
    public string $org_id;
}

/** ActionsOrganizationPermission entity data model. */
class ActionsOrganizationPermission
{
    public ?string $allowed_actions = null;
    public string $enabled_repositories;
    public ?string $selected_actions_url = null;
    public ?string $selected_repositories_url = null;
    public ?bool $sha_pinning_required = null;
}

/** Request payload for ActionsOrganizationPermission#load. */
class ActionsOrganizationPermissionLoadMatch
{
    public string $org_id;
}

/** ActionsPublicKey entity data model. */
class ActionsPublicKey
{
    public ?string $created_at = null;
    public ?int $id = null;
    public string $key;
    public string $key_id;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for ActionsPublicKey#load. */
class ActionsPublicKeyLoadMatch
{
    public string $org_id;
}

/** ActionsRepositoryPermission entity data model. */
class ActionsRepositoryPermission
{
    public ?string $allowed_actions = null;
    public bool $enabled;
    public ?string $selected_actions_url = null;
    public ?bool $sha_pinning_required = null;
}

/** Request payload for ActionsRepositoryPermission#load. */
class ActionsRepositoryPermissionLoadMatch
{
    public string $owner;
    public string $repo;
}

/** ActionsSecret entity data model. */
class ActionsSecret
{
    public string $created_at;
    public ?string $id = null;
    public string $name;
    public string $updated_at;
}

/** Request payload for ActionsSecret#load. */
class ActionsSecretLoadMatch
{
    public ?string $environment_id = null;
    public string $id;
    public string $owner;
    public string $repo;
}

/** ActionsVariable entity data model. */
class ActionsVariable
{
    public string $created_at;
    public ?string $id = null;
    public string $name;
    public string $updated_at;
    public string $value;
}

/** Request payload for ActionsVariable#load. */
class ActionsVariableLoadMatch
{
    public ?string $environment_id = null;
    public string $id;
    public string $owner;
    public string $repo;
}

/** ActionsWorkflowAccessToRepository entity data model. */
class ActionsWorkflowAccessToRepository
{
    public string $access_level;
}

/** Request payload for ActionsWorkflowAccessToRepository#load. */
class ActionsWorkflowAccessToRepositoryLoadMatch
{
    public string $owner;
    public string $repo;
}

/** Activity entity data model. */
class Activity
{
    public string $activity_type;
    public array $actor;
    public string $after;
    public ?string $archive_url = null;
    public ?string $assignees_url = null;
    public ?string $avatar_url = null;
    public string $before;
    public ?string $blobs_url = null;
    public ?string $branches_url = null;
    public ?string $clone_url = null;
    public ?string $collaborators_url = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $compare_url = null;
    public ?string $contents_url = null;
    public ?string $contributors_url = null;
    public ?string $deployments_url = null;
    public ?string $description = null;
    public ?string $downloads_url = null;
    public ?string $events_url = null;
    public ?string $followers_url = null;
    public ?string $following_url = null;
    public ?bool $fork = null;
    public ?string $forks_url = null;
    public ?string $full_name = null;
    public ?string $gists_url = null;
    public ?string $git_commits_url = null;
    public ?string $git_refs_url = null;
    public ?string $git_tags_url = null;
    public ?string $git_url = null;
    public ?int $github_id = null;
    public ?string $gravatar_id = null;
    public ?string $homepage = null;
    public ?string $hooks_url = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?string $issue_comment_url = null;
    public ?string $issue_events_url = null;
    public ?string $issues_url = null;
    public ?string $keys_url = null;
    public ?string $labels_url = null;
    public ?array $language = null;
    public ?string $languages_url = null;
    public ?string $last_read_at = null;
    public ?string $login = null;
    public ?string $merges_url = null;
    public ?string $milestones_url = null;
    public ?string $mirror_url = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $notifications_url = null;
    public ?string $organizations_url = null;
    public ?array $owner = null;
    public ?bool $private = null;
    public ?string $pulls_url = null;
    public ?bool $read = null;
    public ?string $received_events_url = null;
    public string $ref;
    public ?string $releases_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public ?string $ssh_url = null;
    public ?string $stargazers_url = null;
    public ?string $starred_url = null;
    public ?string $statuses_url = null;
    public ?string $subscribers_url = null;
    public ?string $subscription_url = null;
    public ?string $subscriptions_url = null;
    public ?string $svn_url = null;
    public ?string $tags_url = null;
    public ?string $teams_url = null;
    public string $timestamp;
    public ?string $trees_url = null;
    public ?string $type = null;
    public ?string $url = null;
}

/** Request payload for Activity#load. */
class ActivityLoadMatch
{
    public string $owner;
    public string $repo;
}

/** Request payload for Activity#list. */
class ActivityListMatch
{
    public string $owner;
    public string $repo;
    public ?string $activity_type = null;
    public ?string $actor = null;
    public ?string $after = null;
    public ?string $before = null;
    public ?string $direction = null;
    public ?int $per_page = null;
    public ?string $ref = null;
    public ?string $time_period = null;
}

/** Request payload for Activity#update. */
class ActivityUpdateData
{
    public string $owner;
    public string $repo;
    public ?string $activity_type = null;
    public ?array $actor = null;
    public ?string $after = null;
    public ?string $archive_url = null;
    public ?string $assignees_url = null;
    public ?string $avatar_url = null;
    public ?string $before = null;
    public ?string $blobs_url = null;
    public ?string $branches_url = null;
    public ?string $clone_url = null;
    public ?string $collaborators_url = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $compare_url = null;
    public ?string $contents_url = null;
    public ?string $contributors_url = null;
    public ?string $deployments_url = null;
    public ?string $description = null;
    public ?string $downloads_url = null;
    public ?string $events_url = null;
    public ?string $followers_url = null;
    public ?string $following_url = null;
    public ?bool $fork = null;
    public ?string $forks_url = null;
    public ?string $full_name = null;
    public ?string $gists_url = null;
    public ?string $git_commits_url = null;
    public ?string $git_refs_url = null;
    public ?string $git_tags_url = null;
    public ?string $git_url = null;
    public ?int $github_id = null;
    public ?string $gravatar_id = null;
    public ?string $homepage = null;
    public ?string $hooks_url = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?string $issue_comment_url = null;
    public ?string $issue_events_url = null;
    public ?string $issues_url = null;
    public ?string $keys_url = null;
    public ?string $labels_url = null;
    public ?array $language = null;
    public ?string $languages_url = null;
    public ?string $last_read_at = null;
    public ?string $login = null;
    public ?string $merges_url = null;
    public ?string $milestones_url = null;
    public ?string $mirror_url = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $notifications_url = null;
    public ?string $organizations_url = null;
    public ?bool $private = null;
    public ?string $pulls_url = null;
    public ?bool $read = null;
    public ?string $received_events_url = null;
    public ?string $ref = null;
    public ?string $releases_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public ?string $ssh_url = null;
    public ?string $stargazers_url = null;
    public ?string $starred_url = null;
    public ?string $statuses_url = null;
    public ?string $subscribers_url = null;
    public ?string $subscription_url = null;
    public ?string $subscriptions_url = null;
    public ?string $svn_url = null;
    public ?string $tags_url = null;
    public ?string $teams_url = null;
    public ?string $timestamp = null;
    public ?string $trees_url = null;
    public ?string $type = null;
    public ?string $url = null;
}

/** Request payload for Activity#remove. */
class ActivityRemoveMatch
{
    public int $thread_id;
}

/** Add entity data model. */
class Add
{
    public array $usernames;
}

/** Request payload for Add#create. */
class AddCreateData
{
    public string $enterprise;
    public string $team_id;
    public array $usernames;
}

/** ApiInsightsRouteStat entity data model. */
class ApiInsightsRouteStat
{
    public ?string $api_route = null;
    public ?string $http_method = null;
    public ?string $last_rate_limited_timestamp = null;
    public ?string $last_request_timestamp = null;
    public ?int $rate_limited_request_count = null;
    public ?int $total_request_count = null;
}

/** Request payload for ApiInsightsRouteStat#list. */
class ApiInsightsRouteStatListMatch
{
    public int $actor_id;
    public string $actor_type;
    public string $org;
    public ?string $api_route_substring = null;
    public ?string $direction = null;
    public ?string $max_timestamp = null;
    public string $min_timestamp;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?array $sort = null;
}

/** ApiInsightsSubjectStat entity data model. */
class ApiInsightsSubjectStat
{
    public ?string $last_rate_limited_timestamp = null;
    public ?string $last_request_timestamp = null;
    public ?int $rate_limited_request_count = null;
    public ?int $subject_id = null;
    public ?string $subject_name = null;
    public ?string $subject_type = null;
    public ?int $total_request_count = null;
}

/** Request payload for ApiInsightsSubjectStat#list. */
class ApiInsightsSubjectStatListMatch
{
    public string $org_id;
    public ?string $direction = null;
    public ?string $max_timestamp = null;
    public string $min_timestamp;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?array $sort = null;
    public ?string $subject_name_substring = null;
}

/** ApiInsightsSummaryStat entity data model. */
class ApiInsightsSummaryStat
{
    public ?string $id = null;
    public ?int $rate_limited_request_count = null;
    public ?int $total_request_count = null;
}

/** Request payload for ApiInsightsSummaryStat#load. */
class ApiInsightsSummaryStatLoadMatch
{
    public ?int $actor_id = null;
    public ?string $actor_type = null;
    public ?string $org = null;
    public ?string $max_timestamp = null;
    public string $min_timestamp;
    public ?string $org_id = null;
    public ?string $user_id = null;
}

/** ApiInsightsTimeStat entity data model. */
class ApiInsightsTimeStat
{
    public ?int $rate_limited_request_count = null;
    public ?string $timestamp = null;
    public ?int $total_request_count = null;
}

/** Request payload for ApiInsightsTimeStat#load. */
class ApiInsightsTimeStatLoadMatch
{
    public string $org_id;
    public string $user_id;
    public ?string $max_timestamp = null;
    public string $min_timestamp;
    public string $timestamp_increment;
}

/** Request payload for ApiInsightsTimeStat#list. */
class ApiInsightsTimeStatListMatch
{
    public ?int $actor_id = null;
    public ?string $actor_type = null;
    public ?string $org = null;
    public ?string $max_timestamp = null;
    public string $min_timestamp;
    public string $timestamp_increment;
    public ?string $org_id = null;
}

/** ApiInsightsUserStat entity data model. */
class ApiInsightsUserStat
{
    public ?int $actor_id = null;
    public ?string $actor_name = null;
    public ?string $actor_type = null;
    public ?string $id = null;
    public ?int $integration_id = null;
    public ?string $last_rate_limited_timestamp = null;
    public ?string $last_request_timestamp = null;
    public ?int $oauth_application_id = null;
    public ?int $rate_limited_request_count = null;
    public ?int $total_request_count = null;
}

/** Request payload for ApiInsightsUserStat#load. */
class ApiInsightsUserStatLoadMatch
{
    public string $id;
    public string $org_id;
    public ?string $actor_name_substring = null;
    public ?string $direction = null;
    public ?string $max_timestamp = null;
    public string $min_timestamp;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?array $sort = null;
}

/** ApiOverview entity data model. */
class ApiOverview
{
    public ?array $actions = null;
    public ?array $actions_macos = null;
    public ?array $api = null;
    public ?array $codespaces = null;
    public ?array $copilot = null;
    public ?array $dependabot = null;
    public ?array $domains = null;
    public ?array $git = null;
    public ?array $github_enterprise_importer = null;
    public ?array $hooks = null;
    public ?array $importer = null;
    public ?array $packages = null;
    public ?array $pages = null;
    public ?array $ssh_key_fingerprints = null;
    public ?array $ssh_keys = null;
    public bool $verifiable_password_authentication;
    public ?array $web = null;
}

/** Request payload for ApiOverview#list. */
class ApiOverviewListMatch
{
    public ?array $actions = null;
    public ?array $actions_macos = null;
    public ?array $api = null;
    public ?array $codespaces = null;
    public ?array $copilot = null;
    public ?array $dependabot = null;
    public ?array $domains = null;
    public ?array $git = null;
    public ?array $github_enterprise_importer = null;
    public ?array $hooks = null;
    public ?array $importer = null;
    public ?array $packages = null;
    public ?array $pages = null;
    public ?array $ssh_key_fingerprints = null;
    public ?array $ssh_keys = null;
    public ?bool $verifiable_password_authentication = null;
    public ?array $web = null;
}

/** App entity data model. */
class App
{
    public string $access_tokens_url;
    public mixed $account;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?bool $anonymous_access_enabled = null;
    public int $app_id;
    public string $app_slug;
    public string $archive_url;
    public bool $archived;
    public string $assignees_url;
    public string $blobs_url;
    public string $branches_url;
    public ?string $client_id = null;
    public ?string $client_secret = null;
    public string $clone_url;
    public ?array $code_search_index_status = null;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public ?string $contact_email = null;
    public string $contents_url;
    public string $contributors_url;
    public ?string $created_at = null;
    public string $default_branch;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public ?string $description = null;
    public bool $disabled;
    public string $downloads_url;
    public ?array $events = null;
    public string $events_url;
    public ?string $external_url = null;
    public bool $fork;
    public int $forks;
    public int $forks_count;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public string $git_url;
    public ?bool $has_discussions = null;
    public bool $has_downloads;
    public bool $has_issues;
    public ?bool $has_multiple_single_files = null;
    public bool $has_pages;
    public bool $has_projects;
    public bool $has_wiki;
    public string $homepage;
    public string $hooks_url;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $language;
    public string $languages_url;
    public array $license;
    public ?string $master_branch = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public string $merges_url;
    public string $milestones_url;
    public string $mirror_url;
    public ?string $name = null;
    public ?string $node_id = null;
    public string $notifications_url;
    public int $open_issues;
    public int $open_issues_count;
    public ?array $owner = null;
    public ?string $pem = null;
    public ?array $permissions = null;
    public bool $private;
    public string $pulls_url;
    public string $pushed_at;
    public string $releases_url;
    public string $repositories_url;
    public string $repository_selection;
    public string $single_file_name;
    public ?array $single_file_paths = null;
    public int $size;
    public ?string $slug = null;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public string $ssh_url;
    public int $stargazers_count;
    public string $stargazers_url;
    public ?string $starred_at = null;
    public string $statuses_url;
    public string $subscribers_url;
    public string $subscription_url;
    public string $suspended_at;
    public array $suspended_by;
    public string $svn_url;
    public string $tags_url;
    public int $target_id;
    public string $target_type;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public string $trees_url;
    public ?string $updated_at = null;
    public string $url;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $visibility = null;
    public int $watchers;
    public int $watchers_count;
    public ?bool $web_commit_signoff_required = null;
    public ?string $webhook_secret = null;
}

/** Request payload for App#list. */
class AppListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for App#create. */
class AppCreateData
{
    public string $code;
    public string $access_tokens_url;
    public mixed $account;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?bool $anonymous_access_enabled = null;
    public int $app_id;
    public string $app_slug;
    public string $archive_url;
    public bool $archived;
    public string $assignees_url;
    public string $blobs_url;
    public string $branches_url;
    public ?string $client_id = null;
    public ?string $client_secret = null;
    public string $clone_url;
    public ?array $code_search_index_status = null;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public ?string $contact_email = null;
    public string $contents_url;
    public string $contributors_url;
    public ?string $created_at = null;
    public string $default_branch;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public ?string $description = null;
    public bool $disabled;
    public string $downloads_url;
    public ?array $events = null;
    public string $events_url;
    public ?string $external_url = null;
    public bool $fork;
    public int $forks;
    public int $forks_count;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public string $git_url;
    public ?bool $has_discussions = null;
    public bool $has_downloads;
    public bool $has_issues;
    public ?bool $has_multiple_single_files = null;
    public bool $has_pages;
    public bool $has_projects;
    public bool $has_wiki;
    public string $homepage;
    public string $hooks_url;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $language;
    public string $languages_url;
    public array $license;
    public ?string $master_branch = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public string $merges_url;
    public string $milestones_url;
    public string $mirror_url;
    public ?string $name = null;
    public ?string $node_id = null;
    public string $notifications_url;
    public int $open_issues;
    public int $open_issues_count;
    public ?array $owner = null;
    public ?string $pem = null;
    public ?array $permissions = null;
    public bool $private;
    public string $pulls_url;
    public string $pushed_at;
    public string $releases_url;
    public string $repositories_url;
    public string $repository_selection;
    public string $single_file_name;
    public ?array $single_file_paths = null;
    public int $size;
    public ?string $slug = null;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public string $ssh_url;
    public int $stargazers_count;
    public string $stargazers_url;
    public ?string $starred_at = null;
    public string $statuses_url;
    public string $subscribers_url;
    public string $subscription_url;
    public string $suspended_at;
    public array $suspended_by;
    public string $svn_url;
    public string $tags_url;
    public int $target_id;
    public string $target_type;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public string $trees_url;
    public ?string $updated_at = null;
    public string $url;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $visibility = null;
    public int $watchers;
    public int $watchers_count;
    public ?bool $web_commit_signoff_required = null;
    public ?string $webhook_secret = null;
}

/** Request payload for App#update. */
class AppUpdateData
{
    public int $installation_id;
    public int $repository_id;
    public ?string $access_tokens_url = null;
    public mixed $account = null;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?bool $anonymous_access_enabled = null;
    public ?int $app_id = null;
    public ?string $app_slug = null;
    public ?string $archive_url = null;
    public ?bool $archived = null;
    public ?string $assignees_url = null;
    public ?string $blobs_url = null;
    public ?string $branches_url = null;
    public ?string $client_id = null;
    public ?string $client_secret = null;
    public ?string $clone_url = null;
    public ?array $code_search_index_status = null;
    public ?string $collaborators_url = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $compare_url = null;
    public ?string $contact_email = null;
    public ?string $contents_url = null;
    public ?string $contributors_url = null;
    public ?string $created_at = null;
    public ?string $default_branch = null;
    public ?bool $delete_branch_on_merge = null;
    public ?string $deployments_url = null;
    public ?string $description = null;
    public ?bool $disabled = null;
    public ?string $downloads_url = null;
    public ?array $events = null;
    public ?string $events_url = null;
    public ?string $external_url = null;
    public ?bool $fork = null;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public ?string $forks_url = null;
    public ?string $full_name = null;
    public ?string $git_commits_url = null;
    public ?string $git_refs_url = null;
    public ?string $git_tags_url = null;
    public ?string $git_url = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_multiple_single_files = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public ?string $hooks_url = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?bool $is_template = null;
    public ?string $issue_comment_url = null;
    public ?string $issue_events_url = null;
    public ?string $issues_url = null;
    public ?string $keys_url = null;
    public ?string $labels_url = null;
    public ?string $language = null;
    public ?string $languages_url = null;
    public ?array $license = null;
    public ?string $master_branch = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public ?string $merges_url = null;
    public ?string $milestones_url = null;
    public ?string $mirror_url = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $notifications_url = null;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public ?array $owner = null;
    public ?string $pem = null;
    public ?array $permissions = null;
    public ?bool $private = null;
    public ?string $pulls_url = null;
    public ?string $pushed_at = null;
    public ?string $releases_url = null;
    public ?string $repositories_url = null;
    public ?string $repository_selection = null;
    public ?string $single_file_name = null;
    public ?array $single_file_paths = null;
    public ?int $size = null;
    public ?string $slug = null;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public ?string $stargazers_url = null;
    public ?string $starred_at = null;
    public ?string $statuses_url = null;
    public ?string $subscribers_url = null;
    public ?string $subscription_url = null;
    public ?string $suspended_at = null;
    public ?array $suspended_by = null;
    public ?string $svn_url = null;
    public ?string $tags_url = null;
    public ?int $target_id = null;
    public ?string $target_type = null;
    public ?string $teams_url = null;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public ?string $trees_url = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
    public ?string $webhook_secret = null;
}

/** Request payload for App#remove. */
class AppRemoveMatch
{
    public int $installation_id;
}

/** Artifact entity data model. */
class Artifact
{
    public ?string $head_branch = null;
    public ?int $head_repository_id = null;
    public ?string $head_sha = null;
    public ?int $id = null;
    public ?int $repository_id = null;
}

/** Request payload for Artifact#load. */
class ArtifactLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Assignee entity data model. */
class Assignee
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Assignee#list. */
class AssigneeListMatch
{
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** AuthenticationToken entity data model. */
class AuthenticationToken
{
    public ?string $expires_at = null;
    public ?string $token = null;
}

/** Request payload for AuthenticationToken#create. */
class AuthenticationTokenCreateData
{
    public string $org_id;
    public ?string $expires_at = null;
    public ?string $token = null;
}

/** Authorization entity data model. */
class Authorization
{
    public string $access_token;
    public array $app;
    public string $created_at;
    public string $expires_at;
    public string $fingerprint;
    public string $hashed_token;
    public int $id;
    public array $installation;
    public string $note;
    public string $note_url;
    public ?array $permissions = null;
    public ?array $repositories = null;
    public ?array $repository_ids = null;
    public array $scopes;
    public ?string $target = null;
    public ?int $target_id = null;
    public string $token;
    public string $token_last_eight;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for Authorization#create. */
class AuthorizationCreateData
{
    public string $application_id;
    public string $access_token;
    public array $app;
    public string $created_at;
    public string $expires_at;
    public string $fingerprint;
    public string $hashed_token;
    public int $id;
    public array $installation;
    public string $note;
    public string $note_url;
    public ?array $permissions = null;
    public ?array $repositories = null;
    public ?array $repository_ids = null;
    public array $scopes;
    public ?string $target = null;
    public ?int $target_id = null;
    public string $token;
    public string $token_last_eight;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for Authorization#update. */
class AuthorizationUpdateData
{
    public string $application_id;
    public ?string $access_token = null;
    public ?array $app = null;
    public ?string $created_at = null;
    public ?string $expires_at = null;
    public ?string $fingerprint = null;
    public ?string $hashed_token = null;
    public ?int $id = null;
    public ?array $installation = null;
    public ?string $note = null;
    public ?string $note_url = null;
    public ?array $permissions = null;
    public ?array $repositories = null;
    public ?array $repository_ids = null;
    public ?array $scopes = null;
    public ?string $target = null;
    public ?int $target_id = null;
    public ?string $token = null;
    public ?string $token_last_eight = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?array $user = null;
}

/** Autolink entity data model. */
class Autolink
{
    public int $id;
    public bool $is_alphanumeric;
    public string $key_prefix;
    public ?string $updated_at = null;
    public string $url_template;
}

/** Request payload for Autolink#load. */
class AutolinkLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for Autolink#list. */
class AutolinkListMatch
{
    public string $owner;
    public string $repo;
}

/** Request payload for Autolink#create. */
class AutolinkCreateData
{
    public string $owner;
    public string $repo;
    public int $id;
    public bool $is_alphanumeric;
    public string $key_prefix;
    public ?string $updated_at = null;
    public string $url_template;
}

/** BaseGist entity data model. */
class BaseGist
{
    public ?int $comments = null;
    public ?bool $comments_enabled = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $files = null;
    public ?array $forks = null;
    public ?string $forks_url = null;
    public ?string $git_pull_url = null;
    public ?string $git_push_url = null;
    public ?array $history = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?string $node_id = null;
    public ?array $owner = null;
    public ?bool $public = null;
    public ?bool $truncated = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user = null;
}

/** Request payload for BaseGist#list. */
class BaseGistListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $since = null;
}

/** Request payload for BaseGist#create. */
class BaseGistCreateData
{
    public string $gist_id;
    public ?int $comments = null;
    public ?bool $comments_enabled = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $files = null;
    public ?array $forks = null;
    public ?string $forks_url = null;
    public ?string $git_pull_url = null;
    public ?string $git_push_url = null;
    public ?array $history = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?string $node_id = null;
    public ?array $owner = null;
    public ?bool $public = null;
    public ?bool $truncated = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user = null;
}

/** BillingUsageReport entity data model. */
class BillingUsageReport
{
    public string $date;
    public float $discountAmount;
    public float $grossAmount;
    public float $netAmount;
    public string $organizationName;
    public float $pricePerUnit;
    public string $product;
    public int $quantity;
    public ?string $repositoryName = null;
    public string $sku;
    public string $unitType;
}

/** Request payload for BillingUsageReport#list. */
class BillingUsageReportListMatch
{
    public string $org;
    public ?int $day = null;
    public ?int $hour = null;
    public ?int $month = null;
    public ?int $year = null;
}

/** BillingUsageReportUser entity data model. */
class BillingUsageReportUser
{
    public string $date;
    public float $discountAmount;
    public float $grossAmount;
    public float $netAmount;
    public float $pricePerUnit;
    public string $product;
    public int $quantity;
    public ?string $repositoryName = null;
    public string $sku;
    public string $unitType;
}

/** Request payload for BillingUsageReportUser#list. */
class BillingUsageReportUserListMatch
{
    public string $username;
    public ?int $day = null;
    public ?int $hour = null;
    public ?int $month = null;
    public ?int $year = null;
}

/** Blob entity data model. */
class Blob
{
    public string $content;
    public string $encoding;
    public ?string $highlighted_content = null;
    public ?string $id = null;
    public string $node_id;
    public string $sha;
    public int $size;
    public string $url;
}

/** Request payload for Blob#load. */
class BlobLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
}

/** Block entity data model. */
class Block
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Block#list. */
class BlockListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Branch entity data model. */
class Branch
{
    public array $commit;
    public ?string $id = null;
    public array $links;
    public string $name;
    public ?string $pattern = null;
    public bool $protected;
    public array $protection;
    public string $protection_url;
    public ?int $required_approving_review_count = null;
}

/** Request payload for Branch#load. */
class BranchLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
}

/** BranchProtection entity data model. */
class BranchProtection
{
    public ?array $allow_deletions = null;
    public ?array $allow_force_pushes = null;
    public ?array $allow_fork_syncing = null;
    public ?array $block_creations = null;
    public ?bool $enabled = null;
    public array $enforce_admins;
    public ?string $id = null;
    public ?array $lock_branch = null;
    public ?string $name = null;
    public ?string $protection_url = null;
    public ?array $required_conversation_resolution = null;
    public ?array $required_linear_history = null;
    public array $required_pull_request_reviews;
    public array $required_signatures;
    public array $required_status_checks;
    public array $restrictions;
    public ?string $url = null;
}

/** Request payload for BranchProtection#load. */
class BranchProtectionLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
}

/** BranchRestrictionPolicy entity data model. */
class BranchRestrictionPolicy
{
    public array $apps;
    public string $apps_url;
    public array $teams;
    public string $teams_url;
    public string $url;
    public array $users;
    public string $users_url;
}

/** Request payload for BranchRestrictionPolicy#list. */
class BranchRestrictionPolicyListMatch
{
    public string $branch_id;
    public string $owner;
    public string $repo;
}

/** BranchShort entity data model. */
class BranchShort
{
    public array $commit;
    public string $name;
    public bool $protected;
}

/** Request payload for BranchShort#list. */
class BranchShortListMatch
{
    public string $commit_sha;
    public string $owner;
    public string $repo;
}

/** BranchWithProtection entity data model. */
class BranchWithProtection
{
    public ?string $id = null;
    public string $new_name;
}

/** Request payload for BranchWithProtection#create. */
class BranchWithProtectionCreateData
{
    public string $id;
    public string $owner;
    public string $repo;
    public string $new_name;
}

/** Campaign entity data model. */
class Campaign
{
    public array $alert_stats;
    public ?string $closed_at = null;
    public array $code_scanning_alerts;
    public string $contact_link;
    public string $created_at;
    public string $description;
    public string $ends_at;
    public ?bool $generate_issues = null;
    public ?string $id = null;
    public array $managers;
    public ?string $name = null;
    public int $number;
    public ?string $published_at = null;
    public string $state;
    public ?array $team_managers = null;
    public string $updated_at;
}

/** Request payload for Campaign#load. */
class CampaignLoadMatch
{
    public int $id;
    public string $org_id;
}

/** Request payload for Campaign#list. */
class CampaignListMatch
{
    public string $org_id;
    public ?string $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $sort = null;
    public ?string $state = null;
}

/** Request payload for Campaign#create. */
class CampaignCreateData
{
    public string $org_id;
    public array $alert_stats;
    public ?string $closed_at = null;
    public array $code_scanning_alerts;
    public string $contact_link;
    public string $created_at;
    public string $description;
    public string $ends_at;
    public ?bool $generate_issues = null;
    public ?string $id = null;
    public array $managers;
    public ?string $name = null;
    public int $number;
    public ?string $published_at = null;
    public string $state;
    public ?array $team_managers = null;
    public string $updated_at;
}

/** Request payload for Campaign#update. */
class CampaignUpdateData
{
    public int $id;
    public string $org_id;
    public ?array $alert_stats = null;
    public ?string $closed_at = null;
    public ?array $code_scanning_alerts = null;
    public ?string $contact_link = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $ends_at = null;
    public ?bool $generate_issues = null;
    public ?array $managers = null;
    public ?string $name = null;
    public ?int $number = null;
    public ?string $published_at = null;
    public ?string $state = null;
    public ?array $team_managers = null;
    public ?string $updated_at = null;
}

/** Request payload for Campaign#remove. */
class CampaignRemoveMatch
{
    public int $id;
    public string $org_id;
}

/** Check entity data model. */
class Check
{
    public string $after;
    public array $app;
    public string $before;
    public string $check_runs_url;
    public array $check_suite;
    public string $completed_at;
    public string $conclusion;
    public string $created_at;
    public array $deployment;
    public string $details_url;
    public string $external_id;
    public string $head_branch;
    public array $head_commit;
    public string $head_sha;
    public string $html_url;
    public int $id;
    public int $latest_check_runs_count;
    public string $name;
    public string $node_id;
    public array $output;
    public array $pull_requests;
    public array $repository;
    public ?bool $rerequestable = null;
    public ?bool $runs_rerequestable = null;
    public string $started_at;
    public string $status;
    public string $updated_at;
    public string $url;
}

/** Request payload for Check#list. */
class CheckListMatch
{
    public string $owner;
    public ?string $ref = null;
    public string $repo;
    public ?int $app_id = null;
    public ?string $check_name = null;
    public ?string $filter = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $status = null;
    public ?int $check_suite_id = null;
}

/** CheckAnnotation entity data model. */
class CheckAnnotation
{
    public string $annotation_level;
    public string $blob_href;
    public int $end_column;
    public int $end_line;
    public string $message;
    public string $path;
    public string $raw_details;
    public int $start_column;
    public int $start_line;
    public string $title;
}

/** Request payload for CheckAnnotation#list. */
class CheckAnnotationListMatch
{
    public int $check_run_id;
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** CheckAutomatedSecurityFix entity data model. */
class CheckAutomatedSecurityFix
{
    public bool $enabled;
    public bool $paused;
}

/** Request payload for CheckAutomatedSecurityFix#load. */
class CheckAutomatedSecurityFixLoadMatch
{
    public string $owner;
    public string $repo;
}

/** CheckRun entity data model. */
class CheckRun
{
    public ?array $actions = null;
    public array $app;
    public array $check_suite;
    public string $completed_at;
    public string $conclusion;
    public array $deployment;
    public string $details_url;
    public string $external_id;
    public string $head_sha;
    public string $html_url;
    public int $id;
    public string $name;
    public string $node_id;
    public array $output;
    public array $pull_requests;
    public string $started_at;
    public string $status;
    public string $url;
}

/** Request payload for CheckRun#load. */
class CheckRunLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for CheckRun#create. */
class CheckRunCreateData
{
    public string $owner;
    public string $repo;
    public ?array $actions = null;
    public array $app;
    public array $check_suite;
    public string $completed_at;
    public string $conclusion;
    public array $deployment;
    public string $details_url;
    public string $external_id;
    public string $head_sha;
    public string $html_url;
    public int $id;
    public string $name;
    public string $node_id;
    public array $output;
    public array $pull_requests;
    public string $started_at;
    public string $status;
    public string $url;
}

/** Request payload for CheckRun#update. */
class CheckRunUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?array $actions = null;
    public ?array $app = null;
    public ?array $check_suite = null;
    public ?string $completed_at = null;
    public ?string $conclusion = null;
    public ?array $deployment = null;
    public ?string $details_url = null;
    public ?string $external_id = null;
    public ?string $head_sha = null;
    public ?string $html_url = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?array $output = null;
    public ?array $pull_requests = null;
    public ?string $started_at = null;
    public ?string $status = null;
    public ?string $url = null;
}

/** CheckSuite entity data model. */
class CheckSuite
{
    public string $after;
    public array $app;
    public string $before;
    public string $check_runs_url;
    public string $conclusion;
    public string $created_at;
    public string $head_branch;
    public array $head_commit;
    public string $head_sha;
    public int $id;
    public int $latest_check_runs_count;
    public string $node_id;
    public array $pull_requests;
    public array $repository;
    public ?bool $rerequestable = null;
    public ?bool $runs_rerequestable = null;
    public string $status;
    public string $updated_at;
    public string $url;
}

/** Request payload for CheckSuite#load. */
class CheckSuiteLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for CheckSuite#create. */
class CheckSuiteCreateData
{
    public string $owner;
    public string $repo;
    public string $after;
    public array $app;
    public string $before;
    public string $check_runs_url;
    public string $conclusion;
    public string $created_at;
    public string $head_branch;
    public array $head_commit;
    public string $head_sha;
    public int $id;
    public int $latest_check_runs_count;
    public string $node_id;
    public array $pull_requests;
    public array $repository;
    public ?bool $rerequestable = null;
    public ?bool $runs_rerequestable = null;
    public string $status;
    public string $updated_at;
    public string $url;
}

/** CheckSuitePreference entity data model. */
class CheckSuitePreference
{
    public ?array $auto_trigger_checks = null;
    public array $preferences;
    public array $repository;
}

/** Request payload for CheckSuitePreference#update. */
class CheckSuitePreferenceUpdateData
{
    public string $owner;
    public string $repo;
    public ?array $auto_trigger_checks = null;
    public ?array $preferences = null;
    public ?array $repository = null;
}

/** Classroom entity data model. */
class Classroom
{
    public bool $archived;
    public string $avatar_url;
    public string $html_url;
    public int $id;
    public string $login;
    public string $name;
    public string $node_id;
    public string $url;
}

/** Request payload for Classroom#load. */
class ClassroomLoadMatch
{
    public int $id;
}

/** Request payload for Classroom#list. */
class ClassroomListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** ClassroomAcceptedAssignment entity data model. */
class ClassroomAcceptedAssignment
{
    public array $assignment;
    public int $commit_count;
    public string $grade;
    public int $id;
    public bool $passing;
    public array $repository;
    public array $students;
    public bool $submitted;
}

/** Request payload for ClassroomAcceptedAssignment#list. */
class ClassroomAcceptedAssignmentListMatch
{
    public int $assignment_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** ClassroomAssignment entity data model. */
class ClassroomAssignment
{
    public int $accepted;
    public array $classroom;
    public string $deadline;
    public string $editor;
    public bool $feedback_pull_requests_enabled;
    public int $id;
    public bool $invitations_enabled;
    public string $invite_link;
    public string $language;
    public int $max_members;
    public int $max_teams;
    public int $passing;
    public bool $public_repo;
    public string $slug;
    public array $starter_code_repository;
    public bool $students_are_repo_admins;
    public int $submitted;
    public string $title;
    public string $type;
}

/** Request payload for ClassroomAssignment#load. */
class ClassroomAssignmentLoadMatch
{
    public int $id;
}

/** ClassroomAssignmentGrade entity data model. */
class ClassroomAssignmentGrade
{
    public string $assignment_name;
    public string $assignment_url;
    public string $github_username;
    public ?string $group_name = null;
    public int $points_available;
    public int $points_awarded;
    public string $roster_identifier;
    public string $starter_code_url;
    public string $student_repository_name;
    public string $student_repository_url;
    public string $submission_timestamp;
}

/** Request payload for ClassroomAssignmentGrade#list. */
class ClassroomAssignmentGradeListMatch
{
    public int $assignment_id;
}

/** Clone entity data model. */
class CloneType
{
    public int $count;
    public string $timestamp;
    public int $uniques;
}

/** Request payload for Clone#list. */
class CloneListMatch
{
    public string $owner;
    public string $repo;
    public ?string $per = null;
}

/** CodeFrequency entity data model. */
class CodeFrequency
{
}

/** Request payload for CodeFrequency#list. */
class CodeFrequencyListMatch
{
    public string $owner;
    public string $repo;
}

/** CodeFrequencyStat entity data model. */
class CodeFrequencyStat
{
}

/** Request payload for CodeFrequencyStat#list. */
class CodeFrequencyStatListMatch
{
    public string $owner;
    public string $repo;
}

/** CodeOfConduct entity data model. */
class CodeOfConduct
{
    public ?string $body = null;
    public string $html_url;
    public string $key;
    public string $name;
    public string $url;
}

/** Request payload for CodeOfConduct#load. */
class CodeOfConductLoadMatch
{
    public string $key;
}

/** Request payload for CodeOfConduct#list. */
class CodeOfConductListMatch
{
    public ?string $body = null;
    public ?string $html_url = null;
    public ?string $key = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** CodeScanning entity data model. */
class CodeScanning
{
    public ?string $checkout_uri = null;
    public string $commit_sha;
    public string $ref;
    public string $sarif;
    public ?string $started_at = null;
    public ?string $tool_name = null;
    public ?bool $validate = null;
}

/** Request payload for CodeScanning#create. */
class CodeScanningCreateData
{
    public string $owner;
    public string $repo;
    public ?string $checkout_uri = null;
    public string $commit_sha;
    public string $ref;
    public string $sarif;
    public ?string $started_at = null;
    public ?string $tool_name = null;
    public ?bool $validate = null;
}

/** Request payload for CodeScanning#remove. */
class CodeScanningRemoveMatch
{
    public string $language;
    public string $owner;
    public string $repo;
}

/** CodeScanningAlert entity data model. */
class CodeScanningAlert
{
    public ?bool $create_request = null;
    public string $created_at;
    public array $dismissal_approved_by;
    public string $dismissed_at;
    public array $dismissed_by;
    public ?string $dismissed_comment = null;
    public string $dismissed_reason;
    public ?string $fixed_at = null;
    public string $html_url;
    public ?string $id = null;
    public string $instances_url;
    public array $most_recent_instance;
    public int $number;
    public array $rule;
    public string $state;
    public array $tool;
    public ?string $updated_at = null;
    public string $url;
}

/** Request payload for CodeScanningAlert#load. */
class CodeScanningAlertLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for CodeScanningAlert#update. */
class CodeScanningAlertUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?bool $create_request = null;
    public ?string $created_at = null;
    public ?array $dismissal_approved_by = null;
    public ?string $dismissed_at = null;
    public ?array $dismissed_by = null;
    public ?string $dismissed_comment = null;
    public ?string $dismissed_reason = null;
    public ?string $fixed_at = null;
    public ?string $html_url = null;
    public ?string $instances_url = null;
    public ?array $most_recent_instance = null;
    public ?int $number = null;
    public ?array $rule = null;
    public ?string $state = null;
    public ?array $tool = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** CodeScanningAlertInstance entity data model. */
class CodeScanningAlertInstance
{
    public ?string $analysis_key = null;
    public ?string $category = null;
    public ?array $classifications = null;
    public ?string $commit_sha = null;
    public ?string $environment = null;
    public ?string $html_url = null;
    public ?array $location = null;
    public ?array $message = null;
    public ?string $ref = null;
    public ?string $state = null;
}

/** Request payload for CodeScanningAlertInstance#list. */
class CodeScanningAlertInstanceListMatch
{
    public int $alert_number;
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?int $pr = null;
    public ?string $ref = null;
}

/** CodeScanningAlertItem entity data model. */
class CodeScanningAlertItem
{
    public string $created_at;
    public array $dismissal_approved_by;
    public string $dismissed_at;
    public array $dismissed_by;
    public ?string $dismissed_comment = null;
    public string $dismissed_reason;
    public ?string $fixed_at = null;
    public string $html_url;
    public string $instances_url;
    public array $most_recent_instance;
    public int $number;
    public array $rule;
    public string $state;
    public array $tool;
    public ?string $updated_at = null;
    public string $url;
}

/** Request payload for CodeScanningAlertItem#list. */
class CodeScanningAlertItemListMatch
{
    public string $owner;
    public string $repo;
    public ?string $after = null;
    public ?string $before = null;
    public ?string $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?int $pr = null;
    public ?string $ref = null;
    public ?string $severity = null;
    public ?string $sort = null;
    public ?string $state = null;
    public ?string $tool_guid = null;
    public ?string $tool_name = null;
}

/** CodeScanningAnalysi entity data model. */
class CodeScanningAnalysi
{
    public string $analysis_key;
    public ?string $category = null;
    public string $commit_sha;
    public string $created_at;
    public bool $deletable;
    public string $environment;
    public string $error;
    public ?string $guid = null;
    public int $id;
    public ?string $name = null;
    public string $ref;
    public int $results_count;
    public int $rules_count;
    public string $sarif_id;
    public array $tool;
    public string $url;
    public ?string $version = null;
    public string $warning;
}

/** Request payload for CodeScanningAnalysi#load. */
class CodeScanningAnalysiLoadMatch
{
    public int $analysis_id;
    public string $owner;
    public string $repo;
}

/** Request payload for CodeScanningAnalysi#list. */
class CodeScanningAnalysiListMatch
{
    public string $owner;
    public string $repo;
    public ?string $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?int $pr = null;
    public ?string $ref = null;
    public ?string $sarif_id = null;
    public ?string $sort = null;
    public ?string $tool_guid = null;
    public ?string $tool_name = null;
}

/** CodeScanningAnalysisDeletion entity data model. */
class CodeScanningAnalysisDeletion
{
}

/** Request payload for CodeScanningAnalysisDeletion#remove. */
class CodeScanningAnalysisDeletionRemoveMatch
{
    public int $analysis_id;
    public string $owner;
    public string $repo;
    public ?string $confirm_delete = null;
}

/** CodeScanningAutofix entity data model. */
class CodeScanningAutofix
{
    public string $description;
    public string $started_at;
    public string $status;
}

/** Request payload for CodeScanningAutofix#load. */
class CodeScanningAutofixLoadMatch
{
    public int $alert_number;
    public string $owner;
    public string $repo;
}

/** Request payload for CodeScanningAutofix#create. */
class CodeScanningAutofixCreateData
{
    public int $alert_number;
    public string $owner;
    public string $repo;
    public string $description;
    public string $started_at;
    public string $status;
}

/** CodeScanningAutofixCommit entity data model. */
class CodeScanningAutofixCommit
{
    public ?string $message = null;
    public ?string $target_ref = null;
}

/** Request payload for CodeScanningAutofixCommit#create. */
class CodeScanningAutofixCommitCreateData
{
    public int $alert_id;
    public string $owner;
    public string $repo;
    public ?string $message = null;
    public ?string $target_ref = null;
}

/** CodeScanningCodeqlDatabase entity data model. */
class CodeScanningCodeqlDatabase
{
    public string $avatar_url;
    public ?string $commit_oid = null;
    public string $content_type;
    public string $created_at;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $language;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public int $size;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $updated_at;
    public array $uploader;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for CodeScanningCodeqlDatabase#load. */
class CodeScanningCodeqlDatabaseLoadMatch
{
    public string $language;
    public string $owner;
    public string $repo;
}

/** Request payload for CodeScanningCodeqlDatabase#list. */
class CodeScanningCodeqlDatabaseListMatch
{
    public string $owner;
    public string $repo;
}

/** CodeScanningDefaultSetup entity data model. */
class CodeScanningDefaultSetup
{
    public ?array $languages = null;
    public ?string $query_suite = null;
    public ?string $runner_label = null;
    public ?string $runner_type = null;
    public ?string $schedule = null;
    public ?string $state = null;
    public ?string $threat_model = null;
    public ?string $updated_at = null;
}

/** Request payload for CodeScanningDefaultSetup#list. */
class CodeScanningDefaultSetupListMatch
{
    public string $owner;
    public string $repo;
}

/** CodeScanningOrganizationAlertItem entity data model. */
class CodeScanningOrganizationAlertItem
{
    public string $created_at;
    public array $dismissal_approved_by;
    public string $dismissed_at;
    public array $dismissed_by;
    public ?string $dismissed_comment = null;
    public string $dismissed_reason;
    public ?string $fixed_at = null;
    public string $html_url;
    public string $instances_url;
    public array $most_recent_instance;
    public int $number;
    public array $repository;
    public array $rule;
    public string $state;
    public array $tool;
    public ?string $updated_at = null;
    public string $url;
}

/** Request payload for CodeScanningOrganizationAlertItem#list. */
class CodeScanningOrganizationAlertItemListMatch
{
    public string $org_id;
    public ?string $after = null;
    public ?string $before = null;
    public ?string $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $severity = null;
    public ?string $sort = null;
    public ?string $state = null;
    public ?string $tool_guid = null;
    public ?string $tool_name = null;
}

/** CodeScanningSarifsStatus entity data model. */
class CodeScanningSarifsStatus
{
    public ?string $analyses_url = null;
    public ?array $errors = null;
    public ?string $processing_status = null;
}

/** Request payload for CodeScanningSarifsStatus#load. */
class CodeScanningSarifsStatusLoadMatch
{
    public string $owner;
    public string $repo;
    public string $sarif_id;
}

/** CodeScanningVariantAnalysi entity data model. */
class CodeScanningVariantAnalysi
{
    public ?int $actions_workflow_run_id = null;
    public array $actor;
    public ?string $completed_at = null;
    public array $controller_repo;
    public ?string $created_at = null;
    public ?string $failure_reason = null;
    public int $id;
    public string $language;
    public string $query_language;
    public string $query_pack;
    public string $query_pack_url;
    public ?array $repositories = null;
    public ?array $repository_lists = null;
    public ?array $repository_owners = null;
    public ?array $scanned_repositories = null;
    public array $skipped_repositories;
    public string $status;
    public ?string $updated_at = null;
}

/** Request payload for CodeScanningVariantAnalysi#load. */
class CodeScanningVariantAnalysiLoadMatch
{
    public int $codeql_variant_analysis_id;
    public string $owner;
    public string $repo;
}

/** Request payload for CodeScanningVariantAnalysi#create. */
class CodeScanningVariantAnalysiCreateData
{
    public string $owner;
    public string $repo;
    public ?int $actions_workflow_run_id = null;
    public array $actor;
    public ?string $completed_at = null;
    public array $controller_repo;
    public ?string $created_at = null;
    public ?string $failure_reason = null;
    public int $id;
    public string $language;
    public string $query_language;
    public string $query_pack;
    public string $query_pack_url;
    public ?array $repositories = null;
    public ?array $repository_lists = null;
    public ?array $repository_owners = null;
    public ?array $scanned_repositories = null;
    public array $skipped_repositories;
    public string $status;
    public ?string $updated_at = null;
}

/** CodeScanningVariantAnalysisRepoTask entity data model. */
class CodeScanningVariantAnalysisRepoTask
{
    public string $archive_url;
    public string $assignees_url;
    public string $blobs_url;
    public string $branches_url;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public string $deployments_url;
    public string $description;
    public string $downloads_url;
    public string $events_url;
    public bool $fork;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public int $github_id;
    public string $hooks_url;
    public string $html_url;
    public string $id;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $languages_url;
    public string $merges_url;
    public string $milestones_url;
    public string $name;
    public string $node_id;
    public string $notifications_url;
    public array $owner;
    public bool $private;
    public string $pulls_url;
    public string $releases_url;
    public string $stargazers_url;
    public string $statuses_url;
    public string $subscribers_url;
    public string $subscription_url;
    public string $tags_url;
    public string $teams_url;
    public string $trees_url;
    public string $url;
}

/** Request payload for CodeScanningVariantAnalysisRepoTask#load. */
class CodeScanningVariantAnalysisRepoTaskLoadMatch
{
    public int $codeql_variant_analysis_id;
    public string $owner;
    public string $repo;
    public string $repo_name;
    public string $repo_owner;
}

/** CodeSecurity entity data model. */
class CodeSecurity
{
    public ?string $advanced_security = null;
    public ?string $code_scanning_default_setup = null;
    public ?array $code_scanning_default_setup_options = null;
    public ?string $code_scanning_delegated_alert_dismissal = null;
    public ?array $code_scanning_options = null;
    public ?string $created_at = null;
    public ?string $default_for_new_repos = null;
    public ?string $dependabot_alerts = null;
    public ?string $dependabot_security_updates = null;
    public ?string $dependency_graph = null;
    public ?string $dependency_graph_autosubmit_action = null;
    public ?array $dependency_graph_autosubmit_action_options = null;
    public ?string $description = null;
    public ?string $enforcement = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $private_vulnerability_reporting = null;
    public ?string $secret_scanning = null;
    public ?string $secret_scanning_delegated_alert_dismissal = null;
    public ?string $secret_scanning_delegated_bypass = null;
    public ?array $secret_scanning_delegated_bypass_options = null;
    public ?string $secret_scanning_generic_secrets = null;
    public ?string $secret_scanning_non_provider_patterns = null;
    public ?string $secret_scanning_push_protection = null;
    public ?string $secret_scanning_validity_checks = null;
    public ?string $target_type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** Request payload for CodeSecurity#update. */
class CodeSecurityUpdateData
{
    public int $configuration_id;
    public ?string $enterprise = null;
    public ?string $org_id = null;
    public ?string $advanced_security = null;
    public ?string $code_scanning_default_setup = null;
    public ?array $code_scanning_default_setup_options = null;
    public ?string $code_scanning_delegated_alert_dismissal = null;
    public ?array $code_scanning_options = null;
    public ?string $created_at = null;
    public ?string $default_for_new_repos = null;
    public ?string $dependabot_alerts = null;
    public ?string $dependabot_security_updates = null;
    public ?string $dependency_graph = null;
    public ?string $dependency_graph_autosubmit_action = null;
    public ?array $dependency_graph_autosubmit_action_options = null;
    public ?string $description = null;
    public ?string $enforcement = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $private_vulnerability_reporting = null;
    public ?string $secret_scanning = null;
    public ?string $secret_scanning_delegated_alert_dismissal = null;
    public ?string $secret_scanning_delegated_bypass = null;
    public ?array $secret_scanning_delegated_bypass_options = null;
    public ?string $secret_scanning_generic_secrets = null;
    public ?string $secret_scanning_non_provider_patterns = null;
    public ?string $secret_scanning_push_protection = null;
    public ?string $secret_scanning_validity_checks = null;
    public ?string $target_type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** Request payload for CodeSecurity#remove. */
class CodeSecurityRemoveMatch
{
    public int $configuration_id;
    public string $enterprise;
}

/** CodeSecurityConfiguration entity data model. */
class CodeSecurityConfiguration
{
    public ?string $advanced_security = null;
    public ?string $code_scanning_default_setup = null;
    public ?array $code_scanning_default_setup_options = null;
    public ?string $code_scanning_delegated_alert_dismissal = null;
    public ?array $code_scanning_options = null;
    public ?string $code_security = null;
    public ?string $created_at = null;
    public ?string $dependabot_alerts = null;
    public ?string $dependabot_security_updates = null;
    public ?string $dependency_graph = null;
    public ?string $dependency_graph_autosubmit_action = null;
    public ?array $dependency_graph_autosubmit_action_options = null;
    public ?string $description = null;
    public ?string $enforcement = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $private_vulnerability_reporting = null;
    public string $scope;
    public ?string $secret_protection = null;
    public ?string $secret_scanning = null;
    public ?string $secret_scanning_delegated_alert_dismissal = null;
    public ?string $secret_scanning_delegated_bypass = null;
    public ?array $secret_scanning_delegated_bypass_options = null;
    public ?string $secret_scanning_generic_secrets = null;
    public ?string $secret_scanning_non_provider_patterns = null;
    public ?string $secret_scanning_push_protection = null;
    public ?string $secret_scanning_validity_checks = null;
    public ?array $selected_repository_ids = null;
    public ?string $target_type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** Request payload for CodeSecurityConfiguration#load. */
class CodeSecurityConfigurationLoadMatch
{
    public string $enterprise;
    public int $id;
}

/** Request payload for CodeSecurityConfiguration#list. */
class CodeSecurityConfigurationListMatch
{
    public string $org_id;
    public ?string $after = null;
    public ?string $before = null;
    public ?int $per_page = null;
    public ?string $target_type = null;
}

/** Request payload for CodeSecurityConfiguration#create. */
class CodeSecurityConfigurationCreateData
{
    public string $enterprise;
    public ?string $advanced_security = null;
    public ?string $code_scanning_default_setup = null;
    public ?array $code_scanning_default_setup_options = null;
    public ?string $code_scanning_delegated_alert_dismissal = null;
    public ?array $code_scanning_options = null;
    public ?string $code_security = null;
    public ?string $created_at = null;
    public ?string $dependabot_alerts = null;
    public ?string $dependabot_security_updates = null;
    public ?string $dependency_graph = null;
    public ?string $dependency_graph_autosubmit_action = null;
    public ?array $dependency_graph_autosubmit_action_options = null;
    public ?string $description = null;
    public ?string $enforcement = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $private_vulnerability_reporting = null;
    public string $scope;
    public ?string $secret_protection = null;
    public ?string $secret_scanning = null;
    public ?string $secret_scanning_delegated_alert_dismissal = null;
    public ?string $secret_scanning_delegated_bypass = null;
    public ?array $secret_scanning_delegated_bypass_options = null;
    public ?string $secret_scanning_generic_secrets = null;
    public ?string $secret_scanning_non_provider_patterns = null;
    public ?string $secret_scanning_push_protection = null;
    public ?string $secret_scanning_validity_checks = null;
    public ?array $selected_repository_ids = null;
    public ?string $target_type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** Request payload for CodeSecurityConfiguration#update. */
class CodeSecurityConfigurationUpdateData
{
    public ?string $enterprise = null;
    public int $id;
    public ?string $org_id = null;
    public ?string $advanced_security = null;
    public ?string $code_scanning_default_setup = null;
    public ?array $code_scanning_default_setup_options = null;
    public ?string $code_scanning_delegated_alert_dismissal = null;
    public ?array $code_scanning_options = null;
    public ?string $code_security = null;
    public ?string $created_at = null;
    public ?string $dependabot_alerts = null;
    public ?string $dependabot_security_updates = null;
    public ?string $dependency_graph = null;
    public ?string $dependency_graph_autosubmit_action = null;
    public ?array $dependency_graph_autosubmit_action_options = null;
    public ?string $description = null;
    public ?string $enforcement = null;
    public ?string $html_url = null;
    public ?string $name = null;
    public ?string $private_vulnerability_reporting = null;
    public ?string $scope = null;
    public ?string $secret_protection = null;
    public ?string $secret_scanning = null;
    public ?string $secret_scanning_delegated_alert_dismissal = null;
    public ?string $secret_scanning_delegated_bypass = null;
    public ?array $secret_scanning_delegated_bypass_options = null;
    public ?string $secret_scanning_generic_secrets = null;
    public ?string $secret_scanning_non_provider_patterns = null;
    public ?string $secret_scanning_push_protection = null;
    public ?string $secret_scanning_validity_checks = null;
    public ?array $selected_repository_ids = null;
    public ?string $target_type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** CodeSecurityConfigurationRepository entity data model. */
class CodeSecurityConfigurationRepository
{
    public array $repository;
    public ?string $status = null;
}

/** Request payload for CodeSecurityConfigurationRepository#list. */
class CodeSecurityConfigurationRepositoryListMatch
{
    public int $configuration_id;
    public ?string $enterprise = null;
    public ?string $after = null;
    public ?string $before = null;
    public ?int $per_page = null;
    public ?string $status = null;
    public ?string $org_id = null;
}

/** CodeSecurityDefaultConfiguration entity data model. */
class CodeSecurityDefaultConfiguration
{
    public ?array $configuration = null;
    public mixed $default_for_new_repos = null;
}

/** Request payload for CodeSecurityDefaultConfiguration#list. */
class CodeSecurityDefaultConfigurationListMatch
{
    public string $enterprise;
}

/** CodeownersError entity data model. */
class CodeownersError
{
    public int $column;
    public string $kind;
    public int $line;
    public string $message;
    public string $path;
    public ?string $source = null;
    public ?string $suggestion = null;
}

/** Request payload for CodeownersError#list. */
class CodeownersErrorListMatch
{
    public string $owner;
    public string $repo;
    public ?string $ref = null;
}

/** Codespace entity data model. */
class Codespace
{
    public bool $accepted;
    public ?bool $allow_forking = null;
    public string $archive_url;
    public ?bool $archived = null;
    public string $assignees_url;
    public array $billable_owner;
    public string $blobs_url;
    public ?string $branch = null;
    public string $branches_url;
    public ?string $client_ip = null;
    public ?string $clone_url = null;
    public array $code_of_conduct;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public ?string $completed_at = null;
    public string $contents_url;
    public string $contributors_url;
    public int $cpus;
    public string $created_at;
    public ?array $custom_properties = null;
    public ?string $default_branch = null;
    public array $defaults;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public ?string $devcontainer_path = null;
    public ?bool $disabled = null;
    public ?string $display_name = null;
    public string $downloads_url;
    public ?string $encrypted_value = null;
    public string $environment_id;
    public string $events_url;
    public ?string $export_url = null;
    public bool $fork;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public string $forks_url;
    public string $full_name;
    public ?string $geo = null;
    public string $git_commits_url;
    public string $git_refs_url;
    public array $git_status;
    public string $git_tags_url;
    public ?string $git_url = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public string $hooks_url;
    public ?string $html_url = null;
    public ?string $id = null;
    public int $idle_timeout_minutes;
    public ?string $idle_timeout_notice = null;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $key;
    public string $key_id;
    public string $keys_url;
    public string $labels_url;
    public ?string $language = null;
    public string $languages_url;
    public ?string $last_known_stop_notice = null;
    public string $last_used_at;
    public ?array $license = null;
    public string $location;
    public array $machine;
    public string $machines_url;
    public int $memory_in_bytes;
    public string $merges_url;
    public string $milestones_url;
    public ?string $mirror_url = null;
    public ?bool $multi_repo_permissions_opt_out = null;
    public string $name;
    public ?int $network_count = null;
    public string $node_id;
    public string $notifications_url;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public string $operating_system;
    public array $owner;
    public string $path;
    public ?bool $pending_operation = null;
    public ?string $pending_operation_disabled_reason = null;
    public ?array $permissions = null;
    public bool $prebuild;
    public string $prebuild_availability;
    public ?bool $private = null;
    public ?string $publish_url = null;
    public string $pulls_url;
    public ?string $pushed_at = null;
    public array $recent_folders;
    public ?string $ref = null;
    public string $releases_url;
    public array $repository;
    public ?string $retention_expires_at = null;
    public ?int $retention_period_minutes = null;
    public ?string $role_name = null;
    public ?array $runtime_constraints = null;
    public ?array $security_and_analysis = null;
    public ?string $selected_repositories_url = null;
    public ?array $selected_repository_ids = null;
    public array $selected_usernames;
    public ?string $sha = null;
    public ?int $size = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public string $stargazers_url;
    public string $start_url;
    public ?string $state = null;
    public string $statuses_url;
    public string $stop_url;
    public int $storage_in_bytes;
    public ?int $subscribers_count = null;
    public string $subscribers_url;
    public string $subscription_url;
    public ?string $svn_url = null;
    public string $tags_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?string $template = null;
    public ?string $title = null;
    public ?array $topics = null;
    public string $trees_url;
    public string $updated_at;
    public ?string $url = null;
    public string $visibility;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
    public string $web_url;
    public ?string $working_directory = null;
}

/** Request payload for Codespace#load. */
class CodespaceLoadMatch
{
    public string $id;
}

/** Request payload for Codespace#list. */
class CodespaceListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
    public ?int $repository_id = null;
}

/** Request payload for Codespace#create. */
class CodespaceCreateData
{
    public bool $accepted;
    public ?bool $allow_forking = null;
    public string $archive_url;
    public ?bool $archived = null;
    public string $assignees_url;
    public array $billable_owner;
    public string $blobs_url;
    public ?string $branch = null;
    public string $branches_url;
    public ?string $client_ip = null;
    public ?string $clone_url = null;
    public array $code_of_conduct;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public ?string $completed_at = null;
    public string $contents_url;
    public string $contributors_url;
    public int $cpus;
    public string $created_at;
    public ?array $custom_properties = null;
    public ?string $default_branch = null;
    public array $defaults;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public ?string $devcontainer_path = null;
    public ?bool $disabled = null;
    public ?string $display_name = null;
    public string $downloads_url;
    public ?string $encrypted_value = null;
    public string $environment_id;
    public string $events_url;
    public ?string $export_url = null;
    public bool $fork;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public string $forks_url;
    public string $full_name;
    public ?string $geo = null;
    public string $git_commits_url;
    public string $git_refs_url;
    public array $git_status;
    public string $git_tags_url;
    public ?string $git_url = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public string $hooks_url;
    public ?string $html_url = null;
    public ?string $id = null;
    public int $idle_timeout_minutes;
    public ?string $idle_timeout_notice = null;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $key;
    public string $key_id;
    public string $keys_url;
    public string $labels_url;
    public ?string $language = null;
    public string $languages_url;
    public ?string $last_known_stop_notice = null;
    public string $last_used_at;
    public ?array $license = null;
    public string $location;
    public array $machine;
    public string $machines_url;
    public int $memory_in_bytes;
    public string $merges_url;
    public string $milestones_url;
    public ?string $mirror_url = null;
    public ?bool $multi_repo_permissions_opt_out = null;
    public string $name;
    public ?int $network_count = null;
    public string $node_id;
    public string $notifications_url;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public string $operating_system;
    public array $owner;
    public string $path;
    public ?bool $pending_operation = null;
    public ?string $pending_operation_disabled_reason = null;
    public ?array $permissions = null;
    public bool $prebuild;
    public string $prebuild_availability;
    public ?bool $private = null;
    public ?string $publish_url = null;
    public string $pulls_url;
    public ?string $pushed_at = null;
    public array $recent_folders;
    public ?string $ref = null;
    public string $releases_url;
    public array $repository;
    public ?string $retention_expires_at = null;
    public ?int $retention_period_minutes = null;
    public ?string $role_name = null;
    public ?array $runtime_constraints = null;
    public ?array $security_and_analysis = null;
    public ?string $selected_repositories_url = null;
    public ?array $selected_repository_ids = null;
    public array $selected_usernames;
    public ?string $sha = null;
    public ?int $size = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public string $stargazers_url;
    public string $start_url;
    public ?string $state = null;
    public string $statuses_url;
    public string $stop_url;
    public int $storage_in_bytes;
    public ?int $subscribers_count = null;
    public string $subscribers_url;
    public string $subscription_url;
    public ?string $svn_url = null;
    public string $tags_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?string $template = null;
    public ?string $title = null;
    public ?array $topics = null;
    public string $trees_url;
    public string $updated_at;
    public ?string $url = null;
    public string $visibility;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
    public string $web_url;
    public ?string $working_directory = null;
}

/** Request payload for Codespace#update. */
class CodespaceUpdateData
{
    public string $secret_name;
    public ?bool $accepted = null;
    public ?bool $allow_forking = null;
    public ?string $archive_url = null;
    public ?bool $archived = null;
    public ?string $assignees_url = null;
    public ?array $billable_owner = null;
    public ?string $blobs_url = null;
    public ?string $branch = null;
    public ?string $branches_url = null;
    public ?string $client_ip = null;
    public ?string $clone_url = null;
    public ?array $code_of_conduct = null;
    public ?string $collaborators_url = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $compare_url = null;
    public ?string $completed_at = null;
    public ?string $contents_url = null;
    public ?string $contributors_url = null;
    public ?int $cpus = null;
    public ?string $created_at = null;
    public ?array $custom_properties = null;
    public ?string $default_branch = null;
    public ?array $defaults = null;
    public ?bool $delete_branch_on_merge = null;
    public ?string $deployments_url = null;
    public ?string $description = null;
    public ?string $devcontainer_path = null;
    public ?bool $disabled = null;
    public ?string $display_name = null;
    public ?string $downloads_url = null;
    public ?string $encrypted_value = null;
    public ?string $environment_id = null;
    public ?string $events_url = null;
    public ?string $export_url = null;
    public ?bool $fork = null;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public ?string $forks_url = null;
    public ?string $full_name = null;
    public ?string $geo = null;
    public ?string $git_commits_url = null;
    public ?string $git_refs_url = null;
    public ?array $git_status = null;
    public ?string $git_tags_url = null;
    public ?string $git_url = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public ?string $hooks_url = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?int $idle_timeout_minutes = null;
    public ?string $idle_timeout_notice = null;
    public ?bool $is_template = null;
    public ?string $issue_comment_url = null;
    public ?string $issue_events_url = null;
    public ?string $issues_url = null;
    public ?string $key = null;
    public ?string $key_id = null;
    public ?string $keys_url = null;
    public ?string $labels_url = null;
    public ?string $language = null;
    public ?string $languages_url = null;
    public ?string $last_known_stop_notice = null;
    public ?string $last_used_at = null;
    public ?array $license = null;
    public ?string $location = null;
    public ?array $machine = null;
    public ?string $machines_url = null;
    public ?int $memory_in_bytes = null;
    public ?string $merges_url = null;
    public ?string $milestones_url = null;
    public ?string $mirror_url = null;
    public ?bool $multi_repo_permissions_opt_out = null;
    public ?string $name = null;
    public ?int $network_count = null;
    public ?string $node_id = null;
    public ?string $notifications_url = null;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public ?string $operating_system = null;
    public ?array $owner = null;
    public ?string $path = null;
    public ?bool $pending_operation = null;
    public ?string $pending_operation_disabled_reason = null;
    public ?array $permissions = null;
    public ?bool $prebuild = null;
    public ?string $prebuild_availability = null;
    public ?bool $private = null;
    public ?string $publish_url = null;
    public ?string $pulls_url = null;
    public ?string $pushed_at = null;
    public ?array $recent_folders = null;
    public ?string $ref = null;
    public ?string $releases_url = null;
    public ?array $repository = null;
    public ?string $retention_expires_at = null;
    public ?int $retention_period_minutes = null;
    public ?string $role_name = null;
    public ?array $runtime_constraints = null;
    public ?array $security_and_analysis = null;
    public ?string $selected_repositories_url = null;
    public ?array $selected_repository_ids = null;
    public ?array $selected_usernames = null;
    public ?string $sha = null;
    public ?int $size = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public ?string $stargazers_url = null;
    public ?string $start_url = null;
    public ?string $state = null;
    public ?string $statuses_url = null;
    public ?string $stop_url = null;
    public ?int $storage_in_bytes = null;
    public ?int $subscribers_count = null;
    public ?string $subscribers_url = null;
    public ?string $subscription_url = null;
    public ?string $svn_url = null;
    public ?string $tags_url = null;
    public ?string $teams_url = null;
    public ?string $temp_clone_token = null;
    public ?string $template = null;
    public ?string $title = null;
    public ?array $topics = null;
    public ?string $trees_url = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
    public ?string $web_url = null;
    public ?string $working_directory = null;
}

/** Request payload for Codespace#remove. */
class CodespaceRemoveMatch
{
    public string $id;
}

/** Collaborator entity data model. */
class Collaborator
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public array $permissions;
    public string $received_events_url;
    public string $repos_url;
    public string $role_name;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Collaborator#list. */
class CollaboratorListMatch
{
    public int $project_id;
    public ?string $affiliation = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** CombinedBillingUsage entity data model. */
class CombinedBillingUsage
{
    public int $days_left_in_billing_cycle;
    public int $estimated_paid_storage_for_month;
    public int $estimated_storage_for_month;
}

/** Request payload for CombinedBillingUsage#load. */
class CombinedBillingUsageLoadMatch
{
    public string $org_id;
}

/** CombinedCommitStatus entity data model. */
class CombinedCommitStatus
{
    public string $avatar_url;
    public string $context;
    public string $created_at;
    public string $description;
    public int $id;
    public string $node_id;
    public ?bool $required = null;
    public string $state;
    public string $target_url;
    public string $updated_at;
    public string $url;
}

/** Request payload for CombinedCommitStatus#list. */
class CombinedCommitStatusListMatch
{
    public string $owner;
    public string $ref;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Commit entity data model. */
class Commit
{
    public mixed $author;
    public string $base;
    public string $comments_url;
    public array $commit;
    public ?string $commit_message = null;
    public mixed $committer;
    public ?array $files = null;
    public string $head;
    public string $html_url;
    public ?string $id = null;
    public string $node_id;
    public array $parents;
    public string $sha;
    public ?array $stats = null;
    public string $url;
}

/** Request payload for Commit#load. */
class CommitLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Commit#list. */
class CommitListMatch
{
    public string $owner;
    public string $repo;
    public ?string $author = null;
    public ?string $committer = null;
    public ?int $page = null;
    public ?string $path = null;
    public ?int $per_page = null;
    public ?string $sha = null;
    public ?string $since = null;
    public ?string $until = null;
    public ?int $pull_number = null;
}

/** Request payload for Commit#create. */
class CommitCreateData
{
    public string $owner;
    public string $repo;
    public mixed $author;
    public string $base;
    public string $comments_url;
    public array $commit;
    public ?string $commit_message = null;
    public mixed $committer;
    public ?array $files = null;
    public string $head;
    public string $html_url;
    public ?string $id = null;
    public string $node_id;
    public array $parents;
    public string $sha;
    public ?array $stats = null;
    public string $url;
}

/** CommitActivity entity data model. */
class CommitActivity
{
    public array $days;
    public int $total;
    public int $week;
}

/** Request payload for CommitActivity#list. */
class CommitActivityListMatch
{
    public string $owner;
    public string $repo;
}

/** CommitComment entity data model. */
class CommitComment
{
    public string $author_association;
    public string $body;
    public string $commit_id;
    public string $created_at;
    public string $html_url;
    public int $id;
    public int $line;
    public string $node_id;
    public string $path;
    public int $position;
    public array $reactions;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for CommitComment#load. */
class CommitCommentLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for CommitComment#list. */
class CommitCommentListMatch
{
    public ?string $commit_sha = null;
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for CommitComment#create. */
class CommitCommentCreateData
{
    public string $commit_sha;
    public string $owner;
    public string $repo;
    public string $author_association;
    public string $body;
    public string $commit_id;
    public string $created_at;
    public string $html_url;
    public int $id;
    public int $line;
    public string $node_id;
    public string $path;
    public int $position;
    public array $reactions;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for CommitComment#update. */
class CommitCommentUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?string $author_association = null;
    public ?string $body = null;
    public ?string $commit_id = null;
    public ?string $created_at = null;
    public ?string $html_url = null;
    public ?int $line = null;
    public ?string $node_id = null;
    public ?string $path = null;
    public ?int $position = null;
    public ?array $reactions = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?array $user = null;
}

/** CommitComparison entity data model. */
class CommitComparison
{
    public int $ahead_by;
    public array $base_commit;
    public int $behind_by;
    public array $commits;
    public string $diff_url;
    public ?array $files = null;
    public string $html_url;
    public array $merge_base_commit;
    public string $patch_url;
    public string $permalink_url;
    public string $status;
    public int $total_commits;
    public string $url;
}

/** Request payload for CommitComparison#load. */
class CommitComparisonLoadMatch
{
    public string $basehead;
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** CommunityProfile entity data model. */
class CommunityProfile
{
    public array $code_of_conduct;
    public array $code_of_conduct_file;
    public array $contributing;
    public array $issue_template;
    public array $license;
    public array $pull_request_template;
    public array $readme;
}

/** Request payload for CommunityProfile#load. */
class CommunityProfileLoadMatch
{
    public string $owner;
    public string $repo;
}

/** ContentFile entity data model. */
class ContentFile
{
    public string $git;
    public string $html;
    public string $self;
}

/** Request payload for ContentFile#load. */
class ContentFileLoadMatch
{
    public ?string $dir = null;
    public string $owner;
    public string $repo;
    public ?string $ref = null;
}

/** ContentTraffic entity data model. */
class ContentTraffic
{
    public int $count;
    public string $path;
    public string $title;
    public int $uniques;
}

/** Request payload for ContentTraffic#list. */
class ContentTrafficListMatch
{
    public string $owner;
    public string $repo;
}

/** Contributor entity data model. */
class Contributor
{
    public array $author;
    public ?string $avatar_url = null;
    public int $contributions;
    public ?string $email = null;
    public ?string $events_url = null;
    public ?string $followers_url = null;
    public ?string $following_url = null;
    public ?string $gists_url = null;
    public ?string $gravatar_id = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?string $login = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $organizations_url = null;
    public ?string $received_events_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public ?string $starred_url = null;
    public ?string $subscriptions_url = null;
    public int $total;
    public string $type;
    public ?string $url = null;
    public ?string $user_view_type = null;
    public array $weeks;
}

/** Request payload for Contributor#list. */
class ContributorListMatch
{
    public string $owner;
    public string $repo;
    public ?string $anon = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Copilot entity data model. */
class Copilot
{
    public array $assignee;
    public mixed $assigning_team = null;
    public string $created_at;
    public ?string $last_activity_at = null;
    public ?string $last_activity_editor = null;
    public ?string $last_authenticated_at = null;
    public array $organization;
    public ?string $pending_cancellation_date = null;
    public ?string $plan_type = null;
    public array $selected_teams;
    public array $selected_usernames;
    public ?string $updated_at = null;
}

/** Request payload for Copilot#load. */
class CopilotLoadMatch
{
    public string $org_id;
    public string $username;
}

/** Request payload for Copilot#list. */
class CopilotListMatch
{
    public string $org_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Copilot#create. */
class CopilotCreateData
{
    public string $org_id;
    public array $assignee;
    public mixed $assigning_team = null;
    public string $created_at;
    public ?string $last_activity_at = null;
    public ?string $last_activity_editor = null;
    public ?string $last_authenticated_at = null;
    public array $organization;
    public ?string $pending_cancellation_date = null;
    public ?string $plan_type = null;
    public array $selected_teams;
    public array $selected_usernames;
    public ?string $updated_at = null;
}

/** Request payload for Copilot#remove. */
class CopilotRemoveMatch
{
    public string $org_id;
}

/** CopilotOrganizationDetail entity data model. */
class CopilotOrganizationDetail
{
    public ?int $active_this_cycle = null;
    public ?int $added_this_cycle = null;
    public ?int $inactive_this_cycle = null;
    public ?int $pending_cancellation = null;
    public ?int $pending_invitation = null;
    public ?int $total = null;
}

/** Request payload for CopilotOrganizationDetail#load. */
class CopilotOrganizationDetailLoadMatch
{
    public string $org_id;
}

/** CopilotUsageMetricsDay entity data model. */
class CopilotUsageMetricsDay
{
    public ?array $copilot_dotcom_chat = null;
    public ?array $copilot_dotcom_pull_requests = null;
    public ?array $copilot_ide_chat = null;
    public ?array $copilot_ide_code_completions = null;
    public string $date;
    public ?int $total_active_users = null;
    public ?int $total_engaged_users = null;
}

/** Request payload for CopilotUsageMetricsDay#list. */
class CopilotUsageMetricsDayListMatch
{
    public string $org_id;
    public ?string $team_id = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $since = null;
    public ?string $until = null;
}

/** Credential entity data model. */
class Credential
{
    public array $credentials;
}

/** Request payload for Credential#create. */
class CredentialCreateData
{
    public array $credentials;
}

/** CustomProperty entity data model. */
class CustomProperty
{
    public ?array $allowed_values = null;
    public mixed $default_value = null;
    public ?string $description = null;
    public array $properties;
    public string $property_name;
    public ?bool $required = null;
    public ?string $source_type = null;
    public ?string $url = null;
    public string $value_type;
    public ?string $values_editable_by = null;
}

/** Request payload for CustomProperty#load. */
class CustomPropertyLoadMatch
{
    public string $custom_property_name;
    public string $org_id;
}

/** Request payload for CustomProperty#list. */
class CustomPropertyListMatch
{
    public string $org_id;
}

/** Request payload for CustomProperty#update. */
class CustomPropertyUpdateData
{
    public string $custom_property_name;
    public string $org_id;
    public ?array $allowed_values = null;
    public mixed $default_value = null;
    public ?string $description = null;
    public ?array $properties = null;
    public ?string $property_name = null;
    public ?bool $required = null;
    public ?string $source_type = null;
    public ?string $url = null;
    public ?string $value_type = null;
    public ?string $values_editable_by = null;
}

/** CustomPropertyValue entity data model. */
class CustomPropertyValue
{
    public string $property_name;
    public mixed $value;
}

/** Request payload for CustomPropertyValue#list. */
class CustomPropertyValueListMatch
{
    public string $owner;
    public string $repo;
}

/** Dependabot entity data model. */
class Dependabot
{
    public ?bool $allow_forking = null;
    public string $archive_url;
    public ?bool $archived = null;
    public string $assignees_url;
    public string $avatar_url;
    public string $blobs_url;
    public string $branches_url;
    public ?string $clone_url = null;
    public array $code_of_conduct;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public ?string $created_at = null;
    public ?array $custom_properties = null;
    public ?string $default_branch = null;
    public string $default_level;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public ?bool $disabled = null;
    public string $downloads_url;
    public string $events_url;
    public bool $fork;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public ?string $git_url = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public ?string $language = null;
    public string $languages_url;
    public ?array $license = null;
    public string $login;
    public string $members_url;
    public string $merges_url;
    public string $milestones_url;
    public ?string $mirror_url = null;
    public string $name;
    public ?int $network_count = null;
    public string $node_id;
    public string $notifications_url;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public array $owner;
    public ?array $permissions = null;
    public bool $private;
    public string $public_members_url;
    public string $pulls_url;
    public ?string $pushed_at = null;
    public string $releases_url;
    public string $repos_url;
    public ?array $repository_ids_to_add = null;
    public ?array $repository_ids_to_remove = null;
    public ?string $role_name = null;
    public ?array $security_and_analysis = null;
    public ?string $selected_repositories_url = null;
    public array $selected_repository_ids;
    public ?int $size = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public string $stargazers_url;
    public string $statuses_url;
    public ?int $subscribers_count = null;
    public string $subscribers_url;
    public string $subscription_url;
    public ?string $svn_url = null;
    public string $tags_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public string $trees_url;
    public ?string $updated_at = null;
    public string $url;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Dependabot#list. */
class DependabotListMatch
{
    public ?int $per_page = null;
    public ?int $since = null;
}

/** Request payload for Dependabot#update. */
class DependabotUpdateData
{
    public string $org_id;
    public int $repository_id;
    public string $secret_id;
    public ?bool $allow_forking = null;
    public ?string $archive_url = null;
    public ?bool $archived = null;
    public ?string $assignees_url = null;
    public ?string $avatar_url = null;
    public ?string $blobs_url = null;
    public ?string $branches_url = null;
    public ?string $clone_url = null;
    public ?array $code_of_conduct = null;
    public ?string $collaborators_url = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $compare_url = null;
    public ?string $contents_url = null;
    public ?string $contributors_url = null;
    public ?string $created_at = null;
    public ?array $custom_properties = null;
    public ?string $default_branch = null;
    public ?string $default_level = null;
    public ?bool $delete_branch_on_merge = null;
    public ?string $deployments_url = null;
    public ?string $description = null;
    public ?bool $disabled = null;
    public ?string $downloads_url = null;
    public ?string $events_url = null;
    public ?bool $fork = null;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public ?string $forks_url = null;
    public ?string $full_name = null;
    public ?string $git_commits_url = null;
    public ?string $git_refs_url = null;
    public ?string $git_tags_url = null;
    public ?string $git_url = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public ?string $hooks_url = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?bool $is_template = null;
    public ?string $issue_comment_url = null;
    public ?string $issue_events_url = null;
    public ?string $issues_url = null;
    public ?string $keys_url = null;
    public ?string $labels_url = null;
    public ?string $language = null;
    public ?string $languages_url = null;
    public ?array $license = null;
    public ?string $login = null;
    public ?string $members_url = null;
    public ?string $merges_url = null;
    public ?string $milestones_url = null;
    public ?string $mirror_url = null;
    public ?string $name = null;
    public ?int $network_count = null;
    public ?string $node_id = null;
    public ?string $notifications_url = null;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public ?array $owner = null;
    public ?array $permissions = null;
    public ?bool $private = null;
    public ?string $public_members_url = null;
    public ?string $pulls_url = null;
    public ?string $pushed_at = null;
    public ?string $releases_url = null;
    public ?string $repos_url = null;
    public ?array $repository_ids_to_add = null;
    public ?array $repository_ids_to_remove = null;
    public ?string $role_name = null;
    public ?array $security_and_analysis = null;
    public ?string $selected_repositories_url = null;
    public ?array $selected_repository_ids = null;
    public ?int $size = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public ?string $stargazers_url = null;
    public ?string $statuses_url = null;
    public ?int $subscribers_count = null;
    public ?string $subscribers_url = null;
    public ?string $subscription_url = null;
    public ?string $svn_url = null;
    public ?string $tags_url = null;
    public ?string $teams_url = null;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public ?string $trees_url = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Dependabot#remove. */
class DependabotRemoveMatch
{
    public string $org_id;
    public string $secret_name;
}

/** DependabotAlert entity data model. */
class DependabotAlert
{
    public ?string $auto_dismissed_at = null;
    public string $created_at;
    public array $dependency;
    public string $dismissed_at;
    public array $dismissed_by;
    public string $dismissed_comment;
    public string $dismissed_reason;
    public string $fixed_at;
    public string $html_url;
    public ?string $id = null;
    public int $number;
    public array $security_advisory;
    public array $security_vulnerability;
    public string $state;
    public string $updated_at;
    public string $url;
}

/** Request payload for DependabotAlert#load. */
class DependabotAlertLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for DependabotAlert#list. */
class DependabotAlertListMatch
{
    public string $owner;
    public string $repo;
    public ?string $after = null;
    public ?string $before = null;
    public ?string $direction = null;
    public ?string $ecosystem = null;
    public ?string $epss_percentage = null;
    public ?int $first = null;
    public mixed $has = null;
    public ?int $last = null;
    public ?string $manifest = null;
    public ?string $package = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $scope = null;
    public ?string $severity = null;
    public ?string $sort = null;
    public ?string $state = null;
}

/** Request payload for DependabotAlert#update. */
class DependabotAlertUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?string $auto_dismissed_at = null;
    public ?string $created_at = null;
    public ?array $dependency = null;
    public ?string $dismissed_at = null;
    public ?array $dismissed_by = null;
    public ?string $dismissed_comment = null;
    public ?string $dismissed_reason = null;
    public ?string $fixed_at = null;
    public ?string $html_url = null;
    public ?int $number = null;
    public ?array $security_advisory = null;
    public ?array $security_vulnerability = null;
    public ?string $state = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** DependabotAlertWithRepository entity data model. */
class DependabotAlertWithRepository
{
    public ?string $auto_dismissed_at = null;
    public string $created_at;
    public array $dependency;
    public string $dismissed_at;
    public array $dismissed_by;
    public string $dismissed_comment;
    public string $dismissed_reason;
    public string $fixed_at;
    public string $html_url;
    public int $number;
    public array $repository;
    public array $security_advisory;
    public array $security_vulnerability;
    public string $state;
    public string $updated_at;
    public string $url;
}

/** Request payload for DependabotAlertWithRepository#list. */
class DependabotAlertWithRepositoryListMatch
{
    public string $org_id;
    public ?string $after = null;
    public ?string $artifact_registry = null;
    public ?string $artifact_registry_url = null;
    public ?string $before = null;
    public ?string $direction = null;
    public ?string $ecosystem = null;
    public ?string $epss_percentage = null;
    public ?int $first = null;
    public mixed $has = null;
    public ?int $last = null;
    public ?string $package = null;
    public ?int $per_page = null;
    public ?string $scope = null;
    public ?string $severity = null;
    public ?string $sort = null;
    public ?string $state = null;
}

/** DependabotPublicKey entity data model. */
class DependabotPublicKey
{
    public string $key;
    public string $key_id;
}

/** Request payload for DependabotPublicKey#load. */
class DependabotPublicKeyLoadMatch
{
    public string $org_id;
}

/** DependabotRepositoryAccessDetail entity data model. */
class DependabotRepositoryAccessDetail
{
    public string $archive_url;
    public string $assignees_url;
    public string $blobs_url;
    public string $branches_url;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public string $deployments_url;
    public string $description;
    public string $downloads_url;
    public string $events_url;
    public bool $fork;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $languages_url;
    public string $merges_url;
    public string $milestones_url;
    public string $name;
    public string $node_id;
    public string $notifications_url;
    public array $owner;
    public bool $private;
    public string $pulls_url;
    public string $releases_url;
    public string $stargazers_url;
    public string $statuses_url;
    public string $subscribers_url;
    public string $subscription_url;
    public string $tags_url;
    public string $teams_url;
    public string $trees_url;
    public string $url;
}

/** Request payload for DependabotRepositoryAccessDetail#list. */
class DependabotRepositoryAccessDetailListMatch
{
    public string $org;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** DependabotSecret entity data model. */
class DependabotSecret
{
    public string $created_at;
    public ?string $id = null;
    public string $name;
    public string $updated_at;
}

/** Request payload for DependabotSecret#load. */
class DependabotSecretLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
}

/** DependencyGraph entity data model. */
class DependencyGraph
{
    public array $detector;
    public array $job;
    public ?array $manifests = null;
    public ?array $metadata = null;
    public string $ref;
    public string $scanned;
    public string $sha;
    public int $version;
}

/** Request payload for DependencyGraph#create. */
class DependencyGraphCreateData
{
    public string $owner;
    public string $repo;
    public array $detector;
    public array $job;
    public ?array $manifests = null;
    public ?array $metadata = null;
    public string $ref;
    public string $scanned;
    public string $sha;
    public int $version;
}

/** DependencyGraphDiff entity data model. */
class DependencyGraphDiff
{
    public string $change_type;
    public string $ecosystem;
    public string $license;
    public string $manifest;
    public string $name;
    public string $package_url;
    public string $scope;
    public string $source_repository_url;
    public string $version;
    public array $vulnerabilities;
}

/** Request payload for DependencyGraphDiff#load. */
class DependencyGraphDiffLoadMatch
{
    public string $basehead;
    public string $owner;
    public string $repo;
    public ?string $name = null;
}

/** DependencyGraphSpdxSbom entity data model. */
class DependencyGraphSpdxSbom
{
    public string $SPDXID;
    public ?string $comment = null;
    public array $creationInfo;
    public string $dataLicense;
    public string $documentNamespace;
    public string $name;
    public array $packages;
    public array $relationships;
    public string $spdxVersion;
}

/** Request payload for DependencyGraphSpdxSbom#load. */
class DependencyGraphSpdxSbomLoadMatch
{
    public string $owner;
    public string $repo;
}

/** DeployKey entity data model. */
class DeployKey
{
    public ?string $added_by = null;
    public string $created_at;
    public ?bool $enabled = null;
    public int $id;
    public string $key;
    public ?string $last_used = null;
    public bool $read_only;
    public string $title;
    public string $url;
    public bool $verified;
}

/** Request payload for DeployKey#load. */
class DeployKeyLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for DeployKey#list. */
class DeployKeyListMatch
{
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for DeployKey#create. */
class DeployKeyCreateData
{
    public string $owner;
    public string $repo;
    public ?string $added_by = null;
    public string $created_at;
    public ?bool $enabled = null;
    public int $id;
    public string $key;
    public ?string $last_used = null;
    public bool $read_only;
    public string $title;
    public string $url;
    public bool $verified;
}

/** Deployment entity data model. */
class Deployment
{
    public ?bool $auto_merge = null;
    public string $comment;
    public string $created_at;
    public array $creator;
    public string $description;
    public string $environment;
    public array $environment_ids;
    public int $id;
    public string $node_id;
    public ?string $original_environment = null;
    public mixed $payload;
    public array $performed_via_github_app;
    public ?bool $production_environment = null;
    public string $ref;
    public string $repository_url;
    public ?array $required_contexts = null;
    public string $sha;
    public string $state;
    public string $statuses_url;
    public string $task;
    public ?bool $transient_environment = null;
    public string $updated_at;
    public string $url;
}

/** Request payload for Deployment#load. */
class DeploymentLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for Deployment#list. */
class DeploymentListMatch
{
    public string $owner;
    public string $repo;
    public ?string $environment = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $ref = null;
    public ?string $sha = null;
    public ?string $task = null;
}

/** Request payload for Deployment#create. */
class DeploymentCreateData
{
    public string $owner;
    public string $repo;
    public ?int $run_id = null;
    public ?bool $auto_merge = null;
    public string $comment;
    public string $created_at;
    public array $creator;
    public string $description;
    public string $environment;
    public array $environment_ids;
    public int $id;
    public string $node_id;
    public ?string $original_environment = null;
    public mixed $payload;
    public array $performed_via_github_app;
    public ?bool $production_environment = null;
    public string $ref;
    public string $repository_url;
    public ?array $required_contexts = null;
    public string $sha;
    public string $state;
    public string $statuses_url;
    public string $task;
    public ?bool $transient_environment = null;
    public string $updated_at;
    public string $url;
}

/** DeploymentBranchPolicy entity data model. */
class DeploymentBranchPolicy
{
    public ?int $id = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $type = null;
}

/** Request payload for DeploymentBranchPolicy#load. */
class DeploymentBranchPolicyLoadMatch
{
    public string $environment_id;
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for DeploymentBranchPolicy#create. */
class DeploymentBranchPolicyCreateData
{
    public string $environment_name;
    public string $owner;
    public string $repo;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $type = null;
}

/** Request payload for DeploymentBranchPolicy#update. */
class DeploymentBranchPolicyUpdateData
{
    public string $environment_id;
    public int $id;
    public string $owner;
    public string $repo;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $type = null;
}

/** DeploymentProtectionRule entity data model. */
class DeploymentProtectionRule
{
    public int $id;
    public ?int $integration_id = null;
    public string $integration_url;
    public string $node_id;
    public string $slug;
}

/** Request payload for DeploymentProtectionRule#load. */
class DeploymentProtectionRuleLoadMatch
{
    public string $environment_id;
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for DeploymentProtectionRule#create. */
class DeploymentProtectionRuleCreateData
{
    public string $environment_name;
    public string $owner;
    public string $repo;
    public int $id;
    public ?int $integration_id = null;
    public string $integration_url;
    public string $node_id;
    public string $slug;
}

/** DeploymentStatus entity data model. */
class DeploymentStatus
{
    public ?bool $auto_inactive = null;
    public string $created_at;
    public array $creator;
    public string $deployment_url;
    public string $description;
    public ?string $environment = null;
    public ?string $environment_url = null;
    public int $id;
    public ?string $log_url = null;
    public string $node_id;
    public array $performed_via_github_app;
    public string $repository_url;
    public string $state;
    public string $target_url;
    public string $updated_at;
    public string $url;
}

/** Request payload for DeploymentStatus#load. */
class DeploymentStatusLoadMatch
{
    public int $deployment_id;
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for DeploymentStatus#list. */
class DeploymentStatusListMatch
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for DeploymentStatus#create. */
class DeploymentStatusCreateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?bool $auto_inactive = null;
    public string $created_at;
    public array $creator;
    public string $deployment_url;
    public string $description;
    public ?string $environment = null;
    public ?string $environment_url = null;
    public ?string $log_url = null;
    public string $node_id;
    public array $performed_via_github_app;
    public string $repository_url;
    public string $state;
    public string $target_url;
    public string $updated_at;
    public string $url;
}

/** DiffEntry entity data model. */
class DiffEntry
{
    public int $additions;
    public string $blob_url;
    public int $changes;
    public string $contents_url;
    public int $deletions;
    public string $filename;
    public ?string $patch = null;
    public ?string $previous_filename = null;
    public string $raw_url;
    public string $sha;
    public string $status;
}

/** Request payload for DiffEntry#list. */
class DiffEntryListMatch
{
    public string $owner;
    public int $pull_number;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Email entity data model. */
class Email
{
    public ?string $email = null;
    public ?bool $primary = null;
    public ?bool $verified = null;
    public ?string $visibility = null;
}

/** Request payload for Email#list. */
class EmailListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Email#create. */
class EmailCreateData
{
    public ?string $email = null;
    public ?bool $primary = null;
    public ?bool $verified = null;
    public ?string $visibility = null;
}

/** Request payload for Email#update. */
class EmailUpdateData
{
    public ?string $email = null;
    public ?bool $primary = null;
    public ?bool $verified = null;
    public ?string $visibility = null;
}

/** Emoji entity data model. */
class Emoji
{
    public ?string $a = null;
    public ?string $ab = null;
    public ?string $abacus = null;
    public ?string $abc = null;
    public ?string $abcd = null;
    public ?string $accept = null;
    public ?string $accessibility = null;
    public ?string $accordion = null;
    public ?string $adhesive_bandage = null;
    public ?string $adult = null;
    public ?string $aerial_tramway = null;
    public ?string $afghanistan = null;
    public ?string $airplane = null;
    public ?string $aland_islands = null;
    public ?string $alarm_clock = null;
    public ?string $albania = null;
    public ?string $alembic = null;
    public ?string $algeria = null;
    public ?string $alien = null;
    public ?string $ambulance = null;
    public ?string $american_samoa = null;
    public ?string $amphora = null;
    public ?string $anatomical_heart = null;
    public ?string $anchor = null;
    public ?string $andorra = null;
    public ?string $angel = null;
    public ?string $anger = null;
    public ?string $angola = null;
    public ?string $angry = null;
    public ?string $anguilla = null;
    public ?string $anguished = null;
    public ?string $ant = null;
    public ?string $antarctica = null;
    public ?string $antigua_barbuda = null;
    public ?string $apple = null;
    public ?string $aquarius = null;
    public ?string $argentina = null;
    public ?string $aries = null;
    public ?string $armenia = null;
    public ?string $arrow_backward = null;
    public ?string $arrow_double_down = null;
    public ?string $arrow_double_up = null;
    public ?string $arrow_down = null;
    public ?string $arrow_down_small = null;
    public ?string $arrow_forward = null;
    public ?string $arrow_heading_down = null;
    public ?string $arrow_heading_up = null;
    public ?string $arrow_left = null;
    public ?string $arrow_lower_left = null;
    public ?string $arrow_lower_right = null;
    public ?string $arrow_right = null;
    public ?string $arrow_right_hook = null;
    public ?string $arrow_up = null;
    public ?string $arrow_up_down = null;
    public ?string $arrow_up_small = null;
    public ?string $arrow_upper_left = null;
    public ?string $arrow_upper_right = null;
    public ?string $arrows_clockwise = null;
    public ?string $arrows_counterclockwise = null;
    public ?string $art = null;
    public ?string $articulated_lorry = null;
    public ?string $artificial_satellite = null;
    public ?string $artist = null;
    public ?string $aruba = null;
    public ?string $ascension_island = null;
    public ?string $asterisk = null;
    public ?string $astonished = null;
    public ?string $astronaut = null;
    public ?string $athletic_shoe = null;
    public ?string $atm = null;
    public ?string $atom = null;
    public ?string $atom_symbol = null;
    public ?string $australia = null;
    public ?string $austria = null;
    public ?string $auto_rickshaw = null;
    public ?string $avocado = null;
    public ?string $axe = null;
    public ?string $azerbaijan = null;
    public ?string $b = null;
    public ?string $baby = null;
    public ?string $baby_bottle = null;
    public ?string $baby_chick = null;
    public ?string $baby_symbol = null;
    public ?string $back = null;
    public ?string $bacon = null;
    public ?string $badger = null;
    public ?string $badminton = null;
    public ?string $bagel = null;
    public ?string $baggage_claim = null;
    public ?string $baguette_bread = null;
    public ?string $bahamas = null;
    public ?string $bahrain = null;
    public ?string $balance_scale = null;
    public ?string $bald_man = null;
    public ?string $bald_woman = null;
    public ?string $ballet_shoes = null;
    public ?string $balloon = null;
    public ?string $ballot_box = null;
    public ?string $ballot_box_with_check = null;
    public ?string $bamboo = null;
    public ?string $banana = null;
    public ?string $bangbang = null;
    public ?string $bangladesh = null;
    public ?string $banjo = null;
    public ?string $bank = null;
    public ?string $bar_chart = null;
    public ?string $barbados = null;
    public ?string $barber = null;
    public ?string $baseball = null;
    public ?string $basecamp = null;
    public ?string $basecampy = null;
    public ?string $basket = null;
    public ?string $basketball = null;
    public ?string $basketball_man = null;
    public ?string $basketball_woman = null;
    public ?string $bat = null;
    public ?string $bath = null;
    public ?string $bathtub = null;
    public ?string $battery = null;
    public ?string $beach_umbrella = null;
    public ?string $bear = null;
    public ?string $bearded_person = null;
    public ?string $beaver = null;
    public ?string $bed = null;
    public ?string $bee = null;
    public ?string $beer = null;
    public ?string $beers = null;
    public ?string $beetle = null;
    public ?string $beginner = null;
    public ?string $belarus = null;
    public ?string $belgium = null;
    public ?string $belize = null;
    public ?string $bell = null;
    public ?string $bell_pepper = null;
    public ?string $bellhop_bell = null;
    public ?string $benin = null;
    public ?string $bento = null;
    public ?string $bermuda = null;
    public ?string $beverage_box = null;
    public ?string $bhutan = null;
    public ?string $bicyclist = null;
    public ?string $bike = null;
    public ?string $biking_man = null;
    public ?string $biking_woman = null;
    public ?string $bikini = null;
    public ?string $billed_cap = null;
    public ?string $biohazard = null;
    public ?string $bird = null;
    public ?string $birthday = null;
    public ?string $bison = null;
    public ?string $black_cat = null;
    public ?string $black_circle = null;
    public ?string $black_flag = null;
    public ?string $black_heart = null;
    public ?string $black_joker = null;
    public ?string $black_large_square = null;
    public ?string $black_medium_small_square = null;
    public ?string $black_medium_square = null;
    public ?string $black_nib = null;
    public ?string $black_small_square = null;
    public ?string $black_square_button = null;
    public ?string $blond_haired_man = null;
    public ?string $blond_haired_person = null;
    public ?string $blond_haired_woman = null;
    public ?string $blonde_woman = null;
    public ?string $blossom = null;
    public ?string $blowfish = null;
    public ?string $blue_book = null;
    public ?string $blue_car = null;
    public ?string $blue_heart = null;
    public ?string $blue_square = null;
    public ?string $blueberries = null;
    public ?string $blush = null;
    public ?string $boar = null;
    public ?string $boat = null;
    public ?string $bolivia = null;
    public ?string $bomb = null;
    public ?string $bone = null;
    public ?string $book = null;
    public ?string $bookmark = null;
    public ?string $bookmark_tabs = null;
    public ?string $books = null;
    public ?string $boom = null;
    public ?string $boomerang = null;
    public ?string $boot = null;
    public ?string $bosnia_herzegovina = null;
    public ?string $botswana = null;
    public ?string $bouncing_ball_man = null;
    public ?string $bouncing_ball_person = null;
    public ?string $bouncing_ball_woman = null;
    public ?string $bouquet = null;
    public ?string $bouvet_island = null;
    public ?string $bow = null;
    public ?string $bow_and_arrow = null;
    public ?string $bowing_man = null;
    public ?string $bowing_woman = null;
    public ?string $bowl_with_spoon = null;
    public ?string $bowling = null;
    public ?string $bowtie = null;
    public ?string $boxing_glove = null;
    public ?string $boy = null;
    public ?string $brain = null;
    public ?string $brazil = null;
    public ?string $bread = null;
    public ?string $breast_feeding = null;
    public ?string $bricks = null;
    public ?string $bride_with_veil = null;
    public ?string $bridge_at_night = null;
    public ?string $briefcase = null;
    public ?string $british_indian_ocean_territory = null;
    public ?string $british_virgin_islands = null;
    public ?string $broccoli = null;
    public ?string $broken_heart = null;
    public ?string $broom = null;
    public ?string $brown_circle = null;
    public ?string $brown_heart = null;
    public ?string $brown_square = null;
    public ?string $brunei = null;
    public ?string $bubble_tea = null;
    public ?string $bucket = null;
    public ?string $bug = null;
    public ?string $building_construction = null;
    public ?string $bulb = null;
    public ?string $bulgaria = null;
    public ?string $bullettrain_front = null;
    public ?string $bullettrain_side = null;
    public ?string $burkina_faso = null;
    public ?string $burrito = null;
    public ?string $burundi = null;
    public ?string $bus = null;
    public ?string $business_suit_levitating = null;
    public ?string $busstop = null;
    public ?string $bust_in_silhouette = null;
    public ?string $busts_in_silhouette = null;
    public ?string $butter = null;
    public ?string $butterfly = null;
    public ?string $cactus = null;
    public ?string $cake = null;
    public ?string $calendar = null;
    public ?string $call_me_hand = null;
    public ?string $calling = null;
    public ?string $cambodia = null;
    public ?string $camel = null;
    public ?string $camera = null;
    public ?string $camera_flash = null;
    public ?string $cameroon = null;
    public ?string $camping = null;
    public ?string $canada = null;
    public ?string $canary_islands = null;
    public ?string $cancer = null;
    public ?string $candle = null;
    public ?string $candy = null;
    public ?string $canned_food = null;
    public ?string $canoe = null;
    public ?string $cape_verde = null;
    public ?string $capital_abcd = null;
    public ?string $capricorn = null;
    public ?string $car = null;
    public ?string $card_file_box = null;
    public ?string $card_index = null;
    public ?string $card_index_dividers = null;
    public ?string $caribbean_netherlands = null;
    public ?string $carousel_horse = null;
    public ?string $carpentry_saw = null;
    public ?string $carrot = null;
    public ?string $cartwheeling = null;
    public ?string $cat = null;
    public ?string $cat2 = null;
    public ?string $cayman_islands = null;
    public ?string $cd = null;
    public ?string $central_african_republic = null;
    public ?string $ceuta_melilla = null;
    public ?string $chad = null;
    public ?string $chains = null;
    public ?string $chair = null;
    public ?string $champagne = null;
    public ?string $chart = null;
    public ?string $chart_with_downwards_trend = null;
    public ?string $chart_with_upwards_trend = null;
    public ?string $checkered_flag = null;
    public ?string $cheese = null;
    public ?string $cherries = null;
    public ?string $cherry_blossom = null;
    public ?string $chess_pawn = null;
    public ?string $chestnut = null;
    public ?string $chicken = null;
    public ?string $child = null;
    public ?string $children_crossing = null;
    public ?string $chile = null;
    public ?string $chipmunk = null;
    public ?string $chocolate_bar = null;
    public ?string $chopsticks = null;
    public ?string $christmas_island = null;
    public ?string $christmas_tree = null;
    public ?string $church = null;
    public ?string $cinema = null;
    public ?string $circus_tent = null;
    public ?string $city_sunrise = null;
    public ?string $city_sunset = null;
    public ?string $cityscape = null;
    public ?string $cl = null;
    public ?string $clamp = null;
    public ?string $clap = null;
    public ?string $clapper = null;
    public ?string $classical_building = null;
    public ?string $climbing = null;
    public ?string $climbing_man = null;
    public ?string $climbing_woman = null;
    public ?string $clinking_glasses = null;
    public ?string $clipboard = null;
    public ?string $clipperton_island = null;
    public ?string $clock1 = null;
    public ?string $clock10 = null;
    public ?string $clock1030 = null;
    public ?string $clock11 = null;
    public ?string $clock1130 = null;
    public ?string $clock12 = null;
    public ?string $clock1230 = null;
    public ?string $clock130 = null;
    public ?string $clock2 = null;
    public ?string $clock230 = null;
    public ?string $clock3 = null;
    public ?string $clock330 = null;
    public ?string $clock4 = null;
    public ?string $clock430 = null;
    public ?string $clock5 = null;
    public ?string $clock530 = null;
    public ?string $clock6 = null;
    public ?string $clock630 = null;
    public ?string $clock7 = null;
    public ?string $clock730 = null;
    public ?string $clock8 = null;
    public ?string $clock830 = null;
    public ?string $clock9 = null;
    public ?string $clock930 = null;
    public ?string $closed_book = null;
    public ?string $closed_lock_with_key = null;
    public ?string $closed_umbrella = null;
    public ?string $cloud = null;
    public ?string $cloud_with_lightning = null;
    public ?string $cloud_with_lightning_and_rain = null;
    public ?string $cloud_with_rain = null;
    public ?string $cloud_with_snow = null;
    public ?string $clown_face = null;
    public ?string $clubs = null;
    public ?string $cn = null;
    public ?string $coat = null;
    public ?string $cockroach = null;
    public ?string $cocktail = null;
    public ?string $coconut = null;
    public ?string $cocos_islands = null;
    public ?string $coffee = null;
    public ?string $coffin = null;
    public ?string $coin = null;
    public ?string $cold_face = null;
    public ?string $cold_sweat = null;
    public ?string $collision = null;
    public ?string $colombia = null;
    public ?string $comet = null;
    public ?string $comoros = null;
    public ?string $compass = null;
    public ?string $computer = null;
    public ?string $computer_mouse = null;
    public ?string $confetti_ball = null;
    public ?string $confounded = null;
    public ?string $confused = null;
    public ?string $congo_brazzaville = null;
    public ?string $congo_kinshasa = null;
    public ?string $congratulations = null;
    public ?string $construction = null;
    public ?string $construction_worker = null;
    public ?string $construction_worker_man = null;
    public ?string $construction_worker_woman = null;
    public ?string $control_knobs = null;
    public ?string $convenience_store = null;
    public ?string $cook = null;
    public ?string $cook_islands = null;
    public ?string $cookie = null;
    public ?string $cool = null;
    public ?string $cop = null;
    public ?string $copilot = null;
    public ?string $copyright = null;
    public ?string $corn = null;
    public ?string $costa_rica = null;
    public ?string $cote_divoire = null;
    public ?string $couch_and_lamp = null;
    public ?string $couple = null;
    public ?string $couple_with_heart = null;
    public ?string $couple_with_heart_man_man = null;
    public ?string $couple_with_heart_woman_man = null;
    public ?string $couple_with_heart_woman_woman = null;
    public ?string $couplekiss = null;
    public ?string $couplekiss_man_man = null;
    public ?string $couplekiss_man_woman = null;
    public ?string $couplekiss_woman_woman = null;
    public ?string $cow = null;
    public ?string $cow2 = null;
    public ?string $cowboy_hat_face = null;
    public ?string $crab = null;
    public ?string $crayon = null;
    public ?string $credit_card = null;
    public ?string $crescent_moon = null;
    public ?string $cricket = null;
    public ?string $cricket_game = null;
    public ?string $croatia = null;
    public ?string $crocodile = null;
    public ?string $croissant = null;
    public ?string $crossed_fingers = null;
    public ?string $crossed_flags = null;
    public ?string $crossed_swords = null;
    public ?string $crown = null;
    public ?string $cry = null;
    public ?string $crying_cat_face = null;
    public ?string $crystal_ball = null;
    public ?string $cuba = null;
    public ?string $cucumber = null;
    public ?string $cup_with_straw = null;
    public ?string $cupcake = null;
    public ?string $cupid = null;
    public ?string $curacao = null;
    public ?string $curling_stone = null;
    public ?string $curly_haired_man = null;
    public ?string $curly_haired_woman = null;
    public ?string $curly_loop = null;
    public ?string $currency_exchange = null;
    public ?string $curry = null;
    public ?string $cursing_face = null;
    public ?string $custard = null;
    public ?string $customs = null;
    public ?string $cut_of_meat = null;
    public ?string $cyclone = null;
    public ?string $cyprus = null;
    public ?string $czech_republic = null;
    public ?string $dagger = null;
    public ?string $dancer = null;
    public ?string $dancers = null;
    public ?string $dancing_men = null;
    public ?string $dancing_women = null;
    public ?string $dango = null;
    public ?string $dark_sunglasses = null;
    public ?string $dart = null;
    public ?string $dash = null;
    public ?string $date = null;
    public ?string $de = null;
    public ?string $deaf_man = null;
    public ?string $deaf_person = null;
    public ?string $deaf_woman = null;
    public ?string $deciduous_tree = null;
    public ?string $deer = null;
    public ?string $denmark = null;
    public ?string $department_store = null;
    public ?string $dependabot = null;
    public ?string $derelict_house = null;
    public ?string $desert = null;
    public ?string $desert_island = null;
    public ?string $desktop_computer = null;
    public ?string $detective = null;
    public ?string $diamond_shape_with_a_dot_inside = null;
    public ?string $diamonds = null;
    public ?string $diego_garcia = null;
    public ?string $disappointed = null;
    public ?string $disappointed_relieved = null;
    public ?string $disguised_face = null;
    public ?string $diving_mask = null;
    public ?string $diya_lamp = null;
    public ?string $dizzy = null;
    public ?string $dizzy_face = null;
    public ?string $djibouti = null;
    public ?string $dna = null;
    public ?string $do_not_litter = null;
    public ?string $dodo = null;
    public ?string $dog = null;
    public ?string $dog2 = null;
    public ?string $dollar = null;
    public ?string $dolls = null;
    public ?string $dolphin = null;
    public ?string $dominica = null;
    public ?string $dominican_republic = null;
    public ?string $door = null;
    public ?string $doughnut = null;
    public ?string $dove = null;
    public ?string $dragon = null;
    public ?string $dragon_face = null;
    public ?string $dress = null;
    public ?string $dromedary_camel = null;
    public ?string $drooling_face = null;
    public ?string $drop_of_blood = null;
    public ?string $droplet = null;
    public ?string $drum = null;
    public ?string $duck = null;
    public ?string $dumpling = null;
    public ?string $dvd = null;
    public ?string $eagle = null;
    public ?string $ear = null;
    public ?string $ear_of_rice = null;
    public ?string $ear_with_hearing_aid = null;
    public ?string $earth_africa = null;
    public ?string $earth_americas = null;
    public ?string $earth_asia = null;
    public ?string $ecuador = null;
    public ?string $egg = null;
    public ?string $eggplant = null;
    public ?string $egypt = null;
    public ?string $eight = null;
    public ?string $eight_pointed_black_star = null;
    public ?string $eight_spoked_asterisk = null;
    public ?string $eject_button = null;
    public ?string $el_salvador = null;
    public ?string $electric_plug = null;
    public ?string $electron = null;
    public ?string $elephant = null;
    public ?string $elevator = null;
    public ?string $elf = null;
    public ?string $elf_man = null;
    public ?string $elf_woman = null;
    public ?string $email = null;
    public ?string $end = null;
    public ?string $england = null;
    public ?string $envelope = null;
    public ?string $envelope_with_arrow = null;
    public ?string $equatorial_guinea = null;
    public ?string $eritrea = null;
    public ?string $es = null;
    public ?string $estonia = null;
    public ?string $ethiopia = null;
    public ?string $eu = null;
    public ?string $euro = null;
    public ?string $european_castle = null;
    public ?string $european_post_office = null;
    public ?string $european_union = null;
    public ?string $evergreen_tree = null;
    public ?string $exclamation = null;
    public ?string $exploding_head = null;
    public ?string $expressionless = null;
    public ?string $eye = null;
    public ?string $eye_speech_bubble = null;
    public ?string $eyeglasses = null;
    public ?string $eyes = null;
    public ?string $face_exhaling = null;
    public ?string $face_in_clouds = null;
    public ?string $face_with_head_bandage = null;
    public ?string $face_with_spiral_eyes = null;
    public ?string $face_with_thermometer = null;
    public ?string $facepalm = null;
    public ?string $facepunch = null;
    public ?string $factory = null;
    public ?string $factory_worker = null;
    public ?string $fairy = null;
    public ?string $fairy_man = null;
    public ?string $fairy_woman = null;
    public ?string $falafel = null;
    public ?string $falkland_islands = null;
    public ?string $fallen_leaf = null;
    public ?string $family = null;
    public ?string $family_man_boy = null;
    public ?string $family_man_boy_boy = null;
    public ?string $family_man_girl = null;
    public ?string $family_man_girl_boy = null;
    public ?string $family_man_girl_girl = null;
    public ?string $family_man_man_boy = null;
    public ?string $family_man_man_boy_boy = null;
    public ?string $family_man_man_girl = null;
    public ?string $family_man_man_girl_boy = null;
    public ?string $family_man_man_girl_girl = null;
    public ?string $family_man_woman_boy = null;
    public ?string $family_man_woman_boy_boy = null;
    public ?string $family_man_woman_girl = null;
    public ?string $family_man_woman_girl_boy = null;
    public ?string $family_man_woman_girl_girl = null;
    public ?string $family_woman_boy = null;
    public ?string $family_woman_boy_boy = null;
    public ?string $family_woman_girl = null;
    public ?string $family_woman_girl_boy = null;
    public ?string $family_woman_girl_girl = null;
    public ?string $family_woman_woman_boy = null;
    public ?string $family_woman_woman_boy_boy = null;
    public ?string $family_woman_woman_girl = null;
    public ?string $family_woman_woman_girl_boy = null;
    public ?string $family_woman_woman_girl_girl = null;
    public ?string $farmer = null;
    public ?string $faroe_islands = null;
    public ?string $fast_forward = null;
    public ?string $fax = null;
    public ?string $fearful = null;
    public ?string $feather = null;
    public ?string $feelsgood = null;
    public ?string $feet = null;
    public ?string $female_detective = null;
    public ?string $female_sign = null;
    public ?string $ferris_wheel = null;
    public ?string $ferry = null;
    public ?string $field_hockey = null;
    public ?string $fiji = null;
    public ?string $file_cabinet = null;
    public ?string $file_folder = null;
    public ?string $film_projector = null;
    public ?string $film_strip = null;
    public ?string $finland = null;
    public ?string $finnadie = null;
    public ?string $fire = null;
    public ?string $fire_engine = null;
    public ?string $fire_extinguisher = null;
    public ?string $firecracker = null;
    public ?string $firefighter = null;
    public ?string $fireworks = null;
    public ?string $first_quarter_moon = null;
    public ?string $first_quarter_moon_with_face = null;
    public ?string $fish = null;
    public ?string $fish_cake = null;
    public ?string $fishing_pole_and_fish = null;
    public ?string $fishsticks = null;
    public ?string $fist = null;
    public ?string $fist_left = null;
    public ?string $fist_oncoming = null;
    public ?string $fist_raised = null;
    public ?string $fist_right = null;
    public ?string $five = null;
    public ?string $flags = null;
    public ?string $flamingo = null;
    public ?string $flashlight = null;
    public ?string $flat_shoe = null;
    public ?string $flatbread = null;
    public ?string $fleur_de_lis = null;
    public ?string $flight_arrival = null;
    public ?string $flight_departure = null;
    public ?string $flipper = null;
    public ?string $floppy_disk = null;
    public ?string $flower_playing_cards = null;
    public ?string $flushed = null;
    public ?string $fly = null;
    public ?string $flying_disc = null;
    public ?string $flying_saucer = null;
    public ?string $fog = null;
    public ?string $foggy = null;
    public ?string $fondue = null;
    public ?string $foot = null;
    public ?string $football = null;
    public ?string $footprints = null;
    public ?string $fork_and_knife = null;
    public ?string $fortune_cookie = null;
    public ?string $fountain = null;
    public ?string $fountain_pen = null;
    public ?string $four = null;
    public ?string $four_leaf_clover = null;
    public ?string $fox_face = null;
    public ?string $fr = null;
    public ?string $framed_picture = null;
    public ?string $free = null;
    public ?string $french_guiana = null;
    public ?string $french_polynesia = null;
    public ?string $french_southern_territories = null;
    public ?string $fried_egg = null;
    public ?string $fried_shrimp = null;
    public ?string $fries = null;
    public ?string $frog = null;
    public ?string $frowning = null;
    public ?string $frowning_face = null;
    public ?string $frowning_man = null;
    public ?string $frowning_person = null;
    public ?string $frowning_woman = null;
    public ?string $fu = null;
    public ?string $fuelpump = null;
    public ?string $full_moon = null;
    public ?string $full_moon_with_face = null;
    public ?string $funeral_urn = null;
    public ?string $gabon = null;
    public ?string $gambia = null;
    public ?string $game_die = null;
    public ?string $garlic = null;
    public ?string $gb = null;
    public ?string $gear = null;
    public ?string $gem = null;
    public ?string $gemini = null;
    public ?string $genie = null;
    public ?string $genie_man = null;
    public ?string $genie_woman = null;
    public ?string $georgia = null;
    public ?string $ghana = null;
    public ?string $ghost = null;
    public ?string $gibraltar = null;
    public ?string $gift = null;
    public ?string $gift_heart = null;
    public ?string $giraffe = null;
    public ?string $girl = null;
    public ?string $globe_with_meridians = null;
    public ?string $gloves = null;
    public ?string $goal_net = null;
    public ?string $goat = null;
    public ?string $goberserk = null;
    public ?string $godmode = null;
    public ?string $goggles = null;
    public ?string $golf = null;
    public ?string $golfing = null;
    public ?string $golfing_man = null;
    public ?string $golfing_woman = null;
    public ?string $gorilla = null;
    public ?string $grapes = null;
    public ?string $greece = null;
    public ?string $green_apple = null;
    public ?string $green_book = null;
    public ?string $green_circle = null;
    public ?string $green_heart = null;
    public ?string $green_salad = null;
    public ?string $green_square = null;
    public ?string $greenland = null;
    public ?string $grenada = null;
    public ?string $grey_exclamation = null;
    public ?string $grey_question = null;
    public ?string $grimacing = null;
    public ?string $grin = null;
    public ?string $grinning = null;
    public ?string $guadeloupe = null;
    public ?string $guam = null;
    public ?string $guard = null;
    public ?string $guardsman = null;
    public ?string $guardswoman = null;
    public ?string $guatemala = null;
    public ?string $guernsey = null;
    public ?string $guide_dog = null;
    public ?string $guinea = null;
    public ?string $guinea_bissau = null;
    public ?string $guitar = null;
    public ?string $gun = null;
    public ?string $guyana = null;
    public ?string $haircut = null;
    public ?string $haircut_man = null;
    public ?string $haircut_woman = null;
    public ?string $haiti = null;
    public ?string $hamburger = null;
    public ?string $hammer = null;
    public ?string $hammer_and_pick = null;
    public ?string $hammer_and_wrench = null;
    public ?string $hamster = null;
    public ?string $hand = null;
    public ?string $hand_over_mouth = null;
    public ?string $handbag = null;
    public ?string $handball_person = null;
    public ?string $handshake = null;
    public ?string $hankey = null;
    public ?string $hash = null;
    public ?string $hatched_chick = null;
    public ?string $hatching_chick = null;
    public ?string $headphones = null;
    public ?string $headstone = null;
    public ?string $health_worker = null;
    public ?string $hear_no_evil = null;
    public ?string $heard_mcdonald_islands = null;
    public ?string $heart = null;
    public ?string $heart_decoration = null;
    public ?string $heart_eyes = null;
    public ?string $heart_eyes_cat = null;
    public ?string $heart_on_fire = null;
    public ?string $heartbeat = null;
    public ?string $heartpulse = null;
    public ?string $hearts = null;
    public ?string $heavy_check_mark = null;
    public ?string $heavy_division_sign = null;
    public ?string $heavy_dollar_sign = null;
    public ?string $heavy_exclamation_mark = null;
    public ?string $heavy_heart_exclamation = null;
    public ?string $heavy_minus_sign = null;
    public ?string $heavy_multiplication_x = null;
    public ?string $heavy_plus_sign = null;
    public ?string $hedgehog = null;
    public ?string $helicopter = null;
    public ?string $herb = null;
    public ?string $hibiscus = null;
    public ?string $high_brightness = null;
    public ?string $high_heel = null;
    public ?string $hiking_boot = null;
    public ?string $hindu_temple = null;
    public ?string $hippopotamus = null;
    public ?string $hocho = null;
    public ?string $hole = null;
    public ?string $honduras = null;
    public ?string $honey_pot = null;
    public ?string $honeybee = null;
    public ?string $hong_kong = null;
    public ?string $hook = null;
    public ?string $horse = null;
    public ?string $horse_racing = null;
    public ?string $hospital = null;
    public ?string $hot_face = null;
    public ?string $hot_pepper = null;
    public ?string $hotdog = null;
    public ?string $hotel = null;
    public ?string $hotsprings = null;
    public ?string $hourglass = null;
    public ?string $hourglass_flowing_sand = null;
    public ?string $house = null;
    public ?string $house_with_garden = null;
    public ?string $houses = null;
    public ?string $hugs = null;
    public ?string $hungary = null;
    public ?string $hurtrealbad = null;
    public ?string $hushed = null;
    public ?string $hut = null;
    public ?string $ice_cream = null;
    public ?string $ice_cube = null;
    public ?string $ice_hockey = null;
    public ?string $ice_skate = null;
    public ?string $icecream = null;
    public ?string $iceland = null;
    public ?string $id = null;
    public ?string $ideograph_advantage = null;
    public ?string $imp = null;
    public ?string $inbox_tray = null;
    public ?string $incoming_envelope = null;
    public ?string $india = null;
    public ?string $indonesia = null;
    public ?string $infinity = null;
    public ?string $information_desk_person = null;
    public ?string $information_source = null;
    public ?string $innocent = null;
    public ?string $interrobang = null;
    public ?string $iphone = null;
    public ?string $iran = null;
    public ?string $iraq = null;
    public ?string $ireland = null;
    public ?string $isle_of_man = null;
    public ?string $israel = null;
    public ?string $it = null;
    public ?string $izakaya_lantern = null;
    public ?string $jack_o_lantern = null;
    public ?string $jamaica = null;
    public ?string $japan = null;
    public ?string $japanese_castle = null;
    public ?string $japanese_goblin = null;
    public ?string $japanese_ogre = null;
    public ?string $jeans = null;
    public ?string $jersey = null;
    public ?string $jigsaw = null;
    public ?string $jordan = null;
    public ?string $joy = null;
    public ?string $joy_cat = null;
    public ?string $joystick = null;
    public ?string $jp = null;
    public ?string $judge = null;
    public ?string $juggling_person = null;
    public ?string $kangaroo = null;
    public ?string $kazakhstan = null;
    public ?string $kenya = null;
    public ?string $key = null;
    public ?string $keyboard = null;
    public ?string $keycap_ten = null;
    public ?string $kick_scooter = null;
    public ?string $kimono = null;
    public ?string $kiribati = null;
    public ?string $kiss = null;
    public ?string $kissing = null;
    public ?string $kissing_cat = null;
    public ?string $kissing_closed_eyes = null;
    public ?string $kissing_heart = null;
    public ?string $kissing_smiling_eyes = null;
    public ?string $kite = null;
    public ?string $kiwi_fruit = null;
    public ?string $kneeling_man = null;
    public ?string $kneeling_person = null;
    public ?string $kneeling_woman = null;
    public ?string $knife = null;
    public ?string $knot = null;
    public ?string $koala = null;
    public ?string $koko = null;
    public ?string $kosovo = null;
    public ?string $kr = null;
    public ?string $kuwait = null;
    public ?string $kyrgyzstan = null;
    public ?string $lab_coat = null;
    public ?string $label = null;
    public ?string $lacrosse = null;
    public ?string $ladder = null;
    public ?string $lady_beetle = null;
    public ?string $lantern = null;
    public ?string $laos = null;
    public ?string $large_blue_circle = null;
    public ?string $large_blue_diamond = null;
    public ?string $large_orange_diamond = null;
    public ?string $last_quarter_moon = null;
    public ?string $last_quarter_moon_with_face = null;
    public ?string $latin_cross = null;
    public ?string $latvia = null;
    public ?string $laughing = null;
    public ?string $leafy_green = null;
    public ?string $leaves = null;
    public ?string $lebanon = null;
    public ?string $ledger = null;
    public ?string $left_luggage = null;
    public ?string $left_right_arrow = null;
    public ?string $left_speech_bubble = null;
    public ?string $leftwards_arrow_with_hook = null;
    public ?string $leg = null;
    public ?string $lemon = null;
    public ?string $leo = null;
    public ?string $leopard = null;
    public ?string $lesotho = null;
    public ?string $level_slider = null;
    public ?string $liberia = null;
    public ?string $libra = null;
    public ?string $libya = null;
    public ?string $liechtenstein = null;
    public ?string $light_rail = null;
    public ?string $link = null;
    public ?string $lion = null;
    public ?string $lips = null;
    public ?string $lipstick = null;
    public ?string $lithuania = null;
    public ?string $lizard = null;
    public ?string $llama = null;
    public ?string $lobster = null;
    public ?string $lock = null;
    public ?string $lock_with_ink_pen = null;
    public ?string $lollipop = null;
    public ?string $long_drum = null;
    public ?string $loop = null;
    public ?string $lotion_bottle = null;
    public ?string $lotus_position = null;
    public ?string $lotus_position_man = null;
    public ?string $lotus_position_woman = null;
    public ?string $loud_sound = null;
    public ?string $loudspeaker = null;
    public ?string $love_hotel = null;
    public ?string $love_letter = null;
    public ?string $love_you_gesture = null;
    public ?string $low_brightness = null;
    public ?string $luggage = null;
    public ?string $lungs = null;
    public ?string $luxembourg = null;
    public ?string $lying_face = null;
    public ?string $m = null;
    public ?string $macau = null;
    public ?string $macedonia = null;
    public ?string $madagascar = null;
    public ?string $mag = null;
    public ?string $mag_right = null;
    public ?string $mage = null;
    public ?string $mage_man = null;
    public ?string $mage_woman = null;
    public ?string $magic_wand = null;
    public ?string $magnet = null;
    public ?string $mahjong = null;
    public ?string $mailbox = null;
    public ?string $mailbox_closed = null;
    public ?string $mailbox_with_mail = null;
    public ?string $mailbox_with_no_mail = null;
    public ?string $malawi = null;
    public ?string $malaysia = null;
    public ?string $maldives = null;
    public ?string $male_detective = null;
    public ?string $male_sign = null;
    public ?string $mali = null;
    public ?string $malta = null;
    public ?string $mammoth = null;
    public ?string $man = null;
    public ?string $man_artist = null;
    public ?string $man_astronaut = null;
    public ?string $man_beard = null;
    public ?string $man_cartwheeling = null;
    public ?string $man_cook = null;
    public ?string $man_dancing = null;
    public ?string $man_facepalming = null;
    public ?string $man_factory_worker = null;
    public ?string $man_farmer = null;
    public ?string $man_feeding_baby = null;
    public ?string $man_firefighter = null;
    public ?string $man_health_worker = null;
    public ?string $man_in_manual_wheelchair = null;
    public ?string $man_in_motorized_wheelchair = null;
    public ?string $man_in_tuxedo = null;
    public ?string $man_judge = null;
    public ?string $man_juggling = null;
    public ?string $man_mechanic = null;
    public ?string $man_office_worker = null;
    public ?string $man_pilot = null;
    public ?string $man_playing_handball = null;
    public ?string $man_playing_water_polo = null;
    public ?string $man_scientist = null;
    public ?string $man_shrugging = null;
    public ?string $man_singer = null;
    public ?string $man_student = null;
    public ?string $man_teacher = null;
    public ?string $man_technologist = null;
    public ?string $man_with_gua_pi_mao = null;
    public ?string $man_with_probing_cane = null;
    public ?string $man_with_turban = null;
    public ?string $man_with_veil = null;
    public ?string $mandarin = null;
    public ?string $mango = null;
    public ?string $mans_shoe = null;
    public ?string $mantelpiece_clock = null;
    public ?string $manual_wheelchair = null;
    public ?string $maple_leaf = null;
    public ?string $marshall_islands = null;
    public ?string $martial_arts_uniform = null;
    public ?string $martinique = null;
    public ?string $mask = null;
    public ?string $massage = null;
    public ?string $massage_man = null;
    public ?string $massage_woman = null;
    public ?string $mate = null;
    public ?string $mauritania = null;
    public ?string $mauritius = null;
    public ?string $mayotte = null;
    public ?string $meat_on_bone = null;
    public ?string $mechanic = null;
    public ?string $mechanical_arm = null;
    public ?string $mechanical_leg = null;
    public ?string $medal_military = null;
    public ?string $medal_sports = null;
    public ?string $medical_symbol = null;
    public ?string $mega = null;
    public ?string $melon = null;
    public ?string $memo = null;
    public ?string $men_wrestling = null;
    public ?string $mending_heart = null;
    public ?string $menorah = null;
    public ?string $mens = null;
    public ?string $mermaid = null;
    public ?string $merman = null;
    public ?string $merperson = null;
    public ?string $metal = null;
    public ?string $metro = null;
    public ?string $mexico = null;
    public ?string $microbe = null;
    public ?string $micronesia = null;
    public ?string $microphone = null;
    public ?string $microscope = null;
    public ?string $middle_finger = null;
    public ?string $military_helmet = null;
    public ?string $milk_glass = null;
    public ?string $milky_way = null;
    public ?string $minibus = null;
    public ?string $minidisc = null;
    public ?string $mirror = null;
    public ?string $mobile_phone_off = null;
    public ?string $moldova = null;
    public ?string $monaco = null;
    public ?string $money_mouth_face = null;
    public ?string $money_with_wings = null;
    public ?string $moneybag = null;
    public ?string $mongolia = null;
    public ?string $monkey = null;
    public ?string $monkey_face = null;
    public ?string $monocle_face = null;
    public ?string $monorail = null;
    public ?string $montenegro = null;
    public ?string $montserrat = null;
    public ?string $moon = null;
    public ?string $moon_cake = null;
    public ?string $morocco = null;
    public ?string $mortar_board = null;
    public ?string $mosque = null;
    public ?string $mosquito = null;
    public ?string $motor_boat = null;
    public ?string $motor_scooter = null;
    public ?string $motorcycle = null;
    public ?string $motorized_wheelchair = null;
    public ?string $motorway = null;
    public ?string $mount_fuji = null;
    public ?string $mountain = null;
    public ?string $mountain_bicyclist = null;
    public ?string $mountain_biking_man = null;
    public ?string $mountain_biking_woman = null;
    public ?string $mountain_cableway = null;
    public ?string $mountain_railway = null;
    public ?string $mountain_snow = null;
    public ?string $mouse = null;
    public ?string $mouse2 = null;
    public ?string $mouse_trap = null;
    public ?string $movie_camera = null;
    public ?string $moyai = null;
    public ?string $mozambique = null;
    public ?string $mrs_claus = null;
    public ?string $muscle = null;
    public ?string $mushroom = null;
    public ?string $musical_keyboard = null;
    public ?string $musical_note = null;
    public ?string $musical_score = null;
    public ?string $mute = null;
    public ?string $mx_claus = null;
    public ?string $myanmar = null;
    public ?string $nail_care = null;
    public ?string $name_badge = null;
    public ?string $namibia = null;
    public ?string $national_park = null;
    public ?string $nauru = null;
    public ?string $nauseated_face = null;
    public ?string $nazar_amulet = null;
    public ?string $neckbeard = null;
    public ?string $necktie = null;
    public ?string $negative_squared_cross_mark = null;
    public ?string $nepal = null;
    public ?string $nerd_face = null;
    public ?string $nesting_dolls = null;
    public ?string $netherlands = null;
    public ?string $neutral_face = null;
    public ?string $new = null;
    public ?string $new_caledonia = null;
    public ?string $new_moon = null;
    public ?string $new_moon_with_face = null;
    public ?string $new_zealand = null;
    public ?string $newspaper = null;
    public ?string $newspaper_roll = null;
    public ?string $next_track_button = null;
    public ?string $ng = null;
    public ?string $ng_man = null;
    public ?string $ng_woman = null;
    public ?string $nicaragua = null;
    public ?string $niger = null;
    public ?string $nigeria = null;
    public ?string $night_with_stars = null;
    public ?string $nine = null;
    public ?string $ninja = null;
    public ?string $niue = null;
    public ?string $no_bell = null;
    public ?string $no_bicycles = null;
    public ?string $no_entry = null;
    public ?string $no_entry_sign = null;
    public ?string $no_good = null;
    public ?string $no_good_man = null;
    public ?string $no_good_woman = null;
    public ?string $no_mobile_phones = null;
    public ?string $no_mouth = null;
    public ?string $no_pedestrians = null;
    public ?string $no_smoking = null;
    public ?string $nonpotable_water = null;
    public ?string $norfolk_island = null;
    public ?string $north_korea = null;
    public ?string $northern_mariana_islands = null;
    public ?string $norway = null;
    public ?string $nose = null;
    public ?string $notebook = null;
    public ?string $notebook_with_decorative_cover = null;
    public ?string $notes = null;
    public ?string $nut_and_bolt = null;
    public ?string $o = null;
    public ?string $o2 = null;
    public ?string $ocean = null;
    public ?string $octocat = null;
    public ?string $octopus = null;
    public ?string $oden = null;
    public ?string $office = null;
    public ?string $office_worker = null;
    public ?string $oil_drum = null;
    public ?string $ok = null;
    public ?string $ok_hand = null;
    public ?string $ok_man = null;
    public ?string $ok_person = null;
    public ?string $ok_woman = null;
    public ?string $old_key = null;
    public ?string $older_adult = null;
    public ?string $older_man = null;
    public ?string $older_woman = null;
    public ?string $olive = null;
    public ?string $om = null;
    public ?string $oman = null;
    public ?string $on = null;
    public ?string $oncoming_automobile = null;
    public ?string $oncoming_bus = null;
    public ?string $oncoming_police_car = null;
    public ?string $oncoming_taxi = null;
    public ?string $one = null;
    public ?string $one_piece_swimsuit = null;
    public ?string $onion = null;
    public ?string $open_book = null;
    public ?string $open_file_folder = null;
    public ?string $open_hands = null;
    public ?string $open_mouth = null;
    public ?string $open_umbrella = null;
    public ?string $ophiuchus = null;
    public ?string $orange = null;
    public ?string $orange_book = null;
    public ?string $orange_circle = null;
    public ?string $orange_heart = null;
    public ?string $orange_square = null;
    public ?string $orangutan = null;
    public ?string $orthodox_cross = null;
    public ?string $otter = null;
    public ?string $outbox_tray = null;
    public ?string $owl = null;
    public ?string $ox = null;
    public ?string $oyster = null;
    public ?string $package = null;
    public ?string $page_facing_up = null;
    public ?string $page_with_curl = null;
    public ?string $pager = null;
    public ?string $paintbrush = null;
    public ?string $pakistan = null;
    public ?string $palau = null;
    public ?string $palestinian_territories = null;
    public ?string $palm_tree = null;
    public ?string $palms_up_together = null;
    public ?string $panama = null;
    public ?string $pancakes = null;
    public ?string $panda_face = null;
    public ?string $paperclip = null;
    public ?string $paperclips = null;
    public ?string $papua_new_guinea = null;
    public ?string $parachute = null;
    public ?string $paraguay = null;
    public ?string $parasol_on_ground = null;
    public ?string $parking = null;
    public ?string $parrot = null;
    public ?string $part_alternation_mark = null;
    public ?string $partly_sunny = null;
    public ?string $partying_face = null;
    public ?string $passenger_ship = null;
    public ?string $passport_control = null;
    public ?string $pause_button = null;
    public ?string $paw_prints = null;
    public ?string $peace_symbol = null;
    public ?string $peach = null;
    public ?string $peacock = null;
    public ?string $peanuts = null;
    public ?string $pear = null;
    public ?string $pen = null;
    public ?string $pencil = null;
    public ?string $pencil2 = null;
    public ?string $penguin = null;
    public ?string $pensive = null;
    public ?string $people_holding_hands = null;
    public ?string $people_hugging = null;
    public ?string $performing_arts = null;
    public ?string $persevere = null;
    public ?string $person_bald = null;
    public ?string $person_curly_hair = null;
    public ?string $person_feeding_baby = null;
    public ?string $person_fencing = null;
    public ?string $person_in_manual_wheelchair = null;
    public ?string $person_in_motorized_wheelchair = null;
    public ?string $person_in_tuxedo = null;
    public ?string $person_red_hair = null;
    public ?string $person_white_hair = null;
    public ?string $person_with_probing_cane = null;
    public ?string $person_with_turban = null;
    public ?string $person_with_veil = null;
    public ?string $peru = null;
    public ?string $petri_dish = null;
    public ?string $philippines = null;
    public ?string $phone = null;
    public ?string $pick = null;
    public ?string $pickup_truck = null;
    public ?string $pie = null;
    public ?string $pig = null;
    public ?string $pig2 = null;
    public ?string $pig_nose = null;
    public ?string $pill = null;
    public ?string $pilot = null;
    public ?string $pinata = null;
    public ?string $pinched_fingers = null;
    public ?string $pinching_hand = null;
    public ?string $pineapple = null;
    public ?string $ping_pong = null;
    public ?string $pirate_flag = null;
    public ?string $pisces = null;
    public ?string $pitcairn_islands = null;
    public ?string $pizza = null;
    public ?string $placard = null;
    public ?string $place_of_worship = null;
    public ?string $plate_with_cutlery = null;
    public ?string $play_or_pause_button = null;
    public ?string $pleading_face = null;
    public ?string $plunger = null;
    public ?string $point_down = null;
    public ?string $point_left = null;
    public ?string $point_right = null;
    public ?string $point_up = null;
    public ?string $point_up_2 = null;
    public ?string $poland = null;
    public ?string $polar_bear = null;
    public ?string $police_car = null;
    public ?string $police_officer = null;
    public ?string $policeman = null;
    public ?string $policewoman = null;
    public ?string $poodle = null;
    public ?string $poop = null;
    public ?string $popcorn = null;
    public ?string $portugal = null;
    public ?string $post_office = null;
    public ?string $postal_horn = null;
    public ?string $postbox = null;
    public ?string $potable_water = null;
    public ?string $potato = null;
    public ?string $potted_plant = null;
    public ?string $pouch = null;
    public ?string $poultry_leg = null;
    public ?string $pound = null;
    public ?string $pout = null;
    public ?string $pouting_cat = null;
    public ?string $pouting_face = null;
    public ?string $pouting_man = null;
    public ?string $pouting_woman = null;
    public ?string $pray = null;
    public ?string $prayer_beads = null;
    public ?string $pregnant_woman = null;
    public ?string $pretzel = null;
    public ?string $previous_track_button = null;
    public ?string $prince = null;
    public ?string $princess = null;
    public ?string $printer = null;
    public ?string $probing_cane = null;
    public ?string $puerto_rico = null;
    public ?string $punch = null;
    public ?string $purple_circle = null;
    public ?string $purple_heart = null;
    public ?string $purple_square = null;
    public ?string $purse = null;
    public ?string $pushpin = null;
    public ?string $put_litter_in_its_place = null;
    public ?string $qatar = null;
    public ?string $question = null;
    public ?string $rabbit = null;
    public ?string $rabbit2 = null;
    public ?string $raccoon = null;
    public ?string $racehorse = null;
    public ?string $racing_car = null;
    public ?string $radio = null;
    public ?string $radio_button = null;
    public ?string $radioactive = null;
    public ?string $rage = null;
    public ?string $rage1 = null;
    public ?string $rage2 = null;
    public ?string $rage3 = null;
    public ?string $rage4 = null;
    public ?string $railway_car = null;
    public ?string $railway_track = null;
    public ?string $rainbow = null;
    public ?string $rainbow_flag = null;
    public ?string $raised_back_of_hand = null;
    public ?string $raised_eyebrow = null;
    public ?string $raised_hand = null;
    public ?string $raised_hand_with_fingers_splayed = null;
    public ?string $raised_hands = null;
    public ?string $raising_hand = null;
    public ?string $raising_hand_man = null;
    public ?string $raising_hand_woman = null;
    public ?string $ram = null;
    public ?string $ramen = null;
    public ?string $rat = null;
    public ?string $razor = null;
    public ?string $receipt = null;
    public ?string $record_button = null;
    public ?string $recycle = null;
    public ?string $red_car = null;
    public ?string $red_circle = null;
    public ?string $red_envelope = null;
    public ?string $red_haired_man = null;
    public ?string $red_haired_woman = null;
    public ?string $red_square = null;
    public ?string $registered = null;
    public ?string $relaxed = null;
    public ?string $relieved = null;
    public ?string $reminder_ribbon = null;
    public ?string $repeat = null;
    public ?string $repeat_one = null;
    public ?string $rescue_worker_helmet = null;
    public ?string $restroom = null;
    public ?string $reunion = null;
    public ?string $revolving_hearts = null;
    public ?string $rewind = null;
    public ?string $rhinoceros = null;
    public ?string $ribbon = null;
    public ?string $rice = null;
    public ?string $rice_ball = null;
    public ?string $rice_cracker = null;
    public ?string $rice_scene = null;
    public ?string $right_anger_bubble = null;
    public ?string $ring = null;
    public ?string $ringed_planet = null;
    public ?string $robot = null;
    public ?string $rock = null;
    public ?string $rocket = null;
    public ?string $rofl = null;
    public ?string $roll_eyes = null;
    public ?string $roll_of_paper = null;
    public ?string $roller_coaster = null;
    public ?string $roller_skate = null;
    public ?string $romania = null;
    public ?string $rooster = null;
    public ?string $rose = null;
    public ?string $rosette = null;
    public ?string $rotating_light = null;
    public ?string $round_pushpin = null;
    public ?string $rowboat = null;
    public ?string $rowing_man = null;
    public ?string $rowing_woman = null;
    public ?string $ru = null;
    public ?string $rugby_football = null;
    public ?string $runner = null;
    public ?string $running = null;
    public ?string $running_man = null;
    public ?string $running_shirt_with_sash = null;
    public ?string $running_woman = null;
    public ?string $rwanda = null;
    public ?string $sa = null;
    public ?string $safety_pin = null;
    public ?string $safety_vest = null;
    public ?string $sagittarius = null;
    public ?string $sailboat = null;
    public ?string $sake = null;
    public ?string $salt = null;
    public ?string $samoa = null;
    public ?string $san_marino = null;
    public ?string $sandal = null;
    public ?string $sandwich = null;
    public ?string $santa = null;
    public ?string $sao_tome_principe = null;
    public ?string $sari = null;
    public ?string $sassy_man = null;
    public ?string $sassy_woman = null;
    public ?string $satellite = null;
    public ?string $satisfied = null;
    public ?string $saudi_arabia = null;
    public ?string $sauna_man = null;
    public ?string $sauna_person = null;
    public ?string $sauna_woman = null;
    public ?string $sauropod = null;
    public ?string $saxophone = null;
    public ?string $scarf = null;
    public ?string $school = null;
    public ?string $school_satchel = null;
    public ?string $scientist = null;
    public ?string $scissors = null;
    public ?string $scorpion = null;
    public ?string $scorpius = null;
    public ?string $scotland = null;
    public ?string $scream = null;
    public ?string $scream_cat = null;
    public ?string $screwdriver = null;
    public ?string $scroll = null;
    public ?string $seal = null;
    public ?string $seat = null;
    public ?string $secret = null;
    public ?string $see_no_evil = null;
    public ?string $seedling = null;
    public ?string $selfie = null;
    public ?string $senegal = null;
    public ?string $serbia = null;
    public ?string $service_dog = null;
    public ?string $seven = null;
    public ?string $sewing_needle = null;
    public ?string $seychelles = null;
    public ?string $shallow_pan_of_food = null;
    public ?string $shamrock = null;
    public ?string $shark = null;
    public ?string $shaved_ice = null;
    public ?string $sheep = null;
    public ?string $shell = null;
    public ?string $shield = null;
    public ?string $shinto_shrine = null;
    public ?string $ship = null;
    public ?string $shipit = null;
    public ?string $shirt = null;
    public ?string $shoe = null;
    public ?string $shopping = null;
    public ?string $shopping_cart = null;
    public ?string $shorts = null;
    public ?string $shower = null;
    public ?string $shrimp = null;
    public ?string $shrug = null;
    public ?string $shushing_face = null;
    public ?string $sierra_leone = null;
    public ?string $signal_strength = null;
    public ?string $singapore = null;
    public ?string $singer = null;
    public ?string $sint_maarten = null;
    public ?string $six = null;
    public ?string $six_pointed_star = null;
    public ?string $skateboard = null;
    public ?string $ski = null;
    public ?string $skier = null;
    public ?string $skull = null;
    public ?string $skull_and_crossbones = null;
    public ?string $skunk = null;
    public ?string $sled = null;
    public ?string $sleeping = null;
    public ?string $sleeping_bed = null;
    public ?string $sleepy = null;
    public ?string $slightly_frowning_face = null;
    public ?string $slightly_smiling_face = null;
    public ?string $slot_machine = null;
    public ?string $sloth = null;
    public ?string $slovakia = null;
    public ?string $slovenia = null;
    public ?string $small_airplane = null;
    public ?string $small_blue_diamond = null;
    public ?string $small_orange_diamond = null;
    public ?string $small_red_triangle = null;
    public ?string $small_red_triangle_down = null;
    public ?string $smile = null;
    public ?string $smile_cat = null;
    public ?string $smiley = null;
    public ?string $smiley_cat = null;
    public ?string $smiling_face_with_tear = null;
    public ?string $smiling_face_with_three_hearts = null;
    public ?string $smiling_imp = null;
    public ?string $smirk = null;
    public ?string $smirk_cat = null;
    public ?string $smoking = null;
    public ?string $snail = null;
    public ?string $snake = null;
    public ?string $sneezing_face = null;
    public ?string $snowboarder = null;
    public ?string $snowflake = null;
    public ?string $snowman = null;
    public ?string $snowman_with_snow = null;
    public ?string $soap = null;
    public ?string $sob = null;
    public ?string $soccer = null;
    public ?string $socks = null;
    public ?string $softball = null;
    public ?string $solomon_islands = null;
    public ?string $somalia = null;
    public ?string $soon = null;
    public ?string $sos = null;
    public ?string $sound = null;
    public ?string $south_africa = null;
    public ?string $south_georgia_south_sandwich_islands = null;
    public ?string $south_sudan = null;
    public ?string $space_invader = null;
    public ?string $spades = null;
    public ?string $spaghetti = null;
    public ?string $sparkle = null;
    public ?string $sparkler = null;
    public ?string $sparkles = null;
    public ?string $sparkling_heart = null;
    public ?string $speak_no_evil = null;
    public ?string $speaker = null;
    public ?string $speaking_head = null;
    public ?string $speech_balloon = null;
    public ?string $speedboat = null;
    public ?string $spider = null;
    public ?string $spider_web = null;
    public ?string $spiral_calendar = null;
    public ?string $spiral_notepad = null;
    public ?string $sponge = null;
    public ?string $spoon = null;
    public ?string $squid = null;
    public ?string $sri_lanka = null;
    public ?string $st_barthelemy = null;
    public ?string $st_helena = null;
    public ?string $st_kitts_nevis = null;
    public ?string $st_lucia = null;
    public ?string $st_martin = null;
    public ?string $st_pierre_miquelon = null;
    public ?string $st_vincent_grenadines = null;
    public ?string $stadium = null;
    public ?string $standing_man = null;
    public ?string $standing_person = null;
    public ?string $standing_woman = null;
    public ?string $star = null;
    public ?string $star2 = null;
    public ?string $star_and_crescent = null;
    public ?string $star_of_david = null;
    public ?string $star_struck = null;
    public ?string $stars = null;
    public ?string $station = null;
    public ?string $statue_of_liberty = null;
    public ?string $steam_locomotive = null;
    public ?string $stethoscope = null;
    public ?string $stew = null;
    public ?string $stop_button = null;
    public ?string $stop_sign = null;
    public ?string $stopwatch = null;
    public ?string $straight_ruler = null;
    public ?string $strawberry = null;
    public ?string $stuck_out_tongue = null;
    public ?string $stuck_out_tongue_closed_eyes = null;
    public ?string $stuck_out_tongue_winking_eye = null;
    public ?string $student = null;
    public ?string $studio_microphone = null;
    public ?string $stuffed_flatbread = null;
    public ?string $sudan = null;
    public ?string $sun_behind_large_cloud = null;
    public ?string $sun_behind_rain_cloud = null;
    public ?string $sun_behind_small_cloud = null;
    public ?string $sun_with_face = null;
    public ?string $sunflower = null;
    public ?string $sunglasses = null;
    public ?string $sunny = null;
    public ?string $sunrise = null;
    public ?string $sunrise_over_mountains = null;
    public ?string $superhero = null;
    public ?string $superhero_man = null;
    public ?string $superhero_woman = null;
    public ?string $supervillain = null;
    public ?string $supervillain_man = null;
    public ?string $supervillain_woman = null;
    public ?string $surfer = null;
    public ?string $surfing_man = null;
    public ?string $surfing_woman = null;
    public ?string $suriname = null;
    public ?string $sushi = null;
    public ?string $suspect = null;
    public ?string $suspension_railway = null;
    public ?string $svalbard_jan_mayen = null;
    public ?string $swan = null;
    public ?string $swaziland = null;
    public ?string $sweat = null;
    public ?string $sweat_drops = null;
    public ?string $sweat_smile = null;
    public ?string $sweden = null;
    public ?string $sweet_potato = null;
    public ?string $swim_brief = null;
    public ?string $swimmer = null;
    public ?string $swimming_man = null;
    public ?string $swimming_woman = null;
    public ?string $switzerland = null;
    public ?string $symbols = null;
    public ?string $synagogue = null;
    public ?string $syria = null;
    public ?string $syringe = null;
    public ?string $taco = null;
    public ?string $tada = null;
    public ?string $taiwan = null;
    public ?string $tajikistan = null;
    public ?string $takeout_box = null;
    public ?string $tamale = null;
    public ?string $tanabata_tree = null;
    public ?string $tangerine = null;
    public ?string $tanzania = null;
    public ?string $taurus = null;
    public ?string $taxi = null;
    public ?string $tea = null;
    public ?string $teacher = null;
    public ?string $teapot = null;
    public ?string $technologist = null;
    public ?string $teddy_bear = null;
    public ?string $telephone = null;
    public ?string $telephone_receiver = null;
    public ?string $telescope = null;
    public ?string $tennis = null;
    public ?string $tent = null;
    public ?string $test_tube = null;
    public ?string $thailand = null;
    public ?string $thermometer = null;
    public ?string $thinking = null;
    public ?string $thong_sandal = null;
    public ?string $thought_balloon = null;
    public ?string $thread = null;
    public ?string $three = null;
    public ?string $thumbsdown = null;
    public ?string $thumbsup = null;
    public ?string $ticket = null;
    public ?string $tickets = null;
    public ?string $tiger = null;
    public ?string $tiger2 = null;
    public ?string $timer_clock = null;
    public ?string $timor_leste = null;
    public ?string $tipping_hand_man = null;
    public ?string $tipping_hand_person = null;
    public ?string $tipping_hand_woman = null;
    public ?string $tired_face = null;
    public ?string $tm = null;
    public ?string $togo = null;
    public ?string $toilet = null;
    public ?string $tokelau = null;
    public ?string $tokyo_tower = null;
    public ?string $tomato = null;
    public ?string $tonga = null;
    public ?string $tongue = null;
    public ?string $toolbox = null;
    public ?string $tooth = null;
    public ?string $toothbrush = null;
    public ?string $top = null;
    public ?string $tophat = null;
    public ?string $tornado = null;
    public ?string $tr = null;
    public ?string $trackball = null;
    public ?string $tractor = null;
    public ?string $traffic_light = null;
    public ?string $train = null;
    public ?string $train2 = null;
    public ?string $tram = null;
    public ?string $transgender_flag = null;
    public ?string $transgender_symbol = null;
    public ?string $trex = null;
    public ?string $triangular_flag_on_post = null;
    public ?string $triangular_ruler = null;
    public ?string $trident = null;
    public ?string $trinidad_tobago = null;
    public ?string $tristan_da_cunha = null;
    public ?string $triumph = null;
    public ?string $trolleybus = null;
    public ?string $trollface = null;
    public ?string $trophy = null;
    public ?string $tropical_drink = null;
    public ?string $tropical_fish = null;
    public ?string $truck = null;
    public ?string $trumpet = null;
    public ?string $tshirt = null;
    public ?string $tulip = null;
    public ?string $tumbler_glass = null;
    public ?string $tunisia = null;
    public ?string $turkey = null;
    public ?string $turkmenistan = null;
    public ?string $turks_caicos_islands = null;
    public ?string $turtle = null;
    public ?string $tuvalu = null;
    public ?string $tv = null;
    public ?string $twisted_rightwards_arrows = null;
    public ?string $two = null;
    public ?string $two_hearts = null;
    public ?string $two_men_holding_hands = null;
    public ?string $two_women_holding_hands = null;
    public ?string $u5272 = null;
    public ?string $u5408 = null;
    public ?string $u55b6 = null;
    public ?string $u6307 = null;
    public ?string $u6708 = null;
    public ?string $u6709 = null;
    public ?string $u6e80 = null;
    public ?string $u7121 = null;
    public ?string $u7533 = null;
    public ?string $u7981 = null;
    public ?string $u7a7a = null;
    public ?string $uganda = null;
    public ?string $uk = null;
    public ?string $ukraine = null;
    public ?string $umbrella = null;
    public ?string $unamused = null;
    public ?string $underage = null;
    public ?string $unicorn = null;
    public ?string $united_arab_emirates = null;
    public ?string $united_nations = null;
    public ?string $unlock = null;
    public ?string $up = null;
    public ?string $upside_down_face = null;
    public ?string $uruguay = null;
    public ?string $us = null;
    public ?string $us_outlying_islands = null;
    public ?string $us_virgin_islands = null;
    public ?string $uzbekistan = null;
    public ?string $v = null;
    public ?string $vampire = null;
    public ?string $vampire_man = null;
    public ?string $vampire_woman = null;
    public ?string $vanuatu = null;
    public ?string $vatican_city = null;
    public ?string $venezuela = null;
    public ?string $vertical_traffic_light = null;
    public ?string $vhs = null;
    public ?string $vibration_mode = null;
    public ?string $video_camera = null;
    public ?string $video_game = null;
    public ?string $vietnam = null;
    public ?string $violin = null;
    public ?string $virgo = null;
    public ?string $volcano = null;
    public ?string $volleyball = null;
    public ?string $vomiting_face = null;
    public ?string $vs = null;
    public ?string $vulcan_salute = null;
    public ?string $waffle = null;
    public ?string $wales = null;
    public ?string $walking = null;
    public ?string $walking_man = null;
    public ?string $walking_woman = null;
    public ?string $wallis_futuna = null;
    public ?string $waning_crescent_moon = null;
    public ?string $waning_gibbous_moon = null;
    public ?string $warning = null;
    public ?string $wastebasket = null;
    public ?string $watch = null;
    public ?string $water_buffalo = null;
    public ?string $water_polo = null;
    public ?string $watermelon = null;
    public ?string $wave = null;
    public ?string $wavy_dash = null;
    public ?string $waxing_crescent_moon = null;
    public ?string $waxing_gibbous_moon = null;
    public ?string $wc = null;
    public ?string $weary = null;
    public ?string $wedding = null;
    public ?string $weight_lifting = null;
    public ?string $weight_lifting_man = null;
    public ?string $weight_lifting_woman = null;
    public ?string $western_sahara = null;
    public ?string $whale = null;
    public ?string $whale2 = null;
    public ?string $wheel_of_dharma = null;
    public ?string $wheelchair = null;
    public ?string $white_check_mark = null;
    public ?string $white_circle = null;
    public ?string $white_flag = null;
    public ?string $white_flower = null;
    public ?string $white_haired_man = null;
    public ?string $white_haired_woman = null;
    public ?string $white_heart = null;
    public ?string $white_large_square = null;
    public ?string $white_medium_small_square = null;
    public ?string $white_medium_square = null;
    public ?string $white_small_square = null;
    public ?string $white_square_button = null;
    public ?string $wilted_flower = null;
    public ?string $wind_chime = null;
    public ?string $wind_face = null;
    public ?string $window = null;
    public ?string $wine_glass = null;
    public ?string $wink = null;
    public ?string $wolf = null;
    public ?string $woman = null;
    public ?string $woman_artist = null;
    public ?string $woman_astronaut = null;
    public ?string $woman_beard = null;
    public ?string $woman_cartwheeling = null;
    public ?string $woman_cook = null;
    public ?string $woman_dancing = null;
    public ?string $woman_facepalming = null;
    public ?string $woman_factory_worker = null;
    public ?string $woman_farmer = null;
    public ?string $woman_feeding_baby = null;
    public ?string $woman_firefighter = null;
    public ?string $woman_health_worker = null;
    public ?string $woman_in_manual_wheelchair = null;
    public ?string $woman_in_motorized_wheelchair = null;
    public ?string $woman_in_tuxedo = null;
    public ?string $woman_judge = null;
    public ?string $woman_juggling = null;
    public ?string $woman_mechanic = null;
    public ?string $woman_office_worker = null;
    public ?string $woman_pilot = null;
    public ?string $woman_playing_handball = null;
    public ?string $woman_playing_water_polo = null;
    public ?string $woman_scientist = null;
    public ?string $woman_shrugging = null;
    public ?string $woman_singer = null;
    public ?string $woman_student = null;
    public ?string $woman_teacher = null;
    public ?string $woman_technologist = null;
    public ?string $woman_with_headscarf = null;
    public ?string $woman_with_probing_cane = null;
    public ?string $woman_with_turban = null;
    public ?string $woman_with_veil = null;
    public ?string $womans_clothes = null;
    public ?string $womans_hat = null;
    public ?string $women_wrestling = null;
    public ?string $womens = null;
    public ?string $wood = null;
    public ?string $woozy_face = null;
    public ?string $world_map = null;
    public ?string $worm = null;
    public ?string $worried = null;
    public ?string $wrench = null;
    public ?string $wrestling = null;
    public ?string $writing_hand = null;
    public ?string $x = null;
    public ?string $yarn = null;
    public ?string $yawning_face = null;
    public ?string $yellow_circle = null;
    public ?string $yellow_heart = null;
    public ?string $yellow_square = null;
    public ?string $yemen = null;
    public ?string $yen = null;
    public ?string $yin_yang = null;
    public ?string $yo_yo = null;
    public ?string $yum = null;
    public ?string $zambia = null;
    public ?string $zany_face = null;
    public ?string $zap = null;
    public ?string $zebra = null;
    public ?string $zero = null;
    public ?string $zimbabwe = null;
    public ?string $zipper_mouth_face = null;
    public ?string $zombie = null;
    public ?string $zombie_man = null;
    public ?string $zombie_woman = null;
    public ?string $zzz = null;
}

/** Request payload for Emoji#load. */
class EmojiLoadMatch
{
    public ?string $a = null;
    public ?string $ab = null;
    public ?string $abacus = null;
    public ?string $abc = null;
    public ?string $abcd = null;
    public ?string $accept = null;
    public ?string $accessibility = null;
    public ?string $accordion = null;
    public ?string $adhesive_bandage = null;
    public ?string $adult = null;
    public ?string $aerial_tramway = null;
    public ?string $afghanistan = null;
    public ?string $airplane = null;
    public ?string $aland_islands = null;
    public ?string $alarm_clock = null;
    public ?string $albania = null;
    public ?string $alembic = null;
    public ?string $algeria = null;
    public ?string $alien = null;
    public ?string $ambulance = null;
    public ?string $american_samoa = null;
    public ?string $amphora = null;
    public ?string $anatomical_heart = null;
    public ?string $anchor = null;
    public ?string $andorra = null;
    public ?string $angel = null;
    public ?string $anger = null;
    public ?string $angola = null;
    public ?string $angry = null;
    public ?string $anguilla = null;
    public ?string $anguished = null;
    public ?string $ant = null;
    public ?string $antarctica = null;
    public ?string $antigua_barbuda = null;
    public ?string $apple = null;
    public ?string $aquarius = null;
    public ?string $argentina = null;
    public ?string $aries = null;
    public ?string $armenia = null;
    public ?string $arrow_backward = null;
    public ?string $arrow_double_down = null;
    public ?string $arrow_double_up = null;
    public ?string $arrow_down = null;
    public ?string $arrow_down_small = null;
    public ?string $arrow_forward = null;
    public ?string $arrow_heading_down = null;
    public ?string $arrow_heading_up = null;
    public ?string $arrow_left = null;
    public ?string $arrow_lower_left = null;
    public ?string $arrow_lower_right = null;
    public ?string $arrow_right = null;
    public ?string $arrow_right_hook = null;
    public ?string $arrow_up = null;
    public ?string $arrow_up_down = null;
    public ?string $arrow_up_small = null;
    public ?string $arrow_upper_left = null;
    public ?string $arrow_upper_right = null;
    public ?string $arrows_clockwise = null;
    public ?string $arrows_counterclockwise = null;
    public ?string $art = null;
    public ?string $articulated_lorry = null;
    public ?string $artificial_satellite = null;
    public ?string $artist = null;
    public ?string $aruba = null;
    public ?string $ascension_island = null;
    public ?string $asterisk = null;
    public ?string $astonished = null;
    public ?string $astronaut = null;
    public ?string $athletic_shoe = null;
    public ?string $atm = null;
    public ?string $atom = null;
    public ?string $atom_symbol = null;
    public ?string $australia = null;
    public ?string $austria = null;
    public ?string $auto_rickshaw = null;
    public ?string $avocado = null;
    public ?string $axe = null;
    public ?string $azerbaijan = null;
    public ?string $b = null;
    public ?string $baby = null;
    public ?string $baby_bottle = null;
    public ?string $baby_chick = null;
    public ?string $baby_symbol = null;
    public ?string $back = null;
    public ?string $bacon = null;
    public ?string $badger = null;
    public ?string $badminton = null;
    public ?string $bagel = null;
    public ?string $baggage_claim = null;
    public ?string $baguette_bread = null;
    public ?string $bahamas = null;
    public ?string $bahrain = null;
    public ?string $balance_scale = null;
    public ?string $bald_man = null;
    public ?string $bald_woman = null;
    public ?string $ballet_shoes = null;
    public ?string $balloon = null;
    public ?string $ballot_box = null;
    public ?string $ballot_box_with_check = null;
    public ?string $bamboo = null;
    public ?string $banana = null;
    public ?string $bangbang = null;
    public ?string $bangladesh = null;
    public ?string $banjo = null;
    public ?string $bank = null;
    public ?string $bar_chart = null;
    public ?string $barbados = null;
    public ?string $barber = null;
    public ?string $baseball = null;
    public ?string $basecamp = null;
    public ?string $basecampy = null;
    public ?string $basket = null;
    public ?string $basketball = null;
    public ?string $basketball_man = null;
    public ?string $basketball_woman = null;
    public ?string $bat = null;
    public ?string $bath = null;
    public ?string $bathtub = null;
    public ?string $battery = null;
    public ?string $beach_umbrella = null;
    public ?string $bear = null;
    public ?string $bearded_person = null;
    public ?string $beaver = null;
    public ?string $bed = null;
    public ?string $bee = null;
    public ?string $beer = null;
    public ?string $beers = null;
    public ?string $beetle = null;
    public ?string $beginner = null;
    public ?string $belarus = null;
    public ?string $belgium = null;
    public ?string $belize = null;
    public ?string $bell = null;
    public ?string $bell_pepper = null;
    public ?string $bellhop_bell = null;
    public ?string $benin = null;
    public ?string $bento = null;
    public ?string $bermuda = null;
    public ?string $beverage_box = null;
    public ?string $bhutan = null;
    public ?string $bicyclist = null;
    public ?string $bike = null;
    public ?string $biking_man = null;
    public ?string $biking_woman = null;
    public ?string $bikini = null;
    public ?string $billed_cap = null;
    public ?string $biohazard = null;
    public ?string $bird = null;
    public ?string $birthday = null;
    public ?string $bison = null;
    public ?string $black_cat = null;
    public ?string $black_circle = null;
    public ?string $black_flag = null;
    public ?string $black_heart = null;
    public ?string $black_joker = null;
    public ?string $black_large_square = null;
    public ?string $black_medium_small_square = null;
    public ?string $black_medium_square = null;
    public ?string $black_nib = null;
    public ?string $black_small_square = null;
    public ?string $black_square_button = null;
    public ?string $blond_haired_man = null;
    public ?string $blond_haired_person = null;
    public ?string $blond_haired_woman = null;
    public ?string $blonde_woman = null;
    public ?string $blossom = null;
    public ?string $blowfish = null;
    public ?string $blue_book = null;
    public ?string $blue_car = null;
    public ?string $blue_heart = null;
    public ?string $blue_square = null;
    public ?string $blueberries = null;
    public ?string $blush = null;
    public ?string $boar = null;
    public ?string $boat = null;
    public ?string $bolivia = null;
    public ?string $bomb = null;
    public ?string $bone = null;
    public ?string $book = null;
    public ?string $bookmark = null;
    public ?string $bookmark_tabs = null;
    public ?string $books = null;
    public ?string $boom = null;
    public ?string $boomerang = null;
    public ?string $boot = null;
    public ?string $bosnia_herzegovina = null;
    public ?string $botswana = null;
    public ?string $bouncing_ball_man = null;
    public ?string $bouncing_ball_person = null;
    public ?string $bouncing_ball_woman = null;
    public ?string $bouquet = null;
    public ?string $bouvet_island = null;
    public ?string $bow = null;
    public ?string $bow_and_arrow = null;
    public ?string $bowing_man = null;
    public ?string $bowing_woman = null;
    public ?string $bowl_with_spoon = null;
    public ?string $bowling = null;
    public ?string $bowtie = null;
    public ?string $boxing_glove = null;
    public ?string $boy = null;
    public ?string $brain = null;
    public ?string $brazil = null;
    public ?string $bread = null;
    public ?string $breast_feeding = null;
    public ?string $bricks = null;
    public ?string $bride_with_veil = null;
    public ?string $bridge_at_night = null;
    public ?string $briefcase = null;
    public ?string $british_indian_ocean_territory = null;
    public ?string $british_virgin_islands = null;
    public ?string $broccoli = null;
    public ?string $broken_heart = null;
    public ?string $broom = null;
    public ?string $brown_circle = null;
    public ?string $brown_heart = null;
    public ?string $brown_square = null;
    public ?string $brunei = null;
    public ?string $bubble_tea = null;
    public ?string $bucket = null;
    public ?string $bug = null;
    public ?string $building_construction = null;
    public ?string $bulb = null;
    public ?string $bulgaria = null;
    public ?string $bullettrain_front = null;
    public ?string $bullettrain_side = null;
    public ?string $burkina_faso = null;
    public ?string $burrito = null;
    public ?string $burundi = null;
    public ?string $bus = null;
    public ?string $business_suit_levitating = null;
    public ?string $busstop = null;
    public ?string $bust_in_silhouette = null;
    public ?string $busts_in_silhouette = null;
    public ?string $butter = null;
    public ?string $butterfly = null;
    public ?string $cactus = null;
    public ?string $cake = null;
    public ?string $calendar = null;
    public ?string $call_me_hand = null;
    public ?string $calling = null;
    public ?string $cambodia = null;
    public ?string $camel = null;
    public ?string $camera = null;
    public ?string $camera_flash = null;
    public ?string $cameroon = null;
    public ?string $camping = null;
    public ?string $canada = null;
    public ?string $canary_islands = null;
    public ?string $cancer = null;
    public ?string $candle = null;
    public ?string $candy = null;
    public ?string $canned_food = null;
    public ?string $canoe = null;
    public ?string $cape_verde = null;
    public ?string $capital_abcd = null;
    public ?string $capricorn = null;
    public ?string $car = null;
    public ?string $card_file_box = null;
    public ?string $card_index = null;
    public ?string $card_index_dividers = null;
    public ?string $caribbean_netherlands = null;
    public ?string $carousel_horse = null;
    public ?string $carpentry_saw = null;
    public ?string $carrot = null;
    public ?string $cartwheeling = null;
    public ?string $cat = null;
    public ?string $cat2 = null;
    public ?string $cayman_islands = null;
    public ?string $cd = null;
    public ?string $central_african_republic = null;
    public ?string $ceuta_melilla = null;
    public ?string $chad = null;
    public ?string $chains = null;
    public ?string $chair = null;
    public ?string $champagne = null;
    public ?string $chart = null;
    public ?string $chart_with_downwards_trend = null;
    public ?string $chart_with_upwards_trend = null;
    public ?string $checkered_flag = null;
    public ?string $cheese = null;
    public ?string $cherries = null;
    public ?string $cherry_blossom = null;
    public ?string $chess_pawn = null;
    public ?string $chestnut = null;
    public ?string $chicken = null;
    public ?string $child = null;
    public ?string $children_crossing = null;
    public ?string $chile = null;
    public ?string $chipmunk = null;
    public ?string $chocolate_bar = null;
    public ?string $chopsticks = null;
    public ?string $christmas_island = null;
    public ?string $christmas_tree = null;
    public ?string $church = null;
    public ?string $cinema = null;
    public ?string $circus_tent = null;
    public ?string $city_sunrise = null;
    public ?string $city_sunset = null;
    public ?string $cityscape = null;
    public ?string $cl = null;
    public ?string $clamp = null;
    public ?string $clap = null;
    public ?string $clapper = null;
    public ?string $classical_building = null;
    public ?string $climbing = null;
    public ?string $climbing_man = null;
    public ?string $climbing_woman = null;
    public ?string $clinking_glasses = null;
    public ?string $clipboard = null;
    public ?string $clipperton_island = null;
    public ?string $clock1 = null;
    public ?string $clock10 = null;
    public ?string $clock1030 = null;
    public ?string $clock11 = null;
    public ?string $clock1130 = null;
    public ?string $clock12 = null;
    public ?string $clock1230 = null;
    public ?string $clock130 = null;
    public ?string $clock2 = null;
    public ?string $clock230 = null;
    public ?string $clock3 = null;
    public ?string $clock330 = null;
    public ?string $clock4 = null;
    public ?string $clock430 = null;
    public ?string $clock5 = null;
    public ?string $clock530 = null;
    public ?string $clock6 = null;
    public ?string $clock630 = null;
    public ?string $clock7 = null;
    public ?string $clock730 = null;
    public ?string $clock8 = null;
    public ?string $clock830 = null;
    public ?string $clock9 = null;
    public ?string $clock930 = null;
    public ?string $closed_book = null;
    public ?string $closed_lock_with_key = null;
    public ?string $closed_umbrella = null;
    public ?string $cloud = null;
    public ?string $cloud_with_lightning = null;
    public ?string $cloud_with_lightning_and_rain = null;
    public ?string $cloud_with_rain = null;
    public ?string $cloud_with_snow = null;
    public ?string $clown_face = null;
    public ?string $clubs = null;
    public ?string $cn = null;
    public ?string $coat = null;
    public ?string $cockroach = null;
    public ?string $cocktail = null;
    public ?string $coconut = null;
    public ?string $cocos_islands = null;
    public ?string $coffee = null;
    public ?string $coffin = null;
    public ?string $coin = null;
    public ?string $cold_face = null;
    public ?string $cold_sweat = null;
    public ?string $collision = null;
    public ?string $colombia = null;
    public ?string $comet = null;
    public ?string $comoros = null;
    public ?string $compass = null;
    public ?string $computer = null;
    public ?string $computer_mouse = null;
    public ?string $confetti_ball = null;
    public ?string $confounded = null;
    public ?string $confused = null;
    public ?string $congo_brazzaville = null;
    public ?string $congo_kinshasa = null;
    public ?string $congratulations = null;
    public ?string $construction = null;
    public ?string $construction_worker = null;
    public ?string $construction_worker_man = null;
    public ?string $construction_worker_woman = null;
    public ?string $control_knobs = null;
    public ?string $convenience_store = null;
    public ?string $cook = null;
    public ?string $cook_islands = null;
    public ?string $cookie = null;
    public ?string $cool = null;
    public ?string $cop = null;
    public ?string $copilot = null;
    public ?string $copyright = null;
    public ?string $corn = null;
    public ?string $costa_rica = null;
    public ?string $cote_divoire = null;
    public ?string $couch_and_lamp = null;
    public ?string $couple = null;
    public ?string $couple_with_heart = null;
    public ?string $couple_with_heart_man_man = null;
    public ?string $couple_with_heart_woman_man = null;
    public ?string $couple_with_heart_woman_woman = null;
    public ?string $couplekiss = null;
    public ?string $couplekiss_man_man = null;
    public ?string $couplekiss_man_woman = null;
    public ?string $couplekiss_woman_woman = null;
    public ?string $cow = null;
    public ?string $cow2 = null;
    public ?string $cowboy_hat_face = null;
    public ?string $crab = null;
    public ?string $crayon = null;
    public ?string $credit_card = null;
    public ?string $crescent_moon = null;
    public ?string $cricket = null;
    public ?string $cricket_game = null;
    public ?string $croatia = null;
    public ?string $crocodile = null;
    public ?string $croissant = null;
    public ?string $crossed_fingers = null;
    public ?string $crossed_flags = null;
    public ?string $crossed_swords = null;
    public ?string $crown = null;
    public ?string $cry = null;
    public ?string $crying_cat_face = null;
    public ?string $crystal_ball = null;
    public ?string $cuba = null;
    public ?string $cucumber = null;
    public ?string $cup_with_straw = null;
    public ?string $cupcake = null;
    public ?string $cupid = null;
    public ?string $curacao = null;
    public ?string $curling_stone = null;
    public ?string $curly_haired_man = null;
    public ?string $curly_haired_woman = null;
    public ?string $curly_loop = null;
    public ?string $currency_exchange = null;
    public ?string $curry = null;
    public ?string $cursing_face = null;
    public ?string $custard = null;
    public ?string $customs = null;
    public ?string $cut_of_meat = null;
    public ?string $cyclone = null;
    public ?string $cyprus = null;
    public ?string $czech_republic = null;
    public ?string $dagger = null;
    public ?string $dancer = null;
    public ?string $dancers = null;
    public ?string $dancing_men = null;
    public ?string $dancing_women = null;
    public ?string $dango = null;
    public ?string $dark_sunglasses = null;
    public ?string $dart = null;
    public ?string $dash = null;
    public ?string $date = null;
    public ?string $de = null;
    public ?string $deaf_man = null;
    public ?string $deaf_person = null;
    public ?string $deaf_woman = null;
    public ?string $deciduous_tree = null;
    public ?string $deer = null;
    public ?string $denmark = null;
    public ?string $department_store = null;
    public ?string $dependabot = null;
    public ?string $derelict_house = null;
    public ?string $desert = null;
    public ?string $desert_island = null;
    public ?string $desktop_computer = null;
    public ?string $detective = null;
    public ?string $diamond_shape_with_a_dot_inside = null;
    public ?string $diamonds = null;
    public ?string $diego_garcia = null;
    public ?string $disappointed = null;
    public ?string $disappointed_relieved = null;
    public ?string $disguised_face = null;
    public ?string $diving_mask = null;
    public ?string $diya_lamp = null;
    public ?string $dizzy = null;
    public ?string $dizzy_face = null;
    public ?string $djibouti = null;
    public ?string $dna = null;
    public ?string $do_not_litter = null;
    public ?string $dodo = null;
    public ?string $dog = null;
    public ?string $dog2 = null;
    public ?string $dollar = null;
    public ?string $dolls = null;
    public ?string $dolphin = null;
    public ?string $dominica = null;
    public ?string $dominican_republic = null;
    public ?string $door = null;
    public ?string $doughnut = null;
    public ?string $dove = null;
    public ?string $dragon = null;
    public ?string $dragon_face = null;
    public ?string $dress = null;
    public ?string $dromedary_camel = null;
    public ?string $drooling_face = null;
    public ?string $drop_of_blood = null;
    public ?string $droplet = null;
    public ?string $drum = null;
    public ?string $duck = null;
    public ?string $dumpling = null;
    public ?string $dvd = null;
    public ?string $eagle = null;
    public ?string $ear = null;
    public ?string $ear_of_rice = null;
    public ?string $ear_with_hearing_aid = null;
    public ?string $earth_africa = null;
    public ?string $earth_americas = null;
    public ?string $earth_asia = null;
    public ?string $ecuador = null;
    public ?string $egg = null;
    public ?string $eggplant = null;
    public ?string $egypt = null;
    public ?string $eight = null;
    public ?string $eight_pointed_black_star = null;
    public ?string $eight_spoked_asterisk = null;
    public ?string $eject_button = null;
    public ?string $el_salvador = null;
    public ?string $electric_plug = null;
    public ?string $electron = null;
    public ?string $elephant = null;
    public ?string $elevator = null;
    public ?string $elf = null;
    public ?string $elf_man = null;
    public ?string $elf_woman = null;
    public ?string $email = null;
    public ?string $end = null;
    public ?string $england = null;
    public ?string $envelope = null;
    public ?string $envelope_with_arrow = null;
    public ?string $equatorial_guinea = null;
    public ?string $eritrea = null;
    public ?string $es = null;
    public ?string $estonia = null;
    public ?string $ethiopia = null;
    public ?string $eu = null;
    public ?string $euro = null;
    public ?string $european_castle = null;
    public ?string $european_post_office = null;
    public ?string $european_union = null;
    public ?string $evergreen_tree = null;
    public ?string $exclamation = null;
    public ?string $exploding_head = null;
    public ?string $expressionless = null;
    public ?string $eye = null;
    public ?string $eye_speech_bubble = null;
    public ?string $eyeglasses = null;
    public ?string $eyes = null;
    public ?string $face_exhaling = null;
    public ?string $face_in_clouds = null;
    public ?string $face_with_head_bandage = null;
    public ?string $face_with_spiral_eyes = null;
    public ?string $face_with_thermometer = null;
    public ?string $facepalm = null;
    public ?string $facepunch = null;
    public ?string $factory = null;
    public ?string $factory_worker = null;
    public ?string $fairy = null;
    public ?string $fairy_man = null;
    public ?string $fairy_woman = null;
    public ?string $falafel = null;
    public ?string $falkland_islands = null;
    public ?string $fallen_leaf = null;
    public ?string $family = null;
    public ?string $family_man_boy = null;
    public ?string $family_man_boy_boy = null;
    public ?string $family_man_girl = null;
    public ?string $family_man_girl_boy = null;
    public ?string $family_man_girl_girl = null;
    public ?string $family_man_man_boy = null;
    public ?string $family_man_man_boy_boy = null;
    public ?string $family_man_man_girl = null;
    public ?string $family_man_man_girl_boy = null;
    public ?string $family_man_man_girl_girl = null;
    public ?string $family_man_woman_boy = null;
    public ?string $family_man_woman_boy_boy = null;
    public ?string $family_man_woman_girl = null;
    public ?string $family_man_woman_girl_boy = null;
    public ?string $family_man_woman_girl_girl = null;
    public ?string $family_woman_boy = null;
    public ?string $family_woman_boy_boy = null;
    public ?string $family_woman_girl = null;
    public ?string $family_woman_girl_boy = null;
    public ?string $family_woman_girl_girl = null;
    public ?string $family_woman_woman_boy = null;
    public ?string $family_woman_woman_boy_boy = null;
    public ?string $family_woman_woman_girl = null;
    public ?string $family_woman_woman_girl_boy = null;
    public ?string $family_woman_woman_girl_girl = null;
    public ?string $farmer = null;
    public ?string $faroe_islands = null;
    public ?string $fast_forward = null;
    public ?string $fax = null;
    public ?string $fearful = null;
    public ?string $feather = null;
    public ?string $feelsgood = null;
    public ?string $feet = null;
    public ?string $female_detective = null;
    public ?string $female_sign = null;
    public ?string $ferris_wheel = null;
    public ?string $ferry = null;
    public ?string $field_hockey = null;
    public ?string $fiji = null;
    public ?string $file_cabinet = null;
    public ?string $file_folder = null;
    public ?string $film_projector = null;
    public ?string $film_strip = null;
    public ?string $finland = null;
    public ?string $finnadie = null;
    public ?string $fire = null;
    public ?string $fire_engine = null;
    public ?string $fire_extinguisher = null;
    public ?string $firecracker = null;
    public ?string $firefighter = null;
    public ?string $fireworks = null;
    public ?string $first_quarter_moon = null;
    public ?string $first_quarter_moon_with_face = null;
    public ?string $fish = null;
    public ?string $fish_cake = null;
    public ?string $fishing_pole_and_fish = null;
    public ?string $fishsticks = null;
    public ?string $fist = null;
    public ?string $fist_left = null;
    public ?string $fist_oncoming = null;
    public ?string $fist_raised = null;
    public ?string $fist_right = null;
    public ?string $five = null;
    public ?string $flags = null;
    public ?string $flamingo = null;
    public ?string $flashlight = null;
    public ?string $flat_shoe = null;
    public ?string $flatbread = null;
    public ?string $fleur_de_lis = null;
    public ?string $flight_arrival = null;
    public ?string $flight_departure = null;
    public ?string $flipper = null;
    public ?string $floppy_disk = null;
    public ?string $flower_playing_cards = null;
    public ?string $flushed = null;
    public ?string $fly = null;
    public ?string $flying_disc = null;
    public ?string $flying_saucer = null;
    public ?string $fog = null;
    public ?string $foggy = null;
    public ?string $fondue = null;
    public ?string $foot = null;
    public ?string $football = null;
    public ?string $footprints = null;
    public ?string $fork_and_knife = null;
    public ?string $fortune_cookie = null;
    public ?string $fountain = null;
    public ?string $fountain_pen = null;
    public ?string $four = null;
    public ?string $four_leaf_clover = null;
    public ?string $fox_face = null;
    public ?string $fr = null;
    public ?string $framed_picture = null;
    public ?string $free = null;
    public ?string $french_guiana = null;
    public ?string $french_polynesia = null;
    public ?string $french_southern_territories = null;
    public ?string $fried_egg = null;
    public ?string $fried_shrimp = null;
    public ?string $fries = null;
    public ?string $frog = null;
    public ?string $frowning = null;
    public ?string $frowning_face = null;
    public ?string $frowning_man = null;
    public ?string $frowning_person = null;
    public ?string $frowning_woman = null;
    public ?string $fu = null;
    public ?string $fuelpump = null;
    public ?string $full_moon = null;
    public ?string $full_moon_with_face = null;
    public ?string $funeral_urn = null;
    public ?string $gabon = null;
    public ?string $gambia = null;
    public ?string $game_die = null;
    public ?string $garlic = null;
    public ?string $gb = null;
    public ?string $gear = null;
    public ?string $gem = null;
    public ?string $gemini = null;
    public ?string $genie = null;
    public ?string $genie_man = null;
    public ?string $genie_woman = null;
    public ?string $georgia = null;
    public ?string $ghana = null;
    public ?string $ghost = null;
    public ?string $gibraltar = null;
    public ?string $gift = null;
    public ?string $gift_heart = null;
    public ?string $giraffe = null;
    public ?string $girl = null;
    public ?string $globe_with_meridians = null;
    public ?string $gloves = null;
    public ?string $goal_net = null;
    public ?string $goat = null;
    public ?string $goberserk = null;
    public ?string $godmode = null;
    public ?string $goggles = null;
    public ?string $golf = null;
    public ?string $golfing = null;
    public ?string $golfing_man = null;
    public ?string $golfing_woman = null;
    public ?string $gorilla = null;
    public ?string $grapes = null;
    public ?string $greece = null;
    public ?string $green_apple = null;
    public ?string $green_book = null;
    public ?string $green_circle = null;
    public ?string $green_heart = null;
    public ?string $green_salad = null;
    public ?string $green_square = null;
    public ?string $greenland = null;
    public ?string $grenada = null;
    public ?string $grey_exclamation = null;
    public ?string $grey_question = null;
    public ?string $grimacing = null;
    public ?string $grin = null;
    public ?string $grinning = null;
    public ?string $guadeloupe = null;
    public ?string $guam = null;
    public ?string $guard = null;
    public ?string $guardsman = null;
    public ?string $guardswoman = null;
    public ?string $guatemala = null;
    public ?string $guernsey = null;
    public ?string $guide_dog = null;
    public ?string $guinea = null;
    public ?string $guinea_bissau = null;
    public ?string $guitar = null;
    public ?string $gun = null;
    public ?string $guyana = null;
    public ?string $haircut = null;
    public ?string $haircut_man = null;
    public ?string $haircut_woman = null;
    public ?string $haiti = null;
    public ?string $hamburger = null;
    public ?string $hammer = null;
    public ?string $hammer_and_pick = null;
    public ?string $hammer_and_wrench = null;
    public ?string $hamster = null;
    public ?string $hand = null;
    public ?string $hand_over_mouth = null;
    public ?string $handbag = null;
    public ?string $handball_person = null;
    public ?string $handshake = null;
    public ?string $hankey = null;
    public ?string $hash = null;
    public ?string $hatched_chick = null;
    public ?string $hatching_chick = null;
    public ?string $headphones = null;
    public ?string $headstone = null;
    public ?string $health_worker = null;
    public ?string $hear_no_evil = null;
    public ?string $heard_mcdonald_islands = null;
    public ?string $heart = null;
    public ?string $heart_decoration = null;
    public ?string $heart_eyes = null;
    public ?string $heart_eyes_cat = null;
    public ?string $heart_on_fire = null;
    public ?string $heartbeat = null;
    public ?string $heartpulse = null;
    public ?string $hearts = null;
    public ?string $heavy_check_mark = null;
    public ?string $heavy_division_sign = null;
    public ?string $heavy_dollar_sign = null;
    public ?string $heavy_exclamation_mark = null;
    public ?string $heavy_heart_exclamation = null;
    public ?string $heavy_minus_sign = null;
    public ?string $heavy_multiplication_x = null;
    public ?string $heavy_plus_sign = null;
    public ?string $hedgehog = null;
    public ?string $helicopter = null;
    public ?string $herb = null;
    public ?string $hibiscus = null;
    public ?string $high_brightness = null;
    public ?string $high_heel = null;
    public ?string $hiking_boot = null;
    public ?string $hindu_temple = null;
    public ?string $hippopotamus = null;
    public ?string $hocho = null;
    public ?string $hole = null;
    public ?string $honduras = null;
    public ?string $honey_pot = null;
    public ?string $honeybee = null;
    public ?string $hong_kong = null;
    public ?string $hook = null;
    public ?string $horse = null;
    public ?string $horse_racing = null;
    public ?string $hospital = null;
    public ?string $hot_face = null;
    public ?string $hot_pepper = null;
    public ?string $hotdog = null;
    public ?string $hotel = null;
    public ?string $hotsprings = null;
    public ?string $hourglass = null;
    public ?string $hourglass_flowing_sand = null;
    public ?string $house = null;
    public ?string $house_with_garden = null;
    public ?string $houses = null;
    public ?string $hugs = null;
    public ?string $hungary = null;
    public ?string $hurtrealbad = null;
    public ?string $hushed = null;
    public ?string $hut = null;
    public ?string $ice_cream = null;
    public ?string $ice_cube = null;
    public ?string $ice_hockey = null;
    public ?string $ice_skate = null;
    public ?string $icecream = null;
    public ?string $iceland = null;
    public string $id;
    public ?string $ideograph_advantage = null;
    public ?string $imp = null;
    public ?string $inbox_tray = null;
    public ?string $incoming_envelope = null;
    public ?string $india = null;
    public ?string $indonesia = null;
    public ?string $infinity = null;
    public ?string $information_desk_person = null;
    public ?string $information_source = null;
    public ?string $innocent = null;
    public ?string $interrobang = null;
    public ?string $iphone = null;
    public ?string $iran = null;
    public ?string $iraq = null;
    public ?string $ireland = null;
    public ?string $isle_of_man = null;
    public ?string $israel = null;
    public ?string $it = null;
    public ?string $izakaya_lantern = null;
    public ?string $jack_o_lantern = null;
    public ?string $jamaica = null;
    public ?string $japan = null;
    public ?string $japanese_castle = null;
    public ?string $japanese_goblin = null;
    public ?string $japanese_ogre = null;
    public ?string $jeans = null;
    public ?string $jersey = null;
    public ?string $jigsaw = null;
    public ?string $jordan = null;
    public ?string $joy = null;
    public ?string $joy_cat = null;
    public ?string $joystick = null;
    public ?string $jp = null;
    public ?string $judge = null;
    public ?string $juggling_person = null;
    public ?string $kangaroo = null;
    public ?string $kazakhstan = null;
    public ?string $kenya = null;
    public ?string $key = null;
    public ?string $keyboard = null;
    public ?string $keycap_ten = null;
    public ?string $kick_scooter = null;
    public ?string $kimono = null;
    public ?string $kiribati = null;
    public ?string $kiss = null;
    public ?string $kissing = null;
    public ?string $kissing_cat = null;
    public ?string $kissing_closed_eyes = null;
    public ?string $kissing_heart = null;
    public ?string $kissing_smiling_eyes = null;
    public ?string $kite = null;
    public ?string $kiwi_fruit = null;
    public ?string $kneeling_man = null;
    public ?string $kneeling_person = null;
    public ?string $kneeling_woman = null;
    public ?string $knife = null;
    public ?string $knot = null;
    public ?string $koala = null;
    public ?string $koko = null;
    public ?string $kosovo = null;
    public ?string $kr = null;
    public ?string $kuwait = null;
    public ?string $kyrgyzstan = null;
    public ?string $lab_coat = null;
    public ?string $label = null;
    public ?string $lacrosse = null;
    public ?string $ladder = null;
    public ?string $lady_beetle = null;
    public ?string $lantern = null;
    public ?string $laos = null;
    public ?string $large_blue_circle = null;
    public ?string $large_blue_diamond = null;
    public ?string $large_orange_diamond = null;
    public ?string $last_quarter_moon = null;
    public ?string $last_quarter_moon_with_face = null;
    public ?string $latin_cross = null;
    public ?string $latvia = null;
    public ?string $laughing = null;
    public ?string $leafy_green = null;
    public ?string $leaves = null;
    public ?string $lebanon = null;
    public ?string $ledger = null;
    public ?string $left_luggage = null;
    public ?string $left_right_arrow = null;
    public ?string $left_speech_bubble = null;
    public ?string $leftwards_arrow_with_hook = null;
    public ?string $leg = null;
    public ?string $lemon = null;
    public ?string $leo = null;
    public ?string $leopard = null;
    public ?string $lesotho = null;
    public ?string $level_slider = null;
    public ?string $liberia = null;
    public ?string $libra = null;
    public ?string $libya = null;
    public ?string $liechtenstein = null;
    public ?string $light_rail = null;
    public ?string $link = null;
    public ?string $lion = null;
    public ?string $lips = null;
    public ?string $lipstick = null;
    public ?string $lithuania = null;
    public ?string $lizard = null;
    public ?string $llama = null;
    public ?string $lobster = null;
    public ?string $lock = null;
    public ?string $lock_with_ink_pen = null;
    public ?string $lollipop = null;
    public ?string $long_drum = null;
    public ?string $loop = null;
    public ?string $lotion_bottle = null;
    public ?string $lotus_position = null;
    public ?string $lotus_position_man = null;
    public ?string $lotus_position_woman = null;
    public ?string $loud_sound = null;
    public ?string $loudspeaker = null;
    public ?string $love_hotel = null;
    public ?string $love_letter = null;
    public ?string $love_you_gesture = null;
    public ?string $low_brightness = null;
    public ?string $luggage = null;
    public ?string $lungs = null;
    public ?string $luxembourg = null;
    public ?string $lying_face = null;
    public ?string $m = null;
    public ?string $macau = null;
    public ?string $macedonia = null;
    public ?string $madagascar = null;
    public ?string $mag = null;
    public ?string $mag_right = null;
    public ?string $mage = null;
    public ?string $mage_man = null;
    public ?string $mage_woman = null;
    public ?string $magic_wand = null;
    public ?string $magnet = null;
    public ?string $mahjong = null;
    public ?string $mailbox = null;
    public ?string $mailbox_closed = null;
    public ?string $mailbox_with_mail = null;
    public ?string $mailbox_with_no_mail = null;
    public ?string $malawi = null;
    public ?string $malaysia = null;
    public ?string $maldives = null;
    public ?string $male_detective = null;
    public ?string $male_sign = null;
    public ?string $mali = null;
    public ?string $malta = null;
    public ?string $mammoth = null;
    public ?string $man = null;
    public ?string $man_artist = null;
    public ?string $man_astronaut = null;
    public ?string $man_beard = null;
    public ?string $man_cartwheeling = null;
    public ?string $man_cook = null;
    public ?string $man_dancing = null;
    public ?string $man_facepalming = null;
    public ?string $man_factory_worker = null;
    public ?string $man_farmer = null;
    public ?string $man_feeding_baby = null;
    public ?string $man_firefighter = null;
    public ?string $man_health_worker = null;
    public ?string $man_in_manual_wheelchair = null;
    public ?string $man_in_motorized_wheelchair = null;
    public ?string $man_in_tuxedo = null;
    public ?string $man_judge = null;
    public ?string $man_juggling = null;
    public ?string $man_mechanic = null;
    public ?string $man_office_worker = null;
    public ?string $man_pilot = null;
    public ?string $man_playing_handball = null;
    public ?string $man_playing_water_polo = null;
    public ?string $man_scientist = null;
    public ?string $man_shrugging = null;
    public ?string $man_singer = null;
    public ?string $man_student = null;
    public ?string $man_teacher = null;
    public ?string $man_technologist = null;
    public ?string $man_with_gua_pi_mao = null;
    public ?string $man_with_probing_cane = null;
    public ?string $man_with_turban = null;
    public ?string $man_with_veil = null;
    public ?string $mandarin = null;
    public ?string $mango = null;
    public ?string $mans_shoe = null;
    public ?string $mantelpiece_clock = null;
    public ?string $manual_wheelchair = null;
    public ?string $maple_leaf = null;
    public ?string $marshall_islands = null;
    public ?string $martial_arts_uniform = null;
    public ?string $martinique = null;
    public ?string $mask = null;
    public ?string $massage = null;
    public ?string $massage_man = null;
    public ?string $massage_woman = null;
    public ?string $mate = null;
    public ?string $mauritania = null;
    public ?string $mauritius = null;
    public ?string $mayotte = null;
    public ?string $meat_on_bone = null;
    public ?string $mechanic = null;
    public ?string $mechanical_arm = null;
    public ?string $mechanical_leg = null;
    public ?string $medal_military = null;
    public ?string $medal_sports = null;
    public ?string $medical_symbol = null;
    public ?string $mega = null;
    public ?string $melon = null;
    public ?string $memo = null;
    public ?string $men_wrestling = null;
    public ?string $mending_heart = null;
    public ?string $menorah = null;
    public ?string $mens = null;
    public ?string $mermaid = null;
    public ?string $merman = null;
    public ?string $merperson = null;
    public ?string $metal = null;
    public ?string $metro = null;
    public ?string $mexico = null;
    public ?string $microbe = null;
    public ?string $micronesia = null;
    public ?string $microphone = null;
    public ?string $microscope = null;
    public ?string $middle_finger = null;
    public ?string $military_helmet = null;
    public ?string $milk_glass = null;
    public ?string $milky_way = null;
    public ?string $minibus = null;
    public ?string $minidisc = null;
    public ?string $mirror = null;
    public ?string $mobile_phone_off = null;
    public ?string $moldova = null;
    public ?string $monaco = null;
    public ?string $money_mouth_face = null;
    public ?string $money_with_wings = null;
    public ?string $moneybag = null;
    public ?string $mongolia = null;
    public ?string $monkey = null;
    public ?string $monkey_face = null;
    public ?string $monocle_face = null;
    public ?string $monorail = null;
    public ?string $montenegro = null;
    public ?string $montserrat = null;
    public ?string $moon = null;
    public ?string $moon_cake = null;
    public ?string $morocco = null;
    public ?string $mortar_board = null;
    public ?string $mosque = null;
    public ?string $mosquito = null;
    public ?string $motor_boat = null;
    public ?string $motor_scooter = null;
    public ?string $motorcycle = null;
    public ?string $motorized_wheelchair = null;
    public ?string $motorway = null;
    public ?string $mount_fuji = null;
    public ?string $mountain = null;
    public ?string $mountain_bicyclist = null;
    public ?string $mountain_biking_man = null;
    public ?string $mountain_biking_woman = null;
    public ?string $mountain_cableway = null;
    public ?string $mountain_railway = null;
    public ?string $mountain_snow = null;
    public ?string $mouse = null;
    public ?string $mouse2 = null;
    public ?string $mouse_trap = null;
    public ?string $movie_camera = null;
    public ?string $moyai = null;
    public ?string $mozambique = null;
    public ?string $mrs_claus = null;
    public ?string $muscle = null;
    public ?string $mushroom = null;
    public ?string $musical_keyboard = null;
    public ?string $musical_note = null;
    public ?string $musical_score = null;
    public ?string $mute = null;
    public ?string $mx_claus = null;
    public ?string $myanmar = null;
    public ?string $nail_care = null;
    public ?string $name_badge = null;
    public ?string $namibia = null;
    public ?string $national_park = null;
    public ?string $nauru = null;
    public ?string $nauseated_face = null;
    public ?string $nazar_amulet = null;
    public ?string $neckbeard = null;
    public ?string $necktie = null;
    public ?string $negative_squared_cross_mark = null;
    public ?string $nepal = null;
    public ?string $nerd_face = null;
    public ?string $nesting_dolls = null;
    public ?string $netherlands = null;
    public ?string $neutral_face = null;
    public ?string $new = null;
    public ?string $new_caledonia = null;
    public ?string $new_moon = null;
    public ?string $new_moon_with_face = null;
    public ?string $new_zealand = null;
    public ?string $newspaper = null;
    public ?string $newspaper_roll = null;
    public ?string $next_track_button = null;
    public ?string $ng = null;
    public ?string $ng_man = null;
    public ?string $ng_woman = null;
    public ?string $nicaragua = null;
    public ?string $niger = null;
    public ?string $nigeria = null;
    public ?string $night_with_stars = null;
    public ?string $nine = null;
    public ?string $ninja = null;
    public ?string $niue = null;
    public ?string $no_bell = null;
    public ?string $no_bicycles = null;
    public ?string $no_entry = null;
    public ?string $no_entry_sign = null;
    public ?string $no_good = null;
    public ?string $no_good_man = null;
    public ?string $no_good_woman = null;
    public ?string $no_mobile_phones = null;
    public ?string $no_mouth = null;
    public ?string $no_pedestrians = null;
    public ?string $no_smoking = null;
    public ?string $nonpotable_water = null;
    public ?string $norfolk_island = null;
    public ?string $north_korea = null;
    public ?string $northern_mariana_islands = null;
    public ?string $norway = null;
    public ?string $nose = null;
    public ?string $notebook = null;
    public ?string $notebook_with_decorative_cover = null;
    public ?string $notes = null;
    public ?string $nut_and_bolt = null;
    public ?string $o = null;
    public ?string $o2 = null;
    public ?string $ocean = null;
    public ?string $octocat = null;
    public ?string $octopus = null;
    public ?string $oden = null;
    public ?string $office = null;
    public ?string $office_worker = null;
    public ?string $oil_drum = null;
    public ?string $ok = null;
    public ?string $ok_hand = null;
    public ?string $ok_man = null;
    public ?string $ok_person = null;
    public ?string $ok_woman = null;
    public ?string $old_key = null;
    public ?string $older_adult = null;
    public ?string $older_man = null;
    public ?string $older_woman = null;
    public ?string $olive = null;
    public ?string $om = null;
    public ?string $oman = null;
    public ?string $on = null;
    public ?string $oncoming_automobile = null;
    public ?string $oncoming_bus = null;
    public ?string $oncoming_police_car = null;
    public ?string $oncoming_taxi = null;
    public ?string $one = null;
    public ?string $one_piece_swimsuit = null;
    public ?string $onion = null;
    public ?string $open_book = null;
    public ?string $open_file_folder = null;
    public ?string $open_hands = null;
    public ?string $open_mouth = null;
    public ?string $open_umbrella = null;
    public ?string $ophiuchus = null;
    public ?string $orange = null;
    public ?string $orange_book = null;
    public ?string $orange_circle = null;
    public ?string $orange_heart = null;
    public ?string $orange_square = null;
    public ?string $orangutan = null;
    public ?string $orthodox_cross = null;
    public ?string $otter = null;
    public ?string $outbox_tray = null;
    public ?string $owl = null;
    public ?string $ox = null;
    public ?string $oyster = null;
    public ?string $package = null;
    public ?string $page_facing_up = null;
    public ?string $page_with_curl = null;
    public ?string $pager = null;
    public ?string $paintbrush = null;
    public ?string $pakistan = null;
    public ?string $palau = null;
    public ?string $palestinian_territories = null;
    public ?string $palm_tree = null;
    public ?string $palms_up_together = null;
    public ?string $panama = null;
    public ?string $pancakes = null;
    public ?string $panda_face = null;
    public ?string $paperclip = null;
    public ?string $paperclips = null;
    public ?string $papua_new_guinea = null;
    public ?string $parachute = null;
    public ?string $paraguay = null;
    public ?string $parasol_on_ground = null;
    public ?string $parking = null;
    public ?string $parrot = null;
    public ?string $part_alternation_mark = null;
    public ?string $partly_sunny = null;
    public ?string $partying_face = null;
    public ?string $passenger_ship = null;
    public ?string $passport_control = null;
    public ?string $pause_button = null;
    public ?string $paw_prints = null;
    public ?string $peace_symbol = null;
    public ?string $peach = null;
    public ?string $peacock = null;
    public ?string $peanuts = null;
    public ?string $pear = null;
    public ?string $pen = null;
    public ?string $pencil = null;
    public ?string $pencil2 = null;
    public ?string $penguin = null;
    public ?string $pensive = null;
    public ?string $people_holding_hands = null;
    public ?string $people_hugging = null;
    public ?string $performing_arts = null;
    public ?string $persevere = null;
    public ?string $person_bald = null;
    public ?string $person_curly_hair = null;
    public ?string $person_feeding_baby = null;
    public ?string $person_fencing = null;
    public ?string $person_in_manual_wheelchair = null;
    public ?string $person_in_motorized_wheelchair = null;
    public ?string $person_in_tuxedo = null;
    public ?string $person_red_hair = null;
    public ?string $person_white_hair = null;
    public ?string $person_with_probing_cane = null;
    public ?string $person_with_turban = null;
    public ?string $person_with_veil = null;
    public ?string $peru = null;
    public ?string $petri_dish = null;
    public ?string $philippines = null;
    public ?string $phone = null;
    public ?string $pick = null;
    public ?string $pickup_truck = null;
    public ?string $pie = null;
    public ?string $pig = null;
    public ?string $pig2 = null;
    public ?string $pig_nose = null;
    public ?string $pill = null;
    public ?string $pilot = null;
    public ?string $pinata = null;
    public ?string $pinched_fingers = null;
    public ?string $pinching_hand = null;
    public ?string $pineapple = null;
    public ?string $ping_pong = null;
    public ?string $pirate_flag = null;
    public ?string $pisces = null;
    public ?string $pitcairn_islands = null;
    public ?string $pizza = null;
    public ?string $placard = null;
    public ?string $place_of_worship = null;
    public ?string $plate_with_cutlery = null;
    public ?string $play_or_pause_button = null;
    public ?string $pleading_face = null;
    public ?string $plunger = null;
    public ?string $point_down = null;
    public ?string $point_left = null;
    public ?string $point_right = null;
    public ?string $point_up = null;
    public ?string $point_up_2 = null;
    public ?string $poland = null;
    public ?string $polar_bear = null;
    public ?string $police_car = null;
    public ?string $police_officer = null;
    public ?string $policeman = null;
    public ?string $policewoman = null;
    public ?string $poodle = null;
    public ?string $poop = null;
    public ?string $popcorn = null;
    public ?string $portugal = null;
    public ?string $post_office = null;
    public ?string $postal_horn = null;
    public ?string $postbox = null;
    public ?string $potable_water = null;
    public ?string $potato = null;
    public ?string $potted_plant = null;
    public ?string $pouch = null;
    public ?string $poultry_leg = null;
    public ?string $pound = null;
    public ?string $pout = null;
    public ?string $pouting_cat = null;
    public ?string $pouting_face = null;
    public ?string $pouting_man = null;
    public ?string $pouting_woman = null;
    public ?string $pray = null;
    public ?string $prayer_beads = null;
    public ?string $pregnant_woman = null;
    public ?string $pretzel = null;
    public ?string $previous_track_button = null;
    public ?string $prince = null;
    public ?string $princess = null;
    public ?string $printer = null;
    public ?string $probing_cane = null;
    public ?string $puerto_rico = null;
    public ?string $punch = null;
    public ?string $purple_circle = null;
    public ?string $purple_heart = null;
    public ?string $purple_square = null;
    public ?string $purse = null;
    public ?string $pushpin = null;
    public ?string $put_litter_in_its_place = null;
    public ?string $qatar = null;
    public ?string $question = null;
    public ?string $rabbit = null;
    public ?string $rabbit2 = null;
    public ?string $raccoon = null;
    public ?string $racehorse = null;
    public ?string $racing_car = null;
    public ?string $radio = null;
    public ?string $radio_button = null;
    public ?string $radioactive = null;
    public ?string $rage = null;
    public ?string $rage1 = null;
    public ?string $rage2 = null;
    public ?string $rage3 = null;
    public ?string $rage4 = null;
    public ?string $railway_car = null;
    public ?string $railway_track = null;
    public ?string $rainbow = null;
    public ?string $rainbow_flag = null;
    public ?string $raised_back_of_hand = null;
    public ?string $raised_eyebrow = null;
    public ?string $raised_hand = null;
    public ?string $raised_hand_with_fingers_splayed = null;
    public ?string $raised_hands = null;
    public ?string $raising_hand = null;
    public ?string $raising_hand_man = null;
    public ?string $raising_hand_woman = null;
    public ?string $ram = null;
    public ?string $ramen = null;
    public ?string $rat = null;
    public ?string $razor = null;
    public ?string $receipt = null;
    public ?string $record_button = null;
    public ?string $recycle = null;
    public ?string $red_car = null;
    public ?string $red_circle = null;
    public ?string $red_envelope = null;
    public ?string $red_haired_man = null;
    public ?string $red_haired_woman = null;
    public ?string $red_square = null;
    public ?string $registered = null;
    public ?string $relaxed = null;
    public ?string $relieved = null;
    public ?string $reminder_ribbon = null;
    public ?string $repeat = null;
    public ?string $repeat_one = null;
    public ?string $rescue_worker_helmet = null;
    public ?string $restroom = null;
    public ?string $reunion = null;
    public ?string $revolving_hearts = null;
    public ?string $rewind = null;
    public ?string $rhinoceros = null;
    public ?string $ribbon = null;
    public ?string $rice = null;
    public ?string $rice_ball = null;
    public ?string $rice_cracker = null;
    public ?string $rice_scene = null;
    public ?string $right_anger_bubble = null;
    public ?string $ring = null;
    public ?string $ringed_planet = null;
    public ?string $robot = null;
    public ?string $rock = null;
    public ?string $rocket = null;
    public ?string $rofl = null;
    public ?string $roll_eyes = null;
    public ?string $roll_of_paper = null;
    public ?string $roller_coaster = null;
    public ?string $roller_skate = null;
    public ?string $romania = null;
    public ?string $rooster = null;
    public ?string $rose = null;
    public ?string $rosette = null;
    public ?string $rotating_light = null;
    public ?string $round_pushpin = null;
    public ?string $rowboat = null;
    public ?string $rowing_man = null;
    public ?string $rowing_woman = null;
    public ?string $ru = null;
    public ?string $rugby_football = null;
    public ?string $runner = null;
    public ?string $running = null;
    public ?string $running_man = null;
    public ?string $running_shirt_with_sash = null;
    public ?string $running_woman = null;
    public ?string $rwanda = null;
    public ?string $sa = null;
    public ?string $safety_pin = null;
    public ?string $safety_vest = null;
    public ?string $sagittarius = null;
    public ?string $sailboat = null;
    public ?string $sake = null;
    public ?string $salt = null;
    public ?string $samoa = null;
    public ?string $san_marino = null;
    public ?string $sandal = null;
    public ?string $sandwich = null;
    public ?string $santa = null;
    public ?string $sao_tome_principe = null;
    public ?string $sari = null;
    public ?string $sassy_man = null;
    public ?string $sassy_woman = null;
    public ?string $satellite = null;
    public ?string $satisfied = null;
    public ?string $saudi_arabia = null;
    public ?string $sauna_man = null;
    public ?string $sauna_person = null;
    public ?string $sauna_woman = null;
    public ?string $sauropod = null;
    public ?string $saxophone = null;
    public ?string $scarf = null;
    public ?string $school = null;
    public ?string $school_satchel = null;
    public ?string $scientist = null;
    public ?string $scissors = null;
    public ?string $scorpion = null;
    public ?string $scorpius = null;
    public ?string $scotland = null;
    public ?string $scream = null;
    public ?string $scream_cat = null;
    public ?string $screwdriver = null;
    public ?string $scroll = null;
    public ?string $seal = null;
    public ?string $seat = null;
    public ?string $secret = null;
    public ?string $see_no_evil = null;
    public ?string $seedling = null;
    public ?string $selfie = null;
    public ?string $senegal = null;
    public ?string $serbia = null;
    public ?string $service_dog = null;
    public ?string $seven = null;
    public ?string $sewing_needle = null;
    public ?string $seychelles = null;
    public ?string $shallow_pan_of_food = null;
    public ?string $shamrock = null;
    public ?string $shark = null;
    public ?string $shaved_ice = null;
    public ?string $sheep = null;
    public ?string $shell = null;
    public ?string $shield = null;
    public ?string $shinto_shrine = null;
    public ?string $ship = null;
    public ?string $shipit = null;
    public ?string $shirt = null;
    public ?string $shoe = null;
    public ?string $shopping = null;
    public ?string $shopping_cart = null;
    public ?string $shorts = null;
    public ?string $shower = null;
    public ?string $shrimp = null;
    public ?string $shrug = null;
    public ?string $shushing_face = null;
    public ?string $sierra_leone = null;
    public ?string $signal_strength = null;
    public ?string $singapore = null;
    public ?string $singer = null;
    public ?string $sint_maarten = null;
    public ?string $six = null;
    public ?string $six_pointed_star = null;
    public ?string $skateboard = null;
    public ?string $ski = null;
    public ?string $skier = null;
    public ?string $skull = null;
    public ?string $skull_and_crossbones = null;
    public ?string $skunk = null;
    public ?string $sled = null;
    public ?string $sleeping = null;
    public ?string $sleeping_bed = null;
    public ?string $sleepy = null;
    public ?string $slightly_frowning_face = null;
    public ?string $slightly_smiling_face = null;
    public ?string $slot_machine = null;
    public ?string $sloth = null;
    public ?string $slovakia = null;
    public ?string $slovenia = null;
    public ?string $small_airplane = null;
    public ?string $small_blue_diamond = null;
    public ?string $small_orange_diamond = null;
    public ?string $small_red_triangle = null;
    public ?string $small_red_triangle_down = null;
    public ?string $smile = null;
    public ?string $smile_cat = null;
    public ?string $smiley = null;
    public ?string $smiley_cat = null;
    public ?string $smiling_face_with_tear = null;
    public ?string $smiling_face_with_three_hearts = null;
    public ?string $smiling_imp = null;
    public ?string $smirk = null;
    public ?string $smirk_cat = null;
    public ?string $smoking = null;
    public ?string $snail = null;
    public ?string $snake = null;
    public ?string $sneezing_face = null;
    public ?string $snowboarder = null;
    public ?string $snowflake = null;
    public ?string $snowman = null;
    public ?string $snowman_with_snow = null;
    public ?string $soap = null;
    public ?string $sob = null;
    public ?string $soccer = null;
    public ?string $socks = null;
    public ?string $softball = null;
    public ?string $solomon_islands = null;
    public ?string $somalia = null;
    public ?string $soon = null;
    public ?string $sos = null;
    public ?string $sound = null;
    public ?string $south_africa = null;
    public ?string $south_georgia_south_sandwich_islands = null;
    public ?string $south_sudan = null;
    public ?string $space_invader = null;
    public ?string $spades = null;
    public ?string $spaghetti = null;
    public ?string $sparkle = null;
    public ?string $sparkler = null;
    public ?string $sparkles = null;
    public ?string $sparkling_heart = null;
    public ?string $speak_no_evil = null;
    public ?string $speaker = null;
    public ?string $speaking_head = null;
    public ?string $speech_balloon = null;
    public ?string $speedboat = null;
    public ?string $spider = null;
    public ?string $spider_web = null;
    public ?string $spiral_calendar = null;
    public ?string $spiral_notepad = null;
    public ?string $sponge = null;
    public ?string $spoon = null;
    public ?string $squid = null;
    public ?string $sri_lanka = null;
    public ?string $st_barthelemy = null;
    public ?string $st_helena = null;
    public ?string $st_kitts_nevis = null;
    public ?string $st_lucia = null;
    public ?string $st_martin = null;
    public ?string $st_pierre_miquelon = null;
    public ?string $st_vincent_grenadines = null;
    public ?string $stadium = null;
    public ?string $standing_man = null;
    public ?string $standing_person = null;
    public ?string $standing_woman = null;
    public ?string $star = null;
    public ?string $star2 = null;
    public ?string $star_and_crescent = null;
    public ?string $star_of_david = null;
    public ?string $star_struck = null;
    public ?string $stars = null;
    public ?string $station = null;
    public ?string $statue_of_liberty = null;
    public ?string $steam_locomotive = null;
    public ?string $stethoscope = null;
    public ?string $stew = null;
    public ?string $stop_button = null;
    public ?string $stop_sign = null;
    public ?string $stopwatch = null;
    public ?string $straight_ruler = null;
    public ?string $strawberry = null;
    public ?string $stuck_out_tongue = null;
    public ?string $stuck_out_tongue_closed_eyes = null;
    public ?string $stuck_out_tongue_winking_eye = null;
    public ?string $student = null;
    public ?string $studio_microphone = null;
    public ?string $stuffed_flatbread = null;
    public ?string $sudan = null;
    public ?string $sun_behind_large_cloud = null;
    public ?string $sun_behind_rain_cloud = null;
    public ?string $sun_behind_small_cloud = null;
    public ?string $sun_with_face = null;
    public ?string $sunflower = null;
    public ?string $sunglasses = null;
    public ?string $sunny = null;
    public ?string $sunrise = null;
    public ?string $sunrise_over_mountains = null;
    public ?string $superhero = null;
    public ?string $superhero_man = null;
    public ?string $superhero_woman = null;
    public ?string $supervillain = null;
    public ?string $supervillain_man = null;
    public ?string $supervillain_woman = null;
    public ?string $surfer = null;
    public ?string $surfing_man = null;
    public ?string $surfing_woman = null;
    public ?string $suriname = null;
    public ?string $sushi = null;
    public ?string $suspect = null;
    public ?string $suspension_railway = null;
    public ?string $svalbard_jan_mayen = null;
    public ?string $swan = null;
    public ?string $swaziland = null;
    public ?string $sweat = null;
    public ?string $sweat_drops = null;
    public ?string $sweat_smile = null;
    public ?string $sweden = null;
    public ?string $sweet_potato = null;
    public ?string $swim_brief = null;
    public ?string $swimmer = null;
    public ?string $swimming_man = null;
    public ?string $swimming_woman = null;
    public ?string $switzerland = null;
    public ?string $symbols = null;
    public ?string $synagogue = null;
    public ?string $syria = null;
    public ?string $syringe = null;
    public ?string $taco = null;
    public ?string $tada = null;
    public ?string $taiwan = null;
    public ?string $tajikistan = null;
    public ?string $takeout_box = null;
    public ?string $tamale = null;
    public ?string $tanabata_tree = null;
    public ?string $tangerine = null;
    public ?string $tanzania = null;
    public ?string $taurus = null;
    public ?string $taxi = null;
    public ?string $tea = null;
    public ?string $teacher = null;
    public ?string $teapot = null;
    public ?string $technologist = null;
    public ?string $teddy_bear = null;
    public ?string $telephone = null;
    public ?string $telephone_receiver = null;
    public ?string $telescope = null;
    public ?string $tennis = null;
    public ?string $tent = null;
    public ?string $test_tube = null;
    public ?string $thailand = null;
    public ?string $thermometer = null;
    public ?string $thinking = null;
    public ?string $thong_sandal = null;
    public ?string $thought_balloon = null;
    public ?string $thread = null;
    public ?string $three = null;
    public ?string $thumbsdown = null;
    public ?string $thumbsup = null;
    public ?string $ticket = null;
    public ?string $tickets = null;
    public ?string $tiger = null;
    public ?string $tiger2 = null;
    public ?string $timer_clock = null;
    public ?string $timor_leste = null;
    public ?string $tipping_hand_man = null;
    public ?string $tipping_hand_person = null;
    public ?string $tipping_hand_woman = null;
    public ?string $tired_face = null;
    public ?string $tm = null;
    public ?string $togo = null;
    public ?string $toilet = null;
    public ?string $tokelau = null;
    public ?string $tokyo_tower = null;
    public ?string $tomato = null;
    public ?string $tonga = null;
    public ?string $tongue = null;
    public ?string $toolbox = null;
    public ?string $tooth = null;
    public ?string $toothbrush = null;
    public ?string $top = null;
    public ?string $tophat = null;
    public ?string $tornado = null;
    public ?string $tr = null;
    public ?string $trackball = null;
    public ?string $tractor = null;
    public ?string $traffic_light = null;
    public ?string $train = null;
    public ?string $train2 = null;
    public ?string $tram = null;
    public ?string $transgender_flag = null;
    public ?string $transgender_symbol = null;
    public ?string $trex = null;
    public ?string $triangular_flag_on_post = null;
    public ?string $triangular_ruler = null;
    public ?string $trident = null;
    public ?string $trinidad_tobago = null;
    public ?string $tristan_da_cunha = null;
    public ?string $triumph = null;
    public ?string $trolleybus = null;
    public ?string $trollface = null;
    public ?string $trophy = null;
    public ?string $tropical_drink = null;
    public ?string $tropical_fish = null;
    public ?string $truck = null;
    public ?string $trumpet = null;
    public ?string $tshirt = null;
    public ?string $tulip = null;
    public ?string $tumbler_glass = null;
    public ?string $tunisia = null;
    public ?string $turkey = null;
    public ?string $turkmenistan = null;
    public ?string $turks_caicos_islands = null;
    public ?string $turtle = null;
    public ?string $tuvalu = null;
    public ?string $tv = null;
    public ?string $twisted_rightwards_arrows = null;
    public ?string $two = null;
    public ?string $two_hearts = null;
    public ?string $two_men_holding_hands = null;
    public ?string $two_women_holding_hands = null;
    public ?string $u5272 = null;
    public ?string $u5408 = null;
    public ?string $u55b6 = null;
    public ?string $u6307 = null;
    public ?string $u6708 = null;
    public ?string $u6709 = null;
    public ?string $u6e80 = null;
    public ?string $u7121 = null;
    public ?string $u7533 = null;
    public ?string $u7981 = null;
    public ?string $u7a7a = null;
    public ?string $uganda = null;
    public ?string $uk = null;
    public ?string $ukraine = null;
    public ?string $umbrella = null;
    public ?string $unamused = null;
    public ?string $underage = null;
    public ?string $unicorn = null;
    public ?string $united_arab_emirates = null;
    public ?string $united_nations = null;
    public ?string $unlock = null;
    public ?string $up = null;
    public ?string $upside_down_face = null;
    public ?string $uruguay = null;
    public ?string $us = null;
    public ?string $us_outlying_islands = null;
    public ?string $us_virgin_islands = null;
    public ?string $uzbekistan = null;
    public ?string $v = null;
    public ?string $vampire = null;
    public ?string $vampire_man = null;
    public ?string $vampire_woman = null;
    public ?string $vanuatu = null;
    public ?string $vatican_city = null;
    public ?string $venezuela = null;
    public ?string $vertical_traffic_light = null;
    public ?string $vhs = null;
    public ?string $vibration_mode = null;
    public ?string $video_camera = null;
    public ?string $video_game = null;
    public ?string $vietnam = null;
    public ?string $violin = null;
    public ?string $virgo = null;
    public ?string $volcano = null;
    public ?string $volleyball = null;
    public ?string $vomiting_face = null;
    public ?string $vs = null;
    public ?string $vulcan_salute = null;
    public ?string $waffle = null;
    public ?string $wales = null;
    public ?string $walking = null;
    public ?string $walking_man = null;
    public ?string $walking_woman = null;
    public ?string $wallis_futuna = null;
    public ?string $waning_crescent_moon = null;
    public ?string $waning_gibbous_moon = null;
    public ?string $warning = null;
    public ?string $wastebasket = null;
    public ?string $watch = null;
    public ?string $water_buffalo = null;
    public ?string $water_polo = null;
    public ?string $watermelon = null;
    public ?string $wave = null;
    public ?string $wavy_dash = null;
    public ?string $waxing_crescent_moon = null;
    public ?string $waxing_gibbous_moon = null;
    public ?string $wc = null;
    public ?string $weary = null;
    public ?string $wedding = null;
    public ?string $weight_lifting = null;
    public ?string $weight_lifting_man = null;
    public ?string $weight_lifting_woman = null;
    public ?string $western_sahara = null;
    public ?string $whale = null;
    public ?string $whale2 = null;
    public ?string $wheel_of_dharma = null;
    public ?string $wheelchair = null;
    public ?string $white_check_mark = null;
    public ?string $white_circle = null;
    public ?string $white_flag = null;
    public ?string $white_flower = null;
    public ?string $white_haired_man = null;
    public ?string $white_haired_woman = null;
    public ?string $white_heart = null;
    public ?string $white_large_square = null;
    public ?string $white_medium_small_square = null;
    public ?string $white_medium_square = null;
    public ?string $white_small_square = null;
    public ?string $white_square_button = null;
    public ?string $wilted_flower = null;
    public ?string $wind_chime = null;
    public ?string $wind_face = null;
    public ?string $window = null;
    public ?string $wine_glass = null;
    public ?string $wink = null;
    public ?string $wolf = null;
    public ?string $woman = null;
    public ?string $woman_artist = null;
    public ?string $woman_astronaut = null;
    public ?string $woman_beard = null;
    public ?string $woman_cartwheeling = null;
    public ?string $woman_cook = null;
    public ?string $woman_dancing = null;
    public ?string $woman_facepalming = null;
    public ?string $woman_factory_worker = null;
    public ?string $woman_farmer = null;
    public ?string $woman_feeding_baby = null;
    public ?string $woman_firefighter = null;
    public ?string $woman_health_worker = null;
    public ?string $woman_in_manual_wheelchair = null;
    public ?string $woman_in_motorized_wheelchair = null;
    public ?string $woman_in_tuxedo = null;
    public ?string $woman_judge = null;
    public ?string $woman_juggling = null;
    public ?string $woman_mechanic = null;
    public ?string $woman_office_worker = null;
    public ?string $woman_pilot = null;
    public ?string $woman_playing_handball = null;
    public ?string $woman_playing_water_polo = null;
    public ?string $woman_scientist = null;
    public ?string $woman_shrugging = null;
    public ?string $woman_singer = null;
    public ?string $woman_student = null;
    public ?string $woman_teacher = null;
    public ?string $woman_technologist = null;
    public ?string $woman_with_headscarf = null;
    public ?string $woman_with_probing_cane = null;
    public ?string $woman_with_turban = null;
    public ?string $woman_with_veil = null;
    public ?string $womans_clothes = null;
    public ?string $womans_hat = null;
    public ?string $women_wrestling = null;
    public ?string $womens = null;
    public ?string $wood = null;
    public ?string $woozy_face = null;
    public ?string $world_map = null;
    public ?string $worm = null;
    public ?string $worried = null;
    public ?string $wrench = null;
    public ?string $wrestling = null;
    public ?string $writing_hand = null;
    public ?string $x = null;
    public ?string $yarn = null;
    public ?string $yawning_face = null;
    public ?string $yellow_circle = null;
    public ?string $yellow_heart = null;
    public ?string $yellow_square = null;
    public ?string $yemen = null;
    public ?string $yen = null;
    public ?string $yin_yang = null;
    public ?string $yo_yo = null;
    public ?string $yum = null;
    public ?string $zambia = null;
    public ?string $zany_face = null;
    public ?string $zap = null;
    public ?string $zebra = null;
    public ?string $zero = null;
    public ?string $zimbabwe = null;
    public ?string $zipper_mouth_face = null;
    public ?string $zombie = null;
    public ?string $zombie_man = null;
    public ?string $zombie_woman = null;
    public ?string $zzz = null;
}

/** EmptyObject entity data model. */
class EmptyObject
{
    public ?array $attestations = null;
    public ?bool $enable_debug_logging = null;
    public string $encrypted_value;
    public ?array $include_claim_keys = null;
    public string $key_id;
    public ?array $languages = null;
    public string $name;
    public ?string $query_suite = null;
    public ?string $runner_label = null;
    public ?string $runner_type = null;
    public ?array $selected_repository_ids = null;
    public ?string $state = null;
    public ?string $threat_model = null;
    public bool $use_default;
    public string $value;
    public string $visibility;
}

/** Request payload for EmptyObject#load. */
class EmptyObjectLoadMatch
{
    public string $subject_digest;
    public string $username;
    public ?string $after = null;
    public ?string $before = null;
    public ?int $per_page = null;
    public ?string $predicate_type = null;
}

/** Request payload for EmptyObject#create. */
class EmptyObjectCreateData
{
    public string $org_id;
    public ?array $attestations = null;
    public ?bool $enable_debug_logging = null;
    public string $encrypted_value;
    public ?array $include_claim_keys = null;
    public string $key_id;
    public ?array $languages = null;
    public string $name;
    public ?string $query_suite = null;
    public ?string $runner_label = null;
    public ?string $runner_type = null;
    public ?array $selected_repository_ids = null;
    public ?string $state = null;
    public ?string $threat_model = null;
    public bool $use_default;
    public string $value;
    public string $visibility;
}

/** Request payload for EmptyObject#update. */
class EmptyObjectUpdateData
{
    public string $org_id;
    public string $secret_name;
    public ?array $attestations = null;
    public ?bool $enable_debug_logging = null;
    public ?string $encrypted_value = null;
    public ?array $include_claim_keys = null;
    public ?string $key_id = null;
    public ?array $languages = null;
    public ?string $name = null;
    public ?string $query_suite = null;
    public ?string $runner_label = null;
    public ?string $runner_type = null;
    public ?array $selected_repository_ids = null;
    public ?string $state = null;
    public ?string $threat_model = null;
    public ?bool $use_default = null;
    public ?string $value = null;
    public ?string $visibility = null;
}

/** EnterpriseTeam entity data model. */
class EnterpriseTeam
{
    public string $created_at;
    public ?string $description = null;
    public string $group_id;
    public ?string $group_name = null;
    public string $html_url;
    public int $id;
    public string $members_url;
    public string $name;
    public ?string $organization_selection_type = null;
    public string $slug;
    public ?string $sync_to_organizations = null;
    public string $updated_at;
    public string $url;
}

/** Request payload for EnterpriseTeam#load. */
class EnterpriseTeamLoadMatch
{
    public string $enterprise;
    public string $id;
}

/** Request payload for EnterpriseTeam#list. */
class EnterpriseTeamListMatch
{
    public string $enterprise;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for EnterpriseTeam#create. */
class EnterpriseTeamCreateData
{
    public string $enterprise;
    public string $created_at;
    public ?string $description = null;
    public string $group_id;
    public ?string $group_name = null;
    public string $html_url;
    public int $id;
    public string $members_url;
    public string $name;
    public ?string $organization_selection_type = null;
    public string $slug;
    public ?string $sync_to_organizations = null;
    public string $updated_at;
    public string $url;
}

/** Request payload for EnterpriseTeam#update. */
class EnterpriseTeamUpdateData
{
    public string $enterprise;
    public string $id;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $group_id = null;
    public ?string $group_name = null;
    public ?string $html_url = null;
    public ?string $members_url = null;
    public ?string $name = null;
    public ?string $organization_selection_type = null;
    public ?string $slug = null;
    public ?string $sync_to_organizations = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** Request payload for EnterpriseTeam#remove. */
class EnterpriseTeamRemoveMatch
{
    public string $enterprise;
    public string $id;
}

/** EnterpriseTeamMembership entity data model. */
class EnterpriseTeamMembership
{
    public ?string $id = null;
}

/** Request payload for EnterpriseTeamMembership#remove. */
class EnterpriseTeamMembershipRemoveMatch
{
    public string $enterprise;
    public string $id;
    public string $team_id;
}

/** Environment entity data model. */
class Environment
{
    public string $created_at;
    public array $deployment_branch_policy;
    public string $html_url;
    public int $id;
    public string $name;
    public string $node_id;
    public ?bool $prevent_self_review = null;
    public ?array $protection_rules = null;
    public ?array $reviewers = null;
    public string $updated_at;
    public string $url;
    public ?int $wait_timer = null;
}

/** Request payload for Environment#load. */
class EnvironmentLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
}

/** Request payload for Environment#update. */
class EnvironmentUpdateData
{
    public string $id;
    public string $owner;
    public string $repo;
    public ?string $created_at = null;
    public ?array $deployment_branch_policy = null;
    public ?string $html_url = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?bool $prevent_self_review = null;
    public ?array $protection_rules = null;
    public ?array $reviewers = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?int $wait_timer = null;
}

/** EnvironmentApproval entity data model. */
class EnvironmentApproval
{
    public string $comment;
    public array $environments;
    public string $state;
    public array $user;
}

/** Request payload for EnvironmentApproval#list. */
class EnvironmentApprovalListMatch
{
    public string $owner;
    public string $repo;
    public int $run_id;
}

/** Event entity data model. */
class Event
{
    public array $actor;
    public string $created_at;
    public string $id;
    public array $org;
    public array $payload;
    public bool $public;
    public array $repo;
    public string $type;
}

/** Request payload for Event#load. */
class EventLoadMatch
{
    public string $org;
    public string $username;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Event#list. */
class EventListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Feed entity data model. */
class Feed
{
    public ?string $current_user_actor_url = null;
    public ?string $current_user_organization_url = null;
    public ?array $current_user_organization_urls = null;
    public ?string $current_user_public_url = null;
    public ?string $current_user_url = null;
    public array $links;
    public ?string $repository_discussions_category_url = null;
    public ?string $repository_discussions_url = null;
    public ?string $security_advisories_url = null;
    public string $timeline_url;
    public string $user_url;
}

/** Request payload for Feed#list. */
class FeedListMatch
{
    public ?string $current_user_actor_url = null;
    public ?string $current_user_organization_url = null;
    public ?array $current_user_organization_urls = null;
    public ?string $current_user_public_url = null;
    public ?string $current_user_url = null;
    public ?array $links = null;
    public ?string $repository_discussions_category_url = null;
    public ?string $repository_discussions_url = null;
    public ?string $security_advisories_url = null;
    public ?string $timeline_url = null;
    public ?string $user_url = null;
}

/** FileCommit entity data model. */
class FileCommit
{
    public array $author;
    public ?string $branch = null;
    public array $commit;
    public array $committer;
    public array $content;
    public string $message;
    public ?string $sha = null;
}

/** Request payload for FileCommit#update. */
class FileCommitUpdateData
{
    public string $owner;
    public string $path;
    public string $repo;
    public ?array $author = null;
    public ?string $branch = null;
    public ?array $commit = null;
    public ?array $committer = null;
    public ?array $content = null;
    public ?string $message = null;
    public ?string $sha = null;
}

/** Request payload for FileCommit#remove. */
class FileCommitRemoveMatch
{
    public string $owner;
    public string $path;
    public string $repo;
}

/** Follower entity data model. */
class Follower
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Follower#list. */
class FollowerListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Following entity data model. */
class Following
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Following#list. */
class FollowingListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** FullRepository entity data model. */
class FullRepository
{
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?bool $anonymous_access_enabled = null;
    public string $archive_url;
    public bool $archived;
    public string $assignees_url;
    public ?bool $auto_init = null;
    public string $blobs_url;
    public string $branches_url;
    public string $clone_url;
    public array $code_of_conduct;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public string $created_at;
    public ?array $custom_properties = null;
    public string $default_branch;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public bool $disabled;
    public string $downloads_url;
    public string $events_url;
    public bool $fork;
    public int $forks;
    public int $forks_count;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public string $git_url;
    public int $github_id;
    public ?string $gitignore_template = null;
    public bool $has_discussions;
    public ?bool $has_downloads = null;
    public bool $has_issues;
    public bool $has_pages;
    public bool $has_projects;
    public bool $has_wiki;
    public string $homepage;
    public string $hooks_url;
    public string $html_url;
    public string $id;
    public ?bool $include_all_branches = null;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $language;
    public string $languages_url;
    public array $license;
    public ?string $license_template = null;
    public ?string $master_branch = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public string $merges_url;
    public string $milestones_url;
    public string $mirror_url;
    public string $name;
    public int $network_count;
    public string $node_id;
    public string $notifications_url;
    public int $open_issues;
    public int $open_issues_count;
    public array $organization;
    public array $owner;
    public array $parent;
    public array $permissions;
    public bool $private;
    public string $pulls_url;
    public string $pushed_at;
    public string $releases_url;
    public ?array $security_and_analysis = null;
    public int $size;
    public array $source;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public string $ssh_url;
    public int $stargazers_count;
    public string $stargazers_url;
    public string $statuses_url;
    public int $subscribers_count;
    public string $subscribers_url;
    public string $subscription_url;
    public string $svn_url;
    public string $tags_url;
    public ?int $team_id = null;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public array $template_repository;
    public ?array $topics = null;
    public string $trees_url;
    public string $updated_at;
    public string $url;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $visibility = null;
    public int $watchers;
    public int $watchers_count;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for FullRepository#load. */
class FullRepositoryLoadMatch
{
    public string $owner;
    public string $repo;
}

/** Request payload for FullRepository#create. */
class FullRepositoryCreateData
{
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?bool $anonymous_access_enabled = null;
    public string $archive_url;
    public bool $archived;
    public string $assignees_url;
    public ?bool $auto_init = null;
    public string $blobs_url;
    public string $branches_url;
    public string $clone_url;
    public array $code_of_conduct;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public string $created_at;
    public ?array $custom_properties = null;
    public string $default_branch;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public bool $disabled;
    public string $downloads_url;
    public string $events_url;
    public bool $fork;
    public int $forks;
    public int $forks_count;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public string $git_url;
    public int $github_id;
    public ?string $gitignore_template = null;
    public bool $has_discussions;
    public ?bool $has_downloads = null;
    public bool $has_issues;
    public bool $has_pages;
    public bool $has_projects;
    public bool $has_wiki;
    public string $homepage;
    public string $hooks_url;
    public string $html_url;
    public string $id;
    public ?bool $include_all_branches = null;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $language;
    public string $languages_url;
    public array $license;
    public ?string $license_template = null;
    public ?string $master_branch = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public string $merges_url;
    public string $milestones_url;
    public string $mirror_url;
    public string $name;
    public int $network_count;
    public string $node_id;
    public string $notifications_url;
    public int $open_issues;
    public int $open_issues_count;
    public array $organization;
    public array $owner;
    public array $parent;
    public array $permissions;
    public bool $private;
    public string $pulls_url;
    public string $pushed_at;
    public string $releases_url;
    public ?array $security_and_analysis = null;
    public int $size;
    public array $source;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public string $ssh_url;
    public int $stargazers_count;
    public string $stargazers_url;
    public string $statuses_url;
    public int $subscribers_count;
    public string $subscribers_url;
    public string $subscription_url;
    public string $svn_url;
    public string $tags_url;
    public ?int $team_id = null;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public array $template_repository;
    public ?array $topics = null;
    public string $trees_url;
    public string $updated_at;
    public string $url;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $visibility = null;
    public int $watchers;
    public int $watchers_count;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for FullRepository#update. */
class FullRepositoryUpdateData
{
    public string $owner;
    public string $repo;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?bool $anonymous_access_enabled = null;
    public ?string $archive_url = null;
    public ?bool $archived = null;
    public ?string $assignees_url = null;
    public ?bool $auto_init = null;
    public ?string $blobs_url = null;
    public ?string $branches_url = null;
    public ?string $clone_url = null;
    public ?array $code_of_conduct = null;
    public ?string $collaborators_url = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $compare_url = null;
    public ?string $contents_url = null;
    public ?string $contributors_url = null;
    public ?string $created_at = null;
    public ?array $custom_properties = null;
    public ?string $default_branch = null;
    public ?bool $delete_branch_on_merge = null;
    public ?string $deployments_url = null;
    public ?string $description = null;
    public ?bool $disabled = null;
    public ?string $downloads_url = null;
    public ?string $events_url = null;
    public ?bool $fork = null;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public ?string $forks_url = null;
    public ?string $full_name = null;
    public ?string $git_commits_url = null;
    public ?string $git_refs_url = null;
    public ?string $git_tags_url = null;
    public ?string $git_url = null;
    public ?int $github_id = null;
    public ?string $gitignore_template = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public ?string $hooks_url = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?bool $include_all_branches = null;
    public ?bool $is_template = null;
    public ?string $issue_comment_url = null;
    public ?string $issue_events_url = null;
    public ?string $issues_url = null;
    public ?string $keys_url = null;
    public ?string $labels_url = null;
    public ?string $language = null;
    public ?string $languages_url = null;
    public ?array $license = null;
    public ?string $license_template = null;
    public ?string $master_branch = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public ?string $merges_url = null;
    public ?string $milestones_url = null;
    public ?string $mirror_url = null;
    public ?string $name = null;
    public ?int $network_count = null;
    public ?string $node_id = null;
    public ?string $notifications_url = null;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public ?array $organization = null;
    public ?array $parent = null;
    public ?array $permissions = null;
    public ?bool $private = null;
    public ?string $pulls_url = null;
    public ?string $pushed_at = null;
    public ?string $releases_url = null;
    public ?array $security_and_analysis = null;
    public ?int $size = null;
    public ?array $source = null;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public ?string $stargazers_url = null;
    public ?string $statuses_url = null;
    public ?int $subscribers_count = null;
    public ?string $subscribers_url = null;
    public ?string $subscription_url = null;
    public ?string $svn_url = null;
    public ?string $tags_url = null;
    public ?int $team_id = null;
    public ?string $teams_url = null;
    public ?string $temp_clone_token = null;
    public ?array $template_repository = null;
    public ?array $topics = null;
    public ?string $trees_url = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
}

/** Gist entity data model. */
class Gist
{
    public ?int $comments = null;
    public ?bool $comments_enabled = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $files = null;
    public array $fork_of;
    public ?array $forks = null;
    public ?string $forks_url = null;
    public ?string $git_pull_url = null;
    public ?string $git_push_url = null;
    public ?array $history = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?string $node_id = null;
    public array $owner;
    public ?bool $public = null;
    public ?bool $truncated = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user = null;
}

/** Request payload for Gist#load. */
class GistLoadMatch
{
    public string $id;
}

/** Request payload for Gist#list. */
class GistListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $since = null;
}

/** Request payload for Gist#create. */
class GistCreateData
{
    public ?int $comments = null;
    public ?bool $comments_enabled = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $files = null;
    public array $fork_of;
    public ?array $forks = null;
    public ?string $forks_url = null;
    public ?string $git_pull_url = null;
    public ?string $git_push_url = null;
    public ?array $history = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?string $node_id = null;
    public array $owner;
    public ?bool $public = null;
    public ?bool $truncated = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user = null;
}

/** Request payload for Gist#update. */
class GistUpdateData
{
    public string $id;
    public ?int $comments = null;
    public ?bool $comments_enabled = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $files = null;
    public ?array $fork_of = null;
    public ?array $forks = null;
    public ?string $forks_url = null;
    public ?string $git_pull_url = null;
    public ?string $git_push_url = null;
    public ?array $history = null;
    public ?string $html_url = null;
    public ?string $node_id = null;
    public ?array $owner = null;
    public ?bool $public = null;
    public ?bool $truncated = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user = null;
}

/** Request payload for Gist#remove. */
class GistRemoveMatch
{
    public ?int $comment_id = null;
    public string $id;
}

/** GistComment entity data model. */
class GistComment
{
    public string $author_association;
    public string $avatar_url;
    public string $body;
    public string $created_at;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $updated_at;
    public string $url;
    public array $user;
    public ?string $user_view_type = null;
}

/** Request payload for GistComment#load. */
class GistCommentLoadMatch
{
    public string $gist_id;
    public int $id;
}

/** Request payload for GistComment#list. */
class GistCommentListMatch
{
    public string $id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for GistComment#create. */
class GistCommentCreateData
{
    public string $id;
    public string $author_association;
    public string $avatar_url;
    public string $body;
    public string $created_at;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $updated_at;
    public string $url;
    public array $user;
    public ?string $user_view_type = null;
}

/** Request payload for GistComment#update. */
class GistCommentUpdateData
{
    public string $gist_id;
    public int $id;
    public ?string $author_association = null;
    public ?string $avatar_url = null;
    public ?string $body = null;
    public ?string $created_at = null;
    public ?string $email = null;
    public ?string $events_url = null;
    public ?string $followers_url = null;
    public ?string $following_url = null;
    public ?string $gists_url = null;
    public ?string $gravatar_id = null;
    public ?string $html_url = null;
    public ?string $login = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $organizations_url = null;
    public ?string $received_events_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public ?string $starred_at = null;
    public ?string $starred_url = null;
    public ?string $subscriptions_url = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?array $user = null;
    public ?string $user_view_type = null;
}

/** GistCommit entity data model. */
class GistCommit
{
    public array $change_status;
    public string $committed_at;
    public ?string $id = null;
    public string $url;
    public array $user;
    public string $version;
}

/** Request payload for GistCommit#list. */
class GistCommitListMatch
{
    public string $id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** GistSimple entity data model. */
class GistSimple
{
    public ?int $comments = null;
    public ?bool $comments_enabled = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $files = null;
    public array $fork_of;
    public ?array $forks = null;
    public ?string $forks_url = null;
    public ?string $git_pull_url = null;
    public ?string $git_push_url = null;
    public ?array $history = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?string $node_id = null;
    public array $owner;
    public ?bool $public = null;
    public ?bool $truncated = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user = null;
}

/** Request payload for GistSimple#list. */
class GistSimpleListMatch
{
    public string $id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Git entity data model. */
class Git
{
}

/** Request payload for Git#remove. */
class GitRemoveMatch
{
    public string $owner;
    public string $ref;
    public string $repo;
}

/** GitCommit entity data model. */
class GitCommit
{
    public array $author;
    public array $committer;
    public string $html_url;
    public ?string $id = null;
    public string $message;
    public string $node_id;
    public array $parents;
    public string $sha;
    public ?string $signature = null;
    public array $tree;
    public string $url;
    public array $verification;
}

/** Request payload for GitCommit#load. */
class GitCommitLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
}

/** Request payload for GitCommit#create. */
class GitCommitCreateData
{
    public string $owner;
    public string $repo;
    public array $author;
    public array $committer;
    public string $html_url;
    public ?string $id = null;
    public string $message;
    public string $node_id;
    public array $parents;
    public string $sha;
    public ?string $signature = null;
    public array $tree;
    public string $url;
    public array $verification;
}

/** GitRef entity data model. */
class GitRef
{
    public ?bool $force = null;
    public ?string $id = null;
    public string $node_id;
    public array $object;
    public string $ref;
    public string $sha;
    public string $type;
    public string $url;
}

/** Request payload for GitRef#load. */
class GitRefLoadMatch
{
    public ?string $id = null;
    public string $owner;
    public string $repo;
    public ?string $ref = null;
}

/** Request payload for GitRef#create. */
class GitRefCreateData
{
    public string $owner;
    public string $repo;
    public ?bool $force = null;
    public ?string $id = null;
    public string $node_id;
    public array $object;
    public string $ref;
    public string $sha;
    public string $type;
    public string $url;
}

/** Request payload for GitRef#update. */
class GitRefUpdateData
{
    public string $id;
    public string $owner;
    public string $repo;
    public ?bool $force = null;
    public ?string $node_id = null;
    public ?array $object = null;
    public ?string $ref = null;
    public ?string $sha = null;
    public ?string $type = null;
    public ?string $url = null;
}

/** GitTag entity data model. */
class GitTag
{
    public ?string $id = null;
    public string $message;
    public string $node_id;
    public array $object;
    public string $sha;
    public string $tag;
    public array $tagger;
    public string $type;
    public string $url;
    public array $verification;
}

/** Request payload for GitTag#load. */
class GitTagLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
}

/** Request payload for GitTag#create. */
class GitTagCreateData
{
    public string $owner;
    public string $repo;
    public ?string $id = null;
    public string $message;
    public string $node_id;
    public array $object;
    public string $sha;
    public string $tag;
    public array $tagger;
    public string $type;
    public string $url;
    public array $verification;
}

/** GitTree entity data model. */
class GitTree
{
    public ?string $base_tree = null;
    public ?string $id = null;
    public string $sha;
    public array $tree;
    public bool $truncated;
    public ?string $url = null;
}

/** Request payload for GitTree#load. */
class GitTreeLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
    public ?string $recursive = null;
}

/** Request payload for GitTree#create. */
class GitTreeCreateData
{
    public string $owner;
    public string $repo;
    public ?string $base_tree = null;
    public ?string $id = null;
    public string $sha;
    public array $tree;
    public bool $truncated;
    public ?string $url = null;
}

/** Gitignore entity data model. */
class Gitignore
{
}

/** Request payload for Gitignore#list. */
class GitignoreListMatch
{
}

/** GitignoreTemplate entity data model. */
class GitignoreTemplate
{
    public ?string $id = null;
    public string $name;
    public string $source;
}

/** Request payload for GitignoreTemplate#load. */
class GitignoreTemplateLoadMatch
{
    public string $id;
}

/** GlobalAdvisory entity data model. */
class GlobalAdvisory
{
    public array $credits;
    public string $cve_id;
    public array $cvss;
    public ?array $cvss_severities = null;
    public array $cwes;
    public string $description;
    public ?array $epss = null;
    public string $ghsa_id;
    public string $github_reviewed_at;
    public string $html_url;
    public ?string $id = null;
    public array $identifiers;
    public string $nvd_published_at;
    public string $published_at;
    public array $references;
    public string $repository_advisory_url;
    public string $severity;
    public string $source_code_location;
    public string $summary;
    public string $type;
    public string $updated_at;
    public string $url;
    public array $vulnerabilities;
    public string $withdrawn_at;
}

/** Request payload for GlobalAdvisory#load. */
class GlobalAdvisoryLoadMatch
{
    public string $id;
}

/** Request payload for GlobalAdvisory#list. */
class GlobalAdvisoryListMatch
{
    public mixed $affect = null;
    public ?string $after = null;
    public ?string $before = null;
    public ?string $cve_id = null;
    public mixed $cwe = null;
    public ?string $direction = null;
    public ?string $ecosystem = null;
    public ?string $epss_percentage = null;
    public ?string $epss_percentile = null;
    public ?string $ghsa_id = null;
    public ?bool $is_withdrawn = null;
    public ?string $modified = null;
    public ?int $per_page = null;
    public ?string $published = null;
    public ?string $severity = null;
    public ?string $sort = null;
    public ?string $type = null;
    public ?string $updated = null;
}

/** GpgKey entity data model. */
class GpgKey
{
    public string $armored_public_key;
    public bool $can_certify;
    public bool $can_encrypt_comms;
    public bool $can_encrypt_storage;
    public bool $can_sign;
    public string $created_at;
    public array $emails;
    public string $expires_at;
    public int $id;
    public string $key_id;
    public ?string $name = null;
    public int $primary_key_id;
    public string $public_key;
    public string $raw_key;
    public bool $revoked;
    public array $subkeys;
}

/** Request payload for GpgKey#load. */
class GpgKeyLoadMatch
{
    public int $id;
}

/** Request payload for GpgKey#list. */
class GpgKeyListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for GpgKey#create. */
class GpgKeyCreateData
{
    public string $armored_public_key;
    public bool $can_certify;
    public bool $can_encrypt_comms;
    public bool $can_encrypt_storage;
    public bool $can_sign;
    public string $created_at;
    public array $emails;
    public string $expires_at;
    public int $id;
    public string $key_id;
    public ?string $name = null;
    public int $primary_key_id;
    public string $public_key;
    public string $raw_key;
    public bool $revoked;
    public array $subkeys;
}

/** Hook entity data model. */
class Hook
{
    public bool $active;
    public ?array $add_events = null;
    public array $config;
    public string $created_at;
    public ?string $deliveries_url = null;
    public array $events;
    public int $id;
    public array $last_response;
    public string $name;
    public string $ping_url;
    public ?array $remove_events = null;
    public string $test_url;
    public string $type;
    public string $updated_at;
    public string $url;
}

/** Request payload for Hook#load. */
class HookLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for Hook#list. */
class HookListMatch
{
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Hook#create. */
class HookCreateData
{
    public string $owner;
    public string $repo;
    public bool $active;
    public ?array $add_events = null;
    public array $config;
    public string $created_at;
    public ?string $deliveries_url = null;
    public array $events;
    public int $id;
    public array $last_response;
    public string $name;
    public string $ping_url;
    public ?array $remove_events = null;
    public string $test_url;
    public string $type;
    public string $updated_at;
    public string $url;
}

/** Request payload for Hook#update. */
class HookUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?bool $active = null;
    public ?array $add_events = null;
    public ?array $config = null;
    public ?string $created_at = null;
    public ?string $deliveries_url = null;
    public ?array $events = null;
    public ?array $last_response = null;
    public ?string $name = null;
    public ?string $ping_url = null;
    public ?array $remove_events = null;
    public ?string $test_url = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** HookDelivery entity data model. */
class HookDelivery
{
    public string $action;
    public string $delivered_at;
    public float $duration;
    public string $event;
    public string $guid;
    public int $id;
    public int $installation_id;
    public bool $redelivery;
    public int $repository_id;
    public array $request;
    public array $response;
    public string $status;
    public int $status_code;
    public ?string $throttled_at = null;
    public ?string $url = null;
}

/** Request payload for HookDelivery#load. */
class HookDeliveryLoadMatch
{
    public ?int $hook_id = null;
    public int $id;
    public ?string $owner = null;
    public ?string $repo = null;
    public ?string $org_id = null;
}

/** HookDeliveryItem entity data model. */
class HookDeliveryItem
{
    public string $action;
    public string $delivered_at;
    public float $duration;
    public string $event;
    public string $guid;
    public int $id;
    public int $installation_id;
    public bool $redelivery;
    public int $repository_id;
    public string $status;
    public int $status_code;
    public ?string $throttled_at = null;
}

/** Request payload for HookDeliveryItem#list. */
class HookDeliveryItemListMatch
{
    public ?string $cursor = null;
    public ?int $per_page = null;
}

/** HostedCompute entity data model. */
class HostedCompute
{
    public ?string $compute_service = null;
    public string $created_on;
    public string $id;
    public string $name;
    public ?array $network_settings_ids = null;
}

/** Request payload for HostedCompute#list. */
class HostedComputeListMatch
{
    public string $org_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for HostedCompute#remove. */
class HostedComputeRemoveMatch
{
    public string $network_configuration_id;
    public string $org_id;
}

/** Hovercard entity data model. */
class Hovercard
{
    public string $message;
    public string $octicon;
}

/** Request payload for Hovercard#list. */
class HovercardListMatch
{
    public string $username;
    public ?string $subject_id = null;
    public ?string $subject_type = null;
}

/** Import entity data model. */
class Import
{
    public ?int $authors_count = null;
    public string $authors_url;
    public ?int $commit_count = null;
    public ?string $error_message = null;
    public ?string $failed_step = null;
    public ?bool $has_large_files = null;
    public string $html_url;
    public ?string $human_name = null;
    public ?int $import_percent = null;
    public ?int $large_files_count = null;
    public ?int $large_files_size = null;
    public ?string $message = null;
    public ?array $project_choices = null;
    public ?int $push_percent = null;
    public string $repository_url;
    public string $status;
    public ?string $status_text = null;
    public ?string $svc_root = null;
    public ?string $svn_root = null;
    public ?string $tfvc_project = null;
    public string $url;
    public ?bool $use_lfs = null;
    public string $vcs;
    public ?string $vcs_password = null;
    public string $vcs_url;
    public ?string $vcs_username = null;
}

/** Request payload for Import#list. */
class ImportListMatch
{
    public string $owner;
    public string $repo;
}

/** Request payload for Import#update. */
class ImportUpdateData
{
    public string $owner;
    public string $repo;
    public ?int $authors_count = null;
    public ?string $authors_url = null;
    public ?int $commit_count = null;
    public ?string $error_message = null;
    public ?string $failed_step = null;
    public ?bool $has_large_files = null;
    public ?string $html_url = null;
    public ?string $human_name = null;
    public ?int $import_percent = null;
    public ?int $large_files_count = null;
    public ?int $large_files_size = null;
    public ?string $message = null;
    public ?array $project_choices = null;
    public ?int $push_percent = null;
    public ?string $repository_url = null;
    public ?string $status = null;
    public ?string $status_text = null;
    public ?string $svc_root = null;
    public ?string $svn_root = null;
    public ?string $tfvc_project = null;
    public ?string $url = null;
    public ?bool $use_lfs = null;
    public ?string $vcs = null;
    public ?string $vcs_password = null;
    public ?string $vcs_url = null;
    public ?string $vcs_username = null;
}

/** Installation entity data model. */
class Installation
{
    public string $access_tokens_url;
    public mixed $account;
    public int $app_id;
    public string $app_slug;
    public ?string $client_id = null;
    public ?string $contact_email = null;
    public string $created_at;
    public array $events;
    public ?bool $has_multiple_single_files = null;
    public string $html_url;
    public int $id;
    public array $permissions;
    public string $repositories_url;
    public string $repository_selection;
    public string $single_file_name;
    public ?array $single_file_paths = null;
    public string $suspended_at;
    public array $suspended_by;
    public int $target_id;
    public string $target_type;
    public string $updated_at;
}

/** Request payload for Installation#load. */
class InstallationLoadMatch
{
    public int $id;
}

/** Request payload for Installation#list. */
class InstallationListMatch
{
    public ?string $outdated = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $since = null;
}

/** Request payload for Installation#update. */
class InstallationUpdateData
{
    public int $id;
    public ?string $access_tokens_url = null;
    public mixed $account = null;
    public ?int $app_id = null;
    public ?string $app_slug = null;
    public ?string $client_id = null;
    public ?string $contact_email = null;
    public ?string $created_at = null;
    public ?array $events = null;
    public ?bool $has_multiple_single_files = null;
    public ?string $html_url = null;
    public ?array $permissions = null;
    public ?string $repositories_url = null;
    public ?string $repository_selection = null;
    public ?string $single_file_name = null;
    public ?array $single_file_paths = null;
    public ?string $suspended_at = null;
    public ?array $suspended_by = null;
    public ?int $target_id = null;
    public ?string $target_type = null;
    public ?string $updated_at = null;
}

/** Request payload for Installation#remove. */
class InstallationRemoveMatch
{
    public int $id;
}

/** InstallationToken entity data model. */
class InstallationToken
{
    public ?string $id = null;
    public ?array $permissions = null;
    public ?array $repositories = null;
    public ?array $repository_ids = null;
}

/** Request payload for InstallationToken#create. */
class InstallationTokenCreateData
{
    public int $id;
    public ?array $permissions = null;
    public ?array $repositories = null;
    public ?array $repository_ids = null;
}

/** Integration entity data model. */
class Integration
{
    public array $apps;
    public ?string $client_id = null;
    public string $created_at;
    public string $description;
    public array $events;
    public string $external_url;
    public string $html_url;
    public int $id;
    public ?int $installations_count = null;
    public string $name;
    public string $node_id;
    public mixed $owner;
    public array $permissions;
    public ?string $slug = null;
    public string $updated_at;
}

/** Request payload for Integration#load. */
class IntegrationLoadMatch
{
    public string $app_slug;
}

/** Request payload for Integration#list. */
class IntegrationListMatch
{
    public ?array $apps = null;
    public ?string $client_id = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $events = null;
    public ?string $external_url = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?int $installations_count = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public mixed $owner = null;
    public ?array $permissions = null;
    public ?string $slug = null;
    public ?string $updated_at = null;
}

/** Request payload for Integration#create. */
class IntegrationCreateData
{
    public string $branch_id;
    public string $owner;
    public string $repo;
    public array $apps;
    public ?string $client_id = null;
    public string $created_at;
    public string $description;
    public array $events;
    public string $external_url;
    public string $html_url;
    public int $id;
    public ?int $installations_count = null;
    public string $name;
    public string $node_id;
    public array $permissions;
    public ?string $slug = null;
    public string $updated_at;
}

/** Request payload for Integration#update. */
class IntegrationUpdateData
{
    public string $branch_id;
    public string $owner;
    public string $repo;
    public ?array $apps = null;
    public ?string $client_id = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $events = null;
    public ?string $external_url = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?int $installations_count = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?array $permissions = null;
    public ?string $slug = null;
    public ?string $updated_at = null;
}

/** Request payload for Integration#remove. */
class IntegrationRemoveMatch
{
    public string $branch_id;
    public string $owner;
    public string $repo;
}

/** IntegrationInstallation entity data model. */
class IntegrationInstallation
{
    public mixed $account;
    public string $created_at;
    public int $id;
    public ?string $node_id = null;
    public array $requester;
}

/** Request payload for IntegrationInstallation#list. */
class IntegrationInstallationListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Interaction entity data model. */
class Interaction
{
    public ?string $expires_at = null;
    public ?string $limit = null;
    public ?string $origin = null;
}

/** Request payload for Interaction#load. */
class InteractionLoadMatch
{
    public ?string $expires_at = null;
    public ?string $limit = null;
    public ?string $origin = null;
}

/** Request payload for Interaction#remove. */
class InteractionRemoveMatch
{
    public ?string $expires_at = null;
    public ?string $limit = null;
    public ?string $origin = null;
}

/** InteractionLimit entity data model. */
class InteractionLimit
{
    public string $expires_at;
    public ?string $expiry = null;
    public string $limit;
    public string $origin;
}

/** Request payload for InteractionLimit#update. */
class InteractionLimitUpdateData
{
    public ?string $expires_at = null;
    public ?string $expiry = null;
    public ?string $limit = null;
    public ?string $origin = null;
}

/** Issue entity data model. */
class Issue
{
    public ?string $active_lock_reason = null;
    public array $actor;
    public ?int $after_id = null;
    public array $assignee;
    public ?array $assignees = null;
    public array $assigner;
    public string $author_association;
    public ?int $before_id = null;
    public ?string $body = null;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public string $closed_at;
    public array $closed_by;
    public ?string $color = null;
    public int $comments;
    public string $comments_url;
    public string $commit_id;
    public string $commit_url;
    public string $created_at;
    public ?bool $default = null;
    public ?string $description = null;
    public array $dismissed_review;
    public ?bool $draft = null;
    public string $event;
    public string $events_url;
    public string $html_url;
    public int $id;
    public array $issue;
    public array $issue_dependencies_summary;
    public ?array $issue_field_values = null;
    public int $issue_id;
    public string $issue_url;
    public array $label;
    public array $labels;
    public string $labels_url;
    public ?string $lock_reason = null;
    public bool $locked;
    public array $milestone;
    public ?string $name = null;
    public string $node_id;
    public int $number;
    public ?string $parent_issue_url = null;
    public array $performed_via_github_app;
    public array $project_card;
    public array $pull_request;
    public array $reactions;
    public array $rename;
    public ?bool $replace_parent = null;
    public array $repository;
    public string $repository_url;
    public array $requested_reviewer;
    public array $requested_team;
    public array $review_requester;
    public string $state;
    public ?string $state_reason = null;
    public int $sub_issue_id;
    public array $sub_issues_summary;
    public ?string $timeline_url = null;
    public string $title;
    public array $type;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for Issue#load. */
class IssueLoadMatch
{
    public ?string $assignee = null;
    public ?int $id = null;
    public string $owner;
    public string $repo;
    public ?int $comment_id = null;
    public ?int $event_id = null;
}

/** Request payload for Issue#list. */
class IssueListMatch
{
    public ?bool $collab = null;
    public ?string $direction = null;
    public ?string $filter = null;
    public ?string $label = null;
    public ?bool $org = null;
    public ?bool $owned = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?bool $pull = null;
    public ?string $since = null;
    public ?string $sort = null;
    public ?string $state = null;
}

/** Request payload for Issue#create. */
class IssueCreateData
{
    public string $owner;
    public string $repo;
    public ?string $active_lock_reason = null;
    public array $actor;
    public ?int $after_id = null;
    public array $assignee;
    public ?array $assignees = null;
    public array $assigner;
    public string $author_association;
    public ?int $before_id = null;
    public ?string $body = null;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public string $closed_at;
    public array $closed_by;
    public ?string $color = null;
    public int $comments;
    public string $comments_url;
    public string $commit_id;
    public string $commit_url;
    public string $created_at;
    public ?bool $default = null;
    public ?string $description = null;
    public array $dismissed_review;
    public ?bool $draft = null;
    public string $event;
    public string $events_url;
    public string $html_url;
    public int $id;
    public array $issue;
    public array $issue_dependencies_summary;
    public ?array $issue_field_values = null;
    public int $issue_id;
    public string $issue_url;
    public array $label;
    public array $labels;
    public string $labels_url;
    public ?string $lock_reason = null;
    public bool $locked;
    public array $milestone;
    public ?string $name = null;
    public string $node_id;
    public int $number;
    public ?string $parent_issue_url = null;
    public array $performed_via_github_app;
    public array $project_card;
    public array $pull_request;
    public array $reactions;
    public array $rename;
    public ?bool $replace_parent = null;
    public array $repository;
    public string $repository_url;
    public array $requested_reviewer;
    public array $requested_team;
    public array $review_requester;
    public string $state;
    public ?string $state_reason = null;
    public int $sub_issue_id;
    public array $sub_issues_summary;
    public ?string $timeline_url = null;
    public string $title;
    public array $type;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for Issue#update. */
class IssueUpdateData
{
    public ?int $comment_id = null;
    public string $owner;
    public string $repo;
    public ?int $id = null;
    public ?string $active_lock_reason = null;
    public ?array $actor = null;
    public ?int $after_id = null;
    public ?array $assignee = null;
    public ?array $assignees = null;
    public ?array $assigner = null;
    public ?string $author_association = null;
    public ?int $before_id = null;
    public ?string $body = null;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public ?string $closed_at = null;
    public ?array $closed_by = null;
    public ?string $color = null;
    public ?int $comments = null;
    public ?string $comments_url = null;
    public ?string $commit_id = null;
    public ?string $commit_url = null;
    public ?string $created_at = null;
    public ?bool $default = null;
    public ?string $description = null;
    public ?array $dismissed_review = null;
    public ?bool $draft = null;
    public ?string $event = null;
    public ?string $events_url = null;
    public ?string $html_url = null;
    public ?array $issue = null;
    public ?array $issue_dependencies_summary = null;
    public ?array $issue_field_values = null;
    public ?int $issue_id = null;
    public ?string $issue_url = null;
    public ?array $label = null;
    public ?array $labels = null;
    public ?string $labels_url = null;
    public ?string $lock_reason = null;
    public ?bool $locked = null;
    public ?array $milestone = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?int $number = null;
    public ?string $parent_issue_url = null;
    public ?array $performed_via_github_app = null;
    public ?array $project_card = null;
    public ?array $pull_request = null;
    public ?array $reactions = null;
    public ?array $rename = null;
    public ?bool $replace_parent = null;
    public ?array $repository = null;
    public ?string $repository_url = null;
    public ?array $requested_reviewer = null;
    public ?array $requested_team = null;
    public ?array $review_requester = null;
    public ?string $state = null;
    public ?string $state_reason = null;
    public ?int $sub_issue_id = null;
    public ?array $sub_issues_summary = null;
    public ?string $timeline_url = null;
    public ?string $title = null;
    public ?array $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?array $user = null;
}

/** Request payload for Issue#remove. */
class IssueRemoveMatch
{
    public ?int $id = null;
    public ?int $issue_id = null;
    public string $owner;
    public string $repo;
    public ?string $name = null;
    public ?int $comment_id = null;
    public ?int $milestone_number = null;
}

/** IssueType entity data model. */
class IssueType
{
    public ?string $color = null;
    public ?string $created_at = null;
    public string $description;
    public int $id;
    public ?bool $is_enabled = null;
    public string $name;
    public string $node_id;
    public ?string $updated_at = null;
}

/** Request payload for IssueType#list. */
class IssueTypeListMatch
{
    public string $org_id;
}

/** Request payload for IssueType#create. */
class IssueTypeCreateData
{
    public string $org_id;
    public ?string $color = null;
    public ?string $created_at = null;
    public string $description;
    public int $id;
    public ?bool $is_enabled = null;
    public string $name;
    public string $node_id;
    public ?string $updated_at = null;
}

/** Request payload for IssueType#update. */
class IssueTypeUpdateData
{
    public int $id;
    public string $org_id;
    public ?string $color = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?bool $is_enabled = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $updated_at = null;
}

/** Job entity data model. */
class Job
{
    public string $check_run_url;
    public string $completed_at;
    public string $conclusion;
    public string $created_at;
    public string $head_branch;
    public string $head_sha;
    public string $html_url;
    public int $id;
    public array $labels;
    public string $name;
    public string $node_id;
    public ?int $run_attempt = null;
    public int $run_id;
    public string $run_url;
    public int $runner_group_id;
    public string $runner_group_name;
    public int $runner_id;
    public string $runner_name;
    public string $started_at;
    public string $status;
    public ?array $steps = null;
    public string $url;
    public string $workflow_name;
}

/** Request payload for Job#load. */
class JobLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Key entity data model. */
class Key
{
    public string $created_at;
    public int $id;
    public string $key;
    public ?string $last_used = null;
    public bool $read_only;
    public string $title;
    public string $url;
    public bool $verified;
}

/** Request payload for Key#load. */
class KeyLoadMatch
{
    public int $id;
}

/** Request payload for Key#list. */
class KeyListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Key#create. */
class KeyCreateData
{
    public string $created_at;
    public int $id;
    public string $key;
    public ?string $last_used = null;
    public bool $read_only;
    public string $title;
    public string $url;
    public bool $verified;
}

/** Label entity data model. */
class Label
{
    public string $color;
    public bool $default;
    public string $description;
    public int $id;
    public string $name;
    public ?string $new_name = null;
    public string $node_id;
    public string $url;
}

/** Request payload for Label#load. */
class LabelLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
}

/** Request payload for Label#list. */
class LabelListMatch
{
    public ?int $milestone_number = null;
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Label#create. */
class LabelCreateData
{
    public string $owner;
    public string $repo;
    public string $color;
    public bool $default;
    public string $description;
    public int $id;
    public string $name;
    public ?string $new_name = null;
    public string $node_id;
    public string $url;
}

/** Request payload for Label#update. */
class LabelUpdateData
{
    public string $id;
    public string $owner;
    public string $repo;
    public ?string $color = null;
    public ?bool $default = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?string $new_name = null;
    public ?string $node_id = null;
    public ?string $url = null;
}

/** Language entity data model. */
class Language
{
    public ?int $C = null;
    public ?int $Python = null;
}

/** Request payload for Language#load. */
class LanguageLoadMatch
{
    public string $owner;
    public string $repo;
}

/** License entity data model. */
class License
{
    public string $body;
    public array $conditions;
    public string $content;
    public string $description;
    public string $download_url;
    public string $encoding;
    public bool $featured;
    public string $git_url;
    public string $html_url;
    public ?string $id = null;
    public string $implementation;
    public string $key;
    public array $license;
    public array $limitations;
    public array $links;
    public string $name;
    public string $node_id;
    public string $path;
    public array $permissions;
    public string $sha;
    public int $size;
    public string $spdx_id;
    public string $type;
    public string $url;
}

/** Request payload for License#load. */
class LicenseLoadMatch
{
    public string $id;
}

/** Request payload for License#list. */
class LicenseListMatch
{
    public ?bool $featured = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Markdown entity data model. */
class Markdown
{
    public ?string $context = null;
    public ?string $mode = null;
    public string $text;
}

/** Request payload for Markdown#create. */
class MarkdownCreateData
{
    public ?string $context = null;
    public ?string $mode = null;
    public string $text;
}

/** MarketplaceListingPlan entity data model. */
class MarketplaceListingPlan
{
    public string $accounts_url;
    public array $bullets;
    public string $description;
    public bool $has_free_trial;
    public int $id;
    public int $monthly_price_in_cents;
    public string $name;
    public int $number;
    public string $price_model;
    public string $state;
    public string $unit_name;
    public string $url;
    public int $yearly_price_in_cents;
}

/** Request payload for MarketplaceListingPlan#list. */
class MarketplaceListingPlanListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** MarketplacePurchase entity data model. */
class MarketplacePurchase
{
    public ?string $email = null;
    public int $id;
    public string $login;
    public ?array $marketplace_pending_change = null;
    public array $marketplace_purchase;
    public ?string $organization_billing_email = null;
    public string $type;
    public string $url;
}

/** Request payload for MarketplacePurchase#load. */
class MarketplacePurchaseLoadMatch
{
    public int $account_id;
}

/** Request payload for MarketplacePurchase#list. */
class MarketplacePurchaseListMatch
{
    public int $plan_id;
    public ?string $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $sort = null;
}

/** Member entity data model. */
class Member
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Member#list. */
class MemberListMatch
{
    public string $org_id;
    public ?string $filter = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $role = null;
}

/** Membership entity data model. */
class Membership
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Membership#load. */
class MembershipLoadMatch
{
    public string $enterprise;
    public string $id;
    public string $team_id;
}

/** Request payload for Membership#list. */
class MembershipListMatch
{
    public string $enterprise;
    public string $enterprise_team;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Membership#update. */
class MembershipUpdateData
{
    public string $enterprise;
    public string $id;
    public string $team_id;
    public ?string $avatar_url = null;
    public ?string $email = null;
    public ?string $events_url = null;
    public ?string $followers_url = null;
    public ?string $following_url = null;
    public ?string $gists_url = null;
    public ?string $gravatar_id = null;
    public ?string $html_url = null;
    public ?string $login = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $organizations_url = null;
    public ?string $received_events_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public ?string $starred_at = null;
    public ?string $starred_url = null;
    public ?string $subscriptions_url = null;
    public ?string $type = null;
    public ?string $url = null;
    public ?string $user_view_type = null;
}

/** MergedUpstream entity data model. */
class MergedUpstream
{
    public ?string $base_branch = null;
    public string $branch;
    public ?string $merge_type = null;
    public ?string $message = null;
}

/** Request payload for MergedUpstream#create. */
class MergedUpstreamCreateData
{
    public string $owner;
    public string $repo;
    public ?string $base_branch = null;
    public string $branch;
    public ?string $merge_type = null;
    public ?string $message = null;
}

/** Meta entity data model. */
class Meta
{
}

/** Request payload for Meta#load. */
class MetaLoadMatch
{
    public ?string $s = null;
}

/** Request payload for Meta#list. */
class MetaListMatch
{
}

/** Metaroot entity data model. */
class Metaroot
{
    public string $authorizations_url;
    public string $code_search_url;
    public string $commit_search_url;
    public string $current_user_authorizations_html_url;
    public string $current_user_repositories_url;
    public string $current_user_url;
    public string $emails_url;
    public string $emojis_url;
    public string $events_url;
    public string $feeds_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public ?string $hub_url = null;
    public string $issue_search_url;
    public string $issues_url;
    public string $keys_url;
    public string $label_search_url;
    public string $notifications_url;
    public string $organization_repositories_url;
    public string $organization_teams_url;
    public string $organization_url;
    public string $public_gists_url;
    public string $rate_limit_url;
    public string $repository_search_url;
    public string $repository_url;
    public string $starred_gists_url;
    public string $starred_url;
    public ?string $topic_search_url = null;
    public string $user_organizations_url;
    public string $user_repositories_url;
    public string $user_search_url;
    public string $user_url;
}

/** Request payload for Metaroot#load. */
class MetarootLoadMatch
{
    public ?string $authorizations_url = null;
    public ?string $code_search_url = null;
    public ?string $commit_search_url = null;
    public ?string $current_user_authorizations_html_url = null;
    public ?string $current_user_repositories_url = null;
    public ?string $current_user_url = null;
    public ?string $emails_url = null;
    public ?string $emojis_url = null;
    public ?string $events_url = null;
    public ?string $feeds_url = null;
    public ?string $followers_url = null;
    public ?string $following_url = null;
    public ?string $gists_url = null;
    public ?string $hub_url = null;
    public ?string $issue_search_url = null;
    public ?string $issues_url = null;
    public ?string $keys_url = null;
    public ?string $label_search_url = null;
    public ?string $notifications_url = null;
    public ?string $organization_repositories_url = null;
    public ?string $organization_teams_url = null;
    public ?string $organization_url = null;
    public ?string $public_gists_url = null;
    public ?string $rate_limit_url = null;
    public ?string $repository_search_url = null;
    public ?string $repository_url = null;
    public ?string $starred_gists_url = null;
    public ?string $starred_url = null;
    public ?string $topic_search_url = null;
    public ?string $user_organizations_url = null;
    public ?string $user_repositories_url = null;
    public ?string $user_search_url = null;
    public ?string $user_url = null;
}

/** Migration entity data model. */
class Migration
{
    public ?bool $allow_forking = null;
    public ?string $archive_url = null;
    public ?bool $archived = null;
    public string $assignees_url;
    public string $blobs_url;
    public string $branches_url;
    public ?string $clone_url = null;
    public array $code_of_conduct;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public string $created_at;
    public ?array $custom_properties = null;
    public ?string $default_branch = null;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public ?bool $disabled = null;
    public string $downloads_url;
    public string $events_url;
    public ?array $exclude = null;
    public bool $exclude_attachments;
    public bool $exclude_git_data;
    public bool $exclude_metadata;
    public bool $exclude_owner_projects;
    public bool $exclude_releases;
    public bool $fork;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public ?string $git_url = null;
    public string $guid;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public ?string $language = null;
    public string $languages_url;
    public ?array $license = null;
    public bool $lock_repositories;
    public string $merges_url;
    public string $milestones_url;
    public ?string $mirror_url = null;
    public string $name;
    public ?int $network_count = null;
    public string $node_id;
    public string $notifications_url;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public bool $org_metadata_only;
    public array $owner;
    public ?array $permissions = null;
    public bool $private;
    public string $pulls_url;
    public ?string $pushed_at = null;
    public string $releases_url;
    public array $repositories;
    public ?string $role_name = null;
    public ?array $security_and_analysis = null;
    public ?int $size = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public string $stargazers_url;
    public string $state;
    public string $statuses_url;
    public ?int $subscribers_count = null;
    public string $subscribers_url;
    public string $subscription_url;
    public ?string $svn_url = null;
    public string $tags_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public string $trees_url;
    public string $updated_at;
    public string $url;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Migration#load. */
class MigrationLoadMatch
{
    public int $id;
    public ?string $org_id = null;
    public ?array $exclude = null;
}

/** Request payload for Migration#list. */
class MigrationListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Migration#create. */
class MigrationCreateData
{
    public ?bool $allow_forking = null;
    public ?string $archive_url = null;
    public ?bool $archived = null;
    public string $assignees_url;
    public string $blobs_url;
    public string $branches_url;
    public ?string $clone_url = null;
    public array $code_of_conduct;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public string $created_at;
    public ?array $custom_properties = null;
    public ?string $default_branch = null;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public ?bool $disabled = null;
    public string $downloads_url;
    public string $events_url;
    public ?array $exclude = null;
    public bool $exclude_attachments;
    public bool $exclude_git_data;
    public bool $exclude_metadata;
    public bool $exclude_owner_projects;
    public bool $exclude_releases;
    public bool $fork;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public ?string $git_url = null;
    public string $guid;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public ?string $language = null;
    public string $languages_url;
    public ?array $license = null;
    public bool $lock_repositories;
    public string $merges_url;
    public string $milestones_url;
    public ?string $mirror_url = null;
    public string $name;
    public ?int $network_count = null;
    public string $node_id;
    public string $notifications_url;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public bool $org_metadata_only;
    public array $owner;
    public ?array $permissions = null;
    public bool $private;
    public string $pulls_url;
    public ?string $pushed_at = null;
    public string $releases_url;
    public array $repositories;
    public ?string $role_name = null;
    public ?array $security_and_analysis = null;
    public ?int $size = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public string $stargazers_url;
    public string $state;
    public string $statuses_url;
    public ?int $subscribers_count = null;
    public string $subscribers_url;
    public string $subscription_url;
    public ?string $svn_url = null;
    public string $tags_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public string $trees_url;
    public string $updated_at;
    public string $url;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Migration#remove. */
class MigrationRemoveMatch
{
    public string $owner;
    public string $repo;
}

/** Milestone entity data model. */
class Milestone
{
    public string $avatar_url;
    public string $closed_at;
    public int $closed_issues;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public ?string $due_on = null;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $labels_url;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public int $number;
    public int $open_issues;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public ?string $state = null;
    public string $subscriptions_url;
    public string $title;
    public string $type;
    public string $updated_at;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Milestone#load. */
class MilestoneLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for Milestone#list. */
class MilestoneListMatch
{
    public string $owner;
    public string $repo;
    public ?string $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $sort = null;
    public ?string $state = null;
}

/** Request payload for Milestone#create. */
class MilestoneCreateData
{
    public string $owner;
    public string $repo;
    public string $avatar_url;
    public string $closed_at;
    public int $closed_issues;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public ?string $due_on = null;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $labels_url;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public int $number;
    public int $open_issues;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public ?string $state = null;
    public string $subscriptions_url;
    public string $title;
    public string $type;
    public string $updated_at;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Milestone#update. */
class MilestoneUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?string $avatar_url = null;
    public ?string $closed_at = null;
    public ?int $closed_issues = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?string $due_on = null;
    public ?string $email = null;
    public ?string $events_url = null;
    public ?string $followers_url = null;
    public ?string $following_url = null;
    public ?string $gists_url = null;
    public ?string $gravatar_id = null;
    public ?string $html_url = null;
    public ?string $labels_url = null;
    public ?string $login = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?int $number = null;
    public ?int $open_issues = null;
    public ?string $organizations_url = null;
    public ?string $received_events_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public ?string $starred_at = null;
    public ?string $starred_url = null;
    public ?string $state = null;
    public ?string $subscriptions_url = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user_view_type = null;
}

/** MinimalRepository entity data model. */
class MinimalRepository
{
    public ?bool $allow_forking = null;
    public string $archive_url;
    public ?bool $archived = null;
    public string $assignees_url;
    public string $blobs_url;
    public string $branches_url;
    public ?string $clone_url = null;
    public array $code_of_conduct;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public ?string $created_at = null;
    public ?array $custom_properties = null;
    public ?string $default_branch = null;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public ?bool $disabled = null;
    public string $downloads_url;
    public string $events_url;
    public bool $fork;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public ?string $git_url = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public ?string $language = null;
    public string $languages_url;
    public ?array $license = null;
    public string $merges_url;
    public string $milestones_url;
    public ?string $mirror_url = null;
    public string $name;
    public ?int $network_count = null;
    public string $node_id;
    public string $notifications_url;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public array $owner;
    public ?array $permissions = null;
    public bool $private;
    public string $pulls_url;
    public ?string $pushed_at = null;
    public string $releases_url;
    public ?string $role_name = null;
    public ?array $security_and_analysis = null;
    public ?int $size = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public string $stargazers_url;
    public string $statuses_url;
    public ?int $subscribers_count = null;
    public string $subscribers_url;
    public string $subscription_url;
    public ?string $svn_url = null;
    public string $tags_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public string $trees_url;
    public ?string $updated_at = null;
    public string $url;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for MinimalRepository#list. */
class MinimalRepositoryListMatch
{
    public ?int $since = null;
}

/** NetworkConfiguration entity data model. */
class NetworkConfiguration
{
    public ?string $compute_service = null;
    public string $created_on;
    public string $id;
    public string $name;
    public ?array $network_settings_ids = null;
}

/** Request payload for NetworkConfiguration#load. */
class NetworkConfigurationLoadMatch
{
    public string $id;
    public string $org_id;
}

/** Request payload for NetworkConfiguration#create. */
class NetworkConfigurationCreateData
{
    public string $org_id;
    public ?string $compute_service = null;
    public string $created_on;
    public string $id;
    public string $name;
    public ?array $network_settings_ids = null;
}

/** Request payload for NetworkConfiguration#update. */
class NetworkConfigurationUpdateData
{
    public string $id;
    public string $org_id;
    public ?string $compute_service = null;
    public ?string $created_on = null;
    public ?string $name = null;
    public ?array $network_settings_ids = null;
}

/** NetworkSetting entity data model. */
class NetworkSetting
{
    public string $id;
    public string $name;
    public ?string $network_configuration_id = null;
    public string $region;
    public string $subnet_id;
}

/** Request payload for NetworkSetting#load. */
class NetworkSettingLoadMatch
{
    public string $id;
    public string $org_id;
}

/** OidcCustomSub entity data model. */
class OidcCustomSub
{
    public array $include_claim_keys;
}

/** Request payload for OidcCustomSub#list. */
class OidcCustomSubListMatch
{
    public string $org_id;
}

/** OidcCustomSubRepo entity data model. */
class OidcCustomSubRepo
{
    public ?array $include_claim_keys = null;
    public bool $use_default;
}

/** Request payload for OidcCustomSubRepo#list. */
class OidcCustomSubRepoListMatch
{
    public string $owner;
    public string $repo;
}

/** Org entity data model. */
class Org
{
    public string $access_tokens_url;
    public mixed $account;
    public string $action;
    public ?bool $advanced_security_enabled_for_new_repositories = null;
    public int $app_id;
    public string $app_slug;
    public ?string $artifact_url = null;
    public ?bool $async = null;
    public ?array $attestations = null;
    public ?array $attestations_subject_digests = null;
    public string $avatar_url;
    public ?string $base_role = null;
    public ?string $billing_email = null;
    public ?string $blog = null;
    public ?string $client_id = null;
    public ?string $company = null;
    public ?string $contact_email = null;
    public string $created_at;
    public ?string $default_repository_permission = null;
    public ?bool $dependabot_alerts_enabled_for_new_repositories = null;
    public ?bool $dependabot_security_updates_enabled_for_new_repositories = null;
    public ?bool $dependency_graph_enabled_for_new_repositories = null;
    public ?bool $deploy_keys_enabled_for_repositories = null;
    public ?string $description = null;
    public string $digest;
    public ?bool $direct_membership = null;
    public ?string $email = null;
    public ?array $enterprise_teams_providing_indirect_membership = null;
    public array $events;
    public string $events_url;
    public ?int $filled_seats = null;
    public ?bool $has_multiple_single_files = null;
    public ?bool $has_organization_projects = null;
    public ?bool $has_repository_projects = null;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public string $issues_url;
    public ?string $location = null;
    public string $login;
    public ?string $members_allowed_repository_creation_type = null;
    public ?bool $members_can_create_internal_repositories = null;
    public ?bool $members_can_create_pages = null;
    public ?bool $members_can_create_private_pages = null;
    public ?bool $members_can_create_private_repositories = null;
    public ?bool $members_can_create_public_pages = null;
    public ?bool $members_can_create_public_repositories = null;
    public ?bool $members_can_create_repositories = null;
    public ?bool $members_can_fork_private_repositories = null;
    public string $members_url;
    public string $name;
    public string $node_id;
    public array $organization;
    public string $organization_url;
    public ?array $page_info = null;
    public array $pat_ids;
    public ?array $pat_request_ids = null;
    public ?string $path = null;
    public array $permissions;
    public ?string $predicate_type = null;
    public int $private_repos;
    public array $properties;
    public string $public_members_url;
    public ?string $query_suite = null;
    public ?string $reason = null;
    public string $registry_url;
    public string $repos_url;
    public string $repositories_url;
    public ?string $repository = null;
    public array $repository_names;
    public string $repository_selection;
    public string $role;
    public ?int $seats = null;
    public ?bool $secret_scanning_enabled_for_new_repositories = null;
    public ?string $secret_scanning_push_protection_custom_link = null;
    public ?bool $secret_scanning_push_protection_custom_link_enabled = null;
    public ?bool $secret_scanning_push_protection_enabled_for_new_repositories = null;
    public string $single_file_name;
    public ?array $single_file_paths = null;
    public ?string $source = null;
    public int $space;
    public string $state;
    public ?string $status = null;
    public ?array $storage_records = null;
    public array $subject_digests;
    public string $suspended_at;
    public array $suspended_by;
    public int $target_id;
    public string $target_type;
    public ?int $total_count = null;
    public ?string $twitter_username = null;
    public string $updated_at;
    public string $url;
    public array $user;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Org#load. */
class OrgLoadMatch
{
    public string $id;
    public ?string $subject_digest = null;
    public ?string $after = null;
    public ?string $before = null;
    public ?int $per_page = null;
    public ?string $predicate_type = null;
    public ?string $username = null;
}

/** Request payload for Org#list. */
class OrgListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Org#create. */
class OrgCreateData
{
    public string $enablement;
    public string $org;
    public string $security_product;
    public string $access_tokens_url;
    public mixed $account;
    public string $action;
    public ?bool $advanced_security_enabled_for_new_repositories = null;
    public int $app_id;
    public string $app_slug;
    public ?string $artifact_url = null;
    public ?bool $async = null;
    public ?array $attestations = null;
    public ?array $attestations_subject_digests = null;
    public string $avatar_url;
    public ?string $base_role = null;
    public ?string $billing_email = null;
    public ?string $blog = null;
    public ?string $client_id = null;
    public ?string $company = null;
    public ?string $contact_email = null;
    public string $created_at;
    public ?string $default_repository_permission = null;
    public ?bool $dependabot_alerts_enabled_for_new_repositories = null;
    public ?bool $dependabot_security_updates_enabled_for_new_repositories = null;
    public ?bool $dependency_graph_enabled_for_new_repositories = null;
    public ?bool $deploy_keys_enabled_for_repositories = null;
    public ?string $description = null;
    public string $digest;
    public ?bool $direct_membership = null;
    public ?string $email = null;
    public ?array $enterprise_teams_providing_indirect_membership = null;
    public array $events;
    public string $events_url;
    public ?int $filled_seats = null;
    public ?bool $has_multiple_single_files = null;
    public ?bool $has_organization_projects = null;
    public ?bool $has_repository_projects = null;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public string $issues_url;
    public ?string $location = null;
    public string $login;
    public ?string $members_allowed_repository_creation_type = null;
    public ?bool $members_can_create_internal_repositories = null;
    public ?bool $members_can_create_pages = null;
    public ?bool $members_can_create_private_pages = null;
    public ?bool $members_can_create_private_repositories = null;
    public ?bool $members_can_create_public_pages = null;
    public ?bool $members_can_create_public_repositories = null;
    public ?bool $members_can_create_repositories = null;
    public ?bool $members_can_fork_private_repositories = null;
    public string $members_url;
    public string $name;
    public string $node_id;
    public array $organization;
    public string $organization_url;
    public ?array $page_info = null;
    public array $pat_ids;
    public ?array $pat_request_ids = null;
    public ?string $path = null;
    public array $permissions;
    public ?string $predicate_type = null;
    public int $private_repos;
    public array $properties;
    public string $public_members_url;
    public ?string $query_suite = null;
    public ?string $reason = null;
    public string $registry_url;
    public string $repos_url;
    public string $repositories_url;
    public ?string $repository = null;
    public array $repository_names;
    public string $repository_selection;
    public string $role;
    public ?int $seats = null;
    public ?bool $secret_scanning_enabled_for_new_repositories = null;
    public ?string $secret_scanning_push_protection_custom_link = null;
    public ?bool $secret_scanning_push_protection_custom_link_enabled = null;
    public ?bool $secret_scanning_push_protection_enabled_for_new_repositories = null;
    public string $single_file_name;
    public ?array $single_file_paths = null;
    public ?string $source = null;
    public int $space;
    public string $state;
    public ?string $status = null;
    public ?array $storage_records = null;
    public array $subject_digests;
    public string $suspended_at;
    public array $suspended_by;
    public int $target_id;
    public string $target_type;
    public ?int $total_count = null;
    public ?string $twitter_username = null;
    public string $updated_at;
    public string $url;
    public array $user;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Org#update. */
class OrgUpdateData
{
    public string $id;
    public string $username;
    public ?string $access_tokens_url = null;
    public mixed $account = null;
    public ?string $action = null;
    public ?bool $advanced_security_enabled_for_new_repositories = null;
    public ?int $app_id = null;
    public ?string $app_slug = null;
    public ?string $artifact_url = null;
    public ?bool $async = null;
    public ?array $attestations = null;
    public ?array $attestations_subject_digests = null;
    public ?string $avatar_url = null;
    public ?string $base_role = null;
    public ?string $billing_email = null;
    public ?string $blog = null;
    public ?string $client_id = null;
    public ?string $company = null;
    public ?string $contact_email = null;
    public ?string $created_at = null;
    public ?string $default_repository_permission = null;
    public ?bool $dependabot_alerts_enabled_for_new_repositories = null;
    public ?bool $dependabot_security_updates_enabled_for_new_repositories = null;
    public ?bool $dependency_graph_enabled_for_new_repositories = null;
    public ?bool $deploy_keys_enabled_for_repositories = null;
    public ?string $description = null;
    public ?string $digest = null;
    public ?bool $direct_membership = null;
    public ?string $email = null;
    public ?array $enterprise_teams_providing_indirect_membership = null;
    public ?array $events = null;
    public ?string $events_url = null;
    public ?int $filled_seats = null;
    public ?bool $has_multiple_single_files = null;
    public ?bool $has_organization_projects = null;
    public ?bool $has_repository_projects = null;
    public ?string $hooks_url = null;
    public ?string $html_url = null;
    public ?string $issues_url = null;
    public ?string $location = null;
    public ?string $login = null;
    public ?string $members_allowed_repository_creation_type = null;
    public ?bool $members_can_create_internal_repositories = null;
    public ?bool $members_can_create_pages = null;
    public ?bool $members_can_create_private_pages = null;
    public ?bool $members_can_create_private_repositories = null;
    public ?bool $members_can_create_public_pages = null;
    public ?bool $members_can_create_public_repositories = null;
    public ?bool $members_can_create_repositories = null;
    public ?bool $members_can_fork_private_repositories = null;
    public ?string $members_url = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?array $organization = null;
    public ?string $organization_url = null;
    public ?array $page_info = null;
    public ?array $pat_ids = null;
    public ?array $pat_request_ids = null;
    public ?string $path = null;
    public ?array $permissions = null;
    public ?string $predicate_type = null;
    public ?int $private_repos = null;
    public ?array $properties = null;
    public ?string $public_members_url = null;
    public ?string $query_suite = null;
    public ?string $reason = null;
    public ?string $registry_url = null;
    public ?string $repos_url = null;
    public ?string $repositories_url = null;
    public ?string $repository = null;
    public ?array $repository_names = null;
    public ?string $repository_selection = null;
    public ?string $role = null;
    public ?int $seats = null;
    public ?bool $secret_scanning_enabled_for_new_repositories = null;
    public ?string $secret_scanning_push_protection_custom_link = null;
    public ?bool $secret_scanning_push_protection_custom_link_enabled = null;
    public ?bool $secret_scanning_push_protection_enabled_for_new_repositories = null;
    public ?string $single_file_name = null;
    public ?array $single_file_paths = null;
    public ?string $source = null;
    public ?int $space = null;
    public ?string $state = null;
    public ?string $status = null;
    public ?array $storage_records = null;
    public ?array $subject_digests = null;
    public ?string $suspended_at = null;
    public ?array $suspended_by = null;
    public ?int $target_id = null;
    public ?string $target_type = null;
    public ?int $total_count = null;
    public ?string $twitter_username = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?array $user = null;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Org#remove. */
class OrgRemoveMatch
{
    public string $id;
}

/** OrgHook entity data model. */
class OrgHook
{
    public bool $active;
    public array $config;
    public string $created_at;
    public ?string $deliveries_url = null;
    public array $events;
    public int $id;
    public string $name;
    public string $ping_url;
    public string $type;
    public string $updated_at;
    public string $url;
}

/** Request payload for OrgHook#load. */
class OrgHookLoadMatch
{
    public int $id;
    public string $org_id;
}

/** Request payload for OrgHook#list. */
class OrgHookListMatch
{
    public string $id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for OrgHook#create. */
class OrgHookCreateData
{
    public string $id;
    public bool $active;
    public array $config;
    public string $created_at;
    public ?string $deliveries_url = null;
    public array $events;
    public string $name;
    public string $ping_url;
    public string $type;
    public string $updated_at;
    public string $url;
}

/** Request payload for OrgHook#update. */
class OrgHookUpdateData
{
    public int $id;
    public string $org_id;
    public ?bool $active = null;
    public ?array $config = null;
    public ?string $created_at = null;
    public ?string $deliveries_url = null;
    public ?array $events = null;
    public ?string $name = null;
    public ?string $ping_url = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** OrgMembership entity data model. */
class OrgMembership
{
    public ?bool $direct_membership = null;
    public ?array $enterprise_teams_providing_indirect_membership = null;
    public ?string $id = null;
    public array $organization;
    public string $organization_url;
    public array $permissions;
    public string $role;
    public string $state;
    public string $url;
    public array $user;
}

/** Request payload for OrgMembership#load. */
class OrgMembershipLoadMatch
{
    public string $id;
    public string $org_id;
}

/** Request payload for OrgMembership#update. */
class OrgMembershipUpdateData
{
    public string $id;
    public string $org_id;
    public ?bool $direct_membership = null;
    public ?array $enterprise_teams_providing_indirect_membership = null;
    public ?array $organization = null;
    public ?string $organization_url = null;
    public ?array $permissions = null;
    public ?string $role = null;
    public ?string $state = null;
    public ?string $url = null;
    public ?array $user = null;
}

/** OrgPrivateRegistryConfiguration entity data model. */
class OrgPrivateRegistryConfiguration
{
    public string $created_at;
    public string $name;
    public string $registry_type;
    public string $updated_at;
    public ?string $username = null;
    public string $visibility;
}

/** Request payload for OrgPrivateRegistryConfiguration#load. */
class OrgPrivateRegistryConfigurationLoadMatch
{
    public string $org_id;
    public string $secret_name;
}

/** OrgPrivateRegistryConfigurationWithSelectedRepository entity data model. */
class OrgPrivateRegistryConfigurationWithSelectedRepository
{
    public string $encrypted_value;
    public ?string $id = null;
    public string $key_id;
    public string $registry_type;
    public ?array $selected_repository_ids = null;
    public string $url;
    public ?string $username = null;
    public string $visibility;
}

/** Request payload for OrgPrivateRegistryConfigurationWithSelectedRepository#create. */
class OrgPrivateRegistryConfigurationWithSelectedRepositoryCreateData
{
    public string $id;
    public string $encrypted_value;
    public string $key_id;
    public string $registry_type;
    public ?array $selected_repository_ids = null;
    public string $url;
    public ?string $username = null;
    public string $visibility;
}

/** OrgRepoCustomPropertyValue entity data model. */
class OrgRepoCustomPropertyValue
{
    public array $properties;
    public string $repository_full_name;
    public int $repository_id;
    public string $repository_name;
}

/** Request payload for OrgRepoCustomPropertyValue#list. */
class OrgRepoCustomPropertyValueListMatch
{
    public string $org_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $repository_query = null;
}

/** Organization entity data model. */
class Organization
{
}

/** OrganizationActionsSecret entity data model. */
class OrganizationActionsSecret
{
    public string $created_at;
    public ?string $id = null;
    public string $name;
    public ?string $selected_repositories_url = null;
    public string $updated_at;
    public string $visibility;
}

/** Request payload for OrganizationActionsSecret#load. */
class OrganizationActionsSecretLoadMatch
{
    public string $id;
    public string $org_id;
}

/** OrganizationActionsVariable entity data model. */
class OrganizationActionsVariable
{
    public string $created_at;
    public ?string $id = null;
    public string $name;
    public ?string $selected_repositories_url = null;
    public string $updated_at;
    public string $value;
    public string $visibility;
}

/** Request payload for OrganizationActionsVariable#load. */
class OrganizationActionsVariableLoadMatch
{
    public string $id;
    public string $org_id;
}

/** OrganizationDependabotSecret entity data model. */
class OrganizationDependabotSecret
{
    public string $created_at;
    public ?string $id = null;
    public string $name;
    public ?string $selected_repositories_url = null;
    public string $updated_at;
    public string $visibility;
}

/** Request payload for OrganizationDependabotSecret#load. */
class OrganizationDependabotSecretLoadMatch
{
    public string $id;
    public string $org_id;
}

/** OrganizationInvitation entity data model. */
class OrganizationInvitation
{
    public string $created_at;
    public ?string $email = null;
    public ?string $failed_at = null;
    public ?string $failed_reason = null;
    public int $id;
    public ?string $invitation_source = null;
    public string $invitation_teams_url;
    public ?int $invitee_id = null;
    public array $inviter;
    public string $login;
    public string $node_id;
    public ?string $role = null;
    public int $team_count;
    public ?array $team_ids = null;
}

/** Request payload for OrganizationInvitation#list. */
class OrganizationInvitationListMatch
{
    public string $org_id;
    public ?string $invitation_source = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $role = null;
}

/** Request payload for OrganizationInvitation#create. */
class OrganizationInvitationCreateData
{
    public string $org_id;
    public string $created_at;
    public ?string $email = null;
    public ?string $failed_at = null;
    public ?string $failed_reason = null;
    public int $id;
    public ?string $invitation_source = null;
    public string $invitation_teams_url;
    public ?int $invitee_id = null;
    public array $inviter;
    public string $login;
    public string $node_id;
    public ?string $role = null;
    public int $team_count;
    public ?array $team_ids = null;
}

/** OrganizationProgrammaticAccessGrant entity data model. */
class OrganizationProgrammaticAccessGrant
{
    public string $access_granted_at;
    public string $created_at;
    public int $id;
    public array $owner;
    public array $permissions;
    public string $reason;
    public string $repositories_url;
    public string $repository_selection;
    public bool $token_expired;
    public string $token_expires_at;
    public int $token_id;
    public string $token_last_used_at;
    public string $token_name;
}

/** Request payload for OrganizationProgrammaticAccessGrant#list. */
class OrganizationProgrammaticAccessGrantListMatch
{
    public string $org_id;
    public ?string $direction = null;
    public ?string $last_used_after = null;
    public ?string $last_used_before = null;
    public ?array $owner = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $permission = null;
    public ?string $repository = null;
    public ?string $sort = null;
    public ?array $token_id = null;
}

/** OrganizationRole entity data model. */
class OrganizationRole
{
    public ?string $base_role = null;
    public string $created_at;
    public ?string $description = null;
    public int $id;
    public string $name;
    public array $organization;
    public array $permissions;
    public ?string $source = null;
    public string $updated_at;
}

/** Request payload for OrganizationRole#load. */
class OrganizationRoleLoadMatch
{
    public int $id;
    public string $org_id;
}

/** OrganizationSecretScanningAlert entity data model. */
class OrganizationSecretScanningAlert
{
    public ?string $created_at = null;
    public mixed $first_location_detected = null;
    public ?bool $has_more_locations = null;
    public ?string $html_url = null;
    public ?bool $is_base64_encoded = null;
    public ?string $locations_url = null;
    public ?bool $multi_repo = null;
    public ?int $number = null;
    public ?bool $publicly_leaked = null;
    public ?string $push_protection_bypass_request_comment = null;
    public ?string $push_protection_bypass_request_html_url = null;
    public array $push_protection_bypass_request_reviewer;
    public ?string $push_protection_bypass_request_reviewer_comment = null;
    public ?bool $push_protection_bypassed = null;
    public ?string $push_protection_bypassed_at = null;
    public array $push_protection_bypassed_by;
    public array $repository;
    public ?string $resolution = null;
    public ?string $resolution_comment = null;
    public ?string $resolved_at = null;
    public array $resolved_by;
    public ?string $secret = null;
    public ?string $secret_type = null;
    public ?string $secret_type_display_name = null;
    public ?string $state = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $validity = null;
}

/** Request payload for OrganizationSecretScanningAlert#list. */
class OrganizationSecretScanningAlertListMatch
{
    public string $org_id;
    public ?string $after = null;
    public ?string $before = null;
    public ?string $direction = null;
    public ?bool $hide_secret = null;
    public ?bool $is_multi_repo = null;
    public ?bool $is_publicly_leaked = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $resolution = null;
    public ?string $secret_type = null;
    public ?string $sort = null;
    public ?string $state = null;
    public ?string $validity = null;
}

/** OutsideCollaborator entity data model. */
class OutsideCollaborator
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for OutsideCollaborator#list. */
class OutsideCollaboratorListMatch
{
    public string $org_id;
    public ?string $filter = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Package entity data model. */
class Package
{
    public array $container;
    public string $created_at;
    public ?string $deleted_at = null;
    public ?string $description = null;
    public array $docker;
    public int $github_id;
    public string $html_url;
    public string $id;
    public int $included_gigabytes_bandwidth;
    public ?string $license = null;
    public array $metadata;
    public string $name;
    public array $owner;
    public string $package_html_url;
    public string $package_type;
    public array $repository;
    public int $total_gigabytes_bandwidth_used;
    public int $total_paid_gigabytes_bandwidth_used;
    public string $updated_at;
    public string $url;
    public int $version_count;
    public string $visibility;
}

/** Request payload for Package#load. */
class PackageLoadMatch
{
    public string $package_name;
    public string $package_type;
}

/** Request payload for Package#list. */
class PackageListMatch
{
    public string $package_type;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $visibility = null;
}

/** Request payload for Package#create. */
class PackageCreateData
{
    public ?string $org_id = null;
    public string $package_id;
    public string $package_name;
    public ?string $token = null;
    public ?string $username = null;
    public array $container;
    public string $created_at;
    public ?string $deleted_at = null;
    public ?string $description = null;
    public array $docker;
    public int $github_id;
    public string $html_url;
    public string $id;
    public int $included_gigabytes_bandwidth;
    public ?string $license = null;
    public array $metadata;
    public string $name;
    public array $owner;
    public string $package_html_url;
    public string $package_type;
    public array $repository;
    public int $total_gigabytes_bandwidth_used;
    public int $total_paid_gigabytes_bandwidth_used;
    public string $updated_at;
    public string $url;
    public int $version_count;
    public string $visibility;
}

/** Request payload for Package#remove. */
class PackageRemoveMatch
{
    public ?string $org_id = null;
    public ?string $package_id = null;
    public string $package_name;
    public ?int $package_version_id = null;
    public ?string $username = null;
    public ?string $org = null;
    public ?string $package_type = null;
}

/** Page entity data model. */
class Page
{
    public ?string $build_type = null;
    public string $cname;
    public bool $custom_404;
    public ?string $html_url = null;
    public array $https_certificate;
    public ?bool $https_enforced = null;
    public ?string $pending_domain_unverified_at = null;
    public ?string $protected_domain_state = null;
    public bool $public;
    public array $source;
    public string $status;
    public string $url;
}

/** Request payload for Page#load. */
class PageLoadMatch
{
    public string $owner;
    public string $repo;
}

/** Request payload for Page#create. */
class PageCreateData
{
    public string $owner;
    public string $repo;
    public ?string $build_type = null;
    public string $cname;
    public bool $custom_404;
    public ?string $html_url = null;
    public array $https_certificate;
    public ?bool $https_enforced = null;
    public ?string $pending_domain_unverified_at = null;
    public ?string $protected_domain_state = null;
    public bool $public;
    public array $source;
    public string $status;
    public string $url;
}

/** PageBuild entity data model. */
class PageBuild
{
    public string $commit;
    public string $created_at;
    public int $duration;
    public array $error;
    public ?string $id = null;
    public array $pusher;
    public string $status;
    public string $updated_at;
    public string $url;
}

/** Request payload for PageBuild#load. */
class PageBuildLoadMatch
{
    public ?int $id = null;
    public string $owner;
    public string $repo;
}

/** Request payload for PageBuild#list. */
class PageBuildListMatch
{
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** PageBuildStatus entity data model. */
class PageBuildStatus
{
    public ?string $status = null;
    public ?string $url = null;
}

/** Request payload for PageBuildStatus#create. */
class PageBuildStatusCreateData
{
    public string $owner;
    public string $repo;
    public ?string $status = null;
    public ?string $url = null;
}

/** PageDeployment entity data model. */
class PageDeployment
{
    public ?float $artifact_id = null;
    public ?string $artifact_url = null;
    public ?string $environment = null;
    public string $oidc_token;
    public string $pages_build_version;
}

/** Request payload for PageDeployment#create. */
class PageDeploymentCreateData
{
    public string $owner;
    public string $repo;
    public ?float $artifact_id = null;
    public ?string $artifact_url = null;
    public ?string $environment = null;
    public string $oidc_token;
    public string $pages_build_version;
}

/** PagesDeploymentStatus entity data model. */
class PagesDeploymentStatus
{
    public ?string $status = null;
}

/** Request payload for PagesDeploymentStatus#load. */
class PagesDeploymentStatusLoadMatch
{
    public string $owner;
    public string $pages_deployment_id;
    public string $repo;
}

/** Request payload for PagesDeploymentStatus#create. */
class PagesDeploymentStatusCreateData
{
    public string $deployment_id;
    public string $owner;
    public string $repo;
    public ?string $status = null;
}

/** PagesHealthCheck entity data model. */
class PagesHealthCheck
{
    public ?array $alt_domain = null;
    public ?array $domain = null;
}

/** Request payload for PagesHealthCheck#load. */
class PagesHealthCheckLoadMatch
{
    public string $owner;
    public string $repo;
}

/** Participation entity data model. */
class Participation
{
    public array $all;
    public array $owner;
}

/** Request payload for Participation#list. */
class ParticipationListMatch
{
    public string $owner;
    public string $repo;
}

/** PendingDeployment entity data model. */
class PendingDeployment
{
    public bool $current_user_can_approve;
    public array $environment;
    public array $reviewers;
    public int $wait_timer;
    public string $wait_timer_started_at;
}

/** Request payload for PendingDeployment#list. */
class PendingDeploymentListMatch
{
    public string $owner;
    public string $repo;
    public int $run_id;
}

/** PorterAuthor entity data model. */
class PorterAuthor
{
    public string $email;
    public int $id;
    public string $import_url;
    public string $name;
    public string $remote_id;
    public string $remote_name;
    public string $url;
}

/** Request payload for PorterAuthor#list. */
class PorterAuthorListMatch
{
    public string $owner;
    public string $repo;
    public ?int $since = null;
}

/** Request payload for PorterAuthor#update. */
class PorterAuthorUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?string $email = null;
    public ?string $import_url = null;
    public ?string $name = null;
    public ?string $remote_id = null;
    public ?string $remote_name = null;
    public ?string $url = null;
}

/** PorterLargeFile entity data model. */
class PorterLargeFile
{
    public string $oid;
    public string $path;
    public string $ref_name;
    public int $size;
}

/** Request payload for PorterLargeFile#list. */
class PorterLargeFileListMatch
{
    public string $owner;
    public string $repo;
}

/** PrivateRegistry entity data model. */
class PrivateRegistry
{
    public string $created_at;
    public ?string $encrypted_value = null;
    public ?string $id = null;
    public string $key;
    public string $key_id;
    public string $name;
    public ?string $registry_type = null;
    public ?array $selected_repository_ids = null;
    public string $updated_at;
    public ?string $url = null;
    public ?string $username = null;
    public ?string $visibility = null;
}

/** Request payload for PrivateRegistry#load. */
class PrivateRegistryLoadMatch
{
    public string $org_id;
}

/** Request payload for PrivateRegistry#list. */
class PrivateRegistryListMatch
{
    public string $org_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for PrivateRegistry#update. */
class PrivateRegistryUpdateData
{
    public string $id;
    public string $org_id;
    public ?string $created_at = null;
    public ?string $encrypted_value = null;
    public ?string $key = null;
    public ?string $key_id = null;
    public ?string $name = null;
    public ?string $registry_type = null;
    public ?array $selected_repository_ids = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $username = null;
    public ?string $visibility = null;
}

/** Request payload for PrivateRegistry#remove. */
class PrivateRegistryRemoveMatch
{
    public string $id;
    public string $org_id;
}

/** PrivateUser entity data model. */
class PrivateUser
{
}

/** Project entity data model. */
class Project
{
    public string $avatar_url;
    public ?string $body = null;
    public string $columns_url;
    public string $created_at;
    public array $creator;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public int $number;
    public ?string $organization_permission = null;
    public string $organizations_url;
    public string $owner_url;
    public ?bool $private = null;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public ?string $state = null;
    public string $subscriptions_url;
    public string $type;
    public string $updated_at;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Project#load. */
class ProjectLoadMatch
{
    public int $id;
}

/** Request payload for Project#list. */
class ProjectListMatch
{
    public string $org_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $state = null;
}

/** Request payload for Project#create. */
class ProjectCreateData
{
    public string $avatar_url;
    public ?string $body = null;
    public string $columns_url;
    public string $created_at;
    public array $creator;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public int $number;
    public ?string $organization_permission = null;
    public string $organizations_url;
    public string $owner_url;
    public ?bool $private = null;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public ?string $state = null;
    public string $subscriptions_url;
    public string $type;
    public string $updated_at;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Project#update. */
class ProjectUpdateData
{
    public int $id;
    public ?string $avatar_url = null;
    public ?string $body = null;
    public ?string $columns_url = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?string $email = null;
    public ?string $events_url = null;
    public ?string $followers_url = null;
    public ?string $following_url = null;
    public ?string $gists_url = null;
    public ?string $gravatar_id = null;
    public ?string $html_url = null;
    public ?string $login = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?int $number = null;
    public ?string $organization_permission = null;
    public ?string $organizations_url = null;
    public ?string $owner_url = null;
    public ?bool $private = null;
    public ?string $received_events_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public ?string $starred_at = null;
    public ?string $starred_url = null;
    public ?string $state = null;
    public ?string $subscriptions_url = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user_view_type = null;
}

/** Request payload for Project#remove. */
class ProjectRemoveMatch
{
    public int $id;
}

/** ProjectCollaboratorPermission entity data model. */
class ProjectCollaboratorPermission
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for ProjectCollaboratorPermission#load. */
class ProjectCollaboratorPermissionLoadMatch
{
    public int $project_id;
    public string $username;
}

/** ProjectColumn entity data model. */
class ProjectColumn
{
    public string $cards_url;
    public string $created_at;
    public int $id;
    public string $name;
    public string $node_id;
    public string $project_url;
    public string $updated_at;
    public string $url;
}

/** Request payload for ProjectColumn#load. */
class ProjectColumnLoadMatch
{
    public int $id;
}

/** Request payload for ProjectColumn#list. */
class ProjectColumnListMatch
{
    public int $id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for ProjectColumn#create. */
class ProjectColumnCreateData
{
    public int $id;
    public string $cards_url;
    public string $created_at;
    public string $name;
    public string $node_id;
    public string $project_url;
    public string $updated_at;
    public string $url;
}

/** Request payload for ProjectColumn#update. */
class ProjectColumnUpdateData
{
    public int $id;
    public ?string $cards_url = null;
    public ?string $created_at = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $project_url = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** ProjectsClassic entity data model. */
class ProjectsClassic
{
    public ?string $permission = null;
    public string $position;
}

/** Request payload for ProjectsClassic#create. */
class ProjectsClassicCreateData
{
    public int $column_id;
    public ?string $permission = null;
    public string $position;
}

/** Request payload for ProjectsClassic#update. */
class ProjectsClassicUpdateData
{
    public int $project_id;
    public string $username;
    public ?string $permission = null;
    public ?string $position = null;
}

/** Request payload for ProjectsClassic#remove. */
class ProjectsClassicRemoveMatch
{
    public int $column_id;
}

/** ProjectsV2 entity data model. */
class ProjectsV2
{
    public string $closed_at;
    public string $created_at;
    public array $creator;
    public string $deleted_at;
    public array $deleted_by;
    public string $description;
    public float $id;
    public ?bool $is_template = null;
    public array $latest_status_update;
    public string $node_id;
    public int $number;
    public array $owner;
    public bool $public;
    public string $short_description;
    public ?string $state = null;
    public string $title;
    public string $updated_at;
}

/** Request payload for ProjectsV2#load. */
class ProjectsV2LoadMatch
{
    public int $id;
    public ?string $org_id = null;
    public ?string $username = null;
}

/** Request payload for ProjectsV2#list. */
class ProjectsV2ListMatch
{
    public string $org_id;
    public ?string $after = null;
    public ?string $before = null;
    public ?int $per_page = null;
    public ?string $q = null;
}

/** ProjectsV2Field entity data model. */
class ProjectsV2Field
{
    public ?array $configuration = null;
    public string $created_at;
    public string $data_type;
    public int $id;
    public string $name;
    public ?string $node_id = null;
    public ?array $options = null;
    public string $project_url;
    public string $updated_at;
}

/** Request payload for ProjectsV2Field#load. */
class ProjectsV2FieldLoadMatch
{
    public int $id;
    public ?string $org_id = null;
    public int $projects_v2_id;
    public ?string $username = null;
}

/** Request payload for ProjectsV2Field#list. */
class ProjectsV2FieldListMatch
{
    public ?string $org_id = null;
    public int $project_number;
    public ?string $after = null;
    public ?string $before = null;
    public ?int $per_page = null;
    public ?string $username = null;
}

/** ProjectsV2ItemSimple entity data model. */
class ProjectsV2ItemSimple
{
    public int $id;
    public string $type;
}

/** Request payload for ProjectsV2ItemSimple#create. */
class ProjectsV2ItemSimpleCreateData
{
    public ?string $org_id = null;
    public int $project_number;
    public ?string $username = null;
    public int $id;
    public string $type;
}

/** ProjectsV2ItemWithContent entity data model. */
class ProjectsV2ItemWithContent
{
    public string $archived_at;
    public ?array $content = null;
    public string $content_type;
    public string $created_at;
    public array $creator;
    public ?array $fields = null;
    public float $id;
    public ?string $item_url = null;
    public ?string $node_id = null;
    public ?string $project_url = null;
    public string $updated_at;
}

/** Request payload for ProjectsV2ItemWithContent#load. */
class ProjectsV2ItemWithContentLoadMatch
{
    public int $item_id;
    public ?string $org_id = null;
    public int $projects_v2_id;
    public ?array $field = null;
    public ?string $username = null;
}

/** Request payload for ProjectsV2ItemWithContent#list. */
class ProjectsV2ItemWithContentListMatch
{
    public ?string $org_id = null;
    public int $project_number;
    public ?string $after = null;
    public ?string $before = null;
    public ?array $field = null;
    public ?int $per_page = null;
    public ?string $q = null;
    public ?string $username = null;
}

/** Request payload for ProjectsV2ItemWithContent#update. */
class ProjectsV2ItemWithContentUpdateData
{
    public int $item_id;
    public ?string $org_id = null;
    public int $projects_v2_id;
    public ?string $username = null;
    public ?string $archived_at = null;
    public ?array $content = null;
    public ?string $content_type = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?array $fields = null;
    public ?float $id = null;
    public ?string $item_url = null;
    public ?string $node_id = null;
    public ?string $project_url = null;
    public ?string $updated_at = null;
}

/** ProtectedBranch entity data model. */
class ProtectedBranch
{
    public array $allow_deletions;
    public array $allow_force_pushes;
    public ?array $allow_fork_syncing = null;
    public array $block_creations;
    public array $enforce_admins;
    public ?array $lock_branch = null;
    public ?array $required_conversation_resolution = null;
    public array $required_linear_history;
    public array $required_pull_request_reviews;
    public array $required_signatures;
    public array $required_status_checks;
    public array $restrictions;
    public string $url;
}

/** Request payload for ProtectedBranch#update. */
class ProtectedBranchUpdateData
{
    public string $branch_id;
    public string $owner;
    public string $repo;
    public ?array $allow_deletions = null;
    public ?array $allow_force_pushes = null;
    public ?array $allow_fork_syncing = null;
    public ?array $block_creations = null;
    public ?array $enforce_admins = null;
    public ?array $lock_branch = null;
    public ?array $required_conversation_resolution = null;
    public ?array $required_linear_history = null;
    public ?array $required_pull_request_reviews = null;
    public ?array $required_signatures = null;
    public ?array $required_status_checks = null;
    public ?array $restrictions = null;
    public ?string $url = null;
}

/** ProtectedBranchAdminEnforced entity data model. */
class ProtectedBranchAdminEnforced
{
    public bool $enabled;
    public string $url;
}

/** Request payload for ProtectedBranchAdminEnforced#load. */
class ProtectedBranchAdminEnforcedLoadMatch
{
    public string $branch_id;
    public string $owner;
    public string $repo;
}

/** Request payload for ProtectedBranchAdminEnforced#create. */
class ProtectedBranchAdminEnforcedCreateData
{
    public string $branch_id;
    public string $owner;
    public string $repo;
    public bool $enabled;
    public string $url;
}

/** ProtectedBranchPullRequestReview entity data model. */
class ProtectedBranchPullRequestReview
{
    public ?array $bypass_pull_request_allowances = null;
    public bool $dismiss_stale_reviews;
    public ?array $dismissal_restrictions = null;
    public bool $require_code_owner_reviews;
    public ?bool $require_last_push_approval = null;
    public ?int $required_approving_review_count = null;
    public ?string $url = null;
}

/** Request payload for ProtectedBranchPullRequestReview#load. */
class ProtectedBranchPullRequestReviewLoadMatch
{
    public string $branch_id;
    public string $owner;
    public string $repo;
}

/** Request payload for ProtectedBranchPullRequestReview#update. */
class ProtectedBranchPullRequestReviewUpdateData
{
    public string $branch_id;
    public string $owner;
    public string $repo;
    public ?array $bypass_pull_request_allowances = null;
    public ?bool $dismiss_stale_reviews = null;
    public ?array $dismissal_restrictions = null;
    public ?bool $require_code_owner_reviews = null;
    public ?bool $require_last_push_approval = null;
    public ?int $required_approving_review_count = null;
    public ?string $url = null;
}

/** PublicMember entity data model. */
class PublicMember
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for PublicMember#list. */
class PublicMemberListMatch
{
    public string $org_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Pull entity data model. */
class Pull
{
    public ?string $active_lock_reason = null;
    public int $additions;
    public array $assignee;
    public ?array $assignees = null;
    public string $author_association;
    public array $auto_merge;
    public array $base;
    public string $body;
    public int $changed_files;
    public string $closed_at;
    public int $comments;
    public string $comments_url;
    public ?string $commit_message = null;
    public ?string $commit_title = null;
    public int $commits;
    public string $commits_url;
    public string $created_at;
    public int $deletions;
    public string $diff_url;
    public ?bool $draft = null;
    public ?string $expected_head_sha = null;
    public array $head;
    public ?string $head_repo = null;
    public string $html_url;
    public int $id;
    public ?int $issue = null;
    public string $issue_url;
    public array $labels;
    public array $links;
    public bool $locked;
    public bool $maintainer_can_modify;
    public string $merge_commit_sha;
    public ?string $merge_method = null;
    public bool $mergeable;
    public string $mergeable_state;
    public bool $merged;
    public string $merged_at;
    public array $merged_by;
    public string $message;
    public array $milestone;
    public string $node_id;
    public int $number;
    public string $patch_url;
    public ?bool $rebaseable = null;
    public ?array $requested_reviewers = null;
    public ?array $requested_teams = null;
    public string $review_comment_url;
    public int $review_comments;
    public string $review_comments_url;
    public string $sha;
    public string $state;
    public string $statuses_url;
    public string $title;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for Pull#load. */
class PullLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for Pull#list. */
class PullListMatch
{
    public string $owner;
    public string $repo;
    public ?string $base = null;
    public ?string $direction = null;
    public ?string $head = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $sort = null;
    public ?string $state = null;
    public ?string $commit_sha = null;
}

/** Request payload for Pull#create. */
class PullCreateData
{
    public string $owner;
    public string $repo;
    public ?string $active_lock_reason = null;
    public int $additions;
    public array $assignee;
    public ?array $assignees = null;
    public string $author_association;
    public array $auto_merge;
    public array $base;
    public string $body;
    public int $changed_files;
    public string $closed_at;
    public int $comments;
    public string $comments_url;
    public ?string $commit_message = null;
    public ?string $commit_title = null;
    public int $commits;
    public string $commits_url;
    public string $created_at;
    public int $deletions;
    public string $diff_url;
    public ?bool $draft = null;
    public ?string $expected_head_sha = null;
    public array $head;
    public ?string $head_repo = null;
    public string $html_url;
    public int $id;
    public ?int $issue = null;
    public string $issue_url;
    public array $labels;
    public array $links;
    public bool $locked;
    public bool $maintainer_can_modify;
    public string $merge_commit_sha;
    public ?string $merge_method = null;
    public bool $mergeable;
    public string $mergeable_state;
    public bool $merged;
    public string $merged_at;
    public array $merged_by;
    public string $message;
    public array $milestone;
    public string $node_id;
    public int $number;
    public string $patch_url;
    public ?bool $rebaseable = null;
    public ?array $requested_reviewers = null;
    public ?array $requested_teams = null;
    public string $review_comment_url;
    public int $review_comments;
    public string $review_comments_url;
    public string $sha;
    public string $state;
    public string $statuses_url;
    public string $title;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for Pull#update. */
class PullUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?string $active_lock_reason = null;
    public ?int $additions = null;
    public ?array $assignee = null;
    public ?array $assignees = null;
    public ?string $author_association = null;
    public ?array $auto_merge = null;
    public ?array $base = null;
    public ?string $body = null;
    public ?int $changed_files = null;
    public ?string $closed_at = null;
    public ?int $comments = null;
    public ?string $comments_url = null;
    public ?string $commit_message = null;
    public ?string $commit_title = null;
    public ?int $commits = null;
    public ?string $commits_url = null;
    public ?string $created_at = null;
    public ?int $deletions = null;
    public ?string $diff_url = null;
    public ?bool $draft = null;
    public ?string $expected_head_sha = null;
    public ?array $head = null;
    public ?string $head_repo = null;
    public ?string $html_url = null;
    public ?int $issue = null;
    public ?string $issue_url = null;
    public ?array $labels = null;
    public ?array $links = null;
    public ?bool $locked = null;
    public ?bool $maintainer_can_modify = null;
    public ?string $merge_commit_sha = null;
    public ?string $merge_method = null;
    public ?bool $mergeable = null;
    public ?string $mergeable_state = null;
    public ?bool $merged = null;
    public ?string $merged_at = null;
    public ?array $merged_by = null;
    public ?string $message = null;
    public ?array $milestone = null;
    public ?string $node_id = null;
    public ?int $number = null;
    public ?string $patch_url = null;
    public ?bool $rebaseable = null;
    public ?array $requested_reviewers = null;
    public ?array $requested_teams = null;
    public ?string $review_comment_url = null;
    public ?int $review_comments = null;
    public ?string $review_comments_url = null;
    public ?string $sha = null;
    public ?string $state = null;
    public ?string $statuses_url = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?array $user = null;
}

/** Request payload for Pull#remove. */
class PullRemoveMatch
{
    public int $comment_id;
    public string $owner;
    public string $repo;
}

/** PullRequestReview entity data model. */
class PullRequestReview
{
    public string $author_association;
    public string $body;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public ?array $comments = null;
    public string $commit_id;
    public string $event;
    public string $html_url;
    public int $id;
    public array $links;
    public string $message;
    public string $node_id;
    public string $pull_request_url;
    public string $state;
    public ?string $submitted_at = null;
    public array $teams;
    public array $user;
    public array $users;
}

/** Request payload for PullRequestReview#load. */
class PullRequestReviewLoadMatch
{
    public int $id;
    public string $owner;
    public int $pull_id;
    public string $repo;
}

/** Request payload for PullRequestReview#list. */
class PullRequestReviewListMatch
{
    public string $owner;
    public int $pull_number;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for PullRequestReview#create. */
class PullRequestReviewCreateData
{
    public string $owner;
    public ?int $pull_id = null;
    public string $repo;
    public ?int $review_id = null;
    public ?int $pull_number = null;
    public string $author_association;
    public string $body;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public ?array $comments = null;
    public string $commit_id;
    public string $event;
    public string $html_url;
    public int $id;
    public array $links;
    public string $message;
    public string $node_id;
    public string $pull_request_url;
    public string $state;
    public ?string $submitted_at = null;
    public array $teams;
    public array $user;
    public array $users;
}

/** Request payload for PullRequestReview#update. */
class PullRequestReviewUpdateData
{
    public ?int $id = null;
    public string $owner;
    public int $pull_id;
    public string $repo;
    public ?int $review_id = null;
    public ?string $author_association = null;
    public ?string $body = null;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public ?array $comments = null;
    public ?string $commit_id = null;
    public ?string $event = null;
    public ?string $html_url = null;
    public ?array $links = null;
    public ?string $message = null;
    public ?string $node_id = null;
    public ?string $pull_request_url = null;
    public ?string $state = null;
    public ?string $submitted_at = null;
    public ?array $teams = null;
    public ?array $user = null;
    public ?array $users = null;
}

/** Request payload for PullRequestReview#remove. */
class PullRequestReviewRemoveMatch
{
    public int $id;
    public string $owner;
    public int $pull_id;
    public string $repo;
}

/** PullRequestReviewComment entity data model. */
class PullRequestReviewComment
{
    public string $author_association;
    public string $body;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public string $commit_id;
    public string $created_at;
    public string $diff_hunk;
    public string $html_url;
    public int $id;
    public ?int $in_reply_to = null;
    public ?int $in_reply_to_id = null;
    public ?int $line = null;
    public array $links;
    public string $node_id;
    public string $original_commit_id;
    public ?int $original_line = null;
    public ?int $original_position = null;
    public ?int $original_start_line = null;
    public string $path;
    public ?int $position = null;
    public int $pull_request_review_id;
    public string $pull_request_url;
    public array $reactions;
    public ?string $side = null;
    public ?int $start_line = null;
    public ?string $start_side = null;
    public ?string $subject_type = null;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for PullRequestReviewComment#load. */
class PullRequestReviewCommentLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for PullRequestReviewComment#list. */
class PullRequestReviewCommentListMatch
{
    public string $owner;
    public ?int $pull_number = null;
    public string $repo;
    public ?string $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $since = null;
    public ?string $sort = null;
}

/** Request payload for PullRequestReviewComment#create. */
class PullRequestReviewCommentCreateData
{
    public ?int $comment_id = null;
    public string $owner;
    public ?int $pull_id = null;
    public string $repo;
    public ?int $pull_number = null;
    public string $author_association;
    public string $body;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public string $commit_id;
    public string $created_at;
    public string $diff_hunk;
    public string $html_url;
    public int $id;
    public ?int $in_reply_to = null;
    public ?int $in_reply_to_id = null;
    public ?int $line = null;
    public array $links;
    public string $node_id;
    public string $original_commit_id;
    public ?int $original_line = null;
    public ?int $original_position = null;
    public ?int $original_start_line = null;
    public string $path;
    public ?int $position = null;
    public int $pull_request_review_id;
    public string $pull_request_url;
    public array $reactions;
    public ?string $side = null;
    public ?int $start_line = null;
    public ?string $start_side = null;
    public ?string $subject_type = null;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for PullRequestReviewComment#update. */
class PullRequestReviewCommentUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?string $author_association = null;
    public ?string $body = null;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public ?string $commit_id = null;
    public ?string $created_at = null;
    public ?string $diff_hunk = null;
    public ?string $html_url = null;
    public ?int $in_reply_to = null;
    public ?int $in_reply_to_id = null;
    public ?int $line = null;
    public ?array $links = null;
    public ?string $node_id = null;
    public ?string $original_commit_id = null;
    public ?int $original_line = null;
    public ?int $original_position = null;
    public ?int $original_start_line = null;
    public ?string $path = null;
    public ?int $position = null;
    public ?int $pull_request_review_id = null;
    public ?string $pull_request_url = null;
    public ?array $reactions = null;
    public ?string $side = null;
    public ?int $start_line = null;
    public ?string $start_side = null;
    public ?string $subject_type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?array $user = null;
}

/** PullRequestSimple entity data model. */
class PullRequestSimple
{
    public ?array $reviewers = null;
    public ?array $team_reviewers = null;
}

/** Request payload for PullRequestSimple#create. */
class PullRequestSimpleCreateData
{
    public string $owner;
    public int $pull_number;
    public string $repo;
    public ?array $reviewers = null;
    public ?array $team_reviewers = null;
}

/** Request payload for PullRequestSimple#remove. */
class PullRequestSimpleRemoveMatch
{
    public string $owner;
    public int $pull_number;
    public string $repo;
}

/** RateLimit entity data model. */
class RateLimit
{
    public array $rate;
    public array $resources;
}

/** Request payload for RateLimit#load. */
class RateLimitLoadMatch
{
    public ?array $rate = null;
    public ?array $resources = null;
}

/** Reaction entity data model. */
class Reaction
{
    public string $avatar_url;
    public string $content;
    public string $created_at;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public array $user;
    public ?string $user_view_type = null;
}

/** Request payload for Reaction#list. */
class ReactionListMatch
{
    public int $discussion_number;
    public int $team_id;
    public ?string $content = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Reaction#create. */
class ReactionCreateData
{
    public int $discussion_number;
    public int $team_id;
    public string $avatar_url;
    public string $content;
    public string $created_at;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public array $user;
    public ?string $user_view_type = null;
}

/** Request payload for Reaction#remove. */
class ReactionRemoveMatch
{
    public ?int $comment_id = null;
    public ?int $discussion_id = null;
    public int $id;
    public ?string $org_id = null;
    public ?string $team_id = null;
    public ?string $owner = null;
    public ?string $repo = null;
    public ?int $issue_id = null;
    public ?int $release_id = null;
}

/** Referrer entity data model. */
class Referrer
{
    public int $count;
    public string $referrer;
    public int $uniques;
}

/** Request payload for Referrer#list. */
class ReferrerListMatch
{
    public string $owner;
    public string $repo;
}

/** Release entity data model. */
class Release
{
    public array $assets;
    public string $assets_url;
    public array $author;
    public ?string $body = null;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public string $browser_download_url;
    public string $content_type;
    public string $created_at;
    public string $digest;
    public ?string $discussion_category_name = null;
    public ?string $discussion_url = null;
    public int $download_count;
    public bool $draft;
    public ?bool $generate_release_notes = null;
    public string $html_url;
    public int $id;
    public ?bool $immutable = null;
    public string $label;
    public ?string $make_latest = null;
    public ?int $mentions_count = null;
    public string $name;
    public string $node_id;
    public bool $prerelease;
    public string $published_at;
    public array $reactions;
    public int $size;
    public string $state;
    public string $tag_name;
    public string $tarball_url;
    public string $target_commitish;
    public ?string $updated_at = null;
    public string $upload_url;
    public array $uploader;
    public string $url;
    public string $zipball_url;
}

/** Request payload for Release#load. */
class ReleaseLoadMatch
{
    public ?int $id = null;
    public string $owner;
    public string $repo;
    public ?string $tag = null;
}

/** Request payload for Release#list. */
class ReleaseListMatch
{
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Release#create. */
class ReleaseCreateData
{
    public string $owner;
    public string $repo;
    public array $assets;
    public string $assets_url;
    public array $author;
    public ?string $body = null;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public string $browser_download_url;
    public string $content_type;
    public string $created_at;
    public string $digest;
    public ?string $discussion_category_name = null;
    public ?string $discussion_url = null;
    public int $download_count;
    public bool $draft;
    public ?bool $generate_release_notes = null;
    public string $html_url;
    public int $id;
    public ?bool $immutable = null;
    public string $label;
    public ?string $make_latest = null;
    public ?int $mentions_count = null;
    public string $name;
    public string $node_id;
    public bool $prerelease;
    public string $published_at;
    public array $reactions;
    public int $size;
    public string $state;
    public string $tag_name;
    public string $tarball_url;
    public string $target_commitish;
    public ?string $updated_at = null;
    public string $upload_url;
    public array $uploader;
    public string $url;
    public string $zipball_url;
}

/** Request payload for Release#update. */
class ReleaseUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?array $assets = null;
    public ?string $assets_url = null;
    public ?array $author = null;
    public ?string $body = null;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public ?string $browser_download_url = null;
    public ?string $content_type = null;
    public ?string $created_at = null;
    public ?string $digest = null;
    public ?string $discussion_category_name = null;
    public ?string $discussion_url = null;
    public ?int $download_count = null;
    public ?bool $draft = null;
    public ?bool $generate_release_notes = null;
    public ?string $html_url = null;
    public ?bool $immutable = null;
    public ?string $label = null;
    public ?string $make_latest = null;
    public ?int $mentions_count = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?bool $prerelease = null;
    public ?string $published_at = null;
    public ?array $reactions = null;
    public ?int $size = null;
    public ?string $state = null;
    public ?string $tag_name = null;
    public ?string $tarball_url = null;
    public ?string $target_commitish = null;
    public ?string $updated_at = null;
    public ?string $upload_url = null;
    public ?array $uploader = null;
    public ?string $url = null;
    public ?string $zipball_url = null;
}

/** ReleaseAsset entity data model. */
class ReleaseAsset
{
    public string $avatar_url;
    public ?string $browser_download_url = null;
    public ?string $content_type = null;
    public ?string $created_at = null;
    public ?string $digest = null;
    public ?int $download_count = null;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public ?string $label = null;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?int $size = null;
    public ?string $starred_at = null;
    public string $starred_url;
    public ?string $state = null;
    public string $subscriptions_url;
    public string $type;
    public ?string $updated_at = null;
    public ?array $uploader = null;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for ReleaseAsset#load. */
class ReleaseAssetLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
}

/** Request payload for ReleaseAsset#list. */
class ReleaseAssetListMatch
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for ReleaseAsset#create. */
class ReleaseAssetCreateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?string $label = null;
    public string $name;
    public string $avatar_url;
    public ?string $browser_download_url = null;
    public ?string $content_type = null;
    public ?string $created_at = null;
    public ?string $digest = null;
    public ?int $download_count = null;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public string $login;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?int $size = null;
    public ?string $starred_at = null;
    public string $starred_url;
    public ?string $state = null;
    public string $subscriptions_url;
    public string $type;
    public ?string $updated_at = null;
    public ?array $uploader = null;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for ReleaseAsset#update. */
class ReleaseAssetUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?string $avatar_url = null;
    public ?string $browser_download_url = null;
    public ?string $content_type = null;
    public ?string $created_at = null;
    public ?string $digest = null;
    public ?int $download_count = null;
    public ?string $email = null;
    public ?string $events_url = null;
    public ?string $followers_url = null;
    public ?string $following_url = null;
    public ?string $gists_url = null;
    public ?string $gravatar_id = null;
    public ?string $html_url = null;
    public ?string $label = null;
    public ?string $login = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $organizations_url = null;
    public ?string $received_events_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public ?int $size = null;
    public ?string $starred_at = null;
    public ?string $starred_url = null;
    public ?string $state = null;
    public ?string $subscriptions_url = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?array $uploader = null;
    public ?string $url = null;
    public ?string $user_view_type = null;
}

/** ReleaseNotesContent entity data model. */
class ReleaseNotesContent
{
    public string $body;
    public ?string $configuration_file_path = null;
    public string $name;
    public ?string $previous_tag_name = null;
    public string $tag_name;
    public ?string $target_commitish = null;
}

/** Request payload for ReleaseNotesContent#create. */
class ReleaseNotesContentCreateData
{
    public string $owner;
    public string $repo;
    public string $body;
    public ?string $configuration_file_path = null;
    public string $name;
    public ?string $previous_tag_name = null;
    public string $tag_name;
    public ?string $target_commitish = null;
}

/** Remove entity data model. */
class Remove
{
    public array $usernames;
}

/** Request payload for Remove#create. */
class RemoveCreateData
{
    public string $enterprise;
    public string $team_id;
    public array $usernames;
}

/** Repo entity data model. */
class Repo
{
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?bool $anonymous_access_enabled = null;
    public array $app;
    public string $archive_url;
    public bool $archived;
    public string $assignees_url;
    public ?array $attestations = null;
    public string $blobs_url;
    public string $branches_url;
    public ?string $build_type = null;
    public array $bundle;
    public ?array $client_payload = null;
    public string $clone_url;
    public ?string $cname = null;
    public ?array $code_search_index_status = null;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public ?string $content = null;
    public string $contents_url;
    public string $contributors_url;
    public string $created_at;
    public string $default_branch;
    public ?bool $default_branch_only = null;
    public ?bool $delete_branch_on_merge = null;
    public array $deployment_branch_policy;
    public string $deployments_url;
    public string $description;
    public bool $disabled;
    public ?string $download_url = null;
    public string $downloads_url;
    public bool $enabled;
    public ?string $encoding = null;
    public string $event_type;
    public string $events_url;
    public bool $fork;
    public int $forks;
    public int $forks_count;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public ?string $git_url = null;
    public int $github_id;
    public ?bool $has_discussions = null;
    public bool $has_downloads;
    public bool $has_issues;
    public bool $has_pages;
    public bool $has_projects;
    public bool $has_wiki;
    public string $homepage;
    public string $hooks_url;
    public ?string $html_url = null;
    public ?bool $https_enforced = null;
    public string $id;
    public string $integration_url;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $language;
    public string $languages_url;
    public array $license;
    public ?array $links = null;
    public ?string $master_branch = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public string $merges_url;
    public string $milestones_url;
    public string $mirror_url;
    public ?string $name = null;
    public ?string $new_name = null;
    public string $new_owner;
    public string $node_id;
    public string $notifications_url;
    public int $open_issues;
    public int $open_issues_count;
    public ?string $organization = null;
    public array $owner;
    public ?string $path = null;
    public array $permissions;
    public bool $private;
    public array $properties;
    public ?array $protection_rules = null;
    public string $pulls_url;
    public string $pushed_at;
    public string $releases_url;
    public ?string $sha = null;
    public ?int $size = null;
    public string $slug;
    public mixed $source = null;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public string $ssh_url;
    public int $stargazers_count;
    public string $stargazers_url;
    public ?string $starred_at = null;
    public string $statuses_url;
    public string $subscribers_url;
    public string $subscription_url;
    public string $svn_url;
    public string $tags_url;
    public ?array $team_ids = null;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public string $trees_url;
    public ?string $type = null;
    public string $updated_at;
    public ?string $url = null;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $visibility = null;
    public int $watchers;
    public int $watchers_count;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Repo#load. */
class RepoLoadMatch
{
    public string $owner;
    public string $repo;
    public ?string $subject_digest = null;
    public ?string $after = null;
    public ?string $before = null;
    public ?int $per_page = null;
    public ?string $predicate_type = null;
    public ?string $path = null;
    public ?string $ref = null;
    public ?string $username = null;
}

/** Request payload for Repo#list. */
class RepoListMatch
{
    public ?string $affiliation = null;
    public ?string $before = null;
    public ?string $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $since = null;
    public ?string $sort = null;
    public ?string $type = null;
    public ?string $visibility = null;
}

/** Request payload for Repo#create. */
class RepoCreateData
{
    public ?int $delivery_id = null;
    public ?int $hook_id = null;
    public string $owner;
    public string $repo;
    public ?string $branch_id = null;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?bool $anonymous_access_enabled = null;
    public array $app;
    public string $archive_url;
    public bool $archived;
    public string $assignees_url;
    public ?array $attestations = null;
    public string $blobs_url;
    public string $branches_url;
    public ?string $build_type = null;
    public array $bundle;
    public ?array $client_payload = null;
    public string $clone_url;
    public ?string $cname = null;
    public ?array $code_search_index_status = null;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public ?string $content = null;
    public string $contents_url;
    public string $contributors_url;
    public string $created_at;
    public string $default_branch;
    public ?bool $default_branch_only = null;
    public ?bool $delete_branch_on_merge = null;
    public array $deployment_branch_policy;
    public string $deployments_url;
    public string $description;
    public bool $disabled;
    public ?string $download_url = null;
    public string $downloads_url;
    public bool $enabled;
    public ?string $encoding = null;
    public string $event_type;
    public string $events_url;
    public bool $fork;
    public int $forks;
    public int $forks_count;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public ?string $git_url = null;
    public int $github_id;
    public ?bool $has_discussions = null;
    public bool $has_downloads;
    public bool $has_issues;
    public bool $has_pages;
    public bool $has_projects;
    public bool $has_wiki;
    public string $homepage;
    public string $hooks_url;
    public ?string $html_url = null;
    public ?bool $https_enforced = null;
    public string $id;
    public string $integration_url;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $language;
    public string $languages_url;
    public array $license;
    public ?array $links = null;
    public ?string $master_branch = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public string $merges_url;
    public string $milestones_url;
    public string $mirror_url;
    public ?string $name = null;
    public ?string $new_name = null;
    public string $new_owner;
    public string $node_id;
    public string $notifications_url;
    public int $open_issues;
    public int $open_issues_count;
    public ?string $organization = null;
    public ?string $path = null;
    public array $permissions;
    public bool $private;
    public array $properties;
    public ?array $protection_rules = null;
    public string $pulls_url;
    public string $pushed_at;
    public string $releases_url;
    public ?string $sha = null;
    public ?int $size = null;
    public string $slug;
    public mixed $source = null;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public string $ssh_url;
    public int $stargazers_count;
    public string $stargazers_url;
    public ?string $starred_at = null;
    public string $statuses_url;
    public string $subscribers_url;
    public string $subscription_url;
    public string $svn_url;
    public string $tags_url;
    public ?array $team_ids = null;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public string $trees_url;
    public ?string $type = null;
    public string $updated_at;
    public ?string $url = null;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $visibility = null;
    public int $watchers;
    public int $watchers_count;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Repo#update. */
class RepoUpdateData
{
    public string $branch_id;
    public string $owner;
    public string $repo;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?bool $anonymous_access_enabled = null;
    public ?array $app = null;
    public ?string $archive_url = null;
    public ?bool $archived = null;
    public ?string $assignees_url = null;
    public ?array $attestations = null;
    public ?string $blobs_url = null;
    public ?string $branches_url = null;
    public ?string $build_type = null;
    public ?array $bundle = null;
    public ?array $client_payload = null;
    public ?string $clone_url = null;
    public ?string $cname = null;
    public ?array $code_search_index_status = null;
    public ?string $collaborators_url = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $compare_url = null;
    public ?string $content = null;
    public ?string $contents_url = null;
    public ?string $contributors_url = null;
    public ?string $created_at = null;
    public ?string $default_branch = null;
    public ?bool $default_branch_only = null;
    public ?bool $delete_branch_on_merge = null;
    public ?array $deployment_branch_policy = null;
    public ?string $deployments_url = null;
    public ?string $description = null;
    public ?bool $disabled = null;
    public ?string $download_url = null;
    public ?string $downloads_url = null;
    public ?bool $enabled = null;
    public ?string $encoding = null;
    public ?string $event_type = null;
    public ?string $events_url = null;
    public ?bool $fork = null;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public ?string $forks_url = null;
    public ?string $full_name = null;
    public ?string $git_commits_url = null;
    public ?string $git_refs_url = null;
    public ?string $git_tags_url = null;
    public ?string $git_url = null;
    public ?int $github_id = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public ?string $hooks_url = null;
    public ?string $html_url = null;
    public ?bool $https_enforced = null;
    public ?string $id = null;
    public ?string $integration_url = null;
    public ?bool $is_template = null;
    public ?string $issue_comment_url = null;
    public ?string $issue_events_url = null;
    public ?string $issues_url = null;
    public ?string $keys_url = null;
    public ?string $labels_url = null;
    public ?string $language = null;
    public ?string $languages_url = null;
    public ?array $license = null;
    public ?array $links = null;
    public ?string $master_branch = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public ?string $merges_url = null;
    public ?string $milestones_url = null;
    public ?string $mirror_url = null;
    public ?string $name = null;
    public ?string $new_name = null;
    public ?string $new_owner = null;
    public ?string $node_id = null;
    public ?string $notifications_url = null;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public ?string $organization = null;
    public ?string $path = null;
    public ?array $permissions = null;
    public ?bool $private = null;
    public ?array $properties = null;
    public ?array $protection_rules = null;
    public ?string $pulls_url = null;
    public ?string $pushed_at = null;
    public ?string $releases_url = null;
    public ?string $sha = null;
    public ?int $size = null;
    public ?string $slug = null;
    public mixed $source = null;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public ?string $stargazers_url = null;
    public ?string $starred_at = null;
    public ?string $statuses_url = null;
    public ?string $subscribers_url = null;
    public ?string $subscription_url = null;
    public ?string $svn_url = null;
    public ?string $tags_url = null;
    public ?array $team_ids = null;
    public ?string $teams_url = null;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public ?string $trees_url = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Repo#remove. */
class RepoRemoveMatch
{
    public string $owner;
    public string $repo;
}

/** Repository entity data model. */
class Repository
{
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?bool $allow_update_branch = null;
    public ?bool $anonymous_access_enabled = null;
    public string $archive_url;
    public bool $archived;
    public string $assignees_url;
    public string $blobs_url;
    public string $branches_url;
    public string $clone_url;
    public ?array $code_search_index_status = null;
    public string $collaborators_url;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public string $created_at;
    public string $default_branch;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public bool $disabled;
    public string $downloads_url;
    public string $events_url;
    public bool $fork;
    public int $forks;
    public int $forks_count;
    public string $forks_url;
    public string $full_name;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public string $git_url;
    public ?bool $has_discussions = null;
    public bool $has_downloads;
    public bool $has_issues;
    public bool $has_pages;
    public bool $has_projects;
    public bool $has_wiki;
    public string $homepage;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $language;
    public string $languages_url;
    public array $license;
    public ?string $master_branch = null;
    public ?string $merge_commit_message = null;
    public ?string $merge_commit_title = null;
    public string $merges_url;
    public string $milestones_url;
    public string $mirror_url;
    public string $name;
    public string $node_id;
    public string $notifications_url;
    public int $open_issues;
    public int $open_issues_count;
    public array $owner;
    public array $permissions;
    public bool $private;
    public string $pulls_url;
    public string $pushed_at;
    public string $releases_url;
    public int $size;
    public ?string $squash_merge_commit_message = null;
    public ?string $squash_merge_commit_title = null;
    public string $ssh_url;
    public int $stargazers_count;
    public string $stargazers_url;
    public ?string $starred_at = null;
    public string $statuses_url;
    public string $subscribers_url;
    public string $subscription_url;
    public string $svn_url;
    public string $tags_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $topics = null;
    public string $trees_url;
    public string $updated_at;
    public string $url;
    public ?bool $use_squash_pr_title_as_default = null;
    public ?string $visibility = null;
    public int $watchers;
    public int $watchers_count;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Repository#list. */
class RepositoryListMatch
{
    public ?string $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $sort = null;
}

/** RepositoryAdvisory entity data model. */
class RepositoryAdvisory
{
    public mixed $author;
    public string $closed_at;
    public array $collaborating_teams;
    public array $collaborating_users;
    public string $created_at;
    public array $credits;
    public array $credits_detailed;
    public string $cve_id;
    public array $cvss;
    public ?array $cvss_severities = null;
    public ?string $cvss_vector_string = null;
    public array $cwe_ids;
    public array $cwes;
    public string $description;
    public string $ghsa_id;
    public string $html_url;
    public array $identifiers;
    public mixed $private_fork;
    public string $published_at;
    public mixed $publisher;
    public string $severity;
    public ?bool $start_private_fork = null;
    public string $state;
    public array $submission;
    public string $summary;
    public string $updated_at;
    public string $url;
    public array $vulnerabilities;
    public string $withdrawn_at;
}

/** Request payload for RepositoryAdvisory#load. */
class RepositoryAdvisoryLoadMatch
{
    public string $ghsa_id;
    public string $owner;
    public string $repo;
}

/** Request payload for RepositoryAdvisory#list. */
class RepositoryAdvisoryListMatch
{
    public string $org_id;
    public ?string $after = null;
    public ?string $before = null;
    public ?string $direction = null;
    public ?int $per_page = null;
    public ?string $sort = null;
    public ?string $state = null;
}

/** Request payload for RepositoryAdvisory#create. */
class RepositoryAdvisoryCreateData
{
    public string $owner;
    public string $repo;
    public mixed $author;
    public string $closed_at;
    public array $collaborating_teams;
    public array $collaborating_users;
    public string $created_at;
    public array $credits;
    public array $credits_detailed;
    public string $cve_id;
    public array $cvss;
    public ?array $cvss_severities = null;
    public ?string $cvss_vector_string = null;
    public array $cwe_ids;
    public array $cwes;
    public string $description;
    public string $ghsa_id;
    public string $html_url;
    public array $identifiers;
    public mixed $private_fork;
    public string $published_at;
    public mixed $publisher;
    public string $severity;
    public ?bool $start_private_fork = null;
    public string $state;
    public array $submission;
    public string $summary;
    public string $updated_at;
    public string $url;
    public array $vulnerabilities;
    public string $withdrawn_at;
}

/** Request payload for RepositoryAdvisory#update. */
class RepositoryAdvisoryUpdateData
{
    public string $ghsa_id;
    public string $owner;
    public string $repo;
    public mixed $author = null;
    public ?string $closed_at = null;
    public ?array $collaborating_teams = null;
    public ?array $collaborating_users = null;
    public ?string $created_at = null;
    public ?array $credits = null;
    public ?array $credits_detailed = null;
    public ?string $cve_id = null;
    public ?array $cvss = null;
    public ?array $cvss_severities = null;
    public ?string $cvss_vector_string = null;
    public ?array $cwe_ids = null;
    public ?array $cwes = null;
    public ?string $description = null;
    public ?string $html_url = null;
    public ?array $identifiers = null;
    public mixed $private_fork = null;
    public ?string $published_at = null;
    public mixed $publisher = null;
    public ?string $severity = null;
    public ?bool $start_private_fork = null;
    public ?string $state = null;
    public ?array $submission = null;
    public ?string $summary = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?array $vulnerabilities = null;
    public ?string $withdrawn_at = null;
}

/** RepositoryCollaboratorPermission entity data model. */
class RepositoryCollaboratorPermission
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public array $permissions;
    public string $received_events_url;
    public string $repos_url;
    public string $role_name;
    public bool $site_admin;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for RepositoryCollaboratorPermission#load. */
class RepositoryCollaboratorPermissionLoadMatch
{
    public string $owner;
    public string $repo;
    public string $username;
}

/** RepositoryInvitation entity data model. */
class RepositoryInvitation
{
    public string $created_at;
    public ?bool $expired = null;
    public string $html_url;
    public int $id;
    public array $invitee;
    public array $inviter;
    public string $node_id;
    public ?string $permission = null;
    public string $permissions;
    public array $repository;
    public string $url;
}

/** Request payload for RepositoryInvitation#list. */
class RepositoryInvitationListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for RepositoryInvitation#update. */
class RepositoryInvitationUpdateData
{
    public string $owner;
    public string $repo;
    public string $username;
    public ?string $created_at = null;
    public ?bool $expired = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?array $invitee = null;
    public ?array $inviter = null;
    public ?string $node_id = null;
    public ?string $permission = null;
    public ?string $permissions = null;
    public ?array $repository = null;
    public ?string $url = null;
}

/** RepositoryRuleDetailed entity data model. */
class RepositoryRuleDetailed
{
    public ?array $parameters = null;
    public ?int $ruleset_id = null;
    public ?string $ruleset_source = null;
    public ?string $ruleset_source_type = null;
    public ?string $type = null;
}

/** Request payload for RepositoryRuleDetailed#load. */
class RepositoryRuleDetailedLoadMatch
{
    public string $branch;
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** RepositoryRuleset entity data model. */
class RepositoryRuleset
{
    public ?array $bypass_actors = null;
    public mixed $conditions = null;
    public ?string $created_at = null;
    public ?string $current_user_can_bypass = null;
    public string $enforcement;
    public int $id;
    public ?array $links = null;
    public string $name;
    public ?string $node_id = null;
    public ?array $rules = null;
    public string $source;
    public ?string $source_type = null;
    public ?string $target = null;
    public ?string $updated_at = null;
}

/** Request payload for RepositoryRuleset#load. */
class RepositoryRulesetLoadMatch
{
    public int $id;
    public ?string $owner = null;
    public ?string $repo = null;
    public ?bool $includes_parent = null;
    public ?string $org_id = null;
}

/** Request payload for RepositoryRuleset#list. */
class RepositoryRulesetListMatch
{
    public string $org_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $target = null;
}

/** Request payload for RepositoryRuleset#create. */
class RepositoryRulesetCreateData
{
    public string $org_id;
    public ?array $bypass_actors = null;
    public mixed $conditions = null;
    public ?string $created_at = null;
    public ?string $current_user_can_bypass = null;
    public string $enforcement;
    public int $id;
    public ?array $links = null;
    public string $name;
    public ?string $node_id = null;
    public ?array $rules = null;
    public string $source;
    public ?string $source_type = null;
    public ?string $target = null;
    public ?string $updated_at = null;
}

/** Request payload for RepositoryRuleset#update. */
class RepositoryRulesetUpdateData
{
    public int $id;
    public ?string $owner = null;
    public ?string $repo = null;
    public ?string $org_id = null;
    public ?array $bypass_actors = null;
    public mixed $conditions = null;
    public ?string $created_at = null;
    public ?string $current_user_can_bypass = null;
    public ?string $enforcement = null;
    public ?array $links = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?array $rules = null;
    public ?string $source = null;
    public ?string $source_type = null;
    public ?string $target = null;
    public ?string $updated_at = null;
}

/** RepositorySubscription entity data model. */
class RepositorySubscription
{
    public string $created_at;
    public bool $ignored;
    public string $reason;
    public string $repository_url;
    public bool $subscribed;
    public string $url;
}

/** Request payload for RepositorySubscription#load. */
class RepositorySubscriptionLoadMatch
{
    public string $owner;
    public string $repo;
}

/** Request payload for RepositorySubscription#update. */
class RepositorySubscriptionUpdateData
{
    public string $owner;
    public string $repo;
    public ?string $created_at = null;
    public ?bool $ignored = null;
    public ?string $reason = null;
    public ?string $repository_url = null;
    public ?bool $subscribed = null;
    public ?string $url = null;
}

/** ReviewComment entity data model. */
class ReviewComment
{
    public string $author_association;
    public string $body;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public string $commit_id;
    public string $created_at;
    public string $diff_hunk;
    public string $html_url;
    public int $id;
    public ?int $in_reply_to_id = null;
    public ?int $line = null;
    public array $links;
    public string $node_id;
    public string $original_commit_id;
    public ?int $original_line = null;
    public int $original_position;
    public ?int $original_start_line = null;
    public string $path;
    public int $position;
    public int $pull_request_review_id;
    public string $pull_request_url;
    public array $reactions;
    public ?string $side = null;
    public ?int $start_line = null;
    public ?string $start_side = null;
    public ?string $subject_type = null;
    public string $updated_at;
    public string $url;
    public array $user;
}

/** Request payload for ReviewComment#list. */
class ReviewCommentListMatch
{
    public int $id;
    public string $owner;
    public int $pull_id;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** RuleSuite entity data model. */
class RuleSuite
{
    public ?int $actor_id = null;
    public ?string $actor_name = null;
    public ?string $after_sha = null;
    public ?string $before_sha = null;
    public ?string $evaluation_result = null;
    public ?int $id = null;
    public ?string $pushed_at = null;
    public ?string $ref = null;
    public ?int $repository_id = null;
    public ?string $repository_name = null;
    public ?string $result = null;
    public ?array $rule_evaluations = null;
}

/** Request payload for RuleSuite#load. */
class RuleSuiteLoadMatch
{
    public int $id;
    public ?string $owner = null;
    public ?string $repo = null;
    public ?string $org_id = null;
}

/** Request payload for RuleSuite#list. */
class RuleSuiteListMatch
{
    public string $org_id;
    public ?string $actor_name = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $ref = null;
    public ?string $repository_name = null;
    public ?string $rule_suite_result = null;
    public ?string $time_period = null;
}

/** RulesetVersion entity data model. */
class RulesetVersion
{
    public array $actor;
    public ?string $id = null;
    public string $updated_at;
    public int $version_id;
}

/** Request payload for RulesetVersion#list. */
class RulesetVersionListMatch
{
    public int $id;
    public ?string $owner = null;
    public ?string $repo = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $org_id = null;
}

/** RulesetVersionWithState entity data model. */
class RulesetVersionWithState
{
    public array $actor;
    public array $state;
    public string $updated_at;
    public int $version_id;
}

/** Request payload for RulesetVersionWithState#load. */
class RulesetVersionWithStateLoadMatch
{
    public ?string $owner = null;
    public ?string $repo = null;
    public int $ruleset_id;
    public int $version_id;
    public ?string $org_id = null;
}

/** Runner entity data model. */
class Runner
{
    public bool $busy;
    public ?bool $ephemeral = null;
    public int $id;
    public array $labels;
    public string $name;
    public string $os;
    public ?int $runner_group_id = null;
    public string $status;
}

/** Request payload for Runner#load. */
class RunnerLoadMatch
{
    public int $id;
    public ?string $owner = null;
    public ?string $repo = null;
    public ?string $org_id = null;
}

/** RunnerApplication entity data model. */
class RunnerApplication
{
    public string $architecture;
    public string $download_url;
    public string $filename;
    public string $os;
    public ?string $sha256_checksum = null;
    public ?string $temp_download_token = null;
}

/** Request payload for RunnerApplication#list. */
class RunnerApplicationListMatch
{
    public string $org_id;
}

/** RunnerGroup entity data model. */
class RunnerGroup
{
    public bool $allows_public_repositories;
    public bool $default;
    public ?string $hosted_runners_url = null;
    public float $id;
    public bool $inherited;
    public ?bool $inherited_allows_public_repositories = null;
    public string $name;
    public ?string $network_configuration_id = null;
    public ?bool $restricted_to_workflows = null;
    public ?array $runners = null;
    public string $runners_url;
    public ?string $selected_repositories_url = null;
    public ?array $selected_repository_ids = null;
    public ?array $selected_workflows = null;
    public string $visibility;
    public ?bool $workflow_restrictions_read_only = null;
}

/** Request payload for RunnerGroup#load. */
class RunnerGroupLoadMatch
{
    public int $id;
    public string $org_id;
}

/** Request payload for RunnerGroup#create. */
class RunnerGroupCreateData
{
    public string $org_id;
    public bool $allows_public_repositories;
    public bool $default;
    public ?string $hosted_runners_url = null;
    public float $id;
    public bool $inherited;
    public ?bool $inherited_allows_public_repositories = null;
    public string $name;
    public ?string $network_configuration_id = null;
    public ?bool $restricted_to_workflows = null;
    public ?array $runners = null;
    public string $runners_url;
    public ?string $selected_repositories_url = null;
    public ?array $selected_repository_ids = null;
    public ?array $selected_workflows = null;
    public string $visibility;
    public ?bool $workflow_restrictions_read_only = null;
}

/** Request payload for RunnerGroup#update. */
class RunnerGroupUpdateData
{
    public int $id;
    public string $org_id;
    public ?bool $allows_public_repositories = null;
    public ?bool $default = null;
    public ?string $hosted_runners_url = null;
    public ?bool $inherited = null;
    public ?bool $inherited_allows_public_repositories = null;
    public ?string $name = null;
    public ?string $network_configuration_id = null;
    public ?bool $restricted_to_workflows = null;
    public ?array $runners = null;
    public ?string $runners_url = null;
    public ?string $selected_repositories_url = null;
    public ?array $selected_repository_ids = null;
    public ?array $selected_workflows = null;
    public ?string $visibility = null;
    public ?bool $workflow_restrictions_read_only = null;
}

/** Search entity data model. */
class Search
{
    public ?string $active_lock_reason = null;
    public ?array $aliases = null;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public string $archive_url;
    public bool $archived;
    public array $assignee;
    public ?array $assignees = null;
    public string $assignees_url;
    public array $author;
    public string $author_association;
    public string $avatar_url;
    public ?string $bio = null;
    public string $blobs_url;
    public ?string $blog = null;
    public ?string $body = null;
    public ?string $body_html = null;
    public ?string $body_text = null;
    public string $branches_url;
    public string $clone_url;
    public string $closed_at;
    public string $collaborators_url;
    public string $color;
    public int $comments;
    public string $comments_url;
    public array $commit;
    public string $commits_url;
    public array $committer;
    public ?string $company = null;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public string $created_at;
    public string $created_by;
    public bool $curated;
    public bool $default;
    public string $default_branch;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public bool $disabled;
    public string $display_name;
    public string $downloads_url;
    public ?bool $draft = null;
    public ?string $email = null;
    public string $events_url;
    public bool $featured;
    public ?int $file_size = null;
    public ?int $followers = null;
    public string $followers_url;
    public ?int $following = null;
    public string $following_url;
    public bool $fork;
    public int $forks;
    public int $forks_count;
    public string $forks_url;
    public string $full_name;
    public string $gists_url;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public string $git_url;
    public string $gravatar_id;
    public ?bool $has_discussions = null;
    public bool $has_downloads;
    public bool $has_issues;
    public bool $has_pages;
    public bool $has_projects;
    public bool $has_wiki;
    public ?bool $hireable = null;
    public string $homepage;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public array $issue_dependencies_summary;
    public string $issue_events_url;
    public ?array $issue_field_values = null;
    public string $issues_url;
    public string $keys_url;
    public array $labels;
    public string $labels_url;
    public ?string $language = null;
    public string $languages_url;
    public ?string $last_modified_at = null;
    public array $license;
    public ?array $line_numbers = null;
    public ?string $location = null;
    public bool $locked;
    public string $login;
    public ?string $logo_url = null;
    public ?string $master_branch = null;
    public string $merges_url;
    public array $milestone;
    public string $milestones_url;
    public string $mirror_url;
    public string $name;
    public string $node_id;
    public string $notifications_url;
    public int $number;
    public int $open_issues;
    public int $open_issues_count;
    public string $organizations_url;
    public array $owner;
    public array $parents;
    public string $path;
    public array $performed_via_github_app;
    public array $permissions;
    public bool $private;
    public ?int $public_gists = null;
    public ?int $public_repos = null;
    public array $pull_request;
    public string $pulls_url;
    public string $pushed_at;
    public array $reactions;
    public string $received_events_url;
    public ?array $related = null;
    public string $released;
    public string $releases_url;
    public string $repos_url;
    public array $repository;
    public ?int $repository_count = null;
    public string $repository_url;
    public float $score;
    public string $sha;
    public string $short_description;
    public bool $site_admin;
    public int $size;
    public string $ssh_url;
    public int $stargazers_count;
    public string $stargazers_url;
    public string $starred_url;
    public string $state;
    public ?string $state_reason = null;
    public string $statuses_url;
    public array $sub_issues_summary;
    public string $subscribers_url;
    public string $subscription_url;
    public string $subscriptions_url;
    public ?string $suspended_at = null;
    public string $svn_url;
    public string $tags_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public ?array $text_matches = null;
    public ?string $timeline_url = null;
    public string $title;
    public ?array $topics = null;
    public string $trees_url;
    public array $type;
    public string $updated_at;
    public string $url;
    public array $user;
    public ?string $user_view_type = null;
    public ?string $visibility = null;
    public int $watchers;
    public int $watchers_count;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?string $advanced_search = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public string $q;
    public ?string $search_type = null;
    public ?string $sort = null;
    public ?int $repository_id = null;
}

/** SecretScanning entity data model. */
class SecretScanning
{
    public ?array $custom_pattern_settings = null;
    public ?string $pattern_config_version = null;
    public ?array $provider_pattern_settings = null;
}

/** Request payload for SecretScanning#update. */
class SecretScanningUpdateData
{
    public string $org_id;
    public ?array $custom_pattern_settings = null;
    public ?string $pattern_config_version = null;
    public ?array $provider_pattern_settings = null;
}

/** SecretScanningAlert entity data model. */
class SecretScanningAlert
{
    public ?string $created_at = null;
    public mixed $first_location_detected = null;
    public ?bool $has_more_locations = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?bool $is_base64_encoded = null;
    public ?string $locations_url = null;
    public ?bool $multi_repo = null;
    public ?int $number = null;
    public ?bool $publicly_leaked = null;
    public ?string $push_protection_bypass_request_comment = null;
    public ?string $push_protection_bypass_request_html_url = null;
    public array $push_protection_bypass_request_reviewer;
    public ?string $push_protection_bypass_request_reviewer_comment = null;
    public ?bool $push_protection_bypassed = null;
    public ?string $push_protection_bypassed_at = null;
    public array $push_protection_bypassed_by;
    public ?string $resolution = null;
    public ?string $resolution_comment = null;
    public ?string $resolved_at = null;
    public array $resolved_by;
    public ?string $secret = null;
    public ?string $secret_type = null;
    public ?string $secret_type_display_name = null;
    public ?string $state = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $validity = null;
}

/** Request payload for SecretScanningAlert#load. */
class SecretScanningAlertLoadMatch
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?bool $hide_secret = null;
}

/** Request payload for SecretScanningAlert#list. */
class SecretScanningAlertListMatch
{
    public string $owner;
    public string $repo;
    public ?string $after = null;
    public ?string $before = null;
    public ?string $direction = null;
    public ?bool $hide_secret = null;
    public ?bool $is_multi_repo = null;
    public ?bool $is_publicly_leaked = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $resolution = null;
    public ?string $secret_type = null;
    public ?string $sort = null;
    public ?string $state = null;
    public ?string $validity = null;
}

/** Request payload for SecretScanningAlert#update. */
class SecretScanningAlertUpdateData
{
    public int $id;
    public string $owner;
    public string $repo;
    public ?string $created_at = null;
    public mixed $first_location_detected = null;
    public ?bool $has_more_locations = null;
    public ?string $html_url = null;
    public ?bool $is_base64_encoded = null;
    public ?string $locations_url = null;
    public ?bool $multi_repo = null;
    public ?int $number = null;
    public ?bool $publicly_leaked = null;
    public ?string $push_protection_bypass_request_comment = null;
    public ?string $push_protection_bypass_request_html_url = null;
    public ?array $push_protection_bypass_request_reviewer = null;
    public ?string $push_protection_bypass_request_reviewer_comment = null;
    public ?bool $push_protection_bypassed = null;
    public ?string $push_protection_bypassed_at = null;
    public ?array $push_protection_bypassed_by = null;
    public ?string $resolution = null;
    public ?string $resolution_comment = null;
    public ?string $resolved_at = null;
    public ?array $resolved_by = null;
    public ?string $secret = null;
    public ?string $secret_type = null;
    public ?string $secret_type_display_name = null;
    public ?string $state = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $validity = null;
}

/** SecretScanningLocation entity data model. */
class SecretScanningLocation
{
    public mixed $details = null;
    public ?string $type = null;
}

/** Request payload for SecretScanningLocation#list. */
class SecretScanningLocationListMatch
{
    public int $alert_number;
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** SecretScanningPatternConfiguration entity data model. */
class SecretScanningPatternConfiguration
{
    public ?array $custom_pattern_overrides = null;
    public ?string $pattern_config_version = null;
    public ?array $provider_pattern_overrides = null;
}

/** Request payload for SecretScanningPatternConfiguration#list. */
class SecretScanningPatternConfigurationListMatch
{
    public string $org_id;
}

/** SecretScanningPushProtectionBypass entity data model. */
class SecretScanningPushProtectionBypass
{
    public ?string $expire_at = null;
    public string $placeholder_id;
    public ?string $reason = null;
    public ?string $token_type = null;
}

/** Request payload for SecretScanningPushProtectionBypass#create. */
class SecretScanningPushProtectionBypassCreateData
{
    public string $owner;
    public string $repo;
    public ?string $expire_at = null;
    public string $placeholder_id;
    public ?string $reason = null;
    public ?string $token_type = null;
}

/** SecretScanningScanHistory entity data model. */
class SecretScanningScanHistory
{
    public ?array $backfill_scans = null;
    public ?array $custom_pattern_backfill_scans = null;
    public ?array $incremental_scans = null;
    public ?array $pattern_update_scans = null;
}

/** Request payload for SecretScanningScanHistory#list. */
class SecretScanningScanHistoryListMatch
{
    public string $owner;
    public string $repo;
}

/** SecurityAdvisory entity data model. */
class SecurityAdvisory
{
    public ?string $id = null;
}

/** Request payload for SecurityAdvisory#create. */
class SecurityAdvisoryCreateData
{
    public string $id;
    public string $owner;
    public string $repo;
}

/** SelectedAction entity data model. */
class SelectedAction
{
    public ?bool $github_owned_allowed = null;
    public ?array $patterns_allowed = null;
    public ?bool $verified_allowed = null;
}

/** Request payload for SelectedAction#list. */
class SelectedActionListMatch
{
    public string $org_id;
}

/** SelfHostedRunner entity data model. */
class SelfHostedRunner
{
    public string $enabled_repositories;
    public ?string $selected_repositories_url = null;
}

/** Request payload for SelfHostedRunner#load. */
class SelfHostedRunnerLoadMatch
{
    public string $org_id;
}

/** ShortBlob entity data model. */
class ShortBlob
{
    public string $content;
    public ?string $encoding = null;
}

/** Request payload for ShortBlob#create. */
class ShortBlobCreateData
{
    public string $owner;
    public string $repo;
    public string $content;
    public ?string $encoding = null;
}

/** ShortBranch entity data model. */
class ShortBranch
{
    public array $commit;
    public string $name;
    public bool $protected;
    public ?array $protection = null;
    public ?string $protection_url = null;
}

/** Request payload for ShortBranch#list. */
class ShortBranchListMatch
{
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?bool $protected = null;
}

/** SimpleClassroom entity data model. */
class SimpleClassroom
{
}

/** SimpleClassroomAssignment entity data model. */
class SimpleClassroomAssignment
{
    public int $accepted;
    public array $classroom;
    public string $deadline;
    public string $editor;
    public bool $feedback_pull_requests_enabled;
    public int $id;
    public bool $invitations_enabled;
    public string $invite_link;
    public string $language;
    public ?int $max_members = null;
    public ?int $max_teams = null;
    public int $passing;
    public bool $public_repo;
    public string $slug;
    public bool $students_are_repo_admins;
    public int $submitted;
    public string $title;
    public string $type;
}

/** Request payload for SimpleClassroomAssignment#list. */
class SimpleClassroomAssignmentListMatch
{
    public int $classroom_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** SocialAccount entity data model. */
class SocialAccount
{
    public array $account_urls;
    public string $provider;
    public string $url;
}

/** Request payload for SocialAccount#list. */
class SocialAccountListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for SocialAccount#create. */
class SocialAccountCreateData
{
    public array $account_urls;
    public string $provider;
    public string $url;
}

/** SshSigningKey entity data model. */
class SshSigningKey
{
    public string $created_at;
    public int $id;
    public string $key;
    public string $title;
}

/** Request payload for SshSigningKey#load. */
class SshSigningKeyLoadMatch
{
    public int $id;
}

/** Request payload for SshSigningKey#list. */
class SshSigningKeyListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for SshSigningKey#create. */
class SshSigningKeyCreateData
{
    public string $created_at;
    public int $id;
    public string $key;
    public string $title;
}

/** Status entity data model. */
class Status
{
    public string $avatar_url;
    public ?string $context = null;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public int $id;
    public string $node_id;
    public string $state;
    public ?string $target_url = null;
    public string $updated_at;
    public string $url;
}

/** Request payload for Status#list. */
class StatusListMatch
{
    public string $owner;
    public string $ref;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Status#create. */
class StatusCreateData
{
    public string $id;
    public string $owner;
    public string $repo;
    public string $avatar_url;
    public ?string $context = null;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public string $node_id;
    public string $state;
    public ?string $target_url = null;
    public string $updated_at;
    public string $url;
}

/** StatusCheckPolicy entity data model. */
class StatusCheckPolicy
{
    public int $app_id;
    public array $checks;
    public string $context;
    public array $contexts;
    public string $contexts_url;
    public bool $strict;
    public string $url;
}

/** Request payload for StatusCheckPolicy#list. */
class StatusCheckPolicyListMatch
{
    public string $branch_id;
    public string $owner;
    public string $repo;
}

/** Request payload for StatusCheckPolicy#update. */
class StatusCheckPolicyUpdateData
{
    public string $branch_id;
    public string $owner;
    public string $repo;
    public ?int $app_id = null;
    public ?array $checks = null;
    public ?string $context = null;
    public ?array $contexts = null;
    public ?string $contexts_url = null;
    public ?bool $strict = null;
    public ?string $url = null;
}

/** Subscriber entity data model. */
class Subscriber
{
    public string $avatar_url;
    public ?string $email = null;
    public string $events_url;
    public string $followers_url;
    public string $following_url;
    public string $gists_url;
    public string $gravatar_id;
    public string $html_url;
    public int $id;
    public string $login;
    public ?string $name = null;
    public string $node_id;
    public string $organizations_url;
    public string $received_events_url;
    public string $repos_url;
    public bool $site_admin;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $subscriptions_url;
    public string $type;
    public string $url;
    public ?string $user_view_type = null;
}

/** Request payload for Subscriber#list. */
class SubscriberListMatch
{
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Tag entity data model. */
class Tag
{
    public array $commit;
    public string $name;
    public string $node_id;
    public string $tarball_url;
    public string $zipball_url;
}

/** Request payload for Tag#list. */
class TagListMatch
{
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** TagProtection entity data model. */
class TagProtection
{
    public ?string $created_at = null;
    public ?bool $enabled = null;
    public ?int $id = null;
    public string $pattern;
    public ?string $updated_at = null;
}

/** Request payload for TagProtection#list. */
class TagProtectionListMatch
{
    public string $owner;
    public string $repo;
}

/** Request payload for TagProtection#create. */
class TagProtectionCreateData
{
    public string $owner;
    public string $repo;
    public ?string $created_at = null;
    public ?bool $enabled = null;
    public ?int $id = null;
    public string $pattern;
    public ?string $updated_at = null;
}

/** Team entity data model. */
class Team
{
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public string $archive_url;
    public bool $archived;
    public string $assignees_url;
    public ?string $assignment = null;
    public array $author;
    public string $avatar_url;
    public string $blobs_url;
    public string $body;
    public string $body_html;
    public string $body_version;
    public string $branches_url;
    public string $clone_url;
    public array $code_of_conduct;
    public string $collaborators_url;
    public string $columns_url;
    public int $comments_count;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public string $created_at;
    public array $creator;
    public ?array $custom_properties = null;
    public string $default_branch;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public bool $disabled;
    public string $discussion_url;
    public string $downloads_url;
    public ?string $email = null;
    public string $events_url;
    public ?string $failed_at = null;
    public ?string $failed_reason = null;
    public string $followers_url;
    public string $following_url;
    public bool $fork;
    public int $forks;
    public int $forks_count;
    public string $forks_url;
    public string $full_name;
    public string $gists_url;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public string $git_url;
    public string $gravatar_id;
    public ?bool $has_discussions = null;
    public bool $has_downloads;
    public bool $has_issues;
    public bool $has_pages;
    public bool $has_projects;
    public bool $has_wiki;
    public string $homepage;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public ?string $invitation_source = null;
    public string $invitation_teams_url;
    public array $inviter;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $language;
    public string $languages_url;
    public string $last_edited_at;
    public ?string $ldap_dn = null;
    public array $license;
    public string $login;
    public ?array $maintainers = null;
    public ?string $master_branch = null;
    public int $members_count;
    public string $members_url;
    public string $merges_url;
    public string $milestones_url;
    public string $mirror_url;
    public string $name;
    public ?int $network_count = null;
    public string $node_id;
    public ?string $notification_setting = null;
    public string $notifications_url;
    public int $number;
    public int $open_issues;
    public int $open_issues_count;
    public array $organization;
    public ?string $organization_permission = null;
    public string $organizations_url;
    public array $owner;
    public string $owner_url;
    public array $parent;
    public ?int $parent_team_id = null;
    public string $permission;
    public array $permissions;
    public bool $pinned;
    public ?string $privacy = null;
    public bool $private;
    public string $pulls_url;
    public string $pushed_at;
    public array $reactions;
    public string $received_events_url;
    public string $releases_url;
    public ?array $repo_names = null;
    public int $repos_count;
    public string $repos_url;
    public string $repositories_url;
    public string $role;
    public ?string $role_name = null;
    public ?array $security_and_analysis = null;
    public bool $site_admin;
    public int $size;
    public string $slug;
    public string $ssh_url;
    public int $stargazers_count;
    public string $stargazers_url;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $state;
    public string $statuses_url;
    public ?int $subscribers_count = null;
    public string $subscribers_url;
    public string $subscription_url;
    public string $subscriptions_url;
    public string $svn_url;
    public string $tags_url;
    public int $team_count;
    public string $team_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public string $title;
    public ?array $topics = null;
    public string $trees_url;
    public string $type;
    public string $updated_at;
    public string $url;
    public ?string $user_view_type = null;
    public ?string $visibility = null;
    public int $watchers;
    public int $watchers_count;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Team#load. */
class TeamLoadMatch
{
    public int $id;
}

/** Request payload for Team#list. */
class TeamListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Team#create. */
class TeamCreateData
{
    public string $org_id;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public string $archive_url;
    public bool $archived;
    public string $assignees_url;
    public ?string $assignment = null;
    public array $author;
    public string $avatar_url;
    public string $blobs_url;
    public string $body;
    public string $body_html;
    public string $body_version;
    public string $branches_url;
    public string $clone_url;
    public array $code_of_conduct;
    public string $collaborators_url;
    public string $columns_url;
    public int $comments_count;
    public string $comments_url;
    public string $commits_url;
    public string $compare_url;
    public string $contents_url;
    public string $contributors_url;
    public string $created_at;
    public array $creator;
    public ?array $custom_properties = null;
    public string $default_branch;
    public ?bool $delete_branch_on_merge = null;
    public string $deployments_url;
    public string $description;
    public bool $disabled;
    public string $discussion_url;
    public string $downloads_url;
    public ?string $email = null;
    public string $events_url;
    public ?string $failed_at = null;
    public ?string $failed_reason = null;
    public string $followers_url;
    public string $following_url;
    public bool $fork;
    public int $forks;
    public int $forks_count;
    public string $forks_url;
    public string $full_name;
    public string $gists_url;
    public string $git_commits_url;
    public string $git_refs_url;
    public string $git_tags_url;
    public string $git_url;
    public string $gravatar_id;
    public ?bool $has_discussions = null;
    public bool $has_downloads;
    public bool $has_issues;
    public bool $has_pages;
    public bool $has_projects;
    public bool $has_wiki;
    public string $homepage;
    public string $hooks_url;
    public string $html_url;
    public int $id;
    public ?string $invitation_source = null;
    public string $invitation_teams_url;
    public array $inviter;
    public ?bool $is_template = null;
    public string $issue_comment_url;
    public string $issue_events_url;
    public string $issues_url;
    public string $keys_url;
    public string $labels_url;
    public string $language;
    public string $languages_url;
    public string $last_edited_at;
    public ?string $ldap_dn = null;
    public array $license;
    public string $login;
    public ?array $maintainers = null;
    public ?string $master_branch = null;
    public int $members_count;
    public string $members_url;
    public string $merges_url;
    public string $milestones_url;
    public string $mirror_url;
    public string $name;
    public ?int $network_count = null;
    public string $node_id;
    public ?string $notification_setting = null;
    public string $notifications_url;
    public int $number;
    public int $open_issues;
    public int $open_issues_count;
    public array $organization;
    public ?string $organization_permission = null;
    public string $organizations_url;
    public array $owner;
    public string $owner_url;
    public array $parent;
    public ?int $parent_team_id = null;
    public string $permission;
    public array $permissions;
    public bool $pinned;
    public ?string $privacy = null;
    public bool $private;
    public string $pulls_url;
    public string $pushed_at;
    public array $reactions;
    public string $received_events_url;
    public string $releases_url;
    public ?array $repo_names = null;
    public int $repos_count;
    public string $repos_url;
    public string $repositories_url;
    public string $role;
    public ?string $role_name = null;
    public ?array $security_and_analysis = null;
    public bool $site_admin;
    public int $size;
    public string $slug;
    public string $ssh_url;
    public int $stargazers_count;
    public string $stargazers_url;
    public ?string $starred_at = null;
    public string $starred_url;
    public string $state;
    public string $statuses_url;
    public ?int $subscribers_count = null;
    public string $subscribers_url;
    public string $subscription_url;
    public string $subscriptions_url;
    public string $svn_url;
    public string $tags_url;
    public int $team_count;
    public string $team_url;
    public string $teams_url;
    public ?string $temp_clone_token = null;
    public string $title;
    public ?array $topics = null;
    public string $trees_url;
    public string $type;
    public string $updated_at;
    public string $url;
    public ?string $user_view_type = null;
    public ?string $visibility = null;
    public int $watchers;
    public int $watchers_count;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Team#update. */
class TeamUpdateData
{
    public int $id;
    public int $project_id;
    public ?bool $allow_auto_merge = null;
    public ?bool $allow_forking = null;
    public ?bool $allow_merge_commit = null;
    public ?bool $allow_rebase_merge = null;
    public ?bool $allow_squash_merge = null;
    public ?string $archive_url = null;
    public ?bool $archived = null;
    public ?string $assignees_url = null;
    public ?string $assignment = null;
    public ?array $author = null;
    public ?string $avatar_url = null;
    public ?string $blobs_url = null;
    public ?string $body = null;
    public ?string $body_html = null;
    public ?string $body_version = null;
    public ?string $branches_url = null;
    public ?string $clone_url = null;
    public ?array $code_of_conduct = null;
    public ?string $collaborators_url = null;
    public ?string $columns_url = null;
    public ?int $comments_count = null;
    public ?string $comments_url = null;
    public ?string $commits_url = null;
    public ?string $compare_url = null;
    public ?string $contents_url = null;
    public ?string $contributors_url = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?array $custom_properties = null;
    public ?string $default_branch = null;
    public ?bool $delete_branch_on_merge = null;
    public ?string $deployments_url = null;
    public ?string $description = null;
    public ?bool $disabled = null;
    public ?string $discussion_url = null;
    public ?string $downloads_url = null;
    public ?string $email = null;
    public ?string $events_url = null;
    public ?string $failed_at = null;
    public ?string $failed_reason = null;
    public ?string $followers_url = null;
    public ?string $following_url = null;
    public ?bool $fork = null;
    public ?int $forks = null;
    public ?int $forks_count = null;
    public ?string $forks_url = null;
    public ?string $full_name = null;
    public ?string $gists_url = null;
    public ?string $git_commits_url = null;
    public ?string $git_refs_url = null;
    public ?string $git_tags_url = null;
    public ?string $git_url = null;
    public ?string $gravatar_id = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_wiki = null;
    public ?string $homepage = null;
    public ?string $hooks_url = null;
    public ?string $html_url = null;
    public ?string $invitation_source = null;
    public ?string $invitation_teams_url = null;
    public ?array $inviter = null;
    public ?bool $is_template = null;
    public ?string $issue_comment_url = null;
    public ?string $issue_events_url = null;
    public ?string $issues_url = null;
    public ?string $keys_url = null;
    public ?string $labels_url = null;
    public ?string $language = null;
    public ?string $languages_url = null;
    public ?string $last_edited_at = null;
    public ?string $ldap_dn = null;
    public ?array $license = null;
    public ?string $login = null;
    public ?array $maintainers = null;
    public ?string $master_branch = null;
    public ?int $members_count = null;
    public ?string $members_url = null;
    public ?string $merges_url = null;
    public ?string $milestones_url = null;
    public ?string $mirror_url = null;
    public ?string $name = null;
    public ?int $network_count = null;
    public ?string $node_id = null;
    public ?string $notification_setting = null;
    public ?string $notifications_url = null;
    public ?int $number = null;
    public ?int $open_issues = null;
    public ?int $open_issues_count = null;
    public ?array $organization = null;
    public ?string $organization_permission = null;
    public ?string $organizations_url = null;
    public ?array $owner = null;
    public ?string $owner_url = null;
    public ?array $parent = null;
    public ?int $parent_team_id = null;
    public ?string $permission = null;
    public ?array $permissions = null;
    public ?bool $pinned = null;
    public ?string $privacy = null;
    public ?bool $private = null;
    public ?string $pulls_url = null;
    public ?string $pushed_at = null;
    public ?array $reactions = null;
    public ?string $received_events_url = null;
    public ?string $releases_url = null;
    public ?array $repo_names = null;
    public ?int $repos_count = null;
    public ?string $repos_url = null;
    public ?string $repositories_url = null;
    public ?string $role = null;
    public ?string $role_name = null;
    public ?array $security_and_analysis = null;
    public ?bool $site_admin = null;
    public ?int $size = null;
    public ?string $slug = null;
    public ?string $ssh_url = null;
    public ?int $stargazers_count = null;
    public ?string $stargazers_url = null;
    public ?string $starred_at = null;
    public ?string $starred_url = null;
    public ?string $state = null;
    public ?string $statuses_url = null;
    public ?int $subscribers_count = null;
    public ?string $subscribers_url = null;
    public ?string $subscription_url = null;
    public ?string $subscriptions_url = null;
    public ?string $svn_url = null;
    public ?string $tags_url = null;
    public ?int $team_count = null;
    public ?string $team_url = null;
    public ?string $teams_url = null;
    public ?string $temp_clone_token = null;
    public ?string $title = null;
    public ?array $topics = null;
    public ?string $trees_url = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user_view_type = null;
    public ?string $visibility = null;
    public ?int $watchers = null;
    public ?int $watchers_count = null;
    public ?bool $web_commit_signoff_required = null;
}

/** Request payload for Team#remove. */
class TeamRemoveMatch
{
    public int $id;
}

/** TeamSimple entity data model. */
class TeamSimple
{
    public string $description;
    public string $html_url;
    public int $id;
    public ?string $ldap_dn = null;
    public string $members_url;
    public string $name;
    public string $node_id;
    public ?string $notification_setting = null;
    public string $permission;
    public ?string $privacy = null;
    public string $repositories_url;
    public string $slug;
    public string $url;
}

/** Request payload for TeamSimple#list. */
class TeamSimpleListMatch
{
    public string $org_id;
}

/** Thread entity data model. */
class Thread
{
    public string $id;
    public string $last_read_at;
    public string $reason;
    public array $repository;
    public array $subject;
    public string $subscription_url;
    public bool $unread;
    public string $updated_at;
    public string $url;
}

/** Request payload for Thread#load. */
class ThreadLoadMatch
{
    public int $id;
}

/** Request payload for Thread#list. */
class ThreadListMatch
{
    public ?bool $all = null;
    public ?string $before = null;
    public ?int $page = null;
    public ?bool $participating = null;
    public ?int $per_page = null;
    public ?string $since = null;
}

/** Request payload for Thread#remove. */
class ThreadRemoveMatch
{
    public int $id;
}

/** ThreadSubscription entity data model. */
class ThreadSubscription
{
    public string $created_at;
    public ?string $id = null;
    public bool $ignored;
    public string $reason;
    public ?string $repository_url = null;
    public bool $subscribed;
    public ?string $thread_url = null;
    public string $url;
}

/** Request payload for ThreadSubscription#load. */
class ThreadSubscriptionLoadMatch
{
    public int $id;
}

/** Request payload for ThreadSubscription#update. */
class ThreadSubscriptionUpdateData
{
    public int $id;
    public ?string $created_at = null;
    public ?bool $ignored = null;
    public ?string $reason = null;
    public ?string $repository_url = null;
    public ?bool $subscribed = null;
    public ?string $thread_url = null;
    public ?string $url = null;
}

/** Topic entity data model. */
class Topic
{
    public array $names;
}

/** Request payload for Topic#list. */
class TopicListMatch
{
    public string $owner;
    public string $repo;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Topic#update. */
class TopicUpdateData
{
    public string $owner;
    public string $repo;
    public ?array $names = null;
}

/** User entity data model. */
class User
{
    public ?string $assignment = null;
    public ?array $attestations_subject_digests = null;
    public ?string $avatar_url = null;
    public ?string $bio = null;
    public ?string $blog = null;
    public ?int $collaborators = null;
    public ?string $company = null;
    public ?string $created_at = null;
    public ?int $disk_usage = null;
    public ?string $email = null;
    public ?string $events_url = null;
    public ?int $followers = null;
    public ?string $followers_url = null;
    public ?int $following = null;
    public ?string $following_url = null;
    public ?string $gists_url = null;
    public ?string $gravatar_id = null;
    public ?bool $hireable = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?array $inherited_from = null;
    public ?string $location = null;
    public ?string $login = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $organizations_url = null;
    public ?int $owned_private_repos = null;
    public ?array $page_info = null;
    public ?array $plan = null;
    public ?string $predicate_type = null;
    public ?int $private_gists = null;
    public int $private_repos;
    public ?int $public_gists = null;
    public ?int $public_repos = null;
    public ?string $received_events_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public int $space;
    public ?string $starred_at = null;
    public ?string $starred_url = null;
    public array $subject_digests;
    public ?string $subscriptions_url = null;
    public ?int $total_private_repos = null;
    public ?string $twitter_username = null;
    public ?bool $two_factor_authentication = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user_view_type = null;
    public array $users;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public int $id;
}

/** Request payload for User#list. */
class UserListMatch
{
    public ?int $per_page = null;
    public ?int $since = null;
}

/** Request payload for User#create. */
class UserCreateData
{
    public string $branch_id;
    public string $owner;
    public string $repo;
    public ?string $assignment = null;
    public ?array $attestations_subject_digests = null;
    public ?string $avatar_url = null;
    public ?string $bio = null;
    public ?string $blog = null;
    public ?int $collaborators = null;
    public ?string $company = null;
    public ?string $created_at = null;
    public ?int $disk_usage = null;
    public ?string $email = null;
    public ?string $events_url = null;
    public ?int $followers = null;
    public ?string $followers_url = null;
    public ?int $following = null;
    public ?string $following_url = null;
    public ?string $gists_url = null;
    public ?string $gravatar_id = null;
    public ?bool $hireable = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?array $inherited_from = null;
    public ?string $location = null;
    public ?string $login = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $organizations_url = null;
    public ?int $owned_private_repos = null;
    public ?array $page_info = null;
    public ?array $plan = null;
    public ?string $predicate_type = null;
    public ?int $private_gists = null;
    public int $private_repos;
    public ?int $public_gists = null;
    public ?int $public_repos = null;
    public ?string $received_events_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public int $space;
    public ?string $starred_at = null;
    public ?string $starred_url = null;
    public array $subject_digests;
    public ?string $subscriptions_url = null;
    public ?int $total_private_repos = null;
    public ?string $twitter_username = null;
    public ?bool $two_factor_authentication = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user_view_type = null;
    public array $users;
}

/** Request payload for User#update. */
class UserUpdateData
{
    public string $username;
    public ?string $assignment = null;
    public ?array $attestations_subject_digests = null;
    public ?string $avatar_url = null;
    public ?string $bio = null;
    public ?string $blog = null;
    public ?int $collaborators = null;
    public ?string $company = null;
    public ?string $created_at = null;
    public ?int $disk_usage = null;
    public ?string $email = null;
    public ?string $events_url = null;
    public ?int $followers = null;
    public ?string $followers_url = null;
    public ?int $following = null;
    public ?string $following_url = null;
    public ?string $gists_url = null;
    public ?string $gravatar_id = null;
    public ?bool $hireable = null;
    public ?string $html_url = null;
    public ?int $id = null;
    public ?array $inherited_from = null;
    public ?string $location = null;
    public ?string $login = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $organizations_url = null;
    public ?int $owned_private_repos = null;
    public ?array $page_info = null;
    public ?array $plan = null;
    public ?string $predicate_type = null;
    public ?int $private_gists = null;
    public ?int $private_repos = null;
    public ?int $public_gists = null;
    public ?int $public_repos = null;
    public ?string $received_events_url = null;
    public ?string $repos_url = null;
    public ?bool $site_admin = null;
    public ?int $space = null;
    public ?string $starred_at = null;
    public ?string $starred_url = null;
    public ?array $subject_digests = null;
    public ?string $subscriptions_url = null;
    public ?int $total_private_repos = null;
    public ?string $twitter_username = null;
    public ?bool $two_factor_authentication = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $user_view_type = null;
    public ?array $users = null;
}

/** Request payload for User#remove. */
class UserRemoveMatch
{
    public int $gpg_key_id;
}

/** UserMarketplacePurchase entity data model. */
class UserMarketplacePurchase
{
    public array $account;
    public string $billing_cycle;
    public string $free_trial_ends_on;
    public string $next_billing_date;
    public bool $on_free_trial;
    public array $plan;
    public int $unit_count;
    public string $updated_at;
}

/** Request payload for UserMarketplacePurchase#list. */
class UserMarketplacePurchaseListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** View entity data model. */
class View
{
    public int $count;
    public string $timestamp;
    public int $uniques;
}

/** Request payload for View#list. */
class ViewListMatch
{
    public string $owner;
    public string $repo;
    public ?string $per = null;
}

/** WebhookConfig entity data model. */
class WebhookConfig
{
    public ?string $content_type = null;
    public ?string $insecure_ssl = null;
    public ?string $secret = null;
    public ?string $url = null;
}

/** Request payload for WebhookConfig#load. */
class WebhookConfigLoadMatch
{
    public ?string $content_type = null;
    public ?string $insecure_ssl = null;
    public ?string $secret = null;
    public ?string $url = null;
}

/** Request payload for WebhookConfig#update. */
class WebhookConfigUpdateData
{
    public ?string $content_type = null;
    public ?string $insecure_ssl = null;
    public ?string $secret = null;
    public ?string $url = null;
}

/** Workflow entity data model. */
class Workflow
{
    public string $badge_url;
    public string $created_at;
    public ?string $deleted_at = null;
    public string $html_url;
    public int $id;
    public string $name;
    public string $node_id;
    public string $path;
    public string $state;
    public string $updated_at;
    public string $url;
}

/** Request payload for Workflow#load. */
class WorkflowLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
}

/** Request payload for Workflow#update. */
class WorkflowUpdateData
{
    public string $id;
    public string $owner;
    public string $repo;
    public ?string $badge_url = null;
    public ?string $created_at = null;
    public ?string $deleted_at = null;
    public ?string $html_url = null;
    public ?string $name = null;
    public ?string $node_id = null;
    public ?string $path = null;
    public ?string $state = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** WorkflowRun entity data model. */
class WorkflowRun
{
    public array $actor;
    public string $artifacts_url;
    public string $cancel_url;
    public ?int $check_suite_id = null;
    public ?string $check_suite_node_id = null;
    public string $check_suite_url;
    public string $conclusion;
    public string $created_at;
    public string $display_title;
    public string $event;
    public string $head_branch;
    public array $head_commit;
    public array $head_repository;
    public ?int $head_repository_id = null;
    public string $head_sha;
    public string $html_url;
    public int $id;
    public string $jobs_url;
    public string $logs_url;
    public ?string $name = null;
    public string $node_id;
    public string $path;
    public ?string $previous_attempt_url = null;
    public array $pull_requests;
    public ?array $referenced_workflows = null;
    public array $repository;
    public string $rerun_url;
    public ?int $run_attempt = null;
    public int $run_number;
    public ?string $run_started_at = null;
    public string $status;
    public array $triggering_actor;
    public string $updated_at;
    public string $url;
    public int $workflow_id;
    public string $workflow_url;
}

/** Request payload for WorkflowRun#load. */
class WorkflowRunLoadMatch
{
    public ?int $attempt_number = null;
    public string $owner;
    public string $repo;
    public ?int $run_id = null;
    public ?bool $exclude_pull_request = null;
    public ?int $id = null;
}

/** Request payload for WorkflowRun#create. */
class WorkflowRunCreateData
{
    public string $owner;
    public string $repo;
    public int $run_id;
    public array $actor;
    public string $artifacts_url;
    public string $cancel_url;
    public ?int $check_suite_id = null;
    public ?string $check_suite_node_id = null;
    public string $check_suite_url;
    public string $conclusion;
    public string $created_at;
    public string $display_title;
    public string $event;
    public string $head_branch;
    public array $head_commit;
    public array $head_repository;
    public ?int $head_repository_id = null;
    public string $head_sha;
    public string $html_url;
    public int $id;
    public string $jobs_url;
    public string $logs_url;
    public ?string $name = null;
    public string $node_id;
    public string $path;
    public ?string $previous_attempt_url = null;
    public array $pull_requests;
    public ?array $referenced_workflows = null;
    public array $repository;
    public string $rerun_url;
    public ?int $run_attempt = null;
    public int $run_number;
    public ?string $run_started_at = null;
    public string $status;
    public array $triggering_actor;
    public string $updated_at;
    public string $url;
    public int $workflow_id;
    public string $workflow_url;
}

/** WorkflowRunUsage entity data model. */
class WorkflowRunUsage
{
    public array $MACOS;
    public array $UBUNTU;
    public array $WINDOWS;
}

/** Request payload for WorkflowRunUsage#load. */
class WorkflowRunUsageLoadMatch
{
    public string $owner;
    public string $repo;
    public int $run_id;
}

/** WorkflowUsage entity data model. */
class WorkflowUsage
{
    public ?array $MACOS = null;
    public ?array $UBUNTU = null;
    public ?array $WINDOWS = null;
    public ?string $id = null;
}

/** Request payload for WorkflowUsage#load. */
class WorkflowUsageLoadMatch
{
    public string $id;
    public string $owner;
    public string $repo;
}

