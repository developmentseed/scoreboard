import React, { Component } from 'react';
import Select from 'react-select';
import api, { createApiUrl } from '../../utils/api';

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

    this.fetchBadges.call(this);

    this.handleAddNewBadgeFormSubmit = this.handleAddNewBadgeFormSubmit.bind(this);
    this.handleDescriptionInputChange = this.handleDescriptionInputChange.bind(this);
    this.handleMetricInputChange = this.handleMetricInputChange.bind(this);
    this.handleNameInputChange = this.handleNameInputChange.bind(this);
    this.handleNumberInputChange = this.handleNumberInputChange.bind(this);
    this.handleOperationInputChange = this.handleOperationInputChange.bind(this);
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
      const res = await api('post', BADGES_ENDPOINT);
      console.log(res);
    } catch (e) {
      console.log('Error posting badge: ', e);
    }
  }

  render() {
    return (
      <div className='Badges'>
        {this.renderHeader()}
        {this.renderAddNewForm()}
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
        id='form-add-new-badge'
        onSubmit={this.handleAddNewBadgeFormSubmit}
      >
        <div>
          <label htmlFor='add-new-badge-name'>
            Custom Badge Name
          </label>
          <input
            id='add-new-badge-name'
            onChange={this.handleNameInputChange}
            placeholder='Awesome JOSM'
            type='text'
            value={this.state.nameInput}
          />
        </div>
        <div>
          <label htmlFor='add-new-badge-description'>
            Description
          </label>
          <textarea
            id='add-new-badge-description'
            onChange={this.handleDescriptionInputChange}
            placeholder='Let users know about how this badge works'
            value={this.state.descriptionInput}
          />
        </div>
        <fieldset>
          <legend>
            Tell us how you'll measure the achievements necessary to get this badge!
          </legend>
          <label htmlFor='add-new-type-operation'>
            Threshold Type
          </label>
          <Select
            id='add-new-type-operation'
            onChange={this.handleOperationInputChange}
            options={[
              { label: 'More than', value: '>' },
              { label: 'At least', value: '>=' }
            ]}
            placeholder="Select how you'll gauge this metric"
            value={this.state.operationInput}
          />
          <label htmlFor='add-new-badge-metric-number'>
            Number
          </label>
          <input
            id='add-new-badge-metric-number'
            onChange={this.handleNumberInputChange}
            placeholder='50'
            type='number'
          />
          <label htmlFor='add-new-badge-metric'>
            Metric
          </label>
          <Select
            id='add-new-badge-metric'
            onChange={this.handleMetricInputChange}
            options={badgeMetrics}
            placeholder='Select the metric your badge will measure...'
            value={this.state.metricInput}
          />
        </fieldset>
        <button
          id='add-new-badge-submit-button'
          type='submit'
        >
          Create badge
          </button>
      </form>
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

    console.log({
      description: descriptionInput,
      metric,
      name: nameInput,
      number: numberInput,
      operation
    });
  }
}

export default BadgesAdmin;
