import React, { Component } from 'react'
import CountryHeader from '../components/CountryHeader'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'

export class Country extends Component {
  componentDidMount () {
    this.props.getCountry(this.props.alpha2)
  }

  render () {
    if (!this.props.country) return <div />
    const { name, edit_count, users } = this.props.country
    if (!name) return <div />

    return (
      <div className='Country'>
        <CountryHeader
          name={name}
          num_edits={edit_count}
          num_participants={users.length}
        />
      </div>
    )
  }
}

const connectedCountry = connect(['country'], actions)(Country)
connectedCountry.getInitialProps = function ({ req }) {
  const { alpha2 } = req.params
  return {
    alpha2
  }
}

export default connectedCountry
