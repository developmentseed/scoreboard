import React, { Component } from 'react'
import Link from '../components/Link'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'

import { actions } from '../lib/store'
import { isAdmin } from '../lib/utils/roles'

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
    const { hashtag_edits, day_edits, extent_uri, uid } = osmesaData

    const { counts, measurements, country_edits } = authenticatedUser.account.records

    const {
      buildings_added,
      buildings_modified,
      pois_added,
      pois_modified
    } = counts

    const {
      road_km_added,
      road_km_modified,
      coastline_km_added,
      coastline_km_modified,
      waterway_km_added,
      waterway_km_modified,
      railline_km_added,
      railline_km_modified
    } = measurements

    const authenticatedUserExport = {
      ...authenticatedUser,
      road_km_total: road_km_added + road_km_modified,
      buildings_total: buildings_added + buildings_modified,
      pois_total: pois_added + pois_modified,
      coastline_km_total: coastline_km_added + coastline_km_modified,
      waterway_km_total: waterway_km_added + waterway_km_modified,
      railline_km_total: railline_km_added + railline_km_modified,
      country_count: Object.keys(country_edits).length
    }

    // Calculate counts for panel
    const badgeCount =
      account.badges && badges.earnedBadges
        ? Object.keys(badges.earnedBadges).length
        : 0
    const campaignCount = osmesaData && osmesaData.hashtag_edits ? Object.keys(osmesaData.hashtag_edits).length : 0
    const changesetCount = osmesaData ? osmesaData.changeset_count : 0

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
          day_edits={day_edits}
          country={country}
          refreshDate={refreshDate}
        />
        <ScoreboardPanel
          title='Your mapping Scoreboard'
          facets={[
            { label: 'Campaigns', value: formatDecimal(campaignCount) },
            { label: 'Badges', value: formatDecimal(badgeCount) },
            { label: 'Edits', value: formatDecimal(osmesaData.edit_count) },
            { label: 'Changesets', value: formatDecimal(changesetCount) }
          ]}
        />
        <div className='row'>
          <DashboardBlurb {...osmesaData} />
          <div className='widget-33 page-actions'>
            <CSVLink
              className='button button--secondary'
              data={[
                {
                  authenticatedUserExport,
                  badgeCount
                }
              ]}
              headers={[
                { label: 'Name', key: 'authenticatedUserExport.osm.displayName' },
                { label: 'Campaigns', key: 'authenticatedUserExport.account.allCampaigns.length' },
                { label: 'Badges', key: 'badgeCount' },
                { label: 'Countries', key: 'authenticatedUserExport.country_count' },
                { label: 'Roads (Km)', key: 'authenticatedUserExport.road_km_total' },
                { label: 'Buildings', key: 'authenticatedUserExport.buildings_total' },
                { label: 'Points of Interest', key: 'authenticatedUserExport.pois_total' },
                { label: 'Railways (Km)', key: 'authenticatedUserExport.railline_km_total' },
                { label: 'Coastlines (Km)', key: 'authenticatedUserExport.coastline_km_total' },
                { label: 'Waterways (Km)', key: 'authenticatedUserExport.waterway_km_total' },
                { label: 'Total Edits', key: 'authenticatedUserExport.account.records.edit_count' }
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
                  hashtag_edits={hashtag_edits}
                  height='260px'
                />
              </div>
              <div className='widget-33'>
                <EditBreakdownChart {...counts} height='260px' />
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
            <CalendarHeatmap times={day_edits} />
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
