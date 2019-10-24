import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import Link from '../../components/Link'
import { LoadingState } from '../../components/common/LoadingState'
import TableHeaders from '../common/TableHeaders'
import { tableHeaderNames } from '../lib/enums'

export class AdminTeams extends Component {
  constructor () {
    super()

    this.state = {
      loading: true
    }
  }

  async componentDidMount () {
    try {
      await this.props.getAuthenticatedUser()
      await this.props.getAllTeams()
      this.setState({ loading: false })
    } catch (err) {
      console.log(err)
      this.setState({ loading: false })
    }
  }

  onTeamClick (team) {
    Router.push(`/admin/teams/${team.id}`)
  }

  renderList () {
    const { teams } = this.props

    if (!teams.records || !teams.records.length) return

    return (
      <div>
        <h1>All Teams</h1>
        <div className='widget'>
          <table className='admin-table'>
            <thead>
              <TableHeaders tableName={tableHeaderNames.TEAM} />
            </thead>
            <tbody>
              {
                teams.records
                  .map((team) => (
                    <tr key={`team-${team.name}`} onClick={() => this.onTeamClick(team)} className='admin-table-row'>
                      <td>{team.name}</td>
                      <td>{team.hashtag}</td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  render () {
    const { authenticatedUser } = this.props

    if (this.state.loading) {
      return (
        <div>
          <AdminHeader />
          <LoadingState />
        </div>
      )
    }

    if (!authenticatedUser.loggedIn) {
      return <NotLoggedIn />
    }

    if (!isAdmin(authenticatedUser.account.roles)) {
      return Router.push('/')
    }

    return (
      <div className='admin'>
        <AdminHeader />
        <section>
          <div className='row widget-container'>
            <div className='widget-25'>
              <h2 className='header--large'>Teams</h2>
              <ul className='admin-sidebar-links'>
                <li>
                  <Link href='/admin/teams/add'>
                    <a className='link--large'>
                      Create new team
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='widget-75'>
              {this.renderList()}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'error', 'teams', 'admin'], actions)(AdminTeams)
