import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Link from '../components/Link'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'
import { actions } from '../lib/store'

import countryList from '../lib/utils/country-list.json'
import BadgeInProgress from '../components/BadgeInProgress'
import NotLoggedIn from '../components/NotLoggedIn'
import DataNotAvailable from '../components/DataNotAvailable'
import InlineList from '../components/InlineList'
import FilterBar from '../components/FilterBar'
import AssignmentsTable from '../components/AssignmentsTable'
import { sortBy, prop } from 'ramda'

const UserExtentMap = dynamic(() => import('../components/charts/UserExtentMap'), {
  ssr: false
})

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      assignmentsFilter: 'all',
      badgesFilter: 'unearnedBadges'
    }
  }

  componentDidMount () {
    this.props.getAuthenticatedUser()

    this.onAssignmentsFilterClick = this.onAssignmentsFilterClick.bind(this)
    this.onBadgesFilterClick = this.onBadgesFilterClick.bind(this)
  }

  componentDidUpdate () {
    const { authenticatedUser, error } = this.props

    if (this.state.loading && (authenticatedUser.loggedIn || error)) {
      this.setState({ loading: false })
    }
  }

  findCountryByName (countryName) {
    return countryList.find((country) => {
      return countryName === country.label
    })
  }

  formatCountryList (userCountries) {
    if (!userCountries) return
    return userCountries.map((country) => {
      const c = this.findCountryByName(country.name)
      if (!c) return
      country.code = this.findCountryByName(country.name).value
      return country
    }).filter((country) => !!country)
  }

  render () {
    const { authenticatedUser } = this.props
    const { loggedIn, account } = authenticatedUser

    if (this.state.loading) {
      return (
        <div />
      )
    }

    if (!loggedIn || !account) {
      return <NotLoggedIn message='Log in with your OSM account to see your personalized dashboard' />
    }

    const { teams } = account
    const osmesaData = account.records
    const countries = osmesaData ? this.formatCountryList(osmesaData.country_list) : []

    return (
      <div className='dashboard'>
        {this.renderHeader()}
        <section>
          <div className='row'>
            <div className='sidebar-right'>
              <h2 className='header--large' style={{ marginBottom: 5 }}>
                <Link href='/teams'>
                  <a class='header-link'>Teams</a>
                </Link>
              </h2>
              {
                teams && teams.length
                  ? (
                    <InlineList
                      viewMore='/teams'
                      list={teams.map((item) => {
                        return {
                          name: item.name,
                          href: `/teams/${item.id}`
                        }
                      })}
                    />
                  )
                  : (
                    <DataNotAvailable message={'You haven\'t joined any teams yet'} callToAction='Explore teams' callToActionUrl='/teams' />
                  )
              }

              <h2 className='header--large' style={{ marginBottom: 5 }}>
                <Link href='/countries'>
                  <a class='header-link'>Countries</a>
                </Link>
              </h2>
              {
                countries.length
                  ? (
                    <InlineList
                      viewMore='/countries'
                      list={countries.map((item) => {
                        return {
                          name: item.name,
                          href: `/countries/${item.code}`
                        }
                      })}
                    />
                  )
                  : (
                    <DataNotAvailable message='We have not found any stats for your profile' callToAction='Explore countries' callToActionUrl='/countries' />
                  )
              }
            </div>
            <div className='content--with-sidebar'>
              {this.renderAssignments()}
              {this.renderBadges()}
            </div>
          </div>
        </section>
      </div>
    )
  }

  renderHeader () {
    const { authenticatedUser } = this.props
    const { osm, account } = authenticatedUser
    const { badges } = account
    const osmesaData = account.records

    const osmUser = osm._xml2json.user
    const badgeNums = account.badges && badges.earnedBadges ? Object.keys(badges.earnedBadges).length : 0
    const campaignsCount = osmesaData && osmesaData.hashtags ? osmesaData.hashtags.length : 0
    const editCount = osmesaData ? osmesaData.edit_count : 0

    // use default gravatar image
    let profileImage = 'https://www.gravatar.com/avatar/00000000000000000000000000000000'
    if (osmUser && osmUser.img && osmUser.img['@'] && osmUser.img['@']['href']) {
      profileImage = osmUser.img['@']['href']
    }

    return (
      <header className='header--internal--dashboard header--page'>
        <div className='row'>
          <div className='header--content--wrapper'>
            <div className='section-sub--left section-width-fifty-plus'>
              {<img className='profile--thumb' style={{ float: 'left' }} src={profileImage} alt='Profile pic' />}
              <h1 className='header--xlarge header--with-description'>{osmUser['@']['display_name']}</h1>
              <Link href={`/users/${account.id}`}><a className='link--large'>View Public Profile</a></Link>
            </div>
            <div className='section-sub--right section-width-fifty-minus stats-user'>
              <ul>
                <li className='list--inline'>
                  <span className='descriptor-chart'>Campaigns</span>
                  <span className='num--large'>{campaignsCount}</span>
                </li>
                <li className='list--inline'>
                  <span className='descriptor-chart'>Badges</span>
                  <span className='num--large'>{badgeNums}</span>
                </li>
                <li className='list--inline'>
                  <span className='descriptor-chart'>Edits</span>
                  <span className='num--large'>{editCount}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='wrapper--map' />
        <UserExtentMap extent={account.records.extent_uri} uid={osmUser['@']['id']} />
      </header>
    )
  }

  onAssignmentsFilterClick (assignmentsFilter) {
    this.setState({ assignmentsFilter })
  }

  onBadgesFilterClick (badgesFilter) {
    this.setState({ badgesFilter })
  }

  renderAssignments () {
    const { authenticatedUser } = this.props
    const { account: { favorites, assignments } } = authenticatedUser

    const assignmentFilters = [
      { name: 'Teams', id: 'teams' },
      { name: 'Favorites', id: 'favorites' },
      { name: 'All', id: 'all' }
    ]

    let teamAssignments = sortBy(prop('team_priority'), assignments).map(task => {
      return {
        priority: task.team_priority ? `team priority: ${task.team_priority}` : task.priority,
        name: task.name,
        assigned_by: task.team_name,
        campaign_hashtag: task.campaign_hashtag
      }
    })

    const allCampaigns = {
      favorites: sortBy(prop('priority'), favorites),
      teams: teamAssignments,
      all: teamAssignments.concat(favorites)
    }

    const assignmentsTable = allCampaigns[this.state.assignmentsFilter].map((assignment) => {
      if (!assignment.assigned_by) {
        assignment.assigned_by = authenticatedUser.osm.displayName
      }

      return assignment
    })

    return (
      <div>
        <h2 className='header--large header--with-description'>
          <Link href='/campaigns'>
            <a class='header-link'>Campaigns</a>
          </Link>
        </h2>
        <FilterBar
          filters={assignmentFilters}
          active={this.state.assignmentsFilter}
          onClick={this.onAssignmentsFilterClick}
        />
        <AssignmentsTable assignments={assignmentsTable} />
      </div>
    )
  }

  renderBadges () {
    const { authenticatedUser } = this.props
    const { account: { badges } } = authenticatedUser
    const { badgesFilter } = this.state

    const badgeFilters = [
      { name: 'In progress', id: 'unearnedBadges' },
      { name: 'Earned', id: 'earnedBadges' },
      { name: 'All', id: 'all' }
    ]

    if (!badges || !badges.all || !badges.all.length) {
      return (
        <div style={{ marginTop: 50 }}>
          <h2 className='header--large header--with-description'>Badges</h2>
          <DataNotAvailable message={'No badges available'} />
        </div>
      )
    }

    const filteredBadges = badges[badgesFilter]
    const badgeKeys = Object.keys(filteredBadges)

    return (
      <div style={{ marginTop: 50 }}>
        <h2 className='header--large header--with-description'>Badges</h2>
        <FilterBar
          filters={badgeFilters}
          active={this.state.badgesFilter}
          onClick={this.onBadgesFilterClick}
        />

        <ul className='tri-fold clearfix'>
          {
            badgeKeys.map((badgeKey, i) => {
              const badge = badges[badgesFilter][badgeKey]

              return (
                <li key={`upcoming-badge-${i}`}>
                  <BadgeInProgress badge={badge} badgeClass='progress' />
                  <div className='badge-Details'>
                    <h3 className='header--small sub-head header--with-description'>{badge.name}</h3>
                    <p style={{ marginBottom: '.2em', lineHeight: 1.4 }}>
                      {badgesFilter === 'unearnedBadges' ? badge.progress : badge.description}
                    </p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'error'], actions)(withAlert(Dashboard))
