import React, { Component } from 'react';
import api from '../utils/api';
import '../styles/Users.css';
import getBadgeProgress from '../badge_logic';
import UserGlance from '../components/UserGlance';
import UserHeader from '../components/UserHeader';
import UserStats from '../components/UserStats';
import getSumEdits from '../utils/sum_edits';

const empty = {
  "id": 0, 
  "name": "",
  "extent_uri": "",
  "buildings_add": 0,
  "buildings_mod": 0,
  "waterways_add": 0,
  "waterways_mod": 0,
  "roads_add": 0,
  "roads_mod": 0,
  "poi_add": 0,
  "poi_mod": 0,
  "km_roads_add": 0,
  "km_roads_mod": 0,
  "km_waterways_add": 0,
  "km_waterways_mod": 0,
  "changeset_count": 0,
  "editors": [],
  "edit_times": [],
  "country_list": [],
  "hashtags": []
}


class User extends Component {
  constructor () {
    super();
    this.state = {
      "records": empty
    }
  }

  componentDidMount () {
    const { match }  = this.props;
    const {params: { uid } } = match;
    api('get', `/api/users/${uid}`)
    .then(res => {
      // TODO error state
      this.setState({
        records: res.data.records,
        country: res.data.country,
        match
      });
    });
  }

  render () {
    const { records, match, country } = this.state;
    if (match) {
      const badges = getBadgeProgress(records);
      const edits = getSumEdits(records);
      return (
        <div className="User">
          <UserHeader
            name={records.name}
            edit_times={records.edit_times}
            num_badges={Object.keys(badges.earnedBadges).length}
            num_edits={edits}
            num_hashtags={records.hashtags.length}
            country={country}
          />
          <UserGlance records={records} badges={badges} />
          <UserStats records={records} match={match} badges={badges}/>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default User;
