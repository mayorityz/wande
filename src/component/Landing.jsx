import React from "react";
import Header from "./Header";
import Slider from "./HomePage/Slider";
import MainContent from "./HomePage/Main";
import HomeFooter from "./HomePage/Footer";

const Landing = () => {
  return (
    <body>
      <Header />
      <Slider />
      <MainContent />
      <HomeFooter />
    </body>
  );
};

export default Landing;
