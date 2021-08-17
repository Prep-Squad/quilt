import { takeEvery, put } from 'redux-saga/effects';
import { CHECK_AUTH, setAuth } from '../auth';
import { auth } from '../../firebase/firebaseIndex';

export function* checkAuth() {
  let user = auth.currentUser;
  yield put(setAuth(user));
}

export function* authSaga() {
  yield takeEvery(CHECK_AUTH, checkAuth);
}
