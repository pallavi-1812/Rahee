import { Col, Container, Row } from "reactstrap";
import goToForum from "../../images/goToForum.jpg";
import "./GoToForum.css";

const GoToForum = () => {
    return (
        <Container id='forum'>
            <Row className="forum-row">
                <Col xs={12} lg={6} className="about">
                    <p>
                        We have created a community forum where usres can share their thoughts anonymously after creating an account.
                        They can also see the posts of other users with their identities hidden so that they can beleive that mental health issues are normal and nothing to be ashamed of.
                        The forum will also make them believe that they are not alone and will give them inspiration to fight against their problems.
                    </p>
                    <a href='/forum' className="btn btn-primary card-btns btn-lg mb-3" tag="h2">
                        Go To Forum
                </a>
                </Col>
                <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
                    <img src={goToForum} alt="self-love" width="100%" />
                </Col>
            </Row>
        </Container>
    );
};

export default GoToForum;
