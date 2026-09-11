

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


describe('CodespaceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Codespace()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITHUB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'codespace.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODESPACE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const codespace_ref01_ent = client.Codespace()
    let codespace_ref01_data = setup.data.new.codespace['codespace_ref01']
    codespace_ref01_data['codespace_id'] = setup.idmap['codespace01']
    codespace_ref01_data['codespace_name'] = setup.idmap['codespace_name01']
    codespace_ref01_data['member_id'] = setup.idmap['member01']
    codespace_ref01_data['org_id'] = setup.idmap['org01']
    codespace_ref01_data['owner'] = setup.idmap['owner01']
    codespace_ref01_data['repo'] = setup.idmap['repo01']
    codespace_ref01_data['secret_id'] = setup.idmap['secret01']
    codespace_ref01_data['secret_name'] = setup.idmap['secret_name01']
    codespace_ref01_data['username'] = setup.idmap['username01']

    codespace_ref01_data = (await codespace_ref01_ent.create(codespace_ref01_data)).data()
    assert(null != codespace_ref01_data.id)


    // LIST
    const codespace_ref01_match: any = {}
    codespace_ref01_match['secret_name'] = setup.idmap['secret_name01']

    const codespace_ref01_list = (await codespace_ref01_ent.list(codespace_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(codespace_ref01_list, { id: codespace_ref01_data.id })))


    // UPDATE
    const codespace_ref01_data_up0: any = {}
    codespace_ref01_data_up0.id = codespace_ref01_data.id

    const codespace_ref01_markdef_up0 = { name: 'archive_url', value: 'Mark01-codespace_ref01_' + setup.now }
    ;(codespace_ref01_data_up0 as any)[codespace_ref01_markdef_up0.name] = codespace_ref01_markdef_up0.value

    const codespace_ref01_resdata_up0 = (await codespace_ref01_ent.update(codespace_ref01_data_up0)).data()
    assert(codespace_ref01_resdata_up0.id === codespace_ref01_data_up0.id)

    assert((codespace_ref01_resdata_up0 as any)[codespace_ref01_markdef_up0.name] === codespace_ref01_markdef_up0.value)


    // LOAD
    const codespace_ref01_match_dt0: any = {}
    codespace_ref01_match_dt0.id = codespace_ref01_data.id
    const codespace_ref01_data_dt0 = (await codespace_ref01_ent.load(codespace_ref01_match_dt0)).data()
    assert(codespace_ref01_data_dt0.id === codespace_ref01_data.id)


    // REMOVE
    const codespace_ref01_match_rm0: any = { id: codespace_ref01_data.id }
    await codespace_ref01_ent.remove(codespace_ref01_match_rm0)
  

    // LIST
    const codespace_ref01_match_rt0: any = {}
    codespace_ref01_match_rt0['secret_name'] = setup.idmap['secret_name01']

    const codespace_ref01_list_rt0 = (await codespace_ref01_ent.list(codespace_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(codespace_ref01_list_rt0, { id: codespace_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/codespace/CodespaceTestData.json')

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
    ['codespace01','codespace02','codespace03','org01','org02','org03','repo01','repo02','repo03','org01','org02','org03','secret01','secret02','secret03','org01','org02','org03','member01','member02','member03','repo01','repo02','repo03','secret01','secret02','secret03','repo01','repo02','repo03','pull01','pull02','pull03','codespace01','codespace02','codespace03','export01','export02','export03','org01','org02','org03','secret01','secret02','secret03','repository01','repository02','repository03','org01','org02','org03','member01','member02','member03','codespace01','codespace02','codespace03'],
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
  const idmapEnvVal = process.env['GITHUB_TEST_CODESPACE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITHUB_TEST_CODESPACE_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_CODESPACE_ENTID']

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
  
