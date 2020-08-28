import fetch from '../../utils/api'

export default store => ({
  getOrganization (state) {
    return fetch(`/api/organizations`)
      .then(async res => {
        const organization = await res.json()
        console.log('organization', organization)
        store.setState({ organization })
      })
      .catch(err => {
        console.error('err', err)
        store.setState({ notification: { type: 'error', message: err.message } })
      })
  }
})
