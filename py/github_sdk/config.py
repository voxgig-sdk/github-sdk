# Github SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Github",
            "slug": "github",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.github.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "repo": {},
            },
        },
        "entity": {
      "repo": {
        "fields": [
          {
            "name": "allow_auto_merge",
            "short": "Whether to allow Auto-merge to be used on pull requests.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "allow_forking",
            "short": "Either `true` to allow private forks, or `false` to prevent private forks.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "allow_merge_commit",
            "short": "Whether to allow merge commits for pull requests.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "allow_rebase_merge",
            "short": "Whether to allow rebase merges for pull requests.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "allow_squash_merge",
            "short": "Whether to allow squash merges for pull requests.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "allow_update_branch",
            "short": "Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "anonymous_access_enabled",
            "short": "Whether anonymous git access is allowed.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "archive_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "archived",
            "op": {
              "update": {
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "short": "Whether to archive this repository.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "assignees_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "auto_init",
            "short": "Whether the repository is initialized with a minimal README.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "blobs_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "branches_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "clone_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "code_of_conduct",
            "req": True,
            "short": "Code of Conduct Simple",
            "type": "`$OBJECT`",
          },
          {
            "name": "code_search_index_status",
            "short": "The status of the code search index for this repository",
            "type": "`$OBJECT`",
          },
          {
            "name": "collaborators_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "comments_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "commits_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compare_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "contents_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "contributors_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "custom_properties",
            "short": "The custom properties that were defined for the repository.",
            "type": "`$OBJECT`",
          },
          {
            "name": "default_branch",
            "op": {
              "update": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "Updates the default branch for this repository.",
            "type": "`$STRING`",
          },
          {
            "name": "delete_branch_on_merge",
            "short": "Whether to delete head branches when pull requests are merged",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "deployments_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
              "update": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "A short description of the repository.",
            "type": "`$STRING`",
          },
          {
            "name": "disabled",
            "req": True,
            "short": "Returns whether or not this repository disabled.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "downloads_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "events_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "fork",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "forks",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "forks_count",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "forks_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "full_name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "git_commits_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "git_refs_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "git_tags_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "git_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "gitignore_template",
            "short": "The desired language or platform to apply to the .gitignore.",
            "type": "`$STRING`",
          },
          {
            "name": "has_discussions",
            "op": {
              "create": {
                "type": "`$BOOLEAN`",
              },
              "list": {
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "short": "Whether discussions are enabled.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "has_downloads",
            "op": {
              "list": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "short": "Whether downloads are enabled.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "has_issues",
            "op": {
              "create": {
                "type": "`$BOOLEAN`",
              },
              "update": {
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "short": "Whether issues are enabled.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "has_pages",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "has_projects",
            "op": {
              "create": {
                "type": "`$BOOLEAN`",
              },
              "update": {
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "short": "Whether projects are enabled.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "has_pull_requests",
            "short": "Either `true` to allow pull requests for this repository or `false` to prevent pull requests.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "has_wiki",
            "op": {
              "create": {
                "type": "`$BOOLEAN`",
              },
              "update": {
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "short": "Whether the wiki is enabled.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "homepage",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
              "update": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "A URL with more information about the repository.",
            "type": "`$STRING`",
          },
          {
            "name": "hooks_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "html_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier of the repository",
            "type": "`$INTEGER`",
          },
          {
            "name": "is_template",
            "short": "Whether this repository acts as a template that can be used to generate new repositories.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "issue_comment_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "issue_events_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "issues_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "keys_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "labels_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "language",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "languages_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "license",
            "req": True,
            "short": "License Simple",
            "type": "`$OBJECT`",
          },
          {
            "name": "license_template",
            "short": "The license keyword of the open source license for this repository.",
            "type": "`$STRING`",
          },
          {
            "name": "master_branch",
            "type": "`$STRING`",
          },
          {
            "name": "merge_commit_message",
            "short": "The default value for a merge commit message.",
            "type": "`$STRING`",
          },
          {
            "name": "merge_commit_title",
            "short": "The default value for a merge commit title.",
            "type": "`$STRING`",
          },
          {
            "name": "merges_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "milestones_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "mirror_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "op": {
              "update": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "The name of the repository.",
            "type": "`$STRING`",
          },
          {
            "name": "network_count",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "node_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "notifications_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "open_issues",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "open_issues_count",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "organization",
            "req": True,
            "short": "A GitHub user.",
            "type": "`$OBJECT`",
          },
          {
            "name": "owner",
            "req": True,
            "short": "A GitHub user.",
            "type": "`$OBJECT`",
          },
          {
            "name": "parent",
            "req": True,
            "short": "A repository on GitHub.",
            "type": "`$OBJECT`",
          },
          {
            "name": "permissions",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "private",
            "op": {
              "create": {
                "type": "`$BOOLEAN`",
              },
              "update": {
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "short": "Whether the repository is private.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "pull_request_creation_policy",
            "short": "The policy controlling who can create pull requests: all or collaborators_only.",
            "type": "`$STRING`",
          },
          {
            "name": "pulls_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "pushed_at",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "releases_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "security_and_analysis",
            "short": "Specify which security and analysis features to enable or disable for the repository.",
            "type": "`$OBJECT`",
          },
          {
            "name": "size",
            "req": True,
            "short": "The size of the repository, in kilobytes.",
            "type": "`$INTEGER`",
          },
          {
            "name": "source",
            "req": True,
            "short": "A repository on GitHub.",
            "type": "`$OBJECT`",
          },
          {
            "name": "squash_merge_commit_message",
            "short": "The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body.",
            "type": "`$STRING`",
          },
          {
            "name": "squash_merge_commit_title",
            "short": "The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title.",
            "type": "`$STRING`",
          },
          {
            "name": "ssh_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "stargazers_count",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "stargazers_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "starred_at",
            "type": "`$STRING`",
          },
          {
            "name": "statuses_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "subscribers_count",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "subscribers_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "subscription_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "svn_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "tags_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "team_id",
            "short": "The id of the team that will be granted access to this repository.",
            "type": "`$INTEGER`",
          },
          {
            "name": "teams_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "temp_clone_token",
            "type": "`$STRING`",
          },
          {
            "name": "template_repository",
            "req": True,
            "short": "A repository on GitHub.",
            "type": "`$OBJECT`",
          },
          {
            "name": "topics",
            "type": "`$ARRAY`",
          },
          {
            "name": "trees_url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "use_squash_pr_title_as_default",
            "short": "Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "visibility",
            "short": "The repository visibility: public, private, or internal.",
            "type": "`$STRING`",
          },
          {
            "name": "watchers",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "watchers_count",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "web_commit_signoff_required",
            "short": "Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits.",
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "repo",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/user/repos",
                "parts": [
                  "user",
                  "repos",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "owner,collaborator,organization_member",
                      "kind": "query",
                      "name": "affiliation",
                      "orig": "affiliation",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "before",
                      "orig": "before",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "direction",
                      "orig": "direction",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 30,
                      "kind": "query",
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "since",
                      "orig": "since",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "full_name",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "all",
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "all",
                      "kind": "query",
                      "name": "visibility",
                      "orig": "visibility",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/user/repos",
                "parts": [
                  "user",
                  "repos",
                ],
                "select": {
                  "exist": [
                    "affiliation",
                    "before",
                    "direction",
                    "page",
                    "per_page",
                    "since",
                    "sort",
                    "type",
                    "visibility",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/repos/{owner}/{repo}",
                "parts": [
                  "repos",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/repos/{owner}/{repo}",
                "parts": [
                  "repos",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "owner",
                      "orig": "owner",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "repo",
                      "orig": "repo",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "PATCH",
                "orig": "/repos/{owner}/{repo}",
                "parts": [
                  "repos",
                  "{owner}",
                  "{repo}",
                ],
                "select": {
                  "exist": [
                    "owner",
                    "repo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "repo",
            ],
          ],
        },
      },
    },
    }
