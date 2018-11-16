function collapseOnKey (arr, keyName) {
  const collapsed = []
  arr.reduce((acc, obj) => {
    collapsed.push(obj[keyName])
  })
  return collapsed
}

module.exports = {
  collapseOnKey
}
