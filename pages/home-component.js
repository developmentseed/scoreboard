import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Link from '../components/Link'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'

import join from 'url-join'
import { APP_URL_FINAL } from '../api/src/config'
import { actions } from '../lib/store'
import trimLength from '../lib/utils/trim_length'
import { formatDecimal } from '../lib/utils/format'
import TopEditorsChart from '../components/charts/TopEditorsChart'
import EditorsByCountry from '../components/charts/EditorsByCountryChart'
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
    const { topStats, authenticatedUser } = this.props
    const { loggedIn } = authenticatedUser

    if (!topStats) return <div />

    const { numCampaigns, priorityCampaigns, numUsers, features, topEdits, editsByCountry, totalEdits, numCountries } = topStats

    return (
      <div className='home'>
        <header className='header--homepage header--page'>
          <div className='overlay-dark'>
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
            <div className='width--shortened graphs--users widget'>
              <h2 className='header--large'>Mappers</h2>
              <div className='side-by-side section-width-twenty section-width--first'>
                <h3>Edits By Country</h3>
                <EditorsByCountry edits={editsByCountry} />
              </div>
              <div className='side-by-side section-width-eighty chart' style={{ height: '430px', marginBottom: '50px' }}>
                <h3>Top Editors</h3>
                {
                  topEdits ? <TopEditorsChart edits={topEdits} /> : <div>Loading...</div>
                }
              </div>
              <Link href='/users'>
                <a className='link--large'>View All Mappers</a>
              </Link>
            </div>
          </div>
        </section>
        {
          !loggedIn
            ? (<div class="banner banner__signup">
              <div class="row">
                <div class="banner--content">
                  <h2 class="header--xlarge">Earn a spot on the board</h2>
                  <p>Join other mappers and track your progress. Earn badges for edits you’ve made and campaigns you've helped complete. Share your contributions to the global mapping ecosystem.</p>
                  <a href={join(APP_URL_FINAL, '/auth/openstreetmap')} class="link--large">Sign up with {projectName}</a>
                </div>
              </div>
            </div>)
            : <div></div>
        }
      </div>
    )
  }
}

export default connect(['topStats', 'notification', 'authenticatedUser'], actions)(withAlert(Home))
