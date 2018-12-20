import fetch from '../../utils/api'
import imageList from '../../utils/loadImages.js'

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
    }).then(async res => {
      if (res.status === 200) {
        return res.json()
      } else {
        let err = await res.json()
        throw new Error(err.message)
      }
    }).then(() => {
      store.setState({ notification: { type: 'success', message: 'Badge created successfully' } })
    })
  },

  updateBadge (state, id, data) {
    return fetch(`/api/badges/${id}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(async res => {
      if (res.status === 200) {
        return res.status
      } else {
        let err = await res.json()
        throw new Error(err.message)
      }
    }).then(() => {
      store.setState({ notification: { type: 'success', message: 'Badge updated successfully' } })
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
        badge.selectedImg = imageList.indexOf(badge.imageFile)
        store.setState({ badge })
      })
      .catch((error) => {
        console.error(error)
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  deleteBadge (state, id) {
    return fetch(`/api/badges/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(() => {
      store.setState({ notification: { type: 'success', message: 'Badge deleted successfully' } })
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  }
})
