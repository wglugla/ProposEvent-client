import { call, put } from 'redux-saga/effects';

export const createSagaApiCall = (endpoint, method, success, fail) => {
  return function*(action) {
    try {
      const { headers } = action;
      let body = {};
      if (action.payload) body = JSON.stringify(action.payload);
      else body = null;
      const data = yield call(fetch, endpoint, {
        method: method,
        body,
        headers,
      });
      const json = yield data.json();
      if (json.status) {
        yield put(success(json));
      } else {
        yield put(fail(json));
      }
    } catch (error) {
      console.error(error);
      yield put(fail({ message: 'Error! :(' }));
    }
  };
};
