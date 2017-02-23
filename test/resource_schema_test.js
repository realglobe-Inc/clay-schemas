/**
 * Test case for resourceSchema.
 * Runs with mocha.
 */
'use strict'

const resourceSchema = require('../lib/resource_schema.json')
const assert = require('assert')
const tv4 = require('tv4')
const co = require('co')

describe('resource-schema', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Resource schema', () => co(function * () {
    let result = tv4.validateResult(
      require('../example/example-resource.json'),
      resourceSchema
    )
    assert.ok(result.valid)
  }))
})

/* global describe, before, after, it */
