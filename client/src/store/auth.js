const SET_AUTH = 'SET_AUTH';
export const CHECK_AUTH = 'CHECK_AUTH';

export const setAuth = (user) => {
  return {
    type: SET_AUTH,
    user,
  };
};

export default function authReducer(state = null, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.user;
    default:
      return state;
  }
}
