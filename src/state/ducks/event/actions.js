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
export const DELETE_EVENT_REQUEST = 'DELETE_EVENT_REQUEST';
export const DELETE_EVENT_RECEIVE = 'DELETE_EVENT_RECEIVE';
export const DELETE_EVENT_FAIL = 'DELETE_EVENT_FAIL';
export const ADD_EVENT_MEMBER_REQUEST = 'ADD_EVENT_MEMBER_REQUEST';
export const ADD_EVENT_MEMBER_RECEIVE = 'ADD_EVENT_MEMBER_RECEIVE';
export const ADD_EVENT_MEMBER_FAIL = 'ADD_EVENT_MEMBER_FAIL';
export const REMOVE_EVENT_MEMBER_REQUEST = 'REMOVE_EVENT_MEMBER_REQUEST';
export const REMOVE_EVENT_MEMBER_RECEIVE = 'REMOVE_EVENT_MEMBER_RECEIVE';
export const REMOVE_EVENT_MEMBER_FAIL = 'REMOVE_EVENT_MEMBER_FAIL';
export const MATCH_EVENTS_REQUEST = 'MATCH_EVENTS_REQUEST';
export const MATCH_EVENTS_RECEIVE = 'MATCH_EVENTS_RECEIVE';
export const MATCH_EVENTS_FAIL = 'MATCH_EVENTS_FAIL';

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

export const fetchEventRequest = (token, id) => ({
  type: FETCH_EVENT_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
  payload: {
    id,
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

export const deleteEventRequest = (token, id) => ({
  type: DELETE_EVENT_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
  payload: {
    event_id: id,
  },
});

export const deleteEventReceive = json => ({
  type: DELETE_EVENT_RECEIVE,
  payload: {
    ...json,
  },
});

export const deleteEventFailed = error => ({
  type: DELETE_EVENT_FAIL,
  error,
});

export const addEventMemberRequest = (token, user_id, event_id) => ({
  type: ADD_EVENT_MEMBER_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
  payload: {
    user_id,
    event_id,
  },
});

export const addEventMemberReceive = json => ({
  type: ADD_EVENT_MEMBER_RECEIVE,
  payload: {
    ...json,
  },
});

export const addEventMemberFailed = error => ({
  type: ADD_EVENT_MEMBER_FAIL,
  error,
});

export const removeEventMemberRequest = (token, user_id, event_id) => ({
  type: REMOVE_EVENT_MEMBER_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
  payload: {
    user_id,
    event_id,
  },
});

export const removeEventMemberReceive = json => ({
  type: REMOVE_EVENT_MEMBER_RECEIVE,
  payload: {
    ...json,
  },
});

export const removeEventMemberFailed = error => ({
  type: REMOVE_EVENT_MEMBER_FAIL,
  error,
});

export const matchEventsRequest = (token, user_id, tags) => ({
  type: MATCH_EVENTS_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  },
  payload: {
    user_id,
    tags,
  },
});

export const matchEventsReceive = json => ({
  type: MATCH_EVENTS_RECEIVE,
  payload: {
    ...json,
  },
});

export const matchEventsFailed = error => ({
  type: MATCH_EVENTS_FAIL,
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
  addEventMemberRequest,
  addEventMemberReceive,
  addEventMemberFailed,
  removeEventMemberRequest,
  removeEventMemberReceive,
  removeEventMemberFailed,
  matchEventsRequest,
  matchEventsReceive,
  matchEventsFailed,
};
