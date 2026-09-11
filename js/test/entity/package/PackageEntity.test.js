
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


describe('PackageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Package()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const package_ref01_ent = client.Package()
    let package_ref01_data = setup.data.new.package['package_ref01']
    package_ref01_data['org'] = setup.idmap['org01']
    package_ref01_data['org_id'] = setup.idmap['org01']
    package_ref01_data['package_id'] = setup.idmap['package01']
    package_ref01_data['package_name'] = setup.idmap['package_name01']
    package_ref01_data['package_type'] = setup.idmap['package_type01']
    package_ref01_data['username'] = setup.idmap['username01']
    package_ref01_data['version_id'] = setup.idmap['version01']

    package_ref01_data = (await package_ref01_ent.create(package_ref01_data)).data()
    assert(null != package_ref01_data.id)


    // LIST
    const package_ref01_match = {}

    const package_ref01_list = (await package_ref01_ent.list(package_ref01_match)).map((e) => e.data())

    assert(!isempty(select(package_ref01_list, { id: package_ref01_data.id })))


    // LOAD
    const package_ref01_match_dt0 = {}
    package_ref01_match_dt0.id = package_ref01_data.id
    const package_ref01_data_dt0 = (await package_ref01_ent.load(package_ref01_match_dt0)).data()
    assert(package_ref01_data_dt0.id === package_ref01_data.id)


    // REMOVE
    const package_ref01_match_rm0 = {}
    package_ref01_match_rm0.id = package_ref01_data.id
    await package_ref01_ent.remove(package_ref01_match_rm0)
  

    // LIST
    const package_ref01_match_rt0 = {}

    const package_ref01_list_rt0 = (await package_ref01_ent.list(package_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(package_ref01_list_rt0, { id: package_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/package/PackageTestData.json')

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
    ['package01','package02','package03','org01','org02','org03','user01','user02','user03','org01','org02','org03','package01','package02','package03','user01','user02','user03','package01','package02','package03','org01','org02','org03','package01','package02','package03','version01','version02','version03','user01','user02','user03','package01','package02','package03','version01','version02','version03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_PACKAGE_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_PACKAGE_ENTID']

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
  
