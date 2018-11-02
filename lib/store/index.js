import createStore from 'unistore'
import usersActions from './users-actions'
import api from '../utils/api';

const exampleInitialState = {
  loggedIn: false,
  osmProfile: null,
  user: null,
  projects: null,
  error: null,
  topStats: null,
  admin: {
    roles: null,
    users: null,
    user: null
  },
  users: {
    searchText: "",
    selectedValue: null,
    selectedSortValue: null,
    page: 1,
    selectedActive: false,
    stats: null
  }
}

export function initializeStore (initialState = exampleInitialState) {
  const store =  createStore(initialState)
  store.subscribe(state => console.log('state', state))
  return store
}


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

const userActions = store => ({
  /**
  * Get both the OSM profile and the User record from the scoreboard db
  **/
  getAuthenticatedUser(id) {
    return getUserInfo()
      .then(osmProfile => {
        return api('get', `/api/users/${osmProfile.id}`)
          .then(res => {
            store.setState({ user: res.data, osmProfile, loggedIn: true })
          })
          .catch((err) => store.setState({ error: err }))
      }).catch((err) => {
        store.setState({ error: err })
      })
  },

  getUser(id) {
    return api('get', `/api/users/${id}`)
      .then(res => {
        store.setState({ user: res.data })
      }).catch((err) => {
        store.setState({ error: err })
      })
  },

  getProjects() {
    return fetch('/api/projects/')
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

  getRoles() {
    return fetch('/api/roles', { credentials: 'include' })
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
  adminGetUser(state, id) {
    return fetch(`/api/users/${id}`, { credentials: 'include' })
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
  adminGetUsers() {
    return fetch('/api/users', { credentials: 'include' })
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

  updateUserRoles(state, userId, roles) {
    return fetch(`/api/users/${userId}`, {
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

  createBadge (state, params) {
    return fetch(`/api/badges`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).catch((err) => {
      store.setState({ error: err })
    })
  },

  getTopStats () {
    return fetch('/api/topstats')
    .then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw new Error('failed to authenticate')
      }
    })
    .then((topStats) => {
      store.setState({ topStats })
      return topStats
    })
    .catch((error) => {
      store.setState({ error })
    })
  }
})


export function actions(store) {
  return {
    ...userActions(store),
    ...usersActions(store)
  }
}
