import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import createLogger from 'redux-logger';
// import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import Routes from './routes';
import postReducers from './redux/PostReducer';

const middleware = [];

// const logger = createLogger();
// middleware.push(logger);
// middleware.push(promiseMiddleware);
middleware.push(thunkMiddleware);

const store = createStore(
  postReducers,
  applyMiddleware(...middleware)
);

// const store = createStore(postReducers);
injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  global.document.getElementById('root')
);

// 문제점.. 로컬 state 를 유지하지 않음..
// if (module.hot) {
//   module.hot.accpet();
// }
