import React, { Component } from 'react'
import Link from '../components/Link'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'

import { actions } from '../lib/store'
import { isAdmin } from '../lib/utils/roles'
import { pick } from 'ramda'

import NotLoggedIn from '../components/NotLoggedIn'
import AdminSectionList from '../components/AdminSectionList'
import ScoreboardPanel from '../components/ScoreboardPanel'
import DashboardBadges from '../components/dashboard/DashboardBadges'
import DashboardAssignments from '../components/dashboard/DashboardAssignments'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import CampaignsChart from '../components/charts/CampaignsChart'
import EditBreakdownChart from '../components/charts/EditBreakdownChart'
import { formatDecimal } from '../lib/utils/format'

import dynamic from 'next/dynamic'

const CalendarHeatmap = dynamic(() => import('../components/charts/CalendarHeatmap'), {
  ssr: false
})
const UserExtentMap = dynamic(() => import('../components/charts/UserExtentMap'), {
  ssr: false
})

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

  render () {
    if (this.state.loading) {
      return (
        <div />
      )
    }
    const { authenticatedUser } = this.props
    const { loggedIn, account } = authenticatedUser
    const { assignments, favorites } = account

    const { badges, teams } = account
    const osmesaData = account.records
    const {
      hashtags,
      edit_times,
      extent_uri,
      uid
    } = osmesaData
    const breakdownChartProps = pick([
      'waterways_add',
      'poi_add',
      'roads_add',
      'buildings_add'
    ], osmesaData)

    // Calculate counts for panel
    const badgeCount = account.badges && badges.earnedBadges ? Object.keys(badges.earnedBadges).length : 0
    const campaignCount = osmesaData && osmesaData.hashtags ? osmesaData.hashtags.length : 0
    const editCount = osmesaData ? osmesaData.edit_count : 0

    if (!loggedIn || !account) {
      return <NotLoggedIn message='Log in with your OSM account to see your personalized dashboard' />
    }

    return (
      <div className='dashboard'>
        <DashboardHeader authenticatedUser={authenticatedUser} />
        <ScoreboardPanel
          title='Your mapping Scoreboard'
          facets={[
            { label: 'Campaigns', value: formatDecimal(campaignCount) },
            { label: 'Badges', value: formatDecimal(badgeCount) },
            { label: 'Edits', value: formatDecimal(editCount) }
          ]}
        />
        <section>
          <div className='row'>
            <UserExtentMap uid={uid} extent={extent_uri} />
          </div>
        </section>
        <section>
          <div className='row'>
            <div className='widget-container'>
              <div className='widget-66'>
                <CampaignsChart hashtags={hashtags} height='260px' />
              </div>
              <div className='widget-33'>
                <EditBreakdownChart {...breakdownChartProps} height='260px' />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='row widget-container'>
            <DashboardSidebar teams={teams} osmesaData={osmesaData} />
            <div className='widget-75'>
              {isAdmin(authenticatedUser.account.roles) && this.renderAdmin()}
              <DashboardAssignments favorites={favorites} assignments={assignments} authenticatedUser={authenticatedUser} />
            </div>
          </div>
          <div className='row'>
            <DashboardBadges badges={badges} />
          </div>
          <div className='row'>
            <CalendarHeatmap times={edit_times} />
          </div>
        </section>
        <div className='banner banner__badges'>
          <div className='row'>
            <div className='banner--content'>
              <h2 className='header--xlarge'>Map to Earn Badges</h2>
              <p>Track your best work. Earn badges for edits you’ve made and campaigns you've helped complete. Share your progress and contribution to the global mapping ecosystem. </p>
              {
                // TODO when badge overview page is added
                //    <a href='#' class='link--large'>See all badges</a>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderAdmin () {
    return (
      <div>
        <h2 className='header--large header--with-description'>
          <Link href='/admin'>
            <a class='header-link'>Admin</a>
          </Link>
        </h2>
        <AdminSectionList />
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'error'], actions)(withAlert(Dashboard))
