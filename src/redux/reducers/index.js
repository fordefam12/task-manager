// src/redux/reducers/index.js
import { combineReducers } from 'redux';
<<<<<<< HEAD
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  // add other reducers here
});

export default rootReducer;
=======
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import someReducer from './someReducers'; 

export default combineReducers({
  
  auth: authReducer,
  tasks: taskReducer,
  some: someReducer,
});
>>>>>>> a23812e (Normalize all line endings)
