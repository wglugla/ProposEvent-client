import { createReducer } from '../../../helpers/reducerHelper';

const initialState = {
  tags: [],
};

const actionHandlers = {
  FETCH_TAGS_RECEIVE: (state, action) => {
    console.log('FETCH TAGS RECEIVE PAYLOAD: ', action.payload); // FIXME:
    return Object.assign({}, state, {
      tags: { ...action.payload.data },
    });
  },
  FETCH_TAGS_FAILED: (state, action) => {
    console.log('FETCH TAGS FAILED PAYLOAD: ', action.payload); // FIXME:
    return Object.assign({}, state, {
      tags: { error: action.error },
    });
  },
};

export default createReducer(initialState, actionHandlers);
