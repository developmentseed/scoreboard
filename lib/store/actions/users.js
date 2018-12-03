import join from 'url-join'
import fetch from '../../utils/api'
import { APP_URL_PREFIX } from '../../../api/src/config'

function updateUsers (store, storeData) {
  store.setState({ users: { ...storeData, apiStatus: 'LOADING' } })
  return fetch(join(APP_URL_PREFIX, '/api/users/stats'))
    .then(async res => {
      if (res.status === 200) {
        const stats = await res.json()
        store.setState({ users: { ...storeData, stats, apiStatus: 'SUCCESS' } })
      } else {
        throw new Error('failed to get user data')
      }
    })
    .catch((error) => {
      store.setState({ users: { apiStatus: 'ERROR' }, notification: { type: 'error', message: error.message } })
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

  toggleActive (state, selectedActive) {
    const { users } = state
    users.selectedActive = selectedActive
    users.page = 1
    updateUsers(store, users)
  }
})
