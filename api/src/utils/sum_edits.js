const { map, props, sum } = require('ramda')

const summable = [
  'buildings_added',
  'buildings_modified',
  'buildings_deleted',
  'pois_added',
  'pois_modified',
  'pois_deleted',
  'roads_added',
  'roads_modified',
  'roads_deleted',
  'raillines_added',
  'raillines_modified',
  'raillines_deleted',
  'coastlines_added',
  'coastlines_modified',
  'coastlines_deleted',
  'waterways_added',
  'waterways_modified',
  'waterways_deleted'
]

/**
 * Given a records object, sum all the summable edits
 * and return the number back as the sum of all edits
 * @param {Object} records
 */
module.exports = records => {
  const summableProperties = map(x => ~~x)(props(summable, records))
  return sum(summableProperties)
}
