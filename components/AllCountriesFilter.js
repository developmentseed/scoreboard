import React from 'react'
import Select from 'react-select'
import join from 'url-join'

import { APP_URL_PREFIX } from '../api/src/config'

const searchIcon = join(APP_URL_PREFIX, '/static/magnifier-left.svg')

export default ({
  searchText, handleSearch, countries, handleSelect, handleSortSelect, selectedValue, selectedSortValue,
  handleToggleActive, selectedActive
}) => (
  <div className='sidebar'>
    <h3 className='header--medium'>Filter</h3>
    <form onSubmit={e => e.preventDefault()}>
      <fieldset>
        <legend>Search</legend>
        <div className='search'>
          <input className='input--text' onChange={handleSearch} />
          <span className='search-icon' style={{ backgroundImage: `url(${searchIcon})` }} />
        </div>
      </fieldset>
      <fieldset>
        <legend>Sort by</legend>
        <Select name='sort-select'
          simpleValue
          value={selectedSortValue}
          onChange={handleSortSelect}
          options={
            [{ value: 'Most total', label: 'Most edits' }, { value: 'Least total', label: 'Least edits' }]
          }
        />
      </fieldset>
    </form>
  </div>
)
