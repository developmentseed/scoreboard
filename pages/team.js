import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
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
    const { team } = this.props
    if (!team) return <div />

    let idMap = {}
    if (team.users.length) {
      idMap = Object.assign(...team.users.map(({ osm_id, full_name }) => ({ [full_name]: osm_id })))
    }

    return (
      <div className='Campaigns'>
        <header className='header--internal--green header--page'>
          <div className='row widget-container'>
            <div className='section-sub--left'>
              <h1 className='header--xlarge margin-top-sm'>{team.name}</h1>
              <ul className='list--two-column clearfix'>
                <li>
                  <span className='list-label'>Hashtag:</span>
                  <span>{team.hashtag}</span>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <section>
          <div className='row'>
            <div className='section-sub--left section-width-fifty-plus'>
              <div className='text-body'>
                {team.bio}
              </div>
              <section>
                <h2>Team Members</h2>
                <Table idMap={idMap} data={team.users} tableSchema={tableSchema} />
              </section>
            </div>
          </div>
        </section>
        <section className='section--tertiary'>
          <div className='row'>
            <h2>Assigned Campaigns</h2>
            {sortBy(prop('team_priority'), team.campaigns).map(record => <CampaignCard key={record.id} campaign={record} />)}
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
