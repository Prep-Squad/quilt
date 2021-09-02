import { all } from 'redux-saga/effects';
import { authSaga, createUserSaga } from './authSaga';

export default function* rootSaga() {
  yield all([authSaga(), createUserSaga()]);
}
