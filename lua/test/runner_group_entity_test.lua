-- RunnerGroup entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("github_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("RunnerGroupEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:RunnerGroup(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = runner_group_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "runner_group." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_RUNNER_GROUP_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local runner_group_ref01_ent = client:RunnerGroup(nil)
    local runner_group_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.runner_group"), "runner_group_ref01"))
    runner_group_ref01_data["org_id"] = setup.idmap["org01"]

    local runner_group_ref01_data_result, err = runner_group_ref01_ent:create(runner_group_ref01_data, nil)
    assert.is_nil(err)
    runner_group_ref01_data = helpers.to_map(type(runner_group_ref01_data_result) == 'table' and runner_group_ref01_data_result.data_get and runner_group_ref01_data_result:data_get() or runner_group_ref01_data_result)
    assert.is_not_nil(runner_group_ref01_data)
    assert.is_not_nil(runner_group_ref01_data["id"])

    -- UPDATE
    local runner_group_ref01_data_up0_up = {
      id = runner_group_ref01_data["id"],
      ["org_id"] = setup.idmap["org_id"],
    }

    local runner_group_ref01_markdef_up0_name = "hosted_runners_url"
    local runner_group_ref01_markdef_up0_value = "Mark01-runner_group_ref01_" .. tostring(setup.now)
    runner_group_ref01_data_up0_up[runner_group_ref01_markdef_up0_name] = runner_group_ref01_markdef_up0_value

    local runner_group_ref01_resdata_up0_result, err = runner_group_ref01_ent:update(runner_group_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local runner_group_ref01_resdata_up0 = helpers.to_map(type(runner_group_ref01_resdata_up0_result) == 'table' and runner_group_ref01_resdata_up0_result.data_get and runner_group_ref01_resdata_up0_result:data_get() or runner_group_ref01_resdata_up0_result)
    assert.is_not_nil(runner_group_ref01_resdata_up0)
    assert.are.equal(runner_group_ref01_resdata_up0["id"], runner_group_ref01_data_up0_up["id"])
    assert.are.equal(runner_group_ref01_resdata_up0[runner_group_ref01_markdef_up0_name], runner_group_ref01_markdef_up0_value)

    -- LOAD
    local runner_group_ref01_match_dt0 = {
      id = runner_group_ref01_data["id"],
    }
    local runner_group_ref01_data_dt0_loaded, err = runner_group_ref01_ent:load(runner_group_ref01_match_dt0, nil)
    assert.is_nil(err)
    local runner_group_ref01_data_dt0_load_result = helpers.to_map(type(runner_group_ref01_data_dt0_loaded) == 'table' and runner_group_ref01_data_dt0_loaded.data_get and runner_group_ref01_data_dt0_loaded:data_get() or runner_group_ref01_data_dt0_loaded)
    assert.is_not_nil(runner_group_ref01_data_dt0_load_result)
    assert.are.equal(runner_group_ref01_data_dt0_load_result["id"], runner_group_ref01_data["id"])

  end)
end)

function runner_group_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/runner_group/RunnerGroupTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read runner_group test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "runner_group01", "runner_group02", "runner_group03", "org01", "org02", "org03" },
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
  local entid_env_raw = os.getenv("GITHUB_TEST_RUNNER_GROUP_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITHUB_TEST_RUNNER_GROUP_ENTID"] = idmap,
    ["GITHUB_TEST_LIVE"] = "FALSE",
    ["GITHUB_TEST_EXPLAIN"] = "FALSE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITHUB_TEST_RUNNER_GROUP_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["org_id"] == nil then
    idmap_resolved["org_id"] = idmap_resolved["org01"]
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
