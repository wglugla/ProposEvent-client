import { createReducer } from '../../../helpers/reducerHelper';

const initialState = {
  registerStatus: {
    fail: false,
    message: '',
  },
};

const actionHandlers = {
  AUTH_REGISTER_FAIL: (state, action) => {
    return Object.assign({}, state, {
      registerStatus: { fail: true, message: action.error.error },
    });
  },
};

export default createReducer(initialState, actionHandlers);