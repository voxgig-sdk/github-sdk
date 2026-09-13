
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


describe('RepoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

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
    repo_ref01_data['branch_id'] = setup.idmap['branch01']
    repo_ref01_data['environment_id'] = setup.idmap['environment01']
    repo_ref01_data['environment_name'] = setup.idmap['environment_name01']
    repo_ref01_data['org_id'] = setup.idmap['org01']
    repo_ref01_data['owner'] = setup.idmap['owner01']
    repo_ref01_data['repo'] = setup.idmap['repo01']

    repo_ref01_data = (await repo_ref01_ent.create(repo_ref01_data)).data()
    assert(null != repo_ref01_data.id)


    // LIST
    const repo_ref01_match = {}
    repo_ref01_match['environment_name'] = setup.idmap['environment_name01']
    repo_ref01_match['owner'] = setup.idmap['owner01']
    repo_ref01_match['repo'] = setup.idmap['repo01']

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
    repo_ref01_match_rt0['environment_name'] = setup.idmap['environment_name01']
    repo_ref01_match_rt0['owner'] = setup.idmap['owner01']
    repo_ref01_match_rt0['repo'] = setup.idmap['repo01']

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
    ['repo01','repo02','repo03','repo01','repo02','repo03','repository_invitation01','repository_invitation02','repository_invitation03','org01','org02','org03','ruleset01','ruleset02','ruleset03','repo01','repo02','repo03','attestation01','attestation02','attestation03','repo01','repo02','repo03','autolink01','autolink02','autolink03','repo01','repo02','repo03','branch01','branch02','branch03','repo01','repo02','repo03','collaborator01','collaborator02','collaborator03','repo01','repo02','repo03','comment01','comment02','comment03','repo01','repo02','repo03','content01','content02','content03','repo01','repo02','repo03','deployment01','deployment02','deployment03','repo01','repo02','repo03','environment01','environment02','environment03','repo01','repo02','repo03','hook01','hook02','hook03','repo01','repo02','repo03','invitation01','invitation02','invitation03','repo01','repo02','repo03','key01','key02','key03','repo01','repo02','repo03','asset01','asset02','asset03','repo01','repo02','repo03','release01','release02','release03','repo01','repo02','repo03','ruleset01','ruleset02','ruleset03','repo01','repo02','repo03','protection01','protection02','protection03','repo01','repo02','repo03','tarball01','tarball02','tarball03','repo01','repo02','repo03','zipball01','zipball02','zipball03','repo01','repo02','repo03','environment01','environment02','environment03','deployment_branch_policy01','deployment_branch_policy02','deployment_branch_policy03','repo01','repo02','repo03','environment01','environment02','environment03','deployment_protection_rule01','deployment_protection_rule02','deployment_protection_rule03','repo01','repo02','repo03','hook01','hook02','hook03','delivery01','delivery02','delivery03'],
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
  
