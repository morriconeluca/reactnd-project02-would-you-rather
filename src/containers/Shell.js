import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleGetQuestions} from '../actions/questions';

import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

class Shell extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
  };

  render() {
    const {questions, questionsIds} = this.props;

    return (
      <main role="main" className="centralize">
        <Navbar />
        {questionsIds.length === 0
          ? <Loader />
          : (
            <Switch>
              <Route exact path="/" render={() => <p>Home</p>} />
              <Route exact path="/new" render={() => <p>New Poll</p>} />
              <Route exact path="/leaderboard" render={() => <p>Leader Board</p>} />
            </Switch>
          )
        }
      </main>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  questionsIds: Object.keys(state.questions)
})

export default connect(mapStateToProps)(Shell);