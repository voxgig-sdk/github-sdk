
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { GithubSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('RepoEntity', async () => {

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Repo()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const repo_ref01_ent = client.Repo()
    let repo_ref01_data = setup.data.new.repo['repo_ref01']
    repo_ref01_data['owner'] = setup.idmap['owner01']

    repo_ref01_data = (await repo_ref01_ent.create(repo_ref01_data)).data()
    assert(null != repo_ref01_data.id)


    // LIST
    const repo_ref01_match = {}

    const repo_ref01_list = (await repo_ref01_ent.list(repo_ref01_match)).map((e) => e.data())

    assert(!isempty(select(repo_ref01_list, { id: repo_ref01_data.id })))


    // UPDATE
    const repo_ref01_data_up0 = {}
    repo_ref01_data_up0.id = repo_ref01_data.id
    repo_ref01_data_up0 ['owner'] = setup.idmap['owner']

    const repo_ref01_markdef_up0 = { name: 'archive_url', value: 'Mark01-repo_ref01_' + setup.now }
    repo_ref01_data_up0 [repo_ref01_markdef_up0.name] = repo_ref01_markdef_up0.value

    const repo_ref01_resdata_up0 = (await repo_ref01_ent.update(repo_ref01_data_up0)).data()
    assert(repo_ref01_resdata_up0.id === repo_ref01_data_up0.id)

    assert(repo_ref01_resdata_up0[repo_ref01_markdef_up0.name] === repo_ref01_markdef_up0.value)


    // LOAD
    const repo_ref01_match_dt0 = {}
    repo_ref01_match_dt0.id = repo_ref01_data.id
    const repo_ref01_data_dt0 = (await repo_ref01_ent.load(repo_ref01_match_dt0)).data()
    assert(repo_ref01_data_dt0.id === repo_ref01_data.id)


    // REMOVE
    const repo_ref01_match_rm0 = {}
    repo_ref01_match_rm0.id = repo_ref01_data.id
    await repo_ref01_ent.remove(repo_ref01_match_rm0)
  

    // LIST
    const repo_ref01_match_rt0 = {}

    const repo_ref01_list_rt0 = (await repo_ref01_ent.list(repo_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(repo_ref01_list_rt0, { id: repo_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/repo/RepoTestData.json')

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
    ['repo01','repo02','repo03','repo01','repo02','repo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_REPO_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_REPO_ENTID']

  if ('TRUE' === env.GITHUB_TEST_LIVE) {
    client = new GithubSDK(merge([
      {
      },
      extra
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
  
