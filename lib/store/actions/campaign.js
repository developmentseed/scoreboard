import fetch from '../../utils/api'

export const campaignInitialState = {
  meta: {
    name: '',
    description: '',
    geometry: JSON.stringify({
      'type': 'Feature',
      'geometry': { 'type': 'Point', 'coordinates': [0, 0] }
    })
  },
  lastUpdate: Date.now(),
  creationDate: Date.now(),
  refreshDate: Date.now()
}

export default store => ({
  resetCampaign (state) {
    store.setState({ campaign: campaignInitialState })
  },

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
        store.setState({ campaign })
      })
      .catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  }
})
