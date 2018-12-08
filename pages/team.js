import React, { Component } from 'react'
import Link from '../components/Link'
import { connect } from 'unistore/react'
import { actions } from '../lib/store'
import CampaignCard from '../components/CampaignCard'

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
          <div className='row'>
            <div className='section-sub--left'>
              <h1 className='header--xlarge margin-top-sm'>{team.name}</h1>
              <ul className='list--two-column clearfix'>
                <li>
                  <span className='list-label'>Hashtag:</span>
                  <span>{team.hashtag}</span>
                </li>
              </ul>
            </div>
            <div className='section-sub--right'>
              <Link href='/about'>
                <a className='button'>Join</a>
              </Link>
            </div>
          </div>
        </header>
        <section>
          <div className='row'>
            <div className='section-sub--left section-width-fifty-plus'>
              <div className='text-body'>
                {team.bio}
              </div>
            </div>
          </div>
        </section>
        <section className='section--tertiary'>
          <div className='row'>
            <h2>Assigned Campaigns</h2>
            {team.campaignData.map(record => <CampaignCard key={record.id} campaign={record} />)}
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
