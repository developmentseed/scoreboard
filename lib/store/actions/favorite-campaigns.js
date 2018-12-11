import fetch from '../../utils/api'

export default store => ({
  addFavoriteCampign (state, params) {
    return fetch('/api/favorites', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw new Error('failed to authenticate')
      }
    }).then((fav) => {
      const { authenticatedUser } = state
      authenticatedUser.account.favorites.push(fav)
      store.setState({ authenticatedUser: { ...authenticatedUser } })
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  },

  removeFavoriteCampaign (state, id) {
    return fetch(`/api/favorites/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.text()
      } else {
        throw new Error('failed to authenticate')
      }
    }).then(() => {
      const { authenticatedUser } = state

      const favorites = authenticatedUser.account.favorites.filter((item) => {
        return item.id !== id
      })

      authenticatedUser.account.favorites = favorites
      store.setState({ authenticatedUser: { ...authenticatedUser } })
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  }
})
