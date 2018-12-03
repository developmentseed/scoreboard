export default store => ({
  getBadges (state) {
    return fetch('/api/badges', { credentials: 'include' })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to authenticate')
        }
      })
      .then(badges => {
        store.setState({ badges: badges.badges })
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  createBadge (state, params) {
    return fetch('/api/badges', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  },

  getBadge (state, id) {
    fetch(`/api/badges/${id}`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to authenticate')
        }
      })
      .then(({ badges }) => {
        const [badge] = badges
        store.setState({ badge })
      })
      .catch((error) => {
        console.log('badge error', error)
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  }
})
