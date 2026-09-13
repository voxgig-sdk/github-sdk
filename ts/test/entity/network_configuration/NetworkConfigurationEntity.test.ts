

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


describe('NetworkConfigurationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.NetworkConfiguration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITHUB_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'network_configuration.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITHUB_TEST_NETWORK_CONFIGURATION_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const network_configuration_ref01_ent = client.NetworkConfiguration()
    let network_configuration_ref01_data = setup.data.new.network_configuration['network_configuration_ref01']
    network_configuration_ref01_data['org_id'] = setup.idmap['org01']

    network_configuration_ref01_data = (await network_configuration_ref01_ent.create(network_configuration_ref01_data)).data()
    assert(null != network_configuration_ref01_data.id)


    // UPDATE
    const network_configuration_ref01_data_up0: any = {}
    network_configuration_ref01_data_up0.id = network_configuration_ref01_data.id
    network_configuration_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const network_configuration_ref01_markdef_up0 = { name: 'compute_service', value: 'Mark01-network_configuration_ref01_' + setup.now }
    ;(network_configuration_ref01_data_up0 as any)[network_configuration_ref01_markdef_up0.name] = network_configuration_ref01_markdef_up0.value

    const network_configuration_ref01_resdata_up0 = (await network_configuration_ref01_ent.update(network_configuration_ref01_data_up0)).data()
    assert(network_configuration_ref01_resdata_up0.id === network_configuration_ref01_data_up0.id)

    assert((network_configuration_ref01_resdata_up0 as any)[network_configuration_ref01_markdef_up0.name] === network_configuration_ref01_markdef_up0.value)


    // LOAD
    const network_configuration_ref01_match_dt0: any = {}
    network_configuration_ref01_match_dt0.id = network_configuration_ref01_data.id
    const network_configuration_ref01_data_dt0 = (await network_configuration_ref01_ent.load(network_configuration_ref01_match_dt0)).data()
    assert(network_configuration_ref01_data_dt0.id === network_configuration_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/network_configuration/NetworkConfigurationTestData.json')

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
    ['network_configuration01','network_configuration02','network_configuration03','org01','org02','org03'],
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
  const idmapEnvVal = process.env['GITHUB_TEST_NETWORK_CONFIGURATION_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITHUB_TEST_NETWORK_CONFIGURATION_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_NETWORK_CONFIGURATION_ENTID']

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
  
