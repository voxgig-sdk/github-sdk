

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { GithubSDK } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  maybeSkipControl,
  skipIfMissingIds,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ActionDirect', async () => {

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


  test('direct-load-action', async (t: any) => {
    const setup = directSetup({ id: 'direct01' })
    if (maybeSkipControl(t, 'direct', 'direct-load-action', setup.live)) return
    if (skipIfMissingIds(t, setup, ["archive_format01","artifact01","owner01","repo01"])) return
    const { client, calls } = setup

    const params: any = {}
    const query: any = {}
    if (setup.live) {
      const listResult: any = await client.direct({
        path: 'repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
        method: 'GET',
        params: {
        owner: setup.idmap['owner01'],
        repo: setup.idmap['repo01'],
        workflow_id: setup.idmap['workflow01'],
        },
      })
      if (!listResult.ok) {
        return // skip: list call failed (likely synthetic IDs against live API)
      }
      const listArr = unwrapListData(listResult.data)
      if (null == listArr || listArr.length === 0) {
        return // skip: no entities to load in live mode
      }
      const candidateId = listArr[0]?.archive_format ?? listArr[0]?.id
      if (null == candidateId) {
        return // skip: list response shape does not expose load identifier
      }
      params.archive_format = candidateId
      params.archive_format = setup.idmap['archive_format01']
      params.artifact_id = setup.idmap['artifact01']
      params.owner = setup.idmap['owner01']
      params.repo = setup.idmap['repo01']
    } else {
      params.archive_format = 'direct01'
      params.artifact_id = 'direct02'
      params.owner = 'direct03'
      params.repo = 'direct04'
    }

    const result: any = await client.direct({
      path: 'repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}',
      method: 'GET',
      params,
      query,
    })

    if (setup.live) {
      // Live mode is lenient: synthetic IDs frequently 4xx. Skip rather
      // than fail when the load endpoint isn't reachable with the IDs we
      // can construct from setup.idmap.
      if (!result.ok || result.status < 200 || result.status >= 300) {
        return
      }
    } else {
      assert(result.ok === true)
      assert(result.status === 200)
      assert(null != result.data)
      assert(result.data.id === 'direct01')
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
      assert(calls[0].url.includes('direct02'))
      assert(calls[0].url.includes('direct03'))
      assert(calls[0].url.includes('direct04'))
    }
  })

  test('direct-list-action', async (t: any) => {
    const setup = directSetup([{ id: 'direct01' }, { id: 'direct02' }])
    if (maybeSkipControl(t, 'direct', 'direct-list-action', setup.live)) return
    if (skipIfMissingIds(t, setup, ["owner01","repo01","workflow01"])) return
    const { client, calls } = setup

    const params: any = {}
    const query: any = {}
    if (setup.live) {
      params.owner = setup.idmap['owner01']
      params.repo = setup.idmap['repo01']
      params.workflow_id = setup.idmap['workflow01']
    } else {
      params.owner = 'direct01'
      params.repo = 'direct02'
      params.workflow_id = 'direct03'
    }

    const result: any = await client.direct({
      path: 'repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
      method: 'GET',
      params,
      query,
    })

    if (setup.live) {
      // Live mode is lenient: synthetic IDs frequently 4xx and the list-
      // response shape varies wildly across public APIs. Skip rather than
      // fail when the call doesn't return a usable list.
      if (!result.ok || result.status < 200 || result.status >= 300) {
        return
      }
      const listArr = unwrapListData(result.data)
      if (!Array.isArray(listArr)) {
        return
      }
    } else {
      assert(result.ok === true)
      assert(result.status === 200)
      assert(null != result.data)
      const listArr = unwrapListData(result.data)
      assert(Array.isArray(listArr))
      assert(listArr!.length === 2)
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
      assert(calls[0].url.includes('direct02'))
      assert(calls[0].url.includes('direct03'))
    }
  })

})



function directSetup(mockres?: any) {
  const calls: any[] = []

  const env = envOverride({
    'GITHUB_TEST_ACTION_ENTID': {},
    'GITHUB_TEST_LIVE': 'FALSE',
  })

  const live = 'TRUE' === env.GITHUB_TEST_LIVE

  if (live) {
    // Merged so the generated fields win: sdk-test-control.json's
    // test.client.options adds to the live client, it does not redirect it.
    const client = new GithubSDK(
      Object.assign({}, liveClientOptions(), {
      }))

    let idmap: any = env['GITHUB_TEST_ACTION_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap }
  }

  const mockFetch = async (url: string, init: any) => {
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

  return { client, calls, live, idmap: {} as any }
}

// direct() returns the raw response body. List endpoints often wrap the
// array in an envelope (e.g. { data: [...] }, { entities: [...] },
// { pagination, data: [...] }). The test transforms the raw body to
// extract the first array — either the body itself or the first array
// property of an envelope object.
function unwrapListData(data: any): any[] | null {
  if (Array.isArray(data)) return data
  if (data && 'object' === typeof data) {
    for (const v of Object.values(data)) {
      if (Array.isArray(v)) return v as any[]
    }
  }
  return null
}
  
