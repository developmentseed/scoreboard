import fetch, { createApiUrl } from '../../utils/api'
import { mergeRight } from 'ramda'
import debounce from 'lodash.debounce'

export const countriesFiltersInitialState = {
  searchText: '',
  selectedSortValue: null,
  page: 1
}

export const countriesSearchInitialState = {
  stats: {},
  apiStatus: 'LOADING'
}

export default store => {
  const updateCountries = function (state, newFilters) {
    const { countriesFilters } = state
    const filters = mergeRight(countriesFilters, newFilters)
    store.setState({ countriesFilters: filters, countriesSearchResults: countriesSearchInitialState })
    fetchCountriesFromAPI(filters)
  }

  const fetchCountriesFromAPI = debounce(filters => {
    let { searchText: q, page, selectedSortValue: sortType } = filters
    return fetch(createApiUrl('/api/countries', { q, page, sortType }))
      .then(async res => {
        if (res.status === 200) {
          const stats = await res.json()
          store.setState({ countriesSearchResults: { stats, apiStatus: 'SUCCESS' } })
        } else {
          throw new Error('failed to get country data')
        }
      })
      .catch((error) => {
        store.setState({ countriesSearchResults: { apiStatus: 'ERROR', stats: {} }, notification: { type: 'error', message: error.message } })
      })
  }, 300)

  return {
    countriesPageChange (state, page) {
      updateCountries(state, { page })
    },

    countriesSearch (state, searchText) {
      updateCountries(state, { page: 1, searchText })
    },

    countriesChangeSelectedSort (state, selectedSortValue) {
      updateCountries(state, { page: 1, selectedSortValue })
    }
  }
}
