<?php
declare(strict_types=1);

// Reaction entity test

require_once __DIR__ . '/../github_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ReactionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $ent = $testsdk->Reaction(null);
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
                "reaction" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = GithubSDK::test($seed, null);
        $seen = iterator_to_array($base->Reaction(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = GithubConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = GithubSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Reaction(null)->stream("list", null, null) as $item) {
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
        $setup = reaction_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "reaction." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_REACTION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $reaction_ref01_ent = $client->Reaction(null);
        $reaction_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.reaction"), "reaction_ref01"));
        $reaction_ref01_data["comment_id"] = $setup["idmap"]["comment01"];
        $reaction_ref01_data["comment_number"] = $setup["idmap"]["comment_number01"];
        $reaction_ref01_data["discussion_id"] = $setup["idmap"]["discussion01"];
        $reaction_ref01_data["discussion_number"] = $setup["idmap"]["discussion_number01"];
        $reaction_ref01_data["issue_id"] = $setup["idmap"]["issue01"];
        $reaction_ref01_data["issue_number"] = $setup["idmap"]["issue_number01"];
        $reaction_ref01_data["org_id"] = $setup["idmap"]["org01"];
        $reaction_ref01_data["owner"] = $setup["idmap"]["owner01"];
        $reaction_ref01_data["release_id"] = $setup["idmap"]["release01"];
        $reaction_ref01_data["repo"] = $setup["idmap"]["repo01"];
        $reaction_ref01_data["team_id"] = $setup["idmap"]["team01"];

        $reaction_ref01_data_result = $reaction_ref01_ent->create($reaction_ref01_data, null);
        $reaction_ref01_data = Helpers::to_map(is_object($reaction_ref01_data_result) && method_exists($reaction_ref01_data_result, 'data_get') ? $reaction_ref01_data_result->data_get() : $reaction_ref01_data_result);
        $this->assertNotNull($reaction_ref01_data);
        $this->assertNotNull($reaction_ref01_data["id"]);

        // LIST
        $reaction_ref01_match = [
            "discussion_number" => $setup["idmap"]["discussion_number01"],
            "team_id" => $setup["idmap"]["team01"],
        ];

        $reaction_ref01_list_result = $reaction_ref01_ent->list($reaction_ref01_match, null);
        $this->assertIsArray($reaction_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($reaction_ref01_list_result),
            ["id" => $reaction_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // REMOVE
        $reaction_ref01_match_rm0 = [
            "id" => $reaction_ref01_data["id"],
        ];
        $reaction_ref01_ent->remove($reaction_ref01_match_rm0, null);

        // LIST
        $reaction_ref01_match_rt0 = [
            "discussion_number" => $setup["idmap"]["discussion_number01"],
            "team_id" => $setup["idmap"]["team01"],
        ];

        $reaction_ref01_list_rt0_result = $reaction_ref01_ent->list($reaction_ref01_match_rt0, null);
        $this->assertIsArray($reaction_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($reaction_ref01_list_rt0_result),
            ["id" => $reaction_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function reaction_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/reaction/ReactionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GithubSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["reaction01", "reaction02", "reaction03", "repo01", "repo02", "repo03", "issue01", "issue02", "issue03", "comment01", "comment02", "comment03", "release01", "release02", "release03", "org01", "org02", "org03", "team01", "team02", "team03", "discussion01", "discussion02", "discussion03", "comment_number01", "discussion_number01", "issue_number01", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITHUB_TEST_REACTION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITHUB_TEST_REACTION_ENTID" => $idmap,
        "GITHUB_TEST_LIVE" => "FALSE",
        "GITHUB_TEST_EXPLAIN" => "FALSE",
        "GITHUB_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITHUB_TEST_REACTION_ENTID"]);
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
