import {RECEIVE_QUESTIONS} from '../actions/questions';
import {SAVE_QUESTION_ANSWER} from '../actions/shared';
import {SAVE_QUESTION} from '../actions/shared';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case SAVE_QUESTION_ANSWER:
      const {authedUser, questionId, answer} = action;
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: state[questionId][answer].votes.concat([authedUser])
          }
        }
      };
    case SAVE_QUESTION:
      const {question} = action;
      return {
        ...state,
        [question.id]: question
      };
    default:
      return state;
  }
};