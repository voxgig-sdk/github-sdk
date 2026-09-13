
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


describe('RepositoryInvitationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.RepositoryInvitation()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let repository_invitation_ref01_data = Object.values(setup.data.existing.repository_invitation)[0]

    // LIST
    const repository_invitation_ref01_ent = client.RepositoryInvitation()
    const repository_invitation_ref01_match = {}

    const repository_invitation_ref01_list = (await repository_invitation_ref01_ent.list(repository_invitation_ref01_match)).map((e) => e.data())


    // UPDATE
    const repository_invitation_ref01_data_up0 = {}
    repository_invitation_ref01_data_up0.id = repository_invitation_ref01_data.id
    repository_invitation_ref01_data_up0 ['owner'] = setup.idmap['owner']
    repository_invitation_ref01_data_up0 ['repo'] = setup.idmap['repo']

    const repository_invitation_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-repository_invitation_ref01_' + setup.now }
    repository_invitation_ref01_data_up0 [repository_invitation_ref01_markdef_up0.name] = repository_invitation_ref01_markdef_up0.value

    const repository_invitation_ref01_resdata_up0 = (await repository_invitation_ref01_ent.update(repository_invitation_ref01_data_up0)).data()
    assert(repository_invitation_ref01_resdata_up0.id === repository_invitation_ref01_data_up0.id)

    assert(repository_invitation_ref01_resdata_up0[repository_invitation_ref01_markdef_up0.name] === repository_invitation_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/repository_invitation/RepositoryInvitationTestData.json')

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
    ['repository_invitation01','repository_invitation02','repository_invitation03','repo01','repo02','repo03','repo01','repo02','repo03','collaborator01','collaborator02','collaborator03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITHUB_TEST_REPOSITORY_INVITATION_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_REPOSITORY_INVITATION_ENTID']

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
  
