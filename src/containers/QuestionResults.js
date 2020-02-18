import React from 'react';
import {connect} from 'react-redux';

function getPercent(points, votes) {
  return (points / votes * 100).toFixed(2);
}

function QuestionResults({authedUser, question}) {
  const one = question.optionOne.votes.length,
    two = question.optionTwo.votes.length,
    votes = one + two;

  return (
    <div className="question-results">
      <h3 className="question-results-title">
        Results:<br />
        <span className="question-results-subtitle">
          Would you rather…
        </span>
      </h3>
      <figure>
        <label htmlFor="option-one">
          {question.optionOne.text}
        </label>
        <meter id="option-one"
          min="0"
          max="100"
          low="25"
          high="49"
          optimum="75"
          value={getPercent(one, votes)}
        >
          {getPercent(one, votes)}%
        </meter>
        <figcaption>
          {
            question.optionOne.votes.includes(authedUser) &&
            <span className="your-vote">YOUR VOTE</span>
          }
          {one} out of {votes} votes
        </figcaption>
      </figure>
      <hr className="results-or"/>
      <figure>
        <label htmlFor="option-two">
          {question.optionTwo.text}
        </label>
        <meter id="option-two"
          min="0"
          max="100"
          low="25"
          high="49"
          optimum="75"
          value={getPercent(two, votes)}
        >
          {getPercent(two, votes)}%
        </meter>
        <figcaption>
          {
            question.optionTwo.votes.includes(authedUser) &&
            <span className="your-vote">YOUR VOTE</span>
          }
          {two} out of {votes} votes
        </figcaption>
      </figure>
    </div>
  );
}

const mapStateToProps = (state, {id}) => ({
  authedUser: state.authedUser,
  question: state.questions[id]
});

export default connect(mapStateToProps)(QuestionResults);