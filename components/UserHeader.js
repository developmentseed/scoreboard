import React from 'react'
import { distanceInWordsToNow, parse, compareDesc } from 'date-fns'
import { formatDecimal } from '../lib/utils/format'
import { head } from 'ramda'
import countries, { getName } from 'i18n-iso-countries'
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))

/**
 * Given the edit times for a user return the difference between now()
 * and the last edit of that user in words (e.g 3 days ago.);
 *
 * @param {Array[Date]} edit_times
 */
function getLastEdit (edit_times) {
  if (edit_times.length === 0) {
    return `N/A`
  }

  const days = edit_times.map(time => parse(time.day))
  const lastEdit = head(days.sort(compareDesc))
  return `${distanceInWordsToNow(lastEdit)} ago`
}

export default ({ name, edit_times, num_badges, num_hashtags, num_edits, country }) =>
  <header className='header--internal--green header--page'>
    <div className='row'>
      <div className='section-sub--left section-width-fifty-plus'>
        <h1 className='header--xlarge header--with-description-lg'>{name}</h1>
        <ul className='list--two-column clearfix'>
          <li>
            <span className='list-label'>Last Edit:</span>
            <span>{getLastEdit(edit_times)}</span>
          </li>
          <li>
            <span className='list-label'>Country:</span>
            <span>{getName(country, 'en')}</span>
          </li>
        </ul>
      </div>
      <div className='section-sub--right section-width-fifty-minus stats-user'>
        <ul>
          <li className='list--inline'>
            <span className='descriptor-chart'>Campaigns</span>
            <span className='num--large'>{num_hashtags}</span>
          </li>
          <li className='list--inline'>
            <span className='descriptor-chart'>Badges</span>
            <span className='num--large'>{num_badges}</span>
          </li>
          <li className='list--inline'>
            <span className='descriptor-chart'>Edits</span>
            <span className='num--large'>{formatDecimal(num_edits)}</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
