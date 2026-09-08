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
    public array $stack;
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
    public array $stack;
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
    public ?array $stack = null;
    public ?string $state = null;
    public ?string $statuses_url = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?array $user = null;
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
    public string $archive_url;
    public bool $archived;
    public string $assignees_url;
    public ?bool $auto_init = null;
    public string $blobs_url;
    public string $branches_url;
    public string $clone_url;
    public array $code_of_conduct;
    public ?array $code_search_index_status = null;
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
    public ?string $gitignore_template = null;
    public bool $has_discussions;
    public ?bool $has_downloads = null;
    public bool $has_issues;
    public bool $has_pages;
    public bool $has_projects;
    public ?bool $has_pull_requests = null;
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
    public ?string $pull_request_creation_policy = null;
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
    public ?string $starred_at = null;
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

/** Request payload for Repo#load. */
class RepoLoadMatch
{
    public string $owner;
    public string $repo;
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
    public ?array $code_search_index_status = null;
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
    public ?string $gitignore_template = null;
    public bool $has_discussions;
    public ?bool $has_downloads = null;
    public bool $has_issues;
    public bool $has_pages;
    public bool $has_projects;
    public ?bool $has_pull_requests = null;
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
    public ?string $pull_request_creation_policy = null;
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
    public ?string $starred_at = null;
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

/** Request payload for Repo#update. */
class RepoUpdateData
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
    public ?array $code_search_index_status = null;
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
    public ?string $gitignore_template = null;
    public ?bool $has_discussions = null;
    public ?bool $has_downloads = null;
    public ?bool $has_issues = null;
    public ?bool $has_pages = null;
    public ?bool $has_projects = null;
    public ?bool $has_pull_requests = null;
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
    public ?string $pull_request_creation_policy = null;
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
    public ?string $starred_at = null;
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

/** Request payload for Repo#remove. */
class RepoRemoveMatch
{
    public string $owner;
    public string $repo;
}

