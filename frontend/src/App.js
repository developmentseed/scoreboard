import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './styles/App.css';
import { Campaigns, Campaign, Users, User, Home, About } from './containers';

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
      profile: {}
    }
  }
  componentWillMount () {
    fetch('/auth/userinfo')
    .then(res => {
      if (res.status === 200) {
        this.setState({
          loggedIn: true,
          profile: res.json()
        })
      }
    });

  }
  render() {
    const loggedIn = this.state.loggedIn;
    return (
      <Router>
        <div className="App">
          <header className="header-nav">
            <div className="row">
              <nav className="clearfix">
                <ul className="nav--left">
                  <li><Link to="/">ScoreBoard</Link></li>
                  <li><ActiveLink to="/campaigns" label="Campaigns" /></li>
                  <li><ActiveLink to="/users" label="Users" /></li>
                  <li><ActiveLink to="/about" label="About" /></li>
                  <li>{
                  loggedIn?
                  <a href="http://localhost:5000/auth/logout">Logout</a>
                  : <a href="http://localhost:5000/auth/openstreetmap">Login</a>
                }</li>
                </ul>
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
          <Route path="/campaigns/:name" component={Campaign} />
        </div>
      </Router>
    )

  }
}

export default App
