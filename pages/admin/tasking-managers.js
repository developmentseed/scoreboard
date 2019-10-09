import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import Link from '../../components/Link'
import { distanceInWordsToNow, parse } from 'date-fns'
import { Tooltip } from '../../components/common/Tooltip'

const tableHeaders = require('../../lib/page-text/table-headers.json')

export class AdminTaskers extends Component {
  constructor () {
    super()

    this.state = {
      loading: true
    }
  }

  async componentDidMount () {
    try {
      await this.props.getAuthenticatedUser()
      await this.props.getTaskers()
      this.setState({ loading: false })
    } catch (err) {
      console.error(err)
      this.setState({ loading: false })
    }
  }

  onTMClick (tm) {
    Router.push(`/admin/tasking-managers/${tm.id}`)
  }

  renderList () {
    const { taskers } = this.props

    if (!taskers || !taskers.length) return

    return (
      <div>
        <h1>List</h1>
        <div className='widget'>
          <table className='admin-table'>
            <thead>
              <tr>
                {tableHeaders
                  .filter(table => table.categories.includes('tasking-manager'))
                  .map(header => (
                    <th>
                      {header.name_en}
                      <Tooltip dataTip={header.description_en} />
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {
                taskers
                  .map((tasker) => (
                    <tr key={`tasker-${tasker.id}`} onClick={() => this.onTMClick(tasker)} className='admin-table-row'>
                      <td>{tasker.name}</td>
                      <td>{ tasker.last_update ? `${distanceInWordsToNow(parse(tasker.last_update))} ago` : 'Will run in the next 10 minutes' }</td>
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
              <h2 className='header--large'>Tasking Managers</h2>
              <ul className='admin-sidebar-links'>
                <li>
                  <Link href='/admin/tasking-managers/add'>
                    <a className='link--large'>
                    Add new tasking manager
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

export default connect(['authenticatedUser', 'error', 'admin', 'taskers'], actions)(AdminTaskers)
