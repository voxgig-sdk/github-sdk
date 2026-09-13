# Team entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestTeamEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.Team(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "team": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = GithubSDK.test(seed, None)
        seen = list(base.Team(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from github_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = GithubSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Team(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _team_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "team." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_TEAM_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        team_ref01_ent = client.Team(None)
        team_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.team"), "team_ref01"))
        team_ref01_data["branch_id"] = setup["idmap"]["branch01"]
        team_ref01_data["discussion_id"] = setup["idmap"]["discussion01"]
        team_ref01_data["discussion_number"] = setup["idmap"]["discussion_number01"]
        team_ref01_data["invitation_id"] = setup["idmap"]["invitation01"]
        team_ref01_data["org"] = setup["idmap"]["org01"]
        team_ref01_data["org_id"] = setup["idmap"]["org01"]
        team_ref01_data["organization_role_id"] = setup["idmap"]["organization_role01"]
        team_ref01_data["owner"] = setup["idmap"]["owner01"]
        team_ref01_data["repo"] = setup["idmap"]["repo01"]
        team_ref01_data["team_id"] = setup["idmap"]["team01"]
        team_ref01_data["team_slug"] = setup["idmap"]["team_slug01"]

        team_ref01_data = helpers.to_map(runner.entity_data(team_ref01_ent.create(team_ref01_data, None)))
        assert team_ref01_data is not None
        assert team_ref01_data["id"] is not None

        # LIST
        team_ref01_match = {}

        team_ref01_list_result = team_ref01_ent.list(team_ref01_match, None)
        assert isinstance(team_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(team_ref01_list_result),
            {"id": team_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        team_ref01_data_up0_up = {
            "id": team_ref01_data["id"],
        }

        team_ref01_markdef_up0_name = "archive_url"
        team_ref01_markdef_up0_value = "Mark01-team_ref01_" + str(setup["now"])
        team_ref01_data_up0_up[team_ref01_markdef_up0_name] = team_ref01_markdef_up0_value

        team_ref01_resdata_up0 = helpers.to_map(runner.entity_data(team_ref01_ent.update(team_ref01_data_up0_up, None)))
        assert team_ref01_resdata_up0 is not None
        assert team_ref01_resdata_up0["id"] == team_ref01_data_up0_up["id"]
        assert team_ref01_resdata_up0[team_ref01_markdef_up0_name] == team_ref01_markdef_up0_value

        # LOAD
        team_ref01_match_dt0 = {
            "id": team_ref01_data["id"],
        }
        team_ref01_data_dt0_loaded = team_ref01_ent.load(team_ref01_match_dt0, None)
        team_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(team_ref01_data_dt0_loaded))
        assert team_ref01_data_dt0_load_result is not None
        assert team_ref01_data_dt0_load_result["id"] == team_ref01_data["id"]

        # REMOVE
        team_ref01_match_rm0 = {
            "id": team_ref01_data["id"],
        }
        team_ref01_ent.remove(team_ref01_match_rm0, None)

        # LIST
        team_ref01_match_rt0 = {}

        team_ref01_list_rt0_result = team_ref01_ent.list(team_ref01_match_rt0, None)
        assert isinstance(team_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(team_ref01_list_rt0_result),
            {"id": team_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _team_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/team/TeamTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["team01", "team02", "team03", "org01", "org02", "org03", "member01", "member02", "member03", "invitation01", "invitation02", "invitation03", "organization_role01", "organization_role02", "organization_role03", "repo01", "repo02", "repo03", "branch01", "branch02", "branch03", "discussion01", "discussion02", "discussion03", "membership01", "membership02", "membership03", "project01", "project02", "project03", "comment01", "comment02", "comment03", "discussion_number01", "owner01", "team_slug01"],
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
        "GITHUB_TEST_TEAM_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_TEAM_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_TEAM_ENTID"))
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
