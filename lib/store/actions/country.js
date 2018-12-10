import join from 'url-join'
import { APP_URL_PREFIX } from '../../../api/src/config'

export default store => ({
  getCountry (state, alpha2) {
    return fetch(join(APP_URL_PREFIX, '/api/countries/', alpha2))
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to get country data')
        }
      })
      .then((country) => {
        store.setState({ country })
      })
      .catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  }
})
