import React, { Component } from 'react';
import Select from 'react-select';

import api from '../lib/utils/api';
import countries from '../lib/utils/country-list';
import '../styles/Users.scss';
import NotLoggedIn from '../components/NotLoggedIn'

class UserEdit extends Component {
  constructor () {
    super();

    this.state = {
      countries,
      currentCountry: null
    }
  }

  componentDidMount () {
    const { match }  = this.props;
    const { params: { uid } } = match;

    api('get', `/api/users/${uid}`)
      .then(res => {
        this.setState({ currentCountry: res.data.country });
      });
  }

  updateUser (data) {
    const { match }  = this.props;
    const { params: { uid } } = match;

    api('put', `/api/users/${uid}`, data)
      .then(res => {
        this.setState({ saved: true })
      })
      .catch(err => {
        // TODO: show error
        console.log('err', err);
      });
  }

  onCountryChange = (country) => {
    const { currentCountry } = this.state;
    if (!country || country.value === currentCountry) return;
    this.setState({ currentCountry: country.value });
    this.updateUser({ country: country.value });
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
    const { countries, currentCountry } = this.state;
    const { loggedIn } = this.props;

    if (!loggedIn) {
      return <NotLoggedIn message="Log in with your OSM account to edit your Scoreboard profile" />
    }

    return (
      <div className="UserEdit">
        <header className="header--internal ">
          <div className="row">
            <h1 className="header--xlarge">Edit Profile</h1>
          </div>
        </header>
        <section className="section--primary">
          <div className="row">
            <div style={{ width: '50%' }}>
              <h4>Country</h4>
              <Select
                options={countries}
                value={currentCountry}
                onChange={this.onCountryChange}
              />
              {this.renderSaved()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default UserEdit;
