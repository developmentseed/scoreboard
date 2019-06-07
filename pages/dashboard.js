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
import { CSVLink } from 'react-csv'

import dynamic from 'next/dynamic'

const CalendarHeatmap = dynamic(
  () => import('../components/charts/CalendarHeatmap'),
  {
    ssr: false
  }
)
const UserExtentMap = dynamic(
  () => import('../components/charts/ProgressiveExtentMap'),
  {
    ssr: false
  }
)

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
      return <div />
    }
    const { authenticatedUser } = this.props
    const { loggedIn, account } = authenticatedUser
    const { assignments, favorites, country, allCampaigns } = account

    const { badges, teams, refreshDate } = account
    const osmesaData = account.records
    const { hashtags, edit_times, extent_uri, uid } = osmesaData
    const breakdownChartProps = pick(
      [
        'waterways_add',
        'waterways_mod',
        'waterways_del',
        'poi_add',
        'poi_mod',
        'poi_del',
        'roads_add',
        'roads_mod',
        'roads_del',
        'buildings_add',
        'buildings_mod',
        'buildings_del',
        'coastlines_add',
        'coastlines_mod',
        'coastlines_del'
      ],
      osmesaData
    )

    // Calculate counts for panel
    const badgeCount =
      account.badges && badges.earnedBadges
        ? Object.keys(badges.earnedBadges).length
        : 0
    const campaignCount =
      osmesaData && osmesaData.hashtags ? osmesaData.hashtags.length : 0
    const editCount = osmesaData ? osmesaData.edit_count : 0

    if (!loggedIn || !account) {
      return (
        <NotLoggedIn message='Log in with your OSM account to see your personalized dashboard' />
      )
    }

    // Dashboard header variables
    let profileImage = null
    let name = null
    let accountId = null
    if (authenticatedUser) {
      const osmUser = authenticatedUser.osm._xml2json.user
      if (
        osmUser &&
        osmUser.img &&
        osmUser.img['@'] &&
        osmUser.img['@']['href']
      ) {
        profileImage = osmUser.img['@']['href']
      } else {
        profileImage =
          'https://www.gravatar.com/avatar/00000000000000000000000000000000'
      }
      name = osmUser['@']['display_name']
      accountId = authenticatedUser.account.id
    }

    return (
      <div className='dashboard'>
        <DashboardHeader
          id={accountId}
          loggedIn
          name={name}
          profileImage={profileImage}
          edit_times={edit_times}
          country={country}
          refreshDate={refreshDate}
        />
        <ScoreboardPanel
          title='Your mapping Scoreboard'
          facets={[
            { label: 'Campaigns', value: formatDecimal(campaignCount) },
            { label: 'Badges', value: formatDecimal(badgeCount) },
            { label: 'Edits', value: formatDecimal(osmesaData.edit_sum) },
            { label: 'Changesets', value: formatDecimal(editCount) }
          ]}
        />
        <div className='row'>
          <DashboardBlurb {...osmesaData} />
          <div className='widget-33 page-actions'>
            <CSVLink
              className='button button--secondary'
              data={[
                {
                  authenticatedUser,
                  badgeCount
                }
              ]}
              headers={[
                { label: 'Name', key: 'authenticatedUser.osm.displayName' },
                {
                  label: 'Campaigns',
                  key: 'authenticatedUser.account.allCampaigns.length'
                },
                { label: 'Badges', key: 'badgeCount' },
                {
                  label: 'Roads (Km)',
                  key: 'authenticatedUser.account.records.km_roads_add'
                },
                {
                  label: 'Buildings',
                  key: 'authenticatedUser.account.records.buildings_add'
                },
                {
                  label: 'Points of Interest',
                  key: 'authenticatedUser.account.records.poi_add'
                },
                {
                  label: 'Coastlines (Km)',
                  key: 'authenticatedUser.account.records.km_coastlines_add'
                },
                {
                  label: 'Waterways (Km)',
                  key: 'authenticatedUser.account.records.km_waterways_add'
                },
                {
                  label: 'Total Edits',
                  key: 'authenticatedUser.account.records.edit_count'
                }
              ]}
              filename={`${name}_ScoreboardData.csv`}
            >
              Export Your Data (CSV)
            </CSVLink>
          </div>
        </div>
        <section className='section--dark'>
          <div className='row'>
            {isAdmin(authenticatedUser.account.roles) && this.renderAdmin()}
            <DashboardAssignments
              favorites={favorites}
              assignments={assignments}
              authenticatedUser={authenticatedUser}
              all={allCampaigns}
            />
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
                <CampaignsChart
                  campaigns={allCampaigns}
                  hashtags={hashtags}
                  height='260px'
                />
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
              <DashboardBadges badges={badges} name={name} />
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
        <AdminSectionList teamsActive={this.props.authenticatedUser.account.activatedTeams} />
        <hr />
        <br />
        <br />
      </div>
    )
  }
}

export default connect(
  ['authenticatedUser', 'error'],
  actions
)(withAlert(Dashboard))
