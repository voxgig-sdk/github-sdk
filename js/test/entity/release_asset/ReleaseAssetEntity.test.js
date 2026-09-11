
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


describe('ReleaseAssetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.ReleaseAsset()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const release_asset_ref01_ent = client.ReleaseAsset()
    let release_asset_ref01_data = setup.data.new.release_asset['release_asset_ref01']
    release_asset_ref01_data['owner'] = setup.idmap['owner01']
    release_asset_ref01_data['release_id'] = setup.idmap['release01']
    release_asset_ref01_data['repo'] = setup.idmap['repo01']

    release_asset_ref01_data = (await release_asset_ref01_ent.create(release_asset_ref01_data)).data()
    assert(null != release_asset_ref01_data.id)


    // LIST
    const release_asset_ref01_match = {}
    release_asset_ref01_match['owner'] = setup.idmap['owner01']
    release_asset_ref01_match['release_id'] = setup.idmap['release01']
    release_asset_ref01_match['repo'] = setup.idmap['repo01']

    const release_asset_ref01_list = (await release_asset_ref01_ent.list(release_asset_ref01_match)).map((e) => e.data())

    assert(!isempty(select(release_asset_ref01_list, { id: release_asset_ref01_data.id })))


    // UPDATE
    const release_asset_ref01_data_up0 = {}
    release_asset_ref01_data_up0.id = release_asset_ref01_data.id
    release_asset_ref01_data_up0 ['owner'] = setup.idmap['owner']
    release_asset_ref01_data_up0 ['repo'] = setup.idmap['repo']

    const release_asset_ref01_markdef_up0 = { name: 'avatar_url', value: 'Mark01-release_asset_ref01_' + setup.now }
    release_asset_ref01_data_up0 [release_asset_ref01_markdef_up0.name] = release_asset_ref01_markdef_up0.value

    const release_asset_ref01_resdata_up0 = (await release_asset_ref01_ent.update(release_asset_ref01_data_up0)).data()
    assert(release_asset_ref01_resdata_up0.id === release_asset_ref01_data_up0.id)

    assert(release_asset_ref01_resdata_up0[release_asset_ref01_markdef_up0.name] === release_asset_ref01_markdef_up0.value)


    // LOAD
    const release_asset_ref01_match_dt0 = {}
    release_asset_ref01_match_dt0.id = release_asset_ref01_data.id
    const release_asset_ref01_data_dt0 = (await release_asset_ref01_ent.load(release_asset_ref01_match_dt0)).data()
    assert(release_asset_ref01_data_dt0.id === release_asset_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/release_asset/ReleaseAssetTestData.json')

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
    ['release_asset01','release_asset02','release_asset03','repo01','repo02','repo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_RELEASE_ASSET_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_RELEASE_ASSET_ENTID']

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
  
