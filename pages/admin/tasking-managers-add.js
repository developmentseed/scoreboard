import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/AdminHeader'
import Select from 'react-select'
import Link from '../../components/Link'

export class AdminTaskersAdd extends Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      descriptionInput: '',
      disableInteraction: false,
      nameInput: '',
      typeInput: null,
      hashtagInput: ''
    }

    // Event handlers
    this.handleAddNewTaskerFormSubmit = this.handleAddNewTaskerFormSubmit.bind(this)
    this.handleDescriptionInputChange = this.handleDescriptionInputChange.bind(this)
    this.handleNameInputChange = this.handleNameInputChange.bind(this)
    this.handleUrlInputChange = this.handleUrlInputChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
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

  async createTasker (params) {
    this.setState({ disableInteraction: true })

    try {
      await this.props.createTasker(params)
      Router.push('/admin/tasking-managers')
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
          <div className='row'>
            <div className='sidebar'>
              <h2 className='header--large'>Tasking Managers</h2>
              <ul className='admin-sidebar-links'>
                <li>
                  <Link href='/admin/tasking-managers'>
                    <a className='link--large'>
                      Tasking Managers List
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='content--with-sidebar'>
              <div className='row'>
                <h1 className='header--xlarge'>Add a new tasking manager</h1>
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
          <h1 className='section-sub--left header--xlarge margin-top-sm'>Add a new tasking manager</h1>
        </div>
      </header>
    )
  }

  renderAddNewForm () {
    return (
      <form
        className='form form--two-column'
        id='form-add-new-badge'
        onSubmit={this.handleAddNewTaskerFormSubmit}
      >
        {this.renderBasicDetailsSection()}
        <div className='form__footer'>
          <button
            className='button'
            id='add-new-badge-submit-button'
            type='submit'
          >
            Create tasking manager
          </button>
        </div>
      </form >
    )
  }

  renderBasicDetailsSection () {
    return (
      <div className='form__section'>
        <h2 className='header--medium'>Details</h2>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='add-new-tasker-name'
          >
            Tasking Manager Name
          </label>
          <input
            id='tasker-name'
            name='tasker-name'
            onChange={this.handleNameInputChange}
            placeholder='HOTOSM Tasking Manager'
            required
            type='text'
            value={this.state.nameInput}
          />
        </div>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='add-new-tasker-url'
          >
            Tasking Manager URL
          </label>
          <input
            id='tasker-url'
            name='tasker-url'
            onChange={this.handleUrlInputChange}
            placeholder='https://tasks.hotosm.org'
            required
            type='text'
            value={this.state.urlInput}
          />
        </div>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='add-new-tasker-type'
          >
            Tasking Manager Type
          </label>
          <Select
            value={this.state.typeInput}
            onChange={this.handleTypeChange}
            options={[
              { value: 'tm2', label: 'Tasking Manager v2' },
              { value: 'tm3', label: 'Tasking Manager v3' }
            ]}
          />
        </div>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='tasker-description'
          >
            Tasking Manager description
          </label>
          <textarea
            id='tasker-description'
            name='tasker-description'
            maxLength={150}
            onChange={this.handleDescriptionInputChange}
            placeholder='Let other users know about this tasking manager'
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

  handleUrlInputChange (e) {
    const { value } = e.target
    this.setState({
      urlInput: value
    })
  }

  handleTypeChange (typeInput) {
    this.setState({
      typeInput
    })
  }

  handleAddNewTaskerFormSubmit (e) {
    e.preventDefault()

    const {
      descriptionInput,
      nameInput,
      urlInput,
      typeInput
    } = this.state

    const params = {
      description: descriptionInput,
      name: nameInput,
      url: urlInput,
      type: typeInput.value
    }

    this.createTasker(params)
  }

  resetInputs () {
    this.setState({
      descriptionInput: '',
      urlInput: '',
      disableInteraction: false,
      nameInput: ''
    })
  }
}

export default connect(['authenticatedUser', 'error', 'taskers', 'admin'], actions)(AdminTaskersAdd)