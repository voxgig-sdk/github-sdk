-- StatusCheckPolicy entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("github_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("StatusCheckPolicyEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:StatusCheckPolicy(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["status_check_policy"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:StatusCheckPolicy(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:StatusCheckPolicy(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = status_check_policy_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"list", "update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "status_check_policy." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_STATUS_CHECK_POLICY_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local status_check_policy_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.status_check_policy")))
    local status_check_policy_ref01_data = nil
    if #status_check_policy_ref01_data_raw > 0 then
      status_check_policy_ref01_data = helpers.to_map(status_check_policy_ref01_data_raw[1][2])
    end

    -- LIST
    local status_check_policy_ref01_ent = client:StatusCheckPolicy(nil)
    local status_check_policy_ref01_match = {
      ["branch_id"] = setup.idmap["branch01"],
      ["owner"] = setup.idmap["owner01"],
      ["repo"] = setup.idmap["repo01"],
    }

    local status_check_policy_ref01_list_result, err = status_check_policy_ref01_ent:list(status_check_policy_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(status_check_policy_ref01_list_result)

    -- UPDATE
    local status_check_policy_ref01_data_up0_up = {
      ["owner"] = setup.idmap["owner"],
      ["repo"] = setup.idmap["repo"],
    }

    local status_check_policy_ref01_markdef_up0_name = "context"
    local status_check_policy_ref01_markdef_up0_value = "Mark01-status_check_policy_ref01_" .. tostring(setup.now)
    status_check_policy_ref01_data_up0_up[status_check_policy_ref01_markdef_up0_name] = status_check_policy_ref01_markdef_up0_value

    local status_check_policy_ref01_resdata_up0_result, err = status_check_policy_ref01_ent:update(status_check_policy_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local status_check_policy_ref01_resdata_up0 = helpers.to_map(type(status_check_policy_ref01_resdata_up0_result) == 'table' and status_check_policy_ref01_resdata_up0_result.data_get and status_check_policy_ref01_resdata_up0_result:data_get() or status_check_policy_ref01_resdata_up0_result)
    assert.is_not_nil(status_check_policy_ref01_resdata_up0)
    assert.are.equal(status_check_policy_ref01_resdata_up0[status_check_policy_ref01_markdef_up0_name], status_check_policy_ref01_markdef_up0_value)

  end)
end)

function status_check_policy_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/status_check_policy/StatusCheckPolicyTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read status_check_policy test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "status_check_policy01", "status_check_policy02", "status_check_policy03", "repo01", "repo02", "repo03", "branch01", "branch02", "branch03", "owner01" },
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
  local entid_env_raw = os.getenv("GITHUB_TEST_STATUS_CHECK_POLICY_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITHUB_TEST_STATUS_CHECK_POLICY_ENTID"] = idmap,
    ["GITHUB_TEST_LIVE"] = "FALSE",
    ["GITHUB_TEST_EXPLAIN"] = "FALSE",
    ["GITHUB_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["GITHUB_TEST_STATUS_CHECK_POLICY_ENTID"])
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
        apikey = env["GITHUB_APIKEY"],
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
