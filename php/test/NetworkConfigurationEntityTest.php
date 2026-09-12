<?php
declare(strict_types=1);

// NetworkConfiguration entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class NetworkConfigurationEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->NetworkConfiguration(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = network_configuration_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "network_configuration." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_NETWORK_CONFIGURATION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $network_configuration_ref01_ent = $client->NetworkConfiguration(null);
        $network_configuration_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.network_configuration"), "network_configuration_ref01"));
        $network_configuration_ref01_data["org_id"] = $setup["idmap"]["org01"];

        $network_configuration_ref01_data_result = $network_configuration_ref01_ent->create($network_configuration_ref01_data, null);
        $network_configuration_ref01_data = Helpers::to_map(is_object($network_configuration_ref01_data_result) && method_exists($network_configuration_ref01_data_result, 'data_get') ? $network_configuration_ref01_data_result->data_get() : $network_configuration_ref01_data_result);
        $this->assertNotNull($network_configuration_ref01_data);
        $this->assertNotNull($network_configuration_ref01_data["id"]);

        // UPDATE
        $network_configuration_ref01_data_up0_up = [
            "id" => $network_configuration_ref01_data["id"],
            "org_id" => $setup["idmap"]["org_id"],
        ];

        $network_configuration_ref01_markdef_up0_name = "compute_service";
        $network_configuration_ref01_markdef_up0_value = "Mark01-network_configuration_ref01_" . $setup["now"];
        $network_configuration_ref01_data_up0_up[$network_configuration_ref01_markdef_up0_name] = $network_configuration_ref01_markdef_up0_value;

        $network_configuration_ref01_resdata_up0_result = $network_configuration_ref01_ent->update($network_configuration_ref01_data_up0_up, null);
        $network_configuration_ref01_resdata_up0 = Helpers::to_map(is_object($network_configuration_ref01_resdata_up0_result) && method_exists($network_configuration_ref01_resdata_up0_result, 'data_get') ? $network_configuration_ref01_resdata_up0_result->data_get() : $network_configuration_ref01_resdata_up0_result);
        $this->assertNotNull($network_configuration_ref01_resdata_up0);
        $this->assertEquals($network_configuration_ref01_resdata_up0["id"], $network_configuration_ref01_data_up0_up["id"]);
        $this->assertEquals($network_configuration_ref01_resdata_up0[$network_configuration_ref01_markdef_up0_name], $network_configuration_ref01_markdef_up0_value);

        // LOAD
        $network_configuration_ref01_match_dt0 = [
            "id" => $network_configuration_ref01_data["id"],
        ];
        $network_configuration_ref01_data_dt0_loaded = $network_configuration_ref01_ent->load($network_configuration_ref01_match_dt0, null);
        $network_configuration_ref01_data_dt0_load_result = Helpers::to_map(is_object($network_configuration_ref01_data_dt0_loaded) && method_exists($network_configuration_ref01_data_dt0_loaded, 'data_get') ? $network_configuration_ref01_data_dt0_loaded->data_get() : $network_configuration_ref01_data_dt0_loaded);
        $this->assertNotNull($network_configuration_ref01_data_dt0_load_result);
        $this->assertEquals($network_configuration_ref01_data_dt0_load_result["id"], $network_configuration_ref01_data["id"]);

    }
}

function network_configuration_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/network_configuration/NetworkConfigurationTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["network_configuration01", "network_configuration02", "network_configuration03", "org01", "org02", "org03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_NETWORK_CONFIGURATION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_NETWORK_CONFIGURATION_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
        "GITHUB_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_NETWORK_CONFIGURATION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["org_id"])) {
        $idmap_resolved["org_id"] = $idmap_resolved["org01"];
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
