import React from 'react'
import Link from '../Link'
import trimLength from '../../lib/utils/trim_length'
import dynamic from 'next/dynamic'
import { LoadingSkeleton, LoadingSkeletonGroup } from '../LoadingSkeleton'

const CampaignMap = dynamic(() => import('../charts/LeafletCampaignMap'), {
  ssr: false
})

export default ({ campaign }) => {

  if (!campaign) {
    return (// empty state
      <div className='card--wrapper'>
        <div className='card'>
          <LoadingSkeleton type='card' width={3 / 3} style={{ marginBottom: '1rem' }} />
          <div className='card-content'>
            <LoadingSkeletonGroup>
              <LoadingSkeleton type='heading' width={2 / 3} size='medium' style={{ marginBottom: '2rem' }} />
              <LoadingSkeleton width={4 / 4} />
              <LoadingSkeleton width={4 / 4} />
              <LoadingSkeleton width={3 / 4} style={{ marginBottom: '2rem' }} />
              <LoadingSkeleton width={1 / 3} />
            </LoadingSkeletonGroup>
          </div>
        </div>
      </div>
  )
  }

  const {
    tm_id,
    name,
    description,
    geometry,
    done,
    validated,
    tasker_id,
    tm_name,
    team_priority
  } = campaign

  return (
    <Link href={`/campaign?id=${tasker_id}-${tm_id}`} as={`/campaigns/${tasker_id}-${tm_id}`}>
      <a className='card--wrapper'>
        <div className='card'>
          <div className='map-campaign-sm'><CampaignMap feature={JSON.parse(geometry)} interactive={false} /></div>
          <div className='card-content'>
            <h4 className='header--small header--with-description'>{trimLength(name, 70)}</h4>
            <span className='description--project'>Project #{tm_id} - {tm_name} { team_priority ? `- Priority ${parseInt(team_priority, 10)}` : ''}</span>
            <p>{trimLength(description, 190)}</p>
            <ul className='card-stats'>
              <li className='list--inline'>
                <span className='num--large'>{parseInt(Math.min(100, done), 10)}%</span>
                <span className='descriptor-chart'>Complete</span>
              </li>
              <li className='list--inline'>
                <span className='num--large'>{parseInt(Math.min(100, validated), 10)}%</span>
                <span className='descriptor-chart'>Validated</span>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </Link>
  )
}
