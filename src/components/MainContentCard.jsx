import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "./maincontentcard.css";

const MainContentCard = ({ img, description, title }) => {
  return (
    <Col className="main_content-card d-flex  mb-3">
      <Card className="h-100 w-100  main_content-cardStyle">
        <Row className="m-1">
          <Col>
            <img src={img} alt="house" />
          </Col>
        </Row>
        <Row className="m-1">
          <Col>
            <h4>
              <strong>{title}</strong>
            </h4>
            <p className="w-75 main-content_card-paratext">{description}</p>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default MainContentCard;
