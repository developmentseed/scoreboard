import React from 'react';
import BadgeCompleted from '../components/BadgeCompleted';

function mapBadgeToDescrip(badge) {
  var map = {
    'On The Road Again': 'Transportation matters. Put communities on the map by creating new roads. Each new level achieved by creating new roads.',
    'Long and Winding Road': 'Roads need maintainence. Existing roads are replaced by new roads and they need to be updated. Each new level achieved by editing existing roads.',
    'The Wright Stuff': 'Frank Lloyd Wright knew buildings, and so do you. Each new level is achieved by mapping and editing buildings.',
    'Consistency': 'Great mappers map everyday. Edit for a consecutive numbers of days in a month to achieve new levels.',
    'Field Mapper': 'Mapping also happens in the field. Uploading GPS traces enables improved accuracy when tracing satellite imagery. Each new level is achieved by uploading new GPS traces to OpenStreetMap.',
    'Awesome JOSM': 'JOSM is a tool used to edit OpenStreetMap. It is particularly useful for mapping larger areas more quickly and contains many additional, advanced tools. Map using JOSM to achieve this badge.',
    'Mapathoner': 'Mapathons are entry points to mapping. They also provide structure to train and become a better mapper. Each new level is achieved by attending and participating in mapathons.',
    'On Point': 'Places of interest guide where you can go. Every community needs hospitals, schools, businesses mapped to enable access. Each new level is achieved by creating new places on the map.',
    'White Water Rafting': 'Waterways, rivers, streams and more. Adding water features to the map adds regional context and valuable information in the event of flooding. Add these features to reach new levels of this badge.',
    'World Renown': 'You are famous around the globe. The more you edit in new countries, the more you can become world renown. Each new level is achieved by mapping in new countries around the world.',
    'Year-long Mapper': 'Map early, map often. Map as many days as you can to achieve new levels.',
    'Task Champion': 'Champions finish their work. Every task in the Tasking Manager needs to be finshed. Each new level is achieved by completing additional Tasking Manager squares.',
    'Scrutinizer': 'QA creates great products. Every square in the Tasking Manager needs to be validated. Each new level is achieved by validating new squares in the Tasking Manager.',
    'High Standards': 'Some maps need a bit more work to shine. Good QA demands an eye for detail and an uncompromising expectation of quality. Each new level is achieved by invalidating squares in the Tasking Manager.'
  };
  return map[badge];
}

export default ({ badges }) => {
  if (badges && badges.all) {
    let list = [];
    const {earnedBadges} = badges;

    if (earnedBadges && Object.keys(earnedBadges).length > 0) {
      const keyList = Object.keys(earnedBadges);
      // get a random item from the list
      const index = Math.floor(Math.random() * (keyList.length - 1));
      let badge = earnedBadges[keyList[index]];
      if (badge) {
        list.push(
          <li key={`${badge.name}-earned`}>
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
      }
    }

    return (
      <div>
        <ul className="Mini-Badge-Roll">
        {list}
        </ul>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
