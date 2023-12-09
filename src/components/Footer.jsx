import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <Container fluid className="w-100  footer">
      <Row className="w-100">
        <Col className="w-100 d-flex justify-content-center">
          <h4 className="footer-text text-center">
            <strong>
              Alle gegevens zijn vertrouwelijk en worden behandeld in
              overeenstemming met de Europese wetgeving inzake de bescherming
              van de persoonlijke levenssfeer. Lees meer in ons privacybeleid.
            </strong>
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
