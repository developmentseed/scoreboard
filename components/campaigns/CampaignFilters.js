import React from 'react'
import InputRange from 'react-input-range'
import Select from 'react-select'
import join from 'url-join'
import { APP_URL_PREFIX } from '../../api/src/config'

const searchIcon = join(APP_URL_PREFIX, '/static/magnifier-left.svg')

export default class Filters extends React.Component {
  render () {
    const {
      handleSearch,
      searchText,
      selectedTM,
      handleSelectTM,
      sortOrder,
      tmList,
      handleCompletenessChange,
      handleValidationChange,
      handleSortChange,
      complMin,
      complMax,
      validMin,
      validMax
    } = this.props

    return (
      <form className='filters' onSubmit={e => e.preventDefault()}>
        <fieldset>
          <legend>Search</legend>
          <div className='search'>
            <input className='input--text' value={searchText} onChange={handleSearch} />
            <span className='search-icon' style={{ backgroundImage: `url(${searchIcon})` }} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Tasking Manager</legend>
          <Select name='tm-select'
            multi
            simpleValue
            value={selectedTM}
            onChange={handleSelectTM}
            options={
              tmList.map(({ name, id }) => ({ value: id, label: name }))
            }
          />
        </fieldset>
        <fieldset>
          <legend>Sort by</legend>
          <Select name='sort-select'
            simpleValue
            value={sortOrder}
            onChange={handleSortChange}
            options={
              [
                { value: 'Most Recently Created', label: 'Most Recently Created' },
                { value: 'Least Recently Created', label: 'Least Recently Created' },
                { value: 'Most Recently Updated', label: 'Most Recently Updated' },
                { value: 'Least Recently Updated', label: 'Least Recently Updated' }
              ]
            }
          />
        </fieldset>
        <fieldset>
          <legend>Completeness</legend>
          <InputRange
            maxValue={100}
            minValue={0}
            value={{ min: complMin, max: complMax }}
            onChange={handleCompletenessChange}
          />
        </fieldset>
        <fieldset>
          <legend>Validation</legend>
          <InputRange
            maxValue={100}
            minValue={0}
            value={{ min: validMin, max: validMax }}
            onChange={handleValidationChange}
          />
        </fieldset>
      </form>
    )
  }
}
