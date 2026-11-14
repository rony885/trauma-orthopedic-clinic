

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
