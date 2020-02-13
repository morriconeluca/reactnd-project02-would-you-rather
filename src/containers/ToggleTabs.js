import React, {Component} from 'react';

import QuestionsList from './QuestionsList';

export default class ToggleTabs extends Component {
  state = {
    answered: false
  }

  handleClick = (e, answered) => {
    e.preventDefault();
    this.setState({
      answered
    });
  }

  render() {
    const {answered} = this.state;

    return (
      <div>
        <div className="centralize">
          <button
            className="tab"
            onClick={e => {this.handleClick(e, false);}}
            disabled={!answered}
          >Unanswered</button>
          <button
            className="tab"
            onClick={e => {this.handleClick(e, true);}}
            disabled={answered}
          >Answered</button>
        </div>
        <div>
          <QuestionsList answered={answered} />
        </div>
      </div>
    );
  }
}