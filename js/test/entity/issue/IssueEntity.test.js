
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


describe('IssueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Issue()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const issue_ref01_ent = client.Issue()
    let issue_ref01_data = setup.data.new.issue['issue_ref01']
    issue_ref01_data['org_id'] = setup.idmap['org01']
    issue_ref01_data['owner'] = setup.idmap['owner01']
    issue_ref01_data['repo'] = setup.idmap['repo01']

    issue_ref01_data = (await issue_ref01_ent.create(issue_ref01_data)).data()
    assert(null != issue_ref01_data.id)


    // LIST
    const issue_ref01_match = {}
    issue_ref01_match['issue_number'] = setup.idmap['issue_number01']
    issue_ref01_match['owner'] = setup.idmap['owner01']
    issue_ref01_match['repo'] = setup.idmap['repo01']

    const issue_ref01_list = (await issue_ref01_ent.list(issue_ref01_match)).map((e) => e.data())

    assert(!isempty(select(issue_ref01_list, { id: issue_ref01_data.id })))


    // UPDATE
    const issue_ref01_data_up0 = {}
    issue_ref01_data_up0.id = issue_ref01_data.id
    issue_ref01_data_up0 ['owner'] = setup.idmap['owner']
    issue_ref01_data_up0 ['repo'] = setup.idmap['repo']

    const issue_ref01_markdef_up0 = { name: 'active_lock_reason', value: 'Mark01-issue_ref01_' + setup.now }
    issue_ref01_data_up0 [issue_ref01_markdef_up0.name] = issue_ref01_markdef_up0.value

    const issue_ref01_resdata_up0 = (await issue_ref01_ent.update(issue_ref01_data_up0)).data()
    assert(issue_ref01_resdata_up0.id === issue_ref01_data_up0.id)

    assert(issue_ref01_resdata_up0[issue_ref01_markdef_up0.name] === issue_ref01_markdef_up0.value)


    // LOAD
    const issue_ref01_match_dt0 = {}
    issue_ref01_match_dt0.id = issue_ref01_data.id
    const issue_ref01_data_dt0 = (await issue_ref01_ent.load(issue_ref01_match_dt0)).data()
    assert(issue_ref01_data_dt0.id === issue_ref01_data.id)


    // REMOVE
    const issue_ref01_match_rm0 = {}
    issue_ref01_match_rm0.id = issue_ref01_data.id
    await issue_ref01_ent.remove(issue_ref01_match_rm0)
  

    // LIST
    const issue_ref01_match_rt0 = {}
    issue_ref01_match_rt0['issue_number'] = setup.idmap['issue_number01']
    issue_ref01_match_rt0['owner'] = setup.idmap['owner01']
    issue_ref01_match_rt0['repo'] = setup.idmap['repo01']

    const issue_ref01_list_rt0 = (await issue_ref01_ent.list(issue_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(issue_ref01_list_rt0, { id: issue_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/issue/IssueTestData.json')

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
    ['issue01','issue02','issue03','org01','org02','org03','repo01','repo02','repo03','repo01','repo02','repo03','comment01','comment02','comment03','repo01','repo02','repo03','event01','event02','event03','repo01','repo02','repo03','assignee01','assignee02','assignee03','repo01','repo02','repo03','blocked_by01','blocked_by02','blocked_by03','repo01','repo02','repo03','label01','label02','label03','repo01','repo02','repo03','milestone01','milestone02','milestone03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_ISSUE_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_ISSUE_ENTID']

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
  
