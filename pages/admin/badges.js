import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import Link from '../../components/Link'
import { Tooltip } from '../../components/common/Tooltip'

const tableHeaders = require('../../lib/page-text/table-headers.json')

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
      console.error(err)
      this.setState({ loading: false })
    }
  }

  onBadgeClick (badge) {
    Router.push(`/admin/badges/${badge.id}`)
  }

  renderList () {
    const { badges } = this.props
    const header = tableHeaders.find(table => table.id === 'name')

    if (!badges || !badges.length) return

    return (
      <div>
        <h1>All Badges</h1>
        <div className='widget'>
          <table className='admin-table'>
            <thead>
              <tr>
                <th>
                  {header.name_en}
                  <Tooltip dataTip={header.description_en} />
                </th>
              </tr>
            </thead>
            <tbody>
              {
                badges
                  .map((badge) => (
                    <tr key={`badge-${badge.id}`} onClick={() => this.onBadgeClick(badge)} className='admin-table-row'>
                      <td>{badge.name}</td>
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
            <div className='widget-75'>
              {this.renderList()}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'error', 'badges', 'admin'], actions)(AdminBadges)
