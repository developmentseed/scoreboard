import React from 'react'
import Link from 'next/link'
const domain = process.env.APP_URL || 'http://localhost:8181'

export default ({ message }) => {
  return (
    <div>
      <section>
        <div className='row'>
          <h2 className='header--large'>You are not logged in!</h2>
          <p>
            <Link href={`${domain}/auth/openstreetmap`}>
              <a>{message || 'Log in with your OSM account'}</a>
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
