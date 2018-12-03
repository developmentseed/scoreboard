import fetch from '../../utils/api'

export default store => ({
  getCampaign (state, id) {
    return fetch(`/api/campaigns/${id}`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to get campaign data')
        }
      })
      .then((campaign) => {
        console.log(campaign)
        store.setState({ campaign })
      })
      .catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  }
})
