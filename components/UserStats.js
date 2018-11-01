import React from 'react';
import {CalendarHeatmap, UserExtentMap} from './charts';
import {Route, Link} from 'react-router-dom';
import BadgeBox from './BadgeBox';

const badgeBox = (badges) => (
  <div className="row">
    <h2 className="header--large">Badges</h2>
    <BadgeBox badges={badges} />
  </div>
);

const editBox = (records) => (
  <div className="row">
    <div className="section-sub--tertiary">
      <h4 className="header--small header--with-description-lg">Edits Over Time</h4>
      <div style={{width: "100%", height: "500px"}} >
          {
            (records && records.edit_times)
              ? <CalendarHeatmap times={records.edit_times} />
              : <div>Edit time chart unavailable</div>
          }
      </div>
    </div>
    <div>
      <h4 className="header--small header--with-description-lg">Extent of Edits</h4>
      <div style={{ position: "relative", height: "350px" }}>
        {(records && records.extent_uri)
        ? <UserExtentMap extent={records.extent_uri} uid={records.uid} />
        : <div>Extent map unavailable</div>
        }
      </div>
    </div>
  </div>
);

const withActiveNav = (match) => (active, component) => {
  const isActive = (prop) => (prop === active)? "active" : "";
  return (
    <div>
      <div className="row">
        <ul className="nav-tab">
          <li className={`list--inline ${isActive("edits")}`}><Link to={`${match.url}/edits`}>Edits</Link></li>
          <li className={`list--inline ${isActive("badges")}`}><Link to={`${match.url}/badges`}>Badges</Link></li>
        </ul>
      </div>
    {component}
    </div>
  );
}

// TODO: replace react-router routes with query params
export default ({ match, records, badges }) => (
  <section className="section--tertiary">
    <Route exact path={`${match.url}`} component={() => withActiveNav(match)("edits", editBox(records))} />
    <Route path={`${match.url}/edits`} component={() => withActiveNav(match)("edits", editBox(records))} />
    <Route path={`${match.url}/badges`} component={() => withActiveNav(match)("badges", badgeBox(badges))} />
  </section>
);
