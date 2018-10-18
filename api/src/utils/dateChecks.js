const { uniq } = require('ramda')
const sequentializeDates = require('./sequentialDates')
const findLongestStreak = require('./longestStreak')


function dateTotalCheck(dates) {
  // Truncate hours/minutes/seconds from timestamp
  const days = dates.map((date) => {
    date = new Date(date)
    return date.setHours(0, 0, 0, 0)
  })
  return uniq(days).length
}

function dateSequentialCheck(dates) { //}, badges) => {
  const sequentialDates = sequentializeDates(dates)
  const userTotal = findLongestStreak(sequentialDates)
  return userTotal
}

module.exports = {
  dateSequentialCheck,
  dateTotalCheck
}
