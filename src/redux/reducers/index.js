// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  // add other reducers here
});

export default rootReducer;
