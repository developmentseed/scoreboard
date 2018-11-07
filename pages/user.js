import React, { Component } from 'react';
import api from '../lib/utils/api';
import '../styles/Users.scss';
import UserGlance from '../components/UserGlance';
import UserHeader from '../components/UserHeader';
import UserStats from '../components/UserStats';
import getSumEdits from '../lib/utils/sum_edits';

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
  static async getInitialProps ({ req }) {
    const { id } = req.params
    const res = await api('get', `/api/users/${id}`)
    const { records, country, badges} = res.data

    return {
      id,
      records,
      country,
      badges
    }
  }

  async componentDidMount () {
    const { id, records, badges } = this.props;
    if (!records || !badges) {
      const res = await api('get', `/api/users/${id}`)
      const { records, country, badges} = res.data

      this.setState({
        id,
        records,
        country,
        badges
      });
    }
  }

  render () {
    const { records, country, badges } = this.props;
    if (!records || !badges) return <div />

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
        <UserStats records={records} badges={badges}/>
      </div>
    );
  }
}

export default User;
