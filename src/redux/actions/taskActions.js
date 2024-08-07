// src/redux/actions/taskActions.js
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';
export const TOGGLE_TASK_COMPLETION = 'TOGGLE_TASK_COMPLETION';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const fetchTasksError = (error) => ({
  type: FETCH_TASKS_ERROR,
  payload: error,
});

export const toggleTaskCompletion = (taskId) => ({
  type: TOGGLE_TASK_COMPLETION,
  payload: taskId,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

// Sagas
export function* fetchTasks() {
  try {
    const response = yield axios.get('http://localhost:5000/tasks');
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksError(error.message));
  }
}

export function* watchFetchTasks() {
  yield takeEvery(FETCH_TASKS_REQUEST, fetchTasks);
}
