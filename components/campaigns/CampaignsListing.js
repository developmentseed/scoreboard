import React from 'react'
import CampaignCard from './CampaignCard'

export default ({ records, apiStatus, total, allCount }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (
        <div>
          <h3 className='header--medium'>{(parseInt(total) < parseInt(allCount)) ? `${total} campaigns out of ${allCount}` : `${total} campaigns`}</h3>
          <div className='clearfix cards-container widget-container'>
            {records.map(record => <CampaignCard key={record.id} campaign={record} />)}
          </div>

        </div>
      )
      break
    case 'LOADING':
      content = <div>Loading...</div>
      break

    case 'ERROR':
      content = <div>Error loading records</div>
      break
    default:
      content = <div />
  }
  return content
}
