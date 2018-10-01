import React from 'react';
import BadgeInProgress from '../components/BadgeInProgress';
import BadgeCompleted from '../components/BadgeCompleted';
import { reject, isNil } from 'ramda';

function mapBadgeToDescrip(badge) {
  var map = {
    'On The Road Again': 'Transportation matters. Put communities on the map by creating new roads. Each new level achieved by creating new roads.',
    'Long and Winding Road': 'Roads need maintainence. Existing roads are replaced by new roads and they need to be updated. Each new level achieved by editing existing roads.',
    'The Wright Stuff': 'Frank Lloyd Wright knew buildings, and so do you. Each new level is achieved by mapping and editing buildings.',
    'Consistency': 'Great mappers map everyday. Edit for a consecutive numbers of days in a month to achieve new levels.',
    'Awesome JOSM': 'JOSM is a tool used to edit OpenStreetMap. It is particularly useful for mapping larger areas more quickly and contains many additional, advanced tools. Map using JOSM to achieve this badge.',
    'Mapathoner': 'Mapathons are entry points to mapping. They also provide structure to train and become a better mapper. Each new level is achieved by attending and participating in mapathons.',
    'On Point': 'Places of interest guide where you can go. Every community needs hospitals, schools, businesses mapped to enable access. Each new level is achieved by creating new places on the map.',
    'White Water Rafting': 'Waterways, rivers, streams and more. Adding water features to the map adds regional context and valuable information in the event of flooding. Add these features to reach new levels of this badge.',
    'World Renown': 'You are famous around the globe. The more you edit in new countries, the more you can become world renown. Each new level is achieved by mapping in new countries around the world.',
    'Year-long Mapper': 'Map early, map often. Map as many days as you can to achieve new levels.'
  };
  return map[badge];
}

function mapBadgeToTask(badge, x) {
  var map = {
    'On The Road Again': (x) => `Add ${x} more km of roads.`,
    'Long and Winding Road': (x) => `Modify ${x} more km of roads.`,
    'The Wright Stuff': (x) => `Build ${x} more buildings.`,
    'Consistency': (x) => `Map ${x} more consecutive days.`,
    'Awesome JOSM': (x) => `Use JOSM to map an area ${x} more times.`,
    'Mapathoner': (x) => `Participate in ${x} more mapathons.`,
    'On Point': (x) => `Add ${x} more nodes.`,
    'White Water Rafting': (x) => `Add ${x} more km of waterways.`,
    'World Renown': (x) => `Map in ${x} more different countries.`,
    'Year-long Mapper': (x) => `Map ${x} more days in total.`
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
          description: mapBadgeToDescrip(badge.name),
          progress: Math.floor(badge.points.percentage) + '% of the way to Level ' + badge.nextBadgeLevel + '. ' +
            mapBadgeToTask(badge.name, Math.floor(badge.points.nextPoints - badge.points.currentPoints)),
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
                {mapBadgeToDescrip(badge.name)}
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
