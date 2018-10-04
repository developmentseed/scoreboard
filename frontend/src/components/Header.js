import React, { Component } from 'react'
import { Provider, connect } from 'unistore/react'
import { Route, Link } from 'react-router-dom';

import { store, actions } from '../store'

import profileIcon from '../assets/dashboard-temp/profile-icon.png';

const ActiveLink = ({ label, to }) => (
  <Route path={to} exact={false} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      <Link to={to}>{label}</Link>
    </div>
  )}/>
)

class Wrapper extends Component {
  constructor () {
    super()

    this.state = {
      profile: null
    }
  }

  render () {
    const { loggedIn, profile } = this.props

    return (
        <div className="App">
          <header className="header-nav">
            <div className="row">
              <nav className="clearfix">
                <ul className="nav--left">
                  <li className="logo"><Link to="/">ScoreBoard</Link></li>
                  <li><ActiveLink to="/campaigns" label="Campaigns" /></li>
                  <li><ActiveLink to="/users" label="Users" /></li>
                  <li><ActiveLink to="/about" label="About" /></li>
                </ul>
                {
                  loggedIn ?
                    <div className="nav--right">
                      <ul>
                        <li className="nav--icons" ref={node => this.navButton = node} onClick={this.handleMenuClick}>
                          <img style={{ float: "right", width: "30px" }} src={profileIcon} alt="Profile icon" />
                        </li>
                      </ul>
                      {
                        this.state.menuVisible && (
                          <div className="login-menu">
                            <ul>
                              <li><ActiveLink to="/dashboard" label="Dashboard" /></li>
                              <li><ActiveLink to={`/users/${profile.id}`} label="Public Profile" /></li>
                              <li><ActiveLink to={`/edit/${profile.id}`} label="Edit Profile" /></li>
                              <li><a href="http://localhost:5000/auth/logout">Logout</a></li>
                            </ul>
                          </div>
                        )
                      }
                    </div>
                    : 
                    <ul className="nav--right">
                      <li><a href="http://localhost:5000/auth/openstreetmap">Login</a></li>
                    </ul>
                }
              </nav>
            </div>
          </header>
        </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    profile: state.OSMprofile
  }
}

export default Wrapper //connect(mapStateToProps, actions)(Wrapper)
