import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_TASKS_REQUEST,
  TOGGLE_TASK_COMPLETION,
  ADD_TASK,
  DELETE_TASK,
  fetchTasksSuccess,
  fetchTasksError,
} from '../actions/taskActions';

function* fetchTasks() {
  try {
    const response = yield call(axios.get, 'http://localhost:5000/tasks');
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksError(error.message));
  }
}

function* watchFetchTasks() {
  yield takeEvery(FETCH_TASKS_REQUEST, fetchTasks);
}

function* toggleTaskCompletion(action) {
  yield put(action);
}

function* watchToggleTaskCompletion() {
  yield takeEvery(TOGGLE_TASK_COMPLETION, toggleTaskCompletion);
}

function* addTask(action) {
  yield put(action);
}

function* watchAddTask() {
  yield takeEvery(ADD_TASK, addTask);
}

function* deleteTask(action) {
  yield put(action);
}

function* watchDeleteTask() {
  yield takeEvery(DELETE_TASK, deleteTask);
}

export default function* rootSaga() {
  yield all([
    watchFetchTasks(),
    watchToggleTaskCompletion(),
    watchAddTask(),
    watchDeleteTask(),
  ]);
}
