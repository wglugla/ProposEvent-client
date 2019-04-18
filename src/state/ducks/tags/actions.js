export const FETCH_TAGS_REQUEST = 'FETCH_TAGS_REQUEST';
export const FETCH_TAGS_RECEIVE = 'FETCH_TAGS_RECEIVE';
export const FETCH_TAGS_FAILED = 'FETCH_TAGS_FAILED';

export const tagsRequest = () => ({
  type: FETCH_TAGS_REQUEST,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const tagsReceive = json => ({
  type: FETCH_TAGS_RECEIVE,
  payload: {
    ...json,
  },
});

export const tagsFailed = error => ({
  type: FETCH_TAGS_FAILED,
  error,
});

export default (tagsRequest, tagsReceive, tagsFailed);
