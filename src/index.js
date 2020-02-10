import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
import {handleGetUsers} from './actions/users';
import {handleGetQuestions} from './actions/questions';

store.dispatch(handleGetUsers());
store.dispatch(handleGetQuestions());

ReactDOM.render(<App />, document.getElementById('root'));