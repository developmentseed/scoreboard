import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'

import { actions } from '../lib/store'

import HomeComponent from './home-component'

export class Home extends Component {
  render () {
    return <HomeComponent />
  }
}

export default connect(['authenticatedUser'], actions)(withAlert(Home))
