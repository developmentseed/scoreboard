const { uniq } = require('ramda')

// function takes array of dates and returns an array of arrays
// containing each sequential date
// http://stackoverflow.com/questions/16690905/javascript-get-sequential-dates-in-array
module.exports = (dates) => {
  // Filter out non-unique dates
  let days = uniq(
    dates.map((date) => {
      date = new Date(date)
      return date.setHours(0, 0, 0, 0)
    })
  )

  let k = 0
  const sorted = []
  sorted[k] = []
  days.sort((a, b) => {
    return +a > +b ? 1 : +a === +b ? 0 : -1;
  })
    .forEach((v, i) => {
      let a = v
      let b = dates[i + 1] || 0
      sorted[k].push(+a)
      if ((+b - +a) > 86400000) {
        sorted[++k] = []
      }
      return 1
    })

  sorted.sort((a, b) => {
    return a.length > b.length ? -1 : 1
  })

  return sorted
}
