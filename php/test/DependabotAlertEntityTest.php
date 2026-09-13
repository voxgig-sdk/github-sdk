<?php
declare(strict_types=1);

// DependabotAlert entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class DependabotAlertEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->DependabotAlert(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "dependabot_alert" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = GithubSDK::test($seed, null);
        $seen = iterator_to_array($base->DependabotAlert(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = GithubConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = GithubSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->DependabotAlert(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = dependabot_alert_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "dependabot_alert." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_DEPENDABOT_ALERT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $dependabot_alert_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.dependabot_alert")));
        $dependabot_alert_ref01_data = null;
        if (count($dependabot_alert_ref01_data_raw) > 0) {
            $dependabot_alert_ref01_data = Helpers::to_map($dependabot_alert_ref01_data_raw[0][1]);
        }

        // LIST
        $dependabot_alert_ref01_ent = $client->DependabotAlert(null);
        $dependabot_alert_ref01_match = [
            "owner" => $setup["idmap"]["owner01"],
            "repo" => $setup["idmap"]["repo01"],
        ];

        $dependabot_alert_ref01_list_result = $dependabot_alert_ref01_ent->list($dependabot_alert_ref01_match, null);
        $this->assertIsArray($dependabot_alert_ref01_list_result);

        // UPDATE
        $dependabot_alert_ref01_data_up0_up = [
            "id" => $dependabot_alert_ref01_data["id"],
            "owner" => $setup["idmap"]["owner"],
            "repo" => $setup["idmap"]["repo"],
        ];

        $dependabot_alert_ref01_markdef_up0_name = "auto_dismissed_at";
        $dependabot_alert_ref01_markdef_up0_value = "Mark01-dependabot_alert_ref01_" . $setup["now"];
        $dependabot_alert_ref01_data_up0_up[$dependabot_alert_ref01_markdef_up0_name] = $dependabot_alert_ref01_markdef_up0_value;

        $dependabot_alert_ref01_resdata_up0_result = $dependabot_alert_ref01_ent->update($dependabot_alert_ref01_data_up0_up, null);
        $dependabot_alert_ref01_resdata_up0 = Helpers::to_map(is_object($dependabot_alert_ref01_resdata_up0_result) && method_exists($dependabot_alert_ref01_resdata_up0_result, 'data_get') ? $dependabot_alert_ref01_resdata_up0_result->data_get() : $dependabot_alert_ref01_resdata_up0_result);
        $this->assertNotNull($dependabot_alert_ref01_resdata_up0);
        $this->assertEquals($dependabot_alert_ref01_resdata_up0["id"], $dependabot_alert_ref01_data_up0_up["id"]);
        $this->assertEquals($dependabot_alert_ref01_resdata_up0[$dependabot_alert_ref01_markdef_up0_name], $dependabot_alert_ref01_markdef_up0_value);

        // LOAD
        $dependabot_alert_ref01_match_dt0 = [
            "id" => $dependabot_alert_ref01_data["id"],
        ];
        $dependabot_alert_ref01_data_dt0_loaded = $dependabot_alert_ref01_ent->load($dependabot_alert_ref01_match_dt0, null);
        $dependabot_alert_ref01_data_dt0_load_result = Helpers::to_map(is_object($dependabot_alert_ref01_data_dt0_loaded) && method_exists($dependabot_alert_ref01_data_dt0_loaded, 'data_get') ? $dependabot_alert_ref01_data_dt0_loaded->data_get() : $dependabot_alert_ref01_data_dt0_loaded);
        $this->assertNotNull($dependabot_alert_ref01_data_dt0_load_result);
        $this->assertEquals($dependabot_alert_ref01_data_dt0_load_result["id"], $dependabot_alert_ref01_data["id"]);

    }
}

function dependabot_alert_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/dependabot_alert/DependabotAlertTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["dependabot_alert01", "dependabot_alert02", "dependabot_alert03", "repo01", "repo02", "repo03", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_DEPENDABOT_ALERT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_DEPENDABOT_ALERT_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_DEPENDABOT_ALERT_ENTID"]);
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
