import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { sortBy, prop, pathOr } from 'ramda'
import { distanceInWordsToNow, format as dateFormat } from 'date-fns'

import { actions } from '../lib/store'
import ScoreboardPanel from '../components/ScoreboardPanel'
import CampaignCard from '../components/campaigns/CampaignCard'
import Table from '../components/common/Table'
import { formatDecimal, normalizeHashtag } from '../lib/utils/format'

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

export class Team extends Component {
  componentDidMount () {
    this.props.getTeam(this.props.id)
  }

  render () {
    const { team } = this.props
    if (!team) return <div />
    console.log(team)

    const userIdMap = Object.assign(...team.users.map(({ osm_id, full_name }) => ({ [full_name]: osm_id })))
    const { hashtag, created_at: teamCreated, refreshDate } = team
    return (
      <div className='Campaigns'>
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
                  <strong>{ distanceInWordsToNow(refreshDate) }</strong>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <ScoreboardPanel title='' facets={
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
            <div className='section-sub--left section-width-fifty-plus'>
              <div className='text-body'>
                { team.bio }
              </div>
              <section>
                <h2 className='header--large header--with-description'>Team Stats</h2>
                {
                  <Table idMap={userIdMap} data={team.users} tableSchema={usersTableSchema} />
                }
              </section>
              <section className='section--tertiary'>
                <div className='row'>
                  {
                    /* The team stats table should follow the same pattern as the campaign table; as such, it may not be necessary to create a new Teams table component.
                    (stats.success)
                      ? <div>
                        <Blurb {...stats} />
                        <CampaignTable users={stats.users} name={meta.name} />
                      </div>
                      : <p>There was an error retrieving stats for this campaign.</p>
                  */}
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className='section--tertiary'>
          <div className='row'>
            <h2 className='header--large header--with-description'>Team Campaigns</h2>
            {/* {sortBy(prop('team_priority'), team.campaigns).map(record => <CampaignCard key={record.id} campaign={record} />)} */}
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
