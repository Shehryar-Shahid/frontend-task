import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./navbar.css";
import logo from "../imgs/logo.png";

const NavBar = () => {
  return (
    <Container
      fluid
      className="m-0 p-0 vw-100 d-flex justify-content-center  container-1"
    >
      <Row className="row w-100">
        <Col className="m-2 d-flex justify-content-around  align-items-center">
          {/* <h3> HELLO STORM</h3> */}
          <img className="h-75 w-25" src={logo} alt="logo" />
          <h5>
            <strong>Zonnepanelen zonder zorgen </strong>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
