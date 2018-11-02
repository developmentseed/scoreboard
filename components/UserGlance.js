import React from 'react';
import '../styles/Users.scss';
import CampaignsChart from './charts/CampaignsChart';
import EditBreakdownChart from './charts/EditBreakdownChart';
import MiniBadgeBox from '../components/MiniBadgeBox';

export default ({ records, badges }) =>
  <section>
    <div className="row">
      <div className="graphs--user">
        <div className="section-sub--left section-width-sixty user-glance-graphs">
          <h4 className="header--small">Top Campaigns</h4>
          <div className="chart" style={{height: "150px"}}>
          {
              (records && records.hashtags)
              ? <CampaignsChart {...records} />
              : <div></div>
          }
          </div>
        </div>
        <div className="section-sub--left section-width-thirty user-glance-graphs">
          <h4 className="header--small">Type Of Edits</h4>
          <div className="chart chart-pie" style={{height: "150px"}}>
          {
              (records)
              ? <EditBreakdownChart {...records} />
              : <div></div>
          }
          </div>

        </div>
        <div className="user-glance-graphs">
          <h4 className="header--small">Recently Earned Badges</h4>
          <MiniBadgeBox badges={badges} />
        </div>
      </div>
    </div>
  </section>
