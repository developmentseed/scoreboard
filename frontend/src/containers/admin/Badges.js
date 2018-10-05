import React, { Component } from 'react';
import Select from 'react-select';
import api, { createApiUrl } from '../../utils/api';
import '../../styles/Admin.css';

const BADGES_ENDPOINT = '/api/badges';

const badgeMetrics = [
  { label: 'New buildings mapped', value: 'buildings' },
  { label: 'Countries mapped', value: 'countries' },
  { label: 'Total days mapped', value: 'daysTotal' },
  { label: 'Days mapped in a row', value: 'daysInRow' },
  { label: 'Campaigns participated in', value: 'hashtags' },
  { label: 'Times using JOSN', value: 'josm' },
  { label: 'Points of interest mapped', value: 'pois' },
  { label: 'New roads mapped (km)', value: 'roadKms' },
  { label: 'Roads modified (km)', value: 'roadKmMods' },
  { label: 'Waterways mapped', value: 'waterways' },
];

class BadgesAdmin extends Component {
  constructor() {
    super();

    this.state = {
      descriptionInput: '',
      metricInput: {},
      nameInput: '',
      numberInput: '',
      operationInput: {},
      badges: []
    };

    this.fetchBadges = this.fetchBadges.bind(this);
    this.postBadges = this.postBadges.bind(this);

    this.handleAddNewBadgeFormSubmit = this.handleAddNewBadgeFormSubmit.bind(this);
    this.handleDescriptionInputChange = this.handleDescriptionInputChange.bind(this);
    this.handleMetricInputChange = this.handleMetricInputChange.bind(this);
    this.handleNameInputChange = this.handleNameInputChange.bind(this);
    this.handleNumberInputChange = this.handleNumberInputChange.bind(this);
    this.handleOperationInputChange = this.handleOperationInputChange.bind(this);

    this.fetchBadges();
  }

  async fetchBadges() {
    try {
      const res = await api('get', createApiUrl(BADGES_ENDPOINT, {}));
      const { badges } = res.data;
      this.setState({ badges });
    } catch (e) {
      console.log('Error fetching badges: ', e);
    }
  }

  async postBadges(params) {
    try {
      const res = await api('post', BADGES_ENDPOINT, params);
      console.log(res);
    } catch (e) {
      console.log('Error posting badge: ', e);
    }
  }

  render() {
    return (
      <div className='admin'>
        {this.renderHeader()}
        <section>
          <div className='row'>
            {this.renderAddNewForm()}
          </div>
        </section>
      </div>
    );
  }

  renderHeader() {
    return (
      <header className="header--internal--green header--page">
        <div className="row">
          <h1 className="section-sub--left header--xlarge margin-top-sm">Add a new badge</h1>
        </div>
      </header>
    );
  }

  renderAddNewForm() {
    return (
      <form
        className='form form--two-column'
        id='form-add-new-badge'
        onSubmit={this.handleAddNewBadgeFormSubmit}
      >
        <fieldset className='form__column'>
          <legend className='header--medium'>
            Badge Details
          </legend>
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
              rows={5}
              value={this.state.descriptionInput}
            />
          </div>
        </fieldset>
        <fieldset className='form__column'>
          <legend className='header--medium'>
            What do users need to do to achieve this badge?
          </legend>
          <div class='form__input-unit form__input-unit--half'>
            <label
              className='form__label'
              htmlFor='badge-operation-type'
            >
              Threshold Type
            </label>
            <Select
              id='badge-operation-type'
              name='badge-operation-type'
              onChange={this.handleOperationInputChange}
              options={[
                { label: 'More than', value: '>' },
                { label: 'At least', value: '>=' }
              ]}
              placeholder="Select how you'll gauge this metric"
              value={this.state.operationInput}
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
              name='badge-metric-number'
              onChange={this.handleNumberInputChange}
              placeholder='50'
              type='number'
            />
          </div>
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
              onChange={this.handleMetricInputChange}
              options={badgeMetrics}
              placeholder='Select the metric your badge will measure...'
              value={this.state.metricInput}
            />
          </div>
        </fieldset>
        <div className='form__footer'>
          <button
            id='add-new-badge-submit-button'
            type='submit'
          >
            Create badge
          </button>
        </div>
      </form >
    );
  }

  handleNameInputChange(e) {
    const { value } = e.target;
    this.setState({
      nameInput: value
    });
  }

  handleDescriptionInputChange(e) {
    const { value } = e.target;
    this.setState({
      descriptionInput: value
    });
  }

  handleMetricInputChange(newVal) {
    this.setState({
      metricInput: newVal
    });
  }

  handleNumberInputChange(e) {
    const { value } = e.target;
    this.setState({
      numberInput: value
    });
  }

  handleOperationInputChange(newVal) {
    this.setState({
      operationInput: newVal
    });
  }

  handleAddNewBadgeFormSubmit(e) {
    e.preventDefault();

    const {
      descriptionInput,
      metricInput,
      nameInput,
      numberInput,
      operationInput,
    } = this.state;
    const metric = metricInput.value;
    const operation = operationInput.value;

    const params = {
      description: descriptionInput,
      name: nameInput,
      operations: [[
        operation,
        metric,
        numberInput
      ]]
    };

    this.postBadges(params);
  }
}

export default BadgesAdmin;
