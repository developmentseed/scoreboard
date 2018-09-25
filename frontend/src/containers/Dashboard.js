import React, {Component} from 'react';
import '../styles/Dashboard.css';
import api from '../utils/api';
import {
  Route,
  Link
} from 'react-router-dom';
import badge1 from '../assets/dashboard-temp/badge-1.jpg';
import badge2 from '../assets/dashboard-temp/badge-2.jpg';
import badge3 from '../assets/dashboard-temp/badge-3.jpg';


import {UserExtentMap} from '../components/charts';

class Dashboard extends Component {
  constructor () {
    super();
    this.state = {
      "records": {}
    }
  }

  componentDidMount () {
    const { match }  = this.props;
    const {params: { uid } } = match;
    api('get', `/api/users/8`)
    .then(res => {
      // TODO error state
      this.setState({
        records: res.data.records,
        match
      });
    });
  }
  render() {
    const {loggedIn, profile} = this.props

    /* Handle not logged in */
    if (!loggedIn) {
      return (
        <div className="dashboard">
          <section>
            <div className="row">
              <h2 className="header--large">You are not logged in!</h2>
              <p>Log in to see your personalized dashboard</p>
            </div>
          </section>
        </div>
      )
    }

    // We are logged in and should have a profile
    const { user } = profile._xml2json

    return (
      <div className="dashboard">
        <header className="header--internal--dashboard header--page">
          <div className="row">
            <div className="header--content--wrapper">
              <div className="section-sub--left section-width-fifty-plus">
                <img className="profile--thumb" style={{float: "left"}} src={user.img['@']['href']} alt="Profile pic" />
                <h1 className="header--xlarge header--with-description">{user['@']['display_name']}</h1>
                <Link className="link--large" to="/about">View Public Profile</Link>
              </div>
              <div className="section-sub--right section-width-fifty-minus stats-user">
                <ul>
                  <li className="list--inline">
                    <span className="descriptor-chart">Campaigns</span>
                    <span className="num--large">40</span>
                  </li>
                  <li className="list--inline">
                    <span className="descriptor-chart">Badges</span>
                    <span className="num--large">80</span>
                  </li>
                  <li className="list--inline">
                    <span className="descriptor-chart">Edits</span>
                    <span className="num--large">100</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wrapper--map"></div>
          <UserExtentMap extent={this.state.records.extent_uri} />
        </header>
        <section>
          <div className="row">
            <h2 className="header--large">Upcoming Badges</h2>
            <ul className="tri-fold clearfix">
              <li>
                <img className="badge--thumb" src={badge1} alt="badge icon" />
                <div className="badge-Details">
                  <h3 className="header--small sub-head header--with-description">World Renown</h3>
                  <p className="badge-Description">You have 2 more countries to map in to achieve this badge</p>
                </div>
              </li>
              <li>
                <img className="badge--thumb" src={badge2} alt="badge icon" />
                <div className="badge-Details">
                  <h3 className="header--small sub-head header--with-description">Consistency</h3>
                  <p className="badge-Description">Map 10 more consecutive days to earn this badge.</p>
                </div>
              </li>
              <li>
                <img className="badge--thumb" src={badge3} alt="badge icon" />
                <div className="badge-Details">
                  <h3 className="header--small sub-head header--with-description">Year Long Mapper</h3>
                  <p className="badge-Description">Map for 2 more months to earn this badge.</p>
                </div>
              </li>
            </ul>
            <Link className="link--large" to="/about">Load More Upcoming Badges</Link>
          </div>
        </section>
        {
          /*
        <section>

          <div className="row">
            <h2 className="header--large header--with-description">Suggested Tasks</h2>
            <p>Get started on one of the tasks below to help complete campaigns or to continue earning points towards badges!</p>
            <ol>
              <li className="block--campaign">
                <h3 className="header--small header--with-description-xlg">
                  <Link className="header--underlined" to={`/campaigns/`}>Emergency Support</Link>
                </h3>
                <p>Check out a cell for editing from the Tasking Manager. Edit data using the web-based ID-Editor or Java-based JOSM...</p>
                <div className="chart-bar--main">
                  <span className="chart-bar--title">Complete</span>
                  <span className="chart-bar--wrapper">
                    <span className="chart-bar" style={{"width": `70%`}}></span>
                    <span className="chart-bar--percent">70%</span>
                  </span>
                </div>
                <Link className="link--large" to="/about">Join the 19 Participants</Link>
              </li>
              <li className="block--campaign">
                <h3 className="header--small header--with-description-xlg">
                  <Link className="header--underlined" to={`/campaigns/`}>Emergency Support</Link>
                </h3>
                <p>Check out a cell for editing from the Tasking Manager. Edit data using the web-based ID-Editor or Java-based JOSM...</p>
                <div className="chart-bar--main">
                  <span className="chart-bar--title">Complete</span>
                  <span className="chart-bar--wrapper">
                    <span className="chart-bar" style={{"width": `70%`}}></span>
                    <span className="chart-bar--percent">70%</span>
                  </span>
                </div>
                <Link className="link--large" to="/about">Join the 19 Participants</Link>
              </li>
            </ol>
          </div>
        </section>
        */}
      </div>
    );
  }
}

export default Dashboard;
