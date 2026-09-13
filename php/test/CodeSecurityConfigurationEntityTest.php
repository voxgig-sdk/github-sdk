<?php
declare(strict_types=1);

// CodeSecurityConfiguration entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CodeSecurityConfigurationEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->CodeSecurityConfiguration(null);
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
                "code_security_configuration" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = GithubSDK::test($seed, null);
        $seen = iterator_to_array($base->CodeSecurityConfiguration(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = GithubConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = GithubSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->CodeSecurityConfiguration(null)->stream("list", null, null) as $item) {
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
        $setup = code_security_configuration_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "code_security_configuration." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $code_security_configuration_ref01_ent = $client->CodeSecurityConfiguration(null);
        $code_security_configuration_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.code_security_configuration"), "code_security_configuration_ref01"));
        $code_security_configuration_ref01_data["enterprise"] = $setup["idmap"]["enterprise01"];
        $code_security_configuration_ref01_data["org_id"] = $setup["idmap"]["org01"];
        $code_security_configuration_ref01_data["owner"] = $setup["idmap"]["owner01"];

        $code_security_configuration_ref01_data_result = $code_security_configuration_ref01_ent->create($code_security_configuration_ref01_data, null);
        $code_security_configuration_ref01_data = Helpers::to_map(is_object($code_security_configuration_ref01_data_result) && method_exists($code_security_configuration_ref01_data_result, 'data_get') ? $code_security_configuration_ref01_data_result->data_get() : $code_security_configuration_ref01_data_result);
        $this->assertNotNull($code_security_configuration_ref01_data);
        $this->assertNotNull($code_security_configuration_ref01_data["id"]);

        // LIST
        $code_security_configuration_ref01_match = [
            "enterprise" => $setup["idmap"]["enterprise01"],
        ];

        $code_security_configuration_ref01_list_result = $code_security_configuration_ref01_ent->list($code_security_configuration_ref01_match, null);
        $this->assertIsArray($code_security_configuration_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($code_security_configuration_ref01_list_result),
            ["id" => $code_security_configuration_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $code_security_configuration_ref01_data_up0_up = [
            "id" => $code_security_configuration_ref01_data["id"],
            "org_id" => $setup["idmap"]["org_id"],
        ];

        $code_security_configuration_ref01_markdef_up0_name = "advanced_security";
        $code_security_configuration_ref01_markdef_up0_value = "Mark01-code_security_configuration_ref01_" . $setup["now"];
        $code_security_configuration_ref01_data_up0_up[$code_security_configuration_ref01_markdef_up0_name] = $code_security_configuration_ref01_markdef_up0_value;

        $code_security_configuration_ref01_resdata_up0_result = $code_security_configuration_ref01_ent->update($code_security_configuration_ref01_data_up0_up, null);
        $code_security_configuration_ref01_resdata_up0 = Helpers::to_map(is_object($code_security_configuration_ref01_resdata_up0_result) && method_exists($code_security_configuration_ref01_resdata_up0_result, 'data_get') ? $code_security_configuration_ref01_resdata_up0_result->data_get() : $code_security_configuration_ref01_resdata_up0_result);
        $this->assertNotNull($code_security_configuration_ref01_resdata_up0);
        $this->assertEquals($code_security_configuration_ref01_resdata_up0["id"], $code_security_configuration_ref01_data_up0_up["id"]);
        $this->assertEquals($code_security_configuration_ref01_resdata_up0[$code_security_configuration_ref01_markdef_up0_name], $code_security_configuration_ref01_markdef_up0_value);

        // LOAD
        $code_security_configuration_ref01_match_dt0 = [
            "id" => $code_security_configuration_ref01_data["id"],
        ];
        $code_security_configuration_ref01_data_dt0_loaded = $code_security_configuration_ref01_ent->load($code_security_configuration_ref01_match_dt0, null);
        $code_security_configuration_ref01_data_dt0_load_result = Helpers::to_map(is_object($code_security_configuration_ref01_data_dt0_loaded) && method_exists($code_security_configuration_ref01_data_dt0_loaded, 'data_get') ? $code_security_configuration_ref01_data_dt0_loaded->data_get() : $code_security_configuration_ref01_data_dt0_loaded);
        $this->assertNotNull($code_security_configuration_ref01_data_dt0_load_result);
        $this->assertEquals($code_security_configuration_ref01_data_dt0_load_result["id"], $code_security_configuration_ref01_data["id"]);

    }
}

function code_security_configuration_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/code_security_configuration/CodeSecurityConfigurationTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["code_security_configuration01", "code_security_configuration02", "code_security_configuration03", "enterpris01", "enterpris02", "enterpris03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "configuration01", "configuration02", "configuration03", "enterprise01", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID"]);
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
