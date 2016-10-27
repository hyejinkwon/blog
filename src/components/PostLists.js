import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as Actions from '../redux/PostAction';
// import fetch from 'isomorphic-fetch';

class PostListView extends Component {
  constructor(props) {
    super(props);
    // this.posts = global.Posts;
    // this.state = {
    //   data: []
    // };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // this.fetchData();
    // this.props.dispatch(Actions.fetchPosts());
    this.props.fetchPosts();
    // this.a().next();
    // this.c();
  }

  async c() {
    await this.d();
    console.log('4');
  }

  d() {
    console.log('3');
  }
  //
  //
  // * a() {
  //   yield this.b();
  //   console.log('2');
  // }
  //
  // b() {
  //   console.log('1');
  // }

  handleDelete(event) {
    event.preventDefault();
    // this.posts.delete(event.target.id);
    // const data = this.posts.all();
    // this.state.data.filter(post => post.cuid !== event.target.id);
    // fetch(`/posts/${event.target.id}`, {
    //   method: 'delete',
    // })
    // .then((res) => {
    //   if (res.ok) {
    //     this.fetchData();
    //   }
    // });
  }

  // fetchData() {
    // fetch('/posts')
    //   .then((res) => {
    //     res.json().then((data) => {
    //       this.setState({ data: data.posts });
    //     });
    //   });
  // }

  render() {
    console.log('PostListView.render', { state: this.state, props: this.props });
    return (
      <div>
        {
          this.props.posts && this.props.posts.map(post => (
            <section key={post.cuid}>
              <h5><Link to={`posts/${post.cuid}`}>{post.title}</Link></h5>
              <span className="author">By {post.name}</span>
              <p>{post.content}</p>
              <p><a href="" onClick={this.handleDelete} id={post.cuid}>포스트 삭제</a></p>
              <div className="divider" />
            </section>
          ))
        }
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    posts: store.posts
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPosts: Actions.fetchPosts
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostListView);
