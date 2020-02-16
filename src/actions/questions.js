import {_getQuestions} from '../api/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

export function handleGetQuestions() {
  return async dispatch => {
    const questions = await _getQuestions();
    dispatch(receiveQuestions(questions));
  };
};