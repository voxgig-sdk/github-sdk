-- EmptyObject entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("github_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("EmptyObjectEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:EmptyObject(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = empty_object_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "empty_object." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_EMPTY_OBJECT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local empty_object_ref01_ent = client:EmptyObject(nil)
    local empty_object_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.empty_object"), "empty_object_ref01"))
    empty_object_ref01_data["environment_id"] = setup.idmap["environment01"]
    empty_object_ref01_data["org_id"] = setup.idmap["org01"]
    empty_object_ref01_data["owner"] = setup.idmap["owner01"]
    empty_object_ref01_data["repo"] = setup.idmap["repo01"]
    empty_object_ref01_data["username"] = setup.idmap["username01"]

    local empty_object_ref01_data_result, err = empty_object_ref01_ent:create(empty_object_ref01_data, nil)
    assert.is_nil(err)
    empty_object_ref01_data = helpers.to_map(type(empty_object_ref01_data_result) == 'table' and empty_object_ref01_data_result.data_get and empty_object_ref01_data_result:data_get() or empty_object_ref01_data_result)
    assert.is_not_nil(empty_object_ref01_data)

    -- UPDATE
    local empty_object_ref01_data_up0_up = {
    }

    local empty_object_ref01_markdef_up0_name = "encrypted_value"
    local empty_object_ref01_markdef_up0_value = "Mark01-empty_object_ref01_" .. tostring(setup.now)
    empty_object_ref01_data_up0_up[empty_object_ref01_markdef_up0_name] = empty_object_ref01_markdef_up0_value

    local empty_object_ref01_resdata_up0_result, err = empty_object_ref01_ent:update(empty_object_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local empty_object_ref01_resdata_up0 = helpers.to_map(type(empty_object_ref01_resdata_up0_result) == 'table' and empty_object_ref01_resdata_up0_result.data_get and empty_object_ref01_resdata_up0_result:data_get() or empty_object_ref01_resdata_up0_result)
    assert.is_not_nil(empty_object_ref01_resdata_up0)
    assert.are.equal(empty_object_ref01_resdata_up0[empty_object_ref01_markdef_up0_name], empty_object_ref01_markdef_up0_value)

    -- LOAD
    local empty_object_ref01_match_dt0 = {}
    local empty_object_ref01_data_dt0_loaded, err = empty_object_ref01_ent:load(empty_object_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(empty_object_ref01_data_dt0_loaded)

  end)
end)

function empty_object_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/empty_object/EmptyObjectTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read empty_object test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "empty_object01", "empty_object02", "empty_object03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "secret01", "secret02", "secret03", "job01", "job02", "job03", "run01", "run02", "run03", "check_run01", "check_run02", "check_run03", "check_suite01", "check_suite02", "check_suite03", "environment01", "environment02", "environment03", "user01", "user02", "user03", "attestation01", "attestation02", "attestation03", "owner01", "username01" },
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
  local entid_env_raw = os.getenv("GITHUB_TEST_EMPTY_OBJECT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITHUB_TEST_EMPTY_OBJECT_ENTID"] = idmap,
    ["GITHUB_TEST_LIVE"] = "FALSE",
    ["GITHUB_TEST_EXPLAIN"] = "FALSE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITHUB_TEST_EMPTY_OBJECT_ENTID"])
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
