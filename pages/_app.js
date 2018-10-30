import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'
import withReduxStore from '../lib/store/with-store'
import { Provider } from 'unistore/react'

import "../styles/index.scss"
import "../styles/App.scss"

const projectName = process.env.PROJECT_NAME || 'OpenStreetMap'
const domain =process.env.APP_DOMAIN || 'http://localhost:8181'
const profileIcon = '/static/dashboard-temp/profile-icon.png'

class Layout extends React.Component {
  constructor () { 
    super()
    this.state = {
      loggedIn: false,
      profile: null,
      menuVisible: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  componentDidMount() {
    fetch('/auth/userinfo')
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('failed to authenticate')
        }
      })
      .then(data => {
        this.setState({
          loggedIn: true,
          profile: data
        })
      })
      .catch(err => {
        this.setState({
          loggedIn: false,
          profile: null
        })
      })
  }

  handleOutsideClick() {
    this.handleMenuClick()
  }

  handleMenuClick () {
    if (!this.state.menuVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState(prevstate => ({
      menuVisible: !prevstate.menuVisible
    }))
  }
  
  render() {
    const {children} = this.props
    const {loggedIn, profile} = this.state

    return (
      <div className="App">
        <Head>
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.45.0/mapbox-gl.css' rel='stylesheet' />
        </Head>
        <header className="header-nav">
          <div className="row">
            <nav className="clearfix">
              <ul className="nav--left">
                <li className="logo"><Link href="/"><a>ScoreBoard</a></Link></li>
                <li><Link href="/campaigns"><a>Campaigns</a></Link></li>
                <li><Link href="/users" ><a>Users</a></Link></li>
                <li><Link href="/about" ><a>About</a></Link></li>
              </ul>
                  {
                    loggedIn ?
                      <div className="nav--right">
                        <ul>
                          <li className="nav--icons" ref={node => this.navButton = node} onClick={this.handleMenuClick}><img style={{ float: "right", width: "30px" }} src={profileIcon} alt="Profile icon" /></li>
                        </ul>
                        {
                          this.state.menuVisible && (
                            <div className="login-menu">
                              <ul>
                                <li><Link href="/dashboard" >Dashboard</Link></li>
                                <li><Link href={`/users/${profile.id}`} >Public Profile</Link></li>
                                <li><Link href={`/edit/${profile.id}`} >Edit Profile</Link></li>
                                <li><a href={`${domain}/auth/logout`}>Logout</a></li>
                              </ul>
                            </div>
                          )
                        }
                      </div>
                      : 
                      <ul className="nav--right">
                        <li><a href={`${domain}/auth/openstreetmap`}>Login</a></li>
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


class Scoreboard extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  handleOutsideClick() {
    this.handleMenuClick()
  }

  handleMenuClick () {
    if (!this.state.menuVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState(prevstate => ({
      menuVisible: !prevstate.menuVisible
    }))
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Layout>
          <Provider store={reduxStore}>
            <Component {...pageProps} project={projectName}/>
          </Provider>
        </Layout>
      </Container>
    )
  }
}


export default withReduxStore(Scoreboard)