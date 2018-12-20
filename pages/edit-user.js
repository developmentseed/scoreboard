import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'unistore/react'

import fetch from '../lib/utils/api'
import countries from '../lib/utils/country-list'
import { actions } from '../lib/store'

import NotLoggedIn from '../components/NotLoggedIn'

class UserEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  updateUser (data) {
    const { id } = this.props
    this.props.updateUser(id, data)
  }

  onCountryChange (country) {
    const { currentCountry } = this.state
    if (!country || country.value === currentCountry) return
    this.setState({ currentCountry: country.value })
    this.updateUser({ country: country.value })
  }

  render () {
    const { authenticatedUser, currentCountry } = this.props

    const country = this.state.currentCountry || currentCountry

    if (!authenticatedUser.loggedIn) {
      return <NotLoggedIn message='Log in with your OSM account to edit your Scoreboard profile' />
    }

    return (
      <div className='UserEdit'>
        <header className='header--internal '>
          <div className='row'>
            <h1 className='header--xlarge'>Edit Profile</h1>
          </div>
        </header>
        <section className='section--primary'>
          <div className='row'>
            <div style={{ width: '50%' }}>
              <h4>Country</h4>
              <Select
                options={countries}
                value={country}
                onChange={(country) => this.onCountryChange(country)}
              />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const Page = connect(['authenticatedUser', 'user'], actions)(UserEdit)

/*
* because of how unistore wraps the component, the static method wasn't
* available unless attached to the component here
*/
Page.getInitialProps = async ({ req, query }) => {
  const { id } = query
  const res = await fetch(`/api/users/${id}`)
  const data = await res.json()
  return { id, currentCountry: data.country }
}

export default Page
