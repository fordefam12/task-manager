// src/redux/sagas/authSagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* loginUser(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:5000/login', action.payload);
    yield put({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'LOGIN_ERROR', payload: error.message });
  }
}

export function* watchAuth() {
  yield takeEvery('LOGIN_REQUEST', loginUser);
}
