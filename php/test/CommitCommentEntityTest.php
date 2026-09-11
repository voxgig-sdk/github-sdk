<?php
declare(strict_types=1);

// CommitComment entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CommitCommentEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->CommitComment(null);
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
                "commit_comment" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = GithubSDK::test($seed, null);
        $seen = iterator_to_array($base->CommitComment(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = GithubConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = GithubSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->CommitComment(null)->stream("list", null, null) as $item) {
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
        $setup = commit_comment_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "commit_comment." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_COMMIT_COMMENT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $commit_comment_ref01_ent = $client->CommitComment(null);
        $commit_comment_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.commit_comment"), "commit_comment_ref01"));
        $commit_comment_ref01_data["commit_sha"] = $setup["idmap"]["commit_sha01"];
        $commit_comment_ref01_data["owner"] = $setup["idmap"]["owner01"];
        $commit_comment_ref01_data["repo"] = $setup["idmap"]["repo01"];

        $commit_comment_ref01_data_result = $commit_comment_ref01_ent->create($commit_comment_ref01_data, null);
        $commit_comment_ref01_data = Helpers::to_map(is_object($commit_comment_ref01_data_result) && method_exists($commit_comment_ref01_data_result, 'data_get') ? $commit_comment_ref01_data_result->data_get() : $commit_comment_ref01_data_result);
        $this->assertNotNull($commit_comment_ref01_data);
        $this->assertNotNull($commit_comment_ref01_data["id"]);

        // LIST
        $commit_comment_ref01_match = [
            "owner" => $setup["idmap"]["owner01"],
            "repo" => $setup["idmap"]["repo01"],
        ];

        $commit_comment_ref01_list_result = $commit_comment_ref01_ent->list($commit_comment_ref01_match, null);
        $this->assertIsArray($commit_comment_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($commit_comment_ref01_list_result),
            ["id" => $commit_comment_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $commit_comment_ref01_data_up0_up = [
            "id" => $commit_comment_ref01_data["id"],
            "owner" => $setup["idmap"]["owner"],
            "repo" => $setup["idmap"]["repo"],
        ];

        $commit_comment_ref01_markdef_up0_name = "author_association";
        $commit_comment_ref01_markdef_up0_value = "Mark01-commit_comment_ref01_" . $setup["now"];
        $commit_comment_ref01_data_up0_up[$commit_comment_ref01_markdef_up0_name] = $commit_comment_ref01_markdef_up0_value;

        $commit_comment_ref01_resdata_up0_result = $commit_comment_ref01_ent->update($commit_comment_ref01_data_up0_up, null);
        $commit_comment_ref01_resdata_up0 = Helpers::to_map(is_object($commit_comment_ref01_resdata_up0_result) && method_exists($commit_comment_ref01_resdata_up0_result, 'data_get') ? $commit_comment_ref01_resdata_up0_result->data_get() : $commit_comment_ref01_resdata_up0_result);
        $this->assertNotNull($commit_comment_ref01_resdata_up0);
        $this->assertEquals($commit_comment_ref01_resdata_up0["id"], $commit_comment_ref01_data_up0_up["id"]);
        $this->assertEquals($commit_comment_ref01_resdata_up0[$commit_comment_ref01_markdef_up0_name], $commit_comment_ref01_markdef_up0_value);

        // LOAD
        $commit_comment_ref01_match_dt0 = [
            "id" => $commit_comment_ref01_data["id"],
        ];
        $commit_comment_ref01_data_dt0_loaded = $commit_comment_ref01_ent->load($commit_comment_ref01_match_dt0, null);
        $commit_comment_ref01_data_dt0_load_result = Helpers::to_map(is_object($commit_comment_ref01_data_dt0_loaded) && method_exists($commit_comment_ref01_data_dt0_loaded, 'data_get') ? $commit_comment_ref01_data_dt0_loaded->data_get() : $commit_comment_ref01_data_dt0_loaded);
        $this->assertNotNull($commit_comment_ref01_data_dt0_load_result);
        $this->assertEquals($commit_comment_ref01_data_dt0_load_result["id"], $commit_comment_ref01_data["id"]);

    }
}

function commit_comment_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/commit_comment/CommitCommentTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["commit_comment01", "commit_comment02", "commit_comment03", "repo01", "repo02", "repo03", "commit01", "commit02", "commit03", "commit_sha01", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_COMMIT_COMMENT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_COMMIT_COMMENT_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
        "GITHUB_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_COMMIT_COMMENT_ENTID"]);
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
