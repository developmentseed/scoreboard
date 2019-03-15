import React, { Component } from 'react'
import { isNil } from 'ramda'

class QueryParameters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      key: '',
      value: ''
    }

    this.update = this.update.bind(this)
    this.onChange = this.onChange.bind(this)
    this.addParam = this.addParam.bind(this)
    this.removeParam = this.removeParam.bind(this)
    this.editParam = this.editParam.bind(this)
  }

  addParam () {
    let params = Object.assign({}, this.props.params)
    params[this.state.key] = this.state.value
    this.setState({
      key: '',
      value: ''
    }, () => this.onChange(params))
  }

  removeParam (key) {
    let params = Object.assign({}, this.props.params)
    delete params[key]
    this.setState({
      key: '',
      value: ''
    }, () => this.onChange(params))
  }

  editParam (key) {
    let params = Object.assign({}, this.props.params)
    let param = params[key]
    this.setState(param)
  }

  update (field) {
    const component = this
    return function (e) {
      e.preventDefault()
      component.setState({ [field]: e.target.value })
    }
  }

  onChange (params) {
    this.props.onChange(params)
  }

  render () {
    let params = Object.assign({}, this.props.params)
    console.log(params)

    return (
      <div>
        {
          Object.keys(params).map(key => (
            <div key={key} style={{ marginBottom: '5px' }}>
              <input type='text' placeholder='Key' disabled value={key} style={{ width: '20%', margin: 'auto' }} />
              <input type='text' placeholder='Value' disabled value={params[key]} style={{ width: '20%', marginLeft: '4px' }} />
              <input type='button' value={'remove'} style={{ width: '20%', marginLeft: '4px' }} onClick={() => this.removeParam(key)} />
              <input type='button' value={'edit'} style={{ width: '20%', marginLeft: '4px' }} onClick={() => this.editParam(key)} />
            </div>
          ))
        }
        <br />
        <div style={{ marginTop: '5px', marginBottom: '5px' }}>
          <input type='text' placeholder='Key' value={this.state.key} style={{ width: '30%', margin: 'auto' }} onChange={this.update('key')} />
          <input type='text' placeholder='Value' value={this.state.value} style={{ width: '30%', marginLeft: '4px' }} onChange={this.update('value')} />
          <input type='button' disabled={isNil(this.state.key) || this.state.key.length === 0} value={'save'} style={{ width: '30%', marginLeft: '4px' }} onClick={this.addParam} />
        </div>
        <br />
      </div>
    )
  }
}

export default QueryParameters
