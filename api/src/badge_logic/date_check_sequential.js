const sequentializeDates = require('../utils/sequential_dates')
const findLongestStreak = require('../utils/longest_streak')
const getBadgeInfo = require('./get_badge_info')

module.exports = (dates, badges) => {
  const sequentialDates = sequentializeDates(dates)
  const userTotal = findLongestStreak(sequentialDates)
  const key = 'daysInRow'

  return {
    [key]: getBadgeInfo(userTotal, key, badges.find((element) => {
      return element.metric === key
    }))
  }
}
