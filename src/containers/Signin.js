import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';

import Avatar from './Avatar';

class Signin extends Component {
  state = {
    selectedUser: null
  };

  handleChange = e => {
    const {value} = e.target;
    this.setState({
      selectedUser: value ? value : null
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {selectedUser} = this.state;

    if (selectedUser) {
      this.props.dispatch(setAuthedUser(selectedUser));
    }
  }

  render() {
    const {users} = this.props;
    const {selectedUser} = this.state;

    return (
      <main className="signin centralize">
        <form
          onSubmit={this.handleSubmit}
          className="signin-card card"
        >
          <header className="card-header">
            <h1 className="card-title">
              Welcome to the Would You Rather App!
            </h1>
            <p className="card-subtitle">Please sign in to continue</p>
          </header>
          <fieldset className="card-body">
            <Avatar
              className="signin-avatar"
              id={selectedUser}
            />
            <h2>Sign in as…</h2>
            <select
              className="signin-select"
              onChange={this.handleChange}
            >
              <option value=''>--- Select User ---</option>
              {this.props.usersIds.map(id => (
                <option key={id} value={id}>
                  {users[id].name}
                </option>
              ))}
            </select>
            <button disabled={!selectedUser}>Sign in</button>
          </fieldset>
          <footer className="card-footer">
            <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">Avatars images designed by pikisuperstar / Freepik</a>
          </footer>
        </form>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  usersIds: Object.keys(state.users).sort()
});

export default connect(mapStateToProps)(Signin);