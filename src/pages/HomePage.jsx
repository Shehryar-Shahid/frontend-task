import React from "react";
import { Card, Container } from "react-bootstrap";
import "./homepage.css";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SecondMainContent from "../components/SecondMainContent";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div>
      <Container fluid className="m-0 p-0">
        <Header />
        <MainContent />
        <SecondMainContent />
        <Footer />
      </Container>
    </div>
  );
};

export default HomePage;
