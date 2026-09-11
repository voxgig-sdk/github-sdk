
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


describe('ProtectedBranchAdminEnforcedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.ProtectedBranchAdminEnforced()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const protected_branch_admin_enforced_ref01_ent = client.ProtectedBranchAdminEnforced()
    let protected_branch_admin_enforced_ref01_data = setup.data.new.protected_branch_admin_enforced['protected_branch_admin_enforced_ref01']
    protected_branch_admin_enforced_ref01_data['branch_id'] = setup.idmap['branch01']
    protected_branch_admin_enforced_ref01_data['owner'] = setup.idmap['owner01']
    protected_branch_admin_enforced_ref01_data['repo'] = setup.idmap['repo01']

    protected_branch_admin_enforced_ref01_data = (await protected_branch_admin_enforced_ref01_ent.create(protected_branch_admin_enforced_ref01_data)).data()
    assert(null != protected_branch_admin_enforced_ref01_data)


    // LOAD
    const protected_branch_admin_enforced_ref01_match_dt0 = {}
    const protected_branch_admin_enforced_ref01_data_dt0 = (await protected_branch_admin_enforced_ref01_ent.load(protected_branch_admin_enforced_ref01_match_dt0)).data()
    assert(null != protected_branch_admin_enforced_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/protected_branch_admin_enforced/ProtectedBranchAdminEnforcedTestData.json')

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
    ['protected_branch_admin_enforced01','protected_branch_admin_enforced02','protected_branch_admin_enforced03','repo01','repo02','repo03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_PROTECTED_BRANCH_ADMIN_ENFORCED_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_PROTECTED_BRANCH_ADMIN_ENFORCED_ENTID']

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
  
