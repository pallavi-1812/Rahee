import express from 'express';
import auth from '../middleware/auth.js';
import { createPost, getPosts, deletePost, getAllPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/all', getAllPosts);
router.post("/", auth, createPost);
router.get("/", auth, getPosts);
router.delete("/:id", auth, deletePost);

export default router;