import { createReducer } from '../../../helpers/reducerHelper';

const initialState = {
  user: {},
};

const actionHandlers = {
  FETCH_USER_RECEIVE: (state, action) => {
    console.log(action);
    return Object.assign({}, state, {
      user: { ...action.payload.data },
    });
  },
  FETCH_USER_FAIL: (state, action) => {
    return Object.assign({}, state, {
      user: action,
    });
  },
};

export default createReducer(initialState, actionHandlers);
