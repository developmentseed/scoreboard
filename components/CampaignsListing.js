import React from 'react'
import CampaignCard from './CampaignCard'

export default ({ records, apiStatus, total }) => {
  let content = <div />
  switch (apiStatus) {
    case 'SUCCESS':
      content = (
        <div>
          <h3 className='header--medium'>{total} Campaigns</h3>
          <div className='clearfix'>
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
