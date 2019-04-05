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
};

export default createReducer(initialState, actionHandlers);
