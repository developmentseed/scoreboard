import React, { Component } from 'react'
import join from 'url-join'
import { APP_URL_PREFIX } from '../api/src/config'
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
              <img src={join(APP_URL_PREFIX, '/static/teams-icon-private.svg')} />
              <h3 className='link--large'>View your private teams</h3>
            </div>
            <div>
              <img src={join(APP_URL_PREFIX, '/static/teams-icon-new.svg')} />
              <h3 className='link--large'>Create new teams</h3>
            </div>
            <div>
              <img src={join(APP_URL_PREFIX, '/static/teams-icon-edit.svg')} />
              <h3 className='link--large'>Edit and Moderate teams</h3>
            </div>
          </div>
          <Link href='/auth/teams'><a className='button button--primary'>Connect your Teams</a></Link>
        </div>
      </section>
    )
  }
}
