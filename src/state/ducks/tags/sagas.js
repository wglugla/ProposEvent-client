import { takeLatest } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/sagaHelper';
import { tagsDomain } from '../domains';
import { FETCH_TAGS_REQUEST } from './actions';

import { tagsReceive, tagsFailed } from './actions';

const tagsSagaCall = createSagaApiCall(tagsDomain, 'GET', tagsReceive, tagsFailed);

export default function* tagsSaga() {
  yield takeLatest(FETCH_TAGS_REQUEST, tagsSagaCall);
}
