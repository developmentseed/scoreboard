import React from 'react';
import { Link } from 'react-router-dom';
import { sortBy, prop } from 'ramda';
import { formatDecimal } from '../utils/format';
import {distanceInWordsToNow, parse} from 'date-fns';
import countries from 'i18n-iso-countries';
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

export default ({ apiStatus, users }) => {
  let content = <div></div>;
  switch (apiStatus) {
    case "SUCCESS":
      content = (<table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Country</th>
            <th>Total Edits</th>
            <th>Last Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            sortBy(prop('edit_count'), users)
              .reverse()
              .map(user => (
                <tr key={user.osm_id}>
                  <td>{((user.edit_count > 0 ) ? user.rank: "N/A")}</td>
                  <td><Link className="link--normal" to={`/users/${user.osm_id}`}>{user.display_name}</Link></td>
                  <td>{countries.getName(user.country, "en")}</td>
                  <td>{formatDecimal(user.edit_count)}</td>
                  <td>{user.edit_count > 0 ? `${distanceInWordsToNow(parse(user.last_edit))} ago`: "N/A"}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
      );
      break;
    case "LOADING":
      content = <div>Loading...</div>;
      break;

    case "ERROR":
      content = <div>Error loading records</div>;
      break;
    default:
      content = <div></div>;
  }
  return content;
};