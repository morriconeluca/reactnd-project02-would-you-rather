import React from 'react';
import {connect} from 'react-redux';

import Avatar from './Avatar';

function Greetings({authedUser, authedUserName}) {
  return (
    <p className="greetings centralize">
      <span>Hello,</span>{authedUserName}
      <Avatar id={authedUser} className="navbar-avatar"/>
    </p>
  );
}

const mapStateToProps = state => ({
  authedUser: state.authedUser,
  authedUserName: state.users[state.authedUser].name
});

export default connect(mapStateToProps)(Greetings);