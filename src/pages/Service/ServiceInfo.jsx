import React from "react";
import { LuSparkles } from "react-icons/lu";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ServiceInfo = () => {
  return (
    <Wrapper className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-40">
              <h3 className="heading__title">Services</h3>
            </div>
          </div>
        </div>

        {/* Main Services Card */}
        <div className="main-services-card p-3 p-md-4 p-lg-5">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="top-badge d-inline-block mb-3">
                DR DEEN SPINE CARE • PROFESSIONAL CARE
              </div>

              <h1 className="service-title fw-bold mb-3">সেবাসমূহ</h1>

              <p className="service-description mb-4">
                ফ্র্যাকচার ও ট্রমা, স্পাইন, হাঁটু-জয়েন্ট, কাঁধ-ঘাড়, স্পোর্টস
                ইনজুরি, Foot & Ankle, Bone Health এবং post-operative
                follow-up—সব অর্থোপেডিক care area এক জায়গায় সুন্দরভাবে সাজানো
                হয়েছে, যাতে রোগী খুব সহজে নিজের প্রয়োজনীয় সেবা খুঁজে নিতে পারেন।
              </p>

              {/* Feature Tags */}
              <div className="d-flex flex-row flex-nowrap gap-2 mb-3 feature-pill-group">
                <div className="feature-pill">
                  <span className="check">✓</span>
                  Fracture & Trauma
                </div>

                <div className="feature-pill">
                  <span className="check">✓</span>
                  Spine & Joint Care
                </div>

                <div className="feature-pill">
                  <span className="check">✓</span>
                  Follow-up Support
                </div>
              </div>

              {/* Contact Information */}
              <div className="contact-info-box p-3 mt-4 mb-4">
                <div className="contact-info-line mb-2">
                  <span className="contact-info-label">সিরিয়াল / যোগাযোগ:</span>{" "}
                  01326252526, 01719-183524
                </div>

                <div className="contact-info-line">
                  <span className="contact-info-label">ঠিকানা:</span>{" "}
                  drdeenspinecare.com
                </div>
              </div>

              <Link to="/doctors" className="btn btn-teal">
                অ্যাপয়েন্টমেন্ট নিন
              </Link>
            </div>

            {/* Right Image Grid */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="image-grid">
                <div className="grid-card">
                  <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop"
                    alt="Operation Room"
                  />
                  <span className="img-overlay-tag">Operation</span>
                </div>

                <div className="grid-card">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                    alt="Doctor Consultation"
                  />
                  <span className="img-overlay-tag">X-ray</span>
                </div>

                <div className="grid-card">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                    alt="Care Team"
                  />
                  <span className="img-overlay-tag">Care</span>
                </div>

                <div className="grid-card">
                  <div className="recovery-quad-grid">
                    <img
                      src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=300&auto=format&fit=crop"
                      alt="Treatment 1"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=300&auto=format&fit=crop"
                      alt="Treatment 2"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=300&auto=format&fit=crop"
                      alt="Scan X-Ray"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=300&auto=format&fit=crop"
                      alt="Recovery Care"
                    />
                  </div>

                  <span className="img-overlay-tag">Recovery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-smart-banner d-flex align-items-center justify-content-between gap-3 flex-wrap p-3 p-md-4 mt-3">
          <div className="d-flex align-items-center gap-3 banner-content">
            <div className="coral-icon-box flex-shrink-0">
              <LuSparkles />
            </div>

            <div>
              <h2 className="bottom-banner-title">
                সঠিক care area বুঝতে পারছেন না?
              </h2>

              <p className="bottom-banner-desc">
                Ortho Smart Guide-এ ব্যথার জায়গা ও red flag নির্বাচন করুন। এটি
                diagnosis নয়, তবে জরুরি অবস্থার সতর্কতা ও appointment guidance
                দেয়।
              </p>
            </div>
          </div>

          <Link to="/ortho-smart" className="btn btn-teal text-nowrap">
            Ortho Smart
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-services-card {
    background: #ebf6f8;
    border: 1px solid #d4eaf0;
    border-radius: 28px;
    box-shadow: 0 12px 35px rgba(11, 132, 148, 0.05);
  }

  .top-badge {
    background: #d7f0f4;
    color: #0e7490;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 0.45rem 1.1rem;
    border-radius: 50px;
  }

  .service-title {
    color: #0d3b48;
    font-size: 2.75rem;
    line-height: 1.2;
  }

  .service-description {
    color: #58707a;
    font-size: 0.98rem;
    line-height: 1.65;
    font-weight: 500;
  }

  /* Feature Tags */
  .feature-pill-group {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: thin;
  }

  .feature-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    gap: 0.4rem;
    background: #fff;
    color: #0d3b48;
    border: 1px solid #dcebee;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    font-weight: 600;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
    transition: all 0.2s ease;
  }

  .feature-pill:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  .feature-pill .check {
    color: #0b8494;
    font-weight: 700;
  }

  .contact-info-box {
    background: #fff;
    border: 1px solid #e0eff2;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(11, 132, 148, 0.03);
  }

  .contact-info-line {
    color: #0d3b48;
    font-size: 0.95rem;
    font-weight: 500;
  }

  .contact-info-label {
    font-weight: 700;
    color: #0d3b48;
  }

  .btn-teal {
    background: #0b8494;
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 0.75rem 1.8rem;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px rgba(11, 132, 148, 0.25);
  }

  .btn-teal:hover {
    background: #086b78;
    color: #fff;
    box-shadow: 0 6px 16px rgba(11, 132, 148, 0.35);
    transform: translateY(-1px);
  }

  /* Image Grid */
  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    height: 100%;
  }

  .grid-card {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    background: #e2f1f4;
    min-height: 180px;
  }

  .grid-card > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }

  .img-overlay-tag {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background: rgba(11, 59, 72, 0.85);
    backdrop-filter: blur(4px);
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.8rem;
    border-radius: 6px;
  }

  .recovery-quad-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    height: 100%;
    width: 100%;
  }

  .recovery-quad-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Bottom Smart Banner */
  .bottom-smart-banner {
    background: #ebf6f8;
    border: 1px solid #d4eaf0;
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(11, 132, 148, 0.04);
  }

  .coral-icon-box {
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, #ff6b6b, #ff5252);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.35rem;
    box-shadow: 0 4px 12px rgba(255, 94, 98, 0.3);
  }

  .bottom-banner-title {
    color: #0d3b48;
    font-weight: 700;
    font-size: 1.15rem;
    margin-bottom: 0.2rem;
  }

  .bottom-banner-desc {
    color: #58707a;
    font-size: 0.86rem;
    font-weight: 500;
    line-height: 1.45;
    margin: 0;
  }

  /* Responsive Design */
  @media (max-width: 991.98px) {
    .service-title {
      font-size: 2.2rem;
    }

    .grid-card {
      min-height: 160px;
    }
  }

  @media (max-width: 575.98px) {
    .feature-pill {
      padding: 0.45rem 0.7rem;
      font-size: 0.75rem;
    }

    .bottom-smart-banner {
      flex-direction: column;
      text-align: center;
    }

    .banner-content {
      flex-direction: column;
    }

    .btn-teal {
      width: 100%;
    }
  }
`;

export default ServiceInfo;
