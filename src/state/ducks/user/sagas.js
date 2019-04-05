import { takeLatest /*, put, call */ } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { userInfoDomain } from '../domains';

import { userReceive, userFailed } from './actions';

const userSagaCall = createSagaApiCall(
  userInfoDomain(localStorage.proposEventUserId),
  'GET',
  userReceive,
  userFailed
);

export default function* authSaga() {
  yield takeLatest('FETCH_USER_REQUEST', userSagaCall);
}
