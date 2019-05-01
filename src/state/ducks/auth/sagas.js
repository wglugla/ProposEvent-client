import { takeLatest, put, call } from 'redux-saga/effects';
import { getUserId, getToken } from '../../../helpers/localStorageHelper';
import { push } from 'connected-react-router';
import { userSignupDomain, userSigninDomain, userInfoDomain } from '../domains';
import {
  AUTH_LOGIN_REQUEST,
  AUTH_REGISTER_REQUEST,
  AUTH_LOGOUT_REQUEST,
  LOAD_USER_REQUEST,
} from './actions';

import {
  registerReceive,
  registerFailed,
  loginReceive,
  loginFailed,
  loadUserReceive,
  loadUserFailed,
} from './actions';

function* registerSagaCall(action) {
  try {
    const { headers } = action;
    let body = {};
    if (action.payload) body = JSON.stringify(action.payload);
    else body = null;
    const data = yield call(fetch, userSignupDomain(), {
      method: 'POST',
      body,
      headers,
    });
    const json = yield data.json();
    if (json.status) {
      yield put(registerReceive(json));
      yield put(push('/login'));
    } else {
      yield put(registerFailed(json));
    }
  } catch (error) {
    yield put(registerFailed({ message: 'Error! :(' }));
  }
}

function* loginSagaCall(action) {
  try {
    const { headers } = action;
    let body = JSON.stringify(action.payload);
    const data = yield call(fetch, userSigninDomain(), {
      method: 'POST',
      body,
      headers,
    });
    const json = yield data.json();
    if (json.status) {
      localStorage.setItem('proposEventUserId', json.userId);
      localStorage.setItem('proposEventToken', json.token);
      yield put(loginReceive(json));
      yield put(push('/dashboard'));
    } else {
      yield put(loginFailed(json));
    }
  } catch (error) {
    yield put(loginFailed({ message: 'Error! :(' }));
  }
}

function* logoutSagaCall(action) {
  localStorage.removeItem('proposEventToken');
  localStorage.removeItem('proposEventUserId');
  yield put(push('/login'));
}

function* authLoggedUser(action) {
  try {
    const { headers } = action;
    const data = yield call(fetch, userInfoDomain(getUserId()), {
      method: 'GET',
      headers,
    });
    const json = yield data.json();
    if (json.status) {
      yield put(loadUserReceive(getToken()));
      yield put(push('/dashboard'));
    } else {
      localStorage.removeItem('proposEventToken');
      localStorage.removeItem('proposEventUserId');
      yield put(loadUserFailed(json));
    }
  } catch (error) {
    localStorage.removeItem('proposEventToken');
    localStorage.removeItem('proposEventUserId');
    yield put(loadUserFailed({ message: 'Error! :(' }));
  }
}

export default function* authSaga() {
  yield takeLatest(AUTH_REGISTER_REQUEST, registerSagaCall);
  yield takeLatest(AUTH_LOGIN_REQUEST, loginSagaCall);
  yield takeLatest(AUTH_LOGOUT_REQUEST, logoutSagaCall);
  yield takeLatest(LOAD_USER_REQUEST, authLoggedUser);
}
