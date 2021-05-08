import { Col, Container, Row } from 'reactstrap';
import { AiFillGithub } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} className="d-flex justify-content-center align-items-center mt-2">
                        <p><AiFillGithub color="white" /> Made by Team Noobs404</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;