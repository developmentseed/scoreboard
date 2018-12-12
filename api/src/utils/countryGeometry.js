const fs = require('fs')
const path = require('path')
const countriesGeoJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../lib/utils/countries.geojson')))

function getCountryGeo (countryName) {
  try {
    const countryProperties = countriesGeoJSON.features.find((countryArr) => {
      return countryArr.properties.NAME === countryName
    })
    return countryProperties.geometry
  } catch (e) {
    return {}
  }
}

module.exports = {
  getCountryGeo
}
