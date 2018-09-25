const getBadgeInfo = require('./get_badge_info')
const { keys } = require('ramda')
// change this to get badges from db instead
const badges = require('./badges')

/**
 * Given the userData object containing total amounts for each
 * metric, get the badge info for that metric
 *
 * @param {*} userData - User stats
 * @param {*} badgesDB - All badges in the database
 * @returns {*} keys - For every key in userData, get the badge info associated with that key
 */
//eslint-disable-next-line no-unused-vars
module.exports = (userData, badgesDB) => {
  /*
  const { tiers, name, id } = badgesDB.find((element) => {
    return element.metric_name === key
  })
  */
  return keys(userData).map((key) => getBadgeInfo(userData[key], key, badges[key]))
}
