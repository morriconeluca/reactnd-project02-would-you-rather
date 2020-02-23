import React from 'react';
import {connect} from 'react-redux';

import {hasPoints, getPoints} from '../utils';

import LeaderCard from './LeaderCard';

function LeaderBoard({users}) {
  if (users.length === 0) {
    return (
      <h1>No user has any points yet.</h1>
    );
  }

  return (
    <ul className="leaderboard container centralize wrap">
      {users.map(id => (
        <li key={id}>
          <LeaderCard id={id} />
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({users}) => ({
  users: Object.keys(users)
    .filter(id => hasPoints(users[id]))
    .sort((a, b) => getPoints(users[b]) - getPoints(users[a]))
});

export default connect(mapStateToProps)(LeaderBoard);