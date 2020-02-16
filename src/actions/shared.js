import {_saveQuestionAnswer} from '../api/_DATA';

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function saveQuestionAnswer(authedUser, questionId, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    questionId,
    answer
  }
};

export function handleSaveQuestionAnswer(authedUser, questionId, answer) {
  return async dispatch => {
    try {
      await _saveQuestionAnswer({authedUser, qid: questionId, answer});
      dispatch(saveQuestionAnswer(authedUser, questionId, answer));
    } catch {
      alert('Sorry, there was an error! Try again.');
    }
  };
};