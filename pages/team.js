import React, { Component } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import Link from '../components/Link'
import CampaignCard from '../components/campaigns/CampaignCard'
import { sortBy, prop } from 'ramda'
import { Tooltip } from '../components/common/Tooltip'

const { selectHeaders, tableHeaderNames } = require('../lib/utils/tableHeaderSelector')

export class Team extends Component {
  componentDidMount () {
    this.props.getTeam(this.props.id)
  }

  render () {
    const { team } = this.props
    if (!team) return <div />

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
                <table className=''>
                  <thead>
                    <tr>
                      {selectHeaders(tableHeaderNames.USER)
                        .map(header => (
                          header.displayTooltip ? (
                            <th key={header.id}>
                              <Tooltip dataTip={header.description_en}>{header.name_en}</Tooltip>
                            </th>
                          ) : (
                            <th key={header.id}>{header.name_en}</th>
                          )
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {team.users.map(record => (
                      <tr key={`users-${record.osm_id}`} className=''>
                        <td><Link href={`/users/${record.osm_id}`}><a className='link--normal'>{`${record.full_name}`}</a></Link></td>
                        <td>{record.osm_id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
