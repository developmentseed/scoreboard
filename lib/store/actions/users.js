import { mergeRight } from 'ramda'
import debounce from 'lodash.debounce'
import fetchUsers from '../../utils/fetch-users'

export const usersFiltersInitialState = {
  searchText: '',
  selectedValue: null,
  selectedSortValue: null,
  page: 1,
  selectedActive: 'active'
}

export const usersSearchInitialState = {
  stats: {},
  apiStatus: 'LOADING'
}

export default store => {
  const fetchAndUpdate = debounce((filters) => {
    fetchUsers(filters)
      .then(async res => {
        if (res.status === 200) {
          const stats = await res.json()
          store.setState({ usersSearchResults: { stats, apiStatus: 'SUCCESS' } })
        } else {
          throw new Error('failed to get user data')
        }
      })
      .catch((error) => {
        store.setState({
          usersSearchResults: { apiStatus: 'ERROR', stats: {} },
          notification: { type: 'error', message: error.message }
        })
      })
  }, 300)

  const updateUsers = function (state, newFilters) {
    const { usersFilters, usersSearchResults } = state
    const filters = mergeRight(usersFilters, newFilters)
    store.setState({ usersFilters: filters, usersSearchResults })
    fetchAndUpdate(filters)
  }

  return {
    usersPageChange (state, page) {
      updateUsers(state, { page })
    },

    usersSearch (state, searchText) {
      updateUsers(state, { page: 1, searchText })
    },

    usersChangeCountry (state, selectedValue) {
      updateUsers(state, { page: 1, selectedValue })
    },

    usersChangeSelectedSort (state, selectedSortValue) {
      updateUsers(state, { page: 1, selectedSortValue })
    },

    usersChangeActiveSelect (state, selectedActive) {
      updateUsers(state, { page: 1, selectedActive })
    }
  }
}
