import React from 'react'
import { formatDecimal } from '../lib/utils/format'

/**
 * Given the edit times for a user return the difference between now()
 * and the last edit of that user in words (e.g 3 days ago.);
 *
 * @param {Array[Date]} edit_times
 */

export default ({ name, num_participants, num_edits }) =>
  <header className='header--internal--green header--page'>
    <div className='row'>
      <div className='section-sub--left section-width-fifty-plus'>
        <h1 className='header--xlarge header--with-description-lg'>{name}</h1>
      </div>
      <div className='section-sub--right section-width-fifty-minus stats-user'>
        <ul>
          <li className='list--inline'>
            <span className='descriptor-chart'>Participants</span>
            <span className='num--large'>{num_participants}</span>
          </li>
          <li className='list--inline'>
            <span className='descriptor-chart'>Edits</span>
            <span className='num--large'>{formatDecimal(num_edits)}</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
