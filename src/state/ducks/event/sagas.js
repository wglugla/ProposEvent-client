import { takeLatest } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { eventCreateDomain } from '../domains';

import { createEventReceive, createEventFailed } from './actions';

const eventCreateSagaCall = createSagaApiCall(
  eventCreateDomain,
  'POST',
  createEventReceive,
  createEventFailed
);

export default function* authSaga() {
  yield takeLatest('CREATE_EVENT_REQUEST', eventCreateSagaCall);
}
