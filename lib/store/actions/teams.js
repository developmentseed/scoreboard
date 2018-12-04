import fetch from '../../utils/api'

export default store => ({
  getAllTeams (state) {
    store.setState({ teams: { apiStatus: 'LOADING' } })

    fetch('/api/teams')
      .then(async res => {
        const records = await res.json()
        store.setState({ teams: { apiStatus: 'SUCCESS', records } })
      })
      .catch(err => {
        console.log(err)
        store.setState({ teams: { records: [], apiStatus: 'ERROR' } })
        store.setState({ notification: { type: 'error', message: err.message } })
      })
  },

  createTeam (state, params) {
    fetch('/api/teams', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.text()
      } else {
        console.log(res)
        throw new Error('failed to authenticate')
      }
    }).then(res => {
      store.setState({ notification: { type: 'success', message: 'Team created successfully' } })
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  }
})
