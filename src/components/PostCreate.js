import React, { Component } from 'react';
import { Button } from 'react-materialize';
import fetch from 'isomorphic-fetch';

class PostCreate extends Component {
  constructor(prop) {
    super(prop);
    this.posts = global.Posts;
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(event) {
    event.preventDefault();
    const name = this.refs.name.value;
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    fetch('/posts', {
      headers: { 'content-type': 'application/json' },
      method: 'post',
      body: JSON.stringify({ name, title, content }),
    })
    .then((res) => {
      res.json().then((data) => {
        console.log('update---', data);
        this.props.history.pushState(null, '/');
      });
    });
  }

  render() {
    return (
      <div className="row">
        <h5>포스트 쓰기</h5>
        <form onSubmit={this.handleUpdate}>
          <input type="text" ref="name" placeholder="저자" />
          <input type="text" ref="title" placeholder="제목" />
          <textarea ref="content" placeholder="내용" className="materialize-textarea" />
          <Button type="submit">제출</Button>
        </form>
      </div>
    );
  }
}
export default PostCreate;
