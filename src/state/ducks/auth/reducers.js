import { createReducer } from '../../../helpers/reducerHelper';

const initialState = {
  token: null,
  registerStatus: {
    done: false,
    fail: false,
    message: '',
  },
  loginStatus: {
    logged: false,
    fail: false,
    message: '',
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
      registerStatus: { done: true, fail: false, message: '' },
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
  AUTH_LOGIN_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      token: action.data.token,
      loginStatus: { logged: true, fail: false, message: '' },
    });
  },
  LOAD_USER_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      loginStatus: { fail: false, logged: true, token: action.data.token },
    });
  },
  AUTH_LOGOUT_RECEIVE: (state, action) => {
    return Object.assign({}.state, {
      loginStatus: { fail: false, logged: false, token: null },
    });
  },
};

const auth = createReducer(initialState, actionHandlers);

export default auth;
