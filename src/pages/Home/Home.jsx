import React from "react";
import HeroSection from "./HeroSection";
// import About from "./About";
// import ContactInfo from "./ContactInfo";
// import Services from "./Services";
// import DoctorTeam from "./DoctorTeam";
// import BookingForm from "./BookingForm";
// import Blog from "./Blog";
// import Packages from "./Packages";
// import Testimonials from "./Testimonials";

// import Card from "./Card";
import PatientGraidline from "./PatientGraidline";
import Blog from "./Blog"
import ChamberD from "./ChamberD";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      {/* <Card /> */}
      <HeroSection />
      {/* <ContactInfo /> */}
      <PatientGraidline />
      <Blog />
      <ChamberD />
      <Gallery />

      {/* <About /> */}
      {/* <Packages /> */}
      {/* <Services /> */}
      {/* <BookingForm /> */}
      {/* <DoctorTeam /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
    </div>
  );
};

export default Home;
