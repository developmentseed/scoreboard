import React from 'react'
import Link from './Link'

export default ({ message }) => {
  const editorName = process.env.EDITOR_NAME || 'OSM'
  return (
    <div>
      <section>
        <div className='row'>
          <h2 className='header--large'>You are not logged in!</h2>
          <p>
            <Link href='/auth/openstreetmap'>
              <a className='link--large'>{message || `Log in with your ${editorName} account`}</a>
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
