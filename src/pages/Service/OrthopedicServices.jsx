import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// ORTHOPEDIC SERVICES DATA
const services = [
  {
    id: 1,
    category: "FRACTURE & TRAUMA",
    title: "Fracture & Trauma",
    count: "১ টি",
    bnTitle: "ফ্র্যাকচার ও ট্রমা মূল্যায়ন",
    description:
      "পরে যাওয়া, সড়ক দুর্ঘটনা, হাড় ভাঙা, জোড় সরে যাওয়া ও আঘাতের অর্থোপেডিক মূল্যায়ন।",
    doctor: "Dr Deen Spine Care",
  },
  {
    id: 2,
    category: "SPINE CARE",
    title: "Spine Care",
    count: "১ টি",
    bnTitle: "স্পাইন ও কোমর ব্যথা",
    description:
      "কোমর ব্যথা, সায়াটিকা, ঘাড় ব্যথা ও স্পাইন-সম্পর্কিত সমস্যার মূল্যায়ন ও ফলোআপ।",
    doctor: "Dr Deen Spine Care",
  },
  {
    id: 3,
    category: "KNEE & JOINT",
    title: "Knee & Joint",
    count: "১ টি",
    bnTitle: "হাঁটু ও জয়েন্ট ব্যথা",
    description:
      "হাঁটু, হিপ ও অন্যান্য জয়েন্টের ব্যথা, অস্টিওআর্থ্রাইটিস ও চলাফেরার সমস্যা।",
    doctor: "Dr Deen Spine Care",
  },
  {
    id: 4,
    category: "UPPER LIMB",
    title: "Upper Limb",
    count: "১ টি",
    bnTitle: "কাঁধ, ঘাড় ও হাতের সমস্যা",
    description:
      "Frozen shoulder, কাঁধের ব্যথা, কনুই, কবজি ও হাতের আঘাত/ব্যথার মূল্যায়ন।",
    doctor: "Dr Deen Spine Care",
  },
];

const OrthopedicServices = () => {
  return (
    <Wrapper className="pt-0 pb-5">
      <div className="container mt-0 pt-0">
        <div className="service-header mb-4 pb-2">
          <h1 className="page-title pb-0 pt-5 mb-2">অর্থোপেডিক সেবাসমূহ</h1>

          <div className="header-subtitle-row">
            <p className="page-subtitle mb-0">
              সমস্যার ধরন অনুযায়ী প্রয়োজনীয়{" "}
              <span className="en-font">care category</span> নির্বাচন করুন
            </p>

            <span className="main-badge">১২ টি সেবা</span>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-12 col-lg-6" key={service.id}>
              <div className="service-card-outer">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="card-header-title">{service.title}</h2>

                  <span className="count-badge">{service.count}</span>
                </div>

                <div className="service-card-inner">
                  <span className="category-tag">{service.category}</span>

                  <h3 className="bn-card-title">{service.bnTitle}</h3>

                  <p className="bn-card-desc">{service.description}</p>

                  <div className="dashed-divider"></div>

                  {/* CARD FOOTER */}
                  <div className="d-flex justify-content-between align-items-center pt-1">
                    <span className="doctor-subtext en-font">
                      {service.doctor}
                    </span>

                    <Link to="/doctors" className="btn-serial">
                      সিরিয়াল নিন &rarr;
                    </Link>
                  </div>
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
  .service-header {
    width: 100%;
  }

  .page-title {
    color: #084d53;
    font-weight: 700;
    font-size: 29.6px;
    letter-spacing: -0.02em;
  }

  .header-subtitle-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 15px;
  }

  .page-subtitle {
    color: #6b7c85;
    font-size: 15.2px;
    font-weight: 500;
    line-height: 1.6;
    margin: 0;
  }

  .en-font {
    font-family: "Inter", sans-serif;
  }

  /* MAIN COUNTER BADGE */

  .main-badge {
    background-color: #e2f7f4;
    color: #0b7875;
    font-weight: 600;
    font-size: 14.4px;
    padding: 7.2px 16px;
    border-radius: 50rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* OUTER SERVICE CARD */

  .service-card-outer {
    background-color: #ffffff;
    border: 1px solid #e3eded;
    border-radius: 18.4px;
    position: relative;
    padding: 21.6px;
    box-shadow: 0 4px 20px rgba(8, 77, 83, 0.03);
    overflow: hidden;
    height: 100%;
    transition: box-shadow 0.2s ease;
  }

  .service-card-outer:hover {
    box-shadow: 0 8px 28px rgba(8, 77, 83, 0.07);
  }

  /* LEFT ACCENT BAR */

  .service-card-outer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 6px;
    background-color: #008c8e;
    border-top-left-radius: 18.4px;
    border-bottom-left-radius: 18.4px;
  }

  /* CARD HEADER */

  .card-header-title {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 21.6px;
    color: #123038;
    margin: 0;
  }

  /* ITEM COUNT BADGE */

  .count-badge {
    background-color: #e2f7f4;
    color: #0b7875;
    font-weight: 600;
    font-size: 13.2px;
    padding: 4px 10.4px;
    border-radius: 50rem;
  }

  /* INNER CARD */

  .service-card-inner {
    background-color: #ffffff;
    border: 1px solid #e3eded;
    border-radius: 14.4px;
    padding: 20px;
    margin-top: 16px;
  }

  /* CATEGORY TAG */

  .category-tag {
    font-family: "Inter", sans-serif;
    font-size: 10.88px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #0b7875;
    background-color: #e2f7f4;
    padding: 4px 9.6px;
    border-radius: 50rem;
    display: inline-block;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  /* BENGALI TITLE */

  .bn-card-title {
    font-weight: 700;
    font-size: 20px;
    color: #123038;
    margin-bottom: 6.4px;
    line-height: 1.3;
  }

  /* BENGALI DESCRIPTION */

  .bn-card-desc {
    color: #6b7c85;
    font-size: 14.72px;
    line-height: 1.55;
    margin-bottom: 17.6px;
    min-height: 44.8px;
  }

  /* DASHED SEPARATOR */

  .dashed-divider {
    border-top: 1px dashed #e2e8f0;
    margin-bottom: 16px;
  }

  /* FOOTER TEXT */

  .doctor-subtext {
    color: #8a99a3;
    font-size: 13.12px;
    font-weight: 500;
  }

  /* ACTION BUTTON */

  .btn-serial {
    background-color: #008c8e;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    padding: 7.2px 17.6px;
    border-radius: 8.8px;
    border: none;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5.6px;
    transition:
      background-color 0.2s ease,
      transform 0.1s ease;
  }

  .btn-serial:hover {
    background-color: #057274;
    color: #ffffff;
  }

  .btn-serial:active {
    transform: scale(0.98);
  }

  /* RESPONSIVE DESIGN */

  @media (max-width: 576px) {
    .page-title {
      font-size: 24px;
    }

    .page-subtitle {
      font-size: 13px;
    }

    .header-subtitle-row {
      gap: 8px;
    }

    .main-badge {
      font-size: 12px;
      padding: 6px 10px;
    }

    .service-card-outer {
      padding: 16px;
    }

    .service-card-inner {
      padding: 16px;
    }

    .bn-card-desc {
      min-height: auto;
    }

    .card-header-title {
      font-size: 18px;
    }
  }
`;

export default OrthopedicServices;
