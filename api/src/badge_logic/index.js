const getSumBadges = require('./sum_based_badges')
const { dateSequentialCheck, dateTotalCheck } = require('../utils/dateChecks')
const { collapseOnKey } = require('../utils/collapseMetric')
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
    km_coastlines_add,
    km_coastlines_mod,
    coastlines_add,
    coastlines_mod,
    country_list,
    hashtags,
    editors,
    edit_times
  } = userData

  const allDays = collapseOnKey(edit_times, 'day')
  const daysInRow = dateSequentialCheck(allDays)
  const daysTotal = dateTotalCheck(allDays)
  const campaigns = collapseOnKey(hashtags, 'tag')
  /* eslint-enable camelcase */

  const allBadges = reject(isNil)(getSumBadges({
    buildings: Number(buildings_add),
    waterways: Number(waterways_add),
    pois: Number(poi_add),
    coastlines_add: Number(coastlines_add),
    coastlines_mod: Number(coastlines_mod),
    roadKms: Number(km_roads_add),
    roadKmMods: Number(km_roads_mod),
    coastlineKms: Number(km_coastlines_add),
    coastlineKmMods: Number(km_coastlines_mod),
    countries: Object.keys(country_list).length,
    josm: getJosmEditCount(editors),
    hashtags: Object.keys(hashtags).length,
    daysInRow,
    daysTotal,
    campaigns,
    allDays
  }, badges))

  allBadges.sort((a, b) => {
    return b.points.percentage - a.points.percentage
  })

  const earnedBadges = {}
  const unearnedBadges = {}
  /* eslint-disable no-restricted-syntax */
  for (const key in allBadges) {
    const val = allBadges[key]
    if (val) {
      if (val.badgeLevel > 0) {
        earnedBadges[key] = val
      } else if (val.badgeLevel === 0) {
        unearnedBadges[key] = val
      }
    }
  }

  return {
    all: allBadges,
    earnedBadges,
    unearnedBadges
  }
}
