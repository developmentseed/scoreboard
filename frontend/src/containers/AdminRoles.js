import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'unistore/react';

import { actions } from '../store'
import { isAdmin } from '../utils/roles'
import NotLoggedIn from '../components/NotLoggedIn'

import '../styles/Admin.css';

class Admin extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.props.getAuthenticatedUser()
  }

  componentDidUpdate () {
    if (this.state.loading && (this.props.loggedIn || this.props.error)) {
      this.setState({ loading: false })
    }
  }

  render() {
    const { loggedIn, user, location } = this.props

    if (this.state.loading) {
      return (
        <div />
      )
    }

    if (!loggedIn) {
      return <NotLoggedIn />
    }

    if (!isAdmin(user.roles)) {
      return (
        <Redirect to={{ pathname: '/', state: { from: location } }} />
      )
    }

    return (
      <div />
    );
  }
}

export default connect([], actions)(Admin);
