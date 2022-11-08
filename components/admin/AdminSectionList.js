import React from 'react'
import Link from '../Link'

/**
 * Displays a list of actions that an administrator can do
 * organized into cards. Each card is a "section"
 */
export default function AdminSectionList (props) {
  return (
    <ul className='widget-container admin-widget'>
      <li className='widget'>
        <h3 className='header--medium'>
          Badges
        </h3>
        <ul>
          <li>
            <Link href='/admin/badges'>
              <a className='link--normal'>See all badges</a>
            </Link>
          </li>
          <li>
            <Link href='/admin/badges/add'>
              <a className='link--normal'>Create new badge</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className='widget'>
        <h3 className='header--medium'>
          Users
        </h3>
        <ul>
          <li>
            <Link href='/admin/users'>
              <a className='link--normal'>See all users</a>
            </Link>
          </li>
          <li>
            <Link href='/admin/users-exclusion'>
              <a className='link--normal'>Modify list of excluded users</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className='widget'>
        <h3 className='header--medium'>
          Timeseries
        </h3>
        <ul>
          <li>
            <Link href='/timeseries'>
              <a className='link--normal'>Run Timeseries Analysis</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className='widget'>
        <h3 className='header--medium'>
          Tasking Managers
        </h3>
        <ul>
          <li>
            <Link href='/admin/tasking-managers'>
              <a className='link--normal'>See all tasking managers</a>
            </Link>
          </li>
          <li>
            <Link href='/admin/tasking-managers/add'>
              <a className='link--normal'>Add new tasking manager</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className='widget'>
        <h3 className='header--medium'>
          Settings
        </h3>
        <ul>
          <li>
            <Link href='/admin/settings'>
              <a className='link--normal'>Edit App Settings</a>
            </Link>
          </li>
          <li>
            <Link href='/admin/map-settings'>
              <a className='link--normal'>Edit Map Settings</a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  )
}
