# GitCommit entity test

import json
import os
import time

import pytest

from github_sdk.utility.voxgig_struct import voxgig_struct as vs
from github_sdk import GithubSDK
from github_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestGitCommitEntity:

    def test_should_create_instance(self):
        testsdk = GithubSDK.test(None, None)
        ent = testsdk.GitCommit(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _git_commit_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "git_commit." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITHUB_TEST_GIT_COMMIT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        git_commit_ref01_ent = client.GitCommit(None)
        git_commit_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.git_commit"), "git_commit_ref01"))
        git_commit_ref01_data["owner"] = setup["idmap"]["owner01"]
        git_commit_ref01_data["repo"] = setup["idmap"]["repo01"]

        git_commit_ref01_data = helpers.to_map(runner.entity_data(git_commit_ref01_ent.create(git_commit_ref01_data, None)))
        assert git_commit_ref01_data is not None
        assert git_commit_ref01_data["id"] is not None

        # LOAD
        git_commit_ref01_match_dt0 = {
            "id": git_commit_ref01_data["id"],
        }
        git_commit_ref01_data_dt0_loaded = git_commit_ref01_ent.load(git_commit_ref01_match_dt0, None)
        git_commit_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(git_commit_ref01_data_dt0_loaded))
        assert git_commit_ref01_data_dt0_load_result is not None
        assert git_commit_ref01_data_dt0_load_result["id"] == git_commit_ref01_data["id"]



def _git_commit_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/git_commit/GitCommitTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GithubSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["git_commit01", "git_commit02", "git_commit03", "repo01", "repo02", "repo03", "owner01"],
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
        "GITHUB_TEST_GIT_COMMIT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITHUB_TEST_GIT_COMMIT_ENTID": idmap,
        "GITHUB_TEST_LIVE": "FALSE",
        "GITHUB_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITHUB_TEST_GIT_COMMIT_ENTID"))
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
