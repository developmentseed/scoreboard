const getSumBadges = require('./sum_based_badges')
const { dateSequentialCheck, dateTotalCheck } = require('../utils/dateChecks')
const { reject, isNil } = require('ramda')

const getJosmEditCount = (editors) => {
  return Object.keys(editors).reduce((count, editor) => {
    if (editor.toLowerCase().includes('josm')) {
      count += editors[editor]
    }
    return count
  }, 0)
}

module.exports = (userData, badges) => {
  const {
    country_edits,
    counts,
    day_edits,
    editor_edits,
    hashtag_edits,
    measurements
  } = userData

  const {
    buildings_added,
    waterways_added,
    pois_added,
    coastlines_added,
    coastlines_modified
  } = counts

  const {
    road_km_added,
    road_km_modified,
    coastline_km_added,
    coastline_km_modified
  } = measurements

  const allDays = Object.keys(day_edits).map((key) => day_edits[key])
  const daysInRow = dateSequentialCheck(allDays)
  const daysTotal = dateTotalCheck(allDays)
  const campaigns = Object.keys(hashtag_edits).map((key) => hashtag_edits[key])

  const allBadges = reject(isNil)(getSumBadges({
    buildings: Number(buildings_added),
    waterways: Number(waterways_added),
    pois: Number(pois_added),
    coastlines_added: Number(coastlines_added),
    coastlines_modified: Number(coastlines_modified),
    roadKms: Number(road_km_added),
    roadKmMods: Number(road_km_modified),
    coastlineKms: Number(coastline_km_added),
    coastlineKmMods: Number(coastline_km_modified),
    countries: Object.keys(country_edits).length,
    josm: getJosmEditCount(editor_edits),
    hashtags: Object.keys(hashtag_edits).length,
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
