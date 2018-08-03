import React from 'react';
import {sortBy, prop, splitAt} from 'ramda';
import {Link} from 'react-router-dom';
import {formatDecimal} from '../../utils/format';
import countries from 'i18n-iso-countries';
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

export default ({edits}) => {
  if (!edits) return <div>Loading...</div>
  const list_items = splitAt(5, sortBy(prop('edit_count'), edits).reverse())[0].map(record => {
    return <li className="list--block--sm" key={record.country}><Link to="/users">
      <span className="descriptor-chart">{countries.getName(record.country, "en")}</span>
      <span className="num--large">{formatDecimal(record.edit_count)}</span>
    </Link></li>
  })
  return (
    <ul className="users--country">
      {list_items}
    </ul>
  )
}