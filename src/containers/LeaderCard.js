import React from 'react';
import {connect} from 'react-redux';

import Avatar from './Avatar';

function LeaderCard({user}) {
  const answers = Object.keys(user.answers).length;
  const created = user.questions.length;

  return (
    <article className="leader-card card">
      <div className="card-body">
        <Avatar
          className="card-avatar"
          id={user.id}
        />
        <h2>{user.name}</h2>
        <section className="card">
          <header className="card-header">
            <h3 className="score">
              <span className="score-badge">SCORE</span>
              {answers + created}
            </h3>
          </header>
          <p className="score-details">Answers: {answers}</p>
          <hr/>
          <p className="score-details">Questions: {created}</p>
        </section>
      </div>
    </article>
  );
}

const mapStateToProps = ({users}, {id}) => ({
  user: users[id]
});

export default connect(mapStateToProps)(LeaderCard);