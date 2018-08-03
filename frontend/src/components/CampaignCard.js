import React from 'react';
import {Link} from 'react-router-dom';
import trimLength from '../utils/trim_length';
import CampaignMap from './charts/CampaignMap';

export default ({campaign}) => {
  const {
    tm_id,
    name,
    description,
    geometry,
    campaign_hashtag,
    done,
    validated
  } = campaign;
  return (
    <Link className="card--wrapper" to={`/campaigns/${campaign_hashtag}`}>
      <div className="card">
        <div className="map-campaign-sm"><CampaignMap feature={JSON.parse(geometry)} interactive={false} /></div>
        <div className="card-content">
          <h4 className="header--small header--with-description">{trimLength(name, 70)}</h4>
          <span className="description--project">Project #{tm_id}</span>
          <p>{trimLength(description, 190)}</p>
          <ul className="card-stats">
            <li className="list--inline">
              <span className="num--large">{parseInt(done * 0.5, 10) + parseInt(validated, 10)}%</span>
              <span className="descriptor-chart">Complete</span>
            </li>
            <li className="list--inline">
              <span className="num--large">{parseInt(validated, 10)}%</span>
              <span className="descriptor-chart">Validated</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>);
}
