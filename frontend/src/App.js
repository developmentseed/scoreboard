import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './styles/App.css';
import { Campaigns, Campaign, Users, User, Home, About } from './containers';

const projectName = process.env.REACT_APP_PROJECT_NAME || 'OSM';

const ActiveLink = ({ label, to }) => (
  <Route path={to} exact={false} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      <Link to={to}>{label}</Link>
    </div>
  )}/>
  )

export default () => (
  <Router>
    <div className="App">
      <header className="header-nav">
        <div className="row">
          <nav className="clearfix">
            <ul className="nav--left">
              <li><Link to="/">ScoreBoard</Link></li>
              <li><ActiveLink to="/campaigns" label="Campaigns" /></li>
              <li><ActiveLink to="/users" label= "Users" /></li>
              <li><ActiveLink to="/about" label="About" /></li>
            </ul>
          </nav>
        </div>
      </header>
      <Route exact path="/" render={() => (
          <Redirect to="/home" />
      )} />
      <Route exact path="/home" component={() => <Home projectName={projectName} />} />
      <Route exact path="/campaigns" component={Campaigns} />
      <Route exact path="/users" component={Users} />
      <Route path="/users/:uid" component={User} />
      <Route exact path="/about" component={() => <About projectName={projectName} />} />
      <Route path="/campaigns/:name" component={Campaign} />
    </div>
  </Router>
);
