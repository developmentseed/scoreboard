import React, { Component } from 'react'
import qs from 'query-string'
import { zipObj, map, prop } from 'ramda'

class QueryParameters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      key: '',
      value: ''
    }

    this.update = this.update.bind(this)
    this.parse = this.parse.bind(this)
    this.onChange = this.onChange.bind(this)
    this.addParam = this.addParam.bind(this)
    this.removeParam = this.removeParam.bind(this)
  }

  parse (params) {
    if (!params) return []
    let places = (params).split('&')
    let newParams = places.map(str => {
      let pair = str.split('=')
      return { 'key': pair[0] || '', 'value': pair[1] || '' }
    })
    return newParams
  }

  addParam () {
    let params = this.parse(this.props.params)
    params.push({ 'key': this.state.key, 'value': this.state.value })
    this.setState({
      key: '',
      value: ''
    }, () => this.onChange(params))
  }

  removeParam (p) {
    let params = this.parse(this.props.params)
    params = params.filter(param => !((param.key === p.key) && param.value === p.value))
    this.setState({
      key: '',
      value: ''
    }, () => this.onChange(params))
  }

  update (field) {
    const component = this
    return function (e) {
      e.preventDefault()
      component.setState({ [field]: e.target.value })
    }
  }

  onChange (params) {
    // [{ key, value }, { key, value }] => {key:value, key:value}
    let paramBuilder = zipObj(map(prop('key'), params), map(prop('value'), params))

    this.props.onChange(qs.stringify(paramBuilder))
  }

  render () {
    let params = this.parse(this.props.params)

    return (
      <div>
        {
          params.map((p, idx) => (
            <div key={idx} style={{ marginBottom: '5px' }}>
              <input type='text' placeholder='Key' disabled value={p.key} style={{ width: '30%', margin: 'auto' }} />
              <input type='text' placeholder='Value' disabled value={p.value} style={{ width: '30%', marginLeft: '4px' }} />
              <input type='button' value={'remove'} style={{ width: '30%', marginLeft: '4px' }} onClick={() => this.removeParam(p)} />
            </div>
          ))
        }
        <br />
        <div style={{ marginTop: '5px', marginBottom: '5px' }}>
          <input type='text' placeholder='Key' value={this.state.key} style={{ width: '30%', margin: 'auto' }} onChange={this.update('key')} />
          <input type='text' placeholder='Value' value={this.state.value} style={{ width: '30%', marginLeft: '4px' }} onChange={this.update('value')} />
          <input type='button' value={'save'} style={{ width: '30%', marginLeft: '4px' }} onClick={this.addParam} />
        </div>
        <br />
      </div>
    )
  }
}

export default QueryParameters
