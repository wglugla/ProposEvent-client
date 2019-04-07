export const FETCH_USER_RECEIVE = 'FETCH_USER_RECEIVE';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
export const FETCH_USER_EVENTS_REQUEST = 'FETCH_USER_EVENTS_REQUEST';
export const FETCH_USER_EVENTS_RECEIVE = 'FETCH_USER_EVENTS_RECEIVE';
export const FETCH_USER_EVENTS_FAILED = 'FETCH_USER_EVENTS_FAILED';
export const FETCH_USER_SIGNED_EVENTS_REQUEST = 'FETCH_USER_SIGNED_EVENTS_REQUEST';
export const FETCH_USER_SIGNED_EVENTS_RECEIVE = 'FETCH_USER_SIGNED_EVENTS_RECEIVE';
export const FETCH_USER_SIGNED_EVENTS_FAILED = 'FETCH_USER_SIGNED_EVENTS_FAILED';

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

export const userEventsRequest = token => ({
  type: FETCH_USER_EVENTS_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
});

export const userEventsReceive = json => ({
  type: FETCH_USER_EVENTS_RECEIVE,
  payload: {
    ...json,
  },
});

export const userEventsFailed = error => ({
  type: FETCH_USER_EVENTS_FAILED,
  error,
});

export const userSignedEventsRequest = token => ({
  type: FETCH_USER_SIGNED_EVENTS_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
});

export const userSignedEventsReceive = json => ({
  type: FETCH_USER_SIGNED_EVENTS_RECEIVE,
  payload: {
    ...json,
  },
});

export const userSignedEventsFailed = error => ({
  type: FETCH_USER_SIGNED_EVENTS_FAILED,
  error,
});

export default {
  userRequest,
  userReceive,
  userEventsRequest,
  userEventsReceive,
  userEventsFailed,
  userSignedEventsRequest,
  userSignedEventsReceive,
  userSignedEventsFailed,
};
