import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({ auth: authReducer });
const middleware = composeWithDevTools(
  applyMiddleware(sagaMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
//export * from './auth';

//check auth -- dispatch "check auth"
// listener for 'check auth'
//check auth will check the firebase user
//dispatch set auth
