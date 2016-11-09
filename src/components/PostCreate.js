import React, { Component } from 'react';
import { Button } from 'react-materialize';

class PostCreate extends Component {
  constructor(prop) {
    super(prop);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(event) {
    event.preventDefault();
    const name = this.refs.name.value;
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    const post = { name, title, content };
    this.props.addPost(post);
  }

  render() {
    return (
      <div className="row">
        <h5>Create new post</h5>
        <form onSubmit={this.handleCreate}>
          <input type="text" ref="name" placeholder="Author's Name" readOnly defaultValue="hj" />
          <input type="text" ref="title" placeholder="Post Title" />
          <textarea ref="content" placeholder="Post Content" className="materialize-textarea" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}
export default PostCreate;
