import React, { Component } from 'react'

/**
 * Scoreboard panel takes as props an object
 * that has two keys:
 * - facets: an array of "Facet" objects, each containing
 * a facet label and a value for that label, e.g: "campaigns", 31
 * - title: the title of this panel
 */
class ScoreboardPanel extends Component {
  render () {
    const { title, facets } = this.props

    const facetItems = facets.map(facet => (
      <li className='list--inline' key={facet.label}>
        <span className='num--large'>{facet.value}</span>
        <span className='descriptor-chart'>{facet.label}</span>
      </li>
    ))

    return (
      <section className='panel-container'>
        <h2 className='header--large'>{title}</h2>
        <div className='stats-user widget'>
          <ul>
            {facetItems}
          </ul>
        </div>
      </section>
    )
  }
}

export default ScoreboardPanel
