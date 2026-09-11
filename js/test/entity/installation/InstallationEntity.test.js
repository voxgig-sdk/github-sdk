
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


describe('InstallationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Installation()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let installation_ref01_data = Object.values(setup.data.existing.installation)[0]

    // LIST
    const installation_ref01_ent = client.Installation()
    const installation_ref01_match = {}
    installation_ref01_match['username'] = setup.idmap['username01']

    const installation_ref01_list = (await installation_ref01_ent.list(installation_ref01_match)).map((e) => e.data())


    // UPDATE
    const installation_ref01_data_up0 = {}
    installation_ref01_data_up0.id = installation_ref01_data.id

    const installation_ref01_markdef_up0 = { name: 'access_tokens_url', value: 'Mark01-installation_ref01_' + setup.now }
    installation_ref01_data_up0 [installation_ref01_markdef_up0.name] = installation_ref01_markdef_up0.value

    const installation_ref01_resdata_up0 = (await installation_ref01_ent.update(installation_ref01_data_up0)).data()
    assert(installation_ref01_resdata_up0.id === installation_ref01_data_up0.id)

    assert(installation_ref01_resdata_up0[installation_ref01_markdef_up0.name] === installation_ref01_markdef_up0.value)


    // LOAD
    const installation_ref01_match_dt0 = {}
    installation_ref01_match_dt0.id = installation_ref01_data.id
    const installation_ref01_data_dt0 = (await installation_ref01_ent.load(installation_ref01_match_dt0)).data()
    assert(installation_ref01_data_dt0.id === installation_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/installation/InstallationTestData.json')

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
    ['installation01','installation02','installation03','org01','org02','org03','repo01','repo02','repo03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_INSTALLATION_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_INSTALLATION_ENTID']

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
  
