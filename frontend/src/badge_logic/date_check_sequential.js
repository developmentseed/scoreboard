import sequentializeDates from '../utils/sequential_dates';
import findLongestStreak from '../utils/longest_streak';
import getBadgeInfo from './get_badge_info';

export default dates => {
  var sequentialDates = sequentializeDates(dates);
  var userTotal = findLongestStreak(sequentialDates);
  var key = 'daysInRow';

  return { [key]: getBadgeInfo(userTotal, key)};
};