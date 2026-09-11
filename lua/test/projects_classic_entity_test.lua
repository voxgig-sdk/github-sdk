-- ProjectsClassic entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("github_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ProjectsClassicEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ProjectsClassic(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = projects_classic_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "projects_classic." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_PROJECTS_CLASSIC_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local projects_classic_ref01_ent = client:ProjectsClassic(nil)
    local projects_classic_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.projects_classic"), "projects_classic_ref01"))
    projects_classic_ref01_data["column_id"] = setup.idmap["column01"]
    projects_classic_ref01_data["project_id"] = setup.idmap["project01"]

    local projects_classic_ref01_data_result, err = projects_classic_ref01_ent:create(projects_classic_ref01_data, nil)
    assert.is_nil(err)
    projects_classic_ref01_data = helpers.to_map(type(projects_classic_ref01_data_result) == 'table' and projects_classic_ref01_data_result.data_get and projects_classic_ref01_data_result:data_get() or projects_classic_ref01_data_result)
    assert.is_not_nil(projects_classic_ref01_data)

    -- UPDATE
    local projects_classic_ref01_data_up0_up = {
      ["project_id"] = setup.idmap["project_id"],
    }

    local projects_classic_ref01_markdef_up0_name = "permission"
    local projects_classic_ref01_markdef_up0_value = "Mark01-projects_classic_ref01_" .. tostring(setup.now)
    projects_classic_ref01_data_up0_up[projects_classic_ref01_markdef_up0_name] = projects_classic_ref01_markdef_up0_value

    local projects_classic_ref01_resdata_up0_result, err = projects_classic_ref01_ent:update(projects_classic_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local projects_classic_ref01_resdata_up0 = helpers.to_map(type(projects_classic_ref01_resdata_up0_result) == 'table' and projects_classic_ref01_resdata_up0_result.data_get and projects_classic_ref01_resdata_up0_result:data_get() or projects_classic_ref01_resdata_up0_result)
    assert.is_not_nil(projects_classic_ref01_resdata_up0)
    assert.are.equal(projects_classic_ref01_resdata_up0[projects_classic_ref01_markdef_up0_name], projects_classic_ref01_markdef_up0_value)


  end)
end)

function projects_classic_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/projects_classic/ProjectsClassicTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read projects_classic test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "projects_classic01", "projects_classic02", "projects_classic03", "column01", "column02", "column03", "project01", "project02", "project03", "collaborator01", "collaborator02", "collaborator03" },
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
  local entid_env_raw = os.getenv("GITHUB_TEST_PROJECTS_CLASSIC_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["GITHUB_TEST_PROJECTS_CLASSIC_ENTID"] = idmap,
    ["GITHUB_TEST_LIVE"] = "FALSE",
    ["GITHUB_TEST_EXPLAIN"] = "FALSE",
    ["GITHUB_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["GITHUB_TEST_PROJECTS_CLASSIC_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["project_id"] == nil then
    idmap_resolved["project_id"] = idmap_resolved["project01"]
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
