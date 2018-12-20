
// Create a list of the graphics we have in static/badges/
function createImageList () {
  const imageList = []
  for (var i = 3; i < 18; i += 1) {
    if (i !== 12 && i !== 17 && i !== 18) {
      for (var j = 1; j < 4; j += 1) {
        imageList.push(`${i}-${j}-graphic.svg`)
      }
    } else {
      imageList.push(`${i}-${1}-graphic.svg`)
    }
  }

  return imageList
}

const imageList = createImageList()

module.exports = imageList
