
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Reviews from "./Components/Reviews";
import About from "./Components/About";
import Home from "./Components/Home";
import Offer from "./Components/Offer";
import Featuresection from "./Components/Featuresection";

function App() {
  return (
    <div >
      <Header></Header>
      <Home></Home>
      <Reviews></Reviews>
      <Offer></Offer>
      <About></About>
      <Featuresection></Featuresection>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
