# Codespace entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestCodespaceEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.Codespace(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "codespace": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = GithubSDK.test(seed, None)
        seen = list(base.Codespace(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from github_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = GithubSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Codespace(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _codespace_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "codespace." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_CODESPACE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        codespace_ref01_ent = client.Codespace(None)
        codespace_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.codespace"), "codespace_ref01"))
        codespace_ref01_data["codespace_id"] = setup["idmap"]["codespace01"]
        codespace_ref01_data["codespace_name"] = setup["idmap"]["codespace_name01"]
        codespace_ref01_data["member_id"] = setup["idmap"]["member01"]
        codespace_ref01_data["org_id"] = setup["idmap"]["org01"]
        codespace_ref01_data["owner"] = setup["idmap"]["owner01"]
        codespace_ref01_data["repo"] = setup["idmap"]["repo01"]
        codespace_ref01_data["secret_id"] = setup["idmap"]["secret01"]
        codespace_ref01_data["secret_name"] = setup["idmap"]["secret_name01"]
        codespace_ref01_data["username"] = setup["idmap"]["username01"]

        codespace_ref01_data = helpers.to_map(runner.entity_data(codespace_ref01_ent.create(codespace_ref01_data, None)))
        assert codespace_ref01_data is not None
        assert codespace_ref01_data["id"] is not None

        # LIST
        codespace_ref01_match = {
            "secret_name": setup["idmap"]["secret_name01"],
        }

        codespace_ref01_list_result = codespace_ref01_ent.list(codespace_ref01_match, None)
        assert isinstance(codespace_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(codespace_ref01_list_result),
            {"id": codespace_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        codespace_ref01_data_up0_up = {
            "id": codespace_ref01_data["id"],
        }

        codespace_ref01_markdef_up0_name = "archive_url"
        codespace_ref01_markdef_up0_value = "Mark01-codespace_ref01_" + str(setup["now"])
        codespace_ref01_data_up0_up[codespace_ref01_markdef_up0_name] = codespace_ref01_markdef_up0_value

        codespace_ref01_resdata_up0 = helpers.to_map(runner.entity_data(codespace_ref01_ent.update(codespace_ref01_data_up0_up, None)))
        assert codespace_ref01_resdata_up0 is not None
        assert codespace_ref01_resdata_up0["id"] == codespace_ref01_data_up0_up["id"]
        assert codespace_ref01_resdata_up0[codespace_ref01_markdef_up0_name] == codespace_ref01_markdef_up0_value

        # LOAD
        codespace_ref01_match_dt0 = {
            "id": codespace_ref01_data["id"],
        }
        codespace_ref01_data_dt0_loaded = codespace_ref01_ent.load(codespace_ref01_match_dt0, None)
        codespace_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(codespace_ref01_data_dt0_loaded))
        assert codespace_ref01_data_dt0_load_result is not None
        assert codespace_ref01_data_dt0_load_result["id"] == codespace_ref01_data["id"]

        # REMOVE
        codespace_ref01_match_rm0 = {
            "id": codespace_ref01_data["id"],
        }
        codespace_ref01_ent.remove(codespace_ref01_match_rm0, None)

        # LIST
        codespace_ref01_match_rt0 = {
            "secret_name": setup["idmap"]["secret_name01"],
        }

        codespace_ref01_list_rt0_result = codespace_ref01_ent.list(codespace_ref01_match_rt0, None)
        assert isinstance(codespace_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(codespace_ref01_list_rt0_result),
            {"id": codespace_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _codespace_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/codespace/CodespaceTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["codespace01", "codespace02", "codespace03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "secret01", "secret02", "secret03", "member01", "member02", "member03", "pull01", "pull02", "pull03", "export01", "export02", "export03", "repository01", "repository02", "repository03", "codespace_name01", "owner01", "secret_name01", "username01"],
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
        "GITHUB_TEST_CODESPACE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_CODESPACE_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
        "GITHUB_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_CODESPACE_ENTID"))
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
