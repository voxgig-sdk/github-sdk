<?php
declare(strict_types=1);

// CodeScanningVariantAnalysi entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CodeScanningVariantAnalysiEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->CodeScanningVariantAnalysi(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = code_scanning_variant_analysi_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "code_scanning_variant_analysi." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODE_SCANNING_VARIANT_ANALYSI_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $code_scanning_variant_analysi_ref01_ent = $client->CodeScanningVariantAnalysi(null);
        $code_scanning_variant_analysi_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.code_scanning_variant_analysi"), "code_scanning_variant_analysi_ref01"));
        $code_scanning_variant_analysi_ref01_data["owner"] = $setup["idmap"]["owner01"];
        $code_scanning_variant_analysi_ref01_data["repo"] = $setup["idmap"]["repo01"];

        $code_scanning_variant_analysi_ref01_data_result = $code_scanning_variant_analysi_ref01_ent->create($code_scanning_variant_analysi_ref01_data, null);
        $code_scanning_variant_analysi_ref01_data = Helpers::to_map(is_object($code_scanning_variant_analysi_ref01_data_result) && method_exists($code_scanning_variant_analysi_ref01_data_result, 'data_get') ? $code_scanning_variant_analysi_ref01_data_result->data_get() : $code_scanning_variant_analysi_ref01_data_result);
        $this->assertNotNull($code_scanning_variant_analysi_ref01_data);
        $this->assertNotNull($code_scanning_variant_analysi_ref01_data["id"]);

        // LOAD
        $code_scanning_variant_analysi_ref01_match_dt0 = [
            "id" => $code_scanning_variant_analysi_ref01_data["id"],
        ];
        $code_scanning_variant_analysi_ref01_data_dt0_loaded = $code_scanning_variant_analysi_ref01_ent->load($code_scanning_variant_analysi_ref01_match_dt0, null);
        $code_scanning_variant_analysi_ref01_data_dt0_load_result = Helpers::to_map(is_object($code_scanning_variant_analysi_ref01_data_dt0_loaded) && method_exists($code_scanning_variant_analysi_ref01_data_dt0_loaded, 'data_get') ? $code_scanning_variant_analysi_ref01_data_dt0_loaded->data_get() : $code_scanning_variant_analysi_ref01_data_dt0_loaded);
        $this->assertNotNull($code_scanning_variant_analysi_ref01_data_dt0_load_result);
        $this->assertEquals($code_scanning_variant_analysi_ref01_data_dt0_load_result["id"], $code_scanning_variant_analysi_ref01_data["id"]);

    }
}

function code_scanning_variant_analysi_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/code_scanning_variant_analysi/CodeScanningVariantAnalysiTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["code_scanning_variant_analysi01", "code_scanning_variant_analysi02", "code_scanning_variant_analysi03", "repo01", "repo02", "repo03", "variant_analysis01", "variant_analysis02", "variant_analysis03", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_CODE_SCANNING_VARIANT_ANALYSI_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_CODE_SCANNING_VARIANT_ANALYSI_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_CODE_SCANNING_VARIANT_ANALYSI_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
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
