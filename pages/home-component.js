import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Link from '../components/Link'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'

import { actions } from '../lib/store'
import trimLength from '../lib/utils/trim_length'
import { formatDecimal } from '../lib/utils/format'
import TopEditorsChart from '../components/charts/TopEditorsChart'
import EditsByCountry from '../components/charts/EditsByCountryChart'
import ScoreboardPanel from '../components/ScoreboardPanel'

const Map = dynamic(() => import('../components/charts/HomeMap'), {
  ssr: false
})

const projectName = process.env.PROJECT_NAME || 'OpenStreetMap'
export class Home extends Component {
  componentDidMount () {
    this.props.getTopStats()
  }

  render () {
    const { topStats } = this.props

    if (!topStats) return <div />

    const { numCampaigns, priorityCampaigns, numUsers, features, topEdits, editsByCountry, totalEdits, numCountries } = topStats

    return (
      <div className='home'>
        <header className='header--homepage header--page'>
          <div className='row'>
            <div className='width--shortened'>
              <div className='section-sub--left'>
                <h1 className='header--xxlarge header--with-description'>Tracking Map Edits Around the World</h1>
                <p className='description--header'>{'See what’s happening throughout the ' + projectName + ' ecosystem. From which campaigns are the most active, to detailed information about the contributing mappers.'}</p>
                <Link href='/about'>
                  <a className='link--large'>Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <ScoreboardPanel title='Global Mapping Metrics' facets={[
          { label: 'Mappers', value: formatDecimal(numUsers) },
          { label: 'Campaigns', value: formatDecimal(numCampaigns) },
          { label: 'Countries Mapped', value: formatDecimal(numCountries) },
          { label: 'Edits', value: formatDecimal(totalEdits) }
        ]} />
        <section className='section--tertiary'>
          <div className='row'>
            <div className='width--shortened'>
              <h2 className='header--large'>Campaigns</h2>
              <div style={{ width: '100%', height: '275px', 'marginBottom': '40px' }}>
                {features
                  ? <Map overlay={features} />
                  : <div>Loading map...</div>
                }
              </div>
              <ul className='clearfix'>
                {
                  priorityCampaigns.map(record =>
                    <li key={`block-${record.id}`} className='block--campaign card'>
                      <div className='card-content'>
                        <h3 className='header--small header--with-description-xlg'>
                          <Link href={`/campaigns/${record.campaign_hashtag}`}>
                            <a className='header--underlined'>{record.name}</a>
                          </Link>
                        </h3>
                        <p>{trimLength(record.description, 195)}</p>
                        <ul className='chart-bar--main'>
                          <li>
                            <span className='chart-bar--title'>Complete</span>
                            <span className='chart-bar--wrapper'>
                              <span className='chart-bar' style={{ 'width': `${parseInt(record.done, 10)}%` }} />
                              <span className='chart-bar--percent'>{parseInt(record.done, 10)}%</span>
                            </span>
                          </li>
                          <li>
                            <span className='chart-bar--title'>Validated</span>
                            <span className='chart-bar--wrapper'>
                              <span className='chart-bar' style={{ 'width': `${parseInt(record.validated, 10)}%` }} />
                              <span className='chart-bar--percent'>{parseInt(record.validated, 10)}%</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </li>
                  )}
              </ul>
              <Link href='/campaigns'>
                <a className='link--large'>View All Campaigns</a>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className='row'>
            <div className='width--shortened graphs--users widget widget-container'>
              <h2 className='header--large widget-100'>Leaderboard</h2>
              <div className='widget-25'>
                <h3>Countries Mapped</h3>
                <EditsByCountry edits={editsByCountry} />
              </div>
              <div className='widget-75 chart' style={{ height: '430px', marginBottom: '50px' }}>
                <h3>Editors</h3>
                {
                  topEdits ? <TopEditorsChart edits={topEdits} /> : <div>Loading...</div>
                }
              </div>
            </div>
            <div className='width--shortened'>
              <Link href='/users'>
                <a className='link--large'>View All Mappers</a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['topStats', 'notification', 'authenticatedUser'], actions)(withAlert(Home))
