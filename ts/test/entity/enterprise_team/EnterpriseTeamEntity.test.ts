

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


describe('EnterpriseTeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.EnterpriseTeam()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITHUB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'enterprise_team.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITHUB_TEST_ENTERPRISE_TEAM_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const enterprise_team_ref01_ent = client.EnterpriseTeam()
    let enterprise_team_ref01_data = setup.data.new.enterprise_team['enterprise_team_ref01']
    enterprise_team_ref01_data['enterprise'] = setup.idmap['enterprise01']

    enterprise_team_ref01_data = (await enterprise_team_ref01_ent.create(enterprise_team_ref01_data)).data()
    assert(null != enterprise_team_ref01_data.id)


    // LIST
    const enterprise_team_ref01_match: any = {}
    enterprise_team_ref01_match['enterprise'] = setup.idmap['enterprise01']

    const enterprise_team_ref01_list = (await enterprise_team_ref01_ent.list(enterprise_team_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(enterprise_team_ref01_list, { id: enterprise_team_ref01_data.id })))


    // UPDATE
    const enterprise_team_ref01_data_up0: any = {}
    enterprise_team_ref01_data_up0.id = enterprise_team_ref01_data.id
    enterprise_team_ref01_data_up0 ['enterprise'] = setup.idmap['enterprise']

    const enterprise_team_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-enterprise_team_ref01_' + setup.now }
    ;(enterprise_team_ref01_data_up0 as any)[enterprise_team_ref01_markdef_up0.name] = enterprise_team_ref01_markdef_up0.value

    const enterprise_team_ref01_resdata_up0 = (await enterprise_team_ref01_ent.update(enterprise_team_ref01_data_up0)).data()
    assert(enterprise_team_ref01_resdata_up0.id === enterprise_team_ref01_data_up0.id)

    assert((enterprise_team_ref01_resdata_up0 as any)[enterprise_team_ref01_markdef_up0.name] === enterprise_team_ref01_markdef_up0.value)


    // LOAD
    const enterprise_team_ref01_match_dt0: any = {}
    enterprise_team_ref01_match_dt0.id = enterprise_team_ref01_data.id
    const enterprise_team_ref01_data_dt0 = (await enterprise_team_ref01_ent.load(enterprise_team_ref01_match_dt0)).data()
    assert(enterprise_team_ref01_data_dt0.id === enterprise_team_ref01_data.id)


    // REMOVE
    const enterprise_team_ref01_match_rm0: any = { id: enterprise_team_ref01_data.id }
    await enterprise_team_ref01_ent.remove(enterprise_team_ref01_match_rm0)
  

    // LIST
    const enterprise_team_ref01_match_rt0: any = {}
    enterprise_team_ref01_match_rt0['enterprise'] = setup.idmap['enterprise01']

    const enterprise_team_ref01_list_rt0 = (await enterprise_team_ref01_ent.list(enterprise_team_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(enterprise_team_ref01_list_rt0, { id: enterprise_team_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/enterprise_team/EnterpriseTeamTestData.json')

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
    ['enterprise_team01','enterprise_team02','enterprise_team03','enterpris01','enterpris02','enterpris03'],
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
  const idmapEnvVal = process.env['GITHUB_TEST_ENTERPRISE_TEAM_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITHUB_TEST_ENTERPRISE_TEAM_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_ENTERPRISE_TEAM_ENTID']

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
  
