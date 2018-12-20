import fetch, { createApiUrl } from '../../utils/api'

function updateUsers (store, storeData) {
  store.setState({ users: { ...storeData, apiStatus: 'LOADING' } })
  let { searchText: q, page, selectedValue: country, selectedSortValue: sortType, selectedActive: active } = storeData
  return fetch(createApiUrl('/api/users/stats', { q, page, country, sortType, active }))
    .then(async res => {
      if (res.status === 200) {
        const stats = await res.json()
        store.setState({ users: { ...storeData, stats, apiStatus: 'SUCCESS' } })
      } else {
        throw new Error('failed to get user data')
      }
    })
    .catch((error) => {
      store.setState({ users: { apiStatus: 'ERROR', stats: {} }, notification: { type: 'error', message: error.message } })
    })
}

export default store => ({
  changePage (state, page) {
    const { users } = state
    users.page = page
    updateUsers(store, users)
  },

  changeSearchText (state, searchText) {
    const { users } = state
    users.searchText = searchText
    users.page = 1
    updateUsers(store, users)
  },

  changeCountry (state, selectedValue) {
    const { users } = state
    users.selectedValue = selectedValue
    users.page = 1
    updateUsers(store, users)
  },

  changeSelectedSort (state, selectedSortValue) {
    const { users } = state
    users.selectedSortValue = selectedSortValue
    users.page = 1
    updateUsers(store, users)
  },

  handleActiveSelect (state, selectedActive) {
    const { users } = state
    users.selectedActive = selectedActive
    users.page = 1
    updateUsers(store, users)
  }
})
