import { createReducer } from '../../../helpers/reducerHelper';

const initialState = {
  data: {},
};

const actionHandlers = {
  FETCH_USER_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      error: false,
      data: { ...action.payload.data },
    });
  },
  FETCH_USER_FAIL: (state, action) => {
    return Object.assign({}, state, {
      error: true,
    });
  },
  FETCH_USER_EVENTS_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      userEvents: action.payload.data,
    });
  },
  FETCH_USER_EVENTS_FAILED: (state, action) => {
    return Object.assign({}, state, {
      userEventsFail: true,
    });
  },
  FETCH_USER_SIGNED_EVENTS_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      userSignedEvents: action.payload.data,
    });
  },
  FETCH_USER_SIGNED_EVENTS_FAILED: (state, action) => {
    return Object.assign({}, state, {
      userSignedEventsFail: true,
    });
  },
};

export default createReducer(initialState, actionHandlers);
