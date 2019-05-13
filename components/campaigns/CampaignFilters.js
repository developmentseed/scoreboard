import React from 'react'
import InputRange from 'react-input-range'
import Select from 'react-select'
import join from 'url-join'
import { APP_URL_PREFIX } from '../../api/src/config'

const searchIcon = join(APP_URL_PREFIX, '/static/magnifier-left.svg')

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      compl_min: 0,
      compl_max: 100,
      valid_min: 0,
      valid_max: 100
    }
  }

  render () {
    const {
      handleSearch,
      selectedTM,
      handleSelectTM,
      sortOrder,
      tmList,
      handleCompletenessChange,
      handleValidationChange,
      handleSortChange
    } = this.props

    let { compl_min, compl_max, valid_min, valid_max } = this.state

    return (
      <form className='filters' onSubmit={e => e.preventDefault()}>
        <fieldset>
          <legend>Search</legend>
          <div className='search'>
            <input className='input--text' onChange={handleSearch} />
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
                { value: 'Least Recently Updated', label: 'Least Recently Updated' },
                { value: 'Alphabetical A-Z', label: 'Alphabetical A-Z' },
                { value: 'Alphabetical Z-A', label: 'Alphabetical Z-A' }
              ]
            }
          />
        </fieldset>
        <fieldset>
          <legend>Completeness</legend>
          <InputRange
            maxValue={100}
            minValue={0}
            value={{ min: compl_min, max: compl_max }}
            onChange={({ min, max }) => this.setState({ compl_min: min, compl_max: max })}
            onChangeComplete={handleCompletenessChange}
          />
        </fieldset>
        <fieldset>
          <legend>Validation</legend>
          <InputRange
            maxValue={100}
            minValue={0}
            value={{ min: valid_min, max: valid_max }}
            onChange={({ min, max }) => this.setState({ valid_min: min, valid_max: max })}
            onChangeComplete={handleValidationChange}
          />
        </fieldset>
      </form>
    )
  }
}
