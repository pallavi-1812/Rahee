import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Button, Row, Col } from "reactstrap";
import UserContext from "../../context/UserContext";
import Posts from "../Posts/Posts";
import welcomeImg from "../../images/welcome.jpg";
import shareImg from '../../images/shareThoughts.jpg';
import positiveImg from '../../images/positive.jpg';
import "./Forum.css";
import Title from "../Title/Title";
import PositiveNotes from "../PositiveNotes/PositiveNotes";

const Forum = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [allPosts, setAllPosts] = useState([]);
  const history = useHistory();

  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  useEffect(() => {
    requestAllPosts();
  }, [allPosts]);

  const requestAllPosts = async () => {
    await axios
      .get("http://localhost:5000/all", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      })
      .then((res) => {
        setAllPosts(res.data);
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };

  return (
    <>
      <Title />
      <Container>
        {userData.user ? (
          <div className="post d-flex align-items-center justify-content-center">
            <img src={welcomeImg} alt="welcome" width="100%" />
            <Row>
              <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                <img src={positiveImg} alt="positive" width="100%" />
              </Col>
              <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                <PositiveNotes />
              </Col>
            </Row>
            <Posts />
            <Button className="btn btn-primary logout-btn" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <div className="d-flex flex-column align-items-center justify-content-center text-center">
              <p
                style={{
                  color: "#9c0a97",
                  fontSize: "3rem",
                  fontFamily: 'cursive'
                }}
              >
                Share your thoughts anonymously
              </p>
              <img src={shareImg} alt="share" width="100%" height='400px' />
              <Button className="btn btn-primary login-btn" onClick={login}>
                Login
              </Button>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              {allPosts.map((post, index) => {
                return (
                  <div key={index} className="all-posts">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Forum;
