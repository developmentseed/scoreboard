import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Select from 'react-select';
import { connect } from 'unistore/react';
import queryString from 'query-string';

import { actions } from '../store'
import { isAdmin } from '../utils/roles'
import NotLoggedIn from '../components/NotLoggedIn'
import AdminHeader from '../components/AdminHeader'

import '../styles/Admin.css';

class AdminUsersEdit extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      selectedRoles: null
    }
  }

  componentDidMount () {
    this.props.getAuthenticatedUser().then(() => {
      this.props.getRoles().then(() => {
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
    this.setState({ selectedRoles: roles })
    this.props.updateUserRoles(this.props.user.id, roles.map((role) => role.value))
  }

  createRoleSelectOptions (roles) {
    return roles.map((role) => {
      if (role.value && role.label) return role
      return { value: role.id, label: role.name }
    })
  }

  render() {
    const { selectedRoles } = this.state
    const { loggedIn, user, location, admin } = this.props

    if (this.state.loading) {
      return (
        <div><AdminHeader /></div>
      )
    }

    if (!loggedIn) {
      return <NotLoggedIn />
    }

    if (!isAdmin(user.roles)) {
      return (
        <Redirect to={{ pathname: '/', state: { from: location } }} />
      )
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
                  <Link to="/admin/users" className="link--large">
                    Users List
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
                  value={this.createRoleSelectOptions(selectedRoles || user.roles)}
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

export default connect(['user', 'loggedIn', 'error', 'admin'], actions)(AdminUsersEdit);
