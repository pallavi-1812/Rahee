import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import "./Login.css";
import formImg from "../../../images/formImg.jpg";
import Title from "../../Title/Title";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const { setUserData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      console.log(loginRes);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/forum");
    } catch (err) {
      console.log(err.response);
      if (err.response.data) {
        const error = err.response.data;
        setErrors({
          email: error.email,
          password: error.password,
        });
      }
    }
  };

  return (
    <>
      <Title />
      <div className="login-div">
        <Container className="mt-5 mb-5">
          <Row>
            <h3 className='text-center mb-5' style={{ color: '#a71ada', fontFamily: 'cursive' }}>Login to get access to your personal dashboard where you can share your thoughts anonymously and can also write the positive things in your life that reminds you of happiness.</h3>
          </Row>
          <Row>
            <Col
              xs={12}
              md={5}
              className="d-flex align-items-center justify-content-center"
            >
              <img src={formImg} alt="sign-up" width="100%" />
            </Col>
            <Col xs={12} md={7}>
              <Form className="form mt-5" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <Label for="email" className="mb-2">
                    Email
                </Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small style={{ color: "red" }}> {errors.email} </small>
                </FormGroup>
                <FormGroup className="mb-3">
                  <Label for="password" className="mb-2">
                    Password
                </Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <small style={{ color: "red" }}> {errors.password} </small>
                </FormGroup>
                <Button className="btn btn-primary login-btn mb-3" type="submit">
                  Submit
              </Button>
                <p className="mt-2">
                  New here? <Link to="/register">Register</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
