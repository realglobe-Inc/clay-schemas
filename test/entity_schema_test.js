/**
 * Test case for entitySchema.
 * Runs with mocha.
 */
'use strict'

const EntitySchema = require('../lib/entity_schema.json')
const assert = require('assert')
const tv4 = require('tv4')
const co = require('co')

describe('entity-schema', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Entity schema', () => co(function * () {
    let result = tv4.validateResult(
      require('../example/example-entity.json'),
      EntitySchema
    )
    assert.ok(result.valid)
  }))
})

/* global describe, before, after, it */
