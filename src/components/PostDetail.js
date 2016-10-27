import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        name: '',
        title: '',
        content: ''
      }
    };
  }
  componentDidMount() {
    console.log('PostDetail.componentWillMount');
    const cuid = this.props.params.cuid;
    fetch(`/posts/${cuid}`).then((res) => {
      res.json().then((data) => {
        this.setState({ post: data.post });
      });
    });
  }
  render() {
    const post = this.state.post;
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.name}</p>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostDetail;
