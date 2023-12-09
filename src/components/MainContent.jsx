// src/components/MainContent.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import house from "../imgs/house.png";
import slim from "../imgs/slim.png";
import power from "../imgs/power.png";
import "./maincontent.css";
import MainContentCard from "./MainContentCard";
const deatils = [
  "Vanaf dag 1 bespaar je op je energierekening, want je wekt je eigen stroom op.Zo houd jij geld over voor andere belngrijke dingen.",
  "Je huurt je zonnepanelen voor een vast bedrag per maand. Je hoeft geen spaargeld te hebben of een lening af te sluiten.",
  "Je zonnepanelen doen het altijd. Is er toch iets mis? Geen zorgen: wij fixen het voor je. Natuurlijk zonder extra kosten.",
];
const MainContent = () => {
  return (
    <Container className="mt-5  h-100  d-flex flex-column align-items-center">
      <Row className="h-100 d-flex justify-content-center">
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="col-12 d-flex justify-content-center">
            <p className="ptext">
              Mijn Consument helpt je met het uitzoeken van zonnepaneien
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">
          <Col className="col-12 mb-4 d-flex justify-content-center">
            <h3>Waarom zonnepanelen huren?</h3>
          </Col>
        </Row>
        <Row className="d-flex ">
          <MainContentCard
            img={house}
            description={deatils[0]}
            title="Bespaar direct"
          />
          <MainContentCard
            img={slim}
            description={deatils[1]}
            title="Hele jaar rendement"
          />
          <MainContentCard
            img={power}
            description={deatils[2]}
            title="Geen gedoe"
          />
        </Row>
        <Row>
          <Col className="col-12 mb-4 d-flex justify-content-center">
            {" "}
            <Button className="btn btn-warning   w-25 mt-4 mb-3">
              START WONINGCHECK
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default MainContent;
