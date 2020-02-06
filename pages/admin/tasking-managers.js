import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import Link from '../../components/Link'
import { distanceInWordsToNow, parse } from 'date-fns'
import Table from '../../components/common/Table'

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

    let allTaskers = taskers.map(tasker => {
      return Object.assign(tasker, {
        last_update: tasker.last_update ? `${distanceInWordsToNow(parse(tasker.last_update))} ago` : 'Will run in the next 10 minutes',
        button: <button className='button' onClick={() => this.onTMClick(tasker)} >Edit</button>
      })
    })

    return (
      <div>
        <h1 className='header--xlarge'>List</h1>
        <div className='widget'>
          <Table tableSchema={
            {
              'headers': {
                'name': { type: 'string', accessor: 'name' },
                'last-run-time': { type: 'string', accessor: 'last_update' },
                'button': { type: 'button', accessor: 'button' }
              },
              displaysTooltip: ['last-run-time'],
              columnOrder: ['name', 'last-run-time', 'button']
            }
          } data={allTaskers}
          />
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
