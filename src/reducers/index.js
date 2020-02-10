import {combineReducers} from 'redux';

import users from './users';
import questions from './questions';

const reducer = combineReducers({
  users,
  questions
});

export default reducer;