const { map, props, sum } = require('ramda')

const summable = [
  'buildings_add',
  'buildings_mod',
  'poi_add',
  'roads_add',
  'roads_mod',
  'coastlines_add',
  'coastlines_mod',
  'waterways_add'
]

/**
 * Given a records object, sum all the summable edits
 * and return the number back as the sum of all edits
 * @param {Object} records
 */
module.exports = records => {
  const summableProperties = map(x => Number(x))(props(summable, records))
  return sum(summableProperties)
}
