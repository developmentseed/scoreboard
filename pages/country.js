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
    this.props.getCountry(this.props.alpha2)
  }

  render () {
    if (!this.props.country) return <div />
    const { name, edit_count, users } = this.props.country
    users.map((user) => {
      user.uid = user.osm_id
      user.edits = user.count
      user.name = user.full_name
    })
    if (!name) return <div />
    return (
      <div className='Country'>
        <CountryHeader name={name} num_participants={users.length} num_edits={edit_count} country={this.props.country} />
        <section>
          <div className='row'>
            <div className='section-sub--left section-width-fifty-plus'>
              <h3 className='header--medium'>Participants</h3>
              <UserTable users={users} />
            </div>
            <div className='section-sub--right section-width-fifty-minus'>
              <div className='map-campaign-lg'>
                <CountryMap geography={this.props.country.geography} interactive />
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
  const { alpha2 } = req.params
  return {
    alpha2
  }
}

export default connectedCountry