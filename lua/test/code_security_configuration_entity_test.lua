-- CodeSecurityConfiguration entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("github_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("CodeSecurityConfigurationEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:CodeSecurityConfiguration(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["code_security_configuration"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:CodeSecurityConfiguration(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:CodeSecurityConfiguration(nil):stream("list", nil, nil) do
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
    local setup = code_security_configuration_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "code_security_configuration." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local code_security_configuration_ref01_ent = client:CodeSecurityConfiguration(nil)
    local code_security_configuration_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.code_security_configuration"), "code_security_configuration_ref01"))
    code_security_configuration_ref01_data["enterprise"] = setup.idmap["enterprise01"]
    code_security_configuration_ref01_data["org_id"] = setup.idmap["org01"]
    code_security_configuration_ref01_data["owner"] = setup.idmap["owner01"]

    local code_security_configuration_ref01_data_result, err = code_security_configuration_ref01_ent:create(code_security_configuration_ref01_data, nil)
    assert.is_nil(err)
    code_security_configuration_ref01_data = helpers.to_map(type(code_security_configuration_ref01_data_result) == 'table' and code_security_configuration_ref01_data_result.data_get and code_security_configuration_ref01_data_result:data_get() or code_security_configuration_ref01_data_result)
    assert.is_not_nil(code_security_configuration_ref01_data)
    assert.is_not_nil(code_security_configuration_ref01_data["id"])

    -- LIST
    local code_security_configuration_ref01_match = {
      ["enterprise"] = setup.idmap["enterprise01"],
    }

    local code_security_configuration_ref01_list_result, err = code_security_configuration_ref01_ent:list(code_security_configuration_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(code_security_configuration_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(code_security_configuration_ref01_list_result),
      { id = code_security_configuration_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local code_security_configuration_ref01_data_up0_up = {
      id = code_security_configuration_ref01_data["id"],
      ["org_id"] = setup.idmap["org_id"],
    }

    local code_security_configuration_ref01_markdef_up0_name = "advanced_security"
    local code_security_configuration_ref01_markdef_up0_value = "Mark01-code_security_configuration_ref01_" .. tostring(setup.now)
    code_security_configuration_ref01_data_up0_up[code_security_configuration_ref01_markdef_up0_name] = code_security_configuration_ref01_markdef_up0_value

    local code_security_configuration_ref01_resdata_up0_result, err = code_security_configuration_ref01_ent:update(code_security_configuration_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local code_security_configuration_ref01_resdata_up0 = helpers.to_map(type(code_security_configuration_ref01_resdata_up0_result) == 'table' and code_security_configuration_ref01_resdata_up0_result.data_get and code_security_configuration_ref01_resdata_up0_result:data_get() or code_security_configuration_ref01_resdata_up0_result)
    assert.is_not_nil(code_security_configuration_ref01_resdata_up0)
    assert.are.equal(code_security_configuration_ref01_resdata_up0["id"], code_security_configuration_ref01_data_up0_up["id"])
    assert.are.equal(code_security_configuration_ref01_resdata_up0[code_security_configuration_ref01_markdef_up0_name], code_security_configuration_ref01_markdef_up0_value)

    -- LOAD
    local code_security_configuration_ref01_match_dt0 = {
      id = code_security_configuration_ref01_data["id"],
    }
    local code_security_configuration_ref01_data_dt0_loaded, err = code_security_configuration_ref01_ent:load(code_security_configuration_ref01_match_dt0, nil)
    assert.is_nil(err)
    local code_security_configuration_ref01_data_dt0_load_result = helpers.to_map(type(code_security_configuration_ref01_data_dt0_loaded) == 'table' and code_security_configuration_ref01_data_dt0_loaded.data_get and code_security_configuration_ref01_data_dt0_loaded:data_get() or code_security_configuration_ref01_data_dt0_loaded)
    assert.is_not_nil(code_security_configuration_ref01_data_dt0_load_result)
    assert.are.equal(code_security_configuration_ref01_data_dt0_load_result["id"], code_security_configuration_ref01_data["id"])

  end)
end)

function code_security_configuration_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/code_security_configuration/CodeSecurityConfigurationTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read code_security_configuration test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "code_security_configuration01", "code_security_configuration02", "code_security_configuration03", "enterpris01", "enterpris02", "enterpris03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "configuration01", "configuration02", "configuration03", "enterprise01", "owner01" },
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
  local entid_env_raw = os.getenv("GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID"] = idmap,
    ["GITHUB_TEST_LIVE"] = "FALSE",
    ["GITHUB_TEST_EXPLAIN"] = "FALSE",
    ["GITHUB_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID"])
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
