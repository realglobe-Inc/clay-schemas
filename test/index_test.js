/**
 * Test for index js
 */
'use strict'

const sgSchemas = require('../lib')
const assert = require('assert')

describe('index', function () {
  it('Eval props', () => {
    for (let name of Object.keys(sgSchemas)) {
      assert.ok(sgSchemas[ name ])
    }
  })
})

/* global describe, it */
