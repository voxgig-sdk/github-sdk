# ActionsHostedRunner entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestActionsHostedRunnerEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.ActionsHostedRunner(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _actions_hosted_runner_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "actions_hosted_runner." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_ACTIONS_HOSTED_RUNNER_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        actions_hosted_runner_ref01_ent = client.ActionsHostedRunner(None)
        actions_hosted_runner_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.actions_hosted_runner"), "actions_hosted_runner_ref01"))
        actions_hosted_runner_ref01_data["org_id"] = setup["idmap"]["org01"]

        actions_hosted_runner_ref01_data = helpers.to_map(runner.entity_data(actions_hosted_runner_ref01_ent.create(actions_hosted_runner_ref01_data, None)))
        assert actions_hosted_runner_ref01_data is not None
        assert actions_hosted_runner_ref01_data["id"] is not None

        # UPDATE
        actions_hosted_runner_ref01_data_up0_up = {
            "id": actions_hosted_runner_ref01_data["id"],
            "org_id": setup["idmap"]["org_id"],
        }

        actions_hosted_runner_ref01_markdef_up0_name = "last_active_on"
        actions_hosted_runner_ref01_markdef_up0_value = "Mark01-actions_hosted_runner_ref01_" + str(setup["now"])
        actions_hosted_runner_ref01_data_up0_up[actions_hosted_runner_ref01_markdef_up0_name] = actions_hosted_runner_ref01_markdef_up0_value

        actions_hosted_runner_ref01_resdata_up0 = helpers.to_map(runner.entity_data(actions_hosted_runner_ref01_ent.update(actions_hosted_runner_ref01_data_up0_up, None)))
        assert actions_hosted_runner_ref01_resdata_up0 is not None
        assert actions_hosted_runner_ref01_resdata_up0["id"] == actions_hosted_runner_ref01_data_up0_up["id"]
        assert actions_hosted_runner_ref01_resdata_up0[actions_hosted_runner_ref01_markdef_up0_name] == actions_hosted_runner_ref01_markdef_up0_value

        # LOAD
        actions_hosted_runner_ref01_match_dt0 = {
            "id": actions_hosted_runner_ref01_data["id"],
        }
        actions_hosted_runner_ref01_data_dt0_loaded = actions_hosted_runner_ref01_ent.load(actions_hosted_runner_ref01_match_dt0, None)
        actions_hosted_runner_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(actions_hosted_runner_ref01_data_dt0_loaded))
        assert actions_hosted_runner_ref01_data_dt0_load_result is not None
        assert actions_hosted_runner_ref01_data_dt0_load_result["id"] == actions_hosted_runner_ref01_data["id"]



def _actions_hosted_runner_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/actions_hosted_runner/ActionsHostedRunnerTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["actions_hosted_runner01", "actions_hosted_runner02", "actions_hosted_runner03", "org01", "org02", "org03"],
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
        "GITHUB_TEST_ACTIONS_HOSTED_RUNNER_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_ACTIONS_HOSTED_RUNNER_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_ACTIONS_HOSTED_RUNNER_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("org_id") is None:
        idmap_resolved["org_id"] = idmap_resolved.get("org01")

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
