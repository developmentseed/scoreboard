import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Link from '../components/Link'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'
import join from 'url-join'

import { APP_URL_PREFIX } from '../api/src/config'
import { actions } from '../lib/store'
import trimLength from '../lib/utils/trim_length'
import { formatDecimal } from '../lib/utils/format'
import TopEditorsChart from '../components/charts/TopEditorsChart'
import EditorsByCountry from '../components/charts/EditorsByCountryChart'

const Map = dynamic(() => import('../components/charts/HomeMap'), {
  ssr: false
})

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
