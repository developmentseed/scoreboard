import React from 'react'

export default (props) => {
  const { filters, onClick } = props

  return (
    <ul className='filter-bar'>
      {
        filters.map((filter) => {
          return (
            <li>
              <button onClick={() => onClick(filter.id)}>{filter.name}</button>
            </li>
          )
        })
      }
    </ul>
  )
}
