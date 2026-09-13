
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


describe('FullRepositoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.FullRepository()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const full_repository_ref01_ent = client.FullRepository()
    let full_repository_ref01_data = setup.data.new.full_repository['full_repository_ref01']
    full_repository_ref01_data['owner'] = setup.idmap['owner01']

    full_repository_ref01_data = (await full_repository_ref01_ent.create(full_repository_ref01_data)).data()
    assert(null != full_repository_ref01_data.id)


    // UPDATE
    const full_repository_ref01_data_up0 = {}
    full_repository_ref01_data_up0.id = full_repository_ref01_data.id
    full_repository_ref01_data_up0 ['owner'] = setup.idmap['owner']

    const full_repository_ref01_markdef_up0 = { name: 'archive_url', value: 'Mark01-full_repository_ref01_' + setup.now }
    full_repository_ref01_data_up0 [full_repository_ref01_markdef_up0.name] = full_repository_ref01_markdef_up0.value

    const full_repository_ref01_resdata_up0 = (await full_repository_ref01_ent.update(full_repository_ref01_data_up0)).data()
    assert(full_repository_ref01_resdata_up0.id === full_repository_ref01_data_up0.id)

    assert(full_repository_ref01_resdata_up0[full_repository_ref01_markdef_up0.name] === full_repository_ref01_markdef_up0.value)


    // LOAD
    const full_repository_ref01_match_dt0 = {}
    full_repository_ref01_match_dt0.id = full_repository_ref01_data.id
    const full_repository_ref01_data_dt0 = (await full_repository_ref01_ent.load(full_repository_ref01_match_dt0)).data()
    assert(full_repository_ref01_data_dt0.id === full_repository_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/full_repository/FullRepositoryTestData.json')

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
    ['full_repository01','full_repository02','full_repository03','org01','org02','org03','repo01','repo02','repo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_FULL_REPOSITORY_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_FULL_REPOSITORY_ENTID']

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
  
