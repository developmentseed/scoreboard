import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { pathOr, head, flatten, fromPairs } from 'ramda'
import { compareAsc, distanceInWordsToNow, format as dateFormat, getYear } from 'date-fns'
import Slugger from 'github-slugger'

import ScoreboardPanel from '../components/ScoreboardPanel'
import TeamStatsTable from '../components/campaign/CampaignTable'
import Table from '../components/common/Table'
import Blurb from '../components/teams/TeamBlurb'
import { formatDecimal, normalizeHashtag } from '../lib/utils/format'
import { actions } from '../lib/store'

export class Team extends Component {
  componentDidMount () {
    this.props.getTeam(this.props.id)
    this.slugger = new Slugger()
  }

  render () {
    const { team } = this.props
    if (!team) return <div />

    const {
      name: teamName,
      hashtag,
      created_at: teamCreated,
      lastRefreshed,
      osmesaStats,
      campaigns
    } = team
    const { buildingsMappedCount, poiCountMappedCount, roadsKmMapped,
      waterWaysKmMapped, coastlinesKmMapped } = calculateBlurbStats(osmesaStats.teamStats)
    const allMemberEditTimes = flatten(osmesaStats.memberStats.map(({ edit_times }) => edit_times))
    const firstYearEdited = getYear(head(allMemberEditTimes.map(t => t.day).sort(compareAsc)))
    const exportDataFilename = this.slugger.slug(teamName || 'team export', false)
    const campaignMap = fromPairs(campaigns.map(({ name, tasker_id: tid, campaign_id: cid }) => {
      const campaignRoute = `${tid}-${cid}`
      return [name, campaignRoute]
    }))
    const campaignData = campaigns.map(({ name, created_at: assigned, team_priority: pri }) => ({
      name,
      assigned,
      priority: priorityDescription[pri]
    }))
    return (
      <div className='Campaigns'>
        <header className='header--internal--green header--page'>
          <div className='row widget-container'>
            <div className='widget-66' style={{ 'pointerEvents': 'none' }}>
              <h1 className='header--xlarge margin-top-sm'>{ team.name }</h1>
              <ul className='list--two-column'>
                <li>
                  <span className='list-label'>hashtag</span>
                  <strong>{ normalizeHashtag(hashtag) }</strong>
                </li>
                <li>
                  <span className='list-label'>created</span>
                  <strong>{ dateFormat(teamCreated, 'M/D/YY') }</strong>
                </li>
                <li>
                  <span className='list-label'>last refreshed</span>
                  <strong>{ lastRefreshed ? distanceInWordsToNow(lastRefreshed) : null }</strong>
                </li>
              </ul>
            </div>
            <div className='widget-33 page-actions'>
              {/* <a className='button' href='#'>Join</a> */}
            </div>
          </div>
        </header>

        <ScoreboardPanel title={`${teamName}'s Scoreboard`} facets={
          [
            {
              label: 'Campaigns',
              value: formatDecimal(pathOr([], ['campaigns'], team).length)
            },
            {
              label: 'Members',
              value: formatDecimal(pathOr([], ['members'], team).length)
            },
            {
              label: 'Total Edits',
              value: formatDecimal(pathOr(0, ['osmesaStats', 'teamStats', 'edit_count'], team))
            }
          ]
        } />
        <section>
          <div className='row'>
            <Blurb
              teamName={teamName}
              firstYearEdited={firstYearEdited}
              buildingsMappedCount={buildingsMappedCount}
              poiCountMappedCount={poiCountMappedCount}
              roadsKmMapped={roadsKmMapped}
              waterwaysKmMapped={waterWaysKmMapped}
              coastlinesKmMapped={coastlinesKmMapped}
            />
          </div>
        </section>

        <section>
          <div className='row'>
            <div className='text-body'>
              { team.bio }
            </div>
          </div>
        </section>

        <section>
          <div className='row'>
            <h2 className='header--large header--with-description'>Team Stats</h2>
            <TeamStatsTable users={osmesaStats.memberStats} name={exportDataFilename} />
          </div>
        </section>

        <section>
          <div className='row'>
            <h2 className='header--large header--with-description'>Team Campaigns</h2>
            <Table tableSchema={teamCampaignsTableSchema} notSortable data={campaignData} campaignMap={campaignMap} />
          </div>
        </section>
      </div>
    )
  }
}

const Page = connect(['authenticatedUser', 'team'], actions)(Team)

Page.getInitialProps = async ({ req }) => {
  const { id } = req.params
  return {
    id
  }
}

/**
 * Schema for the Team Campaigns table.
 *
 * @type {{headers: {'campaign-assigned': {accessor: string, type: string}, 'campaign-name': {accessor: string, type: string}, 'campaign-priority': {accessor: string, type: string}}, columnOrder: [string, string, string], displaysTooltip: [string, string, string]}}
 */
const teamCampaignsTableSchema = Object.freeze({
  headers: {
    'campaign-name': { type: 'campaignlink', accessor: 'name' },
    'campaign-priority': { type: 'string', accessor: 'priority' },
    'campaign-assigned': { type: 'date', accessor: 'assigned' }
  },
  columnOrder: [
    'campaign-name',
    'campaign-priority',
    'campaign-assigned'
  ],
  displaysTooltip: [
    'campaign-name',
    'campaign-priority',
    'campaign-assigned'
  ]
})

/**
 * Map integer priority to simple 3 tier naming.
 *
 * @type {{'1': string, '2': string, '3': string}}
 */
const priorityDescription = Object.freeze({
  1: 'High',
  2: 'Medium',
  3: 'Low'
})

/**
 * Helper function to sum statistics from osmesa for usage in the Team Blurb
 * component. Converts from osmesa database column names to JavaScript names.
 *
 * @param {number} km_roads_add
 * @param {number} km_roads_mod
 * @param {number} km_waterways_add
 * @param {number} km_waterways_mod
 * @param {number} poi_add
 * @param {number} poi_mod
 * @param {number} km_coastlines_add
 * @param {number} km_coastlines_mod
 * @param {number} buildings_add
 * @param {number} buildings_mod
 * @returns {{waterwaysKmMapped: *, buildingsMappedCount: *, poiCountMappedCount: *, coastlinesKmMapped: *, roadsKmMapped: *}}
 */
function calculateBlurbStats ({
  km_roads_add,
  km_roads_mod,
  km_waterways_add,
  km_waterways_mod,
  poi_add,
  poi_mod,
  km_coastlines_add,
  km_coastlines_mod,
  buildings_add,
  buildings_mod
}) {
  return {
    poiCountMappedCount: poi_add + poi_mod,
    roadsKmMapped: km_roads_add + km_roads_mod,
    waterwaysKmMapped: km_waterways_add + km_waterways_mod,
    coastlinesKmMapped: km_coastlines_add + km_coastlines_mod,
    buildingsMappedCount: buildings_add + buildings_mod
  }
}

export default Page
