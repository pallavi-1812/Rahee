import React, { useState } from "react";
import { Plus } from "react-bootstrap-icons";

const CreatePost = (props) => {
    const [posts, setPosts] = useState({
        title: "",
        content: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPosts((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        props.onAdd(posts);
        e.preventDefault();
        setPosts({
            title: "",
            content: "",
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="note-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={posts.title}
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    placeholder="Write your thoughts..."
                    value={posts.content}
                    cols="5"
                    rows="10"
                    onChange={handleChange}
                />
                <button type="submit">
                    <b>
                        <Plus className="plusBtn" />
                    </b>
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
