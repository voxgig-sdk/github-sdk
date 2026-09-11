

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


describe('CodeSecurityConfigurationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.CodeSecurityConfiguration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITHUB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'code_security_configuration.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const code_security_configuration_ref01_ent = client.CodeSecurityConfiguration()
    let code_security_configuration_ref01_data = setup.data.new.code_security_configuration['code_security_configuration_ref01']
    code_security_configuration_ref01_data['enterprise'] = setup.idmap['enterprise01']
    code_security_configuration_ref01_data['org_id'] = setup.idmap['org01']
    code_security_configuration_ref01_data['owner'] = setup.idmap['owner01']

    code_security_configuration_ref01_data = (await code_security_configuration_ref01_ent.create(code_security_configuration_ref01_data)).data()
    assert(null != code_security_configuration_ref01_data.id)


    // LIST
    const code_security_configuration_ref01_match: any = {}
    code_security_configuration_ref01_match['enterprise'] = setup.idmap['enterprise01']

    const code_security_configuration_ref01_list = (await code_security_configuration_ref01_ent.list(code_security_configuration_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(code_security_configuration_ref01_list, { id: code_security_configuration_ref01_data.id })))


    // UPDATE
    const code_security_configuration_ref01_data_up0: any = {}
    code_security_configuration_ref01_data_up0.id = code_security_configuration_ref01_data.id
    code_security_configuration_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const code_security_configuration_ref01_markdef_up0 = { name: 'advanced_security', value: 'Mark01-code_security_configuration_ref01_' + setup.now }
    ;(code_security_configuration_ref01_data_up0 as any)[code_security_configuration_ref01_markdef_up0.name] = code_security_configuration_ref01_markdef_up0.value

    const code_security_configuration_ref01_resdata_up0 = (await code_security_configuration_ref01_ent.update(code_security_configuration_ref01_data_up0)).data()
    assert(code_security_configuration_ref01_resdata_up0.id === code_security_configuration_ref01_data_up0.id)

    assert((code_security_configuration_ref01_resdata_up0 as any)[code_security_configuration_ref01_markdef_up0.name] === code_security_configuration_ref01_markdef_up0.value)


    // LOAD
    const code_security_configuration_ref01_match_dt0: any = {}
    code_security_configuration_ref01_match_dt0.id = code_security_configuration_ref01_data.id
    const code_security_configuration_ref01_data_dt0 = (await code_security_configuration_ref01_ent.load(code_security_configuration_ref01_match_dt0)).data()
    assert(code_security_configuration_ref01_data_dt0.id === code_security_configuration_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/code_security_configuration/CodeSecurityConfigurationTestData.json')

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
    ['code_security_configuration01','code_security_configuration02','code_security_configuration03','enterpris01','enterpris02','enterpris03','org01','org02','org03','repo01','repo02','repo03','enterpris01','enterpris02','enterpris03','configuration01','configuration02','configuration03','org01','org02','org03','configuration01','configuration02','configuration03'],
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
  const idmapEnvVal = process.env['GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_CODE_SECURITY_CONFIGURATION_ENTID']

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
  
