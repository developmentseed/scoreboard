import React, { Component } from 'react'
import Link from 'next/link'
// import dynamic from 'next/dynamic'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'

import BadgeInProgress from '../components/BadgeInProgress'
import CampaignCard from '../components/CampaignCard'
import NotLoggedIn from '../components/NotLoggedIn'

import mockCampaigns from '../tests/mocks/campaigns.json'

// const UserExtentMap = dynamic(() => import('../components/charts/UserExtentMap'), {
//   ssr: false
// })

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
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

  renderUpcomingBadges (badges) {
    // show only the top 3 badges for now
    const badgeKeys = Object.keys(badges).slice(0, 3)

    return (
      <section>
        <div className='row'>
          <h2 className='header--large'>Upcoming Badges</h2>
          <ul className='tri-fold clearfix'>
            {
              badgeKeys.map((badgeKey, i) => {
                const badge = badges[badgeKey]

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
      </section>
    )
  }

  renderTodos () {
    return (
      <section>
        <div className='row'>
          <h2 className='header--large header--with-description'>To-do</h2>
          {mockCampaigns.records.map(record => <CampaignCard key={record.id} campaign={record} />)}
        </div>
      </section>
    )
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

    // We are logged in and should have a profile
    const osmUser = osm._xml2json.user
    const badgeNums = account.badges ? Object.keys(account.badges.earnedBadges).length : 0

    return (
      <div className='dashboard'>
        <header className='header--internal--dashboard header--page'>
          <div className='row'>
            <div className='header--content--wrapper'>
              <div className='section-sub--left section-width-fifty-plus'>
                <img className='profile--thumb' style={{ float: 'left' }} src={osmUser.img['@']['href']} alt='Profile pic' />
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
          {/* <UserExtentMap extent={user.records.extent_uri} uid={osmUser['@']['id']} /> */}
        </header>

        {account.badges ? this.renderUpcomingBadges(account.badges.unearnedBadges) : ''}
        {this.renderTodos()}
      </div>
    )
  }
}

const Page = connect(['authenticatedUser', 'error'], actions)(Dashboard)

Page.getInitialProps = async ({ query }) => {

}

export default Page
