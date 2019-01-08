import fetch from '../../utils/api'

export default store => ({
  getTaskers (state) {
    return fetch('/api/taskers', { credentials: 'include' })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to authenticate')
        }
      })
      .then(taskers => {
        store.setState({ taskers })
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  createTasker (state, params) {
    return fetch('/api/taskers', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(async res => {
      if (res.status === 200) {
        return res.json()
      } else {
        let err = await res.json()
        throw new Error(err.message)
      }
    }).then(() => {
      store.setState({ notification: { type: 'success', message: 'Tasking manager created successfully' } })
    })
  },

  updateTasker (state, id, data) {
    return fetch(`/api/taskers/${id}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(async res => {
      if (res.status === 200) {
        return res.status
      } else {
        let err = await res.json()
        throw new Error(err.message)
      }
    }).then(() => {
      store.setState({ notification: { type: 'success', message: 'Tasking manager updated successfully' } })
    })
  },

  getTasker (state, id) {
    fetch(`/api/taskers/${id}`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to get tasking manager data')
        }
      })
      .then((tasker) => {
        store.setState({ tasker })
      })
      .catch((error) => {
        console.error(error)
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  deleteTasker (state, id) {
    return fetch(`/api/taskers/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        store.setState({ notification: { type: 'success', message: 'Tasking manager deleted successfully' } })
      } else {
        throw new Error('failed to delete tasking manager')
      }
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  }
})
