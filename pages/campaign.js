import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'unistore/react'
import { merge } from 'ramda'

import { distanceInWordsToNow } from 'date-fns'
import Router from '../lib/router'

import { actions } from '../lib/store'
import CampaignTable from '../components/campaign/CampaignTable'
import ReactMarkdown from 'react-markdown'
import { formatDecimal, formatUpdateDescription } from '../lib/utils/format'
import sumEdits from '../lib/utils/sum_edits'
import ScoreboardPanel from '../components/ScoreboardPanel'
import Blurb from '../components/campaign/CampaignBlurb'

const CampaignMap = dynamic(() => import('../components/charts/LeafletCampaignMap'), {
  ssr: false
})

export class Campaign extends Component {
  componentDidMount () {
    this.props.getCampaign(this.props.id)
  }

  addFavoriteCampaign () {
    const { authenticatedUser } = this.props
    const { account } = authenticatedUser
    if (!account) {
      Router.push('/auth/openstreetmap')
      return
    }
    const campaignId = this.props.campaign.meta.id

    this.props.addFavoriteCampign({
      user_id: account.uid,
      campaign_id: campaignId
    })
  }

  getFavoriteByCampaignId (id) {
    const { authenticatedUser } = this.props
    const { favorites } = authenticatedUser.account

    return favorites.find((item) => {
      return item.campaign_id === id
    })
  }

  removeFavoriteCampaign () {
    const campaignId = this.props.campaign.meta.id
    const { id } = this.getFavoriteByCampaignId(campaignId)
    this.props.removeFavoriteCampaign(id)
  }

  renderFavoriteButton () {
    const { authenticatedUser, campaign } = this.props
    const campaignId = campaign.meta.id

    if (!authenticatedUser || !authenticatedUser.loggedIn) {
      return (<button className='button' onClick={() => this.addFavoriteCampaign()}>Log in to favorite</button>)
    }

    const alreadyFavorited = !!this.getFavoriteByCampaignId(campaignId)

    if (alreadyFavorited) {
      return (<button className='button' onClick={() => this.removeFavoriteCampaign()}>Remove favorite</button>)
    }

    return (<button className='button' onClick={() => this.addFavoriteCampaign()}>Add favorite</button>)
  }

  render () {
    const { meta, lastUpdate, creationDate, refreshDate } = this.props.campaign

    const stats = merge({
      users: [],
      km_roads_add: 0,
      buildings_add: 0,
      poi_add: 0,
      km_waterways_add: 0,
      km_coastlines_add: 0,
      km_coastlines_mod: 0
    }, this.props.campaign.stats)

    return (
      <div className='Campaigns'>
        <header className='header--internal--green header--page'>
          <div className='row widget-container'>
            <div className='widget-66' style={{ 'pointerEvents': 'none' }}>
              <h1 className='header--xlarge margin-top-sm'>{meta.name}</h1>
              <ul className='list--two-column'>
                <li>
                  <span className='list-label'>Tasking Manager:</span>
                  <span>{meta.tm_name}</span>
                </li>
                <li>
                  <span className='list-label'>Project Number:</span>
                  <span>#{meta.tm_id}</span>
                </li>
                <li>
                  <span className='list-label'>Last Update:</span>
                  <span>{distanceInWordsToNow(lastUpdate)} ago</span>
                </li>
                <li>
                  <span className='list-label'>Created:</span>
                  <span>{distanceInWordsToNow(creationDate)} ago</span>
                </li>
                <li className='list--inline refresh'>
                  <span className='list-label'>Last refreshed: </span>
                  <span>{formatUpdateDescription(refreshDate)}</span>
                </li>
              </ul>
            </div>
            <div className='widget-33'>
              {this.renderFavoriteButton()}
              <a className='button' href={meta.url}>Contribute</a>
            </div>
          </div>
        </header>
        <ScoreboardPanel title='' facets={
          [
            { label: 'Complete', value: `${parseInt(meta.done, 10)}%` },
            { label: 'Validated', value: `${parseInt(meta.validated, 10)}%` },
            { label: 'Participants', value: stats.users.length },
            { label: 'Total features mapped', value: formatDecimal(sumEdits(stats)) }
          ]
        } />

        <section>
          <div className='row widget-container'>
            <div className='widget-50'>
              <div className='text-body'><ReactMarkdown source={meta.description} /></div>
            </div>
            <div className='widget-50'>
              <div className='map-lg'>
                <CampaignMap feature={JSON.parse(meta.geometry)} interactive />
              </div>
            </div>
          </div>
        </section>
        <section className='section--tertiary'>
          <div className='row'>
            <Blurb {...stats} />
            <CampaignTable users={stats.users} />
          </div>
        </section>
      </div>
    )
  }
}

const Page = connect(['authenticatedUser', 'campaign'], actions)(Campaign)

Page.getInitialProps = async ({ req }) => {
  const { id } = req.params
  return {
    id
  }
}

export default Page
