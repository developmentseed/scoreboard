import React from 'react'

export default class FilterBar extends React.Component {
  shouldComponentUpdate (nextProps) {
    return this.props.active !== nextProps.active
  }

  render () {
    const { filters, onClick, active } = this.props

    return (
      <ul className='filter-bar'>
        {
          filters.map((filter) => {
            return (
              <li>
                <button
                  className={active === filter.id ? 'active' : ''}
                  onClick={() => onClick(filter.id)}
                >
                  {filter.name}
                </button>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
