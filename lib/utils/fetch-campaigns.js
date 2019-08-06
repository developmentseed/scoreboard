import fetch, { createApiUrl } from './api'

export default function fetchCampaigns (filters) {
  let {
    searchText: q,
    page,
    compl_min,
    compl_max,
    valid_min,
    valid_max,
    selectedTM: tm,
    sortOrder: sortType,
    includeArchived
  } = filters

  return fetch(createApiUrl('/api/campaigns', { q, page, tm, compl_min, compl_max, valid_min, valid_max, sortType, includeArchived }))
}
