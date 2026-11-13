// import React from "react";
// import { Helmet } from "react-helmet";

// const PageTitle = ({ title }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//     </Helmet>
//   );
// };

// export default PageTitle;

import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title
      ? `${title} | Trauma Centre & Advanced Orthopedic Clinic`
      : "Trauma Centre & Advanced Orthopedic Clinic";
  }, [title]);

  return null; // no JSX needed
};

export default PageTitle;
