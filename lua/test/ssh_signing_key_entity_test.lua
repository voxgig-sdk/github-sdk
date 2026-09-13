-- SshSigningKey entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("github_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("SshSigningKeyEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:SshSigningKey(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["ssh_signing_key"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:SshSigningKey(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:SshSigningKey(nil):stream("list", nil, nil) do
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
    local setup = ssh_signing_key_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "ssh_signing_key." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_SSH_SIGNING_KEY_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local ssh_signing_key_ref01_ent = client:SshSigningKey(nil)
    local ssh_signing_key_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.ssh_signing_key"), "ssh_signing_key_ref01"))
    ssh_signing_key_ref01_data["username"] = setup.idmap["username01"]

    local ssh_signing_key_ref01_data_result, err = ssh_signing_key_ref01_ent:create(ssh_signing_key_ref01_data, nil)
    assert.is_nil(err)
    ssh_signing_key_ref01_data = helpers.to_map(type(ssh_signing_key_ref01_data_result) == 'table' and ssh_signing_key_ref01_data_result.data_get and ssh_signing_key_ref01_data_result:data_get() or ssh_signing_key_ref01_data_result)
    assert.is_not_nil(ssh_signing_key_ref01_data)
    assert.is_not_nil(ssh_signing_key_ref01_data["id"])

    -- LIST
    local ssh_signing_key_ref01_match = {}

    local ssh_signing_key_ref01_list_result, err = ssh_signing_key_ref01_ent:list(ssh_signing_key_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(ssh_signing_key_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(ssh_signing_key_ref01_list_result),
      { id = ssh_signing_key_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- LOAD
    local ssh_signing_key_ref01_match_dt0 = {
      id = ssh_signing_key_ref01_data["id"],
    }
    local ssh_signing_key_ref01_data_dt0_loaded, err = ssh_signing_key_ref01_ent:load(ssh_signing_key_ref01_match_dt0, nil)
    assert.is_nil(err)
    local ssh_signing_key_ref01_data_dt0_load_result = helpers.to_map(type(ssh_signing_key_ref01_data_dt0_loaded) == 'table' and ssh_signing_key_ref01_data_dt0_loaded.data_get and ssh_signing_key_ref01_data_dt0_loaded:data_get() or ssh_signing_key_ref01_data_dt0_loaded)
    assert.is_not_nil(ssh_signing_key_ref01_data_dt0_load_result)
    assert.are.equal(ssh_signing_key_ref01_data_dt0_load_result["id"], ssh_signing_key_ref01_data["id"])

  end)
end)

function ssh_signing_key_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/ssh_signing_key/SshSigningKeyTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read ssh_signing_key test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "ssh_signing_key01", "ssh_signing_key02", "ssh_signing_key03", "user01", "user02", "user03", "username01" },
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
  local entid_env_raw = os.getenv("GITHUB_TEST_SSH_SIGNING_KEY_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITHUB_TEST_SSH_SIGNING_KEY_ENTID"] = idmap,
    ["GITHUB_TEST_LIVE"] = "FALSE",
    ["GITHUB_TEST_EXPLAIN"] = "FALSE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITHUB_TEST_SSH_SIGNING_KEY_ENTID"])
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
