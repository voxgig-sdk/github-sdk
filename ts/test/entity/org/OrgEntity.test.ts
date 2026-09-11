

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


describe('OrgEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Org()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITHUB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'org.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITHUB_TEST_ORG_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const org_ref01_ent = client.Org()
    let org_ref01_data = setup.data.new.org['org_ref01']
    org_ref01_data['artifact_id'] = setup.idmap['artifact01']
    org_ref01_data['org'] = setup.idmap['org01']
    org_ref01_data['team_slug'] = setup.idmap['team_slug01']
    org_ref01_data['username'] = setup.idmap['username01']

    org_ref01_data = (await org_ref01_ent.create(org_ref01_data)).data()
    assert(null != org_ref01_data.id)


    // LIST
    const org_ref01_match: any = {}
    org_ref01_match['org'] = setup.idmap['org01']

    const org_ref01_list = (await org_ref01_ent.list(org_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(org_ref01_list, { id: org_ref01_data.id })))


    // UPDATE
    const org_ref01_data_up0: any = {}
    org_ref01_data_up0.id = org_ref01_data.id

    const org_ref01_markdef_up0 = { name: 'access_tokens_url', value: 'Mark01-org_ref01_' + setup.now }
    ;(org_ref01_data_up0 as any)[org_ref01_markdef_up0.name] = org_ref01_markdef_up0.value

    const org_ref01_resdata_up0 = (await org_ref01_ent.update(org_ref01_data_up0)).data()
    assert(org_ref01_resdata_up0.id === org_ref01_data_up0.id)

    assert((org_ref01_resdata_up0 as any)[org_ref01_markdef_up0.name] === org_ref01_markdef_up0.value)


    // LOAD
    const org_ref01_match_dt0: any = {}
    org_ref01_match_dt0.id = org_ref01_data.id
    const org_ref01_data_dt0 = (await org_ref01_ent.load(org_ref01_match_dt0)).data()
    assert(org_ref01_data_dt0.id === org_ref01_data.id)


    // REMOVE
    const org_ref01_match_rm0: any = { id: org_ref01_data.id }
    await org_ref01_ent.remove(org_ref01_match_rm0)
  

    // LIST
    const org_ref01_match_rt0: any = {}
    org_ref01_match_rt0['org'] = setup.idmap['org01']

    const org_ref01_list_rt0 = (await org_ref01_ent.list(org_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(org_ref01_list_rt0, { id: org_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/org/OrgTestData.json')

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
    ['org01','org02','org03','artifact01','artifact02','artifact03','digest01','digest02','digest03','attestation01','attestation02','attestation03','block01','block02','block03','hook01','hook02','hook03','invitation01','invitation02','invitation03','issue_type01','issue_type02','issue_type03','member01','member02','member03','membership01','membership02','membership03','outside_collaborator01','outside_collaborator02','outside_collaborator03','personal_access_token_request01','personal_access_token_request02','personal_access_token_request03','personal_access_token01','personal_access_token02','personal_access_token03','schema01','schema02','schema03','public_member01','public_member02','public_member03','org01','org02','org03','hook01','hook02','hook03','delivery01','delivery02','delivery03','org01','org02','org03','team01','team02','team03','org01','org02','org03','user01','user02','user03'],
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
  const idmapEnvVal = process.env['GITHUB_TEST_ORG_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITHUB_TEST_ORG_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_ORG_ENTID']

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
  
