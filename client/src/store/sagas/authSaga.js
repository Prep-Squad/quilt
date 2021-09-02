import { takeEvery, put, call } from 'redux-saga/effects';
import { CHECK_AUTH, CREATE_USER, setAuth } from '../auth';
import { auth } from '../../firebase/firebaseIndex';
import axios from 'axios';

function createUserAxios(user) {
  console.log('user in createuser', user);
  return axios.post('/users/signup', user);
}

export function* checkAuth() {
  let user = auth.currentUser;
  yield put(setAuth(user));
}

export function* authSaga() {
  yield takeEvery(CHECK_AUTH, checkAuth);
}

export function* createUserSaga() {
  yield takeEvery(CREATE_USER, createUser);
}
export function* createUser(action) {
  try {
    let { data } = yield call(createUserAxios, action.user);
    console.log('data from create user', data);
  } catch (error) {
    console.log(error);
  }
}
