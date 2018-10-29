export default store => ({
  changePage (state, page) {
    const { users } = state
    users.page = page
    store.setState({ users })
  },

  changeSearchText (state, searchText) {
    const { users } = state
    users.searchText = searchText
    users.page = 1
    store.setState({ users })
  },

  changeCountry (state, selectedValue) {
    const { users } = state
    users.selectedValue = selectedValue
    users.page = 1
    store.setState({ users })
  },

  changeSelectedSort (state, selectedSortValue) {
    const { users } = state
    users.selectedSortValue = selectedSortValue
    users.page = 1
    store.setState({ users })
  },

  toggleActive (state, activeValue) {
    const { users } = state
    users.activeValue = activeValue
    users.page = 1
    store.setState({ users })
    return { activeValue, page: 1 }
  }
})