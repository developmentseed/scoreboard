import React from 'react'
import { sortBy, prop, splitAt } from 'ramda'
import { formatDecimal } from '../../lib/utils/format'
import findCountryByName from '../../lib/utils/findCountryByName'
import Link from '../Link'

export default ({ edits }) => {
  if (!edits) return <div>Loading...</div>
  const list_items = splitAt(5, sortBy(obj => +prop('edits', obj), edits).reverse())[0].map(record => {
    const code = findCountryByName(record.country_name).code
    return <li className='list--block--sm' key={record.country_name}>
      <Link href={`/countries/${code}`}>
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
