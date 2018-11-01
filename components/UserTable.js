import React from 'react';
import Link from 'next/link';
import { sortBy, prop } from 'ramda';
import { formatDecimal } from '../lib/utils/format';

export default (props) => (
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Changesets</th>
      </tr>
    </thead>
    <tbody>
      {
        sortBy(prop('edits'), props.users)
        .reverse()
        .map((user, idx) => (
          <tr key={user.uid}>
            <td>{idx + 1}</td>
            <td><Link className="link--normal" to={`/users/${user.uid}`}>{user.name}</Link></td>
            <td>{formatDecimal(user.edits)}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);