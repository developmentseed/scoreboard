import React, { Component } from 'react'
import CountryHeader from '../components/CountryHeader'
import UserTable from '../components/UserTable'
import { actions } from '../lib/store'
import { connect } from 'unistore/react'
import dynamic from 'next/dynamic'

const CountryMap = dynamic(() => import('../components/charts/CountryMap'), {
  ssr: false
})

export class Country extends Component {
  componentDidMount () {
    this.props.getCountry(this.props.code)
  }

  render () {
    if (!this.props.country) return <div />
    const { name, edit_count, users, numParticipants } = this.props.country
    users.map((user) => {
      user.uid = user.osm_id
      user.edits = user.count
      user.name = user.full_name
    })
    if (!name) return <div />
    return (
      <div className='Country'>
        <CountryHeader name={name} num_participants={numParticipants} num_edits={edit_count} country={this.props.country} />
        <section>
          <div className='row'>
            <div className='section-sub--left section-width-fifty-plus'>
              <h3 className='header--medium'>Top 15 Participants</h3>
              <UserTable users={users} />
            </div>
            <div className='section-sub--right section-width-fifty-minus'>
              <div className='map-country-lg'>
                <CountryMap geography={this.props.country.geography} centroid={this.props.country.center} interactive />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const connectedCountry = connect(['country'], actions)(Country)
connectedCountry.getInitialProps = function ({ req }) {
  const { code } = req.params
  return {
    code
  }
}

export default connectedCountry
