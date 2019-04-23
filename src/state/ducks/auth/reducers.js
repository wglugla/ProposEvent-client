import { createReducer } from '../../../helpers/reducerHelper';

const initialState = {
  token: null,
  registerStatus: {
    done: false,
    fail: false,
    message: null,
  },
  loginStatus: {
    logged: null,
    fail: false,
    message: null,
  },
};

const actionHandlers = {
  AUTH_REGISTER_FAIL: (state, action) => {
    return Object.assign({}, state, {
      registerStatus: { done: true, fail: true, message: action.error.error },
    });
  },
  AUTH_REGISTER_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      token: null,
      registerStatus: { done: true, fail: false, message: null },
    });
  },
  AUTH_LOGIN_FAIL: (state, action) => {
    return Object.assign({}, state, {
      loginStatus: {
        logged: false,
        fail: true,
        message: action.error.message,
      },
    });
  },
  LOAD_USER_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      loginStatus: { fail: false, logged: true, token: action.token },
    });
  },
  LOAD_USER_FAIL: (state, action) => {
    return Object.assign({}, state, {
      loginStatus: { fail: true, logged: false, token: null },
    });
  },
  AUTH_LOGIN_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      token: action.data.token,
      loginStatus: { logged: true, fail: false, message: null },
    });
  },
};

const auth = createReducer(initialState, actionHandlers);

export default auth;
