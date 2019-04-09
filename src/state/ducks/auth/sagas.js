import { takeLatest, put, call } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { userSignupDomain, userSigninDomain } from '../domains';

import {
  registerReceive,
  registerFailed,
  loginReceive,
  loginFailed,
  logoutReceive,
} from './actions';

const registerSagaCall = createSagaApiCall(
  userSignupDomain,
  'POST',
  registerReceive,
  registerFailed
);

export default function* authSaga() {
  yield takeLatest('AUTH_REGISTER_REQUEST', registerSagaCall);
  yield takeLatest('AUTH_LOGIN_REQUEST', function*(action) {
    try {
      const { headers } = action;
      let body = JSON.stringify(action.payload);
      const data = yield call(fetch, userSigninDomain, {
        method: 'POST',
        body,
        headers,
      });
      const json = yield data.json();
      if (json.status) {
        localStorage.setItem('proposEventUserId', json.userId);
        localStorage.setItem('proposEventToken', json.token);
        yield put(loginReceive(json));
      } else {
        yield put(loginFailed(json));
      }
    } catch (error) {
      yield put(loginFailed({ message: 'Error! :(' }));
    }
  });
  yield takeLatest('AUTH_LOGOUT_REQUEST', function*(action) {
    localStorage.removeItem('proposEventToken');
    localStorage.removeItem('proposEventUserId');
    yield put(logoutReceive);
  });
}
