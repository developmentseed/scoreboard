import React from 'react'
import Link from './Link'
import trimLength from '../lib/utils/trim_length'
import dynamic from 'next/dynamic'

const CampaignMap = dynamic(() => import('./charts/CampaignMap'), {
  ssr: false
})

export default ({ campaign }) => {
  const {
    tm_id,
    name,
    description,
    geometry,
    done,
    validated,
    tasker_id,
    team_priority
  } = campaign
  return (
    <Link href={`/campaigns/${tasker_id}-${tm_id}`}>
      <a className='card--wrapper'>
        <div className='card'>
          <div className='map-campaign-sm'><CampaignMap feature={JSON.parse(geometry)} interactive={false} /></div>
          <div className='card-content'>
            <h4 className='header--small header--with-description'>{trimLength(name, 70)}</h4>
            <span className='description--project'>Project #{tm_id} { team_priority ? `- Priority ${parseInt(team_priority, 10)}` : ''}</span>
            <p>{trimLength(description, 190)}</p>
            <ul className='card-stats'>
              <li className='list--inline'>
                <span className='num--large'>{parseInt(done * 0.5, 10) + parseInt(validated, 10)}%</span>
                <span className='descriptor-chart'>Complete</span>
              </li>
              <li className='list--inline'>
                <span className='num--large'>{parseInt(validated, 10)}%</span>
                <span className='descriptor-chart'>Validated</span>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </Link>
  )
}
