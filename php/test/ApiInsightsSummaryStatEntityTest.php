<?php
declare(strict_types=1);

// ApiInsightsSummaryStat entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ApiInsightsSummaryStatEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->ApiInsightsSummaryStat(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = api_insights_summary_stat_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "api_insights_summary_stat." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_API_INSIGHTS_SUMMARY_STAT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $api_insights_summary_stat_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.api_insights_summary_stat")));
        $api_insights_summary_stat_ref01_data = null;
        if (count($api_insights_summary_stat_ref01_data_raw) > 0) {
            $api_insights_summary_stat_ref01_data = Helpers::to_map($api_insights_summary_stat_ref01_data_raw[0][1]);
        }

        // LOAD
        $api_insights_summary_stat_ref01_ent = $client->ApiInsightsSummaryStat(null);
        $api_insights_summary_stat_ref01_match_dt0 = [
            "id" => $api_insights_summary_stat_ref01_data["id"],
        ];
        $api_insights_summary_stat_ref01_data_dt0_loaded = $api_insights_summary_stat_ref01_ent->load($api_insights_summary_stat_ref01_match_dt0, null);
        $api_insights_summary_stat_ref01_data_dt0_load_result = Helpers::to_map(is_object($api_insights_summary_stat_ref01_data_dt0_loaded) && method_exists($api_insights_summary_stat_ref01_data_dt0_loaded, 'data_get') ? $api_insights_summary_stat_ref01_data_dt0_loaded->data_get() : $api_insights_summary_stat_ref01_data_dt0_loaded);
        $this->assertNotNull($api_insights_summary_stat_ref01_data_dt0_load_result);
        $this->assertEquals($api_insights_summary_stat_ref01_data_dt0_load_result["id"], $api_insights_summary_stat_ref01_data["id"]);

    }
}

function api_insights_summary_stat_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/api_insights_summary_stat/ApiInsightsSummaryStatTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["api_insights_summary_stat01", "api_insights_summary_stat02", "api_insights_summary_stat03", "org01", "org02", "org03", "user01", "user02", "user03", "summary_stat01", "summary_stat02", "summary_stat03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_API_INSIGHTS_SUMMARY_STAT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_API_INSIGHTS_SUMMARY_STAT_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
        "GITHUB_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_API_INSIGHTS_SUMMARY_STAT_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
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
