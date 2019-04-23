import { createReducer } from '../../../helpers/reducerHelper';

const initialState = {
  eventCreateStatus: {
    done: false,
    fail: false,
  },
  events: [],
  currentEvent: {},
  deleting: { status: null, message: null },
};

const actionHandlers = {
  CREATE_EVENT_FAIL: (state, action) => {
    return Object.assign({}, state, {
      eventCreateStatus: { done: false, fail: true },
    });
  },
  CREATE_EVENT_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      eventCreateStatus: {
        done: true,
        fail: false,
      },
    });
  },
  CLEAR_EVENT_INFO: (state, action) => {
    return Object.assign({}, state, {
      eventCreateStatus: {
        done: false,
        fail: false,
      },
    });
  },
  FETCH_EVENT_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      currentEvent: action.payload.data,
    });
  },
  FETCH_EVENT_FAIL: (state, action) => {
    return Object.assign({}, state, {
      currentEventFail: true,
      failText: action,
    });
  },
  FETCH_EVENTS_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      events: action.payload.data,
    });
  },
  FETCH_EVENTS_FAILED: (state, acction) => {
    return Object.assign({}, state, {
      events: false,
    });
  },
  DELETE_EVENT_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      deleting: {
        status: true,
      },
    });
  },
  DELETE_EVENT_FAILED: (state, action) => {
    return Object.assign({}, state, {
      deleting: {
        status: false,
        message: action.error,
      },
    });
  },
};

export default createReducer(initialState, actionHandlers);
