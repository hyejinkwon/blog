import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  Card, CardHeader, CardTitle, CardText, CardActions,
  FlatButton, IconMenu, IconButton, MenuItem
} from 'material-ui';

class PostListView extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
  }

  handleDelete(event) {
    event.preventDefault();
  }

  render() {
    console.log('PostListView.render', { state: this.state, props: this.props });
    return (
      <div>
        {
          this.props.posts && this.props.posts.map(post => (
            <Card
              key={post.cuid}
              style={{ position: 'relative', marginBottom: '3%' }}
            >
              <IconMenu
                iconButtonElement={
                  <IconButton><i className="material-icons">more_vert</i></IconButton>
                }
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  zIndex: 1
                }}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="Delete" />
              </IconMenu>
              <CardHeader
                title={post.name}
                subtitle={post.updated}
                avatar="/assets/domain-bk.jpg"
              />
              <CardTitle title={post.title} />
              <CardText>
                {post.content}
              </CardText>
              <CardActions>
                <Link to={`/post/${post.cuid}`}><FlatButton label="Read more" /></Link>
              </CardActions>
            </Card>
          ))
        }
      </div>
    );
  }
}

export default PostListView;
