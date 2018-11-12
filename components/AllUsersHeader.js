import React from 'react'
import { formatDecimal } from '../lib/utils/format'

export default ({ countries, users, edits }) => (
  <header className='header--internal--green header--page'>
    <div className='row'>
      <div className='section-sub--left section-width-forty'>
        <h1 className='header--xlarge'>Users</h1>
      </div>
      <ul className='section-sub--right section-width-sixty'>
        <li className='list--inline'>
          <span className='descriptor-chart'>Rep. Countries</span>
          <span className='num--large'>{(countries && countries.length) || 0}</span>
        </li>
        <li className='list--inline'>
          <span className='descriptor-chart'>Total Users</span>
          <span className='num--large'>{formatDecimal(users)}</span>
        </li>
        <li className='list--inline'>
          <span className='descriptor-chart'>Total Edits</span>
          <span className='num--large'>{formatDecimal(edits)}</span>
        </li>
      </ul>
    </div>
  </header>
)
