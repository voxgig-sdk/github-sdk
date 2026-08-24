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

// Repo is the typed data model for the repo entity.
type Repo struct {
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
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
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
	GitignoreTemplate *string `json:"gitignore_template,omitempty"`
	HasDiscussions bool `json:"has_discussions"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues bool `json:"has_issues"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasPullRequests *bool `json:"has_pull_requests,omitempty"`
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
	PullRequestCreationPolicy *string `json:"pull_request_creation_policy,omitempty"`
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
	StarredAt *string `json:"starred_at,omitempty"`
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

// RepoLoadMatch is the typed request payload for Repo.LoadTyped.
type RepoLoadMatch struct {
	Owner string `json:"owner"`
	Repo string `json:"repo"`
}

// RepoListMatch is the typed request payload for Repo.ListTyped.
type RepoListMatch struct {
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
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
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
	GitignoreTemplate *string `json:"gitignore_template,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasPullRequests *bool `json:"has_pull_requests,omitempty"`
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
	Owner *map[string]any `json:"owner,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Private *bool `json:"private,omitempty"`
	PullRequestCreationPolicy *string `json:"pull_request_creation_policy,omitempty"`
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
	StarredAt *string `json:"starred_at,omitempty"`
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

// RepoCreateData is the typed request payload for Repo.CreateTyped.
type RepoCreateData struct {
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
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
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
	GitignoreTemplate *string `json:"gitignore_template,omitempty"`
	HasDiscussions bool `json:"has_discussions"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues bool `json:"has_issues"`
	HasPages bool `json:"has_pages"`
	HasProjects bool `json:"has_projects"`
	HasPullRequests *bool `json:"has_pull_requests,omitempty"`
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
	PullRequestCreationPolicy *string `json:"pull_request_creation_policy,omitempty"`
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
	StarredAt *string `json:"starred_at,omitempty"`
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

// RepoUpdateData is the typed request payload for Repo.UpdateTyped.
type RepoUpdateData struct {
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
	CodeSearchIndexStatus *map[string]any `json:"code_search_index_status,omitempty"`
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
	GitignoreTemplate *string `json:"gitignore_template,omitempty"`
	HasDiscussions *bool `json:"has_discussions,omitempty"`
	HasDownloads *bool `json:"has_downloads,omitempty"`
	HasIssues *bool `json:"has_issues,omitempty"`
	HasPages *bool `json:"has_pages,omitempty"`
	HasProjects *bool `json:"has_projects,omitempty"`
	HasPullRequests *bool `json:"has_pull_requests,omitempty"`
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
	PullRequestCreationPolicy *string `json:"pull_request_creation_policy,omitempty"`
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
	StarredAt *string `json:"starred_at,omitempty"`
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

// RepoRemoveMatch is the typed request payload for Repo.RemoveTyped.
type RepoRemoveMatch struct {
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
