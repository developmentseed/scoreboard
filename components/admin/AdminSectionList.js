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
      <li className={props.teamsActive ? 'widget' : 'widget widget--disabled'}>
        <h3 className='header--medium'>
          Teams
        </h3>
        {
          (props.teamsActive)
            ? <ul>
              <li>
                <Link href='/admin/teams'>
                  <a className='link--normal'>See all teams</a>
                </Link>
              </li>
              <li>
                <Link href='/admin/teams/add'>
                  <a className='link--normal'>Create new team</a>
                </Link>
              </li>
            </ul>
            : <>
              <ul>
                <li>
                  <a className='link--normal disabled' disabled>See all teams</a>
                </li>
                <li>
                  <a className='link--normal disabled' disabled>Create new team</a>
                </li>
              </ul>
              <p>
                You need to connect with Teams to enable these features
              </p>
              <a href='/auth/teams' className='button button--info'>Connect your Teams</a>
            </>
        }
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
    </ul>
  )
}
