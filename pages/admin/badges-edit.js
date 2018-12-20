import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/AdminHeader'
import Link from '../../components/Link'
import imageList from '../../lib/utils/loadImages'
import { Carousel } from 'react-responsive-carousel'
import '../../styles/Carousel.css'

import { badgeMetrics, badgeOperationTypes, badgeOperationIndex } from '../../lib/badge-utils'

export class AdminBadgesEdit extends Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      disableInteraction: false,
      name: '',
      description: '',
      number: '',
      operations: [],
      imageFile: null,
      selectedImg: 0,
      destroyConfirmation: null
    }

    // Event handlers
    this.addAnotherOperationToBadge = this.addAnotherOperationToBadge.bind(this)
    this.handleAddNewBadgeFormSubmit = this.handleAddNewBadgeFormSubmit.bind(this)
    this.handleDescriptionInputChange = this.handleDescriptionInputChange.bind(this)
    this.handleNameInputChange = this.handleNameInputChange.bind(this)
    this.handleOperationChange = this.handleOperationChange.bind(this)
    this.removeOperationFromBadge = this.removeOperationFromBadge.bind(this)
    this.resetInputs = this.resetInputs.bind(this)
    this.handleBadgeImageChange = this.handleBadgeImageChange.bind(this)
  }

  async componentDidMount () {
    const { id } = this.props

    try {
      await this.props.getAuthenticatedUser()
      await this.props.getBadge(id)
      this.setState({ loading: false })
    } catch (err) {
      console.error(err)
      this.setState({ loading: false })
    }
  }

  componentDidUpdate () {
    const { badge } = this.props
    if (badge && !this.state.name) {
      this.setState(this.props.badge)
    }
  }

  async updateBadge (params) {
    const { id } = this.props
    this.setState({ disableInteraction: true })

    try {
      await this.props.updateBadge(id, params)
      Router.push('/admin/badges')
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
          <div className='row'>
            <div className='sidebar'>
              <h2 className='header--large'>Badges</h2>
              <ul className='admin-sidebar-links'>
                <li>
                  <Link href='/admin/badges'>
                    <a className='link--large'>
                      Badges List
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/admin/badges/add'>
                    <a className='link--large'>
                      Create new badge
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='content--with-sidebar'>
              <div className='row'>
                <h1 className='header--xlarge'>Edit badge</h1>
              </div>
              <div className='row'>
                {this.renderAddNewForm()}
              </div>
              <div className='row' style={{ marginTop: 50 }}>
                <h2 className='header--large' style={{ borderTop: '1px solid #efefef', paddingTop: 20 }}>Delete badge</h2>
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
        <p>Are you sure you want to delete this badge?</p>
        <button className='button button--destroy'
          id='delete-badge-confirmation-operation-button'
          type='button'
          onClick={async () => {
            await this.props.deleteBadge(id)
            Router.push('/admin/badges')
          }}
        >
          Delete this badge permanently
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
        Delete this badge
      </button>
    )
  }

  renderHeader () {
    return (
      <header className='header--internal--green header--page'>
        <div className='row'>
          <h1 className='section-sub--left header--xlarge margin-top-sm'>Add a new badge</h1>
        </div>
      </header>
    )
  }

  renderAddNewForm () {
    return (
      <form
        className='form form--two-column'
        id='form-add-new-badge'
        onSubmit={this.handleAddNewBadgeFormSubmit}
      >
        {this.renderBasicDetailsSection()}
        {this.renderOperationsSection()}
        {this.renderImageSection()}
        <div className='form__footer'>
          <button
            className='button button--secondary'
            id='add-new-badge-operation-button'
            onClick={this.addAnotherOperationToBadge}
            type='button'
          >
            Add another condition
          </button>
          <button
            className='button'
            id='add-new-badge-submit-button'
            type='submit'
          >
            Update badge
          </button>
        </div>
      </form >
    )
  }

  renderBasicDetailsSection () {
    return (
      <div className='form__section'>
        <h2 className='header--medium'>Badge Details</h2>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='add-new-badge-name'
          >
            Badge Name
          </label>
          <input
            id='badge-name'
            name='badge-name'
            onChange={this.handleNameInputChange}
            placeholder='Awesome JOSM'
            required
            type='text'
            value={this.state.name}
          />
        </div>
        <div className='form__input-unit'>
          <label
            className='form__label'
            htmlFor='badge-description'
          >
            Description
          </label>
          <textarea
            id='badge-description'
            name='badge-description'
            maxLength={150}
            onChange={this.handleDescriptionInputChange}
            placeholder='Let users know about how this badge works'
            required
            rows={5}
            value={this.state.description}
          />
        </div>
      </div>
    )
  }

  renderRequirements (op, i) {
    if (op[1] !== 'campaigns') {
      return (
        <div className='requirement__section'>
          <div className='form__input-unit form__input-unit--half'>
            <label
              className='form__label'
              htmlFor='badge-operation-type'
            >
              Condition
            </label>
            <Select
              id='badge-operation-type'
              name='badge-operation-type'
              onChange={(e) => this.handleOperationChange(e, i, 'operation')}
              options={badgeOperationTypes}
              placeholder="Select how you'll gauge this metric"
              value={op[0]}
            />
          </div>
          <div className='form__input-unit form__input-unit--half'>
            <label
              className='form__label'
              htmlFor='badge-metric-number'
            >
              Number
            </label>
            <input
              id='badge-metric-number'
              min={0}
              name='badge-metric-number'
              onChange={(e) => this.handleOperationChange(e, i, 'number')}
              placeholder='50'
              type='number'
              value={op[2]}
            />
          </div>
        </div>
      )
    } else {
      return (
        <div className='form__input-unit'>
          <input
            id='campaign-name'
            name='campaign-name'
            onChange={(e) => this.handleOperationChange(e, i, 'number')}
            placeholder='Enter the hashtag associated with this campaign'
            required
            type='text'
            value={op[2]}
          />
        </div>
      )
    }
  }

  renderOperationsSection () {
    return (
      <div className='form__section'>
        <h2 className='header--medium'>
          What do users need to do to achieve this badge?
        </h2>
        {this.state.operations.map((op, i) => (
          <fieldset
            key={`${i}`}
            style={{ borderBottom: '1px solid #eee', paddingBottom: '1em' }}
          >
            <div className='form__input-unit'>
              <label
                className='form__label'
                htmlFor='badge-metric'
              >
                Metric
              </label>
              <Select
                id='badge-metric'
                name='badge-metric'
                onChange={(e) => this.handleOperationChange(e, i, 'metric')}
                options={badgeMetrics}
                placeholder='Select the metric your badge will measure...'
                value={op[1]}
              />
            </div>
            {this.renderRequirements(op, i)}
            {i > 0 && (
              <button
                className='button button--link'
                id='delete-badge-operation-button'
                onClick={(e) => this.removeOperationFromBadge(e, i)}
                type='button'
              >
                Remove this condition
              </button>
            )}
          </fieldset>
        ))}
      </div>
    )
  }

  handleBadgeImageChange (badgeImage) {
    this.setState({ imageFile: imageList[badgeImage], selectedImg: badgeImage })
  }

  displayImages (filename) {
    const imageSource = `../../static/badges/${filename}`
    return (
      <div>
        <img src={imageSource} />
      </div>
    )
  }

  renderImageSection () {
    return (
      <div className='form__input-unit'>
        <h2 className='header--medium'>
          What image should be shown with this badge?
        </h2>
        <Carousel
          onChange={(e) => this.handleBadgeImageChange(e)}
          onClickItem={(e) => this.handleBadgeImageChange(e)}
          centerMode
          infiniteLoop
          centerSlidePercentage='65'
          width='50'
          selectedItem={this.state.selectedImg}
          emulateTouch
        >
          {imageList.map((filename) => this.displayImages(filename))}
        </Carousel>
      </div>
    )
  }

  addAnotherOperationToBadge () {
    this.setState((prevState) => {
      return {
        ...prevState,
        operations: [
          ...prevState.operations,
          ['', 0, '']
        ]
      }
    })
  }

  removeOperationFromBadge (e, idx) {
    e.preventDefault()

    // Can't delete the only set
    if (idx === 0) {
      return
    }

    if (this.state.operations[idx]) {
      const nextOperations = [...this.state.operations]
      nextOperations.splice(idx, 1)
      this.setState({ operations: nextOperations })
    }
  }

  handleNameInputChange (e) {
    const { value } = e.target
    this.setState({ name: value })
  }

  handleDescriptionInputChange (e) {
    const { value } = e.target
    this.setState({ description: value })
  }

  handleOperationChange (e, idx, keyName) {
    let targetOperation = this.state.operations[idx]
    if (!targetOperation) return
    let value = ''
    if (e !== null) {
      value = keyName === 'number' ? e.target.value : e.value
    }

    if (keyName === 'metric' && value === 'campaigns') {
      // make operation "=" and number an empty string
      targetOperation[badgeOperationIndex[keyName]] = value
      targetOperation[badgeOperationIndex['operation']] = '='
      targetOperation[badgeOperationIndex['number']] = ''
    } else if (keyName === 'metric' && targetOperation.metric === 'campaigns' && value !== 'campaigns') {
      // reset number to numeric
      targetOperation[badgeOperationIndex[keyName]] = value
      targetOperation[badgeOperationIndex['operation']] = ''
      targetOperation[badgeOperationIndex['number']] = 0
    } else {
      targetOperation[badgeOperationIndex[keyName]] = value
    }

    this.setState((state) => {
      return {
        operations: Object.assign([...state.operations], { [idx]: targetOperation })
      }
    })
  }

  handleAddNewBadgeFormSubmit (e) {
    e.preventDefault()

    const {
      name,
      description,
      operations,
      imageFile
    } = this.state

    const params = {
      description,
      name,
      operations,
      imageFile
    }

    this.updateBadge(params)
  }

  resetInputs () {
    this.setState({
      description: '',
      disableInteraction: false,
      name: '',
      number: '',
      operations: [
        ['', 0, '']
      ],
      imageFile: null,
      selectedImg: 0
    })
  }
}

const Page = connect(['authenticatedUser', 'error', 'badge', 'admin'], actions)(AdminBadgesEdit)

Page.getInitialProps = function ({ req }) {
  const { id } = req.params
  return { id }
}

export default Page
