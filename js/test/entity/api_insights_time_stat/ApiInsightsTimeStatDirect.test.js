
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


const { GithubSDK } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
} = require('../../utility')


describe('ApiInsightsTimeStatDirect', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITHUB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITHUB_TEST_LIVE'))

  test('direct-exists', async () => {
    const sdk = new GithubSDK({
      // Concrete base: a live construction must satisfy any server
      // variables a templated base URL declares; overriding base with a
      // literal (as the direct flow tests do) sidesteps the requirement.
      base: 'http://localhost:8080',
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-load-api_insights_time_stat', async () => {
    const setup = directSetup({ id: 'direct01' })
    const { client, calls } = setup

    const params = {}
    if (setup.live) {
      const listResult = await client.direct({
        path: 'orgs/{org}/insights/api/time-stats/{actor_type}/{actor_id}',
        method: 'GET',
        params: {
        actor_id: setup.idmap['actor01'],
        actor_type: setup.idmap['actor_type01'],
        org: setup.idmap['org01'],
        },
      })
      assert(listResult.ok === true)
      const listData = listResult.data
      if (!Array.isArray(listData) || listData.length === 0) {
        return // skip: no entities to load in live mode
      }
      params.id = listData[0].id
      params.org_id = setup.idmap['org01']
      params.user_id = setup.idmap['user01']
    } else {
      params.org_id = 'direct01'
      params.user_id = 'direct02'
    }

    const result = await client.direct({
      path: 'orgs/{org_id}/insights/api/time-stats/users/{user_id}',
      method: 'GET',
      params,
    })

    assert(result.ok === true)
    assert(result.status === 200)
    assert(null != result.data)

    if (!setup.live) {
      assert(result.data.id === 'direct01')
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
      assert(calls[0].url.includes('direct02'))
    }
  })

  test('direct-list-api_insights_time_stat', async () => {
    const setup = directSetup([{ id: 'direct01' }, { id: 'direct02' }])
    const { client, calls } = setup

    const params = {}
    if (setup.live) {
      params.actor_id = setup.idmap['actor01']
      params.actor_type = setup.idmap['actor_type01']
      params.org = setup.idmap['org01']
    } else {
      params.actor_id = 'direct01'
      params.actor_type = 'direct02'
      params.org = 'direct03'
    }

    const result = await client.direct({
      path: 'orgs/{org}/insights/api/time-stats/{actor_type}/{actor_id}',
      method: 'GET',
      params,
    })

    assert(result.ok === true)
    assert(result.status === 200)
    assert(Array.isArray(result.data))

    if (!setup.live) {
      assert(result.data.length === 2)
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
      assert(calls[0].url.includes('direct02'))
      assert(calls[0].url.includes('direct03'))
    }
  })

})



function directSetup(mockres) {
  const calls = []

  const env = envOverride({
    'GITHUB_TEST_API_INSIGHTS_TIME_STAT_ENTID': {},
    'GITHUB_TEST_LIVE': 'FALSE',
  })

  const live = 'TRUE' === env.GITHUB_TEST_LIVE

  if (live) {
    // Merged so the generated fields win: sdk-test-control.json's
    // test.client.options adds to the live client, it does not redirect it.
    const client = new GithubSDK(
      Object.assign({}, liveClientOptions(), {
      }))

    let idmap = env['GITHUB_TEST_API_INSIGHTS_TIME_STAT_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap }
  }

  const mockFetch = async (url, init) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new GithubSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} }
}
  
