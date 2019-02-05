import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import Select from 'react-select'
import Link from '../../components/Link'

export class AdminTaskersEdit extends Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      descriptionInput: '',
      disableInteraction: false,
      nameInput: '',
      urlInput: '',
      urlProxyInput: '',
      typeInput: null
    }

    // Event handlers
    this.handleUpdateFormSubmit = this.handleUpdateFormSubmit.bind(this)
    this.handleDescriptionInputChange = this.handleDescriptionInputChange.bind(this)
    this.handleNameInputChange = this.handleNameInputChange.bind(this)
    this.handleUrlInputChange = this.handleUrlInputChange.bind(this)
    this.handleUrlProxyInputChange = this.handleUrlProxyInputChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.resetInputs = this.resetInputs.bind(this)
  }

  async componentDidMount () {
    const { id } = this.props

    try {
      await this.props.getAuthenticatedUser()
      await this.props.getTasker(id)
    } catch (err) {
      console.log(err)
      this.setState({ loading: false })
    }
  }

  componentDidUpdate () {
    const { tasker } = this.props
    if (tasker && this.state.loading) {
      this.setState({
        loading: false,
        nameInput: tasker.name,
        descriptionInput: tasker.description,
        urlInput: tasker.url,
        urlProxyInput: tasker.url_proxy,
        typeInput: tasker.type
      })
    }
  }

  async updateTasker (params) {
    const { id } = this.props
    this.setState({ disableInteraction: true })

    try {
      await this.props.updateTasker(id, params)
      Router.push('/admin/tasking-managers')
    } catch (e) {
      window.scroll(0, 0)
      this.setState({ disableInteraction: false })
      this.props.setNotification({ type: 'error', message: e.message || e })
    }
  }

  render () {
    const { authenticatedUser } = this.props
    const { destroyConfirmation } = this.state

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
            <div className='widget-75'>
              <div className='row'>
                <h1 className='header--xlarge'>Edit tasking manager</h1>
              </div>
              <div className='row'>
                {this.renderUpdateForm()}
              </div>
              <div className='row' style={{ marginTop: 50 }}>
                <h2 className='header--large' style={{ borderTop: '1px solid #efefef', paddingTop: 20 }}>Delete tasking manager</h2>
                {
                  destroyConfirmation
                    ? this.renderDestroyConfirmation()
                    : this.renderDestroyButton()
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  renderDestroyConfirmation () {
    const { id } = this.props

    return (
      <div className='form__footer'>
        <p>Are you sure you want to delete this tasking manager? This will remove all associated campaigns and assignments.</p>
        <button className='button button--destroy'
          id='delete-badge-confirmation-operation-button'
          type='button'
          onClick={async () => {
            await this.props.deleteTasker(id)
            Router.push('/admin/tasking-managers')
          }}
        >
          Delete this tasking manager permanently
        </button>

        <button className='button button--secondary'
          id='cancel-delete-badge-operation-button'
          type='button'
          onClick={() => {
            this.setState({ destroyConfirmation: false })
          }}
        >
          Cancel
        </button>
      </div>
    )
  }

  renderDestroyButton () {
    return (
      <button className='button button--destroy'
        id='delete-badge-operation-button'
        type='button'
        onClick={() => {
          this.setState({ destroyConfirmation: true })
        }}
      >
        Delete this tasking manager
      </button>
    )
  }

  renderHeader () {
    return (
      <header className='header--internal--green header--page'>
        <div className='row'>
          <h1 className='section-sub--left header--xlarge margin-top-sm'>Edit tasking manager</h1>
        </div>
      </header>
    )
  }

  renderUpdateForm () {
    return (
      <form
        className='form form--two-column'
        id='form-add-new-badge'
        onSubmit={this.handleUpdateFormSubmit}
      >
        {this.renderBasicDetailsSection()}

        <div className='form__footer'>
          <button
            className='button'
            id='add-new-badge-submit-button'
            type='submit'
          >
            Update tasking manager
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
        <h2 className='header--medium'>Advanced Settings</h2>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='add-new-tasker-url'
          >
            Proxy URL (API behind firewall)
          </label>
          <input
            id='tasker-url-proxy'
            name='tasker-url-proxy'
            onChange={this.handleUrlProxyInputChange}
            placeholder='https://internal-ip/tasks'
            type='text'
            value={this.state.urlProxyInput}
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

  handleUrlProxyInputChange (e) {
    const { value } = e.target
    this.setState({
      urlProxyInput: value
    })
  }

  handleTypeChange (typeInput) {
    this.setState({
      typeInput
    })
  }

  handleUpdateFormSubmit (e) {
    e.preventDefault()

    const {
      descriptionInput,
      nameInput,
      urlInput,
      urlProxyInput,
      typeInput
    } = this.state

    const params = {
      description: descriptionInput,
      name: nameInput,
      url: urlInput,
      url_proxy: urlProxyInput,
      type: typeInput.value
    }

    this.updateTasker(params)
  }

  resetInputs () {
    this.setState({
      descriptionInput: '',
      urlInput: '',
      urlProxyInput: '',
      disableInteraction: false,
      nameInput: ''
    })
  }
}

const Page = connect(['authenticatedUser', 'error', 'taskers', 'tasker', 'admin'], actions)(AdminTaskersEdit)

Page.getInitialProps = function ({ req }) {
  const { id } = req.params
  return { id }
}

export default Page
