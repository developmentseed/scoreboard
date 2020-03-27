import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { sortBy, prop, pathOr, head, flatten } from 'ramda'
import { compareAsc, distanceInWordsToNow, format as dateFormat, getYear } from 'date-fns'

import ScoreboardPanel from '../components/ScoreboardPanel'
import CampaignTable from '../components/campaign/CampaignTable'
import Table from '../components/common/Table'
import Blurb from '../components/teams/TeamBlurb'
import { formatDecimal, normalizeHashtag } from '../lib/utils/format'
import { actions } from '../lib/store'

const usersTableSchema = {
  'headers': {
    'name': { type: 'namelink', accessor: 'full_name' },
    'user-id': { type: 'string', accessor: 'osm_id' }
  },
  columnOrder: [
    'name',
    'user-id'
  ],
  displaysTooltip: [
    'user-id'
  ]
}

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

export class Team extends Component {
  componentDidMount () {
    this.props.getTeam(this.props.id)
  }

  render () {
    const { team } = this.props
    if (!team) return <div />

    const userIdMap = Object.assign(...team.users.map(({ osm_id, full_name }) => ({ [full_name]: osm_id })))
    const { name: teamName, hashtag, created_at: teamCreated, lastRefreshed, osmesaStats } = team
    console.log( osmesaStats )
    const { buildingsMappedCount, poiCountMappedCount, roadsKmMapped,
      waterWaysKmMapped, coastlinesKmMapped } = calculateBlurbStats(osmesaStats.teamStats)

    const allMemberEditTimes = flatten(osmesaStats.memberStats.map(({ edit_times }) => edit_times))
    const firstYearEdited = getYear(head(allMemberEditTimes.map(t => t.day).sort(compareAsc)))

    return (
      <div className='Campaigns'>{ /* FIXME: campaigns class should not be used here, but should it be? */ }
        <header className='header--internal--green header--page'>
          <div className='row widget-container'>
            <div className='section-sub--left'>
              <h1 className='header--xlarge margin-top-sm'>{ team.name }</h1>
              <ul className='list--two-column clearfix'>
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
          <Blurb
            teamName={teamName}
            firstYearEdited={firstYearEdited}
            buildingsMappedCount={buildingsMappedCount}
            poiCountMappedCount={poiCountMappedCount}
            roadsKmMapped={roadsKmMapped}
            waterwaysKmMapped={waterWaysKmMapped}
            coastlinesKmMapped={coastlinesKmMapped}
          />
        </section>

        <section>
          <div className='row'>
            <div className='section-sub--left section-width-fifty-plus'>
              <div className='text-body'>
                { team.bio }
              </div>
              <section>
                <h2 className='header--large header--with-description'>Team Stats</h2>
                <Table idMap={userIdMap} data={team.users} tableSchema={usersTableSchema} />
              </section>
              <section>
                <div className='row'>
                  { /* The team stats table should follow the same pattern as the campaign table; as such, it may not be necessary to create a new Teams table component. */ }
                  <CampaignTable users={osmesaStats.memberStats} name="xxxxxxx" />
                </div>
              </section>
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

export default Page
