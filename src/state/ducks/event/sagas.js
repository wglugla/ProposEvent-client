import { takeLatest } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { eventCreateDomain, eventInfoDomain, eventsDomain } from '../domains';
import { CREATE_EVENT_REQUEST, FETCH_EVENTS_REQUEST, FETCH_EVENT_REQUEST } from './actions';

import {
  createEventReceive,
  createEventFailed,
  fetchEventReceive,
  fetchEventFailed,
  fetchEventsReceive,
  fetchEventsFailed,
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

const eventsFetchSagaCall = createSagaApiCall(
  eventsDomain,
  'GET',
  fetchEventsReceive,
  fetchEventsFailed
);

export default function* authSaga() {
  yield takeLatest(CREATE_EVENT_REQUEST, eventCreateSagaCall);
  yield takeLatest(FETCH_EVENT_REQUEST, eventFetchSagaCall);
  yield takeLatest(FETCH_EVENTS_REQUEST, eventsFetchSagaCall);
}
