import React, { Component } from 'react'
import qs from 'query-string'
import { zipObj, map, prop } from 'ramda'

class QueryParameters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      params: [{ key: '', value: '' }]
    }

    this.update = this.update.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  update (idx, field) {
    const component = this
    return function (e) {
      e.preventDefault()
      let params = component.state.params
      params[idx][field] = e.target.value
      component.setState({
        params
      }, component.onChange())
    }
  }

  onChange () {
    let params = this.state.params

    // [{ key, value }, { key, value }] => {key:value, key:value}
    let paramBuilder = zipObj(map(prop('key'), params), map(prop('value'), params))

    this.props.onChange(qs.stringify(paramBuilder))
  }

  render () {
    let { params } = this.state

    return (
      <div>
        {
          params.map((p, idx) => (
            <div key={idx}>
              <input type='text' placeholder='Key' style={{ width: '40%', margin: 'auto' }} onChange={this.update(idx, 'key')} />
              <input type='text' placeholder='Value' style={{ width: '40%', marginLeft: '4px' }} onChange={this.update(idx, 'value')} />
            </div>
          ))
        }
      </div>
    )
  }
}

export default QueryParameters
