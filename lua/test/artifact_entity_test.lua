-- Artifact entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("github_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ArtifactEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Artifact(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = artifact_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "artifact." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_ARTIFACT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local artifact_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.artifact")))
    local artifact_ref01_data = nil
    if #artifact_ref01_data_raw > 0 then
      artifact_ref01_data = helpers.to_map(artifact_ref01_data_raw[1][2])
    end

    -- LOAD
    local artifact_ref01_ent = client:Artifact(nil)
    local artifact_ref01_match_dt0 = {
      id = artifact_ref01_data["id"],
    }
    local artifact_ref01_data_dt0_loaded, err = artifact_ref01_ent:load(artifact_ref01_match_dt0, nil)
    assert.is_nil(err)
    local artifact_ref01_data_dt0_load_result = helpers.to_map(type(artifact_ref01_data_dt0_loaded) == 'table' and artifact_ref01_data_dt0_loaded.data_get and artifact_ref01_data_dt0_loaded:data_get() or artifact_ref01_data_dt0_loaded)
    assert.is_not_nil(artifact_ref01_data_dt0_load_result)
    assert.are.equal(artifact_ref01_data_dt0_load_result["id"], artifact_ref01_data["id"])

  end)
end)

function artifact_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/artifact/ArtifactTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read artifact test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "artifact01", "artifact02", "artifact03", "repo01", "repo02", "repo03", "owner01" },
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
  local entid_env_raw = os.getenv("GITHUB_TEST_ARTIFACT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITHUB_TEST_ARTIFACT_ENTID"] = idmap,
    ["GITHUB_TEST_LIVE"] = "FALSE",
    ["GITHUB_TEST_EXPLAIN"] = "FALSE",
  })

  local idmap_resolved = helpers.to_map(
    env["GITHUB_TEST_ARTIFACT_ENTID"])
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
