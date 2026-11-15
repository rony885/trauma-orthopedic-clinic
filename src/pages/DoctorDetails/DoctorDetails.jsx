import React from "react";

import DoctorInformation from "./DoctorInformation";
import ChamberContacts from "./ChamberContacts";
import Award from "./Award";

const DoctorDetails = () => {
  return (
    <div>
      <DoctorInformation />
      <ChamberContacts />
      <Award />
    </div>
  );
};

export default DoctorDetails;
