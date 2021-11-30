import fetch, { createApiUrl } from './api'

export default function fetchUsers (filters) {
  let { searchText: q, page, selectedValue: country, selectedSortValue: sortType, selectedActive: active, selectedTagValue: tags } = filters
  return fetch(createApiUrl('/api/users/stats', { q, page, country, sortType, active, tags }))
}
