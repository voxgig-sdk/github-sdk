<?php
declare(strict_types=1);

// GitRef entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class GitRefEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->GitRef(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = git_ref_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "git_ref." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_GIT_REF_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $git_ref_ref01_ent = $client->GitRef(null);
        $git_ref_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.git_ref"), "git_ref_ref01"));
        $git_ref_ref01_data["owner"] = $setup["idmap"]["owner01"];
        $git_ref_ref01_data["repo"] = $setup["idmap"]["repo01"];

        $git_ref_ref01_data_result = $git_ref_ref01_ent->create($git_ref_ref01_data, null);
        $git_ref_ref01_data = Helpers::to_map(is_object($git_ref_ref01_data_result) && method_exists($git_ref_ref01_data_result, 'data_get') ? $git_ref_ref01_data_result->data_get() : $git_ref_ref01_data_result);
        $this->assertNotNull($git_ref_ref01_data);
        $this->assertNotNull($git_ref_ref01_data["id"]);

        // UPDATE
        $git_ref_ref01_data_up0_up = [
            "id" => $git_ref_ref01_data["id"],
            "owner" => $setup["idmap"]["owner"],
            "repo" => $setup["idmap"]["repo"],
        ];

        $git_ref_ref01_markdef_up0_name = "node_id";
        $git_ref_ref01_markdef_up0_value = "Mark01-git_ref_ref01_" . $setup["now"];
        $git_ref_ref01_data_up0_up[$git_ref_ref01_markdef_up0_name] = $git_ref_ref01_markdef_up0_value;

        $git_ref_ref01_resdata_up0_result = $git_ref_ref01_ent->update($git_ref_ref01_data_up0_up, null);
        $git_ref_ref01_resdata_up0 = Helpers::to_map(is_object($git_ref_ref01_resdata_up0_result) && method_exists($git_ref_ref01_resdata_up0_result, 'data_get') ? $git_ref_ref01_resdata_up0_result->data_get() : $git_ref_ref01_resdata_up0_result);
        $this->assertNotNull($git_ref_ref01_resdata_up0);
        $this->assertEquals($git_ref_ref01_resdata_up0["id"], $git_ref_ref01_data_up0_up["id"]);
        $this->assertEquals($git_ref_ref01_resdata_up0[$git_ref_ref01_markdef_up0_name], $git_ref_ref01_markdef_up0_value);

        // LOAD
        $git_ref_ref01_match_dt0 = [
            "id" => $git_ref_ref01_data["id"],
        ];
        $git_ref_ref01_data_dt0_loaded = $git_ref_ref01_ent->load($git_ref_ref01_match_dt0, null);
        $git_ref_ref01_data_dt0_load_result = Helpers::to_map(is_object($git_ref_ref01_data_dt0_loaded) && method_exists($git_ref_ref01_data_dt0_loaded, 'data_get') ? $git_ref_ref01_data_dt0_loaded->data_get() : $git_ref_ref01_data_dt0_loaded);
        $this->assertNotNull($git_ref_ref01_data_dt0_load_result);
        $this->assertEquals($git_ref_ref01_data_dt0_load_result["id"], $git_ref_ref01_data["id"]);

    }
}

function git_ref_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/git_ref/GitRefTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["git_ref01", "git_ref02", "git_ref03", "repo01", "repo02", "repo03", "matching_ref01", "matching_ref02", "matching_ref03", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_GIT_REF_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_GIT_REF_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_GIT_REF_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["owner"])) {
        $idmap_resolved["owner"] = $idmap_resolved["owner01"];
    }
    if (!isset($idmap_resolved["repo"])) {
        $idmap_resolved["repo"] = $idmap_resolved["repo01"];
    }

    if ($env["GITHUB_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new GithubSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["GITHUB_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["GITHUB_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
