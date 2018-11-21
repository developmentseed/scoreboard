export default store => ({
  getUsersStats (state, params) {
    return fetch('/api/users/stats')
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to authenticate')
        }
      })
      .then((stats) => {
        const { users } = state
        users.stats = stats
        store.setState({ users: { ...users } })
      })
      .catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  changePage (state, page) {
    const { users } = state
    users.page = page
    store.setState({ users: { ...users } })
  },

  changeSearchText (state, searchText) {
    const { users } = state
    users.searchText = searchText
    users.page = 1
    store.setState({ users: { ...users } })
  },

  changeCountry (state, selectedValue) {
    const { users } = state
    users.selectedValue = selectedValue
    users.page = 1
    store.setState({ users: { ...users } })
  },

  changeSelectedSort (state, selectedSortValue) {
    const { users } = state
    users.selectedSortValue = selectedSortValue
    users.page = 1
    store.setState({ users: { ...users } })
  },

  toggleActive (state, activeValue) {
    const { users } = state
    users.activeValue = activeValue
    users.page = 1
    store.setState({ users: { ...users } })
    return { activeValue, page: 1 }
  }
})
