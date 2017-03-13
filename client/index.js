import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
// import promiseMiddleware from 'redux-promise';

// @plugins material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as reducers from './redux/PostReducer';

import Main from './components/Main';
import Login from './containers/Login';
import PostContainer from './containers/PostContainer';
import NotFound from './containers/NotFound';

import PostLists from './components/PostLists';
import PostCreate from './components/PostCreate';
import PostDetail from './components/PostDetail';

const middleware = [];

const logger = createLogger();
middleware.push(logger);
middleware.push(thunkMiddleware);

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);
const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./redux/PostReducer', () => {
    const nextReducer = require('./redux/PostReducer').default;
    store.replaceReducer(nextReducer);
  });
}

injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path="/" component={Main}>
          <IndexRoute component={Login} />
          <Route path="post" component={PostContainer} >
            { /* Post Routes */ }
            <IndexRoute component={PostLists} />
            <Route path="add" component={PostCreate} />
            <Route path=":cuid" component={PostDetail} />
          </Route>
          <Route path="*" status={404} component={NotFound} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  global.document.getElementById('root')
);
