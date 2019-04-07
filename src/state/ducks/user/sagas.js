import { takeLatest /*, put, call */ } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { userInfoDomain, userEventsDomain, userSignedEventsDomain } from '../domains';

import {
  userReceive,
  userFailed,
  userEventsReceive,
  userEventsFailed,
  userSignedEventsReceive,
  userSignedEventsFailed,
} from './actions';

const userSagaCall = createSagaApiCall(
  userInfoDomain(localStorage.proposEventUserId),
  'GET',
  userReceive,
  userFailed
);

const userEventsSagaCall = createSagaApiCall(
  userEventsDomain(localStorage.proposEventUserId),
  'GET',
  userEventsReceive,
  userEventsFailed
);
const userSignedEventsSagaCall = createSagaApiCall(
  userSignedEventsDomain(localStorage.proposEventUserId),
  'GET',
  userSignedEventsReceive,
  userSignedEventsFailed
);

export default function* eventSaga() {
  yield takeLatest('FETCH_USER_REQUEST', userSagaCall);
  yield takeLatest('FETCH_USER_EVENTS_REQUEST', userEventsSagaCall);
  yield takeLatest('FETCH_USER_SIGNED_EVENTS_REQUEST', userSignedEventsSagaCall);
}
