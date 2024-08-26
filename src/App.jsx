import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
