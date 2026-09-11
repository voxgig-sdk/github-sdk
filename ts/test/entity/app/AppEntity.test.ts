

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


describe('AppEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.App()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITHUB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'app.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITHUB_TEST_APP_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const app_ref01_ent = client.App()
    let app_ref01_data = setup.data.new.app['app_ref01']
    app_ref01_data['delivery_id'] = setup.idmap['delivery01']
    app_ref01_data['installation_id'] = setup.idmap['installation01']

    app_ref01_data = (await app_ref01_ent.create(app_ref01_data)).data()
    assert(null != app_ref01_data.id)


    // LIST
    const app_ref01_match: any = {}

    const app_ref01_list = (await app_ref01_ent.list(app_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(app_ref01_list, { id: app_ref01_data.id })))


    // UPDATE
    const app_ref01_data_up0: any = {}
    app_ref01_data_up0.id = app_ref01_data.id
    app_ref01_data_up0 ['installation_id'] = setup.idmap['installation_id']

    const app_ref01_markdef_up0 = { name: 'access_tokens_url', value: 'Mark01-app_ref01_' + setup.now }
    ;(app_ref01_data_up0 as any)[app_ref01_markdef_up0.name] = app_ref01_markdef_up0.value

    const app_ref01_resdata_up0 = (await app_ref01_ent.update(app_ref01_data_up0)).data()
    assert(app_ref01_resdata_up0.id === app_ref01_data_up0.id)

    assert((app_ref01_resdata_up0 as any)[app_ref01_markdef_up0.name] === app_ref01_markdef_up0.value)


    // REMOVE
    const app_ref01_match_rm0: any = { id: app_ref01_data.id }
    await app_ref01_ent.remove(app_ref01_match_rm0)
  

    // LIST
    const app_ref01_match_rt0: any = {}

    const app_ref01_list_rt0 = (await app_ref01_ent.list(app_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(app_ref01_list_rt0, { id: app_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/app/AppTestData.json')

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
    ['app01','app02','app03','app_manifest01','app_manifest02','app_manifest03','delivery01','delivery02','delivery03','application01','application02','application03','installation01','installation02','installation03','installation01','installation02','installation03','repository01','repository02','repository03'],
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
  const idmapEnvVal = process.env['GITHUB_TEST_APP_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITHUB_TEST_APP_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_APP_ENTID']

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
  
