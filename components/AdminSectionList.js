import React from 'react'
import Link from './Link'

export default () => {
  return (
    <ul className='list-grid'>
      <li>
        <h3 className='header--medium'>
          Badges
        </h3>
        <ul>
          <li>
            <Link href='/admin/badges'>
              <a className='link--normal'>Badge list</a>
            </Link>
          </li>
          <li>
            <Link href='/admin/badges/add'>
              <a className='link--normal'>Create new badge</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <h3 className='header--medium'>
          Teams
        </h3>
        <ul>
          <li>
            <Link href='/admin/teams'>
              <a className='link--normal'>Team list</a>
            </Link>
          </li>
          <li>
            <Link href='/admin/teams/add'>
              <a className='link--normal'>Create new team</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <h3 className='header--medium'>
          Users
        </h3>
        <ul>
          <li>
            <Link href='/admin/users'>
              <a className='link--normal'>User list</a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  )
}
