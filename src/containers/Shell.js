import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleGetQuestions} from '../actions/questions';

import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import ToggleTabs from './ToggleTabs';

import Question from './Question';
import NewPoll from './NewPoll';

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
              <Route exact path="/" component={ToggleTabs} />
              <Route exact path="/new" component={NewPoll} />
              <Route exact path="/leaderboard" render={() => <p>Leader Board</p>} />
              <Route path="/questions/:questionId" component={Question} />
              <Route render={() => <p>404 Page</p>} />
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