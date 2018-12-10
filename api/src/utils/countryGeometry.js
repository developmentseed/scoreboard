const countriesGeoJSON = require('./countries.geojson')

function getCountryGeo (countryName) {
  try {
    const countryProperties = countriesGeoJSON.countryGeoJSON.features.find((countryArr) => {
      return countryArr.properties.ADMIN === countryName
    })
    return countryProperties.geometry
  } catch (e) {
    return {}
  }
}

module.exports = {
  getCountryGeo
}
