
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


describe('IntegrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Integration()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const integration_ref01_ent = client.Integration()
    let integration_ref01_data = setup.data.new.integration['integration_ref01']
    integration_ref01_data['branch_id'] = setup.idmap['branch01']
    integration_ref01_data['owner'] = setup.idmap['owner01']
    integration_ref01_data['repo'] = setup.idmap['repo01']

    integration_ref01_data = (await integration_ref01_ent.create(integration_ref01_data)).data()
    assert(null != integration_ref01_data.id)


    // LIST
    const integration_ref01_match = {}

    const integration_ref01_list = (await integration_ref01_ent.list(integration_ref01_match)).map((e) => e.data())

    assert(!isempty(select(integration_ref01_list, { id: integration_ref01_data.id })))


    // UPDATE
    const integration_ref01_data_up0 = {}
    integration_ref01_data_up0.id = integration_ref01_data.id
    integration_ref01_data_up0 ['owner'] = setup.idmap['owner']
    integration_ref01_data_up0 ['repo'] = setup.idmap['repo']

    const integration_ref01_markdef_up0 = { name: 'client_id', value: 'Mark01-integration_ref01_' + setup.now }
    integration_ref01_data_up0 [integration_ref01_markdef_up0.name] = integration_ref01_markdef_up0.value

    const integration_ref01_resdata_up0 = (await integration_ref01_ent.update(integration_ref01_data_up0)).data()
    assert(integration_ref01_resdata_up0.id === integration_ref01_data_up0.id)

    assert(integration_ref01_resdata_up0[integration_ref01_markdef_up0.name] === integration_ref01_markdef_up0.value)


    // LOAD
    const integration_ref01_match_dt0 = {}
    integration_ref01_match_dt0.id = integration_ref01_data.id
    const integration_ref01_data_dt0 = (await integration_ref01_ent.load(integration_ref01_match_dt0)).data()
    assert(integration_ref01_data_dt0.id === integration_ref01_data.id)


    // REMOVE
    const integration_ref01_match_rm0 = {}
    integration_ref01_match_rm0.id = integration_ref01_data.id
    await integration_ref01_ent.remove(integration_ref01_match_rm0)
  

    // LIST
    const integration_ref01_match_rt0 = {}

    const integration_ref01_list_rt0 = (await integration_ref01_ent.list(integration_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(integration_ref01_list_rt0, { id: integration_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/integration/IntegrationTestData.json')

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
    ['integration01','integration02','integration03','app01','app02','app03','repo01','repo02','repo03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_INTEGRATION_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_INTEGRATION_ENTID']

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
  
