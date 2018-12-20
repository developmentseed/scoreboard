import createStore from 'unistore'
import usersActions from './actions/users'
import campaignActions from './actions/campaign'
import campaignsActions from './actions/campaigns'
import countriesActions from './actions/countries'
import badgesActions from './actions/badges'
import teamsActions from './actions/teams'
import userActions from './actions/user'
import favoritesActions from './actions/favorite-campaigns'
import countryActions from './actions/country'
import join from 'url-join'
import fetch from '../utils/api'

const exampleInitialState = {
  authenticatedUser: {
    loggedIn: false,
    account: null,
    osm: null
  },
  teams: {
    records: [],
    apiStatus: 'LOADING'
  },
  team: null,
  user: null,
  projects: null,
  topStats: null,
  admin: {
    roles: null,
    users: null,
    user: null
  },
  badge: null,
  badges: null,
  users: {
    searchText: '',
    selectedValue: null,
    selectedSortValue: null,
    page: 1,
    selectedActive: 'active',
    stats: {}
  },
  countries: {
    searchText: '',
    selectedSortValue: null,
    page: 1,
    stats: {}
  },
  campaign: {
    records: {}
  },
  campaigns: {
    searchText: '',
    compl_min: 0,
    compl_max: 100,
    page: 1,
    apiStatus: 'LOADING',
    records: {}
  },
  notification: null
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(initialState)
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
    .catch(console.error)
}

const indexActions = store => ({
  /**
  * Get both the OSM profile and the User record from the scoreboard db
  **/
  getAuthenticatedUser (id) {
    return getUserInfo()
      .then(osm => {
        if (!osm) return
        return fetch(join('/api/users/', osm.id))
          .then(res => {
            if (res.status === 200) {
              return res.json()
            }
          })
          .then(account => {
            store.setState({
              authenticatedUser: {
                loggedIn: true,
                account,
                osm
              }
            })
          })
      })
  },

  getProjects () {
    return fetch(join('/api/projects/'))
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
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  getRoles () {
    return fetch(join('/api/roles'), { credentials: 'include' })
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
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  /**
  * get user for admin editing page
  **/
  adminGetUser (state, id) {
    return fetch(join('/api/users/', id), { credentials: 'include' })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to auhenticate')
        }
      })
      .then(user => {
        const { admin } = store.getState()
        admin.user = user
        store.setState({ admin })
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  /**
  * get list of users for admin list
  **/
  adminGetUsers () {
    return fetch(join('/api/users'), { credentials: 'include' })
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
      }).catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  updateUserRoles (state, userId, roles) {
    return fetch(join('/api/users/', userId), {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify({ roles }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to authenticate')
        }
      })
      .catch((error) => {
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  async getTopStats () {
    return fetch('/api/topstats')
      .then(async (res) => {
        const result = await res.json()
        if (res.status === 200) {
          return result
        } else {
          throw new Error(`${result.error}: ${result.message}`)
        }
      })
      .then((topStats) => {
        store.setState({ topStats })
      })
      .catch((error) => {
        console.error(error)
        store.setState({ notification: { type: 'error', message: error.message } })
      })
  },

  clearNotification () {
    return { notification: null }
  },

  setNotification (state, notification) {
    return { notification }
  }
})

export function actions (store) {
  return {
    ...userActions(store),
    ...indexActions(store),
    ...teamsActions(store),
    ...campaignActions(store),
    ...usersActions(store),
    ...campaignsActions(store),
    ...badgesActions(store),
    ...favoritesActions(store),
    ...countriesActions(store),
    ...countryActions(store)
  }
}
