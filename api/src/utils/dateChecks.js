const { uniq } = require('ramda')
const sequentializeDates = require('./sequentialDates')
const findLongestStreak = require('./longestStreak')

function dateTotalCheck (dates) {
  return uniq(dates).length
}

function dateSequentialCheck (dates) {
  const sequentialDates = sequentializeDates(dates)
  const userTotal = findLongestStreak(sequentialDates)
  return userTotal
}

module.exports = {
  dateSequentialCheck,
  dateTotalCheck
}
