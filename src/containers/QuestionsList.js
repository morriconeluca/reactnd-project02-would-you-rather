import React from 'react';
import {connect} from 'react-redux';

import QuestionCard from './QuestionCard';
import QuestionPreview from './QuestionPreview';

function QuestionsList({questionsIds}) {
  return (
    questionsIds.length === 0
      ? <p>No results</p>
      : <ul className="questions-list centralize wrap">
        {questionsIds.map(id => (
          <li key={id}>
            <QuestionCard id={id}>
              <QuestionPreview id={id} />
            </QuestionCard>
          </li>
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