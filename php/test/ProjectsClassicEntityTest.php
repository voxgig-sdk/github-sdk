<?php
declare(strict_types=1);

// ProjectsClassic entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ProjectsClassicEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->ProjectsClassic(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = projects_classic_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "projects_classic." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_PROJECTS_CLASSIC_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $projects_classic_ref01_ent = $client->ProjectsClassic(null);
        $projects_classic_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.projects_classic"), "projects_classic_ref01"));
        $projects_classic_ref01_data["column_id"] = $setup["idmap"]["column01"];
        $projects_classic_ref01_data["project_id"] = $setup["idmap"]["project01"];

        $projects_classic_ref01_data_result = $projects_classic_ref01_ent->create($projects_classic_ref01_data, null);
        $projects_classic_ref01_data = Helpers::to_map(is_object($projects_classic_ref01_data_result) && method_exists($projects_classic_ref01_data_result, 'data_get') ? $projects_classic_ref01_data_result->data_get() : $projects_classic_ref01_data_result);
        $this->assertNotNull($projects_classic_ref01_data);

        // UPDATE
        $projects_classic_ref01_data_up0_up = [
            "project_id" => $setup["idmap"]["project_id"],
        ];

        $projects_classic_ref01_markdef_up0_name = "permission";
        $projects_classic_ref01_markdef_up0_value = "Mark01-projects_classic_ref01_" . $setup["now"];
        $projects_classic_ref01_data_up0_up[$projects_classic_ref01_markdef_up0_name] = $projects_classic_ref01_markdef_up0_value;

        $projects_classic_ref01_resdata_up0_result = $projects_classic_ref01_ent->update($projects_classic_ref01_data_up0_up, null);
        $projects_classic_ref01_resdata_up0 = Helpers::to_map(is_object($projects_classic_ref01_resdata_up0_result) && method_exists($projects_classic_ref01_resdata_up0_result, 'data_get') ? $projects_classic_ref01_resdata_up0_result->data_get() : $projects_classic_ref01_resdata_up0_result);
        $this->assertNotNull($projects_classic_ref01_resdata_up0);
        $this->assertEquals($projects_classic_ref01_resdata_up0[$projects_classic_ref01_markdef_up0_name], $projects_classic_ref01_markdef_up0_value);


    }
}

function projects_classic_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/projects_classic/ProjectsClassicTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["projects_classic01", "projects_classic02", "projects_classic03", "column01", "column02", "column03", "project01", "project02", "project03", "collaborator01", "collaborator02", "collaborator03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_PROJECTS_CLASSIC_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_PROJECTS_CLASSIC_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
        "GITHUB_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_PROJECTS_CLASSIC_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["project_id"])) {
        $idmap_resolved["project_id"] = $idmap_resolved["project01"];
    }

    if ($env["GITHUB_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["GITHUB_APIKEY"],
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
