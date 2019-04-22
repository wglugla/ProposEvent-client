export const CREATE_EVENT_REQUEST = 'CREATE_EVENT_REQUEST';
export const CREATE_EVENT_RECEIVE = 'CREATE_EVENT_RECEIVE';
export const CREATE_EVENT_FAIL = 'CREATE_EVENT_FAIL';
export const CLEAR_EVENT_INFO = 'CLEAR_EVENT_INFO';
export const FETCH_EVENT_REQUEST = 'FETCH_EVENT_REQUEST';
export const FETCH_EVENT_RECEIVE = 'FETCH_EVENT_RECEIVE';
export const FETCH_EVENT_FAIL = 'FETCH_EVENT_FAIL';
export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_RECEIVE = 'FETCH_EVENTS_RECEIVE';
export const FETCH_EVENTS_FAIL = 'FETCH_EVENTS_FAIL';

export const createEventRequest = (eventData, token) => ({
  type: CREATE_EVENT_REQUEST,
  payload: eventData,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
});

export const createEventReceive = json => ({
  type: CREATE_EVENT_RECEIVE,
  payload: {
    ...json,
  },
});

export const createEventFailed = error => ({
  type: CREATE_EVENT_FAIL,
  error,
});

export const clearEventInfo = () => ({
  type: CLEAR_EVENT_INFO,
});

export const fetchEventRequest = token => ({
  type: FETCH_EVENT_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
});

export const fetchEventReceive = json => ({
  type: FETCH_EVENT_RECEIVE,
  payload: {
    ...json,
  },
});

export const fetchEventFailed = error => ({
  type: FETCH_EVENT_FAIL,
  error,
});

export const fetchEventsRequest = token => ({
  type: FETCH_EVENTS_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
});

export const fetchEventsReceive = json => ({
  type: FETCH_EVENTS_RECEIVE,
  payload: {
    ...json,
  },
});

export const fetchEventsFailed = error => ({
  type: FETCH_EVENTS_FAIL,
  error,
});

export default {
  createEventRequest,
  createEventReceive,
  createEventFailed,
  clearEventInfo,
  fetchEventRequest,
  fetchEventReceive,
  fetchEventFailed,
  fetchEventsRequest,
  fetchEventsReceive,
  fetchEventsFailed,
};
