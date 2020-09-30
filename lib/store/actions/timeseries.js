import fetch from 'isomorphic-unfetch'

export default store => ({
  getUserTimeseries (state, params) {
    return fetch('https://aafa0798-a624-445f-b894-05fc1f10e200.mock.pstmn.io/api/timeseries', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(async res => {
      if (res.status === 200) {
        const userTimeseries = await res.json()
        store.setState({ timeseries: userTimeseries })
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
