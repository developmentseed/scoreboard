
import fetch from '../../utils/api'

export default store => ({
  getSettings (state) {
    return fetch('/api/settings', { credentials: 'include' })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to authenticate')
        }
      })
      .then(settings => {
        store.setState({ settings })
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  updateSettings (state, data) {
    return fetch(`/api/settings`, {
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
      store.setState({ notification: { type: 'success', message: 'Settings updated successfully' } })
    })
  },

  resetTeamsAccessTokens (state, data) {
    return fetch(`/api/settings/teams-access-tokens`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(async res => {
      if (res.status === 200) {
        store.setState({ notification: { type: 'success', message: 'Tokens reset successfully' } })
      } else {
        let err = await res.json()
        throw new Error(err.message)
      }
    }).catch(() => {
      store.setState({ notification: { type: 'error', message: 'Unable to reset access tokens' } })
    })
  }

})
