import { call, put } from 'redux-saga/effects';

export const createSagaApiCall = (endpoint, method, success, fail) => {
  return function*(action) {
    try {
      const { headers } = action;
      let body = {};
      if (action.payload) body = JSON.stringify(action.payload);
      const data = yield call(fetch, endpoint, {
        method: method,
        body,
        headers,
      });
      const json = yield data.json();
      if (json.success) {
        yield put(success(json.data));
      } else {
        yield put(fail(json));
      }
    } catch (error) {
      yield put(fail({ message: 'Error! :(' }));
    }
  };
};
