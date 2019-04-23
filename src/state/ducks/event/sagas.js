import { takeLatest, put, call } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { eventCreateDomain, eventInfoDomain, eventsDomain, eventDeleteDomain } from '../domains';
import {
  CREATE_EVENT_REQUEST,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENT_REQUEST,
  DELETE_EVENT_REQUEST,
} from './actions';

import {
  createEventReceive,
  createEventFailed,
  fetchEventReceive,
  fetchEventFailed,
  fetchEventsReceive,
  fetchEventsFailed,
  deleteEventReceive,
  deleteEventFailed,
} from './actions';

const eventCreateSagaCall = createSagaApiCall(
  eventCreateDomain,
  'POST',
  createEventReceive,
  createEventFailed
);

function* eventFetchSagaCall(action) {
  try {
    const { headers, payload } = action;
    const data = yield call(fetch, eventInfoDomain(payload.id), {
      method: 'GET',
      headers,
    });
    const json = yield data.json();
    if (json.status) {
      yield put(fetchEventReceive(json));
    } else {
      yield put(fetchEventFailed(json));
    }
  } catch (error) {
    yield put(fetchEventFailed(error));
  }
}

const eventsFetchSagaCall = createSagaApiCall(
  eventsDomain,
  'GET',
  fetchEventsReceive,
  fetchEventsFailed
);

function* eventDeleteSagaCall(action) {
  try {
    const { headers, payload } = action;
    const data = yield call(fetch, eventDeleteDomain(payload.event_id), {
      method: 'DELETE',
      headers,
    });
    const json = yield data.json();
    if (json.status) {
      yield put(deleteEventReceive(json));
    } else {
      yield put(deleteEventFailed(json));
    }
  } catch (error) {
    yield put(deleteEventFailed(error));
  }
}

export default function* authSaga() {
  yield takeLatest(CREATE_EVENT_REQUEST, eventCreateSagaCall);
  yield takeLatest(FETCH_EVENT_REQUEST, eventFetchSagaCall);
  yield takeLatest(FETCH_EVENTS_REQUEST, eventsFetchSagaCall);
  yield takeLatest(DELETE_EVENT_REQUEST, eventDeleteSagaCall);
}
