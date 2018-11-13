import { map, props, sum} from 'ramda';

const summable = [
  'buildings_add',
  'buildings_mod',
  'poi_add',
  'roads_add',
  'roads_mod',
  'waterways_add',
]; 

/**
 * Given a records object, sum all the summable edits
 * and return the number back as the sum of all edits
 * @param {Object} records
 */
export default records => {
  const summableProperties = map(x => Number(x))(props(summable, records));
  return sum(summableProperties);
}