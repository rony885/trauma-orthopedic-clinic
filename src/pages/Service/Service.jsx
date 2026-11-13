import React from "react";
import ServiceInfo from "./ServiceInfo";
// import BookingFrom from "./BookingFrom";
import Gallery from "./Gallery";
import OrthopedicServices from "./OrthopedicServices";

const Service = () => {
  return (
    <div>
      <ServiceInfo />
      {/* <BookingFrom /> */}
      <Gallery />
      <OrthopedicServices />
    </div>
  );
};

export default Service;
