import React from 'react'
import CampaignCard from './CampaignCard'
import { LoadingSkeleton, LoadingSkeletonGroup } from '../LoadingSkeleton'

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
      content =
        <div className='clearfix cards-container widget-container'>
          <LoadingSkeletonGroup>
            <LoadingSkeleton width={1 / 6} />
            <LoadingSkeleton type='heading' width={1 / 3} size='large' style={{ marginBottom: '2rem' }} />
            <LoadingSkeleton width={2 / 4} />
            <LoadingSkeleton width={2 / 4} />
            <LoadingSkeleton width={2 / 4} />
          </LoadingSkeletonGroup>
          <LoadingSkeletonGroup>
            <LoadingSkeleton width={1 / 6} />
            <LoadingSkeleton type='heading' width={1 / 3} size='large' style={{ marginBottom: '2rem' }} />
            <LoadingSkeleton width={2 / 4} />
            <LoadingSkeleton width={2 / 4} />
            <LoadingSkeleton width={2 / 4} />
          </LoadingSkeletonGroup>
        </div>
      break

    case 'ERROR':
      content = <div>Error loading records</div>
      break
    default:
      content = <div />
  }
  return content
}
