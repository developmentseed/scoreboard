import React from 'react'
import join from 'url-join'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Provider, connect } from 'unistore/react'
import { Provider as AlertProvider, withAlert } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { APP_URL_FINAL, APP_URL_PREFIX } from '../api/src/config'
import Link from '../components/Link'
import withReduxStore from '../lib/store/with-store'
import { actions } from '../lib/store'
import { isAdmin } from '../lib/utils/roles'

/* SCSS */
import '../styles/index.scss'
import '../styles/App.scss'
import '../styles/Admin.scss'
import '../styles/Dashboard.scss'
import '../styles/Campaigns.scss'
import '../styles/Users.scss'
import '../styles/Badges.scss'

/* CSS */
import 'react-select/dist/react-select.css'
import 'react-input-range/lib/css/index.css'

const projectName = process.env.PROJECT_NAME || 'OpenStreetMap'
const profileIcon = join(APP_URL_PREFIX, '/static/dashboard-temp/profile-icon.png')

class Layout extends React.Component {
  constructor () {
    super()
    this.state = {
      menuVisible: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  componentDidMount () {
    this.props.getAuthenticatedUser()
  }

  componentDidUpdate () {
    const { notification } = this.props

    if (notification) {
      const { type, message, options } = notification
      if (!this.props.alert || !this.props.alert[type]) return
      this.props.alert[type](message, options)
      this.props.clearNotification()
    }
  }

  handleOutsideClick () {
    this.handleMenuClick()
  }

  handleMenuClick () {
    if (!this.state.menuVisible) {
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }
    this.setState(prevstate => ({
      menuVisible: !prevstate.menuVisible
    }))
  }

  render () {
    const { authenticatedUser, children } = this.props
    const { loggedIn, osm, account } = authenticatedUser

    return (
      <div className='App'>
        <Head>
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.45.0/mapbox-gl.css' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Heebo' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Crimson+Text' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet' />
        </Head>
        <header className='header-nav'>
          <div className='row'>
            <nav className='clearfix'>
              <ul className='nav--left'>
                <li className='logo'><Link href='/'><a>ScoreBoard</a></Link></li>
                <li><Link href='/campaigns'><a>Campaigns</a></Link></li>
                <li><Link href='/users'><a>Users</a></Link></li>
                <li><Link href='/countries'><a>Countries</a></Link></li>
                <li><Link href='/about'><a>About</a></Link></li>
              </ul>
              {
                loggedIn
                  ? <div className='nav--right'>
                    <ul>
                      <li className='nav--icons' ref={node => { this.navButton = node }} onClick={this.handleMenuClick}><img style={{ float: 'right', width: '30px' }} src={profileIcon} alt='Profile icon' /></li>
                    </ul>
                    {
                      this.state.menuVisible && (
                        <div className='login-menu'>
                          <ul>
                            <li><Link href='/dashboard'><a>Dashboard</a></Link></li>
                            <li><Link href={`/users/${osm.id}`}><a>Public Profile</a></Link></li>
                            <li><Link href={`/edit-user?id=${osm.id}`} as={join(APP_URL_PREFIX, `/users/${osm.id}/edit`)}><a>Edit Profile</a></Link></li>
                            {
                              account.roles && isAdmin(account.roles) && (
                                <li><Link href={`/admin`}><a>Admin</a></Link></li>
                              )
                            }
                            <li><Link href='/auth/logout'><a>Logout</a></Link></li>
                          </ul>
                        </div>
                      )
                    }
                  </div>
                  : <ul className='nav--right'>
                    <li><a href={join(APP_URL_FINAL, '/auth/openstreetmap')} className='link--login'>Login</a></li>
                  </ul>
              }
            </nav>
          </div>
        </header>
        {children}
      </div>
    )
  }
}

const LayoutWithStore = connect(['authenticatedUser', 'notification'], actions)(withAlert(Layout))

class Scoreboard extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  handleOutsideClick () {
    this.handleMenuClick()
  }

  handleMenuClick () {
    if (!this.state.menuVisible) {
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }
    this.setState(prevstate => ({
      menuVisible: !prevstate.menuVisible
    }))
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    const alertOptions = { position: 'top center', timeout: 3000, offset: '30px' }

    return (
      <Container>
        <Provider store={reduxStore}>
          <AlertProvider template={AlertTemplate} {...alertOptions}>
            <LayoutWithStore>
              <Component {...pageProps} project={projectName} />
            </LayoutWithStore>
          </AlertProvider>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(Scoreboard)
