
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


describe('PullEntity', async () => {

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.Pull()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const pull_ref01_ent = client.Pull()
    let pull_ref01_data = setup.data.new.pull['pull_ref01']
    pull_ref01_data['repo_id'] = setup.idmap['repo01']

    pull_ref01_data = (await pull_ref01_ent.create(pull_ref01_data)).data()
    assert(null != pull_ref01_data.id)


    // LIST
    const pull_ref01_match = {}

    const pull_ref01_list = (await pull_ref01_ent.list(pull_ref01_match)).map((e) => e.data())

    assert(!isempty(select(pull_ref01_list, { id: pull_ref01_data.id })))


    // UPDATE
    const pull_ref01_data_up0 = {}
    pull_ref01_data_up0.id = pull_ref01_data.id
    pull_ref01_data_up0 ['repo_id'] = setup.idmap['repo_id']

    const pull_ref01_markdef_up0 = { name: 'title', value: 'Mark01-pull_ref01_' + setup.now }
    pull_ref01_data_up0 [pull_ref01_markdef_up0.name] = pull_ref01_markdef_up0.value

    const pull_ref01_resdata_up0 = (await pull_ref01_ent.update(pull_ref01_data_up0)).data()
    assert(pull_ref01_resdata_up0.id === pull_ref01_data_up0.id)

    assert(pull_ref01_resdata_up0[pull_ref01_markdef_up0.name] === pull_ref01_markdef_up0.value)


    // LOAD
    const pull_ref01_match_dt0 = {}
    pull_ref01_match_dt0.id = pull_ref01_data.id
    const pull_ref01_data_dt0 = (await pull_ref01_ent.load(pull_ref01_match_dt0)).data()
    assert(pull_ref01_data_dt0.id === pull_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/pull/PullTestData.json')

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
    ['pull01','pull02','pull03','repo01','repo02','repo03','repo01','repo02','repo03','pull01','pull02','pull03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_PULL_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_PULL_ENTID']

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
  
