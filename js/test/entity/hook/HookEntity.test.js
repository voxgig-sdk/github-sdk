
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


describe('HookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Hook()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const hook_ref01_ent = client.Hook()
    let hook_ref01_data = setup.data.new.hook['hook_ref01']
    hook_ref01_data['owner'] = setup.idmap['owner01']
    hook_ref01_data['repo'] = setup.idmap['repo01']

    hook_ref01_data = (await hook_ref01_ent.create(hook_ref01_data)).data()
    assert(null != hook_ref01_data.id)


    // LIST
    const hook_ref01_match = {}
    hook_ref01_match['owner'] = setup.idmap['owner01']
    hook_ref01_match['repo'] = setup.idmap['repo01']

    const hook_ref01_list = (await hook_ref01_ent.list(hook_ref01_match)).map((e) => e.data())

    assert(!isempty(select(hook_ref01_list, { id: hook_ref01_data.id })))


    // UPDATE
    const hook_ref01_data_up0 = {}
    hook_ref01_data_up0.id = hook_ref01_data.id
    hook_ref01_data_up0 ['owner'] = setup.idmap['owner']
    hook_ref01_data_up0 ['repo'] = setup.idmap['repo']

    const hook_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-hook_ref01_' + setup.now }
    hook_ref01_data_up0 [hook_ref01_markdef_up0.name] = hook_ref01_markdef_up0.value

    const hook_ref01_resdata_up0 = (await hook_ref01_ent.update(hook_ref01_data_up0)).data()
    assert(hook_ref01_resdata_up0.id === hook_ref01_data_up0.id)

    assert(hook_ref01_resdata_up0[hook_ref01_markdef_up0.name] === hook_ref01_markdef_up0.value)


    // LOAD
    const hook_ref01_match_dt0 = {}
    hook_ref01_match_dt0.id = hook_ref01_data.id
    const hook_ref01_data_dt0 = (await hook_ref01_ent.load(hook_ref01_match_dt0)).data()
    assert(hook_ref01_data_dt0.id === hook_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/hook/HookTestData.json')

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
    ['hook01','hook02','hook03','repo01','repo02','repo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_HOOK_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_HOOK_ENTID']

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
  
