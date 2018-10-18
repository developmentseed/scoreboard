const getSumBadges = require('./sum_based_badges')
const { dateSequentialCheck, dateTotalCheck } = require('../utils/dateChecks')
const {
  reject, isNil, filter, map, prop, compose, sum
} = require('ramda')

const getJosmEditCount = compose(
  sum,
  map(prop('count')),
  filter((x) => x.editor.toLowerCase().includes('josm'))
)

module.exports = (userData, badges) => {
  /* eslint-disable camelcase */
  const {
    buildings_add,
    waterways_add,
    poi_add,
    km_roads_add,
    km_roads_mod,
    country_list,
    hashtags,
    editors,
    edit_times
  } = userData
  const daysInRow = dateSequentialCheck(edit_times)
  const daysTotal = dateTotalCheck(edit_times)
  /* eslint-enable camelcase */

  const allBadges = reject(isNil)(getSumBadges({
    buildings: Number(buildings_add),
    waterways: Number(waterways_add),
    pois: Number(poi_add),
    roadKms: Number(km_roads_add),
    roadKmMods: Number(km_roads_mod),
    countries: Object.keys(country_list).length,
    josm: getJosmEditCount(editors),
    hashtags: Object.keys(hashtags).length,
    daysInRow,
    daysTotal
  }, badges))

  // const allBadges = mergeAll([sumBadges, consistencyBadge, historyBadge])
  const earnedBadges = {}
  /* eslint-disable no-restricted-syntax */
  for (const key in allBadges) {
    const val = allBadges[key]
    if (val && val.badgeLevel > 0) {
      earnedBadges[key] = val
    }
  }
  /* eslint-enable no-restricted-syntax */

  return {
    all: allBadges,
    earnedBadges
  }
}
