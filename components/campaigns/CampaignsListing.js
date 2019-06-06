import React from 'react'
import CampaignCard from './CampaignCard'
import { range } from 'ramda'

export default ({ records, apiStatus, total, allCount }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (
        <div>
          <h3 className='header--medium'>{(parseInt(total) < parseInt(allCount)) ? `${total} campaigns out of ${allCount}` : `${total} campaigns`}</h3>
          <div className='clearfix cards-container widget-container'>
            {records.map((record, idx) => <CampaignCard key={`campaign-${idx}`} campaign={record} />)}
          </div>

        </div>
      )
      break
    case 'LOADING':
      content = (
        <div>
          <h3 className='header--medium'>Loading...</h3>
          <div className='clearfix cards-container widget-container'>
            {range(0, 4).map(idx => <CampaignCard key={`campaign-${idx}`} />)}
          </div>
        </div>
      )
      break

    case 'ERROR':
      content = <div>Error loading records</div>
      break
    default:
      content = <div />
  }
  return content
}
