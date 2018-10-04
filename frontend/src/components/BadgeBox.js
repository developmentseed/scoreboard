import React from 'react';
import BadgeInProgress from '../components/BadgeInProgress';
import BadgeCompleted from '../components/BadgeCompleted';
import { reject, isNil } from 'ramda';

function mapBadgeToTask(badge, x) {
  var map = {
    'roadKms': (x) => `Add ${x} more km of roads.`,
    'roadKmMods': (x) => `Modify ${x} more km of roads.`,
    'buildings': (x) => `Build ${x} more buildings.`,
    'daysInRow': (x) => `Map ${x} more consecutive days.`,
    'josm': (x) => `Use JOSM to map an area ${x} more times.`,
    'hashtags': (x) => `Participate in ${x} more mapathons.`,
    'pois': (x) => `Add ${x} more nodes.`,
    'waterways': (x) => `Add ${x} more km of waterways.`,
    'countries': (x) => `Map in ${x} more different countries.`,
    'daysTotal': (x) => `Map ${x} more days in total.`
  };
  return map[badge](x);
}

// Strips whitespace
function stripWS(text) {
  return text.replace(/ /g, '');
}

export default ({ badges }) => {
  if (badges && badges.all) {
    var progressBadges = Object.keys(badges.all).map(val => {
      var badge = badges.all[val];
      if (badge) {
        return {
          description: badge.description,
          progress: Math.floor(badge.points.percentage) + '% of the way to Level ' + badge.nextBadgeLevel + '. ' +
            mapBadgeToTask(badge.metric, Math.floor(badge.points.nextPoints - badge.points.currentPoints)),
          name: badge.name,
          category: badge.category,
          badgeLevel: badge.badgeLevel,
          points: badge.points
        };
      } else {
        return null;
      }
    });

    // Strip out nulls
    progressBadges = reject(isNil)(progressBadges);
    const earnedBadges = progressBadges.filter(({ badgeLevel }) => badgeLevel > 0);

    var earnedList = earnedBadges.map(badge => {
      return (
        <li key={stripWS(badge.name)}>
          <div className="badge-home">
            <BadgeCompleted badge={badge} />
            <div className="badge-Details">
              <h5 className="header--small sub-head header--with-description">{badge.name}</h5>
              <p className="badge-Description">
                {badge.description}
              </p>
            </div>
          </div>
        </li>
      );
    })

    var progressList = progressBadges.map(badge => {
      return (
        <li className="clearfix" key={stripWS(badge.name)}>
          <div className="badge-home">
            <BadgeInProgress badge={badge} badgeClass={'progress'} />
            <div className="badge-Details">
              <h5 className="header--small sub-head header--with-description">{badge.name}</h5>
              <p className="badge-Description">{badge.progress}</p>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div>
        <section className="section-sub clearfix">
          <div className="Badge-Box-Content">
            <div className="badgeroll-frame">
              <div className="badgeroll-center">
                <h3 className="Card-title">
                  EARNED BADGES
                </h3>
                <div className="badgeroll-center-push">
                  <ul className="Badge-Roll">
                    {earnedList}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Badge-Container-progress section-sub">
          <div className="Badge-Box-Content">
            <div className="badgeroll-frame">
              <div className="badgeroll-center">
                <h3 className="Card-title">
                  BADGE PROGRESS
                </h3>
                <div className="badgeroll-center-push">
                  <ul className="Badge-Roll">
                    {progressList}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );

  } else {
    return <div>Loading...</div>;
  }
}
