
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


describe('GitRefEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.GitRef()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const git_ref_ref01_ent = client.GitRef()
    let git_ref_ref01_data = setup.data.new.git_ref['git_ref_ref01']
    git_ref_ref01_data['owner'] = setup.idmap['owner01']
    git_ref_ref01_data['repo'] = setup.idmap['repo01']

    git_ref_ref01_data = (await git_ref_ref01_ent.create(git_ref_ref01_data)).data()
    assert(null != git_ref_ref01_data.id)


    // UPDATE
    const git_ref_ref01_data_up0 = {}
    git_ref_ref01_data_up0.id = git_ref_ref01_data.id
    git_ref_ref01_data_up0 ['owner'] = setup.idmap['owner']
    git_ref_ref01_data_up0 ['repo'] = setup.idmap['repo']

    const git_ref_ref01_markdef_up0 = { name: 'node_id', value: 'Mark01-git_ref_ref01_' + setup.now }
    git_ref_ref01_data_up0 [git_ref_ref01_markdef_up0.name] = git_ref_ref01_markdef_up0.value

    const git_ref_ref01_resdata_up0 = (await git_ref_ref01_ent.update(git_ref_ref01_data_up0)).data()
    assert(git_ref_ref01_resdata_up0.id === git_ref_ref01_data_up0.id)

    assert(git_ref_ref01_resdata_up0[git_ref_ref01_markdef_up0.name] === git_ref_ref01_markdef_up0.value)


    // LOAD
    const git_ref_ref01_match_dt0 = {}
    git_ref_ref01_match_dt0.id = git_ref_ref01_data.id
    const git_ref_ref01_data_dt0 = (await git_ref_ref01_ent.load(git_ref_ref01_match_dt0)).data()
    assert(git_ref_ref01_data_dt0.id === git_ref_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/git_ref/GitRefTestData.json')

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
    ['git_ref01','git_ref02','git_ref03','repo01','repo02','repo03','repo01','repo02','repo03','matching_ref01','matching_ref02','matching_ref03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_GIT_REF_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_GIT_REF_ENTID']

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
  
