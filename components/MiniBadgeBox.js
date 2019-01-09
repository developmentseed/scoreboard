import React from 'react'
import BadgeCompleted from '../components/BadgeCompleted'

export default ({ badges }) => {
  if (badges && badges.all) {
    let list = []
    const { earnedBadges } = badges

    if (earnedBadges && Object.keys(earnedBadges).length > 0) {
      const keyList = Object.keys(earnedBadges)
      // get a random item from the list
      const index = Math.floor(Math.random() * (keyList.length - 1))
      let badge = earnedBadges[keyList[index]]
      if (badge) {
        list.push(
          <li key={`${badge.name}-earned`}>
            <div className='badge-home'>
              <BadgeCompleted badge={badge} />
              <div className='badge-Details widget'>
                <h5 className='header--small sub-head header--with-description'>{badge.name}</h5>
                <p className='badge-Description'>
                  {badge.description}
                </p>
              </div>
            </div>
          </li>
        )
      }
    }

    return (
      <div>
        <ul className='Mini-Badge-Roll'>
          {list}
        </ul>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}
