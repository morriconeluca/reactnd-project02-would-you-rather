import {_getUsers} from '../api/_DATA';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export function handleGetUsers() {
  return async dispatch => {
    const users = await _getUsers();
    dispatch(receiveUsers(users));
  };
};