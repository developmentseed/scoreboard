import fetch from '../../utils/api'
const { OSM_TEAMS_ORG_ID } = require('../../../api/src/config')

export default store => ({
  getOrganizationStaff (state) {
    return fetch(`/api/organizations/${OSM_TEAMS_ORG_ID}/staff`)
      .then(async res => {
        const organization = await res.json()
        store.setState({ organization })
      })
      .catch(err => {
        console.error('err', err)
        store.setState({ notification: { type: 'error', message: err.message } })
      })
  },
  addOwner (state, osmId) {
    return fetch(`/api/organizations/${OSM_TEAMS_ORG_ID}/addOwner/${osmId}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.text()
      } else {
        console.log(res.error)
        throw new Error('Failed to update owner')
      }
    }).then(fetch(`/api/organizations/`)
      .then(async res => {
        const organization = await res.json()
        store.setState({ organization })
      }))
      .then(() => {
        store.setState({ notification: { type: 'success', message: 'Owner added successfully' } })
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },
  removeOwner (state, osmId) {
    const params = { id: OSM_TEAMS_ORG_ID, osmId }

    return fetch(`/api/organizations/${OSM_TEAMS_ORG_ID}/removeOwner/${osmId}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.text()
      } else {
        console.log(res.error)
        throw new Error('Failed to update owner')
      }
    }).then(fetch(`/api/organizations/`)
      .then(async res => {
        const organization = await res.json()
        store.setState({ organization })
      }))
      .then(() => {
        store.setState({ notification: { type: 'success', message: 'Owner removed successfully' } })
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },
  addManager (state, osmId) {
    return fetch(`/api/organizations/${OSM_TEAMS_ORG_ID}/addManager/${osmId}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.text()
      } else {
        console.log(res.error)
        throw new Error('Failed to update manager')
      }
    }).then(fetch(`/api/organizations/`)
      .then(async res => {
        const organization = await res.json()
        store.setState({ organization })
      }))
      .then(() => {
        store.setState({ notification: { type: 'success', message: 'Manager added successfully' } })
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },
  removeManager (state, osmId) {
    const params = { id: OSM_TEAMS_ORG_ID, osmId }

    return fetch(`/api/organizations/${OSM_TEAMS_ORG_ID}/removeManager/${osmId}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.text()
      } else {
        console.log(res.error)
        throw new Error('Failed to update manager')
      }
    }).then(fetch(`/api/organizations/`)
      .then(async res => {
        const organization = await res.json()
        store.setState({ organization })
      }))
      .then(() => {
        store.setState({ notification: { type: 'success', message: 'Manager removed successfully' } })
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  }

})
