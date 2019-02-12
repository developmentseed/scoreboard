import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import Link from '../../components/Link'
import imageList from '../../lib/utils/loadImages'
import { Carousel } from 'react-responsive-carousel'
import '../../styles/Carousel.css'

import { badgeMetrics, badgeOperationTypes, badgeDateOperationTypes, badgeOperationIndex } from '../../lib/badge-utils'

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
      // format date metrics with between condition for form
      badge.operations = badge.operations.map((op) => {
        if (op[0] === 'between') {
          const dateRange = op[2].split('/')
          op.pop()
          op = op.concat(dateRange)
        }
        return op
      })
      this.setState(badge)
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
          <div className='row widget-container'>
            <div className='widget-25'>
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
            <div className='widget-75'>
              <div>
                <h1 className='header--xlarge'>Edit badge</h1>
              </div>
              <div>
                {this.renderAddNewForm()}
              </div>
              <div style={{ marginTop: 50 }}>
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
            maxLength={400}
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
    const isBetweenCondition = op[0] === 'between'

    if (op[1] === 'allDays') {
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
              onChange={(e) => this.handleOperationChange(i, 'operation', e.value)}
              options={badgeDateOperationTypes}
              placeholder="Select how you'll gauge this metric"
              value={op[0]}
            />
          </div>
          {
            isBetweenCondition
              ? (
                <div style={{ display: 'inline' }}>
                  <div className='form__input-unit form__input-unit--half' style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <label
                      className='form__label'
                      htmlFor='start-date'
                    >
                      Start date
                    </label>
                    <input
                      id='start-date'
                      name='start-date'
                      onChange={(e) => this.handleOperationChange(i, 'value', e.target.value)}
                      placeholder='Enter the days'
                      required
                      type='date'
                      value={op[2]}
                    />
                  </div>
                  <div className='form__input-unit form__input-unit--half' style={{ paddingLeft: 0, paddingRight: '1rem' }}>
                    <label
                      className='form__label'
                      htmlFor='end-date'
                    >
                      End date
                    </label>
                    <input
                      id='end-date'
                      name='end-date'
                      onChange={(e) => this.handleOperationChange(i, 'secondValue', e.target.value)}
                      placeholder='Enter the days'
                      required
                      type='date'
                      value={op[3]}
                    />
                  </div>
                </div>
              )
              : (
                <div className='form__input-unit form__input-unit--half' style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <label
                    className='form__label'
                    htmlFor='start-date'
                  >
                    Date
                  </label>
                  <input
                    id='single-date'
                    name='single-date'
                    onChange={(e) => this.handleOperationChange(i, 'value', e.target.value)}
                    placeholder='Enter the days'
                    required
                    type='date'
                    value={op[2]}
                  />
                </div>
              )
          }
        </div>
      )
    } else if (op[1] === 'campaigns') {
      return (
        <input
          id='campaign-name'
          name='campaign-name'
          onChange={(e) => this.handleOperationChange(i, 'value', e.target.value)}
          placeholder='Enter the hashtag associated with this campaign'
          required
          type='text'
          value={op[2]}
        />
      )
    } else {
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
              onChange={(e) => this.handleOperationChange(i, 'operation', e.value)}
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
              onChange={(e) => this.handleOperationChange(i, 'value', e.target.value)}
              placeholder='50'
              type='number'
              value={op[2]}
            />
          </div>
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
                onChange={(e) => this.handleOperationChange(i, 'metric', e.value)}
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
      <div key={imageSource}>
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
          centerSlidePercentage={65}
          width='100%'
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
          ['', '', '']
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

  handleOperationChange (idx, key, value) {
    let targetOperation = this.state.operations[idx]
    if (!targetOperation) return

    if (key === 'metric' && value === 'campaigns') {
      // make operation "=" and number an empty string
      targetOperation[badgeOperationIndex[key]] = value
      targetOperation[badgeOperationIndex['operation']] = '='
      targetOperation[badgeOperationIndex['number']] = ''
    } else if (key === 'metric' && targetOperation[1] === 'campaigns' && value !== 'campaigns') {
      // reset number to numeric
      targetOperation[badgeOperationIndex[key]] = value
      targetOperation[badgeOperationIndex['operation']] = ''
      targetOperation[badgeOperationIndex['number']] = 0
    } else {
      targetOperation[badgeOperationIndex[key]] = value
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

    // Verify that no empty operations objects are being passed,
    // properly format date-specific operations
    const parsedOperations = operations
      .filter(op => op && op[0] && op[1])
      .map(op => {
        if (op[0] === 'between') {
          op[2] = `${op[2]}/${op[3]}`
          op.pop()
        }
        return op
      })

    const params = {
      description,
      name,
      operations: parsedOperations,
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
        ['', '', '']
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
