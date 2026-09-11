<?php
declare(strict_types=1);

// RepositorySubscription entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RepositorySubscriptionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->RepositorySubscription(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = repository_subscription_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "repository_subscription." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_REPOSITORY_SUBSCRIPTION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $repository_subscription_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.repository_subscription")));
        $repository_subscription_ref01_data = null;
        if (count($repository_subscription_ref01_data_raw) > 0) {
            $repository_subscription_ref01_data = Helpers::to_map($repository_subscription_ref01_data_raw[0][1]);
        }

        // UPDATE
        $repository_subscription_ref01_ent = $client->RepositorySubscription(null);
        $repository_subscription_ref01_data_up0_up = [
            "owner" => $setup["idmap"]["owner"],
        ];

        $repository_subscription_ref01_markdef_up0_name = "created_at";
        $repository_subscription_ref01_markdef_up0_value = "Mark01-repository_subscription_ref01_" . $setup["now"];
        $repository_subscription_ref01_data_up0_up[$repository_subscription_ref01_markdef_up0_name] = $repository_subscription_ref01_markdef_up0_value;

        $repository_subscription_ref01_resdata_up0_result = $repository_subscription_ref01_ent->update($repository_subscription_ref01_data_up0_up, null);
        $repository_subscription_ref01_resdata_up0 = Helpers::to_map(is_object($repository_subscription_ref01_resdata_up0_result) && method_exists($repository_subscription_ref01_resdata_up0_result, 'data_get') ? $repository_subscription_ref01_resdata_up0_result->data_get() : $repository_subscription_ref01_resdata_up0_result);
        $this->assertNotNull($repository_subscription_ref01_resdata_up0);
        $this->assertEquals($repository_subscription_ref01_resdata_up0[$repository_subscription_ref01_markdef_up0_name], $repository_subscription_ref01_markdef_up0_value);

        // LOAD
        $repository_subscription_ref01_match_dt0 = [];
        $repository_subscription_ref01_data_dt0_loaded = $repository_subscription_ref01_ent->load($repository_subscription_ref01_match_dt0, null);
        $this->assertNotNull($repository_subscription_ref01_data_dt0_loaded);

    }
}

function repository_subscription_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/repository_subscription/RepositorySubscriptionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["repository_subscription01", "repository_subscription02", "repository_subscription03", "repo01", "repo02", "repo03", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_REPOSITORY_SUBSCRIPTION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_REPOSITORY_SUBSCRIPTION_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
        "GITHUB_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_REPOSITORY_SUBSCRIPTION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["owner"])) {
        $idmap_resolved["owner"] = $idmap_resolved["owner01"];
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
