import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link } from 'react-router';
import { Button } from 'react-materialize';

import PostLists from '../components/PostLists';
import PostDetail from '../components/PostDetail';
import PostCreate from '../components/PostCreate';

import * as Actions from '../redux/PostAction';


class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  componentDidMount() {
    console.log('PostContainer.componentDidMount');
    if (this.props.params.cuid) {
      this.props.fetchPost(this.props.params.cuid);
    } else {
      this.props.fetchPosts();
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('PostContainer.componentWillReceiveProps', { props: this.props, nextProps });
    if (this.props.params.cuid !== nextProps.params.cuid) {
      this.props.fetchPost(nextProps.params.cuid);
    }
  }
  addPost(post) {
    this.props.fetchAddPost(post);
    this.props.history.pushState(null, '/post');
  }
  deletePost(cuid) {
    this.props.fetchDeletePost(cuid);
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
                posts: this.props.posts,
                deletePost: this.deletePost
              });
            } else if (child.type === PostCreate) {
              return React.cloneElement(child, {
                addPost: this.addPost
              });
            }
            return child;
          })
        }
        <Link
          to="/post/add"
          style={{ position: 'fixed', right: '40px', bottom: '40px', zIndex: 1 }}
        >
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
    fetchPost: Actions.fetchPost,
    fetchDeletePost: Actions.fetchDeletePost,
    fetchAddPost: Actions.fetchAddPost
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
