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

import { badgeMetrics, badgeOperationTypes } from '../../lib/badge-utils'

export class AdminBadgesAdd extends Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      descriptionInput: '',
      disableInteraction: false,
      nameInput: '',
      numberInput: '',
      operations: [
        {
          metric: '',
          number: 0,
          operation: ''
        }
      ],
      imageFile: imageList[0],
      selectedImg: 0
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
    try {
      await this.props.getAuthenticatedUser()
      this.setState({ loading: false })
    } catch (err) {
      console.error(err)
      this.setState({ loading: false })
    }
  }

  async createBadge (params) {
    this.setState({ disableInteraction: true })

    try {
      await this.props.createBadge(params)
      Router.push('/admin/badges')
    } catch (e) {
      console.error(e)
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
              <h2 className='header--large'>Badges</h2>
              <ul className='admin-sidebar-links'>
                <li>
                  <Link href='/admin/badges'>
                    <a className='link--large'>
                      Badges List
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='content--with-sidebar'>
              <div className='row'>
                <h1 className='header--xlarge'>Add a new badge</h1>
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
            Create badge
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
            Custom Badge Name
          </label>
          <input
            id='badge-name'
            name='badge-name'
            onChange={this.handleNameInputChange}
            placeholder='Awesome JOSM'
            required
            type='text'
            value={this.state.nameInput}
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
            value={this.state.descriptionInput}
          />
        </div>
      </div>
    )
  }

  renderRequirements (op, i) {
    if (op.metric !== 'campaigns') {
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
              value={op.operation}
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
              value={op.number}
            />
          </div>
        </div>
      )
    } else {
      return (
        <input
          id='campaign-name'
          name='campaign-name'
          onChange={(e) => this.handleOperationChange(e, i, 'number')}
          placeholder='Enter the hashtag associated with this campaign'
          required
          type='text'
          value={op.number}
        />
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
                value={op.metric}
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
          {
            metric: '',
            number: 0,
            operation: ''
          }
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

  handleCampaignOperation (idx) {
    let targetOperation = this.state.operations[idx]
    if (!targetOperation) return
    targetOperation = {
      ...targetOperation,
      operation: '='
    }

    this.setState((state) => {
      return {
        operations: Object.assign([...state.operations], { [idx]: targetOperation })
      }
    })
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
      targetOperation = {
        ...targetOperation,
        [keyName]: value,
        operation: '=',
        number: ''
      }
    } else if (keyName === 'metric' && targetOperation.metric === 'campaigns' && value !== 'campaigns') {
      // reset number to numeric
      targetOperation = {
        ...targetOperation,
        [keyName]: value,
        operation: '',
        number: 0
      }
    } else {
      targetOperation = {
        ...targetOperation,
        [keyName]: value
      }
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
      descriptionInput,
      nameInput,
      operations,
      imageFile
    } = this.state

    // Verify that no empty operations objects are being passed
    // and also collapse the object into an array
    const parsedOperations = operations
      .filter(op => op.metric && op.operation)
      .map(op => [op.operation, op.metric, op.number])

    const params = {
      description: descriptionInput,
      name: nameInput,
      operations: parsedOperations,
      imageFile
    }

    this.createBadge(params)
  }

  resetInputs () {
    this.setState({
      descriptionInput: '',
      disableInteraction: false,
      nameInput: '',
      numberInput: '',
      operations: [
        {
          metric: '',
          number: 0,
          operation: ''
        }
      ],
      imageFile: imageList[0],
      selectedImg: 0
    })
  }
}

export default connect(['authenticatedUser', 'error', 'badges', 'admin'], actions)(AdminBadgesAdd)
