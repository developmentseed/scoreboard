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
      campaigns,
      canEdit
    } = team
    console.log({ canEdit })
    const { buildingsMappedCount, poiCountMappedCount, roadsKmMapped,
      waterWaysKmMapped, coastlinesKmMapped } = calculateBlurbStats(osmesaStats.teamStats)
    const allMemberEditTimes = flatten(osmesaStats.memberStats.map(({ edit_times }) => edit_times))
    const firstYearEdited = getYear(head(allMemberEditTimes.map(t => t.day).sort(compareAsc)))
    const exportDataFilename = this.slugger.slug(teamName || 'team export', false)
    const campaignMap = fromPairs(campaigns.map(({ name, tasker_id: taskerId, tm_id: taskingManagerId }) => {
      return [name, { taskerId, taskingManagerId }]
    }))
    const campaignData = campaigns.map(({ name, updated_at: assigned, team_priority: pri }) => ({
      name,
      assigned,
      priority: priorityDescription[pri]
    }))
    const osmesaMemberStatsMap = fromPairs(osmesaStats.memberStats.map(stats => {
      return [stats.uid, stats]
    }))
    const teamStatsData = team.members.map(({ id: osmId, name }) => {
      const osmesaMemberStats = osmesaMemberStatsMap[osmId]
      return osmesaMemberStats || emptyMemberStats(osmId, name)
    })

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
            <TeamStatsTable users={teamStatsData} name={exportDataFilename} />
          </div>
        </section>

        <section>
          <div className='row'>
            <h2 className='header--large header--with-description'>Team Campaigns</h2>
            <div className='widget'>
              <Table tableSchema={teamCampaignsTableSchema} notSortable data={campaignData} campaignMap={campaignMap} />
            </div>
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

/**
 * Create an empty data structure representing a team member with no edits. This
 * is the same shape as the osmesa user_statistics table. osmesa only returns
 * records for mappers with edits.
 *
 * @param osmId
 * @param name
 * @returns {{km_waterways_mod: number, km_coastlines_del: number, edit_times: [], hashtags: [], coastlines_mod: number, km_roads_add: number, roads_add: number, buildings_add: number, km_waterways_del: number, poi_del: number, uid: *, waterways_mod: number, changeset_count: number, poi_mod: number, km_railways_del: number, km_coastlines_mod: number, railways_mod: number, km_roads_del: number, editors: [], coastlines_del: number, km_railways_mod: number, roads_del: number, coastlines_add: number, buildings_del: number, km_waterways_add: number, km_roads_mod: number, railways_del: number, roads_mod: number, waterways_del: number, buildings_mod: number, last_edit: null, country_list: [], waterways_add: number, poi_add: number, name: *, km_coastlines_add: number, edit_count: number, km_railways_add: number, railways_add: number}}
 */
function emptyMemberStats (osmId, name) {
  return {
    uid: osmId,
    name,
    edit_count: 0,
    changeset_count: 0,
    last_edit: null,
    editors: [],
    edit_times: [],
    hashtags: [],
    country_list: [],
    roads_add: 0,
    roads_mod: 0,
    roads_del: 0,
    waterways_add: 0,
    waterways_mod: 0,
    waterways_del: 0,
    coastlines_add: 0,
    coastlines_mod: 0,
    coastlines_del: 0,
    buildings_add: 0,
    buildings_mod: 0,
    buildings_del: 0,
    poi_add: 0,
    poi_mod: 0,
    poi_del: 0,
    railways_add: 0,
    railways_mod: 0,
    railways_del: 0,
    km_roads_add: 0,
    km_roads_mod: 0,
    km_roads_del: 0,
    km_waterways_add: 0,
    km_waterways_mod: 0,
    km_waterways_del: 0,
    km_coastlines_add: 0,
    km_coastlines_mod: 0,
    km_coastlines_del: 0,
    km_railways_add: 0,
    km_railways_mod: 0,
    km_railways_del: 0
  }
}

export default Page
