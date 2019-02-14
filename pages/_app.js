import React from 'react'
import join from 'url-join'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { withRouter } from 'next/router'
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
const profileIcon = join(APP_URL_PREFIX, '/static/dashboard-temp/profile-icon.svg')
const menuIcon = join(APP_URL_PREFIX, '/static/dashboard-temp/menu-icon.svg')
const manifest = join(APP_URL_PREFIX, '/static/manifest.json')

/* Favicons */
const appleIcon = join(APP_URL_PREFIX, '/static/apple-touch-icon.png')
const msBrowserconfig = join(APP_URL_PREFIX, '/static/browserconfig.xml')
const safariIcon = join(APP_URL_PREFIX, '/static/safari-pinned-tab.svg')
const favicon = join(APP_URL_PREFIX, '/static/favicon.ico')

const NavLink = withRouter(({ children, router, href }) => {
  const activeClass = router.pathname === href ? 'active' : ''
  return <Link href={href}><a className={activeClass}>{children}</a></Link>
})

function Footer (props) {
  return (
    <div>
      <div>
        {
          !props.loggedIn
            ? (<div className='banner banner__signup'>
              <div className='row'>
                <div className='banner--content'>
                  <h2 className='header--xlarge'>Earn a spot on the board</h2>
                  <p>Join other mappers and track your progress. Earn badges for edits you’ve made and campaigns you've helped complete. Share your contributions to the global mapping ecosystem.</p>
                  <a href={join(APP_URL_FINAL, '/auth/openstreetmap')} className='link--large'>Sign up with {projectName}</a>
                </div>
              </div>
            </div>
            )

            : (
              <div className='banner banner__badges'>
                <div className='row'>
                  <div className='banner--content'>
                    <h2 className='header--xlarge'>Map to Earn Badges</h2>
                    <p>Track your best work. Earn badges for edits you’ve made and campaigns you've helped complete. Share your progress and contribution to the global mapping ecosystem. </p>
                  </div>
                </div>
              </div>
            )
        }
      </div>
      <footer>
        <div className='row'>
          <nav>
            <ul className='nav--footer'>
              <li className='logo'><Link href='/'><a>ScoreBoard</a></Link></li>
              <li><NavLink href='/campaigns'>Campaigns</NavLink></li>
              <li><NavLink href='/users'>Users</NavLink></li>
              <li><NavLink href='/teams'>Teams</NavLink></li>
              <li><NavLink href='/countries'>Countries</NavLink></li>
              <li><NavLink href='/about'>About</NavLink></li>
            </ul>
          </nav>
          <div>
            &copy; 2018 All Rights Reserved<br />
            <a href='/terms' className='link--normal'>Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

class Layout extends React.Component {
  constructor () {
    super()
    this.state = {
      menuVisible: false,
      removeClass: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }
  toggle () {
    this.setState({ removeClass: !this.state.removeClass })
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
    const { loggedIn, osm, account, name } = authenticatedUser
    let menuClass = ['nav--left', 'mobile-hidden']
    if (this.state.removeClass) {
      menuClass.pop('mobile-hidden')
    }
    return (
      <div className='App'>
        <Head>
          <link rel='stylesheet' href='https://unpkg.com/leaflet@1.4.0/dist/leaflet.css'
            integrity='sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=='
            crossOrigin='' />
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />

          <link rel='manifest' href={manifest} />
          <link rel='apple-touch-icon' href={appleIcon} />
          <link rel='shortcut icon' href={favicon} />
          <link rel='mask-icon' href={safariIcon} color='#ff0000' />
          <meta name='msapplication-config' content={msBrowserconfig} />

        </Head>
        <header className='header-nav'>
          <div className='row'>
            <nav>
              <ul className='nav--mobile'>
                <li className='nav--icons mobile-only'><img src={menuIcon} alt='Menu icon' onClick={this.toggle.bind(this)} /></li>
                <li className='logo'><Link href='/'><a>ScoreBoard</a></Link></li>
              </ul>
              <ul className={menuClass.join(' ')}>
                <li onClick={this.toggle.bind(this)}><NavLink href='/campaigns'>Campaigns</NavLink></li>
                <li onClick={this.toggle.bind(this)}><NavLink href='/users'>Users</NavLink></li>
                <li onClick={this.toggle.bind(this)}><NavLink href='/teams'>Teams</NavLink></li>
                <li onClick={this.toggle.bind(this)}><NavLink href='/countries'>Countries</NavLink></li>
                <li onClick={this.toggle.bind(this)}><NavLink href='/about'>About</NavLink></li>
              </ul>
              {
                loggedIn
                  ? <div className='nav--right'>
                    <ul>
                      <li>{name}</li>
                      <li className='nav--icons' ref={node => { this.navButton = node }} onClick={this.handleMenuClick}><img src={profileIcon} alt='Profile icon' /></li>
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
        <Footer loggedIn={loggedIn} />
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
