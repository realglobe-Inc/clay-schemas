/**
 * Test case for policySchema.
 * Runs with mocha.
 */
'use strict'

const PolicySchema = require('../lib/policy_schema.json')
const assert = require('assert')
const tv4 = require('tv4')
const co = require('co')

describe('policy-schema', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Policy schema', () => co(function * () {
    let result = tv4.validateResult(
      require('../example/example-policy.json'),
      PolicySchema
    )
    assert.ok(result.valid)
  }))
})

/* global describe, before, after, it */
