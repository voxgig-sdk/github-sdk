
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


describe('OrgMembershipEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.OrgMembership()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let org_membership_ref01_data = Object.values(setup.data.existing.org_membership)[0]

    // UPDATE
    const org_membership_ref01_ent = client.OrgMembership()
    const org_membership_ref01_data_up0 = {}
    org_membership_ref01_data_up0.id = org_membership_ref01_data.id
    org_membership_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const org_membership_ref01_markdef_up0 = { name: 'organization_url', value: 'Mark01-org_membership_ref01_' + setup.now }
    org_membership_ref01_data_up0 [org_membership_ref01_markdef_up0.name] = org_membership_ref01_markdef_up0.value

    const org_membership_ref01_resdata_up0 = (await org_membership_ref01_ent.update(org_membership_ref01_data_up0)).data()
    assert(org_membership_ref01_resdata_up0.id === org_membership_ref01_data_up0.id)

    assert(org_membership_ref01_resdata_up0[org_membership_ref01_markdef_up0.name] === org_membership_ref01_markdef_up0.value)


    // LOAD
    const org_membership_ref01_match_dt0 = {}
    org_membership_ref01_match_dt0.id = org_membership_ref01_data.id
    const org_membership_ref01_data_dt0 = (await org_membership_ref01_ent.load(org_membership_ref01_match_dt0)).data()
    assert(org_membership_ref01_data_dt0.id === org_membership_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/org_membership/OrgMembershipTestData.json')

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
    ['org_membership01','org_membership02','org_membership03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_ORG_MEMBERSHIP_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_ORG_MEMBERSHIP_ENTID']

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
  
