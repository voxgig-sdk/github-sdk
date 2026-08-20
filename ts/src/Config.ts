
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Github',
        slug: "github",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.github.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      repo: {
      },

    }
  }


  entity = {
    "repo": {
      "fields": [
        {
          "name": "allow_auto_merge",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "allow_forking",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "allow_merge_commit",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "allow_rebase_merge",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "allow_squash_merge",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "allow_update_branch",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "anonymous_access_enabled",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "archive_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "archived",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "assignees_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "auto_init",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "blobs_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "branches_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "clone_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "code_of_conduct",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "code_search_index_status",
          "type": "`$OBJECT`"
        },
        {
          "name": "collaborators_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "comments_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "commits_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "compare_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "contents_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "contributors_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "created_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "custom_properties",
          "type": "`$OBJECT`"
        },
        {
          "name": "default_branch",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "delete_branch_on_merge",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "deployments_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "disabled",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "downloads_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "events_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "fork",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "forks",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "forks_count",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "forks_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "full_name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "git_commits_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "git_refs_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "git_tags_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "git_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "gitignore_template",
          "type": "`$STRING`"
        },
        {
          "name": "has_discussions",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "list": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "has_downloads",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          },
          "type": "`$BOOLEAN`"
        },
        {
          "name": "has_issues",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "has_pages",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "has_projects",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "has_pull_requests",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "has_wiki",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "homepage",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "hooks_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "html_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "is_template",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "issue_comment_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "issue_events_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "issues_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "keys_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "labels_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "language",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "languages_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "license",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "license_template",
          "type": "`$STRING`"
        },
        {
          "name": "master_branch",
          "type": "`$STRING`"
        },
        {
          "name": "merge_commit_message",
          "type": "`$STRING`"
        },
        {
          "name": "merge_commit_title",
          "type": "`$STRING`"
        },
        {
          "name": "merges_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "milestones_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "mirror_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "network_count",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "node_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "notifications_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "open_issues",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "open_issues_count",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "organization",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "owner",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "parent",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "permissions",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "private",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "pull_request_creation_policy",
          "type": "`$STRING`"
        },
        {
          "name": "pulls_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "pushed_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "releases_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "security_and_analysis",
          "type": "`$OBJECT`"
        },
        {
          "name": "size",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "source",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "squash_merge_commit_message",
          "type": "`$STRING`"
        },
        {
          "name": "squash_merge_commit_title",
          "type": "`$STRING`"
        },
        {
          "name": "ssh_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "stargazers_count",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "stargazers_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "starred_at",
          "type": "`$STRING`"
        },
        {
          "name": "statuses_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "subscribers_count",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "subscribers_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "subscription_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "svn_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "tags_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "team_id",
          "type": "`$INTEGER`"
        },
        {
          "name": "teams_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "temp_clone_token",
          "type": "`$STRING`"
        },
        {
          "name": "template_repository",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "topics",
          "type": "`$ARRAY`"
        },
        {
          "name": "trees_url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "updated_at",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "use_squash_pr_title_as_default",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "visibility",
          "type": "`$STRING`"
        },
        {
          "name": "watchers",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "watchers_count",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "web_commit_signoff_required",
          "type": "`$BOOLEAN`"
        }
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
                "repos"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "direction",
                    "orig": "direction",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 30,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "since",
                    "orig": "since",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "full_name",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "all",
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "all",
                    "kind": "query",
                    "name": "visibility",
                    "orig": "visibility",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/user/repos",
              "parts": [
                "user",
                "repos"
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
                  "visibility"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "repo",
                    "orig": "repo",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/repos/{owner}/{repo}",
              "parts": [
                "repos",
                "{owner}",
                "{repo}"
              ],
              "select": {
                "exist": [
                  "owner",
                  "repo"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "repo",
                    "orig": "repo",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/repos/{owner}/{repo}",
              "parts": [
                "repos",
                "{owner}",
                "{repo}"
              ],
              "select": {
                "exist": [
                  "owner",
                  "repo"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "repo",
                    "orig": "repo",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/repos/{owner}/{repo}",
              "parts": [
                "repos",
                "{owner}",
                "{repo}"
              ],
              "select": {
                "exist": [
                  "owner",
                  "repo"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "repo"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config
}

