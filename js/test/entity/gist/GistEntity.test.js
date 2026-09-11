
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


describe('GistEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Gist()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const gist_ref01_ent = client.Gist()
    let gist_ref01_data = setup.data.new.gist['gist_ref01']
    gist_ref01_data['gist_id'] = setup.idmap['gist01']

    gist_ref01_data = (await gist_ref01_ent.create(gist_ref01_data)).data()
    assert(null != gist_ref01_data.id)


    // LIST
    const gist_ref01_match = {}

    const gist_ref01_list = (await gist_ref01_ent.list(gist_ref01_match)).map((e) => e.data())

    assert(!isempty(select(gist_ref01_list, { id: gist_ref01_data.id })))


    // UPDATE
    const gist_ref01_data_up0 = {}
    gist_ref01_data_up0.id = gist_ref01_data.id

    const gist_ref01_markdef_up0 = { name: 'comments_url', value: 'Mark01-gist_ref01_' + setup.now }
    gist_ref01_data_up0 [gist_ref01_markdef_up0.name] = gist_ref01_markdef_up0.value

    const gist_ref01_resdata_up0 = (await gist_ref01_ent.update(gist_ref01_data_up0)).data()
    assert(gist_ref01_resdata_up0.id === gist_ref01_data_up0.id)

    assert(gist_ref01_resdata_up0[gist_ref01_markdef_up0.name] === gist_ref01_markdef_up0.value)


    // LOAD
    const gist_ref01_match_dt0 = {}
    gist_ref01_match_dt0.id = gist_ref01_data.id
    const gist_ref01_data_dt0 = (await gist_ref01_ent.load(gist_ref01_match_dt0)).data()
    assert(gist_ref01_data_dt0.id === gist_ref01_data.id)


    // REMOVE
    const gist_ref01_match_rm0 = {}
    gist_ref01_match_rm0.id = gist_ref01_data.id
    await gist_ref01_ent.remove(gist_ref01_match_rm0)
  

    // LIST
    const gist_ref01_match_rt0 = {}

    const gist_ref01_list_rt0 = (await gist_ref01_ent.list(gist_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(gist_ref01_list_rt0, { id: gist_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/gist/GistTestData.json')

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
    ['gist01','gist02','gist03','comment01','comment02','comment03','gist01','gist02','gist03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_GIST_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_GIST_ENTID']

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
  
