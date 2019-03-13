import React, { Component } from 'react'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import getSumEdits from '../lib/utils/sum_edits'
import ScoreboardPanel from '../components/ScoreboardPanel'
import EditBreakdownChart from '../components/charts/EditBreakdownChart'
import CampaignsChart from '../components/charts/CampaignsChart'
import DashboardBadges from '../components/dashboard/DashboardBadges'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardBlurb from '../components/dashboard/DashboardBlurb'

import { formatDecimal } from '../lib/utils/format'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'
import { pick } from 'ramda'
import dynamic from 'next/dynamic'

const UserExtentMap = dynamic(() => import('../components/charts/ProgressiveExtentMap'), {
  ssr: false
})
const CalendarHeatmap = dynamic(() => import('../components/charts/CalendarHeatmap'), {
  ssr: false
})

export class User extends Component {
  componentDidMount () {
    this.props.getUser(this.props.id)
  }

  render () {
    if (!this.props.user) return <div />
    const { records, country, badges, teams, refreshDate, allCampaigns } = this.props.user
    const { extent_uri, uid } = records
    if (!records) return <div />
    const editCount = getSumEdits(records)
    const badgeCount = Object.keys(badges.earnedBadges).length
    const campaignCount = records.hashtags.length
    const { name, hashtags, edit_times } = records

    const breakdownChartProps = pick([
      'waterways_add',
      'poi_add',
      'roads_add',
      'buildings_add',
      'coastlines_add',
      'coastlines_mod'
    ], records)

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
            { label: 'Edits', value: formatDecimal(editCount) }
          ]}
        />
        <div className='row'>
          <DashboardBlurb
            {...records}
            username={name}
          />
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
                <CampaignsChart hashtags={hashtags} campaigns={allCampaigns} height='260px' />
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
}

const connectedUser = connect(['user'], actions)(User)
connectedUser.getInitialProps = function ({ req }) {
  const { id } = req.params
  return {
    id
  }
}

export default connectedUser
