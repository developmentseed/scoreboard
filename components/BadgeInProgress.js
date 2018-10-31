import React, { Component } from 'react';
import '../styles/Badges.scss';

function getProgressGradientBreaks(percentage) {
  // Calculates the linear-gradient breakpoint angles necessary to
  // represent progress percentage
  var breakA = 90;
  var breakB = 90;
  if (percentage < 50) {
    breakB = 90 + percentage * 3.6;
    return { A: breakA, B: breakB, dependantGrad: '#dbdbda' };
  }
  breakA = -90 + (percentage - 50) * 3.6;
  breakB = 270;
  return { A: breakA, B: breakB, dependantGrad: '#8BC544' };
}

export default class BadgeInProgress extends Component {
  constructor () {
    super();
    this.state = {
      hidden: true
    }
  }

  onMouseOver () {
    this.setState({'hidden': false});
  }

  onMouseOut () {
    this.setState({'hidden': true});
  }
  render() {
    const { badge, badgeClass } = this.props;

    if (!badge || !badgeClass) return <div></div>;
    const imgUrl = require(`../static/badges/${badge.category}-${badge.badgeLevel + 1}-graphic.svg`);
    const progressBreaks = getProgressGradientBreaks(badge.points.percentage);
    var progressStyle = `
    linear-gradient(${progressBreaks.A}deg,
      ${progressBreaks.dependantGrad} 50%,
      rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)),
      linear-gradient(${progressBreaks.B}deg,
        #8BC544 50%, #dbdbda 50%, #dbdbda)`;

    var popup = '';
    if (badgeClass === 'progress') {
      popup = (
        <div className={'Badge-Popup' + (this.state.hidden ? ' hidden' : '')} >
          {badge.description}
        </div>
      );
    }
    return (
      <div
        className={'Badge ' + badgeClass}
        style={{ backgroundImage: progressStyle }}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}>
        {popup}
        <div
          className={'Badge-Interior ' + badgeClass}
          style={{ backgroundImage: `url(${imgUrl})` }}>
        </div>
      </div>
    );
  }
};
