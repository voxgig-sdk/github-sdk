"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ReactionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITHUB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GithubSDK.test();
        const ent = testsdk.Reaction();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITHUB_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if ((0, utility_1.maybeSkipControl)(t, 'entityOp', 'reaction.' + op, live))
                return;
        }
        const setup = basicSetup();
        // The basic flow consumes synthetic IDs and field values from the
        // fixture (entity TestData.json). Those don't exist on the live API.
        // Skip live runs unless the user provided a real ENTID env override.
        if (setup.syntheticOnly) {
            t.skip('live entity test uses synthetic IDs from fixture — set GITHUB_TEST_REACTION_ENTID JSON to run live');
            return;
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const reaction_ref01_ent = client.Reaction();
        let reaction_ref01_data = setup.data.new.reaction['reaction_ref01'];
        reaction_ref01_data['comment_id'] = setup.idmap['comment01'];
        reaction_ref01_data['comment_number'] = setup.idmap['comment_number01'];
        reaction_ref01_data['discussion_id'] = setup.idmap['discussion01'];
        reaction_ref01_data['discussion_number'] = setup.idmap['discussion_number01'];
        reaction_ref01_data['issue_id'] = setup.idmap['issue01'];
        reaction_ref01_data['issue_number'] = setup.idmap['issue_number01'];
        reaction_ref01_data['org_id'] = setup.idmap['org01'];
        reaction_ref01_data['owner'] = setup.idmap['owner01'];
        reaction_ref01_data['release_id'] = setup.idmap['release01'];
        reaction_ref01_data['repo'] = setup.idmap['repo01'];
        reaction_ref01_data['team_id'] = setup.idmap['team01'];
        reaction_ref01_data = (await reaction_ref01_ent.create(reaction_ref01_data)).data();
        (0, node_assert_1.default)(null != reaction_ref01_data.id);
        // LIST
        const reaction_ref01_match = {};
        reaction_ref01_match['discussion_number'] = setup.idmap['discussion_number01'];
        reaction_ref01_match['team_id'] = setup.idmap['team01'];
        const reaction_ref01_list = (await reaction_ref01_ent.list(reaction_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(reaction_ref01_list, { id: reaction_ref01_data.id })));
        // REMOVE
        const reaction_ref01_match_rm0 = { id: reaction_ref01_data.id };
        await reaction_ref01_ent.remove(reaction_ref01_match_rm0);
        // LIST
        const reaction_ref01_match_rt0 = {};
        reaction_ref01_match_rt0['discussion_number'] = setup.idmap['discussion_number01'];
        reaction_ref01_match_rt0['team_id'] = setup.idmap['team01'];
        const reaction_ref01_list_rt0 = (await reaction_ref01_ent.list(reaction_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(reaction_ref01_list_rt0, { id: reaction_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/reaction/ReactionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GithubSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['reaction01', 'reaction02', 'reaction03', 'repo01', 'repo02', 'repo03', 'issue01', 'issue02', 'issue03', 'repo01', 'repo02', 'repo03', 'comment01', 'comment02', 'comment03', 'repo01', 'repo02', 'repo03', 'release01', 'release02', 'release03', 'org01', 'org02', 'org03', 'team01', 'team02', 'team03', 'discussion01', 'discussion02', 'discussion03', 'org01', 'org02', 'org03', 'team01', 'team02', 'team03', 'discussion01', 'discussion02', 'discussion03', 'comment01', 'comment02', 'comment03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    // Detect whether the user provided a real ENTID JSON via env var. The
    // basic flow consumes synthetic IDs from the fixture file; without an
    // override those synthetic IDs reach the live API and 4xx. Surface this
    // to the test so it can skip rather than fail.
    const idmapEnvVal = process.env['GITHUB_TEST_REACTION_ENTID'];
    const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{');
    const env = (0, utility_1.envOverride)({
        'GITHUB_TEST_REACTION_ENTID': idmap,
        'GITHUB_TEST_LIVE': 'FALSE',
        'GITHUB_TEST_EXPLAIN': 'FALSE',
        'GITHUB_APIKEY': '',
    });
    idmap = env['GITHUB_TEST_REACTION_ENTID'];
    const live = 'TRUE' === env.GITHUB_TEST_LIVE;
    if (live) {
        client = new __1.GithubSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.GITHUB_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {}
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.GITHUB_TEST_EXPLAIN,
        live,
        syntheticOnly: live && !idmapOverridden,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ReactionEntity.test.js.map