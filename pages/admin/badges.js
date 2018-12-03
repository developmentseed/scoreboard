import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'unistore/react'

import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/AdminHeader'

export class AdminBadges extends Component {
  constructor () {
    super()

    this.state = {
      loading: true
    }
  }

  async componentDidMount () {
    try {
      await this.props.getAuthenticatedUser()
      await this.props.getBadges()
      this.setState({ loading: false })
    } catch (err) {
      console.log('did an error', err)
      console.log(err)
      this.setState({ loading: false })
    }
  }

  onBadgeClick (badge) {
    Router.push(`/admin/badges/${badge.id}`)
  }

  renderList () {
    const { badges } = this.props
    console.log('renderList', badges)

    if (!badges || !badges.length) return

    return (
      <div>
        <h1>List</h1>
        <table className='admin-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              badges
                .map((badge) => (
                  <tr key={`badge-${badge.id}`} onClick={() => this.onBadgeClick(badge)} className='admin-table-row'>
                    <td>{badge.id}</td>
                    <td>{badge.name}</td>
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
              <h2 className='header--large'>Badges</h2>
              <ul className='admin-sidebar-links'>
                <li>
                  <Link href='/admin/badges/add'>
                    <a className='link--large'>
                      Create new badge
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

export default connect(['authenticatedUser', 'error', 'badges', 'admin'], actions)(AdminBadges)
