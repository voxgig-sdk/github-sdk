# Action entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestActionEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.Action(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "action": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = GithubSDK.test(seed, None)
        seen = list(base.Action(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from github_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = GithubSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Action(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _action_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "action." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_ACTION_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        action_ref01_ent = client.Action(None)
        action_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.action"), "action_ref01"))
        action_ref01_data["artifact_id"] = setup["idmap"]["artifact01"]
        action_ref01_data["attempt_number"] = setup["idmap"]["attempt_number01"]
        action_ref01_data["environment_id"] = setup["idmap"]["environment01"]
        action_ref01_data["environment_name"] = setup["idmap"]["environment_name01"]
        action_ref01_data["name"] = setup["idmap"]["name01"]
        action_ref01_data["org_id"] = setup["idmap"]["org01"]
        action_ref01_data["owner"] = setup["idmap"]["owner01"]
        action_ref01_data["repo"] = setup["idmap"]["repo01"]
        action_ref01_data["run_id"] = setup["idmap"]["run01"]
        action_ref01_data["runner_group_id"] = setup["idmap"]["runner_group01"]
        action_ref01_data["runner_id"] = setup["idmap"]["runner01"]
        action_ref01_data["secret_id"] = setup["idmap"]["secret01"]
        action_ref01_data["secret_name"] = setup["idmap"]["secret_name01"]
        action_ref01_data["variable_id"] = setup["idmap"]["variable01"]
        action_ref01_data["workflow_id"] = setup["idmap"]["workflow01"]

        action_ref01_data = helpers.to_map(runner.entity_data(action_ref01_ent.create(action_ref01_data, None)))
        assert action_ref01_data is not None
        assert action_ref01_data["id"] is not None

        # LIST
        action_ref01_match = {
            "org_id": setup["idmap"]["org01"],
        }

        action_ref01_list_result = action_ref01_ent.list(action_ref01_match, None)
        assert isinstance(action_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(action_ref01_list_result),
            {"id": action_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        action_ref01_data_up0_up = {
            "id": action_ref01_data["id"],
        }

        action_ref01_markdef_up0_name = "access_level"
        action_ref01_markdef_up0_value = "Mark01-action_ref01_" + str(setup["now"])
        action_ref01_data_up0_up[action_ref01_markdef_up0_name] = action_ref01_markdef_up0_value

        action_ref01_resdata_up0 = helpers.to_map(runner.entity_data(action_ref01_ent.update(action_ref01_data_up0_up, None)))
        assert action_ref01_resdata_up0 is not None
        assert action_ref01_resdata_up0["id"] == action_ref01_data_up0_up["id"]
        assert action_ref01_resdata_up0[action_ref01_markdef_up0_name] == action_ref01_markdef_up0_value

        # LOAD
        action_ref01_match_dt0 = {
            "id": action_ref01_data["id"],
        }
        action_ref01_data_dt0_loaded = action_ref01_ent.load(action_ref01_match_dt0, None)
        action_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(action_ref01_data_dt0_loaded))
        assert action_ref01_data_dt0_load_result is not None
        assert action_ref01_data_dt0_load_result["id"] == action_ref01_data["id"]

        # REMOVE
        action_ref01_match_rm0 = {
            "id": action_ref01_data["id"],
        }
        action_ref01_ent.remove(action_ref01_match_rm0, None)

        # LIST
        action_ref01_match_rt0 = {
            "org_id": setup["idmap"]["org01"],
        }

        action_ref01_list_rt0_result = action_ref01_ent.list(action_ref01_match_rt0, None)
        assert isinstance(action_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(action_ref01_list_rt0_result),
            {"id": action_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _action_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/action/ActionTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["action01", "action02", "action03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "user01", "user02", "user03", "hosted_runner01", "hosted_runner02", "hosted_runner03", "repository01", "repository02", "repository03", "runner_group01", "runner_group02", "runner_group03", "runner01", "runner02", "runner03", "secret01", "secret02", "secret03", "variable01", "variable02", "variable03", "artifact01", "artifact02", "artifact03", "cache01", "cache02", "cache03", "job01", "job02", "job03", "run01", "run02", "run03", "workflow01", "workflow02", "workflow03", "environment01", "environment02", "environment03", "label01", "label02", "label03", "attempt01", "attempt02", "attempt03", "attempt_number01", "environment_name01", "name01", "owner01", "secret_name01"],
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
        "GITHUB_TEST_ACTION_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_ACTION_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
        "GITHUB_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_ACTION_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

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
