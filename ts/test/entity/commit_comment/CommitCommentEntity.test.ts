

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { GithubSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CommitCommentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GithubSDK.test()
    const ent = testsdk.CommitComment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITHUB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'commit_comment.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITHUB_TEST_COMMIT_COMMENT_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const commit_comment_ref01_ent = client.CommitComment()
    let commit_comment_ref01_data = setup.data.new.commit_comment['commit_comment_ref01']
    commit_comment_ref01_data['commit_sha'] = setup.idmap['commit_sha01']
    commit_comment_ref01_data['owner'] = setup.idmap['owner01']
    commit_comment_ref01_data['repo'] = setup.idmap['repo01']

    commit_comment_ref01_data = (await commit_comment_ref01_ent.create(commit_comment_ref01_data)).data()
    assert(null != commit_comment_ref01_data.id)


    // LIST
    const commit_comment_ref01_match: any = {}
    commit_comment_ref01_match['owner'] = setup.idmap['owner01']
    commit_comment_ref01_match['repo'] = setup.idmap['repo01']

    const commit_comment_ref01_list = (await commit_comment_ref01_ent.list(commit_comment_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(commit_comment_ref01_list, { id: commit_comment_ref01_data.id })))


    // UPDATE
    const commit_comment_ref01_data_up0: any = {}
    commit_comment_ref01_data_up0.id = commit_comment_ref01_data.id
    commit_comment_ref01_data_up0 ['owner'] = setup.idmap['owner']
    commit_comment_ref01_data_up0 ['repo'] = setup.idmap['repo']

    const commit_comment_ref01_markdef_up0 = { name: 'author_association', value: 'Mark01-commit_comment_ref01_' + setup.now }
    ;(commit_comment_ref01_data_up0 as any)[commit_comment_ref01_markdef_up0.name] = commit_comment_ref01_markdef_up0.value

    const commit_comment_ref01_resdata_up0 = (await commit_comment_ref01_ent.update(commit_comment_ref01_data_up0)).data()
    assert(commit_comment_ref01_resdata_up0.id === commit_comment_ref01_data_up0.id)

    assert((commit_comment_ref01_resdata_up0 as any)[commit_comment_ref01_markdef_up0.name] === commit_comment_ref01_markdef_up0.value)


    // LOAD
    const commit_comment_ref01_match_dt0: any = {}
    commit_comment_ref01_match_dt0.id = commit_comment_ref01_data.id
    const commit_comment_ref01_data_dt0 = (await commit_comment_ref01_ent.load(commit_comment_ref01_match_dt0)).data()
    assert(commit_comment_ref01_data_dt0.id === commit_comment_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/commit_comment/CommitCommentTestData.json')

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
    ['commit_comment01','commit_comment02','commit_comment03','repo01','repo02','repo03','repo01','repo02','repo03','commit01','commit02','commit03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['GITHUB_TEST_COMMIT_COMMENT_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITHUB_TEST_COMMIT_COMMENT_ENTID': idmap,
    'GITHUB_TEST_LIVE': 'FALSE',
    'GITHUB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GITHUB_TEST_COMMIT_COMMENT_ENTID']

  const live = 'TRUE' === env.GITHUB_TEST_LIVE

  if (live) {
    client = new GithubSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
