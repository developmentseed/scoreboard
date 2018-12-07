import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Link from '../components/Link'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'

import BadgeInProgress from '../components/BadgeInProgress'
import CampaignCard from '../components/CampaignCard'
import NotLoggedIn from '../components/NotLoggedIn'
import DataNotAvailable from '../components/DataNotAvailable'
import InlineList from '../components/InlineList'
import FilterBar from '../components/FilterBar'
import AssignmentsTable from '../components/AssignmentsTable'

const mockTeams = [
  { name: 'HOT Lunch', id: 1 }
]

const mockCountries = [
  { name: 'United States', id: 1 }
]

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
  }

  componentDidUpdate () {
    const { authenticatedUser, error } = this.props

    if (this.state.loading && (authenticatedUser.loggedIn || error)) {
      this.setState({ loading: false })
    }
  }

  render () {
    const { authenticatedUser } = this.props
    const { loggedIn, osm, account } = authenticatedUser

    if (this.state.loading) {
      return (
        <div />
      )
    }

    if (!loggedIn) {
      return <NotLoggedIn message='Log in with your OSM account to see your personalized dashboard' />
    }

    return (
      <div className='dashboard'>
        {this.renderHeader()}
        <section>
          <div className='row'>
            <div className='sidebar-right'>
              <h2 className='header--large'>Teams</h2>
              <InlineList list={mockTeams.map((item) => {
                return {
                  name: item.name,
                  href: `/teams/${item.id}`
                }
              })} />

              <h2 className='header--large'>Countries</h2>
              <InlineList list={mockCountries.map((item) => {
                return {
                  name: item.name,
                  href: `/teams/${item.id}`
                }
              })} />
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
    const { loggedIn, osm, account } = authenticatedUser

    const osmUser = osm._xml2json.user
    const badgeNums = account.badges ? Object.keys(account.badges.earnedBadges).length : 0

    return (
      <header className='header--internal--dashboard header--page'>
        <div className='row'>
          <div className='header--content--wrapper'>
            <div className='section-sub--left section-width-fifty-plus'>
              {/* <img className='profile--thumb' style={{ float: 'left' }} src={osmUser.img['@']['href']} alt='Profile pic' /> */}
              <h1 className='header--xlarge header--with-description'>{osmUser['@']['display_name']}</h1>
              <Link href={`/users/${account.id}`}><a className='link--large'>View Public Profile</a></Link>
            </div>
            <div className='section-sub--right section-width-fifty-minus stats-user'>
              <ul>
                <li className='list--inline'>
                  <span className='descriptor-chart'>Campaigns</span>
                  <span className='num--large'>{account.records.hashtags.length}</span>
                </li>
                <li className='list--inline'>
                  <span className='descriptor-chart'>Badges</span>
                  <span className='num--large'>{badgeNums}</span>
                </li>
                <li className='list--inline'>
                  <span className='descriptor-chart'>Edits</span>
                  <span className='num--large'>{account.records.edit_count}</span>
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
    const { account: { favorites } } = authenticatedUser

    const assignmentFilters = [
      { name: 'Featured', id: 'featured' },
      { name: 'Teams', id: 'teams' },
      { name: 'Favorites', id: 'favorites' },
      { name: 'All', id: 'all' }
    ]

    return (
      <div>
        <h2 className='header--large header--with-description'>Campaigns</h2>
        <FilterBar filters={assignmentFilters} onClick={(filterId) => this.onAssignmentsFilterClick(filterId)} />
        <AssignmentsTable assignments={favorites} />
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

    const badgeKeys = Object.keys(badges[badgesFilter])

    return (
      <div style={{ marginTop: 50 }}>
        <h2 className='header--large header--with-description'>Badges</h2>
        <FilterBar filters={badgeFilters} onClick={(filterId) => this.onBadgesFilterClick(filterId)} />

          <ul className='tri-fold clearfix'>
            {
              badgeKeys.map((badgeKey, i) => {
                const badge = badges[badgesFilter][badgeKey]

                return (
                  <li key={`upcoming-badge-${i}`}>
                    <BadgeInProgress badge={badge} badgeClass='progress' />
                    <div className='badge-Details'>
                      <h3 className='header--small sub-head header--with-description'>{badge.name}</h3>
                      <h5 style={{ marginBottom: '.2em' }}>
                        {badge.progress}
                      </h5>
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

export default connect(['authenticatedUser', 'error'], actions)(Dashboard)
