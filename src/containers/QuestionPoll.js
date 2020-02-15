import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionPoll extends Component {
  state = {
    answer: ''
  }

  handleChange = e => {
    this.setState({
      answer: e.target.value
    });
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
          className=""
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state, {id}) => ({
  question: state.questions[id]
});

export default connect(mapStateToProps)(QuestionPoll);
