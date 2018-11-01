import React from 'react';
import Link from 'next/link';

export default ({ message }) => {
  return (
    <div>
      <section>
        <div className="row">
          <h2 className="header--large">You are not logged in!</h2>
          <p>
            <Link href="http://localhost:5000/auth/openstreetmap">
              <a>{message || 'Log in with your OSM account'}</a>
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
