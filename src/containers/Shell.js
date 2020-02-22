import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleGetQuestions} from '../actions/questions';

import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import ToggleTabs from './ToggleTabs';

import Question from './Question';
import AddPoll from './AddPoll';

class Shell extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
  };

  render() {
    const {questionsIds, location} = this.props;

    return (
      <main
        role="main"
        className={
          `centralize${location.pathname === '/' ? '-main' : ''}`
        }
      >
        <Navbar />
        {questionsIds.length === 0
          ? <Loader />
          : (
            <Switch>
              <Route exact path="/" component={ToggleTabs} />
              <Route exact path="/add" component={AddPoll} />
              <Route exact path="/leaderboard" render={() => <p>Leader Board</p>} />
              <Route path="/questions/:questionId" component={Question} />
              <Route render={() => <h1>404 Page</h1>} />
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

export default withRouter(connect(mapStateToProps)(Shell));