// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const ChamberD = () => {
//   return (
//     <Wrapper className="py-0">
//       <div className="container py-5">
//         <div className="row align-items-center mb-4">
//           <div className="col-md-8">
//             <h2 className="section-title mb-1">চেম্বার ও সময়সূচি</h2>
//             <p className="section-subtitle mb-0">
//               ঢাকা ও কিশোরগঞ্জে তিনটি চেম্বার
//             </p>
//           </div>
//           <div className="col-md-4 text-md-end mt-3 mt-md-0">
//             <Link to="#" className="top-link">
//               অ্যাপয়েন্টমেন্ট নিন →
//             </Link>
//           </div>
//         </div>

//         <div className="row g-4">
//           <div className="col-lg-4 col-md-6">
//             <div className="chamber-card p-4 h-d-flex flex-column justify-content-between h-100">
//               <div>
//                 <div className="badge-location mb-1">ঢাকা</div>
//                 <h4 className="hospital-title mb-3">
//                   BDM Hospital & Diagnostic Centre
//                 </h4>

//                 <div className="info-text">
//                   <i className="fa-solid fa-location-dot text-danger"></i>{" "}
//                   মোহাম্মদপুর, ঢাকা
//                 </div>
//                 <div className="info-text">
//                   <i className="fa-regular fa-clock"></i> রবি, সোম, বুধ, বৃহ,
//                   শনি • 5:00 PM–8:00 PM
//                 </div>
//                 <div className="info-text">
//                   <i className="fa-solid fa-phone"></i> 01711-387595
//                 </div>
//               </div>
//               <div>
//                 <Link to="#" className="serial-link">
//                   এই চেম্বারে সিরিয়াল নিন &rarr;
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 col-md-6">
//             <div className="chamber-card p-4 h-d-flex flex-column justify-content-between h-100">
//               <div>
//                 <div className="badge-location mb-1">কিশোরগঞ্জ</div>
//                 <h4 className="hospital-title mb-3">
//                   Padma General Hospital (Pvt.)
//                 </h4>

//                 <div className="info-text">
//                   <i className="fa-solid fa-location-dot text-danger"></i>{" "}
//                   পুরানথানা-সদর, কিশোরগঞ্জ।
//                 </div>
//                 <div className="info-text">
//                   <i className="fa-regular fa-clock"></i> সোম, শুক্র • 4:30
//                   PM–12:00 AM
//                 </div>
//                 <div className="info-text mt-3">
//                   মোবাইল: +8801741689322
//                   <br />
//                   ব্যক্তিগত সহকারী: মোঃ রুবেল মিয়া
//                 </div>
//               </div>
//               <div>
//                 <Link to="#" className="serial-link">
//                   এই চেম্বারে সিরিয়াল নিন &rarr;
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 col-md-6">
//             <div className="chamber-card p-4 h-d-flex flex-column justify-content-between h-100">
//               <div>
//                 <div className="badge-location mb-1">কিশোরগঞ্জ</div>
//                 <h4 className="hospital-title mb-3">Midtown Hospital</h4>

