// import React from "react";
// import styled from "styled-components";
// import { FaBone, FaPlus, FaUserMd } from "react-icons/fa";
// import { GiKneeCap, GiRunningNinja } from "react-icons/gi";
// import { FaPerson } from "react-icons/fa6";

// const HealthInfographics = () => {
//   return (
//     <Wrapper className="py-0">
//       <div className="container py-4">
//         {/* HEADER SECTION */}
//         <div className="info-header-banner mb-4 p-4">
//           <h1 className="info-header-title mb-2">
//             স্বাস্থ্য তথ্য ও ইনফোগ্রাফিক্স
//           </h1>
//           <p className="info-header-subtitle mb-0">
//             হাড়-জোড়, স্পাইন, আঘাত ও পুনর্বাসন বিষয়ে রোগী ও পরিবারের জন্য সাজানো
//             তথ্যকথা, গ্রাফিক্স ও পরামর্শ। এগুলো সাধারণ শিক্ষামূলক তথ্য;
//             ব্যক্তিগত রোগ নির্ণয় বা চিকিৎসার বিকল্প নয়।
//           </p>
//         </div>

//         {/* HEALTH CARDS */}
//         <div className="row g-4">
//           {/* CARD 1: FRACTURE */}
//           <div className="col-12 col-md-6 col-lg-4">
//             <div className="health-card h-100">
//               {/* <div className="card-visual-top bg-teal">
//                 <div className="circle-dec-1"></div>
//                 <div className="circle-dec-2"></div>

//                 <span className="top-visual-banner-title">
//                   <i className="fa-solid fa-bone me-1"></i>
//                   ফ্র্যাকচার সন্দেহ হলে কী করবেন
//                 </span>

//                 <svg className="graphic-svg" width="110" height="110"
//                   viewBox="0 0 120 120" fill="none">
//                   <rect x="25" y="55" width="70" height="10" rx="5"
//                     fill="#0f5953" opacity="0.8" />
//                   <rect x="35" y="42" width="50" height="36" rx="6"
//                     fill="#14b8a6" opacity="0.3"
//                     stroke="#0f5953" strokeWidth="2" />
//                   <path d="M40 30L80 90" stroke="#ef4444"
//                     strokeWidth="4" strokeDasharray="4 4" />
//                   <circle cx="60" cy="60" r="18" fill="#ffffff"
//                     stroke="#0f5953" strokeWidth="3" />
//                   <path d="M54 60H66M60 54V66" stroke="#ef4444"
//                     strokeWidth="3" strokeLinecap="round" />
//                 </svg>
//               </div> */}
//               <div className="card-visual-top bg-teal">
//                 <div className="circle-dec-1"></div>
//                 <div className="circle-dec-2"></div>

//                 <span className="top-visual-banner-title">
//                   <FaBone className="me-1" />
//                   ফ্র্যাকচার সন্দেহ হলে কী করবেন
//                 </span>

//                 <div className="graphic-svg fracture-icon">
//                   <FaBone className="bone-icon" />
//                   <FaPlus className="plus-icon" />
//                 </div>
//               </div>

//               <div className="card-body-content">
//                 <h2 className="card-main-title">
//                   ফ্র্যাকচার সন্দেহ হলে কী করবেন
//                 </h2>
//                 <p className="card-description">
//                   আঘাতের পর অঙ্গ বেঁকে যাওয়া, তীব্র ফোলা, অস্বাভাবিক নড়াচড়া বা
//                   ভর নিতে না পারলে fracture থাকতে পারে। অঙ্গকে যতটা সম্ভব স্থির
//                   রাখুন, জোর করে সোজা করবেন না। খোলা ক্ষত/রক্তপাত বা রক্ত চলাচল
//                   কমে যাওয়ার লক্ষণ থাকলে জরুরি বিভাগে যান।
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* CARD 2: SPINE CARE */}
//           <div className="col-12 col-md-6 col-lg-4">
//             <div className="health-card h-100">
//               <div className="card-visual-top bg-lavender">
//                 <div className="circle-dec-1"></div>
//                 <div className="circle-dec-2"></div>

