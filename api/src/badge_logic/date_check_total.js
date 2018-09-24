const getBadgeInfo = require('./get_badge_info')
const { uniq } = require('ramda')

module.exports = (dates) => {
  // Truncate hours/minutes/seconds from timestamp
  const days = dates.map((date) => {
    date = new Date(date)
    return date.setHours(0, 0, 0, 0)
  })

  const key = 'daysTotal'
  return { [key]: getBadgeInfo(uniq(days).length, key) }
}