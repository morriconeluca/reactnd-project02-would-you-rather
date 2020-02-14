import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function QuestionPreview({question}) {
  return (
    <>
      <h3 className="question-preview">
        Would you rather…<br />
        <span className="question-preview-inner">
          {question.optionOne.text} or…
        </span>
      </h3>
      <Link
        to={`/questions/${question.id}`}
        className="button small"
      >
        View Poll
      </Link>
    </>
  );
}

const mapStateToProps = (state, {id}) => ({
  question: state.questions[id]
});

export default connect(mapStateToProps)(QuestionPreview);