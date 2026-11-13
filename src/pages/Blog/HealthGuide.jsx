import React from "react";
import styled from "styled-components";

const HealthGuide = () => {
  return (
    <Wrapper className="py-3">
      <div className="container">
        {/* TOP BANNER CARD */}
        <div className="hero-card p-4 p-md-5 mb-3">
          <span className="edu-badge d-inline-block mb-3">
            PATIENT EDUCATION
          </span>

          <h1 className="hero-title fw-bold mb-3">Orthopedic Health Guide</h1>

          <p className="hero-desc mb-0">
            হাড়-জোড়, স্পাইন, আঘাত, recovery এবং রোগী-শিক্ষামূলক গুরুত্বপূর্ণ
            বিষয়গুলো এখানে সাজানো আছে। ব্যক্তিগত উপসর্গ থাকলে{" "}
            <strong>Ortho Smart Guide</strong> ব্যবহার করে কখন দ্রুত চিকিৎসা
            দরকার তা দেখে নিতে পারেন।
          </p>
        </div>

        {/* BOTTOM NOTE CARD */}
        <div className="disclaimer-card p-3 p-md-4">
          <p className="disclaimer-text mb-0">
            হাড়-জোড়, স্পাইন, আঘাত ও পুনর্বাসন বিষয়ে রোগী ও পরিবারের জন্য সহজ
            স্বাস্থ্যতথ্য। এগুলো সাধারণ শিক্ষামূলক তথ্য; ব্যক্তিগত রোগ নির্ণয় বা
            চিকিৎসার বিকল্প নয়।
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero-card {
    background: linear-gradient(135deg, #f3f9fd 0%, #eef7fc 100%);
    border: 1px solid #d5ebf6;
    border-radius: 26px;
    box-shadow: 0 12px 32px rgba(15, 76, 92, 0.04);
  }

  .edu-badge {
    background: #e4f5f0;
    border: 1px solid #c6e9df;
    color: #0b7a75;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.7px;
    padding: 8px 17px;
    border-radius: 999px;
  }

  .hero-title {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 40px;
    color: #0d4656;
    letter-spacing: -0.8px;
    line-height: 1.2;
  }

  .hero-desc {
    font-size: 17px;
    line-height: 30px;
    color: #4a5b6c;
  
  }

  .hero-desc strong {
    font-family: "Plus Jakarta Sans", sans-serif;
    color: #3d4f60;
    font-weight: 700;
  }

  .disclaimer-card {
    background: #fff;
    border: 1px solid #dfeef5;
    border-radius: 22px;
    box-shadow: 0 8px 24px rgba(15, 76, 92, 0.035);
  }

  .disclaimer-text {
    font-size: 16px;
    line-height: 27px;
    color: #475569;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 32px;
    }

    .hero-desc {
      font-size: 16px;
      line-height: 27px;
    }
  }

  @media (max-width: 576px) {
    .hero-card {
      border-radius: 20px;
    }

    .edu-badge {
      font-size: 11px;
    }

    .hero-title {
      font-size: 27px;
    }

    .hero-desc {
      font-size: 15px;
      line-height: 26px;
    }

    .disclaimer-card {
      border-radius: 18px;
    }

    .disclaimer-text {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export default HealthGuide;
