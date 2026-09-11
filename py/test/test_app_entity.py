# App entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestAppEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.App(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "app": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = GithubSDK.test(seed, None)
        seen = list(base.App(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from github_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = GithubSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.App(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _app_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "app." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_APP_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        app_ref01_ent = client.App(None)
        app_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.app"), "app_ref01"))
        app_ref01_data["delivery_id"] = setup["idmap"]["delivery01"]
        app_ref01_data["installation_id"] = setup["idmap"]["installation01"]

        app_ref01_data = helpers.to_map(runner.entity_data(app_ref01_ent.create(app_ref01_data, None)))
        assert app_ref01_data is not None
        assert app_ref01_data["id"] is not None

        # LIST
        app_ref01_match = {}

        app_ref01_list_result = app_ref01_ent.list(app_ref01_match, None)
        assert isinstance(app_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(app_ref01_list_result),
            {"id": app_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        app_ref01_data_up0_up = {
            "id": app_ref01_data["id"],
            "installation_id": setup["idmap"]["installation_id"],
        }

        app_ref01_markdef_up0_name = "access_tokens_url"
        app_ref01_markdef_up0_value = "Mark01-app_ref01_" + str(setup["now"])
        app_ref01_data_up0_up[app_ref01_markdef_up0_name] = app_ref01_markdef_up0_value

        app_ref01_resdata_up0 = helpers.to_map(runner.entity_data(app_ref01_ent.update(app_ref01_data_up0_up, None)))
        assert app_ref01_resdata_up0 is not None
        assert app_ref01_resdata_up0["id"] == app_ref01_data_up0_up["id"]
        assert app_ref01_resdata_up0[app_ref01_markdef_up0_name] == app_ref01_markdef_up0_value

        # REMOVE
        app_ref01_match_rm0 = {
            "id": app_ref01_data["id"],
        }
        app_ref01_ent.remove(app_ref01_match_rm0, None)

        # LIST
        app_ref01_match_rt0 = {}

        app_ref01_list_rt0_result = app_ref01_ent.list(app_ref01_match_rt0, None)
        assert isinstance(app_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(app_ref01_list_rt0_result),
            {"id": app_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _app_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/app/AppTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["app01", "app02", "app03", "app_manifest01", "app_manifest02", "app_manifest03", "delivery01", "delivery02", "delivery03", "application01", "application02", "application03", "installation01", "installation02", "installation03", "repository01", "repository02", "repository03"],
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
        "GITHUB_TEST_APP_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_APP_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
        "GITHUB_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_APP_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("installation_id") is None:
        idmap_resolved["installation_id"] = idmap_resolved.get("installation01")

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
