
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


describe('RepositoryRulesetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.RepositoryRuleset()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const repository_ruleset_ref01_ent = client.RepositoryRuleset()
    let repository_ruleset_ref01_data = setup.data.new.repository_ruleset['repository_ruleset_ref01']
    repository_ruleset_ref01_data['org_id'] = setup.idmap['org01']
    repository_ruleset_ref01_data['owner'] = setup.idmap['owner01']
    repository_ruleset_ref01_data['repo'] = setup.idmap['repo01']

    repository_ruleset_ref01_data = (await repository_ruleset_ref01_ent.create(repository_ruleset_ref01_data)).data()
    assert(null != repository_ruleset_ref01_data.id)


    // LIST
    const repository_ruleset_ref01_match = {}
    repository_ruleset_ref01_match['org_id'] = setup.idmap['org01']

    const repository_ruleset_ref01_list = (await repository_ruleset_ref01_ent.list(repository_ruleset_ref01_match)).map((e) => e.data())

    assert(!isempty(select(repository_ruleset_ref01_list, { id: repository_ruleset_ref01_data.id })))


    // UPDATE
    const repository_ruleset_ref01_data_up0 = {}
    repository_ruleset_ref01_data_up0.id = repository_ruleset_ref01_data.id
    repository_ruleset_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const repository_ruleset_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-repository_ruleset_ref01_' + setup.now }
    repository_ruleset_ref01_data_up0 [repository_ruleset_ref01_markdef_up0.name] = repository_ruleset_ref01_markdef_up0.value

    const repository_ruleset_ref01_resdata_up0 = (await repository_ruleset_ref01_ent.update(repository_ruleset_ref01_data_up0)).data()
    assert(repository_ruleset_ref01_resdata_up0.id === repository_ruleset_ref01_data_up0.id)

    assert(repository_ruleset_ref01_resdata_up0[repository_ruleset_ref01_markdef_up0.name] === repository_ruleset_ref01_markdef_up0.value)


    // LOAD
    const repository_ruleset_ref01_match_dt0 = {}
    repository_ruleset_ref01_match_dt0.id = repository_ruleset_ref01_data.id
    const repository_ruleset_ref01_data_dt0 = (await repository_ruleset_ref01_ent.load(repository_ruleset_ref01_match_dt0)).data()
    assert(repository_ruleset_ref01_data_dt0.id === repository_ruleset_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/repository_ruleset/RepositoryRulesetTestData.json')

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
    ['repository_ruleset01','repository_ruleset02','repository_ruleset03','org01','org02','org03','repo01','repo02','repo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_REPOSITORY_RULESET_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
    'GITHUB_APIKEY': '',
  })

  idmap = env['GITHUB_TEST_REPOSITORY_RULESET_ENTID']

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
  
