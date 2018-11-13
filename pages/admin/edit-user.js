import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Select from 'react-select';
import { connect } from 'unistore/react';

import { actions } from '../../lib/store';
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/AdminHeader'

import '../../styles/Admin.scss';
import 'react-select/dist/react-select.css';

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

  renderSaved () {
    if (this.state.saved) {
      setTimeout(() => {
        this.setState({ saved: false })
      }, 1000)

      return (
        <p style={{ color: '#4FCA9E' }}>✓ Saved</p>
      )
    }
  }

  onRoleChange (roles) {
    const { admin } = this.props
    this.setState({ selectedRoles: roles })
    this.props.updateUserRoles(admin.user.id, roles.map((role) => role.value))
      .then(() => {
        this.setState({ saved: true })
      })
  }

  createRoleSelectOptions (roles) {
    return roles.map((role) => {
      if (role.value && role.label) return role
      return { value: role.id, label: role.name }
    })
  }

  render() {
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
      <div>
        <AdminHeader />
        <section>
          <div className="row">
            <div className="sidebar">
              <h2 className="header--large">Users</h2>
              <ul className="admin-sidebar-links">
                <li>
                  <Link href="/admin/users">
                    <a className="link--large">
                      Users List
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="content--with-sidebar">
              <div className="row">
                <h1 className="header--xlarge">Edit User</h1>
              </div>
              <div className="row">
              <div style={{ width: '50%' }}>
                <h4>Roles</h4>
                <Select
                  options={this.createRoleSelectOptions(admin.roles)}
                  multi={true}
                  value={this.createRoleSelectOptions(selectedRoles || admin.user.roles)}
                  onChange={(roles) => this.onRoleChange(roles)}
                />
                {this.renderSaved()}
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const Page = connect(['authenticatedUser', 'error', 'admin'], actions)(AdminUserEdit);

Page.getInitialProps = async ({ query }) => {
  const { id } = query
  return { id }
}

export default Page
