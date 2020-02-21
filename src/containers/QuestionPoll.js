import React, {Component} from 'react';
import {connect} from 'react-redux';

import {handleSaveQuestionAnswer} from '../actions/shared';

import Spinner from '../components/Spinner';

class QuestionPoll extends Component {
  state = {
    answer: '',
    loading: false,
    error: ''
  }

  handleChange = e => {
    this.setState({
      answer: e.target.value,
      error: ''
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {authedUser, question, dispatch} = this.props;
    const {answer, loading} = this.state;

    if (!loading && answer) {
      this.setState({
        loading: true
      }, () => {
        dispatch(handleSaveQuestionAnswer(
          authedUser,
          question.id,
          answer
        )).then(() => {
          this.setState({
            loading: false
          });
        }).catch(error => {
          this.setState({
            loading: false,
            error
          });
        });
      });
    }
  }

  render() {
    const {answer, loading, error} = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="question-poll">
        <h3 className="poll-title">Would you rather…</h3>
        <ul className="poll-options">
          <li>
            <label>
              <input
                type="radio"
                name="poll-option"
                value="optionOne"
                checked={answer === 'optionOne'}
                onChange={this.handleChange}
              />
              {this.props.question.optionOne.text}
            </label>
          </li>
          <hr className="poll-or" />
          <li>
            <label>
              <input
                type="radio"
                name="poll-option"
                value="optionTwo"
                checked={answer === 'optionTwo'}
                onChange={this.handleChange}
              />
              {this.props.question.optionTwo.text}
            </label>
          </li>
        </ul>
        {error &&
          <p className="error">{error}</p>
        }
        <button
          disabled={!answer}
        >
          {!loading ? 'Submit' : <Spinner />}
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state, {id}) => ({
  authedUser: state.authedUser,
  question: state.questions[id]
});

export default connect(mapStateToProps)(QuestionPoll);
