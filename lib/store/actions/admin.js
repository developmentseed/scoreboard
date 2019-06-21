
import { mergeRight } from 'ramda'
import debounce from 'lodash.debounce'
import fetchUsers from '../../utils/fetch-users'
import fetchCampaigns from '../../utils/fetch-campaigns'

export const adminTeamMemberFiltersInitialState = {
  searchText: '',
  page: 1
}

export const adminTeamMemberSearchInitialState = {
  stats: {},
  apiStatus: 'LOADING'
}

export const adminTeamCampaignsFiltersInitialState = {
  searchText: '',
  page: 1
}

export const adminTeamCampaignsSearchInitialState = {
  records: {},
  apiStatus: 'LOADING'
}
export default store => {
  const fetchAndUpdateUsers = debounce((filters) => {
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

  const fetchAndUpdateCampaigns = debounce((filters) => {
    fetchCampaigns(filters)
      .then(async res => {
        if (res.status === 200) {
          const records = await res.json()
          store.setState({ adminTeamCampaignsSearchResults: { records, apiStatus: 'SUCCESS' } })
        } else {
          throw new Error('failed to get user data')
        }
      })
      .catch((error) => {
        store.setState({
          adminTeamCampaignsSearchResults: { apiStatus: 'ERROR', records: {} },
          notification: { type: 'error', message: error.message }
        })
      })
  })

  const updateUsers = function (state, newFilters) {
    const { adminTeamMemberFilters, adminTeamMemberSearchResults } = state
    const filters = mergeRight(adminTeamMemberFilters, newFilters)
    store.setState({ adminTeamMemberFilters: filters, adminTeamMemberSearchResults })
    fetchAndUpdateUsers(filters)
  }

  const updateCampaigns = function (state, newFilters) {
    const { adminTeamCampaignsFilters, adminTeamCampaignsSearchResults } = state
    const filters = mergeRight(adminTeamCampaignsFilters, newFilters)
    store.setState({ adminTeamCampaignsFilters: filters, adminTeamCampaignsSearchResults })
    fetchAndUpdateCampaigns(filters)
  }

  return {
    adminTeamMemberSearch (state, searchText) {
      updateUsers(state, { page: 1, searchText })
    },
    adminTeamMemberPageChange (state, page) {
      updateUsers(state, { page })
    },
    adminTeamCampaignsSearch (state, searchText) {
      updateCampaigns(state, { page: 1, searchText })
    },
    adminTeamCampaignsPageChange (state, page) {
      updateCampaigns(state, { page })
    }
  }
}
