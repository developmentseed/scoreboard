import React, { Component } from 'react'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import ScoreboardPanel from '../components/ScoreboardPanel'
import EditBreakdownChart from '../components/charts/EditBreakdownChart'
import CampaignsChart from '../components/charts/CampaignsChart'
import DashboardBadges from '../components/dashboard/DashboardBadges'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardBlurb from '../components/dashboard/DashboardBlurb'

import { formatDecimal } from '../lib/utils/format'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'
import dynamic from 'next/dynamic'
import { CSVLink } from 'react-csv'

const UserExtentMap = dynamic(
  () => import('../components/charts/ProgressiveExtentMap'),
  {
    ssr: false
  }
)
const CalendarHeatmap = dynamic(
  () => import('../components/charts/CalendarHeatmap'),
  {
    ssr: false
  }
)

export class User extends Component {
  componentDidMount () {
    this.props.getUser(this.props.id)
  }

  render () {
    if (!this.props.user) return <div />

    const {
      records,
      country,
      badges,
      teams,
      refreshDate,
      allCampaigns
    } = this.props.user

    if (!records) return <div />

    const { extent_uri, uid, hashtag_edits, day_edits, name, counts, measurements, country_edits } = records

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

    const badgeCount = Object.keys(badges.earnedBadges).length
    const campaignCount = Object.keys(hashtag_edits).length

    const recordsExport = {
      ...records,
      road_km_total: road_km_added + road_km_modified,
      buildings_total: buildings_added + buildings_modified,
      pois_total: pois_added + pois_modified,
      coastline_km_total: coastline_km_added + coastline_km_modified,
      waterway_km_total: waterway_km_added + waterway_km_modified,
      railline_km_total: railline_km_added + railline_km_modified,
      country_count: Object.keys(country_edits).length
    }

    return (
      <div className='dashboard'>
        <DashboardHeader
          id={this.props.id}
          name={name}
          day_edits={day_edits}
          country={country}
          refreshDate={refreshDate}
        />
        <ScoreboardPanel
          title={`${name}'s Scoreboard`}
          facets={[
            { label: 'Campaigns', value: formatDecimal(campaignCount) },
            { label: 'Badges', value: formatDecimal(badgeCount) },
            { label: 'Edits', value: formatDecimal(records.edit_count) },
            { label: 'Changesets', value: formatDecimal(records.changeset_count) }
          ]}
        />
        <div className='row'>
          <DashboardBlurb {...records} username={name} />
          <div className='widget-33 page-actions'>
            <CSVLink
              className='button button--secondary'
              style={{ float: 'right', marginBottom: '1rem' }}
              data={[
                {
                  badgeCount,
                  campaignCount,
                  recordsExport
                }
              ]}
              headers={[
                { label: 'Name', key: 'recordsExport.name' },
                { label: 'Campaigns', key: 'campaignCount' },
                { label: 'Badges', key: 'badgeCount' },
                { label: 'Countries', key: 'recordsExport.country_count' },
                { label: 'Roads (Km)', key: 'recordsExport.road_km_total' },
                { label: 'Buildings', key: 'recordsExport.buildings_total' },
                { label: 'Points of Interest', key: 'recordsExport.pois_total' },
                { label: 'Railways (Km)', key: 'authenticatedUserExport.railline_km_total' },
                { label: 'Coastlines (Km)', key: 'recordsExport.coastline_km_total' },
                { label: 'Waterways (Km)', key: 'recordsExport.waterway_km_total' },
                { label: 'Total Edits', key: 'recordsExport.edit_count' }
              ]}
              filename={`${name}_ScoreboardData.csv`}
            >
              Export User Data (CSV)
            </CSVLink>
          </div>
        </div>
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
                  hashtag_edits={hashtag_edits}
                  campaigns={allCampaigns}
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
            <DashboardSidebar teams={teams} osmesaData={records} />
            <div className='widget-75'>
              <DashboardBadges name={name} badges={badges} />
            </div>
          </div>
          <div className='row'>
            <CalendarHeatmap times={day_edits} />
          </div>
        </section>
      </div>
    )
  }
}

const connectedUser = connect(
  ['user'],
  actions
)(User)

export default connectedUser

connectedUser.getInitialProps = function ({ query }) {
  if (query) {
    const { id } = query
    return {
      id
    }
  } else {
    return {}
  }
}
