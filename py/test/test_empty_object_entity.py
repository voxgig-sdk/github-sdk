# EmptyObject entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestEmptyObjectEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.EmptyObject(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _empty_object_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "empty_object." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_EMPTY_OBJECT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        empty_object_ref01_ent = client.EmptyObject(None)
        empty_object_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.empty_object"), "empty_object_ref01"))
        empty_object_ref01_data["environment_id"] = setup["idmap"]["environment01"]
        empty_object_ref01_data["org_id"] = setup["idmap"]["org01"]
        empty_object_ref01_data["owner"] = setup["idmap"]["owner01"]
        empty_object_ref01_data["repo"] = setup["idmap"]["repo01"]
        empty_object_ref01_data["username"] = setup["idmap"]["username01"]

        empty_object_ref01_data = helpers.to_map(runner.entity_data(empty_object_ref01_ent.create(empty_object_ref01_data, None)))
        assert empty_object_ref01_data is not None

        # UPDATE
        empty_object_ref01_data_up0_up = {
        }

        empty_object_ref01_markdef_up0_name = "encrypted_value"
        empty_object_ref01_markdef_up0_value = "Mark01-empty_object_ref01_" + str(setup["now"])
        empty_object_ref01_data_up0_up[empty_object_ref01_markdef_up0_name] = empty_object_ref01_markdef_up0_value

        empty_object_ref01_resdata_up0 = helpers.to_map(runner.entity_data(empty_object_ref01_ent.update(empty_object_ref01_data_up0_up, None)))
        assert empty_object_ref01_resdata_up0 is not None
        assert empty_object_ref01_resdata_up0[empty_object_ref01_markdef_up0_name] == empty_object_ref01_markdef_up0_value

        # LOAD
        empty_object_ref01_match_dt0 = {}
        empty_object_ref01_data_dt0_loaded = empty_object_ref01_ent.load(empty_object_ref01_match_dt0, None)
        assert empty_object_ref01_data_dt0_loaded is not None



def _empty_object_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/empty_object/EmptyObjectTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["empty_object01", "empty_object02", "empty_object03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "secret01", "secret02", "secret03", "job01", "job02", "job03", "run01", "run02", "run03", "check_run01", "check_run02", "check_run03", "check_suite01", "check_suite02", "check_suite03", "environment01", "environment02", "environment03", "user01", "user02", "user03", "attestation01", "attestation02", "attestation03", "owner01", "username01"],
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
        "GITHUB_TEST_EMPTY_OBJECT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_EMPTY_OBJECT_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
        "GITHUB_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_EMPTY_OBJECT_ENTID"))
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
