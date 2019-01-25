import countryList from './country-list.json'

export default function findCountryByName (countryName) {
  return countryList.find((country) => {
    return countryName === country.name
  })
}
