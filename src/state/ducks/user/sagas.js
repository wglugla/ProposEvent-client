import { takeLatest } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { userInfoDomain, userEventsDomain, userSignedEventsDomain } from '../domains';
import { getUserId } from '../../../helpers/localStorageHelper';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_EVENTS_REQUEST,
  FETCH_USER_SIGNED_EVENTS_REQUEST,
} from './actions';

import {
  userReceive,
  userFailed,
  userEventsReceive,
  userEventsFailed,
  userSignedEventsReceive,
  userSignedEventsFailed,
} from './actions';

const userSagaCall = createSagaApiCall(userInfoDomain, 'GET', userReceive, userFailed, getUserId);

const userEventsSagaCall = createSagaApiCall(
  userEventsDomain,
  'GET',
  userEventsReceive,
  userEventsFailed,
  getUserId
);
const userSignedEventsSagaCall = createSagaApiCall(
  userSignedEventsDomain,
  'GET',
  userSignedEventsReceive,
  userSignedEventsFailed,
  getUserId
);

export default function* eventSaga() {
  yield takeLatest(FETCH_USER_REQUEST, userSagaCall);
  yield takeLatest(FETCH_USER_EVENTS_REQUEST, userEventsSagaCall);
  yield takeLatest(FETCH_USER_SIGNED_EVENTS_REQUEST, userSignedEventsSagaCall);
}
