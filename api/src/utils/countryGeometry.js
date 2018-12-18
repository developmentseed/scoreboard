const fs = require('fs')
const path = require('path')
const countriesGeoJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../lib/utils/countries.geojson')))

function getCountryGeo (countryCode) {
  try {
    const countryProperties = countriesGeoJSON.features.find((countryArr) => {
      return (countryArr.properties.ISO_A3 === countryCode || countryArr.properties.ADM0_A3 === countryCode)
    })
    return countryProperties.geometry
  } catch (e) {
    return {}
  }
}

module.exports = {
  getCountryGeo
}
