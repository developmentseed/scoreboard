import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { connect } from 'unistore/react'
import { withAlert } from 'react-alert'

import { actions } from '../lib/store'
import trimLength from '../lib/utils/trim_length'
import { formatDecimal } from '../lib/utils/format'
import TopEditorsChart from '../components/charts/TopEditorsChart'
import EditorsByCountry from '../components/charts/EditorsByCountryChart'

const Map = dynamic(() => import('../components/charts/HomeMap'), {
  ssr: false
})

export class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      records: null,
      campaign_total: 0
    }
  }

  componentDidMount () {
    this.props.getTopStats()
  }

  componentDidUpdate () {
    const { notification } = this.props

    if (notification) {
      this.props.alert[notification.type](notification.message)
      this.props.clearNotification()
    }
  }

  render () {
    const { topStats, project: projectName } = this.props
    if (!topStats) return <div />

    const { campaign_total, records, num_users, features, top_edits, edits_by_country } = topStats

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
                <div className='section-sub--right section-sub--right--home'>
                  <ul>
                    <li className='list--block'>
                      <Link href='/users'>
                        <a className='link--white'>
                          <span className='num--large'>{formatDecimal(num_users)}</span>
                          <span className='descriptor-chart'>Active Users</span>
                        </a>
                      </Link>
                    </li>
                    <li className='list--block'>
                      <Link href='/campaigns'>
                        <a className='link--white'>
                          <span className='num--large'>{formatDecimal(campaign_total)}</span>
                          <span className='descriptor-chart'>Campaigns</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className='section--tertiary'>
          <div className='row'>
            <div className='width--shortened'>
              <h2 className='header--large'>Top Campaigns</h2>
              <div style={{ width: '100%', height: '275px', 'marginBottom': '40px' }}>
                {features
                  ? <Map overlay={features} />
                  : <div>Loading map...</div>
                }
              </div>
              <ul className='clearfix'>
                {
                  records.map(record =>
                    <li key={`block-${record.campaign_hashtag}`} className='block--campaign'>
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
                            <span className='chart-bar' style={{ 'width': `${parseInt(record.done * 0.5, 10) + parseInt(record.validated, 10)}%` }} />
                            <span className='chart-bar--percent'>{parseInt(record.done * 0.5, 10) + parseInt(record.validated, 10)}%</span>
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
            <div className='width--shortened graphs--users'>
              <h2 className='header--large'>Users</h2>
              <div className='side-by-side section-width-twenty section-width--first'>
                <h3>Edits By Country</h3>
                <EditorsByCountry edits={edits_by_country} />
              </div>
              <div className='side-by-side section-width-eighty' style={{ height: '430px', marginBottom: '50px' }}>
                <h3>Top Editors</h3>
                {
                  top_edits ? <TopEditorsChart edits={top_edits} /> : <div>Loading...</div>
                }
              </div>
              <Link href='/users'>
                <a className='link--large'>View All Users</a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['topStats', 'notification'], actions)(withAlert(Home))
