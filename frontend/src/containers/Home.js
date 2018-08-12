import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import api from '../utils/api';
import trimLength from '../utils/trim_length';
import Map from '../components/charts/HomeMap';
import {formatDecimal} from '../utils/format';
import TopEditorsChart from '../components/charts/TopEditorsChart';
import EditorsByCountry from '../components/charts/EditorsByCountryChart';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      records: [],
      campaign_total: 0
    }
  }
  componentWillMount () {
    api('get', `/api/topstats`)
    .then(res => {
      // TODO error state
      this.setState({
        records: res.data.records,
        campaign_total: res.data.total,
        num_users: res.data.numUsers,
        features: res.data.features,
        top_edits: res.data.topEdits,
        edits_by_country: res.data.editsByCountry
      });
    });
  }


  render() {
    const {campaign_total, records, num_users, features, top_edits, edits_by_country} = this.state;
    return (
      <div className="home">
        <header className="header--homepage header--page">
          <div className="overlay-dark">
            <div className="row">
              <div className="width--shortened">
                <div className="section-sub--left">
                  <h1 className="header--xxlarge header--with-description">Tracking Map Edits Around the World</h1>
                  <p className="description--header">See what’s happening throughout the OSM ecosystem. From which campaigns are the most active, to detailed information about the contributing mappers.</p>
                  <Link className="link--large" to="/about">Learn More</Link>
                </div>
                <div className="section-sub--right section-sub--right--home">
                  <ul>
                    <li className="list--block">
                      <Link className="link--white" to="/users">
                        <span className="num--large">{formatDecimal(num_users)}</span>
                        <span className="descriptor-chart">Active Users</span>
                      </Link>
                    </li>
                    <li className="list--block">
                      <Link className="link--white" to="/campaigns">
                        <span className="num--large">{formatDecimal(campaign_total)}</span>
                        <span className="descriptor-chart">Campaigns</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="section--tertiary">
          <div className="row">
            <div className="width--shortened">
              <h2 className="header--large">Top Campaigns</h2>
              <div style={{ width: "100%", height: "275px", "marginBottom": "40px"}}>
                {features?
                <Map overlay={features} />
                : <div>Loading map...</div>
                }
              </div>
              <ul className="clearfix">
                {
                  records.map(record =>
                    <li key={`block-${record.campaign_hashtag}`} className="block--campaign">
                      <h3 className="header--small header--with-description-xlg">
                        <Link className="header--underlined" to={`/campaigns/${record.campaign_hashtag}`}>{record.name}</Link>
                      </h3>
                      <p>{trimLength(record.description, 195)}</p>
                      <ul className="chart-bar--main">
                        <li>
                          <span className="chart-bar--title">Complete</span>
                          <span className="chart-bar--wrapper">
                            <span className="chart-bar" style={{"width": `${parseInt(record.done * 0.5, 10) + parseInt(record.validated, 10)}%`}}></span>
                            <span className="chart-bar--percent">{parseInt(record.done * 0.5, 10) + parseInt(record.validated, 10)}%</span>
                          </span>
                        </li>
                        <li>
                          <span className="chart-bar--title">Validated</span>
                          <span className="chart-bar--wrapper">
                            <span className="chart-bar" style={{"width": `${parseInt(record.validated, 10)}%`}}></span>
                            <span className="chart-bar--percent">{parseInt(record.validated, 10)}%</span>
                          </span>
                        </li>
                      </ul>
                    </li>
                )}
              </ul>
              <Link className="link--large" to="/campaigns">View All Campaigns</Link>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="width--shortened graphs--users">
              <h2 className="header--large">Users</h2>
              <div className="side-by-side section-width-twenty section-width--first">
                <h3>Edits By Country</h3>
                <EditorsByCountry edits={edits_by_country} />
              </div>
              <div className="side-by-side section-width-eighty" style={{height: "430px", marginBottom: "50px"}}>
                <h3>Top Editors</h3>
                {
                  top_edits ? <TopEditorsChart edits={top_edits} /> : <div>Loading...</div>
                }
              </div>
              <Link className="link--large" to="/users">View All Users</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
