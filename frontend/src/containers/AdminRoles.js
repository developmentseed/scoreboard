import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'unistore/react';
import queryString from 'query-string';

import { actions } from '../store'
import { isAdmin } from '../utils/roles'
import NotLoggedIn from '../components/NotLoggedIn'
import AdminHeader from '../components/AdminHeader'

import '../styles/Admin.css';

class AdminRoles extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      currentView: null,
    }
  }

  componentDidMount () {
    this.setCurrentView()
    this.props.getAuthenticatedUser().then(() => {
      console.log('wut')
      this.props.getRoles()
    })
  }

  componentDidUpdate () {
    const { loggedIn, error } = this.props

    if (this.state.loading && (loggedIn || error)) {
      this.setState({ loading: false })
    }

    if (loggedIn) {
      this.setCurrentView()
    }
  }

  setCurrentView () {
    const { location } = this.props

    let { view } = queryString.parse(location.search)

    if (!view) {
      view = 'list'
    }

    if (view !== this.state.currentView) {
      console.log('new view', view)
      this.setState({ currentView: view })
    }
  }

  renderList () {
    const { admin } = this.props

    console.log('admin', admin)
    if (!admin || !admin.roles) return

    return (
      <div>
        <h1>List</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              admin.roles
              .reverse()
              .map((role) => (
                <tr key={`role-${role.id}`}>
                  <td>{role.id}</td>
                  <td>{role.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

  renderAddRoleForm () {
    return (
      <h1>Add role</h1>
    )
  }

  renderCurrentView () {
    const { currentView } = this.state
    if (currentView === 'list') {
      return this.renderList()
    }
    else if (currentView === 'add') {
      return this.renderAddRoleForm()
    }
  }

  render() {
    const { currentView } = this.state
    const { loggedIn, user, location, admin } = this.props

    console.log('currentView', currentView, admin)
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
              <h2 className="header--large">Roles</h2>
              <ul className="admin-sidebar-links">
                <li>
                  <Link to="/admin/roles?view=add" className="link--large">
                    Add Role
                  </Link>
                </li>
                <li>
                  <Link to="/admin/roles?view=list" className="link--large">
                    Roles List
                  </Link>
                </li>
              </ul>
            </div>
            <div className="content--with-sidebar">
              {this.renderCurrentView()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(['user', 'loggedIn', 'error', 'admin'], actions)(AdminRoles);
