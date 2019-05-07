const { map, props, sum, reject, isNil } = require('ramda')

const summable = [
  'buildings_add',
  'buildings_mod',
  'buildings_del',
  'poi_add',
  'poi_mod',
  'poi_del',
  'roads_add',
  'roads_mod',
  'roads_del',
  'coastlines_add',
  'coastlines_mod',
  'coastlines_del',
  'waterways_add',
  'waterways_mod',
  'waterways_del'
]

/**
 * Given a records object, sum all the summable edits
 * and return the number back as the sum of all edits
 * @param {Object} records
 */
module.exports = records => {
  const summableProperties = map(x => Number(x))(reject(isNil, (props(summable, records))))
  return sum(summableProperties)
}
