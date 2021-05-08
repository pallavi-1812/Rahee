import {
  Container,
  Row,
  Col,
} from "reactstrap";
import "./Header.css";
import NavBar from '../Navbar/Navbar';
import mentalHealth from "../../images/mental-health-.webp";

const Header = () => {


  return (
    <div className="header">
      <NavBar />
      <Container>
        <Row className="header-row">
          <Col xs={12} lg={5} className="left-header ml-10">
            <p className="headpara">
              We aim to fill the knowledge gap by providing online mental health diagonsis and
              thus enable people to take care of their mental health without any
              hesitation or fear of judgement.
            </p>
            <div className="head-btns mt-2 mb-2">
              <a href='/login' className="btn btn-primary btn-lg">Login</a>
            </div>
          </Col>
          <Col xs={12} lg={7} className="head-img">
            <img src={mentalHealth} alt="mentalHealth" width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
