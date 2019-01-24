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
function getCountriesEdited (countryList) {
  let fc = {
    'type': 'FeatureCollection',
    'features': []
  }
  countryList.forEach(item => {
    let country = countriesGeoJSON.features.find((countryArr) => {
      let name = item.name
      if (isState(name)) {
        name = 'United States of America'
      }
      return countryArr.properties.NAME_LONG === item.name || countryArr.properties.NAME === item.name
    })
    if (country) {
      country.properties.editCount = item.count
      fc.features.push(country)
    } else {
      console.log('Could not find item', item)
    }
  })
  return fc
}

module.exports = getCountriesEdited
