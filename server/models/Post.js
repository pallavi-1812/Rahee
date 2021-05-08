import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('posts', PostSchema);

export default Post;