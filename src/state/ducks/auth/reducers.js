import { createReducer } from '../../../helpers/reducerHelper';

const initialState = {
  registerStatus: {
    done: false,
    fail: false,
    message: '',
  },
  loginStatus: {
    fail: false,
    logged: false,
    token: null,
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
      registerStatus: { done: true, fail: false, message: '' },
    });
  },
  AUTH_LOGIN_FAIL: (state, action) => {
    return Object.assign({}, state, {
      loginStatus: { fail: true },
    });
  },
  AUTH_LOGIN_RECEIVE: (state, action) => {
    const data = action.data;
    localStorage.setItem('proposEventToken', data.token);
    localStorage.setItem('proposEventUserId', data.userId);
    return Object.assign({}, state, {
      loginStatus: { fail: false, logged: true, token: data.token },
    });
  },
  LOAD_USER_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      loginStatus: { fail: false, logged: true, token: action.data.token },
    });
  },
};

const auth = createReducer(initialState, actionHandlers);

export default auth;
