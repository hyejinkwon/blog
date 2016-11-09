import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './Main';
import PostLists from './PostLists';
import PostCreate from './PostCreate';
import PostDetail from './PostDetail';
// import Posts from '../../server/dummy';

// global.Posts = new Posts();

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={PostLists} />
          <Route path="add" component={PostCreate} />
          <Route path="posts/:cuid" component={PostDetail} />
        </Route>
      </Router>
    );
  }
}
export default Root;
