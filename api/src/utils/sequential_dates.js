import { uniq } from 'ramda';

// function takes array of dates and returns an array of arrays
// containing each sequential date
// http://stackoverflow.com/questions/16690905/javascript-get-sequential-dates-in-array
export default dates => {
  // Filter out non-unique dates
  let days = uniq(
    dates.map(function (date) {
      date = new Date(date);
      return date.setHours(0, 0, 0, 0);
    })
  );

  var k = 0;
  var sorted = [];
  sorted[k] = [];
  days.sort(function (a, b) {
    return +a > +b ? 1 : +a === +b ? 0 : -1;
  })
    .forEach(function (v, i) {
      var a = v;
      var b = dates[i + 1] || 0;
      sorted[k].push(+a);
      if ((+b - +a) > 86400000) {
        sorted[++k] = [];
      }
      return 1;
    });

  sorted.sort(function (a, b) {
    return a.length > b.length ? -1 : 1;
  });

  return sorted;
}