import { Col, Container, Row } from "reactstrap";
import mentalhealth from "../../images/mental-health.jpg";
import "./About.css";

const About = () => {
  return (
    <Container id='about'>
      <Row>
        <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
          <img src={mentalhealth} alt="mental-health" width="100%" />
        </Col>
        <Col xs={12} lg={6} className="about mt-2 mb-2">
          <p>
            Mental health of people has worsened due to COVID-19
            and there are huge chances that a mental health pandemic will follow as a result of COVID-19.
          </p>
          <p>
            {" "}
            Our goal is to remove the stigma aroung mental health
            issues and raise awareness regarding them. We wish to create an atmosphere where people could share their thoughts freely without
            any hesitation or the fear of the judgement of people.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
