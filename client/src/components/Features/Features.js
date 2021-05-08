import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Col,
  Container,
  Row,
} from "reactstrap";
import mentalSurvey from "../../images/mental-survey.jpg";
import womenSelfLove from "../../images/women-self-love.jpg";
import shareThoughts from "../../images/share-thoughts.jpg";
import "./Features.css";

const Features = () => {
  return (
    <div className="features" id='features'>
      <Container>
        <Row>
          <Col xs={12} md={4} className="mt-5 mb-5">
            <Card>
              <CardImg
                top
                height="280"
                width="100%"
                src={mentalSurvey}
                alt="Card image cap"
              />
              <CardBody>
                <a href='/quiz' className="btn btn-primary card-btns" tag="h2">
                  Start Now
                </a>
                <CardText className="cardText">
                  Take our mental health diagnosis test and get results in no
                  time
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mt-5 mb-5">
            <Card>
              <CardImg
                top
                height="280"
                width="100%"
                src={shareThoughts}
                alt="Card image cap"
              />
              <CardBody>
                <a href='/forum' className="btn btn-primary card-btns" tag="h2">
                  Start Now
                </a>
                <CardText className="cardText">
                  Register on the portal and share your thoughts anonymously
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mt-5 mb-5">
            <Card>
              <CardImg
                top
                height="280"
                width="100%"
                src={womenSelfLove}
                alt="Card image cap"
              />
              <CardBody>
                <a href='/login' className="btn btn-primary card-btns" tag="h2">
                  Start Now
                </a>
                <CardText className="cardText">
                  Get a dose of positivity by writing down the three best things
                  in your life daily.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
