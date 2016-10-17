import { Router } from 'express';
import * as PostController from '../controllers/index';

const router = new Router();

router.route('/').get(PostController.getPosts);
router.route('/').post(PostController.addPost);
router.route('/:cuid').get(PostController.getPost);
router.route('/:cuid').delete(PostController.deletePost);

export default router;
