// src/components/Header.js
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import yellobadge from "../imgs/yellowBadge.png";
import checkmark from "../imgs/checkmark.png";
import heroright from "../imgs/hero_right.png";
import "./header.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <NavBar />
      <Container
        fluid
        className="header p-0 m-0 vw-100 d-flex justify-content-center  main_section"
      >
        <Row className="w-50  m-5 p-0  justify-content-start main_section-wrapper">
          <Col className=" main_section-col m-0 p-0 ">
            <h5 className="main_section-text mb-4">
              Zonnepanelen zonder investering: direct besparnel
            </h5>

            <Row className="h-100 w-100 justify-content-start m-0 p-0 ">
              <Col className="d-flex  justify-content-center">
                <Card className="main_section-card">
                  <Col className=" main_section-card_items d-flex flex-column">
                    <h6 className="main_section-card_items-text mt-3 mb-3 ">
                      Doe de woningcheck en controieer of jou woning in
                      aanmerking komt.
                    </h6>
                    <Row className="m-2">
                      <Col className="d-flex  justify-content-start">
                        <img
                          className="main_section-card_items-checkmark"
                          src={checkmark}
                          alt="tick img"
                        />
                        <h6 className="">Zijn we actief in jouw regio</h6>
                      </Col>
                    </Row>
                    <Row className="m-2">
                      <Col className="d-flex ">
                        <img
                          className="main_section-card_items-checkmark"
                          src={checkmark}
                          alt="tick img"
                        />
                        <h6>Zijn we actief in jouw regio</h6>
                      </Col>
                    </Row>
                    <Row className="m-2">
                      <Col className="d-flex ">
                        <img
                          className="main_section-card_items-checkmark"
                          src={checkmark}
                          alt="tick img"
                        />
                        <h6>Zijn we actief in jouw regio</h6>
                      </Col>
                    </Row>
                    <Button className="btn btn-warning w-75 mt-1 mb-3">
                      START WONINGCHECK
                    </Button>
                  </Col>
                </Card>
              </Col>

              <Col className=" main-section_badge col-7">
                <img
                  src={yellobadge}
                  alt="badge"
                  className="main_section-badge main-section_badge"
                />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex  justify-content-center col-xl-1 col-md-12">
                <img
                  src={heroright}
                  alt="badge"
                  className="herorightImg h-100 w-75 mt-3"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
