
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


describe('CustomPropertyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.CustomProperty()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_property_ref01_data = Object.values(setup.data.existing.custom_property)[0]

    // LIST
    const custom_property_ref01_ent = client.CustomProperty()
    const custom_property_ref01_match = {}
    custom_property_ref01_match['org_id'] = setup.idmap['org01']

    const custom_property_ref01_list = (await custom_property_ref01_ent.list(custom_property_ref01_match)).map((e) => e.data())


    // UPDATE
    const custom_property_ref01_data_up0 = {}
    custom_property_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const custom_property_ref01_markdef_up0 = { name: 'description', value: 'Mark01-custom_property_ref01_' + setup.now }
    custom_property_ref01_data_up0 [custom_property_ref01_markdef_up0.name] = custom_property_ref01_markdef_up0.value

    const custom_property_ref01_resdata_up0 = (await custom_property_ref01_ent.update(custom_property_ref01_data_up0)).data()
    assert(null != custom_property_ref01_resdata_up0)

    assert(custom_property_ref01_resdata_up0[custom_property_ref01_markdef_up0.name] === custom_property_ref01_markdef_up0.value)


    // LOAD
    const custom_property_ref01_match_dt0 = {}
    const custom_property_ref01_data_dt0 = (await custom_property_ref01_ent.load(custom_property_ref01_match_dt0)).data()
    assert(null != custom_property_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom_property/CustomPropertyTestData.json')

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
    ['custom_property01','custom_property02','custom_property03','org01','org02','org03','org01','org02','org03','schema01','schema02','schema03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_CUSTOM_PROPERTY_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_CUSTOM_PROPERTY_ENTID']

  if ('TRUE' === env.GITHUB_TEST_LIVE) {
    client = new GithubSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.GITHUB_APIKEY,
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
  
