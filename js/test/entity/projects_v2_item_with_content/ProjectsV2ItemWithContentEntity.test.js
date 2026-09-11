
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


describe('ProjectsV2ItemWithContentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.ProjectsV2ItemWithContent()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let projects_v2_item_with_content_ref01_data = Object.values(setup.data.existing.projects_v2_item_with_content)[0]

    // LIST
    const projects_v2_item_with_content_ref01_ent = client.ProjectsV2ItemWithContent()
    const projects_v2_item_with_content_ref01_match = {}
    projects_v2_item_with_content_ref01_match['project_number'] = setup.idmap['project_number01']
    projects_v2_item_with_content_ref01_match['username'] = setup.idmap['username01']

    const projects_v2_item_with_content_ref01_list = (await projects_v2_item_with_content_ref01_ent.list(projects_v2_item_with_content_ref01_match)).map((e) => e.data())


    // UPDATE
    const projects_v2_item_with_content_ref01_data_up0 = {}
    projects_v2_item_with_content_ref01_data_up0.id = projects_v2_item_with_content_ref01_data.id
    projects_v2_item_with_content_ref01_data_up0 ['projects_v2_id'] = setup.idmap['projects_v2_id']
    projects_v2_item_with_content_ref01_data_up0 ['username'] = setup.idmap['username']

    const projects_v2_item_with_content_ref01_markdef_up0 = { name: 'archived_at', value: 'Mark01-projects_v2_item_with_content_ref01_' + setup.now }
    projects_v2_item_with_content_ref01_data_up0 [projects_v2_item_with_content_ref01_markdef_up0.name] = projects_v2_item_with_content_ref01_markdef_up0.value

    const projects_v2_item_with_content_ref01_resdata_up0 = (await projects_v2_item_with_content_ref01_ent.update(projects_v2_item_with_content_ref01_data_up0)).data()
    assert(projects_v2_item_with_content_ref01_resdata_up0.id === projects_v2_item_with_content_ref01_data_up0.id)

    assert(projects_v2_item_with_content_ref01_resdata_up0[projects_v2_item_with_content_ref01_markdef_up0.name] === projects_v2_item_with_content_ref01_markdef_up0.value)


    // LOAD
    const projects_v2_item_with_content_ref01_match_dt0 = {}
    projects_v2_item_with_content_ref01_match_dt0.id = projects_v2_item_with_content_ref01_data.id
    const projects_v2_item_with_content_ref01_data_dt0 = (await projects_v2_item_with_content_ref01_ent.load(projects_v2_item_with_content_ref01_match_dt0)).data()
    assert(projects_v2_item_with_content_ref01_data_dt0.id === projects_v2_item_with_content_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/projects_v2_item_with_content/ProjectsV2ItemWithContentTestData.json')

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
    ['projects_v2_item_with_content01','projects_v2_item_with_content02','projects_v2_item_with_content03','org01','org02','org03','projects_v201','projects_v202','projects_v203','user01','user02','user03','projects_v201','projects_v202','projects_v203','org01','org02','org03','projects_v201','projects_v202','projects_v203','item01','item02','item03','user01','user02','user03','projects_v201','projects_v202','projects_v203','item01','item02','item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_PROJECTS_V2_ITEM_WITH_CONTENT_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_PROJECTS_V2_ITEM_WITH_CONTENT_ENTID']

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
  
