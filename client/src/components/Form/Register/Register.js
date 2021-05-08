import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import axios from 'axios';
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
import formImg from "../../../images/formImg.jpg";
import Title from "../../Title/Title";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    let history = useHistory();

    const { setUserData } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = { name, email, password, password2 };
            await axios.post("http://localhost:5000/users/register", newUser);
            const loginRes = await axios.post("http://localhost:5000/users/login", { email, password });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/forum");
        } catch (err) {
            if (err.response.data) {
                const error = err.response.data;
                setErrors({
                    name: error.name,
                    email: error.email,
                    password: error.password,
                    password2: error.password2
                });
            }
        }
    }

    return (
        <>
            <Title />
            <Container className="mt-5 mb-5">
                <Row>
                    <h3 className='text-center mb-5' style={{ color: '#a71ada', fontFamily: 'cursive' }}>Register to get access to your personal dashboard where you can share your thoughts anonymously and can also write the positive things in your life that reminds you of happiness.</h3>
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
                                <Label for="name" className="mb-2">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <small style={{ color: 'red' }}> {errors.name} </small>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label for="email" className="mb-2">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <small style={{ color: 'red' }}> {errors.email} </small>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label for="password" className="mb-2">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <small style={{ color: 'red' }}> {errors.password} </small>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label for="password2" className="mb-2">Confirm Password</Label>
                                <Input
                                    type="password"
                                    name="password2"
                                    placeholder="Re-enter your Password"
                                    onChange={(e) => setPassword2(e.target.value)}
                                />
                                <small style={{ color: 'red' }}> {errors.password2} </small>
                            </FormGroup>
                            <Button className="btn btn-primary login-btn mb-3" type="submit">Register</Button>
                            <p className="mt-2">
                                Already have an account? <Link to="/login">Login</Link>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Register;