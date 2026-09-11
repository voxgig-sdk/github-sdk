
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


describe('DependabotEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Dependabot()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dependabot_ref01_data = Object.values(setup.data.existing.dependabot)[0]

    // LIST
    const dependabot_ref01_ent = client.Dependabot()
    const dependabot_ref01_match = {}

    const dependabot_ref01_list = (await dependabot_ref01_ent.list(dependabot_ref01_match)).map((e) => e.data())


    // UPDATE
    const dependabot_ref01_data_up0 = {}
    dependabot_ref01_data_up0.id = dependabot_ref01_data.id

    const dependabot_ref01_markdef_up0 = { name: 'archive_url', value: 'Mark01-dependabot_ref01_' + setup.now }
    dependabot_ref01_data_up0 [dependabot_ref01_markdef_up0.name] = dependabot_ref01_markdef_up0.value

    const dependabot_ref01_resdata_up0 = (await dependabot_ref01_ent.update(dependabot_ref01_data_up0)).data()
    assert(dependabot_ref01_resdata_up0.id === dependabot_ref01_data_up0.id)

    assert(dependabot_ref01_resdata_up0[dependabot_ref01_markdef_up0.name] === dependabot_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/dependabot/DependabotTestData.json')

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
    ['dependabot01','dependabot02','dependabot03','organization01','organization02','organization03','org01','org02','org03','repo01','repo02','repo03','org01','org02','org03','secret01','secret02','secret03','repo01','repo02','repo03','secret01','secret02','secret03','org01','org02','org03','secret01','secret02','secret03','repository01','repository02','repository03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_DEPENDABOT_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_DEPENDABOT_ENTID']

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
  
