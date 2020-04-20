import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { pathOr, head, flatten, fromPairs } from 'ramda'
import { compareAsc, distanceInWordsToNow, format as dateFormat, getYear } from 'date-fns'
import Slugger from 'github-slugger'

import ScoreboardPanel from '../components/ScoreboardPanel'
import TeamStatsTable from '../components/campaign/CampaignTable'
import Table from '../components/common/Table'
import Blurb from '../components/teams/TeamBlurb'
import Link from '../components/Link'
import { formatDecimal } from '../lib/utils/format'
import { actions } from '../lib/store'
import {
  calculateBlurbStats,
  emptyMemberStats,
  isModerator,
  priorityDescription
} from '../lib/utils/teams'

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

export class Team extends Component {
  componentDidMount () {
    this.props.getTeam(this.props.id)
    this.slugger = new Slugger()
  }

  renderCampaignsElement () {
    const { authenticatedUser, team } = this.props
    const { id: teamId, campaigns, name: teamName } = team
    const osmId = pathOr(0, ['account', 'id'], authenticatedUser)
    if (campaigns.length > 0) {
      const campaignMap = fromPairs(campaigns.map(({ name, tasker_id: taskerId, tm_id: taskingManagerId }) => {
        return [name, { taskerId, taskingManagerId }]
      }))
      const campaignData = campaigns.map(({ name, updated_at: assigned, team_priority: pri }) => ({
        name,
        assigned,
        priority: priorityDescription[pri]
      }))
      return <div className='widget'>
        <Table tableSchema={teamCampaignsTableSchema} notSortable
          data={campaignData} campaignMap={campaignMap} />
      </div>
    } else if (isModerator(Number(osmId), team)) {
      return <h2 className='header--small width--shortened list--block'>
        There are no current assignments for this team.{ ' ' }
        <Link href={`/teams/${teamId}/edit-details`}>
          <a>Add campaign assignments.</a>
        </Link>
      </h2>
    } else {
      return <h2 className='header--small width--shortened list--block'>
        {teamName} has not made any mapping edits yet. Explore{' '}
        <Link href={'/campaigns'}><a>active campaigns</a></Link> to get started!
      </h2>
    }
  }

  render () {
    const { team } = this.props
    if (!team) return <div />
    const {
      name: teamName,
      id: teamId,
      hashtag,
      created_at: teamCreated,
      lastRefreshed,
      osmesaStats,
      canEdit
    } = team
    const { buildingsMappedCount, poiCountMappedCount, roadsKmMapped,
      waterWaysKmMapped, coastlinesKmMapped } = calculateBlurbStats(osmesaStats.teamStats)
    const allMemberEditTimes = flatten(osmesaStats.memberStats.map(({ edit_times }) => edit_times))
    const firstYearEdited = getYear(head(allMemberEditTimes.map(t => t.day).sort(compareAsc)))
    const exportDataFilename = this.slugger.slug(teamName || 'team export', false)
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
                  <strong>{ hashtag }</strong>
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
              { canEdit
                ? <Link href={`/teams/${teamId}/edit-details`}>
                  <a className='button'>Edit Team</a>
                </Link>
                : null
              }
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
            { this.renderCampaignsElement() }
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

export default Page
