import React, { Component } from 'react'
import Link from '../../components/Link'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import { LoadingState } from '../../components/common/LoadingState'
import Table from '../../components/common/Table'

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

    const allUsers = admin.users.map(user => {
      return Object.assign(user, {
        role: this.renderUserRoles(user.roles),
        button: <button className='button' onClick={() => this.onUserClick(user)}>Edit</button>
      })
    })

    return (
      <div className='admin'>
        <h1 className='header--xlarge'>All Users</h1>
        <div className='widget'>
          <Table tableSchema={
            {
              'headers': {
                'user-id': { type: 'id', accessor: 'osm_id' },
                'name': { type: 'string', accessor: 'full_name' },
                'role': { type: 'string', accessor: 'role' },
                'button': { type: 'button', accessor: 'button' }
              },
              'columnOrder': ['user-id', 'name', 'role'],
              'displaysTooltip': ['role']
            }
          } data={allUsers}
          />
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
