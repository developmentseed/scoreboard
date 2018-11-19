const { uniq } = require('ramda')

// function takes array of dates and returns an array of arrays
// containing each sequential date
// http://stackoverflow.com/questions/16690905/javascript-get-sequential-dates-in-array
module.exports = (dates) => {
  // Filter out non-unique dates
  const days = uniq(
    dates.map((date) => {
      const dateSplit = date.split('-')
      return new Date(dateSplit[0], Number(dateSplit[1] - 1), dateSplit[2])
    })
  )

  let k = 0
  const sorted = []
  sorted[k] = []
  days.sort((a, b) => { // eslint-disable-line arrow-body-style
    return +a > +b ? 1 : +a === +b ? 0 : -1 // eslint-disable-line no-nested-ternary
  })
    .forEach((v, i) => {
      const a = v
      const b = dates[i + 1] || 0
      sorted[k].push(+a)
      if ((+b - +a) > 86400000) {
        sorted[++k] = [] // eslint-disable-line no-plusplus
      }
      return 1
    })

  sorted.sort((a, b) => { // eslint-disable-line arrow-body-style
    return a.length > b.length ? -1 : 1
  })

  return sorted
}
