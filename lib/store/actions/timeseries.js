import fetch from '../../utils/api'

export default store => ({
  getUserTimeseries (state, params) {
    return fetch('/api/timeseries', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(async res => {
      if (res.status === 200) {
        const userTimeseries = await res.json()
        console.log('userTimeseries', userTimeseries)
        store.setState({ userTimeseries })
      } else {
        console.log(res.error)
        throw new Error('Failed to create timeseries')
      }
    }).then(res => {
      store.setState({ notification: { type: 'success', message: 'Timeseries created successfully' } })
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  }

})
