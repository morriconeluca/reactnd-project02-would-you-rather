import {_saveQuestionAnswer} from '../api/_DATA';
import {_saveQuestion} from '../api/_DATA';

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

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
      return Promise.resolve();
    } catch {
      return Promise.reject('Sorry, there was an error! Try again.');
    }
  };
};

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
};

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return async dispatch => {
    try {
      const question = await _saveQuestion({
        optionOneText,
        optionTwoText,
        author
      });
      dispatch(saveQuestion(question));
      return Promise.resolve();
    } catch {
      return Promise.reject('Sorry, there was an error! Try again.');
    }
  };
};