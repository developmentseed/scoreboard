import React from 'react'
import Link from './Link'

export default ({ message, callToAction, callToActionUrl }) => {
  return (
    <div>
      <h1>Get started with Scoreboard</h1>
      <ul>
        <li>
          <span>1</span>
          <span>Add Campaigns to Your Favorites</span>
        </li>
        <li>
          <span>2</span>
          <span>Join Teams</span>
        </li>
        <li>
          <span>2</span>
          <span>Explore & Edit</span>
        </li>
      </ul>
    </div>
  )
}
