
import { mergeRight } from 'ramda'
import debounce from 'lodash.debounce'
import fetchUsers from '../../utils/fetch-users'

export const adminTeamMemberFiltersInitialState = {
  searchText: '',
  page: 1
}

export const adminTeamMemberSearchInitialState = {
  stats: {},
  apiStatus: 'LOADING'
}

export default store => {
  const fetchAndUpdate = debounce((filters) => {
    fetchUsers(filters)
      .then(async res => {
        if (res.status === 200) {
          const stats = await res.json()
          store.setState({ adminTeamMemberSearchResults: { stats, apiStatus: 'SUCCESS' } })
        } else {
          throw new Error('failed to get user data')
        }
      })
      .catch((error) => {
        store.setState({
          adminTeamMemberSearchResults: { apiStatus: 'ERROR', stats: {} },
          notification: { type: 'error', message: error.message }
        })
      })
  }, 300)

  const updateUsers = function (state, newFilters) {
    const { adminTeamMemberFilters, adminTeamMemberSearchResults } = state
    const filters = mergeRight(adminTeamMemberFilters, newFilters)
    store.setState({ adminTeamMemberFilters: filters, adminTeamMemberSearchResults })
    fetchAndUpdate(filters)
  }

  return {
    adminTeamMemberSearch (state, searchText) {
      updateUsers(state, { page: 1, searchText })
    },
    adminTeamMemberPageChange (state, page) {
      updateUsers(state, { page })
    }
  }
}
