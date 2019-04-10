import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'
import join from 'url-join'
import { APP_URL_PREFIX } from '../api/src/config'
import { actions } from '../lib/store'

class PrintBadges extends Component {
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
    const { account } = authenticatedUser
    const { badges } = account
    const { earnedBadges } = badges

    let name = null
    if (authenticatedUser) {
      const osmUser = authenticatedUser.osm._xml2json.user
      name = osmUser['@']['display_name']
    }
    return (
      <div className='print-badges admin'>
        <div className='row'>
          <h1 className='header--large'>Your Scoreboard Certificate</h1>
          <button className='button' onClick={() => window.print()}>Print certificate</button>
        </div>
        <section className='print-badges__certificate row'>
          <img src='../static/android-chrome-192x192.png' />
          <h1 className='print-badges--title'>{name}</h1>
          <h4 className='print-badges--subtitle'>Scoreboard Badges</h4>
          <div className='print-badges__badge-container'>
            {
              Object.keys(earnedBadges).map((x, i) => {
                let earnedBadge = earnedBadges[i]
                const imgSrc = join(APP_URL_PREFIX, `/static/badges/${earnedBadge.badgeImage}`)
                return (
                  <figure className='print-badges__badge'>
                    <img src={imgSrc} />
                    <h4 className='header--small'>{earnedBadge.name}</h4>
                  </figure>
                )
              })
            }
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'error'], actions)(withAlert(PrintBadges))
