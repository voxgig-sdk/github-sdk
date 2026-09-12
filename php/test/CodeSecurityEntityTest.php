<?php
declare(strict_types=1);

// CodeSecurity entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CodeSecurityEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->CodeSecurity(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = code_security_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "code_security." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODE_SECURITY_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $code_security_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.code_security")));
        $code_security_ref01_data = null;
        if (count($code_security_ref01_data_raw) > 0) {
            $code_security_ref01_data = Helpers::to_map($code_security_ref01_data_raw[0][1]);
        }

        // UPDATE
        $code_security_ref01_ent = $client->CodeSecurity(null);
        $code_security_ref01_data_up0_up = [
            "id" => $code_security_ref01_data["id"],
            "org_id" => $setup["idmap"]["org_id"],
        ];

        $code_security_ref01_markdef_up0_name = "advanced_security";
        $code_security_ref01_markdef_up0_value = "Mark01-code_security_ref01_" . $setup["now"];
        $code_security_ref01_data_up0_up[$code_security_ref01_markdef_up0_name] = $code_security_ref01_markdef_up0_value;

        $code_security_ref01_resdata_up0_result = $code_security_ref01_ent->update($code_security_ref01_data_up0_up, null);
        $code_security_ref01_resdata_up0 = Helpers::to_map(is_object($code_security_ref01_resdata_up0_result) && method_exists($code_security_ref01_resdata_up0_result, 'data_get') ? $code_security_ref01_resdata_up0_result->data_get() : $code_security_ref01_resdata_up0_result);
        $this->assertNotNull($code_security_ref01_resdata_up0);
        $this->assertEquals($code_security_ref01_resdata_up0["id"], $code_security_ref01_data_up0_up["id"]);
        $this->assertEquals($code_security_ref01_resdata_up0[$code_security_ref01_markdef_up0_name], $code_security_ref01_markdef_up0_value);

    }
}

function code_security_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/code_security/CodeSecurityTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["code_security01", "code_security02", "code_security03", "org01", "org02", "org03", "enterpris01", "enterpris02", "enterpris03", "configuration01", "configuration02", "configuration03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_CODE_SECURITY_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_CODE_SECURITY_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
        "GITHUB_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_CODE_SECURITY_ENTID"]);
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
