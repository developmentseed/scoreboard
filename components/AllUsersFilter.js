import React from 'react'
import Select from 'react-select'
import { sortBy, prop } from 'ramda'
import join from 'url-join'

import { APP_URL_PREFIX } from '../api/src/config'
import countries from '../lib/utils/country-list.json'

const sortByLabel = sortBy(prop('label'))
const searchIcon = join(APP_URL_PREFIX, '/static/magnifier-left.svg')

export default ({
  handleSearch, handleSelect, handleSortSelect, selectedValue, selectedSortValue,
  handleActiveSelect, selectedActive
}) => (
  <div className='widget-25'>
    <h3 className='header--medium'>Filter</h3>
    <form className='filters' onSubmit={e => e.preventDefault()}>
      <fieldset>
        <legend>Search</legend>
        <div className='search'>
          <input className='input--text' onChange={handleSearch} />
          <span className='search-icon' style={{ backgroundImage: `url(${searchIcon})` }} />
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
            sortByLabel(countries.map(({ name }) => { return { value: name, label: name } }).filter((country) => country.label))
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
            [
              { value: 'Most recent', label: 'Most recent edit' },
              { value: 'Least recent', label: 'Least recent edit' },
              { value: 'Most total', label: 'Most total edits' },
              { value: 'Least total', label: 'Least total edits' }
            ]
          }
        />
      </fieldset>
      <fieldset>
        <legend>Active Users</legend>
        <Select name='active-select'
          simpleValue
          value={selectedActive}
          onChange={handleActiveSelect}
          options={
            [
              { value: 'all', label: 'All users' },
              { value: 'active', label: 'Active users' },
              { value: 'active-6-mo', label: 'Active in the past 6 months' },
              { value: 'active-3-mo', label: 'Active in the past 3 months' },
              { value: 'active-1-mo', label: 'Active in the past month' }
            ]
          }
        />
      </fieldset>
    </form>
  </div>
)
