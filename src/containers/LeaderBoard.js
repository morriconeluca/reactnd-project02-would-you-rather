import React from 'react';
import {connect} from 'react-redux';

function getPoint(user) {
  return user.questions.length + Object.keys(user.answers).length;
}

function hasPoint(user) {
  return (
    user.questions.length > 0
    || Object.keys(user.answers).length > 0
  );
}

function LeaderBoard({users}) {
  if (users.length === 0) {
    return (
      <h1>No user has any points yet.</h1>
    );
  }

  return (
    <ul className="leaderboard">
      {users.map(id => (
        <li key={id} id={id}>{id}</li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({users}) => ({
  users: Object.keys(users)
    .filter(id => hasPoint(users[id]))
    .sort((a, b) => getPoint(users[b]) - getPoint(users[a]))
});

export default connect(mapStateToProps)(LeaderBoard);