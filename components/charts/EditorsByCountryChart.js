import React from 'react';
import {sortBy, prop, splitAt} from 'ramda';
import {formatDecimal} from '../../lib/utils/format';
import countries from 'i18n-iso-countries';
import Link from 'next/link'
import enLocale from "i18n-iso-countries/langs/en.json"

countries.registerLocale(enLocale);


export default ({edits}) => {
  if (!edits) return <div>Loading...</div>
  const list_items = splitAt(5, sortBy(prop('edit_count'), edits).reverse())[0].map(record => {
    return <li className="list--block--sm" key={record.country}>
      <Link href="/users">
        <a>
          <span className="descriptor-chart">{countries.getName(record.country, "en")}</span>
          <span className="num--large">{formatDecimal(record.edit_count)}</span>
        </a>
      </Link></li>
  })
  return (
    <ul className="users--country">
      {list_items}
    </ul>
  )
}