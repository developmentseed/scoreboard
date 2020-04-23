import { flatten, fromPairs } from 'ramda'
import fetch from '../../utils/api'

export default store => ({
  getAllTeams (state) {
    return fetch('/api/teams')
      .then(res => res.json())
      .then(async teams => {
        // enhance the teams listing with moderator names
        const moderatorIds = new Set(flatten(teams.map(team => team.moderators)))
        const fetchParams = { ids: Array.from(moderatorIds) }
        const fetchInit = {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(fetchParams)
        }
        const moderatorNames = await fetch('/api/users/names', fetchInit)
          .then(res => res.json())
          .then(records => fromPairs(records.map(({ osm_id, full_name }) => [osm_id, full_name])))
        return teams.map(team => ({
          ...team,
          moderators: fromPairs(team.moderators.map(osmId => [osmId, moderatorNames[osmId]]))
        }))
      })
      .then(records => {
        store.setState({ teams: { records } })
      })
      .catch(err => {
        console.log(err)
        store.setState({ teams: { records: [] } })
        store.setState({ notification: { type: 'error', message: err.message } })
      })
  },

  getTeam (state, id) {
    return fetch(`/api/teams/${id}`)
      .then(async res => {
        const team = await res.json()
        store.setState({ team })
      })
      .catch(err => {
        console.log(err)
        store.setState({ notification: { type: 'error', message: err.message } })
      })
  },

  updateTeam (state, id, params) {
    return fetch(`/api/teams/${id}`, {
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
        console.log(res)
        throw new Error('Failed to update team')
      }
    }).then(res => {
      store.setState({ notification: { type: 'success', message: 'Team updated successfully' } })
    }).catch((error) => {
      console.error(error)
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  },

  deleteTeam (state, id) {
    return fetch(`/api/teams/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.text()
      } else {
        console.log(res.error)
        throw new Error('Failed to delete team')
      }
    }).then(res => {
      store.setState({ notification: { type: 'success', message: 'Team deleted successfully' } })
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  },

  createTeam (state, params) {
    return fetch('/api/teams', {
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
        console.log(res.error)
        throw new Error('Failed to create team')
      }
    }).then(res => {
      store.setState({ notification: { type: 'success', message: 'Team created successfully' } })
    }).catch((error) => {
      store.setState({ notification: { type: 'error', message: error.message } })
    })
  },

  assignModerator (state, params) {
    const { id, osmId } = params

    return fetch(`/api/teams/${id}/assignModerator/${osmId}`, {
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
        throw new Error('Failed to update team')
      }
    }).then(fetch(`/api/teams/${id}`)
      .then(async res => {
        const team = await res.json()
        store.setState({ team })
      }))
      .then(() => {
        store.setState({ notification: { type: 'success', message: 'Moderator added successfully' } })
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  removeModerator (state, params) {
    const { id, osmId } = params

    return fetch(`/api/teams/${id}/removeModerator/${osmId}`, {
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
        throw new Error('Failed to update team')
      }
    }).then(fetch(`/api/teams/${id}`)
      .then(async res => {
        const team = await res.json()
        store.setState({ team })
      }))
      .then(() => {
        store.setState({ notification: { type: 'success', message: 'Moderator removed successfully' } })
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  }
})
