

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { GithubSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ReactionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Reaction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITHUB_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'reaction.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITHUB_TEST_REACTION_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const reaction_ref01_ent = client.Reaction()
    let reaction_ref01_data = setup.data.new.reaction['reaction_ref01']
    reaction_ref01_data['comment_id'] = setup.idmap['comment01']
    reaction_ref01_data['comment_number'] = setup.idmap['comment_number01']
    reaction_ref01_data['discussion_id'] = setup.idmap['discussion01']
    reaction_ref01_data['discussion_number'] = setup.idmap['discussion_number01']
    reaction_ref01_data['issue_id'] = setup.idmap['issue01']
    reaction_ref01_data['issue_number'] = setup.idmap['issue_number01']
    reaction_ref01_data['org_id'] = setup.idmap['org01']
    reaction_ref01_data['owner'] = setup.idmap['owner01']
    reaction_ref01_data['release_id'] = setup.idmap['release01']
    reaction_ref01_data['repo'] = setup.idmap['repo01']
    reaction_ref01_data['team_id'] = setup.idmap['team01']

    reaction_ref01_data = (await reaction_ref01_ent.create(reaction_ref01_data)).data()
    assert(null != reaction_ref01_data.id)


    // LIST
    const reaction_ref01_match: any = {}
    reaction_ref01_match['discussion_number'] = setup.idmap['discussion_number01']
    reaction_ref01_match['team_id'] = setup.idmap['team01']

    const reaction_ref01_list = (await reaction_ref01_ent.list(reaction_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(reaction_ref01_list, { id: reaction_ref01_data.id })))


    // REMOVE
    const reaction_ref01_match_rm0: any = { id: reaction_ref01_data.id }
    await reaction_ref01_ent.remove(reaction_ref01_match_rm0)
  

    // LIST
    const reaction_ref01_match_rt0: any = {}
    reaction_ref01_match_rt0['discussion_number'] = setup.idmap['discussion_number01']
    reaction_ref01_match_rt0['team_id'] = setup.idmap['team01']

    const reaction_ref01_list_rt0 = (await reaction_ref01_ent.list(reaction_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(reaction_ref01_list_rt0, { id: reaction_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/reaction/ReactionTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GithubSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['reaction01','reaction02','reaction03','repo01','repo02','repo03','issue01','issue02','issue03','repo01','repo02','repo03','comment01','comment02','comment03','repo01','repo02','repo03','release01','release02','release03','org01','org02','org03','team01','team02','team03','discussion01','discussion02','discussion03','org01','org02','org03','team01','team02','team03','discussion01','discussion02','discussion03','comment01','comment02','comment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['GITHUB_TEST_REACTION_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITHUB_TEST_REACTION_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_REACTION_ENTID']

  const live = 'TRUE' === env.GITHUB_TEST_LIVE

  if (live) {
    client = new GithubSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.GITHUB_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {}
    ]))
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
  }

  return setup
}
  
