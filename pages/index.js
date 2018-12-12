import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'

import { actions } from '../lib/store'

import HomeComponent from './home-component'
import DashboardComponent from './dashboard-component'

export class Home extends Component {
  render () {
    const { authenticatedUser } = this.props
    const { loggedIn } = authenticatedUser

    if (!loggedIn) {
      return <HomeComponent />
    }

    return <DashboardComponent />
  }
}

export default connect(['authenticatedUser'], actions)(withAlert(Home))
