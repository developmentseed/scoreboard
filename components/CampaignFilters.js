import React from 'react'
import InputRange from 'react-input-range'
import join from 'url-join'
import { APP_URL_PREFIX } from '../api/src/config'

const searchIcon = join(APP_URL_PREFIX, '/static/magnifier-left.svg')

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      min: 0,
      max: 100
    }
  }

  render () {
    const {
      handleSearch
    } = this.props

    let { min, max } = this.state

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
          <legend>Completeness</legend>
          <InputRange
            maxValue={100}
            minValue={0}
            value={{ min, max }}
            onChange={value => this.setState(value)}
            onChangeComplete={this.props.handleFilterChange}
          />
        </fieldset>
      </form>
    )
  }
}
