import React from 'react';
import {connect} from 'react-redux';

import Avatar from './Avatar';

function QuestionCard({id, answers, author, children}) {
  return (
    <article className="question card">
      <header className="card-header">
        <h2 className="card-title">
          {
            id in answers
              ? `By ${author.name}`
              : `${author.name} asks:`
          }
        </h2>
      </header>
      <div className="card-body centralize">
        <Avatar
          className="card-avatar"
          id={author.id}
        />
        <section className="question-details">
          {children}
        </section>
      </div>
    </article>
  );
}

const mapStateToProps = (state, {id}) => ({
  answers: state.users[state.authedUser].answers,
  author: state.users[state.questions[id].author]
});

export default connect(mapStateToProps)(QuestionCard);