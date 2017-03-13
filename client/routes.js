import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './components/Main';
import Login from './containers/Login';
import PostContainer from './containers/PostContainer';
import NotFound from './containers/NotFound';

import PostLists from './components/PostLists';
import PostCreate from './components/PostCreate';
import PostDetail from './components/PostDetail';

// import Posts from '../../server/dummy';

// global.Posts = new Posts();

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
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
    );
  }
}
export default Routes;
