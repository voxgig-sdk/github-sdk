# Environment entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestEnvironmentEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.Environment(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _environment_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "environment." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_ENVIRONMENT_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        environment_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.environment")))
        environment_ref01_data = None
        if len(environment_ref01_data_raw) > 0:
            environment_ref01_data = helpers.to_map(environment_ref01_data_raw[0][1])

        # UPDATE
        environment_ref01_ent = client.Environment(None)
        environment_ref01_data_up0_up = {
            "id": environment_ref01_data["id"],
            "owner": setup["idmap"]["owner"],
            "repo": setup["idmap"]["repo"],
        }

        environment_ref01_markdef_up0_name = "created_at"
        environment_ref01_markdef_up0_value = "Mark01-environment_ref01_" + str(setup["now"])
        environment_ref01_data_up0_up[environment_ref01_markdef_up0_name] = environment_ref01_markdef_up0_value

        environment_ref01_resdata_up0 = helpers.to_map(runner.entity_data(environment_ref01_ent.update(environment_ref01_data_up0_up, None)))
        assert environment_ref01_resdata_up0 is not None
        assert environment_ref01_resdata_up0["id"] == environment_ref01_data_up0_up["id"]
        assert environment_ref01_resdata_up0[environment_ref01_markdef_up0_name] == environment_ref01_markdef_up0_value

        # LOAD
        environment_ref01_match_dt0 = {
            "id": environment_ref01_data["id"],
        }
        environment_ref01_data_dt0_loaded = environment_ref01_ent.load(environment_ref01_match_dt0, None)
        environment_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(environment_ref01_data_dt0_loaded))
        assert environment_ref01_data_dt0_load_result is not None
        assert environment_ref01_data_dt0_load_result["id"] == environment_ref01_data["id"]



def _environment_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/environment/EnvironmentTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["environment01", "environment02", "environment03", "repo01", "repo02", "repo03", "owner01"],
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
        "GITHUB_TEST_ENVIRONMENT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_ENVIRONMENT_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
        "GITHUB_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_ENVIRONMENT_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("owner") is None:
        idmap_resolved["owner"] = idmap_resolved.get("owner01")
    if idmap_resolved.get("repo") is None:
        idmap_resolved["repo"] = idmap_resolved.get("repo01")

    if env.get("GITHUB_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("GITHUB_APIKEY"),
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