//                 <div className="spine-care-icon-box d-flex align-items-center justify-content-center mb-2">
//                   <FaUserMd />
//                 </div>

//                 <div className="visual-label">Spine Care</div>
//               </div>

//               <div className="card-body-content">
//                 <h2 className="card-main-title">কোমর ব্যথার জরুরি সতর্কতা</h2>
//                 <p className="card-description">
//                   কোমর ব্যথার সাথে নতুন পা দুর্বল/অবশ হওয়া, saddle area অবশ
//                   হওয়া, প্রস্রাব-পায়খানা নিয়ন্ত্রণে সমস্যা, বড় আঘাত বা জ্বর
//                   থাকলে দ্রুত জরুরি মূল্যায়ন দরকার।
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* CARD 3: KNEE CARE */}
//           <div className="col-12 col-md-6 col-lg-4">
//             <div className="health-card h-100">
//               <div className="card-visual-top bg-teal">
//                 <div className="circle-dec-1"></div>
//                 <div className="circle-dec-2"></div>

//                 <span className="top-visual-banner-title">
//                   <i className="fa-solid fa-notes-medical me-1"></i>
//                   হাঁটুর অস্টিওআর্থ্রাইটিসে দৈনন্দিন যত্ন
//                 </span>

//                 <GiKneeCap className="graphic-svg" size={100} color="#0f5953" />
//               </div>

//               <div className="card-body-content">
//                 <h2 className="card-main-title">
//                   হাঁটুর অস্টিওআর্থ্রাইটিসে দৈনন্দিন যত্ন
//                 </h2>
//                 <p className="card-description">
//                   ওজন নিয়ন্ত্রণ, নিয়মিত low-impact exercise, quadriceps
//                   strengthening এবং অতিরিক্ত strain এড়িয়ে চলা অনেক রোগীর জন্য
//                   সহায়ক। ব্যথা বা ফোলা বাড়লে ব্যক্তিভেদে পরিকল্পনা বদলাতে হয়—
//                   চিকিৎসকের পরামর্শ নিন।
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* CARD 4: SPORTS INJURY */}
//           <div className="col-12 col-md-6 col-lg-4">
//             <div className="health-card h-100">
//               <div className="card-visual-top bg-cyan">
//                 <div className="circle-dec-1"></div>
//                 <div className="circle-dec-2"></div>

//                 <GiRunningNinja
//                   className="graphic-svg mb-2"
//                   size={80}
//                   color="#0284c7"
//                 />

//                 <div className="visual-label">Sports Injury</div>
//               </div>

//               <div className="card-body-content">
//                 <h2 className="card-main-title">
//                   খেলাধুলার আঘাতে প্রথম পদক্ষেপ
//                 </h2>
//                 <p className="card-description">
//                   প্রথম দিকে আক্রান্ত অংশকে সুরক্ষা ও বিশ্রাম দিন। অতিরিক্ত
//                   ব্যথা, তীব্র ফোলা, joint instability, শব্দসহ আঘাত বা ভর নিতে
//                   না পারলে ligament/fracture মূল্যায়নের জন্য চিকিৎসা নিন।
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* CARD 5: BONE HEALTH */}
//           <div className="col-12 col-md-6 col-lg-4">
//             <div className="health-card h-100">
//               <div className="card-visual-top bg-mint">
//                 <div className="circle-dec-1"></div>
//                 <div className="circle-dec-2"></div>

//                 <FaBone
//                   className="graphic-svg mb-2"
//                   size={75}
//                   color="#f1f4f8"
//                 />

//                 <div className="visual-label">Bone Health</div>
//               </div>

