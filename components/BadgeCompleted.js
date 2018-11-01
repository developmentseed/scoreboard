import React, { Component } from 'react';
import '../styles/Badges.scss';

export default class BadgeCompleted extends Component {
  render () {
    let badgeUrl = require('../static/badges/blank-graphic.svg');
    let borderUrl = require('../static/badges/blank-border.svg');

    var {category, badgeLevel} = this.props.badge;

    if (category && badgeLevel) {
      badgeUrl = require(`../static/badges/${category}-${badgeLevel}-graphic.svg`);
      borderUrl = require(`../static/badges/border${badgeLevel}.svg`);
    }

    return (
      <div>
        <div
          className='Badge-Completed'
          style={{backgroundImage: `url(${badgeUrl})`}}>
        </div>
        <div
          className='Badge-Border'
          style={{backgroundImage: `url(${borderUrl})`}}>
        </div>
      </div>
    );
  }
};
