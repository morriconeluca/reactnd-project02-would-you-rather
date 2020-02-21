import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {handleSaveQuestion} from '../actions/shared';

import Spinner from '../components/Spinner';

class NewPoll extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    loading: false,
    error: ''
  };

  onChange = e => {
    const {value, name} = e.target;

    const whiteSpaceAtBeginning = /^\s+/;
    this.setState(state => ({
      [name]: whiteSpaceAtBeginning.test(value) ? state[name] : value,
      error: ''
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const {optionOneText, optionTwoText, loading} = this.state;

    if (!loading && optionOneText && optionTwoText) {
      const {dispatch, author, history} = this.props;

      this.setState({
        loading: true
      }, () => {
        dispatch(handleSaveQuestion(
          optionOneText.trim(), optionTwoText.trim(), author
        )).then(id => {
          history.push(`/questions/${id}`);
        }).catch(error => {
          this.setState({
            loading: false,
            error
          });
        });
      });
    }
  };

  render() {
    const {optionOneText, optionTwoText, loading, error} = this.state;

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
            {error &&
              <p className="error">{error}</p>
            }
            <button disabled={!(optionOneText && optionTwoText)}>
              {!loading ? 'Submit' : <Spinner />}
            </button>
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