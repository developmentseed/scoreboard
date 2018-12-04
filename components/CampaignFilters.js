import React from 'react'
import InputRange from 'react-input-range'
import join from 'url-join'
import { APP_URL_PREFIX } from '../api/src/config'

const searchIcon = join(APP_URL_PREFIX, '/static/magnifier-left.svg')

export default (props) => {
  const {
    searchText,
    completeness: { compl_min, compl_max },
    handleSearch,
    handleFilterChange
  } = props

  return (
    <form onSubmit={e => e.preventDefault()}>
      <fieldset>
        <legend>Search</legend>
        <div className='search'>
          <input className='input--text' value={searchText} onChange={handleSearch} />
          <span className='search-icon' style={{ backgroundImage: `url(${searchIcon})` }} />
        </div>
      </fieldset>
      <fieldset>
        <legend>Completeness</legend>
        <InputRange maxValue={100} minValue={0} value={{ min: compl_min, max: compl_max }} onChange={handleFilterChange} />
      </fieldset>
    </form>
  )
}
