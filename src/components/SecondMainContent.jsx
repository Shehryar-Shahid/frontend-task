// src/components/SecondMainContent.js
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./secondmaincontent.css";
import bottomimg from "../imgs/bottomBG.png";
import solarpannel from "../imgs/solar.png";
import wallet from "../imgs/wallet.png";
import energy from "../imgs/energy.png";
import heroright from "../imgs/hero_right.png";
const deatils = [
  "Start de berekening via ons formulier. Vertel ons over je situatie en ontvang een gratis en vrijblijvend persoonlijk advies van onze specialisten.",
  "Een van onze erkende installateurs uit jouw regio plaatst je panelen. Dit alles gebeurt supersnel. We laten zien hoe je panelen werken en laten je huis netjes achter. Het mooie is dat jouw zonnepanelen meteen energie opwekken. Je bespaart dus direct.",
  "Je bent klaar voor een duurzame toekomst. Met onze app zie je op elk moment van de dag hoeveel energie je zonnepanelen opwekken. Je bent verzekerd, dus als er iets is, wij lossen het voor je op.",
];
const SecondMainContent = () => {
  return (
    <Container
      fluid
      className="text-light p-0 mt-0  SecondMainContent d-flex flex-column align-items-center"
    >
      <Row className="m-0 p-0">
        <Col className="m-0 p-0">
          <img src={heroright} alt="pic" className="heroimg  m-0" />
        </Col>
      </Row>
      <Row className="main-wrapper m-1">
        <Row className="m-0 p-0">
          <Col className="m-0 p-0">
            <img src={bottomimg} alt="pic" className="bottomimg  m-0" />
          </Col>
        </Row>
        <Row className="w-100">
          <Col className="d-flex  flex-column align-items-center mt-3 ">
            <h1 className="text-center title-text">
              Is jouw woning geschikt: Hoe werkt het?
            </h1>
            <p className="w-50 text-center desc_text">
              De huidige elektriciteitsprijzen swingen de pan uit. Wie de grote
              energieleverranciers te slim af wil zijn, produceert zijn eigen
              energie.Ontdek hoe jij honderden euro's per maand bespaarti!
            </p>
          </Col>
        </Row>
        <Row className=" m-0 d-flex justify-content-center h-100">
          <Col className="m-0 p-0 col-xl-2 col-md-3 col-12 SecondMainContent-card-col_layout">
            {/* //Card 1 */}
            <Card className="h-100 w-100 SecondMainContent-card">
              <Row className="m-1">
                <Col>
                  <img src={solarpannel} alt="house" />
                </Col>
              </Row>
              <Row className="m-1">
                <Col>
                  <h4>
                    <strong>Analyse van je dak</strong>
                  </h4>
                  <p className="w-100 SecondMainContent_card-paratext">
                    {deatils[0]}
                  </p>
                </Col>
              </Row>
              <Row className="m-1 d-flex justify-content-center">
                <Button className="btn btn-warning mt-5">
                  {" "}
                  Start Woningcheck
                </Button>
              </Row>
            </Card>
          </Col>
          <Col className="m-0 p-0 col-xl-2 col-md-3 col-12 SecondMainContent-card-col_layout">
            {/* //Card 2 */}
            <Card className="h-100 w-100 SecondMainContent-card">
              <Row className="m-1">
                <Col>
                  <img src={energy} alt="house" />
                </Col>
              </Row>
              <Row className="m-1">
                <Col>
                  <h4>
                    <strong>Installatie binnen 1 dag</strong>
                  </h4>
                  <p className="w-100 SecondMainContent_card-paratext">
                    {deatils[1]}
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="m-0 p-0 col-xl-2 col-md-3 col-12  SecondMainContent-card-col_layout">
            {/* Card 3 */}
            <Card className="h-100 w-100 SecondMainContent-card">
              <Row className="m-1">
                <Col>
                  <img src={wallet} alt="house" />
                </Col>
              </Row>
              <Row className="m-1">
                <Col>
                  <h4>
                    <strong>Zorgeloos genieten</strong>
                  </h4>
                  <p className="w-100 SecondMainContent_card-paratext">
                    {deatils[2]}
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default SecondMainContent;
