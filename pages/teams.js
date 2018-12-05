import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'

/**
 * Teams page shows the list of teams
 * that exist on the platform
 */
class Teams extends Component {
  componentDidMount () {
    this.props.getAllTeams()
  }

  render () {
    const teams = this.props.teams

    return (
      <div className='Users'>
        <header className='header--internal--green header--page'>
          <div className='row'>
            <h1 className='section-sub--left header--xlarge margin-top-sm'>Teams</h1>
          </div>
        </header>
        <section>
          <div className='row'>
            <div className='content--with-sidebar'>
              <h3 className='header--medium'>{teams.length} Results</h3>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const Page = connect(['teams'], actions)(Teams)
export default Page
