import getBadgeInfo from './get_badge_info';
var { uniq } = require('ramda');

export default dates => {
  // Truncate hours/minutes/seconds from timestamp
  let days = dates.map(function (date) {
    date = new Date(date);
    return date.setHours(0, 0, 0, 0);
  });

  const key = 'daysTotal';
  return { [key]: getBadgeInfo(uniq(days).length, key) };
};