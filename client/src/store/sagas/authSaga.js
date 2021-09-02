import { takeEvery, put, call } from 'redux-saga/effects';
import { CHECK_AUTH, setAuth } from '../auth';
import { auth } from '../../firebase/firebaseIndex';
import axios from 'axios'

function createUser(id, email){
  return axios.request({
    method: 'post',
    url: '/users/signup',
    data: { id, email }
  })
}

export function* checkAuth() {
  let user = auth.currentUser;
  yield put(setAuth(user));
}

export function* authSaga() {
  yield takeEvery(CHECK_AUTH, checkAuth);
}

export function* createUserSaga(){
  try {
    let { data } = yield call(createUser)
    yield 
  } catch (error) {
    console.log(error)
  }
}
