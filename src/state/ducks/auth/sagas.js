import { takeLatest /*, put, call */ } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { userSignupDomain, userSigninDomain } from '../domains';

import { registerReceive, registerFailed, loginReceive, loginFailed } from './actions';

const registerSagaCall = createSagaApiCall(
  userSignupDomain,
  'POST',
  registerReceive,
  registerFailed
);

const loginSagaCall = createSagaApiCall(userSigninDomain, 'POST', loginReceive, loginFailed);

export default function* authSaga() {
  yield takeLatest('AUTH_REGISTER_REQUEST', registerSagaCall);
  yield takeLatest('AUTH_LOGIN_REQUEST', loginSagaCall);
}
