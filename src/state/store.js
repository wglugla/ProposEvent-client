import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as rootReducers from './ducks/reducers';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { authSaga, userSaga, eventSaga } from './ducks/sagas';

function* rootSaga() {
  yield all([authSaga(), userSaga(), eventSaga()]);
}

export default function configureStore() {
  const middlewares = [];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const reducers = combineReducers(rootReducers);
  const store = createStore(reducers, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