//               <div className="card-body-content">
//                 <h2 className="card-main-title">
//                   হাড় ক্ষয় প্রতিরোধ ও Osteoporosis
//                 </h2>
//                 <p className="card-description">
//                   বয়স, menopause, steroid use, আগের low-trauma fracture ও
//                   অন্যান্য ঝুঁকি অনুযায়ী osteoporosis screening প্রয়োজন হতে
//                   পারে। খাদ্য, ভিটামিন D, resistance/weight-bearing exercise ও
//                   ওষুধের সিদ্ধান্ত চিকিৎসকের সাথে নিন।
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* CARD 6: NECK & SHOULDER */}
//           <div className="col-12 col-md-6 col-lg-4">
//             <div className="health-card h-100">
//               <div className="card-visual-top bg-slate">
//                 <div className="circle-dec-1"></div>
//                 <div className="circle-dec-2"></div>

//                 <span className="top-visual-banner-title">
//                   <i className="fa-solid fa-user-doctor me-1"></i>
//                   ঘাড়-কাঁধ ব্যথা ও কাজের ভঙ্গি
//                 </span>

//                 <FaPerson className="graphic-svg" size={90} color="#0f5953" />
//               </div>

//               <div className="card-body-content">
//                 <h2 className="card-main-title">
//                   ঘাড়-কাঁধ ব্যথা ও কাজের ভঙ্গি
//                 </h2>
//                 <p className="card-description">
//                   দীর্ঘ সময় একই ভঙ্গিতে বসা, অনুপযুক্ত workstation ও repeated
//                   overhead activity ঘাড়-কাঁধের ব্যথা বাড়াতে পারে। বিরতি, posture
//                   correction ও উপসর্গ অনুযায়ী exercise সহায়ক হতে পারে।
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   /* HEADER */
//   .info-header-banner {
//     background: #edf7f6;
//     border: 1px solid #d2eae6;
//     border-radius: 16px;
//   }

//   .info-header-title {
//     color: #0f5953;
//     font-size: 28px;
//     font-weight: 700;
//     line-height: 1.2;
//   }

//   .info-header-subtitle {
//     color: #527473;
//     font-size: 15px;
//     font-weight: 500;
//     line-height: 1.5;
//   }

//   /* CARD */
//   .health-card {
//     background: #fff;
//     border: 1px solid #e9eff2;
//     border-radius: 20px;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//     transition:
//       transform 0.25s ease,
//       box-shadow 0.25s ease;
//   }

//   .health-card:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 12px 24px -8px rgba(15, 89, 83, 0.12);
//   }

//   /* CARD VISUAL */
//   .card-visual-top {
//     height: 220px;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     overflow: hidden;
//   }

//   /* BACKGROUND COLORS */
//   .bg-teal {
//     background: linear-gradient(135deg, #f0f7f6, #e6f3f1);
//   }

//   .bg-lavender {
//     background: linear-gradient(135deg, #eeeefb, #e4e4f9);
//   }

//   .bg-cyan {
//     background: linear-gradient(135deg, #eaf6f7, #e0f2f4);
//   }

//   .bg-mint {
//     background: linear-gradient(135deg, #ecf7f4, #dff2ec);
//   }

//   .bg-slate {
//     background: linear-gradient(135deg, #f1f5f9, #e8edf3);
//   }

//   /* DECORATIVE CIRCLES */
//   .circle-dec-1,
//   .circle-dec-2 {
//     position: absolute;
//     border-radius: 50%;
//     pointer-events: none;
//     background: rgba(255, 255, 255, 0.6);
//   }

//   .circle-dec-1 {
//     width: 140px;
//     height: 140px;
//     top: -30px;
//     right: -30px;
//   }

//   .circle-dec-2 {
//     width: 180px;
//     height: 180px;
//     bottom: -50px;
//     left: -40px;
//     background: rgba(255, 255, 255, 0.5);
//   }

