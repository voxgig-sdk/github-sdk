
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


describe('ProjectsClassicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.ProjectsClassic()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const projects_classic_ref01_ent = client.ProjectsClassic()
    let projects_classic_ref01_data = setup.data.new.projects_classic['projects_classic_ref01']
    projects_classic_ref01_data['column_id'] = setup.idmap['column01']
    projects_classic_ref01_data['project_id'] = setup.idmap['project01']

    projects_classic_ref01_data = (await projects_classic_ref01_ent.create(projects_classic_ref01_data)).data()
    assert(null != projects_classic_ref01_data)


    // UPDATE
    const projects_classic_ref01_data_up0 = {}
    projects_classic_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const projects_classic_ref01_markdef_up0 = { name: 'permission', value: 'Mark01-projects_classic_ref01_' + setup.now }
    projects_classic_ref01_data_up0 [projects_classic_ref01_markdef_up0.name] = projects_classic_ref01_markdef_up0.value

    const projects_classic_ref01_resdata_up0 = (await projects_classic_ref01_ent.update(projects_classic_ref01_data_up0)).data()
    assert(null != projects_classic_ref01_resdata_up0)

    assert(projects_classic_ref01_resdata_up0[projects_classic_ref01_markdef_up0.name] === projects_classic_ref01_markdef_up0.value)



  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/projects_classic/ProjectsClassicTestData.json')

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
    ['projects_classic01','projects_classic02','projects_classic03','column01','column02','column03','project01','project02','project03','collaborator01','collaborator02','collaborator03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_PROJECTS_CLASSIC_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_PROJECTS_CLASSIC_ENTID']

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
  
