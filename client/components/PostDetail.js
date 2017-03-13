import React, { Component, PropTypes } from 'react';

class PostDetail extends Component {
  render() {
    console.log('PostDetail.render', { props: this.props, state: this.state });
    const post = this.props.post || { title: '', name: '', content: '' };
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.name}</p>
        <p>{post.content}</p>
      </div>
    );
  }
}
PostDetail.props = {
  title: PropTypes.string,
  name: PropTypes.name,
  content: PropTypes.content
};
export default PostDetail;
