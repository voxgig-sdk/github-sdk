

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


describe('TeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Team()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITHUB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'team.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITHUB_TEST_TEAM_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const team_ref01_ent = client.Team()
    let team_ref01_data = setup.data.new.team['team_ref01']
    team_ref01_data['branch_id'] = setup.idmap['branch01']
    team_ref01_data['discussion_id'] = setup.idmap['discussion01']
    team_ref01_data['discussion_number'] = setup.idmap['discussion_number01']
    team_ref01_data['invitation_id'] = setup.idmap['invitation01']
    team_ref01_data['org'] = setup.idmap['org01']
    team_ref01_data['org_id'] = setup.idmap['org01']
    team_ref01_data['organization_role_id'] = setup.idmap['organization_role01']
    team_ref01_data['owner'] = setup.idmap['owner01']
    team_ref01_data['repo'] = setup.idmap['repo01']
    team_ref01_data['team_id'] = setup.idmap['team01']
    team_ref01_data['team_slug'] = setup.idmap['team_slug01']

    team_ref01_data = (await team_ref01_ent.create(team_ref01_data)).data()
    assert(null != team_ref01_data.id)


    // LIST
    const team_ref01_match: any = {}

    const team_ref01_list = (await team_ref01_ent.list(team_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(team_ref01_list, { id: team_ref01_data.id })))


    // UPDATE
    const team_ref01_data_up0: any = {}
    team_ref01_data_up0.id = team_ref01_data.id

    const team_ref01_markdef_up0 = { name: 'archive_url', value: 'Mark01-team_ref01_' + setup.now }
    ;(team_ref01_data_up0 as any)[team_ref01_markdef_up0.name] = team_ref01_markdef_up0.value

    const team_ref01_resdata_up0 = (await team_ref01_ent.update(team_ref01_data_up0)).data()
    assert(team_ref01_resdata_up0.id === team_ref01_data_up0.id)

    assert((team_ref01_resdata_up0 as any)[team_ref01_markdef_up0.name] === team_ref01_markdef_up0.value)


    // LOAD
    const team_ref01_match_dt0: any = {}
    team_ref01_match_dt0.id = team_ref01_data.id
    const team_ref01_data_dt0 = (await team_ref01_ent.load(team_ref01_match_dt0)).data()
    assert(team_ref01_data_dt0.id === team_ref01_data.id)


    // REMOVE
    const team_ref01_match_rm0: any = { id: team_ref01_data.id }
    await team_ref01_ent.remove(team_ref01_match_rm0)
  

    // LIST
    const team_ref01_match_rt0: any = {}

    const team_ref01_list_rt0 = (await team_ref01_ent.list(team_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(team_ref01_list_rt0, { id: team_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/team/TeamTestData.json')

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
    ['team01','team02','team03','org01','org02','org03','member01','member02','member03','org01','org02','org03','invitation01','invitation02','invitation03','org01','org02','org03','organization_role01','organization_role02','organization_role03','org01','org02','org03','team01','team02','team03','repo01','repo02','repo03','branch01','branch02','branch03','org01','org02','org03','team01','team02','team03','discussion01','discussion02','discussion03','org01','org02','org03','team01','team02','team03','membership01','membership02','membership03','org01','org02','org03','team01','team02','team03','project01','project02','project03','org01','org02','org03','team01','team02','team03','repo01','repo02','repo03','org01','org02','org03','team01','team02','team03','discussion01','discussion02','discussion03','comment01','comment02','comment03'],
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
  const idmapEnvVal = process.env['GITHUB_TEST_TEAM_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITHUB_TEST_TEAM_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_TEAM_ENTID']

  const live = 'TRUE' === env.GITHUB_TEST_LIVE

  if (live) {
    client = new GithubSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
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
  
