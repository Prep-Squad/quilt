import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({ auth: authReducer });
const middleware = composeWithDevTools(
  applyMiddleware(sagaMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;
//export * from './auth';
