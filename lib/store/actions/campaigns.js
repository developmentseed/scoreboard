import fetch, { createApiUrl } from '../../utils/api'
import debounce from 'lodash.debounce'

export const campaignFiltersInitialState = {
  searchText: '',
  compl_min: 0,
  compl_max: 100,
  valid_min: 0,
  valid_max: 100,
  selectedTM: null,
  sortOrder: null,
  page: 1
}

export const campaignSearchInitialState = {
  apiStatus: 'LOADING',
  records: {}
}

const updateCampaigns = debounce((store, filters) => {
  let {
    searchText: q,
    page,
    compl_min,
    compl_max,
    valid_min,
    valid_max,
    selectedTM: tm,
    sortOrder: sortType
  } = filters

  fetch(createApiUrl('/api/campaigns', { q, page, tm, compl_min, compl_max, valid_min, valid_max, sortType }))
    .then(async res => {
      const records = await res.json()
      store.setState({ campaignSearchResults: { apiStatus: 'SUCCESS', records } })
    })
    .catch(err => {
      console.error(err)
      store.setState({ campaignSearchResults: { apiStatus: 'ERROR' } })
      store.setState({ notification: { type: 'error', message: err.message } })
    })
}, 300)

export default store => ({
  handleCampaignsSearch (state, value) {
    const { campaigns, campaignSearchResults: { records } } = state
    const newFilters = Object.assign({}, campaigns, { page: 1, searchText: value })
    store.setState({ campaigns: newFilters })
    store.setState({ campaignSearchResults: { apiStatus: 'LOADING', records } })
    updateCampaigns(store, newFilters)
  },

  handleCampaignsSortChange (state, value) {
    const { campaigns, campaignSearchResults: { records } } = state
    const newFilters = Object.assign({}, campaigns, { page: 1, sortOrder: value })
    store.setState({ campaigns: newFilters })
    store.setState({ campaignSearchResults: { apiStatus: 'LOADING', records } })
    updateCampaigns(store, newFilters)
  },

  handleSelectTM (state, selectedValue) {
    const { campaigns, campaignSearchResults: { records } } = state
    const newFilters = Object.assign({}, campaigns, { page: 1, selectedTM: selectedValue })
    store.setState({ campaigns: newFilters })
    store.setState({ campaignSearchResults: { apiStatus: 'LOADING', records } })
    updateCampaigns(store, newFilters)
  },

  handleCampaignsPageChange (state, page) {
    const { campaigns, campaignSearchResults: { records } } = state
    const newFilters = Object.assign({}, campaigns, { page })
    store.setState({ campaigns: newFilters })
    store.setState({ campaignSearchResults: { apiStatus: 'LOADING', records } })
    updateCampaigns(store, newFilters)
  },

  handleCampaignsCompletenessChange (state, completeness) {
    const { campaigns, campaignSearchResults: { records } } = state
    const newFilters = Object.assign({}, campaigns, {
      compl_min: completeness.min,
      compl_max: completeness.max,
      page: 1
    })
    store.setState({ campaigns: newFilters })
    store.setState({ campaignSearchResults: { apiStatus: 'LOADING', records } })
    updateCampaigns(store, newFilters)
  },

  handleCampaignsValidationChange (state, validation) {
    const { campaigns, campaignSearchResults: { records } } = state
    const newFilters = Object.assign({}, campaigns, {
      valid_min: validation.min,
      valid_max: validation.max,
      page: 1
    })
    store.setState({ campaigns: newFilters })
    store.setState({ campaignSearchResults: { apiStatus: 'LOADING', records } })
    updateCampaigns(store, newFilters)
  },

  handleCampaignsFiltersReset (state) {
    const { campaigns, campaignSearchResults: { records } } = state
    const newFilters = Object.assign({}, campaigns, campaignFiltersInitialState)
    store.setState({ campaigns: newFilters })
    store.setState({ campaignSearchResults: { apiStatus: 'LOADING', records } })
    updateCampaigns(store, newFilters)
  }
})
