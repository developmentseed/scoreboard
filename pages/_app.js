import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'

import "../styles/index.scss"
import "../styles/App.scss"

const Layout = ({children}) => (
  <div className="App">
    <header className="header-nav">
      <div className="row">
        <nav className="clearfix">
          <ul className="nav--left">
            <li className="logo"><Link href="/">ScoreBoard</Link></li>
            <li><Link href="/campaigns" label="Campaigns" ><a>Campaigns</a></Link></li>
            <li><Link href="/users" label="Users"><a>Users</a></Link></li>
            <li><Link href="/about" label="About"><a>About</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
    {children}
    </div>
)


export default class Scoreboard extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}