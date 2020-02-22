import React from 'react';
import {connect} from 'react-redux';

import QuestionCard from './QuestionCard';
import QuestionPoll from './QuestionPoll';
import QuestionResults from './QuestionResults';

function Question({question, user}) {
  if (!question) {
    return (
      <p>The question you are looking doesn't exists.</p>
    );
  }

  return (
    <div className="question container">
      <QuestionCard id={question.id}>
        {question.id in user.answers
          ? <QuestionResults id={question.id} />
          : <QuestionPoll id={question.id} />
        }
      </QuestionCard>
    </div>
  );
}

const mapStateToProps = (state, {match: {params: {questionId}}}) => ({
  question: questionId in state.questions
    ? state.questions[questionId]
    : null,
  user: state.users[state.authedUser]
});

export default connect(mapStateToProps)(Question);