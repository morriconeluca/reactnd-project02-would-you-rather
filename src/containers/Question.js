import React from 'react';
import {connect} from 'react-redux';

import QuestionCard from './QuestionCard';
import QuestionPoll from './QuestionPoll';

function Question({question, user}) {
  return (
    <div className="question container">
      <QuestionCard id={question.id}>
        {question.id in user.answers
          ? `I have answered to this question: ${question.id}`
          : <QuestionPoll id={question.id} />
        }
      </QuestionCard>
    </div>
  );
}

const mapStateToProps = (state, {match: {params: {questionId}}}) => ({
  question: state.questions[questionId],
  user: state.users[state.authedUser]
});

export default connect(mapStateToProps)(Question);