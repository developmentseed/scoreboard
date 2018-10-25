import React from 'react';

export default ({ message }) => {
  return (
    <div>
      <section>
        <div className="row">
          <h2 className="header--large">You are not logged in!</h2>
          <p><a href="http://localhost:5000/auth/openstreetmap">{message || 'Log in with your OSM account'}</a></p>
        </div>
      </section>
    </div>
  )
}
