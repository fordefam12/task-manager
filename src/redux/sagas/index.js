// src/redux/sagas/index.js
import { all } from 'redux-saga/effects';
import { watchFetchTasks } from './taskSagas';
import { watchAuth } from './authSagas';

export default function* rootSaga() {
  yield all([
    watchFetchTasks(),
    watchAuth(),
    // Add more watchers here
  ]);
}
