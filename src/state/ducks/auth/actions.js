export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';

export const registerRequest = userData => ({
  type: AUTH_REGISTER_REQUEST,
  payload: userData,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const registerReceive = json => ({
  type: 'AUTH_REGISTER_RECEIVE',
  payload: {
    ...json,
  },
});

export const registerFailed = error => ({
  type: 'AUTH_REGISTER_FAIL',
  error,
});

export default { registerRequest, registerReceive, registerFailed };
