import React from "react";
import HeroSection from "./HeroSection";

// import Card from "./Card";
import PatientGraidline from "./PatientGraidline";
import Blog from "./Blog";
import ChamberD from "./ChamberD";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      {/* <Card /> */}
      <HeroSection />
      <PatientGraidline />
      <Blog />
      <ChamberD />
      <Gallery />
    </div>
  );
};

export default Home;
