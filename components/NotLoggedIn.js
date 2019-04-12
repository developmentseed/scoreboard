import React from 'react'
import Link from './Link'

export default ({ message }) => {
  const tmName = process.env.TM_NAME || 'OSM'
  return (
    <div>
      <section>
        <div className='row'>
          <h2 className='header--large'>You are not logged in!</h2>
          <p>
            <Link href='/auth/openstreetmap'>
              <a className='link--large'>{message || `Log in with your ${tmName} account`}</a>
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
