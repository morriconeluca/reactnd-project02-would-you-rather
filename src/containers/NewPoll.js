import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {handleSaveQuestion} from '../actions/shared';

import Loader from '../components/Loader';

class NewPoll extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    loading: false
  };

  onChange = e => {
    const {value, name} = e.target;

    const whiteSpaceAtBeginning = /^\s+/;
    this.setState(state => ({
      [name]: whiteSpaceAtBeginning.test(value) ? state[name] : value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const {optionOneText, optionTwoText} = this.state;

    if (optionOneText && optionTwoText) {
      const {dispatch, author, history} = this.props;

      this.setState({
        loading: true
      }, () => {
        dispatch(handleSaveQuestion(
          optionOneText.trim(), optionTwoText.trim(), author
        )).then(id => {
          history.push(`/questions/${id}`);
        });
      });
    }
  };

  render() {
    const {optionOneText, optionTwoText} = this.state;

    if (this.state.loading) {
      return (
        <Loader />
      );
    }

    return (
      <div className="new-poll question container">
        <form
          onSubmit={this.handleSubmit}
          className="card"
        >
          <header className="card-header">
            <h1 className="card-title">
              Create New Poll
            </h1>
            <p className="card-subtitle">Complete the question</p>
          </header>
          <fieldset className="card-body">
            <h2 className="new-poll-body-title">Would you rather…</h2>
            <p>
              <label htmlFor="optionOneText">Option One:</label>
              <input
                type="text"
                id="optionOneText"
                name="optionOneText"
                placeholder="Enter text here…"
                value={optionOneText}
                onChange={this.onChange}
              />
            </p>
            <hr className="poll-or" />
            <p>
              <label htmlFor="optionTwoText">Option Two:</label>
              <input
                type="text"
                id="optionTwoText"
                name="optionTwoText"
                placeholder="Enter text here…"
                value={optionTwoText}
                onChange={this.onChange}
              />
            </p>
            <button disabled={!(optionOneText && optionTwoText)}>Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  author: state.authedUser
});

export default withRouter(connect(mapStateToProps)(NewPoll));