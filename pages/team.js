import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import { distanceInWordsToNow } from 'date-fns'
import ScoreboardPanel from '../components/ScoreboardPanel'
import CampaignCard from '../components/campaigns/CampaignCard'
import { sortBy, prop } from 'ramda'
import Table from '../components/common/Table'

const tableSchema = {
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
    // const { team } = this.props
    // if (!team) return <div />

    // let idMap = {}
    // if (team.users.length) {
    //   idMap = Object.assign(...team.users.map(({ osm_id, full_name }) => ({ [full_name]: osm_id })))
    // }

    return (
      <div className='Campaigns'>
        <header className='header--internal--green header--page'>
          <div className='row widget-container'>
            <div className='section-sub--left'>
              <h1 className='header--xlarge margin-top-sm'>Team Name</h1>
              <ul className='list--two-column clearfix'>
                <li>
                  <span className='list-label'>Hashtag:</span>
                  <strong>Hashtag from props</strong>
                </li>
                <li>
                  <span className='list-label'>Created:</span>
                  <strong>Creation Date</strong>
                  {/* <strong>{distanceInWordsToNow(creationDate)} ago</strong> */}
                </li>
                <li>
                  <span className='list-label'>Last updated:</span>
                  <strong>Last update data</strong>
                  {/* <strong>{distanceInWordsToNow(lastUpdate)} ago</strong> */}
                </li>
              </ul>
            </div>
          </div>
        </header>
        <ScoreboardPanel title='' facets={
          [
            { label: 'Campaigns', value: '#' },
            { label: 'Members', value: '#' },
            { label: 'Edits', value: '#' }
            // { label: 'Mapped', value: `${parseInt(meta.done, 10)}%` },
            // { label: 'Validated', value: `${parseInt(meta.validated, 10)}%` },
            // { label: 'Participants', value: stats.users.length },
            // { label: 'Total Edits', value: stats.editCounts }
          ]
        } />
        <section>
          <div className='row'>
            <div className='section-sub--left section-width-fifty-plus'>
              <div className='text-body'>
                Team Bio
              </div>
              <section>
                <h2 className='header--large header--with-description'>Team Stats</h2>
                {
                  /* Commenting out the below teams table for now, but this data pathway is correct
                  <Table idMap={idMap} data={team.users} tableSchema={tableSchema} /> */
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
