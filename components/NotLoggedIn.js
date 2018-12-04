import React from 'react'
import join from 'url-join'
import Link from './Link'
import { APP_URL_FINAL } from '../api/src/config'

export default ({ message }) => {
  return (
    <div>
      <section>
        <div className='row'>
          <h2 className='header--large'>You are not logged in!</h2>
          <p>
            <Link href='/auth/openstreetmap'>
              <a>{message || 'Log in with your OSM account'}</a>
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
