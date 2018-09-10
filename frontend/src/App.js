import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './styles/App.css';
import { Campaigns, Campaign, Users, User, Home, About, Dashboard } from './containers';
import profileIcon from './assets/dashboard-temp/profile-icon.png';

const ActiveLink = ({ label, to }) => (
  <Route path={to} exact={false} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      <Link to={to}>{label}</Link>
    </div>
  )}/>
)

class App extends Component {
  constructor () { 
    super()
    this.state = {
      loggedIn: false,
      profile: {},
      menuVisible: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  componentWillMount() {
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
          profile: {}
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
    const loggedIn = this.state.loggedIn;
    const profile = this.state.profile;
    return (
      <Router>
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
                        <li className="nav--icons" ref={node => this.navButton = node} onClick={this.handleMenuClick}><img style={{ float: "right", width: "30px" }} src={profileIcon} alt="Profile icon" /></li>
                      </ul>
                      {
                        this.state.menuVisible && (
                          <div className="login-menu">
                            <ul>
                              <li><ActiveLink to="/dashboard" label="Dashboard" /></li>
                              <li><ActiveLink to={`/users/${profile.id}`} label="Public Profile" /></li>
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
          <Route exact path="/" render={() => (
            <Redirect to="/home" />
          )} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/campaigns" component={Campaigns} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:uid" component={User} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" render={props => (
            <Dashboard {...props} loggedIn={loggedIn} profile={profile} />
          )} />
          <Route path="/campaigns/:name" component={Campaign} />
        </div>
      </Router >
    )

  }
}

export default App
