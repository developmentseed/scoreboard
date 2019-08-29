const fs = require('fs')
const path = require('path')
const countriesGeoJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../lib/utils/countries.geojson')))
const { isState } = require('../models/userCountryEdits')

/**
 * Given a user's country edit list, create a feature collection
 * that contains features for which the user has edits. Each feature
 * has a property "editCount" that contains the number of edits in
 * that country
 */
function getCountriesEdited (countryEdits) {
  const countries = Object.keys(countryEdits)

  let fc = {
    'type': 'FeatureCollection',
    'features': []
  }

  countries.forEach(countryName => {
    let country = countriesGeoJSON.features.find((countryArr) => {
      if (isState(countryName)) {
        countryName = 'United States of America'
      }
      return countryArr.properties.NAME_LONG === countryName || countryArr.properties.NAME === countryName
    })
    if (country) {
      country.properties.editCount = countryEdits[countryName]
      fc.features.push(country)
    } else {
      console.log('Could not find country', countryName)
    }
  })
  return fc
}

module.exports = getCountriesEdited
