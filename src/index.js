import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
// import thunkMiddleware from 'redux-thunk';

import Root from './components/Root';
import postReducers from './redux/PostReducer';

const middleware = [];
//
const logger = createLogger();
middleware.push(logger);
middleware.push(promiseMiddleware);
// middleware.push(thunkMiddleware);

const store = createStore(
  postReducers,
  applyMiddleware(...middleware)
);

// const store = createStore(postReducers);

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  global.document.getElementById('root')
);

// 문제점.. 로컬 state 를 유지하지 않음..
// if (module.hot) {
//   module.hot.accpet();
// }
