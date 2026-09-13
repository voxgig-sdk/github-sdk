
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


describe('ActionsHostedRunnerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.ActionsHostedRunner()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const actions_hosted_runner_ref01_ent = client.ActionsHostedRunner()
    let actions_hosted_runner_ref01_data = setup.data.new.actions_hosted_runner['actions_hosted_runner_ref01']
    actions_hosted_runner_ref01_data['org_id'] = setup.idmap['org01']

    actions_hosted_runner_ref01_data = (await actions_hosted_runner_ref01_ent.create(actions_hosted_runner_ref01_data)).data()
    assert(null != actions_hosted_runner_ref01_data.id)


    // UPDATE
    const actions_hosted_runner_ref01_data_up0 = {}
    actions_hosted_runner_ref01_data_up0.id = actions_hosted_runner_ref01_data.id
    actions_hosted_runner_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const actions_hosted_runner_ref01_markdef_up0 = { name: 'last_active_on', value: 'Mark01-actions_hosted_runner_ref01_' + setup.now }
    actions_hosted_runner_ref01_data_up0 [actions_hosted_runner_ref01_markdef_up0.name] = actions_hosted_runner_ref01_markdef_up0.value

    const actions_hosted_runner_ref01_resdata_up0 = (await actions_hosted_runner_ref01_ent.update(actions_hosted_runner_ref01_data_up0)).data()
    assert(actions_hosted_runner_ref01_resdata_up0.id === actions_hosted_runner_ref01_data_up0.id)

    assert(actions_hosted_runner_ref01_resdata_up0[actions_hosted_runner_ref01_markdef_up0.name] === actions_hosted_runner_ref01_markdef_up0.value)


    // LOAD
    const actions_hosted_runner_ref01_match_dt0 = {}
    actions_hosted_runner_ref01_match_dt0.id = actions_hosted_runner_ref01_data.id
    const actions_hosted_runner_ref01_data_dt0 = (await actions_hosted_runner_ref01_ent.load(actions_hosted_runner_ref01_match_dt0)).data()
    assert(actions_hosted_runner_ref01_data_dt0.id === actions_hosted_runner_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/actions_hosted_runner/ActionsHostedRunnerTestData.json')

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
    ['actions_hosted_runner01','actions_hosted_runner02','actions_hosted_runner03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_ACTIONS_HOSTED_RUNNER_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_ACTIONS_HOSTED_RUNNER_ENTID']

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
  
