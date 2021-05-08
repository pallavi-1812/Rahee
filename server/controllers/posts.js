import Post from '../models/Post.js';

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = (req, res) => {
    try {
        const { title, content } = req.body;
        //validation
        if (!title) {
            return res.status(400).json({ msg: "Please enter the title field." });
        };
        const newPost = new Post({
            title,
            content,
            userId: req.user
        });
        newPost.save()
            .then(post => res.json(post));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getPosts = async (req, res) => {
    const posts = await Post.find({ userId: req.user });
    res.json(posts);
}

export const deletePost = async (req, res) => {
    const post = await Post.findOne({ userId: req.user, _id: req.params.id });
    if (!post) {
        return res.status(400).json({ msg: "No post with current user's id found." });
    }
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.json(deletedPost);
}