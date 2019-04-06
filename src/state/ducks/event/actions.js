export const CREATE_EVENT_REQUEST = 'CREATE_EVENT_REQUEST';
export const CREATE_EVENT_RECEIVE = 'CREATE_EVENT_RECEIVE';
export const CREATE_EVENT_FAIL = 'CREATE_EVENT_FAIL';

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

export default {
  createEventRequest,
  createEventReceive,
  createEventFailed,
};
