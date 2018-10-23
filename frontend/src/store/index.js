import createStore from 'unistore'

import api from '../utils/api';

export const store = createStore({
  loggedIn: false,
  osmProfile: null,
  user: null,
  projects: null,
  error: null,
  badges: null,
  admin: {
    roles: null,
    users: null,
    user: null
  }
})

store.subscribe(state => console.log('state', state))

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
          const { admin } = store.getState()
          admin.roles = roles
          store.setState({ admin })
        }).catch((err) => {
          store.setState({ error: err })
        })
    },

    /**
    * get user for admin editing page 
    **/
    adminGetUser (state, id) {
      return fetch(`/scoreboard/api/users/${id}`, { credentials: 'include' })
        .then(res => {
          if (res.status === 200) {
            return res.json()
          } else {
            throw new Error('failed to authenticate')
          }
        })
        .then(user => {
          const { admin } = store.getState()
          admin.user = user
          store.setState({ admin })
        }).catch((err) => {
          store.setState({ error: err })
        })
    },

    /**
    * get list of users for admin list
    **/
    adminGetUsers () {
      return fetch('/scoreboard/api/users', { credentials: 'include' })
        .then(res => {
          if (res.status === 200) {
            return res.json()
          } else {
            throw new Error('failed to authenticate')
          }
        })
        .then(users => {
          const { admin } = store.getState()
          admin.users = users
          store.setState({ admin })
        }).catch((err) => {
          store.setState({ error: err })
        })
    },

    updateUserRoles (state, userId, roles) {
      return fetch(`/scoreboard/api/users/${userId}`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify({ roles }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then(res => {
          if (res.status === 200) {
            return res.json()
          } else {
            throw new Error('failed to authenticate')
          }
        })
        .catch((err) => {
          store.setState({ error: err })
        })
    },

    getBadges (state) {
      return api('get', '/api/badges')
        .then((res) => {
          store.setState({ badges: res.data })
        })
        .catch((err) => {
          store.setState({ error: err })
        })
    },

    updateBadges (state, params) {
      return api('post', '/api/badges', params)
        .catch((err) => {
          store.setState({ error: err })
        })
    }
  }
}
