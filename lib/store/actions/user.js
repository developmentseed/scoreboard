import join from 'url-join'
import { APP_URL_PREFIX } from '../../../api/src/config'

export default store => ({
  getUser (state, id) {
    return fetch(join(APP_URL_PREFIX, '/api/users/', id))
      .then(res => {
        console.log(res)
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
  }
})
