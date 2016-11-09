import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link } from 'react-router';
import { Button } from 'react-materialize';

import PostLists from '../components/PostLists';
import PostDetail from '../components/PostDetail';
import * as Actions from '../redux/PostAction';


class Post extends Component {
  componentDidMount() {
    console.log('PostContainer.componentDidMount');
    if (this.props.params.cuid) {
      this.props.fetchPost(this.props.params.cuid);
    } else {
      this.props.fetchPosts();
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('PostContainer.componentWillReceiveProps', this.props.params, nextProps.params);
    if (this.props.params.cuid !== nextProps.params.cuid) {
      this.props.fetchPost(nextProps.params.cuid);
    }
  }
  render() {
    console.log('PostContainer.render', { state: this.state, props: this.props });
    return (
      <div>
        {
          React.Children.map(this.props.children, (child) => {
            if (child.type === PostDetail) {
              return React.cloneElement(child, {
                post: this.props.post
              });
            } else if (child.type === PostLists) {
              return React.cloneElement(child, {
                posts: this.props.posts
              });
            }
            return child;
          })
        }
        <Link to="/post/add" style={{ position: 'fixed', right: '40px', bottom: '40px', zIndex: 1 }} >
          <Button floating large waves="light" icon="mode_edit" />
        </Link>
      </div>
    );
  }
}
function mapStateToProps(store) {
  return {
    posts: store.posts,
    post: store.post
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPosts: Actions.fetchPosts,
    fetchPost: Actions.fetchPost
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
