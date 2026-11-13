import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DoctorInformation = () => {
  return (
    <Wrapper className="py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-40">
              <h3 className="heading__title">Doctor Details</h3>
            </div>
          </div>
        </div>

        <div className="doctor-card p-4 p-md-5 position-relative overflow-hidden">
          {/* Decorative Pattern */}
          <svg
            className="decorative-pattern position-absolute top-0 end-0"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M40 0 H60 L200 140 V160 Z" fill="#00b4d8" opacity="0.15" />
            <path d="M70 0 H90 L200 110 V130 Z" fill="#00b4d8" opacity="0.15" />
            <path
              d="M100 0 H120 L200 80 V100 Z"
              fill="#00b4d8"
              opacity="0.15"
            />
            <path d="M130 0 H150 L200 50 V70 Z" fill="#00b4d8" opacity="0.15" />
            <path d="M160 0 H180 L200 20 V40 Z" fill="#00b4d8" opacity="0.15" />
          </svg>

          <div className="position-relative doctor-content">
            {/* Doctor Information */}
            <div className="row align-items-center">
              {/* Doctor Image */}
              <div className="col-md-4 text-center mb-4 mb-md-0">
                <div className="avatar-wrapper position-relative mx-auto">
                  <span className="badge-plus badge-top">
                    <i className="fa-solid fa-plus"></i>
                  </span>

                  <div className="avatar-ring rounded-circle">
                    <img
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
                      alt="ডাঃ মোঃ দ্বীন ইসলাম"
                      className="avatar-img rounded-circle"
                    />
                  </div>

                  <span className="badge-plus badge-bottom">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="col-md-8">
                <div className="specialty-badge d-inline-block mb-3">
                  বিশেষজ্ঞ অর্থোপেডিক ও স্পাইন সার্জন
                </div>

                <h1 className="doctor-name text-dark fw-bold mb-2">
                  ডাঃ মোঃ দ্বীন ইসলাম
                </h1>

                <p className="doctor-degree mb-4">
                  এমবিবিএস, বিসিএস (স্বাস্থ্য), এমএস (অর্থো সার্জারি, নিটোর)
                </p>

                {/* Feature List */}
                <div className="d-flex flex-column gap-3">
                  <div className="info-pill d-flex align-items-center gap-3">
                    <div className="info-icon icon-blue">
                      <i className="fa-solid fa-bone"></i>
                    </div>
                    <span className="info-text">
                      অর্থোপেডিক ও স্পাইন সার্জারি বিশেষজ্ঞ
                    </span>
                  </div>

                  <div className="info-pill d-flex align-items-center gap-3">
                    <div className="info-icon icon-purple">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                    <span className="info-text">
                      মেডিকেল অফিসার — ন্যাশনাল ইনস্টিটিউট অব ট্রমাটোলজি অ্যান্ড
                      অর্থোপেডিক রিহ্যাবিলিটেশন (নিটোর)
                    </span>
                  </div>

                  <div className="info-pill d-flex align-items-center gap-3">
                    <div className="info-icon icon-green">
                      <i className="fa-solid fa-user-doctor"></i>
                    </div>
                    <span className="info-text text-success fw-bold">
                      ৫+ বছরের অধিক ক্লিনিক্যাল অভিজ্ঞতা
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Biography */}
            <div className="bio-box d-flex align-items-start gap-3 mt-4 mb-4 p-3 p-md-4">
              <div className="bio-icon flex-shrink-0">
                <i className="fa-solid fa-staff-snake"></i>
              </div>

              <p className="bio-text mb-0">
                <strong>ডাঃ মোঃ দ্বীন ইসলাম</strong> একজন অর্থোপেডিক ও স্পাইন
                সার্জারি বিশেষজ্ঞ যিনি ঢাকা ও কিশোরগঞ্জে চিকিৎসা প্রদান করেন।
                তাঁর শিক্ষাগত যোগ্যতা এমবিবিএস, বিসিএস (স্বাস্থ্য) ও এমএস (অর্থো
                সার্জারি, নিটোর)। তিনি ন্যাশনাল ইনস্টিটিউট অব ট্রমাটোলজি অ্যান্ড
                অর্থোপেডিক রিহ্যাবিলিটেশন (নিটোর)-এ মেডিকেল অফিসার হিসেবে কর্মরত
                এবং ৫ বছরের বেশি ক্লিনিক্যাল অভিজ্ঞতা রয়েছে। তিনি ঢাকার
                মোহাম্মদপুরে বিডিএম হাসপাতাল ও ডায়াগনস্টিক সেন্টার, কিশোরগঞ্জের
                পদ্মা জেনারেল হাসপাতাল ও মিডটাউন হাসপাতালে চেম্বার করেন। চীন,
                থাইল্যান্ড ও সুইজারল্যান্ড থেকে অপারেটিভ স্পাইন ও এন্ডোস্কোপিক
                স্পাইন সার্জারির প্রশিক্ষণ নিয়েছেন।
              </p>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-3">
              <Link to="/appointment" className="btn-appointment btn">
                <i className="fa-regular fa-id-card"></i>
                অ্যাপয়েন্টমেন্ট নিন
              </Link>

              <Link to="/services" className="btn-services btn">
                অর্থোপেডিক সেবা দেখুন &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .doctor-card {
    background: var(--bg-card);
    border: 1px solid rgba(226, 232, 240, 0.8);
    border-radius: 24px;
    box-shadow: 0 15px 45px rgba(15, 48, 71, 0.08);
  }

  .decorative-pattern {
    width: 200px;
    height: 200px;
    opacity: 0.35;
    pointer-events: none;
  }

  .doctor-content {
    z-index: 1;
  }

  .specialty-badge {
    background: #e0f7fa;
    color: #00796b;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 6px 16px;
    border-radius: 20px;
  }

  .doctor-name {
    color: var(--primary-navy);
    font-size: 2.25rem;
    line-height: 1.25;
  }

  .doctor-degree {
    color: var(--text-muted);
    font-size: 1.05rem;
    font-weight: 500;
  }

  .avatar-wrapper {
    width: 220px;
    height: 220px;
  }

  .avatar-ring {
    width: 100%;
    height: 100%;
    padding: 6px;
    background: linear-gradient(135deg, #00b4d8, #48cae4 40%, #0077b6);
    box-shadow: 0 10px 25px rgba(0, 180, 216, 0.3);
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 4px solid #fff;
    background: #f8fafc;
  }

  .badge-plus {
    position: absolute;
    width: 32px;
    height: 32px;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #48cae4;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    z-index: 2;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .badge-top {
    top: 15px;
    left: 5px;
  }

  .badge-bottom {
    bottom: 25px;
    right: 0;
    background: #00b4d8;
  }

  .info-pill {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 14px 20px;
    transition: all 0.2s ease-in-out;
  }

  .info-pill:hover {
    background: #fff;
    border-color: #cbd5e1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  }

  .info-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .icon-blue {
    background: #e0f2fe;
    color: #0284c7;
  }

  .icon-purple {
    background: #f3e8ff;
    color: #9333ea;
  }

  .icon-green {
    background: #dcfce7;
    color: #16a34a;
  }

  .info-text {
    font-size: 1.02rem;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.4;
  }

  .bio-box {
    background: #f0fdfa;
    border: 1px solid #ccfbf1;
    border-radius: 16px;
  }

  .bio-icon {
    width: 38px;
    height: 38px;
    background: #0d9488;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin-top: 2px;
  }

  .bio-text {
    color: #334155;
    font-size: 0.98rem;
    line-height: 1.7;
    text-align: justify;
  }

  .bio-text strong {
    color: #0f172a;
    font-weight: 700;
  }

  .btn-appointment,
  .btn-services {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 24px;
    border-radius: 10px;
    font-size: 0.98rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .btn-appointment {
    background: #008080;
    color: #fff;
    border: 1px solid #008080;
  }

  .btn-appointment:hover {
    background: #006666;
    color: #fff;
    transform: translateY(-1px);
  }

  .btn-services {
    background: #fff;
    color: #008080;
    border: 1.5px solid #008080;
  }

  .btn-services:hover {
    background: #f0fdfa;
    color: #005959;
    border-color: #005959;
    transform: translateY(-1px);
  }

  @media (max-width: 767.98px) {
    .doctor-card {
      border-radius: 18px;
    }

    .doctor-name {
      font-size: 1.75rem;
      text-align: center;
    }

    .specialty-badge {
      display: table !important;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    .doctor-degree {
      font-size: 0.95rem;
      text-align: center;
    }

    .avatar-wrapper {
      width: 180px;
      height: 180px;
      margin-bottom: 20px;
    }
  }
`;

export default DoctorInformation;
