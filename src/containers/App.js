import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleGetUsers} from '../actions/users';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers());
  }

  render() {
    const {users} = this.props;
    const usersId = Object.keys(users);

    return (
      <div>
        {usersId.length === 0 ? 'Loading...' : 'Hello World!'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(App);
