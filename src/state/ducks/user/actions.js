export const FETCH_USER_RECEIVE = 'FETCH_USER_RECEIVE';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const userRequest = token => ({
  type: FETCH_USER_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
});

export const userFailed = error => ({
  type: FETCH_USER_FAIL,
  error,
});

export const userReceive = json => ({
  type: FETCH_USER_RECEIVE,
  payload: {
    ...json,
  },
});

export default {
  userRequest,
  userReceive,
};
