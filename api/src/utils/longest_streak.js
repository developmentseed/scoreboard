/**
 * returns the length of the longest array in an array
 */
module.exports = (array) => {
  const elements = array.length
  let count = 0
  for (let i = 0; i < elements; i++) {
    if (array[i].length > count) {
      count = array[i].length
    }
  }
  return count
}
