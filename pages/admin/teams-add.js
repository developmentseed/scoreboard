import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import Link from '../../components/Link'

export class AdminTeamsAdd extends Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      descriptionInput: '',
      disableInteraction: false,
      nameInput: '',
      hashtagInput: ''
    }

    // Event handlers
    this.handleAddNewTeamFormSubmit = this.handleAddNewTeamFormSubmit.bind(this)
    this.handleDescriptionInputChange = this.handleDescriptionInputChange.bind(this)
    this.handleNameInputChange = this.handleNameInputChange.bind(this)
    this.handleHashtagInputChange = this.handleHashtagInputChange.bind(this)
    this.resetInputs = this.resetInputs.bind(this)
  }

  async componentDidMount () {
    try {
      await this.props.getAuthenticatedUser()
      this.setState({ loading: false })
    } catch (err) {
      console.log(err)
      this.setState({ loading: false })
    }
  }

  async createTeam (params) {
    this.setState({ disableInteraction: true })

    try {
      await this.props.createTeam(params)
      Router.push('/admin/teams')
    } catch (e) {
      console.log(e)
      this.setState({ disableInteraction: false })
    }
  }

  render () {
    const { authenticatedUser } = this.props

    if (this.state.loading) {
      return (
        <div><AdminHeader /></div>
      )
    }

    if (!authenticatedUser.loggedIn) {
      return <NotLoggedIn />
    }

    if (!isAdmin(authenticatedUser.account.roles)) {
      return Router.push('/')
    }

    return (
      <div className='admin'>
        <AdminHeader />
        <section>
          <div className='row widget-container'>
            <div className='widget-25'>
              <h2 className='header--large'>Teams</h2>
              <ul className='admin-sidebar-links'>
                <li>
                  <Link href='/admin/badges'>
                    <a className='link--large'>
                      Teams List
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='widget-75'>
              <div className='row'>
                <h1 className='header--xlarge'>Add a new team</h1>
              </div>
              <div className='row'>
                {this.renderAddNewForm()}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  renderHeader () {
    return (
      <header className='header--internal--green header--page'>
        <div className='row'>
          <h1 className='section-sub--left header--xlarge margin-top-sm'>Add a new team</h1>
        </div>
      </header>
    )
  }

  renderAddNewForm () {
    return (
      <form
        className='form form--two-column'
        id='form-add-new-badge'
        onSubmit={this.handleAddNewTeamFormSubmit}
      >
        {this.renderBasicDetailsSection()}
        <div className='form__footer'>
          <button
            className='button'
            id='add-new-badge-submit-button'
            type='submit'
          >
            Create Team
          </button>
        </div>
      </form >
    )
  }

  renderBasicDetailsSection () {
    return (
      <div className='form__section'>
        <h2 className='header--medium'>Team Details</h2>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='add-new-badge-name'
          >
            Team Name
          </label>
          <input
            id='team-name'
            name='team-name'
            onChange={this.handleNameInputChange}
            placeholder='Awesome TEAM'
            required
            type='text'
            value={this.state.nameInput}
          />
        </div>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='add-new-badge-name'
          >
            Team Hashtag
          </label>
          <input
            id='team-hashtag'
            name='team-hashtag'
            onChange={this.handleHashtagInputChange}
            placeholder='#team-awesome'
            required
            type='text'
            value={this.state.hashtagInput}
          />
        </div>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='badge-description'
          >
            Team bio
          </label>
          <textarea
            id='badge-description'
            name='badge-description'
            maxLength={400}
            onChange={this.handleDescriptionInputChange}
            placeholder='Let users know about this team'
            required
            rows={5}
            value={this.state.descriptionInput}
          />
        </div>
      </div>
    )
  }

  handleNameInputChange (e) {
    const { value } = e.target
    this.setState({
      nameInput: value
    })
  }

  handleDescriptionInputChange (e) {
    const { value } = e.target
    this.setState({
      descriptionInput: value
    })
  }

  handleHashtagInputChange (e) {
    const { value } = e.target
    this.setState({
      hashtagInput: value
    })
  }

  handleAddNewTeamFormSubmit (e) {
    e.preventDefault()

    const {
      descriptionInput,
      nameInput,
      hashtagInput
    } = this.state

    const params = {
      bio: descriptionInput,
      name: nameInput,
      hashtag: hashtagInput
    }

    this.createTeam(params)
  }

  resetInputs () {
    this.setState({
      descriptionInput: '',
      hashtagInput: '',
      disableInteraction: false,
      nameInput: ''
    })
  }
}

export default connect(['authenticatedUser', 'error', 'teams', 'admin'], actions)(AdminTeamsAdd)
