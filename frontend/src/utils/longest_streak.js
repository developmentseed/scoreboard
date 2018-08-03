/**
 * returns the length of the longest array in an array
 */
export default array => {
  var elements = array.length;
  var count = 0;
  for (var i = 0; i < elements; i++) {
    if (array[i].length > count) {
      count = array[i].length;
    }
  }
  return count;
};
