import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Avatar from '../containers/Avatar';

function Question({question, user}) {
  return (
    <article className="question card">
      <header className="card-header">
        <h2 className="card-title">
          {user.name} asks:
        </h2>
      </header>
      <div className="card-body centralize">
        <Avatar
          className="card-avatar"
          id={user.id}
        />
        <section className="question-details">
          <h3 className="question-preview">
            Would you rather…<br />
            <span className="question-preview-inner">
              {question.optionOne.text} or…
            </span>
          </h3>
          <Link
            to={`/question/${question.id}`}
            className="button small"
          >
            View Poll
          </Link>
        </section>
      </div>
    </article>
  );
}

const mapStateToProps = (state, {id}) => ({
  question: state.questions[id],
  user: state.users[state.questions[id].author]
});

export default connect(mapStateToProps)(Question);