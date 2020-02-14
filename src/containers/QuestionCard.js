import React from 'react';
import {connect} from 'react-redux';

import Avatar from './Avatar';

function QuestionCard({question, user, children}) {
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
          {children}
        </section>
      </div>
    </article>
  );
}

const mapStateToProps = (state, {id}) => ({
  question: state.questions[id],
  user: state.users[state.questions[id].author]
});

export default connect(mapStateToProps)(QuestionCard);