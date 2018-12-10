import fetch, { createApiUrl } from '../../utils/api'

function updateCountries (store, storeData) {
  store.setState({ countries: { ...storeData, apiStatus: 'LOADING' } })
  let { searchText: q, page, selectedSortValue: sortType } = storeData
  return fetch(createApiUrl('/api/countries', { q, page, sortType }))
    .then(async res => {
      if (res.status === 200) {
        const stats = await res.json()
        store.setState({ countries: { ...storeData, stats, apiStatus: 'SUCCESS' } })
      } else {
        throw new Error('failed to get country data')
      }
    })
    .catch((error) => {
      store.setState({ countries: { apiStatus: 'ERROR', stats: {} }, notification: { type: 'error', message: error.message } })
    })
}

export default store => ({
  changeCountryPage (state, page) {
    const { countries } = state
    countries.page = page
    updateCountries(store, countries)
  },

  changeCountrySearchText (state, searchText) {
    const { countries } = state
    countries.searchText = searchText
    countries.page = 1
    updateCountries(store, countries)
  },

  changeCountrySelectedSort (state, selectedSortValue) {
    const { countries } = state
    countries.selectedSortValue = selectedSortValue
    countries.page = 1
    updateCountries(store, countries)
  }
})
