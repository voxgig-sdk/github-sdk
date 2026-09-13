# ProjectsV2ItemSimple entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestProjectsV2ItemSimpleEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.ProjectsV2ItemSimple(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _projects_v2_item_simple_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "projects_v2_item_simple." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_PROJECTS_V2_ITEM_SIMPLE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        projects_v2_item_simple_ref01_ent = client.ProjectsV2ItemSimple(None)
        projects_v2_item_simple_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.projects_v2_item_simple"), "projects_v2_item_simple_ref01"))
        projects_v2_item_simple_ref01_data["project_number"] = setup["idmap"]["project_number01"]
        projects_v2_item_simple_ref01_data["username"] = setup["idmap"]["username01"]

        projects_v2_item_simple_ref01_data = helpers.to_map(runner.entity_data(projects_v2_item_simple_ref01_ent.create(projects_v2_item_simple_ref01_data, None)))
        assert projects_v2_item_simple_ref01_data is not None
        assert projects_v2_item_simple_ref01_data["id"] is not None



def _projects_v2_item_simple_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/projects_v2_item_simple/ProjectsV2ItemSimpleTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["projects_v2_item_simple01", "projects_v2_item_simple02", "projects_v2_item_simple03", "org01", "org02", "org03", "projects_v201", "projects_v202", "projects_v203", "user01", "user02", "user03", "project_number01", "username01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "GITHUB_TEST_PROJECTS_V2_ITEM_SIMPLE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_PROJECTS_V2_ITEM_SIMPLE_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_PROJECTS_V2_ITEM_SIMPLE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("GITHUB_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
            },
            extra or {},
        ])
        client = GithubSDK(helpers.to_map(merged_opts))

    _live = env.get("GITHUB_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("GITHUB_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
