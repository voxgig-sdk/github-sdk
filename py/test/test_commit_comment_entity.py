# CommitComment entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestCommitCommentEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.CommitComment(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "commit_comment": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = GithubSDK.test(seed, None)
        seen = list(base.CommitComment(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from github_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = GithubSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.CommitComment(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _commit_comment_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "commit_comment." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_COMMIT_COMMENT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        commit_comment_ref01_ent = client.CommitComment(None)
        commit_comment_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.commit_comment"), "commit_comment_ref01"))
        commit_comment_ref01_data["commit_sha"] = setup["idmap"]["commit_sha01"]
        commit_comment_ref01_data["owner"] = setup["idmap"]["owner01"]
        commit_comment_ref01_data["repo"] = setup["idmap"]["repo01"]

        commit_comment_ref01_data = helpers.to_map(runner.entity_data(commit_comment_ref01_ent.create(commit_comment_ref01_data, None)))
        assert commit_comment_ref01_data is not None
        assert commit_comment_ref01_data["id"] is not None

        # LIST
        commit_comment_ref01_match = {
            "owner": setup["idmap"]["owner01"],
            "repo": setup["idmap"]["repo01"],
        }

        commit_comment_ref01_list_result = commit_comment_ref01_ent.list(commit_comment_ref01_match, None)
        assert isinstance(commit_comment_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(commit_comment_ref01_list_result),
            {"id": commit_comment_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        commit_comment_ref01_data_up0_up = {
            "id": commit_comment_ref01_data["id"],
            "owner": setup["idmap"]["owner"],
            "repo": setup["idmap"]["repo"],
        }

        commit_comment_ref01_markdef_up0_name = "author_association"
        commit_comment_ref01_markdef_up0_value = "Mark01-commit_comment_ref01_" + str(setup["now"])
        commit_comment_ref01_data_up0_up[commit_comment_ref01_markdef_up0_name] = commit_comment_ref01_markdef_up0_value

        commit_comment_ref01_resdata_up0 = helpers.to_map(runner.entity_data(commit_comment_ref01_ent.update(commit_comment_ref01_data_up0_up, None)))
        assert commit_comment_ref01_resdata_up0 is not None
        assert commit_comment_ref01_resdata_up0["id"] == commit_comment_ref01_data_up0_up["id"]
        assert commit_comment_ref01_resdata_up0[commit_comment_ref01_markdef_up0_name] == commit_comment_ref01_markdef_up0_value

        # LOAD
        commit_comment_ref01_match_dt0 = {
            "id": commit_comment_ref01_data["id"],
        }
        commit_comment_ref01_data_dt0_loaded = commit_comment_ref01_ent.load(commit_comment_ref01_match_dt0, None)
        commit_comment_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(commit_comment_ref01_data_dt0_loaded))
        assert commit_comment_ref01_data_dt0_load_result is not None
        assert commit_comment_ref01_data_dt0_load_result["id"] == commit_comment_ref01_data["id"]



def _commit_comment_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/commit_comment/CommitCommentTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["commit_comment01", "commit_comment02", "commit_comment03", "repo01", "repo02", "repo03", "commit01", "commit02", "commit03", "commit_sha01", "owner01"],
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
        "GITHUB_TEST_COMMIT_COMMENT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_COMMIT_COMMENT_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
        "GITHUB_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_COMMIT_COMMENT_ENTID"))
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
