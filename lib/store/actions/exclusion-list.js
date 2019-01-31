import fetch from '../../utils/api'
import { prop } from 'ramda'

export default store => ({
  getExclusionList () {
    return fetch('/api/exclusion', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw new Error('Could not get exclusion list')
      }
    }).then((list) => {
      store.setState({ exclusionList: list })
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  },

  updateExclusionList (state, list) {
    let osmIds = list.map(prop('osm_id'))
    return fetch('/api/exclusion', {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify({ list: osmIds }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        store.setState({ exclusionList: list })
        return res.text()
      } else {
        throw new Error('Failed to update exclusion list')
      }
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  }
})
