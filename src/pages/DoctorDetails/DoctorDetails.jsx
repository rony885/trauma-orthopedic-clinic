import React from "react";
// import DoctorDetailsHero from "./DoctorDetailsHero";
// import DoctorDetailsInfo from "./DoctorDetailsInfo";

import DoctorInformation from "./DoctorInformation";
import ChamberContacts from "./ChamberContacts";
import Award from "./Award";


const DoctorDetails = () => {
  return (
    <div>
      <DoctorInformation/>
      <ChamberContacts/>
      <Award/>
      {/* <DoctorDetailsHero />
      <DoctorDetailsInfo /> */}
    </div>
  );
};

export default DoctorDetails;


