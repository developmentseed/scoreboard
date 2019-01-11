import fetch, { createApiUrl } from '../../utils/api'

export default store => ({
  getCountry (state, code) {
    return fetch(createApiUrl(`/api/countries/${code}`, { participantLimit: 15 }))
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
