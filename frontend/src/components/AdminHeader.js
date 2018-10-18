import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <header className="header--internal--green header--page header--admin">
      <div className="row">
        <div className="section-sub--left section-width-forty">
          <h1 className="header--xlarge">
            <Link to="/admin">Admin</Link>
          </h1>
        </div>
      </div>
    </header>
  );
}
