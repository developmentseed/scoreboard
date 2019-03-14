import React, { Component } from 'react'
import qs from 'query-string'
import { zipObj, map, prop, isNil, remove } from 'ramda'

const emptyParam = () => ({ key: null, value: null })

class QueryParameters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      params: [emptyParam()]
    }

    this.update = this.update.bind(this)
    this.onChange = this.onChange.bind(this)
    this.addNewParam = this.addNewParam.bind(this)
    this.removeParam = this.removeParam.bind(this)
  }

  update (idx, field) {
    const component = this
    return function (e) {
      e.preventDefault()
      let params = component.state.params
      params[idx][field] = e.target.value
      component.setState({
        params
      }, component.onChange)
    }
  }

  removeParam (idx) {
    const component = this
    return function (e) {
      e.preventDefault()
      let params = remove(idx, 1, component.state.params)
      component.setState({
        params
      }, component.onChange)
    }
  }

  addNewParam () {
    let params = this.state.params
    params.push(emptyParam())
    this.setState({
      params
    })
  }

  onChange () {
    // Filter out not entirely filled out params
    let params = this.state.params.filter(pair =>
      !(isNil(pair.key) || isNil(pair.value) || (pair.key.length === 0) || (pair.value.length === 0))
    )

    if (params.length) {
      // [{ key, value }, { key, value }] => {key:value, key:value}
      let paramBuilder = zipObj(map(prop('key'), params), map(prop('value'), params))

      this.props.onChange(qs.stringify(paramBuilder))
    }
  }

  render () {
    let { params } = this.state

    return (
      <div>
        {
          params.map((p, idx) => (
            <div key={idx} style={{ marginBottom: '5px' }}>
              <input type='text' placeholder='Key' style={{ width: '40%', margin: 'auto' }} onChange={this.update(idx, 'key')} />
              <input type='text' placeholder='Value' style={{ width: '40%', marginLeft: '4px' }} onChange={this.update(idx, 'value')} />
              <input
                type='button'
                className='button'
                id='add-new-param-button'
                onClick={this.removeParam(idx)}
                value='-'
              />
            </div>
          ))
        }
        <br />
        <input
          type='button'
          className='button'
          id='add-new-param-button'
          onClick={this.addNewParam}
          value='Add new parameter'
        />
      </div>
    )
  }
}

export default QueryParameters
