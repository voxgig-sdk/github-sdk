-- Github SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Github",
      slug = "github",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.github.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["repo"] = {},
      },
    },
    entity = {
      ["repo"] = {
        ["fields"] = {
          {
            ["name"] = "allow_auto_merge",
            ["short"] = "Whether to allow Auto-merge to be used on pull requests.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "allow_forking",
            ["short"] = "Either `true` to allow private forks, or `false` to prevent private forks.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "allow_merge_commit",
            ["short"] = "Whether to allow merge commits for pull requests.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "allow_rebase_merge",
            ["short"] = "Whether to allow rebase merges for pull requests.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "allow_squash_merge",
            ["short"] = "Whether to allow squash merges for pull requests.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "allow_update_branch",
            ["short"] = "Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "anonymous_access_enabled",
            ["short"] = "Whether anonymous git access is allowed.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "archive_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "archived",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["req"] = true,
            ["short"] = "Whether to archive this repository.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "assignees_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auto_init",
            ["short"] = "Whether the repository is initialized with a minimal README.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "blobs_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "branches_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "clone_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "code_of_conduct",
            ["req"] = true,
            ["short"] = "Code of Conduct Simple",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "code_search_index_status",
            ["short"] = "The status of the code search index for this repository",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "collaborators_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "comments_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "commits_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compare_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "contents_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "contributors_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "custom_properties",
            ["short"] = "The custom properties that were defined for the repository.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "default_branch",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "Updates the default branch for this repository.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "delete_branch_on_merge",
            ["short"] = "Whether to delete head branches when pull requests are merged",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "deployments_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "A short description of the repository.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disabled",
            ["req"] = true,
            ["short"] = "Returns whether or not this repository disabled.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "downloads_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "events_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fork",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "forks",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "forks_count",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "forks_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "full_name",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "git_commits_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "git_refs_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "git_tags_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "git_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gitignore_template",
            ["short"] = "The desired language or platform to apply to the .gitignore.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "has_discussions",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$BOOLEAN`",
              },
              ["list"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["req"] = true,
            ["short"] = "Whether discussions are enabled.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "has_downloads",
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether downloads are enabled.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "has_issues",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$BOOLEAN`",
              },
              ["update"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["req"] = true,
            ["short"] = "Whether issues are enabled.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "has_pages",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "has_projects",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$BOOLEAN`",
              },
              ["update"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["req"] = true,
            ["short"] = "Whether projects are enabled.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "has_pull_requests",
            ["short"] = "Either `true` to allow pull requests for this repository or `false` to prevent pull requests.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "has_wiki",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$BOOLEAN`",
              },
              ["update"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["req"] = true,
            ["short"] = "Whether the wiki is enabled.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "homepage",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "A URL with more information about the repository.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "hooks_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "html_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier of the repository",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "is_template",
            ["short"] = "Whether this repository acts as a template that can be used to generate new repositories.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "issue_comment_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "issue_events_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "issues_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "keys_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "labels_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "language",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "languages_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "license",
            ["req"] = true,
            ["short"] = "License Simple",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "license_template",
            ["short"] = "The license keyword of the open source license for this repository.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "master_branch",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "merge_commit_message",
            ["short"] = "The default value for a merge commit message.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "merge_commit_title",
            ["short"] = "The default value for a merge commit title.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "merges_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "milestones_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mirror_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "The name of the repository.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "network_count",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "node_id",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "notifications_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "open_issues",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "open_issues_count",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "organization",
            ["req"] = true,
            ["short"] = "A GitHub user.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "owner",
            ["req"] = true,
            ["short"] = "A GitHub user.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "parent",
            ["req"] = true,
            ["short"] = "A repository on GitHub.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "permissions",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "private",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$BOOLEAN`",
              },
              ["update"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["req"] = true,
            ["short"] = "Whether the repository is private.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "pull_request_creation_policy",
            ["short"] = "The policy controlling who can create pull requests: all or collaborators_only.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pulls_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pushed_at",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "releases_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "security_and_analysis",
            ["short"] = "Specify which security and analysis features to enable or disable for the repository.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "size",
            ["req"] = true,
            ["short"] = "The size of the repository, in kilobytes.",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "source",
            ["req"] = true,
            ["short"] = "A repository on GitHub.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "squash_merge_commit_message",
            ["short"] = "The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "squash_merge_commit_title",
            ["short"] = "The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ssh_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stargazers_count",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "stargazers_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "starred_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "statuses_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "subscribers_count",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "subscribers_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "subscription_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "svn_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "team_id",
            ["short"] = "The id of the team that will be granted access to this repository.",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "teams_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "temp_clone_token",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "template_repository",
            ["req"] = true,
            ["short"] = "A repository on GitHub.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "topics",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "trees_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updated_at",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "use_squash_pr_title_as_default",
            ["short"] = "Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "visibility",
            ["short"] = "The repository visibility: public, private, or internal.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "watchers",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "watchers_count",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "web_commit_signoff_required",
            ["short"] = "Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits.",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "repo",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/user/repos",
                ["parts"] = {
                  "user",
                  "repos",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "owner,collaborator,organization_member",
                      ["kind"] = "query",
                      ["name"] = "affiliation",
                      ["orig"] = "affiliation",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "before",
                      ["orig"] = "before",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "direction",
                      ["orig"] = "direction",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 30,
                      ["kind"] = "query",
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "since",
                      ["orig"] = "since",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "full_name",
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "visibility",
                      ["orig"] = "visibility",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/user/repos",
                ["parts"] = {
                  "user",
                  "repos",
                },
                ["select"] = {
                  ["exist"] = {
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/repos/{owner}/{repo}",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/repos/{owner}/{repo}",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "owner",
                      ["orig"] = "owner",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "repo",
                      ["orig"] = "repo",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/repos/{owner}/{repo}",
                ["parts"] = {
                  "repos",
                  "{owner}",
                  "{repo}",
                },
                ["select"] = {
                  ["exist"] = {
                    "owner",
                    "repo",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "repo",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
