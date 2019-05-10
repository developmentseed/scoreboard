import fetch, { createApiUrl } from '../../utils/api'
import debounce from 'lodash.debounce'

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
}, 1000)

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
    const newFilters = Object.assign({}, campaigns, { sortOrder: value })
    store.setState({ campaigns: newFilters })
    store.setState({ campaignSearchResults: { apiStatus: 'LOADING', records } })
    updateCampaigns(store, newFilters)
  },

  handleSelectTM (state, selectedValue) {
    const { campaigns, campaignSearchResults: { records } } = state
    const newFilters = Object.assign({}, campaigns, { selectedTM: selectedValue })
    store.setState({ campaigns: newFilters })
    store.setState({ campaignSearchResults: { apiStatus: 'LOADING', records } })
    updateCampaigns(store, newFilters)
  },

  handleCampaignsPageChange (state, page) {
    console.log(page)
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
  }
})
