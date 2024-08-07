// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas'; // Assuming you have sagas

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

=======
import { thunk } from 'redux-thunk'; // Use named import for thunk
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply thunk middleware
);

>>>>>>> a23812e (Normalize all line endings)
export default store;
