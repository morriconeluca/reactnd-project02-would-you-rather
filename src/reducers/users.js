import {RECEIVE_USERS} from '../actions/users';
import {SAVE_QUESTION_ANSWER} from '../actions/shared';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case SAVE_QUESTION_ANSWER:
      const {authedUser, questionId, answer} = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [questionId]: answer
          }
        }
      };
    default:
      return state;
  }
};