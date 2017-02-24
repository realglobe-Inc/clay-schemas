/**
 * Schemas for ClayDB
 * @module clay-schemas
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get EntitySchema () { return d(require('./entity_schema')) },
  get ResourceSchema () { return d(require('./resource_schema')) }
}
