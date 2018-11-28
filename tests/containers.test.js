import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'unistore/react'

// import {Campaigns, Campaign, Home, User, Users, About} from '../containers';
import { Home } from '../pages/index'
import { Campaigns } from '../pages/campaigns'
import { Campaign } from '../pages/campaign'
import User from '../pages/user'
import { Users } from '../pages/users'
import About from '../pages/about'

import store, { actions } from '../lib/store'

function mockAction () {
  return Promise.resolve()
}

it('Campaigns renders without crashing', () => {
  const div = document.createElement('div')
  const mockProps = {
    campaigns: {
      searchText: '',
      compl_min: 0,
      compl_max: 100,
      page: 1,
      apiStatus: 'LOADING',
      records: {}
    },
    handleCampaignsSearch: mockAction,
    handleCampaignsFilterChange: mockAction,
    handleCampaignsPageChange: mockAction
  }

  const page = (
    <Provider store={store}>
      <Campaigns {...mockProps} />
    </Provider>
  )

  ReactDOM.render(page, div)
})

it('Campaign renders without crashing', () => {
  const div = document.createElement('div')
  const mockProps = {}

  const page = (
    <Provider store={store}>
      <Campaign {...mockProps} />
    </Provider>
  )

  ReactDOM.render(page, div)
})

it('Home renders without crashing', () => {
  const div = document.createElement('div')

  const mockProps = {
    actions,
    getTopStats: mockAction,
    topStats: {
      records: []
    }
  }

  const page = (
    <Provider store={store}>
      <Home {...mockProps} />
    </Provider>
  )

  ReactDOM.render(page, div)
})

it('User renders without crashing', () => {
  const div = document.createElement('div')
  const mockProps = {
    actions,
    records: {
      hashtags: [],
      edit_times: []
    },
    country: 'AF',
    badges: {
      earnedBadges: {}
    }
  }

  const page = (
    <Provider store={store}>
      <User {...mockProps} />
    </Provider>
  )

  ReactDOM.render(page, div)
})

it('Users renders without crashing', () => {
  const div = document.createElement('div')

  const mockProps = {
    users: {},
    searchText: '',
    changeSearchText: mockAction,
    changeCountry: mockAction,
    changeSelectedSort: mockAction,
    changePage: mockAction,
    toggleActive: mockAction,
    getRoles: mockAction
  }

  const page = (
    <Provider store={store}>
      <Users {...mockProps} />
    </Provider>
  )

  ReactDOM.render(page, div)
})

it('About renders without crashing', () => {
  const div = document.createElement('div')

  const page = (
    <Provider store={store}>
      <About />
    </Provider>
  )

  ReactDOM.render(page, div)
})
