import { App } from './containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';

const store = createStore(rootReducer);

global.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
