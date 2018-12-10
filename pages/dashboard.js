import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Link from '../components/Link'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'

import countryList from '../lib/utils/country-list'
import BadgeInProgress from '../components/BadgeInProgress'
import NotLoggedIn from '../components/NotLoggedIn'
// import DataNotAvailable from '../components/DataNotAvailable'
import InlineList from '../components/InlineList'
import FilterBar from '../components/FilterBar'
import AssignmentsTable from '../components/AssignmentsTable'

const mockTeams = [
  { name: 'HOT Lunch', id: 1 },
  { name: 'OpenPizzaMap', id: 2 },
  { name: 'OpenStreetMap Seattle', id: 3 },
  { name: 'CUGOS', id: 4 }
]

const mockCampaigns = {
  favorites: [
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 1', campaign_hashtag: '#ok' } },
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 2', campaign_hashtag: '#ok' } },
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 3', campaign_hashtag: '#ok' } }
  ],
  teams: [
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 4', campaign_hashtag: '#ok' } },
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 5', campaign_hashtag: '#ok' } },
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 6', campaign_hashtag: '#ok' } }
  ],
  all: [
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 1', campaign_hashtag: '#ok' } },
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 2', campaign_hashtag: '#ok' } },
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 3', campaign_hashtag: '#ok' } },
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 4', campaign_hashtag: '#ok' } },
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 5', campaign_hashtag: '#ok' } },
    { url: '/1', country: 'Country', created: 'Jan 1, 2017', campaign: { name: 'Campaign 6', campaign_hashtag: '#ok' } }
  ]
}

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
    console.log('countryName', countryName)
    return countryList.find((country) => {
      return countryName === country.label
    })
  }

  formatCountryList (userCountries) {
    if (!userCountries) return
    return userCountries.map((country) => {
      const c = this.findCountryByName(country.name)
      if (!c) return
      country.alpha2 = this.findCountryByName(country.name).value
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

    if (!loggedIn) {
      return <NotLoggedIn message='Log in with your OSM account to see your personalized dashboard' />
    }

    console.log(account.records.country_list)
    const countries = this.formatCountryList(account.records.country_list)
    console.log('countries', countries)
    return (
      <div className='dashboard'>
        {this.renderHeader()}
        <section>
          <div className='row'>
            <div className='sidebar-right'>
              <h2 className='header--large' style={{ marginBottom: 5 }}>Teams</h2>
              {
                mockTeams.length
                  ? (
                    <InlineList
                      viewMore='/teams'
                      list={mockTeams.map((item) => {
                        return {
                          name: item.name,
                          href: `/teams/${item.id}`
                        }
                      })}
                    />
                  )
                  : (
                    <DataNotAvailable message='You have not joined any teams yet' callToAction='Explore teams' callToActionUrl='/teams' />
                  )
              }

              <h2 className='header--large' style={{ marginBottom: 5 }}>Countries</h2>
              {
                countries.length
                  ? (
                    <InlineList
                      viewMore='/countries'
                      list={countries.map((item) => {
                        return {
                          name: item.name,
                          href: `/countries/${item.alpha2}`
                        }
                      })}
                    />
                  )
                  : (
                    <DataNotAvailable message='You have not joined any teams yet' callToAction='Explore teams' callToActionUrl='/teams' />
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

    const osmUser = osm._xml2json.user
    const badgeNums = account.badges ? Object.keys(account.badges.earnedBadges).length : 0

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
      // { name: 'Featured', id: 'featured' },
      { name: 'Teams', id: 'teams' },
      { name: 'Favorites', id: 'favorites' },
      { name: 'All', id: 'all' }
    ]

    const assignments = mockCampaigns[this.state.assignmentsFilter]

    return (
      <div>
        <h2 className='header--large header--with-description'>Campaigns</h2>
        <FilterBar
          filters={assignmentFilters}
          active={this.state.assignmentsFilter}
          onClick={this.onAssignmentsFilterClick}
        />
        <AssignmentsTable assignments={assignments} />
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
