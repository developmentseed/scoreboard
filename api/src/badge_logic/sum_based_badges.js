const getBadgeInfo = require('./get_badge_info')
const { keys } = require('ramda')

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
  //eslint-disable-next-line brace-style
  return keys(badgesDB).map((badge) => { return getBadgeInfo(userData, badgesDB[badge]) })
}
