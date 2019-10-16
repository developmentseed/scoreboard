import React, { Component } from 'react'
import Link from '../../components/Link'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import { LoadingState } from '../../components/common/LoadingState'
import { Tooltip } from '../../components/common/Tooltip'

const { selectHeaders, tableHeaderNames } = require('../../lib/utils/tableHeaderSelector')

export class AdminUsers extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.props.getAuthenticatedUser().then(() => {
      Promise.all([
        this.props.getRoles(),
        this.props.adminGetUsers()
      ]).then(() => {
        this.setState({ loading: false })
      })
    })
  }

  renderUserRoles (roles) {
    if (!roles) return
    return roles.map((role) => role.name).join(', ')
  }

  onUserClick (user) {
    Router.push(`/admin/users/${user.osm_id}`)
  }

  renderList () {
    const { admin } = this.props
    if (!admin || !admin.users) return

    // Reorders headers to show UserId first
    const headers = selectHeaders(tableHeaderNames.ADMIN_USER)
      .map(header => (
        header.displayTooltip ? (
          <th key={header.id}>
            <Tooltip dataTip={header.description_en}>{header.name_en}</Tooltip>
          </th>
        ) : (
          <th key={header.id}>{header.name_en}</th>
        )
      ))

    return (
      <div className='admin'>
        <h1>All Users</h1>
        <div className='widget'>
          <table className='admin-table'>
            <thead>
              <tr>
                {headers}
              </tr>
            </thead>
            <tbody>
              {
                admin.users
                  .map((user) => (
                    <tr key={`user-${user.osm_id}`} onClick={() => this.onUserClick(user)} className='admin-table-row'>
                      <td>{user.osm_id}</td>
                      <td>{user.full_name}</td>
                      <td>{this.renderUserRoles(user.roles)}</td>
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
      <div>
        <AdminHeader />
        <section>
          <div className='row widget-container'>
            <div className='widget-25'>
              <h2 className='header--large'>Users</h2>
              <ul className='admin-sidebar-links'>
                <li>
                  <Link href='/admin/users'>
                    <a className='link--large'>
                      Users List
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/admin/users-exclusion'>
                    <a className='link--large'>
                      Exclusion List
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

export default connect(['authenticatedUser', 'error', 'admin'], actions)(AdminUsers)
