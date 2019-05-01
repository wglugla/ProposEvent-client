import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as rootReducers from './ducks/reducers';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { authSaga, userSaga, eventSaga, tagsSaga } from './ducks/sagas';

function* rootSaga() {
  yield all([authSaga(), userSaga(), eventSaga(), tagsSaga()]);
}

export const history = createBrowserHistory();

const createRootReducerWithHistory = history =>
  combineReducers({
    router: connectRouter(history),
    globalError: false,
    ...rootReducers,
  });

export function configureStore() {
  const middlewares = [];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  middlewares.push(routerMiddleware(history));
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const reducers = createRootReducerWithHistory(history);
  const store = createStore(reducers, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
