const getSumBadges = require('./sum_based_badges')
const dateSequentialCheck = require('./date_check_sequential')
const dateTotalCheck = require('./date_check_total')
const {
  mergeAll, reject, isNil, filter, map, prop, compose, sum
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
  /* eslint-enable camelcase */
  const sumBadges = reject(isNil)(getSumBadges({
    buildings: Number(buildings_add),
    waterways: Number(waterways_add),
    pois: Number(poi_add),
    roadKms: Number(km_roads_add),
    roadKmMods: Number(km_roads_mod),
    countries: Object.keys(country_list).length,
    josm: getJosmEditCount(editors),
    hashtags: Object.keys(hashtags).length
  }, badges))
  const consistencyBadge = dateSequentialCheck(edit_times, badges)
  const historyBadge = dateTotalCheck(edit_times, badges)

  const allBadges = mergeAll([sumBadges, consistencyBadge, historyBadge])
  const earnedBadges = {}
  /* eslint-disable no-restricted-syntax */
  for (const key in allBadges) {
    const val = allBadges[key]
    if (val && val.badgeLevel > 0) {
      earnedBadges[key] = val
    }
  }
  /* eslint-enable no-restricted-syntax */

  const sortedSumBadges = Object.keys(sumBadges).sort((a, b) => {
    return sumBadges[a].points.percentage - sumBadges[b].points.percentage
  })

  const mostObtainableNames = sortedSumBadges.slice(-3)
  const mostObtainable = sumBadges[mostObtainableNames[mostObtainableNames.length - 1]]
  const secondMostObtainable = sumBadges[mostObtainableNames[mostObtainableNames.length - 2]]
  const thirdMostObtainable = sumBadges[mostObtainableNames[mostObtainableNames.length - 3]]

  return {
    all: allBadges,
    earnedBadges,
    mostAttainable: [mostObtainable, secondMostObtainable, thirdMostObtainable]
  }
}
