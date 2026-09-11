// Typed models for the Github SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Action
 * @property {number} [MACOS]
 * @property {number} [UBUNTU]
 * @property {number} [WINDOWS]
 * @property {string} access_level
 * @property {number} active_caches_count
 * @property {number} active_caches_size_in_bytes
 * @property {Object} actor
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {string} [allowed_actions]
 * @property {boolean} allows_public_repositories
 * @property {boolean} [anonymous_access_enabled]
 * @property {string} approval_policy
 * @property {string} archive_download_url
 * @property {string} archive_url
 * @property {boolean} [archived]
 * @property {string} artifacts_url
 * @property {string} assignees_url
 * @property {string} badge_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {boolean} busy
 * @property {boolean} [can_approve_pull_request_reviews]
 * @property {string} cancel_url
 * @property {string} check_run_url
 * @property {number} [check_suite_id]
 * @property {string} [check_suite_node_id]
 * @property {string} check_suite_url
 * @property {string} [clone_url]
 * @property {Object} code_of_conduct
 * @property {Object} [code_search_index_status]
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} completed_at
 * @property {string} conclusion
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {number} cpu_cores
 * @property {string} created_at
 * @property {Object} [custom_properties]
 * @property {number} days
 * @property {boolean} default
 * @property {string} [default_branch]
 * @property {string} [default_workflow_permissions]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} [deleted_at]
 * @property {string} deployments_url
 * @property {string} description
 * @property {string} [digest]
 * @property {boolean} [disabled]
 * @property {string} display_name
 * @property {string} display_title
 * @property {string} downloads_url
 * @property {boolean} enabled
 * @property {string} enabled_repositories
 * @property {boolean} [ephemeral]
 * @property {string} event
 * @property {string} events_url
 * @property {boolean} expired
 * @property {string} expires_at
 * @property {boolean} fork
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} [git_url]
 * @property {boolean} [github_owned_allowed]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} head_branch
 * @property {Object} head_commit
 * @property {Object} head_repository
 * @property {number} [head_repository_id]
 * @property {string} head_sha
 * @property {string} [homepage]
 * @property {string} hooks_url
 * @property {string} [hosted_runners_url]
 * @property {string} html_url
 * @property {number} id
 * @property {Object} image_details
 * @property {boolean} inherited
 * @property {boolean} [inherited_allows_public_repositories]
 * @property {Object} [inputs]
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} jobs_url
 * @property {string} keys_url
 * @property {Array} labels
 * @property {string} labels_url
 * @property {string} [language]
 * @property {string} languages_url
 * @property {string} [last_active_on]
 * @property {Object} [license]
 * @property {string} logs_url
 * @property {Object} machine_size_details
 * @property {number} [macos_12_core]
 * @property {string} [master_branch]
 * @property {number} [maximum_runners]
 * @property {number} memory_gb
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} [mirror_url]
 * @property {string} name
 * @property {string} [network_configuration_id]
 * @property {number} [network_count]
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {string} os
 * @property {Object} owner
 * @property {string} path
 * @property {Array} [patterns_allowed]
 * @property {Object} [permissions]
 * @property {string} platform
 * @property {Array} platforms
 * @property {string} [previous_attempt_url]
 * @property {boolean} private
 * @property {boolean} public_ip_enabled
 * @property {Array} [public_ips]
 * @property {Array} pull_requests
 * @property {string} pulls_url
 * @property {string} [pushed_at]
 * @property {string} ref
 * @property {Array} [referenced_workflows]
 * @property {string} releases_url
 * @property {Object} repository
 * @property {boolean} [require_approval_for_fork_pr_workflows]
 * @property {string} rerun_url
 * @property {boolean} [restricted_to_workflows]
 * @property {string} [role_name]
 * @property {number} [run_attempt]
 * @property {number} run_id
 * @property {number} run_number
 * @property {string} [run_started_at]
 * @property {string} run_url
 * @property {boolean} run_workflows_from_fork_pull_requests
 * @property {number} runner_group_id
 * @property {string} runner_group_name
 * @property {number} runner_id
 * @property {string} runner_name
 * @property {Array} runners
 * @property {string} runners_url
 * @property {Object} [security_and_analysis]
 * @property {string} [selected_repositories_url]
 * @property {Array} selected_repository_ids
 * @property {Array} [selected_workflows]
 * @property {boolean} [send_secrets_and_variables]
 * @property {boolean} [send_write_tokens_to_workflows]
 * @property {boolean} [sha_pinning_required]
 * @property {number} [size]
 * @property {number} size_gb
 * @property {number} size_in_bytes
 * @property {string} source
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} stargazers_url
 * @property {string} [starred_at]
 * @property {string} started_at
 * @property {string} state
 * @property {string} status
 * @property {string} statuses_url
 * @property {Array} [steps]
 * @property {number} storage_gb
 * @property {number} [subscribers_count]
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} [svn_url]
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {number} [total]
 * @property {number} total_count
 * @property {string} trees_url
 * @property {Object} triggering_actor
 * @property {string} [type]
 * @property {number} [ubuntu_16_core]
 * @property {number} [ubuntu_32_core]
 * @property {number} [ubuntu_4_core]
 * @property {number} [ubuntu_64_core]
 * @property {number} [ubuntu_8_core]
 * @property {string} updated_at
 * @property {string} url
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [value]
 * @property {boolean} [verified_allowed]
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 * @property {number} [windows_16_core]
 * @property {number} [windows_32_core]
 * @property {number} [windows_4_core]
 * @property {number} [windows_64_core]
 * @property {number} [windows_8_core]
 * @property {string} [work_folder]
 * @property {number} workflow_id
 * @property {string} workflow_name
 * @property {boolean} [workflow_restrictions_read_only]
 * @property {Object} [workflow_run]
 * @property {string} workflow_url
 */

/**
 * @typedef {Object} ActionLoadMatch
 * @property {string} archive_format
 * @property {number} artifact_id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ActionListMatch
 * @property {string} org_id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} ActionCreateData
 * @property {string} org_id
 * @property {number} [MACOS]
 * @property {number} [UBUNTU]
 * @property {number} [WINDOWS]
 * @property {string} access_level
 * @property {number} active_caches_count
 * @property {number} active_caches_size_in_bytes
 * @property {Object} actor
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {string} [allowed_actions]
 * @property {boolean} allows_public_repositories
 * @property {boolean} [anonymous_access_enabled]
 * @property {string} approval_policy
 * @property {string} archive_download_url
 * @property {string} archive_url
 * @property {boolean} [archived]
 * @property {string} artifacts_url
 * @property {string} assignees_url
 * @property {string} badge_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {boolean} busy
 * @property {boolean} [can_approve_pull_request_reviews]
 * @property {string} cancel_url
 * @property {string} check_run_url
 * @property {number} [check_suite_id]
 * @property {string} [check_suite_node_id]
 * @property {string} check_suite_url
 * @property {string} [clone_url]
 * @property {Object} code_of_conduct
 * @property {Object} [code_search_index_status]
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} completed_at
 * @property {string} conclusion
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {number} cpu_cores
 * @property {string} created_at
 * @property {Object} [custom_properties]
 * @property {number} days
 * @property {boolean} default
 * @property {string} [default_branch]
 * @property {string} [default_workflow_permissions]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} [deleted_at]
 * @property {string} deployments_url
 * @property {string} description
 * @property {string} [digest]
 * @property {boolean} [disabled]
 * @property {string} display_name
 * @property {string} display_title
 * @property {string} downloads_url
 * @property {boolean} enabled
 * @property {string} enabled_repositories
 * @property {boolean} [ephemeral]
 * @property {string} event
 * @property {string} events_url
 * @property {boolean} expired
 * @property {string} expires_at
 * @property {boolean} fork
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} [git_url]
 * @property {boolean} [github_owned_allowed]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} head_branch
 * @property {Object} head_commit
 * @property {Object} head_repository
 * @property {number} [head_repository_id]
 * @property {string} head_sha
 * @property {string} [homepage]
 * @property {string} hooks_url
 * @property {string} [hosted_runners_url]
 * @property {string} html_url
 * @property {number} id
 * @property {Object} image_details
 * @property {boolean} inherited
 * @property {boolean} [inherited_allows_public_repositories]
 * @property {Object} [inputs]
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} jobs_url
 * @property {string} keys_url
 * @property {Array} labels
 * @property {string} labels_url
 * @property {string} [language]
 * @property {string} languages_url
 * @property {string} [last_active_on]
 * @property {Object} [license]
 * @property {string} logs_url
 * @property {Object} machine_size_details
 * @property {number} [macos_12_core]
 * @property {string} [master_branch]
 * @property {number} [maximum_runners]
 * @property {number} memory_gb
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} [mirror_url]
 * @property {string} name
 * @property {string} [network_configuration_id]
 * @property {number} [network_count]
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {string} os
 * @property {Object} owner
 * @property {string} path
 * @property {Array} [patterns_allowed]
 * @property {Object} [permissions]
 * @property {string} platform
 * @property {Array} platforms
 * @property {string} [previous_attempt_url]
 * @property {boolean} private
 * @property {boolean} public_ip_enabled
 * @property {Array} [public_ips]
 * @property {Array} pull_requests
 * @property {string} pulls_url
 * @property {string} [pushed_at]
 * @property {string} ref
 * @property {Array} [referenced_workflows]
 * @property {string} releases_url
 * @property {Object} repository
 * @property {boolean} [require_approval_for_fork_pr_workflows]
 * @property {string} rerun_url
 * @property {boolean} [restricted_to_workflows]
 * @property {string} [role_name]
 * @property {number} [run_attempt]
 * @property {number} run_id
 * @property {number} run_number
 * @property {string} [run_started_at]
 * @property {string} run_url
 * @property {boolean} run_workflows_from_fork_pull_requests
 * @property {number} runner_group_id
 * @property {string} runner_group_name
 * @property {number} runner_id
 * @property {string} runner_name
 * @property {Array} runners
 * @property {string} runners_url
 * @property {Object} [security_and_analysis]
 * @property {string} [selected_repositories_url]
 * @property {Array} selected_repository_ids
 * @property {Array} [selected_workflows]
 * @property {boolean} [send_secrets_and_variables]
 * @property {boolean} [send_write_tokens_to_workflows]
 * @property {boolean} [sha_pinning_required]
 * @property {number} [size]
 * @property {number} size_gb
 * @property {number} size_in_bytes
 * @property {string} source
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} stargazers_url
 * @property {string} [starred_at]
 * @property {string} started_at
 * @property {string} state
 * @property {string} status
 * @property {string} statuses_url
 * @property {Array} [steps]
 * @property {number} storage_gb
 * @property {number} [subscribers_count]
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} [svn_url]
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {number} [total]
 * @property {number} total_count
 * @property {string} trees_url
 * @property {Object} triggering_actor
 * @property {string} [type]
 * @property {number} [ubuntu_16_core]
 * @property {number} [ubuntu_32_core]
 * @property {number} [ubuntu_4_core]
 * @property {number} [ubuntu_64_core]
 * @property {number} [ubuntu_8_core]
 * @property {string} updated_at
 * @property {string} url
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [value]
 * @property {boolean} [verified_allowed]
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 * @property {number} [windows_16_core]
 * @property {number} [windows_32_core]
 * @property {number} [windows_4_core]
 * @property {number} [windows_64_core]
 * @property {number} [windows_8_core]
 * @property {string} [work_folder]
 * @property {number} workflow_id
 * @property {string} workflow_name
 * @property {boolean} [workflow_restrictions_read_only]
 * @property {Object} [workflow_run]
 * @property {string} workflow_url
 */

/**
 * @typedef {Object} ActionUpdateData
 * @property {string} org_id
 * @property {number} repository_id
 * @property {number} [MACOS]
 * @property {number} [UBUNTU]
 * @property {number} [WINDOWS]
 * @property {string} [access_level]
 * @property {number} [active_caches_count]
 * @property {number} [active_caches_size_in_bytes]
 * @property {Object} [actor]
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {string} [allowed_actions]
 * @property {boolean} [allows_public_repositories]
 * @property {boolean} [anonymous_access_enabled]
 * @property {string} [approval_policy]
 * @property {string} [archive_download_url]
 * @property {string} [archive_url]
 * @property {boolean} [archived]
 * @property {string} [artifacts_url]
 * @property {string} [assignees_url]
 * @property {string} [badge_url]
 * @property {string} [blobs_url]
 * @property {string} [branches_url]
 * @property {boolean} [busy]
 * @property {boolean} [can_approve_pull_request_reviews]
 * @property {string} [cancel_url]
 * @property {string} [check_run_url]
 * @property {number} [check_suite_id]
 * @property {string} [check_suite_node_id]
 * @property {string} [check_suite_url]
 * @property {string} [clone_url]
 * @property {Object} [code_of_conduct]
 * @property {Object} [code_search_index_status]
 * @property {string} [collaborators_url]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [compare_url]
 * @property {string} [completed_at]
 * @property {string} [conclusion]
 * @property {string} [contents_url]
 * @property {string} [contributors_url]
 * @property {number} [cpu_cores]
 * @property {string} [created_at]
 * @property {Object} [custom_properties]
 * @property {number} [days]
 * @property {boolean} [default]
 * @property {string} [default_branch]
 * @property {string} [default_workflow_permissions]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} [deleted_at]
 * @property {string} [deployments_url]
 * @property {string} [description]
 * @property {string} [digest]
 * @property {boolean} [disabled]
 * @property {string} [display_name]
 * @property {string} [display_title]
 * @property {string} [downloads_url]
 * @property {boolean} [enabled]
 * @property {string} [enabled_repositories]
 * @property {boolean} [ephemeral]
 * @property {string} [event]
 * @property {string} [events_url]
 * @property {boolean} [expired]
 * @property {string} [expires_at]
 * @property {boolean} [fork]
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} [forks_url]
 * @property {string} [full_name]
 * @property {string} [git_commits_url]
 * @property {string} [git_refs_url]
 * @property {string} [git_tags_url]
 * @property {string} [git_url]
 * @property {boolean} [github_owned_allowed]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [head_branch]
 * @property {Object} [head_commit]
 * @property {Object} [head_repository]
 * @property {number} [head_repository_id]
 * @property {string} [head_sha]
 * @property {string} [homepage]
 * @property {string} [hooks_url]
 * @property {string} [hosted_runners_url]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {Object} [image_details]
 * @property {boolean} [inherited]
 * @property {boolean} [inherited_allows_public_repositories]
 * @property {Object} [inputs]
 * @property {boolean} [is_template]
 * @property {string} [issue_comment_url]
 * @property {string} [issue_events_url]
 * @property {string} [issues_url]
 * @property {string} [jobs_url]
 * @property {string} [keys_url]
 * @property {Array} [labels]
 * @property {string} [labels_url]
 * @property {string} [language]
 * @property {string} [languages_url]
 * @property {string} [last_active_on]
 * @property {Object} [license]
 * @property {string} [logs_url]
 * @property {Object} [machine_size_details]
 * @property {number} [macos_12_core]
 * @property {string} [master_branch]
 * @property {number} [maximum_runners]
 * @property {number} [memory_gb]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} [merges_url]
 * @property {string} [milestones_url]
 * @property {string} [mirror_url]
 * @property {string} [name]
 * @property {string} [network_configuration_id]
 * @property {number} [network_count]
 * @property {string} [node_id]
 * @property {string} [notifications_url]
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {string} [os]
 * @property {Object} [owner]
 * @property {string} [path]
 * @property {Array} [patterns_allowed]
 * @property {Object} [permissions]
 * @property {string} [platform]
 * @property {Array} [platforms]
 * @property {string} [previous_attempt_url]
 * @property {boolean} [private]
 * @property {boolean} [public_ip_enabled]
 * @property {Array} [public_ips]
 * @property {Array} [pull_requests]
 * @property {string} [pulls_url]
 * @property {string} [pushed_at]
 * @property {string} [ref]
 * @property {Array} [referenced_workflows]
 * @property {string} [releases_url]
 * @property {Object} [repository]
 * @property {boolean} [require_approval_for_fork_pr_workflows]
 * @property {string} [rerun_url]
 * @property {boolean} [restricted_to_workflows]
 * @property {string} [role_name]
 * @property {number} [run_attempt]
 * @property {number} [run_id]
 * @property {number} [run_number]
 * @property {string} [run_started_at]
 * @property {string} [run_url]
 * @property {boolean} [run_workflows_from_fork_pull_requests]
 * @property {number} [runner_group_id]
 * @property {string} [runner_group_name]
 * @property {number} [runner_id]
 * @property {string} [runner_name]
 * @property {Array} [runners]
 * @property {string} [runners_url]
 * @property {Object} [security_and_analysis]
 * @property {string} [selected_repositories_url]
 * @property {Array} [selected_repository_ids]
 * @property {Array} [selected_workflows]
 * @property {boolean} [send_secrets_and_variables]
 * @property {boolean} [send_write_tokens_to_workflows]
 * @property {boolean} [sha_pinning_required]
 * @property {number} [size]
 * @property {number} [size_gb]
 * @property {number} [size_in_bytes]
 * @property {string} [source]
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} [stargazers_url]
 * @property {string} [starred_at]
 * @property {string} [started_at]
 * @property {string} [state]
 * @property {string} [status]
 * @property {string} [statuses_url]
 * @property {Array} [steps]
 * @property {number} [storage_gb]
 * @property {number} [subscribers_count]
 * @property {string} [subscribers_url]
 * @property {string} [subscription_url]
 * @property {string} [svn_url]
 * @property {string} [tags_url]
 * @property {string} [teams_url]
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {number} [total]
 * @property {number} [total_count]
 * @property {string} [trees_url]
 * @property {Object} [triggering_actor]
 * @property {string} [type]
 * @property {number} [ubuntu_16_core]
 * @property {number} [ubuntu_32_core]
 * @property {number} [ubuntu_4_core]
 * @property {number} [ubuntu_64_core]
 * @property {number} [ubuntu_8_core]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [value]
 * @property {boolean} [verified_allowed]
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 * @property {number} [windows_16_core]
 * @property {number} [windows_32_core]
 * @property {number} [windows_4_core]
 * @property {number} [windows_64_core]
 * @property {number} [windows_8_core]
 * @property {string} [work_folder]
 * @property {number} [workflow_id]
 * @property {string} [workflow_name]
 * @property {boolean} [workflow_restrictions_read_only]
 * @property {Object} [workflow_run]
 * @property {string} [workflow_url]
 */

/**
 * @typedef {Object} ActionRemoveMatch
 * @property {number} hosted_runner_id
 * @property {string} org_id
 */

/**
 * @typedef {Object} ActionsArtifactAndLogRetention
 * @property {number} days
 * @property {number} maximum_allowed_days
 */

/**
 * @typedef {Object} ActionsArtifactAndLogRetentionLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ActionsCacheList
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} [key]
 * @property {string} [last_accessed_at]
 * @property {string} [ref]
 * @property {number} [size_in_bytes]
 * @property {string} [version]
 */

/**
 * @typedef {Object} ActionsCacheListListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [direction]
 * @property {string} [key]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [ref]
 * @property {string} [sort]
 */

/**
 * @typedef {Object} ActionsCacheListRemoveMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} key
 * @property {string} [ref]
 */

/**
 * @typedef {Object} ActionsCacheUsageByRepository
 * @property {number} active_caches_count
 * @property {number} active_caches_size_in_bytes
 * @property {string} full_name
 */

/**
 * @typedef {Object} ActionsCacheUsageByRepositoryLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ActionsCacheUsageOrgEnterprise
 * @property {number} total_active_caches_count
 * @property {number} total_active_caches_size_in_bytes
 */

/**
 * @typedef {Object} ActionsCacheUsageOrgEnterpriseLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ActionsForkPrContributorApproval
 * @property {string} approval_policy
 */

/**
 * @typedef {Object} ActionsForkPrContributorApprovalLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ActionsForkPrWorkflowsPrivateRepo
 * @property {boolean} require_approval_for_fork_pr_workflows
 * @property {boolean} run_workflows_from_fork_pull_requests
 * @property {boolean} send_secrets_and_variables
 * @property {boolean} send_write_tokens_to_workflows
 */

/**
 * @typedef {Object} ActionsForkPrWorkflowsPrivateRepoLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ActionsGetDefaultWorkflowPermission
 * @property {boolean} can_approve_pull_request_reviews
 * @property {string} default_workflow_permissions
 */

/**
 * @typedef {Object} ActionsGetDefaultWorkflowPermissionLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ActionsHostedRunner
 * @property {boolean} [enable_static_ip]
 * @property {number} id
 * @property {Object} image
 * @property {Object} image_details
 * @property {string} [last_active_on]
 * @property {Object} machine_size_details
 * @property {number} [maximum_runners]
 * @property {string} name
 * @property {string} platform
 * @property {boolean} public_ip_enabled
 * @property {Array} [public_ips]
 * @property {number} [runner_group_id]
 * @property {string} size
 * @property {string} status
 */

/**
 * @typedef {Object} ActionsHostedRunnerLoadMatch
 * @property {number} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} ActionsHostedRunnerCreateData
 * @property {string} org_id
 * @property {boolean} [enable_static_ip]
 * @property {number} id
 * @property {Object} image
 * @property {Object} image_details
 * @property {string} [last_active_on]
 * @property {Object} machine_size_details
 * @property {number} [maximum_runners]
 * @property {string} name
 * @property {string} platform
 * @property {boolean} public_ip_enabled
 * @property {Array} [public_ips]
 * @property {number} [runner_group_id]
 * @property {string} size
 * @property {string} status
 */

/**
 * @typedef {Object} ActionsHostedRunnerUpdateData
 * @property {number} id
 * @property {string} org_id
 * @property {boolean} [enable_static_ip]
 * @property {Object} [image]
 * @property {Object} [image_details]
 * @property {string} [last_active_on]
 * @property {Object} [machine_size_details]
 * @property {number} [maximum_runners]
 * @property {string} [name]
 * @property {string} [platform]
 * @property {boolean} [public_ip_enabled]
 * @property {Array} [public_ips]
 * @property {number} [runner_group_id]
 * @property {string} [size]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ActionsHostedRunnerLimit
 * @property {number} current_usage
 * @property {number} maximum
 */

/**
 * @typedef {Object} ActionsHostedRunnerLimitLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ActionsOrganizationPermission
 * @property {string} [allowed_actions]
 * @property {string} enabled_repositories
 * @property {string} [selected_actions_url]
 * @property {string} [selected_repositories_url]
 * @property {boolean} [sha_pinning_required]
 */

/**
 * @typedef {Object} ActionsOrganizationPermissionLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ActionsPublicKey
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} key
 * @property {string} key_id
 * @property {string} [title]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ActionsPublicKeyLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ActionsRepositoryPermission
 * @property {string} [allowed_actions]
 * @property {boolean} enabled
 * @property {string} [selected_actions_url]
 * @property {boolean} [sha_pinning_required]
 */

/**
 * @typedef {Object} ActionsRepositoryPermissionLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ActionsSecret
 * @property {string} created_at
 * @property {string} [id]
 * @property {string} name
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ActionsSecretLoadMatch
 * @property {string} [environment_id]
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ActionsVariable
 * @property {string} created_at
 * @property {string} [id]
 * @property {string} name
 * @property {string} updated_at
 * @property {string} value
 */

/**
 * @typedef {Object} ActionsVariableLoadMatch
 * @property {string} [environment_id]
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ActionsWorkflowAccessToRepository
 * @property {string} access_level
 */

/**
 * @typedef {Object} ActionsWorkflowAccessToRepositoryLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Activity
 * @property {string} activity_type
 * @property {Object} actor
 * @property {string} after
 * @property {string} [archive_url]
 * @property {string} [assignees_url]
 * @property {string} [avatar_url]
 * @property {string} before
 * @property {string} [blobs_url]
 * @property {string} [branches_url]
 * @property {string} [clone_url]
 * @property {string} [collaborators_url]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [compare_url]
 * @property {string} [contents_url]
 * @property {string} [contributors_url]
 * @property {string} [deployments_url]
 * @property {string} [description]
 * @property {string} [downloads_url]
 * @property {string} [events_url]
 * @property {string} [followers_url]
 * @property {string} [following_url]
 * @property {boolean} [fork]
 * @property {string} [forks_url]
 * @property {string} [full_name]
 * @property {string} [gists_url]
 * @property {string} [git_commits_url]
 * @property {string} [git_refs_url]
 * @property {string} [git_tags_url]
 * @property {string} [git_url]
 * @property {number} [github_id]
 * @property {string} [gravatar_id]
 * @property {string} [homepage]
 * @property {string} [hooks_url]
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {string} [issue_comment_url]
 * @property {string} [issue_events_url]
 * @property {string} [issues_url]
 * @property {string} [keys_url]
 * @property {string} [labels_url]
 * @property {Object} [language]
 * @property {string} [languages_url]
 * @property {string} [last_read_at]
 * @property {string} [login]
 * @property {string} [merges_url]
 * @property {string} [milestones_url]
 * @property {string} [mirror_url]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [notifications_url]
 * @property {string} [organizations_url]
 * @property {Object} [owner]
 * @property {boolean} [private]
 * @property {string} [pulls_url]
 * @property {boolean} [read]
 * @property {string} [received_events_url]
 * @property {string} ref
 * @property {string} [releases_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {string} [ssh_url]
 * @property {string} [stargazers_url]
 * @property {string} [starred_url]
 * @property {string} [statuses_url]
 * @property {string} [subscribers_url]
 * @property {string} [subscription_url]
 * @property {string} [subscriptions_url]
 * @property {string} [svn_url]
 * @property {string} [tags_url]
 * @property {string} [teams_url]
 * @property {string} timestamp
 * @property {string} [trees_url]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ActivityLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ActivityListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [activity_type]
 * @property {string} [actor]
 * @property {string} [after]
 * @property {string} [before]
 * @property {string} [direction]
 * @property {number} [per_page]
 * @property {string} [ref]
 * @property {string} [time_period]
 */

/**
 * @typedef {Object} ActivityUpdateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [activity_type]
 * @property {Object} [actor]
 * @property {string} [after]
 * @property {string} [archive_url]
 * @property {string} [assignees_url]
 * @property {string} [avatar_url]
 * @property {string} [before]
 * @property {string} [blobs_url]
 * @property {string} [branches_url]
 * @property {string} [clone_url]
 * @property {string} [collaborators_url]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [compare_url]
 * @property {string} [contents_url]
 * @property {string} [contributors_url]
 * @property {string} [deployments_url]
 * @property {string} [description]
 * @property {string} [downloads_url]
 * @property {string} [events_url]
 * @property {string} [followers_url]
 * @property {string} [following_url]
 * @property {boolean} [fork]
 * @property {string} [forks_url]
 * @property {string} [full_name]
 * @property {string} [gists_url]
 * @property {string} [git_commits_url]
 * @property {string} [git_refs_url]
 * @property {string} [git_tags_url]
 * @property {string} [git_url]
 * @property {number} [github_id]
 * @property {string} [gravatar_id]
 * @property {string} [homepage]
 * @property {string} [hooks_url]
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {string} [issue_comment_url]
 * @property {string} [issue_events_url]
 * @property {string} [issues_url]
 * @property {string} [keys_url]
 * @property {string} [labels_url]
 * @property {Object} [language]
 * @property {string} [languages_url]
 * @property {string} [last_read_at]
 * @property {string} [login]
 * @property {string} [merges_url]
 * @property {string} [milestones_url]
 * @property {string} [mirror_url]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [notifications_url]
 * @property {string} [organizations_url]
 * @property {boolean} [private]
 * @property {string} [pulls_url]
 * @property {boolean} [read]
 * @property {string} [received_events_url]
 * @property {string} [ref]
 * @property {string} [releases_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {string} [ssh_url]
 * @property {string} [stargazers_url]
 * @property {string} [starred_url]
 * @property {string} [statuses_url]
 * @property {string} [subscribers_url]
 * @property {string} [subscription_url]
 * @property {string} [subscriptions_url]
 * @property {string} [svn_url]
 * @property {string} [tags_url]
 * @property {string} [teams_url]
 * @property {string} [timestamp]
 * @property {string} [trees_url]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ActivityRemoveMatch
 * @property {number} thread_id
 */

/**
 * @typedef {Object} Add
 * @property {Array} usernames
 */

/**
 * @typedef {Object} AddCreateData
 * @property {string} enterprise
 * @property {string} team_id
 * @property {Array} usernames
 */

/**
 * @typedef {Object} ApiInsightsRouteStat
 * @property {string} [api_route]
 * @property {string} [http_method]
 * @property {string} [last_rate_limited_timestamp]
 * @property {string} [last_request_timestamp]
 * @property {number} [rate_limited_request_count]
 * @property {number} [total_request_count]
 */

/**
 * @typedef {Object} ApiInsightsRouteStatListMatch
 * @property {number} actor_id
 * @property {string} actor_type
 * @property {string} org
 * @property {string} [api_route_substring]
 * @property {string} [direction]
 * @property {string} [max_timestamp]
 * @property {string} min_timestamp
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} ApiInsightsSubjectStat
 * @property {string} [last_rate_limited_timestamp]
 * @property {string} [last_request_timestamp]
 * @property {number} [rate_limited_request_count]
 * @property {number} [subject_id]
 * @property {string} [subject_name]
 * @property {string} [subject_type]
 * @property {number} [total_request_count]
 */

/**
 * @typedef {Object} ApiInsightsSubjectStatListMatch
 * @property {string} org_id
 * @property {string} [direction]
 * @property {string} [max_timestamp]
 * @property {string} min_timestamp
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {Array} [sort]
 * @property {string} [subject_name_substring]
 */

/**
 * @typedef {Object} ApiInsightsSummaryStat
 * @property {string} [id]
 * @property {number} [rate_limited_request_count]
 * @property {number} [total_request_count]
 */

/**
 * @typedef {Object} ApiInsightsSummaryStatLoadMatch
 * @property {number} [actor_id]
 * @property {string} [actor_type]
 * @property {string} [org]
 * @property {string} [max_timestamp]
 * @property {string} min_timestamp
 * @property {string} [org_id]
 * @property {string} [user_id]
 */

/**
 * @typedef {Object} ApiInsightsTimeStat
 * @property {number} [rate_limited_request_count]
 * @property {string} [timestamp]
 * @property {number} [total_request_count]
 */

/**
 * @typedef {Object} ApiInsightsTimeStatLoadMatch
 * @property {string} org_id
 * @property {string} user_id
 * @property {string} [max_timestamp]
 * @property {string} min_timestamp
 * @property {string} timestamp_increment
 */

/**
 * @typedef {Object} ApiInsightsTimeStatListMatch
 * @property {number} [actor_id]
 * @property {string} [actor_type]
 * @property {string} [org]
 * @property {string} [max_timestamp]
 * @property {string} min_timestamp
 * @property {string} timestamp_increment
 * @property {string} [org_id]
 */

/**
 * @typedef {Object} ApiInsightsUserStat
 * @property {number} [actor_id]
 * @property {string} [actor_name]
 * @property {string} [actor_type]
 * @property {string} [id]
 * @property {number} [integration_id]
 * @property {string} [last_rate_limited_timestamp]
 * @property {string} [last_request_timestamp]
 * @property {number} [oauth_application_id]
 * @property {number} [rate_limited_request_count]
 * @property {number} [total_request_count]
 */

/**
 * @typedef {Object} ApiInsightsUserStatLoadMatch
 * @property {string} id
 * @property {string} org_id
 * @property {string} [actor_name_substring]
 * @property {string} [direction]
 * @property {string} [max_timestamp]
 * @property {string} min_timestamp
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {Array} [sort]
 */

/**
 * @typedef {Object} ApiOverview
 * @property {Array} [actions]
 * @property {Array} [actions_macos]
 * @property {Array} [api]
 * @property {Array} [codespaces]
 * @property {Array} [copilot]
 * @property {Array} [dependabot]
 * @property {Object} [domains]
 * @property {Array} [git]
 * @property {Array} [github_enterprise_importer]
 * @property {Array} [hooks]
 * @property {Array} [importer]
 * @property {Array} [packages]
 * @property {Array} [pages]
 * @property {Object} [ssh_key_fingerprints]
 * @property {Array} [ssh_keys]
 * @property {boolean} verifiable_password_authentication
 * @property {Array} [web]
 */

/**
 * @typedef {Object} ApiOverviewListMatch
 * @property {Array} [actions]
 * @property {Array} [actions_macos]
 * @property {Array} [api]
 * @property {Array} [codespaces]
 * @property {Array} [copilot]
 * @property {Array} [dependabot]
 * @property {Object} [domains]
 * @property {Array} [git]
 * @property {Array} [github_enterprise_importer]
 * @property {Array} [hooks]
 * @property {Array} [importer]
 * @property {Array} [packages]
 * @property {Array} [pages]
 * @property {Object} [ssh_key_fingerprints]
 * @property {Array} [ssh_keys]
 * @property {boolean} [verifiable_password_authentication]
 * @property {Array} [web]
 */

/**
 * @typedef {Object} App
 * @property {string} access_tokens_url
 * @property {*} account
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {boolean} [anonymous_access_enabled]
 * @property {number} app_id
 * @property {string} app_slug
 * @property {string} archive_url
 * @property {boolean} archived
 * @property {string} assignees_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} [client_id]
 * @property {string} [client_secret]
 * @property {string} clone_url
 * @property {Object} [code_search_index_status]
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} [contact_email]
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} [created_at]
 * @property {string} default_branch
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} [description]
 * @property {boolean} disabled
 * @property {string} downloads_url
 * @property {Array} [events]
 * @property {string} events_url
 * @property {string} [external_url]
 * @property {boolean} fork
 * @property {number} forks
 * @property {number} forks_count
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} git_url
 * @property {boolean} [has_discussions]
 * @property {boolean} has_downloads
 * @property {boolean} has_issues
 * @property {boolean} [has_multiple_single_files]
 * @property {boolean} has_pages
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {string} homepage
 * @property {string} hooks_url
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} language
 * @property {string} languages_url
 * @property {Object} license
 * @property {string} [master_branch]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} mirror_url
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} notifications_url
 * @property {number} open_issues
 * @property {number} open_issues_count
 * @property {Object} [owner]
 * @property {string} [pem]
 * @property {Object} [permissions]
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} pushed_at
 * @property {string} releases_url
 * @property {string} repositories_url
 * @property {string} repository_selection
 * @property {string} single_file_name
 * @property {Array} [single_file_paths]
 * @property {number} size
 * @property {string} [slug]
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} ssh_url
 * @property {number} stargazers_count
 * @property {string} stargazers_url
 * @property {string} [starred_at]
 * @property {string} statuses_url
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} suspended_at
 * @property {Object} suspended_by
 * @property {string} svn_url
 * @property {string} tags_url
 * @property {number} target_id
 * @property {string} target_type
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} [updated_at]
 * @property {string} url
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [visibility]
 * @property {number} watchers
 * @property {number} watchers_count
 * @property {boolean} [web_commit_signoff_required]
 * @property {string} [webhook_secret]
 */

/**
 * @typedef {Object} AppListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} AppCreateData
 * @property {string} code
 * @property {string} access_tokens_url
 * @property {*} account
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {boolean} [anonymous_access_enabled]
 * @property {number} app_id
 * @property {string} app_slug
 * @property {string} archive_url
 * @property {boolean} archived
 * @property {string} assignees_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} [client_id]
 * @property {string} [client_secret]
 * @property {string} clone_url
 * @property {Object} [code_search_index_status]
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} [contact_email]
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} [created_at]
 * @property {string} default_branch
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} [description]
 * @property {boolean} disabled
 * @property {string} downloads_url
 * @property {Array} [events]
 * @property {string} events_url
 * @property {string} [external_url]
 * @property {boolean} fork
 * @property {number} forks
 * @property {number} forks_count
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} git_url
 * @property {boolean} [has_discussions]
 * @property {boolean} has_downloads
 * @property {boolean} has_issues
 * @property {boolean} [has_multiple_single_files]
 * @property {boolean} has_pages
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {string} homepage
 * @property {string} hooks_url
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} language
 * @property {string} languages_url
 * @property {Object} license
 * @property {string} [master_branch]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} mirror_url
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} notifications_url
 * @property {number} open_issues
 * @property {number} open_issues_count
 * @property {Object} [owner]
 * @property {string} [pem]
 * @property {Object} [permissions]
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} pushed_at
 * @property {string} releases_url
 * @property {string} repositories_url
 * @property {string} repository_selection
 * @property {string} single_file_name
 * @property {Array} [single_file_paths]
 * @property {number} size
 * @property {string} [slug]
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} ssh_url
 * @property {number} stargazers_count
 * @property {string} stargazers_url
 * @property {string} [starred_at]
 * @property {string} statuses_url
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} suspended_at
 * @property {Object} suspended_by
 * @property {string} svn_url
 * @property {string} tags_url
 * @property {number} target_id
 * @property {string} target_type
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} [updated_at]
 * @property {string} url
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [visibility]
 * @property {number} watchers
 * @property {number} watchers_count
 * @property {boolean} [web_commit_signoff_required]
 * @property {string} [webhook_secret]
 */

/**
 * @typedef {Object} AppUpdateData
 * @property {number} installation_id
 * @property {number} repository_id
 * @property {string} [access_tokens_url]
 * @property {*} [account]
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {boolean} [anonymous_access_enabled]
 * @property {number} [app_id]
 * @property {string} [app_slug]
 * @property {string} [archive_url]
 * @property {boolean} [archived]
 * @property {string} [assignees_url]
 * @property {string} [blobs_url]
 * @property {string} [branches_url]
 * @property {string} [client_id]
 * @property {string} [client_secret]
 * @property {string} [clone_url]
 * @property {Object} [code_search_index_status]
 * @property {string} [collaborators_url]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [compare_url]
 * @property {string} [contact_email]
 * @property {string} [contents_url]
 * @property {string} [contributors_url]
 * @property {string} [created_at]
 * @property {string} [default_branch]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} [deployments_url]
 * @property {string} [description]
 * @property {boolean} [disabled]
 * @property {string} [downloads_url]
 * @property {Array} [events]
 * @property {string} [events_url]
 * @property {string} [external_url]
 * @property {boolean} [fork]
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} [forks_url]
 * @property {string} [full_name]
 * @property {string} [git_commits_url]
 * @property {string} [git_refs_url]
 * @property {string} [git_tags_url]
 * @property {string} [git_url]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_multiple_single_files]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} [hooks_url]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {boolean} [is_template]
 * @property {string} [issue_comment_url]
 * @property {string} [issue_events_url]
 * @property {string} [issues_url]
 * @property {string} [keys_url]
 * @property {string} [labels_url]
 * @property {string} [language]
 * @property {string} [languages_url]
 * @property {Object} [license]
 * @property {string} [master_branch]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} [merges_url]
 * @property {string} [milestones_url]
 * @property {string} [mirror_url]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [notifications_url]
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {Object} [owner]
 * @property {string} [pem]
 * @property {Object} [permissions]
 * @property {boolean} [private]
 * @property {string} [pulls_url]
 * @property {string} [pushed_at]
 * @property {string} [releases_url]
 * @property {string} [repositories_url]
 * @property {string} [repository_selection]
 * @property {string} [single_file_name]
 * @property {Array} [single_file_paths]
 * @property {number} [size]
 * @property {string} [slug]
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} [stargazers_url]
 * @property {string} [starred_at]
 * @property {string} [statuses_url]
 * @property {string} [subscribers_url]
 * @property {string} [subscription_url]
 * @property {string} [suspended_at]
 * @property {Object} [suspended_by]
 * @property {string} [svn_url]
 * @property {string} [tags_url]
 * @property {number} [target_id]
 * @property {string} [target_type]
 * @property {string} [teams_url]
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} [trees_url]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 * @property {string} [webhook_secret]
 */

/**
 * @typedef {Object} AppRemoveMatch
 * @property {number} installation_id
 */

/**
 * @typedef {Object} Artifact
 * @property {string} [head_branch]
 * @property {number} [head_repository_id]
 * @property {string} [head_sha]
 * @property {number} [id]
 * @property {number} [repository_id]
 */

/**
 * @typedef {Object} ArtifactLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Assignee
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} AssigneeListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} AuthenticationToken
 * @property {string} [expires_at]
 * @property {string} [token]
 */

/**
 * @typedef {Object} AuthenticationTokenCreateData
 * @property {string} org_id
 * @property {string} [expires_at]
 * @property {string} [token]
 */

/**
 * @typedef {Object} Authorization
 * @property {string} access_token
 * @property {Object} app
 * @property {string} created_at
 * @property {string} expires_at
 * @property {string} fingerprint
 * @property {string} hashed_token
 * @property {number} id
 * @property {Object} installation
 * @property {string} note
 * @property {string} note_url
 * @property {Object} [permissions]
 * @property {Array} [repositories]
 * @property {Array} [repository_ids]
 * @property {Array} scopes
 * @property {string} [target]
 * @property {number} [target_id]
 * @property {string} token
 * @property {string} token_last_eight
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} AuthorizationCreateData
 * @property {string} application_id
 * @property {string} access_token
 * @property {Object} app
 * @property {string} created_at
 * @property {string} expires_at
 * @property {string} fingerprint
 * @property {string} hashed_token
 * @property {number} id
 * @property {Object} installation
 * @property {string} note
 * @property {string} note_url
 * @property {Object} [permissions]
 * @property {Array} [repositories]
 * @property {Array} [repository_ids]
 * @property {Array} scopes
 * @property {string} [target]
 * @property {number} [target_id]
 * @property {string} token
 * @property {string} token_last_eight
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} AuthorizationUpdateData
 * @property {string} application_id
 * @property {string} [access_token]
 * @property {Object} [app]
 * @property {string} [created_at]
 * @property {string} [expires_at]
 * @property {string} [fingerprint]
 * @property {string} [hashed_token]
 * @property {number} [id]
 * @property {Object} [installation]
 * @property {string} [note]
 * @property {string} [note_url]
 * @property {Object} [permissions]
 * @property {Array} [repositories]
 * @property {Array} [repository_ids]
 * @property {Array} [scopes]
 * @property {string} [target]
 * @property {number} [target_id]
 * @property {string} [token]
 * @property {string} [token_last_eight]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {Object} [user]
 */

/**
 * @typedef {Object} Autolink
 * @property {number} id
 * @property {boolean} is_alphanumeric
 * @property {string} key_prefix
 * @property {string} [updated_at]
 * @property {string} url_template
 */

/**
 * @typedef {Object} AutolinkLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} AutolinkListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} AutolinkCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {number} id
 * @property {boolean} is_alphanumeric
 * @property {string} key_prefix
 * @property {string} [updated_at]
 * @property {string} url_template
 */

/**
 * @typedef {Object} BaseGist
 * @property {number} [comments]
 * @property {boolean} [comments_enabled]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Object} [files]
 * @property {Array} [forks]
 * @property {string} [forks_url]
 * @property {string} [git_pull_url]
 * @property {string} [git_push_url]
 * @property {Array} [history]
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {string} [node_id]
 * @property {Object} [owner]
 * @property {boolean} [public]
 * @property {boolean} [truncated]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user]
 */

/**
 * @typedef {Object} BaseGistListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [since]
 */

/**
 * @typedef {Object} BaseGistCreateData
 * @property {string} gist_id
 * @property {number} [comments]
 * @property {boolean} [comments_enabled]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Object} [files]
 * @property {Array} [forks]
 * @property {string} [forks_url]
 * @property {string} [git_pull_url]
 * @property {string} [git_push_url]
 * @property {Array} [history]
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {string} [node_id]
 * @property {Object} [owner]
 * @property {boolean} [public]
 * @property {boolean} [truncated]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user]
 */

/**
 * @typedef {Object} BillingUsageReport
 * @property {string} date
 * @property {number} discountAmount
 * @property {number} grossAmount
 * @property {number} netAmount
 * @property {string} organizationName
 * @property {number} pricePerUnit
 * @property {string} product
 * @property {number} quantity
 * @property {string} [repositoryName]
 * @property {string} sku
 * @property {string} unitType
 */

/**
 * @typedef {Object} BillingUsageReportListMatch
 * @property {string} org
 * @property {number} [day]
 * @property {number} [hour]
 * @property {number} [month]
 * @property {number} [year]
 */

/**
 * @typedef {Object} BillingUsageReportUser
 * @property {string} date
 * @property {number} discountAmount
 * @property {number} grossAmount
 * @property {number} netAmount
 * @property {number} pricePerUnit
 * @property {string} product
 * @property {number} quantity
 * @property {string} [repositoryName]
 * @property {string} sku
 * @property {string} unitType
 */

/**
 * @typedef {Object} BillingUsageReportUserListMatch
 * @property {string} username
 * @property {number} [day]
 * @property {number} [hour]
 * @property {number} [month]
 * @property {number} [year]
 */

/**
 * @typedef {Object} Blob
 * @property {string} content
 * @property {string} encoding
 * @property {string} [highlighted_content]
 * @property {string} [id]
 * @property {string} node_id
 * @property {string} sha
 * @property {number} size
 * @property {string} url
 */

/**
 * @typedef {Object} BlobLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Block
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} BlockListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Branch
 * @property {Object} commit
 * @property {string} [id]
 * @property {Object} links
 * @property {string} name
 * @property {string} [pattern]
 * @property {boolean} protected
 * @property {Object} protection
 * @property {string} protection_url
 * @property {number} [required_approving_review_count]
 */

/**
 * @typedef {Object} BranchLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} BranchProtection
 * @property {Object} [allow_deletions]
 * @property {Object} [allow_force_pushes]
 * @property {Object} [allow_fork_syncing]
 * @property {Object} [block_creations]
 * @property {boolean} [enabled]
 * @property {Object} enforce_admins
 * @property {string} [id]
 * @property {Object} [lock_branch]
 * @property {string} [name]
 * @property {string} [protection_url]
 * @property {Object} [required_conversation_resolution]
 * @property {Object} [required_linear_history]
 * @property {Object} required_pull_request_reviews
 * @property {Object} required_signatures
 * @property {Object} required_status_checks
 * @property {Object} restrictions
 * @property {string} [url]
 */

/**
 * @typedef {Object} BranchProtectionLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} BranchRestrictionPolicy
 * @property {Array} apps
 * @property {string} apps_url
 * @property {Array} teams
 * @property {string} teams_url
 * @property {string} url
 * @property {Array} users
 * @property {string} users_url
 */

/**
 * @typedef {Object} BranchRestrictionPolicyListMatch
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} BranchShort
 * @property {Object} commit
 * @property {string} name
 * @property {boolean} protected
 */

/**
 * @typedef {Object} BranchShortListMatch
 * @property {string} commit_sha
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} BranchWithProtection
 * @property {string} [id]
 * @property {string} new_name
 */

/**
 * @typedef {Object} BranchWithProtectionCreateData
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} new_name
 */

/**
 * @typedef {Object} Campaign
 * @property {Object} alert_stats
 * @property {string} [closed_at]
 * @property {Array} code_scanning_alerts
 * @property {string} contact_link
 * @property {string} created_at
 * @property {string} description
 * @property {string} ends_at
 * @property {boolean} [generate_issues]
 * @property {string} [id]
 * @property {Array} managers
 * @property {string} [name]
 * @property {number} number
 * @property {string} [published_at]
 * @property {string} state
 * @property {Array} [team_managers]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} CampaignLoadMatch
 * @property {number} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} CampaignListMatch
 * @property {string} org_id
 * @property {string} [direction]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [sort]
 * @property {string} [state]
 */

/**
 * @typedef {Object} CampaignCreateData
 * @property {string} org_id
 * @property {Object} alert_stats
 * @property {string} [closed_at]
 * @property {Array} code_scanning_alerts
 * @property {string} contact_link
 * @property {string} created_at
 * @property {string} description
 * @property {string} ends_at
 * @property {boolean} [generate_issues]
 * @property {string} [id]
 * @property {Array} managers
 * @property {string} [name]
 * @property {number} number
 * @property {string} [published_at]
 * @property {string} state
 * @property {Array} [team_managers]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} CampaignUpdateData
 * @property {number} id
 * @property {string} org_id
 * @property {Object} [alert_stats]
 * @property {string} [closed_at]
 * @property {Array} [code_scanning_alerts]
 * @property {string} [contact_link]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [ends_at]
 * @property {boolean} [generate_issues]
 * @property {Array} [managers]
 * @property {string} [name]
 * @property {number} [number]
 * @property {string} [published_at]
 * @property {string} [state]
 * @property {Array} [team_managers]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CampaignRemoveMatch
 * @property {number} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} Check
 * @property {string} after
 * @property {Object} app
 * @property {string} before
 * @property {string} check_runs_url
 * @property {Object} check_suite
 * @property {string} completed_at
 * @property {string} conclusion
 * @property {string} created_at
 * @property {Object} deployment
 * @property {string} details_url
 * @property {string} external_id
 * @property {string} head_branch
 * @property {Object} head_commit
 * @property {string} head_sha
 * @property {string} html_url
 * @property {number} id
 * @property {number} latest_check_runs_count
 * @property {string} name
 * @property {string} node_id
 * @property {Object} output
 * @property {Array} pull_requests
 * @property {Object} repository
 * @property {boolean} [rerequestable]
 * @property {boolean} [runs_rerequestable]
 * @property {string} started_at
 * @property {string} status
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} CheckListMatch
 * @property {string} owner
 * @property {string} [ref]
 * @property {string} repo
 * @property {number} [app_id]
 * @property {string} [check_name]
 * @property {string} [filter]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [status]
 * @property {number} [check_suite_id]
 */

/**
 * @typedef {Object} CheckAnnotation
 * @property {string} annotation_level
 * @property {string} blob_href
 * @property {number} end_column
 * @property {number} end_line
 * @property {string} message
 * @property {string} path
 * @property {string} raw_details
 * @property {number} start_column
 * @property {number} start_line
 * @property {string} title
 */

/**
 * @typedef {Object} CheckAnnotationListMatch
 * @property {number} check_run_id
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} CheckAutomatedSecurityFix
 * @property {boolean} enabled
 * @property {boolean} paused
 */

/**
 * @typedef {Object} CheckAutomatedSecurityFixLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CheckRun
 * @property {Array} [actions]
 * @property {Object} app
 * @property {Object} check_suite
 * @property {string} completed_at
 * @property {string} conclusion
 * @property {Object} deployment
 * @property {string} details_url
 * @property {string} external_id
 * @property {string} head_sha
 * @property {string} html_url
 * @property {number} id
 * @property {string} name
 * @property {string} node_id
 * @property {Object} output
 * @property {Array} pull_requests
 * @property {string} started_at
 * @property {string} status
 * @property {string} url
 */

/**
 * @typedef {Object} CheckRunLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CheckRunCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {Array} [actions]
 * @property {Object} app
 * @property {Object} check_suite
 * @property {string} completed_at
 * @property {string} conclusion
 * @property {Object} deployment
 * @property {string} details_url
 * @property {string} external_id
 * @property {string} head_sha
 * @property {string} html_url
 * @property {number} id
 * @property {string} name
 * @property {string} node_id
 * @property {Object} output
 * @property {Array} pull_requests
 * @property {string} started_at
 * @property {string} status
 * @property {string} url
 */

/**
 * @typedef {Object} CheckRunUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {Array} [actions]
 * @property {Object} [app]
 * @property {Object} [check_suite]
 * @property {string} [completed_at]
 * @property {string} [conclusion]
 * @property {Object} [deployment]
 * @property {string} [details_url]
 * @property {string} [external_id]
 * @property {string} [head_sha]
 * @property {string} [html_url]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {Object} [output]
 * @property {Array} [pull_requests]
 * @property {string} [started_at]
 * @property {string} [status]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CheckSuite
 * @property {string} after
 * @property {Object} app
 * @property {string} before
 * @property {string} check_runs_url
 * @property {string} conclusion
 * @property {string} created_at
 * @property {string} head_branch
 * @property {Object} head_commit
 * @property {string} head_sha
 * @property {number} id
 * @property {number} latest_check_runs_count
 * @property {string} node_id
 * @property {Array} pull_requests
 * @property {Object} repository
 * @property {boolean} [rerequestable]
 * @property {boolean} [runs_rerequestable]
 * @property {string} status
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} CheckSuiteLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CheckSuiteCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} after
 * @property {Object} app
 * @property {string} before
 * @property {string} check_runs_url
 * @property {string} conclusion
 * @property {string} created_at
 * @property {string} head_branch
 * @property {Object} head_commit
 * @property {string} head_sha
 * @property {number} id
 * @property {number} latest_check_runs_count
 * @property {string} node_id
 * @property {Array} pull_requests
 * @property {Object} repository
 * @property {boolean} [rerequestable]
 * @property {boolean} [runs_rerequestable]
 * @property {string} status
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} CheckSuitePreference
 * @property {Array} [auto_trigger_checks]
 * @property {Object} preferences
 * @property {Object} repository
 */

/**
 * @typedef {Object} CheckSuitePreferenceUpdateData
 * @property {string} owner
 * @property {string} repo
 * @property {Array} [auto_trigger_checks]
 * @property {Object} [preferences]
 * @property {Object} [repository]
 */

/**
 * @typedef {Object} Classroom
 * @property {boolean} archived
 * @property {string} avatar_url
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} name
 * @property {string} node_id
 * @property {string} url
 */

/**
 * @typedef {Object} ClassroomLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ClassroomListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} ClassroomAcceptedAssignment
 * @property {Object} assignment
 * @property {number} commit_count
 * @property {string} grade
 * @property {number} id
 * @property {boolean} passing
 * @property {Object} repository
 * @property {Array} students
 * @property {boolean} submitted
 */

/**
 * @typedef {Object} ClassroomAcceptedAssignmentListMatch
 * @property {number} assignment_id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} ClassroomAssignment
 * @property {number} accepted
 * @property {Object} classroom
 * @property {string} deadline
 * @property {string} editor
 * @property {boolean} feedback_pull_requests_enabled
 * @property {number} id
 * @property {boolean} invitations_enabled
 * @property {string} invite_link
 * @property {string} language
 * @property {number} max_members
 * @property {number} max_teams
 * @property {number} passing
 * @property {boolean} public_repo
 * @property {string} slug
 * @property {Object} starter_code_repository
 * @property {boolean} students_are_repo_admins
 * @property {number} submitted
 * @property {string} title
 * @property {string} type
 */

/**
 * @typedef {Object} ClassroomAssignmentLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ClassroomAssignmentGrade
 * @property {string} assignment_name
 * @property {string} assignment_url
 * @property {string} github_username
 * @property {string} [group_name]
 * @property {number} points_available
 * @property {number} points_awarded
 * @property {string} roster_identifier
 * @property {string} starter_code_url
 * @property {string} student_repository_name
 * @property {string} student_repository_url
 * @property {string} submission_timestamp
 */

/**
 * @typedef {Object} ClassroomAssignmentGradeListMatch
 * @property {number} assignment_id
 */

/**
 * @typedef {Object} Clone
 * @property {number} count
 * @property {string} timestamp
 * @property {number} uniques
 */

/**
 * @typedef {Object} CloneListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [per]
 */

/**
 * @typedef {Object} CodeFrequency
 */

/**
 * @typedef {Object} CodeFrequencyListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CodeFrequencyStat
 */

/**
 * @typedef {Object} CodeFrequencyStatListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CodeOfConduct
 * @property {string} [body]
 * @property {string} html_url
 * @property {string} key
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef {Object} CodeOfConductLoadMatch
 * @property {string} key
 */

/**
 * @typedef {Object} CodeOfConductListMatch
 * @property {string} [body]
 * @property {string} [html_url]
 * @property {string} [key]
 * @property {string} [name]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CodeScanning
 * @property {string} [checkout_uri]
 * @property {string} commit_sha
 * @property {string} ref
 * @property {string} sarif
 * @property {string} [started_at]
 * @property {string} [tool_name]
 * @property {boolean} [validate]
 */

/**
 * @typedef {Object} CodeScanningCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [checkout_uri]
 * @property {string} commit_sha
 * @property {string} ref
 * @property {string} sarif
 * @property {string} [started_at]
 * @property {string} [tool_name]
 * @property {boolean} [validate]
 */

/**
 * @typedef {Object} CodeScanningRemoveMatch
 * @property {string} language
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CodeScanningAlert
 * @property {boolean} [create_request]
 * @property {string} created_at
 * @property {Object} dismissal_approved_by
 * @property {string} dismissed_at
 * @property {Object} dismissed_by
 * @property {string} [dismissed_comment]
 * @property {string} dismissed_reason
 * @property {string} [fixed_at]
 * @property {string} html_url
 * @property {string} [id]
 * @property {string} instances_url
 * @property {Object} most_recent_instance
 * @property {number} number
 * @property {Object} rule
 * @property {string} state
 * @property {Object} tool
 * @property {string} [updated_at]
 * @property {string} url
 */

/**
 * @typedef {Object} CodeScanningAlertLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CodeScanningAlertUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {boolean} [create_request]
 * @property {string} [created_at]
 * @property {Object} [dismissal_approved_by]
 * @property {string} [dismissed_at]
 * @property {Object} [dismissed_by]
 * @property {string} [dismissed_comment]
 * @property {string} [dismissed_reason]
 * @property {string} [fixed_at]
 * @property {string} [html_url]
 * @property {string} [instances_url]
 * @property {Object} [most_recent_instance]
 * @property {number} [number]
 * @property {Object} [rule]
 * @property {string} [state]
 * @property {Object} [tool]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CodeScanningAlertInstance
 * @property {string} [analysis_key]
 * @property {string} [category]
 * @property {Array} [classifications]
 * @property {string} [commit_sha]
 * @property {string} [environment]
 * @property {string} [html_url]
 * @property {Object} [location]
 * @property {Object} [message]
 * @property {string} [ref]
 * @property {string} [state]
 */

/**
 * @typedef {Object} CodeScanningAlertInstanceListMatch
 * @property {number} alert_number
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {number} [pr]
 * @property {string} [ref]
 */

/**
 * @typedef {Object} CodeScanningAlertItem
 * @property {string} created_at
 * @property {Object} dismissal_approved_by
 * @property {string} dismissed_at
 * @property {Object} dismissed_by
 * @property {string} [dismissed_comment]
 * @property {string} dismissed_reason
 * @property {string} [fixed_at]
 * @property {string} html_url
 * @property {string} instances_url
 * @property {Object} most_recent_instance
 * @property {number} number
 * @property {Object} rule
 * @property {string} state
 * @property {Object} tool
 * @property {string} [updated_at]
 * @property {string} url
 */

/**
 * @typedef {Object} CodeScanningAlertItemListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [after]
 * @property {string} [before]
 * @property {string} [direction]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {number} [pr]
 * @property {string} [ref]
 * @property {string} [severity]
 * @property {string} [sort]
 * @property {string} [state]
 * @property {string} [tool_guid]
 * @property {string} [tool_name]
 */

/**
 * @typedef {Object} CodeScanningAnalysi
 * @property {string} analysis_key
 * @property {string} [category]
 * @property {string} commit_sha
 * @property {string} created_at
 * @property {boolean} deletable
 * @property {string} environment
 * @property {string} error
 * @property {string} [guid]
 * @property {number} id
 * @property {string} [name]
 * @property {string} ref
 * @property {number} results_count
 * @property {number} rules_count
 * @property {string} sarif_id
 * @property {Object} tool
 * @property {string} url
 * @property {string} [version]
 * @property {string} warning
 */

/**
 * @typedef {Object} CodeScanningAnalysiLoadMatch
 * @property {number} analysis_id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CodeScanningAnalysiListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [direction]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {number} [pr]
 * @property {string} [ref]
 * @property {string} [sarif_id]
 * @property {string} [sort]
 * @property {string} [tool_guid]
 * @property {string} [tool_name]
 */

/**
 * @typedef {Object} CodeScanningAnalysisDeletion
 */

/**
 * @typedef {Object} CodeScanningAnalysisDeletionRemoveMatch
 * @property {number} analysis_id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [confirm_delete]
 */

/**
 * @typedef {Object} CodeScanningAutofix
 * @property {string} description
 * @property {string} started_at
 * @property {string} status
 */

/**
 * @typedef {Object} CodeScanningAutofixLoadMatch
 * @property {number} alert_number
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CodeScanningAutofixCreateData
 * @property {number} alert_number
 * @property {string} owner
 * @property {string} repo
 * @property {string} description
 * @property {string} started_at
 * @property {string} status
 */

/**
 * @typedef {Object} CodeScanningAutofixCommit
 * @property {string} [message]
 * @property {string} [target_ref]
 */

/**
 * @typedef {Object} CodeScanningAutofixCommitCreateData
 * @property {number} alert_id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [message]
 * @property {string} [target_ref]
 */

/**
 * @typedef {Object} CodeScanningCodeqlDatabase
 * @property {string} avatar_url
 * @property {string} [commit_oid]
 * @property {string} content_type
 * @property {string} created_at
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} language
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {number} size
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} updated_at
 * @property {Object} uploader
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} CodeScanningCodeqlDatabaseLoadMatch
 * @property {string} language
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CodeScanningCodeqlDatabaseListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CodeScanningDefaultSetup
 * @property {Array} [languages]
 * @property {string} [query_suite]
 * @property {string} [runner_label]
 * @property {string} [runner_type]
 * @property {string} [schedule]
 * @property {string} [state]
 * @property {string} [threat_model]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CodeScanningDefaultSetupListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CodeScanningOrganizationAlertItem
 * @property {string} created_at
 * @property {Object} dismissal_approved_by
 * @property {string} dismissed_at
 * @property {Object} dismissed_by
 * @property {string} [dismissed_comment]
 * @property {string} dismissed_reason
 * @property {string} [fixed_at]
 * @property {string} html_url
 * @property {string} instances_url
 * @property {Object} most_recent_instance
 * @property {number} number
 * @property {Object} repository
 * @property {Object} rule
 * @property {string} state
 * @property {Object} tool
 * @property {string} [updated_at]
 * @property {string} url
 */

/**
 * @typedef {Object} CodeScanningOrganizationAlertItemListMatch
 * @property {string} org_id
 * @property {string} [after]
 * @property {string} [before]
 * @property {string} [direction]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [severity]
 * @property {string} [sort]
 * @property {string} [state]
 * @property {string} [tool_guid]
 * @property {string} [tool_name]
 */

/**
 * @typedef {Object} CodeScanningSarifsStatus
 * @property {string} [analyses_url]
 * @property {Array} [errors]
 * @property {string} [processing_status]
 */

/**
 * @typedef {Object} CodeScanningSarifsStatusLoadMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} sarif_id
 */

/**
 * @typedef {Object} CodeScanningVariantAnalysi
 * @property {number} [actions_workflow_run_id]
 * @property {Object} actor
 * @property {string} [completed_at]
 * @property {Object} controller_repo
 * @property {string} [created_at]
 * @property {string} [failure_reason]
 * @property {number} id
 * @property {string} language
 * @property {string} query_language
 * @property {string} query_pack
 * @property {string} query_pack_url
 * @property {Array} [repositories]
 * @property {Array} [repository_lists]
 * @property {Array} [repository_owners]
 * @property {Array} [scanned_repositories]
 * @property {Object} skipped_repositories
 * @property {string} status
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CodeScanningVariantAnalysiLoadMatch
 * @property {number} codeql_variant_analysis_id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CodeScanningVariantAnalysiCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {number} [actions_workflow_run_id]
 * @property {Object} actor
 * @property {string} [completed_at]
 * @property {Object} controller_repo
 * @property {string} [created_at]
 * @property {string} [failure_reason]
 * @property {number} id
 * @property {string} language
 * @property {string} query_language
 * @property {string} query_pack
 * @property {string} query_pack_url
 * @property {Array} [repositories]
 * @property {Array} [repository_lists]
 * @property {Array} [repository_owners]
 * @property {Array} [scanned_repositories]
 * @property {Object} skipped_repositories
 * @property {string} status
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CodeScanningVariantAnalysisRepoTask
 * @property {string} archive_url
 * @property {string} assignees_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} deployments_url
 * @property {string} description
 * @property {string} downloads_url
 * @property {string} events_url
 * @property {boolean} fork
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {number} github_id
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {string} id
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} languages_url
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} name
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {Object} owner
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} releases_url
 * @property {string} stargazers_url
 * @property {string} statuses_url
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} trees_url
 * @property {string} url
 */

/**
 * @typedef {Object} CodeScanningVariantAnalysisRepoTaskLoadMatch
 * @property {number} codeql_variant_analysis_id
 * @property {string} owner
 * @property {string} repo
 * @property {string} repo_name
 * @property {string} repo_owner
 */

/**
 * @typedef {Object} CodeSecurity
 * @property {string} [advanced_security]
 * @property {string} [code_scanning_default_setup]
 * @property {Object} [code_scanning_default_setup_options]
 * @property {string} [code_scanning_delegated_alert_dismissal]
 * @property {Object} [code_scanning_options]
 * @property {string} [created_at]
 * @property {string} [default_for_new_repos]
 * @property {string} [dependabot_alerts]
 * @property {string} [dependabot_security_updates]
 * @property {string} [dependency_graph]
 * @property {string} [dependency_graph_autosubmit_action]
 * @property {Object} [dependency_graph_autosubmit_action_options]
 * @property {string} [description]
 * @property {string} [enforcement]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [private_vulnerability_reporting]
 * @property {string} [secret_scanning]
 * @property {string} [secret_scanning_delegated_alert_dismissal]
 * @property {string} [secret_scanning_delegated_bypass]
 * @property {Object} [secret_scanning_delegated_bypass_options]
 * @property {string} [secret_scanning_generic_secrets]
 * @property {string} [secret_scanning_non_provider_patterns]
 * @property {string} [secret_scanning_push_protection]
 * @property {string} [secret_scanning_validity_checks]
 * @property {string} [target_type]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CodeSecurityUpdateData
 * @property {number} configuration_id
 * @property {string} [enterprise]
 * @property {string} [org_id]
 * @property {string} [advanced_security]
 * @property {string} [code_scanning_default_setup]
 * @property {Object} [code_scanning_default_setup_options]
 * @property {string} [code_scanning_delegated_alert_dismissal]
 * @property {Object} [code_scanning_options]
 * @property {string} [created_at]
 * @property {string} [default_for_new_repos]
 * @property {string} [dependabot_alerts]
 * @property {string} [dependabot_security_updates]
 * @property {string} [dependency_graph]
 * @property {string} [dependency_graph_autosubmit_action]
 * @property {Object} [dependency_graph_autosubmit_action_options]
 * @property {string} [description]
 * @property {string} [enforcement]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [private_vulnerability_reporting]
 * @property {string} [secret_scanning]
 * @property {string} [secret_scanning_delegated_alert_dismissal]
 * @property {string} [secret_scanning_delegated_bypass]
 * @property {Object} [secret_scanning_delegated_bypass_options]
 * @property {string} [secret_scanning_generic_secrets]
 * @property {string} [secret_scanning_non_provider_patterns]
 * @property {string} [secret_scanning_push_protection]
 * @property {string} [secret_scanning_validity_checks]
 * @property {string} [target_type]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CodeSecurityRemoveMatch
 * @property {number} configuration_id
 * @property {string} enterprise
 */

/**
 * @typedef {Object} CodeSecurityConfiguration
 * @property {string} [advanced_security]
 * @property {string} [code_scanning_default_setup]
 * @property {Object} [code_scanning_default_setup_options]
 * @property {string} [code_scanning_delegated_alert_dismissal]
 * @property {Object} [code_scanning_options]
 * @property {string} [code_security]
 * @property {string} [created_at]
 * @property {string} [dependabot_alerts]
 * @property {string} [dependabot_security_updates]
 * @property {string} [dependency_graph]
 * @property {string} [dependency_graph_autosubmit_action]
 * @property {Object} [dependency_graph_autosubmit_action_options]
 * @property {string} [description]
 * @property {string} [enforcement]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [private_vulnerability_reporting]
 * @property {string} scope
 * @property {string} [secret_protection]
 * @property {string} [secret_scanning]
 * @property {string} [secret_scanning_delegated_alert_dismissal]
 * @property {string} [secret_scanning_delegated_bypass]
 * @property {Object} [secret_scanning_delegated_bypass_options]
 * @property {string} [secret_scanning_generic_secrets]
 * @property {string} [secret_scanning_non_provider_patterns]
 * @property {string} [secret_scanning_push_protection]
 * @property {string} [secret_scanning_validity_checks]
 * @property {Array} [selected_repository_ids]
 * @property {string} [target_type]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CodeSecurityConfigurationLoadMatch
 * @property {string} enterprise
 * @property {number} id
 */

/**
 * @typedef {Object} CodeSecurityConfigurationListMatch
 * @property {string} org_id
 * @property {string} [after]
 * @property {string} [before]
 * @property {number} [per_page]
 * @property {string} [target_type]
 */

/**
 * @typedef {Object} CodeSecurityConfigurationCreateData
 * @property {string} enterprise
 * @property {string} [advanced_security]
 * @property {string} [code_scanning_default_setup]
 * @property {Object} [code_scanning_default_setup_options]
 * @property {string} [code_scanning_delegated_alert_dismissal]
 * @property {Object} [code_scanning_options]
 * @property {string} [code_security]
 * @property {string} [created_at]
 * @property {string} [dependabot_alerts]
 * @property {string} [dependabot_security_updates]
 * @property {string} [dependency_graph]
 * @property {string} [dependency_graph_autosubmit_action]
 * @property {Object} [dependency_graph_autosubmit_action_options]
 * @property {string} [description]
 * @property {string} [enforcement]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [private_vulnerability_reporting]
 * @property {string} scope
 * @property {string} [secret_protection]
 * @property {string} [secret_scanning]
 * @property {string} [secret_scanning_delegated_alert_dismissal]
 * @property {string} [secret_scanning_delegated_bypass]
 * @property {Object} [secret_scanning_delegated_bypass_options]
 * @property {string} [secret_scanning_generic_secrets]
 * @property {string} [secret_scanning_non_provider_patterns]
 * @property {string} [secret_scanning_push_protection]
 * @property {string} [secret_scanning_validity_checks]
 * @property {Array} [selected_repository_ids]
 * @property {string} [target_type]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CodeSecurityConfigurationUpdateData
 * @property {string} [enterprise]
 * @property {number} id
 * @property {string} [org_id]
 * @property {string} [advanced_security]
 * @property {string} [code_scanning_default_setup]
 * @property {Object} [code_scanning_default_setup_options]
 * @property {string} [code_scanning_delegated_alert_dismissal]
 * @property {Object} [code_scanning_options]
 * @property {string} [code_security]
 * @property {string} [created_at]
 * @property {string} [dependabot_alerts]
 * @property {string} [dependabot_security_updates]
 * @property {string} [dependency_graph]
 * @property {string} [dependency_graph_autosubmit_action]
 * @property {Object} [dependency_graph_autosubmit_action_options]
 * @property {string} [description]
 * @property {string} [enforcement]
 * @property {string} [html_url]
 * @property {string} [name]
 * @property {string} [private_vulnerability_reporting]
 * @property {string} [scope]
 * @property {string} [secret_protection]
 * @property {string} [secret_scanning]
 * @property {string} [secret_scanning_delegated_alert_dismissal]
 * @property {string} [secret_scanning_delegated_bypass]
 * @property {Object} [secret_scanning_delegated_bypass_options]
 * @property {string} [secret_scanning_generic_secrets]
 * @property {string} [secret_scanning_non_provider_patterns]
 * @property {string} [secret_scanning_push_protection]
 * @property {string} [secret_scanning_validity_checks]
 * @property {Array} [selected_repository_ids]
 * @property {string} [target_type]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CodeSecurityConfigurationRepository
 * @property {Object} repository
 * @property {string} [status]
 */

/**
 * @typedef {Object} CodeSecurityConfigurationRepositoryListMatch
 * @property {number} configuration_id
 * @property {string} [enterprise]
 * @property {string} [after]
 * @property {string} [before]
 * @property {number} [per_page]
 * @property {string} [status]
 * @property {string} [org_id]
 */

/**
 * @typedef {Object} CodeSecurityDefaultConfiguration
 * @property {Object} [configuration]
 * @property {*} [default_for_new_repos]
 */

/**
 * @typedef {Object} CodeSecurityDefaultConfigurationListMatch
 * @property {string} enterprise
 */

/**
 * @typedef {Object} CodeownersError
 * @property {number} column
 * @property {string} kind
 * @property {number} line
 * @property {string} message
 * @property {string} path
 * @property {string} [source]
 * @property {string} [suggestion]
 */

/**
 * @typedef {Object} CodeownersErrorListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [ref]
 */

/**
 * @typedef {Object} Codespace
 * @property {boolean} accepted
 * @property {boolean} [allow_forking]
 * @property {string} archive_url
 * @property {boolean} [archived]
 * @property {string} assignees_url
 * @property {Object} billable_owner
 * @property {string} blobs_url
 * @property {string} [branch]
 * @property {string} branches_url
 * @property {string} [client_ip]
 * @property {string} [clone_url]
 * @property {Object} code_of_conduct
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} [completed_at]
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {number} cpus
 * @property {string} created_at
 * @property {Object} [custom_properties]
 * @property {string} [default_branch]
 * @property {Object} defaults
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {string} [devcontainer_path]
 * @property {boolean} [disabled]
 * @property {string} [display_name]
 * @property {string} downloads_url
 * @property {string} [encrypted_value]
 * @property {string} environment_id
 * @property {string} events_url
 * @property {string} [export_url]
 * @property {boolean} fork
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} [geo]
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {Object} git_status
 * @property {string} git_tags_url
 * @property {string} [git_url]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} hooks_url
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {number} idle_timeout_minutes
 * @property {string} [idle_timeout_notice]
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} key
 * @property {string} key_id
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} [language]
 * @property {string} languages_url
 * @property {string} [last_known_stop_notice]
 * @property {string} last_used_at
 * @property {Object} [license]
 * @property {string} location
 * @property {Object} machine
 * @property {string} machines_url
 * @property {number} memory_in_bytes
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} [mirror_url]
 * @property {boolean} [multi_repo_permissions_opt_out]
 * @property {string} name
 * @property {number} [network_count]
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {string} operating_system
 * @property {Object} owner
 * @property {string} path
 * @property {boolean} [pending_operation]
 * @property {string} [pending_operation_disabled_reason]
 * @property {Object} [permissions]
 * @property {boolean} prebuild
 * @property {string} prebuild_availability
 * @property {boolean} [private]
 * @property {string} [publish_url]
 * @property {string} pulls_url
 * @property {string} [pushed_at]
 * @property {Array} recent_folders
 * @property {string} [ref]
 * @property {string} releases_url
 * @property {Object} repository
 * @property {string} [retention_expires_at]
 * @property {number} [retention_period_minutes]
 * @property {string} [role_name]
 * @property {Object} [runtime_constraints]
 * @property {Object} [security_and_analysis]
 * @property {string} [selected_repositories_url]
 * @property {Array} [selected_repository_ids]
 * @property {Array} selected_usernames
 * @property {string} [sha]
 * @property {number} [size]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} stargazers_url
 * @property {string} start_url
 * @property {string} [state]
 * @property {string} statuses_url
 * @property {string} stop_url
 * @property {number} storage_in_bytes
 * @property {number} [subscribers_count]
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} [svn_url]
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {string} [template]
 * @property {string} [title]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} updated_at
 * @property {string} [url]
 * @property {string} visibility
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 * @property {string} web_url
 * @property {string} [working_directory]
 */

/**
 * @typedef {Object} CodespaceLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CodespaceListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {number} [repository_id]
 */

/**
 * @typedef {Object} CodespaceCreateData
 * @property {boolean} accepted
 * @property {boolean} [allow_forking]
 * @property {string} archive_url
 * @property {boolean} [archived]
 * @property {string} assignees_url
 * @property {Object} billable_owner
 * @property {string} blobs_url
 * @property {string} [branch]
 * @property {string} branches_url
 * @property {string} [client_ip]
 * @property {string} [clone_url]
 * @property {Object} code_of_conduct
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} [completed_at]
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {number} cpus
 * @property {string} created_at
 * @property {Object} [custom_properties]
 * @property {string} [default_branch]
 * @property {Object} defaults
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {string} [devcontainer_path]
 * @property {boolean} [disabled]
 * @property {string} [display_name]
 * @property {string} downloads_url
 * @property {string} [encrypted_value]
 * @property {string} environment_id
 * @property {string} events_url
 * @property {string} [export_url]
 * @property {boolean} fork
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} [geo]
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {Object} git_status
 * @property {string} git_tags_url
 * @property {string} [git_url]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} hooks_url
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {number} idle_timeout_minutes
 * @property {string} [idle_timeout_notice]
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} key
 * @property {string} key_id
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} [language]
 * @property {string} languages_url
 * @property {string} [last_known_stop_notice]
 * @property {string} last_used_at
 * @property {Object} [license]
 * @property {string} location
 * @property {Object} machine
 * @property {string} machines_url
 * @property {number} memory_in_bytes
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} [mirror_url]
 * @property {boolean} [multi_repo_permissions_opt_out]
 * @property {string} name
 * @property {number} [network_count]
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {string} operating_system
 * @property {Object} owner
 * @property {string} path
 * @property {boolean} [pending_operation]
 * @property {string} [pending_operation_disabled_reason]
 * @property {Object} [permissions]
 * @property {boolean} prebuild
 * @property {string} prebuild_availability
 * @property {boolean} [private]
 * @property {string} [publish_url]
 * @property {string} pulls_url
 * @property {string} [pushed_at]
 * @property {Array} recent_folders
 * @property {string} [ref]
 * @property {string} releases_url
 * @property {Object} repository
 * @property {string} [retention_expires_at]
 * @property {number} [retention_period_minutes]
 * @property {string} [role_name]
 * @property {Object} [runtime_constraints]
 * @property {Object} [security_and_analysis]
 * @property {string} [selected_repositories_url]
 * @property {Array} [selected_repository_ids]
 * @property {Array} selected_usernames
 * @property {string} [sha]
 * @property {number} [size]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} stargazers_url
 * @property {string} start_url
 * @property {string} [state]
 * @property {string} statuses_url
 * @property {string} stop_url
 * @property {number} storage_in_bytes
 * @property {number} [subscribers_count]
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} [svn_url]
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {string} [template]
 * @property {string} [title]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} updated_at
 * @property {string} [url]
 * @property {string} visibility
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 * @property {string} web_url
 * @property {string} [working_directory]
 */

/**
 * @typedef {Object} CodespaceUpdateData
 * @property {string} secret_name
 * @property {boolean} [accepted]
 * @property {boolean} [allow_forking]
 * @property {string} [archive_url]
 * @property {boolean} [archived]
 * @property {string} [assignees_url]
 * @property {Object} [billable_owner]
 * @property {string} [blobs_url]
 * @property {string} [branch]
 * @property {string} [branches_url]
 * @property {string} [client_ip]
 * @property {string} [clone_url]
 * @property {Object} [code_of_conduct]
 * @property {string} [collaborators_url]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [compare_url]
 * @property {string} [completed_at]
 * @property {string} [contents_url]
 * @property {string} [contributors_url]
 * @property {number} [cpus]
 * @property {string} [created_at]
 * @property {Object} [custom_properties]
 * @property {string} [default_branch]
 * @property {Object} [defaults]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} [deployments_url]
 * @property {string} [description]
 * @property {string} [devcontainer_path]
 * @property {boolean} [disabled]
 * @property {string} [display_name]
 * @property {string} [downloads_url]
 * @property {string} [encrypted_value]
 * @property {string} [environment_id]
 * @property {string} [events_url]
 * @property {string} [export_url]
 * @property {boolean} [fork]
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} [forks_url]
 * @property {string} [full_name]
 * @property {string} [geo]
 * @property {string} [git_commits_url]
 * @property {string} [git_refs_url]
 * @property {Object} [git_status]
 * @property {string} [git_tags_url]
 * @property {string} [git_url]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} [hooks_url]
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {number} [idle_timeout_minutes]
 * @property {string} [idle_timeout_notice]
 * @property {boolean} [is_template]
 * @property {string} [issue_comment_url]
 * @property {string} [issue_events_url]
 * @property {string} [issues_url]
 * @property {string} [key]
 * @property {string} [key_id]
 * @property {string} [keys_url]
 * @property {string} [labels_url]
 * @property {string} [language]
 * @property {string} [languages_url]
 * @property {string} [last_known_stop_notice]
 * @property {string} [last_used_at]
 * @property {Object} [license]
 * @property {string} [location]
 * @property {Object} [machine]
 * @property {string} [machines_url]
 * @property {number} [memory_in_bytes]
 * @property {string} [merges_url]
 * @property {string} [milestones_url]
 * @property {string} [mirror_url]
 * @property {boolean} [multi_repo_permissions_opt_out]
 * @property {string} [name]
 * @property {number} [network_count]
 * @property {string} [node_id]
 * @property {string} [notifications_url]
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {string} [operating_system]
 * @property {Object} [owner]
 * @property {string} [path]
 * @property {boolean} [pending_operation]
 * @property {string} [pending_operation_disabled_reason]
 * @property {Object} [permissions]
 * @property {boolean} [prebuild]
 * @property {string} [prebuild_availability]
 * @property {boolean} [private]
 * @property {string} [publish_url]
 * @property {string} [pulls_url]
 * @property {string} [pushed_at]
 * @property {Array} [recent_folders]
 * @property {string} [ref]
 * @property {string} [releases_url]
 * @property {Object} [repository]
 * @property {string} [retention_expires_at]
 * @property {number} [retention_period_minutes]
 * @property {string} [role_name]
 * @property {Object} [runtime_constraints]
 * @property {Object} [security_and_analysis]
 * @property {string} [selected_repositories_url]
 * @property {Array} [selected_repository_ids]
 * @property {Array} [selected_usernames]
 * @property {string} [sha]
 * @property {number} [size]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} [stargazers_url]
 * @property {string} [start_url]
 * @property {string} [state]
 * @property {string} [statuses_url]
 * @property {string} [stop_url]
 * @property {number} [storage_in_bytes]
 * @property {number} [subscribers_count]
 * @property {string} [subscribers_url]
 * @property {string} [subscription_url]
 * @property {string} [svn_url]
 * @property {string} [tags_url]
 * @property {string} [teams_url]
 * @property {string} [temp_clone_token]
 * @property {string} [template]
 * @property {string} [title]
 * @property {Array} [topics]
 * @property {string} [trees_url]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 * @property {string} [web_url]
 * @property {string} [working_directory]
 */

/**
 * @typedef {Object} CodespaceRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Collaborator
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {Object} permissions
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {string} role_name
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} CollaboratorListMatch
 * @property {number} project_id
 * @property {string} [affiliation]
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} CombinedBillingUsage
 * @property {number} days_left_in_billing_cycle
 * @property {number} estimated_paid_storage_for_month
 * @property {number} estimated_storage_for_month
 */

/**
 * @typedef {Object} CombinedBillingUsageLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} CombinedCommitStatus
 * @property {string} avatar_url
 * @property {string} context
 * @property {string} created_at
 * @property {string} description
 * @property {number} id
 * @property {string} node_id
 * @property {boolean} [required]
 * @property {string} state
 * @property {string} target_url
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} CombinedCommitStatusListMatch
 * @property {string} owner
 * @property {string} ref
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Commit
 * @property {*} author
 * @property {string} base
 * @property {string} comments_url
 * @property {Object} commit
 * @property {string} [commit_message]
 * @property {*} committer
 * @property {Array} [files]
 * @property {string} head
 * @property {string} html_url
 * @property {string} [id]
 * @property {string} node_id
 * @property {Array} parents
 * @property {string} sha
 * @property {Object} [stats]
 * @property {string} url
 */

/**
 * @typedef {Object} CommitLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} CommitListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [author]
 * @property {string} [committer]
 * @property {number} [page]
 * @property {string} [path]
 * @property {number} [per_page]
 * @property {string} [sha]
 * @property {string} [since]
 * @property {string} [until]
 * @property {number} [pull_number]
 */

/**
 * @typedef {Object} CommitCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {*} author
 * @property {string} base
 * @property {string} comments_url
 * @property {Object} commit
 * @property {string} [commit_message]
 * @property {*} committer
 * @property {Array} [files]
 * @property {string} head
 * @property {string} html_url
 * @property {string} [id]
 * @property {string} node_id
 * @property {Array} parents
 * @property {string} sha
 * @property {Object} [stats]
 * @property {string} url
 */

/**
 * @typedef {Object} CommitActivity
 * @property {Array} days
 * @property {number} total
 * @property {number} week
 */

/**
 * @typedef {Object} CommitActivityListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CommitComment
 * @property {string} author_association
 * @property {string} body
 * @property {string} commit_id
 * @property {string} created_at
 * @property {string} html_url
 * @property {number} id
 * @property {number} line
 * @property {string} node_id
 * @property {string} path
 * @property {number} position
 * @property {Object} reactions
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} CommitCommentLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} CommitCommentListMatch
 * @property {string} [commit_sha]
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} CommitCommentCreateData
 * @property {string} commit_sha
 * @property {string} owner
 * @property {string} repo
 * @property {string} author_association
 * @property {string} body
 * @property {string} commit_id
 * @property {string} created_at
 * @property {string} html_url
 * @property {number} id
 * @property {number} line
 * @property {string} node_id
 * @property {string} path
 * @property {number} position
 * @property {Object} reactions
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} CommitCommentUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [author_association]
 * @property {string} [body]
 * @property {string} [commit_id]
 * @property {string} [created_at]
 * @property {string} [html_url]
 * @property {number} [line]
 * @property {string} [node_id]
 * @property {string} [path]
 * @property {number} [position]
 * @property {Object} [reactions]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {Object} [user]
 */

/**
 * @typedef {Object} CommitComparison
 * @property {number} ahead_by
 * @property {Object} base_commit
 * @property {number} behind_by
 * @property {Array} commits
 * @property {string} diff_url
 * @property {Array} [files]
 * @property {string} html_url
 * @property {Object} merge_base_commit
 * @property {string} patch_url
 * @property {string} permalink_url
 * @property {string} status
 * @property {number} total_commits
 * @property {string} url
 */

/**
 * @typedef {Object} CommitComparisonLoadMatch
 * @property {string} basehead
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} CommunityProfile
 * @property {Object} code_of_conduct
 * @property {Object} code_of_conduct_file
 * @property {Object} contributing
 * @property {Object} issue_template
 * @property {Object} license
 * @property {Object} pull_request_template
 * @property {Object} readme
 */

/**
 * @typedef {Object} CommunityProfileLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ContentFile
 * @property {string} git
 * @property {string} html
 * @property {string} self
 */

/**
 * @typedef {Object} ContentFileLoadMatch
 * @property {string} [dir]
 * @property {string} owner
 * @property {string} repo
 * @property {string} [ref]
 */

/**
 * @typedef {Object} ContentTraffic
 * @property {number} count
 * @property {string} path
 * @property {string} title
 * @property {number} uniques
 */

/**
 * @typedef {Object} ContentTrafficListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Contributor
 * @property {Object} author
 * @property {string} [avatar_url]
 * @property {number} contributions
 * @property {string} [email]
 * @property {string} [events_url]
 * @property {string} [followers_url]
 * @property {string} [following_url]
 * @property {string} [gists_url]
 * @property {string} [gravatar_id]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {string} [login]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [organizations_url]
 * @property {string} [received_events_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {string} [starred_url]
 * @property {string} [subscriptions_url]
 * @property {number} total
 * @property {string} type
 * @property {string} [url]
 * @property {string} [user_view_type]
 * @property {Array} weeks
 */

/**
 * @typedef {Object} ContributorListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [anon]
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Copilot
 * @property {Object} assignee
 * @property {*} [assigning_team]
 * @property {string} created_at
 * @property {string} [last_activity_at]
 * @property {string} [last_activity_editor]
 * @property {string} [last_authenticated_at]
 * @property {Object} organization
 * @property {string} [pending_cancellation_date]
 * @property {string} [plan_type]
 * @property {Array} selected_teams
 * @property {Array} selected_usernames
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CopilotLoadMatch
 * @property {string} org_id
 * @property {string} username
 */

/**
 * @typedef {Object} CopilotListMatch
 * @property {string} org_id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} CopilotCreateData
 * @property {string} org_id
 * @property {Object} assignee
 * @property {*} [assigning_team]
 * @property {string} created_at
 * @property {string} [last_activity_at]
 * @property {string} [last_activity_editor]
 * @property {string} [last_authenticated_at]
 * @property {Object} organization
 * @property {string} [pending_cancellation_date]
 * @property {string} [plan_type]
 * @property {Array} selected_teams
 * @property {Array} selected_usernames
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CopilotRemoveMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} CopilotOrganizationDetail
 * @property {number} [active_this_cycle]
 * @property {number} [added_this_cycle]
 * @property {number} [inactive_this_cycle]
 * @property {number} [pending_cancellation]
 * @property {number} [pending_invitation]
 * @property {number} [total]
 */

/**
 * @typedef {Object} CopilotOrganizationDetailLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} CopilotUsageMetricsDay
 * @property {Object} [copilot_dotcom_chat]
 * @property {Object} [copilot_dotcom_pull_requests]
 * @property {Object} [copilot_ide_chat]
 * @property {Object} [copilot_ide_code_completions]
 * @property {string} date
 * @property {number} [total_active_users]
 * @property {number} [total_engaged_users]
 */

/**
 * @typedef {Object} CopilotUsageMetricsDayListMatch
 * @property {string} org_id
 * @property {string} [team_id]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [since]
 * @property {string} [until]
 */

/**
 * @typedef {Object} Credential
 * @property {Array} credentials
 */

/**
 * @typedef {Object} CredentialCreateData
 * @property {Array} credentials
 */

/**
 * @typedef {Object} CustomProperty
 * @property {Array} [allowed_values]
 * @property {*} [default_value]
 * @property {string} [description]
 * @property {Array} properties
 * @property {string} property_name
 * @property {boolean} [required]
 * @property {string} [source_type]
 * @property {string} [url]
 * @property {string} value_type
 * @property {string} [values_editable_by]
 */

/**
 * @typedef {Object} CustomPropertyLoadMatch
 * @property {string} custom_property_name
 * @property {string} org_id
 */

/**
 * @typedef {Object} CustomPropertyListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} CustomPropertyUpdateData
 * @property {string} custom_property_name
 * @property {string} org_id
 * @property {Array} [allowed_values]
 * @property {*} [default_value]
 * @property {string} [description]
 * @property {Array} [properties]
 * @property {string} [property_name]
 * @property {boolean} [required]
 * @property {string} [source_type]
 * @property {string} [url]
 * @property {string} [value_type]
 * @property {string} [values_editable_by]
 */

/**
 * @typedef {Object} CustomPropertyValue
 * @property {string} property_name
 * @property {*} value
 */

/**
 * @typedef {Object} CustomPropertyValueListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Dependabot
 * @property {boolean} [allow_forking]
 * @property {string} archive_url
 * @property {boolean} [archived]
 * @property {string} assignees_url
 * @property {string} avatar_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} [clone_url]
 * @property {Object} code_of_conduct
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} [created_at]
 * @property {Object} [custom_properties]
 * @property {string} [default_branch]
 * @property {string} default_level
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} [disabled]
 * @property {string} downloads_url
 * @property {string} events_url
 * @property {boolean} fork
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} [git_url]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} [language]
 * @property {string} languages_url
 * @property {Object} [license]
 * @property {string} login
 * @property {string} members_url
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} [mirror_url]
 * @property {string} name
 * @property {number} [network_count]
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {Object} owner
 * @property {Object} [permissions]
 * @property {boolean} private
 * @property {string} public_members_url
 * @property {string} pulls_url
 * @property {string} [pushed_at]
 * @property {string} releases_url
 * @property {string} repos_url
 * @property {Array} [repository_ids_to_add]
 * @property {Array} [repository_ids_to_remove]
 * @property {string} [role_name]
 * @property {Object} [security_and_analysis]
 * @property {string} [selected_repositories_url]
 * @property {Array} selected_repository_ids
 * @property {number} [size]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} stargazers_url
 * @property {string} statuses_url
 * @property {number} [subscribers_count]
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} [svn_url]
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} [updated_at]
 * @property {string} url
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} DependabotListMatch
 * @property {number} [per_page]
 * @property {number} [since]
 */

/**
 * @typedef {Object} DependabotUpdateData
 * @property {string} org_id
 * @property {number} repository_id
 * @property {string} secret_id
 * @property {boolean} [allow_forking]
 * @property {string} [archive_url]
 * @property {boolean} [archived]
 * @property {string} [assignees_url]
 * @property {string} [avatar_url]
 * @property {string} [blobs_url]
 * @property {string} [branches_url]
 * @property {string} [clone_url]
 * @property {Object} [code_of_conduct]
 * @property {string} [collaborators_url]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [compare_url]
 * @property {string} [contents_url]
 * @property {string} [contributors_url]
 * @property {string} [created_at]
 * @property {Object} [custom_properties]
 * @property {string} [default_branch]
 * @property {string} [default_level]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} [deployments_url]
 * @property {string} [description]
 * @property {boolean} [disabled]
 * @property {string} [downloads_url]
 * @property {string} [events_url]
 * @property {boolean} [fork]
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} [forks_url]
 * @property {string} [full_name]
 * @property {string} [git_commits_url]
 * @property {string} [git_refs_url]
 * @property {string} [git_tags_url]
 * @property {string} [git_url]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} [hooks_url]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {boolean} [is_template]
 * @property {string} [issue_comment_url]
 * @property {string} [issue_events_url]
 * @property {string} [issues_url]
 * @property {string} [keys_url]
 * @property {string} [labels_url]
 * @property {string} [language]
 * @property {string} [languages_url]
 * @property {Object} [license]
 * @property {string} [login]
 * @property {string} [members_url]
 * @property {string} [merges_url]
 * @property {string} [milestones_url]
 * @property {string} [mirror_url]
 * @property {string} [name]
 * @property {number} [network_count]
 * @property {string} [node_id]
 * @property {string} [notifications_url]
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {Object} [owner]
 * @property {Object} [permissions]
 * @property {boolean} [private]
 * @property {string} [public_members_url]
 * @property {string} [pulls_url]
 * @property {string} [pushed_at]
 * @property {string} [releases_url]
 * @property {string} [repos_url]
 * @property {Array} [repository_ids_to_add]
 * @property {Array} [repository_ids_to_remove]
 * @property {string} [role_name]
 * @property {Object} [security_and_analysis]
 * @property {string} [selected_repositories_url]
 * @property {Array} [selected_repository_ids]
 * @property {number} [size]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} [stargazers_url]
 * @property {string} [statuses_url]
 * @property {number} [subscribers_count]
 * @property {string} [subscribers_url]
 * @property {string} [subscription_url]
 * @property {string} [svn_url]
 * @property {string} [tags_url]
 * @property {string} [teams_url]
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} [trees_url]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} DependabotRemoveMatch
 * @property {string} org_id
 * @property {string} secret_name
 */

/**
 * @typedef {Object} DependabotAlert
 * @property {string} [auto_dismissed_at]
 * @property {string} created_at
 * @property {Object} dependency
 * @property {string} dismissed_at
 * @property {Object} dismissed_by
 * @property {string} dismissed_comment
 * @property {string} dismissed_reason
 * @property {string} fixed_at
 * @property {string} html_url
 * @property {string} [id]
 * @property {number} number
 * @property {Object} security_advisory
 * @property {Object} security_vulnerability
 * @property {string} state
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} DependabotAlertLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} DependabotAlertListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [after]
 * @property {string} [before]
 * @property {string} [direction]
 * @property {string} [ecosystem]
 * @property {string} [epss_percentage]
 * @property {number} [first]
 * @property {*} [has]
 * @property {number} [last]
 * @property {string} [manifest]
 * @property {string} [package]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [scope]
 * @property {string} [severity]
 * @property {string} [sort]
 * @property {string} [state]
 */

/**
 * @typedef {Object} DependabotAlertUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [auto_dismissed_at]
 * @property {string} [created_at]
 * @property {Object} [dependency]
 * @property {string} [dismissed_at]
 * @property {Object} [dismissed_by]
 * @property {string} [dismissed_comment]
 * @property {string} [dismissed_reason]
 * @property {string} [fixed_at]
 * @property {string} [html_url]
 * @property {number} [number]
 * @property {Object} [security_advisory]
 * @property {Object} [security_vulnerability]
 * @property {string} [state]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} DependabotAlertWithRepository
 * @property {string} [auto_dismissed_at]
 * @property {string} created_at
 * @property {Object} dependency
 * @property {string} dismissed_at
 * @property {Object} dismissed_by
 * @property {string} dismissed_comment
 * @property {string} dismissed_reason
 * @property {string} fixed_at
 * @property {string} html_url
 * @property {number} number
 * @property {Object} repository
 * @property {Object} security_advisory
 * @property {Object} security_vulnerability
 * @property {string} state
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} DependabotAlertWithRepositoryListMatch
 * @property {string} org_id
 * @property {string} [after]
 * @property {string} [artifact_registry]
 * @property {string} [artifact_registry_url]
 * @property {string} [before]
 * @property {string} [direction]
 * @property {string} [ecosystem]
 * @property {string} [epss_percentage]
 * @property {number} [first]
 * @property {*} [has]
 * @property {number} [last]
 * @property {string} [package]
 * @property {number} [per_page]
 * @property {string} [scope]
 * @property {string} [severity]
 * @property {string} [sort]
 * @property {string} [state]
 */

/**
 * @typedef {Object} DependabotPublicKey
 * @property {string} key
 * @property {string} key_id
 */

/**
 * @typedef {Object} DependabotPublicKeyLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} DependabotRepositoryAccessDetail
 * @property {string} archive_url
 * @property {string} assignees_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} deployments_url
 * @property {string} description
 * @property {string} downloads_url
 * @property {string} events_url
 * @property {boolean} fork
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} languages_url
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} name
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {Object} owner
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} releases_url
 * @property {string} stargazers_url
 * @property {string} statuses_url
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} trees_url
 * @property {string} url
 */

/**
 * @typedef {Object} DependabotRepositoryAccessDetailListMatch
 * @property {string} org
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} DependabotSecret
 * @property {string} created_at
 * @property {string} [id]
 * @property {string} name
 * @property {string} updated_at
 */

/**
 * @typedef {Object} DependabotSecretLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} DependencyGraph
 * @property {Object} detector
 * @property {Object} job
 * @property {Object} [manifests]
 * @property {Object} [metadata]
 * @property {string} ref
 * @property {string} scanned
 * @property {string} sha
 * @property {number} version
 */

/**
 * @typedef {Object} DependencyGraphCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {Object} detector
 * @property {Object} job
 * @property {Object} [manifests]
 * @property {Object} [metadata]
 * @property {string} ref
 * @property {string} scanned
 * @property {string} sha
 * @property {number} version
 */

/**
 * @typedef {Object} DependencyGraphDiff
 * @property {string} change_type
 * @property {string} ecosystem
 * @property {string} license
 * @property {string} manifest
 * @property {string} name
 * @property {string} package_url
 * @property {string} scope
 * @property {string} source_repository_url
 * @property {string} version
 * @property {Array} vulnerabilities
 */

/**
 * @typedef {Object} DependencyGraphDiffLoadMatch
 * @property {string} basehead
 * @property {string} owner
 * @property {string} repo
 * @property {string} [name]
 */

/**
 * @typedef {Object} DependencyGraphSpdxSbom
 * @property {string} SPDXID
 * @property {string} [comment]
 * @property {Object} creationInfo
 * @property {string} dataLicense
 * @property {string} documentNamespace
 * @property {string} name
 * @property {Array} packages
 * @property {Array} relationships
 * @property {string} spdxVersion
 */

/**
 * @typedef {Object} DependencyGraphSpdxSbomLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} DeployKey
 * @property {string} [added_by]
 * @property {string} created_at
 * @property {boolean} [enabled]
 * @property {number} id
 * @property {string} key
 * @property {string} [last_used]
 * @property {boolean} read_only
 * @property {string} title
 * @property {string} url
 * @property {boolean} verified
 */

/**
 * @typedef {Object} DeployKeyLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} DeployKeyListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} DeployKeyCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [added_by]
 * @property {string} created_at
 * @property {boolean} [enabled]
 * @property {number} id
 * @property {string} key
 * @property {string} [last_used]
 * @property {boolean} read_only
 * @property {string} title
 * @property {string} url
 * @property {boolean} verified
 */

/**
 * @typedef {Object} Deployment
 * @property {boolean} [auto_merge]
 * @property {string} comment
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} description
 * @property {string} environment
 * @property {Array} environment_ids
 * @property {number} id
 * @property {string} node_id
 * @property {string} [original_environment]
 * @property {*} payload
 * @property {Object} performed_via_github_app
 * @property {boolean} [production_environment]
 * @property {string} ref
 * @property {string} repository_url
 * @property {Array} [required_contexts]
 * @property {string} sha
 * @property {string} state
 * @property {string} statuses_url
 * @property {string} task
 * @property {boolean} [transient_environment]
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} DeploymentLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} DeploymentListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [environment]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [ref]
 * @property {string} [sha]
 * @property {string} [task]
 */

/**
 * @typedef {Object} DeploymentCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {number} [run_id]
 * @property {boolean} [auto_merge]
 * @property {string} comment
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} description
 * @property {string} environment
 * @property {Array} environment_ids
 * @property {number} id
 * @property {string} node_id
 * @property {string} [original_environment]
 * @property {*} payload
 * @property {Object} performed_via_github_app
 * @property {boolean} [production_environment]
 * @property {string} ref
 * @property {string} repository_url
 * @property {Array} [required_contexts]
 * @property {string} sha
 * @property {string} state
 * @property {string} statuses_url
 * @property {string} task
 * @property {boolean} [transient_environment]
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} DeploymentBranchPolicy
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} DeploymentBranchPolicyLoadMatch
 * @property {string} environment_id
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} DeploymentBranchPolicyCreateData
 * @property {string} environment_name
 * @property {string} owner
 * @property {string} repo
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} DeploymentBranchPolicyUpdateData
 * @property {string} environment_id
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} DeploymentProtectionRule
 * @property {number} id
 * @property {number} [integration_id]
 * @property {string} integration_url
 * @property {string} node_id
 * @property {string} slug
 */

/**
 * @typedef {Object} DeploymentProtectionRuleLoadMatch
 * @property {string} environment_id
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} DeploymentProtectionRuleCreateData
 * @property {string} environment_name
 * @property {string} owner
 * @property {string} repo
 * @property {number} id
 * @property {number} [integration_id]
 * @property {string} integration_url
 * @property {string} node_id
 * @property {string} slug
 */

/**
 * @typedef {Object} DeploymentStatus
 * @property {boolean} [auto_inactive]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} deployment_url
 * @property {string} description
 * @property {string} [environment]
 * @property {string} [environment_url]
 * @property {number} id
 * @property {string} [log_url]
 * @property {string} node_id
 * @property {Object} performed_via_github_app
 * @property {string} repository_url
 * @property {string} state
 * @property {string} target_url
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} DeploymentStatusLoadMatch
 * @property {number} deployment_id
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} DeploymentStatusListMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} DeploymentStatusCreateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {boolean} [auto_inactive]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} deployment_url
 * @property {string} description
 * @property {string} [environment]
 * @property {string} [environment_url]
 * @property {string} [log_url]
 * @property {string} node_id
 * @property {Object} performed_via_github_app
 * @property {string} repository_url
 * @property {string} state
 * @property {string} target_url
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} DiffEntry
 * @property {number} additions
 * @property {string} blob_url
 * @property {number} changes
 * @property {string} contents_url
 * @property {number} deletions
 * @property {string} filename
 * @property {string} [patch]
 * @property {string} [previous_filename]
 * @property {string} raw_url
 * @property {string} sha
 * @property {string} status
 */

/**
 * @typedef {Object} DiffEntryListMatch
 * @property {string} owner
 * @property {number} pull_number
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Email
 * @property {string} [email]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} EmailListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} EmailCreateData
 * @property {string} [email]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} EmailUpdateData
 * @property {string} [email]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} Emoji
 * @property {string} ["1"]
 * @property {string} ["100"]
 * @property {string} ["1234"]
 * @property {string} ["1st_place_medal"]
 * @property {string} ["2nd_place_medal"]
 * @property {string} ["3rd_place_medal"]
 * @property {string} ["8ball"]
 * @property {string} [a]
 * @property {string} [ab]
 * @property {string} [abacus]
 * @property {string} [abc]
 * @property {string} [abcd]
 * @property {string} [accept]
 * @property {string} [accessibility]
 * @property {string} [accordion]
 * @property {string} [adhesive_bandage]
 * @property {string} [adult]
 * @property {string} [aerial_tramway]
 * @property {string} [afghanistan]
 * @property {string} [airplane]
 * @property {string} [aland_islands]
 * @property {string} [alarm_clock]
 * @property {string} [albania]
 * @property {string} [alembic]
 * @property {string} [algeria]
 * @property {string} [alien]
 * @property {string} [ambulance]
 * @property {string} [american_samoa]
 * @property {string} [amphora]
 * @property {string} [anatomical_heart]
 * @property {string} [anchor]
 * @property {string} [andorra]
 * @property {string} [angel]
 * @property {string} [anger]
 * @property {string} [angola]
 * @property {string} [angry]
 * @property {string} [anguilla]
 * @property {string} [anguished]
 * @property {string} [ant]
 * @property {string} [antarctica]
 * @property {string} [antigua_barbuda]
 * @property {string} [apple]
 * @property {string} [aquarius]
 * @property {string} [argentina]
 * @property {string} [aries]
 * @property {string} [armenia]
 * @property {string} [arrow_backward]
 * @property {string} [arrow_double_down]
 * @property {string} [arrow_double_up]
 * @property {string} [arrow_down]
 * @property {string} [arrow_down_small]
 * @property {string} [arrow_forward]
 * @property {string} [arrow_heading_down]
 * @property {string} [arrow_heading_up]
 * @property {string} [arrow_left]
 * @property {string} [arrow_lower_left]
 * @property {string} [arrow_lower_right]
 * @property {string} [arrow_right]
 * @property {string} [arrow_right_hook]
 * @property {string} [arrow_up]
 * @property {string} [arrow_up_down]
 * @property {string} [arrow_up_small]
 * @property {string} [arrow_upper_left]
 * @property {string} [arrow_upper_right]
 * @property {string} [arrows_clockwise]
 * @property {string} [arrows_counterclockwise]
 * @property {string} [art]
 * @property {string} [articulated_lorry]
 * @property {string} [artificial_satellite]
 * @property {string} [artist]
 * @property {string} [aruba]
 * @property {string} [ascension_island]
 * @property {string} [asterisk]
 * @property {string} [astonished]
 * @property {string} [astronaut]
 * @property {string} [athletic_shoe]
 * @property {string} [atm]
 * @property {string} [atom]
 * @property {string} [atom_symbol]
 * @property {string} [australia]
 * @property {string} [austria]
 * @property {string} [auto_rickshaw]
 * @property {string} [avocado]
 * @property {string} [axe]
 * @property {string} [azerbaijan]
 * @property {string} [b]
 * @property {string} [baby]
 * @property {string} [baby_bottle]
 * @property {string} [baby_chick]
 * @property {string} [baby_symbol]
 * @property {string} [back]
 * @property {string} [bacon]
 * @property {string} [badger]
 * @property {string} [badminton]
 * @property {string} [bagel]
 * @property {string} [baggage_claim]
 * @property {string} [baguette_bread]
 * @property {string} [bahamas]
 * @property {string} [bahrain]
 * @property {string} [balance_scale]
 * @property {string} [bald_man]
 * @property {string} [bald_woman]
 * @property {string} [ballet_shoes]
 * @property {string} [balloon]
 * @property {string} [ballot_box]
 * @property {string} [ballot_box_with_check]
 * @property {string} [bamboo]
 * @property {string} [banana]
 * @property {string} [bangbang]
 * @property {string} [bangladesh]
 * @property {string} [banjo]
 * @property {string} [bank]
 * @property {string} [bar_chart]
 * @property {string} [barbados]
 * @property {string} [barber]
 * @property {string} [baseball]
 * @property {string} [basecamp]
 * @property {string} [basecampy]
 * @property {string} [basket]
 * @property {string} [basketball]
 * @property {string} [basketball_man]
 * @property {string} [basketball_woman]
 * @property {string} [bat]
 * @property {string} [bath]
 * @property {string} [bathtub]
 * @property {string} [battery]
 * @property {string} [beach_umbrella]
 * @property {string} [bear]
 * @property {string} [bearded_person]
 * @property {string} [beaver]
 * @property {string} [bed]
 * @property {string} [bee]
 * @property {string} [beer]
 * @property {string} [beers]
 * @property {string} [beetle]
 * @property {string} [beginner]
 * @property {string} [belarus]
 * @property {string} [belgium]
 * @property {string} [belize]
 * @property {string} [bell]
 * @property {string} [bell_pepper]
 * @property {string} [bellhop_bell]
 * @property {string} [benin]
 * @property {string} [bento]
 * @property {string} [bermuda]
 * @property {string} [beverage_box]
 * @property {string} [bhutan]
 * @property {string} [bicyclist]
 * @property {string} [bike]
 * @property {string} [biking_man]
 * @property {string} [biking_woman]
 * @property {string} [bikini]
 * @property {string} [billed_cap]
 * @property {string} [biohazard]
 * @property {string} [bird]
 * @property {string} [birthday]
 * @property {string} [bison]
 * @property {string} [black_cat]
 * @property {string} [black_circle]
 * @property {string} [black_flag]
 * @property {string} [black_heart]
 * @property {string} [black_joker]
 * @property {string} [black_large_square]
 * @property {string} [black_medium_small_square]
 * @property {string} [black_medium_square]
 * @property {string} [black_nib]
 * @property {string} [black_small_square]
 * @property {string} [black_square_button]
 * @property {string} [blond_haired_man]
 * @property {string} [blond_haired_person]
 * @property {string} [blond_haired_woman]
 * @property {string} [blonde_woman]
 * @property {string} [blossom]
 * @property {string} [blowfish]
 * @property {string} [blue_book]
 * @property {string} [blue_car]
 * @property {string} [blue_heart]
 * @property {string} [blue_square]
 * @property {string} [blueberries]
 * @property {string} [blush]
 * @property {string} [boar]
 * @property {string} [boat]
 * @property {string} [bolivia]
 * @property {string} [bomb]
 * @property {string} [bone]
 * @property {string} [book]
 * @property {string} [bookmark]
 * @property {string} [bookmark_tabs]
 * @property {string} [books]
 * @property {string} [boom]
 * @property {string} [boomerang]
 * @property {string} [boot]
 * @property {string} [bosnia_herzegovina]
 * @property {string} [botswana]
 * @property {string} [bouncing_ball_man]
 * @property {string} [bouncing_ball_person]
 * @property {string} [bouncing_ball_woman]
 * @property {string} [bouquet]
 * @property {string} [bouvet_island]
 * @property {string} [bow]
 * @property {string} [bow_and_arrow]
 * @property {string} [bowing_man]
 * @property {string} [bowing_woman]
 * @property {string} [bowl_with_spoon]
 * @property {string} [bowling]
 * @property {string} [bowtie]
 * @property {string} [boxing_glove]
 * @property {string} [boy]
 * @property {string} [brain]
 * @property {string} [brazil]
 * @property {string} [bread]
 * @property {string} [breast_feeding]
 * @property {string} [bricks]
 * @property {string} [bride_with_veil]
 * @property {string} [bridge_at_night]
 * @property {string} [briefcase]
 * @property {string} [british_indian_ocean_territory]
 * @property {string} [british_virgin_islands]
 * @property {string} [broccoli]
 * @property {string} [broken_heart]
 * @property {string} [broom]
 * @property {string} [brown_circle]
 * @property {string} [brown_heart]
 * @property {string} [brown_square]
 * @property {string} [brunei]
 * @property {string} [bubble_tea]
 * @property {string} [bucket]
 * @property {string} [bug]
 * @property {string} [building_construction]
 * @property {string} [bulb]
 * @property {string} [bulgaria]
 * @property {string} [bullettrain_front]
 * @property {string} [bullettrain_side]
 * @property {string} [burkina_faso]
 * @property {string} [burrito]
 * @property {string} [burundi]
 * @property {string} [bus]
 * @property {string} [business_suit_levitating]
 * @property {string} [busstop]
 * @property {string} [bust_in_silhouette]
 * @property {string} [busts_in_silhouette]
 * @property {string} [butter]
 * @property {string} [butterfly]
 * @property {string} [cactus]
 * @property {string} [cake]
 * @property {string} [calendar]
 * @property {string} [call_me_hand]
 * @property {string} [calling]
 * @property {string} [cambodia]
 * @property {string} [camel]
 * @property {string} [camera]
 * @property {string} [camera_flash]
 * @property {string} [cameroon]
 * @property {string} [camping]
 * @property {string} [canada]
 * @property {string} [canary_islands]
 * @property {string} [cancer]
 * @property {string} [candle]
 * @property {string} [candy]
 * @property {string} [canned_food]
 * @property {string} [canoe]
 * @property {string} [cape_verde]
 * @property {string} [capital_abcd]
 * @property {string} [capricorn]
 * @property {string} [car]
 * @property {string} [card_file_box]
 * @property {string} [card_index]
 * @property {string} [card_index_dividers]
 * @property {string} [caribbean_netherlands]
 * @property {string} [carousel_horse]
 * @property {string} [carpentry_saw]
 * @property {string} [carrot]
 * @property {string} [cartwheeling]
 * @property {string} [cat]
 * @property {string} [cat2]
 * @property {string} [cayman_islands]
 * @property {string} [cd]
 * @property {string} [central_african_republic]
 * @property {string} [ceuta_melilla]
 * @property {string} [chad]
 * @property {string} [chains]
 * @property {string} [chair]
 * @property {string} [champagne]
 * @property {string} [chart]
 * @property {string} [chart_with_downwards_trend]
 * @property {string} [chart_with_upwards_trend]
 * @property {string} [checkered_flag]
 * @property {string} [cheese]
 * @property {string} [cherries]
 * @property {string} [cherry_blossom]
 * @property {string} [chess_pawn]
 * @property {string} [chestnut]
 * @property {string} [chicken]
 * @property {string} [child]
 * @property {string} [children_crossing]
 * @property {string} [chile]
 * @property {string} [chipmunk]
 * @property {string} [chocolate_bar]
 * @property {string} [chopsticks]
 * @property {string} [christmas_island]
 * @property {string} [christmas_tree]
 * @property {string} [church]
 * @property {string} [cinema]
 * @property {string} [circus_tent]
 * @property {string} [city_sunrise]
 * @property {string} [city_sunset]
 * @property {string} [cityscape]
 * @property {string} [cl]
 * @property {string} [clamp]
 * @property {string} [clap]
 * @property {string} [clapper]
 * @property {string} [classical_building]
 * @property {string} [climbing]
 * @property {string} [climbing_man]
 * @property {string} [climbing_woman]
 * @property {string} [clinking_glasses]
 * @property {string} [clipboard]
 * @property {string} [clipperton_island]
 * @property {string} [clock1]
 * @property {string} [clock10]
 * @property {string} [clock1030]
 * @property {string} [clock11]
 * @property {string} [clock1130]
 * @property {string} [clock12]
 * @property {string} [clock1230]
 * @property {string} [clock130]
 * @property {string} [clock2]
 * @property {string} [clock230]
 * @property {string} [clock3]
 * @property {string} [clock330]
 * @property {string} [clock4]
 * @property {string} [clock430]
 * @property {string} [clock5]
 * @property {string} [clock530]
 * @property {string} [clock6]
 * @property {string} [clock630]
 * @property {string} [clock7]
 * @property {string} [clock730]
 * @property {string} [clock8]
 * @property {string} [clock830]
 * @property {string} [clock9]
 * @property {string} [clock930]
 * @property {string} [closed_book]
 * @property {string} [closed_lock_with_key]
 * @property {string} [closed_umbrella]
 * @property {string} [cloud]
 * @property {string} [cloud_with_lightning]
 * @property {string} [cloud_with_lightning_and_rain]
 * @property {string} [cloud_with_rain]
 * @property {string} [cloud_with_snow]
 * @property {string} [clown_face]
 * @property {string} [clubs]
 * @property {string} [cn]
 * @property {string} [coat]
 * @property {string} [cockroach]
 * @property {string} [cocktail]
 * @property {string} [coconut]
 * @property {string} [cocos_islands]
 * @property {string} [coffee]
 * @property {string} [coffin]
 * @property {string} [coin]
 * @property {string} [cold_face]
 * @property {string} [cold_sweat]
 * @property {string} [collision]
 * @property {string} [colombia]
 * @property {string} [comet]
 * @property {string} [comoros]
 * @property {string} [compass]
 * @property {string} [computer]
 * @property {string} [computer_mouse]
 * @property {string} [confetti_ball]
 * @property {string} [confounded]
 * @property {string} [confused]
 * @property {string} [congo_brazzaville]
 * @property {string} [congo_kinshasa]
 * @property {string} [congratulations]
 * @property {string} [construction]
 * @property {string} [construction_worker]
 * @property {string} [construction_worker_man]
 * @property {string} [construction_worker_woman]
 * @property {string} [control_knobs]
 * @property {string} [convenience_store]
 * @property {string} [cook]
 * @property {string} [cook_islands]
 * @property {string} [cookie]
 * @property {string} [cool]
 * @property {string} [cop]
 * @property {string} [copilot]
 * @property {string} [copyright]
 * @property {string} [corn]
 * @property {string} [costa_rica]
 * @property {string} [cote_divoire]
 * @property {string} [couch_and_lamp]
 * @property {string} [couple]
 * @property {string} [couple_with_heart]
 * @property {string} [couple_with_heart_man_man]
 * @property {string} [couple_with_heart_woman_man]
 * @property {string} [couple_with_heart_woman_woman]
 * @property {string} [couplekiss]
 * @property {string} [couplekiss_man_man]
 * @property {string} [couplekiss_man_woman]
 * @property {string} [couplekiss_woman_woman]
 * @property {string} [cow]
 * @property {string} [cow2]
 * @property {string} [cowboy_hat_face]
 * @property {string} [crab]
 * @property {string} [crayon]
 * @property {string} [credit_card]
 * @property {string} [crescent_moon]
 * @property {string} [cricket]
 * @property {string} [cricket_game]
 * @property {string} [croatia]
 * @property {string} [crocodile]
 * @property {string} [croissant]
 * @property {string} [crossed_fingers]
 * @property {string} [crossed_flags]
 * @property {string} [crossed_swords]
 * @property {string} [crown]
 * @property {string} [cry]
 * @property {string} [crying_cat_face]
 * @property {string} [crystal_ball]
 * @property {string} [cuba]
 * @property {string} [cucumber]
 * @property {string} [cup_with_straw]
 * @property {string} [cupcake]
 * @property {string} [cupid]
 * @property {string} [curacao]
 * @property {string} [curling_stone]
 * @property {string} [curly_haired_man]
 * @property {string} [curly_haired_woman]
 * @property {string} [curly_loop]
 * @property {string} [currency_exchange]
 * @property {string} [curry]
 * @property {string} [cursing_face]
 * @property {string} [custard]
 * @property {string} [customs]
 * @property {string} [cut_of_meat]
 * @property {string} [cyclone]
 * @property {string} [cyprus]
 * @property {string} [czech_republic]
 * @property {string} [dagger]
 * @property {string} [dancer]
 * @property {string} [dancers]
 * @property {string} [dancing_men]
 * @property {string} [dancing_women]
 * @property {string} [dango]
 * @property {string} [dark_sunglasses]
 * @property {string} [dart]
 * @property {string} [dash]
 * @property {string} [date]
 * @property {string} [de]
 * @property {string} [deaf_man]
 * @property {string} [deaf_person]
 * @property {string} [deaf_woman]
 * @property {string} [deciduous_tree]
 * @property {string} [deer]
 * @property {string} [denmark]
 * @property {string} [department_store]
 * @property {string} [dependabot]
 * @property {string} [derelict_house]
 * @property {string} [desert]
 * @property {string} [desert_island]
 * @property {string} [desktop_computer]
 * @property {string} [detective]
 * @property {string} [diamond_shape_with_a_dot_inside]
 * @property {string} [diamonds]
 * @property {string} [diego_garcia]
 * @property {string} [disappointed]
 * @property {string} [disappointed_relieved]
 * @property {string} [disguised_face]
 * @property {string} [diving_mask]
 * @property {string} [diya_lamp]
 * @property {string} [dizzy]
 * @property {string} [dizzy_face]
 * @property {string} [djibouti]
 * @property {string} [dna]
 * @property {string} [do_not_litter]
 * @property {string} [dodo]
 * @property {string} [dog]
 * @property {string} [dog2]
 * @property {string} [dollar]
 * @property {string} [dolls]
 * @property {string} [dolphin]
 * @property {string} [dominica]
 * @property {string} [dominican_republic]
 * @property {string} [door]
 * @property {string} [doughnut]
 * @property {string} [dove]
 * @property {string} [dragon]
 * @property {string} [dragon_face]
 * @property {string} [dress]
 * @property {string} [dromedary_camel]
 * @property {string} [drooling_face]
 * @property {string} [drop_of_blood]
 * @property {string} [droplet]
 * @property {string} [drum]
 * @property {string} [duck]
 * @property {string} [dumpling]
 * @property {string} [dvd]
 * @property {string} [eagle]
 * @property {string} [ear]
 * @property {string} [ear_of_rice]
 * @property {string} [ear_with_hearing_aid]
 * @property {string} [earth_africa]
 * @property {string} [earth_americas]
 * @property {string} [earth_asia]
 * @property {string} [ecuador]
 * @property {string} [egg]
 * @property {string} [eggplant]
 * @property {string} [egypt]
 * @property {string} [eight]
 * @property {string} [eight_pointed_black_star]
 * @property {string} [eight_spoked_asterisk]
 * @property {string} [eject_button]
 * @property {string} [el_salvador]
 * @property {string} [electric_plug]
 * @property {string} [electron]
 * @property {string} [elephant]
 * @property {string} [elevator]
 * @property {string} [elf]
 * @property {string} [elf_man]
 * @property {string} [elf_woman]
 * @property {string} [email]
 * @property {string} [end]
 * @property {string} [england]
 * @property {string} [envelope]
 * @property {string} [envelope_with_arrow]
 * @property {string} [equatorial_guinea]
 * @property {string} [eritrea]
 * @property {string} [es]
 * @property {string} [estonia]
 * @property {string} [ethiopia]
 * @property {string} [eu]
 * @property {string} [euro]
 * @property {string} [european_castle]
 * @property {string} [european_post_office]
 * @property {string} [european_union]
 * @property {string} [evergreen_tree]
 * @property {string} [exclamation]
 * @property {string} [exploding_head]
 * @property {string} [expressionless]
 * @property {string} [eye]
 * @property {string} [eye_speech_bubble]
 * @property {string} [eyeglasses]
 * @property {string} [eyes]
 * @property {string} [face_exhaling]
 * @property {string} [face_in_clouds]
 * @property {string} [face_with_head_bandage]
 * @property {string} [face_with_spiral_eyes]
 * @property {string} [face_with_thermometer]
 * @property {string} [facepalm]
 * @property {string} [facepunch]
 * @property {string} [factory]
 * @property {string} [factory_worker]
 * @property {string} [fairy]
 * @property {string} [fairy_man]
 * @property {string} [fairy_woman]
 * @property {string} [falafel]
 * @property {string} [falkland_islands]
 * @property {string} [fallen_leaf]
 * @property {string} [family]
 * @property {string} [family_man_boy]
 * @property {string} [family_man_boy_boy]
 * @property {string} [family_man_girl]
 * @property {string} [family_man_girl_boy]
 * @property {string} [family_man_girl_girl]
 * @property {string} [family_man_man_boy]
 * @property {string} [family_man_man_boy_boy]
 * @property {string} [family_man_man_girl]
 * @property {string} [family_man_man_girl_boy]
 * @property {string} [family_man_man_girl_girl]
 * @property {string} [family_man_woman_boy]
 * @property {string} [family_man_woman_boy_boy]
 * @property {string} [family_man_woman_girl]
 * @property {string} [family_man_woman_girl_boy]
 * @property {string} [family_man_woman_girl_girl]
 * @property {string} [family_woman_boy]
 * @property {string} [family_woman_boy_boy]
 * @property {string} [family_woman_girl]
 * @property {string} [family_woman_girl_boy]
 * @property {string} [family_woman_girl_girl]
 * @property {string} [family_woman_woman_boy]
 * @property {string} [family_woman_woman_boy_boy]
 * @property {string} [family_woman_woman_girl]
 * @property {string} [family_woman_woman_girl_boy]
 * @property {string} [family_woman_woman_girl_girl]
 * @property {string} [farmer]
 * @property {string} [faroe_islands]
 * @property {string} [fast_forward]
 * @property {string} [fax]
 * @property {string} [fearful]
 * @property {string} [feather]
 * @property {string} [feelsgood]
 * @property {string} [feet]
 * @property {string} [female_detective]
 * @property {string} [female_sign]
 * @property {string} [ferris_wheel]
 * @property {string} [ferry]
 * @property {string} [field_hockey]
 * @property {string} [fiji]
 * @property {string} [file_cabinet]
 * @property {string} [file_folder]
 * @property {string} [film_projector]
 * @property {string} [film_strip]
 * @property {string} [finland]
 * @property {string} [finnadie]
 * @property {string} [fire]
 * @property {string} [fire_engine]
 * @property {string} [fire_extinguisher]
 * @property {string} [firecracker]
 * @property {string} [firefighter]
 * @property {string} [fireworks]
 * @property {string} [first_quarter_moon]
 * @property {string} [first_quarter_moon_with_face]
 * @property {string} [fish]
 * @property {string} [fish_cake]
 * @property {string} [fishing_pole_and_fish]
 * @property {string} [fishsticks]
 * @property {string} [fist]
 * @property {string} [fist_left]
 * @property {string} [fist_oncoming]
 * @property {string} [fist_raised]
 * @property {string} [fist_right]
 * @property {string} [five]
 * @property {string} [flags]
 * @property {string} [flamingo]
 * @property {string} [flashlight]
 * @property {string} [flat_shoe]
 * @property {string} [flatbread]
 * @property {string} [fleur_de_lis]
 * @property {string} [flight_arrival]
 * @property {string} [flight_departure]
 * @property {string} [flipper]
 * @property {string} [floppy_disk]
 * @property {string} [flower_playing_cards]
 * @property {string} [flushed]
 * @property {string} [fly]
 * @property {string} [flying_disc]
 * @property {string} [flying_saucer]
 * @property {string} [fog]
 * @property {string} [foggy]
 * @property {string} [fondue]
 * @property {string} [foot]
 * @property {string} [football]
 * @property {string} [footprints]
 * @property {string} [fork_and_knife]
 * @property {string} [fortune_cookie]
 * @property {string} [fountain]
 * @property {string} [fountain_pen]
 * @property {string} [four]
 * @property {string} [four_leaf_clover]
 * @property {string} [fox_face]
 * @property {string} [fr]
 * @property {string} [framed_picture]
 * @property {string} [free]
 * @property {string} [french_guiana]
 * @property {string} [french_polynesia]
 * @property {string} [french_southern_territories]
 * @property {string} [fried_egg]
 * @property {string} [fried_shrimp]
 * @property {string} [fries]
 * @property {string} [frog]
 * @property {string} [frowning]
 * @property {string} [frowning_face]
 * @property {string} [frowning_man]
 * @property {string} [frowning_person]
 * @property {string} [frowning_woman]
 * @property {string} [fu]
 * @property {string} [fuelpump]
 * @property {string} [full_moon]
 * @property {string} [full_moon_with_face]
 * @property {string} [funeral_urn]
 * @property {string} [gabon]
 * @property {string} [gambia]
 * @property {string} [game_die]
 * @property {string} [garlic]
 * @property {string} [gb]
 * @property {string} [gear]
 * @property {string} [gem]
 * @property {string} [gemini]
 * @property {string} [genie]
 * @property {string} [genie_man]
 * @property {string} [genie_woman]
 * @property {string} [georgia]
 * @property {string} [ghana]
 * @property {string} [ghost]
 * @property {string} [gibraltar]
 * @property {string} [gift]
 * @property {string} [gift_heart]
 * @property {string} [giraffe]
 * @property {string} [girl]
 * @property {string} [globe_with_meridians]
 * @property {string} [gloves]
 * @property {string} [goal_net]
 * @property {string} [goat]
 * @property {string} [goberserk]
 * @property {string} [godmode]
 * @property {string} [goggles]
 * @property {string} [golf]
 * @property {string} [golfing]
 * @property {string} [golfing_man]
 * @property {string} [golfing_woman]
 * @property {string} [gorilla]
 * @property {string} [grapes]
 * @property {string} [greece]
 * @property {string} [green_apple]
 * @property {string} [green_book]
 * @property {string} [green_circle]
 * @property {string} [green_heart]
 * @property {string} [green_salad]
 * @property {string} [green_square]
 * @property {string} [greenland]
 * @property {string} [grenada]
 * @property {string} [grey_exclamation]
 * @property {string} [grey_question]
 * @property {string} [grimacing]
 * @property {string} [grin]
 * @property {string} [grinning]
 * @property {string} [guadeloupe]
 * @property {string} [guam]
 * @property {string} [guard]
 * @property {string} [guardsman]
 * @property {string} [guardswoman]
 * @property {string} [guatemala]
 * @property {string} [guernsey]
 * @property {string} [guide_dog]
 * @property {string} [guinea]
 * @property {string} [guinea_bissau]
 * @property {string} [guitar]
 * @property {string} [gun]
 * @property {string} [guyana]
 * @property {string} [haircut]
 * @property {string} [haircut_man]
 * @property {string} [haircut_woman]
 * @property {string} [haiti]
 * @property {string} [hamburger]
 * @property {string} [hammer]
 * @property {string} [hammer_and_pick]
 * @property {string} [hammer_and_wrench]
 * @property {string} [hamster]
 * @property {string} [hand]
 * @property {string} [hand_over_mouth]
 * @property {string} [handbag]
 * @property {string} [handball_person]
 * @property {string} [handshake]
 * @property {string} [hankey]
 * @property {string} [hash]
 * @property {string} [hatched_chick]
 * @property {string} [hatching_chick]
 * @property {string} [headphones]
 * @property {string} [headstone]
 * @property {string} [health_worker]
 * @property {string} [hear_no_evil]
 * @property {string} [heard_mcdonald_islands]
 * @property {string} [heart]
 * @property {string} [heart_decoration]
 * @property {string} [heart_eyes]
 * @property {string} [heart_eyes_cat]
 * @property {string} [heart_on_fire]
 * @property {string} [heartbeat]
 * @property {string} [heartpulse]
 * @property {string} [hearts]
 * @property {string} [heavy_check_mark]
 * @property {string} [heavy_division_sign]
 * @property {string} [heavy_dollar_sign]
 * @property {string} [heavy_exclamation_mark]
 * @property {string} [heavy_heart_exclamation]
 * @property {string} [heavy_minus_sign]
 * @property {string} [heavy_multiplication_x]
 * @property {string} [heavy_plus_sign]
 * @property {string} [hedgehog]
 * @property {string} [helicopter]
 * @property {string} [herb]
 * @property {string} [hibiscus]
 * @property {string} [high_brightness]
 * @property {string} [high_heel]
 * @property {string} [hiking_boot]
 * @property {string} [hindu_temple]
 * @property {string} [hippopotamus]
 * @property {string} [hocho]
 * @property {string} [hole]
 * @property {string} [honduras]
 * @property {string} [honey_pot]
 * @property {string} [honeybee]
 * @property {string} [hong_kong]
 * @property {string} [hook]
 * @property {string} [horse]
 * @property {string} [horse_racing]
 * @property {string} [hospital]
 * @property {string} [hot_face]
 * @property {string} [hot_pepper]
 * @property {string} [hotdog]
 * @property {string} [hotel]
 * @property {string} [hotsprings]
 * @property {string} [hourglass]
 * @property {string} [hourglass_flowing_sand]
 * @property {string} [house]
 * @property {string} [house_with_garden]
 * @property {string} [houses]
 * @property {string} [hugs]
 * @property {string} [hungary]
 * @property {string} [hurtrealbad]
 * @property {string} [hushed]
 * @property {string} [hut]
 * @property {string} [ice_cream]
 * @property {string} [ice_cube]
 * @property {string} [ice_hockey]
 * @property {string} [ice_skate]
 * @property {string} [icecream]
 * @property {string} [iceland]
 * @property {string} [id]
 * @property {string} [ideograph_advantage]
 * @property {string} [imp]
 * @property {string} [inbox_tray]
 * @property {string} [incoming_envelope]
 * @property {string} [india]
 * @property {string} [indonesia]
 * @property {string} [infinity]
 * @property {string} [information_desk_person]
 * @property {string} [information_source]
 * @property {string} [innocent]
 * @property {string} [interrobang]
 * @property {string} [iphone]
 * @property {string} [iran]
 * @property {string} [iraq]
 * @property {string} [ireland]
 * @property {string} [isle_of_man]
 * @property {string} [israel]
 * @property {string} [it]
 * @property {string} [izakaya_lantern]
 * @property {string} [jack_o_lantern]
 * @property {string} [jamaica]
 * @property {string} [japan]
 * @property {string} [japanese_castle]
 * @property {string} [japanese_goblin]
 * @property {string} [japanese_ogre]
 * @property {string} [jeans]
 * @property {string} [jersey]
 * @property {string} [jigsaw]
 * @property {string} [jordan]
 * @property {string} [joy]
 * @property {string} [joy_cat]
 * @property {string} [joystick]
 * @property {string} [jp]
 * @property {string} [judge]
 * @property {string} [juggling_person]
 * @property {string} [kangaroo]
 * @property {string} [kazakhstan]
 * @property {string} [kenya]
 * @property {string} [key]
 * @property {string} [keyboard]
 * @property {string} [keycap_ten]
 * @property {string} [kick_scooter]
 * @property {string} [kimono]
 * @property {string} [kiribati]
 * @property {string} [kiss]
 * @property {string} [kissing]
 * @property {string} [kissing_cat]
 * @property {string} [kissing_closed_eyes]
 * @property {string} [kissing_heart]
 * @property {string} [kissing_smiling_eyes]
 * @property {string} [kite]
 * @property {string} [kiwi_fruit]
 * @property {string} [kneeling_man]
 * @property {string} [kneeling_person]
 * @property {string} [kneeling_woman]
 * @property {string} [knife]
 * @property {string} [knot]
 * @property {string} [koala]
 * @property {string} [koko]
 * @property {string} [kosovo]
 * @property {string} [kr]
 * @property {string} [kuwait]
 * @property {string} [kyrgyzstan]
 * @property {string} [lab_coat]
 * @property {string} [label]
 * @property {string} [lacrosse]
 * @property {string} [ladder]
 * @property {string} [lady_beetle]
 * @property {string} [lantern]
 * @property {string} [laos]
 * @property {string} [large_blue_circle]
 * @property {string} [large_blue_diamond]
 * @property {string} [large_orange_diamond]
 * @property {string} [last_quarter_moon]
 * @property {string} [last_quarter_moon_with_face]
 * @property {string} [latin_cross]
 * @property {string} [latvia]
 * @property {string} [laughing]
 * @property {string} [leafy_green]
 * @property {string} [leaves]
 * @property {string} [lebanon]
 * @property {string} [ledger]
 * @property {string} [left_luggage]
 * @property {string} [left_right_arrow]
 * @property {string} [left_speech_bubble]
 * @property {string} [leftwards_arrow_with_hook]
 * @property {string} [leg]
 * @property {string} [lemon]
 * @property {string} [leo]
 * @property {string} [leopard]
 * @property {string} [lesotho]
 * @property {string} [level_slider]
 * @property {string} [liberia]
 * @property {string} [libra]
 * @property {string} [libya]
 * @property {string} [liechtenstein]
 * @property {string} [light_rail]
 * @property {string} [link]
 * @property {string} [lion]
 * @property {string} [lips]
 * @property {string} [lipstick]
 * @property {string} [lithuania]
 * @property {string} [lizard]
 * @property {string} [llama]
 * @property {string} [lobster]
 * @property {string} [lock]
 * @property {string} [lock_with_ink_pen]
 * @property {string} [lollipop]
 * @property {string} [long_drum]
 * @property {string} [loop]
 * @property {string} [lotion_bottle]
 * @property {string} [lotus_position]
 * @property {string} [lotus_position_man]
 * @property {string} [lotus_position_woman]
 * @property {string} [loud_sound]
 * @property {string} [loudspeaker]
 * @property {string} [love_hotel]
 * @property {string} [love_letter]
 * @property {string} [love_you_gesture]
 * @property {string} [low_brightness]
 * @property {string} [luggage]
 * @property {string} [lungs]
 * @property {string} [luxembourg]
 * @property {string} [lying_face]
 * @property {string} [m]
 * @property {string} [macau]
 * @property {string} [macedonia]
 * @property {string} [madagascar]
 * @property {string} [mag]
 * @property {string} [mag_right]
 * @property {string} [mage]
 * @property {string} [mage_man]
 * @property {string} [mage_woman]
 * @property {string} [magic_wand]
 * @property {string} [magnet]
 * @property {string} [mahjong]
 * @property {string} [mailbox]
 * @property {string} [mailbox_closed]
 * @property {string} [mailbox_with_mail]
 * @property {string} [mailbox_with_no_mail]
 * @property {string} [malawi]
 * @property {string} [malaysia]
 * @property {string} [maldives]
 * @property {string} [male_detective]
 * @property {string} [male_sign]
 * @property {string} [mali]
 * @property {string} [malta]
 * @property {string} [mammoth]
 * @property {string} [man]
 * @property {string} [man_artist]
 * @property {string} [man_astronaut]
 * @property {string} [man_beard]
 * @property {string} [man_cartwheeling]
 * @property {string} [man_cook]
 * @property {string} [man_dancing]
 * @property {string} [man_facepalming]
 * @property {string} [man_factory_worker]
 * @property {string} [man_farmer]
 * @property {string} [man_feeding_baby]
 * @property {string} [man_firefighter]
 * @property {string} [man_health_worker]
 * @property {string} [man_in_manual_wheelchair]
 * @property {string} [man_in_motorized_wheelchair]
 * @property {string} [man_in_tuxedo]
 * @property {string} [man_judge]
 * @property {string} [man_juggling]
 * @property {string} [man_mechanic]
 * @property {string} [man_office_worker]
 * @property {string} [man_pilot]
 * @property {string} [man_playing_handball]
 * @property {string} [man_playing_water_polo]
 * @property {string} [man_scientist]
 * @property {string} [man_shrugging]
 * @property {string} [man_singer]
 * @property {string} [man_student]
 * @property {string} [man_teacher]
 * @property {string} [man_technologist]
 * @property {string} [man_with_gua_pi_mao]
 * @property {string} [man_with_probing_cane]
 * @property {string} [man_with_turban]
 * @property {string} [man_with_veil]
 * @property {string} [mandarin]
 * @property {string} [mango]
 * @property {string} [mans_shoe]
 * @property {string} [mantelpiece_clock]
 * @property {string} [manual_wheelchair]
 * @property {string} [maple_leaf]
 * @property {string} [marshall_islands]
 * @property {string} [martial_arts_uniform]
 * @property {string} [martinique]
 * @property {string} [mask]
 * @property {string} [massage]
 * @property {string} [massage_man]
 * @property {string} [massage_woman]
 * @property {string} [mate]
 * @property {string} [mauritania]
 * @property {string} [mauritius]
 * @property {string} [mayotte]
 * @property {string} [meat_on_bone]
 * @property {string} [mechanic]
 * @property {string} [mechanical_arm]
 * @property {string} [mechanical_leg]
 * @property {string} [medal_military]
 * @property {string} [medal_sports]
 * @property {string} [medical_symbol]
 * @property {string} [mega]
 * @property {string} [melon]
 * @property {string} [memo]
 * @property {string} [men_wrestling]
 * @property {string} [mending_heart]
 * @property {string} [menorah]
 * @property {string} [mens]
 * @property {string} [mermaid]
 * @property {string} [merman]
 * @property {string} [merperson]
 * @property {string} [metal]
 * @property {string} [metro]
 * @property {string} [mexico]
 * @property {string} [microbe]
 * @property {string} [micronesia]
 * @property {string} [microphone]
 * @property {string} [microscope]
 * @property {string} [middle_finger]
 * @property {string} [military_helmet]
 * @property {string} [milk_glass]
 * @property {string} [milky_way]
 * @property {string} [minibus]
 * @property {string} [minidisc]
 * @property {string} [mirror]
 * @property {string} [mobile_phone_off]
 * @property {string} [moldova]
 * @property {string} [monaco]
 * @property {string} [money_mouth_face]
 * @property {string} [money_with_wings]
 * @property {string} [moneybag]
 * @property {string} [mongolia]
 * @property {string} [monkey]
 * @property {string} [monkey_face]
 * @property {string} [monocle_face]
 * @property {string} [monorail]
 * @property {string} [montenegro]
 * @property {string} [montserrat]
 * @property {string} [moon]
 * @property {string} [moon_cake]
 * @property {string} [morocco]
 * @property {string} [mortar_board]
 * @property {string} [mosque]
 * @property {string} [mosquito]
 * @property {string} [motor_boat]
 * @property {string} [motor_scooter]
 * @property {string} [motorcycle]
 * @property {string} [motorized_wheelchair]
 * @property {string} [motorway]
 * @property {string} [mount_fuji]
 * @property {string} [mountain]
 * @property {string} [mountain_bicyclist]
 * @property {string} [mountain_biking_man]
 * @property {string} [mountain_biking_woman]
 * @property {string} [mountain_cableway]
 * @property {string} [mountain_railway]
 * @property {string} [mountain_snow]
 * @property {string} [mouse]
 * @property {string} [mouse2]
 * @property {string} [mouse_trap]
 * @property {string} [movie_camera]
 * @property {string} [moyai]
 * @property {string} [mozambique]
 * @property {string} [mrs_claus]
 * @property {string} [muscle]
 * @property {string} [mushroom]
 * @property {string} [musical_keyboard]
 * @property {string} [musical_note]
 * @property {string} [musical_score]
 * @property {string} [mute]
 * @property {string} [mx_claus]
 * @property {string} [myanmar]
 * @property {string} [nail_care]
 * @property {string} [name_badge]
 * @property {string} [namibia]
 * @property {string} [national_park]
 * @property {string} [nauru]
 * @property {string} [nauseated_face]
 * @property {string} [nazar_amulet]
 * @property {string} [neckbeard]
 * @property {string} [necktie]
 * @property {string} [negative_squared_cross_mark]
 * @property {string} [nepal]
 * @property {string} [nerd_face]
 * @property {string} [nesting_dolls]
 * @property {string} [netherlands]
 * @property {string} [neutral_face]
 * @property {string} [new]
 * @property {string} [new_caledonia]
 * @property {string} [new_moon]
 * @property {string} [new_moon_with_face]
 * @property {string} [new_zealand]
 * @property {string} [newspaper]
 * @property {string} [newspaper_roll]
 * @property {string} [next_track_button]
 * @property {string} [ng]
 * @property {string} [ng_man]
 * @property {string} [ng_woman]
 * @property {string} [nicaragua]
 * @property {string} [niger]
 * @property {string} [nigeria]
 * @property {string} [night_with_stars]
 * @property {string} [nine]
 * @property {string} [ninja]
 * @property {string} [niue]
 * @property {string} [no_bell]
 * @property {string} [no_bicycles]
 * @property {string} [no_entry]
 * @property {string} [no_entry_sign]
 * @property {string} [no_good]
 * @property {string} [no_good_man]
 * @property {string} [no_good_woman]
 * @property {string} [no_mobile_phones]
 * @property {string} [no_mouth]
 * @property {string} [no_pedestrians]
 * @property {string} [no_smoking]
 * @property {string} [nonpotable_water]
 * @property {string} [norfolk_island]
 * @property {string} [north_korea]
 * @property {string} [northern_mariana_islands]
 * @property {string} [norway]
 * @property {string} [nose]
 * @property {string} [notebook]
 * @property {string} [notebook_with_decorative_cover]
 * @property {string} [notes]
 * @property {string} [nut_and_bolt]
 * @property {string} [o]
 * @property {string} [o2]
 * @property {string} [ocean]
 * @property {string} [octocat]
 * @property {string} [octopus]
 * @property {string} [oden]
 * @property {string} [office]
 * @property {string} [office_worker]
 * @property {string} [oil_drum]
 * @property {string} [ok]
 * @property {string} [ok_hand]
 * @property {string} [ok_man]
 * @property {string} [ok_person]
 * @property {string} [ok_woman]
 * @property {string} [old_key]
 * @property {string} [older_adult]
 * @property {string} [older_man]
 * @property {string} [older_woman]
 * @property {string} [olive]
 * @property {string} [om]
 * @property {string} [oman]
 * @property {string} [on]
 * @property {string} [oncoming_automobile]
 * @property {string} [oncoming_bus]
 * @property {string} [oncoming_police_car]
 * @property {string} [oncoming_taxi]
 * @property {string} [one]
 * @property {string} [one_piece_swimsuit]
 * @property {string} [onion]
 * @property {string} [open_book]
 * @property {string} [open_file_folder]
 * @property {string} [open_hands]
 * @property {string} [open_mouth]
 * @property {string} [open_umbrella]
 * @property {string} [ophiuchus]
 * @property {string} [orange]
 * @property {string} [orange_book]
 * @property {string} [orange_circle]
 * @property {string} [orange_heart]
 * @property {string} [orange_square]
 * @property {string} [orangutan]
 * @property {string} [orthodox_cross]
 * @property {string} [otter]
 * @property {string} [outbox_tray]
 * @property {string} [owl]
 * @property {string} [ox]
 * @property {string} [oyster]
 * @property {string} [package]
 * @property {string} [page_facing_up]
 * @property {string} [page_with_curl]
 * @property {string} [pager]
 * @property {string} [paintbrush]
 * @property {string} [pakistan]
 * @property {string} [palau]
 * @property {string} [palestinian_territories]
 * @property {string} [palm_tree]
 * @property {string} [palms_up_together]
 * @property {string} [panama]
 * @property {string} [pancakes]
 * @property {string} [panda_face]
 * @property {string} [paperclip]
 * @property {string} [paperclips]
 * @property {string} [papua_new_guinea]
 * @property {string} [parachute]
 * @property {string} [paraguay]
 * @property {string} [parasol_on_ground]
 * @property {string} [parking]
 * @property {string} [parrot]
 * @property {string} [part_alternation_mark]
 * @property {string} [partly_sunny]
 * @property {string} [partying_face]
 * @property {string} [passenger_ship]
 * @property {string} [passport_control]
 * @property {string} [pause_button]
 * @property {string} [paw_prints]
 * @property {string} [peace_symbol]
 * @property {string} [peach]
 * @property {string} [peacock]
 * @property {string} [peanuts]
 * @property {string} [pear]
 * @property {string} [pen]
 * @property {string} [pencil]
 * @property {string} [pencil2]
 * @property {string} [penguin]
 * @property {string} [pensive]
 * @property {string} [people_holding_hands]
 * @property {string} [people_hugging]
 * @property {string} [performing_arts]
 * @property {string} [persevere]
 * @property {string} [person_bald]
 * @property {string} [person_curly_hair]
 * @property {string} [person_feeding_baby]
 * @property {string} [person_fencing]
 * @property {string} [person_in_manual_wheelchair]
 * @property {string} [person_in_motorized_wheelchair]
 * @property {string} [person_in_tuxedo]
 * @property {string} [person_red_hair]
 * @property {string} [person_white_hair]
 * @property {string} [person_with_probing_cane]
 * @property {string} [person_with_turban]
 * @property {string} [person_with_veil]
 * @property {string} [peru]
 * @property {string} [petri_dish]
 * @property {string} [philippines]
 * @property {string} [phone]
 * @property {string} [pick]
 * @property {string} [pickup_truck]
 * @property {string} [pie]
 * @property {string} [pig]
 * @property {string} [pig2]
 * @property {string} [pig_nose]
 * @property {string} [pill]
 * @property {string} [pilot]
 * @property {string} [pinata]
 * @property {string} [pinched_fingers]
 * @property {string} [pinching_hand]
 * @property {string} [pineapple]
 * @property {string} [ping_pong]
 * @property {string} [pirate_flag]
 * @property {string} [pisces]
 * @property {string} [pitcairn_islands]
 * @property {string} [pizza]
 * @property {string} [placard]
 * @property {string} [place_of_worship]
 * @property {string} [plate_with_cutlery]
 * @property {string} [play_or_pause_button]
 * @property {string} [pleading_face]
 * @property {string} [plunger]
 * @property {string} [point_down]
 * @property {string} [point_left]
 * @property {string} [point_right]
 * @property {string} [point_up]
 * @property {string} [point_up_2]
 * @property {string} [poland]
 * @property {string} [polar_bear]
 * @property {string} [police_car]
 * @property {string} [police_officer]
 * @property {string} [policeman]
 * @property {string} [policewoman]
 * @property {string} [poodle]
 * @property {string} [poop]
 * @property {string} [popcorn]
 * @property {string} [portugal]
 * @property {string} [post_office]
 * @property {string} [postal_horn]
 * @property {string} [postbox]
 * @property {string} [potable_water]
 * @property {string} [potato]
 * @property {string} [potted_plant]
 * @property {string} [pouch]
 * @property {string} [poultry_leg]
 * @property {string} [pound]
 * @property {string} [pout]
 * @property {string} [pouting_cat]
 * @property {string} [pouting_face]
 * @property {string} [pouting_man]
 * @property {string} [pouting_woman]
 * @property {string} [pray]
 * @property {string} [prayer_beads]
 * @property {string} [pregnant_woman]
 * @property {string} [pretzel]
 * @property {string} [previous_track_button]
 * @property {string} [prince]
 * @property {string} [princess]
 * @property {string} [printer]
 * @property {string} [probing_cane]
 * @property {string} [puerto_rico]
 * @property {string} [punch]
 * @property {string} [purple_circle]
 * @property {string} [purple_heart]
 * @property {string} [purple_square]
 * @property {string} [purse]
 * @property {string} [pushpin]
 * @property {string} [put_litter_in_its_place]
 * @property {string} [qatar]
 * @property {string} [question]
 * @property {string} [rabbit]
 * @property {string} [rabbit2]
 * @property {string} [raccoon]
 * @property {string} [racehorse]
 * @property {string} [racing_car]
 * @property {string} [radio]
 * @property {string} [radio_button]
 * @property {string} [radioactive]
 * @property {string} [rage]
 * @property {string} [rage1]
 * @property {string} [rage2]
 * @property {string} [rage3]
 * @property {string} [rage4]
 * @property {string} [railway_car]
 * @property {string} [railway_track]
 * @property {string} [rainbow]
 * @property {string} [rainbow_flag]
 * @property {string} [raised_back_of_hand]
 * @property {string} [raised_eyebrow]
 * @property {string} [raised_hand]
 * @property {string} [raised_hand_with_fingers_splayed]
 * @property {string} [raised_hands]
 * @property {string} [raising_hand]
 * @property {string} [raising_hand_man]
 * @property {string} [raising_hand_woman]
 * @property {string} [ram]
 * @property {string} [ramen]
 * @property {string} [rat]
 * @property {string} [razor]
 * @property {string} [receipt]
 * @property {string} [record_button]
 * @property {string} [recycle]
 * @property {string} [red_car]
 * @property {string} [red_circle]
 * @property {string} [red_envelope]
 * @property {string} [red_haired_man]
 * @property {string} [red_haired_woman]
 * @property {string} [red_square]
 * @property {string} [registered]
 * @property {string} [relaxed]
 * @property {string} [relieved]
 * @property {string} [reminder_ribbon]
 * @property {string} [repeat]
 * @property {string} [repeat_one]
 * @property {string} [rescue_worker_helmet]
 * @property {string} [restroom]
 * @property {string} [reunion]
 * @property {string} [revolving_hearts]
 * @property {string} [rewind]
 * @property {string} [rhinoceros]
 * @property {string} [ribbon]
 * @property {string} [rice]
 * @property {string} [rice_ball]
 * @property {string} [rice_cracker]
 * @property {string} [rice_scene]
 * @property {string} [right_anger_bubble]
 * @property {string} [ring]
 * @property {string} [ringed_planet]
 * @property {string} [robot]
 * @property {string} [rock]
 * @property {string} [rocket]
 * @property {string} [rofl]
 * @property {string} [roll_eyes]
 * @property {string} [roll_of_paper]
 * @property {string} [roller_coaster]
 * @property {string} [roller_skate]
 * @property {string} [romania]
 * @property {string} [rooster]
 * @property {string} [rose]
 * @property {string} [rosette]
 * @property {string} [rotating_light]
 * @property {string} [round_pushpin]
 * @property {string} [rowboat]
 * @property {string} [rowing_man]
 * @property {string} [rowing_woman]
 * @property {string} [ru]
 * @property {string} [rugby_football]
 * @property {string} [runner]
 * @property {string} [running]
 * @property {string} [running_man]
 * @property {string} [running_shirt_with_sash]
 * @property {string} [running_woman]
 * @property {string} [rwanda]
 * @property {string} [sa]
 * @property {string} [safety_pin]
 * @property {string} [safety_vest]
 * @property {string} [sagittarius]
 * @property {string} [sailboat]
 * @property {string} [sake]
 * @property {string} [salt]
 * @property {string} [samoa]
 * @property {string} [san_marino]
 * @property {string} [sandal]
 * @property {string} [sandwich]
 * @property {string} [santa]
 * @property {string} [sao_tome_principe]
 * @property {string} [sari]
 * @property {string} [sassy_man]
 * @property {string} [sassy_woman]
 * @property {string} [satellite]
 * @property {string} [satisfied]
 * @property {string} [saudi_arabia]
 * @property {string} [sauna_man]
 * @property {string} [sauna_person]
 * @property {string} [sauna_woman]
 * @property {string} [sauropod]
 * @property {string} [saxophone]
 * @property {string} [scarf]
 * @property {string} [school]
 * @property {string} [school_satchel]
 * @property {string} [scientist]
 * @property {string} [scissors]
 * @property {string} [scorpion]
 * @property {string} [scorpius]
 * @property {string} [scotland]
 * @property {string} [scream]
 * @property {string} [scream_cat]
 * @property {string} [screwdriver]
 * @property {string} [scroll]
 * @property {string} [seal]
 * @property {string} [seat]
 * @property {string} [secret]
 * @property {string} [see_no_evil]
 * @property {string} [seedling]
 * @property {string} [selfie]
 * @property {string} [senegal]
 * @property {string} [serbia]
 * @property {string} [service_dog]
 * @property {string} [seven]
 * @property {string} [sewing_needle]
 * @property {string} [seychelles]
 * @property {string} [shallow_pan_of_food]
 * @property {string} [shamrock]
 * @property {string} [shark]
 * @property {string} [shaved_ice]
 * @property {string} [sheep]
 * @property {string} [shell]
 * @property {string} [shield]
 * @property {string} [shinto_shrine]
 * @property {string} [ship]
 * @property {string} [shipit]
 * @property {string} [shirt]
 * @property {string} [shoe]
 * @property {string} [shopping]
 * @property {string} [shopping_cart]
 * @property {string} [shorts]
 * @property {string} [shower]
 * @property {string} [shrimp]
 * @property {string} [shrug]
 * @property {string} [shushing_face]
 * @property {string} [sierra_leone]
 * @property {string} [signal_strength]
 * @property {string} [singapore]
 * @property {string} [singer]
 * @property {string} [sint_maarten]
 * @property {string} [six]
 * @property {string} [six_pointed_star]
 * @property {string} [skateboard]
 * @property {string} [ski]
 * @property {string} [skier]
 * @property {string} [skull]
 * @property {string} [skull_and_crossbones]
 * @property {string} [skunk]
 * @property {string} [sled]
 * @property {string} [sleeping]
 * @property {string} [sleeping_bed]
 * @property {string} [sleepy]
 * @property {string} [slightly_frowning_face]
 * @property {string} [slightly_smiling_face]
 * @property {string} [slot_machine]
 * @property {string} [sloth]
 * @property {string} [slovakia]
 * @property {string} [slovenia]
 * @property {string} [small_airplane]
 * @property {string} [small_blue_diamond]
 * @property {string} [small_orange_diamond]
 * @property {string} [small_red_triangle]
 * @property {string} [small_red_triangle_down]
 * @property {string} [smile]
 * @property {string} [smile_cat]
 * @property {string} [smiley]
 * @property {string} [smiley_cat]
 * @property {string} [smiling_face_with_tear]
 * @property {string} [smiling_face_with_three_hearts]
 * @property {string} [smiling_imp]
 * @property {string} [smirk]
 * @property {string} [smirk_cat]
 * @property {string} [smoking]
 * @property {string} [snail]
 * @property {string} [snake]
 * @property {string} [sneezing_face]
 * @property {string} [snowboarder]
 * @property {string} [snowflake]
 * @property {string} [snowman]
 * @property {string} [snowman_with_snow]
 * @property {string} [soap]
 * @property {string} [sob]
 * @property {string} [soccer]
 * @property {string} [socks]
 * @property {string} [softball]
 * @property {string} [solomon_islands]
 * @property {string} [somalia]
 * @property {string} [soon]
 * @property {string} [sos]
 * @property {string} [sound]
 * @property {string} [south_africa]
 * @property {string} [south_georgia_south_sandwich_islands]
 * @property {string} [south_sudan]
 * @property {string} [space_invader]
 * @property {string} [spades]
 * @property {string} [spaghetti]
 * @property {string} [sparkle]
 * @property {string} [sparkler]
 * @property {string} [sparkles]
 * @property {string} [sparkling_heart]
 * @property {string} [speak_no_evil]
 * @property {string} [speaker]
 * @property {string} [speaking_head]
 * @property {string} [speech_balloon]
 * @property {string} [speedboat]
 * @property {string} [spider]
 * @property {string} [spider_web]
 * @property {string} [spiral_calendar]
 * @property {string} [spiral_notepad]
 * @property {string} [sponge]
 * @property {string} [spoon]
 * @property {string} [squid]
 * @property {string} [sri_lanka]
 * @property {string} [st_barthelemy]
 * @property {string} [st_helena]
 * @property {string} [st_kitts_nevis]
 * @property {string} [st_lucia]
 * @property {string} [st_martin]
 * @property {string} [st_pierre_miquelon]
 * @property {string} [st_vincent_grenadines]
 * @property {string} [stadium]
 * @property {string} [standing_man]
 * @property {string} [standing_person]
 * @property {string} [standing_woman]
 * @property {string} [star]
 * @property {string} [star2]
 * @property {string} [star_and_crescent]
 * @property {string} [star_of_david]
 * @property {string} [star_struck]
 * @property {string} [stars]
 * @property {string} [station]
 * @property {string} [statue_of_liberty]
 * @property {string} [steam_locomotive]
 * @property {string} [stethoscope]
 * @property {string} [stew]
 * @property {string} [stop_button]
 * @property {string} [stop_sign]
 * @property {string} [stopwatch]
 * @property {string} [straight_ruler]
 * @property {string} [strawberry]
 * @property {string} [stuck_out_tongue]
 * @property {string} [stuck_out_tongue_closed_eyes]
 * @property {string} [stuck_out_tongue_winking_eye]
 * @property {string} [student]
 * @property {string} [studio_microphone]
 * @property {string} [stuffed_flatbread]
 * @property {string} [sudan]
 * @property {string} [sun_behind_large_cloud]
 * @property {string} [sun_behind_rain_cloud]
 * @property {string} [sun_behind_small_cloud]
 * @property {string} [sun_with_face]
 * @property {string} [sunflower]
 * @property {string} [sunglasses]
 * @property {string} [sunny]
 * @property {string} [sunrise]
 * @property {string} [sunrise_over_mountains]
 * @property {string} [superhero]
 * @property {string} [superhero_man]
 * @property {string} [superhero_woman]
 * @property {string} [supervillain]
 * @property {string} [supervillain_man]
 * @property {string} [supervillain_woman]
 * @property {string} [surfer]
 * @property {string} [surfing_man]
 * @property {string} [surfing_woman]
 * @property {string} [suriname]
 * @property {string} [sushi]
 * @property {string} [suspect]
 * @property {string} [suspension_railway]
 * @property {string} [svalbard_jan_mayen]
 * @property {string} [swan]
 * @property {string} [swaziland]
 * @property {string} [sweat]
 * @property {string} [sweat_drops]
 * @property {string} [sweat_smile]
 * @property {string} [sweden]
 * @property {string} [sweet_potato]
 * @property {string} [swim_brief]
 * @property {string} [swimmer]
 * @property {string} [swimming_man]
 * @property {string} [swimming_woman]
 * @property {string} [switzerland]
 * @property {string} [symbols]
 * @property {string} [synagogue]
 * @property {string} [syria]
 * @property {string} [syringe]
 * @property {string} [taco]
 * @property {string} [tada]
 * @property {string} [taiwan]
 * @property {string} [tajikistan]
 * @property {string} [takeout_box]
 * @property {string} [tamale]
 * @property {string} [tanabata_tree]
 * @property {string} [tangerine]
 * @property {string} [tanzania]
 * @property {string} [taurus]
 * @property {string} [taxi]
 * @property {string} [tea]
 * @property {string} [teacher]
 * @property {string} [teapot]
 * @property {string} [technologist]
 * @property {string} [teddy_bear]
 * @property {string} [telephone]
 * @property {string} [telephone_receiver]
 * @property {string} [telescope]
 * @property {string} [tennis]
 * @property {string} [tent]
 * @property {string} [test_tube]
 * @property {string} [thailand]
 * @property {string} [thermometer]
 * @property {string} [thinking]
 * @property {string} [thong_sandal]
 * @property {string} [thought_balloon]
 * @property {string} [thread]
 * @property {string} [three]
 * @property {string} [thumbsdown]
 * @property {string} [thumbsup]
 * @property {string} [ticket]
 * @property {string} [tickets]
 * @property {string} [tiger]
 * @property {string} [tiger2]
 * @property {string} [timer_clock]
 * @property {string} [timor_leste]
 * @property {string} [tipping_hand_man]
 * @property {string} [tipping_hand_person]
 * @property {string} [tipping_hand_woman]
 * @property {string} [tired_face]
 * @property {string} [tm]
 * @property {string} [togo]
 * @property {string} [toilet]
 * @property {string} [tokelau]
 * @property {string} [tokyo_tower]
 * @property {string} [tomato]
 * @property {string} [tonga]
 * @property {string} [tongue]
 * @property {string} [toolbox]
 * @property {string} [tooth]
 * @property {string} [toothbrush]
 * @property {string} [top]
 * @property {string} [tophat]
 * @property {string} [tornado]
 * @property {string} [tr]
 * @property {string} [trackball]
 * @property {string} [tractor]
 * @property {string} [traffic_light]
 * @property {string} [train]
 * @property {string} [train2]
 * @property {string} [tram]
 * @property {string} [transgender_flag]
 * @property {string} [transgender_symbol]
 * @property {string} [trex]
 * @property {string} [triangular_flag_on_post]
 * @property {string} [triangular_ruler]
 * @property {string} [trident]
 * @property {string} [trinidad_tobago]
 * @property {string} [tristan_da_cunha]
 * @property {string} [triumph]
 * @property {string} [trolleybus]
 * @property {string} [trollface]
 * @property {string} [trophy]
 * @property {string} [tropical_drink]
 * @property {string} [tropical_fish]
 * @property {string} [truck]
 * @property {string} [trumpet]
 * @property {string} [tshirt]
 * @property {string} [tulip]
 * @property {string} [tumbler_glass]
 * @property {string} [tunisia]
 * @property {string} [turkey]
 * @property {string} [turkmenistan]
 * @property {string} [turks_caicos_islands]
 * @property {string} [turtle]
 * @property {string} [tuvalu]
 * @property {string} [tv]
 * @property {string} [twisted_rightwards_arrows]
 * @property {string} [two]
 * @property {string} [two_hearts]
 * @property {string} [two_men_holding_hands]
 * @property {string} [two_women_holding_hands]
 * @property {string} [u5272]
 * @property {string} [u5408]
 * @property {string} [u55b6]
 * @property {string} [u6307]
 * @property {string} [u6708]
 * @property {string} [u6709]
 * @property {string} [u6e80]
 * @property {string} [u7121]
 * @property {string} [u7533]
 * @property {string} [u7981]
 * @property {string} [u7a7a]
 * @property {string} [uganda]
 * @property {string} [uk]
 * @property {string} [ukraine]
 * @property {string} [umbrella]
 * @property {string} [unamused]
 * @property {string} [underage]
 * @property {string} [unicorn]
 * @property {string} [united_arab_emirates]
 * @property {string} [united_nations]
 * @property {string} [unlock]
 * @property {string} [up]
 * @property {string} [upside_down_face]
 * @property {string} [uruguay]
 * @property {string} [us]
 * @property {string} [us_outlying_islands]
 * @property {string} [us_virgin_islands]
 * @property {string} [uzbekistan]
 * @property {string} [v]
 * @property {string} [vampire]
 * @property {string} [vampire_man]
 * @property {string} [vampire_woman]
 * @property {string} [vanuatu]
 * @property {string} [vatican_city]
 * @property {string} [venezuela]
 * @property {string} [vertical_traffic_light]
 * @property {string} [vhs]
 * @property {string} [vibration_mode]
 * @property {string} [video_camera]
 * @property {string} [video_game]
 * @property {string} [vietnam]
 * @property {string} [violin]
 * @property {string} [virgo]
 * @property {string} [volcano]
 * @property {string} [volleyball]
 * @property {string} [vomiting_face]
 * @property {string} [vs]
 * @property {string} [vulcan_salute]
 * @property {string} [waffle]
 * @property {string} [wales]
 * @property {string} [walking]
 * @property {string} [walking_man]
 * @property {string} [walking_woman]
 * @property {string} [wallis_futuna]
 * @property {string} [waning_crescent_moon]
 * @property {string} [waning_gibbous_moon]
 * @property {string} [warning]
 * @property {string} [wastebasket]
 * @property {string} [watch]
 * @property {string} [water_buffalo]
 * @property {string} [water_polo]
 * @property {string} [watermelon]
 * @property {string} [wave]
 * @property {string} [wavy_dash]
 * @property {string} [waxing_crescent_moon]
 * @property {string} [waxing_gibbous_moon]
 * @property {string} [wc]
 * @property {string} [weary]
 * @property {string} [wedding]
 * @property {string} [weight_lifting]
 * @property {string} [weight_lifting_man]
 * @property {string} [weight_lifting_woman]
 * @property {string} [western_sahara]
 * @property {string} [whale]
 * @property {string} [whale2]
 * @property {string} [wheel_of_dharma]
 * @property {string} [wheelchair]
 * @property {string} [white_check_mark]
 * @property {string} [white_circle]
 * @property {string} [white_flag]
 * @property {string} [white_flower]
 * @property {string} [white_haired_man]
 * @property {string} [white_haired_woman]
 * @property {string} [white_heart]
 * @property {string} [white_large_square]
 * @property {string} [white_medium_small_square]
 * @property {string} [white_medium_square]
 * @property {string} [white_small_square]
 * @property {string} [white_square_button]
 * @property {string} [wilted_flower]
 * @property {string} [wind_chime]
 * @property {string} [wind_face]
 * @property {string} [window]
 * @property {string} [wine_glass]
 * @property {string} [wink]
 * @property {string} [wolf]
 * @property {string} [woman]
 * @property {string} [woman_artist]
 * @property {string} [woman_astronaut]
 * @property {string} [woman_beard]
 * @property {string} [woman_cartwheeling]
 * @property {string} [woman_cook]
 * @property {string} [woman_dancing]
 * @property {string} [woman_facepalming]
 * @property {string} [woman_factory_worker]
 * @property {string} [woman_farmer]
 * @property {string} [woman_feeding_baby]
 * @property {string} [woman_firefighter]
 * @property {string} [woman_health_worker]
 * @property {string} [woman_in_manual_wheelchair]
 * @property {string} [woman_in_motorized_wheelchair]
 * @property {string} [woman_in_tuxedo]
 * @property {string} [woman_judge]
 * @property {string} [woman_juggling]
 * @property {string} [woman_mechanic]
 * @property {string} [woman_office_worker]
 * @property {string} [woman_pilot]
 * @property {string} [woman_playing_handball]
 * @property {string} [woman_playing_water_polo]
 * @property {string} [woman_scientist]
 * @property {string} [woman_shrugging]
 * @property {string} [woman_singer]
 * @property {string} [woman_student]
 * @property {string} [woman_teacher]
 * @property {string} [woman_technologist]
 * @property {string} [woman_with_headscarf]
 * @property {string} [woman_with_probing_cane]
 * @property {string} [woman_with_turban]
 * @property {string} [woman_with_veil]
 * @property {string} [womans_clothes]
 * @property {string} [womans_hat]
 * @property {string} [women_wrestling]
 * @property {string} [womens]
 * @property {string} [wood]
 * @property {string} [woozy_face]
 * @property {string} [world_map]
 * @property {string} [worm]
 * @property {string} [worried]
 * @property {string} [wrench]
 * @property {string} [wrestling]
 * @property {string} [writing_hand]
 * @property {string} [x]
 * @property {string} [yarn]
 * @property {string} [yawning_face]
 * @property {string} [yellow_circle]
 * @property {string} [yellow_heart]
 * @property {string} [yellow_square]
 * @property {string} [yemen]
 * @property {string} [yen]
 * @property {string} [yin_yang]
 * @property {string} [yo_yo]
 * @property {string} [yum]
 * @property {string} [zambia]
 * @property {string} [zany_face]
 * @property {string} [zap]
 * @property {string} [zebra]
 * @property {string} [zero]
 * @property {string} [zimbabwe]
 * @property {string} [zipper_mouth_face]
 * @property {string} [zombie]
 * @property {string} [zombie_man]
 * @property {string} [zombie_woman]
 * @property {string} [zzz]
 */

/**
 * @typedef {Object} EmojiLoadMatch
 * @property {string} ["1"]
 * @property {string} ["100"]
 * @property {string} ["1234"]
 * @property {string} ["1st_place_medal"]
 * @property {string} ["2nd_place_medal"]
 * @property {string} ["3rd_place_medal"]
 * @property {string} ["8ball"]
 * @property {string} [a]
 * @property {string} [ab]
 * @property {string} [abacus]
 * @property {string} [abc]
 * @property {string} [abcd]
 * @property {string} [accept]
 * @property {string} [accessibility]
 * @property {string} [accordion]
 * @property {string} [adhesive_bandage]
 * @property {string} [adult]
 * @property {string} [aerial_tramway]
 * @property {string} [afghanistan]
 * @property {string} [airplane]
 * @property {string} [aland_islands]
 * @property {string} [alarm_clock]
 * @property {string} [albania]
 * @property {string} [alembic]
 * @property {string} [algeria]
 * @property {string} [alien]
 * @property {string} [ambulance]
 * @property {string} [american_samoa]
 * @property {string} [amphora]
 * @property {string} [anatomical_heart]
 * @property {string} [anchor]
 * @property {string} [andorra]
 * @property {string} [angel]
 * @property {string} [anger]
 * @property {string} [angola]
 * @property {string} [angry]
 * @property {string} [anguilla]
 * @property {string} [anguished]
 * @property {string} [ant]
 * @property {string} [antarctica]
 * @property {string} [antigua_barbuda]
 * @property {string} [apple]
 * @property {string} [aquarius]
 * @property {string} [argentina]
 * @property {string} [aries]
 * @property {string} [armenia]
 * @property {string} [arrow_backward]
 * @property {string} [arrow_double_down]
 * @property {string} [arrow_double_up]
 * @property {string} [arrow_down]
 * @property {string} [arrow_down_small]
 * @property {string} [arrow_forward]
 * @property {string} [arrow_heading_down]
 * @property {string} [arrow_heading_up]
 * @property {string} [arrow_left]
 * @property {string} [arrow_lower_left]
 * @property {string} [arrow_lower_right]
 * @property {string} [arrow_right]
 * @property {string} [arrow_right_hook]
 * @property {string} [arrow_up]
 * @property {string} [arrow_up_down]
 * @property {string} [arrow_up_small]
 * @property {string} [arrow_upper_left]
 * @property {string} [arrow_upper_right]
 * @property {string} [arrows_clockwise]
 * @property {string} [arrows_counterclockwise]
 * @property {string} [art]
 * @property {string} [articulated_lorry]
 * @property {string} [artificial_satellite]
 * @property {string} [artist]
 * @property {string} [aruba]
 * @property {string} [ascension_island]
 * @property {string} [asterisk]
 * @property {string} [astonished]
 * @property {string} [astronaut]
 * @property {string} [athletic_shoe]
 * @property {string} [atm]
 * @property {string} [atom]
 * @property {string} [atom_symbol]
 * @property {string} [australia]
 * @property {string} [austria]
 * @property {string} [auto_rickshaw]
 * @property {string} [avocado]
 * @property {string} [axe]
 * @property {string} [azerbaijan]
 * @property {string} [b]
 * @property {string} [baby]
 * @property {string} [baby_bottle]
 * @property {string} [baby_chick]
 * @property {string} [baby_symbol]
 * @property {string} [back]
 * @property {string} [bacon]
 * @property {string} [badger]
 * @property {string} [badminton]
 * @property {string} [bagel]
 * @property {string} [baggage_claim]
 * @property {string} [baguette_bread]
 * @property {string} [bahamas]
 * @property {string} [bahrain]
 * @property {string} [balance_scale]
 * @property {string} [bald_man]
 * @property {string} [bald_woman]
 * @property {string} [ballet_shoes]
 * @property {string} [balloon]
 * @property {string} [ballot_box]
 * @property {string} [ballot_box_with_check]
 * @property {string} [bamboo]
 * @property {string} [banana]
 * @property {string} [bangbang]
 * @property {string} [bangladesh]
 * @property {string} [banjo]
 * @property {string} [bank]
 * @property {string} [bar_chart]
 * @property {string} [barbados]
 * @property {string} [barber]
 * @property {string} [baseball]
 * @property {string} [basecamp]
 * @property {string} [basecampy]
 * @property {string} [basket]
 * @property {string} [basketball]
 * @property {string} [basketball_man]
 * @property {string} [basketball_woman]
 * @property {string} [bat]
 * @property {string} [bath]
 * @property {string} [bathtub]
 * @property {string} [battery]
 * @property {string} [beach_umbrella]
 * @property {string} [bear]
 * @property {string} [bearded_person]
 * @property {string} [beaver]
 * @property {string} [bed]
 * @property {string} [bee]
 * @property {string} [beer]
 * @property {string} [beers]
 * @property {string} [beetle]
 * @property {string} [beginner]
 * @property {string} [belarus]
 * @property {string} [belgium]
 * @property {string} [belize]
 * @property {string} [bell]
 * @property {string} [bell_pepper]
 * @property {string} [bellhop_bell]
 * @property {string} [benin]
 * @property {string} [bento]
 * @property {string} [bermuda]
 * @property {string} [beverage_box]
 * @property {string} [bhutan]
 * @property {string} [bicyclist]
 * @property {string} [bike]
 * @property {string} [biking_man]
 * @property {string} [biking_woman]
 * @property {string} [bikini]
 * @property {string} [billed_cap]
 * @property {string} [biohazard]
 * @property {string} [bird]
 * @property {string} [birthday]
 * @property {string} [bison]
 * @property {string} [black_cat]
 * @property {string} [black_circle]
 * @property {string} [black_flag]
 * @property {string} [black_heart]
 * @property {string} [black_joker]
 * @property {string} [black_large_square]
 * @property {string} [black_medium_small_square]
 * @property {string} [black_medium_square]
 * @property {string} [black_nib]
 * @property {string} [black_small_square]
 * @property {string} [black_square_button]
 * @property {string} [blond_haired_man]
 * @property {string} [blond_haired_person]
 * @property {string} [blond_haired_woman]
 * @property {string} [blonde_woman]
 * @property {string} [blossom]
 * @property {string} [blowfish]
 * @property {string} [blue_book]
 * @property {string} [blue_car]
 * @property {string} [blue_heart]
 * @property {string} [blue_square]
 * @property {string} [blueberries]
 * @property {string} [blush]
 * @property {string} [boar]
 * @property {string} [boat]
 * @property {string} [bolivia]
 * @property {string} [bomb]
 * @property {string} [bone]
 * @property {string} [book]
 * @property {string} [bookmark]
 * @property {string} [bookmark_tabs]
 * @property {string} [books]
 * @property {string} [boom]
 * @property {string} [boomerang]
 * @property {string} [boot]
 * @property {string} [bosnia_herzegovina]
 * @property {string} [botswana]
 * @property {string} [bouncing_ball_man]
 * @property {string} [bouncing_ball_person]
 * @property {string} [bouncing_ball_woman]
 * @property {string} [bouquet]
 * @property {string} [bouvet_island]
 * @property {string} [bow]
 * @property {string} [bow_and_arrow]
 * @property {string} [bowing_man]
 * @property {string} [bowing_woman]
 * @property {string} [bowl_with_spoon]
 * @property {string} [bowling]
 * @property {string} [bowtie]
 * @property {string} [boxing_glove]
 * @property {string} [boy]
 * @property {string} [brain]
 * @property {string} [brazil]
 * @property {string} [bread]
 * @property {string} [breast_feeding]
 * @property {string} [bricks]
 * @property {string} [bride_with_veil]
 * @property {string} [bridge_at_night]
 * @property {string} [briefcase]
 * @property {string} [british_indian_ocean_territory]
 * @property {string} [british_virgin_islands]
 * @property {string} [broccoli]
 * @property {string} [broken_heart]
 * @property {string} [broom]
 * @property {string} [brown_circle]
 * @property {string} [brown_heart]
 * @property {string} [brown_square]
 * @property {string} [brunei]
 * @property {string} [bubble_tea]
 * @property {string} [bucket]
 * @property {string} [bug]
 * @property {string} [building_construction]
 * @property {string} [bulb]
 * @property {string} [bulgaria]
 * @property {string} [bullettrain_front]
 * @property {string} [bullettrain_side]
 * @property {string} [burkina_faso]
 * @property {string} [burrito]
 * @property {string} [burundi]
 * @property {string} [bus]
 * @property {string} [business_suit_levitating]
 * @property {string} [busstop]
 * @property {string} [bust_in_silhouette]
 * @property {string} [busts_in_silhouette]
 * @property {string} [butter]
 * @property {string} [butterfly]
 * @property {string} [cactus]
 * @property {string} [cake]
 * @property {string} [calendar]
 * @property {string} [call_me_hand]
 * @property {string} [calling]
 * @property {string} [cambodia]
 * @property {string} [camel]
 * @property {string} [camera]
 * @property {string} [camera_flash]
 * @property {string} [cameroon]
 * @property {string} [camping]
 * @property {string} [canada]
 * @property {string} [canary_islands]
 * @property {string} [cancer]
 * @property {string} [candle]
 * @property {string} [candy]
 * @property {string} [canned_food]
 * @property {string} [canoe]
 * @property {string} [cape_verde]
 * @property {string} [capital_abcd]
 * @property {string} [capricorn]
 * @property {string} [car]
 * @property {string} [card_file_box]
 * @property {string} [card_index]
 * @property {string} [card_index_dividers]
 * @property {string} [caribbean_netherlands]
 * @property {string} [carousel_horse]
 * @property {string} [carpentry_saw]
 * @property {string} [carrot]
 * @property {string} [cartwheeling]
 * @property {string} [cat]
 * @property {string} [cat2]
 * @property {string} [cayman_islands]
 * @property {string} [cd]
 * @property {string} [central_african_republic]
 * @property {string} [ceuta_melilla]
 * @property {string} [chad]
 * @property {string} [chains]
 * @property {string} [chair]
 * @property {string} [champagne]
 * @property {string} [chart]
 * @property {string} [chart_with_downwards_trend]
 * @property {string} [chart_with_upwards_trend]
 * @property {string} [checkered_flag]
 * @property {string} [cheese]
 * @property {string} [cherries]
 * @property {string} [cherry_blossom]
 * @property {string} [chess_pawn]
 * @property {string} [chestnut]
 * @property {string} [chicken]
 * @property {string} [child]
 * @property {string} [children_crossing]
 * @property {string} [chile]
 * @property {string} [chipmunk]
 * @property {string} [chocolate_bar]
 * @property {string} [chopsticks]
 * @property {string} [christmas_island]
 * @property {string} [christmas_tree]
 * @property {string} [church]
 * @property {string} [cinema]
 * @property {string} [circus_tent]
 * @property {string} [city_sunrise]
 * @property {string} [city_sunset]
 * @property {string} [cityscape]
 * @property {string} [cl]
 * @property {string} [clamp]
 * @property {string} [clap]
 * @property {string} [clapper]
 * @property {string} [classical_building]
 * @property {string} [climbing]
 * @property {string} [climbing_man]
 * @property {string} [climbing_woman]
 * @property {string} [clinking_glasses]
 * @property {string} [clipboard]
 * @property {string} [clipperton_island]
 * @property {string} [clock1]
 * @property {string} [clock10]
 * @property {string} [clock1030]
 * @property {string} [clock11]
 * @property {string} [clock1130]
 * @property {string} [clock12]
 * @property {string} [clock1230]
 * @property {string} [clock130]
 * @property {string} [clock2]
 * @property {string} [clock230]
 * @property {string} [clock3]
 * @property {string} [clock330]
 * @property {string} [clock4]
 * @property {string} [clock430]
 * @property {string} [clock5]
 * @property {string} [clock530]
 * @property {string} [clock6]
 * @property {string} [clock630]
 * @property {string} [clock7]
 * @property {string} [clock730]
 * @property {string} [clock8]
 * @property {string} [clock830]
 * @property {string} [clock9]
 * @property {string} [clock930]
 * @property {string} [closed_book]
 * @property {string} [closed_lock_with_key]
 * @property {string} [closed_umbrella]
 * @property {string} [cloud]
 * @property {string} [cloud_with_lightning]
 * @property {string} [cloud_with_lightning_and_rain]
 * @property {string} [cloud_with_rain]
 * @property {string} [cloud_with_snow]
 * @property {string} [clown_face]
 * @property {string} [clubs]
 * @property {string} [cn]
 * @property {string} [coat]
 * @property {string} [cockroach]
 * @property {string} [cocktail]
 * @property {string} [coconut]
 * @property {string} [cocos_islands]
 * @property {string} [coffee]
 * @property {string} [coffin]
 * @property {string} [coin]
 * @property {string} [cold_face]
 * @property {string} [cold_sweat]
 * @property {string} [collision]
 * @property {string} [colombia]
 * @property {string} [comet]
 * @property {string} [comoros]
 * @property {string} [compass]
 * @property {string} [computer]
 * @property {string} [computer_mouse]
 * @property {string} [confetti_ball]
 * @property {string} [confounded]
 * @property {string} [confused]
 * @property {string} [congo_brazzaville]
 * @property {string} [congo_kinshasa]
 * @property {string} [congratulations]
 * @property {string} [construction]
 * @property {string} [construction_worker]
 * @property {string} [construction_worker_man]
 * @property {string} [construction_worker_woman]
 * @property {string} [control_knobs]
 * @property {string} [convenience_store]
 * @property {string} [cook]
 * @property {string} [cook_islands]
 * @property {string} [cookie]
 * @property {string} [cool]
 * @property {string} [cop]
 * @property {string} [copilot]
 * @property {string} [copyright]
 * @property {string} [corn]
 * @property {string} [costa_rica]
 * @property {string} [cote_divoire]
 * @property {string} [couch_and_lamp]
 * @property {string} [couple]
 * @property {string} [couple_with_heart]
 * @property {string} [couple_with_heart_man_man]
 * @property {string} [couple_with_heart_woman_man]
 * @property {string} [couple_with_heart_woman_woman]
 * @property {string} [couplekiss]
 * @property {string} [couplekiss_man_man]
 * @property {string} [couplekiss_man_woman]
 * @property {string} [couplekiss_woman_woman]
 * @property {string} [cow]
 * @property {string} [cow2]
 * @property {string} [cowboy_hat_face]
 * @property {string} [crab]
 * @property {string} [crayon]
 * @property {string} [credit_card]
 * @property {string} [crescent_moon]
 * @property {string} [cricket]
 * @property {string} [cricket_game]
 * @property {string} [croatia]
 * @property {string} [crocodile]
 * @property {string} [croissant]
 * @property {string} [crossed_fingers]
 * @property {string} [crossed_flags]
 * @property {string} [crossed_swords]
 * @property {string} [crown]
 * @property {string} [cry]
 * @property {string} [crying_cat_face]
 * @property {string} [crystal_ball]
 * @property {string} [cuba]
 * @property {string} [cucumber]
 * @property {string} [cup_with_straw]
 * @property {string} [cupcake]
 * @property {string} [cupid]
 * @property {string} [curacao]
 * @property {string} [curling_stone]
 * @property {string} [curly_haired_man]
 * @property {string} [curly_haired_woman]
 * @property {string} [curly_loop]
 * @property {string} [currency_exchange]
 * @property {string} [curry]
 * @property {string} [cursing_face]
 * @property {string} [custard]
 * @property {string} [customs]
 * @property {string} [cut_of_meat]
 * @property {string} [cyclone]
 * @property {string} [cyprus]
 * @property {string} [czech_republic]
 * @property {string} [dagger]
 * @property {string} [dancer]
 * @property {string} [dancers]
 * @property {string} [dancing_men]
 * @property {string} [dancing_women]
 * @property {string} [dango]
 * @property {string} [dark_sunglasses]
 * @property {string} [dart]
 * @property {string} [dash]
 * @property {string} [date]
 * @property {string} [de]
 * @property {string} [deaf_man]
 * @property {string} [deaf_person]
 * @property {string} [deaf_woman]
 * @property {string} [deciduous_tree]
 * @property {string} [deer]
 * @property {string} [denmark]
 * @property {string} [department_store]
 * @property {string} [dependabot]
 * @property {string} [derelict_house]
 * @property {string} [desert]
 * @property {string} [desert_island]
 * @property {string} [desktop_computer]
 * @property {string} [detective]
 * @property {string} [diamond_shape_with_a_dot_inside]
 * @property {string} [diamonds]
 * @property {string} [diego_garcia]
 * @property {string} [disappointed]
 * @property {string} [disappointed_relieved]
 * @property {string} [disguised_face]
 * @property {string} [diving_mask]
 * @property {string} [diya_lamp]
 * @property {string} [dizzy]
 * @property {string} [dizzy_face]
 * @property {string} [djibouti]
 * @property {string} [dna]
 * @property {string} [do_not_litter]
 * @property {string} [dodo]
 * @property {string} [dog]
 * @property {string} [dog2]
 * @property {string} [dollar]
 * @property {string} [dolls]
 * @property {string} [dolphin]
 * @property {string} [dominica]
 * @property {string} [dominican_republic]
 * @property {string} [door]
 * @property {string} [doughnut]
 * @property {string} [dove]
 * @property {string} [dragon]
 * @property {string} [dragon_face]
 * @property {string} [dress]
 * @property {string} [dromedary_camel]
 * @property {string} [drooling_face]
 * @property {string} [drop_of_blood]
 * @property {string} [droplet]
 * @property {string} [drum]
 * @property {string} [duck]
 * @property {string} [dumpling]
 * @property {string} [dvd]
 * @property {string} [eagle]
 * @property {string} [ear]
 * @property {string} [ear_of_rice]
 * @property {string} [ear_with_hearing_aid]
 * @property {string} [earth_africa]
 * @property {string} [earth_americas]
 * @property {string} [earth_asia]
 * @property {string} [ecuador]
 * @property {string} [egg]
 * @property {string} [eggplant]
 * @property {string} [egypt]
 * @property {string} [eight]
 * @property {string} [eight_pointed_black_star]
 * @property {string} [eight_spoked_asterisk]
 * @property {string} [eject_button]
 * @property {string} [el_salvador]
 * @property {string} [electric_plug]
 * @property {string} [electron]
 * @property {string} [elephant]
 * @property {string} [elevator]
 * @property {string} [elf]
 * @property {string} [elf_man]
 * @property {string} [elf_woman]
 * @property {string} [email]
 * @property {string} [end]
 * @property {string} [england]
 * @property {string} [envelope]
 * @property {string} [envelope_with_arrow]
 * @property {string} [equatorial_guinea]
 * @property {string} [eritrea]
 * @property {string} [es]
 * @property {string} [estonia]
 * @property {string} [ethiopia]
 * @property {string} [eu]
 * @property {string} [euro]
 * @property {string} [european_castle]
 * @property {string} [european_post_office]
 * @property {string} [european_union]
 * @property {string} [evergreen_tree]
 * @property {string} [exclamation]
 * @property {string} [exploding_head]
 * @property {string} [expressionless]
 * @property {string} [eye]
 * @property {string} [eye_speech_bubble]
 * @property {string} [eyeglasses]
 * @property {string} [eyes]
 * @property {string} [face_exhaling]
 * @property {string} [face_in_clouds]
 * @property {string} [face_with_head_bandage]
 * @property {string} [face_with_spiral_eyes]
 * @property {string} [face_with_thermometer]
 * @property {string} [facepalm]
 * @property {string} [facepunch]
 * @property {string} [factory]
 * @property {string} [factory_worker]
 * @property {string} [fairy]
 * @property {string} [fairy_man]
 * @property {string} [fairy_woman]
 * @property {string} [falafel]
 * @property {string} [falkland_islands]
 * @property {string} [fallen_leaf]
 * @property {string} [family]
 * @property {string} [family_man_boy]
 * @property {string} [family_man_boy_boy]
 * @property {string} [family_man_girl]
 * @property {string} [family_man_girl_boy]
 * @property {string} [family_man_girl_girl]
 * @property {string} [family_man_man_boy]
 * @property {string} [family_man_man_boy_boy]
 * @property {string} [family_man_man_girl]
 * @property {string} [family_man_man_girl_boy]
 * @property {string} [family_man_man_girl_girl]
 * @property {string} [family_man_woman_boy]
 * @property {string} [family_man_woman_boy_boy]
 * @property {string} [family_man_woman_girl]
 * @property {string} [family_man_woman_girl_boy]
 * @property {string} [family_man_woman_girl_girl]
 * @property {string} [family_woman_boy]
 * @property {string} [family_woman_boy_boy]
 * @property {string} [family_woman_girl]
 * @property {string} [family_woman_girl_boy]
 * @property {string} [family_woman_girl_girl]
 * @property {string} [family_woman_woman_boy]
 * @property {string} [family_woman_woman_boy_boy]
 * @property {string} [family_woman_woman_girl]
 * @property {string} [family_woman_woman_girl_boy]
 * @property {string} [family_woman_woman_girl_girl]
 * @property {string} [farmer]
 * @property {string} [faroe_islands]
 * @property {string} [fast_forward]
 * @property {string} [fax]
 * @property {string} [fearful]
 * @property {string} [feather]
 * @property {string} [feelsgood]
 * @property {string} [feet]
 * @property {string} [female_detective]
 * @property {string} [female_sign]
 * @property {string} [ferris_wheel]
 * @property {string} [ferry]
 * @property {string} [field_hockey]
 * @property {string} [fiji]
 * @property {string} [file_cabinet]
 * @property {string} [file_folder]
 * @property {string} [film_projector]
 * @property {string} [film_strip]
 * @property {string} [finland]
 * @property {string} [finnadie]
 * @property {string} [fire]
 * @property {string} [fire_engine]
 * @property {string} [fire_extinguisher]
 * @property {string} [firecracker]
 * @property {string} [firefighter]
 * @property {string} [fireworks]
 * @property {string} [first_quarter_moon]
 * @property {string} [first_quarter_moon_with_face]
 * @property {string} [fish]
 * @property {string} [fish_cake]
 * @property {string} [fishing_pole_and_fish]
 * @property {string} [fishsticks]
 * @property {string} [fist]
 * @property {string} [fist_left]
 * @property {string} [fist_oncoming]
 * @property {string} [fist_raised]
 * @property {string} [fist_right]
 * @property {string} [five]
 * @property {string} [flags]
 * @property {string} [flamingo]
 * @property {string} [flashlight]
 * @property {string} [flat_shoe]
 * @property {string} [flatbread]
 * @property {string} [fleur_de_lis]
 * @property {string} [flight_arrival]
 * @property {string} [flight_departure]
 * @property {string} [flipper]
 * @property {string} [floppy_disk]
 * @property {string} [flower_playing_cards]
 * @property {string} [flushed]
 * @property {string} [fly]
 * @property {string} [flying_disc]
 * @property {string} [flying_saucer]
 * @property {string} [fog]
 * @property {string} [foggy]
 * @property {string} [fondue]
 * @property {string} [foot]
 * @property {string} [football]
 * @property {string} [footprints]
 * @property {string} [fork_and_knife]
 * @property {string} [fortune_cookie]
 * @property {string} [fountain]
 * @property {string} [fountain_pen]
 * @property {string} [four]
 * @property {string} [four_leaf_clover]
 * @property {string} [fox_face]
 * @property {string} [fr]
 * @property {string} [framed_picture]
 * @property {string} [free]
 * @property {string} [french_guiana]
 * @property {string} [french_polynesia]
 * @property {string} [french_southern_territories]
 * @property {string} [fried_egg]
 * @property {string} [fried_shrimp]
 * @property {string} [fries]
 * @property {string} [frog]
 * @property {string} [frowning]
 * @property {string} [frowning_face]
 * @property {string} [frowning_man]
 * @property {string} [frowning_person]
 * @property {string} [frowning_woman]
 * @property {string} [fu]
 * @property {string} [fuelpump]
 * @property {string} [full_moon]
 * @property {string} [full_moon_with_face]
 * @property {string} [funeral_urn]
 * @property {string} [gabon]
 * @property {string} [gambia]
 * @property {string} [game_die]
 * @property {string} [garlic]
 * @property {string} [gb]
 * @property {string} [gear]
 * @property {string} [gem]
 * @property {string} [gemini]
 * @property {string} [genie]
 * @property {string} [genie_man]
 * @property {string} [genie_woman]
 * @property {string} [georgia]
 * @property {string} [ghana]
 * @property {string} [ghost]
 * @property {string} [gibraltar]
 * @property {string} [gift]
 * @property {string} [gift_heart]
 * @property {string} [giraffe]
 * @property {string} [girl]
 * @property {string} [globe_with_meridians]
 * @property {string} [gloves]
 * @property {string} [goal_net]
 * @property {string} [goat]
 * @property {string} [goberserk]
 * @property {string} [godmode]
 * @property {string} [goggles]
 * @property {string} [golf]
 * @property {string} [golfing]
 * @property {string} [golfing_man]
 * @property {string} [golfing_woman]
 * @property {string} [gorilla]
 * @property {string} [grapes]
 * @property {string} [greece]
 * @property {string} [green_apple]
 * @property {string} [green_book]
 * @property {string} [green_circle]
 * @property {string} [green_heart]
 * @property {string} [green_salad]
 * @property {string} [green_square]
 * @property {string} [greenland]
 * @property {string} [grenada]
 * @property {string} [grey_exclamation]
 * @property {string} [grey_question]
 * @property {string} [grimacing]
 * @property {string} [grin]
 * @property {string} [grinning]
 * @property {string} [guadeloupe]
 * @property {string} [guam]
 * @property {string} [guard]
 * @property {string} [guardsman]
 * @property {string} [guardswoman]
 * @property {string} [guatemala]
 * @property {string} [guernsey]
 * @property {string} [guide_dog]
 * @property {string} [guinea]
 * @property {string} [guinea_bissau]
 * @property {string} [guitar]
 * @property {string} [gun]
 * @property {string} [guyana]
 * @property {string} [haircut]
 * @property {string} [haircut_man]
 * @property {string} [haircut_woman]
 * @property {string} [haiti]
 * @property {string} [hamburger]
 * @property {string} [hammer]
 * @property {string} [hammer_and_pick]
 * @property {string} [hammer_and_wrench]
 * @property {string} [hamster]
 * @property {string} [hand]
 * @property {string} [hand_over_mouth]
 * @property {string} [handbag]
 * @property {string} [handball_person]
 * @property {string} [handshake]
 * @property {string} [hankey]
 * @property {string} [hash]
 * @property {string} [hatched_chick]
 * @property {string} [hatching_chick]
 * @property {string} [headphones]
 * @property {string} [headstone]
 * @property {string} [health_worker]
 * @property {string} [hear_no_evil]
 * @property {string} [heard_mcdonald_islands]
 * @property {string} [heart]
 * @property {string} [heart_decoration]
 * @property {string} [heart_eyes]
 * @property {string} [heart_eyes_cat]
 * @property {string} [heart_on_fire]
 * @property {string} [heartbeat]
 * @property {string} [heartpulse]
 * @property {string} [hearts]
 * @property {string} [heavy_check_mark]
 * @property {string} [heavy_division_sign]
 * @property {string} [heavy_dollar_sign]
 * @property {string} [heavy_exclamation_mark]
 * @property {string} [heavy_heart_exclamation]
 * @property {string} [heavy_minus_sign]
 * @property {string} [heavy_multiplication_x]
 * @property {string} [heavy_plus_sign]
 * @property {string} [hedgehog]
 * @property {string} [helicopter]
 * @property {string} [herb]
 * @property {string} [hibiscus]
 * @property {string} [high_brightness]
 * @property {string} [high_heel]
 * @property {string} [hiking_boot]
 * @property {string} [hindu_temple]
 * @property {string} [hippopotamus]
 * @property {string} [hocho]
 * @property {string} [hole]
 * @property {string} [honduras]
 * @property {string} [honey_pot]
 * @property {string} [honeybee]
 * @property {string} [hong_kong]
 * @property {string} [hook]
 * @property {string} [horse]
 * @property {string} [horse_racing]
 * @property {string} [hospital]
 * @property {string} [hot_face]
 * @property {string} [hot_pepper]
 * @property {string} [hotdog]
 * @property {string} [hotel]
 * @property {string} [hotsprings]
 * @property {string} [hourglass]
 * @property {string} [hourglass_flowing_sand]
 * @property {string} [house]
 * @property {string} [house_with_garden]
 * @property {string} [houses]
 * @property {string} [hugs]
 * @property {string} [hungary]
 * @property {string} [hurtrealbad]
 * @property {string} [hushed]
 * @property {string} [hut]
 * @property {string} [ice_cream]
 * @property {string} [ice_cube]
 * @property {string} [ice_hockey]
 * @property {string} [ice_skate]
 * @property {string} [icecream]
 * @property {string} [iceland]
 * @property {string} id
 * @property {string} [ideograph_advantage]
 * @property {string} [imp]
 * @property {string} [inbox_tray]
 * @property {string} [incoming_envelope]
 * @property {string} [india]
 * @property {string} [indonesia]
 * @property {string} [infinity]
 * @property {string} [information_desk_person]
 * @property {string} [information_source]
 * @property {string} [innocent]
 * @property {string} [interrobang]
 * @property {string} [iphone]
 * @property {string} [iran]
 * @property {string} [iraq]
 * @property {string} [ireland]
 * @property {string} [isle_of_man]
 * @property {string} [israel]
 * @property {string} [it]
 * @property {string} [izakaya_lantern]
 * @property {string} [jack_o_lantern]
 * @property {string} [jamaica]
 * @property {string} [japan]
 * @property {string} [japanese_castle]
 * @property {string} [japanese_goblin]
 * @property {string} [japanese_ogre]
 * @property {string} [jeans]
 * @property {string} [jersey]
 * @property {string} [jigsaw]
 * @property {string} [jordan]
 * @property {string} [joy]
 * @property {string} [joy_cat]
 * @property {string} [joystick]
 * @property {string} [jp]
 * @property {string} [judge]
 * @property {string} [juggling_person]
 * @property {string} [kangaroo]
 * @property {string} [kazakhstan]
 * @property {string} [kenya]
 * @property {string} [key]
 * @property {string} [keyboard]
 * @property {string} [keycap_ten]
 * @property {string} [kick_scooter]
 * @property {string} [kimono]
 * @property {string} [kiribati]
 * @property {string} [kiss]
 * @property {string} [kissing]
 * @property {string} [kissing_cat]
 * @property {string} [kissing_closed_eyes]
 * @property {string} [kissing_heart]
 * @property {string} [kissing_smiling_eyes]
 * @property {string} [kite]
 * @property {string} [kiwi_fruit]
 * @property {string} [kneeling_man]
 * @property {string} [kneeling_person]
 * @property {string} [kneeling_woman]
 * @property {string} [knife]
 * @property {string} [knot]
 * @property {string} [koala]
 * @property {string} [koko]
 * @property {string} [kosovo]
 * @property {string} [kr]
 * @property {string} [kuwait]
 * @property {string} [kyrgyzstan]
 * @property {string} [lab_coat]
 * @property {string} [label]
 * @property {string} [lacrosse]
 * @property {string} [ladder]
 * @property {string} [lady_beetle]
 * @property {string} [lantern]
 * @property {string} [laos]
 * @property {string} [large_blue_circle]
 * @property {string} [large_blue_diamond]
 * @property {string} [large_orange_diamond]
 * @property {string} [last_quarter_moon]
 * @property {string} [last_quarter_moon_with_face]
 * @property {string} [latin_cross]
 * @property {string} [latvia]
 * @property {string} [laughing]
 * @property {string} [leafy_green]
 * @property {string} [leaves]
 * @property {string} [lebanon]
 * @property {string} [ledger]
 * @property {string} [left_luggage]
 * @property {string} [left_right_arrow]
 * @property {string} [left_speech_bubble]
 * @property {string} [leftwards_arrow_with_hook]
 * @property {string} [leg]
 * @property {string} [lemon]
 * @property {string} [leo]
 * @property {string} [leopard]
 * @property {string} [lesotho]
 * @property {string} [level_slider]
 * @property {string} [liberia]
 * @property {string} [libra]
 * @property {string} [libya]
 * @property {string} [liechtenstein]
 * @property {string} [light_rail]
 * @property {string} [link]
 * @property {string} [lion]
 * @property {string} [lips]
 * @property {string} [lipstick]
 * @property {string} [lithuania]
 * @property {string} [lizard]
 * @property {string} [llama]
 * @property {string} [lobster]
 * @property {string} [lock]
 * @property {string} [lock_with_ink_pen]
 * @property {string} [lollipop]
 * @property {string} [long_drum]
 * @property {string} [loop]
 * @property {string} [lotion_bottle]
 * @property {string} [lotus_position]
 * @property {string} [lotus_position_man]
 * @property {string} [lotus_position_woman]
 * @property {string} [loud_sound]
 * @property {string} [loudspeaker]
 * @property {string} [love_hotel]
 * @property {string} [love_letter]
 * @property {string} [love_you_gesture]
 * @property {string} [low_brightness]
 * @property {string} [luggage]
 * @property {string} [lungs]
 * @property {string} [luxembourg]
 * @property {string} [lying_face]
 * @property {string} [m]
 * @property {string} [macau]
 * @property {string} [macedonia]
 * @property {string} [madagascar]
 * @property {string} [mag]
 * @property {string} [mag_right]
 * @property {string} [mage]
 * @property {string} [mage_man]
 * @property {string} [mage_woman]
 * @property {string} [magic_wand]
 * @property {string} [magnet]
 * @property {string} [mahjong]
 * @property {string} [mailbox]
 * @property {string} [mailbox_closed]
 * @property {string} [mailbox_with_mail]
 * @property {string} [mailbox_with_no_mail]
 * @property {string} [malawi]
 * @property {string} [malaysia]
 * @property {string} [maldives]
 * @property {string} [male_detective]
 * @property {string} [male_sign]
 * @property {string} [mali]
 * @property {string} [malta]
 * @property {string} [mammoth]
 * @property {string} [man]
 * @property {string} [man_artist]
 * @property {string} [man_astronaut]
 * @property {string} [man_beard]
 * @property {string} [man_cartwheeling]
 * @property {string} [man_cook]
 * @property {string} [man_dancing]
 * @property {string} [man_facepalming]
 * @property {string} [man_factory_worker]
 * @property {string} [man_farmer]
 * @property {string} [man_feeding_baby]
 * @property {string} [man_firefighter]
 * @property {string} [man_health_worker]
 * @property {string} [man_in_manual_wheelchair]
 * @property {string} [man_in_motorized_wheelchair]
 * @property {string} [man_in_tuxedo]
 * @property {string} [man_judge]
 * @property {string} [man_juggling]
 * @property {string} [man_mechanic]
 * @property {string} [man_office_worker]
 * @property {string} [man_pilot]
 * @property {string} [man_playing_handball]
 * @property {string} [man_playing_water_polo]
 * @property {string} [man_scientist]
 * @property {string} [man_shrugging]
 * @property {string} [man_singer]
 * @property {string} [man_student]
 * @property {string} [man_teacher]
 * @property {string} [man_technologist]
 * @property {string} [man_with_gua_pi_mao]
 * @property {string} [man_with_probing_cane]
 * @property {string} [man_with_turban]
 * @property {string} [man_with_veil]
 * @property {string} [mandarin]
 * @property {string} [mango]
 * @property {string} [mans_shoe]
 * @property {string} [mantelpiece_clock]
 * @property {string} [manual_wheelchair]
 * @property {string} [maple_leaf]
 * @property {string} [marshall_islands]
 * @property {string} [martial_arts_uniform]
 * @property {string} [martinique]
 * @property {string} [mask]
 * @property {string} [massage]
 * @property {string} [massage_man]
 * @property {string} [massage_woman]
 * @property {string} [mate]
 * @property {string} [mauritania]
 * @property {string} [mauritius]
 * @property {string} [mayotte]
 * @property {string} [meat_on_bone]
 * @property {string} [mechanic]
 * @property {string} [mechanical_arm]
 * @property {string} [mechanical_leg]
 * @property {string} [medal_military]
 * @property {string} [medal_sports]
 * @property {string} [medical_symbol]
 * @property {string} [mega]
 * @property {string} [melon]
 * @property {string} [memo]
 * @property {string} [men_wrestling]
 * @property {string} [mending_heart]
 * @property {string} [menorah]
 * @property {string} [mens]
 * @property {string} [mermaid]
 * @property {string} [merman]
 * @property {string} [merperson]
 * @property {string} [metal]
 * @property {string} [metro]
 * @property {string} [mexico]
 * @property {string} [microbe]
 * @property {string} [micronesia]
 * @property {string} [microphone]
 * @property {string} [microscope]
 * @property {string} [middle_finger]
 * @property {string} [military_helmet]
 * @property {string} [milk_glass]
 * @property {string} [milky_way]
 * @property {string} [minibus]
 * @property {string} [minidisc]
 * @property {string} [mirror]
 * @property {string} [mobile_phone_off]
 * @property {string} [moldova]
 * @property {string} [monaco]
 * @property {string} [money_mouth_face]
 * @property {string} [money_with_wings]
 * @property {string} [moneybag]
 * @property {string} [mongolia]
 * @property {string} [monkey]
 * @property {string} [monkey_face]
 * @property {string} [monocle_face]
 * @property {string} [monorail]
 * @property {string} [montenegro]
 * @property {string} [montserrat]
 * @property {string} [moon]
 * @property {string} [moon_cake]
 * @property {string} [morocco]
 * @property {string} [mortar_board]
 * @property {string} [mosque]
 * @property {string} [mosquito]
 * @property {string} [motor_boat]
 * @property {string} [motor_scooter]
 * @property {string} [motorcycle]
 * @property {string} [motorized_wheelchair]
 * @property {string} [motorway]
 * @property {string} [mount_fuji]
 * @property {string} [mountain]
 * @property {string} [mountain_bicyclist]
 * @property {string} [mountain_biking_man]
 * @property {string} [mountain_biking_woman]
 * @property {string} [mountain_cableway]
 * @property {string} [mountain_railway]
 * @property {string} [mountain_snow]
 * @property {string} [mouse]
 * @property {string} [mouse2]
 * @property {string} [mouse_trap]
 * @property {string} [movie_camera]
 * @property {string} [moyai]
 * @property {string} [mozambique]
 * @property {string} [mrs_claus]
 * @property {string} [muscle]
 * @property {string} [mushroom]
 * @property {string} [musical_keyboard]
 * @property {string} [musical_note]
 * @property {string} [musical_score]
 * @property {string} [mute]
 * @property {string} [mx_claus]
 * @property {string} [myanmar]
 * @property {string} [nail_care]
 * @property {string} [name_badge]
 * @property {string} [namibia]
 * @property {string} [national_park]
 * @property {string} [nauru]
 * @property {string} [nauseated_face]
 * @property {string} [nazar_amulet]
 * @property {string} [neckbeard]
 * @property {string} [necktie]
 * @property {string} [negative_squared_cross_mark]
 * @property {string} [nepal]
 * @property {string} [nerd_face]
 * @property {string} [nesting_dolls]
 * @property {string} [netherlands]
 * @property {string} [neutral_face]
 * @property {string} [new]
 * @property {string} [new_caledonia]
 * @property {string} [new_moon]
 * @property {string} [new_moon_with_face]
 * @property {string} [new_zealand]
 * @property {string} [newspaper]
 * @property {string} [newspaper_roll]
 * @property {string} [next_track_button]
 * @property {string} [ng]
 * @property {string} [ng_man]
 * @property {string} [ng_woman]
 * @property {string} [nicaragua]
 * @property {string} [niger]
 * @property {string} [nigeria]
 * @property {string} [night_with_stars]
 * @property {string} [nine]
 * @property {string} [ninja]
 * @property {string} [niue]
 * @property {string} [no_bell]
 * @property {string} [no_bicycles]
 * @property {string} [no_entry]
 * @property {string} [no_entry_sign]
 * @property {string} [no_good]
 * @property {string} [no_good_man]
 * @property {string} [no_good_woman]
 * @property {string} [no_mobile_phones]
 * @property {string} [no_mouth]
 * @property {string} [no_pedestrians]
 * @property {string} [no_smoking]
 * @property {string} [nonpotable_water]
 * @property {string} [norfolk_island]
 * @property {string} [north_korea]
 * @property {string} [northern_mariana_islands]
 * @property {string} [norway]
 * @property {string} [nose]
 * @property {string} [notebook]
 * @property {string} [notebook_with_decorative_cover]
 * @property {string} [notes]
 * @property {string} [nut_and_bolt]
 * @property {string} [o]
 * @property {string} [o2]
 * @property {string} [ocean]
 * @property {string} [octocat]
 * @property {string} [octopus]
 * @property {string} [oden]
 * @property {string} [office]
 * @property {string} [office_worker]
 * @property {string} [oil_drum]
 * @property {string} [ok]
 * @property {string} [ok_hand]
 * @property {string} [ok_man]
 * @property {string} [ok_person]
 * @property {string} [ok_woman]
 * @property {string} [old_key]
 * @property {string} [older_adult]
 * @property {string} [older_man]
 * @property {string} [older_woman]
 * @property {string} [olive]
 * @property {string} [om]
 * @property {string} [oman]
 * @property {string} [on]
 * @property {string} [oncoming_automobile]
 * @property {string} [oncoming_bus]
 * @property {string} [oncoming_police_car]
 * @property {string} [oncoming_taxi]
 * @property {string} [one]
 * @property {string} [one_piece_swimsuit]
 * @property {string} [onion]
 * @property {string} [open_book]
 * @property {string} [open_file_folder]
 * @property {string} [open_hands]
 * @property {string} [open_mouth]
 * @property {string} [open_umbrella]
 * @property {string} [ophiuchus]
 * @property {string} [orange]
 * @property {string} [orange_book]
 * @property {string} [orange_circle]
 * @property {string} [orange_heart]
 * @property {string} [orange_square]
 * @property {string} [orangutan]
 * @property {string} [orthodox_cross]
 * @property {string} [otter]
 * @property {string} [outbox_tray]
 * @property {string} [owl]
 * @property {string} [ox]
 * @property {string} [oyster]
 * @property {string} [package]
 * @property {string} [page_facing_up]
 * @property {string} [page_with_curl]
 * @property {string} [pager]
 * @property {string} [paintbrush]
 * @property {string} [pakistan]
 * @property {string} [palau]
 * @property {string} [palestinian_territories]
 * @property {string} [palm_tree]
 * @property {string} [palms_up_together]
 * @property {string} [panama]
 * @property {string} [pancakes]
 * @property {string} [panda_face]
 * @property {string} [paperclip]
 * @property {string} [paperclips]
 * @property {string} [papua_new_guinea]
 * @property {string} [parachute]
 * @property {string} [paraguay]
 * @property {string} [parasol_on_ground]
 * @property {string} [parking]
 * @property {string} [parrot]
 * @property {string} [part_alternation_mark]
 * @property {string} [partly_sunny]
 * @property {string} [partying_face]
 * @property {string} [passenger_ship]
 * @property {string} [passport_control]
 * @property {string} [pause_button]
 * @property {string} [paw_prints]
 * @property {string} [peace_symbol]
 * @property {string} [peach]
 * @property {string} [peacock]
 * @property {string} [peanuts]
 * @property {string} [pear]
 * @property {string} [pen]
 * @property {string} [pencil]
 * @property {string} [pencil2]
 * @property {string} [penguin]
 * @property {string} [pensive]
 * @property {string} [people_holding_hands]
 * @property {string} [people_hugging]
 * @property {string} [performing_arts]
 * @property {string} [persevere]
 * @property {string} [person_bald]
 * @property {string} [person_curly_hair]
 * @property {string} [person_feeding_baby]
 * @property {string} [person_fencing]
 * @property {string} [person_in_manual_wheelchair]
 * @property {string} [person_in_motorized_wheelchair]
 * @property {string} [person_in_tuxedo]
 * @property {string} [person_red_hair]
 * @property {string} [person_white_hair]
 * @property {string} [person_with_probing_cane]
 * @property {string} [person_with_turban]
 * @property {string} [person_with_veil]
 * @property {string} [peru]
 * @property {string} [petri_dish]
 * @property {string} [philippines]
 * @property {string} [phone]
 * @property {string} [pick]
 * @property {string} [pickup_truck]
 * @property {string} [pie]
 * @property {string} [pig]
 * @property {string} [pig2]
 * @property {string} [pig_nose]
 * @property {string} [pill]
 * @property {string} [pilot]
 * @property {string} [pinata]
 * @property {string} [pinched_fingers]
 * @property {string} [pinching_hand]
 * @property {string} [pineapple]
 * @property {string} [ping_pong]
 * @property {string} [pirate_flag]
 * @property {string} [pisces]
 * @property {string} [pitcairn_islands]
 * @property {string} [pizza]
 * @property {string} [placard]
 * @property {string} [place_of_worship]
 * @property {string} [plate_with_cutlery]
 * @property {string} [play_or_pause_button]
 * @property {string} [pleading_face]
 * @property {string} [plunger]
 * @property {string} [point_down]
 * @property {string} [point_left]
 * @property {string} [point_right]
 * @property {string} [point_up]
 * @property {string} [point_up_2]
 * @property {string} [poland]
 * @property {string} [polar_bear]
 * @property {string} [police_car]
 * @property {string} [police_officer]
 * @property {string} [policeman]
 * @property {string} [policewoman]
 * @property {string} [poodle]
 * @property {string} [poop]
 * @property {string} [popcorn]
 * @property {string} [portugal]
 * @property {string} [post_office]
 * @property {string} [postal_horn]
 * @property {string} [postbox]
 * @property {string} [potable_water]
 * @property {string} [potato]
 * @property {string} [potted_plant]
 * @property {string} [pouch]
 * @property {string} [poultry_leg]
 * @property {string} [pound]
 * @property {string} [pout]
 * @property {string} [pouting_cat]
 * @property {string} [pouting_face]
 * @property {string} [pouting_man]
 * @property {string} [pouting_woman]
 * @property {string} [pray]
 * @property {string} [prayer_beads]
 * @property {string} [pregnant_woman]
 * @property {string} [pretzel]
 * @property {string} [previous_track_button]
 * @property {string} [prince]
 * @property {string} [princess]
 * @property {string} [printer]
 * @property {string} [probing_cane]
 * @property {string} [puerto_rico]
 * @property {string} [punch]
 * @property {string} [purple_circle]
 * @property {string} [purple_heart]
 * @property {string} [purple_square]
 * @property {string} [purse]
 * @property {string} [pushpin]
 * @property {string} [put_litter_in_its_place]
 * @property {string} [qatar]
 * @property {string} [question]
 * @property {string} [rabbit]
 * @property {string} [rabbit2]
 * @property {string} [raccoon]
 * @property {string} [racehorse]
 * @property {string} [racing_car]
 * @property {string} [radio]
 * @property {string} [radio_button]
 * @property {string} [radioactive]
 * @property {string} [rage]
 * @property {string} [rage1]
 * @property {string} [rage2]
 * @property {string} [rage3]
 * @property {string} [rage4]
 * @property {string} [railway_car]
 * @property {string} [railway_track]
 * @property {string} [rainbow]
 * @property {string} [rainbow_flag]
 * @property {string} [raised_back_of_hand]
 * @property {string} [raised_eyebrow]
 * @property {string} [raised_hand]
 * @property {string} [raised_hand_with_fingers_splayed]
 * @property {string} [raised_hands]
 * @property {string} [raising_hand]
 * @property {string} [raising_hand_man]
 * @property {string} [raising_hand_woman]
 * @property {string} [ram]
 * @property {string} [ramen]
 * @property {string} [rat]
 * @property {string} [razor]
 * @property {string} [receipt]
 * @property {string} [record_button]
 * @property {string} [recycle]
 * @property {string} [red_car]
 * @property {string} [red_circle]
 * @property {string} [red_envelope]
 * @property {string} [red_haired_man]
 * @property {string} [red_haired_woman]
 * @property {string} [red_square]
 * @property {string} [registered]
 * @property {string} [relaxed]
 * @property {string} [relieved]
 * @property {string} [reminder_ribbon]
 * @property {string} [repeat]
 * @property {string} [repeat_one]
 * @property {string} [rescue_worker_helmet]
 * @property {string} [restroom]
 * @property {string} [reunion]
 * @property {string} [revolving_hearts]
 * @property {string} [rewind]
 * @property {string} [rhinoceros]
 * @property {string} [ribbon]
 * @property {string} [rice]
 * @property {string} [rice_ball]
 * @property {string} [rice_cracker]
 * @property {string} [rice_scene]
 * @property {string} [right_anger_bubble]
 * @property {string} [ring]
 * @property {string} [ringed_planet]
 * @property {string} [robot]
 * @property {string} [rock]
 * @property {string} [rocket]
 * @property {string} [rofl]
 * @property {string} [roll_eyes]
 * @property {string} [roll_of_paper]
 * @property {string} [roller_coaster]
 * @property {string} [roller_skate]
 * @property {string} [romania]
 * @property {string} [rooster]
 * @property {string} [rose]
 * @property {string} [rosette]
 * @property {string} [rotating_light]
 * @property {string} [round_pushpin]
 * @property {string} [rowboat]
 * @property {string} [rowing_man]
 * @property {string} [rowing_woman]
 * @property {string} [ru]
 * @property {string} [rugby_football]
 * @property {string} [runner]
 * @property {string} [running]
 * @property {string} [running_man]
 * @property {string} [running_shirt_with_sash]
 * @property {string} [running_woman]
 * @property {string} [rwanda]
 * @property {string} [sa]
 * @property {string} [safety_pin]
 * @property {string} [safety_vest]
 * @property {string} [sagittarius]
 * @property {string} [sailboat]
 * @property {string} [sake]
 * @property {string} [salt]
 * @property {string} [samoa]
 * @property {string} [san_marino]
 * @property {string} [sandal]
 * @property {string} [sandwich]
 * @property {string} [santa]
 * @property {string} [sao_tome_principe]
 * @property {string} [sari]
 * @property {string} [sassy_man]
 * @property {string} [sassy_woman]
 * @property {string} [satellite]
 * @property {string} [satisfied]
 * @property {string} [saudi_arabia]
 * @property {string} [sauna_man]
 * @property {string} [sauna_person]
 * @property {string} [sauna_woman]
 * @property {string} [sauropod]
 * @property {string} [saxophone]
 * @property {string} [scarf]
 * @property {string} [school]
 * @property {string} [school_satchel]
 * @property {string} [scientist]
 * @property {string} [scissors]
 * @property {string} [scorpion]
 * @property {string} [scorpius]
 * @property {string} [scotland]
 * @property {string} [scream]
 * @property {string} [scream_cat]
 * @property {string} [screwdriver]
 * @property {string} [scroll]
 * @property {string} [seal]
 * @property {string} [seat]
 * @property {string} [secret]
 * @property {string} [see_no_evil]
 * @property {string} [seedling]
 * @property {string} [selfie]
 * @property {string} [senegal]
 * @property {string} [serbia]
 * @property {string} [service_dog]
 * @property {string} [seven]
 * @property {string} [sewing_needle]
 * @property {string} [seychelles]
 * @property {string} [shallow_pan_of_food]
 * @property {string} [shamrock]
 * @property {string} [shark]
 * @property {string} [shaved_ice]
 * @property {string} [sheep]
 * @property {string} [shell]
 * @property {string} [shield]
 * @property {string} [shinto_shrine]
 * @property {string} [ship]
 * @property {string} [shipit]
 * @property {string} [shirt]
 * @property {string} [shoe]
 * @property {string} [shopping]
 * @property {string} [shopping_cart]
 * @property {string} [shorts]
 * @property {string} [shower]
 * @property {string} [shrimp]
 * @property {string} [shrug]
 * @property {string} [shushing_face]
 * @property {string} [sierra_leone]
 * @property {string} [signal_strength]
 * @property {string} [singapore]
 * @property {string} [singer]
 * @property {string} [sint_maarten]
 * @property {string} [six]
 * @property {string} [six_pointed_star]
 * @property {string} [skateboard]
 * @property {string} [ski]
 * @property {string} [skier]
 * @property {string} [skull]
 * @property {string} [skull_and_crossbones]
 * @property {string} [skunk]
 * @property {string} [sled]
 * @property {string} [sleeping]
 * @property {string} [sleeping_bed]
 * @property {string} [sleepy]
 * @property {string} [slightly_frowning_face]
 * @property {string} [slightly_smiling_face]
 * @property {string} [slot_machine]
 * @property {string} [sloth]
 * @property {string} [slovakia]
 * @property {string} [slovenia]
 * @property {string} [small_airplane]
 * @property {string} [small_blue_diamond]
 * @property {string} [small_orange_diamond]
 * @property {string} [small_red_triangle]
 * @property {string} [small_red_triangle_down]
 * @property {string} [smile]
 * @property {string} [smile_cat]
 * @property {string} [smiley]
 * @property {string} [smiley_cat]
 * @property {string} [smiling_face_with_tear]
 * @property {string} [smiling_face_with_three_hearts]
 * @property {string} [smiling_imp]
 * @property {string} [smirk]
 * @property {string} [smirk_cat]
 * @property {string} [smoking]
 * @property {string} [snail]
 * @property {string} [snake]
 * @property {string} [sneezing_face]
 * @property {string} [snowboarder]
 * @property {string} [snowflake]
 * @property {string} [snowman]
 * @property {string} [snowman_with_snow]
 * @property {string} [soap]
 * @property {string} [sob]
 * @property {string} [soccer]
 * @property {string} [socks]
 * @property {string} [softball]
 * @property {string} [solomon_islands]
 * @property {string} [somalia]
 * @property {string} [soon]
 * @property {string} [sos]
 * @property {string} [sound]
 * @property {string} [south_africa]
 * @property {string} [south_georgia_south_sandwich_islands]
 * @property {string} [south_sudan]
 * @property {string} [space_invader]
 * @property {string} [spades]
 * @property {string} [spaghetti]
 * @property {string} [sparkle]
 * @property {string} [sparkler]
 * @property {string} [sparkles]
 * @property {string} [sparkling_heart]
 * @property {string} [speak_no_evil]
 * @property {string} [speaker]
 * @property {string} [speaking_head]
 * @property {string} [speech_balloon]
 * @property {string} [speedboat]
 * @property {string} [spider]
 * @property {string} [spider_web]
 * @property {string} [spiral_calendar]
 * @property {string} [spiral_notepad]
 * @property {string} [sponge]
 * @property {string} [spoon]
 * @property {string} [squid]
 * @property {string} [sri_lanka]
 * @property {string} [st_barthelemy]
 * @property {string} [st_helena]
 * @property {string} [st_kitts_nevis]
 * @property {string} [st_lucia]
 * @property {string} [st_martin]
 * @property {string} [st_pierre_miquelon]
 * @property {string} [st_vincent_grenadines]
 * @property {string} [stadium]
 * @property {string} [standing_man]
 * @property {string} [standing_person]
 * @property {string} [standing_woman]
 * @property {string} [star]
 * @property {string} [star2]
 * @property {string} [star_and_crescent]
 * @property {string} [star_of_david]
 * @property {string} [star_struck]
 * @property {string} [stars]
 * @property {string} [station]
 * @property {string} [statue_of_liberty]
 * @property {string} [steam_locomotive]
 * @property {string} [stethoscope]
 * @property {string} [stew]
 * @property {string} [stop_button]
 * @property {string} [stop_sign]
 * @property {string} [stopwatch]
 * @property {string} [straight_ruler]
 * @property {string} [strawberry]
 * @property {string} [stuck_out_tongue]
 * @property {string} [stuck_out_tongue_closed_eyes]
 * @property {string} [stuck_out_tongue_winking_eye]
 * @property {string} [student]
 * @property {string} [studio_microphone]
 * @property {string} [stuffed_flatbread]
 * @property {string} [sudan]
 * @property {string} [sun_behind_large_cloud]
 * @property {string} [sun_behind_rain_cloud]
 * @property {string} [sun_behind_small_cloud]
 * @property {string} [sun_with_face]
 * @property {string} [sunflower]
 * @property {string} [sunglasses]
 * @property {string} [sunny]
 * @property {string} [sunrise]
 * @property {string} [sunrise_over_mountains]
 * @property {string} [superhero]
 * @property {string} [superhero_man]
 * @property {string} [superhero_woman]
 * @property {string} [supervillain]
 * @property {string} [supervillain_man]
 * @property {string} [supervillain_woman]
 * @property {string} [surfer]
 * @property {string} [surfing_man]
 * @property {string} [surfing_woman]
 * @property {string} [suriname]
 * @property {string} [sushi]
 * @property {string} [suspect]
 * @property {string} [suspension_railway]
 * @property {string} [svalbard_jan_mayen]
 * @property {string} [swan]
 * @property {string} [swaziland]
 * @property {string} [sweat]
 * @property {string} [sweat_drops]
 * @property {string} [sweat_smile]
 * @property {string} [sweden]
 * @property {string} [sweet_potato]
 * @property {string} [swim_brief]
 * @property {string} [swimmer]
 * @property {string} [swimming_man]
 * @property {string} [swimming_woman]
 * @property {string} [switzerland]
 * @property {string} [symbols]
 * @property {string} [synagogue]
 * @property {string} [syria]
 * @property {string} [syringe]
 * @property {string} [taco]
 * @property {string} [tada]
 * @property {string} [taiwan]
 * @property {string} [tajikistan]
 * @property {string} [takeout_box]
 * @property {string} [tamale]
 * @property {string} [tanabata_tree]
 * @property {string} [tangerine]
 * @property {string} [tanzania]
 * @property {string} [taurus]
 * @property {string} [taxi]
 * @property {string} [tea]
 * @property {string} [teacher]
 * @property {string} [teapot]
 * @property {string} [technologist]
 * @property {string} [teddy_bear]
 * @property {string} [telephone]
 * @property {string} [telephone_receiver]
 * @property {string} [telescope]
 * @property {string} [tennis]
 * @property {string} [tent]
 * @property {string} [test_tube]
 * @property {string} [thailand]
 * @property {string} [thermometer]
 * @property {string} [thinking]
 * @property {string} [thong_sandal]
 * @property {string} [thought_balloon]
 * @property {string} [thread]
 * @property {string} [three]
 * @property {string} [thumbsdown]
 * @property {string} [thumbsup]
 * @property {string} [ticket]
 * @property {string} [tickets]
 * @property {string} [tiger]
 * @property {string} [tiger2]
 * @property {string} [timer_clock]
 * @property {string} [timor_leste]
 * @property {string} [tipping_hand_man]
 * @property {string} [tipping_hand_person]
 * @property {string} [tipping_hand_woman]
 * @property {string} [tired_face]
 * @property {string} [tm]
 * @property {string} [togo]
 * @property {string} [toilet]
 * @property {string} [tokelau]
 * @property {string} [tokyo_tower]
 * @property {string} [tomato]
 * @property {string} [tonga]
 * @property {string} [tongue]
 * @property {string} [toolbox]
 * @property {string} [tooth]
 * @property {string} [toothbrush]
 * @property {string} [top]
 * @property {string} [tophat]
 * @property {string} [tornado]
 * @property {string} [tr]
 * @property {string} [trackball]
 * @property {string} [tractor]
 * @property {string} [traffic_light]
 * @property {string} [train]
 * @property {string} [train2]
 * @property {string} [tram]
 * @property {string} [transgender_flag]
 * @property {string} [transgender_symbol]
 * @property {string} [trex]
 * @property {string} [triangular_flag_on_post]
 * @property {string} [triangular_ruler]
 * @property {string} [trident]
 * @property {string} [trinidad_tobago]
 * @property {string} [tristan_da_cunha]
 * @property {string} [triumph]
 * @property {string} [trolleybus]
 * @property {string} [trollface]
 * @property {string} [trophy]
 * @property {string} [tropical_drink]
 * @property {string} [tropical_fish]
 * @property {string} [truck]
 * @property {string} [trumpet]
 * @property {string} [tshirt]
 * @property {string} [tulip]
 * @property {string} [tumbler_glass]
 * @property {string} [tunisia]
 * @property {string} [turkey]
 * @property {string} [turkmenistan]
 * @property {string} [turks_caicos_islands]
 * @property {string} [turtle]
 * @property {string} [tuvalu]
 * @property {string} [tv]
 * @property {string} [twisted_rightwards_arrows]
 * @property {string} [two]
 * @property {string} [two_hearts]
 * @property {string} [two_men_holding_hands]
 * @property {string} [two_women_holding_hands]
 * @property {string} [u5272]
 * @property {string} [u5408]
 * @property {string} [u55b6]
 * @property {string} [u6307]
 * @property {string} [u6708]
 * @property {string} [u6709]
 * @property {string} [u6e80]
 * @property {string} [u7121]
 * @property {string} [u7533]
 * @property {string} [u7981]
 * @property {string} [u7a7a]
 * @property {string} [uganda]
 * @property {string} [uk]
 * @property {string} [ukraine]
 * @property {string} [umbrella]
 * @property {string} [unamused]
 * @property {string} [underage]
 * @property {string} [unicorn]
 * @property {string} [united_arab_emirates]
 * @property {string} [united_nations]
 * @property {string} [unlock]
 * @property {string} [up]
 * @property {string} [upside_down_face]
 * @property {string} [uruguay]
 * @property {string} [us]
 * @property {string} [us_outlying_islands]
 * @property {string} [us_virgin_islands]
 * @property {string} [uzbekistan]
 * @property {string} [v]
 * @property {string} [vampire]
 * @property {string} [vampire_man]
 * @property {string} [vampire_woman]
 * @property {string} [vanuatu]
 * @property {string} [vatican_city]
 * @property {string} [venezuela]
 * @property {string} [vertical_traffic_light]
 * @property {string} [vhs]
 * @property {string} [vibration_mode]
 * @property {string} [video_camera]
 * @property {string} [video_game]
 * @property {string} [vietnam]
 * @property {string} [violin]
 * @property {string} [virgo]
 * @property {string} [volcano]
 * @property {string} [volleyball]
 * @property {string} [vomiting_face]
 * @property {string} [vs]
 * @property {string} [vulcan_salute]
 * @property {string} [waffle]
 * @property {string} [wales]
 * @property {string} [walking]
 * @property {string} [walking_man]
 * @property {string} [walking_woman]
 * @property {string} [wallis_futuna]
 * @property {string} [waning_crescent_moon]
 * @property {string} [waning_gibbous_moon]
 * @property {string} [warning]
 * @property {string} [wastebasket]
 * @property {string} [watch]
 * @property {string} [water_buffalo]
 * @property {string} [water_polo]
 * @property {string} [watermelon]
 * @property {string} [wave]
 * @property {string} [wavy_dash]
 * @property {string} [waxing_crescent_moon]
 * @property {string} [waxing_gibbous_moon]
 * @property {string} [wc]
 * @property {string} [weary]
 * @property {string} [wedding]
 * @property {string} [weight_lifting]
 * @property {string} [weight_lifting_man]
 * @property {string} [weight_lifting_woman]
 * @property {string} [western_sahara]
 * @property {string} [whale]
 * @property {string} [whale2]
 * @property {string} [wheel_of_dharma]
 * @property {string} [wheelchair]
 * @property {string} [white_check_mark]
 * @property {string} [white_circle]
 * @property {string} [white_flag]
 * @property {string} [white_flower]
 * @property {string} [white_haired_man]
 * @property {string} [white_haired_woman]
 * @property {string} [white_heart]
 * @property {string} [white_large_square]
 * @property {string} [white_medium_small_square]
 * @property {string} [white_medium_square]
 * @property {string} [white_small_square]
 * @property {string} [white_square_button]
 * @property {string} [wilted_flower]
 * @property {string} [wind_chime]
 * @property {string} [wind_face]
 * @property {string} [window]
 * @property {string} [wine_glass]
 * @property {string} [wink]
 * @property {string} [wolf]
 * @property {string} [woman]
 * @property {string} [woman_artist]
 * @property {string} [woman_astronaut]
 * @property {string} [woman_beard]
 * @property {string} [woman_cartwheeling]
 * @property {string} [woman_cook]
 * @property {string} [woman_dancing]
 * @property {string} [woman_facepalming]
 * @property {string} [woman_factory_worker]
 * @property {string} [woman_farmer]
 * @property {string} [woman_feeding_baby]
 * @property {string} [woman_firefighter]
 * @property {string} [woman_health_worker]
 * @property {string} [woman_in_manual_wheelchair]
 * @property {string} [woman_in_motorized_wheelchair]
 * @property {string} [woman_in_tuxedo]
 * @property {string} [woman_judge]
 * @property {string} [woman_juggling]
 * @property {string} [woman_mechanic]
 * @property {string} [woman_office_worker]
 * @property {string} [woman_pilot]
 * @property {string} [woman_playing_handball]
 * @property {string} [woman_playing_water_polo]
 * @property {string} [woman_scientist]
 * @property {string} [woman_shrugging]
 * @property {string} [woman_singer]
 * @property {string} [woman_student]
 * @property {string} [woman_teacher]
 * @property {string} [woman_technologist]
 * @property {string} [woman_with_headscarf]
 * @property {string} [woman_with_probing_cane]
 * @property {string} [woman_with_turban]
 * @property {string} [woman_with_veil]
 * @property {string} [womans_clothes]
 * @property {string} [womans_hat]
 * @property {string} [women_wrestling]
 * @property {string} [womens]
 * @property {string} [wood]
 * @property {string} [woozy_face]
 * @property {string} [world_map]
 * @property {string} [worm]
 * @property {string} [worried]
 * @property {string} [wrench]
 * @property {string} [wrestling]
 * @property {string} [writing_hand]
 * @property {string} [x]
 * @property {string} [yarn]
 * @property {string} [yawning_face]
 * @property {string} [yellow_circle]
 * @property {string} [yellow_heart]
 * @property {string} [yellow_square]
 * @property {string} [yemen]
 * @property {string} [yen]
 * @property {string} [yin_yang]
 * @property {string} [yo_yo]
 * @property {string} [yum]
 * @property {string} [zambia]
 * @property {string} [zany_face]
 * @property {string} [zap]
 * @property {string} [zebra]
 * @property {string} [zero]
 * @property {string} [zimbabwe]
 * @property {string} [zipper_mouth_face]
 * @property {string} [zombie]
 * @property {string} [zombie_man]
 * @property {string} [zombie_woman]
 * @property {string} [zzz]
 */

/**
 * @typedef {Object} EmptyObject
 * @property {Array} [attestations]
 * @property {boolean} [enable_debug_logging]
 * @property {string} encrypted_value
 * @property {Array} [include_claim_keys]
 * @property {string} key_id
 * @property {Array} [languages]
 * @property {string} name
 * @property {string} [query_suite]
 * @property {string} [runner_label]
 * @property {string} [runner_type]
 * @property {Array} [selected_repository_ids]
 * @property {string} [state]
 * @property {string} [threat_model]
 * @property {boolean} use_default
 * @property {string} value
 * @property {string} visibility
 */

/**
 * @typedef {Object} EmptyObjectLoadMatch
 * @property {string} subject_digest
 * @property {string} username
 * @property {string} [after]
 * @property {string} [before]
 * @property {number} [per_page]
 * @property {string} [predicate_type]
 */

/**
 * @typedef {Object} EmptyObjectCreateData
 * @property {string} org_id
 * @property {Array} [attestations]
 * @property {boolean} [enable_debug_logging]
 * @property {string} encrypted_value
 * @property {Array} [include_claim_keys]
 * @property {string} key_id
 * @property {Array} [languages]
 * @property {string} name
 * @property {string} [query_suite]
 * @property {string} [runner_label]
 * @property {string} [runner_type]
 * @property {Array} [selected_repository_ids]
 * @property {string} [state]
 * @property {string} [threat_model]
 * @property {boolean} use_default
 * @property {string} value
 * @property {string} visibility
 */

/**
 * @typedef {Object} EmptyObjectUpdateData
 * @property {string} org_id
 * @property {string} secret_name
 * @property {Array} [attestations]
 * @property {boolean} [enable_debug_logging]
 * @property {string} [encrypted_value]
 * @property {Array} [include_claim_keys]
 * @property {string} [key_id]
 * @property {Array} [languages]
 * @property {string} [name]
 * @property {string} [query_suite]
 * @property {string} [runner_label]
 * @property {string} [runner_type]
 * @property {Array} [selected_repository_ids]
 * @property {string} [state]
 * @property {string} [threat_model]
 * @property {boolean} [use_default]
 * @property {string} [value]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} EnterpriseTeam
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} group_id
 * @property {string} [group_name]
 * @property {string} html_url
 * @property {number} id
 * @property {string} members_url
 * @property {string} name
 * @property {string} [organization_selection_type]
 * @property {string} slug
 * @property {string} [sync_to_organizations]
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} EnterpriseTeamLoadMatch
 * @property {string} enterprise
 * @property {string} id
 */

/**
 * @typedef {Object} EnterpriseTeamListMatch
 * @property {string} enterprise
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} EnterpriseTeamCreateData
 * @property {string} enterprise
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} group_id
 * @property {string} [group_name]
 * @property {string} html_url
 * @property {number} id
 * @property {string} members_url
 * @property {string} name
 * @property {string} [organization_selection_type]
 * @property {string} slug
 * @property {string} [sync_to_organizations]
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} EnterpriseTeamUpdateData
 * @property {string} enterprise
 * @property {string} id
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [group_id]
 * @property {string} [group_name]
 * @property {string} [html_url]
 * @property {string} [members_url]
 * @property {string} [name]
 * @property {string} [organization_selection_type]
 * @property {string} [slug]
 * @property {string} [sync_to_organizations]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} EnterpriseTeamRemoveMatch
 * @property {string} enterprise
 * @property {string} id
 */

/**
 * @typedef {Object} EnterpriseTeamMembership
 * @property {string} [id]
 */

/**
 * @typedef {Object} EnterpriseTeamMembershipRemoveMatch
 * @property {string} enterprise
 * @property {string} id
 * @property {string} team_id
 */

/**
 * @typedef {Object} Environment
 * @property {string} created_at
 * @property {Object} deployment_branch_policy
 * @property {string} html_url
 * @property {number} id
 * @property {string} name
 * @property {string} node_id
 * @property {boolean} [prevent_self_review]
 * @property {Array} [protection_rules]
 * @property {Array} [reviewers]
 * @property {string} updated_at
 * @property {string} url
 * @property {number} [wait_timer]
 */

/**
 * @typedef {Object} EnvironmentLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} EnvironmentUpdateData
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [created_at]
 * @property {Object} [deployment_branch_policy]
 * @property {string} [html_url]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {boolean} [prevent_self_review]
 * @property {Array} [protection_rules]
 * @property {Array} [reviewers]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {number} [wait_timer]
 */

/**
 * @typedef {Object} EnvironmentApproval
 * @property {string} comment
 * @property {Array} environments
 * @property {string} state
 * @property {Object} user
 */

/**
 * @typedef {Object} EnvironmentApprovalListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} run_id
 */

/**
 * @typedef {Object} Event
 * @property {Object} actor
 * @property {string} created_at
 * @property {string} id
 * @property {Object} org
 * @property {Object} payload
 * @property {boolean} public
 * @property {Object} repo
 * @property {string} type
 */

/**
 * @typedef {Object} EventLoadMatch
 * @property {string} org
 * @property {string} username
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} EventListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Feed
 * @property {string} [current_user_actor_url]
 * @property {string} [current_user_organization_url]
 * @property {Array} [current_user_organization_urls]
 * @property {string} [current_user_public_url]
 * @property {string} [current_user_url]
 * @property {Object} links
 * @property {string} [repository_discussions_category_url]
 * @property {string} [repository_discussions_url]
 * @property {string} [security_advisories_url]
 * @property {string} timeline_url
 * @property {string} user_url
 */

/**
 * @typedef {Object} FeedListMatch
 * @property {string} [current_user_actor_url]
 * @property {string} [current_user_organization_url]
 * @property {Array} [current_user_organization_urls]
 * @property {string} [current_user_public_url]
 * @property {string} [current_user_url]
 * @property {Object} [links]
 * @property {string} [repository_discussions_category_url]
 * @property {string} [repository_discussions_url]
 * @property {string} [security_advisories_url]
 * @property {string} [timeline_url]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} FileCommit
 * @property {Object} author
 * @property {string} [branch]
 * @property {Object} commit
 * @property {Object} committer
 * @property {Object} content
 * @property {string} message
 * @property {string} [sha]
 */

/**
 * @typedef {Object} FileCommitUpdateData
 * @property {string} owner
 * @property {string} path
 * @property {string} repo
 * @property {Object} [author]
 * @property {string} [branch]
 * @property {Object} [commit]
 * @property {Object} [committer]
 * @property {Object} [content]
 * @property {string} [message]
 * @property {string} [sha]
 */

/**
 * @typedef {Object} FileCommitRemoveMatch
 * @property {string} owner
 * @property {string} path
 * @property {string} repo
 */

/**
 * @typedef {Object} Follower
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} FollowerListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Following
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} FollowingListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} FullRepository
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {boolean} [anonymous_access_enabled]
 * @property {string} archive_url
 * @property {boolean} archived
 * @property {string} assignees_url
 * @property {boolean} [auto_init]
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} clone_url
 * @property {Object} code_of_conduct
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} created_at
 * @property {Object} [custom_properties]
 * @property {string} default_branch
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} disabled
 * @property {string} downloads_url
 * @property {string} events_url
 * @property {boolean} fork
 * @property {number} forks
 * @property {number} forks_count
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} git_url
 * @property {number} github_id
 * @property {string} [gitignore_template]
 * @property {boolean} has_discussions
 * @property {boolean} [has_downloads]
 * @property {boolean} has_issues
 * @property {boolean} has_pages
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {string} homepage
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {string} id
 * @property {boolean} [include_all_branches]
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} language
 * @property {string} languages_url
 * @property {Object} license
 * @property {string} [license_template]
 * @property {string} [master_branch]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} mirror_url
 * @property {string} name
 * @property {number} network_count
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} open_issues
 * @property {number} open_issues_count
 * @property {Object} organization
 * @property {Object} owner
 * @property {Object} parent
 * @property {Object} permissions
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} pushed_at
 * @property {string} releases_url
 * @property {Object} [security_and_analysis]
 * @property {number} size
 * @property {Object} source
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} ssh_url
 * @property {number} stargazers_count
 * @property {string} stargazers_url
 * @property {string} statuses_url
 * @property {number} subscribers_count
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} svn_url
 * @property {string} tags_url
 * @property {number} [team_id]
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Object} template_repository
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} updated_at
 * @property {string} url
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [visibility]
 * @property {number} watchers
 * @property {number} watchers_count
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} FullRepositoryLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} FullRepositoryCreateData
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {boolean} [anonymous_access_enabled]
 * @property {string} archive_url
 * @property {boolean} archived
 * @property {string} assignees_url
 * @property {boolean} [auto_init]
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} clone_url
 * @property {Object} code_of_conduct
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} created_at
 * @property {Object} [custom_properties]
 * @property {string} default_branch
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} disabled
 * @property {string} downloads_url
 * @property {string} events_url
 * @property {boolean} fork
 * @property {number} forks
 * @property {number} forks_count
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} git_url
 * @property {number} github_id
 * @property {string} [gitignore_template]
 * @property {boolean} has_discussions
 * @property {boolean} [has_downloads]
 * @property {boolean} has_issues
 * @property {boolean} has_pages
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {string} homepage
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {string} id
 * @property {boolean} [include_all_branches]
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} language
 * @property {string} languages_url
 * @property {Object} license
 * @property {string} [license_template]
 * @property {string} [master_branch]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} mirror_url
 * @property {string} name
 * @property {number} network_count
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} open_issues
 * @property {number} open_issues_count
 * @property {Object} organization
 * @property {Object} owner
 * @property {Object} parent
 * @property {Object} permissions
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} pushed_at
 * @property {string} releases_url
 * @property {Object} [security_and_analysis]
 * @property {number} size
 * @property {Object} source
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} ssh_url
 * @property {number} stargazers_count
 * @property {string} stargazers_url
 * @property {string} statuses_url
 * @property {number} subscribers_count
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} svn_url
 * @property {string} tags_url
 * @property {number} [team_id]
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Object} template_repository
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} updated_at
 * @property {string} url
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [visibility]
 * @property {number} watchers
 * @property {number} watchers_count
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} FullRepositoryUpdateData
 * @property {string} owner
 * @property {string} repo
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {boolean} [anonymous_access_enabled]
 * @property {string} [archive_url]
 * @property {boolean} [archived]
 * @property {string} [assignees_url]
 * @property {boolean} [auto_init]
 * @property {string} [blobs_url]
 * @property {string} [branches_url]
 * @property {string} [clone_url]
 * @property {Object} [code_of_conduct]
 * @property {string} [collaborators_url]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [compare_url]
 * @property {string} [contents_url]
 * @property {string} [contributors_url]
 * @property {string} [created_at]
 * @property {Object} [custom_properties]
 * @property {string} [default_branch]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} [deployments_url]
 * @property {string} [description]
 * @property {boolean} [disabled]
 * @property {string} [downloads_url]
 * @property {string} [events_url]
 * @property {boolean} [fork]
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} [forks_url]
 * @property {string} [full_name]
 * @property {string} [git_commits_url]
 * @property {string} [git_refs_url]
 * @property {string} [git_tags_url]
 * @property {string} [git_url]
 * @property {number} [github_id]
 * @property {string} [gitignore_template]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} [hooks_url]
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {boolean} [include_all_branches]
 * @property {boolean} [is_template]
 * @property {string} [issue_comment_url]
 * @property {string} [issue_events_url]
 * @property {string} [issues_url]
 * @property {string} [keys_url]
 * @property {string} [labels_url]
 * @property {string} [language]
 * @property {string} [languages_url]
 * @property {Object} [license]
 * @property {string} [license_template]
 * @property {string} [master_branch]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} [merges_url]
 * @property {string} [milestones_url]
 * @property {string} [mirror_url]
 * @property {string} [name]
 * @property {number} [network_count]
 * @property {string} [node_id]
 * @property {string} [notifications_url]
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {Object} [organization]
 * @property {Object} [parent]
 * @property {Object} [permissions]
 * @property {boolean} [private]
 * @property {string} [pulls_url]
 * @property {string} [pushed_at]
 * @property {string} [releases_url]
 * @property {Object} [security_and_analysis]
 * @property {number} [size]
 * @property {Object} [source]
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} [stargazers_url]
 * @property {string} [statuses_url]
 * @property {number} [subscribers_count]
 * @property {string} [subscribers_url]
 * @property {string} [subscription_url]
 * @property {string} [svn_url]
 * @property {string} [tags_url]
 * @property {number} [team_id]
 * @property {string} [teams_url]
 * @property {string} [temp_clone_token]
 * @property {Object} [template_repository]
 * @property {Array} [topics]
 * @property {string} [trees_url]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} Gist
 * @property {number} [comments]
 * @property {boolean} [comments_enabled]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Object} [files]
 * @property {Object} fork_of
 * @property {Array} [forks]
 * @property {string} [forks_url]
 * @property {string} [git_pull_url]
 * @property {string} [git_push_url]
 * @property {Array} [history]
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {string} [node_id]
 * @property {Object} owner
 * @property {boolean} [public]
 * @property {boolean} [truncated]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user]
 */

/**
 * @typedef {Object} GistLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} GistListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [since]
 */

/**
 * @typedef {Object} GistCreateData
 * @property {number} [comments]
 * @property {boolean} [comments_enabled]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Object} [files]
 * @property {Object} fork_of
 * @property {Array} [forks]
 * @property {string} [forks_url]
 * @property {string} [git_pull_url]
 * @property {string} [git_push_url]
 * @property {Array} [history]
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {string} [node_id]
 * @property {Object} owner
 * @property {boolean} [public]
 * @property {boolean} [truncated]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user]
 */

/**
 * @typedef {Object} GistUpdateData
 * @property {string} id
 * @property {number} [comments]
 * @property {boolean} [comments_enabled]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Object} [files]
 * @property {Object} [fork_of]
 * @property {Array} [forks]
 * @property {string} [forks_url]
 * @property {string} [git_pull_url]
 * @property {string} [git_push_url]
 * @property {Array} [history]
 * @property {string} [html_url]
 * @property {string} [node_id]
 * @property {Object} [owner]
 * @property {boolean} [public]
 * @property {boolean} [truncated]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user]
 */

/**
 * @typedef {Object} GistRemoveMatch
 * @property {number} [comment_id]
 * @property {string} id
 */

/**
 * @typedef {Object} GistComment
 * @property {string} author_association
 * @property {string} avatar_url
 * @property {string} body
 * @property {string} created_at
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} GistCommentLoadMatch
 * @property {string} gist_id
 * @property {number} id
 */

/**
 * @typedef {Object} GistCommentListMatch
 * @property {string} id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} GistCommentCreateData
 * @property {string} id
 * @property {string} author_association
 * @property {string} avatar_url
 * @property {string} body
 * @property {string} created_at
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} GistCommentUpdateData
 * @property {string} gist_id
 * @property {number} id
 * @property {string} [author_association]
 * @property {string} [avatar_url]
 * @property {string} [body]
 * @property {string} [created_at]
 * @property {string} [email]
 * @property {string} [events_url]
 * @property {string} [followers_url]
 * @property {string} [following_url]
 * @property {string} [gists_url]
 * @property {string} [gravatar_id]
 * @property {string} [html_url]
 * @property {string} [login]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [organizations_url]
 * @property {string} [received_events_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {string} [starred_at]
 * @property {string} [starred_url]
 * @property {string} [subscriptions_url]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {Object} [user]
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} GistCommit
 * @property {Object} change_status
 * @property {string} committed_at
 * @property {string} [id]
 * @property {string} url
 * @property {Object} user
 * @property {string} version
 */

/**
 * @typedef {Object} GistCommitListMatch
 * @property {string} id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} GistSimple
 * @property {number} [comments]
 * @property {boolean} [comments_enabled]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Object} [files]
 * @property {Object} fork_of
 * @property {Array} [forks]
 * @property {string} [forks_url]
 * @property {string} [git_pull_url]
 * @property {string} [git_push_url]
 * @property {Array} [history]
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {string} [node_id]
 * @property {Object} owner
 * @property {boolean} [public]
 * @property {boolean} [truncated]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user]
 */

/**
 * @typedef {Object} GistSimpleListMatch
 * @property {string} id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Git
 */

/**
 * @typedef {Object} GitRemoveMatch
 * @property {string} owner
 * @property {string} ref
 * @property {string} repo
 */

/**
 * @typedef {Object} GitCommit
 * @property {Object} author
 * @property {Object} committer
 * @property {string} html_url
 * @property {string} [id]
 * @property {string} message
 * @property {string} node_id
 * @property {Array} parents
 * @property {string} sha
 * @property {string} [signature]
 * @property {Object} tree
 * @property {string} url
 * @property {Object} verification
 */

/**
 * @typedef {Object} GitCommitLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} GitCommitCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {Object} author
 * @property {Object} committer
 * @property {string} html_url
 * @property {string} [id]
 * @property {string} message
 * @property {string} node_id
 * @property {Array} parents
 * @property {string} sha
 * @property {string} [signature]
 * @property {Object} tree
 * @property {string} url
 * @property {Object} verification
 */

/**
 * @typedef {Object} GitRef
 * @property {boolean} [force]
 * @property {string} [id]
 * @property {string} node_id
 * @property {Object} object
 * @property {string} ref
 * @property {string} sha
 * @property {string} type
 * @property {string} url
 */

/**
 * @typedef {Object} GitRefLoadMatch
 * @property {string} [id]
 * @property {string} owner
 * @property {string} repo
 * @property {string} [ref]
 */

/**
 * @typedef {Object} GitRefCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {boolean} [force]
 * @property {string} [id]
 * @property {string} node_id
 * @property {Object} object
 * @property {string} ref
 * @property {string} sha
 * @property {string} type
 * @property {string} url
 */

/**
 * @typedef {Object} GitRefUpdateData
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 * @property {boolean} [force]
 * @property {string} [node_id]
 * @property {Object} [object]
 * @property {string} [ref]
 * @property {string} [sha]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef {Object} GitTag
 * @property {string} [id]
 * @property {string} message
 * @property {string} node_id
 * @property {Object} object
 * @property {string} sha
 * @property {string} tag
 * @property {Object} tagger
 * @property {string} type
 * @property {string} url
 * @property {Object} verification
 */

/**
 * @typedef {Object} GitTagLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} GitTagCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [id]
 * @property {string} message
 * @property {string} node_id
 * @property {Object} object
 * @property {string} sha
 * @property {string} tag
 * @property {Object} tagger
 * @property {string} type
 * @property {string} url
 * @property {Object} verification
 */

/**
 * @typedef {Object} GitTree
 * @property {string} [base_tree]
 * @property {string} [id]
 * @property {string} sha
 * @property {Array} tree
 * @property {boolean} truncated
 * @property {string} [url]
 */

/**
 * @typedef {Object} GitTreeLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [recursive]
 */

/**
 * @typedef {Object} GitTreeCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [base_tree]
 * @property {string} [id]
 * @property {string} sha
 * @property {Array} tree
 * @property {boolean} truncated
 * @property {string} [url]
 */

/**
 * @typedef {Object} Gitignore
 */

/**
 * @typedef {Object} GitignoreListMatch
 */

/**
 * @typedef {Object} GitignoreTemplate
 * @property {string} [id]
 * @property {string} name
 * @property {string} source
 */

/**
 * @typedef {Object} GitignoreTemplateLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} GlobalAdvisory
 * @property {Array} credits
 * @property {string} cve_id
 * @property {Object} cvss
 * @property {Object} [cvss_severities]
 * @property {Array} cwes
 * @property {string} description
 * @property {Object} [epss]
 * @property {string} ghsa_id
 * @property {string} github_reviewed_at
 * @property {string} html_url
 * @property {string} [id]
 * @property {Array} identifiers
 * @property {string} nvd_published_at
 * @property {string} published_at
 * @property {Array} references
 * @property {string} repository_advisory_url
 * @property {string} severity
 * @property {string} source_code_location
 * @property {string} summary
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 * @property {Array} vulnerabilities
 * @property {string} withdrawn_at
 */

/**
 * @typedef {Object} GlobalAdvisoryLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} GlobalAdvisoryListMatch
 * @property {*} [affect]
 * @property {string} [after]
 * @property {string} [before]
 * @property {string} [cve_id]
 * @property {*} [cwe]
 * @property {string} [direction]
 * @property {string} [ecosystem]
 * @property {string} [epss_percentage]
 * @property {string} [epss_percentile]
 * @property {string} [ghsa_id]
 * @property {boolean} [is_withdrawn]
 * @property {string} [modified]
 * @property {number} [per_page]
 * @property {string} [published]
 * @property {string} [severity]
 * @property {string} [sort]
 * @property {string} [type]
 * @property {string} [updated]
 */

/**
 * @typedef {Object} GpgKey
 * @property {string} armored_public_key
 * @property {boolean} can_certify
 * @property {boolean} can_encrypt_comms
 * @property {boolean} can_encrypt_storage
 * @property {boolean} can_sign
 * @property {string} created_at
 * @property {Array} emails
 * @property {string} expires_at
 * @property {number} id
 * @property {string} key_id
 * @property {string} [name]
 * @property {number} primary_key_id
 * @property {string} public_key
 * @property {string} raw_key
 * @property {boolean} revoked
 * @property {Array} subkeys
 */

/**
 * @typedef {Object} GpgKeyLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} GpgKeyListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} GpgKeyCreateData
 * @property {string} armored_public_key
 * @property {boolean} can_certify
 * @property {boolean} can_encrypt_comms
 * @property {boolean} can_encrypt_storage
 * @property {boolean} can_sign
 * @property {string} created_at
 * @property {Array} emails
 * @property {string} expires_at
 * @property {number} id
 * @property {string} key_id
 * @property {string} [name]
 * @property {number} primary_key_id
 * @property {string} public_key
 * @property {string} raw_key
 * @property {boolean} revoked
 * @property {Array} subkeys
 */

/**
 * @typedef {Object} Hook
 * @property {boolean} active
 * @property {Array} [add_events]
 * @property {Object} config
 * @property {string} created_at
 * @property {string} [deliveries_url]
 * @property {Array} events
 * @property {number} id
 * @property {Object} last_response
 * @property {string} name
 * @property {string} ping_url
 * @property {Array} [remove_events]
 * @property {string} test_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} HookLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} HookListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} HookCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {boolean} active
 * @property {Array} [add_events]
 * @property {Object} config
 * @property {string} created_at
 * @property {string} [deliveries_url]
 * @property {Array} events
 * @property {number} id
 * @property {Object} last_response
 * @property {string} name
 * @property {string} ping_url
 * @property {Array} [remove_events]
 * @property {string} test_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} HookUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {boolean} [active]
 * @property {Array} [add_events]
 * @property {Object} [config]
 * @property {string} [created_at]
 * @property {string} [deliveries_url]
 * @property {Array} [events]
 * @property {Object} [last_response]
 * @property {string} [name]
 * @property {string} [ping_url]
 * @property {Array} [remove_events]
 * @property {string} [test_url]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} HookDelivery
 * @property {string} action
 * @property {string} delivered_at
 * @property {number} duration
 * @property {string} event
 * @property {string} guid
 * @property {number} id
 * @property {number} installation_id
 * @property {boolean} redelivery
 * @property {number} repository_id
 * @property {Object} request
 * @property {Object} response
 * @property {string} status
 * @property {number} status_code
 * @property {string} [throttled_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} HookDeliveryLoadMatch
 * @property {number} [hook_id]
 * @property {number} id
 * @property {string} [owner]
 * @property {string} [repo]
 * @property {string} [org_id]
 */

/**
 * @typedef {Object} HookDeliveryItem
 * @property {string} action
 * @property {string} delivered_at
 * @property {number} duration
 * @property {string} event
 * @property {string} guid
 * @property {number} id
 * @property {number} installation_id
 * @property {boolean} redelivery
 * @property {number} repository_id
 * @property {string} status
 * @property {number} status_code
 * @property {string} [throttled_at]
 */

/**
 * @typedef {Object} HookDeliveryItemListMatch
 * @property {string} [cursor]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} HostedCompute
 * @property {string} [compute_service]
 * @property {string} created_on
 * @property {string} id
 * @property {string} name
 * @property {Array} [network_settings_ids]
 */

/**
 * @typedef {Object} HostedComputeListMatch
 * @property {string} org_id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} HostedComputeRemoveMatch
 * @property {string} network_configuration_id
 * @property {string} org_id
 */

/**
 * @typedef {Object} Hovercard
 * @property {string} message
 * @property {string} octicon
 */

/**
 * @typedef {Object} HovercardListMatch
 * @property {string} username
 * @property {string} [subject_id]
 * @property {string} [subject_type]
 */

/**
 * @typedef {Object} Import
 * @property {number} [authors_count]
 * @property {string} authors_url
 * @property {number} [commit_count]
 * @property {string} [error_message]
 * @property {string} [failed_step]
 * @property {boolean} [has_large_files]
 * @property {string} html_url
 * @property {string} [human_name]
 * @property {number} [import_percent]
 * @property {number} [large_files_count]
 * @property {number} [large_files_size]
 * @property {string} [message]
 * @property {Array} [project_choices]
 * @property {number} [push_percent]
 * @property {string} repository_url
 * @property {string} status
 * @property {string} [status_text]
 * @property {string} [svc_root]
 * @property {string} [svn_root]
 * @property {string} [tfvc_project]
 * @property {string} url
 * @property {boolean} [use_lfs]
 * @property {string} vcs
 * @property {string} [vcs_password]
 * @property {string} vcs_url
 * @property {string} [vcs_username]
 */

/**
 * @typedef {Object} ImportListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ImportUpdateData
 * @property {string} owner
 * @property {string} repo
 * @property {number} [authors_count]
 * @property {string} [authors_url]
 * @property {number} [commit_count]
 * @property {string} [error_message]
 * @property {string} [failed_step]
 * @property {boolean} [has_large_files]
 * @property {string} [html_url]
 * @property {string} [human_name]
 * @property {number} [import_percent]
 * @property {number} [large_files_count]
 * @property {number} [large_files_size]
 * @property {string} [message]
 * @property {Array} [project_choices]
 * @property {number} [push_percent]
 * @property {string} [repository_url]
 * @property {string} [status]
 * @property {string} [status_text]
 * @property {string} [svc_root]
 * @property {string} [svn_root]
 * @property {string} [tfvc_project]
 * @property {string} [url]
 * @property {boolean} [use_lfs]
 * @property {string} [vcs]
 * @property {string} [vcs_password]
 * @property {string} [vcs_url]
 * @property {string} [vcs_username]
 */

/**
 * @typedef {Object} Installation
 * @property {string} access_tokens_url
 * @property {*} account
 * @property {number} app_id
 * @property {string} app_slug
 * @property {string} [client_id]
 * @property {string} [contact_email]
 * @property {string} created_at
 * @property {Array} events
 * @property {boolean} [has_multiple_single_files]
 * @property {string} html_url
 * @property {number} id
 * @property {Object} permissions
 * @property {string} repositories_url
 * @property {string} repository_selection
 * @property {string} single_file_name
 * @property {Array} [single_file_paths]
 * @property {string} suspended_at
 * @property {Object} suspended_by
 * @property {number} target_id
 * @property {string} target_type
 * @property {string} updated_at
 */

/**
 * @typedef {Object} InstallationLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} InstallationListMatch
 * @property {string} [outdated]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [since]
 */

/**
 * @typedef {Object} InstallationUpdateData
 * @property {number} id
 * @property {string} [access_tokens_url]
 * @property {*} [account]
 * @property {number} [app_id]
 * @property {string} [app_slug]
 * @property {string} [client_id]
 * @property {string} [contact_email]
 * @property {string} [created_at]
 * @property {Array} [events]
 * @property {boolean} [has_multiple_single_files]
 * @property {string} [html_url]
 * @property {Object} [permissions]
 * @property {string} [repositories_url]
 * @property {string} [repository_selection]
 * @property {string} [single_file_name]
 * @property {Array} [single_file_paths]
 * @property {string} [suspended_at]
 * @property {Object} [suspended_by]
 * @property {number} [target_id]
 * @property {string} [target_type]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} InstallationRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} InstallationToken
 * @property {string} [id]
 * @property {Object} [permissions]
 * @property {Array} [repositories]
 * @property {Array} [repository_ids]
 */

/**
 * @typedef {Object} InstallationTokenCreateData
 * @property {number} id
 * @property {Object} [permissions]
 * @property {Array} [repositories]
 * @property {Array} [repository_ids]
 */

/**
 * @typedef {Object} Integration
 * @property {Array} apps
 * @property {string} [client_id]
 * @property {string} created_at
 * @property {string} description
 * @property {Array} events
 * @property {string} external_url
 * @property {string} html_url
 * @property {number} id
 * @property {number} [installations_count]
 * @property {string} name
 * @property {string} node_id
 * @property {*} owner
 * @property {Object} permissions
 * @property {string} [slug]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IntegrationLoadMatch
 * @property {string} app_slug
 */

/**
 * @typedef {Object} IntegrationListMatch
 * @property {Array} [apps]
 * @property {string} [client_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Array} [events]
 * @property {string} [external_url]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {number} [installations_count]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {*} [owner]
 * @property {Object} [permissions]
 * @property {string} [slug]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IntegrationCreateData
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 * @property {Array} apps
 * @property {string} [client_id]
 * @property {string} created_at
 * @property {string} description
 * @property {Array} events
 * @property {string} external_url
 * @property {string} html_url
 * @property {number} id
 * @property {number} [installations_count]
 * @property {string} name
 * @property {string} node_id
 * @property {Object} permissions
 * @property {string} [slug]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IntegrationUpdateData
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 * @property {Array} [apps]
 * @property {string} [client_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Array} [events]
 * @property {string} [external_url]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {number} [installations_count]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {Object} [permissions]
 * @property {string} [slug]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IntegrationRemoveMatch
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} IntegrationInstallation
 * @property {*} account
 * @property {string} created_at
 * @property {number} id
 * @property {string} [node_id]
 * @property {Object} requester
 */

/**
 * @typedef {Object} IntegrationInstallationListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Interaction
 * @property {string} [expires_at]
 * @property {string} [limit]
 * @property {string} [origin]
 */

/**
 * @typedef {Object} InteractionLoadMatch
 * @property {string} [expires_at]
 * @property {string} [limit]
 * @property {string} [origin]
 */

/**
 * @typedef {Object} InteractionRemoveMatch
 * @property {string} [expires_at]
 * @property {string} [limit]
 * @property {string} [origin]
 */

/**
 * @typedef {Object} InteractionLimit
 * @property {string} expires_at
 * @property {string} [expiry]
 * @property {string} limit
 * @property {string} origin
 */

/**
 * @typedef {Object} InteractionLimitUpdateData
 * @property {string} [expires_at]
 * @property {string} [expiry]
 * @property {string} [limit]
 * @property {string} [origin]
 */

/**
 * @typedef {Object} Issue
 * @property {string} [active_lock_reason]
 * @property {Object} actor
 * @property {number} [after_id]
 * @property {Object} assignee
 * @property {Array} [assignees]
 * @property {Object} assigner
 * @property {string} author_association
 * @property {number} [before_id]
 * @property {string} [body]
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} closed_at
 * @property {Object} closed_by
 * @property {string} [color]
 * @property {number} comments
 * @property {string} comments_url
 * @property {string} commit_id
 * @property {string} commit_url
 * @property {string} created_at
 * @property {boolean} [default]
 * @property {string} [description]
 * @property {Object} dismissed_review
 * @property {boolean} [draft]
 * @property {string} event
 * @property {string} events_url
 * @property {string} html_url
 * @property {number} id
 * @property {Object} issue
 * @property {Object} issue_dependencies_summary
 * @property {Array} [issue_field_values]
 * @property {number} issue_id
 * @property {string} issue_url
 * @property {Object} label
 * @property {Array} labels
 * @property {string} labels_url
 * @property {string} [lock_reason]
 * @property {boolean} locked
 * @property {Object} milestone
 * @property {string} [name]
 * @property {string} node_id
 * @property {number} number
 * @property {string} [parent_issue_url]
 * @property {Object} performed_via_github_app
 * @property {Object} project_card
 * @property {Object} pull_request
 * @property {Object} reactions
 * @property {Object} rename
 * @property {boolean} [replace_parent]
 * @property {Object} repository
 * @property {string} repository_url
 * @property {Object} requested_reviewer
 * @property {Object} requested_team
 * @property {Object} review_requester
 * @property {string} state
 * @property {string} [state_reason]
 * @property {number} sub_issue_id
 * @property {Object} sub_issues_summary
 * @property {string} [timeline_url]
 * @property {string} title
 * @property {Object} type
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} IssueLoadMatch
 * @property {string} [assignee]
 * @property {number} [id]
 * @property {string} owner
 * @property {string} repo
 * @property {number} [comment_id]
 * @property {number} [event_id]
 */

/**
 * @typedef {Object} IssueListMatch
 * @property {boolean} [collab]
 * @property {string} [direction]
 * @property {string} [filter]
 * @property {string} [label]
 * @property {boolean} [org]
 * @property {boolean} [owned]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {boolean} [pull]
 * @property {string} [since]
 * @property {string} [sort]
 * @property {string} [state]
 */

/**
 * @typedef {Object} IssueCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [active_lock_reason]
 * @property {Object} actor
 * @property {number} [after_id]
 * @property {Object} assignee
 * @property {Array} [assignees]
 * @property {Object} assigner
 * @property {string} author_association
 * @property {number} [before_id]
 * @property {string} [body]
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} closed_at
 * @property {Object} closed_by
 * @property {string} [color]
 * @property {number} comments
 * @property {string} comments_url
 * @property {string} commit_id
 * @property {string} commit_url
 * @property {string} created_at
 * @property {boolean} [default]
 * @property {string} [description]
 * @property {Object} dismissed_review
 * @property {boolean} [draft]
 * @property {string} event
 * @property {string} events_url
 * @property {string} html_url
 * @property {number} id
 * @property {Object} issue
 * @property {Object} issue_dependencies_summary
 * @property {Array} [issue_field_values]
 * @property {number} issue_id
 * @property {string} issue_url
 * @property {Object} label
 * @property {Array} labels
 * @property {string} labels_url
 * @property {string} [lock_reason]
 * @property {boolean} locked
 * @property {Object} milestone
 * @property {string} [name]
 * @property {string} node_id
 * @property {number} number
 * @property {string} [parent_issue_url]
 * @property {Object} performed_via_github_app
 * @property {Object} project_card
 * @property {Object} pull_request
 * @property {Object} reactions
 * @property {Object} rename
 * @property {boolean} [replace_parent]
 * @property {Object} repository
 * @property {string} repository_url
 * @property {Object} requested_reviewer
 * @property {Object} requested_team
 * @property {Object} review_requester
 * @property {string} state
 * @property {string} [state_reason]
 * @property {number} sub_issue_id
 * @property {Object} sub_issues_summary
 * @property {string} [timeline_url]
 * @property {string} title
 * @property {Object} type
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} IssueUpdateData
 * @property {number} [comment_id]
 * @property {string} owner
 * @property {string} repo
 * @property {number} [id]
 * @property {string} [active_lock_reason]
 * @property {Object} [actor]
 * @property {number} [after_id]
 * @property {Object} [assignee]
 * @property {Array} [assignees]
 * @property {Object} [assigner]
 * @property {string} [author_association]
 * @property {number} [before_id]
 * @property {string} [body]
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} [closed_at]
 * @property {Object} [closed_by]
 * @property {string} [color]
 * @property {number} [comments]
 * @property {string} [comments_url]
 * @property {string} [commit_id]
 * @property {string} [commit_url]
 * @property {string} [created_at]
 * @property {boolean} [default]
 * @property {string} [description]
 * @property {Object} [dismissed_review]
 * @property {boolean} [draft]
 * @property {string} [event]
 * @property {string} [events_url]
 * @property {string} [html_url]
 * @property {Object} [issue]
 * @property {Object} [issue_dependencies_summary]
 * @property {Array} [issue_field_values]
 * @property {number} [issue_id]
 * @property {string} [issue_url]
 * @property {Object} [label]
 * @property {Array} [labels]
 * @property {string} [labels_url]
 * @property {string} [lock_reason]
 * @property {boolean} [locked]
 * @property {Object} [milestone]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {number} [number]
 * @property {string} [parent_issue_url]
 * @property {Object} [performed_via_github_app]
 * @property {Object} [project_card]
 * @property {Object} [pull_request]
 * @property {Object} [reactions]
 * @property {Object} [rename]
 * @property {boolean} [replace_parent]
 * @property {Object} [repository]
 * @property {string} [repository_url]
 * @property {Object} [requested_reviewer]
 * @property {Object} [requested_team]
 * @property {Object} [review_requester]
 * @property {string} [state]
 * @property {string} [state_reason]
 * @property {number} [sub_issue_id]
 * @property {Object} [sub_issues_summary]
 * @property {string} [timeline_url]
 * @property {string} [title]
 * @property {Object} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {Object} [user]
 */

/**
 * @typedef {Object} IssueRemoveMatch
 * @property {number} [id]
 * @property {number} [issue_id]
 * @property {string} owner
 * @property {string} repo
 * @property {string} [name]
 * @property {number} [comment_id]
 * @property {number} [milestone_number]
 */

/**
 * @typedef {Object} IssueType
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {string} description
 * @property {number} id
 * @property {boolean} [is_enabled]
 * @property {string} name
 * @property {string} node_id
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IssueTypeListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} IssueTypeCreateData
 * @property {string} org_id
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {string} description
 * @property {number} id
 * @property {boolean} [is_enabled]
 * @property {string} name
 * @property {string} node_id
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IssueTypeUpdateData
 * @property {number} id
 * @property {string} org_id
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [is_enabled]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} Job
 * @property {string} check_run_url
 * @property {string} completed_at
 * @property {string} conclusion
 * @property {string} created_at
 * @property {string} head_branch
 * @property {string} head_sha
 * @property {string} html_url
 * @property {number} id
 * @property {Array} labels
 * @property {string} name
 * @property {string} node_id
 * @property {number} [run_attempt]
 * @property {number} run_id
 * @property {string} run_url
 * @property {number} runner_group_id
 * @property {string} runner_group_name
 * @property {number} runner_id
 * @property {string} runner_name
 * @property {string} started_at
 * @property {string} status
 * @property {Array} [steps]
 * @property {string} url
 * @property {string} workflow_name
 */

/**
 * @typedef {Object} JobLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Key
 * @property {string} created_at
 * @property {number} id
 * @property {string} key
 * @property {string} [last_used]
 * @property {boolean} read_only
 * @property {string} title
 * @property {string} url
 * @property {boolean} verified
 */

/**
 * @typedef {Object} KeyLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} KeyListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} KeyCreateData
 * @property {string} created_at
 * @property {number} id
 * @property {string} key
 * @property {string} [last_used]
 * @property {boolean} read_only
 * @property {string} title
 * @property {string} url
 * @property {boolean} verified
 */

/**
 * @typedef {Object} Label
 * @property {string} color
 * @property {boolean} default
 * @property {string} description
 * @property {number} id
 * @property {string} name
 * @property {string} [new_name]
 * @property {string} node_id
 * @property {string} url
 */

/**
 * @typedef {Object} LabelLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} LabelListMatch
 * @property {number} [milestone_number]
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} LabelCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} color
 * @property {boolean} default
 * @property {string} description
 * @property {number} id
 * @property {string} name
 * @property {string} [new_name]
 * @property {string} node_id
 * @property {string} url
 */

/**
 * @typedef {Object} LabelUpdateData
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [color]
 * @property {boolean} [default]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [new_name]
 * @property {string} [node_id]
 * @property {string} [url]
 */

/**
 * @typedef {Object} Language
 * @property {number} [C]
 * @property {number} [Python]
 */

/**
 * @typedef {Object} LanguageLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} License
 * @property {string} body
 * @property {Array} conditions
 * @property {string} content
 * @property {string} description
 * @property {string} download_url
 * @property {string} encoding
 * @property {boolean} featured
 * @property {string} git_url
 * @property {string} html_url
 * @property {string} [id]
 * @property {string} implementation
 * @property {string} key
 * @property {Object} license
 * @property {Array} limitations
 * @property {Object} links
 * @property {string} name
 * @property {string} node_id
 * @property {string} path
 * @property {Array} permissions
 * @property {string} sha
 * @property {number} size
 * @property {string} spdx_id
 * @property {string} type
 * @property {string} url
 */

/**
 * @typedef {Object} LicenseLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} LicenseListMatch
 * @property {boolean} [featured]
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Markdown
 * @property {string} [context]
 * @property {string} [mode]
 * @property {string} text
 */

/**
 * @typedef {Object} MarkdownCreateData
 * @property {string} [context]
 * @property {string} [mode]
 * @property {string} text
 */

/**
 * @typedef {Object} MarketplaceListingPlan
 * @property {string} accounts_url
 * @property {Array} bullets
 * @property {string} description
 * @property {boolean} has_free_trial
 * @property {number} id
 * @property {number} monthly_price_in_cents
 * @property {string} name
 * @property {number} number
 * @property {string} price_model
 * @property {string} state
 * @property {string} unit_name
 * @property {string} url
 * @property {number} yearly_price_in_cents
 */

/**
 * @typedef {Object} MarketplaceListingPlanListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} MarketplacePurchase
 * @property {string} [email]
 * @property {number} id
 * @property {string} login
 * @property {Object} [marketplace_pending_change]
 * @property {Object} marketplace_purchase
 * @property {string} [organization_billing_email]
 * @property {string} type
 * @property {string} url
 */

/**
 * @typedef {Object} MarketplacePurchaseLoadMatch
 * @property {number} account_id
 */

/**
 * @typedef {Object} MarketplacePurchaseListMatch
 * @property {number} plan_id
 * @property {string} [direction]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [sort]
 */

/**
 * @typedef {Object} Member
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} MemberListMatch
 * @property {string} org_id
 * @property {string} [filter]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [role]
 */

/**
 * @typedef {Object} Membership
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} MembershipLoadMatch
 * @property {string} enterprise
 * @property {string} id
 * @property {string} team_id
 */

/**
 * @typedef {Object} MembershipListMatch
 * @property {string} enterprise
 * @property {string} enterprise_team
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} MembershipUpdateData
 * @property {string} enterprise
 * @property {string} id
 * @property {string} team_id
 * @property {string} [avatar_url]
 * @property {string} [email]
 * @property {string} [events_url]
 * @property {string} [followers_url]
 * @property {string} [following_url]
 * @property {string} [gists_url]
 * @property {string} [gravatar_id]
 * @property {string} [html_url]
 * @property {string} [login]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [organizations_url]
 * @property {string} [received_events_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {string} [starred_at]
 * @property {string} [starred_url]
 * @property {string} [subscriptions_url]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} MergedUpstream
 * @property {string} [base_branch]
 * @property {string} branch
 * @property {string} [merge_type]
 * @property {string} [message]
 */

/**
 * @typedef {Object} MergedUpstreamCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [base_branch]
 * @property {string} branch
 * @property {string} [merge_type]
 * @property {string} [message]
 */

/**
 * @typedef {Object} Meta
 */

/**
 * @typedef {Object} MetaLoadMatch
 * @property {string} [s]
 */

/**
 * @typedef {Object} MetaListMatch
 */

/**
 * @typedef {Object} Metaroot
 * @property {string} authorizations_url
 * @property {string} code_search_url
 * @property {string} commit_search_url
 * @property {string} current_user_authorizations_html_url
 * @property {string} current_user_repositories_url
 * @property {string} current_user_url
 * @property {string} emails_url
 * @property {string} emojis_url
 * @property {string} events_url
 * @property {string} feeds_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} [hub_url]
 * @property {string} issue_search_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} label_search_url
 * @property {string} notifications_url
 * @property {string} organization_repositories_url
 * @property {string} organization_teams_url
 * @property {string} organization_url
 * @property {string} public_gists_url
 * @property {string} rate_limit_url
 * @property {string} repository_search_url
 * @property {string} repository_url
 * @property {string} starred_gists_url
 * @property {string} starred_url
 * @property {string} [topic_search_url]
 * @property {string} user_organizations_url
 * @property {string} user_repositories_url
 * @property {string} user_search_url
 * @property {string} user_url
 */

/**
 * @typedef {Object} MetarootLoadMatch
 * @property {string} [authorizations_url]
 * @property {string} [code_search_url]
 * @property {string} [commit_search_url]
 * @property {string} [current_user_authorizations_html_url]
 * @property {string} [current_user_repositories_url]
 * @property {string} [current_user_url]
 * @property {string} [emails_url]
 * @property {string} [emojis_url]
 * @property {string} [events_url]
 * @property {string} [feeds_url]
 * @property {string} [followers_url]
 * @property {string} [following_url]
 * @property {string} [gists_url]
 * @property {string} [hub_url]
 * @property {string} [issue_search_url]
 * @property {string} [issues_url]
 * @property {string} [keys_url]
 * @property {string} [label_search_url]
 * @property {string} [notifications_url]
 * @property {string} [organization_repositories_url]
 * @property {string} [organization_teams_url]
 * @property {string} [organization_url]
 * @property {string} [public_gists_url]
 * @property {string} [rate_limit_url]
 * @property {string} [repository_search_url]
 * @property {string} [repository_url]
 * @property {string} [starred_gists_url]
 * @property {string} [starred_url]
 * @property {string} [topic_search_url]
 * @property {string} [user_organizations_url]
 * @property {string} [user_repositories_url]
 * @property {string} [user_search_url]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} Migration
 * @property {boolean} [allow_forking]
 * @property {string} [archive_url]
 * @property {boolean} [archived]
 * @property {string} assignees_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} [clone_url]
 * @property {Object} code_of_conduct
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} created_at
 * @property {Object} [custom_properties]
 * @property {string} [default_branch]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} [disabled]
 * @property {string} downloads_url
 * @property {string} events_url
 * @property {Array} [exclude]
 * @property {boolean} exclude_attachments
 * @property {boolean} exclude_git_data
 * @property {boolean} exclude_metadata
 * @property {boolean} exclude_owner_projects
 * @property {boolean} exclude_releases
 * @property {boolean} fork
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} [git_url]
 * @property {string} guid
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} [language]
 * @property {string} languages_url
 * @property {Object} [license]
 * @property {boolean} lock_repositories
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} [mirror_url]
 * @property {string} name
 * @property {number} [network_count]
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {boolean} org_metadata_only
 * @property {Object} owner
 * @property {Object} [permissions]
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} [pushed_at]
 * @property {string} releases_url
 * @property {Array} repositories
 * @property {string} [role_name]
 * @property {Object} [security_and_analysis]
 * @property {number} [size]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} stargazers_url
 * @property {string} state
 * @property {string} statuses_url
 * @property {number} [subscribers_count]
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} [svn_url]
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} updated_at
 * @property {string} url
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} MigrationLoadMatch
 * @property {number} id
 * @property {string} [org_id]
 * @property {Array} [exclude]
 */

/**
 * @typedef {Object} MigrationListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} MigrationCreateData
 * @property {boolean} [allow_forking]
 * @property {string} [archive_url]
 * @property {boolean} [archived]
 * @property {string} assignees_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} [clone_url]
 * @property {Object} code_of_conduct
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} created_at
 * @property {Object} [custom_properties]
 * @property {string} [default_branch]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} [disabled]
 * @property {string} downloads_url
 * @property {string} events_url
 * @property {Array} [exclude]
 * @property {boolean} exclude_attachments
 * @property {boolean} exclude_git_data
 * @property {boolean} exclude_metadata
 * @property {boolean} exclude_owner_projects
 * @property {boolean} exclude_releases
 * @property {boolean} fork
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} [git_url]
 * @property {string} guid
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} [language]
 * @property {string} languages_url
 * @property {Object} [license]
 * @property {boolean} lock_repositories
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} [mirror_url]
 * @property {string} name
 * @property {number} [network_count]
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {boolean} org_metadata_only
 * @property {Object} owner
 * @property {Object} [permissions]
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} [pushed_at]
 * @property {string} releases_url
 * @property {Array} repositories
 * @property {string} [role_name]
 * @property {Object} [security_and_analysis]
 * @property {number} [size]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} stargazers_url
 * @property {string} state
 * @property {string} statuses_url
 * @property {number} [subscribers_count]
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} [svn_url]
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} updated_at
 * @property {string} url
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} MigrationRemoveMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Milestone
 * @property {string} avatar_url
 * @property {string} closed_at
 * @property {number} closed_issues
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {string} [due_on]
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} labels_url
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {number} number
 * @property {number} open_issues
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} [state]
 * @property {string} subscriptions_url
 * @property {string} title
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} MilestoneLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} MilestoneListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [direction]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [sort]
 * @property {string} [state]
 */

/**
 * @typedef {Object} MilestoneCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} avatar_url
 * @property {string} closed_at
 * @property {number} closed_issues
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {string} [due_on]
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} labels_url
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {number} number
 * @property {number} open_issues
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} [state]
 * @property {string} subscriptions_url
 * @property {string} title
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} MilestoneUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [avatar_url]
 * @property {string} [closed_at]
 * @property {number} [closed_issues]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [description]
 * @property {string} [due_on]
 * @property {string} [email]
 * @property {string} [events_url]
 * @property {string} [followers_url]
 * @property {string} [following_url]
 * @property {string} [gists_url]
 * @property {string} [gravatar_id]
 * @property {string} [html_url]
 * @property {string} [labels_url]
 * @property {string} [login]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {number} [number]
 * @property {number} [open_issues]
 * @property {string} [organizations_url]
 * @property {string} [received_events_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {string} [starred_at]
 * @property {string} [starred_url]
 * @property {string} [state]
 * @property {string} [subscriptions_url]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} MinimalRepository
 * @property {boolean} [allow_forking]
 * @property {string} archive_url
 * @property {boolean} [archived]
 * @property {string} assignees_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} [clone_url]
 * @property {Object} code_of_conduct
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} [created_at]
 * @property {Object} [custom_properties]
 * @property {string} [default_branch]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} [disabled]
 * @property {string} downloads_url
 * @property {string} events_url
 * @property {boolean} fork
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} [git_url]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} [language]
 * @property {string} languages_url
 * @property {Object} [license]
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} [mirror_url]
 * @property {string} name
 * @property {number} [network_count]
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {Object} owner
 * @property {Object} [permissions]
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} [pushed_at]
 * @property {string} releases_url
 * @property {string} [role_name]
 * @property {Object} [security_and_analysis]
 * @property {number} [size]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} stargazers_url
 * @property {string} statuses_url
 * @property {number} [subscribers_count]
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} [svn_url]
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} [updated_at]
 * @property {string} url
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} MinimalRepositoryListMatch
 * @property {number} [since]
 */

/**
 * @typedef {Object} NetworkConfiguration
 * @property {string} [compute_service]
 * @property {string} created_on
 * @property {string} id
 * @property {string} name
 * @property {Array} [network_settings_ids]
 */

/**
 * @typedef {Object} NetworkConfigurationLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} NetworkConfigurationCreateData
 * @property {string} org_id
 * @property {string} [compute_service]
 * @property {string} created_on
 * @property {string} id
 * @property {string} name
 * @property {Array} [network_settings_ids]
 */

/**
 * @typedef {Object} NetworkConfigurationUpdateData
 * @property {string} id
 * @property {string} org_id
 * @property {string} [compute_service]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {Array} [network_settings_ids]
 */

/**
 * @typedef {Object} NetworkSetting
 * @property {string} id
 * @property {string} name
 * @property {string} [network_configuration_id]
 * @property {string} region
 * @property {string} subnet_id
 */

/**
 * @typedef {Object} NetworkSettingLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} OidcCustomSub
 * @property {Array} include_claim_keys
 */

/**
 * @typedef {Object} OidcCustomSubListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} OidcCustomSubRepo
 * @property {Array} [include_claim_keys]
 * @property {boolean} use_default
 */

/**
 * @typedef {Object} OidcCustomSubRepoListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Org
 * @property {string} access_tokens_url
 * @property {*} account
 * @property {string} action
 * @property {boolean} [advanced_security_enabled_for_new_repositories]
 * @property {number} app_id
 * @property {string} app_slug
 * @property {string} [artifact_url]
 * @property {boolean} [async]
 * @property {Array} [attestations]
 * @property {Object} [attestations_subject_digests]
 * @property {string} avatar_url
 * @property {string} [base_role]
 * @property {string} [billing_email]
 * @property {string} [blog]
 * @property {string} [client_id]
 * @property {string} [company]
 * @property {string} [contact_email]
 * @property {string} created_at
 * @property {string} [default_repository_permission]
 * @property {boolean} [dependabot_alerts_enabled_for_new_repositories]
 * @property {boolean} [dependabot_security_updates_enabled_for_new_repositories]
 * @property {boolean} [dependency_graph_enabled_for_new_repositories]
 * @property {boolean} [deploy_keys_enabled_for_repositories]
 * @property {string} [description]
 * @property {string} digest
 * @property {boolean} [direct_membership]
 * @property {string} [email]
 * @property {Array} [enterprise_teams_providing_indirect_membership]
 * @property {Array} events
 * @property {string} events_url
 * @property {number} [filled_seats]
 * @property {boolean} [has_multiple_single_files]
 * @property {boolean} [has_organization_projects]
 * @property {boolean} [has_repository_projects]
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {string} issues_url
 * @property {string} [location]
 * @property {string} login
 * @property {string} [members_allowed_repository_creation_type]
 * @property {boolean} [members_can_create_internal_repositories]
 * @property {boolean} [members_can_create_pages]
 * @property {boolean} [members_can_create_private_pages]
 * @property {boolean} [members_can_create_private_repositories]
 * @property {boolean} [members_can_create_public_pages]
 * @property {boolean} [members_can_create_public_repositories]
 * @property {boolean} [members_can_create_repositories]
 * @property {boolean} [members_can_fork_private_repositories]
 * @property {string} members_url
 * @property {string} name
 * @property {string} node_id
 * @property {Object} organization
 * @property {string} organization_url
 * @property {Object} [page_info]
 * @property {Array} pat_ids
 * @property {Array} [pat_request_ids]
 * @property {string} [path]
 * @property {Object} permissions
 * @property {string} [predicate_type]
 * @property {number} private_repos
 * @property {Array} properties
 * @property {string} public_members_url
 * @property {string} [query_suite]
 * @property {string} [reason]
 * @property {string} registry_url
 * @property {string} repos_url
 * @property {string} repositories_url
 * @property {string} [repository]
 * @property {Array} repository_names
 * @property {string} repository_selection
 * @property {string} role
 * @property {number} [seats]
 * @property {boolean} [secret_scanning_enabled_for_new_repositories]
 * @property {string} [secret_scanning_push_protection_custom_link]
 * @property {boolean} [secret_scanning_push_protection_custom_link_enabled]
 * @property {boolean} [secret_scanning_push_protection_enabled_for_new_repositories]
 * @property {string} single_file_name
 * @property {Array} [single_file_paths]
 * @property {string} [source]
 * @property {number} space
 * @property {string} state
 * @property {string} [status]
 * @property {Array} [storage_records]
 * @property {Array} subject_digests
 * @property {string} suspended_at
 * @property {Object} suspended_by
 * @property {number} target_id
 * @property {string} target_type
 * @property {number} [total_count]
 * @property {string} [twitter_username]
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} OrgLoadMatch
 * @property {string} id
 * @property {string} [subject_digest]
 * @property {string} [after]
 * @property {string} [before]
 * @property {number} [per_page]
 * @property {string} [predicate_type]
 * @property {string} [username]
 */

/**
 * @typedef {Object} OrgListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} OrgCreateData
 * @property {string} enablement
 * @property {string} org
 * @property {string} security_product
 * @property {string} access_tokens_url
 * @property {*} account
 * @property {string} action
 * @property {boolean} [advanced_security_enabled_for_new_repositories]
 * @property {number} app_id
 * @property {string} app_slug
 * @property {string} [artifact_url]
 * @property {boolean} [async]
 * @property {Array} [attestations]
 * @property {Object} [attestations_subject_digests]
 * @property {string} avatar_url
 * @property {string} [base_role]
 * @property {string} [billing_email]
 * @property {string} [blog]
 * @property {string} [client_id]
 * @property {string} [company]
 * @property {string} [contact_email]
 * @property {string} created_at
 * @property {string} [default_repository_permission]
 * @property {boolean} [dependabot_alerts_enabled_for_new_repositories]
 * @property {boolean} [dependabot_security_updates_enabled_for_new_repositories]
 * @property {boolean} [dependency_graph_enabled_for_new_repositories]
 * @property {boolean} [deploy_keys_enabled_for_repositories]
 * @property {string} [description]
 * @property {string} digest
 * @property {boolean} [direct_membership]
 * @property {string} [email]
 * @property {Array} [enterprise_teams_providing_indirect_membership]
 * @property {Array} events
 * @property {string} events_url
 * @property {number} [filled_seats]
 * @property {boolean} [has_multiple_single_files]
 * @property {boolean} [has_organization_projects]
 * @property {boolean} [has_repository_projects]
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {string} issues_url
 * @property {string} [location]
 * @property {string} login
 * @property {string} [members_allowed_repository_creation_type]
 * @property {boolean} [members_can_create_internal_repositories]
 * @property {boolean} [members_can_create_pages]
 * @property {boolean} [members_can_create_private_pages]
 * @property {boolean} [members_can_create_private_repositories]
 * @property {boolean} [members_can_create_public_pages]
 * @property {boolean} [members_can_create_public_repositories]
 * @property {boolean} [members_can_create_repositories]
 * @property {boolean} [members_can_fork_private_repositories]
 * @property {string} members_url
 * @property {string} name
 * @property {string} node_id
 * @property {Object} organization
 * @property {string} organization_url
 * @property {Object} [page_info]
 * @property {Array} pat_ids
 * @property {Array} [pat_request_ids]
 * @property {string} [path]
 * @property {Object} permissions
 * @property {string} [predicate_type]
 * @property {number} private_repos
 * @property {Array} properties
 * @property {string} public_members_url
 * @property {string} [query_suite]
 * @property {string} [reason]
 * @property {string} registry_url
 * @property {string} repos_url
 * @property {string} repositories_url
 * @property {string} [repository]
 * @property {Array} repository_names
 * @property {string} repository_selection
 * @property {string} role
 * @property {number} [seats]
 * @property {boolean} [secret_scanning_enabled_for_new_repositories]
 * @property {string} [secret_scanning_push_protection_custom_link]
 * @property {boolean} [secret_scanning_push_protection_custom_link_enabled]
 * @property {boolean} [secret_scanning_push_protection_enabled_for_new_repositories]
 * @property {string} single_file_name
 * @property {Array} [single_file_paths]
 * @property {string} [source]
 * @property {number} space
 * @property {string} state
 * @property {string} [status]
 * @property {Array} [storage_records]
 * @property {Array} subject_digests
 * @property {string} suspended_at
 * @property {Object} suspended_by
 * @property {number} target_id
 * @property {string} target_type
 * @property {number} [total_count]
 * @property {string} [twitter_username]
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} OrgUpdateData
 * @property {string} id
 * @property {string} username
 * @property {string} [access_tokens_url]
 * @property {*} [account]
 * @property {string} [action]
 * @property {boolean} [advanced_security_enabled_for_new_repositories]
 * @property {number} [app_id]
 * @property {string} [app_slug]
 * @property {string} [artifact_url]
 * @property {boolean} [async]
 * @property {Array} [attestations]
 * @property {Object} [attestations_subject_digests]
 * @property {string} [avatar_url]
 * @property {string} [base_role]
 * @property {string} [billing_email]
 * @property {string} [blog]
 * @property {string} [client_id]
 * @property {string} [company]
 * @property {string} [contact_email]
 * @property {string} [created_at]
 * @property {string} [default_repository_permission]
 * @property {boolean} [dependabot_alerts_enabled_for_new_repositories]
 * @property {boolean} [dependabot_security_updates_enabled_for_new_repositories]
 * @property {boolean} [dependency_graph_enabled_for_new_repositories]
 * @property {boolean} [deploy_keys_enabled_for_repositories]
 * @property {string} [description]
 * @property {string} [digest]
 * @property {boolean} [direct_membership]
 * @property {string} [email]
 * @property {Array} [enterprise_teams_providing_indirect_membership]
 * @property {Array} [events]
 * @property {string} [events_url]
 * @property {number} [filled_seats]
 * @property {boolean} [has_multiple_single_files]
 * @property {boolean} [has_organization_projects]
 * @property {boolean} [has_repository_projects]
 * @property {string} [hooks_url]
 * @property {string} [html_url]
 * @property {string} [issues_url]
 * @property {string} [location]
 * @property {string} [login]
 * @property {string} [members_allowed_repository_creation_type]
 * @property {boolean} [members_can_create_internal_repositories]
 * @property {boolean} [members_can_create_pages]
 * @property {boolean} [members_can_create_private_pages]
 * @property {boolean} [members_can_create_private_repositories]
 * @property {boolean} [members_can_create_public_pages]
 * @property {boolean} [members_can_create_public_repositories]
 * @property {boolean} [members_can_create_repositories]
 * @property {boolean} [members_can_fork_private_repositories]
 * @property {string} [members_url]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {Object} [organization]
 * @property {string} [organization_url]
 * @property {Object} [page_info]
 * @property {Array} [pat_ids]
 * @property {Array} [pat_request_ids]
 * @property {string} [path]
 * @property {Object} [permissions]
 * @property {string} [predicate_type]
 * @property {number} [private_repos]
 * @property {Array} [properties]
 * @property {string} [public_members_url]
 * @property {string} [query_suite]
 * @property {string} [reason]
 * @property {string} [registry_url]
 * @property {string} [repos_url]
 * @property {string} [repositories_url]
 * @property {string} [repository]
 * @property {Array} [repository_names]
 * @property {string} [repository_selection]
 * @property {string} [role]
 * @property {number} [seats]
 * @property {boolean} [secret_scanning_enabled_for_new_repositories]
 * @property {string} [secret_scanning_push_protection_custom_link]
 * @property {boolean} [secret_scanning_push_protection_custom_link_enabled]
 * @property {boolean} [secret_scanning_push_protection_enabled_for_new_repositories]
 * @property {string} [single_file_name]
 * @property {Array} [single_file_paths]
 * @property {string} [source]
 * @property {number} [space]
 * @property {string} [state]
 * @property {string} [status]
 * @property {Array} [storage_records]
 * @property {Array} [subject_digests]
 * @property {string} [suspended_at]
 * @property {Object} [suspended_by]
 * @property {number} [target_id]
 * @property {string} [target_type]
 * @property {number} [total_count]
 * @property {string} [twitter_username]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {Object} [user]
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} OrgRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} OrgHook
 * @property {boolean} active
 * @property {Object} config
 * @property {string} created_at
 * @property {string} [deliveries_url]
 * @property {Array} events
 * @property {number} id
 * @property {string} name
 * @property {string} ping_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} OrgHookLoadMatch
 * @property {number} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrgHookListMatch
 * @property {string} id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} OrgHookCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {Object} config
 * @property {string} created_at
 * @property {string} [deliveries_url]
 * @property {Array} events
 * @property {string} name
 * @property {string} ping_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} OrgHookUpdateData
 * @property {number} id
 * @property {string} org_id
 * @property {boolean} [active]
 * @property {Object} [config]
 * @property {string} [created_at]
 * @property {string} [deliveries_url]
 * @property {Array} [events]
 * @property {string} [name]
 * @property {string} [ping_url]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} OrgMembership
 * @property {boolean} [direct_membership]
 * @property {Array} [enterprise_teams_providing_indirect_membership]
 * @property {string} [id]
 * @property {Object} organization
 * @property {string} organization_url
 * @property {Object} permissions
 * @property {string} role
 * @property {string} state
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} OrgMembershipLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrgMembershipUpdateData
 * @property {string} id
 * @property {string} org_id
 * @property {boolean} [direct_membership]
 * @property {Array} [enterprise_teams_providing_indirect_membership]
 * @property {Object} [organization]
 * @property {string} [organization_url]
 * @property {Object} [permissions]
 * @property {string} [role]
 * @property {string} [state]
 * @property {string} [url]
 * @property {Object} [user]
 */

/**
 * @typedef {Object} OrgPrivateRegistryConfiguration
 * @property {string} created_at
 * @property {string} name
 * @property {string} registry_type
 * @property {string} updated_at
 * @property {string} [username]
 * @property {string} visibility
 */

/**
 * @typedef {Object} OrgPrivateRegistryConfigurationLoadMatch
 * @property {string} org_id
 * @property {string} secret_name
 */

/**
 * @typedef {Object} OrgPrivateRegistryConfigurationWithSelectedRepository
 * @property {string} encrypted_value
 * @property {string} [id]
 * @property {string} key_id
 * @property {string} registry_type
 * @property {Array} [selected_repository_ids]
 * @property {string} url
 * @property {string} [username]
 * @property {string} visibility
 */

/**
 * @typedef {Object} OrgPrivateRegistryConfigurationWithSelectedRepositoryCreateData
 * @property {string} id
 * @property {string} encrypted_value
 * @property {string} key_id
 * @property {string} registry_type
 * @property {Array} [selected_repository_ids]
 * @property {string} url
 * @property {string} [username]
 * @property {string} visibility
 */

/**
 * @typedef {Object} OrgRepoCustomPropertyValue
 * @property {Array} properties
 * @property {string} repository_full_name
 * @property {number} repository_id
 * @property {string} repository_name
 */

/**
 * @typedef {Object} OrgRepoCustomPropertyValueListMatch
 * @property {string} org_id
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [repository_query]
 */

/**
 * @typedef {Object} Organization
 */

/**
 * @typedef {Object} OrganizationActionsSecret
 * @property {string} created_at
 * @property {string} [id]
 * @property {string} name
 * @property {string} [selected_repositories_url]
 * @property {string} updated_at
 * @property {string} visibility
 */

/**
 * @typedef {Object} OrganizationActionsSecretLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationActionsVariable
 * @property {string} created_at
 * @property {string} [id]
 * @property {string} name
 * @property {string} [selected_repositories_url]
 * @property {string} updated_at
 * @property {string} value
 * @property {string} visibility
 */

/**
 * @typedef {Object} OrganizationActionsVariableLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationDependabotSecret
 * @property {string} created_at
 * @property {string} [id]
 * @property {string} name
 * @property {string} [selected_repositories_url]
 * @property {string} updated_at
 * @property {string} visibility
 */

/**
 * @typedef {Object} OrganizationDependabotSecretLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationInvitation
 * @property {string} created_at
 * @property {string} [email]
 * @property {string} [failed_at]
 * @property {string} [failed_reason]
 * @property {number} id
 * @property {string} [invitation_source]
 * @property {string} invitation_teams_url
 * @property {number} [invitee_id]
 * @property {Object} inviter
 * @property {string} login
 * @property {string} node_id
 * @property {string} [role]
 * @property {number} team_count
 * @property {Array} [team_ids]
 */

/**
 * @typedef {Object} OrganizationInvitationListMatch
 * @property {string} org_id
 * @property {string} [invitation_source]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [role]
 */

/**
 * @typedef {Object} OrganizationInvitationCreateData
 * @property {string} org_id
 * @property {string} created_at
 * @property {string} [email]
 * @property {string} [failed_at]
 * @property {string} [failed_reason]
 * @property {number} id
 * @property {string} [invitation_source]
 * @property {string} invitation_teams_url
 * @property {number} [invitee_id]
 * @property {Object} inviter
 * @property {string} login
 * @property {string} node_id
 * @property {string} [role]
 * @property {number} team_count
 * @property {Array} [team_ids]
 */

/**
 * @typedef {Object} OrganizationProgrammaticAccessGrant
 * @property {string} access_granted_at
 * @property {string} created_at
 * @property {number} id
 * @property {Object} owner
 * @property {Object} permissions
 * @property {string} reason
 * @property {string} repositories_url
 * @property {string} repository_selection
 * @property {boolean} token_expired
 * @property {string} token_expires_at
 * @property {number} token_id
 * @property {string} token_last_used_at
 * @property {string} token_name
 */

/**
 * @typedef {Object} OrganizationProgrammaticAccessGrantListMatch
 * @property {string} org_id
 * @property {string} [direction]
 * @property {string} [last_used_after]
 * @property {string} [last_used_before]
 * @property {Array} [owner]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [permission]
 * @property {string} [repository]
 * @property {string} [sort]
 * @property {Array} [token_id]
 */

/**
 * @typedef {Object} OrganizationRole
 * @property {string} [base_role]
 * @property {string} created_at
 * @property {string} [description]
 * @property {number} id
 * @property {string} name
 * @property {Object} organization
 * @property {Array} permissions
 * @property {string} [source]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} OrganizationRoleLoadMatch
 * @property {number} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationSecretScanningAlert
 * @property {string} [created_at]
 * @property {*} [first_location_detected]
 * @property {boolean} [has_more_locations]
 * @property {string} [html_url]
 * @property {boolean} [is_base64_encoded]
 * @property {string} [locations_url]
 * @property {boolean} [multi_repo]
 * @property {number} [number]
 * @property {boolean} [publicly_leaked]
 * @property {string} [push_protection_bypass_request_comment]
 * @property {string} [push_protection_bypass_request_html_url]
 * @property {Object} push_protection_bypass_request_reviewer
 * @property {string} [push_protection_bypass_request_reviewer_comment]
 * @property {boolean} [push_protection_bypassed]
 * @property {string} [push_protection_bypassed_at]
 * @property {Object} push_protection_bypassed_by
 * @property {Object} repository
 * @property {string} [resolution]
 * @property {string} [resolution_comment]
 * @property {string} [resolved_at]
 * @property {Object} resolved_by
 * @property {string} [secret]
 * @property {string} [secret_type]
 * @property {string} [secret_type_display_name]
 * @property {string} [state]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [validity]
 */

/**
 * @typedef {Object} OrganizationSecretScanningAlertListMatch
 * @property {string} org_id
 * @property {string} [after]
 * @property {string} [before]
 * @property {string} [direction]
 * @property {boolean} [hide_secret]
 * @property {boolean} [is_multi_repo]
 * @property {boolean} [is_publicly_leaked]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [resolution]
 * @property {string} [secret_type]
 * @property {string} [sort]
 * @property {string} [state]
 * @property {string} [validity]
 */

/**
 * @typedef {Object} OutsideCollaborator
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} OutsideCollaboratorListMatch
 * @property {string} org_id
 * @property {string} [filter]
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Package
 * @property {Object} container
 * @property {string} created_at
 * @property {string} [deleted_at]
 * @property {string} [description]
 * @property {Object} docker
 * @property {number} github_id
 * @property {string} html_url
 * @property {string} id
 * @property {number} included_gigabytes_bandwidth
 * @property {string} [license]
 * @property {Object} metadata
 * @property {string} name
 * @property {Object} owner
 * @property {string} package_html_url
 * @property {string} package_type
 * @property {Object} repository
 * @property {number} total_gigabytes_bandwidth_used
 * @property {number} total_paid_gigabytes_bandwidth_used
 * @property {string} updated_at
 * @property {string} url
 * @property {number} version_count
 * @property {string} visibility
 */

/**
 * @typedef {Object} PackageLoadMatch
 * @property {string} package_name
 * @property {string} package_type
 */

/**
 * @typedef {Object} PackageListMatch
 * @property {string} package_type
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} PackageCreateData
 * @property {string} [org_id]
 * @property {string} package_id
 * @property {string} package_name
 * @property {string} [token]
 * @property {string} [username]
 * @property {Object} container
 * @property {string} created_at
 * @property {string} [deleted_at]
 * @property {string} [description]
 * @property {Object} docker
 * @property {number} github_id
 * @property {string} html_url
 * @property {string} id
 * @property {number} included_gigabytes_bandwidth
 * @property {string} [license]
 * @property {Object} metadata
 * @property {string} name
 * @property {Object} owner
 * @property {string} package_html_url
 * @property {string} package_type
 * @property {Object} repository
 * @property {number} total_gigabytes_bandwidth_used
 * @property {number} total_paid_gigabytes_bandwidth_used
 * @property {string} updated_at
 * @property {string} url
 * @property {number} version_count
 * @property {string} visibility
 */

/**
 * @typedef {Object} PackageRemoveMatch
 * @property {string} [org_id]
 * @property {string} [package_id]
 * @property {string} package_name
 * @property {number} [package_version_id]
 * @property {string} [username]
 * @property {string} [org]
 * @property {string} [package_type]
 */

/**
 * @typedef {Object} Page
 * @property {string} [build_type]
 * @property {string} cname
 * @property {boolean} custom_404
 * @property {string} [html_url]
 * @property {Object} https_certificate
 * @property {boolean} [https_enforced]
 * @property {string} [pending_domain_unverified_at]
 * @property {string} [protected_domain_state]
 * @property {boolean} public
 * @property {Object} source
 * @property {string} status
 * @property {string} url
 */

/**
 * @typedef {Object} PageLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} PageCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [build_type]
 * @property {string} cname
 * @property {boolean} custom_404
 * @property {string} [html_url]
 * @property {Object} https_certificate
 * @property {boolean} [https_enforced]
 * @property {string} [pending_domain_unverified_at]
 * @property {string} [protected_domain_state]
 * @property {boolean} public
 * @property {Object} source
 * @property {string} status
 * @property {string} url
 */

/**
 * @typedef {Object} PageBuild
 * @property {string} commit
 * @property {string} created_at
 * @property {number} duration
 * @property {Object} error
 * @property {string} [id]
 * @property {Object} pusher
 * @property {string} status
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} PageBuildLoadMatch
 * @property {number} [id]
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} PageBuildListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} PageBuildStatus
 * @property {string} [status]
 * @property {string} [url]
 */

/**
 * @typedef {Object} PageBuildStatusCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [status]
 * @property {string} [url]
 */

/**
 * @typedef {Object} PageDeployment
 * @property {number} [artifact_id]
 * @property {string} [artifact_url]
 * @property {string} [environment]
 * @property {string} oidc_token
 * @property {string} pages_build_version
 */

/**
 * @typedef {Object} PageDeploymentCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {number} [artifact_id]
 * @property {string} [artifact_url]
 * @property {string} [environment]
 * @property {string} oidc_token
 * @property {string} pages_build_version
 */

/**
 * @typedef {Object} PagesDeploymentStatus
 * @property {string} [status]
 */

/**
 * @typedef {Object} PagesDeploymentStatusLoadMatch
 * @property {string} owner
 * @property {string} pages_deployment_id
 * @property {string} repo
 */

/**
 * @typedef {Object} PagesDeploymentStatusCreateData
 * @property {string} deployment_id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [status]
 */

/**
 * @typedef {Object} PagesHealthCheck
 * @property {Object} [alt_domain]
 * @property {Object} [domain]
 */

/**
 * @typedef {Object} PagesHealthCheckLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Participation
 * @property {Array} all
 * @property {Array} owner
 */

/**
 * @typedef {Object} ParticipationListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} PendingDeployment
 * @property {boolean} current_user_can_approve
 * @property {Object} environment
 * @property {Array} reviewers
 * @property {number} wait_timer
 * @property {string} wait_timer_started_at
 */

/**
 * @typedef {Object} PendingDeploymentListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} run_id
 */

/**
 * @typedef {Object} PorterAuthor
 * @property {string} email
 * @property {number} id
 * @property {string} import_url
 * @property {string} name
 * @property {string} remote_id
 * @property {string} remote_name
 * @property {string} url
 */

/**
 * @typedef {Object} PorterAuthorListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [since]
 */

/**
 * @typedef {Object} PorterAuthorUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [email]
 * @property {string} [import_url]
 * @property {string} [name]
 * @property {string} [remote_id]
 * @property {string} [remote_name]
 * @property {string} [url]
 */

/**
 * @typedef {Object} PorterLargeFile
 * @property {string} oid
 * @property {string} path
 * @property {string} ref_name
 * @property {number} size
 */

/**
 * @typedef {Object} PorterLargeFileListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} PrivateRegistry
 * @property {string} created_at
 * @property {string} [encrypted_value]
 * @property {string} [id]
 * @property {string} key
 * @property {string} key_id
 * @property {string} name
 * @property {string} [registry_type]
 * @property {Array} [selected_repository_ids]
 * @property {string} updated_at
 * @property {string} [url]
 * @property {string} [username]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} PrivateRegistryLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} PrivateRegistryListMatch
 * @property {string} org_id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} PrivateRegistryUpdateData
 * @property {string} id
 * @property {string} org_id
 * @property {string} [created_at]
 * @property {string} [encrypted_value]
 * @property {string} [key]
 * @property {string} [key_id]
 * @property {string} [name]
 * @property {string} [registry_type]
 * @property {Array} [selected_repository_ids]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [username]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} PrivateRegistryRemoveMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} PrivateUser
 */

/**
 * @typedef {Object} Project
 * @property {string} avatar_url
 * @property {string} [body]
 * @property {string} columns_url
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {number} number
 * @property {string} [organization_permission]
 * @property {string} organizations_url
 * @property {string} owner_url
 * @property {boolean} [private]
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} [state]
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} ProjectLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ProjectListMatch
 * @property {string} org_id
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [state]
 */

/**
 * @typedef {Object} ProjectCreateData
 * @property {string} avatar_url
 * @property {string} [body]
 * @property {string} columns_url
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {number} number
 * @property {string} [organization_permission]
 * @property {string} organizations_url
 * @property {string} owner_url
 * @property {boolean} [private]
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} [state]
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} ProjectUpdateData
 * @property {number} id
 * @property {string} [avatar_url]
 * @property {string} [body]
 * @property {string} [columns_url]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [email]
 * @property {string} [events_url]
 * @property {string} [followers_url]
 * @property {string} [following_url]
 * @property {string} [gists_url]
 * @property {string} [gravatar_id]
 * @property {string} [html_url]
 * @property {string} [login]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {number} [number]
 * @property {string} [organization_permission]
 * @property {string} [organizations_url]
 * @property {string} [owner_url]
 * @property {boolean} [private]
 * @property {string} [received_events_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {string} [starred_at]
 * @property {string} [starred_url]
 * @property {string} [state]
 * @property {string} [subscriptions_url]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} ProjectRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ProjectCollaboratorPermission
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} ProjectCollaboratorPermissionLoadMatch
 * @property {number} project_id
 * @property {string} username
 */

/**
 * @typedef {Object} ProjectColumn
 * @property {string} cards_url
 * @property {string} created_at
 * @property {number} id
 * @property {string} name
 * @property {string} node_id
 * @property {string} project_url
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} ProjectColumnLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ProjectColumnListMatch
 * @property {number} id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} ProjectColumnCreateData
 * @property {number} id
 * @property {string} cards_url
 * @property {string} created_at
 * @property {string} name
 * @property {string} node_id
 * @property {string} project_url
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} ProjectColumnUpdateData
 * @property {number} id
 * @property {string} [cards_url]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [project_url]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ProjectsClassic
 * @property {string} [permission]
 * @property {string} position
 */

/**
 * @typedef {Object} ProjectsClassicCreateData
 * @property {number} column_id
 * @property {string} [permission]
 * @property {string} position
 */

/**
 * @typedef {Object} ProjectsClassicUpdateData
 * @property {number} project_id
 * @property {string} username
 * @property {string} [permission]
 * @property {string} [position]
 */

/**
 * @typedef {Object} ProjectsClassicRemoveMatch
 * @property {number} column_id
 */

/**
 * @typedef {Object} ProjectsV2
 * @property {string} closed_at
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} deleted_at
 * @property {Object} deleted_by
 * @property {string} description
 * @property {number} id
 * @property {boolean} [is_template]
 * @property {Object} latest_status_update
 * @property {string} node_id
 * @property {number} number
 * @property {Object} owner
 * @property {boolean} public
 * @property {string} short_description
 * @property {string} [state]
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ProjectsV2LoadMatch
 * @property {number} id
 * @property {string} [org_id]
 * @property {string} [username]
 */

/**
 * @typedef {Object} ProjectsV2ListMatch
 * @property {string} org_id
 * @property {string} [after]
 * @property {string} [before]
 * @property {number} [per_page]
 * @property {string} [q]
 */

/**
 * @typedef {Object} ProjectsV2Field
 * @property {Object} [configuration]
 * @property {string} created_at
 * @property {string} data_type
 * @property {number} id
 * @property {string} name
 * @property {string} [node_id]
 * @property {Array} [options]
 * @property {string} project_url
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ProjectsV2FieldLoadMatch
 * @property {number} id
 * @property {string} [org_id]
 * @property {number} projects_v2_id
 * @property {string} [username]
 */

/**
 * @typedef {Object} ProjectsV2FieldListMatch
 * @property {string} [org_id]
 * @property {number} project_number
 * @property {string} [after]
 * @property {string} [before]
 * @property {number} [per_page]
 * @property {string} [username]
 */

/**
 * @typedef {Object} ProjectsV2ItemSimple
 * @property {number} id
 * @property {string} type
 */

/**
 * @typedef {Object} ProjectsV2ItemSimpleCreateData
 * @property {string} [org_id]
 * @property {number} project_number
 * @property {string} [username]
 * @property {number} id
 * @property {string} type
 */

/**
 * @typedef {Object} ProjectsV2ItemWithContent
 * @property {string} archived_at
 * @property {Object} [content]
 * @property {string} content_type
 * @property {string} created_at
 * @property {Object} creator
 * @property {Array} [fields]
 * @property {number} id
 * @property {string} [item_url]
 * @property {string} [node_id]
 * @property {string} [project_url]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ProjectsV2ItemWithContentLoadMatch
 * @property {number} item_id
 * @property {string} [org_id]
 * @property {number} projects_v2_id
 * @property {Array} [field]
 * @property {string} [username]
 */

/**
 * @typedef {Object} ProjectsV2ItemWithContentListMatch
 * @property {string} [org_id]
 * @property {number} project_number
 * @property {string} [after]
 * @property {string} [before]
 * @property {Array} [field]
 * @property {number} [per_page]
 * @property {string} [q]
 * @property {string} [username]
 */

/**
 * @typedef {Object} ProjectsV2ItemWithContentUpdateData
 * @property {number} item_id
 * @property {string} [org_id]
 * @property {number} projects_v2_id
 * @property {string} [username]
 * @property {string} [archived_at]
 * @property {Object} [content]
 * @property {string} [content_type]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {Array} [fields]
 * @property {number} [id]
 * @property {string} [item_url]
 * @property {string} [node_id]
 * @property {string} [project_url]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ProtectedBranch
 * @property {Object} allow_deletions
 * @property {Object} allow_force_pushes
 * @property {Object} [allow_fork_syncing]
 * @property {Object} block_creations
 * @property {Object} enforce_admins
 * @property {Object} [lock_branch]
 * @property {Object} [required_conversation_resolution]
 * @property {Object} required_linear_history
 * @property {Object} required_pull_request_reviews
 * @property {Object} required_signatures
 * @property {Object} required_status_checks
 * @property {Object} restrictions
 * @property {string} url
 */

/**
 * @typedef {Object} ProtectedBranchUpdateData
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 * @property {Object} [allow_deletions]
 * @property {Object} [allow_force_pushes]
 * @property {Object} [allow_fork_syncing]
 * @property {Object} [block_creations]
 * @property {Object} [enforce_admins]
 * @property {Object} [lock_branch]
 * @property {Object} [required_conversation_resolution]
 * @property {Object} [required_linear_history]
 * @property {Object} [required_pull_request_reviews]
 * @property {Object} [required_signatures]
 * @property {Object} [required_status_checks]
 * @property {Object} [restrictions]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ProtectedBranchAdminEnforced
 * @property {boolean} enabled
 * @property {string} url
 */

/**
 * @typedef {Object} ProtectedBranchAdminEnforcedLoadMatch
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ProtectedBranchAdminEnforcedCreateData
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 * @property {boolean} enabled
 * @property {string} url
 */

/**
 * @typedef {Object} ProtectedBranchPullRequestReview
 * @property {Object} [bypass_pull_request_allowances]
 * @property {boolean} dismiss_stale_reviews
 * @property {Object} [dismissal_restrictions]
 * @property {boolean} require_code_owner_reviews
 * @property {boolean} [require_last_push_approval]
 * @property {number} [required_approving_review_count]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ProtectedBranchPullRequestReviewLoadMatch
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ProtectedBranchPullRequestReviewUpdateData
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 * @property {Object} [bypass_pull_request_allowances]
 * @property {boolean} [dismiss_stale_reviews]
 * @property {Object} [dismissal_restrictions]
 * @property {boolean} [require_code_owner_reviews]
 * @property {boolean} [require_last_push_approval]
 * @property {number} [required_approving_review_count]
 * @property {string} [url]
 */

/**
 * @typedef {Object} PublicMember
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} PublicMemberListMatch
 * @property {string} org_id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Pull
 * @property {string} [active_lock_reason]
 * @property {number} additions
 * @property {Object} assignee
 * @property {Array} [assignees]
 * @property {string} author_association
 * @property {Object} auto_merge
 * @property {Object} base
 * @property {string} body
 * @property {number} changed_files
 * @property {string} closed_at
 * @property {number} comments
 * @property {string} comments_url
 * @property {string} [commit_message]
 * @property {string} [commit_title]
 * @property {number} commits
 * @property {string} commits_url
 * @property {string} created_at
 * @property {number} deletions
 * @property {string} diff_url
 * @property {boolean} [draft]
 * @property {string} [expected_head_sha]
 * @property {Object} head
 * @property {string} [head_repo]
 * @property {string} html_url
 * @property {number} id
 * @property {number} [issue]
 * @property {string} issue_url
 * @property {Array} labels
 * @property {Object} links
 * @property {boolean} locked
 * @property {boolean} maintainer_can_modify
 * @property {string} merge_commit_sha
 * @property {string} [merge_method]
 * @property {boolean} mergeable
 * @property {string} mergeable_state
 * @property {boolean} merged
 * @property {string} merged_at
 * @property {Object} merged_by
 * @property {string} message
 * @property {Object} milestone
 * @property {string} node_id
 * @property {number} number
 * @property {string} patch_url
 * @property {boolean} [rebaseable]
 * @property {Array} [requested_reviewers]
 * @property {Array} [requested_teams]
 * @property {string} review_comment_url
 * @property {number} review_comments
 * @property {string} review_comments_url
 * @property {string} sha
 * @property {string} state
 * @property {string} statuses_url
 * @property {string} title
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} PullLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} PullListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [base]
 * @property {string} [direction]
 * @property {string} [head]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [sort]
 * @property {string} [state]
 * @property {string} [commit_sha]
 */

/**
 * @typedef {Object} PullCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [active_lock_reason]
 * @property {number} additions
 * @property {Object} assignee
 * @property {Array} [assignees]
 * @property {string} author_association
 * @property {Object} auto_merge
 * @property {Object} base
 * @property {string} body
 * @property {number} changed_files
 * @property {string} closed_at
 * @property {number} comments
 * @property {string} comments_url
 * @property {string} [commit_message]
 * @property {string} [commit_title]
 * @property {number} commits
 * @property {string} commits_url
 * @property {string} created_at
 * @property {number} deletions
 * @property {string} diff_url
 * @property {boolean} [draft]
 * @property {string} [expected_head_sha]
 * @property {Object} head
 * @property {string} [head_repo]
 * @property {string} html_url
 * @property {number} id
 * @property {number} [issue]
 * @property {string} issue_url
 * @property {Array} labels
 * @property {Object} links
 * @property {boolean} locked
 * @property {boolean} maintainer_can_modify
 * @property {string} merge_commit_sha
 * @property {string} [merge_method]
 * @property {boolean} mergeable
 * @property {string} mergeable_state
 * @property {boolean} merged
 * @property {string} merged_at
 * @property {Object} merged_by
 * @property {string} message
 * @property {Object} milestone
 * @property {string} node_id
 * @property {number} number
 * @property {string} patch_url
 * @property {boolean} [rebaseable]
 * @property {Array} [requested_reviewers]
 * @property {Array} [requested_teams]
 * @property {string} review_comment_url
 * @property {number} review_comments
 * @property {string} review_comments_url
 * @property {string} sha
 * @property {string} state
 * @property {string} statuses_url
 * @property {string} title
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} PullUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [active_lock_reason]
 * @property {number} [additions]
 * @property {Object} [assignee]
 * @property {Array} [assignees]
 * @property {string} [author_association]
 * @property {Object} [auto_merge]
 * @property {Object} [base]
 * @property {string} [body]
 * @property {number} [changed_files]
 * @property {string} [closed_at]
 * @property {number} [comments]
 * @property {string} [comments_url]
 * @property {string} [commit_message]
 * @property {string} [commit_title]
 * @property {number} [commits]
 * @property {string} [commits_url]
 * @property {string} [created_at]
 * @property {number} [deletions]
 * @property {string} [diff_url]
 * @property {boolean} [draft]
 * @property {string} [expected_head_sha]
 * @property {Object} [head]
 * @property {string} [head_repo]
 * @property {string} [html_url]
 * @property {number} [issue]
 * @property {string} [issue_url]
 * @property {Array} [labels]
 * @property {Object} [links]
 * @property {boolean} [locked]
 * @property {boolean} [maintainer_can_modify]
 * @property {string} [merge_commit_sha]
 * @property {string} [merge_method]
 * @property {boolean} [mergeable]
 * @property {string} [mergeable_state]
 * @property {boolean} [merged]
 * @property {string} [merged_at]
 * @property {Object} [merged_by]
 * @property {string} [message]
 * @property {Object} [milestone]
 * @property {string} [node_id]
 * @property {number} [number]
 * @property {string} [patch_url]
 * @property {boolean} [rebaseable]
 * @property {Array} [requested_reviewers]
 * @property {Array} [requested_teams]
 * @property {string} [review_comment_url]
 * @property {number} [review_comments]
 * @property {string} [review_comments_url]
 * @property {string} [sha]
 * @property {string} [state]
 * @property {string} [statuses_url]
 * @property {string} [title]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {Object} [user]
 */

/**
 * @typedef {Object} PullRemoveMatch
 * @property {number} comment_id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} PullRequestReview
 * @property {string} author_association
 * @property {string} body
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {Array} [comments]
 * @property {string} commit_id
 * @property {string} event
 * @property {string} html_url
 * @property {number} id
 * @property {Object} links
 * @property {string} message
 * @property {string} node_id
 * @property {string} pull_request_url
 * @property {string} state
 * @property {string} [submitted_at]
 * @property {Array} teams
 * @property {Object} user
 * @property {Array} users
 */

/**
 * @typedef {Object} PullRequestReviewLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {number} pull_id
 * @property {string} repo
 */

/**
 * @typedef {Object} PullRequestReviewListMatch
 * @property {string} owner
 * @property {number} pull_number
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} PullRequestReviewCreateData
 * @property {string} owner
 * @property {number} [pull_id]
 * @property {string} repo
 * @property {number} [review_id]
 * @property {number} [pull_number]
 * @property {string} author_association
 * @property {string} body
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {Array} [comments]
 * @property {string} commit_id
 * @property {string} event
 * @property {string} html_url
 * @property {number} id
 * @property {Object} links
 * @property {string} message
 * @property {string} node_id
 * @property {string} pull_request_url
 * @property {string} state
 * @property {string} [submitted_at]
 * @property {Array} teams
 * @property {Object} user
 * @property {Array} users
 */

/**
 * @typedef {Object} PullRequestReviewUpdateData
 * @property {number} [id]
 * @property {string} owner
 * @property {number} pull_id
 * @property {string} repo
 * @property {number} [review_id]
 * @property {string} [author_association]
 * @property {string} [body]
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {Array} [comments]
 * @property {string} [commit_id]
 * @property {string} [event]
 * @property {string} [html_url]
 * @property {Object} [links]
 * @property {string} [message]
 * @property {string} [node_id]
 * @property {string} [pull_request_url]
 * @property {string} [state]
 * @property {string} [submitted_at]
 * @property {Array} [teams]
 * @property {Object} [user]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} PullRequestReviewRemoveMatch
 * @property {number} id
 * @property {string} owner
 * @property {number} pull_id
 * @property {string} repo
 */

/**
 * @typedef {Object} PullRequestReviewComment
 * @property {string} author_association
 * @property {string} body
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} commit_id
 * @property {string} created_at
 * @property {string} diff_hunk
 * @property {string} html_url
 * @property {number} id
 * @property {number} [in_reply_to]
 * @property {number} [in_reply_to_id]
 * @property {number} [line]
 * @property {Object} links
 * @property {string} node_id
 * @property {string} original_commit_id
 * @property {number} [original_line]
 * @property {number} [original_position]
 * @property {number} [original_start_line]
 * @property {string} path
 * @property {number} [position]
 * @property {number} pull_request_review_id
 * @property {string} pull_request_url
 * @property {Object} reactions
 * @property {string} [side]
 * @property {number} [start_line]
 * @property {string} [start_side]
 * @property {string} [subject_type]
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} PullRequestReviewCommentLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} PullRequestReviewCommentListMatch
 * @property {string} owner
 * @property {number} [pull_number]
 * @property {string} repo
 * @property {string} [direction]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [since]
 * @property {string} [sort]
 */

/**
 * @typedef {Object} PullRequestReviewCommentCreateData
 * @property {number} [comment_id]
 * @property {string} owner
 * @property {number} [pull_id]
 * @property {string} repo
 * @property {number} [pull_number]
 * @property {string} author_association
 * @property {string} body
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} commit_id
 * @property {string} created_at
 * @property {string} diff_hunk
 * @property {string} html_url
 * @property {number} id
 * @property {number} [in_reply_to]
 * @property {number} [in_reply_to_id]
 * @property {number} [line]
 * @property {Object} links
 * @property {string} node_id
 * @property {string} original_commit_id
 * @property {number} [original_line]
 * @property {number} [original_position]
 * @property {number} [original_start_line]
 * @property {string} path
 * @property {number} [position]
 * @property {number} pull_request_review_id
 * @property {string} pull_request_url
 * @property {Object} reactions
 * @property {string} [side]
 * @property {number} [start_line]
 * @property {string} [start_side]
 * @property {string} [subject_type]
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} PullRequestReviewCommentUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [author_association]
 * @property {string} [body]
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} [commit_id]
 * @property {string} [created_at]
 * @property {string} [diff_hunk]
 * @property {string} [html_url]
 * @property {number} [in_reply_to]
 * @property {number} [in_reply_to_id]
 * @property {number} [line]
 * @property {Object} [links]
 * @property {string} [node_id]
 * @property {string} [original_commit_id]
 * @property {number} [original_line]
 * @property {number} [original_position]
 * @property {number} [original_start_line]
 * @property {string} [path]
 * @property {number} [position]
 * @property {number} [pull_request_review_id]
 * @property {string} [pull_request_url]
 * @property {Object} [reactions]
 * @property {string} [side]
 * @property {number} [start_line]
 * @property {string} [start_side]
 * @property {string} [subject_type]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {Object} [user]
 */

/**
 * @typedef {Object} PullRequestSimple
 * @property {Array} [reviewers]
 * @property {Array} [team_reviewers]
 */

/**
 * @typedef {Object} PullRequestSimpleCreateData
 * @property {string} owner
 * @property {number} pull_number
 * @property {string} repo
 * @property {Array} [reviewers]
 * @property {Array} [team_reviewers]
 */

/**
 * @typedef {Object} PullRequestSimpleRemoveMatch
 * @property {string} owner
 * @property {number} pull_number
 * @property {string} repo
 */

/**
 * @typedef {Object} RateLimit
 * @property {Object} rate
 * @property {Object} resources
 */

/**
 * @typedef {Object} RateLimitLoadMatch
 * @property {Object} [rate]
 * @property {Object} [resources]
 */

/**
 * @typedef {Object} Reaction
 * @property {string} avatar_url
 * @property {string} content
 * @property {string} created_at
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {Object} user
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} ReactionListMatch
 * @property {number} discussion_number
 * @property {number} team_id
 * @property {string} [content]
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} ReactionCreateData
 * @property {number} discussion_number
 * @property {number} team_id
 * @property {string} avatar_url
 * @property {string} content
 * @property {string} created_at
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {Object} user
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} ReactionRemoveMatch
 * @property {number} [comment_id]
 * @property {number} [discussion_id]
 * @property {number} id
 * @property {string} [org_id]
 * @property {string} [team_id]
 * @property {string} [owner]
 * @property {string} [repo]
 * @property {number} [issue_id]
 * @property {number} [release_id]
 */

/**
 * @typedef {Object} Referrer
 * @property {number} count
 * @property {string} referrer
 * @property {number} uniques
 */

/**
 * @typedef {Object} ReferrerListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Release
 * @property {Array} assets
 * @property {string} assets_url
 * @property {Object} author
 * @property {string} [body]
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} browser_download_url
 * @property {string} content_type
 * @property {string} created_at
 * @property {string} digest
 * @property {string} [discussion_category_name]
 * @property {string} [discussion_url]
 * @property {number} download_count
 * @property {boolean} draft
 * @property {boolean} [generate_release_notes]
 * @property {string} html_url
 * @property {number} id
 * @property {boolean} [immutable]
 * @property {string} label
 * @property {string} [make_latest]
 * @property {number} [mentions_count]
 * @property {string} name
 * @property {string} node_id
 * @property {boolean} prerelease
 * @property {string} published_at
 * @property {Object} reactions
 * @property {number} size
 * @property {string} state
 * @property {string} tag_name
 * @property {string} tarball_url
 * @property {string} target_commitish
 * @property {string} [updated_at]
 * @property {string} upload_url
 * @property {Object} uploader
 * @property {string} url
 * @property {string} zipball_url
 */

/**
 * @typedef {Object} ReleaseLoadMatch
 * @property {number} [id]
 * @property {string} owner
 * @property {string} repo
 * @property {string} [tag]
 */

/**
 * @typedef {Object} ReleaseListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} ReleaseCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {Array} assets
 * @property {string} assets_url
 * @property {Object} author
 * @property {string} [body]
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} browser_download_url
 * @property {string} content_type
 * @property {string} created_at
 * @property {string} digest
 * @property {string} [discussion_category_name]
 * @property {string} [discussion_url]
 * @property {number} download_count
 * @property {boolean} draft
 * @property {boolean} [generate_release_notes]
 * @property {string} html_url
 * @property {number} id
 * @property {boolean} [immutable]
 * @property {string} label
 * @property {string} [make_latest]
 * @property {number} [mentions_count]
 * @property {string} name
 * @property {string} node_id
 * @property {boolean} prerelease
 * @property {string} published_at
 * @property {Object} reactions
 * @property {number} size
 * @property {string} state
 * @property {string} tag_name
 * @property {string} tarball_url
 * @property {string} target_commitish
 * @property {string} [updated_at]
 * @property {string} upload_url
 * @property {Object} uploader
 * @property {string} url
 * @property {string} zipball_url
 */

/**
 * @typedef {Object} ReleaseUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {Array} [assets]
 * @property {string} [assets_url]
 * @property {Object} [author]
 * @property {string} [body]
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} [browser_download_url]
 * @property {string} [content_type]
 * @property {string} [created_at]
 * @property {string} [digest]
 * @property {string} [discussion_category_name]
 * @property {string} [discussion_url]
 * @property {number} [download_count]
 * @property {boolean} [draft]
 * @property {boolean} [generate_release_notes]
 * @property {string} [html_url]
 * @property {boolean} [immutable]
 * @property {string} [label]
 * @property {string} [make_latest]
 * @property {number} [mentions_count]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {boolean} [prerelease]
 * @property {string} [published_at]
 * @property {Object} [reactions]
 * @property {number} [size]
 * @property {string} [state]
 * @property {string} [tag_name]
 * @property {string} [tarball_url]
 * @property {string} [target_commitish]
 * @property {string} [updated_at]
 * @property {string} [upload_url]
 * @property {Object} [uploader]
 * @property {string} [url]
 * @property {string} [zipball_url]
 */

/**
 * @typedef {Object} ReleaseAsset
 * @property {string} avatar_url
 * @property {string} [browser_download_url]
 * @property {string} [content_type]
 * @property {string} [created_at]
 * @property {string} [digest]
 * @property {number} [download_count]
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} [label]
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {number} [size]
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} [state]
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} [updated_at]
 * @property {Object} [uploader]
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} ReleaseAssetLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} ReleaseAssetListMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} ReleaseAssetCreateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [label]
 * @property {string} name
 * @property {string} avatar_url
 * @property {string} [browser_download_url]
 * @property {string} [content_type]
 * @property {string} [created_at]
 * @property {string} [digest]
 * @property {number} [download_count]
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {string} login
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {number} [size]
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} [state]
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} [updated_at]
 * @property {Object} [uploader]
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} ReleaseAssetUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [avatar_url]
 * @property {string} [browser_download_url]
 * @property {string} [content_type]
 * @property {string} [created_at]
 * @property {string} [digest]
 * @property {number} [download_count]
 * @property {string} [email]
 * @property {string} [events_url]
 * @property {string} [followers_url]
 * @property {string} [following_url]
 * @property {string} [gists_url]
 * @property {string} [gravatar_id]
 * @property {string} [html_url]
 * @property {string} [label]
 * @property {string} [login]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [organizations_url]
 * @property {string} [received_events_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {number} [size]
 * @property {string} [starred_at]
 * @property {string} [starred_url]
 * @property {string} [state]
 * @property {string} [subscriptions_url]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {Object} [uploader]
 * @property {string} [url]
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} ReleaseNotesContent
 * @property {string} body
 * @property {string} [configuration_file_path]
 * @property {string} name
 * @property {string} [previous_tag_name]
 * @property {string} tag_name
 * @property {string} [target_commitish]
 */

/**
 * @typedef {Object} ReleaseNotesContentCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} body
 * @property {string} [configuration_file_path]
 * @property {string} name
 * @property {string} [previous_tag_name]
 * @property {string} tag_name
 * @property {string} [target_commitish]
 */

/**
 * @typedef {Object} Remove
 * @property {Array} usernames
 */

/**
 * @typedef {Object} RemoveCreateData
 * @property {string} enterprise
 * @property {string} team_id
 * @property {Array} usernames
 */

/**
 * @typedef {Object} Repo
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {boolean} [anonymous_access_enabled]
 * @property {Object} app
 * @property {string} archive_url
 * @property {boolean} archived
 * @property {string} assignees_url
 * @property {Array} [attestations]
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} [build_type]
 * @property {Object} bundle
 * @property {Object} [client_payload]
 * @property {string} clone_url
 * @property {string} [cname]
 * @property {Object} [code_search_index_status]
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} [content]
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} created_at
 * @property {string} default_branch
 * @property {boolean} [default_branch_only]
 * @property {boolean} [delete_branch_on_merge]
 * @property {Object} deployment_branch_policy
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} disabled
 * @property {string} [download_url]
 * @property {string} downloads_url
 * @property {boolean} enabled
 * @property {string} [encoding]
 * @property {string} event_type
 * @property {string} events_url
 * @property {boolean} fork
 * @property {number} forks
 * @property {number} forks_count
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} [git_url]
 * @property {number} github_id
 * @property {boolean} [has_discussions]
 * @property {boolean} has_downloads
 * @property {boolean} has_issues
 * @property {boolean} has_pages
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {string} homepage
 * @property {string} hooks_url
 * @property {string} [html_url]
 * @property {boolean} [https_enforced]
 * @property {string} id
 * @property {string} integration_url
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} language
 * @property {string} languages_url
 * @property {Object} license
 * @property {Object} [links]
 * @property {string} [master_branch]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} mirror_url
 * @property {string} [name]
 * @property {string} [new_name]
 * @property {string} new_owner
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} open_issues
 * @property {number} open_issues_count
 * @property {string} [organization]
 * @property {Object} owner
 * @property {string} [path]
 * @property {Object} permissions
 * @property {boolean} private
 * @property {Array} properties
 * @property {Array} [protection_rules]
 * @property {string} pulls_url
 * @property {string} pushed_at
 * @property {string} releases_url
 * @property {string} [sha]
 * @property {number} [size]
 * @property {string} slug
 * @property {*} [source]
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} ssh_url
 * @property {number} stargazers_count
 * @property {string} stargazers_url
 * @property {string} [starred_at]
 * @property {string} statuses_url
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} svn_url
 * @property {string} tags_url
 * @property {Array} [team_ids]
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} [type]
 * @property {string} updated_at
 * @property {string} [url]
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [visibility]
 * @property {number} watchers
 * @property {number} watchers_count
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} RepoLoadMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [subject_digest]
 * @property {string} [after]
 * @property {string} [before]
 * @property {number} [per_page]
 * @property {string} [predicate_type]
 * @property {string} [path]
 * @property {string} [ref]
 * @property {string} [username]
 */

/**
 * @typedef {Object} RepoListMatch
 * @property {string} [affiliation]
 * @property {string} [before]
 * @property {string} [direction]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [since]
 * @property {string} [sort]
 * @property {string} [type]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} RepoCreateData
 * @property {number} [delivery_id]
 * @property {number} [hook_id]
 * @property {string} owner
 * @property {string} repo
 * @property {string} [branch_id]
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {boolean} [anonymous_access_enabled]
 * @property {Object} app
 * @property {string} archive_url
 * @property {boolean} archived
 * @property {string} assignees_url
 * @property {Array} [attestations]
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} [build_type]
 * @property {Object} bundle
 * @property {Object} [client_payload]
 * @property {string} clone_url
 * @property {string} [cname]
 * @property {Object} [code_search_index_status]
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} [content]
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} created_at
 * @property {string} default_branch
 * @property {boolean} [default_branch_only]
 * @property {boolean} [delete_branch_on_merge]
 * @property {Object} deployment_branch_policy
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} disabled
 * @property {string} [download_url]
 * @property {string} downloads_url
 * @property {boolean} enabled
 * @property {string} [encoding]
 * @property {string} event_type
 * @property {string} events_url
 * @property {boolean} fork
 * @property {number} forks
 * @property {number} forks_count
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} [git_url]
 * @property {number} github_id
 * @property {boolean} [has_discussions]
 * @property {boolean} has_downloads
 * @property {boolean} has_issues
 * @property {boolean} has_pages
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {string} homepage
 * @property {string} hooks_url
 * @property {string} [html_url]
 * @property {boolean} [https_enforced]
 * @property {string} id
 * @property {string} integration_url
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} language
 * @property {string} languages_url
 * @property {Object} license
 * @property {Object} [links]
 * @property {string} [master_branch]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} mirror_url
 * @property {string} [name]
 * @property {string} [new_name]
 * @property {string} new_owner
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} open_issues
 * @property {number} open_issues_count
 * @property {string} [organization]
 * @property {string} [path]
 * @property {Object} permissions
 * @property {boolean} private
 * @property {Array} properties
 * @property {Array} [protection_rules]
 * @property {string} pulls_url
 * @property {string} pushed_at
 * @property {string} releases_url
 * @property {string} [sha]
 * @property {number} [size]
 * @property {string} slug
 * @property {*} [source]
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} ssh_url
 * @property {number} stargazers_count
 * @property {string} stargazers_url
 * @property {string} [starred_at]
 * @property {string} statuses_url
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} svn_url
 * @property {string} tags_url
 * @property {Array} [team_ids]
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} [type]
 * @property {string} updated_at
 * @property {string} [url]
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [visibility]
 * @property {number} watchers
 * @property {number} watchers_count
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} RepoUpdateData
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {boolean} [anonymous_access_enabled]
 * @property {Object} [app]
 * @property {string} [archive_url]
 * @property {boolean} [archived]
 * @property {string} [assignees_url]
 * @property {Array} [attestations]
 * @property {string} [blobs_url]
 * @property {string} [branches_url]
 * @property {string} [build_type]
 * @property {Object} [bundle]
 * @property {Object} [client_payload]
 * @property {string} [clone_url]
 * @property {string} [cname]
 * @property {Object} [code_search_index_status]
 * @property {string} [collaborators_url]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [compare_url]
 * @property {string} [content]
 * @property {string} [contents_url]
 * @property {string} [contributors_url]
 * @property {string} [created_at]
 * @property {string} [default_branch]
 * @property {boolean} [default_branch_only]
 * @property {boolean} [delete_branch_on_merge]
 * @property {Object} [deployment_branch_policy]
 * @property {string} [deployments_url]
 * @property {string} [description]
 * @property {boolean} [disabled]
 * @property {string} [download_url]
 * @property {string} [downloads_url]
 * @property {boolean} [enabled]
 * @property {string} [encoding]
 * @property {string} [event_type]
 * @property {string} [events_url]
 * @property {boolean} [fork]
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} [forks_url]
 * @property {string} [full_name]
 * @property {string} [git_commits_url]
 * @property {string} [git_refs_url]
 * @property {string} [git_tags_url]
 * @property {string} [git_url]
 * @property {number} [github_id]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} [hooks_url]
 * @property {string} [html_url]
 * @property {boolean} [https_enforced]
 * @property {string} [id]
 * @property {string} [integration_url]
 * @property {boolean} [is_template]
 * @property {string} [issue_comment_url]
 * @property {string} [issue_events_url]
 * @property {string} [issues_url]
 * @property {string} [keys_url]
 * @property {string} [labels_url]
 * @property {string} [language]
 * @property {string} [languages_url]
 * @property {Object} [license]
 * @property {Object} [links]
 * @property {string} [master_branch]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} [merges_url]
 * @property {string} [milestones_url]
 * @property {string} [mirror_url]
 * @property {string} [name]
 * @property {string} [new_name]
 * @property {string} [new_owner]
 * @property {string} [node_id]
 * @property {string} [notifications_url]
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {string} [organization]
 * @property {string} [path]
 * @property {Object} [permissions]
 * @property {boolean} [private]
 * @property {Array} [properties]
 * @property {Array} [protection_rules]
 * @property {string} [pulls_url]
 * @property {string} [pushed_at]
 * @property {string} [releases_url]
 * @property {string} [sha]
 * @property {number} [size]
 * @property {string} [slug]
 * @property {*} [source]
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} [stargazers_url]
 * @property {string} [starred_at]
 * @property {string} [statuses_url]
 * @property {string} [subscribers_url]
 * @property {string} [subscription_url]
 * @property {string} [svn_url]
 * @property {string} [tags_url]
 * @property {Array} [team_ids]
 * @property {string} [teams_url]
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} [trees_url]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} RepoRemoveMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} Repository
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {boolean} [allow_update_branch]
 * @property {boolean} [anonymous_access_enabled]
 * @property {string} archive_url
 * @property {boolean} archived
 * @property {string} assignees_url
 * @property {string} blobs_url
 * @property {string} branches_url
 * @property {string} clone_url
 * @property {Object} [code_search_index_status]
 * @property {string} collaborators_url
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} created_at
 * @property {string} default_branch
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} disabled
 * @property {string} downloads_url
 * @property {string} events_url
 * @property {boolean} fork
 * @property {number} forks
 * @property {number} forks_count
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} git_url
 * @property {boolean} [has_discussions]
 * @property {boolean} has_downloads
 * @property {boolean} has_issues
 * @property {boolean} has_pages
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {string} homepage
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} language
 * @property {string} languages_url
 * @property {Object} license
 * @property {string} [master_branch]
 * @property {string} [merge_commit_message]
 * @property {string} [merge_commit_title]
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} mirror_url
 * @property {string} name
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} open_issues
 * @property {number} open_issues_count
 * @property {Object} owner
 * @property {Object} permissions
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} pushed_at
 * @property {string} releases_url
 * @property {number} size
 * @property {string} [squash_merge_commit_message]
 * @property {string} [squash_merge_commit_title]
 * @property {string} ssh_url
 * @property {number} stargazers_count
 * @property {string} stargazers_url
 * @property {string} [starred_at]
 * @property {string} statuses_url
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} svn_url
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} updated_at
 * @property {string} url
 * @property {boolean} [use_squash_pr_title_as_default]
 * @property {string} [visibility]
 * @property {number} watchers
 * @property {number} watchers_count
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} RepositoryListMatch
 * @property {string} [direction]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [sort]
 */

/**
 * @typedef {Object} RepositoryAdvisory
 * @property {*} author
 * @property {string} closed_at
 * @property {Array} collaborating_teams
 * @property {Array} collaborating_users
 * @property {string} created_at
 * @property {Array} credits
 * @property {Array} credits_detailed
 * @property {string} cve_id
 * @property {Object} cvss
 * @property {Object} [cvss_severities]
 * @property {string} [cvss_vector_string]
 * @property {Array} cwe_ids
 * @property {Array} cwes
 * @property {string} description
 * @property {string} ghsa_id
 * @property {string} html_url
 * @property {Array} identifiers
 * @property {*} private_fork
 * @property {string} published_at
 * @property {*} publisher
 * @property {string} severity
 * @property {boolean} [start_private_fork]
 * @property {string} state
 * @property {Object} submission
 * @property {string} summary
 * @property {string} updated_at
 * @property {string} url
 * @property {Array} vulnerabilities
 * @property {string} withdrawn_at
 */

/**
 * @typedef {Object} RepositoryAdvisoryLoadMatch
 * @property {string} ghsa_id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} RepositoryAdvisoryListMatch
 * @property {string} org_id
 * @property {string} [after]
 * @property {string} [before]
 * @property {string} [direction]
 * @property {number} [per_page]
 * @property {string} [sort]
 * @property {string} [state]
 */

/**
 * @typedef {Object} RepositoryAdvisoryCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {*} author
 * @property {string} closed_at
 * @property {Array} collaborating_teams
 * @property {Array} collaborating_users
 * @property {string} created_at
 * @property {Array} credits
 * @property {Array} credits_detailed
 * @property {string} cve_id
 * @property {Object} cvss
 * @property {Object} [cvss_severities]
 * @property {string} [cvss_vector_string]
 * @property {Array} cwe_ids
 * @property {Array} cwes
 * @property {string} description
 * @property {string} ghsa_id
 * @property {string} html_url
 * @property {Array} identifiers
 * @property {*} private_fork
 * @property {string} published_at
 * @property {*} publisher
 * @property {string} severity
 * @property {boolean} [start_private_fork]
 * @property {string} state
 * @property {Object} submission
 * @property {string} summary
 * @property {string} updated_at
 * @property {string} url
 * @property {Array} vulnerabilities
 * @property {string} withdrawn_at
 */

/**
 * @typedef {Object} RepositoryAdvisoryUpdateData
 * @property {string} ghsa_id
 * @property {string} owner
 * @property {string} repo
 * @property {*} [author]
 * @property {string} [closed_at]
 * @property {Array} [collaborating_teams]
 * @property {Array} [collaborating_users]
 * @property {string} [created_at]
 * @property {Array} [credits]
 * @property {Array} [credits_detailed]
 * @property {string} [cve_id]
 * @property {Object} [cvss]
 * @property {Object} [cvss_severities]
 * @property {string} [cvss_vector_string]
 * @property {Array} [cwe_ids]
 * @property {Array} [cwes]
 * @property {string} [description]
 * @property {string} [html_url]
 * @property {Array} [identifiers]
 * @property {*} [private_fork]
 * @property {string} [published_at]
 * @property {*} [publisher]
 * @property {string} [severity]
 * @property {boolean} [start_private_fork]
 * @property {string} [state]
 * @property {Object} [submission]
 * @property {string} [summary]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {Array} [vulnerabilities]
 * @property {string} [withdrawn_at]
 */

/**
 * @typedef {Object} RepositoryCollaboratorPermission
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {Object} permissions
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {string} role_name
 * @property {boolean} site_admin
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} RepositoryCollaboratorPermissionLoadMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} username
 */

/**
 * @typedef {Object} RepositoryInvitation
 * @property {string} created_at
 * @property {boolean} [expired]
 * @property {string} html_url
 * @property {number} id
 * @property {Object} invitee
 * @property {Object} inviter
 * @property {string} node_id
 * @property {string} [permission]
 * @property {string} permissions
 * @property {Object} repository
 * @property {string} url
 */

/**
 * @typedef {Object} RepositoryInvitationListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} RepositoryInvitationUpdateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} username
 * @property {string} [created_at]
 * @property {boolean} [expired]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {Object} [invitee]
 * @property {Object} [inviter]
 * @property {string} [node_id]
 * @property {string} [permission]
 * @property {string} [permissions]
 * @property {Object} [repository]
 * @property {string} [url]
 */

/**
 * @typedef {Object} RepositoryRuleDetailed
 * @property {Object} [parameters]
 * @property {number} [ruleset_id]
 * @property {string} [ruleset_source]
 * @property {string} [ruleset_source_type]
 * @property {string} [type]
 */

/**
 * @typedef {Object} RepositoryRuleDetailedLoadMatch
 * @property {string} branch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} RepositoryRuleset
 * @property {Array} [bypass_actors]
 * @property {*} [conditions]
 * @property {string} [created_at]
 * @property {string} [current_user_can_bypass]
 * @property {string} enforcement
 * @property {number} id
 * @property {Object} [links]
 * @property {string} name
 * @property {string} [node_id]
 * @property {Array} [rules]
 * @property {string} source
 * @property {string} [source_type]
 * @property {string} [target]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} RepositoryRulesetLoadMatch
 * @property {number} id
 * @property {string} [owner]
 * @property {string} [repo]
 * @property {boolean} [includes_parent]
 * @property {string} [org_id]
 */

/**
 * @typedef {Object} RepositoryRulesetListMatch
 * @property {string} org_id
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [target]
 */

/**
 * @typedef {Object} RepositoryRulesetCreateData
 * @property {string} org_id
 * @property {Array} [bypass_actors]
 * @property {*} [conditions]
 * @property {string} [created_at]
 * @property {string} [current_user_can_bypass]
 * @property {string} enforcement
 * @property {number} id
 * @property {Object} [links]
 * @property {string} name
 * @property {string} [node_id]
 * @property {Array} [rules]
 * @property {string} source
 * @property {string} [source_type]
 * @property {string} [target]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} RepositoryRulesetUpdateData
 * @property {number} id
 * @property {string} [owner]
 * @property {string} [repo]
 * @property {string} [org_id]
 * @property {Array} [bypass_actors]
 * @property {*} [conditions]
 * @property {string} [created_at]
 * @property {string} [current_user_can_bypass]
 * @property {string} [enforcement]
 * @property {Object} [links]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {Array} [rules]
 * @property {string} [source]
 * @property {string} [source_type]
 * @property {string} [target]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} RepositorySubscription
 * @property {string} created_at
 * @property {boolean} ignored
 * @property {string} reason
 * @property {string} repository_url
 * @property {boolean} subscribed
 * @property {string} url
 */

/**
 * @typedef {Object} RepositorySubscriptionLoadMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} RepositorySubscriptionUpdateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [created_at]
 * @property {boolean} [ignored]
 * @property {string} [reason]
 * @property {string} [repository_url]
 * @property {boolean} [subscribed]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ReviewComment
 * @property {string} author_association
 * @property {string} body
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} commit_id
 * @property {string} created_at
 * @property {string} diff_hunk
 * @property {string} html_url
 * @property {number} id
 * @property {number} [in_reply_to_id]
 * @property {number} [line]
 * @property {Object} links
 * @property {string} node_id
 * @property {string} original_commit_id
 * @property {number} [original_line]
 * @property {number} original_position
 * @property {number} [original_start_line]
 * @property {string} path
 * @property {number} position
 * @property {number} pull_request_review_id
 * @property {string} pull_request_url
 * @property {Object} reactions
 * @property {string} [side]
 * @property {number} [start_line]
 * @property {string} [start_side]
 * @property {string} [subject_type]
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef {Object} ReviewCommentListMatch
 * @property {number} id
 * @property {string} owner
 * @property {number} pull_id
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} RuleSuite
 * @property {number} [actor_id]
 * @property {string} [actor_name]
 * @property {string} [after_sha]
 * @property {string} [before_sha]
 * @property {string} [evaluation_result]
 * @property {number} [id]
 * @property {string} [pushed_at]
 * @property {string} [ref]
 * @property {number} [repository_id]
 * @property {string} [repository_name]
 * @property {string} [result]
 * @property {Array} [rule_evaluations]
 */

/**
 * @typedef {Object} RuleSuiteLoadMatch
 * @property {number} id
 * @property {string} [owner]
 * @property {string} [repo]
 * @property {string} [org_id]
 */

/**
 * @typedef {Object} RuleSuiteListMatch
 * @property {string} org_id
 * @property {string} [actor_name]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [ref]
 * @property {string} [repository_name]
 * @property {string} [rule_suite_result]
 * @property {string} [time_period]
 */

/**
 * @typedef {Object} RulesetVersion
 * @property {Object} actor
 * @property {string} [id]
 * @property {string} updated_at
 * @property {number} version_id
 */

/**
 * @typedef {Object} RulesetVersionListMatch
 * @property {number} id
 * @property {string} [owner]
 * @property {string} [repo]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [org_id]
 */

/**
 * @typedef {Object} RulesetVersionWithState
 * @property {Object} actor
 * @property {Object} state
 * @property {string} updated_at
 * @property {number} version_id
 */

/**
 * @typedef {Object} RulesetVersionWithStateLoadMatch
 * @property {string} [owner]
 * @property {string} [repo]
 * @property {number} ruleset_id
 * @property {number} version_id
 * @property {string} [org_id]
 */

/**
 * @typedef {Object} Runner
 * @property {boolean} busy
 * @property {boolean} [ephemeral]
 * @property {number} id
 * @property {Array} labels
 * @property {string} name
 * @property {string} os
 * @property {number} [runner_group_id]
 * @property {string} status
 */

/**
 * @typedef {Object} RunnerLoadMatch
 * @property {number} id
 * @property {string} [owner]
 * @property {string} [repo]
 * @property {string} [org_id]
 */

/**
 * @typedef {Object} RunnerApplication
 * @property {string} architecture
 * @property {string} download_url
 * @property {string} filename
 * @property {string} os
 * @property {string} [sha256_checksum]
 * @property {string} [temp_download_token]
 */

/**
 * @typedef {Object} RunnerApplicationListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} RunnerGroup
 * @property {boolean} allows_public_repositories
 * @property {boolean} default
 * @property {string} [hosted_runners_url]
 * @property {number} id
 * @property {boolean} inherited
 * @property {boolean} [inherited_allows_public_repositories]
 * @property {string} name
 * @property {string} [network_configuration_id]
 * @property {boolean} [restricted_to_workflows]
 * @property {Array} [runners]
 * @property {string} runners_url
 * @property {string} [selected_repositories_url]
 * @property {Array} [selected_repository_ids]
 * @property {Array} [selected_workflows]
 * @property {string} visibility
 * @property {boolean} [workflow_restrictions_read_only]
 */

/**
 * @typedef {Object} RunnerGroupLoadMatch
 * @property {number} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} RunnerGroupCreateData
 * @property {string} org_id
 * @property {boolean} allows_public_repositories
 * @property {boolean} default
 * @property {string} [hosted_runners_url]
 * @property {number} id
 * @property {boolean} inherited
 * @property {boolean} [inherited_allows_public_repositories]
 * @property {string} name
 * @property {string} [network_configuration_id]
 * @property {boolean} [restricted_to_workflows]
 * @property {Array} [runners]
 * @property {string} runners_url
 * @property {string} [selected_repositories_url]
 * @property {Array} [selected_repository_ids]
 * @property {Array} [selected_workflows]
 * @property {string} visibility
 * @property {boolean} [workflow_restrictions_read_only]
 */

/**
 * @typedef {Object} RunnerGroupUpdateData
 * @property {number} id
 * @property {string} org_id
 * @property {boolean} [allows_public_repositories]
 * @property {boolean} [default]
 * @property {string} [hosted_runners_url]
 * @property {boolean} [inherited]
 * @property {boolean} [inherited_allows_public_repositories]
 * @property {string} [name]
 * @property {string} [network_configuration_id]
 * @property {boolean} [restricted_to_workflows]
 * @property {Array} [runners]
 * @property {string} [runners_url]
 * @property {string} [selected_repositories_url]
 * @property {Array} [selected_repository_ids]
 * @property {Array} [selected_workflows]
 * @property {string} [visibility]
 * @property {boolean} [workflow_restrictions_read_only]
 */

/**
 * @typedef {Object} Search
 * @property {string} [active_lock_reason]
 * @property {Array} [aliases]
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {string} archive_url
 * @property {boolean} archived
 * @property {Object} assignee
 * @property {Array} [assignees]
 * @property {string} assignees_url
 * @property {Object} author
 * @property {string} author_association
 * @property {string} avatar_url
 * @property {string} [bio]
 * @property {string} blobs_url
 * @property {string} [blog]
 * @property {string} [body]
 * @property {string} [body_html]
 * @property {string} [body_text]
 * @property {string} branches_url
 * @property {string} clone_url
 * @property {string} closed_at
 * @property {string} collaborators_url
 * @property {string} color
 * @property {number} comments
 * @property {string} comments_url
 * @property {Object} commit
 * @property {string} commits_url
 * @property {Object} committer
 * @property {string} [company]
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} created_at
 * @property {string} created_by
 * @property {boolean} curated
 * @property {boolean} default
 * @property {string} default_branch
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} disabled
 * @property {string} display_name
 * @property {string} downloads_url
 * @property {boolean} [draft]
 * @property {string} [email]
 * @property {string} events_url
 * @property {boolean} featured
 * @property {number} [file_size]
 * @property {number} [followers]
 * @property {string} followers_url
 * @property {number} [following]
 * @property {string} following_url
 * @property {boolean} fork
 * @property {number} forks
 * @property {number} forks_count
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} gists_url
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} git_url
 * @property {string} gravatar_id
 * @property {boolean} [has_discussions]
 * @property {boolean} has_downloads
 * @property {boolean} has_issues
 * @property {boolean} has_pages
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {boolean} [hireable]
 * @property {string} homepage
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {Object} issue_dependencies_summary
 * @property {string} issue_events_url
 * @property {Array} [issue_field_values]
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {Array} labels
 * @property {string} labels_url
 * @property {string} [language]
 * @property {string} languages_url
 * @property {string} [last_modified_at]
 * @property {Object} license
 * @property {Array} [line_numbers]
 * @property {string} [location]
 * @property {boolean} locked
 * @property {string} login
 * @property {string} [logo_url]
 * @property {string} [master_branch]
 * @property {string} merges_url
 * @property {Object} milestone
 * @property {string} milestones_url
 * @property {string} mirror_url
 * @property {string} name
 * @property {string} node_id
 * @property {string} notifications_url
 * @property {number} number
 * @property {number} open_issues
 * @property {number} open_issues_count
 * @property {string} organizations_url
 * @property {Object} owner
 * @property {Array} parents
 * @property {string} path
 * @property {Object} performed_via_github_app
 * @property {Object} permissions
 * @property {boolean} private
 * @property {number} [public_gists]
 * @property {number} [public_repos]
 * @property {Object} pull_request
 * @property {string} pulls_url
 * @property {string} pushed_at
 * @property {Object} reactions
 * @property {string} received_events_url
 * @property {Array} [related]
 * @property {string} released
 * @property {string} releases_url
 * @property {string} repos_url
 * @property {Object} repository
 * @property {number} [repository_count]
 * @property {string} repository_url
 * @property {number} score
 * @property {string} sha
 * @property {string} short_description
 * @property {boolean} site_admin
 * @property {number} size
 * @property {string} ssh_url
 * @property {number} stargazers_count
 * @property {string} stargazers_url
 * @property {string} starred_url
 * @property {string} state
 * @property {string} [state_reason]
 * @property {string} statuses_url
 * @property {Object} sub_issues_summary
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} subscriptions_url
 * @property {string} [suspended_at]
 * @property {string} svn_url
 * @property {string} tags_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {Array} [text_matches]
 * @property {string} [timeline_url]
 * @property {string} title
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {Object} type
 * @property {string} updated_at
 * @property {string} url
 * @property {Object} user
 * @property {string} [user_view_type]
 * @property {string} [visibility]
 * @property {number} watchers
 * @property {number} watchers_count
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} SearchListMatch
 * @property {string} [advanced_search]
 * @property {string} [order]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} q
 * @property {string} [search_type]
 * @property {string} [sort]
 * @property {number} [repository_id]
 */

/**
 * @typedef {Object} SecretScanning
 * @property {Array} [custom_pattern_settings]
 * @property {string} [pattern_config_version]
 * @property {Array} [provider_pattern_settings]
 */

/**
 * @typedef {Object} SecretScanningUpdateData
 * @property {string} org_id
 * @property {Array} [custom_pattern_settings]
 * @property {string} [pattern_config_version]
 * @property {Array} [provider_pattern_settings]
 */

/**
 * @typedef {Object} SecretScanningAlert
 * @property {string} [created_at]
 * @property {*} [first_location_detected]
 * @property {boolean} [has_more_locations]
 * @property {string} [html_url]
 * @property {string} [id]
 * @property {boolean} [is_base64_encoded]
 * @property {string} [locations_url]
 * @property {boolean} [multi_repo]
 * @property {number} [number]
 * @property {boolean} [publicly_leaked]
 * @property {string} [push_protection_bypass_request_comment]
 * @property {string} [push_protection_bypass_request_html_url]
 * @property {Object} push_protection_bypass_request_reviewer
 * @property {string} [push_protection_bypass_request_reviewer_comment]
 * @property {boolean} [push_protection_bypassed]
 * @property {string} [push_protection_bypassed_at]
 * @property {Object} push_protection_bypassed_by
 * @property {string} [resolution]
 * @property {string} [resolution_comment]
 * @property {string} [resolved_at]
 * @property {Object} resolved_by
 * @property {string} [secret]
 * @property {string} [secret_type]
 * @property {string} [secret_type_display_name]
 * @property {string} [state]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [validity]
 */

/**
 * @typedef {Object} SecretScanningAlertLoadMatch
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {boolean} [hide_secret]
 */

/**
 * @typedef {Object} SecretScanningAlertListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [after]
 * @property {string} [before]
 * @property {string} [direction]
 * @property {boolean} [hide_secret]
 * @property {boolean} [is_multi_repo]
 * @property {boolean} [is_publicly_leaked]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [resolution]
 * @property {string} [secret_type]
 * @property {string} [sort]
 * @property {string} [state]
 * @property {string} [validity]
 */

/**
 * @typedef {Object} SecretScanningAlertUpdateData
 * @property {number} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [created_at]
 * @property {*} [first_location_detected]
 * @property {boolean} [has_more_locations]
 * @property {string} [html_url]
 * @property {boolean} [is_base64_encoded]
 * @property {string} [locations_url]
 * @property {boolean} [multi_repo]
 * @property {number} [number]
 * @property {boolean} [publicly_leaked]
 * @property {string} [push_protection_bypass_request_comment]
 * @property {string} [push_protection_bypass_request_html_url]
 * @property {Object} [push_protection_bypass_request_reviewer]
 * @property {string} [push_protection_bypass_request_reviewer_comment]
 * @property {boolean} [push_protection_bypassed]
 * @property {string} [push_protection_bypassed_at]
 * @property {Object} [push_protection_bypassed_by]
 * @property {string} [resolution]
 * @property {string} [resolution_comment]
 * @property {string} [resolved_at]
 * @property {Object} [resolved_by]
 * @property {string} [secret]
 * @property {string} [secret_type]
 * @property {string} [secret_type_display_name]
 * @property {string} [state]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [validity]
 */

/**
 * @typedef {Object} SecretScanningLocation
 * @property {*} [details]
 * @property {string} [type]
 */

/**
 * @typedef {Object} SecretScanningLocationListMatch
 * @property {number} alert_number
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} SecretScanningPatternConfiguration
 * @property {Array} [custom_pattern_overrides]
 * @property {string} [pattern_config_version]
 * @property {Array} [provider_pattern_overrides]
 */

/**
 * @typedef {Object} SecretScanningPatternConfigurationListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} SecretScanningPushProtectionBypass
 * @property {string} [expire_at]
 * @property {string} placeholder_id
 * @property {string} [reason]
 * @property {string} [token_type]
 */

/**
 * @typedef {Object} SecretScanningPushProtectionBypassCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [expire_at]
 * @property {string} placeholder_id
 * @property {string} [reason]
 * @property {string} [token_type]
 */

/**
 * @typedef {Object} SecretScanningScanHistory
 * @property {Array} [backfill_scans]
 * @property {Array} [custom_pattern_backfill_scans]
 * @property {Array} [incremental_scans]
 * @property {Array} [pattern_update_scans]
 */

/**
 * @typedef {Object} SecretScanningScanHistoryListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} SecurityAdvisory
 * @property {string} [id]
 */

/**
 * @typedef {Object} SecurityAdvisoryCreateData
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} SelectedAction
 * @property {boolean} [github_owned_allowed]
 * @property {Array} [patterns_allowed]
 * @property {boolean} [verified_allowed]
 */

/**
 * @typedef {Object} SelectedActionListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} SelfHostedRunner
 * @property {string} enabled_repositories
 * @property {string} [selected_repositories_url]
 */

/**
 * @typedef {Object} SelfHostedRunnerLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ShortBlob
 * @property {string} content
 * @property {string} [encoding]
 */

/**
 * @typedef {Object} ShortBlobCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} content
 * @property {string} [encoding]
 */

/**
 * @typedef {Object} ShortBranch
 * @property {Object} commit
 * @property {string} name
 * @property {boolean} protected
 * @property {Object} [protection]
 * @property {string} [protection_url]
 */

/**
 * @typedef {Object} ShortBranchListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {boolean} [protected]
 */

/**
 * @typedef {Object} SimpleClassroom
 */

/**
 * @typedef {Object} SimpleClassroomAssignment
 * @property {number} accepted
 * @property {Object} classroom
 * @property {string} deadline
 * @property {string} editor
 * @property {boolean} feedback_pull_requests_enabled
 * @property {number} id
 * @property {boolean} invitations_enabled
 * @property {string} invite_link
 * @property {string} language
 * @property {number} [max_members]
 * @property {number} [max_teams]
 * @property {number} passing
 * @property {boolean} public_repo
 * @property {string} slug
 * @property {boolean} students_are_repo_admins
 * @property {number} submitted
 * @property {string} title
 * @property {string} type
 */

/**
 * @typedef {Object} SimpleClassroomAssignmentListMatch
 * @property {number} classroom_id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} SocialAccount
 * @property {Array} account_urls
 * @property {string} provider
 * @property {string} url
 */

/**
 * @typedef {Object} SocialAccountListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} SocialAccountCreateData
 * @property {Array} account_urls
 * @property {string} provider
 * @property {string} url
 */

/**
 * @typedef {Object} SshSigningKey
 * @property {string} created_at
 * @property {number} id
 * @property {string} key
 * @property {string} title
 */

/**
 * @typedef {Object} SshSigningKeyLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} SshSigningKeyListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} SshSigningKeyCreateData
 * @property {string} created_at
 * @property {number} id
 * @property {string} key
 * @property {string} title
 */

/**
 * @typedef {Object} Status
 * @property {string} avatar_url
 * @property {string} [context]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {number} id
 * @property {string} node_id
 * @property {string} state
 * @property {string} [target_url]
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} StatusListMatch
 * @property {string} owner
 * @property {string} ref
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} StatusCreateData
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} avatar_url
 * @property {string} [context]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {string} node_id
 * @property {string} state
 * @property {string} [target_url]
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} StatusCheckPolicy
 * @property {number} app_id
 * @property {Array} checks
 * @property {string} context
 * @property {Array} contexts
 * @property {string} contexts_url
 * @property {boolean} strict
 * @property {string} url
 */

/**
 * @typedef {Object} StatusCheckPolicyListMatch
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} StatusCheckPolicyUpdateData
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 * @property {number} [app_id]
 * @property {Array} [checks]
 * @property {string} [context]
 * @property {Array} [contexts]
 * @property {string} [contexts_url]
 * @property {boolean} [strict]
 * @property {string} [url]
 */

/**
 * @typedef {Object} Subscriber
 * @property {string} avatar_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string} html_url
 * @property {number} id
 * @property {string} login
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} type
 * @property {string} url
 * @property {string} [user_view_type]
 */

/**
 * @typedef {Object} SubscriberListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Tag
 * @property {Object} commit
 * @property {string} name
 * @property {string} node_id
 * @property {string} tarball_url
 * @property {string} zipball_url
 */

/**
 * @typedef {Object} TagListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} TagProtection
 * @property {string} [created_at]
 * @property {boolean} [enabled]
 * @property {number} [id]
 * @property {string} pattern
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} TagProtectionListMatch
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} TagProtectionCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {string} [created_at]
 * @property {boolean} [enabled]
 * @property {number} [id]
 * @property {string} pattern
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} Team
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {string} archive_url
 * @property {boolean} archived
 * @property {string} assignees_url
 * @property {string} [assignment]
 * @property {Object} author
 * @property {string} avatar_url
 * @property {string} blobs_url
 * @property {string} body
 * @property {string} body_html
 * @property {string} body_version
 * @property {string} branches_url
 * @property {string} clone_url
 * @property {Object} code_of_conduct
 * @property {string} collaborators_url
 * @property {string} columns_url
 * @property {number} comments_count
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} created_at
 * @property {Object} creator
 * @property {Object} [custom_properties]
 * @property {string} default_branch
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} disabled
 * @property {string} discussion_url
 * @property {string} downloads_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} [failed_at]
 * @property {string} [failed_reason]
 * @property {string} followers_url
 * @property {string} following_url
 * @property {boolean} fork
 * @property {number} forks
 * @property {number} forks_count
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} gists_url
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} git_url
 * @property {string} gravatar_id
 * @property {boolean} [has_discussions]
 * @property {boolean} has_downloads
 * @property {boolean} has_issues
 * @property {boolean} has_pages
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {string} homepage
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {string} [invitation_source]
 * @property {string} invitation_teams_url
 * @property {Object} inviter
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} language
 * @property {string} languages_url
 * @property {string} last_edited_at
 * @property {string} [ldap_dn]
 * @property {Object} license
 * @property {string} login
 * @property {Array} [maintainers]
 * @property {string} [master_branch]
 * @property {number} members_count
 * @property {string} members_url
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} mirror_url
 * @property {string} name
 * @property {number} [network_count]
 * @property {string} node_id
 * @property {string} [notification_setting]
 * @property {string} notifications_url
 * @property {number} number
 * @property {number} open_issues
 * @property {number} open_issues_count
 * @property {Object} organization
 * @property {string} [organization_permission]
 * @property {string} organizations_url
 * @property {Object} owner
 * @property {string} owner_url
 * @property {Object} parent
 * @property {number} [parent_team_id]
 * @property {string} permission
 * @property {Object} permissions
 * @property {boolean} pinned
 * @property {string} [privacy]
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} pushed_at
 * @property {Object} reactions
 * @property {string} received_events_url
 * @property {string} releases_url
 * @property {Array} [repo_names]
 * @property {number} repos_count
 * @property {string} repos_url
 * @property {string} repositories_url
 * @property {string} role
 * @property {string} [role_name]
 * @property {Object} [security_and_analysis]
 * @property {boolean} site_admin
 * @property {number} size
 * @property {string} slug
 * @property {string} ssh_url
 * @property {number} stargazers_count
 * @property {string} stargazers_url
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} state
 * @property {string} statuses_url
 * @property {number} [subscribers_count]
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} subscriptions_url
 * @property {string} svn_url
 * @property {string} tags_url
 * @property {number} team_count
 * @property {string} team_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {string} title
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 * @property {string} [user_view_type]
 * @property {string} [visibility]
 * @property {number} watchers
 * @property {number} watchers_count
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} TeamLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} TeamListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} TeamCreateData
 * @property {string} org_id
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {string} archive_url
 * @property {boolean} archived
 * @property {string} assignees_url
 * @property {string} [assignment]
 * @property {Object} author
 * @property {string} avatar_url
 * @property {string} blobs_url
 * @property {string} body
 * @property {string} body_html
 * @property {string} body_version
 * @property {string} branches_url
 * @property {string} clone_url
 * @property {Object} code_of_conduct
 * @property {string} collaborators_url
 * @property {string} columns_url
 * @property {number} comments_count
 * @property {string} comments_url
 * @property {string} commits_url
 * @property {string} compare_url
 * @property {string} contents_url
 * @property {string} contributors_url
 * @property {string} created_at
 * @property {Object} creator
 * @property {Object} [custom_properties]
 * @property {string} default_branch
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} deployments_url
 * @property {string} description
 * @property {boolean} disabled
 * @property {string} discussion_url
 * @property {string} downloads_url
 * @property {string} [email]
 * @property {string} events_url
 * @property {string} [failed_at]
 * @property {string} [failed_reason]
 * @property {string} followers_url
 * @property {string} following_url
 * @property {boolean} fork
 * @property {number} forks
 * @property {number} forks_count
 * @property {string} forks_url
 * @property {string} full_name
 * @property {string} gists_url
 * @property {string} git_commits_url
 * @property {string} git_refs_url
 * @property {string} git_tags_url
 * @property {string} git_url
 * @property {string} gravatar_id
 * @property {boolean} [has_discussions]
 * @property {boolean} has_downloads
 * @property {boolean} has_issues
 * @property {boolean} has_pages
 * @property {boolean} has_projects
 * @property {boolean} has_wiki
 * @property {string} homepage
 * @property {string} hooks_url
 * @property {string} html_url
 * @property {number} id
 * @property {string} [invitation_source]
 * @property {string} invitation_teams_url
 * @property {Object} inviter
 * @property {boolean} [is_template]
 * @property {string} issue_comment_url
 * @property {string} issue_events_url
 * @property {string} issues_url
 * @property {string} keys_url
 * @property {string} labels_url
 * @property {string} language
 * @property {string} languages_url
 * @property {string} last_edited_at
 * @property {string} [ldap_dn]
 * @property {Object} license
 * @property {string} login
 * @property {Array} [maintainers]
 * @property {string} [master_branch]
 * @property {number} members_count
 * @property {string} members_url
 * @property {string} merges_url
 * @property {string} milestones_url
 * @property {string} mirror_url
 * @property {string} name
 * @property {number} [network_count]
 * @property {string} node_id
 * @property {string} [notification_setting]
 * @property {string} notifications_url
 * @property {number} number
 * @property {number} open_issues
 * @property {number} open_issues_count
 * @property {Object} organization
 * @property {string} [organization_permission]
 * @property {string} organizations_url
 * @property {Object} owner
 * @property {string} owner_url
 * @property {Object} parent
 * @property {number} [parent_team_id]
 * @property {string} permission
 * @property {Object} permissions
 * @property {boolean} pinned
 * @property {string} [privacy]
 * @property {boolean} private
 * @property {string} pulls_url
 * @property {string} pushed_at
 * @property {Object} reactions
 * @property {string} received_events_url
 * @property {string} releases_url
 * @property {Array} [repo_names]
 * @property {number} repos_count
 * @property {string} repos_url
 * @property {string} repositories_url
 * @property {string} role
 * @property {string} [role_name]
 * @property {Object} [security_and_analysis]
 * @property {boolean} site_admin
 * @property {number} size
 * @property {string} slug
 * @property {string} ssh_url
 * @property {number} stargazers_count
 * @property {string} stargazers_url
 * @property {string} [starred_at]
 * @property {string} starred_url
 * @property {string} state
 * @property {string} statuses_url
 * @property {number} [subscribers_count]
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} subscriptions_url
 * @property {string} svn_url
 * @property {string} tags_url
 * @property {number} team_count
 * @property {string} team_url
 * @property {string} teams_url
 * @property {string} [temp_clone_token]
 * @property {string} title
 * @property {Array} [topics]
 * @property {string} trees_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 * @property {string} [user_view_type]
 * @property {string} [visibility]
 * @property {number} watchers
 * @property {number} watchers_count
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} TeamUpdateData
 * @property {number} id
 * @property {number} project_id
 * @property {boolean} [allow_auto_merge]
 * @property {boolean} [allow_forking]
 * @property {boolean} [allow_merge_commit]
 * @property {boolean} [allow_rebase_merge]
 * @property {boolean} [allow_squash_merge]
 * @property {string} [archive_url]
 * @property {boolean} [archived]
 * @property {string} [assignees_url]
 * @property {string} [assignment]
 * @property {Object} [author]
 * @property {string} [avatar_url]
 * @property {string} [blobs_url]
 * @property {string} [body]
 * @property {string} [body_html]
 * @property {string} [body_version]
 * @property {string} [branches_url]
 * @property {string} [clone_url]
 * @property {Object} [code_of_conduct]
 * @property {string} [collaborators_url]
 * @property {string} [columns_url]
 * @property {number} [comments_count]
 * @property {string} [comments_url]
 * @property {string} [commits_url]
 * @property {string} [compare_url]
 * @property {string} [contents_url]
 * @property {string} [contributors_url]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {Object} [custom_properties]
 * @property {string} [default_branch]
 * @property {boolean} [delete_branch_on_merge]
 * @property {string} [deployments_url]
 * @property {string} [description]
 * @property {boolean} [disabled]
 * @property {string} [discussion_url]
 * @property {string} [downloads_url]
 * @property {string} [email]
 * @property {string} [events_url]
 * @property {string} [failed_at]
 * @property {string} [failed_reason]
 * @property {string} [followers_url]
 * @property {string} [following_url]
 * @property {boolean} [fork]
 * @property {number} [forks]
 * @property {number} [forks_count]
 * @property {string} [forks_url]
 * @property {string} [full_name]
 * @property {string} [gists_url]
 * @property {string} [git_commits_url]
 * @property {string} [git_refs_url]
 * @property {string} [git_tags_url]
 * @property {string} [git_url]
 * @property {string} [gravatar_id]
 * @property {boolean} [has_discussions]
 * @property {boolean} [has_downloads]
 * @property {boolean} [has_issues]
 * @property {boolean} [has_pages]
 * @property {boolean} [has_projects]
 * @property {boolean} [has_wiki]
 * @property {string} [homepage]
 * @property {string} [hooks_url]
 * @property {string} [html_url]
 * @property {string} [invitation_source]
 * @property {string} [invitation_teams_url]
 * @property {Object} [inviter]
 * @property {boolean} [is_template]
 * @property {string} [issue_comment_url]
 * @property {string} [issue_events_url]
 * @property {string} [issues_url]
 * @property {string} [keys_url]
 * @property {string} [labels_url]
 * @property {string} [language]
 * @property {string} [languages_url]
 * @property {string} [last_edited_at]
 * @property {string} [ldap_dn]
 * @property {Object} [license]
 * @property {string} [login]
 * @property {Array} [maintainers]
 * @property {string} [master_branch]
 * @property {number} [members_count]
 * @property {string} [members_url]
 * @property {string} [merges_url]
 * @property {string} [milestones_url]
 * @property {string} [mirror_url]
 * @property {string} [name]
 * @property {number} [network_count]
 * @property {string} [node_id]
 * @property {string} [notification_setting]
 * @property {string} [notifications_url]
 * @property {number} [number]
 * @property {number} [open_issues]
 * @property {number} [open_issues_count]
 * @property {Object} [organization]
 * @property {string} [organization_permission]
 * @property {string} [organizations_url]
 * @property {Object} [owner]
 * @property {string} [owner_url]
 * @property {Object} [parent]
 * @property {number} [parent_team_id]
 * @property {string} [permission]
 * @property {Object} [permissions]
 * @property {boolean} [pinned]
 * @property {string} [privacy]
 * @property {boolean} [private]
 * @property {string} [pulls_url]
 * @property {string} [pushed_at]
 * @property {Object} [reactions]
 * @property {string} [received_events_url]
 * @property {string} [releases_url]
 * @property {Array} [repo_names]
 * @property {number} [repos_count]
 * @property {string} [repos_url]
 * @property {string} [repositories_url]
 * @property {string} [role]
 * @property {string} [role_name]
 * @property {Object} [security_and_analysis]
 * @property {boolean} [site_admin]
 * @property {number} [size]
 * @property {string} [slug]
 * @property {string} [ssh_url]
 * @property {number} [stargazers_count]
 * @property {string} [stargazers_url]
 * @property {string} [starred_at]
 * @property {string} [starred_url]
 * @property {string} [state]
 * @property {string} [statuses_url]
 * @property {number} [subscribers_count]
 * @property {string} [subscribers_url]
 * @property {string} [subscription_url]
 * @property {string} [subscriptions_url]
 * @property {string} [svn_url]
 * @property {string} [tags_url]
 * @property {number} [team_count]
 * @property {string} [team_url]
 * @property {string} [teams_url]
 * @property {string} [temp_clone_token]
 * @property {string} [title]
 * @property {Array} [topics]
 * @property {string} [trees_url]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user_view_type]
 * @property {string} [visibility]
 * @property {number} [watchers]
 * @property {number} [watchers_count]
 * @property {boolean} [web_commit_signoff_required]
 */

/**
 * @typedef {Object} TeamRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} TeamSimple
 * @property {string} description
 * @property {string} html_url
 * @property {number} id
 * @property {string} [ldap_dn]
 * @property {string} members_url
 * @property {string} name
 * @property {string} node_id
 * @property {string} [notification_setting]
 * @property {string} permission
 * @property {string} [privacy]
 * @property {string} repositories_url
 * @property {string} slug
 * @property {string} url
 */

/**
 * @typedef {Object} TeamSimpleListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} Thread
 * @property {string} id
 * @property {string} last_read_at
 * @property {string} reason
 * @property {Object} repository
 * @property {Object} subject
 * @property {string} subscription_url
 * @property {boolean} unread
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} ThreadLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ThreadListMatch
 * @property {boolean} [all]
 * @property {string} [before]
 * @property {number} [page]
 * @property {boolean} [participating]
 * @property {number} [per_page]
 * @property {string} [since]
 */

/**
 * @typedef {Object} ThreadRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ThreadSubscription
 * @property {string} created_at
 * @property {string} [id]
 * @property {boolean} ignored
 * @property {string} reason
 * @property {string} [repository_url]
 * @property {boolean} subscribed
 * @property {string} [thread_url]
 * @property {string} url
 */

/**
 * @typedef {Object} ThreadSubscriptionLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ThreadSubscriptionUpdateData
 * @property {number} id
 * @property {string} [created_at]
 * @property {boolean} [ignored]
 * @property {string} [reason]
 * @property {string} [repository_url]
 * @property {boolean} [subscribed]
 * @property {string} [thread_url]
 * @property {string} [url]
 */

/**
 * @typedef {Object} Topic
 * @property {Array} names
 */

/**
 * @typedef {Object} TopicListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} TopicUpdateData
 * @property {string} owner
 * @property {string} repo
 * @property {Array} [names]
 */

/**
 * @typedef {Object} User
 * @property {string} [assignment]
 * @property {Object} [attestations_subject_digests]
 * @property {string} [avatar_url]
 * @property {string} [bio]
 * @property {string} [blog]
 * @property {number} [collaborators]
 * @property {string} [company]
 * @property {string} [created_at]
 * @property {number} [disk_usage]
 * @property {string} [email]
 * @property {string} [events_url]
 * @property {number} [followers]
 * @property {string} [followers_url]
 * @property {number} [following]
 * @property {string} [following_url]
 * @property {string} [gists_url]
 * @property {string} [gravatar_id]
 * @property {boolean} [hireable]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {Array} [inherited_from]
 * @property {string} [location]
 * @property {string} [login]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [organizations_url]
 * @property {number} [owned_private_repos]
 * @property {Object} [page_info]
 * @property {Object} [plan]
 * @property {string} [predicate_type]
 * @property {number} [private_gists]
 * @property {number} private_repos
 * @property {number} [public_gists]
 * @property {number} [public_repos]
 * @property {string} [received_events_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {number} space
 * @property {string} [starred_at]
 * @property {string} [starred_url]
 * @property {Array} subject_digests
 * @property {string} [subscriptions_url]
 * @property {number} [total_private_repos]
 * @property {string} [twitter_username]
 * @property {boolean} [two_factor_authentication]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user_view_type]
 * @property {Array} users
 */

/**
 * @typedef {Object} UserLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} UserListMatch
 * @property {number} [per_page]
 * @property {number} [since]
 */

/**
 * @typedef {Object} UserCreateData
 * @property {string} branch_id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [assignment]
 * @property {Object} [attestations_subject_digests]
 * @property {string} [avatar_url]
 * @property {string} [bio]
 * @property {string} [blog]
 * @property {number} [collaborators]
 * @property {string} [company]
 * @property {string} [created_at]
 * @property {number} [disk_usage]
 * @property {string} [email]
 * @property {string} [events_url]
 * @property {number} [followers]
 * @property {string} [followers_url]
 * @property {number} [following]
 * @property {string} [following_url]
 * @property {string} [gists_url]
 * @property {string} [gravatar_id]
 * @property {boolean} [hireable]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {Array} [inherited_from]
 * @property {string} [location]
 * @property {string} [login]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [organizations_url]
 * @property {number} [owned_private_repos]
 * @property {Object} [page_info]
 * @property {Object} [plan]
 * @property {string} [predicate_type]
 * @property {number} [private_gists]
 * @property {number} private_repos
 * @property {number} [public_gists]
 * @property {number} [public_repos]
 * @property {string} [received_events_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {number} space
 * @property {string} [starred_at]
 * @property {string} [starred_url]
 * @property {Array} subject_digests
 * @property {string} [subscriptions_url]
 * @property {number} [total_private_repos]
 * @property {string} [twitter_username]
 * @property {boolean} [two_factor_authentication]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user_view_type]
 * @property {Array} users
 */

/**
 * @typedef {Object} UserUpdateData
 * @property {string} username
 * @property {string} [assignment]
 * @property {Object} [attestations_subject_digests]
 * @property {string} [avatar_url]
 * @property {string} [bio]
 * @property {string} [blog]
 * @property {number} [collaborators]
 * @property {string} [company]
 * @property {string} [created_at]
 * @property {number} [disk_usage]
 * @property {string} [email]
 * @property {string} [events_url]
 * @property {number} [followers]
 * @property {string} [followers_url]
 * @property {number} [following]
 * @property {string} [following_url]
 * @property {string} [gists_url]
 * @property {string} [gravatar_id]
 * @property {boolean} [hireable]
 * @property {string} [html_url]
 * @property {number} [id]
 * @property {Array} [inherited_from]
 * @property {string} [location]
 * @property {string} [login]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [organizations_url]
 * @property {number} [owned_private_repos]
 * @property {Object} [page_info]
 * @property {Object} [plan]
 * @property {string} [predicate_type]
 * @property {number} [private_gists]
 * @property {number} [private_repos]
 * @property {number} [public_gists]
 * @property {number} [public_repos]
 * @property {string} [received_events_url]
 * @property {string} [repos_url]
 * @property {boolean} [site_admin]
 * @property {number} [space]
 * @property {string} [starred_at]
 * @property {string} [starred_url]
 * @property {Array} [subject_digests]
 * @property {string} [subscriptions_url]
 * @property {number} [total_private_repos]
 * @property {string} [twitter_username]
 * @property {boolean} [two_factor_authentication]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {string} [user_view_type]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} UserRemoveMatch
 * @property {number} gpg_key_id
 */

/**
 * @typedef {Object} UserMarketplacePurchase
 * @property {Object} account
 * @property {string} billing_cycle
 * @property {string} free_trial_ends_on
 * @property {string} next_billing_date
 * @property {boolean} on_free_trial
 * @property {Object} plan
 * @property {number} unit_count
 * @property {string} updated_at
 */

/**
 * @typedef {Object} UserMarketplacePurchaseListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} View
 * @property {number} count
 * @property {string} timestamp
 * @property {number} uniques
 */

/**
 * @typedef {Object} ViewListMatch
 * @property {string} owner
 * @property {string} repo
 * @property {string} [per]
 */

/**
 * @typedef {Object} WebhookConfig
 * @property {string} [content_type]
 * @property {string} [insecure_ssl]
 * @property {string} [secret]
 * @property {string} [url]
 */

/**
 * @typedef {Object} WebhookConfigLoadMatch
 * @property {string} [content_type]
 * @property {string} [insecure_ssl]
 * @property {string} [secret]
 * @property {string} [url]
 */

/**
 * @typedef {Object} WebhookConfigUpdateData
 * @property {string} [content_type]
 * @property {string} [insecure_ssl]
 * @property {string} [secret]
 * @property {string} [url]
 */

/**
 * @typedef {Object} Workflow
 * @property {string} badge_url
 * @property {string} created_at
 * @property {string} [deleted_at]
 * @property {string} html_url
 * @property {number} id
 * @property {string} name
 * @property {string} node_id
 * @property {string} path
 * @property {string} state
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} WorkflowLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef {Object} WorkflowUpdateData
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 * @property {string} [badge_url]
 * @property {string} [created_at]
 * @property {string} [deleted_at]
 * @property {string} [html_url]
 * @property {string} [name]
 * @property {string} [node_id]
 * @property {string} [path]
 * @property {string} [state]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} WorkflowRun
 * @property {Object} actor
 * @property {string} artifacts_url
 * @property {string} cancel_url
 * @property {number} [check_suite_id]
 * @property {string} [check_suite_node_id]
 * @property {string} check_suite_url
 * @property {string} conclusion
 * @property {string} created_at
 * @property {string} display_title
 * @property {string} event
 * @property {string} head_branch
 * @property {Object} head_commit
 * @property {Object} head_repository
 * @property {number} [head_repository_id]
 * @property {string} head_sha
 * @property {string} html_url
 * @property {number} id
 * @property {string} jobs_url
 * @property {string} logs_url
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} path
 * @property {string} [previous_attempt_url]
 * @property {Array} pull_requests
 * @property {Array} [referenced_workflows]
 * @property {Object} repository
 * @property {string} rerun_url
 * @property {number} [run_attempt]
 * @property {number} run_number
 * @property {string} [run_started_at]
 * @property {string} status
 * @property {Object} triggering_actor
 * @property {string} updated_at
 * @property {string} url
 * @property {number} workflow_id
 * @property {string} workflow_url
 */

/**
 * @typedef {Object} WorkflowRunLoadMatch
 * @property {number} [attempt_number]
 * @property {string} owner
 * @property {string} repo
 * @property {number} [run_id]
 * @property {boolean} [exclude_pull_request]
 * @property {number} [id]
 */

/**
 * @typedef {Object} WorkflowRunCreateData
 * @property {string} owner
 * @property {string} repo
 * @property {number} run_id
 * @property {Object} actor
 * @property {string} artifacts_url
 * @property {string} cancel_url
 * @property {number} [check_suite_id]
 * @property {string} [check_suite_node_id]
 * @property {string} check_suite_url
 * @property {string} conclusion
 * @property {string} created_at
 * @property {string} display_title
 * @property {string} event
 * @property {string} head_branch
 * @property {Object} head_commit
 * @property {Object} head_repository
 * @property {number} [head_repository_id]
 * @property {string} head_sha
 * @property {string} html_url
 * @property {number} id
 * @property {string} jobs_url
 * @property {string} logs_url
 * @property {string} [name]
 * @property {string} node_id
 * @property {string} path
 * @property {string} [previous_attempt_url]
 * @property {Array} pull_requests
 * @property {Array} [referenced_workflows]
 * @property {Object} repository
 * @property {string} rerun_url
 * @property {number} [run_attempt]
 * @property {number} run_number
 * @property {string} [run_started_at]
 * @property {string} status
 * @property {Object} triggering_actor
 * @property {string} updated_at
 * @property {string} url
 * @property {number} workflow_id
 * @property {string} workflow_url
 */

/**
 * @typedef {Object} WorkflowRunUsage
 * @property {Object} MACOS
 * @property {Object} UBUNTU
 * @property {Object} WINDOWS
 */

/**
 * @typedef {Object} WorkflowRunUsageLoadMatch
 * @property {string} owner
 * @property {string} repo
 * @property {number} run_id
 */

/**
 * @typedef {Object} WorkflowUsage
 * @property {Object} [MACOS]
 * @property {Object} [UBUNTU]
 * @property {Object} [WINDOWS]
 * @property {string} [id]
 */

/**
 * @typedef {Object} WorkflowUsageLoadMatch
 * @property {string} id
 * @property {string} owner
 * @property {string} repo
 */

