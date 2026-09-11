<?php
declare(strict_types=1);

// Codespace entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CodespaceEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->Codespace(null);
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
                "codespace" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = GithubSDK::test($seed, null);
        $seen = iterator_to_array($base->Codespace(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = GithubConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = GithubSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Codespace(null)->stream("list", null, null) as $item) {
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
        $setup = codespace_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "codespace." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODESPACE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $codespace_ref01_ent = $client->Codespace(null);
        $codespace_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.codespace"), "codespace_ref01"));
        $codespace_ref01_data["codespace_id"] = $setup["idmap"]["codespace01"];
        $codespace_ref01_data["codespace_name"] = $setup["idmap"]["codespace_name01"];
        $codespace_ref01_data["member_id"] = $setup["idmap"]["member01"];
        $codespace_ref01_data["org_id"] = $setup["idmap"]["org01"];
        $codespace_ref01_data["owner"] = $setup["idmap"]["owner01"];
        $codespace_ref01_data["repo"] = $setup["idmap"]["repo01"];
        $codespace_ref01_data["secret_id"] = $setup["idmap"]["secret01"];
        $codespace_ref01_data["secret_name"] = $setup["idmap"]["secret_name01"];
        $codespace_ref01_data["username"] = $setup["idmap"]["username01"];

        $codespace_ref01_data_result = $codespace_ref01_ent->create($codespace_ref01_data, null);
        $codespace_ref01_data = Helpers::to_map(is_object($codespace_ref01_data_result) && method_exists($codespace_ref01_data_result, 'data_get') ? $codespace_ref01_data_result->data_get() : $codespace_ref01_data_result);
        $this->assertNotNull($codespace_ref01_data);
        $this->assertNotNull($codespace_ref01_data["id"]);

        // LIST
        $codespace_ref01_match = [
            "secret_name" => $setup["idmap"]["secret_name01"],
        ];

        $codespace_ref01_list_result = $codespace_ref01_ent->list($codespace_ref01_match, null);
        $this->assertIsArray($codespace_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($codespace_ref01_list_result),
            ["id" => $codespace_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $codespace_ref01_data_up0_up = [
            "id" => $codespace_ref01_data["id"],
        ];

        $codespace_ref01_markdef_up0_name = "archive_url";
        $codespace_ref01_markdef_up0_value = "Mark01-codespace_ref01_" . $setup["now"];
        $codespace_ref01_data_up0_up[$codespace_ref01_markdef_up0_name] = $codespace_ref01_markdef_up0_value;

        $codespace_ref01_resdata_up0_result = $codespace_ref01_ent->update($codespace_ref01_data_up0_up, null);
        $codespace_ref01_resdata_up0 = Helpers::to_map(is_object($codespace_ref01_resdata_up0_result) && method_exists($codespace_ref01_resdata_up0_result, 'data_get') ? $codespace_ref01_resdata_up0_result->data_get() : $codespace_ref01_resdata_up0_result);
        $this->assertNotNull($codespace_ref01_resdata_up0);
        $this->assertEquals($codespace_ref01_resdata_up0["id"], $codespace_ref01_data_up0_up["id"]);
        $this->assertEquals($codespace_ref01_resdata_up0[$codespace_ref01_markdef_up0_name], $codespace_ref01_markdef_up0_value);

        // LOAD
        $codespace_ref01_match_dt0 = [
            "id" => $codespace_ref01_data["id"],
        ];
        $codespace_ref01_data_dt0_loaded = $codespace_ref01_ent->load($codespace_ref01_match_dt0, null);
        $codespace_ref01_data_dt0_load_result = Helpers::to_map(is_object($codespace_ref01_data_dt0_loaded) && method_exists($codespace_ref01_data_dt0_loaded, 'data_get') ? $codespace_ref01_data_dt0_loaded->data_get() : $codespace_ref01_data_dt0_loaded);
        $this->assertNotNull($codespace_ref01_data_dt0_load_result);
        $this->assertEquals($codespace_ref01_data_dt0_load_result["id"], $codespace_ref01_data["id"]);

        // REMOVE
        $codespace_ref01_match_rm0 = [
            "id" => $codespace_ref01_data["id"],
        ];
        $codespace_ref01_ent->remove($codespace_ref01_match_rm0, null);

        // LIST
        $codespace_ref01_match_rt0 = [
            "secret_name" => $setup["idmap"]["secret_name01"],
        ];

        $codespace_ref01_list_rt0_result = $codespace_ref01_ent->list($codespace_ref01_match_rt0, null);
        $this->assertIsArray($codespace_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($codespace_ref01_list_rt0_result),
            ["id" => $codespace_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function codespace_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/codespace/CodespaceTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["codespace01", "codespace02", "codespace03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "secret01", "secret02", "secret03", "member01", "member02", "member03", "pull01", "pull02", "pull03", "export01", "export02", "export03", "repository01", "repository02", "repository03", "codespace_name01", "owner01", "secret_name01", "username01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_CODESPACE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_CODESPACE_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
        "GITHUB_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_CODESPACE_ENTID"]);
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
