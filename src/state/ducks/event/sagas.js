import { takeLatest } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { eventCreateDomain, eventInfoDomain } from '../domains';

import {
  createEventReceive,
  createEventFailed,
  fetchEventReceive,
  fetchEventFailed,
} from './actions';

const eventCreateSagaCall = createSagaApiCall(
  eventCreateDomain,
  'POST',
  createEventReceive,
  createEventFailed
);

const eventFetchSagaCall = createSagaApiCall(
  eventInfoDomain(1),
  'GET',
  fetchEventReceive,
  fetchEventFailed
);

export default function* authSaga() {
  yield takeLatest('CREATE_EVENT_REQUEST', eventCreateSagaCall);
  yield takeLatest('FETCH_EVENT_REQUEST', eventFetchSagaCall);
}
