import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'unistore/react';

import { actions } from '../store'
import { isAdmin } from '../utils/roles'
import NotLoggedIn from '../components/NotLoggedIn'
import AdminHeader from '../components/AdminHeader'

import '../styles/Admin.css';

class AdminUsers extends Component {
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
    const { history } = this.props
    history.push(`/admin/users/${user.osm_id}`)
  }

  renderList () {
    const { admin } = this.props
    if (!admin || !admin.users) return

    return (
      <div>
        <h1>List</h1>
        <table className="admin-user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {
              admin.users
              .map((user) => (
                <tr key={`user-${user.osm_id}`} onClick={() => this.onUserClick(user)} className="admin-user-table-row">
                  <td>{user.osm_id}</td>
                  <td>{user.full_name}</td>
                  <td>{this.renderUserRoles(user.roles)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    const { loggedIn, user, location } = this.props

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
              {this.renderList()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(['user', 'loggedIn', 'error', 'admin'], actions)(AdminUsers);
