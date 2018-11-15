import React, { Component } from 'react'
import '../styles/Badges.scss'

export default class BadgeCompleted extends Component {
  render () {
    let badgeUrl = '/static/badges/blank-graphic.svg'
    let borderUrl = '/static/badges/blank-border.svg'

    var { category, badgeLevel } = this.props.badge

    if (category && badgeLevel) {
      badgeUrl = `/static/badges/${category}-${badgeLevel}-graphic.svg`
      borderUrl = `/static/badges/border${badgeLevel}.svg`
    }

    return (
      <div>
        <div
          className='Badge-Completed'
          style={{ backgroundImage: `url(${badgeUrl})` }} />
        <div
          className='Badge-Border'
          style={{ backgroundImage: `url(${borderUrl})` }} />
      </div>
    )
  }
};
