# Reaction entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestReactionEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.Reaction(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "reaction": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = GithubSDK.test(seed, None)
        seen = list(base.Reaction(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from github_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = GithubSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Reaction(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _reaction_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "reaction." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_REACTION_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        reaction_ref01_ent = client.Reaction(None)
        reaction_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.reaction"), "reaction_ref01"))
        reaction_ref01_data["comment_id"] = setup["idmap"]["comment01"]
        reaction_ref01_data["comment_number"] = setup["idmap"]["comment_number01"]
        reaction_ref01_data["discussion_id"] = setup["idmap"]["discussion01"]
        reaction_ref01_data["discussion_number"] = setup["idmap"]["discussion_number01"]
        reaction_ref01_data["issue_id"] = setup["idmap"]["issue01"]
        reaction_ref01_data["issue_number"] = setup["idmap"]["issue_number01"]
        reaction_ref01_data["org_id"] = setup["idmap"]["org01"]
        reaction_ref01_data["owner"] = setup["idmap"]["owner01"]
        reaction_ref01_data["release_id"] = setup["idmap"]["release01"]
        reaction_ref01_data["repo"] = setup["idmap"]["repo01"]
        reaction_ref01_data["team_id"] = setup["idmap"]["team01"]

        reaction_ref01_data = helpers.to_map(runner.entity_data(reaction_ref01_ent.create(reaction_ref01_data, None)))
        assert reaction_ref01_data is not None
        assert reaction_ref01_data["id"] is not None

        # LIST
        reaction_ref01_match = {
            "discussion_number": setup["idmap"]["discussion_number01"],
            "team_id": setup["idmap"]["team01"],
        }

        reaction_ref01_list_result = reaction_ref01_ent.list(reaction_ref01_match, None)
        assert isinstance(reaction_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(reaction_ref01_list_result),
            {"id": reaction_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # REMOVE
        reaction_ref01_match_rm0 = {
            "id": reaction_ref01_data["id"],
        }
        reaction_ref01_ent.remove(reaction_ref01_match_rm0, None)

        # LIST
        reaction_ref01_match_rt0 = {
            "discussion_number": setup["idmap"]["discussion_number01"],
            "team_id": setup["idmap"]["team01"],
        }

        reaction_ref01_list_rt0_result = reaction_ref01_ent.list(reaction_ref01_match_rt0, None)
        assert isinstance(reaction_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(reaction_ref01_list_rt0_result),
            {"id": reaction_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _reaction_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/reaction/ReactionTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["reaction01", "reaction02", "reaction03", "repo01", "repo02", "repo03", "issue01", "issue02", "issue03", "comment01", "comment02", "comment03", "release01", "release02", "release03", "org01", "org02", "org03", "team01", "team02", "team03", "discussion01", "discussion02", "discussion03", "comment_number01", "discussion_number01", "issue_number01", "owner01"],
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
        "GITHUB_TEST_REACTION_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_REACTION_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
        "GITHUB_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_REACTION_ENTID"))
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
