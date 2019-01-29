import React from 'react'
import Link from '../Link'

/**
 * Renders above each admin page
 */
export default function AdminHeader () {
  return (
    <header className='header--internal--green header--page header--admin'>
      <div className='row'>
        <div className='section-sub--left section-width-forty'>
          <h1 className='header--xlarge'>
            <Link href='/admin'><a>Admin</a></Link>
          </h1>
        </div>
      </div>
    </header>
  )
}
