import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaRegCircle,
  FaHeartbeat,
  FaPlus,
  FaGem,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

// PATIENT GUIDELINE DATA
const patientGuidelineData = [
  {
    id: 1,
    icon: <FaRegCircle />,
    title: "হাঁটু ও জয়েন্ট ব্যথা",
    description: "ব্যথা, ফোলা, শক্ত হয়ে যাওয়া বা চলাচলে সমস্যা",
  },
  {
    id: 2,
    icon: <FaHeartbeat />,
    title: "স্পাইন ও কোমর ব্যথা",
    description: "কোমর ব্যথা, সায়াটিকা বা পায়ে ব্যথা ছড়িয়ে যাওয়া",
  },
  {
    id: 3,
    icon: <FaPlus />,
    title: "ফ্র্যাকচার ও ট্রমা",
    description: "দুর্ঘটনা, হাড় ভাঙা, আঘাতের পর ফোলা ও ব্যথা",
  },
  {
    id: 4,
    icon: <FaGem />,
    title: "ঘাড় ও কাঁধের সমস্যা",
    description: "ঘাড়ে টান, কাঁধে ব্যথা বা হাত তুলতে অসুবিধা",
  },
  {
    id: 5,
    icon: <FaExternalLinkAlt />,
    title: "স্পোর্টস ইনজুরি",
    description: "লিগামেন্ট, টেন্ডন ও খেলাধুলাজনিত আঘাত",
  },
  {
    id: 6,
    icon: <FaStar />,
    title: "হাড়ের ক্ষয় ও দুর্বলতা",
    description: "অস্টিওপোরোসিস ও বয়সজনিত হাড়ের সমস্যা",
  },
];

const PatientGraidline = () => {
  return (
    <Wrapper className="py-5">
      <div className="container section-wrapper">
        {/* SECTION HEADER */}
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div>
            <span className="badge-pill">রোগীর জন্য দ্রুত গাইড</span>

            <h2 className="main-title">
              যেসব সমস্যায় বিশেষজ্ঞের পরামর্শ নেবেন
            </h2>

            <p className="sub-title">
              আপনার লক্ষণের সাথে মিল থাকলে সময় নির্বাচন করে সরাসরি সিরিয়াল
              নিতে পারেন।
            </p>
          </div>

          <Link to="#" className="see-all-link text-nowrap mt-1">
            সব সেবা দেখুন &rarr;
          </Link>
        </div>

        {/* PATIENT GUIDELINE CARDS */}
        <div className="row g-3 mb-3">
          {patientGuidelineData.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="service-card">
                <div className="icon-box">{item.icon}</div>

                <div>
                  <h5 className="card-title-text">{item.title}</h5>

                  <p className="card-desc-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ALERT BANNER */}
        <div className="alert-banner d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="alert-icon">!</div>

            <div>
              <h6 className="alert-title">কখন দ্রুত পরামর্শ নেবেন?</h6>

              <p className="alert-desc">
                ব্যথা দীর্ঘদিন থাকলে, আঘাতের পর নড়াচড়া কঠিন হলে, হাত-পায়ে
                অবশ/ঝিনঝিন হলে অথবা কোমর থেকে পায়ে ব্যথা ছড়িয়ে গেলে
                বিশেষজ্ঞের পরামর্শ নিন।
              </p>
            </div>
          </div>

          <div>
            <Link to="#" className="btn btn-action">
              সময় নির্বাচন করুন <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// STYLES
const Wrapper = styled.section`
  .section-wrapper {
    background-color: #f0fafd;
    border: 1px solid #d4f0f7;
    border-radius: 24px;
    padding: 35px 30px;
  }

  .badge-pill {
    background-color: #d8f3f6;
    color: #0b5d66;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 6px 16px;
    border-radius: 50px;
    display: inline-block;
  }

  .main-title {
    color: #073b4c;
    font-size: 1.95rem;
    font-weight: 700;
    margin-top: 12px;
    margin-bottom: 6px;
  }

  .sub-title {
    color: #708090;
    font-size: 0.95rem;
    font-weight: 400;
  }

  .see-all-link {
    color: #007a87;
    font-weight: 600;
    text-decoration: none;
    font-size: 0.95rem;
    transition: opacity 0.2s;
  }

  .see-all-link:hover {
    color: #005a63;
    text-decoration: underline;
  }

  .service-card {
    background-color: #ffffff;
    border: 1px solid #d8edee;
    border-radius: 18px;
    padding: 16px;
    height: 100%;
    display: flex;
    align-items: center;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    cursor: pointer;
  }

  .service-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 122, 135, 0.08);
    border-color: #b1e3e7;
  }

  .icon-box {
    width: 46px;
    height: 46px;
    min-width: 46px;
    background-color: #e2f6f8;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #007a87;
    font-size: 1.25rem;
    margin-right: 14px;
  }

  .card-title-text {
    color: #073b4c;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.2;
  }

  .card-desc-text {
    color: #8395a7;
    font-size: 0.82rem;
    margin: 3px 0 0 0;
    line-height: 1.3;
  }

  .alert-banner {
    background-color: #e5f7f8;
    border: 1px solid #d0eeef;
    border-radius: 16px;
    padding: 16px 22px;
    margin-top: 10px;
  }

  .alert-icon {
    width: 44px;
    height: 44px;
    min-width: 44px;
    background-color: #008c99;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .alert-title {
    color: #073b4c;
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 2px;
  }

  .alert-desc {
    color: #708090;
    font-size: 0.85rem;
    margin: 0;
  }

  .btn-action {
    background-color: #008c99;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.95rem;
    border-radius: 12px;
    padding: 10px 22px;
    border: none;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: background-color 0.2s;
  }

  .btn-action:hover {
    background-color: #00727d;
    color: #ffffff;
  }
`;

export default PatientGraidline;
