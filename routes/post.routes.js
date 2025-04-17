import express from 'express';
import { createPost, getAllPosts, getPost, updatePost, deletePost } from '../controllers/post.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';

import { createPostSchema, updatePostSchema } from '../validations/post.validation.js';

const router = express.Router();


router.get('/', getAllPosts);
router.get('/:id', getPost);
router.post('/', protect, validate(createPostSchema), createPost);
router.put('/:id', protect, validate(updatePostSchema), updatePost);
router.delete('/:id', protect, deletePost);

export default router;