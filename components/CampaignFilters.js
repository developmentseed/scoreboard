import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

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
          <span className='search-icon' />
        </div>
      </fieldset>
      <fieldset>
        <legend>Completeness</legend>
        <InputRange maxValue={100} minValue={0} value={{ min: compl_min, max: compl_max }} onChange={handleFilterChange} />
      </fieldset>
    </form>
  )
}
