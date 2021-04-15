function collapseOnKey (arr, keyName) {
  const collapsed = []
  arr.forEach((obj) => {
    collapsed.push(obj[keyName])
  })
  return collapsed
}

module.exports = {
  collapseOnKey
}
