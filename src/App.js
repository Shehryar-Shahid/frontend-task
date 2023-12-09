// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="vh-100 ">
      <HomePage />
      {/* <Header />
      <MainContent />
      <Footer /> */}
    </div>
  );
}

export default App;
