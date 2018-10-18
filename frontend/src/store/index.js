import createStore from 'unistore'

import api from '../utils/api';

export const store = createStore({
  loggedIn: false,
  osmProfile: null,
  user: null,
  projects: null,
  error: null,
  admin: {
    roles: null
  }
})

function getUserInfo () {
  return fetch('/auth/userinfo')
    .then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw new Error('failed to authenticate')
      }
    })
}

export function actions (store) {
  return {
    /**
    * Get both the OSM profile and the User record from the scoreboard db
    **/
    getAuthenticatedUser (id) {
      return getUserInfo()
        .then(osmProfile => {
          return api('get', `/api/users/${osmProfile.id}`)
            .then(res => {
              return store.setState({ user: res.data, osmProfile, loggedIn: true })
            })
            .catch((err) => store.setState({ error: err }))
        }).catch((err) => {
          store.setState({ error: err })
        })
    },

    getUser (id) {
      return api('get', `/api/users/${id}`)
        .then(res => {
          store.setState({ user: res.data })
        }).catch((err) => {
          store.setState({ error: err })
        })
    },

    getProjects () {
      return fetch('/scoreboard/api/projects/')
        .then(res => {
          if (res.status === 200) {
            return res.json()
          } else {
            throw new Error('failed to authenticate')
          }
        })
        .then((projects) => {
          store.setState({ projects })
        })
        .catch((error) => {
          store.setState({ error })
        })
    },

    getRoles () {
      return fetch('/scoreboard/api/roles', { credentials: 'include' })
        .then(res => {
          if (res.status === 200) {
            return res.json()
          } else {
            throw new Error('failed to authenticate')
          }
        })
        .then(roles => {
          store.setState({ admin: { roles } })
        }).catch((err) => {
          store.setState({ error: err })
        })
    }
  }
}
