import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {handleGetUsers} from '../actions/users';

import Loader from '../components/Loader';
import Signin from './Signin';
import Shell from './Shell';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers());
  }

  render() {
    const {usersIds, authedUser} = this.props;

    return (
      <BrowserRouter>
        <>
          {usersIds.length === 0
            ? <Loader position="fixed" />
            : (authedUser === null
                ? <Signin />
                : <Shell />
            )
          }
        </>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  usersIds: Object.keys(state.users),
  authedUser: state.authedUser
});

export default connect(mapStateToProps)(App);
