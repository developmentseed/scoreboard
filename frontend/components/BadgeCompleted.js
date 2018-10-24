import React, { Component } from 'react';
import '../styles/Badges.css';

export default class BadgeCompleted extends Component {
  render () {
    let badgeUrl = require('../assets/badges/blank-graphic.svg');
    let borderUrl = require('../assets/badges/blank-border.svg');

    var {category, badgeLevel} = this.props.badge;

    if (category && badgeLevel) {
      badgeUrl = require(`../assets/badges/${category}-${badgeLevel}-graphic.svg`);
      borderUrl = require(`../assets/badges/border${badgeLevel}.svg`);
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
