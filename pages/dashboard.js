import React, { Component } from 'react'
import Link from '../components/Link'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'

import { actions } from '../lib/store'
import { isAdmin } from '../lib/utils/roles'
import { pick } from 'ramda'

import NotLoggedIn from '../components/NotLoggedIn'
import AdminSectionList from '../components/admin/AdminSectionList'
import ScoreboardPanel from '../components/ScoreboardPanel'
import DashboardBadges from '../components/dashboard/DashboardBadges'
import DashboardAssignments from '../components/dashboard/DashboardAssignments'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardBlurb from '../components/dashboard/DashboardBlurb'
import CampaignsChart from '../components/charts/CampaignsChart'
import EditBreakdownChart from '../components/charts/EditBreakdownChart'
import { formatDecimal } from '../lib/utils/format'

import dynamic from 'next/dynamic'

const CalendarHeatmap = dynamic(() => import('../components/charts/CalendarHeatmap'), {
  ssr: false
})
const UserExtentMap = dynamic(() => import('../components/charts/ProgressiveExtentMap'), {
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
    const { assignments, favorites, country } = account

    const { badges, teams, refreshDate } = account
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
      'buildings_add',
      'coastlines_add',
      'coastlines_mod'
    ], osmesaData)

    // Calculate counts for panel
    const badgeCount = account.badges && badges.earnedBadges ? Object.keys(badges.earnedBadges).length : 0
    const campaignCount = osmesaData && osmesaData.hashtags ? osmesaData.hashtags.length : 0
    const editCount = osmesaData ? osmesaData.edit_count : 0

    if (!loggedIn || !account) {
      return <NotLoggedIn message='Log in with your OSM account to see your personalized dashboard' />
    }

    // Dashboard header variables
    let profileImage = null
    let name = null
    let accountId = null
    if (authenticatedUser) {
      const osmUser = authenticatedUser.osm._xml2json.user
      if (osmUser && osmUser.img && osmUser.img['@'] && osmUser.img['@']['href']) {
        profileImage = osmUser.img['@']['href']
      } else {
        profileImage = 'https://www.gravatar.com/avatar/00000000000000000000000000000000'
      }
      name = osmUser['@']['display_name']
      accountId = authenticatedUser.account.id
    }

    return (
      <div className='dashboard'>
        <DashboardHeader id={accountId} loggedIn name={name} profileImage={profileImage} edit_times={edit_times} country={country} refresh_date={refreshDate}/>
        <ScoreboardPanel
          title='Your mapping Scoreboard'
          facets={[
            { label: 'Campaigns', value: formatDecimal(campaignCount) },
            { label: 'Badges', value: formatDecimal(badgeCount) },
            { label: 'Edits', value: formatDecimal(editCount) }
          ]}
        />
        <div className='row'>
          <DashboardBlurb
            {...osmesaData}
          />
        </div>
        <section className='section--dark'>
          <div className='row'>
            {isAdmin(authenticatedUser.account.roles) && this.renderAdmin()}
            <DashboardAssignments favorites={favorites} assignments={assignments} authenticatedUser={authenticatedUser} />
          </div>
        </section>
        <section>
          <div className='row'>
            <div className='map-lg'>
              <UserExtentMap uid={uid} extent={extent_uri} />
            </div>
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
              <DashboardBadges badges={badges} />
            </div>
          </div>
          <div className='row'>
            <CalendarHeatmap times={edit_times} />
          </div>
        </section>
      </div>
    )
  }

  renderAdmin () {
    return (
      <div>
        <h2 className='header--large header--with-description'>
          <Link href='/admin'>
            <a className='header-link'>Admin</a>
          </Link>
        </h2>
        <AdminSectionList />
        <hr />
        <br />
        <br />
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'error'], actions)(withAlert(Dashboard))
