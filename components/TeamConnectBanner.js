import React, { Component } from 'react'
import Link from './Link'

export default class TeamsConnectBanner extends Component {
  render () {
    return (
      <section className='teams row'>
        <div className='widget widget--banner'>
          <h1 className='header--large'>Start using teams</h1>
          <p>Connect the Teams application with Scoreboard to:</p>
          <div className='widget-container'>
            <div>
              <img src='../../static/teams-icon-private.svg' />
              <h3 className='link--large'>View your private teams</h3>
            </div>
            <div>
              <img src='../../static/teams-icon-new.svg' />
              <h3 className='link--large'>Create new teams</h3>
            </div>
            <div>
              <img src='../../static/teams-icon-edit.svg' />
              <h3 className='link--large'>Edit and Moderate teams</h3>
            </div>
          </div>
          <Link href='/auth/teams'><a className='button button--primary'>Connect your Teams</a></Link>
        </div>
      </section>
    )
  }
}
