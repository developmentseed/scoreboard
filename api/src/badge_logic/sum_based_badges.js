import getBadgeInfo from './get_badge_info';
import { keys } from 'ramda';

/**
 * Given the userData object containing total amounts for each
 * metric, get the badge info for that metric
 * 
 * @param {*} userData 
 */
export default userData => {
  return keys(userData).map(key => getBadgeInfo(userData[key], key));
};