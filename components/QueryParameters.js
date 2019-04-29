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

    return (
      <div>
        {
          Object.keys(params).map(key => (
            <div key={key} className='form-flex'>
              <input type='text' placeholder='Key' disabled value={key} />
              <input type='text' placeholder='Value' disabled value={params[key]} />
              <input className='button button--destroy' type='button' value={'remove'} onClick={() => this.removeParam(key)} />
              <input className='button button--secondary' type='button' value={'edit'} onClick={() => this.editParam(key)} />
            </div>
          ))
        }
        <br />
        <div className='form-flex'>
          <input type='text' placeholder='Key' value={this.state.key} onChange={this.update('key')} />
          <input type='text' placeholder='Value' value={this.state.value} onChange={this.update('value')} />
          <input className='button' type='button' disabled={isNil(this.state.key) || this.state.key.length === 0} value={'save'} onClick={this.addParam} />
        </div>
        <br />
      </div>
    )
  }
}

export default QueryParameters
