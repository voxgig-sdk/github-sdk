
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


describe('OrgEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Org()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const org_ref01_ent = client.Org()
    let org_ref01_data = setup.data.new.org['org_ref01']
    org_ref01_data['artifact_id'] = setup.idmap['artifact01']
    org_ref01_data['org'] = setup.idmap['org01']
    org_ref01_data['team_slug'] = setup.idmap['team_slug01']
    org_ref01_data['username'] = setup.idmap['username01']

    org_ref01_data = (await org_ref01_ent.create(org_ref01_data)).data()
    assert(null != org_ref01_data.id)


    // LIST
    const org_ref01_match = {}
    org_ref01_match['org'] = setup.idmap['org01']

    const org_ref01_list = (await org_ref01_ent.list(org_ref01_match)).map((e) => e.data())

    assert(!isempty(select(org_ref01_list, { id: org_ref01_data.id })))


    // UPDATE
    const org_ref01_data_up0 = {}
    org_ref01_data_up0.id = org_ref01_data.id

    const org_ref01_markdef_up0 = { name: 'access_tokens_url', value: 'Mark01-org_ref01_' + setup.now }
    org_ref01_data_up0 [org_ref01_markdef_up0.name] = org_ref01_markdef_up0.value

    const org_ref01_resdata_up0 = (await org_ref01_ent.update(org_ref01_data_up0)).data()
    assert(org_ref01_resdata_up0.id === org_ref01_data_up0.id)

    assert(org_ref01_resdata_up0[org_ref01_markdef_up0.name] === org_ref01_markdef_up0.value)


    // LOAD
    const org_ref01_match_dt0 = {}
    org_ref01_match_dt0.id = org_ref01_data.id
    const org_ref01_data_dt0 = (await org_ref01_ent.load(org_ref01_match_dt0)).data()
    assert(org_ref01_data_dt0.id === org_ref01_data.id)


    // REMOVE
    const org_ref01_match_rm0 = {}
    org_ref01_match_rm0.id = org_ref01_data.id
    await org_ref01_ent.remove(org_ref01_match_rm0)
  

    // LIST
    const org_ref01_match_rt0 = {}
    org_ref01_match_rt0['org'] = setup.idmap['org01']

    const org_ref01_list_rt0 = (await org_ref01_ent.list(org_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(org_ref01_list_rt0, { id: org_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/org/OrgTestData.json')

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
    ['org01','org02','org03','artifact01','artifact02','artifact03','digest01','digest02','digest03','attestation01','attestation02','attestation03','block01','block02','block03','hook01','hook02','hook03','invitation01','invitation02','invitation03','issue_type01','issue_type02','issue_type03','member01','member02','member03','membership01','membership02','membership03','outside_collaborator01','outside_collaborator02','outside_collaborator03','personal_access_token_request01','personal_access_token_request02','personal_access_token_request03','personal_access_token01','personal_access_token02','personal_access_token03','schema01','schema02','schema03','public_member01','public_member02','public_member03','org01','org02','org03','hook01','hook02','hook03','delivery01','delivery02','delivery03','org01','org02','org03','team01','team02','team03','org01','org02','org03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_ORG_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_ORG_ENTID']

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
  
