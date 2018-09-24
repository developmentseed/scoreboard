const getBadgeInfo = require('./get_badge_info')
const { keys } = require('ramda')

/**
 * Given the userData object containing total amounts for each
 * metric, get the badge info for that metric
 * 
 * @param {*} userData 
 */
module.exports = (userData, badges) => {
  return keys(userData).map((key) => getBadgeInfo(userData[key], key, badges))
}
