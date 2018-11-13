import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'unistore/react'

import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/AdminHeader'

import '../../styles/Admin.scss'

export class Admin extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.props.getAuthenticatedUser()
  }

  componentDidUpdate () {
    const { authenticatedUser } = this.props
    if (this.state.loading && (authenticatedUser.loggedIn || this.props.error)) {
      this.setState({ loading: false })
    }
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
      <div>
        <header className='header--internal--green header--page'>
          <div className='row'>
            <div className='section-sub--left section-width-forty'>
              <h1 className='header--xlarge'>Admin</h1>
            </div>
          </div>
        </header>
        <section>
          <div className='row'>
            <div className='content'>
              <ul className='list-grid'>
                <li>
                  <Link href='/admin/users'>
                    <a>
                      <div>
                        <h2 className='header--large'>Users</h2>
                        <p>Manage user roles</p>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/admin/badges'>
                    <a>
                      <div>
                        <h2 className='header--large'>Badges</h2>
                        <p>Create new badges</p>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'error'], actions)(Admin)