//                 <div className="info-text">
//                   <i className="fa-solid fa-location-dot text-danger"></i>{" "}
//                   কিশোরগঞ্জ
//                 </div>
//                 <div className="info-text">
//                   <i className="fa-regular fa-clock"></i> শুক্র • 8:30 AM–1:00
//                   PM
//                 </div>
//                 <div className="info-text">
//                   <i className="fa-solid fa-phone"></i> 01787-224525
//                 </div>
//               </div>
//               <div>
//                 <Link to="#" className="serial-link">
//                   এই চেম্বারে সিরিয়াল নিন &rarr;
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .section-title {
//     color: #0b4f6c;
//     font-weight: 700;
//   }

//   .section-subtitle {
//     color: #6c757d;
//     font-size: 0.95rem;
//   }

//   .top-link {
//     color: #0b4f6c;
//     text-decoration: none;
//     font-size: 18px;
//     font-weight: 600;
//   }

//   .top-link:hover {
//     color: var(--color-primary);
//   }

//   /* Custom Card Styling */
//   .chamber-card {
//     background: #ffffff;
//     border: 1px solid #e2e8f0;
//     border-radius: 12px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
//     transition: all 0.3s ease;
//   }

//   .chamber-card:hover {
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//   }

//   .badge-location {
//     font-size: 0.85rem;
//     font-weight: 600;
//     color: #0b4f6c;
//   }

//   .badge-location-red {
//     font-size: 0.85rem;
//     font-weight: 600;
//     color: #d9534f;
//   }

//   .hospital-title {
//     font-size: 1.25rem;
//     font-weight: 700;
//     color: #1a202c;
//   }

//   .hospital-title-red {
//     font-size: 1.25rem;
//     font-weight: 700;
//     color: #d9534f;
//   }

//   .info-text {
//     font-size: 0.9rem;
//     color: #4a5568;
//     margin-bottom: 0.5rem;
//   }

//   .info-text i {
//     width: 18px;
//     text-align: center;
//     margin-right: 4px;
//     color: #718096;
//   }

//   .serial-link {
//     color: #0b4f6c;
//     font-weight: 600;
//     font-size: 0.9rem;
//     text-decoration: none;
//     display: inline-block;
//     margin-top: 1rem;
//   }

//   .serial-link:hover {
//     text-decoration: underline;
//   }
// `;

// export default ChamberD;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// CHAMBER DATA
const chamberData = [
  {
    id: 1,
    location: "ঢাকা",
    hospital: "BDM Hospital & Diagnostic Centre",
    address: "মোহাম্মদপুর, ঢাকা",
    schedule: "রবি, সোম, বুধ, বৃহ, শনি • 5:00 PM–8:00 PM",
    phone: "01711-387595",
  },
  {
    id: 2,
    location: "কিশোরগঞ্জ",
    hospital: "Padma General Hospital (Pvt.)",
    address: "পুরানথানা-সদর, কিশোরগঞ্জ।",
    schedule: "সোম, শুক্র • 4:30 PM–12:00 AM",
    phone: "+8801741689322",
    assistant: "মোঃ রুবেল মিয়া",
  },
  {
    id: 3,
    location: "কিশোরগঞ্জ",
    hospital: "Midtown Hospital",
    address: "কিশোরগঞ্জ",
    schedule: "শুক্র • 8:30 AM–1:00 PM",
    phone: "01787-224525",
  },
];

const ChamberD = () => {
  return (
    <Wrapper className="py-0">
      <div className="container py-5">
        {/* SECTION HEADER */}
        <div className="row align-items-center mb-4">
          <div className="col-md-8">
            <h2 className="section-title mb-1">চেম্বার ও সময়সূচি</h2>

            <p className="section-subtitle mb-0">
              ঢাকা ও কিশোরগঞ্জে তিনটি চেম্বার
            </p>
          </div>

          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <Link to="#" className="top-link">
              অ্যাপয়েন্টমেন্ট নিন →
            </Link>
          </div>
        </div>

        {/* CHAMBER CARDS */}
        <div className="row g-4">
          {chamberData.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="chamber-card p-4 d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="badge-location mb-1">{item.location}</div>

                  <h4 className="hospital-title mb-3">{item.hospital}</h4>

                  <div className="info-text">
                    <i className="fa-solid fa-location-dot text-danger"></i>{" "}
                    {item.address}
                  </div>

                  <div className="info-text">
                    <i className="fa-regular fa-clock"></i> {item.schedule}
                  </div>

                  <div className="info-text mt-3">
                    {item.assistant ? (
                      <>
                        মোবাইল: {item.phone}
                        <br />
                        ব্যক্তিগত সহকারী: {item.assistant}
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-phone"></i> {item.phone}
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <Link to="#" className="serial-link">
                    এই চেম্বারে সিরিয়াল নিন &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

// STYLES
const Wrapper = styled.section`
  .section-title {
    color: #0b4f6c;
    font-weight: 700;
  }

  .section-subtitle {
    color: #6c757d;
    font-size: 0.95rem;
  }

  .top-link {
    color: #0b4f6c;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
  }

  .top-link:hover {
    color: var(--color-primary);
  }

  /* Custom Card Styling */
  .chamber-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
    transition: all 0.3s ease;
  }

  .chamber-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .badge-location {
    font-size: 0.85rem;
    font-weight: 600;
    color: #0b4f6c;
  }

  .badge-location-red {
    font-size: 0.85rem;
    font-weight: 600;
    color: #d9534f;
  }

  .hospital-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1a202c;
  }

  .hospital-title-red {
    font-size: 1.25rem;
    font-weight: 700;
    color: #d9534f;
  }

  .info-text {
    font-size: 0.9rem;
    color: #4a5568;
    margin-bottom: 0.5rem;
  }

  .info-text i {
    width: 18px;
    text-align: center;
    margin-right: 4px;
    color: #718096;
  }

  .serial-link {
    color: #0b4f6c;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    display: inline-block;
    margin-top: 1rem;
  }

  .serial-link:hover {
    text-decoration: underline;
  }
`;

export default ChamberD;
