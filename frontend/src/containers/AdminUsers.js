import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'unistore/react';

import { actions } from '../store'
import { isAdmin } from '../utils/roles'
import NotLoggedIn from '../components/NotLoggedIn'
import AdminHeader from '../components/AdminHeader'

import '../styles/Admin.css';

class AdminUsers extends Component {
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
        <div><AdminHeader /></div>
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

export default connect(['user', 'loggedIn', 'error'], actions)(AdminUsers);
