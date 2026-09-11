
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


describe('DeploymentBranchPolicyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.DeploymentBranchPolicy()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const deployment_branch_policy_ref01_ent = client.DeploymentBranchPolicy()
    let deployment_branch_policy_ref01_data = setup.data.new.deployment_branch_policy['deployment_branch_policy_ref01']
    deployment_branch_policy_ref01_data['environment_id'] = setup.idmap['environment01']
    deployment_branch_policy_ref01_data['environment_name'] = setup.idmap['environment_name01']
    deployment_branch_policy_ref01_data['owner'] = setup.idmap['owner01']
    deployment_branch_policy_ref01_data['repo'] = setup.idmap['repo01']

    deployment_branch_policy_ref01_data = (await deployment_branch_policy_ref01_ent.create(deployment_branch_policy_ref01_data)).data()
    assert(null != deployment_branch_policy_ref01_data.id)


    // UPDATE
    const deployment_branch_policy_ref01_data_up0 = {}
    deployment_branch_policy_ref01_data_up0.id = deployment_branch_policy_ref01_data.id
    deployment_branch_policy_ref01_data_up0 ['environment_id'] = setup.idmap['environment_id']
    deployment_branch_policy_ref01_data_up0 ['owner'] = setup.idmap['owner']
    deployment_branch_policy_ref01_data_up0 ['repo'] = setup.idmap['repo']

    const deployment_branch_policy_ref01_markdef_up0 = { name: 'name', value: 'Mark01-deployment_branch_policy_ref01_' + setup.now }
    deployment_branch_policy_ref01_data_up0 [deployment_branch_policy_ref01_markdef_up0.name] = deployment_branch_policy_ref01_markdef_up0.value

    const deployment_branch_policy_ref01_resdata_up0 = (await deployment_branch_policy_ref01_ent.update(deployment_branch_policy_ref01_data_up0)).data()
    assert(deployment_branch_policy_ref01_resdata_up0.id === deployment_branch_policy_ref01_data_up0.id)

    assert(deployment_branch_policy_ref01_resdata_up0[deployment_branch_policy_ref01_markdef_up0.name] === deployment_branch_policy_ref01_markdef_up0.value)


    // LOAD
    const deployment_branch_policy_ref01_match_dt0 = {}
    deployment_branch_policy_ref01_match_dt0.id = deployment_branch_policy_ref01_data.id
    const deployment_branch_policy_ref01_data_dt0 = (await deployment_branch_policy_ref01_ent.load(deployment_branch_policy_ref01_match_dt0)).data()
    assert(deployment_branch_policy_ref01_data_dt0.id === deployment_branch_policy_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/deployment_branch_policy/DeploymentBranchPolicyTestData.json')

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
    ['deployment_branch_policy01','deployment_branch_policy02','deployment_branch_policy03','repo01','repo02','repo03','environment01','environment02','environment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_DEPLOYMENT_BRANCH_POLICY_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_DEPLOYMENT_BRANCH_POLICY_ENTID']

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
  
