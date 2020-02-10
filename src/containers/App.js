import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleGetUsers} from '../actions/users';

import Loader from '../components/Loader';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers());
  }

  render() {
    const {users} = this.props;
    const usersId = Object.keys(users);

    return (
      <>
        {usersId.length === 0
          ? <Loader position="fixed" />
          : 'Hello World!'
        }
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(App);
