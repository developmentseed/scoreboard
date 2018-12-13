import React, { Component } from 'react'
import join from 'url-join'
import { APP_URL_PREFIX } from '../api/src/config'

export default class BadgeCompleted extends Component {
  render () {
    let badgeUrl = join(APP_URL_PREFIX, '/static/badges/blank-graphic.svg')
    let borderUrl = join(APP_URL_PREFIX, '/static/badges/blank-border.svg')

    var { badgeImage } = this.props.badge

    if (badgeImage) {
      badgeUrl = join(APP_URL_PREFIX, `/static/badges/${badgeImage}`)
      borderUrl = join(APP_URL_PREFIX, `/static/badges/border0.svg`)
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
