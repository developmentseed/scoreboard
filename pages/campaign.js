import React, { Component } from 'react'
import join from 'url-join'
import dynamic from 'next/dynamic'
import { connect } from 'unistore/react'
import { distanceInWordsToNow } from 'date-fns'

import { actions } from '../lib/store'
import UserTable from '../components/UserTable'
import ReactMarkdown from 'react-markdown'
import { formatDecimal } from '../lib/utils/format'
import sumEdits from '../lib/utils/sum_edits'
import { TM_URL } from '../api/src/config'
import ScoreboardPanel from '../components/ScoreboardPanel'

const CampaignMap = dynamic(() => import('../components/charts/CampaignMap'), {
  ssr: false
})

const Blurb = ({
  users,
  km_roads_add,
  buildings_add,
  poi_add,
  km_waterways_add,
  km_coastlines_add
}) => {
  return <h2 className='header--medium list--block'>
    {`${users.length} mappers, mapping
    ${km_roads_add.toFixed(1)} km of roads,
    ${formatDecimal(buildings_add)} buildings,
    ${formatDecimal(poi_add)} Points of Interest,
    ${km_coastlines_add.toFixed(1)} km of coastlines, and
    ${km_waterways_add.toFixed(1)} km of waterways.`}
  </h2>
}

export class Campaign extends Component {
  componentDidMount () {
    this.props.getCampaign(this.props.id)
  }

  addFavoriteCampaign () {
    const { authenticatedUser } = this.props
    const { account } = authenticatedUser
    const campaignId = this.props.campaign.records.tmData.id

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
    const campaignId = this.props.campaign.records.tmData.id
    const { id } = this.getFavoriteByCampaignId(campaignId)
    this.props.removeFavoriteCampaign(id)
  }

  renderFavoriteButton () {
    const { authenticatedUser, campaign } = this.props
    const campaignId = campaign.records.tmData.id

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
    if (!this.props.campaign) return <div />

    const { records } = this.props.campaign
    const { tmData, users } = records
    if (!tmData || !users) return <div />

    let contribute = (<div />)

    if (TM_URL && tmData.tm_id) {
      // this link only supports TM 2 and 3
      // TODO: add logic to support more tasking managers
      const tmLink = join(TM_URL, `project/${tmData.tm_id}`)
      contribute = (
        <a className='button' href={tmLink}>Contribute</a>
      )
    }

    return (
      <div className='Campaigns'>
        <header className='header--internal--green header--page'>
          <div className='row widget-container'>
            <div className='widget-66' style={{ 'pointer-events': 'none' }}>
              <h1 className='header--xlarge margin-top-sm'>{tmData.name}</h1>
              <ul className='list--two-column'>
                <li>
                  <span className='list-label'>Project Number:</span>
                  <span>#{tmData.tm_id}</span>
                </li>
                <li>
                  <span className='list-label'>Last Update:</span>
                  <span>{distanceInWordsToNow(tmData.updated_at)} ago.</span>
                </li>
              </ul>
            </div>
            <div className='widget-33'>
              {this.renderFavoriteButton()}
              {contribute}
            </div>
          </div>
        </header>
        <ScoreboardPanel title='' facets={
          [
            { label: 'Complete', value: `${parseInt(tmData.done, 10)}%` },
            { label: 'Validates', value: `${parseInt(tmData.validated, 10)}%` },
            { label: 'Participants', value: users.length },
            { label: 'Total features mapped', value: formatDecimal(sumEdits(records)) }
          ]
        } />

        <section>
          <div className='row widget-container'>
            <div className='widget-50'>
              <div className='text-body'><ReactMarkdown source={tmData.description} /></div>
            </div>
            <div className='widget-50'>
              <div className='map-lg'>
                <CampaignMap feature={JSON.parse(tmData.geometry)} interactive />
              </div>
            </div>
          </div>
        </section>
        <section className='section--tertiary'>
          <div className='row'>
            <Blurb {...records} />
            <UserTable users={users} />
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
