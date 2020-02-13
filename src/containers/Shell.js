import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleGetQuestions} from '../actions/questions';

import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import QuestionsList from './QuestionsList';

class Shell extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
  };

  render() {
    const {questionsIds} = this.props;

    return (
      <main role="main" className="centralize">
        <Navbar />
        {questionsIds.length === 0
          ? <Loader />
          : (
            <Switch>
              <Route exact path="/" render={() => <QuestionsList answered />} />
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
  questionsIds: Object.keys(state.questions)
})

export default connect(mapStateToProps)(Shell);