// Typed models for the Github SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/github-sdk/go/core"
)

// Action is the typed data model for the action entity.
type Action struct {
	MACOS *int `json:"MACOS,omitempty"`
	UBUNTU *int `json:"UBUNTU,omitempty"`
	WINDOWS *int `json:"WINDOWS,omitempty"`
	AccessLevel string `json:"access_level"`
	ActiveCachesCount int `json:"active_caches_count"`
	ActiveCachesSizeInBytes int `json:"active_caches_size_in_bytes"`
	Actor map[string]any `json:"actor"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AllowedActions *string `json:"allowed_actions,omitempty"`
	AllowsPublicRepositories bool `json:"allows_public_repositories"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	ApprovalPolicy string `json:"approval_policy"`
	ArchiveDownloadUrl string `json:"archive_download_url"`
	ArchiveUrl string `json:"archive_url"`
	Archived *bool `json:"archived,omitempty"`
	ArtifactsUrl string `json:"artifacts_url"`
	AssigneesUrl string `json:"assignees_url"`
	BadgeUrl string `json:"badge_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	Busy bool `json:"busy"`
	CanApprovePullRequestReviews *bool `json:"can_approve_pull_request_reviews,omitempty"`
	CancelUrl string `json:"cancel_url"`
	CheckRunUrl string `json:"check_run_url"`
	CheckSuiteId *int `json:"check_suite_id,omitempty"`
	CheckSuiteNodeId *string `json:"check_suite_node_id,omitempty"`
	CheckSuiteUrl string `json:"check_suite_url"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	CompletedAt string `json:"completed_at"`
	Conclusion string `json:"conclusion"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CpuCores int `json:"cpu_cores"`
	CreatedAt string `json:"created_at"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	Days int `json:"days"`
	Default bool `json:"default"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DefaultWorkflowPermissions *string `json:"default_workflow_permissions,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Digest *string `json:"digest,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DisplayName string `json:"display_name"`
	DisplayTitle string `json:"display_title"`
	DownloadsUrl string `json:"downloads_url"`
	Enabled bool `json:"enabled"`
	EnabledRepositories string `json:"enabled_repositories"`
	Ephemeral *bool `json:"ephemeral,omitempty"`
	Event string `json:"event"`
	EventsUrl string `json:"events_url"`
	Expired bool `json:"expired"`
	ExpiresAt string `json:"expires_at"`
	Fork bool `json:"fork"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl *string `json:"git_url,omitempty"`
	GithubOwnedAllowed *bool `json:"github_owned_allowed,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	HeadBranch string `json:"head_branch"`
	HeadCommit map[string]any `json:"head_commit"`
	HeadRepository map[string]any `json:"head_repository"`
	HeadRepositoryId *int `json:"head_repository_id,omitempty"`
	HeadSha string `json:"head_sha"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl string `json:"hooks_url"`
	HostedRunnersUrl *string `json:"hosted_runners_url,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	ImageDetails map[string]any `json:"image_details"`
	Inherited bool `json:"inherited"`
	InheritedAllowsPublicRepositories *bool `json:"inherited_allows_public_repositories,omitempty"`
	Inputs *map[string]any `json:"inputs,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	JobsUrl string `json:"jobs_url"`
	KeysUrl string `json:"keys_url"`
	Labels []any `json:"labels"`
	LabelsUrl string `json:"labels_url"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl string `json:"languages_url"`
	LastActiveOn *string `json:"last_active_on,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	LogsUrl string `json:"logs_url"`
	MachineSizeDetails map[string]any `json:"machine_size_details"`
	Macos12Core *int `json:"macos_12_core,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MaximumRunners *int `json:"maximum_runners,omitempty"`
	MemoryGb int `json:"memory_gb"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name string `json:"name"`
	NetworkConfigurationId *string `json:"network_configuration_id,omitempty"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Os string `json:"os"`
	Owner map[string]any `json:"owner"`
	Path string `json:"path"`
	PatternsAllowed *[]any `json:"patterns_allowed,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Platform string `json:"platform"`
	Platforms []any `json:"platforms"`
	PreviousAttemptUrl *string `json:"previous_attempt_url,omitempty"`
	Private bool `json:"private"`
	PublicIpEnabled bool `json:"public_ip_enabled"`
	PublicIps *[]any `json:"public_ips,omitempty"`
	PullRequests []any `json:"pull_requests"`
	PullsUrl string `json:"pulls_url"`
	PushedAt *string `json:"pushed_at,omitempty"`
	Ref string `json:"ref"`
	ReferencedWorkflows *[]any `json:"referenced_workflows,omitempty"`
	ReleasesUrl string `json:"releases_url"`
	Repository map[string]any `json:"repository"`
	RequireApprovalForForkPrWorkflows *bool `json:"require_approval_for_fork_pr_workflows,omitempty"`
	RerunUrl string `json:"rerun_url"`
	RestrictedToWorkflows *bool `json:"restricted_to_workflows,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	RunAttempt *int `json:"run_attempt,omitempty"`
	RunId int `json:"run_id"`
	RunNumber int `json:"run_number"`
	RunStartedAt *string `json:"run_started_at,omitempty"`
	RunUrl string `json:"run_url"`
	RunWorkflowsFromForkPullRequests bool `json:"run_workflows_from_fork_pull_requests"`
	RunnerGroupId int `json:"runner_group_id"`
	RunnerGroupName string `json:"runner_group_name"`
	RunnerId int `json:"runner_id"`
	RunnerName string `json:"runner_name"`
	Runners []any `json:"runners"`
	RunnersUrl string `json:"runners_url"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds []any `json:"selected_repository_ids"`
	SelectedWorkflows *[]any `json:"selected_workflows,omitempty"`
	SendSecretsAndVariables *bool `json:"send_secrets_and_variables,omitempty"`
	SendWriteTokensToWorkflows *bool `json:"send_write_tokens_to_workflows,omitempty"`
	ShaPinningRequired *bool `json:"sha_pinning_required,omitempty"`
	Size *int `json:"size,omitempty"`
	SizeGb int `json:"size_gb"`
	SizeInBytes int `json:"size_in_bytes"`
	Source string `json:"source"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl string `json:"stargazers_url"`
	StarredAt *string `json:"starred_at,omitempty"`
	StartedAt string `json:"started_at"`
	State string `json:"state"`
	Status string `json:"status"`
	StatusesUrl string `json:"statuses_url"`
	Steps *[]any `json:"steps,omitempty"`
	StorageGb int `json:"storage_gb"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	Total *int `json:"total,omitempty"`
	TotalCount int `json:"total_count"`
	TreesUrl string `json:"trees_url"`
	TriggeringActor map[string]any `json:"triggering_actor"`
	Type *string `json:"type,omitempty"`
	Ubuntu16Core *int `json:"ubuntu_16_core,omitempty"`
	Ubuntu32Core *int `json:"ubuntu_32_core,omitempty"`
	Ubuntu4Core *int `json:"ubuntu_4_core,omitempty"`
	Ubuntu64Core *int `json:"ubuntu_64_core,omitempty"`
	Ubuntu8Core *int `json:"ubuntu_8_core,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Value *string `json:"value,omitempty"`
	VerifiedAllowed *bool `json:"verified_allowed,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
	Windows16Core *int `json:"windows_16_core,omitempty"`
	Windows32Core *int `json:"windows_32_core,omitempty"`
	Windows4Core *int `json:"windows_4_core,omitempty"`
	Windows64Core *int `json:"windows_64_core,omitempty"`
	Windows8Core *int `json:"windows_8_core,omitempty"`
	WorkFolder *string `json:"work_folder,omitempty"`
	WorkflowId int `json:"workflow_id"`
	WorkflowName string `json:"workflow_name"`
	WorkflowRestrictionsReadOnly *bool `json:"workflow_restrictions_read_only,omitempty"`
	WorkflowRun *map[string]any `json:"workflow_run,omitempty"`
	WorkflowUrl string `json:"workflow_url"`
}

// ActionLoadMatch is the typed request payload for Action.LoadTyped.
type ActionLoadMatch struct {
	ArchiveFormat string `json:"archive_format"`
	ArtifactId int `json:"artifact_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ActionListMatch is the typed request payload for Action.ListTyped.
type ActionListMatch struct {
	OrgId string `json:"org_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ActionCreateData is the typed request payload for Action.CreateTyped.
type ActionCreateData struct {
	OrgId string `json:"org_id"`
	MACOS *int `json:"MACOS,omitempty"`
	UBUNTU *int `json:"UBUNTU,omitempty"`
	WINDOWS *int `json:"WINDOWS,omitempty"`
	AccessLevel string `json:"access_level"`
	ActiveCachesCount int `json:"active_caches_count"`
	ActiveCachesSizeInBytes int `json:"active_caches_size_in_bytes"`
	Actor map[string]any `json:"actor"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AllowedActions *string `json:"allowed_actions,omitempty"`
	AllowsPublicRepositories bool `json:"allows_public_repositories"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	ApprovalPolicy string `json:"approval_policy"`
	ArchiveDownloadUrl string `json:"archive_download_url"`
	ArchiveUrl string `json:"archive_url"`
	Archived *bool `json:"archived,omitempty"`
	ArtifactsUrl string `json:"artifacts_url"`
	AssigneesUrl string `json:"assignees_url"`
	BadgeUrl string `json:"badge_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	Busy bool `json:"busy"`
	CanApprovePullRequestReviews *bool `json:"can_approve_pull_request_reviews,omitempty"`
	CancelUrl string `json:"cancel_url"`
	CheckRunUrl string `json:"check_run_url"`
	CheckSuiteId *int `json:"check_suite_id,omitempty"`
	CheckSuiteNodeId *string `json:"check_suite_node_id,omitempty"`
	CheckSuiteUrl string `json:"check_suite_url"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	CompletedAt string `json:"completed_at"`
	Conclusion string `json:"conclusion"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CpuCores int `json:"cpu_cores"`
	CreatedAt string `json:"created_at"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	Days int `json:"days"`
	Default bool `json:"default"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DefaultWorkflowPermissions *string `json:"default_workflow_permissions,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Digest *string `json:"digest,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DisplayName string `json:"display_name"`
	DisplayTitle string `json:"display_title"`
	DownloadsUrl string `json:"downloads_url"`
	Enabled bool `json:"enabled"`
	EnabledRepositories string `json:"enabled_repositories"`
	Ephemeral *bool `json:"ephemeral,omitempty"`
	Event string `json:"event"`
	EventsUrl string `json:"events_url"`
	Expired bool `json:"expired"`
	ExpiresAt string `json:"expires_at"`
	Fork bool `json:"fork"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl *string `json:"git_url,omitempty"`
	GithubOwnedAllowed *bool `json:"github_owned_allowed,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	HeadBranch string `json:"head_branch"`
	HeadCommit map[string]any `json:"head_commit"`
	HeadRepository map[string]any `json:"head_repository"`
	HeadRepositoryId *int `json:"head_repository_id,omitempty"`
	HeadSha string `json:"head_sha"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl string `json:"hooks_url"`
	HostedRunnersUrl *string `json:"hosted_runners_url,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	ImageDetails map[string]any `json:"image_details"`
	Inherited bool `json:"inherited"`
	InheritedAllowsPublicRepositories *bool `json:"inherited_allows_public_repositories,omitempty"`
	Inputs *map[string]any `json:"inputs,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	JobsUrl string `json:"jobs_url"`
	KeysUrl string `json:"keys_url"`
	Labels []any `json:"labels"`
	LabelsUrl string `json:"labels_url"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl string `json:"languages_url"`
	LastActiveOn *string `json:"last_active_on,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	LogsUrl string `json:"logs_url"`
	MachineSizeDetails map[string]any `json:"machine_size_details"`
	Macos12Core *int `json:"macos_12_core,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MaximumRunners *int `json:"maximum_runners,omitempty"`
	MemoryGb int `json:"memory_gb"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name string `json:"name"`
	NetworkConfigurationId *string `json:"network_configuration_id,omitempty"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Os string `json:"os"`
	Owner map[string]any `json:"owner"`
	Path string `json:"path"`
	PatternsAllowed *[]any `json:"patterns_allowed,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Platform string `json:"platform"`
	Platforms []any `json:"platforms"`
	PreviousAttemptUrl *string `json:"previous_attempt_url,omitempty"`
	Private bool `json:"private"`
	PublicIpEnabled bool `json:"public_ip_enabled"`
	PublicIps *[]any `json:"public_ips,omitempty"`
	PullRequests []any `json:"pull_requests"`
	PullsUrl string `json:"pulls_url"`
	PushedAt *string `json:"pushed_at,omitempty"`
	Ref string `json:"ref"`
	ReferencedWorkflows *[]any `json:"referenced_workflows,omitempty"`
	ReleasesUrl string `json:"releases_url"`
	Repository map[string]any `json:"repository"`
	RequireApprovalForForkPrWorkflows *bool `json:"require_approval_for_fork_pr_workflows,omitempty"`
	RerunUrl string `json:"rerun_url"`
	RestrictedToWorkflows *bool `json:"restricted_to_workflows,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	RunAttempt *int `json:"run_attempt,omitempty"`
	RunId int `json:"run_id"`
	RunNumber int `json:"run_number"`
	RunStartedAt *string `json:"run_started_at,omitempty"`
	RunUrl string `json:"run_url"`
	RunWorkflowsFromForkPullRequests bool `json:"run_workflows_from_fork_pull_requests"`
	RunnerGroupId int `json:"runner_group_id"`
	RunnerGroupName string `json:"runner_group_name"`
	RunnerId int `json:"runner_id"`
	RunnerName string `json:"runner_name"`
	Runners []any `json:"runners"`
	RunnersUrl string `json:"runners_url"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds []any `json:"selected_repository_ids"`
	SelectedWorkflows *[]any `json:"selected_workflows,omitempty"`
	SendSecretsAndVariables *bool `json:"send_secrets_and_variables,omitempty"`
	SendWriteTokensToWorkflows *bool `json:"send_write_tokens_to_workflows,omitempty"`
	ShaPinningRequired *bool `json:"sha_pinning_required,omitempty"`
	Size *int `json:"size,omitempty"`
	SizeGb int `json:"size_gb"`
	SizeInBytes int `json:"size_in_bytes"`
	Source string `json:"source"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl string `json:"stargazers_url"`
	StarredAt *string `json:"starred_at,omitempty"`
	StartedAt string `json:"started_at"`
	State string `json:"state"`
	Status string `json:"status"`
	StatusesUrl string `json:"statuses_url"`
	Steps *[]any `json:"steps,omitempty"`
	StorageGb int `json:"storage_gb"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	Total *int `json:"total,omitempty"`
	TotalCount int `json:"total_count"`
	TreesUrl string `json:"trees_url"`
	TriggeringActor map[string]any `json:"triggering_actor"`
	Type *string `json:"type,omitempty"`
	Ubuntu16Core *int `json:"ubuntu_16_core,omitempty"`
	Ubuntu32Core *int `json:"ubuntu_32_core,omitempty"`
	Ubuntu4Core *int `json:"ubuntu_4_core,omitempty"`
	Ubuntu64Core *int `json:"ubuntu_64_core,omitempty"`
	Ubuntu8Core *int `json:"ubuntu_8_core,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Value *string `json:"value,omitempty"`
	VerifiedAllowed *bool `json:"verified_allowed,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
	Windows16Core *int `json:"windows_16_core,omitempty"`
	Windows32Core *int `json:"windows_32_core,omitempty"`
	Windows4Core *int `json:"windows_4_core,omitempty"`
	Windows64Core *int `json:"windows_64_core,omitempty"`
	Windows8Core *int `json:"windows_8_core,omitempty"`
	WorkFolder *string `json:"work_folder,omitempty"`
	WorkflowId int `json:"workflow_id"`
	WorkflowName string `json:"workflow_name"`
	WorkflowRestrictionsReadOnly *bool `json:"workflow_restrictions_read_only,omitempty"`
	WorkflowRun *map[string]any `json:"workflow_run,omitempty"`
	WorkflowUrl string `json:"workflow_url"`
}

// ActionUpdateData is the typed request payload for Action.UpdateTyped.
type ActionUpdateData struct {
	OrgId string `json:"org_id"`
	RepositoryId int `json:"repository_id"`
	MACOS *int `json:"MACOS,omitempty"`
	UBUNTU *int `json:"UBUNTU,omitempty"`
	WINDOWS *int `json:"WINDOWS,omitempty"`
	AccessLevel *string `json:"access_level,omitempty"`
	ActiveCachesCount *int `json:"active_caches_count,omitempty"`
	ActiveCachesSizeInBytes *int `json:"active_caches_size_in_bytes,omitempty"`
	Actor *map[string]any `json:"actor,omitempty"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AllowedActions *string `json:"allowed_actions,omitempty"`
	AllowsPublicRepositories *bool `json:"allows_public_repositories,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	ApprovalPolicy *string `json:"approval_policy,omitempty"`
	ArchiveDownloadUrl *string `json:"archive_download_url,omitempty"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	ArtifactsUrl *string `json:"artifacts_url,omitempty"`
	AssigneesUrl *string `json:"assignees_url,omitempty"`
	BadgeUrl *string `json:"badge_url,omitempty"`
	BlobsUrl *string `json:"blobs_url,omitempty"`
	BranchesUrl *string `json:"branches_url,omitempty"`
	Busy *bool `json:"busy,omitempty"`
	CanApprovePullRequestReviews *bool `json:"can_approve_pull_request_reviews,omitempty"`
	CancelUrl *string `json:"cancel_url,omitempty"`
	CheckRunUrl *string `json:"check_run_url,omitempty"`
	CheckSuiteId *int `json:"check_suite_id,omitempty"`
	CheckSuiteNodeId *string `json:"check_suite_node_id,omitempty"`
	CheckSuiteUrl *string `json:"check_suite_url,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct *map[string]any `json:"code_of_conduct,omitempty"`
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
	CollaboratorsUrl *string `json:"collaborators_url,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CompareUrl *string `json:"compare_url,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	Conclusion *string `json:"conclusion,omitempty"`
	ContentsUrl *string `json:"contents_url,omitempty"`
	ContributorsUrl *string `json:"contributors_url,omitempty"`
	CpuCores *int `json:"cpu_cores,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	Days *int `json:"days,omitempty"`
	Default *bool `json:"default,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DefaultWorkflowPermissions *string `json:"default_workflow_permissions,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	DeploymentsUrl *string `json:"deployments_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Digest *string `json:"digest,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	DisplayTitle *string `json:"display_title,omitempty"`
	DownloadsUrl *string `json:"downloads_url,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EnabledRepositories *string `json:"enabled_repositories,omitempty"`
	Ephemeral *bool `json:"ephemeral,omitempty"`
	Event *string `json:"event,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	Expired *bool `json:"expired,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Fork *bool `json:"fork,omitempty"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	GitCommitsUrl *string `json:"git_commits_url,omitempty"`
	GitRefsUrl *string `json:"git_refs_url,omitempty"`
	GitTagsUrl *string `json:"git_tags_url,omitempty"`
	GitUrl *string `json:"git_url,omitempty"`
	GithubOwnedAllowed *bool `json:"github_owned_allowed,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	HeadBranch *string `json:"head_branch,omitempty"`
	HeadCommit *map[string]any `json:"head_commit,omitempty"`
	HeadRepository *map[string]any `json:"head_repository,omitempty"`
	HeadRepositoryId *int `json:"head_repository_id,omitempty"`
	HeadSha *string `json:"head_sha,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl *string `json:"hooks_url,omitempty"`
	HostedRunnersUrl *string `json:"hosted_runners_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageDetails *map[string]any `json:"image_details,omitempty"`
	Inherited *bool `json:"inherited,omitempty"`
	InheritedAllowsPublicRepositories *bool `json:"inherited_allows_public_repositories,omitempty"`
	Inputs *map[string]any `json:"inputs,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl *string `json:"issue_comment_url,omitempty"`
	IssueEventsUrl *string `json:"issue_events_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	JobsUrl *string `json:"jobs_url,omitempty"`
	KeysUrl *string `json:"keys_url,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl *string `json:"languages_url,omitempty"`
	LastActiveOn *string `json:"last_active_on,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	LogsUrl *string `json:"logs_url,omitempty"`
	MachineSizeDetails *map[string]any `json:"machine_size_details,omitempty"`
	Macos12Core *int `json:"macos_12_core,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MaximumRunners *int `json:"maximum_runners,omitempty"`
	MemoryGb *int `json:"memory_gb,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl *string `json:"merges_url,omitempty"`
	MilestonesUrl *string `json:"milestones_url,omitempty"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NetworkConfigurationId *string `json:"network_configuration_id,omitempty"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationsUrl *string `json:"notifications_url,omitempty"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Os *string `json:"os,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Path *string `json:"path,omitempty"`
	PatternsAllowed *[]any `json:"patterns_allowed,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Platforms *[]any `json:"platforms,omitempty"`
	PreviousAttemptUrl *string `json:"previous_attempt_url,omitempty"`
	Private *bool `json:"private,omitempty"`
	PublicIpEnabled *bool `json:"public_ip_enabled,omitempty"`
	PublicIps *[]any `json:"public_ips,omitempty"`
	PullRequests *[]any `json:"pull_requests,omitempty"`
	PullsUrl *string `json:"pulls_url,omitempty"`
	PushedAt *string `json:"pushed_at,omitempty"`
	Ref *string `json:"ref,omitempty"`
	ReferencedWorkflows *[]any `json:"referenced_workflows,omitempty"`
	ReleasesUrl *string `json:"releases_url,omitempty"`
	Repository *map[string]any `json:"repository,omitempty"`
	RequireApprovalForForkPrWorkflows *bool `json:"require_approval_for_fork_pr_workflows,omitempty"`
	RerunUrl *string `json:"rerun_url,omitempty"`
	RestrictedToWorkflows *bool `json:"restricted_to_workflows,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	RunAttempt *int `json:"run_attempt,omitempty"`
	RunId *int `json:"run_id,omitempty"`
	RunNumber *int `json:"run_number,omitempty"`
	RunStartedAt *string `json:"run_started_at,omitempty"`
	RunUrl *string `json:"run_url,omitempty"`
	RunWorkflowsFromForkPullRequests *bool `json:"run_workflows_from_fork_pull_requests,omitempty"`
	RunnerGroupId *int `json:"runner_group_id,omitempty"`
	RunnerGroupName *string `json:"runner_group_name,omitempty"`
	RunnerId *int `json:"runner_id,omitempty"`
	RunnerName *string `json:"runner_name,omitempty"`
	Runners *[]any `json:"runners,omitempty"`
	RunnersUrl *string `json:"runners_url,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	SelectedWorkflows *[]any `json:"selected_workflows,omitempty"`
	SendSecretsAndVariables *bool `json:"send_secrets_and_variables,omitempty"`
	SendWriteTokensToWorkflows *bool `json:"send_write_tokens_to_workflows,omitempty"`
	ShaPinningRequired *bool `json:"sha_pinning_required,omitempty"`
	Size *int `json:"size,omitempty"`
	SizeGb *int `json:"size_gb,omitempty"`
	SizeInBytes *int `json:"size_in_bytes,omitempty"`
	Source *string `json:"source,omitempty"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl *string `json:"stargazers_url,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	State *string `json:"state,omitempty"`
	Status *string `json:"status,omitempty"`
	StatusesUrl *string `json:"statuses_url,omitempty"`
	Steps *[]any `json:"steps,omitempty"`
	StorageGb *int `json:"storage_gb,omitempty"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl *string `json:"subscribers_url,omitempty"`
	SubscriptionUrl *string `json:"subscription_url,omitempty"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl *string `json:"tags_url,omitempty"`
	TeamsUrl *string `json:"teams_url,omitempty"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	Total *int `json:"total,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	TreesUrl *string `json:"trees_url,omitempty"`
	TriggeringActor *map[string]any `json:"triggering_actor,omitempty"`
	Type *string `json:"type,omitempty"`
	Ubuntu16Core *int `json:"ubuntu_16_core,omitempty"`
	Ubuntu32Core *int `json:"ubuntu_32_core,omitempty"`
	Ubuntu4Core *int `json:"ubuntu_4_core,omitempty"`
	Ubuntu64Core *int `json:"ubuntu_64_core,omitempty"`
	Ubuntu8Core *int `json:"ubuntu_8_core,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Value *string `json:"value,omitempty"`
	VerifiedAllowed *bool `json:"verified_allowed,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
	Windows16Core *int `json:"windows_16_core,omitempty"`
	Windows32Core *int `json:"windows_32_core,omitempty"`
	Windows4Core *int `json:"windows_4_core,omitempty"`
	Windows64Core *int `json:"windows_64_core,omitempty"`
	Windows8Core *int `json:"windows_8_core,omitempty"`
	WorkFolder *string `json:"work_folder,omitempty"`
	WorkflowId *int `json:"workflow_id,omitempty"`
	WorkflowName *string `json:"workflow_name,omitempty"`
	WorkflowRestrictionsReadOnly *bool `json:"workflow_restrictions_read_only,omitempty"`
	WorkflowRun *map[string]any `json:"workflow_run,omitempty"`
	WorkflowUrl *string `json:"workflow_url,omitempty"`
}

// ActionRemoveMatch is the typed request payload for Action.RemoveTyped.
type ActionRemoveMatch struct {
	HostedRunnerId int `json:"hosted_runner_id"`
	OrgId string `json:"org_id"`
}

// ActionsArtifactAndLogRetention is the typed data model for the actions_artifact_and_log_retention entity.
type ActionsArtifactAndLogRetention struct {
	Days int `json:"days"`
	MaximumAllowedDays int `json:"maximum_allowed_days"`
}

// ActionsArtifactAndLogRetentionLoadMatch is the typed request payload for ActionsArtifactAndLogRetention.LoadTyped.
type ActionsArtifactAndLogRetentionLoadMatch struct {
	OrgId string `json:"org_id"`
}

// ActionsCacheList is the typed data model for the actions_cache_list entity.
type ActionsCacheList struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	LastAccessedAt *string `json:"last_accessed_at,omitempty"`
	Ref *string `json:"ref,omitempty"`
	SizeInBytes *int `json:"size_in_bytes,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ActionsCacheListListMatch is the typed request payload for ActionsCacheList.ListTyped.
type ActionsCacheListListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Direction *string `json:"direction,omitempty"`
	Key *string `json:"key,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Sort *string `json:"sort,omitempty"`
}

// ActionsCacheListRemoveMatch is the typed request payload for ActionsCacheList.RemoveTyped.
type ActionsCacheListRemoveMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Key string `json:"key"`
	Ref *string `json:"ref,omitempty"`
}

// ActionsCacheUsageByRepository is the typed data model for the actions_cache_usage_by_repository entity.
type ActionsCacheUsageByRepository struct {
	ActiveCachesCount int `json:"active_caches_count"`
	ActiveCachesSizeInBytes int `json:"active_caches_size_in_bytes"`
	FullName string `json:"full_name"`
}

// ActionsCacheUsageByRepositoryLoadMatch is the typed request payload for ActionsCacheUsageByRepository.LoadTyped.
type ActionsCacheUsageByRepositoryLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ActionsCacheUsageOrgEnterprise is the typed data model for the actions_cache_usage_org_enterprise entity.
type ActionsCacheUsageOrgEnterprise struct {
	TotalActiveCachesCount int `json:"total_active_caches_count"`
	TotalActiveCachesSizeInBytes int `json:"total_active_caches_size_in_bytes"`
}

// ActionsCacheUsageOrgEnterpriseLoadMatch is the typed request payload for ActionsCacheUsageOrgEnterprise.LoadTyped.
type ActionsCacheUsageOrgEnterpriseLoadMatch struct {
	OrgId string `json:"org_id"`
}

// ActionsForkPrContributorApproval is the typed data model for the actions_fork_pr_contributor_approval entity.
type ActionsForkPrContributorApproval struct {
	ApprovalPolicy string `json:"approval_policy"`
}

// ActionsForkPrContributorApprovalLoadMatch is the typed request payload for ActionsForkPrContributorApproval.LoadTyped.
type ActionsForkPrContributorApprovalLoadMatch struct {
	OrgId string `json:"org_id"`
}

// ActionsForkPrWorkflowsPrivateRepo is the typed data model for the actions_fork_pr_workflows_private_repo entity.
type ActionsForkPrWorkflowsPrivateRepo struct {
	RequireApprovalForForkPrWorkflows bool `json:"require_approval_for_fork_pr_workflows"`
	RunWorkflowsFromForkPullRequests bool `json:"run_workflows_from_fork_pull_requests"`
	SendSecretsAndVariables bool `json:"send_secrets_and_variables"`
	SendWriteTokensToWorkflows bool `json:"send_write_tokens_to_workflows"`
}

// ActionsForkPrWorkflowsPrivateRepoLoadMatch is the typed request payload for ActionsForkPrWorkflowsPrivateRepo.LoadTyped.
type ActionsForkPrWorkflowsPrivateRepoLoadMatch struct {
	OrgId string `json:"org_id"`
}

// ActionsGetDefaultWorkflowPermission is the typed data model for the actions_get_default_workflow_permission entity.
type ActionsGetDefaultWorkflowPermission struct {
	CanApprovePullRequestReviews bool `json:"can_approve_pull_request_reviews"`
	DefaultWorkflowPermissions string `json:"default_workflow_permissions"`
}

// ActionsGetDefaultWorkflowPermissionLoadMatch is the typed request payload for ActionsGetDefaultWorkflowPermission.LoadTyped.
type ActionsGetDefaultWorkflowPermissionLoadMatch struct {
	OrgId string `json:"org_id"`
}

// ActionsHostedRunner is the typed data model for the actions_hosted_runner entity.
type ActionsHostedRunner struct {
	EnableStaticIp *bool `json:"enable_static_ip,omitempty"`
	Id int `json:"id"`
	Image map[string]any `json:"image"`
	ImageDetails map[string]any `json:"image_details"`
	LastActiveOn *string `json:"last_active_on,omitempty"`
	MachineSizeDetails map[string]any `json:"machine_size_details"`
	MaximumRunners *int `json:"maximum_runners,omitempty"`
	Name string `json:"name"`
	Platform string `json:"platform"`
	PublicIpEnabled bool `json:"public_ip_enabled"`
	PublicIps *[]any `json:"public_ips,omitempty"`
	RunnerGroupId *int `json:"runner_group_id,omitempty"`
	Size string `json:"size"`
	Status string `json:"status"`
}

// ActionsHostedRunnerLoadMatch is the typed request payload for ActionsHostedRunner.LoadTyped.
type ActionsHostedRunnerLoadMatch struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
}

// ActionsHostedRunnerCreateData is the typed request payload for ActionsHostedRunner.CreateTyped.
type ActionsHostedRunnerCreateData struct {
	OrgId string `json:"org_id"`
	EnableStaticIp *bool `json:"enable_static_ip,omitempty"`
	Id int `json:"id"`
	Image map[string]any `json:"image"`
	ImageDetails map[string]any `json:"image_details"`
	LastActiveOn *string `json:"last_active_on,omitempty"`
	MachineSizeDetails map[string]any `json:"machine_size_details"`
	MaximumRunners *int `json:"maximum_runners,omitempty"`
	Name string `json:"name"`
	Platform string `json:"platform"`
	PublicIpEnabled bool `json:"public_ip_enabled"`
	PublicIps *[]any `json:"public_ips,omitempty"`
	RunnerGroupId *int `json:"runner_group_id,omitempty"`
	Size string `json:"size"`
	Status string `json:"status"`
}

// ActionsHostedRunnerUpdateData is the typed request payload for ActionsHostedRunner.UpdateTyped.
type ActionsHostedRunnerUpdateData struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
	EnableStaticIp *bool `json:"enable_static_ip,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	ImageDetails *map[string]any `json:"image_details,omitempty"`
	LastActiveOn *string `json:"last_active_on,omitempty"`
	MachineSizeDetails *map[string]any `json:"machine_size_details,omitempty"`
	MaximumRunners *int `json:"maximum_runners,omitempty"`
	Name *string `json:"name,omitempty"`
	Platform *string `json:"platform,omitempty"`
	PublicIpEnabled *bool `json:"public_ip_enabled,omitempty"`
	PublicIps *[]any `json:"public_ips,omitempty"`
	RunnerGroupId *int `json:"runner_group_id,omitempty"`
	Size *string `json:"size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ActionsHostedRunnerLimit is the typed data model for the actions_hosted_runner_limit entity.
type ActionsHostedRunnerLimit struct {
	CurrentUsage int `json:"current_usage"`
	Maximum int `json:"maximum"`
}

// ActionsHostedRunnerLimitLoadMatch is the typed request payload for ActionsHostedRunnerLimit.LoadTyped.
type ActionsHostedRunnerLimitLoadMatch struct {
	OrgId string `json:"org_id"`
}

// ActionsOrganizationPermission is the typed data model for the actions_organization_permission entity.
type ActionsOrganizationPermission struct {
	AllowedActions *string `json:"allowed_actions,omitempty"`
	EnabledRepositories string `json:"enabled_repositories"`
	SelectedActionsUrl *string `json:"selected_actions_url,omitempty"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	ShaPinningRequired *bool `json:"sha_pinning_required,omitempty"`
}

// ActionsOrganizationPermissionLoadMatch is the typed request payload for ActionsOrganizationPermission.LoadTyped.
type ActionsOrganizationPermissionLoadMatch struct {
	OrgId string `json:"org_id"`
}

// ActionsPublicKey is the typed data model for the actions_public_key entity.
type ActionsPublicKey struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Key string `json:"key"`
	KeyId string `json:"key_id"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ActionsPublicKeyLoadMatch is the typed request payload for ActionsPublicKey.LoadTyped.
type ActionsPublicKeyLoadMatch struct {
	OrgId string `json:"org_id"`
}

// ActionsRepositoryPermission is the typed data model for the actions_repository_permission entity.
type ActionsRepositoryPermission struct {
	AllowedActions *string `json:"allowed_actions,omitempty"`
	Enabled bool `json:"enabled"`
	SelectedActionsUrl *string `json:"selected_actions_url,omitempty"`
	ShaPinningRequired *bool `json:"sha_pinning_required,omitempty"`
}

// ActionsRepositoryPermissionLoadMatch is the typed request payload for ActionsRepositoryPermission.LoadTyped.
type ActionsRepositoryPermissionLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ActionsSecret is the typed data model for the actions_secret entity.
type ActionsSecret struct {
	CreatedAt string `json:"created_at"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	UpdatedAt string `json:"updated_at"`
}

// ActionsSecretLoadMatch is the typed request payload for ActionsSecret.LoadTyped.
type ActionsSecretLoadMatch struct {
	EnvironmentId *string `json:"environment_id,omitempty"`
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ActionsVariable is the typed data model for the actions_variable entity.
type ActionsVariable struct {
	CreatedAt string `json:"created_at"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	UpdatedAt string `json:"updated_at"`
	Value string `json:"value"`
}

// ActionsVariableLoadMatch is the typed request payload for ActionsVariable.LoadTyped.
type ActionsVariableLoadMatch struct {
	EnvironmentId *string `json:"environment_id,omitempty"`
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ActionsWorkflowAccessToRepository is the typed data model for the actions_workflow_access_to_repository entity.
type ActionsWorkflowAccessToRepository struct {
	AccessLevel string `json:"access_level"`
}

// ActionsWorkflowAccessToRepositoryLoadMatch is the typed request payload for ActionsWorkflowAccessToRepository.LoadTyped.
type ActionsWorkflowAccessToRepositoryLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Activity is the typed data model for the activity entity.
type Activity struct {
	ActivityType string `json:"activity_type"`
	Actor map[string]any `json:"actor"`
	After string `json:"after"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	AssigneesUrl *string `json:"assignees_url,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Before string `json:"before"`
	BlobsUrl *string `json:"blobs_url,omitempty"`
	BranchesUrl *string `json:"branches_url,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CollaboratorsUrl *string `json:"collaborators_url,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CompareUrl *string `json:"compare_url,omitempty"`
	ContentsUrl *string `json:"contents_url,omitempty"`
	ContributorsUrl *string `json:"contributors_url,omitempty"`
	DeploymentsUrl *string `json:"deployments_url,omitempty"`
	Description *string `json:"description,omitempty"`
	DownloadsUrl *string `json:"downloads_url,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	Fork *bool `json:"fork,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GitCommitsUrl *string `json:"git_commits_url,omitempty"`
	GitRefsUrl *string `json:"git_refs_url,omitempty"`
	GitTagsUrl *string `json:"git_tags_url,omitempty"`
	GitUrl *string `json:"git_url,omitempty"`
	GithubId *int `json:"github_id,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl *string `json:"hooks_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	IssueCommentUrl *string `json:"issue_comment_url,omitempty"`
	IssueEventsUrl *string `json:"issue_events_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	KeysUrl *string `json:"keys_url,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	Language *map[string]any `json:"language,omitempty"`
	LanguagesUrl *string `json:"languages_url,omitempty"`
	LastReadAt *string `json:"last_read_at,omitempty"`
	Login *string `json:"login,omitempty"`
	MergesUrl *string `json:"merges_url,omitempty"`
	MilestonesUrl *string `json:"milestones_url,omitempty"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationsUrl *string `json:"notifications_url,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Private *bool `json:"private,omitempty"`
	PullsUrl *string `json:"pulls_url,omitempty"`
	Read *bool `json:"read,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	Ref string `json:"ref"`
	ReleasesUrl *string `json:"releases_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersUrl *string `json:"stargazers_url,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	StatusesUrl *string `json:"statuses_url,omitempty"`
	SubscribersUrl *string `json:"subscribers_url,omitempty"`
	SubscriptionUrl *string `json:"subscription_url,omitempty"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl *string `json:"tags_url,omitempty"`
	TeamsUrl *string `json:"teams_url,omitempty"`
	Timestamp string `json:"timestamp"`
	TreesUrl *string `json:"trees_url,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ActivityLoadMatch is the typed request payload for Activity.LoadTyped.
type ActivityLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ActivityListMatch is the typed request payload for Activity.ListTyped.
type ActivityListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	ActivityType *string `json:"activity_type,omitempty"`
	Actor *string `json:"actor,omitempty"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Direction *string `json:"direction,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Ref *string `json:"ref,omitempty"`
	TimePeriod *string `json:"time_period,omitempty"`
}

// ActivityUpdateData is the typed request payload for Activity.UpdateTyped.
type ActivityUpdateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	ActivityType *string `json:"activity_type,omitempty"`
	Actor *map[string]any `json:"actor,omitempty"`
	After *string `json:"after,omitempty"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	AssigneesUrl *string `json:"assignees_url,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Before *string `json:"before,omitempty"`
	BlobsUrl *string `json:"blobs_url,omitempty"`
	BranchesUrl *string `json:"branches_url,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CollaboratorsUrl *string `json:"collaborators_url,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CompareUrl *string `json:"compare_url,omitempty"`
	ContentsUrl *string `json:"contents_url,omitempty"`
	ContributorsUrl *string `json:"contributors_url,omitempty"`
	DeploymentsUrl *string `json:"deployments_url,omitempty"`
	Description *string `json:"description,omitempty"`
	DownloadsUrl *string `json:"downloads_url,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	Fork *bool `json:"fork,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GitCommitsUrl *string `json:"git_commits_url,omitempty"`
	GitRefsUrl *string `json:"git_refs_url,omitempty"`
	GitTagsUrl *string `json:"git_tags_url,omitempty"`
	GitUrl *string `json:"git_url,omitempty"`
	GithubId *int `json:"github_id,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl *string `json:"hooks_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	IssueCommentUrl *string `json:"issue_comment_url,omitempty"`
	IssueEventsUrl *string `json:"issue_events_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	KeysUrl *string `json:"keys_url,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	Language *map[string]any `json:"language,omitempty"`
	LanguagesUrl *string `json:"languages_url,omitempty"`
	LastReadAt *string `json:"last_read_at,omitempty"`
	Login *string `json:"login,omitempty"`
	MergesUrl *string `json:"merges_url,omitempty"`
	MilestonesUrl *string `json:"milestones_url,omitempty"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationsUrl *string `json:"notifications_url,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	Private *bool `json:"private,omitempty"`
	PullsUrl *string `json:"pulls_url,omitempty"`
	Read *bool `json:"read,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	Ref *string `json:"ref,omitempty"`
	ReleasesUrl *string `json:"releases_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersUrl *string `json:"stargazers_url,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	StatusesUrl *string `json:"statuses_url,omitempty"`
	SubscribersUrl *string `json:"subscribers_url,omitempty"`
	SubscriptionUrl *string `json:"subscription_url,omitempty"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl *string `json:"tags_url,omitempty"`
	TeamsUrl *string `json:"teams_url,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	TreesUrl *string `json:"trees_url,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ActivityRemoveMatch is the typed request payload for Activity.RemoveTyped.
type ActivityRemoveMatch struct {
	ThreadId int `json:"thread_id"`
}

// Add is the typed data model for the add entity.
type Add struct {
	Usernames []any `json:"usernames"`
}

// AddCreateData is the typed request payload for Add.CreateTyped.
type AddCreateData struct {
	Enterprise string `json:"enterprise"`
	TeamId string `json:"team_id"`
	Usernames []any `json:"usernames"`
}

// ApiInsightsRouteStat is the typed data model for the api_insights_route_stat entity.
type ApiInsightsRouteStat struct {
	ApiRoute *string `json:"api_route,omitempty"`
	HttpMethod *string `json:"http_method,omitempty"`
	LastRateLimitedTimestamp *string `json:"last_rate_limited_timestamp,omitempty"`
	LastRequestTimestamp *string `json:"last_request_timestamp,omitempty"`
	RateLimitedRequestCount *int `json:"rate_limited_request_count,omitempty"`
	TotalRequestCount *int `json:"total_request_count,omitempty"`
}

// ApiInsightsRouteStatListMatch is the typed request payload for ApiInsightsRouteStat.ListTyped.
type ApiInsightsRouteStatListMatch struct {
	ActorId int `json:"actor_id"`
	ActorType string `json:"actor_type"`
	Org string `json:"org"`
	ApiRouteSubstring *string `json:"api_route_substring,omitempty"`
	Direction *string `json:"direction,omitempty"`
	MaxTimestamp *string `json:"max_timestamp,omitempty"`
	MinTimestamp string `json:"min_timestamp"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// ApiInsightsSubjectStat is the typed data model for the api_insights_subject_stat entity.
type ApiInsightsSubjectStat struct {
	LastRateLimitedTimestamp *string `json:"last_rate_limited_timestamp,omitempty"`
	LastRequestTimestamp *string `json:"last_request_timestamp,omitempty"`
	RateLimitedRequestCount *int `json:"rate_limited_request_count,omitempty"`
	SubjectId *int `json:"subject_id,omitempty"`
	SubjectName *string `json:"subject_name,omitempty"`
	SubjectType *string `json:"subject_type,omitempty"`
	TotalRequestCount *int `json:"total_request_count,omitempty"`
}

// ApiInsightsSubjectStatListMatch is the typed request payload for ApiInsightsSubjectStat.ListTyped.
type ApiInsightsSubjectStatListMatch struct {
	OrgId string `json:"org_id"`
	Direction *string `json:"direction,omitempty"`
	MaxTimestamp *string `json:"max_timestamp,omitempty"`
	MinTimestamp string `json:"min_timestamp"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
	SubjectNameSubstring *string `json:"subject_name_substring,omitempty"`
}

// ApiInsightsSummaryStat is the typed data model for the api_insights_summary_stat entity.
type ApiInsightsSummaryStat struct {
	Id *string `json:"id,omitempty"`
	RateLimitedRequestCount *int `json:"rate_limited_request_count,omitempty"`
	TotalRequestCount *int `json:"total_request_count,omitempty"`
}

// ApiInsightsSummaryStatLoadMatch is the typed request payload for ApiInsightsSummaryStat.LoadTyped.
type ApiInsightsSummaryStatLoadMatch struct {
	ActorId *int `json:"actor_id,omitempty"`
	ActorType *string `json:"actor_type,omitempty"`
	Org *string `json:"org,omitempty"`
	MaxTimestamp *string `json:"max_timestamp,omitempty"`
	MinTimestamp string `json:"min_timestamp"`
	OrgId *string `json:"org_id,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// ApiInsightsTimeStat is the typed data model for the api_insights_time_stat entity.
type ApiInsightsTimeStat struct {
	RateLimitedRequestCount *int `json:"rate_limited_request_count,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	TotalRequestCount *int `json:"total_request_count,omitempty"`
}

// ApiInsightsTimeStatLoadMatch is the typed request payload for ApiInsightsTimeStat.LoadTyped.
type ApiInsightsTimeStatLoadMatch struct {
	OrgId string `json:"org_id"`
	UserId string `json:"user_id"`
	MaxTimestamp *string `json:"max_timestamp,omitempty"`
	MinTimestamp string `json:"min_timestamp"`
	TimestampIncrement string `json:"timestamp_increment"`
}

// ApiInsightsTimeStatListMatch is the typed request payload for ApiInsightsTimeStat.ListTyped.
type ApiInsightsTimeStatListMatch struct {
	ActorId *int `json:"actor_id,omitempty"`
	ActorType *string `json:"actor_type,omitempty"`
	Org *string `json:"org,omitempty"`
	MaxTimestamp *string `json:"max_timestamp,omitempty"`
	MinTimestamp string `json:"min_timestamp"`
	TimestampIncrement string `json:"timestamp_increment"`
	OrgId *string `json:"org_id,omitempty"`
}

// ApiInsightsUserStat is the typed data model for the api_insights_user_stat entity.
type ApiInsightsUserStat struct {
	ActorId *int `json:"actor_id,omitempty"`
	ActorName *string `json:"actor_name,omitempty"`
	ActorType *string `json:"actor_type,omitempty"`
	Id *string `json:"id,omitempty"`
	IntegrationId *int `json:"integration_id,omitempty"`
	LastRateLimitedTimestamp *string `json:"last_rate_limited_timestamp,omitempty"`
	LastRequestTimestamp *string `json:"last_request_timestamp,omitempty"`
	OauthApplicationId *int `json:"oauth_application_id,omitempty"`
	RateLimitedRequestCount *int `json:"rate_limited_request_count,omitempty"`
	TotalRequestCount *int `json:"total_request_count,omitempty"`
}

// ApiInsightsUserStatLoadMatch is the typed request payload for ApiInsightsUserStat.LoadTyped.
type ApiInsightsUserStatLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	ActorNameSubstring *string `json:"actor_name_substring,omitempty"`
	Direction *string `json:"direction,omitempty"`
	MaxTimestamp *string `json:"max_timestamp,omitempty"`
	MinTimestamp string `json:"min_timestamp"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
}

// ApiOverview is the typed data model for the api_overview entity.
type ApiOverview struct {
	Actions *[]any `json:"actions,omitempty"`
	ActionsMacos *[]any `json:"actions_macos,omitempty"`
	Api *[]any `json:"api,omitempty"`
	Codespaces *[]any `json:"codespaces,omitempty"`
	Copilot *[]any `json:"copilot,omitempty"`
	Dependabot *[]any `json:"dependabot,omitempty"`
	Domains *map[string]any `json:"domains,omitempty"`
	Git *[]any `json:"git,omitempty"`
	GithubEnterpriseImporter *[]any `json:"github_enterprise_importer,omitempty"`
	Hooks *[]any `json:"hooks,omitempty"`
	Importer *[]any `json:"importer,omitempty"`
	Packages *[]any `json:"packages,omitempty"`
	Pages *[]any `json:"pages,omitempty"`
	SshKeyFingerprints *map[string]any `json:"ssh_key_fingerprints,omitempty"`
	SshKeys *[]any `json:"ssh_keys,omitempty"`
	VerifiablePasswordAuthentication bool `json:"verifiable_password_authentication"`
	Web *[]any `json:"web,omitempty"`
}

// ApiOverviewListMatch is the typed request payload for ApiOverview.ListTyped.
type ApiOverviewListMatch struct {
	Actions *[]any `json:"actions,omitempty"`
	ActionsMacos *[]any `json:"actions_macos,omitempty"`
	Api *[]any `json:"api,omitempty"`
	Codespaces *[]any `json:"codespaces,omitempty"`
	Copilot *[]any `json:"copilot,omitempty"`
	Dependabot *[]any `json:"dependabot,omitempty"`
	Domains *map[string]any `json:"domains,omitempty"`
	Git *[]any `json:"git,omitempty"`
	GithubEnterpriseImporter *[]any `json:"github_enterprise_importer,omitempty"`
	Hooks *[]any `json:"hooks,omitempty"`
	Importer *[]any `json:"importer,omitempty"`
	Packages *[]any `json:"packages,omitempty"`
	Pages *[]any `json:"pages,omitempty"`
	SshKeyFingerprints *map[string]any `json:"ssh_key_fingerprints,omitempty"`
	SshKeys *[]any `json:"ssh_keys,omitempty"`
	VerifiablePasswordAuthentication *bool `json:"verifiable_password_authentication,omitempty"`
	Web *[]any `json:"web,omitempty"`
}

// App is the typed data model for the app entity.
type App struct {
	AccessTokensUrl string `json:"access_tokens_url"`
	Account any `json:"account"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	AppId int `json:"app_id"`
	AppSlug string `json:"app_slug"`
	ArchiveUrl string `json:"archive_url"`
	Archived bool `json:"archived"`
	AssigneesUrl string `json:"assignees_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	CloneUrl string `json:"clone_url"`
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContactEmail *string `json:"contact_email,omitempty"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultBranch string `json:"default_branch"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description *string `json:"description,omitempty"`
	Disabled bool `json:"disabled"`
	DownloadsUrl string `json:"downloads_url"`
	Events *[]any `json:"events,omitempty"`
	EventsUrl string `json:"events_url"`
	ExternalUrl *string `json:"external_url,omitempty"`
	Fork bool `json:"fork"`
	Forks int `json:"forks"`
	ForksCount int `json:"forks_count"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl string `json:"git_url"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads bool `json:"has_downloads"`
	HasIssues bool `json:"has_issues"`
	HasMultipleSingleFiles *bool `json:"has_multiple_single_files,omitempty"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasWiki bool `json:"has_wiki"`
	Homepage string `json:"homepage"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language string `json:"language"`
	LanguagesUrl string `json:"languages_url"`
	License map[string]any `json:"license"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl string `json:"mirror_url"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues int `json:"open_issues"`
	OpenIssuesCount int `json:"open_issues_count"`
	Owner *map[string]any `json:"owner,omitempty"`
	Pem *string `json:"pem,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	PushedAt string `json:"pushed_at"`
	ReleasesUrl string `json:"releases_url"`
	RepositoriesUrl string `json:"repositories_url"`
	RepositorySelection string `json:"repository_selection"`
	SingleFileName string `json:"single_file_name"`
	SingleFilePaths *[]any `json:"single_file_paths,omitempty"`
	Size int `json:"size"`
	Slug *string `json:"slug,omitempty"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl string `json:"ssh_url"`
	StargazersCount int `json:"stargazers_count"`
	StargazersUrl string `json:"stargazers_url"`
	StarredAt *string `json:"starred_at,omitempty"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SuspendedAt string `json:"suspended_at"`
	SuspendedBy map[string]any `json:"suspended_by"`
	SvnUrl string `json:"svn_url"`
	TagsUrl string `json:"tags_url"`
	TargetId int `json:"target_id"`
	TargetType string `json:"target_type"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url string `json:"url"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers int `json:"watchers"`
	WatchersCount int `json:"watchers_count"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
	WebhookSecret *string `json:"webhook_secret,omitempty"`
}

// AppListMatch is the typed request payload for App.ListTyped.
type AppListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// AppCreateData is the typed request payload for App.CreateTyped.
type AppCreateData struct {
	Code string `json:"code"`
	AccessTokensUrl string `json:"access_tokens_url"`
	Account any `json:"account"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	AppId int `json:"app_id"`
	AppSlug string `json:"app_slug"`
	ArchiveUrl string `json:"archive_url"`
	Archived bool `json:"archived"`
	AssigneesUrl string `json:"assignees_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	CloneUrl string `json:"clone_url"`
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContactEmail *string `json:"contact_email,omitempty"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultBranch string `json:"default_branch"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description *string `json:"description,omitempty"`
	Disabled bool `json:"disabled"`
	DownloadsUrl string `json:"downloads_url"`
	Events *[]any `json:"events,omitempty"`
	EventsUrl string `json:"events_url"`
	ExternalUrl *string `json:"external_url,omitempty"`
	Fork bool `json:"fork"`
	Forks int `json:"forks"`
	ForksCount int `json:"forks_count"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl string `json:"git_url"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads bool `json:"has_downloads"`
	HasIssues bool `json:"has_issues"`
	HasMultipleSingleFiles *bool `json:"has_multiple_single_files,omitempty"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasWiki bool `json:"has_wiki"`
	Homepage string `json:"homepage"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language string `json:"language"`
	LanguagesUrl string `json:"languages_url"`
	License map[string]any `json:"license"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl string `json:"mirror_url"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues int `json:"open_issues"`
	OpenIssuesCount int `json:"open_issues_count"`
	Owner *map[string]any `json:"owner,omitempty"`
	Pem *string `json:"pem,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	PushedAt string `json:"pushed_at"`
	ReleasesUrl string `json:"releases_url"`
	RepositoriesUrl string `json:"repositories_url"`
	RepositorySelection string `json:"repository_selection"`
	SingleFileName string `json:"single_file_name"`
	SingleFilePaths *[]any `json:"single_file_paths,omitempty"`
	Size int `json:"size"`
	Slug *string `json:"slug,omitempty"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl string `json:"ssh_url"`
	StargazersCount int `json:"stargazers_count"`
	StargazersUrl string `json:"stargazers_url"`
	StarredAt *string `json:"starred_at,omitempty"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SuspendedAt string `json:"suspended_at"`
	SuspendedBy map[string]any `json:"suspended_by"`
	SvnUrl string `json:"svn_url"`
	TagsUrl string `json:"tags_url"`
	TargetId int `json:"target_id"`
	TargetType string `json:"target_type"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url string `json:"url"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers int `json:"watchers"`
	WatchersCount int `json:"watchers_count"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
	WebhookSecret *string `json:"webhook_secret,omitempty"`
}

// AppUpdateData is the typed request payload for App.UpdateTyped.
type AppUpdateData struct {
	InstallationId int `json:"installation_id"`
	RepositoryId int `json:"repository_id"`
	AccessTokensUrl *string `json:"access_tokens_url,omitempty"`
	Account *any `json:"account,omitempty"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	AppId *int `json:"app_id,omitempty"`
	AppSlug *string `json:"app_slug,omitempty"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl *string `json:"assignees_url,omitempty"`
	BlobsUrl *string `json:"blobs_url,omitempty"`
	BranchesUrl *string `json:"branches_url,omitempty"`
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
	CollaboratorsUrl *string `json:"collaborators_url,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CompareUrl *string `json:"compare_url,omitempty"`
	ContactEmail *string `json:"contact_email,omitempty"`
	ContentsUrl *string `json:"contents_url,omitempty"`
	ContributorsUrl *string `json:"contributors_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl *string `json:"deployments_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DownloadsUrl *string `json:"downloads_url,omitempty"`
	Events *[]any `json:"events,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	ExternalUrl *string `json:"external_url,omitempty"`
	Fork *bool `json:"fork,omitempty"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	GitCommitsUrl *string `json:"git_commits_url,omitempty"`
	GitRefsUrl *string `json:"git_refs_url,omitempty"`
	GitTagsUrl *string `json:"git_tags_url,omitempty"`
	GitUrl *string `json:"git_url,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasMultipleSingleFiles *bool `json:"has_multiple_single_files,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl *string `json:"hooks_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl *string `json:"issue_comment_url,omitempty"`
	IssueEventsUrl *string `json:"issue_events_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	KeysUrl *string `json:"keys_url,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl *string `json:"languages_url,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl *string `json:"merges_url,omitempty"`
	MilestonesUrl *string `json:"milestones_url,omitempty"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationsUrl *string `json:"notifications_url,omitempty"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Pem *string `json:"pem,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private *bool `json:"private,omitempty"`
	PullsUrl *string `json:"pulls_url,omitempty"`
	PushedAt *string `json:"pushed_at,omitempty"`
	ReleasesUrl *string `json:"releases_url,omitempty"`
	RepositoriesUrl *string `json:"repositories_url,omitempty"`
	RepositorySelection *string `json:"repository_selection,omitempty"`
	SingleFileName *string `json:"single_file_name,omitempty"`
	SingleFilePaths *[]any `json:"single_file_paths,omitempty"`
	Size *int `json:"size,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl *string `json:"stargazers_url,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StatusesUrl *string `json:"statuses_url,omitempty"`
	SubscribersUrl *string `json:"subscribers_url,omitempty"`
	SubscriptionUrl *string `json:"subscription_url,omitempty"`
	SuspendedAt *string `json:"suspended_at,omitempty"`
	SuspendedBy *map[string]any `json:"suspended_by,omitempty"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl *string `json:"tags_url,omitempty"`
	TargetId *int `json:"target_id,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	TeamsUrl *string `json:"teams_url,omitempty"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl *string `json:"trees_url,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
	WebhookSecret *string `json:"webhook_secret,omitempty"`
}

// AppRemoveMatch is the typed request payload for App.RemoveTyped.
type AppRemoveMatch struct {
	InstallationId int `json:"installation_id"`
}

// Artifact is the typed data model for the artifact entity.
type Artifact struct {
	HeadBranch *string `json:"head_branch,omitempty"`
	HeadRepositoryId *int `json:"head_repository_id,omitempty"`
	HeadSha *string `json:"head_sha,omitempty"`
	Id *int `json:"id,omitempty"`
	RepositoryId *int `json:"repository_id,omitempty"`
}

// ArtifactLoadMatch is the typed request payload for Artifact.LoadTyped.
type ArtifactLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Assignee is the typed data model for the assignee entity.
type Assignee struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// AssigneeListMatch is the typed request payload for Assignee.ListTyped.
type AssigneeListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// AuthenticationToken is the typed data model for the authentication_token entity.
type AuthenticationToken struct {
	ExpiresAt *string `json:"expires_at,omitempty"`
	Token *string `json:"token,omitempty"`
}

// AuthenticationTokenCreateData is the typed request payload for AuthenticationToken.CreateTyped.
type AuthenticationTokenCreateData struct {
	OrgId string `json:"org_id"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Token *string `json:"token,omitempty"`
}

// Authorization is the typed data model for the authorization entity.
type Authorization struct {
	AccessToken string `json:"access_token"`
	App map[string]any `json:"app"`
	CreatedAt string `json:"created_at"`
	ExpiresAt string `json:"expires_at"`
	Fingerprint string `json:"fingerprint"`
	HashedToken string `json:"hashed_token"`
	Id int `json:"id"`
	Installation map[string]any `json:"installation"`
	Note string `json:"note"`
	NoteUrl string `json:"note_url"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Repositories *[]any `json:"repositories,omitempty"`
	RepositoryIds *[]any `json:"repository_ids,omitempty"`
	Scopes []any `json:"scopes"`
	Target *string `json:"target,omitempty"`
	TargetId *int `json:"target_id,omitempty"`
	Token string `json:"token"`
	TokenLastEight string `json:"token_last_eight"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// AuthorizationCreateData is the typed request payload for Authorization.CreateTyped.
type AuthorizationCreateData struct {
	ApplicationId string `json:"application_id"`
	AccessToken string `json:"access_token"`
	App map[string]any `json:"app"`
	CreatedAt string `json:"created_at"`
	ExpiresAt string `json:"expires_at"`
	Fingerprint string `json:"fingerprint"`
	HashedToken string `json:"hashed_token"`
	Id int `json:"id"`
	Installation map[string]any `json:"installation"`
	Note string `json:"note"`
	NoteUrl string `json:"note_url"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Repositories *[]any `json:"repositories,omitempty"`
	RepositoryIds *[]any `json:"repository_ids,omitempty"`
	Scopes []any `json:"scopes"`
	Target *string `json:"target,omitempty"`
	TargetId *int `json:"target_id,omitempty"`
	Token string `json:"token"`
	TokenLastEight string `json:"token_last_eight"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// AuthorizationUpdateData is the typed request payload for Authorization.UpdateTyped.
type AuthorizationUpdateData struct {
	ApplicationId string `json:"application_id"`
	AccessToken *string `json:"access_token,omitempty"`
	App *map[string]any `json:"app,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	HashedToken *string `json:"hashed_token,omitempty"`
	Id *int `json:"id,omitempty"`
	Installation *map[string]any `json:"installation,omitempty"`
	Note *string `json:"note,omitempty"`
	NoteUrl *string `json:"note_url,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Repositories *[]any `json:"repositories,omitempty"`
	RepositoryIds *[]any `json:"repository_ids,omitempty"`
	Scopes *[]any `json:"scopes,omitempty"`
	Target *string `json:"target,omitempty"`
	TargetId *int `json:"target_id,omitempty"`
	Token *string `json:"token,omitempty"`
	TokenLastEight *string `json:"token_last_eight,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// Autolink is the typed data model for the autolink entity.
type Autolink struct {
	Id int `json:"id"`
	IsAlphanumeric bool `json:"is_alphanumeric"`
	KeyPrefix string `json:"key_prefix"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UrlTemplate string `json:"url_template"`
}

// AutolinkLoadMatch is the typed request payload for Autolink.LoadTyped.
type AutolinkLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// AutolinkListMatch is the typed request payload for Autolink.ListTyped.
type AutolinkListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// AutolinkCreateData is the typed request payload for Autolink.CreateTyped.
type AutolinkCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Id int `json:"id"`
	IsAlphanumeric bool `json:"is_alphanumeric"`
	KeyPrefix string `json:"key_prefix"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UrlTemplate string `json:"url_template"`
}

// BaseGist is the typed data model for the base_gist entity.
type BaseGist struct {
	Comments *int `json:"comments,omitempty"`
	CommentsEnabled *bool `json:"comments_enabled,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Files *map[string]any `json:"files,omitempty"`
	Forks *[]any `json:"forks,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	GitPullUrl *string `json:"git_pull_url,omitempty"`
	GitPushUrl *string `json:"git_push_url,omitempty"`
	History *[]any `json:"history,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Public *bool `json:"public,omitempty"`
	Truncated *bool `json:"truncated,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *string `json:"user,omitempty"`
}

// BaseGistListMatch is the typed request payload for BaseGist.ListTyped.
type BaseGistListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Since *string `json:"since,omitempty"`
}

// BaseGistCreateData is the typed request payload for BaseGist.CreateTyped.
type BaseGistCreateData struct {
	GistId string `json:"gist_id"`
	Comments *int `json:"comments,omitempty"`
	CommentsEnabled *bool `json:"comments_enabled,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Files *map[string]any `json:"files,omitempty"`
	Forks *[]any `json:"forks,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	GitPullUrl *string `json:"git_pull_url,omitempty"`
	GitPushUrl *string `json:"git_push_url,omitempty"`
	History *[]any `json:"history,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Public *bool `json:"public,omitempty"`
	Truncated *bool `json:"truncated,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *string `json:"user,omitempty"`
}

// BillingUsageReport is the typed data model for the billing_usage_report entity.
type BillingUsageReport struct {
	Date string `json:"date"`
	DiscountAmount float64 `json:"discountAmount"`
	GrossAmount float64 `json:"grossAmount"`
	NetAmount float64 `json:"netAmount"`
	OrganizationName string `json:"organizationName"`
	PricePerUnit float64 `json:"pricePerUnit"`
	Product string `json:"product"`
	Quantity int `json:"quantity"`
	RepositoryName *string `json:"repositoryName,omitempty"`
	Sku string `json:"sku"`
	UnitType string `json:"unitType"`
}

// BillingUsageReportListMatch is the typed request payload for BillingUsageReport.ListTyped.
type BillingUsageReportListMatch struct {
	Org string `json:"org"`
	Day *int `json:"day,omitempty"`
	Hour *int `json:"hour,omitempty"`
	Month *int `json:"month,omitempty"`
	Year *int `json:"year,omitempty"`
}

// BillingUsageReportUser is the typed data model for the billing_usage_report_user entity.
type BillingUsageReportUser struct {
	Date string `json:"date"`
	DiscountAmount float64 `json:"discountAmount"`
	GrossAmount float64 `json:"grossAmount"`
	NetAmount float64 `json:"netAmount"`
	PricePerUnit float64 `json:"pricePerUnit"`
	Product string `json:"product"`
	Quantity int `json:"quantity"`
	RepositoryName *string `json:"repositoryName,omitempty"`
	Sku string `json:"sku"`
	UnitType string `json:"unitType"`
}

// BillingUsageReportUserListMatch is the typed request payload for BillingUsageReportUser.ListTyped.
type BillingUsageReportUserListMatch struct {
	Username string `json:"username"`
	Day *int `json:"day,omitempty"`
	Hour *int `json:"hour,omitempty"`
	Month *int `json:"month,omitempty"`
	Year *int `json:"year,omitempty"`
}

// Blob is the typed data model for the blob entity.
type Blob struct {
	Content string `json:"content"`
	Encoding string `json:"encoding"`
	HighlightedContent *string `json:"highlighted_content,omitempty"`
	Id *string `json:"id,omitempty"`
	NodeId string `json:"node_id"`
	Sha string `json:"sha"`
	Size int `json:"size"`
	Url string `json:"url"`
}

// BlobLoadMatch is the typed request payload for Blob.LoadTyped.
type BlobLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Block is the typed data model for the block entity.
type Block struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// BlockListMatch is the typed request payload for Block.ListTyped.
type BlockListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Branch is the typed data model for the branch entity.
type Branch struct {
	Commit map[string]any `json:"commit"`
	Id *string `json:"id,omitempty"`
	Links map[string]any `json:"links"`
	Name string `json:"name"`
	Pattern *string `json:"pattern,omitempty"`
	Protected bool `json:"protected"`
	Protection map[string]any `json:"protection"`
	ProtectionUrl string `json:"protection_url"`
	RequiredApprovingReviewCount *int `json:"required_approving_review_count,omitempty"`
}

// BranchLoadMatch is the typed request payload for Branch.LoadTyped.
type BranchLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// BranchProtection is the typed data model for the branch_protection entity.
type BranchProtection struct {
	AllowDeletions *map[string]any `json:"allow_deletions,omitempty"`
	AllowForcePushes *map[string]any `json:"allow_force_pushes,omitempty"`
	AllowForkSyncing *map[string]any `json:"allow_fork_syncing,omitempty"`
	BlockCreations *map[string]any `json:"block_creations,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EnforceAdmins map[string]any `json:"enforce_admins"`
	Id *string `json:"id,omitempty"`
	LockBranch *map[string]any `json:"lock_branch,omitempty"`
	Name *string `json:"name,omitempty"`
	ProtectionUrl *string `json:"protection_url,omitempty"`
	RequiredConversationResolution *map[string]any `json:"required_conversation_resolution,omitempty"`
	RequiredLinearHistory *map[string]any `json:"required_linear_history,omitempty"`
	RequiredPullRequestReviews map[string]any `json:"required_pull_request_reviews"`
	RequiredSignatures map[string]any `json:"required_signatures"`
	RequiredStatusChecks map[string]any `json:"required_status_checks"`
	Restrictions map[string]any `json:"restrictions"`
	Url *string `json:"url,omitempty"`
}

// BranchProtectionLoadMatch is the typed request payload for BranchProtection.LoadTyped.
type BranchProtectionLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// BranchRestrictionPolicy is the typed data model for the branch_restriction_policy entity.
type BranchRestrictionPolicy struct {
	Apps []any `json:"apps"`
	AppsUrl string `json:"apps_url"`
	Teams []any `json:"teams"`
	TeamsUrl string `json:"teams_url"`
	Url string `json:"url"`
	Users []any `json:"users"`
	UsersUrl string `json:"users_url"`
}

// BranchRestrictionPolicyListMatch is the typed request payload for BranchRestrictionPolicy.ListTyped.
type BranchRestrictionPolicyListMatch struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// BranchShort is the typed data model for the branch_short entity.
type BranchShort struct {
	Commit map[string]any `json:"commit"`
	Name string `json:"name"`
	Protected bool `json:"protected"`
}

// BranchShortListMatch is the typed request payload for BranchShort.ListTyped.
type BranchShortListMatch struct {
	CommitSha string `json:"commit_sha"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// BranchWithProtection is the typed data model for the branch_with_protection entity.
type BranchWithProtection struct {
	Id *string `json:"id,omitempty"`
	NewName string `json:"new_name"`
}

// BranchWithProtectionCreateData is the typed request payload for BranchWithProtection.CreateTyped.
type BranchWithProtectionCreateData struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	NewName string `json:"new_name"`
}

// Campaign is the typed data model for the campaign entity.
type Campaign struct {
	AlertStats map[string]any `json:"alert_stats"`
	ClosedAt *string `json:"closed_at,omitempty"`
	CodeScanningAlerts []any `json:"code_scanning_alerts"`
	ContactLink string `json:"contact_link"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EndsAt string `json:"ends_at"`
	GenerateIssues *bool `json:"generate_issues,omitempty"`
	Id *string `json:"id,omitempty"`
	Managers []any `json:"managers"`
	Name *string `json:"name,omitempty"`
	Number int `json:"number"`
	PublishedAt *string `json:"published_at,omitempty"`
	State string `json:"state"`
	TeamManagers *[]any `json:"team_managers,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// CampaignLoadMatch is the typed request payload for Campaign.LoadTyped.
type CampaignLoadMatch struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
}

// CampaignListMatch is the typed request payload for Campaign.ListTyped.
type CampaignListMatch struct {
	OrgId string `json:"org_id"`
	Direction *string `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
}

// CampaignCreateData is the typed request payload for Campaign.CreateTyped.
type CampaignCreateData struct {
	OrgId string `json:"org_id"`
	AlertStats map[string]any `json:"alert_stats"`
	ClosedAt *string `json:"closed_at,omitempty"`
	CodeScanningAlerts []any `json:"code_scanning_alerts"`
	ContactLink string `json:"contact_link"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EndsAt string `json:"ends_at"`
	GenerateIssues *bool `json:"generate_issues,omitempty"`
	Id *string `json:"id,omitempty"`
	Managers []any `json:"managers"`
	Name *string `json:"name,omitempty"`
	Number int `json:"number"`
	PublishedAt *string `json:"published_at,omitempty"`
	State string `json:"state"`
	TeamManagers *[]any `json:"team_managers,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// CampaignUpdateData is the typed request payload for Campaign.UpdateTyped.
type CampaignUpdateData struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
	AlertStats *map[string]any `json:"alert_stats,omitempty"`
	ClosedAt *string `json:"closed_at,omitempty"`
	CodeScanningAlerts *[]any `json:"code_scanning_alerts,omitempty"`
	ContactLink *string `json:"contact_link,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EndsAt *string `json:"ends_at,omitempty"`
	GenerateIssues *bool `json:"generate_issues,omitempty"`
	Managers *[]any `json:"managers,omitempty"`
	Name *string `json:"name,omitempty"`
	Number *int `json:"number,omitempty"`
	PublishedAt *string `json:"published_at,omitempty"`
	State *string `json:"state,omitempty"`
	TeamManagers *[]any `json:"team_managers,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CampaignRemoveMatch is the typed request payload for Campaign.RemoveTyped.
type CampaignRemoveMatch struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
}

// Check is the typed data model for the check entity.
type Check struct {
	After string `json:"after"`
	App map[string]any `json:"app"`
	Before string `json:"before"`
	CheckRunsUrl string `json:"check_runs_url"`
	CheckSuite map[string]any `json:"check_suite"`
	CompletedAt string `json:"completed_at"`
	Conclusion string `json:"conclusion"`
	CreatedAt string `json:"created_at"`
	Deployment map[string]any `json:"deployment"`
	DetailsUrl string `json:"details_url"`
	ExternalId string `json:"external_id"`
	HeadBranch string `json:"head_branch"`
	HeadCommit map[string]any `json:"head_commit"`
	HeadSha string `json:"head_sha"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	LatestCheckRunsCount int `json:"latest_check_runs_count"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Output map[string]any `json:"output"`
	PullRequests []any `json:"pull_requests"`
	Repository map[string]any `json:"repository"`
	Rerequestable *bool `json:"rerequestable,omitempty"`
	RunsRerequestable *bool `json:"runs_rerequestable,omitempty"`
	StartedAt string `json:"started_at"`
	Status string `json:"status"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// CheckListMatch is the typed request payload for Check.ListTyped.
type CheckListMatch struct {
	Owner string `json:"owner"`
	Ref *string `json:"ref,omitempty"`
	Repo string `json:"repo"`
	AppId *int `json:"app_id,omitempty"`
	CheckName *string `json:"check_name,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
	CheckSuiteId *int `json:"check_suite_id,omitempty"`
}

// CheckAnnotation is the typed data model for the check_annotation entity.
type CheckAnnotation struct {
	AnnotationLevel string `json:"annotation_level"`
	BlobHref string `json:"blob_href"`
	EndColumn int `json:"end_column"`
	EndLine int `json:"end_line"`
	Message string `json:"message"`
	Path string `json:"path"`
	RawDetails string `json:"raw_details"`
	StartColumn int `json:"start_column"`
	StartLine int `json:"start_line"`
	Title string `json:"title"`
}

// CheckAnnotationListMatch is the typed request payload for CheckAnnotation.ListTyped.
type CheckAnnotationListMatch struct {
	CheckRunId int `json:"check_run_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// CheckAutomatedSecurityFix is the typed data model for the check_automated_security_fix entity.
type CheckAutomatedSecurityFix struct {
	Enabled bool `json:"enabled"`
	Paused bool `json:"paused"`
}

// CheckAutomatedSecurityFixLoadMatch is the typed request payload for CheckAutomatedSecurityFix.LoadTyped.
type CheckAutomatedSecurityFixLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CheckRun is the typed data model for the check_run entity.
type CheckRun struct {
	Actions *[]any `json:"actions,omitempty"`
	App map[string]any `json:"app"`
	CheckSuite map[string]any `json:"check_suite"`
	CompletedAt string `json:"completed_at"`
	Conclusion string `json:"conclusion"`
	Deployment map[string]any `json:"deployment"`
	DetailsUrl string `json:"details_url"`
	ExternalId string `json:"external_id"`
	HeadSha string `json:"head_sha"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Output map[string]any `json:"output"`
	PullRequests []any `json:"pull_requests"`
	StartedAt string `json:"started_at"`
	Status string `json:"status"`
	Url string `json:"url"`
}

// CheckRunLoadMatch is the typed request payload for CheckRun.LoadTyped.
type CheckRunLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CheckRunCreateData is the typed request payload for CheckRun.CreateTyped.
type CheckRunCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Actions *[]any `json:"actions,omitempty"`
	App map[string]any `json:"app"`
	CheckSuite map[string]any `json:"check_suite"`
	CompletedAt string `json:"completed_at"`
	Conclusion string `json:"conclusion"`
	Deployment map[string]any `json:"deployment"`
	DetailsUrl string `json:"details_url"`
	ExternalId string `json:"external_id"`
	HeadSha string `json:"head_sha"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Output map[string]any `json:"output"`
	PullRequests []any `json:"pull_requests"`
	StartedAt string `json:"started_at"`
	Status string `json:"status"`
	Url string `json:"url"`
}

// CheckRunUpdateData is the typed request payload for CheckRun.UpdateTyped.
type CheckRunUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Actions *[]any `json:"actions,omitempty"`
	App *map[string]any `json:"app,omitempty"`
	CheckSuite *map[string]any `json:"check_suite,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	Conclusion *string `json:"conclusion,omitempty"`
	Deployment *map[string]any `json:"deployment,omitempty"`
	DetailsUrl *string `json:"details_url,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	HeadSha *string `json:"head_sha,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Output *map[string]any `json:"output,omitempty"`
	PullRequests *[]any `json:"pull_requests,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	Status *string `json:"status,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CheckSuite is the typed data model for the check_suite entity.
type CheckSuite struct {
	After string `json:"after"`
	App map[string]any `json:"app"`
	Before string `json:"before"`
	CheckRunsUrl string `json:"check_runs_url"`
	Conclusion string `json:"conclusion"`
	CreatedAt string `json:"created_at"`
	HeadBranch string `json:"head_branch"`
	HeadCommit map[string]any `json:"head_commit"`
	HeadSha string `json:"head_sha"`
	Id int `json:"id"`
	LatestCheckRunsCount int `json:"latest_check_runs_count"`
	NodeId string `json:"node_id"`
	PullRequests []any `json:"pull_requests"`
	Repository map[string]any `json:"repository"`
	Rerequestable *bool `json:"rerequestable,omitempty"`
	RunsRerequestable *bool `json:"runs_rerequestable,omitempty"`
	Status string `json:"status"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// CheckSuiteLoadMatch is the typed request payload for CheckSuite.LoadTyped.
type CheckSuiteLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CheckSuiteCreateData is the typed request payload for CheckSuite.CreateTyped.
type CheckSuiteCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	After string `json:"after"`
	App map[string]any `json:"app"`
	Before string `json:"before"`
	CheckRunsUrl string `json:"check_runs_url"`
	Conclusion string `json:"conclusion"`
	CreatedAt string `json:"created_at"`
	HeadBranch string `json:"head_branch"`
	HeadCommit map[string]any `json:"head_commit"`
	HeadSha string `json:"head_sha"`
	Id int `json:"id"`
	LatestCheckRunsCount int `json:"latest_check_runs_count"`
	NodeId string `json:"node_id"`
	PullRequests []any `json:"pull_requests"`
	Repository map[string]any `json:"repository"`
	Rerequestable *bool `json:"rerequestable,omitempty"`
	RunsRerequestable *bool `json:"runs_rerequestable,omitempty"`
	Status string `json:"status"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// CheckSuitePreference is the typed data model for the check_suite_preference entity.
type CheckSuitePreference struct {
	AutoTriggerChecks *[]any `json:"auto_trigger_checks,omitempty"`
	Preferences map[string]any `json:"preferences"`
	Repository map[string]any `json:"repository"`
}

// CheckSuitePreferenceUpdateData is the typed request payload for CheckSuitePreference.UpdateTyped.
type CheckSuitePreferenceUpdateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AutoTriggerChecks *[]any `json:"auto_trigger_checks,omitempty"`
	Preferences *map[string]any `json:"preferences,omitempty"`
	Repository *map[string]any `json:"repository,omitempty"`
}

// Classroom is the typed data model for the classroom entity.
type Classroom struct {
	Archived bool `json:"archived"`
	AvatarUrl string `json:"avatar_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Url string `json:"url"`
}

// ClassroomLoadMatch is the typed request payload for Classroom.LoadTyped.
type ClassroomLoadMatch struct {
	Id int `json:"id"`
}

// ClassroomListMatch is the typed request payload for Classroom.ListTyped.
type ClassroomListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ClassroomAcceptedAssignment is the typed data model for the classroom_accepted_assignment entity.
type ClassroomAcceptedAssignment struct {
	Assignment map[string]any `json:"assignment"`
	CommitCount int `json:"commit_count"`
	Grade string `json:"grade"`
	Id int `json:"id"`
	Passing bool `json:"passing"`
	Repository map[string]any `json:"repository"`
	Students []any `json:"students"`
	Submitted bool `json:"submitted"`
}

// ClassroomAcceptedAssignmentListMatch is the typed request payload for ClassroomAcceptedAssignment.ListTyped.
type ClassroomAcceptedAssignmentListMatch struct {
	AssignmentId int `json:"assignment_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ClassroomAssignment is the typed data model for the classroom_assignment entity.
type ClassroomAssignment struct {
	Accepted int `json:"accepted"`
	Classroom map[string]any `json:"classroom"`
	Deadline string `json:"deadline"`
	Editor string `json:"editor"`
	FeedbackPullRequestsEnabled bool `json:"feedback_pull_requests_enabled"`
	Id int `json:"id"`
	InvitationsEnabled bool `json:"invitations_enabled"`
	InviteLink string `json:"invite_link"`
	Language string `json:"language"`
	MaxMembers int `json:"max_members"`
	MaxTeams int `json:"max_teams"`
	Passing int `json:"passing"`
	PublicRepo bool `json:"public_repo"`
	Slug string `json:"slug"`
	StarterCodeRepository map[string]any `json:"starter_code_repository"`
	StudentsAreRepoAdmins bool `json:"students_are_repo_admins"`
	Submitted int `json:"submitted"`
	Title string `json:"title"`
	Type string `json:"type"`
}

// ClassroomAssignmentLoadMatch is the typed request payload for ClassroomAssignment.LoadTyped.
type ClassroomAssignmentLoadMatch struct {
	Id int `json:"id"`
}

// ClassroomAssignmentGrade is the typed data model for the classroom_assignment_grade entity.
type ClassroomAssignmentGrade struct {
	AssignmentName string `json:"assignment_name"`
	AssignmentUrl string `json:"assignment_url"`
	GithubUsername string `json:"github_username"`
	GroupName *string `json:"group_name,omitempty"`
	PointsAvailable int `json:"points_available"`
	PointsAwarded int `json:"points_awarded"`
	RosterIdentifier string `json:"roster_identifier"`
	StarterCodeUrl string `json:"starter_code_url"`
	StudentRepositoryName string `json:"student_repository_name"`
	StudentRepositoryUrl string `json:"student_repository_url"`
	SubmissionTimestamp string `json:"submission_timestamp"`
}

// ClassroomAssignmentGradeListMatch is the typed request payload for ClassroomAssignmentGrade.ListTyped.
type ClassroomAssignmentGradeListMatch struct {
	AssignmentId int `json:"assignment_id"`
}

// Clone is the typed data model for the clone entity.
type Clone struct {
	Count int `json:"count"`
	Timestamp string `json:"timestamp"`
	Uniques int `json:"uniques"`
}

// CloneListMatch is the typed request payload for Clone.ListTyped.
type CloneListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Per *string `json:"per,omitempty"`
}

// CodeFrequency is the typed data model for the code_frequency entity.
type CodeFrequency struct {
}

// CodeFrequencyListMatch is the typed request payload for CodeFrequency.ListTyped.
type CodeFrequencyListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CodeFrequencyStat is the typed data model for the code_frequency_stat entity.
type CodeFrequencyStat struct {
}

// CodeFrequencyStatListMatch is the typed request payload for CodeFrequencyStat.ListTyped.
type CodeFrequencyStatListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CodeOfConduct is the typed data model for the code_of_conduct entity.
type CodeOfConduct struct {
	Body *string `json:"body,omitempty"`
	HtmlUrl string `json:"html_url"`
	Key string `json:"key"`
	Name string `json:"name"`
	Url string `json:"url"`
}

// CodeOfConductLoadMatch is the typed request payload for CodeOfConduct.LoadTyped.
type CodeOfConductLoadMatch struct {
	Key string `json:"key"`
}

// CodeOfConductListMatch is the typed request payload for CodeOfConduct.ListTyped.
type CodeOfConductListMatch struct {
	Body *string `json:"body,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CodeScanning is the typed data model for the code_scanning entity.
type CodeScanning struct {
	CheckoutUri *string `json:"checkout_uri,omitempty"`
	CommitSha string `json:"commit_sha"`
	Ref string `json:"ref"`
	Sarif string `json:"sarif"`
	StartedAt *string `json:"started_at,omitempty"`
	ToolName *string `json:"tool_name,omitempty"`
	Validate *bool `json:"validate,omitempty"`
}

// CodeScanningCreateData is the typed request payload for CodeScanning.CreateTyped.
type CodeScanningCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	CheckoutUri *string `json:"checkout_uri,omitempty"`
	CommitSha string `json:"commit_sha"`
	Ref string `json:"ref"`
	Sarif string `json:"sarif"`
	StartedAt *string `json:"started_at,omitempty"`
	ToolName *string `json:"tool_name,omitempty"`
	Validate *bool `json:"validate,omitempty"`
}

// CodeScanningRemoveMatch is the typed request payload for CodeScanning.RemoveTyped.
type CodeScanningRemoveMatch struct {
	Language string `json:"language"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CodeScanningAlert is the typed data model for the code_scanning_alert entity.
type CodeScanningAlert struct {
	CreateRequest *bool `json:"create_request,omitempty"`
	CreatedAt string `json:"created_at"`
	DismissalApprovedBy map[string]any `json:"dismissal_approved_by"`
	DismissedAt string `json:"dismissed_at"`
	DismissedBy map[string]any `json:"dismissed_by"`
	DismissedComment *string `json:"dismissed_comment,omitempty"`
	DismissedReason string `json:"dismissed_reason"`
	FixedAt *string `json:"fixed_at,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id *string `json:"id,omitempty"`
	InstancesUrl string `json:"instances_url"`
	MostRecentInstance map[string]any `json:"most_recent_instance"`
	Number int `json:"number"`
	Rule map[string]any `json:"rule"`
	State string `json:"state"`
	Tool map[string]any `json:"tool"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url string `json:"url"`
}

// CodeScanningAlertLoadMatch is the typed request payload for CodeScanningAlert.LoadTyped.
type CodeScanningAlertLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CodeScanningAlertUpdateData is the typed request payload for CodeScanningAlert.UpdateTyped.
type CodeScanningAlertUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	CreateRequest *bool `json:"create_request,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DismissalApprovedBy *map[string]any `json:"dismissal_approved_by,omitempty"`
	DismissedAt *string `json:"dismissed_at,omitempty"`
	DismissedBy *map[string]any `json:"dismissed_by,omitempty"`
	DismissedComment *string `json:"dismissed_comment,omitempty"`
	DismissedReason *string `json:"dismissed_reason,omitempty"`
	FixedAt *string `json:"fixed_at,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	InstancesUrl *string `json:"instances_url,omitempty"`
	MostRecentInstance *map[string]any `json:"most_recent_instance,omitempty"`
	Number *int `json:"number,omitempty"`
	Rule *map[string]any `json:"rule,omitempty"`
	State *string `json:"state,omitempty"`
	Tool *map[string]any `json:"tool,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CodeScanningAlertInstance is the typed data model for the code_scanning_alert_instance entity.
type CodeScanningAlertInstance struct {
	AnalysisKey *string `json:"analysis_key,omitempty"`
	Category *string `json:"category,omitempty"`
	Classifications *[]any `json:"classifications,omitempty"`
	CommitSha *string `json:"commit_sha,omitempty"`
	Environment *string `json:"environment,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Message *map[string]any `json:"message,omitempty"`
	Ref *string `json:"ref,omitempty"`
	State *string `json:"state,omitempty"`
}

// CodeScanningAlertInstanceListMatch is the typed request payload for CodeScanningAlertInstance.ListTyped.
type CodeScanningAlertInstanceListMatch struct {
	AlertNumber int `json:"alert_number"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Pr *int `json:"pr,omitempty"`
	Ref *string `json:"ref,omitempty"`
}

// CodeScanningAlertItem is the typed data model for the code_scanning_alert_item entity.
type CodeScanningAlertItem struct {
	CreatedAt string `json:"created_at"`
	DismissalApprovedBy map[string]any `json:"dismissal_approved_by"`
	DismissedAt string `json:"dismissed_at"`
	DismissedBy map[string]any `json:"dismissed_by"`
	DismissedComment *string `json:"dismissed_comment,omitempty"`
	DismissedReason string `json:"dismissed_reason"`
	FixedAt *string `json:"fixed_at,omitempty"`
	HtmlUrl string `json:"html_url"`
	InstancesUrl string `json:"instances_url"`
	MostRecentInstance map[string]any `json:"most_recent_instance"`
	Number int `json:"number"`
	Rule map[string]any `json:"rule"`
	State string `json:"state"`
	Tool map[string]any `json:"tool"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url string `json:"url"`
}

// CodeScanningAlertItemListMatch is the typed request payload for CodeScanningAlertItem.ListTyped.
type CodeScanningAlertItemListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Pr *int `json:"pr,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Severity *string `json:"severity,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
	ToolGuid *string `json:"tool_guid,omitempty"`
	ToolName *string `json:"tool_name,omitempty"`
}

// CodeScanningAnalysi is the typed data model for the code_scanning_analysi entity.
type CodeScanningAnalysi struct {
	AnalysisKey string `json:"analysis_key"`
	Category *string `json:"category,omitempty"`
	CommitSha string `json:"commit_sha"`
	CreatedAt string `json:"created_at"`
	Deletable bool `json:"deletable"`
	Environment string `json:"environment"`
	Error string `json:"error"`
	Guid *string `json:"guid,omitempty"`
	Id int `json:"id"`
	Name *string `json:"name,omitempty"`
	Ref string `json:"ref"`
	ResultsCount int `json:"results_count"`
	RulesCount int `json:"rules_count"`
	SarifId string `json:"sarif_id"`
	Tool map[string]any `json:"tool"`
	Url string `json:"url"`
	Version *string `json:"version,omitempty"`
	Warning string `json:"warning"`
}

// CodeScanningAnalysiLoadMatch is the typed request payload for CodeScanningAnalysi.LoadTyped.
type CodeScanningAnalysiLoadMatch struct {
	AnalysisId int `json:"analysis_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CodeScanningAnalysiListMatch is the typed request payload for CodeScanningAnalysi.ListTyped.
type CodeScanningAnalysiListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Direction *string `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Pr *int `json:"pr,omitempty"`
	Ref *string `json:"ref,omitempty"`
	SarifId *string `json:"sarif_id,omitempty"`
	Sort *string `json:"sort,omitempty"`
	ToolGuid *string `json:"tool_guid,omitempty"`
	ToolName *string `json:"tool_name,omitempty"`
}

// CodeScanningAnalysisDeletion is the typed data model for the code_scanning_analysis_deletion entity.
type CodeScanningAnalysisDeletion struct {
}

// CodeScanningAnalysisDeletionRemoveMatch is the typed request payload for CodeScanningAnalysisDeletion.RemoveTyped.
type CodeScanningAnalysisDeletionRemoveMatch struct {
	AnalysisId int `json:"analysis_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	ConfirmDelete *string `json:"confirm_delete,omitempty"`
}

// CodeScanningAutofix is the typed data model for the code_scanning_autofix entity.
type CodeScanningAutofix struct {
	Description string `json:"description"`
	StartedAt string `json:"started_at"`
	Status string `json:"status"`
}

// CodeScanningAutofixLoadMatch is the typed request payload for CodeScanningAutofix.LoadTyped.
type CodeScanningAutofixLoadMatch struct {
	AlertNumber int `json:"alert_number"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CodeScanningAutofixCreateData is the typed request payload for CodeScanningAutofix.CreateTyped.
type CodeScanningAutofixCreateData struct {
	AlertNumber int `json:"alert_number"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Description string `json:"description"`
	StartedAt string `json:"started_at"`
	Status string `json:"status"`
}

// CodeScanningAutofixCommit is the typed data model for the code_scanning_autofix_commit entity.
type CodeScanningAutofixCommit struct {
	Message *string `json:"message,omitempty"`
	TargetRef *string `json:"target_ref,omitempty"`
}

// CodeScanningAutofixCommitCreateData is the typed request payload for CodeScanningAutofixCommit.CreateTyped.
type CodeScanningAutofixCommitCreateData struct {
	AlertId int `json:"alert_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Message *string `json:"message,omitempty"`
	TargetRef *string `json:"target_ref,omitempty"`
}

// CodeScanningCodeqlDatabase is the typed data model for the code_scanning_codeql_database entity.
type CodeScanningCodeqlDatabase struct {
	AvatarUrl string `json:"avatar_url"`
	CommitOid *string `json:"commit_oid,omitempty"`
	ContentType string `json:"content_type"`
	CreatedAt string `json:"created_at"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Language string `json:"language"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	Size int `json:"size"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Uploader map[string]any `json:"uploader"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// CodeScanningCodeqlDatabaseLoadMatch is the typed request payload for CodeScanningCodeqlDatabase.LoadTyped.
type CodeScanningCodeqlDatabaseLoadMatch struct {
	Language string `json:"language"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CodeScanningCodeqlDatabaseListMatch is the typed request payload for CodeScanningCodeqlDatabase.ListTyped.
type CodeScanningCodeqlDatabaseListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CodeScanningDefaultSetup is the typed data model for the code_scanning_default_setup entity.
type CodeScanningDefaultSetup struct {
	Languages *[]any `json:"languages,omitempty"`
	QuerySuite *string `json:"query_suite,omitempty"`
	RunnerLabel *string `json:"runner_label,omitempty"`
	RunnerType *string `json:"runner_type,omitempty"`
	Schedule *string `json:"schedule,omitempty"`
	State *string `json:"state,omitempty"`
	ThreatModel *string `json:"threat_model,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CodeScanningDefaultSetupListMatch is the typed request payload for CodeScanningDefaultSetup.ListTyped.
type CodeScanningDefaultSetupListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CodeScanningOrganizationAlertItem is the typed data model for the code_scanning_organization_alert_item entity.
type CodeScanningOrganizationAlertItem struct {
	CreatedAt string `json:"created_at"`
	DismissalApprovedBy map[string]any `json:"dismissal_approved_by"`
	DismissedAt string `json:"dismissed_at"`
	DismissedBy map[string]any `json:"dismissed_by"`
	DismissedComment *string `json:"dismissed_comment,omitempty"`
	DismissedReason string `json:"dismissed_reason"`
	FixedAt *string `json:"fixed_at,omitempty"`
	HtmlUrl string `json:"html_url"`
	InstancesUrl string `json:"instances_url"`
	MostRecentInstance map[string]any `json:"most_recent_instance"`
	Number int `json:"number"`
	Repository map[string]any `json:"repository"`
	Rule map[string]any `json:"rule"`
	State string `json:"state"`
	Tool map[string]any `json:"tool"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url string `json:"url"`
}

// CodeScanningOrganizationAlertItemListMatch is the typed request payload for CodeScanningOrganizationAlertItem.ListTyped.
type CodeScanningOrganizationAlertItemListMatch struct {
	OrgId string `json:"org_id"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Severity *string `json:"severity,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
	ToolGuid *string `json:"tool_guid,omitempty"`
	ToolName *string `json:"tool_name,omitempty"`
}

// CodeScanningSarifsStatus is the typed data model for the code_scanning_sarifs_status entity.
type CodeScanningSarifsStatus struct {
	AnalysesUrl *string `json:"analyses_url,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	ProcessingStatus *string `json:"processing_status,omitempty"`
}

// CodeScanningSarifsStatusLoadMatch is the typed request payload for CodeScanningSarifsStatus.LoadTyped.
type CodeScanningSarifsStatusLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	SarifId string `json:"sarif_id"`
}

// CodeScanningVariantAnalysi is the typed data model for the code_scanning_variant_analysi entity.
type CodeScanningVariantAnalysi struct {
	ActionsWorkflowRunId *int `json:"actions_workflow_run_id,omitempty"`
	Actor map[string]any `json:"actor"`
	CompletedAt *string `json:"completed_at,omitempty"`
	ControllerRepo map[string]any `json:"controller_repo"`
	CreatedAt *string `json:"created_at,omitempty"`
	FailureReason *string `json:"failure_reason,omitempty"`
	Id int `json:"id"`
	Language string `json:"language"`
	QueryLanguage string `json:"query_language"`
	QueryPack string `json:"query_pack"`
	QueryPackUrl string `json:"query_pack_url"`
	Repositories *[]any `json:"repositories,omitempty"`
	RepositoryLists *[]any `json:"repository_lists,omitempty"`
	RepositoryOwners *[]any `json:"repository_owners,omitempty"`
	ScannedRepositories *[]any `json:"scanned_repositories,omitempty"`
	SkippedRepositories map[string]any `json:"skipped_repositories"`
	Status string `json:"status"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CodeScanningVariantAnalysiLoadMatch is the typed request payload for CodeScanningVariantAnalysi.LoadTyped.
type CodeScanningVariantAnalysiLoadMatch struct {
	CodeqlVariantAnalysisId int `json:"codeql_variant_analysis_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CodeScanningVariantAnalysiCreateData is the typed request payload for CodeScanningVariantAnalysi.CreateTyped.
type CodeScanningVariantAnalysiCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	ActionsWorkflowRunId *int `json:"actions_workflow_run_id,omitempty"`
	Actor map[string]any `json:"actor"`
	CompletedAt *string `json:"completed_at,omitempty"`
	ControllerRepo map[string]any `json:"controller_repo"`
	CreatedAt *string `json:"created_at,omitempty"`
	FailureReason *string `json:"failure_reason,omitempty"`
	Id int `json:"id"`
	Language string `json:"language"`
	QueryLanguage string `json:"query_language"`
	QueryPack string `json:"query_pack"`
	QueryPackUrl string `json:"query_pack_url"`
	Repositories *[]any `json:"repositories,omitempty"`
	RepositoryLists *[]any `json:"repository_lists,omitempty"`
	RepositoryOwners *[]any `json:"repository_owners,omitempty"`
	ScannedRepositories *[]any `json:"scanned_repositories,omitempty"`
	SkippedRepositories map[string]any `json:"skipped_repositories"`
	Status string `json:"status"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CodeScanningVariantAnalysisRepoTask is the typed data model for the code_scanning_variant_analysis_repo_task entity.
type CodeScanningVariantAnalysisRepoTask struct {
	ArchiveUrl string `json:"archive_url"`
	AssigneesUrl string `json:"assignees_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	DownloadsUrl string `json:"downloads_url"`
	EventsUrl string `json:"events_url"`
	Fork bool `json:"fork"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GithubId int `json:"github_id"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id string `json:"id"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	LanguagesUrl string `json:"languages_url"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	Owner map[string]any `json:"owner"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	ReleasesUrl string `json:"releases_url"`
	StargazersUrl string `json:"stargazers_url"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TreesUrl string `json:"trees_url"`
	Url string `json:"url"`
}

// CodeScanningVariantAnalysisRepoTaskLoadMatch is the typed request payload for CodeScanningVariantAnalysisRepoTask.LoadTyped.
type CodeScanningVariantAnalysisRepoTaskLoadMatch struct {
	CodeqlVariantAnalysisId int `json:"codeql_variant_analysis_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	RepoName string `json:"repo_name"`
	RepoOwner string `json:"repo_owner"`
}

// CodeSecurity is the typed data model for the code_security entity.
type CodeSecurity struct {
	AdvancedSecurity *string `json:"advanced_security,omitempty"`
	CodeScanningDefaultSetup *string `json:"code_scanning_default_setup,omitempty"`
	CodeScanningDefaultSetupOptions *map[string]any `json:"code_scanning_default_setup_options,omitempty"`
	CodeScanningDelegatedAlertDismissal *string `json:"code_scanning_delegated_alert_dismissal,omitempty"`
	CodeScanningOptions *map[string]any `json:"code_scanning_options,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultForNewRepos *string `json:"default_for_new_repos,omitempty"`
	DependabotAlerts *string `json:"dependabot_alerts,omitempty"`
	DependabotSecurityUpdates *string `json:"dependabot_security_updates,omitempty"`
	DependencyGraph *string `json:"dependency_graph,omitempty"`
	DependencyGraphAutosubmitAction *string `json:"dependency_graph_autosubmit_action,omitempty"`
	DependencyGraphAutosubmitActionOptions *map[string]any `json:"dependency_graph_autosubmit_action_options,omitempty"`
	Description *string `json:"description,omitempty"`
	Enforcement *string `json:"enforcement,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PrivateVulnerabilityReporting *string `json:"private_vulnerability_reporting,omitempty"`
	SecretScanning *string `json:"secret_scanning,omitempty"`
	SecretScanningDelegatedAlertDismissal *string `json:"secret_scanning_delegated_alert_dismissal,omitempty"`
	SecretScanningDelegatedBypass *string `json:"secret_scanning_delegated_bypass,omitempty"`
	SecretScanningDelegatedBypassOptions *map[string]any `json:"secret_scanning_delegated_bypass_options,omitempty"`
	SecretScanningGenericSecrets *string `json:"secret_scanning_generic_secrets,omitempty"`
	SecretScanningNonProviderPatterns *string `json:"secret_scanning_non_provider_patterns,omitempty"`
	SecretScanningPushProtection *string `json:"secret_scanning_push_protection,omitempty"`
	SecretScanningValidityChecks *string `json:"secret_scanning_validity_checks,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CodeSecurityUpdateData is the typed request payload for CodeSecurity.UpdateTyped.
type CodeSecurityUpdateData struct {
	ConfigurationId int `json:"configuration_id"`
	Enterprise *string `json:"enterprise,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
	AdvancedSecurity *string `json:"advanced_security,omitempty"`
	CodeScanningDefaultSetup *string `json:"code_scanning_default_setup,omitempty"`
	CodeScanningDefaultSetupOptions *map[string]any `json:"code_scanning_default_setup_options,omitempty"`
	CodeScanningDelegatedAlertDismissal *string `json:"code_scanning_delegated_alert_dismissal,omitempty"`
	CodeScanningOptions *map[string]any `json:"code_scanning_options,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultForNewRepos *string `json:"default_for_new_repos,omitempty"`
	DependabotAlerts *string `json:"dependabot_alerts,omitempty"`
	DependabotSecurityUpdates *string `json:"dependabot_security_updates,omitempty"`
	DependencyGraph *string `json:"dependency_graph,omitempty"`
	DependencyGraphAutosubmitAction *string `json:"dependency_graph_autosubmit_action,omitempty"`
	DependencyGraphAutosubmitActionOptions *map[string]any `json:"dependency_graph_autosubmit_action_options,omitempty"`
	Description *string `json:"description,omitempty"`
	Enforcement *string `json:"enforcement,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PrivateVulnerabilityReporting *string `json:"private_vulnerability_reporting,omitempty"`
	SecretScanning *string `json:"secret_scanning,omitempty"`
	SecretScanningDelegatedAlertDismissal *string `json:"secret_scanning_delegated_alert_dismissal,omitempty"`
	SecretScanningDelegatedBypass *string `json:"secret_scanning_delegated_bypass,omitempty"`
	SecretScanningDelegatedBypassOptions *map[string]any `json:"secret_scanning_delegated_bypass_options,omitempty"`
	SecretScanningGenericSecrets *string `json:"secret_scanning_generic_secrets,omitempty"`
	SecretScanningNonProviderPatterns *string `json:"secret_scanning_non_provider_patterns,omitempty"`
	SecretScanningPushProtection *string `json:"secret_scanning_push_protection,omitempty"`
	SecretScanningValidityChecks *string `json:"secret_scanning_validity_checks,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CodeSecurityRemoveMatch is the typed request payload for CodeSecurity.RemoveTyped.
type CodeSecurityRemoveMatch struct {
	ConfigurationId int `json:"configuration_id"`
	Enterprise string `json:"enterprise"`
}

// CodeSecurityConfiguration is the typed data model for the code_security_configuration entity.
type CodeSecurityConfiguration struct {
	AdvancedSecurity *string `json:"advanced_security,omitempty"`
	CodeScanningDefaultSetup *string `json:"code_scanning_default_setup,omitempty"`
	CodeScanningDefaultSetupOptions *map[string]any `json:"code_scanning_default_setup_options,omitempty"`
	CodeScanningDelegatedAlertDismissal *string `json:"code_scanning_delegated_alert_dismissal,omitempty"`
	CodeScanningOptions *map[string]any `json:"code_scanning_options,omitempty"`
	CodeSecurity *string `json:"code_security,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DependabotAlerts *string `json:"dependabot_alerts,omitempty"`
	DependabotSecurityUpdates *string `json:"dependabot_security_updates,omitempty"`
	DependencyGraph *string `json:"dependency_graph,omitempty"`
	DependencyGraphAutosubmitAction *string `json:"dependency_graph_autosubmit_action,omitempty"`
	DependencyGraphAutosubmitActionOptions *map[string]any `json:"dependency_graph_autosubmit_action_options,omitempty"`
	Description *string `json:"description,omitempty"`
	Enforcement *string `json:"enforcement,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PrivateVulnerabilityReporting *string `json:"private_vulnerability_reporting,omitempty"`
	Scope string `json:"scope"`
	SecretProtection *string `json:"secret_protection,omitempty"`
	SecretScanning *string `json:"secret_scanning,omitempty"`
	SecretScanningDelegatedAlertDismissal *string `json:"secret_scanning_delegated_alert_dismissal,omitempty"`
	SecretScanningDelegatedBypass *string `json:"secret_scanning_delegated_bypass,omitempty"`
	SecretScanningDelegatedBypassOptions *map[string]any `json:"secret_scanning_delegated_bypass_options,omitempty"`
	SecretScanningGenericSecrets *string `json:"secret_scanning_generic_secrets,omitempty"`
	SecretScanningNonProviderPatterns *string `json:"secret_scanning_non_provider_patterns,omitempty"`
	SecretScanningPushProtection *string `json:"secret_scanning_push_protection,omitempty"`
	SecretScanningValidityChecks *string `json:"secret_scanning_validity_checks,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CodeSecurityConfigurationLoadMatch is the typed request payload for CodeSecurityConfiguration.LoadTyped.
type CodeSecurityConfigurationLoadMatch struct {
	Enterprise string `json:"enterprise"`
	Id int `json:"id"`
}

// CodeSecurityConfigurationListMatch is the typed request payload for CodeSecurityConfiguration.ListTyped.
type CodeSecurityConfigurationListMatch struct {
	OrgId string `json:"org_id"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
}

// CodeSecurityConfigurationCreateData is the typed request payload for CodeSecurityConfiguration.CreateTyped.
type CodeSecurityConfigurationCreateData struct {
	Enterprise string `json:"enterprise"`
	AdvancedSecurity *string `json:"advanced_security,omitempty"`
	CodeScanningDefaultSetup *string `json:"code_scanning_default_setup,omitempty"`
	CodeScanningDefaultSetupOptions *map[string]any `json:"code_scanning_default_setup_options,omitempty"`
	CodeScanningDelegatedAlertDismissal *string `json:"code_scanning_delegated_alert_dismissal,omitempty"`
	CodeScanningOptions *map[string]any `json:"code_scanning_options,omitempty"`
	CodeSecurity *string `json:"code_security,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DependabotAlerts *string `json:"dependabot_alerts,omitempty"`
	DependabotSecurityUpdates *string `json:"dependabot_security_updates,omitempty"`
	DependencyGraph *string `json:"dependency_graph,omitempty"`
	DependencyGraphAutosubmitAction *string `json:"dependency_graph_autosubmit_action,omitempty"`
	DependencyGraphAutosubmitActionOptions *map[string]any `json:"dependency_graph_autosubmit_action_options,omitempty"`
	Description *string `json:"description,omitempty"`
	Enforcement *string `json:"enforcement,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PrivateVulnerabilityReporting *string `json:"private_vulnerability_reporting,omitempty"`
	Scope string `json:"scope"`
	SecretProtection *string `json:"secret_protection,omitempty"`
	SecretScanning *string `json:"secret_scanning,omitempty"`
	SecretScanningDelegatedAlertDismissal *string `json:"secret_scanning_delegated_alert_dismissal,omitempty"`
	SecretScanningDelegatedBypass *string `json:"secret_scanning_delegated_bypass,omitempty"`
	SecretScanningDelegatedBypassOptions *map[string]any `json:"secret_scanning_delegated_bypass_options,omitempty"`
	SecretScanningGenericSecrets *string `json:"secret_scanning_generic_secrets,omitempty"`
	SecretScanningNonProviderPatterns *string `json:"secret_scanning_non_provider_patterns,omitempty"`
	SecretScanningPushProtection *string `json:"secret_scanning_push_protection,omitempty"`
	SecretScanningValidityChecks *string `json:"secret_scanning_validity_checks,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CodeSecurityConfigurationUpdateData is the typed request payload for CodeSecurityConfiguration.UpdateTyped.
type CodeSecurityConfigurationUpdateData struct {
	Enterprise *string `json:"enterprise,omitempty"`
	Id int `json:"id"`
	OrgId *string `json:"org_id,omitempty"`
	AdvancedSecurity *string `json:"advanced_security,omitempty"`
	CodeScanningDefaultSetup *string `json:"code_scanning_default_setup,omitempty"`
	CodeScanningDefaultSetupOptions *map[string]any `json:"code_scanning_default_setup_options,omitempty"`
	CodeScanningDelegatedAlertDismissal *string `json:"code_scanning_delegated_alert_dismissal,omitempty"`
	CodeScanningOptions *map[string]any `json:"code_scanning_options,omitempty"`
	CodeSecurity *string `json:"code_security,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DependabotAlerts *string `json:"dependabot_alerts,omitempty"`
	DependabotSecurityUpdates *string `json:"dependabot_security_updates,omitempty"`
	DependencyGraph *string `json:"dependency_graph,omitempty"`
	DependencyGraphAutosubmitAction *string `json:"dependency_graph_autosubmit_action,omitempty"`
	DependencyGraphAutosubmitActionOptions *map[string]any `json:"dependency_graph_autosubmit_action_options,omitempty"`
	Description *string `json:"description,omitempty"`
	Enforcement *string `json:"enforcement,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Name *string `json:"name,omitempty"`
	PrivateVulnerabilityReporting *string `json:"private_vulnerability_reporting,omitempty"`
	Scope *string `json:"scope,omitempty"`
	SecretProtection *string `json:"secret_protection,omitempty"`
	SecretScanning *string `json:"secret_scanning,omitempty"`
	SecretScanningDelegatedAlertDismissal *string `json:"secret_scanning_delegated_alert_dismissal,omitempty"`
	SecretScanningDelegatedBypass *string `json:"secret_scanning_delegated_bypass,omitempty"`
	SecretScanningDelegatedBypassOptions *map[string]any `json:"secret_scanning_delegated_bypass_options,omitempty"`
	SecretScanningGenericSecrets *string `json:"secret_scanning_generic_secrets,omitempty"`
	SecretScanningNonProviderPatterns *string `json:"secret_scanning_non_provider_patterns,omitempty"`
	SecretScanningPushProtection *string `json:"secret_scanning_push_protection,omitempty"`
	SecretScanningValidityChecks *string `json:"secret_scanning_validity_checks,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CodeSecurityConfigurationRepository is the typed data model for the code_security_configuration_repository entity.
type CodeSecurityConfigurationRepository struct {
	Repository map[string]any `json:"repository"`
	Status *string `json:"status,omitempty"`
}

// CodeSecurityConfigurationRepositoryListMatch is the typed request payload for CodeSecurityConfigurationRepository.ListTyped.
type CodeSecurityConfigurationRepositoryListMatch struct {
	ConfigurationId int `json:"configuration_id"`
	Enterprise *string `json:"enterprise,omitempty"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
}

// CodeSecurityDefaultConfiguration is the typed data model for the code_security_default_configuration entity.
type CodeSecurityDefaultConfiguration struct {
	Configuration *map[string]any `json:"configuration,omitempty"`
	DefaultForNewRepos *any `json:"default_for_new_repos,omitempty"`
}

// CodeSecurityDefaultConfigurationListMatch is the typed request payload for CodeSecurityDefaultConfiguration.ListTyped.
type CodeSecurityDefaultConfigurationListMatch struct {
	Enterprise string `json:"enterprise"`
}

// CodeownersError is the typed data model for the codeowners_error entity.
type CodeownersError struct {
	Column int `json:"column"`
	Kind string `json:"kind"`
	Line int `json:"line"`
	Message string `json:"message"`
	Path string `json:"path"`
	Source *string `json:"source,omitempty"`
	Suggestion *string `json:"suggestion,omitempty"`
}

// CodeownersErrorListMatch is the typed request payload for CodeownersError.ListTyped.
type CodeownersErrorListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Ref *string `json:"ref,omitempty"`
}

// Codespace is the typed data model for the codespace entity.
type Codespace struct {
	Accepted bool `json:"accepted"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	ArchiveUrl string `json:"archive_url"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl string `json:"assignees_url"`
	BillableOwner map[string]any `json:"billable_owner"`
	BlobsUrl string `json:"blobs_url"`
	Branch *string `json:"branch,omitempty"`
	BranchesUrl string `json:"branches_url"`
	ClientIp *string `json:"client_ip,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	CompletedAt *string `json:"completed_at,omitempty"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	Cpus int `json:"cpus"`
	CreatedAt string `json:"created_at"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Defaults map[string]any `json:"defaults"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	DevcontainerPath *string `json:"devcontainer_path,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	DownloadsUrl string `json:"downloads_url"`
	EncryptedValue *string `json:"encrypted_value,omitempty"`
	EnvironmentId string `json:"environment_id"`
	EventsUrl string `json:"events_url"`
	ExportUrl *string `json:"export_url,omitempty"`
	Fork bool `json:"fork"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	Geo *string `json:"geo,omitempty"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitStatus map[string]any `json:"git_status"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl *string `json:"git_url,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	IdleTimeoutMinutes int `json:"idle_timeout_minutes"`
	IdleTimeoutNotice *string `json:"idle_timeout_notice,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	Key string `json:"key"`
	KeyId string `json:"key_id"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl string `json:"languages_url"`
	LastKnownStopNotice *string `json:"last_known_stop_notice,omitempty"`
	LastUsedAt string `json:"last_used_at"`
	License *map[string]any `json:"license,omitempty"`
	Location string `json:"location"`
	Machine map[string]any `json:"machine"`
	MachinesUrl string `json:"machines_url"`
	MemoryInBytes int `json:"memory_in_bytes"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	MultiRepoPermissionsOptOut *bool `json:"multi_repo_permissions_opt_out,omitempty"`
	Name string `json:"name"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	OperatingSystem string `json:"operating_system"`
	Owner map[string]any `json:"owner"`
	Path string `json:"path"`
	PendingOperation *bool `json:"pending_operation,omitempty"`
	PendingOperationDisabledReason *string `json:"pending_operation_disabled_reason,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Prebuild bool `json:"prebuild"`
	PrebuildAvailability string `json:"prebuild_availability"`
	Private *bool `json:"private,omitempty"`
	PublishUrl *string `json:"publish_url,omitempty"`
	PullsUrl string `json:"pulls_url"`
	PushedAt *string `json:"pushed_at,omitempty"`
	RecentFolders []any `json:"recent_folders"`
	Ref *string `json:"ref,omitempty"`
	ReleasesUrl string `json:"releases_url"`
	Repository map[string]any `json:"repository"`
	RetentionExpiresAt *string `json:"retention_expires_at,omitempty"`
	RetentionPeriodMinutes *int `json:"retention_period_minutes,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	RuntimeConstraints *map[string]any `json:"runtime_constraints,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	SelectedUsernames []any `json:"selected_usernames"`
	Sha *string `json:"sha,omitempty"`
	Size *int `json:"size,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl string `json:"stargazers_url"`
	StartUrl string `json:"start_url"`
	State *string `json:"state,omitempty"`
	StatusesUrl string `json:"statuses_url"`
	StopUrl string `json:"stop_url"`
	StorageInBytes int `json:"storage_in_bytes"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Template *string `json:"template,omitempty"`
	Title *string `json:"title,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt string `json:"updated_at"`
	Url *string `json:"url,omitempty"`
	Visibility string `json:"visibility"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
	WebUrl string `json:"web_url"`
	WorkingDirectory *string `json:"working_directory,omitempty"`
}

// CodespaceLoadMatch is the typed request payload for Codespace.LoadTyped.
type CodespaceLoadMatch struct {
	Id string `json:"id"`
}

// CodespaceListMatch is the typed request payload for Codespace.ListTyped.
type CodespaceListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	RepositoryId *int `json:"repository_id,omitempty"`
}

// CodespaceCreateData is the typed request payload for Codespace.CreateTyped.
type CodespaceCreateData struct {
	Accepted bool `json:"accepted"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	ArchiveUrl string `json:"archive_url"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl string `json:"assignees_url"`
	BillableOwner map[string]any `json:"billable_owner"`
	BlobsUrl string `json:"blobs_url"`
	Branch *string `json:"branch,omitempty"`
	BranchesUrl string `json:"branches_url"`
	ClientIp *string `json:"client_ip,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	CompletedAt *string `json:"completed_at,omitempty"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	Cpus int `json:"cpus"`
	CreatedAt string `json:"created_at"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Defaults map[string]any `json:"defaults"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	DevcontainerPath *string `json:"devcontainer_path,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	DownloadsUrl string `json:"downloads_url"`
	EncryptedValue *string `json:"encrypted_value,omitempty"`
	EnvironmentId string `json:"environment_id"`
	EventsUrl string `json:"events_url"`
	ExportUrl *string `json:"export_url,omitempty"`
	Fork bool `json:"fork"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	Geo *string `json:"geo,omitempty"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitStatus map[string]any `json:"git_status"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl *string `json:"git_url,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	IdleTimeoutMinutes int `json:"idle_timeout_minutes"`
	IdleTimeoutNotice *string `json:"idle_timeout_notice,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	Key string `json:"key"`
	KeyId string `json:"key_id"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl string `json:"languages_url"`
	LastKnownStopNotice *string `json:"last_known_stop_notice,omitempty"`
	LastUsedAt string `json:"last_used_at"`
	License *map[string]any `json:"license,omitempty"`
	Location string `json:"location"`
	Machine map[string]any `json:"machine"`
	MachinesUrl string `json:"machines_url"`
	MemoryInBytes int `json:"memory_in_bytes"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	MultiRepoPermissionsOptOut *bool `json:"multi_repo_permissions_opt_out,omitempty"`
	Name string `json:"name"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	OperatingSystem string `json:"operating_system"`
	Owner map[string]any `json:"owner"`
	Path string `json:"path"`
	PendingOperation *bool `json:"pending_operation,omitempty"`
	PendingOperationDisabledReason *string `json:"pending_operation_disabled_reason,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Prebuild bool `json:"prebuild"`
	PrebuildAvailability string `json:"prebuild_availability"`
	Private *bool `json:"private,omitempty"`
	PublishUrl *string `json:"publish_url,omitempty"`
	PullsUrl string `json:"pulls_url"`
	PushedAt *string `json:"pushed_at,omitempty"`
	RecentFolders []any `json:"recent_folders"`
	Ref *string `json:"ref,omitempty"`
	ReleasesUrl string `json:"releases_url"`
	Repository map[string]any `json:"repository"`
	RetentionExpiresAt *string `json:"retention_expires_at,omitempty"`
	RetentionPeriodMinutes *int `json:"retention_period_minutes,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	RuntimeConstraints *map[string]any `json:"runtime_constraints,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	SelectedUsernames []any `json:"selected_usernames"`
	Sha *string `json:"sha,omitempty"`
	Size *int `json:"size,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl string `json:"stargazers_url"`
	StartUrl string `json:"start_url"`
	State *string `json:"state,omitempty"`
	StatusesUrl string `json:"statuses_url"`
	StopUrl string `json:"stop_url"`
	StorageInBytes int `json:"storage_in_bytes"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Template *string `json:"template,omitempty"`
	Title *string `json:"title,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt string `json:"updated_at"`
	Url *string `json:"url,omitempty"`
	Visibility string `json:"visibility"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
	WebUrl string `json:"web_url"`
	WorkingDirectory *string `json:"working_directory,omitempty"`
}

// CodespaceUpdateData is the typed request payload for Codespace.UpdateTyped.
type CodespaceUpdateData struct {
	SecretName string `json:"secret_name"`
	Accepted *bool `json:"accepted,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl *string `json:"assignees_url,omitempty"`
	BillableOwner *map[string]any `json:"billable_owner,omitempty"`
	BlobsUrl *string `json:"blobs_url,omitempty"`
	Branch *string `json:"branch,omitempty"`
	BranchesUrl *string `json:"branches_url,omitempty"`
	ClientIp *string `json:"client_ip,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct *map[string]any `json:"code_of_conduct,omitempty"`
	CollaboratorsUrl *string `json:"collaborators_url,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CompareUrl *string `json:"compare_url,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	ContentsUrl *string `json:"contents_url,omitempty"`
	ContributorsUrl *string `json:"contributors_url,omitempty"`
	Cpus *int `json:"cpus,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	Defaults *map[string]any `json:"defaults,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl *string `json:"deployments_url,omitempty"`
	Description *string `json:"description,omitempty"`
	DevcontainerPath *string `json:"devcontainer_path,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	DownloadsUrl *string `json:"downloads_url,omitempty"`
	EncryptedValue *string `json:"encrypted_value,omitempty"`
	EnvironmentId *string `json:"environment_id,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	ExportUrl *string `json:"export_url,omitempty"`
	Fork *bool `json:"fork,omitempty"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	Geo *string `json:"geo,omitempty"`
	GitCommitsUrl *string `json:"git_commits_url,omitempty"`
	GitRefsUrl *string `json:"git_refs_url,omitempty"`
	GitStatus *map[string]any `json:"git_status,omitempty"`
	GitTagsUrl *string `json:"git_tags_url,omitempty"`
	GitUrl *string `json:"git_url,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl *string `json:"hooks_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	IdleTimeoutMinutes *int `json:"idle_timeout_minutes,omitempty"`
	IdleTimeoutNotice *string `json:"idle_timeout_notice,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl *string `json:"issue_comment_url,omitempty"`
	IssueEventsUrl *string `json:"issue_events_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	Key *string `json:"key,omitempty"`
	KeyId *string `json:"key_id,omitempty"`
	KeysUrl *string `json:"keys_url,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl *string `json:"languages_url,omitempty"`
	LastKnownStopNotice *string `json:"last_known_stop_notice,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	Location *string `json:"location,omitempty"`
	Machine *map[string]any `json:"machine,omitempty"`
	MachinesUrl *string `json:"machines_url,omitempty"`
	MemoryInBytes *int `json:"memory_in_bytes,omitempty"`
	MergesUrl *string `json:"merges_url,omitempty"`
	MilestonesUrl *string `json:"milestones_url,omitempty"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	MultiRepoPermissionsOptOut *bool `json:"multi_repo_permissions_opt_out,omitempty"`
	Name *string `json:"name,omitempty"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationsUrl *string `json:"notifications_url,omitempty"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	OperatingSystem *string `json:"operating_system,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Path *string `json:"path,omitempty"`
	PendingOperation *bool `json:"pending_operation,omitempty"`
	PendingOperationDisabledReason *string `json:"pending_operation_disabled_reason,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Prebuild *bool `json:"prebuild,omitempty"`
	PrebuildAvailability *string `json:"prebuild_availability,omitempty"`
	Private *bool `json:"private,omitempty"`
	PublishUrl *string `json:"publish_url,omitempty"`
	PullsUrl *string `json:"pulls_url,omitempty"`
	PushedAt *string `json:"pushed_at,omitempty"`
	RecentFolders *[]any `json:"recent_folders,omitempty"`
	Ref *string `json:"ref,omitempty"`
	ReleasesUrl *string `json:"releases_url,omitempty"`
	Repository *map[string]any `json:"repository,omitempty"`
	RetentionExpiresAt *string `json:"retention_expires_at,omitempty"`
	RetentionPeriodMinutes *int `json:"retention_period_minutes,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	RuntimeConstraints *map[string]any `json:"runtime_constraints,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	SelectedUsernames *[]any `json:"selected_usernames,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Size *int `json:"size,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl *string `json:"stargazers_url,omitempty"`
	StartUrl *string `json:"start_url,omitempty"`
	State *string `json:"state,omitempty"`
	StatusesUrl *string `json:"statuses_url,omitempty"`
	StopUrl *string `json:"stop_url,omitempty"`
	StorageInBytes *int `json:"storage_in_bytes,omitempty"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl *string `json:"subscribers_url,omitempty"`
	SubscriptionUrl *string `json:"subscription_url,omitempty"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl *string `json:"tags_url,omitempty"`
	TeamsUrl *string `json:"teams_url,omitempty"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Template *string `json:"template,omitempty"`
	Title *string `json:"title,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl *string `json:"trees_url,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
	WebUrl *string `json:"web_url,omitempty"`
	WorkingDirectory *string `json:"working_directory,omitempty"`
}

// CodespaceRemoveMatch is the typed request payload for Codespace.RemoveTyped.
type CodespaceRemoveMatch struct {
	Id string `json:"id"`
}

// Collaborator is the typed data model for the collaborator entity.
type Collaborator struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	Permissions map[string]any `json:"permissions"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	RoleName string `json:"role_name"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// CollaboratorListMatch is the typed request payload for Collaborator.ListTyped.
type CollaboratorListMatch struct {
	ProjectId int `json:"project_id"`
	Affiliation *string `json:"affiliation,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// CombinedBillingUsage is the typed data model for the combined_billing_usage entity.
type CombinedBillingUsage struct {
	DaysLeftInBillingCycle int `json:"days_left_in_billing_cycle"`
	EstimatedPaidStorageForMonth int `json:"estimated_paid_storage_for_month"`
	EstimatedStorageForMonth int `json:"estimated_storage_for_month"`
}

// CombinedBillingUsageLoadMatch is the typed request payload for CombinedBillingUsage.LoadTyped.
type CombinedBillingUsageLoadMatch struct {
	OrgId string `json:"org_id"`
}

// CombinedCommitStatus is the typed data model for the combined_commit_status entity.
type CombinedCommitStatus struct {
	AvatarUrl string `json:"avatar_url"`
	Context string `json:"context"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	Id int `json:"id"`
	NodeId string `json:"node_id"`
	Required *bool `json:"required,omitempty"`
	State string `json:"state"`
	TargetUrl string `json:"target_url"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// CombinedCommitStatusListMatch is the typed request payload for CombinedCommitStatus.ListTyped.
type CombinedCommitStatusListMatch struct {
	Owner string `json:"owner"`
	Ref string `json:"ref"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Commit is the typed data model for the commit entity.
type Commit struct {
	Author any `json:"author"`
	Base string `json:"base"`
	CommentsUrl string `json:"comments_url"`
	Commit map[string]any `json:"commit"`
	CommitMessage *string `json:"commit_message,omitempty"`
	Committer any `json:"committer"`
	Files *[]any `json:"files,omitempty"`
	Head string `json:"head"`
	HtmlUrl string `json:"html_url"`
	Id *string `json:"id,omitempty"`
	NodeId string `json:"node_id"`
	Parents []any `json:"parents"`
	Sha string `json:"sha"`
	Stats *map[string]any `json:"stats,omitempty"`
	Url string `json:"url"`
}

// CommitLoadMatch is the typed request payload for Commit.LoadTyped.
type CommitLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// CommitListMatch is the typed request payload for Commit.ListTyped.
type CommitListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Author *string `json:"author,omitempty"`
	Committer *string `json:"committer,omitempty"`
	Page *int `json:"page,omitempty"`
	Path *string `json:"path,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Since *string `json:"since,omitempty"`
	Until *string `json:"until,omitempty"`
	PullNumber *int `json:"pull_number,omitempty"`
}

// CommitCreateData is the typed request payload for Commit.CreateTyped.
type CommitCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Author any `json:"author"`
	Base string `json:"base"`
	CommentsUrl string `json:"comments_url"`
	Commit map[string]any `json:"commit"`
	CommitMessage *string `json:"commit_message,omitempty"`
	Committer any `json:"committer"`
	Files *[]any `json:"files,omitempty"`
	Head string `json:"head"`
	HtmlUrl string `json:"html_url"`
	Id *string `json:"id,omitempty"`
	NodeId string `json:"node_id"`
	Parents []any `json:"parents"`
	Sha string `json:"sha"`
	Stats *map[string]any `json:"stats,omitempty"`
	Url string `json:"url"`
}

// CommitActivity is the typed data model for the commit_activity entity.
type CommitActivity struct {
	Days []any `json:"days"`
	Total int `json:"total"`
	Week int `json:"week"`
}

// CommitActivityListMatch is the typed request payload for CommitActivity.ListTyped.
type CommitActivityListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CommitComment is the typed data model for the commit_comment entity.
type CommitComment struct {
	AuthorAssociation string `json:"author_association"`
	Body string `json:"body"`
	CommitId string `json:"commit_id"`
	CreatedAt string `json:"created_at"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Line int `json:"line"`
	NodeId string `json:"node_id"`
	Path string `json:"path"`
	Position int `json:"position"`
	Reactions map[string]any `json:"reactions"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// CommitCommentLoadMatch is the typed request payload for CommitComment.LoadTyped.
type CommitCommentLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// CommitCommentListMatch is the typed request payload for CommitComment.ListTyped.
type CommitCommentListMatch struct {
	CommitSha *string `json:"commit_sha,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// CommitCommentCreateData is the typed request payload for CommitComment.CreateTyped.
type CommitCommentCreateData struct {
	CommitSha string `json:"commit_sha"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AuthorAssociation string `json:"author_association"`
	Body string `json:"body"`
	CommitId string `json:"commit_id"`
	CreatedAt string `json:"created_at"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Line int `json:"line"`
	NodeId string `json:"node_id"`
	Path string `json:"path"`
	Position int `json:"position"`
	Reactions map[string]any `json:"reactions"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// CommitCommentUpdateData is the typed request payload for CommitComment.UpdateTyped.
type CommitCommentUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AuthorAssociation *string `json:"author_association,omitempty"`
	Body *string `json:"body,omitempty"`
	CommitId *string `json:"commit_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Line *int `json:"line,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Path *string `json:"path,omitempty"`
	Position *int `json:"position,omitempty"`
	Reactions *map[string]any `json:"reactions,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// CommitComparison is the typed data model for the commit_comparison entity.
type CommitComparison struct {
	AheadBy int `json:"ahead_by"`
	BaseCommit map[string]any `json:"base_commit"`
	BehindBy int `json:"behind_by"`
	Commits []any `json:"commits"`
	DiffUrl string `json:"diff_url"`
	Files *[]any `json:"files,omitempty"`
	HtmlUrl string `json:"html_url"`
	MergeBaseCommit map[string]any `json:"merge_base_commit"`
	PatchUrl string `json:"patch_url"`
	PermalinkUrl string `json:"permalink_url"`
	Status string `json:"status"`
	TotalCommits int `json:"total_commits"`
	Url string `json:"url"`
}

// CommitComparisonLoadMatch is the typed request payload for CommitComparison.LoadTyped.
type CommitComparisonLoadMatch struct {
	Basehead string `json:"basehead"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// CommunityProfile is the typed data model for the community_profile entity.
type CommunityProfile struct {
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CodeOfConductFile map[string]any `json:"code_of_conduct_file"`
	Contributing map[string]any `json:"contributing"`
	IssueTemplate map[string]any `json:"issue_template"`
	License map[string]any `json:"license"`
	PullRequestTemplate map[string]any `json:"pull_request_template"`
	Readme map[string]any `json:"readme"`
}

// CommunityProfileLoadMatch is the typed request payload for CommunityProfile.LoadTyped.
type CommunityProfileLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ContentFile is the typed data model for the content_file entity.
type ContentFile struct {
	Git string `json:"git"`
	Html string `json:"html"`
	Self string `json:"self"`
}

// ContentFileLoadMatch is the typed request payload for ContentFile.LoadTyped.
type ContentFileLoadMatch struct {
	Dir *string `json:"dir,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Ref *string `json:"ref,omitempty"`
}

// ContentTraffic is the typed data model for the content_traffic entity.
type ContentTraffic struct {
	Count int `json:"count"`
	Path string `json:"path"`
	Title string `json:"title"`
	Uniques int `json:"uniques"`
}

// ContentTrafficListMatch is the typed request payload for ContentTraffic.ListTyped.
type ContentTrafficListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Contributor is the typed data model for the contributor entity.
type Contributor struct {
	Author map[string]any `json:"author"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Contributions int `json:"contributions"`
	Email *string `json:"email,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	Login *string `json:"login,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	Total int `json:"total"`
	Type string `json:"type"`
	Url *string `json:"url,omitempty"`
	UserViewType *string `json:"user_view_type,omitempty"`
	Weeks []any `json:"weeks"`
}

// ContributorListMatch is the typed request payload for Contributor.ListTyped.
type ContributorListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Anon *string `json:"anon,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Copilot is the typed data model for the copilot entity.
type Copilot struct {
	Assignee map[string]any `json:"assignee"`
	AssigningTeam *any `json:"assigning_team,omitempty"`
	CreatedAt string `json:"created_at"`
	LastActivityAt *string `json:"last_activity_at,omitempty"`
	LastActivityEditor *string `json:"last_activity_editor,omitempty"`
	LastAuthenticatedAt *string `json:"last_authenticated_at,omitempty"`
	Organization map[string]any `json:"organization"`
	PendingCancellationDate *string `json:"pending_cancellation_date,omitempty"`
	PlanType *string `json:"plan_type,omitempty"`
	SelectedTeams []any `json:"selected_teams"`
	SelectedUsernames []any `json:"selected_usernames"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CopilotLoadMatch is the typed request payload for Copilot.LoadTyped.
type CopilotLoadMatch struct {
	OrgId string `json:"org_id"`
	Username string `json:"username"`
}

// CopilotListMatch is the typed request payload for Copilot.ListTyped.
type CopilotListMatch struct {
	OrgId string `json:"org_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// CopilotCreateData is the typed request payload for Copilot.CreateTyped.
type CopilotCreateData struct {
	OrgId string `json:"org_id"`
	Assignee map[string]any `json:"assignee"`
	AssigningTeam *any `json:"assigning_team,omitempty"`
	CreatedAt string `json:"created_at"`
	LastActivityAt *string `json:"last_activity_at,omitempty"`
	LastActivityEditor *string `json:"last_activity_editor,omitempty"`
	LastAuthenticatedAt *string `json:"last_authenticated_at,omitempty"`
	Organization map[string]any `json:"organization"`
	PendingCancellationDate *string `json:"pending_cancellation_date,omitempty"`
	PlanType *string `json:"plan_type,omitempty"`
	SelectedTeams []any `json:"selected_teams"`
	SelectedUsernames []any `json:"selected_usernames"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CopilotRemoveMatch is the typed request payload for Copilot.RemoveTyped.
type CopilotRemoveMatch struct {
	OrgId string `json:"org_id"`
}

// CopilotOrganizationDetail is the typed data model for the copilot_organization_detail entity.
type CopilotOrganizationDetail struct {
	ActiveThisCycle *int `json:"active_this_cycle,omitempty"`
	AddedThisCycle *int `json:"added_this_cycle,omitempty"`
	InactiveThisCycle *int `json:"inactive_this_cycle,omitempty"`
	PendingCancellation *int `json:"pending_cancellation,omitempty"`
	PendingInvitation *int `json:"pending_invitation,omitempty"`
	Total *int `json:"total,omitempty"`
}

// CopilotOrganizationDetailLoadMatch is the typed request payload for CopilotOrganizationDetail.LoadTyped.
type CopilotOrganizationDetailLoadMatch struct {
	OrgId string `json:"org_id"`
}

// CopilotUsageMetricsDay is the typed data model for the copilot_usage_metrics_day entity.
type CopilotUsageMetricsDay struct {
	CopilotDotcomChat *map[string]any `json:"copilot_dotcom_chat,omitempty"`
	CopilotDotcomPullRequests *map[string]any `json:"copilot_dotcom_pull_requests,omitempty"`
	CopilotIdeChat *map[string]any `json:"copilot_ide_chat,omitempty"`
	CopilotIdeCodeCompletions *map[string]any `json:"copilot_ide_code_completions,omitempty"`
	Date string `json:"date"`
	TotalActiveUsers *int `json:"total_active_users,omitempty"`
	TotalEngagedUsers *int `json:"total_engaged_users,omitempty"`
}

// CopilotUsageMetricsDayListMatch is the typed request payload for CopilotUsageMetricsDay.ListTyped.
type CopilotUsageMetricsDayListMatch struct {
	OrgId string `json:"org_id"`
	TeamId *string `json:"team_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Since *string `json:"since,omitempty"`
	Until *string `json:"until,omitempty"`
}

// Credential is the typed data model for the credential entity.
type Credential struct {
	Credentials []any `json:"credentials"`
}

// CredentialCreateData is the typed request payload for Credential.CreateTyped.
type CredentialCreateData struct {
	Credentials []any `json:"credentials"`
}

// CustomProperty is the typed data model for the custom_property entity.
type CustomProperty struct {
	AllowedValues *[]any `json:"allowed_values,omitempty"`
	DefaultValue *any `json:"default_value,omitempty"`
	Description *string `json:"description,omitempty"`
	Properties []any `json:"properties"`
	PropertyName string `json:"property_name"`
	Required *bool `json:"required,omitempty"`
	SourceType *string `json:"source_type,omitempty"`
	Url *string `json:"url,omitempty"`
	ValueType string `json:"value_type"`
	ValuesEditableBy *string `json:"values_editable_by,omitempty"`
}

// CustomPropertyLoadMatch is the typed request payload for CustomProperty.LoadTyped.
type CustomPropertyLoadMatch struct {
	CustomPropertyName string `json:"custom_property_name"`
	OrgId string `json:"org_id"`
}

// CustomPropertyListMatch is the typed request payload for CustomProperty.ListTyped.
type CustomPropertyListMatch struct {
	OrgId string `json:"org_id"`
}

// CustomPropertyUpdateData is the typed request payload for CustomProperty.UpdateTyped.
type CustomPropertyUpdateData struct {
	CustomPropertyName string `json:"custom_property_name"`
	OrgId string `json:"org_id"`
	AllowedValues *[]any `json:"allowed_values,omitempty"`
	DefaultValue *any `json:"default_value,omitempty"`
	Description *string `json:"description,omitempty"`
	Properties *[]any `json:"properties,omitempty"`
	PropertyName *string `json:"property_name,omitempty"`
	Required *bool `json:"required,omitempty"`
	SourceType *string `json:"source_type,omitempty"`
	Url *string `json:"url,omitempty"`
	ValueType *string `json:"value_type,omitempty"`
	ValuesEditableBy *string `json:"values_editable_by,omitempty"`
}

// CustomPropertyValue is the typed data model for the custom_property_value entity.
type CustomPropertyValue struct {
	PropertyName string `json:"property_name"`
	Value any `json:"value"`
}

// CustomPropertyValueListMatch is the typed request payload for CustomPropertyValue.ListTyped.
type CustomPropertyValueListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Dependabot is the typed data model for the dependabot entity.
type Dependabot struct {
	AllowForking *bool `json:"allow_forking,omitempty"`
	ArchiveUrl string `json:"archive_url"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl string `json:"assignees_url"`
	AvatarUrl string `json:"avatar_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DefaultLevel string `json:"default_level"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled *bool `json:"disabled,omitempty"`
	DownloadsUrl string `json:"downloads_url"`
	EventsUrl string `json:"events_url"`
	Fork bool `json:"fork"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl *string `json:"git_url,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl string `json:"languages_url"`
	License *map[string]any `json:"license,omitempty"`
	Login string `json:"login"`
	MembersUrl string `json:"members_url"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name string `json:"name"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Owner map[string]any `json:"owner"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private bool `json:"private"`
	PublicMembersUrl string `json:"public_members_url"`
	PullsUrl string `json:"pulls_url"`
	PushedAt *string `json:"pushed_at,omitempty"`
	ReleasesUrl string `json:"releases_url"`
	ReposUrl string `json:"repos_url"`
	RepositoryIdsToAdd *[]any `json:"repository_ids_to_add,omitempty"`
	RepositoryIdsToRemove *[]any `json:"repository_ids_to_remove,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds []any `json:"selected_repository_ids"`
	Size *int `json:"size,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl string `json:"stargazers_url"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url string `json:"url"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// DependabotListMatch is the typed request payload for Dependabot.ListTyped.
type DependabotListMatch struct {
	PerPage *int `json:"per_page,omitempty"`
	Since *int `json:"since,omitempty"`
}

// DependabotUpdateData is the typed request payload for Dependabot.UpdateTyped.
type DependabotUpdateData struct {
	OrgId string `json:"org_id"`
	RepositoryId int `json:"repository_id"`
	SecretId string `json:"secret_id"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl *string `json:"assignees_url,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BlobsUrl *string `json:"blobs_url,omitempty"`
	BranchesUrl *string `json:"branches_url,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct *map[string]any `json:"code_of_conduct,omitempty"`
	CollaboratorsUrl *string `json:"collaborators_url,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CompareUrl *string `json:"compare_url,omitempty"`
	ContentsUrl *string `json:"contents_url,omitempty"`
	ContributorsUrl *string `json:"contributors_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DefaultLevel *string `json:"default_level,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl *string `json:"deployments_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DownloadsUrl *string `json:"downloads_url,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	Fork *bool `json:"fork,omitempty"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	GitCommitsUrl *string `json:"git_commits_url,omitempty"`
	GitRefsUrl *string `json:"git_refs_url,omitempty"`
	GitTagsUrl *string `json:"git_tags_url,omitempty"`
	GitUrl *string `json:"git_url,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl *string `json:"hooks_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl *string `json:"issue_comment_url,omitempty"`
	IssueEventsUrl *string `json:"issue_events_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	KeysUrl *string `json:"keys_url,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl *string `json:"languages_url,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	Login *string `json:"login,omitempty"`
	MembersUrl *string `json:"members_url,omitempty"`
	MergesUrl *string `json:"merges_url,omitempty"`
	MilestonesUrl *string `json:"milestones_url,omitempty"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationsUrl *string `json:"notifications_url,omitempty"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private *bool `json:"private,omitempty"`
	PublicMembersUrl *string `json:"public_members_url,omitempty"`
	PullsUrl *string `json:"pulls_url,omitempty"`
	PushedAt *string `json:"pushed_at,omitempty"`
	ReleasesUrl *string `json:"releases_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	RepositoryIdsToAdd *[]any `json:"repository_ids_to_add,omitempty"`
	RepositoryIdsToRemove *[]any `json:"repository_ids_to_remove,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	Size *int `json:"size,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl *string `json:"stargazers_url,omitempty"`
	StatusesUrl *string `json:"statuses_url,omitempty"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl *string `json:"subscribers_url,omitempty"`
	SubscriptionUrl *string `json:"subscription_url,omitempty"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl *string `json:"tags_url,omitempty"`
	TeamsUrl *string `json:"teams_url,omitempty"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl *string `json:"trees_url,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// DependabotRemoveMatch is the typed request payload for Dependabot.RemoveTyped.
type DependabotRemoveMatch struct {
	OrgId string `json:"org_id"`
	SecretName string `json:"secret_name"`
}

// DependabotAlert is the typed data model for the dependabot_alert entity.
type DependabotAlert struct {
	AutoDismissedAt *string `json:"auto_dismissed_at,omitempty"`
	CreatedAt string `json:"created_at"`
	Dependency map[string]any `json:"dependency"`
	DismissedAt string `json:"dismissed_at"`
	DismissedBy map[string]any `json:"dismissed_by"`
	DismissedComment string `json:"dismissed_comment"`
	DismissedReason string `json:"dismissed_reason"`
	FixedAt string `json:"fixed_at"`
	HtmlUrl string `json:"html_url"`
	Id *string `json:"id,omitempty"`
	Number int `json:"number"`
	SecurityAdvisory map[string]any `json:"security_advisory"`
	SecurityVulnerability map[string]any `json:"security_vulnerability"`
	State string `json:"state"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// DependabotAlertLoadMatch is the typed request payload for DependabotAlert.LoadTyped.
type DependabotAlertLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// DependabotAlertListMatch is the typed request payload for DependabotAlert.ListTyped.
type DependabotAlertListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Ecosystem *string `json:"ecosystem,omitempty"`
	EpssPercentage *string `json:"epss_percentage,omitempty"`
	First *int `json:"first,omitempty"`
	Has *any `json:"has,omitempty"`
	Last *int `json:"last,omitempty"`
	Manifest *string `json:"manifest,omitempty"`
	Package *string `json:"package,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Scope *string `json:"scope,omitempty"`
	Severity *string `json:"severity,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
}

// DependabotAlertUpdateData is the typed request payload for DependabotAlert.UpdateTyped.
type DependabotAlertUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AutoDismissedAt *string `json:"auto_dismissed_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Dependency *map[string]any `json:"dependency,omitempty"`
	DismissedAt *string `json:"dismissed_at,omitempty"`
	DismissedBy *map[string]any `json:"dismissed_by,omitempty"`
	DismissedComment *string `json:"dismissed_comment,omitempty"`
	DismissedReason *string `json:"dismissed_reason,omitempty"`
	FixedAt *string `json:"fixed_at,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Number *int `json:"number,omitempty"`
	SecurityAdvisory *map[string]any `json:"security_advisory,omitempty"`
	SecurityVulnerability *map[string]any `json:"security_vulnerability,omitempty"`
	State *string `json:"state,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// DependabotAlertWithRepository is the typed data model for the dependabot_alert_with_repository entity.
type DependabotAlertWithRepository struct {
	AutoDismissedAt *string `json:"auto_dismissed_at,omitempty"`
	CreatedAt string `json:"created_at"`
	Dependency map[string]any `json:"dependency"`
	DismissedAt string `json:"dismissed_at"`
	DismissedBy map[string]any `json:"dismissed_by"`
	DismissedComment string `json:"dismissed_comment"`
	DismissedReason string `json:"dismissed_reason"`
	FixedAt string `json:"fixed_at"`
	HtmlUrl string `json:"html_url"`
	Number int `json:"number"`
	Repository map[string]any `json:"repository"`
	SecurityAdvisory map[string]any `json:"security_advisory"`
	SecurityVulnerability map[string]any `json:"security_vulnerability"`
	State string `json:"state"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// DependabotAlertWithRepositoryListMatch is the typed request payload for DependabotAlertWithRepository.ListTyped.
type DependabotAlertWithRepositoryListMatch struct {
	OrgId string `json:"org_id"`
	After *string `json:"after,omitempty"`
	ArtifactRegistry *string `json:"artifact_registry,omitempty"`
	ArtifactRegistryUrl *string `json:"artifact_registry_url,omitempty"`
	Before *string `json:"before,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Ecosystem *string `json:"ecosystem,omitempty"`
	EpssPercentage *string `json:"epss_percentage,omitempty"`
	First *int `json:"first,omitempty"`
	Has *any `json:"has,omitempty"`
	Last *int `json:"last,omitempty"`
	Package *string `json:"package,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Scope *string `json:"scope,omitempty"`
	Severity *string `json:"severity,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
}

// DependabotPublicKey is the typed data model for the dependabot_public_key entity.
type DependabotPublicKey struct {
	Key string `json:"key"`
	KeyId string `json:"key_id"`
}

// DependabotPublicKeyLoadMatch is the typed request payload for DependabotPublicKey.LoadTyped.
type DependabotPublicKeyLoadMatch struct {
	OrgId string `json:"org_id"`
}

// DependabotRepositoryAccessDetail is the typed data model for the dependabot_repository_access_detail entity.
type DependabotRepositoryAccessDetail struct {
	ArchiveUrl string `json:"archive_url"`
	AssigneesUrl string `json:"assignees_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	DownloadsUrl string `json:"downloads_url"`
	EventsUrl string `json:"events_url"`
	Fork bool `json:"fork"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	LanguagesUrl string `json:"languages_url"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	Owner map[string]any `json:"owner"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	ReleasesUrl string `json:"releases_url"`
	StargazersUrl string `json:"stargazers_url"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TreesUrl string `json:"trees_url"`
	Url string `json:"url"`
}

// DependabotRepositoryAccessDetailListMatch is the typed request payload for DependabotRepositoryAccessDetail.ListTyped.
type DependabotRepositoryAccessDetailListMatch struct {
	Org string `json:"org"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// DependabotSecret is the typed data model for the dependabot_secret entity.
type DependabotSecret struct {
	CreatedAt string `json:"created_at"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	UpdatedAt string `json:"updated_at"`
}

// DependabotSecretLoadMatch is the typed request payload for DependabotSecret.LoadTyped.
type DependabotSecretLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// DependencyGraph is the typed data model for the dependency_graph entity.
type DependencyGraph struct {
	Detector map[string]any `json:"detector"`
	Job map[string]any `json:"job"`
	Manifests *map[string]any `json:"manifests,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Ref string `json:"ref"`
	Scanned string `json:"scanned"`
	Sha string `json:"sha"`
	Version int `json:"version"`
}

// DependencyGraphCreateData is the typed request payload for DependencyGraph.CreateTyped.
type DependencyGraphCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Detector map[string]any `json:"detector"`
	Job map[string]any `json:"job"`
	Manifests *map[string]any `json:"manifests,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Ref string `json:"ref"`
	Scanned string `json:"scanned"`
	Sha string `json:"sha"`
	Version int `json:"version"`
}

// DependencyGraphDiff is the typed data model for the dependency_graph_diff entity.
type DependencyGraphDiff struct {
	ChangeType string `json:"change_type"`
	Ecosystem string `json:"ecosystem"`
	License string `json:"license"`
	Manifest string `json:"manifest"`
	Name string `json:"name"`
	PackageUrl string `json:"package_url"`
	Scope string `json:"scope"`
	SourceRepositoryUrl string `json:"source_repository_url"`
	Version string `json:"version"`
	Vulnerabilities []any `json:"vulnerabilities"`
}

// DependencyGraphDiffLoadMatch is the typed request payload for DependencyGraphDiff.LoadTyped.
type DependencyGraphDiffLoadMatch struct {
	Basehead string `json:"basehead"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Name *string `json:"name,omitempty"`
}

// DependencyGraphSpdxSbom is the typed data model for the dependency_graph_spdx_sbom entity.
type DependencyGraphSpdxSbom struct {
	SPDXID string `json:"SPDXID"`
	Comment *string `json:"comment,omitempty"`
	CreationInfo map[string]any `json:"creationInfo"`
	DataLicense string `json:"dataLicense"`
	DocumentNamespace string `json:"documentNamespace"`
	Name string `json:"name"`
	Packages []any `json:"packages"`
	Relationships []any `json:"relationships"`
	SpdxVersion string `json:"spdxVersion"`
}

// DependencyGraphSpdxSbomLoadMatch is the typed request payload for DependencyGraphSpdxSbom.LoadTyped.
type DependencyGraphSpdxSbomLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// DeployKey is the typed data model for the deploy_key entity.
type DeployKey struct {
	AddedBy *string `json:"added_by,omitempty"`
	CreatedAt string `json:"created_at"`
	Enabled *bool `json:"enabled,omitempty"`
	Id int `json:"id"`
	Key string `json:"key"`
	LastUsed *string `json:"last_used,omitempty"`
	ReadOnly bool `json:"read_only"`
	Title string `json:"title"`
	Url string `json:"url"`
	Verified bool `json:"verified"`
}

// DeployKeyLoadMatch is the typed request payload for DeployKey.LoadTyped.
type DeployKeyLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// DeployKeyListMatch is the typed request payload for DeployKey.ListTyped.
type DeployKeyListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// DeployKeyCreateData is the typed request payload for DeployKey.CreateTyped.
type DeployKeyCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AddedBy *string `json:"added_by,omitempty"`
	CreatedAt string `json:"created_at"`
	Enabled *bool `json:"enabled,omitempty"`
	Id int `json:"id"`
	Key string `json:"key"`
	LastUsed *string `json:"last_used,omitempty"`
	ReadOnly bool `json:"read_only"`
	Title string `json:"title"`
	Url string `json:"url"`
	Verified bool `json:"verified"`
}

// Deployment is the typed data model for the deployment entity.
type Deployment struct {
	AutoMerge *bool `json:"auto_merge,omitempty"`
	Comment string `json:"comment"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Description string `json:"description"`
	Environment string `json:"environment"`
	EnvironmentIds []any `json:"environment_ids"`
	Id int `json:"id"`
	NodeId string `json:"node_id"`
	OriginalEnvironment *string `json:"original_environment,omitempty"`
	Payload any `json:"payload"`
	PerformedViaGithubApp map[string]any `json:"performed_via_github_app"`
	ProductionEnvironment *bool `json:"production_environment,omitempty"`
	Ref string `json:"ref"`
	RepositoryUrl string `json:"repository_url"`
	RequiredContexts *[]any `json:"required_contexts,omitempty"`
	Sha string `json:"sha"`
	State string `json:"state"`
	StatusesUrl string `json:"statuses_url"`
	Task string `json:"task"`
	TransientEnvironment *bool `json:"transient_environment,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// DeploymentLoadMatch is the typed request payload for Deployment.LoadTyped.
type DeploymentLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// DeploymentListMatch is the typed request payload for Deployment.ListTyped.
type DeploymentListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Environment *string `json:"environment,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Task *string `json:"task,omitempty"`
}

// DeploymentCreateData is the typed request payload for Deployment.CreateTyped.
type DeploymentCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	RunId *int `json:"run_id,omitempty"`
	AutoMerge *bool `json:"auto_merge,omitempty"`
	Comment string `json:"comment"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Description string `json:"description"`
	Environment string `json:"environment"`
	EnvironmentIds []any `json:"environment_ids"`
	Id int `json:"id"`
	NodeId string `json:"node_id"`
	OriginalEnvironment *string `json:"original_environment,omitempty"`
	Payload any `json:"payload"`
	PerformedViaGithubApp map[string]any `json:"performed_via_github_app"`
	ProductionEnvironment *bool `json:"production_environment,omitempty"`
	Ref string `json:"ref"`
	RepositoryUrl string `json:"repository_url"`
	RequiredContexts *[]any `json:"required_contexts,omitempty"`
	Sha string `json:"sha"`
	State string `json:"state"`
	StatusesUrl string `json:"statuses_url"`
	Task string `json:"task"`
	TransientEnvironment *bool `json:"transient_environment,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// DeploymentBranchPolicy is the typed data model for the deployment_branch_policy entity.
type DeploymentBranchPolicy struct {
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// DeploymentBranchPolicyLoadMatch is the typed request payload for DeploymentBranchPolicy.LoadTyped.
type DeploymentBranchPolicyLoadMatch struct {
	EnvironmentId string `json:"environment_id"`
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// DeploymentBranchPolicyCreateData is the typed request payload for DeploymentBranchPolicy.CreateTyped.
type DeploymentBranchPolicyCreateData struct {
	EnvironmentName string `json:"environment_name"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// DeploymentBranchPolicyUpdateData is the typed request payload for DeploymentBranchPolicy.UpdateTyped.
type DeploymentBranchPolicyUpdateData struct {
	EnvironmentId string `json:"environment_id"`
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// DeploymentProtectionRule is the typed data model for the deployment_protection_rule entity.
type DeploymentProtectionRule struct {
	Id int `json:"id"`
	IntegrationId *int `json:"integration_id,omitempty"`
	IntegrationUrl string `json:"integration_url"`
	NodeId string `json:"node_id"`
	Slug string `json:"slug"`
}

// DeploymentProtectionRuleLoadMatch is the typed request payload for DeploymentProtectionRule.LoadTyped.
type DeploymentProtectionRuleLoadMatch struct {
	EnvironmentId string `json:"environment_id"`
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// DeploymentProtectionRuleCreateData is the typed request payload for DeploymentProtectionRule.CreateTyped.
type DeploymentProtectionRuleCreateData struct {
	EnvironmentName string `json:"environment_name"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Id int `json:"id"`
	IntegrationId *int `json:"integration_id,omitempty"`
	IntegrationUrl string `json:"integration_url"`
	NodeId string `json:"node_id"`
	Slug string `json:"slug"`
}

// DeploymentStatus is the typed data model for the deployment_status entity.
type DeploymentStatus struct {
	AutoInactive *bool `json:"auto_inactive,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	DeploymentUrl string `json:"deployment_url"`
	Description string `json:"description"`
	Environment *string `json:"environment,omitempty"`
	EnvironmentUrl *string `json:"environment_url,omitempty"`
	Id int `json:"id"`
	LogUrl *string `json:"log_url,omitempty"`
	NodeId string `json:"node_id"`
	PerformedViaGithubApp map[string]any `json:"performed_via_github_app"`
	RepositoryUrl string `json:"repository_url"`
	State string `json:"state"`
	TargetUrl string `json:"target_url"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// DeploymentStatusLoadMatch is the typed request payload for DeploymentStatus.LoadTyped.
type DeploymentStatusLoadMatch struct {
	DeploymentId int `json:"deployment_id"`
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// DeploymentStatusListMatch is the typed request payload for DeploymentStatus.ListTyped.
type DeploymentStatusListMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// DeploymentStatusCreateData is the typed request payload for DeploymentStatus.CreateTyped.
type DeploymentStatusCreateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AutoInactive *bool `json:"auto_inactive,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	DeploymentUrl string `json:"deployment_url"`
	Description string `json:"description"`
	Environment *string `json:"environment,omitempty"`
	EnvironmentUrl *string `json:"environment_url,omitempty"`
	LogUrl *string `json:"log_url,omitempty"`
	NodeId string `json:"node_id"`
	PerformedViaGithubApp map[string]any `json:"performed_via_github_app"`
	RepositoryUrl string `json:"repository_url"`
	State string `json:"state"`
	TargetUrl string `json:"target_url"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// DiffEntry is the typed data model for the diff_entry entity.
type DiffEntry struct {
	Additions int `json:"additions"`
	BlobUrl string `json:"blob_url"`
	Changes int `json:"changes"`
	ContentsUrl string `json:"contents_url"`
	Deletions int `json:"deletions"`
	Filename string `json:"filename"`
	Patch *string `json:"patch,omitempty"`
	PreviousFilename *string `json:"previous_filename,omitempty"`
	RawUrl string `json:"raw_url"`
	Sha string `json:"sha"`
	Status string `json:"status"`
}

// DiffEntryListMatch is the typed request payload for DiffEntry.ListTyped.
type DiffEntryListMatch struct {
	Owner string `json:"owner"`
	PullNumber int `json:"pull_number"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Email is the typed data model for the email entity.
type Email struct {
	Email *string `json:"email,omitempty"`
	Primary *bool `json:"primary,omitempty"`
	Verified *bool `json:"verified,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// EmailListMatch is the typed request payload for Email.ListTyped.
type EmailListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// EmailCreateData is the typed request payload for Email.CreateTyped.
type EmailCreateData struct {
	Email *string `json:"email,omitempty"`
	Primary *bool `json:"primary,omitempty"`
	Verified *bool `json:"verified,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// EmailUpdateData is the typed request payload for Email.UpdateTyped.
type EmailUpdateData struct {
	Email *string `json:"email,omitempty"`
	Primary *bool `json:"primary,omitempty"`
	Verified *bool `json:"verified,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// Emoji is the typed data model for the emoji entity.
type Emoji struct {
	F1 *string `json:"1,omitempty"`
	F100 *string `json:"100,omitempty"`
	F1234 *string `json:"1234,omitempty"`
	F1stPlaceMedal *string `json:"1st_place_medal,omitempty"`
	F2ndPlaceMedal *string `json:"2nd_place_medal,omitempty"`
	F3rdPlaceMedal *string `json:"3rd_place_medal,omitempty"`
	F8ball *string `json:"8ball,omitempty"`
	A *string `json:"a,omitempty"`
	Ab *string `json:"ab,omitempty"`
	Abacus *string `json:"abacus,omitempty"`
	Abc *string `json:"abc,omitempty"`
	Abcd *string `json:"abcd,omitempty"`
	Accept *string `json:"accept,omitempty"`
	Accessibility *string `json:"accessibility,omitempty"`
	Accordion *string `json:"accordion,omitempty"`
	AdhesiveBandage *string `json:"adhesive_bandage,omitempty"`
	Adult *string `json:"adult,omitempty"`
	AerialTramway *string `json:"aerial_tramway,omitempty"`
	Afghanistan *string `json:"afghanistan,omitempty"`
	Airplane *string `json:"airplane,omitempty"`
	AlandIslands *string `json:"aland_islands,omitempty"`
	AlarmClock *string `json:"alarm_clock,omitempty"`
	Albania *string `json:"albania,omitempty"`
	Alembic *string `json:"alembic,omitempty"`
	Algeria *string `json:"algeria,omitempty"`
	Alien *string `json:"alien,omitempty"`
	Ambulance *string `json:"ambulance,omitempty"`
	AmericanSamoa *string `json:"american_samoa,omitempty"`
	Amphora *string `json:"amphora,omitempty"`
	AnatomicalHeart *string `json:"anatomical_heart,omitempty"`
	Anchor *string `json:"anchor,omitempty"`
	Andorra *string `json:"andorra,omitempty"`
	Angel *string `json:"angel,omitempty"`
	Anger *string `json:"anger,omitempty"`
	Angola *string `json:"angola,omitempty"`
	Angry *string `json:"angry,omitempty"`
	Anguilla *string `json:"anguilla,omitempty"`
	Anguished *string `json:"anguished,omitempty"`
	Ant *string `json:"ant,omitempty"`
	Antarctica *string `json:"antarctica,omitempty"`
	AntiguaBarbuda *string `json:"antigua_barbuda,omitempty"`
	Apple *string `json:"apple,omitempty"`
	Aquarius *string `json:"aquarius,omitempty"`
	Argentina *string `json:"argentina,omitempty"`
	Aries *string `json:"aries,omitempty"`
	Armenia *string `json:"armenia,omitempty"`
	ArrowBackward *string `json:"arrow_backward,omitempty"`
	ArrowDoubleDown *string `json:"arrow_double_down,omitempty"`
	ArrowDoubleUp *string `json:"arrow_double_up,omitempty"`
	ArrowDown *string `json:"arrow_down,omitempty"`
	ArrowDownSmall *string `json:"arrow_down_small,omitempty"`
	ArrowForward *string `json:"arrow_forward,omitempty"`
	ArrowHeadingDown *string `json:"arrow_heading_down,omitempty"`
	ArrowHeadingUp *string `json:"arrow_heading_up,omitempty"`
	ArrowLeft *string `json:"arrow_left,omitempty"`
	ArrowLowerLeft *string `json:"arrow_lower_left,omitempty"`
	ArrowLowerRight *string `json:"arrow_lower_right,omitempty"`
	ArrowRight *string `json:"arrow_right,omitempty"`
	ArrowRightHook *string `json:"arrow_right_hook,omitempty"`
	ArrowUp *string `json:"arrow_up,omitempty"`
	ArrowUpDown *string `json:"arrow_up_down,omitempty"`
	ArrowUpSmall *string `json:"arrow_up_small,omitempty"`
	ArrowUpperLeft *string `json:"arrow_upper_left,omitempty"`
	ArrowUpperRight *string `json:"arrow_upper_right,omitempty"`
	ArrowsClockwise *string `json:"arrows_clockwise,omitempty"`
	ArrowsCounterclockwise *string `json:"arrows_counterclockwise,omitempty"`
	Art *string `json:"art,omitempty"`
	ArticulatedLorry *string `json:"articulated_lorry,omitempty"`
	ArtificialSatellite *string `json:"artificial_satellite,omitempty"`
	Artist *string `json:"artist,omitempty"`
	Aruba *string `json:"aruba,omitempty"`
	AscensionIsland *string `json:"ascension_island,omitempty"`
	Asterisk *string `json:"asterisk,omitempty"`
	Astonished *string `json:"astonished,omitempty"`
	Astronaut *string `json:"astronaut,omitempty"`
	AthleticShoe *string `json:"athletic_shoe,omitempty"`
	Atm *string `json:"atm,omitempty"`
	Atom *string `json:"atom,omitempty"`
	AtomSymbol *string `json:"atom_symbol,omitempty"`
	Australia *string `json:"australia,omitempty"`
	Austria *string `json:"austria,omitempty"`
	AutoRickshaw *string `json:"auto_rickshaw,omitempty"`
	Avocado *string `json:"avocado,omitempty"`
	Axe *string `json:"axe,omitempty"`
	Azerbaijan *string `json:"azerbaijan,omitempty"`
	B *string `json:"b,omitempty"`
	Baby *string `json:"baby,omitempty"`
	BabyBottle *string `json:"baby_bottle,omitempty"`
	BabyChick *string `json:"baby_chick,omitempty"`
	BabySymbol *string `json:"baby_symbol,omitempty"`
	Back *string `json:"back,omitempty"`
	Bacon *string `json:"bacon,omitempty"`
	Badger *string `json:"badger,omitempty"`
	Badminton *string `json:"badminton,omitempty"`
	Bagel *string `json:"bagel,omitempty"`
	BaggageClaim *string `json:"baggage_claim,omitempty"`
	BaguetteBread *string `json:"baguette_bread,omitempty"`
	Bahamas *string `json:"bahamas,omitempty"`
	Bahrain *string `json:"bahrain,omitempty"`
	BalanceScale *string `json:"balance_scale,omitempty"`
	BaldMan *string `json:"bald_man,omitempty"`
	BaldWoman *string `json:"bald_woman,omitempty"`
	BalletShoes *string `json:"ballet_shoes,omitempty"`
	Balloon *string `json:"balloon,omitempty"`
	BallotBox *string `json:"ballot_box,omitempty"`
	BallotBoxWithCheck *string `json:"ballot_box_with_check,omitempty"`
	Bamboo *string `json:"bamboo,omitempty"`
	Banana *string `json:"banana,omitempty"`
	Bangbang *string `json:"bangbang,omitempty"`
	Bangladesh *string `json:"bangladesh,omitempty"`
	Banjo *string `json:"banjo,omitempty"`
	Bank *string `json:"bank,omitempty"`
	BarChart *string `json:"bar_chart,omitempty"`
	Barbados *string `json:"barbados,omitempty"`
	Barber *string `json:"barber,omitempty"`
	Baseball *string `json:"baseball,omitempty"`
	Basecamp *string `json:"basecamp,omitempty"`
	Basecampy *string `json:"basecampy,omitempty"`
	Basket *string `json:"basket,omitempty"`
	Basketball *string `json:"basketball,omitempty"`
	BasketballMan *string `json:"basketball_man,omitempty"`
	BasketballWoman *string `json:"basketball_woman,omitempty"`
	Bat *string `json:"bat,omitempty"`
	Bath *string `json:"bath,omitempty"`
	Bathtub *string `json:"bathtub,omitempty"`
	Battery *string `json:"battery,omitempty"`
	BeachUmbrella *string `json:"beach_umbrella,omitempty"`
	Bear *string `json:"bear,omitempty"`
	BeardedPerson *string `json:"bearded_person,omitempty"`
	Beaver *string `json:"beaver,omitempty"`
	Bed *string `json:"bed,omitempty"`
	Bee *string `json:"bee,omitempty"`
	Beer *string `json:"beer,omitempty"`
	Beers *string `json:"beers,omitempty"`
	Beetle *string `json:"beetle,omitempty"`
	Beginner *string `json:"beginner,omitempty"`
	Belarus *string `json:"belarus,omitempty"`
	Belgium *string `json:"belgium,omitempty"`
	Belize *string `json:"belize,omitempty"`
	Bell *string `json:"bell,omitempty"`
	BellPepper *string `json:"bell_pepper,omitempty"`
	BellhopBell *string `json:"bellhop_bell,omitempty"`
	Benin *string `json:"benin,omitempty"`
	Bento *string `json:"bento,omitempty"`
	Bermuda *string `json:"bermuda,omitempty"`
	BeverageBox *string `json:"beverage_box,omitempty"`
	Bhutan *string `json:"bhutan,omitempty"`
	Bicyclist *string `json:"bicyclist,omitempty"`
	Bike *string `json:"bike,omitempty"`
	BikingMan *string `json:"biking_man,omitempty"`
	BikingWoman *string `json:"biking_woman,omitempty"`
	Bikini *string `json:"bikini,omitempty"`
	BilledCap *string `json:"billed_cap,omitempty"`
	Biohazard *string `json:"biohazard,omitempty"`
	Bird *string `json:"bird,omitempty"`
	Birthday *string `json:"birthday,omitempty"`
	Bison *string `json:"bison,omitempty"`
	BlackCat *string `json:"black_cat,omitempty"`
	BlackCircle *string `json:"black_circle,omitempty"`
	BlackFlag *string `json:"black_flag,omitempty"`
	BlackHeart *string `json:"black_heart,omitempty"`
	BlackJoker *string `json:"black_joker,omitempty"`
	BlackLargeSquare *string `json:"black_large_square,omitempty"`
	BlackMediumSmallSquare *string `json:"black_medium_small_square,omitempty"`
	BlackMediumSquare *string `json:"black_medium_square,omitempty"`
	BlackNib *string `json:"black_nib,omitempty"`
	BlackSmallSquare *string `json:"black_small_square,omitempty"`
	BlackSquareButton *string `json:"black_square_button,omitempty"`
	BlondHairedMan *string `json:"blond_haired_man,omitempty"`
	BlondHairedPerson *string `json:"blond_haired_person,omitempty"`
	BlondHairedWoman *string `json:"blond_haired_woman,omitempty"`
	BlondeWoman *string `json:"blonde_woman,omitempty"`
	Blossom *string `json:"blossom,omitempty"`
	Blowfish *string `json:"blowfish,omitempty"`
	BlueBook *string `json:"blue_book,omitempty"`
	BlueCar *string `json:"blue_car,omitempty"`
	BlueHeart *string `json:"blue_heart,omitempty"`
	BlueSquare *string `json:"blue_square,omitempty"`
	Blueberries *string `json:"blueberries,omitempty"`
	Blush *string `json:"blush,omitempty"`
	Boar *string `json:"boar,omitempty"`
	Boat *string `json:"boat,omitempty"`
	Bolivia *string `json:"bolivia,omitempty"`
	Bomb *string `json:"bomb,omitempty"`
	Bone *string `json:"bone,omitempty"`
	Book *string `json:"book,omitempty"`
	Bookmark *string `json:"bookmark,omitempty"`
	BookmarkTabs *string `json:"bookmark_tabs,omitempty"`
	Books *string `json:"books,omitempty"`
	Boom *string `json:"boom,omitempty"`
	Boomerang *string `json:"boomerang,omitempty"`
	Boot *string `json:"boot,omitempty"`
	BosniaHerzegovina *string `json:"bosnia_herzegovina,omitempty"`
	Botswana *string `json:"botswana,omitempty"`
	BouncingBallMan *string `json:"bouncing_ball_man,omitempty"`
	BouncingBallPerson *string `json:"bouncing_ball_person,omitempty"`
	BouncingBallWoman *string `json:"bouncing_ball_woman,omitempty"`
	Bouquet *string `json:"bouquet,omitempty"`
	BouvetIsland *string `json:"bouvet_island,omitempty"`
	Bow *string `json:"bow,omitempty"`
	BowAndArrow *string `json:"bow_and_arrow,omitempty"`
	BowingMan *string `json:"bowing_man,omitempty"`
	BowingWoman *string `json:"bowing_woman,omitempty"`
	BowlWithSpoon *string `json:"bowl_with_spoon,omitempty"`
	Bowling *string `json:"bowling,omitempty"`
	Bowtie *string `json:"bowtie,omitempty"`
	BoxingGlove *string `json:"boxing_glove,omitempty"`
	Boy *string `json:"boy,omitempty"`
	Brain *string `json:"brain,omitempty"`
	Brazil *string `json:"brazil,omitempty"`
	Bread *string `json:"bread,omitempty"`
	BreastFeeding *string `json:"breast_feeding,omitempty"`
	Bricks *string `json:"bricks,omitempty"`
	BrideWithVeil *string `json:"bride_with_veil,omitempty"`
	BridgeAtNight *string `json:"bridge_at_night,omitempty"`
	Briefcase *string `json:"briefcase,omitempty"`
	BritishIndianOceanTerritory *string `json:"british_indian_ocean_territory,omitempty"`
	BritishVirginIslands *string `json:"british_virgin_islands,omitempty"`
	Broccoli *string `json:"broccoli,omitempty"`
	BrokenHeart *string `json:"broken_heart,omitempty"`
	Broom *string `json:"broom,omitempty"`
	BrownCircle *string `json:"brown_circle,omitempty"`
	BrownHeart *string `json:"brown_heart,omitempty"`
	BrownSquare *string `json:"brown_square,omitempty"`
	Brunei *string `json:"brunei,omitempty"`
	BubbleTea *string `json:"bubble_tea,omitempty"`
	Bucket *string `json:"bucket,omitempty"`
	Bug *string `json:"bug,omitempty"`
	BuildingConstruction *string `json:"building_construction,omitempty"`
	Bulb *string `json:"bulb,omitempty"`
	Bulgaria *string `json:"bulgaria,omitempty"`
	BullettrainFront *string `json:"bullettrain_front,omitempty"`
	BullettrainSide *string `json:"bullettrain_side,omitempty"`
	BurkinaFaso *string `json:"burkina_faso,omitempty"`
	Burrito *string `json:"burrito,omitempty"`
	Burundi *string `json:"burundi,omitempty"`
	Bus *string `json:"bus,omitempty"`
	BusinessSuitLevitating *string `json:"business_suit_levitating,omitempty"`
	Busstop *string `json:"busstop,omitempty"`
	BustInSilhouette *string `json:"bust_in_silhouette,omitempty"`
	BustsInSilhouette *string `json:"busts_in_silhouette,omitempty"`
	Butter *string `json:"butter,omitempty"`
	Butterfly *string `json:"butterfly,omitempty"`
	Cactus *string `json:"cactus,omitempty"`
	Cake *string `json:"cake,omitempty"`
	Calendar *string `json:"calendar,omitempty"`
	CallMeHand *string `json:"call_me_hand,omitempty"`
	Calling *string `json:"calling,omitempty"`
	Cambodia *string `json:"cambodia,omitempty"`
	Camel *string `json:"camel,omitempty"`
	Camera *string `json:"camera,omitempty"`
	CameraFlash *string `json:"camera_flash,omitempty"`
	Cameroon *string `json:"cameroon,omitempty"`
	Camping *string `json:"camping,omitempty"`
	Canada *string `json:"canada,omitempty"`
	CanaryIslands *string `json:"canary_islands,omitempty"`
	Cancer *string `json:"cancer,omitempty"`
	Candle *string `json:"candle,omitempty"`
	Candy *string `json:"candy,omitempty"`
	CannedFood *string `json:"canned_food,omitempty"`
	Canoe *string `json:"canoe,omitempty"`
	CapeVerde *string `json:"cape_verde,omitempty"`
	CapitalAbcd *string `json:"capital_abcd,omitempty"`
	Capricorn *string `json:"capricorn,omitempty"`
	Car *string `json:"car,omitempty"`
	CardFileBox *string `json:"card_file_box,omitempty"`
	CardIndex *string `json:"card_index,omitempty"`
	CardIndexDividers *string `json:"card_index_dividers,omitempty"`
	CaribbeanNetherlands *string `json:"caribbean_netherlands,omitempty"`
	CarouselHorse *string `json:"carousel_horse,omitempty"`
	CarpentrySaw *string `json:"carpentry_saw,omitempty"`
	Carrot *string `json:"carrot,omitempty"`
	Cartwheeling *string `json:"cartwheeling,omitempty"`
	Cat *string `json:"cat,omitempty"`
	Cat2 *string `json:"cat2,omitempty"`
	CaymanIslands *string `json:"cayman_islands,omitempty"`
	Cd *string `json:"cd,omitempty"`
	CentralAfricanRepublic *string `json:"central_african_republic,omitempty"`
	CeutaMelilla *string `json:"ceuta_melilla,omitempty"`
	Chad *string `json:"chad,omitempty"`
	Chains *string `json:"chains,omitempty"`
	Chair *string `json:"chair,omitempty"`
	Champagne *string `json:"champagne,omitempty"`
	Chart *string `json:"chart,omitempty"`
	ChartWithDownwardsTrend *string `json:"chart_with_downwards_trend,omitempty"`
	ChartWithUpwardsTrend *string `json:"chart_with_upwards_trend,omitempty"`
	CheckeredFlag *string `json:"checkered_flag,omitempty"`
	Cheese *string `json:"cheese,omitempty"`
	Cherries *string `json:"cherries,omitempty"`
	CherryBlossom *string `json:"cherry_blossom,omitempty"`
	ChessPawn *string `json:"chess_pawn,omitempty"`
	Chestnut *string `json:"chestnut,omitempty"`
	Chicken *string `json:"chicken,omitempty"`
	Child *string `json:"child,omitempty"`
	ChildrenCrossing *string `json:"children_crossing,omitempty"`
	Chile *string `json:"chile,omitempty"`
	Chipmunk *string `json:"chipmunk,omitempty"`
	ChocolateBar *string `json:"chocolate_bar,omitempty"`
	Chopsticks *string `json:"chopsticks,omitempty"`
	ChristmasIsland *string `json:"christmas_island,omitempty"`
	ChristmasTree *string `json:"christmas_tree,omitempty"`
	Church *string `json:"church,omitempty"`
	Cinema *string `json:"cinema,omitempty"`
	CircusTent *string `json:"circus_tent,omitempty"`
	CitySunrise *string `json:"city_sunrise,omitempty"`
	CitySunset *string `json:"city_sunset,omitempty"`
	Cityscape *string `json:"cityscape,omitempty"`
	Cl *string `json:"cl,omitempty"`
	Clamp *string `json:"clamp,omitempty"`
	Clap *string `json:"clap,omitempty"`
	Clapper *string `json:"clapper,omitempty"`
	ClassicalBuilding *string `json:"classical_building,omitempty"`
	Climbing *string `json:"climbing,omitempty"`
	ClimbingMan *string `json:"climbing_man,omitempty"`
	ClimbingWoman *string `json:"climbing_woman,omitempty"`
	ClinkingGlasses *string `json:"clinking_glasses,omitempty"`
	Clipboard *string `json:"clipboard,omitempty"`
	ClippertonIsland *string `json:"clipperton_island,omitempty"`
	Clock1 *string `json:"clock1,omitempty"`
	Clock10 *string `json:"clock10,omitempty"`
	Clock1030 *string `json:"clock1030,omitempty"`
	Clock11 *string `json:"clock11,omitempty"`
	Clock1130 *string `json:"clock1130,omitempty"`
	Clock12 *string `json:"clock12,omitempty"`
	Clock1230 *string `json:"clock1230,omitempty"`
	Clock130 *string `json:"clock130,omitempty"`
	Clock2 *string `json:"clock2,omitempty"`
	Clock230 *string `json:"clock230,omitempty"`
	Clock3 *string `json:"clock3,omitempty"`
	Clock330 *string `json:"clock330,omitempty"`
	Clock4 *string `json:"clock4,omitempty"`
	Clock430 *string `json:"clock430,omitempty"`
	Clock5 *string `json:"clock5,omitempty"`
	Clock530 *string `json:"clock530,omitempty"`
	Clock6 *string `json:"clock6,omitempty"`
	Clock630 *string `json:"clock630,omitempty"`
	Clock7 *string `json:"clock7,omitempty"`
	Clock730 *string `json:"clock730,omitempty"`
	Clock8 *string `json:"clock8,omitempty"`
	Clock830 *string `json:"clock830,omitempty"`
	Clock9 *string `json:"clock9,omitempty"`
	Clock930 *string `json:"clock930,omitempty"`
	ClosedBook *string `json:"closed_book,omitempty"`
	ClosedLockWithKey *string `json:"closed_lock_with_key,omitempty"`
	ClosedUmbrella *string `json:"closed_umbrella,omitempty"`
	Cloud *string `json:"cloud,omitempty"`
	CloudWithLightning *string `json:"cloud_with_lightning,omitempty"`
	CloudWithLightningAndRain *string `json:"cloud_with_lightning_and_rain,omitempty"`
	CloudWithRain *string `json:"cloud_with_rain,omitempty"`
	CloudWithSnow *string `json:"cloud_with_snow,omitempty"`
	ClownFace *string `json:"clown_face,omitempty"`
	Clubs *string `json:"clubs,omitempty"`
	Cn *string `json:"cn,omitempty"`
	Coat *string `json:"coat,omitempty"`
	Cockroach *string `json:"cockroach,omitempty"`
	Cocktail *string `json:"cocktail,omitempty"`
	Coconut *string `json:"coconut,omitempty"`
	CocosIslands *string `json:"cocos_islands,omitempty"`
	Coffee *string `json:"coffee,omitempty"`
	Coffin *string `json:"coffin,omitempty"`
	Coin *string `json:"coin,omitempty"`
	ColdFace *string `json:"cold_face,omitempty"`
	ColdSweat *string `json:"cold_sweat,omitempty"`
	Collision *string `json:"collision,omitempty"`
	Colombia *string `json:"colombia,omitempty"`
	Comet *string `json:"comet,omitempty"`
	Comoros *string `json:"comoros,omitempty"`
	Compass *string `json:"compass,omitempty"`
	Computer *string `json:"computer,omitempty"`
	ComputerMouse *string `json:"computer_mouse,omitempty"`
	ConfettiBall *string `json:"confetti_ball,omitempty"`
	Confounded *string `json:"confounded,omitempty"`
	Confused *string `json:"confused,omitempty"`
	CongoBrazzaville *string `json:"congo_brazzaville,omitempty"`
	CongoKinshasa *string `json:"congo_kinshasa,omitempty"`
	Congratulations *string `json:"congratulations,omitempty"`
	Construction *string `json:"construction,omitempty"`
	ConstructionWorker *string `json:"construction_worker,omitempty"`
	ConstructionWorkerMan *string `json:"construction_worker_man,omitempty"`
	ConstructionWorkerWoman *string `json:"construction_worker_woman,omitempty"`
	ControlKnobs *string `json:"control_knobs,omitempty"`
	ConvenienceStore *string `json:"convenience_store,omitempty"`
	Cook *string `json:"cook,omitempty"`
	CookIslands *string `json:"cook_islands,omitempty"`
	Cookie *string `json:"cookie,omitempty"`
	Cool *string `json:"cool,omitempty"`
	Cop *string `json:"cop,omitempty"`
	Copilot *string `json:"copilot,omitempty"`
	Copyright *string `json:"copyright,omitempty"`
	Corn *string `json:"corn,omitempty"`
	CostaRica *string `json:"costa_rica,omitempty"`
	CoteDivoire *string `json:"cote_divoire,omitempty"`
	CouchAndLamp *string `json:"couch_and_lamp,omitempty"`
	Couple *string `json:"couple,omitempty"`
	CoupleWithHeart *string `json:"couple_with_heart,omitempty"`
	CoupleWithHeartManMan *string `json:"couple_with_heart_man_man,omitempty"`
	CoupleWithHeartWomanMan *string `json:"couple_with_heart_woman_man,omitempty"`
	CoupleWithHeartWomanWoman *string `json:"couple_with_heart_woman_woman,omitempty"`
	Couplekiss *string `json:"couplekiss,omitempty"`
	CouplekissManMan *string `json:"couplekiss_man_man,omitempty"`
	CouplekissManWoman *string `json:"couplekiss_man_woman,omitempty"`
	CouplekissWomanWoman *string `json:"couplekiss_woman_woman,omitempty"`
	Cow *string `json:"cow,omitempty"`
	Cow2 *string `json:"cow2,omitempty"`
	CowboyHatFace *string `json:"cowboy_hat_face,omitempty"`
	Crab *string `json:"crab,omitempty"`
	Crayon *string `json:"crayon,omitempty"`
	CreditCard *string `json:"credit_card,omitempty"`
	CrescentMoon *string `json:"crescent_moon,omitempty"`
	Cricket *string `json:"cricket,omitempty"`
	CricketGame *string `json:"cricket_game,omitempty"`
	Croatia *string `json:"croatia,omitempty"`
	Crocodile *string `json:"crocodile,omitempty"`
	Croissant *string `json:"croissant,omitempty"`
	CrossedFingers *string `json:"crossed_fingers,omitempty"`
	CrossedFlags *string `json:"crossed_flags,omitempty"`
	CrossedSwords *string `json:"crossed_swords,omitempty"`
	Crown *string `json:"crown,omitempty"`
	Cry *string `json:"cry,omitempty"`
	CryingCatFace *string `json:"crying_cat_face,omitempty"`
	CrystalBall *string `json:"crystal_ball,omitempty"`
	Cuba *string `json:"cuba,omitempty"`
	Cucumber *string `json:"cucumber,omitempty"`
	CupWithStraw *string `json:"cup_with_straw,omitempty"`
	Cupcake *string `json:"cupcake,omitempty"`
	Cupid *string `json:"cupid,omitempty"`
	Curacao *string `json:"curacao,omitempty"`
	CurlingStone *string `json:"curling_stone,omitempty"`
	CurlyHairedMan *string `json:"curly_haired_man,omitempty"`
	CurlyHairedWoman *string `json:"curly_haired_woman,omitempty"`
	CurlyLoop *string `json:"curly_loop,omitempty"`
	CurrencyExchange *string `json:"currency_exchange,omitempty"`
	Curry *string `json:"curry,omitempty"`
	CursingFace *string `json:"cursing_face,omitempty"`
	Custard *string `json:"custard,omitempty"`
	Customs *string `json:"customs,omitempty"`
	CutOfMeat *string `json:"cut_of_meat,omitempty"`
	Cyclone *string `json:"cyclone,omitempty"`
	Cyprus *string `json:"cyprus,omitempty"`
	CzechRepublic *string `json:"czech_republic,omitempty"`
	Dagger *string `json:"dagger,omitempty"`
	Dancer *string `json:"dancer,omitempty"`
	Dancers *string `json:"dancers,omitempty"`
	DancingMen *string `json:"dancing_men,omitempty"`
	DancingWomen *string `json:"dancing_women,omitempty"`
	Dango *string `json:"dango,omitempty"`
	DarkSunglasses *string `json:"dark_sunglasses,omitempty"`
	Dart *string `json:"dart,omitempty"`
	Dash *string `json:"dash,omitempty"`
	Date *string `json:"date,omitempty"`
	De *string `json:"de,omitempty"`
	DeafMan *string `json:"deaf_man,omitempty"`
	DeafPerson *string `json:"deaf_person,omitempty"`
	DeafWoman *string `json:"deaf_woman,omitempty"`
	DeciduousTree *string `json:"deciduous_tree,omitempty"`
	Deer *string `json:"deer,omitempty"`
	Denmark *string `json:"denmark,omitempty"`
	DepartmentStore *string `json:"department_store,omitempty"`
	Dependabot *string `json:"dependabot,omitempty"`
	DerelictHouse *string `json:"derelict_house,omitempty"`
	Desert *string `json:"desert,omitempty"`
	DesertIsland *string `json:"desert_island,omitempty"`
	DesktopComputer *string `json:"desktop_computer,omitempty"`
	Detective *string `json:"detective,omitempty"`
	DiamondShapeWithADotInside *string `json:"diamond_shape_with_a_dot_inside,omitempty"`
	Diamonds *string `json:"diamonds,omitempty"`
	DiegoGarcia *string `json:"diego_garcia,omitempty"`
	Disappointed *string `json:"disappointed,omitempty"`
	DisappointedRelieved *string `json:"disappointed_relieved,omitempty"`
	DisguisedFace *string `json:"disguised_face,omitempty"`
	DivingMask *string `json:"diving_mask,omitempty"`
	DiyaLamp *string `json:"diya_lamp,omitempty"`
	Dizzy *string `json:"dizzy,omitempty"`
	DizzyFace *string `json:"dizzy_face,omitempty"`
	Djibouti *string `json:"djibouti,omitempty"`
	Dna *string `json:"dna,omitempty"`
	DoNotLitter *string `json:"do_not_litter,omitempty"`
	Dodo *string `json:"dodo,omitempty"`
	Dog *string `json:"dog,omitempty"`
	Dog2 *string `json:"dog2,omitempty"`
	Dollar *string `json:"dollar,omitempty"`
	Dolls *string `json:"dolls,omitempty"`
	Dolphin *string `json:"dolphin,omitempty"`
	Dominica *string `json:"dominica,omitempty"`
	DominicanRepublic *string `json:"dominican_republic,omitempty"`
	Door *string `json:"door,omitempty"`
	Doughnut *string `json:"doughnut,omitempty"`
	Dove *string `json:"dove,omitempty"`
	Dragon *string `json:"dragon,omitempty"`
	DragonFace *string `json:"dragon_face,omitempty"`
	Dress *string `json:"dress,omitempty"`
	DromedaryCamel *string `json:"dromedary_camel,omitempty"`
	DroolingFace *string `json:"drooling_face,omitempty"`
	DropOfBlood *string `json:"drop_of_blood,omitempty"`
	Droplet *string `json:"droplet,omitempty"`
	Drum *string `json:"drum,omitempty"`
	Duck *string `json:"duck,omitempty"`
	Dumpling *string `json:"dumpling,omitempty"`
	Dvd *string `json:"dvd,omitempty"`
	Eagle *string `json:"eagle,omitempty"`
	Ear *string `json:"ear,omitempty"`
	EarOfRice *string `json:"ear_of_rice,omitempty"`
	EarWithHearingAid *string `json:"ear_with_hearing_aid,omitempty"`
	EarthAfrica *string `json:"earth_africa,omitempty"`
	EarthAmericas *string `json:"earth_americas,omitempty"`
	EarthAsia *string `json:"earth_asia,omitempty"`
	Ecuador *string `json:"ecuador,omitempty"`
	Egg *string `json:"egg,omitempty"`
	Eggplant *string `json:"eggplant,omitempty"`
	Egypt *string `json:"egypt,omitempty"`
	Eight *string `json:"eight,omitempty"`
	EightPointedBlackStar *string `json:"eight_pointed_black_star,omitempty"`
	EightSpokedAsterisk *string `json:"eight_spoked_asterisk,omitempty"`
	EjectButton *string `json:"eject_button,omitempty"`
	ElSalvador *string `json:"el_salvador,omitempty"`
	ElectricPlug *string `json:"electric_plug,omitempty"`
	Electron *string `json:"electron,omitempty"`
	Elephant *string `json:"elephant,omitempty"`
	Elevator *string `json:"elevator,omitempty"`
	Elf *string `json:"elf,omitempty"`
	ElfMan *string `json:"elf_man,omitempty"`
	ElfWoman *string `json:"elf_woman,omitempty"`
	Email *string `json:"email,omitempty"`
	End *string `json:"end,omitempty"`
	England *string `json:"england,omitempty"`
	Envelope *string `json:"envelope,omitempty"`
	EnvelopeWithArrow *string `json:"envelope_with_arrow,omitempty"`
	EquatorialGuinea *string `json:"equatorial_guinea,omitempty"`
	Eritrea *string `json:"eritrea,omitempty"`
	Es *string `json:"es,omitempty"`
	Estonia *string `json:"estonia,omitempty"`
	Ethiopia *string `json:"ethiopia,omitempty"`
	Eu *string `json:"eu,omitempty"`
	Euro *string `json:"euro,omitempty"`
	EuropeanCastle *string `json:"european_castle,omitempty"`
	EuropeanPostOffice *string `json:"european_post_office,omitempty"`
	EuropeanUnion *string `json:"european_union,omitempty"`
	EvergreenTree *string `json:"evergreen_tree,omitempty"`
	Exclamation *string `json:"exclamation,omitempty"`
	ExplodingHead *string `json:"exploding_head,omitempty"`
	Expressionless *string `json:"expressionless,omitempty"`
	Eye *string `json:"eye,omitempty"`
	EyeSpeechBubble *string `json:"eye_speech_bubble,omitempty"`
	Eyeglasses *string `json:"eyeglasses,omitempty"`
	Eyes *string `json:"eyes,omitempty"`
	FaceExhaling *string `json:"face_exhaling,omitempty"`
	FaceInClouds *string `json:"face_in_clouds,omitempty"`
	FaceWithHeadBandage *string `json:"face_with_head_bandage,omitempty"`
	FaceWithSpiralEyes *string `json:"face_with_spiral_eyes,omitempty"`
	FaceWithThermometer *string `json:"face_with_thermometer,omitempty"`
	Facepalm *string `json:"facepalm,omitempty"`
	Facepunch *string `json:"facepunch,omitempty"`
	Factory *string `json:"factory,omitempty"`
	FactoryWorker *string `json:"factory_worker,omitempty"`
	Fairy *string `json:"fairy,omitempty"`
	FairyMan *string `json:"fairy_man,omitempty"`
	FairyWoman *string `json:"fairy_woman,omitempty"`
	Falafel *string `json:"falafel,omitempty"`
	FalklandIslands *string `json:"falkland_islands,omitempty"`
	FallenLeaf *string `json:"fallen_leaf,omitempty"`
	Family *string `json:"family,omitempty"`
	FamilyManBoy *string `json:"family_man_boy,omitempty"`
	FamilyManBoyBoy *string `json:"family_man_boy_boy,omitempty"`
	FamilyManGirl *string `json:"family_man_girl,omitempty"`
	FamilyManGirlBoy *string `json:"family_man_girl_boy,omitempty"`
	FamilyManGirlGirl *string `json:"family_man_girl_girl,omitempty"`
	FamilyManManBoy *string `json:"family_man_man_boy,omitempty"`
	FamilyManManBoyBoy *string `json:"family_man_man_boy_boy,omitempty"`
	FamilyManManGirl *string `json:"family_man_man_girl,omitempty"`
	FamilyManManGirlBoy *string `json:"family_man_man_girl_boy,omitempty"`
	FamilyManManGirlGirl *string `json:"family_man_man_girl_girl,omitempty"`
	FamilyManWomanBoy *string `json:"family_man_woman_boy,omitempty"`
	FamilyManWomanBoyBoy *string `json:"family_man_woman_boy_boy,omitempty"`
	FamilyManWomanGirl *string `json:"family_man_woman_girl,omitempty"`
	FamilyManWomanGirlBoy *string `json:"family_man_woman_girl_boy,omitempty"`
	FamilyManWomanGirlGirl *string `json:"family_man_woman_girl_girl,omitempty"`
	FamilyWomanBoy *string `json:"family_woman_boy,omitempty"`
	FamilyWomanBoyBoy *string `json:"family_woman_boy_boy,omitempty"`
	FamilyWomanGirl *string `json:"family_woman_girl,omitempty"`
	FamilyWomanGirlBoy *string `json:"family_woman_girl_boy,omitempty"`
	FamilyWomanGirlGirl *string `json:"family_woman_girl_girl,omitempty"`
	FamilyWomanWomanBoy *string `json:"family_woman_woman_boy,omitempty"`
	FamilyWomanWomanBoyBoy *string `json:"family_woman_woman_boy_boy,omitempty"`
	FamilyWomanWomanGirl *string `json:"family_woman_woman_girl,omitempty"`
	FamilyWomanWomanGirlBoy *string `json:"family_woman_woman_girl_boy,omitempty"`
	FamilyWomanWomanGirlGirl *string `json:"family_woman_woman_girl_girl,omitempty"`
	Farmer *string `json:"farmer,omitempty"`
	FaroeIslands *string `json:"faroe_islands,omitempty"`
	FastForward *string `json:"fast_forward,omitempty"`
	Fax *string `json:"fax,omitempty"`
	Fearful *string `json:"fearful,omitempty"`
	Feather *string `json:"feather,omitempty"`
	Feelsgood *string `json:"feelsgood,omitempty"`
	Feet *string `json:"feet,omitempty"`
	FemaleDetective *string `json:"female_detective,omitempty"`
	FemaleSign *string `json:"female_sign,omitempty"`
	FerrisWheel *string `json:"ferris_wheel,omitempty"`
	Ferry *string `json:"ferry,omitempty"`
	FieldHockey *string `json:"field_hockey,omitempty"`
	Fiji *string `json:"fiji,omitempty"`
	FileCabinet *string `json:"file_cabinet,omitempty"`
	FileFolder *string `json:"file_folder,omitempty"`
	FilmProjector *string `json:"film_projector,omitempty"`
	FilmStrip *string `json:"film_strip,omitempty"`
	Finland *string `json:"finland,omitempty"`
	Finnadie *string `json:"finnadie,omitempty"`
	Fire *string `json:"fire,omitempty"`
	FireEngine *string `json:"fire_engine,omitempty"`
	FireExtinguisher *string `json:"fire_extinguisher,omitempty"`
	Firecracker *string `json:"firecracker,omitempty"`
	Firefighter *string `json:"firefighter,omitempty"`
	Fireworks *string `json:"fireworks,omitempty"`
	FirstQuarterMoon *string `json:"first_quarter_moon,omitempty"`
	FirstQuarterMoonWithFace *string `json:"first_quarter_moon_with_face,omitempty"`
	Fish *string `json:"fish,omitempty"`
	FishCake *string `json:"fish_cake,omitempty"`
	FishingPoleAndFish *string `json:"fishing_pole_and_fish,omitempty"`
	Fishsticks *string `json:"fishsticks,omitempty"`
	Fist *string `json:"fist,omitempty"`
	FistLeft *string `json:"fist_left,omitempty"`
	FistOncoming *string `json:"fist_oncoming,omitempty"`
	FistRaised *string `json:"fist_raised,omitempty"`
	FistRight *string `json:"fist_right,omitempty"`
	Five *string `json:"five,omitempty"`
	Flags *string `json:"flags,omitempty"`
	Flamingo *string `json:"flamingo,omitempty"`
	Flashlight *string `json:"flashlight,omitempty"`
	FlatShoe *string `json:"flat_shoe,omitempty"`
	Flatbread *string `json:"flatbread,omitempty"`
	FleurDeLis *string `json:"fleur_de_lis,omitempty"`
	FlightArrival *string `json:"flight_arrival,omitempty"`
	FlightDeparture *string `json:"flight_departure,omitempty"`
	Flipper *string `json:"flipper,omitempty"`
	FloppyDisk *string `json:"floppy_disk,omitempty"`
	FlowerPlayingCards *string `json:"flower_playing_cards,omitempty"`
	Flushed *string `json:"flushed,omitempty"`
	Fly *string `json:"fly,omitempty"`
	FlyingDisc *string `json:"flying_disc,omitempty"`
	FlyingSaucer *string `json:"flying_saucer,omitempty"`
	Fog *string `json:"fog,omitempty"`
	Foggy *string `json:"foggy,omitempty"`
	Fondue *string `json:"fondue,omitempty"`
	Foot *string `json:"foot,omitempty"`
	Football *string `json:"football,omitempty"`
	Footprints *string `json:"footprints,omitempty"`
	ForkAndKnife *string `json:"fork_and_knife,omitempty"`
	FortuneCookie *string `json:"fortune_cookie,omitempty"`
	Fountain *string `json:"fountain,omitempty"`
	FountainPen *string `json:"fountain_pen,omitempty"`
	Four *string `json:"four,omitempty"`
	FourLeafClover *string `json:"four_leaf_clover,omitempty"`
	FoxFace *string `json:"fox_face,omitempty"`
	Fr *string `json:"fr,omitempty"`
	FramedPicture *string `json:"framed_picture,omitempty"`
	Free *string `json:"free,omitempty"`
	FrenchGuiana *string `json:"french_guiana,omitempty"`
	FrenchPolynesia *string `json:"french_polynesia,omitempty"`
	FrenchSouthernTerritories *string `json:"french_southern_territories,omitempty"`
	FriedEgg *string `json:"fried_egg,omitempty"`
	FriedShrimp *string `json:"fried_shrimp,omitempty"`
	Fries *string `json:"fries,omitempty"`
	Frog *string `json:"frog,omitempty"`
	Frowning *string `json:"frowning,omitempty"`
	FrowningFace *string `json:"frowning_face,omitempty"`
	FrowningMan *string `json:"frowning_man,omitempty"`
	FrowningPerson *string `json:"frowning_person,omitempty"`
	FrowningWoman *string `json:"frowning_woman,omitempty"`
	Fu *string `json:"fu,omitempty"`
	Fuelpump *string `json:"fuelpump,omitempty"`
	FullMoon *string `json:"full_moon,omitempty"`
	FullMoonWithFace *string `json:"full_moon_with_face,omitempty"`
	FuneralUrn *string `json:"funeral_urn,omitempty"`
	Gabon *string `json:"gabon,omitempty"`
	Gambia *string `json:"gambia,omitempty"`
	GameDie *string `json:"game_die,omitempty"`
	Garlic *string `json:"garlic,omitempty"`
	Gb *string `json:"gb,omitempty"`
	Gear *string `json:"gear,omitempty"`
	Gem *string `json:"gem,omitempty"`
	Gemini *string `json:"gemini,omitempty"`
	Genie *string `json:"genie,omitempty"`
	GenieMan *string `json:"genie_man,omitempty"`
	GenieWoman *string `json:"genie_woman,omitempty"`
	Georgia *string `json:"georgia,omitempty"`
	Ghana *string `json:"ghana,omitempty"`
	Ghost *string `json:"ghost,omitempty"`
	Gibraltar *string `json:"gibraltar,omitempty"`
	Gift *string `json:"gift,omitempty"`
	GiftHeart *string `json:"gift_heart,omitempty"`
	Giraffe *string `json:"giraffe,omitempty"`
	Girl *string `json:"girl,omitempty"`
	GlobeWithMeridians *string `json:"globe_with_meridians,omitempty"`
	Gloves *string `json:"gloves,omitempty"`
	GoalNet *string `json:"goal_net,omitempty"`
	Goat *string `json:"goat,omitempty"`
	Goberserk *string `json:"goberserk,omitempty"`
	Godmode *string `json:"godmode,omitempty"`
	Goggles *string `json:"goggles,omitempty"`
	Golf *string `json:"golf,omitempty"`
	Golfing *string `json:"golfing,omitempty"`
	GolfingMan *string `json:"golfing_man,omitempty"`
	GolfingWoman *string `json:"golfing_woman,omitempty"`
	Gorilla *string `json:"gorilla,omitempty"`
	Grapes *string `json:"grapes,omitempty"`
	Greece *string `json:"greece,omitempty"`
	GreenApple *string `json:"green_apple,omitempty"`
	GreenBook *string `json:"green_book,omitempty"`
	GreenCircle *string `json:"green_circle,omitempty"`
	GreenHeart *string `json:"green_heart,omitempty"`
	GreenSalad *string `json:"green_salad,omitempty"`
	GreenSquare *string `json:"green_square,omitempty"`
	Greenland *string `json:"greenland,omitempty"`
	Grenada *string `json:"grenada,omitempty"`
	GreyExclamation *string `json:"grey_exclamation,omitempty"`
	GreyQuestion *string `json:"grey_question,omitempty"`
	Grimacing *string `json:"grimacing,omitempty"`
	Grin *string `json:"grin,omitempty"`
	Grinning *string `json:"grinning,omitempty"`
	Guadeloupe *string `json:"guadeloupe,omitempty"`
	Guam *string `json:"guam,omitempty"`
	Guard *string `json:"guard,omitempty"`
	Guardsman *string `json:"guardsman,omitempty"`
	Guardswoman *string `json:"guardswoman,omitempty"`
	Guatemala *string `json:"guatemala,omitempty"`
	Guernsey *string `json:"guernsey,omitempty"`
	GuideDog *string `json:"guide_dog,omitempty"`
	Guinea *string `json:"guinea,omitempty"`
	GuineaBissau *string `json:"guinea_bissau,omitempty"`
	Guitar *string `json:"guitar,omitempty"`
	Gun *string `json:"gun,omitempty"`
	Guyana *string `json:"guyana,omitempty"`
	Haircut *string `json:"haircut,omitempty"`
	HaircutMan *string `json:"haircut_man,omitempty"`
	HaircutWoman *string `json:"haircut_woman,omitempty"`
	Haiti *string `json:"haiti,omitempty"`
	Hamburger *string `json:"hamburger,omitempty"`
	Hammer *string `json:"hammer,omitempty"`
	HammerAndPick *string `json:"hammer_and_pick,omitempty"`
	HammerAndWrench *string `json:"hammer_and_wrench,omitempty"`
	Hamster *string `json:"hamster,omitempty"`
	Hand *string `json:"hand,omitempty"`
	HandOverMouth *string `json:"hand_over_mouth,omitempty"`
	Handbag *string `json:"handbag,omitempty"`
	HandballPerson *string `json:"handball_person,omitempty"`
	Handshake *string `json:"handshake,omitempty"`
	Hankey *string `json:"hankey,omitempty"`
	Hash *string `json:"hash,omitempty"`
	HatchedChick *string `json:"hatched_chick,omitempty"`
	HatchingChick *string `json:"hatching_chick,omitempty"`
	Headphones *string `json:"headphones,omitempty"`
	Headstone *string `json:"headstone,omitempty"`
	HealthWorker *string `json:"health_worker,omitempty"`
	HearNoEvil *string `json:"hear_no_evil,omitempty"`
	HeardMcdonaldIslands *string `json:"heard_mcdonald_islands,omitempty"`
	Heart *string `json:"heart,omitempty"`
	HeartDecoration *string `json:"heart_decoration,omitempty"`
	HeartEyes *string `json:"heart_eyes,omitempty"`
	HeartEyesCat *string `json:"heart_eyes_cat,omitempty"`
	HeartOnFire *string `json:"heart_on_fire,omitempty"`
	Heartbeat *string `json:"heartbeat,omitempty"`
	Heartpulse *string `json:"heartpulse,omitempty"`
	Hearts *string `json:"hearts,omitempty"`
	HeavyCheckMark *string `json:"heavy_check_mark,omitempty"`
	HeavyDivisionSign *string `json:"heavy_division_sign,omitempty"`
	HeavyDollarSign *string `json:"heavy_dollar_sign,omitempty"`
	HeavyExclamationMark *string `json:"heavy_exclamation_mark,omitempty"`
	HeavyHeartExclamation *string `json:"heavy_heart_exclamation,omitempty"`
	HeavyMinusSign *string `json:"heavy_minus_sign,omitempty"`
	HeavyMultiplicationX *string `json:"heavy_multiplication_x,omitempty"`
	HeavyPlusSign *string `json:"heavy_plus_sign,omitempty"`
	Hedgehog *string `json:"hedgehog,omitempty"`
	Helicopter *string `json:"helicopter,omitempty"`
	Herb *string `json:"herb,omitempty"`
	Hibiscus *string `json:"hibiscus,omitempty"`
	HighBrightness *string `json:"high_brightness,omitempty"`
	HighHeel *string `json:"high_heel,omitempty"`
	HikingBoot *string `json:"hiking_boot,omitempty"`
	HinduTemple *string `json:"hindu_temple,omitempty"`
	Hippopotamus *string `json:"hippopotamus,omitempty"`
	Hocho *string `json:"hocho,omitempty"`
	Hole *string `json:"hole,omitempty"`
	Honduras *string `json:"honduras,omitempty"`
	HoneyPot *string `json:"honey_pot,omitempty"`
	Honeybee *string `json:"honeybee,omitempty"`
	HongKong *string `json:"hong_kong,omitempty"`
	Hook *string `json:"hook,omitempty"`
	Horse *string `json:"horse,omitempty"`
	HorseRacing *string `json:"horse_racing,omitempty"`
	Hospital *string `json:"hospital,omitempty"`
	HotFace *string `json:"hot_face,omitempty"`
	HotPepper *string `json:"hot_pepper,omitempty"`
	Hotdog *string `json:"hotdog,omitempty"`
	Hotel *string `json:"hotel,omitempty"`
	Hotsprings *string `json:"hotsprings,omitempty"`
	Hourglass *string `json:"hourglass,omitempty"`
	HourglassFlowingSand *string `json:"hourglass_flowing_sand,omitempty"`
	House *string `json:"house,omitempty"`
	HouseWithGarden *string `json:"house_with_garden,omitempty"`
	Houses *string `json:"houses,omitempty"`
	Hugs *string `json:"hugs,omitempty"`
	Hungary *string `json:"hungary,omitempty"`
	Hurtrealbad *string `json:"hurtrealbad,omitempty"`
	Hushed *string `json:"hushed,omitempty"`
	Hut *string `json:"hut,omitempty"`
	IceCream *string `json:"ice_cream,omitempty"`
	IceCube *string `json:"ice_cube,omitempty"`
	IceHockey *string `json:"ice_hockey,omitempty"`
	IceSkate *string `json:"ice_skate,omitempty"`
	Icecream *string `json:"icecream,omitempty"`
	Iceland *string `json:"iceland,omitempty"`
	Id *string `json:"id,omitempty"`
	IdeographAdvantage *string `json:"ideograph_advantage,omitempty"`
	Imp *string `json:"imp,omitempty"`
	InboxTray *string `json:"inbox_tray,omitempty"`
	IncomingEnvelope *string `json:"incoming_envelope,omitempty"`
	India *string `json:"india,omitempty"`
	Indonesia *string `json:"indonesia,omitempty"`
	Infinity *string `json:"infinity,omitempty"`
	InformationDeskPerson *string `json:"information_desk_person,omitempty"`
	InformationSource *string `json:"information_source,omitempty"`
	Innocent *string `json:"innocent,omitempty"`
	Interrobang *string `json:"interrobang,omitempty"`
	Iphone *string `json:"iphone,omitempty"`
	Iran *string `json:"iran,omitempty"`
	Iraq *string `json:"iraq,omitempty"`
	Ireland *string `json:"ireland,omitempty"`
	IsleOfMan *string `json:"isle_of_man,omitempty"`
	Israel *string `json:"israel,omitempty"`
	It *string `json:"it,omitempty"`
	IzakayaLantern *string `json:"izakaya_lantern,omitempty"`
	JackOLantern *string `json:"jack_o_lantern,omitempty"`
	Jamaica *string `json:"jamaica,omitempty"`
	Japan *string `json:"japan,omitempty"`
	JapaneseCastle *string `json:"japanese_castle,omitempty"`
	JapaneseGoblin *string `json:"japanese_goblin,omitempty"`
	JapaneseOgre *string `json:"japanese_ogre,omitempty"`
	Jeans *string `json:"jeans,omitempty"`
	Jersey *string `json:"jersey,omitempty"`
	Jigsaw *string `json:"jigsaw,omitempty"`
	Jordan *string `json:"jordan,omitempty"`
	Joy *string `json:"joy,omitempty"`
	JoyCat *string `json:"joy_cat,omitempty"`
	Joystick *string `json:"joystick,omitempty"`
	Jp *string `json:"jp,omitempty"`
	Judge *string `json:"judge,omitempty"`
	JugglingPerson *string `json:"juggling_person,omitempty"`
	Kangaroo *string `json:"kangaroo,omitempty"`
	Kazakhstan *string `json:"kazakhstan,omitempty"`
	Kenya *string `json:"kenya,omitempty"`
	Key *string `json:"key,omitempty"`
	Keyboard *string `json:"keyboard,omitempty"`
	KeycapTen *string `json:"keycap_ten,omitempty"`
	KickScooter *string `json:"kick_scooter,omitempty"`
	Kimono *string `json:"kimono,omitempty"`
	Kiribati *string `json:"kiribati,omitempty"`
	Kiss *string `json:"kiss,omitempty"`
	Kissing *string `json:"kissing,omitempty"`
	KissingCat *string `json:"kissing_cat,omitempty"`
	KissingClosedEyes *string `json:"kissing_closed_eyes,omitempty"`
	KissingHeart *string `json:"kissing_heart,omitempty"`
	KissingSmilingEyes *string `json:"kissing_smiling_eyes,omitempty"`
	Kite *string `json:"kite,omitempty"`
	KiwiFruit *string `json:"kiwi_fruit,omitempty"`
	KneelingMan *string `json:"kneeling_man,omitempty"`
	KneelingPerson *string `json:"kneeling_person,omitempty"`
	KneelingWoman *string `json:"kneeling_woman,omitempty"`
	Knife *string `json:"knife,omitempty"`
	Knot *string `json:"knot,omitempty"`
	Koala *string `json:"koala,omitempty"`
	Koko *string `json:"koko,omitempty"`
	Kosovo *string `json:"kosovo,omitempty"`
	Kr *string `json:"kr,omitempty"`
	Kuwait *string `json:"kuwait,omitempty"`
	Kyrgyzstan *string `json:"kyrgyzstan,omitempty"`
	LabCoat *string `json:"lab_coat,omitempty"`
	Label *string `json:"label,omitempty"`
	Lacrosse *string `json:"lacrosse,omitempty"`
	Ladder *string `json:"ladder,omitempty"`
	LadyBeetle *string `json:"lady_beetle,omitempty"`
	Lantern *string `json:"lantern,omitempty"`
	Laos *string `json:"laos,omitempty"`
	LargeBlueCircle *string `json:"large_blue_circle,omitempty"`
	LargeBlueDiamond *string `json:"large_blue_diamond,omitempty"`
	LargeOrangeDiamond *string `json:"large_orange_diamond,omitempty"`
	LastQuarterMoon *string `json:"last_quarter_moon,omitempty"`
	LastQuarterMoonWithFace *string `json:"last_quarter_moon_with_face,omitempty"`
	LatinCross *string `json:"latin_cross,omitempty"`
	Latvia *string `json:"latvia,omitempty"`
	Laughing *string `json:"laughing,omitempty"`
	LeafyGreen *string `json:"leafy_green,omitempty"`
	Leaves *string `json:"leaves,omitempty"`
	Lebanon *string `json:"lebanon,omitempty"`
	Ledger *string `json:"ledger,omitempty"`
	LeftLuggage *string `json:"left_luggage,omitempty"`
	LeftRightArrow *string `json:"left_right_arrow,omitempty"`
	LeftSpeechBubble *string `json:"left_speech_bubble,omitempty"`
	LeftwardsArrowWithHook *string `json:"leftwards_arrow_with_hook,omitempty"`
	Leg *string `json:"leg,omitempty"`
	Lemon *string `json:"lemon,omitempty"`
	Leo *string `json:"leo,omitempty"`
	Leopard *string `json:"leopard,omitempty"`
	Lesotho *string `json:"lesotho,omitempty"`
	LevelSlider *string `json:"level_slider,omitempty"`
	Liberia *string `json:"liberia,omitempty"`
	Libra *string `json:"libra,omitempty"`
	Libya *string `json:"libya,omitempty"`
	Liechtenstein *string `json:"liechtenstein,omitempty"`
	LightRail *string `json:"light_rail,omitempty"`
	Link *string `json:"link,omitempty"`
	Lion *string `json:"lion,omitempty"`
	Lips *string `json:"lips,omitempty"`
	Lipstick *string `json:"lipstick,omitempty"`
	Lithuania *string `json:"lithuania,omitempty"`
	Lizard *string `json:"lizard,omitempty"`
	Llama *string `json:"llama,omitempty"`
	Lobster *string `json:"lobster,omitempty"`
	Lock *string `json:"lock,omitempty"`
	LockWithInkPen *string `json:"lock_with_ink_pen,omitempty"`
	Lollipop *string `json:"lollipop,omitempty"`
	LongDrum *string `json:"long_drum,omitempty"`
	Loop *string `json:"loop,omitempty"`
	LotionBottle *string `json:"lotion_bottle,omitempty"`
	LotusPosition *string `json:"lotus_position,omitempty"`
	LotusPositionMan *string `json:"lotus_position_man,omitempty"`
	LotusPositionWoman *string `json:"lotus_position_woman,omitempty"`
	LoudSound *string `json:"loud_sound,omitempty"`
	Loudspeaker *string `json:"loudspeaker,omitempty"`
	LoveHotel *string `json:"love_hotel,omitempty"`
	LoveLetter *string `json:"love_letter,omitempty"`
	LoveYouGesture *string `json:"love_you_gesture,omitempty"`
	LowBrightness *string `json:"low_brightness,omitempty"`
	Luggage *string `json:"luggage,omitempty"`
	Lungs *string `json:"lungs,omitempty"`
	Luxembourg *string `json:"luxembourg,omitempty"`
	LyingFace *string `json:"lying_face,omitempty"`
	M *string `json:"m,omitempty"`
	Macau *string `json:"macau,omitempty"`
	Macedonia *string `json:"macedonia,omitempty"`
	Madagascar *string `json:"madagascar,omitempty"`
	Mag *string `json:"mag,omitempty"`
	MagRight *string `json:"mag_right,omitempty"`
	Mage *string `json:"mage,omitempty"`
	MageMan *string `json:"mage_man,omitempty"`
	MageWoman *string `json:"mage_woman,omitempty"`
	MagicWand *string `json:"magic_wand,omitempty"`
	Magnet *string `json:"magnet,omitempty"`
	Mahjong *string `json:"mahjong,omitempty"`
	Mailbox *string `json:"mailbox,omitempty"`
	MailboxClosed *string `json:"mailbox_closed,omitempty"`
	MailboxWithMail *string `json:"mailbox_with_mail,omitempty"`
	MailboxWithNoMail *string `json:"mailbox_with_no_mail,omitempty"`
	Malawi *string `json:"malawi,omitempty"`
	Malaysia *string `json:"malaysia,omitempty"`
	Maldives *string `json:"maldives,omitempty"`
	MaleDetective *string `json:"male_detective,omitempty"`
	MaleSign *string `json:"male_sign,omitempty"`
	Mali *string `json:"mali,omitempty"`
	Malta *string `json:"malta,omitempty"`
	Mammoth *string `json:"mammoth,omitempty"`
	Man *string `json:"man,omitempty"`
	ManArtist *string `json:"man_artist,omitempty"`
	ManAstronaut *string `json:"man_astronaut,omitempty"`
	ManBeard *string `json:"man_beard,omitempty"`
	ManCartwheeling *string `json:"man_cartwheeling,omitempty"`
	ManCook *string `json:"man_cook,omitempty"`
	ManDancing *string `json:"man_dancing,omitempty"`
	ManFacepalming *string `json:"man_facepalming,omitempty"`
	ManFactoryWorker *string `json:"man_factory_worker,omitempty"`
	ManFarmer *string `json:"man_farmer,omitempty"`
	ManFeedingBaby *string `json:"man_feeding_baby,omitempty"`
	ManFirefighter *string `json:"man_firefighter,omitempty"`
	ManHealthWorker *string `json:"man_health_worker,omitempty"`
	ManInManualWheelchair *string `json:"man_in_manual_wheelchair,omitempty"`
	ManInMotorizedWheelchair *string `json:"man_in_motorized_wheelchair,omitempty"`
	ManInTuxedo *string `json:"man_in_tuxedo,omitempty"`
	ManJudge *string `json:"man_judge,omitempty"`
	ManJuggling *string `json:"man_juggling,omitempty"`
	ManMechanic *string `json:"man_mechanic,omitempty"`
	ManOfficeWorker *string `json:"man_office_worker,omitempty"`
	ManPilot *string `json:"man_pilot,omitempty"`
	ManPlayingHandball *string `json:"man_playing_handball,omitempty"`
	ManPlayingWaterPolo *string `json:"man_playing_water_polo,omitempty"`
	ManScientist *string `json:"man_scientist,omitempty"`
	ManShrugging *string `json:"man_shrugging,omitempty"`
	ManSinger *string `json:"man_singer,omitempty"`
	ManStudent *string `json:"man_student,omitempty"`
	ManTeacher *string `json:"man_teacher,omitempty"`
	ManTechnologist *string `json:"man_technologist,omitempty"`
	ManWithGuaPiMao *string `json:"man_with_gua_pi_mao,omitempty"`
	ManWithProbingCane *string `json:"man_with_probing_cane,omitempty"`
	ManWithTurban *string `json:"man_with_turban,omitempty"`
	ManWithVeil *string `json:"man_with_veil,omitempty"`
	Mandarin *string `json:"mandarin,omitempty"`
	Mango *string `json:"mango,omitempty"`
	MansShoe *string `json:"mans_shoe,omitempty"`
	MantelpieceClock *string `json:"mantelpiece_clock,omitempty"`
	ManualWheelchair *string `json:"manual_wheelchair,omitempty"`
	MapleLeaf *string `json:"maple_leaf,omitempty"`
	MarshallIslands *string `json:"marshall_islands,omitempty"`
	MartialArtsUniform *string `json:"martial_arts_uniform,omitempty"`
	Martinique *string `json:"martinique,omitempty"`
	Mask *string `json:"mask,omitempty"`
	Massage *string `json:"massage,omitempty"`
	MassageMan *string `json:"massage_man,omitempty"`
	MassageWoman *string `json:"massage_woman,omitempty"`
	Mate *string `json:"mate,omitempty"`
	Mauritania *string `json:"mauritania,omitempty"`
	Mauritius *string `json:"mauritius,omitempty"`
	Mayotte *string `json:"mayotte,omitempty"`
	MeatOnBone *string `json:"meat_on_bone,omitempty"`
	Mechanic *string `json:"mechanic,omitempty"`
	MechanicalArm *string `json:"mechanical_arm,omitempty"`
	MechanicalLeg *string `json:"mechanical_leg,omitempty"`
	MedalMilitary *string `json:"medal_military,omitempty"`
	MedalSports *string `json:"medal_sports,omitempty"`
	MedicalSymbol *string `json:"medical_symbol,omitempty"`
	Mega *string `json:"mega,omitempty"`
	Melon *string `json:"melon,omitempty"`
	Memo *string `json:"memo,omitempty"`
	MenWrestling *string `json:"men_wrestling,omitempty"`
	MendingHeart *string `json:"mending_heart,omitempty"`
	Menorah *string `json:"menorah,omitempty"`
	Mens *string `json:"mens,omitempty"`
	Mermaid *string `json:"mermaid,omitempty"`
	Merman *string `json:"merman,omitempty"`
	Merperson *string `json:"merperson,omitempty"`
	Metal *string `json:"metal,omitempty"`
	Metro *string `json:"metro,omitempty"`
	Mexico *string `json:"mexico,omitempty"`
	Microbe *string `json:"microbe,omitempty"`
	Micronesia *string `json:"micronesia,omitempty"`
	Microphone *string `json:"microphone,omitempty"`
	Microscope *string `json:"microscope,omitempty"`
	MiddleFinger *string `json:"middle_finger,omitempty"`
	MilitaryHelmet *string `json:"military_helmet,omitempty"`
	MilkGlass *string `json:"milk_glass,omitempty"`
	MilkyWay *string `json:"milky_way,omitempty"`
	Minibus *string `json:"minibus,omitempty"`
	Minidisc *string `json:"minidisc,omitempty"`
	Mirror *string `json:"mirror,omitempty"`
	MobilePhoneOff *string `json:"mobile_phone_off,omitempty"`
	Moldova *string `json:"moldova,omitempty"`
	Monaco *string `json:"monaco,omitempty"`
	MoneyMouthFace *string `json:"money_mouth_face,omitempty"`
	MoneyWithWings *string `json:"money_with_wings,omitempty"`
	Moneybag *string `json:"moneybag,omitempty"`
	Mongolia *string `json:"mongolia,omitempty"`
	Monkey *string `json:"monkey,omitempty"`
	MonkeyFace *string `json:"monkey_face,omitempty"`
	MonocleFace *string `json:"monocle_face,omitempty"`
	Monorail *string `json:"monorail,omitempty"`
	Montenegro *string `json:"montenegro,omitempty"`
	Montserrat *string `json:"montserrat,omitempty"`
	Moon *string `json:"moon,omitempty"`
	MoonCake *string `json:"moon_cake,omitempty"`
	Morocco *string `json:"morocco,omitempty"`
	MortarBoard *string `json:"mortar_board,omitempty"`
	Mosque *string `json:"mosque,omitempty"`
	Mosquito *string `json:"mosquito,omitempty"`
	MotorBoat *string `json:"motor_boat,omitempty"`
	MotorScooter *string `json:"motor_scooter,omitempty"`
	Motorcycle *string `json:"motorcycle,omitempty"`
	MotorizedWheelchair *string `json:"motorized_wheelchair,omitempty"`
	Motorway *string `json:"motorway,omitempty"`
	MountFuji *string `json:"mount_fuji,omitempty"`
	Mountain *string `json:"mountain,omitempty"`
	MountainBicyclist *string `json:"mountain_bicyclist,omitempty"`
	MountainBikingMan *string `json:"mountain_biking_man,omitempty"`
	MountainBikingWoman *string `json:"mountain_biking_woman,omitempty"`
	MountainCableway *string `json:"mountain_cableway,omitempty"`
	MountainRailway *string `json:"mountain_railway,omitempty"`
	MountainSnow *string `json:"mountain_snow,omitempty"`
	Mouse *string `json:"mouse,omitempty"`
	Mouse2 *string `json:"mouse2,omitempty"`
	MouseTrap *string `json:"mouse_trap,omitempty"`
	MovieCamera *string `json:"movie_camera,omitempty"`
	Moyai *string `json:"moyai,omitempty"`
	Mozambique *string `json:"mozambique,omitempty"`
	MrsClaus *string `json:"mrs_claus,omitempty"`
	Muscle *string `json:"muscle,omitempty"`
	Mushroom *string `json:"mushroom,omitempty"`
	MusicalKeyboard *string `json:"musical_keyboard,omitempty"`
	MusicalNote *string `json:"musical_note,omitempty"`
	MusicalScore *string `json:"musical_score,omitempty"`
	Mute *string `json:"mute,omitempty"`
	MxClaus *string `json:"mx_claus,omitempty"`
	Myanmar *string `json:"myanmar,omitempty"`
	NailCare *string `json:"nail_care,omitempty"`
	NameBadge *string `json:"name_badge,omitempty"`
	Namibia *string `json:"namibia,omitempty"`
	NationalPark *string `json:"national_park,omitempty"`
	Nauru *string `json:"nauru,omitempty"`
	NauseatedFace *string `json:"nauseated_face,omitempty"`
	NazarAmulet *string `json:"nazar_amulet,omitempty"`
	Neckbeard *string `json:"neckbeard,omitempty"`
	Necktie *string `json:"necktie,omitempty"`
	NegativeSquaredCrossMark *string `json:"negative_squared_cross_mark,omitempty"`
	Nepal *string `json:"nepal,omitempty"`
	NerdFace *string `json:"nerd_face,omitempty"`
	NestingDolls *string `json:"nesting_dolls,omitempty"`
	Netherlands *string `json:"netherlands,omitempty"`
	NeutralFace *string `json:"neutral_face,omitempty"`
	New *string `json:"new,omitempty"`
	NewCaledonia *string `json:"new_caledonia,omitempty"`
	NewMoon *string `json:"new_moon,omitempty"`
	NewMoonWithFace *string `json:"new_moon_with_face,omitempty"`
	NewZealand *string `json:"new_zealand,omitempty"`
	Newspaper *string `json:"newspaper,omitempty"`
	NewspaperRoll *string `json:"newspaper_roll,omitempty"`
	NextTrackButton *string `json:"next_track_button,omitempty"`
	Ng *string `json:"ng,omitempty"`
	NgMan *string `json:"ng_man,omitempty"`
	NgWoman *string `json:"ng_woman,omitempty"`
	Nicaragua *string `json:"nicaragua,omitempty"`
	Niger *string `json:"niger,omitempty"`
	Nigeria *string `json:"nigeria,omitempty"`
	NightWithStars *string `json:"night_with_stars,omitempty"`
	Nine *string `json:"nine,omitempty"`
	Ninja *string `json:"ninja,omitempty"`
	Niue *string `json:"niue,omitempty"`
	NoBell *string `json:"no_bell,omitempty"`
	NoBicycles *string `json:"no_bicycles,omitempty"`
	NoEntry *string `json:"no_entry,omitempty"`
	NoEntrySign *string `json:"no_entry_sign,omitempty"`
	NoGood *string `json:"no_good,omitempty"`
	NoGoodMan *string `json:"no_good_man,omitempty"`
	NoGoodWoman *string `json:"no_good_woman,omitempty"`
	NoMobilePhones *string `json:"no_mobile_phones,omitempty"`
	NoMouth *string `json:"no_mouth,omitempty"`
	NoPedestrians *string `json:"no_pedestrians,omitempty"`
	NoSmoking *string `json:"no_smoking,omitempty"`
	NonpotableWater *string `json:"nonpotable_water,omitempty"`
	NorfolkIsland *string `json:"norfolk_island,omitempty"`
	NorthKorea *string `json:"north_korea,omitempty"`
	NorthernMarianaIslands *string `json:"northern_mariana_islands,omitempty"`
	Norway *string `json:"norway,omitempty"`
	Nose *string `json:"nose,omitempty"`
	Notebook *string `json:"notebook,omitempty"`
	NotebookWithDecorativeCover *string `json:"notebook_with_decorative_cover,omitempty"`
	Notes *string `json:"notes,omitempty"`
	NutAndBolt *string `json:"nut_and_bolt,omitempty"`
	O *string `json:"o,omitempty"`
	O2 *string `json:"o2,omitempty"`
	Ocean *string `json:"ocean,omitempty"`
	Octocat *string `json:"octocat,omitempty"`
	Octopus *string `json:"octopus,omitempty"`
	Oden *string `json:"oden,omitempty"`
	Office *string `json:"office,omitempty"`
	OfficeWorker *string `json:"office_worker,omitempty"`
	OilDrum *string `json:"oil_drum,omitempty"`
	Ok *string `json:"ok,omitempty"`
	OkHand *string `json:"ok_hand,omitempty"`
	OkMan *string `json:"ok_man,omitempty"`
	OkPerson *string `json:"ok_person,omitempty"`
	OkWoman *string `json:"ok_woman,omitempty"`
	OldKey *string `json:"old_key,omitempty"`
	OlderAdult *string `json:"older_adult,omitempty"`
	OlderMan *string `json:"older_man,omitempty"`
	OlderWoman *string `json:"older_woman,omitempty"`
	Olive *string `json:"olive,omitempty"`
	Om *string `json:"om,omitempty"`
	Oman *string `json:"oman,omitempty"`
	On *string `json:"on,omitempty"`
	OncomingAutomobile *string `json:"oncoming_automobile,omitempty"`
	OncomingBus *string `json:"oncoming_bus,omitempty"`
	OncomingPoliceCar *string `json:"oncoming_police_car,omitempty"`
	OncomingTaxi *string `json:"oncoming_taxi,omitempty"`
	One *string `json:"one,omitempty"`
	OnePieceSwimsuit *string `json:"one_piece_swimsuit,omitempty"`
	Onion *string `json:"onion,omitempty"`
	OpenBook *string `json:"open_book,omitempty"`
	OpenFileFolder *string `json:"open_file_folder,omitempty"`
	OpenHands *string `json:"open_hands,omitempty"`
	OpenMouth *string `json:"open_mouth,omitempty"`
	OpenUmbrella *string `json:"open_umbrella,omitempty"`
	Ophiuchus *string `json:"ophiuchus,omitempty"`
	Orange *string `json:"orange,omitempty"`
	OrangeBook *string `json:"orange_book,omitempty"`
	OrangeCircle *string `json:"orange_circle,omitempty"`
	OrangeHeart *string `json:"orange_heart,omitempty"`
	OrangeSquare *string `json:"orange_square,omitempty"`
	Orangutan *string `json:"orangutan,omitempty"`
	OrthodoxCross *string `json:"orthodox_cross,omitempty"`
	Otter *string `json:"otter,omitempty"`
	OutboxTray *string `json:"outbox_tray,omitempty"`
	Owl *string `json:"owl,omitempty"`
	Ox *string `json:"ox,omitempty"`
	Oyster *string `json:"oyster,omitempty"`
	Package *string `json:"package,omitempty"`
	PageFacingUp *string `json:"page_facing_up,omitempty"`
	PageWithCurl *string `json:"page_with_curl,omitempty"`
	Pager *string `json:"pager,omitempty"`
	Paintbrush *string `json:"paintbrush,omitempty"`
	Pakistan *string `json:"pakistan,omitempty"`
	Palau *string `json:"palau,omitempty"`
	PalestinianTerritories *string `json:"palestinian_territories,omitempty"`
	PalmTree *string `json:"palm_tree,omitempty"`
	PalmsUpTogether *string `json:"palms_up_together,omitempty"`
	Panama *string `json:"panama,omitempty"`
	Pancakes *string `json:"pancakes,omitempty"`
	PandaFace *string `json:"panda_face,omitempty"`
	Paperclip *string `json:"paperclip,omitempty"`
	Paperclips *string `json:"paperclips,omitempty"`
	PapuaNewGuinea *string `json:"papua_new_guinea,omitempty"`
	Parachute *string `json:"parachute,omitempty"`
	Paraguay *string `json:"paraguay,omitempty"`
	ParasolOnGround *string `json:"parasol_on_ground,omitempty"`
	Parking *string `json:"parking,omitempty"`
	Parrot *string `json:"parrot,omitempty"`
	PartAlternationMark *string `json:"part_alternation_mark,omitempty"`
	PartlySunny *string `json:"partly_sunny,omitempty"`
	PartyingFace *string `json:"partying_face,omitempty"`
	PassengerShip *string `json:"passenger_ship,omitempty"`
	PassportControl *string `json:"passport_control,omitempty"`
	PauseButton *string `json:"pause_button,omitempty"`
	PawPrints *string `json:"paw_prints,omitempty"`
	PeaceSymbol *string `json:"peace_symbol,omitempty"`
	Peach *string `json:"peach,omitempty"`
	Peacock *string `json:"peacock,omitempty"`
	Peanuts *string `json:"peanuts,omitempty"`
	Pear *string `json:"pear,omitempty"`
	Pen *string `json:"pen,omitempty"`
	Pencil *string `json:"pencil,omitempty"`
	Pencil2 *string `json:"pencil2,omitempty"`
	Penguin *string `json:"penguin,omitempty"`
	Pensive *string `json:"pensive,omitempty"`
	PeopleHoldingHands *string `json:"people_holding_hands,omitempty"`
	PeopleHugging *string `json:"people_hugging,omitempty"`
	PerformingArts *string `json:"performing_arts,omitempty"`
	Persevere *string `json:"persevere,omitempty"`
	PersonBald *string `json:"person_bald,omitempty"`
	PersonCurlyHair *string `json:"person_curly_hair,omitempty"`
	PersonFeedingBaby *string `json:"person_feeding_baby,omitempty"`
	PersonFencing *string `json:"person_fencing,omitempty"`
	PersonInManualWheelchair *string `json:"person_in_manual_wheelchair,omitempty"`
	PersonInMotorizedWheelchair *string `json:"person_in_motorized_wheelchair,omitempty"`
	PersonInTuxedo *string `json:"person_in_tuxedo,omitempty"`
	PersonRedHair *string `json:"person_red_hair,omitempty"`
	PersonWhiteHair *string `json:"person_white_hair,omitempty"`
	PersonWithProbingCane *string `json:"person_with_probing_cane,omitempty"`
	PersonWithTurban *string `json:"person_with_turban,omitempty"`
	PersonWithVeil *string `json:"person_with_veil,omitempty"`
	Peru *string `json:"peru,omitempty"`
	PetriDish *string `json:"petri_dish,omitempty"`
	Philippines *string `json:"philippines,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Pick *string `json:"pick,omitempty"`
	PickupTruck *string `json:"pickup_truck,omitempty"`
	Pie *string `json:"pie,omitempty"`
	Pig *string `json:"pig,omitempty"`
	Pig2 *string `json:"pig2,omitempty"`
	PigNose *string `json:"pig_nose,omitempty"`
	Pill *string `json:"pill,omitempty"`
	Pilot *string `json:"pilot,omitempty"`
	Pinata *string `json:"pinata,omitempty"`
	PinchedFingers *string `json:"pinched_fingers,omitempty"`
	PinchingHand *string `json:"pinching_hand,omitempty"`
	Pineapple *string `json:"pineapple,omitempty"`
	PingPong *string `json:"ping_pong,omitempty"`
	PirateFlag *string `json:"pirate_flag,omitempty"`
	Pisces *string `json:"pisces,omitempty"`
	PitcairnIslands *string `json:"pitcairn_islands,omitempty"`
	Pizza *string `json:"pizza,omitempty"`
	Placard *string `json:"placard,omitempty"`
	PlaceOfWorship *string `json:"place_of_worship,omitempty"`
	PlateWithCutlery *string `json:"plate_with_cutlery,omitempty"`
	PlayOrPauseButton *string `json:"play_or_pause_button,omitempty"`
	PleadingFace *string `json:"pleading_face,omitempty"`
	Plunger *string `json:"plunger,omitempty"`
	PointDown *string `json:"point_down,omitempty"`
	PointLeft *string `json:"point_left,omitempty"`
	PointRight *string `json:"point_right,omitempty"`
	PointUp *string `json:"point_up,omitempty"`
	PointUp2 *string `json:"point_up_2,omitempty"`
	Poland *string `json:"poland,omitempty"`
	PolarBear *string `json:"polar_bear,omitempty"`
	PoliceCar *string `json:"police_car,omitempty"`
	PoliceOfficer *string `json:"police_officer,omitempty"`
	Policeman *string `json:"policeman,omitempty"`
	Policewoman *string `json:"policewoman,omitempty"`
	Poodle *string `json:"poodle,omitempty"`
	Poop *string `json:"poop,omitempty"`
	Popcorn *string `json:"popcorn,omitempty"`
	Portugal *string `json:"portugal,omitempty"`
	PostOffice *string `json:"post_office,omitempty"`
	PostalHorn *string `json:"postal_horn,omitempty"`
	Postbox *string `json:"postbox,omitempty"`
	PotableWater *string `json:"potable_water,omitempty"`
	Potato *string `json:"potato,omitempty"`
	PottedPlant *string `json:"potted_plant,omitempty"`
	Pouch *string `json:"pouch,omitempty"`
	PoultryLeg *string `json:"poultry_leg,omitempty"`
	Pound *string `json:"pound,omitempty"`
	Pout *string `json:"pout,omitempty"`
	PoutingCat *string `json:"pouting_cat,omitempty"`
	PoutingFace *string `json:"pouting_face,omitempty"`
	PoutingMan *string `json:"pouting_man,omitempty"`
	PoutingWoman *string `json:"pouting_woman,omitempty"`
	Pray *string `json:"pray,omitempty"`
	PrayerBeads *string `json:"prayer_beads,omitempty"`
	PregnantWoman *string `json:"pregnant_woman,omitempty"`
	Pretzel *string `json:"pretzel,omitempty"`
	PreviousTrackButton *string `json:"previous_track_button,omitempty"`
	Prince *string `json:"prince,omitempty"`
	Princess *string `json:"princess,omitempty"`
	Printer *string `json:"printer,omitempty"`
	ProbingCane *string `json:"probing_cane,omitempty"`
	PuertoRico *string `json:"puerto_rico,omitempty"`
	Punch *string `json:"punch,omitempty"`
	PurpleCircle *string `json:"purple_circle,omitempty"`
	PurpleHeart *string `json:"purple_heart,omitempty"`
	PurpleSquare *string `json:"purple_square,omitempty"`
	Purse *string `json:"purse,omitempty"`
	Pushpin *string `json:"pushpin,omitempty"`
	PutLitterInItsPlace *string `json:"put_litter_in_its_place,omitempty"`
	Qatar *string `json:"qatar,omitempty"`
	Question *string `json:"question,omitempty"`
	Rabbit *string `json:"rabbit,omitempty"`
	Rabbit2 *string `json:"rabbit2,omitempty"`
	Raccoon *string `json:"raccoon,omitempty"`
	Racehorse *string `json:"racehorse,omitempty"`
	RacingCar *string `json:"racing_car,omitempty"`
	Radio *string `json:"radio,omitempty"`
	RadioButton *string `json:"radio_button,omitempty"`
	Radioactive *string `json:"radioactive,omitempty"`
	Rage *string `json:"rage,omitempty"`
	Rage1 *string `json:"rage1,omitempty"`
	Rage2 *string `json:"rage2,omitempty"`
	Rage3 *string `json:"rage3,omitempty"`
	Rage4 *string `json:"rage4,omitempty"`
	RailwayCar *string `json:"railway_car,omitempty"`
	RailwayTrack *string `json:"railway_track,omitempty"`
	Rainbow *string `json:"rainbow,omitempty"`
	RainbowFlag *string `json:"rainbow_flag,omitempty"`
	RaisedBackOfHand *string `json:"raised_back_of_hand,omitempty"`
	RaisedEyebrow *string `json:"raised_eyebrow,omitempty"`
	RaisedHand *string `json:"raised_hand,omitempty"`
	RaisedHandWithFingersSplayed *string `json:"raised_hand_with_fingers_splayed,omitempty"`
	RaisedHands *string `json:"raised_hands,omitempty"`
	RaisingHand *string `json:"raising_hand,omitempty"`
	RaisingHandMan *string `json:"raising_hand_man,omitempty"`
	RaisingHandWoman *string `json:"raising_hand_woman,omitempty"`
	Ram *string `json:"ram,omitempty"`
	Ramen *string `json:"ramen,omitempty"`
	Rat *string `json:"rat,omitempty"`
	Razor *string `json:"razor,omitempty"`
	Receipt *string `json:"receipt,omitempty"`
	RecordButton *string `json:"record_button,omitempty"`
	Recycle *string `json:"recycle,omitempty"`
	RedCar *string `json:"red_car,omitempty"`
	RedCircle *string `json:"red_circle,omitempty"`
	RedEnvelope *string `json:"red_envelope,omitempty"`
	RedHairedMan *string `json:"red_haired_man,omitempty"`
	RedHairedWoman *string `json:"red_haired_woman,omitempty"`
	RedSquare *string `json:"red_square,omitempty"`
	Registered *string `json:"registered,omitempty"`
	Relaxed *string `json:"relaxed,omitempty"`
	Relieved *string `json:"relieved,omitempty"`
	ReminderRibbon *string `json:"reminder_ribbon,omitempty"`
	Repeat *string `json:"repeat,omitempty"`
	RepeatOne *string `json:"repeat_one,omitempty"`
	RescueWorkerHelmet *string `json:"rescue_worker_helmet,omitempty"`
	Restroom *string `json:"restroom,omitempty"`
	Reunion *string `json:"reunion,omitempty"`
	RevolvingHearts *string `json:"revolving_hearts,omitempty"`
	Rewind *string `json:"rewind,omitempty"`
	Rhinoceros *string `json:"rhinoceros,omitempty"`
	Ribbon *string `json:"ribbon,omitempty"`
	Rice *string `json:"rice,omitempty"`
	RiceBall *string `json:"rice_ball,omitempty"`
	RiceCracker *string `json:"rice_cracker,omitempty"`
	RiceScene *string `json:"rice_scene,omitempty"`
	RightAngerBubble *string `json:"right_anger_bubble,omitempty"`
	Ring *string `json:"ring,omitempty"`
	RingedPlanet *string `json:"ringed_planet,omitempty"`
	Robot *string `json:"robot,omitempty"`
	Rock *string `json:"rock,omitempty"`
	Rocket *string `json:"rocket,omitempty"`
	Rofl *string `json:"rofl,omitempty"`
	RollEyes *string `json:"roll_eyes,omitempty"`
	RollOfPaper *string `json:"roll_of_paper,omitempty"`
	RollerCoaster *string `json:"roller_coaster,omitempty"`
	RollerSkate *string `json:"roller_skate,omitempty"`
	Romania *string `json:"romania,omitempty"`
	Rooster *string `json:"rooster,omitempty"`
	Rose *string `json:"rose,omitempty"`
	Rosette *string `json:"rosette,omitempty"`
	RotatingLight *string `json:"rotating_light,omitempty"`
	RoundPushpin *string `json:"round_pushpin,omitempty"`
	Rowboat *string `json:"rowboat,omitempty"`
	RowingMan *string `json:"rowing_man,omitempty"`
	RowingWoman *string `json:"rowing_woman,omitempty"`
	Ru *string `json:"ru,omitempty"`
	RugbyFootball *string `json:"rugby_football,omitempty"`
	Runner *string `json:"runner,omitempty"`
	Running *string `json:"running,omitempty"`
	RunningMan *string `json:"running_man,omitempty"`
	RunningShirtWithSash *string `json:"running_shirt_with_sash,omitempty"`
	RunningWoman *string `json:"running_woman,omitempty"`
	Rwanda *string `json:"rwanda,omitempty"`
	Sa *string `json:"sa,omitempty"`
	SafetyPin *string `json:"safety_pin,omitempty"`
	SafetyVest *string `json:"safety_vest,omitempty"`
	Sagittarius *string `json:"sagittarius,omitempty"`
	Sailboat *string `json:"sailboat,omitempty"`
	Sake *string `json:"sake,omitempty"`
	Salt *string `json:"salt,omitempty"`
	Samoa *string `json:"samoa,omitempty"`
	SanMarino *string `json:"san_marino,omitempty"`
	Sandal *string `json:"sandal,omitempty"`
	Sandwich *string `json:"sandwich,omitempty"`
	Santa *string `json:"santa,omitempty"`
	SaoTomePrincipe *string `json:"sao_tome_principe,omitempty"`
	Sari *string `json:"sari,omitempty"`
	SassyMan *string `json:"sassy_man,omitempty"`
	SassyWoman *string `json:"sassy_woman,omitempty"`
	Satellite *string `json:"satellite,omitempty"`
	Satisfied *string `json:"satisfied,omitempty"`
	SaudiArabia *string `json:"saudi_arabia,omitempty"`
	SaunaMan *string `json:"sauna_man,omitempty"`
	SaunaPerson *string `json:"sauna_person,omitempty"`
	SaunaWoman *string `json:"sauna_woman,omitempty"`
	Sauropod *string `json:"sauropod,omitempty"`
	Saxophone *string `json:"saxophone,omitempty"`
	Scarf *string `json:"scarf,omitempty"`
	School *string `json:"school,omitempty"`
	SchoolSatchel *string `json:"school_satchel,omitempty"`
	Scientist *string `json:"scientist,omitempty"`
	Scissors *string `json:"scissors,omitempty"`
	Scorpion *string `json:"scorpion,omitempty"`
	Scorpius *string `json:"scorpius,omitempty"`
	Scotland *string `json:"scotland,omitempty"`
	Scream *string `json:"scream,omitempty"`
	ScreamCat *string `json:"scream_cat,omitempty"`
	Screwdriver *string `json:"screwdriver,omitempty"`
	Scroll *string `json:"scroll,omitempty"`
	Seal *string `json:"seal,omitempty"`
	Seat *string `json:"seat,omitempty"`
	Secret *string `json:"secret,omitempty"`
	SeeNoEvil *string `json:"see_no_evil,omitempty"`
	Seedling *string `json:"seedling,omitempty"`
	Selfie *string `json:"selfie,omitempty"`
	Senegal *string `json:"senegal,omitempty"`
	Serbia *string `json:"serbia,omitempty"`
	ServiceDog *string `json:"service_dog,omitempty"`
	Seven *string `json:"seven,omitempty"`
	SewingNeedle *string `json:"sewing_needle,omitempty"`
	Seychelles *string `json:"seychelles,omitempty"`
	ShallowPanOfFood *string `json:"shallow_pan_of_food,omitempty"`
	Shamrock *string `json:"shamrock,omitempty"`
	Shark *string `json:"shark,omitempty"`
	ShavedIce *string `json:"shaved_ice,omitempty"`
	Sheep *string `json:"sheep,omitempty"`
	Shell *string `json:"shell,omitempty"`
	Shield *string `json:"shield,omitempty"`
	ShintoShrine *string `json:"shinto_shrine,omitempty"`
	Ship *string `json:"ship,omitempty"`
	Shipit *string `json:"shipit,omitempty"`
	Shirt *string `json:"shirt,omitempty"`
	Shoe *string `json:"shoe,omitempty"`
	Shopping *string `json:"shopping,omitempty"`
	ShoppingCart *string `json:"shopping_cart,omitempty"`
	Shorts *string `json:"shorts,omitempty"`
	Shower *string `json:"shower,omitempty"`
	Shrimp *string `json:"shrimp,omitempty"`
	Shrug *string `json:"shrug,omitempty"`
	ShushingFace *string `json:"shushing_face,omitempty"`
	SierraLeone *string `json:"sierra_leone,omitempty"`
	SignalStrength *string `json:"signal_strength,omitempty"`
	Singapore *string `json:"singapore,omitempty"`
	Singer *string `json:"singer,omitempty"`
	SintMaarten *string `json:"sint_maarten,omitempty"`
	Six *string `json:"six,omitempty"`
	SixPointedStar *string `json:"six_pointed_star,omitempty"`
	Skateboard *string `json:"skateboard,omitempty"`
	Ski *string `json:"ski,omitempty"`
	Skier *string `json:"skier,omitempty"`
	Skull *string `json:"skull,omitempty"`
	SkullAndCrossbones *string `json:"skull_and_crossbones,omitempty"`
	Skunk *string `json:"skunk,omitempty"`
	Sled *string `json:"sled,omitempty"`
	Sleeping *string `json:"sleeping,omitempty"`
	SleepingBed *string `json:"sleeping_bed,omitempty"`
	Sleepy *string `json:"sleepy,omitempty"`
	SlightlyFrowningFace *string `json:"slightly_frowning_face,omitempty"`
	SlightlySmilingFace *string `json:"slightly_smiling_face,omitempty"`
	SlotMachine *string `json:"slot_machine,omitempty"`
	Sloth *string `json:"sloth,omitempty"`
	Slovakia *string `json:"slovakia,omitempty"`
	Slovenia *string `json:"slovenia,omitempty"`
	SmallAirplane *string `json:"small_airplane,omitempty"`
	SmallBlueDiamond *string `json:"small_blue_diamond,omitempty"`
	SmallOrangeDiamond *string `json:"small_orange_diamond,omitempty"`
	SmallRedTriangle *string `json:"small_red_triangle,omitempty"`
	SmallRedTriangleDown *string `json:"small_red_triangle_down,omitempty"`
	Smile *string `json:"smile,omitempty"`
	SmileCat *string `json:"smile_cat,omitempty"`
	Smiley *string `json:"smiley,omitempty"`
	SmileyCat *string `json:"smiley_cat,omitempty"`
	SmilingFaceWithTear *string `json:"smiling_face_with_tear,omitempty"`
	SmilingFaceWithThreeHearts *string `json:"smiling_face_with_three_hearts,omitempty"`
	SmilingImp *string `json:"smiling_imp,omitempty"`
	Smirk *string `json:"smirk,omitempty"`
	SmirkCat *string `json:"smirk_cat,omitempty"`
	Smoking *string `json:"smoking,omitempty"`
	Snail *string `json:"snail,omitempty"`
	Snake *string `json:"snake,omitempty"`
	SneezingFace *string `json:"sneezing_face,omitempty"`
	Snowboarder *string `json:"snowboarder,omitempty"`
	Snowflake *string `json:"snowflake,omitempty"`
	Snowman *string `json:"snowman,omitempty"`
	SnowmanWithSnow *string `json:"snowman_with_snow,omitempty"`
	Soap *string `json:"soap,omitempty"`
	Sob *string `json:"sob,omitempty"`
	Soccer *string `json:"soccer,omitempty"`
	Socks *string `json:"socks,omitempty"`
	Softball *string `json:"softball,omitempty"`
	SolomonIslands *string `json:"solomon_islands,omitempty"`
	Somalia *string `json:"somalia,omitempty"`
	Soon *string `json:"soon,omitempty"`
	Sos *string `json:"sos,omitempty"`
	Sound *string `json:"sound,omitempty"`
	SouthAfrica *string `json:"south_africa,omitempty"`
	SouthGeorgiaSouthSandwichIslands *string `json:"south_georgia_south_sandwich_islands,omitempty"`
	SouthSudan *string `json:"south_sudan,omitempty"`
	SpaceInvader *string `json:"space_invader,omitempty"`
	Spades *string `json:"spades,omitempty"`
	Spaghetti *string `json:"spaghetti,omitempty"`
	Sparkle *string `json:"sparkle,omitempty"`
	Sparkler *string `json:"sparkler,omitempty"`
	Sparkles *string `json:"sparkles,omitempty"`
	SparklingHeart *string `json:"sparkling_heart,omitempty"`
	SpeakNoEvil *string `json:"speak_no_evil,omitempty"`
	Speaker *string `json:"speaker,omitempty"`
	SpeakingHead *string `json:"speaking_head,omitempty"`
	SpeechBalloon *string `json:"speech_balloon,omitempty"`
	Speedboat *string `json:"speedboat,omitempty"`
	Spider *string `json:"spider,omitempty"`
	SpiderWeb *string `json:"spider_web,omitempty"`
	SpiralCalendar *string `json:"spiral_calendar,omitempty"`
	SpiralNotepad *string `json:"spiral_notepad,omitempty"`
	Sponge *string `json:"sponge,omitempty"`
	Spoon *string `json:"spoon,omitempty"`
	Squid *string `json:"squid,omitempty"`
	SriLanka *string `json:"sri_lanka,omitempty"`
	StBarthelemy *string `json:"st_barthelemy,omitempty"`
	StHelena *string `json:"st_helena,omitempty"`
	StKittsNevis *string `json:"st_kitts_nevis,omitempty"`
	StLucia *string `json:"st_lucia,omitempty"`
	StMartin *string `json:"st_martin,omitempty"`
	StPierreMiquelon *string `json:"st_pierre_miquelon,omitempty"`
	StVincentGrenadines *string `json:"st_vincent_grenadines,omitempty"`
	Stadium *string `json:"stadium,omitempty"`
	StandingMan *string `json:"standing_man,omitempty"`
	StandingPerson *string `json:"standing_person,omitempty"`
	StandingWoman *string `json:"standing_woman,omitempty"`
	Star *string `json:"star,omitempty"`
	Star2 *string `json:"star2,omitempty"`
	StarAndCrescent *string `json:"star_and_crescent,omitempty"`
	StarOfDavid *string `json:"star_of_david,omitempty"`
	StarStruck *string `json:"star_struck,omitempty"`
	Stars *string `json:"stars,omitempty"`
	Station *string `json:"station,omitempty"`
	StatueOfLiberty *string `json:"statue_of_liberty,omitempty"`
	SteamLocomotive *string `json:"steam_locomotive,omitempty"`
	Stethoscope *string `json:"stethoscope,omitempty"`
	Stew *string `json:"stew,omitempty"`
	StopButton *string `json:"stop_button,omitempty"`
	StopSign *string `json:"stop_sign,omitempty"`
	Stopwatch *string `json:"stopwatch,omitempty"`
	StraightRuler *string `json:"straight_ruler,omitempty"`
	Strawberry *string `json:"strawberry,omitempty"`
	StuckOutTongue *string `json:"stuck_out_tongue,omitempty"`
	StuckOutTongueClosedEyes *string `json:"stuck_out_tongue_closed_eyes,omitempty"`
	StuckOutTongueWinkingEye *string `json:"stuck_out_tongue_winking_eye,omitempty"`
	Student *string `json:"student,omitempty"`
	StudioMicrophone *string `json:"studio_microphone,omitempty"`
	StuffedFlatbread *string `json:"stuffed_flatbread,omitempty"`
	Sudan *string `json:"sudan,omitempty"`
	SunBehindLargeCloud *string `json:"sun_behind_large_cloud,omitempty"`
	SunBehindRainCloud *string `json:"sun_behind_rain_cloud,omitempty"`
	SunBehindSmallCloud *string `json:"sun_behind_small_cloud,omitempty"`
	SunWithFace *string `json:"sun_with_face,omitempty"`
	Sunflower *string `json:"sunflower,omitempty"`
	Sunglasses *string `json:"sunglasses,omitempty"`
	Sunny *string `json:"sunny,omitempty"`
	Sunrise *string `json:"sunrise,omitempty"`
	SunriseOverMountains *string `json:"sunrise_over_mountains,omitempty"`
	Superhero *string `json:"superhero,omitempty"`
	SuperheroMan *string `json:"superhero_man,omitempty"`
	SuperheroWoman *string `json:"superhero_woman,omitempty"`
	Supervillain *string `json:"supervillain,omitempty"`
	SupervillainMan *string `json:"supervillain_man,omitempty"`
	SupervillainWoman *string `json:"supervillain_woman,omitempty"`
	Surfer *string `json:"surfer,omitempty"`
	SurfingMan *string `json:"surfing_man,omitempty"`
	SurfingWoman *string `json:"surfing_woman,omitempty"`
	Suriname *string `json:"suriname,omitempty"`
	Sushi *string `json:"sushi,omitempty"`
	Suspect *string `json:"suspect,omitempty"`
	SuspensionRailway *string `json:"suspension_railway,omitempty"`
	SvalbardJanMayen *string `json:"svalbard_jan_mayen,omitempty"`
	Swan *string `json:"swan,omitempty"`
	Swaziland *string `json:"swaziland,omitempty"`
	Sweat *string `json:"sweat,omitempty"`
	SweatDrops *string `json:"sweat_drops,omitempty"`
	SweatSmile *string `json:"sweat_smile,omitempty"`
	Sweden *string `json:"sweden,omitempty"`
	SweetPotato *string `json:"sweet_potato,omitempty"`
	SwimBrief *string `json:"swim_brief,omitempty"`
	Swimmer *string `json:"swimmer,omitempty"`
	SwimmingMan *string `json:"swimming_man,omitempty"`
	SwimmingWoman *string `json:"swimming_woman,omitempty"`
	Switzerland *string `json:"switzerland,omitempty"`
	Symbols *string `json:"symbols,omitempty"`
	Synagogue *string `json:"synagogue,omitempty"`
	Syria *string `json:"syria,omitempty"`
	Syringe *string `json:"syringe,omitempty"`
	Taco *string `json:"taco,omitempty"`
	Tada *string `json:"tada,omitempty"`
	Taiwan *string `json:"taiwan,omitempty"`
	Tajikistan *string `json:"tajikistan,omitempty"`
	TakeoutBox *string `json:"takeout_box,omitempty"`
	Tamale *string `json:"tamale,omitempty"`
	TanabataTree *string `json:"tanabata_tree,omitempty"`
	Tangerine *string `json:"tangerine,omitempty"`
	Tanzania *string `json:"tanzania,omitempty"`
	Taurus *string `json:"taurus,omitempty"`
	Taxi *string `json:"taxi,omitempty"`
	Tea *string `json:"tea,omitempty"`
	Teacher *string `json:"teacher,omitempty"`
	Teapot *string `json:"teapot,omitempty"`
	Technologist *string `json:"technologist,omitempty"`
	TeddyBear *string `json:"teddy_bear,omitempty"`
	Telephone *string `json:"telephone,omitempty"`
	TelephoneReceiver *string `json:"telephone_receiver,omitempty"`
	Telescope *string `json:"telescope,omitempty"`
	Tennis *string `json:"tennis,omitempty"`
	Tent *string `json:"tent,omitempty"`
	TestTube *string `json:"test_tube,omitempty"`
	Thailand *string `json:"thailand,omitempty"`
	Thermometer *string `json:"thermometer,omitempty"`
	Thinking *string `json:"thinking,omitempty"`
	ThongSandal *string `json:"thong_sandal,omitempty"`
	ThoughtBalloon *string `json:"thought_balloon,omitempty"`
	Thread *string `json:"thread,omitempty"`
	Three *string `json:"three,omitempty"`
	Thumbsdown *string `json:"thumbsdown,omitempty"`
	Thumbsup *string `json:"thumbsup,omitempty"`
	Ticket *string `json:"ticket,omitempty"`
	Tickets *string `json:"tickets,omitempty"`
	Tiger *string `json:"tiger,omitempty"`
	Tiger2 *string `json:"tiger2,omitempty"`
	TimerClock *string `json:"timer_clock,omitempty"`
	TimorLeste *string `json:"timor_leste,omitempty"`
	TippingHandMan *string `json:"tipping_hand_man,omitempty"`
	TippingHandPerson *string `json:"tipping_hand_person,omitempty"`
	TippingHandWoman *string `json:"tipping_hand_woman,omitempty"`
	TiredFace *string `json:"tired_face,omitempty"`
	Tm *string `json:"tm,omitempty"`
	Togo *string `json:"togo,omitempty"`
	Toilet *string `json:"toilet,omitempty"`
	Tokelau *string `json:"tokelau,omitempty"`
	TokyoTower *string `json:"tokyo_tower,omitempty"`
	Tomato *string `json:"tomato,omitempty"`
	Tonga *string `json:"tonga,omitempty"`
	Tongue *string `json:"tongue,omitempty"`
	Toolbox *string `json:"toolbox,omitempty"`
	Tooth *string `json:"tooth,omitempty"`
	Toothbrush *string `json:"toothbrush,omitempty"`
	Top *string `json:"top,omitempty"`
	Tophat *string `json:"tophat,omitempty"`
	Tornado *string `json:"tornado,omitempty"`
	Tr *string `json:"tr,omitempty"`
	Trackball *string `json:"trackball,omitempty"`
	Tractor *string `json:"tractor,omitempty"`
	TrafficLight *string `json:"traffic_light,omitempty"`
	Train *string `json:"train,omitempty"`
	Train2 *string `json:"train2,omitempty"`
	Tram *string `json:"tram,omitempty"`
	TransgenderFlag *string `json:"transgender_flag,omitempty"`
	TransgenderSymbol *string `json:"transgender_symbol,omitempty"`
	Trex *string `json:"trex,omitempty"`
	TriangularFlagOnPost *string `json:"triangular_flag_on_post,omitempty"`
	TriangularRuler *string `json:"triangular_ruler,omitempty"`
	Trident *string `json:"trident,omitempty"`
	TrinidadTobago *string `json:"trinidad_tobago,omitempty"`
	TristanDaCunha *string `json:"tristan_da_cunha,omitempty"`
	Triumph *string `json:"triumph,omitempty"`
	Trolleybus *string `json:"trolleybus,omitempty"`
	Trollface *string `json:"trollface,omitempty"`
	Trophy *string `json:"trophy,omitempty"`
	TropicalDrink *string `json:"tropical_drink,omitempty"`
	TropicalFish *string `json:"tropical_fish,omitempty"`
	Truck *string `json:"truck,omitempty"`
	Trumpet *string `json:"trumpet,omitempty"`
	Tshirt *string `json:"tshirt,omitempty"`
	Tulip *string `json:"tulip,omitempty"`
	TumblerGlass *string `json:"tumbler_glass,omitempty"`
	Tunisia *string `json:"tunisia,omitempty"`
	Turkey *string `json:"turkey,omitempty"`
	Turkmenistan *string `json:"turkmenistan,omitempty"`
	TurksCaicosIslands *string `json:"turks_caicos_islands,omitempty"`
	Turtle *string `json:"turtle,omitempty"`
	Tuvalu *string `json:"tuvalu,omitempty"`
	Tv *string `json:"tv,omitempty"`
	TwistedRightwardsArrows *string `json:"twisted_rightwards_arrows,omitempty"`
	Two *string `json:"two,omitempty"`
	TwoHearts *string `json:"two_hearts,omitempty"`
	TwoMenHoldingHands *string `json:"two_men_holding_hands,omitempty"`
	TwoWomenHoldingHands *string `json:"two_women_holding_hands,omitempty"`
	U5272 *string `json:"u5272,omitempty"`
	U5408 *string `json:"u5408,omitempty"`
	U55b6 *string `json:"u55b6,omitempty"`
	U6307 *string `json:"u6307,omitempty"`
	U6708 *string `json:"u6708,omitempty"`
	U6709 *string `json:"u6709,omitempty"`
	U6e80 *string `json:"u6e80,omitempty"`
	U7121 *string `json:"u7121,omitempty"`
	U7533 *string `json:"u7533,omitempty"`
	U7981 *string `json:"u7981,omitempty"`
	U7a7a *string `json:"u7a7a,omitempty"`
	Uganda *string `json:"uganda,omitempty"`
	Uk *string `json:"uk,omitempty"`
	Ukraine *string `json:"ukraine,omitempty"`
	Umbrella *string `json:"umbrella,omitempty"`
	Unamused *string `json:"unamused,omitempty"`
	Underage *string `json:"underage,omitempty"`
	Unicorn *string `json:"unicorn,omitempty"`
	UnitedArabEmirates *string `json:"united_arab_emirates,omitempty"`
	UnitedNations *string `json:"united_nations,omitempty"`
	Unlock *string `json:"unlock,omitempty"`
	Up *string `json:"up,omitempty"`
	UpsideDownFace *string `json:"upside_down_face,omitempty"`
	Uruguay *string `json:"uruguay,omitempty"`
	Us *string `json:"us,omitempty"`
	UsOutlyingIslands *string `json:"us_outlying_islands,omitempty"`
	UsVirginIslands *string `json:"us_virgin_islands,omitempty"`
	Uzbekistan *string `json:"uzbekistan,omitempty"`
	V *string `json:"v,omitempty"`
	Vampire *string `json:"vampire,omitempty"`
	VampireMan *string `json:"vampire_man,omitempty"`
	VampireWoman *string `json:"vampire_woman,omitempty"`
	Vanuatu *string `json:"vanuatu,omitempty"`
	VaticanCity *string `json:"vatican_city,omitempty"`
	Venezuela *string `json:"venezuela,omitempty"`
	VerticalTrafficLight *string `json:"vertical_traffic_light,omitempty"`
	Vhs *string `json:"vhs,omitempty"`
	VibrationMode *string `json:"vibration_mode,omitempty"`
	VideoCamera *string `json:"video_camera,omitempty"`
	VideoGame *string `json:"video_game,omitempty"`
	Vietnam *string `json:"vietnam,omitempty"`
	Violin *string `json:"violin,omitempty"`
	Virgo *string `json:"virgo,omitempty"`
	Volcano *string `json:"volcano,omitempty"`
	Volleyball *string `json:"volleyball,omitempty"`
	VomitingFace *string `json:"vomiting_face,omitempty"`
	Vs *string `json:"vs,omitempty"`
	VulcanSalute *string `json:"vulcan_salute,omitempty"`
	Waffle *string `json:"waffle,omitempty"`
	Wales *string `json:"wales,omitempty"`
	Walking *string `json:"walking,omitempty"`
	WalkingMan *string `json:"walking_man,omitempty"`
	WalkingWoman *string `json:"walking_woman,omitempty"`
	WallisFutuna *string `json:"wallis_futuna,omitempty"`
	WaningCrescentMoon *string `json:"waning_crescent_moon,omitempty"`
	WaningGibbousMoon *string `json:"waning_gibbous_moon,omitempty"`
	Warning *string `json:"warning,omitempty"`
	Wastebasket *string `json:"wastebasket,omitempty"`
	Watch *string `json:"watch,omitempty"`
	WaterBuffalo *string `json:"water_buffalo,omitempty"`
	WaterPolo *string `json:"water_polo,omitempty"`
	Watermelon *string `json:"watermelon,omitempty"`
	Wave *string `json:"wave,omitempty"`
	WavyDash *string `json:"wavy_dash,omitempty"`
	WaxingCrescentMoon *string `json:"waxing_crescent_moon,omitempty"`
	WaxingGibbousMoon *string `json:"waxing_gibbous_moon,omitempty"`
	Wc *string `json:"wc,omitempty"`
	Weary *string `json:"weary,omitempty"`
	Wedding *string `json:"wedding,omitempty"`
	WeightLifting *string `json:"weight_lifting,omitempty"`
	WeightLiftingMan *string `json:"weight_lifting_man,omitempty"`
	WeightLiftingWoman *string `json:"weight_lifting_woman,omitempty"`
	WesternSahara *string `json:"western_sahara,omitempty"`
	Whale *string `json:"whale,omitempty"`
	Whale2 *string `json:"whale2,omitempty"`
	WheelOfDharma *string `json:"wheel_of_dharma,omitempty"`
	Wheelchair *string `json:"wheelchair,omitempty"`
	WhiteCheckMark *string `json:"white_check_mark,omitempty"`
	WhiteCircle *string `json:"white_circle,omitempty"`
	WhiteFlag *string `json:"white_flag,omitempty"`
	WhiteFlower *string `json:"white_flower,omitempty"`
	WhiteHairedMan *string `json:"white_haired_man,omitempty"`
	WhiteHairedWoman *string `json:"white_haired_woman,omitempty"`
	WhiteHeart *string `json:"white_heart,omitempty"`
	WhiteLargeSquare *string `json:"white_large_square,omitempty"`
	WhiteMediumSmallSquare *string `json:"white_medium_small_square,omitempty"`
	WhiteMediumSquare *string `json:"white_medium_square,omitempty"`
	WhiteSmallSquare *string `json:"white_small_square,omitempty"`
	WhiteSquareButton *string `json:"white_square_button,omitempty"`
	WiltedFlower *string `json:"wilted_flower,omitempty"`
	WindChime *string `json:"wind_chime,omitempty"`
	WindFace *string `json:"wind_face,omitempty"`
	Window *string `json:"window,omitempty"`
	WineGlass *string `json:"wine_glass,omitempty"`
	Wink *string `json:"wink,omitempty"`
	Wolf *string `json:"wolf,omitempty"`
	Woman *string `json:"woman,omitempty"`
	WomanArtist *string `json:"woman_artist,omitempty"`
	WomanAstronaut *string `json:"woman_astronaut,omitempty"`
	WomanBeard *string `json:"woman_beard,omitempty"`
	WomanCartwheeling *string `json:"woman_cartwheeling,omitempty"`
	WomanCook *string `json:"woman_cook,omitempty"`
	WomanDancing *string `json:"woman_dancing,omitempty"`
	WomanFacepalming *string `json:"woman_facepalming,omitempty"`
	WomanFactoryWorker *string `json:"woman_factory_worker,omitempty"`
	WomanFarmer *string `json:"woman_farmer,omitempty"`
	WomanFeedingBaby *string `json:"woman_feeding_baby,omitempty"`
	WomanFirefighter *string `json:"woman_firefighter,omitempty"`
	WomanHealthWorker *string `json:"woman_health_worker,omitempty"`
	WomanInManualWheelchair *string `json:"woman_in_manual_wheelchair,omitempty"`
	WomanInMotorizedWheelchair *string `json:"woman_in_motorized_wheelchair,omitempty"`
	WomanInTuxedo *string `json:"woman_in_tuxedo,omitempty"`
	WomanJudge *string `json:"woman_judge,omitempty"`
	WomanJuggling *string `json:"woman_juggling,omitempty"`
	WomanMechanic *string `json:"woman_mechanic,omitempty"`
	WomanOfficeWorker *string `json:"woman_office_worker,omitempty"`
	WomanPilot *string `json:"woman_pilot,omitempty"`
	WomanPlayingHandball *string `json:"woman_playing_handball,omitempty"`
	WomanPlayingWaterPolo *string `json:"woman_playing_water_polo,omitempty"`
	WomanScientist *string `json:"woman_scientist,omitempty"`
	WomanShrugging *string `json:"woman_shrugging,omitempty"`
	WomanSinger *string `json:"woman_singer,omitempty"`
	WomanStudent *string `json:"woman_student,omitempty"`
	WomanTeacher *string `json:"woman_teacher,omitempty"`
	WomanTechnologist *string `json:"woman_technologist,omitempty"`
	WomanWithHeadscarf *string `json:"woman_with_headscarf,omitempty"`
	WomanWithProbingCane *string `json:"woman_with_probing_cane,omitempty"`
	WomanWithTurban *string `json:"woman_with_turban,omitempty"`
	WomanWithVeil *string `json:"woman_with_veil,omitempty"`
	WomansClothes *string `json:"womans_clothes,omitempty"`
	WomansHat *string `json:"womans_hat,omitempty"`
	WomenWrestling *string `json:"women_wrestling,omitempty"`
	Womens *string `json:"womens,omitempty"`
	Wood *string `json:"wood,omitempty"`
	WoozyFace *string `json:"woozy_face,omitempty"`
	WorldMap *string `json:"world_map,omitempty"`
	Worm *string `json:"worm,omitempty"`
	Worried *string `json:"worried,omitempty"`
	Wrench *string `json:"wrench,omitempty"`
	Wrestling *string `json:"wrestling,omitempty"`
	WritingHand *string `json:"writing_hand,omitempty"`
	X *string `json:"x,omitempty"`
	Yarn *string `json:"yarn,omitempty"`
	YawningFace *string `json:"yawning_face,omitempty"`
	YellowCircle *string `json:"yellow_circle,omitempty"`
	YellowHeart *string `json:"yellow_heart,omitempty"`
	YellowSquare *string `json:"yellow_square,omitempty"`
	Yemen *string `json:"yemen,omitempty"`
	Yen *string `json:"yen,omitempty"`
	YinYang *string `json:"yin_yang,omitempty"`
	YoYo *string `json:"yo_yo,omitempty"`
	Yum *string `json:"yum,omitempty"`
	Zambia *string `json:"zambia,omitempty"`
	ZanyFace *string `json:"zany_face,omitempty"`
	Zap *string `json:"zap,omitempty"`
	Zebra *string `json:"zebra,omitempty"`
	Zero *string `json:"zero,omitempty"`
	Zimbabwe *string `json:"zimbabwe,omitempty"`
	ZipperMouthFace *string `json:"zipper_mouth_face,omitempty"`
	Zombie *string `json:"zombie,omitempty"`
	ZombieMan *string `json:"zombie_man,omitempty"`
	ZombieWoman *string `json:"zombie_woman,omitempty"`
	Zzz *string `json:"zzz,omitempty"`
}

// EmojiLoadMatch is the typed request payload for Emoji.LoadTyped.
type EmojiLoadMatch struct {
	F1 *string `json:"1,omitempty"`
	F100 *string `json:"100,omitempty"`
	F1234 *string `json:"1234,omitempty"`
	F1stPlaceMedal *string `json:"1st_place_medal,omitempty"`
	F2ndPlaceMedal *string `json:"2nd_place_medal,omitempty"`
	F3rdPlaceMedal *string `json:"3rd_place_medal,omitempty"`
	F8ball *string `json:"8ball,omitempty"`
	A *string `json:"a,omitempty"`
	Ab *string `json:"ab,omitempty"`
	Abacus *string `json:"abacus,omitempty"`
	Abc *string `json:"abc,omitempty"`
	Abcd *string `json:"abcd,omitempty"`
	Accept *string `json:"accept,omitempty"`
	Accessibility *string `json:"accessibility,omitempty"`
	Accordion *string `json:"accordion,omitempty"`
	AdhesiveBandage *string `json:"adhesive_bandage,omitempty"`
	Adult *string `json:"adult,omitempty"`
	AerialTramway *string `json:"aerial_tramway,omitempty"`
	Afghanistan *string `json:"afghanistan,omitempty"`
	Airplane *string `json:"airplane,omitempty"`
	AlandIslands *string `json:"aland_islands,omitempty"`
	AlarmClock *string `json:"alarm_clock,omitempty"`
	Albania *string `json:"albania,omitempty"`
	Alembic *string `json:"alembic,omitempty"`
	Algeria *string `json:"algeria,omitempty"`
	Alien *string `json:"alien,omitempty"`
	Ambulance *string `json:"ambulance,omitempty"`
	AmericanSamoa *string `json:"american_samoa,omitempty"`
	Amphora *string `json:"amphora,omitempty"`
	AnatomicalHeart *string `json:"anatomical_heart,omitempty"`
	Anchor *string `json:"anchor,omitempty"`
	Andorra *string `json:"andorra,omitempty"`
	Angel *string `json:"angel,omitempty"`
	Anger *string `json:"anger,omitempty"`
	Angola *string `json:"angola,omitempty"`
	Angry *string `json:"angry,omitempty"`
	Anguilla *string `json:"anguilla,omitempty"`
	Anguished *string `json:"anguished,omitempty"`
	Ant *string `json:"ant,omitempty"`
	Antarctica *string `json:"antarctica,omitempty"`
	AntiguaBarbuda *string `json:"antigua_barbuda,omitempty"`
	Apple *string `json:"apple,omitempty"`
	Aquarius *string `json:"aquarius,omitempty"`
	Argentina *string `json:"argentina,omitempty"`
	Aries *string `json:"aries,omitempty"`
	Armenia *string `json:"armenia,omitempty"`
	ArrowBackward *string `json:"arrow_backward,omitempty"`
	ArrowDoubleDown *string `json:"arrow_double_down,omitempty"`
	ArrowDoubleUp *string `json:"arrow_double_up,omitempty"`
	ArrowDown *string `json:"arrow_down,omitempty"`
	ArrowDownSmall *string `json:"arrow_down_small,omitempty"`
	ArrowForward *string `json:"arrow_forward,omitempty"`
	ArrowHeadingDown *string `json:"arrow_heading_down,omitempty"`
	ArrowHeadingUp *string `json:"arrow_heading_up,omitempty"`
	ArrowLeft *string `json:"arrow_left,omitempty"`
	ArrowLowerLeft *string `json:"arrow_lower_left,omitempty"`
	ArrowLowerRight *string `json:"arrow_lower_right,omitempty"`
	ArrowRight *string `json:"arrow_right,omitempty"`
	ArrowRightHook *string `json:"arrow_right_hook,omitempty"`
	ArrowUp *string `json:"arrow_up,omitempty"`
	ArrowUpDown *string `json:"arrow_up_down,omitempty"`
	ArrowUpSmall *string `json:"arrow_up_small,omitempty"`
	ArrowUpperLeft *string `json:"arrow_upper_left,omitempty"`
	ArrowUpperRight *string `json:"arrow_upper_right,omitempty"`
	ArrowsClockwise *string `json:"arrows_clockwise,omitempty"`
	ArrowsCounterclockwise *string `json:"arrows_counterclockwise,omitempty"`
	Art *string `json:"art,omitempty"`
	ArticulatedLorry *string `json:"articulated_lorry,omitempty"`
	ArtificialSatellite *string `json:"artificial_satellite,omitempty"`
	Artist *string `json:"artist,omitempty"`
	Aruba *string `json:"aruba,omitempty"`
	AscensionIsland *string `json:"ascension_island,omitempty"`
	Asterisk *string `json:"asterisk,omitempty"`
	Astonished *string `json:"astonished,omitempty"`
	Astronaut *string `json:"astronaut,omitempty"`
	AthleticShoe *string `json:"athletic_shoe,omitempty"`
	Atm *string `json:"atm,omitempty"`
	Atom *string `json:"atom,omitempty"`
	AtomSymbol *string `json:"atom_symbol,omitempty"`
	Australia *string `json:"australia,omitempty"`
	Austria *string `json:"austria,omitempty"`
	AutoRickshaw *string `json:"auto_rickshaw,omitempty"`
	Avocado *string `json:"avocado,omitempty"`
	Axe *string `json:"axe,omitempty"`
	Azerbaijan *string `json:"azerbaijan,omitempty"`
	B *string `json:"b,omitempty"`
	Baby *string `json:"baby,omitempty"`
	BabyBottle *string `json:"baby_bottle,omitempty"`
	BabyChick *string `json:"baby_chick,omitempty"`
	BabySymbol *string `json:"baby_symbol,omitempty"`
	Back *string `json:"back,omitempty"`
	Bacon *string `json:"bacon,omitempty"`
	Badger *string `json:"badger,omitempty"`
	Badminton *string `json:"badminton,omitempty"`
	Bagel *string `json:"bagel,omitempty"`
	BaggageClaim *string `json:"baggage_claim,omitempty"`
	BaguetteBread *string `json:"baguette_bread,omitempty"`
	Bahamas *string `json:"bahamas,omitempty"`
	Bahrain *string `json:"bahrain,omitempty"`
	BalanceScale *string `json:"balance_scale,omitempty"`
	BaldMan *string `json:"bald_man,omitempty"`
	BaldWoman *string `json:"bald_woman,omitempty"`
	BalletShoes *string `json:"ballet_shoes,omitempty"`
	Balloon *string `json:"balloon,omitempty"`
	BallotBox *string `json:"ballot_box,omitempty"`
	BallotBoxWithCheck *string `json:"ballot_box_with_check,omitempty"`
	Bamboo *string `json:"bamboo,omitempty"`
	Banana *string `json:"banana,omitempty"`
	Bangbang *string `json:"bangbang,omitempty"`
	Bangladesh *string `json:"bangladesh,omitempty"`
	Banjo *string `json:"banjo,omitempty"`
	Bank *string `json:"bank,omitempty"`
	BarChart *string `json:"bar_chart,omitempty"`
	Barbados *string `json:"barbados,omitempty"`
	Barber *string `json:"barber,omitempty"`
	Baseball *string `json:"baseball,omitempty"`
	Basecamp *string `json:"basecamp,omitempty"`
	Basecampy *string `json:"basecampy,omitempty"`
	Basket *string `json:"basket,omitempty"`
	Basketball *string `json:"basketball,omitempty"`
	BasketballMan *string `json:"basketball_man,omitempty"`
	BasketballWoman *string `json:"basketball_woman,omitempty"`
	Bat *string `json:"bat,omitempty"`
	Bath *string `json:"bath,omitempty"`
	Bathtub *string `json:"bathtub,omitempty"`
	Battery *string `json:"battery,omitempty"`
	BeachUmbrella *string `json:"beach_umbrella,omitempty"`
	Bear *string `json:"bear,omitempty"`
	BeardedPerson *string `json:"bearded_person,omitempty"`
	Beaver *string `json:"beaver,omitempty"`
	Bed *string `json:"bed,omitempty"`
	Bee *string `json:"bee,omitempty"`
	Beer *string `json:"beer,omitempty"`
	Beers *string `json:"beers,omitempty"`
	Beetle *string `json:"beetle,omitempty"`
	Beginner *string `json:"beginner,omitempty"`
	Belarus *string `json:"belarus,omitempty"`
	Belgium *string `json:"belgium,omitempty"`
	Belize *string `json:"belize,omitempty"`
	Bell *string `json:"bell,omitempty"`
	BellPepper *string `json:"bell_pepper,omitempty"`
	BellhopBell *string `json:"bellhop_bell,omitempty"`
	Benin *string `json:"benin,omitempty"`
	Bento *string `json:"bento,omitempty"`
	Bermuda *string `json:"bermuda,omitempty"`
	BeverageBox *string `json:"beverage_box,omitempty"`
	Bhutan *string `json:"bhutan,omitempty"`
	Bicyclist *string `json:"bicyclist,omitempty"`
	Bike *string `json:"bike,omitempty"`
	BikingMan *string `json:"biking_man,omitempty"`
	BikingWoman *string `json:"biking_woman,omitempty"`
	Bikini *string `json:"bikini,omitempty"`
	BilledCap *string `json:"billed_cap,omitempty"`
	Biohazard *string `json:"biohazard,omitempty"`
	Bird *string `json:"bird,omitempty"`
	Birthday *string `json:"birthday,omitempty"`
	Bison *string `json:"bison,omitempty"`
	BlackCat *string `json:"black_cat,omitempty"`
	BlackCircle *string `json:"black_circle,omitempty"`
	BlackFlag *string `json:"black_flag,omitempty"`
	BlackHeart *string `json:"black_heart,omitempty"`
	BlackJoker *string `json:"black_joker,omitempty"`
	BlackLargeSquare *string `json:"black_large_square,omitempty"`
	BlackMediumSmallSquare *string `json:"black_medium_small_square,omitempty"`
	BlackMediumSquare *string `json:"black_medium_square,omitempty"`
	BlackNib *string `json:"black_nib,omitempty"`
	BlackSmallSquare *string `json:"black_small_square,omitempty"`
	BlackSquareButton *string `json:"black_square_button,omitempty"`
	BlondHairedMan *string `json:"blond_haired_man,omitempty"`
	BlondHairedPerson *string `json:"blond_haired_person,omitempty"`
	BlondHairedWoman *string `json:"blond_haired_woman,omitempty"`
	BlondeWoman *string `json:"blonde_woman,omitempty"`
	Blossom *string `json:"blossom,omitempty"`
	Blowfish *string `json:"blowfish,omitempty"`
	BlueBook *string `json:"blue_book,omitempty"`
	BlueCar *string `json:"blue_car,omitempty"`
	BlueHeart *string `json:"blue_heart,omitempty"`
	BlueSquare *string `json:"blue_square,omitempty"`
	Blueberries *string `json:"blueberries,omitempty"`
	Blush *string `json:"blush,omitempty"`
	Boar *string `json:"boar,omitempty"`
	Boat *string `json:"boat,omitempty"`
	Bolivia *string `json:"bolivia,omitempty"`
	Bomb *string `json:"bomb,omitempty"`
	Bone *string `json:"bone,omitempty"`
	Book *string `json:"book,omitempty"`
	Bookmark *string `json:"bookmark,omitempty"`
	BookmarkTabs *string `json:"bookmark_tabs,omitempty"`
	Books *string `json:"books,omitempty"`
	Boom *string `json:"boom,omitempty"`
	Boomerang *string `json:"boomerang,omitempty"`
	Boot *string `json:"boot,omitempty"`
	BosniaHerzegovina *string `json:"bosnia_herzegovina,omitempty"`
	Botswana *string `json:"botswana,omitempty"`
	BouncingBallMan *string `json:"bouncing_ball_man,omitempty"`
	BouncingBallPerson *string `json:"bouncing_ball_person,omitempty"`
	BouncingBallWoman *string `json:"bouncing_ball_woman,omitempty"`
	Bouquet *string `json:"bouquet,omitempty"`
	BouvetIsland *string `json:"bouvet_island,omitempty"`
	Bow *string `json:"bow,omitempty"`
	BowAndArrow *string `json:"bow_and_arrow,omitempty"`
	BowingMan *string `json:"bowing_man,omitempty"`
	BowingWoman *string `json:"bowing_woman,omitempty"`
	BowlWithSpoon *string `json:"bowl_with_spoon,omitempty"`
	Bowling *string `json:"bowling,omitempty"`
	Bowtie *string `json:"bowtie,omitempty"`
	BoxingGlove *string `json:"boxing_glove,omitempty"`
	Boy *string `json:"boy,omitempty"`
	Brain *string `json:"brain,omitempty"`
	Brazil *string `json:"brazil,omitempty"`
	Bread *string `json:"bread,omitempty"`
	BreastFeeding *string `json:"breast_feeding,omitempty"`
	Bricks *string `json:"bricks,omitempty"`
	BrideWithVeil *string `json:"bride_with_veil,omitempty"`
	BridgeAtNight *string `json:"bridge_at_night,omitempty"`
	Briefcase *string `json:"briefcase,omitempty"`
	BritishIndianOceanTerritory *string `json:"british_indian_ocean_territory,omitempty"`
	BritishVirginIslands *string `json:"british_virgin_islands,omitempty"`
	Broccoli *string `json:"broccoli,omitempty"`
	BrokenHeart *string `json:"broken_heart,omitempty"`
	Broom *string `json:"broom,omitempty"`
	BrownCircle *string `json:"brown_circle,omitempty"`
	BrownHeart *string `json:"brown_heart,omitempty"`
	BrownSquare *string `json:"brown_square,omitempty"`
	Brunei *string `json:"brunei,omitempty"`
	BubbleTea *string `json:"bubble_tea,omitempty"`
	Bucket *string `json:"bucket,omitempty"`
	Bug *string `json:"bug,omitempty"`
	BuildingConstruction *string `json:"building_construction,omitempty"`
	Bulb *string `json:"bulb,omitempty"`
	Bulgaria *string `json:"bulgaria,omitempty"`
	BullettrainFront *string `json:"bullettrain_front,omitempty"`
	BullettrainSide *string `json:"bullettrain_side,omitempty"`
	BurkinaFaso *string `json:"burkina_faso,omitempty"`
	Burrito *string `json:"burrito,omitempty"`
	Burundi *string `json:"burundi,omitempty"`
	Bus *string `json:"bus,omitempty"`
	BusinessSuitLevitating *string `json:"business_suit_levitating,omitempty"`
	Busstop *string `json:"busstop,omitempty"`
	BustInSilhouette *string `json:"bust_in_silhouette,omitempty"`
	BustsInSilhouette *string `json:"busts_in_silhouette,omitempty"`
	Butter *string `json:"butter,omitempty"`
	Butterfly *string `json:"butterfly,omitempty"`
	Cactus *string `json:"cactus,omitempty"`
	Cake *string `json:"cake,omitempty"`
	Calendar *string `json:"calendar,omitempty"`
	CallMeHand *string `json:"call_me_hand,omitempty"`
	Calling *string `json:"calling,omitempty"`
	Cambodia *string `json:"cambodia,omitempty"`
	Camel *string `json:"camel,omitempty"`
	Camera *string `json:"camera,omitempty"`
	CameraFlash *string `json:"camera_flash,omitempty"`
	Cameroon *string `json:"cameroon,omitempty"`
	Camping *string `json:"camping,omitempty"`
	Canada *string `json:"canada,omitempty"`
	CanaryIslands *string `json:"canary_islands,omitempty"`
	Cancer *string `json:"cancer,omitempty"`
	Candle *string `json:"candle,omitempty"`
	Candy *string `json:"candy,omitempty"`
	CannedFood *string `json:"canned_food,omitempty"`
	Canoe *string `json:"canoe,omitempty"`
	CapeVerde *string `json:"cape_verde,omitempty"`
	CapitalAbcd *string `json:"capital_abcd,omitempty"`
	Capricorn *string `json:"capricorn,omitempty"`
	Car *string `json:"car,omitempty"`
	CardFileBox *string `json:"card_file_box,omitempty"`
	CardIndex *string `json:"card_index,omitempty"`
	CardIndexDividers *string `json:"card_index_dividers,omitempty"`
	CaribbeanNetherlands *string `json:"caribbean_netherlands,omitempty"`
	CarouselHorse *string `json:"carousel_horse,omitempty"`
	CarpentrySaw *string `json:"carpentry_saw,omitempty"`
	Carrot *string `json:"carrot,omitempty"`
	Cartwheeling *string `json:"cartwheeling,omitempty"`
	Cat *string `json:"cat,omitempty"`
	Cat2 *string `json:"cat2,omitempty"`
	CaymanIslands *string `json:"cayman_islands,omitempty"`
	Cd *string `json:"cd,omitempty"`
	CentralAfricanRepublic *string `json:"central_african_republic,omitempty"`
	CeutaMelilla *string `json:"ceuta_melilla,omitempty"`
	Chad *string `json:"chad,omitempty"`
	Chains *string `json:"chains,omitempty"`
	Chair *string `json:"chair,omitempty"`
	Champagne *string `json:"champagne,omitempty"`
	Chart *string `json:"chart,omitempty"`
	ChartWithDownwardsTrend *string `json:"chart_with_downwards_trend,omitempty"`
	ChartWithUpwardsTrend *string `json:"chart_with_upwards_trend,omitempty"`
	CheckeredFlag *string `json:"checkered_flag,omitempty"`
	Cheese *string `json:"cheese,omitempty"`
	Cherries *string `json:"cherries,omitempty"`
	CherryBlossom *string `json:"cherry_blossom,omitempty"`
	ChessPawn *string `json:"chess_pawn,omitempty"`
	Chestnut *string `json:"chestnut,omitempty"`
	Chicken *string `json:"chicken,omitempty"`
	Child *string `json:"child,omitempty"`
	ChildrenCrossing *string `json:"children_crossing,omitempty"`
	Chile *string `json:"chile,omitempty"`
	Chipmunk *string `json:"chipmunk,omitempty"`
	ChocolateBar *string `json:"chocolate_bar,omitempty"`
	Chopsticks *string `json:"chopsticks,omitempty"`
	ChristmasIsland *string `json:"christmas_island,omitempty"`
	ChristmasTree *string `json:"christmas_tree,omitempty"`
	Church *string `json:"church,omitempty"`
	Cinema *string `json:"cinema,omitempty"`
	CircusTent *string `json:"circus_tent,omitempty"`
	CitySunrise *string `json:"city_sunrise,omitempty"`
	CitySunset *string `json:"city_sunset,omitempty"`
	Cityscape *string `json:"cityscape,omitempty"`
	Cl *string `json:"cl,omitempty"`
	Clamp *string `json:"clamp,omitempty"`
	Clap *string `json:"clap,omitempty"`
	Clapper *string `json:"clapper,omitempty"`
	ClassicalBuilding *string `json:"classical_building,omitempty"`
	Climbing *string `json:"climbing,omitempty"`
	ClimbingMan *string `json:"climbing_man,omitempty"`
	ClimbingWoman *string `json:"climbing_woman,omitempty"`
	ClinkingGlasses *string `json:"clinking_glasses,omitempty"`
	Clipboard *string `json:"clipboard,omitempty"`
	ClippertonIsland *string `json:"clipperton_island,omitempty"`
	Clock1 *string `json:"clock1,omitempty"`
	Clock10 *string `json:"clock10,omitempty"`
	Clock1030 *string `json:"clock1030,omitempty"`
	Clock11 *string `json:"clock11,omitempty"`
	Clock1130 *string `json:"clock1130,omitempty"`
	Clock12 *string `json:"clock12,omitempty"`
	Clock1230 *string `json:"clock1230,omitempty"`
	Clock130 *string `json:"clock130,omitempty"`
	Clock2 *string `json:"clock2,omitempty"`
	Clock230 *string `json:"clock230,omitempty"`
	Clock3 *string `json:"clock3,omitempty"`
	Clock330 *string `json:"clock330,omitempty"`
	Clock4 *string `json:"clock4,omitempty"`
	Clock430 *string `json:"clock430,omitempty"`
	Clock5 *string `json:"clock5,omitempty"`
	Clock530 *string `json:"clock530,omitempty"`
	Clock6 *string `json:"clock6,omitempty"`
	Clock630 *string `json:"clock630,omitempty"`
	Clock7 *string `json:"clock7,omitempty"`
	Clock730 *string `json:"clock730,omitempty"`
	Clock8 *string `json:"clock8,omitempty"`
	Clock830 *string `json:"clock830,omitempty"`
	Clock9 *string `json:"clock9,omitempty"`
	Clock930 *string `json:"clock930,omitempty"`
	ClosedBook *string `json:"closed_book,omitempty"`
	ClosedLockWithKey *string `json:"closed_lock_with_key,omitempty"`
	ClosedUmbrella *string `json:"closed_umbrella,omitempty"`
	Cloud *string `json:"cloud,omitempty"`
	CloudWithLightning *string `json:"cloud_with_lightning,omitempty"`
	CloudWithLightningAndRain *string `json:"cloud_with_lightning_and_rain,omitempty"`
	CloudWithRain *string `json:"cloud_with_rain,omitempty"`
	CloudWithSnow *string `json:"cloud_with_snow,omitempty"`
	ClownFace *string `json:"clown_face,omitempty"`
	Clubs *string `json:"clubs,omitempty"`
	Cn *string `json:"cn,omitempty"`
	Coat *string `json:"coat,omitempty"`
	Cockroach *string `json:"cockroach,omitempty"`
	Cocktail *string `json:"cocktail,omitempty"`
	Coconut *string `json:"coconut,omitempty"`
	CocosIslands *string `json:"cocos_islands,omitempty"`
	Coffee *string `json:"coffee,omitempty"`
	Coffin *string `json:"coffin,omitempty"`
	Coin *string `json:"coin,omitempty"`
	ColdFace *string `json:"cold_face,omitempty"`
	ColdSweat *string `json:"cold_sweat,omitempty"`
	Collision *string `json:"collision,omitempty"`
	Colombia *string `json:"colombia,omitempty"`
	Comet *string `json:"comet,omitempty"`
	Comoros *string `json:"comoros,omitempty"`
	Compass *string `json:"compass,omitempty"`
	Computer *string `json:"computer,omitempty"`
	ComputerMouse *string `json:"computer_mouse,omitempty"`
	ConfettiBall *string `json:"confetti_ball,omitempty"`
	Confounded *string `json:"confounded,omitempty"`
	Confused *string `json:"confused,omitempty"`
	CongoBrazzaville *string `json:"congo_brazzaville,omitempty"`
	CongoKinshasa *string `json:"congo_kinshasa,omitempty"`
	Congratulations *string `json:"congratulations,omitempty"`
	Construction *string `json:"construction,omitempty"`
	ConstructionWorker *string `json:"construction_worker,omitempty"`
	ConstructionWorkerMan *string `json:"construction_worker_man,omitempty"`
	ConstructionWorkerWoman *string `json:"construction_worker_woman,omitempty"`
	ControlKnobs *string `json:"control_knobs,omitempty"`
	ConvenienceStore *string `json:"convenience_store,omitempty"`
	Cook *string `json:"cook,omitempty"`
	CookIslands *string `json:"cook_islands,omitempty"`
	Cookie *string `json:"cookie,omitempty"`
	Cool *string `json:"cool,omitempty"`
	Cop *string `json:"cop,omitempty"`
	Copilot *string `json:"copilot,omitempty"`
	Copyright *string `json:"copyright,omitempty"`
	Corn *string `json:"corn,omitempty"`
	CostaRica *string `json:"costa_rica,omitempty"`
	CoteDivoire *string `json:"cote_divoire,omitempty"`
	CouchAndLamp *string `json:"couch_and_lamp,omitempty"`
	Couple *string `json:"couple,omitempty"`
	CoupleWithHeart *string `json:"couple_with_heart,omitempty"`
	CoupleWithHeartManMan *string `json:"couple_with_heart_man_man,omitempty"`
	CoupleWithHeartWomanMan *string `json:"couple_with_heart_woman_man,omitempty"`
	CoupleWithHeartWomanWoman *string `json:"couple_with_heart_woman_woman,omitempty"`
	Couplekiss *string `json:"couplekiss,omitempty"`
	CouplekissManMan *string `json:"couplekiss_man_man,omitempty"`
	CouplekissManWoman *string `json:"couplekiss_man_woman,omitempty"`
	CouplekissWomanWoman *string `json:"couplekiss_woman_woman,omitempty"`
	Cow *string `json:"cow,omitempty"`
	Cow2 *string `json:"cow2,omitempty"`
	CowboyHatFace *string `json:"cowboy_hat_face,omitempty"`
	Crab *string `json:"crab,omitempty"`
	Crayon *string `json:"crayon,omitempty"`
	CreditCard *string `json:"credit_card,omitempty"`
	CrescentMoon *string `json:"crescent_moon,omitempty"`
	Cricket *string `json:"cricket,omitempty"`
	CricketGame *string `json:"cricket_game,omitempty"`
	Croatia *string `json:"croatia,omitempty"`
	Crocodile *string `json:"crocodile,omitempty"`
	Croissant *string `json:"croissant,omitempty"`
	CrossedFingers *string `json:"crossed_fingers,omitempty"`
	CrossedFlags *string `json:"crossed_flags,omitempty"`
	CrossedSwords *string `json:"crossed_swords,omitempty"`
	Crown *string `json:"crown,omitempty"`
	Cry *string `json:"cry,omitempty"`
	CryingCatFace *string `json:"crying_cat_face,omitempty"`
	CrystalBall *string `json:"crystal_ball,omitempty"`
	Cuba *string `json:"cuba,omitempty"`
	Cucumber *string `json:"cucumber,omitempty"`
	CupWithStraw *string `json:"cup_with_straw,omitempty"`
	Cupcake *string `json:"cupcake,omitempty"`
	Cupid *string `json:"cupid,omitempty"`
	Curacao *string `json:"curacao,omitempty"`
	CurlingStone *string `json:"curling_stone,omitempty"`
	CurlyHairedMan *string `json:"curly_haired_man,omitempty"`
	CurlyHairedWoman *string `json:"curly_haired_woman,omitempty"`
	CurlyLoop *string `json:"curly_loop,omitempty"`
	CurrencyExchange *string `json:"currency_exchange,omitempty"`
	Curry *string `json:"curry,omitempty"`
	CursingFace *string `json:"cursing_face,omitempty"`
	Custard *string `json:"custard,omitempty"`
	Customs *string `json:"customs,omitempty"`
	CutOfMeat *string `json:"cut_of_meat,omitempty"`
	Cyclone *string `json:"cyclone,omitempty"`
	Cyprus *string `json:"cyprus,omitempty"`
	CzechRepublic *string `json:"czech_republic,omitempty"`
	Dagger *string `json:"dagger,omitempty"`
	Dancer *string `json:"dancer,omitempty"`
	Dancers *string `json:"dancers,omitempty"`
	DancingMen *string `json:"dancing_men,omitempty"`
	DancingWomen *string `json:"dancing_women,omitempty"`
	Dango *string `json:"dango,omitempty"`
	DarkSunglasses *string `json:"dark_sunglasses,omitempty"`
	Dart *string `json:"dart,omitempty"`
	Dash *string `json:"dash,omitempty"`
	Date *string `json:"date,omitempty"`
	De *string `json:"de,omitempty"`
	DeafMan *string `json:"deaf_man,omitempty"`
	DeafPerson *string `json:"deaf_person,omitempty"`
	DeafWoman *string `json:"deaf_woman,omitempty"`
	DeciduousTree *string `json:"deciduous_tree,omitempty"`
	Deer *string `json:"deer,omitempty"`
	Denmark *string `json:"denmark,omitempty"`
	DepartmentStore *string `json:"department_store,omitempty"`
	Dependabot *string `json:"dependabot,omitempty"`
	DerelictHouse *string `json:"derelict_house,omitempty"`
	Desert *string `json:"desert,omitempty"`
	DesertIsland *string `json:"desert_island,omitempty"`
	DesktopComputer *string `json:"desktop_computer,omitempty"`
	Detective *string `json:"detective,omitempty"`
	DiamondShapeWithADotInside *string `json:"diamond_shape_with_a_dot_inside,omitempty"`
	Diamonds *string `json:"diamonds,omitempty"`
	DiegoGarcia *string `json:"diego_garcia,omitempty"`
	Disappointed *string `json:"disappointed,omitempty"`
	DisappointedRelieved *string `json:"disappointed_relieved,omitempty"`
	DisguisedFace *string `json:"disguised_face,omitempty"`
	DivingMask *string `json:"diving_mask,omitempty"`
	DiyaLamp *string `json:"diya_lamp,omitempty"`
	Dizzy *string `json:"dizzy,omitempty"`
	DizzyFace *string `json:"dizzy_face,omitempty"`
	Djibouti *string `json:"djibouti,omitempty"`
	Dna *string `json:"dna,omitempty"`
	DoNotLitter *string `json:"do_not_litter,omitempty"`
	Dodo *string `json:"dodo,omitempty"`
	Dog *string `json:"dog,omitempty"`
	Dog2 *string `json:"dog2,omitempty"`
	Dollar *string `json:"dollar,omitempty"`
	Dolls *string `json:"dolls,omitempty"`
	Dolphin *string `json:"dolphin,omitempty"`
	Dominica *string `json:"dominica,omitempty"`
	DominicanRepublic *string `json:"dominican_republic,omitempty"`
	Door *string `json:"door,omitempty"`
	Doughnut *string `json:"doughnut,omitempty"`
	Dove *string `json:"dove,omitempty"`
	Dragon *string `json:"dragon,omitempty"`
	DragonFace *string `json:"dragon_face,omitempty"`
	Dress *string `json:"dress,omitempty"`
	DromedaryCamel *string `json:"dromedary_camel,omitempty"`
	DroolingFace *string `json:"drooling_face,omitempty"`
	DropOfBlood *string `json:"drop_of_blood,omitempty"`
	Droplet *string `json:"droplet,omitempty"`
	Drum *string `json:"drum,omitempty"`
	Duck *string `json:"duck,omitempty"`
	Dumpling *string `json:"dumpling,omitempty"`
	Dvd *string `json:"dvd,omitempty"`
	Eagle *string `json:"eagle,omitempty"`
	Ear *string `json:"ear,omitempty"`
	EarOfRice *string `json:"ear_of_rice,omitempty"`
	EarWithHearingAid *string `json:"ear_with_hearing_aid,omitempty"`
	EarthAfrica *string `json:"earth_africa,omitempty"`
	EarthAmericas *string `json:"earth_americas,omitempty"`
	EarthAsia *string `json:"earth_asia,omitempty"`
	Ecuador *string `json:"ecuador,omitempty"`
	Egg *string `json:"egg,omitempty"`
	Eggplant *string `json:"eggplant,omitempty"`
	Egypt *string `json:"egypt,omitempty"`
	Eight *string `json:"eight,omitempty"`
	EightPointedBlackStar *string `json:"eight_pointed_black_star,omitempty"`
	EightSpokedAsterisk *string `json:"eight_spoked_asterisk,omitempty"`
	EjectButton *string `json:"eject_button,omitempty"`
	ElSalvador *string `json:"el_salvador,omitempty"`
	ElectricPlug *string `json:"electric_plug,omitempty"`
	Electron *string `json:"electron,omitempty"`
	Elephant *string `json:"elephant,omitempty"`
	Elevator *string `json:"elevator,omitempty"`
	Elf *string `json:"elf,omitempty"`
	ElfMan *string `json:"elf_man,omitempty"`
	ElfWoman *string `json:"elf_woman,omitempty"`
	Email *string `json:"email,omitempty"`
	End *string `json:"end,omitempty"`
	England *string `json:"england,omitempty"`
	Envelope *string `json:"envelope,omitempty"`
	EnvelopeWithArrow *string `json:"envelope_with_arrow,omitempty"`
	EquatorialGuinea *string `json:"equatorial_guinea,omitempty"`
	Eritrea *string `json:"eritrea,omitempty"`
	Es *string `json:"es,omitempty"`
	Estonia *string `json:"estonia,omitempty"`
	Ethiopia *string `json:"ethiopia,omitempty"`
	Eu *string `json:"eu,omitempty"`
	Euro *string `json:"euro,omitempty"`
	EuropeanCastle *string `json:"european_castle,omitempty"`
	EuropeanPostOffice *string `json:"european_post_office,omitempty"`
	EuropeanUnion *string `json:"european_union,omitempty"`
	EvergreenTree *string `json:"evergreen_tree,omitempty"`
	Exclamation *string `json:"exclamation,omitempty"`
	ExplodingHead *string `json:"exploding_head,omitempty"`
	Expressionless *string `json:"expressionless,omitempty"`
	Eye *string `json:"eye,omitempty"`
	EyeSpeechBubble *string `json:"eye_speech_bubble,omitempty"`
	Eyeglasses *string `json:"eyeglasses,omitempty"`
	Eyes *string `json:"eyes,omitempty"`
	FaceExhaling *string `json:"face_exhaling,omitempty"`
	FaceInClouds *string `json:"face_in_clouds,omitempty"`
	FaceWithHeadBandage *string `json:"face_with_head_bandage,omitempty"`
	FaceWithSpiralEyes *string `json:"face_with_spiral_eyes,omitempty"`
	FaceWithThermometer *string `json:"face_with_thermometer,omitempty"`
	Facepalm *string `json:"facepalm,omitempty"`
	Facepunch *string `json:"facepunch,omitempty"`
	Factory *string `json:"factory,omitempty"`
	FactoryWorker *string `json:"factory_worker,omitempty"`
	Fairy *string `json:"fairy,omitempty"`
	FairyMan *string `json:"fairy_man,omitempty"`
	FairyWoman *string `json:"fairy_woman,omitempty"`
	Falafel *string `json:"falafel,omitempty"`
	FalklandIslands *string `json:"falkland_islands,omitempty"`
	FallenLeaf *string `json:"fallen_leaf,omitempty"`
	Family *string `json:"family,omitempty"`
	FamilyManBoy *string `json:"family_man_boy,omitempty"`
	FamilyManBoyBoy *string `json:"family_man_boy_boy,omitempty"`
	FamilyManGirl *string `json:"family_man_girl,omitempty"`
	FamilyManGirlBoy *string `json:"family_man_girl_boy,omitempty"`
	FamilyManGirlGirl *string `json:"family_man_girl_girl,omitempty"`
	FamilyManManBoy *string `json:"family_man_man_boy,omitempty"`
	FamilyManManBoyBoy *string `json:"family_man_man_boy_boy,omitempty"`
	FamilyManManGirl *string `json:"family_man_man_girl,omitempty"`
	FamilyManManGirlBoy *string `json:"family_man_man_girl_boy,omitempty"`
	FamilyManManGirlGirl *string `json:"family_man_man_girl_girl,omitempty"`
	FamilyManWomanBoy *string `json:"family_man_woman_boy,omitempty"`
	FamilyManWomanBoyBoy *string `json:"family_man_woman_boy_boy,omitempty"`
	FamilyManWomanGirl *string `json:"family_man_woman_girl,omitempty"`
	FamilyManWomanGirlBoy *string `json:"family_man_woman_girl_boy,omitempty"`
	FamilyManWomanGirlGirl *string `json:"family_man_woman_girl_girl,omitempty"`
	FamilyWomanBoy *string `json:"family_woman_boy,omitempty"`
	FamilyWomanBoyBoy *string `json:"family_woman_boy_boy,omitempty"`
	FamilyWomanGirl *string `json:"family_woman_girl,omitempty"`
	FamilyWomanGirlBoy *string `json:"family_woman_girl_boy,omitempty"`
	FamilyWomanGirlGirl *string `json:"family_woman_girl_girl,omitempty"`
	FamilyWomanWomanBoy *string `json:"family_woman_woman_boy,omitempty"`
	FamilyWomanWomanBoyBoy *string `json:"family_woman_woman_boy_boy,omitempty"`
	FamilyWomanWomanGirl *string `json:"family_woman_woman_girl,omitempty"`
	FamilyWomanWomanGirlBoy *string `json:"family_woman_woman_girl_boy,omitempty"`
	FamilyWomanWomanGirlGirl *string `json:"family_woman_woman_girl_girl,omitempty"`
	Farmer *string `json:"farmer,omitempty"`
	FaroeIslands *string `json:"faroe_islands,omitempty"`
	FastForward *string `json:"fast_forward,omitempty"`
	Fax *string `json:"fax,omitempty"`
	Fearful *string `json:"fearful,omitempty"`
	Feather *string `json:"feather,omitempty"`
	Feelsgood *string `json:"feelsgood,omitempty"`
	Feet *string `json:"feet,omitempty"`
	FemaleDetective *string `json:"female_detective,omitempty"`
	FemaleSign *string `json:"female_sign,omitempty"`
	FerrisWheel *string `json:"ferris_wheel,omitempty"`
	Ferry *string `json:"ferry,omitempty"`
	FieldHockey *string `json:"field_hockey,omitempty"`
	Fiji *string `json:"fiji,omitempty"`
	FileCabinet *string `json:"file_cabinet,omitempty"`
	FileFolder *string `json:"file_folder,omitempty"`
	FilmProjector *string `json:"film_projector,omitempty"`
	FilmStrip *string `json:"film_strip,omitempty"`
	Finland *string `json:"finland,omitempty"`
	Finnadie *string `json:"finnadie,omitempty"`
	Fire *string `json:"fire,omitempty"`
	FireEngine *string `json:"fire_engine,omitempty"`
	FireExtinguisher *string `json:"fire_extinguisher,omitempty"`
	Firecracker *string `json:"firecracker,omitempty"`
	Firefighter *string `json:"firefighter,omitempty"`
	Fireworks *string `json:"fireworks,omitempty"`
	FirstQuarterMoon *string `json:"first_quarter_moon,omitempty"`
	FirstQuarterMoonWithFace *string `json:"first_quarter_moon_with_face,omitempty"`
	Fish *string `json:"fish,omitempty"`
	FishCake *string `json:"fish_cake,omitempty"`
	FishingPoleAndFish *string `json:"fishing_pole_and_fish,omitempty"`
	Fishsticks *string `json:"fishsticks,omitempty"`
	Fist *string `json:"fist,omitempty"`
	FistLeft *string `json:"fist_left,omitempty"`
	FistOncoming *string `json:"fist_oncoming,omitempty"`
	FistRaised *string `json:"fist_raised,omitempty"`
	FistRight *string `json:"fist_right,omitempty"`
	Five *string `json:"five,omitempty"`
	Flags *string `json:"flags,omitempty"`
	Flamingo *string `json:"flamingo,omitempty"`
	Flashlight *string `json:"flashlight,omitempty"`
	FlatShoe *string `json:"flat_shoe,omitempty"`
	Flatbread *string `json:"flatbread,omitempty"`
	FleurDeLis *string `json:"fleur_de_lis,omitempty"`
	FlightArrival *string `json:"flight_arrival,omitempty"`
	FlightDeparture *string `json:"flight_departure,omitempty"`
	Flipper *string `json:"flipper,omitempty"`
	FloppyDisk *string `json:"floppy_disk,omitempty"`
	FlowerPlayingCards *string `json:"flower_playing_cards,omitempty"`
	Flushed *string `json:"flushed,omitempty"`
	Fly *string `json:"fly,omitempty"`
	FlyingDisc *string `json:"flying_disc,omitempty"`
	FlyingSaucer *string `json:"flying_saucer,omitempty"`
	Fog *string `json:"fog,omitempty"`
	Foggy *string `json:"foggy,omitempty"`
	Fondue *string `json:"fondue,omitempty"`
	Foot *string `json:"foot,omitempty"`
	Football *string `json:"football,omitempty"`
	Footprints *string `json:"footprints,omitempty"`
	ForkAndKnife *string `json:"fork_and_knife,omitempty"`
	FortuneCookie *string `json:"fortune_cookie,omitempty"`
	Fountain *string `json:"fountain,omitempty"`
	FountainPen *string `json:"fountain_pen,omitempty"`
	Four *string `json:"four,omitempty"`
	FourLeafClover *string `json:"four_leaf_clover,omitempty"`
	FoxFace *string `json:"fox_face,omitempty"`
	Fr *string `json:"fr,omitempty"`
	FramedPicture *string `json:"framed_picture,omitempty"`
	Free *string `json:"free,omitempty"`
	FrenchGuiana *string `json:"french_guiana,omitempty"`
	FrenchPolynesia *string `json:"french_polynesia,omitempty"`
	FrenchSouthernTerritories *string `json:"french_southern_territories,omitempty"`
	FriedEgg *string `json:"fried_egg,omitempty"`
	FriedShrimp *string `json:"fried_shrimp,omitempty"`
	Fries *string `json:"fries,omitempty"`
	Frog *string `json:"frog,omitempty"`
	Frowning *string `json:"frowning,omitempty"`
	FrowningFace *string `json:"frowning_face,omitempty"`
	FrowningMan *string `json:"frowning_man,omitempty"`
	FrowningPerson *string `json:"frowning_person,omitempty"`
	FrowningWoman *string `json:"frowning_woman,omitempty"`
	Fu *string `json:"fu,omitempty"`
	Fuelpump *string `json:"fuelpump,omitempty"`
	FullMoon *string `json:"full_moon,omitempty"`
	FullMoonWithFace *string `json:"full_moon_with_face,omitempty"`
	FuneralUrn *string `json:"funeral_urn,omitempty"`
	Gabon *string `json:"gabon,omitempty"`
	Gambia *string `json:"gambia,omitempty"`
	GameDie *string `json:"game_die,omitempty"`
	Garlic *string `json:"garlic,omitempty"`
	Gb *string `json:"gb,omitempty"`
	Gear *string `json:"gear,omitempty"`
	Gem *string `json:"gem,omitempty"`
	Gemini *string `json:"gemini,omitempty"`
	Genie *string `json:"genie,omitempty"`
	GenieMan *string `json:"genie_man,omitempty"`
	GenieWoman *string `json:"genie_woman,omitempty"`
	Georgia *string `json:"georgia,omitempty"`
	Ghana *string `json:"ghana,omitempty"`
	Ghost *string `json:"ghost,omitempty"`
	Gibraltar *string `json:"gibraltar,omitempty"`
	Gift *string `json:"gift,omitempty"`
	GiftHeart *string `json:"gift_heart,omitempty"`
	Giraffe *string `json:"giraffe,omitempty"`
	Girl *string `json:"girl,omitempty"`
	GlobeWithMeridians *string `json:"globe_with_meridians,omitempty"`
	Gloves *string `json:"gloves,omitempty"`
	GoalNet *string `json:"goal_net,omitempty"`
	Goat *string `json:"goat,omitempty"`
	Goberserk *string `json:"goberserk,omitempty"`
	Godmode *string `json:"godmode,omitempty"`
	Goggles *string `json:"goggles,omitempty"`
	Golf *string `json:"golf,omitempty"`
	Golfing *string `json:"golfing,omitempty"`
	GolfingMan *string `json:"golfing_man,omitempty"`
	GolfingWoman *string `json:"golfing_woman,omitempty"`
	Gorilla *string `json:"gorilla,omitempty"`
	Grapes *string `json:"grapes,omitempty"`
	Greece *string `json:"greece,omitempty"`
	GreenApple *string `json:"green_apple,omitempty"`
	GreenBook *string `json:"green_book,omitempty"`
	GreenCircle *string `json:"green_circle,omitempty"`
	GreenHeart *string `json:"green_heart,omitempty"`
	GreenSalad *string `json:"green_salad,omitempty"`
	GreenSquare *string `json:"green_square,omitempty"`
	Greenland *string `json:"greenland,omitempty"`
	Grenada *string `json:"grenada,omitempty"`
	GreyExclamation *string `json:"grey_exclamation,omitempty"`
	GreyQuestion *string `json:"grey_question,omitempty"`
	Grimacing *string `json:"grimacing,omitempty"`
	Grin *string `json:"grin,omitempty"`
	Grinning *string `json:"grinning,omitempty"`
	Guadeloupe *string `json:"guadeloupe,omitempty"`
	Guam *string `json:"guam,omitempty"`
	Guard *string `json:"guard,omitempty"`
	Guardsman *string `json:"guardsman,omitempty"`
	Guardswoman *string `json:"guardswoman,omitempty"`
	Guatemala *string `json:"guatemala,omitempty"`
	Guernsey *string `json:"guernsey,omitempty"`
	GuideDog *string `json:"guide_dog,omitempty"`
	Guinea *string `json:"guinea,omitempty"`
	GuineaBissau *string `json:"guinea_bissau,omitempty"`
	Guitar *string `json:"guitar,omitempty"`
	Gun *string `json:"gun,omitempty"`
	Guyana *string `json:"guyana,omitempty"`
	Haircut *string `json:"haircut,omitempty"`
	HaircutMan *string `json:"haircut_man,omitempty"`
	HaircutWoman *string `json:"haircut_woman,omitempty"`
	Haiti *string `json:"haiti,omitempty"`
	Hamburger *string `json:"hamburger,omitempty"`
	Hammer *string `json:"hammer,omitempty"`
	HammerAndPick *string `json:"hammer_and_pick,omitempty"`
	HammerAndWrench *string `json:"hammer_and_wrench,omitempty"`
	Hamster *string `json:"hamster,omitempty"`
	Hand *string `json:"hand,omitempty"`
	HandOverMouth *string `json:"hand_over_mouth,omitempty"`
	Handbag *string `json:"handbag,omitempty"`
	HandballPerson *string `json:"handball_person,omitempty"`
	Handshake *string `json:"handshake,omitempty"`
	Hankey *string `json:"hankey,omitempty"`
	Hash *string `json:"hash,omitempty"`
	HatchedChick *string `json:"hatched_chick,omitempty"`
	HatchingChick *string `json:"hatching_chick,omitempty"`
	Headphones *string `json:"headphones,omitempty"`
	Headstone *string `json:"headstone,omitempty"`
	HealthWorker *string `json:"health_worker,omitempty"`
	HearNoEvil *string `json:"hear_no_evil,omitempty"`
	HeardMcdonaldIslands *string `json:"heard_mcdonald_islands,omitempty"`
	Heart *string `json:"heart,omitempty"`
	HeartDecoration *string `json:"heart_decoration,omitempty"`
	HeartEyes *string `json:"heart_eyes,omitempty"`
	HeartEyesCat *string `json:"heart_eyes_cat,omitempty"`
	HeartOnFire *string `json:"heart_on_fire,omitempty"`
	Heartbeat *string `json:"heartbeat,omitempty"`
	Heartpulse *string `json:"heartpulse,omitempty"`
	Hearts *string `json:"hearts,omitempty"`
	HeavyCheckMark *string `json:"heavy_check_mark,omitempty"`
	HeavyDivisionSign *string `json:"heavy_division_sign,omitempty"`
	HeavyDollarSign *string `json:"heavy_dollar_sign,omitempty"`
	HeavyExclamationMark *string `json:"heavy_exclamation_mark,omitempty"`
	HeavyHeartExclamation *string `json:"heavy_heart_exclamation,omitempty"`
	HeavyMinusSign *string `json:"heavy_minus_sign,omitempty"`
	HeavyMultiplicationX *string `json:"heavy_multiplication_x,omitempty"`
	HeavyPlusSign *string `json:"heavy_plus_sign,omitempty"`
	Hedgehog *string `json:"hedgehog,omitempty"`
	Helicopter *string `json:"helicopter,omitempty"`
	Herb *string `json:"herb,omitempty"`
	Hibiscus *string `json:"hibiscus,omitempty"`
	HighBrightness *string `json:"high_brightness,omitempty"`
	HighHeel *string `json:"high_heel,omitempty"`
	HikingBoot *string `json:"hiking_boot,omitempty"`
	HinduTemple *string `json:"hindu_temple,omitempty"`
	Hippopotamus *string `json:"hippopotamus,omitempty"`
	Hocho *string `json:"hocho,omitempty"`
	Hole *string `json:"hole,omitempty"`
	Honduras *string `json:"honduras,omitempty"`
	HoneyPot *string `json:"honey_pot,omitempty"`
	Honeybee *string `json:"honeybee,omitempty"`
	HongKong *string `json:"hong_kong,omitempty"`
	Hook *string `json:"hook,omitempty"`
	Horse *string `json:"horse,omitempty"`
	HorseRacing *string `json:"horse_racing,omitempty"`
	Hospital *string `json:"hospital,omitempty"`
	HotFace *string `json:"hot_face,omitempty"`
	HotPepper *string `json:"hot_pepper,omitempty"`
	Hotdog *string `json:"hotdog,omitempty"`
	Hotel *string `json:"hotel,omitempty"`
	Hotsprings *string `json:"hotsprings,omitempty"`
	Hourglass *string `json:"hourglass,omitempty"`
	HourglassFlowingSand *string `json:"hourglass_flowing_sand,omitempty"`
	House *string `json:"house,omitempty"`
	HouseWithGarden *string `json:"house_with_garden,omitempty"`
	Houses *string `json:"houses,omitempty"`
	Hugs *string `json:"hugs,omitempty"`
	Hungary *string `json:"hungary,omitempty"`
	Hurtrealbad *string `json:"hurtrealbad,omitempty"`
	Hushed *string `json:"hushed,omitempty"`
	Hut *string `json:"hut,omitempty"`
	IceCream *string `json:"ice_cream,omitempty"`
	IceCube *string `json:"ice_cube,omitempty"`
	IceHockey *string `json:"ice_hockey,omitempty"`
	IceSkate *string `json:"ice_skate,omitempty"`
	Icecream *string `json:"icecream,omitempty"`
	Iceland *string `json:"iceland,omitempty"`
	Id string `json:"id"`
	IdeographAdvantage *string `json:"ideograph_advantage,omitempty"`
	Imp *string `json:"imp,omitempty"`
	InboxTray *string `json:"inbox_tray,omitempty"`
	IncomingEnvelope *string `json:"incoming_envelope,omitempty"`
	India *string `json:"india,omitempty"`
	Indonesia *string `json:"indonesia,omitempty"`
	Infinity *string `json:"infinity,omitempty"`
	InformationDeskPerson *string `json:"information_desk_person,omitempty"`
	InformationSource *string `json:"information_source,omitempty"`
	Innocent *string `json:"innocent,omitempty"`
	Interrobang *string `json:"interrobang,omitempty"`
	Iphone *string `json:"iphone,omitempty"`
	Iran *string `json:"iran,omitempty"`
	Iraq *string `json:"iraq,omitempty"`
	Ireland *string `json:"ireland,omitempty"`
	IsleOfMan *string `json:"isle_of_man,omitempty"`
	Israel *string `json:"israel,omitempty"`
	It *string `json:"it,omitempty"`
	IzakayaLantern *string `json:"izakaya_lantern,omitempty"`
	JackOLantern *string `json:"jack_o_lantern,omitempty"`
	Jamaica *string `json:"jamaica,omitempty"`
	Japan *string `json:"japan,omitempty"`
	JapaneseCastle *string `json:"japanese_castle,omitempty"`
	JapaneseGoblin *string `json:"japanese_goblin,omitempty"`
	JapaneseOgre *string `json:"japanese_ogre,omitempty"`
	Jeans *string `json:"jeans,omitempty"`
	Jersey *string `json:"jersey,omitempty"`
	Jigsaw *string `json:"jigsaw,omitempty"`
	Jordan *string `json:"jordan,omitempty"`
	Joy *string `json:"joy,omitempty"`
	JoyCat *string `json:"joy_cat,omitempty"`
	Joystick *string `json:"joystick,omitempty"`
	Jp *string `json:"jp,omitempty"`
	Judge *string `json:"judge,omitempty"`
	JugglingPerson *string `json:"juggling_person,omitempty"`
	Kangaroo *string `json:"kangaroo,omitempty"`
	Kazakhstan *string `json:"kazakhstan,omitempty"`
	Kenya *string `json:"kenya,omitempty"`
	Key *string `json:"key,omitempty"`
	Keyboard *string `json:"keyboard,omitempty"`
	KeycapTen *string `json:"keycap_ten,omitempty"`
	KickScooter *string `json:"kick_scooter,omitempty"`
	Kimono *string `json:"kimono,omitempty"`
	Kiribati *string `json:"kiribati,omitempty"`
	Kiss *string `json:"kiss,omitempty"`
	Kissing *string `json:"kissing,omitempty"`
	KissingCat *string `json:"kissing_cat,omitempty"`
	KissingClosedEyes *string `json:"kissing_closed_eyes,omitempty"`
	KissingHeart *string `json:"kissing_heart,omitempty"`
	KissingSmilingEyes *string `json:"kissing_smiling_eyes,omitempty"`
	Kite *string `json:"kite,omitempty"`
	KiwiFruit *string `json:"kiwi_fruit,omitempty"`
	KneelingMan *string `json:"kneeling_man,omitempty"`
	KneelingPerson *string `json:"kneeling_person,omitempty"`
	KneelingWoman *string `json:"kneeling_woman,omitempty"`
	Knife *string `json:"knife,omitempty"`
	Knot *string `json:"knot,omitempty"`
	Koala *string `json:"koala,omitempty"`
	Koko *string `json:"koko,omitempty"`
	Kosovo *string `json:"kosovo,omitempty"`
	Kr *string `json:"kr,omitempty"`
	Kuwait *string `json:"kuwait,omitempty"`
	Kyrgyzstan *string `json:"kyrgyzstan,omitempty"`
	LabCoat *string `json:"lab_coat,omitempty"`
	Label *string `json:"label,omitempty"`
	Lacrosse *string `json:"lacrosse,omitempty"`
	Ladder *string `json:"ladder,omitempty"`
	LadyBeetle *string `json:"lady_beetle,omitempty"`
	Lantern *string `json:"lantern,omitempty"`
	Laos *string `json:"laos,omitempty"`
	LargeBlueCircle *string `json:"large_blue_circle,omitempty"`
	LargeBlueDiamond *string `json:"large_blue_diamond,omitempty"`
	LargeOrangeDiamond *string `json:"large_orange_diamond,omitempty"`
	LastQuarterMoon *string `json:"last_quarter_moon,omitempty"`
	LastQuarterMoonWithFace *string `json:"last_quarter_moon_with_face,omitempty"`
	LatinCross *string `json:"latin_cross,omitempty"`
	Latvia *string `json:"latvia,omitempty"`
	Laughing *string `json:"laughing,omitempty"`
	LeafyGreen *string `json:"leafy_green,omitempty"`
	Leaves *string `json:"leaves,omitempty"`
	Lebanon *string `json:"lebanon,omitempty"`
	Ledger *string `json:"ledger,omitempty"`
	LeftLuggage *string `json:"left_luggage,omitempty"`
	LeftRightArrow *string `json:"left_right_arrow,omitempty"`
	LeftSpeechBubble *string `json:"left_speech_bubble,omitempty"`
	LeftwardsArrowWithHook *string `json:"leftwards_arrow_with_hook,omitempty"`
	Leg *string `json:"leg,omitempty"`
	Lemon *string `json:"lemon,omitempty"`
	Leo *string `json:"leo,omitempty"`
	Leopard *string `json:"leopard,omitempty"`
	Lesotho *string `json:"lesotho,omitempty"`
	LevelSlider *string `json:"level_slider,omitempty"`
	Liberia *string `json:"liberia,omitempty"`
	Libra *string `json:"libra,omitempty"`
	Libya *string `json:"libya,omitempty"`
	Liechtenstein *string `json:"liechtenstein,omitempty"`
	LightRail *string `json:"light_rail,omitempty"`
	Link *string `json:"link,omitempty"`
	Lion *string `json:"lion,omitempty"`
	Lips *string `json:"lips,omitempty"`
	Lipstick *string `json:"lipstick,omitempty"`
	Lithuania *string `json:"lithuania,omitempty"`
	Lizard *string `json:"lizard,omitempty"`
	Llama *string `json:"llama,omitempty"`
	Lobster *string `json:"lobster,omitempty"`
	Lock *string `json:"lock,omitempty"`
	LockWithInkPen *string `json:"lock_with_ink_pen,omitempty"`
	Lollipop *string `json:"lollipop,omitempty"`
	LongDrum *string `json:"long_drum,omitempty"`
	Loop *string `json:"loop,omitempty"`
	LotionBottle *string `json:"lotion_bottle,omitempty"`
	LotusPosition *string `json:"lotus_position,omitempty"`
	LotusPositionMan *string `json:"lotus_position_man,omitempty"`
	LotusPositionWoman *string `json:"lotus_position_woman,omitempty"`
	LoudSound *string `json:"loud_sound,omitempty"`
	Loudspeaker *string `json:"loudspeaker,omitempty"`
	LoveHotel *string `json:"love_hotel,omitempty"`
	LoveLetter *string `json:"love_letter,omitempty"`
	LoveYouGesture *string `json:"love_you_gesture,omitempty"`
	LowBrightness *string `json:"low_brightness,omitempty"`
	Luggage *string `json:"luggage,omitempty"`
	Lungs *string `json:"lungs,omitempty"`
	Luxembourg *string `json:"luxembourg,omitempty"`
	LyingFace *string `json:"lying_face,omitempty"`
	M *string `json:"m,omitempty"`
	Macau *string `json:"macau,omitempty"`
	Macedonia *string `json:"macedonia,omitempty"`
	Madagascar *string `json:"madagascar,omitempty"`
	Mag *string `json:"mag,omitempty"`
	MagRight *string `json:"mag_right,omitempty"`
	Mage *string `json:"mage,omitempty"`
	MageMan *string `json:"mage_man,omitempty"`
	MageWoman *string `json:"mage_woman,omitempty"`
	MagicWand *string `json:"magic_wand,omitempty"`
	Magnet *string `json:"magnet,omitempty"`
	Mahjong *string `json:"mahjong,omitempty"`
	Mailbox *string `json:"mailbox,omitempty"`
	MailboxClosed *string `json:"mailbox_closed,omitempty"`
	MailboxWithMail *string `json:"mailbox_with_mail,omitempty"`
	MailboxWithNoMail *string `json:"mailbox_with_no_mail,omitempty"`
	Malawi *string `json:"malawi,omitempty"`
	Malaysia *string `json:"malaysia,omitempty"`
	Maldives *string `json:"maldives,omitempty"`
	MaleDetective *string `json:"male_detective,omitempty"`
	MaleSign *string `json:"male_sign,omitempty"`
	Mali *string `json:"mali,omitempty"`
	Malta *string `json:"malta,omitempty"`
	Mammoth *string `json:"mammoth,omitempty"`
	Man *string `json:"man,omitempty"`
	ManArtist *string `json:"man_artist,omitempty"`
	ManAstronaut *string `json:"man_astronaut,omitempty"`
	ManBeard *string `json:"man_beard,omitempty"`
	ManCartwheeling *string `json:"man_cartwheeling,omitempty"`
	ManCook *string `json:"man_cook,omitempty"`
	ManDancing *string `json:"man_dancing,omitempty"`
	ManFacepalming *string `json:"man_facepalming,omitempty"`
	ManFactoryWorker *string `json:"man_factory_worker,omitempty"`
	ManFarmer *string `json:"man_farmer,omitempty"`
	ManFeedingBaby *string `json:"man_feeding_baby,omitempty"`
	ManFirefighter *string `json:"man_firefighter,omitempty"`
	ManHealthWorker *string `json:"man_health_worker,omitempty"`
	ManInManualWheelchair *string `json:"man_in_manual_wheelchair,omitempty"`
	ManInMotorizedWheelchair *string `json:"man_in_motorized_wheelchair,omitempty"`
	ManInTuxedo *string `json:"man_in_tuxedo,omitempty"`
	ManJudge *string `json:"man_judge,omitempty"`
	ManJuggling *string `json:"man_juggling,omitempty"`
	ManMechanic *string `json:"man_mechanic,omitempty"`
	ManOfficeWorker *string `json:"man_office_worker,omitempty"`
	ManPilot *string `json:"man_pilot,omitempty"`
	ManPlayingHandball *string `json:"man_playing_handball,omitempty"`
	ManPlayingWaterPolo *string `json:"man_playing_water_polo,omitempty"`
	ManScientist *string `json:"man_scientist,omitempty"`
	ManShrugging *string `json:"man_shrugging,omitempty"`
	ManSinger *string `json:"man_singer,omitempty"`
	ManStudent *string `json:"man_student,omitempty"`
	ManTeacher *string `json:"man_teacher,omitempty"`
	ManTechnologist *string `json:"man_technologist,omitempty"`
	ManWithGuaPiMao *string `json:"man_with_gua_pi_mao,omitempty"`
	ManWithProbingCane *string `json:"man_with_probing_cane,omitempty"`
	ManWithTurban *string `json:"man_with_turban,omitempty"`
	ManWithVeil *string `json:"man_with_veil,omitempty"`
	Mandarin *string `json:"mandarin,omitempty"`
	Mango *string `json:"mango,omitempty"`
	MansShoe *string `json:"mans_shoe,omitempty"`
	MantelpieceClock *string `json:"mantelpiece_clock,omitempty"`
	ManualWheelchair *string `json:"manual_wheelchair,omitempty"`
	MapleLeaf *string `json:"maple_leaf,omitempty"`
	MarshallIslands *string `json:"marshall_islands,omitempty"`
	MartialArtsUniform *string `json:"martial_arts_uniform,omitempty"`
	Martinique *string `json:"martinique,omitempty"`
	Mask *string `json:"mask,omitempty"`
	Massage *string `json:"massage,omitempty"`
	MassageMan *string `json:"massage_man,omitempty"`
	MassageWoman *string `json:"massage_woman,omitempty"`
	Mate *string `json:"mate,omitempty"`
	Mauritania *string `json:"mauritania,omitempty"`
	Mauritius *string `json:"mauritius,omitempty"`
	Mayotte *string `json:"mayotte,omitempty"`
	MeatOnBone *string `json:"meat_on_bone,omitempty"`
	Mechanic *string `json:"mechanic,omitempty"`
	MechanicalArm *string `json:"mechanical_arm,omitempty"`
	MechanicalLeg *string `json:"mechanical_leg,omitempty"`
	MedalMilitary *string `json:"medal_military,omitempty"`
	MedalSports *string `json:"medal_sports,omitempty"`
	MedicalSymbol *string `json:"medical_symbol,omitempty"`
	Mega *string `json:"mega,omitempty"`
	Melon *string `json:"melon,omitempty"`
	Memo *string `json:"memo,omitempty"`
	MenWrestling *string `json:"men_wrestling,omitempty"`
	MendingHeart *string `json:"mending_heart,omitempty"`
	Menorah *string `json:"menorah,omitempty"`
	Mens *string `json:"mens,omitempty"`
	Mermaid *string `json:"mermaid,omitempty"`
	Merman *string `json:"merman,omitempty"`
	Merperson *string `json:"merperson,omitempty"`
	Metal *string `json:"metal,omitempty"`
	Metro *string `json:"metro,omitempty"`
	Mexico *string `json:"mexico,omitempty"`
	Microbe *string `json:"microbe,omitempty"`
	Micronesia *string `json:"micronesia,omitempty"`
	Microphone *string `json:"microphone,omitempty"`
	Microscope *string `json:"microscope,omitempty"`
	MiddleFinger *string `json:"middle_finger,omitempty"`
	MilitaryHelmet *string `json:"military_helmet,omitempty"`
	MilkGlass *string `json:"milk_glass,omitempty"`
	MilkyWay *string `json:"milky_way,omitempty"`
	Minibus *string `json:"minibus,omitempty"`
	Minidisc *string `json:"minidisc,omitempty"`
	Mirror *string `json:"mirror,omitempty"`
	MobilePhoneOff *string `json:"mobile_phone_off,omitempty"`
	Moldova *string `json:"moldova,omitempty"`
	Monaco *string `json:"monaco,omitempty"`
	MoneyMouthFace *string `json:"money_mouth_face,omitempty"`
	MoneyWithWings *string `json:"money_with_wings,omitempty"`
	Moneybag *string `json:"moneybag,omitempty"`
	Mongolia *string `json:"mongolia,omitempty"`
	Monkey *string `json:"monkey,omitempty"`
	MonkeyFace *string `json:"monkey_face,omitempty"`
	MonocleFace *string `json:"monocle_face,omitempty"`
	Monorail *string `json:"monorail,omitempty"`
	Montenegro *string `json:"montenegro,omitempty"`
	Montserrat *string `json:"montserrat,omitempty"`
	Moon *string `json:"moon,omitempty"`
	MoonCake *string `json:"moon_cake,omitempty"`
	Morocco *string `json:"morocco,omitempty"`
	MortarBoard *string `json:"mortar_board,omitempty"`
	Mosque *string `json:"mosque,omitempty"`
	Mosquito *string `json:"mosquito,omitempty"`
	MotorBoat *string `json:"motor_boat,omitempty"`
	MotorScooter *string `json:"motor_scooter,omitempty"`
	Motorcycle *string `json:"motorcycle,omitempty"`
	MotorizedWheelchair *string `json:"motorized_wheelchair,omitempty"`
	Motorway *string `json:"motorway,omitempty"`
	MountFuji *string `json:"mount_fuji,omitempty"`
	Mountain *string `json:"mountain,omitempty"`
	MountainBicyclist *string `json:"mountain_bicyclist,omitempty"`
	MountainBikingMan *string `json:"mountain_biking_man,omitempty"`
	MountainBikingWoman *string `json:"mountain_biking_woman,omitempty"`
	MountainCableway *string `json:"mountain_cableway,omitempty"`
	MountainRailway *string `json:"mountain_railway,omitempty"`
	MountainSnow *string `json:"mountain_snow,omitempty"`
	Mouse *string `json:"mouse,omitempty"`
	Mouse2 *string `json:"mouse2,omitempty"`
	MouseTrap *string `json:"mouse_trap,omitempty"`
	MovieCamera *string `json:"movie_camera,omitempty"`
	Moyai *string `json:"moyai,omitempty"`
	Mozambique *string `json:"mozambique,omitempty"`
	MrsClaus *string `json:"mrs_claus,omitempty"`
	Muscle *string `json:"muscle,omitempty"`
	Mushroom *string `json:"mushroom,omitempty"`
	MusicalKeyboard *string `json:"musical_keyboard,omitempty"`
	MusicalNote *string `json:"musical_note,omitempty"`
	MusicalScore *string `json:"musical_score,omitempty"`
	Mute *string `json:"mute,omitempty"`
	MxClaus *string `json:"mx_claus,omitempty"`
	Myanmar *string `json:"myanmar,omitempty"`
	NailCare *string `json:"nail_care,omitempty"`
	NameBadge *string `json:"name_badge,omitempty"`
	Namibia *string `json:"namibia,omitempty"`
	NationalPark *string `json:"national_park,omitempty"`
	Nauru *string `json:"nauru,omitempty"`
	NauseatedFace *string `json:"nauseated_face,omitempty"`
	NazarAmulet *string `json:"nazar_amulet,omitempty"`
	Neckbeard *string `json:"neckbeard,omitempty"`
	Necktie *string `json:"necktie,omitempty"`
	NegativeSquaredCrossMark *string `json:"negative_squared_cross_mark,omitempty"`
	Nepal *string `json:"nepal,omitempty"`
	NerdFace *string `json:"nerd_face,omitempty"`
	NestingDolls *string `json:"nesting_dolls,omitempty"`
	Netherlands *string `json:"netherlands,omitempty"`
	NeutralFace *string `json:"neutral_face,omitempty"`
	New *string `json:"new,omitempty"`
	NewCaledonia *string `json:"new_caledonia,omitempty"`
	NewMoon *string `json:"new_moon,omitempty"`
	NewMoonWithFace *string `json:"new_moon_with_face,omitempty"`
	NewZealand *string `json:"new_zealand,omitempty"`
	Newspaper *string `json:"newspaper,omitempty"`
	NewspaperRoll *string `json:"newspaper_roll,omitempty"`
	NextTrackButton *string `json:"next_track_button,omitempty"`
	Ng *string `json:"ng,omitempty"`
	NgMan *string `json:"ng_man,omitempty"`
	NgWoman *string `json:"ng_woman,omitempty"`
	Nicaragua *string `json:"nicaragua,omitempty"`
	Niger *string `json:"niger,omitempty"`
	Nigeria *string `json:"nigeria,omitempty"`
	NightWithStars *string `json:"night_with_stars,omitempty"`
	Nine *string `json:"nine,omitempty"`
	Ninja *string `json:"ninja,omitempty"`
	Niue *string `json:"niue,omitempty"`
	NoBell *string `json:"no_bell,omitempty"`
	NoBicycles *string `json:"no_bicycles,omitempty"`
	NoEntry *string `json:"no_entry,omitempty"`
	NoEntrySign *string `json:"no_entry_sign,omitempty"`
	NoGood *string `json:"no_good,omitempty"`
	NoGoodMan *string `json:"no_good_man,omitempty"`
	NoGoodWoman *string `json:"no_good_woman,omitempty"`
	NoMobilePhones *string `json:"no_mobile_phones,omitempty"`
	NoMouth *string `json:"no_mouth,omitempty"`
	NoPedestrians *string `json:"no_pedestrians,omitempty"`
	NoSmoking *string `json:"no_smoking,omitempty"`
	NonpotableWater *string `json:"nonpotable_water,omitempty"`
	NorfolkIsland *string `json:"norfolk_island,omitempty"`
	NorthKorea *string `json:"north_korea,omitempty"`
	NorthernMarianaIslands *string `json:"northern_mariana_islands,omitempty"`
	Norway *string `json:"norway,omitempty"`
	Nose *string `json:"nose,omitempty"`
	Notebook *string `json:"notebook,omitempty"`
	NotebookWithDecorativeCover *string `json:"notebook_with_decorative_cover,omitempty"`
	Notes *string `json:"notes,omitempty"`
	NutAndBolt *string `json:"nut_and_bolt,omitempty"`
	O *string `json:"o,omitempty"`
	O2 *string `json:"o2,omitempty"`
	Ocean *string `json:"ocean,omitempty"`
	Octocat *string `json:"octocat,omitempty"`
	Octopus *string `json:"octopus,omitempty"`
	Oden *string `json:"oden,omitempty"`
	Office *string `json:"office,omitempty"`
	OfficeWorker *string `json:"office_worker,omitempty"`
	OilDrum *string `json:"oil_drum,omitempty"`
	Ok *string `json:"ok,omitempty"`
	OkHand *string `json:"ok_hand,omitempty"`
	OkMan *string `json:"ok_man,omitempty"`
	OkPerson *string `json:"ok_person,omitempty"`
	OkWoman *string `json:"ok_woman,omitempty"`
	OldKey *string `json:"old_key,omitempty"`
	OlderAdult *string `json:"older_adult,omitempty"`
	OlderMan *string `json:"older_man,omitempty"`
	OlderWoman *string `json:"older_woman,omitempty"`
	Olive *string `json:"olive,omitempty"`
	Om *string `json:"om,omitempty"`
	Oman *string `json:"oman,omitempty"`
	On *string `json:"on,omitempty"`
	OncomingAutomobile *string `json:"oncoming_automobile,omitempty"`
	OncomingBus *string `json:"oncoming_bus,omitempty"`
	OncomingPoliceCar *string `json:"oncoming_police_car,omitempty"`
	OncomingTaxi *string `json:"oncoming_taxi,omitempty"`
	One *string `json:"one,omitempty"`
	OnePieceSwimsuit *string `json:"one_piece_swimsuit,omitempty"`
	Onion *string `json:"onion,omitempty"`
	OpenBook *string `json:"open_book,omitempty"`
	OpenFileFolder *string `json:"open_file_folder,omitempty"`
	OpenHands *string `json:"open_hands,omitempty"`
	OpenMouth *string `json:"open_mouth,omitempty"`
	OpenUmbrella *string `json:"open_umbrella,omitempty"`
	Ophiuchus *string `json:"ophiuchus,omitempty"`
	Orange *string `json:"orange,omitempty"`
	OrangeBook *string `json:"orange_book,omitempty"`
	OrangeCircle *string `json:"orange_circle,omitempty"`
	OrangeHeart *string `json:"orange_heart,omitempty"`
	OrangeSquare *string `json:"orange_square,omitempty"`
	Orangutan *string `json:"orangutan,omitempty"`
	OrthodoxCross *string `json:"orthodox_cross,omitempty"`
	Otter *string `json:"otter,omitempty"`
	OutboxTray *string `json:"outbox_tray,omitempty"`
	Owl *string `json:"owl,omitempty"`
	Ox *string `json:"ox,omitempty"`
	Oyster *string `json:"oyster,omitempty"`
	Package *string `json:"package,omitempty"`
	PageFacingUp *string `json:"page_facing_up,omitempty"`
	PageWithCurl *string `json:"page_with_curl,omitempty"`
	Pager *string `json:"pager,omitempty"`
	Paintbrush *string `json:"paintbrush,omitempty"`
	Pakistan *string `json:"pakistan,omitempty"`
	Palau *string `json:"palau,omitempty"`
	PalestinianTerritories *string `json:"palestinian_territories,omitempty"`
	PalmTree *string `json:"palm_tree,omitempty"`
	PalmsUpTogether *string `json:"palms_up_together,omitempty"`
	Panama *string `json:"panama,omitempty"`
	Pancakes *string `json:"pancakes,omitempty"`
	PandaFace *string `json:"panda_face,omitempty"`
	Paperclip *string `json:"paperclip,omitempty"`
	Paperclips *string `json:"paperclips,omitempty"`
	PapuaNewGuinea *string `json:"papua_new_guinea,omitempty"`
	Parachute *string `json:"parachute,omitempty"`
	Paraguay *string `json:"paraguay,omitempty"`
	ParasolOnGround *string `json:"parasol_on_ground,omitempty"`
	Parking *string `json:"parking,omitempty"`
	Parrot *string `json:"parrot,omitempty"`
	PartAlternationMark *string `json:"part_alternation_mark,omitempty"`
	PartlySunny *string `json:"partly_sunny,omitempty"`
	PartyingFace *string `json:"partying_face,omitempty"`
	PassengerShip *string `json:"passenger_ship,omitempty"`
	PassportControl *string `json:"passport_control,omitempty"`
	PauseButton *string `json:"pause_button,omitempty"`
	PawPrints *string `json:"paw_prints,omitempty"`
	PeaceSymbol *string `json:"peace_symbol,omitempty"`
	Peach *string `json:"peach,omitempty"`
	Peacock *string `json:"peacock,omitempty"`
	Peanuts *string `json:"peanuts,omitempty"`
	Pear *string `json:"pear,omitempty"`
	Pen *string `json:"pen,omitempty"`
	Pencil *string `json:"pencil,omitempty"`
	Pencil2 *string `json:"pencil2,omitempty"`
	Penguin *string `json:"penguin,omitempty"`
	Pensive *string `json:"pensive,omitempty"`
	PeopleHoldingHands *string `json:"people_holding_hands,omitempty"`
	PeopleHugging *string `json:"people_hugging,omitempty"`
	PerformingArts *string `json:"performing_arts,omitempty"`
	Persevere *string `json:"persevere,omitempty"`
	PersonBald *string `json:"person_bald,omitempty"`
	PersonCurlyHair *string `json:"person_curly_hair,omitempty"`
	PersonFeedingBaby *string `json:"person_feeding_baby,omitempty"`
	PersonFencing *string `json:"person_fencing,omitempty"`
	PersonInManualWheelchair *string `json:"person_in_manual_wheelchair,omitempty"`
	PersonInMotorizedWheelchair *string `json:"person_in_motorized_wheelchair,omitempty"`
	PersonInTuxedo *string `json:"person_in_tuxedo,omitempty"`
	PersonRedHair *string `json:"person_red_hair,omitempty"`
	PersonWhiteHair *string `json:"person_white_hair,omitempty"`
	PersonWithProbingCane *string `json:"person_with_probing_cane,omitempty"`
	PersonWithTurban *string `json:"person_with_turban,omitempty"`
	PersonWithVeil *string `json:"person_with_veil,omitempty"`
	Peru *string `json:"peru,omitempty"`
	PetriDish *string `json:"petri_dish,omitempty"`
	Philippines *string `json:"philippines,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Pick *string `json:"pick,omitempty"`
	PickupTruck *string `json:"pickup_truck,omitempty"`
	Pie *string `json:"pie,omitempty"`
	Pig *string `json:"pig,omitempty"`
	Pig2 *string `json:"pig2,omitempty"`
	PigNose *string `json:"pig_nose,omitempty"`
	Pill *string `json:"pill,omitempty"`
	Pilot *string `json:"pilot,omitempty"`
	Pinata *string `json:"pinata,omitempty"`
	PinchedFingers *string `json:"pinched_fingers,omitempty"`
	PinchingHand *string `json:"pinching_hand,omitempty"`
	Pineapple *string `json:"pineapple,omitempty"`
	PingPong *string `json:"ping_pong,omitempty"`
	PirateFlag *string `json:"pirate_flag,omitempty"`
	Pisces *string `json:"pisces,omitempty"`
	PitcairnIslands *string `json:"pitcairn_islands,omitempty"`
	Pizza *string `json:"pizza,omitempty"`
	Placard *string `json:"placard,omitempty"`
	PlaceOfWorship *string `json:"place_of_worship,omitempty"`
	PlateWithCutlery *string `json:"plate_with_cutlery,omitempty"`
	PlayOrPauseButton *string `json:"play_or_pause_button,omitempty"`
	PleadingFace *string `json:"pleading_face,omitempty"`
	Plunger *string `json:"plunger,omitempty"`
	PointDown *string `json:"point_down,omitempty"`
	PointLeft *string `json:"point_left,omitempty"`
	PointRight *string `json:"point_right,omitempty"`
	PointUp *string `json:"point_up,omitempty"`
	PointUp2 *string `json:"point_up_2,omitempty"`
	Poland *string `json:"poland,omitempty"`
	PolarBear *string `json:"polar_bear,omitempty"`
	PoliceCar *string `json:"police_car,omitempty"`
	PoliceOfficer *string `json:"police_officer,omitempty"`
	Policeman *string `json:"policeman,omitempty"`
	Policewoman *string `json:"policewoman,omitempty"`
	Poodle *string `json:"poodle,omitempty"`
	Poop *string `json:"poop,omitempty"`
	Popcorn *string `json:"popcorn,omitempty"`
	Portugal *string `json:"portugal,omitempty"`
	PostOffice *string `json:"post_office,omitempty"`
	PostalHorn *string `json:"postal_horn,omitempty"`
	Postbox *string `json:"postbox,omitempty"`
	PotableWater *string `json:"potable_water,omitempty"`
	Potato *string `json:"potato,omitempty"`
	PottedPlant *string `json:"potted_plant,omitempty"`
	Pouch *string `json:"pouch,omitempty"`
	PoultryLeg *string `json:"poultry_leg,omitempty"`
	Pound *string `json:"pound,omitempty"`
	Pout *string `json:"pout,omitempty"`
	PoutingCat *string `json:"pouting_cat,omitempty"`
	PoutingFace *string `json:"pouting_face,omitempty"`
	PoutingMan *string `json:"pouting_man,omitempty"`
	PoutingWoman *string `json:"pouting_woman,omitempty"`
	Pray *string `json:"pray,omitempty"`
	PrayerBeads *string `json:"prayer_beads,omitempty"`
	PregnantWoman *string `json:"pregnant_woman,omitempty"`
	Pretzel *string `json:"pretzel,omitempty"`
	PreviousTrackButton *string `json:"previous_track_button,omitempty"`
	Prince *string `json:"prince,omitempty"`
	Princess *string `json:"princess,omitempty"`
	Printer *string `json:"printer,omitempty"`
	ProbingCane *string `json:"probing_cane,omitempty"`
	PuertoRico *string `json:"puerto_rico,omitempty"`
	Punch *string `json:"punch,omitempty"`
	PurpleCircle *string `json:"purple_circle,omitempty"`
	PurpleHeart *string `json:"purple_heart,omitempty"`
	PurpleSquare *string `json:"purple_square,omitempty"`
	Purse *string `json:"purse,omitempty"`
	Pushpin *string `json:"pushpin,omitempty"`
	PutLitterInItsPlace *string `json:"put_litter_in_its_place,omitempty"`
	Qatar *string `json:"qatar,omitempty"`
	Question *string `json:"question,omitempty"`
	Rabbit *string `json:"rabbit,omitempty"`
	Rabbit2 *string `json:"rabbit2,omitempty"`
	Raccoon *string `json:"raccoon,omitempty"`
	Racehorse *string `json:"racehorse,omitempty"`
	RacingCar *string `json:"racing_car,omitempty"`
	Radio *string `json:"radio,omitempty"`
	RadioButton *string `json:"radio_button,omitempty"`
	Radioactive *string `json:"radioactive,omitempty"`
	Rage *string `json:"rage,omitempty"`
	Rage1 *string `json:"rage1,omitempty"`
	Rage2 *string `json:"rage2,omitempty"`
	Rage3 *string `json:"rage3,omitempty"`
	Rage4 *string `json:"rage4,omitempty"`
	RailwayCar *string `json:"railway_car,omitempty"`
	RailwayTrack *string `json:"railway_track,omitempty"`
	Rainbow *string `json:"rainbow,omitempty"`
	RainbowFlag *string `json:"rainbow_flag,omitempty"`
	RaisedBackOfHand *string `json:"raised_back_of_hand,omitempty"`
	RaisedEyebrow *string `json:"raised_eyebrow,omitempty"`
	RaisedHand *string `json:"raised_hand,omitempty"`
	RaisedHandWithFingersSplayed *string `json:"raised_hand_with_fingers_splayed,omitempty"`
	RaisedHands *string `json:"raised_hands,omitempty"`
	RaisingHand *string `json:"raising_hand,omitempty"`
	RaisingHandMan *string `json:"raising_hand_man,omitempty"`
	RaisingHandWoman *string `json:"raising_hand_woman,omitempty"`
	Ram *string `json:"ram,omitempty"`
	Ramen *string `json:"ramen,omitempty"`
	Rat *string `json:"rat,omitempty"`
	Razor *string `json:"razor,omitempty"`
	Receipt *string `json:"receipt,omitempty"`
	RecordButton *string `json:"record_button,omitempty"`
	Recycle *string `json:"recycle,omitempty"`
	RedCar *string `json:"red_car,omitempty"`
	RedCircle *string `json:"red_circle,omitempty"`
	RedEnvelope *string `json:"red_envelope,omitempty"`
	RedHairedMan *string `json:"red_haired_man,omitempty"`
	RedHairedWoman *string `json:"red_haired_woman,omitempty"`
	RedSquare *string `json:"red_square,omitempty"`
	Registered *string `json:"registered,omitempty"`
	Relaxed *string `json:"relaxed,omitempty"`
	Relieved *string `json:"relieved,omitempty"`
	ReminderRibbon *string `json:"reminder_ribbon,omitempty"`
	Repeat *string `json:"repeat,omitempty"`
	RepeatOne *string `json:"repeat_one,omitempty"`
	RescueWorkerHelmet *string `json:"rescue_worker_helmet,omitempty"`
	Restroom *string `json:"restroom,omitempty"`
	Reunion *string `json:"reunion,omitempty"`
	RevolvingHearts *string `json:"revolving_hearts,omitempty"`
	Rewind *string `json:"rewind,omitempty"`
	Rhinoceros *string `json:"rhinoceros,omitempty"`
	Ribbon *string `json:"ribbon,omitempty"`
	Rice *string `json:"rice,omitempty"`
	RiceBall *string `json:"rice_ball,omitempty"`
	RiceCracker *string `json:"rice_cracker,omitempty"`
	RiceScene *string `json:"rice_scene,omitempty"`
	RightAngerBubble *string `json:"right_anger_bubble,omitempty"`
	Ring *string `json:"ring,omitempty"`
	RingedPlanet *string `json:"ringed_planet,omitempty"`
	Robot *string `json:"robot,omitempty"`
	Rock *string `json:"rock,omitempty"`
	Rocket *string `json:"rocket,omitempty"`
	Rofl *string `json:"rofl,omitempty"`
	RollEyes *string `json:"roll_eyes,omitempty"`
	RollOfPaper *string `json:"roll_of_paper,omitempty"`
	RollerCoaster *string `json:"roller_coaster,omitempty"`
	RollerSkate *string `json:"roller_skate,omitempty"`
	Romania *string `json:"romania,omitempty"`
	Rooster *string `json:"rooster,omitempty"`
	Rose *string `json:"rose,omitempty"`
	Rosette *string `json:"rosette,omitempty"`
	RotatingLight *string `json:"rotating_light,omitempty"`
	RoundPushpin *string `json:"round_pushpin,omitempty"`
	Rowboat *string `json:"rowboat,omitempty"`
	RowingMan *string `json:"rowing_man,omitempty"`
	RowingWoman *string `json:"rowing_woman,omitempty"`
	Ru *string `json:"ru,omitempty"`
	RugbyFootball *string `json:"rugby_football,omitempty"`
	Runner *string `json:"runner,omitempty"`
	Running *string `json:"running,omitempty"`
	RunningMan *string `json:"running_man,omitempty"`
	RunningShirtWithSash *string `json:"running_shirt_with_sash,omitempty"`
	RunningWoman *string `json:"running_woman,omitempty"`
	Rwanda *string `json:"rwanda,omitempty"`
	Sa *string `json:"sa,omitempty"`
	SafetyPin *string `json:"safety_pin,omitempty"`
	SafetyVest *string `json:"safety_vest,omitempty"`
	Sagittarius *string `json:"sagittarius,omitempty"`
	Sailboat *string `json:"sailboat,omitempty"`
	Sake *string `json:"sake,omitempty"`
	Salt *string `json:"salt,omitempty"`
	Samoa *string `json:"samoa,omitempty"`
	SanMarino *string `json:"san_marino,omitempty"`
	Sandal *string `json:"sandal,omitempty"`
	Sandwich *string `json:"sandwich,omitempty"`
	Santa *string `json:"santa,omitempty"`
	SaoTomePrincipe *string `json:"sao_tome_principe,omitempty"`
	Sari *string `json:"sari,omitempty"`
	SassyMan *string `json:"sassy_man,omitempty"`
	SassyWoman *string `json:"sassy_woman,omitempty"`
	Satellite *string `json:"satellite,omitempty"`
	Satisfied *string `json:"satisfied,omitempty"`
	SaudiArabia *string `json:"saudi_arabia,omitempty"`
	SaunaMan *string `json:"sauna_man,omitempty"`
	SaunaPerson *string `json:"sauna_person,omitempty"`
	SaunaWoman *string `json:"sauna_woman,omitempty"`
	Sauropod *string `json:"sauropod,omitempty"`
	Saxophone *string `json:"saxophone,omitempty"`
	Scarf *string `json:"scarf,omitempty"`
	School *string `json:"school,omitempty"`
	SchoolSatchel *string `json:"school_satchel,omitempty"`
	Scientist *string `json:"scientist,omitempty"`
	Scissors *string `json:"scissors,omitempty"`
	Scorpion *string `json:"scorpion,omitempty"`
	Scorpius *string `json:"scorpius,omitempty"`
	Scotland *string `json:"scotland,omitempty"`
	Scream *string `json:"scream,omitempty"`
	ScreamCat *string `json:"scream_cat,omitempty"`
	Screwdriver *string `json:"screwdriver,omitempty"`
	Scroll *string `json:"scroll,omitempty"`
	Seal *string `json:"seal,omitempty"`
	Seat *string `json:"seat,omitempty"`
	Secret *string `json:"secret,omitempty"`
	SeeNoEvil *string `json:"see_no_evil,omitempty"`
	Seedling *string `json:"seedling,omitempty"`
	Selfie *string `json:"selfie,omitempty"`
	Senegal *string `json:"senegal,omitempty"`
	Serbia *string `json:"serbia,omitempty"`
	ServiceDog *string `json:"service_dog,omitempty"`
	Seven *string `json:"seven,omitempty"`
	SewingNeedle *string `json:"sewing_needle,omitempty"`
	Seychelles *string `json:"seychelles,omitempty"`
	ShallowPanOfFood *string `json:"shallow_pan_of_food,omitempty"`
	Shamrock *string `json:"shamrock,omitempty"`
	Shark *string `json:"shark,omitempty"`
	ShavedIce *string `json:"shaved_ice,omitempty"`
	Sheep *string `json:"sheep,omitempty"`
	Shell *string `json:"shell,omitempty"`
	Shield *string `json:"shield,omitempty"`
	ShintoShrine *string `json:"shinto_shrine,omitempty"`
	Ship *string `json:"ship,omitempty"`
	Shipit *string `json:"shipit,omitempty"`
	Shirt *string `json:"shirt,omitempty"`
	Shoe *string `json:"shoe,omitempty"`
	Shopping *string `json:"shopping,omitempty"`
	ShoppingCart *string `json:"shopping_cart,omitempty"`
	Shorts *string `json:"shorts,omitempty"`
	Shower *string `json:"shower,omitempty"`
	Shrimp *string `json:"shrimp,omitempty"`
	Shrug *string `json:"shrug,omitempty"`
	ShushingFace *string `json:"shushing_face,omitempty"`
	SierraLeone *string `json:"sierra_leone,omitempty"`
	SignalStrength *string `json:"signal_strength,omitempty"`
	Singapore *string `json:"singapore,omitempty"`
	Singer *string `json:"singer,omitempty"`
	SintMaarten *string `json:"sint_maarten,omitempty"`
	Six *string `json:"six,omitempty"`
	SixPointedStar *string `json:"six_pointed_star,omitempty"`
	Skateboard *string `json:"skateboard,omitempty"`
	Ski *string `json:"ski,omitempty"`
	Skier *string `json:"skier,omitempty"`
	Skull *string `json:"skull,omitempty"`
	SkullAndCrossbones *string `json:"skull_and_crossbones,omitempty"`
	Skunk *string `json:"skunk,omitempty"`
	Sled *string `json:"sled,omitempty"`
	Sleeping *string `json:"sleeping,omitempty"`
	SleepingBed *string `json:"sleeping_bed,omitempty"`
	Sleepy *string `json:"sleepy,omitempty"`
	SlightlyFrowningFace *string `json:"slightly_frowning_face,omitempty"`
	SlightlySmilingFace *string `json:"slightly_smiling_face,omitempty"`
	SlotMachine *string `json:"slot_machine,omitempty"`
	Sloth *string `json:"sloth,omitempty"`
	Slovakia *string `json:"slovakia,omitempty"`
	Slovenia *string `json:"slovenia,omitempty"`
	SmallAirplane *string `json:"small_airplane,omitempty"`
	SmallBlueDiamond *string `json:"small_blue_diamond,omitempty"`
	SmallOrangeDiamond *string `json:"small_orange_diamond,omitempty"`
	SmallRedTriangle *string `json:"small_red_triangle,omitempty"`
	SmallRedTriangleDown *string `json:"small_red_triangle_down,omitempty"`
	Smile *string `json:"smile,omitempty"`
	SmileCat *string `json:"smile_cat,omitempty"`
	Smiley *string `json:"smiley,omitempty"`
	SmileyCat *string `json:"smiley_cat,omitempty"`
	SmilingFaceWithTear *string `json:"smiling_face_with_tear,omitempty"`
	SmilingFaceWithThreeHearts *string `json:"smiling_face_with_three_hearts,omitempty"`
	SmilingImp *string `json:"smiling_imp,omitempty"`
	Smirk *string `json:"smirk,omitempty"`
	SmirkCat *string `json:"smirk_cat,omitempty"`
	Smoking *string `json:"smoking,omitempty"`
	Snail *string `json:"snail,omitempty"`
	Snake *string `json:"snake,omitempty"`
	SneezingFace *string `json:"sneezing_face,omitempty"`
	Snowboarder *string `json:"snowboarder,omitempty"`
	Snowflake *string `json:"snowflake,omitempty"`
	Snowman *string `json:"snowman,omitempty"`
	SnowmanWithSnow *string `json:"snowman_with_snow,omitempty"`
	Soap *string `json:"soap,omitempty"`
	Sob *string `json:"sob,omitempty"`
	Soccer *string `json:"soccer,omitempty"`
	Socks *string `json:"socks,omitempty"`
	Softball *string `json:"softball,omitempty"`
	SolomonIslands *string `json:"solomon_islands,omitempty"`
	Somalia *string `json:"somalia,omitempty"`
	Soon *string `json:"soon,omitempty"`
	Sos *string `json:"sos,omitempty"`
	Sound *string `json:"sound,omitempty"`
	SouthAfrica *string `json:"south_africa,omitempty"`
	SouthGeorgiaSouthSandwichIslands *string `json:"south_georgia_south_sandwich_islands,omitempty"`
	SouthSudan *string `json:"south_sudan,omitempty"`
	SpaceInvader *string `json:"space_invader,omitempty"`
	Spades *string `json:"spades,omitempty"`
	Spaghetti *string `json:"spaghetti,omitempty"`
	Sparkle *string `json:"sparkle,omitempty"`
	Sparkler *string `json:"sparkler,omitempty"`
	Sparkles *string `json:"sparkles,omitempty"`
	SparklingHeart *string `json:"sparkling_heart,omitempty"`
	SpeakNoEvil *string `json:"speak_no_evil,omitempty"`
	Speaker *string `json:"speaker,omitempty"`
	SpeakingHead *string `json:"speaking_head,omitempty"`
	SpeechBalloon *string `json:"speech_balloon,omitempty"`
	Speedboat *string `json:"speedboat,omitempty"`
	Spider *string `json:"spider,omitempty"`
	SpiderWeb *string `json:"spider_web,omitempty"`
	SpiralCalendar *string `json:"spiral_calendar,omitempty"`
	SpiralNotepad *string `json:"spiral_notepad,omitempty"`
	Sponge *string `json:"sponge,omitempty"`
	Spoon *string `json:"spoon,omitempty"`
	Squid *string `json:"squid,omitempty"`
	SriLanka *string `json:"sri_lanka,omitempty"`
	StBarthelemy *string `json:"st_barthelemy,omitempty"`
	StHelena *string `json:"st_helena,omitempty"`
	StKittsNevis *string `json:"st_kitts_nevis,omitempty"`
	StLucia *string `json:"st_lucia,omitempty"`
	StMartin *string `json:"st_martin,omitempty"`
	StPierreMiquelon *string `json:"st_pierre_miquelon,omitempty"`
	StVincentGrenadines *string `json:"st_vincent_grenadines,omitempty"`
	Stadium *string `json:"stadium,omitempty"`
	StandingMan *string `json:"standing_man,omitempty"`
	StandingPerson *string `json:"standing_person,omitempty"`
	StandingWoman *string `json:"standing_woman,omitempty"`
	Star *string `json:"star,omitempty"`
	Star2 *string `json:"star2,omitempty"`
	StarAndCrescent *string `json:"star_and_crescent,omitempty"`
	StarOfDavid *string `json:"star_of_david,omitempty"`
	StarStruck *string `json:"star_struck,omitempty"`
	Stars *string `json:"stars,omitempty"`
	Station *string `json:"station,omitempty"`
	StatueOfLiberty *string `json:"statue_of_liberty,omitempty"`
	SteamLocomotive *string `json:"steam_locomotive,omitempty"`
	Stethoscope *string `json:"stethoscope,omitempty"`
	Stew *string `json:"stew,omitempty"`
	StopButton *string `json:"stop_button,omitempty"`
	StopSign *string `json:"stop_sign,omitempty"`
	Stopwatch *string `json:"stopwatch,omitempty"`
	StraightRuler *string `json:"straight_ruler,omitempty"`
	Strawberry *string `json:"strawberry,omitempty"`
	StuckOutTongue *string `json:"stuck_out_tongue,omitempty"`
	StuckOutTongueClosedEyes *string `json:"stuck_out_tongue_closed_eyes,omitempty"`
	StuckOutTongueWinkingEye *string `json:"stuck_out_tongue_winking_eye,omitempty"`
	Student *string `json:"student,omitempty"`
	StudioMicrophone *string `json:"studio_microphone,omitempty"`
	StuffedFlatbread *string `json:"stuffed_flatbread,omitempty"`
	Sudan *string `json:"sudan,omitempty"`
	SunBehindLargeCloud *string `json:"sun_behind_large_cloud,omitempty"`
	SunBehindRainCloud *string `json:"sun_behind_rain_cloud,omitempty"`
	SunBehindSmallCloud *string `json:"sun_behind_small_cloud,omitempty"`
	SunWithFace *string `json:"sun_with_face,omitempty"`
	Sunflower *string `json:"sunflower,omitempty"`
	Sunglasses *string `json:"sunglasses,omitempty"`
	Sunny *string `json:"sunny,omitempty"`
	Sunrise *string `json:"sunrise,omitempty"`
	SunriseOverMountains *string `json:"sunrise_over_mountains,omitempty"`
	Superhero *string `json:"superhero,omitempty"`
	SuperheroMan *string `json:"superhero_man,omitempty"`
	SuperheroWoman *string `json:"superhero_woman,omitempty"`
	Supervillain *string `json:"supervillain,omitempty"`
	SupervillainMan *string `json:"supervillain_man,omitempty"`
	SupervillainWoman *string `json:"supervillain_woman,omitempty"`
	Surfer *string `json:"surfer,omitempty"`
	SurfingMan *string `json:"surfing_man,omitempty"`
	SurfingWoman *string `json:"surfing_woman,omitempty"`
	Suriname *string `json:"suriname,omitempty"`
	Sushi *string `json:"sushi,omitempty"`
	Suspect *string `json:"suspect,omitempty"`
	SuspensionRailway *string `json:"suspension_railway,omitempty"`
	SvalbardJanMayen *string `json:"svalbard_jan_mayen,omitempty"`
	Swan *string `json:"swan,omitempty"`
	Swaziland *string `json:"swaziland,omitempty"`
	Sweat *string `json:"sweat,omitempty"`
	SweatDrops *string `json:"sweat_drops,omitempty"`
	SweatSmile *string `json:"sweat_smile,omitempty"`
	Sweden *string `json:"sweden,omitempty"`
	SweetPotato *string `json:"sweet_potato,omitempty"`
	SwimBrief *string `json:"swim_brief,omitempty"`
	Swimmer *string `json:"swimmer,omitempty"`
	SwimmingMan *string `json:"swimming_man,omitempty"`
	SwimmingWoman *string `json:"swimming_woman,omitempty"`
	Switzerland *string `json:"switzerland,omitempty"`
	Symbols *string `json:"symbols,omitempty"`
	Synagogue *string `json:"synagogue,omitempty"`
	Syria *string `json:"syria,omitempty"`
	Syringe *string `json:"syringe,omitempty"`
	Taco *string `json:"taco,omitempty"`
	Tada *string `json:"tada,omitempty"`
	Taiwan *string `json:"taiwan,omitempty"`
	Tajikistan *string `json:"tajikistan,omitempty"`
	TakeoutBox *string `json:"takeout_box,omitempty"`
	Tamale *string `json:"tamale,omitempty"`
	TanabataTree *string `json:"tanabata_tree,omitempty"`
	Tangerine *string `json:"tangerine,omitempty"`
	Tanzania *string `json:"tanzania,omitempty"`
	Taurus *string `json:"taurus,omitempty"`
	Taxi *string `json:"taxi,omitempty"`
	Tea *string `json:"tea,omitempty"`
	Teacher *string `json:"teacher,omitempty"`
	Teapot *string `json:"teapot,omitempty"`
	Technologist *string `json:"technologist,omitempty"`
	TeddyBear *string `json:"teddy_bear,omitempty"`
	Telephone *string `json:"telephone,omitempty"`
	TelephoneReceiver *string `json:"telephone_receiver,omitempty"`
	Telescope *string `json:"telescope,omitempty"`
	Tennis *string `json:"tennis,omitempty"`
	Tent *string `json:"tent,omitempty"`
	TestTube *string `json:"test_tube,omitempty"`
	Thailand *string `json:"thailand,omitempty"`
	Thermometer *string `json:"thermometer,omitempty"`
	Thinking *string `json:"thinking,omitempty"`
	ThongSandal *string `json:"thong_sandal,omitempty"`
	ThoughtBalloon *string `json:"thought_balloon,omitempty"`
	Thread *string `json:"thread,omitempty"`
	Three *string `json:"three,omitempty"`
	Thumbsdown *string `json:"thumbsdown,omitempty"`
	Thumbsup *string `json:"thumbsup,omitempty"`
	Ticket *string `json:"ticket,omitempty"`
	Tickets *string `json:"tickets,omitempty"`
	Tiger *string `json:"tiger,omitempty"`
	Tiger2 *string `json:"tiger2,omitempty"`
	TimerClock *string `json:"timer_clock,omitempty"`
	TimorLeste *string `json:"timor_leste,omitempty"`
	TippingHandMan *string `json:"tipping_hand_man,omitempty"`
	TippingHandPerson *string `json:"tipping_hand_person,omitempty"`
	TippingHandWoman *string `json:"tipping_hand_woman,omitempty"`
	TiredFace *string `json:"tired_face,omitempty"`
	Tm *string `json:"tm,omitempty"`
	Togo *string `json:"togo,omitempty"`
	Toilet *string `json:"toilet,omitempty"`
	Tokelau *string `json:"tokelau,omitempty"`
	TokyoTower *string `json:"tokyo_tower,omitempty"`
	Tomato *string `json:"tomato,omitempty"`
	Tonga *string `json:"tonga,omitempty"`
	Tongue *string `json:"tongue,omitempty"`
	Toolbox *string `json:"toolbox,omitempty"`
	Tooth *string `json:"tooth,omitempty"`
	Toothbrush *string `json:"toothbrush,omitempty"`
	Top *string `json:"top,omitempty"`
	Tophat *string `json:"tophat,omitempty"`
	Tornado *string `json:"tornado,omitempty"`
	Tr *string `json:"tr,omitempty"`
	Trackball *string `json:"trackball,omitempty"`
	Tractor *string `json:"tractor,omitempty"`
	TrafficLight *string `json:"traffic_light,omitempty"`
	Train *string `json:"train,omitempty"`
	Train2 *string `json:"train2,omitempty"`
	Tram *string `json:"tram,omitempty"`
	TransgenderFlag *string `json:"transgender_flag,omitempty"`
	TransgenderSymbol *string `json:"transgender_symbol,omitempty"`
	Trex *string `json:"trex,omitempty"`
	TriangularFlagOnPost *string `json:"triangular_flag_on_post,omitempty"`
	TriangularRuler *string `json:"triangular_ruler,omitempty"`
	Trident *string `json:"trident,omitempty"`
	TrinidadTobago *string `json:"trinidad_tobago,omitempty"`
	TristanDaCunha *string `json:"tristan_da_cunha,omitempty"`
	Triumph *string `json:"triumph,omitempty"`
	Trolleybus *string `json:"trolleybus,omitempty"`
	Trollface *string `json:"trollface,omitempty"`
	Trophy *string `json:"trophy,omitempty"`
	TropicalDrink *string `json:"tropical_drink,omitempty"`
	TropicalFish *string `json:"tropical_fish,omitempty"`
	Truck *string `json:"truck,omitempty"`
	Trumpet *string `json:"trumpet,omitempty"`
	Tshirt *string `json:"tshirt,omitempty"`
	Tulip *string `json:"tulip,omitempty"`
	TumblerGlass *string `json:"tumbler_glass,omitempty"`
	Tunisia *string `json:"tunisia,omitempty"`
	Turkey *string `json:"turkey,omitempty"`
	Turkmenistan *string `json:"turkmenistan,omitempty"`
	TurksCaicosIslands *string `json:"turks_caicos_islands,omitempty"`
	Turtle *string `json:"turtle,omitempty"`
	Tuvalu *string `json:"tuvalu,omitempty"`
	Tv *string `json:"tv,omitempty"`
	TwistedRightwardsArrows *string `json:"twisted_rightwards_arrows,omitempty"`
	Two *string `json:"two,omitempty"`
	TwoHearts *string `json:"two_hearts,omitempty"`
	TwoMenHoldingHands *string `json:"two_men_holding_hands,omitempty"`
	TwoWomenHoldingHands *string `json:"two_women_holding_hands,omitempty"`
	U5272 *string `json:"u5272,omitempty"`
	U5408 *string `json:"u5408,omitempty"`
	U55b6 *string `json:"u55b6,omitempty"`
	U6307 *string `json:"u6307,omitempty"`
	U6708 *string `json:"u6708,omitempty"`
	U6709 *string `json:"u6709,omitempty"`
	U6e80 *string `json:"u6e80,omitempty"`
	U7121 *string `json:"u7121,omitempty"`
	U7533 *string `json:"u7533,omitempty"`
	U7981 *string `json:"u7981,omitempty"`
	U7a7a *string `json:"u7a7a,omitempty"`
	Uganda *string `json:"uganda,omitempty"`
	Uk *string `json:"uk,omitempty"`
	Ukraine *string `json:"ukraine,omitempty"`
	Umbrella *string `json:"umbrella,omitempty"`
	Unamused *string `json:"unamused,omitempty"`
	Underage *string `json:"underage,omitempty"`
	Unicorn *string `json:"unicorn,omitempty"`
	UnitedArabEmirates *string `json:"united_arab_emirates,omitempty"`
	UnitedNations *string `json:"united_nations,omitempty"`
	Unlock *string `json:"unlock,omitempty"`
	Up *string `json:"up,omitempty"`
	UpsideDownFace *string `json:"upside_down_face,omitempty"`
	Uruguay *string `json:"uruguay,omitempty"`
	Us *string `json:"us,omitempty"`
	UsOutlyingIslands *string `json:"us_outlying_islands,omitempty"`
	UsVirginIslands *string `json:"us_virgin_islands,omitempty"`
	Uzbekistan *string `json:"uzbekistan,omitempty"`
	V *string `json:"v,omitempty"`
	Vampire *string `json:"vampire,omitempty"`
	VampireMan *string `json:"vampire_man,omitempty"`
	VampireWoman *string `json:"vampire_woman,omitempty"`
	Vanuatu *string `json:"vanuatu,omitempty"`
	VaticanCity *string `json:"vatican_city,omitempty"`
	Venezuela *string `json:"venezuela,omitempty"`
	VerticalTrafficLight *string `json:"vertical_traffic_light,omitempty"`
	Vhs *string `json:"vhs,omitempty"`
	VibrationMode *string `json:"vibration_mode,omitempty"`
	VideoCamera *string `json:"video_camera,omitempty"`
	VideoGame *string `json:"video_game,omitempty"`
	Vietnam *string `json:"vietnam,omitempty"`
	Violin *string `json:"violin,omitempty"`
	Virgo *string `json:"virgo,omitempty"`
	Volcano *string `json:"volcano,omitempty"`
	Volleyball *string `json:"volleyball,omitempty"`
	VomitingFace *string `json:"vomiting_face,omitempty"`
	Vs *string `json:"vs,omitempty"`
	VulcanSalute *string `json:"vulcan_salute,omitempty"`
	Waffle *string `json:"waffle,omitempty"`
	Wales *string `json:"wales,omitempty"`
	Walking *string `json:"walking,omitempty"`
	WalkingMan *string `json:"walking_man,omitempty"`
	WalkingWoman *string `json:"walking_woman,omitempty"`
	WallisFutuna *string `json:"wallis_futuna,omitempty"`
	WaningCrescentMoon *string `json:"waning_crescent_moon,omitempty"`
	WaningGibbousMoon *string `json:"waning_gibbous_moon,omitempty"`
	Warning *string `json:"warning,omitempty"`
	Wastebasket *string `json:"wastebasket,omitempty"`
	Watch *string `json:"watch,omitempty"`
	WaterBuffalo *string `json:"water_buffalo,omitempty"`
	WaterPolo *string `json:"water_polo,omitempty"`
	Watermelon *string `json:"watermelon,omitempty"`
	Wave *string `json:"wave,omitempty"`
	WavyDash *string `json:"wavy_dash,omitempty"`
	WaxingCrescentMoon *string `json:"waxing_crescent_moon,omitempty"`
	WaxingGibbousMoon *string `json:"waxing_gibbous_moon,omitempty"`
	Wc *string `json:"wc,omitempty"`
	Weary *string `json:"weary,omitempty"`
	Wedding *string `json:"wedding,omitempty"`
	WeightLifting *string `json:"weight_lifting,omitempty"`
	WeightLiftingMan *string `json:"weight_lifting_man,omitempty"`
	WeightLiftingWoman *string `json:"weight_lifting_woman,omitempty"`
	WesternSahara *string `json:"western_sahara,omitempty"`
	Whale *string `json:"whale,omitempty"`
	Whale2 *string `json:"whale2,omitempty"`
	WheelOfDharma *string `json:"wheel_of_dharma,omitempty"`
	Wheelchair *string `json:"wheelchair,omitempty"`
	WhiteCheckMark *string `json:"white_check_mark,omitempty"`
	WhiteCircle *string `json:"white_circle,omitempty"`
	WhiteFlag *string `json:"white_flag,omitempty"`
	WhiteFlower *string `json:"white_flower,omitempty"`
	WhiteHairedMan *string `json:"white_haired_man,omitempty"`
	WhiteHairedWoman *string `json:"white_haired_woman,omitempty"`
	WhiteHeart *string `json:"white_heart,omitempty"`
	WhiteLargeSquare *string `json:"white_large_square,omitempty"`
	WhiteMediumSmallSquare *string `json:"white_medium_small_square,omitempty"`
	WhiteMediumSquare *string `json:"white_medium_square,omitempty"`
	WhiteSmallSquare *string `json:"white_small_square,omitempty"`
	WhiteSquareButton *string `json:"white_square_button,omitempty"`
	WiltedFlower *string `json:"wilted_flower,omitempty"`
	WindChime *string `json:"wind_chime,omitempty"`
	WindFace *string `json:"wind_face,omitempty"`
	Window *string `json:"window,omitempty"`
	WineGlass *string `json:"wine_glass,omitempty"`
	Wink *string `json:"wink,omitempty"`
	Wolf *string `json:"wolf,omitempty"`
	Woman *string `json:"woman,omitempty"`
	WomanArtist *string `json:"woman_artist,omitempty"`
	WomanAstronaut *string `json:"woman_astronaut,omitempty"`
	WomanBeard *string `json:"woman_beard,omitempty"`
	WomanCartwheeling *string `json:"woman_cartwheeling,omitempty"`
	WomanCook *string `json:"woman_cook,omitempty"`
	WomanDancing *string `json:"woman_dancing,omitempty"`
	WomanFacepalming *string `json:"woman_facepalming,omitempty"`
	WomanFactoryWorker *string `json:"woman_factory_worker,omitempty"`
	WomanFarmer *string `json:"woman_farmer,omitempty"`
	WomanFeedingBaby *string `json:"woman_feeding_baby,omitempty"`
	WomanFirefighter *string `json:"woman_firefighter,omitempty"`
	WomanHealthWorker *string `json:"woman_health_worker,omitempty"`
	WomanInManualWheelchair *string `json:"woman_in_manual_wheelchair,omitempty"`
	WomanInMotorizedWheelchair *string `json:"woman_in_motorized_wheelchair,omitempty"`
	WomanInTuxedo *string `json:"woman_in_tuxedo,omitempty"`
	WomanJudge *string `json:"woman_judge,omitempty"`
	WomanJuggling *string `json:"woman_juggling,omitempty"`
	WomanMechanic *string `json:"woman_mechanic,omitempty"`
	WomanOfficeWorker *string `json:"woman_office_worker,omitempty"`
	WomanPilot *string `json:"woman_pilot,omitempty"`
	WomanPlayingHandball *string `json:"woman_playing_handball,omitempty"`
	WomanPlayingWaterPolo *string `json:"woman_playing_water_polo,omitempty"`
	WomanScientist *string `json:"woman_scientist,omitempty"`
	WomanShrugging *string `json:"woman_shrugging,omitempty"`
	WomanSinger *string `json:"woman_singer,omitempty"`
	WomanStudent *string `json:"woman_student,omitempty"`
	WomanTeacher *string `json:"woman_teacher,omitempty"`
	WomanTechnologist *string `json:"woman_technologist,omitempty"`
	WomanWithHeadscarf *string `json:"woman_with_headscarf,omitempty"`
	WomanWithProbingCane *string `json:"woman_with_probing_cane,omitempty"`
	WomanWithTurban *string `json:"woman_with_turban,omitempty"`
	WomanWithVeil *string `json:"woman_with_veil,omitempty"`
	WomansClothes *string `json:"womans_clothes,omitempty"`
	WomansHat *string `json:"womans_hat,omitempty"`
	WomenWrestling *string `json:"women_wrestling,omitempty"`
	Womens *string `json:"womens,omitempty"`
	Wood *string `json:"wood,omitempty"`
	WoozyFace *string `json:"woozy_face,omitempty"`
	WorldMap *string `json:"world_map,omitempty"`
	Worm *string `json:"worm,omitempty"`
	Worried *string `json:"worried,omitempty"`
	Wrench *string `json:"wrench,omitempty"`
	Wrestling *string `json:"wrestling,omitempty"`
	WritingHand *string `json:"writing_hand,omitempty"`
	X *string `json:"x,omitempty"`
	Yarn *string `json:"yarn,omitempty"`
	YawningFace *string `json:"yawning_face,omitempty"`
	YellowCircle *string `json:"yellow_circle,omitempty"`
	YellowHeart *string `json:"yellow_heart,omitempty"`
	YellowSquare *string `json:"yellow_square,omitempty"`
	Yemen *string `json:"yemen,omitempty"`
	Yen *string `json:"yen,omitempty"`
	YinYang *string `json:"yin_yang,omitempty"`
	YoYo *string `json:"yo_yo,omitempty"`
	Yum *string `json:"yum,omitempty"`
	Zambia *string `json:"zambia,omitempty"`
	ZanyFace *string `json:"zany_face,omitempty"`
	Zap *string `json:"zap,omitempty"`
	Zebra *string `json:"zebra,omitempty"`
	Zero *string `json:"zero,omitempty"`
	Zimbabwe *string `json:"zimbabwe,omitempty"`
	ZipperMouthFace *string `json:"zipper_mouth_face,omitempty"`
	Zombie *string `json:"zombie,omitempty"`
	ZombieMan *string `json:"zombie_man,omitempty"`
	ZombieWoman *string `json:"zombie_woman,omitempty"`
	Zzz *string `json:"zzz,omitempty"`
}

// EmptyObject is the typed data model for the empty_object entity.
type EmptyObject struct {
	Attestations *[]any `json:"attestations,omitempty"`
	EnableDebugLogging *bool `json:"enable_debug_logging,omitempty"`
	EncryptedValue string `json:"encrypted_value"`
	IncludeClaimKeys *[]any `json:"include_claim_keys,omitempty"`
	KeyId string `json:"key_id"`
	Languages *[]any `json:"languages,omitempty"`
	Name string `json:"name"`
	QuerySuite *string `json:"query_suite,omitempty"`
	RunnerLabel *string `json:"runner_label,omitempty"`
	RunnerType *string `json:"runner_type,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	State *string `json:"state,omitempty"`
	ThreatModel *string `json:"threat_model,omitempty"`
	UseDefault bool `json:"use_default"`
	Value string `json:"value"`
	Visibility string `json:"visibility"`
}

// EmptyObjectLoadMatch is the typed request payload for EmptyObject.LoadTyped.
type EmptyObjectLoadMatch struct {
	SubjectDigest string `json:"subject_digest"`
	Username string `json:"username"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	PredicateType *string `json:"predicate_type,omitempty"`
}

// EmptyObjectCreateData is the typed request payload for EmptyObject.CreateTyped.
type EmptyObjectCreateData struct {
	OrgId string `json:"org_id"`
	Attestations *[]any `json:"attestations,omitempty"`
	EnableDebugLogging *bool `json:"enable_debug_logging,omitempty"`
	EncryptedValue string `json:"encrypted_value"`
	IncludeClaimKeys *[]any `json:"include_claim_keys,omitempty"`
	KeyId string `json:"key_id"`
	Languages *[]any `json:"languages,omitempty"`
	Name string `json:"name"`
	QuerySuite *string `json:"query_suite,omitempty"`
	RunnerLabel *string `json:"runner_label,omitempty"`
	RunnerType *string `json:"runner_type,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	State *string `json:"state,omitempty"`
	ThreatModel *string `json:"threat_model,omitempty"`
	UseDefault bool `json:"use_default"`
	Value string `json:"value"`
	Visibility string `json:"visibility"`
}

// EmptyObjectUpdateData is the typed request payload for EmptyObject.UpdateTyped.
type EmptyObjectUpdateData struct {
	OrgId string `json:"org_id"`
	SecretName string `json:"secret_name"`
	Attestations *[]any `json:"attestations,omitempty"`
	EnableDebugLogging *bool `json:"enable_debug_logging,omitempty"`
	EncryptedValue *string `json:"encrypted_value,omitempty"`
	IncludeClaimKeys *[]any `json:"include_claim_keys,omitempty"`
	KeyId *string `json:"key_id,omitempty"`
	Languages *[]any `json:"languages,omitempty"`
	Name *string `json:"name,omitempty"`
	QuerySuite *string `json:"query_suite,omitempty"`
	RunnerLabel *string `json:"runner_label,omitempty"`
	RunnerType *string `json:"runner_type,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	State *string `json:"state,omitempty"`
	ThreatModel *string `json:"threat_model,omitempty"`
	UseDefault *bool `json:"use_default,omitempty"`
	Value *string `json:"value,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// EnterpriseTeam is the typed data model for the enterprise_team entity.
type EnterpriseTeam struct {
	CreatedAt string `json:"created_at"`
	Description *string `json:"description,omitempty"`
	GroupId string `json:"group_id"`
	GroupName *string `json:"group_name,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	MembersUrl string `json:"members_url"`
	Name string `json:"name"`
	OrganizationSelectionType *string `json:"organization_selection_type,omitempty"`
	Slug string `json:"slug"`
	SyncToOrganizations *string `json:"sync_to_organizations,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// EnterpriseTeamLoadMatch is the typed request payload for EnterpriseTeam.LoadTyped.
type EnterpriseTeamLoadMatch struct {
	Enterprise string `json:"enterprise"`
	Id string `json:"id"`
}

// EnterpriseTeamListMatch is the typed request payload for EnterpriseTeam.ListTyped.
type EnterpriseTeamListMatch struct {
	Enterprise string `json:"enterprise"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// EnterpriseTeamCreateData is the typed request payload for EnterpriseTeam.CreateTyped.
type EnterpriseTeamCreateData struct {
	Enterprise string `json:"enterprise"`
	CreatedAt string `json:"created_at"`
	Description *string `json:"description,omitempty"`
	GroupId string `json:"group_id"`
	GroupName *string `json:"group_name,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	MembersUrl string `json:"members_url"`
	Name string `json:"name"`
	OrganizationSelectionType *string `json:"organization_selection_type,omitempty"`
	Slug string `json:"slug"`
	SyncToOrganizations *string `json:"sync_to_organizations,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// EnterpriseTeamUpdateData is the typed request payload for EnterpriseTeam.UpdateTyped.
type EnterpriseTeamUpdateData struct {
	Enterprise string `json:"enterprise"`
	Id string `json:"id"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupName *string `json:"group_name,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	MembersUrl *string `json:"members_url,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationSelectionType *string `json:"organization_selection_type,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SyncToOrganizations *string `json:"sync_to_organizations,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// EnterpriseTeamRemoveMatch is the typed request payload for EnterpriseTeam.RemoveTyped.
type EnterpriseTeamRemoveMatch struct {
	Enterprise string `json:"enterprise"`
	Id string `json:"id"`
}

// EnterpriseTeamMembership is the typed data model for the enterprise_team_membership entity.
type EnterpriseTeamMembership struct {
	Id *string `json:"id,omitempty"`
}

// EnterpriseTeamMembershipRemoveMatch is the typed request payload for EnterpriseTeamMembership.RemoveTyped.
type EnterpriseTeamMembershipRemoveMatch struct {
	Enterprise string `json:"enterprise"`
	Id string `json:"id"`
	TeamId string `json:"team_id"`
}

// Environment is the typed data model for the environment entity.
type Environment struct {
	CreatedAt string `json:"created_at"`
	DeploymentBranchPolicy map[string]any `json:"deployment_branch_policy"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	PreventSelfReview *bool `json:"prevent_self_review,omitempty"`
	ProtectionRules *[]any `json:"protection_rules,omitempty"`
	Reviewers *[]any `json:"reviewers,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	WaitTimer *int `json:"wait_timer,omitempty"`
}

// EnvironmentLoadMatch is the typed request payload for Environment.LoadTyped.
type EnvironmentLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// EnvironmentUpdateData is the typed request payload for Environment.UpdateTyped.
type EnvironmentUpdateData struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	CreatedAt *string `json:"created_at,omitempty"`
	DeploymentBranchPolicy *map[string]any `json:"deployment_branch_policy,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	PreventSelfReview *bool `json:"prevent_self_review,omitempty"`
	ProtectionRules *[]any `json:"protection_rules,omitempty"`
	Reviewers *[]any `json:"reviewers,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	WaitTimer *int `json:"wait_timer,omitempty"`
}

// EnvironmentApproval is the typed data model for the environment_approval entity.
type EnvironmentApproval struct {
	Comment string `json:"comment"`
	Environments []any `json:"environments"`
	State string `json:"state"`
	User map[string]any `json:"user"`
}

// EnvironmentApprovalListMatch is the typed request payload for EnvironmentApproval.ListTyped.
type EnvironmentApprovalListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	RunId int `json:"run_id"`
}

// Event is the typed data model for the event entity.
type Event struct {
	Actor map[string]any `json:"actor"`
	CreatedAt string `json:"created_at"`
	Id string `json:"id"`
	Org map[string]any `json:"org"`
	Payload map[string]any `json:"payload"`
	Public bool `json:"public"`
	Repo map[string]any `json:"repo"`
	Type string `json:"type"`
}

// EventLoadMatch is the typed request payload for Event.LoadTyped.
type EventLoadMatch struct {
	Org string `json:"org"`
	Username string `json:"username"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// EventListMatch is the typed request payload for Event.ListTyped.
type EventListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Feed is the typed data model for the feed entity.
type Feed struct {
	CurrentUserActorUrl *string `json:"current_user_actor_url,omitempty"`
	CurrentUserOrganizationUrl *string `json:"current_user_organization_url,omitempty"`
	CurrentUserOrganizationUrls *[]any `json:"current_user_organization_urls,omitempty"`
	CurrentUserPublicUrl *string `json:"current_user_public_url,omitempty"`
	CurrentUserUrl *string `json:"current_user_url,omitempty"`
	Links map[string]any `json:"links"`
	RepositoryDiscussionsCategoryUrl *string `json:"repository_discussions_category_url,omitempty"`
	RepositoryDiscussionsUrl *string `json:"repository_discussions_url,omitempty"`
	SecurityAdvisoriesUrl *string `json:"security_advisories_url,omitempty"`
	TimelineUrl string `json:"timeline_url"`
	UserUrl string `json:"user_url"`
}

// FeedListMatch is the typed request payload for Feed.ListTyped.
type FeedListMatch struct {
	CurrentUserActorUrl *string `json:"current_user_actor_url,omitempty"`
	CurrentUserOrganizationUrl *string `json:"current_user_organization_url,omitempty"`
	CurrentUserOrganizationUrls *[]any `json:"current_user_organization_urls,omitempty"`
	CurrentUserPublicUrl *string `json:"current_user_public_url,omitempty"`
	CurrentUserUrl *string `json:"current_user_url,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	RepositoryDiscussionsCategoryUrl *string `json:"repository_discussions_category_url,omitempty"`
	RepositoryDiscussionsUrl *string `json:"repository_discussions_url,omitempty"`
	SecurityAdvisoriesUrl *string `json:"security_advisories_url,omitempty"`
	TimelineUrl *string `json:"timeline_url,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// FileCommit is the typed data model for the file_commit entity.
type FileCommit struct {
	Author map[string]any `json:"author"`
	Branch *string `json:"branch,omitempty"`
	Commit map[string]any `json:"commit"`
	Committer map[string]any `json:"committer"`
	Content map[string]any `json:"content"`
	Message string `json:"message"`
	Sha *string `json:"sha,omitempty"`
}

// FileCommitUpdateData is the typed request payload for FileCommit.UpdateTyped.
type FileCommitUpdateData struct {
	Owner string `json:"owner"`
	Path string `json:"path"`
	Repo string `json:"repo"`
	Author *map[string]any `json:"author,omitempty"`
	Branch *string `json:"branch,omitempty"`
	Commit *map[string]any `json:"commit,omitempty"`
	Committer *map[string]any `json:"committer,omitempty"`
	Content *map[string]any `json:"content,omitempty"`
	Message *string `json:"message,omitempty"`
	Sha *string `json:"sha,omitempty"`
}

// FileCommitRemoveMatch is the typed request payload for FileCommit.RemoveTyped.
type FileCommitRemoveMatch struct {
	Owner string `json:"owner"`
	Path string `json:"path"`
	Repo string `json:"repo"`
}

// Follower is the typed data model for the follower entity.
type Follower struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// FollowerListMatch is the typed request payload for Follower.ListTyped.
type FollowerListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Following is the typed data model for the following entity.
type Following struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// FollowingListMatch is the typed request payload for Following.ListTyped.
type FollowingListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// FullRepository is the typed data model for the full_repository entity.
type FullRepository struct {
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	ArchiveUrl string `json:"archive_url"`
	Archived bool `json:"archived"`
	AssigneesUrl string `json:"assignees_url"`
	AutoInit *bool `json:"auto_init,omitempty"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	CloneUrl string `json:"clone_url"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt string `json:"created_at"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch string `json:"default_branch"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled bool `json:"disabled"`
	DownloadsUrl string `json:"downloads_url"`
	EventsUrl string `json:"events_url"`
	Fork bool `json:"fork"`
	Forks int `json:"forks"`
	ForksCount int `json:"forks_count"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl string `json:"git_url"`
	GithubId int `json:"github_id"`
	GitignoreTemplate *string `json:"gitignore_template,omitempty"`
	HasDiscussions bool `json:"has_discussions"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues bool `json:"has_issues"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasWiki bool `json:"has_wiki"`
	Homepage string `json:"homepage"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id string `json:"id"`
	IncludeAllBranches *bool `json:"include_all_branches,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language string `json:"language"`
	LanguagesUrl string `json:"languages_url"`
	License map[string]any `json:"license"`
	LicenseTemplate *string `json:"license_template,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl string `json:"mirror_url"`
	Name string `json:"name"`
	NetworkCount int `json:"network_count"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues int `json:"open_issues"`
	OpenIssuesCount int `json:"open_issues_count"`
	Organization map[string]any `json:"organization"`
	Owner map[string]any `json:"owner"`
	Parent map[string]any `json:"parent"`
	Permissions map[string]any `json:"permissions"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	PushedAt string `json:"pushed_at"`
	ReleasesUrl string `json:"releases_url"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	Size int `json:"size"`
	Source map[string]any `json:"source"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl string `json:"ssh_url"`
	StargazersCount int `json:"stargazers_count"`
	StargazersUrl string `json:"stargazers_url"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersCount int `json:"subscribers_count"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl string `json:"svn_url"`
	TagsUrl string `json:"tags_url"`
	TeamId *int `json:"team_id,omitempty"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	TemplateRepository map[string]any `json:"template_repository"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers int `json:"watchers"`
	WatchersCount int `json:"watchers_count"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// FullRepositoryLoadMatch is the typed request payload for FullRepository.LoadTyped.
type FullRepositoryLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// FullRepositoryCreateData is the typed request payload for FullRepository.CreateTyped.
type FullRepositoryCreateData struct {
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	ArchiveUrl string `json:"archive_url"`
	Archived bool `json:"archived"`
	AssigneesUrl string `json:"assignees_url"`
	AutoInit *bool `json:"auto_init,omitempty"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	CloneUrl string `json:"clone_url"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt string `json:"created_at"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch string `json:"default_branch"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled bool `json:"disabled"`
	DownloadsUrl string `json:"downloads_url"`
	EventsUrl string `json:"events_url"`
	Fork bool `json:"fork"`
	Forks int `json:"forks"`
	ForksCount int `json:"forks_count"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl string `json:"git_url"`
	GithubId int `json:"github_id"`
	GitignoreTemplate *string `json:"gitignore_template,omitempty"`
	HasDiscussions bool `json:"has_discussions"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues bool `json:"has_issues"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasWiki bool `json:"has_wiki"`
	Homepage string `json:"homepage"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id string `json:"id"`
	IncludeAllBranches *bool `json:"include_all_branches,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language string `json:"language"`
	LanguagesUrl string `json:"languages_url"`
	License map[string]any `json:"license"`
	LicenseTemplate *string `json:"license_template,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl string `json:"mirror_url"`
	Name string `json:"name"`
	NetworkCount int `json:"network_count"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues int `json:"open_issues"`
	OpenIssuesCount int `json:"open_issues_count"`
	Organization map[string]any `json:"organization"`
	Owner map[string]any `json:"owner"`
	Parent map[string]any `json:"parent"`
	Permissions map[string]any `json:"permissions"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	PushedAt string `json:"pushed_at"`
	ReleasesUrl string `json:"releases_url"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	Size int `json:"size"`
	Source map[string]any `json:"source"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl string `json:"ssh_url"`
	StargazersCount int `json:"stargazers_count"`
	StargazersUrl string `json:"stargazers_url"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersCount int `json:"subscribers_count"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl string `json:"svn_url"`
	TagsUrl string `json:"tags_url"`
	TeamId *int `json:"team_id,omitempty"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	TemplateRepository map[string]any `json:"template_repository"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers int `json:"watchers"`
	WatchersCount int `json:"watchers_count"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// FullRepositoryUpdateData is the typed request payload for FullRepository.UpdateTyped.
type FullRepositoryUpdateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl *string `json:"assignees_url,omitempty"`
	AutoInit *bool `json:"auto_init,omitempty"`
	BlobsUrl *string `json:"blobs_url,omitempty"`
	BranchesUrl *string `json:"branches_url,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct *map[string]any `json:"code_of_conduct,omitempty"`
	CollaboratorsUrl *string `json:"collaborators_url,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CompareUrl *string `json:"compare_url,omitempty"`
	ContentsUrl *string `json:"contents_url,omitempty"`
	ContributorsUrl *string `json:"contributors_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl *string `json:"deployments_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DownloadsUrl *string `json:"downloads_url,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	Fork *bool `json:"fork,omitempty"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	GitCommitsUrl *string `json:"git_commits_url,omitempty"`
	GitRefsUrl *string `json:"git_refs_url,omitempty"`
	GitTagsUrl *string `json:"git_tags_url,omitempty"`
	GitUrl *string `json:"git_url,omitempty"`
	GithubId *int `json:"github_id,omitempty"`
	GitignoreTemplate *string `json:"gitignore_template,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl *string `json:"hooks_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	IncludeAllBranches *bool `json:"include_all_branches,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl *string `json:"issue_comment_url,omitempty"`
	IssueEventsUrl *string `json:"issue_events_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	KeysUrl *string `json:"keys_url,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl *string `json:"languages_url,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	LicenseTemplate *string `json:"license_template,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl *string `json:"merges_url,omitempty"`
	MilestonesUrl *string `json:"milestones_url,omitempty"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationsUrl *string `json:"notifications_url,omitempty"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private *bool `json:"private,omitempty"`
	PullsUrl *string `json:"pulls_url,omitempty"`
	PushedAt *string `json:"pushed_at,omitempty"`
	ReleasesUrl *string `json:"releases_url,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	Size *int `json:"size,omitempty"`
	Source *map[string]any `json:"source,omitempty"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl *string `json:"stargazers_url,omitempty"`
	StatusesUrl *string `json:"statuses_url,omitempty"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl *string `json:"subscribers_url,omitempty"`
	SubscriptionUrl *string `json:"subscription_url,omitempty"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl *string `json:"tags_url,omitempty"`
	TeamId *int `json:"team_id,omitempty"`
	TeamsUrl *string `json:"teams_url,omitempty"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	TemplateRepository *map[string]any `json:"template_repository,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl *string `json:"trees_url,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// Gist is the typed data model for the gist entity.
type Gist struct {
	Comments *int `json:"comments,omitempty"`
	CommentsEnabled *bool `json:"comments_enabled,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Files *map[string]any `json:"files,omitempty"`
	ForkOf map[string]any `json:"fork_of"`
	Forks *[]any `json:"forks,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	GitPullUrl *string `json:"git_pull_url,omitempty"`
	GitPushUrl *string `json:"git_push_url,omitempty"`
	History *[]any `json:"history,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Owner map[string]any `json:"owner"`
	Public *bool `json:"public,omitempty"`
	Truncated *bool `json:"truncated,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *string `json:"user,omitempty"`
}

// GistLoadMatch is the typed request payload for Gist.LoadTyped.
type GistLoadMatch struct {
	Id string `json:"id"`
}

// GistListMatch is the typed request payload for Gist.ListTyped.
type GistListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Since *string `json:"since,omitempty"`
}

// GistCreateData is the typed request payload for Gist.CreateTyped.
type GistCreateData struct {
	Comments *int `json:"comments,omitempty"`
	CommentsEnabled *bool `json:"comments_enabled,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Files *map[string]any `json:"files,omitempty"`
	ForkOf map[string]any `json:"fork_of"`
	Forks *[]any `json:"forks,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	GitPullUrl *string `json:"git_pull_url,omitempty"`
	GitPushUrl *string `json:"git_push_url,omitempty"`
	History *[]any `json:"history,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Owner map[string]any `json:"owner"`
	Public *bool `json:"public,omitempty"`
	Truncated *bool `json:"truncated,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *string `json:"user,omitempty"`
}

// GistUpdateData is the typed request payload for Gist.UpdateTyped.
type GistUpdateData struct {
	Id string `json:"id"`
	Comments *int `json:"comments,omitempty"`
	CommentsEnabled *bool `json:"comments_enabled,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Files *map[string]any `json:"files,omitempty"`
	ForkOf *map[string]any `json:"fork_of,omitempty"`
	Forks *[]any `json:"forks,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	GitPullUrl *string `json:"git_pull_url,omitempty"`
	GitPushUrl *string `json:"git_push_url,omitempty"`
	History *[]any `json:"history,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Public *bool `json:"public,omitempty"`
	Truncated *bool `json:"truncated,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *string `json:"user,omitempty"`
}

// GistRemoveMatch is the typed request payload for Gist.RemoveTyped.
type GistRemoveMatch struct {
	CommentId *int `json:"comment_id,omitempty"`
	Id string `json:"id"`
}

// GistComment is the typed data model for the gist_comment entity.
type GistComment struct {
	AuthorAssociation string `json:"author_association"`
	AvatarUrl string `json:"avatar_url"`
	Body string `json:"body"`
	CreatedAt string `json:"created_at"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// GistCommentLoadMatch is the typed request payload for GistComment.LoadTyped.
type GistCommentLoadMatch struct {
	GistId string `json:"gist_id"`
	Id int `json:"id"`
}

// GistCommentListMatch is the typed request payload for GistComment.ListTyped.
type GistCommentListMatch struct {
	Id string `json:"id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// GistCommentCreateData is the typed request payload for GistComment.CreateTyped.
type GistCommentCreateData struct {
	Id string `json:"id"`
	AuthorAssociation string `json:"author_association"`
	AvatarUrl string `json:"avatar_url"`
	Body string `json:"body"`
	CreatedAt string `json:"created_at"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// GistCommentUpdateData is the typed request payload for GistComment.UpdateTyped.
type GistCommentUpdateData struct {
	GistId string `json:"gist_id"`
	Id int `json:"id"`
	AuthorAssociation *string `json:"author_association,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Body *string `json:"body,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Login *string `json:"login,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// GistCommit is the typed data model for the gist_commit entity.
type GistCommit struct {
	ChangeStatus map[string]any `json:"change_status"`
	CommittedAt string `json:"committed_at"`
	Id *string `json:"id,omitempty"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
	Version string `json:"version"`
}

// GistCommitListMatch is the typed request payload for GistCommit.ListTyped.
type GistCommitListMatch struct {
	Id string `json:"id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// GistSimple is the typed data model for the gist_simple entity.
type GistSimple struct {
	Comments *int `json:"comments,omitempty"`
	CommentsEnabled *bool `json:"comments_enabled,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Files *map[string]any `json:"files,omitempty"`
	ForkOf map[string]any `json:"fork_of"`
	Forks *[]any `json:"forks,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	GitPullUrl *string `json:"git_pull_url,omitempty"`
	GitPushUrl *string `json:"git_push_url,omitempty"`
	History *[]any `json:"history,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Owner map[string]any `json:"owner"`
	Public *bool `json:"public,omitempty"`
	Truncated *bool `json:"truncated,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *string `json:"user,omitempty"`
}

// GistSimpleListMatch is the typed request payload for GistSimple.ListTyped.
type GistSimpleListMatch struct {
	Id string `json:"id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Git is the typed data model for the git entity.
type Git struct {
}

// GitRemoveMatch is the typed request payload for Git.RemoveTyped.
type GitRemoveMatch struct {
	Owner string `json:"owner"`
	Ref string `json:"ref"`
	Repo string `json:"repo"`
}

// GitCommit is the typed data model for the git_commit entity.
type GitCommit struct {
	Author map[string]any `json:"author"`
	Committer map[string]any `json:"committer"`
	HtmlUrl string `json:"html_url"`
	Id *string `json:"id,omitempty"`
	Message string `json:"message"`
	NodeId string `json:"node_id"`
	Parents []any `json:"parents"`
	Sha string `json:"sha"`
	Signature *string `json:"signature,omitempty"`
	Tree map[string]any `json:"tree"`
	Url string `json:"url"`
	Verification map[string]any `json:"verification"`
}

// GitCommitLoadMatch is the typed request payload for GitCommit.LoadTyped.
type GitCommitLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// GitCommitCreateData is the typed request payload for GitCommit.CreateTyped.
type GitCommitCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Author map[string]any `json:"author"`
	Committer map[string]any `json:"committer"`
	HtmlUrl string `json:"html_url"`
	Id *string `json:"id,omitempty"`
	Message string `json:"message"`
	NodeId string `json:"node_id"`
	Parents []any `json:"parents"`
	Sha string `json:"sha"`
	Signature *string `json:"signature,omitempty"`
	Tree map[string]any `json:"tree"`
	Url string `json:"url"`
	Verification map[string]any `json:"verification"`
}

// GitRef is the typed data model for the git_ref entity.
type GitRef struct {
	Force *bool `json:"force,omitempty"`
	Id *string `json:"id,omitempty"`
	NodeId string `json:"node_id"`
	Object map[string]any `json:"object"`
	Ref string `json:"ref"`
	Sha string `json:"sha"`
	Type string `json:"type"`
	Url string `json:"url"`
}

// GitRefLoadMatch is the typed request payload for GitRef.LoadTyped.
type GitRefLoadMatch struct {
	Id *string `json:"id,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Ref *string `json:"ref,omitempty"`
}

// GitRefCreateData is the typed request payload for GitRef.CreateTyped.
type GitRefCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Force *bool `json:"force,omitempty"`
	Id *string `json:"id,omitempty"`
	NodeId string `json:"node_id"`
	Object map[string]any `json:"object"`
	Ref string `json:"ref"`
	Sha string `json:"sha"`
	Type string `json:"type"`
	Url string `json:"url"`
}

// GitRefUpdateData is the typed request payload for GitRef.UpdateTyped.
type GitRefUpdateData struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Force *bool `json:"force,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Object *map[string]any `json:"object,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
}

// GitTag is the typed data model for the git_tag entity.
type GitTag struct {
	Id *string `json:"id,omitempty"`
	Message string `json:"message"`
	NodeId string `json:"node_id"`
	Object map[string]any `json:"object"`
	Sha string `json:"sha"`
	Tag string `json:"tag"`
	Tagger map[string]any `json:"tagger"`
	Type string `json:"type"`
	Url string `json:"url"`
	Verification map[string]any `json:"verification"`
}

// GitTagLoadMatch is the typed request payload for GitTag.LoadTyped.
type GitTagLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// GitTagCreateData is the typed request payload for GitTag.CreateTyped.
type GitTagCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Id *string `json:"id,omitempty"`
	Message string `json:"message"`
	NodeId string `json:"node_id"`
	Object map[string]any `json:"object"`
	Sha string `json:"sha"`
	Tag string `json:"tag"`
	Tagger map[string]any `json:"tagger"`
	Type string `json:"type"`
	Url string `json:"url"`
	Verification map[string]any `json:"verification"`
}

// GitTree is the typed data model for the git_tree entity.
type GitTree struct {
	BaseTree *string `json:"base_tree,omitempty"`
	Id *string `json:"id,omitempty"`
	Sha string `json:"sha"`
	Tree []any `json:"tree"`
	Truncated bool `json:"truncated"`
	Url *string `json:"url,omitempty"`
}

// GitTreeLoadMatch is the typed request payload for GitTree.LoadTyped.
type GitTreeLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Recursive *string `json:"recursive,omitempty"`
}

// GitTreeCreateData is the typed request payload for GitTree.CreateTyped.
type GitTreeCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	BaseTree *string `json:"base_tree,omitempty"`
	Id *string `json:"id,omitempty"`
	Sha string `json:"sha"`
	Tree []any `json:"tree"`
	Truncated bool `json:"truncated"`
	Url *string `json:"url,omitempty"`
}

// Gitignore is the typed data model for the gitignore entity.
type Gitignore struct {
}

// GitignoreListMatch is the typed request payload for Gitignore.ListTyped.
type GitignoreListMatch struct {
}

// GitignoreTemplate is the typed data model for the gitignore_template entity.
type GitignoreTemplate struct {
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Source string `json:"source"`
}

// GitignoreTemplateLoadMatch is the typed request payload for GitignoreTemplate.LoadTyped.
type GitignoreTemplateLoadMatch struct {
	Id string `json:"id"`
}

// GlobalAdvisory is the typed data model for the global_advisory entity.
type GlobalAdvisory struct {
	Credits []any `json:"credits"`
	CveId string `json:"cve_id"`
	Cvss map[string]any `json:"cvss"`
	CvssSeverities *map[string]any `json:"cvss_severities,omitempty"`
	Cwes []any `json:"cwes"`
	Description string `json:"description"`
	Epss *map[string]any `json:"epss,omitempty"`
	GhsaId string `json:"ghsa_id"`
	GithubReviewedAt string `json:"github_reviewed_at"`
	HtmlUrl string `json:"html_url"`
	Id *string `json:"id,omitempty"`
	Identifiers []any `json:"identifiers"`
	NvdPublishedAt string `json:"nvd_published_at"`
	PublishedAt string `json:"published_at"`
	References []any `json:"references"`
	RepositoryAdvisoryUrl string `json:"repository_advisory_url"`
	Severity string `json:"severity"`
	SourceCodeLocation string `json:"source_code_location"`
	Summary string `json:"summary"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	Vulnerabilities []any `json:"vulnerabilities"`
	WithdrawnAt string `json:"withdrawn_at"`
}

// GlobalAdvisoryLoadMatch is the typed request payload for GlobalAdvisory.LoadTyped.
type GlobalAdvisoryLoadMatch struct {
	Id string `json:"id"`
}

// GlobalAdvisoryListMatch is the typed request payload for GlobalAdvisory.ListTyped.
type GlobalAdvisoryListMatch struct {
	Affect *any `json:"affect,omitempty"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	CveId *string `json:"cve_id,omitempty"`
	Cwe *any `json:"cwe,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Ecosystem *string `json:"ecosystem,omitempty"`
	EpssPercentage *string `json:"epss_percentage,omitempty"`
	EpssPercentile *string `json:"epss_percentile,omitempty"`
	GhsaId *string `json:"ghsa_id,omitempty"`
	IsWithdrawn *bool `json:"is_withdrawn,omitempty"`
	Modified *string `json:"modified,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Published *string `json:"published,omitempty"`
	Severity *string `json:"severity,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *string `json:"updated,omitempty"`
}

// GpgKey is the typed data model for the gpg_key entity.
type GpgKey struct {
	ArmoredPublicKey string `json:"armored_public_key"`
	CanCertify bool `json:"can_certify"`
	CanEncryptComms bool `json:"can_encrypt_comms"`
	CanEncryptStorage bool `json:"can_encrypt_storage"`
	CanSign bool `json:"can_sign"`
	CreatedAt string `json:"created_at"`
	Emails []any `json:"emails"`
	ExpiresAt string `json:"expires_at"`
	Id int `json:"id"`
	KeyId string `json:"key_id"`
	Name *string `json:"name,omitempty"`
	PrimaryKeyId int `json:"primary_key_id"`
	PublicKey string `json:"public_key"`
	RawKey string `json:"raw_key"`
	Revoked bool `json:"revoked"`
	Subkeys []any `json:"subkeys"`
}

// GpgKeyLoadMatch is the typed request payload for GpgKey.LoadTyped.
type GpgKeyLoadMatch struct {
	Id int `json:"id"`
}

// GpgKeyListMatch is the typed request payload for GpgKey.ListTyped.
type GpgKeyListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// GpgKeyCreateData is the typed request payload for GpgKey.CreateTyped.
type GpgKeyCreateData struct {
	ArmoredPublicKey string `json:"armored_public_key"`
	CanCertify bool `json:"can_certify"`
	CanEncryptComms bool `json:"can_encrypt_comms"`
	CanEncryptStorage bool `json:"can_encrypt_storage"`
	CanSign bool `json:"can_sign"`
	CreatedAt string `json:"created_at"`
	Emails []any `json:"emails"`
	ExpiresAt string `json:"expires_at"`
	Id int `json:"id"`
	KeyId string `json:"key_id"`
	Name *string `json:"name,omitempty"`
	PrimaryKeyId int `json:"primary_key_id"`
	PublicKey string `json:"public_key"`
	RawKey string `json:"raw_key"`
	Revoked bool `json:"revoked"`
	Subkeys []any `json:"subkeys"`
}

// Hook is the typed data model for the hook entity.
type Hook struct {
	Active bool `json:"active"`
	AddEvents *[]any `json:"add_events,omitempty"`
	Config map[string]any `json:"config"`
	CreatedAt string `json:"created_at"`
	DeliveriesUrl *string `json:"deliveries_url,omitempty"`
	Events []any `json:"events"`
	Id int `json:"id"`
	LastResponse map[string]any `json:"last_response"`
	Name string `json:"name"`
	PingUrl string `json:"ping_url"`
	RemoveEvents *[]any `json:"remove_events,omitempty"`
	TestUrl string `json:"test_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// HookLoadMatch is the typed request payload for Hook.LoadTyped.
type HookLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// HookListMatch is the typed request payload for Hook.ListTyped.
type HookListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// HookCreateData is the typed request payload for Hook.CreateTyped.
type HookCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Active bool `json:"active"`
	AddEvents *[]any `json:"add_events,omitempty"`
	Config map[string]any `json:"config"`
	CreatedAt string `json:"created_at"`
	DeliveriesUrl *string `json:"deliveries_url,omitempty"`
	Events []any `json:"events"`
	Id int `json:"id"`
	LastResponse map[string]any `json:"last_response"`
	Name string `json:"name"`
	PingUrl string `json:"ping_url"`
	RemoveEvents *[]any `json:"remove_events,omitempty"`
	TestUrl string `json:"test_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// HookUpdateData is the typed request payload for Hook.UpdateTyped.
type HookUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Active *bool `json:"active,omitempty"`
	AddEvents *[]any `json:"add_events,omitempty"`
	Config *map[string]any `json:"config,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DeliveriesUrl *string `json:"deliveries_url,omitempty"`
	Events *[]any `json:"events,omitempty"`
	LastResponse *map[string]any `json:"last_response,omitempty"`
	Name *string `json:"name,omitempty"`
	PingUrl *string `json:"ping_url,omitempty"`
	RemoveEvents *[]any `json:"remove_events,omitempty"`
	TestUrl *string `json:"test_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// HookDelivery is the typed data model for the hook_delivery entity.
type HookDelivery struct {
	Action string `json:"action"`
	DeliveredAt string `json:"delivered_at"`
	Duration float64 `json:"duration"`
	Event string `json:"event"`
	Guid string `json:"guid"`
	Id int `json:"id"`
	InstallationId int `json:"installation_id"`
	Redelivery bool `json:"redelivery"`
	RepositoryId int `json:"repository_id"`
	Request map[string]any `json:"request"`
	Response map[string]any `json:"response"`
	Status string `json:"status"`
	StatusCode int `json:"status_code"`
	ThrottledAt *string `json:"throttled_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// HookDeliveryLoadMatch is the typed request payload for HookDelivery.LoadTyped.
type HookDeliveryLoadMatch struct {
	HookId *int `json:"hook_id,omitempty"`
	Id int `json:"id"`
	Owner *string `json:"owner,omitempty"`
	Repo *string `json:"repo,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
}

// HookDeliveryItem is the typed data model for the hook_delivery_item entity.
type HookDeliveryItem struct {
	Action string `json:"action"`
	DeliveredAt string `json:"delivered_at"`
	Duration float64 `json:"duration"`
	Event string `json:"event"`
	Guid string `json:"guid"`
	Id int `json:"id"`
	InstallationId int `json:"installation_id"`
	Redelivery bool `json:"redelivery"`
	RepositoryId int `json:"repository_id"`
	Status string `json:"status"`
	StatusCode int `json:"status_code"`
	ThrottledAt *string `json:"throttled_at,omitempty"`
}

// HookDeliveryItemListMatch is the typed request payload for HookDeliveryItem.ListTyped.
type HookDeliveryItemListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// HostedCompute is the typed data model for the hosted_compute entity.
type HostedCompute struct {
	ComputeService *string `json:"compute_service,omitempty"`
	CreatedOn string `json:"created_on"`
	Id string `json:"id"`
	Name string `json:"name"`
	NetworkSettingsIds *[]any `json:"network_settings_ids,omitempty"`
}

// HostedComputeListMatch is the typed request payload for HostedCompute.ListTyped.
type HostedComputeListMatch struct {
	OrgId string `json:"org_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// HostedComputeRemoveMatch is the typed request payload for HostedCompute.RemoveTyped.
type HostedComputeRemoveMatch struct {
	NetworkConfigurationId string `json:"network_configuration_id"`
	OrgId string `json:"org_id"`
}

// Hovercard is the typed data model for the hovercard entity.
type Hovercard struct {
	Message string `json:"message"`
	Octicon string `json:"octicon"`
}

// HovercardListMatch is the typed request payload for Hovercard.ListTyped.
type HovercardListMatch struct {
	Username string `json:"username"`
	SubjectId *string `json:"subject_id,omitempty"`
	SubjectType *string `json:"subject_type,omitempty"`
}

// Import is the typed data model for the import entity.
type Import struct {
	AuthorsCount *int `json:"authors_count,omitempty"`
	AuthorsUrl string `json:"authors_url"`
	CommitCount *int `json:"commit_count,omitempty"`
	ErrorMessage *string `json:"error_message,omitempty"`
	FailedStep *string `json:"failed_step,omitempty"`
	HasLargeFiles *bool `json:"has_large_files,omitempty"`
	HtmlUrl string `json:"html_url"`
	HumanName *string `json:"human_name,omitempty"`
	ImportPercent *int `json:"import_percent,omitempty"`
	LargeFilesCount *int `json:"large_files_count,omitempty"`
	LargeFilesSize *int `json:"large_files_size,omitempty"`
	Message *string `json:"message,omitempty"`
	ProjectChoices *[]any `json:"project_choices,omitempty"`
	PushPercent *int `json:"push_percent,omitempty"`
	RepositoryUrl string `json:"repository_url"`
	Status string `json:"status"`
	StatusText *string `json:"status_text,omitempty"`
	SvcRoot *string `json:"svc_root,omitempty"`
	SvnRoot *string `json:"svn_root,omitempty"`
	TfvcProject *string `json:"tfvc_project,omitempty"`
	Url string `json:"url"`
	UseLfs *bool `json:"use_lfs,omitempty"`
	Vcs string `json:"vcs"`
	VcsPassword *string `json:"vcs_password,omitempty"`
	VcsUrl string `json:"vcs_url"`
	VcsUsername *string `json:"vcs_username,omitempty"`
}

// ImportListMatch is the typed request payload for Import.ListTyped.
type ImportListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ImportUpdateData is the typed request payload for Import.UpdateTyped.
type ImportUpdateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AuthorsCount *int `json:"authors_count,omitempty"`
	AuthorsUrl *string `json:"authors_url,omitempty"`
	CommitCount *int `json:"commit_count,omitempty"`
	ErrorMessage *string `json:"error_message,omitempty"`
	FailedStep *string `json:"failed_step,omitempty"`
	HasLargeFiles *bool `json:"has_large_files,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	HumanName *string `json:"human_name,omitempty"`
	ImportPercent *int `json:"import_percent,omitempty"`
	LargeFilesCount *int `json:"large_files_count,omitempty"`
	LargeFilesSize *int `json:"large_files_size,omitempty"`
	Message *string `json:"message,omitempty"`
	ProjectChoices *[]any `json:"project_choices,omitempty"`
	PushPercent *int `json:"push_percent,omitempty"`
	RepositoryUrl *string `json:"repository_url,omitempty"`
	Status *string `json:"status,omitempty"`
	StatusText *string `json:"status_text,omitempty"`
	SvcRoot *string `json:"svc_root,omitempty"`
	SvnRoot *string `json:"svn_root,omitempty"`
	TfvcProject *string `json:"tfvc_project,omitempty"`
	Url *string `json:"url,omitempty"`
	UseLfs *bool `json:"use_lfs,omitempty"`
	Vcs *string `json:"vcs,omitempty"`
	VcsPassword *string `json:"vcs_password,omitempty"`
	VcsUrl *string `json:"vcs_url,omitempty"`
	VcsUsername *string `json:"vcs_username,omitempty"`
}

// Installation is the typed data model for the installation entity.
type Installation struct {
	AccessTokensUrl string `json:"access_tokens_url"`
	Account any `json:"account"`
	AppId int `json:"app_id"`
	AppSlug string `json:"app_slug"`
	ClientId *string `json:"client_id,omitempty"`
	ContactEmail *string `json:"contact_email,omitempty"`
	CreatedAt string `json:"created_at"`
	Events []any `json:"events"`
	HasMultipleSingleFiles *bool `json:"has_multiple_single_files,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Permissions map[string]any `json:"permissions"`
	RepositoriesUrl string `json:"repositories_url"`
	RepositorySelection string `json:"repository_selection"`
	SingleFileName string `json:"single_file_name"`
	SingleFilePaths *[]any `json:"single_file_paths,omitempty"`
	SuspendedAt string `json:"suspended_at"`
	SuspendedBy map[string]any `json:"suspended_by"`
	TargetId int `json:"target_id"`
	TargetType string `json:"target_type"`
	UpdatedAt string `json:"updated_at"`
}

// InstallationLoadMatch is the typed request payload for Installation.LoadTyped.
type InstallationLoadMatch struct {
	Id int `json:"id"`
}

// InstallationListMatch is the typed request payload for Installation.ListTyped.
type InstallationListMatch struct {
	Outdated *string `json:"outdated,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Since *string `json:"since,omitempty"`
}

// InstallationUpdateData is the typed request payload for Installation.UpdateTyped.
type InstallationUpdateData struct {
	Id int `json:"id"`
	AccessTokensUrl *string `json:"access_tokens_url,omitempty"`
	Account *any `json:"account,omitempty"`
	AppId *int `json:"app_id,omitempty"`
	AppSlug *string `json:"app_slug,omitempty"`
	ClientId *string `json:"client_id,omitempty"`
	ContactEmail *string `json:"contact_email,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Events *[]any `json:"events,omitempty"`
	HasMultipleSingleFiles *bool `json:"has_multiple_single_files,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	RepositoriesUrl *string `json:"repositories_url,omitempty"`
	RepositorySelection *string `json:"repository_selection,omitempty"`
	SingleFileName *string `json:"single_file_name,omitempty"`
	SingleFilePaths *[]any `json:"single_file_paths,omitempty"`
	SuspendedAt *string `json:"suspended_at,omitempty"`
	SuspendedBy *map[string]any `json:"suspended_by,omitempty"`
	TargetId *int `json:"target_id,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// InstallationRemoveMatch is the typed request payload for Installation.RemoveTyped.
type InstallationRemoveMatch struct {
	Id int `json:"id"`
}

// InstallationToken is the typed data model for the installation_token entity.
type InstallationToken struct {
	Id *string `json:"id,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Repositories *[]any `json:"repositories,omitempty"`
	RepositoryIds *[]any `json:"repository_ids,omitempty"`
}

// InstallationTokenCreateData is the typed request payload for InstallationToken.CreateTyped.
type InstallationTokenCreateData struct {
	Id int `json:"id"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Repositories *[]any `json:"repositories,omitempty"`
	RepositoryIds *[]any `json:"repository_ids,omitempty"`
}

// Integration is the typed data model for the integration entity.
type Integration struct {
	Apps []any `json:"apps"`
	ClientId *string `json:"client_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	Events []any `json:"events"`
	ExternalUrl string `json:"external_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	InstallationsCount *int `json:"installations_count,omitempty"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Owner any `json:"owner"`
	Permissions map[string]any `json:"permissions"`
	Slug *string `json:"slug,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// IntegrationLoadMatch is the typed request payload for Integration.LoadTyped.
type IntegrationLoadMatch struct {
	AppSlug string `json:"app_slug"`
}

// IntegrationListMatch is the typed request payload for Integration.ListTyped.
type IntegrationListMatch struct {
	Apps *[]any `json:"apps,omitempty"`
	ClientId *string `json:"client_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Events *[]any `json:"events,omitempty"`
	ExternalUrl *string `json:"external_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	InstallationsCount *int `json:"installations_count,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Owner *any `json:"owner,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Slug *string `json:"slug,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IntegrationCreateData is the typed request payload for Integration.CreateTyped.
type IntegrationCreateData struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Apps []any `json:"apps"`
	ClientId *string `json:"client_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	Events []any `json:"events"`
	ExternalUrl string `json:"external_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	InstallationsCount *int `json:"installations_count,omitempty"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Permissions map[string]any `json:"permissions"`
	Slug *string `json:"slug,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// IntegrationUpdateData is the typed request payload for Integration.UpdateTyped.
type IntegrationUpdateData struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Apps *[]any `json:"apps,omitempty"`
	ClientId *string `json:"client_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Events *[]any `json:"events,omitempty"`
	ExternalUrl *string `json:"external_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	InstallationsCount *int `json:"installations_count,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Slug *string `json:"slug,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IntegrationRemoveMatch is the typed request payload for Integration.RemoveTyped.
type IntegrationRemoveMatch struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// IntegrationInstallation is the typed data model for the integration_installation entity.
type IntegrationInstallation struct {
	Account any `json:"account"`
	CreatedAt string `json:"created_at"`
	Id int `json:"id"`
	NodeId *string `json:"node_id,omitempty"`
	Requester map[string]any `json:"requester"`
}

// IntegrationInstallationListMatch is the typed request payload for IntegrationInstallation.ListTyped.
type IntegrationInstallationListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Interaction is the typed data model for the interaction entity.
type Interaction struct {
	ExpiresAt *string `json:"expires_at,omitempty"`
	Limit *string `json:"limit,omitempty"`
	Origin *string `json:"origin,omitempty"`
}

// InteractionLoadMatch is the typed request payload for Interaction.LoadTyped.
type InteractionLoadMatch struct {
	ExpiresAt *string `json:"expires_at,omitempty"`
	Limit *string `json:"limit,omitempty"`
	Origin *string `json:"origin,omitempty"`
}

// InteractionRemoveMatch is the typed request payload for Interaction.RemoveTyped.
type InteractionRemoveMatch struct {
	ExpiresAt *string `json:"expires_at,omitempty"`
	Limit *string `json:"limit,omitempty"`
	Origin *string `json:"origin,omitempty"`
}

// InteractionLimit is the typed data model for the interaction_limit entity.
type InteractionLimit struct {
	ExpiresAt string `json:"expires_at"`
	Expiry *string `json:"expiry,omitempty"`
	Limit string `json:"limit"`
	Origin string `json:"origin"`
}

// InteractionLimitUpdateData is the typed request payload for InteractionLimit.UpdateTyped.
type InteractionLimitUpdateData struct {
	ExpiresAt *string `json:"expires_at,omitempty"`
	Expiry *string `json:"expiry,omitempty"`
	Limit *string `json:"limit,omitempty"`
	Origin *string `json:"origin,omitempty"`
}

// Issue is the typed data model for the issue entity.
type Issue struct {
	ActiveLockReason *string `json:"active_lock_reason,omitempty"`
	Actor map[string]any `json:"actor"`
	AfterId *int `json:"after_id,omitempty"`
	Assignee map[string]any `json:"assignee"`
	Assignees *[]any `json:"assignees,omitempty"`
	Assigner map[string]any `json:"assigner"`
	AuthorAssociation string `json:"author_association"`
	BeforeId *int `json:"before_id,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	ClosedAt string `json:"closed_at"`
	ClosedBy map[string]any `json:"closed_by"`
	Color *string `json:"color,omitempty"`
	Comments int `json:"comments"`
	CommentsUrl string `json:"comments_url"`
	CommitId string `json:"commit_id"`
	CommitUrl string `json:"commit_url"`
	CreatedAt string `json:"created_at"`
	Default *bool `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	DismissedReview map[string]any `json:"dismissed_review"`
	Draft *bool `json:"draft,omitempty"`
	Event string `json:"event"`
	EventsUrl string `json:"events_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Issue map[string]any `json:"issue"`
	IssueDependenciesSummary map[string]any `json:"issue_dependencies_summary"`
	IssueFieldValues *[]any `json:"issue_field_values,omitempty"`
	IssueId int `json:"issue_id"`
	IssueUrl string `json:"issue_url"`
	Label map[string]any `json:"label"`
	Labels []any `json:"labels"`
	LabelsUrl string `json:"labels_url"`
	LockReason *string `json:"lock_reason,omitempty"`
	Locked bool `json:"locked"`
	Milestone map[string]any `json:"milestone"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	Number int `json:"number"`
	ParentIssueUrl *string `json:"parent_issue_url,omitempty"`
	PerformedViaGithubApp map[string]any `json:"performed_via_github_app"`
	ProjectCard map[string]any `json:"project_card"`
	PullRequest map[string]any `json:"pull_request"`
	Reactions map[string]any `json:"reactions"`
	Rename map[string]any `json:"rename"`
	ReplaceParent *bool `json:"replace_parent,omitempty"`
	Repository map[string]any `json:"repository"`
	RepositoryUrl string `json:"repository_url"`
	RequestedReviewer map[string]any `json:"requested_reviewer"`
	RequestedTeam map[string]any `json:"requested_team"`
	ReviewRequester map[string]any `json:"review_requester"`
	State string `json:"state"`
	StateReason *string `json:"state_reason,omitempty"`
	SubIssueId int `json:"sub_issue_id"`
	SubIssuesSummary map[string]any `json:"sub_issues_summary"`
	TimelineUrl *string `json:"timeline_url,omitempty"`
	Title string `json:"title"`
	Type map[string]any `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// IssueLoadMatch is the typed request payload for Issue.LoadTyped.
type IssueLoadMatch struct {
	Assignee *string `json:"assignee,omitempty"`
	Id *int `json:"id,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	CommentId *int `json:"comment_id,omitempty"`
	EventId *int `json:"event_id,omitempty"`
}

// IssueListMatch is the typed request payload for Issue.ListTyped.
type IssueListMatch struct {
	Collab *bool `json:"collab,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Label *string `json:"label,omitempty"`
	Org *bool `json:"org,omitempty"`
	Owned *bool `json:"owned,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Pull *bool `json:"pull,omitempty"`
	Since *string `json:"since,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
}

// IssueCreateData is the typed request payload for Issue.CreateTyped.
type IssueCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	ActiveLockReason *string `json:"active_lock_reason,omitempty"`
	Actor map[string]any `json:"actor"`
	AfterId *int `json:"after_id,omitempty"`
	Assignee map[string]any `json:"assignee"`
	Assignees *[]any `json:"assignees,omitempty"`
	Assigner map[string]any `json:"assigner"`
	AuthorAssociation string `json:"author_association"`
	BeforeId *int `json:"before_id,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	ClosedAt string `json:"closed_at"`
	ClosedBy map[string]any `json:"closed_by"`
	Color *string `json:"color,omitempty"`
	Comments int `json:"comments"`
	CommentsUrl string `json:"comments_url"`
	CommitId string `json:"commit_id"`
	CommitUrl string `json:"commit_url"`
	CreatedAt string `json:"created_at"`
	Default *bool `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	DismissedReview map[string]any `json:"dismissed_review"`
	Draft *bool `json:"draft,omitempty"`
	Event string `json:"event"`
	EventsUrl string `json:"events_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Issue map[string]any `json:"issue"`
	IssueDependenciesSummary map[string]any `json:"issue_dependencies_summary"`
	IssueFieldValues *[]any `json:"issue_field_values,omitempty"`
	IssueId int `json:"issue_id"`
	IssueUrl string `json:"issue_url"`
	Label map[string]any `json:"label"`
	Labels []any `json:"labels"`
	LabelsUrl string `json:"labels_url"`
	LockReason *string `json:"lock_reason,omitempty"`
	Locked bool `json:"locked"`
	Milestone map[string]any `json:"milestone"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	Number int `json:"number"`
	ParentIssueUrl *string `json:"parent_issue_url,omitempty"`
	PerformedViaGithubApp map[string]any `json:"performed_via_github_app"`
	ProjectCard map[string]any `json:"project_card"`
	PullRequest map[string]any `json:"pull_request"`
	Reactions map[string]any `json:"reactions"`
	Rename map[string]any `json:"rename"`
	ReplaceParent *bool `json:"replace_parent,omitempty"`
	Repository map[string]any `json:"repository"`
	RepositoryUrl string `json:"repository_url"`
	RequestedReviewer map[string]any `json:"requested_reviewer"`
	RequestedTeam map[string]any `json:"requested_team"`
	ReviewRequester map[string]any `json:"review_requester"`
	State string `json:"state"`
	StateReason *string `json:"state_reason,omitempty"`
	SubIssueId int `json:"sub_issue_id"`
	SubIssuesSummary map[string]any `json:"sub_issues_summary"`
	TimelineUrl *string `json:"timeline_url,omitempty"`
	Title string `json:"title"`
	Type map[string]any `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// IssueUpdateData is the typed request payload for Issue.UpdateTyped.
type IssueUpdateData struct {
	CommentId *int `json:"comment_id,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Id *int `json:"id,omitempty"`
	ActiveLockReason *string `json:"active_lock_reason,omitempty"`
	Actor *map[string]any `json:"actor,omitempty"`
	AfterId *int `json:"after_id,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	Assignees *[]any `json:"assignees,omitempty"`
	Assigner *map[string]any `json:"assigner,omitempty"`
	AuthorAssociation *string `json:"author_association,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	ClosedAt *string `json:"closed_at,omitempty"`
	ClosedBy *map[string]any `json:"closed_by,omitempty"`
	Color *string `json:"color,omitempty"`
	Comments *int `json:"comments,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitId *string `json:"commit_id,omitempty"`
	CommitUrl *string `json:"commit_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Default *bool `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	DismissedReview *map[string]any `json:"dismissed_review,omitempty"`
	Draft *bool `json:"draft,omitempty"`
	Event *string `json:"event,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	IssueDependenciesSummary *map[string]any `json:"issue_dependencies_summary,omitempty"`
	IssueFieldValues *[]any `json:"issue_field_values,omitempty"`
	IssueId *int `json:"issue_id,omitempty"`
	IssueUrl *string `json:"issue_url,omitempty"`
	Label *map[string]any `json:"label,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	LockReason *string `json:"lock_reason,omitempty"`
	Locked *bool `json:"locked,omitempty"`
	Milestone *map[string]any `json:"milestone,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Number *int `json:"number,omitempty"`
	ParentIssueUrl *string `json:"parent_issue_url,omitempty"`
	PerformedViaGithubApp *map[string]any `json:"performed_via_github_app,omitempty"`
	ProjectCard *map[string]any `json:"project_card,omitempty"`
	PullRequest *map[string]any `json:"pull_request,omitempty"`
	Reactions *map[string]any `json:"reactions,omitempty"`
	Rename *map[string]any `json:"rename,omitempty"`
	ReplaceParent *bool `json:"replace_parent,omitempty"`
	Repository *map[string]any `json:"repository,omitempty"`
	RepositoryUrl *string `json:"repository_url,omitempty"`
	RequestedReviewer *map[string]any `json:"requested_reviewer,omitempty"`
	RequestedTeam *map[string]any `json:"requested_team,omitempty"`
	ReviewRequester *map[string]any `json:"review_requester,omitempty"`
	State *string `json:"state,omitempty"`
	StateReason *string `json:"state_reason,omitempty"`
	SubIssueId *int `json:"sub_issue_id,omitempty"`
	SubIssuesSummary *map[string]any `json:"sub_issues_summary,omitempty"`
	TimelineUrl *string `json:"timeline_url,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *map[string]any `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// IssueRemoveMatch is the typed request payload for Issue.RemoveTyped.
type IssueRemoveMatch struct {
	Id *int `json:"id,omitempty"`
	IssueId *int `json:"issue_id,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Name *string `json:"name,omitempty"`
	CommentId *int `json:"comment_id,omitempty"`
	MilestoneNumber *int `json:"milestone_number,omitempty"`
}

// IssueType is the typed data model for the issue_type entity.
type IssueType struct {
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description string `json:"description"`
	Id int `json:"id"`
	IsEnabled *bool `json:"is_enabled,omitempty"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IssueTypeListMatch is the typed request payload for IssueType.ListTyped.
type IssueTypeListMatch struct {
	OrgId string `json:"org_id"`
}

// IssueTypeCreateData is the typed request payload for IssueType.CreateTyped.
type IssueTypeCreateData struct {
	OrgId string `json:"org_id"`
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description string `json:"description"`
	Id int `json:"id"`
	IsEnabled *bool `json:"is_enabled,omitempty"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IssueTypeUpdateData is the typed request payload for IssueType.UpdateTyped.
type IssueTypeUpdateData struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	IsEnabled *bool `json:"is_enabled,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// Job is the typed data model for the job entity.
type Job struct {
	CheckRunUrl string `json:"check_run_url"`
	CompletedAt string `json:"completed_at"`
	Conclusion string `json:"conclusion"`
	CreatedAt string `json:"created_at"`
	HeadBranch string `json:"head_branch"`
	HeadSha string `json:"head_sha"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Labels []any `json:"labels"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	RunAttempt *int `json:"run_attempt,omitempty"`
	RunId int `json:"run_id"`
	RunUrl string `json:"run_url"`
	RunnerGroupId int `json:"runner_group_id"`
	RunnerGroupName string `json:"runner_group_name"`
	RunnerId int `json:"runner_id"`
	RunnerName string `json:"runner_name"`
	StartedAt string `json:"started_at"`
	Status string `json:"status"`
	Steps *[]any `json:"steps,omitempty"`
	Url string `json:"url"`
	WorkflowName string `json:"workflow_name"`
}

// JobLoadMatch is the typed request payload for Job.LoadTyped.
type JobLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Key is the typed data model for the key entity.
type Key struct {
	CreatedAt string `json:"created_at"`
	Id int `json:"id"`
	Key string `json:"key"`
	LastUsed *string `json:"last_used,omitempty"`
	ReadOnly bool `json:"read_only"`
	Title string `json:"title"`
	Url string `json:"url"`
	Verified bool `json:"verified"`
}

// KeyLoadMatch is the typed request payload for Key.LoadTyped.
type KeyLoadMatch struct {
	Id int `json:"id"`
}

// KeyListMatch is the typed request payload for Key.ListTyped.
type KeyListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// KeyCreateData is the typed request payload for Key.CreateTyped.
type KeyCreateData struct {
	CreatedAt string `json:"created_at"`
	Id int `json:"id"`
	Key string `json:"key"`
	LastUsed *string `json:"last_used,omitempty"`
	ReadOnly bool `json:"read_only"`
	Title string `json:"title"`
	Url string `json:"url"`
	Verified bool `json:"verified"`
}

// Label is the typed data model for the label entity.
type Label struct {
	Color string `json:"color"`
	Default bool `json:"default"`
	Description string `json:"description"`
	Id int `json:"id"`
	Name string `json:"name"`
	NewName *string `json:"new_name,omitempty"`
	NodeId string `json:"node_id"`
	Url string `json:"url"`
}

// LabelLoadMatch is the typed request payload for Label.LoadTyped.
type LabelLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// LabelListMatch is the typed request payload for Label.ListTyped.
type LabelListMatch struct {
	MilestoneNumber *int `json:"milestone_number,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// LabelCreateData is the typed request payload for Label.CreateTyped.
type LabelCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Color string `json:"color"`
	Default bool `json:"default"`
	Description string `json:"description"`
	Id int `json:"id"`
	Name string `json:"name"`
	NewName *string `json:"new_name,omitempty"`
	NodeId string `json:"node_id"`
	Url string `json:"url"`
}

// LabelUpdateData is the typed request payload for Label.UpdateTyped.
type LabelUpdateData struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Color *string `json:"color,omitempty"`
	Default *bool `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	NewName *string `json:"new_name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Language is the typed data model for the language entity.
type Language struct {
	C *int `json:"C,omitempty"`
	Python *int `json:"Python,omitempty"`
}

// LanguageLoadMatch is the typed request payload for Language.LoadTyped.
type LanguageLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// License is the typed data model for the license entity.
type License struct {
	Body string `json:"body"`
	Conditions []any `json:"conditions"`
	Content string `json:"content"`
	Description string `json:"description"`
	DownloadUrl string `json:"download_url"`
	Encoding string `json:"encoding"`
	Featured bool `json:"featured"`
	GitUrl string `json:"git_url"`
	HtmlUrl string `json:"html_url"`
	Id *string `json:"id,omitempty"`
	Implementation string `json:"implementation"`
	Key string `json:"key"`
	License map[string]any `json:"license"`
	Limitations []any `json:"limitations"`
	Links map[string]any `json:"links"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Path string `json:"path"`
	Permissions []any `json:"permissions"`
	Sha string `json:"sha"`
	Size int `json:"size"`
	SpdxId string `json:"spdx_id"`
	Type string `json:"type"`
	Url string `json:"url"`
}

// LicenseLoadMatch is the typed request payload for License.LoadTyped.
type LicenseLoadMatch struct {
	Id string `json:"id"`
}

// LicenseListMatch is the typed request payload for License.ListTyped.
type LicenseListMatch struct {
	Featured *bool `json:"featured,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Markdown is the typed data model for the markdown entity.
type Markdown struct {
	Context *string `json:"context,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Text string `json:"text"`
}

// MarkdownCreateData is the typed request payload for Markdown.CreateTyped.
type MarkdownCreateData struct {
	Context *string `json:"context,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Text string `json:"text"`
}

// MarketplaceListingPlan is the typed data model for the marketplace_listing_plan entity.
type MarketplaceListingPlan struct {
	AccountsUrl string `json:"accounts_url"`
	Bullets []any `json:"bullets"`
	Description string `json:"description"`
	HasFreeTrial bool `json:"has_free_trial"`
	Id int `json:"id"`
	MonthlyPriceInCents int `json:"monthly_price_in_cents"`
	Name string `json:"name"`
	Number int `json:"number"`
	PriceModel string `json:"price_model"`
	State string `json:"state"`
	UnitName string `json:"unit_name"`
	Url string `json:"url"`
	YearlyPriceInCents int `json:"yearly_price_in_cents"`
}

// MarketplaceListingPlanListMatch is the typed request payload for MarketplaceListingPlan.ListTyped.
type MarketplaceListingPlanListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// MarketplacePurchase is the typed data model for the marketplace_purchase entity.
type MarketplacePurchase struct {
	Email *string `json:"email,omitempty"`
	Id int `json:"id"`
	Login string `json:"login"`
	MarketplacePendingChange *map[string]any `json:"marketplace_pending_change,omitempty"`
	MarketplacePurchase map[string]any `json:"marketplace_purchase"`
	OrganizationBillingEmail *string `json:"organization_billing_email,omitempty"`
	Type string `json:"type"`
	Url string `json:"url"`
}

// MarketplacePurchaseLoadMatch is the typed request payload for MarketplacePurchase.LoadTyped.
type MarketplacePurchaseLoadMatch struct {
	AccountId int `json:"account_id"`
}

// MarketplacePurchaseListMatch is the typed request payload for MarketplacePurchase.ListTyped.
type MarketplacePurchaseListMatch struct {
	PlanId int `json:"plan_id"`
	Direction *string `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Sort *string `json:"sort,omitempty"`
}

// Member is the typed data model for the member entity.
type Member struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// MemberListMatch is the typed request payload for Member.ListTyped.
type MemberListMatch struct {
	OrgId string `json:"org_id"`
	Filter *string `json:"filter,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Role *string `json:"role,omitempty"`
}

// Membership is the typed data model for the membership entity.
type Membership struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// MembershipLoadMatch is the typed request payload for Membership.LoadTyped.
type MembershipLoadMatch struct {
	Enterprise string `json:"enterprise"`
	Id string `json:"id"`
	TeamId string `json:"team_id"`
}

// MembershipListMatch is the typed request payload for Membership.ListTyped.
type MembershipListMatch struct {
	Enterprise string `json:"enterprise"`
	EnterpriseTeam string `json:"enterprise_team"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// MembershipUpdateData is the typed request payload for Membership.UpdateTyped.
type MembershipUpdateData struct {
	Enterprise string `json:"enterprise"`
	Id string `json:"id"`
	TeamId string `json:"team_id"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Login *string `json:"login,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// MergedUpstream is the typed data model for the merged_upstream entity.
type MergedUpstream struct {
	BaseBranch *string `json:"base_branch,omitempty"`
	Branch string `json:"branch"`
	MergeType *string `json:"merge_type,omitempty"`
	Message *string `json:"message,omitempty"`
}

// MergedUpstreamCreateData is the typed request payload for MergedUpstream.CreateTyped.
type MergedUpstreamCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	BaseBranch *string `json:"base_branch,omitempty"`
	Branch string `json:"branch"`
	MergeType *string `json:"merge_type,omitempty"`
	Message *string `json:"message,omitempty"`
}

// Meta is the typed data model for the meta entity.
type Meta struct {
}

// MetaLoadMatch is the typed request payload for Meta.LoadTyped.
type MetaLoadMatch struct {
	S *string `json:"s,omitempty"`
}

// MetaListMatch is the typed request payload for Meta.ListTyped.
type MetaListMatch struct {
}

// Metaroot is the typed data model for the metaroot entity.
type Metaroot struct {
	AuthorizationsUrl string `json:"authorizations_url"`
	CodeSearchUrl string `json:"code_search_url"`
	CommitSearchUrl string `json:"commit_search_url"`
	CurrentUserAuthorizationsHtmlUrl string `json:"current_user_authorizations_html_url"`
	CurrentUserRepositoriesUrl string `json:"current_user_repositories_url"`
	CurrentUserUrl string `json:"current_user_url"`
	EmailsUrl string `json:"emails_url"`
	EmojisUrl string `json:"emojis_url"`
	EventsUrl string `json:"events_url"`
	FeedsUrl string `json:"feeds_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	HubUrl *string `json:"hub_url,omitempty"`
	IssueSearchUrl string `json:"issue_search_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelSearchUrl string `json:"label_search_url"`
	NotificationsUrl string `json:"notifications_url"`
	OrganizationRepositoriesUrl string `json:"organization_repositories_url"`
	OrganizationTeamsUrl string `json:"organization_teams_url"`
	OrganizationUrl string `json:"organization_url"`
	PublicGistsUrl string `json:"public_gists_url"`
	RateLimitUrl string `json:"rate_limit_url"`
	RepositorySearchUrl string `json:"repository_search_url"`
	RepositoryUrl string `json:"repository_url"`
	StarredGistsUrl string `json:"starred_gists_url"`
	StarredUrl string `json:"starred_url"`
	TopicSearchUrl *string `json:"topic_search_url,omitempty"`
	UserOrganizationsUrl string `json:"user_organizations_url"`
	UserRepositoriesUrl string `json:"user_repositories_url"`
	UserSearchUrl string `json:"user_search_url"`
	UserUrl string `json:"user_url"`
}

// MetarootLoadMatch is the typed request payload for Metaroot.LoadTyped.
type MetarootLoadMatch struct {
	AuthorizationsUrl *string `json:"authorizations_url,omitempty"`
	CodeSearchUrl *string `json:"code_search_url,omitempty"`
	CommitSearchUrl *string `json:"commit_search_url,omitempty"`
	CurrentUserAuthorizationsHtmlUrl *string `json:"current_user_authorizations_html_url,omitempty"`
	CurrentUserRepositoriesUrl *string `json:"current_user_repositories_url,omitempty"`
	CurrentUserUrl *string `json:"current_user_url,omitempty"`
	EmailsUrl *string `json:"emails_url,omitempty"`
	EmojisUrl *string `json:"emojis_url,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FeedsUrl *string `json:"feeds_url,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	HubUrl *string `json:"hub_url,omitempty"`
	IssueSearchUrl *string `json:"issue_search_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	KeysUrl *string `json:"keys_url,omitempty"`
	LabelSearchUrl *string `json:"label_search_url,omitempty"`
	NotificationsUrl *string `json:"notifications_url,omitempty"`
	OrganizationRepositoriesUrl *string `json:"organization_repositories_url,omitempty"`
	OrganizationTeamsUrl *string `json:"organization_teams_url,omitempty"`
	OrganizationUrl *string `json:"organization_url,omitempty"`
	PublicGistsUrl *string `json:"public_gists_url,omitempty"`
	RateLimitUrl *string `json:"rate_limit_url,omitempty"`
	RepositorySearchUrl *string `json:"repository_search_url,omitempty"`
	RepositoryUrl *string `json:"repository_url,omitempty"`
	StarredGistsUrl *string `json:"starred_gists_url,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	TopicSearchUrl *string `json:"topic_search_url,omitempty"`
	UserOrganizationsUrl *string `json:"user_organizations_url,omitempty"`
	UserRepositoriesUrl *string `json:"user_repositories_url,omitempty"`
	UserSearchUrl *string `json:"user_search_url,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// Migration is the typed data model for the migration entity.
type Migration struct {
	AllowForking *bool `json:"allow_forking,omitempty"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl string `json:"assignees_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt string `json:"created_at"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled *bool `json:"disabled,omitempty"`
	DownloadsUrl string `json:"downloads_url"`
	EventsUrl string `json:"events_url"`
	Exclude *[]any `json:"exclude,omitempty"`
	ExcludeAttachments bool `json:"exclude_attachments"`
	ExcludeGitData bool `json:"exclude_git_data"`
	ExcludeMetadata bool `json:"exclude_metadata"`
	ExcludeOwnerProjects bool `json:"exclude_owner_projects"`
	ExcludeReleases bool `json:"exclude_releases"`
	Fork bool `json:"fork"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl *string `json:"git_url,omitempty"`
	Guid string `json:"guid"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl string `json:"languages_url"`
	License *map[string]any `json:"license,omitempty"`
	LockRepositories bool `json:"lock_repositories"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name string `json:"name"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	OrgMetadataOnly bool `json:"org_metadata_only"`
	Owner map[string]any `json:"owner"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	PushedAt *string `json:"pushed_at,omitempty"`
	ReleasesUrl string `json:"releases_url"`
	Repositories []any `json:"repositories"`
	RoleName *string `json:"role_name,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	Size *int `json:"size,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl string `json:"stargazers_url"`
	State string `json:"state"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// MigrationLoadMatch is the typed request payload for Migration.LoadTyped.
type MigrationLoadMatch struct {
	Id int `json:"id"`
	OrgId *string `json:"org_id,omitempty"`
	Exclude *[]any `json:"exclude,omitempty"`
}

// MigrationListMatch is the typed request payload for Migration.ListTyped.
type MigrationListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// MigrationCreateData is the typed request payload for Migration.CreateTyped.
type MigrationCreateData struct {
	AllowForking *bool `json:"allow_forking,omitempty"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl string `json:"assignees_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt string `json:"created_at"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled *bool `json:"disabled,omitempty"`
	DownloadsUrl string `json:"downloads_url"`
	EventsUrl string `json:"events_url"`
	Exclude *[]any `json:"exclude,omitempty"`
	ExcludeAttachments bool `json:"exclude_attachments"`
	ExcludeGitData bool `json:"exclude_git_data"`
	ExcludeMetadata bool `json:"exclude_metadata"`
	ExcludeOwnerProjects bool `json:"exclude_owner_projects"`
	ExcludeReleases bool `json:"exclude_releases"`
	Fork bool `json:"fork"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl *string `json:"git_url,omitempty"`
	Guid string `json:"guid"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl string `json:"languages_url"`
	License *map[string]any `json:"license,omitempty"`
	LockRepositories bool `json:"lock_repositories"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name string `json:"name"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	OrgMetadataOnly bool `json:"org_metadata_only"`
	Owner map[string]any `json:"owner"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	PushedAt *string `json:"pushed_at,omitempty"`
	ReleasesUrl string `json:"releases_url"`
	Repositories []any `json:"repositories"`
	RoleName *string `json:"role_name,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	Size *int `json:"size,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl string `json:"stargazers_url"`
	State string `json:"state"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// MigrationRemoveMatch is the typed request payload for Migration.RemoveTyped.
type MigrationRemoveMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Milestone is the typed data model for the milestone entity.
type Milestone struct {
	AvatarUrl string `json:"avatar_url"`
	ClosedAt string `json:"closed_at"`
	ClosedIssues int `json:"closed_issues"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Description *string `json:"description,omitempty"`
	DueOn *string `json:"due_on,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	LabelsUrl string `json:"labels_url"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	Number int `json:"number"`
	OpenIssues int `json:"open_issues"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	State *string `json:"state,omitempty"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Title string `json:"title"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// MilestoneLoadMatch is the typed request payload for Milestone.LoadTyped.
type MilestoneLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// MilestoneListMatch is the typed request payload for Milestone.ListTyped.
type MilestoneListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Direction *string `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
}

// MilestoneCreateData is the typed request payload for Milestone.CreateTyped.
type MilestoneCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AvatarUrl string `json:"avatar_url"`
	ClosedAt string `json:"closed_at"`
	ClosedIssues int `json:"closed_issues"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Description *string `json:"description,omitempty"`
	DueOn *string `json:"due_on,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	LabelsUrl string `json:"labels_url"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	Number int `json:"number"`
	OpenIssues int `json:"open_issues"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	State *string `json:"state,omitempty"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Title string `json:"title"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// MilestoneUpdateData is the typed request payload for Milestone.UpdateTyped.
type MilestoneUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	ClosedAt *string `json:"closed_at,omitempty"`
	ClosedIssues *int `json:"closed_issues,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	DueOn *string `json:"due_on,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	Login *string `json:"login,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Number *int `json:"number,omitempty"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	State *string `json:"state,omitempty"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// MinimalRepository is the typed data model for the minimal_repository entity.
type MinimalRepository struct {
	AllowForking *bool `json:"allow_forking,omitempty"`
	ArchiveUrl string `json:"archive_url"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl string `json:"assignees_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled *bool `json:"disabled,omitempty"`
	DownloadsUrl string `json:"downloads_url"`
	EventsUrl string `json:"events_url"`
	Fork bool `json:"fork"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl *string `json:"git_url,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl string `json:"languages_url"`
	License *map[string]any `json:"license,omitempty"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name string `json:"name"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Owner map[string]any `json:"owner"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	PushedAt *string `json:"pushed_at,omitempty"`
	ReleasesUrl string `json:"releases_url"`
	RoleName *string `json:"role_name,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	Size *int `json:"size,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl string `json:"stargazers_url"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url string `json:"url"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// MinimalRepositoryListMatch is the typed request payload for MinimalRepository.ListTyped.
type MinimalRepositoryListMatch struct {
	Since *int `json:"since,omitempty"`
}

// NetworkConfiguration is the typed data model for the network_configuration entity.
type NetworkConfiguration struct {
	ComputeService *string `json:"compute_service,omitempty"`
	CreatedOn string `json:"created_on"`
	Id string `json:"id"`
	Name string `json:"name"`
	NetworkSettingsIds *[]any `json:"network_settings_ids,omitempty"`
}

// NetworkConfigurationLoadMatch is the typed request payload for NetworkConfiguration.LoadTyped.
type NetworkConfigurationLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// NetworkConfigurationCreateData is the typed request payload for NetworkConfiguration.CreateTyped.
type NetworkConfigurationCreateData struct {
	OrgId string `json:"org_id"`
	ComputeService *string `json:"compute_service,omitempty"`
	CreatedOn string `json:"created_on"`
	Id string `json:"id"`
	Name string `json:"name"`
	NetworkSettingsIds *[]any `json:"network_settings_ids,omitempty"`
}

// NetworkConfigurationUpdateData is the typed request payload for NetworkConfiguration.UpdateTyped.
type NetworkConfigurationUpdateData struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	ComputeService *string `json:"compute_service,omitempty"`
	CreatedOn *string `json:"created_on,omitempty"`
	Name *string `json:"name,omitempty"`
	NetworkSettingsIds *[]any `json:"network_settings_ids,omitempty"`
}

// NetworkSetting is the typed data model for the network_setting entity.
type NetworkSetting struct {
	Id string `json:"id"`
	Name string `json:"name"`
	NetworkConfigurationId *string `json:"network_configuration_id,omitempty"`
	Region string `json:"region"`
	SubnetId string `json:"subnet_id"`
}

// NetworkSettingLoadMatch is the typed request payload for NetworkSetting.LoadTyped.
type NetworkSettingLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// OidcCustomSub is the typed data model for the oidc_custom_sub entity.
type OidcCustomSub struct {
	IncludeClaimKeys []any `json:"include_claim_keys"`
}

// OidcCustomSubListMatch is the typed request payload for OidcCustomSub.ListTyped.
type OidcCustomSubListMatch struct {
	OrgId string `json:"org_id"`
}

// OidcCustomSubRepo is the typed data model for the oidc_custom_sub_repo entity.
type OidcCustomSubRepo struct {
	IncludeClaimKeys *[]any `json:"include_claim_keys,omitempty"`
	UseDefault bool `json:"use_default"`
}

// OidcCustomSubRepoListMatch is the typed request payload for OidcCustomSubRepo.ListTyped.
type OidcCustomSubRepoListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Org is the typed data model for the org entity.
type Org struct {
	AccessTokensUrl string `json:"access_tokens_url"`
	Account any `json:"account"`
	Action string `json:"action"`
	AdvancedSecurityEnabledForNewRepositories *bool `json:"advanced_security_enabled_for_new_repositories,omitempty"`
	AppId int `json:"app_id"`
	AppSlug string `json:"app_slug"`
	ArtifactUrl *string `json:"artifact_url,omitempty"`
	Async *bool `json:"async,omitempty"`
	Attestations *[]any `json:"attestations,omitempty"`
	AttestationsSubjectDigests *map[string]any `json:"attestations_subject_digests,omitempty"`
	AvatarUrl string `json:"avatar_url"`
	BaseRole *string `json:"base_role,omitempty"`
	BillingEmail *string `json:"billing_email,omitempty"`
	Blog *string `json:"blog,omitempty"`
	ClientId *string `json:"client_id,omitempty"`
	Company *string `json:"company,omitempty"`
	ContactEmail *string `json:"contact_email,omitempty"`
	CreatedAt string `json:"created_at"`
	DefaultRepositoryPermission *string `json:"default_repository_permission,omitempty"`
	DependabotAlertsEnabledForNewRepositories *bool `json:"dependabot_alerts_enabled_for_new_repositories,omitempty"`
	DependabotSecurityUpdatesEnabledForNewRepositories *bool `json:"dependabot_security_updates_enabled_for_new_repositories,omitempty"`
	DependencyGraphEnabledForNewRepositories *bool `json:"dependency_graph_enabled_for_new_repositories,omitempty"`
	DeployKeysEnabledForRepositories *bool `json:"deploy_keys_enabled_for_repositories,omitempty"`
	Description *string `json:"description,omitempty"`
	Digest string `json:"digest"`
	DirectMembership *bool `json:"direct_membership,omitempty"`
	Email *string `json:"email,omitempty"`
	EnterpriseTeamsProvidingIndirectMembership *[]any `json:"enterprise_teams_providing_indirect_membership,omitempty"`
	Events []any `json:"events"`
	EventsUrl string `json:"events_url"`
	FilledSeats *int `json:"filled_seats,omitempty"`
	HasMultipleSingleFiles *bool `json:"has_multiple_single_files,omitempty"`
	HasOrganizationProjects *bool `json:"has_organization_projects,omitempty"`
	HasRepositoryProjects *bool `json:"has_repository_projects,omitempty"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	IssuesUrl string `json:"issues_url"`
	Location *string `json:"location,omitempty"`
	Login string `json:"login"`
	MembersAllowedRepositoryCreationType *string `json:"members_allowed_repository_creation_type,omitempty"`
	MembersCanCreateInternalRepositories *bool `json:"members_can_create_internal_repositories,omitempty"`
	MembersCanCreatePages *bool `json:"members_can_create_pages,omitempty"`
	MembersCanCreatePrivatePages *bool `json:"members_can_create_private_pages,omitempty"`
	MembersCanCreatePrivateRepositories *bool `json:"members_can_create_private_repositories,omitempty"`
	MembersCanCreatePublicPages *bool `json:"members_can_create_public_pages,omitempty"`
	MembersCanCreatePublicRepositories *bool `json:"members_can_create_public_repositories,omitempty"`
	MembersCanCreateRepositories *bool `json:"members_can_create_repositories,omitempty"`
	MembersCanForkPrivateRepositories *bool `json:"members_can_fork_private_repositories,omitempty"`
	MembersUrl string `json:"members_url"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Organization map[string]any `json:"organization"`
	OrganizationUrl string `json:"organization_url"`
	PageInfo *map[string]any `json:"page_info,omitempty"`
	PatIds []any `json:"pat_ids"`
	PatRequestIds *[]any `json:"pat_request_ids,omitempty"`
	Path *string `json:"path,omitempty"`
	Permissions map[string]any `json:"permissions"`
	PredicateType *string `json:"predicate_type,omitempty"`
	PrivateRepos int `json:"private_repos"`
	Properties []any `json:"properties"`
	PublicMembersUrl string `json:"public_members_url"`
	QuerySuite *string `json:"query_suite,omitempty"`
	Reason *string `json:"reason,omitempty"`
	RegistryUrl string `json:"registry_url"`
	ReposUrl string `json:"repos_url"`
	RepositoriesUrl string `json:"repositories_url"`
	Repository *string `json:"repository,omitempty"`
	RepositoryNames []any `json:"repository_names"`
	RepositorySelection string `json:"repository_selection"`
	Role string `json:"role"`
	Seats *int `json:"seats,omitempty"`
	SecretScanningEnabledForNewRepositories *bool `json:"secret_scanning_enabled_for_new_repositories,omitempty"`
	SecretScanningPushProtectionCustomLink *string `json:"secret_scanning_push_protection_custom_link,omitempty"`
	SecretScanningPushProtectionCustomLinkEnabled *bool `json:"secret_scanning_push_protection_custom_link_enabled,omitempty"`
	SecretScanningPushProtectionEnabledForNewRepositories *bool `json:"secret_scanning_push_protection_enabled_for_new_repositories,omitempty"`
	SingleFileName string `json:"single_file_name"`
	SingleFilePaths *[]any `json:"single_file_paths,omitempty"`
	Source *string `json:"source,omitempty"`
	Space int `json:"space"`
	State string `json:"state"`
	Status *string `json:"status,omitempty"`
	StorageRecords *[]any `json:"storage_records,omitempty"`
	SubjectDigests []any `json:"subject_digests"`
	SuspendedAt string `json:"suspended_at"`
	SuspendedBy map[string]any `json:"suspended_by"`
	TargetId int `json:"target_id"`
	TargetType string `json:"target_type"`
	TotalCount *int `json:"total_count,omitempty"`
	TwitterUsername *string `json:"twitter_username,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// OrgLoadMatch is the typed request payload for Org.LoadTyped.
type OrgLoadMatch struct {
	Id string `json:"id"`
	SubjectDigest *string `json:"subject_digest,omitempty"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	PredicateType *string `json:"predicate_type,omitempty"`
	Username *string `json:"username,omitempty"`
}

// OrgListMatch is the typed request payload for Org.ListTyped.
type OrgListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// OrgCreateData is the typed request payload for Org.CreateTyped.
type OrgCreateData struct {
	Enablement string `json:"enablement"`
	Org string `json:"org"`
	SecurityProduct string `json:"security_product"`
	AccessTokensUrl string `json:"access_tokens_url"`
	Account any `json:"account"`
	Action string `json:"action"`
	AdvancedSecurityEnabledForNewRepositories *bool `json:"advanced_security_enabled_for_new_repositories,omitempty"`
	AppId int `json:"app_id"`
	AppSlug string `json:"app_slug"`
	ArtifactUrl *string `json:"artifact_url,omitempty"`
	Async *bool `json:"async,omitempty"`
	Attestations *[]any `json:"attestations,omitempty"`
	AttestationsSubjectDigests *map[string]any `json:"attestations_subject_digests,omitempty"`
	AvatarUrl string `json:"avatar_url"`
	BaseRole *string `json:"base_role,omitempty"`
	BillingEmail *string `json:"billing_email,omitempty"`
	Blog *string `json:"blog,omitempty"`
	ClientId *string `json:"client_id,omitempty"`
	Company *string `json:"company,omitempty"`
	ContactEmail *string `json:"contact_email,omitempty"`
	CreatedAt string `json:"created_at"`
	DefaultRepositoryPermission *string `json:"default_repository_permission,omitempty"`
	DependabotAlertsEnabledForNewRepositories *bool `json:"dependabot_alerts_enabled_for_new_repositories,omitempty"`
	DependabotSecurityUpdatesEnabledForNewRepositories *bool `json:"dependabot_security_updates_enabled_for_new_repositories,omitempty"`
	DependencyGraphEnabledForNewRepositories *bool `json:"dependency_graph_enabled_for_new_repositories,omitempty"`
	DeployKeysEnabledForRepositories *bool `json:"deploy_keys_enabled_for_repositories,omitempty"`
	Description *string `json:"description,omitempty"`
	Digest string `json:"digest"`
	DirectMembership *bool `json:"direct_membership,omitempty"`
	Email *string `json:"email,omitempty"`
	EnterpriseTeamsProvidingIndirectMembership *[]any `json:"enterprise_teams_providing_indirect_membership,omitempty"`
	Events []any `json:"events"`
	EventsUrl string `json:"events_url"`
	FilledSeats *int `json:"filled_seats,omitempty"`
	HasMultipleSingleFiles *bool `json:"has_multiple_single_files,omitempty"`
	HasOrganizationProjects *bool `json:"has_organization_projects,omitempty"`
	HasRepositoryProjects *bool `json:"has_repository_projects,omitempty"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	IssuesUrl string `json:"issues_url"`
	Location *string `json:"location,omitempty"`
	Login string `json:"login"`
	MembersAllowedRepositoryCreationType *string `json:"members_allowed_repository_creation_type,omitempty"`
	MembersCanCreateInternalRepositories *bool `json:"members_can_create_internal_repositories,omitempty"`
	MembersCanCreatePages *bool `json:"members_can_create_pages,omitempty"`
	MembersCanCreatePrivatePages *bool `json:"members_can_create_private_pages,omitempty"`
	MembersCanCreatePrivateRepositories *bool `json:"members_can_create_private_repositories,omitempty"`
	MembersCanCreatePublicPages *bool `json:"members_can_create_public_pages,omitempty"`
	MembersCanCreatePublicRepositories *bool `json:"members_can_create_public_repositories,omitempty"`
	MembersCanCreateRepositories *bool `json:"members_can_create_repositories,omitempty"`
	MembersCanForkPrivateRepositories *bool `json:"members_can_fork_private_repositories,omitempty"`
	MembersUrl string `json:"members_url"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Organization map[string]any `json:"organization"`
	OrganizationUrl string `json:"organization_url"`
	PageInfo *map[string]any `json:"page_info,omitempty"`
	PatIds []any `json:"pat_ids"`
	PatRequestIds *[]any `json:"pat_request_ids,omitempty"`
	Path *string `json:"path,omitempty"`
	Permissions map[string]any `json:"permissions"`
	PredicateType *string `json:"predicate_type,omitempty"`
	PrivateRepos int `json:"private_repos"`
	Properties []any `json:"properties"`
	PublicMembersUrl string `json:"public_members_url"`
	QuerySuite *string `json:"query_suite,omitempty"`
	Reason *string `json:"reason,omitempty"`
	RegistryUrl string `json:"registry_url"`
	ReposUrl string `json:"repos_url"`
	RepositoriesUrl string `json:"repositories_url"`
	Repository *string `json:"repository,omitempty"`
	RepositoryNames []any `json:"repository_names"`
	RepositorySelection string `json:"repository_selection"`
	Role string `json:"role"`
	Seats *int `json:"seats,omitempty"`
	SecretScanningEnabledForNewRepositories *bool `json:"secret_scanning_enabled_for_new_repositories,omitempty"`
	SecretScanningPushProtectionCustomLink *string `json:"secret_scanning_push_protection_custom_link,omitempty"`
	SecretScanningPushProtectionCustomLinkEnabled *bool `json:"secret_scanning_push_protection_custom_link_enabled,omitempty"`
	SecretScanningPushProtectionEnabledForNewRepositories *bool `json:"secret_scanning_push_protection_enabled_for_new_repositories,omitempty"`
	SingleFileName string `json:"single_file_name"`
	SingleFilePaths *[]any `json:"single_file_paths,omitempty"`
	Source *string `json:"source,omitempty"`
	Space int `json:"space"`
	State string `json:"state"`
	Status *string `json:"status,omitempty"`
	StorageRecords *[]any `json:"storage_records,omitempty"`
	SubjectDigests []any `json:"subject_digests"`
	SuspendedAt string `json:"suspended_at"`
	SuspendedBy map[string]any `json:"suspended_by"`
	TargetId int `json:"target_id"`
	TargetType string `json:"target_type"`
	TotalCount *int `json:"total_count,omitempty"`
	TwitterUsername *string `json:"twitter_username,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// OrgUpdateData is the typed request payload for Org.UpdateTyped.
type OrgUpdateData struct {
	Id string `json:"id"`
	Username string `json:"username"`
	AccessTokensUrl *string `json:"access_tokens_url,omitempty"`
	Account *any `json:"account,omitempty"`
	Action *string `json:"action,omitempty"`
	AdvancedSecurityEnabledForNewRepositories *bool `json:"advanced_security_enabled_for_new_repositories,omitempty"`
	AppId *int `json:"app_id,omitempty"`
	AppSlug *string `json:"app_slug,omitempty"`
	ArtifactUrl *string `json:"artifact_url,omitempty"`
	Async *bool `json:"async,omitempty"`
	Attestations *[]any `json:"attestations,omitempty"`
	AttestationsSubjectDigests *map[string]any `json:"attestations_subject_digests,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BaseRole *string `json:"base_role,omitempty"`
	BillingEmail *string `json:"billing_email,omitempty"`
	Blog *string `json:"blog,omitempty"`
	ClientId *string `json:"client_id,omitempty"`
	Company *string `json:"company,omitempty"`
	ContactEmail *string `json:"contact_email,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultRepositoryPermission *string `json:"default_repository_permission,omitempty"`
	DependabotAlertsEnabledForNewRepositories *bool `json:"dependabot_alerts_enabled_for_new_repositories,omitempty"`
	DependabotSecurityUpdatesEnabledForNewRepositories *bool `json:"dependabot_security_updates_enabled_for_new_repositories,omitempty"`
	DependencyGraphEnabledForNewRepositories *bool `json:"dependency_graph_enabled_for_new_repositories,omitempty"`
	DeployKeysEnabledForRepositories *bool `json:"deploy_keys_enabled_for_repositories,omitempty"`
	Description *string `json:"description,omitempty"`
	Digest *string `json:"digest,omitempty"`
	DirectMembership *bool `json:"direct_membership,omitempty"`
	Email *string `json:"email,omitempty"`
	EnterpriseTeamsProvidingIndirectMembership *[]any `json:"enterprise_teams_providing_indirect_membership,omitempty"`
	Events *[]any `json:"events,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FilledSeats *int `json:"filled_seats,omitempty"`
	HasMultipleSingleFiles *bool `json:"has_multiple_single_files,omitempty"`
	HasOrganizationProjects *bool `json:"has_organization_projects,omitempty"`
	HasRepositoryProjects *bool `json:"has_repository_projects,omitempty"`
	HooksUrl *string `json:"hooks_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	Location *string `json:"location,omitempty"`
	Login *string `json:"login,omitempty"`
	MembersAllowedRepositoryCreationType *string `json:"members_allowed_repository_creation_type,omitempty"`
	MembersCanCreateInternalRepositories *bool `json:"members_can_create_internal_repositories,omitempty"`
	MembersCanCreatePages *bool `json:"members_can_create_pages,omitempty"`
	MembersCanCreatePrivatePages *bool `json:"members_can_create_private_pages,omitempty"`
	MembersCanCreatePrivateRepositories *bool `json:"members_can_create_private_repositories,omitempty"`
	MembersCanCreatePublicPages *bool `json:"members_can_create_public_pages,omitempty"`
	MembersCanCreatePublicRepositories *bool `json:"members_can_create_public_repositories,omitempty"`
	MembersCanCreateRepositories *bool `json:"members_can_create_repositories,omitempty"`
	MembersCanForkPrivateRepositories *bool `json:"members_can_fork_private_repositories,omitempty"`
	MembersUrl *string `json:"members_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	OrganizationUrl *string `json:"organization_url,omitempty"`
	PageInfo *map[string]any `json:"page_info,omitempty"`
	PatIds *[]any `json:"pat_ids,omitempty"`
	PatRequestIds *[]any `json:"pat_request_ids,omitempty"`
	Path *string `json:"path,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	PredicateType *string `json:"predicate_type,omitempty"`
	PrivateRepos *int `json:"private_repos,omitempty"`
	Properties *[]any `json:"properties,omitempty"`
	PublicMembersUrl *string `json:"public_members_url,omitempty"`
	QuerySuite *string `json:"query_suite,omitempty"`
	Reason *string `json:"reason,omitempty"`
	RegistryUrl *string `json:"registry_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	RepositoriesUrl *string `json:"repositories_url,omitempty"`
	Repository *string `json:"repository,omitempty"`
	RepositoryNames *[]any `json:"repository_names,omitempty"`
	RepositorySelection *string `json:"repository_selection,omitempty"`
	Role *string `json:"role,omitempty"`
	Seats *int `json:"seats,omitempty"`
	SecretScanningEnabledForNewRepositories *bool `json:"secret_scanning_enabled_for_new_repositories,omitempty"`
	SecretScanningPushProtectionCustomLink *string `json:"secret_scanning_push_protection_custom_link,omitempty"`
	SecretScanningPushProtectionCustomLinkEnabled *bool `json:"secret_scanning_push_protection_custom_link_enabled,omitempty"`
	SecretScanningPushProtectionEnabledForNewRepositories *bool `json:"secret_scanning_push_protection_enabled_for_new_repositories,omitempty"`
	SingleFileName *string `json:"single_file_name,omitempty"`
	SingleFilePaths *[]any `json:"single_file_paths,omitempty"`
	Source *string `json:"source,omitempty"`
	Space *int `json:"space,omitempty"`
	State *string `json:"state,omitempty"`
	Status *string `json:"status,omitempty"`
	StorageRecords *[]any `json:"storage_records,omitempty"`
	SubjectDigests *[]any `json:"subject_digests,omitempty"`
	SuspendedAt *string `json:"suspended_at,omitempty"`
	SuspendedBy *map[string]any `json:"suspended_by,omitempty"`
	TargetId *int `json:"target_id,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	TwitterUsername *string `json:"twitter_username,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// OrgRemoveMatch is the typed request payload for Org.RemoveTyped.
type OrgRemoveMatch struct {
	Id string `json:"id"`
}

// OrgHook is the typed data model for the org_hook entity.
type OrgHook struct {
	Active bool `json:"active"`
	Config map[string]any `json:"config"`
	CreatedAt string `json:"created_at"`
	DeliveriesUrl *string `json:"deliveries_url,omitempty"`
	Events []any `json:"events"`
	Id int `json:"id"`
	Name string `json:"name"`
	PingUrl string `json:"ping_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// OrgHookLoadMatch is the typed request payload for OrgHook.LoadTyped.
type OrgHookLoadMatch struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
}

// OrgHookListMatch is the typed request payload for OrgHook.ListTyped.
type OrgHookListMatch struct {
	Id string `json:"id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// OrgHookCreateData is the typed request payload for OrgHook.CreateTyped.
type OrgHookCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	Config map[string]any `json:"config"`
	CreatedAt string `json:"created_at"`
	DeliveriesUrl *string `json:"deliveries_url,omitempty"`
	Events []any `json:"events"`
	Name string `json:"name"`
	PingUrl string `json:"ping_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// OrgHookUpdateData is the typed request payload for OrgHook.UpdateTyped.
type OrgHookUpdateData struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
	Active *bool `json:"active,omitempty"`
	Config *map[string]any `json:"config,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DeliveriesUrl *string `json:"deliveries_url,omitempty"`
	Events *[]any `json:"events,omitempty"`
	Name *string `json:"name,omitempty"`
	PingUrl *string `json:"ping_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// OrgMembership is the typed data model for the org_membership entity.
type OrgMembership struct {
	DirectMembership *bool `json:"direct_membership,omitempty"`
	EnterpriseTeamsProvidingIndirectMembership *[]any `json:"enterprise_teams_providing_indirect_membership,omitempty"`
	Id *string `json:"id,omitempty"`
	Organization map[string]any `json:"organization"`
	OrganizationUrl string `json:"organization_url"`
	Permissions map[string]any `json:"permissions"`
	Role string `json:"role"`
	State string `json:"state"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// OrgMembershipLoadMatch is the typed request payload for OrgMembership.LoadTyped.
type OrgMembershipLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// OrgMembershipUpdateData is the typed request payload for OrgMembership.UpdateTyped.
type OrgMembershipUpdateData struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	DirectMembership *bool `json:"direct_membership,omitempty"`
	EnterpriseTeamsProvidingIndirectMembership *[]any `json:"enterprise_teams_providing_indirect_membership,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	OrganizationUrl *string `json:"organization_url,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Role *string `json:"role,omitempty"`
	State *string `json:"state,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// OrgPrivateRegistryConfiguration is the typed data model for the org_private_registry_configuration entity.
type OrgPrivateRegistryConfiguration struct {
	CreatedAt string `json:"created_at"`
	Name string `json:"name"`
	RegistryType string `json:"registry_type"`
	UpdatedAt string `json:"updated_at"`
	Username *string `json:"username,omitempty"`
	Visibility string `json:"visibility"`
}

// OrgPrivateRegistryConfigurationLoadMatch is the typed request payload for OrgPrivateRegistryConfiguration.LoadTyped.
type OrgPrivateRegistryConfigurationLoadMatch struct {
	OrgId string `json:"org_id"`
	SecretName string `json:"secret_name"`
}

// OrgPrivateRegistryConfigurationWithSelectedRepository is the typed data model for the org_private_registry_configuration_with_selected_repository entity.
type OrgPrivateRegistryConfigurationWithSelectedRepository struct {
	EncryptedValue string `json:"encrypted_value"`
	Id *string `json:"id,omitempty"`
	KeyId string `json:"key_id"`
	RegistryType string `json:"registry_type"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	Url string `json:"url"`
	Username *string `json:"username,omitempty"`
	Visibility string `json:"visibility"`
}

// OrgPrivateRegistryConfigurationWithSelectedRepositoryCreateData is the typed request payload for OrgPrivateRegistryConfigurationWithSelectedRepository.CreateTyped.
type OrgPrivateRegistryConfigurationWithSelectedRepositoryCreateData struct {
	Id string `json:"id"`
	EncryptedValue string `json:"encrypted_value"`
	KeyId string `json:"key_id"`
	RegistryType string `json:"registry_type"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	Url string `json:"url"`
	Username *string `json:"username,omitempty"`
	Visibility string `json:"visibility"`
}

// OrgRepoCustomPropertyValue is the typed data model for the org_repo_custom_property_value entity.
type OrgRepoCustomPropertyValue struct {
	Properties []any `json:"properties"`
	RepositoryFullName string `json:"repository_full_name"`
	RepositoryId int `json:"repository_id"`
	RepositoryName string `json:"repository_name"`
}

// OrgRepoCustomPropertyValueListMatch is the typed request payload for OrgRepoCustomPropertyValue.ListTyped.
type OrgRepoCustomPropertyValueListMatch struct {
	OrgId string `json:"org_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	RepositoryQuery *string `json:"repository_query,omitempty"`
}

// Organization is the typed data model for the organization entity.
type Organization struct {
}

// OrganizationActionsSecret is the typed data model for the organization_actions_secret entity.
type OrganizationActionsSecret struct {
	CreatedAt string `json:"created_at"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Visibility string `json:"visibility"`
}

// OrganizationActionsSecretLoadMatch is the typed request payload for OrganizationActionsSecret.LoadTyped.
type OrganizationActionsSecretLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// OrganizationActionsVariable is the typed data model for the organization_actions_variable entity.
type OrganizationActionsVariable struct {
	CreatedAt string `json:"created_at"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Value string `json:"value"`
	Visibility string `json:"visibility"`
}

// OrganizationActionsVariableLoadMatch is the typed request payload for OrganizationActionsVariable.LoadTyped.
type OrganizationActionsVariableLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// OrganizationDependabotSecret is the typed data model for the organization_dependabot_secret entity.
type OrganizationDependabotSecret struct {
	CreatedAt string `json:"created_at"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Visibility string `json:"visibility"`
}

// OrganizationDependabotSecretLoadMatch is the typed request payload for OrganizationDependabotSecret.LoadTyped.
type OrganizationDependabotSecretLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// OrganizationInvitation is the typed data model for the organization_invitation entity.
type OrganizationInvitation struct {
	CreatedAt string `json:"created_at"`
	Email *string `json:"email,omitempty"`
	FailedAt *string `json:"failed_at,omitempty"`
	FailedReason *string `json:"failed_reason,omitempty"`
	Id int `json:"id"`
	InvitationSource *string `json:"invitation_source,omitempty"`
	InvitationTeamsUrl string `json:"invitation_teams_url"`
	InviteeId *int `json:"invitee_id,omitempty"`
	Inviter map[string]any `json:"inviter"`
	Login string `json:"login"`
	NodeId string `json:"node_id"`
	Role *string `json:"role,omitempty"`
	TeamCount int `json:"team_count"`
	TeamIds *[]any `json:"team_ids,omitempty"`
}

// OrganizationInvitationListMatch is the typed request payload for OrganizationInvitation.ListTyped.
type OrganizationInvitationListMatch struct {
	OrgId string `json:"org_id"`
	InvitationSource *string `json:"invitation_source,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Role *string `json:"role,omitempty"`
}

// OrganizationInvitationCreateData is the typed request payload for OrganizationInvitation.CreateTyped.
type OrganizationInvitationCreateData struct {
	OrgId string `json:"org_id"`
	CreatedAt string `json:"created_at"`
	Email *string `json:"email,omitempty"`
	FailedAt *string `json:"failed_at,omitempty"`
	FailedReason *string `json:"failed_reason,omitempty"`
	Id int `json:"id"`
	InvitationSource *string `json:"invitation_source,omitempty"`
	InvitationTeamsUrl string `json:"invitation_teams_url"`
	InviteeId *int `json:"invitee_id,omitempty"`
	Inviter map[string]any `json:"inviter"`
	Login string `json:"login"`
	NodeId string `json:"node_id"`
	Role *string `json:"role,omitempty"`
	TeamCount int `json:"team_count"`
	TeamIds *[]any `json:"team_ids,omitempty"`
}

// OrganizationProgrammaticAccessGrant is the typed data model for the organization_programmatic_access_grant entity.
type OrganizationProgrammaticAccessGrant struct {
	AccessGrantedAt string `json:"access_granted_at"`
	CreatedAt string `json:"created_at"`
	Id int `json:"id"`
	Owner map[string]any `json:"owner"`
	Permissions map[string]any `json:"permissions"`
	Reason string `json:"reason"`
	RepositoriesUrl string `json:"repositories_url"`
	RepositorySelection string `json:"repository_selection"`
	TokenExpired bool `json:"token_expired"`
	TokenExpiresAt string `json:"token_expires_at"`
	TokenId int `json:"token_id"`
	TokenLastUsedAt string `json:"token_last_used_at"`
	TokenName string `json:"token_name"`
}

// OrganizationProgrammaticAccessGrantListMatch is the typed request payload for OrganizationProgrammaticAccessGrant.ListTyped.
type OrganizationProgrammaticAccessGrantListMatch struct {
	OrgId string `json:"org_id"`
	Direction *string `json:"direction,omitempty"`
	LastUsedAfter *string `json:"last_used_after,omitempty"`
	LastUsedBefore *string `json:"last_used_before,omitempty"`
	Owner *[]any `json:"owner,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Permission *string `json:"permission,omitempty"`
	Repository *string `json:"repository,omitempty"`
	Sort *string `json:"sort,omitempty"`
	TokenId *[]any `json:"token_id,omitempty"`
}

// OrganizationRole is the typed data model for the organization_role entity.
type OrganizationRole struct {
	BaseRole *string `json:"base_role,omitempty"`
	CreatedAt string `json:"created_at"`
	Description *string `json:"description,omitempty"`
	Id int `json:"id"`
	Name string `json:"name"`
	Organization map[string]any `json:"organization"`
	Permissions []any `json:"permissions"`
	Source *string `json:"source,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// OrganizationRoleLoadMatch is the typed request payload for OrganizationRole.LoadTyped.
type OrganizationRoleLoadMatch struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
}

// OrganizationSecretScanningAlert is the typed data model for the organization_secret_scanning_alert entity.
type OrganizationSecretScanningAlert struct {
	CreatedAt *string `json:"created_at,omitempty"`
	FirstLocationDetected *any `json:"first_location_detected,omitempty"`
	HasMoreLocations *bool `json:"has_more_locations,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	IsBase64Encoded *bool `json:"is_base64_encoded,omitempty"`
	LocationsUrl *string `json:"locations_url,omitempty"`
	MultiRepo *bool `json:"multi_repo,omitempty"`
	Number *int `json:"number,omitempty"`
	PubliclyLeaked *bool `json:"publicly_leaked,omitempty"`
	PushProtectionBypassRequestComment *string `json:"push_protection_bypass_request_comment,omitempty"`
	PushProtectionBypassRequestHtmlUrl *string `json:"push_protection_bypass_request_html_url,omitempty"`
	PushProtectionBypassRequestReviewer map[string]any `json:"push_protection_bypass_request_reviewer"`
	PushProtectionBypassRequestReviewerComment *string `json:"push_protection_bypass_request_reviewer_comment,omitempty"`
	PushProtectionBypassed *bool `json:"push_protection_bypassed,omitempty"`
	PushProtectionBypassedAt *string `json:"push_protection_bypassed_at,omitempty"`
	PushProtectionBypassedBy map[string]any `json:"push_protection_bypassed_by"`
	Repository map[string]any `json:"repository"`
	Resolution *string `json:"resolution,omitempty"`
	ResolutionComment *string `json:"resolution_comment,omitempty"`
	ResolvedAt *string `json:"resolved_at,omitempty"`
	ResolvedBy map[string]any `json:"resolved_by"`
	Secret *string `json:"secret,omitempty"`
	SecretType *string `json:"secret_type,omitempty"`
	SecretTypeDisplayName *string `json:"secret_type_display_name,omitempty"`
	State *string `json:"state,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Validity *string `json:"validity,omitempty"`
}

// OrganizationSecretScanningAlertListMatch is the typed request payload for OrganizationSecretScanningAlert.ListTyped.
type OrganizationSecretScanningAlertListMatch struct {
	OrgId string `json:"org_id"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Direction *string `json:"direction,omitempty"`
	HideSecret *bool `json:"hide_secret,omitempty"`
	IsMultiRepo *bool `json:"is_multi_repo,omitempty"`
	IsPubliclyLeaked *bool `json:"is_publicly_leaked,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
	SecretType *string `json:"secret_type,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
	Validity *string `json:"validity,omitempty"`
}

// OutsideCollaborator is the typed data model for the outside_collaborator entity.
type OutsideCollaborator struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// OutsideCollaboratorListMatch is the typed request payload for OutsideCollaborator.ListTyped.
type OutsideCollaboratorListMatch struct {
	OrgId string `json:"org_id"`
	Filter *string `json:"filter,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Package is the typed data model for the package entity.
type Package struct {
	Container map[string]any `json:"container"`
	CreatedAt string `json:"created_at"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Docker map[string]any `json:"docker"`
	GithubId int `json:"github_id"`
	HtmlUrl string `json:"html_url"`
	Id string `json:"id"`
	IncludedGigabytesBandwidth int `json:"included_gigabytes_bandwidth"`
	License *string `json:"license,omitempty"`
	Metadata map[string]any `json:"metadata"`
	Name string `json:"name"`
	Owner map[string]any `json:"owner"`
	PackageHtmlUrl string `json:"package_html_url"`
	PackageType string `json:"package_type"`
	Repository map[string]any `json:"repository"`
	TotalGigabytesBandwidthUsed int `json:"total_gigabytes_bandwidth_used"`
	TotalPaidGigabytesBandwidthUsed int `json:"total_paid_gigabytes_bandwidth_used"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	VersionCount int `json:"version_count"`
	Visibility string `json:"visibility"`
}

// PackageLoadMatch is the typed request payload for Package.LoadTyped.
type PackageLoadMatch struct {
	PackageName string `json:"package_name"`
	PackageType string `json:"package_type"`
}

// PackageListMatch is the typed request payload for Package.ListTyped.
type PackageListMatch struct {
	PackageType string `json:"package_type"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// PackageCreateData is the typed request payload for Package.CreateTyped.
type PackageCreateData struct {
	OrgId *string `json:"org_id,omitempty"`
	PackageId string `json:"package_id"`
	PackageName string `json:"package_name"`
	Token *string `json:"token,omitempty"`
	Username *string `json:"username,omitempty"`
	Container map[string]any `json:"container"`
	CreatedAt string `json:"created_at"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Docker map[string]any `json:"docker"`
	GithubId int `json:"github_id"`
	HtmlUrl string `json:"html_url"`
	Id string `json:"id"`
	IncludedGigabytesBandwidth int `json:"included_gigabytes_bandwidth"`
	License *string `json:"license,omitempty"`
	Metadata map[string]any `json:"metadata"`
	Name string `json:"name"`
	Owner map[string]any `json:"owner"`
	PackageHtmlUrl string `json:"package_html_url"`
	PackageType string `json:"package_type"`
	Repository map[string]any `json:"repository"`
	TotalGigabytesBandwidthUsed int `json:"total_gigabytes_bandwidth_used"`
	TotalPaidGigabytesBandwidthUsed int `json:"total_paid_gigabytes_bandwidth_used"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	VersionCount int `json:"version_count"`
	Visibility string `json:"visibility"`
}

// PackageRemoveMatch is the typed request payload for Package.RemoveTyped.
type PackageRemoveMatch struct {
	OrgId *string `json:"org_id,omitempty"`
	PackageId *string `json:"package_id,omitempty"`
	PackageName string `json:"package_name"`
	PackageVersionId *int `json:"package_version_id,omitempty"`
	Username *string `json:"username,omitempty"`
	Org *string `json:"org,omitempty"`
	PackageType *string `json:"package_type,omitempty"`
}

// Page is the typed data model for the page entity.
type Page struct {
	BuildType *string `json:"build_type,omitempty"`
	Cname string `json:"cname"`
	Custom404 bool `json:"custom_404"`
	HtmlUrl *string `json:"html_url,omitempty"`
	HttpsCertificate map[string]any `json:"https_certificate"`
	HttpsEnforced *bool `json:"https_enforced,omitempty"`
	PendingDomainUnverifiedAt *string `json:"pending_domain_unverified_at,omitempty"`
	ProtectedDomainState *string `json:"protected_domain_state,omitempty"`
	Public bool `json:"public"`
	Source map[string]any `json:"source"`
	Status string `json:"status"`
	Url string `json:"url"`
}

// PageLoadMatch is the typed request payload for Page.LoadTyped.
type PageLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// PageCreateData is the typed request payload for Page.CreateTyped.
type PageCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	BuildType *string `json:"build_type,omitempty"`
	Cname string `json:"cname"`
	Custom404 bool `json:"custom_404"`
	HtmlUrl *string `json:"html_url,omitempty"`
	HttpsCertificate map[string]any `json:"https_certificate"`
	HttpsEnforced *bool `json:"https_enforced,omitempty"`
	PendingDomainUnverifiedAt *string `json:"pending_domain_unverified_at,omitempty"`
	ProtectedDomainState *string `json:"protected_domain_state,omitempty"`
	Public bool `json:"public"`
	Source map[string]any `json:"source"`
	Status string `json:"status"`
	Url string `json:"url"`
}

// PageBuild is the typed data model for the page_build entity.
type PageBuild struct {
	Commit string `json:"commit"`
	CreatedAt string `json:"created_at"`
	Duration int `json:"duration"`
	Error map[string]any `json:"error"`
	Id *string `json:"id,omitempty"`
	Pusher map[string]any `json:"pusher"`
	Status string `json:"status"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// PageBuildLoadMatch is the typed request payload for PageBuild.LoadTyped.
type PageBuildLoadMatch struct {
	Id *int `json:"id,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// PageBuildListMatch is the typed request payload for PageBuild.ListTyped.
type PageBuildListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// PageBuildStatus is the typed data model for the page_build_status entity.
type PageBuildStatus struct {
	Status *string `json:"status,omitempty"`
	Url *string `json:"url,omitempty"`
}

// PageBuildStatusCreateData is the typed request payload for PageBuildStatus.CreateTyped.
type PageBuildStatusCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Status *string `json:"status,omitempty"`
	Url *string `json:"url,omitempty"`
}

// PageDeployment is the typed data model for the page_deployment entity.
type PageDeployment struct {
	ArtifactId *float64 `json:"artifact_id,omitempty"`
	ArtifactUrl *string `json:"artifact_url,omitempty"`
	Environment *string `json:"environment,omitempty"`
	OidcToken string `json:"oidc_token"`
	PagesBuildVersion string `json:"pages_build_version"`
}

// PageDeploymentCreateData is the typed request payload for PageDeployment.CreateTyped.
type PageDeploymentCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	ArtifactId *float64 `json:"artifact_id,omitempty"`
	ArtifactUrl *string `json:"artifact_url,omitempty"`
	Environment *string `json:"environment,omitempty"`
	OidcToken string `json:"oidc_token"`
	PagesBuildVersion string `json:"pages_build_version"`
}

// PagesDeploymentStatus is the typed data model for the pages_deployment_status entity.
type PagesDeploymentStatus struct {
	Status *string `json:"status,omitempty"`
}

// PagesDeploymentStatusLoadMatch is the typed request payload for PagesDeploymentStatus.LoadTyped.
type PagesDeploymentStatusLoadMatch struct {
	Owner string `json:"owner"`
	PagesDeploymentId string `json:"pages_deployment_id"`
	Repo string `json:"repo"`
}

// PagesDeploymentStatusCreateData is the typed request payload for PagesDeploymentStatus.CreateTyped.
type PagesDeploymentStatusCreateData struct {
	DeploymentId string `json:"deployment_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Status *string `json:"status,omitempty"`
}

// PagesHealthCheck is the typed data model for the pages_health_check entity.
type PagesHealthCheck struct {
	AltDomain *map[string]any `json:"alt_domain,omitempty"`
	Domain *map[string]any `json:"domain,omitempty"`
}

// PagesHealthCheckLoadMatch is the typed request payload for PagesHealthCheck.LoadTyped.
type PagesHealthCheckLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Participation is the typed data model for the participation entity.
type Participation struct {
	All []any `json:"all"`
	Owner []any `json:"owner"`
}

// ParticipationListMatch is the typed request payload for Participation.ListTyped.
type ParticipationListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// PendingDeployment is the typed data model for the pending_deployment entity.
type PendingDeployment struct {
	CurrentUserCanApprove bool `json:"current_user_can_approve"`
	Environment map[string]any `json:"environment"`
	Reviewers []any `json:"reviewers"`
	WaitTimer int `json:"wait_timer"`
	WaitTimerStartedAt string `json:"wait_timer_started_at"`
}

// PendingDeploymentListMatch is the typed request payload for PendingDeployment.ListTyped.
type PendingDeploymentListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	RunId int `json:"run_id"`
}

// PorterAuthor is the typed data model for the porter_author entity.
type PorterAuthor struct {
	Email string `json:"email"`
	Id int `json:"id"`
	ImportUrl string `json:"import_url"`
	Name string `json:"name"`
	RemoteId string `json:"remote_id"`
	RemoteName string `json:"remote_name"`
	Url string `json:"url"`
}

// PorterAuthorListMatch is the typed request payload for PorterAuthor.ListTyped.
type PorterAuthorListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Since *int `json:"since,omitempty"`
}

// PorterAuthorUpdateData is the typed request payload for PorterAuthor.UpdateTyped.
type PorterAuthorUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Email *string `json:"email,omitempty"`
	ImportUrl *string `json:"import_url,omitempty"`
	Name *string `json:"name,omitempty"`
	RemoteId *string `json:"remote_id,omitempty"`
	RemoteName *string `json:"remote_name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// PorterLargeFile is the typed data model for the porter_large_file entity.
type PorterLargeFile struct {
	Oid string `json:"oid"`
	Path string `json:"path"`
	RefName string `json:"ref_name"`
	Size int `json:"size"`
}

// PorterLargeFileListMatch is the typed request payload for PorterLargeFile.ListTyped.
type PorterLargeFileListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// PrivateRegistry is the typed data model for the private_registry entity.
type PrivateRegistry struct {
	CreatedAt string `json:"created_at"`
	EncryptedValue *string `json:"encrypted_value,omitempty"`
	Id *string `json:"id,omitempty"`
	Key string `json:"key"`
	KeyId string `json:"key_id"`
	Name string `json:"name"`
	RegistryType *string `json:"registry_type,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url *string `json:"url,omitempty"`
	Username *string `json:"username,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// PrivateRegistryLoadMatch is the typed request payload for PrivateRegistry.LoadTyped.
type PrivateRegistryLoadMatch struct {
	OrgId string `json:"org_id"`
}

// PrivateRegistryListMatch is the typed request payload for PrivateRegistry.ListTyped.
type PrivateRegistryListMatch struct {
	OrgId string `json:"org_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// PrivateRegistryUpdateData is the typed request payload for PrivateRegistry.UpdateTyped.
type PrivateRegistryUpdateData struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	EncryptedValue *string `json:"encrypted_value,omitempty"`
	Key *string `json:"key,omitempty"`
	KeyId *string `json:"key_id,omitempty"`
	Name *string `json:"name,omitempty"`
	RegistryType *string `json:"registry_type,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Username *string `json:"username,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// PrivateRegistryRemoveMatch is the typed request payload for PrivateRegistry.RemoveTyped.
type PrivateRegistryRemoveMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// PrivateUser is the typed data model for the private_user entity.
type PrivateUser struct {
}

// Project is the typed data model for the project entity.
type Project struct {
	AvatarUrl string `json:"avatar_url"`
	Body *string `json:"body,omitempty"`
	ColumnsUrl string `json:"columns_url"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	Number int `json:"number"`
	OrganizationPermission *string `json:"organization_permission,omitempty"`
	OrganizationsUrl string `json:"organizations_url"`
	OwnerUrl string `json:"owner_url"`
	Private *bool `json:"private,omitempty"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	State *string `json:"state,omitempty"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// ProjectLoadMatch is the typed request payload for Project.LoadTyped.
type ProjectLoadMatch struct {
	Id int `json:"id"`
}

// ProjectListMatch is the typed request payload for Project.ListTyped.
type ProjectListMatch struct {
	OrgId string `json:"org_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	State *string `json:"state,omitempty"`
}

// ProjectCreateData is the typed request payload for Project.CreateTyped.
type ProjectCreateData struct {
	AvatarUrl string `json:"avatar_url"`
	Body *string `json:"body,omitempty"`
	ColumnsUrl string `json:"columns_url"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	Number int `json:"number"`
	OrganizationPermission *string `json:"organization_permission,omitempty"`
	OrganizationsUrl string `json:"organizations_url"`
	OwnerUrl string `json:"owner_url"`
	Private *bool `json:"private,omitempty"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	State *string `json:"state,omitempty"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// ProjectUpdateData is the typed request payload for Project.UpdateTyped.
type ProjectUpdateData struct {
	Id int `json:"id"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Body *string `json:"body,omitempty"`
	ColumnsUrl *string `json:"columns_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Login *string `json:"login,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Number *int `json:"number,omitempty"`
	OrganizationPermission *string `json:"organization_permission,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	OwnerUrl *string `json:"owner_url,omitempty"`
	Private *bool `json:"private,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	State *string `json:"state,omitempty"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// ProjectRemoveMatch is the typed request payload for Project.RemoveTyped.
type ProjectRemoveMatch struct {
	Id int `json:"id"`
}

// ProjectCollaboratorPermission is the typed data model for the project_collaborator_permission entity.
type ProjectCollaboratorPermission struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// ProjectCollaboratorPermissionLoadMatch is the typed request payload for ProjectCollaboratorPermission.LoadTyped.
type ProjectCollaboratorPermissionLoadMatch struct {
	ProjectId int `json:"project_id"`
	Username string `json:"username"`
}

// ProjectColumn is the typed data model for the project_column entity.
type ProjectColumn struct {
	CardsUrl string `json:"cards_url"`
	CreatedAt string `json:"created_at"`
	Id int `json:"id"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	ProjectUrl string `json:"project_url"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// ProjectColumnLoadMatch is the typed request payload for ProjectColumn.LoadTyped.
type ProjectColumnLoadMatch struct {
	Id int `json:"id"`
}

// ProjectColumnListMatch is the typed request payload for ProjectColumn.ListTyped.
type ProjectColumnListMatch struct {
	Id int `json:"id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ProjectColumnCreateData is the typed request payload for ProjectColumn.CreateTyped.
type ProjectColumnCreateData struct {
	Id int `json:"id"`
	CardsUrl string `json:"cards_url"`
	CreatedAt string `json:"created_at"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	ProjectUrl string `json:"project_url"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// ProjectColumnUpdateData is the typed request payload for ProjectColumn.UpdateTyped.
type ProjectColumnUpdateData struct {
	Id int `json:"id"`
	CardsUrl *string `json:"cards_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	ProjectUrl *string `json:"project_url,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ProjectsClassic is the typed data model for the projects_classic entity.
type ProjectsClassic struct {
	Permission *string `json:"permission,omitempty"`
	Position string `json:"position"`
}

// ProjectsClassicCreateData is the typed request payload for ProjectsClassic.CreateTyped.
type ProjectsClassicCreateData struct {
	ColumnId int `json:"column_id"`
	Permission *string `json:"permission,omitempty"`
	Position string `json:"position"`
}

// ProjectsClassicUpdateData is the typed request payload for ProjectsClassic.UpdateTyped.
type ProjectsClassicUpdateData struct {
	ProjectId int `json:"project_id"`
	Username string `json:"username"`
	Permission *string `json:"permission,omitempty"`
	Position *string `json:"position,omitempty"`
}

// ProjectsClassicRemoveMatch is the typed request payload for ProjectsClassic.RemoveTyped.
type ProjectsClassicRemoveMatch struct {
	ColumnId int `json:"column_id"`
}

// ProjectsV2 is the typed data model for the projects_v2 entity.
type ProjectsV2 struct {
	ClosedAt string `json:"closed_at"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	DeletedAt string `json:"deleted_at"`
	DeletedBy map[string]any `json:"deleted_by"`
	Description string `json:"description"`
	Id float64 `json:"id"`
	IsTemplate *bool `json:"is_template,omitempty"`
	LatestStatusUpdate map[string]any `json:"latest_status_update"`
	NodeId string `json:"node_id"`
	Number int `json:"number"`
	Owner map[string]any `json:"owner"`
	Public bool `json:"public"`
	ShortDescription string `json:"short_description"`
	State *string `json:"state,omitempty"`
	Title string `json:"title"`
	UpdatedAt string `json:"updated_at"`
}

// ProjectsV2LoadMatch is the typed request payload for ProjectsV2.LoadTyped.
type ProjectsV2LoadMatch struct {
	Id int `json:"id"`
	OrgId *string `json:"org_id,omitempty"`
	Username *string `json:"username,omitempty"`
}

// ProjectsV2ListMatch is the typed request payload for ProjectsV2.ListTyped.
type ProjectsV2ListMatch struct {
	OrgId string `json:"org_id"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Q *string `json:"q,omitempty"`
}

// ProjectsV2Field is the typed data model for the projects_v2_field entity.
type ProjectsV2Field struct {
	Configuration *map[string]any `json:"configuration,omitempty"`
	CreatedAt string `json:"created_at"`
	DataType string `json:"data_type"`
	Id int `json:"id"`
	Name string `json:"name"`
	NodeId *string `json:"node_id,omitempty"`
	Options *[]any `json:"options,omitempty"`
	ProjectUrl string `json:"project_url"`
	UpdatedAt string `json:"updated_at"`
}

// ProjectsV2FieldLoadMatch is the typed request payload for ProjectsV2Field.LoadTyped.
type ProjectsV2FieldLoadMatch struct {
	Id int `json:"id"`
	OrgId *string `json:"org_id,omitempty"`
	ProjectsV2Id int `json:"projects_v2_id"`
	Username *string `json:"username,omitempty"`
}

// ProjectsV2FieldListMatch is the typed request payload for ProjectsV2Field.ListTyped.
type ProjectsV2FieldListMatch struct {
	OrgId *string `json:"org_id,omitempty"`
	ProjectNumber int `json:"project_number"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Username *string `json:"username,omitempty"`
}

// ProjectsV2ItemSimple is the typed data model for the projects_v2_item_simple entity.
type ProjectsV2ItemSimple struct {
	Id int `json:"id"`
	Type string `json:"type"`
}

// ProjectsV2ItemSimpleCreateData is the typed request payload for ProjectsV2ItemSimple.CreateTyped.
type ProjectsV2ItemSimpleCreateData struct {
	OrgId *string `json:"org_id,omitempty"`
	ProjectNumber int `json:"project_number"`
	Username *string `json:"username,omitempty"`
	Id int `json:"id"`
	Type string `json:"type"`
}

// ProjectsV2ItemWithContent is the typed data model for the projects_v2_item_with_content entity.
type ProjectsV2ItemWithContent struct {
	ArchivedAt string `json:"archived_at"`
	Content *map[string]any `json:"content,omitempty"`
	ContentType string `json:"content_type"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Fields *[]any `json:"fields,omitempty"`
	Id float64 `json:"id"`
	ItemUrl *string `json:"item_url,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	ProjectUrl *string `json:"project_url,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// ProjectsV2ItemWithContentLoadMatch is the typed request payload for ProjectsV2ItemWithContent.LoadTyped.
type ProjectsV2ItemWithContentLoadMatch struct {
	ItemId int `json:"item_id"`
	OrgId *string `json:"org_id,omitempty"`
	ProjectsV2Id int `json:"projects_v2_id"`
	Field *[]any `json:"field,omitempty"`
	Username *string `json:"username,omitempty"`
}

// ProjectsV2ItemWithContentListMatch is the typed request payload for ProjectsV2ItemWithContent.ListTyped.
type ProjectsV2ItemWithContentListMatch struct {
	OrgId *string `json:"org_id,omitempty"`
	ProjectNumber int `json:"project_number"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Field *[]any `json:"field,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Q *string `json:"q,omitempty"`
	Username *string `json:"username,omitempty"`
}

// ProjectsV2ItemWithContentUpdateData is the typed request payload for ProjectsV2ItemWithContent.UpdateTyped.
type ProjectsV2ItemWithContentUpdateData struct {
	ItemId int `json:"item_id"`
	OrgId *string `json:"org_id,omitempty"`
	ProjectsV2Id int `json:"projects_v2_id"`
	Username *string `json:"username,omitempty"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	Content *map[string]any `json:"content,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Fields *[]any `json:"fields,omitempty"`
	Id *float64 `json:"id,omitempty"`
	ItemUrl *string `json:"item_url,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	ProjectUrl *string `json:"project_url,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ProtectedBranch is the typed data model for the protected_branch entity.
type ProtectedBranch struct {
	AllowDeletions map[string]any `json:"allow_deletions"`
	AllowForcePushes map[string]any `json:"allow_force_pushes"`
	AllowForkSyncing *map[string]any `json:"allow_fork_syncing,omitempty"`
	BlockCreations map[string]any `json:"block_creations"`
	EnforceAdmins map[string]any `json:"enforce_admins"`
	LockBranch *map[string]any `json:"lock_branch,omitempty"`
	RequiredConversationResolution *map[string]any `json:"required_conversation_resolution,omitempty"`
	RequiredLinearHistory map[string]any `json:"required_linear_history"`
	RequiredPullRequestReviews map[string]any `json:"required_pull_request_reviews"`
	RequiredSignatures map[string]any `json:"required_signatures"`
	RequiredStatusChecks map[string]any `json:"required_status_checks"`
	Restrictions map[string]any `json:"restrictions"`
	Url string `json:"url"`
}

// ProtectedBranchUpdateData is the typed request payload for ProtectedBranch.UpdateTyped.
type ProtectedBranchUpdateData struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AllowDeletions *map[string]any `json:"allow_deletions,omitempty"`
	AllowForcePushes *map[string]any `json:"allow_force_pushes,omitempty"`
	AllowForkSyncing *map[string]any `json:"allow_fork_syncing,omitempty"`
	BlockCreations *map[string]any `json:"block_creations,omitempty"`
	EnforceAdmins *map[string]any `json:"enforce_admins,omitempty"`
	LockBranch *map[string]any `json:"lock_branch,omitempty"`
	RequiredConversationResolution *map[string]any `json:"required_conversation_resolution,omitempty"`
	RequiredLinearHistory *map[string]any `json:"required_linear_history,omitempty"`
	RequiredPullRequestReviews *map[string]any `json:"required_pull_request_reviews,omitempty"`
	RequiredSignatures *map[string]any `json:"required_signatures,omitempty"`
	RequiredStatusChecks *map[string]any `json:"required_status_checks,omitempty"`
	Restrictions *map[string]any `json:"restrictions,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ProtectedBranchAdminEnforced is the typed data model for the protected_branch_admin_enforced entity.
type ProtectedBranchAdminEnforced struct {
	Enabled bool `json:"enabled"`
	Url string `json:"url"`
}

// ProtectedBranchAdminEnforcedLoadMatch is the typed request payload for ProtectedBranchAdminEnforced.LoadTyped.
type ProtectedBranchAdminEnforcedLoadMatch struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ProtectedBranchAdminEnforcedCreateData is the typed request payload for ProtectedBranchAdminEnforced.CreateTyped.
type ProtectedBranchAdminEnforcedCreateData struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Enabled bool `json:"enabled"`
	Url string `json:"url"`
}

// ProtectedBranchPullRequestReview is the typed data model for the protected_branch_pull_request_review entity.
type ProtectedBranchPullRequestReview struct {
	BypassPullRequestAllowances *map[string]any `json:"bypass_pull_request_allowances,omitempty"`
	DismissStaleReviews bool `json:"dismiss_stale_reviews"`
	DismissalRestrictions *map[string]any `json:"dismissal_restrictions,omitempty"`
	RequireCodeOwnerReviews bool `json:"require_code_owner_reviews"`
	RequireLastPushApproval *bool `json:"require_last_push_approval,omitempty"`
	RequiredApprovingReviewCount *int `json:"required_approving_review_count,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ProtectedBranchPullRequestReviewLoadMatch is the typed request payload for ProtectedBranchPullRequestReview.LoadTyped.
type ProtectedBranchPullRequestReviewLoadMatch struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ProtectedBranchPullRequestReviewUpdateData is the typed request payload for ProtectedBranchPullRequestReview.UpdateTyped.
type ProtectedBranchPullRequestReviewUpdateData struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	BypassPullRequestAllowances *map[string]any `json:"bypass_pull_request_allowances,omitempty"`
	DismissStaleReviews *bool `json:"dismiss_stale_reviews,omitempty"`
	DismissalRestrictions *map[string]any `json:"dismissal_restrictions,omitempty"`
	RequireCodeOwnerReviews *bool `json:"require_code_owner_reviews,omitempty"`
	RequireLastPushApproval *bool `json:"require_last_push_approval,omitempty"`
	RequiredApprovingReviewCount *int `json:"required_approving_review_count,omitempty"`
	Url *string `json:"url,omitempty"`
}

// PublicMember is the typed data model for the public_member entity.
type PublicMember struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// PublicMemberListMatch is the typed request payload for PublicMember.ListTyped.
type PublicMemberListMatch struct {
	OrgId string `json:"org_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Pull is the typed data model for the pull entity.
type Pull struct {
	ActiveLockReason *string `json:"active_lock_reason,omitempty"`
	Additions int `json:"additions"`
	Assignee map[string]any `json:"assignee"`
	Assignees *[]any `json:"assignees,omitempty"`
	AuthorAssociation string `json:"author_association"`
	AutoMerge map[string]any `json:"auto_merge"`
	Base map[string]any `json:"base"`
	Body string `json:"body"`
	ChangedFiles int `json:"changed_files"`
	ClosedAt string `json:"closed_at"`
	Comments int `json:"comments"`
	CommentsUrl string `json:"comments_url"`
	CommitMessage *string `json:"commit_message,omitempty"`
	CommitTitle *string `json:"commit_title,omitempty"`
	Commits int `json:"commits"`
	CommitsUrl string `json:"commits_url"`
	CreatedAt string `json:"created_at"`
	Deletions int `json:"deletions"`
	DiffUrl string `json:"diff_url"`
	Draft *bool `json:"draft,omitempty"`
	ExpectedHeadSha *string `json:"expected_head_sha,omitempty"`
	Head map[string]any `json:"head"`
	HeadRepo *string `json:"head_repo,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Issue *int `json:"issue,omitempty"`
	IssueUrl string `json:"issue_url"`
	Labels []any `json:"labels"`
	Links map[string]any `json:"links"`
	Locked bool `json:"locked"`
	MaintainerCanModify bool `json:"maintainer_can_modify"`
	MergeCommitSha string `json:"merge_commit_sha"`
	MergeMethod *string `json:"merge_method,omitempty"`
	Mergeable bool `json:"mergeable"`
	MergeableState string `json:"mergeable_state"`
	Merged bool `json:"merged"`
	MergedAt string `json:"merged_at"`
	MergedBy map[string]any `json:"merged_by"`
	Message string `json:"message"`
	Milestone map[string]any `json:"milestone"`
	NodeId string `json:"node_id"`
	Number int `json:"number"`
	PatchUrl string `json:"patch_url"`
	Rebaseable *bool `json:"rebaseable,omitempty"`
	RequestedReviewers *[]any `json:"requested_reviewers,omitempty"`
	RequestedTeams *[]any `json:"requested_teams,omitempty"`
	ReviewCommentUrl string `json:"review_comment_url"`
	ReviewComments int `json:"review_comments"`
	ReviewCommentsUrl string `json:"review_comments_url"`
	Sha string `json:"sha"`
	State string `json:"state"`
	StatusesUrl string `json:"statuses_url"`
	Title string `json:"title"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// PullLoadMatch is the typed request payload for Pull.LoadTyped.
type PullLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// PullListMatch is the typed request payload for Pull.ListTyped.
type PullListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Base *string `json:"base,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Head *string `json:"head,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
	CommitSha *string `json:"commit_sha,omitempty"`
}

// PullCreateData is the typed request payload for Pull.CreateTyped.
type PullCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	ActiveLockReason *string `json:"active_lock_reason,omitempty"`
	Additions int `json:"additions"`
	Assignee map[string]any `json:"assignee"`
	Assignees *[]any `json:"assignees,omitempty"`
	AuthorAssociation string `json:"author_association"`
	AutoMerge map[string]any `json:"auto_merge"`
	Base map[string]any `json:"base"`
	Body string `json:"body"`
	ChangedFiles int `json:"changed_files"`
	ClosedAt string `json:"closed_at"`
	Comments int `json:"comments"`
	CommentsUrl string `json:"comments_url"`
	CommitMessage *string `json:"commit_message,omitempty"`
	CommitTitle *string `json:"commit_title,omitempty"`
	Commits int `json:"commits"`
	CommitsUrl string `json:"commits_url"`
	CreatedAt string `json:"created_at"`
	Deletions int `json:"deletions"`
	DiffUrl string `json:"diff_url"`
	Draft *bool `json:"draft,omitempty"`
	ExpectedHeadSha *string `json:"expected_head_sha,omitempty"`
	Head map[string]any `json:"head"`
	HeadRepo *string `json:"head_repo,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Issue *int `json:"issue,omitempty"`
	IssueUrl string `json:"issue_url"`
	Labels []any `json:"labels"`
	Links map[string]any `json:"links"`
	Locked bool `json:"locked"`
	MaintainerCanModify bool `json:"maintainer_can_modify"`
	MergeCommitSha string `json:"merge_commit_sha"`
	MergeMethod *string `json:"merge_method,omitempty"`
	Mergeable bool `json:"mergeable"`
	MergeableState string `json:"mergeable_state"`
	Merged bool `json:"merged"`
	MergedAt string `json:"merged_at"`
	MergedBy map[string]any `json:"merged_by"`
	Message string `json:"message"`
	Milestone map[string]any `json:"milestone"`
	NodeId string `json:"node_id"`
	Number int `json:"number"`
	PatchUrl string `json:"patch_url"`
	Rebaseable *bool `json:"rebaseable,omitempty"`
	RequestedReviewers *[]any `json:"requested_reviewers,omitempty"`
	RequestedTeams *[]any `json:"requested_teams,omitempty"`
	ReviewCommentUrl string `json:"review_comment_url"`
	ReviewComments int `json:"review_comments"`
	ReviewCommentsUrl string `json:"review_comments_url"`
	Sha string `json:"sha"`
	State string `json:"state"`
	StatusesUrl string `json:"statuses_url"`
	Title string `json:"title"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// PullUpdateData is the typed request payload for Pull.UpdateTyped.
type PullUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	ActiveLockReason *string `json:"active_lock_reason,omitempty"`
	Additions *int `json:"additions,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	Assignees *[]any `json:"assignees,omitempty"`
	AuthorAssociation *string `json:"author_association,omitempty"`
	AutoMerge *map[string]any `json:"auto_merge,omitempty"`
	Base *map[string]any `json:"base,omitempty"`
	Body *string `json:"body,omitempty"`
	ChangedFiles *int `json:"changed_files,omitempty"`
	ClosedAt *string `json:"closed_at,omitempty"`
	Comments *int `json:"comments,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitMessage *string `json:"commit_message,omitempty"`
	CommitTitle *string `json:"commit_title,omitempty"`
	Commits *int `json:"commits,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Deletions *int `json:"deletions,omitempty"`
	DiffUrl *string `json:"diff_url,omitempty"`
	Draft *bool `json:"draft,omitempty"`
	ExpectedHeadSha *string `json:"expected_head_sha,omitempty"`
	Head *map[string]any `json:"head,omitempty"`
	HeadRepo *string `json:"head_repo,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Issue *int `json:"issue,omitempty"`
	IssueUrl *string `json:"issue_url,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	Locked *bool `json:"locked,omitempty"`
	MaintainerCanModify *bool `json:"maintainer_can_modify,omitempty"`
	MergeCommitSha *string `json:"merge_commit_sha,omitempty"`
	MergeMethod *string `json:"merge_method,omitempty"`
	Mergeable *bool `json:"mergeable,omitempty"`
	MergeableState *string `json:"mergeable_state,omitempty"`
	Merged *bool `json:"merged,omitempty"`
	MergedAt *string `json:"merged_at,omitempty"`
	MergedBy *map[string]any `json:"merged_by,omitempty"`
	Message *string `json:"message,omitempty"`
	Milestone *map[string]any `json:"milestone,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Number *int `json:"number,omitempty"`
	PatchUrl *string `json:"patch_url,omitempty"`
	Rebaseable *bool `json:"rebaseable,omitempty"`
	RequestedReviewers *[]any `json:"requested_reviewers,omitempty"`
	RequestedTeams *[]any `json:"requested_teams,omitempty"`
	ReviewCommentUrl *string `json:"review_comment_url,omitempty"`
	ReviewComments *int `json:"review_comments,omitempty"`
	ReviewCommentsUrl *string `json:"review_comments_url,omitempty"`
	Sha *string `json:"sha,omitempty"`
	State *string `json:"state,omitempty"`
	StatusesUrl *string `json:"statuses_url,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// PullRemoveMatch is the typed request payload for Pull.RemoveTyped.
type PullRemoveMatch struct {
	CommentId int `json:"comment_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// PullRequestReview is the typed data model for the pull_request_review entity.
type PullRequestReview struct {
	AuthorAssociation string `json:"author_association"`
	Body string `json:"body"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	Comments *[]any `json:"comments,omitempty"`
	CommitId string `json:"commit_id"`
	Event string `json:"event"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Links map[string]any `json:"links"`
	Message string `json:"message"`
	NodeId string `json:"node_id"`
	PullRequestUrl string `json:"pull_request_url"`
	State string `json:"state"`
	SubmittedAt *string `json:"submitted_at,omitempty"`
	Teams []any `json:"teams"`
	User map[string]any `json:"user"`
	Users []any `json:"users"`
}

// PullRequestReviewLoadMatch is the typed request payload for PullRequestReview.LoadTyped.
type PullRequestReviewLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	PullId int `json:"pull_id"`
	Repo string `json:"repo"`
}

// PullRequestReviewListMatch is the typed request payload for PullRequestReview.ListTyped.
type PullRequestReviewListMatch struct {
	Owner string `json:"owner"`
	PullNumber int `json:"pull_number"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// PullRequestReviewCreateData is the typed request payload for PullRequestReview.CreateTyped.
type PullRequestReviewCreateData struct {
	Owner string `json:"owner"`
	PullId *int `json:"pull_id,omitempty"`
	Repo string `json:"repo"`
	ReviewId *int `json:"review_id,omitempty"`
	PullNumber *int `json:"pull_number,omitempty"`
	AuthorAssociation string `json:"author_association"`
	Body string `json:"body"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	Comments *[]any `json:"comments,omitempty"`
	CommitId string `json:"commit_id"`
	Event string `json:"event"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Links map[string]any `json:"links"`
	Message string `json:"message"`
	NodeId string `json:"node_id"`
	PullRequestUrl string `json:"pull_request_url"`
	State string `json:"state"`
	SubmittedAt *string `json:"submitted_at,omitempty"`
	Teams []any `json:"teams"`
	User map[string]any `json:"user"`
	Users []any `json:"users"`
}

// PullRequestReviewUpdateData is the typed request payload for PullRequestReview.UpdateTyped.
type PullRequestReviewUpdateData struct {
	Id *int `json:"id,omitempty"`
	Owner string `json:"owner"`
	PullId int `json:"pull_id"`
	Repo string `json:"repo"`
	ReviewId *int `json:"review_id,omitempty"`
	AuthorAssociation *string `json:"author_association,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	Comments *[]any `json:"comments,omitempty"`
	CommitId *string `json:"commit_id,omitempty"`
	Event *string `json:"event,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	Message *string `json:"message,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	PullRequestUrl *string `json:"pull_request_url,omitempty"`
	State *string `json:"state,omitempty"`
	SubmittedAt *string `json:"submitted_at,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// PullRequestReviewRemoveMatch is the typed request payload for PullRequestReview.RemoveTyped.
type PullRequestReviewRemoveMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	PullId int `json:"pull_id"`
	Repo string `json:"repo"`
}

// PullRequestReviewComment is the typed data model for the pull_request_review_comment entity.
type PullRequestReviewComment struct {
	AuthorAssociation string `json:"author_association"`
	Body string `json:"body"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	CommitId string `json:"commit_id"`
	CreatedAt string `json:"created_at"`
	DiffHunk string `json:"diff_hunk"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	InReplyTo *int `json:"in_reply_to,omitempty"`
	InReplyToId *int `json:"in_reply_to_id,omitempty"`
	Line *int `json:"line,omitempty"`
	Links map[string]any `json:"links"`
	NodeId string `json:"node_id"`
	OriginalCommitId string `json:"original_commit_id"`
	OriginalLine *int `json:"original_line,omitempty"`
	OriginalPosition *int `json:"original_position,omitempty"`
	OriginalStartLine *int `json:"original_start_line,omitempty"`
	Path string `json:"path"`
	Position *int `json:"position,omitempty"`
	PullRequestReviewId int `json:"pull_request_review_id"`
	PullRequestUrl string `json:"pull_request_url"`
	Reactions map[string]any `json:"reactions"`
	Side *string `json:"side,omitempty"`
	StartLine *int `json:"start_line,omitempty"`
	StartSide *string `json:"start_side,omitempty"`
	SubjectType *string `json:"subject_type,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// PullRequestReviewCommentLoadMatch is the typed request payload for PullRequestReviewComment.LoadTyped.
type PullRequestReviewCommentLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// PullRequestReviewCommentListMatch is the typed request payload for PullRequestReviewComment.ListTyped.
type PullRequestReviewCommentListMatch struct {
	Owner string `json:"owner"`
	PullNumber *int `json:"pull_number,omitempty"`
	Repo string `json:"repo"`
	Direction *string `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Since *string `json:"since,omitempty"`
	Sort *string `json:"sort,omitempty"`
}

// PullRequestReviewCommentCreateData is the typed request payload for PullRequestReviewComment.CreateTyped.
type PullRequestReviewCommentCreateData struct {
	CommentId *int `json:"comment_id,omitempty"`
	Owner string `json:"owner"`
	PullId *int `json:"pull_id,omitempty"`
	Repo string `json:"repo"`
	PullNumber *int `json:"pull_number,omitempty"`
	AuthorAssociation string `json:"author_association"`
	Body string `json:"body"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	CommitId string `json:"commit_id"`
	CreatedAt string `json:"created_at"`
	DiffHunk string `json:"diff_hunk"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	InReplyTo *int `json:"in_reply_to,omitempty"`
	InReplyToId *int `json:"in_reply_to_id,omitempty"`
	Line *int `json:"line,omitempty"`
	Links map[string]any `json:"links"`
	NodeId string `json:"node_id"`
	OriginalCommitId string `json:"original_commit_id"`
	OriginalLine *int `json:"original_line,omitempty"`
	OriginalPosition *int `json:"original_position,omitempty"`
	OriginalStartLine *int `json:"original_start_line,omitempty"`
	Path string `json:"path"`
	Position *int `json:"position,omitempty"`
	PullRequestReviewId int `json:"pull_request_review_id"`
	PullRequestUrl string `json:"pull_request_url"`
	Reactions map[string]any `json:"reactions"`
	Side *string `json:"side,omitempty"`
	StartLine *int `json:"start_line,omitempty"`
	StartSide *string `json:"start_side,omitempty"`
	SubjectType *string `json:"subject_type,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// PullRequestReviewCommentUpdateData is the typed request payload for PullRequestReviewComment.UpdateTyped.
type PullRequestReviewCommentUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AuthorAssociation *string `json:"author_association,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	CommitId *string `json:"commit_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DiffHunk *string `json:"diff_hunk,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	InReplyTo *int `json:"in_reply_to,omitempty"`
	InReplyToId *int `json:"in_reply_to_id,omitempty"`
	Line *int `json:"line,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	OriginalCommitId *string `json:"original_commit_id,omitempty"`
	OriginalLine *int `json:"original_line,omitempty"`
	OriginalPosition *int `json:"original_position,omitempty"`
	OriginalStartLine *int `json:"original_start_line,omitempty"`
	Path *string `json:"path,omitempty"`
	Position *int `json:"position,omitempty"`
	PullRequestReviewId *int `json:"pull_request_review_id,omitempty"`
	PullRequestUrl *string `json:"pull_request_url,omitempty"`
	Reactions *map[string]any `json:"reactions,omitempty"`
	Side *string `json:"side,omitempty"`
	StartLine *int `json:"start_line,omitempty"`
	StartSide *string `json:"start_side,omitempty"`
	SubjectType *string `json:"subject_type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// PullRequestSimple is the typed data model for the pull_request_simple entity.
type PullRequestSimple struct {
	Reviewers *[]any `json:"reviewers,omitempty"`
	TeamReviewers *[]any `json:"team_reviewers,omitempty"`
}

// PullRequestSimpleCreateData is the typed request payload for PullRequestSimple.CreateTyped.
type PullRequestSimpleCreateData struct {
	Owner string `json:"owner"`
	PullNumber int `json:"pull_number"`
	Repo string `json:"repo"`
	Reviewers *[]any `json:"reviewers,omitempty"`
	TeamReviewers *[]any `json:"team_reviewers,omitempty"`
}

// PullRequestSimpleRemoveMatch is the typed request payload for PullRequestSimple.RemoveTyped.
type PullRequestSimpleRemoveMatch struct {
	Owner string `json:"owner"`
	PullNumber int `json:"pull_number"`
	Repo string `json:"repo"`
}

// RateLimit is the typed data model for the rate_limit entity.
type RateLimit struct {
	Rate map[string]any `json:"rate"`
	Resources map[string]any `json:"resources"`
}

// RateLimitLoadMatch is the typed request payload for RateLimit.LoadTyped.
type RateLimitLoadMatch struct {
	Rate *map[string]any `json:"rate,omitempty"`
	Resources *map[string]any `json:"resources,omitempty"`
}

// Reaction is the typed data model for the reaction entity.
type Reaction struct {
	AvatarUrl string `json:"avatar_url"`
	Content string `json:"content"`
	CreatedAt string `json:"created_at"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// ReactionListMatch is the typed request payload for Reaction.ListTyped.
type ReactionListMatch struct {
	DiscussionNumber int `json:"discussion_number"`
	TeamId int `json:"team_id"`
	Content *string `json:"content,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ReactionCreateData is the typed request payload for Reaction.CreateTyped.
type ReactionCreateData struct {
	DiscussionNumber int `json:"discussion_number"`
	TeamId int `json:"team_id"`
	AvatarUrl string `json:"avatar_url"`
	Content string `json:"content"`
	CreatedAt string `json:"created_at"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// ReactionRemoveMatch is the typed request payload for Reaction.RemoveTyped.
type ReactionRemoveMatch struct {
	CommentId *int `json:"comment_id,omitempty"`
	DiscussionId *int `json:"discussion_id,omitempty"`
	Id int `json:"id"`
	OrgId *string `json:"org_id,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Owner *string `json:"owner,omitempty"`
	Repo *string `json:"repo,omitempty"`
	IssueId *int `json:"issue_id,omitempty"`
	ReleaseId *int `json:"release_id,omitempty"`
}

// Referrer is the typed data model for the referrer entity.
type Referrer struct {
	Count int `json:"count"`
	Referrer string `json:"referrer"`
	Uniques int `json:"uniques"`
}

// ReferrerListMatch is the typed request payload for Referrer.ListTyped.
type ReferrerListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Release is the typed data model for the release entity.
type Release struct {
	Assets []any `json:"assets"`
	AssetsUrl string `json:"assets_url"`
	Author map[string]any `json:"author"`
	Body *string `json:"body,omitempty"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	BrowserDownloadUrl string `json:"browser_download_url"`
	ContentType string `json:"content_type"`
	CreatedAt string `json:"created_at"`
	Digest string `json:"digest"`
	DiscussionCategoryName *string `json:"discussion_category_name,omitempty"`
	DiscussionUrl *string `json:"discussion_url,omitempty"`
	DownloadCount int `json:"download_count"`
	Draft bool `json:"draft"`
	GenerateReleaseNotes *bool `json:"generate_release_notes,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Immutable *bool `json:"immutable,omitempty"`
	Label string `json:"label"`
	MakeLatest *string `json:"make_latest,omitempty"`
	MentionsCount *int `json:"mentions_count,omitempty"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Prerelease bool `json:"prerelease"`
	PublishedAt string `json:"published_at"`
	Reactions map[string]any `json:"reactions"`
	Size int `json:"size"`
	State string `json:"state"`
	TagName string `json:"tag_name"`
	TarballUrl string `json:"tarball_url"`
	TargetCommitish string `json:"target_commitish"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UploadUrl string `json:"upload_url"`
	Uploader map[string]any `json:"uploader"`
	Url string `json:"url"`
	ZipballUrl string `json:"zipball_url"`
}

// ReleaseLoadMatch is the typed request payload for Release.LoadTyped.
type ReleaseLoadMatch struct {
	Id *int `json:"id,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Tag *string `json:"tag,omitempty"`
}

// ReleaseListMatch is the typed request payload for Release.ListTyped.
type ReleaseListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ReleaseCreateData is the typed request payload for Release.CreateTyped.
type ReleaseCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Assets []any `json:"assets"`
	AssetsUrl string `json:"assets_url"`
	Author map[string]any `json:"author"`
	Body *string `json:"body,omitempty"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	BrowserDownloadUrl string `json:"browser_download_url"`
	ContentType string `json:"content_type"`
	CreatedAt string `json:"created_at"`
	Digest string `json:"digest"`
	DiscussionCategoryName *string `json:"discussion_category_name,omitempty"`
	DiscussionUrl *string `json:"discussion_url,omitempty"`
	DownloadCount int `json:"download_count"`
	Draft bool `json:"draft"`
	GenerateReleaseNotes *bool `json:"generate_release_notes,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Immutable *bool `json:"immutable,omitempty"`
	Label string `json:"label"`
	MakeLatest *string `json:"make_latest,omitempty"`
	MentionsCount *int `json:"mentions_count,omitempty"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Prerelease bool `json:"prerelease"`
	PublishedAt string `json:"published_at"`
	Reactions map[string]any `json:"reactions"`
	Size int `json:"size"`
	State string `json:"state"`
	TagName string `json:"tag_name"`
	TarballUrl string `json:"tarball_url"`
	TargetCommitish string `json:"target_commitish"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UploadUrl string `json:"upload_url"`
	Uploader map[string]any `json:"uploader"`
	Url string `json:"url"`
	ZipballUrl string `json:"zipball_url"`
}

// ReleaseUpdateData is the typed request payload for Release.UpdateTyped.
type ReleaseUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Assets *[]any `json:"assets,omitempty"`
	AssetsUrl *string `json:"assets_url,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	BrowserDownloadUrl *string `json:"browser_download_url,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Digest *string `json:"digest,omitempty"`
	DiscussionCategoryName *string `json:"discussion_category_name,omitempty"`
	DiscussionUrl *string `json:"discussion_url,omitempty"`
	DownloadCount *int `json:"download_count,omitempty"`
	Draft *bool `json:"draft,omitempty"`
	GenerateReleaseNotes *bool `json:"generate_release_notes,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Immutable *bool `json:"immutable,omitempty"`
	Label *string `json:"label,omitempty"`
	MakeLatest *string `json:"make_latest,omitempty"`
	MentionsCount *int `json:"mentions_count,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Prerelease *bool `json:"prerelease,omitempty"`
	PublishedAt *string `json:"published_at,omitempty"`
	Reactions *map[string]any `json:"reactions,omitempty"`
	Size *int `json:"size,omitempty"`
	State *string `json:"state,omitempty"`
	TagName *string `json:"tag_name,omitempty"`
	TarballUrl *string `json:"tarball_url,omitempty"`
	TargetCommitish *string `json:"target_commitish,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UploadUrl *string `json:"upload_url,omitempty"`
	Uploader *map[string]any `json:"uploader,omitempty"`
	Url *string `json:"url,omitempty"`
	ZipballUrl *string `json:"zipball_url,omitempty"`
}

// ReleaseAsset is the typed data model for the release_asset entity.
type ReleaseAsset struct {
	AvatarUrl string `json:"avatar_url"`
	BrowserDownloadUrl *string `json:"browser_download_url,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Digest *string `json:"digest,omitempty"`
	DownloadCount *int `json:"download_count,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Label *string `json:"label,omitempty"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	Size *int `json:"size,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	State *string `json:"state,omitempty"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Uploader *map[string]any `json:"uploader,omitempty"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// ReleaseAssetLoadMatch is the typed request payload for ReleaseAsset.LoadTyped.
type ReleaseAssetLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// ReleaseAssetListMatch is the typed request payload for ReleaseAsset.ListTyped.
type ReleaseAssetListMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ReleaseAssetCreateData is the typed request payload for ReleaseAsset.CreateTyped.
type ReleaseAssetCreateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Label *string `json:"label,omitempty"`
	Name string `json:"name"`
	AvatarUrl string `json:"avatar_url"`
	BrowserDownloadUrl *string `json:"browser_download_url,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Digest *string `json:"digest,omitempty"`
	DownloadCount *int `json:"download_count,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Login string `json:"login"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	Size *int `json:"size,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	State *string `json:"state,omitempty"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Uploader *map[string]any `json:"uploader,omitempty"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// ReleaseAssetUpdateData is the typed request payload for ReleaseAsset.UpdateTyped.
type ReleaseAssetUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BrowserDownloadUrl *string `json:"browser_download_url,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Digest *string `json:"digest,omitempty"`
	DownloadCount *int `json:"download_count,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Label *string `json:"label,omitempty"`
	Login *string `json:"login,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	Size *int `json:"size,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	State *string `json:"state,omitempty"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Uploader *map[string]any `json:"uploader,omitempty"`
	Url *string `json:"url,omitempty"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// ReleaseNotesContent is the typed data model for the release_notes_content entity.
type ReleaseNotesContent struct {
	Body string `json:"body"`
	ConfigurationFilePath *string `json:"configuration_file_path,omitempty"`
	Name string `json:"name"`
	PreviousTagName *string `json:"previous_tag_name,omitempty"`
	TagName string `json:"tag_name"`
	TargetCommitish *string `json:"target_commitish,omitempty"`
}

// ReleaseNotesContentCreateData is the typed request payload for ReleaseNotesContent.CreateTyped.
type ReleaseNotesContentCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Body string `json:"body"`
	ConfigurationFilePath *string `json:"configuration_file_path,omitempty"`
	Name string `json:"name"`
	PreviousTagName *string `json:"previous_tag_name,omitempty"`
	TagName string `json:"tag_name"`
	TargetCommitish *string `json:"target_commitish,omitempty"`
}

// Remove is the typed data model for the remove entity.
type Remove struct {
	Usernames []any `json:"usernames"`
}

// RemoveCreateData is the typed request payload for Remove.CreateTyped.
type RemoveCreateData struct {
	Enterprise string `json:"enterprise"`
	TeamId string `json:"team_id"`
	Usernames []any `json:"usernames"`
}

// Repo is the typed data model for the repo entity.
type Repo struct {
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	App map[string]any `json:"app"`
	ArchiveUrl string `json:"archive_url"`
	Archived bool `json:"archived"`
	AssigneesUrl string `json:"assignees_url"`
	Attestations *[]any `json:"attestations,omitempty"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	BuildType *string `json:"build_type,omitempty"`
	Bundle map[string]any `json:"bundle"`
	ClientPayload *map[string]any `json:"client_payload,omitempty"`
	CloneUrl string `json:"clone_url"`
	Cname *string `json:"cname,omitempty"`
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	Content *string `json:"content,omitempty"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt string `json:"created_at"`
	DefaultBranch string `json:"default_branch"`
	DefaultBranchOnly *bool `json:"default_branch_only,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentBranchPolicy map[string]any `json:"deployment_branch_policy"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled bool `json:"disabled"`
	DownloadUrl *string `json:"download_url,omitempty"`
	DownloadsUrl string `json:"downloads_url"`
	Enabled bool `json:"enabled"`
	Encoding *string `json:"encoding,omitempty"`
	EventType string `json:"event_type"`
	EventsUrl string `json:"events_url"`
	Fork bool `json:"fork"`
	Forks int `json:"forks"`
	ForksCount int `json:"forks_count"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl *string `json:"git_url,omitempty"`
	GithubId int `json:"github_id"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads bool `json:"has_downloads"`
	HasIssues bool `json:"has_issues"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasWiki bool `json:"has_wiki"`
	Homepage string `json:"homepage"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl *string `json:"html_url,omitempty"`
	HttpsEnforced *bool `json:"https_enforced,omitempty"`
	Id string `json:"id"`
	IntegrationUrl string `json:"integration_url"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language string `json:"language"`
	LanguagesUrl string `json:"languages_url"`
	License map[string]any `json:"license"`
	Links *map[string]any `json:"links,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl string `json:"mirror_url"`
	Name *string `json:"name,omitempty"`
	NewName *string `json:"new_name,omitempty"`
	NewOwner string `json:"new_owner"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues int `json:"open_issues"`
	OpenIssuesCount int `json:"open_issues_count"`
	Organization *string `json:"organization,omitempty"`
	Owner map[string]any `json:"owner"`
	Path *string `json:"path,omitempty"`
	Permissions map[string]any `json:"permissions"`
	Private bool `json:"private"`
	Properties []any `json:"properties"`
	ProtectionRules *[]any `json:"protection_rules,omitempty"`
	PullsUrl string `json:"pulls_url"`
	PushedAt string `json:"pushed_at"`
	ReleasesUrl string `json:"releases_url"`
	Sha *string `json:"sha,omitempty"`
	Size *int `json:"size,omitempty"`
	Slug string `json:"slug"`
	Source *any `json:"source,omitempty"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl string `json:"ssh_url"`
	StargazersCount int `json:"stargazers_count"`
	StargazersUrl string `json:"stargazers_url"`
	StarredAt *string `json:"starred_at,omitempty"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl string `json:"svn_url"`
	TagsUrl string `json:"tags_url"`
	TeamIds *[]any `json:"team_ids,omitempty"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	Type *string `json:"type,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url *string `json:"url,omitempty"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers int `json:"watchers"`
	WatchersCount int `json:"watchers_count"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// RepoLoadMatch is the typed request payload for Repo.LoadTyped.
type RepoLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	SubjectDigest *string `json:"subject_digest,omitempty"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	PredicateType *string `json:"predicate_type,omitempty"`
	Path *string `json:"path,omitempty"`
	Ref *string `json:"ref,omitempty"`
	Username *string `json:"username,omitempty"`
}

// RepoListMatch is the typed request payload for Repo.ListTyped.
type RepoListMatch struct {
	Affiliation *string `json:"affiliation,omitempty"`
	Before *string `json:"before,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Since *string `json:"since,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Type *string `json:"type,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// RepoCreateData is the typed request payload for Repo.CreateTyped.
type RepoCreateData struct {
	DeliveryId *int `json:"delivery_id,omitempty"`
	HookId *int `json:"hook_id,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	BranchId *string `json:"branch_id,omitempty"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	App map[string]any `json:"app"`
	ArchiveUrl string `json:"archive_url"`
	Archived bool `json:"archived"`
	AssigneesUrl string `json:"assignees_url"`
	Attestations *[]any `json:"attestations,omitempty"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	BuildType *string `json:"build_type,omitempty"`
	Bundle map[string]any `json:"bundle"`
	ClientPayload *map[string]any `json:"client_payload,omitempty"`
	CloneUrl string `json:"clone_url"`
	Cname *string `json:"cname,omitempty"`
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	Content *string `json:"content,omitempty"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt string `json:"created_at"`
	DefaultBranch string `json:"default_branch"`
	DefaultBranchOnly *bool `json:"default_branch_only,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentBranchPolicy map[string]any `json:"deployment_branch_policy"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled bool `json:"disabled"`
	DownloadUrl *string `json:"download_url,omitempty"`
	DownloadsUrl string `json:"downloads_url"`
	Enabled bool `json:"enabled"`
	Encoding *string `json:"encoding,omitempty"`
	EventType string `json:"event_type"`
	EventsUrl string `json:"events_url"`
	Fork bool `json:"fork"`
	Forks int `json:"forks"`
	ForksCount int `json:"forks_count"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl *string `json:"git_url,omitempty"`
	GithubId int `json:"github_id"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads bool `json:"has_downloads"`
	HasIssues bool `json:"has_issues"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasWiki bool `json:"has_wiki"`
	Homepage string `json:"homepage"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl *string `json:"html_url,omitempty"`
	HttpsEnforced *bool `json:"https_enforced,omitempty"`
	Id string `json:"id"`
	IntegrationUrl string `json:"integration_url"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language string `json:"language"`
	LanguagesUrl string `json:"languages_url"`
	License map[string]any `json:"license"`
	Links *map[string]any `json:"links,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl string `json:"mirror_url"`
	Name *string `json:"name,omitempty"`
	NewName *string `json:"new_name,omitempty"`
	NewOwner string `json:"new_owner"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues int `json:"open_issues"`
	OpenIssuesCount int `json:"open_issues_count"`
	Organization *string `json:"organization,omitempty"`
	Path *string `json:"path,omitempty"`
	Permissions map[string]any `json:"permissions"`
	Private bool `json:"private"`
	Properties []any `json:"properties"`
	ProtectionRules *[]any `json:"protection_rules,omitempty"`
	PullsUrl string `json:"pulls_url"`
	PushedAt string `json:"pushed_at"`
	ReleasesUrl string `json:"releases_url"`
	Sha *string `json:"sha,omitempty"`
	Size *int `json:"size,omitempty"`
	Slug string `json:"slug"`
	Source *any `json:"source,omitempty"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl string `json:"ssh_url"`
	StargazersCount int `json:"stargazers_count"`
	StargazersUrl string `json:"stargazers_url"`
	StarredAt *string `json:"starred_at,omitempty"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl string `json:"svn_url"`
	TagsUrl string `json:"tags_url"`
	TeamIds *[]any `json:"team_ids,omitempty"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	Type *string `json:"type,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url *string `json:"url,omitempty"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers int `json:"watchers"`
	WatchersCount int `json:"watchers_count"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// RepoUpdateData is the typed request payload for Repo.UpdateTyped.
type RepoUpdateData struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	App *map[string]any `json:"app,omitempty"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl *string `json:"assignees_url,omitempty"`
	Attestations *[]any `json:"attestations,omitempty"`
	BlobsUrl *string `json:"blobs_url,omitempty"`
	BranchesUrl *string `json:"branches_url,omitempty"`
	BuildType *string `json:"build_type,omitempty"`
	Bundle *map[string]any `json:"bundle,omitempty"`
	ClientPayload *map[string]any `json:"client_payload,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	Cname *string `json:"cname,omitempty"`
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
	CollaboratorsUrl *string `json:"collaborators_url,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CompareUrl *string `json:"compare_url,omitempty"`
	Content *string `json:"content,omitempty"`
	ContentsUrl *string `json:"contents_url,omitempty"`
	ContributorsUrl *string `json:"contributors_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DefaultBranchOnly *bool `json:"default_branch_only,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentBranchPolicy *map[string]any `json:"deployment_branch_policy,omitempty"`
	DeploymentsUrl *string `json:"deployments_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DownloadUrl *string `json:"download_url,omitempty"`
	DownloadsUrl *string `json:"downloads_url,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Encoding *string `json:"encoding,omitempty"`
	EventType *string `json:"event_type,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	Fork *bool `json:"fork,omitempty"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	GitCommitsUrl *string `json:"git_commits_url,omitempty"`
	GitRefsUrl *string `json:"git_refs_url,omitempty"`
	GitTagsUrl *string `json:"git_tags_url,omitempty"`
	GitUrl *string `json:"git_url,omitempty"`
	GithubId *int `json:"github_id,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl *string `json:"hooks_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	HttpsEnforced *bool `json:"https_enforced,omitempty"`
	Id *string `json:"id,omitempty"`
	IntegrationUrl *string `json:"integration_url,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl *string `json:"issue_comment_url,omitempty"`
	IssueEventsUrl *string `json:"issue_events_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	KeysUrl *string `json:"keys_url,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl *string `json:"languages_url,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl *string `json:"merges_url,omitempty"`
	MilestonesUrl *string `json:"milestones_url,omitempty"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NewName *string `json:"new_name,omitempty"`
	NewOwner *string `json:"new_owner,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationsUrl *string `json:"notifications_url,omitempty"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Organization *string `json:"organization,omitempty"`
	Path *string `json:"path,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private *bool `json:"private,omitempty"`
	Properties *[]any `json:"properties,omitempty"`
	ProtectionRules *[]any `json:"protection_rules,omitempty"`
	PullsUrl *string `json:"pulls_url,omitempty"`
	PushedAt *string `json:"pushed_at,omitempty"`
	ReleasesUrl *string `json:"releases_url,omitempty"`
	Sha *string `json:"sha,omitempty"`
	Size *int `json:"size,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Source *any `json:"source,omitempty"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl *string `json:"stargazers_url,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StatusesUrl *string `json:"statuses_url,omitempty"`
	SubscribersUrl *string `json:"subscribers_url,omitempty"`
	SubscriptionUrl *string `json:"subscription_url,omitempty"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl *string `json:"tags_url,omitempty"`
	TeamIds *[]any `json:"team_ids,omitempty"`
	TeamsUrl *string `json:"teams_url,omitempty"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl *string `json:"trees_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// RepoRemoveMatch is the typed request payload for Repo.RemoveTyped.
type RepoRemoveMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// Repository is the typed data model for the repository entity.
type Repository struct {
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	AnonymousAccessEnabled *bool `json:"anonymous_access_enabled,omitempty"`
	ArchiveUrl string `json:"archive_url"`
	Archived bool `json:"archived"`
	AssigneesUrl string `json:"assignees_url"`
	BlobsUrl string `json:"blobs_url"`
	BranchesUrl string `json:"branches_url"`
	CloneUrl string `json:"clone_url"`
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
	CollaboratorsUrl string `json:"collaborators_url"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt string `json:"created_at"`
	DefaultBranch string `json:"default_branch"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled bool `json:"disabled"`
	DownloadsUrl string `json:"downloads_url"`
	EventsUrl string `json:"events_url"`
	Fork bool `json:"fork"`
	Forks int `json:"forks"`
	ForksCount int `json:"forks_count"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl string `json:"git_url"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads bool `json:"has_downloads"`
	HasIssues bool `json:"has_issues"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasWiki bool `json:"has_wiki"`
	Homepage string `json:"homepage"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language string `json:"language"`
	LanguagesUrl string `json:"languages_url"`
	License map[string]any `json:"license"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergeCommitMessage *string `json:"merge_commit_message,omitempty"`
	MergeCommitTitle *string `json:"merge_commit_title,omitempty"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl string `json:"mirror_url"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	OpenIssues int `json:"open_issues"`
	OpenIssuesCount int `json:"open_issues_count"`
	Owner map[string]any `json:"owner"`
	Permissions map[string]any `json:"permissions"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	PushedAt string `json:"pushed_at"`
	ReleasesUrl string `json:"releases_url"`
	Size int `json:"size"`
	SquashMergeCommitMessage *string `json:"squash_merge_commit_message,omitempty"`
	SquashMergeCommitTitle *string `json:"squash_merge_commit_title,omitempty"`
	SshUrl string `json:"ssh_url"`
	StargazersCount int `json:"stargazers_count"`
	StargazersUrl string `json:"stargazers_url"`
	StarredAt *string `json:"starred_at,omitempty"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SvnUrl string `json:"svn_url"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers int `json:"watchers"`
	WatchersCount int `json:"watchers_count"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// RepositoryListMatch is the typed request payload for Repository.ListTyped.
type RepositoryListMatch struct {
	Direction *string `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Sort *string `json:"sort,omitempty"`
}

// RepositoryAdvisory is the typed data model for the repository_advisory entity.
type RepositoryAdvisory struct {
	Author any `json:"author"`
	ClosedAt string `json:"closed_at"`
	CollaboratingTeams []any `json:"collaborating_teams"`
	CollaboratingUsers []any `json:"collaborating_users"`
	CreatedAt string `json:"created_at"`
	Credits []any `json:"credits"`
	CreditsDetailed []any `json:"credits_detailed"`
	CveId string `json:"cve_id"`
	Cvss map[string]any `json:"cvss"`
	CvssSeverities *map[string]any `json:"cvss_severities,omitempty"`
	CvssVectorString *string `json:"cvss_vector_string,omitempty"`
	CweIds []any `json:"cwe_ids"`
	Cwes []any `json:"cwes"`
	Description string `json:"description"`
	GhsaId string `json:"ghsa_id"`
	HtmlUrl string `json:"html_url"`
	Identifiers []any `json:"identifiers"`
	PrivateFork any `json:"private_fork"`
	PublishedAt string `json:"published_at"`
	Publisher any `json:"publisher"`
	Severity string `json:"severity"`
	StartPrivateFork *bool `json:"start_private_fork,omitempty"`
	State string `json:"state"`
	Submission map[string]any `json:"submission"`
	Summary string `json:"summary"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	Vulnerabilities []any `json:"vulnerabilities"`
	WithdrawnAt string `json:"withdrawn_at"`
}

// RepositoryAdvisoryLoadMatch is the typed request payload for RepositoryAdvisory.LoadTyped.
type RepositoryAdvisoryLoadMatch struct {
	GhsaId string `json:"ghsa_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// RepositoryAdvisoryListMatch is the typed request payload for RepositoryAdvisory.ListTyped.
type RepositoryAdvisoryListMatch struct {
	OrgId string `json:"org_id"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Direction *string `json:"direction,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
}

// RepositoryAdvisoryCreateData is the typed request payload for RepositoryAdvisory.CreateTyped.
type RepositoryAdvisoryCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Author any `json:"author"`
	ClosedAt string `json:"closed_at"`
	CollaboratingTeams []any `json:"collaborating_teams"`
	CollaboratingUsers []any `json:"collaborating_users"`
	CreatedAt string `json:"created_at"`
	Credits []any `json:"credits"`
	CreditsDetailed []any `json:"credits_detailed"`
	CveId string `json:"cve_id"`
	Cvss map[string]any `json:"cvss"`
	CvssSeverities *map[string]any `json:"cvss_severities,omitempty"`
	CvssVectorString *string `json:"cvss_vector_string,omitempty"`
	CweIds []any `json:"cwe_ids"`
	Cwes []any `json:"cwes"`
	Description string `json:"description"`
	GhsaId string `json:"ghsa_id"`
	HtmlUrl string `json:"html_url"`
	Identifiers []any `json:"identifiers"`
	PrivateFork any `json:"private_fork"`
	PublishedAt string `json:"published_at"`
	Publisher any `json:"publisher"`
	Severity string `json:"severity"`
	StartPrivateFork *bool `json:"start_private_fork,omitempty"`
	State string `json:"state"`
	Submission map[string]any `json:"submission"`
	Summary string `json:"summary"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	Vulnerabilities []any `json:"vulnerabilities"`
	WithdrawnAt string `json:"withdrawn_at"`
}

// RepositoryAdvisoryUpdateData is the typed request payload for RepositoryAdvisory.UpdateTyped.
type RepositoryAdvisoryUpdateData struct {
	GhsaId string `json:"ghsa_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Author *any `json:"author,omitempty"`
	ClosedAt *string `json:"closed_at,omitempty"`
	CollaboratingTeams *[]any `json:"collaborating_teams,omitempty"`
	CollaboratingUsers *[]any `json:"collaborating_users,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Credits *[]any `json:"credits,omitempty"`
	CreditsDetailed *[]any `json:"credits_detailed,omitempty"`
	CveId *string `json:"cve_id,omitempty"`
	Cvss *map[string]any `json:"cvss,omitempty"`
	CvssSeverities *map[string]any `json:"cvss_severities,omitempty"`
	CvssVectorString *string `json:"cvss_vector_string,omitempty"`
	CweIds *[]any `json:"cwe_ids,omitempty"`
	Cwes *[]any `json:"cwes,omitempty"`
	Description *string `json:"description,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Identifiers *[]any `json:"identifiers,omitempty"`
	PrivateFork *any `json:"private_fork,omitempty"`
	PublishedAt *string `json:"published_at,omitempty"`
	Publisher *any `json:"publisher,omitempty"`
	Severity *string `json:"severity,omitempty"`
	StartPrivateFork *bool `json:"start_private_fork,omitempty"`
	State *string `json:"state,omitempty"`
	Submission *map[string]any `json:"submission,omitempty"`
	Summary *string `json:"summary,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Vulnerabilities *[]any `json:"vulnerabilities,omitempty"`
	WithdrawnAt *string `json:"withdrawn_at,omitempty"`
}

// RepositoryCollaboratorPermission is the typed data model for the repository_collaborator_permission entity.
type RepositoryCollaboratorPermission struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	Permissions map[string]any `json:"permissions"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	RoleName string `json:"role_name"`
	SiteAdmin bool `json:"site_admin"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// RepositoryCollaboratorPermissionLoadMatch is the typed request payload for RepositoryCollaboratorPermission.LoadTyped.
type RepositoryCollaboratorPermissionLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Username string `json:"username"`
}

// RepositoryInvitation is the typed data model for the repository_invitation entity.
type RepositoryInvitation struct {
	CreatedAt string `json:"created_at"`
	Expired *bool `json:"expired,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Invitee map[string]any `json:"invitee"`
	Inviter map[string]any `json:"inviter"`
	NodeId string `json:"node_id"`
	Permission *string `json:"permission,omitempty"`
	Permissions string `json:"permissions"`
	Repository map[string]any `json:"repository"`
	Url string `json:"url"`
}

// RepositoryInvitationListMatch is the typed request payload for RepositoryInvitation.ListTyped.
type RepositoryInvitationListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// RepositoryInvitationUpdateData is the typed request payload for RepositoryInvitation.UpdateTyped.
type RepositoryInvitationUpdateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Username string `json:"username"`
	CreatedAt *string `json:"created_at,omitempty"`
	Expired *bool `json:"expired,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	Invitee *map[string]any `json:"invitee,omitempty"`
	Inviter *map[string]any `json:"inviter,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Permission *string `json:"permission,omitempty"`
	Permissions *string `json:"permissions,omitempty"`
	Repository *map[string]any `json:"repository,omitempty"`
	Url *string `json:"url,omitempty"`
}

// RepositoryRuleDetailed is the typed data model for the repository_rule_detailed entity.
type RepositoryRuleDetailed struct {
	Parameters *map[string]any `json:"parameters,omitempty"`
	RulesetId *int `json:"ruleset_id,omitempty"`
	RulesetSource *string `json:"ruleset_source,omitempty"`
	RulesetSourceType *string `json:"ruleset_source_type,omitempty"`
	Type *string `json:"type,omitempty"`
}

// RepositoryRuleDetailedLoadMatch is the typed request payload for RepositoryRuleDetailed.LoadTyped.
type RepositoryRuleDetailedLoadMatch struct {
	Branch string `json:"branch"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// RepositoryRuleset is the typed data model for the repository_ruleset entity.
type RepositoryRuleset struct {
	BypassActors *[]any `json:"bypass_actors,omitempty"`
	Conditions *any `json:"conditions,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurrentUserCanBypass *string `json:"current_user_can_bypass,omitempty"`
	Enforcement string `json:"enforcement"`
	Id int `json:"id"`
	Links *map[string]any `json:"links,omitempty"`
	Name string `json:"name"`
	NodeId *string `json:"node_id,omitempty"`
	Rules *[]any `json:"rules,omitempty"`
	Source string `json:"source"`
	SourceType *string `json:"source_type,omitempty"`
	Target *string `json:"target,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// RepositoryRulesetLoadMatch is the typed request payload for RepositoryRuleset.LoadTyped.
type RepositoryRulesetLoadMatch struct {
	Id int `json:"id"`
	Owner *string `json:"owner,omitempty"`
	Repo *string `json:"repo,omitempty"`
	IncludesParent *bool `json:"includes_parent,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
}

// RepositoryRulesetListMatch is the typed request payload for RepositoryRuleset.ListTyped.
type RepositoryRulesetListMatch struct {
	OrgId string `json:"org_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Target *string `json:"target,omitempty"`
}

// RepositoryRulesetCreateData is the typed request payload for RepositoryRuleset.CreateTyped.
type RepositoryRulesetCreateData struct {
	OrgId string `json:"org_id"`
	BypassActors *[]any `json:"bypass_actors,omitempty"`
	Conditions *any `json:"conditions,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurrentUserCanBypass *string `json:"current_user_can_bypass,omitempty"`
	Enforcement string `json:"enforcement"`
	Id int `json:"id"`
	Links *map[string]any `json:"links,omitempty"`
	Name string `json:"name"`
	NodeId *string `json:"node_id,omitempty"`
	Rules *[]any `json:"rules,omitempty"`
	Source string `json:"source"`
	SourceType *string `json:"source_type,omitempty"`
	Target *string `json:"target,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// RepositoryRulesetUpdateData is the typed request payload for RepositoryRuleset.UpdateTyped.
type RepositoryRulesetUpdateData struct {
	Id int `json:"id"`
	Owner *string `json:"owner,omitempty"`
	Repo *string `json:"repo,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
	BypassActors *[]any `json:"bypass_actors,omitempty"`
	Conditions *any `json:"conditions,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurrentUserCanBypass *string `json:"current_user_can_bypass,omitempty"`
	Enforcement *string `json:"enforcement,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Rules *[]any `json:"rules,omitempty"`
	Source *string `json:"source,omitempty"`
	SourceType *string `json:"source_type,omitempty"`
	Target *string `json:"target,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// RepositorySubscription is the typed data model for the repository_subscription entity.
type RepositorySubscription struct {
	CreatedAt string `json:"created_at"`
	Ignored bool `json:"ignored"`
	Reason string `json:"reason"`
	RepositoryUrl string `json:"repository_url"`
	Subscribed bool `json:"subscribed"`
	Url string `json:"url"`
}

// RepositorySubscriptionLoadMatch is the typed request payload for RepositorySubscription.LoadTyped.
type RepositorySubscriptionLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// RepositorySubscriptionUpdateData is the typed request payload for RepositorySubscription.UpdateTyped.
type RepositorySubscriptionUpdateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	CreatedAt *string `json:"created_at,omitempty"`
	Ignored *bool `json:"ignored,omitempty"`
	Reason *string `json:"reason,omitempty"`
	RepositoryUrl *string `json:"repository_url,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ReviewComment is the typed data model for the review_comment entity.
type ReviewComment struct {
	AuthorAssociation string `json:"author_association"`
	Body string `json:"body"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	CommitId string `json:"commit_id"`
	CreatedAt string `json:"created_at"`
	DiffHunk string `json:"diff_hunk"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	InReplyToId *int `json:"in_reply_to_id,omitempty"`
	Line *int `json:"line,omitempty"`
	Links map[string]any `json:"links"`
	NodeId string `json:"node_id"`
	OriginalCommitId string `json:"original_commit_id"`
	OriginalLine *int `json:"original_line,omitempty"`
	OriginalPosition int `json:"original_position"`
	OriginalStartLine *int `json:"original_start_line,omitempty"`
	Path string `json:"path"`
	Position int `json:"position"`
	PullRequestReviewId int `json:"pull_request_review_id"`
	PullRequestUrl string `json:"pull_request_url"`
	Reactions map[string]any `json:"reactions"`
	Side *string `json:"side,omitempty"`
	StartLine *int `json:"start_line,omitempty"`
	StartSide *string `json:"start_side,omitempty"`
	SubjectType *string `json:"subject_type,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
}

// ReviewCommentListMatch is the typed request payload for ReviewComment.ListTyped.
type ReviewCommentListMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	PullId int `json:"pull_id"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// RuleSuite is the typed data model for the rule_suite entity.
type RuleSuite struct {
	ActorId *int `json:"actor_id,omitempty"`
	ActorName *string `json:"actor_name,omitempty"`
	AfterSha *string `json:"after_sha,omitempty"`
	BeforeSha *string `json:"before_sha,omitempty"`
	EvaluationResult *string `json:"evaluation_result,omitempty"`
	Id *int `json:"id,omitempty"`
	PushedAt *string `json:"pushed_at,omitempty"`
	Ref *string `json:"ref,omitempty"`
	RepositoryId *int `json:"repository_id,omitempty"`
	RepositoryName *string `json:"repository_name,omitempty"`
	Result *string `json:"result,omitempty"`
	RuleEvaluations *[]any `json:"rule_evaluations,omitempty"`
}

// RuleSuiteLoadMatch is the typed request payload for RuleSuite.LoadTyped.
type RuleSuiteLoadMatch struct {
	Id int `json:"id"`
	Owner *string `json:"owner,omitempty"`
	Repo *string `json:"repo,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
}

// RuleSuiteListMatch is the typed request payload for RuleSuite.ListTyped.
type RuleSuiteListMatch struct {
	OrgId string `json:"org_id"`
	ActorName *string `json:"actor_name,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Ref *string `json:"ref,omitempty"`
	RepositoryName *string `json:"repository_name,omitempty"`
	RuleSuiteResult *string `json:"rule_suite_result,omitempty"`
	TimePeriod *string `json:"time_period,omitempty"`
}

// RulesetVersion is the typed data model for the ruleset_version entity.
type RulesetVersion struct {
	Actor map[string]any `json:"actor"`
	Id *string `json:"id,omitempty"`
	UpdatedAt string `json:"updated_at"`
	VersionId int `json:"version_id"`
}

// RulesetVersionListMatch is the typed request payload for RulesetVersion.ListTyped.
type RulesetVersionListMatch struct {
	Id int `json:"id"`
	Owner *string `json:"owner,omitempty"`
	Repo *string `json:"repo,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
}

// RulesetVersionWithState is the typed data model for the ruleset_version_with_state entity.
type RulesetVersionWithState struct {
	Actor map[string]any `json:"actor"`
	State map[string]any `json:"state"`
	UpdatedAt string `json:"updated_at"`
	VersionId int `json:"version_id"`
}

// RulesetVersionWithStateLoadMatch is the typed request payload for RulesetVersionWithState.LoadTyped.
type RulesetVersionWithStateLoadMatch struct {
	Owner *string `json:"owner,omitempty"`
	Repo *string `json:"repo,omitempty"`
	RulesetId int `json:"ruleset_id"`
	VersionId int `json:"version_id"`
	OrgId *string `json:"org_id,omitempty"`
}

// Runner is the typed data model for the runner entity.
type Runner struct {
	Busy bool `json:"busy"`
	Ephemeral *bool `json:"ephemeral,omitempty"`
	Id int `json:"id"`
	Labels []any `json:"labels"`
	Name string `json:"name"`
	Os string `json:"os"`
	RunnerGroupId *int `json:"runner_group_id,omitempty"`
	Status string `json:"status"`
}

// RunnerLoadMatch is the typed request payload for Runner.LoadTyped.
type RunnerLoadMatch struct {
	Id int `json:"id"`
	Owner *string `json:"owner,omitempty"`
	Repo *string `json:"repo,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
}

// RunnerApplication is the typed data model for the runner_application entity.
type RunnerApplication struct {
	Architecture string `json:"architecture"`
	DownloadUrl string `json:"download_url"`
	Filename string `json:"filename"`
	Os string `json:"os"`
	Sha256Checksum *string `json:"sha256_checksum,omitempty"`
	TempDownloadToken *string `json:"temp_download_token,omitempty"`
}

// RunnerApplicationListMatch is the typed request payload for RunnerApplication.ListTyped.
type RunnerApplicationListMatch struct {
	OrgId string `json:"org_id"`
}

// RunnerGroup is the typed data model for the runner_group entity.
type RunnerGroup struct {
	AllowsPublicRepositories bool `json:"allows_public_repositories"`
	Default bool `json:"default"`
	HostedRunnersUrl *string `json:"hosted_runners_url,omitempty"`
	Id float64 `json:"id"`
	Inherited bool `json:"inherited"`
	InheritedAllowsPublicRepositories *bool `json:"inherited_allows_public_repositories,omitempty"`
	Name string `json:"name"`
	NetworkConfigurationId *string `json:"network_configuration_id,omitempty"`
	RestrictedToWorkflows *bool `json:"restricted_to_workflows,omitempty"`
	Runners *[]any `json:"runners,omitempty"`
	RunnersUrl string `json:"runners_url"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	SelectedWorkflows *[]any `json:"selected_workflows,omitempty"`
	Visibility string `json:"visibility"`
	WorkflowRestrictionsReadOnly *bool `json:"workflow_restrictions_read_only,omitempty"`
}

// RunnerGroupLoadMatch is the typed request payload for RunnerGroup.LoadTyped.
type RunnerGroupLoadMatch struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
}

// RunnerGroupCreateData is the typed request payload for RunnerGroup.CreateTyped.
type RunnerGroupCreateData struct {
	OrgId string `json:"org_id"`
	AllowsPublicRepositories bool `json:"allows_public_repositories"`
	Default bool `json:"default"`
	HostedRunnersUrl *string `json:"hosted_runners_url,omitempty"`
	Id float64 `json:"id"`
	Inherited bool `json:"inherited"`
	InheritedAllowsPublicRepositories *bool `json:"inherited_allows_public_repositories,omitempty"`
	Name string `json:"name"`
	NetworkConfigurationId *string `json:"network_configuration_id,omitempty"`
	RestrictedToWorkflows *bool `json:"restricted_to_workflows,omitempty"`
	Runners *[]any `json:"runners,omitempty"`
	RunnersUrl string `json:"runners_url"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	SelectedWorkflows *[]any `json:"selected_workflows,omitempty"`
	Visibility string `json:"visibility"`
	WorkflowRestrictionsReadOnly *bool `json:"workflow_restrictions_read_only,omitempty"`
}

// RunnerGroupUpdateData is the typed request payload for RunnerGroup.UpdateTyped.
type RunnerGroupUpdateData struct {
	Id int `json:"id"`
	OrgId string `json:"org_id"`
	AllowsPublicRepositories *bool `json:"allows_public_repositories,omitempty"`
	Default *bool `json:"default,omitempty"`
	HostedRunnersUrl *string `json:"hosted_runners_url,omitempty"`
	Inherited *bool `json:"inherited,omitempty"`
	InheritedAllowsPublicRepositories *bool `json:"inherited_allows_public_repositories,omitempty"`
	Name *string `json:"name,omitempty"`
	NetworkConfigurationId *string `json:"network_configuration_id,omitempty"`
	RestrictedToWorkflows *bool `json:"restricted_to_workflows,omitempty"`
	Runners *[]any `json:"runners,omitempty"`
	RunnersUrl *string `json:"runners_url,omitempty"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
	SelectedRepositoryIds *[]any `json:"selected_repository_ids,omitempty"`
	SelectedWorkflows *[]any `json:"selected_workflows,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WorkflowRestrictionsReadOnly *bool `json:"workflow_restrictions_read_only,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
	ActiveLockReason *string `json:"active_lock_reason,omitempty"`
	Aliases *[]any `json:"aliases,omitempty"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	ArchiveUrl string `json:"archive_url"`
	Archived bool `json:"archived"`
	Assignee map[string]any `json:"assignee"`
	Assignees *[]any `json:"assignees,omitempty"`
	AssigneesUrl string `json:"assignees_url"`
	Author map[string]any `json:"author"`
	AuthorAssociation string `json:"author_association"`
	AvatarUrl string `json:"avatar_url"`
	Bio *string `json:"bio,omitempty"`
	BlobsUrl string `json:"blobs_url"`
	Blog *string `json:"blog,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	BranchesUrl string `json:"branches_url"`
	CloneUrl string `json:"clone_url"`
	ClosedAt string `json:"closed_at"`
	CollaboratorsUrl string `json:"collaborators_url"`
	Color string `json:"color"`
	Comments int `json:"comments"`
	CommentsUrl string `json:"comments_url"`
	Commit map[string]any `json:"commit"`
	CommitsUrl string `json:"commits_url"`
	Committer map[string]any `json:"committer"`
	Company *string `json:"company,omitempty"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt string `json:"created_at"`
	CreatedBy string `json:"created_by"`
	Curated bool `json:"curated"`
	Default bool `json:"default"`
	DefaultBranch string `json:"default_branch"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled bool `json:"disabled"`
	DisplayName string `json:"display_name"`
	DownloadsUrl string `json:"downloads_url"`
	Draft *bool `json:"draft,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	Featured bool `json:"featured"`
	FileSize *int `json:"file_size,omitempty"`
	Followers *int `json:"followers,omitempty"`
	FollowersUrl string `json:"followers_url"`
	Following *int `json:"following,omitempty"`
	FollowingUrl string `json:"following_url"`
	Fork bool `json:"fork"`
	Forks int `json:"forks"`
	ForksCount int `json:"forks_count"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GistsUrl string `json:"gists_url"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl string `json:"git_url"`
	GravatarId string `json:"gravatar_id"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads bool `json:"has_downloads"`
	HasIssues bool `json:"has_issues"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasWiki bool `json:"has_wiki"`
	Hireable *bool `json:"hireable,omitempty"`
	Homepage string `json:"homepage"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueDependenciesSummary map[string]any `json:"issue_dependencies_summary"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssueFieldValues *[]any `json:"issue_field_values,omitempty"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	Labels []any `json:"labels"`
	LabelsUrl string `json:"labels_url"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl string `json:"languages_url"`
	LastModifiedAt *string `json:"last_modified_at,omitempty"`
	License map[string]any `json:"license"`
	LineNumbers *[]any `json:"line_numbers,omitempty"`
	Location *string `json:"location,omitempty"`
	Locked bool `json:"locked"`
	Login string `json:"login"`
	LogoUrl *string `json:"logo_url,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MergesUrl string `json:"merges_url"`
	Milestone map[string]any `json:"milestone"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl string `json:"mirror_url"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	NotificationsUrl string `json:"notifications_url"`
	Number int `json:"number"`
	OpenIssues int `json:"open_issues"`
	OpenIssuesCount int `json:"open_issues_count"`
	OrganizationsUrl string `json:"organizations_url"`
	Owner map[string]any `json:"owner"`
	Parents []any `json:"parents"`
	Path string `json:"path"`
	PerformedViaGithubApp map[string]any `json:"performed_via_github_app"`
	Permissions map[string]any `json:"permissions"`
	Private bool `json:"private"`
	PublicGists *int `json:"public_gists,omitempty"`
	PublicRepos *int `json:"public_repos,omitempty"`
	PullRequest map[string]any `json:"pull_request"`
	PullsUrl string `json:"pulls_url"`
	PushedAt string `json:"pushed_at"`
	Reactions map[string]any `json:"reactions"`
	ReceivedEventsUrl string `json:"received_events_url"`
	Related *[]any `json:"related,omitempty"`
	Released string `json:"released"`
	ReleasesUrl string `json:"releases_url"`
	ReposUrl string `json:"repos_url"`
	Repository map[string]any `json:"repository"`
	RepositoryCount *int `json:"repository_count,omitempty"`
	RepositoryUrl string `json:"repository_url"`
	Score float64 `json:"score"`
	Sha string `json:"sha"`
	ShortDescription string `json:"short_description"`
	SiteAdmin bool `json:"site_admin"`
	Size int `json:"size"`
	SshUrl string `json:"ssh_url"`
	StargazersCount int `json:"stargazers_count"`
	StargazersUrl string `json:"stargazers_url"`
	StarredUrl string `json:"starred_url"`
	State string `json:"state"`
	StateReason *string `json:"state_reason,omitempty"`
	StatusesUrl string `json:"statuses_url"`
	SubIssuesSummary map[string]any `json:"sub_issues_summary"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	SuspendedAt *string `json:"suspended_at,omitempty"`
	SvnUrl string `json:"svn_url"`
	TagsUrl string `json:"tags_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	TextMatches *[]any `json:"text_matches,omitempty"`
	TimelineUrl *string `json:"timeline_url,omitempty"`
	Title string `json:"title"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	Type map[string]any `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	User map[string]any `json:"user"`
	UserViewType *string `json:"user_view_type,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers int `json:"watchers"`
	WatchersCount int `json:"watchers_count"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	AdvancedSearch *string `json:"advanced_search,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Q string `json:"q"`
	SearchType *string `json:"search_type,omitempty"`
	Sort *string `json:"sort,omitempty"`
	RepositoryId *int `json:"repository_id,omitempty"`
}

// SecretScanning is the typed data model for the secret_scanning entity.
type SecretScanning struct {
	CustomPatternSettings *[]any `json:"custom_pattern_settings,omitempty"`
	PatternConfigVersion *string `json:"pattern_config_version,omitempty"`
	ProviderPatternSettings *[]any `json:"provider_pattern_settings,omitempty"`
}

// SecretScanningUpdateData is the typed request payload for SecretScanning.UpdateTyped.
type SecretScanningUpdateData struct {
	OrgId string `json:"org_id"`
	CustomPatternSettings *[]any `json:"custom_pattern_settings,omitempty"`
	PatternConfigVersion *string `json:"pattern_config_version,omitempty"`
	ProviderPatternSettings *[]any `json:"provider_pattern_settings,omitempty"`
}

// SecretScanningAlert is the typed data model for the secret_scanning_alert entity.
type SecretScanningAlert struct {
	CreatedAt *string `json:"created_at,omitempty"`
	FirstLocationDetected *any `json:"first_location_detected,omitempty"`
	HasMoreLocations *bool `json:"has_more_locations,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	IsBase64Encoded *bool `json:"is_base64_encoded,omitempty"`
	LocationsUrl *string `json:"locations_url,omitempty"`
	MultiRepo *bool `json:"multi_repo,omitempty"`
	Number *int `json:"number,omitempty"`
	PubliclyLeaked *bool `json:"publicly_leaked,omitempty"`
	PushProtectionBypassRequestComment *string `json:"push_protection_bypass_request_comment,omitempty"`
	PushProtectionBypassRequestHtmlUrl *string `json:"push_protection_bypass_request_html_url,omitempty"`
	PushProtectionBypassRequestReviewer map[string]any `json:"push_protection_bypass_request_reviewer"`
	PushProtectionBypassRequestReviewerComment *string `json:"push_protection_bypass_request_reviewer_comment,omitempty"`
	PushProtectionBypassed *bool `json:"push_protection_bypassed,omitempty"`
	PushProtectionBypassedAt *string `json:"push_protection_bypassed_at,omitempty"`
	PushProtectionBypassedBy map[string]any `json:"push_protection_bypassed_by"`
	Resolution *string `json:"resolution,omitempty"`
	ResolutionComment *string `json:"resolution_comment,omitempty"`
	ResolvedAt *string `json:"resolved_at,omitempty"`
	ResolvedBy map[string]any `json:"resolved_by"`
	Secret *string `json:"secret,omitempty"`
	SecretType *string `json:"secret_type,omitempty"`
	SecretTypeDisplayName *string `json:"secret_type_display_name,omitempty"`
	State *string `json:"state,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Validity *string `json:"validity,omitempty"`
}

// SecretScanningAlertLoadMatch is the typed request payload for SecretScanningAlert.LoadTyped.
type SecretScanningAlertLoadMatch struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	HideSecret *bool `json:"hide_secret,omitempty"`
}

// SecretScanningAlertListMatch is the typed request payload for SecretScanningAlert.ListTyped.
type SecretScanningAlertListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	Direction *string `json:"direction,omitempty"`
	HideSecret *bool `json:"hide_secret,omitempty"`
	IsMultiRepo *bool `json:"is_multi_repo,omitempty"`
	IsPubliclyLeaked *bool `json:"is_publicly_leaked,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
	SecretType *string `json:"secret_type,omitempty"`
	Sort *string `json:"sort,omitempty"`
	State *string `json:"state,omitempty"`
	Validity *string `json:"validity,omitempty"`
}

// SecretScanningAlertUpdateData is the typed request payload for SecretScanningAlert.UpdateTyped.
type SecretScanningAlertUpdateData struct {
	Id int `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	CreatedAt *string `json:"created_at,omitempty"`
	FirstLocationDetected *any `json:"first_location_detected,omitempty"`
	HasMoreLocations *bool `json:"has_more_locations,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	IsBase64Encoded *bool `json:"is_base64_encoded,omitempty"`
	LocationsUrl *string `json:"locations_url,omitempty"`
	MultiRepo *bool `json:"multi_repo,omitempty"`
	Number *int `json:"number,omitempty"`
	PubliclyLeaked *bool `json:"publicly_leaked,omitempty"`
	PushProtectionBypassRequestComment *string `json:"push_protection_bypass_request_comment,omitempty"`
	PushProtectionBypassRequestHtmlUrl *string `json:"push_protection_bypass_request_html_url,omitempty"`
	PushProtectionBypassRequestReviewer *map[string]any `json:"push_protection_bypass_request_reviewer,omitempty"`
	PushProtectionBypassRequestReviewerComment *string `json:"push_protection_bypass_request_reviewer_comment,omitempty"`
	PushProtectionBypassed *bool `json:"push_protection_bypassed,omitempty"`
	PushProtectionBypassedAt *string `json:"push_protection_bypassed_at,omitempty"`
	PushProtectionBypassedBy *map[string]any `json:"push_protection_bypassed_by,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
	ResolutionComment *string `json:"resolution_comment,omitempty"`
	ResolvedAt *string `json:"resolved_at,omitempty"`
	ResolvedBy *map[string]any `json:"resolved_by,omitempty"`
	Secret *string `json:"secret,omitempty"`
	SecretType *string `json:"secret_type,omitempty"`
	SecretTypeDisplayName *string `json:"secret_type_display_name,omitempty"`
	State *string `json:"state,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Validity *string `json:"validity,omitempty"`
}

// SecretScanningLocation is the typed data model for the secret_scanning_location entity.
type SecretScanningLocation struct {
	Details *any `json:"details,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SecretScanningLocationListMatch is the typed request payload for SecretScanningLocation.ListTyped.
type SecretScanningLocationListMatch struct {
	AlertNumber int `json:"alert_number"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SecretScanningPatternConfiguration is the typed data model for the secret_scanning_pattern_configuration entity.
type SecretScanningPatternConfiguration struct {
	CustomPatternOverrides *[]any `json:"custom_pattern_overrides,omitempty"`
	PatternConfigVersion *string `json:"pattern_config_version,omitempty"`
	ProviderPatternOverrides *[]any `json:"provider_pattern_overrides,omitempty"`
}

// SecretScanningPatternConfigurationListMatch is the typed request payload for SecretScanningPatternConfiguration.ListTyped.
type SecretScanningPatternConfigurationListMatch struct {
	OrgId string `json:"org_id"`
}

// SecretScanningPushProtectionBypass is the typed data model for the secret_scanning_push_protection_bypass entity.
type SecretScanningPushProtectionBypass struct {
	ExpireAt *string `json:"expire_at,omitempty"`
	PlaceholderId string `json:"placeholder_id"`
	Reason *string `json:"reason,omitempty"`
	TokenType *string `json:"token_type,omitempty"`
}

// SecretScanningPushProtectionBypassCreateData is the typed request payload for SecretScanningPushProtectionBypass.CreateTyped.
type SecretScanningPushProtectionBypassCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	ExpireAt *string `json:"expire_at,omitempty"`
	PlaceholderId string `json:"placeholder_id"`
	Reason *string `json:"reason,omitempty"`
	TokenType *string `json:"token_type,omitempty"`
}

// SecretScanningScanHistory is the typed data model for the secret_scanning_scan_history entity.
type SecretScanningScanHistory struct {
	BackfillScans *[]any `json:"backfill_scans,omitempty"`
	CustomPatternBackfillScans *[]any `json:"custom_pattern_backfill_scans,omitempty"`
	IncrementalScans *[]any `json:"incremental_scans,omitempty"`
	PatternUpdateScans *[]any `json:"pattern_update_scans,omitempty"`
}

// SecretScanningScanHistoryListMatch is the typed request payload for SecretScanningScanHistory.ListTyped.
type SecretScanningScanHistoryListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// SecurityAdvisory is the typed data model for the security_advisory entity.
type SecurityAdvisory struct {
	Id *string `json:"id,omitempty"`
}

// SecurityAdvisoryCreateData is the typed request payload for SecurityAdvisory.CreateTyped.
type SecurityAdvisoryCreateData struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// SelectedAction is the typed data model for the selected_action entity.
type SelectedAction struct {
	GithubOwnedAllowed *bool `json:"github_owned_allowed,omitempty"`
	PatternsAllowed *[]any `json:"patterns_allowed,omitempty"`
	VerifiedAllowed *bool `json:"verified_allowed,omitempty"`
}

// SelectedActionListMatch is the typed request payload for SelectedAction.ListTyped.
type SelectedActionListMatch struct {
	OrgId string `json:"org_id"`
}

// SelfHostedRunner is the typed data model for the self_hosted_runner entity.
type SelfHostedRunner struct {
	EnabledRepositories string `json:"enabled_repositories"`
	SelectedRepositoriesUrl *string `json:"selected_repositories_url,omitempty"`
}

// SelfHostedRunnerLoadMatch is the typed request payload for SelfHostedRunner.LoadTyped.
type SelfHostedRunnerLoadMatch struct {
	OrgId string `json:"org_id"`
}

// ShortBlob is the typed data model for the short_blob entity.
type ShortBlob struct {
	Content string `json:"content"`
	Encoding *string `json:"encoding,omitempty"`
}

// ShortBlobCreateData is the typed request payload for ShortBlob.CreateTyped.
type ShortBlobCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Content string `json:"content"`
	Encoding *string `json:"encoding,omitempty"`
}

// ShortBranch is the typed data model for the short_branch entity.
type ShortBranch struct {
	Commit map[string]any `json:"commit"`
	Name string `json:"name"`
	Protected bool `json:"protected"`
	Protection *map[string]any `json:"protection,omitempty"`
	ProtectionUrl *string `json:"protection_url,omitempty"`
}

// ShortBranchListMatch is the typed request payload for ShortBranch.ListTyped.
type ShortBranchListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Protected *bool `json:"protected,omitempty"`
}

// SimpleClassroom is the typed data model for the simple_classroom entity.
type SimpleClassroom struct {
}

// SimpleClassroomAssignment is the typed data model for the simple_classroom_assignment entity.
type SimpleClassroomAssignment struct {
	Accepted int `json:"accepted"`
	Classroom map[string]any `json:"classroom"`
	Deadline string `json:"deadline"`
	Editor string `json:"editor"`
	FeedbackPullRequestsEnabled bool `json:"feedback_pull_requests_enabled"`
	Id int `json:"id"`
	InvitationsEnabled bool `json:"invitations_enabled"`
	InviteLink string `json:"invite_link"`
	Language string `json:"language"`
	MaxMembers *int `json:"max_members,omitempty"`
	MaxTeams *int `json:"max_teams,omitempty"`
	Passing int `json:"passing"`
	PublicRepo bool `json:"public_repo"`
	Slug string `json:"slug"`
	StudentsAreRepoAdmins bool `json:"students_are_repo_admins"`
	Submitted int `json:"submitted"`
	Title string `json:"title"`
	Type string `json:"type"`
}

// SimpleClassroomAssignmentListMatch is the typed request payload for SimpleClassroomAssignment.ListTyped.
type SimpleClassroomAssignmentListMatch struct {
	ClassroomId int `json:"classroom_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SocialAccount is the typed data model for the social_account entity.
type SocialAccount struct {
	AccountUrls []any `json:"account_urls"`
	Provider string `json:"provider"`
	Url string `json:"url"`
}

// SocialAccountListMatch is the typed request payload for SocialAccount.ListTyped.
type SocialAccountListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SocialAccountCreateData is the typed request payload for SocialAccount.CreateTyped.
type SocialAccountCreateData struct {
	AccountUrls []any `json:"account_urls"`
	Provider string `json:"provider"`
	Url string `json:"url"`
}

// SshSigningKey is the typed data model for the ssh_signing_key entity.
type SshSigningKey struct {
	CreatedAt string `json:"created_at"`
	Id int `json:"id"`
	Key string `json:"key"`
	Title string `json:"title"`
}

// SshSigningKeyLoadMatch is the typed request payload for SshSigningKey.LoadTyped.
type SshSigningKeyLoadMatch struct {
	Id int `json:"id"`
}

// SshSigningKeyListMatch is the typed request payload for SshSigningKey.ListTyped.
type SshSigningKeyListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SshSigningKeyCreateData is the typed request payload for SshSigningKey.CreateTyped.
type SshSigningKeyCreateData struct {
	CreatedAt string `json:"created_at"`
	Id int `json:"id"`
	Key string `json:"key"`
	Title string `json:"title"`
}

// Status is the typed data model for the status entity.
type Status struct {
	AvatarUrl string `json:"avatar_url"`
	Context *string `json:"context,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Description *string `json:"description,omitempty"`
	Id int `json:"id"`
	NodeId string `json:"node_id"`
	State string `json:"state"`
	TargetUrl *string `json:"target_url,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// StatusListMatch is the typed request payload for Status.ListTyped.
type StatusListMatch struct {
	Owner string `json:"owner"`
	Ref string `json:"ref"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// StatusCreateData is the typed request payload for Status.CreateTyped.
type StatusCreateData struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AvatarUrl string `json:"avatar_url"`
	Context *string `json:"context,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Description *string `json:"description,omitempty"`
	NodeId string `json:"node_id"`
	State string `json:"state"`
	TargetUrl *string `json:"target_url,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// StatusCheckPolicy is the typed data model for the status_check_policy entity.
type StatusCheckPolicy struct {
	AppId int `json:"app_id"`
	Checks []any `json:"checks"`
	Context string `json:"context"`
	Contexts []any `json:"contexts"`
	ContextsUrl string `json:"contexts_url"`
	Strict bool `json:"strict"`
	Url string `json:"url"`
}

// StatusCheckPolicyListMatch is the typed request payload for StatusCheckPolicy.ListTyped.
type StatusCheckPolicyListMatch struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// StatusCheckPolicyUpdateData is the typed request payload for StatusCheckPolicy.UpdateTyped.
type StatusCheckPolicyUpdateData struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	AppId *int `json:"app_id,omitempty"`
	Checks *[]any `json:"checks,omitempty"`
	Context *string `json:"context,omitempty"`
	Contexts *[]any `json:"contexts,omitempty"`
	ContextsUrl *string `json:"contexts_url,omitempty"`
	Strict *bool `json:"strict,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Subscriber is the typed data model for the subscriber entity.
type Subscriber struct {
	AvatarUrl string `json:"avatar_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	GistsUrl string `json:"gists_url"`
	GravatarId string `json:"gravatar_id"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Login string `json:"login"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	OrganizationsUrl string `json:"organizations_url"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReposUrl string `json:"repos_url"`
	SiteAdmin bool `json:"site_admin"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	Type string `json:"type"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
}

// SubscriberListMatch is the typed request payload for Subscriber.ListTyped.
type SubscriberListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Tag is the typed data model for the tag entity.
type Tag struct {
	Commit map[string]any `json:"commit"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	TarballUrl string `json:"tarball_url"`
	ZipballUrl string `json:"zipball_url"`
}

// TagListMatch is the typed request payload for Tag.ListTyped.
type TagListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// TagProtection is the typed data model for the tag_protection entity.
type TagProtection struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Id *int `json:"id,omitempty"`
	Pattern string `json:"pattern"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// TagProtectionListMatch is the typed request payload for TagProtection.ListTyped.
type TagProtectionListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// TagProtectionCreateData is the typed request payload for TagProtection.CreateTyped.
type TagProtectionCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	CreatedAt *string `json:"created_at,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Id *int `json:"id,omitempty"`
	Pattern string `json:"pattern"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// Team is the typed data model for the team entity.
type Team struct {
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	ArchiveUrl string `json:"archive_url"`
	Archived bool `json:"archived"`
	AssigneesUrl string `json:"assignees_url"`
	Assignment *string `json:"assignment,omitempty"`
	Author map[string]any `json:"author"`
	AvatarUrl string `json:"avatar_url"`
	BlobsUrl string `json:"blobs_url"`
	Body string `json:"body"`
	BodyHtml string `json:"body_html"`
	BodyVersion string `json:"body_version"`
	BranchesUrl string `json:"branches_url"`
	CloneUrl string `json:"clone_url"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CollaboratorsUrl string `json:"collaborators_url"`
	ColumnsUrl string `json:"columns_url"`
	CommentsCount int `json:"comments_count"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch string `json:"default_branch"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled bool `json:"disabled"`
	DiscussionUrl string `json:"discussion_url"`
	DownloadsUrl string `json:"downloads_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FailedAt *string `json:"failed_at,omitempty"`
	FailedReason *string `json:"failed_reason,omitempty"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	Fork bool `json:"fork"`
	Forks int `json:"forks"`
	ForksCount int `json:"forks_count"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GistsUrl string `json:"gists_url"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl string `json:"git_url"`
	GravatarId string `json:"gravatar_id"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads bool `json:"has_downloads"`
	HasIssues bool `json:"has_issues"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasWiki bool `json:"has_wiki"`
	Homepage string `json:"homepage"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	InvitationSource *string `json:"invitation_source,omitempty"`
	InvitationTeamsUrl string `json:"invitation_teams_url"`
	Inviter map[string]any `json:"inviter"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language string `json:"language"`
	LanguagesUrl string `json:"languages_url"`
	LastEditedAt string `json:"last_edited_at"`
	LdapDn *string `json:"ldap_dn,omitempty"`
	License map[string]any `json:"license"`
	Login string `json:"login"`
	Maintainers *[]any `json:"maintainers,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MembersCount int `json:"members_count"`
	MembersUrl string `json:"members_url"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl string `json:"mirror_url"`
	Name string `json:"name"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId string `json:"node_id"`
	NotificationSetting *string `json:"notification_setting,omitempty"`
	NotificationsUrl string `json:"notifications_url"`
	Number int `json:"number"`
	OpenIssues int `json:"open_issues"`
	OpenIssuesCount int `json:"open_issues_count"`
	Organization map[string]any `json:"organization"`
	OrganizationPermission *string `json:"organization_permission,omitempty"`
	OrganizationsUrl string `json:"organizations_url"`
	Owner map[string]any `json:"owner"`
	OwnerUrl string `json:"owner_url"`
	Parent map[string]any `json:"parent"`
	ParentTeamId *int `json:"parent_team_id,omitempty"`
	Permission string `json:"permission"`
	Permissions map[string]any `json:"permissions"`
	Pinned bool `json:"pinned"`
	Privacy *string `json:"privacy,omitempty"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	PushedAt string `json:"pushed_at"`
	Reactions map[string]any `json:"reactions"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReleasesUrl string `json:"releases_url"`
	RepoNames *[]any `json:"repo_names,omitempty"`
	ReposCount int `json:"repos_count"`
	ReposUrl string `json:"repos_url"`
	RepositoriesUrl string `json:"repositories_url"`
	Role string `json:"role"`
	RoleName *string `json:"role_name,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SiteAdmin bool `json:"site_admin"`
	Size int `json:"size"`
	Slug string `json:"slug"`
	SshUrl string `json:"ssh_url"`
	StargazersCount int `json:"stargazers_count"`
	StargazersUrl string `json:"stargazers_url"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	State string `json:"state"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	SvnUrl string `json:"svn_url"`
	TagsUrl string `json:"tags_url"`
	TeamCount int `json:"team_count"`
	TeamUrl string `json:"team_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Title string `json:"title"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers int `json:"watchers"`
	WatchersCount int `json:"watchers_count"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// TeamLoadMatch is the typed request payload for Team.LoadTyped.
type TeamLoadMatch struct {
	Id int `json:"id"`
}

// TeamListMatch is the typed request payload for Team.ListTyped.
type TeamListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// TeamCreateData is the typed request payload for Team.CreateTyped.
type TeamCreateData struct {
	OrgId string `json:"org_id"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	ArchiveUrl string `json:"archive_url"`
	Archived bool `json:"archived"`
	AssigneesUrl string `json:"assignees_url"`
	Assignment *string `json:"assignment,omitempty"`
	Author map[string]any `json:"author"`
	AvatarUrl string `json:"avatar_url"`
	BlobsUrl string `json:"blobs_url"`
	Body string `json:"body"`
	BodyHtml string `json:"body_html"`
	BodyVersion string `json:"body_version"`
	BranchesUrl string `json:"branches_url"`
	CloneUrl string `json:"clone_url"`
	CodeOfConduct map[string]any `json:"code_of_conduct"`
	CollaboratorsUrl string `json:"collaborators_url"`
	ColumnsUrl string `json:"columns_url"`
	CommentsCount int `json:"comments_count"`
	CommentsUrl string `json:"comments_url"`
	CommitsUrl string `json:"commits_url"`
	CompareUrl string `json:"compare_url"`
	ContentsUrl string `json:"contents_url"`
	ContributorsUrl string `json:"contributors_url"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch string `json:"default_branch"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl string `json:"deployments_url"`
	Description string `json:"description"`
	Disabled bool `json:"disabled"`
	DiscussionUrl string `json:"discussion_url"`
	DownloadsUrl string `json:"downloads_url"`
	Email *string `json:"email,omitempty"`
	EventsUrl string `json:"events_url"`
	FailedAt *string `json:"failed_at,omitempty"`
	FailedReason *string `json:"failed_reason,omitempty"`
	FollowersUrl string `json:"followers_url"`
	FollowingUrl string `json:"following_url"`
	Fork bool `json:"fork"`
	Forks int `json:"forks"`
	ForksCount int `json:"forks_count"`
	ForksUrl string `json:"forks_url"`
	FullName string `json:"full_name"`
	GistsUrl string `json:"gists_url"`
	GitCommitsUrl string `json:"git_commits_url"`
	GitRefsUrl string `json:"git_refs_url"`
	GitTagsUrl string `json:"git_tags_url"`
	GitUrl string `json:"git_url"`
	GravatarId string `json:"gravatar_id"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads bool `json:"has_downloads"`
	HasIssues bool `json:"has_issues"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasWiki bool `json:"has_wiki"`
	Homepage string `json:"homepage"`
	HooksUrl string `json:"hooks_url"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	InvitationSource *string `json:"invitation_source,omitempty"`
	InvitationTeamsUrl string `json:"invitation_teams_url"`
	Inviter map[string]any `json:"inviter"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl string `json:"issue_comment_url"`
	IssueEventsUrl string `json:"issue_events_url"`
	IssuesUrl string `json:"issues_url"`
	KeysUrl string `json:"keys_url"`
	LabelsUrl string `json:"labels_url"`
	Language string `json:"language"`
	LanguagesUrl string `json:"languages_url"`
	LastEditedAt string `json:"last_edited_at"`
	LdapDn *string `json:"ldap_dn,omitempty"`
	License map[string]any `json:"license"`
	Login string `json:"login"`
	Maintainers *[]any `json:"maintainers,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MembersCount int `json:"members_count"`
	MembersUrl string `json:"members_url"`
	MergesUrl string `json:"merges_url"`
	MilestonesUrl string `json:"milestones_url"`
	MirrorUrl string `json:"mirror_url"`
	Name string `json:"name"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId string `json:"node_id"`
	NotificationSetting *string `json:"notification_setting,omitempty"`
	NotificationsUrl string `json:"notifications_url"`
	Number int `json:"number"`
	OpenIssues int `json:"open_issues"`
	OpenIssuesCount int `json:"open_issues_count"`
	Organization map[string]any `json:"organization"`
	OrganizationPermission *string `json:"organization_permission,omitempty"`
	OrganizationsUrl string `json:"organizations_url"`
	Owner map[string]any `json:"owner"`
	OwnerUrl string `json:"owner_url"`
	Parent map[string]any `json:"parent"`
	ParentTeamId *int `json:"parent_team_id,omitempty"`
	Permission string `json:"permission"`
	Permissions map[string]any `json:"permissions"`
	Pinned bool `json:"pinned"`
	Privacy *string `json:"privacy,omitempty"`
	Private bool `json:"private"`
	PullsUrl string `json:"pulls_url"`
	PushedAt string `json:"pushed_at"`
	Reactions map[string]any `json:"reactions"`
	ReceivedEventsUrl string `json:"received_events_url"`
	ReleasesUrl string `json:"releases_url"`
	RepoNames *[]any `json:"repo_names,omitempty"`
	ReposCount int `json:"repos_count"`
	ReposUrl string `json:"repos_url"`
	RepositoriesUrl string `json:"repositories_url"`
	Role string `json:"role"`
	RoleName *string `json:"role_name,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SiteAdmin bool `json:"site_admin"`
	Size int `json:"size"`
	Slug string `json:"slug"`
	SshUrl string `json:"ssh_url"`
	StargazersCount int `json:"stargazers_count"`
	StargazersUrl string `json:"stargazers_url"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl string `json:"starred_url"`
	State string `json:"state"`
	StatusesUrl string `json:"statuses_url"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl string `json:"subscribers_url"`
	SubscriptionUrl string `json:"subscription_url"`
	SubscriptionsUrl string `json:"subscriptions_url"`
	SvnUrl string `json:"svn_url"`
	TagsUrl string `json:"tags_url"`
	TeamCount int `json:"team_count"`
	TeamUrl string `json:"team_url"`
	TeamsUrl string `json:"teams_url"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Title string `json:"title"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl string `json:"trees_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UserViewType *string `json:"user_view_type,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers int `json:"watchers"`
	WatchersCount int `json:"watchers_count"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// TeamUpdateData is the typed request payload for Team.UpdateTyped.
type TeamUpdateData struct {
	Id int `json:"id"`
	ProjectId int `json:"project_id"`
	AllowAutoMerge *bool `json:"allow_auto_merge,omitempty"`
	AllowForking *bool `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	ArchiveUrl *string `json:"archive_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssigneesUrl *string `json:"assignees_url,omitempty"`
	Assignment *string `json:"assignment,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	BlobsUrl *string `json:"blobs_url,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyHtml *string `json:"body_html,omitempty"`
	BodyVersion *string `json:"body_version,omitempty"`
	BranchesUrl *string `json:"branches_url,omitempty"`
	CloneUrl *string `json:"clone_url,omitempty"`
	CodeOfConduct *map[string]any `json:"code_of_conduct,omitempty"`
	CollaboratorsUrl *string `json:"collaborators_url,omitempty"`
	ColumnsUrl *string `json:"columns_url,omitempty"`
	CommentsCount *int `json:"comments_count,omitempty"`
	CommentsUrl *string `json:"comments_url,omitempty"`
	CommitsUrl *string `json:"commits_url,omitempty"`
	CompareUrl *string `json:"compare_url,omitempty"`
	ContentsUrl *string `json:"contents_url,omitempty"`
	ContributorsUrl *string `json:"contributors_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomProperties *map[string]any `json:"custom_properties,omitempty"`
	DefaultBranch *string `json:"default_branch,omitempty"`
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	DeploymentsUrl *string `json:"deployments_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	DiscussionUrl *string `json:"discussion_url,omitempty"`
	DownloadsUrl *string `json:"downloads_url,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	FailedAt *string `json:"failed_at,omitempty"`
	FailedReason *string `json:"failed_reason,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	Fork *bool `json:"fork,omitempty"`
	Forks *int `json:"forks,omitempty"`
	ForksCount *int `json:"forks_count,omitempty"`
	ForksUrl *string `json:"forks_url,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GitCommitsUrl *string `json:"git_commits_url,omitempty"`
	GitRefsUrl *string `json:"git_refs_url,omitempty"`
	GitTagsUrl *string `json:"git_tags_url,omitempty"`
	GitUrl *string `json:"git_url,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasWiki *bool `json:"has_wiki,omitempty"`
	Homepage *string `json:"homepage,omitempty"`
	HooksUrl *string `json:"hooks_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	InvitationSource *string `json:"invitation_source,omitempty"`
	InvitationTeamsUrl *string `json:"invitation_teams_url,omitempty"`
	Inviter *map[string]any `json:"inviter,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	IssueCommentUrl *string `json:"issue_comment_url,omitempty"`
	IssueEventsUrl *string `json:"issue_events_url,omitempty"`
	IssuesUrl *string `json:"issues_url,omitempty"`
	KeysUrl *string `json:"keys_url,omitempty"`
	LabelsUrl *string `json:"labels_url,omitempty"`
	Language *string `json:"language,omitempty"`
	LanguagesUrl *string `json:"languages_url,omitempty"`
	LastEditedAt *string `json:"last_edited_at,omitempty"`
	LdapDn *string `json:"ldap_dn,omitempty"`
	License *map[string]any `json:"license,omitempty"`
	Login *string `json:"login,omitempty"`
	Maintainers *[]any `json:"maintainers,omitempty"`
	MasterBranch *string `json:"master_branch,omitempty"`
	MembersCount *int `json:"members_count,omitempty"`
	MembersUrl *string `json:"members_url,omitempty"`
	MergesUrl *string `json:"merges_url,omitempty"`
	MilestonesUrl *string `json:"milestones_url,omitempty"`
	MirrorUrl *string `json:"mirror_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NetworkCount *int `json:"network_count,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NotificationSetting *string `json:"notification_setting,omitempty"`
	NotificationsUrl *string `json:"notifications_url,omitempty"`
	Number *int `json:"number,omitempty"`
	OpenIssues *int `json:"open_issues,omitempty"`
	OpenIssuesCount *int `json:"open_issues_count,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	OrganizationPermission *string `json:"organization_permission,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	OwnerUrl *string `json:"owner_url,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	ParentTeamId *int `json:"parent_team_id,omitempty"`
	Permission *string `json:"permission,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Pinned *bool `json:"pinned,omitempty"`
	Privacy *string `json:"privacy,omitempty"`
	Private *bool `json:"private,omitempty"`
	PullsUrl *string `json:"pulls_url,omitempty"`
	PushedAt *string `json:"pushed_at,omitempty"`
	Reactions *map[string]any `json:"reactions,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	ReleasesUrl *string `json:"releases_url,omitempty"`
	RepoNames *[]any `json:"repo_names,omitempty"`
	ReposCount *int `json:"repos_count,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	RepositoriesUrl *string `json:"repositories_url,omitempty"`
	Role *string `json:"role,omitempty"`
	RoleName *string `json:"role_name,omitempty"`
	SecurityAndAnalysis *map[string]any `json:"security_and_analysis,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	Size *int `json:"size,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SshUrl *string `json:"ssh_url,omitempty"`
	StargazersCount *int `json:"stargazers_count,omitempty"`
	StargazersUrl *string `json:"stargazers_url,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	State *string `json:"state,omitempty"`
	StatusesUrl *string `json:"statuses_url,omitempty"`
	SubscribersCount *int `json:"subscribers_count,omitempty"`
	SubscribersUrl *string `json:"subscribers_url,omitempty"`
	SubscriptionUrl *string `json:"subscription_url,omitempty"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	SvnUrl *string `json:"svn_url,omitempty"`
	TagsUrl *string `json:"tags_url,omitempty"`
	TeamCount *int `json:"team_count,omitempty"`
	TeamUrl *string `json:"team_url,omitempty"`
	TeamsUrl *string `json:"teams_url,omitempty"`
	TempCloneToken *string `json:"temp_clone_token,omitempty"`
	Title *string `json:"title,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	TreesUrl *string `json:"trees_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	UserViewType *string `json:"user_view_type,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	Watchers *int `json:"watchers,omitempty"`
	WatchersCount *int `json:"watchers_count,omitempty"`
	WebCommitSignoffRequired *bool `json:"web_commit_signoff_required,omitempty"`
}

// TeamRemoveMatch is the typed request payload for Team.RemoveTyped.
type TeamRemoveMatch struct {
	Id int `json:"id"`
}

// TeamSimple is the typed data model for the team_simple entity.
type TeamSimple struct {
	Description string `json:"description"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	LdapDn *string `json:"ldap_dn,omitempty"`
	MembersUrl string `json:"members_url"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	NotificationSetting *string `json:"notification_setting,omitempty"`
	Permission string `json:"permission"`
	Privacy *string `json:"privacy,omitempty"`
	RepositoriesUrl string `json:"repositories_url"`
	Slug string `json:"slug"`
	Url string `json:"url"`
}

// TeamSimpleListMatch is the typed request payload for TeamSimple.ListTyped.
type TeamSimpleListMatch struct {
	OrgId string `json:"org_id"`
}

// Thread is the typed data model for the thread entity.
type Thread struct {
	Id string `json:"id"`
	LastReadAt string `json:"last_read_at"`
	Reason string `json:"reason"`
	Repository map[string]any `json:"repository"`
	Subject map[string]any `json:"subject"`
	SubscriptionUrl string `json:"subscription_url"`
	Unread bool `json:"unread"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// ThreadLoadMatch is the typed request payload for Thread.LoadTyped.
type ThreadLoadMatch struct {
	Id int `json:"id"`
}

// ThreadListMatch is the typed request payload for Thread.ListTyped.
type ThreadListMatch struct {
	All *bool `json:"all,omitempty"`
	Before *string `json:"before,omitempty"`
	Page *int `json:"page,omitempty"`
	Participating *bool `json:"participating,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Since *string `json:"since,omitempty"`
}

// ThreadRemoveMatch is the typed request payload for Thread.RemoveTyped.
type ThreadRemoveMatch struct {
	Id int `json:"id"`
}

// ThreadSubscription is the typed data model for the thread_subscription entity.
type ThreadSubscription struct {
	CreatedAt string `json:"created_at"`
	Id *string `json:"id,omitempty"`
	Ignored bool `json:"ignored"`
	Reason string `json:"reason"`
	RepositoryUrl *string `json:"repository_url,omitempty"`
	Subscribed bool `json:"subscribed"`
	ThreadUrl *string `json:"thread_url,omitempty"`
	Url string `json:"url"`
}

// ThreadSubscriptionLoadMatch is the typed request payload for ThreadSubscription.LoadTyped.
type ThreadSubscriptionLoadMatch struct {
	Id int `json:"id"`
}

// ThreadSubscriptionUpdateData is the typed request payload for ThreadSubscription.UpdateTyped.
type ThreadSubscriptionUpdateData struct {
	Id int `json:"id"`
	CreatedAt *string `json:"created_at,omitempty"`
	Ignored *bool `json:"ignored,omitempty"`
	Reason *string `json:"reason,omitempty"`
	RepositoryUrl *string `json:"repository_url,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	ThreadUrl *string `json:"thread_url,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Topic is the typed data model for the topic entity.
type Topic struct {
	Names []any `json:"names"`
}

// TopicListMatch is the typed request payload for Topic.ListTyped.
type TopicListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// TopicUpdateData is the typed request payload for Topic.UpdateTyped.
type TopicUpdateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Names *[]any `json:"names,omitempty"`
}

// User is the typed data model for the user entity.
type User struct {
	Assignment *string `json:"assignment,omitempty"`
	AttestationsSubjectDigests *map[string]any `json:"attestations_subject_digests,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Bio *string `json:"bio,omitempty"`
	Blog *string `json:"blog,omitempty"`
	Collaborators *int `json:"collaborators,omitempty"`
	Company *string `json:"company,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DiskUsage *int `json:"disk_usage,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	Followers *int `json:"followers,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	Following *int `json:"following,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	Hireable *bool `json:"hireable,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	InheritedFrom *[]any `json:"inherited_from,omitempty"`
	Location *string `json:"location,omitempty"`
	Login *string `json:"login,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	OwnedPrivateRepos *int `json:"owned_private_repos,omitempty"`
	PageInfo *map[string]any `json:"page_info,omitempty"`
	Plan *map[string]any `json:"plan,omitempty"`
	PredicateType *string `json:"predicate_type,omitempty"`
	PrivateGists *int `json:"private_gists,omitempty"`
	PrivateRepos int `json:"private_repos"`
	PublicGists *int `json:"public_gists,omitempty"`
	PublicRepos *int `json:"public_repos,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	Space int `json:"space"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	SubjectDigests []any `json:"subject_digests"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	TotalPrivateRepos *int `json:"total_private_repos,omitempty"`
	TwitterUsername *string `json:"twitter_username,omitempty"`
	TwoFactorAuthentication *bool `json:"two_factor_authentication,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	UserViewType *string `json:"user_view_type,omitempty"`
	Users []any `json:"users"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id int `json:"id"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	PerPage *int `json:"per_page,omitempty"`
	Since *int `json:"since,omitempty"`
}

// UserCreateData is the typed request payload for User.CreateTyped.
type UserCreateData struct {
	BranchId string `json:"branch_id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Assignment *string `json:"assignment,omitempty"`
	AttestationsSubjectDigests *map[string]any `json:"attestations_subject_digests,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Bio *string `json:"bio,omitempty"`
	Blog *string `json:"blog,omitempty"`
	Collaborators *int `json:"collaborators,omitempty"`
	Company *string `json:"company,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DiskUsage *int `json:"disk_usage,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	Followers *int `json:"followers,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	Following *int `json:"following,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	Hireable *bool `json:"hireable,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	InheritedFrom *[]any `json:"inherited_from,omitempty"`
	Location *string `json:"location,omitempty"`
	Login *string `json:"login,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	OwnedPrivateRepos *int `json:"owned_private_repos,omitempty"`
	PageInfo *map[string]any `json:"page_info,omitempty"`
	Plan *map[string]any `json:"plan,omitempty"`
	PredicateType *string `json:"predicate_type,omitempty"`
	PrivateGists *int `json:"private_gists,omitempty"`
	PrivateRepos int `json:"private_repos"`
	PublicGists *int `json:"public_gists,omitempty"`
	PublicRepos *int `json:"public_repos,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	Space int `json:"space"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	SubjectDigests []any `json:"subject_digests"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	TotalPrivateRepos *int `json:"total_private_repos,omitempty"`
	TwitterUsername *string `json:"twitter_username,omitempty"`
	TwoFactorAuthentication *bool `json:"two_factor_authentication,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	UserViewType *string `json:"user_view_type,omitempty"`
	Users []any `json:"users"`
}

// UserUpdateData is the typed request payload for User.UpdateTyped.
type UserUpdateData struct {
	Username string `json:"username"`
	Assignment *string `json:"assignment,omitempty"`
	AttestationsSubjectDigests *map[string]any `json:"attestations_subject_digests,omitempty"`
	AvatarUrl *string `json:"avatar_url,omitempty"`
	Bio *string `json:"bio,omitempty"`
	Blog *string `json:"blog,omitempty"`
	Collaborators *int `json:"collaborators,omitempty"`
	Company *string `json:"company,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DiskUsage *int `json:"disk_usage,omitempty"`
	Email *string `json:"email,omitempty"`
	EventsUrl *string `json:"events_url,omitempty"`
	Followers *int `json:"followers,omitempty"`
	FollowersUrl *string `json:"followers_url,omitempty"`
	Following *int `json:"following,omitempty"`
	FollowingUrl *string `json:"following_url,omitempty"`
	GistsUrl *string `json:"gists_url,omitempty"`
	GravatarId *string `json:"gravatar_id,omitempty"`
	Hireable *bool `json:"hireable,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *int `json:"id,omitempty"`
	InheritedFrom *[]any `json:"inherited_from,omitempty"`
	Location *string `json:"location,omitempty"`
	Login *string `json:"login,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	OrganizationsUrl *string `json:"organizations_url,omitempty"`
	OwnedPrivateRepos *int `json:"owned_private_repos,omitempty"`
	PageInfo *map[string]any `json:"page_info,omitempty"`
	Plan *map[string]any `json:"plan,omitempty"`
	PredicateType *string `json:"predicate_type,omitempty"`
	PrivateGists *int `json:"private_gists,omitempty"`
	PrivateRepos *int `json:"private_repos,omitempty"`
	PublicGists *int `json:"public_gists,omitempty"`
	PublicRepos *int `json:"public_repos,omitempty"`
	ReceivedEventsUrl *string `json:"received_events_url,omitempty"`
	ReposUrl *string `json:"repos_url,omitempty"`
	SiteAdmin *bool `json:"site_admin,omitempty"`
	Space *int `json:"space,omitempty"`
	StarredAt *string `json:"starred_at,omitempty"`
	StarredUrl *string `json:"starred_url,omitempty"`
	SubjectDigests *[]any `json:"subject_digests,omitempty"`
	SubscriptionsUrl *string `json:"subscriptions_url,omitempty"`
	TotalPrivateRepos *int `json:"total_private_repos,omitempty"`
	TwitterUsername *string `json:"twitter_username,omitempty"`
	TwoFactorAuthentication *bool `json:"two_factor_authentication,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	UserViewType *string `json:"user_view_type,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// UserRemoveMatch is the typed request payload for User.RemoveTyped.
type UserRemoveMatch struct {
	GpgKeyId int `json:"gpg_key_id"`
}

// UserMarketplacePurchase is the typed data model for the user_marketplace_purchase entity.
type UserMarketplacePurchase struct {
	Account map[string]any `json:"account"`
	BillingCycle string `json:"billing_cycle"`
	FreeTrialEndsOn string `json:"free_trial_ends_on"`
	NextBillingDate string `json:"next_billing_date"`
	OnFreeTrial bool `json:"on_free_trial"`
	Plan map[string]any `json:"plan"`
	UnitCount int `json:"unit_count"`
	UpdatedAt string `json:"updated_at"`
}

// UserMarketplacePurchaseListMatch is the typed request payload for UserMarketplacePurchase.ListTyped.
type UserMarketplacePurchaseListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// View is the typed data model for the view entity.
type View struct {
	Count int `json:"count"`
	Timestamp string `json:"timestamp"`
	Uniques int `json:"uniques"`
}

// ViewListMatch is the typed request payload for View.ListTyped.
type ViewListMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	Per *string `json:"per,omitempty"`
}

// WebhookConfig is the typed data model for the webhook_config entity.
type WebhookConfig struct {
	ContentType *string `json:"content_type,omitempty"`
	InsecureSsl *string `json:"insecure_ssl,omitempty"`
	Secret *string `json:"secret,omitempty"`
	Url *string `json:"url,omitempty"`
}

// WebhookConfigLoadMatch is the typed request payload for WebhookConfig.LoadTyped.
type WebhookConfigLoadMatch struct {
	ContentType *string `json:"content_type,omitempty"`
	InsecureSsl *string `json:"insecure_ssl,omitempty"`
	Secret *string `json:"secret,omitempty"`
	Url *string `json:"url,omitempty"`
}

// WebhookConfigUpdateData is the typed request payload for WebhookConfig.UpdateTyped.
type WebhookConfigUpdateData struct {
	ContentType *string `json:"content_type,omitempty"`
	InsecureSsl *string `json:"insecure_ssl,omitempty"`
	Secret *string `json:"secret,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Workflow is the typed data model for the workflow entity.
type Workflow struct {
	BadgeUrl string `json:"badge_url"`
	CreatedAt string `json:"created_at"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	Name string `json:"name"`
	NodeId string `json:"node_id"`
	Path string `json:"path"`
	State string `json:"state"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// WorkflowLoadMatch is the typed request payload for Workflow.LoadTyped.
type WorkflowLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// WorkflowUpdateData is the typed request payload for Workflow.UpdateTyped.
type WorkflowUpdateData struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	BadgeUrl *string `json:"badge_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Name *string `json:"name,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	Path *string `json:"path,omitempty"`
	State *string `json:"state,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// WorkflowRun is the typed data model for the workflow_run entity.
type WorkflowRun struct {
	Actor map[string]any `json:"actor"`
	ArtifactsUrl string `json:"artifacts_url"`
	CancelUrl string `json:"cancel_url"`
	CheckSuiteId *int `json:"check_suite_id,omitempty"`
	CheckSuiteNodeId *string `json:"check_suite_node_id,omitempty"`
	CheckSuiteUrl string `json:"check_suite_url"`
	Conclusion string `json:"conclusion"`
	CreatedAt string `json:"created_at"`
	DisplayTitle string `json:"display_title"`
	Event string `json:"event"`
	HeadBranch string `json:"head_branch"`
	HeadCommit map[string]any `json:"head_commit"`
	HeadRepository map[string]any `json:"head_repository"`
	HeadRepositoryId *int `json:"head_repository_id,omitempty"`
	HeadSha string `json:"head_sha"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	JobsUrl string `json:"jobs_url"`
	LogsUrl string `json:"logs_url"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	Path string `json:"path"`
	PreviousAttemptUrl *string `json:"previous_attempt_url,omitempty"`
	PullRequests []any `json:"pull_requests"`
	ReferencedWorkflows *[]any `json:"referenced_workflows,omitempty"`
	Repository map[string]any `json:"repository"`
	RerunUrl string `json:"rerun_url"`
	RunAttempt *int `json:"run_attempt,omitempty"`
	RunNumber int `json:"run_number"`
	RunStartedAt *string `json:"run_started_at,omitempty"`
	Status string `json:"status"`
	TriggeringActor map[string]any `json:"triggering_actor"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	WorkflowId int `json:"workflow_id"`
	WorkflowUrl string `json:"workflow_url"`
}

// WorkflowRunLoadMatch is the typed request payload for WorkflowRun.LoadTyped.
type WorkflowRunLoadMatch struct {
	AttemptNumber *int `json:"attempt_number,omitempty"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	RunId *int `json:"run_id,omitempty"`
	ExcludePullRequest *bool `json:"exclude_pull_request,omitempty"`
	Id *int `json:"id,omitempty"`
}

// WorkflowRunCreateData is the typed request payload for WorkflowRun.CreateTyped.
type WorkflowRunCreateData struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	RunId int `json:"run_id"`
	Actor map[string]any `json:"actor"`
	ArtifactsUrl string `json:"artifacts_url"`
	CancelUrl string `json:"cancel_url"`
	CheckSuiteId *int `json:"check_suite_id,omitempty"`
	CheckSuiteNodeId *string `json:"check_suite_node_id,omitempty"`
	CheckSuiteUrl string `json:"check_suite_url"`
	Conclusion string `json:"conclusion"`
	CreatedAt string `json:"created_at"`
	DisplayTitle string `json:"display_title"`
	Event string `json:"event"`
	HeadBranch string `json:"head_branch"`
	HeadCommit map[string]any `json:"head_commit"`
	HeadRepository map[string]any `json:"head_repository"`
	HeadRepositoryId *int `json:"head_repository_id,omitempty"`
	HeadSha string `json:"head_sha"`
	HtmlUrl string `json:"html_url"`
	Id int `json:"id"`
	JobsUrl string `json:"jobs_url"`
	LogsUrl string `json:"logs_url"`
	Name *string `json:"name,omitempty"`
	NodeId string `json:"node_id"`
	Path string `json:"path"`
	PreviousAttemptUrl *string `json:"previous_attempt_url,omitempty"`
	PullRequests []any `json:"pull_requests"`
	ReferencedWorkflows *[]any `json:"referenced_workflows,omitempty"`
	Repository map[string]any `json:"repository"`
	RerunUrl string `json:"rerun_url"`
	RunAttempt *int `json:"run_attempt,omitempty"`
	RunNumber int `json:"run_number"`
	RunStartedAt *string `json:"run_started_at,omitempty"`
	Status string `json:"status"`
	TriggeringActor map[string]any `json:"triggering_actor"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	WorkflowId int `json:"workflow_id"`
	WorkflowUrl string `json:"workflow_url"`
}

// WorkflowRunUsage is the typed data model for the workflow_run_usage entity.
type WorkflowRunUsage struct {
	MACOS map[string]any `json:"MACOS"`
	UBUNTU map[string]any `json:"UBUNTU"`
	WINDOWS map[string]any `json:"WINDOWS"`
}

// WorkflowRunUsageLoadMatch is the typed request payload for WorkflowRunUsage.LoadTyped.
type WorkflowRunUsageLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
	RunId int `json:"run_id"`
}

// WorkflowUsage is the typed data model for the workflow_usage entity.
type WorkflowUsage struct {
	MACOS *map[string]any `json:"MACOS,omitempty"`
	UBUNTU *map[string]any `json:"UBUNTU,omitempty"`
	WINDOWS *map[string]any `json:"WINDOWS,omitempty"`
	Id *string `json:"id,omitempty"`
}

// WorkflowUsageLoadMatch is the typed request payload for WorkflowUsage.LoadTyped.
type WorkflowUsageLoadMatch struct {
	Id string `json:"id"`
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
