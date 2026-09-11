
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


describe('CampaignEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Campaign()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const campaign_ref01_ent = client.Campaign()
    let campaign_ref01_data = setup.data.new.campaign['campaign_ref01']
    campaign_ref01_data['org_id'] = setup.idmap['org01']

    campaign_ref01_data = (await campaign_ref01_ent.create(campaign_ref01_data)).data()
    assert(null != campaign_ref01_data.id)


    // LIST
    const campaign_ref01_match = {}
    campaign_ref01_match['org_id'] = setup.idmap['org01']

    const campaign_ref01_list = (await campaign_ref01_ent.list(campaign_ref01_match)).map((e) => e.data())

    assert(!isempty(select(campaign_ref01_list, { id: campaign_ref01_data.id })))


    // UPDATE
    const campaign_ref01_data_up0 = {}
    campaign_ref01_data_up0.id = campaign_ref01_data.id
    campaign_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const campaign_ref01_markdef_up0 = { name: 'closed_at', value: 'Mark01-campaign_ref01_' + setup.now }
    campaign_ref01_data_up0 [campaign_ref01_markdef_up0.name] = campaign_ref01_markdef_up0.value

    const campaign_ref01_resdata_up0 = (await campaign_ref01_ent.update(campaign_ref01_data_up0)).data()
    assert(campaign_ref01_resdata_up0.id === campaign_ref01_data_up0.id)

    assert(campaign_ref01_resdata_up0[campaign_ref01_markdef_up0.name] === campaign_ref01_markdef_up0.value)


    // LOAD
    const campaign_ref01_match_dt0 = {}
    campaign_ref01_match_dt0.id = campaign_ref01_data.id
    const campaign_ref01_data_dt0 = (await campaign_ref01_ent.load(campaign_ref01_match_dt0)).data()
    assert(campaign_ref01_data_dt0.id === campaign_ref01_data.id)


    // REMOVE
    const campaign_ref01_match_rm0 = {}
    campaign_ref01_match_rm0.id = campaign_ref01_data.id
    await campaign_ref01_ent.remove(campaign_ref01_match_rm0)
  

    // LIST
    const campaign_ref01_match_rt0 = {}
    campaign_ref01_match_rt0['org_id'] = setup.idmap['org01']

    const campaign_ref01_list_rt0 = (await campaign_ref01_ent.list(campaign_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(campaign_ref01_list_rt0, { id: campaign_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/campaign/CampaignTestData.json')

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
    ['campaign01','campaign02','campaign03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_CAMPAIGN_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_CAMPAIGN_ENTID']

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
  
