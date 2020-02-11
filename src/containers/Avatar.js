import React from 'react';
import {connect} from 'react-redux';

function Avatar(props) {
  const {className, id, users} = props;

  return (
    <img
      className={
        `${className} avatar`
      }
      src={id
        ? users[id].avatarURL
        : '/avatar/avatar.png'
      }
      alt={id
        ? users[id].name
        : 'Avatar Placeholder'
      }
    />
  );
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Avatar);