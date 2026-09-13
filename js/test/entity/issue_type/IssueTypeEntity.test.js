
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


describe('IssueTypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.IssueType()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const issue_type_ref01_ent = client.IssueType()
    let issue_type_ref01_data = setup.data.new.issue_type['issue_type_ref01']
    issue_type_ref01_data['org_id'] = setup.idmap['org01']

    issue_type_ref01_data = (await issue_type_ref01_ent.create(issue_type_ref01_data)).data()
    assert(null != issue_type_ref01_data.id)


    // LIST
    const issue_type_ref01_match = {}
    issue_type_ref01_match['org_id'] = setup.idmap['org01']

    const issue_type_ref01_list = (await issue_type_ref01_ent.list(issue_type_ref01_match)).map((e) => e.data())

    assert(!isempty(select(issue_type_ref01_list, { id: issue_type_ref01_data.id })))


    // UPDATE
    const issue_type_ref01_data_up0 = {}
    issue_type_ref01_data_up0.id = issue_type_ref01_data.id
    issue_type_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const issue_type_ref01_markdef_up0 = { name: 'color', value: 'Mark01-issue_type_ref01_' + setup.now }
    issue_type_ref01_data_up0 [issue_type_ref01_markdef_up0.name] = issue_type_ref01_markdef_up0.value

    const issue_type_ref01_resdata_up0 = (await issue_type_ref01_ent.update(issue_type_ref01_data_up0)).data()
    assert(issue_type_ref01_resdata_up0.id === issue_type_ref01_data_up0.id)

    assert(issue_type_ref01_resdata_up0[issue_type_ref01_markdef_up0.name] === issue_type_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/issue_type/IssueTypeTestData.json')

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
    ['issue_type01','issue_type02','issue_type03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_ISSUE_TYPE_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_ISSUE_TYPE_ENTID']

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
  
