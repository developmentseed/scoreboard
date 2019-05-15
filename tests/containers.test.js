import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'unistore/react'

// import { Home } from '../pages/index'
import { Campaigns } from '../pages/campaigns'
import { Campaign } from '../pages/campaign'
import { Countries } from '../pages/countries'
import { Country } from '../pages/country'
import { User } from '../pages/user'
import { Users } from '../pages/users'
import About from '../pages/about'

import store, { actions, InitialState } from '../lib/store'

function mockAction () {
  return Promise.resolve()
}

it('Campaigns renders without crashing', () => {
  const div = document.createElement('div')
  const campaigns = InitialState.campaigns
  const campaignSearchResults = InitialState.campaignSearchResults
  const mockProps = {
    campaigns,
    campaignSearchResults,
    resetCampaign: mockAction,
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
  const campaign = InitialState.campaign
  const mockProps = {
    campaign,
    getCampaign: mockAction
  }

  const page = (
    <Provider store={store}>
      <Campaign {...mockProps} />
    </Provider>
  )

  ReactDOM.render(page, div)
})



// Home has nested components that are connected to the unistore
// Because of that it throws `TypeError: Cannot read property 'action' of undefined`
// TODO: fix this
// it('Home renders without crashing', () => {
//   const div = document.createElement('div')
//
//   const mockProps = {
//     actions,
//     authenticatedUser: {}
//   }
//
//   const page = (
//     <Provider store={store}>
//       <Home {...mockProps} />
//     </Provider>
//   )
//
//   ReactDOM.render(page, div)
// })

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
    },
    getUser: mockAction
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
    usersFilters: InitialState.usersFilters,
    usersSearchResults: InitialState.usersSearchResults,
    resetUser: mockAction,
    usersSearch: mockAction,
    usersPageChange: mockAction,
    usersChangeCountry: mockAction,
    usersChangeSelectedSource: mockAction,
    usersChangeActiveSelect: mockAction,
    getRoles: mockAction
  }

  const page = (
    <Provider store={store}>
      <Users {...mockProps} />
    </Provider>
  )

  ReactDOM.render(page, div)
})

it('Countries renders without crashing', () => {
  const div = document.createElement('div')

  const mockProps = {
    countriesFilters: InitialState.countriesFilters,
    countriesSearchResults: InitialState.countriesSearchResults,
    resetCountry: mockAction,
    countriesSearch: mockAction,
    countriesPageChange: mockAction,
    countriesChangeSelectedSource: mockAction
  }

  const page = (
    <Provider store={store}>
      <Countries {...mockProps} />
    </Provider>
  )

  ReactDOM.render(page, div)
})

it('Country renders without crashing', () => {
  const div = document.createElement('div')

  const mockProps = {
    country: null,
    getCountry: mockAction
  }

  const page = (
    <Provider store={store}>
      <Country {...mockProps} />
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
