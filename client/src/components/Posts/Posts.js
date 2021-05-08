import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePost from './CreatePost';
import CreatedPosts from './CreatedPosts';
import { Container } from 'reactstrap';
import './Posts.css';

const Posts = () => {

    const [postsArray, setPostsArray] = useState([]);

    useEffect(() => {
        requestPosts();
    }, []);

    const requestPosts = async () => {
        await axios
            .get("http://localhost:5000/", {
                headers: { "x-auth-token": localStorage.getItem("auth-token") },
            })
            .then((res) => {
                setPostsArray(res.data);
            })
            .catch((error) => {
                console.error("error: ", error);
            });
    };

    const addPost = async (post) => {
        await axios
            .post("http://localhost:5000/", post, {
                headers: { "x-auth-token": localStorage.getItem("auth-token") },
            })
            .then((res) =>
                setPostsArray((prevData) => {
                    return [...prevData, res.data];
                })
            )
            .catch((err) => console.log(err));
    }

    const deletePost = (id) => {
        axios
            .delete(`http://localhost:5000/${id}`, {
                headers: { "x-auth-token": localStorage.getItem("auth-token") },
            })
            .then((res) => {
                setPostsArray((prevData) => {
                    return prevData.filter((data) => {
                        return data._id !== id;
                    });
                });
            });
    }

    return (
        <Container>
            <CreatePost onAdd={addPost} />
            {postsArray.map((post, index) => {
                return (
                    <CreatedPosts
                        key={index}
                        id={post._id}
                        title={post.title}
                        content={post.content}
                        onDelete={deletePost}
                    />
                )
            })}
        </Container>
    );
}

export default Posts;