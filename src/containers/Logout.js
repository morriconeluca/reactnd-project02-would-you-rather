import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';


class Logout extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null));
  }
  render() {
    return (
      <button
        onClick={this.handleClick}
        className="logout circle-icon-button"
      >
        Logout
      </button>
    );
  }
}

export default connect()(Logout);