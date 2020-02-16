import React, {Component} from 'react';
import {connect} from 'react-redux';

import {handleSaveQuestionAnswer} from '../actions/shared';

class QuestionPoll extends Component {
  state = {
    answer: ''
  }

  handleChange = e => {
    this.setState({
      answer: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {authedUser, question, dispatch} = this.props;
    const {answer} = this.state;

    if (answer) {
      dispatch(handleSaveQuestionAnswer(
        authedUser,
        question.id,
        answer
      ));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="question-poll">
        <h3>Would you rather…</h3>
        <ul className="poll-options">
          <li>
            <label>
              <input
                type="radio"
                name="poll-option"
                value="optionOne"
                checked={this.state.answer === 'optionOne'}
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
                checked={this.state.answer === 'optionTwo'}
                onChange={this.handleChange}
              />
              {this.props.question.optionTwo.text}
            </label>
          </li>
        </ul>
        <button
          disabled={!this.state.answer}
        >
          Submit
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
