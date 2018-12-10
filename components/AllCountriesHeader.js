import React from 'react'
import { formatDecimal } from '../lib/utils/format'

export default ({ countries, edits }) => (
  <header className='header--internal--green header--page'>
    <div className='row'>
      <div className='section-sub--left section-width-forty'>
        <h1 className='header--xlarge'>Countries</h1>
      </div>
      <ul className='section-sub--right section-width-sixty'>
        <li className='list--inline'>
          <span className='descriptor-chart'>Total Countries</span>
          <span className='num--large'>{formatDecimal(countries)}</span>
        </li>
        <li className='list--inline'>
          <span className='descriptor-chart'>Total Edits</span>
          <span className='num--large'>{formatDecimal(edits)}</span>
        </li>
      </ul>
    </div>
  </header>
)
