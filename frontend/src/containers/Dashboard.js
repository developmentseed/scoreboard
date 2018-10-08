import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store'

import '../styles/Dashboard.css';

import { UserExtentMap } from '../components/charts';

class Dashboard extends Component {
  constructor () {
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.props.getAuthenticatedUser()
    this.props.getProjects()
  }

  componentDidUpdate () {
    if (this.state.loading && this.props.loggedIn) {
      this.setState({ loading: false })
    }
  }

  renderUpcomingBadges (badges) {
    const badgeKeys = Object.keys(badges)

    return (
      <section>
        <div className="row">
          <h2 className="header--large">Upcoming Badges</h2>
          <ul className="tri-fold clearfix">
            {
              badgeKeys.map((badgeKey, i) => {
                const badge = badges[badgeKey]
                const badgeUrl = require(`../assets/badges/${badge.category}-${badge.badgeLevel}-graphic.svg`)
                const borderUrl = require(`../assets/badges/border${badge.badgeLevel}.svg`)

                return (
                  <li key={`upcoming-badge-${i}`}>
                    <div
                      className='Badge-Completed'
                      style={{
                        backgroundImage: `url(${badgeUrl})`,
                        width: '130px',
                        height: '130px',
                        backgroundSize: '130px'
                      }}>
                    </div>
                    <div
                      className='Badge-Border'
                      style={{
                        backgroundImage: `url(${borderUrl})`,
                        width: '143px',
                        height: '143px',
                        backgroundSize: '143px'
                      }}>
                    </div>
                    <div className="badge-Details">
                      <h3 className="header--small sub-head header--with-description">{badge.name}</h3>
                      <h5 style={{ marginBottom: '.2em' }}>
                        {badge.points.nextPoints - badge.points.currentPoints} {badge.metric} until level {badge.nextBadgeLevel}!
                      </h5>
                      <p className="badge-Description">{badge.description}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    )
  }

  renderProjects() {
    const { projects } = this.props
    const features = projects.records.features

    if (!projects) return (<div />)

    return (
      <section>
        <div className="row">
          <h2 className="header--large header--with-description">Available Projects</h2>
          <p>Get started on one of the projects below to help complete campaigns or to continue earning points towards badges!</p>
          <ol>
            {
              features.map((project) => {
                console.log('project', project)
                return (
                  <li key={`tm-project-${project.id}`} className="block--campaign">
                    <h3 className="header--small header--with-description-xlg">
                      <a className="header--underlined" href={`${projects.tasking_manager_url}/project/${project.id}`}>{project.properties.name}</a>
                    </h3>
                    <div className="chart-bar--main">
                      <span className="chart-bar--title">Done</span>
                      <span className="chart-bar--wrapper">
                        <span className="chart-bar" style={{"width": `${project.properties.done}%`}}></span>
                        <span className="chart-bar--percent">{project.properties.done}%</span>
                      </span>
                    </div>
                    <div className="chart-bar--main">
                      <span className="chart-bar--title">Validated</span>
                      <span className="chart-bar--wrapper">
                        <span className="chart-bar" style={{"width": `${project.properties.validated}%`}}></span>
                        <span className="chart-bar--percent">{project.properties.validated}%</span>
                      </span>
                    </div>
                    <p>{project.properties.description}</p>
                    <a className="link--large" href={`${projects.tasking_manager_url}/project/${project.id}`}>Join the project</a>
                  </li>
                )
              })
            }
          </ol>
        </div>
      </section>
    )
  }

  render() {
    const { loggedIn, osmProfile, user } = this.props

    if (this.state.loading) {
      return (
        <div />
      )
    }

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
    const osmUser = osmProfile._xml2json.user

    return (
      <div className="dashboard">
        <header className="header--internal--dashboard header--page">
          <div className="row">
            <div className="header--content--wrapper">
              <div className="section-sub--left section-width-fifty-plus">
                <img className="profile--thumb" style={{float: "left"}} src={osmUser.img['@']['href']} alt="Profile pic" />
                <h1 className="header--xlarge header--with-description">{osmUser['@']['display_name']}</h1>
                <Link className="link--large" to={`/users/${user.id}`}>View Public Profile</Link>
              </div>
              <div className="section-sub--right section-width-fifty-minus stats-user">
                <ul>
                  <li className="list--inline">
                    <span className="descriptor-chart">Campaigns</span>
                    <span className="num--large">{user.records.hashtags.length}</span>
                  </li>
                  <li className="list--inline">
                    <span className="descriptor-chart">Badges</span>
                    <span className="num--large">{Object.keys(user.badges.earnedBadges).length}</span>
                  </li>
                  <li className="list--inline">
                    <span className="descriptor-chart">Edits</span>
                    <span className="num--large">{user.records.edit_count}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wrapper--map"></div>
          <UserExtentMap extent={user.records.extent_uri} />
        </header>

        {this.renderUpcomingBadges(user.badges.mostAttainable)}
        {this.renderProjects()}
      </div>
    );
  }
}

export default connect(['loggedIn', 'osmProfile', 'user', 'projects'], actions)(Dashboard);
