import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import createLogger from 'redux-logger';
// import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

// import Routes from './routes';
import * as reducers from './redux/PostReducer';

import Main from './components/Main';
import Login from './containers/Login';
import PostContainer from './containers/PostContainer';
import NotFound from './containers/NotFound';

import PostLists from './components/PostLists';
import PostCreate from './components/PostCreate';
import PostDetail from './components/PostDetail';

const middleware = [];

// const logger = createLogger();
// middleware.push(logger);
// middleware.push(promiseMiddleware);
middleware.push(thunkMiddleware);

injectTapEventPlugin();
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

const history = syncHistoryWithStore(browserHistory, store);
// const store = createStore(postReducers);

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

// 문제점.. 로컬 state 를 유지하지 않음..
// if (module.hot) {
//   module.hot.accpet();
// }
