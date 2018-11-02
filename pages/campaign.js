import React, {Component} from 'react';
import '../styles/Campaigns.scss';
import Link from 'next/link';
import Router from 'next/router';
import api from '../utils/api';
import { distanceInWordsToNow } from 'date-fns';
import CampaignMap from '../components/charts/CampaignMap';
import UserTable from '../components/UserTable';
import ReactMarkdown from 'react-markdown';
import {formatDecimal} from '../utils/format';
import sumEdits from '../utils/sum_edits';

const Blurb = ({
  users,
  km_roads_add,
  buildings_add,
  poi_add,
  km_waterways_add
}) => {
  return <h2 className="header--medium list--block">
    {`${users.length} users, mapping
    ${km_roads_add.toFixed(1)} km of roads,
    ${formatDecimal(buildings_add)} buildings,
    ${formatDecimal(poi_add)} Points of Interest, and
    ${km_waterways_add.toFixed(1)} km of waterways.`}
  </h2>
}

class Campaign extends Component {
  constructor () {
    super();
    this.state = {
      records: {},
      notFound: false
    }
  }

  componentDidMount () {
    const { match }  = this.props;
    /**
     * TODO:
     * What to do if there is no match?
     */
    if (match) {
      const { params: { name } } = match;
      api('get', `/api/campaigns/${name}`)
        .then(res => {
          // TODO error state
          this.setState({
            records: res.data.records,
            match
          });
        }).catch((e) => {
          console.log(e);
          this.setState({ notFound: true })
        });
    }
  }

  renderRedirect () {
    if (this.state.notFound) {
      return Router.push('/404')
    }
  }

  render () {
    const { records, match } = this.state;
    if (match && records && records.tmData) {
      return (
        <div className="Campaigns">
          <header className="header--internal--green header--page">
            <div className="row">
              <div className="section-sub--left">
                <h1 className="header--xlarge margin-top-sm">{records.tmData.name}</h1>
                <ul className="list--two-column clearfix">
                  <li>
                    <span className="list-label">Project Number:</span>
                    <span>#{records.tmData.tm_id}</span>
                  </li>
                  <li>
                    <span className="list-label">Last Update:</span>
                    <span>{distanceInWordsToNow(records.tmData.updated_at)} ago.</span>
                  </li>
                </ul>
              </div>
              <div className="section-sub--right">
                <Link href="/about">
                  <a className="button">Contribute</a>
                </Link>
              </div>
            </div>
          </header>
          <section>
            <div className="row">
              <div className="section-sub--left section-width-fifty-plus">
                <div className="text-body"><ReactMarkdown source={records.tmData.description} /></div>
              </div>
              <div className="section-sub--right section-width-fifty-minus">
                <div className="map-campaign-lg">
                  <div className="campagin-body-header">
                    <ul className="list--horizontal">
                      <li className="list--inline">
                        <span className="descriptor-chart">Complete</span>
                        <span className="num--large">{parseInt(records.tmData.done * 0.5, 10) + parseInt(records.tmData.validated, 10)}%</span>
                      </li>
                      <li className="list--inline">
                        <span className="descriptor-chart">Participants</span>
                        <span className="num--large">{records.users.length}</span>
                      </li>
                      <li className="list--inline">
                        <span className="descriptor-chart">Total Features Mapped</span>
                        <span className="num--large">
                        {formatDecimal(sumEdits(records))}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <CampaignMap feature={JSON.parse(records.tmData.geometry)} interactive={true} />
                </div>
              </div>
            </div>
          </section>
          <section className="section--tertiary">
            <div className="row">
              <Blurb {...records} />
              <UserTable users={records.users}/>
            </div>
          </section>
        </div>
      );
    } else {
      return <div>{this.renderRedirect()}</div>;
    }
  }
}

export default Campaign;
