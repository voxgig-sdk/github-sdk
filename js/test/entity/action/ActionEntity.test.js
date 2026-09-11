
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


describe('ActionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Action()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const action_ref01_ent = client.Action()
    let action_ref01_data = setup.data.new.action['action_ref01']
    action_ref01_data['artifact_id'] = setup.idmap['artifact01']
    action_ref01_data['attempt_number'] = setup.idmap['attempt_number01']
    action_ref01_data['environment_id'] = setup.idmap['environment01']
    action_ref01_data['environment_name'] = setup.idmap['environment_name01']
    action_ref01_data['name'] = setup.idmap['name01']
    action_ref01_data['org_id'] = setup.idmap['org01']
    action_ref01_data['owner'] = setup.idmap['owner01']
    action_ref01_data['repo'] = setup.idmap['repo01']
    action_ref01_data['run_id'] = setup.idmap['run01']
    action_ref01_data['runner_group_id'] = setup.idmap['runner_group01']
    action_ref01_data['runner_id'] = setup.idmap['runner01']
    action_ref01_data['secret_id'] = setup.idmap['secret01']
    action_ref01_data['secret_name'] = setup.idmap['secret_name01']
    action_ref01_data['variable_id'] = setup.idmap['variable01']
    action_ref01_data['workflow_id'] = setup.idmap['workflow01']

    action_ref01_data = (await action_ref01_ent.create(action_ref01_data)).data()
    assert(null != action_ref01_data.id)


    // LIST
    const action_ref01_match = {}
    action_ref01_match['org_id'] = setup.idmap['org01']

    const action_ref01_list = (await action_ref01_ent.list(action_ref01_match)).map((e) => e.data())

    assert(!isempty(select(action_ref01_list, { id: action_ref01_data.id })))


    // UPDATE
    const action_ref01_data_up0 = {}
    action_ref01_data_up0.id = action_ref01_data.id

    const action_ref01_markdef_up0 = { name: 'access_level', value: 'Mark01-action_ref01_' + setup.now }
    action_ref01_data_up0 [action_ref01_markdef_up0.name] = action_ref01_markdef_up0.value

    const action_ref01_resdata_up0 = (await action_ref01_ent.update(action_ref01_data_up0)).data()
    assert(action_ref01_resdata_up0.id === action_ref01_data_up0.id)

    assert(action_ref01_resdata_up0[action_ref01_markdef_up0.name] === action_ref01_markdef_up0.value)


    // LOAD
    const action_ref01_match_dt0 = {}
    action_ref01_match_dt0.id = action_ref01_data.id
    const action_ref01_data_dt0 = (await action_ref01_ent.load(action_ref01_match_dt0)).data()
    assert(action_ref01_data_dt0.id === action_ref01_data.id)


    // REMOVE
    const action_ref01_match_rm0 = {}
    action_ref01_match_rm0.id = action_ref01_data.id
    await action_ref01_ent.remove(action_ref01_match_rm0)
  

    // LIST
    const action_ref01_match_rt0 = {}
    action_ref01_match_rt0['org_id'] = setup.idmap['org01']

    const action_ref01_list_rt0 = (await action_ref01_ent.list(action_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(action_ref01_list_rt0, { id: action_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/action/ActionTestData.json')

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
    ['action01','action02','action03','org01','org02','org03','repo01','repo02','repo03','user01','user02','user03','org01','org02','org03','hosted_runner01','hosted_runner02','hosted_runner03','org01','org02','org03','repository01','repository02','repository03','org01','org02','org03','runner_group01','runner_group02','runner_group03','org01','org02','org03','runner01','runner02','runner03','org01','org02','org03','secret01','secret02','secret03','org01','org02','org03','variable01','variable02','variable03','repo01','repo02','repo03','artifact01','artifact02','artifact03','repo01','repo02','repo03','cache01','cache02','cache03','repo01','repo02','repo03','job01','job02','job03','repo01','repo02','repo03','runner01','runner02','runner03','repo01','repo02','repo03','run01','run02','run03','repo01','repo02','repo03','secret01','secret02','secret03','repo01','repo02','repo03','variable01','variable02','variable03','repo01','repo02','repo03','workflow01','workflow02','workflow03','repo01','repo02','repo03','environment01','environment02','environment03','org01','org02','org03','runner_group01','runner_group02','runner_group03','repository01','repository02','repository03','org01','org02','org03','runner_group01','runner_group02','runner_group03','runner01','runner02','runner03','org01','org02','org03','runner01','runner02','runner03','label01','label02','label03','org01','org02','org03','secret01','secret02','secret03','repository01','repository02','repository03','org01','org02','org03','variable01','variable02','variable03','repository01','repository02','repository03','repo01','repo02','repo03','runner01','runner02','runner03','label01','label02','label03','repo01','repo02','repo03','run01','run02','run03','attempt01','attempt02','attempt03','repo01','repo02','repo03','environment01','environment02','environment03','secret01','secret02','secret03','repo01','repo02','repo03','environment01','environment02','environment03','variable01','variable02','variable03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_ACTION_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_ACTION_ENTID']

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
  
