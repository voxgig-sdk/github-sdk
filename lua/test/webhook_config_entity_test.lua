-- WebhookConfig entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("github_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("WebhookConfigEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:WebhookConfig(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = webhook_config_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "webhook_config." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_WEBHOOK_CONFIG_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local webhook_config_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.webhook_config")))
    local webhook_config_ref01_data = nil
    if #webhook_config_ref01_data_raw > 0 then
      webhook_config_ref01_data = helpers.to_map(webhook_config_ref01_data_raw[1][2])
    end

    -- UPDATE
    local webhook_config_ref01_ent = client:WebhookConfig(nil)
    local webhook_config_ref01_data_up0_up = {
    }

    local webhook_config_ref01_markdef_up0_name = "content_type"
    local webhook_config_ref01_markdef_up0_value = "Mark01-webhook_config_ref01_" .. tostring(setup.now)
    webhook_config_ref01_data_up0_up[webhook_config_ref01_markdef_up0_name] = webhook_config_ref01_markdef_up0_value

    local webhook_config_ref01_resdata_up0_result, err = webhook_config_ref01_ent:update(webhook_config_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local webhook_config_ref01_resdata_up0 = helpers.to_map(type(webhook_config_ref01_resdata_up0_result) == 'table' and webhook_config_ref01_resdata_up0_result.data_get and webhook_config_ref01_resdata_up0_result:data_get() or webhook_config_ref01_resdata_up0_result)
    assert.is_not_nil(webhook_config_ref01_resdata_up0)
    assert.are.equal(webhook_config_ref01_resdata_up0[webhook_config_ref01_markdef_up0_name], webhook_config_ref01_markdef_up0_value)

    -- LOAD
    local webhook_config_ref01_match_dt0 = {}
    local webhook_config_ref01_data_dt0_loaded, err = webhook_config_ref01_ent:load(webhook_config_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(webhook_config_ref01_data_dt0_loaded)

  end)
end)

function webhook_config_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/webhook_config/WebhookConfigTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read webhook_config test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "webhook_config01", "webhook_config02", "webhook_config03", "org01", "org02", "org03", "hook01", "hook02", "hook03", "repo01", "repo02", "repo03" },
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
  local entid_env_raw = os.getenv("GITHUB_TEST_WEBHOOK_CONFIG_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITHUB_TEST_WEBHOOK_CONFIG_ENTID"] = idmap,
    ["GITHUB_TEST_LIVE"] = "FALSE",
    ["GITHUB_TEST_EXPLAIN"] = "FALSE",
    ["GITHUB_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["GITHUB_TEST_WEBHOOK_CONFIG_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
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
