import React from 'react'
import Select from 'react-select'
import { sortBy, prop } from 'ramda'

import countries, { getName } from 'i18n-iso-countries'
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))

const sortByLabel = sortBy(prop('label'))

export default ({
  searchText, handleSearch, countries, handleSelect, handleSortSelect, selectedValue, selectedSortValue,
  handleToggleActive, activeValue
}) => (
  <div className='sidebar'>
    <h3 className='header--medium'>Filter</h3>
    <form onSubmit={e => e.preventDefault()}>
      <fieldset>
        <legend>Search</legend>
        <div className='search'>
          <input className='input--text' value={searchText} onChange={handleSearch} />
          <span className='search-icon' />
        </div>
      </fieldset>
      <fieldset>
        <legend>Country</legend>
        <Select name='country-select'
          multi
          simpleValue
          value={selectedValue}
          onChange={handleSelect}
          options={
            sortByLabel(countries.map(({ country }) => { return { value: country, label: getName(country, 'en') } }).filter((country) => country.label))
          }
        />
      </fieldset>
      <fieldset>
        <legend>Sort by</legend>
        <Select name='sort-select'
          simpleValue
          value={selectedSortValue}
          onChange={handleSortSelect}
          options={
            [{ value: 'Most recent', label: 'Most recent edit' }, { value: 'Least recent', label: 'Least recent edit' },
              { value: 'Most total', label: 'Most total edits' }, { value: 'Least total', label: 'Least total edits' }]
          }
        />
      </fieldset>
      <fieldset>
        <legend>Active Users</legend>
        <input type='checkbox' checked={activeValue} onChange={handleToggleActive} />
        Filter active users (edited in the past 6 months)
      </fieldset>
    </form>
  </div>
)
