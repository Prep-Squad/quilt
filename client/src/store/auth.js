import { auth } from '../firebase/firebaseIndex';

const SET_AUTH = 'SET_AUTH';

const setAuth = (user) => ({
  type: SET_AUTH,
  user,
});

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
