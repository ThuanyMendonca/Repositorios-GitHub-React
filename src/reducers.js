import { combineReducers } from 'redux';

const username = (state = null, action) => {
  console.log({ state, action });
  switch (action.type) {
    case 'LOGIN':
      return action.username;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

export default combineReducers({ username });
