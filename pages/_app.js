import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'
import withReduxStore from '../lib/store/with-store'
import { Provider } from 'unistore/react';

import "../styles/index.scss"
import "../styles/App.scss"

const projectName = process.env.PROJECT_NAME || 'OpenStreetMap'

const Layout = ({ children }) => (
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
        </nav>
      </div>
    </header>
    {children}
  </div>
)


class Scoreboard extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
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