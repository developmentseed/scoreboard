import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'unistore/react'

import api from '../lib/utils/api'
import countries from '../lib/utils/country-list'
import { actions } from '../lib/store'

import NotLoggedIn from '../components/NotLoggedIn'

import '../styles/Users.scss'
import 'react-select/dist/react-select.css'

class UserEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  updateUser (data) {
    const { user: { id } } = this.props

    api('put', `/api/users/${id}`, data)
      .then(res => {
        this.setState({ saved: true })
      })
      .catch(err => {
        // TODO: show error
        console.log('err', err)
      })
  }

  onCountryChange = (country) => {
    const { currentCountry } = this.state
    if (!country || country.value === currentCountry) return
    this.setState({ currentCountry: country.value })
    this.updateUser({ country: country.value })
  }

  renderSaved () {
    if (this.state.saved) {
      setTimeout(() => {
        this.setState({ saved: false })
      }, 1000)

      return (
        <p style={{ color: '#4FCA9E' }}>✓ Saved</p>
      )
    }
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
                onChange={this.onCountryChange}
              />
              {this.renderSaved()}
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
  const res = await api('get', `/api/users/${id}`)
  const { country } = res.data
  return { id, currentCountry: country }
}

export default Page
