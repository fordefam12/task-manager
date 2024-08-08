// src/redux/selectors/taskSelectors.js
import { createSelector } from 'reselect';

const getTasksState = (state) => state.tasks;

export const getAllTasks = createSelector(
  [getTasksState],
  (tasksState) => tasksState.tasks
);

export const getCompletedTasks = createSelector(
  [getAllTasks],
  (tasks) => tasks.filter(task => task.completed)
);

export const getPendingTasks = createSelector(
  [getAllTasks],
  (tasks) => tasks.filter(task => !task.completed)
);
