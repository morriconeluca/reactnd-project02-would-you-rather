import React, {Component} from 'react';

import Tab from '../components/Tab';
import QuestionsList from './QuestionsList';

export default class ToggleTabs extends Component {
  state = {
    answered: false
  }

  handleClick = answered => {
    this.setState({
      answered
    });
  }

  render() {
    const {answered} = this.state;

    return (
      <div className="toggle-tabs container">
        <div className="centralize">
          <Tab
            handleClick={this.handleClick}
            active={answered}
            value={false}
          >
            Unanswered
          </Tab>
          <Tab
            handleClick={this.handleClick}
            active={!answered}
            value={true}
          >
            Answered
          </Tab>
        </div>
        <div className="tab-view centralize">
          <QuestionsList answered={answered} />
        </div>
      </div>
    );
  }
}