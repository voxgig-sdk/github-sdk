-- DeploymentProtectionRule entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("github_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("DeploymentProtectionRuleEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:DeploymentProtectionRule(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = deployment_protection_rule_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "deployment_protection_rule." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_DEPLOYMENT_PROTECTION_RULE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local deployment_protection_rule_ref01_ent = client:DeploymentProtectionRule(nil)
    local deployment_protection_rule_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.deployment_protection_rule"), "deployment_protection_rule_ref01"))
    deployment_protection_rule_ref01_data["environment_id"] = setup.idmap["environment01"]
    deployment_protection_rule_ref01_data["environment_name"] = setup.idmap["environment_name01"]
    deployment_protection_rule_ref01_data["owner"] = setup.idmap["owner01"]
    deployment_protection_rule_ref01_data["repo"] = setup.idmap["repo01"]

    local deployment_protection_rule_ref01_data_result, err = deployment_protection_rule_ref01_ent:create(deployment_protection_rule_ref01_data, nil)
    assert.is_nil(err)
    deployment_protection_rule_ref01_data = helpers.to_map(type(deployment_protection_rule_ref01_data_result) == 'table' and deployment_protection_rule_ref01_data_result.data_get and deployment_protection_rule_ref01_data_result:data_get() or deployment_protection_rule_ref01_data_result)
    assert.is_not_nil(deployment_protection_rule_ref01_data)
    assert.is_not_nil(deployment_protection_rule_ref01_data["id"])

    -- LOAD
    local deployment_protection_rule_ref01_match_dt0 = {
      id = deployment_protection_rule_ref01_data["id"],
    }
    local deployment_protection_rule_ref01_data_dt0_loaded, err = deployment_protection_rule_ref01_ent:load(deployment_protection_rule_ref01_match_dt0, nil)
    assert.is_nil(err)
    local deployment_protection_rule_ref01_data_dt0_load_result = helpers.to_map(type(deployment_protection_rule_ref01_data_dt0_loaded) == 'table' and deployment_protection_rule_ref01_data_dt0_loaded.data_get and deployment_protection_rule_ref01_data_dt0_loaded:data_get() or deployment_protection_rule_ref01_data_dt0_loaded)
    assert.is_not_nil(deployment_protection_rule_ref01_data_dt0_load_result)
    assert.are.equal(deployment_protection_rule_ref01_data_dt0_load_result["id"], deployment_protection_rule_ref01_data["id"])

  end)
end)

function deployment_protection_rule_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/deployment_protection_rule/DeploymentProtectionRuleTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read deployment_protection_rule test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "deployment_protection_rule01", "deployment_protection_rule02", "deployment_protection_rule03", "repo01", "repo02", "repo03", "environment01", "environment02", "environment03", "environment_name01", "owner01" },
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
  local entid_env_raw = os.getenv("GITHUB_TEST_DEPLOYMENT_PROTECTION_RULE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITHUB_TEST_DEPLOYMENT_PROTECTION_RULE_ENTID"] = idmap,
    ["GITHUB_TEST_LIVE"] = "FALSE",
    ["GITHUB_TEST_EXPLAIN"] = "FALSE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITHUB_TEST_DEPLOYMENT_PROTECTION_RULE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
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
