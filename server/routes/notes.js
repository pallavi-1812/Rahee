import express from 'express';
import { createNote, getNotes } from '../controllers/notes.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post("/", auth, createNote);
router.get("/", auth, getNotes);

export default router;