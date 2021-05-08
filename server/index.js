import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import users from './routes/user.js';
import posts from './routes/posts.js';
import notes from './routes/notes.js';

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/notes", notes);
app.use("/", posts);
app.use("/users", users);

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/mentalHealthDB", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => (app.listen(PORT, () => console.log(`Server started on port ${PORT}`))))
    .catch((err) => (console.log(err.message)));

mongoose.set('useFindAndModify', false);