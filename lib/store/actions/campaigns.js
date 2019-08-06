
import { mergeRight } from 'ramda'
import debounce from 'lodash.debounce'
import fetchCampaigns from '../../utils/fetch-campaigns'

export const campaignFiltersInitialState = {
  searchText: '',
  compl_min: 0,
  compl_max: 100,
  valid_min: 0,
  valid_max: 100,
  selectedTM: null,
  sortOrder: null,
  page: 1,
  includeArchived: false
}

export const campaignSearchInitialState = {
  apiStatus: 'LOADING',
  records: {}
}

export default store => {
  const fetchAndUpdateCampaigns = debounce(filters => {
    fetchCampaigns(filters)
      .then(async res => {
        if (res.status === 200) {
          const records = await res.json()
          store.setState({ campaignSearchResults: { records, apiStatus: 'SUCCESS' } })
        } else {
          throw new Error('failed to get user data')
        }
      })
      .catch((error) => {
        store.setState({
          campaignSearchResults: { apiStatus: 'ERROR', records: {} },
          notification: { type: 'error', message: error.message }
        })
      })
  }, 300)

  const updateCampaigns = function (state, newFilters) {
    const { campaigns, campaignSearchResults } = state
    const filters = mergeRight(campaigns, newFilters)
    store.setState({ campaigns: filters, campaignSearchResults })
    fetchAndUpdateCampaigns(filters)
  }

  return {
    handleCampaignsSearch (state, value) {
      updateCampaigns(state, { page: 1, searchText: value })
    },

    handleCampaignsSortChange (state, value) {
      updateCampaigns(state, { page: 1, sortOrder: value })
    },

    handleSelectTM (state, selectedValue) {
      updateCampaigns(state, { page: 1, selectedTM: selectedValue })
    },

    handleCampaignsPageChange (state, page) {
      updateCampaigns(state, { page })
    },

    handleCampaignsCompletenessChange (state, completeness) {
      updateCampaigns(state, {
        compl_min: completeness.min,
        compl_max: completeness.max,
        page: 1
      })
    },

    handleArchivedToggle (state, value) {
      updateCampaigns(state, {
        includeArchived: value
      })
    },

    handleCampaignsValidationChange (state, validation) {
      updateCampaigns(state, {
        valid_min: validation.min,
        valid_max: validation.max,
        page: 1
      })
    },

    handleCampaignsFiltersReset (state) {
      updateCampaigns(state, campaignFiltersInitialState)
    }
  }
}
