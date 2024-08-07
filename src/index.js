// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
=======

ReactDOM.render(
  <Provider store={store}>
    <App />
>>>>>>> a23812e (Normalize all line endings)
  </Provider>,
  document.getElementById('root')
);
