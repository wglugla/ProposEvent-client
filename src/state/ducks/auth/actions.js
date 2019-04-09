export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';
export const AUTH_REGISTER_RECEIVE = 'AUTH_REGISTER_RECEIVE';
export const AUTH_REGISTER_FAIL = 'AUTH_REGISTER_FAIL';
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_RECEIVE = 'AUTH_LOGIN_RECEIVE';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';
export const LOAD_USER_RECEIVE = 'LOAD_USER_RECEIVE';

export const registerRequest = userData => ({
  type: AUTH_REGISTER_REQUEST,
  payload: userData,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const registerReceive = json => ({
  type: AUTH_REGISTER_RECEIVE,
  payload: {
    ...json,
  },
});

export const registerFailed = error => ({
  type: AUTH_REGISTER_FAIL,
  error,
});

export const loginRequest = userData => ({
  type: AUTH_LOGIN_REQUEST,
  payload: userData,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const loginReceive = json => ({
  type: AUTH_LOGIN_RECEIVE,
  data: {
    ...json,
  },
});

export const loginFailed = error => ({
  type: AUTH_LOGIN_FAIL,
  error,
});

/* When user already has token in localstorage */
export const loadUser = token => ({
  type: LOAD_USER_RECEIVE,
  data: {
    token,
  },
});

export const logoutRequest = () => ({
  type: 'AUTH_LOGOUT_REQUEST',
});

export const logoutReceive = () => ({
  type: 'AUTH_LOGOUT_RECEIVE',
});

export default {
  registerRequest,
  registerReceive,
  registerFailed,
  loginRequest,
  loginReceive,
  loginFailed,
  loadUser,
  logoutRequest,
};
