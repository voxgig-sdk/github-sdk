package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Github",
			"slug": "github",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.github.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"repo": map[string]any{},
			},
		},
		"entity": map[string]any{
			"repo": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_auto_merge",
						"short": "Whether to allow Auto-merge to be used on pull requests.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "allow_forking",
						"short": "Either `true` to allow private forks, or `false` to prevent private forks.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "allow_merge_commit",
						"short": "Whether to allow merge commits for pull requests.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "allow_rebase_merge",
						"short": "Whether to allow rebase merges for pull requests.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "allow_squash_merge",
						"short": "Whether to allow squash merges for pull requests.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "allow_update_branch",
						"short": "Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "anonymous_access_enabled",
						"short": "Whether anonymous git access is allowed.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "archive_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether to archive this repository.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "assignees_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auto_init",
						"short": "Whether the repository is initialized with a minimal README.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "blobs_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "branches_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "clone_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code_of_conduct",
						"req": true,
						"short": "Code of Conduct Simple",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "code_search_index_status",
						"short": "The status of the code search index for this repository",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "collaborators_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "comments_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "commits_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compare_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contents_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contributors_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "custom_properties",
						"short": "The custom properties that were defined for the repository.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "default_branch",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Updates the default branch for this repository.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "delete_branch_on_merge",
						"short": "Whether to delete head branches when pull requests are merged",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "deployments_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A short description of the repository.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disabled",
						"req": true,
						"short": "Returns whether or not this repository disabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "downloads_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "events_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fork",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "forks",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "forks_count",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "forks_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "full_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "git_commits_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "git_refs_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "git_tags_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "git_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gitignore_template",
						"short": "The desired language or platform to apply to the .gitignore.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_discussions",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"list": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether discussions are enabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "has_downloads",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether downloads are enabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "has_issues",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether issues are enabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "has_pages",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "has_projects",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether projects are enabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "has_pull_requests",
						"short": "Either `true` to allow pull requests for this repository or `false` to prevent pull requests.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "has_wiki",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether the wiki is enabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "homepage",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A URL with more information about the repository.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hooks_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "html_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier of the repository",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_template",
						"short": "Whether this repository acts as a template that can be used to generate new repositories.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "issue_comment_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issue_events_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "issues_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "keys_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "labels_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "languages_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "license",
						"req": true,
						"short": "License Simple",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "license_template",
						"short": "The license keyword of the open source license for this repository.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "master_branch",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_commit_message",
						"short": "The default value for a merge commit message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merge_commit_title",
						"short": "The default value for a merge commit title.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "merges_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "milestones_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mirror_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the repository.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "network_count",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "node_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notifications_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "open_issues",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "open_issues_count",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "organization",
						"req": true,
						"short": "A GitHub user.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "owner",
						"req": true,
						"short": "A GitHub user.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "parent",
						"req": true,
						"short": "A repository on GitHub.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "permissions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "private",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether the repository is private.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "pull_request_creation_policy",
						"short": "The policy controlling who can create pull requests: all or collaborators_only.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pulls_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pushed_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "releases_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "security_and_analysis",
						"short": "Specify which security and analysis features to enable or disable for the repository.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "size",
						"req": true,
						"short": "The size of the repository, in kilobytes.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "source",
						"req": true,
						"short": "A repository on GitHub.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "squash_merge_commit_message",
						"short": "The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "squash_merge_commit_title",
						"short": "The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ssh_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stargazers_count",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "stargazers_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "starred_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "statuses_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscribers_count",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "subscribers_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscription_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "svn_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "team_id",
						"short": "The id of the team that will be granted access to this repository.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "teams_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "temp_clone_token",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "template_repository",
						"req": true,
						"short": "A repository on GitHub.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "topics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trees_url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "use_squash_pr_title_as_default",
						"short": "Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "visibility",
						"short": "The repository visibility: public, private, or internal.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "watchers",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "watchers_count",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "web_commit_signoff_required",
						"short": "Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits.",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "repo",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/user/repos",
								"parts": []any{
									"user",
									"repos",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "owner,collaborator,organization_member",
											"kind": "query",
											"name": "affiliation",
											"orig": "affiliation",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 30,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "full_name",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "visibility",
											"orig": "visibility",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/user/repos",
								"parts": []any{
									"user",
									"repos",
								},
								"select": map[string]any{
									"exist": []any{
										"affiliation",
										"before",
										"direction",
										"page",
										"per_page",
										"since",
										"sort",
										"type",
										"visibility",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/repos/{owner}/{repo}",
								"parts": []any{
									"repos",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/repos/{owner}/{repo}",
								"parts": []any{
									"repos",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "owner",
											"orig": "owner",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "repo",
											"orig": "repo",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/repos/{owner}/{repo}",
								"parts": []any{
									"repos",
									"{owner}",
									"{repo}",
								},
								"select": map[string]any{
									"exist": []any{
										"owner",
										"repo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"repo",
						},
					},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
