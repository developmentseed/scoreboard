import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/AdminHeader'
import Link from '../../components/Link'

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
        <h1>List</h1>
        <table className='admin-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hashtag</th>
            </tr>
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
    )
  }

  render () {
    const { authenticatedUser } = this.props

    if (this.state.loading) {
      return (
        <div><AdminHeader /></div>
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
          <div className='row'>
            <div className='sidebar'>
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
            <div className='content--with-sidebar'>
              {this.renderList()}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'error', 'teams', 'admin'], actions)(AdminTeams)
