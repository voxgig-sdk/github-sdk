-- GitRef entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("github_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("GitRefEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:GitRef(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = git_ref_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "git_ref." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_GIT_REF_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local git_ref_ref01_ent = client:GitRef(nil)
    local git_ref_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.git_ref"), "git_ref_ref01"))
    git_ref_ref01_data["owner"] = setup.idmap["owner01"]
    git_ref_ref01_data["repo"] = setup.idmap["repo01"]

    local git_ref_ref01_data_result, err = git_ref_ref01_ent:create(git_ref_ref01_data, nil)
    assert.is_nil(err)
    git_ref_ref01_data = helpers.to_map(type(git_ref_ref01_data_result) == 'table' and git_ref_ref01_data_result.data_get and git_ref_ref01_data_result:data_get() or git_ref_ref01_data_result)
    assert.is_not_nil(git_ref_ref01_data)
    assert.is_not_nil(git_ref_ref01_data["id"])

    -- UPDATE
    local git_ref_ref01_data_up0_up = {
      id = git_ref_ref01_data["id"],
      ["owner"] = setup.idmap["owner"],
      ["repo"] = setup.idmap["repo"],
    }

    local git_ref_ref01_markdef_up0_name = "node_id"
    local git_ref_ref01_markdef_up0_value = "Mark01-git_ref_ref01_" .. tostring(setup.now)
    git_ref_ref01_data_up0_up[git_ref_ref01_markdef_up0_name] = git_ref_ref01_markdef_up0_value

    local git_ref_ref01_resdata_up0_result, err = git_ref_ref01_ent:update(git_ref_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local git_ref_ref01_resdata_up0 = helpers.to_map(type(git_ref_ref01_resdata_up0_result) == 'table' and git_ref_ref01_resdata_up0_result.data_get and git_ref_ref01_resdata_up0_result:data_get() or git_ref_ref01_resdata_up0_result)
    assert.is_not_nil(git_ref_ref01_resdata_up0)
    assert.are.equal(git_ref_ref01_resdata_up0["id"], git_ref_ref01_data_up0_up["id"])
    assert.are.equal(git_ref_ref01_resdata_up0[git_ref_ref01_markdef_up0_name], git_ref_ref01_markdef_up0_value)

    -- LOAD
    local git_ref_ref01_match_dt0 = {
      id = git_ref_ref01_data["id"],
    }
    local git_ref_ref01_data_dt0_loaded, err = git_ref_ref01_ent:load(git_ref_ref01_match_dt0, nil)
    assert.is_nil(err)
    local git_ref_ref01_data_dt0_load_result = helpers.to_map(type(git_ref_ref01_data_dt0_loaded) == 'table' and git_ref_ref01_data_dt0_loaded.data_get and git_ref_ref01_data_dt0_loaded:data_get() or git_ref_ref01_data_dt0_loaded)
    assert.is_not_nil(git_ref_ref01_data_dt0_load_result)
    assert.are.equal(git_ref_ref01_data_dt0_load_result["id"], git_ref_ref01_data["id"])

  end)
end)

function git_ref_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/git_ref/GitRefTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read git_ref test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "git_ref01", "git_ref02", "git_ref03", "repo01", "repo02", "repo03", "matching_ref01", "matching_ref02", "matching_ref03", "owner01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("GITHUB_TEST_GIT_REF_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITHUB_TEST_GIT_REF_ENTID"] = idmap,
    ["GITHUB_TEST_LIVE"] = "FALSE",
    ["GITHUB_TEST_EXPLAIN"] = "FALSE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITHUB_TEST_GIT_REF_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["owner"] == nil then
    idmap_resolved["owner"] = idmap_resolved["owner01"]
  end
  if idmap_resolved["repo"] == nil then
    idmap_resolved["repo"] = idmap_resolved["repo01"]
  end

  if env["GITHUB_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["GITHUB_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["GITHUB_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
