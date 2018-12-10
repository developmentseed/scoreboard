const countriesGeoJSON = require('./countries.geojson')

function getCountry (countryName) {
  const countryProperties = countriesGeoJSON.countryGeoJSON.features.find((countryArr) => {
    return countryArr.properties.ADMIN === countryName
  })
  return countryProperties.geometry
}

module.exports = {
  getCountry
}
