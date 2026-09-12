<?php
declare(strict_types=1);

// Import entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ImportEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->Import(null);
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
                "import" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = GithubSDK::test($seed, null);
        $seen = iterator_to_array($base->Import(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = GithubConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = GithubSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Import(null)->stream("list", null, null) as $item) {
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
        $setup = import_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "import." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_IMPORT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $import_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.import")));
        $import_ref01_data = null;
        if (count($import_ref01_data_raw) > 0) {
            $import_ref01_data = Helpers::to_map($import_ref01_data_raw[0][1]);
        }

        // LIST
        $import_ref01_ent = $client->Import(null);
        $import_ref01_match = [
            "owner" => $setup["idmap"]["owner01"],
            "repo" => $setup["idmap"]["repo01"],
        ];

        $import_ref01_list_result = $import_ref01_ent->list($import_ref01_match, null);
        $this->assertIsArray($import_ref01_list_result);

        // UPDATE
        $import_ref01_data_up0_up = [
            "owner" => $setup["idmap"]["owner"],
        ];

        $import_ref01_markdef_up0_name = "authors_url";
        $import_ref01_markdef_up0_value = "Mark01-import_ref01_" . $setup["now"];
        $import_ref01_data_up0_up[$import_ref01_markdef_up0_name] = $import_ref01_markdef_up0_value;

        $import_ref01_resdata_up0_result = $import_ref01_ent->update($import_ref01_data_up0_up, null);
        $import_ref01_resdata_up0 = Helpers::to_map(is_object($import_ref01_resdata_up0_result) && method_exists($import_ref01_resdata_up0_result, 'data_get') ? $import_ref01_resdata_up0_result->data_get() : $import_ref01_resdata_up0_result);
        $this->assertNotNull($import_ref01_resdata_up0);
        $this->assertEquals($import_ref01_resdata_up0[$import_ref01_markdef_up0_name], $import_ref01_markdef_up0_value);

    }
}

function import_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/import/ImportTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["import01", "import02", "import03", "repo01", "repo02", "repo03", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_IMPORT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_IMPORT_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
        "GITHUB_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_IMPORT_ENTID"]);
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
