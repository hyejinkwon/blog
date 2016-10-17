import cuid from 'cuid';
import Post from '../models/post';

export function getPosts(req, res) {
  Post.find().sort('-updated').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

export function addPost(req, res) {
  console.log('===>addPost.req', req);
  const { name, title, content } = req.body;

  const newPost = new Post({
    name,
    title,
    content,
    cuid: cuid(),
  });

  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
