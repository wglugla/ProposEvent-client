import { takeLatest /*, put, call */ } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { userSignupDomain } from '../domains';

import { registerReceive, registerFailed } from './actions';

const registerSagaCall = createSagaApiCall(
  userSignupDomain,
  'POST',
  registerReceive,
  registerFailed
);

export default function* authSaga() {
  yield takeLatest('AUTH_REGISTER_REQUEST', registerSagaCall);
}
