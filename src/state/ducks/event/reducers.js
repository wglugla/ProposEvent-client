import { createReducer } from '../../../helpers/reducerHelper';

const initialState = {
  eventCreateStatus: {
    done: false,
    fail: false,
  },
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
};

export default createReducer(initialState, actionHandlers);
