// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import doctorsArray from "../../doctors.js";

// const Doctor = () => {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     setDoctors(doctorsArray);
//   }, []);

//   return (
//     <>
//       <section
//         className="page-title page-title-layout5 bg-overlay bg-img"
//         style={{
//           backgroundImage: 'url("/assets/images/page-titles/8.jpg")',
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//         }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1 className="pagetitle__heading">Our Consultants</h1>
//               <nav>
//                 <ol className="breadcrumb mb-0">
//                   <li className="breadcrumb-item">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">
//                     Our Consultants
//                   </li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="team-layout2 pb-40">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
//               <div className="heading text-center mb-40">
//                 <h3 className="heading__title">Our Consultants</h3>
//                 <p className="heading__desc">Meet Our Consultants Team</p>
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             {doctors.map((member) => (
//               <div className="col-sm-6 col-md-4 col-lg-4" key={member.id}>
//                 <div className="member">
//                   <div className="member__img">
//                     <img src={member.img} alt={member.name} />
//                   </div>

//                   <div className="member__info">
//                     <h5 className="member__name">
//                       <Link to="/doctors/doctor-details">{member.name}</Link>
//                     </h5>
//                     <p className="member__job">{member.job}</p>
//                     {/* <p className="member__desc">{member.desc}</p> */}

//                     <Link
//                       to={`/appointment-doctor/${member.id}`}
//                       className="btn btn__primary btn__link btn__rounded w-100 mt-4"
//                     >
//                       <span>Appointment</span>
//                       <i className="icon-arrow-right"></i>
//                     </Link>

//                     <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
//                       <Link
//                         to="/doctors/doctor-details"
//                         className="btn btn__secondary btn__link btn__rounded"
//                       >
//                         <span>Read More</span>
//                         <i className="icon-arrow-right"></i>
//                       </Link>

//                       <ul className="social-icons list-unstyled mb-0">
//                         <li>
//                           <Link to="#" className="facebook">
//                             <i className="fab fa-facebook-f"></i>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="#" className="twitter">
//                             <i className="fab fa-twitter"></i>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="#" className="phone">
//                             <i className="fas fa-phone-alt"></i>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="row d-none">
//             <div className="col-12 text-center">
//               <nav className="pagination-area">
//                 <ul className="pagination justify-content-center">
//                   <li>
//                     <Link className="current" to="#">
//                       1
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#">2</Link>
//                   </li>
//                   <li>
//                     <Link to="#">
//                       <i className="icon-arrow-right"></i>
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Doctor;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// CHAMBER DATA
const chamberData = [
  {
    id: 1,
    location: "ঢাকা",
    image: "/assets/images/doctor kk/doctor-din-islam-mithu.jpg",
    name: "Dr. Md. Rahman Hossain",
  },
  {
    id: 2,
    location: "কিশোরগঞ্জ",
    image: "/assets/images/doctor kk/doctor-din-islam-mithu.jpg",
    name: "Dr. Farjana Akter",
  },
  {
    id: 3,
    location: "ঢাকা",
    image: "/assets/images/doctor kk/doctor-din-islam-mithu.jpg",
    name: "Dr. Abdullah Al Mamun",
  },
  {
    id: 4,
    location: "ঢাকা",
    image: "/assets/images/doctor kk/doctor-din-islam-mithu.jpg",
    name: "Dr. Nusrat Jahan",
  },
  {
    id: 5,
    location: "কিশোরগঞ্জ",
    image: "/assets/images/doctor kk/doctor-din-islam-mithu.jpg",
    name: "Dr. Mahmudul Hasan",
  },
  {
    id: 6,
    location: "ঢাকা",
    image: "/assets/images/doctor kk/doctor-din-islam-mithu.jpg",
    name: "Dr. Tanjina Sultana",
  },
];

const Doctors = () => {
  return (
    <Wrapper className="py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-40">
              <h3 className="heading__title">All Doctor</h3>
            </div>
          </div>
        </div>

        {/* CHAMBER CARDS */}
        <div className="row g-4 mb-5">
          {chamberData.map((item) => (
            <div className="col-lg-4 col-md-6 col-12" key={item.id}>
              <div className="chamber-card h-100">
                {/* IMAGE */}
                <div className="card-poster-wrapper">
                  <span className="location-pill">{item.location}</span>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="poster-main-img"
                    loading="lazy"
                  />
                </div>

                {/* CARD BODY */}
                <div className="chamber-body p-3 d-flex flex-column flex-grow-1">
                  <h3 className="hospital-title mb-3">{item.name}</h3>

                  {/* ACTION BUTTONS */}
                  <div className="card-actions d-flex align-items-center gap-2 mt-auto">
                    <Link
                      to="/appointment"
                      className="btn btn-serial flex-grow-1"
                    >
                      অ্যাপয়েন্টমেন্ট নিন
                    </Link>

                    <Link to="/doctors/doctor-details" className="btn-map">
                      বিস্তারিত দেখুন &#8599;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SMART GUIDE */}
        <div className="smart-guide-banner mt-4 p-3 p-md-4 d-flex align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="guide-icon-box">
              <i className="fa-solid fa-bone"></i>
            </div>

            <div>
              <h4 className="guide-title mb-1">কোন সমস্যায় সিরিয়াল নেবেন?</h4>

              <p className="guide-subtitle mb-0">
                Fracture/Trauma, Spine &amp; Back Pain, Knee/Joint,
                Shoulder/Neck, Sports Injury, Foot/Ankle, Bone Health এবং
                post-operative follow-up.
              </p>
            </div>
          </div>

          <button type="button" className="btn btn-smart-guide">
            Smart Guide
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* MAIN CARD */
  .chamber-card {
    background: #fff;
    border: 1px solid #e2ecef;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(20, 77, 94, 0.04);
    transition: 0.25s ease;
    display: flex;
    flex-direction: column;
  }

  .chamber-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(20, 77, 94, 0.09);
  }

  /* IMAGE WRAPPER */
  .card-poster-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-top: 4px solid #167b87;
    overflow: hidden;
    background: #f5f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* IMAGE HEIGHT 100% */
  .poster-main-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    transition: transform 0.3s ease;
  }

  .chamber-card:hover .poster-main-img {
    transform: scale(1.03);
  }

  /* LOCATION */
  .location-pill {
    position: absolute;
    top: 14px;
    left: 14px;
    z-index: 2;
    background: #146c78;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 14px;
    border-radius: 50px;
  }

  /* CARD BODY */
  .hospital-title {
    font-size: 19px;
    font-weight: 700;
    color: #144d5e;
  }

  /* BUTTONS */
  .btn-serial {
    flex-grow: 1;
    background: linear-gradient(90deg, #157786 0%, #0d7ee6 100%);
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    border: none;
    border-radius: 10px;

    padding: 12px 16px !important;
    line-height: 20px;
    height: auto;
    min-height: 0;

    transition:
      opacity 0.2s ease,
      transform 0.15s ease;
  }

  .btn-serial:hover {
    background: #146c78;
    color: #fff;
  }

  .btn-map {
    background: #fff;
    border: 1px solid #d5e2e8;
    color: #144d5e;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
    padding: 12px 10px;
    text-decoration: none;
    white-space: nowrap;
    transition: 0.2s ease;
  }

  .btn-map:hover {
    background: #f3f8fa;
    color: #144d5e;
  }

  /* SMART GUIDE */
  .smart-guide-banner {
    background: #fff;
    border: 1px solid #e2ecef;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(20, 77, 94, 0.03);
  }

  .guide-icon-box {
    width: 48px;
    height: 48px;
    min-width: 48px;
    background: linear-gradient(135deg, #ff7676, #f15b5b);
    color: #fff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .guide-title {
    font-size: 17px;
    font-weight: 700;
    color: #144d5e;
  }

  .guide-subtitle {
    font-size: 18px;
    color: #4f6b78;
  }

  .btn-smart-guide {
    background: #187a86;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border: 0;
    border-radius: 10px;
    padding: 8px 18px !important;
    white-space: nowrap;
  }

  .btn-smart-guide:hover {
    background: #13636d;
    color: #fff;
  }

  /* MEDIUM DEVICES */
  @media (max-width: 991.98px) {
    .hospital-title {
      font-size: 17px;
    }

    .btn-serial,
    .btn-map {
      font-size: 13px;
    }
  }

  /* SMALL DEVICES */
  @media (max-width: 767.98px) {
    .smart-guide-banner {
      flex-direction: column;
      align-items: stretch !important;
    }

    .btn-smart-guide {
      width: 100%;
    }
  }

  /* EXTRA SMALL DEVICES */
  @media (max-width: 575.98px) {
    .hospital-title {
      min-height: auto;
      font-size: 18px;
    }

    .card-actions {
      flex-wrap: nowrap;
    }

    .btn-serial,
    .btn-map {
      font-size: 12px;
      padding: 9px 8px;
    }

    .guide-title {
      font-size: 16px;
    }

    .guide-subtitle {
      font-size: 13px;
    }
  }
`;

export default Doctors;
