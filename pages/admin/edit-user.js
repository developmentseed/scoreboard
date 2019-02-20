import React, { Component } from 'react'
import Link from '../../components/Link'
import Select from 'react-select'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'

export class AdminUserEdit extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      selectedRoles: null
    }
  }

  componentDidMount () {
    const { id } = this.props

    this.props.getAuthenticatedUser().then(() => {
      Promise.all([
        this.props.getRoles(),
        this.props.adminGetUser(id)
      ]).then(() => {
        this.setState({ loading: false })
      })
    })
  }

  renderUserRoles (roles) {
    if (!roles) return
    return roles.map((role) => role.name).join(', ')
  }

  onRoleChange (roles) {
    const { admin } = this.props
    this.setState({ selectedRoles: roles })
    this.props.updateUserRoles(admin.user.id, roles.map((role) => role.value))
      .then(() => {
        this.setState({ saved: true })
        this.props.setNotification({ type: 'success', message: 'Profile updated successfully' })
      })
      .catch(err => {
        console.error(err)
        this.props.setNotification({ type: 'error', message: 'Could not update user' })
      })
  }

  createRoleSelectOptions (roles) {
    return roles.map((role) => {
      if (role.value && role.label) return role
      return { value: role.id, label: role.name }
    })
  }

  render () {
    const { selectedRoles } = this.state
    const { authenticatedUser, admin } = this.props

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
              </ul>
            </div>
            <div className='widget-75'>
              <div className='row'>
                <h1 className='header--xlarge'>Edit User</h1>
              </div>
              <div className='row'>
                <div style={{ width: '50%' }}>
                  <h4>Roles</h4>
                  <Select
                    options={this.createRoleSelectOptions(admin.roles)}
                    multi
                    value={this.createRoleSelectOptions(selectedRoles || admin.user.roles)}
                    onChange={(roles) => this.onRoleChange(roles)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const Page = connect(['authenticatedUser', 'error', 'admin'], actions)(AdminUserEdit)

Page.getInitialProps = async ({ query }) => {
  const { id } = query
  return { id }
}

export default Page