//   /* SPINE ICON */
//   .spine-care-icon-box {
//     width: 72px;
//     height: 72px;
//     background: #2b2b48;
//     border-radius: 16px;
//     box-shadow: 0 8px 16px rgba(43, 43, 72, 0.2);
//     z-index: 2;
//   }

//   .visual-label {
//     color: #2b2b48;
//     font-size: 1.15rem;
//     font-weight: 700;
//     letter-spacing: -0.2px;
//     z-index: 2;
//   }

//   /* CARD CONTENT */
//   .card-body-content {
//     padding: 22px 20px;
//     flex-grow: 1;
//   }

//   .card-main-title {
//     color: #0f5953;
//     font-size: 1.25rem;
//     font-weight: 700;
//     line-height: 1.35;
//     margin-bottom: 10px;
//   }

//   .card-description {
//     color: #556968;
//     font-size: 0.92rem;
//     font-weight: 400;
//     line-height: 1.6;
//     margin-bottom: 0;
//   }

//   /* TOP TITLE */
//   .top-visual-banner-title {
//     position: absolute;
//     top: 18px;
//     left: 18px;
//     color: #0f5953;
//     font-size: 1.1rem;
//     font-weight: 700;
//     opacity: 0.9;
//     z-index: 2;
//   }

//   /* SVG */
//   .graphic-svg {
//     filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.06));
//     z-index: 2;
//   }

//   /* ==== icon css ==== */
//   .fracture-icon {
//     position: relative;
//     width: 110px;
//     height: 110px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .fracture-icon .bone-icon {
//     font-size: 85px;
//     color: #0f5953;
//     transform: rotate(-35deg);
//   }

//   .fracture-icon .plus-icon {
//     position: absolute;
//     top: 42px;
//     left: 43px;
//     font-size: 22px;
//     color: #ef4444;
//     background: #ffffff;
//     border-radius: 50%;
//     padding: 4px;
//   }

//   .spine-care-icon-box {
//     width: 72px;
//     height: 72px;
//     background: #2b2b48;
//     border-radius: 16px;
//     color: #38bdf8;
//     font-size: 42px;
//     box-shadow: 0 8px 16px rgba(43, 43, 72, 0.2);
//     position: relative;
//     z-index: 2;
//   }

//   /* RESPONSIVE */
//   @media (max-width: 767px) {
//     .info-header-banner {
//       padding: 20px !important;
//     }

//     .info-header-title {
//       font-size: 24px;
//     }

//     .top-visual-banner-title {
//       font-size: 1rem;
//       left: 12px;
//     }
//   }
// `;

// export default HealthInfographics;

import React from "react";
import styled from "styled-components";

import { FaBone, FaUserMd } from "react-icons/fa";
import { GiKneeCap, GiRunningNinja } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";

