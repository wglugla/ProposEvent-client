import { takeLatest, put, call } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { push } from 'connected-react-router';
import {
  eventCreateDomain,
  eventInfoDomain,
  eventsDomain,
  eventDeleteDomain,
  eventAddMemberDomain,
  eventRemoveMemberDomain,
  eventMatchDomain,
  eventModifyDomain,
} from '../domains';
import {
  CREATE_EVENT_REQUEST,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENT_REQUEST,
  DELETE_EVENT_REQUEST,
  ADD_EVENT_MEMBER_REQUEST,
  REMOVE_EVENT_MEMBER_REQUEST,
  MATCH_EVENTS_REQUEST,
  MODIFY_EVENT_REQUEST,
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
  addEventMemberReceive,
  addEventMemberFailed,
  removeEventMemberReceive,
  removeEventMemberFailed,
  matchEventsReceive,
  matchEventsFailed,
  modifyEventReceive,
  modifyEventFailed,
} from './actions';

function* eventCreateSagaCall(action) {
  try {
    const { headers } = action;
    let body = {};
    if (action.payload) body = JSON.stringify(action.payload);
    else body = null;
    const data = yield call(fetch, eventCreateDomain(), {
      method: 'POST',
      body,
      headers,
    });
    const json = yield data.json();
    if (json.status) {
      yield put(createEventReceive(json));
      yield put(
        push({
          pathname: '/dashboard',
          message: 'Wydarzenie utworzone pomyślnie!',
        })
      );
    } else {
      console.warn(json);
      yield put(createEventFailed(json));
    }
  } catch (error) {
    console.error(error);
    yield put(createEventFailed({ message: 'Error! :(' }));
  }
}

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
      yield put(
        push({
          pathname: '/dashboard',
          message: 'Wydarzenie usunięte pomyślnie!',
        })
      );
    } else {
      yield put(deleteEventFailed(json));
    }
  } catch (error) {
    yield put(deleteEventFailed(error));
  }
}

function* addMemberSagaCall(action) {
  try {
    const { headers, payload } = action;
    let body = JSON.stringify(payload);
    const data = yield call(fetch, eventAddMemberDomain(), {
      method: 'POST',
      headers,
      body,
    });
    const json = yield data.json();
    if (json.status) {
      yield put(addEventMemberReceive(json));
      yield put(
        push({
          pathname: '/dashboard',
          message: 'Pomyślnie dołączono do wydarzenia!',
        })
      );
    } else {
      yield put(addEventMemberFailed(json));
    }
  } catch (error) {
    yield put(addEventMemberFailed(error));
  }
}

function* removeMemberSagaCall(action) {
  try {
    const { headers, payload } = action;
    let body = JSON.stringify(payload);
    const data = yield call(fetch, eventRemoveMemberDomain(), {
      method: 'POST',
      headers,
      body,
    });
    const json = yield data.json();
    if (json.status) {
      yield put(removeEventMemberReceive(json));
      yield put(
        push({
          pathname: '/dashboard',
          message: 'Pomyślnie opuszczono wydarzenie!',
        })
      );
    } else {
      yield put(removeEventMemberFailed(json));
    }
  } catch (error) {
    yield put(removeEventMemberFailed(error));
  }
}

function* matchEventsSagaCall(action) {
  try {
    const { headers, payload } = action;
    const { user_id, tags } = payload;
    const data = yield call(fetch, eventMatchDomain(user_id, JSON.stringify(tags)), {
      method: 'GET',
      headers,
    });
    const json = yield data.json();
    if (json.status) {
      json.data.sort((a, b) => {
        if (a.accuracyPercentage <= b.accuracyPercentage) {
          return 1;
        }
        return -1;
      });
      yield put(matchEventsReceive(json));
    } else {
      yield put(matchEventsFailed(json));
    }
  } catch (error) {
    yield put(matchEventsFailed(error));
  }
}

function* modifyEventSagaCall(action) {
  try {
    const { headers } = action;
    const { event_id } = action.payload;
    let body = {};
    if (action.payload) body = JSON.stringify(action.payload.eventData);
    else body = null;
    const data = yield call(fetch, eventModifyDomain(event_id), {
      method: 'POST',
      body,
      headers,
    });
    const json = yield data.json();
    if (json.status) {
      yield put(modifyEventReceive(json));
      yield put(
        push({
          pathname: '/dashboard',
          message: 'Wydarzenie zmodyfikowane pomyślnie!',
        })
      );
    } else {
      console.warn(json);
      yield put(modifyEventFailed(json));
    }
  } catch (error) {
    console.error(error);
    yield put(modifyEventFailed({ message: 'Error! :(' }));
  }
}

export default function* authSaga() {
  yield takeLatest(CREATE_EVENT_REQUEST, eventCreateSagaCall);
  yield takeLatest(FETCH_EVENT_REQUEST, eventFetchSagaCall);
  yield takeLatest(FETCH_EVENTS_REQUEST, eventsFetchSagaCall);
  yield takeLatest(DELETE_EVENT_REQUEST, eventDeleteSagaCall);
  yield takeLatest(ADD_EVENT_MEMBER_REQUEST, addMemberSagaCall);
  yield takeLatest(REMOVE_EVENT_MEMBER_REQUEST, removeMemberSagaCall);
  yield takeLatest(MATCH_EVENTS_REQUEST, matchEventsSagaCall);
  yield takeLatest(MODIFY_EVENT_REQUEST, modifyEventSagaCall);
}
