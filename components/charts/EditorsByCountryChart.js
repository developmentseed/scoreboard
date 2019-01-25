import React from 'react'
import { sortBy, prop, splitAt } from 'ramda'
import { formatDecimal } from '../../lib/utils/format'
import Link from '../Link'

export default ({ edits }) => {
  if (!edits) return <div>Loading...</div>
  const list_items = splitAt(5, sortBy(obj => +prop('edit_count', obj), edits).reverse())[0].map(record => {
    return <li className='list--block--sm' key={record.country}>
      <Link href='/users'>
        <a>
          <span className='descriptor-chart'>{record.country}</span>
          <span className='num--large'>{formatDecimal(record.edit_count)}</span>
        </a>
      </Link></li>
  })
  return (
    <ul className='users--country'>
      {list_items}
    </ul>
  )
}
