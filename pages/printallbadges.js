import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'

import { actions } from '../lib/store'

import DashboardBadges from '../components/dashboard/DashboardBadges'

import dynamic from 'next/dynamic'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.props.getAuthenticatedUser()
  }

  componentDidUpdate () {
    const { authenticatedUser, error } = this.props

    if (this.state.loading && (authenticatedUser.loggedIn || error)) {
      this.setState({ loading: false })
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <div />
      )
    }
    const { authenticatedUser } = this.props
    const { loggedIn, account } = authenticatedUser
    const { badges } = account

    // Calculate counts for panel
    const badgeCount = account.badges && badges.earnedBadges ? Object.keys(badges.earnedBadges).length : 0

    let name = null
    if (authenticatedUser) {
      const osmUser = authenticatedUser.osm._xml2json.user
      name = osmUser['@']['display_name']
    }
    return (
      <div className='print-badges'>
        <section className='print-badges__certificate row'>
          <h1 className='print-badges--title'>{name}</h1>
          <h4 className='print-badges--subtitle'>Scoreboard Badges</h4>
          <div className='print-badges__badge-container'>
            <figure>
              <img src='http://localhost:8181/static/badges/0-1-graphic.svg' />
              <h4 className='header--medium'>`${'Badge Name'}`</h4>
            </figure>
            <figure>
              <img src='http://localhost:8181/static/badges/9-1-graphic.svg' />
              <h4 className='header--medium'>`${'Badge Name'}`</h4>
            </figure>
            <figure>
              <img src='http://localhost:8181/static/badges/10-1-graphic.svg' />
              <h4 className='header--medium'>`${'Badge Name'}`</h4>
            </figure>
            <figure>
              <img src='http://localhost:8181/static/badges/11-1-graphic.svg' />
              <h4 className='header--medium'>`${'Badge Name'}`</h4>
            </figure>
            <figure>
              <img src='http://localhost:8181/static/badges/12-1-graphic.svg' />
              <h4 className='header--medium'>`${'Badge Name'}`</h4>
            </figure>
            <figure>
              <img src='http://localhost:8181/static/badges/8-1-graphic.svg' />
              <h4 className='header--medium'>`${'Badge Name'}`</h4>
            </figure>
            <figure>
              <img src='http://localhost:8181/static/badges/7-1-graphic.svg' />
              <h4 className='header--medium'>`${'Badge Name'}`</h4>
            </figure>
            <figure>
              <img src='http://localhost:8181/static/badges/4-1-graphic.svg' />
              <h4 className='header--medium'>`${'Badge Name'}`</h4>
            </figure>
          </div>
        </section>
        <section>
          <div className='row widget-container'>
            <div className='widge-75'>
              <DashboardBadges badges={badges} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'error'], actions)(withAlert(Dashboard))