// HEALTH CARD DATA
const healthCards = [
  {
    id: 1,
    title: "ফ্র্যাকচার সন্দেহ হলে কী করবেন",
    description:
      "আঘাতের পর অঙ্গ বেঁকে যাওয়া, তীব্র ফোলা, অস্বাভাবিক নড়াচড়া বা ভর নিতে না পারলে fracture থাকতে পারে। অঙ্গকে যতটা সম্ভব স্থির রাখুন, জোর করে সোজা করবেন না। খোলা ক্ষত/রক্তপাত বা রক্ত চলাচল কমে যাওয়ার লক্ষণ থাকলে জরুরি বিভাগে যান।",
    bg: "bg-teal",
    label: "ফ্র্যাকচার সন্দেহ হলে কী করবেন",
    icon: <FaBone />,
    iconClass: "fracture-icon",
  },
  {
    id: 2,
    title: "কোমর ব্যথার জরুরি সতর্কতা",
    description:
      "কোমর ব্যথার সাথে নতুন পা দুর্বল/অবশ হওয়া, saddle area অবশ হওয়া, প্রস্রাব-পায়খানা নিয়ন্ত্রণে সমস্যা, বড় আঘাত বা জ্বর থাকলে দ্রুত জরুরি মূল্যায়ন দরকার।",
    bg: "bg-lavender",
    label: "Spine Care",
    icon: <FaUserMd />,
    iconClass: "spine-care-icon",
  },
  {
    id: 3,
    title: "হাঁটুর অস্টিওআর্থ্রাইটিসে দৈনন্দিন যত্ন",
    description:
      "ওজন নিয়ন্ত্রণ, নিয়মিত low-impact exercise, quadriceps strengthening এবং অতিরিক্ত strain এড়িয়ে চলা অনেক রোগীর জন্য সহায়ক। ব্যথা বা ফোলা বাড়লে ব্যক্তিভেদে পরিকল্পনা বদলাতে হয়—চিকিৎসকের পরামর্শ নিন।",
    bg: "bg-teal",
    label: "হাঁটুর অস্টিওআর্থ্রাইটিসে দৈনন্দিন যত্ন",
    icon: <GiKneeCap />,
    iconClass: "knee-icon",
  },
  {
    id: 4,
    title: "খেলাধুলার আঘাতে প্রথম পদক্ষেপ",
    description:
      "প্রথম দিকে আক্রান্ত অংশকে সুরক্ষা ও বিশ্রাম দিন। অতিরিক্ত ব্যথা, তীব্র ফোলা, joint instability, শব্দসহ আঘাত বা ভর নিতে না পারলে ligament/fracture মূল্যায়নের জন্য চিকিৎসা নিন।",
    bg: "bg-cyan",
    label: "Sports Injury",
    icon: <GiRunningNinja />,
    iconClass: "sports-icon",
  },
  {
    id: 5,
    title: "হাড় ক্ষয় প্রতিরোধ ও Osteoporosis",
    description:
      "বয়স, menopause, steroid use, আগের low-trauma fracture ও অন্যান্য ঝুঁকি অনুযায়ী osteoporosis screening প্রয়োজন হতে পারে। খাদ্য, ভিটামিন D, resistance/weight-bearing exercise ও ওষুধের সিদ্ধান্ত চিকিৎসকের সাথে নিন।",
    bg: "bg-mint",
    label: "Bone Health",
    icon: <FaBone />,
    iconClass: "bone-health-icon",
  },
  {
    id: 6,
    title: "ঘাড়-কাঁধ ব্যথা ও কাজের ভঙ্গি",
    description:
      "দীর্ঘ সময় একই ভঙ্গিতে বসা, অনুপযুক্ত workstation ও repeated overhead activity ঘাড়-কাঁধের ব্যথা বাড়াতে পারে। বিরতি, posture correction ও উপসর্গ অনুযায়ী exercise সহায়ক হতে পারে।",
    bg: "bg-slate",
    label: "ঘাড়-কাঁধ ব্যথা ও কাজের ভঙ্গি",
    icon: <FaPerson />,
    iconClass: "person-icon",
  },
];

