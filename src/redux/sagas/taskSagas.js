// src/redux/sagas/taskSagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTasks() {
  try {
    const response = yield call(axios.get, 'http://localhost:5000/tasks');
    yield put({ type: 'FETCH_TASKS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_TASKS_ERROR', payload: error.message });
  }
}

export function* watchFetchTasks() {
  yield takeEvery('FETCH_TASKS_REQUEST', fetchTasks);
}
