import React, { Component } from 'react'
import Link from '../components/Link'
import dynamic from 'next/dynamic'
import { connect } from 'unistore/react'
import { distanceInWordsToNow } from 'date-fns'
import Router from 'next/router'

import api from '../lib/utils/api'
import { actions } from '../lib/store'
import UserTable from '../components/UserTable'
import ReactMarkdown from 'react-markdown'
import { formatDecimal } from '../lib/utils/format'
import sumEdits from '../lib/utils/sum_edits'

const CampaignMap = dynamic(() => import('../components/charts/CampaignMap'), {
  ssr: false
})

const Blurb = ({
  users,
  km_roads_add,
  buildings_add,
  poi_add,
  km_waterways_add
}) => {
  return <h2 className='header--medium list--block'>
    {`${users.length} users, mapping
    ${km_roads_add.toFixed(1)} km of roads,
    ${formatDecimal(buildings_add)} buildings,
    ${formatDecimal(poi_add)} Points of Interest, and
    ${km_waterways_add.toFixed(1)} km of waterways.`}
  </h2>
}

export class Campaign extends Component {
  render () {
    const { records } = this.props

    if (!records || !records.tmData) {
      return <div />
    }

    return (
      <div className='Campaigns'>
        <header className='header--internal--green header--page'>
          <div className='row'>
            <div className='section-sub--left'>
              <h1 className='header--xlarge margin-top-sm'>{records.tmData.name}</h1>
              <ul className='list--two-column clearfix'>
                <li>
                  <span className='list-label'>Project Number:</span>
                  <span>#{records.tmData.tm_id}</span>
                </li>
                <li>
                  <span className='list-label'>Last Update:</span>
                  <span>{distanceInWordsToNow(records.tmData.updated_at)} ago.</span>
                </li>
              </ul>
            </div>
            <div className='section-sub--right'>
              <Link href='/about'>
                <a className='button'>Contribute</a>
              </Link>
            </div>
          </div>
        </header>
        <section>
          <div className='row'>
            <div className='section-sub--left section-width-fifty-plus'>
              <div className='text-body'><ReactMarkdown source={records.tmData.description} /></div>
            </div>
            <div className='section-sub--right section-width-fifty-minus'>
              <div className='map-campaign-lg'>
                <div className='campagin-body-header'>
                  <ul className='list--horizontal'>
                    <li className='list--inline'>
                      <span className='descriptor-chart'>Complete</span>
                      <span className='num--large'>{parseInt(records.tmData.done * 0.5, 10) + parseInt(records.tmData.validated, 10)}%</span>
                    </li>
                    <li className='list--inline'>
                      <span className='descriptor-chart'>Participants</span>
                      <span className='num--large'>{records.users.length}</span>
                    </li>
                    <li className='list--inline'>
                      <span className='descriptor-chart'>Total Features Mapped</span>
                      <span className='num--large'>
                        {formatDecimal(sumEdits(records))}
                      </span>
                    </li>
                  </ul>
                </div>
                <CampaignMap feature={JSON.parse(records.tmData.geometry)} interactive />
              </div>
            </div>
          </div>
        </section>
        <section className='section--tertiary'>
          <div className='row'>
            <Blurb {...records} />
            <UserTable users={records.users} />
          </div>
        </section>
      </div>
    )
  }
}

const Page = connect(['authenticatedUser'], actions)(Campaign)

Page.getInitialProps = async ({ server, req, res }) => {
  const { id } = req.params

  function redirect () {
    if (typeof window === 'undefined') {
      return res.redirect('/404')
    } else {
      return Router.push('/404')
    }
  }

  try {
    const { data } = await api('get', `/api/campaigns/${decodeURIComponent(id)}`)

    if (!data.records || !data.records.tmData) {
      return redirect()
    }

    return data
  } catch (e) {
    redirect()
  }
}

export default Page
