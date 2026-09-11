<?php
declare(strict_types=1);

// DeploymentBranchPolicy entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class DeploymentBranchPolicyEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->DeploymentBranchPolicy(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = deployment_branch_policy_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "deployment_branch_policy." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_DEPLOYMENT_BRANCH_POLICY_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $deployment_branch_policy_ref01_ent = $client->DeploymentBranchPolicy(null);
        $deployment_branch_policy_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.deployment_branch_policy"), "deployment_branch_policy_ref01"));
        $deployment_branch_policy_ref01_data["environment_id"] = $setup["idmap"]["environment01"];
        $deployment_branch_policy_ref01_data["environment_name"] = $setup["idmap"]["environment_name01"];
        $deployment_branch_policy_ref01_data["owner"] = $setup["idmap"]["owner01"];
        $deployment_branch_policy_ref01_data["repo"] = $setup["idmap"]["repo01"];

        $deployment_branch_policy_ref01_data_result = $deployment_branch_policy_ref01_ent->create($deployment_branch_policy_ref01_data, null);
        $deployment_branch_policy_ref01_data = Helpers::to_map(is_object($deployment_branch_policy_ref01_data_result) && method_exists($deployment_branch_policy_ref01_data_result, 'data_get') ? $deployment_branch_policy_ref01_data_result->data_get() : $deployment_branch_policy_ref01_data_result);
        $this->assertNotNull($deployment_branch_policy_ref01_data);
        $this->assertNotNull($deployment_branch_policy_ref01_data["id"]);

        // UPDATE
        $deployment_branch_policy_ref01_data_up0_up = [
            "id" => $deployment_branch_policy_ref01_data["id"],
            "environment_id" => $setup["idmap"]["environment_id"],
            "owner" => $setup["idmap"]["owner"],
            "repo" => $setup["idmap"]["repo"],
        ];

        $deployment_branch_policy_ref01_markdef_up0_name = "name";
        $deployment_branch_policy_ref01_markdef_up0_value = "Mark01-deployment_branch_policy_ref01_" . $setup["now"];
        $deployment_branch_policy_ref01_data_up0_up[$deployment_branch_policy_ref01_markdef_up0_name] = $deployment_branch_policy_ref01_markdef_up0_value;

        $deployment_branch_policy_ref01_resdata_up0_result = $deployment_branch_policy_ref01_ent->update($deployment_branch_policy_ref01_data_up0_up, null);
        $deployment_branch_policy_ref01_resdata_up0 = Helpers::to_map(is_object($deployment_branch_policy_ref01_resdata_up0_result) && method_exists($deployment_branch_policy_ref01_resdata_up0_result, 'data_get') ? $deployment_branch_policy_ref01_resdata_up0_result->data_get() : $deployment_branch_policy_ref01_resdata_up0_result);
        $this->assertNotNull($deployment_branch_policy_ref01_resdata_up0);
        $this->assertEquals($deployment_branch_policy_ref01_resdata_up0["id"], $deployment_branch_policy_ref01_data_up0_up["id"]);
        $this->assertEquals($deployment_branch_policy_ref01_resdata_up0[$deployment_branch_policy_ref01_markdef_up0_name], $deployment_branch_policy_ref01_markdef_up0_value);

        // LOAD
        $deployment_branch_policy_ref01_match_dt0 = [
            "id" => $deployment_branch_policy_ref01_data["id"],
        ];
        $deployment_branch_policy_ref01_data_dt0_loaded = $deployment_branch_policy_ref01_ent->load($deployment_branch_policy_ref01_match_dt0, null);
        $deployment_branch_policy_ref01_data_dt0_load_result = Helpers::to_map(is_object($deployment_branch_policy_ref01_data_dt0_loaded) && method_exists($deployment_branch_policy_ref01_data_dt0_loaded, 'data_get') ? $deployment_branch_policy_ref01_data_dt0_loaded->data_get() : $deployment_branch_policy_ref01_data_dt0_loaded);
        $this->assertNotNull($deployment_branch_policy_ref01_data_dt0_load_result);
        $this->assertEquals($deployment_branch_policy_ref01_data_dt0_load_result["id"], $deployment_branch_policy_ref01_data["id"]);

    }
}

function deployment_branch_policy_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/deployment_branch_policy/DeploymentBranchPolicyTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["deployment_branch_policy01", "deployment_branch_policy02", "deployment_branch_policy03", "repo01", "repo02", "repo03", "environment01", "environment02", "environment03", "environment_name01", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_DEPLOYMENT_BRANCH_POLICY_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_DEPLOYMENT_BRANCH_POLICY_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
        "GITHUB_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_DEPLOYMENT_BRANCH_POLICY_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["environment_id"])) {
        $idmap_resolved["environment_id"] = $idmap_resolved["environment01"];
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
                "apikey" => $env["GITHUB_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        $client = new GithubSDK(Helpers::to_map($merged_opts));
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
