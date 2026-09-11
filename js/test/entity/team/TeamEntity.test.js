
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


describe('TeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Team()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const team_ref01_ent = client.Team()
    let team_ref01_data = setup.data.new.team['team_ref01']
    team_ref01_data['branch_id'] = setup.idmap['branch01']
    team_ref01_data['discussion_id'] = setup.idmap['discussion01']
    team_ref01_data['discussion_number'] = setup.idmap['discussion_number01']
    team_ref01_data['invitation_id'] = setup.idmap['invitation01']
    team_ref01_data['org'] = setup.idmap['org01']
    team_ref01_data['org_id'] = setup.idmap['org01']
    team_ref01_data['organization_role_id'] = setup.idmap['organization_role01']
    team_ref01_data['owner'] = setup.idmap['owner01']
    team_ref01_data['repo'] = setup.idmap['repo01']
    team_ref01_data['team_id'] = setup.idmap['team01']
    team_ref01_data['team_slug'] = setup.idmap['team_slug01']

    team_ref01_data = (await team_ref01_ent.create(team_ref01_data)).data()
    assert(null != team_ref01_data.id)


    // LIST
    const team_ref01_match = {}

    const team_ref01_list = (await team_ref01_ent.list(team_ref01_match)).map((e) => e.data())

    assert(!isempty(select(team_ref01_list, { id: team_ref01_data.id })))


    // UPDATE
    const team_ref01_data_up0 = {}
    team_ref01_data_up0.id = team_ref01_data.id

    const team_ref01_markdef_up0 = { name: 'archive_url', value: 'Mark01-team_ref01_' + setup.now }
    team_ref01_data_up0 [team_ref01_markdef_up0.name] = team_ref01_markdef_up0.value

    const team_ref01_resdata_up0 = (await team_ref01_ent.update(team_ref01_data_up0)).data()
    assert(team_ref01_resdata_up0.id === team_ref01_data_up0.id)

    assert(team_ref01_resdata_up0[team_ref01_markdef_up0.name] === team_ref01_markdef_up0.value)


    // LOAD
    const team_ref01_match_dt0 = {}
    team_ref01_match_dt0.id = team_ref01_data.id
    const team_ref01_data_dt0 = (await team_ref01_ent.load(team_ref01_match_dt0)).data()
    assert(team_ref01_data_dt0.id === team_ref01_data.id)


    // REMOVE
    const team_ref01_match_rm0 = {}
    team_ref01_match_rm0.id = team_ref01_data.id
    await team_ref01_ent.remove(team_ref01_match_rm0)
  

    // LIST
    const team_ref01_match_rt0 = {}

    const team_ref01_list_rt0 = (await team_ref01_ent.list(team_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(team_ref01_list_rt0, { id: team_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/team/TeamTestData.json')

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
    ['team01','team02','team03','org01','org02','org03','member01','member02','member03','org01','org02','org03','invitation01','invitation02','invitation03','org01','org02','org03','organization_role01','organization_role02','organization_role03','org01','org02','org03','team01','team02','team03','repo01','repo02','repo03','branch01','branch02','branch03','org01','org02','org03','team01','team02','team03','discussion01','discussion02','discussion03','org01','org02','org03','team01','team02','team03','membership01','membership02','membership03','org01','org02','org03','team01','team02','team03','project01','project02','project03','org01','org02','org03','team01','team02','team03','repo01','repo02','repo03','org01','org02','org03','team01','team02','team03','discussion01','discussion02','discussion03','comment01','comment02','comment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_TEAM_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_TEAM_ENTID']

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
  