const HealthInfographics = () => {
  return (
    <Wrapper className="py-0">
      <div className="container py-4">
        <div className="info-header-banner mb-4 p-4">
          <h1 className="info-header-title mb-2">
            স্বাস্থ্য তথ্য ও ইনফোগ্রাফিক্স
          </h1>

          <p className="info-header-subtitle mb-0">
            হাড়-জোড়, স্পাইন, আঘাত ও পুনর্বাসন বিষয়ে রোগী ও পরিবারের জন্য সাজানো
            তথ্যকথা, গ্রাফিক্স ও পরামর্শ। এগুলো সাধারণ শিক্ষামূলক তথ্য;
            ব্যক্তিগত রোগ নির্ণয় বা চিকিৎসার বিকল্প নয়।
          </p>
        </div>

        <div className="row g-4">
          {healthCards.map((card) => (
            <div className="col-12 col-md-6 col-lg-4" key={card.id}>
              <div className="health-card h-100">
                {/* CARD VISUAL */}
                <div className={`card-visual-top ${card.bg}`}>
                  <div className="circle-dec-1"></div>
                  <div className="circle-dec-2"></div>

                  <span className="top-visual-banner-title">{card.label}</span>

                  {/* CARD ICON */}
                  <div className={`graphic-svg ${card.iconClass}`}>
                    {card.icon}
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="card-body-content">
                  <h2 className="card-main-title">{card.title}</h2>

                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .info-header-banner {
    background: #edf7f6;
    border: 1px solid #d2eae6;
    border-radius: 16px;
  }

  .info-header-title {
    color: #0f5953;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
  }

  .info-header-subtitle {
    color: #527473;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;
  }

  /* HEALTH CARD */
  .health-card {
    background: #fff;
    border: 1px solid #e9eff2;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .health-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(15, 89, 83, 0.12);
  }

  /* CARD VISUAL */
  .card-visual-top {
    height: 220px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* BACKGROUND COLORS */
  .bg-teal {
    background: linear-gradient(135deg, #f0f7f6, #e6f3f1);
  }

  .bg-lavender {
    background: linear-gradient(135deg, #eeeefb, #e4e4f9);
  }

  .bg-cyan {
    background: linear-gradient(135deg, #eaf6f7, #e0f2f4);
  }

  .bg-mint {
    background: linear-gradient(135deg, #ecf7f4, #dff2ec);
  }

  .bg-slate {
    background: linear-gradient(135deg, #f1f5f9, #e8edf3);
  }

  /* DECORATIVE CIRCLES */
  .circle-dec-1,
  .circle-dec-2 {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.6);
  }

  .circle-dec-1 {
    width: 140px;
    height: 140px;
    top: -30px;
    right: -30px;
  }

  .circle-dec-2 {
    width: 180px;
    height: 180px;
    bottom: -50px;
    left: -40px;
    background: rgba(255, 255, 255, 0.5);
  }

  /* TOP BANNER */
  .top-visual-banner-title {
    position: absolute;
    top: 18px;
    left: 18px;
    right: 18px;
    color: #0f5953;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.4;
    opacity: 0.9;
    z-index: 2;
  }

  /* COMMON ICON */
  .graphic-svg {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.06));
  }

  /* FRACTURE ICON */
  .fracture-icon {
    width: 110px;
    height: 110px;
    font-size: 85px;
    color: #0f5953;
    transform: rotate(-35deg);
  }

  /* SPINE ICON */
  .spine-care-icon {
    width: 72px;
    height: 72px;
    background: #2b2b48;
    border-radius: 16px;
    color: #38bdf8;
    font-size: 42px;
    box-shadow: 0 8px 16px rgba(43, 43, 72, 0.2);
  }

  /* KNEE ICON */
  .knee-icon {
    font-size: 100px;
    color: #0f5953;
  }

  /* SPORTS ICON */
  .sports-icon {
    font-size: 80px;
    color: #0284c7;
    margin-bottom: 8px;
  }

  /* BONE HEALTH ICON */
  .bone-health-icon {
    font-size: 75px;
    color: #f1f4f8;
    margin-bottom: 8px;
  }

  /* PERSON ICON */
  .person-icon {
    font-size: 90px;
    color: #0f5953;
  }

  /* CARD CONTENT */
  .card-body-content {
    padding: 22px 20px;
    flex-grow: 1;
  }

  .card-main-title {
    color: #0f5953;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.35;
    margin-bottom: 10px;
  }

  .card-description {
    color: #556968;
    font-size: 0.92rem;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 0;
  }

  /* RESPONSIVE */
  @media (max-width: 767px) {
    .info-header-banner {
      padding: 20px !important;
    }

    .info-header-title {
      font-size: 24px;
    }

    .top-visual-banner-title {
      font-size: 1rem;
      left: 12px;
      right: 10px;
    }

    .card-visual-top {
      height: 220px;
    }

    .card-body-content {
      padding: 20px 18px;
    }
  }
`;

export default HealthInfographics;
