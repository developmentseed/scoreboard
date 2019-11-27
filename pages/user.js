import React, { Component } from 'react'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import ScoreboardPanel from '../components/ScoreboardPanel'
import EditBreakdownChart from '../components/charts/EditBreakdownChart'
import CampaignsChart from '../components/charts/CampaignsChart'
import DashboardBadges from '../components/dashboard/DashboardBadges'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardBlurb from '../components/dashboard/DashboardBlurb'
import { LoadingState } from '../components/common/LoadingState'

import { formatDecimal } from '../lib/utils/format'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'
import { pick } from 'ramda'
import dynamic from 'next/dynamic'
import CSVExport from '../components/CSVExport'

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
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.props.getUser(this.props.id)
  }

  componentDidUpdate () {
    if (this.state.loading && (this.props.user)) {
      this.setState({ loading: false })
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <div>
          <header className='header--internal--green header--page' style={{ paddingBottom: '8rem' }} />
          <LoadingState />
        </div>
      )
    }
    const {
      records,
      country,
      badges,
      teams,
      refreshDate
    } = this.props.user
    const { extent_uri, uid } = records
    if (!records) return <div />
    const badgeCount = Object.keys(badges.earnedBadges).length
    const campaignCount = records.hashtags.length
    const { name, hashtags, edit_times } = records
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
        'coastlines_del',
        'railways_add',
        'railways_mod',
        'railways_del'
      ],
      records
    )
    const recordsExport = [{ ...records, badgeCount, campaignCount }]
    return (
      <div className='dashboard'>
        <DashboardHeader
          id={this.props.id}
          name={name}
          edit_times={edit_times}
          country={country}
          refreshDate={refreshDate}
        />
        <ScoreboardPanel
          title={`${records.name}'s Scoreboard`}
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
            <CSVExport filename={`${name}_ScoreboardData.csv`} data={recordsExport} />
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
            <DashboardSidebar teams={teams} osmesaData={records} />
            <div className='widget-75'>
              <DashboardBadges name={name} badges={badges} />
            </div>
          </div>
          <div className='row'>
            <CalendarHeatmap times={edit_times} />
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
