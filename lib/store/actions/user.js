import join from 'url-join'
import { APP_URL_PREFIX } from '../../../api/src/config'

export default store => ({
  getUser (state, id) {
    return fetch(join(APP_URL_PREFIX, '/api/users/', id))
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to get user data')
        }
      })
      .then((user) => {
        store.setState({ user })
      })
      .catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  updateUser (state, id, data) {
    return fetch(join(APP_URL_PREFIX, '/api/users/', id), {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw new Error('failed to authenticate')
      }
    }).then(res => {
      store.setState({ notification: { type: 'success', message: 'User updated successfully' } })
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  }
})
