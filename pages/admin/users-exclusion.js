import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import AdminUsersSearch from '../../components/admin/AdminUsersSearch'
import Link from '../../components/Link'
import { prop } from 'ramda'

export class AdminExclusionList extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      exclusionList: []
    }
    this.addUserToExclusionList = this.addUserToExclusionList.bind(this)
    this.removeUserFromExclusionList = this.removeUserFromExclusionList.bind(this)
    this.updateExclusionList = this.updateExclusionList.bind(this)
  }

  async updateExclusionList (e) {
    e.preventDefault()
    try {
      await this.props.updateExclusionList(this.state.exclusionList.map(prop('osm_id')))
      this.props.setNotification({ type: 'success', message: 'Successfully updated exclusion list' })
    } catch (e) {
      this.props.setNotification({ type: 'error', message: e.message || e })
    }
  }

  addUserToExclusionList (user) {
    let { exclusionList } = this.state
    exclusionList = exclusionList.filter(u => u.osm_id.toString() !== user.osm_id.toString())
    exclusionList.push(user)
    this.setState({ exclusionList })
  }

  removeUserFromExclusionList (user) {
    let { exclusionList } = this.state
    exclusionList = exclusionList.filter(u => u.osm_id.toString() !== user.osm_id.toString())
    this.setState({ exclusionList })
  }

  async componentDidMount () {
    try {
      await this.props.getAuthenticatedUser()
      await this.props.getExclusionList()
    } catch (e) {
      this.props.setNotification({ type: 'error', message: e.message || e })
      this.setState({ loading: false })
    }
  }

  componentDidUpdate () {
    const { exclusionList } = this.props
    if (exclusionList && this.state.loading) {
      this.setState({
        loading: false,
        exclusionList
      })
    }
  }

  render () {
    const { authenticatedUser } = this.props
    const { exclusionList } = this.state

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
                <h2 className='header-xlarge'>Add to exclusion list</h2>
              </div>
              <div className='row'>
                <form className='form' onSubmit={this.updateExclusionList}>
                  <AdminUsersSearch selectedUsers={exclusionList}
                    addUser={this.addUserToExclusionList}
                    removeUser={this.removeUserFromExclusionList}
                  />
                  <div className='form__footer'>
                    <button className='button'
                      id='update-exclusions-button'
                      type='submit'>
                      Update Exclusion List
                    </button>
                  </div>
                </form>
              </div >
            </div >
          </div >
        </section>
      </div >
    )
  }
}

export default connect(['authenticatedUser', 'error', 'admin', 'exclusionList'], actions)(AdminExclusionList)
