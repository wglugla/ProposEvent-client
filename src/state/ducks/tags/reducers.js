import { createReducer } from '../../../helpers/reducerHelper';

const initialState = {
  tags: [],
};

const actionHandlers = {
  FETCH_TAGS_RECEIVE: (state, action) => {
    return Object.assign({}, state, {
      tags: { ...action.payload.data },
    });
  },
  FETCH_TAGS_FAILED: (state, action) => {
    return Object.assign({}, state, {
      tags: { error: action.error },
    });
  },
};

export default createReducer(initialState, actionHandlers);
