import React from 'react';
import {connect} from 'react-redux';

function QuestionsList({questionsIds}) {
  return (
    questionsIds.length === 0
      ? <p>No questions</p>
      : <ul>
        {questionsIds.map(id => (
          <li key={id}>{id}</li>
        ))}
      </ul>
  );
}

const mapStateToProps = (state, {answered}) => {
  const answers = Object.keys(state.users[state.authedUser].answers);
  const questionsIds = answered
    ? answers
    : Object.keys(state.questions).filter(id => !answers.includes(id));

  return {
    questionsIds: questionsIds.sort((a, b) => (
      state.questions[b].timestamp - state.questions[a].timestamp
    ))
  }
};

export default connect(mapStateToProps)(QuestionsList);