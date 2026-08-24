
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { GithubSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GithubSDK.test()
    equal(null !== testsdk, true)
  })

})
