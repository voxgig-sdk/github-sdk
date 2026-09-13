
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


const { GithubSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('EmptyObjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.EmptyObject()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const empty_object_ref01_ent = client.EmptyObject()
    let empty_object_ref01_data = setup.data.new.empty_object['empty_object_ref01']
    empty_object_ref01_data['environment_id'] = setup.idmap['environment01']
    empty_object_ref01_data['org_id'] = setup.idmap['org01']
    empty_object_ref01_data['owner'] = setup.idmap['owner01']
    empty_object_ref01_data['repo'] = setup.idmap['repo01']
    empty_object_ref01_data['username'] = setup.idmap['username01']

    empty_object_ref01_data = (await empty_object_ref01_ent.create(empty_object_ref01_data)).data()
    assert(null != empty_object_ref01_data)


    // UPDATE
    const empty_object_ref01_data_up0 = {}

    const empty_object_ref01_markdef_up0 = { name: 'encrypted_value', value: 'Mark01-empty_object_ref01_' + setup.now }
    empty_object_ref01_data_up0 [empty_object_ref01_markdef_up0.name] = empty_object_ref01_markdef_up0.value

    const empty_object_ref01_resdata_up0 = (await empty_object_ref01_ent.update(empty_object_ref01_data_up0)).data()
    assert(null != empty_object_ref01_resdata_up0)

    assert(empty_object_ref01_resdata_up0[empty_object_ref01_markdef_up0.name] === empty_object_ref01_markdef_up0.value)


    // LOAD
    const empty_object_ref01_match_dt0 = {}
    const empty_object_ref01_data_dt0 = (await empty_object_ref01_ent.load(empty_object_ref01_match_dt0)).data()
    assert(null != empty_object_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/empty_object/EmptyObjectTestData.json')

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
    ['empty_object01','empty_object02','empty_object03','org01','org02','org03','repo01','repo02','repo03','org01','org02','org03','secret01','secret02','secret03','repo01','repo02','repo03','job01','job02','job03','repo01','repo02','repo03','run01','run02','run03','repo01','repo02','repo03','check_run01','check_run02','check_run03','repo01','repo02','repo03','check_suite01','check_suite02','check_suite03','repo01','repo02','repo03','secret01','secret02','secret03','repo01','repo02','repo03','environment01','environment02','environment03','user01','user02','user03','attestation01','attestation02','attestation03','repo01','repo02','repo03','environment01','environment02','environment03','secret01','secret02','secret03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_EMPTY_OBJECT_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_EMPTY_OBJECT_ENTID']

  if ('TRUE' === env.GITHUB_TEST_LIVE) {
    client = new GithubSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
    now: Date.now(),
  }

  return setup
}
  
