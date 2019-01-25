import React from 'react'
import { sortBy, prop, splitAt } from 'ramda'
import { formatDecimal } from '../../lib/utils/format'
import Link from '../Link'

export default ({ edits }) => {
  if (!edits) return <div>Loading...</div>
  const list_items = splitAt(5, sortBy(obj => +prop('edits', obj), edits).reverse())[0].map(record => {
    return <li className='list--block--sm' key={record.country_name}>
      <Link href='/users'>
        <a>
          <span className='descriptor-chart'>{record.country_name}</span>
          <span className='num--large'>{formatDecimal(record.edits)}</span>
        </a>
      </Link></li>
  })
  return (
    <ul className='users--country'>
      {list_items}
    </ul>
  )
}
